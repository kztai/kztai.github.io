const $fileApi = require(global.dbPath + "/file.api.js");
const $hardFile = require(global.dbPath + "/zeroBase/hard.file.js");
const $fileFunc = require(global.dbPath + "/zeroBase/files.func.js");
const $baseDef = require(global.dbPath + "/zeroBase/base.def.js");
const $public = require(global.dbPath + "/public.js");
const fs = require("fs");

function HardFileApi() {
    this.arrRemoteFile = {};
}




/*
* -----------------------------------------------------*
*  功能：打开文件
* -----------------------------------------------------*
* */
HardFileApi.prototype.hardOpen = function (urlInfo, successCallBack, errorCallBack) {
    // 打开文件
    // fs.open(path[, flags[, mode]], callback)
    // $filePath, 必选参数，文件名(包括路径)
    // flags, 操作标识，如"r",读方式打开（选填）
    // [mode],权限，如777，表示任何用户读写可执行（选填）
    // callback 打开文件后回调函数，参数默认第一个err,第二个fd为一个整数，表示打开文件返回的文件描述符，window中又称文件句柄

    // 获取文件相对路径
    let relativePath = $fileApi.rootDir + "/" + $fileFunc.get_relative_path(urlInfo);
    fs.open(relativePath, $baseDef.openType, function (error, fd) {
        if (error) {
            let result = {};
            result.code = error.code;
            result.message = error.message;
            errorCallBack(error);
            return;
        }
        // 返回文件内容
        let file = {fd, path:relativePath};
        successCallBack(file);
    });
};


/*
* -----------------------------------------------------*
*  功能：关闭文件
* -----------------------------------------------------*
* */
HardFileApi.prototype.hardClose = function (urlInfo, successCallBack, errorCallBack) {
    fs.close(urlInfo.file.fd, function (error) {
        if (error) {
            let result = {};
            result.code = error.code;
            result.message = error.message;
            errorCallBack(error);
            return;
        }
        // 返回文件内容
        successCallBack()
    });
};


/*
* -----------------------------------------------------*
*  功能：删除文件
* -----------------------------------------------------*
* */
HardFileApi.prototype.hardDelete = function (urlInfo, successCallBack, errorCallBack) {
    $hardFile.hardDeleteFile(urlInfo, successCallBack, errorCallBack)
};


/*
* -----------------------------------------------------*
*  功能：创建文件
* -----------------------------------------------------*
* */
HardFileApi.prototype.hardCreate = function (urlInfo, successCallBack, errorCallBack) {
    urlInfo.timestamp = 0;
    $hardFile.hardWriteFile(urlInfo, successCallBack, errorCallBack)
};


/*
* -----------------------------------------------------------------------------------------------------*
* 功能：读文件
* fs.read(fd, buffer, offset, length, position, callback);
* fd, 使用fs.open打开成功后返回的文件描述符
* buffer, 一个Buffer对象，v8引擎分配的一段内存
* offset, 整数，向缓存区中写入时的初始位置，以字节为单位
* length, 整数，读取文件的长度
* position, 整数，读取文件初始位置；文件大小以字节为单位
* callback(err, bytesRead, buffer), 读取执行完成后回调函数，bytesRead实际读取字节数，被读取的缓存区对象
* -----------------------------------------------------------------------------------------------------*
* */
HardFileApi.prototype.hardRead = function (urlInfo, successCallBack, errorCallBack) {
    fs.stat(urlInfo.file.path, function (err, stats) {
        if(err) {
            errorCallBack(err);
            return
        }

        // 根据objPara组织参数
        let offset = 0;
        let length = urlInfo.length ? urlInfo.length : stats.size;
        let position = urlInfo.offset ? urlInfo.offset : 0;
        let buffer = Buffer.alloc(length);
        let fd = urlInfo.file.fd;

        fs.read(fd, buffer, offset, length, position, function (error, bytesRead, buffer) {
            if (error) {
                let result = {};
                result.code = error.code;
                result.message = error.message;
                errorCallBack(error);
                return;
            }

            let content;
            let base64Type = ['jpg','bmp','eps','gif','mif','miff','png','tif','tiff','svg','wmf','jpe','jpeg','dib','ico','tga','cut','pic', "JPG", "BMP", "EPS", "GIF", "MIF", "MIFF", "PNG", "TIF", "TIFF", "SVG", "WMF", "JPE", "JPEG", "DIB", "ICO", "TGA", "CUT", "PIC", "avi", "asf", "wmv", "avs", "flv", "mkv", "mov", "3gp", "mp4", "mpg", "mpeg", "dat", "ogm", "vob", "rm", "rmvb", "ts", "tp", "ifo", "nsv", "mp3", "aac", "wav", "wma", "cda", "flac", "m4a", "mid", "mka", "mp2", "mpa", "mpc", "ape", "ofr", "ogg", "ra", "wv", "tta", "ac3", "dts", 'AVI','ASF','WMV','AVS','FLV','MKV','MOV','3GP','MP4','MPG','MPEG','DAT','OGM','VOB','RM','RMVB','TS','TP','IFO','NSV', 'MP3','AAC','WAV','WMA','CDA','FLAC','M4A','MID','MKA','MP2','MPA','MPC','APE','OFR','OGG','RA','WV','TTA','AC3','DTS'];
            // 判断是不是base64格式的数据：
            let temp = urlInfo.file.path.split('.');
            if(base64Type.includes(temp[temp.length-1])) {
                // 是base64的格式：
                content = $public.fileContentToBase64(buffer.slice(0, bytesRead));
            } else {
                content = buffer.slice(0, bytesRead).toString();
            }

            // 返回文件内容
            successCallBack(content)
        });
    });
};


/*
* -----------------------------------------------------------------------------------------------------*
* 功能：写文件
* fs.write(fd, buffer, offset, length, position, callback);
* fd, 使用fs.open打开成功后返回的文件描述符
* buffer, 一个Buffer对象，v8引擎分配的一段内存
* offset, 整数，从缓存区中读取时的初始位置，以字节为单位
* length, 整数，从缓存区中读取数据的字节数
* position, 整数，写入文件初始位置；
* callback(err, written, buffer), 写入操作执行完成后回调函数，written实际写入字节数，buffer被读取的缓存区对象
* -----------------------------------------------------------------------------------------------------*
* */
HardFileApi.prototype.hardWrite = function (urlInfo, successCallBack, errorCallBack) {
    // 根据urlInfo组织参数
    let position = urlInfo.offset;
    let fd = urlInfo.file.fd;
    let content = urlInfo.content;

    // fs.write(fd, content, position, function(error, written, string) {
    fs.write(fd, content, position, 'utf-8', function(error, written, string) {
        if (error) {
            let result = {};
            result.code = error.code;
            result.message = error.message;
            errorCallBack(error);
            return;
        }
        // 返回字节数
        successCallBack(written)
    })
};


/*
* -----------------------------------------------------*
*  功能：打开文件（远程）
* -----------------------------------------------------*
* */
HardFileApi.prototype.hardRemoteOpen = function (urlInfo, successCallBack, errorCallBack) {
    // 打开文件
    let that = this;
    this.hardOpen(urlInfo, function (file) {
        let time = new Date().getTime();
        that.arrRemoteFile[time] = file;
        successCallBack(time);
    }, errorCallBack);
};


/*
* -----------------------------------------------------*
*  功能：删除文件（远程）
* -----------------------------------------------------*
* */
HardFileApi.prototype.hardRemoteClose = function (urlInfo, successCallBack, errorCallBack) {
    // 获取url信息
    let file = urlInfo.file.remoteFile;

    // 获取文件句柄
    let fd = this.arrRemoteFile[file].fd;

    // 是否找到了此记录
    if (fd === undefined) {
        let error = {};
        error.code = 99;
        error.message = "句柄丢失";
        errorCallBack(error)
    } else {
        delete this.arrRemoteFile[file];
        urlInfo.file.fd = fd;
        this.hardClose(urlInfo, successCallBack, errorCallBack);
    }
};


/*
* -----------------------------------------------------*
*  功能：删除文件（远程）
* -----------------------------------------------------*
* */
HardFileApi.prototype.hardRemoteDelete = function (urlInfo, successCallBack, errorCallBack) {
    $hardFile.hardDeleteFile(urlInfo, successCallBack, errorCallBack)
};


/*
* -----------------------------------------------------*
*  功能：创建文件
* -----------------------------------------------------*
* */
HardFileApi.prototype.hardRemoteCreate = function (urlInfo, successCallBack, errorCallBack) {
    urlInfo.timestamp = 0;
    $hardFile.hardWriteFile(urlInfo, successCallBack, errorCallBack)
};


/*
* -----------------------------------------------------*
*  功能：读文件（远程）
* -----------------------------------------------------*
* */
HardFileApi.prototype.hardRemoteRead = function (urlInfo, successCallBack, errorCallBack) {
    // 获取url信息
    let file = urlInfo.file.remoteFile;

    // 获取文件句柄
    let fd = this.arrRemoteFile[file].fd;
    let path = this.arrRemoteFile[file].path;

    // 是否找到了此记录
    if (fd === undefined) {
        let error = {};
        error.code = 99;
        error.message = "句柄丢失";
        errorCallBack(error)
    } else {
        urlInfo.file.fd = fd;
        urlInfo.file.path = path;
        this.hardRead(urlInfo, successCallBack, errorCallBack);
    }
};


/*
* -----------------------------------------------------*
*  功能：读文件（远程）
* -----------------------------------------------------*
* */
HardFileApi.prototype.hardRemoteWrite = function (urlInfo, successCallBack, errorCallBack) {
    // 获取url信息
    let file = urlInfo.file.remoteFile;

    // 获取文件句柄
    let fd = this.arrRemoteFile[file].fd;

    // 是否找到了此记录
    if (fd === undefined) {
        let error = {};
        error.code = 99;
        error.message = "句柄丢失";
        errorCallBack(error)
    } else {
        urlInfo.file.fd = fd;
        this.hardWrite(urlInfo, successCallBack, errorCallBack);
    }
};


let $hardFileApi = new HardFileApi();
module.exports = $hardFileApi;
