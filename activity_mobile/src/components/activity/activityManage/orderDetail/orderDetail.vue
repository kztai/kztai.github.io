<template>
    <div class="orderDetail_container">
        <div class="orderDetail_row orderDetail_row_confirmDialog" v-show="dialogWrap">
            <div :class="{orderDetail_col:true,orderDetail_col_confirmDialog:true,orderDetail_col_confirmDialog_size_large:attr.size==='large',orderDetail_col_confirmDialog_size_medium:attr.size==='medium',orderDetail_col_confirmDialog_size_small:attr.size==='small',orderDetail_col_confirmDialog_size_min:attr.size==='min',orderDetail_col_confirmDialog_checked:attr.checked,orderDetail_col_confirmDialog_disable:attr.disabled,orderDetail_dialog:true}">

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
        <div class="orderDetail_row orderDetail_row_orderDetailRow">
            <div :class="{orderDetail_col:true,orderDetail_col_orderDetailWindow:true,orderDetail_col_orderDetailWindow_size_large:attr.size==='large',orderDetail_col_orderDetailWindow_size_medium:attr.size==='medium',orderDetail_col_orderDetailWindow_size_small:attr.size==='small',orderDetail_col_orderDetailWindow_size_min:attr.size==='min',orderDetail_col_orderDetailWindow_checked:attr.checked,orderDetail_col_orderDetailWindow_disable:attr.disabled}">

                <div class="orderDetail_row orderDetail_row_row1">
                    <div :class="{orderDetail_col:true,orderDetail_col_detailHeader:true,orderDetail_col_detailHeader_size_large:attr.size==='large',orderDetail_col_detailHeader_size_medium:attr.size==='medium',orderDetail_col_detailHeader_size_small:attr.size==='small',orderDetail_col_detailHeader_size_min:attr.size==='min',orderDetail_col_detailHeader_checked:attr.checked,orderDetail_col_detailHeader_disable:attr.disabled}">

                        <manage_header
                                ref="headerRef"
                                refId="headerRef"
                                v-show="pvt_isShow.detailHeader === 'headerRef'"
                                :paraVarPair="pvt_detailHeader.headerRef.paraVarPair"
                                :para="pvt_detailHeader.headerRef.para"
                                :attr="pvt_detailHeader.headerRef.attr">
                        </manage_header>
                    </div>
                </div>
                <div class="orderDetail_row orderDetail_row_row13">
                    <div :class="{orderDetail_col:true,orderDetail_col_alert:true,orderDetail_col_alert_size_large:attr.size==='large',orderDetail_col_alert_size_medium:attr.size==='medium',orderDetail_col_alert_size_small:attr.size==='small',orderDetail_col_alert_size_min:attr.size==='min',orderDetail_col_alert_checked:attr.checked,orderDetail_col_alert_disable:attr.disabled}">

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
                <div class="orderDetail_row orderDetail_row_row2">
                    <div :class="{orderDetail_col:true,orderDetail_col_ticketDetail:true,orderDetail_col_ticketDetail_size_large:attr.size==='large',orderDetail_col_ticketDetail_size_medium:attr.size==='medium',orderDetail_col_ticketDetail_size_small:attr.size==='small',orderDetail_col_ticketDetail_size_min:attr.size==='min',orderDetail_col_ticketDetail_checked:attr.checked,orderDetail_col_ticketDetail_disable:attr.disabled}">

                        <div class="orderDetail_row orderDetail_row_row3">
                            <div :class="{orderDetail_col:true,orderDetail_col_ticketName:true,orderDetail_col_ticketName_size_large:attr.size==='large',orderDetail_col_ticketName_size_medium:attr.size==='medium',orderDetail_col_ticketName_size_small:attr.size==='small',orderDetail_col_ticketName_size_min:attr.size==='min',orderDetail_col_ticketName_checked:attr.checked,orderDetail_col_ticketName_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="ticketNameRef"
                                        refId="ticketNameRef"
                                        v-show="pvt_isShow.ticketName === 'ticketNameRef'"
                                        :paraVarPair="pvt_ticketName.ticketNameRef.paraVarPair"
                                        :para="pvt_ticketName.ticketNameRef.para"
                                        :attr="pvt_ticketName.ticketNameRef.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                        <div class="orderDetail_row orderDetail_row_row4">
                            <div :class="{orderDetail_col:true,orderDetail_col_ticketPrice:true,orderDetail_col_ticketPrice_size_large:attr.size==='large',orderDetail_col_ticketPrice_size_medium:attr.size==='medium',orderDetail_col_ticketPrice_size_small:attr.size==='small',orderDetail_col_ticketPrice_size_min:attr.size==='min',orderDetail_col_ticketPrice_checked:attr.checked,orderDetail_col_ticketPrice_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="ticketPriceRef"
                                        refId="ticketPriceRef"
                                        v-show="pvt_isShow.ticketPrice === 'ticketPriceRef'"
                                        :paraVarPair="pvt_ticketPrice.ticketPriceRef.paraVarPair"
                                        :para="pvt_ticketPrice.ticketPriceRef.para"
                                        :attr="pvt_ticketPrice.ticketPriceRef.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                        <div class="orderDetail_row orderDetail_row_row5">
                            <div :class="{orderDetail_col:true,orderDetail_col_billStatus:true,orderDetail_col_billStatus_size_large:attr.size==='large',orderDetail_col_billStatus_size_medium:attr.size==='medium',orderDetail_col_billStatus_size_small:attr.size==='small',orderDetail_col_billStatus_size_min:attr.size==='min',orderDetail_col_billStatus_checked:attr.checked,orderDetail_col_billStatus_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="billStatusRef"
                                        refId="billStatusRef"
                                        v-show="pvt_isShow.billStatus === 'billStatusRef'"
                                        :paraVarPair="pvt_billStatus.billStatusRef.paraVarPair"
                                        :para="pvt_billStatus.billStatusRef.para"
                                        :attr="pvt_billStatus.billStatusRef.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="orderDetail_row orderDetail_row_row6">
                    <div :class="{orderDetail_col:true,orderDetail_col_userInfo:true,orderDetail_col_userInfo_size_large:attr.size==='large',orderDetail_col_userInfo_size_medium:attr.size==='medium',orderDetail_col_userInfo_size_small:attr.size==='small',orderDetail_col_userInfo_size_min:attr.size==='min',orderDetail_col_userInfo_checked:attr.checked,orderDetail_col_userInfo_disable:attr.disabled}">
                        <info-item
                                ref="infoItemRef"
                                refId="infoItemRef"
                                v-show="pvt_isShow.userInfo === 'infoItemRef'"
                                :paraVarPair="pvt_userInfo.infoItemRef.paraVarPair"
                                v-for="(item, index) in pvt_userInfo.infoItemRef.forData"
                                :number="index"
                                :para="item.para"
                                :attr="item.attr">
                        </info-item>
                    </div>
                </div>
                <div class="orderDetail_row orderDetail_row_row7">
                    <div :class="{orderDetail_col:true,orderDetail_col_foldBtn:true,orderDetail_col_foldBtn_size_large:attr.size==='large',orderDetail_col_foldBtn_size_medium:attr.size==='medium',orderDetail_col_foldBtn_size_small:attr.size==='small',orderDetail_col_foldBtn_size_min:attr.size==='min',orderDetail_col_foldBtn_checked:attr.checked,orderDetail_col_foldBtn_disable:attr.disabled}">

                        <lm2b-button
                                ref="foldBtnRef"
                                refId="foldBtnRef"
                                v-show="pvt_isShow.foldBtn === 'foldBtnRef'"
                                :paraVarPair="pvt_foldBtn.foldBtnRef.paraVarPair"
                                :para="pvt_foldBtn.foldBtnRef.para"
                                :attr="pvt_foldBtn.foldBtnRef.attr">
                        </lm2b-button>
                    </div>
                </div>
                <div class="orderDetail_row orderDetail_row_row8">
                    <div :class="{orderDetail_col:true,orderDetail_col_phone:true,orderDetail_col_phone_size_large:attr.size==='large',orderDetail_col_phone_size_medium:attr.size==='medium',orderDetail_col_phone_size_small:attr.size==='small',orderDetail_col_phone_size_min:attr.size==='min',orderDetail_col_phone_checked:attr.checked,orderDetail_col_phone_disable:attr.disabled}">

                        <lm2b-button
                                ref="phoneRef"
                                refId="phoneRef"
                                v-show="pvt_isShow.phone === 'phoneRef'"
                                :paraVarPair="pvt_phone.phoneRef.paraVarPair"
                                :para="pvt_phone.phoneRef.para"
                                :attr="pvt_phone.phoneRef.attr">
                        </lm2b-button>
                    </div>
                    <div :class="{orderDetail_col:true,orderDetail_col_note:true,orderDetail_col_note_size_large:attr.size==='large',orderDetail_col_note_size_medium:attr.size==='medium',orderDetail_col_note_size_small:attr.size==='small',orderDetail_col_note_size_min:attr.size==='min',orderDetail_col_note_checked:attr.checked,orderDetail_col_note_disable:attr.disabled}">

                        <lm2b-button
                                ref="noteRef"
                                refId="noteRef"
                                v-show="pvt_isShow.note === 'noteRef'"
                                :paraVarPair="pvt_note.noteRef.paraVarPair"
                                :para="pvt_note.noteRef.para"
                                :attr="pvt_note.noteRef.attr">
                        </lm2b-button>
                    </div>
                    <div :class="{orderDetail_col:true,orderDetail_col_message:true,orderDetail_col_message_size_large:attr.size==='large',orderDetail_col_message_size_medium:attr.size==='medium',orderDetail_col_message_size_small:attr.size==='small',orderDetail_col_message_size_min:attr.size==='min',orderDetail_col_message_checked:attr.checked,orderDetail_col_message_disable:attr.disabled}">

                        <lm2b-button
                                ref="msgRef"
                                refId="msgRef"
                                v-show="pvt_isShow.message === 'msgRef'"
                                :paraVarPair="pvt_message.msgRef.paraVarPair"
                                :para="pvt_message.msgRef.para"
                                :attr="pvt_message.msgRef.attr">
                        </lm2b-button>
                    </div>
                </div>
                <div class="orderDetail_row orderDetail_row_row9">
                    <div :class="{orderDetail_col:true,orderDetail_col_orderInfo:true,orderDetail_col_orderInfo_size_large:attr.size==='large',orderDetail_col_orderInfo_size_medium:attr.size==='medium',orderDetail_col_orderInfo_size_small:attr.size==='small',orderDetail_col_orderInfo_size_min:attr.size==='min',orderDetail_col_orderInfo_checked:attr.checked,orderDetail_col_orderInfo_disable:attr.disabled}">

                        <div class="orderDetail_row orderDetail_row_row10">
                            <div :class="{orderDetail_col:true,orderDetail_col_orderNum:true,orderDetail_col_orderNum_size_large:attr.size==='large',orderDetail_col_orderNum_size_medium:attr.size==='medium',orderDetail_col_orderNum_size_small:attr.size==='small',orderDetail_col_orderNum_size_min:attr.size==='min',orderDetail_col_orderNum_checked:attr.checked,orderDetail_col_orderNum_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="orderNumRef"
                                        refId="orderNumRef"
                                        v-show="pvt_isShow.orderNum === 'orderNumRef'"
                                        :paraVarPair="pvt_orderNum.orderNumRef.paraVarPair"
                                        :para="pvt_orderNum.orderNumRef.para"
                                        :attr="pvt_orderNum.orderNumRef.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                        <div class="orderDetail_row orderDetail_row_row11">
                            <div :class="{orderDetail_col:true,orderDetail_col_orderTime:true,orderDetail_col_orderTime_size_large:attr.size==='large',orderDetail_col_orderTime_size_medium:attr.size==='medium',orderDetail_col_orderTime_size_small:attr.size==='small',orderDetail_col_orderTime_size_min:attr.size==='min',orderDetail_col_orderTime_checked:attr.checked,orderDetail_col_orderTime_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="orderTimeRef"
                                        refId="orderTimeRef"
                                        v-show="pvt_isShow.orderTime === 'orderTimeRef'"
                                        :paraVarPair="pvt_orderTime.orderTimeRef.paraVarPair"
                                        :para="pvt_orderTime.orderTimeRef.para"
                                        :attr="pvt_orderTime.orderTimeRef.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                        <div class="orderDetail_row orderDetail_row_row12">
                            <div :class="{orderDetail_col:true,orderDetail_col_orderPay:true,orderDetail_col_orderPay_size_large:attr.size==='large',orderDetail_col_orderPay_size_medium:attr.size==='medium',orderDetail_col_orderPay_size_small:attr.size==='small',orderDetail_col_orderPay_size_min:attr.size==='min',orderDetail_col_orderPay_checked:attr.checked,orderDetail_col_orderPay_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="orderPayRef"
                                        refId="orderPayRef"
                                        v-show="pvt_isShow.orderPay === 'orderPayRef'"
                                        :paraVarPair="pvt_orderPay.orderPayRef.paraVarPair"
                                        :para="pvt_orderPay.orderPayRef.para"
                                        :attr="pvt_orderPay.orderPayRef.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="orderDetail_row orderDetail_row_row14">
                    <div :class="{orderDetail_col:true,orderDetail_col_reject:true,orderDetail_col_reject_size_large:attr.size==='large',orderDetail_col_reject_size_medium:attr.size==='medium',orderDetail_col_reject_size_small:attr.size==='small',orderDetail_col_reject_size_min:attr.size==='min',orderDetail_col_reject_checked:attr.checked,orderDetail_col_reject_disable:attr.disabled}">

                        <lm2b-button
                                ref="rejectBtnRef"
                                refId="rejectBtnRef"
                                v-show="pvt_isShow.reject === 'rejectBtnRef'"
                                :paraVarPair="pvt_reject.rejectBtnRef.paraVarPair"
                                :para="pvt_reject.rejectBtnRef.para"
                                :attr="pvt_reject.rejectBtnRef.attr">
                        </lm2b-button>
                    </div>
                    <div :class="{orderDetail_col:true,orderDetail_col_pass:true,orderDetail_col_pass_size_large:attr.size==='large',orderDetail_col_pass_size_medium:attr.size==='medium',orderDetail_col_pass_size_small:attr.size==='small',orderDetail_col_pass_size_min:attr.size==='min',orderDetail_col_pass_checked:attr.checked,orderDetail_col_pass_disable:attr.disabled}">

                        <lm2b-button
                                ref="passBtnRef"
                                refId="passBtnRef"
                                v-show="pvt_isShow.pass === 'passBtnRef'"
                                :paraVarPair="pvt_pass.passBtnRef.paraVarPair"
                                :para="pvt_pass.passBtnRef.para"
                                :attr="pvt_pass.passBtnRef.attr">
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
    import infoItem from './infoItem';
    import confirmDialog from '../confirmDialog';
    import rejectDialog from '../orderApproval/rejectDialog';

    export default {
        components: {manage_header, infoItem, confirmDialog,rejectDialog},
        inject: ['sys'],
        props: ['refId', 'para', 'attr', 'number'],
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ['detailHeader', 'alert', 'ticketName', 'ticketPrice', 'billStatus', 'userInfo', 'foldBtn', 'phone', 'note', 'message', 'orderNum', 'orderTime', 'orderPay', 'reject', 'pass', 'confirmDialog', 'confirmDialog'],
                    subModule: ['headerRef', 'alertRef', 'ticketNameRef', 'ticketPriceRef', 'billStatusRef', 'infoItemRef', 'foldBtnRef', 'phoneRef', 'noteRef', 'msgRef', 'orderNumRef', 'orderTimeRef', 'orderPayRef', 'rejectBtnRef', 'passBtnRef', 'confirmDialogRef', 'rejectDialogRef'],
                },
                pvt_isShow: {
                    detailHeader: null,
                    alert: null,
                    ticketName: null,
                    ticketPrice: null,
                    billStatus: null,
                    userInfo: null,
                    foldBtn: null,
                    phone: null,
                    note: null,
                    message: null,
                    orderNum: null,
                    orderTime: null,
                    orderPay: null,
                    reject: null,
                    pass: null,
                    confirmDialog: null,
                },
                pvt_eventPortInput: ['orderApprovalEvent', 'backEvent', 'approvalRefreshEvent'],

                mac: mac.mac,

                ticketName: '',
                ticketPrice: '',
                priceText: '',
                billStatus: '',
                orderNum: '',
                orderTime: '',
                orderPay: '',
                curAppendixDataArr: [],
                userInfoSizeArr: [],
                approvalStatus: false,
                dialogWrap: false,
                curBillId: null,
                curOrderId: null,
                curTicketId: null,
            };
        },
        watch: {},
        computed: {
            pvt_detailHeader: function () {
                return {
                    headerRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium'
                        },
                    },
                };
            },
            pvt_alert: function () {
                return {
                    alertRef: {
                        paraVarPair: {},
                        para: {
                            caution: ["该报名人需要您审核", '', ''],
                        },
                        attr: {
                            type: 'warning',
                            closable: false
                        },
                    },
                };
            },
            pvt_ticketName: function () {
                return {
                    ticketNameRef: {
                        paraVarPair: {
                            textData: 'ticketName',
                        },
                        para: {
                            textData: this.ticketName,
                        },
                        attr: {
                            fontSize: '14px',
                        },
                    },
                };
            },
            pvt_ticketPrice: function () {
                return {
                    ticketPriceRef: {
                        paraVarPair: {
                            textData: 'priceText',
                        },
                        para: {
                            textData: this.priceText,
                        },
                        attr: {
                            fontSize: '14px',
                        },
                    },
                };
            },
            pvt_billStatus: function () {
                return {
                    billStatusRef: {
                        paraVarPair: {
                            textData: 'billStatus',
                        },
                        para: {
                            textData: this.billStatus,
                        },
                        attr: {
                            fontSize: '14px',
                        },
                    },
                };
            },
            pvt_userInfo: function () {
                let loopModule = {
                    infoItemRef: {
                        para: {
                            curAppendixData: this.curAppendixDataArr,
                        },
                        attr: {
                            size: this.userInfoSizeArr
                        },
                    },
                };
                let forData = this.pvt_createForData(loopModule);
                return {
                    infoItemRef: {
                        paraVarPair: {
                            curAppendixData: 'curAppendixDataArr',
                        },
                        forData: forData.infoItemRef,
                    },
                };
            },
            pvt_foldBtn: function () {
                return {
                    foldBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['收起', ''],
                        },
                        attr: {
                            type: 'text',
                        },
                    },
                };
            },
            pvt_phone: function () {
                return {
                    phoneRef: {
                        paraVarPair: {},
                        para: {
                            name: ['打电话', 'van-icon-phone-o'],
                        },
                        attr: {
                            type: 'text',
                        },
                    },
                };
            },
            pvt_note: function () {
                return {
                    noteRef: {
                        paraVarPair: {},
                        para: {
                            name: ['发短信', 'van-icon-envelop-o'],
                        },
                        attr: {
                            type: 'text',
                        },
                    },
                };
            },
            pvt_message: function () {
                return {
                    msgRef: {
                        paraVarPair: {},
                        para: {
                            name: ['发消息', 'van-icon-comment-o'],
                        },
                        attr: {
                            type: 'text',
                        },
                    },
                };
            },
            pvt_orderNum: function () {
                return {
                    orderNumRef: {
                        paraVarPair: {
                            textData: 'orderNum',
                        },
                        para: {
                            textData: this.orderNum,
                        },
                        attr: {
                            fontSize: '14px',
                        },
                    },
                };
            },
            pvt_orderTime: function () {
                return {
                    orderTimeRef: {
                        paraVarPair: {
                            textData: 'orderTime',
                        },
                        para: {
                            textData: this.orderTime,
                        },
                        attr: {
                            fontSize: '14px',
                        },
                    },
                };
            },
            pvt_orderPay: function () {
                return {
                    orderPayRef: {
                        paraVarPair: {
                            textData: 'orderPay',
                        },
                        para: {
                            textData: this.orderPay,
                        },
                        attr: {
                            fontSize: '14px',
                        },
                    },
                };
            },
            pvt_reject: function () {
                return {
                    rejectBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['不通过', 'van-icon-close'],
                        },
                        attr: {
                            type: 'text',
                            width: '100%',
                        },
                    },
                };
            },
            pvt_pass: function () {
                return {
                    passBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['通过', 'van-icon-passed'],
                        },
                        attr: {
                            type: 'text',
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
                            size: 'medium'
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
            startModule: function (parentRef, curBillId, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'orderDetail_start';
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
                    refArr: ['ticketNameRef', 'ticketPriceRef', 'billStatusRef', 'foldBtnRef', 'phoneRef', 'noteRef', 'msgRef', 'orderNumRef', 'orderTimeRef', 'orderPayRef']
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
                            that.curOrderId = null;
                            that.curBillId = curBillId;
                            that.curTicketId = null;
                            that.priceText = '';
                            that.ticketPrice = 0;

                            that.ticketName = '';
                            that.billStatus = '';
                            that.orderNum = '';
                            that.orderTime = '';
                            that.orderPay = '支付方式： 微信';
                            that.curAppendixDataArr = [];
                            that.userInfoSizeArr = [];
                            that.approvalStatus = false;
                            that.parentRef = parentRef;

                            tableName = this.mac.tb.groupActivityBill;
                            dbData = {};
                            dbData[that.mac.fd.id] = [curBillId];
                            dbData[that.mac.fd.groupActivityBill.name] = [];
                            dbData[that.mac.fd.groupActivityBill.mobile] = [];
                            dbData[that.mac.fd.groupActivityBill.info] = [];
                            dbData[that.mac.fd.groupActivityBill.status] = [];
                            that.sys.api.recordRead(tableName, dbData, function () {
                                that.infoData = dbData[that.mac.fd.groupActivityBill.info][0];
                                that.billPhone = dbData[that.mac.fd.groupActivityBill.mobile][0];
                                // 获取名单详细信息：
                                that.curAppendixDataArr.push(['姓名', dbData[that.mac.fd.groupActivityBill.name][0]]);
                                that.curAppendixDataArr.push(['手机', dbData[that.mac.fd.groupActivityBill.mobile][0]]);
                                that.userInfoSizeArr.push('medium', 'medium');
                                for (let i = 0; i < that.infoData.name.length; i++) {
                                    // 将姓名，手机，以及其他信息里面的数据添加到详细信息子模块：
                                    that.curAppendixDataArr.push([that.infoData.name[i], that.infoData.content[i]]);
                                    that.userInfoSizeArr.push('medium');
                                }

                                switch (dbData[that.mac.fd.groupActivityBill.status][0]) {
                                    case 0:
                                        that.billStatus = '报名状态： 待审核';
                                        that.approvalStatus = true;
                                        para.refArr.push('alertRef', 'rejectBtnRef', 'passBtnRef');
                                        break;
                                    case 1:
                                        that.billStatus = '报名状态： 待付款';
                                        break;
                                    case 2:
                                        that.billStatus = '报名状态： 待退款';
                                        break;
                                    case 3:
                                        that.billStatus = '报名状态： 退款中';
                                        break;
                                    case 4:
                                        that.billStatus = '报名状态： 已退款';
                                        break;
                                    case 5:
                                        that.billStatus = '报名状态： 已拒绝';
                                        break;
                                    case 6:
                                        that.billStatus = '报名状态： 待验票';
                                        break;
                                    case 7:
                                        that.billStatus = '报名状态： 已完成';
                                        break;
                                }

                                para.nStep = 'getParentId';
                                if (++dbFlag === 2) {
                                    that.startModule(parentRef, curBillId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'getParentId':
                            tableName = this.mac.tb.groupActivityBill;
                            record = [curBillId];
                            that.sys.api.getParentRecord(tableName, record, function (result) {
                                that.curOrderId = result[0];
                                para.nStep = 'getTicketId';
                                if (++dbFlag === 2) {
                                    that.startModule(parentRef, curBillId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'getTicketId':
                            tableName = this.mac.tb.groupActivityOrder;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.curOrderId];
                            dbData[that.mac.fd.groupActivityOrder.groupActivityTicketTypeID] = [];
                            dbData[that.mac.fd.groupActivityOrder.createTime] = [];
                            dbData[that.mac.fd.groupActivityOrder.orderNumber] = [];

                            that.sys.api.recordRead(tableName, dbData, function () {
                                that.curTicketId = dbData[that.mac.fd.groupActivityOrder.groupActivityTicketTypeID][0];
                                that.orderNum = '订单编号： ' + dbData[that.mac.fd.groupActivityOrder.orderNumber][0];
                                that.orderTime = '创建时间： ' + dbData[that.mac.fd.groupActivityOrder.createTime][0];

                                para.nStep = 'getTicketData';
                                if (++dbFlag === 2) {
                                    that.startModule(parentRef, curBillId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'getTicketData':
                            tableName = this.mac.tb.groupActivityTicketType;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.curTicketId];
                            dbData[that.mac.fd.groupActivityTicketType.name] = [];
                            dbData[that.mac.fd.groupActivityTicketType.price] = [];

                            that.sys.api.recordRead(tableName, dbData, function () {
                                that.ticketName = '所选票种： ' + dbData[that.mac.fd.groupActivityTicketType.name][0];
                                that.ticketPrice = dbData[that.mac.fd.groupActivityTicketType.price][0];
                                that.priceText = '实付金额： ￥' + that.ticketPrice;

                                para.nStep = 'getAppendixData';
                                if (++dbFlag === 2) {
                                    that.startModule(parentRef, curBillId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'getAppendixData':
                            tableName = this.mac.tb.groupActivityAppendix;
                            expression = '';
                            dbData = {};
                            dbData[that.mac.fd.id] = [];

                            that.sys.api.recordQuery(tableName, [curBillId], expression, dbData, function (result) {
                                for (let i = 0; i < dbData[that.mac.fd.id].length; i++) {
                                    that.curAppendixDataArr.push(dbData[that.mac.fd.id][i]);
                                    that.userInfoSizeArr.push('medium');
                                }
                                that.forceUpdateData(function () {
                                    para.nStep = 'start_sub';
                                    if (++dbFlag === 2) {
                                        that.startModule(parentRef, curBillId, successCallBack, errorCallBack)
                                    }
                                });
                            }, function () {
                            });
                            break;
                        case 'start_sub':
                            if (para.i >= para.refArr.length) {
                                para.i = 0;
                                para.nStep = 'detailStart';
                                dbFlag++;
                                break;
                            }
                            that.sm[para.refArr[para.i]].startModule(function () {
                                para.i++;
                                para.nStep = 'start_sub';
                                if (++dbFlag === 2) {
                                    that.startModule(parentRef, curBillId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'detailStart':
                            if (para.i > that.sm.infoItemRef.length - 1) {
                                para.i = 0;
                                para.nStep = 'headStart';
                                dbFlag++;
                                break;
                            }

                            that.sm.infoItemRef[para.i].startModule(function () {
                                para.i++;
                                para.nStep = 'detailStart';
                                if (++dbFlag === 2) {
                                    that.startModule(parentRef, curBillId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'headStart':
                            let headData = {
                                ref: parentRef,
                                title: '报名详情',
                                badgeNum: 0,
                                reference: null,
                                showMenu: false
                            };
                            that.sm.headerRef.startModule(headData, function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(parentRef, curBillId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            para.refArr.push('infoItemRef', 'headerRef');
                            that.showSubModule(para.refArr, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.startModule(parentRef, curBillId, successCallBack, errorCallBack)
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

            orderPass: function (successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'orderDetail_orderPass';
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
                            tableName = this.mac.tb.groupActivityBill;
                            record = [that.curBillId];
                            that.sys.api.getSourceRecord(tableName, record, function (result) {
                                para.terBillIdArr = result;

                                para.nStep = 'statusModify';
                                if (++dbFlag === 2) {
                                    that.orderPass(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'statusModify':
                            tableName = this.mac.tb.groupActivityBill;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.curBillId];
                            dbData[that.mac.fd.groupActivityBill.status] = [that.mac.enum.groupActivityBill.status.checkTicket];
                            that.sys.api.recordModify(tableName, dbData, function () {
                                // 向云端发事件，修改数据：
                                that.ep.orderApprovalEvent(para.terBillIdArr, 0, '', function () {
                                }, function () {
                                });

                                that.$notify({ type: 'success', message: '审核通过！' });
                                if(that.parentRef === 'approval') {
                                    that.ep.approvalRefreshEvent(that.curBillId);
                                }
                                para.nStep = 'statusRefresh';
                                if (++dbFlag === 2) {
                                    that.orderPass(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'statusRefresh':
                            that.billStatus = '报名状态： 待验票';
                            that.forceUpdateData(function () {
                                that.sm.billStatusRef.startModule(function () {
                                    that.showSubModule(['alertRef', 'rejectBtnRef', 'passBtnRef'], false, function () {
                                        para.nStep = 'end';
                                        if (++dbFlag === 2) {
                                            that.orderPass(successCallBack, errorCallBack)
                                        }
                                    }, para.errorCallBack);
                                }, function () {
                                })
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
            orderReject: function (rejectReason,successCallBack,errorCallBack) {
                let that = this;
                let fnname = 'orderDetail_orderReject';
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

                            tableName = this.mac.tb.groupActivityBill;
                            record = [that.curBillId];
                            that.sys.api.getSourceRecord(tableName, record, function (result) {
                                para.terBillIdArr = result;

                                para.nStep = 'statusModify';
                                if (++dbFlag === 2) {
                                    that.orderReject(rejectReason,successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'statusModify':
                            tableName = this.mac.tb.groupActivityBill;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.curBillId];
                            dbData[that.mac.fd.groupActivityBill.status] = [that.mac.enum.groupActivityBill.status.reject];
                            that.sys.api.recordModify(tableName, dbData, function () {
                                // 向云端发事件，修改数据：
                                that.ep.orderApprovalEvent(para.terBillIdArr, 1, rejectReason, function () {
                                }, function () {
                                });

                                that.$notify({ type: 'success', message: '操作成功！' });
                                if(that.parentRef === 'approval') {
                                    that.ep.approvalRefreshEvent(that.curBillId);
                                }
                                para.nStep = 'statusRefresh';
                                if (++dbFlag === 2) {
                                    that.orderReject(rejectReason,successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'statusRefresh':
                            that.billStatus = '报名状态： 已拒绝';
                            that.forceUpdateData(function () {
                                that.sm.billStatusRef.startModule(function () {
                                    that.showSubModule(['alertRef', 'rejectBtnRef', 'passBtnRef'], false, function () {
                                        para.nStep = 'end';
                                        if (++dbFlag === 2) {
                                            that.orderReject(rejectReason,successCallBack, errorCallBack)
                                        }
                                    }, para.errorCallBack);
                                }, function () {
                                })
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

            showMore: function () {
            },


            hideDialog: function () {
                let that = this;
                that.ep.backEvent();
                this.hideSelfModule(this.refId, function () {
                }, function () {
                });
            },
            openPhone: function () {
                let that = this;
                let data = {
                    ref: 'phone',
                    title: '提示',
                    desc: '确认拨打电话 ' + that.billPhone + ' 吗？',
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
            openNote: function () {
                let that = this;
                let data = {
                    ref: 'note',
                    title: '提示',
                    desc: '确认给用户 ' + that.billPhone + ' 发短信吗？',
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
            openMsg: function () {
                let that = this;
                let data = {
                    ref: 'msg',
                    title: '提示',
                    desc: '确认打开消息框吗？',
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

            passDialog: function () {
                let that = this;
                let data = {
                    ref: 'pass',
                    title: '',
                    desc: '确定同意通过审核吗？',
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
            rejectDialog: function () {
                let that = this;
                that.dialogWrap = true;
                that.showSubModule('rejectDialogRef', true, function () {
                    that.sm.rejectDialogRef.startModule(function () {
                    }, function () {
                    });
                }, function () {
                });
            },

            dialogConfirm: function (refId) {
                let that = this;
                that.dialogWrap = false;
                switch (refId) {
                    case 'pass':
                        that.orderPass(function () {
                        }, function () {
                        });
                        break;
                    case 'reject':
                        that.orderReject(function () {
                        }, function () {
                        });
                        break;
                }
            },
            confirmDialogCancel: function (refId) {
                this.dialogWrap = false;
            },
            rejectDialogCancel: function() {
                this.dialogWrap = false;
            },

            headerRef_backEvent: function (curBillId, successCallBack, errorCallBack) {
                this.hideDialog(curBillId, successCallBack, errorCallBack);
            },
            foldBtnRef_buttonClickEvent: function () {
                this.showMore();
            },
            phoneRef_buttonClickEvent: function () {
                this.openPhone();
            },
            noteRef_buttonClickEvent: function () {
                this.openNote();
            },
            msgRef_buttonClickEvent: function () {
                this.openMsg();
            },
            rejectBtnRef_buttonClickEvent: function () {
                this.rejectDialog();
            },
            passBtnRef_buttonClickEvent: function () {
                this.passDialog();
            },

            confirmDialogRef_confirmEvent: function (refId) {
                this.dialogConfirm(refId);
            },
            confirmDialogRef_cancelEvent: function (refId) {
                this.confirmDialogCancel(refId);
            },
            rejectDialogRef_rejectReasonEvent: function (rejectReason, successCallBack, errorCallBack) {
                this.orderReject(rejectReason, successCallBack, errorCallBack);
            },
            rejectDialogRef_cancelEvent: function () {
                this.rejectDialogCancel();
            },
        },
    };
</script>
<style lang="less" scoped>
    @import "../../../../assets/var_kzt"; /*新增*/
    .orderDetail_container {
    }

    .orderDetail_row {
        display: flex;
        flex: 1;
    }

    .orderDetail_col {
        display: flex;
        flex-direction: column;
    }

    .orderDetail_col_orderDetailWindow_size_medium {
        width: @orderDetail-orderDetailWindow-medium-width;
        background-color: mix(@orderDetail-orderDetailWindow-medium-background-color, #fff, @orderDetail-orderDetailWindow-medium-background-color-opacity);;
    }

    .orderDetail_col_detailHeader_size_medium {
        width: @orderDetail-detailHeader-medium-width;
    }

    .orderDetail_col_ticketDetail_size_medium {
        width: @orderDetail-ticketDetail-medium-width;
        padding: @orderDetail-ticketDetail-medium-padding;
        margin: @orderDetail-ticketDetail-medium-margin;
    }

    .orderDetail_col_ticketDetail {
        background-color: mix(@orderDetail-ticketDetail-background-color, #fff, @orderDetail-ticketDetail-background-color-opacity);
    }

    .orderDetail_col_ticketName_size_medium {
        width: @orderDetail-ticketName-medium-width;
        align-items: @orderDetail-ticketName-medium-horizontal-position;
        margin: @orderDetail-ticketName-medium-margin;
    }

    .orderDetail_col_ticketPrice_size_medium {
        width: @orderDetail-ticketPrice-medium-width;
        margin: @orderDetail-ticketPrice-medium-margin;
    }

    .orderDetail_col_billStatus_size_medium {
        width: @orderDetail-billStatus-medium-width;
    }

    .orderDetail_col_userInfo_size_medium {
        width: @orderDetail-userInfo-medium-width;
        padding: @orderDetail-userInfo-medium-padding;
    }

    .orderDetail_col_userInfo {
        background-color: mix(@orderDetail-userInfo-background-color, #fff, @orderDetail-userInfo-background-color-opacity);
    }

    .orderDetail_col_foldBtn_size_medium {
        width: @orderDetail-foldBtn-medium-width;
        align-items: @orderDetail-foldBtn-medium-horizontal-position;
        justify-content: @orderDetail-foldBtn-medium-vertical-position;
        padding: @orderDetail-foldBtn-medium-padding;
    }

    .orderDetail_col_foldBtn {
        background-color: mix(@orderDetail-foldBtn-background-color, #fff, @orderDetail-foldBtn-background-color-opacity);
        border-color: mix(@orderDetail-foldBtn-border-color, #fff, @orderDetail-foldBtn-hover-border-color-opacity);
        border-style: @orderDetail-foldBtn-border-style;
        border-width: @orderDetail-foldBtn-border-width;
    }

    .orderDetail_col_phone_size_medium {
        width: @orderDetail-phone-medium-width;
        align-items: @orderDetail-phone-medium-horizontal-position;
        justify-content: @orderDetail-phone-medium-vertical-position;
    }

    .orderDetail_col_phone {
        background-color: mix(@orderDetail-phone-background-color, #fff, @orderDetail-phone-background-color-opacity);
    }

    .orderDetail_col_note_size_medium {
        width: @orderDetail-note-medium-width;
        align-items: @orderDetail-note-medium-horizontal-position;
        justify-content: @orderDetail-note-medium-vertical-position;
    }

    .orderDetail_col_note {
        background-color: mix(@orderDetail-note-background-color, #fff, @orderDetail-note-background-color-opacity);
    }

    .orderDetail_col_message_size_medium {
        width: @orderDetail-message-medium-width;
        align-items: @orderDetail-message-medium-horizontal-position;
        justify-content: @orderDetail-message-medium-vertical-position;
    }

    .orderDetail_col_message {
        background-color: mix(@orderDetail-message-background-color, #fff, @orderDetail-message-background-color-opacity);
    }

    .orderDetail_col_orderInfo_size_medium {
        width: @orderDetail-orderInfo-medium-width;
        padding: @orderDetail-orderInfo-medium-padding;
        margin: @orderDetail-orderInfo-medium-margin;
    }

    .orderDetail_col_orderInfo {
        background-color: mix(@orderDetail-orderInfo-background-color, #fff, @orderDetail-orderInfo-background-color-opacity);
    }

    .orderDetail_col_orderNum_size_medium {
        width: @orderDetail-orderNum-medium-width;
        margin: @orderDetail-orderNum-medium-margin;
    }

    .orderDetail_col_orderTime_size_medium {
        width: @orderDetail-orderTime-medium-width;
        margin: @orderDetail-orderTime-medium-margin;
    }

    .orderDetail_col_orderPay_size_medium {
        width: @orderDetail-orderPay-medium-width;
    }

    .orderDetail_col_alert_size_medium {
        width: @orderDetail-alert-medium-width;
    }

    .orderDetail_col_reject_size_medium {
        width: @orderDetail-reject-medium-width;
        align-items: @orderDetail-reject-medium-horizontal-position;
        justify-content: @orderDetail-reject-medium-vertical-position;
    }

    .orderDetail_col_reject {
        /*<!--border-style: @orderDetail-reject-border-style;-->*/
        /*<!--border-width: @orderDetail-reject-border-width;-->*/
        /*<!--border-color: mix(@orderDetail-reject-border-color, #fff, @orderDetail-reject-hover-border-color-opacity);-->*/
        background-color: mix(@orderDetail-reject-background-color, #fff, @orderDetail-reject-background-color-opacity);
    }

    .orderDetail_col_pass_size_medium {
        width: @orderDetail-pass-medium-width;
        align-items: @orderDetail-pass-medium-horizontal-position;
        justify-content: @orderDetail-pass-medium-vertical-position;
    }

    .orderDetail_col_pass {
        /*<!--border-style: @orderDetail-pass-border-style;-->*/
        /*<!--border-width: @orderDetail-pass-border-width;-->*/
        /*<!--border-color: mix(@orderDetail-pass-border-color, #fff, @orderDetail-pass-hover-border-color-opacity);-->*/
        background-color: mix(@orderDetail-pass-background-color, #fff, @orderDetail-pass-background-color-opacity);
    }

    .orderDetail_col_confirmDialog_size_medium {
        width: @orderDetail-confirmDialog-medium-width;
        height: @orderDetail-confirmDialog-medium-height;
    }

    .orderDetail_row_confirmDialog {
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

    .orderDetail_col_rejectDialog_size_medium {
        width:@orderDetail-rejectDialog-medium-width;
        height:@orderDetail-rejectDialog-medium-height;
    }

    .orderDetail_dialog {
        position: fixed;
        left: 50%;
        top: 50%; /*新增*/
        transform: translate(-50%, -50%);
    }
</style>