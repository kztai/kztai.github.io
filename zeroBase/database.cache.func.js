const $public = require(global.dbPath + "/public.js");
const $def = require(global.dbPath + "/mem.def.js");
$mSystem = require(global.dbPath + "/db.sys.js");
const CDatabase = require(global.dbPath + "/database.js");
const CMemConditionStep = require(global.dbPath + "/mem.condition.step.js");
const $fileFunc = require(global.dbPath + "/zeroBase/files.func.js");
const $cacheFile = require(global.dbPath + "/zeroBase/cache.file.js");
const $baseDef = require(global.dbPath + "/zeroBase/base.def.js");


/*
 *-------------------------------------------------------------------------------//
 * 将从MySQL获取的数据保存到内存数据库中
 * table：表名
 * arrId：需要获取数据的id
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.saveMysqlDataToMemDatabase = function (table, allCacheField, rows, cols, cache) {
    let arrValue;
    let recordId;
    let recordNo;
    let resultObj = {};
    let count = 0;
    let arrField;
    let arrId = [];
    let allMysqlField = [];
    let $p = {};
    $p.type = 1;

    // 循环获取所有字段
    for (let i = 0; i < cols.length; i++) {
        allMysqlField[i] = cols[i].name;
    }

    // 判断 allCacheField 是否存在，存在表示用户传进来的arrField为null（即需要对比MySQL字段与内存字段，取公共字段）
    if (allCacheField === null) {
        // 需要把$recordId字段删除，因为在内存库中不存在该字段：
        let index = allMysqlField.indexOf($def.recordId);
        if (index !== -1) allMysqlField.splice(index, 1, $def.original);
        arrField = allMysqlField;
    } else {
        arrField = this.getPublicField(allMysqlField, allCacheField);
        arrField.push($def.original);
    }

    // 获取表字段类型
    let result = cache.sql.memGetAllFieldType(table);

    // 循环获取所有id
    for (let i = 0; i < rows.length; i++) {
        arrValue = rows[i];
        recordId = arrValue[$def.recordId];
        // 获取记录号
        recordNo = cache.sql.getRecordNo_by_id(table, [recordId]);

        // 大于0说明id已存在，则覆盖它，否则新增：
        if (recordNo !== null) {
            // 修改此记录
            $p.arrValue = arrValue;
            $p.destRecordNo = recordNo;
            resultObj = cache.sql.cacheUpdate(table, arrField, result.arrFieldType, result.arrObjField, $p)
        } else {
            count++;
            // 新增此记录
            $p.arrValue = arrValue;
            resultObj = cache.sql.cacheInsert(table, result.arrFieldType, result.arrObjField, $p);
            // 获取到新增的id：
            recordId = resultObj.result;
        }

        if (resultObj.code !== 0) {
            // 表示有错：
            return resultObj;
        }

        arrId[i] = recordId;
    }

    // 获取记录大小
    let size = cache.sql.memGetOnlyRecordSize(table);
    // 获取新增记录字节数
    resultObj.byteNum = count * size;
    resultObj.arrId = arrId;
    if (resultObj.code === undefined) resultObj.code = 0;
    return resultObj;
};


/*
 *-------------------------------------------------------------------------------//
 * 转移新增 --> 当有回填字段时，需把新增的原始记录id回填到回填字段中
 * table：表名
 * arrId：需要获取数据的id
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.saveBackFillDataToMemDatabase = function (arrIds, result, cache) {
    let arrData = {};
    let arrTable = Object.keys(result);
    let arrField = [$def.id, $def.original];

    for (let i = 0; i < arrTable.length; i++) {
        let table = arrTable[i];
        let arrId = arrIds[i];
        let arrOriginalId = result[table];
        arrData[$def.id] = arrId;
        arrData[$def.original] = arrOriginalId;
        this.saveUserDataToMemDatabase(table, null, arrField, arrData, arrId, true, false, cache);
    }
};


/*
 *-------------------------------------------------------------------------------//
 * 将变量缓存区数据保存到内存数据库中
 * table：表名
 * arrId：需要获取数据的id
 * <4>如果isErrorExist = true:返回错误result
 * <5>如果isErrorExist = false, 如果是字段值重复不退出，否则退出； arrId=""没写，否则写成功
 *   (1) 如果result.code=0，是正常写入或字段值重复，此时，arrId[i]=""表示字段值重复，其它值正常写入
 *   (2) 如果result.code= "error"此时，是数据库写出错。arrId[i]=""写入失败，其它值正常写入
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.saveUserDataToMemDatabase = function (table, arrXY, arrField, arrData, arrId, isErrorExit, isNew, cache) {
    let result;
    let id;
    let recordNo;
    let resultObj = {};
    resultObj.code = 0;
    let errCode = 0;  // 专用于 isErrorExit为false时（也就是zk）记录是否出错
    let count = 0;
    let resultArrId = [];
    let resultArrNumber = [];
    let $p = {};
    $p.type = 2;
    $p.arrData = arrData;

    // 获取表字段类型
    let fieldResult = cache.sql.memGetAllFieldType(table);
    // 申请过滤字段
    let arrFilterField = {};
    // 将过滤字段形成索字段引表
    for (let i = 0; i < arrField.length; i++) {
        arrFilterField[arrField[i]] = 1;
    }
    // 将过滤字段放入参数中
    $p.arrFilterField = arrFilterField;

    let arrIdNum = arrId.length;
    // 循环获取所有字段
    for (let i = 0; i < arrIdNum; i++) {
        id = arrId[i];
        $p.index = arrXY === null ? i : arrXY[i];

        // 判断是否为为新增
        if (isNew || id === '' || id === null) {
            count++;
            // 新增此记录
            $p.id = id;
            result = cache.sql.cacheInsert(table, fieldResult.arrFieldType, fieldResult.arrObjField, $p);
            resultArrId[i] = result.id;
            resultArrNumber[i] = result.recordNo;
            arrId[i] = result.id;
        } else {
            // 获取记录号
            recordNo = cache.sql.getRecordNo_by_id(table, [id]);

            // 大于0说明id已存在，则覆盖它，否则新增：
            if (recordNo !== null) {
                // 修改此记录
                $p.destRecordNo = recordNo;
                result = cache.sql.cacheUpdate(table, arrField, fieldResult.arrFieldType, fieldResult.arrObjField, $p);
                resultArrId[i] = id;
                resultArrNumber[i] = recordNo;
            } else {
                count++;
                // 新增此记录
                $p.id = id;
                result = cache.sql.cacheInsert(table, fieldResult.arrFieldType, fieldResult.arrObjField, $p);
                resultArrId[i] = result.id;
                resultArrNumber[i] = result.recordNo;
                arrId[i] = result.id;
            }
        }

        // 表示有错：
        if (result.code !== 0) {
            // 表示出错后马上退出：
            if (isErrorExit) {
                return result;
            } else {
                errCode = result.code;
                resultArrId[i] = '';
                arrId[i] = '';
                // 是值重复出错，继续执行，否则跳出循环：
                if (result.code !== $def.errorCode_dupValue) {
                    break;
                }
            }
        }
    }

    // 获取记录大小
    let size = cache.sql.memGetOnlyRecordSize(table);
    // 获取新增记录字节数
    resultObj.byteNum = count * size;
    resultObj.arrId = resultArrId;
    resultObj.arrNumber = resultArrNumber;
    // 判断当isErrorExit为false时，是否错误：
    if (errCode !== 0) resultObj.code = errCode;
    return resultObj;
};


/*
 *-------------------------------------------------------------------------------//
 * 将内存数据库读到用户缓冲区中
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.readDatabaseToUserData = function (table, arrId, condition, arrField, arrData, arrSort, start, total, isMulti, cache) {
    let resultObj = null;
    let arrType = [];
    let arrRecordNo = [];

    // 判断字段是否合法：
    if (arrField === null) {
        // 获取表格字段：
        resultObj = cache.sql.memGetAllField(table);
        if (resultObj.code !== 0) {
            return resultObj;
        } else {
            arrField = resultObj.result;
        }
    } else {
        resultObj = cache.sql.memCheckTableAndField(table, arrField);
        if (resultObj.code !== 0) {
            return resultObj;
        }
    }

    if (arrId !== null) {
        // 获取记录号:
        cache.sql.queryRecordNo(table, $def.id, arrId, arrRecordNo);
    } else {
        // 获取条件记录号
        resultObj = this.getCondRecordNo(table, condition, cache);
        if (resultObj.code !== 0) {
            return resultObj;
        } else {
            arrRecordNo = resultObj.arrRecordNo;
        }
    }

    if (isMulti) {
        this.readDatabaseToUserDataMulti(table, arrField, arrData, arrSort, start, total, arrRecordNo, cache);
        resultObj.sum = arrRecordNo.length;
    } else {
        // 循环获取所有字段类型：
        arrField.forEach(function (item, index) {
            arrType[index] = cache.sql.memGetFieldType(table, item);
        });

        // 获取数据库表
        let arrTableData = cache.arrTable[table].arrField;
        // 获取缓冲区中记录个数
        let arrDataField = Object.keys(arrData);
        let pos = arrData[arrDataField[0]] ? arrData[arrDataField[0]].length : 0;
        // 定义变量
        let value;
        let type;
        for (let j = 0; j < arrField.length; j++) {
            // 判断arrData是否存在该字段，不存在则新增该字段：
            if (!arrData[arrField[j]]) arrData[arrField[j]] = [];
            type = arrType[j];
            for (let i = 0; i < arrRecordNo.length; i++) {
                // 获取字段值
                value = arrTableData[arrField[j]][arrRecordNo[i]];
                value = this.getUserMemDatabaseValue(type, value);
                // 保存此值
                arrData[arrField[j]][pos + i] = value;
            }
        }
    }
    return resultObj;
};


/*
 *-------------------------------------------------------------------------------//
 * 将内存数据库读到用户缓冲区中_多条件
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.readDatabaseToUserDataMulti = function (table, arrField, arrData, arrSort, start, total, arrOldRecordNo, cache) {
    let filter;
    let end;
    let resultObj = null;
    let arrType = [];
    let arrSort2;
    let arrNoField;
    let arrSortRecord;

    // 循环获取所有字段类型：
    arrField.forEach(function (item, index) {
        arrType[index] = cache.sql.memGetFieldType(table, item);
        if (!arrData[item]) {
            arrData[item] = [];
        }
    });

    // 判断是否需要筛选：
    if (start !== null && total !== null) {
        filter = true;
        end = start + total
    } else {
        filter = false;
    }

    // 排序条件不为空，则需要新建缓冲区，用于排序，需要排序好后才能筛选：
    if (arrSort !== null) {
        resultObj = cache.sql.getSort(arrSort, arrField);
        if (resultObj.code !== 0) {
            return resultObj;
        }
        arrSort2 = resultObj.arrSort2;
        arrNoField = resultObj.arrNoField;
        arrSortRecord = [];
    }

    // 获取数据库表
    let arrTableData = cache.arrTable[table].arrField;
    // 获取缓冲区中记录个数
    let pos = arrData[arrField[0]] ? arrData[arrField[0]].length : 0;

    for (let j = 0; j < arrOldRecordNo.length; j++) {
        if (arrSort === null) {
            // 过滤条件
            if (filter && (j < start || j >= end)) {
                continue
            }
        } else {
            // 申请排序记录缓存
            arrSortRecord.push([]);
        }
        for (let i = 0; i < arrField.length; i++) {
            // 获取字段值
            let value = arrTableData[arrField[i]][arrOldRecordNo[j]];
            let type = arrType[i];
            value = this.getUserMemDatabaseValue(type, value);
            if (arrSort === null) {
                // 保存此值
                arrData[arrField[i]].push(value);
            } else {
                arrSortRecord[j].push(value);
            }
        }
    }

    if (arrSort !== null) {
        arrSortRecord = cache.sql.sortData(arrSortRecord, arrSort2);
        for (let i = 0; i < arrSortRecord.length; i++) {
            // 过滤条件
            if (filter && (i < start || i >= end)) {
                continue
            }
            for (let j = 0; j < arrField.length; j++) {
                // 获取字段值
                let value = arrSortRecord[i][j];
                let type = arrType[j];
                value = this.getUserMemDatabaseValue(type, value);
                // 删除排序字段，恢复原来的arrField，因为在getSort函数中arrField可能会加些排序字段：
                if (arrData[arrField[j]] !== undefined) {
                    arrData[arrField[j]].push(value);
                }
            }
        }

        for (let i = 0; i < arrNoField.length; i++) {
            let field = arrNoField[i];
            let j = $public.array_of(arrField, field);
            if (j !== -1) {
                $public.array_remove(arrField, j)
            }
        }
    }
};


/*
 *-------------------------------------------------------------------------------//
 * 获取条件记录号
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.getCondRecordNo = function (table, condition, cache) {
    let arrORCond;
    let arrRecordNo = [];

    if (condition !== null) {
        let arrAllField = [];
        let arrFieldIndex = [];
        let arrMultiField = [];
        let arrMultiIndexType = [];
        cache.sql.queryIndex_getIndexInfo(table, arrAllField, arrFieldIndex, arrMultiField, arrMultiIndexType);

        let obj = $mSystem.getUserCond(condition, arrAllField);
        if (obj.code != 0) {
            return obj;
        }
        let arrConditions = obj.arrConditions;
        let exeStep = new CMemConditionStep(obj, arrAllField, arrFieldIndex, arrMultiField, arrMultiIndexType);
        arrORCond = exeStep.getCondExeStep();
    } else {
        arrORCond = null;
    }
    cache.sql.query_getRecordNo(table, arrORCond, arrRecordNo);

    let result = {};
    result.code = 0;
    result.arrRecordNo = arrRecordNo;
    return result;
};


/*
 *-------------------------------------------------------------------------------//
 * 获取mysql与内存表中公共的字段
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.getPublicField = function (arrMysqlField, arrCacheField) {
    let publicField = [];
    for (let i = 0; i < arrMysqlField.length; i++) {
        for (let j = 0; j < arrCacheField.length; j++) {
            if (arrMysqlField[i] === arrCacheField[j]) {
                publicField.push(arrMysqlField[i]);
                break;
            }
        }
    }
    return publicField;
};


/*
 *-------------------------------------------------------------------------------//
 * 获取内存url相关信息
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.getMemUrlInfo = function (url, isRecordCopy) {
    let result = {};
    let urlInfo = $fileFunc.getUrlInfo(url);
    result.outUrl = urlInfo.outUrl;

    // 当不是外网url，获取源于目标的urlInfo：
    if (!urlInfo.outUrl) {
        let srcUrlInfo = {};
        let destUrlInfo = {};
        // 添加path和outUrl信息：
        srcUrlInfo.path = urlInfo.path;
        srcUrlInfo.outUrl = urlInfo.outUrl;
        destUrlInfo.path = urlInfo.path;
        destUrlInfo.outUrl = urlInfo.outUrl;

        let serverType = $public.getServerType(urlInfo.server);
        // 判断url是否为内存文件？
        if (serverType === $def.server_serverMem) {
            // 添加server信息：
            srcUrlInfo.server = isRecordCopy ? urlInfo.server : urlInfo.server.split('-')[0];
            destUrlInfo.server = urlInfo.server;
        } else {
            // 添加server信息：
            srcUrlInfo.server = urlInfo.server;
            destUrlInfo.server = urlInfo.server + "-" + $def.serverType_serverMem;
        }

        result.srcUrlInfo = srcUrlInfo;
        result.destUrlInfo = destUrlInfo;
    }
    return result
};


/*
 *-------------------------------------------------------------------------------//
 * 获取内存url相关信息
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.deleteCacheFile = function (arrUrl) {
    for (let i = 0; i < arrUrl.length; i++) {
        // 获取一个url
        let url = arrUrl[i];
        let urlInfo = $fileFunc.getUrlInfo(url);
        // 是外网url吗？为外网文件则不能删
        if (urlInfo.outUrl) {
            continue
        }
        let serverType = $public.getServerType(urlInfo.server);
        // 判断url是否为内存文件？？不是内存文件则不能删：
        if (serverType !== $def.server_serverMem) {
            continue
        }

        $cacheFile.cacheDeleteFile(urlInfo, function () {
        }, function () {
        })
    }

};


/*
 *-------------------------------------------------------------------------------//
 * <1>缓存一条记录中的文件内容到内存中
 * <2>并将url改为本地
 * <3>这里一般考虑的是文件不做索引的情况，如果做索引，要改一下代码换成cacheColWrite函数写，而且在底层对象字段做索引可能会引起出错
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.saveOneRecordFileToCache = function (table, recordId, arrData, recordNo, arrField, cache, successCallBack, errorCallBack) {
    let that = this;
    let dbFlag;
    let para = {
        successCallBack: successCallBack,
        errorCallBack: errorCallBack,
        nStep: 0,
        k: 0,
        n: 0,
        totalByteNum: 0  // 所有文件大小
    };

    if (successCallBack !== null) {
        errorCallBack = para;
        successCallBack = null
    }
    para = errorCallBack;

    while (1) {
        dbFlag = 0;
        if ($baseDef.print) {
            console.log('baseCacheFunc--saveOneRecordFileToCache：' + para.nStep)
        }
        switch (para.nStep) {
            case 0:
            case 'arrField_loop':  //arrField循环
                if (para.k >= arrField.length) {
                    para.k = 0;
                    para.nStep = 'end';
                } else {
                    //获取字段
                    para.field = arrField[para.k];
                    // 获取一个字段所有文件
                    para.arrUrl = arrData[para.field][recordNo];
                    if(para.arrUrl) {
                        para.nStep = 'arrUrl_loop';
                    } else {
                        para.k++;
                        para.nStep = 'arrField_loop';
                    }
                }
                dbFlag++;
                break;
            case 'arrUrl_loop':  //arrUrl循环
                if (para.n >= para.arrUrl.length) {
                    para.k++;
                    para.n = 0;
                    para.nStep = 'arrField_loop';
                    dbFlag++;
                    break;
                }

                // 读取一个文件
                let url = para.arrUrl[para.n];
                let result = that.getMemUrlInfo(url, true);
                // 获取源url结构信息
                let srcInfo = result.srcUrlInfo;
                // 获取目标url结构信息
                let destInfo = result.destUrlInfo;

                // 是外网url或者源url指向内存，则跳过：
                if (result.outUrl || srcInfo.server.endsWith('-m')) {
                    para.n++;
                    para.nStep = 'arrUrl_loop';
                    dbFlag++;
                } else {
                    // 获取源文件大小
                    let oldByteNum;
                    $cacheFile.cacheGetFileSize(destInfo, function (ByteNum) {
                        oldByteNum = ByteNum
                    }, function () {
                    });
                    that.server_serverHardToServerMem(srcInfo, destInfo, true, function (ByteNum) {
                        // 当文件大于2M时，不会复制：
                        if (ByteNum !== -1) {
                            if (ByteNum !== 0) {  // 判断是否已经复制，等于0表示已经复制过或者文件大小为0
                                // 文件大小累加
                                para.totalByteNum += ByteNum - oldByteNum;
                                // 保存记录文件大小
                                cache.sql.memAddFileSize(table, para.field, recordId, ByteNum - oldByteNum);
                            }
                            // 更新url
                            para.arrUrl[para.n] = destInfo.server + '/' + destInfo.path;
                        }

                        para.n++;
                        para.nStep = 'arrUrl_loop';
                        if (++dbFlag === 2) {
                            that.saveOneRecordFileToCache(table, recordId, arrData, recordNo, arrField, cache, successCallBack, errorCallBack)
                        }
                    }, para.errorCallBack)
                }
                break;
            case 'end':
                para.successCallBack(para.totalByteNum);
                return
        }
        if (++dbFlag === 1) {
            return
        }
    }
};

