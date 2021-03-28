$mSystem  = require(global.dbPath+"/db.sys.js");
const $def = require(global.dbPath + "/mem.def.js");
const $hardFile = require(global.dbPath + "/zeroBase/hard.file.js");
const $cacheFile = require(global.dbPath + "/zeroBase/cache.file.js");


function RemoteFile($comm) {
    let instanceName; //实例化名称
    this.timeout = 0;
    this.comm = $comm;

    //注册hardFile实例
    instanceName = "$hardFile";
    this.comm.registInstance(instanceName, $hardFile);
    //注册cacheFile实例
    instanceName = "$cacheFile";
    this.comm.registInstance(instanceName, $cacheFile);
}


/*
* -----------------------------------------------------*
*  功能：读取文件内容
* -----------------------------------------------------*
* */
RemoteFile.prototype.remoteReadFile = function (serverType, urlInfo, successCallBack, errorCallBack) {
    let funcName;
    let instanceName;
    let server = urlInfo.server;
    let funcPara = [urlInfo];

    if(serverType === $def.server_serverMysql) {
        funcName = 'hardReadFile';
        instanceName = "$hardFile";
    } else if(serverType === $def.server_serverMem) {
        funcName = 'cacheReadFile';
        instanceName = "$cacheFile";
        server = server.replace('-m', '');
    }

    this.comm.remoteCall_user(server, instanceName, funcName, funcPara, this.timeout, function (result) {
        successCallBack(result);
    }, function ($error) {
        errorCallBack($error);
    }, function ($error) {
        errorCallBack($error);
    });
};


/*
* -----------------------------------------------------*
*  功能：写文件内容
* -----------------------------------------------------*
* */
RemoteFile.prototype.remoteWriteFile = function (serverType, urlInfo, successCallBack, errorCallBack) {
    let funcName;
    let instanceName;
    let server = urlInfo.server;
    let funcPara = [urlInfo];

    if(serverType === $def.server_serverMysql) {
        funcName = 'hardWriteFile';
        instanceName = "$hardFile";
    } else if(serverType === $def.server_serverMem) {
        funcName = 'cacheWriteFile';
        instanceName = "$cacheFile";
        server = server.replace('-m', '');
    }

    this.comm.remoteCall_user(server, instanceName, funcName, funcPara, this.timeout, function (result) {
        successCallBack(result);
    }, function ($error) {
        errorCallBack($error);
    }, function ($error) {
        errorCallBack($error);
    });
};


/*
* -----------------------------------------------------*
*  功能：追加文件内容
* -----------------------------------------------------*
* */
RemoteFile.prototype.remoteAppendFile = function (serverType, urlInfo, successCallBack, errorCallBack) {
    let funcName;
    let instanceName;
    let server = urlInfo.server;
    let funcPara = [urlInfo];

    if(serverType === $def.server_serverMysql) {
        funcName = 'hardAppendFile';
        instanceName = "$hardFile";
    } else if(serverType === $def.server_serverMem) {
        funcName = 'cacheAppendFile';
        instanceName = "$cacheFile";
        server = server.replace('-m', '');
    }

    this.comm.remoteCall_user(server, instanceName, funcName, funcPara, this.timeout, function (result) {
        successCallBack(result);
    }, function ($error) {
        errorCallBack($error);
    }, function ($error) {
        errorCallBack($error);
    });
};


/*
* -----------------------------------------------------*
*  功能：删除文件内容
* -----------------------------------------------------*
* */
RemoteFile.prototype.remoteDeleteFile = function (serverType, urlInfo, successCallBack, errorCallBack) {
    let funcName;
    let instanceName;
    let server = urlInfo.server;
    let funcPara = [urlInfo];

    if(serverType === $def.server_serverMysql) {
        funcName = 'hardDeleteFile';
        instanceName = "$hardFile";
    } else if(serverType === $def.server_serverMem) {
        funcName = 'cacheDeleteFile';
        instanceName = "$cacheFile";
        server = server.replace('-m', '');
    }

    this.comm.remoteCall_user(server, instanceName, funcName, funcPara, this.timeout, function (result) {
        successCallBack(result);
    }, function ($error) {
        errorCallBack($error);
    }, function ($error) {
        errorCallBack($error);
    });
};


/*
* -----------------------------------------------------*
*  功能：获取文件时间戳
* -----------------------------------------------------*
* */
RemoteFile.prototype.remoteGetTimestamp = function (serverType, urlInfo, successCallBack, errorCallBack) {
    let funcName;
    let instanceName;
    let server = urlInfo.server;
    let funcPara = [urlInfo];

    if(serverType === $def.server_serverMysql) {
        funcName = 'hardGetTimestamp';
        instanceName = "$hardFile";
    } else if(serverType === $def.server_serverMem) {
        funcName = 'cacheGetTimestamp';
        instanceName = "$cacheFile";
        server = server.replace('-m', '');
    }

    this.comm.remoteCall_user(server, instanceName, funcName, funcPara, this.timeout, function (result) {
        successCallBack(result);
    }, function ($error) {
        errorCallBack($error);
    }, function ($error) {
        errorCallBack($error);
    });
};


/*
* -----------------------------------------------------*
*  功能：设置文件时间戳
* -----------------------------------------------------*
* */
RemoteFile.prototype.remoteSetTimestamp = function (serverType, urlInfo, successCallBack, errorCallBack) {
    let funcName;
    let instanceName;
    let server = urlInfo.server;
    let funcPara = [urlInfo];

    if(serverType === $def.server_serverMysql) {
        funcName = 'hardSetTimestamp';
        instanceName = "$hardFile";
    } else if(serverType === $def.server_serverMem) {
        funcName = 'cacheSetTimestamp';
        instanceName = "$cacheFile";
        server = server.replace('-m', '');
    }

    this.comm.remoteCall_user(server, instanceName, funcName, funcPara, this.timeout, function (result) {
        successCallBack(result);
    }, function ($error) {
        errorCallBack($error);
    }, function ($error) {
        errorCallBack($error);
    });
};



module.exports = RemoteFile;
