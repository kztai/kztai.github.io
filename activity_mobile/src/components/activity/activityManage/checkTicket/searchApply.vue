<template>
    <div class="searchApply_container">
        <div class="searchApply_row searchApply_row_searchApplyRow">
            <div :class="{searchApply_col:true,searchApply_col_searchApplyWindow:true,searchApply_col_searchApplyWindow_size_large:attr.size==='large',searchApply_col_searchApplyWindow_size_medium:attr.size==='medium',searchApply_col_searchApplyWindow_size_small:attr.size==='small',searchApply_col_searchApplyWindow_size_min:attr.size==='min',searchApply_col_searchApplyWindow_checked:attr.checked,searchApply_col_searchApplyWindow_disable:attr.disabled}">

                <div class="fixed-wrap">
                    <div class="searchApply_row searchApply_row_row1">
                        <div :class="{searchApply_col:true,searchApply_col_header:true,searchApply_col_header_size_large:attr.size==='large',searchApply_col_header_size_medium:attr.size==='medium',searchApply_col_header_size_small:attr.size==='small',searchApply_col_header_size_min:attr.size==='min',searchApply_col_header_checked:attr.checked,searchApply_col_header_disable:attr.disabled}">

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
                    <div class="searchApply_row searchApply_row_row2">
                        <div :class="{searchApply_col:true,searchApply_col_input:true,searchApply_col_input_size_large:attr.size==='large',searchApply_col_input_size_medium:attr.size==='medium',searchApply_col_input_size_small:attr.size==='small',searchApply_col_input_size_min:attr.size==='min',searchApply_col_input_checked:attr.checked,searchApply_col_input_disable:attr.disabled}">

                            <lm2b-input-text
                                    ref="inputRef"
                                    refId="inputRef"
                                    v-show="pvt_isShow.input === 'inputRef'"
                                    :paraVarPair="pvt_input.inputRef.paraVarPair"
                                    :para="pvt_input.inputRef.para"
                                    :attr="pvt_input.inputRef.attr">
                            </lm2b-input-text>
                        </div>
                    </div>
                </div>

                <div class="searchApply_row searchApply_row_row3">
                    <div :class="{searchApply_col:true,searchApply_col_applyItem:true,searchApply_col_applyItem_size_large:attr.size==='large',searchApply_col_applyItem_size_medium:attr.size==='medium',searchApply_col_applyItem_size_small:attr.size==='small',searchApply_col_applyItem_size_min:attr.size==='min',searchApply_col_applyItem_checked:attr.checked,searchApply_col_applyItem_disable:attr.disabled}">
                        <apply-item
                                ref="applyItemRef"
                                refId="applyItemRef"
                                v-show="pvt_isShow.applyItem === 'applyItemRef'"
                                :paraVarPair="pvt_applyItem.applyItemRef.paraVarPair"
                                v-for="(item, index) in pvt_applyItem.applyItemRef.forData"
                                :number="index"
                                :para="item.para"
                                :attr="item.attr">
                        </apply-item>
                    </div>
                </div>
                <div class="searchApply_row searchApply_row_row4">
                    <div :class="{searchApply_col:true,searchApply_col_empty:true,searchApply_col_empty_size_large:attr.size==='large',searchApply_col_empty_size_medium:attr.size==='medium',searchApply_col_empty_size_small:attr.size==='small',searchApply_col_empty_size_min:attr.size==='min',searchApply_col_empty_checked:attr.checked,searchApply_col_empty_disable:attr.disabled}" v-show="itemIsEmpty">

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
    import applyItem from '../applyManage/applyItem';
    import empty from './empty';
    export default {
        components: {manage_header,applyItem,empty},
        inject: ['sys'],
        props: ['refId','para','attr','number'],
        data: function() {
            return {
                pvt_subModuleMap: {
                    vessel:['header','input','applyItem','empty'],
                    subModule:['headerRef','inputRef','applyItemRef','emptyRef'],
                },
                pvt_isShow: {
                    header:null,
                    input:null,
                    applyItem:null,
                    empty:null,
                },
                pvt_eventPortInput: ['orderDetailEvent', 'backEvent'],

                mac: mac.mac,

                conditionValue: '',
                billIdArr: [],
                sizeArr: ['medium','medium'],
                itemIsEmpty: false,
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
            pvt_input:function(){
                return {
                    inputRef:{
                        paraVarPair:{
                        },
                        para:{
                            text:'',
                        },
                        attr:{
                            placeholder:'请输入手机号',
                            isPlaceholder: false
                        },
                    },
                };
            },
            pvt_applyItem:function(){
                let loopModule={
                    applyItemRef:{
                        para:{
                            curBillId: this.billIdArr,
                        },
                        attr:{
                            size:this.sizeArr,
                        },
                    },
                };
                let forData = this.pvt_createForData(loopModule);
                return {
                    applyItemRef:{
                        paraVarPair:{
                        },
                        forData: forData.applyItemRef,
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
                let fnname = 'searchApply_start';
                let dbFlag;
                let dbData;
                let tableName;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0,
                    refArr: ['inputRef']
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
                            that.curActivityId = curActivityId;
                            that.forceUpdateData(function () {
                                para.nStep = 'start_sub';
                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, successCallBack, errorCallBack)
                                }
                            });
                            break;
                        case 'start_sub':
                            if(para.i >= para.refArr.length) {
                                para.i = 0;
                                para.nStep = 'headStart';
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
                        case 'headStart':
                            let headData = {
                                ref: '',
                                title: '搜索参与者',
                                badgeNum: 0,
                                reference: null,
                                showMenu: false
                            };
                            that.sm.headerRef.startModule(headData, function () {
                                para.nStep = 'emptyStart';
                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'emptyStart':
                            let emptyText = '暂无参与者名单';
                            that.sm.emptyRef.startModule(emptyText, function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            para.refArr.push('headerRef', 'emptyRef');
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
            searchTicket:function(value){
                this.conditionValue = value;
                if (navigator.onLine) {
                    this.searchApply(0, function () {
                    }, function () {
                    })
                } else {
                    this.$notify({type: 'warning', message: '出错了！请稍后再试。'});
                }
            },
            
            btnClick:function(){
                this.ep.backEvent();
                this.hideSelfModule(this.refId, function () {
                }, function () {
                });
            },

            orderDetailClick(curBillId,successCallBack,errorCallBack) {
                this.ep.orderDetailEvent('search', curBillId,successCallBack,errorCallBack);
            },

            // 公开方法：
            searchApply: function (start, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'searchApply_searchApply';
                let dbFlag;
                let dbData;
                let tableName;
                let record;
                let condition;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0,
                    isEmpty: true,
                    selectItemIdArr: []
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
                            tableName = that.mac.tb.groupActivity;
                            record = [this.para.activityId];
                            that.sys.api.getSourceRecord(tableName, record, function (result) {
                                para.terActivityId = result[0];
                                para.nStep = 'inputOrder';
                                if (++dbFlag === 2) {
                                    that.searchApply(start, successCallBack, errorCallBack)
                                }
                            }, function (error) {
                            });
                            break;
                        case 'inputOrder':
                            let expression = this.mac.fd.groupActivityOrder.groupActivityID + '=' + para.terActivityId;
                            let startNum = null;
                            let total = null;
                            let sort = ['id,asc'];
                            let destGeneSite = '';
                            let portName = this.mac.tb.groupActivityOrder;
                            let inputData = null;
                            this.sys.api.conditiondataInput(portName, inputData, expression, startNum, total, sort, destGeneSite, function (result) {
                                para.nStep = 'getApply';
                                if (++dbFlag === 2) {
                                    that.searchApply(start, successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'getApply':
                            that.billIdArr = [];
                            that.sizeArr = [];
                            that.itemIsEmpty = true;

                            if (that.conditionValue === '') {
                                para.condition = this.mac.fd.groupActivityBill.status + '=' + that.mac.enum.groupActivityBill.status.checkTicket + '||' + this.mac.fd.groupActivityBill.status + '=' + that.mac.enum.groupActivityBill.status.finish;
                            } else {
                                para.condition = this.mac.fd.groupActivityBill.mobile + '="' + that.conditionValue + '"&&(' + this.mac.fd.groupActivityBill.status + '=' + that.mac.enum.groupActivityBill.status.checkTicket + '||' + this.mac.fd.groupActivityBill.status + '=' + that.mac.enum.groupActivityBill.status.finish + ')';
                            }

                            tableName = this.mac.tb.groupActivityBill;
                            condition = para.condition;
                            dbData = {};
                            dbData[that.mac.fd.id] = [];
                            this.sys.api.recordQuery(tableName, null, condition, dbData, function (result) {
                                if (dbData[that.mac.fd.id].length > 0) {
                                    that.billIdArr = JSON.parse(JSON.stringify(dbData[that.mac.fd.id]));
                                    for(let i = 0; i < dbData[that.mac.fd.id].length; i++) {
                                        that.sizeArr.push('medium');
                                    }
                                    that.itemIsEmpty = false;
                                    para.nStep = 'refreshItems';
                                } else {
                                    // that.$notify({type: 'warning', message: '暂无待验票的名单！'});
                                    that.itemIsEmpty = true;
                                    para.nStep = 'end';
                                }

                                that.forceUpdateData(function () {
                                    if (++dbFlag === 2) {
                                        that.searchApply(start, successCallBack, errorCallBack)
                                    }
                                })
                            }, para.errorCallBack);
                            break;
                        case 'refreshItems':
                            if (para.i > that.sm.applyItemRef.length - 1) {
                                para.i = 0;
                                para.nStep = 'end';
                                dbFlag++;
                                break;
                            }

                            that.sm.applyItemRef[para.i].startModule(function () {
                                para.i++;
                                para.nStep = 'refreshItems';
                                if (++dbFlag === 2) {
                                    that.searchApply(start, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'end':
                            if (that.sm.applyItemRef && that.sm.applyItemRef.length > 0) {
                                that.showSubModule('applyItemRef', true, function () {
                                }, function (error) {
                                    console.error(error);
                                });
                            }
                            para.successCallBack();
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },



            headerRef_backEvent:function(){
                this.btnClick();
            },
            inputRef_inputEnterEvent:function(value){
                this.searchTicket(value);
            },
            applyItemRef_orderDetailEvent:function(curBillId,successCallBack,errorCallBack){
                this.orderDetailClick(curBillId,successCallBack,errorCallBack)
            },
        },
    };
</script>
<style lang="less" scoped>
    @import "../../../../assets/var_kzt"; /*新增*/
    .searchApply_container {
    }
    .searchApply_row {
        display:flex;
        flex:1;
    }
    .searchApply_col {
        display:flex;
        flex-direction:column;
    }
    .searchApply_col_searchApplyWindow_size_medium {
        width:@searchApply-searchApplyWindow-medium-width;
    }
    .searchApply_col_searchApplyWindow {
        background-color:mix(@searchApply-searchApplyWindow-background-color,#fff,@searchApply-searchApplyWindow-background-color-opacity);
    }
    .searchApply_col_header_size_medium {
        width:@searchApply-header-medium-width;
        position: fixed;
        top:0;
        left:0;
        z-index: 2; /*新增*/
    }
    .searchApply_col_header {
        background-color:mix(@searchApply-header-background-color,#fff,@searchApply-header-background-color-opacity);
    }
    .searchApply_col_input_size_medium {
        width:@searchApply-input-medium-width;
        padding:@searchApply-input-medium-padding;
        position: fixed;
        top:42px;
        left:0;
        z-index: 2; /*新增*/
    }
    .searchApply_col_input {
        background-color:mix(@searchApply-input-background-color,#fff,@searchApply-input-background-color-opacity);
    }
    .searchApply_col_applyItem_size_medium {
        width:@searchApply-applyItem-medium-width;
        height: 100%;
        overflow: auto;
        box-sizing: border-box; /*新增*/
        background-color: mix(@searchApply-applyItem-background-color,#fff,@searchApply-applyItem-background-color-opacity);
        padding: @searchApply-applyItem-medium-padding;
    }
    .searchApply_col_empty_size_medium {
        width:@searchApply-empty-medium-width;
        align-items:@searchApply-empty-medium-horizontal-position;
        margin:@searchApply-empty-medium-margin;
    }

    .fixed-wrap {
        background-color: #f4f4f4;
        overflow: hidden;
    }
</style>