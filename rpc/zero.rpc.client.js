const $rpcDef = require(global.path_zeroRPC + "/zero.rpc.def.js");

const $mSystem = require(global.dbPath + "/db.sys.js");
const $public = require(global.dbPath + "/public.js");
const $def = require(global.dbPath + "/mem.def.js");


function ZeroRpcClient() {
    this.$rpcDef = $rpcDef;
    // 用户在线离线回调函数
    this.userOffOnlineCallBack = null;
    // 用户回调函数
    this.arrCallBack = {};
    // 函数调用初始化
    this.callId = 0;
    // 阻塞server结构：
    // obj=arrBlockQueue[server]
    // obj.blocked  //1-阻塞, 0-非阻塞
    // obj.arrCallBack  //阻塞远程调用
    this.arrBlockQueue = {};
    // 阻塞队列最大值
    this.blockMax = this.$rpcDef.clientBlockMax
}

/*
* rpc远程调用入口：
* <1>检查服务器是否阻塞，如果阻塞，将远程调用保存在队列中
* <2>判断远程调用返回结果，如果是阻塞，要设置阻塞标志，将远程调用保存在队列中
* -------------------------------------------------------------------------------------------------------------//
* */
ZeroRpcClient.prototype.remoteCall = function (server, arrFuncPara, timeout, successCallBack, errorCallBack) {
    let that = this;
    let dbFlag;
    let para = {
        successCallBack: successCallBack,
        errorCallBack: errorCallBack,
        nStep: 0,
        i: 0,
    };

    if (successCallBack !== null) {
        errorCallBack = para;
        successCallBack = null
    }
    para = errorCallBack;

    while (1) {
        dbFlag = 0;
        if (this.$rpcDef.print) {
            console.log('rpcClient--remoteCall：' + para.nStep)
        }
        switch (para.nStep) {
            case 0:
                // 初始化：
                para.arrCallFuncPara = [];  // 用户参数拷贝
                // 获取调用类型
                para.callType = $public.getCallType(server).callType;

                // 调用函数id达到最大值，则重置后循环使用：
                if (++this.callId >= Number.MAX_SAFE_INTEGER) this.callId = 0;

                // 拷贝用户参数：
                para.arrCallFuncPara[0] = arrFuncPara[0];
                para.arrCallFuncPara[1] = arrFuncPara[1];
                para.arrCallFuncPara[2] = [];
                para.arrCallFuncPara[3] = arrFuncPara[3];
                para.arrCallFuncPara[4] = arrFuncPara[4];
                para.arrCallFuncPara[5] = this.getFuncCallBack_remoteCall(arrFuncPara[5], this.callId);   // 用户函数封装成拦截函数
                para.arrCallFuncPara[6] = this.getFuncCallBack_remoteCall(arrFuncPara[6], this.callId);   // 用户函数封装成拦截函数

                // 对函数参数做处理：
                for (let j = 0; j < arrFuncPara[2].length; j++) {
                    // 获取一个参数
                    let funcPara = arrFuncPara[2][j];
                    // funcPara是对象，同时server是本地服务器，复制对象或数组
                    if (typeof funcPara === "object" && para.callType === $def.callType_localServer) {
                        para.arrCallFuncPara[2][j] = $public.varCopy(funcPara);
                    } else {
                        para.arrCallFuncPara[2][j] = funcPara;
                    }
                }

                // 获取通讯错误拦截函数
                para.commErrorCallBack = this.getFuncCallBack_remoteCall(para.errorCallBack, this.callId);

                // 保存调用id
                this.arrCallBack[this.callId] = 1;
                // 立即返回调用id
                para.successCallBack(this.callId);

                // 检查是否阻塞
                if (this.checkBlocked(server)) {
                    para.nStep = 'start_pushRemoteCallIntoBlock';
                } else {
                    // 再判断阻塞队列是否还有值：
                    if(!this.arrBlockQueue[server] || this.arrBlockQueue[server].arrCallBack.length === 0) {
                        para.nStep = 'start_zeroRemoteCall';
                    } else {
                        para.nStep = 'start_pushRemoteCallIntoBlock';
                    }
                }
                dbFlag++;
                break;
            case 'start_zeroRemoteCall':
                if (this.$rpcDef.print) console.warn(server + '服务器未阻塞，开始rpc远程调用');
                // 未阻塞，则调用RPC：
                this.zeroRemoteCall(server, para.arrCallFuncPara, timeout, function(){}, function (error) {
                    // 是阻塞错误吗?
                    if (error && error.code === that.$rpcDef.rpcError_block) {
                        if (that.$rpcDef.print) console.warn(server + '服务器阻塞，阻塞标志置为1');
                        // 设置阻塞标志
                        that.setBlockFlag(server, that.$rpcDef.block_blocked, function () {
                            para.nStep = 'start_pushRemoteCallIntoBlock';
                            if (++dbFlag === 2) {
                                that.remoteCall(server, arrFuncPara, timeout, successCallBack, errorCallBack)
                            }
                        }, function (err) {
                            para.commErrorCallBack(err)
                        })
                    } else {
                        para.commErrorCallBack(error)
                    }
                });
                break;
            case 'start_pushRemoteCallIntoBlock':
                // 已阻塞，将远程调用保存在阻塞队列中
                let isFull = this.pushRemoteCallIntoBlock(server, para.arrCallFuncPara, timeout, para.commErrorCallBack);
                // 判断阻塞队列是否已满：
                if (isFull) {
                    let error = {};
                    error.code = that.$rpcDef.rpcError_block;
                    error.message = "阻塞队列已满";
                    para.commErrorCallBack(error)
                }

                para.nStep = 'end';
                dbFlag++;
                break;
            case 'end':
                return
        }
        if (++dbFlag === 1) {
            return
        }
    }
};


/*
* 远程调用:
* <一>概要描述
* <1>如果通讯故障，通过errorCallBack返回
* <2>如果成功调用，返回callId
* <3>remoteCall在调用之前要获取token, 在执行远程函数之前要验证token合法性，remoteCall通过successCallBack立即返回一个调用id号(callId)给粒子层,如果服务器出故障，通过errorCallBack返回
* <4>RPC调用时要注意区分是否为本地粒子（云端本地粒子之间，终端,页面本地粒子之间）远程调用，如果是，其函数参数如果是对象时，要先复制一份再调用，避免缓冲区被修改， 所以,粒子层不会通过缓冲区来返回值，只会通过回调函数来返回值
* <二>详细描述
* <1>产生函数id(callId), 当网络没断开时，通过回调函数立即返回
* <2>如果是本地调用，要复制函数参数
* <3>产生拦截函数，如果此远程调用取消，则用户回调函数和remoteCall回调函数不被执行
* <4>如果需要建立长连接，则建立socket连接
* <5>计算数据包长度,以便在云端进行限流，要修改socket.io底层代码，把序列化放在应用层，但服务端好象没办法修改源代码，便没关系，将对象序列化也放在应用端，目的是为了计算长度(放在最底层做)
* <6>为了得知通讯出错，要增加定时功能，在组定的时间内得不到结果，被认为通讯出错
* <7>获取token在最底层获取。
* -------------------------------------------------------------------------------------------------------------//
* */
ZeroRpcClient.prototype.zeroRemoteCall = function (server, arrFuncPara, timeout, successCallBack, errorCallBack) {
    let that = this;
    let dbFlag;
    let para = {
        successCallBack: successCallBack,
        errorCallBack: errorCallBack,
        nStep: 0,
        i: 0,
    };

    if (successCallBack !== null) {
        errorCallBack = para;
        successCallBack = null
    }
    para = errorCallBack;

    while (1) {
        dbFlag = 0;
        if (this.$rpcDef.print) {
            console.log('rpcClient--zeroRemoteCall：' + para.nStep)
        }
        switch (para.nStep) {
            case 0:
                // 初始化：
                para.comm = $mSystem.getComm();
                // 超时初始化
                if (timeout === 0) timeout = this.$rpcDef.timeout;
                // 获取调用类型
                para.callType = $public.getCallType(server).callType;

                if (para.callType === $def.callType_localServer) {
                    para.nStep = 'localCall';
                } else {
                    para.nStep = 'socketConnect';
                }
                dbFlag++;
                break;
            case 'localCall':
                // 终端函数调用
                para.comm.remoteCall_localCall("", '', arrFuncPara, function (remoteResult) {
                    // 获取回调函数
                    let funcCallBack = arrFuncPara[remoteResult.callbackIndex];
                    funcCallBack(remoteResult.remoteResult);

                    para.nStep = 'end';
                    if (++dbFlag === 2) {
                        that.zeroRemoteCall(server, arrFuncPara, timeout, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'socketConnect':
                // 获取客户端server
                para.clientServer = global.serverAddr;
                let clientId = $public.getTerminalServer(server);
                let serverSocket = $mSystem.getServerSocket();

                // 判断目标客户端与自己（作为服务端）是否建立连接?
                if (!serverSocket.isServerConnected(clientId)) {
                    // 判断自己（作为客户端）是否与目标服务端已建立过连接：
                    let clientSocket = $mSystem.isClientSocketOpen(para.clientServer, server);
                    if (clientSocket) {
                        if (clientSocket.isDisconnected()) {
                            para.errorCallBack({code:99, message:'建立的socket连接，已经断线'})
                        } else {
                            para.nStep = 'remoteCall_server';
                            dbFlag++;
                        }
                    } else {
                        // 打开socket，建立连接：
                        clientSocket = $mSystem.clientSocketOpenDatabase(para.clientServer, server);
                        clientSocket.connect(server, para.clientServer, this.disconnectCallBack, function () {
                            para.nStep = 'remoteCall_server';
                            if (++dbFlag === 2) {
                                that.zeroRemoteCall(server, arrFuncPara, timeout, successCallBack, errorCallBack)
                            }
                        }, para.errorCallBack)
                    }
                } else {
                    para.nStep = 'remoteCall_server';
                    dbFlag++;
                }
                break;
            case "remoteCall_server":
                // 初始化参数
                let $p = {};
                $p.interval = timeout;
                $p.isReturn = false;
                $p.callType = para.callType;
                $p.clientServer = para.clientServer;
                $p.remoteServer = server;
                $p.instanceName = "";
                $p.funcName = '';
                $p.funcPara = arrFuncPara;

                // 云端函数调用
                para.comm.remoteCall_server_timeout($p, function (remoteResult) {
                    // 获取回调函数
                    if (that.$rpcDef.print) console.warn('remoteCall_server_timeout成功！参数：' + JSON.stringify($p));
                    let funcCallBack = arrFuncPara[remoteResult.callbackIndex];
                    funcCallBack(remoteResult.remoteResult);

                    para.nStep = 'end';
                    if (++dbFlag === 2) {
                        that.zeroRemoteCall(server, arrFuncPara, timeout, successCallBack, errorCallBack)
                    }
                }, function (error) {
                    if (that.$rpcDef.print) console.warn('remoteCall_server_timeout失败！参数：' + JSON.stringify($p) + '；error: ' + JSON.stringify(error));
                    para.errorCallBack(error);
                });
                break;
            case 'end':
                para.successCallBack();
                return
        }
        if (++dbFlag === 1) {
            return
        }
    }
};


/*
* 检查是否阻塞函数
* <1>在调用remoteCall之前调用此函数，如果阻塞，再调用pushRemoteCallIntoBlock
* <2>返回值：
*    blocked=1：阻塞
*    blocked=0：非阻塞
* -------------------------------------------------------------------------------------------------------------//
* */
ZeroRpcClient.prototype.checkBlocked = function (server) {
    // 获取server阻塞信息
    let block = this.arrBlockQueue[server];
    // 此服务器有阻塞信息吗？
    return block ? block.blocked : this.$rpcDef.block_clearBlock;
};


/*
* 设置阻塞标志函数
* <1> blocked = 1为设置阻塞
*     blocked = 0为清除阻塞
* <2>此函数有二个地方调用，一服务端sendClearBlockMessage会主动发信息到此函数，二是远程调用函数收到阻塞标志
* <3>队列中的远程调用不采用并发，因为刚刚阻塞了，此时接收方资源很紧张，如果再并发，可能会导致再次阻塞，所以，这个时候一条一条发送，可以缓解阻塞的情况，而且阻塞的情况应该是不常见的情况，所以这种情况不会经常发生
* -------------------------------------------------------------------------------------------------------------//
* */
ZeroRpcClient.prototype.setBlockFlag = function (server, blocked, successCallBack, errorCallBack) {
    let that = this;
    let dbFlag;
    let para = {
        successCallBack: successCallBack,
        errorCallBack: errorCallBack,
        nStep: 0,
        i: 0,
    };

    if (successCallBack !== null) {
        errorCallBack = para;
        successCallBack = null
    }
    para = errorCallBack;

    while (1) {
        dbFlag = 0;
        if (this.$rpcDef.print) {
            console.log('rpcClient--setBlockFlag：' + para.nStep)
        }
        switch (para.nStep) {
            case 0:
                // 获取server阻塞信息
                para.block = this.arrBlockQueue[server];
                // 此服务器有阻塞信息吗？
                if (!para.block) {
                    para.block = {};
                    // 申请阻塞队列
                    para.block.arrCallBack = [];
                    // 保存
                    this.arrBlockQueue[server] = para.block
                }
                // 设置阻塞标志
                para.block.blocked = blocked;
                // 返回(并发)
                para.successCallBack();


                if (blocked === 0) {  // 类型为清除阻塞
                    if (that.$rpcDef.print) console.warn('收到目标服务器清除阻塞指令，开始执行当前服务器阻塞的RPC请求！');
                    para.nStep = 'clearBlocked';
                } else {
                    para.nStep = 'end';
                }
                dbFlag++;
                break;
            case 'clearBlocked':
                if (para.block.arrCallBack.length === 0) {
                    para.nStep = 'end';
                    dbFlag++;
                    break;
                }

                // 按先进先出调用
                let call = para.block.arrCallBack[0];
                // 获取远程调用参数
                let distServer = call.server;
                let arrFuncPara = call.arrFuncPara;
                let timeout = call.timeout;
                let rpcErrorCallBack = call.errorCallBack;

                // 远程调用(非并发，是串行发)
                that.zeroRemoteCall(distServer, arrFuncPara, timeout, function (result) {
                    // 从队列中删除此远程调用
                    para.block.arrCallBack.splice(0, 1);
                    para.nStep = 'clearBlocked';
                    if (that.$rpcDef.print) console.warn('当前服务器阻塞的RPC请求成功发出！当前阻塞队列长度：' + para.block.arrCallBack.length);

                    if (++dbFlag === 2) {
                        that.setBlockFlag(server, blocked, successCallBack, errorCallBack)
                    }
                }, function (error) {
                    // 是阻塞错误吗?
                    if (that.$rpcDef.print) console.warn('目标服务器主动调当前服务器的清除指令出错：' + JSON.stringify(error));
                    if (error && error.code === that.$rpcDef.rpcError_block) {
                        // 设置阻塞标志
                        para.block.blocked = 1;
                        para.nStep = 'end';
                        if (that.$rpcDef.print) console.warn('目标服务器又被阻塞！等待下一次目标服务器主动调当前服务器的清除指令');
                    } else {
                        rpcErrorCallBack(error);
                        // 从队列中删除此远程调用
                        para.block.arrCallBack.splice(0, 1);
                        para.nStep = 'clearBlocked';
                    }
                    if (++dbFlag === 2) {
                        that.setBlockFlag(server, blocked, successCallBack, errorCallBack)
                    }
                });
                break;
            case 'end':
                return
        }
        if (++dbFlag === 1) {
            return
        }
    }
};


/*
* 将远程调用放入阻塞队列
* <1>将远程函数放入阻塞队列
* <2>返回值：full=1: 阻塞队列满
            full=0: 阻塞队列没满
            如果阻塞队列满，远程调用返回失败
* -------------------------------------------------------------------------------------------------------------//
* */
ZeroRpcClient.prototype.pushRemoteCallIntoBlock = function (server, arrFuncPara, timeout, errorCallBack) {
    let isFull;
    // 获取阻塞信息
    let obj = this.arrBlockQueue[server];
    // 队列是否满?
    if (obj.arrCallBack.length >= this.blockMax) {
        // if (this.$rpcDef.print) console.warn('当前服务器阻塞队列已满，错误回调给应用层！');
        isFull = 1;
    } else {
        if (this.$rpcDef.print) console.warn('当前服务器阻塞队列未满，队列长度：' + obj.arrCallBack.length + '；将用户RPC请求保存到队列！');
        isFull = 0;
        let call = {};
        call.server = server;
        call.arrFuncPara = arrFuncPara;
        call.timeout = timeout;
        call.errorCallBack = errorCallBack;
        // 保存远程调用函数
        obj.arrCallBack.push(call)
    }
    return isFull;
};


/*
* 获取回调函数
* -------------------------------------------------------------------------------------------------------------//
* */
ZeroRpcClient.prototype.getFuncCallBack_remoteCall = function (callBack, callId) {
    let $this = this;
    return function ($result) {
        if ($this.arrCallBack[callId] === 1) {
            delete $this.arrCallBack[callId];
            callBack($result);
        }
    };
};


/*
* 终止远程调用
* -------------------------------------------------------------------------------------------------------------//
* */
ZeroRpcClient.prototype.remoteCallCancel = function (callId) {
    // 删除调用函数
    delete this.arrCallBack[callId]
};


/*
* 设置上线离线回调函数
* -------------------------------------------------------------------------------------------------------------//
* */
ZeroRpcClient.prototype.setOffOnlineCallBack = function (that, funcCallBack) {
    this.that = that;
    this.userOffOnlineCallBack = funcCallBack
};


/*
* 断线回调函数
* -------------------------------------------------------------------------------------------------------------//
* */
ZeroRpcClient.prototype.disconnectCallBack = function (clientId, serverIp, disconnectedType) {
    let $this = this;
    if ($this.userOffOnlineCallBack) {
        let result = {};
        result.server = serverIp;
        result.disconnectedType = disconnectedType;

        // 判断类型：是服务器断线消息，还是断线重连消息
        if (disconnectedType === this.$rpcDef.connect_ok || disconnectedType === this.$rpcDef.connect_online) {
            // 上线消息
            result.online = 1
        } else {
            // 断线消息
            result.online = 0;
            // 可能目标服务器未断，只是繁忙，所以需要断开此连接：
            $mSystem.disconnectOneClientSocket(clientId, serverIp);
        }

        // 发信息给用户
        $this.userOffOnlineCallBack.call($this.that, result)
    }
};


/*
* 设置粒子控件注册信息
* -------------------------------------------------------------------------------------------------------------//
* */
ZeroRpcClient.prototype.setGeneControlRegistInfo = function (instance, func) {
    $mSystem.setGeneControlRegistInfo(instance, func)
};


module.exports = ZeroRpcClient;
