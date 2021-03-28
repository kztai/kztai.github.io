<!--<template>-->
    <!--<div id="apply-manage-terminal">-->
        <!--<applyList-->
                <!--ref="applyRef"-->
                <!--refId="applyRef"-->
                <!--:activityId="activityId"-->
                <!--:curList="curList"-->
                <!--:para="para">-->
        <!--</applyList>-->
    <!--</div>-->
<!--</template>-->
<!--<script>-->
    <!--import applyList from '@/components/activity/apply/applyList.vue';-->

    <!--export default {-->
        <!--name: mac.curTerminalInfo.terminalVue,-->
        <!--components: {-->
            <!--applyList-->
        <!--},-->
        <!--provide: function () {-->
            <!--return {-->
                <!--sys: this.sys-->
            <!--}-->
        <!--},-->
        <!--data: function () {-->
            <!--return {-->
                <!--mac: mac.mac,-->
                <!--cloudCtrl: $cloudCtrl,-->
                <!--geneAPI: null,-->
                <!--geneInstance: null,-->
                <!--outPara: [],-->
                <!--debugFlag: true,-->
                <!--subGeneHandle: [],-->
                <!--sys: {-->
                    <!--api: null,-->
                    <!--lib: null-->
                <!--},-->

                <!--myType: 1,-->
                <!--mySite: '',-->
                <!--myID: 1,-->

                <!--activityId: 1,-->
                <!--curList: 1,-->

                <!--pvt_subModuleMap: {-->
                    <!--subModule: ['uploadRef', 'footRef', 'headRef', 'tabListRef'],-->
                    <!--vessel: ['upload', 'foot', 'head', 'tabList'],-->
                <!--},-->

                <!--// 各个容器当前显示的子模块-->
                <!--pvt_isShow: {-->
                    <!--// head: 'headRef',-->
                    <!--// foot: 'footRef',-->
                    <!--upload: null,-->
                    <!--foot: null,-->
                    <!--tabList: null,-->
                    <!--applyManage: null,-->
                <!--},-->
            <!--}-->
        <!--},-->
        <!--computed: {-->
            <!--para: function () {-->
                <!--if (this.subGeneHandle.length === 0) {-->
                    <!--return null;-->
                <!--} else {-->
                    <!--return this.subGeneHandle[0];-->
                <!--}-->
            <!--},-->
        <!--},-->

        <!--mounted: function () {-->
            <!--this.startModule(function (result) {-->
                    <!--console.log(result);-->
                <!--}, function (error) {-->
                    <!--console.log(error);-->
                <!--}-->
            <!--)-->
        <!--},-->

        <!--methods: {-->
            <!--//初始化模块变量函数-->
            <!--initRam: function () {-->
                <!--this.vueName = 'terminal';-->
                <!--this.mac = mac.mac;-->
            <!--},-->
            <!--setPara: function (successCallBack, errorCallBack) {-->
                <!--var para = {};-->
                <!--para.successCallBack = successCallBack;-->
                <!--para.errorCallBack = errorCallBack;-->
                <!--para.nStep = 0;-->
                <!--return para;-->
            <!--},-->
            <!--startModule: function (successCallBack, errorCallBack) {-->
                <!--let $this = this;-->
                <!--let fnname = 'terminal_startModule';-->
                <!--let dbData;-->
                <!--let tableName;-->
                <!--let objectName;-->
                <!--let parentRecord;-->
                <!--let record;-->
                <!--let condition;-->
                <!--let portName;-->
                <!--let inputData;-->
                <!--let expression;-->
                <!--let start;-->
                <!--let total;-->
                <!--let sort;-->
                <!--let destGeneSite = '';-->
                <!--if (successCallBack !== null) {-->
                    <!--errorCallBack = $this.setPara(successCallBack, errorCallBack);-->
                    <!--successCallBack = null;-->
                <!--}-->
                <!--var para = errorCallBack;-->

                <!--while (1) {-->
                    <!--if ($this.mac.debugFlag) {-->
                        <!--console.log(fnname + ': para.nStep = ' + para.nStep);-->
                    <!--}-->
                    <!--var $dbFlag = 0;-->
                    <!--switch (para.nStep) {-->
                        <!--case 0:-->
                            <!--// 初始化：-->
                            <!--$this.mySite = $this.getCookie('userSite');-->
                            <!--$this.myId = $this.getCookie('userID');-->
                            <!--$this.myType = $this.getCookie('userType');-->

                            <!--$this.cloudCtrl.pageStart(function (result) {-->
                                <!--$this.inPara = result;-->
                                <!--$this.geneInstance = $this.inPara.geneInstance;-->
                                <!--$this.sys.api = $this.inPara.geneInstance.geneAPI;-->
                                <!--$this.geneAPI = $this.inPara.geneInstance.geneAPI;-->
                                <!--$this.inPara.geneInstance.geneUser = $this;-->
                                <!--para.nStep = 'dataIsExist';-->
                                <!--if (++$dbFlag === 2) {-->
                                    <!--$this.startModule(successCallBack, errorCallBack);-->
                                <!--}-->
                            <!--}, para.errorCallBack);-->
                            <!--break;-->
                        <!--case 'dataIsExist':-->
                            <!--tableName = this.mac.tb.groupActivity;-->
                            <!--condition = '';-->
                            <!--dbData = {};-->
                            <!--dbData[this.mac.fd.id] = [];-->
                            <!--$this.sys.api.recordQuery(tableName, null, condition, dbData, function () {-->
                                <!--if (dbData[$this.mac.fd.id].length > 0) {-->
                                    <!--para.nStep = 'eventStart';-->
                                <!--} else {-->
                                    <!--para.nStep = 'initActivityData';-->
                                <!--}-->

                                <!--if (++$dbFlag === 2) {-->
                                    <!--$this.startModule(successCallBack, errorCallBack);-->
                                <!--}-->
                            <!--}, function () {-->
                            <!--});-->
                            <!--break;-->
                        <!--case 'initActivityData':-->
                            <!--tableName = this.mac.tb.groupActivity;-->
                            <!--dbData = {};-->
                            <!--dbData[this.mac.fd.groupActivity.place] = [112222333333];-->
                            <!--dbData[this.mac.fd.groupActivity.name] = [123];-->
                            <!--dbData[this.mac.fd.groupActivity.status] = [9];-->
                            <!--$this.sys.api.recordNew(tableName, null, dbData, function () {-->
                                <!--para.nStep = 'initActivityOrder';-->
                                <!--if (++$dbFlag === 2) {-->
                                    <!--$this.startModule(successCallBack, errorCallBack);-->
                                <!--}-->
                            <!--}, function (error) {-->
                                <!--console.error(error)-->
                            <!--});-->
                            <!--break;-->
                        <!--case 'initActivityOrder':-->
                            <!--tableName = this.mac.tb.groupActivityOrder;-->
                            <!--dbData = {};-->
                            <!--dbData[this.mac.fd.groupActivityOrder.groupActivityID] = [1, 1, 1];-->
                            <!--dbData[this.mac.fd.groupActivityOrder.orderNumber] = [12345678, 45676589, 789654321];-->
                            <!--dbData[this.mac.fd.groupActivityOrder.groupActivityTicketTypeID] = [1, 2, 2];-->
                            <!--dbData[this.mac.fd.groupActivityOrder.createTime] = ['2019-08-27 12:34', '2019-08-28 16:34', '2019-08-29 9:28'];-->

                            <!--dbData[this.mac.fd.groupActivityBill.name] = ['张三', '李四', '王五'];-->
                            <!--dbData[this.mac.fd.groupActivityBill.mobile] = [18699447567, 18378096545, 15109098877];-->
                            <!--dbData[this.mac.fd.groupActivityBill.number] = [1, 2, 3];-->
                            <!--dbData[this.mac.fd.groupActivityBill.code] = [123456781, 456765892, 7896543213];-->
                            <!--dbData[this.mac.fd.groupActivityBill.info] = [-->
                                <!--// {name: ['姓名', '手机', '邮箱'], content: ['张三', 18699447567, '10897653@qq.com']},-->
                                <!--// {name: ['姓名', '手机', '邮箱'], content: ['李四', 18378096545, '783745853@qq.com']},-->
                                <!--// {name: ['姓名', '手机', '邮箱'], content: ['王五', 15109098877, '6773257787@qq.com']},-->
                                <!--{name: ['姓名', '手机', '邮箱', '性别', '年龄'], content: ['张三', 18699447567, '10897653@qq.com', '男', '12']},-->
                                <!--{name: ['姓名', '手机', '邮箱', '性别', '年龄'], content: ['李四', 18378096545, '783745853@qq.com', '男', '15']},-->
                                <!--{name: ['姓名', '手机', '邮箱', '性别', '年龄'], content: ['王五', 15109098877, '6773257787@qq.com', '女', '23']},-->
                            <!--];-->
                            <!--dbData[this.mac.fd.groupActivityBill.status] = [0, 1, 2];-->
                            <!--$this.sys.api.recordNew(tableName, null, dbData, function () {-->
                                <!--para.nStep = 'initTicketData';-->
                                <!--if (++$dbFlag === 2) {-->
                                    <!--$this.startModule(successCallBack, errorCallBack);-->
                                <!--}-->
                            <!--}, function (error) {-->
                                <!--console.error(error)-->
                            <!--});-->
                            <!--break;-->
                        <!--// case 'initActivityBill':-->
                        <!--//     tableName = this.mac.tb.groupActivityBill;-->
                        <!--//     dbData = {};-->
                        <!--//-->
                        <!--//     $this.sys.api.recordNew(tableName, null, dbData, function () {-->
                        <!--//         para.nStep = 'initTicketData';-->
                        <!--//         if (++$dbFlag === 2) {-->
                        <!--//             $this.startModule(successCallBack, errorCallBack);-->
                        <!--//         }-->
                        <!--//     }, function (error) {-->
                        <!--//         console.error(error)-->
                        <!--//     });-->
                        <!--//     break;-->
                        <!--case 'initTicketData':-->
                            <!--tableName = this.mac.tb.groupActivityTicketType;-->
                            <!--dbData = {};-->
                            <!--dbData[this.mac.fd.groupActivityTicketType.price] = [0, 15];-->
                            <!--dbData[this.mac.fd.groupActivityTicketType.name] = ['免费票', '会员票'];-->
                            <!--$this.sys.api.recordNew(tableName, null, dbData, function () {-->
                                <!--para.nStep = 'initAppendixData';-->
                                <!--if (++$dbFlag === 2) {-->
                                    <!--$this.startModule(successCallBack, errorCallBack);-->
                                <!--}-->
                            <!--}, function (error) {-->
                                <!--console.error(error)-->
                            <!--});-->
                            <!--break;-->
                        <!--case 'initAppendixData':-->
                            <!--tableName = this.mac.tb.groupActivityEnrollAppendix;-->
                            <!--dbData = {};-->
                            <!--dbData[this.mac.fd.groupActivityEnrollAppendix.name] = ['图片1', '图片2'];-->
                            <!--dbData[this.mac.fd.groupActivityEnrollAppendix.type] = [0, 0]; // 0:图片，1:文件-->
                            <!--$this.sys.api.recordNew(tableName, null, dbData, function () {-->
                                <!--para.nStep = 'eventStart';-->
                                <!--if (++$dbFlag === 2) {-->
                                    <!--$this.startModule(successCallBack, errorCallBack);-->
                                <!--}-->
                            <!--}, function (error) {-->
                                <!--console.error(error)-->
                            <!--});-->
                            <!--break;-->
                        <!--// case 'initFormData':-->
                        <!--//     tableName = this.mac.tb.groupActivityEnrollForm;-->
                        <!--//     dbData = {};-->
                        <!--//     dbData[this.mac.fd.groupActivityEnrollForm.name] = [99999, 88888];-->
                        <!--//     $this.sys.api.recordNew(tableName, null, dbData, function () {-->
                        <!--//         para.nStep = 'eventStart';-->
                        <!--//         if (++$dbFlag === 2) {-->
                        <!--//             $this.startModule(successCallBack, errorCallBack);-->
                        <!--//         }-->
                        <!--//     }, function (error) {-->
                        <!--//         console.error(error)-->
                        <!--//     });-->
                        <!--//     break;-->
                        <!--// case 'initUpload':-->
                        <!--//     this.sm.uploadRef.startModule(function () {-->
                        <!--//         $this.showSubModule('uploadRef', true, function () {-->
                        <!--//             para.nStep = 'eventStart';-->
                        <!--//             if (++$dbFlag === 2) {-->
                        <!--//                 $this.startModule(successCallBack, errorCallBack);-->
                        <!--//             }-->
                        <!--//         }, para.errorCallBack);-->
                        <!--//     }, function () {-->
                        <!--//-->
                        <!--//     });-->
                        <!--//     break;-->
                        <!--case 'eventStart':-->
                            <!--$this.inPara.geneInstance.eventStart(mac.curTerminalInfo.pageEvent, $this.inPara.instruct, $this.inPara.command, $this.inPara.paraObject, function (result) {-->
                                <!--console.log(result);-->

                                <!--for (let i in result.subGeneHandle) {-->
                                    <!--$this.subGeneHandle.push(result.subGeneHandle[i]);-->
                                <!--}-->

                                <!--para.nStep = 'end';-->
                                <!--if (++$dbFlag === 2) {-->
                                    <!--$this.startModule(successCallBack, errorCallBack);-->
                                <!--}-->
                            <!--}, para.errorCallBack);-->
                            <!--break;-->
                        <!--case 'end':-->
                            <!--para.successCallBack('success');-->
                            <!--return;-->
                    <!--}-->
                    <!--if (++$dbFlag === 1) {-->
                        <!--return;-->
                    <!--}-->
                <!--}-->
            <!--},-->

            <!--inputApplyData: function (conditionData, successCallBack, errorCallBack) {-->
                <!--let $this = this;-->
                <!--let fnname = 'terminal_inputApplyData';-->
                <!--let dbData;-->
                <!--let objectName;-->
                <!--let parentRecord;-->
                <!--let condition;-->
                <!--let record;-->
                <!--let portName;-->
                <!--let inputData;-->
                <!--let expression;-->
                <!--let start;-->
                <!--let total;-->
                <!--let sort;-->
                <!--let destGeneSite;-->
                <!--if (successCallBack !== null) {-->
                    <!--errorCallBack = $this.setPara(successCallBack, errorCallBack);-->
                    <!--successCallBack = null;-->
                <!--}-->
                <!--var para = errorCallBack;-->
                <!--while (1) {-->
                    <!--console.log(fnname + ': para.nStep = ' + para.nStep);-->
                    <!--var $dbFlag = 0;-->
                    <!--switch (para.nStep) {-->
                        <!--case 0:-->
                        <!--case 'inputData':-->
                            <!--expression = conditionData.condition;-->
                            <!--start = conditionData.start;-->
                            <!--total = conditionData.total;-->
                            <!--sort = ['id,asc'];-->
                            <!--destGeneSite = '';-->
                            <!--portName = this.mac.tb.groupActivityBill;-->
                            <!--inputData = null;-->
                            <!--this.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {-->
                                <!--para.result = result;-->
                                <!--para.nStep = 'end';-->
                                <!--if (++$dbFlag === 2) {-->
                                    <!--$this.inputApplyData(conditionData, successCallBack, errorCallBack);-->
                                <!--}-->
                            <!--}, para.errorCallBack);-->
                            <!--break;-->
                        <!--case 'end':-->
                            <!--para.successCallBack(para.result);-->
                            <!--return;-->
                    <!--}-->
                    <!--if (++$dbFlag === 1) {-->
                        <!--return;-->
                    <!--}-->
                <!--}-->
            <!--},-->

            <!--applyRef_inputApplyData: function (condition, successCallBack, errorCallBack) {-->
                <!--this.inputApplyData(condition, successCallBack, errorCallBack)-->
            <!--},-->


            <!--getUrlPar: function (par) {-->
                <!--var local_url = document.location.href;-->
                <!--local_url = window.decodeURIComponent(local_url);-->
                <!--//获取要取得的get参数位置-->
                <!--var get = local_url.indexOf(par + "=");-->
                <!--if (get === -1) {-->
                    <!--return false;-->
                <!--}-->
                <!--//截取字符串-->
                <!--var get_par = local_url.slice(par.length + get + 1);-->
                <!--//判断截取后的字符串是否还有其他get参数-->
                <!--var nextPar = get_par.indexOf("&");-->
                <!--if (nextPar !== -1) {-->
                    <!--get_par = get_par.slice(0, nextPar);-->
                <!--}-->
                <!--var lastPar = get_par.indexOf("#");//过滤#号-->
                <!--if (lastPar !== -1) {-->
                    <!--get_par = get_par.slice(0, lastPar);-->
                <!--}-->
                <!--return get_par;-->
            <!--},-->
            <!--to_tx: function (tx, data) {-->
                <!--let $this = this;-->
                <!--let HTMLpage = 'http://14.gts.com:85/index.html';-->
                <!--let para = {-->
                    <!--para: null,-->
                    <!--data: data-->
                <!--};-->
                <!--$this.geneAPI.terminalGeneStart(mac.arrTerminalInfo[tx].groupID, mac.arrTerminalInfo[tx].cloudID,-->
                    <!--mac.arrTerminalInfo[tx].vesselID, mac.arrTerminalInfo[tx].geneID, HTMLpage, para, function (result) {-->
                        <!--console.log('terminalGeneStart success!')-->
                    <!--}, function (error) {-->
                        <!--console.log(error)-->
                    <!--})-->
            <!--},-->
            <!--getCookie: function (type) {-->
                <!--if (type === 'userID') {-->
                    <!--return 1;-->
                <!--} else if (type === 'userSite') {-->
                    <!--return {-->
                        <!--geneAddr: {-->
                            <!--groupID: 1,-->
                            <!--cloudID: 2,-->
                            <!--vesselType: 's',-->
                            <!--vesselID: 18,-->
                            <!--userID: 1,-->
                            <!--geneID: 26-->
                        <!--},-->
                        <!--server: 12-->
                    <!--}-->
                <!--} else if (type === 'userType') {-->
                    <!--// 0表示普通用户，1表示游客-->
                    <!--return 0-->
                <!--}-->
            <!--},-->
            <!--addUser: function () {-->
                <!--this.sys.api.callParentFunction('addUserInfo', [], function () {-->
                    <!--console.log(1)-->
                <!--}, function () {-->

                <!--});-->
            <!--}-->
        <!--}-->
    <!--}-->
<!--</script>-->
<!--<style>-->
    <!--#apply-manage-terminal {-->
        <!--width: 100%;-->
        <!--height: 100%;-->
        <!--font-family: SourceHanSansCN-Medium;-->
    <!--}-->
<!--</style>-->
