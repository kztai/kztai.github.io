function $dataPushReceive_page() {

}


/*
 * 功能： 数据推送接收函数
 * tableVariable [array] 表格变量
 * srcGeneAddr：输出方地址
 * --------------------------------------------------------------------------------------//
 */
$dataPushReceive_page.prototype.event = function(tableVariable, data, srcGeneAddr, destGeneSite, successCallBack, errorCallBack) {
    let $this = this;
    // 将推送数据data写入到内存数据库
    $this.$zDB.dataDownloadLocalize($this.$dbName, tableVariable, data, srcGeneAddr, function() {
        // 获取tableVariable对应数据接口dataPort
        let tablePointer = $this.$db.cacheColQueryMulti(
          $this.$cloudDBName,
          $this.$mac.tb.dataPort,
          [$this.$mac.fd.pt_id, $this.$mac.fd.dataPort.dataportName],
          "=",
          [$this.$gene, tableVariable[0].$table]);
        let eventId = tablePointer.table[$this.$mac.fd.dataPort.eventId][tablePointer.arrNumber[0]];

        if (eventId !== null) {
            // 调用事务运行子函数
            $this.$eventRunSub(eventId, [tableVariable], successCallBack, errorCallBack);
        } else {
            successCallBack()
        }
    }, errorCallBack);
};
