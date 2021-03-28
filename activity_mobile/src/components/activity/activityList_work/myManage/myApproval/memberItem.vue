<template>
    <div v-show="pvt_isWinShow.approval_ticketItemWindow"
         :class="{memberItem_container:true,memberItem_col:true,memberItem_col_approval_ticketItemWindow:true,memberItem_col_approval_ticketItemWindow_size_large:attr.size==='large',memberItem_col_approval_ticketItemWindow_size_medium:attr.size==='medium',memberItem_col_approval_ticketItemWindow_size_small:attr.size==='small',memberItem_col_approval_ticketItemWindow_size_min:attr.size==='min',memberItem_col_approval_ticketItemWindow_checked:attr.checked,memberItem_col_approval_ticketItemWindow_disable:attr.disabled}" >

        <div class="memberItem_row memberItem_row_row1">
            <div v-show="pvt_isWinShow.name"
                 :class="{memberItem_col:true,memberItem_col_name:true,memberItem_col_name_size_large:attr.size==='large',memberItem_col_name_size_medium:attr.size==='medium',memberItem_col_name_size_small:attr.size==='small',memberItem_col_name_size_min:attr.size==='min',memberItem_col_name_checked:attr.checked,memberItem_col_name_disable:attr.disabled}" >

                <lm2b-link-text
                        ref="nameRef"
                        refId="nameRef"
                        v-show="pvt_isShow.name === 'nameRef'"
                        :paraVarPair="pvt_name.nameRef.paraVarPair"
                        :para="pvt_name.nameRef.para"
                        :attr="pvt_name.nameRef.attr">
                </lm2b-link-text>
            </div>
            <div v-show="pvt_isWinShow.btn"
                 :class="{memberItem_col:true,memberItem_col_btn:true,memberItem_col_btn_size_large:attr.size==='large',memberItem_col_btn_size_medium:attr.size==='medium',memberItem_col_btn_size_small:attr.size==='small',memberItem_col_btn_size_min:attr.size==='min',memberItem_col_btn_checked:attr.checked,memberItem_col_btn_disable:attr.disabled}" >

                <lm2b-link-text
                        ref="btnRef"
                        refId="btnRef"
                        v-show="pvt_isShow.btn === 'btnRef'"
                        :paraVarPair="pvt_btn.btnRef.paraVarPair"
                        :para="pvt_btn.btnRef.para"
                        :attr="pvt_btn.btnRef.attr">
                </lm2b-link-text>
            </div>
            <div v-show="pvt_isWinShow.price"
                 :class="{memberItem_col:true,memberItem_col_price:true,memberItem_col_price_size_large:attr.size==='large',memberItem_col_price_size_medium:attr.size==='medium',memberItem_col_price_size_small:attr.size==='small',memberItem_col_price_size_min:attr.size==='min',memberItem_col_price_checked:attr.checked,memberItem_col_price_disable:attr.disabled}" >

                <lm2b-link-text
                        ref="priceRef"
                        refId="priceRef"
                        v-show="pvt_isShow.price === 'priceRef'"
                        :paraVarPair="pvt_price.priceRef.paraVarPair"
                        :para="pvt_price.priceRef.para"
                        :attr="pvt_price.priceRef.attr">
                </lm2b-link-text>
            </div>
        </div>

        <div :class="{memberItem_mask:true}"
             v-if="pvt_isShow.ticketDialog === 'memberDialogRef'">
            <div :class="{memberItem_dialog:true,memberItem_col:true,memberItem_col_ticketDialog:true,memberItem_col_ticketDialog_size_large:attr.size==='large',memberItem_col_ticketDialog_size_medium:attr.size==='medium',memberItem_col_ticketDialog_size_small:attr.size==='small',memberItem_col_ticketDialog_size_min:attr.size==='min',memberItem_col_ticketDialog_checked:attr.checked,memberItem_col_ticketDialog_disable:attr.disabled}">
                <confirm-dialog
                        ref="memberDialogRef"
                        refId="memberDialogRef"
                        :paraVarPair="pvt_ticketDialog.memberDialogRef.paraVarPair"
                        :para="pvt_ticketDialog.memberDialogRef.para"
                        :attr="pvt_ticketDialog.memberDialogRef.attr">
                </confirm-dialog>
            </div>
        </div>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';
    import confirmDialog from '../../../activityManage/confirmDialog';
    export default {
        components: {confirmDialog},
        inject: ['sys'],
        props: ['refId','para','attr','paraVarPair','number'],
        data: function() {
            return {

                functionName:this.para.functionName,
                pvt_subModuleMap: {
                    vessel:['name','btn','price','ticketDialog'],
                    subModule:['nameRef','btnRef','priceRef','memberDialogRef'],
                },
                pvt_isShow: {
                    name:null,
                    btn:null,
                    price:null,
                    ticketDialog:null,
                },
                pvt_isWinShow: {
                    approval_ticketItemWindow:true,
                    name:true,
                    btn:true,
                    price:true,
                },
                pvt_eventPortInput: ['confirmEvent'],

                memberNumber:'12人',
                mac:mac.mac,
            };
        },
        watch: {
            functionName: {
                handler: function (val, oldVal) {
                    if (val !== oldVal && this.paraVarPair.functionName) {
                        if (this.number !== undefined) { // 循环
                            this.$parent[this.paraVarPair.functionName][this.number] = val
                        } else { // 非循环
                            this.$parent[this.paraVarPair.functionName] = val
                        }
                    }
                },
                deep   : true
            },
        },
        computed:{
            pvt_name:function(){
                return {
                    nameRef:{
                        paraVarPair:{
                            textData:'functionName',
                        },
                        para:{
                            textData:this.functionName,
                        },
                        attr:{
                            color:'#333',
                            fontSize:'12px',
                        },
                    },
                };
            },
            pvt_btn:function(){
                return {
                    btnRef:{
                        paraVarPair:{
                        },
                        para:{
                            textData:'',
                        },
                        attr:{
                            isClick:true,
                            color:'#12B0FF',
                            icon:'van-icon-info-o',
                        },
                    },
                };
            },
            pvt_price:function(){
                return {
                    priceRef:{
                        paraVarPair:{
                            textData:'memberNumber',
                        },
                        para:{
                            textData:this.memberNumber,
                        },
                        attr:{
                            color:'#333',
                            fontSize:'12px',
                        },
                    },
                };
            },
            pvt_ticketDialog:function(){
                return {
                    memberDialogRef:{
                        paraVarPair:{
                        },
                        para:{
                        },
                        attr:{
                            size: 'medium'
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
                let fnname = 'ticketInfoDialog_start';
                let dbFlag;
                let dbData;
                let tableName;
                let condition;
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
                    i: 0,
                    refArr: ['nameRef','btnRef','priceRef']
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
                            start = null;
                            total = null;
                            sort = ['id,asc'];
                            destGeneSite = '';
                            condition = '';
                            portName = this.mac.tb.group;
                            inputData = null;
                            this.sys.api.conditiondataInput(portName, inputData, condition, start, total, sort, destGeneSite, function (result) {

                                para.nStep = 'getTicketData';
                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'getTicketData':
                            tableName = this.mac.tb.groupActivityManageMember;
                            switch (this.para.functionName) {
                                case '主持人':
                                    condition = this.mac.fd.groupActivityManageMember.function + '=' + this.mac.enum.groupActivityManageMember.function.host;
                                    break;
                                case '主讲人':
                                    condition = this.mac.fd.groupActivityManageMember.function + '=' + this.mac.enum.groupActivityManageMember.function.lecture;
                                    break;
                                case '助手':
                                    condition = this.mac.fd.groupActivityManageMember.function + '=' + this.mac.enum.groupActivityManageMember.function.assistant;
                                    break;
                                case '在线客服':
                                    condition = this.mac.fd.groupActivityManageMember.function + '=' + this.mac.enum.groupActivityManageMember.function.service;
                                    break;
                            }
                            dbData = {};
                            dbData[that.mac.fd.id] = [];
                            dbData[that.mac.fd.groupActivityManageMember.member] = [];

                            this.sys.api.recordQuery(tableName, [curActivityId], condition, dbData, function () {
                                that.memberNumber = dbData[that.mac.fd.id].length + '人';
                                that.memberIdArr = dbData[that.mac.fd.groupActivityManageMember.member];
                                that.forceUpdateData(function () {
                                    para.nStep = 'start_sub';
                                    if (++dbFlag === 2) {
                                        that.startModule(curActivityId, successCallBack, errorCallBack)
                                    }
                                });
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'start_sub':
                            if (para.i >= para.refArr.length) {
                                para.i = 0;
                                para.nStep = 'showSubModule';
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
                        case 'showSubModule':
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
            confirmClick:function(){},
            showMemberDialog:function(successCallBack,errorCallBack){
                let that = this;
                let fnname = 'memberItem_showMemberDialog';
                let dbFlag;
                let dbData;
                let tableName;
                let record;
                let condition;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i:0,
                    dialogText: ''
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
                        case 'getClerkData':
                            if (para.i >= that.memberIdArr.length) {
                                para.i = 0;
                                para.nStep = 'showDialog';
                                dbFlag++;
                                break;
                            }

                            tableName = that.mac.tb.clerkSet;
                            condition = that.mac.fd.clerkSet.user + '=' + that.memberIdArr[para.i];
                            dbData = {};
                            dbData[that.mac.fd.id] = [];
                            dbData[that.mac.fd.clerkSet.clerkName] = [];

                            that.sys.api.recordQuery(tableName, null, condition, dbData, function () {
                                para.clerkName = dbData[that.mac.fd.clerkSet.clerkName][0];
                                para.clerkId = dbData[that.mac.fd.id][0];
                                para.nStep = 'getDepartmentId';
                                if (++dbFlag === 2) {
                                    that.showMemberDialog(successCallBack, errorCallBack)
                                }
                            }, function (error) {
                            });
                            break;
                        case 'getDepartmentId':
                            tableName = that.mac.tb.clerkSet;
                            record = [para.clerkId];

                            that.sys.api.getParentRecord(tableName, record, function (result) {
                                para.departmentId = result[0];
                                para.nStep = 'getDepartmentName';
                                if (++dbFlag === 2) {
                                    that.showMemberDialog(successCallBack, errorCallBack)
                                }
                            }, function (error) {
                            });
                            break;
                        case 'getDepartmentName':
                            tableName = that.mac.tb.department;
                            dbData = {};
                            dbData[that.mac.fd.id] = [para.departmentId];
                            dbData[that.mac.fd.department.name] = [];

                            that.sys.api.recordRead(tableName, dbData, function () {
                                para.departmentName = dbData[that.mac.fd.department.name][0];

                                para.dialogText += para.departmentName + '：' + para.clerkName + '； ';

                                para.i++;
                                para.nStep = 'getClerkData';
                                if (++dbFlag === 2) {
                                    that.showMemberDialog(successCallBack, errorCallBack)
                                }
                            }, function (error) {
                            });
                            break;
                        case 'showDialog':
                            let data = {
                                ref: 'member',
                                title: this.para.functionName,
                                desc: para.dialogText === '' ? '无' : para.dialogText.slice(0,-2),
                                btnText: ['我知道了']
                            };

                            that.showSubModule('memberDialogRef', true, function () {
                                that.sm.memberDialogRef.startModule(data, function () {
                                    para.nStep = 'end';
                                    if (++dbFlag === 2) {
                                        that.showMemberDialog(successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
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

            btnRef_textClickEvent() {
                this.showMemberDialog(function () {
                }, function () {
                })
            }
        },
    };
</script>
<style lang="less" scoped>
    @import "../../../../../assets/var_kzt"; /*新增*/
    .memberItem_container {
        width:100%;
        height:100%;
    }
    .memberItem_mask {
        display:flex;
        position:fixed;
        left:0;
        top:0;
        width:100vw;
        height:100vh;
        background-color:rgba(0,0,0,.4);
        z-index: 100;
    }

    .memberItem_overlay {
        position:absolute;
        left:0;
        top:0;
    }
    .memberItem_row {
        display:flex;
    }
    .memberItem_col {
        position:relative;
        display:flex;
        flex-direction:column;
        flex-wrap:nowrap;
    }

    .memberItem_dialog {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .memberItem_col_approval_ticketItemWindow_size_medium {
        width:@memberItem-approval_ticketItemWindow-medium-width;
        padding:@memberItem-approval_ticketItemWindow-medium-padding;
    }
    .memberItem_col_approval_ticketItemWindow {
        border-style:@memberItem-approval_ticketItemWindow-border-style;
        border-width:@memberItem-approval_ticketItemWindow-border-width;
        border-color:mix(@memberItem-approval_ticketItemWindow-border-color,#fff,@memberItem-approval_ticketItemWindow-hover-border-color-opacity);
    }
    .memberItem_col_name_size_medium {
        width:@memberItem-name-medium-width;
    }
    .memberItem_col_btn_size_medium {
        width:@memberItem-btn-medium-width;
        align-items:@memberItem-btn-medium-horizontal-position;
    }
    .memberItem_col_price_size_medium {
        width:@memberItem-price-medium-width;
        align-items:@memberItem-price-medium-horizontal-position;
    }
    .memberItem_col_ticketDialog_size_medium {
        width:@memberItem-ticketDialog-medium-width;
        height:@memberItem-ticketDialog-medium-height;
    }
</style>