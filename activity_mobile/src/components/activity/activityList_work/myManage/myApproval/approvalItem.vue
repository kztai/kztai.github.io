<template>
    <div class="approvalItem_container">
        <div class="approvalItem_row approvalItem_row_approvalItemRow">
            <div :class="{approvalItem_col:true,approvalItem_col_approvalItemWindow:true,approvalItem_col_approvalItemWindow_size_large:attr.size==='large',approvalItem_col_approvalItemWindow_size_medium:attr.size==='medium',approvalItem_col_approvalItemWindow_size_small:attr.size==='small',approvalItem_col_approvalItemWindow_size_min:attr.size==='min',approvalItem_col_approvalItemWindow_checked:attr.checked,approvalItem_col_approvalItemWindow_disable:attr.disabled}">

                <div class="approvalItem_row approvalItem_row_row1">
                    <div :class="{approvalItem_col:true,approvalItem_col_itemWrap:true,approvalItem_col_itemWrap_size_large:attr.size==='large',approvalItem_col_itemWrap_size_medium:attr.size==='medium',approvalItem_col_itemWrap_size_small:attr.size==='small',approvalItem_col_itemWrap_size_min:attr.size==='min',approvalItem_col_itemWrap_checked:attr.checked,approvalItem_col_itemWrap_disable:attr.disabled}">

                        <div class="approvalItem_row approvalItem_row_row2">
                            <div :class="{approvalItem_col:true,approvalItem_col_item:true,approvalItem_col_item_size_large:attr.size==='large',approvalItem_col_item_size_medium:attr.size==='medium',approvalItem_col_item_size_small:attr.size==='small',approvalItem_col_item_size_min:attr.size==='min',approvalItem_col_item_checked:attr.checked,approvalItem_col_item_disable:attr.disabled}">

                                <div class="approvalItem_row approvalItem_row_row3">
                                    <div @click="activityClick" :class="{approvalItem_col:true,approvalItem_col_itemTop:true,approvalItem_col_itemTop_size_large:attr.size==='large',approvalItem_col_itemTop_size_medium:attr.size==='medium',approvalItem_col_itemTop_size_small:attr.size==='small',approvalItem_col_itemTop_size_min:attr.size==='min',approvalItem_col_itemTop_checked:attr.checked,approvalItem_col_itemTop_disable:attr.disabled}">

                                        <div class="approvalItem_row approvalItem_row_row5">
                                            <div :class="{approvalItem_col:true,approvalItem_col_img:true,approvalItem_col_img_size_large:attr.size==='large',approvalItem_col_img_size_medium:attr.size==='medium',approvalItem_col_img_size_small:attr.size==='small',approvalItem_col_img_size_min:attr.size==='min',approvalItem_col_img_checked:attr.checked,approvalItem_col_img_disable:attr.disabled}">

                                                <lm2b-image
                                                        ref="imgRef"
                                                        refId="imgRef"
                                                        v-show="pvt_isShow.img === 'imgRef'"
                                                        :paraVarPair="pvt_img.imgRef.paraVarPair"
                                                        :para="pvt_img.imgRef.para"
                                                        :attr="pvt_img.imgRef.attr">
                                                </lm2b-image>
                                            </div>
                                            <div :class="{approvalItem_col:true,approvalItem_col_content:true,approvalItem_col_content_size_large:attr.size==='large',approvalItem_col_content_size_medium:attr.size==='medium',approvalItem_col_content_size_small:attr.size==='small',approvalItem_col_content_size_min:attr.size==='min',approvalItem_col_content_checked:attr.checked,approvalItem_col_content_disable:attr.disabled}">

                                                <div class="approvalItem_row approvalItem_row_row6">
                                                    <div :class="{approvalItem_col:true,approvalItem_col_title:true,approvalItem_col_title_size_large:attr.size==='large',approvalItem_col_title_size_medium:attr.size==='medium',approvalItem_col_title_size_small:attr.size==='small',approvalItem_col_title_size_min:attr.size==='min',approvalItem_col_title_checked:attr.checked,approvalItem_col_title_disable:attr.disabled}">

                                                        <lm2b-link-text
                                                                ref="titleRef"
                                                                refId="titleRef"
                                                                v-show="pvt_isShow.title === 'titleRef'"
                                                                :paraVarPair="pvt_title.titleRef.paraVarPair"
                                                                :para="pvt_title.titleRef.para"
                                                                :attr="pvt_title.titleRef.attr">
                                                        </lm2b-link-text>
                                                    </div>
                                                </div>


                                                <div class="approvalItem_row approvalItem_row_row9">
                                                    <div :class="{approvalItem_col:true,approvalItem_col_activityTime:true,approvalItem_col_activityTime_size_large:attr.size==='large',approvalItem_col_activityTime_size_medium:attr.size==='medium',approvalItem_col_activityTime_size_small:attr.size==='small',approvalItem_col_activityTime_size_min:attr.size==='min',approvalItem_col_activityTime_checked:attr.checked,approvalItem_col_activityTime_disable:attr.disabled}">

                                                        <lm2b-link-text
                                                                ref="activityTimeRef"
                                                                refId="activityTimeRef"
                                                                v-show="pvt_isShow.activityTime === 'activityTimeRef'"
                                                                :paraVarPair="pvt_activityTime.activityTimeRef.paraVarPair"
                                                                :para="pvt_activityTime.activityTimeRef.para"
                                                                :attr="pvt_activityTime.activityTimeRef.attr">
                                                        </lm2b-link-text>
                                                    </div>
                                                </div>


                                                <div class="approvalItem_row approvalItem_row_row7">
                                                    <div :class="{approvalItem_col:true,approvalItem_col_time:true,approvalItem_col_time_size_large:attr.size==='large',approvalItem_col_time_size_medium:attr.size==='medium',approvalItem_col_time_size_small:attr.size==='small',approvalItem_col_time_size_min:attr.size==='min',approvalItem_col_time_checked:attr.checked,approvalItem_col_time_disable:attr.disabled}">

                                                        <lm2b-link-text
                                                                ref="timeRef"
                                                                refId="timeRef"
                                                                v-show="pvt_isShow.time === 'timeRef'"
                                                                :paraVarPair="pvt_time.timeRef.paraVarPair"
                                                                :para="pvt_time.timeRef.para"
                                                                :attr="pvt_time.timeRef.attr">
                                                        </lm2b-link-text>
                                                    </div>
                                                    <div @click.stop="" :class="{approvalItem_col:true,approvalItem_col_reasonBtn:true,approvalItem_col_reasonBtn_size_large:attr.size==='large',approvalItem_col_reasonBtn_size_medium:attr.size==='medium',approvalItem_col_reasonBtn_size_small:attr.size==='small',approvalItem_col_reasonBtn_size_min:attr.size==='min',approvalItem_col_reasonBtn_checked:attr.checked,approvalItem_col_reasonBtn_disable:attr.disabled}">

                                                        <lm2b-link-text
                                                                ref="reasonBtnRef"
                                                                refId="reasonBtnRef"
                                                                v-show="pvt_isShow.reasonBtn === 'reasonBtnRef'"
                                                                :paraVarPair="pvt_reasonBtn.reasonBtnRef.paraVarPair"
                                                                :para="pvt_reasonBtn.reasonBtnRef.para"
                                                                :attr="pvt_reasonBtn.reasonBtnRef.attr">
                                                        </lm2b-link-text>
                                                    </div>
                                                    <div :class="{approvalItem_col:true,approvalItem_col_status:true,approvalItem_col_status_size_large:attr.size==='large',approvalItem_col_status_size_medium:attr.size==='medium',approvalItem_col_status_size_small:attr.size==='small',approvalItem_col_status_size_min:attr.size==='min',approvalItem_col_status_checked:attr.checked,approvalItem_col_status_disable:attr.disabled}">

                                                        <lm2b-link-text
                                                                ref="statusRef"
                                                                refId="statusRef"
                                                                v-show="pvt_isShow.status === 'statusRef'"
                                                                :paraVarPair="pvt_status.statusRef.paraVarPair"
                                                                :para="pvt_status.statusRef.para"
                                                                :attr="pvt_status.statusRef.attr">
                                                        </lm2b-link-text>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="approvalItem_row approvalItem_row_row4">
                                    <div :class="{approvalItem_col:true,approvalItem_col_itemBottom:true,approvalItem_col_itemBottom_size_large:attr.size==='large',approvalItem_col_itemBottom_size_medium:attr.size==='medium',approvalItem_col_itemBottom_size_small:attr.size==='small',approvalItem_col_itemBottom_size_min:attr.size==='min',approvalItem_col_itemBottom_checked:attr.checked,approvalItem_col_itemBottom_disable:attr.disabled}">

                                        <div class="approvalItem_row approvalItem_row_row8">
                                            <div :class="{approvalItem_col:true,approvalItem_col_browse:true,approvalItem_col_browse_size_large:attr.size==='large',approvalItem_col_browse_size_medium:attr.size==='medium',approvalItem_col_browse_size_small:attr.size==='small',approvalItem_col_browse_size_min:attr.size==='min',approvalItem_col_browse_checked:attr.checked,approvalItem_col_browse_disable:attr.disabled}">

                                                <lm2b-link-text
                                                        ref="budgetRef"
                                                        refId="budgetRef"
                                                        v-show="pvt_isShow.budget === 'budgetRef'"
                                                        :paraVarPair="pvt_budget.budgetRef.paraVarPair"
                                                        :para="pvt_budget.budgetRef.para"
                                                        :attr="pvt_budget.budgetRef.attr">
                                                </lm2b-link-text>
                                            </div>
                                            <div :class="{approvalItem_col:true,approvalItem_col_turn:true,approvalItem_col_turn_size_large:attr.size==='large',approvalItem_col_turn_size_medium:attr.size==='medium',approvalItem_col_turn_size_small:attr.size==='small',approvalItem_col_turn_size_min:attr.size==='min',approvalItem_col_turn_checked:attr.checked,approvalItem_col_turn_disable:attr.disabled}">

                                                <lm2b-link-text
                                                        ref="priceRef"
                                                        refId="priceRef"
                                                        v-show="pvt_isShow.price === 'priceRef'"
                                                        :paraVarPair="pvt_price.priceRef.paraVarPair"
                                                        :para="pvt_price.priceRef.para"
                                                        :attr="pvt_price.priceRef.attr">
                                                </lm2b-link-text>
                                            </div>
                                            <div :class="{approvalItem_col:true,approvalItem_col_apply:true,approvalItem_col_apply_size_large:attr.size==='large',approvalItem_col_apply_size_medium:attr.size==='medium',approvalItem_col_apply_size_small:attr.size==='small',approvalItem_col_apply_size_min:attr.size==='min',approvalItem_col_apply_checked:attr.checked,approvalItem_col_apply_disable:attr.disabled}">

                                                <lm2b-link-text
                                                        ref="ticketNumRef"
                                                        refId="ticketNumRef"
                                                        v-show="pvt_isShow.ticketNum === 'ticketNumRef'"
                                                        :paraVarPair="pvt_ticketNum.ticketNumRef.paraVarPair"
                                                        :para="pvt_ticketNum.ticketNumRef.para"
                                                        :attr="pvt_ticketNum.ticketNumRef.attr">
                                                </lm2b-link-text>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div :class="{approvalItem_col:true,approvalItem_col_closeBtn:true,approvalItem_col_closeBtn_size_large:attr.size==='large',approvalItem_col_closeBtn_size_medium:attr.size==='medium',approvalItem_col_closeBtn_size_small:attr.size==='small',approvalItem_col_closeBtn_size_min:attr.size==='min',approvalItem_col_closeBtn_checked:attr.checked,approvalItem_col_closeBtn_disable:attr.disabled}">

                                <lm2b-button
                                        ref="passBtnRef"
                                        refId="passBtnRef"
                                        v-show="pvt_isShow.passBtn === 'passBtnRef'"
                                        :paraVarPair="pvt_passBtn.passBtnRef.paraVarPair"
                                        :para="pvt_passBtn.passBtnRef.para"
                                        :attr="pvt_passBtn.passBtnRef.attr">
                                </lm2b-button>
                            </div>
                            <div :class="{approvalItem_col:true,approvalItem_col_deleteBtn:true,approvalItem_col_deleteBtn_size_large:attr.size==='large',approvalItem_col_deleteBtn_size_medium:attr.size==='medium',approvalItem_col_deleteBtn_size_small:attr.size==='small',approvalItem_col_deleteBtn_size_min:attr.size==='min',approvalItem_col_deleteBtn_checked:attr.checked,approvalItem_col_deleteBtn_disable:attr.disabled}">

                                <lm2b-button
                                        ref="rejectBtnRef"
                                        refId="rejectBtnRef"
                                        v-show="pvt_isShow.rejectBtn === 'rejectBtnRef'"
                                        :paraVarPair="pvt_rejectBtn.rejectBtnRef.paraVarPair"
                                        :para="pvt_rejectBtn.rejectBtnRef.para"
                                        :attr="pvt_rejectBtn.rejectBtnRef.attr">
                                </lm2b-button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="approvalItem_row approvalItem_row_confirmDialog" v-show="confirmDialogWrap">
            <div :class="{approvalItem_col:true,approvalItem_col_confirmDialog:true,approvalItem_col_confirmDialog_size_large:attr.size==='large',approvalItem_col_confirmDialog_size_medium:attr.size==='medium',approvalItem_col_confirmDialog_size_small:attr.size==='small',approvalItem_col_confirmDialog_size_min:attr.size==='min',approvalItem_col_confirmDialog_checked:attr.checked,approvalItem_col_confirmDialog_disable:attr.disabled,approvalItem_dialog:true}">

                <confirm-dialog
                        ref="confirmDialogRef"
                        refId="confirmDialogRef"
                        v-if="pvt_isShow.confirmDialog === 'confirmDialogRef'"
                        :paraVarPair="pvt_confirmDialog.confirmDialogRef.paraVarPair"
                        :para="pvt_confirmDialog.confirmDialogRef.para"
                        :attr="pvt_confirmDialog.confirmDialogRef.attr">
                </confirm-dialog>
            </div>
        </div>
        <div class="approvalItem_row approvalItem_row_rejectDialog" v-show="rejectDialogWrap">
            <div :class="{approvalItem_col:true,approvalItem_col_rejectDialog:true,approvalItem_col_rejectDialog_size_large:attr.size==='large',approvalItem_col_rejectDialog_size_medium:attr.size==='medium',approvalItem_col_rejectDialog_size_small:attr.size==='small',approvalItem_col_rejectDialog_size_min:attr.size==='min',approvalItem_col_rejectDialog_checked:attr.checked,approvalItem_col_rejectDialog_disable:attr.disabled,approvalItem_dialog:true}">

                <rejectDialog
                        ref="rejectDialogRef"
                        refId="rejectDialogRef"
                        v-if="pvt_isShow.rejectDialog === 'rejectDialogRef'"
                        :paraVarPair="pvt_rejectDialog.rejectDialogRef.paraVarPair"
                        :para="pvt_rejectDialog.rejectDialogRef.para"
                        :attr="pvt_rejectDialog.rejectDialogRef.attr">
                </rejectDialog>
            </div>
        </div>
        <div class="approvalItem_row approvalItem_row_budgetDialog" v-show="budgetDialogWrap">
            <div :class="{approvalItem_col:true,approvalItem_col_budgetDialog:true,approvalItem_col_budgetDialog_size_large:attr.size==='large',approvalItem_col_budgetDialog_size_medium:attr.size==='medium',approvalItem_col_budgetDialog_size_small:attr.size==='small',approvalItem_col_budgetDialog_size_min:attr.size==='min',approvalItem_col_budgetDialog_checked:attr.checked,approvalItem_col_budgetDialog_disable:attr.disabled,approvalItem_dialog:true}">

                <budgetDialog
                        ref="budgetDialogRef"
                        refId="budgetDialogRef"
                        v-if="pvt_isShow.budgetDialog === 'budgetDialogRef'"
                        :paraVarPair="pvt_budgetDialog.budgetDialogRef.paraVarPair"
                        :para="pvt_budgetDialog.budgetDialogRef.para"
                        :attr="pvt_budgetDialog.budgetDialogRef.attr">
                </budgetDialog>
            </div>
        </div>
        <div class="approvalItem_row approvalItem_row_detailDialog" v-show="detailDialogWrap">
            <div :class="{approvalItem_col:true,approvalItem_col_detailDialog:true,approvalItem_col_detailDialog_size_large:attr.size==='large',approvalItem_col_detailDialog_size_medium:attr.size==='medium',approvalItem_col_detailDialog_size_small:attr.size==='small',approvalItem_col_detailDialog_size_min:attr.size==='min',approvalItem_col_detailDialog_checked:attr.checked,approvalItem_col_detailDialog_disable:attr.disabled,approvalItem_dialog:true}">

                <approvalDetail
                        ref="detailDialogRef"
                        refId="detailDialogRef"
                        v-if="pvt_isShow.detailDialog === 'detailDialogRef'"
                        :paraVarPair="pvt_detailDialog.detailDialogRef.paraVarPair"
                        :para="pvt_detailDialog.detailDialogRef.para"
                        :attr="pvt_detailDialog.detailDialogRef.attr">
                </approvalDetail>
            </div>
        </div>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';
    import confirmDialog from '../../../activityManage/confirmDialog';
    import budgetDialog from './budgetDialog';
    import rejectDialog from './rejectDialog';
    import approvalDetail from './approvalDetail';

    export default {
        components: {confirmDialog,rejectDialog, budgetDialog, approvalDetail},
        inject: ['sys'],
        props: ['refId', 'para', 'attr', 'paraVarPair', 'number'],
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ['img', 'title', 'time', 'status', 'budget', 'price', 'ticketNum', 'passBtn', 'rejectBtn', 'confirmDialog', 'activityTime', 'reasonBtn', 'budgetDialog', 'rejectDialog', 'detailDialog'],
                    subModule: ['imgRef', 'titleRef', 'timeRef', 'statusRef', 'budgetRef', 'priceRef', 'ticketNumRef', 'passBtnRef',  'rejectBtnRef', 'confirmDialogRef', 'activityTimeRef', 'reasonBtnRef', 'budgetDialogRef', 'rejectDialogRef', 'detailDialogRef'],
                },
                pvt_isShow: {
                    img: null,
                    title: null,
                    time: null,
                    status: null,
                    budget: null,
                    price: null,
                    ticketNum: null,
                    passBtn: null,
                    backBtn: null,
                    rejectBtn: null,
                    confirmDialog: null,
                    activityTime: null,
                    reasonBtn: null,
                    budgetDialog: null,
                    rejectDialog: null,
                    detailDialog: null,
                },
                pvt_eventPortInput: ['activityApprovalEvent', 'activityClickEvent'],

                mac: mac.mac,

                activityTime: '12:34',
                createTime: '12:34',
                activityStatus: '进行中',
                budgetNum: 122,
                priceNum: 333,
                ticketNum: 567,
                confirmDialogWrap: false,
                budgetDialogWrap: false,
                rejectDialogWrap: false,
                detailDialogWrap: false,
            };
        },
        watch: {
            curActivityId: {
                handler: function (val, oldVal) {
                    if (val !== oldVal && this.paraVarPair.curActivityId) {
                        if (this.number !== undefined) { // 循环
                            this.$parent[this.paraVarPair.curActivityId][this.number] = val
                        } else { // 非循环
                            this.$parent[this.paraVarPair.curActivityId] = val
                        }
                    }
                },
                deep: true
            },
        },
        computed: {
            pvt_img: function () {
                return {
                    imgRef: {
                        paraVarPair: {},
                        para: {
                            // image: [{
                            //     $table: this.mac.tb.groupActivity,
                            //     $arrField: [this.mac.fd.groupActivity.poster],
                            //     $arrValue: [this.para.curActivityId]
                            // }],
                            image: 'http://img2.imgtn.bdimg.com/it/u=2915512436,1541993188&fm=26&gp=0.jpg',
                        },
                        attr: {},
                    },
                };
            },
            pvt_title: function () {
                return {
                    titleRef: {
                        paraVarPair: {},
                        para: {
                            textData: [{
                                $table: this.mac.tb.groupActivity,
                                $arrField: [this.mac.fd.groupActivity.name],
                                $arrValue: [this.para.curActivityId]
                            }],
                      /*      textData: [{
                                $table: this.mac.tb.groupActivity,
                                $arrField: [this.mac.fd.groupActivity.abstract],
                                $arrValue: [this.curActivityId]
                            }],*/
                        },
                        attr: {
                            fontWeight: true,
                            color: '#333',
                            fontSize: '14px',
                            ellipsis: true
                        },
                    },
                };
            },
            pvt_time: function () {
                return {
                    timeRef: {
                        paraVarPair: {
                            textData: 'createTime',
                        },
                        para: {
                            textData: this.createTime,
                        },
                        attr: {
                            color: '#999',
                            fontSize: '12px',
                        },
                    },
                };
            },
            pvt_activityTime: function () {
                return {
                    activityTimeRef: {
                        paraVarPair: {
                            textData: 'activityTime',
                        },
                        para: {
                            textData: this.activityTime,
                        },
                        attr: {
                            color: '#999',
                            fontSize: '12px',
                        },
                    },
                };
            },
            pvt_status: function () {
                return {
                    statusRef: {
                        paraVarPair: {
                            textData: 'activityStatus',
                        },
                        para: {
                            textData: this.activityStatus,
                        },
                        attr: {
                            color: '#999',
                            fontSize: '12px',
                        },
                    },
                };
            },
            pvt_budget: function () {
                return {
                    budgetRef: {
                        paraVarPair: {
                            textData: 'budgetNum',
                        },
                        para: {
                            textData: this.budgetNum,
                        },
                        attr: {
                            icon: 'van-icon-balance-o',
                            color: '#FC7122',
                            fontSize: '12px',
                            isClick: true
                        },
                    },
                };
            },
            pvt_price: function () {
                return {
                    priceRef: {
                        paraVarPair: {
                            textData: 'priceNum',
                        },
                        para: {
                            textData: this.priceNum,
                        },
                        attr: {
                            color: '#999',
                            fontSize: '12px',
                            icon: 'van-icon-orders-o',
                        },
                    },
                };
            },
            pvt_ticketNum: function () {
                return {
                    ticketNumRef: {
                        paraVarPair: {
                            textData: 'ticketNum',
                        },
                        para: {
                            textData: this.ticketNum,
                        },
                        attr: {
                            color: '#999',
                            fontSize: '12px',
                            icon: 'van-icon-points',
                        },
                    },
                };
            },
            pvt_reasonBtn: function () {
                return {
                    reasonBtnRef: {
                        paraVarPair: {},
                        para: {
                            // name: ['', 'van-icon-warning-o'],
                            textData: ''
                        },
                        attr: {
                            icon: 'van-icon-warning-o',
                            color: '#12B0FF',
                            isClick: true
                        },
                    },
                };
            },
            pvt_passBtn: function () {
                return {
                    passBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['审批通过', ''],
                        },
                        attr: {
                            type: 'primary',
                            long: true,
                            width: '72px',
                            height: '124px'
                        },
                    },
                };
            },
            pvt_rejectBtn: function () {
                return {
                    rejectBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['审批拒绝', ''],
                        },
                        attr: {
                            type: 'danger',
                            long: true,
                            width: '72px',
                            height: '124px'
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
                    }
                };
            },
            pvt_rejectDialog: function () {
                return {
                    rejectDialogRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium'
                        },
                    }
                };
            },
            pvt_budgetDialog: function () {
                return {
                    budgetDialogRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium'
                        },
                    }
                };
            },         
            pvt_detailDialog: function () {
                return {
                    detailDialogRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium'
                        },
                    }
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
                let fnname = 'approvalItem_start';
                let dbFlag;
                let dbData;
                let tableName;
                let condition;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0,
                    refArr: ['imgRef', 'titleRef', 'timeRef', 'statusRef', 'budgetRef', 'priceRef', 'ticketNumRef', 'activityTimeRef', 'reasonBtnRef']
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
                            tableName = this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.para.curActivityId];
                            dbData[that.mac.fd.groupActivity.startTime] = [];
                            dbData[that.mac.fd.groupActivity.endTime] = [];
                            dbData[that.mac.fd.groupActivity.createTime] = [];
                            dbData[that.mac.fd.groupActivity.status] = [];
                            dbData[that.mac.fd.groupActivity.refuseReason] = [];

                            this.sys.api.recordRead(tableName, dbData, function (result) {
                                let startTime = dbData[that.mac.fd.groupActivity.startTime][0].slice(5);
                                let endTime = dbData[that.mac.fd.groupActivity.endTime][0].slice(5);

                                that.createTime = dbData[that.mac.fd.groupActivity.endTime][0].slice(5) + ' 创建活动';
                                that.activityTime = startTime + ' ~ ' + endTime;

                                switch (dbData[that.mac.fd.groupActivity.status][0]) {
                                    case that.mac.enum.groupActivity.status.check:
                                        that.activityStatus = '待审批';
                                        para.refArr.pop();
                                        para.refArr.push('rejectBtnRef', 'passBtnRef');
                                        break;
                                    case that.mac.enum.groupActivity.status.rejected:
                                        that.refuseReason = dbData[that.mac.fd.groupActivity.refuseReason][0];
                                        that.activityStatus = '审批拒绝';
                                        break;
                                    case that.mac.enum.groupActivity.status.released:
                                    case that.mac.enum.groupActivity.status.closed:
                                        para.refArr.pop();
                                        that.activityStatus = '审批通过';
                                        break;
                                }
                                para.nStep = 'getBudgetData';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'getBudgetData':
                            tableName = this.mac.tb.groupActivityBudgetForm;
                            condition = '';
                            dbData = {};
                            dbData[that.mac.fd.groupActivityBudgetForm.budgetAmount] = [];

                            this.sys.api.recordQuery(tableName, [that.para.curActivityId], condition, dbData, function (result) {
                                that.budgetNum = 0;
                                for(let i = 0; i < dbData[that.mac.fd.groupActivityBudgetForm.budgetAmount].length; i++) {
                                    that.budgetNum += dbData[that.mac.fd.groupActivityBudgetForm.budgetAmount][i];
                                }

                                para.nStep = 'getTicketData';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'getTicketData':
                            tableName = this.mac.tb.groupActivityTicketType;
                            condition = '';
                            dbData = {};
                            dbData[that.mac.fd.groupActivityTicketType.price] = [];
                            dbData[that.mac.fd.groupActivityTicketType.poll] = [];

                            this.sys.api.recordQuery(tableName, [that.para.curActivityId], condition, dbData, function (result) {
                                that.ticketNum = 0;
                                for(let i = 0; i < dbData[that.mac.fd.groupActivityTicketType.poll].length; i++) {
                                    that.ticketNum += dbData[that.mac.fd.groupActivityTicketType.poll][i];
                                }

                                let priceMin = Math.min.apply(null, dbData[that.mac.fd.groupActivityTicketType.price]);
                                let priceMax = Math.max.apply(null, dbData[that.mac.fd.groupActivityTicketType.price]);
                                priceMin === priceMax ? that.priceNum = '￥' + priceMax : that.priceNum = '￥' + priceMin + ' ~ ' + priceMax;

                                that.forceUpdateData(function () {
                                    para.nStep = 'start_sub';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                });
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'start_sub':
                            if (para.i >= para.refArr.length) {
                                para.i = 0;
                                para.nStep = 'hideBtn';
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
                        case 'hideBtn':
                            that.showSubModule(['passBtnRef', 'rejectBtnRef', 'reasonBtnRef'], false, function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showSubModule':
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
            activityClick: function () {
                let that = this;
                that.detailDialogWrap = true;
                that.showSubModule('detailDialogRef', true, function () {
                    that.sm.detailDialogRef.startModule(that.para.curActivityId, function () {
                    }, function () {
                    });
                }, function () {
                });
            },
            closeClick: function () {
                let that = this;
                let desc;

                if (that.ticketNum > 0) {
                    desc = '您的活动已有人报名，如需关闭，请通知已报名人活动的更改情况。'
                } else {
                    desc = '活动关闭后将无法恢复, 您确定要这样做吗?'
                }

                let data = {
                    ref: 'close',
                    title: '温馨提示',
                    desc: desc,
                    btnText: ['取消', '确定']
                };
                that.confirmDialogWrap = true;
                that.showSubModule('confirmDialogRef', true, function () {
                    that.sm.confirmDialogRef.startModule(data, function () {
                    }, function () {
                    });
                }, function () {
                });
            },
            activityClose: function (successCallBack, errorCallBack) {

            },



            approvalReject(value,successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'approvalItem_approvalReject';
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
                        case 'getTerActivityId':
                            tableName = that.mac.tb.groupActivity;
                            record = [that.para.curActivityId];
                            that.sys.api.getSourceRecord(tableName, record, function (result) {
                                para.terActivityId = result[0];
                                para.nStep = 'statusModify';
                                if (++dbFlag === 2) {
                                    that.approvalReject(value,successCallBack, errorCallBack)
                                }
                            }, function (error) {
                            });
                            break;
                        case 'statusModify':
                            tableName = that.mac.tb.groupActivity;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.para.curActivityId];
                            dbData[that.mac.fd.groupActivity.status] = [that.mac.enum.groupActivity.status.rejected];
                            dbData[that.mac.fd.groupActivity.refuseReason] = [value];

                            that.sys.api.recordModify(tableName, dbData, function () {
                                that.ep.activityApprovalEvent(para.terActivityId, value);
                                that.$notify({type: 'success', message: '审批拒绝成功！'});
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.approvalReject(value,successCallBack, errorCallBack)
                                }
                            }, function (error) {
                            });
                            break;
                        case 'end':
                            this.rejectDialogWrap = false;
                            para.successCallBack();
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },

            approvalPass(successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'approvalItem_approvalPass';
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
                        case 'getTerActivityId':
                            tableName = that.mac.tb.groupActivity;
                            record = [that.para.curActivityId];
                            that.sys.api.getSourceRecord(tableName, record, function (result) {
                                para.terActivityId = result[0];
                                para.nStep = 'statusModify';
                                if (++dbFlag === 2) {
                                    that.approvalPass(successCallBack, errorCallBack)
                                }
                            }, function (error) {
                            });
                            break;
                        case 'statusModify':
                            tableName = that.mac.tb.groupActivity;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.para.curActivityId];
                            dbData[that.mac.fd.groupActivity.status] = [that.mac.enum.groupActivity.status.released];

                            that.sys.api.recordModify(tableName, dbData, function () {
                                that.ep.activityApprovalEvent(para.terActivityId, null);
                                that.$notify({type: 'success', message: '审批通过成功！'});
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.approvalPass(successCallBack, errorCallBack)
                                }
                            }, function (error) {
                            });
                            break;
                        case 'refresh':
                            that.startModule(function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.approvalPass(successCallBack, errorCallBack)
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

            getTime: function (time) {
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

            dialogConfirmWrap: function (refId) {
                this.confirmDialogWrap = false;
                if(refId === 'pass') this.approvalPass(function() {}, function() {});
            },
            showBudgetDialog() {
                let that = this;
                that.budgetDialogWrap = true;
                that.showSubModule('budgetDialogRef', true, function () {
                    that.sm.budgetDialogRef.startModule(that.para.curActivityId, function () {
                    }, function () {
                    });
                }, function () {
                });
            },
            showRejectDialog() {
                let that = this;
                that.rejectDialogWrap = true;
                that.showSubModule('rejectDialogRef', true, function () {
                    that.sm.rejectDialogRef.startModule(function () {
                    }, function () {
                    });
                }, function () {
                });
            },
            showReasonDialog: function () {
                let that = this;
                let data = {
                    ref: 'reason',
                    title: '拒绝理由',
                    desc: that.refuseReason,
                    btnText: ['关闭']
                };
                that.confirmDialogWrap = true;
                that.showSubModule('confirmDialogRef', true, function () {
                    that.sm.confirmDialogRef.startModule(data, function () {
                    }, function () {
                    });
                }, function () {
                });
            },
            showPassDialog: function () {
                let that = this;
                let data = {
                    ref: 'pass',
                    title: '温馨提示',
                    desc: '确定同意通过审批吗?',
                    btnText: ['取消', '确定']
                };
                that.confirmDialogWrap = true;
                that.showSubModule('confirmDialogRef', true, function () {
                    that.sm.confirmDialogRef.startModule(data, function () {
                    }, function () {
                    });
                }, function () {
                });
            },
            
            confirmDialogCancel: function (refId) {
                this.confirmDialogWrap = false;
            },     
            hideBudgetDialog: function (refId) {
                this.budgetDialogWrap = false;
            },     
            hideRejectDialog: function (refId) {
                this.rejectDialogWrap = false;
            },
            hideDetailDialog: function (refId) {
                this.detailDialogWrap = false;
            },


            passBtnRef_buttonClickEvent: function () {
                this.showPassDialog();
            },
            rejectBtnRef_buttonClickEvent: function () {
                this.showRejectDialog();
            },
            reasonBtnRef_textClickEvent: function () {
                this.showReasonDialog();
            },
            confirmDialogRef_confirmEvent: function (refId) {
                this.dialogConfirmWrap(refId);
            },
            confirmDialogRef_cancelEvent: function (refId) {
                this.confirmDialogCancel(refId);
            },
            budgetDialogRef_backEvent: function () {
                this.hideBudgetDialog();
            },
            budgetRef_textClickEvent() {
                this.showBudgetDialog()
            },
            rejectDialogRef_confirmEvent: function (value,successCallBack, errorCallBack) {
                this.approvalReject(value,successCallBack, errorCallBack);
            },
            rejectDialogRef_cancelEvent: function () {
                this.hideRejectDialog();
            },
            detailDialogRef_backEvent() {
                this.hideDetailDialog();
            },
            detailDialogRef_activityApprovalEvent(terActivityId, rejectReason) {
                this.ep.activityApprovalEvent(terActivityId, rejectReason);
            }
        },
    };
</script>
<style lang="less" scoped>
    @import "../../../../../assets/var_kzt"; /*新增*/
    .approvalItem_container {
    }

    .approvalItem_row {
        display: flex;
        flex: 1;
    }

    .approvalItem_col {
        display: flex;
        flex-direction: column;
    }

    .approvalItem_col_approvalItemWindow_size_medium {
        width: @releaseItem-releaseItemWindow-medium-width;
        margin: @releaseItem-releaseItemWindow-medium-margin;
    }

    .approvalItem_col_approvalItemWindow {
        background-color: mix(@releaseItem-releaseItemWindow-background-color, #fff, @releaseItem-releaseItemWindow-background-color-opacity);
    }

    .approvalItem_col_itemWrap_size_medium {
        width: @releaseItem-itemWrap-medium-width;
        overflow: auto;
    }

    .approvalItem_col_item_size_medium {
        width: @releaseItem-item-medium-width;
        flex: 0 0 100%;
    }

    .approvalItem_col_closeBtn_size_medium {
        width: @releaseItem-closeBtn-medium-width;
        height: @releaseItem-closeBtn-medium-height;
    }

    .approvalItem_col_backBtn_size_medium {
        width: @releaseItem-backBtn-medium-width;
    }

    .approvalItem_col_deleteBtn_size_medium {
        width: @releaseItem-deleteBtn-medium-width;
    }

    .approvalItem_col_itemTop_size_medium {
        width: @releaseItem-itemTop-medium-width;
        padding: @releaseItem-itemTop-medium-padding;
    }

    .approvalItem_col_itemTop {
        border-style: @releaseItem-itemTop-border-style;
        border-width: @releaseItem-itemTop-border-width;
        border-color: mix(@releaseItem-itemTop-border-color, #fff, @releaseItem-itemTop-hover-border-color-opacity);
        box-sizing: border-box;
    }

    .approvalItem_col_itemBottom_size_medium {
        width: @releaseItem-itemBottom-medium-width;
        padding: @releaseItem-itemBottom-medium-padding;
        box-sizing: border-box;
    }

    .approvalItem_col_img_size_medium {
        width: @releaseItem-img-medium-width;
        height: @approvalItem-img-medium-height;
    }

    .approvalItem_col_content_size_medium {
        width: @releaseItem-content-medium-width;
        padding: @approvalItem-content-medium-padding;
        box-sizing: border-box;
    }

    .approvalItem_col_title_size_medium {
        width: @releaseItem-title-medium-width;
        margin: @releaseItem-title-medium-margin;
    }

    .approvalItem_col_activityTime_size_medium {
        width: @releaseItem-title-medium-width;
        margin: @releaseItem-title-medium-margin;
    }

    .approvalItem_col_time_size_medium {
        width: @approvalItem-time-medium-width;
    }

    .approvalItem_col_status_size_medium {
        width: @approvalItem-status-medium-width;
        align-items: @approvalItem-status-medium-horizontal-position;
    }

    .approvalItem_col_reasonBtn_size_medium {
        width: @approvalItem-reasonBtn-medium-width;
        align-items: @approvalItem-reasonBtn-medium-horizontal-position;
    }

    .approvalItem_col_browse_size_medium {
        width: @releaseItem-browse-medium-width;
        align-items: @releaseItem-browse-medium-horizontal-position;
    }

    .approvalItem_col_turn_size_medium {
        width: @releaseItem-turn-medium-width;
        align-items: @releaseItem-turn-medium-horizontal-position;
    }

    .approvalItem_col_apply_size_medium {
        width: @releaseItem-apply-medium-width;
        align-items: @releaseItem-apply-medium-horizontal-position;
    }

    .approvalItem_row_confirmDialog {
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
    .approvalItem_row_rejectDialog {
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
    .approvalItem_row_budgetDialog {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: #fff;
        z-index: 12;
    }

    .approvalItem_col_budgetDialog_size_medium {
        position: absolute;
        left: 50%;
        top: 50%; /*新增*/
        transform: translate(-50%, -50%);
    }
    .approvalItem_col_budgetDialog_size_medium {
        width: 100%;
        height: 100%;
        background-color: #f4f4f4;
    }
    .approvalItem_col_rejectDialog_size_medium {
        position: absolute;
        left: 50%;
        top: 50%; /*新增*/
        transform: translate(-50%, -50%);
        width: 300px;
    }
    .approvalItem_col_confirmDialog_size_medium {
        position: absolute;
        left: 50%;
        top: 50%; /*新增*/
        transform: translate(-50%, -50%);
    }
    
    .approvalItem_col_detailDialog_size_medium {
        display: flex;
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, .4);
        z-index: 100;
        overflow: auto;
    }
</style>