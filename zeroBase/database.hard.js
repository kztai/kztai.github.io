const $public = require(global.dbPath + "/public.js");
$mSystem = require(global.dbPath + "/db.sys.js");
const $mysqlTrans = require(global.dbPath + "/mysql.trans.js");
const CDatabase = require(global.dbPath + "/database.js");
const $mysqldb = require(global.dbPath + "/mysql.db.js");
const $def = require(global.dbPath + "/mem.def.js");
const CMyserverCond = require(global.dbPath + "/myserver.cond.js");
const $cacheFile = require(global.dbPath + "/zeroBase/cache.file.js");
const $baseDef = require(global.dbPath + "/zeroBase/base.def.js");


/*
 *-------------------------------------------------------------------------------//
 * 开始打开, 即mysql事务开始
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.hardTransOpen = function ($successCallBack, $errorCallBack) {
    $mysqlTrans.mysqlTransOpen($successCallBack, $errorCallBack);
};


/*
 *-------------------------------------------------------------------------------//
 * 事务关闭,即mysql事务提交
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.hardTransClose = function ($hardTrans, $successCallBack, $errorCallBack) {
    $mysqlTrans.mysqlTransCommit($hardTrans, $successCallBack, $errorCallBack);
};


/*
 *-------------------------------------------------------------------------------//
 * 事务取消,即mysql事务回滚
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.hardTransCancel = function ($hardTrans, $successCallBack, $errorCallBack) {
    $mysqlTrans.mysqlTransRollback($hardTrans, $successCallBack, $errorCallBack);
};


/*
 *-------------------------------------------------------------------------------//
 * 功能： 持久库转移记录新增（内存表 --> MySQL表）
 * dbName：数据库id
 * arrTable：源表名称，即内存表名称
 * arrFields：内存表字段
 * arrIds：内存表id
 * hardTrans：事务句柄
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.hardMoveRecordNew = function (dbName, arrTable, arrFields, arrIds, hardTrans, successCallBack, errorCallBack) {
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
            console.log('baseHard--hardMoveRecordNew：' + para.nStep)
        }
        switch (para.nStep) {
            case 0:
                // 初始化：
                // 打开内存数据库：
                para.cache = this.cacheOpenDatabase(dbName);
                // 申请记录号缓存区（所有表）：
                para.arrValues = [];

                // 新建字段缓存区，用于兼容字段可能为null的情况：
                para.arrFields = [];
                // 需要写入MySQL的字段：
                para.arrWriteFields = [];

                para.nStep = 'get_move_newData';
                dbFlag++;
                break;
            case 'get_move_newData':
                if (para.i >= arrTable.length) {
                    para.i = 0;
                    para.nStep = 'new_mysql';
                    dbFlag++;
                    break;
                }

                // 循环操作表，获取表名，字段，id等数据：
                para.table = arrTable[para.i];
                para.arrId = arrIds[para.i];

                // 获取MySQL表字段：
                let allMysqlField = Object.keys($mysqldb.mysqlGetAllField(dbName, para.table));

                let resultObj = null;
                if (arrFields === null || arrFields[para.i] === null) {
                    // 获取表格字段：
                    resultObj = para.cache.sql.memGetAllField(para.table);
                    if (resultObj.code !== 0) {
                        // 表示有错：
                        let $error = $public.getErrorObj('01_50', resultObj, 'CDatabase', '01', '50', global.localIp);
                        para.errorCallBack($error);
                        return
                    } else {
                        /*// 当 para.arrField 为空时，需要获取内存与MySQL公共的字段：
                        let allCacheField = resultObj.result;
                        let allMysqlField = Object.keys($mysqldb.mysqlGetAllField(dbName, para.destTable));

                        para.arrFields[para.i] = this.getPublicField(allMysqlField, allCacheField);*/
                        para.arrMemFields = resultObj.result;
                    }
                } else {
                    // 判断arrMemFields是否存在id与original字段，不存在则需要加上：
                    para.arrMemFields = JSON.parse(JSON.stringify(arrFields[para.i]));
                    if (!para.arrMemFields.includes($def.id)) {
                        para.arrMemFields.push($def.id);
                    }
                    if (!para.arrMemFields.includes($def.original)) {
                        para.arrMemFields.push($def.original)
                    }

                    // 再检查参数 arrFields 中字段是否合法：
                    resultObj = para.cache.sql.memCheckTableAndField(para.table, para.arrMemFields);
                    if (resultObj.code !== 0) {
                        // 表示有错：
                        let $error = $public.getErrorObj('01_50', resultObj, 'CDatabase', '01', '50', global.localIp);
                        para.errorCallBack($error);
                        return
                    }
                }

                // 申请记录号缓存区（单表）：
                para.arrValue = [];
                // 获取记录号:
                para.arrRecordNo = [];
                para.cache.sql.queryRecordNo(para.table, $def.id, para.arrId, para.arrRecordNo);
                // 获取内存表数据
                let arrTableData = para.cache.arrTable[para.table].arrField;
                that.getMoveRecordNewData(arrTableData, para.table, para.arrRecordNo, para.arrMemFields, allMysqlField, para.arrWriteFields, para.arrValue, para.cache);
                para.arrValues.push(para.arrValue);

                para.i++;
                dbFlag++;
                para.nStep = 'get_move_newData';
                break;
            case 'new_mysql':
                // 将数据写入mysql
                $mysqlTrans.mysqlRecordNew(dbName, arrTable, para.arrWriteFields, para.arrValues, hardTrans, function (result) {
                    // 需要回填：将result中的id号写入内存数据库original字段:
                    /* result = {
                           table1: [1,2,3],
                           table2: [4,5,6]
                       };*/
                    para.originalIdObj = result;
                    para.nStep = 'mem_backFill_modify';
                    if (++dbFlag === 2) {
                        that.hardMoveRecordNew(dbName, arrTable, arrFields, arrIds, hardTrans, successCallBack, errorCallBack)
                    }
                }, function (error) {
                    let $error = $public.getErrorObj('01_50', error, 'CDatabase', '01', '50', global.localIp);
                    para.errorCallBack($error);
                });
                break;
            case 'mem_backFill_modify':
                that.saveBackFillDataToMemDatabase(arrIds, para.originalIdObj, para.cache);
                para.nStep = 'end';
                dbFlag++;
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
 * 功能： 持久库直接记录新增
 * <1>当arrFields中有id字段时，带着id新增，如果id存在，则修改内容
 * <2>当arrFields中没id字段时，id号由mysql分配
 * <3>hardTrans=null时，为非事务新增
 * ------------------------------------------------------------------------------//
 * arrDatas: [
 *      {field1: ['data1_1', 'data1_2'], field2: ['data2_1', 'data2_2']},
 *      {field3: ['data3_1'], field4: ['data4_1', 'data4_2', 'data4_3']},
 * ]
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.hardDirectRecordNew = function (dbName, arrTable, arrIds, arrFields, arrDatas, hardTrans, successCallBack, errorCallBack) {
    let that = this;
    let dbFlag;
    let para = {
        successCallBack: successCallBack,
        errorCallBack: errorCallBack,
        nStep: 0,
        i: 0,
        count: 0
    };

    if (successCallBack !== null) {
        errorCallBack = para;
        successCallBack = null
    }
    para = errorCallBack;

    while (1) {
        dbFlag = 0;
        if($baseDef.print) {
            console.log('baseHard--hardDirectRecordNew：' + para.nStep)
        }
        switch (para.nStep) {
            case 0:
                // 初始化：
                // 打开内存数据库：
                para.cache = this.cacheOpenDatabase(dbName);
                // 申请记录号缓存区（所有表）：
                para.arrValues = [];

                // 新建字段缓存区，用于兼容字段可能为null的情况：
                para.arrFields = [];

                para.nStep = 'get_direct_newData';
                dbFlag++;
                break;
            case 'get_direct_newData':
                if (para.i >= arrTable.length) {
                    para.i = 0;
                    para.nStep = 'new_mysql';
                    dbFlag++;
                    break;
                }

                // 循环操作表，获取表名，字段，id等数据：
                para.table = arrTable[para.i];
                para.arrId = arrIds[para.i];
                para.arrData = arrDatas[para.table];

                // 判断arrData是否存在id字段，不存在则需要加上：
                if (!Object.keys(para.arrData).includes($def.id)) {
                    para.arrData[$def.id] = para.arrId;
                }

                if (arrFields === null || arrFields[para.i] === null) {
                    para.arrFields[para.i] = Object.keys(para.arrData);
                } else {
                    para.arrFields[para.i] = JSON.parse(JSON.stringify(arrFields[para.i]));
                    // 判断arrField是否存在id字段，不存在则需要加上：
                    if (!para.arrFields[para.i].includes($def.id)) {
                        para.arrFields[para.i].push($def.id);
                    }
                }

                // 申请记录号缓存区（单表）：
                para.arrValue = [];
                that.getDirectRecordNewData(dbName, para.arrData, para.table, para.arrId, para.arrFields[para.i], para.arrValue);
                para.arrValues.push(para.arrValue);

                para.i++;
                dbFlag++;
                para.nStep = 'get_direct_newData';
                break;
            case 'new_mysql':
                // 将数据写入mysql
                $mysqlTrans.mysqlRecordNew(dbName, arrTable, para.arrFields, para.arrValues, hardTrans, function (result) {
                    let resultTableArr = Object.keys(result);
                    for (let i = 0; i < arrTable.length; i++) {
                        for (let j = 0; j < resultTableArr.length; j++) {
                            if (arrTable[i] === resultTableArr[j]) {
                                arrIds[i] = result[resultTableArr[j]];
                                break;
                            }
                        }
                    }
                    para.nStep = 'end';
                    if (++dbFlag === 2) {
                        that.hardDirectRecordNew(dbName, arrTable, arrIds, arrFields, arrDatas, hardTrans, successCallBack, errorCallBack)
                    }
                }, function (error) {
                    let $error = $public.getErrorObj('01_51', error, 'CDatabase', '01', '51', global.localIp);
                    para.errorCallBack($error);
                });
                break;
            case 'end':
                para.successCallBack(888);
                return
        }
        if (++dbFlag === 1) {
            return
        }
    }
};


/*
 *-----------------------------------------------------------------------------------------------------//
 * 功能： 持久库转移记录修改
 * <1> 带着id修改，id不存在，则执行新增操作
 * <2> hardTrans=null时，为非事务新增
 * <3> arrFields不需要填id字段，除非你需要修改id字段
 * <4> 注意：当用户传入的内存id（arrId）错误，则转移到MySQL时，会转移到错误的id号。所有确保传入的arrId正确
 * ----------------------------------------------------------------------------------------------------//
 */
CDatabase.prototype.hardMoveRecordModify = function (dbName, arrTable, arrIds, arrFields, hardTrans, successCallBack, errorCallBack) {
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
            console.log('baseHard--hardMoveRecordModify：' + para.nStep)
        }
        switch (para.nStep) {
            case 0:
                // 初始化：
                // 打开内存数据库：
                para.cache = this.cacheOpenDatabase(dbName);
                // 申请mysql缓存区：
                para.allSql = '';

                para.nStep = 'get_move_ModifyData';
                dbFlag++;
                break;
            case 'get_move_ModifyData':
                if (para.i >= arrTable.length) {
                    para.i = 0;
                    para.nStep = 'modify_mysql';
                    dbFlag++;
                    break;
                }

                // 循环操作表，获取表名，字段，id等数据：
                para.table = arrTable[para.i];
                para.arrField = arrFields ? arrFields[para.i] : null;
                para.arrId = arrIds[para.i];

                // 获取MySQL表字段：
                let allMysqlField = Object.keys($mysqldb.mysqlGetAllField(dbName, para.table));

                let resultObj = null;
                if (arrFields === null || para.arrField === null) {
                    // 获取表格字段：
                    resultObj = para.cache.sql.memGetAllField(para.table);
                    if (resultObj.code !== 0) {
                        // 表示有错：
                        let $error = $public.getErrorObj('01_52', resultObj, 'CDatabase', '01', '52', global.localIp);
                        para.errorCallBack($error);
                        return
                    } else {
                        // 获取内存的字段：
                        para.arrCacheField = resultObj.result;
                    }
                } else {
                    para.arrCacheField = JSON.parse(JSON.stringify(para.arrField));

                    // 检查表格字段是否有错：
                    resultObj = para.cache.sql.memCheckTableAndField(para.table, para.arrCacheField);
                    if (resultObj.code !== 0) {
                        // 表示有错：
                        let $error = $public.getErrorObj('01_52', resultObj, 'CDatabase', '01', '52', global.localIp);
                        para.errorCallBack($error);
                        return
                    }
                }

                // 获取记录号:
                para.arrRecordNo = [];
                para.cache.sql.queryRecordNo(para.table, $def.id, para.arrId, para.arrRecordNo);
                // 获取内存表数据（所有字段数据）：
                let arrTableData = para.cache.arrTable[para.table].arrField;
                let tableSql = that.getMoveRecordModifyData(dbName, arrTableData, para.table, para.arrId, para.arrRecordNo, para.arrCacheField, allMysqlField, para.cache);

                if (para.allSql !== "") para.allSql += ";";
                para.allSql += tableSql;

                para.i++;
                dbFlag++;
                para.nStep = 'get_move_ModifyData';
                break;
            case 'modify_mysql':
                // 将数据写入mysql
                $mysqlTrans.mysqlRecordModify(dbName, para.allSql, hardTrans, function (result) {
                    para.nStep = 'end';
                    if (++dbFlag === 2) {
                        that.hardMoveRecordModify(dbName, arrTable, arrIds, arrFields, hardTrans, successCallBack, errorCallBack)
                    }
                }, function (error) {
                    let $error = $public.getErrorObj('01_52', error, 'CDatabase', '01', '52', global.localIp);
                    para.errorCallBack($error);
                });
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
 * 功能： 持久库直接记录修改
 * <1> 带着id修改，id不存在，报错
 * <2> hardTrans=null时，为非事务新增
 * <3> arrFields, arrDatas参数中不要出现id字段，除非你需要修改id字段
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.hardDirectRecordModify = function (dbName, arrTable, arrIds, arrFields, arrDatas, hardTrans, successCallBack, errorCallBack) {
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
            console.log('baseHard--hardDirectRecordModify：' + para.nStep)
        }
        switch (para.nStep) {
            case 0:
                // 初始化：
                // 打开内存数据库：
                para.cache = this.cacheOpenDatabase(dbName);
                // 申请mysql缓存区：
                para.allSql = '';

                // 新建字段缓存区，用于兼容字段可能为null的情况：
                para.arrFields = [];

                para.nStep = 'get_direct_ModifyData';
                dbFlag++;
                break;
            case 'get_direct_ModifyData':
                if (para.i >= arrTable.length) {
                    para.i = 0;
                    para.nStep = 'modify_mysql';
                    dbFlag++;
                    break;
                }

                // 循环操作表，获取表名，字段，id等数据：
                para.table = arrTable[para.i];
                para.arrId = arrIds[para.i];
                para.arrData = arrDatas[para.table];
                para.arrField = arrFields ? arrFields[para.i] : null;

                if (!para.arrData) {
                    // 表示有错：
                    let msg = '参数 arrDatas 中不存在表：' + para.table;
                    let $error = $public.getErrorObj('01_53', msg, 'CDatabase', '01', '53', global.localIp);
                    para.errorCallBack($error);
                    return
                }

                if (arrFields === null || para.arrField === null) {
                    para.arrField = Object.keys(para.arrData);
                }

                // 申请记录号缓存区（单表）：
                para.arrValue = [];
                let tableSql = that.getDirectRecordModifyData(dbName, para.arrData, para.table, para.arrId, para.arrField, para.cache);
                if (para.allSql !== "") para.allSql += ";";
                para.allSql += tableSql;

                para.i++;
                dbFlag++;
                para.nStep = 'get_direct_ModifyData';
                break;
            case 'modify_mysql':
                // 将数据写入mysql !!
                $mysqlTrans.mysqlRecordModify(dbName, para.allSql, hardTrans, function (result) {
                    para.nStep = 'end';
                    if (++dbFlag === 2) {
                        that.hardDirectRecordModify(dbName, arrTable, arrIds, arrFields, arrDatas, hardTrans, successCallBack, errorCallBack)
                    }
                }, function (error) {
                    let $error = $public.getErrorObj('01_53', error, 'CDatabase', '01', '53', global.localIp);
                    para.errorCallBack($error);
                });
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
 * 功能： 转移记录读
 * arrTable：为持久库表
 * isCache：文件内容是否保存
 * 注意：转移读不能对系统表操作
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.hardMoveRecordRead = function (dbName, arrTable, arrOriginalIds, arrFields, arrIsCaches, hardTrans, successCallBack, errorCallBack) {
    let arrCond = null;
    let arrFuncField = null;
    this.hardMoveRecordReadQuery(dbName, arrTable, arrOriginalIds, arrCond, arrFields, arrIsCaches, arrFuncField, hardTrans, successCallBack, function (error) {
        let $error = $public.getErrorObj('01_54', error, 'CDatabase', '01', '54', global.localIp);
        errorCallBack($error);
    });
};


/*
 *-------------------------------------------------------------------------------//
 * 功能： 转移记录查询
 * arrTable：为持久库表
 * isCache：文件内容是否保存
 * 注意：转移查询不能对系统表操作
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.hardMoveRecordQuery = function (dbName, arrTable, arrConditions, arrFields, arrFuncField, hardTrans, successCallBack, errorCallBack) {
    let arrOriginalIds = null;
    let arrIsCaches = null;
    this.hardMoveRecordReadQuery(dbName, arrTable, arrOriginalIds, arrConditions, arrFields, arrIsCaches, arrFuncField, hardTrans, successCallBack, function (error) {
        let $error = $public.getErrorObj('01_55', error, 'CDatabase', '01', '55', global.localIp);
        errorCallBack($error);
    });
};


/*
 *-------------------------------------------------------------------------------------------------------//
 * 功能： 转移读与查询（实际实现函数）
 * <1> arrField可以为null，则读取MySQL与内存公共字段；arrField为自定义字段，则需要填写MySQL与内存公共字段
 * <2> 转移到内存库时，当id已存在，则覆盖，否则新增记录
 * <3> 转移读与查询都是针对原始表的，所以传入的id必须是原始记录id。最后写入内存库时会把原始记录id写入原始记录字段
 * ------------------------------------------------------------------------------------------------------//
 */
CDatabase.prototype.hardMoveRecordReadQuery = function (dbName, arrTable, arrOriginalIds, arrConditions, arrFields, arrIsCaches, arrFuncField, hardTrans, successCallBack, errorCallBack) {
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
            console.log('baseHard--hardMoveRecordReadQuery：' + para.nStep)
        }
        switch (para.nStep) {
            case 0:
                // 初始化：
                // 打开内存数据库：
                para.cache = this.cacheOpenDatabase(dbName);
                // 是否为转移读与查询：
                para.isMove = true;
                // 初始化函数字段：
                para.funcField = null;

                // 判断是查询还是读取：
                if (arrOriginalIds === null) {
                    // 获取函数字段:
                    para.funcField = that.getFuncField(arrFuncField)
                }

                // 获取需要是MySQL数据，arrFields为null，读取MySQL所有字段数据，arrFields为自定义字段（必须是MySQL存在的字段），读取相应字段数据：
                that.getMysqlData(dbName, arrTable, arrOriginalIds, arrConditions, arrFields, arrFuncField, para.funcField, para.isMove, hardTrans, para.cache, function (result) {
                    para.result = result;
                    para.result2 = {};
                    para.result2.arrIds = [];
                    para.result2.byteNumTotal = 0;
                    para.nStep = 'get_move_readQueryData';
                    if (++dbFlag === 2) {
                        that.hardMoveRecordReadQuery(dbName, arrTable, arrOriginalIds, arrConditions, arrFields, arrIsCaches, arrFuncField, hardTrans, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'get_move_readQueryData':
                if (para.i >= arrTable.length) {
                    para.i = 0;
                    para.nStep = 'end';
                    dbFlag++;
                    break;
                }

                // 获取表名：
                para.table = arrTable[para.i];

                let resultObj;
                // 如果字段为null，则读取所有字段：
                if (arrFields === null || arrFields[para.i] === null) {
                    // 获取表格字段：
                    resultObj = para.cache.sql.memGetAllField(para.table);
                    if (resultObj.code !== 0) {
                        para.errorCallBack(resultObj);
                        return
                    }
                    para.allCacheField = resultObj.result;
                } else {
                    para.allCacheField = null;
                }

                // 获取行数据:
                para.rows = para.result.arrRows[para.i];
                // 获取头数据:
                para.cols = para.result.arrCols[para.i];

                // 是条件查询吗：
                if (arrOriginalIds === null) {
                    para.nStep = 'mysqlData_to_cache';
                } else {
                    para.nStep = 'hardMoveFileRead';
                }

                dbFlag++;
                break;
            case 'hardMoveFileRead':
                // 申请文件字段
                let arrField = [];
                for (let i = 0; i < para.cols.length; i++) {
                    let field = para.cols[i].name;
                    // 获取字段类型
                    let type = para.cache.sql.memGetFieldType(para.table, field);
                    // 是文件字段吗？
                    if (type === $def.fieldType_image || type === $def.fieldType_file || type === $def.fieldType_audio) {
                        arrField.push(field)
                    }
                }
                // 读文件到内存:
                that.hardMoveFileReadBuffer(dbName, para.table, arrOriginalIds[para.i], arrIsCaches[para.i], arrField, para.rows, function (byteNum) {
                    para.result2.byteNumTotal += byteNum;
                    para.nStep = 'mysqlData_to_cache';
                    if (++dbFlag === 2) {
                        that.hardMoveRecordReadQuery(dbName, arrTable, arrOriginalIds, arrConditions, arrFields, arrIsCaches, arrFuncField, hardTrans, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'mysqlData_to_cache':
                // 将mysql缓存区数据保存到内存数据库中，allCacheField参数用于判断是否是全字段读取:
                let result = this.saveMysqlDataToMemDatabase(para.table, para.allCacheField, para.rows, para.cols, para.cache);
                if (result.code !== 0) {
                    // 表示有错：
                    para.errorCallBack(result);
                    return
                } else {
                    para.result2.byteNumTotal += result.byteNum;
                    para.result2.arrIds[para.i] = result.arrId;
                }

                para.nStep = 'get_move_readQueryData';
                para.i++;
                dbFlag++;
                break;
            case 'end':
                para.successCallBack(para.result2);
                return
        }
        if (++dbFlag === 1) {
            return
        }
    }
};


/*
 *-------------------------------------------------------------------------------//
 * 功能： 直接记录读
 * arrTable：为持久库表
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.hardDirectRecordRead = function (dbName, arrTable, arrOriginalIds, arrFields, arrDatas, hardTrans, successCallBack, errorCallBack) {
    let arrCond = null;
    let arrFuncField = null;
    this.hardDirectRecordReadQuery(dbName, arrTable, arrOriginalIds, arrCond, arrFields, arrDatas, arrFuncField, hardTrans, successCallBack, function (error) {
        let $error = $public.getErrorObj('01_56', error, 'CDatabase', '01', '56', global.localIp);
        errorCallBack($error);
    });
};


/*
 *-------------------------------------------------------------------------------//
 * 功能： 直接记录查询
 * arrTable：为持久库表
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.hardDirectRecordQuery = function (dbName, arrTable, arrConditions, arrFields, arrDatas, arrFuncField, hardTrans, successCallBack, errorCallBack) {
    let arrOriginalIds = null;
    this.hardDirectRecordReadQuery(dbName, arrTable, arrOriginalIds, arrConditions, arrFields, arrDatas, arrFuncField, hardTrans, successCallBack, function (error) {
        let $error = $public.getErrorObj('01_57', error, 'CDatabase', '01', '57', global.localIp);
        errorCallBack($error);
    });
};


/*
 *-------------------------------------------------------------------------------//
 * 功能： 直接读与查询（实际实现函数）
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.hardDirectRecordReadQuery = function (dbName, arrTable, arrOriginalIds, arrConditions, arrFields, arrDatas, arrFuncField, hardTrans, successCallBack, errorCallBack) {
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
            console.log('baseHard--hardDirectRecordReadQuery：' + para.nStep)
        }
        switch (para.nStep) {
            case 0:
                // 初始化：
                // 打开内存数据库：
                para.cache = this.cacheOpenDatabase(dbName);
                // 是否为转移读与查询：
                para.isMove = false;
                // 初始化函数字段：
                para.funcField = null;
                // 获取库类型
                para.dbType = dbName.substr(0, 1);
                // 当为读操作时，需要添加ID字段
                let arrNewFields;

                // 判断是查询还是读取：
                if (arrOriginalIds === null) {
                    arrNewFields = arrFields;
                    // 获取函数字段:
                    para.funcField = that.getFuncField(arrFuncField);
                } else {
                    // 判断用户传入的arrFields是否为null：
                    if (arrFields) {
                        // 带有id的字段
                        arrNewFields = [];
                        for (let i = 0; i < arrTable.length; i++) {
                            // 判断arrField是否为null：
                            if (arrFields[i]) {
                                let haveId = false;
                                let arrField = [];
                                for (let j = 0; j < arrFields[i].length; j++) {
                                    // 获取一个字段
                                    let field = arrFields[i][j];
                                    arrField[j] = field;
                                    // 是否有id字段
                                    if (field === $def.id) {
                                        haveId = true;
                                    }
                                }
                                // 如果没有id把id加入
                                if (!haveId) arrField.push($def.id);
                                // 保存带id的字段
                                arrNewFields[i] = arrField
                            } else {
                                arrNewFields[i] = null;
                            }
                        }
                    } else {
                        arrNewFields = arrFields;
                    }
                }

                // 获取需要是MySQL数据：
                that.getMysqlData(dbName, arrTable, arrOriginalIds, arrConditions, arrNewFields, arrFuncField, para.funcField, para.isMove, hardTrans, para.cache, function (result) {
                    para.result = result;
                    para.nStep = 'get_direct_readQueryData';
                    if (++dbFlag === 2) {
                        that.hardDirectRecordReadQuery(dbName, arrTable, arrOriginalIds, arrConditions, arrFields, arrDatas, arrFuncField, hardTrans, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'get_direct_readQueryData':
                if (para.i >= arrTable.length) {
                    para.i = 0;
                    para.nStep = 'end';
                    dbFlag++;
                    break;
                }

                // 获取表名：
                para.table = arrTable[para.i];

                // 检查arrDatas[para.table]是否存在：
                if (!arrDatas[para.table]) {
                    arrDatas[para.table] = {};
                }

                // 获取行数据:
                para.rows = para.result.arrRows[para.i];
                // 获取头数据:
                para.cols = para.result.arrCols[para.i];
                // 获取字段：
                para.arrField = [];
                para.cols.forEach(function (item) {
                    para.arrField.push(item.name);
                });
                // 建立表结构，向arrDatas中写入字段：
                $public.addFieldDataField(arrDatas[para.table], para.arrField);

                if (arrOriginalIds === null) {
                    // 获取表类型
                    let isSysTable = $mSystem.checkSystemTable(para.dbType, para.table);
                    // 将mysql数据保存到缓存区中:
                    this.saveMysqlDataToUserData(dbName, para.table, isSysTable, arrDatas[para.table], para.arrField, para.rows, null);
                } else {
                    // 将mysql数据保存到缓存区中:
                    this.saveMysqlDataToUserData_recordRead(dbName, para.table, arrOriginalIds[para.i], arrDatas[para.table], para.arrField, para.rows);
                }

                para.i++;
                dbFlag++;
                para.nStep = 'get_direct_readQueryData';
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
 * 功能： 持久库直接多条件查询
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.hardDirectMultiQuery = function (dbName, arrTable, arrFields, arrCondition, arrStart, arrTotal, arrSorts, arrDatas, arrIsGetSum, successCallBack, errorCallBack) {
    let that = this;
    let dbFlag;
    let $dbName = $public.getPortDatabaseName(dbName);
    let para = {
        successCallBack: successCallBack,
        errorCallBack: errorCallBack,
        nStep: 0,
        i: 0,
        allSql: '',
        sqlCount: 0
    };

    if (successCallBack !== null) {
        errorCallBack = para;
        successCallBack = null
    }
    para = errorCallBack;

    while (1) {
        dbFlag = 0;
        if($baseDef.print) {
            console.log('baseHard--hardDirectMultiQuery：' + para.nStep)
        }
        switch (para.nStep) {
            case 0:  // 从MySQL获取到数据
                if (para.i >= arrTable.length) {
                    para.i = 0;
                    para.nStep = 'writeUserData';
                    dbFlag++;
                    break;
                }
                // 获取一个查询条件：
                para.table = arrTable[para.i];
                para.arrField = arrFields ? arrFields[para.i] : null;
                para.condition = arrCondition ? arrCondition[para.i] : null;
                para.start = arrStart[para.i];
                para.total = arrTotal[para.i];
                para.arrSort = arrSorts[para.i];
                para.isGetSum = arrIsGetSum[para.i];

                let sql = "select ";
                let totalSql = "select count(*) sum ";
                if (para.arrField === null) {
                    sql += " * "
                } else {
                    for (let j = 0; j < para.arrField.length; j++) {
                        if (j > 0) sql += ",";
                        sql += $public.getSqlName(para.arrField[j]);
                    }
                }

                sql += " from " + $public.getSqlName($dbName) + "." + $public.getSqlName(para.table);
                totalSql += " from " + $public.getSqlName($dbName) + "." + $public.getSqlName(para.table);
                sql += " where ( 1 = 1)";
                totalSql += " where ( 1 = 1)";

                // 条件是否为空
                let $condition;
                if (para.condition !== null) {
                    let obj = $mSystem.getUserCond(para.condition, null);
                    if (obj.code != 0) {
                        // 表示有错：
                        let $error = $public.getErrorObj('01_50', obj, 'CDatabase', '01', '50', global.localIp);
                        para.errorCallBack($error);
                        return
                    }
                    let arrConditions = obj.arrConditions;
                    $mSystem.toSqlArrCondition(arrConditions);
                    cond = new CMyserverCond(arrConditions);
                    $condition = cond.createExpression();
                }

                if ($condition) {
                    sql += " and (" + $condition + ")";
                    totalSql += " and (" + $condition + ")";
                }

                // 排序是否为空?
                if (para.arrSort !== null) {
                    let orderBy = $public.getOrderBy(para.arrSort);
                    sql += orderBy;
                }
                if (para.start !== null && para.total !== null) {
                    let limit = " limit " + para.start + ", " + para.total;
                    sql += limit;
                }
                // 是否要获取记录总数？
                if (para.isGetSum) {
                    para.allSql += totalSql + ";" + sql + ";";
                    para.sqlCount += 2
                } else {
                    para.allSql += sql + ";";
                    para.sqlCount += 1
                }

                para.i++;
                para.nStep = 0;
                dbFlag++;
                break;
            case 'writeUserData':  // 将数据写入用户缓存区
                let hardTrans = null;
                $mysqlTrans.mysqlExecQuery($dbName, para.allSql, para.sqlCount, hardTrans, function (result) {
                    // 是否要获取记录总数？
                    // 获取结果计数
                    let sum;
                    let rows;
                    let cols;
                    let count = 0;
                    para.arrSum = [];

                    for (let i = 0; i < arrTable.length; i++) {
                        let table = arrTable[i];
                        let arrData = arrDatas[table] ? arrDatas[table] : arrDatas[table] = {};
                        let isGetSum = arrIsGetSum[i];

                        if (isGetSum) {
                            // 获取总数
                            rows = result.arrRows[count++];
                            // 保存总数
                            sum = rows[0]["sum"];
                        } else {
                            sum = 0;
                        }
                        para.arrSum[i] = sum;

                        // 获取行数据
                        rows = result.arrRows[count];
                        // 获取头数据
                        cols = result.arrCols[count++];

                        // 获取字段
                        let arrTempField = [];
                        cols.forEach(function (item) {
                            arrTempField.push(item.name);
                        });

                        // 建立表结构
                        $public.addFieldDataField(arrData, arrTempField);
                        // 获取库类型
                        let dbType = dbName.substr(0, 1);
                        // 获取表类型
                        let isSysTable = $mSystem.checkSystemTable(dbType, table);

                        // 将读到的mysql数据保存到用户缓冲区中
                        that.saveMysqlDataToUserData(dbName, table, isSysTable, arrData, arrTempField, rows, para.arrSort);
                    }

                    para.nStep = 'end';
                    if (++dbFlag === 2) {
                        that.hardDirectMultiQuery(dbName, arrTable, arrFields, arrCondition, arrStart, arrTotal, arrSorts, arrDatas, arrIsGetSum, successCallBack, errorCallBack)
                    }
                }, function (error) {
                    // 表示有错：
                    let $error = $public.getErrorObj('01_50', error, 'CDatabase', '01', '50', global.localIp);
                    para.errorCallBack($error);
                });
                break;
            case 'end':
                para.successCallBack(para.arrSum);
                return
        }
        if (++dbFlag === 1) {
            return
        }
    }
};


/*
 *-------------------------------------------------------------------------------//
 * 功能： 记录删
 * arrTable：为持久库表
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.hardRecordDelete = function (dbName, arrTable, arrIds, hardTrans, successCallBack, errorCallBack) {
    let arrCond = null;
    this.hardDeleteRecord(dbName, arrTable, arrIds, arrCond, hardTrans, successCallBack, function (error) {
        let $error = $public.getErrorObj('01_58', error, 'CDatabase', '01', '58', global.localIp);
        errorCallBack($error);
    });
};


/*
 *-------------------------------------------------------------------------------//
 * 功能： 条件删
 * arrTable：为持久库表
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.hardCondRecordDelete = function (dbName, arrTable, arrConditions, hardTrans, successCallBack, errorCallBack) {
    let arrIds = null;
    this.hardDeleteRecord(dbName, arrTable, arrIds, arrConditions, hardTrans, successCallBack, function (error) {
        let $error = $public.getErrorObj('01_59', error, 'CDatabase', '01', '59', global.localIp);
        errorCallBack($error);
    });
};


/*
 *-------------------------------------------------------------------------------//
 * 功能： 记录删与条件删（实际实现函数）
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.hardDeleteRecord = function (dbName, arrTable, arrIds, arrConditions, hardTrans, successCallBack, errorCallBack) {
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
            console.log('baseHard--hardDeleteRecord：' + para.nStep)
        }
        switch (para.nStep) {
            case 0:
                // 初始化：
                // 打开内存数据库：
                para.cache = this.cacheOpenDatabase(dbName);
                // 申请mysql缓存区：
                para.allSql = '';

                para.nStep = 'get_del_data';
                dbFlag++;
                break;
            case 'get_del_data':
                if (para.i >= arrTable.length) {
                    para.i = 0;
                    para.nStep = 'del_mysql';
                    dbFlag++;
                    break;
                }

                // 循环操作表，获取表名，字段，id等数据：
                para.table = arrTable[para.i];
                if (arrIds === null) {
                    para.arrId = null;
                    para.arrCondition = arrConditions[para.i];
                } else {
                    para.arrId = arrIds[para.i];
                    para.arrCondition = null;
                }


                let tableSql = that.getRecordDeleteData(dbName, para.table, para.arrId, para.arrCondition);
                // 当返回的是错误的话，直接返回给上层：
                if (Object.prototype.toString.call(tableSql) === '[object Object]') {
                    para.errorCallBack('参数 arrConditions 错误！');
                    return
                }
                if (para.allSql !== "") para.allSql += ";";
                para.allSql += tableSql;

                para.i++;
                dbFlag++;
                para.nStep = 'get_del_data';
                break;
            case 'del_mysql':
                // 将数据写入mysql !!
                $mysqlTrans.mysqlRecordDelete(dbName, para.allSql, hardTrans, function (result) {
                    para.nStep = 'end';
                    if (++dbFlag === 2) {
                        that.hardDeleteRecord(dbName, arrTable, arrIds, arrConditions, hardTrans, successCallBack, errorCallBack)
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
 * 功能： 持久库转移文件读
 * arrIds为内存库ID
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.hardMoveFileRead = function (dbName, arrTable, arrIds, arrFields, successCallBack, errorCallBack) {
    let that = this;
    let dbFlag;
    let para = {
        successCallBack: successCallBack,
        errorCallBack: errorCallBack,
        nStep: 0,
        i: 0,
        j: 0,
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
        if($baseDef.print) {
            console.log('baseHard--hardMoveFileRead：' + para.nStep)
        }
        switch (para.nStep) {
            case 0:
                para.cache = this.cacheOpenDatabase(dbName);

                if (para.i >= arrTable.length) {
                    para.i = 0;
                    para.nStep = 'end';
                    dbFlag++;
                    break;
                }

                // 循环操作表，获取表名，字段，id等数据：
                para.table = arrTable[para.i];
                para.arrId = arrIds[para.i];
                para.arrField = arrFields[para.i];
                para.arrData = {};

                // 读取所有的文件名
                that.cacheRecordRead(dbName, para.table, para.arrId, para.arrField, para.arrData);

                para.nStep = 'arrId_loop';
                dbFlag++;
                break;
            case 'arrId_loop':  //arrId循环
                if (para.j >= para.arrId.length) {
                    para.j = 0;
                    para.nStep = 'cacheRecordModify';
                } else {
                    para.nStep = 'arrField_loop';
                }
                dbFlag++;
                break;
            case 'arrField_loop':  //arrField循环
                if (para.k >= para.arrField.length) {
                    para.j++;
                    para.k = 0;
                    para.nStep = 'arrId_loop';
                } else {
                    //获取字段
                    para.field = para.arrField[para.k];
                    // 获取一个字段所有文件
                    para.arrUrl = para.arrData[para.field][para.j];
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
                let result = that.getMemUrlInfo(url, false);

                // 是外网url吗？
                if (!result.outUrl) {
                    // 获取源url结构信息
                    let srcInfo = result.srcUrlInfo;
                    // 获取目标url结构信息
                    let destInfo = result.destUrlInfo;
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
                                para.cache.sql.memAddFileSize(para.table, para.field, para.arrId[para.j], ByteNum - oldByteNum);
                            }
                            // 更新url
                            para.arrUrl[para.n] = destInfo.server + '/' + destInfo.path;
                        }

                        para.n++;
                        para.nStep = 'arrUrl_loop';
                        if (++dbFlag === 2) {
                            that.hardMoveFileRead(dbName, arrTable, arrIds, arrFields, successCallBack, errorCallBack)
                        }
                    }, function (error) {
                        para.errorCallBack(error);
                    })
                } else {
                    para.n++;
                    para.nStep = 'arrUrl_loop';
                    dbFlag++;
                }
                break;
            case 'cacheRecordModify':
                // 更新内存url
                that.cacheRecordModify(dbName, para.table, para.arrId, para.arrField, para.arrData);

                para.i++;
                para.nStep = 0;
                dbFlag++;
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


/*
 *-------------------------------------------------------------------------------//
 * 功能： 获取字段类型
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.hardGetFieldType = function (dbName, table, field) {
    return $mysqldb.mysqlGetFieldType(dbName, table, field);
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
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.hardGetAllField = function (dbName, table, arrField, type) {
    let arrAllField;
    // 判断字段类型
    if (type === null) {
        arrAllField = Object.keys($mysqldb.mysqlGetAllField(dbName, table));
    } else {
        let arrField1;  // 拷贝一份arrField
        let arrHideField;  // 隐藏字段

        // 拷贝一份arrField，为了不影响用户传入数据
        if (arrField === null) {
            arrField1 = $mysqldb.mysqlGetAllField(dbName, table);
            // 对象转为数组
            arrField1 = Object.keys(arrField1);
        } else {
            arrField1 = arrField;
        }

        // 是获取有效字段吗：
        if (type === $def.readField_valid) {
            // 获取db类型
            let dbType = dbName.substr(0, 1);
            // 获取隐藏字段
            arrHideField = $mSystem.getHideField(dbType, table, false);
        }

        // 初始化所有字段
        arrAllField = [];
        for (let i = 0; i < arrField1.length; i++) {
            let field = arrField1[i];
            // 获取字段类型
            let fileType = $mysqldb.mysqlGetFieldType(dbName, table, field);
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

