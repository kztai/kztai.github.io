/**
 * raft入口函数
 * @param options
 * {
 *   arrIp: 所有节点对应IP & 端口
 *   arrNode: 所有节点的nodeId数组
 *   nodeId: 当前节点id
 * }
 * @constructor
 */
let Raft = function Raft(options) {
    this.options = options;

    // node获取新日志包
    this.log_node_add_new_entry = this.log_node_add_new_entry.bind(this);
    // 选举
    this.select_recv_requestvote_on = this.select_recv_requestvote_on.bind(this);
    this.select_recv_requestvote_response_on = this.select_recv_requestvote_response_on.bind(this);
    // node交互新日志
    this.log_leader_add_new_entry = this.log_leader_add_new_entry.bind(this);
    this.log_node_add_new_entry_response = this.log_node_add_new_entry_response.bind(this);
    // 新日志同步
    this.log_leader_sync_new_entry = this.log_leader_sync_new_entry.bind(this);
    this.log_leader_sync_new_entry_response = this.log_leader_sync_new_entry_response.bind(this);
    this.log_follower_proc_new_entry = this.log_follower_proc_new_entry.bind(this);
    // 旧日志同步
    this.log_leader_sync_old_entry = this.log_leader_sync_old_entry.bind(this);
    this.log_leader_sync_old_entry_response = this.log_leader_sync_old_entry_response.bind(this);
    this.log_follower_proc_old_entry = this.log_follower_proc_old_entry.bind(this);
};

let base = Raft.prototype;

/**
 * 初始化
 * @param successCallBack
 * @param errorCallBack
 */
base.raft_init = function (successCallBack, errorCallBack) {
    let options = this.options;
    this.options = null;

    // this.testTime = false;

    // 全局变量初始化
    this.raft_init_global_var(options);
    this.raise('sys-test', 'info', 'raft_init-1: 初始化方法');
    /**
     * 从zookeeper中读取数据
     */

    this.raise('sys-test', 'trace', '读取持久化数据前: ' + new Date().getTime());
    this.zk_sync_zk_node_to_log((res) => {
        // this.raise('sys-test', 'info', ['raft_init-2: 初始化方法，读取的数据, res: ', res]);
        this.currentLeader = !!res.leaderId ? res.leaderId : null;
        this.validTerm = !!res.validTerm ? res.validTerm : 0;
        this.term = this.term > this.validTerm ? this.term : this.validTerm;
        // this.arrLog = res.arrEntry;
        let isBlank = true;
        if (res.arrEntry instanceof Array) {
            for (let i = res.clearIndex; i <= res.confirmIndex; i++) {
                isBlank = false;
                let entry = res.arrEntry[i - res.clearIndex];
                // 删除日志中的索引
                if (entry.index || entry.index === 0) {
                    delete entry.index;
                }
                this.arrLog[i] = entry;
                let logId = this.get_log_id(entry);
                this.arrLogIndex[logId] = i;
            }
        } else {
            for (let index in res.arrEntry) {
                isBlank = false;
                let entry = res.arrEntry[index];
                // 删除日志中的索引
                if (entry.index || entry.index === 0) {
                    delete entry.index;
                }
                this.arrLog[index] = entry;
                let logId = this.get_log_id(entry);
                this.arrLogIndex[logId] = index;
            }
        }
        this.clearIndex = !!res.clearIndex ? res.clearIndex : 0;
        this.confirmIndex = !!res.confirmIndex ? res.confirmIndex : 0;
        /**
         * 当服务器刚开始启动便重启，这个时候刚好没有持久化日志
         * 返回的confirmIndex值可能是null，此时confirmIndex值应该从 -1记起
         */
        if (isBlank && this.clearIndex === 0) this.confirmIndex = -1;
        this.lastIndex = this.confirmIndex > this.lastIndex ? this.confirmIndex : this.lastIndex;

        this.raise('sys-test', 'trace', '成功读取持久化数据: ' + new Date().getTime());
        // 选举初始化
        this.select_selection_init();
        // 清除日志定时器
        this.log_timer_node_clear_consume_entry();
        successCallBack();
        this.zkInitOver = true;
        this.preConfirmIndex = this.preConfirmIndex >= this.confirmIndex ? this.preConfirmIndex : this.confirmIndex;
        this.raise('sys-test', 'info',
            ['raft_init-3: 成功从zookeeper中获取持久化数据：this.clearIndex: ' +
            this.clearIndex + ', this.confirmIndex: ' + this.confirmIndex + ', this.preConfirmIndex: ' + this.preConfirmIndex + ', this.arrLog', this.arrLogIndex]);
    }, () => {
        errorCallBack();
    });
};

/**
 * 初始化全局变量
 * @param options
 */
base.raft_init_global_var = function (options) {
    /**
     * zookeeper初始化标志
     */
    this.zkInitOver = false;
    /**
     * 针对消费日志的过程中，可能存在的重复消费bug
     * 在调用log_node_consume_entry方法前判断preConfirmIndex是否比需要更新的confirmIndex小，小则调用
     * preConfirmIndex在log_node_consume_entry方法中更新，更新后直接调用zk消费；
     * 读取zk持久化数据后还会再次确认值；
     */
    this.preConfirmIndex = -1; // 前确认索引，即已经调用zk消费的指针,
    /**
     * 选举部分
     */
    this.state = 'follower'; // 状态，有3种：follower \ candidate \ leader
    this.term = 0; // 任期；
    // this.lastLogTerm = 0; // 最新日志任期
    // this.lastLogIndex = 0; // 最新日志索引
    this.lastIndex = 0; // 最新日志索引
    this.lastTerm = 0; // 最新日志任期
    this.arrIp = options.arrIp ? options.arrIp : []; // 所有节点对应IP & 端口
    this.arrNode = options.arrNode ? options.arrNode : []; // 所有节点id数组
    this.nodeCount = this.arrNode.length; // 节点数目
    this.nodeId = options.nodeId ? options.nodeId : 'raft'; // 当前节点id
    this.votedTerm = 0; // 当前节点投票任期
    this.haveLeader = false; // 是否存在leader
    this.currentLeader = null; // 当前leader id
    this.validTerm = 0; // 有效任期
    this.voteCount = 0; // 节点投票数
    this.bootjumpTimer = null; // 心跳超时定时器
    this.selectionTimer = null; // 选举超时定时器
    // 心跳超时时间
    this.bootjumpTimerTimes =
        options.bootjumpTimerTimes ? options.bootjumpTimerTimes : 15;
    // 选举超时时间
    this.selectionTimeMin =
        options.selectionTimeMin ? options.selectionTimeMin : 200;
    /**
     * 针对服务器重启的部分
     */
    this.isRestart = true; // 是否重启
    if (options.isRestart === false) {
        this.isRestart = false;
    }
    this.restartCount = 0; // 重启节点数
    this.isLeaderAgree = false;
    this.restartVoteCount = 0;
    this.arrRestartNode = []; // 重启节点
    /**
     * 日志复制部分
     */
    this.arrLog = {}; // 日志对象，key为索引，value为日志内容
    this.arrLogIndex = {}; // 日志索引
    this.confirmIndex = -1; // 确认索引
    this.lastIndex = -1; // 最新日志索引号
    this.arrResponseIndex = {}; // 各服务器回应指针
    this.arrConsumeIndex = {}; // 各服务器消费指针
    this.ignoreNode = []; // 此次心跳需要跳过的服务器
    this.addNewNode = null; // 发送新日志的服务器

    this.arrNodeNewCmd = {}; // 缓存的命令
    this.arrNodeNewIndex = {};

    /**
     * 结构
     * @type {{}}
     * {
     *   lastIndex: {
     *     lastTerm: 最后日志索引
     *     arrEntry: [] 待写入的新日志
     *   }
     * }
     */
    this.arrNewEntry = {};

    /**
     * 清除指针定时器
     */
    this.clearConsumeEntryTimer = null;
    this.clearIndex = 0; // 清除索引
    this.startClearIndex = 0; // 清除指针起始位置
    this.clearEntryTimes = options.clearEntryTimes ? options.clearEntryTimes : 1000 * 1000; // 清除指针时间间隔

    /**
     * zookeeper方法
     */
    this.zk_sync_zk_node_to_log = options.zk_sync_zk_node_to_log;
    this.zk_consume_entry = options.zk_consume_entry;
    this.zk_enduring_new_leader_info = options.zk_enduring_new_leader_info;

    /**
     * 错误日志记录配置
     */
    this.logPath = options.logPath ? options.logPath : './logs/';
    let pattern = /\/$/i;
    if (!pattern.test(this.logPath)) {
        this.logPath = this.logPath + '/';
    }
    this.arrAllowLogType = options.arrAllowLogType ? options.arrAllowLogType : ['sys'];
    this.arrAllowLogLevel = options.arrAllowLogLevel ? options.arrAllowLogLevel : ['trace', 'debug', 'info', 'warn', 'error', 'fatal'];
    if (this.arrAllowLogType.length > 0) {
        this.raft_init_log4js();
    }
    this.raise('met-test', 'trace', '全局变量初始化');

    /**
     * 方案三全局变量
     * 1.投票时，如果有leader存在，则发送leader id；没有leader存在，则不发送leader id
     * 2.投票时，如果对其他服务器投了赞成票，则me.votedOther为真，记录投票任期me.votedOtherTerm；
     *  2.1me.votedOther在以下场景变更为假
     *    2.1.1该在初始化时
     *    2.1.2投其他服务器后，选举超时，统计有leader的服务器过半，me.votedOther为假；
     *    2.1.3成为新leader，me.votedOther为假；
     *    2.1.4接受某个leader时，me.votedOther为假；
     * 3.处理选票时，在me.votedOther为真的情况下，统计有leader的服务器，数目过半，则me.votedOther重置为false，记录最新的leader任期：me.lastLeaderTerm；
     *  3.1me.lastLeaderTerm在以下场景变更：
     *    3.1.1初始化时为0；
     *    3.1.2当选为leader，变更为当前任期；
     *    3.1.3接受新leader，变更为leader任期；
     *    3.1.4统计到过半服务器有leader，变更为有服务器的最新的任期
     * 4.在以下情况下，允许追认比自身任期更小的leader：
     *  4.1在me.votedOther为真时，leader任期大于等于me.votedOtherTerm且大于等于me.lastLeaderTerm
     *  4.2在me.votedOther为假时，leader任期大于等于me.lastLeaderTerm
     */
    this.votedOther = false;
    this.votedOtherTerm = 0;
    this.lastLeaderTerm = 0;
    this.haveLeaderNodeCount = 0;
};

base.raft_init_log4js = function () {
    // const log4js = require('log4js');
    // /**
    //  * sys级别运行日志配置
    //  */
    // log4js.configure({
    //   appenders: {
    //     out: {type: 'stdout'},
    //     sys: {
    //       type: 'dateFile',
    //       filename: this.logPath + 'sys-' + this.nodeId + '.log',
    //       keepFileExt: true,
    //       alwaysIncludePattern: true, // 是否带上日期尾缀
    //       maxLogSize: 20971520 // 文件大小 1MB = 1024 * 1024 B = 1048576 B
    //     },
    //     test_sys: {
    //       type: 'dateFile',
    //       filename: this.logPath + 'test-sys-' + this.nodeId + '.log',
    //       keepFileExt: true,
    //       alwaysIncludePattern: true, // 是否带上日期尾缀
    //       maxLogSize: 20971520 // 文件大小 1MB = 1024 * 1024 B
    //     },
    //     test_met: {
    //       type: 'dateFile',
    //       filename: this.logPath + 'test-met-' + this.nodeId + '.log',
    //       keepFileExt: true,
    //       alwaysIncludePattern: true, // 是否带上日期尾缀
    //       maxLogSize: 20971520 // 文件大小 1MB = 1024 * 1024 B
    //     }
    //   },
    //   categories: {
    //     default: {appenders: ['sys', 'out'], level: 'trace'},
    //     test_sys: {appenders: ['test_sys'], level: 'trace'},
    //     test_met: {appenders: ['test_met'], level: 'trace'}
    //   }
    // });
    // this.sysLog = log4js.getLogger();
    // this.sysTestLog = log4js.getLogger('test_sys');
    // this.metTestLog = log4js.getLogger('test_met');
};

/**
 * 报错方法
 * @param type
 * type 类型：
 *    sys： 系统故障
 *    met-test：方法测试（单元测试）
 *    sys-test：系统测试
 * @param level 有 fatal / error / warn / info / debug / trace
 * @param message
 */
base.raise = function (type, level, message) {
    if (!this.arrAllowLogType.includes(type) || !this.arrAllowLogLevel.includes(level)) return;
    if (message instanceof Array) {
        let str = '';
        for (let i = 0; i < message.length; i++) {
            if (typeof message[i] === 'object') {
                str += JSON.stringify(message[i]);
            } else {
                str += message[i];
            }
        }
        message = str;
    }
    console.log(type + ' - ' + level + ': ' + message);
    // let log;
    // switch (type) {
    //   case 'sys':
    //     log = this.sysLog;
    //     break;
    //   case 'sys-test':
    //     log = this.sysTestLog;
    //     break;
    //   case 'met-test':
    //     log = this.metTestLog;
    // }
    // log[level](message);
};

/**
 * 远程调用
 * @param target
 * @param type
 * @param data
 * @param success
 * @param error
 */
base.raft_call_remote = function (target, type, data, success, error) {
    const $mSystem = require(global.dbPath + "/db.sys.js");
    /**
     * 这里需要注意：当type为'log_leader_sync_new_entry_response'时，data已经是个array了，其他的均为object
     */
    let funcName = type;
    let funcPara;
    if (data instanceof Array) {
        funcPara = data
    } else {
        funcPara = [data];
    }
    let index = this.arrNode.indexOf(target);
    let remoteServer = this.arrIp[index];
    let instanceName = '$raft';
    let timeout = 0;
    let comm = $mSystem.getComm();

    comm.remoteCall_user(remoteServer, instanceName, funcName,
        funcPara, timeout, (result) => {
            success(result)
        }, (e) => {
            this.raise('sys-test', 'fatal', '远程调用失败，target node: ' + target + ', 目标方法: ' + type);
            error(e)
        }, (e) => {
            this.raise('sys-test', 'fatal', '远程调用失败，target node: ' + target + ', 目标方法: ' + type);
            error(e)
        });
};

/**
 * 判断对象是否为空
 * @param obj
 * @returns {boolean}
 */
base.is_blank_object = function (obj) {
    return JSON.stringify(obj) === '{}';
};

/**
 * 判断日志是否存在
 * @param entry
 * { 日志中的下列内容构成logId
 *   type
 *   cmdIndex
 *   path
 * }
 * @returns {boolean}
 */
base.is_log_exist = function (entry) {
    // let logId = entry.type + entry.cmdIndex + entry.path;
    let logId = this.get_log_id(entry);
    return !!(this.arrLogIndex[logId] || this.arrLogIndex[logId] === 0);
};

/**
 * 获取last term
 * @returns {number|number|*}
 */
base.get_last_term = function () {
    if (this.arrLog[this.lastIndex]) {
        return this.arrLog[this.lastIndex].term;
    } else {
        return -1;
    }
};

/**
 * 获取任期
 * @param index
 * @returns {number|number|*}
 */
base.get_term = function (index) {
    if (index < this.clearIndex) {
        return -1
    }
    if (this.arrLog[index]) {
        return this.arrLog[index].term;
    } else {
        return -1;
    }
};

/**
 * 获取日志索引
 * @param entry
 * @returns number
 */
base.get_entry_index = function (entry) {
    // let logId = entry.type + entry.cmdIndex + entry.path;
    let logId = this.get_log_id(entry);
    let index = this.arrLogIndex[logId];
    if (index || index === 0) {
        return index
    } else {
        return -1;
    }
};

/**
 * 获取logId
 * @param entry
 * @returns {*}
 */
base.get_log_id = function (entry) {
    return entry.type + entry.cmdIndex + entry.path + entry.version;
};

/**
 * 判断日志长度
 * @param lastIndex
 * @param logLength
 * @returns {string}
 */
base.check_log_length_state = function (lastIndex, logLength) {
    let state = 'well';
    /**
     * 判断是日志长度
     */
    let max = 9007199254740992;
    let warn = 9000000000000000;
    let maxIndex = max - logLength;
    let warnIndex = warn - logLength;
    if (lastIndex > maxIndex) {
        state = 'error';
        this.raise('sys', 'fatal', '日志超载');
    } else if (lastIndex > warnIndex) {
        this.raise('sys', 'warn', '日志临界满载');
        state = 'warn'
    }
    return state;
};

/**
 * 比较日志新旧
 * @param res
 */
base.check_log_legality = function (res) {
    let lastIndex = this.lastIndex, lastTerm = this.get_term(lastIndex);
    let res_lastIndex = res.lastIndex, res_lastTerm = res.lastTerm;
    if (lastIndex > res_lastIndex && res_lastTerm === this.get_term(res_lastIndex)) {
        return 'old' // 旧心跳
    } else if (lastIndex === res_lastIndex && lastTerm === res_lastTerm) {
        return 'eq'
    } else {
        return 'missing' // 缺失
    }
};

/**
 * 清除等待同步旧日志的新日志
 * 1.成为leader后需要清除;
 * 2.接收新leader时需要清除;
 */
base.clear_await_new_entry = function () {
    for (let key in this.arrNewEntry) {
        delete this.arrNewEntry[key]
    }
};

/**
 * 初始化各节点指针
 */
base.init_nodes_index = function () {
    for (let i = 0; i < this.nodeCount; i++) {
        let temNodeId = this.arrNode[i];
        let temClearIndex = -1;
        if (this.clearIndex) temClearIndex = this.clearIndex;
        this.arrResponseIndex[temNodeId] = temClearIndex;
        this.arrConsumeIndex[temNodeId] = temClearIndex;
    }
};

module.exports = Raft;
