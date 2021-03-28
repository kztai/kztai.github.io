var Raft = require('./raft');
var follower = Raft.prototype;

/**
 * 接收新日志 & 心跳
 * @param req
 * {
 *   term: 任期
 *   arrEntry: 日志数组
 *   lastIndex
 *   lastTerm
 *   confirmIndex
 *   clearIndex
 * }
 * @param successCallBack
 * @param errorCallBack
 * 输出 res
 * {
 *   term
 *   lastIndex
 *   confirmIndex
 *   startIndex: 比较日志的起始位置，无错则不发
 *   arrTerm: 无错则不发，有错则发任期号数组
 * }
 */
follower.log_follower_proc_new_entry = function(req, successCallBack, errorCallBack){
  /**
   * 如果没有完成初始化，则不返回信息
   */
  if(!this.zkInitOver) return;
  // this.raise('met-test', 'info',
  //   ['log_follower_proc_new_entry-follower-1: 收到心跳/新日志同步, req: ' , req]);
  if(!this.select_follower_proc_term(req)){
    return
  }
  let res = {};
  res.term = this.term;
  /**
   * result
   * {
   *   exist: 是否存在
   *   saveOk: 是否保存成功
   *   isError: 是否出错——当且仅当日志长度超限时会出错
   * }
   */
  let result;

  // 20210107
  this.log_leader_clear_consume_index(req.minConsumeIndex);
  res.consumeIndex = this.consumeIndex;
  res.procConsumeIndex = 1;
  // 心跳
  if(!req.arrEntry || req.arrEntry.length === 0){
    let logState = this.check_log_legality(req);
    if(logState === 'old'){
      result = {
        exist: true,
      }
    } else if(logState === 'eq'){
      result = {
        exist: false,
        isError: false,
        saveOk: true
      }
    } else {
      result = {
        exist: false,
        isError: false,
        saveOk: false
      }
    }
  } else {
    // this.raise('sys-test', 'info',
    //   ['log_follower_proc_new_entry-follower-1: 收到新日志同步, req: ' , req, ', this.lastIndex: ', this.lastIndex]);
    result = this.log_follower_add_new_entry(req);
  }
  res.lastIndex = this.lastIndex;
  res.confirmIndex = this.confirmIndex;
  // 过期心跳
  if(result.exist){
    // this.raise('met-test', 'trace',
    //   ['log_follower_proc_new_entry-follower-2: 日志存在，过期心跳, res: ', res]);
    successCallBack(res);
    return;
  }
  if(result.isError){
    errorCallBack(res);
    return;
  }
  // 是否成功保存日志 / 心跳
  if(result.saveOk){
    // this.raise('met-test', 'trace',
    //   'log_follower_proc_new_entry-follower-3: 心跳 / 已保存日志');
    this.log_follower_confirm_entry(req);
    res.lastIndex = this.lastIndex;
  } else {
    // /**
    //  * 如果没有完成初始化，则不返回信息
    //  */
    // if(!this.zkInitOver) return;
    this.arrNewEntry[req.lastIndex] = {
      lastTerm: req.lastTerm,
      arrEntry: req.arrEntry
    };
    // this.raise('met-test', 'trace',
    //   'log_follower_proc_new_entry-follower-4: 日志有差异');
    this.log_follower_get_old_entry(req, res);
  }
  res.confirmIndex = this.confirmIndex;
  successCallBack(res);
  if(result.saveOk && JSON.stringify(this.arrNodeNewCmd) !== '{}'){
    this.log_node_run_all_new_cmd();
  }
};

/**
 * 接收旧日志
 * @param req
 * @param successCallBack
 * @param errorCallBack
 */
follower.log_follower_proc_old_entry = function(req, successCallBack, errorCallBack){
  let oldLastIndex = req.lastIndex,
    oldLastTerm = req.lastTerm,
    oldArrEntry = req.arrEntry;

  let newLastIndex = oldLastIndex + oldArrEntry.length;
  let temObj = this.arrNewEntry[newLastIndex];
  // this.raise('sys-test', 'info', [
  //   'log_follower_proc_old_entry-1: 旧日志同步',
  //   ', res: ', req,
  //   ', newEntry: ', temObj,
  //   ', this.arrLogIndex: ' , this.arrLogIndex
  // ]);
  // 如果该缓存不存在 / 已经有新日志 / 非法任期 /
  if(!temObj || newLastIndex < this.lastIndex || !this.select_follower_proc_term(req)){
    return;
  }
  let newLastTerm = temObj.lastTerm, newArrEntry = temObj.arrEntry;
  let oldLastEntry = oldArrEntry[oldArrEntry.length - 1];
  let oldLastEntryTerm = oldLastEntry.term;
  // 查看日志任期是否匹配
  if(newLastTerm !== oldLastEntryTerm){
    return;
  }
  for (let i = 0; i < newArrEntry.length; i++){
    oldArrEntry.push(newArrEntry[i])
  }
  req.arrEntry = oldArrEntry;
  let result = this.log_follower_add_old_entry(req);
  // this.raise('met-test', 'trace',
  //   'log_follower_proc_old_entry-follower-5: 同步旧日志');
  if(result.saveOk){
    this.log_follower_confirm_entry(req);
    let res = {};
    res.term = this.term;
    res.lastIndex = this.lastIndex;
    res.confirmIndex = this.confirmIndex;
    successCallBack(res);
  } else {
    errorCallBack();
  }
};

/**
 * 获取确认指针后的日志任期数组
 * @param req
 * @param res
 * {
 *   startIndex: 比较日志的起始位置
 *   arrTerm: 日志发任期号数组
 * }
 */
follower.log_follower_get_old_entry = function(req, res){
  // 刚开始初始化的时候，confirmIndex = -1小于 clearIndex
  res.startIndex = this.confirmIndex >= this.clearIndex ? this.confirmIndex : this.clearIndex;
  let arrTerm = [];
  for(let i = res.startIndex; i <= req.lastIndex; i++){
    let term = this.get_term(i);
    arrTerm.push(term);
  }
  res.arrTerm = arrTerm;
  // this.raise('met-test', 'trace',
  //   'log_follower_get_old_entry-follower-6: 获取有差异的日志任期');
  // this.raise('sys-test', 'info',
  //   ['log_follower_get_old_entry-follower-1: 获取有差异的日志任期, res: ', res]);
};

/**
 * 保存日志
 * @param req
 * {
 *   term: 任期
 *   arrEntry: 日志数组
 *   lastIndex
 *   lastTerm
 *   confirmIndex
 *   clearIndex
 * }
 */
follower.log_follower_add_new_entry = function(req){
  if(req.clearIndex > this.clearIndex){
    this.clearIndex = req.clearIndex;
  }
  let arrEntry = req.arrEntry;
  let result = {};
  if(this.lastIndex > req.lastIndex){
    let finalLastIndex = req.lastIndex + arrEntry.length;
    let lastEntry = arrEntry[arrEntry.length - 1];
    let finalLastTerm = lastEntry.term;
    let thisTerm = this.get_term(finalLastIndex);
    // 比较日志是否已经存在
    if(this.clearIndex > finalLastIndex
      || (this.lastIndex >= finalLastIndex && finalLastTerm === thisTerm)){
      // this.raise('met-test', 'info',
      //   'log_follower_add_new_entry-follower-8: 新日志同步，日志已存在');
      // 存在
      result.exist = true;
      result.saveOk = true;
      return result
    } else {
      this.log_follower_delete_entry(req);
    }
  }
  result.exist = false;
  result.saveOk = false;
  let state;
  this.lastTerm = this.get_term(this.lastIndex);
  if(this.lastIndex === req.lastIndex && this.lastTerm === req.lastTerm){
    // this.raise('met-test', 'trace',
    //   'log_follower_add_new_entry-follower-9: 新日志同步，写入日志');
    state = this.log_follower_db_save(req);
    // 是否出错
    if(state === 'error'){
      result.isError = true
    } else {
      result.saveOk = true;
    }
    // result.saveOk = true;
    // result.exist = false;
  }
  // 如果该位置有缓存日志，且任期相等
  let lastIndex = this.lastIndex;
  let newArrEntry = this.arrNewEntry[lastIndex];
  if(result.saveOk && newArrEntry){
    let newLastTerm = newArrEntry.lastTerm;
    let lt = this.get_term(lastIndex);
    if(newLastTerm === lt){
      // this.raise('met-test', 'info',
      //     ['log_follower_add_new_entry-follower-9-1: 有需插入的缓存日志, newArrEntry: ', newArrEntry]);
      let temReq;
      temReq = newArrEntry;
      temReq.lastIndex = lastIndex;
      state = this.log_follower_db_save(temReq);
      delete this.arrNewEntry[lastIndex];
      // 是否出错
      if(state === 'error'){
        result.isError = true
      } else {
        result.saveOk = true;
      }
    }
  }
  return result
};

/**
 * 删除多于leader的日志
 * @param req
 */
follower.log_follower_delete_entry = function(req){
  for(let i = this.lastIndex; i > req.lastIndex; i--){
    let entry = this.arrLog[i];
    let logId = this.get_log_id(entry);
    delete this.arrLog[i];
    delete this.arrLogIndex[logId];
    this.lastIndex--
  }
  // this.raise('met-test', 'trace',
  //   'log_follower_delete_entry-follower-10: 删除多余日志');
};

/**
 * 保存日志
 * @param req
 */
follower.log_follower_db_save = function(req){
  let arrEntry = req.arrEntry;
  let state = this.check_log_length_state(req.lastIndex, arrEntry.length);
  if(state === 'error'){
    return state;
  }
  for(let i = 0; i < arrEntry.length; i++){
    let entry = arrEntry[i];
    let logId = this.get_log_id(entry);
    this.lastIndex++;
    this.arrLogIndex[logId] = this.lastIndex;
    this.arrLog[this.lastIndex] = entry;
  }
  // this.raise('met-test', 'trace',
  //   ['log_follower_db_save-follower-11: 写入日志, this.arrLogIndex: ', this.arrLogIndex]);
  return state
};

/**
 * 插入旧日志
 * @param req
 */
follower.log_follower_add_old_entry = function(req){
  if(req.clearIndex > this.clearIndex){
    this.clearIndex = req.clearIndex;
  }
  let result = {};
  result.saveOk = false;
  result.isError = false;
  let lastTerm = this.get_term(req.lastIndex);
  if(this.lastIndex >= req.lastIndex && lastTerm === req.lastTerm){
    // this.raise('met-test', 'trace',
    //   'log_follower_add_old_entry-follower-12: 写入旧日志');
    this.log_follower_delete_entry(req);
    let state = this.log_follower_db_save(req);
    result.saveOk = true;
    if(state === 'error'){
      result.isError = true;
      result.saveOk = false
    }
  }
  return result
};

/**
 * 消费日志，更新指针
 * @param req
 */
follower.log_follower_confirm_entry = function(req){
  // this.raise('met-test', 'trace',
  //   'log_follower_confirm_entry-follower-13: 消费-更新确认指针');
  this.isRestart = false;
  if(this.preConfirmIndex < req.confirmIndex && this.lastIndex >= req.confirmIndex){
    this.log_node_consume_entry(req, ()=>{
      this.confirmIndex = req.confirmIndex;
    }, ()=>{})
  }
};
