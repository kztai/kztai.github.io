const $mSystem = require(global.dbPath + "/db.sys.js");


function $GeneCtrl() {
}


$GeneCtrl.prototype.transEventCall = function ($geneAddr, $funcName, $funcPara, $instruct, $option, $successCallBack, $errorCallBack) {
    //定义变量
    var $this = this;
    var $result = null;
    var $instance = null;
    var $obj = null;
    var $func = null;
    var $callFuncPara = null;
    var $i = null;
    var $funcCallBack = null;


    var $instanceName = $geneAddr;


    //捕捉例外
    try {
        $obj = $mSystem.getFunc($instanceName, $funcName);

        $instance = $obj.instance;
        $func = $obj.func;


        if (!$instance || !$func) {
            $result = {};
            $result.code = "error";
            $result.message = "实例名或函数名不存在: " + $instanceName + "." + $funcName;
            $errorCallBack($result);
            return;
        }


        $funcPara.push($successCallBack);
        $funcPara.push($errorCallBack);

        $callFuncPara = $funcPara;

        $func.apply($instance, $callFuncPara);
    } catch ($error) {
        //重写返回结果，要不然，不能返回，奇怪
        $result = {};
        $result.code = "error";
        $result.message = $error.message;
        $errorCallBack($result);
    }
};


$GeneCtrl.prototype.getFuncCallBack_transEventCall = function ($successCallBack, $i) {
    //定义变量
    var $this = this;
    var $funcCallBack = null;
    var $obj = null;

    $funcCallBack = function ($result) {
        $obj = {};
        $obj.callbackIndex = $i;
        $obj.remoteResult = $result;
        $successCallBack($obj);
    };

    return $funcCallBack;
};


module.exports = $GeneCtrl;

