const $cacheFile = require(global.dbPath + "/zeroBase/cache.file.js");
const $public = require(global.dbPath + "/public.js");

function CacheFileApi() {
    this.arrRemoteFile = {};
}


/*
* -----------------------------------------------------*
*  功能：打开文件
* -----------------------------------------------------*
* */
CacheFileApi.prototype.cacheOpen = function (urlInfo, successCallBack, errorCallBack) {
    // 获取url信息
    let path = urlInfo.path;

    // 获取文件句柄
    let fd = $cacheFile.arrHandle[path];

    // 是否找到了此记录
    if (fd === undefined) {
        let error = {};
        error.code = 99;
        error.message = "文件不存在";
        errorCallBack(error)
    } else {
        let file = {};
        file.fd = fd;
        successCallBack(file);
    }
};


/*
* -----------------------------------------------------*
*  功能：关闭文件
* -----------------------------------------------------*
* */
CacheFileApi.prototype.cacheClose = function (urlInfo, successCallBack, errorCallBack) {
    successCallBack();
};


/*
* -----------------------------------------------------*
*  功能：删除文件
* -----------------------------------------------------*
* */
CacheFileApi.prototype.cacheDelete = function (urlInfo, successCallBack, errorCallBack) {
    $cacheFile.cacheDeleteFile(urlInfo, successCallBack, errorCallBack)
};


/*
* -----------------------------------------------------*
*  功能：创建文件
* -----------------------------------------------------*
* */
CacheFileApi.prototype.cacheCreate = function (urlInfo, successCallBack, errorCallBack) {
    urlInfo.timestamp = 0;
    $cacheFile.cacheWriteFile(urlInfo, successCallBack, errorCallBack)
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
CacheFileApi.prototype.cacheRead = function (urlInfo, successCallBack, errorCallBack) {
    // 根据objPara组织参数
    let length = urlInfo.length;
    let position = urlInfo.offset;
    let fd = urlInfo.file.fd;
    this.cache_file_read(fd, length, position, successCallBack, function (error) {
        let result = {};
        result.code = error.code;
        result.message = error.message;
        errorCallBack(error);
    });
};


/*
* -----------------------------------------------------------------------------------------------------*
* 功能：读文件
* fd, 使用fs.open打开成功后返回的文件描述符
* length, 整数，读取文件的长度
* position, 整数，读取文件初始位置；文件大小以字节为单位
* -----------------------------------------------------------------------------------------------------*
* */
CacheFileApi.prototype.cache_file_read = function (fd, length, position, successCallBack, errorCallBack) {
    let content = fd.content;

    // content类型为普通文本与二进制格式，二进制格式需转化：
    if (typeof content !== "string") {
        content = $public.fileContentToBase64(content);
    }

    content = length === null || position === null ? content : content.substr(position, length);

    successCallBack(content)
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
CacheFileApi.prototype.cacheWrite = function (urlInfo, successCallBack, errorCallBack) {
    // 根据objPara组织参数
    let position = urlInfo.offset;
    let content = urlInfo.content;
    let fd = urlInfo.file.fd;
    this.cache_file_write(fd, content, position, successCallBack, function (error) {
        let result = {};
        result.code = error.code;
        result.message = error.message;
        errorCallBack(error);
    });
};


/*
* -----------------------------------------------------------------------------------------------------*
* 功能：写文件
* fd, 使用fs.open打开成功后返回的文件描述符
* buffer, 一个Buffer对象，v8引擎分配的一段内存
* offset, 整数，从缓存区中读取时的初始位置，以字节为单位
* length, 整数，从缓存区中读取数据的字节数
* position, 整数，写入文件初始位置；
* callback(err, written, buffer), 写入操作执行完成后回调函数，written实际写入字节数，buffer被读取的缓存区对象
* -----------------------------------------------------------------------------------------------------*
* */
CacheFileApi.prototype.cache_file_write = function (fd, content, position, successCallBack, errorCallBack) {
    let fileContent = fd.content;
    let time = new Date().getTime();
    fd.content = fileContent.slice(0, position) + content + fileContent.slice(position + content.length);
    fd.timestamp = time;
    successCallBack(fd.content.length)
};


/*
* -----------------------------------------------------*
*  功能：打开文件（远程）
* -----------------------------------------------------*
* */
CacheFileApi.prototype.cacheRemoteOpen = function (urlInfo, successCallBack, errorCallBack) {
    // 打开文件
    let that = this;
    this.cacheOpen(urlInfo, function (file) {
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
CacheFileApi.prototype.cacheRemoteClose = function (urlInfo, successCallBack, errorCallBack) {
    // 获取url信息
    let file = urlInfo.file.remoteFile;

    // 获取文件句柄
    let fd = this.arrRemoteFile[file];

    // 是否找到了此记录
    if (fd === undefined) {
        let error = {};
        error.code = 99;
        error.message = "句柄丢失";
        errorCallBack(error)
    } else {
        delete this.arrRemoteFile[file];
        successCallBack();
    }
};


/*
* -----------------------------------------------------*
*  功能：删除文件（远程）
* -----------------------------------------------------*
* */
CacheFileApi.prototype.cacheRemoteDelete = function (urlInfo, successCallBack, errorCallBack) {
    $cacheFile.cacheDeleteFile(urlInfo, successCallBack, errorCallBack)
};


/*
* -----------------------------------------------------*
*  功能：创建文件
* -----------------------------------------------------*
* */
CacheFileApi.prototype.cacheRemoteCreate = function (urlInfo, successCallBack, errorCallBack) {
    urlInfo.timestamp = 0;
    $cacheFile.cacheWriteFile(urlInfo, successCallBack, errorCallBack)
};


/*
* -----------------------------------------------------*
*  功能：读文件（远程）
* -----------------------------------------------------*
* */
CacheFileApi.prototype.cacheRemoteRead = function (urlInfo, successCallBack, errorCallBack) {
    // urlInfo = {
    //     offset,
    //     length,
    //     file: {
    //         remote: 123456789,
    //         serverType,
    //         server
    //     }
    // };


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
        this.cacheRead(urlInfo, successCallBack, errorCallBack);
    }
};


/*
* -----------------------------------------------------*
*  功能：读文件（远程）
* -----------------------------------------------------*
* */
CacheFileApi.prototype.cacheRemoteWrite = function (urlInfo, successCallBack, errorCallBack) {
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
        this.cacheWrite(urlInfo, successCallBack, errorCallBack);
    }
};


let $cacheFileApi = new CacheFileApi();
module.exports = $cacheFileApi;
