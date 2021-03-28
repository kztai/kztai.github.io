<template>
    <div class="checkList_container">
        <div class="checkList_row checkList_row_checkListRow">
            <div :class="{checkList_col:true,checkList_col_checkListWindow:true,checkList_col_checkListWindow_size_large:attr.size==='large',checkList_col_checkListWindow_size_medium:attr.size==='medium',checkList_col_checkListWindow_size_small:attr.size==='small',checkList_col_checkListWindow_size_min:attr.size==='min',checkList_col_checkListWindow_checked:attr.checked,checkList_col_checkListWindow_disable:attr.disabled}">

                <div class="checkList_row checkList_row_row1">
                    <div :class="{checkList_col:true,checkList_col_header:true,checkList_col_header_size_large:attr.size==='large',checkList_col_header_size_medium:attr.size==='medium',checkList_col_header_size_small:attr.size==='small',checkList_col_header_size_min:attr.size==='min',checkList_col_header_checked:attr.checked,checkList_col_header_disable:attr.disabled}">

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
                <div class="checkList_row checkList_row_row2">
                    <div :class="{checkList_col:true,checkList_col_tab:true,checkList_col_tab_size_large:attr.size==='large',checkList_col_tab_size_medium:attr.size==='medium',checkList_col_tab_size_small:attr.size==='small',checkList_col_tab_size_min:attr.size==='min',checkList_col_tab_checked:attr.checked,checkList_col_tab_disable:attr.disabled}">

                        <lm2b-tabs
                                ref="tabRef"
                                refId="tabRef"
                                v-show="pvt_isShow.tab === 'tabRef'"
                                :paraVarPair="pvt_tab.tabRef.paraVarPair"
                                :para="pvt_tab.tabRef.para"
                                :attr="pvt_tab.tabRef.attr">
                        </lm2b-tabs>
                    </div>
                </div>
                <div class="checkList_row checkList_row_row3">
                    <div :class="{checkList_col:true,checkList_col_checkItem:true,checkList_col_checkItem_size_large:attr.size==='large',checkList_col_checkItem_size_medium:attr.size==='medium',checkList_col_checkItem_size_small:attr.size==='small',checkList_col_checkItem_size_min:attr.size==='min',checkList_col_checkItem_checked:attr.checked,checkList_col_checkItem_disable:attr.disabled}">
                        <check-item
                                ref="checkItemRef"
                                refId="checkItemRef"
                                v-show="pvt_isShow.checkItem === 'checkItemRef'"
                                :paraVarPair="pvt_checkItem.checkItemRef.paraVarPair"
                                v-for="(item, index) in pvt_checkItem.checkItemRef.forData"
                                :number="index"
                                :para="item.para"
                                :attr="item.attr">
                        </check-item>
                    </div>
                </div>
                <div class="checkList_row checkList_row_row4">
                    <div v-show="itemIsEmpty" :class="{checkList_col:true,checkList_col_empty:true,checkList_col_empty_size_large:attr.size==='large',checkList_col_empty_size_medium:attr.size==='medium',checkList_col_empty_size_small:attr.size==='small',checkList_col_empty_size_min:attr.size==='min',checkList_col_empty_checked:attr.checked,checkList_col_empty_disable:attr.disabled}">

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
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';
    import manage_header from '../manageHeader/manageHeader';
    import checkItem from './checkItem';
    import empty from './empty';
    export default {
        components: {manage_header,checkItem,empty},
        inject: ['sys'],
        props: ['refId','para','attr','number'],
        data: function() {
            return {
                pvt_subModuleMap: {
                    vessel:['header','tab','checkItem','empty'],
                    subModule:['headerRef','tabRef','checkItemRef','emptyRef'],
                },
                pvt_isShow: {
                    header:null,
                    tab:null,
                    checkItem:null,
                    empty:null,
                },
                pvt_eventPortInput: ['orderDetailEvent', 'backEvent'],

                mac: mac.mac,

                curBillIdArr:[1,2],
                sizeArr:['medium','medium'],
                curActivityId: null,
                itemIsEmpty: false,
                curTabIndex: 0
            };
        },
        watch: {
        },
        computed:{
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
            pvt_tab:function(){
                return {
                    tabRef:{
                        paraVarPair:{
                        },
                        para:{
                            tabData:[{val: "待验票", icon: "", disable: ""},{val: "已验票", icon: "", disable: ""}],
                        },
                        attr:{
                            stretch:true,
                            checked: this.curTabIndex
                        },
                    },
                };
            },
            pvt_checkItem:function(){
                let loopModule={
                    checkItemRef:{
                        para:{
                            curBillId:this.curBillIdArr,
                        },
                        attr:{
                            size:this.sizeArr,
                        },
                    },
                };
                let forData = this.pvt_createForData(loopModule);
                return {
                    checkItemRef:{
                        paraVarPair:{
                            curBillId:'curBillIdArr',
                        },
                        forData: forData.checkItemRef,
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
            startModule:function(curActivityId,successCallBack,errorCallBack){
                let that = this;
                let fnname = 'checkList_start';
                let dbFlag;
                let dbData;
                let tableName;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0,
                    refArr: ['tabRef']
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
                        case 'getApplyData':
                            that.curActivityId = curActivityId;
                            that.itemIsEmpty = false;

                            that.inputOrderData(0, function () {
                                let condition = that.mac.fd.groupActivityBill.status + '=' + that.mac.enum.groupActivityBill.status.checkTicket;
                                that.getBillData(condition, function () {
                                    that.forceUpdateData(function () {
                                        para.nStep = 'start_sub';
                                        if (++dbFlag === 2) {
                                            that.startModule(curActivityId, successCallBack, errorCallBack)
                                        }
                                    });
                                }, function () {
                                });
                            }, function () {
                            });
                            break;
                        case 'start_sub':
                            if(para.i >= para.refArr.length) {
                                para.i = 0;
                                para.nStep = 'emptyStart';
                                dbFlag++;
                                break;
                            }
                            that.sm[para.refArr[para.i]].startModule(function () {
                                para.i++;
                                para.nStep = 'start_sub';
                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'emptyStart':
                            let emptyText = '暂无验票名单';
                            that.sm.emptyRef.startModule(emptyText, function () {
                                para.i++;
                                para.nStep = 'headStart';
                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'headStart':
                            let headData = {
                                ref: '',
                                title: '验票名单',
                                badgeNum: 0,
                                reference: null,
                                showMenu: false
                            };
                            that.sm.headerRef.startModule(headData, function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            para.refArr.push('headerRef','emptyRef','checkItemRef');
                            that.showSubModule(para.refArr, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, successCallBack, errorCallBack)
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

            inputOrderData: function (startNum, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'checkList_inputOrderData';
                let dbFlag;
                let dbData;
                let tableName;
                let record;
                let portName;
                let inputData;
                let expression;
                let start;
                let total;
                let sort;
                let destGeneSite;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
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
                        case 'getTerActivityId':
                            tableName = that.mac.tb.groupActivity;
                            record = [that.curActivityId];
                            that.sys.api.getSourceRecord(tableName, record, function (result) {
                                para.terActivityId = result[0];
                                para.nStep = 'inputData';
                                if (++dbFlag === 2) {
                                    that.inputOrderData(startNum, successCallBack, errorCallBack)
                                }
                            }, function (error) {
                            });
                            break;
                        case 'inputData':
                            expression = that.mac.fd.groupActivityOrder.groupActivityID + '=' + para.terActivityId;
                            start = startNum;
                            total = 10;
                            sort = ['id,asc'];
                            destGeneSite = '';
                            portName = this.mac.tb.groupActivityOrder;
                            inputData = null;
                            this.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.inputOrderData(startNum, successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error)
                            });
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

            getBillData: function (condition, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'checkList_getBillData';
                let dbFlag;
                let dbData;
                let tableName;
                let expression;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i:0
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
                        case 'getBillData':
                            that.curBillIdArr = [];
                            that.sizeArr = [];

                            tableName = this.mac.tb.groupActivityBill;
                            expression = condition;
                            dbData = {};
                            dbData[that.mac.fd.id] = [];
                            this.sys.api.recordQuery(tableName, null, expression, dbData, function (result) {
                                if(dbData[that.mac.fd.id].length > 0) {
                                    that.itemIsEmpty = false;
                                    for(let i = 0; i < dbData[that.mac.fd.id].length; i++) {
                                        that.curBillIdArr.push(dbData[that.mac.fd.id][i]);
                                        that.sizeArr.push('medium');
                                    }
                                } else {
                                    that.itemIsEmpty = true;
                                }

                                that.forceUpdateData(function () {
                                    para.nStep = 'checkItemStart';
                                    if (++dbFlag === 2) {
                                        that.getBillData(condition, successCallBack, errorCallBack)
                                    }
                                });
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'checkItemStart':
                            if (para.i > that.sm.checkItemRef.length - 1) {
                                para.i = 0;
                                para.nStep = 'end';
                                dbFlag++;
                                break;
                            }

                            that.sm.checkItemRef[para.i].startModule(function () {
                                para.i++;
                                para.nStep = 'checkItemStart';
                                if (++dbFlag === 2) {
                                    that.getBillData(condition, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
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
            labelChange: function(index) {
                let that = this;
                let condition;

                if(that.curTabIndex === index) {
                    return
                }
                that.curTabIndex = index;

                switch (index) {
                    case 0:
                        condition = that.mac.fd.groupActivityBill.status + '=' + that.mac.enum.groupActivityBill.status.checkTicket;
                        break;
                    case 1:
                        condition = that.mac.fd.groupActivityBill.status + '=' + that.mac.enum.groupActivityBill.status.finish;
                        break;
                }
                this.getBillData(condition, function () {
                }, function () {
                });
            },

            // 公开方法：
            checkListRefresh() {
                let condition = this.mac.fd.groupActivityBill.status + '=' + this.mac.enum.groupActivityBill.status.checkTicket;
                this.getBillData(condition, function () {
                }, function () {
                });
            },



            headerRef_backEvent:function(){
                this.backClick();
            },
            tabRef_labelClickEvent:function(index){
                this.labelChange(index);
            },
            checkItemRef_orderDetailEvent:function(curBillId,successCallBack,errorCallBack){
                this.ep.orderDetailEvent(curBillId,successCallBack,errorCallBack);
            },
        },
    };
</script>
<style lang="less" scoped>
    @import "../../../../assets/var_kzt"; /*新增*/
    .checkList_container {
    }
    .checkList_row {
        display:flex;
        flex:1;
    }
    .checkList_col {
        display:flex;
        flex-direction:column;
    }
    .checkList_col_checkListWindow_size_medium {
        width:@checkList-checkListWindow-medium-width;
    }
    .checkList_col_header_size_medium {
        width:@checkList-header-medium-width;
        position: fixed;
        top:0;
        left:0;
        z-index: 2; /*新增*/
    }
    .checkList_col_tab_size_medium {
        width:@checkList-tab-medium-width;
        padding:@checkList-tab-medium-padding;
        background-color: mix(@checkList-tab-background-color, #fff, @checkList-tab-background-color-opacity);
        position: fixed;
        top:42px;
        left:0;
        z-index: 2; /*新增*/
    }
    .checkList_col_checkItem_size_medium {
        width:@checkList-checkItem-medium-width;
        background-color: mix(@checkList-checkItem-background-color, #fff, @checkList-checkItem-background-color-opacity);
        height: 100%;
        overflow: auto;
        box-sizing: border-box; /*新增*/
        padding: @checkList-checkItem-medium-padding;
    }
    .checkList_col_empty_size_medium {
        width:@checkList-empty-medium-width;
        padding:@checkList-empty-medium-padding;
        margin:@checkList-empty-medium-margin;
        align-items:@checkList-empty-medium-horizontal-position;
    }
</style>