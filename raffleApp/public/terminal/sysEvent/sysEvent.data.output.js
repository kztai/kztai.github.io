function $dataUploadReceive() {
}

function $zeroUploadRelateReceive_terminal() {
}


/*
 * 功能： 数据上传接收函数
 * tableVariable [array] 表格变量
 * srcGeneAddr：输出方地址
 * subDataPort：[num] 有值表示子传父，为null表示兄弟之间传输
 * number [num] 被调用次数
 * index [obj] 数据事务索引
 * 1. 在被输出方运行（子传父、兄弟传兄弟）
 * -------------------------------------------------------------------------------------------------------------------------------------------//
 */
$dataUploadReceive.prototype.$dataUploadReceive0 = function(tableVariable, data, srcGeneAddr, destGeneSite, subDataPort, successCallBack, errorCallBack) {
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
            console.log("$CGeneBase.prototype.$dataUploadReceive：para.nStep = " + para.nStep);
        }
        switch (para.nStep) {
            case 0:
                // destGeneSite为null表示页面的数据只上传到终端，否则上传到云端：
                if (destGeneSite === null) {
                    para.nStep = "dataUploadLocalize";
                    dbFlag++;
                    break;
                }

                // 判断destGeneSite.geneAddr是否等于parentGeneAddr
                if (destGeneSite.destGeneAddr === $this.$geneObject.$parentGeneAddr) {
                    // 父粒子不是通道或兄弟，有对应表
                    // 向parentGeneAddr,parentServer远程同步调用数据上传接收函数，输出到云端：
                    let funcPara = [tableVariable, data, srcGeneAddr, subDataPort];
                    $this.$geneRemoteCall($this.$geneObject.$parentGeneAddr, $this.$geneObject.$parentServer, "$dataUploadReceive", funcPara, function(PGRecord) {
                        //PGRecord{table[],record[][],pg_id[][]}
                        para.result = PGRecord;
                        para.nStep = "end";
                        if (++dbFlag === 2) {
                            $this.$dataUploadReceive0(tableVariable, data, srcGeneAddr, destGeneSite, subDataPort, successCallBack, errorCallBack);
                        }
                    }, para.errorCallBack);
                } else {
                    // 父粒子是通道或兄弟，没有对应表，则报错：终端粒子的数据只能输出到用户（父）粒子，页面粒子的数据只能输出到终端（父）粒子。
                    let error = {
                        code: 99,
                        message: "$CGeneBase.prototype.$dataUploadReceive：父粒子是通道或兄弟，没有对应表"
                    };
                    para.errorCallBack(error);
                }
                break;
            case "dataUploadLocalize":
                // 将上传数据data写入到内存数据库，只有dataTrans事务关闭时，才会将数据移入mysql
                // tableVariable由子粒子变量被转成当前粒子变量
                $this.$geneObject.$zDB.dataUploadLocalize($this.$geneObject.$dbName, tableVariable, data, srcGeneAddr, $this.$dataTrans, function(result) {
                    // 获取返回值result{tableVariable, geneAddr[], table[], record[][], pg_id[][]}
                    para.result = result;
                    para.newResult = {table: [], record: [], pg_id: []};
                    // 获取源粒子geneAddr对应的条目，赋值给newResult
                    let index = para.result.geneAddr.indexOf(srcGeneAddr);
                    if (index !== -1) {
                        para.result.geneAddr.splice(index, 1);
                        para.newResult.table = para.result.table.splice(index, 1)[0];
                        para.newResult.record = para.result.record.splice(index, 1)[0];
                        para.newResult.pg_id = para.result.pg_id.splice(index, 1)[0];
                    }

                    if (para.result.geneAddr.length === 0) {
                        para.nStep = 'isConnectEvent';
                        if (++dbFlag === 2) {
                            $this.$dataUploadReceive0(tableVariable, data, srcGeneAddr, destGeneSite, subDataPort, successCallBack, errorCallBack);
                        }
                    } else {
                        $this.zeroUploadRelatedData($this.$geneObject.$dbName, para.result, function () {
                            para.nStep = 'isConnectEvent';
                            if (++dbFlag === 2) {
                                $this.$dataUploadReceive0(tableVariable, data, srcGeneAddr, destGeneSite, subDataPort, successCallBack, errorCallBack);
                            }
                        }, para.errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'isConnectEvent':
                // 判断subDataPort是否为NULL，为NULL表示兄弟粒子：
                if (subDataPort === null) {
                    // 兄弟粒子, 所以需要获取tableVariable对应数据接口dataPort
                    para.tablePointer = $this.$geneObject.$db.cacheColQueryMulti(
                        $this.$geneObject.$cloudDBName,
                        $this.$geneObject.$mac.tb.dataPort,
                        [$this.$geneObject.$mac.fd.pt_id, $this.$geneObject.$mac.fd.dataPort.dataportName],
                        "=",
                        [$this.$geneObject.$gene, tableVariable[0].$table]);

                    para.dataPortId = para.tablePointer.table[$this.$geneObject.$mac.fd.id][para.tablePointer.arrNumber[0]];
                    para.eventId = para.tablePointer.table[$this.$geneObject.$mac.fd.dataPort.eventId][para.tablePointer.arrNumber[0]];
                } else {
                    // 非兄弟粒子（父子粒子）, 所以需要获取tableVariable对应子数据接口subDataPort
                    para.tablePointer = $this.$geneObject.$db.cacheColRead($this.$geneObject.$cloudDBName, $this.$geneObject.$mac.tb.subDataPort, subDataPort);
                    para.eventId = para.tablePointer.table[$this.$geneObject.$mac.fd.subDataPort.eventId][para.tablePointer.number];
                    para.connectParentdata = para.tablePointer.table[$this.$geneObject.$mac.fd.subDataPort.connectParentdata][para.tablePointer.number];
                }

                // 判断 dataPort/subDataPort 是否链接事件event:
                if (para.eventId !== null) {
                    // 调用相关查询函数查询tableVariable所有子记录
                    $this.$geneObject.$zDB.zeroRecordQuery($this.$geneObject.$dbName, tableVariable, null, null, null, 1, function() {
                        let para1 = [tableVariable];
                        let instruct = {};
                        instruct.geneAddr = $this.$geneObject.$geneAddr;
                        instruct.eventLog = null;
                        instruct.server = $this.$geneObject.$server;
                        instruct.index = $this.$index;
                        instruct.number = 0;

                        // 调用事务运行子函数
                        $this.$eventRunSub(para.eventId, instruct, para1, $this.$geneObject.$mac.enum1.event.command.run, function() {
                            para.nStep = "parentOutPort_isConnect";
                            if (++dbFlag === 2) {
                                $this.$dataUploadReceive0(tableVariable, data, srcGeneAddr, destGeneSite, subDataPort, successCallBack, errorCallBack);
                            }
                        }, para.errorCallBack);
                    }, para.errorCallBack);
                } else {
                    para.nStep = "parentOutPort_isConnect";
                    if (++dbFlag === 2) {
                        $this.$dataUploadReceive0(tableVariable, data, srcGeneAddr, destGeneSite, subDataPort, successCallBack, errorCallBack);
                    }
                }
                break;
            case "parentOutPort_isConnect":
                // 判断subDataPort是否为NULL，同时判断subDataPort输出方向是否链接dataPort，如果连接了，表示还要继续往上输出：
                if (subDataPort !== null && (para.connectParentdata === $this.$geneObject.$mac.enum1.subDataPort.connectDir.out || para.connectParentdata === $this.$geneObject.$mac.enum1.subDataPort.connectDir.twoWay)) {
                    // 调用数据输出处理函数
                    this.$dataOutput(tableVariable, null, function() {
                        para.nStep = "end";
                        if (++dbFlag === 2) {
                            $this.$dataUploadReceive0(tableVariable, data, srcGeneAddr, destGeneSite, subDataPort, successCallBack, errorCallBack);
                        }
                    }, para.errorCallBack);
                    break;
                }

                if ($this.$geneObject.$debugFlag) {
                    para.nStep = "end";
                    console.log("$CGeneBase.prototype.$dataUploadReceive：para.nStep = " + para.nStep);
                }
            case "end":
                para.successCallBack(para.newResult);
                return;
        }
        if (++dbFlag === 1) {
            return;
        }
    }
};



/*
 * 功能： 上传关联数据接收函数
 * srcGeneAddr：输出方地址
 * -------------------------------------------------------------------------------------------------------------------------------------------//
 */
$zeroUploadRelateReceive_terminal.prototype.$zeroUploadRelateReceive_terminal0 = function(table, record, pg_id, srcGeneAddr, successCallBack, errorCallBack) {
    let $this = this;

    // 调用对象转移读取函数
    $this.$geneObject.$zDB.objectMoveRead($this.$geneObject.$dbName, table, record, $this.$dataTrans, function() {
        // $this.$geneObject.$db.cacheColWrite($this.$geneObject.$dbName,'TT8','count1',0,{sum: 0, step: 0, total: 0});
        // $this.$geneObject.$db.cacheColWrite($this.$geneObject.$dbName,'TT8','count1',1,{sum: 0, step: 0, total: 0});

        // 父关联写入函数
        let result = $this.$geneObject.$zDB.zeroParentLink($this.$geneObject.$dbName, table, record, pg_id, srcGeneAddr, $this.$dataTrans);
        successCallBack({ geneAddr: $this.$geneObject.$geneAddr, result });
    }, errorCallBack);
};
