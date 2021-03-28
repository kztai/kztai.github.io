// 报名终端

function $$startGene() {
};
$$startGene.prototype.startGene = function(successCallBack, errorCallBack, asynCallBack) {
  let $this = this;
  let arrField = [$this.$mac.fd.pt_id, $this.$mac.fd.event.option];
  let arrValue = [$this.$geneObject.$gene, $this.$mac.enum1.event.option.start];
  let cacheResult = $this.$db.cacheColQueryMulti($this.$cloudDBName, $this.$mac.tb.event, arrField, "=", arrValue);
  let cachePointKey = cacheResult.table;
  let cacheNumber = cacheResult.arrNumber;
  let event = cachePointKey[$this.$mac.fd.id][cacheNumber[0]];
  cacheResult = $this.$db.cacheColQuery($this.$cloudDBName, $this.$mac.tb.action, $this.$mac.fd.pt_id, "=", event);
  cachePointKey = cacheResult.table;
  cacheNumber = cacheResult.arrNumber;
  let actionName;
  for (var i = 0; i < cacheNumber.length; i++) {
    if (cachePointKey[$this.$mac.fd.action.subeventportId][cacheNumber[i]] != null) {
      actionName = cachePointKey[$this.$mac.fd.action.actionName][cacheNumber[i]];
      break;
    }
  }
  $this.$actionRun('startGene', actionName,[], function(result) {
    successCallBack(result);
  }, function(error) {
    console.log(error);
    errorCallBack(error);
  }, function(result) {
    asynCallBack(result);
  });
};

function $$$event3() {//cancel
  var $this = this;

  /*事务变量初始化*/
  $this.$variable = {};
  $this.$variable.mobile = null;
};
$$$event3.prototype.$event3= function(successCallBack, errorCallBack) {
  let $this = this;

  $this.$actionRun('$event3','a1', [$this.$eventObject.$variable.mobile], function(result) {
    successCallBack(result);
  }, function(error) {
    errorCallBack(error);
  });
};
function $$$event4() {//register
  var $this = this;

  /*事务变量初始化*/
  $this.$variable = {};
  $this.$variable.customer = null;
};
$$$event4.prototype.$event4 = function(successCallBack, errorCallBack) {
    let $this = this;

    $this.$actionRun('$event4', 'a1', [$this.$eventObject.$variable.customer], function(result) {
        successCallBack(result);
    }, function(error) {
        errorCallBack(error);
    });
};


export default {
  $$startGene: $$startGene,
  $$$event3: $$$event3,
  $$$event4: $$$event4,
};
