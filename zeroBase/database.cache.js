const $def = require(global.dbPath + "/mem.def.js");
$mSystem = require(global.dbPath + "/db.sys.js");
const CDatabase = require(global.dbPath + "/database.js");
const $public = require(global.dbPath + "/public.js");
const $baseDef = require(global.dbPath + "/zeroBase/base.def.js");
var $m_memDatabase = require(global.dbPath + "/mem.database.js");


/*
 *-------------------------------------------------------------------------------//
 * 功能： 单表新增记录（从变量到内存库）
 * <1>arrId有id值为空时，新增并返回id
 * <2>arrId有id值不为空时，带着id新增
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.cacheRecordNew = function (dbName, table, arrId, arrField, arrData) {
    return this.cacheRecordModifyA(dbName, table, arrId, null, arrField, arrData, true, true)
};


/*
 *-----------------------------------------------------------------------------------------------//
 * 功能： 单表新增记录（从变量到内存库）
 * <1>arrId有id值为空时，新增并返回id
 * <2>arrId有id值不为空时，带着id新增
 * ----------------------------------------------------------------------------------------------//
 */
CDatabase.prototype.cacheRecordNewZK = function (dbName, table, arrId, arrField, arrData) {
    return this.cacheRecordModifyA(dbName, table, arrId, null, arrField, arrData, false, true)
};


/*
 *-------------------------------------------------------------------------------//
 * 功能： 多表对象新增（从变量到内存库）
 * <1>arrId有id值为空时，新增并返回id
 * <2>arrId有id值不为空时，带着id新增
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.cacheObjectNew = function (dbName, arrTable, arrIds, arrXYs, arrFields, arrDatas) {
    return this.cacheObjectModifyA(dbName, arrTable, arrIds, arrXYs, arrFields, arrDatas, true)
};


/*
 *-----------------------------------------------------------------------------------------------//
 * 功能： 单表记录修改函数（从变量到内存库）
 * 1、当 arrId 为空时，表示新增记录；当 arrId 存在，但是内存库不存在该id时，新增记录；否则修改记录
 * 2、如果是修改操作，且有记录id，但是id不存在时，原本应该报错给用户，目前是新增的功能，以后有需求再改
 * ----------------------------------------------------------------------------------------------//
 */
CDatabase.prototype.cacheRecordModify = function (dbName, table, arrId, arrField, arrData) {
    return this.cacheRecordModifyA(dbName, table, arrId, null, arrField, arrData, true, false)
};


/*
 *-----------------------------------------------------------------------------------------------//
 * 功能： 单表记录修改函数（从变量到内存库）
 * 1、当 arrId 为空时，表示新增记录；当 arrId 存在，但是内存库不存在该id时，新增记录；否则修改记录
 * 2、如果是修改操作，且有记录id，但是id不存在时，原本应该报错给用户，目前是新增的功能，以后有需求再改
 * ----------------------------------------------------------------------------------------------//
 */
CDatabase.prototype.cacheRecordModifyA = function (dbName, table, arrId, arrXY, arrField, arrData, isErrorExit, isNew) {
    let resultObj;
    // 打开内存数据库：
    let cache = this.cacheOpenDatabase(dbName);

    // arrData为null时：
    if (!arrData) arrData = {};

    if (arrField === null) {
        // 获取表字段:
        arrField = Object.keys(arrData);
    }

    // 检查参数 arrField 中字段是否合法：
    resultObj = cache.sql.memCheckTableAndField(table, arrField);
    if (resultObj.code !== 0) {
        // 表示有错：
        resultObj.$error = $public.getErrorObj('01_71', resultObj, 'CDatabase', '01', '71', global.localIp);
        return resultObj
    }

    // 将变量的数据保存到内存数据库：
    resultObj = this.saveUserDataToMemDatabase(table, arrXY, arrField, arrData, arrId, isErrorExit, isNew, cache);
    if (resultObj.code !== 0) {
        // 表示有错：
        resultObj.$error = $public.getErrorObj('01_71', resultObj, 'CDatabase', '01', '71', global.localIp);
    }
    // 是新增,获取table指针
    if (isNew) resultObj.table = cache.sql.getTablePtr(table);
    return resultObj
};


/*
 *------------------------------------------------------------------------------------------//
 * 功能： 多表对象记录修改函数（从变量到内存库）
 * 当 arrId 为空时，表示新增记录；当 arrId 存在，但是内存库不存在该id时，新增记录；否则修改记录
 * -----------------------------------------------------------------------------------------//
 */
CDatabase.prototype.cacheObjectModify = function (dbName, arrTable, arrIds, arrXYs, arrFields, arrDatas) {
    return this.cacheObjectModifyA(dbName, arrTable, arrIds, arrXYs, arrFields, arrDatas, false)
};


/*
 *------------------------------------------------------------------------------------------//
 * 功能： 多表对象记录修改函数（从变量到内存库）
 * 当 arrId 为空时，表示新增记录；当 arrId 存在，但是内存库不存在该id时，新增记录；否则修改记录
 * -----------------------------------------------------------------------------------------//
 */
CDatabase.prototype.cacheObjectModifyA = function (dbName, arrTable, arrIds, arrXYs, arrFields, arrDatas, isNew) {
    let resultObj = {};
    resultObj.totalByteNum = 0;
    resultObj.code = 0;

    for (let i = 0; i < arrTable.length; i++) {
        let table = arrTable[i];
        let arrId = arrIds[i];
        let arrField = arrFields ? arrFields[i] : null;
        let arrXY = arrXYs ? arrXYs[i] : null;
        if (arrDatas[table] === undefined) arrDatas[table] = {};

        let result = this.cacheRecordModifyA(dbName, table, arrId, arrXY, arrField, arrDatas[table], true, isNew);

        // 表示有错：
        if (result.code !== 0) {
            return result
        }

        arrIds[i] = result.arrId;
        resultObj.totalByteNum += result.byteNum;
        resultObj[table] = {};
        resultObj[table].arrId = result.arrId;
        resultObj[table].arrNumber = result.arrNumber;
    }
    return resultObj
};


/*
 *-------------------------------------------------------------------------------//
 * 功能： 记录读（单表）
 * arrData = {
 *    f1: [],
 *    f2: []
 * }
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.cacheRecordRead = function (dbName, table, arrId, arrField, arrData) {
    // 打开内存数据库：
    let cache = this.cacheOpenDatabase(dbName);
    let condition = null;
    let resultObj = this.readDatabaseToUserData(table, arrId, condition, arrField, arrData, null, null, null, false, cache);
    // 表示有错：
    if (resultObj.code !== 0) {
        resultObj.$error = $public.getErrorObj('01_72', resultObj, 'CDatabase', '01', '72', global.localIp);
    }
    return resultObj;
};


/*
 *-------------------------------------------------------------------------------//
 * 功能： 记录读（多表）
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.cacheObjectRead = function (dbName, arrTable, arrIds, arrFields, arrDatas) {
    let resultObj = {};
    resultObj.code = 0;

    for (let i = 0; i < arrTable.length; i++) {
        let table = arrTable[i];
        let arrId = arrIds[i];
        let arrField = arrFields ? arrFields[i] : null;
        if (arrDatas[table] === undefined) arrDatas[table] = {};

        let result = this.cacheRecordRead(dbName, table, arrId, arrField, arrDatas[table]);

        // 表示有错：
        if (result.code !== 0) {
            return result
        }
    }
    return resultObj
};


/*
 *-------------------------------------------------------------------------------//
 * 功能： 记录查询（单表）
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.cacheRecordQuery = function (dbName, table, condition, arrField, arrData) {
    // 打开内存数据库：
    let cache = this.cacheOpenDatabase(dbName);
    let arrId = null;
    let resultObj = this.readDatabaseToUserData(table, arrId, condition, arrField, arrData, null, null, null, false, cache);
    // 表示有错：
    if (resultObj.code !== 0) {
        resultObj.$error = $public.getErrorObj('01_73', resultObj, 'CDatabase', '01', '73', global.localIp);
    }
    return resultObj;
};


/*
 *-------------------------------------------------------------------------------//
 * 功能： 记录查询（多表）
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.cacheObjectQuery = function (dbName, arrTable, arrCondition, arrFields, arrDatas) {
    let resultObj = {};
    resultObj.code = 0;

    for (let i = 0; i < arrTable.length; i++) {
        let table = arrTable[i];
        let arrField = arrFields ? arrFields[i] : null;
        let condition = arrCondition ? arrCondition[i] : null;
        if (arrDatas[table] === undefined) arrDatas[table] = {};

        let result = this.cacheRecordQuery(dbName, table, condition, arrField, arrDatas[table]);

        // 表示有错：
        if (result.code !== 0) {
            return result
        }
    }
    return resultObj
};


/*
 *-------------------------------------------------------------------------------//
 * 功能： 内存库多条件查询（单表）
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.cacheMultiQuery = function (dbName, table, arrField, condition, start, total, arrSort, arrData) {
    // 打开内存数据库：
    let cache = this.cacheOpenDatabase(dbName);
    let arrId = null;
    let resultObj = this.readDatabaseToUserData(table, arrId, condition, arrField, arrData, arrSort, start, total, true, cache);
    // 表示有错：
    if (resultObj.code !== 0) {
        resultObj.$error = $public.getErrorObj('01_76', resultObj, 'CDatabase', '01', '73', global.localIp);
    }
    return resultObj;
};


/*
 *-------------------------------------------------------------------------------//
 * 功能： 记录删除，不会删除子表（单表）
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.cacheRecordDelete = function (dbName, table, arrId) {
    let that = this;
    let resultObj = {};
    // 打开内存数据库
    let cache = this.cacheOpenDatabase(dbName);

    // 获取所有文件字段
    let arrField = this.cacheGetAllField(dbName, table, null, $def.readField_file);

    // 当存在文件字段时，删除相应的所有文件
    if (arrField.length > 0) {
        let arrData = {};
        resultObj = this.cacheRecordRead(dbName, table, arrId, arrField, arrData);

        // 读到所有记录出错：
        if (resultObj.code !== 0) {
            return resultObj;
        }

        for (let i = 0; i < arrId.length; i++) {
            let recordId = arrId[i];
            for (let j = 0; j < arrField.length; j++) {
                let field = arrField[j];
                // 获取一个字段的文件
                let arrUrl = arrData[field][i];
                if (!arrUrl) continue;
                // 删除内存本地文件
                that.deleteCacheFile(arrUrl);
                // 删除文件大小
                cache.sql.memDeleteFileSize(table, field, recordId);
            }
        }
    }

    // 删除记录：
    cache.sql.memRecordDeleteOneTable(table, arrId);

    resultObj.code = 0;
    return resultObj;
};


/*
 *-------------------------------------------------------------------------------//
 * 功能： 记录删除，不会删除子表（多表）
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.cacheObjectDelete = function (dbName, arrTable, arrIds) {
    let resultObj = {};
    resultObj.code = 0;

    for (let i = 0; i < arrTable.length; i++) {
        let table = arrTable[i];
        let arrId = arrIds[i];
        let result = this.cacheRecordDelete(dbName, table, arrId);
        // 表示有错：
        if (result.code !== 0) {
            return result;
        }
    }
    return resultObj;
};


/*
 * ------------------------------------------------------------------------------//
 * 功能：删除数据库
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.cacheDatabaseDelete = function (arrDatabaseId) {
    $m_memDatabase.memDeleteDatabase(arrDatabaseId)
};


/*
 *-------------------------------------------------------------------------------//
 * 功能： 记录复制
 * <1>将源记录arrSrcId复制一条新的记录
 * <2>复制时，计数器字段中step=0, sum不变
 * <3>只复制用户字段内容，隐藏字段内容不复制
 * <4>如果arrDestId为null（不能为空字符串），不带id新增,否则带id新增
 * <5>如果parentId为null时，父记录id与源记录id的父id一样,否则填写parentId
 * <6>返回新增的id号和增加的文件长度
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.cacheRecordCopy = function (dbName, table, parentId, arrSrcId, arrDestId, isCaches, successCallBack, errorCallBack) {
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
        if ($baseDef.print) {
            console.log('baseCache--cacheRecordCopy：' + para.nStep)
        }
        switch (para.nStep) {
            case 0:  // 初始化数据
                // 打开内存数据库
                para.cache = this.cacheOpenDatabase(dbName);
                // 获取所有字段
                let arrAllField = para.cache.sql.memGetAllField(table).result;
                // 获取db类型
                let dbType = dbName.substr(0, 1);
                // 获取所有隐藏字段
                let arrHideField = that.getHideField(dbType, table, true);
                let arrFilterField = {};

                // 获取所有用户字段：
                para.arrField = [];
                para.arrField.push($def.fatherID);
                arrFilterField[$def.fatherID] = 1;
                for (let i = 0; i < arrAllField.length; i++) {
                    if (arrHideField[arrAllField[i]] === undefined) {
                        para.arrField.push(arrAllField[i]);
                        arrFilterField[arrAllField[i]] = 1;
                    }
                }

                // 获取记录大小
                para.recordSize = para.cache.sql.memGetOnlyRecordSize(table);
                para.$p = {};
                para.$p.type = 3;
                para.$p.parentId = parentId;
                para.$p.arrFilterField = arrFilterField;
                // 获取所有字段类型
                para.result = para.cache.sql.memGetAllFieldType(table);
                para.arrAllFileType = para.result.arrFieldType;
                para.$arrObjField = para.result.arrObjField;
                // 获取表指针
                para.arrData = para.cache.sql.getTablePtr(table);
                // 获取所有文件字段
                para.arrFileField = Object.keys(para.cache.sql.memGetAllFileField(table));

                // 定义返回值：
                para.result = {};
                para.result.arrId = [];
                para.result.arrNumber = [];
                para.result.byteNum = 0;
                para.result.code = 0;

                para.nStep = 'download_file';
                dbFlag++;
                break;
            case 'download_file':  //下载文件
                if (para.i >= arrSrcId.length) {
                    para.i = 0;
                    para.nStep = 'end';
                    dbFlag++;
                    break;
                }

                // 获取源记录号:
                para.srcRecordNo = para.cache.sql.getRecordNo_by_id(table, [arrSrcId[para.i]]);

                if (para.srcRecordNo !== null) {
                    if (isCaches) {
                        // 缓存一条记录文件
                        this.saveOneRecordFileToCache(table, arrSrcId[para.i], para.arrData, para.srcRecordNo, para.arrFileField, para.cache, function (byteNum) {
                            para.result.byteNum += byteNum;
                            para.nStep = 'copy_record';
                            if (++dbFlag === 2) {
                                that.cacheRecordCopy(dbName, table, parentId, arrSrcId, arrDestId, isCaches, successCallBack, errorCallBack)
                            }
                        }, para.errorCallBack);
                    } else {
                        para.nStep = 'copy_record';
                        dbFlag++;
                    }
                } else {
                    para.i++;
                    para.nStep = 'download_file';
                    dbFlag++;
                }
                break;
            case 'copy_record':  // 复制记录
                let resultObj;
                let destId = arrDestId ? arrDestId[para.i] : null;

                if (destId === null || destId === '') {
                    // 新增此记录
                    para.$p.srcRecordNo = para.srcRecordNo;
                    para.$p.destId = destId;
                    resultObj = para.cache.sql.cacheInsert(table, para.arrAllFileType, para.$arrObjField, para.$p);
                    para.result.arrId[para.i] = resultObj.id;
                    para.result.arrNumber[para.i] = resultObj.recordNo;
                    // 累加记录大小
                    para.result.byteNum += para.recordSize;
                } else {
                    // 获取目标记录号
                    let recordNo = para.cache.sql.getRecordNo_by_id(table, [destId]);
                    if (recordNo !== null) {
                        // 修改此记录
                        para.$p.srcRecordNo = para.srcRecordNo;
                        para.$p.destRecordNo = recordNo;
                        resultObj = para.cache.sql.cacheUpdate(table, para.arrField, para.arrAllFileType, para.$arrObjField, para.$p);
                        para.result.arrId[para.i] = destId;
                        para.result.arrNumber[para.i] = recordNo;
                    } else {
                        // 新增此记录
                        para.$p.srcRecordNo = para.srcRecordNo;
                        para.$p.destId = destId;
                        resultObj = para.cache.sql.cacheInsert(table, para.arrAllFileType, para.$arrObjField, para.$p);
                        para.result.arrId[para.i] = resultObj.id;
                        para.result.arrNumber[para.i] = resultObj.recordNo;
                        // 累加记录大小
                        para.result.byteNum += para.recordSize;
                    }
                }
                // 表示有错：
                if (resultObj.code !== 0) {
                    let $error = $public.getErrorObj('01_75', resultObj, 'CDatabase', '01', '75', global.localIp);
                    para.errorCallBack($error);
                } else {
                    para.i++;
                    para.nStep = 'download_file';
                    dbFlag++;
                }
                break;
            case 'end':
                para.result.table = para.cache.sql.getTablePtr(table);
                para.successCallBack(para.result);
                return
        }
        if (++dbFlag === 1) {
            return
        }
    }
};


/*
 *-------------------------------------------------------------------------------//
 * 功能： 内存库获取记录字节大小
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.cacheGetRecordSize = function (dbName, arrTable, arrIds) {
    // 打开内存数据库
    let cache = this.cacheOpenDatabase(dbName);
    let totalByteNum = 0;
    for (let i = 0; i < arrTable.length; i++) {
        let table = arrTable[i];
        let arrId = arrIds[i];
        for (let j = 0; j < arrId.length; j++) {
            let recordId = arrId[j];
            // 获取一条记录大小
            let recordSize = cache.sql.memGetRecordSize(table, recordId);
            totalByteNum += recordSize
        }
    }
    return totalByteNum;
};


/*
 *-------------------------------------------------------------------------------//
 * 功能： 获取字段类型
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.cacheGetFieldType = function (dbName, table, field) {
    let cache = this.cacheOpenDatabase(dbName);
    return cache.sql.memGetFieldType(table, field);
};


/*
 *-------------------------------------------------------------------------------//
 * 功能： 获取文件字段
 * <1>获取所有文件字段，
 * <2>如果arrField=null, 则获取此表所有文件字段，否则，找出arrField中的所有文件字段
 * <3>如果type=50：获取文件字段
 * <4>如果type=51：获取计数器字段
 * <5>其它类型再补充
 * <6>type=null,读取所有字段
 * <7>如果type=52：获取有效字段（非隐藏字段)
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.cacheGetAllField = function (dbName, table, arrField, type) {
    let arrAllField;
    let cache = this.cacheOpenDatabase(dbName);
    // 判断字段类型
    if (type === null) {
        let result = cache.sql.memGetAllField(table);
        arrAllField = result.result;
    } else {
        let arrField1;  // 拷贝一份arrField
        let arrHideField;  // 隐藏字段

        // 拷贝一份arrField，为了不影响用户传入数据
        if (arrField === null) {
            let result = cache.sql.memGetAllField(table);
            arrField1 = result.result;
        } else {
            arrField1 = arrField;
        }

        // 是获取有效字段吗：
        if (type === $def.readField_valid) {
            // 获取db类型
            let dbType = dbName.substr(0, 1);
            // 获取隐藏字段
            arrHideField = this.getHideField(dbType, table, true);
        }

        // 初始化所有字段
        arrAllField = [];
        for (let i = 0; i < arrField1.length; i++) {
            let field = arrField1[i];
            // 获取字段类型
            let fileType = cache.sql.memGetFieldType(table, field);
            // 判断获取字段类型
            if (type === $def.readField_file) {
                // 是否为文件字段?
                if (fileType === $def.fieldType_image || fileType === $def.fieldType_file || fileType === $def.fieldType_audio) {
                    arrAllField.push(field);
                }
            } else if (type === $def.readField_count) {
                // 是否为计数器字段？
                if (fileType === $def.fieldType_count) {
                    arrAllField.push(field);
                }
            } else if (type === $def.readField_valid) {
                // 是隐藏字段吗？
                if (arrHideField[field] === undefined) {
                    arrAllField.push(field);
                }
            }
        }
    }

    return arrAllField;
};


/*
 *-------------------------------------------------------------------------------//
 * 功能：读列数据（单ID）
 * recordId不存在则返回number为null
 * result.table;  返回的表格指针数组
 * result. number;    数值型：  返回的记录号
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.cacheColRead = function (dbName, table, recordId) {
    // 初始化
    let result = {};
    let cache = this.cacheOpenDatabase(dbName);
    let number = cache.sql.getRecordNo_by_id(table, recordId);
    // 保存指针
    result.table = cache.sql.getTablePtr(table);
    result.number = number;
    return result
};


/*
 *-------------------------------------------------------------------------------//
 * 功能：读列数据（多ID）
 * recordId不存在则返回number为null
 * result.table;  返回的表格指针
 * result. number;    数值型：  返回的记录号
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.cacheColReadArray = function (dbName, table, arrId) {
    // 初始化
    let result = {};
    let arrNumber = [];
    let cache = this.cacheOpenDatabase(dbName);
    cache.sql.getRecordNo_from_index_unique(table, $def.id, arrId, arrNumber);
    // 保存指针
    result.table = cache.sql.getTablePtr(table);
    result.arrNumber = arrNumber;
    return result
};


/*
 *-------------------------------------------------------------------------------//
 * 功能：写列数据
 * 1.如果没有索引，用户可以直接通过列指针写数据，不需要调用此函数
 * table, number, field, value参数由上层保证合法
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.cacheColWrite = function (dbName, table, field, number, value) {
    let cache = this.cacheOpenDatabase(dbName);
    // 获取字段类型
    let fieldType = cache.sql.memGetFieldType(table, field);
    let objFieldType = {};
    objFieldType[field] = fieldType;

    let arrObjField = {};
    // 检查是否为对象字段
    if (cache.sql.memIsObjType(fieldType)) arrObjField[field] = 1;
    // 组织data
    let arrData = {};
    arrData[field] = [value];
    // 申请参数
    let $p = {};
    $p.type = 2;
    $p.arrFilterField = {};
    $p.arrFilterField[field] = 1;
    $p.destRecordNo = number;
    $p.arrData = arrData;
    $p.index = 0;
    // 修改此记录
    return cache.sql.cacheUpdate(table, [field], objFieldType, arrObjField, $p);
};


/*
 *-------------------------------------------------------------------------------//
 * 功能：查询列数据（单索引）
 * <1>读取表对应的列指针
 * <3>传入的查询条件的字段必须是索引字段，这里不再做判断
 * result.table;  返回的表格指针
 * result.arrNumber;    数组型：返回的记录号数组
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.cacheColQuery = function (dbName, table, field, operate, value) {
    // 初始化
    let result = {};
    let cache = this.cacheOpenDatabase(dbName);
    let arrNumber = cache.sql.getRecordNo_query(table, field, operate, value);
    // 保存指针
    result.table = cache.sql.getTablePtr(table);
    result.arrNumber = arrNumber;
    return result
};


/*
 *-------------------------------------------------------------------------------//
 * 功能：查询列数据（单索引，多值）
 * <1>读取表对应的列指针
 * <2>除=之外，其它功能都没有做索引查询，以后再完成
 * <3>传入的查询条件的字段必须是索引字段，这里不再做判断
 * <4>查询结果不存在的不返回
 * result.table;  返回的表格指针
 * result.arrNumber;    数组型：返回的记录号数组
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.cacheColQueryArray = function (dbName, table, field, operate, arrValue) {
    // 初始化
    let result = {};
    let arrNumber = [];
    let cache = this.cacheOpenDatabase(dbName);
    cache.sql.getRecordNo_query_array(table, field, operate, arrValue, arrNumber);
    // 保存指针
    result.table = cache.sql.getTablePtr(table);
    result.arrNumber = arrNumber;
    return result
};


/*
 *-------------------------------------------------------------------------------//
 * 功能：查询列数据（组合索引，多值）
 * <1>读取表对应的列指针
 * <2>除=之外，其它功能都没有做索引查询，以后再完成
 * <3>传入的查询条件的字段必须是索引字段，这里不再做判断
 * result.table;  返回的表格指针
 * result.arrNumber;    数组型：返回的记录号数组
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.cacheColQueryMulti = function (dbName, table, arrField, operate, arrValue) {
    // 初始化
    let result = {};
    let arrNumber = [];
    let cache = this.cacheOpenDatabase(dbName);
    cache.sql.getRecordNo_from_multi_index(table, arrField, operate, arrValue, arrNumber);
    // 保存指针
    result.table = cache.sql.getTablePtr(table);
    result.arrNumber = arrNumber;
    return result
};


/*
 *-------------------------------------------------------------------------------//
 * 功能：查询列数据（组合索引，多值）
 * <1>读取表对应的列指针
 * <2>除=之外，其它功能都没有做索引查询，以后再完成
 * <3>传入的查询条件的字段必须是索引字段，这里不再做判断
 * result.table;  返回的表格指针
 * result.arrNumber;    数组型：返回的记录号数组
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.cacheColQueryMultiArray = function (dbName, table, arrField, operate, arrValues) {
    // 初始化
    let result = {};
    let arrNumber = [];
    let cache = this.cacheOpenDatabase(dbName);
    cache.sql.getRecordNo_from_multi_index_array(table, arrField, operate, arrValues, arrNumber);
    // 保存指针
    result.table = cache.sql.getTablePtr(table);
    result.arrNumber = arrNumber;
    return result
};


/*
 *-------------------------------------------------------------------------------//
 * 功能：清除列数据
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.cacheColClear = function (dbName, table, arrNumber) {
    let cache = this.cacheOpenDatabase(dbName);
    cache.sql.deleteRecord_by_recordNo(table, arrNumber, null)
};


/*
 * ------------------------------------------------------------------------------//
 * 功能：获取记录号(仅供终端用,云端用zk获取id号)
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.cacheGetRecordNo = function (dbName, table, count, successCallBack, errorCallBack) {
    this.storageGetRecordNo(dbName, table, count, successCallBack, errorCallBack)
};


