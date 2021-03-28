
/*
 * 功能：数据输出处理函数
 * 注意：暂时规定终端兄弟粒子之间不能输出
 * tableVariable [array] 表格变量
 * destGeneSite = {
 *    geneAddr:array[number...] 粒子地址
 *    server:array[number...] 粒子服务器ID
 * }
 * dataTrans [num] 数据事务ID
 * -------------------------------------------------------------------------------------------------------------------------------------------//
 */
$CGeneAction.prototype.$dataOutput = function(tableVariable, destGeneSite, successCallBack, errorCallBack) {
    let $this = this;
    let dbFlag;
    let para = {
        successCallBack: successCallBack,
        errorCallBack: errorCallBack,
        nStep: 0,
        i: 0
    };

    if (successCallBack !== null) {
        errorCallBack = para;
        successCallBack = null;
    }
    para = errorCallBack;

    while (1) {
        dbFlag = 0;
        if (this.$geneObject.$debugFlag) {
            console.log("$CGeneBase.prototype.$dataOutput：para.nStep = " + para.nStep);
        }
        switch (para.nStep) {
            case 0:  // 查找tableVariable对应dataPort，并获取dataPort记录对应数据
                var result = $this.$geneObject.$db.cacheColQueryMulti(
                  $this.$geneObject.$cloudDBName,
                  $this.$geneObject.$mac.tb.dataPort,
                  [$this.$geneObject.$mac.fd.pt_id, $this.$geneObject.$mac.fd.dataPort.dataportName],
                  "=",
                  [$this.$geneObject.$gene, tableVariable[0].$table]);

                var resultLog = $this.$geneObject.$db.cacheColQuery(
                  $this.$geneObject.$dbName,
                  $this.$geneObject.$mac.tb.$l_dataPortLog,
                  $this.$geneObject.$mac.fd.$l_dataPortLog.dataPortId,
                  "=",
                  result.table[$this.$geneObject.$mac.fd.id][result.arrNumber[0]]);

                para.dataPortId = result.table[$this.$geneObject.$mac.fd.id][result.arrNumber[0]];
                para.dataPortLogId = resultLog.table[$this.$geneObject.$mac.fd.id][resultLog.arrNumber[0]];
                para.destGeneAddr = resultLog.table[$this.$geneObject.$mac.fd.$l_dataPortLog.originGeneAddr][resultLog.arrNumber[0]];
                para.destServer = resultLog.table[$this.$geneObject.$mac.fd.$l_dataPortLog.originServer][resultLog.arrNumber[0]];
                para.subGeneAddr = resultLog.table[$this.$geneObject.$mac.fd.$l_dataPortLog.originSubGeneAddr][resultLog.arrNumber[0]];
                para.subDataPort = resultLog.table[$this.$geneObject.$mac.fd.$l_dataPortLog.originSubDataPort][resultLog.arrNumber[0]];
                para.destTable = resultLog.table[$this.$geneObject.$mac.fd.$l_dataPortLog.tableName][resultLog.arrNumber[0]];

                if ($this.$geneObject.$debugFlag) {
                    para.nStep = "zeroGetDeletedRecord";
                    console.log("$CGeneBase.prototype.$dataOutput：para.nStep = " + para.nStep);
                }
            case "zeroGetDeletedRecord":  //tableVariable追加删除标记的子记录
                $this.$geneObject.$zDB.zeroGetDeletedRecord($this.$geneObject.$dbName, tableVariable, function() {
                    para.nStep = "zeroObjectRead";
                    if (++dbFlag === 2) {
                        $this.$dataOutput(tableVariable, destGeneSite, successCallBack, errorCallBack);
                    }
                }, para.errorCallBack);
                break;
            case "zeroObjectRead":  //将要输出的记录从mysql移入到内存数据库中
                $this.$geneObject.$zDB.zeroObjectRead($this.$geneObject.$dbName, tableVariable, $this.$dataTrans, function() {
                    // 判断destTable是否为空，空为兄弟粒子
                    // todo 终端不存在兄弟粒子之间的输出：
                    if(para.destTable) {
                        para.nStep = "par_dataOutputUpload";
                        if (++dbFlag === 2) {
                            $this.$dataOutput(tableVariable, destGeneSite, successCallBack, errorCallBack);
                        }
                    } else {
                        let error = {
                            code: 99,
                            message: '终端不存在兄弟粒子之间的输出'
                        };
                        para.errorCallBack(error)
                    }
                }, para.errorCallBack);
                break;
            case "par_dataOutputUpload":  // 如是父子粒子，直接调用《数据上传处理函数》将需上传的数据发送给父粒子
                $this.$dataOutputUpload(tableVariable, para.destGeneAddr, para.destServer, para.subDataPort, para.successCallBack, para.errorCallBack);
                break;
            case "split_variable":  // 分别组织已上传过的变量，以及未上传过的变量
                let pg_db;
                para.upLoadGeneAddr = [];
                para.upLoadVariable = [];
                para.pushVariable = [];
                let recordTotal = tableVariable[0].$arrValue.length;
                // 获取table,$arrValue[x]在内存库对应记录$pg_db字段赋值给pg_db
                for (let i = 0; i < recordTotal; i++) {
                    para.tableData = $this.$geneObject.$db.cacheColRead($this.$geneObject.$dbName, tableVariable[0].$table, tableVariable[0].$arrValue[i]);
                    pg_db = para.tableData.table[$this.$geneObject.$mac.fd.pg_db][para.tableData.number];
                    if (pg_db === null) {  // 表示之前没有上传过该记录
                        // 把tableVariable中table,$arrValue[x]对应对象添加到pushVariable，保存之前没有上传过的记录：
                        variableFilter(tableVariable, para.pushVariable, i);
                        para.pushVariable[0].$geneAddr = tableVariable[0].$geneAddr;
                    } else {
                        //判断pg_db在upLoadGeneAddr中是否存在，不存在则添加：
                        if (!para.upLoadGeneAddr.includes(pg_db)) {
                            para.upLoadGeneAddr.push(pg_db);
                        }
                        // 把tableVariable中table, $arrValue[x]对应对象添加到upLoadVariable：
                        variableFilter(tableVariable, para.upLoadVariable, i);
                        para.upLoadVariable[0].$geneAddr = tableVariable[0].$geneAddr;
                    }
                }

                // 数据递归拷贝
            function variableFilter(variableData, pushVariable, index) {
                if (variableData.length > 0) {
                    for (let j = 0; j < variableData.length; j++) {
                        if (!pushVariable[j]) pushVariable.push({});
                        if (pushVariable[j].$table !== variableData[j].$table) {
                            pushVariable[j].$table = variableData[j].$table;
                            pushVariable[j].$arrField = variableData[j].$arrField;
                            pushVariable[j].$allFlag = variableData[j].$allFlag;
                            pushVariable[j].$arrValue = [];
                            pushVariable[j].$arrOrgValue = [];
                            pushVariable[j].$arrSubTab = [];
                        }
                        pushVariable[j].$arrValue.push(variableData[j].$arrValue[index]);
                        pushVariable[j].$arrOrgValue.push(variableData[j].$arrOrgValue[index]);
                        variableFilter(variableData[j].$arrSubTab, pushVariable[j].$arrSubTab, index);
                    }
                }
            }

                if ($this.$geneObject.$debugFlag) {
                    para.nStep = "get_upLoadServer";
                    console.log("$CGeneBase.prototype.$dataOutput：para.nStep = " + para.nStep);
                }
            case "get_upLoadServer":  //如是兄弟粒子且之前上传过，则直接调用《数据上传处理函数》将需上传的数据发送给父粒子。
                if (para.upLoadGeneAddr.length > 0) {
                    //upLoadGeneAddr是之前上传过的，所以一定有轨迹
                    //获取upLoadGeneAddr[]在dataPort对应轨迹中的upLoadServer[]
                    para.tablePoint = $this.$geneObject.$db.cacheColQueryMulti(
                      $this.$geneObject.$dbName,
                      $this.$geneObject.$mac.tb.$l_dataTrack,
                      [$this.$geneObject.$mac.fd.pt_id, $this.$geneObject.$mac.fd.$l_dataTrack.dataportId],
                      "=",
                      [para.dataPortId, para.dataPortLogId]);

                    para.upLoadServer = [];
                    for (let i = 0; i < para.tablePoint.arrNumber.length; i++) {
                        let number = para.tablePoint.arrNumber[i];
                        for (let j = 0; j < para.upLoadGeneAddr.length; j++) {
                            if (para.upLoadGeneAddr[j] === para.tablePoint.table[$this.$geneObject.$mac.fd.$l_dataTrack.destGeneAddr][number]) {
                                para.upLoadServer.push(para.tablePoint.table[$this.$geneObject.$mac.fd.$l_dataTrack.destServer][number]);
                                break;
                            }
                        }
                    }
                }

                if ($this.$geneObject.$debugFlag) {
                    para.nStep = "bro_dataOutputUpload";
                    console.log("$CGeneBase.prototype.$dataOutput：para.nStep = " + para.nStep);
                }
            case "bro_dataOutputUpload":
                if (para.i >= para.upLoadGeneAddr.length) {
                    para.i = 0;
                    para.nStep = "destGeneSite_isExist";
                    dbFlag++;
                    break;
                }

                // 调用数据上传处理函数
                this.$dataOutputUpload(para.upLoadVariable[para.i], para.upLoadGeneAddr[para.i], para.upLoadServer[para.i], null, function() {
                    para.i++;
                    para.nStep = "bro_dataOutputUpload";
                    if (++dbFlag === 2) {
                        $this.$dataOutput(tableVariable, destGeneSite, successCallBack, errorCallBack);
                    }
                }, para.errorCallBack);
                break;
            case "destGeneSite_isExist":  // 判断destGeneSite是否为空，为空则向监控粒子调用兄弟粒子数据接口查询函数获取destGeneSite
                if (para.pushVariable.length === 0) {
                    para.nStep = "end";
                    dbFlag++;
                    break;
                }

                // 判断destGeneSite是否为空
                if (!destGeneSite) {
                    // 调用远程事务调用函数
                    let funcPara = [$this.$geneObject.$geneAddr, para.dataPortId];
                    this.$geneRemoteCall($this.$geneObject.$monitorGeneAddr, $this.$geneObject.$parentServer, "brotherDataPortQuery", funcPara, function(result) {
                        // 获取返回值赋值给destGeneSite{geneAddr[],server[]}
                        destGeneSite = {
                            geneAddr: result.geneAddr, //粒子地址
                            server: result.server //粒子服务器ID
                        };
                        para.nStep = "bro_dataPushReceive";
                        if (++dbFlag === 2) {
                            $this.$dataOutput(tableVariable, destGeneSite, successCallBack, errorCallBack);
                        }
                    }, para.errorCallBack);

                    // destGeneSite = {  // todo 监控粒子函数未实现，临时直接获取返回值
                    //     geneAddr: [45], //粒子地址
                    //     server: [1] //粒子服务器ID
                    // };
                }

                if ($this.$geneObject.$debugFlag) {
                    para.nStep = "bro_zeroPushDataGet";
                    console.log("$CGeneBase.prototype.$dataOutput：para.nStep = " + para.nStep);
                }
            case "bro_zeroPushDataGet":
                //如是兄弟粒子且之前没上传过，则当前粒子作为父粒子调用《对象推送数据获取函数》获取需推送数据的data数据，异步调用《数据推送接收函数》向子粒子们推送数据
                // 获取dataTrans表中索引index
                para.tableData = $this.$geneObject.$db.cacheColRead($this.$geneObject.$dbName, $this.$geneObject.$mac.tb.dataTrans, $this.$dataTrans);
                para.data = {};

                // 对象推送数据获取函数，获取需输出的data：
                this.$geneObject.$zDB.zeroPushDataGet($this.$geneObject.$dbName, para.pushVariable, null, para.data, $this.$dataTrans, function() {
                    para.nStep = "bro_dataPushReceive";
                    if (++dbFlag === 2) {
                        $this.$dataOutput(tableVariable, destGeneSite, successCallBack, errorCallBack);
                    }
                }, para.errorCallBack);
                break;
            case "bro_dataPushReceive":
                if (para.i >= destGeneSite.geneAddr.length) {
                    para.i = 0;
                    para.nStep = "end";
                    dbFlag++;
                    break;
                }

                // 兄弟粒子且之前没上传过，则当前粒子作为父粒子来推送数据：
                // 向destGeneSite{geneAddr[x],server[x]}同步调用数据推送接收函数
                var funcPara = [para.pushVariable, para.data, $this.$geneObject.$geneAddr, null];
                $this.$geneRemoteCall(destGeneSite.server[para.i], destGeneSite.geneAddr[para.i], "$dataPushReceive_terminal", funcPara, function() {
                    para.i++;
                    para.nStep = "bro_dataPushReceive";
                    if (++dbFlag === 2) {
                        $this.$dataOutput(tableVariable, destGeneSite, successCallBack, errorCallBack);
                    }
                }, para.errorCallBack);
                break;
            case "end":
                para.successCallBack();
                return;
        }
        if (++dbFlag === 1) {
            return;
        }
    }
};

/*
 * 功能： 上传关联数据函数
 * --------------------------------------------------------------------------------------------------------------------------------------------//
 */
$CGeneAction.prototype.zeroUploadRelatedData = function (dataBase, related, successCallBack, errorCallBack) {
    let $this = this;
    let geneTotal = related.geneAddr.length;
    let number = 0, errorFlag = 0, err = null;

    // 调用远程同步调用函数
    $this.$remoteSyncCall(this.$geneObject.$monitor.monitor, this.$geneObject.$server, "getServer", related.geneAddr, function (destServer) {
        for(let x = 0; x < geneTotal; x++) {
            //判断related.geneAddr[x]是否等于geneAddr
            if (related.geneAddr[x] !== $this.$geneObject.$geneAddr) {
                // 调用远程同步调用函数
                let para = [related.table[x], related.record[x], related.pg_id[x], $this.$geneObject.$geneAddr];
                $this.$remoteSyncCall(related.geneAddr[x], destServer[x], "$zeroUploadRelateReceive", para, function () {
                    number--;
                    if (!errorFlag) {
                        if (number === 0) successCallBack();
                    } else {
                        if (number === 0) errorCallBack(err);
                    }
                }, function (error) {
                    number--;
                    errorFlag = 1;
                    err = error;
                    if (number === 0) errorCallBack(err);
                });
                number++;
            }
        }

        if (number === 0) successCallBack();
    }, errorCallBack);
};


/*
 * 功能： 数据上传处理函数：（1）输出数据上传，（2）数据上传接收，（3）修改对应表的pg_id，pg_db，pg_ver
 * tableVariable [array] 表格变量
 * destGeneAddr [num] 目标地址
 * destServer [num] 目标地址对应server
 * dataTrans [num] 数据事务ID
 * subDataPort [num/null]  子数据接口ID
 * 1. 如果是父子关系，则存在子数据接口ID，否则不存在
 * --------------------------------------------------------------------------------------------------------------------------------------------//
 */
$CGeneAction.prototype.$dataOutputUpload = function(tableVariable, destGeneAddr, destServer, subDataPort, successCallBack, errorCallBack) {
    if (this.$geneObject.$debugFlag) {
        console.log("$CGeneBase.prototype.$dataOutputUpload：para.nStep = " + "0");
    }

    let $this = this;
    let data = {};

    // tableVariable赋值给destVariable, destVariable所有记录号、原始记录号数据清空，其他保留：
    let destVariable = JSON.parse(JSON.stringify(tableVariable));
    clearRecord(destVariable);

    function clearRecord(destVariable) {
        for (let i = 0; i < destVariable.length; i++) {
            if (destVariable[i].$arrValue) {
                destVariable[i].$arrValue = [];
                destVariable[i].$arrOrgValue = [];
                clearRecord(destVariable[i].$arrSubTab);
            }
        }
    }

    if (this.$geneObject.$debugFlag) {
        console.log("$CGeneBase.prototype.$dataOutputUpload：para.nStep = " + "zeroObjectUpload");
    }
    // 调用对象上传函数
    $this.$geneObject.$zDB.zeroObjectUpload($this.$geneObject.$dbName, tableVariable, destVariable, data, $this.$dataTrans, function() {
        if (Object.keys(data).length === 0) {
            successCallBack();
        } else {
            // 判断parentServer、parentGeneAddr是否等于destServer、destGeneAddr，不等则报错:
            if (destServer === $this.$geneObject.$parentServer && destGeneAddr === $this.$geneObject.$parentGeneAddr) {
                if ($this.$geneObject.$debugFlag) {
                    console.log("$CGeneBase.prototype.$dataOutputUpload：para.nStep = " + "remoteCall_$dataUploadReceive");
                }

                // 向parentGeneAddr, parentServer远程同步调用数据上传接收函数
                let funcPara = [destVariable, data, $this.$geneObject.$geneAddr, subDataPort];
                $this.$geneRemoteCall(destGeneAddr, destServer, "$dataUploadReceive", funcPara, function(PGRecord) {
                    //PGRecord{table[],record[][],pg_id[][]}
                    // 数据输出成功后，修改对应表的pg_id，pg_db，pg_ver：
                    // 判断PGRecord.table[]是否为空，非空表示有新数据上传了，需回填父粒子相关数据
                    if (PGRecord.table.length > 0) {
                        if ($this.$geneObject.$debugFlag) {
                            console.log("$CGeneBase.prototype.$dataOutputUpload：para.nStep = " + "zeroParentLink");
                        }

                        // 父关联写入函数
                        $this.$geneObject.$zDB.zeroParentLink($this.$geneObject.$dbName, PGRecord.table, PGRecord.record, PGRecord.pg_id, destGeneAddr, $this.$dataTrans);
                        successCallBack();

                        if ($this.$geneObject.$debugFlag) {
                            console.log("$CGeneBase.prototype.$dataOutputUpload：para.nStep = " + "end");
                        }
                    } else {
                        successCallBack();
                    }
                }, errorCallBack);

            } else {
                let error = {};
                error.code = 99;
                error.message = '终端数据只能输出到父用户粒子！';
                errorCallBack(error);
            }
        }
    }, errorCallBack);
};
