<template>
    <div class="apply-item-wrap">
        <div class="apply-item">
            <div class="item-cell title-name">
                <lm-link-text
                        ref="titleNameRef"
                        refId="titleNameRef"
                        v-show="pvt_isShow.titleName === 'titleNameRef'"
                        :paraVarPair="pvt_titleName.titleNameRef.paraVarPair"
                        :para="pvt_titleName.titleNameRef.para"
                        :attr="pvt_titleName.titleNameRef.attr">
                </lm-link-text>
            </div>
            <div class="item-cell title-tel">
                <lm-link-text
                        ref="titleTelRef"
                        refId="titleTelRef"
                        v-show="pvt_isShow.titleTel === 'titleTelRef'"
                        :paraVarPair="pvt_titleTel.titleTelRef.paraVarPair"
                        :para="pvt_titleTel.titleTelRef.para"
                        :attr="pvt_titleTel.titleTelRef.attr">
                </lm-link-text>
            </div>
            <div class="item-cell title-ticket">
                <lm-link-text
                        ref="titleTicketRef"
                        refId="titleTicketRef"
                        v-show="pvt_isShow.titleTicket === 'titleTicketRef'"
                        :paraVarPair="pvt_titleTicket.titleTicketRef.paraVarPair"
                        :para="pvt_titleTicket.titleTicketRef.para"
                        :attr="pvt_titleTicket.titleTicketRef.attr">
                </lm-link-text>
            </div>
            <div class="item-cell title-money">
                <lm-link-text
                        ref="titleMoneyRef"
                        refId="titleMoneyRef"
                        v-show="pvt_isShow.titleMoney === 'titleMoneyRef'"
                        :paraVarPair="pvt_titleMoney.titleMoneyRef.paraVarPair"
                        :para="pvt_titleMoney.titleMoneyRef.para"
                        :attr="pvt_titleMoney.titleMoneyRef.attr">
                </lm-link-text>
            </div>
            <div class="item-cell title-time">
                <lm-link-text
                        ref="titleTimeRef"
                        refId="titleTimeRef"
                        v-show="pvt_isShow.titleTime === 'titleTimeRef'"
                        :paraVarPair="pvt_titleTime.titleTimeRef.paraVarPair"
                        :para="pvt_titleTime.titleTimeRef.para"
                        :attr="pvt_titleTime.titleTimeRef.attr">
                </lm-link-text>
            </div>
            <div class="item-cell check-btn">
                <lm-button
                        ref="checkBtnRef"
                        refId="checkBtnRef"
                        v-show="pvt_isShow.checkBtn === 'checkBtnRef'"
                        :paraVarPair="pvt_checkBtn.checkBtnRef.paraVarPair"
                        :para="pvt_checkBtn.checkBtnRef.para"
                        :attr="pvt_checkBtn.checkBtnRef.attr">
                </lm-button>
            </div>
        </div>
        <div class="code-identify-dialog">
            <codeDialog
                    ref="codeDialogRef"
                    refId="codeDialogRef"
                    v-show="pvt_isShow.codeDialog === 'codeDialogRef'"
                    :paraVarPair="pvt_codeDialog.codeDialogRef.paraVarPair"
                    :para="pvt_codeDialog.codeDialogRef.para"
                    :attr="pvt_codeDialog.codeDialogRef.attr">
            </codeDialog>
        </div>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';
    import codeDialog from './codeDialog';

    export default {
        components: {codeDialog},
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ["sys"],
        data: function () {
            return {
                itemSelected: [],
                showDetail: false,
                applyName: '',
                phoneNum: '',
                titleStatus: '',
                cloudItemId: null,
                curFillFormDataArr: [],
                showMore: false,
                infoData: null,

                curOrderId: null,
                curTicketId: null,

                mac: mac.mac,

                // 需要双向修改参数的场景，用户可直接修改以下模块参数同名的变量
                // selectedPara: this.para.selected,

                pvt_subModuleMap: {
                    subModule: ['titleNameRef', 'titleTelRef', 'titleTicketRef', 'titleMoneyRef', 'titleTimeRef', 'checkBtnRef', 'codeDialogRef'],
                    vessel: ['titleName', 'titleTel', 'titleTicket', 'titleMoney', 'titleTime', 'checkBtn', 'codeDialog'],
                },

                // 各个容器当前显示的子模块
                pvt_isShow: {
                    titleName: null,
                    titleTel: null,
                    titleTicket: null,
                    titleMoney: null,
                    titleTime: null,
                    checkBtn: null,
                    codeDialog: null,
                },

                // 当前模块输入类型的事务接口名称，工具完成前需要用户手动填写
                pvt_eventPortInput: ['getSeccodeIn', 'seccodeVerifyIn', 'refreshTicket', 'ticketPassIn'],
            }
        },
        computed: {
            pvt_codeDialog: function () {
                return {
                    codeDialogRef: {
                        paraVarPair: {},
                        para: {
                            curBillId: this.para.curBillId,
                        },
                        attr: {
                        }
                    }
                }
            },

            pvt_titleName: function () {
                return {
                    titleNameRef: {
                        paraVarPair: {},
                        para: {
                            textData: [{
                                $table: this.mac.tb.groupActivityBill,
                                $arrField: [this.mac.fd.groupActivityBill.name],
                                $arrValue: [this.para.curBillId]
                            }]
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#606266'
                        }
                    }
                }
            },

            pvt_titleTel: function () {
                return {
                    titleTelRef: {
                        paraVarPair: {},
                        para: {
                            textData: [{
                                $table: this.mac.tb.groupActivityBill,
                                $arrField: [this.mac.fd.groupActivityBill.mobile],
                                $arrValue: [this.para.curBillId]
                            }]
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#606266'
                        }
                    }
                }
            },

            pvt_titleTicket: function () {
                return {
                    titleTicketRef: {
                        paraVarPair: {},
                        para: {
                            textData: [{
                                $table: this.mac.tb.groupActivityTicketType,
                                $arrField: [this.mac.fd.groupActivityTicketType.name],
                                $arrValue: [this.curTicketId]
                            }]
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#606266'
                        }
                    }
                }
            },

            pvt_titleMoney: function () {
                return {
                    titleMoneyRef: {
                        paraVarPair: {},
                        para: {
                            textData: [{
                                $table: this.mac.tb.groupActivityOrder,
                                $arrField: [this.mac.fd.groupActivityOrder.price],
                                // $arrValue: [this.para.curBillId]
                                $arrValue: [this.curOrderId]
                            }]
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#606266'
                        }
                    }
                }
            },

            pvt_titleTime: function () {
                return {
                    titleTimeRef: {
                        paraVarPair: {},
                        para: {
                            textData: [{
                                $table: this.mac.tb.groupActivityOrder,
                                $arrField: [this.mac.fd.groupActivityOrder.createTime],
                                // $arrValue: [this.para.curBillId]
                                $arrValue: [this.curOrderId]
                            }]
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#606266'
                        }
                    }
                }
            },

            pvt_checkBtn: function () {
                return {
                    checkBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['验票', '']
                        },
                        attr: {
                            type: 'text',
                            size: 'mini'
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
                let fnname = 'applyItem_start';
                let dbFlag;
                let dbData;
                let tableName;
                let expression;
                let start;
                let total;
                let sort;
                let destGeneSite;
                let portName;
                let inputData;
                let record;
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
                    titleNameRef: 'titleNameRef',
                    titleTelRef: 'titleTelRef',
                    titleTicketRef: 'titleTicketRef',
                    titleMoneyRef: 'titleMoneyRef',
                    titleTimeRef: 'titleTimeRef',
                    checkBtnRef: 'checkBtnRef',
                };

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                            this.showDetail = false;
                            this.itemSelected = [];
                            this.applyName = '';
                            this.phoneNum = '';
                            this.titleStatus = '';
                            this.curFillFormDataArr = [];
                            this.cloudItemId = null;
                            this.showMore = false;
                            this.infoData = null;

                            tableName = this.mac.tb.groupActivityBill;
                            record = [that.para.curBillId];
                            that.sys.api.getParentRecord(tableName, record, function (result) {
                                that.curOrderId = result[0];
                                para.nStep = 'getTicketId';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {

                            });
                            break;
                        case 'getTicketId':
                            tableName = this.mac.tb.groupActivityOrder;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.curOrderId];
                            dbData[that.mac.fd.groupActivityOrder.groupActivityTicketTypeID] = [];
                            that.sys.api.recordRead(tableName, dbData, function (result) {
                                that.curTicketId = dbData[that.mac.fd.groupActivityOrder.groupActivityTicketTypeID][0];
                                para.nStep = 'start_8';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_8':
                            that.forceUpdateData(function () {
                                that.sm[ref.checkBtnRef].startModule(function () {
                                    para.nStep = 'start_10';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
                            });
                            break;
                        case 'start_10':
                            that.forceUpdateData(function () {
                                that.sm[ref.titleNameRef].startModule(function () {
                                    para.nStep = 'start_11';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
                            });
                            break;
                        case 'start_11':
                            that.sm[ref.titleTelRef].startModule(function () {
                                para.nStep = 'start_12';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_12':
                            that.forceUpdateData(function () {
                                that.sm[ref.titleTicketRef].startModule(function () {
                                    para.nStep = 'start_13';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
                            });
                            break;
                        case 'start_13':
                            that.sm[ref.titleMoneyRef].startModule(function () {
                                para.nStep = 'start_16';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_16':
                            that.sm[ref.titleTimeRef].startModule(function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            let refArr = ['titleNameRef', 'titleTelRef', 'titleTicketRef', 'titleMoneyRef', 'titleTimeRef', 'checkBtnRef'];
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

            checkTicket: function() {
                let that = this;
                that.sm.codeDialogRef.startModule(function () {
                    that.showSubModule('codeDialogRef', true, function () {
                    }, function () {
                    });
                }, function () {
                });
            },

            checkBtnRef_buttonClickEvent: function () {
                this.checkTicket();
            },
            codeDialogRef_refreshTicket: function (curBillId) {
                this.ep.refreshTicket(curBillId);
            },
            codeDialogRef_getSeccodeIn: function (phone, successCallBack, errorCallBack) {
                this.ep.getSeccodeIn(phone, successCallBack, errorCallBack);
            },
            codeDialogRef_seccodeVerifyIn: function (id, codeValue, successCallBack, errorCallBack) {
                this.ep.seccodeVerifyIn(id, codeValue, successCallBack, errorCallBack);
            },
            codeDialogRef_ticketPassIn: function (id, successCallBack, errorCallBack) {
                this.ep.ticketPassIn(id, successCallBack, errorCallBack);
            },
        }
    }
</script>

<style lang="scss">
    .apply-item-wrap {
        .apply-item {
            display: flex;
            justify-content: space-around;
            border-bottom: 1px solid #e4e4e4;
            padding: 16px 0;

            .item-cell {
                flex: 1;
                text-align: center;
            }

            .title-name {
                .lm-checkbox {
                    margin-top: 2px;

                    .el-checkbox__label {
                        font-size: 12px;
                        color: #606266;
                    }
                }
            }

            .title-detail {
                .lm-button .el-button--text {
                    color: #606266;
                }
            }
        }

        .apply-detail {
            border-bottom: 1px solid #e4e4e4;
            padding: 10px 40px;

            .show-more {
                .lm-button {
                    text-align: left;
                }
            }
        }

    }
</style>
