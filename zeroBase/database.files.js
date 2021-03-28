const $public = require(global.dbPath + "/public.js");
const CDatabase = require(global.dbPath + "/database.js");
const $def = require(global.dbPath + "/mem.def.js");
const $hardFile = require(global.dbPath + "/zeroBase/hard.file.js");
const $cacheFile = require(global.dbPath + "/zeroBase/cache.file.js");
const $fileFunc = require(global.dbPath + "/zeroBase/files.func.js");
const $baseDef = require(global.dbPath + "/zeroBase/base.def.js");



/*
 *-------------------------------------------------------------------------------//
 * 设置文件指针
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.setPara = function ($remoteFile) {
    this.remoteFile =$remoteFile;
};


/*
 *-------------------------------------------------------------------------------//
 * 读文件
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.readFile = function (arrUrl, successCallBack, errorCallBack) {
    let type = $baseDef.read;
    // 申请缓存区
    let arrContent = [];
    this.procFile(type, arrUrl, arrContent, function () {
        successCallBack(arrContent);
    }, errorCallBack)
};


/*
 *-------------------------------------------------------------------------------//
 * 读Base64文件
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.readFileBase64 = function (arrUrl, successCallBack, errorCallBack) {
    let type = $baseDef.read;
    // 申请缓存区
    let arrContent = [];
    this.procFile(type, arrUrl, arrContent, function () {
        for (let i = 0; i < arrContent.length; i++) {
            // 获取一个content
            let content = arrContent[i];
            // 转base64
            content = $public.fileContentToBase64(content);
            // 保存内容
            arrContent[i] = content;
        }
        successCallBack(arrContent);
    }, function (error) {
        errorCallBack(error)
    })
};


/*
 *-------------------------------------------------------------------------------//
 * 写文件
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.writeFile = function (arrUrl, arrContent, successCallBack, errorCallBack) {
    let type = $baseDef.write;
    this.procFile(type, arrUrl, arrContent, successCallBack, errorCallBack)
};


/*
 *-------------------------------------------------------------------------------//
 * 追加文件
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.appendFile = function (arrUrl, arrContent, successCallBack, errorCallBack) {
    let type = $baseDef.append;
    this.procFile(type, arrUrl, arrContent, successCallBack, errorCallBack)
};


/*
 *-------------------------------------------------------------------------------//
 * 删除文件
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.deleteFile = function (arrUrl, successCallBack, errorCallBack) {
    let type = $baseDef.delete;
    this.procFile(type, arrUrl, null, successCallBack, errorCallBack)
};


/*
 *-------------------------------------------------------------------------------//
 * 处理文件
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.procFile = function (type, arrUrl, arrContent, successCallBack, errorCallBack) {
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
            console.log('baseFile--procFile：' + para.nStep)
        }
        switch (para.nStep) {
            case 0:
                // 获取平台类型
                para.platform = $public.getPlatform();

                para.nStep = 'get_procFile_type';
                dbFlag++;
                break;
            case 'get_procFile_type':  // 根据代码运行平台，server类型，判断需要处理的文件类型
                if (para.i >= arrUrl.length) {
                    para.i = 0;
                    para.nStep = 'end';
                    dbFlag++;
                    break;
                }

                para.content = arrContent ? arrContent[para.i] : arrContent;
                // 获取一个url
                let url = arrUrl[para.i];
                // 获取url结构信息
                para.urlInfo = $fileFunc.getUrlInfo(url);
                para.serverType = $public.getServerType(para.urlInfo.server);

                // 当是写文件时，urlInfo添加内容：
                if (para.content) para.urlInfo.content = para.content;
                // 写文件时，因为不是复制的，所以timestamp = 0：
                if (type === $baseDef.write) para.urlInfo.timestamp = 0;
                // 读文件时，因为不是复制的，所以getTimestamp = 0：
                if (type === $baseDef.read) para.urlInfo.getTimestamp = 0;

                // 判断代码运行平台？
                if (para.platform === $def.platform_web) {
                    // 判断server类型?
                    if (para.serverType === $def.server_serverMysql || para.serverType === $def.server_serverMem) {
                        // 处理远程文件
                        para.nStep = 'procFile_remote';
                    } else if (para.serverType === $def.server_termMem) {
                        // 处理内存文件
                        para.nStep = 'procFile_cache';
                    }
                } else if (para.platform === $def.platform_server) {
                    // 判断文件在哪?
                    if (para.serverType === $def.server_serverMem) {
                        // 处理内存文件
                        para.nStep = 'procFile_cache';
                    } else if (para.serverType === $def.server_serverMysql) {
                        // 处理硬盘文件
                        para.nStep = 'procFile_hard';
                    }
                }

                dbFlag++;
                break;
            case 'procFile_remote':  // 处理远程文件
                this.procFile_remote(type, para.serverType, para.urlInfo, function (content) {
                    if (type === $baseDef.read) arrContent[para.i] = content;
                    para.i++;
                    para.nStep = 'get_procFile_type';
                    if (++dbFlag === 2) {
                        that.procFile(type, arrUrl, arrContent, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'procFile_cache':  // 处理内存文件
                this.procFile_cache(type, para.urlInfo, function (content) {
                    if (type === $baseDef.read) arrContent[para.i] = content;
                    para.i++;
                    para.nStep = 'get_procFile_type';
                    if (++dbFlag === 2) {
                        that.procFile(type, arrUrl, arrContent, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'procFile_hard':  // 处理硬盘文件
                this.procFile_hard(type, para.urlInfo, function (content) {
                    if (type === $baseDef.read) arrContent[para.i] = content;
                    para.i++;
                    para.nStep = 'get_procFile_type';
                    if (++dbFlag === 2) {
                        that.procFile(type, arrUrl, arrContent, successCallBack, errorCallBack)
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
 * 处理远程文件
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.procFile_remote = function (type, serverType, urlInfo, successCallBack, errorCallBack) {
    switch (type) {
        case $baseDef.read:
            this.remoteFile.remoteReadFile(serverType, urlInfo, function (objContent) {
                successCallBack(objContent.content);
            }, errorCallBack);
            break;
        case $baseDef.write:
            this.remoteFile.remoteWriteFile(serverType, urlInfo, successCallBack, errorCallBack);
            break;
        case $baseDef.append:
            this.remoteFile.remoteAppendFile(serverType, urlInfo, successCallBack, errorCallBack);
            break;
        case $baseDef.delete:
            this.remoteFile.remoteDeleteFile(serverType, urlInfo, successCallBack, errorCallBack);
            break;
    }
};


/*
 *-------------------------------------------------------------------------------//
 * 处理内存文件
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.procFile_cache = function (type, urlInfo, successCallBack, errorCallBack) {
    switch (type) {
        case $baseDef.read:
            $cacheFile.cacheReadFile(urlInfo, function (objContent) {
                successCallBack(objContent.content);
            }, errorCallBack);
            break;
        case $baseDef.write:
            $cacheFile.cacheWriteFile(urlInfo, successCallBack, errorCallBack);
            break;
        case $baseDef.append:
            $cacheFile.cacheAppendFile(urlInfo, successCallBack, errorCallBack);
            break;
        case $baseDef.delete:
            $cacheFile.cacheDeleteFile(urlInfo, successCallBack, errorCallBack);
            break;
    }
};


/*
 *-------------------------------------------------------------------------------//
 * 处理硬盘文件
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.procFile_hard = function (type, urlInfo, successCallBack, errorCallBack) {
    switch (type) {
        case $baseDef.read:
            $hardFile.hardReadFile(urlInfo, function (objContent) {
                successCallBack(objContent.content);
            }, errorCallBack);
            break;
        case $baseDef.write:
            $hardFile.hardWriteFile(urlInfo, successCallBack, errorCallBack);
            break;
        case $baseDef.append:
            $hardFile.hardAppendFile(urlInfo, successCallBack, errorCallBack);
            break;
        case $baseDef.delete:
            $hardFile.hardDeleteFile(urlInfo, successCallBack, errorCallBack);
            break;
    }
};

