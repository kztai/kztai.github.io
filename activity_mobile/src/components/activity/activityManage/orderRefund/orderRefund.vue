<template>
    <div class="orderRefund_container">
        <div class="orderRefund_row orderRefund_row_confirmDialog" v-show="dialogWrap">
            <div :class="{orderRefund_col:true,orderRefund_col_confirmDialog:true,orderRefund_col_confirmDialog_size_large:attr.size==='large',orderRefund_col_confirmDialog_size_medium:attr.size==='medium',orderRefund_col_confirmDialog_size_small:attr.size==='small',orderRefund_col_confirmDialog_size_min:attr.size==='min',orderRefund_col_confirmDialog_checked:attr.checked,orderRefund_col_confirmDialog_disable:attr.disabled,orderRefund_dialog:true}">

                <confirm-dialog
                        ref="confirmDialogRef"
                        refId="confirmDialogRef"
                        v-if="pvt_isShow.confirmDialog === 'confirmDialogRef'"
                        :paraVarPair="pvt_confirmDialog.confirmDialogRef.paraVarPair"
                        :para="pvt_confirmDialog.confirmDialogRef.para"
                        :attr="pvt_confirmDialog.confirmDialogRef.attr">
                </confirm-dialog>
                <reject-dialog
                        ref="rejectDialogRef"
                        refId="rejectDialogRef"
                        v-if="pvt_isShow.confirmDialog === 'rejectDialogRef'"
                        :paraVarPair="pvt_confirmDialog.rejectDialogRef.paraVarPair"
                        :para="pvt_confirmDialog.rejectDialogRef.para"
                        :attr="pvt_confirmDialog.rejectDialogRef.attr">
                </reject-dialog>
            </div>
        </div>
        <div class="orderRefund_row orderRefund_row_orderRefundRow">
            <div :class="{orderRefund_col:true,orderRefund_col_orderRefundWindow:true,orderRefund_col_orderRefundWindow_size_large:attr.size==='large',orderRefund_col_orderRefundWindow_size_medium:attr.size==='medium',orderRefund_col_orderRefundWindow_size_small:attr.size==='small',orderRefund_col_orderRefundWindow_size_min:attr.size==='min',orderRefund_col_orderRefundWindow_checked:attr.checked,orderRefund_col_orderRefundWindow_disable:attr.disabled}">

                <div class="orderRefund_row orderRefund_row_row1">
                    <div :class="{orderRefund_col:true,orderRefund_col_header:true,orderRefund_col_header_size_large:attr.size==='large',orderRefund_col_header_size_medium:attr.size==='medium',orderRefund_col_header_size_small:attr.size==='small',orderRefund_col_header_size_min:attr.size==='min',orderRefund_col_header_checked:attr.checked,orderRefund_col_header_disable:attr.disabled}">

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
                <div class="scroll-wrap">
                    <div class="orderRefund_row orderRefund_row_row2">
                        <div :class="{orderRefund_col:true,orderRefund_col_alert:true,orderRefund_col_alert_size_large:attr.size==='large',orderRefund_col_alert_size_medium:attr.size==='medium',orderRefund_col_alert_size_small:attr.size==='small',orderRefund_col_alert_size_min:attr.size==='min',orderRefund_col_alert_checked:attr.checked,orderRefund_col_alert_disable:attr.disabled}">

                            <lm2b-alert
                                    ref="alertRef"
                                    refId="alertRef"
                                    v-show="pvt_isShow.alert === 'alertRef'"
                                    :paraVarPair="pvt_alert.alertRef.paraVarPair"
                                    :para="pvt_alert.alertRef.para"
                                    :attr="pvt_alert.alertRef.attr">
                            </lm2b-alert>
                        </div>
                    </div>
                    <div class="orderRefund_row orderRefund_row_row3">
                        <div :class="{orderRefund_col:true,orderRefund_col_refundItem:true,orderRefund_col_refundItem_size_large:attr.size==='large',orderRefund_col_refundItem_size_medium:attr.size==='medium',orderRefund_col_refundItem_size_small:attr.size==='small',orderRefund_col_refundItem_size_min:attr.size==='min',orderRefund_col_refundItem_checked:attr.checked,orderRefund_col_refundItem_disable:attr.disabled}">
                            <order-select-item
                                    ref="refundItemRef"
                                    refId="refundItemRef"
                                    v-show="pvt_isShow.refundItem === 'refundItemRef'"
                                    :paraVarPair="pvt_refundItem.refundItemRef.paraVarPair"
                                    v-for="(item, index) in pvt_refundItem.refundItemRef.forData"
                                    :number="index"
                                    :para="item.para"
                                    :attr="item.attr">
                            </order-select-item>
                        </div>
                    </div>
                    <div class="orderRefund_row orderRefund_row_row4" v-show="itemIsEmpty">
                        <div :class="{orderRefund_col:true,orderRefund_col_emptyWrap:true,orderRefund_col_emptyWrap_size_large:attr.size==='large',orderRefund_col_emptyWrap_size_medium:attr.size==='medium',orderRefund_col_emptyWrap_size_small:attr.size==='small',orderRefund_col_emptyWrap_size_min:attr.size==='min',orderRefund_col_emptyWrap_checked:attr.checked,orderRefund_col_emptyWrap_disable:attr.disabled}">

                            <div class="orderRefund_row orderRefund_row_row6">
                                <div :class="{orderRefund_col:true,orderRefund_col_emptyImg:true,orderRefund_col_emptyImg_size_large:attr.size==='large',orderRefund_col_emptyImg_size_medium:attr.size==='medium',orderRefund_col_emptyImg_size_small:attr.size==='small',orderRefund_col_emptyImg_size_min:attr.size==='min',orderRefund_col_emptyImg_checked:attr.checked,orderRefund_col_emptyImg_disable:attr.disabled}">

                                    <lm2b-image
                                            ref="emptyImgRef"
                                            refId="emptyImgRef"
                                            v-show="pvt_isShow.emptyImg === 'emptyImgRef'"
                                            :paraVarPair="pvt_emptyImg.emptyImgRef.paraVarPair"
                                            :para="pvt_emptyImg.emptyImgRef.para"
                                            :attr="pvt_emptyImg.emptyImgRef.attr">
                                    </lm2b-image>
                                </div>
                            </div>
                            <div class="orderRefund_row orderRefund_row_row7">
                                <div :class="{orderRefund_col:true,orderRefund_col_emptyText:true,orderRefund_col_emptyText_size_large:attr.size==='large',orderRefund_col_emptyText_size_medium:attr.size==='medium',orderRefund_col_emptyText_size_small:attr.size==='small',orderRefund_col_emptyText_size_min:attr.size==='min',orderRefund_col_emptyText_checked:attr.checked,orderRefund_col_emptyText_disable:attr.disabled}">

                                    <lm2b-link-text
                                            ref="emptyTextRef"
                                            refId="emptyTextRef"
                                            v-show="pvt_isShow.emptyText === 'emptyTextRef'"
                                            :paraVarPair="pvt_emptyText.emptyTextRef.paraVarPair"
                                            :para="pvt_emptyText.emptyTextRef.para"
                                            :attr="pvt_emptyText.emptyTextRef.attr">
                                    </lm2b-link-text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="orderRefund_row orderRefund_row_row5" v-show="!itemIsEmpty">
                    <div :class="{orderRefund_col:true,orderRefund_col_checkbox:true,orderRefund_col_checkbox_size_large:attr.size==='large',orderRefund_col_checkbox_size_medium:attr.size==='medium',orderRefund_col_checkbox_size_small:attr.size==='small',orderRefund_col_checkbox_size_min:attr.size==='min',orderRefund_col_checkbox_checked:attr.checked,orderRefund_col_checkbox_disable:attr.disabled}">

                        <lm2b-checkbox
                                ref="checkboxRef"
                                refId="checkboxRef"
                                v-show="pvt_isShow.checkbox === 'checkboxRef'"
                                :paraVarPair="pvt_checkbox.checkboxRef.paraVarPair"
                                :para="pvt_checkbox.checkboxRef.para"
                                :attr="pvt_checkbox.checkboxRef.attr">
                        </lm2b-checkbox>
                    </div>
                    <div :class="{orderRefund_col:true,orderRefund_col_totalText:true,orderRefund_col_totalText_size_large:attr.size==='large',orderRefund_col_totalText_size_medium:attr.size==='medium',orderRefund_col_totalText_size_small:attr.size==='small',orderRefund_col_totalText_size_min:attr.size==='min',orderRefund_col_totalText_checked:attr.checked,orderRefund_col_totalText_disable:attr.disabled}">

                        <div class="orderRefund_row orderRefund_row_row8">
                            <div :class="{orderRefund_col:true,orderRefund_col_refundNum:true,orderRefund_col_refundNum_size_large:attr.size==='large',orderRefund_col_refundNum_size_medium:attr.size==='medium',orderRefund_col_refundNum_size_small:attr.size==='small',orderRefund_col_refundNum_size_min:attr.size==='min',orderRefund_col_refundNum_checked:attr.checked,orderRefund_col_refundNum_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="refundNumRef"
                                        refId="refundNumRef"
                                        v-show="pvt_isShow.refundNum === 'refundNumRef'"
                                        :paraVarPair="pvt_refundNum.refundNumRef.paraVarPair"
                                        :para="pvt_refundNum.refundNumRef.para"
                                        :attr="pvt_refundNum.refundNumRef.attr">
                                </lm2b-link-text>
                            </div>
                            <div :class="{orderRefund_col:true,orderRefund_col_text:true,orderRefund_col_text_size_large:attr.size==='large',orderRefund_col_text_size_medium:attr.size==='medium',orderRefund_col_text_size_small:attr.size==='small',orderRefund_col_text_size_min:attr.size==='min',orderRefund_col_text_checked:attr.checked,orderRefund_col_text_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="textRef"
                                        refId="textRef"
                                        v-show="pvt_isShow.text === 'textRef'"
                                        :paraVarPair="pvt_text.textRef.paraVarPair"
                                        :para="pvt_text.textRef.para"
                                        :attr="pvt_text.textRef.attr">
                                </lm2b-link-text>
                            </div>
                            <div :class="{orderRefund_col:true,orderRefund_col_refundMoney:true,orderRefund_col_refundMoney_size_large:attr.size==='large',orderRefund_col_refundMoney_size_medium:attr.size==='medium',orderRefund_col_refundMoney_size_small:attr.size==='small',orderRefund_col_refundMoney_size_min:attr.size==='min',orderRefund_col_refundMoney_checked:attr.checked,orderRefund_col_refundMoney_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="refundMoneyRef"
                                        refId="refundMoneyRef"
                                        v-show="pvt_isShow.refundMoney === 'refundMoneyRef'"
                                        :paraVarPair="pvt_refundMoney.refundMoneyRef.paraVarPair"
                                        :para="pvt_refundMoney.refundMoneyRef.para"
                                        :attr="pvt_refundMoney.refundMoneyRef.attr">
                                </lm2b-link-text>
                            </div>
                            <div :class="{orderRefund_col:true,orderRefund_col_yuan:true,orderRefund_col_yuan_size_large:attr.size==='large',orderRefund_col_yuan_size_medium:attr.size==='medium',orderRefund_col_yuan_size_small:attr.size==='small',orderRefund_col_yuan_size_min:attr.size==='min',orderRefund_col_yuan_checked:attr.checked,orderRefund_col_yuan_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="yuanRef"
                                        refId="yuanRef"
                                        v-show="pvt_isShow.yuan === 'yuanRef'"
                                        :paraVarPair="pvt_yuan.yuanRef.paraVarPair"
                                        :para="pvt_yuan.yuanRef.para"
                                        :attr="pvt_yuan.yuanRef.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                    </div>
                    <div :class="{orderRefund_col:true,orderRefund_col_confirmBtn:true,orderRefund_col_confirmBtn_size_large:attr.size==='large',orderRefund_col_confirmBtn_size_medium:attr.size==='medium',orderRefund_col_confirmBtn_size_small:attr.size==='small',orderRefund_col_confirmBtn_size_min:attr.size==='min',orderRefund_col_confirmBtn_checked:attr.checked,orderRefund_col_confirmBtn_disable:attr.disabled}">

                        <lm2b-button
                                ref="confirmBtnRef"
                                refId="confirmBtnRef"
                                v-show="pvt_isShow.confirmBtn === 'confirmBtnRef'"
                                :paraVarPair="pvt_confirmBtn.confirmBtnRef.paraVarPair"
                                :para="pvt_confirmBtn.confirmBtnRef.para"
                                :attr="pvt_confirmBtn.confirmBtnRef.attr">
                        </lm2b-button>
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
    import orderSelectItem from '../orderApproval/orderSelectItem';
    import confirmDialog from '../confirmDialog';
    import rejectDialog from '../orderApproval/rejectDialog';

    export default {
        components: {manage_header, orderSelectItem, confirmDialog,rejectDialog},
        inject: ['sys'],
        props: ['refId', 'para', 'attr', 'number'],
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ['header', 'alert', 'refundItem', 'emptyImg', 'emptyText', 'checkbox', 'refundNum', 'refundMoney', 'text', 'yuan', 'confirmBtn', 'confirmDialog', 'confirmDialog'],
                    subModule: ['headerRef', 'alertRef', 'refundItemRef', 'emptyImgRef', 'emptyTextRef', 'checkboxRef', 'refundNumRef', 'refundMoneyRef', 'textRef', 'yuanRef', 'confirmBtnRef', 'confirmDialogRef', 'rejectDialogRef'],
                },
                pvt_isShow: {
                    header: null,
                    alert: null,
                    refundItem: null,
                    emptyImg: null,
                    emptyText: null,
                    checkbox: null,
                    refundNum: null,
                    refundMoney: null,
                    text: null,
                    yuan: null,
                    confirmBtn: null,
                    confirmDialog: null,
                },
                pvt_eventPortInput: ['backEvent', 'orderDetailEvent', 'refundPassEvent'],

                mac: mac.mac,

                curActivityId: null,
                curBillIdArr: [],
                itemSizeArr: [],
                allSelected: [],
                itemSelectedArr: [],
                selectedPriceArr: [],
                selectNum: 0,
                refundMoney: 0,
                itemIsEmpty: false,
                dialogWrap: false,
            };
        },
        watch: {},
        computed: {
            pvt_header: function () {
                return {
                    headerRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium',
                        },
                    },
                };
            },
            pvt_alert: function () {
                return {
                    alertRef: {
                        paraVarPair: {},
                        para: {
                            caution: ["退款审核需在72小时内进行处理，逾期将自动退款", '', 'van-icon-warning-o'],
                        },
                        attr: {
                            type: 'warning',
                            showIcon: true,
                            closable: false
                        },
                    },
                };
            },
            pvt_refundItem: function () {
                let loopModule = {
                    refundItemRef: {
                        para: {
                            curBillId: this.curBillIdArr,
                        },
                        attr: {
                            size: this.itemSizeArr,
                        },
                    },
                };
                let forData = this.pvt_createForData(loopModule);
                return {
                    refundItemRef: {
                        paraVarPair: {
                            curBillId: 'curBillIdArr',
                        },
                        forData: forData.refundItemRef,
                    },
                };
            },
            pvt_emptyImg: function () {
                return {
                    emptyImgRef: {
                        paraVarPair: {},
                        para: {
                            image: 'http://pic.51yuansu.com/pic3/cover/02/79/38/5a43641525cd6_610.jpg!/fw/260/quality/90/unsharp/true/compress/true',
                            // image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=1924128560,145776462&fm=26&gp=0.jpg',
                        },
                        attr: {},
                    },
                };
            },
            pvt_emptyText: function () {
                return {
                    emptyTextRef: {
                        paraVarPair: {},
                        para: {
                            textData: '没有退款申请',
                        },
                        attr: {
                            textAlign: 'center',
                            color: '#999',
                            fontSize: '12px',
                            background: '#f4f4f4'
                        },
                    },
                };
            },
            pvt_checkbox: function () {
                return {
                    checkboxRef: {
                        paraVarPair: {
                            checkData: 'allSelected',
                        },
                        para: {
                            checkData: this.allSelected,
                        },
                        attr: {
                            checkboxArr: [{label: 1, text: '全选'}],
                            size: 'mini',
                            define: ['van-icon-circle', 'van-icon-passed']
                        },
                    },
                };
            },
            pvt_refundNum: function () {
                return {
                    refundNumRef: {
                        paraVarPair: {
                            textData: 'refundNum',
                        },
                        para: {
                            textData: this.selectNum,
                        },
                        attr: {
                            fontWeight: true,
                            color: '#FC7122',
                            fontSize: '12px',
                        },
                    },
                };
            },
            pvt_refundMoney: function () {
                return {
                    refundMoneyRef: {
                        paraVarPair: {
                            textData: 'refundMoney',
                        },
                        para: {
                            textData: this.refundMoney,
                        },
                        attr: {
                            fontWeight: true,
                            color: '#FC7122',
                            fontSize: '12px',
                        },
                    },
                };
            },
            pvt_text: function () {
                return {
                    textRef: {
                        paraVarPair: {},
                        para: {
                            textData: '个退款，共',
                        },
                        attr: {
                            color: '#999',
                            fontSize: '12px',
                        },
                    },
                };
            },
            pvt_yuan: function () {
                return {
                    yuanRef: {
                        paraVarPair: {},
                        para: {
                            textData: '元',
                        },
                        attr: {
                            color: "#999",
                            fontSize: '12px',
                        },
                    },
                };
            },
            pvt_confirmBtn: function () {
                return {
                    confirmBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['同意退款', ''],
                        },
                        attr: {
                            type: 'primary',
                            long: true,
                            width: '100%',
                        },
                    },
                };
            },
            pvt_confirmDialog: function () {
                return {
                    confirmDialogRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium',
                        },
                    },
                    rejectDialogRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium'
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
            startModule:function(curActivityId,successCallBack,errorCallBack){
                let that = this;
                let fnname = 'orderRefund_start';
                let dbFlag;
                let dbData;
                let tableName;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0,
                    refArr: ['emptyImgRef', 'emptyTextRef', 'alertRef', 'checkboxRef', 'refundNumRef', 'refundMoneyRef', 'textRef', 'yuanRef', 'confirmBtnRef']
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
                        case 'getApprovalData':
                            that.curActivityId = curActivityId;
                            that.itemIsEmpty = false;
                            that.dialogWrap = false;
                            that.allSelected = [];
                            that.itemSelectedArr = [];
                            that.selectedPriceArr = [];
                            that.curBillIdArr = [];
                            that.selectNum = 0;
                            that.refundMoney = 0;

                            that.inputOrderData(0, function () {
                                let billCondition = that.mac.fd.groupActivityBill.status + '=' + that.mac.enum.groupActivityBill.status.refund;
                                that.getBillData(billCondition, function () {
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
                                if (that.itemIsEmpty) {
                                    para.nStep = 'headStart';
                                } else {
                                    para.refArr.shift();
                                    para.refArr.shift();
                                    para.refArr.push('refundItemRef');
                                    para.nStep = 'itemStart';
                                }
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
                        case 'itemStart':
                            if (para.i > that.sm.refundItemRef.length - 1) {
                                para.i = 0;
                                para.nStep = 'headStart';
                                dbFlag++;
                                break;
                            }

                            that.sm.refundItemRef[para.i].startModule(true, function () {
                                para.i++;
                                para.nStep = 'itemStart';
                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'headStart':
                            let headData = {
                                ref: 'applyManage',
                                title: '退款审核',
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
                            para.refArr.push('headerRef');
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
                let fnname = 'orderRefund_inputOrderData';
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
                let fnname = 'orderRefund_getBillData';
                let dbFlag;
                let dbData;
                let tableName;
                let expression;
                let record;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i:0,
                    curOrderIdArr: []
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
                            tableName = this.mac.tb.groupActivityBill;
                            expression = condition;
                            dbData = {};
                            dbData[that.mac.fd.id] = [];
                            this.sys.api.recordQuery(tableName, null, expression, dbData, function (result) {
                                if (dbData[that.mac.fd.id].length > 0) {
                                    for (let i = 0; i < dbData[that.mac.fd.id].length; i++) {
                                        that.curBillIdArr.push(dbData[that.mac.fd.id][i]);
                                        that.itemSizeArr.push('medium');
                                        that.itemSelectedArr.push(false);
                                    }
                                    para.nStep = 'getOrderId';
                                } else {
                                    that.itemIsEmpty = true;
                                    para.nStep = 'end';
                                }


                                if (++dbFlag === 2) {
                                    that.getBillData(condition, successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'getOrderId':
                            if (para.i > that.curBillIdArr.length - 1) {
                                para.i = 0;
                                para.nStep = 'getTicketId';
                                dbFlag++;
                                break;
                            }

                            tableName = this.mac.tb.groupActivityBill;
                            record = [that.curBillIdArr[para.i]];
                            that.sys.api.getParentRecord(tableName, record, function (result) {
                                para.curOrderIdArr.push(result[0]);
                                para.i++;
                                para.nStep = 'getOrderId';
                                if (++dbFlag === 2) {
                                    that.getBillData(condition, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'getTicketId':
                            if (para.i > para.curOrderIdArr.length - 1) {
                                para.i = 0;
                                para.nStep = 'end';
                                dbFlag++;
                                break;
                            }

                            tableName = this.mac.tb.groupActivityOrder;
                            dbData = {};
                            dbData[that.mac.fd.id] = [para.curOrderIdArr[para.i]];
                            dbData[that.mac.fd.groupActivityOrder.price] = [];

                            that.sys.api.recordRead(tableName, dbData, function () {
                                that.selectedPriceArr.push(dbData[that.mac.fd.groupActivityOrder.price][0]);
                                para.i++;
                                para.nStep = 'getTicketId';
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

            orderRefundRefresh: function (successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'orderRefund_orderRefundRefresh';
                let dbFlag;
                let dbData;
                let tableName;
                let record;
                let expression;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0,
                    selectBillIdArr: []
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
                            that.dialogWrap = false;

                            for (let i = that.itemSelectedArr.length - 1; i >= 0; i--) {
                                if (that.itemSelectedArr[i] === true) {
                                    para.selectBillIdArr.push(that.curBillIdArr[i]);
                                    that.curBillIdArr.splice(i, 1);
                                    that.itemSelectedArr.splice(i, 1);
                                    that.itemSizeArr.splice(i, 1);
                                    that.selectedPriceArr.splice(i, 1);
                                }
                            }

                            if (that.curBillIdArr.length === 0) {
                                that.itemIsEmpty = true;
                                para.nStep = 'showEmpty';
                            } else {
                                that.itemIsEmpty = false;
                                para.nStep = 'refreshItems';
                            }

                            that.forceUpdateData(function () {
                                if (++dbFlag === 2) {
                                    that.orderRefundRefresh(successCallBack, errorCallBack)
                                }
                            });
                            break;
                        case 'refreshItems':
                            if (para.i > that.sm.refundItemRef.length - 1) {
                                para.i = 0;
                                para.nStep = 'numRefresh';
                                dbFlag++;
                                break;
                            }

                            that.sm.refundItemRef[para.i].startModule(false, function () {
                                para.i++;
                                para.nStep = 'refreshItems';
                                if (++dbFlag === 2) {
                                    that.orderRefundRefresh(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showEmpty':
                            that.showSubModule(['emptyImgRef', 'emptyTextRef'], true, function () {
                                para.nStep = 'numRefresh';
                                if (++dbFlag === 2) {
                                    that.orderRefundRefresh(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'numRefresh':
                            this.selectNum = 0;
                            this.refundMoney = 0;
                            this.forceUpdateData(function () {
                                that.sm.refundNumRef.startModule(function () {
                                }, function () {
                                });
                                that.sm.refundMoneyRef.startModule(function () {
                                }, function () {
                                });
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.orderRefundRefresh(successCallBack, errorCallBack)
                                }
                            });
                            break;
                        case 'end':
                            para.successCallBack(para.selectBillIdArr);
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },

            modifyData(selectBillIdArr, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'orderRefund_modifyData';
                let dbFlag;
                let dbData;
                let tableName;
                let record;
                let expression;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0,
                    selectBillIdArr: []
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
                        case 'modifyData':
                            tableName = this.mac.tb.groupActivityBill;
                            dbData = {};
                            dbData[that.mac.fd.id] = selectBillIdArr;
                            dbData[this.mac.fd.groupActivityBill.status] = [];
                            for (let i = 0; i < selectBillIdArr.length; i++) {
                                dbData[this.mac.fd.groupActivityBill.status].push(this.mac.enum.groupActivityBill.status.refunding)
                            }

                            that.sys.api.recordModify(tableName, dbData, function () {
                                that.$notify({type: 'success', message: '系统退款中，退款金额将原路返回至参与者账号！'});

                                para.nStep = 'orderRefundOut';
                                if (++dbFlag === 2) {
                                    that.modifyData(selectBillIdArr, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'orderRefundOut':
                            tableName = this.mac.tb.groupActivityBill;
                            record = selectBillIdArr;
                            that.sys.api.getSourceRecord(tableName, record, function (result) {
                                // 向云端发事件，修改数据：
                                that.ep.refundPassEvent(result, function () {
                                }, function () {
                                });

                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.modifyData(selectBillIdArr, successCallBack, errorCallBack)
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

            changeAllSelected: function (select, curBillId) {
                let that = this;
                // 重置退款总额：
                this.refundMoney = 0;
                // 同步ItemSelectedArr中的数据：
                for (let i = 0; i < this.curBillIdArr.length; i++) {
                    if (curBillId === this.curBillIdArr[i]) {
                        select ? this.itemSelectedArr[i] = true : this.itemSelectedArr[i] = false;
                        break;
                    }
                }

                // 计算选中的总价：
                for (let i = 0; i < this.itemSelectedArr.length; i++) {
                    if (true === this.itemSelectedArr[i]) {
                        this.refundMoney += this.selectedPriceArr[i];
                    }
                }

                // 判断是否需要勾选全选按钮：
                if (select) {
                    this.selectNum++;

                    let isAll = true;
                    for (let i = 0; i < this.itemSelectedArr.length; i++) {
                        if (this.itemSelectedArr[i] === false) {
                            isAll = false;
                            break;
                        }
                    }
                    if (isAll) {
                        if (this.allSelected.length === 0) {
                            this.allSelected = [1];
                            this.$nextTick(function () {
                                this.sm.checkboxRef.startModule(function () {
                                }, function () {
                                });
                            });
                        }
                    } else {
                        if (this.allSelected.length === 1) {
                            this.allSelected = [];
                            this.$nextTick(function () {
                                this.sm.checkboxRef.startModule(function () {
                                }, function () {
                                });
                            });
                        }
                    }
                } else {
                    this.selectNum--;
                    if (this.allSelected.length === 1) {
                        this.allSelected.pop();
                        this.$nextTick(function () {
                            this.sm.checkboxRef.startModule(function () {
                            }, function () {
                            });
                        });
                    }
                }

                this.forceUpdateData(function () {
                    that.sm.refundNumRef.startModule(function () {
                    }, function () {
                    });
                    that.sm.refundMoneyRef.startModule(function () {
                    }, function () {
                    });
                });
            },

            selectAllApply: function () {
                let that = this;
                // 重置退款总额：
                this.refundMoney = 0;

                if (this.allSelected.length > 0) {
                    // 设置选取的数量：
                    this.selectNum = this.itemSelectedArr.length;
                    this.selectedPriceArr.forEach(function (value,index) {
                        that.refundMoney += value;
                    });

                    // 同步ItemSelectedArr中的值
                    for (let i = 0; i < this.itemSelectedArr.length; i++) {
                        this.itemSelectedArr[i] = true;
                    }
                    for (let i = 0; i < this.sm.refundItemRef.length; i++) {
                        this.sm.refundItemRef[i].selectApply(true);
                    }
                } else {
                    this.selectNum = 0;

                    for (let i = 0; i < this.itemSelectedArr.length; i++) {
                        this.itemSelectedArr[i] = false;
                    }
                    for (let i = 0; i < this.sm.refundItemRef.length; i++) {
                        this.sm.refundItemRef[i].selectApply(false);
                    }
                }

                this.forceUpdateData(function () {
                    that.sm.refundNumRef.startModule(function () {
                    }, function () {
                    });
                    that.sm.refundMoneyRef.startModule(function () {
                    }, function () {
                    });
                });
            },
         
            
            
            backClick: function () {
                this.ep.backEvent();
                this.hideSelfModule(this.refId, function () {
                }, function () {
                });
            },

            refundExplain: function (curBillId, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'orderRefund_refundExplain';
                let dbFlag;
                let dbData;
                let tableName;
                let expression;
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
                        case 'getCancelReason':
                            tableName = this.mac.tb.groupActivityBill;
                            dbData = {};
                            dbData[that.mac.fd.id] = [curBillId];
                            dbData[that.mac.fd.groupActivityBill.cancelReason] = [];
                            this.sys.api.recordRead(tableName, dbData, function (result) {
                                para.cancelReason = dbData[that.mac.fd.groupActivityBill.cancelReason][0];

                                para.nStep = 'confirmDialog';
                                if (++dbFlag === 2) {
                                    that.refundExplain(curBillId, successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'confirmDialog':
                            that.dialogWrap = true;
                            let data = {
                                title: '退款理由',
                                desc: para.cancelReason,
                                btnText: ['我知道了'],
                                ref: 'refundExplain'
                            };
                            that.showSubModule('confirmDialogRef', true, function () {
                                that.sm.confirmDialogRef.startModule(data, function () {
                                    para.nStep = 'end';
                                    if (++dbFlag === 2) {
                                        that.refundExplain(curBillId, successCallBack, errorCallBack)
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
            openConfirmDialog: function () {
                let that = this;

                let isSelect = false;
                for (let i = that.itemSelectedArr.length - 1; i >= 0; i--) {
                    if (that.itemSelectedArr[i] === true) {
                        isSelect = true;
                        break;
                    }
                }
                if (!isSelect) {
                    that.$notify({type: 'warning', message: '请选择一条记录进行操作！'});
                    return;
                }

                let data = {
                    ref: 'pass',
                    title: '',
                    desc: '确定同意退款申请吗？',
                    btnText: ['取消', '确定']
                };
                that.dialogWrap = true;
                that.showSubModule('confirmDialogRef', true, function () {
                    that.sm.confirmDialogRef.startModule(data, function () {
                    }, function () {
                    });
                }, function () {
                });
            },

            dialogConfirm: function(ref) {
                let that = this;
                this.dialogWrap = false;
                if(ref === 'pass') {
                   this.orderRefundRefresh(function (selectBillIdArr) {
                       that.modifyData(selectBillIdArr, function () {
                       }, function () {
                       })
                   }, function () {

                   })
                }
            },




            headerRef_backEvent: function () {
                this.backClick();
            },
            confirmBtnRef_buttonClickEvent: function () {
                this.openConfirmDialog();
            },
            confirmDialogRef_confirmEvent: function (ref) {
                this.dialogConfirm(ref);
            },
            refundItemRef_orderDetailEvent: function (curBillId, successCallBack, errorCallBack) {
                this.ep.orderDetailEvent(curBillId, successCallBack, errorCallBack);
            },
            refundItemRef_refundExplainEvent: function (curBillId, successCallBack, errorCallBack) {
                this.refundExplain(curBillId, successCallBack, errorCallBack);
            },
            refundItemRef_toggleApply: function (isSelect, curBillId) {
                this.changeAllSelected(isSelect, curBillId);
            },
            checkboxRef_dataModifyEvent: function () {
                this.selectAllApply();
            },
        },
    };
</script>
<style lang="less" scoped>
    @import "../../../../assets/var_kzt"; /*新增*/
    .orderRefund_container {
        width: 100%;
        height: 100%; /*新增*/
    }

    .orderRefund_row {
        display: flex;
        flex: 1;
    }

    .orderRefund_col {
        display: flex;
        flex-direction: column;
    }

    .orderRefund_row_orderRefundRow {
        width: 100%;
        height: 100%; /*新增*/
    }

    .orderRefund_col_orderRefundWindow_size_medium {
        width: @orderRefund-orderRefundWindow-medium-width;
        height: 100%;
        .scroll-wrap {
            width: 100%;
            height: 100%;
            margin-top: 42px;
            overflow: auto;  /*新增*/
        }
    }

    .orderRefund_col_header_size_medium {
        width: @orderRefund-header-medium-width;
    }

    .orderRefund_col_header {
        background-color: mix(@orderRefund-header-background-color, #fff, @orderRefund-header-background-color-opacity);
        position: fixed;
        top:0;
        left:0;
    }

    .orderRefund_col_alert_size_medium {
        width: @orderRefund-alert-medium-width;
    }

    .orderRefund_col_alert {
        background-color: mix(@orderRefund-alert-background-color, #fff, @orderRefund-alert-background-color-opacity);
    }

    .orderRefund_col_refundItem_size_medium {
        width: @orderRefund-refundItem-medium-width;
        margin: @orderRefund-refundItem-medium-margin;
    }

    .orderRefund_col_refundItem {
        background-color: mix(@orderRefund-refundItem-background-color, #fff, @orderRefund-refundItem-background-color-opacity);
    }

    .orderRefund_col_emptyWrap_size_medium {
        width: @orderRefund-emptyWrap-medium-width;
        padding: @orderRefund-emptyWrap-medium-padding;
        align-items: @orderRefund-emptyWrap-medium-horizontal-position;
        justify-content: @orderRefund-emptyWrap-medium-vertical-position;
    }

    .orderRefund_col_checkbox_size_medium {
        width: @orderRefund-checkbox-medium-width;
        align-items: @orderRefund-checkbox-medium-horizontal-position;
        justify-content: @orderRefund-checkbox-medium-vertical-position;
    }

    .orderRefund_col_checkbox {
        background-color: mix(@orderRefund-checkbox-background-color, #fff, @orderRefund-checkbox-background-color-opacity);
        border-color: mix(@orderRefund-checkbox-border-color, #fff, @orderRefund-checkbox-hover-border-color-opacity);
        border-style: @orderRefund-checkbox-border-style;
        border-width: @orderRefund-checkbox-border-width;
    }

    .orderRefund_col_totalText_size_medium {
        width: @orderRefund-totalText-medium-width;
        /*<!--align-items: @orderRefund-totalText-medium-horizontal-position;-->*/
        justify-content: @orderRefund-totalText-medium-vertical-position;
        padding: @orderRefund-totalText-medium-padding;
    }

    .orderRefund_col_totalText {
        background-color: mix(@orderRefund-totalText-background-color, #fff, @orderRefund-totalText-background-color-opacity);
        border-color: mix(@orderRefund-totalText-border-color, #fff, @orderRefund-totalText-hover-border-color-opacity);
        border-width: @orderRefund-totalText-border-width;
        border-style: @orderRefund-totalText-border-style;
    }

    .orderRefund_col_confirmBtn_size_medium {
        width: @orderRefund-confirmBtn-medium-width;
        height: @orderRefund-confirmBtn-medium-height;
    }

    .orderRefund_col_confirmBtn {
        background-color: mix(@orderRefund-confirmBtn-background-color, #fff, @orderRefund-confirmBtn-background-color-opacity);
        border-color: mix(@orderRefund-confirmBtn-border-color, #fff, @orderRefund-confirmBtn-hover-border-color-opacity);
        border-width: @orderRefund-confirmBtn-border-width;
        border-style: @orderRefund-confirmBtn-border-style;
    }

    .orderRefund_col_emptyImg_size_medium {
        width: @orderRefund-emptyImg-medium-width;
        height: @orderRefund-emptyImg-medium-height;
        margin: @orderRefund-emptyImg-medium-margin;
        align-items: @orderRefund-emptyImg-medium-horizontal-position;
        justify-content: @orderRefund-emptyImg-medium-vertical-position;
        overflow: hidden;
    }

    .orderRefund_col_emptyImg {
        border-radius: @orderRefund-emptyImg-border-radius;
    }

    .orderRefund_col_emptyText_size_medium {
        width: @orderRefund-emptyText-medium-width;
        align-items: @orderRefund-emptyText-medium-horizontal-position;
        justify-content: @orderRefund-emptyText-medium-vertical-position;
    }

    .orderRefund_col_refundNum_size_medium {
        width: @orderRefund-refundNum-medium-width;
        align-items: @orderRefund-refundNum-medium-horizontal-position;
        justify-content: @orderRefund-refundNum-medium-vertical-position;
    }

    .orderRefund_col_text_size_medium {
        width: @orderRefund-text-medium-width;
        align-items: @orderRefund-text-medium-horizontal-position;
        justify-content: @orderRefund-text-medium-vertical-position;
    }

    .orderRefund_col_refundMoney_size_medium {
        width: @orderRefund-refundMoney-medium-width;
        align-items: @orderRefund-refundMoney-medium-horizontal-position;
        justify-content: @orderRefund-refundMoney-medium-vertical-position;
    }

    .orderRefund_col_yuan_size_medium {
        width: @orderRefund-yuan-medium-width;
        align-items: @orderRefund-yuan-medium-horizontal-position;
        justify-content: @orderRefund-yuan-medium-vertical-position;
    }

    .orderRefund_col_confirmDialog_size_medium {
        width: @orderRefund-confirmDialog-medium-width;
        height: @orderRefund-confirmDialog-medium-height;
    }

    .orderRefund_dialog {
        position: fixed;
        left:50%;
        top:50%;  /*新增*/
        transform: translate(-50%, -50%);
    }
    .orderRefund_row_confirmDialog {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0,0,0,0.5);
        z-index: 12;
    }
</style>