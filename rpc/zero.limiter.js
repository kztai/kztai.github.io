const $rpcDef = require(global.path_zeroRPC + "/zero.rpc.def.js");
const $mSystem = require(global.dbPath + "/db.sys.js");
const $def = require(global.dbPath + "/mem.def.js");
const $public = require(global.dbPath + "/public.js");


function ZeroLimiter(bucketSize, interval, tokensPerInterval) {
    let that = this;
    this.$rpcDef = $rpcDef;
    // 令牌桶最大容量
    this.bucketSize = bucketSize;
    // 当前桶中令牌个数
    this.total = tokensPerInterval;
    // 每次投放令牌数量
    this.tokensPerInterval = tokensPerInterval;
    // 阻塞队列
    this.arrCallBack = [];
    // 阻塞队列最大值
    this.max = this.$rpcDef.serverBlockMax;
    // 阻塞标志：
    this.blocked = 0;
    // 安装定时器
    setInterval(function () {
        that.limiterTimer()
    }, interval);
}


/*
* 获取令牌是否成功
* <1>要保证先来的函数先执行，后来的后执行，即保证顺序执行
* <2>失败返回值errorCallBack(error)
     error=1: 令牌超桶的最大值
     error=2: 队列满，阻塞
* <3>成功返回值successCallBack(remaining): remaining:返回剩余令牌数
* -------------------------------------------------------------------------------------------------------------//
* */
ZeroLimiter.prototype.getToken = function (count, successCallBack, errorCallBack) {
    // 获取的令牌数超桶的最大值吗？
    if (count > this.bucketSize) {
        // 令牌超桶的最大值
        errorCallBack(this.$rpcDef.rpcError_exceed)
    } else {
        // 获取令牌
        let remaining = this.removeTokens(count);
        // 阻塞队列为空，且令牌池足够：
        if (this.arrCallBack.length === 0 && remaining !== -1) {
            if (this.$rpcDef.print) console.warn('令牌书足够：剩余' + remaining);
            successCallBack()
        } else {
            // 阻塞队列溢出吗？
            if (this.arrCallBack.length >= this.max) {
                // 阻塞
                if (this.$rpcDef.print) console.warn('令牌数不足，阻塞队列已满！');
                this.blocked = 1;
                errorCallBack(this.$rpcDef.rpcError_block)
            } else {
                if (this.$rpcDef.print) console.warn('令牌数不足，但阻塞队列未满，当前阻塞队列长度' + this.arrCallBack.length);
                // 保存申请令牌函数
                let obj = {};
                obj.count = count;
                obj.successCallBack = successCallBack;
                obj.errorCallBack = errorCallBack;
                // 进入阻塞队列
                this.arrCallBack.push(obj)
            }
        }
    }
};


/*
* 移去令牌并返回现有的令牌个数
* <1>count, 要移去的令牌个数
* <2>成功：返回剩余令牌个数，如果-1,表示移去失败
* <3>超过了最大令牌数，返回失败，直接返回错误到上层
* <4>应用层每一个回调函数要顺序执行，否则会出问题。
* <5>如果出错时，返回-1，则表示超出了桶的最大个数
* 返回结果remaining：
    remaining=返回剩余令牌, 返回成功
    remaining=-1 返回失败,令牌不足数
* -------------------------------------------------------------------------------------------------------------//
* */
ZeroLimiter.prototype.removeTokens = function (count) {
    // 有足够的令牌吗？
    if (count > this.total) {
        return -1
    } else {
        // 取出count个令牌
        this.total -= count;
        // 返回剩余令牌
        return this.total
    }
};


/*
* 限时定时器
* <1>定时产生令牌，如果令牌达到桶的最大值，溢出。
* <2>产生令牌时，检查缓冲区是否有指令，如果有，执行缓冲区中指令。
* <3>当缓冲区中空出一半空间时，向所有阻塞的发送方(建立了长连接的)发送清除阻塞消息
* <4>如果是阻塞方是终端，如果终端没有长连接，终端定时向发送方查询阻塞是否清除
* -------------------------------------------------------------------------------------------------------------//
* */
ZeroLimiter.prototype.limiterTimer = function () {
    let that = this;
    // 增加令牌数
    if(this.bucketSize >= that.total + that.tokensPerInterval) that.total += that.tokensPerInterval;
    let remaining = that.total;  // 当前剩余的令牌数
    // 循环队列
    while (that.arrCallBack.length > 0 && remaining !== -1) {
        //获取一个函数
        let obj = that.arrCallBack[0];
        //获取令牌
        remaining = that.removeTokens(obj.count);
        //有足够的令牌吗？
        if (remaining !== -1) {
            //删除一个函数
            that.arrCallBack.splice(0, 1);
            //回调剩余令牌
            obj.successCallBack()
        }
    }

    // 检查队列剩余空间
    if (that.arrCallBack.length < this.max / 2) {
        // 向所有长连接发送清除阻塞信息
        that.blocked = 0;
        that.sendClearBlockMessage()
    }
};


/*
* 发送清除阻塞消息
* <1>发送清除阻塞消息
* <2>向所有发送过阻塞消息的发送方发送消除阻塞消息
* -------------------------------------------------------------------------------------------------------------//
* */
ZeroLimiter.prototype.sendClearBlockMessage = function () {
    let client;  // 客户端
    let server;  // 服务端
    let instanceName = $def.instance_clientRpc;
    let funcName = $def.func_setBlockFlag;
    let funcPara = [global.serverAddr, 0];
    let arrIsFunc = [0, 0, 1, 1];
    let arrClientId = Object.keys(this.arrBlockClientId);
    // delete this.arrBlockClientId[arrClientId[0]];  // todo 临时添加，测试用

    for (let i = 0; i < arrClientId.length; i++) {
        //获取一个客户端
        let clientId = arrClientId[i];
        //生成回调函数
        funcPara[2] = this.getBlockCallBack(true, clientId);
        funcPara[3] = this.getBlockCallBack(false);

        //本机作为socket客户端
        client = global.serverAddr;
        server = clientId;
        let clientSocket = $mSystem.clientSocketOpenDatabase(client, server);
        // 是否建立socket?
        if (clientSocket.isConnected()) {
            //注意：是并发，不是串行
            clientSocket.clientCallServer(instanceName, funcName, funcPara, arrIsFunc, function (remoteResult) {
                // 调用回调函数
                funcPara[remoteResult.callbackIndex]();
            }, function (error) {
                console.error(error)
            })
        } else {
            //本机作为socket服务端
            client = clientId;
            server = global.serverAddr;
            // 需要获取到标准的clientId，用于判断是否建立socket连接（例：http://192.168.1.118 --> 192.168.1.118）
            clientId = $public.getTerminalServer(clientId);
            serverSocket = $mSystem.getServerSocket();
            //是否建立socket连接
            if (serverSocket.isServerConnected(clientId)) {
                //注意：是并发，不是串行
                serverSocket.serverCallClient(server, client, instanceName, funcName, funcPara, arrIsFunc, function (remoteResult) {
                    // 调用回调函数
                    funcPara[remoteResult.callbackIndex]();
                }, function (error) {
                    console.error(error)
                });
            } else {
                console.error({code:99, message: '本机' + server + '作为服务端，未与客户端' + clientId + '建立socket连接！'})
            }
        }
    }
};


/*
* 生成回调函数
* -------------------------------------------------------------------------------------------------------------//
* */
ZeroLimiter.prototype.getBlockCallBack = function (isSuccessCall, clientId) {
    let $this = this;
    return function () {
        if (isSuccessCall) {
            delete $this.arrBlockClientId[clientId]
        }
    };
};


module.exports = ZeroLimiter;
