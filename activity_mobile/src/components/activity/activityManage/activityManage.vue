<template>
    <div class="activityManage_container">
        <div class="activityManage_row activityManage_row_activityManageRow">
            <div :class="{activityManage_col:true,activityManage_col_activityManageWindow:true,activityManage_col_activityManageWindow_size_medium:true}">

                <div class="activityManage_row activityManage_row_row1">
                    <div :class="{activityManage_col:true,activityManage_col_header:true,activityManage_col_header_size_medium:true}">

                        <manage_header
                                ref="headerRef"
                                refId="headerRef"
                                v-show="pvt_isShow.header === 'headerRef'"
                                :paraVarPair="pvt_header.headerRef.paraVarPair"
                                :para="pvt_header.headerRef.para"
                                :attr="pvt_header.headerRef.attr">
                        </manage_header>
                    </div>
                </div>
                <div class="activityManage_row activityManage_row_row2">
                    <div :class="{activityManage_col:true,activityManage_col_content:true,activityManage_col_content_size_medium:true}">

                        <data-analysis
                                ref="dataAnalysisRef"
                                refId="dataAnalysisRef"
                                v-show="pvt_isShow.content === 'dataAnalysisRef'"
                                :paraVarPair="pvt_content.dataAnalysisRef.paraVarPair"
                                :para="pvt_content.dataAnalysisRef.para"
                                :attr="pvt_content.dataAnalysisRef.attr">
                        </data-analysis>
                        <apply-manage
                                ref="applyManageRef"
                                refId="applyManageRef"
                                v-show="pvt_isShow.content === 'applyManageRef'"
                                :paraVarPair="pvt_content.applyManageRef.paraVarPair"
                                :para="pvt_content.applyManageRef.para"
                                :attr="pvt_content.applyManageRef.attr">
                        </apply-manage>
                    </div>
                </div>
                <div class="activityManage_row activityManage_row_row3">
                    <div :class="{activityManage_col:true,activityManage_col_footer:true,activityManage_col_footer_size_medium:true}">

                        <lm2b-tabbar
                                ref="footerRef"
                                refId="footerRef"
                                v-show="pvt_isShow.footer === 'footerRef'"
                                :paraVarPair="pvt_footer.footerRef.paraVarPair"
                                :para="pvt_footer.footerRef.para"
                                :attr="pvt_footer.footerRef.attr">
                        </lm2b-tabbar>
                    </div>
                </div>
                <div class="activityManage_row activityManage_row_row4">
                    <div :class="{activityManage_col:true,activityManage_col_menuPop:true,activityManage_col_menuPop_size_medium:true}">
                        <lm2b-popup-menu
                                ref="popRef"
                                refId="popRef"
                                v-show="pvt_isShow.menuPop === 'popRef'"
                                :paraVarPair="pvt_menuPop.popRef.paraVarPair"
                                :para="pvt_menuPop.popRef.para"
                                :attr="pvt_menuPop.popRef.attr">
                        </lm2b-popup-menu>
                    </div>
                </div>
            </div>
        </div>
        <div class="activityManage_row activityManage_row_checkTicket" v-show="showTicketDialog">  <!--新增-->
            <div :class="{activityManage_col:true,activityManage_col_checkTicket:true,activityManage_col_checkTicket_size_medium:true,activityManage_dialog:true}">
                <ticketCheck
                        ref="checkTicketRef"
                        refId="checkTicketRef"
                        v-if="pvt_isShow.checkTicket === 'checkTicketRef'"
                        :paraVarPair="pvt_checkTicket.checkTicketRef.paraVarPair"
                        :para="pvt_checkTicket.checkTicketRef.para"
                        :attr="pvt_checkTicket.checkTicketRef.attr">
                </ticketCheck>
            </div>
        </div>
        <div class="activityManage_row activityManage_row_dialogList" v-show="showDialogList">  <!--新增-->
            <div :class="{activityManage_col:true,activityManage_col_dialogList:true,activityManage_col_dialogList_size_medium:true, activityManage_dialog:true}">
                <orderApproval
                        ref="approvalRef"
                        refId="approvalRef"
                        v-if="pvt_isShow.dialogList === 'approvalRef'"
                        :paraVarPair="pvt_dialogList.approvalRef.paraVarPair"
                        :para="pvt_dialogList.approvalRef.para"
                        :attr="pvt_dialogList.approvalRef.attr">
                </orderApproval>
                <orderRefund
                        ref="refundRef"
                        refId="refundRef"
                        v-if="pvt_isShow.dialogList === 'refundRef'"
                        :paraVarPair="pvt_dialogList.refundRef.paraVarPair"
                        :para="pvt_dialogList.refundRef.para"
                        :attr="pvt_dialogList.refundRef.attr">
                </orderRefund>
                <pictureUpload
                        ref="pictureUploadRef"
                        refId="pictureUploadRef"
                        v-if="pvt_isShow.dialogList === 'pictureUploadRef'"
                        :paraVarPair="pvt_dialogList.pictureUploadRef.paraVarPair"
                        :para="pvt_dialogList.pictureUploadRef.para"
                        :attr="pvt_dialogList.pictureUploadRef.attr">
                </pictureUpload>
            </div>
        </div>
        <div class="activityManage_row activityManage_row_detail" v-show="showDetailDialog">  <!--新增-->
            <div :class="{activityManage_col:true,activityManage_col_detail:true,activityManage_col_detail_size_medium:true,activityManage_dialog:true}">
                <orderDetail
                        ref="detailRef"
                        refId="detailRef"
                        v-if="pvt_isShow.detail === 'detailRef'"
                        :paraVarPair="pvt_detail.detailRef.paraVarPair"
                        :para="pvt_detail.detailRef.para"
                        :attr="pvt_detail.detailRef.attr">
                </orderDetail>
            </div>
        </div>
        <div class="activityManage_row activityManage_row_activityDetail" v-show="showDetailDialog">  <!--新增-->
            <div :class="{activityManage_col:true,activityManage_col_activityDetail:true,activityManage_col_activityDetail_size_medium:true,activityManage_dialog:true}">
                <activityDetail
                        ref="activityDetailRef"
                        refId="activityDetailRef"
                        v-if="pvt_isShow.activityDetail === 'activityDetailRef'"
                        :paraVarPair="pvt_activityDetail.activityDetailRef.paraVarPair"
                        :para="pvt_activityDetail.activityDetailRef.para"
                        :attr="pvt_activityDetail.activityDetailRef.attr">
                </activityDetail>
            </div>
        </div>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';
    import manage_header from './manageHeader/manageHeader';
    import ticketCheck from './checkTicket/checkTicket';
    import applyManage from './applyManage/applyManage';
    import dataAnalysis from './dataAnalysis/dataAnalysis';
    import orderDetail from './orderDetail/orderDetail';
    import orderApproval from './orderApproval/orderApproval';
    import orderRefund from './orderRefund/orderRefund';
    import pictureUpload from './pictureUpload/pictureUpload';
    import activityDetail from './activityDetail_work/replayActivity';

    export default {
        components: {
            manage_header,
            dataAnalysis,
            applyManage,
            orderDetail,
            ticketCheck,
            orderApproval,
            orderRefund,
            pictureUpload,
            activityDetail
        },
        props: ['refId', 'para', 'attr', 'number', 'terActivityId', 'curList', 'clerkType'],
        provide: function () {
            return {
                sys: this.sys,
            };
        },
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ['header', 'footer', 'content', 'content', 'detail', 'checkTicket', 'dialogList', 'dialogList', 'dialogList', 'menuPop', 'activityDetail'],
                    subModule: ['headerRef', 'footerRef', 'dataAnalysisRef', 'applyManageRef', 'detailRef', 'checkTicketRef', 'approvalRef', 'refundRef', 'pictureUploadRef', 'popRef', 'activityDetailRef'],
                },
                pvt_isShow: {
                    header: null,
                    footer: null,
                    content: null,
                    detail: null,
                    checkTicket: null,
                    dialogList: null,
                    menuPop: null,
                    activityDetail: null,
                },
                pvt_eventPortInput: ['dataAnalyGetEvent', 'orderApprovalEvent', 'refundPassEvent', 'ticketPassEvent', 'getSeccodeEvent', 'seccodeVerifyEvent', 'photoDeleteEvent', 'photoNewEvent', 'photoModifyEvent', 'activityManageBack', 'activityEditEvent', 'enrollChannelChange'],

                mac: mac.mac,

                sys: {
                    api: null,
                    lib: null
                },

                myType: 1,
                mySite: '',
                myID: 1,

                // curList: 0,
                // terActivityId: 1,
                curActivityId: null,
                curTabIndex: -1,
                lastTabIndex: -1,
                showDetailDialog: false,
                showTicketDialog: false,
                showDialogList: false,
                badgeNum: '',
                uploadDisable: false,
                editDisable: false,
                replyDisable: false,
                applyDisable: false,

            };
        },
        computed: {
            pvt_menuPop: function () {
                return {
                    popRef: {
                        paraVarPair: {},
                        para: {
                            popup: [
                                {text: '图片上传', icon: '', disabled: this.uploadDisable},
                                {text: '活动编辑', icon: '', disabled: this.editDisable}
                            ],
                        },
                        attr: {
                            reference: {x: 306, y: 620, w: 30, h: 20},
                            placement: 'top',
                            // overlay: false
                        },
                    },
                };
            },
            pvt_header: function () {
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
            pvt_footer: function () {
                return {
                    footerRef: {
                        paraVarPair: {},
                        para: {
                            tabbarData: [
                                {val: "数据分析", icon: "van-icon-chart-trending-o", dot: false, info: "", disabled: false},
                                {
                                    val: "回复评论",
                                    icon: "van-icon-records",
                                    dot: false,
                                    info: "",
                                    disabled: this.replyDisable
                                },
                                {
                                    val: "报名管理",
                                    icon: "van-icon-description",
                                    dot: false,
                                    info: this.badgeNum,
                                    disabled: this.applyDisable
                                },
                                {val: "其他管理", icon: "van-icon-apps-o", dot: false, info: '', disabled: false},
                            ]
                        },
                        attr: {
                            checked: this.curTabIndex
                        },
                    },
                };
            },
            pvt_content: function () {
                return {
                    dataAnalysisRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium',
                        },
                    },
                    applyManageRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium',
                        },
                    },
                };
            },
            pvt_detail: function () {
                return {
                    detailRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium',
                        },
                    },
                };
            },
            pvt_activityDetail: function () {
                return {
                    activityDetailRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium',
                        },
                    },
                };
            },
            pvt_checkTicket: function () {
                return {
                    checkTicketRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium',
                        },
                    },
                };
            },
            pvt_dialogList: function () {
                return {
                    approvalRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium',
                        },
                    },
                    refundRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium',
                        },
                    },
                    pictureUploadRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium',
                        },
                    },
                };
            },
        },
        created: function () {
            // Object.assign(this, libSys, libUpload);
            this.sys.lib = Object.assign({}, libSys, libUpload);
            Object.assign(this, this.sys.lib);
        },
        mounted: function () {
            this.pvt_initSysData();
        },

        // watch: {
        //     // 监听模块参数
        //     para: {
        //         handler: function (nValue, oValue) {
        //             let that = this;
        //             that.sys.lib = Object.assign({}, libSys, libUpload);
        //             Object.assign(that, that.sys.lib);
        //             if (nValue !== null) {
        //                 that.sys.api = that.para.geneInstance.geneAPI;
        //                 that.para.geneInstance.geneUser = that;
        //                 that.para.geneInstance.eventStart(that.para.event, that.para.instruct, that.para.command, that.para.paraObject, function (result) {
        //                     that.pvt_isSubModuleStarted = true;
        //                     // that.startModule(function (result) {
        //                     // }, function (error) {
        //                     //     console.log(error)
        //                     // })
        //                 }, function (error) {
        //                     console.log(error);
        //                 });
        //
        //             }
        //         }
        //     }
        // },

        methods: {
            startModule: function (api, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'activityManage_start';
                let dbFlag;
                let tableName;
                let dbData;
                let record;
                let portName;
                let inputData;
                let expression;
                let start;
                let total;
                let sort;
                let destGeneSite = '';
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0
                };

                if (successCallBack !== null) {
                    errorCallBack = para;
                    successCallBack = null
                }
                para = errorCallBack;

                let ref = {
                    headerRef: 'headerRef',
                    footerRef: 'footerRef',
                    applyManageRef: 'applyManageRef',
                    dataAnalysisRef: 'dataAnalysisRef',
                };
                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                            that.sys.api = api;
                            this.curActivityId = null;
                            this.curTabIndex = that.curList;
                            this.lastTabIndex = that.curList;

                            that.uploadDisable = false;
                            that.editDisable = false;
                            that.replyDisable = false;
                            that.applyDisable = false;

                            switch (that.clerkType) {
                                case '策划人':
                                    break;
                                case '助手':
                                    that.uploadDisable = true;
                                    that.editDisable = true;
                                    that.applyDisable = true;
                                    break;
                                case '在线客服':
                                    that.uploadDisable = true;
                                    that.editDisable = true;
                                    that.applyDisable = true;
                                    break;
                                case '主讲人':
                                    that.editDisable = true;
                                    that.applyDisable = true;
                                    break;
                                case '主持人':
                                    that.editDisable = true;
                                    break;
                            }

                            para.nStep = 'inputActivity';
                            dbFlag++;
                            break;
                        case 'inputActivity':
                            tableName = this.mac.tb.groupActivity;
                            expression = that.mac.fd.id + '=' + that.terActivityId;
                            start = null;
                            total = null;
                            sort = ['id,asc'];
                            destGeneSite = '';
                            // inputData = {
                            //     [this.mac.tb.groupActivity]: null,
                            //     [this.mac.tb.groupActivityTicketType]: null
                            // };
                            inputData = null;

                            that.sys.api.conditiondataInput(tableName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                that.curActivityId = result[0];
                                para.nStep = 'inputOrder';
                                if (++dbFlag === 2) {
                                    that.startModule(api, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'inputOrder':
                            tableName = this.mac.tb.groupActivityOrder;
                            expression = this.mac.fd.groupActivityOrder.groupActivityID + '=' + that.terActivityId;
                            // expression = that.mac.fd.id +'='+ 1;
                            start = null;
                            total = null;
                            sort = ['id,asc'];
                            destGeneSite = '';
                            inputData = null;
                            that.sys.api.conditiondataInput(tableName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                switch (that.curTabIndex) {
                                    case 0:
                                        para.nStep = 'analysisStart';
                                        break;
                                    case 1:
                                        para.nStep = 'createStart';
                                        break;
                                    case 2:
                                        para.nStep = 'manageStart';
                                        break;
                                    case 3:
                                        para.nStep = 'photoStart';
                                        break;
                                }
                                that.forceUpdateData(function () {
                                    if (++dbFlag === 2) {
                                        that.startModule(api, successCallBack, errorCallBack)
                                    }
                                });

                            }, function (error) {
                                console.error(error);
                            });
                            break;
                        case 'analysisStart':
                            that.sm[ref.dataAnalysisRef].startModule(this.curActivityId, that.clerkType, function (totalNum) {
                                if (totalNum === 0) {
                                    that.badgeNum = '';
                                } else {
                                    that.badgeNum = totalNum;
                                }
                                that.forceUpdateData(function () {
                                    para.nStep = 'headStart';
                                    if (++dbFlag === 2) {
                                        that.startModule(api, successCallBack, errorCallBack)
                                    }
                                });
                            }, function () {
                            });
                            break;
                        case 'manageStart':
                            that.sm[ref.applyManageRef].startModule(this.curActivityId, function () {
                                para.nStep = 'headStart';
                                if (++dbFlag === 2) {
                                    that.startModule(api, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'headStart':
                            let headData = {
                                ref: '',
                                title: this.curTabIndex === 0 ? '数据分析' : '报名管理',
                                badgeNum: 0,
                                reference: this.curTabIndex === 0 ? '' : {x: 290, y: 0, w: 30, h: 20},
                                showMenu: true,
                                curActivityId: this.curActivityId,
                                clerkType: that.clerkType
                            };
                            that.sm[ref.headerRef].startModule(headData, function () {
                                para.nStep = 'footStart';
                                if (++dbFlag === 2) {
                                    that.startModule(api, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'footStart':
                            that.sm[ref.footerRef].startModule(function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(api, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'progressStart':
                            that.sm[ref.progressRef].startModule(function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(api, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            let refArr = ['headerRef', 'footerRef'];
                            switch (that.curList) {
                                case 0:
                                    refArr.push('dataAnalysisRef');
                                    break;
                                case 2:
                                    refArr.push('applyManageRef');
                                    break;
                            }

                            that.showSubModule(refArr, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.startModule(api, successCallBack, errorCallBack)
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
            showOrderDetail: function (ref, curBillId, successCallBack, errorCallBack) {
                let that = this;
                that.showDetailDialog = true;
                that.showSubModule('detailRef', true, function () {
                    that.sm.detailRef.startModule(ref, curBillId, function () {
                        successCallBack()
                    }, function () {
                        errorCallBack()
                    });
                }, function () {
                });
            },


            showOrderApproval: function (curActivityId, successCallBack, errorCallBack) {
                let that = this;
                that.showDialogList = true;
                that.showSubModule('approvalRef', true, function () {
                    that.sm.approvalRef.startModule(curActivityId, function () {
                        successCallBack()
                    }, function () {
                        errorCallBack()
                    });
                }, function () {
                });
            },
            showOrderRefund: function (curActivityId, successCallBack, errorCallBack) {
                let that = this;
                that.showDialogList = true;
                that.showSubModule('refundRef', true, function () {
                    that.sm.refundRef.startModule(curActivityId, function () {
                        successCallBack()
                    }, function () {
                        errorCallBack()
                    });
                }, function () {
                });
            },
            showPictureUpload: function (curActivityId, successCallBack, errorCallBack) {
                let that = this;
                that.showDialogList = true;
                that.showSubModule('pictureUploadRef', true, function () {
                    that.sm.pictureUploadRef.startModule(curActivityId, function () {
                        successCallBack()
                    }, function () {
                        errorCallBack()
                    });
                }, function () {
                });
            },
            showCheckTicket: function () {
                let that = this;
                that.showTicketDialog = true;
                that.showSubModule('checkTicketRef', true, function () {
                    that.sm.checkTicketRef.startModule(that.curActivityId, function () {
                    }, function () {
                    });
                }, function () {
                });
            },


            hideDialogList: function () {
                let that = this;
                that.showDialogList = false;
            },
            hideDetail: function () {
                let that = this;
                that.showDetailDialog = false;
            },
            hideTicketDialog: function () {
                let that = this;
                that.showTicketDialog = false;
            },


            moduleChange: function (index) {
                switch (index) {
                    case 0:
                        this.showOrderApproval(this.curActivityId, function () {
                        }, function () {
                        });
                        break;
                    case 1:
                        this.showOrderRefund(this.curActivityId, function () {
                        }, function () {
                        });
                        break;
                }
            },


            refresh_approval(terBillIdArr, type, rejectReason, successCallBack, errorCallBack) {
                let that = this;

                if (that.curTabIndex === 0) {
                    // 刷新数据分析待处理项：
                    that.sm.dataAnalysisRef.numberRefresh(function (totalNum) {
                        if (totalNum === 0) {
                            that.badgeNum = '';
                        } else {
                            that.badgeNum = totalNum;
                        }
                        that.forceUpdateData(function () {
                            that.sm.footerRef.startModule(function () {
                            }, function () {
                            });
                        })
                    }, function () {
                    });
                } else if (that.curTabIndex === 2) {
                    // 刷新活动列表：
                    that.sm.applyManageRef.applyListRefresh(terBillIdArr, function (totalNum) {
                        if (totalNum === 0) {
                            that.badgeNum = '';
                        } else {
                            that.badgeNum = totalNum;
                        }
                        that.forceUpdateData(function () {
                            that.sm.footerRef.startModule(function () {
                            }, function () {
                            });
                        })
                    }, function () {
                    });
                }

                that.ep.orderApprovalEvent(terBillIdArr, type, rejectReason, successCallBack, errorCallBack);
            },
            refresh_refund(terBillIdArr, successCallBack, errorCallBack) {
                let that = this;

                if (that.curTabIndex === 0) {
                    // 刷新数据分析待处理项：
                    that.sm.dataAnalysisRef.numberRefresh(function (totalNum) {
                        if (totalNum === 0) {
                            that.badgeNum = '';
                        } else {
                            that.badgeNum = totalNum;
                        }
                        that.forceUpdateData(function () {
                            that.sm.footerRef.startModule(function () {
                            }, function () {
                            });
                        })
                    }, function () {
                    });
                } else if (that.curTabIndex === 2) {
                    // 刷新活动列表：
                    that.sm.applyManageRef.applyListRefresh(terBillIdArr, function (totalNum) {
                        if (totalNum === 0) {
                            that.badgeNum = '';
                        } else {
                            that.badgeNum = totalNum;
                        }
                        that.forceUpdateData(function () {
                            that.sm.footerRef.startModule(function () {
                            }, function () {
                            });
                        })
                    }, function () {
                    });
                }
                that.ep.refundPassEvent(terBillIdArr, successCallBack, errorCallBack);
            },

            approvalRefresh: function (curBillId) {
                this.sm.approvalRef.approvalListRefresh(curBillId);
            },

            activityDetailBack() {
                this.hideDetail();
                this.sm.footerRef.checkedLabel(this.lastTabIndex);
                this.curTabIndex = this.lastTabIndex;
            },

            pictureUploadBack() {
                let headData;

                this.hideDialogList();

                switch (this.lastTabIndex) {
                    case 0:
                        headData = {
                            ref: '',
                            title: '数据分析',
                            badgeNum: 0,
                            reference: '',
                            showMenu: true,
                            curActivityId: this.curActivityId,
                            clerkType: this.clerkType
                        };
                        this.sm.headerRef.startModule(headData, function () {
                        }, function () {
                        });
                        break;
                    case 2:
                        headData = {
                            ref: '',
                            title: '报名管理',
                            badgeNum: 0,
                            reference: {x: 290, y: 0, w: 30, h: 20},
                            showMenu: true,
                            curActivityId: this.curActivityId,
                            clerkType: this.clerkType
                        };
                        this.sm.headerRef.startModule(headData, function () {
                        }, function () {
                        });
                        break;
                }
            },

            labelChange(index) {
                let that = this;
                let headData;

                if (that.curTabIndex === index) {
                    return
                }
                that.lastTabIndex = that.curTabIndex;
                that.curTabIndex = index;

                switch (index) {
                    case 0:
                        headData = {
                            ref: '',
                            title: '数据分析',
                            badgeNum: 0,
                            reference: '',
                            showMenu: true,
                            curActivityId: this.curActivityId,
                            clerkType: this.clerkType
                        };
                        that.sm.headerRef.startModule(headData, function () {
                        }, function () {
                        });
                        that.sm.dataAnalysisRef.startModule(that.curActivityId, that.clerkType, function () {
                            that.showSubModule('dataAnalysisRef', true, function () {
                            }, function () {
                            });
                        }, function () {
                        });
                        break;
                    case 1:
                        that.showDetailDialog = true;
                        that.showSubModule('activityDetailRef', true, function () {
                            that.sm.activityDetailRef.startModule(that.curActivityId, function () {
                            }, function () {
                            });
                        }, function () {
                        });
                        break;
                    case 2:
                        headData = {
                            ref: '',
                            title: '报名管理',
                            badgeNum: 0,
                            reference: {x: 290, y: 0, w: 30, h: 20},
                            showMenu: true,
                            curActivityId: this.curActivityId,
                            clerkType: this.clerkType
                        };
                        that.sm.headerRef.startModule(headData, function () {
                        }, function () {
                        });
                        that.sm.applyManageRef.startModule(that.curActivityId, function () {
                            that.showSubModule('applyManageRef', true, function () {
                            }, function () {
                            });
                        }, function () {
                        });
                        break;
                    case 3:
                        this.sm.footerRef.checkedLabel(this.lastTabIndex);
                        this.curTabIndex = this.lastTabIndex;
                        that.showSubModule('popRef', true, function () {
                            that.sm.popRef.startModule(function () {
                            }, function () {
                            });
                        }, function () {
                        });
                        break;
                }
            },

            menuSelect(index) {
                if (index === 0) {
                    // 点击图片上传按钮：
                    let headData = {
                        ref: '',
                        title: '图片上传',
                        badgeNum: 0,
                        reference: '',
                        showMenu: false,
                        curActivityId: this.curActivityId,
                        clerkType: this.clerkType
                    };
                    this.sm.headerRef.startModule(headData, function () {
                    }, function () {
                    });
                    this.showPictureUpload(this.curActivityId, function () {
                    }, function () {
                    });
                } else {
                    // 点击活动编辑按钮：
                    this.ep.activityEditEvent(this.terActivityId)
                }
            },


            // 公开方法：
            openPictureUpload() {
                this.showPictureUpload(this.curActivityId, function () {
                }, function () {
                })
            },


            applyManageRef_orderDetailEvent: function (curBillId, successCallBack, errorCallBack) {
                this.showOrderDetail('applyManage', curBillId, successCallBack, errorCallBack);
            },

            headerRef_moduleChangeEvent: function (index) {
                this.moduleChange(index);
            },
            headerRef_checkClickEvent: function () {
                this.showCheckTicket();
            },
            headerRef_backEvent: function () {
                this.ep.activityManageBack();
            },
            headerRef_enrollChannelChange: function (terActivityId, type) {
                this.ep.enrollChannelChange(terActivityId, type);
            },
            popRef_clickEvent: function (index) {
                this.menuSelect(index);
            },

            approvalRef_orderDetailEvent: function (curBillId, successCallBack, errorCallBack) {
                this.showOrderDetail('approval', curBillId, successCallBack, errorCallBack);
            },
            approvalRef_backEvent: function () {
                this.hideDialogList();
            },
            approvalRef_orderApprovalEvent: function (terBillIdArr, type, rejectReason, successCallBack, errorCallBack) {
                this.refresh_approval(terBillIdArr, type, rejectReason, successCallBack, errorCallBack)
            },

            refundRef_refundPassEvent: function (terBillIdArr, successCallBack, errorCallBack) {
                this.refresh_refund(terBillIdArr, successCallBack, errorCallBack)
            },
            refundRef_backEvent: function () {
                this.hideDialogList();
            },
            refundRef_orderDetailEvent: function (curBillId, successCallBack, errorCallBack) {
                this.showOrderDetail('refund', curBillId, successCallBack, errorCallBack);
            },

            detailRef_orderApprovalEvent: function (terBillIdArr, type, rejectReason, successCallBack, errorCallBack) {
                this.refresh_approval(terBillIdArr, type, rejectReason, successCallBack, errorCallBack)
            },
            detailRef_backEvent: function () {
                this.hideDetail();
            },
            detailRef_approvalRefreshEvent: function (curBillId) {
                this.approvalRefresh(curBillId);
            },

            footerRef_labelClickEvent: function (index) {
                this.labelChange(index);
            },

            dataAnalysisRef_orderApprovalEvent: function (curActivityId, successCallBack, errorCallBack) {
                this.showOrderApproval(curActivityId, successCallBack, errorCallBack);
            },
            dataAnalysisRef_orderRefundEvent: function (curActivityId, successCallBack, errorCallBack) {
                this.showOrderRefund(curActivityId, successCallBack, errorCallBack);
            },
            dataAnalysisRef_dataAnalyGetEvent: function (terActivityId, successCallBack, errorCallBack) {
                this.ep.dataAnalyGetEvent(terActivityId, successCallBack, errorCallBack);
            },

            checkTicketRef_backEvent: function () {
                this.hideTicketDialog();
            },
            checkTicketRef_ticketPassEvent: function (terBillId, successCallBack, errorCallBack) {
                this.ep.ticketPassEvent(terBillId, successCallBack, errorCallBack);
            },
            checkTicketRef_getSeccodeEvent: function (phone, successCallBack, errorCallBack) {
                this.ep.getSeccodeEvent(phone, successCallBack, errorCallBack);
            },
            checkTicketRef_seccodeVerifyEvent: function (id, codeValue, successCallBack, errorCallBack) {
                this.ep.seccodeVerifyEvent(id, codeValue, successCallBack, errorCallBack);
            },

            pictureUploadRef_backEvent: function () {
                this.pictureUploadBack();
            },
            pictureUploadRef_photoDeleteEvent: function (terId) {
                this.ep.photoDeleteEvent(terId);
            },
            pictureUploadRef_photoModifyEvent: function (terId, title) {
                this.ep.photoModifyEvent(terId, title);
            },
            pictureUploadRef_photoNewEvent: function (terId) {
                this.ep.photoNewEvent(terId);
            },
            activityDetailRef_backEvent: function () {
                this.activityDetailBack();
            },
        },
    };
</script>
<style lang="less" scoped>
    @import "../../../assets/var_kzt"; /*新增*/
    .activityManage_container {
        width: 100%;
        height: 100%;
    }

    .activityManage_row {
        display: flex;
        flex: 1;
    }

    .activityManage_col {
        display: flex;
        flex-direction: column;
    }

    .activityManage_row_row2 {
        /*width: 100%;*/
        /*height: 100%;*/
    }

    .activityManage_col_activityManageWindow_size_medium {
        width: @activityManage-activityManageWindow-medium-width;
        height: @activityManage-activityManageWindow-medium-height;
    }

    .activityManage_col_header_size_medium {
        width: @activityManage-header-medium-width;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 3;
    }

    .activityManage_col_content_size_medium {
        width: @activityManage-content-medium-width;
        height: @activityManage-content-medium-height;
        padding: @activityManage-content-medium-padding;
        box-sizing: border-box;
    }

    .activityManage_col_content {
        /*  background-color: mix(@activityManage-content-background-color, #fff, @activityManage-content-background-color-opacity);*/
    }

    .activityManage_col_footer_size_medium {
        width: @activityManage-footer-medium-width;
    }

    .activityManage_col_detail_size_medium {
        background-color: #F1F1F2;
    }

    .activityManage_col_checkTicket_size_medium {
        background-color: #000;
    }

    .activityManage_col_dialogList_size_medium {
        background-color: #F1F1F2;
    }

    .activityManage_col_menuPop_size_medium {
        .van-overlay {
            background-color: rgba(0, 0, 0, 0.2);
        }
    }

    .activityManage_dialog {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 4;
        width: 100%;
        height: 100%;
        overflow: auto;
    }
</style>