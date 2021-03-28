<template>
    <div class="check-ticket-wrap">
        <div class="check-title">
            <lm-link-text
                    ref="titleRef"
                    refId="titleRef"
                    v-show="pvt_isShow.title === 'titleRef'"
                    :paraVarPair="pvt_title.titleRef.paraVarPair"
                    :para="pvt_title.titleRef.para"
                    :attr="pvt_title.titleRef.attr">
            </lm-link-text>
        </div>
        <div class="check-content">
            <div class="check-tabs">
                <lm-tabs
                        ref="tabsRef"
                        refId="tabsRef"
                        v-show="pvt_isShow.tabs === 'tabsRef'"
                        :paraVarPair="pvt_tabs.tabsRef.paraVarPair"
                        :para="pvt_tabs.tabsRef.para"
                        :attr="pvt_tabs.tabsRef.attr">
                </lm-tabs>
            </div>
            <div class="check-type">
                <codeCheck
                        ref="codeCheckRef"
                        refId="codeCheckRef"
                        v-show="pvt_isShow.codeCheck === 'codeCheckRef'"
                        :paraVarPair="pvt_codeCheck.codeCheckRef.paraVarPair"
                        :para="pvt_codeCheck.codeCheckRef.para"
                        :attr="pvt_codeCheck.codeCheckRef.attr">
                </codeCheck>
                <conditionCheck
                        ref="conditionCheckRef"
                        refId="conditionCheckRef"
                        v-show="pvt_isShow.conditionCheck === 'conditionCheckRef'"
                        :paraVarPair="pvt_conditionCheck.conditionCheckRef.paraVarPair"
                        :para="pvt_conditionCheck.conditionCheckRef.para"
                        :attr="pvt_conditionCheck.conditionCheckRef.attr">
                </conditionCheck>
            </div>
        </div>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';
    import codeCheck from './codeCheck';
    import conditionCheck from './conditionCheck';

    export default {
        components: {codeCheck, conditionCheck},
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ["sys"],
        data: function () {
            return {
                curTabIndex: 0,

                mac: mac.mac,

                // 需要双向修改参数的场景，用户可直接修改以下模块参数同名的变量
                // selectedPara: this.para.selected,

                pvt_subModuleMap: {
                    subModule: ['titleRef', 'conditionCheckRef', 'codeCheckRef', 'tabsRef'],
                    vessel: ['title', 'conditionCheck', 'codeCheck', 'tabs'],
                },

                // 各个容器当前显示的子模块
                pvt_isShow: {
                    title: null,
                    conditionCheck: null,
                    codeCheck: null,
                    tabs: null,
                },

                // 当前模块输入类型的事务接口名称，工具完成前需要用户手动填写
                pvt_eventPortInput: ['ticketPassIn', 'getSeccodeIn', 'seccodeVerifyIn'],
            }
        },
        computed: {
            pvt_title: function () {
                return {
                    titleRef: {
                        paraVarPair: {},
                        para: {
                            textData: '验票签到'
                        },
                        attr: {
                            fontSize: '16px',
                            color: '#303133'
                        }
                    }
                }
            },

            pvt_tabs: function () {
                return {
                    tabsRef: {
                        paraVarPair: {},
                        para: {
                            tabData: [{val: "数字码/扫码设备验票", icon: "", disable: ""},{val: "姓名/手机号验票", icon: "", disable: ""}]
                        },
                        attr: {
                            checked: this.curTabIndex,
                            // stretch: true
                        }
                    }
                }
            },


            pvt_conditionCheck: function () {
                return {
                    conditionCheckRef: {
                        paraVarPair: {},
                        para: {
                            activityId: this.para.activityId
                        },
                        attr: {

                        }
                    }
                }
            },

            pvt_codeCheck: function () {
                return {
                    codeCheckRef: {
                        paraVarPair: {},
                        para: {
                            activityId: this.para.activityId
                        },
                        attr: {

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
                let fnname = 'checkTicket_start';
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
                    codeCheckRef: 'codeCheckRef',
                    conditionCheckRef: 'conditionCheckRef',
                    tabsRef: 'tabsRef',
                };

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                        case 'start_2':
                            that.curTabIndex = 0;

                            that.sm[ref.titleRef].startModule(function () {
                                para.nStep = 'start_3';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_3':
                            that.forceUpdateData(function () {
                                that.sm[ref.tabsRef].startModule(function () {
                                    para.nStep = 'start_4';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
                            });
                            break;
                        case 'start_4':
                            that.sm[ref.conditionCheckRef].startModule(function () {
                                para.nStep = 'start_5';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_5':
                            that.sm[ref.codeCheckRef].startModule(function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            let refArr = ['titleRef', 'tabsRef', 'codeCheckRef'];
                            that.showSubModule(refArr, true, function () {
                                that.showSubModule('conditionCheckRef', false, function () {
                                }, function () {
                                });
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

            labelChange: function(index) {
                let that = this;

                if(that.curTabIndex === index) {
                    return
                }
                that.curTabIndex = index;

                switch (index) {
                    case 0:
                        that.showSubModule('conditionCheckRef', false, function () {
                            that.showSubModule('codeCheckRef', true, function () {
                            }, function () {
                            });
                        }, function () {
                        });
                        break;
                    case 1:
                        that.showSubModule('codeCheckRef', false, function () {
                            that.showSubModule('conditionCheckRef', true, function () {
                            }, function () {
                            });
                        }, function () {
                        });
                        break;
                }
            },


            tabsRef_labelClickEvent: function (index) {
                this.labelChange(index);
            },
            conditionCheckRef_ticketPassIn: function (id, successCallBack, errorCallBack) {
                this.ep.ticketPassIn(id, successCallBack, errorCallBack);
            },
            conditionCheckRef_getSeccodeIn: function (phone, successCallBack, errorCallBack) {
                this.ep.getSeccodeIn(phone, successCallBack, errorCallBack);
            },
            conditionCheckRef_seccodeVerifyIn: function (id, codeValue, successCallBack, errorCallBack) {
                this.ep.seccodeVerifyIn(id, codeValue, successCallBack, errorCallBack);
            },
            codeCheckRef_ticketPassIn: function (id, successCallBack, errorCallBack) {
                this.ep.ticketPassIn(id, successCallBack, errorCallBack);
            },

        }
    }
</script>

<style lang="scss">
    .check-ticket-wrap {
        height: 100%;
        padding: 20px;
        box-sizing: border-box;
        overflow: auto;
        .check-title {
            padding: 10px 0;
            border-bottom: 1px solid #e4e4e4;
        }

        .check-content {
            min-height: 80%;
            margin: 20px;
            border-radius: 4px;
            box-shadow: 0 0 8px 0 rgba(48,49,51,0.1);
            color: #303133;
            box-sizing: border-box;
            border: 1px solid #e4e4e4;
            /*overflow: auto;*/
            .check-tabs {
                background-color: #f5f7fa;
                .el-tabs__nav-scroll {
                    padding-left: 20px;
                }
                .el-tabs__item {
                    color: #909399;
                    &:hover {
                        color: #409EFF;
                    }
                }
                .el-tabs__item.is-active {
                    color: #409EFF;
                }
            }
            .check-type {
                padding-top: 100px;
            }
        }
    }
</style>
