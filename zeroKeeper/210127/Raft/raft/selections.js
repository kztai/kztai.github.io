var Raft = require('./raft');
var selection = Raft.prototype;

selection.select_selection_init = function(){
  // if(this.currentLeader === this.nodeId){
  //   this.currentLeader = null;
  //   this.select_be_leader();
  // } else
  if(this.nodeCount === 1) {
    this.term = 1;
    this.state = 'leader';
    this.haveLeader = true;
    this.currentLeader = this.nodeId;
    this.zk_enduring_new_leader_info({leaderId: this.nodeId, validTerm: this.term}, ()=>{}, ()=>{});
    // this.raise('met-test', 'trace',
    //   'select_selection_init-select-1: 仅一台服务器，直接当选leader');
  } else {
    // 不要一开始就成为候选人
    // this.select_become_candidate(function(){}, function(){});
    // 安装选举定时器
    // this.raise('met-test', 'trace',
    //   'select_selection_init-select-1: 多台服务器，启动选举超时');
    this.select_selection_timer();
  }
};

/**
 * 选举超时
 */
selection.select_selection_timer = function(){
  // this.raise('met-test', 'trace',
  //   'select_selection_timer-select-2: 启动选举超时');
  // 已有选举超时定时器则清空重置
  if(this.selectionTimer) {
    clearTimeout(this.selectionTimer);
  }
  // let selection_time = this.selectionTimeMin + parseInt(Math.random() * this.bootjumpTimerTimes / 2);
  let selection_time = this.selectionTimeMin;
  let that = this;
  this.selectionTimer =
    setTimeout(function(){
      that.select_selection_timer_func();
    }, selection_time);
};

selection.select_selection_timer_reset = function(){
  // this.raise('met-test', 'trace',
  //   'select_selection_timer_reset-select-3: 重置选举超时');
  if(this.selectionTimer) {
    clearTimeout(this.selectionTimer);
  }
  let that = this;
  if(this.state !== 'leader'){
    let selection_time = this.selectionTimeMin + parseInt(Math.random() * this.bootjumpTimerTimes / 2);
    this.selectionTimer =
      setTimeout(function(){
        that.select_selection_timer_func();
      }, selection_time);
  }
};

selection.select_selection_timer_func = function(){
  this.select_selection_timer_reset();
  if(this.state !== 'leader'){
    this.select_become_candidate(function(){},function(){});
  }
};

selection.select_selection_timer_close = function(){
  // this.raise('met-test', 'trace',
  //   'select_selection_timer_close-select-4: 关闭选举超时');
  if(this.selectionTimer){
    clearTimeout(this.selectionTimer);
    this.selectionTimer = null;
  }
};

/**
 * 选举函数
 * @param successCallBack 成功回调
 * @param errorCallBack 失败回调
 */
selection.select_become_candidate = function(successCallBack, errorCallBack){
  /**
   * 如果没有初始化完成，则重置选举超时定时器，并退出
   */
  if(!this.zkInitOver){
    this.select_selection_timer_reset();
    return;
  }
  // this.raise('sys', 'trace', '开始选举：' + new Date().getTime());
  this.haveLeader = false;
  this.term++; // 自增任期号
  this.votedTerm = this.term; // 当前任期投票了
  this.voteCount = 1; // 重置选票
  // this.voteCount++; // 给自己投票
  this.state = 'candidate'; // 变更状态

  // 重启服务器 全局变量
  this.restartCount = 0;
  // 如果当前节点是原leader，则直接leader agree
  this.isLeaderAgree = this.currentLeader === this.nodeId;
  this.restartVoteCount = 0;
  this.arrRestartNode = [];
  /**
   * 如果当前服务器重启
   */
  if(this.isRestart){
    this.voteCount = 0;
    this.restartCount = 1;
    this.restartVoteCount = 1;
  }
  /**
   * 方案三
   */
  this.haveLeaderNodeCount = 0;

  // this.raise('met-test', 'trace',
  //   'select_become_candidate-select-5: 成为候选人');
  // this.raise('sys-test', 'info',
  //   [
  //       'select_become_candidate-select-1: 成为候选人',
  //       ', this.term: ', this.term
  //   ]);
  let arrNode = this.arrNode;
  let req = this.select_get_send_vote();
  for(let i = 0; i < arrNode.length; i++){
    if(arrNode[i] !== this.nodeId){
      // 发送投票请求
      this.raft_call_remote(
        arrNode[i],
        'select_recv_requestvote_on',
        req,
        (res)=>{
          // 新增回复nodeId
          res.nodeId = arrNode[i];
          this.select_recv_requestvote_response_on(res);
        },
        errorCallBack
      );
    }
  }
  successCallBack()
};

/**
 * 初始化投票请求信息 RPC
 * send:
 * {
 *     term // 候选人任期号
 *     candidateId // 候选人id
 *     lastIndex // 候选人最后日志条目的索引值
 *     lastTerm // 候选人最后日志条目的任期号
 * }
 */
selection.select_get_send_vote = function(){
  let send = {};
  send.term = this.term;
  send.candidateId = this.nodeId;
  send.lastIndex = this.lastIndex;
  send.lastTerm = this.get_last_term();
  // this.raise('met-test', 'trace',
  //   ['select_get_send_vote-select-6: 选票信息: ', send]);
  return send
};

/**
 * 处理投票请求消息
 * 返回消息数据结构
 * {
 *     term 当前任期号
 *     nodeId 当前服务器id
 *     voteGranted 是否投票
 *     leader 当前服务器有认为有leader时，为当前服务器leaderid，否则为空
 *     isRestart 当前服务器是否重启，如果重启则为true(发送)，否则为false(不发送)
 *     validTerm 当前服务器有效任期(当投赞成票时发送)
 * }
 * @param req 投票请求RPC
 * @param successCallBack
 * @param errorCallBack
 */
selection.select_recv_requestvote_on = function(req, successCallBack, errorCallBack){
  // this.raise('sys-test', 'info', ['select_recv_requestvote_on-1: 处理投票请求, req: ', req]);
  let res = {};
  if(this.isRestart){
    res.isRestart = this.isRestart; // 是否重启
  }
  res.nodeId = this.nodeId;
  if(this.haveLeader){
    res.leader = this.currentLeader;
  }
  let curtLastIndex, curLastTerm;
  let req_lastIndex = req.lastIndex,
    req_lastTerm = req.lastTerm;
  curtLastIndex = this.lastIndex;
  curLastTerm = this.get_last_term();
  let req_term = req.term;
  // this.raise('sys-test', 'info', [
  //     'select_recv_requestvote_on-1-1: 处理投票请求',
  //   ', this.term: ', this.term,
  //   ', this.lastIndex: ', curtLastIndex,
  //   ', this.lastTerm: ', curLastTerm,
  //   ', this.votedTerm: ', this.votedTerm,
  //   ', this.haveLeader: ', this.haveLeader,
  // ]);
  if(this.haveLeader){
    // res.currentLeader = this.currentLeader;
    res.voteGranted = false;
  } else if(req_term < this.term) {
    res.voteGranted = false
  } else if(req_term === this.term){
    if(this.votedTerm < req_term){
      res.voteGranted = req_lastIndex >= curtLastIndex &&
        req_lastTerm >= curLastTerm;

      this.state = 'follower';
    } else {
      res.voteGranted = false
    }
  } else {
    if(this.state !== 'follower'){
      this.state = 'follower';
      this.voteCount = 0;
    }
    this.term = req_term;
    res.voteGranted = req_lastIndex >= curtLastIndex &&
      req_lastTerm >= curLastTerm;
  }
  /**
   * 如果没有完成初始化，则一律投反对票
   */
  if(!this.zkInitOver){
    res.voteGranted = false;
  }

  res.term = this.term;
  if(res.voteGranted){
    this.votedTerm = req_term;
    /**
     * 方案三
     */
    this.votedOther = true;
    this.votedOtherTerm = this.term;
    /**
     * 方案四
     */
    this.select_selection_timer_reset();
    if(this.isRestart){
      res.validTerm = this.validTerm;
    }
  }
  // this.raise('met-test', 'trace',
  //   'select_recv_requestvote_on-select-7: 收到投票请求');
  // this.raise('sys-test', 'info', [
  //   'select_recv_requestvote_on-2: 处理投票请求,',
  //   ' res: ', res,
  //   ', this.arrLogIndex: ', this.arrLogIndex
  // ]);
  successCallBack(res);
};

/**
 * 选举回复监听器
 * 选票过半则当选
 * 未过半，不用更改或回退任期号
 * 因为，服务器如果可以接收leader心跳或信息，那么为follower状态，会直接投反对票；
 * 如果超时，则在接收到最先超时的投票请求时，会更新自己的任期到最新的任期；
 * 不会影响到选举
 * @param res
 * res数据结构：
 * {
 *     term: 1, // 当前任期号，以便于候选人去更新自己的任期号
 *     nodeId: 投票服务器id
 *     voteGranted: true, // 是否投票
 *     leader: null, // 当前领导人id
 *     validTerm: 有效任期
 *     isRestart
 * }
 */
selection.select_recv_requestvote_response_on = function(res){
  if(this.state !== 'candidate') {
    return;
  }
  let res_term = res.term; // 通过axios返回的数据，数值可能会为字符串
  // this.raise('sys-test', 'info', [
  //   'select_recv_requestvote_response_on-1: 处理选票,',
  //   ' res: ', res
  // ]);
  // this.raise('met-test', 'trace',
  //   ['select_recv_requestvote_response_on-select-8: 收到投票，投票内容：', res]);
  /**
   * 方案三
   */
  if(this.votedOther && res.leader){
    this.lastLeaderTerm = this.lastLeaderTerm >= res.term ? this.lastLeaderTerm : res.term;
    this.haveLeaderNodeCount++;
    if(this.haveLeaderNodeCount > this.nodeCount / 2){
      this.votedOther = false;
    }
  }
  if(res.voteGranted && res_term === this.validTerm){
    this.isLeaderAgree = !!(this.isLeaderAgree || this.currentLeader === res.nodeId);
  }
  if(res.isRestart && !this.arrRestartNode.includes(res.nodeId)){
    this.arrRestartNode.push(res.nodeId);
    this.restartCount++;
    // 无 leader 同意，且重启过半
    if(!this.isLeaderAgree && this.restartCount > this.nodeCount / 2){
      // this.raise('sys', 'fatal', 'select_recv_requestvote_response_on: 服务器重启数目过半');
      return
    }
  }
  if(res_term > this.term){
    this.state = 'follower';
    this.term = res_term;
    this.voteCount = 0;
    // this.raise('met-test', 'trace',
    //   'select_recv_requestvote_response_on-select-10: 投票任期更大，变更为follower');
  } else if(res_term === this.term){
    if(res.voteGranted){
      if(res.isRestart && this.validTerm >= res.validTerm){
        this.restartVoteCount++;
      } else if(!res.isRestart){
        this.voteCount++;
      }
      let votes = this.isLeaderAgree ? this.voteCount + this.restartVoteCount : this.voteCount;
      if(votes >  this.nodeCount / 2){
        // this.raise('met-test', 'trace',
        //   'select_recv_requestvote_response_on-select-11: 选票过半');
        // this.raise('sys-test', 'info', [
        //   'select_recv_requestvote_response_on-2: 选票过半，当选leader,',
        //   ' restartVoteCount: ', this.restartVoteCount,
        //   ', voteCount: ', this.voteCount,
        //   ', isLeaderAgree', this.isLeaderAgree
        // ]);
        this.select_be_leader()
      }
    }
  }
};

/**
 * 选票过半，成为leader
 */
selection.select_be_leader = function(){
  /**
   * 如果该节点重启过，则需要配置各节点回应指针与确认指针;
   */
  if(this.isRestart){
    this.init_nodes_index();
  }
  /**
   * 方案三
   */
  this.votedOther = false;
  this.lastLeaderTerm = this.term;

  this.isLeaderAgree = false;
  this.restartVoteCount = 0;
  this.restartCount = 0;
  this.isRestart = false;
  this.arrRestartNode = [];

  let oldLeader = this.currentLeader;
  this.validTerm = this.term;
  this.state = 'leader';
  this.voteCount = 0;
  this.haveLeader = true;
  this.currentLeader = this.nodeId;
  this.select_selection_timer_close();
  this.log_leader_become_leader_init(oldLeader);
};

/**
 * 处理任期: 心跳 / 新旧日志同步
 * @param req 心跳数据
 */
selection.select_follower_proc_term = function(req){
  /**
   * 未持久化结束，不接受心跳 / 新旧日志同步
   */
  if(!this.zkInitOver) return false;

  let r_term = req.term, leaderId = req.leaderId;

  if(this.term > r_term){
    /**
     * 方案三
     */
    if((this.votedOther && r_term >= this.votedOtherTerm && r_term >= this.lastLeaderTerm)
      || (!this.votedOther && r_term >= this.lastLeaderTerm)){
        // this.raise('met-test', 'trace',
        //   'select_follower_proc_term-select-12: 追认leader');
        this.accept_leader(leaderId, r_term);
        return true;
    } else {
      return false;
    }
  } else if(this.term === r_term){
    // this.raise('met-test', 'trace',
    //   'select_follower_proc_term-select-13: 认可leader');
    this.accept_leader(leaderId, r_term);
    return true;
  } else {
    // this.raise('met-test', 'trace',
    //   'select_follower_proc_term-select-14: 认可新leader');
    // 如果是领导人，则关闭心跳定时器
    if(this.state === 'leader'){
      this.select_bootjump_timer_close();
    }
    // 接受leader
    this.accept_leader(leaderId, r_term);
    return true;
  }
};

/**
 * 认可-接受 leader
 * @param leaderId
 * @param term
 */
selection.accept_leader = function (leaderId, term) {
  /**
   * 方案三
   */
  this.votedOther = false;
  this.lastLeaderTerm = term;

  if(this.validTerm < term){ // 接受新leader
    // 信息
    // this.raise('sys', 'info', '服务器【' + leaderId +'】当选leader, term: ' + term);
    // this.raise('met-test', 'trace',
    //   'accept_leader-select-15: 新leader，持久化新leader信息');
    // 持久化新leader信息
    this.zk_enduring_new_leader_info({leaderId: leaderId, validTerm: term},()=>{},()=>{});
    // 清除可能存在的待插入新日志
    this.clear_await_new_entry();
  }
  // 复位定时器
  this.select_selection_timer_reset();
  this.currentLeader = leaderId;
  this.term = term;
  this.validTerm = term;
  this.votedTerm = term;
  this.state = 'follower';
  this.haveLeader = true;
  this.arrRestartNode = [];
};

/**
 * 启动心跳计时器
 */
selection.select_bootjump_timer = function(){
  // this.raise('met-test', 'trace',
  //   'select_bootjump_timer-select-16: 启动心跳超时');
  if(this.bootjumpTimer){
    clearInterval(this.bootjumpTimer)
  }
  this.bootjumpTimer = setInterval(()=>{
    this.log_leader_sync_new_entry(null, this.log_leader_sync_new_entry_response, ()=>{})
  }, this.bootjumpTimerTimes)
};

/**
 * 重置心跳计时器
 */
selection.select_bootjump_timer_reset = function(){
  // this.raise('met-test', 'trace',
  //   'select_bootjump_timer-select-17: 重置心跳超时');
  this.select_bootjump_timer();
};

/**
 * 关闭心跳
 */
selection.select_bootjump_timer_close = function () {
  // this.raise('met-test', 'trace',
  //   'select_bootjump_timer_close-select-18: 关闭心跳超时');
  if(this.bootjumpTimer){
    clearInterval(this.bootjumpTimer);
    this.bootjumpTimer = null;
  }
};

