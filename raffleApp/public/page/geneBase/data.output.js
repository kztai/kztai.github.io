/*
 * 功能： 数据输出处理函数
 * 注意：暂时规定页面兄弟粒子之间不能输出
 * tableVariable [array] 表格变量
 * destGeneSite = {
 *    geneAddr:array[number...] 粒子地址
 *    server:array[number...] 粒子服务器ID
 * }
 * dataTrans [num] 数据事务ID
 * -------------------------------------------------------------------------------------------------------------------------------------------//
 */
$CPageGeneBase.prototype.$dataOutput = function(tableVariable, destGeneSite, successCallBack, errorCallBack) {
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
        if (this.$debugFlag) {
            console.log("$CGeneBase.prototype.$dataOutput：para.nStep = " + para.nStep);
        }
        switch (para.nStep) {
            case 0:  // 查找tableVariable对应dataPort，并获取dataPort记录对应数据
                var result = $this.$db.cacheColQueryMulti(
                  $this.$cloudDBName,
                  $this.$mac.tb.dataPort,
                  [$this.$mac.fd.pt_id, $this.$mac.fd.dataPort.dataportName],
                  "=",
                  [$this.$gene, tableVariable[0].$table]);

                var resultLog = $this.$db.cacheColQuery(
                  $this.$dbName,
                  $this.$mac.tb.$l_dataPortLog,
                  $this.$mac.fd.$l_dataPortLog.dataPortId,
                  "=",
                  result.table[$this.$mac.fd.id][result.arrNumber[0]]);

                para.dataPortId = result.table[$this.$mac.fd.id][result.arrNumber[0]];
                para.dataPortLogId = resultLog.table[$this.$mac.fd.id][resultLog.arrNumber[0]];
                para.destGeneAddr = resultLog.table[$this.$mac.fd.$l_dataPortLog.originGeneAddr][resultLog.arrNumber[0]];
                para.destServer = resultLog.table[$this.$mac.fd.$l_dataPortLog.originServer][resultLog.arrNumber[0]];
                para.subGeneAddr = resultLog.table[$this.$mac.fd.$l_dataPortLog.originSubGeneAddr][resultLog.arrNumber[0]];
                para.subDataPort = resultLog.table[$this.$mac.fd.$l_dataPortLog.originSubDataPort][resultLog.arrNumber[0]];
                para.destTable = resultLog.table[$this.$mac.fd.$l_dataPortLog.tableName][resultLog.arrNumber[0]];

                if ($this.$debugFlag) {
                    para.nStep = "zeroGetDeletedRecord";
                    console.log("$CGeneBase.prototype.$dataOutput：para.nStep = " + para.nStep);
                }
            case "zeroGetDeletedRecord":  //tableVariable追加删除标记的子记录
                $this.$zDB.zeroGetDeletedRecord($this.$dbName, tableVariable, function() {
                    // 判断destTable是否为空，空为兄弟粒子
                    // todo 页面不存在兄弟粒子之间的输出：
                    if (para.destTable) {
                        para.nStep = "par_dataOutputUpload";
                        if (++dbFlag === 2) {
                            $this.$dataOutput(tableVariable, destGeneSite, successCallBack, errorCallBack);
                        }
                    } else {
                        let error = {
                            code: 99,
                            message: "页面不存在兄弟粒子之间的输出"
                        };
                        para.errorCallBack(error);
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
                    para.tableData = $this.$db.cacheColRead($this.$dbName, tableVariable[0].$table, tableVariable[0].$arrValue[i]);
                    pg_db = para.tableData.table[$this.$mac.fd.pg_db][para.tableData.number];
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
                        variableFilter(variableData[j].$arrSubTab, pushVariable[j].$arrSubTab, index);
                    }
                }
            }

                if ($this.$debugFlag) {
                    para.nStep = "get_upLoadServer";
                    console.log("$CGeneBase.prototype.$dataOutput：para.nStep = " + para.nStep);
                }
            case "get_upLoadServer":  //如是兄弟粒子且之前上传过，则直接调用《数据上传处理函数》将需上传的数据发送给父粒子。
                para.upLoadGeneAddr = [];  // todo 这里暂不考虑兄弟粒子且之前上传过否情况，以后有需求再添加
                if (para.upLoadGeneAddr.length > 0) {
                    //upLoadGeneAddr是之前上传过的，所以一定有轨迹
                    //获取upLoadGeneAddr[]在dataPort对应轨迹中的upLoadServer[]
                    para.tablePoint = $this.$db.cacheColQueryMulti(
                      $this.$dbName,
                      $this.$mac.tb.$l_dataTrack,
                      [$this.$mac.fd.pt_id, $this.$mac.fd.$l_dataTrack.dataportId],
                      "=",
                      [para.dataPortId, para.dataPortLogId]);

                    para.upLoadServer = [];
                    for (let i = 0; i < para.tablePoint.arrNumber.length; i++) {
                        let number = para.tablePoint.arrNumber[i];
                        for (let j = 0; j < para.upLoadGeneAddr.length; j++) {
                            if (para.upLoadGeneAddr[j] === para.tablePoint.table[$this.$mac.fd.$l_dataTrack.destGeneAddr][number]) {
                                para.upLoadServer.push(para.tablePoint.table[$this.$mac.fd.$l_dataTrack.destServer][number]);
                                break;
                            }
                        }
                    }
                }

                if ($this.$debugFlag) {
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
                this.$dataOutputUpload(para.upLoadVariable, para.upLoadGeneAddr[para.i], para.upLoadServer[para.i], null, function() {
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
                    // 获取监控粒子watcherGeneAddr  // todo 如何获取
                    // let watcherGeneAddr;
                    // let para1 = {
                    //     geneAddr: $this.$geneAddr,
                    //     dataPort: para.dataPortId
                    // };
                    //
                    // // 调用远程事务调用函数
                    // $this.$geneRemoteCall($this.$parentServer, watcherGeneAddr, "brotherDataPortQuery", para1, function(result) {
                    //     // 获取返回值赋值给destGeneSite{geneAddr[],server[]}
                    //     destGeneSite = {
                    //         geneAddr: result.arrPara.geneAddr, //粒子地址
                    //         server: result.arrPara.server //粒子服务器ID
                    //     };
                    //     para.nStep = 'bro_dataPushReceive';
                    //     if (++dbFlag === 2) {
                    //         $this.$dataOutput(tableVariable, destGeneSite, dataTrans, successCallBack, errorCallBack)
                    //     }
                    // }, para.errorCallBack);

                    destGeneSite = {  // todo 监控粒子函数未实现，临时直接获取返回值
                        geneAddr: [45], //粒子地址
                        server: [1] //粒子服务器ID
                    };
                }

                if ($this.$debugFlag) {
                    para.nStep = "bro_zeroObjectPush";
                    console.log("$CGeneBase.prototype.$dataOutput：para.nStep = " + para.nStep);
                }
            case "bro_zeroObjectPush":
                //如是兄弟粒子且之前没上传过，则当前粒子作为父粒子调用《对象推送数据获取函数》获取需推送数据的data数据，异步调用《数据推送接收函数》向子粒子们推送数据
                para.data = {};

                // 对象推送数据获取函数，获取需输出的data：
                this.$zDB.zeroObjectPush($this.$dbName, para.pushVariable, null, para.data, function() {
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
                var funcPara = [para.pushVariable, para.data, $this.$geneAddr, null];
                $this.$geneRemoteCall(destGeneSite.geneAddr[para.i], destGeneSite.server[para.i], "$dataPushReceive_page", funcPara, function() {
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
 * 功能： 数据上传处理函数
 * tableVariable [array] 表格变量
 * destGeneAddr [num] 目标地址
 * destServer [num] 目标地址对应server
 * subDataPort [num/null]  子数据接口ID
 * 1. 如果是父子关系，则存在子数据接口ID，否则不存在
 * --------------------------------------------------------------------------------------------------------------------------------------------//
 */
$CPageGeneBase.prototype.$dataOutputUpload = function(tableVariable, destGeneAddr, destServer, subDataPort, successCallBack, errorCallBack) {
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
        if (this.$debugFlag) {
            console.log("$CGeneBase.prototype.$dataOutputUpload：para.nStep = " + para.nStep);
        }
        switch (para.nStep) {
            case 0:

            function getSubTable(tableVariable) {
                for (let i = 0; i < tableVariable.length; i++) {
                    if (tableVariable[i].$arrValue) {
                        para.table.push(tableVariable[i].$table);
                        para.record.push(tableVariable[i].$arrValue.flat());
                        getSubTable(tableVariable[i].$arrSubTab);
                    }
                }
            }

                para.blockObject = { sum: 0, success: null, error: null };
                para.table = [];
                para.record = [];
                getSubTable(tableVariable[0].$arrSubTab);

                // 调用对象阻塞函数
                $this.$zDB.objectBlock($this.$dbName, para.table, para.record, para.blockObject, function() {
                    para.nStep = "zeroObjectUpload";
                    if (++dbFlag === 2) {
                        $this.$dataOutputUpload(tableVariable, destGeneAddr, destServer, subDataPort, successCallBack, errorCallBack);
                    }
                }, para.errorCallBack);
                break;
            case "zeroObjectUpload":

            function clearRecord(destVariable) {
                for (let i = 0; i < destVariable.length; i++) {
                    if (destVariable[i].$arrValue) {
                        destVariable[i].$arrValue = [];
                        destVariable[i].$arrOrgValue = [];
                        clearRecord(destVariable[i].$arrSubTab);
                    }
                }
            }

                para.data = {};
                // tableVariable赋值给destVariable, destVariable所有记录号、原始记录号数据清空，其他保留：
                para.destVariable = JSON.parse(JSON.stringify(tableVariable));
                clearRecord(para.destVariable);

                // 调用对象上传函数
                $this.$zDB.zeroObjectUpload($this.$dbName, tableVariable, para.destVariable, para.data);
                para.nStep = "remoteCall_$dataUploadReceive";
                dbFlag++;
                break;
            case "remoteCall_$dataUploadReceive":
                if (Object.keys(para.data).length === 0) {
                    para.nStep = "blockFree";
                    dbFlag++;
                    break;
                }

                let funcPara;
                // 判断parentServer、parentGeneAddr是否等于destServer、destGeneAddr:
                if (destServer === $this.$parentServer && destGeneAddr === $this.$parentGeneAddr) {
                    // 相等表示父粒子(终端粒子)不是通道：
                    funcPara = [para.destVariable, para.data, $this.$geneAddr, null, subDataPort];
                } else {
                    // destGeneAddr,destServer赋值给destGeneSite
                    let destGeneSite = { destGeneAddr, destServer };
                    // 父粒子是通道，需强行跳到父粒子，也就是说：页面必须通过终端粒子才能同服务端粒子通讯，终端必须通过用户粒子才能同服务端其他粒子通讯
                    funcPara = [para.destVariable, para.data, $this.$geneAddr, destGeneSite, subDataPort];
                }

                // 向parentGeneAddr, parentServer远程同步调用数据上传接收函数
                $this.$geneRemoteCall($this.$parentGeneAddr, $this.$parentServer, "$dataUploadReceive", funcPara, function(PGRecord) {
                    para.PGRecord = PGRecord;
                    para.PGRecord.table.length === 0 ? para.nStep = "blockFree" : para.nStep = "zeroParentLink";
                    if (++dbFlag === 2) {
                        $this.$dataOutputUpload(tableVariable, destGeneAddr, destServer, subDataPort, successCallBack, errorCallBack);
                    }
                }, function(error) {
                    para.error = error;
                    para.nStep = "blockFree";
                    if (++dbFlag === 2) {
                        $this.$dataOutputUpload(tableVariable, destGeneAddr, destServer, subDataPort, successCallBack, errorCallBack);
                    }
                });
                break;
            case "zeroParentLink":
                // 父关联写入函数
                $this.$zDB.zeroParentLink($this.$dbName, para.PGRecord.table, para.PGRecord.record, para.PGRecord.pg_id, destGeneAddr, para.blockObject, function() {
                    para.nStep = "blockFree";
                    if (++dbFlag === 2) {
                        $this.$dataOutputUpload(tableVariable, destGeneAddr, destServer, subDataPort, successCallBack, errorCallBack);
                    }
                }, function(error) {
                    para.error = error;
                    para.nStep = "blockFree";
                    if (++dbFlag === 2) {
                        $this.$dataOutputUpload(tableVariable, destGeneAddr, destServer, subDataPort, successCallBack, errorCallBack);
                    }
                });
                break;
            case "blockFree":
                // 对象阻塞释放函数
                $this.$zDB.zeroBlockFree($this.$dbName, para.table, para.record, function() {
                    if (para.error) {
                        para.errorCallBack(para.error);
                    } else {
                        para.nStep = "end";
                        if (++dbFlag === 2) {
                            $this.$dataOutputUpload(tableVariable, destGeneAddr, destServer, subDataPort, successCallBack, errorCallBack);
                        }
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

