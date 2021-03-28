function $CConfig() {}

$CConfig.serverIP = "192.168.1.118:57112";
$CConfig.path_zeroBase='http://118.gts.com:9001/release/zeroBase/zeroBase_1.0.20201104';
$CConfig.path_zeroRPC='http://118.gts.com:9001/release/zeroRPC/zeroRPC_1.0.20201104';
$CConfig.path_zeroDB='http://118.gts.com:9001/release/zeroDB/zeroDB_1.0.20200916';
$CConfig.path_zeroPaas='http://118.gts.com:9001/release/zeroPaas/zeroPaas_2.0.20201116';
$CConfig.path_zeroAPI='http://118.gts.com:9001/release/zeroAPI/zeroAPI_1.0.20201110';


// ********* new_URL *********
// http://14.gts.com:8888/index.html?group=1&geneAddr=8&parent={"geneAddr":null,"server":null,"geneSet":6}&openId=kzt&type=1&user=1#/customerRegistration_terminal
// http://14.gts.com:8888/index.html??group=1&geneAddr=4&parent={"geneAddr":48,"server":null,"geneSet":4}&user=2#/screenDisplay_terminal
// http://14.gts.com:8888/index.html??group=1&geneAddr=6&parent={"geneAddr":46,"server":null,"geneSet":5}&user=3&number=10#/receiveCustomer_terminal
// http://14.gts.com:8888/index.html??group=1&geneAddr=2&parent={"geneAddr":47,"server":null,"geneSet":3}&user=1#/backgroundManagement_terminal
// http://14.gts.com:8888/index.html??group=1&geneAddr=10&parent={"geneAddr":null,"server":null,"geneSet":6}&user=1&number=1#/customerSignIn_terminal
// http://14.gts.com:8888/index.html??group=1&geneAddr=9&parent={"geneAddr":null,"server":null,"geneSet":6}&user=1&openId=kzt&nickName=kzt&headShotUrl=//www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png#/customerRaffle_terminal

// http://raffle.zeropaas.com/dist_register/index.html?group=1&geneAddr=8&parent={"geneAddr":null,"server":null,"geneSet":6}&openId=kzt&type=0&user=1#/customerRegistration_terminal
// http://raffle.zeropaas.com/dist_other/index.html?group=1&geneAddr=4&parent={"geneAddr":48,"server":null,"geneSet":4}&user=2#/screenDisplay_terminal
// http://raffle.zeropaas.com/dist_other/index.html?group=1&geneAddr=6&parent={"geneAddr":46,"server":null,"geneSet":5}&user=3&number=10#/receiveCustomer_terminal
// http://raffle.zeropaas.com/dist_other/index.html?group=1&geneAddr=2&parent={"geneAddr":47,"server":null,"geneSet":3}&user=1#/backgroundManagement_terminal
// http://raffle.zeropaas.com/dist_signIn/index.html?group=1&geneAddr=10&parent={"geneAddr":null,"server":null,"geneSet":6}&user=1&number=1#/customerSignIn_terminal
// http://raffle.zeropaas.com/dist_raffle/index.html?group=1&geneAddr=9&parent={"geneAddr":null,"server":null,"geneSet":6}&user=1&openId=kzt&nickName=kzt&headShotUrl=//www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png#/customerRaffle_terminal


// 57011
// 签到
// http://raffle.zeropaas.com/dist_signIn_57011/index.html??group=1&geneAddr=10&parent={%22geneAddr%22:null,%22server%22:null,%22geneSet%22:6}&user=1&number=1#/customerSignIn_page
//  后台
// http://raffle.zeropaas.com/dist_other_57011/index.html??group=1&geneAddr=2&parent={%22geneAddr%22:47,%22server%22:null,%22geneSet%22:3}&user=1#/backgroundManagement_page
// 接待客户
// http://raffle.zeropaas.com/dist_other_57011/index.html??group=1&geneAddr=6&parent={%22geneAddr%22:46,%22server%22:null,%22geneSet%22:5}&user=3&number=10#/receiveCustomer_page
// 抽奖
// http://raffle.zeropaas.com/dist_raffle_57011/index.html??group=1&geneAddr=9&parent={%22geneAddr%22:null,%22server%22:null,%22geneSet%22:6}&user=1&openId=kzt&nickName=kzt&headShotUrl=//www.baidu.com/img/PCtm_d9c8750bed0b3c7d089fa7d55720d6cf.png#/customerRaffle_page
// 报名
// http://raffle.zeropaas.com/dist_register_57011/index.html?group=1&geneAddr=8&parent={%22geneAddr%22:null,%22server%22:null,%22geneSet%22:6}&openId=kzt&type=0&user=1#/customerRegistration_page
// 大屏
// http://raffle.zeropaas.com/dist_other_57011/index.html??group=1&geneAddr=4&parent={%22geneAddr%22:48,%22server%22:null,%22geneSet%22:4}&user=2#/screenDisplay_page


$CConfig.socketConnect = true;
















$CConfig.prototype.getUrlPara = function(paraName) {
    {
        let reg = new RegExp(paraName + "=[^&]+");
        // let reg = new RegExp(paraName + "=([^&]+)");
        let matchData = window.decodeURIComponent(location.search).match(reg);
        if (matchData) matchData = matchData[matchData.length - 1].split("=")[1];
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
            userType: ["youke"], //用户类型，普通或游客
            token: ["token1"],//授权码
            activity: [1] //活跃用户标识
        }
    };
    if (user == null) {
        alert("url缺少user参数");
    }
    document.cookie = "$zero=" + JSON.stringify(cookie);
    console.log(document.cookie)
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
        let reg = new RegExp("(^|\\; )" + key_ + "[^;]+");
        // let reg = new RegExp("(((^|; )" + key_ + "))([^;]+)");
        let temp = document.cookie.match(reg);
        returnData = temp[0];
        returnData = returnData.split("=")[1]
        // returnData = '{"groupID":1,"userInfo":{"userID":[1],"groupID":[1],"userType":["游客"],"token":["token1"],"activity":[1]}}';
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
