


const $def = require(global.dbPath + "/mem.def.js");
$mSystem = require(global.dbPath + "/db.sys.js");
const CDatabase = require(global.dbPath + "/database.js");
const $mysqldb = require(global.dbPath + "/mysql.db.js");
const $public = require(global.dbPath + "/public.js");
const $baseDef = require(global.dbPath + "/zeroBase/base.def.js");


/*
 *-------------------------------------------------------------------------------//
 * 功能： 判断持久库是否存在
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.hardExistDatabase = function (dbName, successCallBack, errorCallBack) {
    // 判断持久库是否存在
    let table = $baseDef.tableName_flag;
    $mysqldb.mysqlExistTable(dbName, table, null, function (result) {
        if(result) {
            $mysqldb.mysqlOpenDatabase(dbName, null, function () {
                successCallBack(result);
            }, errorCallBack);
        } else {
            successCallBack(result);
        }
    }, function (error) {
        let $error = $public.getErrorObj('01_80', error, 'CDatabase', '01', '80', global.localIp);
        errorCallBack($error);
    })
};


/*
 *-----------------------------------------------------------------------------------------------//
 * 功能： 建立持久库
 * ----------------------------------------------------------------------------------------------//
 */
CDatabase.prototype.hardCreateDatabase = function (dbName, arrDatas, successCallBack, errorCallBack) {
    let that = this;
    let dbFlag;
    let para = {
        successCallBack: successCallBack,
        errorCallBack: errorCallBack,
        nStep: 0
    };

    if (successCallBack !== null) {
        errorCallBack = para;
        successCallBack = null
    }
    para = errorCallBack;

    while (1) {
        dbFlag = 0;
        if ($baseDef.print) {
            console.log('baseZero--hardCreateDatabase：' + para.nStep)
        }
        switch (para.nStep) {
            case 0:
            case 'hardTransOpen':
                this.hardTransOpen(function (hardTrans) {
                    para.hardTrans = hardTrans;
                    para.nStep = 'createDatabase';
                    if (++dbFlag === 2) {
                        that.hardCreateDatabase(dbName, arrDatas, successCallBack, errorCallBack)
                    }
                }, function (error) {
                    let $error = $public.getErrorObj('01_84', error, 'CDatabase', '01', '84', global.localIp);
                    para.errorCallBack($error);
                });
                break;
            case 'createDatabase':
                // 建立持久数据库
                $mysqldb.mysqlCreateDatabase(dbName, para.hardTrans, function (result) {
                    para.nStep = 'databaseInit';
                    if (++dbFlag === 2) {
                        that.hardCreateDatabase(dbName, arrDatas, successCallBack, errorCallBack)
                    }
                }, function (error) {
                    para.error = error;
                    para.nStep = 'hardTransCancel';
                    if (++dbFlag === 2) {
                        that.hardCreateDatabase(dbName, arrDatas, successCallBack, errorCallBack)
                    }
                });
                break;
            case 'databaseInit':
                // 建立根表
                let $myServer = $mSystem.getMyserverDB();
                $myServer.myserverDatabaseInit(dbName, para.hardTrans, function () {
                    para.nStep = 'createTable';
                    if (++dbFlag === 2) {
                        that.hardCreateDatabase(dbName, arrDatas, successCallBack, errorCallBack)
                    }
                }, function (error) {
                    para.error = error;
                    para.nStep = 'hardTransCancel';
                    if (++dbFlag === 2) {
                        that.hardCreateDatabase(dbName, arrDatas, successCallBack, errorCallBack)
                    }
                });
                break;
            case 'createTable':
                // 建立用户表：
                this.hardCreateTable(dbName, arrDatas, para.hardTrans, function () {
                    para.nStep = 'createSignTable';
                    if (++dbFlag === 2) {
                        that.hardCreateDatabase(dbName, arrDatas, successCallBack, errorCallBack)
                    }
                }, function (error) {
                    para.error = error;
                    para.nStep = 'hardTransCancel';
                    if (++dbFlag === 2) {
                        that.hardCreateDatabase(dbName, arrDatas, successCallBack, errorCallBack)
                    }
                });
                break;
            case 'createSignTable':
                // 建立标志表，用于判断数据库是否成功建立
                para.signData = {
                    [$def.tableName_table]: {
                        [$def.id]: [''],
                        [$def.fatherID]: [''],
                        [$def.tableDef_tableName]: [$baseDef.tableName_flag],
                        [$def.tableDef_fatherTableName]: [''],
                        [$def.tableDef_delete]: [0],
                    },
                    [$def.tableName_field]: {
                        [$def.id]: [''],
                        [$def.fatherID]: [''],
                        [$def.fieldDef_tableName]: [$baseDef.tableName_flag],
                        [$def.fieldDef_fieldName]: ['name'],
                        [$def.fieldDef_dataType]: [$def.fieldType_string],
                        [$def.fieldDef_maxValue]: [32],
                        [$def.fieldDef_delete]: [0],
                    },
                };
                this.hardCreateTable(dbName, para.signData, para.hardTrans, function () {
                    para.nStep = 'open_database';
                    if (++dbFlag === 2) {
                        that.hardCreateDatabase(dbName, arrDatas, successCallBack, errorCallBack)
                    }
                }, function (error) {
                    para.error = error;
                    para.nStep = 'hardTransCancel';
                    if (++dbFlag === 2) {
                        that.hardCreateDatabase(dbName, arrDatas, successCallBack, errorCallBack)
                    }
                });
                break;
            case 'open_database':
                $mysqldb.mysqlOpenDatabase(dbName, null, function () {
                    para.nStep = 'hardTransClose';
                    if (++dbFlag === 2) {
                        that.hardCreateDatabase(dbName, arrDatas, successCallBack, errorCallBack)
                    }
                }, function (error) {
                    para.error = error;
                    para.nStep = 'hardTransCancel';
                    if (++dbFlag === 2) {
                        that.hardCreateDatabase(dbName, arrDatas, successCallBack, errorCallBack)
                    }
                });
                break;
            case 'hardTransClose':
                this.hardTransClose(para.hardTrans, function () {
                    para.nStep = 'end';
                    if (++dbFlag === 2) {
                        that.hardCreateDatabase(dbName, arrDatas, successCallBack, errorCallBack)
                    }
                }, function (error) {
                    let $error = $public.getErrorObj('01_84', error, 'CDatabase', '01', '84', global.localIp);
                    para.errorCallBack($error);
                });
                break;
            case 'hardTransCancel':
                this.hardTransCancel(para.hardTrans, function () {
                    let $error = $public.getErrorObj('01_84', para.error, 'CDatabase', '01', '84', global.localIp);
                    para.errorCallBack($error);
                }, function (error) {
                    let $error = $public.getErrorObj('01_84', error, 'CDatabase', '01', '84', global.localIp);
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
 * 功能：建立永久表
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.hardCreateTable = function (dbName, arrDatas, hardTrans, successCallBack, errorCallBack) {
    let that = this;
    let dbFlag;
    let para = {
        successCallBack: successCallBack,
        errorCallBack: errorCallBack,
        nStep: 0
    };

    if (successCallBack !== null) {
        errorCallBack = para;
        successCallBack = null
    }
    para = errorCallBack;

    while (1) {
        dbFlag = 0;
        if ($baseDef.print) {
            console.log('baseZero--hardCreateTable：' + para.nStep)
        }
        switch (para.nStep) {
            case 0:
            case 'hardSaveManageTable':
                // 将arrDatas表内容写入持久管理表中:
                this.hardSaveManageTable(dbName, arrDatas, hardTrans, function (arrTable) {
                    para.$myserver = $mSystem.getMyserverDB();
                    para.arrTable = arrTable;
                    para.nStep = 'build_server';
                    if (++dbFlag === 2) {
                        that.hardCreateTable(dbName, arrDatas, hardTrans, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'build_server':
                para.$myserver.myserverObjectBuild(dbName, para.arrTable, hardTrans, function () {
                    para.nStep = 'end';
                    if (++dbFlag === 2) {
                        that.hardCreateTable(dbName, arrDatas, hardTrans, successCallBack, errorCallBack)
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
 * 功能：将缓冲区的内容保存在持久管理表中
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.hardSaveManageTable = function (dbName, arrDatas, hardTrans, successCallBack, errorCallBack) {
    let that = this;
    let dbFlag;
    let tableName;
    let arrData;
    let arrId;
    let arrField;
    let dbData;
    let para = {
        successCallBack: successCallBack,
        errorCallBack: errorCallBack,
        nStep: 0
    };

    if (successCallBack !== null) {
        errorCallBack = para;
        successCallBack = null
    }
    para = errorCallBack;

    while (1) {
        dbFlag = 0;
        if ($baseDef.print) {
            console.log('baseZero--hardSaveManageTable：' + para.nStep)
        }
        switch (para.nStep) {
            case 0:
            case 'new_manage_table':
                // 获取$table表内容
                arrData = arrDatas[$def.tableName_table];
                arrId = [arrData[$def.id]];
                arrField = null;

                dbData = [];
                dbData[$def.tableName_table] = arrData;

                // 将arrData中的内容写入持久库中:
                that.hardDirectRecordNew(dbName, [$def.tableName_table], arrId, arrField, dbData, hardTrans, function () {
                    para.objTableId = {};
                    for (let i = 0; i < arrData[$def.tableDef_tableName].length; i++) {
                        para.objTableId[arrData[$def.tableDef_tableName][i]] = arrId[0][i];
                    }
                    para.nStep = 'new_manage_field_index';
                    if (++dbFlag === 2) {
                        that.hardSaveManageTable(dbName, arrDatas, hardTrans, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'new_manage_field_index':
                let fieldIndexData = {};
                arrId = [];
                arrField = null;
                tableName = [];
                // tableName = Object.keys(arrDatas);
                // tableName.splice(tableName.indexOf($def.tableName_table), 1);

                // 获取 $field 表内容:
                arrData = arrDatas[$def.tableName_field];
                if (arrData) {
                    tableName.push($def.tableName_field);
                    arrId.push(arrData[$def.id]);
                    // 添加父id，即表格id：
                    for (let i = 0; i < arrData[$def.fieldDef_tableName].length; i++) {
                        let table = arrData[$def.fieldDef_tableName][i];
                        for (let tableName1 in para.objTableId) {
                            if (table === tableName1) {
                                arrData[$def.fieldDef_fatherID][i] = para.objTableId[tableName1];
                                break;
                            }
                        }
                    }
                    // 通过link_name, 判断是否需要添加隐藏字段：
                    this.addLinkTableHideField(arrDatas);
                    fieldIndexData[$def.tableName_field] = arrData;
                }

                // 获取 index 表内容:
                arrData = arrDatas[$def.tableName_index];
                if (arrData) {
                    tableName.push($def.tableName_index);
                    // if (tableName.indexOf($def.tableName_index) === -1) tableName.push($def.tableName_index);
                    arrId.push(arrData[$def.id]);
                    // 添加父id，即表格id：
                    for (let i = 0; i < arrData[$def.indexTable_tableName].length; i++) {
                        let table = arrData[$def.indexTable_tableName][i];
                        for (let tableName1 in para.objTableId) {
                            if (table === tableName1) {
                                arrData[$def.indexTable_fatherId][i] = para.objTableId[tableName1];
                                break;
                            }
                        }
                    }
                    fieldIndexData[$def.tableName_index] = arrData;
                }

                // 将arrData中的内容写入持久库中:
                that.hardDirectRecordNew(dbName, tableName, arrId, arrField, fieldIndexData, hardTrans, function () {
                    // 获取用户表
                    para.arrTable = arrDatas[$def.tableName_table][$def.tableDef_tableName];
                    para.nStep = 'end';
                    if (++dbFlag === 2) {
                        that.hardSaveManageTable(dbName, arrDatas, hardTrans, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'end':
                para.successCallBack(para.arrTable);
                return
        }
        if (++dbFlag === 1) {
            return
        }
    }
};


/*
 *------------------------------------------------------------------------------------------//
 * 功能：建立内存库
 * -----------------------------------------------------------------------------------------//
 */
CDatabase.prototype.cacheCreateDatabase = function (dbName, arrDatas, successCallBack, errorCallBack) {
    // 打开内存数据库
    let cache = this.cacheOpenDatabase(dbName);
    // 建立数据库
    cache.db.createMemRootTable();
    // 建立内存表：
    this.cacheCreateTable(dbName, arrDatas, function () {
        successCallBack()
    }, function (error) {
        errorCallBack(error);
    });

};


/*
 *-------------------------------------------------------------------------------//
 * 功能：建立内存表
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.cacheCreateTable = function (dbName, arrDatas, successCallBack, errorCallBack) {
    // 打开内存数据库
    let cache = this.cacheOpenDatabase(dbName);
    // 将arrDatas表内容写入内存管理表中:
    this.cacheSaveManageTable(dbName, arrDatas, function (arrTable) {
        // 建立内存库表
        let resultObj = cache.tbl.memCreateDB(arrTable);
        if (resultObj.code !== 0) {
            errorCallBack(resultObj);
        } else {
            successCallBack();
        }
    }, function (error) {
        errorCallBack(error);
    });
};


/*
 *-------------------------------------------------------------------------------//
 * 功能：将arrDatas表内容写入内存管理表中
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.cacheSaveManageTable = function (dbName, arrDatas, successCallBack, errorCallBack) {
    let that = this;
    let dbFlag;
    let tableName;
    let arrData;
    let arrId;
    let arrField;
    let para = {
        successCallBack: successCallBack,
        errorCallBack: errorCallBack,
        nStep: 0
    };

    if (successCallBack !== null) {
        errorCallBack = para;
        successCallBack = null
    }
    para = errorCallBack;

    while (1) {
        dbFlag = 0;
        if ($baseDef.print) {
            console.log('baseZero--cacheSaveManageTable：' + para.nStep)
        }
        switch (para.nStep) {
            case 0:
            case 'new_manage_table':
                // 获取$table表内容
                tableName = $def.tableName_table;
                arrData = arrDatas[tableName];
                arrId = arrData[$def.id];
                arrField = null;

                // 新增表格表数据:
                para.cacheResult = that.cacheRecordNew(dbName, tableName, arrId, arrField, arrData);
                if (para.cacheResult.code === 0) {
                    para.objTableId = {};
                    for (let i = 0; i < arrData[$def.tableDef_tableName].length; i++) {
                        para.objTableId[arrData[$def.tableDef_tableName][i]] = arrId[i];
                    }
                    para.nStep = 'new_manage_field_index';
                    dbFlag++;
                } else {
                    para.errorCallBack(para.cacheResult)
                }
                break;
            case 'new_manage_field_index':
                let fieldIndexData = {};
                arrId = [];
                arrField = null;
                tableName = [];
                // tableName = Object.keys(arrDatas);
                // tableName.splice(tableName.indexOf($def.tableName_table), 1);

                // 获取 $field 表内容:
                arrData = arrDatas[$def.tableName_field];
                if (arrData) {
                    tableName.push($def.tableName_field);
                    arrId.push(arrData[$def.id]);
                    for (let i = 0; i < arrData[$def.fieldDef_tableName].length; i++) {
                        let table = arrData[$def.fieldDef_tableName][i];
                        for (let tableName1 in para.objTableId) {
                            if (table === tableName1) {
                                arrData[$def.fieldDef_fatherID][i] = para.objTableId[tableName1];
                                break;
                            }
                        }
                    }
                    // 通过link_name, 判断是否需要添加隐藏字段：
                    this.addLinkTableHideField(arrDatas);
                    fieldIndexData[$def.tableName_field] = arrData;
                }

                // 获取 index 表内容:
                arrData = arrDatas[$def.tableName_index];
                if (arrData) {
                    tableName.push($def.tableName_index);
                    // if (tableName.indexOf($def.tableName_index) === -1) tableName.push($def.tableName_index);
                    arrId.push(arrData[$def.id]);
                    for (let i = 0; i < arrData[$def.indexTable_tableName].length; i++) {
                        let table = arrData[$def.indexTable_tableName][i];
                        for (let tableName1 in para.objTableId) {
                            if (table === tableName1) {
                                arrData[$def.indexTable_fatherId][i] = para.objTableId[tableName1];
                                break;
                            }
                        }
                    }
                    fieldIndexData[$def.tableName_index] = arrData;
                }

                // 新增字段表，索引表数据:
                para.cacheResult = that.cacheObjectNew(dbName, tableName, arrId, null, arrField, fieldIndexData);
                if (para.cacheResult.code === 0) {
                    // 获取用户表
                    para.arrTable = arrDatas[$def.tableName_table][$def.tableDef_tableName];
                    para.nStep = 'end';
                    dbFlag++;
                } else {
                    para.errorCallBack(para.cacheResult)
                }
                break;
            case 'end':
                para.successCallBack(para.arrTable);
                return
        }
        if (++dbFlag === 1) {
            return
        }
    }
};


/*
 *-------------------------------------------------------------------------------//
 * 功能：添加关联表隐藏字段
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.addLinkTableHideField = function (arrDatas) {
    let fieldData = arrDatas[$def.tableName_field];
    let arrTableName = arrDatas[$def.tableName_table][$def.tableDef_tableName];
    let arrField = Object.keys(fieldData);
    let arrLinkTable = fieldData[$def.fieldDef_linkTable];

    if (arrLinkTable) {
        for (let i = 0; i < arrLinkTable.length; i++) {
            if (arrLinkTable[i]) {
                let curDB = false;
                // 判断关联表是否为当前数据库的表：
                for (let j = 0; j < arrTableName.length; j++) {
                    if (arrTableName[j] === arrLinkTable[i]) {
                        curDB = true;
                        break;
                    }
                }
                // 当不是当前数据库的表，则需要添加一个隐藏字段，以及一个索引：
                if (!curDB) {
                    let tableName = fieldData[$def.fieldDef_tableName][i];
                    let field = $def.linkFieldHead + fieldData[$def.fieldDef_fieldName][i];
                    // 添加隐藏字段:
                    for (let j = 0; j < arrField.length; j++) {
                        switch (arrField[j]) {
                            case $def.fieldDef_tableName:
                            case $def.fieldDef_fatherID:
                                fieldData[arrField[j]].push(fieldData[arrField[j]][i]);
                                break;
                            case $def.fieldDef_fieldName:
                                fieldData[arrField[j]].push(field);
                                break;
                            case $def.fieldDef_dataType:
                                fieldData[arrField[j]].push($def.fieldType_number);
                                break;
                            case $def.fieldDef_maxValue:
                                fieldData[arrField[j]].push($def.id_length);
                                break;
                            case $def.fieldDef_delete:
                                fieldData[arrField[j]].push(0);
                                break;
                            default:
                                fieldData[arrField[j]].push(null);
                                break;
                        }
                    }
                    // 添加索引:
                    if (!arrDatas[$def.tableName_index]) {
                        arrDatas[$def.tableName_index] = {
                            [$def.id]: [],
                            [$def.indexTable_fatherId]: [],
                            [$def.indexTable_tableName]: [],
                            [$def.indexTable_type]: [],
                            [$def.indexTable_indexField]: [],
                            [$def.indexTable_delete]: [],
                        };
                    }
                    let indexData = arrDatas[$def.tableName_index];
                    let arrIndexField = Object.keys(indexData);
                    for (let j = 0; j < arrIndexField.length; j++) {
                        switch (arrIndexField[j]) {
                            case $def.id:
                                indexData[arrIndexField[j]].push('');
                                break;
                            case $def.indexTable_fatherId:
                                indexData[arrIndexField[j]].push('');
                                break;
                            case $def.indexTable_tableName:
                                indexData[arrIndexField[j]].push(tableName);
                                break;
                            case $def.indexTable_type:
                                indexData[arrIndexField[j]].push($def.indexType_normal);
                                break;
                            case $def.indexTable_indexField:
                                let data = {field_name: [field]};
                                indexData[arrIndexField[j]].push(data);
                                break;
                            case $def.indexTable_delete:
                                indexData[arrIndexField[j]].push(0);
                                break;
                            default:
                                indexData[arrIndexField[j]].push(null);
                                break;
                        }
                    }
                }
            }
        }
    }
};


/*
 *-------------------------------------------------------------------------------//
 * 功能：建立内存表索引
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.cacheCreateIndex = function (dbName, table, arrField, successCallBack, errorCallBack) {
    // 打开内存数据库
    let cache = this.cacheOpenDatabase(dbName);
    // 建立内存库表
    let resultObj = cache.sql.memCreateTableIndex(table, arrField, $def.indexType_normal);
    if (resultObj.code !== 0) {
        // 表示有错：
        let $error = $public.getErrorObj('01_86', resultObj, 'CDatabase', '01', '86', global.localIp);
        errorCallBack($error);
    } else {
        successCallBack();
    }
};


/*
 *-------------------------------------------------------------------------------//
 * 功能：删除table表, field表中该表名对应的记录
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.cacheDeleteManageTableField = function (dbName, table, successCallBack, errorCallBack) {
    // 打开内存数据库
    let cache = this.cacheOpenDatabase(dbName);
    let condition = "(" + $def.tableDef_tableName + "='" + table + "')";
    // 删除管理表中的表名及字段名
    let resultObj = cache.db.memRecordDelete($def.tableName_table, null, condition);
    if (resultObj.code !== 0) {
        // 表示有错：
        let $error = $public.getErrorObj('01_87', resultObj, 'CDatabase', '01', '87', global.localIp);
        errorCallBack($error);
    } else {
        resultObj = cache.db.memRecordDelete($def.tableName_field, null, condition);
        if (resultObj.code !== 0) {
            // 表示有错：
            let $error = $public.getErrorObj('01_87', resultObj, 'CDatabase', '01', '87', global.localIp);
            errorCallBack($error);
        } else {
            successCallBack();
        }
    }
};


/*
 *-------------------------------------------------------------------------------//
 * 功能：删除索引表中该表名对应的记录
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.cacheDeleteIndex = function (dbName, table, successCallBack, errorCallBack) {
    // 打开内存数据库
    let cache = this.cacheOpenDatabase(dbName);
    let condition = "(" + $def.indexTable_tableName + "='" + table + "')";
    // 删除索引表中的表名及字段名
    let resultObj = cache.db.memRecordDelete($def.tableName_index, null, condition);
    if (resultObj.code !== 0) {
        // 表示有错：
        let $error = $public.getErrorObj('01_87', resultObj, 'CDatabase', '01', '89', global.localIp);
        errorCallBack($error);
    } else {
        successCallBack();
    }
};


/*
 *-------------------------------------------------------------------------------//
 * 功能：删除表及记录
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.cacheDeleteTable = function (dbName, table, successCallBack, errorCallBack) {
    // 打开内存数据库
    let cache = this.cacheOpenDatabase(dbName);
    let resultObj = cache.db.memDropTable(table);
    if (resultObj.code !== 0) {
        // 表示有错：
        let $error = $public.getErrorObj('01_88', resultObj, 'CDatabase', '01', '88', global.localIp);
        errorCallBack($error);
    } else {
        successCallBack();
    }
};






/*
 *-------------------------------------------------------------------------------//
 * 功能：删除table表, field表中该表名对应的记录
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.cacheDeleteManageTableField = function (dbName, table, successCallBack, errorCallBack) {
    // 打开内存数据库
    let cache = this.cacheOpenDatabase(dbName);

    // 删除管理表中的表名及字段名
    /*mgh delete ---------------------------------------------------------------------//
    let condition = "(" + $def.tableDef_tableName + "='" + table + "')";
    let resultObj = cache.db.memRecordDelete($def.tableName_table, null, condition);
    if (resultObj.code !== 0) {
        // 表示有错：
        let $error = $public.getErrorObj('01_87', resultObj, 'CDatabase', '01', '87', 'm');
        errorCallBack($error);
    } else {
        resultObj = cache.db.memRecordDelete($def.tableName_field, null, condition);
        if (resultObj.code !== 0) {
            // 表示有错：
            let $error = $public.getErrorObj('01_87', resultObj, 'CDatabase', '01', '87', 'm');
            errorCallBack($error);
        } else {
            successCallBack();
        }
    }
     */

    let $arrRecordNo = [];
    cache.sql.queryRecordNo($def.tableName_table, $def.tableDef_tableName, [table], $arrRecordNo);
    cache.sql.deleteRecord_by_recordNo($def.tableName_table, $arrRecordNo, null);

    $arrRecordNo = [];
    cache.sql.queryRecordNo($def.tableName_field, $def.fieldDef_tableName, [table], $arrRecordNo);
    cache.sql.deleteRecord_by_recordNo($def.tableName_field, $arrRecordNo, null);

    successCallBack();
};


/*
 *-------------------------------------------------------------------------------//
 * 功能：删除索引表中该表名对应的记录
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.cacheDeleteIndex = function (dbName, table, successCallBack, errorCallBack) {
    // 打开内存数据库
    /*
    let cache = this.cacheOpenDatabase(dbName);
    let condition = "(" + $def.indexTable_tableName + "='" + table + "')";
    // 删除索引表中的表名及字段名
    let resultObj = cache.db.memRecordDelete($def.tableName_index, null, condition);
    if (resultObj.code !== 0) {
        // 表示有错：
        let $error = $public.getErrorObj('01_87', resultObj, 'CDatabase', '01', '89', 'm');
        errorCallBack($error);
    } else {
        successCallBack();
    }
    */

    let cache = this.cacheOpenDatabase(dbName);
    let $arrRecordNo = [];
    cache.sql.queryRecordNo($def.tableName_index, $def.indexTable_tableName, [table], $arrRecordNo);
    cache.sql.deleteRecord_by_recordNo($def.tableName_index, $arrRecordNo, null);
    successCallBack();
};



