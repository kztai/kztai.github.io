let Raft = require('./raft');
let leader = Raft.prototype;

/**
 * 当选leader后，初始化
 * @param olderLeader
 */
leader.log_leader_become_leader_init = function (olderLeader) {
  // this.raise('sys', 'info', 'log_leader_become_leader_init: 当前服务器当选leader, term: '
  //   + this.term + ', time: ' + new Date().getTime());
  // 持久化leader数据
  this.zk_enduring_new_leader_info({leaderId: this.nodeId, validTerm: this.term}, () => {
  }, () => {
  });
  // 如果之前不是leader，则需要初始化
  if (olderLeader !== this.nodeId) {
    // 20210107
    this.minConsumeIndex = this.consumeIndex;
    // 初始化清除消费指针定时器？
    this.minConsumeIndexWait = this.consumeIndex;

    // 清除可能存在的待插入新日志
    this.clear_await_new_entry();
    this.init_nodes_index(); // 初始化回应指针、确认指针
  }
  this.select_bootjump_timer();
  if (this.is_blank_object(this.arrNodeNewCmd)) {
    // this.raise('met-test', 'trace', 'log_leader_become_leader_init-leader-1: 新leader无缓存日志，新增空白日志');
    let version = new Date().getTime();
    /**
     * 新增空白日志
     */
    let blankEntry = {
      type: '',
      cmdIndex: this.term,
      path: this.nodeId,
      version: version
    };
    let blankCMD = {
      commitId: this.nodeId + '-' + this.term,
      arrEntry: [blankEntry]
    };
    this.log_node_add_new_entry(blankCMD, () => {
    }, () => {
    })
  } else {
    // this.raise('met-test', 'trace', 'log_leader_become_leader_init-leader-2: 新leader有缓存日志，执行缓存日志');
    this.log_node_run_all_new_cmd();
  }
};

/**
 * leader新增日志
 * @param req 命令信息
 * {
 *   commitId: 命令id
 *   arrEntry: 日志数组
 *   sendNode： 发送日志节点
 * }
 * @param successCallBack
 * { 返回的参数
 *   lastIndex...
 *   exist 该参数，表示日志来自其他节点，值为首先发送的节点id 即nodeID
 * }
 * @param errorCallBack
 */
leader.log_leader_add_new_entry = function (req, successCallBack, errorCallBack) {
  if (this.state !== 'leader') {
    return
  }

  // 20210107
  this.log_leader_proc_clear_consume_index(req.consumeIndex);

  let res = {}, result = {};
  this.log_leader_get_sync_info(res);
  let oldLastIndex = res.lastIndex, oldLastTerm = res.lastTerm;

  this.log_leader_save_new_entry(req, result, (temResult) => {
    result = temResult;
  }, () => {
  });
  if (result.isExist) {
    let beforeStartIndex = result.arrIndex[0] - 1;
    res.lastIndex = beforeStartIndex;
    res.lastTerm = this.get_term(beforeStartIndex);
  }
  res.arrIndex = result.arrIndex;
  res.arrTerm = result.arrTerm;
  /**
   * 20200918
   * 解决fromNode未传递的bug
   */
  if (result.fromNode !== undefined) {
    res.fromNode = result.fromNode;
  }
  successCallBack(res);
  // this.raise('met-test', 'trace', 'log_leader_add_new_entry-leader-3: 收到日志');
  // 如果该日志包已经存在，则不需要同步
  if (!result.isExist) {
    // this.raise('met-test', 'trace', 'log_leader_add_new_entry-leader-4: 新日志，发同步');
    req.lastIndex = oldLastIndex;
    req.lastTerm = oldLastTerm;
    req.arrEntry = result.arrEntry;

    // 重置心跳
    // this.select_bootjump_timer_reset();
    if (this.nodeCount !== 1) {
      this.select_bootjump_timer_reset();
    }
    this.log_leader_sync_new_entry(req, this.log_leader_sync_new_entry_response, () => {
    });
  }
};

/**
 * 同步日志 / 心跳
 * @param oldReq
 * @param successCallBack
 * @param errorCallBack
 */
leader.log_leader_sync_new_entry = function (oldReq, successCallBack, errorCallBack) {
  if (this.state !== 'leader') {
    return
  }
  let req = {};
  this.log_leader_get_sync_info(req);
  let sendNode = null;
  req.arrEntry = [];
  if (oldReq) {
    req.arrEntry = oldReq.arrEntry;
    req.lastTerm = oldReq.lastTerm;
    req.lastIndex = oldReq.lastIndex;
    sendNode = oldReq.sendNode;
    // this.raise('sys-test', 'info', ['log_leader_sync_new_entry-1: 心跳 & 同步', req]);
  }
  // this.raise('met-test', 'trace', 'log_leader_sync_new_entry-leader-5: 心跳 & 同步');
  for (let i = 0; i < this.nodeCount; i++) {
    let nodeId = this.arrNode[i];
    if (this.nodeId === nodeId) {
      this.log_leader_clear_consume_index(this.minConsumeIndex);
      this.log_leader_proc_clear_consume_index(this.consumeIndex);
      // this.raise('met-test', 'trace', 'log_leader_sync_new_entry-leader-6: 回应leader自身');
      this.log_leader_proc_response_index(nodeId, req);
    }
    if (this.nodeId === nodeId || nodeId === sendNode) {
      continue
    }
    this.raft_call_remote(nodeId, 'log_follower_proc_new_entry', req, (res) => {
      // this.log_leader_sync_new_entry_response(nodeId, res, ()=>{}, ()=>{})
      // 成功回调即log_leader_sync_new_entry_response方法
      successCallBack(nodeId, res, () => {
      }, () => {
      });
    }, (error) => {
      // this.raise('sys-test', 'warn',
      //   'log_leader_sync_new_entry: 发送数据到【' + nodeId + '】失败');
      errorCallBack(error);
    })
  }
};

/**
 * 同步 / 心跳回复处理
 * @param node 回复的nodeId
 * @param res 回复信息
 * {
 *   term: follower任期
 *   startIndex: 对比的起始位置
 *   arrTerm: 需要对比的任期数组
 *   lastIndex: 最后索引
 *   confirmIndex: 确认索引
 * }
 * @param successCallBack
 * @param errorCallBack
 */
leader.log_leader_sync_new_entry_response = function (node, res, successCallBack, errorCallBack) {
  if (this.state !== 'leader' || !this.log_leader_proc_term(res)) {
    return
  }
  // 20210107
  if (res.procConsumeIndex === 1) {
    this.log_leader_proc_clear_consume_index(res.consumeIndex) // 此处与详细设计不一致 (me.consumeIndex)
  }

  // this.raise('sys-test', 'info', [
  //   'log_leader_sync_new_entry_response-1: 来自',
  //   node, '心跳 / 同步回应',
  //   ', res: ', res
  // ]);
  if (res.arrTerm && res.arrTerm.length > 0) {
    // this.raise('met-test', 'trace', 'log_leader_sync_new_entry_response-leader-7: 心跳 / 同步回应，有差异');
    this.log_leader_sync_old_entry(node, res, successCallBack, errorCallBack);
  } else {
    // this.raise('met-test', 'trace', 'log_leader_sync_new_entry_response-leader-8: 心跳 / 同步回应，无差异');
    this.log_leader_proc_response_index(node, res);
    successCallBack();
  }
};

/**
 * 同步旧日志
 * @param node
 * @param res
 * @param successCallBack
 * @param errorCallBack
 */
leader.log_leader_sync_old_entry = function (node, res, successCallBack, errorCallBack) {
  if (res.startIndex < this.clearIndex || this.state !== 'leader') return;
  let req = {};
  this.log_leader_get_sync_info(req); // 获取同步信息
  res.nodeId = node;
  this.log_leader_get_sync_old_entry_Info(res, req);
  // this.raise('met-test', 'trace',
  //   ['log_leader_sync_old_entry-leader-9: 回应【',
  //     node, '】差异, res: ', res, ', req: ', req]);
  // this.raise('sys-test', 'info', [
  //   'log_leader_sync_old_entry-1: 来自',
  //   node, '心跳 / 同步回应，有差异',
  //   ', res: ', res,
  //   ', 同步req: ', req
  // ]);
  this.raft_call_remote(node, 'log_follower_proc_old_entry', req, (result) => {
    this.log_leader_sync_old_entry_response(node, result, successCallBack, errorCallBack)
  }, () => {
  })
};

/**
 * 旧日志同步回复
 * @param node
 * @param res
 * @param successCallBack
 * @param errorCallBack
 */
leader.log_leader_sync_old_entry_response = function (node, res, successCallBack, errorCallBack) {
  if (this.state !== 'leader' || !this.log_leader_proc_term(res)) {
    return
  }
  // this.raise('met-test', 'trace', 'log_leader_sync_old_entry_response-leader-10: 旧日志回应');
  // this.raise('sys-test', 'info', [
  //   'log_leader_sync_old_entry_response-1: 来自',
  //   node, '旧日志同步回应',
  //   ', res: ', res,
  // ]);
  this.log_leader_proc_response_index(node, res);
  successCallBack();
};

/**
 * 处理指针
 * @param node
 * @param res
 */
leader.log_leader_proc_response_index = function (node, res) {
  if (this.state !== 'leader') return;
  // 更新node回应指针
  if (this.nodeCount === 1) { // bug-20200604：针对单个节点，首次启动时，首个命令包需要等到下一个命令才能消费的bug
    this.arrResponseIndex[node] = this.lastIndex;
  } else {
    if (!res.lastIndex || res.lastIndex)
    this.arrResponseIndex[node] = this.arrResponseIndex[node] > res.lastIndex
      ? this.arrResponseIndex[node] : res.lastIndex;
  }
  // 更新node确认指针
  this.arrConsumeIndex[node] = this.arrConsumeIndex[node] > res.confirmIndex
    ? this.arrConsumeIndex[node] : res.confirmIndex;
  this.log_leader_confirm_entry();
  // this.raise('met-test', 'trace', 'log_leader_proc_response_index-leader-11: 处理指针');
};

/**
 * 确认日志
 */
leader.log_leader_confirm_entry = function () {
  let req = {};
  this.log_leader_get_confirm_info(req);
  // this.raise('met-test', 'info',
  //   'log_leader_confirm_entry-leader-12: 消费日志，this.confirmIndex: ' +
  //   this.confirmIndex + ', req.confirmIndex: ' + req.confirmIndex);
  if (this.preConfirmIndex < req.confirmIndex) {
    this.log_get_min_confirm_index();
    req.clearIndex = this.clearIndex;
    /**
     * 消费日志
     * 有2个方案
     * 方案1：消费指针通过心跳(新日志同步)途径发送
     *  优点：通过心跳发送，可以及时补缺少的日志，让需要确认的信息更快被消费
     *  缺点：在确认频率大于心跳频率时，所需要发送的数据总体积会比较大
     * 方案2：消费指针通过专用途径发送，该途径应有专用途径触发leader同步缺失的日志
     *  优点：确认频率大于心跳频率时，数据总体积较小；
     *  缺点：确认频率小时，数据总体积较大，同时因该途径无心跳功能（维护权威、同步旧日志、更新清除指针），因此需要更频繁的远程通信
     */
    this.log_node_consume_entry(req, () => {
      // this.raise('met-test', 'trace', 'log_leader_confirm_entry-leader-13: 成功消费日志');
      // 成功回调
      this.log_leader_confirm_entry_response(this.nodeId, {confirmIndex: req.confirmIndex});
      // 重置心跳
      this.select_bootjump_timer_reset();
      this.log_leader_sync_new_entry(null, this.log_leader_sync_new_entry_response, () => {
      });
    }, () => {
    });
  }
};

leader.log_get_min_confirm_index = function () {
  let arrConfirmIndex = [];
  for (let i = 0; i < this.nodeCount; i++) {
    arrConfirmIndex.push(this.arrConsumeIndex[this.arrNode[i]]);
  }
  arrConfirmIndex.sort((a, b) => {
    return a - b
  });
  let minConfirmIndex = arrConfirmIndex[0];
  // this.raise('met-test', 'info',
  //   'log_get_min_confirm_index-leader-14: 更新清除指针, this.clearIndex: ' +
  //   this.clearIndex + ', minConfirmIndex: ' + minConfirmIndex);
  this.clearIndex = this.clearIndex > minConfirmIndex ? this.clearIndex : minConfirmIndex;
};

/**
 * 获取确认指针
 * @param req
 */
leader.log_leader_get_confirm_info = function (req) {
  req.confirmIndex = this.confirmIndex;
  let arrResponseIndex = [];
  for (let i = 0; i < this.nodeCount; i++) {
    arrResponseIndex.push(this.arrResponseIndex[this.arrNode[i]]);
  }
  arrResponseIndex.sort(function (a, b) {
    return a - b;
  });
  let nodeCount = this.nodeCount;
  let index = Math.floor(nodeCount / 2) + nodeCount % 2 - 1;
  let confirmIndex = arrResponseIndex[index];
  // this.raise('met-test', 'info',
  //   ['log_leader_get_confirm_info-leader-15: 获取新确认指针，arrResponseIndex: ',
  //     arrResponseIndex, ', new confirmIndex: ' + confirmIndex]);
  if (confirmIndex > this.confirmIndex) {
    req.confirmIndex = confirmIndex;
  }
};

/**
 * 处理确认指针
 * @param node
 * @param res
 */
leader.log_leader_confirm_entry_response = function (node, res) {
  this.arrConsumeIndex[node] = this.arrConsumeIndex[node] > res.confirmIndex
    ? this.arrConsumeIndex[node] : res.confirmIndex;
};

/**
 * 获取同步 & 心跳 信息
 * @param req
 */
leader.log_leader_get_sync_info = function (req) {
  req.leaderId = this.nodeId;
  req.term = this.term;
  req.clearIndex = this.clearIndex;
  req.confirmIndex = this.confirmIndex;
  // 20210107
  req.minConsumeIndex = this.minConsumeIndex;

  req.lastIndex = this.lastIndex;
  req.lastTerm = this.get_last_term();
};

/**
 * 获取要同步的旧日志信息
 * @param res 日志回复内容
 * {
 *   arrTerm
 *   nodeId
 *   startIndex
 * }
 * @param req
 */
leader.log_leader_get_sync_old_entry_Info = function (res, req) {
  let arrTerm = res.arrTerm.slice(0);
  let endIndex = res.startIndex + arrTerm.length - 1; // 获取需要同步的日志尾部索引
  let terms = [];
  for (let i = res.startIndex; i < res.startIndex + arrTerm.length; i++) {
    let entry = this.arrLog[i];
    let term = -1;
    if (entry) {
      term = entry.term;
    }
    terms.push(term);
  }
  let diffIndex = res.startIndex;
  for (let i = 0; i < terms.length; i++) {
    if (i !== 0) {
      diffIndex += 1;
    }
    if (arrTerm[i] !== terms[i]) {
      break;
    }
  }
  let arrEntry = [];
  // let nodeConfirmIndex = this.arrConsumeIndex[res.nodeId];
  // 如果差异索引小于清空索引, 则返回从清空索引开始的日志
  if (diffIndex < this.clearIndex) diffIndex = this.clearIndex;
  for (let i = diffIndex; i <= endIndex; i++) {
    let entry = this.arrLog[i];
    arrEntry.push(entry);
  }
  let temLastIndex = diffIndex - 1;
  let temLastTerm = this.get_term(temLastIndex);
  req.lastIndex = temLastIndex;
  req.lastTerm = temLastTerm;
  req.arrEntry = arrEntry;

  /**
   * 旧日志同步 打印信息
   */
  // if (this.arrAllowLogType.includes('met-test')) {
  //   this.raise('met-test', 'info',
  //     ['log_leader_get_sync_old_entry_Info-leader-16: 旧日志同步，差异源res: ', res]);
  //   this.raise('met-test', 'info',
  //     ['log_leader_get_sync_old_entry_Info-leader-17: 旧日志同步，结果req: ', req]);
  //   let temArrEntry = {};
  //   for (let i = res.startIndex; i < res.startIndex + arrTerm.length; i++) {
  //     temArrEntry[i] = this.arrLog[i];
  //   }
  //   this.raise('met-test', 'info',
  //     ['log_leader_get_sync_old_entry_Info-leader-18: 旧日志同步，日志: ', temArrEntry]);
  // }
};

/**
 * 保存来自node的新日志
 * @param req 命令信息
 * {
 *   commitId: 命令id
 *   arrEntry: 日志数组
 *   sendNode： 发送日志节点
 * }
 * @param res
 * {
 *   arrIndex: 日志索引数组
 *   arrTerm: 日志任期数组
 * }
 * @param successCallBack
 * @param errorCallBack
 */
leader.log_leader_save_new_entry = function (req, res, successCallBack, errorCallBack) {
  let arrEntry = req.arrEntry;
  res.arrIndex = [];
  res.arrTerm = [];
  /**
   * 20200918
   * 解决fromNode未传递的bug
   */
  let zeroEntry = arrEntry[0];
  /*
  这里隐藏了一个逻辑：
  同一个数据包中，只要有一个日志存在，则数据包的所有日志均存在
   */
  let zeroEntryIndex = this.get_entry_index(arrEntry[0]);
  if (zeroEntryIndex >= 0) {
    res.isExist = true;

    for (let i = 0; i < arrEntry.length; i++) {
      let index = this.get_entry_index(arrEntry[i]);
      let entry = this.arrLog[index];
      let term = entry.term;
      res.arrIndex.push(index);
      res.arrTerm.push(term);
    }
    /**
     * 20200918
     * 解决fromNode未传递的bug
     */
    // if (zeroEntry.cmdIndex === null) {
    if (zeroEntry.cmdIndex === null && zeroEntry.type === 2) { // 20210112 毛光华要求添加
      res.fromNode = this.arrLog[zeroEntryIndex].fromNode;
    }
    // this.raise('met-test', 'trace',
    //   'log_leader_get_sync_old_entry_Info-leader-19: 保存新日志，该日志已经存在');
    successCallBack(res);
  } else {
    // res.isExist = false;
    for (let n = 0; n < arrEntry.length; n++) {
      res.arrTerm.push(this.term);
      // this.lastIndex处是有日志存在的，因此是 + n + 1
      res.arrIndex.push(this.lastIndex + n + 1);
    }
    this.log_leader_db_save(arrEntry, (temArrEntry) => {
      let result = {};
      result.arrEntry = temArrEntry;
      result.isExist = false;
      result.arrTerm = res.arrTerm;
      result.arrIndex = res.arrIndex;
      // this.raise('met-test', 'trace',
      //   'log_leader_get_sync_old_entry_Info-leader-20: 保存新日志，该日志不存在，已保存');
      /**
       * 20200918
       * 解决fromNode未传递的bug
       */
      // if (zeroEntry.cmdIndex === null) {
      if (zeroEntry.cmdIndex === null && zeroEntry.type === 2) { // 20210112 毛光华要求添加
        result.fromNode = zeroEntry.fromNode;
      }
      successCallBack(result);
    }, errorCallBack);
  }
};

/**
 * leader写入新日志到内存 or 数据库
 * @param arrEntry
 * @param successCallBack
 * @param errorCallBack
 */
leader.log_leader_db_save = function (arrEntry, successCallBack, errorCallBack) {
  let state = this.check_log_length_state(this.lastIndex, arrEntry.length);
  if (state === 'error') {
    let error = {};
    error.code = 404;
    error.message = '日志超载';
    errorCallBack(error);
    return
  }
  // 此方法，在更新了index & term等数据后，调用log_follower_db_save方法
  for (let i = 0; i < arrEntry.length; i++) {
    // arrEntry[i].consume = false; // 消费状态 用不上
    // arrEntry[i].index = this.lastIndex + i; // 用不上
    this.lastIndex++;
    arrEntry[i].term = this.term;
    let entry = arrEntry[i];
    let logId = this.get_log_id(entry);
    this.arrLog[this.lastIndex] = entry;
    this.arrLogIndex[logId] = this.lastIndex;
  }
  // this.raise('met-test', 'trace',
  //   'log_leader_db_save-leader-21: 保存新日志');
  successCallBack(arrEntry);
};

/**
 * leader任期处理
 * @param req
 */
leader.log_leader_proc_term = function (req) {
  let req_term = req.term;
  if (req_term !== this.term) {
    if (this.term < req_term) {
      this.state = 'follower';
      this.select_bootjump_timer_close();
      this.select_selection_timer();
      // 20210107
      this.log_leader_close_clear_consume_index_timer();

      this.term = req_term;
      this.haveLeader = false;
    }
    return false
  } else {
    return true
  }
};

/**
 * 参考 zookeeper讨论_2020_10_13 作修改
 * 初始化消费指针, 最小消费指针
 * by pdr 20210107
 */

leader.log_leader_create_clear_consume_index_timer = function (consumeIndex) {
  let $this = this;
  let nTimeout = 1000*20;
  // let nTimeout = 1000; // 测试用
  this.m_nConsumeIndexTimerNo = setTimeout(function () {
    $this.minConsumeIndex = consumeIndex;
    $this.m_nConsumeIndexTimerNo = null;
  }, nTimeout)
};

leader.log_leader_close_clear_consume_index_timer = function () {
  if (this.m_nConsumeIndexTimerNo !== null) {
    clearTimeout(this.m_nConsumeIndexTimerNo);
    this.m_nConsumeIndexTimerNo = null;
  }
};

leader.log_leader_reset_clear_consume_index_timer = function (consumeIndex) {
  this.log_leader_close_clear_consume_index_timer();
  this.log_leader_create_clear_consume_index_timer(consumeIndex);
};

leader.log_leader_proc_clear_consume_index = function (consumeIndex) {
  if (consumeIndex > this.minConsumeIndex && consumeIndex > this.minConsumeIndexWait) {
    this.minConsumeIndexWait = consumeIndex;
    this.log_leader_reset_clear_consume_index_timer(consumeIndex)
  }
};

leader.log_leader_clear_consume_index = function (minConsumeIndex) {
  this.zk_clear_consume_by_minIndex(minConsumeIndex);
};


