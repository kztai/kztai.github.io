<template>
    <div id="activity-list-wrap">
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
            <div class="activity-list" ref="activityList">
                <myRelease
                        ref="myReleaseRef"
                        refId="myReleaseRef"
                        v-show="pvt_isShow.list === 'myReleaseRef'"
                        :paraVarPair="pvt_list.myReleaseRef.paraVarPair"
                        :para="pvt_list.myReleaseRef.para"
                        :attr="pvt_list.myReleaseRef.attr">
                </myRelease>
                <myJoin
                        ref="myJoinRef"
                        refId="myJoinRef"
                        v-show="pvt_isShow.list === 'myJoinRef'"
                        :paraVarPair="pvt_list.myJoinRef.paraVarPair"
                        :para="pvt_list.myJoinRef.para"
                        :attr="pvt_list.myJoinRef.attr">
                </myJoin>
                <myApproval
                        ref="myApprovalRef"
                        refId="myApprovalRef"
                        v-show="pvt_isShow.list === 'myApprovalRef'"
                        :paraVarPair="pvt_list.myApprovalRef.paraVarPair"
                        :para="pvt_list.myApprovalRef.para"
                        :attr="pvt_list.myApprovalRef.attr">
                </myApproval>
            </div>
        </div>
   <!--     <div class="upload">
            <lm-picture-upload
                    ref="uploadRef"
                    refId="uploadRef"
                    v-show="pvt_isShow.upload === 'uploadRef'"
                    :paraVarPair="pvt_upload.uploadRef.paraVarPair"
                    :para="pvt_upload.uploadRef.para"
                    :attr="pvt_upload.uploadRef.attr">
            </lm-picture-upload>
        </div>-->
    </div>
</template>
<script>
    import headC from './pageHeader/header';
    import footC from './pageFoot/footer';
    import myRelease from './myRelease/myRelease';
    import myJoin from './myJoin/myJoin';
    import myApproval from './myApproval/myApproval';
 

    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';

    export default {
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number', 'curList'],
        // inject: ['sys'],
        provide: function () {
            return {
                sys: this.sys
            }
        },
        components: {
            headC,
            footC,
            myRelease,
            myJoin,
            myApproval
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
                myReleaseInit: false,
                myJoinInit: false,
                myApprovalInit: false,
                applySortInit: false,
                photoInit: false,
                newsInit: false,
                tabListArr: [],

                // 当前模块的para参数为 modulePara1 和 modulePara1
                // 需要双向修改参数的场景，用户可直接修改以下模块参数同名的变量
                // modulePara1: this.para.modulePara1,
                // modulePara2: this.para.modulePara2,

                pvt_subModuleMap: {
                    subModule: ['myJoinRef', 'myReleaseRef', 'myApprovalRef', 'footRef', 'headRef', 'tabListRef', 'uploadRef'],
                    vessel: ['list', 'list', 'list', 'foot', 'head', 'tabList', 'upload'],
                },

                // 各个容器当前显示的子模块
                pvt_isShow: {
                    head: null,
                    foot: null,
                    tabList: null,
                    list: null,
                    upload: null,
                },

                // 当前模块输入类型的事务接口名称，工具完成前需要用户手动填写
                pvt_eventPortInput: ['detailPageEvent', 'activityWithdrawEvent', 'managePageEvent', 'activityCloseEvent', 'editPageEvent', 'activityDeleteEvent', 'getManageInfoIn', 'getActivityNumberEvent'],
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
            pvt_list: function () {
                return {
                    myJoinRef: {
                        paraVarPair: {},
                        para: {

                        },
                        attr: {}
                    },
                    myReleaseRef: {
                        paraVarPair: {},
                        para: {

                        },
                        attr: {}
                    },
                    myApprovalRef: {
                        paraVarPair: {},
                        para: {

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
                            listData: this.tabListArr
                        },
                        attr: {
                            // checked: this.checkedDefault,
                            // checked: 1,
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
                let fnname = 'activityList_start';
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
                    tabListRef: 'tabListRef',
                    myReleaseRef: 'myReleaseRef',
                    myJoinRef: 'myJoinRef',
                    myApprovalRef: 'myApprovalRef',
                    uploadRef: 'uploadRef',
                };
                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                            this.curTabIndex = that.curList;
                            this.groupId = 100;
                            this.myId = that.getCookie('userID');

                            that.ep.getManageInfoIn(this.groupId, this.myId, function (isManager) {
                                if(isManager) {
                                    that.tabListArr = [
                                        {name: '我的发布', icon: 'el-icon-folder-opened', img: '', disabled: false},
                                        {name: '我的参与', icon: 'el-icon-document-checked', img: '', disabled: false},
                                        {name: '我的审批', icon: 'el-icon-edit', img: '', disabled: false},
                                    ];
                                } else {
                                    that.tabListArr = [
                                        {name: '我的发布', icon: 'el-icon-folder-opened', img: '', disabled: false},
                                        {name: '我的参与', icon: 'el-icon-document-checked', img: '', disabled: false},
                                    ];
                                }

                                switch (that.curList) {
                                    case 0:
                                        that.myReleaseInit = true;
                                        para.nStep = 'myReleaseStart';
                                        break;
                                    case 1:
                                        that.myJoinInit = true;
                                        para.nStep = 'myJoinStart';
                                        break;
                                    case 2:
                                        that.myApprovalInit = true;
                                        para.nStep = 'myApprovalStart';
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
                        case 'myReleaseStart':
                            that.sm[ref.myReleaseRef].startModule(function () {
                                para.nStep = 'headStart';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'myJoinStart':
                            that.sm[ref.myJoinRef].startModule(function () {
                                para.nStep = 'headStart';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'myApprovalStart':
                            that.sm[ref.myApprovalRef].startModule(function () {
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
                            // let refArr = ['headRef', 'tabListRef', 'uploadRef'];
                            switch (that.curList) {
                                case 0:
                                    refArr.push('myReleaseRef');
                                    break;
                                case 1:
                                    refArr.push('myJoinRef');
                                    break;
                                case 2:
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
                            // 设置左侧列表高度：
                            let $contentLeft = that.$refs.contentLeft;
                            let $activityList = that.$refs.activityList;
                            let screenHeight = document.documentElement.clientHeight;
                            $contentLeft.style.height = screenHeight - 90 - 20 + 'px';
                            $activityList.style.minHeight = screenHeight - 90 - 20 + 'px';
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
                        if (that.myReleaseInit) {
                            that.showSubModule('myReleaseRef', true, function () {
                            }, function () {
                            });
                        } else {
                            that.myReleaseInit = true;
                            that.sm.myReleaseRef.startModule(function () {
                                that.showSubModule('myReleaseRef', true, function () {
                                }, function () {
                                });
                            }, function () {
                            });
                        }
                        break;
                    case 1:
                        if (that.myJoinInit) {
                            that.showSubModule('myJoinRef', true, function () {
                            }, function () {
                            });
                        } else {
                            that.myJoinInit = true;
                            that.sm.myJoinRef.startModule(function () {
                                that.showSubModule('myJoinRef', true, function () {
                                }, function () {
                                });
                            }, function () {
                            });
                        }
                        break;
                    case 2:
                        if (that.myApprovalInit) {
                            that.showSubModule('myApprovalRef', true, function () {
                            }, function () {
                            });
                        } else {
                            that.myApprovalInit = true;
                            that.sm.myApprovalRef.startModule(function () {
                                that.showSubModule('myApprovalRef', true, function () {
                                }, function () {
                                });
                            }, function () {
                            });
                        }
                        break;
                }
            },

            tabListRef_itemClickEvent: function (index) {
                this.listChange(index);
            },


            myReleaseRef_detailPageEvent: function (curActivityId, terActivityId, successCallBack, errorCallBack) {
                this.ep.detailPageEvent(curActivityId, terActivityId, successCallBack, errorCallBack);
            },
            myReleaseRef_activityWithdrawEvent: function (curActivityId, terActivityId) {
                this.ep.activityWithdrawEvent(curActivityId, terActivityId);
            },
            myReleaseRef_managePageEvent: function (curActivityId, terActivityId, type) {
                this.ep.managePageEvent(curActivityId, terActivityId, type);
            },
            myReleaseRef_activityCloseEvent: function (curActivityId, terActivityId) {
                this.ep.activityCloseEvent(curActivityId, terActivityId);
            },
            myReleaseRef_editPageEvent: function (curActivityId, terActivityId) {
                this.ep.editPageEvent(curActivityId, terActivityId);
            },
            myReleaseRef_activityDeleteEvent: function (curActivityId, terActivityId) {
                this.ep.activityDeleteEvent(curActivityId, terActivityId);
            },

            myJoinRef_managePageEvent: function (curActivityId, terActivityId, type) {
                this.ep.managePageEvent(curActivityId, terActivityId, type);
            },
            myJoinRef_detailPageEvent: function (curActivityId, terActivityId, successCallBack, errorCallBack) {
                this.ep.detailPageEvent(curActivityId, terActivityId, successCallBack, errorCallBack);
            },

            myApprovalRef_activityApprovalEvent: function (activityId, commandType, rejectReason,successCallBack,errorCallBack) {
                this.ep.activityApprovalEvent(activityId, commandType, rejectReason,successCallBack,errorCallBack);
            },
            myApprovalRef_getActivityNumberEvent: function (expressionArr,successCallBack,errorCallBack) {
                this.ep.getActivityNumberEvent(expressionArr,successCallBack,errorCallBack);
            },
            myApprovalRef_detailPageEvent: function (activityId,successCallBack,errorCallBack) {
                this.ep.detailPageEvent(activityId,activityId,successCallBack,errorCallBack);
            },
        }
    };
</script>
<style lang="scss">
    #activity-list-wrap {
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
            height: 80px;
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
            max-width: 1300px;
            margin: 0 auto;
            padding: 10px 20px 0 20px;
            z-index: 5;
            overflow: hidden;

            .content-left {
                position: fixed;
                width: 138px;
                height: 900px;
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
                        background: #fff;
                        color: #00a4fd;
                    }
                    .lm-list-content-item {
                        padding: 10px 20px;
                    }
                }
            }

            .activity-list {
                flex: 1;
                min-height: 900px;
                margin-left: 150px;
                margin-right: 0;
                margin-bottom: 20px;
                background-color: #fff;
                border-radius: 4px;
                box-shadow: 0 0 8px 0 rgba(48, 49, 51, 0.1);
                color: #303133;
                box-sizing: border-box;
            }
        }
    }
</style>
