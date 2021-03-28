<template>
    <div v-show="pvt_isWinShow.approval_ticketItemWindow"
         :class="{approval_ticketItem_container:true,approval_ticketItem_col:true,approval_ticketItem_col_approval_ticketItemWindow:true,approval_ticketItem_col_approval_ticketItemWindow_size_large:attr.size==='large',approval_ticketItem_col_approval_ticketItemWindow_size_medium:attr.size==='medium',approval_ticketItem_col_approval_ticketItemWindow_size_small:attr.size==='small',approval_ticketItem_col_approval_ticketItemWindow_size_min:attr.size==='min',approval_ticketItem_col_approval_ticketItemWindow_checked:attr.checked,approval_ticketItem_col_approval_ticketItemWindow_disable:attr.disabled}">

        <div class="approval_ticketItem_row approval_ticketItem_row_row1">
            <div v-show="pvt_isWinShow.name"
                 :class="{approval_ticketItem_col:true,approval_ticketItem_col_name:true,approval_ticketItem_col_name_size_large:attr.size==='large',approval_ticketItem_col_name_size_medium:attr.size==='medium',approval_ticketItem_col_name_size_small:attr.size==='small',approval_ticketItem_col_name_size_min:attr.size==='min',approval_ticketItem_col_name_checked:attr.checked,approval_ticketItem_col_name_disable:attr.disabled}">

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
                 :class="{approval_ticketItem_col:true,approval_ticketItem_col_btn:true,approval_ticketItem_col_btn_size_large:attr.size==='large',approval_ticketItem_col_btn_size_medium:attr.size==='medium',approval_ticketItem_col_btn_size_small:attr.size==='small',approval_ticketItem_col_btn_size_min:attr.size==='min',approval_ticketItem_col_btn_checked:attr.checked,approval_ticketItem_col_btn_disable:attr.disabled}">

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
                 :class="{approval_ticketItem_col:true,approval_ticketItem_col_price:true,approval_ticketItem_col_price_size_large:attr.size==='large',approval_ticketItem_col_price_size_medium:attr.size==='medium',approval_ticketItem_col_price_size_small:attr.size==='small',approval_ticketItem_col_price_size_min:attr.size==='min',approval_ticketItem_col_price_checked:attr.checked,approval_ticketItem_col_price_disable:attr.disabled}">

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

        <div :class="{approval_ticketItem_mask:true}"
             v-if="pvt_isShow.ticketDialog === 'ticketDialogRef'">
            <div :class="{approval_ticketItem_dialog:true,approval_ticketItem_col:true,approval_ticketItem_col_ticketDialog:true,approval_ticketItem_col_ticketDialog_size_large:attr.size==='large',approval_ticketItem_col_ticketDialog_size_medium:attr.size==='medium',approval_ticketItem_col_ticketDialog_size_small:attr.size==='small',approval_ticketItem_col_ticketDialog_size_min:attr.size==='min',approval_ticketItem_col_ticketDialog_checked:attr.checked,approval_ticketItem_col_ticketDialog_disable:attr.disabled}">
                <ticket-info-dialog
                        ref="ticketDialogRef"
                        refId="ticketDialogRef"
                        :paraVarPair="pvt_ticketDialog.ticketDialogRef.paraVarPair"
                        :para="pvt_ticketDialog.ticketDialogRef.para"
                        :attr="pvt_ticketDialog.ticketDialogRef.attr">
                </ticket-info-dialog>
            </div>
        </div>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';
    import ticketInfoDialog from './ticketInfoDialog';

    export default {
        components: {ticketInfoDialog},
        inject: ['sys'],
        props: ['refId', 'para', 'attr', 'paraVarPair', 'number'],
        data: function () {
            return {

                curTicketId: this.para.curTicketId,
                pvt_subModuleMap: {
                    vessel: ['name', 'btn', 'price', 'ticketDialog'],
                    subModule: ['nameRef', 'btnRef', 'priceRef', 'ticketDialogRef'],
                },
                pvt_isShow: {
                    name: null,
                    btn: null,
                    price: null,
                    ticketDialog: null,
                },
                pvt_isWinShow: {
                    approval_ticketItemWindow: true,
                    name: true,
                    btn: true,
                    price: true,
                },
                pvt_eventPortInput: [],

                mac:mac.mac,

                ticketPrice: '￥12',
            };
        },
        watch: {
            curTicketId: {
                handler: function (val, oldVal) {
                    if (val !== oldVal && this.paraVarPair.curTicketId) {
                        if (this.number !== undefined) { // 循环
                            this.$parent[this.paraVarPair.curTicketId][this.number] = val
                        } else { // 非循环
                            this.$parent[this.paraVarPair.curTicketId] = val
                        }
                    }
                },
                deep: true
            },
        },
        computed: {
            pvt_name: function () {
                return {
                    nameRef: {
                        paraVarPair: {},
                        para: {
                            textData: [{
                                $table: this.mac.tb.groupActivityTicketType,
                                $arrField: [this.mac.fd.groupActivityTicketType.name],
                                $arrValue: [this.para.curTicketId]
                            }],
                        },
                        attr: {
                            color: '#333',
                            fontSize: '12px',
                        },
                    },
                };
            },
            pvt_btn: function () {
                return {
                    btnRef: {
                        paraVarPair: {},
                        para: {
                            textData: '',
                        },
                        attr: {
                            isClick: true,
                            color: '#12B0FF',
                            icon: 'van-icon-info-o',
                        },
                    },
                };
            },
            pvt_price: function () {
                return {
                    priceRef: {
                        paraVarPair: {
                            textData: 'ticketPrice',
                        },
                        para: {
                            textData: this.ticketPrice,
                        },
                        attr: {
                            color: '#333',
                            fontSize: '12px',
                        },
                    },
                };
            },
            pvt_ticketDialog: function () {
                return {
                    ticketDialogRef: {
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
            startModule: function (successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'ticketInfoItem_start';
                let dbFlag;
                let dbData;
                let tableName;
                let condition;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0,
                    refArr: ['nameRef', 'btnRef', 'priceRef']
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
                            tableName = this.mac.tb.groupActivityTicketType;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.para.curTicketId];
                            dbData[that.mac.fd.groupActivityTicketType.price] = [];

                            this.sys.api.recordRead(tableName, dbData, function () {
                                that.ticketPrice = '￥' + dbData[that.mac.fd.groupActivityTicketType.price][0];
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
                                para.nStep = 'showSubModule';
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

            showTicketInfoDialog() {
                let that = this;
                // that.detailDialogWrap = true;
                that.showSubModule('ticketDialogRef', true, function () {
                    that.sm.ticketDialogRef.startModule(that.para.curTicketId, function () {
                    }, function () {
                    });
                }, function () {
                });
            },

            btnRef_textClickEvent() {
                this.showTicketInfoDialog()
            },
        },
    };
</script>
<style lang="less" scoped>
    @import "../../../../../assets/var_kzt"; /*新增*/
    .approval_ticketItem_container {
        width: 100%;
        height: 100%;
    }

    .approval_ticketItem_mask {
        display: flex;
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, .4);
        z-index: 10000;
    }

    .approval_ticketItem_overlay {
        position: absolute;
        left: 0;
        top: 0;
    }

    .approval_ticketItem_row {
        display: flex;
    }

    .approval_ticketItem_col {
        position: relative;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
    }

    .approval_ticketItem_dialog {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    .approval_ticketItem_col_approval_ticketItemWindow_size_medium {
        width: @approval_ticketItem-approval_ticketItemWindow-medium-width;
        padding: @approval_ticketItem-approval_ticketItemWindow-medium-padding;
    }

    .approval_ticketItem_col_approval_ticketItemWindow {
        border-style: @approval_ticketItem-approval_ticketItemWindow-border-style;
        border-width: @approval_ticketItem-approval_ticketItemWindow-border-width;
        border-color: mix(@approval_ticketItem-approval_ticketItemWindow-border-color, #fff, @approval_ticketItem-approval_ticketItemWindow-hover-border-color-opacity);
    }

    .approval_ticketItem_col_name_size_medium {
        width: @approval_ticketItem-name-medium-width;
    }

    .approval_ticketItem_col_btn_size_medium {
        width: @approval_ticketItem-btn-medium-width;
        align-items: @approval_ticketItem-btn-medium-horizontal-position;
    }

    .approval_ticketItem_col_price_size_medium {
        width: @approval_ticketItem-price-medium-width;
        align-items: @approval_ticketItem-price-medium-horizontal-position;
    }

    .approval_ticketItem_col_ticketDialog_size_medium {
        width: @approval_ticketItem-ticketDialog-medium-width;
        height: @approval_ticketItem-ticketDialog-medium-height;
    }
</style>