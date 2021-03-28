var Raft = require('./raft');
var node = Raft.prototype;

/**
 * 新增日志条目
 * @param req
 * {
 *   commitId: 命令包id
 *   arrEntry: 日志数组
 *   sendNode: 当前nodeId，有leader时添加
 * }
 * @param successCallBack
 * @param errorCallBack
 */
node.log_node_add_new_entry = function(req, successCallBack, errorCallBack){
  let arrEntry = req.arrEntry;
  let zeroEntry = arrEntry[0];
  this.raise('met-test', 'info',
      ['log_node_add_new_entry-node-0: 缓存新增日志, req: ', req]);
  // 如果是空日志包 / 日志存在
  if(!arrEntry || arrEntry.length === 0 || this.is_log_exist(zeroEntry)){
    /**
     * 20200917
     * 存在日志时
     * 当命令索引为null，且日志不是来自当前节点时，成功回调返回false，其他情况返回true
     */
    let zeroIndex = this.get_entry_index(zeroEntry);
    if(zeroEntry && zeroEntry.cmdIndex === null && this.arrLog[zeroIndex].fromNode !== this.nodeId){
      successCallBack(false)
    } else {
      successCallBack(true)
    }
    // successCallBack();
    this.raise('met-test', 'trace',
      'log_node_add_new_entry-node-1: 新增日志存在');
    return
  }
  /**
   * 20200917
   * 如果命令索引为null，则增加fromNode
   */
  if(zeroEntry.cmdIndex === null){
    for(let i = 0; i < arrEntry.length; i++){
      arrEntry[i].fromNode = this.nodeId;
    }
  }

  if(this.haveLeader){
    req.sendNode = this.nodeId;
    this.raise('met-test', 'info',
      'log_node_add_new_entry-node-2: 发送新增日志到leader');
    if(this.currentLeader === this.nodeId){
      this.log_leader_add_new_entry(req, (result)=>{
        this.log_node_add_new_entry_response(req, result, successCallBack, errorCallBack)
      }, ()=>{})
    } else {

      this.raft_call_remote(this.currentLeader, 'log_leader_add_new_entry', req, (result)=>{
        this.log_node_add_new_entry_response(req, result, successCallBack, errorCallBack)
      }, ()=>{})
    }
  } else {
    this.raise('met-test', 'trace',
      'log_node_add_new_entry-node-3: 缓存新增日志');
    this.log_node_save_new_cmd(req, successCallBack, errorCallBack)
  }

};

/**
 * 新增日志回复处理
 * @param req
 * {
 *   commitId
 *   arrEntry
 *   sendNode
 * }
 * @param res
 * {
 *   term
 *   leaderId
 *   confirmIndex
 *   clearIndex
 *   lastIndex
 *   lastTerm
 *   arrIndex
 *   arrTerm
 *   exist // 如果该日志是其他节点生成的，则带上其他节点id
 * }
 * @param successCallBack
 * @param errorCallBack
 */
node.log_node_add_new_entry_response = function(req, res, successCallBack, errorCallBack){
  /**
   * 20200917
   * 命令索引为null，且日志不是来自当前节点时，成功回调返回false，其他情况返回true
   */
  let successResult = true;
  if(this.clearIndex < res.clearIndex){
    this.clearIndex = res.clearIndex;
  }
  let zeroEntry = req.arrEntry[0];
  /**
   * 20200917
   */
  if(zeroEntry.cmdIndex === null && res.fromNode !== this.nodeId){
    successResult = false;
  }

  if(this.is_log_exist(zeroEntry) || this.currentLeader === this.nodeId){
    if(this.currentLeader !== this.nodeId){
      this.log_follower_confirm_entry(res);
    }
    res.commitId = req.commitId;
    successCallBack(successResult);
    return
  }
  let arrEntry = [];
  for(let i = 0; i < res.arrIndex.length; i++){
    let term = res.arrTerm[i];
    let entry = req.arrEntry[i];
    entry.term = term;
    if(res.fromNode !== undefined){
      entry.fromNode = res.fromNode
    }
    arrEntry.push(entry);
  }
  res.arrEntry = arrEntry;
  this.raise('met-test', 'trace',
    ['log_node_add_new_entry_response-node-4: 新增日志回应，合并日志，res: ', res]);
  this.log_follower_proc_new_entry(res, (result)=>{
    this.raft_call_remote(this.currentLeader, 'log_leader_sync_new_entry_response',
      [this.nodeId, result], (result2)=>{
      successCallBack(successResult);
      }, ()=>{})
  })
};

/**
 * 消费确认日志
 * @param req
 * @param successCallBack
 * @param errorCallBack
 */
node.log_node_consume_entry = function(req, successCallBack, errorCallBack){
  /**
   * 如果没有初始化完，则不消费
   */
  if(!this.zkInitOver){
    return
  }
  this.raise('sys-test', 'info',
    [
      'log_node_consume_entry-1: 消费-更新确认指针, ',
      'req: ', req,
      ', this.arrLogIndex: ', this.arrLogIndex]);

  this.preConfirmIndex = req.confirmIndex;

  this.zk_consume_entry(req, (res)=>{
    if(!res){
      res = {};
      res.confirmIndex = req.confirmIndex;
    }
    this.raise('sys-test', 'info',
      'log_node_consume_entry-2: 消费-消费完成');
    this.log_node_consume_entry_response(res, successCallBack, errorCallBack)
  }, errorCallBack)
};

/**
 * 消费日志的成功回调
 * @param res
 * @param successCallBack
 * @param errorCallBack
 */
node.log_node_consume_entry_response = function(res, successCallBack, errorCallBack){
  this.raise('met-test', 'trace',
    'log_node_consume_entry_response-node-5: 消费日志完成，confirmIndex: ' + res.confirmIndex);
  this.confirmIndex = res.confirmIndex;
  successCallBack();
};

/**
 * 清除日志定时器
 */
node.log_timer_node_clear_consume_entry = function(){
  if(this.clearConsumeEntryTimer){
    clearInterval(this.clearConsumeEntryTimer);
  }
  this.raise('met-test', 'trace',
    'log_timer_node_clear_consume_entry-node-6: 启动清除日志定时器');
  this.clearConsumeEntryTimer = setInterval(()=>{
    if(this.startClearIndex < this.clearIndex){
      this.log_node_clear_consume_entry();
    }
  }, this.clearEntryTimes);
};

/**
 * 清除日志
 */
node.log_node_clear_consume_entry = function(){
  for(let i = this.startClearIndex; i < this.clearIndex; i++){
    let entry = this.arrLog[this.startClearIndex];
    if(entry){
      let logId = this.get_log_id(entry);
      delete this.arrLog[this.startClearIndex];
      delete this.arrLogIndex[logId];
    }
    this.startClearIndex++;
  }
  this.raise('met-test', 'info',
    ['log_node_clear_consume_entry-node-7: 清除日志, this.arrLog: ',
    this.arrLog, ', this.arrLogIndex: ', this.arrLogIndex]);
};

/**
 * 从zookeeper接收新日志
 * @param req
 * @param successCallBack
 * @param errorCallBack
 */
node.log_node_save_new_cmd = function(req, successCallBack, errorCallBack){
  let commitId = req.commitId;
  this.raise('met-test', 'trace',
    'log_node_save_new_cmd-node-8: 缓存日志');
  if(!this.arrNodeNewCmd[commitId]){
    let newCmd = {};
    newCmd.arrEntry = req.arrEntry;
    newCmd.successBack = successCallBack;
    newCmd.errorBack = errorCallBack;
    this.arrNodeNewCmd[commitId] = newCmd;
  }
};

/**
 * 执行缓冲区日志
 */
node.log_node_run_all_new_cmd = function(){
  for(let commitId in this.arrNodeNewCmd){
    let newCmd = {};
    let temObj = this.arrNodeNewCmd[commitId];
    newCmd.commitId = commitId;
    newCmd.arrEntry = temObj.arrEntry;
    this.log_node_add_new_entry(newCmd, temObj.successBack, temObj.errorBack);
    delete this.arrNodeNewCmd[commitId];
  }
  this.raise('met-test', 'trace',
    ['log_node_run_all_new_cmd-node-9: 执行完缓存日志，this.arrNodeNewCmd: ', this.arrNodeNewCmd]);
};
