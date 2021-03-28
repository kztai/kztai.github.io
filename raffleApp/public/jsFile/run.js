//事务输入API函数
$CGeneAction.prototype.$eventInput = function(portName, arrPara, successCallBack, errorCallBack) {
    var $this = this;
    var cacheResult, cachePointKey, cacheNumber, arrField, arrValue;
    var fnname = "$CGeneAction.prototype.$eventInput";
    if (successCallBack !== null) {
        errorCallBack = $this.$setPara(successCallBack, errorCallBack);
        successCallBack = null;
    }
    var para = errorCallBack;
    var dbFlag = 0;
    while (1) {
        dbFlag = 0;
        if ($this.$debugFlag) {
            console.log(fnname + ": para.nStep = " + para.nStep);
        }
        switch (para.nStep) {
            case 0:
            case "eventPortQuery":
                //获取事件接口名为eventPortName对应eventPort
                arrField = [$this.$mac.fd.pt_id, $this.$mac.fd.eventPort.eventportName];
                arrValue = [$this.$geneObject.$gene, portName];
                cacheResult = $this.$db.cacheColQueryMulti($this.$cloudDBName, $this.$mac.tb.eventPort, arrField, "=", arrValue);
                cachePointKey = cacheResult.table;
                cacheNumber = cacheResult.arrNumber;
                if (cachePointKey[$this.$mac.fd.eventPort.type][cacheNumber[0]] === $this.$mac.enum1.eventPort.type.in) {//输入
                    para.eventPortPara = cachePointKey[$this.$mac.fd.eventPort.para][cacheNumber[0]];
                    para.eventPort = cachePointKey[$this.$mac.fd.id][cacheNumber[0]];
                    para.nStep = "$eventRunInputSub";
                } else {//输出
                    para.error = {
                        code: "eventPortNameNotOutputPort",
                        message: "事务接口" + portName + "不是输入口"
                    };
                    para.nStep = "errorEnd";
                }
                dbFlag++;
                break;
            case "$eventRunInputSub":
                //调用事务运行输入子函数
                $this.$eventRunInputSub(para.eventPort, arrPara, function(result) {
                    para.result = result.arrPara;
                    if(result.arrPara){
                        let j = 0;
                        for (var i = 0; i < para.eventPortPara['port_type'].length; i++) {
                            if (para.eventPortPara["port_type"][i] === $this.$mac.enum1.event.para.portType.out) {
                                $this.$eventObject.$variable[para.eventPortPara["name"][i]] = result.arrPara[j];
                                j++;
                            }
                        }
                    }
                    para.nStep = "end";
                    if (++dbFlag === 2) {
                        $this.$eventInput(portName, arrPara, successCallBack, errorCallBack);
                    }
                }, function(error) {
                    para.error = error;
                    para.nStep = "errorEnd";
                    if (++dbFlag === 2) {
                        $this.$eventInput(portName, arrPara, successCallBack, errorCallBack);
                    }
                });
                break;
            case "end":
                para.successCallBack(para.result);
                break;
            case "errorEnd":
                para.errorCallBack(para.error);
                return;
        }
        if (++dbFlag === 1) {
            return;
        }
    }
};

//事务拉取API函数
$CGeneAction.prototype.$eventPull = function(subPortName, arrPara, successCallBack, errorCallBack) {
    var $this = this;
    var cacheResult, cachePointKey, cacheNumber, arrField, arrValue;
    var fnname = "$CGeneAction.prototype.$eventPull";
    if (successCallBack !== null) {
        errorCallBack = $this.$setPara(successCallBack, errorCallBack);
        successCallBack = null;
    }
    var para = errorCallBack;
    var dbFlag = 0;
    while (1) {
        dbFlag = 0;
        if ($this.$debugFlag) {
            console.log(fnname + ": para.nStep = " + para.nStep);
        }
        switch (para.nStep) {
            case 0:
            case "getAllSubGene":
                cacheResult = $this.$db.cacheColQuery($this.$cloudDBName, $this.$mac.tb.subGene, $this.$mac.fd.pt_id, "=", $this.$geneObject.$gene);
                cachePointKey = cacheResult.table;
                cacheNumber = cacheResult.arrNumber;
                para.allSubGene = [];
                cacheNumber.forEach(function(val, index) {
                    para.allSubGene.push(cachePointKey[$this.$mac.fd.id][val]);
                });
                para.nStep = "getSubEventPort";
                dbFlag++;
                break;
            case "getSubEventPort":
                //instruct,event相同的eventLog是否存在
                arrField = [$this.$mac.fd.pt_id, $this.$mac.fd.subEventPort.eventportName];
                arrValue = [para.allSubGene, [subPortName]];
                cacheResult = $this.$db.cacheColQueryMultiArray($this.$cloudDBName, $this.$mac.tb.subEventPort, arrField, "=", arrValue);
                cachePointKey = cacheResult.table;
                cacheNumber = cacheResult.arrNumber;
                para.subEventPortPara = cachePointKey[$this.$mac.fd.subEventPort.para][cacheNumber[0]];
                para.subEventPort = cachePointKey[$this.$mac.fd.id][cacheNumber[0]];
                para.nStep = "$eventRunPullSub";
                dbFlag++;
                break;
            case "$eventRunPullSub":
                //调用事务执行子函数
                $this.$eventRunPullSub(para.subEventPort, arrPara, function(result) {
                    para.result = result.arrPara;
                    if(result.arrPara){
                        let j = 0;
                        for (var i = 0; i < para.subEventPortPara['port_type'].length; i++) {
                            if (para.subEventPortPara["port_type"][i] === $this.$mac.enum1.event.para.portType.out) {
                                $this.$eventObject.$variable[para.subEventPortPara["name"][i]] = result.arrPara[j];
                                j++;
                            }
                        }
                    }
                    para.nStep = "end";
                    if (++dbFlag === 2) {
                        $this.$eventPull(subPortName, arrPara, successCallBack, errorCallBack);
                    }
                }, function(error) {
                    para.error = error;
                    para.nStep = "errorEnd";
                    if (++dbFlag === 2) {
                        $this.$eventPull(subPortName, arrPara, successCallBack, errorCallBack);
                    }
                });
                break;
            case "end":
                para.successCallBack(para.result);
                break;
            case "errorEnd":
                para.errorCallBack(para.error);
                return;
        }
        if (++dbFlag === 1) {
            return;
        }
    }
};

//事务运行子函数
$CGeneAction.prototype.$eventRunSub = function(event, instruct, arrPara, command, successCallBack, errorCallBack) {
    var $this = this;
    var dbData;
    var cacheResult, cachePointKey, cacheNumber, arrField, arrValue;
    var fnname = "$CGeneAction.prototype.$eventRunSub";
    if (successCallBack !== null) {
        errorCallBack = $this.$setPara(successCallBack, errorCallBack);
        successCallBack = null;
    }
    var para = errorCallBack;
    var dbFlag = 0;
    while (1) {
        dbFlag = 0;
        if ($this.$debugFlag) {
            console.log(fnname + ": para.nStep = " + para.nStep);
        }
        switch (para.nStep) {
            case 0:
                para.instruct = JSON.parse(JSON.stringify(instruct));
            case "eventRead":
                cacheResult = $this.$db.cacheColRead($this.$cloudDBName, $this.$mac.tb.event, event);
                cachePointKey = cacheResult.table;
                cacheNumber = cacheResult.number;
                para.eventName = cachePointKey[$this.$mac.fd.event.eventName][cacheNumber];
                if (cachePointKey[$this.$mac.fd.event.runType][cacheNumber] === $this.$mac.enum1.event.runType.synch||
                    cachePointKey[$this.$mac.fd.event.runType][cacheNumber]===null) {//同步
                    para.nStep = "syncEventRun";
                } else {//异步
                    if(para.instruct.eventLog === null){
                        //把instruct{index,number}赋值给index{geneAddr,actionLog,number}
                        para.index = {
                            geneAddr: para.instruct.index.geneAddr,
                            actionLog: para.instruct.index.actionLog,
                            number: para.instruct.number
                        }
                        para.instruct = null;
                    }else{
                        para.index = {
                            geneAddr: para.instruct.geneAddr,
                            actionLog: para.instruct.actionLog,
                            number: 0
                        }
                    }
                    para.nStep = "dataTransOpen";
                }
                dbFlag++;
                break;
            case "syncEventRun":
                $this.$syncEventRun(event, instruct, arrPara, function(result) {
                    para.result = result;
                    para.nStep = "end";
                    if (++dbFlag === 2) {
                        $this.$eventRunSub(event, instruct, arrPara, command, successCallBack, errorCallBack);
                    }
                }, function(error) {
                    para.error = error;
                    para.nStep = "errorEnd";
                    if (++dbFlag === 2) {
                        $this.$eventRunSub(event, instruct, arrPara, command, successCallBack, errorCallBack);
                    }
                });
                break;
            case "dataTransOpen":
                $this.$zDB.dataTransOpen($this.$dbName, para.index, function(result) {
                    para.dataTrans = result;
                    para.nStep = "eventCacheColQuery";
                    if (++dbFlag === 2) {
                        $this.$eventRunSub(event, instruct, arrPara, command, successCallBack, errorCallBack);
                    }
                }, function(error) {
                    para.error = error;
                    para.nStep = "errorEnd";
                    if (++dbFlag === 2) {
                        $this.$eventRunSub(event, instruct, arrPara, command, successCallBack, errorCallBack);
                    }
                });
                break;
            case "eventCacheColQuery":
                //查找事务记录中是否存在event对应记录eventLog
                arrField = [$this.$mac.fd.$l_eventLog.eventId, $this.$mac.fd.$l_eventLog.instruct];
                arrValue = [event, instruct];
                cacheResult = $this.$db.cacheColQueryMulti($this.$dbName, $this.$mac.tb.$l_eventLog, arrField, "=", arrValue);
                cachePointKey = cacheResult.table;
                cacheNumber = cacheResult.arrNumber;
                if (cacheNumber.length === 0) {
                    para.nStep = "eventLogNew";
                } else {
                    para.eventLog = cachePointKey[$this.$mac.fd.id][cacheNumber[0]];
                    para.nStep = "eventLogModify";
                }
                dbFlag++;
                break;
            case "eventLogNew":
                dbData = {};
                dbData[$this.$mac.tb.$l_eventLog] = {};
                dbData[$this.$mac.tb.$l_eventLog][$this.$mac.fd.$l_eventLog.instruct] = [para.instruct];
                dbData[$this.$mac.tb.$l_eventLog][$this.$mac.fd.$l_eventLog.eventId] = [event];
                dbData[$this.$mac.tb.$l_eventLog][$this.$mac.fd.$l_eventLog.runStatus] = [$this.$mac.enum1.$l_eventLog.runStatus.run];
                dbData[$this.$mac.tb.$l_eventLog][$this.$mac.fd.$l_eventLog.inputPara] = [arrPara];

                $this.$zDB.zeroRecordNew($this.$dbName, [$this.$mac.tb.$l_eventLog], dbData, para.dataTrans, function(result) {
                    para.eventLog = result.record[0][0];
                    para.nStep = "actionLogQuery";
                    if (++dbFlag === 2) {
                        $this.$eventRunSub(event, instruct, arrPara, command, successCallBack, errorCallBack);
                    }
                }, para.errorCallBack);
                break;
            case "eventLogModify":
                //新增或修改事件记录
                dbData = {};
                dbData[$this.$mac.tb.$l_eventLog] = {};
                dbData[$this.$mac.tb.$l_eventLog][$this.$mac.fd.$l_eventLog.instruct] = [para.instruct];
                dbData[$this.$mac.tb.$l_eventLog][$this.$mac.fd.$l_eventLog.runStatus] = [$this.$mac.enum1.$l_eventLog.runStatus.run];
                dbData[$this.$mac.tb.$l_eventLog][$this.$mac.fd.$l_eventLog.inputPara] = [arrPara];

                $this.$zDB.zeroRecordModify($this.$dbName, [$this.$mac.tb.$l_eventLog], [[para.eventLog]], dbData, para.dataTrans, function() {
                    para.nStep = "actionLogQuery";
                    if (++dbFlag === 2) {
                        $this.$eventRunSub(event, instruct, arrPara, command, successCallBack, errorCallBack);
                    }
                }, para.errorCallBack);
                break;
            case "actionLogQuery":
                //判断eventLog中action对应动作记录是否存在
                arrField = [$this.$mac.fd.pt_id, $this.$mac.fd.$l_actionLog.actionId];
                arrValue = [para.eventLog, $this.$mac.action.type.start];
                cacheResult = $this.$db.cacheColQueryMulti($this.$dbName, $this.$mac.tb.$l_actionLog, arrField, "=", arrValue);
                cachePointKey = cacheResult.table;
                cacheNumber = cacheResult.arrNumber;
                if (cacheNumber.length === 0) {
                    para.nStep = "actionLogNew";
                } else {
                    para.actionLog = cachePointKey[$this.$mac.fd.id][cacheNumber[0]];
                    para.nStep = "actionLogModify";
                }
                dbFlag++;
                break;
            case "actionLogNew":
                dbData = {};
                dbData[$this.$mac.tb.$l_actionLog] = {};
                dbData[$this.$mac.tb.$l_actionLog][$this.$mac.fd.$l_actionLog.runStatus] = [$this.$mac.enum1.$l_actionLog.runStatus.run];
                dbData[$this.$mac.tb.$l_actionLog][$this.$mac.fd.pt_id] = [para.eventLog];
                dbData[$this.$mac.tb.$l_actionLog][$this.$mac.fd.$l_actionLog.actionId] = [$this.$mac.action.type.start];

                $this.$zDB.zeroRecordNew($this.$dbName, [$this.$mac.tb.$l_actionLog], dbData, para.dataTrans, function(result) {
                    para.actionLog = result.record[0][0];
                    para.nStep = "$eventObjectInit";
                    if (++dbFlag === 2) {
                        $this.$eventRunSub(event, instruct, arrPara, command, successCallBack, errorCallBack);
                    }
                }, para.errorCallBack);
                break;
            case "actionLogModify":
                //新增或修改动作记录
                dbData = {};
                dbData[$this.$mac.tb.$l_actionLog] = {};
                dbData[$this.$mac.tb.$l_actionLog][$this.$mac.fd.$l_actionLog.runStatus] = [$this.$mac.enum1.$l_actionLog.runStatus.run];
                $this.$zDB.zeroRecordModify($this.$dbName, [$this.$mac.tb.$l_actionLog], [[para.actionLog]], dbData, para.dataTrans, function() {
                    para.nStep = "$eventObjectInit";
                    if (++dbFlag === 2) {
                        $this.$eventRunSub(event, instruct, arrPara, command, successCallBack, errorCallBack);
                    }
                }, para.errorCallBack);
                break;
            case "$eventObjectInit":
                var eventClassName = '$$' + para.eventName;
                // para.eventObject = new $this.$EventClass[eventClassName]();
                para.eventObject = new $this.$geneObject[eventClassName]();// todo 临时
                $this.$geneObject.$eventTrack.eventLog.push(para.eventLog);
                $this.$geneObject.$eventTrack.eventObject.push(para.eventObject);
                para.nStep = "$actionObjectStart";
                dbFlag++;
                break;
            case "$actionObjectStart":
                //动作实例化
                para.index = {
                    geneAddr: $this.$geneObject.$geneAddr,
                    actionLog: para.actionLog
                };
                let that = {
                    geneObject: $this.$geneObject,
                    geneAddr: $this.$geneObject.$geneAddr,
                    server: $this.$geneObject.$server,
                    eventLog: para.eventLog,
                    index: para.index
                };
                para.actionObject = new $CGeneAction(that);
                $this.$geneObject.$actionTrack.index.push(JSON.parse(JSON.stringify(para.index)));
                $this.$geneObject.$actionTrack.actionObject.push(para.actionObject);
                //eventObject中函数和变量重载给actionObject
                for (var key in para.eventObject) {
                    if (typeof para.eventObject[key] == "function") {
                        para.actionObject[key] = para.eventObject[key];
                    }
                }
                para.actionObject.$eventObject = para.eventObject;// todo：设计中无此赋值
                $eventObjectInit(para.actionObject, event, arrPara, command);
                para.actionObject.$dataTrans = para.dataTrans;
                para.actionObject.$action = $this.$mac.action.type.start;
            case "$methodRun":
                para.actionObject.$methodRun(function() {
                    para.result = null;
                    para.nStep = "end";
                    if (++dbFlag === 2) {
                        $this.$eventRunSub(event, instruct, arrPara, command, successCallBack, errorCallBack);
                    }
                }, function(error) {
                    para.eventObject = null;
                    let tempIndex = $this.$geneObject.$eventTrack.eventLog.indexOf(para.eventLog);
                    $this.$geneObject.$eventTrack.eventLog.splice(tempIndex, 1);
                    $this.$geneObject.$eventTrack.eventObject.splice(tempIndex, 1);
                    para.error = error;
                    para.nStep = "errorEnd";
                    if (++dbFlag === 2) {
                        $this.$eventRunSub(event, instruct, arrPara, command, successCallBack, errorCallBack);
                    }
                });
                break;
            case "end":
                para.successCallBack(para.result);
                break;
            case "errorEnd":
                para.errorCallBack(para.error);
                break;
        }
        if (++dbFlag === 1) {
            return;
        }
    }
};

//事务同步运行函数
$CGeneAction.prototype.$syncEventRun = function(event, instruct, arrPara, successCallBack, errorCallBack) {
    var $this = this;
    var fnname = "$CGeneAction.prototype.$syncEventRun";
    if (successCallBack !== null) {
        errorCallBack = $this.$setPara(successCallBack, errorCallBack);
        successCallBack = null;
    }
    var cacheResult, cachePointKey, cacheNumber;
    var para = errorCallBack;
    var dbFlag = 0;
    while (1) {
        dbFlag = 0;
        if ($this.$debugFlag) {
            console.log(fnname + ": para.nStep = " + para.nStep);
        }
        switch (para.nStep) {
            case 0:
                para.instruct = JSON.parse(JSON.stringify(instruct));
                cacheResult = $this.$db.cacheColRead($this.$cloudDBName, $this.$mac.tb.event, event);
                cachePointKey = cacheResult.table;
                cacheNumber = cacheResult.number;
                para.eventName = cachePointKey[$this.$mac.fd.event.eventName][cacheNumber];
                para.type = cachePointKey[$this.$mac.fd.event.type][cacheNumber];
                if (para.eventName.indexOf("$") !== -1 && para.type === $this.$mac.enum1.event.type.method) {//1、工具为通道加的事务也带$，类型为事务;2、系统事务类型为方法
                    var eventClassName = para.eventName;
                    para.eventObject = new window[eventClassName]()// todo 临时
                } else {//非系统事务
                    var eventClassName = '$$' + para.eventName;
                    para.eventObject = new $this.$geneObject[eventClassName]();// todo 临时
                }
                para.nStep = "$eventObjectInit";
                dbFlag++
                break
            case "$eventObjectInit":
                $this.$eventObject = para.eventObject;// todo：设计中无此赋值
                for (var key in para.eventObject) {
                    if (typeof para.eventObject[key] == "function") {
                        $this[key] = para.eventObject[key];
                    }
                }
                $eventObjectInit($this, event, arrPara, null);
                if (typeof (para.instruct.server) === "string" && para.instruct.server.indexOf("w") === 0) {//页面
                    para.instruct.index.number = para.instruct.number;
                    para.nStep = "$dataTransOpen";
                } else if (para.instruct.eventLog === null) {
                    if (para.instruct.number === null) {
                        para.nStep = "dataTransJudge";
                    } else {
                        para.instruct.index.number = para.instruct.number;
                        para.nStep = "$dataTransOpen";
                    }
                } else {
                    para.nStep = "dataTransJudge";
                }
                dbFlag++;
                break;
            case "dataTransJudge":
                if ($this.$dataTrans === null) {
                    para.nStep = "$dataTransOpen";
                } else {
                    para.nStep = "eventWay";
                }
                dbFlag++;
                break;
            case "$dataTransOpen":
                $this.$zDB.dataTransOpen($this.$dbName, para.instruct.index, function(result) {
                    $this.$dataTrans = result;
                    para.nStep = "eventWay";
                    if (++dbFlag === 2) {
                        $this.$syncEventRun(event, instruct, arrPara, successCallBack, errorCallBack);
                    }
                }, function(error) {
                    para.error = error;
                    para.nStep = "errorEnd";
                    if (++dbFlag === 2) {
                        $this.$syncEventRun(event, instruct, arrPara, successCallBack, errorCallBack);
                    }
                });
                break;
            case "eventWay":
                let successBack = function(result) {
                    para.result = result;
                    if (para.instruct.index.number === null || para.instruct.index.number === undefined) {
                        para.eventObject = null;
                        para.nStep = "end";
                    } else {
                        para.nStep = "dataTransClose";
                    }
                    if (++dbFlag === 2) {
                        $this.$syncEventRun(event, instruct, arrPara, successCallBack, errorCallBack);
                    }
                };
                let errorBack = function(error) {
                    para.error = error;
                    if (para.instruct.index.number === null) {
                        para.eventObject = null;
                        para.nStep = "errorEnd";
                    } else {
                        para.nStep = "$dataCancel";
                    }
                    if (++dbFlag === 2) {
                        $this.$syncEventRun(event, instruct, arrPara, successCallBack, errorCallBack);
                    }
                };
                let tempArr = [];
                let tempArr1 = [successBack, errorBack];
                if(arrPara === null){
                    tempArr = [successBack, errorBack];
                }else{
                    tempArr = arrPara.concat([successBack, errorBack])
                }
                if(para.eventName.indexOf("$") !== -1 && para.type === $this.$mac.enum1.event.type.method){//系统事务
                    $this[para.eventName + '0'].apply($this, tempArr);
                }else if(para.type === $this.$mac.enum1.event.type.method){
                    $this[para.eventName].apply($this, tempArr);
                }else{
                    $this[para.eventName].apply($this, tempArr1);
                }
                // if (para.eventName.indexOf("$") === -1) {
                //     $this["event" + event].apply($this, tempArr);
                // }else{
                //     $this[para.eventName + '0'].apply($this, tempArr);
                // }
                break;
            case "dataTransClose":
                $this.$zDB.dataTransClose($this.$dbName, $this.$dataTrans, function(result) {
                    para.eventObject = null;
                    para.nStep = "end";
                    if (++dbFlag === 2) {
                        $this.$syncEventRun(event, instruct, arrPara, successCallBack, errorCallBack);
                    }
                }, function(error) {
                    para.error = error;
                    para.nStep = "$dataCancel";
                    if (++dbFlag === 2) {
                        $this.$syncEventRun(event, instruct, arrPara, successCallBack, errorCallBack);
                    }
                });
                break;
            case "$dataCancel":
                $this.$zDB.dataTransCancel($this.$dbName, $this.$dataTrans, function() {
                    para.eventObject = null;
                    para.nStep = "errorEnd";
                    if (++dbFlag === 2) {
                        $this.$syncEventRun(event, instruct, arrPara, successCallBack, errorCallBack);
                    }
                }, para.errorCallBack);
                break;
            case "end":
                para.successCallBack(para.result);
                break;
            case "errorEnd":
                para.errorCallBack(para.error);
                break;
        }
        if (++dbFlag === 1) {
            return;
        }
    }
};

//方法运行函数
$CGeneAction.prototype.$methodRun = function(successCallBack, errorCallBack) {
    let $this = this;
    let dbData;
    let cacheResult, cachePointKey, cacheNumber, arrField, arrValue;
    let fnname = "$CGeneAction.prototype.$methodRun";
    if (successCallBack !== null) {
        errorCallBack = $this.$setPara(successCallBack, errorCallBack);
        successCallBack = null;
    }
    let para = errorCallBack;
    let dbFlag = 0;
    while (1) {
        dbFlag = 0;
        if ($this.$debugFlag) {
            console.log(fnname + ": para.nStep = " + para.nStep);
        }
        switch (para.nStep) {
            case 0:
                let tempIndex = $this.$geneObject.$eventTrack.eventLog.indexOf($this.$eventLog);
                para.eventObject = $this.$geneObject.$eventTrack.eventObject[tempIndex];
            case 'getActionPara':
                if($this.$action === $this.$mac.action.type.start){
                    para.nStep = "event_method";
                }else{
                    cacheResult = $this.$db.cacheColRead($this.$cloudDBName, $this.$mac.tb.action, $this.$action);
                    cachePointKey = cacheResult.table;
                    cacheNumber = cacheResult.number;
                    para.actionPara = cachePointKey[$this.$mac.fd.action.para][cacheNumber];
                    if(para.actionPara === null){
                        para.nStep = "action_method";
                    }else{
                        para.nStep = "modityActionLogVariable";
                    }
                }
                dbFlag++
                break
            case "modityActionLogVariable"://当前事务对象中当前动作关联变量保存在actionLog的变量记录中;
                dbData = {};
                dbData[$this.$mac.tb.$l_actionLog] = {};
                para.variableLog = { name: [], data: [] };
                //$this.$eventObject有可能是其他同步事务
                para.actionPara.name.forEach(function (val, index) {
                    para.variableLog.name.push(val);
                    para.variableLog.data.push(para.eventObject.$variable[val]);
                })
                dbData[$this.$mac.tb.$l_actionLog][$this.$mac.fd.$l_actionLog.variable] = [para.variableLog];

                $this.$zDB.zeroRecordModify($this.$dbName, [$this.$mac.tb.$l_actionLog], [[$this.$index.actionLog]], dbData, $this.$dataTrans, function() {
                    if ($this.$action === $this.$mac.action.type.start) {
                        para.nStep = "event_method";
                    } else {
                        para.nStep = "action_method";
                    }
                    if (++dbFlag == 2) {
                        $this.$methodRun(successCallBack, errorCallBack);
                    }
                }, para.errorCallBack);
                break;
            case "event_method":
                cacheResult = $this.$db.cacheColRead($this.$cloudDBName, $this.$mac.tb.event, para.eventObject.$event);
                cachePointKey = cacheResult.table;
                cacheNumber = cacheResult.number;
                para.eventName = cachePointKey[$this.$mac.fd.event.eventName][cacheNumber];
                //获取当前事务event的对应方法并运行
                // $this['event' + $this.$event](function (result) {
                $this[para.eventName](function(result) {
                    para.nStep = "actionLogEnd";
                    if (++dbFlag === 2) {
                        $this.$methodRun(successCallBack, errorCallBack);
                    }
                }, function(error) {
                    //出错
                    para.error = error;
                    para.nStep = "$dataCancel";
                    if (++dbFlag === 2) {
                        $this.$methodRun(successCallBack, errorCallBack);
                    }
                });
                break;
            case "action_method":
                //获取action对应方法并运行
                $this["action" + $this.$action](function(result) {
                    para.nStep = "actionLogEnd";
                    if (++dbFlag === 2) {
                        $this.$methodRun(successCallBack, errorCallBack);
                    }
                }, function(error) {
                    para.error = error;
                    para.nStep = "$dataCancel";
                    if (++dbFlag === 2) {
                        $this.$methodRun(successCallBack, errorCallBack);
                    }

                });
                break;
            case "actionLogEnd"://当前事务对象中当前动作关联变量保存在actionLog的变量记录中;
                dbData = {};
                dbData[$this.$mac.tb.$l_actionLog] = {};
                dbData[$this.$mac.tb.$l_actionLog][$this.$mac.fd.$l_actionLog.runStatus] = [$this.$mac.enum1.$l_actionLog.runStatus.end];

                $this.$zDB.zeroRecordModify($this.$dbName, [$this.$mac.tb.$l_actionLog], [[$this.$index.actionLog]], dbData, $this.$dataTrans, function() {
                    para.nStep = "dataTransClose";
                    if (++dbFlag == 2) {
                        $this.$methodRun(successCallBack, errorCallBack);
                    }
                }, para.errorCallBack);
                break;
            case "dataTransClose":
                $this.$zDB.dataTransClose($this.$dbName, $this.$dataTrans, function(result) {
                    let tempIndex;
                    for (var i = 0; i < $this.$geneObject.$actionTrack.index.length; i++) {
                        if ($this.$geneObject.$actionTrack.index[i] !== undefined) {
                            if (JSON.stringify($this.$geneObject.$actionTrack.index[i]) === JSON.stringify($this.$index)) {
                                tempIndex = i;
                                break;
                            }
                        }
                    }
                    $this.$geneObject.$actionTrack.index.splice(tempIndex, 1);
                    $this.$geneObject.$actionTrack.actionObject.splice(tempIndex, 1);
                    para.nStep = "query_actionLog";
                    if (++dbFlag == 2) {
                        $this.$methodRun(successCallBack, errorCallBack);
                    }
                }, function(error) {
                    para.error = error;
                    para.nStep = "$dataCancel";
                    if (++dbFlag == 2) {
                        $this.$methodRun(successCallBack, errorCallBack);
                    }
                });
                break;
            case "query_actionLog":
                arrField = [$this.$mac.fd.pt_id, $this.$mac.fd.$l_actionLog.runStatus];
                arrValue = [$this.$eventLog, $this.$mac.enum1.$l_actionLog.runStatus.run];
                cacheResult = $this.$db.cacheColQueryMulti($this.$dbName, $this.$mac.tb.$l_actionLog, arrField, "=", arrValue);
                cachePointKey = cacheResult.table;
                cacheNumber = cacheResult.arrNumber;
                if (cacheNumber.length == 0) {
                    //注销当前事务对象
                    $this.$eventObject = null;
                    let tempIndex = $this.$geneObject.$eventTrack.eventLog.indexOf($this.$eventLog);
                    $this.$geneObject.$eventTrack.eventLog.splice(tempIndex, 1);
                    $this.$geneObject.$eventTrack.eventObject.splice(tempIndex, 1);
                }
                para.nStep = "end";
                dbFlag++; 
                break;
            case "$dataCancel":
                $this.$zDB.dataTransCancel($this.$dbName, $this.$dataTrans, function() {
                    //获取index.actionLog内保存的变量记录恢复到事务对象中
                    para.variableLog.name.forEach(function(val, index) {
                        $this.$eventObject.$variable[val] = para.variableLog.data[index];
                    });
                    let tempIndex;
                    for (var i = 0; i < $this.$geneObject.$actionTrack.index.length; i++) {
                        if (JSON.stringify($this.$geneObject.$actionTrack.index[i]) === JSON.stringify($this.$index)) {
                            tempIndex = i;
                            break;
                        }
                    }
                    $this.$geneObject.$actionTrack.index.splice(tempIndex, 1);
                    $this.$geneObject.$actionTrack.actionObject.splice(tempIndex, 1);
                    para.nStep = "errorEnd";
                    if (++dbFlag == 2) {
                        $this.$methodRun(successCallBack, errorCallBack);
                    }
                }, para.errorCallBack);
                break;
            case "end":
                para.successCallBack();
                return;
            case "errorEnd":
                para.errorCallBack(para.error);
                return;
        }
        if (++dbFlag === 1) {
            return;
        }
    }
};

//事务运行输入子函数
$CGeneAction.prototype.$eventRunInputSub = function(eventPort, arrPara, successCallBack, errorCallBack) {
    var $this = this;
    var cacheResult, cachePointKey, cacheNumber, arrField, arrValue;
    var fnname = "$CGeneAction.prototype.$eventRunInputSub";
    if (successCallBack !== null) {
        errorCallBack = $this.$setPara(successCallBack, errorCallBack);
        successCallBack = null;
    }
    var para = errorCallBack;
    var dbFlag = 0;
    while (1) {
        dbFlag = 0;
        if ($this.$debugFlag) {
            console.log(fnname + ": para.nStep = " + para.nStep);
        }
        switch (para.nStep) {
            case 0:
            case "eventPortLogQuery":
                //获取geneLog中eventPort的接口记录
                arrField = [$this.$mac.fd.pt_id, $this.$mac.fd.$l_eventPortLog.eventPortId];
                arrValue = [$this.$geneObject.$geneLog, eventPort];
                cacheResult = $this.$db.cacheColQueryMulti($this.$dbName, $this.$mac.tb.$l_eventPortLog, arrField, "=", arrValue);
                cachePointKey = cacheResult.table;
                cacheNumber = cacheResult.arrNumber;
                para.destGeneAddr = cachePointKey[$this.$mac.fd.$l_eventPortLog.originGeneAddr][cacheNumber[0]];
                para.destServer = cachePointKey[$this.$mac.fd.$l_eventPortLog.originServer][cacheNumber[0]];
                para.subGeneAddr = cachePointKey[$this.$mac.fd.$l_eventPortLog.originSubGeneAddr][cacheNumber[0]];
                para.subEventPort = cachePointKey[$this.$mac.fd.$l_eventPortLog.originSubEventPort][cacheNumber[0]];
                para.parentEvent = cachePointKey[$this.$mac.fd.$l_eventPortLog.eventId][cacheNumber[0]];
                para.inputPara = [para.subGeneAddr, para.subEventPort, arrPara, null];
                para.nStep = "geneRemoteCall";
                dbFlag++;
                break;
            case "geneRemoteCall":
                $this.$geneRemoteCall(para.destGeneAddr, para.destServer, "$eventRunInput", para.inputPara, function(result) {
                    if(result && result.arrPara){
                        para.result = result.arrPara;
                    }else{
                        para.result = result;
                    }
                    para.nStep = "end";
                    if (++dbFlag === 2) {
                        $this.$eventRunInputSub(eventPort, arrPara, successCallBack, errorCallBack);
                    }
                }, function(error) {
                    para.error = error;
                    para.nStep = "errorEnd";
                    if (++dbFlag === 2) {
                        $this.$eventRunInputSub(eventPort, arrPara, successCallBack, errorCallBack);
                    }
                });
                break;
            case "end":
                para.successCallBack(para.result);
                break;
            case "errorEnd":
                para.errorCallBack(para.error);
                break;
        }
        if (++dbFlag === 1) {
            return;
        }
    }
};

//事务运行输入函数
$CGeneAction.prototype.$eventRunInput = function(subGeneAddr, subEventPort, instruct, arrPara, successCallBack, errorCallBack) {
    var $this = this;
    var cacheResult, cachePointKey, cacheNumber, arrField, arrValue;
    var fnname = "$CGeneAction.prototype.$eventRunInput";
    if (successCallBack !== null) {
        errorCallBack = $this.$setPara(successCallBack, errorCallBack);
        successCallBack = null;
    }
    var para = errorCallBack;
    var dbFlag = 0;
    while (1) {
        dbFlag = 0;
        if ($this.$debugFlag) {
            console.log(fnname + ": para.nStep = " + para.nStep);
        }
        switch (para.nStep) {
            case 0:
            case "subEventPortRead":
                //获取subEventPort连接的OtherSubEventPort,event
                cacheResult = $this.$db.cacheColRead($this.$cloudDBName, $this.$mac.tb.subEventPort, subEventPort);
                cachePointKey = cacheResult.table;
                cacheNumber = cacheResult.number;
                para.subGeneName = cachePointKey[$this.$mac.fd.subEventPort.connectSubEvent][cacheNumber]["subgene_name"][0];
                para.subEventName = cachePointKey[$this.$mac.fd.subEventPort.connectSubEvent][cacheNumber]["subeventname"][0];
                para.nStep = "subGeneQuery";
                dbFlag++;
                break;
            case "subGeneQuery":
                //获取子粒子id
                arrField = [$this.$mac.fd.pt_id, $this.$mac.fd.subGene.subgeneName];
                arrValue = [$this.$geneObject.$gene, para.subGeneName];
                cacheResult = $this.$db.cacheColQueryMulti($this.$cloudDBName, $this.$mac.tb.subGene, arrField, "=", arrValue);
                cachePointKey = cacheResult.table;
                cacheNumber = cacheResult.arrNumber;
                para.subGene = cachePointKey[$this.$mac.fd.id][cacheNumber[0]];
                para.nStep = "subEventPortQuery";
                dbFlag++;
                break;
            case "subEventPortQuery":
                arrField = [$this.$mac.fd.pt_id, $this.$mac.fd.subEventPort.eventportName];
                arrValue = [para.subGene, para.subEventName];
                cacheResult = $this.$db.cacheColQueryMulti($this.$cloudDBName, $this.$mac.tb.subEventPort, arrField, "=", arrValue);
                cachePointKey = cacheResult.table;
                cacheNumber = cacheResult.arrNumber;
                para.otherSubEventPort = cachePointKey[$this.$mac.fd.id][cacheNumber[0]];
                para.nStep = "eventRunPullSub";
                dbFlag++;
                break;
            case "eventRunPullSub":
                $this.$eventRunPullSub(para.otherSubEventPort, arrPara, function(result) {
                    para.result = result;
                    para.nStep = "end";
                    if (++dbFlag === 2) {
                        $this.$eventRunInput(subGeneAddr, subEventPort, instruct, arrPara, successCallBack, errorCallBack);
                    }
                }, function(error) {
                    para.error = error;
                    para.nStep = "errorEnd";
                    if (++dbFlag === 2) {
                        $this.$eventRunInput(subGeneAddr, subEventPort, instruct, arrPara, successCallBack, errorCallBack);
                    }
                });
                break;
            case "end":
                para.successCallBack(para.result);
                break;
            case "errorEnd":
                para.errorCallBack(para.error);
                break;
        }
        if (++dbFlag === 1) {
            return;
        }
    }
};

//事务运行拉取子函数
$CGeneAction.prototype.$eventRunPullSub = function(subEventPort, arrPara, successCallBack, errorCallBack) {
    var $this = this;
    var cacheResult, cachePointKey, cacheNumber;
    var fnname = "$CGeneAction.prototype.$eventRunPullSub";
    if (successCallBack !== null) {
        errorCallBack = $this.$setPara(successCallBack, errorCallBack);
        successCallBack = null;
    }
    var para = errorCallBack;
    var dbFlag = 0;
    while (1) {
        dbFlag = 0;
        if ($this.$debugFlag) {
            console.log(fnname + ": para.nStep = " + para.nStep);
        }
        switch (para.nStep) {
            case 0:
            case "ifStartEvent":
                cacheResult = $this.$db.cacheColRead($this.$cloudDBName, $this.$mac.tb.subEventPort, subEventPort);
                cachePointKey = cacheResult.table;
                cacheNumber = cacheResult.number;
                if (cachePointKey[$this.$mac.fd.subEventPort.subEventType][cacheNumber] === $this.$mac.enum1.subEventPort.subeventType.start) {
                    para.nStep = "$getSubEventPortInfo";
                } else {
                    para.nStep = "subEventPortLogQuery";
                    para.eventPort = cachePointKey[$this.$mac.fd.subEventPort.eventportSubId][cacheNumber];
                }
                dbFlag++;
                break;
            case "subEventPortLogQuery":
                cacheResult = $this.$db.cacheColQuery($this.$dbName, $this.$mac.tb.$l_subEventPortLog, $this.$mac.fd.$l_subEventPortLog.eventPortId, "=", subEventPort);
                cachePointKey = cacheResult.table;
                cacheNumber = cacheResult.arrNumber;
                para.subGeneLog = cachePointKey[$this.$mac.fd.pt_id][cacheNumber[0]];
                para.nStep = "subGeneLogRead";
                dbFlag++;
                break;
            case "subGeneLogRead":
                cacheResult = $this.$db.cacheColRead($this.$dbName, $this.$mac.tb.$l_subGeneLog, para.subGeneLog);
                cachePointKey = cacheResult.table;
                cacheNumber = cacheResult.number;
                para.childGeneAddr = cachePointKey[$this.$mac.fd.$l_subGeneLog.subGeneAddr][cacheNumber];
                para.childServer = cachePointKey[$this.$mac.fd.$l_subGeneLog.subServerId][cacheNumber];
                para.nStep = "$eventRunPull";
                dbFlag++;
                break;
            case "$eventRunPull":
                para.pullPara = [para.eventPort, null, arrPara];
                $this.$geneRemoteCall(para.childGeneAddr, para.childServer, "$eventRunPull", para.pullPara, function(result) {
                    para.result = result;
                    para.nStep = "end";
                    if (++dbFlag === 2) {
                        $this.$eventRunPullSub(subEventPort, arrPara, successCallBack, errorCallBack);
                    }
                }, function(error) {
                    para.error = error;
                    para.nStep = "errorEnd";
                    if (++dbFlag === 2) {
                        $this.$eventRunPullSub(subEventPort, arrPara, successCallBack, errorCallBack);
                    }
                });
                break;
            case "$getSubEventPortInfo":
                //获取subEventPort对应子粒子subGeneAddr
                cacheResult = $this.$db.cacheColRead($this.$cloudDBName, $this.$mac.tb.subEventPort, subEventPort);
                cachePointKey = cacheResult.table;
                cacheNumber = cacheResult.number;
                para.childGeneAddr = cachePointKey[$this.$mac.fd.pt_id][cacheNumber];
                para.nStep = "geneStart";
                dbFlag++;
                break;
            case "geneStart":
                //调用粒子启动函数
                $this.$geneStart(para.childGeneAddr, arrPara, function(result) {
                    para.result = result;
                    para.nStep = "end";
                    if (++dbFlag === 2) {
                        $this.$eventRunPullSub(subEventPort, arrPara, successCallBack, errorCallBack);
                    }
                }, function(error) {
                    para.error = error;
                    para.nStep = "errorEnd";
                    if (++dbFlag === 2) {
                        $this.$eventRunPullSub(subEventPort, arrPara, successCallBack, errorCallBack);
                    }
                });
                break;
            case "end":
                para.successCallBack(para.result);
                break;
            case "errorEnd":
                para.errorCallBack(para.error);
                return;
        }
        if (++dbFlag === 1) {
            return;
        }
    }
};

//事务运行拉取函数
$CGeneAction.prototype.$eventRunPull = function(eventPort, event, instruct, arrPara, successCallBack, errorCallBack) {
    var $this = this;
    var cacheResult, cachePointKey, cacheNumber;
    var fnname = "$CGeneAction.prototype.$eventRunPull";
    if (successCallBack !== null) {
        errorCallBack = $this.$setPara(successCallBack, errorCallBack);
        successCallBack = null;
    }
    var para = errorCallBack;
    var dbFlag = 0;
    while (1) {
        dbFlag = 0;
        if ($this.$debugFlag) {
            console.log(fnname + ": para.nStep = " + para.nStep);
        }
        switch (para.nStep) {
            case 0:
                if (event) {
                    para.nStep = "$eventRunSub";
                } else {
                    para.nStep = "eventPortRead";
                }
                dbFlag++;
                break;
            case "eventPortRead":
                //eventPort是否连接事件event
                cacheResult = $this.$db.cacheColRead($this.$cloudDBName, $this.$mac.tb.eventPort, eventPort);
                cachePointKey = cacheResult.table;
                cacheNumber = cacheResult.number;
                if (cachePointKey[$this.$mac.fd.eventPort.eventId][cacheNumber] === null) {
                    var eventPortName = cachePointKey[$this.$mac.fd.eventPort.eventportName][cacheNumber];
                    para.error = {
                        code: "eventNameNonexistent",
                        message: "事件接口" + eventPortName + "未连接事件"
                    };
                    para.nStep = "errorEnd";
                } else {
                    event = cachePointKey[$this.$mac.fd.eventPort.eventId][cacheNumber];
                    para.nStep = "$eventRunSub";
                }
                dbFlag++;
                break;
            case "$eventRunSub":
                //调用事务执行子函数
                //todo:参数command是否为运行？？？
                $this.$eventRunSub(event, instruct, arrPara, $this.$mac.enum1.event.command.run, function(result) {
                    para.result = {};
                    // para.result.destSite = {
                    //     geneAddr: $this.$geneObject.$geneAddr,
                    //     server: $this.$geneObject.$server,
                    //     event: event
                    // };
                    para.result = {
                        geneAddr: $this.$geneObject.$geneAddr,
                        server: $this.$geneObject.$server,
                        event: event
                    };
                    para.result.arrPara = result;
                    para.nStep = "end";
                    if (++dbFlag === 2) {
                        $this.$eventRunPull(eventPort, event, instruct, arrPara, successCallBack, errorCallBack);
                    }
                }, function(error) {
                    para.error = error;
                    para.nStep = "errorEnd";
                    if (++dbFlag === 2) {
                        $this.$eventRunPull(eventPort, event, instruct, arrPara, successCallBack, errorCallBack);
                    }
                });
                break;
            case "end":
                para.successCallBack(para.result);
                break;
            case "errorEnd":
                para.errorCallBack(para.error);
                return;
        }
        if (++dbFlag === 1) {
            return;
        }
    }
};

//临时
$CGeneAction.prototype.$remoteDataConfirm = function(successCallBack, errorCallBack) {
    var $this = this;
    var fnname = "$CGeneAction.prototype.$remoteDataConfirm";
    if (successCallBack !== null) {
        errorCallBack = $this.$setPara(successCallBack, errorCallBack);
        successCallBack = null;
    }
    var para = errorCallBack;
    var dbFlag = 0;
    while (1) {
        dbFlag = 0;
        if ($this.$debugFlag) {
            console.log(fnname + ": para.nStep = " + para.nStep);
        }
        switch (para.nStep) {
            case 0:
            case 'dataConfirm':
                $this.$dataConfirm(function () {
                    para.nStep = 'end';
                    if (++dbFlag === 2) {
                        $this.$remoteDataConfirm(successCallBack, errorCallBack);
                    }
                }, function (error) {
                    para.error = error;
                    para.nStep = 'errorEnd';
                    if (++dbFlag === 2) {
                        $this.$remoteDataConfirm(successCallBack, errorCallBack);
                    }
                });
                break
            case "end":
                para.successCallBack();
                break;
            case "errorEnd":
                para.errorCallBack(para.error);
                return;
        }
        if (++dbFlag === 1) {
            return;
        }
    }
};

$CGeneAction.prototype.$dataConfirm = function (successCallBack, errorCallBack) {
    var $this = this;
    var $dbFlag;
    var para;
    var fnname = '$CGeneAction.prototype.$dataConfirm';
    if (successCallBack !== null) {
        errorCallBack = $this.$setPara(successCallBack, errorCallBack);
        successCallBack = null;
    }
    para = errorCallBack;
    while (1) {
        if ($this.$debugFlag) {
            console.log(fnname + ': para.nStep = ' + para.nStep);
        }
        $dbFlag = 0;
        switch (para.nStep) {
            case 0:
            case 'dataTransClose':
                $this.$zDB.dataTransClose($this.$dbName, $this.$dataTrans, function () {
                    para.nStep = 'end';
                    if (++$dbFlag === 2) {
                        $this.$dataConfirm(successCallBack, errorCallBack);
                    }
                }, function (error) {
                    para.error = error;
                    para.nStep = 'errorEnd';
                    if (++$dbFlag === 2) {
                        $this.$dataConfirm(successCallBack, errorCallBack);
                    }
                });
                break
            case 'end':
                para.successCallBack();
                return
            case 'errorEnd':
                para.errorCallBack(para.error);
                return
        }
        if (++$dbFlag === 1) {
            return
        }
    }
};
