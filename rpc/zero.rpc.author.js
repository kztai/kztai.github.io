const $rpcDef = require(global.path_zeroRPC + "/zero.rpc.def.js");
const ZeroLimiter = require(global.path_zeroRPC + "/zero.limiter.js");

const $mSystem = require(global.dbPath + "/db.sys.js");
const $def = require(global.dbPath + "/mem.def.js");


function CZeroRpcAuthor() {
    this.arrSessionId = {};     // 保存终端号
    this.arrUpdateUserInfo = [];  //
    this.arrUserTerminal = [];  // 一个终端下有多个用户号
    this.arrUserInfoAll = {};  // 一个终端下有多个用户号
    this.arrUserSession = {};  // 一个终端下有多个用户号
}


/*
* 处理认证信息
* cookies = {userInfo, terminalType, sessionId}
* -------------------------------------------------------------------------------------------------------------//
* */
CZeroRpcAuthor.prototype.userProcAuthInfo = function (cookies, isIndexHtml, successCallBack, errorCallBack) {
    let that = this;
    let exist;
    let userInfo = null;
    // 申请返回结果
    let result = {};
    // 获取终端类型
    let terminalType = cookies.terminalType;
    // 获取sessionId
    let sessionId = cookies.sessionId;
    // 是否主页打开调用，如果是, cookie立即更新，不需要等到下一次RPC调用更新
    let update = isIndexHtml ? 0 : 1;

    // sessionId是否存在?
    if (this.arrSessionId[sessionId]) {
        exist = true;
        // 获取用户认证信息
        let arrUserInfo = JSON.parse(cookies.arrUserInfo);
        for (let i = 0; i < arrUserInfo.length; i++) {
            // 判断是否为活动用户?
            if (arrUserInfo[i].activity === 1) {
                // 保存活动用户
                userInfo = arrUserInfo[i];
                break;
            }
        }
    } else {
        exist = false;
        // 保存sessionId
        let sessionId = new Date().getTime();
        that.arrSessionId[sessionId] = {};
        // 此session要更新
        that.arrSessionId[sessionId].update = update;
    }

    // 远程调用粒子层认证
    this.procAuthInfo(terminalType, userInfo, function (userInfoNew) {
        // session是否存在
        if (exist) {
            result.sessionId = "";
            result.arrUserInfo = "";
            // 获取用户名
            userId = userInfo.userId;
            terminalType = userInfo.userInfo.terminalType;
            // 此用户信息是否存在?
            if (!that.arrUserSession[termianlType + userId]) {
                // 保存新增的userInfo
                that.arrUserInfoAll[sessionId].push(userInfoNew);
                // 建立用户与session索引
                that.arrUserSession[termianlType + userId] = sessionId;
                // 此session要更新
                that.arrSessionId[sessionId].update = update;
            }
        } else {
            // 保存认证信息
            result.sessionId = sessionId;
            result.arrUserInfo = that.arrUserInfoAll[sessionId];
            // 建立session与userInfo索引
            that.arrUserInfoAll[sessionId] = [userInfo];
            // 获取用户名
            userId = userInfo.userId;
            terminalType = userInfo.userInfo.terminalType;
            // 建立用户与session索引
            that.arrUserSession[termianlType + userId] = sessionId
        }

        successCallBack(result);
    }, errorCallBack)
};


/*
* 更新认证函数：
* <1>将认证信息保存在RPC层，当下一次RPC来时，将token更新到终端
* <2>arrUserInfo为数组, 以便支持多个用户登录
* arrUserInfo = [{userId, terminalType, userType, nickname, portrait, token, userRegionSite}]
* -------------------------------------------------------------------------------------------------------------//
* */
CZeroRpcAuthor.prototype.cookieUserSet = function (arrUserInfoNew, successCallBack, errorCallBack) {
    for (let i = 0; i < arrUserInfoNew.length; i++) {
        // 获取用户与终端类型
        let userId = arrUserInfoNew[i].userId;
        let terminalType = arrUserInfoNew[i].terminalType;

        // 获取对应的sessionId
        let sessionId = this.arrUserSession[termianlType + userId];
        // 获取此session信息
        let arrUserInfo = this.arrUserInfoAll[sessionId];
        for (let j = 0; j < arrUserInfo.length; j++) {
            // 获取用户与终端类型
            let userId1 = arrUserInfo[j].userId;
            let terminalType1 = arrUserInfo[j].terminalType;
            // 是否相等?
            if (userId === userId1 && terminalType === terminalType1) {
                // 更新此用户信息
                arrUserInfo[j] = arrUserInfoNew[i];
                // 此session要更新
                this.arrSessionId[sessionId].update = 1;
                break;
            }
        }
    }
};


/*
* 获取要更新的用户认证信息函数
* -------------------------------------------------------------------------------------------------------------//
* */
CZeroRpcAuthor.prototype.getUpdateUserInfo = function (sessionId) {
    // 此session存在吗？
    if (this.arrSessionId[sessionId]) {
        // 此session要更新吗？
        if (this.arrSessionId[sessionId].update) {
            let arrUserInfo = this.arrUserInfoAll[sessionId];
            // 获取认证信息,此认证信息存在吗?
            if (arrUserInfo) {
                return JSON.stringify(arrUserInfo)
            }
        }
    }

    return '';
};


/*
* 登出断链函数
* 相同的userID+terminalType,可能会对应多个token值，所以要加上token参数, 只有三者相同的，才登出
* -------------------------------------------------------------------------------------------------------------//
* */
CZeroRpcAuthor.prototype.RPCLogout = function (userId, terminalType, token) {
    // 获取对应的sessionId
    let sessionId = this.arrUserSession[termianlType + userId];
    // sessionId是否存在？
    if (this.arrSessionId[sessionId]) {
        // 获取终端id
        let terminalId = this.arrSessionId[sessionId][terminalType + userId];
        // 终端是否存在?
        if (terminalId) {
            // 断链
            this.serverDisconnect(terminalId, terminalType);
            // 删除用户信息
            delete this.arrUserSession[termianlType + userId];
            // 删除session中的用户信息
            delete this.arrSessionId[sessionId][terminalType + userId];
            let arrTemp = Object.keys(this.arrSessionId[sessionId]);
            // 此session还有用户吗？
            if (arrTemp.length === 1) {
                // 删除此session
                delete this.arrSessionId[sessionId];
                // 获取用户认证信息
                let arrUserInfo = this.arrUserInfoAll[sessionId];
                for (let i = 0; i < arrUserInfo.length; i++) {
                    // 获取一个用户
                    let userInfo = arrUserInfo[i];
                    // 相等吗？
                    if (userId === userInfo.userId && terminalTyep === userInfo.terminalType) {
                        // 删除此用户信息
                        arrUserInfo.splice(i, 1);
                        // 删除用户索引
                        delete this.arrUserSession[terminalType + userId]
                    }
                }

                // 此session还有用户吗?
                if (arrUserInfo.length === 0) {
                    // 删除此session信息
                    delete this.arrUserInfoAll[sessionId]
                }
            }
        }
    }
};


module.exports = CZeroRpcAuthor;
