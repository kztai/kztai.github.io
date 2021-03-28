const $rpcDef = require(global.path_zeroRPC + "/zero.rpc.def.js");
const ZeroLimiter = require(global.path_zeroRPC + "/zero.limiter.js");

const $mSystem = require(global.dbPath + "/db.sys.js");
const $def = require(global.dbPath + "/mem.def.js");


// <1>limitType: 限流类型, 0-按流量，1-按调用次数
// <2>bucketSize:   桶的大小
// <3>interval: 放令牌到桶的间隔时间，以毫秒为单位
// <4>tokensPerInterval: 每一次间隔放多少个令牌
function CZeroRpcServer(limitType, bucketSize, interval, tokensPerInterval) {
    this.$rpcDef = $rpcDef;
    // 限流类型
    this.limitType = limitType;
    // 初始化限流器
    this.limiter = new ZeroLimiter(bucketSize, interval, tokensPerInterval);
    // 阻塞客户id
    this.arrBlockClientId = {};
    this.limiter.arrBlockClientId = this.arrBlockClientId;
}


/*
* 服务端远程调用接收函数
* -------------------------------------------------------------------------------------------------------------//
* */
CZeroRpcServer.prototype.serverRemoteCallReceive = function (ajaxCall, count, clientId, authInfo, successCallBack, errorCallBack) {
    let that = this;
    // todo authInfo 暂时传入一个token（字符串），后面需要改为对象，这里临时改：
    authInfo = {
        clientType: 2, // 1-客户端是云端请求, 2-客户端为终端请求
        token: authInfo
    };

    // 调用用户函数，进行认证
    this.userProcAuthInfo(authInfo, function (result) {
        // 是按调用次数限流吗?
        if (that.limitType === that.$rpcDef.limitType_callCount) {
            // 一次申请令牌的个数：
            count = that.$rpcDef.tokenCount
        }
        // 获取令牌
        that.limiter.getToken(count, function () {
            // 成功返回剩余令牌
            if (that.$rpcDef.print) console.warn('rpc远程调用成功返回');
            result ? successCallBack(authInfo) : successCallBack(null);
        }, function (errorCode) {
            let error = {};
            // 是队列满吗
            if (errorCode === that.$rpcDef.rpcError_block) {
                error.code = errorCode;
                error.message = "rpc限流队列已满！";
                // 是否为ajax调用
                if (!ajaxCall) {
                    // 阻塞,保存发生过阻塞的clientId
                    that.arrBlockClientId[clientId] = 1
                }
            } else {
                error.code = errorCode;
                error.message = "流量过大，已超过桶限定大小！"
            }
            errorCallBack(error)
        })
    }, function (err) {
        let error = {};
        error.code = that.$rpcDef.rpcError_auther;
        error.message = "认证出错：" + JSON.stringify(err);
        errorCallBack(error)
    })
};


/*
* 获取阻塞信息(由客户端调用)
* -------------------------------------------------------------------------------------------------------------//
* */
CZeroRpcServer.prototype.getServerBlockInfo = function (successCallBack, errorCallBack) {
    successCallBack(this.limiter.blocked)
};


/*
* 设置粒子控件注册信息
* -------------------------------------------------------------------------------------------------------------//
* */
CZeroRpcServer.prototype.setGeneControlRegistInfo = function (instance, func) {
    $mSystem.setGeneControlRegistInfo(instance, func)
};


/*
* 处理认证信息(测试用)
* <1>如果autoInfo为null, 则为表示终端第一次进行认证，此时产生用户信息; 否则，可能是终端也可以是云端进行认证
* <2>如果是终端第一次，获取认证信息，否则进行认证
* <3> authInfo:认证信息
      authInfo.clientType: 1-客户端是云端请求, 2-客户端为终端请求
      authInfo.token: 认证令牌
* -------------------------------------------------------------------------------------------------------------//
* */
CZeroRpcServer.prototype.userProcAuthInfo = function (authInfo, successCallBack, errorCallBack) {
    // 是否为终端第一次认证？
    if (authInfo.clientType === 2 && !authInfo.token) {
        // 终端第一次认证, 获取认证信息
        authInfo.token = 'mao_2020_10_27';
        successCallBack(authInfo);
    } else {
        // 进行认证
        authInfo.token === 'mao_2020_10_27' ? successCallBack(null) : errorCallBack('token信息错误！');
    }
};


module.exports = CZeroRpcServer;
