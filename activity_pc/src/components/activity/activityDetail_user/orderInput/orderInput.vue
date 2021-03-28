<template>
    <div class="order-input-wrap" ref="orderInputRef">
        <div class="identify" v-if="identified">
            <lm-link-text
                    ref="identifyRef"
                    refId="identifyRef"
                    v-show="pvt_isShow.identify === 'identifyRef'"
                    :paraVarPair="pvt_identify.identifyRef.paraVarPair"
                    :para="pvt_identify.identifyRef.para"
                    :attr="pvt_identify.identifyRef.attr">
            </lm-link-text>
        </div>
        <div class="ticket-info">
            <lm-link-text
                    ref="ticketInfoRef"
                    refId="ticketInfoRef"
                    v-show="pvt_isShow.ticketInfo === 'ticketInfoRef'"
                    :paraVarPair="pvt_ticketInfo.ticketInfoRef.paraVarPair"
                    :para="pvt_ticketInfo.ticketInfoRef.para"
                    :attr="pvt_ticketInfo.ticketInfoRef.attr">
            </lm-link-text>
        </div>
        <div class="ticket-table-title">
            <div class="table-title-item">
                <lm-link-text
                        ref="timeTextRef"
                        refId="timeTextRef"
                        v-show="pvt_isShow.timeText === 'timeTextRef'"
                        :paraVarPair="pvt_timeText.timeTextRef.paraVarPair"
                        :para="pvt_timeText.timeTextRef.para"
                        :attr="pvt_timeText.timeTextRef.attr">
                </lm-link-text>
            </div>
            <div class="table-title-item">
                <lm-link-text
                        ref="nameTextRef"
                        refId="nameTextRef"
                        v-show="pvt_isShow.nameText === 'nameTextRef'"
                        :paraVarPair="pvt_nameText.nameTextRef.paraVarPair"
                        :para="pvt_nameText.nameTextRef.para"
                        :attr="pvt_nameText.nameTextRef.attr">
                </lm-link-text>
            </div>
            <div class="table-title-item">
                <lm-link-text
                        ref="priceTextRef"
                        refId="priceTextRef"
                        v-show="pvt_isShow.priceText === 'priceTextRef'"
                        :paraVarPair="pvt_priceText.priceTextRef.paraVarPair"
                        :para="pvt_priceText.priceTextRef.para"
                        :attr="pvt_priceText.priceTextRef.attr">
                </lm-link-text>
            </div>
            <div class="table-title-item">
                <lm-link-text
                        ref="numTextRef"
                        refId="numTextRef"
                        v-show="pvt_isShow.numText === 'numTextRef'"
                        :paraVarPair="pvt_numText.numTextRef.paraVarPair"
                        :para="pvt_numText.numTextRef.para"
                        :attr="pvt_numText.numTextRef.attr">
                </lm-link-text>
            </div>
            <div class="table-title-item">
                <lm-link-text
                        ref="totalTextRef"
                        refId="totalTextRef"
                        v-show="pvt_isShow.totalText === 'totalTextRef'"
                        :paraVarPair="pvt_totalText.totalTextRef.paraVarPair"
                        :para="pvt_totalText.totalTextRef.para"
                        :attr="pvt_totalText.totalTextRef.attr">
                </lm-link-text>
            </div>
        </div>
        <div class="ticket-table-content">
            <lm-link-text
                    ref="timeContentRef"
                    refId="timeContentRef"
                    v-show="pvt_isShow.timeContent === 'timeContentRef'"
                    :paraVarPair="pvt_timeContent.timeContentRef.paraVarPair"
                    :para="pvt_timeContent.timeContentRef.para"
                    :attr="pvt_timeContent.timeContentRef.attr">
            </lm-link-text>
            <lm-link-text
                    ref="nameContentRef"
                    refId="nameContentRef"
                    v-show="pvt_isShow.nameContent === 'nameContentRef'"
                    :paraVarPair="pvt_nameContent.nameContentRef.paraVarPair"
                    :para="pvt_nameContent.nameContentRef.para"
                    :attr="pvt_nameContent.nameContentRef.attr">
            </lm-link-text>
            <lm-link-text
                    ref="priceContentRef"
                    refId="priceContentRef"
                    v-show="pvt_isShow.priceContent === 'priceContentRef'"
                    :paraVarPair="pvt_priceContent.priceContentRef.paraVarPair"
                    :para="pvt_priceContent.priceContentRef.para"
                    :attr="pvt_priceContent.priceContentRef.attr">
            </lm-link-text>
            <lm-input-number
                    ref="numContentRef"
                    refId="numContentRef"
                    v-show="pvt_isShow.numContent === 'numContentRef'"
                    :paraVarPair="pvt_numContent.numContentRef.paraVarPair"
                    :para="pvt_numContent.numContentRef.para"
                    :attr="pvt_numContent.numContentRef.attr">
            </lm-input-number>
            <lm-link-text
                    ref="totalContentRef"
                    refId="totalContentRef"
                    v-show="pvt_isShow.totalContent === 'totalContentRef'"
                    :paraVarPair="pvt_totalContent.totalContentRef.paraVarPair"
                    :para="pvt_totalContent.totalContentRef.para"
                    :attr="pvt_totalContent.totalContentRef.attr">
            </lm-link-text>
        </div>
        <div class="apply-info">
            <lm-link-text
                    ref="applyInfoRef"
                    refId="applyInfoRef"
                    v-show="pvt_isShow.applyInfo === 'applyInfoRef'"
                    :paraVarPair="pvt_applyInfo.applyInfoRef.paraVarPair"
                    :para="pvt_applyInfo.applyInfoRef.para"
                    :attr="pvt_applyInfo.applyInfoRef.attr">
            </lm-link-text>
        </div>
        <div class="info-list">
            <infoList
                    ref="infoListRef"
                    refId="infoListRef"
                    v-show="pvt_isShow.infoList === 'infoListRef'"
                    v-for="(item, index) in pvt_infoList.infoListRef.forData"
                    :number="index"
                    :paraVarPair="pvt_infoList.infoListRef.paraVarPair"
                    :para="item.para"
                    :attr="item.attr">
            </infoList>
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
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';
    import infoList from './infoList';

    export default {
        components: {infoList},
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ["sys"],
        data: function () {
            return {
                curActivityIdArr: [],
                billNum: 1,
                billNumClone: 1,
                activityTime: '',
                ticketPriceText: '',
                ticketTotal: '',
                curOrderId: 1,
                orderNum: 0,
                orderData: [],
                approval: false,
                identified: true,

                mac: mac.mac,

                // 需要双向修改参数的场景，用户可直接修改以下模块参数同名的变量
                // selectedPara: this.para.selected,

                pvt_subModuleMap: {
                    subModule: ['identifyRef', 'ticketInfoRef', 'timeTextRef', 'nameTextRef', 'priceTextRef', 'numTextRef', 'totalTextRef', 'timeContentRef', 'nameContentRef', 'priceContentRef', 'numContentRef', 'totalContentRef', 'applyInfoRef', 'infoListRef', 'confirmRef', 'cancelRef'],
                    vessel: ['identify', 'ticketInfo', 'timeText', 'nameText', 'priceText', 'numText', 'totalText', 'timeContent', 'nameContent', 'priceContent', 'numContent', 'totalContent', 'applyInfo', 'infoList', 'confirm', 'cancel'],
                },

                // 各个容器当前显示的子模块
                pvt_isShow: {
                    identify: null,
                    ticketInfo: null,
                    timeText: null,
                    nameText: null,
                    priceText: null,
                    numText: null,
                    totalText: null,
                    timeContent: null,
                    nameContent: null,
                    priceContent: null,
                    numContent: null,
                    totalContent: null,
                    applyInfo: null,
                    infoList: null,
                    confirm: null,
                    cancel: null,
                },

                // 当前模块输入类型的事务接口名称，工具完成前需要用户手动填写
                pvt_eventPortInput: ['moduleChangeEvent', 'orderNewIn'],
            }
        },
        computed: {
            pvt_identify: function () {
                return {
                    identifyRef: {
                        paraVarPair: {},
                        para: {
                            textData: '该主办方已完成企业实名认证！'
                        },
                        attr: {
                            fontSize: '14px',
                            color: '#0399ef',
                            icon: 'el-icon-s-flag'
                        }
                    }
                }
            },

            pvt_ticketInfo: function () {
                return {
                    ticketInfoRef: {
                        paraVarPair: {},
                        para: {
                            textData: '票种信息'
                        },
                        attr: {
                            fontSize: '16px',
                            color: '#303133',
                            fontWeight: true
                        }
                    }
                }
            },

            pvt_timeText: function () {
                return {
                    timeTextRef: {
                        paraVarPair: {},
                        para: {
                            textData: '活动时间'
                        },
                        attr: {
                            fontSize: '13px',
                            color: '#909399'
                        }
                    }
                }
            },

            pvt_nameText: function () {
                return {
                    nameTextRef: {
                        paraVarPair: {},
                        para: {
                            textData: '票种名称'
                        },
                        attr: {
                            fontSize: '13px',
                            color: '#909399',
                        }
                    }
                }
            },

            pvt_priceText: function () {
                return {
                    priceTextRef: {
                        paraVarPair: {},
                        para: {
                            textData: '单价'
                        },
                        attr: {
                            fontSize: '13px',
                            color: '#909399'
                        }
                    }
                }
            },

            pvt_numText: function () {
                return {
                    numTextRef: {
                        paraVarPair: {},
                        para: {
                            textData: '数量'
                        },
                        attr: {
                            fontSize: '13px',
                            color: '#909399'
                        }
                    },

                }
            },

            pvt_totalText: function () {
                return {
                    totalTextRef: {
                        paraVarPair: {},
                        para: {
                            textData: '小计'
                        },
                        attr: {
                            fontSize: '13px',
                            color: '#909399'
                        }
                    }
                }
            },

            pvt_timeContent: function () {
                return {
                    timeContentRef: {
                        paraVarPair: {},
                        para: {
                            textData: this.activityTime
                        },
                        attr: {
                            fontSize: '13px',
                            color: '#606266',
                            textAlign: 'center'
                        }
                    }
                }
            },

            pvt_nameContent: function () {
                return {
                    nameContentRef: {
                        paraVarPair: {},
                        para: {
                            textData: [{
                                $table: this.mac.tb.groupActivityTicketType,
                                $arrField: [this.mac.fd.groupActivityTicketType.name],
                                $arrValue: [this.para.curTicketId]
                            }]
                        },
                        attr: {
                            fontSize: '13px',
                            color: '#606266',
                            textAlign: 'center'
                        }
                    }
                }
            },

            pvt_priceContent: function () {
                return {
                    priceContentRef: {
                        paraVarPair: {},
                        para: {
                            textData: this.ticketPriceText
                        },
                        attr: {
                            fontSize: '13px',
                            color: '#606266',
                            textAlign: 'center'
                        }
                    }
                }
            },

            pvt_numContent: function () {
                return {
                    numContentRef: {
                        paraVarPair: {
                            value: 'billNum'
                        },
                        para: {
                            value: this.billNum
                        },
                        attr: {
                            decimals: 0,
                            min: 1,
                            size: 'mini'
                        }
                    },

                }
            },

            pvt_totalContent: function () {
                return {
                    totalContentRef: {
                        paraVarPair: {},
                        para: {
                            textData: this.ticketTotal
                        },
                        attr: {
                            fontSize: '13px',
                            color: '#606266',
                            textAlign: 'center'
                        }
                    }
                }
            },

            pvt_applyInfo: function () {
                return {
                    applyInfoRef: {
                        paraVarPair: {},
                        para: {
                            textData: '填写报名信息'
                        },
                        attr: {
                            fontSize: '16px',
                            // color: '#606266'
                            color: '#303133',
                            fontWeight: true
                        }
                    }
                }
            },

            pvt_infoList: function () {
                let loopModule = {
                    infoListRef: {
                        para: {
                            curActivityId: this.curActivityIdArr,
                            curBillId: this.curBillIdArr,
                        },
                        attr: {},
                    },
                };
                let forData = this.pvt_createForData(loopModule);
                return {
                    infoListRef: {
                        paraVarPair: {},
                        forData: forData.infoListRef,
                    },
                };
            },

            pvt_confirm: function () {
                return {
                    confirmRef: {
                        paraVarPair: {},
                        para: {
                            name: ['下一步', '']
                        },
                        attr: {
                            type: 'primary',
                            width: '218px'
                            // size: 'mini'
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
                            plain: true,
                            width: '160px'
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
                let fnname = 'orderInput_start';
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
                    identifyRef: 'identifyRef',
                    ticketInfoRef: 'ticketInfoRef',
                    timeTextRef: 'timeTextRef',
                    nameTextRef: 'nameTextRef',
                    priceTextRef: 'priceTextRef',
                    numTextRef: 'numTextRef',
                    totalTextRef: 'totalTextRef',
                    timeContentRef: 'timeContentRef',
                    nameContentRef: 'nameContentRef',
                    priceContentRef: 'priceContentRef',
                    numContentRef: 'numContentRef',
                    totalContentRef: 'totalContentRef',
                    applyInfoRef: 'applyInfoRef',
                    infoListRef: 'infoListRef',
                    confirmRef: 'confirmRef',
                    cancelRef: 'cancelRef',
                };

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                            this.curActivityIdArr = [];
                            this.curBillIdArr = [];
                            this.curOrderId = 1;
                            this.billNum = this.para.billNum;
                            this.billNumClone = this.para.billNum;
                            this.orderNum = 0;

                            tableName = this.mac.tb.groupActivityTicketType;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.para.curTicketId];
                            dbData[that.mac.fd.groupActivityTicketType.price] = [];
                            // dbData[that.mac.fd.groupActivityTicketType.name] = [];
                            dbData[that.mac.fd.groupActivityTicketType.startTime] = [];
                            dbData[that.mac.fd.groupActivityTicketType.endTime] = [];
                            dbData[that.mac.fd.groupActivityTicketType.approval] = [];

                            that.sys.api.recordRead(tableName, dbData, function () {
                                that.ticketPrice = dbData[that.mac.fd.groupActivityTicketType.price][0];
                                that.ticketPriceText = '￥' + that.ticketPrice;
                                that.activityTime = dbData[that.mac.fd.groupActivityTicketType.startTime][0] + ' ~ ' + dbData[that.mac.fd.groupActivityTicketType.endTime][0];
                                that.ticketTotal = '￥' + dbData[that.mac.fd.groupActivityTicketType.price][0] * that.billNum;
                                if(dbData[that.mac.fd.groupActivityTicketType.approval][0] === that.mac.enum.groupActivityTicketType.approval.yes) {
                                    that.approval = true;
                                }

                                para.nStep = 'newOrder';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'newOrder':
                            let curTime = that.getTime(new Date());
                            let timestamp = new Date().getTime();
                            that.orderNumber = Number(that.mac.enum.groupActivityOrder.orderNumberType.activity + '888' + timestamp.toString().slice(0, 10));

                            tableName = this.mac.tb.groupActivityOrder;
                            dbData = {};
                            dbData[that.mac.fd.groupActivityOrder.price] = [that.ticketPrice];
                            dbData[that.mac.fd.groupActivityOrder.groupActivityID] = [that.para.activityId];
                            dbData[that.mac.fd.groupActivityOrder.groupActivityTicketTypeID] = [that.para.curTicketId];
                            dbData[that.mac.fd.groupActivityOrder.createTime] = [curTime];
                            dbData[that.mac.fd.groupActivityOrder.orderNumber] = [that.orderNumber];
                            if(that.ticketPrice === 0) {
                                dbData[that.mac.fd.groupActivityOrder.status] = [that.mac.enum.groupActivityOrder.status.finish];
                            } else {
                                dbData[that.mac.fd.groupActivityOrder.status] = [that.mac.enum.groupActivityOrder.status.pay];
                            }

                            that.sys.api.recordNew(tableName, null, dbData, function () {
                                that.curOrderId = dbData[that.mac.fd.id][0];

                                para.nStep = 'newBill';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'newBill':
                            if(para.i >= that.billNum) {
                                para.i = 0;
                                para.nStep = 'start_3';
                                dbFlag++;
                                break;
                            }

                            that.orderNum++;

                            tableName = this.mac.tb.groupActivityBill;
                            dbData = {};
                            dbData[that.mac.fd.groupActivityBill.number] = [that.orderNum];
                            dbData[that.mac.fd.groupActivityBill.code] = [that.orderNumber + '' + that.orderNum];

                            if(that.ticketPrice === 0) {
                                if(that.approval) {
                                    dbData[that.mac.fd.groupActivityBill.status] = [that.mac.enum.groupActivityBill.status.check];
                                } else {
                                    dbData[that.mac.fd.groupActivityBill.status] = [that.mac.enum.groupActivityBill.status.checkTicket];
                                }
                            } else {
                                dbData[that.mac.fd.groupActivityBill.status] = [that.mac.enum.groupActivityBill.status.pay];
                            }

                            that.sys.api.recordNew(tableName, that.curOrderId, dbData, function () {
                                that.curBillIdArr.push(dbData[that.mac.fd.id][0]);
                                that.curActivityIdArr.push(that.para.activityId);
                                para.i++;
                                para.nStep = 'newBill';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_3':
                            that.forceUpdateData(function () {
                                that.sm[ref.identifyRef].startModule(function () {
                                    para.nStep = 'start_4';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
                            });
                            break;
                        case 'start_4':
                            that.sm[ref.ticketInfoRef].startModule(function () {
                                para.nStep = 'start_5';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_5':
                            that.forceUpdateData(function () {
                                that.sm[ref.timeTextRef].startModule(function () {
                                    para.nStep = 'start_6';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
                            });
                            break;
                        case 'start_6':
                            that.sm[ref.nameTextRef].startModule(function () {
                                para.nStep = 'start_7';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_7':
                            that.sm[ref.priceTextRef].startModule(function () {
                                para.nStep = 'start_8';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_8':
                            that.sm[ref.numTextRef].startModule(function () {
                                para.nStep = 'start_9';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_9':
                            if (para.i > that.sm[ref.infoListRef].length - 1) {
                                para.i = 0;
                                para.nStep = 'start_10';
                                dbFlag++;
                                break;
                            }

                            that.sm[ref.infoListRef][para.i].startModule(function () {
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
                                that.sm[ref.totalTextRef].startModule(function () {
                                    para.nStep = 'start_11';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
                            });
                            break;
                        case 'start_11':
                            that.sm[ref.timeContentRef].startModule(function () {
                                para.nStep = 'start_12';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_12':
                            that.forceUpdateData(function () {
                                that.sm[ref.nameContentRef].startModule(function () {
                                    para.nStep = 'start_13';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
                            });
                            break;
                        case 'start_13':
                            that.sm[ref.priceContentRef].startModule(function () {
                                para.nStep = 'start_14';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_14':
                            that.sm[ref.numContentRef].startModule(function () {
                                para.nStep = 'start_15';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_15':
                            that.sm[ref.totalContentRef].startModule(function () {
                                para.nStep = 'start_16';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_16':
                            that.sm[ref.applyInfoRef].startModule(function () {
                                para.nStep = 'start_17';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_17':
                            that.sm[ref.confirmRef].startModule(function () {
                                para.nStep = 'start_18';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_18':
                            that.sm[ref.cancelRef].startModule(function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            let refArr = ['identifyRef', 'ticketInfoRef', 'timeTextRef', 'nameTextRef', 'priceTextRef', 'numTextRef', 'totalTextRef', 'timeContentRef', 'nameContentRef', 'priceContentRef', 'numContentRef', 'totalContentRef', 'applyInfoRef', 'infoListRef', 'confirmRef', 'cancelRef'];
                            that.showSubModule(refArr, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'end':
                            // that.identified = false;

                            let $orderInputRef = that.$refs.orderInputRef;
                            let screenHeight = document.documentElement.clientHeight;
                            $orderInputRef.style.minHeight = screenHeight - 90 - 117 + 'px';
                            para.successCallBack();
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },

            getTime: function(time) {
                var day = time.getDate();   // 得到这是这个月的第几天
                var year = time.getFullYear();   //得到这是第几年
                var month = time.getMonth() + 1;  // getMonth()获得的是0-11，所以要+1
                var hour = time.getHours();
                var minute = time.getMinutes();

                return year + "-" + zero(month) + "-" + zero(day) + " "
                    + zero(hour) + ":" + zero(minute);

                function zero(value) {
                    return value < 10 ? "0" + value : value;
                }
            },
            
            billNumChangeWrap() {
                this.billNumChange(function () {

                }, function () {

                });
            },
            billNumChange: function (successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'orderInput_billNumChange';
                let dbFlag;
                let dbData;
                let tableName;
                let record;
                let condition;
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
                            if(that.billNum > that.billNumClone) {
                                para.nStep = 'addBill';
                            } else if(that.billNum < that.billNumClone) {
                                para.nStep = 'queryBill';
                            } else {
                                para.nStep = 'end';
                            }
                            that.billNumClone = that.billNum;
                            dbFlag++;
                            break;
                        case 'addBill':
                            that.orderNum++;

                            tableName = this.mac.tb.groupActivityBill;
                            dbData = {};
                            dbData[that.mac.fd.groupActivityBill.number] = [that.orderNum];
                            dbData[that.mac.fd.groupActivityBill.code] = [that.orderNumber + '' + that.orderNum];

                            if(that.ticketPrice === 0) {
                                if(that.approval) {
                                    dbData[that.mac.fd.groupActivityBill.status] = [that.mac.enum.groupActivityBill.status.check];
                                } else {
                                    dbData[that.mac.fd.groupActivityBill.status] = [that.mac.enum.groupActivityBill.status.checkTicket];
                                }
                            } else {
                                dbData[that.mac.fd.groupActivityBill.status] = [that.mac.enum.groupActivityBill.status.pay];
                            }

                            that.sys.api.recordNew(tableName, that.curOrderId, dbData, function () {
                                that.curBillIdArr.push(dbData[that.mac.fd.id][0]);
                                that.curActivityIdArr.push(that.para.activityId);

                                para.nStep = 'refreshInfoList';
                                if (++dbFlag === 2) {
                                    that.billNumChange(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'refreshInfoList':
                            that.forceUpdateData(function () {
                                that.sm.infoListRef[that.curBillIdArr.length - 1].startModule(function () {
                                    para.nStep = 'refreshTotal';
                                    if (++dbFlag === 2) {
                                        that.billNumChange(successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
                            });
                            break;
                        case 'queryBill':
                            tableName = this.mac.tb.groupActivityBill;
                            condition = '';
                            dbData = {};
                            dbData[that.mac.fd.id] = [];

                            that.sys.api.recordQuery(tableName, [that.curOrderId], condition, dbData, function () {
                                para.lastBillId = dbData[that.mac.fd.id][dbData[that.mac.fd.id].length - 1];

                                para.nStep = 'reduceBill';
                                if (++dbFlag === 2) {
                                    that.billNumChange(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'reduceBill':
                            that.orderNum--;
                            tableName = this.mac.tb.groupActivityBill;
                            record = [para.lastBillId];

                            that.sys.api.recordDelete(tableName, record, function () {
                                that.curBillIdArr.splice(that.curBillIdArr.length - 1, 1);
                                that.curActivityIdArr.splice(that.curActivityIdArr.length - 1, 1);

                                para.nStep = 'refreshTotal';
                                if (++dbFlag === 2) {
                                    that.billNumChange(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'refreshTotal':
                            that.ticketTotal = '￥' + that.ticketPrice * that.billNum;
                            that.forceUpdateData(function () {
                                that.sm.totalContentRef.startModule(function () {
                                    para.nStep = 'end';
                                    if (++dbFlag === 2) {
                                        that.billNumChange(successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
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

            orderConfirmWrap() {
                this.orderConfirm(function () {
                    
                }, function () {
                    
                })
            },
            orderConfirm: function (successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'orderInput_orderConfirm';
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
                            that.orderData = [];
                            for(let i = 0; i < that.sm.infoListRef.length; i++) {
                                that.orderData.push(that.sm.infoListRef[i].getInfo());
                            }
                            para.nStep = 'isLegal';
                            dbFlag++;
                            break;
                        case 'isLegal':
                            let isError = false;
                            orderData:
                            for(let i = 0; i < that.orderData.length; i++) {
                                for(let j = 0; j < that.orderData[i].length; j++) {
                                    let key = Object.keys(that.orderData[i][j]);
                                    if(that.orderData[i][j][key][1] && !that.orderData[i][j][key][0]) {
                                        let errMsg = '第' + (i+1) + '位报名人的' + key + '错误！';
                                        that.$message.error(errMsg);
                                        isError = true;
                                        break orderData;
                                    }
                                }
                            }
                            if(isError) {
                                para.nStep = 'end';
                            } else {
                                para.nStep = 'modifyBill';
                            }
                            dbFlag++;
                            break;
                        case 'modifyBill':
                            if(para.i >= that.curBillIdArr.length) {
                                para.i = 0;
                                para.nStep = 'uploadOrder';
                                dbFlag++;
                                break;
                            }

                            tableName = this.mac.tb.groupActivityBill;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.curBillIdArr[para.i]];
                            dbData[that.mac.fd.groupActivityBill.info] = [];
                            dbData[that.mac.fd.groupActivityBill.info].push({name: [], content: []});

                            for(let j = 0; j < that.orderData[para.i].length; j++) {
                                let key = Object.keys(that.orderData[para.i][j])[0];
                                if(key === '姓名') {
                                    dbData[that.mac.fd.groupActivityBill.name] = [that.orderData[para.i][j][key][0]];
                                } else if(key === '手机') {
                                    dbData[that.mac.fd.groupActivityBill.mobile] = [that.orderData[para.i][j][key][0]];
                                } else {
                                    dbData[that.mac.fd.groupActivityBill.info][0].name.push(key);
                                    dbData[that.mac.fd.groupActivityBill.info][0].content.push(that.orderData[para.i][j][key][0]);
                                }
                            }

                            that.sys.api.recordModify(tableName, dbData, function () {
                                para.i++;
                                para.nStep = 'modifyBill';
                                if (++dbFlag === 2) {
                                    that.orderConfirm(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        // case 'orderStatusChange':
                        //     if(that.ticketPrice === 0) {
                        //         tableName = this.mac.tb.groupActivityOrder;
                        //         dbData = {};
                        //         dbData[that.mac.fd.id] = [that.curOrderId];
                        //         dbData[that.mac.fd.groupActivityOrder.status] = [that.mac.enum.groupActivityOrder.status.finish];
                        //
                        //         that.sys.api.recordModify(tableName, dbData, function () {
                        //             para.nStep = 'uploadOrder';
                        //             if (++dbFlag === 2) {
                        //                 that.orderConfirm(successCallBack, errorCallBack)
                        //             }
                        //         }, function () {
                        //         });
                        //     } else {
                        //         para.nStep = 'uploadOrder';
                        //         dbFlag++
                        //     }
                        //     break;
                        case 'uploadOrder':
                            tableName = this.mac.tb.groupActivityOrder;
                            record = [that.curOrderId];

                            that.sys.api.dataOutput(tableName, record, '', function (result) {
                                let orderData;

                                that.ep.orderNewIn(result[0], function () {
                                }, function () {
                                });
                                if(that.ticketPrice === 0) {
                                    if(that.approval) {
                                        // 免费票，需要审批，跳到审批页面：
                                        that.ep.moduleChangeEvent(that.mac.moduleType.orderApproval);
                                    } else {
                                        // 免费票，不需要审批，跳到报名成功页面：
                                        orderData = {
                                            curActivityId: that.para.activityId,
                                            curTicketId: that.para.curTicketId,
                                            curBillIdArr: that.curBillIdArr
                                        };
                                        that.ep.moduleChangeEvent(that.mac.moduleType.applySuccess, orderData);
                                    }
                                } else {
                                    // 收费票，跳到支付页面：
                                    orderData = {
                                        curActivityId: that.para.activityId,
                                        curTicketId: that.para.curTicketId,
                                        curBillIdArr: that.curBillIdArr,
                                        curOrderId: that.curOrderId,
                                    };
                                    that.ep.moduleChangeEvent(that.mac.moduleType.orderConfirm, orderData);
                                }

                                // let msg = '报名成功，' + '审核：' + that.approval + '，票价：' + that.ticketPrice;
                                // alert(msg);

                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.orderConfirm(successCallBack, errorCallBack)
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

            orderCancel() {
                let that = this;
                that.ep.moduleChangeEvent(that.mac.moduleType.activityDetail, {});
                // let msg = '取消报名成功，' + '审核：' + that.approval + '，票价：' + that.ticketPrice;
                // alert(msg);
                // let tableName = this.mac.tb.groupActivityOrder;
                // let record = [that.curOrderId];
                //
                // that.sys.api.recordDelete(tableName, record, function () {
                //     that.curBillIdArr = [];
                //     that.curActivityIdArr = [];
                //
                //
                // }, function () {
                // });
            },


            numContentRef_dataModifyEvent() {
                this.billNumChangeWrap();
            },
            confirmRef_buttonClickEvent: function () {
                this.orderConfirmWrap();
            },
            cancelRef_buttonClickEvent: function () {
                this.orderCancel();
            },
        }
    }
</script>
<style lang="scss">
    .order-input-wrap {
        width: 100%;
        /*height: 700px;*/
        padding: 20px 40px;
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 0 8px 0 rgba(48, 49, 51, 0.1);
        color: #303133;
        box-sizing: border-box;
        /*overflow: auto;*/
        .identify {
            margin-bottom: 20px;
            padding: 16px 10px;
            background-color: #e1f4ff;
        }
        .ticket-info, .apply-info {
            display: inline-block;
            margin-bottom: 20px;
            padding: 0 20px 4px 0;
            border-bottom: 2px solid #409EFF;
        }
        .ticket-table-title {
            display: flex;
            justify-content: space-around;
            padding: 10px 0;
            background-color: #f5f7fa;
            border: 1px solid #e4e4e4;
            .table-title-item {
                flex:1;
                text-align: center;
            }
        }
        .ticket-table-content {
            display: flex;
            justify-content: space-around;
            padding: 20px 0;
            margin-bottom: 40px;
            border: 1px solid #e4e4e4;
            border-top: none;
            .link-text {
                line-height: 28px;
            }
            .link-text, .input-number-component {
                text-align: center;
                flex: 1;
            }
        }
        .info-list {
            margin-bottom: 20px;
            /*.info-list-wrap {*/
                /*border-bottom: 1px solid #e4e4e4;*/
                /*&:last-child {*/
                    /*border-bottom: none;*/
                /*}*/
            /*}*/
        }
        .btns {
            .lm-button {
                display: inline-block;
                margin-right: 20px;
            }
        }
    }
</style>
