function $zeroUploadRelateReceive_page() {

}


/*
 * 功能： 上传关联数据接收函数
 * srcGeneAddr：输出方地址
 * blockObject [obj] 阻塞事务
 * -------------------------------------------------------------------------------------------------------------------------------------------//
 */
$zeroUploadRelateReceive_page.prototype.event = function(table, record, pg_id, srcGeneAddr, blockObject, successCallBack, errorCallBack) {
    let $this = this;
    let flag = 0;
    blockObject === null ? blockObject = { sum: 0, success: null, error: null } : flag = 1;

    // 父关联写入函数
    $this.$zDB.zeroParentLink($this.$dbName, table, record, pg_id, srcGeneAddr, blockObject, function(parentRecord) {
        let result = { geneAddr: $this.$geneAddr, parentRecord };
        if (flag === 1) {
            // 对象阻塞释放函数
            $this.$zDB.zeroBlockFree($this.$dbName, blockObject.table, blockObject.record, function() {
                successCallBack(result);
            }, errorCallBack);
        } else {
            successCallBack(result);
        }
    }, errorCallBack);
};
