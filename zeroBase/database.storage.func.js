const $public = require(global.dbPath + "/public.js");
const $def = require(global.dbPath + "/mem.def.js");
$mSystem = require(global.dbPath + "/db.sys.js");
const CDatabase = require(global.dbPath + "/database.js");



/*
 *-------------------------------------------------------------------------------//
 * 执行事务命令
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.storageTransCmd = function (dbName, table) {
    this.trans.dbName = dbName;
    this.trans.arrTable[table] = 1;
};


/*
 *-------------------------------------------------------------------------------//
 * 执行事务命令
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.storageTransCmdArray = function (dbName, arrTable, transId, successCallBack, errorCallBack) {
    // 事务为空吗？
    if (transId === null) {
        // 保存到storage
        this.storageSaveMemTableToStorage(dbName, arrTable, successCallBack, errorCallBack)
    } else {
        this.trans.dbName = dbName;
        for (let i = 0; i < arrTable.length; i++) {
            this.trans.arrTable[arrTable[i]] = 1;
        }
        successCallBack();
    }
};


/*
 *-------------------------------------------------------------------------------//
 * 将内存数据保存在storage中
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.storageSaveMemTableToStorage = function (dbName, arrTable, successCallBack, errorCallBack) {
    let isError = false;
    let cache = this.cacheOpenDatabase(dbName);
    // 获取storage句柄
    let storage = $mSystem.getStorage();
    for (let i = 0; i < arrTable.length; i++) {
        if(isError) break;
        let table = arrTable[i];
        // 获取一个表所有数据
        let tableData = cache.sql.arrTable[table];
        // 转为字符串
        let value = JSON.stringify(tableData);
        let keyType = $def.storageKey_db;
        let key = dbName + "_" + table;
        // 将表保存在storage中
        storage.setItem(keyType, key, value, function () {
        }, function (error) {
            isError = true;
            errorCallBack(error)
        })
    }
    if(!isError) successCallBack()
};


/*
 *-------------------------------------------------------------------------------//
 * 将storage数据读到在内存中
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.storageReadStorageTableToMem = function (dbName, arrTable, successCallBack, errorCallBack) {
    let that = this;
    let isError = false;
    let cache = this.cacheOpenDatabase(dbName);
    // 获取storage句柄
    let storage = $mSystem.getStorage();
    for (let i = 0; i < arrTable.length; i++) {
        if(isError) break;
        let table = arrTable[i];
        // 表是否存在？
        if (this.arrReadedTable[table] !== undefined) continue;

        let keyType = $def.storageKey_db;
        let key = dbName + "_" + table;
        // 获取一个表所有数据
        storage.getItem(keyType, key, function (value) {
            // 将表保存在内存中
            if (value) cache.sql.arrTable[table] = JSON.parse(value);
            that.arrReadedTable[table] = 1;
        }, function (error) {
            isError = true;
            errorCallBack(error)
        });
    }
    if(!isError) successCallBack()
};


/*
 *-------------------------------------------------------------------------------//
 * 将转移数据保存在变量缓存区中(读函数专用)
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.saveMemDBToUserData_recordRead = function (cache, table, arrId, arrData, arrField) {
    // 建立表结构
    $public.addFieldDataField(arrData, arrField);
    // 获取记录数:
    let count = arrData[arrField[0]].length;
    // 获取所有字段类型：
    let arrType = cache.sql.memGetAllFieldType(table).arrFieldType;

    // 用null扩充所有记录
    for (let j = 0; j < arrField.length; j++) {
        let field = arrField[j];
        for (let i = count; i < arrId.length; i++) {
            // 保存默认值
            arrData[field][i] = $def.dbDefaultValue;
        }
    }

    // 获取表数据
    let $objField = cache.sql.arrTable[table].arrField;
    let arrRecordNo = [];
    // 获取Id下标
    cache.sql.getRecordNo_from_index_unique(table, $def.id, arrId, arrRecordNo);

    // 将数据写入用户缓冲区：
    for (let i = 0; i < arrRecordNo.length; i++) {
        let recordNo = arrRecordNo[i];
        // 在数据库查找到对应的id吗？
        if (recordNo === null) continue;

        for (let j = 0; j < arrField.length; j++) {
            let type = arrType[arrField[j]];
            // 获取字段值
            let value = $objField[arrField[j]][recordNo];
            value = this.getUserMysqlDatabaseValue(type, value);
            // 保存此值
            arrData[arrField[j]][i] = value;
        }
    }
};


/*
 *-------------------------------------------------------------------------------//
 * 将转移数据保存在变量缓存区中(查询函数专用)
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.saveMemDBToUserData_query = function (cache, table, arrData, arrField, arrRecordNo, start, total) {
    let index;
    // arrData是否有id
    let haveId = arrData[$def.id] !== undefined;
    // 建立表结构
    $public.addFieldDataField(arrData, arrField);
    // 获取记录数:
    let count = arrData[arrField[0]].length;
    // 获取所有字段类型：
    let arrType = cache.sql.memGetAllFieldType(table).arrFieldType;
    // 获取表数据
    let $objField = cache.sql.arrTable[table].arrField;
    let end = start + total;

    // 将数据写入用户缓冲区：
    for (let i = 0; i < arrRecordNo.length; i++) {
        // 过滤
        if (start === null || total === null || (i >= start && i < end)) {
            let recordNo = arrRecordNo[i];
            // data中有id字段吗？
            if (haveId) {
                // 获取id字段值
                let id = $objField[$def.id][recordNo];
                // 在缓冲区中查找此值对应的位置
                index = $public.array_of(arrData[$def.id], id);
                // 找了吗？
                if (index === -1) continue;
            } else {
                index = count + i
            }

            for (let j = 0; j < arrField.length; j++) {
                let type = arrType[arrField[j]];
                // 获取字段值
                let value = $objField[arrField[j]][recordNo];
                value = this.getUserMysqlDatabaseValue(type, value);
                // 保存此值
                arrData[arrField[j]][index] = value;
            }
        }
    }
};


