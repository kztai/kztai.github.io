$mSystem = require(global.dbPath + "/db.sys.js");
var $public = require(global.dbPath + "/public.js");

var Raft = require(global.path_zeroKeeper + "/Raft/raft/index.js");
var $zkDef = require(global.path_zeroKeeper + "/zk.def.js");


// 构造函数：
function ZKClient() {
    // 全局变量：
    this.$zkDef = $zkDef;
    this.$db = $mSystem.getDatabase();
    this.me = {
        confirmIndex: 0,
        commitCmdObj: {},   // 命令集合
        confirmTableObj: {},  // 日志已消费情况对应表
        raftCallbackObj: {}  // 存储需要向raft发送的回调函数
    };
    this.timer = {};
    this.$raft = null;
    this.dbName = $zkDef.databaseId;
    this.$p = {};
    this.cache = this.$db.cacheOpenDatabase(this.dbName);
    this.nodeData = {};
    this.historyData = {};
}


ZKClient.prototype.init = function (successCallBack, errorCallBack) {
    let that = this;
    let dbFlag;
    let dbData;
    let tableName;
    let field;
    let arrField;
    let condition;
    let arrIds;
    let para = {
        successCallBack: successCallBack,
        errorCallBack: errorCallBack,
        nStep: 0,
        i: 0
    };

    if (successCallBack !== null) {
        errorCallBack = para;
        successCallBack = null
    }
    para = errorCallBack;

    while (1) {
        dbFlag = 0;
        if (this.$zkDef.switch) {
            console.log(global.localIp + '：zk--init：' + para.nStep)
        }
        switch (para.nStep) {
            case 0:
                tableName = [$zkDef.tableName_zkLeaderInfo];
                arrField = null;
                arrIds = [
                    [1],
                ];
                dbData = {
                    [$zkDef.tableName_zkLeaderInfo]: {
                        [$zkDef.zkLeaderInfo_validTerm]: [0],
                        [$zkDef.zkLeaderInfo_restart]: [0],
                        [$zkDef.del]: [0],
                    },
                };
                para.hardTrans = null;

                this.$db.hardDirectRecordNew(this.dbName, tableName, arrIds, arrField, dbData, para.hardTrans, function () {
                    para.nStep = 'get_mysql_data';
                    if (++dbFlag === 2) {
                        that.init(successCallBack, errorCallBack)
                    }
                }, function (error) {
                    // 是id重复错误，则继续执行：
                    if (error.message[0].code === 1062) {
                        para.nStep = 'get_mysql_data';
                        if (++dbFlag === 2) {
                            that.init(successCallBack, errorCallBack)
                        }
                    } else {
                        para.errorCallBack(error);
                    }
                });
                break;
            case 'get_mysql_data':
                tableName = [$zkDef.tableName_zkNode, $zkDef.tableName_zkHistory, $zkDef.tableName_zkLeaderInfo];
                arrField = null;
                condition = [null, null, null];
                dbData = {};
                let start = [0, 0, 0];
                let total = [null, null, null];
                let arrSort = [['id,asc'], ['id,asc'], ['id,asc']];
                let isGetSum = [false, false, false];

                this.$db.hardDirectMultiQuery(this.dbName, tableName, arrField, condition, start, total, arrSort, dbData, isGetSum, function () {
                    para.dbData = dbData;
                    para.nStep = 'write_cache_data';
                    if (++dbFlag === 2) {
                        that.init(successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'write_cache_data':
                tableName = [$zkDef.tableName_zkNode, $zkDef.tableName_zkHistory, $zkDef.tableName_zkLeaderInfo];
                arrField = null;
                para.arrXYs = null;
                arrIds = [];
                Object.keys(para.dbData).forEach(function (item) {
                    arrIds.push(para.dbData[item].id);
                });

                para.cacheResult = this.$db.cacheObjectNew(this.dbName, tableName, arrIds, para.arrXYs, arrField, para.dbData);
                if (para.cacheResult.code !== 0) {
                    para.errorCallBack(para.cacheResult)
                } else {
                    para.nStep = 'get_table_data';
                    dbFlag++;
                }
                break;
            case 'get_table_data':  // 初始化节点表，历史表数据
                let tableData; //表指针
                let arrFieldType; //表字段类型
                let arrFilterField; //过滤字段
                let result;
                let arrObjField;

                // 节点表：
                tableData = this.cache.sql.getTableData($zkDef.tableName_zkNode);
                result = this.cache.sql.memGetAllFieldType($zkDef.tableName_zkNode);
                arrFieldType = result.arrFieldType;
                arrObjField = result.arrObjField;
                arrField = this.cache.sql.memGetAllField($zkDef.tableName_zkNode).result;
                arrFilterField = {};
                for (let i = 0; i < arrField.length; i++) {
                    if (arrField[i] === $zkDef.pt_id || arrField[i] === $zkDef.zkNode_dataWatcher || arrField[i] === $zkDef.zkNode_nodeWatcher) continue;
                    arrFilterField[arrField[i]] = 1;
                }
                this.nodeData.tableData = tableData;
                this.nodeData.arrFieldType = arrFieldType;
                this.nodeData.arrObjField = arrObjField;
                this.nodeData.arrField = arrField;
                this.nodeData.arrFilterField = arrFilterField;

                // 历史表：
                tableData = this.cache.sql.getTableData($zkDef.tableName_zkHistory);
                result = this.cache.sql.memGetAllFieldType($zkDef.tableName_zkHistory);
                arrFieldType = result.arrFieldType;
                arrObjField = result.arrObjField;
                arrField = this.cache.sql.memGetAllField($zkDef.tableName_zkHistory).result;
                arrFilterField = {};
                for (let i = 0; i < arrField.length; i++) {
                    arrFilterField[arrField[i]] = 1;
                }
                this.historyData.tableData = tableData;
                this.historyData.arrFieldType = arrFieldType;
                this.historyData.arrObjField = arrObjField;
                this.historyData.arrField = arrField;
                this.historyData.arrFilterField = arrFilterField;

                para.nStep = 'init_raft';
                dbFlag++;
                break;
            case 'init_raft':
                this.zk_sync_zk_node_to_log(function (result) {
                    // let arrIp = that.getServerIP();
                    let arrIp = that.getServerIP(['192.168.1.118:57188', '192.168.1.118:57189', '192.168.1.118:57190']);
                    let arrNode = [];
                    let nodeId = null;  // 自身nodeId通过本地IP来获取
                    arrIp.forEach(function (item, index) {
                        arrNode.push('node-' + (index + 1));
                        if (global.localIp === item) {
                            nodeId = 'node-' + (index + 1);
                        }
                    });

                    let options = {
                        // clearEntryTimes: 11,   // 清除指针定时器
                        arrIp: arrIp,             // 各节点的IP（含自身ip）
                        arrNode: arrNode,         // 各节点nodeId
                        nodeId: nodeId,           // 自身nodeId
                        bootjumpTimerTimes: $zkDef.bootjumpTimerTimes,     // 心跳时间间隔 ms
                        selectionTimeMin: $zkDef.selectionTimeMin,         // 选举超时时间间隔 ms
                        zk_consume_entry: that.zk_consume_entry,                  // zk消费指针方法
                        zk_sync_zk_node_to_log: that.zk_sync_zk_node_to_log,      // 重启获取zk持久化数据的方法
                        zk_enduring_new_leader_info: that.zk_db_save_leaderInfo,   // 新leader产生后持久化数据
                        zk_clear_consume_by_minIndex: that.zk_clear_consume_index   // 按清除指针清除历史记录
                    };

                    // 开关控制是否打印raft日志信息：
                    if (!that.$zkDef.switch) {
                        options.arrAllowLogType = [];  // 允许打印的错误类型
                        options.arrAllowLogLevel = [];
                    }

                    // 是否重启 初次启动时为false，其他情况下可以不配做:
                    if (result.restart === $zkDef.zkLeaderInfo_restart_no) {
                        options.isRestart = false;
                        para.nStep = 'restart_modify';
                    } else {
                        options.isRestart = true;
                        para.nStep = 'end';
                    }

                    para.confirmIndex = result.confirmIndex;
                    para.clearIndex = result.clearIndex;
                    that.me.confirmIndex = result.confirmIndex;
                    that.confirmTableFirst = that.me.confirmIndex;

                    that.$raft = new Raft(options);
                    var instanceName = "$raft"; //实例化名称
                    var comm = $mSystem.getComm();
                    comm.registInstance(instanceName, that.$raft); //注册实例

                    that.$raft.raft_init(function () {
                        that.$raft.confirmIndex = para.confirmIndex;
                        that.$raft.clearIndex = para.clearIndex;
                    }, para.errorCallBack);

                    if (++dbFlag === 2) {
                        that.init(successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'restart_modify':   // 将raft是否初始化标志置为已初始化
                tableName = [$zkDef.tableName_zkLeaderInfo];
                arrField = [[$zkDef.zkLeaderInfo_restart]];
                arrIds = [[1]];
                dbData = {
                    [$zkDef.tableName_zkLeaderInfo]: {
                        [$zkDef.zkLeaderInfo_restart]: [$zkDef.zkLeaderInfo_restart_yes]
                    }
                };

                this.$db.hardDirectRecordModify(this.dbName, tableName, arrIds, arrField, dbData, para.hardTrans, function (result) {
                    para.nStep = 'end';
                    if (++dbFlag === 2) {
                        that.init(successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'end':
                // 安装定时器，定时清除历史记录表中消费状态为1的记录：
                setInterval(function(){
                    that.zk_clear_consume_timer()
                },1000*60*10);
                para.successCallBack();
                return
        }
        if (++dbFlag === 1) {
            return
        }
    }
};


// 提交命令主体函数：超过3次未响应则返回失败（命令只有1条）
/*cmd = {
    arrEntry: [{
        type: 1,
        path: '/test',
        cmdIndex: 111,
        data: 'kzt',
        attrib: 1,
        version: null
    },
    {
        type: 2,
        path: '/aa',
        cmdIndex: 2,
        data: 'kztaa',
        attrib: 1,
        version: 0
    }],
    successCallBack: function() {},
    errorCallBack: function() {},
}*/
ZKClient.prototype.log_zk_commit_cmd = function (cmd, successCallBack, errorCallBack) {
    let that = this;
    let req = {};
    let commitId = new Date().getTime();  // 命令包唯一标识符
    let count = 0;

    // 判断该命令是否已经在执行：
    for (let i = 0; i < cmd.arrEntry.length; i++) {
        if (cmdCallbackExist(cmd.arrEntry[i].cmdId)) {
            let error = {};
            error.code = '03_33_0004';
            error.message = '该命令正在执行！';
            cmd.errorCallBack(error);
            return;
        }
    }

    req.arrEntry = cmd.arrEntry;
    req.arrSeq = cmd.arrSeq;
    req.result = cmd.result;
    req.successCallBack = cmd.successCallBack;
    req.errorCallBack = cmd.errorCallBack;

    that.me.commitCmdObj[commitId] = req;  // 将该命令内容保存到全局变量me中，便于后续执行回调

    that.timer[commitId] = setInterval(function () {
        count++;
        if (count >= 3) {
            if (that.timer[commitId]) {
                clearInterval(that.timer[commitId]);
                delete that.timer[commitId];
            }
            let error = {};
            error.code = '03_33_0001';
            error.message = '超时未响应';
            error.target = global.localIp;
            if (that.me.commitCmdObj[commitId]) {
                that.me.commitCmdObj[commitId].errorCallBack(error);
                delete that.me.commitCmdObj[commitId];
            }
            return
        }
        that.$raft.log_node_add_new_entry(req, function (isSelfCmd) {
            if (that.timer[commitId]) {
                clearInterval(that.timer[commitId]);
                delete that.timer[commitId];
            }
            // 判断isSelfCmd，为false表示传入的cmdIndex等于null同时日志不是自身建立的，则直接回调给应用层：
            if (isSelfCmd === false) delete that.me.commitCmdObj[commitId];
            successCallBack(isSelfCmd)
        }, function (error) {
            if (that.timer[commitId]) {
                clearInterval(that.timer[commitId]);
                delete that.timer[commitId];
            }
            if (that.me.commitCmdObj[commitId]) {
                that.me.commitCmdObj[commitId].errorCallBack(error);
                delete that.me.commitCmdObj[commitId];
            }
        });
    }, $zkDef.overtime);

    that.$raft.log_node_add_new_entry(req, function (isSelfCmd) {
        // 关闭定时器：
        if (that.timer[commitId]) {
            clearInterval(that.timer[commitId]);
            delete that.timer[commitId];
        }
        // 判断isSelfCmd，为false表示传入的cmdIndex等于null同时日志不是自身建立的，则直接回调给应用层：
        if (isSelfCmd === false) delete that.me.commitCmdObj[commitId];
        successCallBack(isSelfCmd)
    }, function (error) {
        if (that.timer[commitId]) {
            clearInterval(that.timer[commitId]);
            delete that.timer[commitId];
        }
        if (that.me.commitCmdObj[commitId]) {
            that.me.commitCmdObj[commitId].errorCallBack(error);
            delete that.me.commitCmdObj[commitId];
        }
    });
};


// 消费函数：raft层同步完成后，会调用该函数，进行将命令写入数据库操作：（可能会有多个命令同时消费）
// req: {confirmIndex: 2, clearIndex: 1}  暂定这两个值
ZKClient.prototype.zk_consume_entry = function (req, successCallBack, errorCallBack) {
    let dbFlag;
    let dbData;
    let tableName;
    let condition;
    let para = {
        successCallBack: successCallBack,
        errorCallBack: errorCallBack,
        nStep: 0,
        i: 0,
        arrEntry: [],
    };

    if (successCallBack !== null) {
        errorCallBack = para;
        successCallBack = null
    }
    para = errorCallBack;

    while (1) {
        dbFlag = 0;
        if ($zkDef.switch) {
            console.log(global.localIp + '：zk--zk_consume_entry：' + para.nStep)
        }
        switch (para.nStep) {
            case 0:
                if (req.confirmIndex > ZKClient.$this.me.confirmIndex) {
                    para.nStep = 'getConfirmEntry';
                } else {
                    para.nStep = 'end';
                }
                dbFlag++;
                break;
            case 'getConfirmEntry':  // 获取日志信息(多条)
                ZKClient.$this.getConfirmEntry(ZKClient.$this.me.confirmIndex, req.confirmIndex, para.arrEntry);

                para.nStep = 'saveNode';
                dbFlag++;
                break;
            case 'saveNode':  // 保存节点数据以及轨迹到数据库
                ZKClient.$this.zk_save_zk_node(req, para.arrEntry, function (result) {
                    para.nStep = 'end';
                    if (++dbFlag === 2) {
                        ZKClient.$this.zk_consume_entry(req, successCallBack, errorCallBack)
                    }
                }, function (error) {
                    // 失败回调中的错误信息，需要回给应用层：
                    error.cmdId.forEach(function (item) {
                        let existInfo = cmdCallbackExist(item);
                        if (existInfo && ZKClient.$this.me.commitCmdObj[existInfo.commitId]) {
                            ZKClient.$this.me.commitCmdObj[existInfo.commitId].errorCallBack(error.error);
                            delete ZKClient.$this.me.commitCmdObj[existInfo.commitId];
                        }
                    });

                    para.errorCallBack(error.error);
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


ZKClient.prototype.create = function (pathArr, dataArr, attribArr, successCallBack, errorCallBack) {
    let that = this;
    let cmdIndex = null;
    if (this.$zkDef.switch) console.log(global.localIp + '：create start');

    // 判断 pathArr 的合法性：
    for (let i = 0; i < pathArr.length; i++) {
        // 当不合法时，返回错误信息，否则返回false：
        let result = that.validate(pathArr[i]);
        if (result) {
            errorCallBack({code: '03_33_0009', errIndex: i, msg: result});
            return
        }
    }

    // 组织arrEntry数据：
    let cmd = that.getPublicPara($zkDef.cmd_create, pathArr, cmdIndex, dataArr, attribArr, null, successCallBack, errorCallBack);

    // 当 cmd.arrEntry 有值，则向raft提交，否则直接返回应用层：
    if (cmd) {
        if (cmd.arrEntry.length > 0) {
            that.log_zk_commit_cmd(cmd, function () {
            }, errorCallBack);
        } else {
            // console.warn('回给应用层成功：' + JSON.stringify(cmd.result));
            successCallBack(cmd.result);
        }
    }
};


ZKClient.prototype.setData = function (pathArr, cmdIndex, dataArr, versionArr, successCallBack, errorCallBack) {
    let that = this;
    if (this.$zkDef.switch) console.log(global.localIp + '：setData start');

    // 判断 pathArr 的合法性：
    for (let i = 0; i < pathArr.length; i++) {
        // 当不合法时，返回错误信息，否则返回false：
        let result = that.validate(pathArr[i]);
        if (result) {
            errorCallBack({code: '03_33_0009', errIndex: i, msg: result});
            return
        }
    }

    // 用户传入的cmdIndex是对象，先转成字符串再操作：
    cmdIndex = this.cmdIndexToString(cmdIndex);

    // 组织arrEntry数据：
    let cmd = that.getPublicPara($zkDef.cmd_setData, pathArr, cmdIndex, dataArr, null, versionArr, successCallBack, errorCallBack);

    // 当 cmd.arrEntry 有值，则向raft提交，否则直接返回应用层：
    if (cmd) {
        if (cmd.arrEntry.length > 0) {
            that.log_zk_commit_cmd(cmd, function (isSelfCmd) {
                if (isSelfCmd === false) {
                    // 错误类型： 0-没错误，1-版本出错, 2-表示节点不存在, 3-该命令已存在且不是本服务器创建
                    let error = 3;
                    let result = {};
                    result.arrId = [];
                    result.arrError = [];

                    for (let i = 0; i < pathArr.length; i++) {
                        result.arrId.push(null);
                        result.arrError.push(error);
                    }

                    successCallBack(result)
                }
            }, errorCallBack);
        } else {
            // console.warn('回给应用层成功：' + JSON.stringify(cmd.result));
            successCallBack(cmd.result);
        }
    }
};


ZKClient.prototype.getPublicPara = function (type, pathArr, cmdIndex, dataArr, attribArr, versionArr, successCallBack, errorCallBack) {
    let that = this;
    let dbFlag;
    let para = {
        successCallBack: successCallBack,
        errorCallBack: errorCallBack,
        nStep: 0,
        i: 0,
        cmd: {
            arrSeq: {},
            arrEntry: [],
            result: {
                arrId: [],
                arrError: []
            }
        }
    };

    if (successCallBack !== null) {
        errorCallBack = para;
        successCallBack = null
    }
    para = errorCallBack;

    while (1) {
        dbFlag = 0;
        if (this.$zkDef.switch) {
            console.log(global.localIp + '：zk--getPublicPara：' + para.nStep)
        }
        switch (para.nStep) {
            case 0:
                // 通过versionArr判断是执行新建操作还是设置操作：
                versionArr ? para.nStep = 'checkPath' : para.nStep = 'create_checkParentPath';
                dbFlag++;
                break;
            case 'create_checkParentPath': //父节点是否存在
                para.parentPathExist = []; // 用于标志该节点父节点是否存在：
                para.parentPathArr = [];
                // 获取父节点：
                pathArr.forEach(function (item) {
                    let parentPath = item.split('/').slice(0, -1).join('/');
                    parentPath === '' ? para.parentPathArr.push('/') : para.parentPathArr.push(parentPath);
                });

                para.$field = $zkDef.zkNode_path;
                para.$arrValue = para.parentPathArr;
                para.$arrRecordNo = [];
                // 获取记录号：
                this.cache.sql.getRecordNo_from_index_unique($zkDef.tableName_zkNode, para.$field, para.$arrValue, para.$arrRecordNo);
                // 标记父节点是否存在:
                for (let i = 0; i < para.$arrRecordNo.length; i++) {
                    para.$arrRecordNo[i] === null && para.parentPathArr[i] !== '/' ? para.parentPathExist[i] = false : para.parentPathExist[i] = true;
                }

                para.nStep = 'checkPath';
                dbFlag++;
                break;
            case 'checkPath':
                para.pathExist = [];     // 用于标志该节点是否已存在：
                para.verData = [];
                para.$field = $zkDef.zkNode_path;
                para.$arrValue = pathArr;
                para.$arrRecordNo = [];
                // 获取记录号：
                this.cache.sql.getRecordNo_from_index_unique($zkDef.tableName_zkNode, para.$field, para.$arrValue, para.$arrRecordNo);
                // 标记该节点是否存在:
                for (let i = 0; i < para.$arrRecordNo.length; i++) {
                    if (para.$arrRecordNo[i] === null) {
                        para.pathExist[i] = false;
                        para.verData[i] = null;
                    } else {
                        para.pathExist[i] = true;
                        para.verData[i] = this.nodeData.tableData[$zkDef.zkHistory_version][para.$arrRecordNo[i]];
                    }
                }

                // 通过versionArr判断是执行新建操作还是设置操作：
                versionArr ? para.nStep = 'getHistoryId' : para.nStep = 'getEntryData';
                dbFlag++;
                break;
            case 'getHistoryId':
                para.cmdIdObj = {};
                if (cmdIndex !== null) {
                    para.$field = $zkDef.zkHistory_cmdIndex;
                    para.$arrValue = [cmdIndex];
                    para.$arrRecordNo = [];
                    // 获取记录号：
                    this.cache.sql.getRecordNo_from_index($zkDef.tableName_zkHistory, para.$field, para.$arrValue, para.$arrRecordNo);
                    for (let i = 0; i < para.$arrRecordNo.length; i++) {
                        if (para.$arrRecordNo[i] !== null) {
                            let id = this.historyData.tableData[$zkDef.id][para.$arrRecordNo[i]];
                            let type = this.historyData.tableData[$zkDef.zkHistory_type][para.$arrRecordNo[i]];
                            let cmdIndex = this.historyData.tableData[$zkDef.zkHistory_cmdIndex][para.$arrRecordNo[i]];
                            let path = this.historyData.tableData[$zkDef.zkHistory_path][para.$arrRecordNo[i]];
                            let version = this.historyData.tableData[$zkDef.zkHistory_version][para.$arrRecordNo[i]];
                            para.cmdIdObj[type + cmdIndex + path + version] = id;
                        }
                    }
                }
                para.nStep = 'getEntryData';
                dbFlag++;
                break;
            case 'getEntryData':
                pathArr.forEach(function (item, index) {
                    let entry = {};
                    entry.type = type;
                    entry.path = item;
                    entry.cmdIndex = cmdIndex;
                    entry.data = dataArr[index];
                    if (type === $zkDef.cmd_create) {
                        entry.attrib = attribArr[index];
                        entry.version = 0;
                    } else {
                        entry.attrib = $zkDef.zkNode_attrib_PERSISTENT;
                        entry.version = versionArr[index];
                    }
                    entry.cmdId = getCmdId(entry);


                    if (type === $zkDef.cmd_create) {  // create类型：先判断父节点，再判断节点，最后判断命令是否存在：
                        if (para.parentPathExist[index]) {
                            // 再判断节点是否已存在：
                            if (para.pathExist[index]) {
                                // 节点已被创建，返回出错信息：
                                para.cmd.result.arrId[index] = null;
                                // 错误类型： 0-没错误，1-节点已经存在, 2-父节点不存在
                                para.cmd.result.arrError[index] = 1;
                            } else {
                                // 父节点存在，节点未被创建过，命令也未被执行过，符合条件：
                                para.cmd.arrEntry.push(entry);
                                para.cmd.arrSeq[entry.cmdId] = index;  // 保存该命令对应在命令包中的索引，用于消费后可以回来回调id
                            }
                        } else {
                            // 父节点不存在，返回出错信息：
                            para.cmd.result.arrId[index] = null;
                            // 错误类型： 0-没错误，1-节点已经存在, 2-父节点不存在
                            para.cmd.result.arrError[index] = 2;
                        }
                    } else {
                        // setData类型：先判断节点，再判断版本号是否相同，最后判断命令是否存在：
                        if (para.pathExist[index]) {
                            // 再判断该命令是否已被执行过：
                            if (para.cmdIdObj[entry.cmdId]) {
                                // 命令已被执行过，直接返回该命令id：
                                para.cmd.result.arrId[index] = para.cmdIdObj[entry.cmdId];
                                // 错误类型： 0-没错误，1-版本出错, 2-表示节点不存在, 3-该日志已存在且不是本服务器创建
                                para.cmd.result.arrError[index] = 0;
                            } else {
                                // 判断版本号是否相同：
                                if (versionArr[index] !== para.verData[index]) {
                                    para.cmd.result.arrId[index] = null;
                                    // 错误类型： 0-没错误，1-版本出错, 2-表示节点不存在, 3-该日志已存在且不是本服务器创建
                                    para.cmd.result.arrError[index] = 1;
                                } else {
                                    // 节点存在，命令也未被执行过，版本号相同，符合条件：
                                    para.cmd.arrEntry.push(entry);
                                    para.cmd.arrSeq[entry.cmdId] = index;  // 保存该命令对应在命令包中的索引，用于消费后可以回来回调id
                                }
                            }
                        } else {
                            // 节点不存在，返回出错信息：
                            para.cmd.result.arrId[index] = null;
                            // 错误类型： 0-没错误，1-版本出错, 2-表示节点不存在, 3-该日志已存在且不是本服务器创建
                            para.cmd.result.arrError[index] = 2;
                        }
                    }
                });

                para.nStep = 'end';
                dbFlag++;
                break;
            case 'end':
                if (para.cmd.arrEntry.length > 0) {
                    para.cmd.successCallBack = para.successCallBack;
                    para.cmd.errorCallBack = para.errorCallBack;
                }
                return para.cmd;
        }
        if (++dbFlag === 1) {
            return
        }
    }
};


// 当前版本暂时不实现通过cmdIndex查找历史记录里的数据：
ZKClient.prototype.getData = function (pathArr, watchCallbackArr, successCallBack, errorCallBack) {
    if (this.$zkDef.switch) {
        console.log(global.localIp + '：zk--getData：start')
    }
    let resultArr = [];
    let $field = $zkDef.zkNode_path;
    let $arrValue = pathArr;
    let $arrRecordNo = [];
    // 获取记录号：
    this.cache.sql.getRecordNo_from_index_unique($zkDef.tableName_zkNode, $field, $arrValue, $arrRecordNo);

    for (let i = 0; i < $arrRecordNo.length; i++) {
        let result = {}; // 返回data+version
        if ($arrRecordNo[i] === null) {
            result.version = null;
            result.data = null;
        } else {
            result.version = this.nodeData.tableData[$zkDef.zkNode_version][$arrRecordNo[i]];
            result.data = this.nodeData.tableData[$zkDef.zkNode_data][$arrRecordNo[i]];
            // 判断是否存在watchCallback需要回填：
            if (watchCallbackArr[i]) this.nodeData.tableData[$zkDef.zkNode_dataWatcher][$arrRecordNo[i]] = watchCallbackArr[i];
        }
        resultArr.push(result)
    }
    successCallBack(resultArr);

    if (this.$zkDef.switch) {
        console.log(global.localIp + '：zk--getData：end')
    }
};


ZKClient.prototype.getChildren = function (pathArr, watchCallbackArr, successCallBack, errorCallBack) {
    let that = this;
    let dbFlag;
    let dbData;
    let tableName;
    let arrField;
    let condition;
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
        if (this.$zkDef.switch) {
            console.log(global.localIp + '：zk--getChildren：' + para.nStep)
        }
        switch (para.nStep) {
            case 0:
                para.arrNodeId = [];
                para.resultArr = [];
                para.$field = $zkDef.zkNode_path;
                para.$arrValue = pathArr;
                para.$arrRecordNo = [];
                // 获取记录号：
                this.cache.sql.getRecordNo_from_index_unique($zkDef.tableName_zkNode, para.$field, para.$arrValue, para.$arrRecordNo);

                for (let i = 0; i < para.$arrRecordNo.length; i++) {
                    let result = {}; // 返回data+version
                    if (para.$arrRecordNo[i] === null) {
                        para.arrNodeId.push(null);
                        result.version = null;
                        result.children = null;
                    } else {
                        para.arrNodeId.push(this.nodeData.tableData[$zkDef.id][para.$arrRecordNo[i]]);
                        result.version = this.nodeData.tableData[$zkDef.zkNode_version][para.$arrRecordNo[i]];
                        // 判断是否存在watchCallback需要回填：
                        if (watchCallbackArr[i]) this.nodeData.tableData[$zkDef.zkNode_nodeWatcher][para.$arrRecordNo[i]] = watchCallbackArr[i];
                    }
                    para.resultArr.push(result)
                }

                para.nStep = 'getChildren';
                dbFlag++;
                break;
            case 'getChildren':
                if (para.i >= para.arrNodeId.length) {
                    para.i = 0;
                    para.nStep = 'end';
                    dbFlag++;
                    break;
                }

                if (para.arrNodeId[para.i] === null) {
                    para.i++;
                    para.nStep = 'getChildren';
                    dbFlag++;
                    break
                }

                tableName = $zkDef.tableName_zkNode;
                dbData = {};
                arrField = [$zkDef.id, $zkDef.zkNode_path];
                condition = $zkDef.zkNode_parentNodeId + '=' + para.arrNodeId[para.i];

                para.cacheResult = this.$db.cacheRecordQuery(this.dbName, tableName, condition, arrField, dbData);
                if (para.cacheResult.code !== 0) {
                    para.errorCallBack(para.cacheResult)
                } else {
                    para.resultArr[para.i].children = dbData[$zkDef.zkNode_path];
                    para.i++;
                    para.nStep = 'getChildren';
                    dbFlag++;
                }
                break;
            case 'end':
                para.successCallBack(para.resultArr);
                return
        }
        if (++dbFlag === 1) {
            return
        }
    }
};


/*
* 获取未消费的历史记录
* */
ZKClient.prototype.getHistory = function (path, watchCallback, successCallBack, errorCallBack) {
    if (this.$zkDef.switch) {
        console.log(global.localIp + '：zk--getHistory：start')
    }

    let that = this;
    let $field = $zkDef.zkNode_path;
    let $arrValue = [path];
    let $arrRecordNo = [];
    // 获取记录号：
    this.cache.sql.getRecordNo_from_index_unique($zkDef.tableName_zkNode, $field, $arrValue, $arrRecordNo);

    let result = {};
    if ($arrRecordNo[0] === null) {
        result.version = null;
        result.data = null;
        result.arrData = null;
        result.arrIndex = null;
    } else {
        result.version = this.nodeData.tableData[$zkDef.zkNode_version][$arrRecordNo[0]];
        result.data = this.nodeData.tableData[$zkDef.zkNode_data][$arrRecordNo[0]];
        result.arrData = [];
        result.arrIndex = [];

        this.historyData.tableData[$zkDef.zkHistory_path].forEach(function (item, index) {
            if (item === path) {
                result.arrData.push(that.historyData.tableData[$zkDef.zkHistory_data][index]);
                result.arrIndex.push(that.historyData.tableData[$zkDef.zkHistory_cmdIndex][index]);
            }
        });

        // 判断是否存在watchCallback需要回填：
        if (watchCallback) this.nodeData.tableData[$zkDef.zkNode_dataWatcher][$arrRecordNo[0]] = watchCallback;
    }

    successCallBack(result);

    if (this.$zkDef.switch) {
        console.log(global.localIp + '：zk--getHistory：end')
    }
};


// 获取 that.me.confirmIndex 与 req.confirmIndex 之间的日志信息（会有多个）:
ZKClient.prototype.getConfirmEntry = function (startIndex, endIndex, arrEntry) {
    // 通过日志索引，获取日志信息：
    for (let i = startIndex; i < endIndex; i++) {
        let logObj = JSON.parse(JSON.stringify(this.$raft.arrLog[i + 1]));
        logObj['index'] = i + 1;
        arrEntry.push(logObj);
    }
};


// 保存zk节点：先将要保存的数据保存起来，然后一起保存到数据库
// req = {confirmIndex: 1, clearIndex: 2}
// arrEntry  日志信息集（多个日志）
ZKClient.prototype.zk_save_zk_node = function (req, arrEntry, successCallBack, errorCallBack) {
    let that = this;
    let startIndex = that.me.confirmIndex;
    let arrCreateRecord = [];
    let arrSetRecord = [];

    // 将要返回给raft的回调函数，以及需求确定指针保存下来：
    that.me.raftCallbackObj[startIndex] = {};
    that.me.raftCallbackObj[startIndex].successCall = successCallBack;
    that.me.raftCallbackObj[startIndex].lastConfirmIndex = req.confirmIndex;

    for (let i = 0; i < arrEntry.length; i++) {
        if (arrEntry[i].type === $zkDef.cmd_setData) {
            let setRecord = {};
            setRecord.version = arrEntry[i].version;
            setRecord.clearIndex = req.clearIndex;
            setRecord.type = arrEntry[i].type;
            setRecord.path = arrEntry[i].path;
            setRecord.data = arrEntry[i].data;
            setRecord.cmdIndex = arrEntry[i].cmdIndex;
            setRecord.attrib = arrEntry[i].attrib;
            setRecord.index = arrEntry[i].index;
            setRecord.term = arrEntry[i].term;
            arrSetRecord.push(setRecord);

        } else {  // 空日志按新增节点处理：
            let createRecord = {};
            createRecord.version = 0;
            createRecord.clearIndex = req.clearIndex;
            createRecord.type = arrEntry[i].type;
            createRecord.path = arrEntry[i].path;
            createRecord.data = arrEntry[i].data;
            createRecord.cmdIndex = arrEntry[i].cmdIndex;
            createRecord.attrib = arrEntry[i].attrib;
            createRecord.index = arrEntry[i].index;
            createRecord.term = arrEntry[i].term;
            arrCreateRecord.push(createRecord);
        }
    }

    // 初始化日志确定表：
    that.me.confirmTableObj[startIndex] = 0;
    // 更新本地的确定指针，防止下次重复消费：
    that.me.confirmIndex = parseInt(req.confirmIndex);

    this.zk_db_save_mem(startIndex, req.clearIndex, arrCreateRecord, arrSetRecord, function () {

    }, errorCallBack);
};


// 写内存数据库，组织写mysql的参数：
ZKClient.prototype.zk_db_save_mem = function (startConfirmIndex, clearIndex, arrCreateRecord, arrSetRecord, successCallBack, errorCallBack) {
    let that = this;
    let dbFlag;
    let dbData;
    let tableName;
    let condition;
    let field;
    let arrId;
    let $arrField;
    let $arrValue;
    let $arrTableData_new;
    let $arrTableData_modify;
    let $arrRecord;
    let para = {
        successCallBack: successCallBack,
        errorCallBack: errorCallBack,
        nStep: 0,
        i: 0,
        errorArr: [],
    };

    if (successCallBack !== null) {
        errorCallBack = para;
        successCallBack = null
    }
    para = errorCallBack;

    while (1) {
        dbFlag = 0;
        if (this.$zkDef.switch) {
            console.log(global.localIp + '：zk--zk_db_save_mem：' + para.nStep)
        }
        switch (para.nStep) {
            case 0:
                // 判断是否存在新建节点数据，不存在则直接执行设置操作：
                if (arrCreateRecord.length > 0) {
                    para.nStep = 'getParentNodeId';
                } else {
                    para.nStep = 'nodeModify';
                }
                dbFlag++;
                break;
            case 'getParentNodeId': // 获取父节点id：
                let arrParentPath = [];  // 获取父节点：
                arrCreateRecord.forEach(function (item) {
                    let parentPath = item.path.split('/').slice(0, -1).join('/');
                    parentPath === '' ? arrParentPath.push('/') : arrParentPath.push(parentPath);
                });

                para.$field = $zkDef.zkNode_path;
                para.$arrValue = arrParentPath;
                para.$arrRecordNo = [];
                // 获取记录号：
                this.cache.sql.getRecordNo_from_index_unique($zkDef.tableName_zkNode, para.$field, para.$arrValue, para.$arrRecordNo);
                // 将父节点ID回填到arrCreateRecord中：
                for (let i = 0; i < para.$arrRecordNo.length; i++) {
                    if (para.$arrRecordNo[i] === null) {
                        arrCreateRecord[i].parentNodeId = null;
                    } else {
                        arrCreateRecord[i].parentNodeId = this.nodeData.tableData[$zkDef.id][para.$arrRecordNo[i]];
                    }
                }
                para.nStep = 'nodeNew';
                dbFlag++;
                break;
            case 'nodeNew':
                // 下一步提前，确保新增出错后，下一步可以被重置：
                if (arrSetRecord.length > 0) {
                    para.nStep = 'nodeModify';
                } else {
                    para.nStep = 'historyNew';
                }

                para.delNodeIdArr = [];
                dbData = {};
                that.getNodeDBData(arrCreateRecord, dbData);

                this.$p.type = 2;
                this.$p.arrData = dbData;
                this.$p.arrFilterField = this.nodeData.arrFilterField;
                this.$p.id = '';

                for (let i = 0; i < para.$arrRecordNo.length; i++) {
                    this.$p.index = i;
                    para.cacheResult = this.cache.sql.cacheInsert($zkDef.tableName_zkNode, this.nodeData.arrFieldType, this.nodeData.arrObjField, this.$p);
                    if (para.cacheResult.code === 0) {
                        // 用于写MySQL出错后回滚  !!回滚时也用记录号来回滚？
                        para.delNodeIdArr.push(para.cacheResult.id);
                        // 回填新增后的节点ID：
                        arrCreateRecord[i].nodeId = para.cacheResult.id;
                    } else {
                        // 错误类型分两种：
                        // 1、path重复出错：会返回出错路径对应的索引，同时需要删除arrCreateRecord中出错的路径数据（为了写MySQL时不出错），其他节点数据正常新增
                        // 2、其他错误：删除已保存到内存的新增节点数据，并errorCallBack返回应用层

                        // 表示值重复出错，将错误信息保存到缓存中，用于向应用层回调：
                        if (para.cacheResult.code === $zkDef.errorCode_dupValue) {
                            arrCreateRecord[i].nodeId = null;
                            let curCmdId = getCmdId(arrCreateRecord[i]);

                            // 错误类型： 0-没错误，1-节点已经存在, 2-父节点不存在
                            let errType = 1;
                            // 将错误信息写入缓冲区中对应的命令：
                            writeEntryError(curCmdId, errType);
                        } else {
                            // 其他错误时，错误回给应用层，同时删除已保存到内存的节点数据
                            para.newNodeError = true;  // 添加新增节点出错标志（用于回滚）
                            let cmdIdArr = [getCmdId(arrCreateRecord[i])];
                            let errorObj = {
                                cmdId: cmdIdArr,
                                error: para.cacheResult
                            };
                            para.errorCallBack(errorObj);
                            para.nStep = 'error_del_mem_node';
                            break;
                        }
                    }
                }

                dbFlag++;
                break;
            case 'nodeModify':   // 获取到所有修改命令的nodeId与版本号，并判断版本号是否相同，相同则修改数据库中数据
                if (arrSetRecord.length === 0) {
                    para.nStep = 'historyNew';
                    dbFlag++;
                    break;
                }

                para.oldNodeData = { // 保存修改前的节点数据，便于出错后回滚：
                    id: [],
                    data: [],
                    version: [],
                };
                para.path = [];

                arrSetRecord.forEach(function (item) {
                    para.path.push(item.path);
                });

                para.$field = $zkDef.zkNode_path;
                para.$arrValue = para.path;
                para.$arrRecordNo = [];
                // 获取记录号：
                this.cache.sql.getRecordNo_from_index_unique($zkDef.tableName_zkNode, para.$field, para.$arrValue, para.$arrRecordNo);

                for (let i = 0; i < para.$arrRecordNo.length; i++) {
                    let nodeId = this.nodeData.tableData[$zkDef.id][para.$arrRecordNo[i]];
                    let dbVersion = this.nodeData.tableData[$zkDef.zkNode_version][para.$arrRecordNo[i]];
                    let data = this.nodeData.tableData[$zkDef.zkNode_data][para.$arrRecordNo[i]];

                    // 保存修改前的节点数据，便于出错后回滚：
                    para.oldNodeData.id.push(nodeId);
                    para.oldNodeData.version.push(dbVersion);
                    para.oldNodeData.data.push(data);

                    // 回填节点ID：
                    arrSetRecord[i].nodeId = nodeId;

                    // 判断版本号是否一致：
                    let userVersion = arrSetRecord[i].version;

                    if (dbVersion === userVersion) {
                        arrSetRecord[i].verError = false;
                        // 版本号一致的直接修改内存库中version与data数据：
                        this.nodeData.tableData[$zkDef.zkNode_version][para.$arrRecordNo[i]] = dbVersion + 1;
                        this.nodeData.tableData[$zkDef.zkNode_data][para.$arrRecordNo[i]] = arrSetRecord[i].data;
                    } else {
                        // 错误类型： 0-没错误，1-版本出错, 2-表示节点不存在, 3-该日志已存在且不是本服务器创建
                        let errorType = 1;
                        arrSetRecord[i].verError = errorType;

                        // 将错误信息写入缓冲区中对应的命令：
                        let curCmdId = getCmdId(arrSetRecord[i]);
                        writeEntryError(curCmdId, errorType);
                    }
                }

                para.nStep = 'historyNew';
                dbFlag++;
                break;
            case 'historyNew':
                // 下一步提前，确保新增出错后，下一步可以被重置：
                para.nStep = 'makeMysqlData';

                para.delHistoryIdArr = [];
                dbData = {};
                // 组织新增历史记录缓冲区dbData
                that.getHistoryDBData(arrCreateRecord, arrSetRecord, dbData);

                this.$p.type = 2;
                this.$p.arrData = dbData;
                this.$p.arrFilterField = this.historyData.arrFilterField;
                this.$p.id = '';

                for (let i = 0; i < dbData[$zkDef.id].length; i++) {
                    // 当cmdIndex为null时，不需要新增历史记录：
                    // if (dbData[$zkDef.zkHistory_cmdIndex][i] === null) continue;

                    this.$p.index = i;
                    para.cacheResult = this.cache.sql.cacheInsert($zkDef.tableName_zkHistory, this.historyData.arrFieldType, this.historyData.arrObjField, this.$p);
                    if (para.cacheResult.code === 0) {
                        // 用于写MySQL出错后回滚
                        para.delHistoryIdArr.push(para.cacheResult.id);
                        // 回填新增后的历史记录ID：
                        if (i < arrSetRecord.length) {
                            arrSetRecord[i].historyId = para.cacheResult.id;
                        } else {
                            arrCreateRecord[i - arrSetRecord.length].historyId = para.cacheResult.id;
                        }
                    } else {
                        // 错误类型分两种：一种index重复出错（重新组织arrTableData），另一种其他（直接返回错误）
                        // index重复出错，将该历史记录数据覆盖到存在的index中：
                        if (para.cacheResult.code === $zkDef.errorCode_dupValue) {
                            // console.warn('index重复出错！会覆盖原index对应的记录');
                            let errorIndex = dbData[$zkDef.zkHistory_index][i];
                            para.$field = $zkDef.zkHistory_index;
                            para.$arrValue = [errorIndex];
                            para.$arrRecordNo = [];
                            // 获取index对应记录号：
                            this.cache.sql.getRecordNo_from_index_unique($zkDef.tableName_zkHistory, para.$field, para.$arrValue, para.$arrRecordNo);

                            // 标记是否index重复，重复的执行修改操作，回填需修改的历史记录ID：
                            if (i < arrSetRecord.length) {
                                arrSetRecord[i].historyId = this.historyData.tableData[$zkDef.id][para.$arrRecordNo[0]];
                                arrSetRecord[i].indexError = true;
                            } else {
                                arrCreateRecord[i - arrSetRecord.length].historyId = this.historyData.tableData[$zkDef.id][para.$arrRecordNo[0]];
                                arrCreateRecord[i - arrSetRecord.length].indexError = true;
                            }

                            // 将该index覆盖：
                            this.historyData.tableData[$zkDef.zkHistory_version][para.$arrRecordNo[0]] = dbData[$zkDef.zkHistory_version][i];
                            this.historyData.tableData[$zkDef.zkHistory_type][para.$arrRecordNo[0]] = dbData[$zkDef.zkHistory_type][i];
                            this.historyData.tableData[$zkDef.zkHistory_path][para.$arrRecordNo[0]] = dbData[$zkDef.zkHistory_path][i];
                            this.historyData.tableData[$zkDef.zkHistory_state][para.$arrRecordNo[0]] = dbData[$zkDef.zkHistory_state][i];
                            this.historyData.tableData[$zkDef.zkHistory_term][para.$arrRecordNo[0]] = dbData[$zkDef.zkHistory_term][i];
                            this.historyData.tableData[$zkDef.zkHistory_data][para.$arrRecordNo[0]] = dbData[$zkDef.zkHistory_data][i];
                            this.historyData.tableData[$zkDef.zkHistory_attrib][para.$arrRecordNo[0]] = dbData[$zkDef.zkHistory_attrib][i];
                            this.historyData.tableData[$zkDef.zkHistory_clearIndex][para.$arrRecordNo[0]] = dbData[$zkDef.zkHistory_clearIndex][i];
                            this.$db.cacheColWrite(this.dbName, $zkDef.tableName_zkHistory, $zkDef.zkHistory_cmdIndex, para.$arrRecordNo[0], dbData[$zkDef.zkHistory_cmdIndex][i]);
                            this.$db.cacheColWrite(this.dbName, $zkDef.tableName_zkHistory, $zkDef.pt_id, para.$arrRecordNo[0], dbData[$zkDef.pt_id][i]);
                        } else {
                            // 其他错误时，错误回给应用层，同时删除已保存到内存的历史记录数据
                            para.newHistoryError = true;  // 已经新增成功的历史记录id（用于回滚）
                            let cmdIdArr = [];
                            if (i < arrSetRecord.length) {
                                cmdIdArr.push(getCmdId(arrSetRecord[i]))
                            } else {
                                cmdIdArr.push(getCmdId(arrCreateRecord[i - arrSetRecord.length]));
                            }
                            let errorObj = {
                                cmdId: cmdIdArr,
                                error: para.cacheResult
                            };
                            para.errorCallBack(errorObj);
                            para.nStep = 'error_del_mem_node';
                            break;
                        }
                    }
                }

                dbFlag++;
                break;
            case 'makeMysqlData':
                // 组织新增缓冲区（新增节点+新增历史记录）：
                $arrTableData_new = {};
                // 1. 组织节点表数据：
                $arrField = [$zkDef.id, $zkDef.del, $zkDef.zkNode_parentNodeId, $zkDef.zkNode_path, $zkDef.zkNode_data, $zkDef.zkNode_attrib, $zkDef.zkNode_version];
                $arrValue = [];
                for (let i = 0; i < arrCreateRecord.length; i++) {
                    // 当nodeId存在（即不是重复节点），同时不是空节点：
                    if (arrCreateRecord[i].nodeId && arrCreateRecord[i].path.startsWith('/')) {
                        $arrValue.push([arrCreateRecord[i].nodeId, 0, arrCreateRecord[i].parentNodeId, arrCreateRecord[i].path, arrCreateRecord[i].data, arrCreateRecord[i].attrib, arrCreateRecord[i].version]);
                    }
                }
                if ($arrValue.length > 0) {  // 有需要新增的节点
                    $arrTableData_new[$zkDef.tableName_zkNode] = $public.getModifyTableStruct($arrField, $arrValue);
                }

                // 2. 组织历史表数据：
                $arrField = [$zkDef.id, $zkDef.del, $zkDef.pt_id, $zkDef.zkHistory_type, $zkDef.zkHistory_cmdIndex, $zkDef.zkHistory_path, $zkDef.zkHistory_data, $zkDef.zkHistory_attrib, $zkDef.zkHistory_state, $zkDef.zkHistory_index, $zkDef.zkHistory_version, $zkDef.zkHistory_term, $zkDef.zkHistory_clearIndex];
                $arrValue = [];
                // 从create中获取数据：
                for (let i = 0; i < arrCreateRecord.length; i++) {
                    if (!arrCreateRecord[i].indexError) {
                        $arrValue.push([arrCreateRecord[i].historyId, 0, arrCreateRecord[i].nodeId, arrCreateRecord[i].type, arrCreateRecord[i].cmdIndex, arrCreateRecord[i].path, arrCreateRecord[i].data, arrCreateRecord[i].attrib, $zkDef.zkHistory_state_no, arrCreateRecord[i].index, arrCreateRecord[i].version, arrCreateRecord[i].term, arrCreateRecord[i].clearIndex]);
                    }
                }
                // 从setData中获取数据：
                for (let i = 0; i < arrSetRecord.length; i++) {
                    if (!arrSetRecord[i].indexError) {
                        $arrValue.push([arrSetRecord[i].historyId, 0, arrSetRecord[i].nodeId, arrSetRecord[i].type, arrSetRecord[i].cmdIndex, arrSetRecord[i].path, arrSetRecord[i].data, arrSetRecord[i].attrib, $zkDef.zkHistory_state_no, arrSetRecord[i].index, arrSetRecord[i].version, arrSetRecord[i].term, arrSetRecord[i].clearIndex]);
                    }
                }
                if ($arrValue.length > 0) {
                    $arrTableData_new[$zkDef.tableName_zkHistory] = $public.getModifyTableStruct($arrField, $arrValue);
                }


                // 1. 组织修改缓冲区（修改节点）：
                $arrTableData_modify = {};
                $arrField = [$zkDef.id, $zkDef.zkNode_data, $zkDef.zkNode_version];
                $arrValue = [];
                for (let i = 0; i < arrSetRecord.length; i++) {
                    if (!arrSetRecord[i].verError) {
                        $arrValue.push([arrSetRecord[i].nodeId, arrSetRecord[i].data, arrSetRecord[i].version + 1]);  // 记得写入MySQL节点表的版本号要+1
                    }
                }
                if ($arrValue.length > 0) {
                    $arrTableData_modify[$zkDef.tableName_zkNode] = $public.getModifyTableStruct($arrField, $arrValue);
                }

                // 2. 组织修改缓冲区（修改历史记录）：
                $arrField = [$zkDef.id, $zkDef.pt_id, $zkDef.zkHistory_type, $zkDef.zkHistory_cmdIndex, $zkDef.zkHistory_path, $zkDef.zkHistory_data, $zkDef.zkHistory_attrib, $zkDef.zkHistory_state, $zkDef.zkHistory_version, $zkDef.zkHistory_term, $zkDef.zkHistory_clearIndex];
                $arrValue = [];
                for (let i = 0; i < arrSetRecord.length; i++) {
                    if (arrSetRecord[i].indexError) {
                        $arrValue.push([arrSetRecord[i].historyId, arrSetRecord[i].nodeId, arrSetRecord[i].type, arrSetRecord[i].cmdIndex, arrSetRecord[i].path, arrSetRecord[i].data, arrSetRecord[i].attrib, $zkDef.zkHistory_state_no, arrSetRecord[i].version, arrSetRecord[i].term, arrSetRecord[i].clearIndex]);
                    }
                }
                for (let i = 0; i < arrCreateRecord.length; i++) {
                    if (arrCreateRecord[i].indexError) {
                        $arrValue.push([arrCreateRecord[i].historyId, arrCreateRecord[i].nodeId, arrCreateRecord[i].type, arrCreateRecord[i].cmdIndex, arrCreateRecord[i].path, arrCreateRecord[i].data, arrCreateRecord[i].attrib, $zkDef.zkHistory_state_no, arrCreateRecord[i].version, arrCreateRecord[i].term, arrCreateRecord[i].clearIndex]);
                    }
                }
                if ($arrValue.length > 0) {
                    $arrTableData_modify[$zkDef.tableName_zkHistory] = $public.getModifyTableStruct($arrField, $arrValue);
                }


                // 异步写MySQL数据库：
                that.zk_db_save_mysql(startConfirmIndex, $arrTableData_new, $arrTableData_modify, function () {
                    // 更新清除指针：
                    that.$raft.clearIndex = parseInt(clearIndex);

                    // 获取最小的历史记录ID号作为消费指针
                    let minIndex = that.historyData.tableData[$zkDef.id][0];
                    // 更新消费指针
                    that.$raft.consumeIndex = minIndex ? minIndex : 0;
                }, function (error) {
                    let cmdIdArr = [];
                    para.newNodeError = true;
                    para.modifyNodeError = true;
                    para.newHistoryError = true;

                    arrCreateRecord.forEach(function (item) {
                        let cmdId = getCmdId(item);
                        if (!cmdIdArr.includes(cmdId)) cmdIdArr.push(cmdId);
                    });
                    arrSetRecord.forEach(function (item) {
                        let cmdId = getCmdId(item);
                        if (!cmdIdArr.includes(cmdId)) cmdIdArr.push(cmdId);
                    });

                    let errorObj = {
                        cmdId: cmdIdArr,
                        error: error
                    };
                    para.errorCallBack(errorObj);

                    para.nStep = 'error_del_mem_node';
                    if (++dbFlag === 2) {
                        that.zk_db_save_mem(startConfirmIndex, clearIndex, arrCreateRecord, arrSetRecord, successCallBack, errorCallBack)
                    }
                });
                break;
            case 'error_del_mem_node':
                if (!para.newNodeError || !para.delNodeIdArr || para.delNodeIdArr.length === 0) {
                    para.nStep = 'error_modifyBack_mem_node';
                    dbFlag++;
                    break;
                }

                tableName = $zkDef.tableName_zkNode;
                $arrRecord = para.delNodeIdArr;

                para.cacheResult = this.$db.cacheRecordDelete(this.dbName, tableName, $arrRecord);
                if (para.cacheResult.code === 0) {
                    para.nStep = 'error_modifyBack_mem_node';
                    dbFlag++;
                } else {
                    console.error(para.cacheResult);
                }
                break;
            case 'error_modifyBack_mem_node':
                if (!para.modifyNodeError || !para.oldNodeData || para.oldNodeData.id.length === 0) {
                    para.nStep = 'error_del_mem_history';
                    dbFlag++;
                    break;
                }

                tableName = $zkDef.tableName_zkNode;
                field = null;
                arrId = para.oldNodeData[$zkDef.id];
                para.cacheResult = this.$db.cacheRecordModify(this.dbName, tableName, arrId, field, para.oldNodeData);
                if (para.cacheResult.code === 0) {
                    para.nStep = 'error_del_mem_history';
                    dbFlag++;
                } else {
                    console.error(para.cacheResult);
                }
                break;
            case 'error_del_mem_history':
                that.me.confirmIndex = startConfirmIndex;  // 错误后，需要把本地确定指针重置回去

                if (!para.newHistoryError || !para.delHistoryIdArr || para.delHistoryIdArr.length === 0) {
                    break;
                }

                tableName = $zkDef.tableName_zkHistory;
                $arrRecord = para.delHistoryIdArr;

                para.cacheResult = this.$db.cacheRecordDelete(this.dbName, tableName, $arrRecord);
                if (para.cacheResult.code !== 0) {
                    console.error(para.cacheResult);
                }
                break;
            case 'end':
                return
        }
        if (++dbFlag === 1) {
            return
        }
    }
};


ZKClient.prototype.getNodeDBData = function (arrRecord, dbData) {
    if (arrRecord[0].type === $zkDef.cmd_setData) {
        dbData[$zkDef.id] = [];
        dbData[$zkDef.zkNode_data] = [];
        dbData[$zkDef.zkNode_version] = [];

        for (let i = 0; i < arrRecord.length; i++) {
            if (!arrRecord[i].verError) {    // 判断版本号是否出错，出错则不修改节点记录
                dbData[$zkDef.id].push(arrRecord[i].nodeId);
                dbData[$zkDef.zkNode_data].push(arrRecord[i].data);
                dbData[$zkDef.zkNode_version].push(arrRecord[i].version);
            }
        }
    } else {
        dbData[$zkDef.id] = [];
        dbData[$zkDef.del] = [];
        dbData[$zkDef.zkNode_parentNodeId] = [];
        dbData[$zkDef.zkNode_path] = [];
        dbData[$zkDef.zkNode_data] = [];
        dbData[$zkDef.zkNode_attrib] = [];
        dbData[$zkDef.zkNode_version] = [];

        for (let i = 0; i < arrRecord.length; i++) {
            if (arrRecord[i].path.startsWith('/')) {   // 判断是不是空命令，空命令则不新增节点记录
                dbData[$zkDef.id].push('');
                dbData[$zkDef.del].push(0);
                dbData[$zkDef.zkNode_parentNodeId].push(arrRecord[i].parentNodeId);
                dbData[$zkDef.zkNode_path].push(arrRecord[i].path);
                dbData[$zkDef.zkNode_data].push(arrRecord[i].data);
                dbData[$zkDef.zkNode_attrib].push(arrRecord[i].attrib);
                dbData[$zkDef.zkNode_version].push(arrRecord[i].version);
            }
        }
    }
};


ZKClient.prototype.getHistoryDBData = function (arrCreateRecord, arrSetRecord, dbData) {
    dbData[$zkDef.id] = [];
    dbData[$zkDef.pt_id] = [];
    dbData[$zkDef.del] = [];
    dbData[$zkDef.zkHistory_type] = [];
    dbData[$zkDef.zkHistory_cmdIndex] = [];
    dbData[$zkDef.zkHistory_path] = [];
    dbData[$zkDef.zkHistory_data] = [];
    dbData[$zkDef.zkHistory_attrib] = [];
    dbData[$zkDef.zkHistory_state] = [];  // 0表示未消费
    dbData[$zkDef.zkHistory_index] = [];
    dbData[$zkDef.zkHistory_version] = [];
    dbData[$zkDef.zkHistory_term] = [];
    dbData[$zkDef.zkHistory_clearIndex] = [];

    for (let i = 0; i < arrSetRecord.length; i++) {
        if (arrSetRecord[i].history) {
            dbData[$zkDef.id].push(arrSetRecord[i].history);
        } else {
            dbData[$zkDef.id].push('');
        }
        dbData[$zkDef.pt_id].push(arrSetRecord[i].nodeId);
        dbData[$zkDef.del].push(0);
        dbData[$zkDef.zkHistory_type].push(arrSetRecord[i].type);
        dbData[$zkDef.zkHistory_cmdIndex].push(arrSetRecord[i].cmdIndex);
        dbData[$zkDef.zkHistory_path].push(arrSetRecord[i].path);
        dbData[$zkDef.zkHistory_data].push(arrSetRecord[i].data);
        dbData[$zkDef.zkHistory_attrib].push(arrSetRecord[i].attrib);
        dbData[$zkDef.zkHistory_version].push(arrSetRecord[i].version);
        dbData[$zkDef.zkHistory_state].push($zkDef.zkHistory_state_no);
        dbData[$zkDef.zkHistory_index].push(arrSetRecord[i].index);
        dbData[$zkDef.zkHistory_term].push(arrSetRecord[i].term);
        dbData[$zkDef.zkHistory_clearIndex].push(arrSetRecord[i].clearIndex);
    }

    for (let i = 0; i < arrCreateRecord.length; i++) {
        if (arrCreateRecord[i].history) {
            dbData[$zkDef.id].push(arrCreateRecord[i].history);
        } else {
            dbData[$zkDef.id].push('');
        }
        dbData[$zkDef.pt_id].push(arrCreateRecord[i].nodeId);
        dbData[$zkDef.del].push(0);
        dbData[$zkDef.zkHistory_type].push(arrCreateRecord[i].type);
        dbData[$zkDef.zkHistory_cmdIndex].push(arrCreateRecord[i].cmdIndex);
        dbData[$zkDef.zkHistory_path].push(arrCreateRecord[i].path);
        dbData[$zkDef.zkHistory_data].push(arrCreateRecord[i].data);
        dbData[$zkDef.zkHistory_attrib].push(arrCreateRecord[i].attrib);
        dbData[$zkDef.zkHistory_version].push(arrCreateRecord[i].version);
        dbData[$zkDef.zkHistory_state].push($zkDef.zkHistory_state_no);
        dbData[$zkDef.zkHistory_index].push(arrCreateRecord[i].index);
        dbData[$zkDef.zkHistory_term].push(arrCreateRecord[i].term);
        dbData[$zkDef.zkHistory_clearIndex].push(arrCreateRecord[i].clearIndex);
    }
};


// 将命令写入mySQL数据库：
ZKClient.prototype.zk_db_save_mysql = function (startConfirmIndex, arrTableData_new, arrTableData_modify, successCallBack, errorCallBack) {
    let that = this;
    let dbFlag;
    let dbData;
    let tableName;
    let arrId;
    let arrField;
    let record;
    let para = {
        successCallBack: successCallBack,
        errorCallBack: errorCallBack,
        nStep: 0,
    };

    if (successCallBack !== null) {
        errorCallBack = para;
        successCallBack = null
    }
    para = errorCallBack;

    while (1) {
        dbFlag = 0;
        if (this.$zkDef.switch) {
            console.log(global.localIp + '：zk--zk_db_save_mysql：' + para.nStep)
        }
        switch (para.nStep) {
            case 0:
            case 'hardTransOpen':
                this.$db.hardTransOpen(function (hardTrans) {
                    para.hardTrans = hardTrans;
                    para.nStep = 'modify_mysql_data';
                    if (++dbFlag === 2) {
                        that.zk_db_save_mysql(startConfirmIndex, arrTableData_new, arrTableData_modify, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'modify_mysql_data':
                tableName = Object.keys(arrTableData_modify);

                // 判断是否存在需要修改节点的数据：
                if (tableName.length === 0) {
                    para.nStep = 'new_mysql_data';
                    dbFlag++;
                    break;
                }

                arrField = null;
                arrId = [];
                tableName.forEach(function (item) {
                    arrId.push(arrTableData_modify[item][$zkDef.id]);
                });

                this.$db.hardDirectRecordModify(this.dbName, tableName, arrId, arrField, arrTableData_modify, para.hardTrans, function () {
                    para.nStep = 'new_mysql_data';
                    if (++dbFlag === 2) {
                        that.zk_db_save_mysql(startConfirmIndex, arrTableData_new, arrTableData_modify, successCallBack, errorCallBack)
                    }
                }, function (error) {
                    para.err = {
                        msg: '修改MySQL数据库错误！',
                        error: error
                    };
                    para.nStep = 'hardTransCancel';
                    if (++dbFlag === 2) {
                        that.zk_db_save_mysql(startConfirmIndex, arrTableData_new, arrTableData_modify, successCallBack, errorCallBack)
                    }
                });
                break;
            case 'new_mysql_data':
                tableName = Object.keys(arrTableData_new);

                // 判断是否存在需要新增节点的数据：
                if (tableName.length === 0) {
                    para.nStep = 'hardTransClose';
                    dbFlag++;
                    break;
                }

                arrField = null;
                arrId = [];
                tableName.forEach(function (item) {
                    arrId.push(arrTableData_new[item][$zkDef.id]);
                });

                this.$db.hardDirectRecordNew(this.dbName, tableName, arrId, arrField, arrTableData_new, para.hardTrans, function () {
                    para.nStep = 'hardTransClose';
                    if (++dbFlag === 2) {
                        that.zk_db_save_mysql(startConfirmIndex, arrTableData_new, arrTableData_modify, successCallBack, errorCallBack)
                    }
                }, function (error) {
                    para.err = {
                        msg: '新增MySQL数据库错误！',
                        error: error
                    };
                    para.nStep = 'hardTransCancel';
                    if (++dbFlag === 2) {
                        that.zk_db_save_mysql(startConfirmIndex, arrTableData_new, arrTableData_modify, successCallBack, errorCallBack)
                    }
                });
                break;
            case 'hardTransClose':
                this.$db.hardTransClose(para.hardTrans, function () {
                    // index对应的日志打上成功标志；更新确定指针；执行回调
                    that.me.confirmTableObj[startConfirmIndex] = 1;
                    that.zk_proc_confirm_index_callback();

                    para.nStep = 'end';
                    if (++dbFlag === 2) {
                        that.zk_db_save_mysql(startConfirmIndex, arrTableData_new, arrTableData_modify, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'hardTransCancel':
                this.$db.hardTransCancel(para.hardTrans, function () {
                    para.errorCallBack(para.err);
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


// 判断是否可以执行raft层的成功回调（确定表连续）
ZKClient.prototype.zk_proc_confirm_index_callback = function () {
    var that = this;
    let startIndexArr = [];
    let endIndexArr = [];

    // 判断日志确定表前成功标志是否连续：
    // console.warn('日志确定表：' + JSON.stringify(this.me.confirmTableObj));

    let confirmTableKeyArr = Object.keys(this.me.confirmTableObj);
    let confirmTableKey_max = -2;
    for (let i = 0; i < confirmTableKeyArr.length; i++) {
        if (this.me.confirmTableObj[confirmTableKeyArr[i]] === 1) {
            confirmTableKey_max = parseInt(confirmTableKeyArr[i]);
        } else {
            break;
        }
    }

    if (confirmTableKey_max === -2) {
        // console.warn('日志确定表前成功标志不连续！');
        return
    }

    // 获取需要回调给raft层的索引：
    var raft_callback_indexArr = Object.keys(this.me.raftCallbackObj);
    for (let i = 0; i < raft_callback_indexArr.length; i++) {
        if (raft_callback_indexArr[i] <= confirmTableKey_max) {
            // 获取命令包中第一条到最后一条的索引，用于向应用层回调：
            startIndexArr.push(parseInt(raft_callback_indexArr[i]));
            endIndexArr.push(this.me.raftCallbackObj[raft_callback_indexArr[i]].lastConfirmIndex);
            // 回给raft层的回调函数：
            let callback = this.me.raftCallbackObj[raft_callback_indexArr[i]].successCall;
            callback();
            // 确定指针修正：
            this.$raft.confirmIndex = this.me.raftCallbackObj[raft_callback_indexArr[i]].lastConfirmIndex;

            delete this.me.raftCallbackObj[raft_callback_indexArr[i]];
        }
    }

    // 回给应用层的回调函数：
    this.zk_run_callback_and_watcher(startIndexArr, endIndexArr, function () {
    }, function (error) {
        console.error(error);
    });

    // 将确定指针前，日志确定表的数据删除：
    startIndexArr.forEach(function (item) {
        delete that.me.confirmTableObj[item];
    });
};


// 返回watcher监听；执行回调：
ZKClient.prototype.zk_run_callback_and_watcher = function (startIndexArr, endIndexArr, successCallBack, errorCallBack) {
    let that = this;
    let dbFlag;
    let dbData;
    let tableName;
    let condition;
    let arrField;
    let para = {
        successCallBack: successCallBack,
        errorCallBack: errorCallBack,
        nStep: 0,
        i: 0,
        arrEntry: [],
        execFlagObj: {},
        arrDeleteId: []   //要删除的历史记录id（cmdIndex为null时，需自己删除历史记录）
    };

    if (successCallBack !== null) {
        errorCallBack = para;
        successCallBack = null
    }
    para = errorCallBack;

    while (1) {
        dbFlag = 0;
        if (this.$zkDef.switch) {
            console.log(global.localIp + '：zk--zk_run_callback_and_watcher：' + para.nStep)
        }
        switch (para.nStep) {
            case 0:
                if (para.i >= startIndexArr.length) {
                    para.nStep = 'deleteHistory';
                    dbFlag++;
                    para.i = 0;
                    break;
                }

                para.startIndex = startIndexArr[para.i] + 1;  // +1 因为para.startIndex是当前已经确定的指针，不需要再确定
                para.endIndex = endIndexArr[para.i];

                // 获取startIndex到endIndex之间的路径：
                para.pathArr = [];
                for (let j = para.startIndex; j <= para.endIndex; j++) {
                    para.execFlagObj[j] = 0;
                    para.pathArr.push(this.$raft.arrLog[j].path);
                }

                para.nStep = 'getDataWatcher';
                dbFlag++;
                break;
            case 'getDataWatcher':
                para.dataWatchObj = {};
                para.$field = $zkDef.zkNode_path;
                para.$arrValue = para.pathArr;
                para.$arrRecordNo = [];
                // 获取记录号：
                this.cache.sql.getRecordNo_from_index_unique($zkDef.tableName_zkNode, para.$field, para.$arrValue, para.$arrRecordNo);
                // 将父节点ID回填到arrCreateRecord中：
                for (let i = 0; i < para.$arrRecordNo.length; i++) {
                    if (para.$arrRecordNo[i] !== null) {
                        let dataWatcher = this.nodeData.tableData[$zkDef.zkNode_dataWatcher][para.$arrRecordNo[i]];
                        if (dataWatcher) {
                            para.dataWatchObj[para.pathArr[i]] = dataWatcher;
                        }
                    }
                }

                para.nStep = 'getNodeWatcher';
                dbFlag++;
                break;
            case 'getNodeWatcher':
                // 获取父节点：
                let arrParentPath = [];
                para.pathArr.forEach(function (item) {
                    let parentPath = item.split('/').slice(0, -1).join('/');
                    parentPath === '' ? arrParentPath.push('/') : arrParentPath.push(parentPath);
                });

                para.nodeWatchObj = {};
                para.$field = $zkDef.zkNode_path;
                para.$arrValue = arrParentPath;
                para.$arrRecordNo = [];
                // 获取记录号：
                this.cache.sql.getRecordNo_from_index_unique($zkDef.tableName_zkNode, para.$field, para.$arrValue, para.$arrRecordNo);
                // 将父节点ID回填到arrCreateRecord中：
                for (let i = 0; i < para.$arrRecordNo.length; i++) {
                    if (para.$arrRecordNo[i] !== null) {
                        let nodeWatcher = this.nodeData.tableData[$zkDef.zkNode_nodeWatcher][para.$arrRecordNo[i]];
                        if (nodeWatcher) {
                            para.nodeWatchObj[para.pathArr[i]] = nodeWatcher;
                        }
                    }
                }

                para.nStep = 'callbackExist';
                dbFlag++;
                break;
            case 'callbackExist':
                if (para.startIndex > para.endIndex) {
                    para.nStep = 'execAllWatcher';
                    dbFlag++;
                    break;
                }

                para.entry = that.$raft.arrLog[para.startIndex];  // 获取一个日志
                let cmdId = getCmdId(para.entry);  // 获取cmdId
                para.commitResult = cmdCallbackExist(cmdId);  // 通过cmdId在commitCmdObj查找对应的命令包req
                // req对应的包是否找到:
                if (para.commitResult) {
                    para.cmdIdObj = {};
                    para.nStep = 'get_callback_historyId';

                    // 再判断该日志的cmdIndex是否为null，为null不会新增历史记录，不需要获取历史记录ID：
                    // if (para.entry.cmdIndex !== null) {
                    //     para.nStep = 'get_callback_historyId';
                    // } else {
                    //     let arrEntry = that.me.commitCmdObj[para.commitResult.commitId].arrEntry;
                    //     for (let i = 0; i < arrEntry.length; i++) {
                    //         para.cmdIdObj[arrEntry[i].type + arrEntry[i].cmdIndex + arrEntry[i].path + arrEntry[i].version] = -1;
                    //     }
                    //     para.nStep = 'cmd_callback';
                    // }

                } else {
                    para.startIndex++;
                    para.nStep = 'callbackExist';
                }
                dbFlag++;
                break;
            case 'get_callback_historyId':    // 查找 cmdIndex 对应的所有记录id，用于返回给应用层
                let cmdIndex = that.me.commitCmdObj[para.commitResult.commitId].arrEntry[0].cmdIndex;

                para.$field = $zkDef.zkHistory_cmdIndex;
                para.$arrValue = [cmdIndex];
                para.$arrRecordNo = [];

                // 获取记录号：
                this.cache.sql.getRecordNo_from_index($zkDef.tableName_zkHistory, para.$field, para.$arrValue, para.$arrRecordNo);
                // type + cmdIndex + path + version 建立索引：
                for (let i = 0; i < para.$arrRecordNo.length; i++) {
                    let id = this.historyData.tableData[$zkDef.id][para.$arrRecordNo[i]];
                    let type = this.historyData.tableData[$zkDef.zkHistory_type][para.$arrRecordNo[i]];
                    let cmdIndex = this.historyData.tableData[$zkDef.zkHistory_cmdIndex][para.$arrRecordNo[i]];
                    let path = this.historyData.tableData[$zkDef.zkHistory_path][para.$arrRecordNo[i]];
                    let version = this.historyData.tableData[$zkDef.zkHistory_version][para.$arrRecordNo[i]];

                    // cmdIndex为null时，需自己删除历史记录
                    if (cmdIndex === null) {
                        para.arrDeleteId.push(id);
                        para.cmdIdObj[type + JSON.stringify(cmdIndex) + path + version] = null;
                    } else {
                        para.cmdIdObj[type + cmdIndex + path + version] = id;
                    }
                }

                para.nStep = 'cmd_callback';
                dbFlag++;
                break;
            case "cmd_callback":
                for (let paraCmdId in para.cmdIdObj) {
                    // 获取到historyId所在的位置索引：
                    let arrIdIndex = that.me.commitCmdObj[para.commitResult.commitId].arrSeq[paraCmdId];
                    if (arrIdIndex !== undefined) {
                        // 需要判断当前这条命令是否出错，出错则返回对应错误信息：
                        let entryError = isEntryError(paraCmdId);
                        if (entryError) {
                            that.me.commitCmdObj[para.commitResult.commitId].result.arrId[arrIdIndex] = para.cmdIdObj[paraCmdId];
                            that.me.commitCmdObj[para.commitResult.commitId].result.arrError[arrIdIndex] = entryError;
                        } else {
                            that.me.commitCmdObj[para.commitResult.commitId].result.arrId[arrIdIndex] = para.cmdIdObj[paraCmdId];
                            // 错误类型：0表示没错误
                            that.me.commitCmdObj[para.commitResult.commitId].result.arrError[arrIdIndex] = 0;

                            // 当这条命令没错时，判断其类型，进行watcher回调：
                            let watcherType;
                            if (that.$raft.arrLog[para.startIndex].type === $zkDef.cmd_create) {
                                watcherType = 'nodeWatchObj';
                            } else {
                                watcherType = 'dataWatchObj';
                            }
                            let watcherFun = para[watcherType][that.$raft.arrLog[para.startIndex].path];
                            if (watcherFun) {
                                let $field = $zkDef.zkNode_path;
                                let $arrValue = [that.$raft.arrLog[para.startIndex].path];
                                let $arrRecordNo = [];
                                // 获取记录号：
                                this.cache.sql.getRecordNo_from_index_unique($zkDef.tableName_zkNode, $field, $arrValue, $arrRecordNo);

                                let watchResult = {};
                                watchResult.data = this.nodeData.tableData[$zkDef.zkNode_data][$arrRecordNo[0]];
                                watchResult.version = this.nodeData.tableData[$zkDef.zkNode_version][$arrRecordNo[0]];
                                watchResult.attrib = this.nodeData.tableData[$zkDef.zkNode_attrib][$arrRecordNo[0]];
                                watchResult.path = that.$raft.arrLog[para.startIndex].path;
                                watchResult.type = that.$raft.arrLog[para.startIndex].type;
                                watchResult.cmdIndex = that.cmdIndexToObject(that.$raft.arrLog[para.startIndex].cmdIndex);

                                watcherFun(watchResult);
                            }
                        }

                        para.execFlagObj[para.startIndex] = 1;
                        para.startIndex++;
                    }
                }

                // 已获取该命令包所有需要返回的id，可以成功回调，执行下一个命令包：
                if (that.me.commitCmdObj[para.commitResult.commitId].successCallBack) {
                    that.me.commitCmdObj[para.commitResult.commitId].successCallBack(that.me.commitCmdObj[para.commitResult.commitId].result);
                    delete that.me.commitCmdObj[para.commitResult.commitId];
                }

                para.nStep = 'callbackExist';
                dbFlag++;
                break;
            case 'execAllWatcher':
                for (let i = startIndexArr[para.i] + 1; i <= endIndexArr[para.i]; i++) {
                    if (para.execFlagObj[i] === 0) {
                        let watcherType;
                        let entry = that.$raft.arrLog[i];
                        if (entry.type === $zkDef.cmd_create) {
                            watcherType = 'nodeWatchObj';
                        } else {
                            watcherType = 'dataWatchObj';
                        }
                        let watcherFun = para[watcherType][entry.path];
                        if (watcherFun) {
                            let $field = $zkDef.zkNode_path;
                            let $arrValue = [entry.path];
                            let $arrRecordNo = [];
                            // 获取记录号：
                            this.cache.sql.getRecordNo_from_index_unique($zkDef.tableName_zkNode, $field, $arrValue, $arrRecordNo);

                            let watchResult = {};
                            watchResult.data = this.nodeData.tableData[$zkDef.zkNode_data][$arrRecordNo[0]];
                            watchResult.version = this.nodeData.tableData[$zkDef.zkNode_version][$arrRecordNo[0]];
                            watchResult.attrib = this.nodeData.tableData[$zkDef.zkNode_attrib][$arrRecordNo[0]];
                            watchResult.path = entry.path;
                            watchResult.type = entry.type;
                            watchResult.cmdIndex = that.cmdIndexToObject(entry.cmdIndex);
                            watcherFun(watchResult);
                        }
                    }
                }

                para.execFlagObj = {};
                para.i++;
                para.nStep = 0;
                dbFlag++;
                break;
            case 'deleteHistory':
                if (para.arrDeleteId.length === 0) {
                    para.nStep = 'end';
                    dbFlag++;
                    break;
                }

                this.zk_clear_consumed_node(para.arrDeleteId, function () {
                    para.nStep = 'end';
                    if (++dbFlag === 2) {
                        that.zk_run_callback_and_watcher(startIndexArr, endIndexArr, successCallBack, errorCallBack)
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


// 将轨迹表的轨迹状态为已消费的删除
ZKClient.prototype.zk_clear_consumed_node = function (arrId, successCallBack, errorCallBack) {
    let that = this;
    let dbFlag;
    let dbData;
    let tableName;
    let condition;
    let record;
    let para = {
        successCallBack: successCallBack,
        errorCallBack: errorCallBack,
        nStep: 0,
    };

    if (successCallBack !== null) {
        errorCallBack = para;
        successCallBack = null
    }
    para = errorCallBack;

    while (1) {
        dbFlag = 0;
        if (this.$zkDef.switch) {
            console.log(global.localIp + '：zk--zk_clear_consumed_node：' + para.nStep)
        }
        switch (para.nStep) {
            case 0:
            case 'hardTransOpen':
                this.$db.hardTransOpen(function (hardTrans) {
                    para.hardTrans = hardTrans;
                    para.nStep = 'mem_recordDel';
                    if (++dbFlag === 2) {
                        that.zk_clear_consumed_node(arrId, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'mem_recordDel':
                tableName = $zkDef.tableName_zkHistory;
                record = arrId;

                para.cacheResult = this.$db.cacheRecordDelete(this.dbName, tableName, record);
                if (para.cacheResult.code === 0) {
                    para.nStep = 'mysql_recordDel';
                    dbFlag++;
                } else {
                    para.errorCallBack(para.cacheResult)
                }
                break;
            case 'mysql_recordDel':
                tableName = [$zkDef.tableName_zkHistory];
                record = [arrId];

                this.$db.hardRecordDelete(this.dbName, tableName, record, para.hardTrans, function (result) {

                    // 获取最小的历史记录ID号作为消费指针
                    let minIndex = that.historyData.tableData[$zkDef.id][0];
                    // 更新消费指针
                    that.$raft.consumeIndex = minIndex ? minIndex : 0;

                    para.nStep = 'hardTransClose';
                    if (++dbFlag === 2) {
                        that.zk_clear_consumed_node(arrId, successCallBack, errorCallBack)
                    }
                }, function (error) {
                    para.error = error;
                    para.nStep = 'hardTransCancel';
                    if (++dbFlag === 2) {
                        that.zk_clear_consumed_node(arrId, successCallBack, errorCallBack)
                    }
                });
                break;
            case 'hardTransClose':
                this.$db.hardTransClose(para.hardTrans, function (hardTrans) {
                    para.nStep = 'end';
                    if (++dbFlag === 2) {
                        that.zk_clear_consumed_node(arrId, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'hardTransCancel':
                this.$db.hardTransCancel(para.hardTrans, function () {
                    para.errorCallBack(para.error);
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


//根据最小清除指针清除垃圾（raft发现清除指针1分钟没有更新了，会调这个函数，把这个清除指针前的历史记录删除）
ZKClient.prototype.zk_clear_consume_index = function (minConsumeIndex) {
    // 小于本地最小指针吗？
    if (minConsumeIndex < ZKClient.$this.$raft.consumeIndex) return;

    // 最小指针为0吗？
    if (minConsumeIndex === 0) return;

    // 读取比minConsumeIndex小的记录arrId
    let recordNo = ZKClient.$this.cache.sql.getRecordNo_by_id($zkDef.tableName_zkHistory, minConsumeIndex);
    if (recordNo) {
        let arrId = [];
        for (let i = 0; i <= recordNo; i++) {
            arrId.push(ZKClient.$this.historyData.tableData[$zkDef.id][i]);
        }

        ZKClient.$this.zk_clear_consumed_node(arrId, function () {
            if ($zkDef.switch) console.log('清除垃圾成功！清除指针为：' + minConsumeIndex);
        }, function (error) {
            console.error(error)
        })
    }
};


/*
* <1>消费指针的定义：即历史记录中从小到大依次查找，最先找到的未消费的、日志索引小于清除指针的记录，定义为消费指针
* <2>消费指针的值用id号赋值
* <3>如果没找到，或消费指针大于等于清除指针，返回0
* */
ZKClient.prototype.zk_get_consume_index = function () {
    let arrState=this.historyData.tableData[$zkDef.zkHistory_state];
    let consumeIndex=0;
    for(let i = 0; i < arrState.length; i++) {
        if(this.historyData.tableData[$zkDef.zkHistory_index] < this.$raft.clearIndex) {

        }
    }
};


/*
* 持久化新leader数据
* */
ZKClient.prototype.zk_db_save_leaderInfo = function (leaderData, successCallBack, errorCallBack) {
    let that = this;
    let dbFlag;
    let dbData;
    let tableName;
    let field;
    let arrId;
    let condition;
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
        if ($zkDef.switch) {
            console.log(global.localIp + '：zk--zk_db_save_leaderInfo：' + para.nStep)
        }
        switch (para.nStep) {
            case 0:
            case 'leaderModify_mem':
                tableName = $zkDef.tableName_zkLeaderInfo;
                dbData = {};
                dbData[$zkDef.zkLeaderInfo_leaderId] = [leaderData.leaderId];
                dbData[$zkDef.zkLeaderInfo_validTerm] = [leaderData.validTerm];
                field = null;
                arrId = [1];

                para.cacheResult = ZKClient.$this.$db.cacheRecordModify(ZKClient.$this.dbName, tableName, arrId, field, dbData);
                if (para.cacheResult.code === 0) {
                    para.nStep = 'leaderModify_mysql';
                    dbFlag++
                } else {
                    para.errorCallBack(para.cacheResult)
                }
                break;
            case 'leaderModify_mysql':
                tableName = [$zkDef.tableName_zkLeaderInfo];
                dbData = {};
                dbData[$zkDef.tableName_zkLeaderInfo] = {};
                dbData[$zkDef.tableName_zkLeaderInfo][$zkDef.zkLeaderInfo_leaderId] = [leaderData.leaderId];
                dbData[$zkDef.tableName_zkLeaderInfo][$zkDef.zkLeaderInfo_validTerm] = [leaderData.validTerm];
                field = [[$zkDef.zkLeaderInfo_leaderId, $zkDef.zkLeaderInfo_validTerm]];
                arrId = [[1]];

                ZKClient.$this.$db.hardDirectRecordModify(ZKClient.$this.dbName, tableName, arrId, field, dbData, para.hardTrans, function (result) {
                    para.nStep = 'end';
                    if (++dbFlag === 2) {
                        ZKClient.$this.zk_db_save_leaderInfo(leaderData, successCallBack, errorCallBack)
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


// 将轨迹表中清除指针到确定指针之间的轨迹写到日志  (arrEntry是数组)
ZKClient.prototype.zk_sync_zk_node_to_log = function (successCallBack, errorCallBack) {
    let that = this;
    let dbFlag;
    let dbData;
    let tableName;
    let field;
    let arrId;
    let condition;
    let record;
    let para = {
        successCallBack: successCallBack,
        errorCallBack: errorCallBack,
        nStep: 0,
        entryObj: {},
        arrLogs: []
    };

    if (successCallBack !== null) {
        errorCallBack = para;
        successCallBack = null
    }
    para = errorCallBack;

    while (1) {
        dbFlag = 0;
        if ($zkDef.switch) {
            console.log(global.localIp + '：zk--zk_sync_zk_node_to_log：' + para.nStep)
        }
        switch (para.nStep) {
            case 0:
            case 'getLeaderData':
                tableName = $zkDef.tableName_zkLeaderInfo;
                dbData = {};
                field = null;
                arrId = [1];

                para.cacheResult = ZKClient.$this.$db.cacheRecordRead(ZKClient.$this.dbName, tableName, arrId, field, dbData);
                if (para.cacheResult.code === 0) {
                    para.leaderId = dbData[$zkDef.zkLeaderInfo_leaderId][0];
                    para.validTerm = dbData[$zkDef.zkLeaderInfo_validTerm][0];
                    para.restart = dbData[$zkDef.zkLeaderInfo_restart][0];

                    para.nStep = 'getIndex';
                    dbFlag++
                } else {
                    para.errorCallBack(para.cacheResult)
                }
                break;
            case 'getIndex':  // 获取确定指针，清除指针
                tableName = $zkDef.tableName_zkHistory;
                dbData = {};
                field = [$zkDef.zkHistory_index, $zkDef.id, $zkDef.zkHistory_clearIndex];
                condition = null;

                para.cacheResult = ZKClient.$this.$db.cacheRecordQuery(ZKClient.$this.dbName, tableName, condition, field, dbData);
                if (para.cacheResult.code === 0) {
                    if (dbData[$zkDef.zkHistory_index].length > 0) {
                        para.consumeIndex = dbData[$zkDef.id][0];  // 初始化消费指针（历史记录表第一个ID）
                        // 对索引进行排序：
                        para.indexArr = dbData[$zkDef.zkHistory_index].sort(function (a, b) {
                            return a - b
                        });
                        para.clearIndexArr = dbData[$zkDef.zkHistory_clearIndex].sort(function (a, b) {
                            return a - b
                        });
                        // 取连续的索引的最大值，也就是确定指针：
                        for (let i = 0; i < para.indexArr.length; i++) {
                            if (para.indexArr[i] + 1 !== para.indexArr[i + 1]) {
                                para.confirmIndex = para.indexArr[i];
                                break;
                            }
                        }
                        para.clearIndex = para.clearIndexArr[para.clearIndexArr.length - 1];
                        para.nStep = 'logInit';
                    } else {
                        para.consumeIndex = 0;
                        para.confirmIndex = -1;
                        para.clearIndex = 0;
                        para.nStep = 'end';
                    }

                    dbFlag++;
                } else {
                    para.errorCallBack(para.cacheResult)
                }
                break;
            case 'logInit':
                var $start = null;
                var $total = null;
                var $arrSort = null;

                tableName = $zkDef.tableName_zkHistory;
                dbData = {};
                field = null;
                $arrSort = [$zkDef.zkHistory_index + ", asc"];
                condition = $zkDef.zkHistory_index + '<=' + para.confirmIndex + '&&' + $zkDef.zkHistory_index + '>=' + para.clearIndex;

                para.cacheResult = ZKClient.$this.$db.cacheMultiQuery(ZKClient.$this.dbName, tableName, field, condition, $start, $total, $arrSort, dbData);
                if (para.cacheResult.code === 0) {
                    if (dbData[$zkDef.zkHistory_type].length > 0) {
                        for (let i = 0; i < dbData[$zkDef.zkHistory_type].length; i++) {
                            let entryObj = {};
                            entryObj.commitId = dbData[$zkDef.zkHistory_type][i] + dbData[$zkDef.zkHistory_cmdIndex][i] + dbData[$zkDef.zkHistory_path][i] + dbData[$zkDef.zkHistory_version][i];
                            entryObj.type = dbData[$zkDef.zkHistory_type][i];
                            entryObj.cmdIndex = dbData[$zkDef.zkHistory_cmdIndex][i];
                            entryObj.path = dbData[$zkDef.zkHistory_path][i];
                            entryObj.data = dbData[$zkDef.zkHistory_data][i];
                            entryObj.attrib = dbData[$zkDef.zkHistory_attrib][i];
                            entryObj.state = dbData[$zkDef.zkHistory_state][i];
                            entryObj.index = dbData[$zkDef.zkHistory_index][i];
                            entryObj.version = dbData[$zkDef.zkHistory_version][i];
                            entryObj.term = dbData[$zkDef.zkHistory_term][i];
                            para.arrLogs.push(entryObj);
                        }
                    }

                    para.nStep = 'end';
                    dbFlag++;
                } else {
                    para.errorCallBack(para.cacheResult)
                }
                break;
            case 'end':
                let restartData = {
                    restart: para.restart,
                    leaderId: para.leaderId,
                    validTerm: para.validTerm,  // 有效任期
                    arrEntry: para.arrLogs, // 日志数组
                    clearIndex: para.clearIndex, // 清除指针
                    confirmIndex: para.confirmIndex, // 确认指针
                    consumeIndex: para.consumeIndex  // 消费指针
                };
                para.successCallBack(restartData);
                return
        }
        if (++dbFlag === 1) {
            return
        }
    }
};


/*
* 判断zk节点是否已存在
* */
ZKClient.prototype.existZeroDBNode = function (dbName, successCallBack, errorCallBack) {
    let that = this;
    let dbFlag;
    let dbData;
    let tableName;
    let field;
    let arrId;
    let condition;
    let hardTrans;
    let record;
    let para = {
        successCallBack: successCallBack,
        errorCallBack: errorCallBack,
        nStep: 0,
        entryObj: {},
        arrLogs: []
    };

    if (successCallBack !== null) {
        errorCallBack = para;
        successCallBack = null
    }
    para = errorCallBack;

    while (1) {
        dbFlag = 0;
        if (this.$zkDef.switch) {
            console.log(global.localIp + '：zk--existZeroDBNode：' + para.nStep)
        }
        switch (para.nStep) {
            case 0:
            case 'parentNodeExist':  // 判断数据库节点是否建立
                tableName = [$zkDef.tableName_zkNode];
                field = [[$zkDef.id]];
                condition = [["path='/" + dbName + "'"]];
                hardTrans = null;
                dbData = {};
                para.arrFuncField = null;

                this.$db.hardDirectRecordQuery(this.dbName, tableName, condition, field, dbData, para.arrFuncField, hardTrans, function ($result) {
                    if (dbData[$zkDef.tableName_zkNode][$zkDef.id].length > 0) {
                        para.parentNodeId = dbData[$zkDef.tableName_zkNode][$zkDef.id][0];
                        para.nStep = 'nodeExist';
                    } else {
                        para.result = false;
                        para.nStep = 'end';
                    }

                    if (++dbFlag === 2) {
                        that.existZeroDBNode(dbName, successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'nodeExist': // 判断数据库中各个表节点是否建立
                tableName = [$zkDef.tableName_zkNode];
                field = [['id']];
                condition = [$zkDef.zkNode_parentNodeId + '=' + para.parentNodeId];
                dbData = {};
                let start = [0];
                let total = [1];
                let arrSort = [['id,asc']];
                let isGetSum = [false];

                this.$db.hardDirectMultiQuery(this.dbName, tableName, field, condition, start, total, arrSort, dbData, isGetSum, function () {
                    dbData[$zkDef.tableName_zkNode][$zkDef.id].length > 0 ? para.result = true : para.result = false;
                    para.nStep = 'end';
                    if (++dbFlag === 2) {
                        that.existZeroDBNode(dbName, successCallBack, errorCallBack)
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


ZKClient.prototype.validate = function (path) {
    if (!path || typeof path !== 'string') {
        return 'Node path must be a non-empty string';
    }

    if (path[0] !== '/') {
        return 'Node path must start with / character';
    }

    if (path === '/') {
        return 'Node path must not be /';
    }

    if (path[path.length - 1] === '/') {
        return 'Node path must not end with / character';
    }

    if (/\/\//.test(path)) {
        return 'Node path must not contain empty node name';
    }

    if (/\/\.(\.)?(\/|$)/.test(path)) {
        return 'Node path must not contain relative path(s)';
    }

    return false;
};


ZKClient.prototype.getServerIP = function (arrIp) {
    return arrIp || [global.localIp]
};


/*
* 将cmdIndex转化为字符串（目前上层对cmdIndex中的key暂不明确，这里先直接用json转，后续用对象中的value拼接）
* */
ZKClient.prototype.cmdIndexToString = function(cmdIndex) {
    return cmdIndex === null ? null : JSON.stringify(cmdIndex);
};


/*
* 将cmdIndex转化为对象（目前上层对cmdIndex中的key暂不明确，这里先直接用json转，后续把字符串解析成对象返回）
* */
ZKClient.prototype.cmdIndexToObject = function(cmdIndex) {
    return cmdIndex === null ? null : JSON.parse(cmdIndex);
};


function cmdCallbackExist(cmdId) {
    for (let key in ZKClient.$this.me.commitCmdObj) {
        let commitId = key;
        let uniqueObj = ZKClient.$this.me.commitCmdObj[key];
        for (let i = 0; i < uniqueObj.arrEntry.length; i++) {
            if (uniqueObj.arrEntry[i].cmdId === cmdId) {
                if (i === uniqueObj.arrEntry.length - 1) {
                    return {isFinal: true, commitId: commitId}
                } else {
                    return {isFinal: false, commitId: commitId}
                }
            }
        }
    }
    return false;
}


function isEntryError(cmdId) {
    for (let key in ZKClient.$this.me.commitCmdObj) {
        let uniqueObj = ZKClient.$this.me.commitCmdObj[key];
        for (let i = 0; i < uniqueObj.arrEntry.length; i++) {
            if (uniqueObj.arrEntry[i].cmdId === cmdId && uniqueObj.arrEntry[i].error) {
                return uniqueObj.arrEntry[i].error;
            }
        }
    }
    return false;
}


function writeEntryError(cmdId, error) {
    all:
        for (let key in ZKClient.$this.me.commitCmdObj) {
            let uniqueObj = ZKClient.$this.me.commitCmdObj[key];
            for (let i = 0; i < uniqueObj.arrEntry.length; i++) {
                if (uniqueObj.arrEntry[i].cmdId === cmdId) {
                    uniqueObj.arrEntry[i].error = error;
                    break all;
                }
            }
        }
}


// 获取唯一的命令id：type+cmdIndex+path + version
/*cmd = {
    arrEntry: [{
        type: 0,
        path: '/test',
        cmdIndex: 111,
        data: Buffer.from('kzt'),
        attrib: 'PERSISTENT',
        version: null,
        watchCallBack: null

    }],
    successCallBack: function() {},
    errorCallBack: function() {},
}*/
function getCmdId(entry) {
    if(entry.cmdIndex === null) {
        return entry.type + JSON.stringify(entry.cmdIndex) + entry.path + entry.version
    } else {
        return entry.type + entry.cmdIndex + entry.path + entry.version
    }

}


// 将zk实例暴露出去：
let $zerokeeper = new ZKClient();
ZKClient.$this = $zerokeeper;
module.exports = $zerokeeper;
