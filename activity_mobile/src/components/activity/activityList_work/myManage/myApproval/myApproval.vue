<template>
    <div class="myApproval_container">
        <div class="myApproval_row myApproval_row_myApprovalRow">
            <div :class="{myApproval_col:true,myApproval_col_myApprovalWindow:true,myApproval_col_myApprovalWindow_size_large:attr.size==='large',myApproval_col_myApprovalWindow_size_medium:attr.size==='medium',myApproval_col_myApprovalWindow_size_small:attr.size==='small',myApproval_col_myApprovalWindow_size_min:attr.size==='min',myApproval_col_myApprovalWindow_checked:attr.checked,myApproval_col_myApprovalWindow_disable:attr.disabled}">

                <div class="myApproval_row myApproval_row_row1">
                    <div :class="{myApproval_col:true,myApproval_col_input:true,myApproval_col_input_size_large:attr.size==='large',myApproval_col_input_size_medium:attr.size==='medium',myApproval_col_input_size_small:attr.size==='small',myApproval_col_input_size_min:attr.size==='min',myApproval_col_input_checked:attr.checked,myApproval_col_input_disable:attr.disabled}">

                        <lm2b-input-text
                                ref="inputRef"
                                refId="inputRef"
                                v-show="pvt_isShow.input === 'inputRef'"
                                :paraVarPair="pvt_input.inputRef.paraVarPair"
                                :para="pvt_input.inputRef.para"
                                :attr="pvt_input.inputRef.attr">
                        </lm2b-input-text>
                    </div>
                    <div :class="{myApproval_col:true,myApproval_col_selectBtn:true,myApproval_col_selectBtn_size_large:attr.size==='large',myApproval_col_selectBtn_size_medium:attr.size==='medium',myApproval_col_selectBtn_size_small:attr.size==='small',myApproval_col_selectBtn_size_min:attr.size==='min',myApproval_col_selectBtn_checked:attr.checked,myApproval_col_selectBtn_disable:attr.disabled}">

                        <div class="myApproval_row myApproval_row_row3">
                            <div :class="{myApproval_col:true,myApproval_col_btn:true,myApproval_col_btn_size_large:attr.size==='large',myApproval_col_btn_size_medium:attr.size==='medium',myApproval_col_btn_size_small:attr.size==='small',myApproval_col_btn_size_min:attr.size==='min',myApproval_col_btn_checked:attr.checked,myApproval_col_btn_disable:attr.disabled}">

                                <lm2b-button
                                        ref="btnRef"
                                        refId="btnRef"
                                        v-show="pvt_isShow.btn === 'btnRef'"
                                        :paraVarPair="pvt_btn.btnRef.paraVarPair"
                                        :para="pvt_btn.btnRef.para"
                                        :attr="pvt_btn.btnRef.attr">
                                </lm2b-button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="myApproval_row myApproval_row_row2">
                    <div :class="{myApproval_col:true,myApproval_col_activityList:true,myApproval_col_activityList_size_large:attr.size==='large',myApproval_col_activityList_size_medium:attr.size==='medium',myApproval_col_activityList_size_small:attr.size==='small',myApproval_col_activityList_size_min:attr.size==='min',myApproval_col_activityList_checked:attr.checked,myApproval_col_activityList_disable:attr.disabled}">
                        <approvalItem
                                ref="approvalItemRef"
                                refId="approvalItemRef"
                                v-show="pvt_isShow.activityList === 'approvalItemRef'"
                                :paraVarPair="pvt_activityList.approvalItemRef.paraVarPair"
                                v-for="(item, index) in pvt_activityList.approvalItemRef.forData"
                                :number="index"
                                :para="item.para"
                                :attr="item.attr">
                        </approvalItem>
                    </div>
                </div>
                <div class="myApproval_row myApproval_row_row4" v-show="itemIsEmpty">
                    <div :class="{myApproval_col:true,myApproval_col_empty:true,myApproval_col_empty_size_large:attr.size==='large',myApproval_col_empty_size_medium:attr.size==='medium',myApproval_col_empty_size_small:attr.size==='small',myApproval_col_empty_size_min:attr.size==='min',myApproval_col_empty_checked:attr.checked,myApproval_col_empty_disable:attr.disabled}">

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
        <div class="myApproval_row myApproval_row_selectDialog" v-show="dialogWrap" @click.self="closeDialog">  <!--新增-->
            <div :class="{myApproval_col:true,myApproval_col_selectDialog:true,myApproval_col_selectDialog_size_large:attr.size==='large',myApproval_col_selectDialog_size_medium:attr.size==='medium',myApproval_col_selectDialog_size_small:attr.size==='small',myApproval_col_selectDialog_size_min:attr.size==='min',myApproval_col_selectDialog_checked:attr.checked,myApproval_col_selectDialog_disable:attr.disabled,myApproval_dialog:true}">
                <select-dialog
                        ref="selectDialogRef"
                        refId="selectDialogRef"
                        v-if="pvt_isShow.selectDialog === 'selectDialogRef'"
                        :paraVarPair="pvt_selectDialog.selectDialogRef.paraVarPair"
                        :para="pvt_selectDialog.selectDialogRef.para"
                        :attr="pvt_selectDialog.selectDialogRef.attr">
                </select-dialog>
            </div>
        </div>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';

    import approvalItem from './approvalItem';
    import selectDialog from './selectDialog_approval';
    import empty from '../../../activityManage/checkTicket/empty';

    export default {
        components: {approvalItem, selectDialog, empty},
        inject: ['sys'],
        props: ['refId', 'para', 'attr', 'number'],
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ['input', 'btn', 'activityList', 'selectDialog', 'empty'],
                    subModule: ['inputRef', 'btnRef', 'approvalItemRef', 'selectDialogRef', 'emptyRef'],
                },
                pvt_isShow: {
                    input: null,
                    btn: null,
                    activityList: null,
                    selectDialog: null,
                    empty: null,
                },
                pvt_eventPortInput: ['activityApprovalEvent', 'activityClickEvent'],

                mac:mac.mac,
                myType: 1,
                mySite: '',
                myID: 1,

                curActivityIdArr: [1, 2],
                sizeArr: ['medium', 'medium'],
                dialogWrap: false,
                itemIsEmpty: false,
                inputContent: '',
                curStatus: '全部',
            };
        },
        watch: {},
        computed: {
            pvt_input: function () {
                return {
                    inputRef: {
                        paraVarPair: {},
                        para: {
                            text: '',
                        },
                        attr: {
                            placeholder: '请输入活动名称',
                            prefixIcon: 'van-icon-search',
                            isPlaceholder: false,
                            size: 'min'
                        },
                    },
                };
            },
            pvt_btn: function () {
                return {
                    btnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['筛选', 'van-icon-filter-o'],
                        },
                        attr: {
                            type: 'text',
                            iconIsRight: true,
                            height: '20px',
                            size: 'min'
                        },
                    },
                };
            },
            pvt_activityList: function () {
                let loopModule = {
                    approvalItemRef: {
                        para: {
                            curActivityId: this.curActivityIdArr,
                        },
                        attr: {
                            size: this.sizeArr,
                        },
                    },
                };
                let forData = this.pvt_createForData(loopModule);
                return {
                    approvalItemRef: {
                        paraVarPair: {
                        },
                        forData: forData.approvalItemRef,
                    },
                };
            },
            pvt_selectDialog: function () {
                return {
                    selectDialogRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium',
                        },
                    },
                };
            },
            pvt_empty: function () {
                return {
                    emptyRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium',
                        },
                    },
                };
            },
        },
        created: function () {
            Object.assign(this, libSys, libUpload);
        },
        mounted: function () {
            this.pvt_initSysData();
        },
        methods: {
            startModule: function (successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'myApproval_start';
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
                    refArr: ['inputRef', 'btnRef']
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
                            that.mySite = that.getCookie('userSite');
                            that.myId = that.getCookie('userID');
                            that.myType = that.getCookie('userType');

                            that.itemIsEmpty = false;
                            that.inputContent = '';
                            that.curActivityIdArr = [];
                            that.sizeArr = [];

                            condition = that.mac.fd.groupActivity.status + '=' + that.mac.enum.groupActivity.status.check + '||' + that.mac.fd.groupActivity.status + '=' + that.mac.enum.groupActivity.status.rejected + '||' + that.mac.fd.groupActivity.status + '=' + that.mac.enum.groupActivity.status.released + '||' + that.mac.fd.groupActivity.status + '=' + that.mac.enum.groupActivity.status.closed;

                            that.inputActivityData(0, condition, function () {
                                that.forceUpdateData(function () {
                                    para.nStep = 'start_sub';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                });
                            }, function () {
                            });
                            break;
                        case 'start_sub':
                            if (para.i >= para.refArr.length) {
                                para.i = 0;
                                para.nStep = 'start_empty';
                                dbFlag++;
                                break;
                            }
                            that.sm[para.refArr[para.i]].startModule(function () {
                                para.i++;
                                para.nStep = 'start_sub';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_empty':
                            that.sm.emptyRef.startModule('暂无数据',function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            para.refArr.push('approvalItemRef', 'emptyRef');
                            that.showSubModule(para.refArr, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
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

            inputActivityData: function (startNum, condition, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'myApproval_inputActivityData';
                let dbFlag;
                let dbData;
                let tableName;
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
                    i: 0
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
                            that.curActivityIdArr = [];

                            start = startNum;
                            total = 100;
                            sort = ['id,asc'];
                            destGeneSite = '';
                            portName = this.mac.tb.groupActivity;
                            inputData = {
                                [this.mac.tb.groupActivity]: '',
                                [this.mac.tb.groupActivityTicketType]: '',
                                [this.mac.tb.groupActivityBudgetForm]: '',
                            };
                            this.sys.api.conditiondataInput(portName, inputData, condition, start, total, sort, destGeneSite, function (result) {
                                if(result) {
                                    for(let i = 0; i < result.length; i++) {
                                        that.curActivityIdArr.push(result[i]);
                                        that.sizeArr.push('medium');
                                        // that.curActivityIdArr.push(result[i]);
                                        // that.sizeArr.push('medium');
                                    }
                                    that.itemIsEmpty = false;
                                    para.nStep = 'refreshItems';
                                } else {
                                    that.itemIsEmpty = true;
                                    para.nStep = 'end';
                                }

                                that.forceUpdateData(function () {
                                    if (++dbFlag === 2) {
                                        that.inputActivityData(startNum, condition, successCallBack, errorCallBack)
                                    }
                                });
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'refreshItems':
                            if (para.i > that.sm.approvalItemRef.length - 1) {
                                para.i = 0;
                                para.nStep = 'end';
                                dbFlag++;
                                break;
                            }

                            that.sm.approvalItemRef[para.i].startModule(function () {
                                para.i++;
                                para.nStep = 'refreshItems';
                                if (++dbFlag === 2) {
                                    that.inputActivityData(startNum, condition, successCallBack, errorCallBack)
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

            selectInputChange: function (value) {
                this.inputContent = value;
                this.listRefresh(this.curStatus)
            },
            showDialog: function () {
                let that = this;
                that.dialogWrap = true;
                that.showSubModule('selectDialogRef', true, function () {
                    that.sm.selectDialogRef.startModule(that.curStatus, function () {
                    }, function () {
                    });
                }, function () {
                });
            },
            listRefresh: function (curStatus) {
                let that = this;
                let condition = '';
                this.closeDialog();

                that.curMemberIdArr = [];
                that.curActivityIdArr = [];
                that.sizeArr = [];
                that.itemIsEmpty = false;
                that.curStatus = curStatus;

                switch (that.curStatus) {
                    case '全部':
                        condition = that.mac.fd.groupActivity.status + '=' + that.mac.enum.groupActivity.status.check + '||' + that.mac.fd.groupActivity.status + '=' + that.mac.enum.groupActivity.status.rejected + '||' + that.mac.fd.groupActivity.status + '=' + that.mac.enum.groupActivity.status.released + '||' + that.mac.fd.groupActivity.status + '=' + that.mac.enum.groupActivity.status.closed;
                        break;
                    case '待审批':
                        condition = that.mac.fd.groupActivity.status + '=' + that.mac.enum.groupActivity.status.check;
                        break;
                    case '审批通过':
                        condition = that.mac.fd.groupActivity.status + '=' + that.mac.enum.groupActivity.status.released + '||' + that.mac.fd.groupActivity.status + '=' + that.mac.enum.groupActivity.status.closed;
                        break;
                    case '审批拒绝':
                        condition = that.mac.fd.groupActivity.status + '=' + that.mac.enum.groupActivity.status.rejected;
                        break;
                }

                if(this.inputContent) condition = '(' + condition + ')&&' + that.mac.fd.groupActivity.name + '="' + this.inputContent + '"';

                that.inputActivityData(0, condition, function () {
                }, function () {
                });
            },
            approvalRefresh(terActivityId, rejectReason) {
                let that = this;
                this.ep.activityApprovalEvent(terActivityId, rejectReason, function () {
                    that.listRefresh(that.curStatus);
                }, function () {
                });
            },

            closeDialog: function () {
                this.dialogWrap = false;
                this.showSubModule('selectDialogRef', false, function () {
                }, function () {
                });
            },

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
            getTime: function(time) {
                var day = time.getDate();   // 得到这是这个月的第几天
                var year = time.getFullYear();   //得到这是第几年
                var month = time.getMonth() + 1;  // getMonth()获得的是0-11，所以要+1
                var hour = time.getHours();
                var minute = time.getMinutes();
                var second = time.getSeconds();

                return year + "-" + zero(month) + "-" + zero(day) + " "
                    + zero(hour) + ":" + zero(minute);

                function zero(value) {
                    return value < 10 ? "0" + value : value;
                }
            },



            inputRef_inputEnterEvent: function (value) {
                this.selectInputChange(value);
            },
            btnRef_buttonClickEvent: function () {
                this.showDialog();
            },
            approvalItemRef_activityApprovalEvent: function (terActivityId, rejectReason) {
                this.approvalRefresh(terActivityId, rejectReason);
            },
            approvalItemRef_activityClickEvent: function (terActivityId, clerkType) {
                this.ep.activityClickEvent(terActivityId, clerkType);
            },
            selectDialogRef_confirmEvent(curStatus) {
                this.listRefresh(curStatus);
            },
        },
    };
</script>
<style lang="less" scoped>
    @import "../../../../../assets/var_kzt"; /*新增*/
    .myApproval_container {
    }

    .myApproval_row {
        display: flex;
        flex: 1;
    }

    .myApproval_col {
        display: flex;
        flex-direction: column;
    }

    .myApproval_col_myApprovalWindow_size_medium {
        width: @myRelease-myReleaseWindow-medium-width;
    }

    .myApproval_col_myApprovalWindow {
        background-color: mix(@myRelease-myReleaseWindow-background-color, #fff, @myRelease-myReleaseWindow-background-color-opacity);
    }

    .myApproval_col_input_size_medium {
        width: @myRelease-input-medium-width;
        margin: @myRelease-input-medium-margin;
    }

    .myApproval_col_input {
        border-style: @myRelease-input-border-style;
        border-width: @myRelease-input-border-width;
        border-color: mix(@myRelease-input-border-color, #fff, @myRelease-input-hover-border-color-opacity);
        background-color: mix(@myRelease-input-background-color, #fff, @myRelease-input-background-color-opacity);
    }

    .myApproval_col_selectBtn_size_medium {
        width: @myRelease-selectBtn-medium-width;
        padding: @myRelease-selectBtn-medium-padding;
        margin: @myRelease-input-medium-margin;
    }

    .myApproval_col_selectBtn {
        border-style: @myRelease-selectBtn-border-style;
        border-width: @myRelease-selectBtn-border-width;
        border-color: mix(@myRelease-selectBtn-border-color, #fff, @myRelease-selectBtn-hover-border-color-opacity);
        background-color: mix(@myRelease-selectBtn-background-color, #fff, @myRelease-selectBtn-background-color-opacity);
    }

    .myApproval_col_activityList_size_medium {
        width: @myRelease-activityList-medium-width;
    }

    .myApproval_col_activityList {
        /*  background-color: mix(@myRelease-activityList-background-color, #fff, @myRelease-activityList-background-color-opacity);*/
        overflow: hidden;
    }

    .myApproval_col_btn_size_medium {
        width: @myRelease-btn-medium-width;
        align-items: @myRelease-btn-medium-horizontal-position;
        justify-content: @myRelease-btn-medium-vertical-position;
    }

    .myApproval_col_btn {
        border-style: @myRelease-btn-border-style;
        border-width: @myRelease-btn-border-width;
        border-color: mix(@myRelease-btn-border-color, #fff, @myRelease-btn-hover-border-color-opacity);
    }

    .myApproval_col_selectDialog_size_medium {
        width: @myRelease-selectDialog-medium-width;
        height: @myRelease-selectDialog-medium-height;
    }

    .myApproval_col_empty_size_medium {
        width: @myRelease-empty-medium-width;
        align-items: @myRelease-empty-medium-horizontal-position;
        margin: @myRelease-empty-medium-margin;
    }

    .myApproval_row_selectDialog {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 12;
    }

    .myApproval_dialog {
        position: fixed;
        top: 0;
        right: 0;
        overflow: auto;
        background-color: #f4f4f4;
    }
</style>