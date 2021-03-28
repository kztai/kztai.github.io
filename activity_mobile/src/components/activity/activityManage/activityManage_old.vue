<template>
    <div id="apply-list-wrap">
        <header>
            <headC
                    ref="headRef"
                    refId="headRef"
                    v-show="pvt_isShow.head === 'headRef'"
                    :paraVarPair="pvt_head.headRef.paraVarPair"
                    :para="pvt_head.headRef.para"
                    :attr="pvt_head.headRef.attr">
            </headC>
        </header>
        <div class="content">
            <div class="apply-list" ref="applyList">
                <dataAnalysis
                        ref="dataAnalysisRef"
                        refId="dataAnalysisRef"
                        v-show="pvt_isShow.listIndex === 'dataAnalysisRef'"
                        :paraVarPair="pvt_listIndex.dataAnalysisRef.paraVarPair"
                        :para="pvt_listIndex.dataAnalysisRef.para"
                        :attr="pvt_listIndex.dataAnalysisRef.attr">
                </dataAnalysis>
                <applyManage
                        ref="applyManageRef"
                        refId="applyManageRef"
                        v-show="pvt_isShow.listIndex === 'applyManageRef'"
                        :paraVarPair="pvt_listIndex.applyManageRef.paraVarPair"
                        :para="pvt_listIndex.applyManageRef.para"
                        :attr="pvt_listIndex.applyManageRef.attr">
                </applyManage>
            </div>
        </div>
        <div class="footer-wrap">
            <lm2b-tabbar
                    ref="footRef"
                    refId="footRef"
                    v-show="pvt_isShow.foot === 'footRef'"
                    :paraVarPair="pvt_foot.footRef.paraVarPair"
                    :para="pvt_foot.footRef.para"
                    :attr="pvt_foot.footRef.attr">
            </lm2b-tabbar>
        </div>
        <div class="detail-dialog" v-show="showDetailDialog">
            <orderDetail
                    ref="detailRef"
                    refId="detailRef"
                    v-if="pvt_isShow.detail === 'detailRef'"
                    :paraVarPair="pvt_detail.detailRef.paraVarPair"
                    :para="pvt_detail.detailRef.para"
                    :attr="pvt_detail.detailRef.attr">
            </orderDetail>
        </div>
        <div class="ticket-dialog" v-show="showTicketDialog">
            <checkTicket
                    ref="checkTicketRef"
                    refId="checkTicketRef"
                    v-if="pvt_isShow.checkTicket === 'checkTicketRef'"
                    :paraVarPair="pvt_checkTicket.checkTicketRef.paraVarPair"
                    :para="pvt_checkTicket.checkTicketRef.para"
                    :attr="pvt_checkTicket.checkTicketRef.attr">
            </checkTicket>
        </div>
        <div class="dialog-list" v-show="showDialogList">
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
</template>
<script>
    import footC from './manageFooter/manageFooter';
    import headC from './manageHeader/manageHeader';
    import applyManage from './applyManage/applyManage';
    import dataAnalysis from './dataAnalysis/dataAnalysis';
    import orderDetail from './orderDetail/orderDetail';
    import orderApproval from './orderApproval/orderApproval';
    import orderRefund from './orderRefund/orderRefund';
    import pictureUpload from './pictureUpload/pictureUpload';
    import checkTicket from './checkTicket/checkTicket';

    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';

    export default {
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number', 'terActivityId', 'curList'],

        // inject: ['sys'],
        provide: function () {
            return {
                sys: this.sys
            }
        },

        components: {
            headC,
            footC,
            applyManage,
            dataAnalysis,
            orderDetail,
            orderApproval,
            orderRefund,
            pictureUpload,
            checkTicket
        },
        data: function () {
            return {
                mac: mac.mac,

                sys: {
                    api: null,
                    lib: null
                },

                myType: 1,
                mySite: '',
                myID: 1,

                curActivityId: null,
                curTabIndex: -1,
                lastTabIndex: -1,
                showDetailDialog: false,
                showTicketDialog: false,
                showDialogList: false,
                badgeNum: 0,

                pvt_subModuleMap: {
                    subModule: ['applyManageRef', 'dataAnalysisRef', 'footRef', 'headRef', 'detailRef', 'approvalRef', 'refundRef', 'pictureUploadRef', 'checkTicketRef', 'progressRef'],
                    vessel: ['listIndex', 'listIndex', 'foot', 'head', 'detail', 'dialogList', 'dialogList', 'dialogList', 'checkTicket', 'progress'],
                },

                // 各个容器当前显示的子模块
                pvt_isShow: {
                    head: null,
                    foot: null,
                    listIndex: null,
                    detail: null,
                    checkTicket: null,
                    dialogList: null,
                    progress: null,
                },

                // 当前模块输入类型的事务接口名称，工具完成前需要用户手动填写
                pvt_eventPortInput: ['inputApplyData', 'refundPassEvent', 'orderApprovalEvent', 'groupNoticeIn', 'backEvent', 'ticketPassEvent', 'getSeccodeEvent', 'seccodeVerifyEvent', 'photoThumbnailGetIn', 'photoNewEvent', 'photoDeleteEvent', 'photoModifyEvent', 'photoOriginalGetIn', 'dataAnalyGetEvent'],
            }
        },

        computed: {
            pvt_listIndex: function () {
                return {
                    dataAnalysisRef: {
                        paraVarPair: {},
                        para: {
                        },
                        attr: {
                            size: 'medium'
                        }
                    },
                    applyManageRef: {
                        paraVarPair: {},
                        para: {
                        },
                        attr: {
                            size: 'medium'
                        }
                    },
                }
            },

            pvt_head: function () {
                return {
                    headRef: {
                        paraVarPair: {},
                        para: {
                        },
                        attr: {
                            size: 'medium'
                        }
                    }
                }
            },

            pvt_foot: function () {
                return {
                    // footRef: {
                    //     paraVarPair: {},
                    //     para: {},
                    //     attr: {
                    //         size: 'medium'
                    //     }
                    // },
                    footRef: {
                        paraVarPair: {},
                        para: {
                            tabbarData: [
                                {val: "数据分析", icon: "van-icon-chart-trending-o", dot: false, info: "", disable: ""},
                                {val: "活动编辑", icon: "van-icon-records", dot: false, info: "", disable: ""},
                                {val: "报名管理", icon: "van-icon-description", dot: false, info: this.badgeNum, disable: ""},
                                {val: "其他管理", icon: "van-icon-apps-o", dot: false, info: '', disable: ""},
                            ]
                        },
                        attr: {
                            size: 'medium',
                            checked: this.curTabIndex
                        }
                    }
                }
            },

            pvt_detail: function () {
                return {
                    detailRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium'
                        }
                    }
                }
            },

            pvt_checkTicket: function () {
                return {
                    checkTicketRef: {
                        paraVarPair: {},
                        para:{

                        },
                        attr:{
                            size: 'medium'
                        },
                    }
                }
            },

            pvt_dialogList: function () {
                return {
                    approvalRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium'
                        }
                    },
                    refundRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium'
                        }
                    },
                    pictureUploadRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium'
                        }
                    },
                }
            }
        },

        created: function () {
            Object.assign(this, libSys, libUpload);
        },
        mounted: function () {
            this.pvt_initSysData();
        },

        watch: {
            // 监听模块参数
            para: {
                handler: function (nValue, oValue) {
                    let that = this;
                    that.sys.lib = Object.assign({}, libSys, libUpload);
                    Object.assign(that, that.sys.lib);
                    if (nValue !== null) {
                        that.sys.api = that.para.geneInstance.geneAPI;
                        that.para.geneInstance.geneUser = that;
                        that.para.geneInstance.eventStart(that.para.event, that.para.instruct, that.para.command, that.para.paraObject, function (result) {
                            that.pvt_isSubModuleStarted = true;
                            // that.startModule(function (result) {
                            // }, function (error) {
                            //     console.log(error)
                            // })
                        }, function (error) {
                            console.log(error);
                        });

                    }
                }
            }
        },

        methods: {
            getCookie: function (type) {
                if (type === 'userID') {
                    return 1;
                } else if (type === 'userSite') {
                    return {
                        geneAddr: {
                            groupID: 1,
                            cloudID: 2,
                            vesselType: 's',
                            vesselID: 18,
                            userID: 1,
                            geneID: 26
                        },
                        server: 12
                    }
                } else if (type === 'userType') {
                    // 0表示普通用户，1表示游客
                    return 0
                }
            },

            startModule: function (successCallBack, errorCallBack) {
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
                    headRef: 'headRef',
                    footRef: 'footRef',
                    applyManageRef: 'applyManageRef',
                    dataAnalysisRef: 'dataAnalysisRef',
                    progressRef: 'progressRef'
                };
                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                        case 'inputActivity':
                            this.curActivityId = null;
                            this.curTabIndex = that.curList;
                            this.lastTabIndex = that.curList;

                            tableName = this.mac.tb.groupActivity;
                            // expression = '';
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
                                    that.startModule(successCallBack, errorCallBack)
                                }

                            }, function () {
                            });
                            break;
                        case 'inputOrder':
                            tableName = this.mac.tb.groupActivityOrder;
                            expression = this.mac.fd.groupActivityOrder.groupActivityID + '=' + that.curActivityId;
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
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                });

                            }, function () {
                            });
                            break;
                        case 'analysisStart':
                            that.sm[ref.dataAnalysisRef].startModule(this.curActivityId, function (totalNum) {
                                if(totalNum === 0) {
                                    that.badgeNum = '';
                                } else {
                                    that.badgeNum = totalNum;
                                }


                                that.forceUpdateData(function () {
                                    para.nStep = 'headStart';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                });
                            }, function () {
                            });
                            break;
                        case 'manageStart':
                            that.sm[ref.applyManageRef].startModule(this.curActivityId, function () {
                                para.nStep = 'headStart';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
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
                                curActivityId: this.curActivityId
                            };
                            that.sm[ref.headRef].startModule(headData, function () {
                                para.nStep = 'footStart';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'footStart':
                            that.sm[ref.footRef].startModule(function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'progressStart':
                            that.sm[ref.progressRef].startModule(function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            let refArr = ['headRef', 'footRef'];
                            switch (that.curList) {
                                case 0:
                                    refArr.push('dataAnalysisRef');
                                    break;
                                case 2:
                                    // refArr.push('detailRef');
                                    refArr.push('applyManageRef');
                                    break;
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

                if(that.curTabIndex === 0) {
                    // 刷新数据分析待处理项：
                    that.sm.dataAnalysisRef.numberRefresh(function (totalNum) {
                        if(totalNum === 0) {
                            that.badgeNum = '';
                        } else {
                            that.badgeNum = totalNum;
                        }
                        that.forceUpdateData(function () {
                            that.sm.footRef.startModule(function () {
                            }, function () {
                            });
                        })
                    }, function () {
                    });
                } else if(that.curTabIndex === 2) {
                    // 刷新活动列表：
                    that.sm.applyManageRef.applyListRefresh(terBillIdArr, function (totalNum) {
                        if(totalNum === 0) {
                            that.badgeNum = '';
                        } else {
                            that.badgeNum = totalNum;
                        }
                        that.forceUpdateData(function () {
                            that.sm.footRef.startModule(function () {
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

                if(that.curTabIndex === 0) {
                    // 刷新数据分析待处理项：
                    that.sm.dataAnalysisRef.numberRefresh(function (totalNum) {
                        if(totalNum === 0) {
                            that.badgeNum = '';
                        } else {
                            that.badgeNum = totalNum;
                        }
                        that.forceUpdateData(function () {
                            that.sm.footRef.startModule(function () {
                            }, function () {
                            });
                        })
                    }, function () {
                    });
                } else if(that.curTabIndex === 2) {
                    // 刷新活动列表：
                    that.sm.applyManageRef.applyListRefresh(terBillIdArr, function (totalNum) {
                        if(totalNum === 0) {
                            that.badgeNum = '';
                        } else {
                            that.badgeNum = totalNum;
                        }
                        that.forceUpdateData(function () {
                            that.sm.footRef.startModule(function () {
                            }, function () {
                            });
                        })
                    }, function () {
                    });
                }

                that.ep.refundPassEvent(terBillIdArr, successCallBack, errorCallBack);
            },
            approvalRefresh: function(curBillId) {
                this.sm.approvalRef.approvalListRefresh(curBillId);
            },

            pictureUploadBack() {
                let headData;

                this.hideDialogList();
                this.sm.footRef.checkedLabel(this.lastTabIndex);
                this.curTabIndex = this.lastTabIndex;

                switch (this.lastTabIndex) {
                    case 0:
                        headData = {
                            ref: '',
                            title: '数据分析',
                            badgeNum: 0,
                            reference: '',
                            showMenu: true,
                            curActivityId: this.curActivityId
                        };
                        this.sm.headRef.startModule(headData, function () {
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
                            curActivityId: this.curActivityId
                        };
                        this.sm.headRef.startModule(headData, function () {
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
                            curActivityId: this.curActivityId
                        };
                        that.sm.headRef.startModule(headData, function () {
                        }, function () {
                        });
                        that.sm.dataAnalysisRef.startModule(this.curActivityId, function () {
                            that.showSubModule('dataAnalysisRef', true, function () {
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
                            curActivityId: this.curActivityId
                        };
                        that.sm.headRef.startModule(headData, function () {
                        }, function () {
                        });
                        that.sm.applyManageRef.startModule(this.curActivityId, function () {
                            that.showSubModule('applyManageRef', true, function () {
                            }, function () {
                            });
                        }, function () {
                        });
                        break;
                    case 3:
                        headData = {
                            ref: '',
                            title: '图片上传',
                            badgeNum: 0,
                            reference: '',
                            showMenu: false,
                            curActivityId: this.curActivityId
                        };
                        that.sm.headRef.startModule(headData, function () {
                        }, function () {
                        });
                        that.showPictureUpload(this.curActivityId, function () {
                        }, function () {
                        });
                        break;
                }
            },


            applyManageRef_orderDetailEvent: function (curBillId, successCallBack, errorCallBack) {
                this.showOrderDetail('applyManage', curBillId, successCallBack, errorCallBack);
            },

            headRef_moduleChangeEvent: function (index) {
                this.moduleChange(index);
            },
            headRef_checkClickEvent: function () {
                this.showCheckTicket();
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

            footRef_labelClickEvent: function (index) {
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


            // tabListRef_itemClickEvent: function (index) {
            //     this.listChange(index);
            // },
            // applyManageRef_groupNoticeIn: function (phone, successCallBack, errorCallBack) {
            //     this.ep.groupNoticeIn(phone, successCallBack, errorCallBack);
            // },
            // applyManageRef_refundPassIn: function (idArr, successCallBack, errorCallBack) {
            //     this.ep.refundPassIn(idArr, successCallBack, errorCallBack);
            // },
            // checkTicketRef_ticketPassIn: function (id, successCallBack, errorCallBack) {
            //     this.ep.ticketPassIn(id, successCallBack, errorCallBack);
            // },
            // checkTicketRef_getSeccodeIn: function (phone, successCallBack, errorCallBack) {
            //     this.ep.getSeccodeIn(phone, successCallBack, errorCallBack);
            // },
            // checkTicketRef_seccodeVerifyIn: function (id, codeValue, successCallBack, errorCallBack) {
            //     this.ep.seccodeVerifyIn(id, codeValue, successCallBack, errorCallBack);
            // },
            // headRef_backEvent: function () {
            //     this.ep.backEvent();
            // },
            // photoRef_photoDeleteIn: function (terId) {
            //     this.ep.photoDeleteIn(terId);
            // },
            // photoRef_photoModifyIn: function (terId, title) {
            //     this.ep.photoModifyIn(terId, title);
            // },
            // photoRef_photoNewIn: function (terId) {
            //     this.ep.photoNewIn(terId);
            // },
        }
    };
</script>
<style lang="scss">
    #apply-list-wrap {
        position: relative;
        width: 100%;
        height: 100%;
        background-color: #F1F1F2;

        header {
            width: 100%;
            background-color: #fff;
            border-bottom: 1px solid #ddd;
        }

        .footer-wrap {
            width: 100%;
            background-color: #fff;
        }

        .content {
            max-height: 573px;
            /*background-color: #fff;*/
            overflow: auto;

            .apply-list {
                color: #303133;
            }
        }

        .detail-dialog {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #F1F1F2;
            z-index: 3;
        }
        .ticket-dialog {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #000;
            z-index: 3;
            width: 100%;
            height: 100%;
            overflow: auto;
        }

        .dialog-list {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: #F1F1F2;
            z-index: 2;
        }
    }
</style>
