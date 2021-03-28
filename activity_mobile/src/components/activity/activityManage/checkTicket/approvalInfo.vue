<template>
    <div class="approvalInfo_container">
        <div class="approvalInfo_row approvalInfo_row_approvalInfoRow">
            <div :class="{approvalInfo_col:true,approvalInfo_col_approvalInfoWindow:true,approvalInfo_col_approvalInfoWindow_size_large:attr.size==='large',approvalInfo_col_approvalInfoWindow_size_medium:attr.size==='medium',approvalInfo_col_approvalInfoWindow_size_small:attr.size==='small',approvalInfo_col_approvalInfoWindow_size_min:attr.size==='min',approvalInfo_col_approvalInfoWindow_checked:attr.checked,approvalInfo_col_approvalInfoWindow_disable:attr.disabled}">

                <div class="approvalInfo_row approvalInfo_row_row1">
                    <div :class="{approvalInfo_col:true,approvalInfo_col_headerRef:true,approvalInfo_col_headerRef_size_large:attr.size==='large',approvalInfo_col_headerRef_size_medium:attr.size==='medium',approvalInfo_col_headerRef_size_small:attr.size==='small',approvalInfo_col_headerRef_size_min:attr.size==='min',approvalInfo_col_headerRef_checked:attr.checked,approvalInfo_col_headerRef_disable:attr.disabled}">

                        <manage_header
                                ref="headerRef"
                                refId="headerRef"
                                v-show="pvt_isShow.headerRef === 'headerRef'"
                                :paraVarPair="pvt_headerRef.headerRef.paraVarPair"
                                :para="pvt_headerRef.headerRef.para"
                                :attr="pvt_headerRef.headerRef.attr">
                        </manage_header>
                    </div>
                </div>
                <div class="approvalInfo_row approvalInfo_row_row12">
                    <div :class="{approvalInfo_col:true,approvalInfo_col_alert:true,approvalInfo_col_alert_size_large:attr.size==='large',approvalInfo_col_alert_size_medium:attr.size==='medium',approvalInfo_col_alert_size_small:attr.size==='small',approvalInfo_col_alert_size_min:attr.size==='min',approvalInfo_col_alert_checked:attr.checked,approvalInfo_col_alert_disable:attr.disabled}">

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
                <div class="approvalInfo_row approvalInfo_row_row13">
                    <div v-show="isFinish" :class="{approvalInfo_col:true,approvalInfo_col_passText:true,approvalInfo_col_passText_size_large:attr.size==='large',approvalInfo_col_passText_size_medium:attr.size==='medium',approvalInfo_col_passText_size_small:attr.size==='small',approvalInfo_col_passText_size_min:attr.size==='min',approvalInfo_col_passText_checked:attr.checked,approvalInfo_col_passText_disable:attr.disabled}">

                        <lm2b-link-text
                                ref="passTextRef"
                                refId="passTextRef"
                                v-show="pvt_isShow.passText === 'passTextRef'"
                                :paraVarPair="pvt_passText.passTextRef.paraVarPair"
                                :para="pvt_passText.passTextRef.para"
                                :attr="pvt_passText.passTextRef.attr">
                        </lm2b-link-text>
                    </div>
                </div>
                <div class="approvalInfo_row approvalInfo_row_row2">
                    <div :class="{approvalInfo_col:true,approvalInfo_col_infoWrap:true,approvalInfo_col_infoWrap_size_large:attr.size==='large',approvalInfo_col_infoWrap_size_medium:attr.size==='medium',approvalInfo_col_infoWrap_size_small:attr.size==='small',approvalInfo_col_infoWrap_size_min:attr.size==='min',approvalInfo_col_infoWrap_checked:attr.checked,approvalInfo_col_infoWrap_disable:attr.disabled}">

                        <div class="approvalInfo_row approvalInfo_row_row3">
                            <div :class="{approvalInfo_col:true,approvalInfo_col_nameText:true,approvalInfo_col_nameText_size_large:attr.size==='large',approvalInfo_col_nameText_size_medium:attr.size==='medium',approvalInfo_col_nameText_size_small:attr.size==='small',approvalInfo_col_nameText_size_min:attr.size==='min',approvalInfo_col_nameText_checked:attr.checked,approvalInfo_col_nameText_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="nameTextRef"
                                        refId="nameTextRef"
                                        v-show="pvt_isShow.nameText === 'nameTextRef'"
                                        :paraVarPair="pvt_nameText.nameTextRef.paraVarPair"
                                        :para="pvt_nameText.nameTextRef.para"
                                        :attr="pvt_nameText.nameTextRef.attr">
                                </lm2b-link-text>
                            </div>
                            <div :class="{approvalInfo_col:true,approvalInfo_col_nameContent:true,approvalInfo_col_nameContent_size_large:attr.size==='large',approvalInfo_col_nameContent_size_medium:attr.size==='medium',approvalInfo_col_nameContent_size_small:attr.size==='small',approvalInfo_col_nameContent_size_min:attr.size==='min',approvalInfo_col_nameContent_checked:attr.checked,approvalInfo_col_nameContent_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="nameContentRef"
                                        refId="nameContentRef"
                                        v-show="pvt_isShow.nameContent === 'nameContentRef'"
                                        :paraVarPair="pvt_nameContent.nameContentRef.paraVarPair"
                                        :para="pvt_nameContent.nameContentRef.para"
                                        :attr="pvt_nameContent.nameContentRef.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                        <div class="approvalInfo_row approvalInfo_row_row4">
                            <div :class="{approvalInfo_col:true,approvalInfo_col_phoneText:true,approvalInfo_col_phoneText_size_large:attr.size==='large',approvalInfo_col_phoneText_size_medium:attr.size==='medium',approvalInfo_col_phoneText_size_small:attr.size==='small',approvalInfo_col_phoneText_size_min:attr.size==='min',approvalInfo_col_phoneText_checked:attr.checked,approvalInfo_col_phoneText_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="phoneTextRef"
                                        refId="phoneTextRef"
                                        v-show="pvt_isShow.phoneText === 'phoneTextRef'"
                                        :paraVarPair="pvt_phoneText.phoneTextRef.paraVarPair"
                                        :para="pvt_phoneText.phoneTextRef.para"
                                        :attr="pvt_phoneText.phoneTextRef.attr">
                                </lm2b-link-text>
                            </div>
                            <div :class="{approvalInfo_col:true,approvalInfo_col_phoneContent:true,approvalInfo_col_phoneContent_size_large:attr.size==='large',approvalInfo_col_phoneContent_size_medium:attr.size==='medium',approvalInfo_col_phoneContent_size_small:attr.size==='small',approvalInfo_col_phoneContent_size_min:attr.size==='min',approvalInfo_col_phoneContent_checked:attr.checked,approvalInfo_col_phoneContent_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="phoneContentRef"
                                        refId="phoneContentRef"
                                        v-show="pvt_isShow.phoneContent === 'phoneContentRef'"
                                        :paraVarPair="pvt_phoneContent.phoneContentRef.paraVarPair"
                                        :para="pvt_phoneContent.phoneContentRef.para"
                                        :attr="pvt_phoneContent.phoneContentRef.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                        <div class="approvalInfo_row approvalInfo_row_row5">
                            <div :class="{approvalInfo_col:true,approvalInfo_col_ticketText:true,approvalInfo_col_ticketText_size_large:attr.size==='large',approvalInfo_col_ticketText_size_medium:attr.size==='medium',approvalInfo_col_ticketText_size_small:attr.size==='small',approvalInfo_col_ticketText_size_min:attr.size==='min',approvalInfo_col_ticketText_checked:attr.checked,approvalInfo_col_ticketText_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="ticketTextRef"
                                        refId="ticketTextRef"
                                        v-show="pvt_isShow.ticketText === 'ticketTextRef'"
                                        :paraVarPair="pvt_ticketText.ticketTextRef.paraVarPair"
                                        :para="pvt_ticketText.ticketTextRef.para"
                                        :attr="pvt_ticketText.ticketTextRef.attr">
                                </lm2b-link-text>
                            </div>
                            <div :class="{approvalInfo_col:true,approvalInfo_col_ticketContent:true,approvalInfo_col_ticketContent_size_large:attr.size==='large',approvalInfo_col_ticketContent_size_medium:attr.size==='medium',approvalInfo_col_ticketContent_size_small:attr.size==='small',approvalInfo_col_ticketContent_size_min:attr.size==='min',approvalInfo_col_ticketContent_checked:attr.checked,approvalInfo_col_ticketContent_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="ticketContentRef"
                                        refId="ticketContentRef"
                                        v-show="pvt_isShow.ticketContent === 'ticketContentRef'"
                                        :paraVarPair="pvt_ticketContent.ticketContentRef.paraVarPair"
                                        :para="pvt_ticketContent.ticketContentRef.para"
                                        :attr="pvt_ticketContent.ticketContentRef.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                        <div class="approvalInfo_row approvalInfo_row_row6">
                            <div :class="{approvalInfo_col:true,approvalInfo_col_priceText:true,approvalInfo_col_priceText_size_large:attr.size==='large',approvalInfo_col_priceText_size_medium:attr.size==='medium',approvalInfo_col_priceText_size_small:attr.size==='small',approvalInfo_col_priceText_size_min:attr.size==='min',approvalInfo_col_priceText_checked:attr.checked,approvalInfo_col_priceText_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="priceTextRef"
                                        refId="priceTextRef"
                                        v-show="pvt_isShow.priceText === 'priceTextRef'"
                                        :paraVarPair="pvt_priceText.priceTextRef.paraVarPair"
                                        :para="pvt_priceText.priceTextRef.para"
                                        :attr="pvt_priceText.priceTextRef.attr">
                                </lm2b-link-text>
                            </div>
                            <div :class="{approvalInfo_col:true,approvalInfo_col_priceContent:true,approvalInfo_col_priceContent_size_large:attr.size==='large',approvalInfo_col_priceContent_size_medium:attr.size==='medium',approvalInfo_col_priceContent_size_small:attr.size==='small',approvalInfo_col_priceContent_size_min:attr.size==='min',approvalInfo_col_priceContent_checked:attr.checked,approvalInfo_col_priceContent_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="priceContentRef"
                                        refId="priceContentRef"
                                        v-show="pvt_isShow.priceContent === 'priceContentRef'"
                                        :paraVarPair="pvt_priceContent.priceContentRef.paraVarPair"
                                        :para="pvt_priceContent.priceContentRef.para"
                                        :attr="pvt_priceContent.priceContentRef.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                        <div class="approvalInfo_row approvalInfo_row_row7">
                            <div :class="{approvalInfo_col:true,approvalInfo_col_activityName:true,approvalInfo_col_activityName_size_large:attr.size==='large',approvalInfo_col_activityName_size_medium:attr.size==='medium',approvalInfo_col_activityName_size_small:attr.size==='small',approvalInfo_col_activityName_size_min:attr.size==='min',approvalInfo_col_activityName_checked:attr.checked,approvalInfo_col_activityName_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="activityNameRef"
                                        refId="activityNameRef"
                                        v-show="pvt_isShow.activityName === 'activityNameRef'"
                                        :paraVarPair="pvt_activityName.activityNameRef.paraVarPair"
                                        :para="pvt_activityName.activityNameRef.para"
                                        :attr="pvt_activityName.activityNameRef.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                        <div class="approvalInfo_row approvalInfo_row_row8">
                            <div :class="{approvalInfo_col:true,approvalInfo_col_time:true,approvalInfo_col_time_size_large:attr.size==='large',approvalInfo_col_time_size_medium:attr.size==='medium',approvalInfo_col_time_size_small:attr.size==='small',approvalInfo_col_time_size_min:attr.size==='min',approvalInfo_col_time_checked:attr.checked,approvalInfo_col_time_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="timeRef"
                                        refId="timeRef"
                                        v-show="pvt_isShow.time === 'timeRef'"
                                        :paraVarPair="pvt_time.timeRef.paraVarPair"
                                        :para="pvt_time.timeRef.para"
                                        :attr="pvt_time.timeRef.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                        <div class="approvalInfo_row approvalInfo_row_row9">
                            <div :class="{approvalInfo_col:true,approvalInfo_col_place:true,approvalInfo_col_place_size_large:attr.size==='large',approvalInfo_col_place_size_medium:attr.size==='medium',approvalInfo_col_place_size_small:attr.size==='small',approvalInfo_col_place_size_min:attr.size==='min',approvalInfo_col_place_checked:attr.checked,approvalInfo_col_place_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="placeRef"
                                        refId="placeRef"
                                        v-show="pvt_isShow.place === 'placeRef'"
                                        :paraVarPair="pvt_place.placeRef.paraVarPair"
                                        :para="pvt_place.placeRef.para"
                                        :attr="pvt_place.placeRef.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="approvalInfo_row approvalInfo_row_row10">
                    <div :class="{approvalInfo_col:true,approvalInfo_col_confirmBtn:true,approvalInfo_col_confirmBtn_size_large:attr.size==='large',approvalInfo_col_confirmBtn_size_medium:attr.size==='medium',approvalInfo_col_confirmBtn_size_small:attr.size==='small',approvalInfo_col_confirmBtn_size_min:attr.size==='min',approvalInfo_col_confirmBtn_checked:attr.checked,approvalInfo_col_confirmBtn_disable:attr.disabled}">

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
                <div class="approvalInfo_row approvalInfo_row_row11">
                    <div :class="{approvalInfo_col:true,approvalInfo_col_cancelBtn:true,approvalInfo_col_cancelBtn_size_large:attr.size==='large',approvalInfo_col_cancelBtn_size_medium:attr.size==='medium',approvalInfo_col_cancelBtn_size_small:attr.size==='small',approvalInfo_col_cancelBtn_size_min:attr.size==='min',approvalInfo_col_cancelBtn_checked:attr.checked,approvalInfo_col_cancelBtn_disable:attr.disabled}">

                        <lm2b-button
                                ref="cancelBtnRef"
                                refId="cancelBtnRef"
                                v-show="pvt_isShow.cancelBtn === 'cancelBtnRef'"
                                :paraVarPair="pvt_cancelBtn.cancelBtnRef.paraVarPair"
                                :para="pvt_cancelBtn.cancelBtnRef.para"
                                :attr="pvt_cancelBtn.cancelBtnRef.attr">
                        </lm2b-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="approvalInfo_row approvalInfo_row_codeDialog" v-show="codeDialogWrap">  <!--新增-->
            <div :class="{approvalInfo_col:true,approvalInfo_col_codeDialog:true,approvalInfo_col_codeDialog_size_large:attr.size==='large',approvalInfo_col_codeDialog_size_medium:attr.size==='medium',approvalInfo_col_codeDialog_size_small:attr.size==='small',approvalInfo_col_codeDialog_size_min:attr.size==='min',approvalInfo_col_codeDialog_checked:attr.checked,approvalInfo_col_codeDialog_disable:attr.disabled,approvalInfo_dialog:true}">
                <codeDialog
                        ref="codeDialogRef"
                        refId="codeDialogRef"
                        v-if="pvt_isShow.codeDialog === 'codeDialogRef'"
                        :paraVarPair="pvt_codeDialog.codeDialogRef.paraVarPair"
                        :para="pvt_codeDialog.codeDialogRef.para"
                        :attr="pvt_codeDialog.codeDialogRef.attr">
                </codeDialog>
            </div>
        </div>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';
    import manage_header from '../manageHeader/manageHeader';
    import codeDialog from './codeDialog';
    export default {
        components: {manage_header, codeDialog},
        inject: ['sys'],
        props: ['refId', 'para', 'attr', 'number'],
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ['headerRef', 'nameText', 'nameContent', 'phoneText', 'phoneContent', 'ticketText', 'ticketContent', 'priceText', 'priceContent', 'activityName', 'time', 'place', 'confirmBtn', 'cancelBtn', 'codeDialog', 'alert', 'passText'],
                    subModule: ['headerRef', 'nameTextRef', 'nameContentRef', 'phoneTextRef', 'phoneContentRef', 'ticketTextRef', 'ticketContentRef', 'priceTextRef', 'priceContentRef', 'activityNameRef', 'timeRef', 'placeRef', 'confirmBtnRef', 'cancelBtnRef', 'codeDialogRef', 'alertRef', 'passTextRef'],
                },
                pvt_isShow: {
                    headerRef: null,
                    nameText: null,
                    nameContent: null,
                    phoneText: null,
                    phoneContent: null,
                    ticketText: null,
                    ticketContent: null,
                    priceText: null,
                    priceContent: null,
                    activityName: null,
                    time: null,
                    place: null,
                    confirmBtn: null,
                    cancelBtn: null,
                    codeDialog: null,
                    alert: null,
                    passText: null,
                },
                pvt_eventPortInput: ['getSeccodeEvent', 'seccodeVerifyEvent', 'ticketPassEvent', 'backEvent'],

                mac: mac.mac,

                checkType: null,
                curBillId: null,
                curOrderId: null,
                curActivityId: null,
                ticketName: null,
                priceText: null,
                activityTime: null,
                activityPlace: null,
                codeDialogWrap: false,
                alertText: null,
                isFinish: false
            };
        },
        watch: {},
        computed: {
            pvt_headerRef: function () {
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
            pvt_nameText: function () {
                return {
                    nameTextRef: {
                        paraVarPair: {},
                        para: {
                            textData: '姓名：',
                        },
                        attr: {fontSize: '14px'},
                    },
                };
            },
            pvt_nameContent: function () {
                return {
                    nameContentRef: {
                        paraVarPair: {},
                        para: {
                            textData: [{
                                $table: this.mac.tb.groupActivityBill,
                                $arrField: [this.mac.fd.groupActivityBill.name],
                                $arrValue: [this.curBillId]
                            }],
                        },
                        attr: {fontSize: '14px'},
                    },
                };
            },
            pvt_phoneText: function () {
                return {
                    phoneTextRef: {
                        paraVarPair: {},
                        para: {
                            textData: '手机：',
                        },
                        attr: {fontSize: '14px'},
                    },
                };
            },
            pvt_phoneContent: function () {
                return {
                    phoneContentRef: {
                        paraVarPair: {},
                        para: {
                            textData: [{
                                $table: this.mac.tb.groupActivityBill,
                                $arrField: [this.mac.fd.groupActivityBill.mobile],
                                $arrValue: [this.curBillId]
                            }],
                        },
                        attr: {fontSize: '14px'},
                    },
                };
            },
            pvt_ticketText: function () {
                return {
                    ticketTextRef: {
                        paraVarPair: {},
                        para: {
                            textData: '票种名称：',
                        },
                        attr: {
                            fontSize: '14px'
                        },
                    },
                };
            },
            pvt_ticketContent: function () {
                return {
                    ticketContentRef: {
                        paraVarPair: {
                            textData: 'ticketName',
                        },
                        para: {
                            textData: this.ticketName,
                        },
                        attr: {fontSize: '14px'},
                    },
                };
            },
            pvt_priceText: function () {
                return {
                    priceTextRef: {
                        paraVarPair: {},
                        para: {
                            textData: '票种金额',
                        },
                        attr: {fontSize: '14px'},
                    },
                };
            },
            pvt_priceContent: function () {
                return {
                    priceContentRef: {
                        paraVarPair: {
                            textData: 'priceText',
                        },
                        para: {
                            textData: this.priceText,
                        },
                        attr: {fontSize: '14px'},
                    },
                };
            },
            pvt_activityName: function () {
                return {
                    activityNameRef: {
                        paraVarPair: {},
                        para: {
                            textData: [{
                                $table: this.mac.tb.groupActivity,
                                $arrField: [this.mac.fd.groupActivity.name],
                                $arrValue: [this.curActivityId]
                            }],
                        },
                        attr: {fontSize: '14px'},
                    },
                };
            },
            pvt_time: function () {
                return {
                    timeRef: {
                        paraVarPair: {
                            textData: 'activityTime',
                        },
                        para: {
                            textData: this.activityTime,
                        },
                        attr: {
                            icon: 'van-icon-underway-o',
                            fontSize: '14px'
                        },
                    },
                };
            },
            pvt_place: function () {
                return {
                    placeRef: {
                        paraVarPair: {
                            textData: 'activityPlace',
                        },
                        para: {
                            textData: this.activityPlace,
                        },
                        attr: {
                            icon: 'van-icon-location-o',
                            fontSize: '14px'
                        },
                    },
                };
            },
            pvt_confirmBtn: function () {
                return {
                    confirmBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['验票通过', ''],
                        },
                        attr: {
                            type: 'primary',
                            long: true,
                        },
                    },
                };
            },
            pvt_cancelBtn: function () {
                return {
                    cancelBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['取消', ''],
                        },
                        attr: {
                            plain: true,
                            long: true,
                        },
                    },
                };
            },
            pvt_codeDialog: function () {
                return {
                    codeDialogRef: {
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
                            caution: ["该订单已完成验票，请勿重复操作！", '', 'van-icon-warning-o'],
                        },
                        attr: {
                            closable: false,
                            type: 'error',
                            center: true,
                            showIcon: true,
                        },
                    },
                };
            },
            pvt_passText: function () {
                return {
                    passTextRef: {
                        paraVarPair: {},
                        para: {
                            textData: '验票通过',
                        },
                        attr: {
                            textAlign: 'center',
                            color: '#12B0FF',
                            fontSize: '20px',
                            background: '#f4f4f4',
                            icon: 'van-icon-passed',
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
            startModule: function (type, curBillId, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'approvalInfo_start';
                let dbFlag;
                let dbData;
                let tableName;
                let record;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0,
                    refArr:['nameTextRef', 'nameContentRef', 'phoneTextRef', 'phoneContentRef', 'ticketTextRef', 'ticketContentRef', 'priceTextRef', 'priceContentRef', 'activityNameRef', 'timeRef', 'placeRef']
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
                            that.checkType = type;
                            that.curBillId = curBillId;
                            that.curOrderId = null;
                            that.curActivityId = null;
                            that.curTicketId = null;
                            that.priceText = '';
                            that.activityPlace = '';
                            that.activityTime = '';
                            that.isFinish = false;

                            that.forceUpdateData(function () {
                                para.nStep = 'getBillStatus';
                                if (++dbFlag === 2) {
                                    that.startModule(type, curBillId, successCallBack, errorCallBack)
                                }
                            });
                            break;
                        case 'getBillStatus':
                            tableName = this.mac.tb.groupActivityBill;
                            dbData = {};
                            dbData[that.mac.fd.id] = [curBillId];
                            dbData[that.mac.fd.groupActivityBill.status] = [];

                            that.sys.api.recordRead(tableName, dbData, function () {
                                if(dbData[that.mac.fd.groupActivityBill.status][0] === that.mac.enum.groupActivityBill.status.checkTicket) {
                                    that.isFinish = false;
                                    para.refArr.push('confirmBtnRef', 'cancelBtnRef')
                                } else {
                                    that.isFinish = true;
                                    para.refArr.push('alertRef', 'passTextRef')
                                }
                                para.nStep = 'getParentId';
                                if (++dbFlag === 2) {
                                    that.startModule(type, curBillId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'getParentId':
                            tableName = this.mac.tb.groupActivityBill;
                            record = [that.curBillId];
                            that.sys.api.getParentRecord(tableName, record, function (result) {
                                that.curOrderId = result[0];
                                para.nStep = 'getTicketId';
                                if (++dbFlag === 2) {
                                    that.startModule(type, curBillId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'getTicketId':
                            tableName = this.mac.tb.groupActivityOrder;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.curOrderId];
                            dbData[that.mac.fd.groupActivityOrder.groupActivityTicketTypeID] = [];
                            dbData[that.mac.fd.groupActivityOrder.groupActivityID] = [];
                            dbData[that.mac.fd.groupActivityOrder.price] = [];
                            that.sys.api.recordRead(tableName, dbData, function () {
                                that.curTicketId = dbData[that.mac.fd.groupActivityOrder.groupActivityTicketTypeID][0];
                                that.curActivityId = dbData[that.mac.fd.groupActivityOrder.groupActivityID][0];
                                that.priceText = '￥' + dbData[that.mac.fd.groupActivityOrder.price][0];
                                para.nStep = 'getTicketName';
                                if (++dbFlag === 2) {
                                    that.startModule(type, curBillId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'getTicketName':
                            tableName = this.mac.tb.groupActivityTicketType;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.curTicketId];
                            dbData[that.mac.fd.groupActivityTicketType.name] = [];
                            dbData[that.mac.fd.groupActivityTicketType.startTime] = [];
                            dbData[that.mac.fd.groupActivityTicketType.endTime] = [];
                            that.sys.api.recordRead(tableName, dbData, function () {
                                let startTime = that.timeSplice(dbData[that.mac.fd.groupActivityTicketType.startTime][0]);
                                let endTime = that.timeSplice(dbData[that.mac.fd.groupActivityTicketType.endTime][0]);
                                that.ticketName = dbData[that.mac.fd.groupActivityTicketType.name][0] + ' (' + startTime + '至' + endTime + ')';

                                para.nStep = 'getActivityData';
                                if (++dbFlag === 2) {
                                    that.startModule(type, curBillId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'getActivityData':
                            tableName = this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.curActivityId];
                            dbData[that.mac.fd.groupActivity.startTime] = [];
                            dbData[that.mac.fd.groupActivity.endTime] = [];
                            dbData[that.mac.fd.groupActivity.place] = [];
                            that.sys.api.recordRead(tableName, dbData, function () {
                                let startTime = that.timeSplice(dbData[that.mac.fd.groupActivity.startTime][0]);
                                let endTime = that.timeSplice(dbData[that.mac.fd.groupActivity.endTime][0]);
                                that.activityTime = startTime + ' 至 ' + endTime;

                                for(let i = 0; i < dbData[that.mac.fd.groupActivity.place][0].name.length; i++) {
                                    that.activityPlace += dbData[that.mac.fd.groupActivity.place][0].name[i];
                                }
                                that.activityPlace += dbData[that.mac.fd.groupActivity.place][0].place;

                                that.forceUpdateData(function () {
                                    para.nStep = 'start_sub';
                                    if (++dbFlag === 2) {
                                        that.startModule(type, curBillId, successCallBack, errorCallBack)
                                    }
                                });
                            }, function () {
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
                                    that.startModule(type, curBillId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'headStart':
                            let headData = {
                                ref: '',
                                title: '报名信息',
                                badgeNum: 0,
                                reference: null,
                                showMenu: false
                            };
                            that.sm.headerRef.startModule(headData, function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(type, curBillId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            para.refArr.push('headerRef');
                            that.showSubModule(para.refArr, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.startModule(type, curBillId, successCallBack, errorCallBack)
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
            ticketPassWrap: function () {
                let that = this;

                if(that.checkType === 'code') {
                    this.ticketPass(function () {
                    }, function () {
                    })
                } else {
                    that.showCodeDialog();
                }
            },

            dialogConfirm() {
                this.hideCodeDialog();
                this.ticketPass(function () {
                }, function () {
                })
            },

            ticketPass: function (successCallBack,errorCallBack) {
                let that = this;
                let fnname = 'approvalInfo_ticketPass';
                let dbFlag;
                let dbData;
                let tableName;
                let record;
                let condition;
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
                        case 'getParentId':
                            tableName = this.mac.tb.groupActivityBill;
                            record = [that.curBillId];
                            that.sys.api.getSourceRecord(tableName, record, function (result) {
                                para.terBillId = result[0];

                                para.nStep = 'modifyData';
                                if (++dbFlag === 2) {
                                    that.ticketPass(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'modifyData':
                            tableName = this.mac.tb.groupActivityBill;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.curBillId];
                            dbData[this.mac.fd.groupActivityBill.status] = [this.mac.enum.groupActivityBill.status.finish];
                            that.sys.api.recordModify(tableName, dbData, function (result) {
                                that.$notify({type: 'success', message: '验票成功！'});
                                that.ep.ticketPassEvent(para.terBillId, function () {
                                }, function () {
                                });
                                para.nStep = 'refresh';
                                if (++dbFlag === 2) {
                                    that.ticketPass(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'refresh':
                            that.isFinish = true;
                            that.sm.passTextRef.startModule(function () {
                                that.showSubModule('passTextRef', true, function () {
                                }, para.errorCallBack);
                                that.showSubModule(['confirmBtnRef', 'cancelBtnRef'], false, function () {
                                }, para.errorCallBack);

                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.ticketPass(successCallBack, errorCallBack)
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

            showCodeDialog: function () {
                let that = this;
                that.codeDialogWrap = true;
                that.showSubModule('codeDialogRef', true, function () {
                    that.sm.codeDialogRef.startModule(that.curBillId, function () {
                    }, function () {
                    });
                }, function () {
                });
            },

            hideCodeDialog() {
                this.codeDialogWrap = false;
            },

            cancelClick: function () {
                this.ep.backEvent();
                this.hideSelfModule(this.refId, function () {
                }, function () {
                });
            },

            timeSplice(time) {
                return time.slice(5, -3);
            },



            confirmBtnRef_buttonClickEvent: function () {
                this.ticketPassWrap();
            },
            cancelBtnRef_buttonClickEvent: function () {
                this.cancelClick();
            },
            headerRef_backEvent: function () {
                this.cancelClick();
            },
            codeDialogRef_cancelEvent: function () {
                this.hideCodeDialog();
            },
            codeDialogRef_confirmEvent: function () {
                this.dialogConfirm();
            },
            codeDialogRef_getSeccodeEvent: function (phone,successCallBack, errorCallBack) {
                this.ep.getSeccodeEvent(phone,successCallBack, errorCallBack);
            },
            codeDialogRef_seccodeVerifyEvent: function (terBillId, code,successCallBack, errorCallBack) {
                this.ep.seccodeVerifyEvent(terBillId, code,successCallBack, errorCallBack);
            },
        },
    };
</script>
<style lang="less" scoped>
    @import "../../../../assets/var_kzt"; /*新增*/
    .approvalInfo_container {
    }

    .approvalInfo_row {
        display: flex;
        flex: 1;
    }

    .approvalInfo_col {
        display: flex;
        flex-direction: column;
    }

    .approvalInfo_col_approvalInfoWindow_size_medium {
        width: @approvalInfo-approvalInfoWindow-medium-width;
    }

    .approvalInfo_col_approvalInfoWindow {
        background-color: mix(@approvalInfo-approvalInfoWindow-background-color, #fff, @approvalInfo-approvalInfoWindow-background-color-opacity);
    }

    .approvalInfo_col_headerRef_size_medium {
        width: @approvalInfo-headerRef-medium-width;
    }

    .approvalInfo_col_headerRef {
        background-color: mix(@approvalInfo-headerRef-background-color, #fff, @approvalInfo-headerRef-background-color-opacity);
    }

    .approvalInfo_col_infoWrap_size_medium {
        width: @approvalInfo-infoWrap-medium-width;
        margin: @approvalInfo-infoWrap-medium-margin;
        padding: @approvalInfo-infoWrap-medium-padding;
    }

    .approvalInfo_col_infoWrap {
        background-color: mix(@approvalInfo-infoWrap-background-color, #fff, @approvalInfo-infoWrap-background-color-opacity);
        border-radius: @approvalInfo-infoWrap-border-radius;
    }

    .approvalInfo_col_nameText_size_medium {
        width: @approvalInfo-nameText-medium-width;
        margin: @approvalInfo-nameText-medium-margin;
    }

    .approvalInfo_col_nameContent_size_medium {
        width: @approvalInfo-nameContent-medium-width;
    }

    .approvalInfo_col_phoneText_size_medium {
        width: @approvalInfo-phoneText-medium-width;
        margin: @approvalInfo-phoneText-medium-margin;
    }

    .approvalInfo_col_phoneContent_size_medium {
        width: @approvalInfo-phoneContent-medium-width;
    }

    .approvalInfo_col_ticketText_size_medium {
        width: @approvalInfo-ticketText-medium-width;
    }

    .approvalInfo_col_ticketContent_size_medium {
        width: @approvalInfo-ticketContent-medium-width;
        margin: @approvalInfo-ticketContent-medium-margin;
    }

    .approvalInfo_col_priceText_size_medium {
        width: @approvalInfo-priceText-medium-width;
        padding: @approvalInfo-priceText-medium-padding;
    }

    .approvalInfo_col_priceText {
        border-style: @approvalInfo-priceText-border-style;
        border-width: @approvalInfo-priceText-border-width;
    }

    .approvalInfo_col_priceContent_size_medium {
        width: @approvalInfo-priceContent-medium-width;
        padding: @approvalInfo-priceContent-medium-padding;
    }

    .approvalInfo_col_priceContent {
        border-style: @approvalInfo-priceContent-border-style;
        border-width: @approvalInfo-priceContent-border-width;
    }

    .approvalInfo_col_activityName_size_medium {
        width: @approvalInfo-activityName-medium-width;
        margin: @approvalInfo-activityName-medium-margin;
    }

    .approvalInfo_col_time_size_medium {
        width: @approvalInfo-time-medium-width;
        margin: @approvalInfo-time-medium-margin;
    }

    .approvalInfo_col_place_size_medium {
        width: @approvalInfo-place-medium-width;
        margin: @approvalInfo-place-medium-margin;
    }

    .approvalInfo_col_confirmBtn_size_medium {
        width: @approvalInfo-confirmBtn-medium-width;
        margin: @approvalInfo-confirmBtn-medium-margin;
    }

    .approvalInfo_col_cancelBtn_size_medium {
        width: @approvalInfo-cancelBtn-medium-width;
        margin: @approvalInfo-cancelBtn-medium-margin;
    }

    .approvalInfo_col_codeDialog_size_medium {
        width: @approvalInfo-codeDialog-medium-width;
        height: @approvalInfo-codeDialog-medium-height;
    }

    .approvalInfo_col_alert_size_medium {
        width: @approvalInfo-alert-medium-width;
    }

    .approvalInfo_col_passText_size_medium {
        width: @approvalInfo-passText-medium-width;
        margin: @approvalInfo-passText-medium-margin;
        align-items: @approvalInfo-passText-medium-horizontal-position;
    }


    .approvalInfo_dialog {
        position: fixed;
        left: 50%;
        top: 50%; /*新增*/
        transform: translate(-50%, -50%);
    }

    .approvalInfo_row_codeDialog {  /*新增*/
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