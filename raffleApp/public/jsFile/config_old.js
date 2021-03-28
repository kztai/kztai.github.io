function $CConfig() {}

$CConfig.dbVersion = "2020_11_04";
$CConfig.rpcVersion = "2020_11_04";
$CConfig.zeroDBVersion = "1.0.2.200916";
$CConfig.zeroPaasVersion = "2.0.8.201116";
// $CConfig.zeroPaasVersion = "2.0.7.201111";
$CConfig.apiDBVersion = "1.0.1.201110";
$CConfig.serverIP = "192.168.1.117:57170";


// 服务器文件路径
$CConfig.dbHttpPath = "http://117.gts.com:8077";
$CConfig.zeroHttpPath = "http://117.gts.com:8063";

//http://211.gts.com:8888/index.html??group=1&geneAddr=2&parentGeneAddr=47&geneSet=3&&user=1#/backgroundManagement_terminal


$CConfig.zeroPaasPath = $CConfig.zeroHttpPath + "/terminalEmulate/zeroPaas/zeroPaas_" + $CConfig.zeroPaasVersion;


















$CConfig.prototype.getUrlPara = function(paraName) {
    {
        let reg = new RegExp("(?<=((\\?|\\&)" + paraName + "=))[^&]+");
        let matchData = window.decodeURIComponent(location.search).match(reg);
        if (matchData) matchData = matchData[0];
        if (/[^\w]/.test(matchData)) matchData = JSON.parse(matchData);
        return matchData;
    }
};

$CConfig.prototype.setCookie = function () {
    let user = this.getUrlPara("user");
    let group = this.getUrlPara("group");
    var cookie = {
        groupID: group, //当前组织ID
        userInfo: {
            userID: [user], //用户ID
            groupID: [group],
            userType: ["游客"], //用户类型，普通或游客
            token: ["token1"],//授权码
            activity: [1] //活跃用户标识
        }
    };
    if (user == null) {
        alert("url缺少user参数");
    }
    document.cookie = "$zero=" + JSON.stringify(cookie);
};
$CConfig.prototype.setCookie();

// 返回cookie中key对应的数据, 不传key则获取索引cookie数据, 不存在对应key则返回null;
// flag可选: 为true时将会判断将数据通过JSON.parse转换
$CConfig.prototype.getCookie = function(key, flag) {
    let returnData;
    if (typeof key === "string") {
        let key_ = key.replace(/[^\w]/g, function(match) {
            return "\\" + match;
        }) + "=";
        let reg = new RegExp("(?<=((^|(?<=(; )))" + key_ + "))[^;]+");
        returnData = document.cookie.match(reg)[0];
        if (flag && returnData) returnData = /[^\w]/.test(returnData) ? JSON.parse(returnData) : returnData;
    } else {
        let cookieArr = document.cookie.split("; ");
        returnData = {};
        for (let i = 0; i < cookieArr.length; i++) {
            let index = cookieArr[i].indexOf("=");
            if (index === -1) {
                returnData[cookieArr[i]] = cookieArr[i];
                continue;
            }
            let value = cookieArr[i].slice(index + 1);
            if (flag) value = /[^\w]/.test(value) ? JSON.parse(value) : value;
            returnData[cookieArr[i].slice(0, index)] = value;
        }
    }
    return returnData;
};

