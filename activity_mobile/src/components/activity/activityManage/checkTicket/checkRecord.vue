<template>
    <div class="checkRecord_container">
        <div class="checkRecord_row checkRecord_row_checkRecordRow">
            <div :class="{checkRecord_col:true,checkRecord_col_checkRecordWindow:true,checkRecord_col_checkRecordWindow_size_large:attr.size==='large',checkRecord_col_checkRecordWindow_size_medium:attr.size==='medium',checkRecord_col_checkRecordWindow_size_small:attr.size==='small',checkRecord_col_checkRecordWindow_size_min:attr.size==='min',checkRecord_col_checkRecordWindow_checked:attr.checked,checkRecord_col_checkRecordWindow_disable:attr.disabled}">

                <div class="checkRecord_row checkRecord_row_row1">
                    <div :class="{checkRecord_col:true,checkRecord_col_header:true,checkRecord_col_header_size_large:attr.size==='large',checkRecord_col_header_size_medium:attr.size==='medium',checkRecord_col_header_size_small:attr.size==='small',checkRecord_col_header_size_min:attr.size==='min',checkRecord_col_header_checked:attr.checked,checkRecord_col_header_disable:attr.disabled}">

                        <manage_header
                                ref="headerRef"
                                refId="headerRef"
                                v-show="pvt_isShow.header === 'headerRef'"
                                :paraVarPair="pvt_header.headerRef.paraVarPair"
                                :para="pvt_header.headerRef.para"
                                :attr="pvt_header.headerRef.attr">
                        </manage_header>
                    </div>
                </div>
                <div class="checkRecord_row checkRecord_row_row2">
                    <div :class="{checkRecord_col:true,checkRecord_col_activityItem:true,checkRecord_col_activityItem_size_large:attr.size==='large',checkRecord_col_activityItem_size_medium:attr.size==='medium',checkRecord_col_activityItem_size_small:attr.size==='small',checkRecord_col_activityItem_size_min:attr.size==='min',checkRecord_col_activityItem_checked:attr.checked,checkRecord_col_activityItem_disable:attr.disabled}">
                        <activity-item
                                ref="activityItemRef"
                                refId="activityItemRef"
                                v-show="pvt_isShow.activityItem === 'activityItemRef'"
                                :paraVarPair="pvt_activityItem.activityItemRef.paraVarPair"
                                v-for="(item, index) in pvt_activityItem.activityItemRef.forData"
                                :number="index"
                                :para="item.para"
                                :attr="item.attr">
                        </activity-item>
                    </div>
                </div>
                <div class="checkRecord_row checkRecord_row_row3">
                    <div v-show="itemIsEmpty" :class="{checkRecord_col:true,checkRecord_col_empty:true,checkRecord_col_empty_size_large:attr.size==='large',checkRecord_col_empty_size_medium:attr.size==='medium',checkRecord_col_empty_size_small:attr.size==='small',checkRecord_col_empty_size_min:attr.size==='min',checkRecord_col_empty_checked:attr.checked,checkRecord_col_empty_disable:attr.disabled}">

                        <empty
                                ref="emptyRef"
                                refId="emptyRef"
                                v-show="pvt_isShow.empty === 'emptyRef'"
                                :paraVarPair="pvt_empty.emptyRef.paraVarPair"
                                :para="pvt_empty.emptyRef.para"
                                :attr="pvt_empty.emptyRef.attr">
                        </empty>
                    </div>
                </div>
            </div>
        </div>
        <div class="checkRecord_row checkRecord_row_checkListDialog" v-show="checkListDialogWrap">  <!--新增-->
            <div :class="{checkRecord_col:true,checkRecord_col_checkListDialog:true,checkRecord_col_checkListDialog_size_large:attr.size==='large',checkRecord_col_checkListDialog_size_medium:attr.size==='medium',checkRecord_col_checkListDialog_size_small:attr.size==='small',checkRecord_col_checkListDialog_size_min:attr.size==='min',checkRecord_col_checkListDialog_checked:attr.checked,checkRecord_col_checkListDialog_disable:attr.disabled,checkRecord_dialog:true}">
                <checkList
                        ref="checkListDialogRef"
                        refId="checkListDialogRef"
                        v-if="pvt_isShow.checkListDialog === 'checkListDialogRef'"
                        :paraVarPair="pvt_checkListDialog.checkListDialogRef.paraVarPair"
                        :para="pvt_checkListDialog.checkListDialogRef.para"
                        :attr="pvt_checkListDialog.checkListDialogRef.attr">
                </checkList>
            </div>
        </div>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';
    import checkList from './checkList';
    import manage_header from '../manageHeader/manageHeader';
    import activityItem from './activityItem';
    import empty from './empty';
    export default {
        components: {checkList,manage_header,activityItem,empty},
        inject: ['sys'],
        props: ['refId','para','attr','number'],
        data: function() {
            return {
                pvt_subModuleMap: {
                    vessel:['checkListDialog','header','activityItem','empty'],
                    subModule:['checkListDialogRef','headerRef','activityItemRef','emptyRef'],
                },
                pvt_isShow: {
                    checkListDialog:null,
                    header:null,
                    activityItem:null,
                    empty:null,
                },
                pvt_eventPortInput: ['orderDetailEvent', 'backEvent'],

                mac: mac.mac,
                myType: 1,
                mySite: '',
                myID: 1,

                curActivityIdArr:[1,2],
                sizeArr:['medium','medium'],
                checkListDialogWrap: false,
                itemIsEmpty: false,

            };
        },
        watch: {
        },
        computed:{
            pvt_checkListDialog:function(){
                return {
                    checkListDialogRef:{
                        paraVarPair:{
                        },
                        para:{
                        },
                        attr:{
                            size:'medium',
                        },
                    },
                };
            },
            pvt_header:function(){
                return {
                    headerRef:{
                        paraVarPair:{
                        },
                        para:{
                        },
                        attr:{
                            size:'medium',
                        },
                    },
                };
            },
            pvt_activityItem:function(){
                let loopModule={
                    activityItemRef:{
                        para:{
                            curActivityId:this.curActivityIdArr,
                        },
                        attr:{
                            size:this.sizeArr,
                        },
                    },
                };
                let forData = this.pvt_createForData(loopModule);
                return {
                    activityItemRef:{
                        paraVarPair:{
                            curActivityId:'curActivityIdArr',
                        },
                        forData: forData.activityItemRef,
                    },
                };
            },
            pvt_empty:function(){
                return {
                    emptyRef:{
                        paraVarPair:{
                        },
                        para:{
                        },
                        attr:{
                            size:'medium',
                        },
                    },
                };
            },
        },
        created: function () {
            Object.assign(this, libSys,libUpload);
        },
        mounted: function () {
            this.pvt_initSysData();
        },
        methods: {
            getCookie: function (type) {
                if (type === 'userID') {
                    return 1;
                } else if (type === 'userSite') {
                    return {
                        geneAddr: {
                            groupID: 1,
                            cloudID: 2,
                            vesselType: 's',
                            vesselID: 18,
                            userID: 1,
                            geneID: 26
                        },
                        server: 12
                    }
                } else if (type === 'userType') {
                    // 0表示普通用户，1表示游客
                    return 0
                }
            },
            startModule:function(groupId,successCallBack,errorCallBack){
                let that = this;
                let fnname = 'checkRecord_start';
                let dbFlag;
                let dbData;
                let tableName;
                let portName;
                let inputData;
                let expression;
                let start;
                let total;
                let sort;
                let destGeneSite = '';
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0,
                    refArr: []
                };

                if (successCallBack !== null) {
                    errorCallBack = para;
                    successCallBack = null
                }
                para = errorCallBack;

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                            that.itemIsEmpty = false;
                            that.checkListDialogWrap = false;
                            that.curActivityIdArr = [];
                            that.sizeArr = [];

                            that.mySite = that.getCookie('userSite');
                            that.myId = that.getCookie('userID');
                            that.myType = that.getCookie('userType');

                            that.forceUpdateData(function () {
                                para.nStep = 'inputActivity';
                                if (++dbFlag === 2) {
                                    that.startModule(groupId, successCallBack, errorCallBack)
                                }
                            });
                            break;
                        case 'inputActivity':
                            tableName = this.mac.tb.groupActivity;
                            expression = that.mac.fd.groupActivity.status + '=' + that.mac.enum.groupActivity.status.closed + '||' + that.mac.fd.groupActivity.status + '=' + that.mac.enum.groupActivity.status.released + '||' + that.mac.fd.groupActivity.status + '=' + that.mac.enum.groupActivity.status.finished;
                            start = null;
                            total = null;
                            sort = ['id,asc'];
                            destGeneSite = '';
                            inputData = {
                                [this.mac.tb.groupActivity]: ['id'],
                                [this.mac.tb.groupActivityManageMember]: '',
                            };

                            that.sys.api.conditiondataInput(tableName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                if(result.length > 0) {
                                    that.itemIsEmpty = false;
                                    that.curActivityIdArr = JSON.parse(JSON.stringify(result));
                                    for(let i = 0; i < result.length; i++) {
                                        that.sizeArr.push('medium');
                                    }
                                } else {
                                    that.itemIsEmpty = true;
                                }

                                that.forceUpdateData(function () {
                                    para.nStep = 'start_sub';
                                    if (++dbFlag === 2) {
                                        that.startModule(groupId, successCallBack, errorCallBack)
                                    }
                                });
                            }, function () {
                            });
                            break;
                        case 'start_sub':
                            if(para.i >= para.refArr.length) {
                                para.i = 0;
                                if(that.itemIsEmpty) {
                                    para.nStep = 'emptyStart';
                                } else {
                                    para.nStep = 'checkItemStart';
                                }
                                dbFlag++;
                                break;
                            }
                            that.sm[para.refArr[para.i]].startModule(function () {
                                para.i++;
                                para.nStep = 'start_sub';
                                if (++dbFlag === 2) {
                                    that.startModule(groupId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'checkItemStart':
                            if (para.i > that.sm.activityItemRef.length - 1) {
                                para.i = 0;
                                para.nStep = 'emptyStart';
                                dbFlag++;
                                break;
                            }

                            that.sm.activityItemRef[para.i].startModule(function () {
                                para.i++;
                                para.nStep = 'checkItemStart';
                                if (++dbFlag === 2) {
                                    that.startModule(groupId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'emptyStart':
                            let emptyText = '暂无验票记录';
                            that.sm.emptyRef.startModule(emptyText, function () {
                                para.i++;
                                para.nStep = 'headStart';
                                if (++dbFlag === 2) {
                                    that.startModule(groupId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'headStart':
                            let headData = {
                                ref: '',
                                title: '验票记录',
                                badgeNum: 0,
                                reference: null,
                                showMenu: false
                            };
                            that.sm.headerRef.startModule(headData, function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(groupId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            para.refArr.push('headerRef');
                            if(that.itemIsEmpty) {
                                para.refArr.push('emptyRef');
                            } else {
                                para.refArr.push('activityItemRef');
                            }
                            that.showSubModule(para.refArr, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.startModule(groupId, successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'end':
                            para.successCallBack();
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },
            backClick:function(){
                this.ep.backEvent();
                this.hideSelfModule(this.refId, function () {
                }, function () {
                });
            },

            showCheckList:function(curActivityId){
                let that = this;
                that.checkListDialogWrap = true;
                that.showSubModule('checkListDialogRef', true, function () {
                    that.sm.checkListDialogRef.startModule(curActivityId, function () {
                    }, function () {
                    });
                }, function () {
                });
            },

            orderDetailClick(curBillId,successCallBack,errorCallBack) {
                this.ep.orderDetailEvent('search', curBillId,successCallBack,errorCallBack);
            },
            hideCheckListDialog() {
                this.checkListDialogWrap = false;
            },

            // 公开方法：
            checkListRefresh() {
                this.sm.checkListDialogRef.checkListRefresh();
            },



            headerRef_backEvent:function(){
                this.backClick();
            },
            activityItemRef_itemClickEvent:function(curActivityId){
                this.showCheckList(curActivityId);
            },
            checkListDialogRef_orderDetailEvent:function(curBillId,successCallBack,errorCallBack){
                this.orderDetailClick(curBillId,successCallBack,errorCallBack)
            },
            checkListDialogRef_backEvent:function(){
                this.hideCheckListDialog()
            },
        },
    };
</script>
<style lang="less" scoped>
    @import "../../../../assets/var_kzt"; /*新增*/
    .checkRecord_container {
    }
    .checkRecord_row {
        display:flex;
        flex:1;
    }
    .checkRecord_col {
        display:flex;
        flex-direction:column;
    }
    .checkRecord_col_checkRecordWindow_size_medium {
        width:@checkRecord-checkRecordWindow-medium-width;
    }
    .checkRecord_col_checkRecordWindow {
        background-color:mix(@checkRecord-checkRecordWindow-background-color,#fff,@checkRecord-checkRecordWindow-background-color-opacity);
    }
    .checkRecord_col_header_size_medium {
        width:@checkRecord-header-medium-width;
        position: fixed;
        top:0;
        left:0;
        z-index: 2; /*新增*/
    }
    .checkRecord_col_header {
        border-style:@checkRecord-header-border-style;
        border-width:@checkRecord-header-border-width;
        border-color:mix(@checkRecord-header-border-color,#fff,@checkRecord-header-hover-border-color-opacity);
        background-color:mix(@checkRecord-header-background-color,#fff,@checkRecord-header-background-color-opacity);
    }
    .checkRecord_col_activityItem_size_medium {
        width:@checkRecord-activityItem-medium-width;
        padding: @checkRecord-activityItem-medium-padding;
        height: 100%;
        overflow: auto;
        box-sizing: border-box; /*新增*/
    }
    .checkRecord_col_checkListDialog_size_medium {
        width:@checkRecord-checkListDialog-medium-width;
        height:@checkRecord-checkListDialog-medium-height;
    }
    .checkRecord_col_empty_size_medium {
        width:@checkRecord-empty-medium-width;
        align-items:@checkRecord-empty-medium-horizontal-position;
        margin:@checkRecord-empty-medium-margin;
    }
    .checkRecord_dialog {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 18;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: #f4f4f4;
    }
</style>