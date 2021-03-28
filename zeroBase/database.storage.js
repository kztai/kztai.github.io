$mSystem = require(global.dbPath + "/db.sys.js");
const CDatabase = require(global.dbPath + "/database.js");



/*
 *-------------------------------------------------------------------------------//
 * 持久事务初始化
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.storageTransInit = function () {
    // 申请全部事务对象
    this.trans = {};
    // 申请事务队列
    this.trans.arrQueue = [];
    // 当前事务数据id
    this.trans.dbName = null;
    // 当前事务所有表
    this.trans.arrTable = {};
    // 是否有事务在运行
    this.trans.running = false;
    // 已经读的表
    this.arrReadedTable = {};
};


/*
 *-------------------------------------------------------------------------------//
 * 开始打开, 即mysql事务开始
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.storageTransOpen = function (successCallBack, errorCallBack) {
    // 是否还有事务运行
    if (!this.trans.running) {
        this.trans.running = true;
        // 分配事务id
        successCallBack(new Date().getTime())
    } else {
        // 队列溢出？
        if (this.trans.arrQueue.length > 10000) {
            // 队列溢出出错
            let err = {};
            err.code = 99;
            err.message = '队列溢出';
            errorCallBack(err)
        } else {
            // 保存回调函数
            this.trans.arrQueue.push(successCallBack)
        }
    }
};


/*
 *-------------------------------------------------------------------------------//
 * 事务关闭,即mysql事务提交
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.storageTransClose = function (transId, successCallBack, errorCallBack) {
    if(this.trans.dbName === null) {
        successCallBack();
        return;
    }

    let that = this;
    let arrTable = Object.keys(this.trans.arrTable);
    // 将表保存在storage中
    this.storageSaveMemTableToStorage(this.trans.dbName, arrTable, function () {
        that.storageTransCancel(transId, successCallBack, errorCallBack)
    }, errorCallBack);
};



/*
 *-------------------------------------------------------------------------------//
 * 事务取消,即mysql事务回滚
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.storageTransCancel = function (transId, successCallBack, errorCallBack) {
    // 初始化
    this.trans.dbName = null;
    this.trans.arrTable = {};
    // 是否还有事务
    if (this.trans.arrQueue.length !== 0) {
        // 取出下一个等待的事务
        let callBack = this.trans.arrQueue.shift();
        // 分配事务id
        transId = new Date().getTime();
        // 返回事务id
        callBack(transId)
    } else {
        this.trans.running = false;
    }

    successCallBack()
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
CDatabase.prototype.storageMoveRecordNew = function (dbName, arrTable, arrFields, arrIds, transId, successCallBack, errorCallBack) {
    // 执行事务写命令
    this.storageTransCmdArray(dbName, arrTable, transId, successCallBack, errorCallBack);
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
CDatabase.prototype.storageMoveRecordModify = function (dbName, arrTable, arrIds, arrFields, transId, successCallBack, errorCallBack) {
    // 执行事务写命令
    this.storageTransCmdArray(dbName, arrTable, transId, successCallBack, errorCallBack);
};


/*
 *-------------------------------------------------------------------------------//
 * 功能： 转移记录读
 * arrTable：为持久库表
 * isCache：文件内容是否保存
 * 注意：转移读不能对系统表操作
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.storageMoveRecordRead = function (dbName, arrTable, arrOriginalIds, arrFields, hardTrans, successCallBack, errorCallBack) {
    // 将storage读取数据到内存中
    this.storageReadStorageTableToMem(dbName, arrTable, successCallBack, errorCallBack)
};


/*
 *-------------------------------------------------------------------------------//
 * 功能： 直接记录读
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.storageDirectRecordRead = function (dbName, arrTable, arrIds, arrFields, arrDatas, hardTrans, successCallBack, errorCallBack) {
    let that = this;
    let cache = this.cacheOpenDatabase(dbName);
    // 将storage读到内存中
    this.storageReadStorageTableToMem(dbName, arrTable, function () {
        for (let i = 0; i < arrTable.length; i++) {
            // 读内存数据到用户缓冲区
            let arrField = arrFields ? arrFields[i] : null;
            if(!arrField) arrField = cache.sql.memGetAllField(arrTable[i]).result;
            if(!arrDatas[arrTable[i]]) arrDatas[arrTable[i]] = {};
            that.saveMemDBToUserData_recordRead(cache, arrTable[i], arrIds[i], arrDatas[arrTable[i]], arrField)
        }
        successCallBack()
    }, errorCallBack);

};


/*
 *-------------------------------------------------------------------------------//
 * 功能： 直接记录查询
 * arrTable：为持久库表
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.storageDirectRecordQuery = function (dbName, arrTable, arrConditions, arrFields, arrDatas, hardTrans, successCallBack, errorCallBack) {
    let that = this;
    let cache = this.cacheOpenDatabase(dbName);
    // 将storage读到内存中
    this.storageReadStorageTableToMem(dbName, arrTable, function () {
        for (let i = 0; i < arrTable.length; i++) {
            let result = that.getCondRecordNo(arrTable[i], arrConditions[i], cache);
            // 出错了吗？
            if (result.code !== 0) {
                errorCallBack(result);
                return
            }
            let arrRecordNo = result.arrRecordNo;
            // 读内存数据到用户缓冲区
            let arrField = arrFields ? arrFields[i] : null;
            if(!arrField) arrField = cache.sql.memGetAllField(arrTable[i]).result;
            if(!arrDatas[arrTable[i]]) arrDatas[arrTable[i]] = {};
            that.saveMemDBToUserData_query(cache, arrTable[i], arrDatas[arrTable[i]], arrField, arrRecordNo, null, null);
        }
        successCallBack()
    }, errorCallBack);
};


/*
 *-------------------------------------------------------------------------------//
 * 功能： 持久库直接多条件查询
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.storageDirectMultiQuery = function (dbName, arrTable, arrFields, arrCondition, arrStart, arrTotal, arrSorts, arrDatas, arrIsGetSum, successCallBack, errorCallBack) {
    let that = this;
    let cache = this.cacheOpenDatabase(dbName);
    // 将storage读到内存中
    this.storageReadStorageTableToMem(dbName, arrTable, function () {
        for (let i = 0; i < arrTable.length; i++) {
            let arrField = arrFields ? arrFields[i] : null;
            if(!arrField) arrField = cache.sql.memGetAllField(arrTable[i]).result;
            if(!arrDatas[arrTable[i]]) arrDatas[arrTable[i]] = {};
            // 有排序吗？
            if (arrSorts[i] === null) {
                let result = that.getCondRecordNo(arrTable[i], arrCondition[i], cache);
                // 出错了吗？
                if (result.code !== 0) {
                    errorCallBack(result);
                    return
                }
                let arrRecordNo = result.arrRecordNo;
                // 读内存数据到用户缓冲区
                that.saveMemDBToUserData_query(cache, arrTable[i], arrDatas[arrTable[i]], arrField, arrRecordNo, arrStart[i], arrTotal[i]);
            } else {
                // 调用内存多条件查询
                that.cacheMultiQuery(dbName, arrTable[i], arrField, arrCondition[i], arrStart[i], arrTotal[i], arrSorts[i], arrDatas[arrTable[i]])
            }
        }
        successCallBack()
    },errorCallBack);
};


/*
 *-------------------------------------------------------------------------------//
 * 功能： 记录删
 * arrTable：为持久库表
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.storageRecordDelete = function (dbName, arrTable, arrIds, transId, successCallBack, errorCallBack) {
    // 执行事务写命令
    this.storageTransCmdArray(dbName, arrTable, transId, successCallBack, errorCallBack);
};


/*
 *-------------------------------------------------------------------------------//
 * 功能： 条件删
 * arrTable：为持久库表
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.storageCondRecordDelete = function (dbName, arrTable, arrConditions, transId, successCallBack, errorCallBack) {
    // 执行事务写命令
    this.storageTransCmdArray(dbName, arrTable, transId, successCallBack, errorCallBack);
};


/*
 *-------------------------------------------------------------------------------//
 * 功能： 获取字段类型
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.storageGetFieldType = function (dbName, table, field) {
    return this.cacheGetFieldType(dbName, table, field)
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
CDatabase.prototype.storageGetAllField = function (dbName, table, arrField, type) {
    return this.cacheGetAllField(dbName, table, arrField, type)
};


/*
 *-------------------------------------------------------------------------------//
 * 获取记录号
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.storageGetRecordNo = function (dbName, table, count, successCallBack, errorCallBack) {
    let that = this;
    this.storageReadStorageTableToMem(dbName, [table], function () {
        successCallBack(that.cacheGetRecordNo(dbName, table, count));
    }, errorCallBack);
};





