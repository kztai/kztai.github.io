<template>
    <div class="myManage_container">
        <div class="myManage_row myManage_row_myManageRow">
            <div :class="{myManage_col:true,myManage_col_myManageWindow:true,myManage_col_myManageWindow_size_medium:true}">

                <div class="myManage_row myManage_row_row1">
                    <div :class="{myManage_col:true,myManage_col_header:true,myManage_col_header_size_medium:true}">

                        <listHeader
                                ref="headerRef"
                                refId="headerRef"
                                v-show="pvt_isShow.header === 'headerRef'"
                                :paraVarPair="pvt_header.headerRef.paraVarPair"
                                :para="pvt_header.headerRef.para"
                                :attr="pvt_header.headerRef.attr">
                        </listHeader>
                    </div>
                </div>
                <div class="myManage_row myManage_row_row2">
                    <div :class="{myManage_col:true,myManage_col_content:true,myManage_col_content_size_medium:true}">

                        <myRelease
                                ref="myReleaseRef"
                                refId="myReleaseRef"
                                v-show="pvt_isShow.content === 'myReleaseRef'"
                                :paraVarPair="pvt_content.myReleaseRef.paraVarPair"
                                :para="pvt_content.myReleaseRef.para"
                                :attr="pvt_content.myReleaseRef.attr">
                        </myRelease>
                        <myJoin
                                ref="myJoinRef"
                                refId="myJoinRef"
                                v-show="pvt_isShow.content === 'myJoinRef'"
                                :paraVarPair="pvt_content.myJoinRef.paraVarPair"
                                :para="pvt_content.myJoinRef.para"
                                :attr="pvt_content.myJoinRef.attr">
                        </myJoin>
                        <myApproval
                                ref="myApprovalRef"
                                refId="myApprovalRef"
                                v-show="pvt_isShow.content === 'myApprovalRef'"
                                :paraVarPair="pvt_content.myApprovalRef.paraVarPair"
                                :para="pvt_content.myApprovalRef.para"
                                :attr="pvt_content.myApprovalRef.attr">
                        </myApproval>
                    </div>
                </div>
                <div class="myManage_row myManage_row_row3">
                    <div :class="{myManage_col:true,myManage_col_footer:true,myManage_col_footer_size_medium:true}">

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
            </div>
        </div>
        <div class="myManage_row myManage_row_draft" v-show="showDraftDialog">  <!--新增-->
            <div :class="{myManage_col:true,myManage_col_draft:true,myManage_col_draft_size_medium:true,myManage_dialog:true}">
                <myDraft
                        ref="draftRef"
                        refId="draftRef"
                        v-if="pvt_isShow.draft === 'draftRef'"
                        :paraVarPair="pvt_draft.draftRef.paraVarPair"
                        :para="pvt_draft.draftRef.para"
                        :attr="pvt_draft.draftRef.attr">
                </myDraft>
            </div>
        </div>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';
    import listHeader from './listHeader/listHeader';
    import myApproval from './myApproval/myApproval';
    import myJoin from './myJoin/myJoin';
    import myRelease from './myRelease/myRelease';
    import myDraft from './myDraft/myDraft';

    export default {
        components: {
            listHeader,
            myApproval,
            myJoin,
            myRelease,
            myDraft,
        },
        props: ['refId', 'para', 'attr', 'number'],
        inject: ['sys'],

        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ['header', 'footer', 'content', 'content', 'content', 'draft'],
                    subModule: ['headerRef', 'footerRef', 'myReleaseRef', 'myJoinRef', 'myApprovalRef', 'draftRef'],
                },
                pvt_isShow: {
                    header: null,
                    footer: null,
                    content: null,
                    draft: null,
                },
                pvt_eventPortInput: ['delClickEvent', 'backClickEvent', 'closeClickEvent', 'activityClickEvent', 'draftClickEvent', 'showUploadEvent', 'showManageEvent', 'showCheckEvent', 'activityApprovalEvent', 'editClickEvent', 'rejectActivityEvent'],

                mac: mac.mac,

                myType: 1,
                mySite: '',
                myID: 1,

                curList: 0,
                curActivityId: null,
                curTabIndex: -1,
                lastTabIndex: -1,
                showDraftDialog: false,

                releaseNum: '',
                joinNum: '',
                approvalNum: '',
                footerData: null

            };
        },
        computed: {
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
                            tabbarData: this.footerData
                        },
                        attr: {
                            checked: this.curTabIndex
                        },
                    },
                };
            },
            pvt_content: function () {
                return {
                    myReleaseRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium',
                        },
                    },
                    myJoinRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium',
                        },
                    },
                    myApprovalRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium',
                        },
                    },
                };
            },
            pvt_draft: function () {
                return {
                    draftRef: {
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
            Object.assign(this, libSys, libUpload);
        },
        mounted: function () {
            this.pvt_initSysData();
        },

        methods: {
            startModule: function (successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'myManage_start';
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
                    myJoinRef: 'myJoinRef',
                    myReleaseRef: 'myReleaseRef',
                    myApprovalRef: 'myApprovalRef',
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

                            that.footerData = [
                                {
                                    val: "我的发布",
                                    icon: "van-icon-chart-trending-o",
                                    dot: false,
                                    info: this.releaseNum,
                                    disable: ""
                                },
                                {val: "发布活动", icon: "van-icon-records", dot: false, info: "", disable: ""},
                                {
                                    val: "我的参与",
                                    icon: "van-icon-description",
                                    dot: false,
                                    info: this.joinNum,
                                    disable: ""
                                }
                            ];

                            that.mySite = that.getCookie('userSite');
                            that.myId = that.getCookie('userID');
                            that.myType = that.getCookie('userType');

                            if(that.myId === 100) {
                                // 表示具有审批权限：
                                that.footerData.push({val: "我的审批", icon: "van-icon-apps-o", dot: false, info: this.approvalNum, disable: ""});
                            }

                            switch (that.curTabIndex) {
                                case 0:
                                    para.nStep = 'releaseStart';
                                    break;
                                case 1:
                                    para.nStep = 'createStart';
                                    break;
                                case 2:
                                    para.nStep = 'joinStart';
                                    break;
                                case 3:
                                    para.nStep = 'approvalStart';
                                    break;
                            }
                            dbFlag++;
                            break;
                        case 'releaseStart':
                            that.showMenu = true;
                            that.sm[ref.myReleaseRef].startModule(function () {
                                // if(totalNum === 0) {
                                //     that.badgeNum = '';
                                // } else {
                                //     that.badgeNum = totalNum;
                                // }
                                that.forceUpdateData(function () {
                                    para.nStep = 'headStart';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                });
                            }, function () {
                            });
                            break;
                        case 'joinStart':
                            that.showMenu = false;
                            that.sm[ref.myJoinRef].startModule(function () {
                                para.nStep = 'headStart';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'approvalStart':
                            that.showMenu = false;
                            that.sm[ref.myApprovalRef].startModule(function () {
                                para.nStep = 'headStart';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'headStart':
                            switch (this.curTabIndex) {
                                case 0:
                                    para.headTitle = '我的发布';
                                    break;
                                case 2:
                                    para.headTitle = '我的参与';
                                    break;
                                case 3:
                                    para.headTitle = '我的审批';
                                    break;
                            }
                            let headData = {
                                title: para.headTitle,
                                showMenu: this.showMenu,
                            };
                            that.sm[ref.headerRef].startModule(headData, function () {
                                para.nStep = 'footStart';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'footStart':
                            that.sm[ref.footerRef].startModule(function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            let refArr = ['headerRef', 'footerRef'];
                            switch (that.curList) {
                                case 0:
                                    refArr.push('myReleaseRef');
                                    break;
                                case 2:
                                    refArr.push('myJoinRef');
                                    break;
                                case 3:
                                    refArr.push('myApprovalRef');
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
            showDraft: function () {
                let that = this;
                that.showDraftDialog = true;
                that.showSubModule('draftRef', true, function () {
                    that.sm.draftRef.startModule(function () {
                    }, function () {
                    });
                }, function () {
                });
            },

            refreshDraft() {
                let that = this;
                if(this.sm.draftRef) {
                    that.sm.draftRef.startModule(function () {
                    }, function () {
                    });
                }
            },


            hideDraft: function () {
                let that = this;
                that.showDraftDialog = false;
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
                    that.sm.myReleaseRef.numberRefresh(function (totalNum) {
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
                    that.sm.myJoinRef.applyListRefresh(terBillIdArr, function (totalNum) {
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
                    that.sm.myReleaseRef.numberRefresh(function (totalNum) {
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
                    that.sm.myJoinRef.applyListRefresh(terBillIdArr, function (totalNum) {
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

            draftDelete(terActivityId, successCallBack, errorCallBack) {
                let headData = {
                    title: '我的发布',
                    showMenu: true,
                };
                this.sm.headerRef.startModule(headData, function () {
                }, function () {
                });
                this.ep.delClickEvent(terActivityId, successCallBack, errorCallBack);
            },

            footLabelChecked() {
                this.sm.footerRef.checkedLabel(this.lastTabIndex);
                this.curTabIndex = this.lastTabIndex;
            },

            pictureUploadBack() {
                let headData;

                this.hideDialogList();
                this.sm.footerRef.checkedLabel(this.lastTabIndex);
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
                            curActivityId: this.curActivityId
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
                            title: '我的发布',
                            showMenu: true,
                        };
                        that.forceUpdateData(function () {
                            that.sm.headerRef.startModule(headData, function () {
                            }, function () {
                            });
                            that.sm.myReleaseRef.startModule(function () {
                                that.showSubModule('myReleaseRef', true, function () {
                                }, function () {
                                });
                            }, function () {
                            });
                        });
                        break;
                    case 1:
                        that.ep.editClickEvent();
                        break;
                    case 2:
                        headData = {
                            title: '我的参与',
                            showMenu: false,
                        };
                        that.forceUpdateData(function () {
                            that.sm.headerRef.startModule(headData, function () {
                            }, function () {
                            });
                            that.sm.myJoinRef.startModule(function () {
                                that.showSubModule('myJoinRef', true, function () {
                                }, function () {
                                });
                            }, function () {
                            });
                        });
                        break;
                    case 3:
                        headData = {
                            title: '我的审批',
                            showMenu: false,
                        };
                        that.forceUpdateData(function () {
                            that.sm.headerRef.startModule(headData, function () {
                            }, function () {
                            });
                            that.sm.myApprovalRef.startModule(function () {
                                that.showSubModule('myApprovalRef', true, function () {
                                }, function () {
                                });
                            }, function () {
                            });
                        });
                        break;
                }
            },

            getCookie: function (type) {
                if (type === 'userID') {
                    return 100;
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



            headerRef_backEvent: function () {
                // this.hideDraft();
            },
            headerRef_draftClickEvent: function () {
                this.showDraft();
            },

            footerRef_labelClickEvent: function (index) {
                this.labelChange(index);
            },


            myReleaseRef_closeClickEvent: function (terActivityId, successCallBack, errorCallBack) {
                this.ep.closeClickEvent(terActivityId, successCallBack, errorCallBack);
            },
            myReleaseRef_backClickEvent: function (terActivityId, successCallBack, errorCallBack) {
                this.ep.backClickEvent(terActivityId, successCallBack, errorCallBack);
            },
            myReleaseRef_delClickEvent: function (terActivityId, successCallBack, errorCallBack) {
                this.ep.delClickEvent(terActivityId, successCallBack, errorCallBack);
            },
            myReleaseRef_activityClickEvent: function (terActivityId, clerkType) {
                this.ep.activityClickEvent(terActivityId, clerkType);
            },
            myReleaseRef_rejectActivityEvent: function (curActivityId) {
                this.ep.rejectActivityEvent(curActivityId);
            },

            myJoinRef_showManageEvent: function (terActivityId, clerkType) {
                this.ep.showManageEvent(terActivityId, clerkType);
            },
            myJoinRef_showUploadEvent: function (terActivityId, clerkType) {
                this.ep.showUploadEvent(terActivityId, clerkType);
            },
            myJoinRef_showCheckEvent: function (terActivityId, clerkType) {
                this.ep.showCheckEvent(terActivityId, clerkType);
            },
            myJoinRef_activityClickEvent: function (terActivityId, clerkType) {
                this.ep.activityClickEvent(terActivityId, clerkType);
            },
            myJoinRef_orderDetailEvent: function (curBillId, successCallBack, errorCallBack) {
                this.showOrderDetail('applyManage', curBillId, successCallBack, errorCallBack);
            },

            myApprovalRef_activityApprovalEvent: function (terActivityId, rejectReason, successCallBack, errorCallBack) {
                this.ep.activityApprovalEvent(terActivityId, rejectReason, successCallBack, errorCallBack);
            },

            draftRef_delClickEvent: function (terActivityId, successCallBack, errorCallBack) {
                this.draftDelete(terActivityId, successCallBack, errorCallBack);
            },
            draftRef_draftClickEvent: function (curActivityId) {
                this.ep.draftClickEvent(curActivityId);
            },
            draftRef_backEvent: function () {
                this.hideDraft();
            },
        },
    };
</script>
<style lang="less" scoped>
    @import "../../../../assets/var_kzt"; /*新增*/
    .myManage_container {
        width: 100%;
        height: 100%;
    }

    .myManage_row {
        display: flex;
        flex: 1;
    }

    .myManage_col {
        display: flex;
        flex-direction: column;
    }

    .myManage_row_row2 {
        /*width: 100%;*/
        /*height: 100%;*/
    }

    .myManage_col_myManageWindow_size_medium {
        width: @activityManage-activityManageWindow-medium-width;
        height: @activityManage-activityManageWindow-medium-height;
    }

    .myManage_col_header_size_medium {
        width: @activityManage-header-medium-width;
        position: fixed;
        top: 0;
        left: 0;
        z-index: 3;
        border-bottom: 1px solid #ddd;
    }

    .myManage_col_content_size_medium {
        width: @activityManage-content-medium-width;
        height: @activityManage-content-medium-height;
        padding: @activityManage-content-medium-padding;
        box-sizing: border-box;
    }

    .myManage_col_content {
        /*  background-color: mix(@activityManage-content-background-color, #fff, @activityManage-content-background-color-opacity);*/
    }

    .myManage_col_footer_size_medium {
        width: @activityManage-footer-medium-width;
    }

    .myManage_col_draft_size_medium {
        background-color: #F1F1F2;
    }

    .myManage_col_checkTicket_size_medium {
        background-color: #000;
    }

    .myManage_col_dialogList_size_medium {
        background-color: #F1F1F2;
    }

    .myManage_dialog {
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