// 终端

function $$startGene() {
}

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

function $$$event1() {
  var $this = this;

  /*事务变量初始化*/
  $this.$variable = {};
  $this.$variable.mobileArr = null;
  $this.$variable.contentArr = null;
  $this.$variable.result = null;
};
$$$event1.prototype.$event1 = function(successCallBack, errorCallBack) {

  let $this = this;
  $this.$actionRun('$event1', 'a1', [$this.$eventObject.$variable.mobileArr,$this.$eventObject.$variable.contentArr], function(result) {
    successCallBack([$this.$eventObject.$variable.result]);
  }, function(error) {
    errorCallBack(error);
  });
};

export default {
  $$startGene: $$startGene,
  $$$event1: $$$event1,
};
