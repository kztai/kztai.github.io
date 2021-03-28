const fs = require("fs");
const $fileApi = require(global.dbPath + "/file.api.js");
const $fileFunc = require(global.dbPath + "/zeroBase/files.func.js");

function HardFile() {}


/*
* -----------------------------------------------------*
*  功能：读取文件内容
* -----------------------------------------------------*
* */
HardFile.prototype.hardReadFile = function (urlInfo, successCallBack, errorCallBack) {
    // console.time('hardReadFile')
    let that = this;
    // 获取url信息
    let getTimestamp = urlInfo.getTimestamp;

    // 获取文件相对路径
    let relativePath = $fileFunc.get_relative_path(urlInfo);
    // 读取文件
    $fileApi.readFile(relativePath, function (content) {
        let result = {};
        result.content = content;
        // 要获取时间戳吗，当getTimestamp=1时，表示文件是复制来的，也要把时间戳一起复制：
        if (getTimestamp) {
            that.hardGetTimestamp(urlInfo, function (timestamp) {
                result.timestamp = timestamp;
                successCallBack(result);
            }, errorCallBack)
        } else {
            // console.timeEnd('hardReadFile')
            successCallBack(result);
        }
    }, errorCallBack);
};


/*
* -----------------------------------------------------*
*  功能：写文件内容
* -----------------------------------------------------*
* */
HardFile.prototype.hardWriteFile = function (urlInfo, successCallBack, errorCallBack) {
    let that = this;
    // 获取url信息
    let content = urlInfo.content;
    let timestamp = urlInfo.timestamp;

    // 获取文件相对路径
    let relativePath = $fileFunc.get_relative_path(urlInfo);

    $fileApi.writeFile(content, relativePath, function () {
        if (timestamp) {
            that.hardSetTimestamp(urlInfo, successCallBack, errorCallBack)
        } else {
            successCallBack()
        }
    }, errorCallBack);
};


/*
* -----------------------------------------------------*
*  功能：追加文件内容
* -----------------------------------------------------*
* */
HardFile.prototype.hardAppendFile = function (urlInfo, successCallBack, errorCallBack) {
    // 获取url信息
    let content = urlInfo.content;
    // 获取文件相对路径
    let relativePath = $fileFunc.get_relative_path(urlInfo);

    $fileApi.appendFile(content, relativePath, successCallBack, errorCallBack)
};


/*
* -----------------------------------------------------*
*  功能：删除文件内容
* -----------------------------------------------------*
* */
HardFile.prototype.hardDeleteFile = function (urlInfo, successCallBack, errorCallBack) {
    // 获取文件相对路径
    let relativePath = $fileFunc.get_relative_path(urlInfo);

    $fileApi.deleteFile(relativePath, successCallBack, errorCallBack)
};


/*
* -----------------------------------------------------*
*  功能：复制文件-外网到本地
* -----------------------------------------------------*
* */
HardFile.prototype.hardCopyFile_urlToLocal = function (urlInfo, successCallBack, errorCallBack) {
    // 获取url信息
    let outUrl = urlInfo.outUrl;
    // 获取文件相对路径
    let relativePath = $fileFunc.get_relative_path(urlInfo);

    $fileApi.copyFile_urlToLocal(outUrl, relativePath, successCallBack, errorCallBack)
};


/*
* -----------------------------------------------------*
*  功能：复制文件-本地到本地
* -----------------------------------------------------*
* */
HardFile.prototype.hardCopyFile_localToLocal = function (srcUrlInfo, destUrlInfo, successCallBack, errorCallBack) {
    // 获取文件相对路径
    let srcPath = $fileFunc.get_relative_path(srcUrlInfo);
    let destPath = $fileFunc.get_relative_path(destUrlInfo);

    // 复制文件
    $fileApi.copyFile_localToLocal(srcPath, destPath, successCallBack, errorCallBack)
};


/*
* -----------------------------------------------------*
*  功能：复制文件-远程到本地
* -----------------------------------------------------*
* */
HardFile.prototype.hardCopyFile_downloadFile = function (srcUrlInfo, destUrlInfo, successCallBack, errorCallBack) {
    // 获取源url信息
    let srcServer = srcUrlInfo.server;

    // 获取文件相对路径
    let destPath = $fileFunc.get_relative_path(destUrlInfo);
    let srcPath = $fileFunc.get_relative_path(srcUrlInfo);
    srcPath = '/' + srcPath;

    // 复制文件
    $fileApi.copyFile_downloadFile(srcServer, srcPath, destPath, successCallBack, errorCallBack)
};


/*
* -----------------------------------------------------*
*  功能：复制文件-本地到远程
* -----------------------------------------------------*
* */
HardFile.prototype.hardCopyFile_uploadFile = function (srcUrlInfo, destUrlInfo, successCallBack, errorCallBack) {
    // 获取目标url信息
    let destServer = destUrlInfo.server;

    // 获取文件相对路径
    let srcPath = $fileFunc.get_relative_path(srcUrlInfo);
    let destPath = $fileFunc.get_relative_path(destUrlInfo);
    destPath = '/' + destPath;

    // 复制文件
    $fileApi.copyFile_uploadFile(destServer, destPath, srcPath, successCallBack, errorCallBack);
};



/*
* -----------------------------------------------------*
*  功能：获取文件时间戳
* -----------------------------------------------------*
* */
HardFile.prototype.hardGetTimestamp = function (urlInfo, successCallBack, errorCallBack) {
    let path = $fileFunc.get_relative_path(urlInfo);
    path = $fileApi.rootDir + "/" + path;

    fs.stat(path, function (error, result) {
        if (error) {
            if(error.errno === -4058) {
                successCallBack(0);
            } else {
                errorCallBack(error);
            }
            return;
        }
        successCallBack(result.mtimeMs);
    });
};


/*
* -----------------------------------------------------*
*  功能：设置文件时间戳
* -----------------------------------------------------*
* */
HardFile.prototype.hardSetTimestamp = function (urlInfo, successCallBack, errorCallBack) {
    let path = $fileFunc.get_relative_path(urlInfo);
    path = $fileApi.rootDir + "/" + path;
    let time = new Date(urlInfo.timestamp);

    fs.utimes(path, time, time, function (error) {
        if (error) {
            errorCallBack(error);
            return;
        }
        successCallBack();
    });
};


let $hardFile = new HardFile();
module.exports = $hardFile;
