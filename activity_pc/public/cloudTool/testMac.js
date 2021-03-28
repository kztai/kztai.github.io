//$mSystem.memDatabase.arrDatabase
//获取当前URL指定参数的值
function getUrlPar(par) {
    var local_url = document.location.href;
    local_url = window.decodeURIComponent(local_url);
    //获取要取得的get参数位置
    var get = local_url.indexOf(par + "=");
    if (get === -1) {
        return false;
    }
    //截取字符串
    var get_par = local_url.slice(par.length + get + 1);
    //判断截取后的字符串是否还有其他get参数
    var nextPar = get_par.indexOf("&");
    if (nextPar !== -1) {
        get_par = get_par.slice(0, nextPar);
    }
    var lastPar = get_par.indexOf("#");//过滤#号
    if (lastPar !== -1) {
        get_par = get_par.slice(0, lastPar);
    }
    return get_par;
}

// http://211.gts.com:8084/index.html?geneAddr={"groupID":1,"cloudID":2,"vesselType":"t","vesselID":4,"userID":1,"geneID":4}&startPara={"instruct":"","command":"1","paraObject":""}
// http://211.gts.com:8084/index.html?geneAddr={"groupID":1,"cloudID":2,"vesselType":"t","vesselID":6,"userID":1,"geneID":16}&startPara={"instruct":"","command":"1","paraObject":""}
// http://211.gts.com:8084/index.html?geneAddr={"groupID":1,"cloudID":2,"vesselType":"t","vesselID":9,"userID":1,"geneID":10}&startPara={"instruct":"","command":"1","paraObject":""}
// http://211.gts.com:8084/index.html?geneAddr={"groupID":1,"cloudID":2,"vesselType":"t","vesselID":11,"userID":1,"geneID":19}&startPara={"instruct":"","command":"1","paraObject":""}
// http://211.gts.com:8084/index.html?geneAddr={"groupID":1,"cloudID":2,"vesselType":"t","vesselID":14,"userID":1,"geneID":13}&startPara={"instruct":"","command":"1","paraObject":""}
// http://211.gts.com:8084/index.html?geneAddr={"groupID":1,"cloudID":2,"vesselType":"t","vesselID":16,"userID":1,"geneID":22}&startPara={"instruct":"","command":"1","paraObject":""}
// http://211.gts.com:8084/index.html?geneAddr={"groupID":1,"cloudID":2,"vesselType":"t","vesselID":19,"userID":1,"geneID":25}&startPara={"instruct":"","command":"1","paraObject":""}
// http://211.gts.com:8084/index.html?geneAddr={"groupID":1,"cloudID":2,"vesselType":"t","vesselID":21,"userID":1,"geneID":28}&startPara={"instruct":"","command":"1","paraObject":""}

// t9 http://211.gts.com:8084/index.html?geneAddr={"groupID":1,"cloudID":2,"vesselType":"t","vesselID":24,"userID":1,"geneID":34}&startPara={"instruct":"","command":"1","paraObject":""}

// t10 http://211.gts.com:8084/index.html?geneAddr={"groupID":1,"cloudID":2,"vesselType":"t","vesselID":26,"userID":1,"geneID":39}&startPara={"instruct":"","command":"1","paraObject":""}


var arrTerminalInfo = {
    t1: {
        geneID: 4,
        vesselID: 4,
        jsDB: "./cloudTool/jsFileDatabase7.js",
        pageEvent: 7,
        terminalVue: 't1',
        htmlNumber: 1,
    },
    t2: {
        geneID: 16,
        vesselID: 6,
        jsDB: "./cloudTool/jsFileDatabase15.js",
        pageEvent: 24,
        terminalVue: 't2',
        htmlNumber: 2,
    },
    t3: {
        geneID: 10,
        vesselID: 9,
        jsDB: "./cloudTool/jsFileDatabase9.js",
        pageEvent: 20,
        terminalVue: 't3',
        htmlNumber: 3,
    },
    t4: {
        geneID: 19,
        vesselID: 11,
        jsDB: "./cloudTool/jsFileDatabase18.js",
        pageEvent: 26,
        terminalVue: 't4',
        htmlNumber: 4,
    },
    t5: {
        geneID: 13,
        vesselID: 14,
        jsDB: "./cloudTool/jsFileDatabase12.js",
        pageEvent: 22,
        terminalVue: 't5',
        htmlNumber: 5,
    },
    t6: {
        geneID: 22,
        vesselID: 16,
        jsDB: "./cloudTool/jsFileDatabase21.js",
        pageEvent: 28,
        terminalVue: 't6',
        htmlNumber: 6,
    },
    t7: {
        geneID: 25,
        vesselID: 19,
        jsDB: "./cloudTool/jsFileDatabase24.js",
        pageEvent: 30,
        terminalVue: 't7',
        htmlNumber: 7,
    },
    t8: {
        geneID: 28,
        vesselID: 21,
        jsDB: "./cloudTool/jsFileDatabase27.js",
        pageEvent: 32,
        terminalVue: 't8',
        htmlNumber: 8,
    },
    // t9: {
    //     geneID: 34,
    //     vesselID: 24,
    //     jsDB: "./cloudTool/jsFileDatabase37.js",  // p9 编辑页
    //     pageEvent: 50,
    //     terminalVue: 't9',
    //     htmlNumber: 9,
    // },
    // t9: {
    //     geneID: 34,
    //     vesselID: 24,
    //     jsDB: "./cloudTool/jsFileDatabase38.js",  // p10 活动详情
    //     pageEvent: 52,
    //     terminalVue: 't9',
    //     htmlNumber: 9,
    // },
    t9: {
        geneID: 34,
        vesselID: 24,
        jsDB: "./cloudTool/jsFileDatabase33.js",  // p11 活动管理
        pageEvent: 51,
        terminalVue: 't9',
        htmlNumber: 9,
    },
    // t9: {
    //     geneID: 34,
    //     vesselID: 24,
    //     jsDB: "./cloudTool/jsFileDatabase36.js",  // p12 活动列表
    //     pageEvent: 48,
    //     terminalVue: 't9',
    //     htmlNumber: 9,
    // },
    // t10: {
    //     geneID: 39,
    //     vesselID: 26,
    //     jsDB: "./cloudTool/jsFileDatabase35.js",  // p13 活动首页
    //     pageEvent: 57,
    //     terminalVue: 't10',
    //     htmlNumber: 10,
    // },
    // t10: {
    //     geneID: 39,
    //     vesselID: 26,
    //     jsDB: "./cloudTool/jsFileDatabase40.js",  // p14 活动列表
    //     pageEvent: 59,
    //     terminalVue: 't10',
    //     htmlNumber: 10,
    // },
    t10: {
        geneID: 39,
        vesselID: 26,
        jsDB: "./cloudTool/jsFileDatabase41.js",  // p15 活动详情
        pageEvent: 60,
        terminalVue: 't10',
        htmlNumber: 10,
    },
};
var geneAddr = JSON.parse(getUrlPar('geneAddr'));
var curTerminalInfo = null;
for (var key in arrTerminalInfo) {
    arrTerminalInfo[key].groupID = geneAddr.groupID;
    arrTerminalInfo[key].cloudID = geneAddr.cloudID;
    arrTerminalInfo[key].vesselType = geneAddr.vesselType;
    arrTerminalInfo[key].userID = null;
}
for (var key in arrTerminalInfo) {
    if (arrTerminalInfo[key].geneID == geneAddr.geneID) {
        arrTerminalInfo[key].userID = geneAddr.userID;
        curTerminalInfo = arrTerminalInfo[key];
        curTerminalInfo.componentPath = '@/components/';
        break;
    }
}


var cookie = {
    groupID: curTerminalInfo.groupID, //当前组织ID
    userInfo: [ //用户信息
        {
            userID: curTerminalInfo.userID, //用户ID
            groupID: curTerminalInfo.groupID,
            userType: '游客', //用户类型，普通或游客
            token: 'token1',//授权码
            activity: 1 //活跃用户标识
        },]
};
if (curTerminalInfo.userID == null) {
    alert('CTestMac href=' + document.location.href + ' geneAddr=' + JSON.stringify(geneAddr) + ' curTerminalInfo=' + JSON.stringify(curTerminalInfo));
}
// document.cookie = JSON.stringify(cookie);
document.cookie = '$lm=' + JSON.stringify(cookie);

function CTestMac() {
}
// CTestMac.dbVersion = '2018_11_29';
// CTestMac.dbVersion = '2018_11_30';
// CTestMac.dbVersion = '2019_05_29';
CTestMac.dbVersion = '2019_07_24';

// CTestMac.geneVersion = '2019_02_19';
// CTestMac.geneVersion = '2019_02_26';
// CTestMac.geneVersion = '2019_03_05';
// CTestMac.geneVersion = '2019_03_21';
// CTestMac.geneVersion = '2019_05_15B';
// CTestMac.geneVersion = '2019_05_15';
// CTestMac.geneVersion = '2019_06_18';
// CTestMac.geneVersion = '2019_07_27';
// CTestMac.geneVersion = '2019_08_16';
CTestMac.geneVersion = '2019_08_16cookie';
// CTestMac.geneVersion = 'alice116';
// CTestMac.geneVersion = 'alice';

// CTestMac.serverIP = '192.168.1.117:57156'; // v2.0 部署
CTestMac.serverIP = '192.168.1.117:57150'; // v2.0 部署
CTestMac.html = 'http://14.gts.com:85/index.html';

// window.$ajaxFlag = true;

CTestMac.prototype.mac = {
    //终端代码版本
    objVersionTerminal: {
        db: CTestMac.dbVersion,
        gene: CTestMac.geneVersion,
    },

    serverIP: CTestMac.serverIP,
    arrTerminalInfo: arrTerminalInfo,
    curTerminalInfo: curTerminalInfo,
    html:  CTestMac.html,
};

