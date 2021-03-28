function $CTerminalGeneBase(that) {
    this.$debugFlag = that.debugFlag;
    this.$mac = that.mac;
    this.$comm = that.comm;
    this.$zDB = that.zDB;
    this.$db = that.db;
    this.$dbOther = that.dbOther;
    this.$cloudDBName = that.cloudDBName;
    this.$dbName = that.dbName;
    this.$type = null;
    this.$server = null;
    this.$geneLog = null;
    this.$serverIP = {
        IPAddr: [],
        domain: [],
        status: []
    };
    this.$monitorGeneAddr = null;
    this.$dynamic = null;
    this.$actionTrack = {
        geneAddr: [],
        server: [],
        index: [],
        actionObject: []
    };
    this.$eventTrack = {
        eventLog: [],
        eventObject: []
    };
    this.$vueObject = that.vueObj;
    this.$memServerIP = this.$mac.memServerIP;
    this.$zeroRpcClient = that.zeroRpcClient;// RPC

    this.$geneInitLize(that.geneAddr, that.parentGeneAddr, that.parentServer, that.user, that.url);
    this.$apiDB = new $CTerminalApiDB();

    // this.$addSysEvent();// todo 临时添加数据用
}

$CTerminalGeneBase.prototype.$setPara = function (successCallBack, errorCallBack) {
    return {
        successCallBack: successCallBack,
        errorCallBack: errorCallBack,
        nStep: 0
    };
};

$CTerminalGeneBase.prototype.$terminalGeneOpen = function (URL, parameter, successCallBack, errorCallBack) {
    let $this = this, para, dbFlag;
    if (successCallBack !== null) {
        errorCallBack = $this.$setPara(successCallBack, errorCallBack);
        successCallBack = null;
    }
    para = errorCallBack;
    while (1) {
        dbFlag = 0;
        if ($this.$debugFlag) {
            if (para.nStep !== para.nStepOld) {
                console.log("$CTerminalGeneBase.prototype.$terminalGeneOpen: para.nStep = " + para.nStep);
                para.nStepOld = para.nStep;
            }
        }
        switch (para.nStep) {
            case 0:
                let userInfo = $CConfig.prototype.$getCookie("$zero", true).userInfo;
                if (userInfo) {
                    let user = window.name.split("_")[4];
                    if (user) {// 存在
                        let m = userInfo.user.indexOf(user);
                        para.userInfo = {};
                        for (let i in userInfo) {
                            para.userInfo[i] = userInfo[i][m];
                        }
                    } else {// 不存在
                        let m = userInfo.activty.indexOf(1);
                        user = userInfo.user(m);
                    }
                    URL += "&user=" + user;
                    if (parameter !== null) URL += "&para=" + parameter;
                    let group = $this.$getUrlPara("group");
                    let geneAddr = $this.$getUrlPara("geneAddr");
                    let parent = $this.$getUrlPara("parent");
                    let parentGeneAddr = parent.geneAddr;
                    para.winName = "t_" + group + "_" + parentGeneAddr + "_" + geneAddr + "_" + user + "_0";
                    if ($this.$debugFlag) {
                        para.nStep = "pageWindowOpen";
                        console.log("$CTerminalGeneBase.prototype.$terminalGeneOpen: para.nStep = " + para.nStep);
                    }
                } else {
                    para.errorMessage = "cookie错误: 不存在userInfo信息";
                    para.nStep = "error";
                    dbFlag++;
                    break;
                }
            case "pageWindowOpen":
                $this.$comm.pageWindowOpen(para.winName, URL, "", "", function () {
                    para.nStep = "end";
                    if (++dbFlag === 2) {
                        $this.$terminalGeneOpen(URL, parameter, successCallBack, errorCallBack);
                    }
                }, para.errorCallBack);
                break;
            case "error":
                para.errorCallBack(para.errorMessage);
                return;
            case "end":
                para.successCallBack();
                return;
        }
        if (++dbFlag === 1) {
            return;
        }
    }
};

$CTerminalGeneBase.prototype.$geneInitLize = function (geneAddr, parentGeneAddr, parentServer, user, url) {
    this.$geneAddr = geneAddr;
    this.$parentGeneAddr = parentGeneAddr;
    this.$parentServer = parentServer;
    this.$userGeneAddr = parentGeneAddr;
    this.$userServer = parentServer;
    this.$user = user;
    this.$url = url;
    this.$type = this.$mac.enum1.vesselClass.type.terminal;
    this.$gene = this.$vueObject.$gene;
    let dbRecord = this.$db.cacheColQuery(this.$cloudDBName, this.$mac.tb.vesselClass, this.$mac.fd.pt_id, "=", this.$gene);
    this.$dynamic = 0;
    for (let i = 0; i < dbRecord.arrNumber.length; i++) {
        if (this.$dynamic < dbRecord.table[this.$mac.fd.vesselClass.number][dbRecord.arrNumber[i]]) {
            this.$dynamic = dbRecord.table[this.$mac.fd.vesselClass.number][dbRecord.arrNumber[i]];
        }
    }
    this.$dynamic++;

    // 添加粒子变量 todo 未考虑表格变量
    let cacheResult = this.$db.cacheColQuery(this.$cloudDBName, this.$mac.tb.geneVariable, this.$mac.fd.pt_id, "=", this.$gene);
    let cachePointKey = cacheResult.table;
    let cacheNumber = cacheResult.arrNumber;
    this.$geneVar = {};
    for (let i = 0; i < cacheNumber.length; i++) {
        if (typeof cachePointKey[this.$mac.fd.geneVariable.default][cacheNumber[i]] === "object") {
            this.$geneVar[cachePointKey[this.$mac.fd.geneVariable.name][cacheNumber[i]]] = JSON.parse(JSON.stringify(cachePointKey[this.$mac.fd.geneVariable.default][cacheNumber[i]]));
        } else {
            this.$geneVar[cachePointKey[this.$mac.fd.geneVariable.name][cacheNumber[i]]] = cachePointKey[this.$mac.fd.geneVariable.default][cacheNumber[i]];
        }
    }
};

$CTerminalGeneBase.prototype.$geneRun = function (successCallBack, errorCallBack) {
    let $this = this, para, dbFlag, dbResult, that, funName, funPara;
    if (successCallBack !== null) {
        errorCallBack = $this.$setPara(successCallBack, errorCallBack);
        successCallBack = null;
    }
    para = errorCallBack;
    while (1) {
        dbFlag = 0;
        if ($this.$debugFlag) {
            if (para.nStep !== para.nStepOld) {
                console.log("$CTerminalGeneBase.prototype.$geneRun: para.nStep = " + para.nStep);
                para.nStepOld = para.nStep;
            }
        }
        switch (para.nStep) {
            case 0:
                $this.$dbOther.jsFileDatabaseAdd($this.$memServerIP, $this.$vueObject.$r_db);
                let arrField = [
                    $this.$mac.fd.$l_geneLog.geneAddr,
                    // $this.$mac.fd.$l_geneLog.checkCode,
                    // $this.$mac.fd.$l_geneLog.endTime,
                    // $this.$mac.fd.$l_geneLog.errorLength,
                    $this.$mac.fd.$l_geneLog.instructCode,
                    // $this.$mac.fd.$l_geneLog.linkStatus,
                    $this.$mac.fd.$l_geneLog.parentGeneAddr,
                    $this.$mac.fd.$l_geneLog.parentServer,
                    $this.$mac.fd.$l_geneLog.startTime,
                    $this.$mac.fd.$l_geneLog.status
                ];
                let arrData = {
                    [$this.$mac.fd.$l_geneLog.geneAddr]: [$this.$geneAddr],
                    [$this.$mac.fd.$l_geneLog.instructCode]: [$this.$url.instruct],
                    [$this.$mac.fd.$l_geneLog.parentGeneAddr]: [$this.$parentGeneAddr],
                    [$this.$mac.fd.$l_geneLog.parentServer]: [$this.$parentServer],
                    [$this.$mac.fd.$l_geneLog.startTime]: [$this.$getCurrentDateTime()],
                    [$this.$mac.fd.$l_geneLog.status]: [$this.$mac.enum1.$l_geneLog.status.open]
                };
                $this.$db.cacheRecordNew($this.$dbName, $this.$mac.tb.$l_geneLog, [1], arrField, arrData);
                $this.$geneLog = 1;
                $this.$server = window.name;
                if ($this.$parentServer === null) {
                    para.nStep = "userLink";
                    dbFlag++;
                    break;
                }
                // 实例化动作类
                that = {
                    geneObject: $this,
                    geneAddr: $this.$url.instruct.geneAddr,
                    server: $this.$url.instruct.server,
                    eventLog: $this.$url.instruct.eventLog,
                    index: $this.$url.instruct.index
                };
                para.actionObject = new $CGeneAction(that);
                $this.$actionTrack.index.push($this.$url.instruct.index);
                $this.$actionTrack.actionObject.push(para.actionObject);

                funName = "$LinkParent";
                funPara = [$this.$geneAddr, $this.$server];
                para.actionObject.$geneRemoteCall($this.$parentGeneAddr, $this.$parentServer, funName, funPara, function (result) {
                    // todo
                    $this.$serverIP = result.hardServer;

                    $this.$userGeneAddr = $this.$parentGeneAddr; //todo
                    $this.$userServerIP = $this.$serverIP.serverIP[$this.$serverIP.status.indexOf(1)];

                    $this.$monitorGeneAddr = result.monitorGeneAddr;
                    para.dataPortLog = result.dataPortLog;
                    para.eventPortLog = result.eventPortLog;
                    para.command = result.command;
                    para.nStep = "socketConnect";
                    if (++dbFlag === 2) {
                        $this.$geneRun(successCallBack, errorCallBack);
                    }
                }, para.errorCallBack);
                break;
            case "userLink":
                let funcPara = [null, "userLink", [$this.$url.parent.geneSet, $this.$geneAddr, $this.$server], null, 0, function (result) {
                    // todo 组织serverIP
                    $this.$serverIP.IPAddr.push(result.serverIP);
                    $this.$serverIP.status.push(1);
                    $this.$serverIP.domain.push(null);

                    $this.$userGeneAddr = result.result.parentGeneAddr; //todo
                    $this.$userServerIP = result.serverIP;

                    result = result.result;
                    $this.$parentGeneAddr = result.parentGeneAddr;
                    $this.$parentServer = result.parentServer;

                    $this.$monitorGeneAddr = result.monitorGeneAddr;
                    para.dataPortLog = result.dataPortLog;
                    para.eventPortLog = result.eventPortLog;
                    $this.$url.instruct = result.instruct;

                    $this.setWindowPara($this.$url.group, $this.$parentGeneAddr, $this.$geneAddr, $this.$url.user, 0);
                    $this.$server = window.name;

                    para.nStep = "setGeneLog";
                    if (++dbFlag === 2) {
                        $this.$geneRun(successCallBack, errorCallBack);
                    }
                }, para.errorCallBack];
                $this.$zeroRpcClient.remoteCall($this.$vueObject.$serverIp, funcPara, $this.$mac.timeOut_RPC, function () {
                }, para.errorCallBack);
                break;
            case "setGeneLog":
                dbResult = $this.$db.cacheColRead($this.$dbName, $this.$mac.tb.$l_geneLog, $this.$geneLog);
                dbResult.table[$this.$mac.fd.$l_geneLog.parentGeneAddr][dbResult.number] = $this.$parentGeneAddr;
                dbResult.table[$this.$mac.fd.$l_geneLog.parentServer][dbResult.number] = $this.$parentServer;
                para.command = $this.$mac.enum1.event.command.run;
                // 实例化动作类
                that = {
                    geneObject: $this,
                    geneAddr: $this.$url.instruct.geneAddr,
                    server: $this.$url.instruct.server,
                    eventLog: $this.$url.instruct.eventLog,
                    index: $this.$url.instruct.index
                };
                para.actionObject = new $CGeneAction(that);
                $this.$actionTrack.index.push($this.$url.instruct.index);
                $this.$actionTrack.actionObject.push(para.actionObject);
                if ($this.$debugFlag) {
                    para.nStep = "socketConnect";
                    console.log("$CTerminalGeneBase.prototype.$geneRun: para.nStep = " + para.nStep);
                }
            case "socketConnect":// todo 建联 alice
                if (!$CConfig.socketConnect) {
                    para.nStep = "dataTransOpen";
                    ++dbFlag;
                    break
                }
                $this.$zeroRpcClient.socketConnect($this.$serverIP.IPAddr[$this.$serverIP.status.indexOf(1)], function () {
                    para.nStep = "dataTransOpen";
                    if (++dbFlag === 2) {
                        $this.$geneRun(successCallBack, errorCallBack);
                    }
                }, para.errorCallBack);
                break;
            case "dataTransOpen":
                $this.$url.instruct.index.number = $this.$url.instruct.number;
                $this.$zDB.dataTransOpen($this.$dbName, $this.$url.instruct.index, function (result) {
                    para.actionObject.$dataTrans = result;
                    para.nStep = "actionObject.portInitlize";
                    if (++dbFlag === 2) {
                        $this.$geneRun(successCallBack, errorCallBack);
                    }
                }, para.errorCallBack);
                break;
            case "actionObject.portInitlize":
                para.actionObject.$portInitlize($this.$geneLog, para.dataPortLog, para.eventPortLog);
                if ($this.$url.eventPort) {
                    dbResult = $this.$db.cacheColRead($this.$cloudDBName, $this.$mac.tb.eventPort, $this.$url.eventPort);
                    para.event = dbResult.table[$this.$mac.fd.eventPort.eventId][dbResult.number];
                } else {
                    dbResult = $this.$db.cacheColQueryMulti($this.$cloudDBName, $this.$mac.tb.event, [$this.$mac.fd.pt_id, $this.$mac.fd.event.option], "=", [$this.$gene, $this.$mac.enum1.event.option.start]);
                    para.event = dbResult.table[$this.$mac.fd.id][dbResult.arrNumber[0]];
                }
                if ($this.$debugFlag) {
                    para.nStep = "actionObject.eventRunSub";
                    console.log("$CTerminalGeneBase.prototype.$geneRun: para.nStep = " + para.nStep);
                }
            case "actionObject.eventRunSub":
                para.actionObject.$eventRunSub(para.event, $this.$url.instruct, $this.$url.para, para.command, function () {
                    para.nStep = "end";
                    if (++dbFlag === 2) {
                        $this.$geneRun(successCallBack, errorCallBack);
                    }
                }, para.errorCallBack);
                break;
            case "end":
                para.successCallBack();
                break;
        }
        if (++dbFlag === 1) {
            return;
        }
    }
};

$CTerminalGeneBase.prototype.$remoteCallReceive = function (method, methodPara, instruct, successCallBack, errorCallBack) {
    let $this = this, para, dbFlag, n;
    if (successCallBack !== null) {
        errorCallBack = $this.$setPara(successCallBack, errorCallBack);
        successCallBack = null;
    }
    para = errorCallBack;
    while (1) {
        dbFlag = 0;
        if ($this.$debugFlag) {
            if (para.nStep !== para.nStepOld) {
                console.log("$CTerminalGeneBase.prototype.$terminalGeneOpen: para.nStep = " + para.nStep);
                para.nStepOld = para.nStep;
            }
        }
        switch (para.nStep) {
            case 0:
                para.m = -1;
                for (let i = 0; i < $this.$actionTrack.index.length; i++) {
                    if (JSON.stringify($this.$actionTrack.index[i]) === JSON.stringify(instruct.index)) {
                        para.m = i;
                        break;
                    }
                }
                if (para.m === -1) {
                    let that = {
                        geneObject: $this,
                        geneAddr: instruct.geneAddr,
                        server: instruct.server,
                        eventLog: instruct.eventLog,
                        index: instruct.index
                    };
                    para.actionObject = new $CGeneAction(that);
                    para.m = $this.$actionTrack.index.length;
                    $this.$actionTrack.index.push(instruct.index);
                    $this.$actionTrack.actionObject.push(para.actionObject);
                } else {
                    para.actionObject = $this.$actionTrack.actionObject[para.m];
                }
                para.m = para.actionObject.$receiveLog.geneAddr.indexOf(instruct.geneAddr);
                if (typeof instruct.server === "string" && instruct.server[0] === "w") {// 页面
                    para.nStep = "methodJudge";
                } else {
                    para.m = para.actionObject.$receiveLog.geneAddr.indexOf(instruct.geneAddr);
                    if (para.m === -1) {
                        para.m = para.actionObject.$receiveLog.geneAddr.length;
                        para.actionObject.$receiveLog.geneAddr.push(instruct.geneAddr);
                        para.actionObject.$receiveLog.server.push(instruct.server);
                        para.actionObject.$receiveLog.number.push(0);

                        para.actionObject.$receiveLog.para.push([]);
                        para.actionObject.$receiveLog.error.push([]);
                        para.actionObject.$receiveLog.errorPara.push([]);
                        para.actionObject.$receiveLog.success.push([]);
                    }
                    if (instruct.number === para.actionObject.$receiveLog.number[para.m]) {
                        if (!para.actionObject.$receiveLog.success[para.m][instruct.number]) {
                            para.actionObject.$receiveLog.success[para.m].push([]);
                            para.actionObject.$receiveLog.error[para.m].push([]);
                        }
                        n = para.actionObject.$receiveLog.success[para.m][instruct.number].length;
                        para.actionObject.$receiveLog.success[para.m][instruct.number].push(para.successCallBack);
                        para.actionObject.$receiveLog.error[para.m][instruct.number].push(para.errorCallBack);
                        if (n === 0) {
                            para.nStep = "methodJudge";
                        } else {
                            para.nStep = "end";
                        }
                    } else if (instruct.number < para.actionObject.$receiveLog.number[para.m]) {
                        if (para.actionObject.$receiveLog.para[para.m][instruct.number] === null) {
                            para.error = para.actionObject.$receiveLog.errorPara[para.m][instruct.number];
                            para.nStep = "error";
                        } else {
                            para.result = para.actionObject.$receiveLog.para[para.m][instruct.number];
                            para.nStep = "end";
                        }
                    } else {
                        para.error = "instruct.number错误";
                        para.nStep = "error";
                    }
                }
                dbFlag++;
                break;
            case "methodJudge":
                let event, eventPara, subGeneAddr, subEventPort, inputPara, eventPort, asynInstruct, pullPara, dbResult;
                switch (method) {
                    case '$remoteDataConfirm':
                        para.actionObject.$remoteDataConfirm(function(result) {
                            para.result = result;
                            para.nStep = "isPage_success";
                            if (++dbFlag === 2) {
                                $this.$remoteCallReceive(method, methodPara, instruct, successCallBack, errorCallBack);
                            }
                        }, function(error) {
                            para.error = error;
                            para.nStep = "isPage_error";
                            if (++dbFlag === 2) {
                                $this.$remoteCallReceive(method, methodPara, instruct, successCallBack, errorCallBack);
                            }
                        });
                        break
                    case "$eventRunSub":
                        event = methodPara[0];
                        eventPara = methodPara[1];
                        para.actionObject.$eventRunSub(event, instruct, eventPara, $this.$mac.enum1.event.command.run, function (result) {
                            para.result = result;
                            para.nStep = "isPage_success";
                            if (++dbFlag === 2) {
                                $this.$remoteCallReceive(method, methodPara, instruct, successCallBack, errorCallBack);
                            }
                        }, function (error) {
                            para.error = error;
                            para.nStep = "isPage_error";
                            if (++dbFlag === 2) {
                                $this.$remoteCallReceive(method, methodPara, instruct, successCallBack, errorCallBack);
                            }
                        });
                        break;
                    case "$eventRunInput":
                        subGeneAddr = methodPara[0];
                        subEventPort = methodPara[1];
                        inputPara = methodPara[2];
                        para.actionObject.$eventRunInput(subGeneAddr, subEventPort, instruct, inputPara, function (result) {
                            para.result = result;
                            para.nStep = "isPage_success";
                            if (++dbFlag === 2) {
                                $this.$remoteCallReceive(method, methodPara, instruct, successCallBack, errorCallBack);
                            }
                        }, function (error) {
                            para.error = error;
                            para.nStep = "isPage_error";
                            if (++dbFlag === 2) {
                                $this.$remoteCallReceive(method, methodPara, instruct, successCallBack, errorCallBack);
                            }
                        });
                        break;
                    case "$syncEventPull":
                        eventPort = methodPara[0];
                        event = methodPara[1];
                        pullPara = methodPara[2];
                        para.actionObject.$eventRunPull(eventPort, event, instruct, pullPara, function (result) {
                            para.result = result;
                            para.nStep = "isPage_success";
                            if (++dbFlag === 2) {
                                $this.$remoteCallReceive(method, methodPara, instruct, successCallBack, errorCallBack);
                            }
                        }, function (error) {
                            para.error = error;
                            para.nStep = "isPage_error";
                            if (++dbFlag === 2) {
                                $this.$remoteCallReceive(method, methodPara, instruct, successCallBack, errorCallBack);
                            }
                        });
                        break;
                    case "$asynEventPull":
                        eventPort = methodPara[0];
                        event = methodPara[1];
                        asynInstruct = methodPara[2];
                        pullPara = methodPara[3];
                        para.actionObject.$eventRunPull(eventPort, event, asynInstruct, pullPara, function (result) {
                            para.result = result;
                            para.nStep = "isPage_success";
                            if (++dbFlag === 2) {
                                $this.$remoteCallReceive(method, methodPara, instruct, successCallBack, errorCallBack);
                            }
                        }, function (error) {
                            para.error = error;
                            para.nStep = "isPage_error";
                            if (++dbFlag === 2) {
                                $this.$remoteCallReceive(method, methodPara, instruct, successCallBack, errorCallBack);
                            }
                        });
                        break;
                    default:
                        dbResult = $this.$db.cacheColQueryMulti($this.$cloudDBName, $this.$mac.tb.event, [$this.$mac.fd.pt_id, $this.$mac.fd.event.eventName], "=", [$this.$gene, method]);
                        event = dbResult.table[$this.$mac.fd.id][dbResult.arrNumber[0]];
                        para.actionObject.$eventRunSub(event, instruct, methodPara, $this.$mac.enum1.event.command.run, function (result) {
                            para.result = result;
                            para.nStep = "isPage_success";
                            if (++dbFlag === 2) {
                                $this.$remoteCallReceive(method, methodPara, instruct, successCallBack, errorCallBack);
                            }
                        }, function (error) {
                            para.error = error;
                            para.nStep = "isPage_error";
                            if (++dbFlag === 2) {
                                $this.$remoteCallReceive(method, methodPara, instruct, successCallBack, errorCallBack);
                            }
                        });
                }
                break;
            case "isPage_success":
                if (!(typeof instruct.server === "string" && instruct.server[0] === "w")) {// 非页面
                    para.actionObject.$receiveLog.para[para.m][instruct.number] = para.result;
                    para.actionObject.$receiveLog.number[para.m]++;
                    let successTotal = para.actionObject.$receiveLog.success[para.m][instruct.number].length;
                    let x = 0;
                    while (x !== successTotal) {
                        para.actionObject.$receiveLog.success[para.m][instruct.number][x](para.result);
                        x++;
                    }
                }
                para.nStep = "end";
                dbFlag++;
                break;
            case "isPage_error":
                if (!(typeof instruct.server === "string" && instruct.server[0] === "w")) {// 非页面
                    para.actionObject.$receiveLog.errorPara[para.m][instruct.number] = para.error;
                    para.actionObject.$receiveLog.number[para.m]++;
                    let errorTotal = para.actionObject.$receiveLog.error[para.m][instruct.number].length;
                    let x = 0;
                    while (x !== errorTotal) {
                        para.actionObject.$receiveLog.error[para.m][instruct.number][x](para.error);
                        x++;
                    }
                }
                para.nStep = "error";
                dbFlag++;
                break;
            case "error":
                para.errorCallBack(para.error);
                return;
            case "end":
                para.successCallBack(para.result);
                return;
        }
        if (++dbFlag === 1) {
            return;
        }
    }
};

// 获取URL中?后面的参数
$CTerminalGeneBase.prototype.$getUrlPara = function (paraName) {
    let reg = new RegExp("(?<=((\\?|\\&)" + paraName + "=))[^&]+");
    let matchData = window.decodeURIComponent(location.search).match(reg);
    if (matchData) matchData = matchData[0];
    if (/[^\w]/.test(matchData)) matchData = JSON.parse(matchData);
    if (paraName === "geneAddr" || paraName === "parentGeneAddr") matchData = Number(matchData);
    return matchData;
};

$CTerminalGeneBase.prototype.$getCurrentDateTime = function () {
    let myDate = new Date();
    let dateStr = "-", timeStr = ":";
    let date = myDate.getFullYear() + dateStr + charLeftFillZero(myDate.getMonth() + 1) + dateStr + charLeftFillZero(myDate.getDate());
    let time = charLeftFillZero(myDate.getHours()) + timeStr + charLeftFillZero(myDate.getMinutes()) + timeStr + charLeftFillZero(myDate.getSeconds());
    return date + " " + time;

    function charLeftFillZero(n) {
        return n < 10 ? "0" + n : n;
    }
};

$CTerminalGeneBase.prototype.$getDataPortDeploy = function (subGeneId) {
    let nStep = 0, dbRecord, dataPortDeploy;
    while (1) {
        switch (nStep) {
            case 0:
            case "querySubDataPort":// 获取dataPortDeploy
                dbRecord = this.$db.cacheColQuery(this.$cloudDBName, this.$mac.tb.subDataPort, this.$mac.fd.pt_id, "=", subGeneId);
                dataPortDeploy = {
                    dataport: Array.from(dbRecord.arrNumber, v => dbRecord.table[this.$mac.fd.id][v]),
                    parentDataPort: Array.from(dbRecord.arrNumber, v => dbRecord.table[this.$mac.fd.subDataPort.connectParentdata][v] !== null ? dbRecord.table[this.$mac.fd.subDataPort.dataportName][v] : null),
                    table: Array.from(dbRecord.arrNumber, v => dbRecord.table[this.$mac.fd.subDataPort.dataportName][v]),
                    otherDataPort: Array.from(dbRecord.arrNumber, v => dbRecord.table[this.$mac.fd.subDataPort.connectSubdata][v] && dbRecord.table[this.$mac.fd.subDataPort.connectSubdata][v].subgene_name.length > 0 ? true : null),
                    connectDir: Array.from(dbRecord.arrNumber, v => dbRecord.table[this.$mac.fd.subDataPort.connectParentdata][v])
                };
                if (this.$debugFlag) {
                    nStep = "queryDataPort";
                    console.log("$CTerminalGeneBase.prototype.$getDataPortDeploy: nStep = " + nStep);
                }
            case "queryDataPort":
                let arrDataPortName = dataPortDeploy.parentDataPort.filter(v => v !== null);
                dbRecord = this.$db.cacheColQueryMultiArray(this.$cloudDBName, this.$mac.tb.dataPort, [this.$mac.fd.pt_id, this.$mac.fd.dataPort.dataportName], "=", [[this.$gene], arrDataPortName]);
                for (let i = 0; i < dbRecord.arrNumber.length; i++) {
                    let index = dataPortDeploy.parentDataPort.indexOf(dbRecord.table[this.$mac.fd.dataPort.dataportName][dbRecord.arrNumber[i]]);
                    dataPortDeploy.parentDataPort[index] = dbRecord.table[this.$mac.fd.id][dbRecord.arrNumber[i]];
                }
                if (this.$debugFlag) {
                    nStep = "queryGeneTable";
                    console.log("$CTerminalGeneBase.prototype.$getDataPortDeploy: nStep = " + nStep);
                }
            case "queryGeneTable":
                dbRecord = this.$db.cacheColQueryMultiArray(this.$cloudDBName, this.$mac.tb.geneTable, [this.$mac.fd.pt_id, this.$mac.fd.geneTable.tableName], "=", [[this.$gene], dataPortDeploy.table]);
                let geneTableNameArr = Array.from(dbRecord.arrNumber, v => dbRecord.table[this.$mac.fd.geneTable.tableName][v]);
                dataPortDeploy.table = dataPortDeploy.table.map(function (v) {
                    return geneTableNameArr.includes(v) ? v : null;
                });
            case "end":
                return dataPortDeploy;
        }
    }
};

$CTerminalGeneBase.prototype.$getEventPortDeploy = function (subGeneId) {
    let nStep = 0, dbRecord, eventPortDeploy;
    while (1) {
        switch (nStep) {
            case 0:
            case "querySubEventPort":
                dbRecord = this.$db.cacheColQuery(this.$cloudDBName, this.$mac.tb.subEventPort, this.$mac.fd.pt_id, "=", subGeneId);
                eventPortDeploy = {
                    eventPort: Array.from(dbRecord.arrNumber, v => dbRecord.table[this.$mac.fd.id][v]),
                    parentEventPort: Array.from(dbRecord.arrNumber, v => dbRecord.table[this.$mac.fd.subEventPort.eventportParentId][v]),
                    event: Array.from(dbRecord.arrNumber, v => dbRecord.table[this.$mac.fd.subEventPort.eventId][v]),
                    otherEventPort: Array.from(dbRecord.arrNumber, v => dbRecord.table[this.$mac.fd.subEventPort.connectSubEvent][v] && dbRecord.table[this.$mac.fd.subEventPort.connectSubEvent][v].subeventname.length > 0 ? true : null)
                };
                if (this.$debugFlag) {
                    nStep = "end";
                    console.log("$CTerminalGeneBase.prototype.$getEventPortDeploy: nStep = " + nStep);
                }
            case "end":
                return eventPortDeploy;
        }
    }
};

// 返回cookie中key对应的数据, 不传key则获取索引cookie数据, 不存在对应key则返回null;
// flag可选: 为true时将会判断将数据通过JSON.parse转换
$CTerminalGeneBase.prototype.$getCookie = function (key, flag) {
    let returnData;
    if (typeof key === "string") {
        let key_ = key.replace(/[^\w]/g, function (match) {
            return "\\" + match;
        }) + "=";
        let reg = new RegExp("(?<=((^|(?<=(; )))" + key_ + "))[^;]+");
        returnData = document.cookie.match(reg)[0];
        if (flag && returnData) returnData = /[^\w]/.test(returnData) ? JSON.parse(returnData) : returnData;
    } else {
        let cookieArr = document.cookie.split("; ");
        returnData = {};
        for (let i = 0; i < cookieArr.length; i++) {
            let index = cookieArr[i].indexOf("=");
            if (index === -1) {
                returnData[cookieArr[i]] = cookieArr[i];
                continue;
            }
            let value = cookieArr[i].slice(index + 1);
            if (flag) value = /[^\w]/.test(value) ? JSON.parse(value) : value;
            returnData[cookieArr[i].slice(0, index)] = value;
        }
    }
    return returnData;
};

$CTerminalGeneBase.prototype.setWindowPara = function (group, parentGeneAddr, geneAddr, user, number) {
    var winName = "t_" + group + "_" + parentGeneAddr + "_" + geneAddr + "_" + user + "_" + number;
    var winPara = {};
    winPara.vesselType = "t";
    winPara.winName = winName;
    winPara.terminalServerAddr = winName;
    $mWindow.setWindowPara(winPara);
};

// todo 临时用
$CTerminalGeneBase.prototype.$addSysEvent = function () {
    let terminalFun = [
        "$linkParent",
        "$recordInputPost_terminal",
        "$conditionInputPost_terminal",
        "$dataUploadReceive",
        "$zeroUploadRelateReceive_terminal",
        "$dataPushReceive_terminal",
        "$dataPullReceive_terminal",
        "$eventRestart",
        "$eventCancel",
        "$eventBreak",
        "$eventReturnRespond",
        "$eventBackRespond"
    ];
    let pageFun = [
        "$conditionInputPost_page",
        "$recordInputPost_page",
        "$zeroUploadRelateReceive_page",
        "$dataPushReceive_page",
        "$dataPullReceive_page"
    ];
    let monitorGeneAddrFun = [
        "brotherDataPortQuery"
    ];
    let that = this;
    let setArrData = function (type, gene) {// 0 页面, 1 终端, 2 监控
        let arr;
        switch (type) {
            case "page":
                arr = pageFun;
                break;
            case "terminal":
                arr = terminalFun;
                break;
            case "monitorGene":
                arr = monitorGeneAddrFun;
                break;
        }
        for (let i = 0; i < arr.length; i++) {
            arrData[that.$mac.fd.pt_id].push(gene);
            arrData[that.$mac.fd.event.eventName].push(arr[i]);
        }
    };
    let dbRrsult = this.$db.cacheColQuery(this.$cloudDBName, "gene", this.$mac.fd.pt_id, "=", null);
    let arrData = {
        [this.$mac.fd.pt_id]: [],
        [this.$mac.fd.del]: [],
        [this.$mac.fd.event.eventName]: [],
        [this.$mac.fd.event.option]: [],
        [this.$mac.fd.event.para]: [],
        [this.$mac.fd.event.runType]: [],
        [this.$mac.fd.event.type]: []
    };
    for (let i = 0; i < dbRrsult.arrNumber.length; i++) {
        let gene = dbRrsult.table[this.$mac.fd.id][dbRrsult.arrNumber[i]];
        let type;
        switch (dbRrsult.table[this.$mac.fd.gene.type][dbRrsult.arrNumber[i]]) {
            case this.$mac.enum1.gene.type.page:
                type = "page";
                break;
            case this.$mac.enum1.gene.type.terminal:
                type = "terminal";
                break;
            default:
                type = null;
        }
        if (type) {
            let dbRrsult_ = this.$db.cacheColQuery(this.$cloudDBName, "event", this.$mac.fd.pt_id, "=", gene);
            if (dbRrsult_.arrNumber.filter(v => dbRrsult_.table[this.$mac.fd.id][v] > 999).length !== 0) continue;
            setArrData(type, gene);
        }
    }

    let arrId = Array.from(arrData[this.$mac.fd.pt_id], (v, i) => 1000 + i);
    let arrField = [
        this.$mac.fd.pt_id,
        this.$mac.fd.del,
        this.$mac.fd.event.eventName,
        this.$mac.fd.event.option,
        this.$mac.fd.event.runType,
        this.$mac.fd.event.type
    ];
    arrData[this.$mac.fd.del] = new Array(arrData[this.$mac.fd.pt_id].length).fill(0);
    arrData[this.$mac.fd.event.option] = new Array(arrData[this.$mac.fd.pt_id].length).fill(0);
    arrData[this.$mac.fd.event.runType] = new Array(arrData[this.$mac.fd.pt_id].length).fill(0);
    arrData[this.$mac.fd.event.type] = new Array(arrData[this.$mac.fd.pt_id].length).fill(1);
    this.$db.cacheRecordNew(this.$cloudDBName, "event", arrId, arrField, arrData);

    console.log(JSON.stringify($mSystem.memDatabase.arrDatabase.c_db));
};
