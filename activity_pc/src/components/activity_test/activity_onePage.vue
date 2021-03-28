<template>
    <div id="one-page-wrap">
        <activityManage
                ref="activityManageRef"
                refId="activityManageRef"
                v-show="pvt_isShow.page === 'activityManageRef'"
                :terActivityId="1"
                :curList="0"
                :paraVarPair="pvt_page.activityManageRef.paraVarPair"
                :para="pvt_page.activityManageRef.para"
                :attr="pvt_page.activityManageRef.attr">
        </activityManage>
        <activityCreate
                ref="activityCreateRef"
                refId="activityCreateRef"
                v-show="pvt_isShow.page === 'activityCreateRef'"
                :paraVarPair="pvt_page.activityCreateRef.paraVarPair"
                :para="pvt_page.activityCreateRef.para"
                :attr="pvt_page.activityCreateRef.attr">
        </activityCreate>
        <detailUser
                ref="detailUserRef"
                refId="detailUserRef"
                v-show="pvt_isShow.page === 'detailUserRef'"
                :paraVarPair="pvt_page.detailUserRef.paraVarPair"
                :para="pvt_page.detailUserRef.para"
                :attr="pvt_page.detailUserRef.attr">
        </detailUser>
        <detailWork
                ref="detailWorkRef"
                refId="detailWorkRef"
                v-show="pvt_isShow.page === 'detailWorkRef'"
                :paraVarPair="pvt_page.detailWorkRef.paraVarPair"
                :para="pvt_page.detailWorkRef.para"
                :attr="pvt_page.detailWorkRef.attr">
        </detailWork>
        <activityHome
                ref="activityHomeRef"
                refId="activityHomeRef"
                v-show="pvt_isShow.page === 'activityHomeRef'"
                :paraVarPair="pvt_page.activityHomeRef.paraVarPair"
                :para="pvt_page.activityHomeRef.para"
                :attr="pvt_page.activityHomeRef.attr">
        </activityHome>
        <ListWork
                ref="listWorkRef"
                refId="listWorkRef"
                v-show="pvt_isShow.page === 'listWorkRef'"
                :paraVarPair="pvt_page.listWorkRef.paraVarPair"
                :para="pvt_page.listWorkRef.para"
                :attr="pvt_page.listWorkRef.attr">
        </ListWork>
        <ListUser
                ref="ListUserRef"
                refId="ListUserRef"
                v-show="pvt_isShow.page === 'ListUserRef'"
                :paraVarPair="pvt_page.ListUserRef.paraVarPair"
                :para="pvt_page.ListUserRef.para"
                :attr="pvt_page.ListUserRef.attr">
        </ListUser>
    </div>
</template>
<script>

    import activityManage from './activityManage/activityManage';
    import activityCreate from './activityCreate/activityCreate';
    import detailUser from './activityDetail_user/activityDetail';
    import detailWork from './activityDetail_work/activityDetail';
    import activityHome from './activityHome/recommendPage';
    import ListUser from './activityList_user/orderAndCollectionPage';
    import ListWork from './activityList_work/activityList_work';

    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';

    export default {
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number', 'activityId', 'curList'],
        // inject: ['sys'],
        provide: function () {
            return {
                sys: this.sys
            }
        },
        components: {
            activityManage,
            activityCreate,
            detailUser,
            detailWork,
            activityHome,
            ListUser,
            ListWork
        },
        data: function () {
            return {
                mac: mac.mac,
                sys: {
                    api: null,
                    lib: null
                },
                outPara: null,

                myType: 1,
                mySite: '',
                myID: 1,

                curActivityId: null,
                curTabIndex: -1,
                detailUser_activityId: null,
                detailWork_activityId: null,

                // 当前模块的para参数为 modulePara1 和 modulePara1
                // 需要双向修改参数的场景，用户可直接修改以下模块参数同名的变量
                // modulePara1: this.para.modulePara1,
                // modulePara2: this.para.modulePara2,

                pvt_subModuleMap: {
                    subModule: ['activityCreateRef', 'detailUserRef', 'ListUserRef', 'activityManageRef', 'listWorkRef', 'activityHomeRef', 'detailWorkRef'],
                    vessel: ['page', 'page', 'page', 'page', 'page', 'page', 'page'],
                },

                // 各个容器当前显示的子模块
                pvt_isShow: {
                    page: null,
                },

                // 当前模块输入类型的事务接口名称，工具完成前需要用户手动填写
                pvt_eventPortInput: [
                    'inputApplyData', 'refundPassIn', 'orderApprovalIn', 'groupNoticeIn', 'backEvent', 'ticketPassIn', 'getSeccodeIn', 'seccodeVerifyIn', 'photoDeleteIn', 'photoModifyIn', 'photoNewIn', 'dataAnalyGetIn',
                    'activityHomeThumbnailGetIn', 'activityHomeNewIn', 'activityHomeDeleteIn', 'activityHomeModifyIn', 'activityHomeOriginalGetIn', 'getSumEvent', 'listPageEvent', 'detailPageEvent',
                    'moduleChangeEvent', 'activityBrowseIn', 'activityHandleIn', 'getHandleStateIn', 'getAttentionStateIn', 'groupAttentionIn', 'discussQuestionIn', 'getTicketNumberIn', 'getSumIn', 'thirdPayIn', 'balancePayIn', 'discussAnswerIn'
                ],
            }
        },

        computed: {
            pvt_page: function () {
                return {
                    ListUserRef: {
                        paraVarPair: {},
                        para: {
                            activityId: this.curActivityId
                        },
                        attr: {}
                    },
                    detailUserRef: {
                        paraVarPair: {},
                        para: {
                            terActivityId: this.detailUser_activityId
                        },
                        attr: {}
                    },
                    activityManageRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {}
                    },
                    activityCreateRef: {
                        paraVarPair: {},
                        para: {
                            activityId: this.curActivityId
                        },
                        attr: {}
                    },
                    activityHomeRef: {
                        paraVarPair: {},
                        para: {
                            // activityId: this.curActivityId
                        },
                        attr: {}
                    },
                    detailWorkRef: {
                        paraVarPair: {},
                        para: {
                            terActivityId: this.detailWork_activityId
                        },
                        attr: {}
                    },
                    listWorkRef: {
                        paraVarPair: {},
                        para: {
                            activityId: this.curActivityId
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
                let fnname = 'activityCreate_start';
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

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                            this.curTabIndex = that.curList;
                            para.refArr = [];

                            switch (that.curTabIndex) {
                                case 0:
                                    para.nStep = 'activityManageStart';
                                    break;
                                case 1:
                                    para.nStep = 'activityCreateStart';
                                    break;
                                case 2:
                                    para.nStep = 'ListUserStart';
                                    break;
                                case 3:
                                    para.nStep = 'detailUserStart';
                                    break;
                                case 4:
                                    para.nStep = 'detailWorkStart';
                                    break;
                                case 5:
                                    para.nStep = 'activityHomeStart';
                                    break;
                                case 6:
                                    para.nStep = 'listWorkStart';
                                    break;
                            }
                            // para.nStep = 'activityManageStart';
                            that.forceUpdateData(function () {
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            });
                            break;
                        case 'activityManageStart':
                            para.refArr.push('activityManageRef');
                            that.sm.activityManageRef.startModule(function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'activityCreateStart':
                            para.refArr.push('activityCreateRef');
                            that.sm.activityCreateRef.startModule(function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'ListUserStart':
                            para.refArr.push('ListUserRef');
                            that.sm.ListUserRef.startModule(function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'detailUserStart':
                            para.refArr.push('detailUserRef');
                            that.sm.detailUserRef.startModule(function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'detailWorkStart':
                            para.refArr.push('detailWorkRef');
                            that.sm.detailWorkRef.startModule(function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'activityHomeStart':
                            para.refArr.push('activityHomeRef');
                            that.sm.activityHomeRef.startModule(function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'listWorkStart':
                            para.refArr.push('listWorkRef');
                            that.sm.listWorkRef.startModule(function () {
                                para.nStep = 'showSubModule';
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

            listChange: function (index) {
                let that = this;

                if (that.curTabIndex === index) {
                    return
                }
                that.curTabIndex = index;

                switch (index) {
                    case 0:
                        that.sm.activityManageRef.startModule(function () {
                            that.showSubModule('activityManageRef', true, function () {
                            }, function () {
                            });
                        }, function () {
                        });
                        break;
                    case 1:
                        that.sm.activityCreateRef.startModule(function () {
                            that.showSubModule('activityCreateRef', true, function () {
                            }, function () {
                            });
                        }, function () {
                        });
                        break;
                    case 2:
                        that.sm.ListUserRef.startModule(that.listUserIndex, function () {
                            that.showSubModule('ListUserRef', true, function () {
                            }, function () {
                            });
                        }, function () {
                        });
                        break;
                    case 3:
                        that.sm.detailUserRef.startModule(function () {
                            that.showSubModule('detailUserRef', true, function () {
                            }, function () {
                            });
                        }, function () {
                        });
                        break;
                    case 4:
                        that.sm.detailWorkRef.startModule(function () {
                            that.showSubModule('detailWorkRef', true, function () {
                            }, function () {
                            });
                        }, function () {
                        });
                        break;
                    case 5:
                        that.sm.activityHomeRef.startModule(function () {
                            that.showSubModule('activityHomeRef', true, function () {
                            }, function () {
                            });
                        }, function () {
                        });
                        break;
                    case 6:
                        that.sm.listWorkRef.startModule(function () {
                            that.showSubModule('listWorkRef', true, function () {
                            }, function () {
                            });
                        }, function () {
                        });
                        break;
                }
            },


            activityManageRef_dataAnalyGetIn: function (terActivityId, successCallBack, errorCallBack) {
                this.ep.dataAnalyGetIn(terActivityId, successCallBack, errorCallBack);
            },
            activityManageRef_orderApprovalIn: function (idArr, type, rejectReason, successCallBack, errorCallBack) {
                this.ep.orderApprovalIn(idArr, type, rejectReason, successCallBack, errorCallBack);
            },
            activityManageRef_groupNoticeIn: function (phone, successCallBack, errorCallBack) {
                this.ep.groupNoticeIn(phone, successCallBack, errorCallBack);
            },
            activityManageRef_refundPassIn: function (idArr, successCallBack, errorCallBack) {
                this.ep.refundPassIn(idArr, successCallBack, errorCallBack);
            },
            activityManageRef_ticketPassIn: function (id, successCallBack, errorCallBack) {
                this.ep.ticketPassIn(id, successCallBack, errorCallBack);
            },
            activityManageRef_getSeccodeIn: function (phone, successCallBack, errorCallBack) {
                this.ep.getSeccodeIn(phone, successCallBack, errorCallBack);
            },
            activityManageRef_seccodeVerifyIn: function (id, codeValue, successCallBack, errorCallBack) {
                this.ep.seccodeVerifyIn(id, codeValue, successCallBack, errorCallBack);
            },
            activityManageRef_backEvent: function () {
                this.ep.backEvent();
            },
            activityManageRef_photoDeleteIn: function (terId) {
                this.ep.photoDeleteIn(terId);
            },
            activityManageRef_photoModifyIn: function (terId, title) {
                this.ep.photoModifyIn(terId, title);
            },
            activityManageRef_photoNewIn: function (terId) {
                this.ep.photoNewIn(terId);
            },


            activityHomeRef_listPageEvent(id) {
                let that = this;
                // 0 我的订单，1 我的收藏：
                that.listUserIndex = id;

                that.forceUpdateData(function () {
                    that.listChange(that.mac.pageType.ListUser);
                });
            },
            activityHomeRef_getSumEvent(successCallBack, errorCallBack) {
                successCallBack([234,566]);
                // this.ep.getSumEvent(successCallBack, errorCallBack);
            },
            activityHomeRef_detailPageEvent(id) {
                let that = this;
                that.detailUser_activityId = id;

                that.forceUpdateData(function () {
                    that.listChange(that.mac.pageType.detailUser);
                });
            },


            detailUserRef_activityHandleIn: function (activityID, commandType, refId, successCallBack, errorCallBack) {
                this.ep.activityHandleIn(activityID, commandType, successCallBack, errorCallBack)
            },
            detailUserRef_discussAnswerIn: function (id, successCallBack, errorCallBack) {
                this.ep.discussAnswerIn(id, successCallBack, errorCallBack)
            },
            detailUserRef_getTicketNumberIn: function (data, successCallBack, errorCallBack) {
                this.ep.getTicketNumberIn(data, successCallBack, errorCallBack)
            },
            detailUserRef_getHandleStateIn: function (data, successCallBack, errorCallBack) {
                this.ep.getHandleStateIn(data, successCallBack, errorCallBack)
            },
            detailUserRef_getAttentionStateIn: function (data, successCallBack, errorCallBack) {
                this.ep.getAttentionStateIn(data, successCallBack, errorCallBack)
            },
            detailUserRef_groupAttentionIn: function (data, successCallBack, errorCallBack) {
                this.ep.groupAttentionIn(data, successCallBack, errorCallBack)
            },
            detailUserRef_discussQuestionIn: function (data, successCallBack, errorCallBack) {
                this.ep.discussQuestionIn(data, successCallBack, errorCallBack)
            },
            detailUserRef_getSumIn: function (data, successCallBack, errorCallBack) {
                this.ep.getSumIn(data, successCallBack, errorCallBack)
            },
            detailUserRef_balancePayIn: function (terOrderId, successCallBack, errorCallBack) {
                this.ep.balancePayIn(terOrderId, successCallBack, errorCallBack)
            },
            detailUserRef_thirdPayIn: function (terOrderId, thirdType, successCallBack, errorCallBack) {
                this.ep.thirdPayIn(terOrderId, thirdType, successCallBack, errorCallBack)
            },     
            detailUserRef_activityBrowseIn: function (terOrderId, thirdType, successCallBack, errorCallBack) {
                this.ep.thirdPayIn(terOrderId, thirdType, successCallBack, errorCallBack)
            },
            detailUserRef_listPageEvent: function (listIndex) {
                let that = this;
                // 0 我的订单，1 我的收藏：
                that.listUserIndex = listIndex;

                that.forceUpdateData(function () {
                    that.listChange(that.mac.pageType.ListUser);
                });
            },
        }
    };
</script>
<style lang="scss">
    #one-page-wrap {
        width: 100%;
        height: 100%;
    }
</style>

