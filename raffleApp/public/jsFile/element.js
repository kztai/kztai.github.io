//动作运行函数
$CGeneAction.prototype.$actionRun = function(eventName, actionName, arrPara, successCallBack, errorCallBack) {
    let $this = this;
    let dbData;
    let fnname = "$CGeneAction.prototype.$actionRun";
    let cacheResult, cachePointKey, cacheNumber, arrField, arrValue;
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
                arrField = [$this.$mac.fd.pt_id, $this.$mac.fd.event.eventName];
                arrValue = [$this.$geneObject.$gene, eventName]
                cacheResult = $this.$db.cacheColQueryMulti($this.$cloudDBName, $this.$mac.tb.event, arrField, "=", arrValue);
                cachePointKey = cacheResult.table;
                cacheNumber = cacheResult.arrNumber;
                para.event = cachePointKey[$this.$mac.fd.id][cacheNumber[0]];
                arrField = [$this.$mac.fd.pt_id, $this.$mac.fd.action.actionName];
                arrValue = [para.event, actionName]
                cacheResult = $this.$db.cacheColQueryMulti($this.$cloudDBName, $this.$mac.tb.action, arrField, "=", arrValue);
                cachePointKey = cacheResult.table;
                cacheNumber = cacheResult.arrNumber;
                para.action = cachePointKey[$this.$mac.fd.id][cacheNumber[0]];
            case "actionRead":
                cacheResult = $this.$db.cacheColRead($this.$cloudDBName, $this.$mac.tb.action, para.action);
                cachePointKey = cacheResult.table;
                cacheNumber = cacheResult.number;
                para.event = cachePointKey[$this.$mac.fd.action.eventId][cacheNumber];
                para.subEventPort = cachePointKey[$this.$mac.fd.action.subeventportId][cacheNumber];
                para.eventPort = cachePointKey[$this.$mac.fd.action.eventportId][cacheNumber];
                para.actionName = cachePointKey[$this.$mac.fd.action.actionName][cacheNumber];
                para.actionPara = cachePointKey[$this.$mac.fd.action.para][cacheNumber];
                para.runType = cachePointKey[$this.$mac.fd.action.runType][cacheNumber];
                if (cachePointKey[$this.$mac.fd.action.runType][cacheNumber] === $this.$mac.enum1.action.runType.synch) {//同步
                    para.nStep = "synchActionRunSub";
                } else {//异步
                    para.nStep = "actionLogQuery";
                }
                dbFlag++;
                break;
            case "synchActionRunSub":
                $this.$actionRunSub(para.action, arrPara, function(result) {
                    if (para.actionPara != null && result) {
                        let j = 0;
                        //获取返回值para修改当前事务对象的输出参数变量
                        for (let i = 0; i < para.actionPara[$this.$mac.fd.action.para_.portType].length; i++) {
                            if (para.actionPara[$this.$mac.fd.action.para_.portType][i] == $this.$mac.enum1.action.para.portType.out) {
                                $this.$eventObject.$variable[para.actionPara.name[i]] = result[j];
                                j++
                            }
                        }
                    }
                    para.nStep = "end";
                    if (++dbFlag === 2) {
                        $this.$actionRun(eventName, actionName, arrPara, successCallBack, errorCallBack);
                    }
                }, function(error) {
                    para.error = error;
                    para.nStep = "errorEnd";
                    if (++dbFlag === 2) {
                        $this.$actionRun(eventName, actionName, arrPara, successCallBack, errorCallBack);
                    }
                });
                break;
            case "actionLogQuery":
                arrField = [$this.$mac.fd.pt_id, $this.$mac.fd.$l_actionLog.actionId];
                arrValue = [$this.$eventLog, para.action];
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
                dbData[$this.$mac.tb.$l_actionLog][$this.$mac.fd.pt_id] = [$this.$eventLog];
                dbData[$this.$mac.tb.$l_actionLog][$this.$mac.fd.$l_actionLog.actionId] = [para.action];
                dbData[$this.$mac.tb.$l_actionLog][$this.$mac.fd.$l_actionLog.runStatus] = [$this.$mac.enum1.$l_actionLog.runStatus.run];
                $this.$zDB.zeroRecordNew($this.$dbName, [$this.$mac.tb.$l_actionLog], dbData, $this.$dataTrans, function(result) {
                    para.actionLog = result.record[0][0];
                    para.nStep = "postActionLogQuery";
                    if (++dbFlag === 2) {
                        $this.$actionRun(eventName, actionName, arrPara, successCallBack, errorCallBack);
                    }
                }, para.errorCallBack);
                break;
            case "actionLogModify":
                //修改或新增动作记录
                dbData = {};
                dbData[$this.$mac.tb.$l_actionLog] = {};
                dbData[$this.$mac.tb.$l_actionLog][$this.$mac.fd.$l_actionLog.runStatus] = [$this.$mac.enum1.$l_actionLog.runStatus.run];
                $this.$zDB.zeroRecordModify($this.$dbName, [$this.$mac.tb.$l_actionLog], [[para.actionLog]], dbData, $this.$dataTrans, function() {
                    para.nStep = "postActionLogQuery";
                    if (++dbFlag === 2) {
                        $this.$actionRun(eventName, actionName, arrPara, successCallBack, errorCallBack);
                    }
                }, para.errorCallBack);
                break;
            case "postActionLogQuery":
                arrField = [$this.$mac.fd.pt_id, $this.$mac.fd.$l_postActionLog.postAction];
                arrValue = [$this.$index.actionLog, para.action];
                cacheResult = $this.$db.cacheColQueryMulti($this.$dbName, $this.$mac.tb.$l_postActionLog, arrField, "=", arrValue);
                cachePointKey = cacheResult.table;
                cacheNumber = cacheResult.arrNumber;
                if (cacheNumber.length === 0) {
                    para.nStep = "postActionLogNew";
                } else {
                    para.nStep = "$actionObjectStart";
                }
                dbFlag++;
                break;
            case "postActionLogNew":
                //新增后置动作记录
                dbData = {};
                dbData[$this.$mac.tb.$l_postActionLog] = {};
                dbData[$this.$mac.tb.$l_postActionLog][$this.$mac.fd.pt_id] = [$this.$index.actionLog];
                dbData[$this.$mac.tb.$l_postActionLog][$this.$mac.fd.$l_postActionLog.postAction] = [para.action];
                $this.$zDB.zeroRecordNew($this.$dbName, [$this.$mac.tb.$l_postActionLog], dbData, $this.$dataTrans, function(result) {
                    para.nStep = "$actionObjectStart";
                    if (++dbFlag === 2) {
                        $this.$actionRun(eventName, actionName, arrPara, successCallBack, errorCallBack);
                    }
                }, para.errorCallBack);
                break;
            case "$actionObjectStart":
                para.index = {
                    geneAddr: $this.$geneObject.$geneAddr,
                    actionLog: para.actionLog
                };
                //动作实例化
                let that = {
                    geneObject: $this.$geneObject,
                    geneAddr: $this.$geneObject.$geneAddr,
                    server: $this.$geneObject.$server,
                    eventLog: $this.$eventLog,
                    index: para.index
                };
                para.actionObject = new $CGeneAction(that);
                para.actionObject.$dataTrans = $this.$dataTrans;// todo
                let tempIndex = $this.$geneObject.$eventTrack.eventLog.indexOf($this.$eventLog);
                para.eventObject = $this.$geneObject.$eventTrack.eventObject[tempIndex];
                para.actionObject.$eventObject = para.eventObject;// todo
                for (var key in para.eventObject) {//todo
                    if (typeof para.eventObject[key] == "function") {
                        para.actionObject[key] = para.eventObject[key];
                    }
                }
                para.actionObject.$action = para.action;
                $this.$geneObject.$actionTrack.index.push(JSON.parse(JSON.stringify(para.index)));
                $this.$geneObject.$actionTrack.actionObject.push(para.actionObject);
                dbFlag++;
                para.nStep = "asynActionRunSub";
                break;
            case "asynActionRunSub":
                para.actionObject.$actionRunSub(para.action, arrPara, function(result) {
                    para.result = result;
                    para.nStep = "end";
                    if (++dbFlag === 2) {
                        $this.$actionRun(eventName, actionName, arrPara, successCallBack, errorCallBack);
                    }
                }, function(error) {
                    para.error = error;
                    para.nStep = "errorEnd";
                    if (++dbFlag === 2) {
                        $this.$actionRun(eventName, actionName, arrPara, successCallBack, errorCallBack);
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

//动作运行子函数
$CGeneAction.prototype.$actionRunSub = function(action, arrPara, successCallBack, errorCallBack) {
    let $this = this;
    let dbData;
    let cacheResult, cachePointKey, cacheNumber;
    let fnname = "$CGeneAction.prototype.$actionRunSub";
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
            case "recordRead":
                cacheResult = $this.$db.cacheColRead($this.$cloudDBName, $this.$mac.tb.action, action);
                cachePointKey = cacheResult.table;
                cacheNumber = cacheResult.number;
                para.event = cachePointKey[$this.$mac.fd.action.eventId][cacheNumber];
                para.subEventPort = cachePointKey[$this.$mac.fd.action.subeventportId][cacheNumber];
                para.eventPort = cachePointKey[$this.$mac.fd.action.eventportId][cacheNumber];
                para.runType = cachePointKey[$this.$mac.fd.action.runType][cacheNumber];
                if (para.event) {
                    if(para.runType === $this.$mac.enum1.action.runType.asyn){
                        para.instruct = {
                            geneAddr: $this.$geneObject.$geneAddr,
                            server: $this.$geneObject.$server,
                            actionLog: $this.$index.actionLog
                        }
                    }else{
                        para.instruct = {
                            geneAddr: $this.$geneObject.$geneAddr,
                            server: $this.$geneObject.$server,
                            eventLog: $this.$eventLog,
                            index: $this.$index,
                            number: null
                        }
                    }
                    para.nStep = "$eventRunSub";
                } else if (para.subEventPort) {
                    para.nStep = "$eventRunPullSub";
                } else {
                    para.nStep = "$eventRunInputSub";
                }
                dbFlag++;
                break;
            case "$eventRunSub":
                $this.$eventRunSub(para.event, para.instruct, arrPara, $this.$mac.enum1.event.command.run, function (result) {
                    para.result = result;
                    para.nStep = "end";
                    if (++dbFlag === 2) {
                        $this.$actionRunSub(action, arrPara, successCallBack, errorCallBack);
                    }
                }, function(error) {
                    para.error = error;
                    para.nStep = "errorEnd";
                    if (++dbFlag === 2) {
                        $this.$actionRunSub(action, arrPara, successCallBack, errorCallBack);
                    }
                });
                break;
            case "$eventRunPullSub":
                //调用事务运行拉取子函数
                $this.$eventRunPullSub(para.subEventPort, arrPara, function(result) {
                    if(result && result.arrPara){
                        para.result = result.arrPara;
                    }else{
                        para.result = result;
                    }
                    para.nStep = "end";
                    if (++dbFlag === 2) {
                        $this.$actionRunSub(action, arrPara, successCallBack, errorCallBack);
                    }
                }, function(error) {
                    para.error = error;
                    para.nStep = "errorEnd";
                    if (++dbFlag === 2) {
                        $this.$actionRunSub(action, arrPara, successCallBack, errorCallBack);
                    }
                });
                break;
            case "$eventRunInputSub":
                //调用事务运行输入子函数
                $this.$eventRunInputSub(para.eventPort, arrPara, function(result) {
                    para.result = result;
                    para.nStep = "end";
                    if (++dbFlag === 2) {
                        $this.$actionRunSub(action, arrPara, successCallBack, errorCallBack);
                    }
                }, function(error) {
                    para.error = error;
                    para.nStep = "errorEnd";
                    if (++dbFlag === 2) {
                        $this.$actionRunSub(action, arrPara, successCallBack, errorCallBack);
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

//动作运行子函数
$CGeneAction.prototype.$eventRunBranch = function(action, successCallBack, errorCallBack) {
    let $this = this;
    let fnname = "$CGeneAction.prototype.$eventRunBranch";
    let cacheResult, cachePointKey, cacheNumber;
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
            case "expressionRead":
                cacheResult = $this.$db.cacheColRead($this.$cloudDBName, $this.$mac.tb.action, action);
                cachePointKey = cacheResult.table;
                cacheNumber = cacheResult.number;
                para.actionExpression = cachePointKey[$this.$mac.fd.action.postAction][cacheNumber]["expression"];
                para.nStep = "expressionRun";
                para.n = 0;
                dbFlag++;
                break;
            case "expressionRun":
                //运行expressionRun[n]
                if (para.n === para.actionExpression.length) {
                    para.nStep = "end";
                    dbFlag++;
                    break;
                }
                if ($this["exp_action" + action + "_" + para.n]()) {
                    para.nStep = "branchFunction";
                } else {
                    para.n++;
                }
                dbFlag++;
                break;
            case "branchFunction":
                //调用n分叉对应的分叉函数
                $this["action" + action + "_" + para.n](function(result) {
                    para.result = result;
                    para.nStep = "end";
                    if (++dbFlag === 2) {
                        $this.$eventRunBranch(action, successCallBack, errorCallBack);
                    }
                }, function(error) {
                    para.error = {
                        code: 1,
                        message: error
                    };
                    para.nStep = "errorEnd";
                    if (++dbFlag === 2) {
                        $this.$eventRunBranch(action, successCallBack, errorCallBack);
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

//同步结束函数
$CGeneAction.prototype.$eventSynchEnd = function(successCallBack, errorCallBack) {
    let $this = this;
    let dbData;
    let cacheResult, cachePointKey, cacheNumber, arrField, arrValue;
    let fnname = "$CGeneAction.prototype.$eventSynchEnd";
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
            case "postActionLogNew":
                //结束动作存入到当前动作记录的后继动作记录中
                dbData = {};
                dbData[$this.$mac.tb.$l_postActionLog] = {};
                dbData[$this.$mac.tb.$l_postActionLog][$this.$mac.fd.pt_id] = [$this.$index.actionLog];
                dbData[$this.$mac.tb.$l_postActionLog][$this.$mac.fd.$l_postActionLog.postAction] = [$this.$mac.action.type.synch];
                $this.$zDB.zeroRecordNew($this.$dbName, [$this.$mac.tb.$l_postActionLog], dbData, $this.$dataTrans, function(result) {
                    para.nStep = "getEventOutputPara";
                    if (++dbFlag === 2) {
                        $this.$eventSynchEnd(successCallBack, errorCallBack);
                    }
                }, para.errorCallBack);
                break;
            case "getEventOutputPara":
                let tempIndex = $this.$geneObject.$eventTrack.eventLog.indexOf($this.$eventLog);
                para.eventObject = $this.$geneObject.$eventTrack.eventObject[tempIndex];
                cacheResult = $this.$db.cacheColRead($this.$cloudDBName, $this.$mac.tb.event, para.eventObject.$event);
                cachePointKey = cacheResult.table;
                cacheNumber = cacheResult.number;
                if (cachePointKey[$this.$mac.fd.event.para][cacheNumber] !== null) {
                    let j = 0;
                    para.arrPara = [];
                    for (var i = 0; i < cachePointKey[$this.$mac.fd.event.para][cacheNumber]['port_type'].length; i++) {
                        if (cachePointKey[$this.$mac.fd.event.para][cacheNumber]["port_type"][i] === $this.$mac.enum1.event.para.portType.out) {
                            para.arrPara[j] = para.eventObject.$variable[cachePointKey[$this.$mac.fd.event.para][cacheNumber]["name"][i]];
                            j++;
                        }
                    }
                    if (para.arrPara.length === 0) {
                        para.arrPara = null;
                    }
                } else {
                    para.arrPara = null;
                }
                para.nStep = "eventLogParaModify";
                dbFlag++;
                break;
            case "eventLogParaModify":
                //把event事件输出参数对应变量数值填入para,并填入到eventLog的输出参数字段,eventLog运行状态填入结束
                dbData = {};
                dbData[$this.$mac.tb.$l_eventLog] = {};
                dbData[$this.$mac.tb.$l_eventLog][$this.$mac.fd.$l_eventLog.outputPara] = [para.arrPara];
                dbData[$this.$mac.tb.$l_eventLog][$this.$mac.fd.$l_eventLog.runStatus] = [$this.$mac.enum1.$l_eventLog.runStatus.end];
                $this.$zDB.zeroRecordModify($this.$dbName, [$this.$mac.tb.$l_eventLog], [[$this.$eventLog]], dbData, $this.$dataTrans, function() {
                    para.nStep = "eventLogRead";
                    if (++dbFlag === 2) {
                        $this.$eventSynchEnd(successCallBack, errorCallBack);
                    }
                }, para.errorCallBack);
                break;
            case "eventLogRead":
                cacheResult = $this.$db.cacheColRead($this.$dbName, $this.$mac.tb.$l_eventLog, $this.$eventLog);
                cachePointKey = cacheResult.table;
                cacheNumber = cacheResult.number;
                para.instruct = cachePointKey[$this.$mac.fd.$l_eventLog.instruct][cacheNumber];
                if (para.instruct.geneAddr === $this.$geneObject.$geneAddr) {//当前粒子
                    para.nStep = "$eventReturnRespond";
                } else {
                    //instruct.server是否为页面
                    if (typeof (para.instruct.server) === "string" && para.instruct.server.indexOf("w") === 0) {//页面
                        para.nStep = "eventRead";
                    } else {
                        //instruct,para,geneAddr,server,event赋值给returnPara
                        para.returnPara = [para.instruct, para.arrPara, $this.$geneObject.$geneAddr, $this.$geneObject.$server, para.eventObject.$event];
                        para.nStep = "eventReturnRespond_instruct";
                    }
                }
                dbFlag++;
                break;
            case "$eventReturnRespond":
                $this.$eventReturnRespond(para.instruct, para.arrPara, "", "", "", function() {
                    para.nStep = "end";
                    if (++dbFlag === 2) {
                        $this.$eventSynchEnd(successCallBack, errorCallBack);
                    }
                }, function(error) {
                    para.error = error;
                    para.nStep = "errorEnd";
                    if (++dbFlag === 2) {
                        $this.$eventSynchEnd(successCallBack, errorCallBack);
                    }
                });
                break;
            case "eventReturnRespond_instruct":
                //instruct.server为云端
                $this.$geneRemoteCall(para.instruct.geneAddr, para.instruct.server, "$eventReturnRespond", para.returnPara, function() {
                    para.nStep = "eventRead";
                    if (++dbFlag === 2) {
                        $this.$eventSynchEnd(successCallBack, errorCallBack);
                    }
                }, function(error) {
                    para.error = error;
                    para.nStep = "errorEnd";
                    if (++dbFlag === 2) {
                        $this.$eventSynchEnd(successCallBack, errorCallBack);
                    }
                });
                break;
            case "eventRead":
                //获取当前event的事务选项
                cacheResult = $this.$db.cacheColRead($this.$cloudDBName, $this.$mac.tb.event, para.eventObject.$event);
                cachePointKey = cacheResult.table;
                cacheNumber = cacheResult.number;
                if (cachePointKey[$this.$mac.fd.event.option][cacheNumber] === $this.$mac.enum1.event.option.start) {//event为启动事务
                    para.eventObject.$command = $this.$mac.enum1.event.command.end;//
                    para.nStep = "end";
                } else {
                    para.nStep = "getEventLog";
                }
                dbFlag++;
                break;
            case "getEventLog":
                //todo:是否需要其他条件
                cacheResult = $this.$db.cacheColQuery($this.$dbName, $this.$mac.tb.$l_eventLog, $this.$mac.fd.$l_eventLog.eventId, "=", para.eventObject.$event);
                cachePointKey = cacheResult.table;
                cacheNumber = cacheResult.arrNumber;
                para.eventLog = cachePointKey[$this.$mac.fd.id][cacheNumber[0]];
                para.nStep = "getActionLogRun";
                dbFlag++;
                break;
            case "getActionLogRun":
                arrField = [$this.$mac.fd.pt_id, $this.$mac.fd.$l_actionLog.runStatus];
                arrValue = [para.eventLog, $this.$mac.enum1.$l_actionLog.runStatus.run];
                cacheResult = $this.$db.cacheColQueryMulti($this.$dbName, $this.$mac.tb.$l_actionLog, arrField, "=", arrValue);
                cachePointKey = cacheResult.table;
                cacheNumber = cacheResult.arrNumber;
                para.actionId = cachePointKey[$this.$mac.fd.$l_actionLog.actionId][cacheNumber[0]];
                para.nStep = "actionRun";
                dbFlag++;
                break;
            case "actionRun":
                $this.$actionRun(para.actionId, function() {
                    para.nStep = "end";
                    if (++dbFlag === 2) {
                        $this.$eventSynchEnd(successCallBack, errorCallBack);
                    }
                }, function(error) {
                    para.error = error;
                    para.nStep = "errorEnd";
                    if (++dbFlag === 2) {
                        $this.$eventSynchEnd(successCallBack, errorCallBack);
                    }
                }, function() {
                    para.nStep = "end";
                    if (++dbFlag === 2) {
                        $this.$eventSynchEnd(successCallBack, errorCallBack);
                    }
                });
                break;
            case "end":
                para.successCallBack();
                return;
            case "default":
                return;
        }
        if (++dbFlag === 1) {
            return;
        }
    }
};
