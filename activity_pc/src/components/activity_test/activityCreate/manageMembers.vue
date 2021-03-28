<template>
    <div class="manage-members">
        <div class="info-title">
            <lm-link-text
                    ref="smText1"
                    refId="smText1"
                    v-show="pvt_isShow.v1 === 'smText1'"
                    :paraVarPair="pvt_v1.smText1.paraVarPair"
                    :para="pvt_v1.smText1.para"
                    :attr="pvt_v1.smText1.attr">
            </lm-link-text>
        </div>
        <div class="info-option">
            <div class="row">
                <div class="col col_w_10">
                    <div class="members-item">
                        <div class="col members-title">
                            <lm-link-text
                                    ref="smText3"
                                    refId="smText3"
                                    v-show="pvt_isShow.v4 === 'smText3'"
                                    :paraVarPair="pvt_v4.smText3.paraVarPair"
                                    :para="pvt_v4.smText3.para"
                                    :attr="pvt_v4.smText3.attr">
                            </lm-link-text>
                        </div>
                        <div class="col members-content">
                            <div>
                                <lm-tree-select
                                        ref="smTree2"
                                        refId="smTree2"
                                        v-show="pvt_isShow.v5 === 'smTree2'"
                                        :paraVarPair="pvt_v5.smTree2.paraVarPair"
                                        :para="pvt_v5.smTree2.para"
                                        :attr="pvt_v5.smTree2.attr">
                                </lm-tree-select>
                            </div>
                            <div class="info-tip" v-show="pvt_isShow.v12 === 'smText7'">
                                <i class="el-icon-warning"></i>
                                <lm-link-text
                                        ref="smText7"
                                        refId="smText7"
                                        v-show="pvt_isShow.v12 === 'smText7'"
                                        :paraVarPair="pvt_v12.smText7.paraVarPair"
                                        :para="pvt_v12.smText7.para"
                                        :attr="pvt_v12.smText7.attr">
                                </lm-link-text>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col col_w_10">
                    <div class="members-item">
                        <div class="col members-title">
                            <lm-link-text
                                    ref="smText4"
                                    refId="smText4"
                                    v-show="pvt_isShow.v6 === 'smText4'"
                                    :paraVarPair="pvt_v6.smText4.paraVarPair"
                                    :para="pvt_v6.smText4.para"
                                    :attr="pvt_v6.smText4.attr">
                            </lm-link-text>
                        </div>
                        <div class="col members-content">
                            <div>
                                <lm-tree-select
                                        ref="smTree3"
                                        refId="smTree3"
                                        v-show="pvt_isShow.v7 === 'smTree3'"
                                        :paraVarPair="pvt_v7.smTree3.paraVarPair"
                                        :para="pvt_v7.smTree3.para"
                                        :attr="pvt_v7.smTree3.attr">
                                </lm-tree-select>
                            </div>
                            <div class="info-tip" v-show="pvt_isShow.v13 === 'smText8'">
                                <i class="el-icon-warning"></i>
                                <lm-link-text
                                        ref="smText8"
                                        refId="smText8"
                                        v-show="pvt_isShow.v13 === 'smText8'"
                                        :paraVarPair="pvt_v13.smText8.paraVarPair"
                                        :para="pvt_v13.smText8.para"
                                        :attr="pvt_v13.smText8.attr">
                                </lm-link-text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col col_w_10">
                    <div class="members-item">
                        <div class="col members-title">
                            <lm-link-text
                                    ref="smText5"
                                    refId="smText5"
                                    v-show="pvt_isShow.v8 === 'smText5'"
                                    :paraVarPair="pvt_v8.smText5.paraVarPair"
                                    :para="pvt_v8.smText5.para"
                                    :attr="pvt_v8.smText5.attr">
                            </lm-link-text>
                        </div>
                        <div class="col members-content">
                            <div>
                                <lm-tree-select
                                        ref="smTree4"
                                        refId="smTree4"
                                        v-show="pvt_isShow.v9 === 'smTree4'"
                                        :paraVarPair="pvt_v9.smTree4.paraVarPair"
                                        :para="pvt_v9.smTree4.para"
                                        :attr="pvt_v9.smTree4.attr">
                                </lm-tree-select>
                            </div>
                            <div class="info-tip" v-show="pvt_isShow.v14 === 'smText9'">
                                <i class="el-icon-warning"></i>
                                <lm-link-text
                                        ref="smText9"
                                        refId="smText9"
                                        v-show="pvt_isShow.v14 === 'smText9'"
                                        :paraVarPair="pvt_v14.smText9.paraVarPair"
                                        :para="pvt_v14.smText9.para"
                                        :attr="pvt_v14.smText9.attr">
                                </lm-link-text>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col col_w_10">
                    <div class="members-item">
                        <div class="col members-title">
                            <lm-link-text
                                    ref="smText6"
                                    refId="smText6"
                                    v-show="pvt_isShow.v10 === 'smText6'"
                                    :paraVarPair="pvt_v10.smText6.paraVarPair"
                                    :para="pvt_v10.smText6.para"
                                    :attr="pvt_v10.smText6.attr">
                            </lm-link-text>
                        </div>
                        <div class="col members-content">
                            <div>
                                <lm-tree-select
                                        ref="smTree5"
                                        refId="smTree5"
                                        v-show="pvt_isShow.v11 === 'smTree5'"
                                        :paraVarPair="pvt_v11.smTree5.paraVarPair"
                                        :para="pvt_v11.smTree5.para"
                                        :attr="pvt_v11.smTree5.attr">
                                </lm-tree-select>
                            </div>
                            <div class="info-tip" v-show="pvt_isShow.v15 === 'smText10'">
                                <i class="el-icon-warning"></i>
                                <lm-link-text
                                        ref="smText10"
                                        refId="smText10"
                                        v-show="pvt_isShow.v15 === 'smText10'"
                                        :paraVarPair="pvt_v15.smText10.paraVarPair"
                                        :para="pvt_v15.smText10.para"
                                        :attr="pvt_v15.smText10.attr">
                                </lm-link-text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import libSys
        from '@/components/baseComponent/libSys.js';
    import libUpload
        from '@/components/baseComponent/libUpload.js';

    export default {
        components: {},
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ['sys'],
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ["v1", "v4", "v5", "v6", "v7", "v8", "v9", "v10", "v11","v12", "v13", "v14", "v15"],
                    subModule: ["smText1", "smText3", "smTree2", "smText4", "smTree3", "smText5", "smTree4", "smText6", "smTree5", "smText7", "smText8", "smText9", "smText10"]
                },
                pvt_isShow: {
                    "v1": null,
                    "v4": null,
                    "v5": null,
                    "v6": null,
                    "v7": null,
                    "v8": null,
                    "v9": null,
                    "v10": null,
                    "v11": null,
                    "v12": null,
                    "v13": null,
                    "v14": null,
                    "v15": null,
                },

                pvt_eventPortInput: [],

                debugFlag: true,
                mac: mac.mac,
                treeData: [],
                disableTable: [],
                hostNameArr: {},
                lectureNameArr: {},
                assistantNameArr: {},
                serviceNameArr: {},
                oldPostNameArr: [],
                oldLectureNameArr: [],
                oldAssistantNameArr: [],
                oldServiceNameArr: [],
            }
        },
        computed: {
            pvt_v1: function () {
                return {
                    smText1: {
                        paraVarPair: {},
                        para: {
                            textData: '活动管理成员设置'
                        },
                        attr: {
                            fontSize: '18px', height: '64px', color: '#12B0FF'
                        }
                    }
                }
            }, pvt_v4: function () {
                return {
                    smText3: {
                        paraVarPair: {},
                        para: {
                            textData: '主持人'
                        },
                        attr: {
                            fontSize: '16px', height: '40px', color: '#303133'
                        }
                    }
                }
            }, pvt_v5: function () {
                return {
                    smTree2: {
                        paraVarPair: {},
                        para: {
                            value: this.hostNameArr,
                            tree: this.treeData,
                            disable: this.disableTable
                        },
                        attr: {defaultExpandAll: true, multiple: true, saveValue: true}
                    }
                }
            }, pvt_v6: function () {
                return {
                    smText4: {
                        paraVarPair: {},
                        para: {
                            textData: '主讲人'
                        },
                        attr: {
                            fontSize: '16px', height: '40px', color: '#303133'
                        }
                    }
                }
            }, pvt_v7: function () {
                return {
                    smTree3: {
                        paraVarPair: {},
                        para: {
                            value: this.lectureNameArr,
                            tree: this.treeData,
                            disable: this.disableTable
                        },
                        attr: {defaultExpandAll: true, multiple: true, saveValue: true}
                    }
                }
            }, pvt_v8: function () {
                return {
                    smText5: {
                        paraVarPair: {},
                        para: {
                            textData: '助手'
                        },
                        attr: {
                            fontSize: '16px', height: '40px', color: '#303133'
                        }
                    }
                }
            }, pvt_v9: function () {
                return {
                    smTree4: {
                        paraVarPair: {},
                        para: {
                            value: this.assistantNameArr,
                            tree: this.treeData,
                            disable: this.disableTable
                        },
                        attr: {defaultExpandAll: true, multiple: true, saveValue: true}
                    }
                }
            }, pvt_v10: function () {
                return {
                    smText6: {
                        paraVarPair: {},
                        para: {
                            textData: '在线客服'
                        },
                        attr: {
                            fontSize: '16px', height: '40px', color: '#303133'
                        }
                    }
                }
            }, pvt_v11: function () {
                return {
                    smTree5: {
                        paraVarPair: {},
                        para: {
                            value: this.serviceNameArr,
                            tree: this.treeData,
                            disable: this.disableTable
                        },
                        attr: {defaultExpandAll: true, multiple: true, saveValue: true}
                    }
                }
            },pvt_v12: function () {
                return {
                    smText7: {
                        paraVarPair: {},
                        para: {
                            textData: '请选择主持人'
                        },
                        attr: {
                            fontSize: '12px', height: '20px', color: '#F56C6C'
                        }
                    }
                }
            },pvt_v13: function () {
                return {
                    smText8: {
                        paraVarPair: {},
                        para: {
                            textData: '请选择主讲人'
                        },
                        attr: {
                            fontSize: '12px', height: '20px', color: '#F56C6C'
                        }
                    }
                }
            },pvt_v14: function () {
                return {
                    smText9: {
                        paraVarPair: {},
                        para: {
                            textData: '请选择助手'
                        },
                        attr: {
                            fontSize: '12px', height: '20px', color: '#F56C6C'
                        }
                    }
                }
            },pvt_v15: function () {
                return {
                    smText10: {
                        paraVarPair: {},
                        para: {
                            textData: '请选择在线客服'
                        },
                        attr: {
                            fontSize: '12px', height: '20px', color: '#F56C6C'
                        }
                    }
                }
            },
        },
        watch: {},
        mounted: function () {
            this.pvt_initSysData();
        },
        created: function () {
            Object.assign(this, libSys, libUpload);
        },
        methods: {
            startModule: function (successCallBack, errorCallBack) {
                let $this = this;
                let para;
                let dbFlag;
                let objectName;
                let parentRecord;
                let fnname = 'manageMembers.startModule';
                let condition;
                let dbData;
                let ref = {
                    sm1: 'smText1',
                    sm4: 'smText3',
                    sm5: 'smTree2',
                    sm6: 'smText4',
                    sm7: 'smTree3',
                    sm8: 'smText5',
                    sm9: 'smTree4',
                    sm10: 'smText6',
                    sm11: 'smTree5',
                    sm12: 'smText7',
                    sm13: 'smText8',
                    sm14: 'smText9',
                    sm15: 'smText10',
                };

                if (successCallBack !== null) {
                    errorCallBack = $this.setPara(successCallBack, errorCallBack);
                    successCallBack = null;
                }
                para = errorCallBack;

                while (1) {
                    dbFlag = 0;
                    if ($this.debugFlag) {
                        console.log(fnname + ': para.nStep = ' + para.nStep);
                    }
                    switch (para.nStep) {
                        case 0:
                        case 'queryHost':
                            objectName = $this.mac.tb.groupActivityManageMember;
                            parentRecord = [$this.para.activityID];
                            condition = $this.mac.fd.groupActivityManageMember.function +'='+ $this.mac.enum.groupActivityManageMember.function.host;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [];
                            dbData[$this.mac.fd.groupActivityManageMember.member] = [];
                            $this.sys.api.recordQuery(objectName, parentRecord, condition, dbData,
                                function () {
                                    $this.hostNameArr[$this.mac.tb.clerkSet] = {};
                                    $this.hostNameArr[$this.mac.tb.clerkSet]['value'] = dbData[$this.mac.fd.groupActivityManageMember.member];
                                    $this.hostNameArr[$this.mac.tb.clerkSet]['field'] = $this.mac.fd.clerkSet.clerkName;
                                    $this.oldHostNameArr = dbData[$this.mac.fd.groupActivityManageMember.member];
                                    para.nStep = 'queryLecture';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'queryLecture':
                            objectName = $this.mac.tb.groupActivityManageMember;
                            parentRecord = [$this.para.activityID];
                            condition = $this.mac.fd.groupActivityManageMember.function +'='+ $this.mac.enum.groupActivityManageMember.function.lecture;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [];
                            dbData[$this.mac.fd.groupActivityManageMember.member] = [];
                            $this.sys.api.recordQuery(objectName, parentRecord, condition, dbData,
                                function () {
                                    $this.lectureNameArr[$this.mac.tb.clerkSet] = {};
                                    $this.lectureNameArr[$this.mac.tb.clerkSet]['value'] = dbData[$this.mac.fd.groupActivityManageMember.member];
                                    $this.lectureNameArr[$this.mac.tb.clerkSet]['field'] = $this.mac.fd.clerkSet.clerkName;
                                    $this.oldLectureNameArr = dbData[$this.mac.fd.groupActivityManageMember.member];
                                    para.nStep = 'queryAssistant';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'queryAssistant':
                            objectName = $this.mac.tb.groupActivityManageMember;
                            parentRecord = [$this.para.activityID];
                            condition = $this.mac.fd.groupActivityManageMember.function +'='+ $this.mac.enum.groupActivityManageMember.function.assistant;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [];
                            dbData[$this.mac.fd.groupActivityManageMember.member] = [];
                            $this.sys.api.recordQuery(objectName, parentRecord, condition, dbData,
                                function () {
                                    $this.assistantNameArr[$this.mac.tb.clerkSet] = {};
                                    $this.assistantNameArr[$this.mac.tb.clerkSet]['value'] = dbData[$this.mac.fd.groupActivityManageMember.member];
                                    $this.assistantNameArr[$this.mac.tb.clerkSet]['field'] = $this.mac.fd.clerkSet.clerkName;
                                    $this.oldAssistantNameArr = dbData[$this.mac.fd.groupActivityManageMember.member];
                                    para.nStep = 'queryService';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'queryService':
                            objectName = $this.mac.tb.groupActivityManageMember;
                            parentRecord = [$this.para.activityID];
                            condition = $this.mac.fd.groupActivityManageMember.function +'='+ $this.mac.enum.groupActivityManageMember.function.service;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [];
                            dbData[$this.mac.fd.groupActivityManageMember.member] = [];
                            $this.sys.api.recordQuery(objectName, parentRecord, condition, dbData,
                                function () {
                                    $this.serviceNameArr[$this.mac.tb.clerkSet] = {};
                                    $this.serviceNameArr[$this.mac.tb.clerkSet]['value'] = dbData[$this.mac.fd.groupActivityManageMember.member];
                                    $this.serviceNameArr[$this.mac.tb.clerkSet]['field'] = $this.mac.fd.clerkSet.clerkName;
                                    $this.oldServiceNameArr = dbData[$this.mac.fd.groupActivityManageMember.member];
                                    para.nStep = 'queryGroup';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'queryGroup':
                            objectName = $this.mac.tb.group;
                            parentRecord = null;
                            condition = null;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [];
                            $this.sys.api.recordQuery(objectName, parentRecord, condition, dbData,
                                function () {
                                    para.groupID = dbData[$this.mac.fd.id][0];
                                    para.departmentID = [];
                                    para.nStep = 'queryDepartment';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'queryDepartment':
                            objectName = $this.mac.tb.department;
                            parentRecord = [para.groupID];
                            condition = $this.mac.fd.department.superior + '=' + null;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [];
                            $this.sys.api.recordQuery(objectName, parentRecord, condition, dbData,
                                function () {
                                    para.departmentID = dbData[$this.mac.fd.id];
                                    $this.treeData = [{
                                        $table: $this.mac.tb.department,
                                        $arrField: [$this.mac.fd.department.name],
                                        $arrValue: para.departmentID,
                                        $arrSubTab: [{
                                            $table: $this.mac.tb.clerkSet,
                                            $arrField: [$this.mac.fd.clerkSet.clerkName],
                                            $arrValue: null
                                        }]
                                    }]
                                    $this.disableTable = [$this.mac.tb.department]
                                    $this.forceUpdateData(function () {
                                        para.nStep = 'startModule1';
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.startModule(successCallBack, errorCallBack)
                                        }
                                    })
                                }, para.errorCallBack)
                            break;
                        case 'startModule1':
                            $this.sm[ref.sm1].startModule(function () {
                                para.nStep = 'startModule4';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule4':
                            $this.sm[ref.sm4].startModule(function () {
                                para.nStep = 'startModule5';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule5':
                            $this.sm[ref.sm5].startModule(function () {
                                para.nStep = 'startModule6';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule6':
                            $this.sm[ref.sm6].startModule(function () {
                                para.nStep = 'startModule7';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule7':
                            $this.sm[ref.sm7].startModule(function () {
                                para.nStep = 'startModule8';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule8':
                            $this.sm[ref.sm8].startModule(function () {
                                para.nStep = 'startModule9';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule9':
                            $this.sm[ref.sm9].startModule(function () {
                                para.nStep = 'startModule10';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule10':
                            $this.sm[ref.sm10].startModule(function () {
                                para.nStep = 'startModule11';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule11':
                            $this.sm[ref.sm11].startModule(function () {
                                para.nStep = 'startModule12';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule12':
                            $this.sm[ref.sm12].startModule(function () {
                                para.nStep = 'startModule13';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule13':
                            $this.sm[ref.sm13].startModule(function () {
                                para.nStep = 'startModule14';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule14':
                            $this.sm[ref.sm14].startModule(function () {
                                para.nStep = 'startModule15';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule15':
                            $this.sm[ref.sm15].startModule(function () {
                                para.nStep = 'showModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showModules':
                            //显示子组件
                            let refId = ["smText1", "smText3", "smTree2", "smText4", "smTree3", "smText5", "smTree4", "smText6", "smTree5"];
                            $this.showSubModule(refId, true, function () {
                                para.nStep = 'end';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'end':
                            para.successCallBack('success');
                            return;
                        default:
                            para.errorCallBack('error');
                            return;
                    }
                    dbFlag += 1;
                    if (dbFlag === 1) return;
                }
            },
            setPara: function (successCallBack, errorCallBack) {
                var para = {};
                para.successCallBack = successCallBack;
                para.errorCallBack = errorCallBack;
                para.nStep = 0;
                return para;
            },
            wrongInfoShow: function (successCallBack, errorCallBack) {
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                var $this = this;
                var fnname = 'manageMenbers.wrongInfoShow';
                if (successCallBack !== null) {
                    errorCallBack = {
                        successCallBack: successCallBack,
                        errorCallBack: errorCallBack,
                        nStep: 0
                    }
                    successCallBack = null
                }
                let para = errorCallBack;
                while (1) {
                    if ($this.debugFlag) {
                        console.log(fnname + ': para.nStep = ' + para.nStep);
                    }
                    var $dbFlag = 0;
                    switch (para.nStep) {
                        case 0:
                        case 'queryHost':
                            objectName = $this.mac.tb.groupActivityManageMember;
                            parentRecord = [$this.para.activityID];
                            condition = $this.mac.fd.groupActivityManageMember.function +'='+ $this.mac.enum.groupActivityManageMember.function.host;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [];
                            $this.sys.api.recordQuery(objectName, parentRecord, condition, dbData,
                                function () {
                                    para.hostID = dbData[$this.mac.fd.id];
                                    para.nStep = 'queryLecture';
                                    if (++$dbFlag === 2) {
                                        $this.wrongInfoShow(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'queryLecture':
                            objectName = $this.mac.tb.groupActivityManageMember;
                            parentRecord = [$this.para.activityID];
                            condition = $this.mac.fd.groupActivityManageMember.function +'='+ $this.mac.enum.groupActivityManageMember.function.lecture;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [];
                            $this.sys.api.recordQuery(objectName, parentRecord, condition, dbData,
                                function () {
                                    para.lectureID = dbData[$this.mac.fd.id];
                                    para.nStep = 'queryAssistant';
                                    if (++$dbFlag === 2) {
                                        $this.wrongInfoShow(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'queryAssistant':
                            objectName = $this.mac.tb.groupActivityManageMember;
                            parentRecord = [$this.para.activityID];
                            condition = $this.mac.fd.groupActivityManageMember.function +'='+ $this.mac.enum.groupActivityManageMember.function.assistant;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [];
                            dbData[$this.mac.fd.groupActivityManageMember.member] = [];
                            $this.sys.api.recordQuery(objectName, parentRecord, condition, dbData,
                                function () {
                                    para.assistantID = dbData[$this.mac.fd.id];
                                    para.nStep = 'queryService';
                                    if (++$dbFlag === 2) {
                                        $this.wrongInfoShow(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'queryService':
                            objectName = $this.mac.tb.groupActivityManageMember;
                            parentRecord = [$this.para.activityID];
                            condition = $this.mac.fd.groupActivityManageMember.function +'='+ $this.mac.enum.groupActivityManageMember.function.service;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [];
                            dbData[$this.mac.fd.groupActivityManageMember.member] = [];
                            $this.sys.api.recordQuery(objectName, parentRecord, condition, dbData,
                                function () {
                                    para.serviceID = dbData[$this.mac.fd.id];
                                    para.nStep = 'loopCheck';
                                    if (++$dbFlag === 2) {
                                        $this.wrongInfoShow(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'loopCheck':
                            if (para.hostID.length === 0) {
                                $this.$message({
                                    type: 'error',
                                    message: '请选择主持人'
                                });
                                para.refId = ['smText7']
                            }else if(para.lectureID.length === 0){
                                $this.$message({
                                    type: 'error',
                                    message: '请选择主讲人'
                                });
                                para.refId = ['smText8']
                            }else if (para.assistantID.length === 0) {
                                $this.$message({
                                    type: 'error',
                                    message: '请选择助手'
                                });
                                para.refId = ['smText9']
                            }else if (para.serviceID.length === 0) {
                                $this.$message({
                                    type: 'error',
                                    message: '请选择在线客服'
                                });
                                para.refId = ['smText10']
                            }
                            para.nStep = 'showSubModule';
                            if (++$dbFlag === 2) {
                                $this.wrongInfoShow(successCallBack, errorCallBack)
                            }
                            break
                        case 'showSubModule':
                            $this.showSubModule( para.refId, true, function () {
                                $("html,body").animate({
                                    scrollTop: $('.manage-members')[0].offsetTop-100+ "px"
                                },200);
                                para.nStep = 'default';
                                if (++$dbFlag === 2) {
                                    $this.wrongInfoShow(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break
                        case 'end':
                            para.successCallBack()
                            return;
                        case 'default':
                            return;
                    }
                    if (++$dbFlag === 1) {
                        return;
                    }
                }
            },
            wrongInfoHide:function(refId,idArr,type,successCallBack,errorCallBack){
                let $this = this;
                let para;
                let dbFlag;
                let objectName;
                let parentRecord;
                let fnname = 'manageMembers.wrongInfoHide';
                let condition;
                let dbData;

                if (successCallBack !== null) {
                    errorCallBack = $this.setPara(successCallBack, errorCallBack);
                    successCallBack = null;
                }
                para = errorCallBack;

                while (1) {
                    dbFlag = 0;
                    if ($this.debugFlag) {
                        console.log(fnname + ': para.nStep = ' + para.nStep);
                    }
                    switch (para.nStep) {
                        case 0:
                            para.i = 0;
                            para.nStep = 'groupActivityManageMemberNew';
                            if(idArr.length>0){
                                $this.showSubModule(refId,false, function () {}, function () {});
                            }
                            let temp;
                            para.deleteArr = [];
                            para.addArr = [];
                            if(type === $this.mac.enum.groupActivityManageMember.function.host){
                                temp = $this.oldHostNameArr;
                            }else if(type === $this.mac.enum.groupActivityManageMember.function.lecture){
                                temp = $this.oldLectureNameArr;
                            }else if(type === $this.mac.enum.groupActivityManageMember.function.assistant){
                                temp = $this.oldAssistantNameArr;
                            }else{
                                temp = $this.oldServiceNameArr;
                            }
                            for(var i=0;i<idArr.length;i++){
                                if(temp.indexOf(idArr[i])===-1){
                                    para.addArr.push(idArr[i])
                                }
                            }
                            for(var j=0;j<temp.length;j++){
                                if(idArr.indexOf(temp[j])===-1){
                                    para.deleteArr.push(temp[j])
                                }
                            }
                            dbFlag += 1;
                            break
                        case 'groupActivityManageMemberNew':
                            if(para.addArr.length === 0){
                                para.nStep = 'groupActivityManageMemberQuery';
                                dbFlag += 1;
                                break
                            }
                            objectName = $this.mac.tb.groupActivityManageMember;
                            parentRecord = $this.para.activityID;
                            dbData = {};
                            dbData[$this.mac.fd.groupActivityManageMember.function] = [];
                            dbData[$this.mac.fd.groupActivityManageMember.member] = para.addArr;
                            para.addArr.forEach(function(element) {
                                dbData[$this.mac.fd.groupActivityManageMember.function].push(type);
                            });
                            $this.sys.api.recordNew(objectName, parentRecord, dbData,
                                function () {
                                    para.nStep = 'groupActivityManageMemberQuery';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.wrongInfoHide(refId,idArr,type,successCallBack,errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'groupActivityManageMemberQuery':
                            if(para.deleteArr.length === 0){
                                para.nStep = 'end';
                                dbFlag += 1;
                                break
                            }
                            objectName = $this.mac.tb.groupActivityManageMember;
                            parentRecord = [$this.para.activityID];
                            condition = $this.mac.fd.groupActivityManageMember.member + '='+ $this.arrToStrOfCondition(para.deleteArr);
                            dbData = {};
                            dbData[$this.mac.fd.id] = [];
                            $this.sys.api.recordQuery(objectName,parentRecord,condition,dbData,
                                function () {
                                    para.deleteID = dbData[$this.mac.fd.id];
                                    para.nStep = 'groupActivityManageMemberDelete';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.wrongInfoHide(refId,idArr,type,successCallBack,errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'groupActivityManageMemberDelete':
                            if(para.deleteArr.length === 0){
                                para.nStep = 'end';
                                dbFlag += 1;
                                break
                            }
                            objectName = $this.mac.tb.groupActivityManageMember;
                            $this.sys.api.recordDelete(objectName,para.deleteID,
                                function () {
                                    para.nStep = 'end';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.wrongInfoHide(refId,idArr,type,successCallBack,errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'end':
                            if(type === $this.mac.enum.groupActivityManageMember.function.host){
                                $this.oldHostNameArr = idArr;
                            }else if(type === $this.mac.enum.groupActivityManageMember.function.lecture){
                                $this.oldLectureNameArr = idArr;
                            }else if(type === $this.mac.enum.groupActivityManageMember.function.assistant){
                                $this.oldAssistantNameArr = idArr;
                            }else{
                                $this.oldServiceNameArr = idArr;
                            }
                            $this.dataOutput($this.mac.tb.groupActivity,$this.para.activityID)
                            para.successCallBack('success');
                            return;
                        default:
                            para.errorCallBack('error');
                            return;
                    }
                    dbFlag += 1;
                    if (dbFlag === 1) return;
                }
            },
            dataOutput:function (tableName,id) {
                let $this = this;
                $this.sys.api.dataOutput(tableName, [id], '',
                    function () {

                    },function (error) {console.error(error)})
            },

            arrToStrOfCondition: function (arr) {
                if (arr.length === 0) {
                    return null;
                } else if (arr.length === 1) {
                    return arr[0];
                } else {
                    var str = arr.join(',');
                    return '[' + str + ']';
                }
            },
            smTree2_dataModifyEvent:function (table,checkedId,content) {
                this.wrongInfoHide('smText7',checkedId,this.mac.enum.groupActivityManageMember.function.host,function(){},function(error){console.error(error)});
            },
            smTree3_dataModifyEvent:function (table,checkedId,content) {
                this.wrongInfoHide('smText8',checkedId,this.mac.enum.groupActivityManageMember.function.lecture,function(){},function(error){console.error(error)});
            },
            smTree4_dataModifyEvent:function (table,checkedId,content) {
                this.wrongInfoHide('smText9',checkedId,this.mac.enum.groupActivityManageMember.function.assistant,function(){},function(error){console.error(error)});
            },
            smTree5_dataModifyEvent:function (table,checkedId,content) {
                this.wrongInfoHide('smText10',checkedId,this.mac.enum.groupActivityManageMember.function.service,function(){},function(error){console.error(error)});
            }
        }
    }
</script>
<style lang="scss">
    .manage-members {
        box-shadow: 0px 0px 8px 0px rgba(48, 49, 51, 0.1);
        border-radius: 4px;
        .info-tip {
            .el-icon-warning {
                color: #F56C6C;
                vertical-align: middle;
                margin: -2px 5px 0 0;
            }
        }

        .info-title {
            padding: 0 40px;
            height: 64px;
            background: #ffffff;
            margin-top: 15px;
            border-bottom: 2px solid #12B0FF;
        }

        .info-option {
            padding: 40px 95px;
            background: #ffffff;

            .members-content {
                .lm-select {
                    width: 100%;

                    .el-select {
                        width: 100%;
                    }
                }
            }

        }
    }
</style>
<style lang="scss" scoped>
    .manage-members {
        box-shadow: 0px 0px 8px 0px rgba(48, 49, 51, 0.1);
        border-radius: 4px;

        .info-title {
            padding: 0 40px;
            height: 64px;
            background: #ffffff;
            margin-top: 15px;
            border-bottom: 2px solid #12B0FF;
        }

        .info-option {
            padding: 40px 95px;
            background: #ffffff;

            .row {
                /*height: 40px;*/
                padding: 20px 0;
            }

            .members-item {
                display: flex;
                padding-right: 50px;
            }

            .members-title {
                width: 90px;
            }

            .members-content {
                /*height: 40px;*/
                flex: 1;
                position: relative;
                .info-tip {
                    position: absolute;
                    top: 45px;
                }
            }
        }
    }


    .col {
        box-sizing: border-box;
        display: inline-block;
        vertical-align: top;
    }

    .col_w_1 {
        width: 5%;
    }

    .col_w_2 {
        width: 10%;
    }

    .col_w_3 {
        width: 15%;
    }

    .col_w_4 {
        width: 20%;
    }

    .col_w_5 {
        width: 25%;
    }

    .col_w_6 {
        width: 30%;
    }

    .col_w_7 {
        width: 35%;
    }

    .col_w_8 {
        width: 40%;
    }

    .col_w_9 {
        width: 45%;
    }

    .col_w_10 {
        width: 50%;
    }

    .col_w_11 {
        width: 55%;
    }

    .col_w_12 {
        width: 60%;
    }

    .col_w_13 {
        width: 65%;
    }

    .col_w_14 {
        width: 70%;
    }

    .col_w_15 {
        width: 75%;
    }

    .col_w_16 {
        width: 80%;
    }

    .col_w_17 {
        width: 85%;
    }

    .col_w_18 {
        width: 90%;
    }

    .col_w_19 {
        width: 95%;
    }

    .col_w_20 {
        width: 100%;
    }
</style>