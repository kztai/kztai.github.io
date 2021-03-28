<template>
    <div class="ticket-item-wrap">
        <div class="ticket-title">
            <lm-link-text
                    ref="titleRef"
                    refId="titleRef"
                    v-show="pvt_isShow.title === 'titleRef'"
                    :paraVarPair="pvt_title.titleRef.paraVarPair"
                    :para="pvt_title.titleRef.para"
                    :attr="pvt_title.titleRef.attr">
            </lm-link-text>
        </div>
        <div class="ticket-content">
            <div class="ticket-content-left">
                <lm-qrcode
                        ref="qrcodeRef"
                        refId="qrcodeRef"
                        v-show="pvt_isShow.qrcode === 'qrcodeRef'"
                        :paraVarPair="pvt_qrcode.qrcodeRef.paraVarPair"
                        :para="pvt_qrcode.qrcodeRef.para"
                        :attr="pvt_qrcode.qrcodeRef.attr">
                </lm-qrcode>
                <lm-link-text
                        ref="codeNumRef"
                        refId="codeNumRef"
                        v-show="pvt_isShow.codeNum === 'codeNumRef'"
                        :paraVarPair="pvt_codeNum.codeNumRef.paraVarPair"
                        :para="pvt_codeNum.codeNumRef.para"
                        :attr="pvt_codeNum.codeNumRef.attr">
                </lm-link-text>
            </div>
            <div class="ticket-content-right">
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
                <div class="ticket-userInfo">
                    <lm-link-text
                            ref="userInfoRef"
                            refId="userInfoRef"
                            v-show="pvt_isShow.userInfo === 'userInfoRef'"
                            :paraVarPair="pvt_userInfo.userInfoRef.paraVarPair"
                            :para="pvt_userInfo.userInfoRef.para"
                            :attr="pvt_userInfo.userInfoRef.attr">
                    </lm-link-text>
                </div>
                <div class="ticket-time">
                    <lm-link-text
                            ref="timeRef"
                            refId="timeRef"
                            v-show="pvt_isShow.time === 'timeRef'"
                            :paraVarPair="pvt_time.timeRef.paraVarPair"
                            :para="pvt_time.timeRef.para"
                            :attr="pvt_time.timeRef.attr">
                    </lm-link-text>
                </div>
                <div class="ticket-place">
                    <lm-link-text
                            ref="placeRef"
                            refId="placeRef"
                            v-show="pvt_isShow.place === 'placeRef'"
                            :paraVarPair="pvt_place.placeRef.paraVarPair"
                            :para="pvt_place.placeRef.para"
                            :attr="pvt_place.placeRef.attr">
                    </lm-link-text>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';

    export default {
        components: {},
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ["sys"],
        data: function () {
            return {
                userInfo: '',
                ticketInfo: '',
                time: '',
                place: '',

                mac: mac.mac,

                pvt_subModuleMap: {
                    subModule: ['titleRef', 'qrcodeRef', 'codeNumRef', 'ticketInfoRef', 'userInfoRef', 'timeRef', 'placeRef'],
                    vessel: ['title', 'qrcode', 'codeNum', 'ticketInfo', 'userInfo', 'time', 'place'],
                },

                // 各个容器当前显示的子模块
                pvt_isShow: {
                    title: null,
                    qrcode: null,
                    codeNum: null,
                    ticketInfo: null,
                    userInfo: null,
                    time: null,
                    place: null,
                },

                // 当前模块输入类型的事务接口名称，工具完成前需要用户手动填写
                pvt_eventPortInput: [],
            }
        },
        computed: {
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
                        },
                        attr: {
                            fontSize: '16px',
                            color: '#303133'
                            // color: '#909399'
                        }
                    }
                }
            },

            pvt_codeNum: function () {
                return {
                    codeNumRef: {
                        paraVarPair: {},
                        para: {
                            textData: [{
                                $table: this.mac.tb.groupActivityBill,
                                $arrField: [this.mac.fd.groupActivityBill.code],
                                $arrValue: [this.para.curBillId]
                            }],
                        },
                        attr: {
                            fontSize: '14px',
                            color: '#303133',
                            fontWeight: true
                        }
                    }
                }
            },

            pvt_ticketInfo: function () {
                return {
                    ticketInfoRef: {
                        paraVarPair: {},
                        para: {
                            textData: this.ticketInfo
                        },
                        attr: {
                            fontSize: '16px',
                            color: '#F3900D'
                        }
                    }
                }
            },
            pvt_userInfo: function () {
                return {
                    userInfoRef: {
                        paraVarPair: {},
                        para: {
                            textData: this.userInfo
                        },
                        attr: {
                            fontSize: '14px',
                            color: '#303133'
                        }
                    }
                }
            },

            pvt_time: function () {
                return {
                    timeRef: {
                        paraVarPair: {},
                        para: {
                            textData: this.time
                        },
                        attr: {
                            fontSize: '14px',
                            color: '#303133'
                        }
                    }
                }
            },
            pvt_place: function () {
                return {
                    placeRef: {
                        paraVarPair: {},
                        para: {
                            textData: this.place
                        },
                        attr: {
                            fontSize: '14px',
                            color: '#303133'
                        }
                    }
                }
            },

            pvt_qrcode: function () {
                return {
                    qrcodeRef: {
                        paraVarPair: {},
                        para: {
                            qrUrl: [{
                                $table: this.mac.tb.groupActivityBill,
                                $arrField: [this.mac.fd.groupActivityBill.code],
                                $arrValue: [this.para.curBillId]
                            }],
                        },
                        attr: {
                            size: '110'
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
                let fnname = 'ticketItem_start';
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
                    qrcodeRef: 'qrcodeRef',
                    codeNumRef: 'codeNumRef',
                    ticketInfoRef: 'ticketInfoRef',
                    userInfoRef: 'userInfoRef',
                    timeRef: 'timeRef',
                    placeRef: 'placeRef',
                };

                    while (1) {
                        dbFlag = 0;
                        console.log(fnname + ': para.nStep = ' + para.nStep);
                        switch (para.nStep) {
                            case 0:
                                this.userInfo = '';
                                this.ticketInfo = '';
                                this.time = '';
                                this.place = '';

                                tableName = this.mac.tb.groupActivity;
                                dbData = {};
                                dbData[that.mac.fd.id] = [this.para.curActivityId];
                                dbData[that.mac.fd.groupActivity.startTime] = [];
                                dbData[that.mac.fd.groupActivity.place] = [];
                                that.sys.api.recordRead(tableName, dbData, function () {
                                    that.time = '时间：' + dbData[that.mac.fd.groupActivity.startTime][0] + ' 开始';
                                    that.place += '地点：';
                                    for(let i = 0; i < dbData[that.mac.fd.groupActivity.place][0].name.length; i++) {
                                        that.place += dbData[that.mac.fd.groupActivity.place][0].name[i];
                                    }
                                    that.place += dbData[that.mac.fd.groupActivity.place][0].place;

                                    para.nStep = 'getTicketData';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
                                break;
                            case 'getTicketData':
                                tableName = this.mac.tb.groupActivityTicketType;
                                dbData = {};
                                dbData[that.mac.fd.id] = [this.para.curTicketId];
                                dbData[that.mac.fd.groupActivityTicketType.name] = [];
                                dbData[that.mac.fd.groupActivityTicketType.price] = [];
                                that.sys.api.recordRead(tableName, dbData, function () {
                                    that.ticketInfo = dbData[that.mac.fd.groupActivityTicketType.name][0] + ' ￥' + dbData[that.mac.fd.groupActivityTicketType.price][0];
                                    para.nStep = 'getBillData';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
                                break;
                            case 'getBillData':
                                tableName = this.mac.tb.groupActivityBill;
                                dbData = {};
                                dbData[that.mac.fd.id] = [this.para.curBillId];
                                dbData[that.mac.fd.groupActivityBill.name] = [];
                                dbData[that.mac.fd.groupActivityBill.mobile] = [];
                                that.sys.api.recordRead(tableName, dbData, function () {
                                    that.userInfo = dbData[that.mac.fd.groupActivityBill.name][0] + '，（' + dbData[that.mac.fd.groupActivityBill.mobile][0] + '）';
                                    para.nStep = 'start_1';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
                                break;
                            case 'start_1':
                                that.forceUpdateData(function () {
                                    that.sm[ref.titleRef].startModule(function () {
                                        para.nStep = 'start_2';
                                        if (++dbFlag === 2) {
                                            that.startModule(successCallBack, errorCallBack)
                                        }
                                    }, function () {
                                    });
                                });
                                break;
                            case 'start_2':
                                that.sm[ref.qrcodeRef].startModule(function () {
                                    para.nStep = 'start_3';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
                                break;
                            case 'start_3':
                                that.sm[ref.codeNumRef].startModule(function () {
                                    para.nStep = 'start_4';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                }, function () {
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
                                that.sm[ref.userInfoRef].startModule(function () {
                                    para.nStep = 'start_6';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
                                break;
                            case 'start_6':
                                that.sm[ref.timeRef].startModule(function () {
                                    para.nStep = 'start_7';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
                                break;
                            case 'start_7':
                                that.sm[ref.placeRef].startModule(function () {
                                    para.nStep = 'showSubModule';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
                                break;
                            case 'showSubModule':
                                let refArr = ['titleRef', 'qrcodeRef', 'codeNumRef', 'ticketInfoRef', 'userInfoRef', 'timeRef', 'placeRef'];
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
            }
        }
    }
</script>

<style lang="scss">
    .ticket-item-wrap {
        width: 600px;
        height: 220px;
        background: #fff url("../../../../../assets/ticket.png") 0 0 no-repeat;
        background-size: 600px 220px;
        margin-bottom: 10px;
        padding: 20px 20px 20px 100px;
        box-sizing: border-box;
        .ticket-title {
            margin-bottom: 30px;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .ticket-content {
            overflow: auto;
            display: flex;
            .ticket-content-left {
                flex: 0 0 120px;
                width: 120px;
                margin-right: 20px;

            }
            .ticket-content-right {
                flex: 1;
                .ticket-info, .ticket-userInfo, .ticket-time, .ticket-place {
                    margin-top: 10px;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                }
            }
        }
    }
</style>
