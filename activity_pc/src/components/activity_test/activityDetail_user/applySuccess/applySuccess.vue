<template>
    <div class="apply-success-wrap" ref="applySuccessRef">
        <div class="success-img">
            <img src="../../../../assets/报名成功.png" width="84" height="84" alt="">
            <!--<lm-image-->
                    <!--ref="emptyImgRef"-->
                    <!--refId="emptyImgRef"-->
                    <!--v-show="pvt_isShow.emptyImg === 'emptyImgRef'"-->
                    <!--:paraVarPair="pvt_emptyImg.emptyImgRef.paraVarPair"-->
                    <!--:para="pvt_emptyImg.emptyImgRef.para"-->
                    <!--:attr="pvt_emptyImg.emptyImgRef.attr">-->
            <!--</lm-image>-->
        </div>
        <div class="success-title">
            <lm-link-text
                    ref="titleRef"
                    refId="titleRef"
                    v-show="pvt_isShow.title === 'titleRef'"
                    :paraVarPair="pvt_title.titleRef.paraVarPair"
                    :para="pvt_title.titleRef.para"
                    :attr="pvt_title.titleRef.attr">
            </lm-link-text>
        </div>
        <div class="empty-desc">
            <lm-link-text
                    ref="emptyDescRef"
                    refId="emptyDescRef"
                    v-show="pvt_isShow.emptyDesc === 'emptyDescRef'"
                    :paraVarPair="pvt_emptyDesc.emptyDescRef.paraVarPair"
                    :para="pvt_emptyDesc.emptyDescRef.para"
                    :attr="pvt_emptyDesc.emptyDescRef.attr">
            </lm-link-text>
        </div>
        <div class="success-btn">
            <lm-button
                    ref="emptyBtnRef"
                    refId="emptyBtnRef"
                    v-show="pvt_isShow.emptyBtn === 'emptyBtnRef'"
                    :paraVarPair="pvt_emptyBtn.emptyBtnRef.paraVarPair"
                    :para="pvt_emptyBtn.emptyBtnRef.para"
                    :attr="pvt_emptyBtn.emptyBtnRef.attr">
            </lm-button>
            <lm-button
                    ref="detailBtnRef"
                    refId="detailBtnRef"
                    v-show="pvt_isShow.detailBtn === 'detailBtnRef'"
                    :paraVarPair="pvt_detailBtn.detailBtnRef.paraVarPair"
                    :para="pvt_detailBtn.detailBtnRef.para"
                    :attr="pvt_detailBtn.detailBtnRef.attr">
            </lm-button>
        </div>
        <div class="ticket-dialog">
            <ticketDetail
                    ref="dialogRef"
                    refId="dialogRef"
                    v-show="pvt_isShow.dialog === 'dialogRef'"
                    :paraVarPair="pvt_dialog.dialogRef.paraVarPair"
                    :para="pvt_dialog.dialogRef.para"
                    :attr="pvt_dialog.dialogRef.attr">
            </ticketDetail>
        </div>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';
    import ticketDetail from './ticketDetail';

    export default {
        components: {ticketDetail},
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ["sys"],
        data: function () {
            return {
                mac: mac.mac,

                initDialog: false,

                pvt_subModuleMap: {
                    subModule: ['emptyImgRef', 'emptyDescRef', 'emptyBtnRef', 'detailBtnRef', 'titleRef', 'dialogRef'],
                    vessel: ['emptyImg', 'emptyDesc', 'emptyBtn', 'detailBtn', 'title', 'dialog'],
                },

                // 各个容器当前显示的子模块
                pvt_isShow: {
                    emptyImg: null,
                    emptyDesc: null,
                    emptyBtn: null,
                    title: null,
                    detailBtn: null,
                    dialog: null,
                },

                // 当前模块输入类型的事务接口名称，工具完成前需要用户手动填写
                pvt_eventPortInput: ['listPageEvent'],
            }
        },
        computed: {
            pvt_dialog: function () {
                return {
                    dialogRef: {
                        paraVarPair: {},
                        para: {
                            curActivityId: this.para.data.curActivityId,
                            curTicketId: this.para.data.curTicketId,
                            curBillIdArr: this.para.data.curBillIdArr,
                        },
                        attr: {

                        }
                    }
                }
            },
            pvt_emptyImg: function () {
                return {
                    emptyImgRef: {
                        paraVarPair: {},
                        para: {
                            image: []
                        },
                        attr: {}
                    }
                }
            },

            pvt_title: function () {
                return {
                    titleRef: {
                        paraVarPair: {},
                        para: {
                            textData: '您已报名成功！'
                        },
                        attr: {
                            fontSize: '20px',
                            color: '#303133',
                            fontWeight: true
                        }
                    }
                }
            },

            pvt_emptyDesc: function () {
                return {
                    emptyDescRef: {
                        paraVarPair: {},
                        para: {
                            textData: '电子票作为入场凭证'
                        },
                        attr: {
                            fontSize: '14px',
                            color: '#909399'
                        }
                    }
                }
            },

            pvt_emptyBtn: function () {
                return {
                    emptyBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['查看电子票', ''],
                        },
                        attr: {
                            // size: 'large',
                            // type: 'primary',
                            plain: true
                        }
                    }
                }
            },

            pvt_detailBtn: function () {
                return {
                    detailBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['查看订单详情', ''],
                        },
                        attr: {
                            // size: 'large',
                            // type: 'primary',
                            plain: true
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
                let fnname = 'applySuccess_start';
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

                let ref = {
                    emptyImgRef: 'emptyImgRef',
                    emptyDescRef: 'emptyDescRef',
                    emptyBtnRef: 'emptyBtnRef',
                    titleRef: 'titleRef',
                    detailBtnRef: 'detailBtnRef',
                };

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                        case 'start_1':
                            that.sm[ref.titleRef].startModule(function () {
                                para.nStep = 'start_2';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'start_2':
                            that.sm[ref.detailBtnRef].startModule(function () {
                                para.nStep = 'start_4';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'start_3':
                            that.sm[ref.emptyImgRef].startModule(function () {
                                para.nStep = 'start_4';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'start_4':
                            that.sm[ref.emptyDescRef].startModule(function () {
                                para.nStep = 'start_5';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'start_5':
                            that.sm[ref.emptyBtnRef].startModule(function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showSubModule':
                            let refArr = ['emptyDescRef', 'emptyBtnRef', 'detailBtnRef', 'titleRef'];
                            // let refArr = ['emptyImgRef', 'emptyDescRef', 'emptyBtnRef', 'detailBtnRef', 'titleRef'];
                            that.showSubModule(refArr, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'end':
                            let $applySuccessRef = that.$refs.applySuccessRef;
                            let screenHeight = document.documentElement.clientHeight;
                            $applySuccessRef.style.minHeight = screenHeight - 90 - 117 + 'px';
                            para.successCallBack();
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },

            showTicket: function() {
                let that = this;

                if(that.initDialog) {
                    that.showSubModule('dialogRef', true, function () {
                    }, function () {
                    });
                } else {
                    that.sm.dialogRef.startModule(function () {
                        that.initDialog  = true;
                        that.showSubModule('dialogRef', true, function () {
                        }, function () {
                        });
                    }, function () {
                    });
                }

            },
            showOrderList: function() {
                let listIndex = 0;  // 0:我的订单，1:我的收藏
                this.ep.listPageEvent(listIndex)
            },

            emptyBtnRef_buttonClickEvent: function () {
                this.showTicket()
            },
            detailBtnRef_buttonClickEvent: function () {
                this.showOrderList()
            }
        }
    }
</script>

<style lang="scss">
    .apply-success-wrap {
        width: 100%;
        padding: 20px 40px;
        background-color: #fff;
        border-radius: 4px;
        box-shadow: 0 0 8px 0 rgba(48, 49, 51, 0.1);
        color: #303133;
        box-sizing: border-box;
        text-align: center;
        padding-top: 100px;
        .success-img {
            .image-size-medium {
                width: 100%;
                height: 100%;
            }
        }
        .success-img, .success-title, .empty-desc {
            margin-bottom: 20px;
        }
        .success-btn {
            .lm-button {
                display: inline-block;
                margin-right: 20px;
            }
        }
    }
</style>
