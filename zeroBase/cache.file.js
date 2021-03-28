var $public = require(global.dbPath + "/public.js");

function CacheFile() {
    // 文件系统格式:
    this.arrHandle = {};
    // this.arrHandle[path] = {}
    // this.arrHandle[path].content = "文件内容"
    // this.arrHandle[path].timestamp = "时间戳"
}


/*
* -----------------------------------------------------*
*  功能：读取文件内容
* -----------------------------------------------------*
* */
CacheFile.prototype.cacheReadFile = function (urlInfo, successCallBack, errorCallBack) {
    // console.time('cacheReadFile')
    // 获取url信息
    let path = urlInfo.path;
    let getTimestamp = urlInfo.getTimestamp;

    // 获取文件句柄
    let file = this.arrHandle[path];

    // 是否找到了此记录
    if (file === undefined) {
        let error = {};
        error.code = 99;
        error.message = "文件不存在";
        errorCallBack(error)
    } else {
        let result = {};
        result.content = file.content;
        if (getTimestamp) result.timestamp = file.timestamp;
        // console.timeEnd('cacheReadFile')
        successCallBack(result);
    }
};


/*
* -----------------------------------------------------*
*  功能：写文件内容
* -----------------------------------------------------*
* */
CacheFile.prototype.cacheWriteFile = function (urlInfo, successCallBack, errorCallBack) {
    // 获取url信息
    let path = urlInfo.path;
    let content = urlInfo.content;
    let timestamp = urlInfo.timestamp;

    // 转换要写的内容
    content = $public.getWriteArrayData(content);

    // 需要修改时间戳吗，当timestamp=0，表示文件不是复制来的，则时间戳也不需要复制；
    if (!timestamp) {
        timestamp = new Date().getTime();
    }

    // 新建文件句柄
    let file = {};
    file.content = content;
    file.timestamp = timestamp;
    // 保存
    this.arrHandle[path] = file;

    successCallBack();
};


/*
* -----------------------------------------------------*
*  功能：追加文件内容
* -----------------------------------------------------*
* */
CacheFile.prototype.cacheAppendFile = function (urlInfo, successCallBack, errorCallBack) {
    // 获取url信息
    let path = urlInfo.path;
    let content = urlInfo.content;

    // 转换要写的内容
    content = $public.getWriteArrayData(content);
    // 获取文件句柄
    let file = this.arrHandle[path];

    // 是否找到了此记录
    if (file === undefined) {
        let error = {};
        error.code = 99;
        error.message = "文件不存在";
        errorCallBack(error);
    } else {
        // 获取时间戳
        let timestamp = new Date().getTime();
        // 记录存在，修改
        file.content += content;
        file.timestamp = timestamp;

        // 返回时间戳
        successCallBack();
    }
};


/*
* -----------------------------------------------------*
*  功能：删除文件内容
* -----------------------------------------------------*
* */
CacheFile.prototype.cacheDeleteFile = function (urlInfo, successCallBack, errorCallBack) {
    // 获取url信息
    let path = urlInfo.path;

    // 删除文件
    delete this.arrHandle[path];
    successCallBack()
};


/*
* -----------------------------------------------------*
*  功能：获取源文件大小
* -----------------------------------------------------*
* */
CacheFile.prototype.cacheGetFileSize = function (urlInfo, successCallBack, errorCallBack) {
    let fileSize;
    // 获取url信息
    let path = urlInfo.path;

    // 获取文件句柄
    let file = this.arrHandle[path];
    // 是否找到了文件
    if (file === undefined) {
        fileSize = 0;
    } else {
        // 获取文件大小
        fileSize = file.content.length;
    }
    successCallBack(fileSize)
};


/*
* -----------------------------------------------------*
*  功能：获取文件时间戳
* -----------------------------------------------------*
* */
CacheFile.prototype.cacheGetTimestamp = function (urlInfo, successCallBack, errorCallBack) {
    // 获取url信息
    let path = urlInfo.path;
    let outUrl = urlInfo.outUrl;

    // 获取文件句柄
    let file = this.arrHandle[path];

    // 是否找到了此记录
    if (file === undefined) {
        successCallBack(0);
    } else {
        // 获取时间戳
        let timestamp = file.timestamp;
        // 返回时间戳
        successCallBack(timestamp);
    }
};


/*
* -----------------------------------------------------*
*  功能：设置文件时间戳
* -----------------------------------------------------*
* */
CacheFile.prototype.cacheSetTimestamp = function (urlInfo, successCallBack, errorCallBack) {
    // 获取url信息
    let path = urlInfo.path;
    let outUrl = urlInfo.outUrl;

    // 获取文件句柄
    let file = this.arrHandle[path];

    // 是否找到了此记录
    if (file === undefined) {
        let error = {};
        error.code = 99;
        error.message = "文件不存在";
        errorCallBack(error);
    } else {
        //设置时间戳
        file.timestamp = urlInfo.timestamp;
        successCallBack();
    }
};


let $cacheFile = new CacheFile();
module.exports = $cacheFile;
