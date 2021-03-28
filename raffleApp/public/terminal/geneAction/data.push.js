/*
 * 功能： 数据推送处理函数
 * tableVariable [array] 表格变量
 * destGeneSite = {
 *    geneAddr:array[number...] 粒子地址
 *    server:array[number...] 粒子服务器ID
 * }
 * dataTrans [num] 数据事务ID
 * -------------------------------------------------------------------------------------------------------------------------------------------//
 */
$CGeneAction.prototype.$dataPush = function(tableVariable, destGeneSite, successCallBack, errorCallBack) {
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
            console.log("$CGeneBase.prototype.$dataPush：para.nStep = " + para.nStep);
        }
        switch (para.nStep) {
            case 0:
                // 初始化
                para.allGeneSite = {
                    geneAddr: [],
                    server: []
                };
                para.subDataPort = [];
                para.subGeneLog = [];

                // 通过表格变量的根表，可以获取tableVariable输入方向的subDataPort，subGeneLog，subDataPortLog
                para.tablePointer = $this.$geneObject.$db.cacheColQuery(
                  $this.$geneObject.$dbName,
                  $this.$geneObject.$mac.tb.$l_subDataPortLog,
                  $this.$geneObject.$mac.fd.$l_subDataPortLog.tableName,
                  "=",
                  tableVariable[0].$table);

                // 一个dataPortId可能对应多个subGeneLog，subDataPortLog
                for (let i = 0; i < para.tablePointer.arrNumber.length; i++) {
                    if (para.tablePointer.table[$this.$geneObject.$mac.fd.$l_subDataPortLog.dataDirection][para.tablePointer.arrNumber[i]] == $this.$geneObject.$mac.enum1.$l_subDataPortLog.dataDirection.in || para.tablePointer.table[$this.$geneObject.$mac.fd.$l_subDataPortLog.dataDirection][para.tablePointer.arrNumber[i]] == $this.$geneObject.$mac.enum1.$l_subDataPortLog.dataDirection.twoWay) {
                        let dataPortId = para.tablePointer.table[$this.$geneObject.$mac.fd.$l_subDataPortLog.dataportId][para.tablePointer.arrNumber[i]];
                        let subGeneLog = para.tablePointer.table[$this.$geneObject.$mac.fd.pt_id][para.tablePointer.arrNumber[i]];
                        let index = para.subDataPort.indexOf(dataPortId);
                        if (index === -1) {
                            para.subDataPort.push(dataPortId);
                            para.subGeneLog.push([subGeneLog]);
                        } else {
                            para.subGeneLog[index].push(subGeneLog);
                        }
                    }
                }

                if (para.subDataPort.length === 0) {
                    let error = {
                        code: 99,
                        message: "tableVariable中不存在输入方向的subDataPort"
                    };
                    para.errorCallBack(error);
                    break;
                }

                para.nStep = "get_subGene";
                dbFlag++;
                break;
            case "get_subGene":
                let portTotal = para.subDataPort.length;
                for (let i = 0; i < portTotal; i++) {
                    // 获取subDataPort[i]链接的运行状态为开启的所有子粒子的allGeneSite.geneAddr[], allGeneSite.server[]：
                    para.tablePointer = $this.$geneObject.$db.cacheColReadArray($this.$geneObject.$dbName, $this.$geneObject.$mac.tb.$l_subGeneLog, para.subGeneLog[i]);
                    for (let j = 0; j < para.tablePointer.arrNumber.length; j++) {
                        if (para.tablePointer.table[$this.$geneObject.$mac.fd.$l_subGeneLog.runStatus][para.tablePointer.arrNumber[j]] === $this.$geneObject.$mac.enum1.$l_subGeneLog.runStatus.open) {
                            para.allGeneSite.geneAddr.push(para.tablePointer.table[$this.$geneObject.$mac.fd.$l_subGeneLog.subGeneAddr][para.tablePointer.arrNumber[j]]);
                            para.allGeneSite.server.push(para.tablePointer.table[$this.$geneObject.$mac.fd.$l_subGeneLog.subServerId][para.tablePointer.arrNumber[j]]);
                        }
                    }
                }

                para.nStep = "zeroGetDeletedRecord";
                dbFlag++;
                break;
            case "zeroGetDeletedRecord":
                // 判断allGeneSite.geneAddr[]是否为空
                if (para.allGeneSite.geneAddr.length === 0) {
                    para.nStep = "end";
                    dbFlag++;
                    break;
                }

                //tableVariable追加删除标记的子记录
                $this.$geneObject.$zDB.zeroGetDeletedRecord($this.$geneObject.$dbName, tableVariable, function() {
                    para.nStep = "zeroObjectPush";
                    if (++dbFlag === 2) {
                        $this.$dataPush(tableVariable, destGeneSite, successCallBack, errorCallBack);
                    }
                }, para.errorCallBack);
                break;
            case "zeroObjectPush":
                para.data = {};
                // 调用对象推送函数，需要推送的数据保存在data中
                $this.$geneObject.$zDB.zeroObjectPush($this.$geneObject.$dbName, tableVariable, null, para.data, $this.$dataTrans, function() {
                    if (Object.keys(para.data).length > 0) {
                        para.nStep = "remoteCall_dataPushReceive";
                    } else {
                        para.nStep = "end";
                    }
                    if (++dbFlag === 2) {
                        $this.$dataPush(tableVariable, destGeneSite, successCallBack, errorCallBack);
                    }
                }, para.errorCallBack);
                break;
            case "remoteCall_dataPushReceive":
                if (para.i >= para.allGeneSite.geneAddr.length) {
                    para.i = 0;
                    para.nStep = "end";
                    dbFlag++;
                    break;
                }

                let geneAddr = para.allGeneSite.geneAddr[para.i];
                let server = para.allGeneSite.server[para.i];
                let funcPara = [tableVariable, para.data, $this.$geneObject.$geneAddr, null];

                // 向geneAddr,server同步调用数据推送接收函数
                $this.$geneRemoteCall(geneAddr, server, "$dataPushReceive_page", funcPara, function() {
                    para.i++;
                    para.nStep = "remoteCall_dataPushReceive";
                    if (++dbFlag === 2) {
                        $this.$dataPush(tableVariable, destGeneSite, successCallBack, errorCallBack);
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
