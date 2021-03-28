<template>
    <div class="apply-item-wrap">
        <div class="apply-item">
            <div class="item-cell title-name">
                <lm-checkbox
                        ref="titleNameRef"
                        refId="titleNameRef"
                        v-show="pvt_isShow.titleName === 'titleNameRef'"
                        :paraVarPair="pvt_titleName.titleNameRef.paraVarPair"
                        :para="pvt_titleName.titleNameRef.para"
                        :attr="pvt_titleName.titleNameRef.attr">
                </lm-checkbox>
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
            <div class="item-cell title-num">
                <lm-link-text
                        ref="titleNumRef"
                        refId="titleNumRef"
                        v-show="pvt_isShow.titleNum === 'titleNumRef'"
                        :paraVarPair="pvt_titleNum.titleNumRef.paraVarPair"
                        :para="pvt_titleNum.titleNumRef.para"
                        :attr="pvt_titleNum.titleNumRef.attr">
                </lm-link-text>
            </div>
            <div class="item-cell title-status">
                <lm-link-text
                        ref="titleStatusRef"
                        refId="titleStatusRef"
                        v-show="pvt_isShow.titleStatus === 'titleStatusRef'"
                        :paraVarPair="pvt_titleStatus.titleStatusRef.paraVarPair"
                        :para="pvt_titleStatus.titleStatusRef.para"
                        :attr="pvt_titleStatus.titleStatusRef.attr">
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
            <div class="item-cell title-detail">
                <lm-button
                        ref="titleDetailRef"
                        refId="titleDetailRef"
                        v-show="pvt_isShow.titleDetail === 'titleDetailRef'"
                        :paraVarPair="pvt_titleDetail.titleDetailRef.paraVarPair"
                        :para="pvt_titleDetail.titleDetailRef.para"
                        :attr="pvt_titleDetail.titleDetailRef.attr">
                </lm-button>
            </div>
        </div>
        <div v-show="showDetail" class="apply-detail">
            <fillForm
                    ref="fillFormRef"
                    refId="fillFormRef"
                    v-show="pvt_isShow.fillForm === 'fillFormRef'"
                    v-for="(item, index) in pvt_fillForm.fillFormRef.forData"
                    :number="index"
                    :paraVarPair="pvt_fillForm.fillFormRef.paraVarPair"
                    :para="item.para"
                    :attr="item.attr">
            </fillForm>
            <div class="show-more">
                <lm-button
                        ref="moreRef"
                        refId="moreRef"
                        v-show="pvt_isShow.more === 'moreRef'"
                        :paraVarPair="pvt_more.moreRef.paraVarPair"
                        :para="pvt_more.moreRef.para"
                        :attr="pvt_more.moreRef.attr">
                </lm-button>
            </div>
        </div>
        <div class="detail-dialog">
            <itemDetailDialog
                    ref="detailDialogRef"
                    refId="detailDialogRef"
                    v-show="pvt_isShow.detailDialog === 'detailDialogRef'"
                    :paraVarPair="pvt_detailDialog.detailDialogRef.paraVarPair"
                    :para="pvt_detailDialog.detailDialogRef.para"
                    :attr="pvt_detailDialog.detailDialogRef.attr">
            </itemDetailDialog>
        </div>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';
    import fillForm from './fillForm';
    import itemDetailDialog from './itemDetailDialog';

    export default {
        components: {fillForm, itemDetailDialog},
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ["sys"],
        data: function () {
            return {
                itemSelected: [],
                showDetail: false,
                iconType: 'el-icon-arrow-down',
                detailBtnText: '查看详情',
                applyName: '',
                titleStatus: '',
                curTicketId: null,
                cloudBillId: null,
                curOrderId: null,
                curAppendixDataArr: [],
                showMore: false,
                infoData: null,

                mac: mac.mac,

                // 需要双向修改参数的场景，用户可直接修改以下模块参数同名的变量
                // selectedPara: this.para.selected,

                pvt_subModuleMap: {
                    subModule: ['titleNameRef', 'titleTelRef', 'titleTicketRef', 'titleMoneyRef', 'titleNumRef', 'titleStatusRef', 'titleTimeRef', 'titleDetailRef', 'fillFormRef', 'moreRef', 'detailDialogRef'],
                    vessel: ['titleName', 'titleTel', 'titleTicket', 'titleMoney', 'titleNum', 'titleStatus', 'titleTime', 'titleDetail', 'fillForm', 'more', 'detailDialog'],
                },

                // 各个容器当前显示的子模块
                pvt_isShow: {
                    titleName: null,
                    titleTel: null,
                    titleTicket: null,
                    titleMoney: null,
                    titleNum: null,
                    titleStatus: null,
                    titleTime: null,
                    titleDetail: null,
                    fillForm: null,
                    more: null,
                    detailDialog: null,
                },

                // 当前模块输入类型的事务接口名称，工具完成前需要用户手动填写
                pvt_eventPortInput: ['ToggleApply'],
            }
        },
        computed: {
            pvt_titleName: function () {
                return {
                    titleNameRef: {
                        paraVarPair: {
                            checkData: 'itemSelected'
                        },
                        para: {
                            checkData: this.itemSelected
                        },
                        attr: {
                            checkboxArr: [
                                {label: 1, text: this.applyName}
                            ]
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

            pvt_titleNum: function () {
                return {
                    titleNumRef: {
                        paraVarPair: {},
                        para: {
                            textData: [{
                                $table: this.mac.tb.groupActivityOrder,
                                $arrField: [this.mac.fd.groupActivityOrder.orderNumber],
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

            pvt_titleStatus: function () {
                return {
                    titleStatusRef: {
                        paraVarPair: {},
                        para: {
                            textData: this.titleStatus
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#606266'
                        }
                    },

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

            pvt_titleDetail: function () {
                return {
                    titleDetailRef: {
                        paraVarPair: {},
                        para: {
                            name: [this.detailBtnText, this.iconType]
                        },
                        attr: {
                            type: 'text',
                            iconIsRight: true,
                            // height: '30px',
                            size: 'mini'
                        }
                    }
                }
            },

            pvt_fillForm: function () {
                let loopModule = {
                    fillFormRef: {
                        para: {
                            curAppendixData: this.curAppendixDataArr,
                        },
                        attr: {},
                    },
                };
                let forData = this.pvt_createForData(loopModule);
                return {
                    fillFormRef: {
                        paraVarPair: {},
                        forData: forData.fillFormRef,
                    },
                };
            },

            pvt_more: function () {
                return {
                    moreRef: {
                        paraVarPair: {},
                        para: {
                            name: ['查看更多', 'el-icon-arrow-right']
                        },
                        attr: {
                            type: 'text',
                            iconIsRight: true,
                            // height: '30px',
                            size: 'mini'
                        }
                    }
                }
            },
            pvt_detailDialog: function () {
                return {
                    detailDialogRef: {
                        paraVarPair: {},
                        para: {
                            curBillId: this.para.curBillId
                        },
                        attr: {}
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
                    titleNumRef: 'titleNumRef',
                    titleStatusRef: 'titleStatusRef',
                    titleTimeRef: 'titleTimeRef',
                    titleDetailRef: 'titleDetailRef',
                    fillFormRef: 'fillFormRef',
                    moreRef: 'moreRef',
                };

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                            this.showDetail = false;
                            this.iconType = 'el-icon-arrow-down';
                            this.detailBtnText = '查看详情';
                            this.itemSelected = [];
                            this.applyName = '';
                            this.titleStatus = '';
                            this.curAppendixDataArr = [];
                            this.cloudBillId = null;
                            this.showMore = false;
                            this.infoData = null;
                            this.curOrderId = null;
                            this.curTicketId = null;

                            para.nStep = 'getBillData';
                            dbFlag++;
                            break;
                        case 'getBillData':
                            tableName = this.mac.tb.groupActivityBill;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.para.curBillId];
                            dbData[that.mac.fd.groupActivityBill.name] = [];
                            dbData[that.mac.fd.groupActivityBill.mobile] = [];
                            dbData[that.mac.fd.groupActivityBill.info] = [];
                            dbData[that.mac.fd.groupActivityBill.status] = [];
                            that.sys.api.recordRead(tableName, dbData, function () {
                                that.infoData = dbData[that.mac.fd.groupActivityBill.info][0];
                                that.applyName = dbData[that.mac.fd.groupActivityBill.name][0];

                                // 获取名单详细信息：
                                that.curAppendixDataArr.push(['姓名', dbData[that.mac.fd.groupActivityBill.name][0]]);
                                that.curAppendixDataArr.push(['手机', dbData[that.mac.fd.groupActivityBill.mobile][0]]);
                                for (let i = 0; i < that.infoData.name.length; i++) {
                                    // 将姓名，手机，以及其他信息里面的前三条数据添加到详细信息子模块：
                                    that.curAppendixDataArr.push([that.infoData.name[i], that.infoData.content[i]]);
                                    if (i >= 2) {
                                        break;
                                    }
                                }
                                switch (dbData[that.mac.fd.groupActivityBill.status][0]) {
                                    case 0:
                                        that.titleStatus = '待审核';
                                        break;
                                    case 1:
                                        that.titleStatus = '待付款';
                                        break;
                                    case 2:
                                        that.titleStatus = '待退款';
                                        break;
                                    case 3:
                                        that.titleStatus = '退款中';
                                        break;
                                    case 4:
                                        that.titleStatus = '已退款';
                                        break;
                                    case 5:
                                        that.titleStatus = '已拒绝';
                                        break;
                                    case 6:
                                        that.titleStatus = '待验票';
                                        break;
                                    case 7:
                                        that.titleStatus = '已完成';
                                        break;
                                }

                                // 获取用户填写的信息，判断它是否满5条：
                                para.infoLength = that.infoData.name.length;
                                para.infoLength >= 4 ? that.showMore = true : that.showMore = false;

                                para.nStep = 'getParentId';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'getParentId':
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
                            that.sys.api.recordRead(tableName, dbData, function () {
                                that.curTicketId = dbData[that.mac.fd.groupActivityOrder.groupActivityTicketTypeID][0];
                                para.nStep = 'getAppendixData';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'getAppendixData':
                            tableName = this.mac.tb.groupActivityAppendix;
                            expression = '';
                            dbData = {};
                            dbData[that.mac.fd.id] = [];

                            that.sys.api.recordQuery(tableName, [that.para.curBillId], expression, dbData, function (result) {
                                if (dbData[that.mac.fd.id].length > 0 && !that.showMore) {
                                    if (dbData[that.mac.fd.id].length >= 4 - para.infoLength) {
                                        that.showMore = true;
                                        for (let i = 0; i < 3 - para.infoLength; i++) {
                                            that.curAppendixDataArr.push(dbData[that.mac.fd.id][i]);
                                        }
                                    } else {
                                        for (let i = 0; i < dbData[that.mac.fd.id].length; i++) {
                                            that.curAppendixDataArr.push(dbData[that.mac.fd.id][i]);
                                        }
                                    }
                                }
                                that.forceUpdateData(function () {
                                    para.nStep = 'start_8';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                });
                            }, function () {
                            });
                            break;
                        case 'start_8':
                            that.sm[ref.moreRef].startModule(function () {
                                para.nStep = 'start_9';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_9':
                            if (para.i > that.sm[ref.fillFormRef].length - 1) {
                                para.i = 0;
                                para.nStep = 'start_10';
                                dbFlag++;
                                break;
                            }

                            that.sm[ref.fillFormRef][para.i].startModule(function () {
                                para.i++;
                                para.nStep = 'start_9';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
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
                                para.nStep = 'start_14';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_14':
                            that.sm[ref.titleNumRef].startModule(function () {
                                para.nStep = 'start_15';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_15':
                            that.sm[ref.titleStatusRef].startModule(function () {
                                para.nStep = 'start_16';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_16':
                            that.sm[ref.titleTimeRef].startModule(function () {
                                para.nStep = 'start_17';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_17':
                            that.sm[ref.titleDetailRef].startModule(function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            let refArr;
                            if (that.showMore) {
                                refArr = ['titleNameRef', 'titleTelRef', 'titleTicketRef', 'titleMoneyRef', 'titleNumRef', 'titleStatusRef', 'titleTimeRef', 'titleDetailRef', 'moreRef', 'fillFormRef'];
                            } else {
                                refArr = ['titleNameRef', 'titleTelRef', 'titleTicketRef', 'titleMoneyRef', 'titleNumRef', 'titleStatusRef', 'titleTimeRef', 'titleDetailRef', 'fillFormRef'];
                            }
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

            selectItem: function () {
                // console.error(this.itemSelected);
                if (this.itemSelected.length > 0) {
                    this.ep.ToggleApply(true, this.para.curBillId)
                } else {
                    this.ep.ToggleApply(false, this.para.curBillId)
                }

            },

            toggleDetail: function () {
                if (this.showDetail) {
                    this.showDetail = false;
                    this.iconType = 'el-icon-arrow-down';
                    this.detailBtnText = '查看详情';
                } else {
                    this.showDetail = true;
                    this.iconType = 'el-icon-arrow-up';
                    this.detailBtnText = '收起详情';
                }
                this.$nextTick(function () {
                    this.sm.titleDetailRef.startModule(function () {
                    }, function () {
                    });
                });
            },

            selectApply: function (select) {
                if (select) {
                    if (this.itemSelected.length === 0) {
                        this.itemSelected = [1];
                        this.$nextTick(function () {
                            this.sm.titleNameRef.startModule(function () {
                            }, function () {
                            });
                        });
                    }
                } else {
                    if (this.itemSelected.length === 1) {
                        this.itemSelected = [];
                        this.$nextTick(function () {
                            this.sm.titleNameRef.startModule(function () {
                            }, function () {
                            });
                        });
                    }
                }
            },

            loadMoreWrap: function () {
                this.loadMore(function () {
                }, function () {
                })
            },

            loadMore: function (successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'applyItem_loadMore';
                let dbFlag;
                let dbData;
                let tableName;
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

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                        case 'initDialog':
                            that.sm.detailDialogRef.startModule(function () {
                                para.nStep = 'showDialog';
                                if (++dbFlag === 2) {
                                    that.loadMore(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showDialog':
                            that.showSubModule('detailDialogRef', true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.loadMore(successCallBack, errorCallBack)
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

            titleNameRef_dataModifyEvent() {
                this.selectItem();
            },
            titleDetailRef_buttonClickEvent: function () {
                this.toggleDetail();
            },
            moreRef_buttonClickEvent: function () {
                this.loadMoreWrap();
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
