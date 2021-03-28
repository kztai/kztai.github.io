<template>
    <div id="apply-list-wrap">
        <header>
            <div class="header-wrap">
                <headC
                        ref="headRef"
                        refId="headRef"
                        v-show="pvt_isShow.head === 'headRef'"
                        :paraVarPair="pvt_head.headRef.paraVarPair"
                        :para="pvt_head.headRef.para"
                        :attr="pvt_head.headRef.attr">
                </headC>
            </div>
        </header>
        <div class="content">
            <div class="content-left" ref="contentLeft">
                <lm-list
                        ref="tabListRef"
                        refId="tabListRef"
                        v-show="pvt_isShow.tabList === 'tabListRef'"
                        :paraVarPair="pvt_tabList.tabListRef.paraVarPair"
                        :para="pvt_tabList.tabListRef.para"
                        :attr="pvt_tabList.tabListRef.attr">
                </lm-list>
            </div>
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
                <checkTicket
                        ref="checkTicketRef"
                        refId="checkTicketRef"
                        v-show="pvt_isShow.listIndex === 'checkTicketRef'"
                        :paraVarPair="pvt_listIndex.checkTicketRef.paraVarPair"
                        :para="pvt_listIndex.checkTicketRef.para"
                        :attr="pvt_listIndex.checkTicketRef.attr">
                </checkTicket>
                <allSummary
                        ref="photoRef"
                        refId="photoRef"
                        v-show="pvt_isShow.listIndex === 'photoRef'"
                        :paraVarPair="pvt_listIndex.photoRef.paraVarPair"
                        :para="pvt_listIndex.photoRef.para"
                        :attr="pvt_listIndex.photoRef.attr">
                </allSummary>
            </div>
        </div>
    </div>
</template>
<script>
    import footC from './activityFooter';
    import headC from './activityHeader';
    import applyManage from './applyManage/applyManage';
    import applySort from './applySort/applySort';
    import checkTicket from './checkTicket/checkTicket';
    import dataAnalysis from './dataAnalysis/dataAnalysis';
    import allSummary from './photoSummary/allSummary';
    import newsSummary from './newsSummary/newsSummary';

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
            applySort,
            checkTicket,
            dataAnalysis,
            newsSummary,
            allSummary
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

                pvt_subModuleMap: {
                    subModule: ['applyManageRef', 'checkTicketRef', 'dataAnalysisRef', 'footRef', 'headRef', 'tabListRef', 'uploadRef', 'photoRef'],
                    vessel: ['listIndex', 'listIndex', 'listIndex', 'foot', 'head', 'tabList', 'upload', 'listIndex'],
                },

                // 各个容器当前显示的子模块
                pvt_isShow: {
                    head: null,
                    foot: null,
                    tabList: null,
                    upload: null,
                    listIndex: null,
                },

                // 当前模块输入类型的事务接口名称，工具完成前需要用户手动填写
                pvt_eventPortInput: ['inputApplyData', 'refundPassIn', 'orderApprovalIn', 'groupNoticeIn', 'backEvent', 'ticketPassIn', 'getSeccodeIn', 'seccodeVerifyIn', 'photoThumbnailGetIn', 'photoNewIn', 'photoDeleteIn', 'photoModifyIn', 'photoOriginalGetIn', 'dataAnalyGetIn'],
            }
        },

        computed: {
            pvt_upload: function () {
                return {
                    uploadRef: {
                        paraVarPair: {},
                        para: {
                            detail: [{
                                $table: this.mac.tb.groupActivityAppendix,
                                $arrField: [this.mac.fd.groupActivityAppendix.picture],
                                $arrValue: [1]
                            }],
                            thumbnail: this.mac.fd.groupActivityAppendix.thumbnail
                        },
                        attr: {
                            limit: 1,
                            rate: 0.5
                        }
                    }
                }
            },
            pvt_listIndex: function () {
                return {
                    checkTicketRef: {
                        paraVarPair: {},
                        para: {
                            activityId: this.curActivityId
                        },
                        attr: {}
                    },
                    dataAnalysisRef: {
                        paraVarPair: {},
                        para: {
                            activityId: this.curActivityId,
                            terActivityId: this.terActivityId
                        },
                        attr: {}
                    },
                    applyManageRef: {
                        paraVarPair: {},
                        para: {
                            activityId: this.curActivityId
                        },
                        attr: {}
                    },
                    photoRef: {
                        paraVarPair: {},
                        para: {
                            activityId: this.curActivityId
                        },
                        attr: {}
                    },
                }
            },

            pvt_head: function () {
                return {
                    headRef: {
                        paraVarPair: {},
                        para: {
                            activityId: this.curActivityId
                        },
                        attr: {}
                    }
                }
            },

            pvt_foot: function () {
                return {
                    footRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {}
                    }
                }
            },

            pvt_tabList: function () {
                return {
                    tabListRef: {
                        paraVarPair: {},
                        para: {
                            listData: [
                                {name: '数据分析', icon: 'el-icon-folder-opened', img: '', disabled: false},
                                {name: '报名管理', icon: 'el-icon-document-checked', img: '', disabled: false},
                                {name: '验票签到', icon: 'el-icon-user', img: '', disabled: false},
                                {name: '上传图片', icon: 'el-icon-folder', img: '', disabled: false},
                            ]
                        },
                        attr: {
                            // checked: this.checkedDefault,
                            checked: this.curList,
                            cursorIsShow: true,
                            size: 'small',
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
                    // footRef: 'footRef',
                    tabListRef: 'tabListRef',
                    applyManageRef: 'applyManageRef',
                    checkTicketRef: 'checkTicketRef',
                    dataAnalysisRef: 'dataAnalysisRef',
                    uploadRef: 'uploadRef',
                    photoRef: 'photoRef',
                };
                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                        case 'inputActivity':
                            this.curActivityId = null;
                            this.curTabIndex = that.curList;

                            tableName = this.mac.tb.groupActivity;
                            expression = that.mac.fd.id +'='+ that.terActivityId;
                            start = null;
                            total = null;
                            sort = ['id,asc'];
                            destGeneSite = '';
                            inputData = {
                                [this.mac.tb.groupActivity] : null,
                                [this.mac.tb.groupActivityTicketType] : null
                            };
d
                            that.sys.api.conditionataInput(tableName, inputData, expression, start, total, sort, destGeneSite, function (result) {
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
                            expression = that.mac.fd.id +'='+ 1;
                            start = null;
                            total = null;
                            sort = ['id,asc'];
                            destGeneSite = '';
                            inputData = null;
                            that.sys.api.conditiondataInput(tableName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                switch (that.curList) {
                                    case 0:
                                        para.nStep = 'analysisStart';
                                        break;
                                    case 1:
                                        para.nStep = 'manageStart';
                                        break;
                                    case 2:
                                        para.nStep = 'checkTicketStart';
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
                            that.sm[ref.dataAnalysisRef].startModule(function () {
                                para.nStep = 'headStart';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'manageStart':
                            that.sm[ref.applyManageRef].startModule(function () {
                                para.nStep = 'headStart';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'checkTicketStart':
                            that.sm[ref.checkTicketRef].startModule(function () {
                                para.nStep = 'headStart';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'photoStart':
                            that.sm[ref.photoRef].startModule(function () {
                                para.nStep = 'headStart';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'headStart':
                            that.sm[ref.headRef].startModule(function () {
                                para.nStep = 'tabStart';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'tabStart':
                            that.sm[ref.tabListRef].startModule(function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'initUpload':
                            this.sm.uploadRef.startModule(function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {

                            });
                            break;
                        case 'showSubModule':
                            let refArr = ['headRef', 'tabListRef'];
                            switch (that.curList) {
                                case 0:
                                    refArr.push('dataAnalysisRef');
                                    break;
                                case 1:
                                    refArr.push('applyManageRef');
                                    break;
                                case 2:
                                    refArr.push('checkTicketRef');
                                    break;
                                case 3:
                                    refArr.push('photoRef');
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
                            // 设置左侧列表高度：
                            let $contentLeft = that.$refs.contentLeft;
                            let $applyList = that.$refs.applyList;
                            let screenHeight = document.documentElement.clientHeight;
                            $contentLeft.style.height = screenHeight - 90 - 20 + 'px';
                            $applyList.style.height = screenHeight - 90 - 20 + 'px';
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
                        that.sm.dataAnalysisRef.startModule(function () {
                            that.showSubModule('dataAnalysisRef', true, function () {
                            }, function () {
                            });
                        }, function () {
                        });
                        break;
                    case 1:
                        that.sm.applyManageRef.startModule(function () {
                            that.showSubModule('applyManageRef', true, function () {
                            }, function () {
                            });
                        }, function () {
                        });
                        break;
                    case 2:
                        that.sm.checkTicketRef.startModule(function () {
                            that.showSubModule('checkTicketRef', true, function () {
                            }, function () {
                            });
                        }, function () {
                        });
                        break;
                    case 3:
                        that.sm.photoRef.startModule(function () {
                            that.showSubModule('photoRef', true, function () {
                            }, function () {
                            });
                        }, function () {
                        });
                        break;
                }
            },

            tabListRef_itemClickEvent: function (index) {
                this.listChange(index);
            },
            // applyManageRef_inputApplyData: function (condition, successCallBack, errorCallBack) {
            //     this.ep.inputApplyData(condition, successCallBack, errorCallBack);
            // },
            dataAnalysisRef_dataAnalyGetIn: function (terActivityId, successCallBack, errorCallBack) {
                this.ep.dataAnalyGetIn(terActivityId, successCallBack, errorCallBack);
            },
            applyManageRef_orderApprovalIn: function (idArr, type, rejectReason, successCallBack, errorCallBack) {
                this.ep.orderApprovalIn(idArr, type, rejectReason, successCallBack, errorCallBack);
            },
            applyManageRef_groupNoticeIn: function (phone, successCallBack, errorCallBack) {
                this.ep.groupNoticeIn(phone, successCallBack, errorCallBack);
            },
            applyManageRef_refundPassIn: function (idArr, successCallBack, errorCallBack) {
                this.ep.refundPassIn(idArr, successCallBack, errorCallBack);
            },
            checkTicketRef_ticketPassIn: function (id, successCallBack, errorCallBack) {
                this.ep.ticketPassIn(id, successCallBack, errorCallBack);
            },
            checkTicketRef_getSeccodeIn: function (phone, successCallBack, errorCallBack) {
                this.ep.getSeccodeIn(phone, successCallBack, errorCallBack);
            },
            checkTicketRef_seccodeVerifyIn: function (id, codeValue, successCallBack, errorCallBack) {
                this.ep.seccodeVerifyIn(id, codeValue, successCallBack, errorCallBack);
            },
            headRef_backEvent: function () {
                this.ep.backEvent();
            },
            photoRef_photoDeleteIn: function (terId) {
                this.ep.photoDeleteIn(terId);
            },
            photoRef_photoModifyIn: function (terId, title) {
                this.ep.photoModifyIn(terId, title);
            },
            photoRef_photoNewIn: function (terId) {
                this.ep.photoNewIn(terId);
            },
        }
    };
</script>
<style lang="scss">
    #apply-list-wrap {
        position: relative;
        width: 100%;
        min-height: 100%;
        box-sizing: border-box;
        background-color: #F1F1F2;
        li {
            list-style: none;
        }

        .upload {
            position: absolute;
            left: 0;
            bottom: 0;
            z-index: 100;
        }


        header {
            width: 100%;
            height: 76px;
            z-index: 1000;
            overflow: hidden;
            background-color: #fff;

            .header-wrap {
                position: fixed;
                left: 0;
                top: 0;
                width: 100%;
                overflow: hidden;
                color: #fff;
                z-index: 90;
            }
        }

        footer {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            overflow: hidden;
            color: #909399;
            background-color: #fff;
            border-top: 1px solid #e5e5e5;

            .el-button--text {
                color: #303133;
            }
        }

        .content {
            display: flex;
            margin: 0 auto;
            padding: 10px 20px 0 20px;
            z-index: 5;
            overflow: hidden;

            .content-left {
                position: fixed;
                width: 138px;
                /*min-height: 348px;*/
                height: 700px;
                overflow: auto;
                background-color: #fff;
                border-radius: 4px;
                box-shadow: 0 0 8px 0 rgba(48, 49, 51, 0.1);
                color: #303133;
                box-sizing: border-box;

                .lm-list-content {
                    padding: 0;
                    padding-top: 10px;
                    .lm-list-content-item.checked {
                        background-color: #fff;
                        color: #00a4fd;
                    }
                    .lm-list-content-item {
                        padding: 10px 20px;
                    }
                }
            }

            .apply-list {
                flex: 1;
                margin-left: 150px;
                margin-right: 0;
                height: 700px;
                background-color: #fff;
                border-radius: 4px;
                box-shadow: 0 0 8px 0 rgba(48, 49, 51, 0.1);
                color: #303133;
                box-sizing: border-box;
                overflow: auto;
            }
        }
    }
</style>
