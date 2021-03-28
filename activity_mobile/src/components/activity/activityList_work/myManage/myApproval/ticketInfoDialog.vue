<template>
    <div v-show="pvt_isWinShow.ticketInfoDialogWindow"
         :class="{ticketInfoDialog_container:true,ticketInfoDialog_col:true,ticketInfoDialog_col_ticketInfoDialogWindow:true,ticketInfoDialog_col_ticketInfoDialogWindow_size_large:attr.size==='large',ticketInfoDialog_col_ticketInfoDialogWindow_size_medium:attr.size==='medium',ticketInfoDialog_col_ticketInfoDialogWindow_size_small:attr.size==='small',ticketInfoDialog_col_ticketInfoDialogWindow_size_min:attr.size==='min',ticketInfoDialog_col_ticketInfoDialogWindow_checked:attr.checked,ticketInfoDialog_col_ticketInfoDialogWindow_disable:attr.disabled}">

        <div class="ticketInfoDialog_row ticketInfoDialog_row_row1">
            <div v-show="pvt_isWinShow.content"
                 :class="{ticketInfoDialog_col:true,ticketInfoDialog_col_content:true,ticketInfoDialog_col_content_size_large:attr.size==='large',ticketInfoDialog_col_content_size_medium:attr.size==='medium',ticketInfoDialog_col_content_size_small:attr.size==='small',ticketInfoDialog_col_content_size_min:attr.size==='min',ticketInfoDialog_col_content_checked:attr.checked,ticketInfoDialog_col_content_disable:attr.disabled}">

                <div class="ticketInfoDialog_row ticketInfoDialog_row_row3">
                    <div v-show="pvt_isWinShow.title"
                         :class="{ticketInfoDialog_col:true,ticketInfoDialog_col_title:true,ticketInfoDialog_col_title_size_large:attr.size==='large',ticketInfoDialog_col_title_size_medium:attr.size==='medium',ticketInfoDialog_col_title_size_small:attr.size==='small',ticketInfoDialog_col_title_size_min:attr.size==='min',ticketInfoDialog_col_title_checked:attr.checked,ticketInfoDialog_col_title_disable:attr.disabled}">

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
                <div class="ticketInfoDialog_row ticketInfoDialog_row_row4">
                    <div v-show="pvt_isWinShow.price"
                         :class="{ticketInfoDialog_col:true,ticketInfoDialog_col_price:true,ticketInfoDialog_col_price_size_large:attr.size==='large',ticketInfoDialog_col_price_size_medium:attr.size==='medium',ticketInfoDialog_col_price_size_small:attr.size==='small',ticketInfoDialog_col_price_size_min:attr.size==='min',ticketInfoDialog_col_price_checked:attr.checked,ticketInfoDialog_col_price_disable:attr.disabled}">

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
                <div class="ticketInfoDialog_row ticketInfoDialog_row_row5">
                    <div v-show="pvt_isWinShow.num"
                         :class="{ticketInfoDialog_col:true,ticketInfoDialog_col_num:true,ticketInfoDialog_col_num_size_large:attr.size==='large',ticketInfoDialog_col_num_size_medium:attr.size==='medium',ticketInfoDialog_col_num_size_small:attr.size==='small',ticketInfoDialog_col_num_size_min:attr.size==='min',ticketInfoDialog_col_num_checked:attr.checked,ticketInfoDialog_col_num_disable:attr.disabled}">

                        <lm2b-link-text
                                ref="numRef"
                                refId="numRef"
                                v-show="pvt_isShow.num === 'numRef'"
                                :paraVarPair="pvt_num.numRef.paraVarPair"
                                :para="pvt_num.numRef.para"
                                :attr="pvt_num.numRef.attr">
                        </lm2b-link-text>
                    </div>
                </div>
                <div class="ticketInfoDialog_row ticketInfoDialog_row_row6">
                    <div v-show="pvt_isWinShow.approval"
                         :class="{ticketInfoDialog_col:true,ticketInfoDialog_col_approval:true,ticketInfoDialog_col_approval_size_large:attr.size==='large',ticketInfoDialog_col_approval_size_medium:attr.size==='medium',ticketInfoDialog_col_approval_size_small:attr.size==='small',ticketInfoDialog_col_approval_size_min:attr.size==='min',ticketInfoDialog_col_approval_checked:attr.checked,ticketInfoDialog_col_approval_disable:attr.disabled}">

                        <lm2b-link-text
                                ref="approvalRef"
                                refId="approvalRef"
                                v-show="pvt_isShow.approval === 'approvalRef'"
                                :paraVarPair="pvt_approval.approvalRef.paraVarPair"
                                :para="pvt_approval.approvalRef.para"
                                :attr="pvt_approval.approvalRef.attr">
                        </lm2b-link-text>
                    </div>
                </div>
                <div class="ticketInfoDialog_row ticketInfoDialog_row_row7">
                    <div v-show="pvt_isWinShow.limit"
                         :class="{ticketInfoDialog_col:true,ticketInfoDialog_col_limit:true,ticketInfoDialog_col_limit_size_large:attr.size==='large',ticketInfoDialog_col_limit_size_medium:attr.size==='medium',ticketInfoDialog_col_limit_size_small:attr.size==='small',ticketInfoDialog_col_limit_size_min:attr.size==='min',ticketInfoDialog_col_limit_checked:attr.checked,ticketInfoDialog_col_limit_disable:attr.disabled}">

                        <lm2b-link-text
                                ref="limitRef"
                                refId="limitRef"
                                v-show="pvt_isShow.limit === 'limitRef'"
                                :paraVarPair="pvt_limit.limitRef.paraVarPair"
                                :para="pvt_limit.limitRef.para"
                                :attr="pvt_limit.limitRef.attr">
                        </lm2b-link-text>
                    </div>
                </div>
                <div class="ticketInfoDialog_row ticketInfoDialog_row_row8">
                    <div v-show="pvt_isWinShow.ticketTime"
                         :class="{ticketInfoDialog_col:true,ticketInfoDialog_col_ticketTime:true,ticketInfoDialog_col_ticketTime_size_large:attr.size==='large',ticketInfoDialog_col_ticketTime_size_medium:attr.size==='medium',ticketInfoDialog_col_ticketTime_size_small:attr.size==='small',ticketInfoDialog_col_ticketTime_size_min:attr.size==='min',ticketInfoDialog_col_ticketTime_checked:attr.checked,ticketInfoDialog_col_ticketTime_disable:attr.disabled}">

                        <lm2b-link-text
                                ref="ticketTimeRef"
                                refId="ticketTimeRef"
                                v-show="pvt_isShow.ticketTime === 'ticketTimeRef'"
                                :paraVarPair="pvt_ticketTime.ticketTimeRef.paraVarPair"
                                :para="pvt_ticketTime.ticketTimeRef.para"
                                :attr="pvt_ticketTime.ticketTimeRef.attr">
                        </lm2b-link-text>
                    </div>
                </div>
                <div class="ticketInfoDialog_row ticketInfoDialog_row_row9">
                    <div v-show="pvt_isWinShow.saleTime"
                         :class="{ticketInfoDialog_col:true,ticketInfoDialog_col_saleTime:true,ticketInfoDialog_col_saleTime_size_large:attr.size==='large',ticketInfoDialog_col_saleTime_size_medium:attr.size==='medium',ticketInfoDialog_col_saleTime_size_small:attr.size==='small',ticketInfoDialog_col_saleTime_size_min:attr.size==='min',ticketInfoDialog_col_saleTime_checked:attr.checked,ticketInfoDialog_col_saleTime_disable:attr.disabled}">

                        <lm2b-link-text
                                ref="saleTimeRef"
                                refId="saleTimeRef"
                                v-show="pvt_isShow.saleTime === 'saleTimeRef'"
                                :paraVarPair="pvt_saleTime.saleTimeRef.paraVarPair"
                                :para="pvt_saleTime.saleTimeRef.para"
                                :attr="pvt_saleTime.saleTimeRef.attr">
                        </lm2b-link-text>
                    </div>
                </div>
                <div class="ticketInfoDialog_row ticketInfoDialog_row_row10">
                    <div v-show="pvt_isWinShow.note"
                         :class="{ticketInfoDialog_col:true,ticketInfoDialog_col_note:true,ticketInfoDialog_col_note_size_large:attr.size==='large',ticketInfoDialog_col_note_size_medium:attr.size==='medium',ticketInfoDialog_col_note_size_small:attr.size==='small',ticketInfoDialog_col_note_size_min:attr.size==='min',ticketInfoDialog_col_note_checked:attr.checked,ticketInfoDialog_col_note_disable:attr.disabled}">

                        <lm2b-link-text
                                ref="noteRef"
                                refId="noteRef"
                                v-show="pvt_isShow.note === 'noteRef'"
                                :paraVarPair="pvt_note.noteRef.paraVarPair"
                                :para="pvt_note.noteRef.para"
                                :attr="pvt_note.noteRef.attr">
                        </lm2b-link-text>
                    </div>
                </div>
            </div>
        </div>
        <div class="ticketInfoDialog_row ticketInfoDialog_row_row2">
            <div v-show="pvt_isWinShow.btn"
                 :class="{ticketInfoDialog_col:true,ticketInfoDialog_col_btn:true,ticketInfoDialog_col_btn_size_large:attr.size==='large',ticketInfoDialog_col_btn_size_medium:attr.size==='medium',ticketInfoDialog_col_btn_size_small:attr.size==='small',ticketInfoDialog_col_btn_size_min:attr.size==='min',ticketInfoDialog_col_btn_checked:attr.checked,ticketInfoDialog_col_btn_disable:attr.disabled}">

                <lm2b-link-text
                        ref="btnRef"
                        refId="btnRef"
                        v-show="pvt_isShow.btn === 'btnRef'"
                        :paraVarPair="pvt_btn.btnRef.paraVarPair"
                        :para="pvt_btn.btnRef.para"
                        :attr="pvt_btn.btnRef.attr">
                </lm2b-link-text>
            </div>
        </div>

    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';

    export default {
        components: {},
        inject: ['sys'],
        props: ['refId', 'para', 'attr', 'number'],
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ['title', 'price', 'num', 'approval', 'limit', 'ticketTime', 'saleTime', 'note', 'btn'],
                    subModule: ['titleRef', 'priceRef', 'numRef', 'approvalRef', 'limitRef', 'ticketTimeRef', 'saleTimeRef', 'noteRef', 'btnRef'],
                },
                pvt_isShow: {
                    title: null,
                    price: null,
                    num: null,
                    approval: null,
                    limit: null,
                    ticketTime: null,
                    saleTime: null,
                    note: null,
                    btn: null,
                },
                pvt_isWinShow: {
                    ticketInfoDialogWindow: true,
                    content: true,
                    btn: true,
                    title: true,
                    price: true,
                    num: true,
                    approval: true,
                    limit: true,
                    ticketTime: true,
                    saleTime: true,
                    note: true,
                },
                pvt_eventPortInput: ['confirmEvent'],

                mac: mac.mac,

                price: 11,
                ticketNumber: 22,
                approval: 33,
                limit: 44,
                ticketTime: 55,
                saleTime: 66,
                note: 77,
                curTicketId: null,
            };
        },
        watch: {},
        computed: {
            pvt_title: function () {
                return {
                    titleRef: {
                        paraVarPair: {},
                        para: {
                            textData: [{
                                $table: this.mac.tb.groupActivityTicketType,
                                $arrField: [this.mac.fd.groupActivityTicketType.name],
                                $arrValue: [this.curTicketId]
                            }],
                        },
                        attr: {
                            fontWeight: true,
                            color: '#333',
                            fontSize: '20px',
                        },
                    },
                };
            },
            pvt_price: function () {
                return {
                    priceRef: {
                        paraVarPair: {
                            textData: 'price',
                        },
                        para: {
                            textData: this.price,
                        },
                        attr: {
                            color: '#666',
                            fontSize: '14px'
                        },
                    },
                };
            },
            pvt_num: function () {
                return {
                    numRef: {
                        paraVarPair: {
                            textData: 'ticketNumber',
                        },
                        para: {
                            textData: this.ticketNumber,
                        },
                        attr: {
                            color: '#666',
                            fontSize: '14px'
                        },
                    },
                };
            },
            pvt_approval: function () {
                return {
                    approvalRef: {
                        paraVarPair: {
                            textData: 'approval',
                        },
                        para: {
                            textData: this.approval,
                        },
                        attr: {
                            color: '#666',
                            fontSize: '14px'
                        },
                    },
                };
            },
            pvt_limit: function () {
                return {
                    limitRef: {
                        paraVarPair: {
                            textData: 'limit',
                        },
                        para: {
                            textData: this.limit,
                        },
                        attr: {
                            color: '#666',
                            fontSize: '14px'
                        },
                    },
                };
            },
            pvt_ticketTime: function () {
                return {
                    ticketTimeRef: {
                        paraVarPair: {
                            textData: 'ticketTime',
                        },
                        para: {
                            textData: this.ticketTime,
                        },
                        attr: {
                            color: '#666',
                            fontSize: '14px'
                        },
                    },
                };
            },
            pvt_saleTime: function () {
                return {
                    saleTimeRef: {
                        paraVarPair: {
                            textData: 'saleTime',
                        },
                        para: {
                            textData: this.saleTime,
                        },
                        attr: {
                            color: '#666',
                            fontSize: '14px'
                        },
                    },
                };
            },
            pvt_note: function () {
                return {
                    noteRef: {
                        paraVarPair: {
                            textData: 'note',
                        },
                        para: {
                            textData: this.note,
                        },
                        attr: {
                            color: '#666',
                            fontSize: '14px'
                        },
                    },
                };
            },
            pvt_btn: function () {
                return {
                    btnRef: {
                        paraVarPair: {},
                        para: {
                            textData: '我知道了',
                        },
                        attr: {
                            isClick: true,
                            color: '#12B0FF',
                            fontSize: '16px',
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
            startModule: function (curTicketId, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'ticketInfoDialog_start';
                let dbFlag;
                let dbData;
                let tableName;
                let condition;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0,
                    refArr: ['titleRef', 'priceRef', 'numRef', 'approvalRef', 'limitRef', 'ticketTimeRef', 'saleTimeRef', 'noteRef', 'btnRef']
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
                        case 'getTicketData':
                            that.curTicketId = curTicketId;

                            tableName = this.mac.tb.groupActivityTicketType;
                            dbData = {};
                            dbData[that.mac.fd.id] = [curTicketId];

                            this.sys.api.recordRead(tableName, dbData, function () {
                                that.price = '票价： ￥' + dbData[that.mac.fd.groupActivityTicketType.price];
                                if(dbData[that.mac.fd.groupActivityTicketType.poll][0] === null) {
                                    that.ticketNumber = '数量： 无限制张数';
                                } else {
                                    that.ticketNumber = '数量： ' + dbData[that.mac.fd.groupActivityTicketType.poll][0] + '张';
                                }


                                let startTime = dbData[that.mac.fd.groupActivityTicketType.startTime][0];
                                let endTime = dbData[that.mac.fd.groupActivityTicketType.endTime][0];
                                that.ticketTime = '票种时间： ' + startTime + ' 至 ' + endTime;

                                let saleStartTime = dbData[that.mac.fd.groupActivityTicketType.saleStartTime][0];
                                let saleEndTime = dbData[that.mac.fd.groupActivityTicketType.saleEndTime][0];
                                if(saleStartTime === null) {
                                    that.saleTime = '销售时间： 活动结束前都可以报名';
                                } else {
                                    that.saleTime = '销售时间： ' + saleStartTime + ' 至 ' + saleEndTime;
                                }


                                dbData[that.mac.fd.groupActivityTicketType.approval][0] === that.mac.enum.groupActivityTicketType.approval.yes ? that.approval = '审核： 需要审核' : that.approval = '审核： 不需要审核';

                                if(dbData[that.mac.fd.groupActivityTicketType.maxNumber][0] === null) {
                                    that.limit = '限购： ' + dbData[that.mac.fd.groupActivityTicketType.minNumber][0] + '张起售，无最多限购张数';
                                } else {
                                    that.limit = '限购： ' + dbData[that.mac.fd.groupActivityTicketType.minNumber][0] + '张起售，最多限购' + dbData[that.mac.fd.groupActivityTicketType.maxNumber][0] + '张';
                                }

                                if(!dbData[that.mac.fd.groupActivityTicketType.explain][0]) {
                                    that.note = '购票说明： 无';
                                } else {
                                    that.note = '购票说明： ' + dbData[that.mac.fd.groupActivityTicketType.explain][0];
                                }

                                that.forceUpdateData(function () {
                                    para.nStep = 'start_sub';
                                    if (++dbFlag === 2) {
                                        that.startModule(curTicketId, successCallBack, errorCallBack)
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
                                    that.startModule(curTicketId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            that.showSubModule(para.refArr, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.startModule(curTicketId, successCallBack, errorCallBack)
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
            confirmClick: function () {
                this.hideSelfModule(this.refId, function () {
                }, function () {
                });
            },
            btnRef_textClickEvent: function () {
                this.confirmClick();
            },
        },
    };
</script>
<style lang="less" scoped>
    @import "../../../../../assets/var_kzt"; /*新增*/
    .ticketInfoDialog_container {
        width: 100%;
        height: 100%;
    }

    .ticketInfoDialog_mask {
        display: flex;
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, .4);
    }

    .ticketInfoDialog_dialog {
        position: absolute;
        left: 0;
        top: 0;
    }

    .ticketInfoDialog_overlay {
        position: absolute;
        left: 0;
        top: 0;
    }

    .ticketInfoDialog_row {
        display: flex;
    }

    .ticketInfoDialog_col {
        position: relative;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
    }

    .ticketInfoDialog_col_ticketInfoDialogWindow_size_medium {
        width: @ticketInfoDialog-ticketInfoDialogWindow-medium-width;
    }

    .ticketInfoDialog_col_ticketInfoDialogWindow {
        border-radius: @ticketInfoDialog-ticketInfoDialogWindow-border-radius;
        background-color: mix(@ticketInfoDialog-ticketInfoDialogWindow-background-color, #fff, @ticketInfoDialog-ticketInfoDialogWindow-background-color-opacity);
    }

    .ticketInfoDialog_col_content_size_medium {
        width: @ticketInfoDialog-content-medium-width;
        padding: @ticketInfoDialog-content-medium-padding;
    }

    .ticketInfoDialog_col_btn_size_medium {
        width: @ticketInfoDialog-btn-medium-width;
        padding: @ticketInfoDialog-btn-medium-padding;
        align-items: @ticketInfoDialog-btn-medium-horizontal-position;
    }

    .ticketInfoDialog_col_btn {
        border-style: @ticketInfoDialog-btn-border-style;
        border-width: @ticketInfoDialog-btn-border-width;
        border-color: mix(@ticketInfoDialog-btn-border-color, #fff, @ticketInfoDialog-btn-hover-border-color-opacity);
    }

    .ticketInfoDialog_col_title_size_medium {
        width: @ticketInfoDialog-title-medium-width;
        align-items: @ticketInfoDialog-title-medium-horizontal-position;
        margin: @ticketInfoDialog-title-medium-margin;
    }

    .ticketInfoDialog_col_price_size_medium {
        width: @ticketInfoDialog-price-medium-width;
        margin: @ticketInfoDialog-price-medium-margin;
    }

    .ticketInfoDialog_col_num_size_medium {
        width: @ticketInfoDialog-num-medium-width;
        margin: @ticketInfoDialog-num-medium-margin;
    }

    .ticketInfoDialog_col_approval_size_medium {
        width: @ticketInfoDialog-approval-medium-width;
        margin: @ticketInfoDialog-approval-medium-margin;
    }

    .ticketInfoDialog_col_limit_size_medium {
        width: @ticketInfoDialog-limit-medium-width;
        margin: @ticketInfoDialog-limit-medium-margin;
    }

    .ticketInfoDialog_col_ticketTime_size_medium {
        width: @ticketInfoDialog-ticketTime-medium-width;
        margin: @ticketInfoDialog-ticketTime-medium-margin;
    }

    .ticketInfoDialog_col_saleTime_size_medium {
        width: @ticketInfoDialog-saleTime-medium-width;
        margin: @ticketInfoDialog-saleTime-medium-margin;
    }

    .ticketInfoDialog_col_note_size_medium {
        width: @ticketInfoDialog-note-medium-width;
    }
</style>