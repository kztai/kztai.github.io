function $dataPushReceive_terminal() {

}



/*
 * 功能： 数据推送接收函数
 * tableVariable [array] 表格变量
 * srcGeneAddr：输出方地址
 * number [num] 被调用次数
 * index [obj] 数据事务索引
 * 1. 在被推送方运行
 * -------------------------------------------------------------------------------------------------------------------------------------------//
 */
$dataPushReceive_terminal.prototype.$dataPushReceive_terminal0 = function(tableVariable, data, srcGeneAddr, destGeneSite, successCallBack, errorCallBack) {
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
            console.log("$CGeneBase.prototype.$dataPushReceive_terminal0：para.nStep = " + para.nStep);
        }
        switch (para.nStep) {
            case 0:
                if (destGeneSite !== null) {
                    // 向geneAddr,server同步调用数据推送接收函数
                    let funcPara = [tableVariable, para.data, $this.$geneObject.$geneAddr, null];
                    $this.$geneRemoteCall(destGeneSite.server, destGeneSite.geneAddr, "$dataPushReceive", funcPara, function() {
                        para.nStep = "end";
                        if (++dbFlag === 2) {
                            $this.$dataPushReceive_terminal0(tableVariable, data, srcGeneAddr, destGeneSite, successCallBack, errorCallBack);
                        }
                    }, para.errorCallBack);
                } else {
                    para.nStep = "dataDownloadLocalize";
                    dbFlag++;
                }
                break;
            case "dataDownloadLocalize":
                // 将推送数据data写入到内存数据库，只有dataTrans事务关闭时，才会将数据移入mysql
                // tableVariable由父粒子变量被转成当前粒子变量
                $this.$geneObject.$zDB.dataDownloadLocalize($this.$geneObject.$dbName, tableVariable, data, srcGeneAddr, $this.$dataTrans, function() {
                    // 获取tableVariable对应数据接口dataPort
                    para.tablePointer = $this.$geneObject.$db.cacheColQueryMulti(
                      $this.$geneObject.$cloudDBName,
                      $this.$geneObject.$mac.tb.dataPort,
                      [$this.$geneObject.$mac.fd.pt_id, $this.$geneObject.$mac.fd.dataPort.dataportName],
                      "=",
                      [$this.$geneObject.$gene, tableVariable[0].$table]);
                    para.eventId = para.tablePointer.table[$this.$geneObject.$mac.fd.dataPort.eventId][para.tablePointer.arrNumber[0]];

                    if (para.eventId !== null && $this.$geneObject.$mac.enum1.event.runType.synch) {
                        let para1 = [tableVariable];
                        let instruct = {};
                        instruct.geneAddr = $this.$geneObject.$geneAddr;
                        instruct.eventLog = null;
                        instruct.server = $this.$geneObject.$server;
                        instruct.index = $this.$index;
                        instruct.number = 0;

                        // 调用事务运行子函数
                        $this.$eventRunSub(para.eventId, instruct, para1, $this.$geneObject.$mac.enum1.event.command.run, function() {
                            para.nStep = "end";
                            if (++dbFlag === 2) {
                                $this.$dataPushReceive_terminal0(tableVariable, data, srcGeneAddr, destGeneSite, successCallBack, errorCallBack);
                            }
                        }, para.errorCallBack);
                    } else {
                        para.nStep = "end";
                        if (++dbFlag === 2) {
                            $this.$dataPushReceive_terminal0(tableVariable, data, srcGeneAddr, destGeneSite, successCallBack, errorCallBack);
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
