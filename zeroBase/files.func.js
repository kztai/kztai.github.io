var $public = require(global.dbPath + "/public.js");
$mSystem = require(global.dbPath + "/db.sys.js");

function FileFunc() {
}


/*
* -----------------------------------------------------*
*  功能：获取url信息
* <1>外网url: http://www.gotsun.com:3000/path/file.txt
* <2>内网url:
*    (1)服务端mysql:  192.168.1.117:56000/path/file.txt
*    (2)服务端mem:    192.168.1.117:56000-m/path/file.txt
*    (3)终端storage:  192.168.1.117:56000/path/file.txt
*    (4)终端mem:      ""/path/file.txt
*
* 输出：
* urlInfo.server
* urlInfo.path
* urlInfo.outUrl: 是否为外网
* -----------------------------------------------------*
* */
FileFunc.prototype.getUrlInfo = function (url) {
    // 初始化返回结果
    let info = {};
    // 分离http
    let arrTemp = url.split("//");

    // 是否有“//”?
    if (arrTemp.length === 1) {  // 不是外网
        info.outUrl = false;
        // 分离服务器
        arrTemp = url.split("/");
        // 服务器server
        info.server = arrTemp[0];
        // 获取path
        let path = "";
        for (let i = 1; i < arrTemp.length; i++) {
            if (i > 1) path += "/";
            path += arrTemp[i];
        }
        info.path = path;
    } else {  // 是外网
        info.outUrl = true;
        // 保存外网url在path中
        info.path = url
    }

    return info;
};


/*
* -----------------------------------------------------*
*  功能：获取相对路径
* -----------------------------------------------------*
* */
FileFunc.prototype.get_relative_path = function (urlInfo) {
    // 获取当前端口号
    let arrTemp = urlInfo.server.split(':');
    return arrTemp[1] + "/" + urlInfo.path;
};


/*
* -----------------------------------------------------*
* 功能：获取服务器类型
* 返回类型：
* $def.termMemImage:终端内存图片
* $def.termMemFile: 终端内存文件
* $def.termStorage: 终端storage文件
* $def.serverMysql: 服务mysql文件
* $def.serverRemote:服务mysql远程文件
* $def.serverMem:   服务器内存文件
* $def.outUrl:      外网文件
* -----------------------------------------------------*
* */
FileFunc.prototype.getServerType = function (server) {
    // 获取server类型
    return $public.getServerType(server)
};


let $fileFunc = new FileFunc();
module.exports = $fileFunc;
