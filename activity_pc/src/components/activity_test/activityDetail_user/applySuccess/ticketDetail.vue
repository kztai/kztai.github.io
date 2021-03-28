<template>
    <div class="ticket-detail-dialog-wrap">
        <div class="ticket-detail-dialog">
            <div class="dialog-title">
                <lm-link-text
                        ref="titleRef"
                        refId="titleRef"
                        v-show="pvt_isShow.title === 'titleRef'"
                        :paraVarPair="pvt_title.titleRef.paraVarPair"
                        :para="pvt_title.titleRef.para"
                        :attr="pvt_title.titleRef.attr">
                </lm-link-text>
            </div>
            <div class="ticket-item">
                <ticketItem
                        ref="ticketItemRef"
                        refId="ticketItemRef"
                        v-show="pvt_isShow.ticketItem === 'ticketItemRef'"
                        v-for="(item, index) in pvt_ticketItem.ticketItemRef.forData"
                        :number="index"
                        :paraVarPair="pvt_ticketItem.ticketItemRef.paraVarPair"
                        :para="item.para"
                        :attr="item.attr">
                </ticketItem>
            </div>
            <div class="btns">
                <lm-button
                        class="dialog-confirm"
                        ref="confirmRef"
                        refId="confirmRef"
                        v-show="pvt_isShow.confirm === 'confirmRef'"
                        :paraVarPair="pvt_confirm.confirmRef.paraVarPair"
                        :para="pvt_confirm.confirmRef.para"
                        :attr="pvt_confirm.confirmRef.attr">
                </lm-button>
                <lm-button
                        class="dialog-cancel"
                        ref="cancelRef"
                        refId="cancelRef"
                        v-show="pvt_isShow.cancel === 'cancelRef'"
                        :paraVarPair="pvt_cancel.cancelRef.paraVarPair"
                        :para="pvt_cancel.cancelRef.para"
                        :attr="pvt_cancel.cancelRef.attr">
                </lm-button>
            </div>
            <div class="dialog-close">
                <lm-button
                        ref="closeRef"
                        refId="closeRef"
                        v-show="pvt_isShow.close === 'closeRef'"
                        :paraVarPair="pvt_close.closeRef.paraVarPair"
                        :para="pvt_close.closeRef.para"
                        :attr="pvt_close.closeRef.attr">
                </lm-button>
            </div>
        </div>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';
    import ticketItem from './ticketItem';

    export default {
        components: {ticketItem},
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ["sys"],
        data: function () {
            return {
                titleText: '',
                curActivityIdArr: [],
                curTicketIdArr: [],

                mac: mac.mac,

                pvt_subModuleMap: {
                    subModule: ['titleRef', 'ticketItemRef', 'confirmRef', 'cancelRef', 'closeRef'],
                    vessel: ['title', 'ticketItem', 'confirm', 'cancel', 'close'],
                },

                // 各个容器当前显示的子模块
                pvt_isShow: {
                    title: null,
                    ticketItem: null,
                    confirm: null,
                    cancel: null,
                    close: null,
                },

                // 当前模块输入类型的事务接口名称，工具完成前需要用户手动填写
                pvt_eventPortInput: ['confirmEvent'],
            }
        },
        computed: {
            pvt_title: function () {
                return {
                    titleRef: {
                        paraVarPair: {},
                        para: {
                            textData: this.titleText
                        },
                        attr: {
                            fontSize: '14px',
                            color: '#303133'
                        }
                    }
                }
            },

            pvt_ticketItem: function () {
                let loopModule = {
                    ticketItemRef: {
                        para: {
                            curActivityId: this.curActivityIdArr,
                            curTicketId: this.curTicketIdArr,
                            curBillId: this.para.curBillIdArr,
                        },
                        attr: {},
                    },
                };
                let forData = this.pvt_createForData(loopModule);
                return {
                    ticketItemRef: {
                        paraVarPair: {},
                        forData: forData.ticketItemRef,
                    },
                };
            },

            pvt_confirm: function () {
                return {
                    confirmRef: {
                        paraVarPair: {},
                        para: {
                            name: ['确定', '']
                        },
                        attr: {
                            type: 'primary',
                            // size: 'small'
                        }
                    }
                }
            },

            pvt_cancel: function () {
                return {
                    cancelRef: {
                        paraVarPair: {},
                        para: {
                            name: ['取消', '']
                        },
                        attr: {
                            // type: 'primary',
                            plain: true,
                            // size: 'small'
                        }
                    }
                }
            },

            pvt_close: function () {
                return {
                    closeRef: {
                        paraVarPair: {},
                        para: {
                            name: ['', 'el-icon-error']
                        },
                        attr: {
                            type: 'text',
                            size: 'large'
                        }
                    }
                }
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
                let fnname = 'ticketDetail_start';
                let dbFlag;
                let dbData;
                let tableName;
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

                let ref = {
                    titleRef: 'titleRef',
                    ticketItemRef: 'ticketItemRef',
                    confirmRef: 'confirmRef',
                    cancelRef: 'cancelRef',
                    closeRef: 'closeRef',
                };

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                            this.curActivityIdArr = [];
                            this.curTicketIdArr = [];

                            this.titleText = '电子票（共' + this.para.curBillIdArr.length + '张）';
                            for(let i = 0; i < this.para.curBillIdArr.length; i++) {
                                this.curActivityIdArr.push(this.para.curActivityId);
                                this.curTicketIdArr.push(this.para.curTicketId);
                            }

                            para.nStep = 'start_2';
                            dbFlag++;
                            break;
                        case 'getInfo':
                            tableName = this.mac.tb.groupActivityBill;
                            dbData = {};
                            dbData[that.mac.fd.id] = this.para.rejectBillIdArr;
                            dbData[that.mac.fd.groupActivityBill.name] = [];
                            dbData[that.mac.fd.groupActivityBill.mobile] = [];
                            that.sys.api.recordRead(tableName, dbData, function () {
                                for(let i = 0; i < dbData[that.mac.fd.groupActivityBill.name].length; i++) {
                                    that.infoArr.push(dbData[that.mac.fd.groupActivityBill.name][i] + '/' + dbData[that.mac.fd.groupActivityBill.mobile][i]);
                                }
                                that.forceUpdateData(function () {
                                    para.nStep = 'start_2';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                });
                            }, function () {
                            });
                            break;
                        case 'start_2':
                            that.forceUpdateData(function () {
                                that.sm[ref.titleRef].startModule(function () {
                                    para.nStep = 'start_4';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
                            });
                            break;
                        case 'start_4':
                            if (para.i > that.sm[ref.ticketItemRef].length - 1) {
                                para.i = 0;
                                para.nStep = 'start_7';
                                dbFlag++;
                                break;
                            }

                            that.sm[ref.ticketItemRef][para.i].startModule(function () {
                                para.i++;
                                para.nStep = 'start_4';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_7':
                            that.sm[ref.confirmRef].startModule(function () {
                                para.nStep = 'start_8';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_8':
                            that.sm[ref.cancelRef].startModule(function () {
                                para.nStep = 'start_9';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_9':
                            that.sm[ref.closeRef].startModule(function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            let refArr = ['titleRef', 'ticketItemRef', 'confirmRef', 'cancelRef', 'closeRef'];
                            that.showSubModule(refArr, true, function () {
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

            confirmEvent: function () {
                this.hideSelfModule(this.refId, function () {
                }, function () {
                });
            },

            cancelEvent: function () {
                this.hideSelfModule(this.refId, function () {
                }, function () {
                });
            },

            confirmRef_buttonClickEvent: function () {
                this.confirmEvent();
            },
            cancelRef_buttonClickEvent: function () {
                this.cancelEvent();
            },
            closeRef_buttonClickEvent: function () {
                this.cancelEvent();
            },
        }
    }
</script>

<style lang="scss">
    .ticket-detail-dialog-wrap {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 10000;
        .ticket-detail-dialog {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background-color: #fff;
            overflow: hidden;
            border-radius: 6px;
            text-align: left;

            .dialog-title {
                margin-bottom: 10px;
                padding: 20px;
                background-color: #f5f7fa;
            }
            .ticket-item {
                margin-bottom: 10px;
                padding: 0 30px;
                overflow-y: auto;
                max-height: 600px;
            }

            .btns {
                text-align: right;
                padding: 20px;
                background-color: #f5f7fa;
                .dialog-confirm {
                    display: inline-block;
                    margin-right: 20px;
                }
                .dialog-cancel {
                    display: inline-block;
                }
            }

            .dialog-close {
                position: absolute;
                right: 10px;
                top: 0;
                .lm-button {
                    .el-button--large {
                        font-size: 24px;
                    }
                    .el-button--text {
                        color: #909399;
                    }
                }
            }
        }
    }
</style>
