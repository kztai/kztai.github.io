// 后台页面

let startGene = function(successCallBack, errorCallBack) {
  successCallBack();
};

let inviteIn = function(mobile, content, successCallBack, errorCallBack) {
  this.$apiDB.eventInput('inviteIn', [mobile, content], successCallBack, errorCallBack)
};


export default {
  startGene: startGene,
  inviteIn: inviteIn
};
