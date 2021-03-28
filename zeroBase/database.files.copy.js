$mSystem = require(global.dbPath + "/db.sys.js");
const $public = require(global.dbPath + "/public.js");
const CDatabase = require(global.dbPath + "/database.js");
const $def = require(global.dbPath + "/mem.def.js");
const $hardFile = require(global.dbPath + "/zeroBase/hard.file.js");
const $cacheFile = require(global.dbPath + "/zeroBase/cache.file.js");
const $fileFunc = require(global.dbPath + "/zeroBase/files.func.js");
const $baseDef = require(global.dbPath + "/zeroBase/base.def.js");


/*
 *-------------------------------------------------------------------------------//
 * 复制文件
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.copyFile = function (arrSrcUrl, arrDestUrl, successCallBack, errorCallBack) {
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
        $public.print('log', 'baseFile.copy--copyFile：' + para.nStep);
        switch (para.nStep) {
            case 0:
                // 获取平台类型
                para.platform = $public.getPlatform();

                para.nStep = 'get_copy_type';
                dbFlag++;
                break;
            case 'get_copy_type':  // 根据代码运行平台，判断需要处理的文件类型
                if (para.i >= arrSrcUrl.length) {
                    para.i = 0;
                    para.nStep = 'end';
                    dbFlag++;
                    break;
                }

                // 获取一个url
                para.srcUrl = arrSrcUrl[para.i];
                para.destUrl = arrDestUrl[para.i];

                // 判断代码运行平台？
                switch (para.platform) {
                    case $def.platform_web:
                        para.nStep = 'copy_web';
                        break;
                    case $def.platform_server:
                        para.nStep = 'copy_server';
                        break;
                    case $def.platform_wx:
                        para.nStep = 'copy_wx';
                        break;
                    case $def.platform_app:
                        para.nStep = 'copy_flutter';
                        break;
                }

                dbFlag++;
                break;
            case 'copy_web':  // 处理web文件
                this.copyFile_web(para.srcUrl, para.destUrl, function (content) {
                    para.i++;
                    para.nStep = 'get_copy_type';
                    if (++dbFlag === 2) {
                        that.copyFile(arrSrcUrl, arrDestUrl, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'copy_server':  // 处理服务器
                this.copyFile_server(para.srcUrl, para.destUrl, function (content) {
                    para.i++;
                    para.nStep = 'get_copy_type';
                    if (++dbFlag === 2) {
                        that.copyFile(arrSrcUrl, arrDestUrl, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'copy_wx':  // 处理微信
                this.copyFile_wx(para.srcUrl, para.destUrl, function (content) {
                    para.i++;
                    para.nStep = 'get_copy_type';
                    if (++dbFlag === 2) {
                        that.copyFile(arrSrcUrl, arrDestUrl, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'copy_flutter':  // 处理flutter
                this.copyFile_flutter(para.srcUrl, para.destUrl, function (content) {
                    para.i++;
                    para.nStep = 'get_copy_type';
                    if (++dbFlag === 2) {
                        that.copyFile(arrSrcUrl, arrDestUrl, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
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
 *-------------------------------------------------------------------------------//
 * 复制文件（代码运行在web端）
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.copyFile_web = function (srcUrl, destUrl, successCallBack, errorCallBack) {
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
        if($baseDef.print) {
            console.log('baseFile.copy--copyFile_web：' + para.nStep)
        }
        switch (para.nStep) {
            case 0:  // 判断源文件与目标文件类型
                // 获取srcUrl结构信息
                para.srcInfo = $fileFunc.getUrlInfo(srcUrl);
                // 获取destUrl结构信息
                para.destInfo = $fileFunc.getUrlInfo(destUrl);
                // 获取源server类型
                para.srcServerType = $public.getServerType(para.srcInfo.server);
                // 获取源server类型
                let destServerType = $public.getServerType(para.destInfo.server);

                // 判断目标server:
                if (destServerType === $def.server_termMem) {
                    // 判断源server:
                    if (para.srcServerType === $def.server_termMem) {
                        // 终端内存to终端内存
                        para.nStep = 'termMemToTermMem';
                    } else if (para.srcServerType === $def.server_serverMem || para.srcServerType === $def.server_serverMysql) {
                        // 服务器to终端内存
                        para.nStep = 'serverToTermMem';
                    }
                } else if (destServerType === $def.server_serverMysql) {  // 这里的serverMysql指的是终端storage，因为终端storage文件存在服务器
                    // 判断源server:
                    if (para.srcServerType === $def.server_termMem) {
                        // 终端内存to服务器MySQL
                        para.nStep = 'termMemToRemoteHard';
                    } else if (para.srcServerType === $def.server_serverMem || para.srcServerType === $def.server_serverMysql) {
                        // 服务器to服务器MySQL
                        para.nStep = 'serverToServer';
                    }
                }

                dbFlag++;
                break;
            case 'termMemToTermMem':  // 终端内存to终端内存
                this.web_termMemToTermMem(para.srcInfo, para.destInfo, function (content) {
                    para.nStep = 'end';
                    if (++dbFlag === 2) {
                        that.copyFile_web(srcUrl, destUrl, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'serverToTermMem':  // 服务器to终端内存
                this.web_serverToTermMem(para.srcInfo, para.destInfo, function (content) {
                    para.nStep = 'end';
                    if (++dbFlag === 2) {
                        that.copyFile_web(srcUrl, destUrl, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'termMemToRemoteHard':  // 终端内存to服务器MySQL（终端storage）
                this.web_termMemToRemoteHard(para.srcInfo, para.destInfo, function (content) {
                    para.nStep = 'end';
                    if (++dbFlag === 2) {
                        that.copyFile_web(srcUrl, destUrl, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'serverToServer':  // 服务器to服务器MySQL（终端storage）
                this.web_serverToServerHard(para.srcServerType, para.srcInfo, para.destInfo, function (content) {
                    para.nStep = 'end';
                    if (++dbFlag === 2) {
                        that.copyFile_web(srcUrl, destUrl, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
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
 *-------------------------------------------------------------------------------//
 * 复制文件（代码运行在服务器端）
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.copyFile_server = function (srcUrl, destUrl, successCallBack, errorCallBack) {
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
        if($baseDef.print) {
            console.log('baseFile.copy--copyFile_server：' + para.nStep)
        }
        switch (para.nStep) {
            case 0:  // 判断源文件与目标文件类型
                // 获取srcUrl结构信息
                para.srcInfo = $fileFunc.getUrlInfo(srcUrl);
                // 获取destUrl结构信息
                para.destInfo = $fileFunc.getUrlInfo(destUrl);
                // 获取源server类型
                let srcServerType = $public.getServerType(para.srcInfo.server);
                // 获取源server类型
                let destServerType = $public.getServerType(para.destInfo.server);

                // 判断目标server:
                if (destServerType === $def.server_serverMem) {
                    // 判断源server:
                    if (srcServerType === $def.server_serverMem) {
                        // 服务器内存to服务器内存
                        para.nStep = 'serverMemToServerMem';
                    } else if (srcServerType === $def.server_serverMysql) {
                        // 服务器硬盘to服务器内存
                        para.nStep = 'serverHardToServerMem';
                    }
                } else if (destServerType === $def.server_serverMysql) {
                    // 判断源server:
                    if (srcServerType === $def.server_serverMem) {
                        // 服务器内存to服务器硬盘
                        para.nStep = 'serverMemToServerHard';
                    } else if (srcServerType === $def.server_serverMysql) {
                        // 服务器硬盘to服务器硬盘
                        para.nStep = 'serverHardToServerHard';
                    }
                }

                dbFlag++;
                break;
            case 'serverMemToServerMem':  // 服务器内存to服务器内存
                this.server_serverMemToServerMem(para.srcInfo, para.destInfo, function (content) {
                    para.nStep = 'end';
                    if (++dbFlag === 2) {
                        that.copyFile_server(srcUrl, destUrl, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'serverHardToServerMem':  // 服务器硬盘to服务器内存
                let isMove = false;
                this.server_serverHardToServerMem(para.srcInfo, para.destInfo, isMove, function (byteNum) {
                    para.nStep = 'end';
                    if (++dbFlag === 2) {
                        that.copyFile_server(srcUrl, destUrl, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'serverMemToServerHard':  // 服务器内存to服务器硬盘
                this.server_serverMemToServerHard(para.srcInfo, para.destInfo, function (byteNum) {
                    para.nStep = 'end';
                    if (++dbFlag === 2) {
                        that.copyFile_server(srcUrl, destUrl, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'serverHardToServerHard':  // 服务器硬盘to服务器硬盘
                this.server_serverHardToServerHard(para.srcInfo, para.destInfo, function (content) {
                    para.nStep = 'end';
                    if (++dbFlag === 2) {
                        that.copyFile_server(srcUrl, destUrl, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'end':
                para.successCallBack(para.byteNum);
                return
        }
        if (++dbFlag === 1) {
            return
        }
    }
};


/*
 *-------------------------------------------------------------------------------//
 * 复制文件 (终端内存to终端内存)
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.web_termMemToTermMem = function (srcInfo, destInfo, successCallBack, errorCallBack) {
    // 获取源时间戳
    $cacheFile.cacheGetTimestamp(srcInfo, function (srcTimestamp) {
        // 获取目标时间戳
        $cacheFile.cacheGetTimestamp(destInfo, function (destTimestamp) {
            // 对比文件名和时间戳
            if (srcInfo.path === destInfo.path && srcTimestamp === destTimestamp) {
                successCallBack()
            } else {
                srcInfo.getTimestamp = 1;
                $cacheFile.cacheReadFile(srcInfo, function (result) {
                    destInfo.content = result.content;
                    destInfo.timestamp = result.timestamp;
                    $cacheFile.cacheWriteFile(destInfo, successCallBack, errorCallBack)
                }, errorCallBack)
            }
        }, errorCallBack)
    }, errorCallBack)
};


/*
 *-------------------------------------------------------------------------------//
 * 复制文件 (服务器to终端内存)
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.web_serverToTermMem = function (srcInfo, destInfo, successCallBack, errorCallBack) {
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
        if($baseDef.print) {
            console.log('baseFile.copy--web_serverToTermMem：' + para.nStep)
        }
        switch (para.nStep) {
            case 0:
            case 'GetSrcTimestamp':
                // 获取源时间戳
                para.serverType = $public.getServerType(srcInfo.server);
                this.remoteFile.remoteGetTimestamp(para.serverType, srcInfo, function (srcTimestamp) {
                    para.srcTimestamp = srcTimestamp;
                    para.nStep = 'GetDestTimestamp';
                    if (++dbFlag === 2) {
                        that.web_serverToTermMem(srcInfo, destInfo, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'GetDestTimestamp':
                // 获取目标时间戳
                $cacheFile.cacheGetTimestamp(destInfo, function (destTimestamp) {
                    // 对比文件名和时间戳
                    if (srcInfo.path === destInfo.path && para.srcTimestamp === destTimestamp) {
                        para.nStep = 'end';
                    } else {
                        srcInfo.getTimestamp = 1;
                        para.nStep = 'readSrcFile';
                    }

                    if (++dbFlag === 2) {
                        that.web_serverToTermMem(srcInfo, destInfo, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'readSrcFile':
                // 读源文件
                this.remoteFile.remoteReadFile(para.serverType, srcInfo, function (result) {
                    destInfo.content = result.content;
                    destInfo.timestamp = result.timestamp;
                    para.nStep = 'writeDestFile';
                    if (++dbFlag === 2) {
                        that.web_serverToTermMem(srcInfo, destInfo, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'writeDestFile':
                // 写目标文件
                $cacheFile.cacheWriteFile(destInfo, function (result) {
                    para.nStep = 'end';
                    if (++dbFlag === 2) {
                        that.web_serverToTermMem(srcInfo, destInfo, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
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
 *-------------------------------------------------------------------------------//
 * 复制文件 (终端内存to服务器)
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.web_termMemToRemoteHard = function (srcInfo, destInfo, successCallBack, errorCallBack) {
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
        if($baseDef.print) {
            console.log('baseFile.copy--web_termMemToRemoteHard：' + para.nStep)
        }
        switch (para.nStep) {
            case 0:
            case 'GetSrcTimestamp':
                // 获取源时间戳
                $cacheFile.cacheGetTimestamp(srcInfo, function (srcTimestamp) {
                    para.srcTimestamp = srcTimestamp;
                    para.nStep = 'GetDestTimestamp';
                    if (++dbFlag === 2) {
                        that.web_termMemToRemoteHard(srcInfo, destInfo, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'GetDestTimestamp':
                // 获取目标时间戳
                para.serverType = $def.server_serverMysql;
                this.remoteFile.remoteGetTimestamp(para.serverType, destInfo, function (destTimestamp) {
                    // 对比文件名和时间戳
                    if (srcInfo.path === destInfo.path && para.srcTimestamp === destTimestamp) {
                        para.nStep = 'end';
                    } else {
                        srcInfo.getTimestamp = 1;
                        para.nStep = 'readSrcFile';
                    }
                    if (++dbFlag === 2) {
                        that.web_termMemToRemoteHard(srcInfo, destInfo, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'readSrcFile':
                // 读源文件
                $cacheFile.cacheReadFile(srcInfo, function (result) {
                    destInfo.content = result.content;
                    destInfo.timestamp = result.timestamp;
                    para.nStep = 'writeDestFile';
                    if (++dbFlag === 2) {
                        that.web_termMemToRemoteHard(srcInfo, destInfo, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'writeDestFile':
                // 写目标文件
                this.remoteFile.remoteWriteFile(para.serverType, destInfo, function (result) {
                    para.nStep = 'end';
                    if (++dbFlag === 2) {
                        that.web_termMemToRemoteHard(srcInfo, destInfo, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
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
 *-------------------------------------------------------------------------------//
 * 复制文件: 服务器to服务器MySQL（终端storage）
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.web_serverToServerHard = function (srcServerType, srcInfo, destInfo, successCallBack, errorCallBack) {
    // 注册远程调用实例：
    let instanceName = $def.instance_database; //实例化名称
    let comm = $mSystem.getComm();
    comm.registInstance(instanceName, $mSystem.database);


    // 远程调用
    let funcName;
    let server = destInfo.server;
    let funcPara = [srcInfo, destInfo];
    let timeout = 0;

    if (srcServerType === $def.server_serverMysql) {
        funcName = 'server_serverHardToServerHard';
    } else if (srcServerType === $def.server_serverMem) {
        funcName = 'server_serverMemToServerHard';
    }

    comm.remoteCall_user(server, instanceName, funcName, funcPara, timeout, function (result) {
        successCallBack(result);
    }, function ($error) {
        errorCallBack($error);
    }, function ($error) {
        errorCallBack($error);
    });
};


/*
 *-------------------------------------------------------------------------------//
 * 复制文件 (服务器内存to服务器内存)
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.server_serverMemToServerMem = function (srcInfo, destInfo, successCallBack, errorCallBack) {
    let that = this;
    let dbFlag;
    let para = {
        successCallBack: successCallBack,
        errorCallBack: errorCallBack,
        nStep: 0,
    };

    if (successCallBack !== null) {
        errorCallBack = para;
        successCallBack = null
    }
    para = errorCallBack;

    while (1) {
        dbFlag = 0;
        if($baseDef.print) {
            console.log('baseFile.copy--server_serverMemToServerMem：' + para.nStep)
        }
        switch (para.nStep) {
            case 0:
                para.serverType = $def.server_serverMem;
                // 获取源是否为本地
                let srcLocal = $public.isLocalServer(srcInfo.server);
                // 获取目标是否为本地
                let destLocal = $public.isLocalServer(destInfo.server);
                // 目标server是否为本地？
                if (destLocal) {
                    // 源是否为本地？
                    if (srcLocal) {
                        para.nStep = 'end';
                    } else {
                        para.nStep = 'remote_GetSrcTimestamp';   // 远程源to本地目标
                    }
                    dbFlag++;
                } else {
                    // 源是否为本地？
                    if (srcLocal) {
                        para.nStep = 'local_GetSrcTimestamp';  // 本地源to远程目标
                        dbFlag++;
                    } else {
                        // 源不是本地，目标也不是本地，不存在这种情况，所以报错：
                        let error = {};
                        error.code = "error";
                        error.message = "不存在这种文件复制";
                        para.errorCallBack(error);
                    }
                }
                break;
            case 'remote_GetSrcTimestamp':
                // 获取源时间戳
                this.remoteFile.remoteGetTimestamp(para.serverType, srcInfo, function (srcTimestamp) {
                    para.srcTimestamp = srcTimestamp;
                    para.nStep = 'local_GetDestTimestamp';
                    if (++dbFlag === 2) {
                        that.server_serverMemToServerMem(srcInfo, destInfo, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'local_GetSrcTimestamp':
                // 获取源时间戳
                $cacheFile.cacheGetTimestamp(srcInfo, function (srcTimestamp) {
                    para.srcTimestamp = srcTimestamp;
                    para.nStep = 'remote_GetDestTimestamp';
                    if (++dbFlag === 2) {
                        that.server_serverMemToServerMem(srcInfo, destInfo, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'remote_GetDestTimestamp':
                // 获取目标时间戳
                this.remoteFile.remoteGetTimestamp(para.serverType, destInfo, function (destTimestamp) {
                    // 对比文件名和时间戳
                    if (srcInfo.path === destInfo.path && para.srcTimestamp === destTimestamp) {
                        para.nStep = 'end';
                    } else {
                        srcInfo.getTimestamp = 1;
                        para.nStep = 'local_readSrcFile';
                    }
                    if (++dbFlag === 2) {
                        that.server_serverMemToServerMem(srcInfo, destInfo, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'local_GetDestTimestamp':
                // 获取目标时间戳
                $cacheFile.cacheGetTimestamp(destInfo, function (destTimestamp) {
                    // 对比文件名和时间戳
                    if (srcInfo.path === destInfo.path && para.srcTimestamp === destTimestamp) {
                        para.nStep = 'end';
                    } else {
                        srcInfo.getTimestamp = 1;
                        para.nStep = 'remote_readSrcFile';
                    }
                    if (++dbFlag === 2) {
                        that.server_serverMemToServerMem(srcInfo, destInfo, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'remote_readSrcFile':
                // 读源文件
                this.remoteFile.remoteReadFile(para.serverType, srcInfo, function (result) {
                    destInfo.content = result.content;
                    destInfo.timestamp = result.timestamp;
                    para.nStep = 'local_writeDestFile';
                    if (++dbFlag === 2) {
                        that.server_serverMemToServerMem(srcInfo, destInfo, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'local_readSrcFile':
                // 读源文件
                $cacheFile.cacheReadFile(srcInfo, function (result) {
                    destInfo.content = result.content;
                    destInfo.timestamp = result.timestamp;
                    para.nStep = 'remote_writeDestFile';
                    if (++dbFlag === 2) {
                        that.server_serverMemToServerMem(srcInfo, destInfo, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'remote_writeDestFile':
                // 写目标文件
                this.remoteFile.remoteWriteFile(para.serverType, destInfo, function (result) {
                    para.nStep = 'end';
                    if (++dbFlag === 2) {
                        that.server_serverMemToServerMem(srcInfo, destInfo, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'local_writeDestFile':
                // 写目标文件
                $cacheFile.cacheWriteFile(destInfo, function (result) {
                    para.nStep = 'end';
                    if (++dbFlag === 2) {
                        that.server_serverMemToServerMem(srcInfo, destInfo, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
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
 *-------------------------------------------------------------------------------//
 * 复制文件 (服务器硬盘to服务器内存)
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.server_serverHardToServerMem = function (srcInfo, destInfo, isMove, successCallBack, errorCallBack) {
    let that = this;
    let dbFlag;
    let para = {
        successCallBack: successCallBack,
        errorCallBack: errorCallBack,
        nStep: 0,
    };

    if (successCallBack !== null) {
        errorCallBack = para;
        successCallBack = null
    }
    para = errorCallBack;

    while (1) {
        dbFlag = 0;
        if($baseDef.print) {
            console.log('baseFile.copy--server_serverHardToServerMem：' + para.nStep)
        }
        switch (para.nStep) {
            case 0:
                // 获取源是否为本地
                para.srcLocal = $public.isLocalServer(srcInfo.server);
                // 获取目标是否为本地
                para.destLocal = $public.isLocalServer(destInfo.server);
                // 目标server是否为本地？
                if (para.destLocal) {
                    // 源是否为本地？
                    if (para.srcLocal) {
                        para.nStep = 'local_GetSrcTimestamp';  // 本地源to本地目标
                    } else {
                        para.nStep = 'remote_GetSrcTimestamp';   // 远程源to本地目标
                    }
                    dbFlag++;
                } else {
                    // 源是否为本地？
                    if (para.srcLocal) {
                        para.nStep = 'local_GetSrcTimestamp';  // 本地源to远程目标
                        dbFlag++;
                    } else {
                        // 源不是本地，目标也不是本地，不存在这种情况，所以报错：
                        let error = {};
                        error.code = "error";
                        error.message = "不存在这种文件复制";
                        para.errorCallBack(error);
                    }
                }
                break;
            case 'remote_GetSrcTimestamp':
                // 获取源时间戳
                para.serverType = $def.server_serverMysql;
                this.remoteFile.remoteGetTimestamp(para.serverType, srcInfo, function (srcTimestamp) {
                    para.srcTimestamp = srcTimestamp;
                    para.nStep = 'local_GetDestTimestamp';
                    if (++dbFlag === 2) {
                        that.server_serverHardToServerMem(srcInfo, destInfo, isMove, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'local_GetSrcTimestamp':
                // 获取源时间戳
                $hardFile.hardGetTimestamp(srcInfo, function (srcTimestamp) {
                    para.srcTimestamp = srcTimestamp;
                    if (para.destLocal) {
                        para.nStep = 'local_GetDestTimestamp';
                    } else {
                        para.nStep = 'remote_GetDestTimestamp';
                    }

                    if (++dbFlag === 2) {
                        that.server_serverHardToServerMem(srcInfo, destInfo, isMove, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'remote_GetDestTimestamp':
                // 获取目标时间戳
                para.serverType = $def.server_serverMem;
                this.remoteFile.remoteGetTimestamp(para.serverType, destInfo, function (destTimestamp) {
                    // 对比文件名和时间戳
                    if (srcInfo.path === destInfo.path && para.srcTimestamp === destTimestamp) {
                        para.byteNum = 0;
                        para.nStep = 'end';
                    } else {
                        srcInfo.getTimestamp = 1;
                        para.nStep = 'local_readSrcFile';
                    }
                    if (++dbFlag === 2) {
                        that.server_serverHardToServerMem(srcInfo, destInfo, isMove, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'local_GetDestTimestamp':
                // 获取目标时间戳
                $cacheFile.cacheGetTimestamp(destInfo, function (destTimestamp) {
                    // 对比文件名和时间戳
                    if (srcInfo.path === destInfo.path && para.srcTimestamp === destTimestamp) {
                        para.byteNum = 0;
                        para.nStep = 'end';
                    } else {
                        srcInfo.getTimestamp = 1;
                        if (para.srcLocal) {
                            para.nStep = 'local_readSrcFile';
                        } else {
                            para.nStep = 'remote_readSrcFile';
                        }
                    }
                    if (++dbFlag === 2) {
                        that.server_serverHardToServerMem(srcInfo, destInfo, isMove, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'remote_readSrcFile':
                // 读源文件
                para.serverType = $def.server_serverMysql;
                this.remoteFile.remoteReadFile(para.serverType, srcInfo, function (result) {
                    destInfo.content = result.content;
                    destInfo.timestamp = result.timestamp;
                    para.byteNum = result.content.length;

                    // 是否大于2M
                    if (para.byteNum > 2097152 && isMove && para.destLocal) {
                        // 当文件大于2M时，不会把它转移（下载）到本地
                        para.byteNum = -1;
                        para.nStep = 'end';
                    } else {
                        para.nStep = 'local_writeDestFile';
                    }

                    if (++dbFlag === 2) {
                        that.server_serverHardToServerMem(srcInfo, destInfo, isMove, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'local_readSrcFile':
                // 读源文件
                $hardFile.hardReadFile(srcInfo, function (result) {
                    destInfo.content = result.content;
                    destInfo.timestamp = result.timestamp;
                    para.byteNum = result.content.length;

                    // 是否大于2M
                    if (para.byteNum > 2097152 && isMove && para.destLocal) {
                        // 当文件大于2M时，不会把它转移（下载）到本地
                        para.byteNum = -1;
                        para.nStep = 'end';
                    } else if (para.destLocal) {
                        para.nStep = 'local_writeDestFile';
                    } else {
                        para.nStep = 'remote_writeDestFile';
                    }

                    if (++dbFlag === 2) {
                        that.server_serverHardToServerMem(srcInfo, destInfo, isMove, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'remote_writeDestFile':
                // 写目标文件
                para.serverType = $def.server_serverMem;
                this.remoteFile.remoteWriteFile(para.serverType, destInfo, function (result) {
                    para.nStep = 'end';
                    if (++dbFlag === 2) {
                        that.server_serverHardToServerMem(srcInfo, destInfo, isMove, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'local_writeDestFile':
                // 写目标文件
                $cacheFile.cacheWriteFile(destInfo, function (result) {
                    para.nStep = 'end';
                    if (++dbFlag === 2) {
                        that.server_serverHardToServerMem(srcInfo, destInfo, isMove, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'end':
                para.successCallBack(para.byteNum);
                return
        }
        if (++dbFlag === 1) {
            return
        }
    }
};


/*
 *-------------------------------------------------------------------------------//
 * 复制文件 (服务器内存to服务器硬盘)
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.server_serverMemToServerHard = function (srcInfo, destInfo, successCallBack, errorCallBack) {
    let that = this;
    let dbFlag;
    let para = {
        successCallBack: successCallBack,
        errorCallBack: errorCallBack,
        nStep: 0,
    };

    if (successCallBack !== null) {
        errorCallBack = para;
        successCallBack = null
    }
    para = errorCallBack;

    while (1) {
        dbFlag = 0;
        if($baseDef.print) {
            console.log('baseFile.copy--server_serverMemToServerHard：' + para.nStep)
        }
        switch (para.nStep) {
            case 0:
                // 获取源是否为本地
                para.srcLocal = $public.isLocalServer(srcInfo.server);
                // 获取目标是否为本地
                para.destLocal = $public.isLocalServer(destInfo.server);
                // 目标server是否为本地？
                if (para.destLocal) {
                    // 源是否为本地？
                    if (para.srcLocal) {
                        para.nStep = 'local_GetSrcTimestamp';  // 本地源to本地目标
                    } else {
                        para.nStep = 'remote_GetSrcTimestamp';   // 远程源to本地目标
                    }
                    dbFlag++;
                } else {
                    // 源是否为本地？
                    if (para.srcLocal) {
                        para.nStep = 'local_GetSrcTimestamp';  // 本地源to远程目标
                        dbFlag++;
                    } else {
                        // 源不是本地，目标也不是本地，不存在这种情况，所以报错：
                        let error = {};
                        error.code = "error";
                        error.message = "不存在这种文件复制";
                        para.errorCallBack(error);
                    }
                }
                break;
            case 'remote_GetSrcTimestamp':
                // 获取源时间戳
                para.serverType = $def.server_serverMem;
                this.remoteFile.remoteGetTimestamp(para.serverType, srcInfo, function (srcTimestamp) {
                    para.srcTimestamp = srcTimestamp;
                    para.nStep = 'local_GetDestTimestamp';
                    if (++dbFlag === 2) {
                        that.server_serverMemToServerHard(srcInfo, destInfo, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'local_GetSrcTimestamp':
                // 获取源时间戳
                $cacheFile.cacheGetTimestamp(srcInfo, function (srcTimestamp) {
                    para.srcTimestamp = srcTimestamp;
                    if (para.destLocal) {
                        para.nStep = 'local_GetDestTimestamp';
                    } else {
                        para.nStep = 'remote_GetDestTimestamp';
                    }

                    if (++dbFlag === 2) {
                        that.server_serverMemToServerHard(srcInfo, destInfo, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'remote_GetDestTimestamp':
                // 获取目标时间戳
                para.serverType = $def.server_serverMysql;
                this.remoteFile.remoteGetTimestamp(para.serverType, destInfo, function (destTimestamp) {
                    // 对比文件名和时间戳
                    if (srcInfo.path === destInfo.path && para.srcTimestamp === destTimestamp) {
                        para.byteNum = 0;
                        para.nStep = 'end';
                    } else {
                        srcInfo.getTimestamp = 1;
                        para.nStep = 'local_readSrcFile';
                    }
                    if (++dbFlag === 2) {
                        that.server_serverMemToServerHard(srcInfo, destInfo, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'local_GetDestTimestamp':
                // 获取目标时间戳
                $hardFile.hardGetTimestamp(destInfo, function (destTimestamp) {
                    // 对比文件名和时间戳
                    if (srcInfo.path === destInfo.path && para.srcTimestamp === destTimestamp) {
                        para.byteNum = 0;
                        para.nStep = 'end';
                    } else {
                        srcInfo.getTimestamp = 1;
                        if (para.srcLocal) {
                            para.nStep = 'local_readSrcFile';
                        } else {
                            para.nStep = 'remote_readSrcFile';
                        }
                    }
                    if (++dbFlag === 2) {
                        that.server_serverMemToServerHard(srcInfo, destInfo, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'remote_readSrcFile':
                // 读源文件
                para.serverType = $def.server_serverMem;
                this.remoteFile.remoteReadFile(para.serverType, srcInfo, function (result) {
                    destInfo.content = result.content;
                    destInfo.timestamp = result.timestamp;
                    para.byteNum = result.content.length;

                    para.nStep = 'local_writeDestFile';
                    if (++dbFlag === 2) {
                        that.server_serverMemToServerHard(srcInfo, destInfo, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'local_readSrcFile':
                // 读源文件
                $cacheFile.cacheReadFile(srcInfo, function (result) {
                    destInfo.content = result.content;
                    destInfo.timestamp = result.timestamp;
                    para.byteNum = result.content.length;

                    if (para.destLocal) {
                        para.nStep = 'local_writeDestFile';
                    } else {
                        para.nStep = 'remote_writeDestFile';
                    }
                    if (++dbFlag === 2) {
                        that.server_serverMemToServerHard(srcInfo, destInfo, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'remote_writeDestFile':
                // 写目标文件
                para.serverType = $def.server_serverMysql;
                this.remoteFile.remoteWriteFile(para.serverType, destInfo, function (result) {
                    para.nStep = 'end';
                    if (++dbFlag === 2) {
                        that.server_serverMemToServerHard(srcInfo, destInfo, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'local_writeDestFile':
                // 写目标文件
                $hardFile.hardWriteFile(destInfo, function (result) {
                    para.nStep = 'end';
                    if (++dbFlag === 2) {
                        that.server_serverMemToServerHard(srcInfo, destInfo, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'end':
                para.successCallBack(para.byteNum);
                return
        }
        if (++dbFlag === 1) {
            return
        }
    }
};


/*
 *-------------------------------------------------------------------------------//
 * 复制文件 (服务器硬盘to服务器硬盘)
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.server_serverHardToServerHard = function (srcInfo, destInfo, successCallBack, errorCallBack) {
    let that = this;
    let dbFlag;
    let para = {
        successCallBack: successCallBack,
        errorCallBack: errorCallBack,
        nStep: 0,
    };

    if (successCallBack !== null) {
        errorCallBack = para;
        successCallBack = null
    }
    para = errorCallBack;

    while (1) {
        dbFlag = 0;
        if($baseDef.print) {
            console.log('baseFile.copy--server_serverHardToServerHard：' + para.nStep)
        }
        switch (para.nStep) {
            case 0:
                // 获取源是否为本地
                let srcLocal = $public.isLocalServer(srcInfo.server);
                // 获取目标是否为本地
                let destLocal = $public.isLocalServer(destInfo.server);
                // 目标server是否为本地？
                if (destLocal) {
                    // 源是否为本地？
                    if (srcLocal) {
                        para.nStep = 'end';
                    } else {
                        para.nStep = 'remote_GetSrcTimestamp';   // 远程源to本地目标
                    }
                    dbFlag++;
                } else {
                    // 源是否为本地？
                    if (srcLocal) {
                        para.nStep = 'local_GetSrcTimestamp';  // 本地源to远程目标
                        dbFlag++;
                    } else {
                        // 源不是本地，目标也不是本地，不存在这种情况，所以报错：
                        let error = {};
                        error.code = "error";
                        error.message = "不存在这种文件复制";
                        para.errorCallBack(error);
                    }
                }
                break;
            case 'remote_GetSrcTimestamp':
                // 获取源时间戳
                para.serverType = $public.getServerType(srcInfo.server);
                this.remoteFile.remoteGetTimestamp(para.serverType, srcInfo, function (srcTimestamp) {
                    para.srcTimestamp = srcTimestamp;
                    para.nStep = 'local_GetDestTimestamp';
                    if (++dbFlag === 2) {
                        that.server_serverHardToServerHard(srcInfo, destInfo, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'local_GetSrcTimestamp':
                // 获取源时间戳
                $hardFile.hardGetTimestamp(srcInfo, function (srcTimestamp) {
                    para.srcTimestamp = srcTimestamp;
                    para.nStep = 'remote_GetDestTimestamp';
                    if (++dbFlag === 2) {
                        that.server_serverHardToServerHard(srcInfo, destInfo, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'remote_GetDestTimestamp':
                // 获取目标时间戳
                para.serverType = $public.getServerType(destInfo.server);
                this.remoteFile.remoteGetTimestamp(para.serverType, destInfo, function (destTimestamp) {
                    // 对比文件名和时间戳
                    if (srcInfo.path === destInfo.path && para.srcTimestamp === destTimestamp) {
                        para.nStep = 'end';
                    } else {
                        para.nStep = 'uploadFile';
                    }
                    if (++dbFlag === 2) {
                        that.server_serverHardToServerHard(srcInfo, destInfo, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'local_GetDestTimestamp':
                // 获取目标时间戳
                $hardFile.hardGetTimestamp(destInfo, function (destTimestamp) {
                    // 对比文件名和时间戳
                    if (srcInfo.path === destInfo.path && para.srcTimestamp === destTimestamp) {
                        para.nStep = 'end';
                    } else {
                        para.nStep = 'downloadFile';
                    }
                    if (++dbFlag === 2) {
                        that.server_serverHardToServerHard(srcInfo, destInfo, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'downloadFile':
                // 下载此文件到本地
                $hardFile.hardCopyFile_downloadFile(srcInfo, destInfo, function () {
                    destInfo.timestamp = para.srcTimestamp;
                    para.nStep = 'local_hardSetTimestamp';
                    if (++dbFlag === 2) {
                        that.server_serverHardToServerHard(srcInfo, destInfo, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'uploadFile':
                // 上传此文件到远程
                $hardFile.hardCopyFile_uploadFile(srcInfo, destInfo, function () {
                    destInfo.timestamp = para.srcTimestamp;
                    para.nStep = 'remote_hardSetTimestamp';
                    if (++dbFlag === 2) {
                        that.server_serverHardToServerHard(srcInfo, destInfo, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'local_hardSetTimestamp':
                //  更新时间戳
                $hardFile.hardSetTimestamp(destInfo, function (result) {
                    para.nStep = 'end';
                    if (++dbFlag === 2) {
                        that.server_serverHardToServerHard(srcInfo, destInfo, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'remote_hardSetTimestamp':
                //  更新时间戳
                para.serverType = $public.getServerType(destInfo.server);
                this.remoteFile.remoteSetTimestamp(para.serverType, destInfo, function (result) {
                    para.nStep = 'end';
                    if (++dbFlag === 2) {
                        that.server_serverHardToServerHard(srcInfo, destInfo, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
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

