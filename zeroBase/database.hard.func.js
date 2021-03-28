const $public = require(global.dbPath + "/public.js");
const $def = require(global.dbPath + "/mem.def.js");
$mSystem = require(global.dbPath + "/db.sys.js");
const $mysqlTrans = require(global.dbPath + "/mysql.trans.js");
const CDatabase = require(global.dbPath + "/database.js");
const CMyserverCond = require(global.dbPath + "/myserver.cond.js");
const $mysqldb = require(global.dbPath + "/mysql.db.js");
const $cacheFile = require(global.dbPath + "/zeroBase/cache.file.js");
const $baseDef = require(global.dbPath + "/zeroBase/base.def.js");
var $mysql = require(global.nodePath + "/node_modules/mysql");


/*
 *-------------------------------------------------------------------------------//
 * 获取转移新增数据
 * arrTableData：该表对应的内存表数据
 * table：表名
 * arrId：需要获取数据的id
 * arrRecordNo：id对应的记录号
 * arrField：字段名
 * backFill：回填字段
 * cache：cache实例，cache.sql可以操作MySQL
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.getMoveRecordNewData = function (arrTableData, table, arrRecordNo, arrMemFields, allMysqlField, arrWriteFields, arrValue, cache) {
    // 需要修改的MySQL字段：
    let arrField = [];

    arrRecordNo.forEach(function () {
        arrValue.push([]);
    });

    for (let i = 0; i < arrMemFields.length; i++) {
        let fieldType = cache.sql.memGetFieldType(table, arrMemFields[i]);
        // 内存中的id字段需要转为MySQL的recordId字段，original字段需要转为MySQL的id字段:
        if (arrMemFields[i] === $def.id) {
            arrField.push($def.recordId);
        } else if (arrMemFields[i] === $def.original) {
            arrField.push($def.id);
        } else if (allMysqlField.includes(arrMemFields[i])) {  // 判断该内存字段在mysql是否存在
            arrField.push(arrMemFields[i]);
        } else {
            continue
        }

        for (let j = 0; j < arrRecordNo.length; j++) {
            // 获取记录号对应的记录值：
            let value = arrTableData[arrMemFields[i]][arrRecordNo[j]];
            if (arrMemFields[i] === $def.original) {
                // value = '';//alice-
                value = null;//alice+
            } else {
                if (value !== null) value = this.getMysqlDatabaseValue(fieldType, value);
            }
            arrValue[j].push(value);
        }
    }
    // 获取到MySQL需要新增记录的字段：
    arrWriteFields.push(arrField);
};


/*
 *-------------------------------------------------------------------------------//
 * 获取直接新增数据
 * arrData：内存变量存储数据
 * table：表名
 * arrId：需要获取数据的id
 * arrField：字段名
 * arrValue：最终返回数据
 * cache：cache实例，cache.sql可以操作MySQL
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.getDirectRecordNewData = function (dbName, arrData, destTable, arrId, arrField, arrValue) {
    let value;
    arrId.forEach(function () {
        arrValue.push([]);
    });

    for (let i = 0; i < arrField.length; i++) {
        // 判断是否为id字段：
        if (arrField[i] === $def.id) {
            for (let j = 0; j < arrId.length; j++) {
                value = arrId[j];
                if (!value) value = null;
                arrValue[j][i] = value;
            }
            continue;
        }

        let fieldType = $mysqldb.mysqlGetFieldType(dbName, destTable, arrField[i]);

        // 用户传入的 arrField 可能为错误字段，或者arrData中不存在该字段：
        if (arrData[arrField[i]]) {
            for (let j = 0; j < arrData[arrField[i]].length; j++) {
                // 获取记录号对应的记录值：
                value = arrData[arrField[i]][j];
                if (value !== null) value = this.getMysqlDatabaseValue(fieldType, value);
                arrValue[j][i] = value;
            }
        }
    }
};


/*
 *-------------------------------------------------------------------------------//
 * 获取修改转移数据
 * arrTableData：该表对应的内存表所有字段所有记录数据
 * table：表名
 * arrId：需要转移修改的id
 * arrRecordNo：id对应的记录号
 * arrField：需要转移修改的字段名
 * originalField：原始记录字段（保存原始表中的id）
 * cache：cache实例，cache.sql可以操作MySQL
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.getMoveRecordModifyData = function (dbName, arrTableData, table, arrId, arrRecordNo, arrCacheField, allMysqlField, cache) {
    let tableSql = '';
    let $dbName = $public.getPortDatabaseName(dbName);
    let startSql = "update " + $public.getSqlName($dbName) + "." + $public.getSqlName(table) + " set ";

    for (let i = 0; i < arrRecordNo.length; i++) {
        let recordSql = startSql;
        // 一条记录值
        let arrValue = [];
        for (let j = 0; j < arrCacheField.length; j++) {
            // 将id,original字段去除，因为不需要修改：
            if (arrCacheField[j] === $def.id || arrCacheField[j] === $def.original || !allMysqlField.includes(arrCacheField[j])) {
                continue
            }
            // 保存字段：
            recordSql += $public.getSqlName(arrCacheField[j]) + "=?";
            recordSql += ",";
            // 获取记录值:
            let value = arrTableData[arrCacheField[j]][arrRecordNo[i]];
            if (value !== null) {
                // 获取字段类型
                let fieldType = cache.sql.memGetFieldType(table, arrCacheField[j]);
                value = this.getMysqlDatabaseValue(fieldType, value);
            }
            // 保存值
            arrValue.push(value);
        }

        // recordSql最后一个字符为','，所以需要删除：
        recordSql = recordSql.slice(0, -1);

        // 需要使用original保存的id：
        let id = arrTableData[$def.original][arrRecordNo[i]];

        // 格式化并转义值
        recordSql = $mysql.format(recordSql, arrValue);

        recordSql += " where " + $public.getSqlName($def.id) + "='" + id + "'";
        if (tableSql !== "") tableSql += ";";
        tableSql += recordSql;
    }
    return tableSql;
};


/*
 *-------------------------------------------------------------------------------//
 * 获取直接修改数据
 * arrData：{f1: [data1, data2], f2: [data3, data4]}（不包含id字段）
 * table：表名
 * arrId：需要获取数据的id
 * arrField：字段名
 * cache：cache实例，cache.sql可以操作MySQL
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.getDirectRecordModifyData = function (dbName, arrData, destTable, arrId, arrField, cache) {
    let tableSql = '';
    let $dbName = $public.getPortDatabaseName(dbName);
    let startSql = "update " + $public.getSqlName($dbName) + "." + $public.getSqlName(destTable) + " set ";
    // 获取所有字段类型
    let arrAllFieldType = $mysqldb.mysqlGetAllFieldType(dbName, destTable);

    for (let i = 0; i < arrId.length; i++) {
        let recordSql = startSql;
        // 一条记录值
        let arrValue = [];
        for (let j = 0; j < arrField.length; j++) {
            // ID字段不需要修改，直接跳过：
            if (arrField[j] === $def.id) continue;

            // 保存字段：
            recordSql += $public.getSqlName(arrField[j]) + "=?";
            recordSql += ",";

            // 获取记录值:
            let value = arrData[arrField[j]] ? arrData[arrField[j]][i] : null;
            if (value !== null) {
                // 获取字段类型
                let fieldType = arrAllFieldType[arrField[j]];
                value = this.getMysqlDatabaseValue(fieldType, value);
            }
            arrValue.push(value)
        }

        recordSql = recordSql.slice(0, -1);   // 去除末尾的,
        // 格式化并转义值
        recordSql = $mysql.format(recordSql, arrValue);
        recordSql += " where " + $public.getSqlName($def.id) + "='" + arrId[i] + "'";
        if (tableSql !== "") tableSql += ";";
        tableSql += recordSql;
    }
    return tableSql;
};


/*
 *-------------------------------------------------------------------------------//
 * 根据提供的表名（实际表表名）、字段名、id（原始表id），可以获取对应的mysql数据
 * table：表名
 * arrId：需要获取数据的id
 * isMove：是转移查询还是直接查询
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.getMysqlData = function (dbName, arrTable, arrOriginalIds, arrConditions, arrFields, arrFuncField, funcField, isMove, hardTrans, cache, successCallBack, errorCallBack) {
    let that = this;
    let dbFlag;
    let para = {
        successCallBack: successCallBack,
        errorCallBack: errorCallBack,
        nStep: 0,
        i: 0,
        allSql: ''
    };

    if (successCallBack !== null) {
        errorCallBack = para;
        successCallBack = null
    }
    para = errorCallBack;

    while (1) {
        dbFlag = 0;
        if ($baseDef.print) {
            console.log('baseHardFunc--getMysqlData：' + para.nStep)
        }
        switch (para.nStep) {
            case 0:
            case 'make_mysql_data':
                if (para.i >= arrTable.length) {
                    para.i = 0;
                    para.nStep = 'get_mysql';
                    dbFlag++;
                    break;
                }

                para.table = arrTable[para.i];
                para.arrField = arrFields ? arrFields[para.i] : null;

                if (para.arrField && isMove) {
                    para.arrField = JSON.parse(JSON.stringify(para.arrField));
                    // 用户传进来的 arrField 可能不存在record_id, id，需要手动添加，组织MySQL语句时需要用到：
                    // 先判断父id是否存在，再判断id是否存在：
                    let record_id_exist = false;
                    let id_exist = false;
                    para.arrField.forEach(function (item) {
                        if (item === $def.recordId) record_id_exist = true;
                        if (item === $def.id) id_exist = true;
                    });

                    if (!record_id_exist) {
                        para.arrField.push($def.recordId);
                    }
                    if (!id_exist) {
                        para.arrField.push($def.id);
                    }
                }

                // 判断arrOriginalIds是否为null，当为null表示是查询操作，否则为读操作：
                let tableSql;
                let condition = '';
                if (arrOriginalIds === null) {
                    // 判断此表是否有函数字段：
                    if (funcField && arrFuncField[para.i]) {
                        tableSql = this.getRecordReadQueryDataFuncField(dbName, para.table, arrConditions[para.i], para.arrField, funcField.arrSql[para.i], funcField.arrAlias[para.i]);
                    } else {
                        let arrCondition = arrConditions ? arrConditions[para.i] : null;
                        // 将用户表达式转mysql表达式
                        let resultObj = this.getMysqlCondition(arrCondition);
                        if (resultObj.code != 0) {  // 出错
                            para.errorCallBack(resultObj);
                            return
                        }
                        // 根据提供的表名（实际表表名）、字段名、条件，可以组织MySQL语言：
                        tableSql = this.getRecordReadQueryData(dbName, para.table, arrOriginalIds, resultObj.cond, para.arrField);
                    }
                } else {
                    // 根据提供的表名（实际表表名）、字段名、id（原始表id），可以组织MySQL语言：
                    tableSql = this.getRecordReadQueryData(dbName, para.table, arrOriginalIds[para.i], condition, para.arrField);
                }


                if (para.allSql !== "") para.allSql += ";";
                para.allSql += tableSql;

                para.i++;
                dbFlag++;
                para.nStep = 'make_mysql_data';
                break;
            case 'get_mysql':
                // 通过组织好的MySQL语言，获取mysql数据：
                $mysqlTrans.mysqlExecQuery(dbName, para.allSql, arrTable.length, hardTrans, function (result) {
                    para.result = result;
                    para.nStep = 'end';
                    if (++dbFlag === 2) {
                        that.getMysqlData(dbName, arrTable, arrOriginalIds, arrConditions, arrFields, arrFuncField, funcField, isMove, hardTrans, cache, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'end':
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
 * 读取查询 ---> 组织MySQL语句
 * table：表名
 * arrId：需要获取数据的id
 * select id, name1, age, name from test1_tc where `id` = (select max(id) from test1_tc where id >0 )
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.getRecordReadQueryData = function (dbName, table, arrId, condition, arrField) {
    let $dbName = $public.getPortDatabaseName(dbName);
    let tableSql = "select ";

    if (arrField === null) {
        tableSql += " * ";
    } else {
        for (let i = 0; i < arrField.length; i++) {
            if (i > 0) tableSql += ",";
            tableSql += $public.getSqlName(arrField[i]);
        }
    }

    let conditionSql = '';
    if (arrId === null) {
        conditionSql = condition;
    } else {
        for (let i = 0; i < arrId.length; i++) {
            if (i > 0) conditionSql += " or ";
            conditionSql += "id=" + arrId[i];
        }
    }

    tableSql += " from " + $public.getSqlName($dbName) + "." + $public.getSqlName(table);
    tableSql += " where ";
    tableSql += conditionSql;

    return tableSql
};


/*
 *-------------------------------------------------------------------------------//
 * 读取查询 ---> 组织MySQL语句(有函数字段时调用)
 * table：表名
 * arrCondition: 用户传入条件集合，可以为null
 * 复合语句：
 * select id, name1, age, name from test1_tc where `id` = (select max(id) from test1_tc where id =1 && ver=2 &&pt=3)
   Union
   select id, name1, age, name from test1_tc where `id` = (select max(id) from test1_tc where  id =1 && ver=2 &&pt=3 )
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.getRecordReadQueryDataFuncField = function (dbName, table, arrCondition, arrField, funcSql, alias) {
    let $dbName = $public.getPortDatabaseName(dbName);
    // 获取字段sql
    let fieldSql = "";

    for (let i = 0; i < arrField.length; i++) {
        if (i > 0) fieldSql += ",";
        fieldSql += $public.getSqlName(arrField[i]);
    }

    let tableSql = "select ";
    tableSql += fieldSql;
    tableSql += " from " + $public.getSqlName($dbName) + "." + $public.getSqlName(table);
    tableSql += " where ";

    let subSql = "(select ";
    subSql += funcSql;
    subSql += " from " + $public.getSqlName($dbName) + "." + $public.getSqlName(table);
    subSql += " where ";

    let allSql = '';
    if (arrCondition) {
        for (let i = 0; i < arrCondition.length; i++) {
            // 将用户表达式转mysql表达式
            let resultObj = this.getMysqlCondition([arrCondition[i]]);
            if (resultObj.code != 0) {
                // 表示有错：
                return resultObj
            }

            let subSql1 = subSql;
            subSql1 += resultObj.cond;
            subSql1 += ")";
            let tableSql1 = tableSql;
            tableSql1 += $public.getSqlName(alias);
            tableSql1 += " = ";
            tableSql1 += subSql1;
            tableSql1 += " and " + resultObj.cond;
            if (i > 0) allSql += " union ";
            allSql += tableSql1;
        }
    } else {
        let condition = "1=1";
        subSql += condition;
        subSql += ")";
        tableSql += $public.getSqlName(alias);
        tableSql += " = ";
        tableSql += subSql;
        allSql += tableSql;
    }

    return allSql
};


/*
 *-------------------------------------------------------------------------------//
 * 将转移数据保存在变量缓存区中(查询函数专用)
 * table：mysql表名
 * arrData：数据缓存区
 * arrField：MySQL字段
 * rows：MySQL中的字段数据
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.saveMysqlDataToUserData = function (dbName, table, isSysTable, arrData, arrField, rows, sort) {
    // 获取记录数:
    let count = arrData[arrField[0]].length;
    // 缓冲区中排序字段:
    let sortField = "";
    let arrType = [];


    // 判断是否需要排序：
    if (!sort && count > 0) {
        if (isSysTable) {
            if (arrData[$def.id]) sortField = $def.id;
        } else {
            if (arrData[$def.recordId]) sortField = $def.recordId;
        }
    }

    // 循环获取所有字段类型：
    arrField.forEach(function (item, index) {
        arrType[index] = $mysqldb.mysqlGetFieldType(dbName, table, item);
    });

    // rows中包含的是MySQL中的字段数据，arrField中的是内存中的字段：
    for (let i = 0; i < rows.length; i++) {
        let index;
        let arrValue = rows[i];
        // 有排序字段吗？
        if (sortField !== "") {
            // 获取排序字段值
            let id = arrValue[sortField];
            // 在缓冲区中查找此值对应的位置:
            index = $public.array_of(arrData[sortField], id);
            if (index === -1) {
                continue
            }
        } else {
            index = count + i;
        }

        for (let j = 0; j < arrField.length; j++) {
            let type = arrType[j];
            // 当取到的 arrField[j] 是内存中独有的字段时，从arrValue中读取值是读不到的：
            let value = arrValue[arrField[j]];
            value = this.getUserMysqlDatabaseValue(type, value);
            // 保存此值
            arrData[arrField[j]][index] = value;
        }
    }
};


/*
 *-------------------------------------------------------------------------------//
 * 将转移数据保存在变量缓存区中(读函数专用)
 * table：mysql表名
 * arrId：需要获取数据的id
 * arrData：数据缓存区
 * arrField：MySQL字段
 * rows：MySQL中的字段数据
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.saveMysqlDataToUserData_recordRead = function (dbName, table, arrId, arrData, arrField, rows) {
    // 获取记录数:
    let count = arrData[arrField[0]].length;
    let arrType = [];

    for (let j = 0; j < arrField.length; j++) {
        let field = arrField[j];
        // 获取所有字段类型：
        arrType[j] = $mysqldb.mysqlGetFieldType(dbName, table, field);
        for (let i = count; i < arrId.length; i++) {
            // 保存默认值
            arrData[field][i] = $def.dbDefaultValue;
        }
    }

    // rows中包含的是MySQL中的字段数据，arrField中的是内存中的字段：
    for (let i = 0; i < rows.length; i++) {
        let arrValue = rows[i];
        // 获取排序字段值
        let id = arrValue[$def.id];
        // 在缓冲区中查找此值对应的位置:
        let index = $public.array_of(arrId, id);
        if (index === -1) {
            continue
        }

        for (let j = 0; j < arrField.length; j++) {
            let type = arrType[j];
            // 当取到的 arrField[j] 是内存中独有的字段时，从arrValue中读取值是读不到的：
            let value = arrValue[arrField[j]];
            value = this.getUserMysqlDatabaseValue(type, value);
            // 保存此值
            arrData[arrField[j]][index] = value;
        }
    }
};


/*
 *-------------------------------------------------------------------------------//
 * 获取删除数据
 * table：表名
 * arrId：需要获取数据的id
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.getRecordDeleteData = function (dbName, table, arrId, arrCondition) {
    // 获取初始化
    let $dbName = $public.getPortDatabaseName(dbName);
    let tableSql = "delete from " + $public.getSqlName($dbName) + "." + $public.getSqlName(table) + " where ";
    if (arrId) {
        for (let i = 0; i < arrId.length; i++) {
            if (i > 0) tableSql += " or ";
            // 保存字段
            tableSql += $def.id + "='" + arrId[i] + "'";
        }
    } else {
        let condition = '';
        if (arrCondition === null || arrCondition[0] === null) {
            condition = "1!=1";
        } else {
            for (let i = 0; i < arrCondition.length; i++) {
                if (i > 0) condition += "||";
                condition += "(" + arrCondition[i] + ")"
            }

            let conditionObj = $mSystem.getUserCond(condition, null);
            if (conditionObj.code != 0) {
                return conditionObj
            }
            $mSystem.toSqlArrCondition(conditionObj.arrConditions);
            let $cond = new CMyserverCond(conditionObj.arrConditions);
            condition = $cond.createExpression();
        }
        tableSql += condition;
    }
    return tableSql;
};


/*
 *-------------------------------------------------------------------------------//
 * 功能： 持久库转移文件读-文件内容从mysql缓冲区中获取
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.hardMoveFileReadBuffer = function (dbName, table, arrId, arrIsCache, arrField, rows, successCallBack, errorCallBack) {
    let that = this;
    let dbFlag;
    let para = {
        successCallBack: successCallBack,
        errorCallBack: errorCallBack,
        nStep: 0,
        i: 0,
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
            console.log('baseHardFunc--hardMoveFileReadBuffer：' + para.nStep)
        }
        switch (para.nStep) {
            case 0:
            case 'arrId_loop':
                para.cache = this.cacheOpenDatabase(dbName);

                if (para.i >= rows.length) {
                    para.i = 0;
                    para.nStep = 'end';
                    dbFlag++;
                    break;
                }

                // 循环获取id数据：
                para.id = rows[para.i][$def.id];
                para.recordId = rows[para.i][$def.recordId];

                // 查找id对应原始记录id位置
                let pos = arrId.indexOf(para.id);
                // 没找到对应的id，或者id对应缓存为false时，跳过：
                if (pos === -1 || !arrIsCache[pos]) {
                    para.i++;
                    para.nStep = 0;
                } else {
                    // 此id需要缓存
                    para.nStep = 'arrField_loop';
                }

                dbFlag++;
                break;
            case 'arrField_loop':  //arrField循环
                if (para.k >= arrField.length) {
                    para.i++;
                    para.k = 0;
                    para.nStep = 'arrId_loop';
                } else {
                    //获取字段
                    para.field = arrField[para.k];
                    // 获取一个字段所有文件
                    para.arrUrl = JSON.parse(rows[para.i][para.field]);
                    if (para.arrUrl) {
                        para.nStep = 'arrUrl_loop';
                    } else {
                        para.k++;
                        para.nStep = 'arrField_loop'
                    }
                }
                dbFlag++;
                break;
            case 'arrUrl_loop':  //arrUrl循环
                if (para.n >= para.arrUrl.length) {
                    rows[para.i][para.field] = JSON.stringify(para.arrUrl);
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
                                para.cache.sql.memAddFileSize(table, para.field, para.recordId, ByteNum - oldByteNum);
                            }
                            // 更新url
                            para.arrUrl[para.n] = destInfo.server + '/' + destInfo.path;
                        }

                        para.n++;
                        para.nStep = 'arrUrl_loop';
                        if (++dbFlag === 2) {
                            that.hardMoveFileReadBuffer(dbName, table, arrId, arrIsCache, arrField, rows, successCallBack, errorCallBack)
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
            case 'end':
                para.successCallBack(para.totalByteNum);
                return
        }
        if (++dbFlag === 1) {
            return
        }
    }
};


