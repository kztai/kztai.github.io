<template>
    <div>
        <div>
            <activity-header
                    ref="smHeader"
                    refId="smHeader"
                    v-show="pvt_isShow.v1 === 'smHeader'"
                    :paraVarPair="pvt_v1.smHeader.paraVarPair"
                    :para="pvt_v1.smHeader.para"
                    :attr="pvt_v1.smHeader.attr">
            </activity-header>
        </div>
        <div class="bg-F4F4F4">
            <div class="content">
                <div class="title">
                    <lm-link-text
                            ref="smTitle"
                            refId="smTitle"
                            v-show="pvt_isShow.v2 === 'smTitle'"
                            :paraVarPair="pvt_v2.smTitle.paraVarPair"
                            :para="pvt_v2.smTitle.para"
                            :attr="pvt_v2.smTitle.attr">
                    </lm-link-text>
                </div>
                <div>
                    <basic-info
                            ref="smBasicInfo"
                            refId="smBasicInfo"
                            v-show="pvt_isShow.v3 === 'smBasicInfo'"
                            :paraVarPair="pvt_v3.smBasicInfo.paraVarPair"
                            :para="pvt_v3.smBasicInfo.para"
                            :attr="pvt_v3.smBasicInfo.attr">
                    </basic-info>
                </div>
                <div>
                    <ticket-type
                            ref="smTicketType"
                            refId="smTicketType"
                            v-show="pvt_isShow.v4 === 'smTicketType'"
                            :paraVarPair="pvt_v4.smTicketType.paraVarPair"
                            :para="pvt_v4.smTicketType.para"
                            :attr="pvt_v4.smTicketType.attr">
                    </ticket-type>
                </div>
                <div>
                    <sign-up
                            ref="smSignUp"
                            refId="smSignUp"
                            v-show="pvt_isShow.v5 === 'smSignUp'"
                            :paraVarPair="pvt_v5.smSignUp.paraVarPair"
                            :para="pvt_v5.smSignUp.para"
                            :attr="pvt_v5.smSignUp.attr">
                    </sign-up>
                </div>
                <div>
                    <manage-members
                            ref="smManageMenbers"
                            refId="smManageMenbers"
                            v-show="pvt_isShow.v6 === 'smManageMenbers'"
                            :paraVarPair="pvt_v6.smManageMenbers.paraVarPair"
                            :para="pvt_v6.smManageMenbers.para"
                            :attr="pvt_v6.smManageMenbers.attr">
                    </manage-members>
                </div>
                <div>
                    <budget
                            ref="smBudget"
                            refId="smBudget"
                            v-show="pvt_isShow.v7 === 'smBudget'"
                            :paraVarPair="pvt_v7.smBudget.paraVarPair"
                            :para="pvt_v7.smBudget.para"
                            :attr="pvt_v7.smBudget.attr">
                    </budget>
                </div>
                <div>
                    <publish-set
                            ref="smPublishSet"
                            refId="smPublishSet"
                            v-show="pvt_isShow.v8 === 'smPublishSet'"
                            :paraVarPair="pvt_v8.smPublishSet.paraVarPair"
                            :para="pvt_v8.smPublishSet.para"
                            :attr="pvt_v8.smPublishSet.attr">
                    </publish-set>
                </div>
            </div>
            <div class="row publishBtn-dv">
                <div class="col">
                    <lm-button
                            ref="smButton1"
                            refId="smButton1"
                            v-show="pvt_isShow.v9 === 'smButton1'"
                            :paraVarPair="pvt_v9.smButton1.paraVarPair"
                            :para="pvt_v9.smButton1.para"
                            :attr="pvt_v9.smButton1.attr">
                    </lm-button>
                </div>
                <div class="col">
                    <lm-button
                            ref="smButton2"
                            refId="smButton2"
                            v-show="pvt_isShow.v10 === 'smButton2'"
                            :paraVarPair="pvt_v10.smButton2.paraVarPair"
                            :para="pvt_v10.smButton2.para"
                            :attr="pvt_v10.smButton2.attr">
                    </lm-button>
                </div>
                <div class="col">
                    <lm-button
                            ref="smButton3"
                            refId="smButton3"
                            v-show="pvt_isShow.v11 === 'smButton3'"
                            :paraVarPair="pvt_v11.smButton3.paraVarPair"
                            :para="pvt_v11.smButton3.para"
                            :attr="pvt_v11.smButton3.attr">
                    </lm-button>
                </div>
            </div>
        </div>
        <div>
            <activity-footer
                    ref="smFooter"
                    refId="smFooter"
                    v-show="pvt_isShow.v12 === 'smFooter'"
                    :paraVarPair="pvt_v12.smFooter.paraVarPair"
                    :para="pvt_v12.smFooter.para"
                    :attr="pvt_v12.smFooter.attr">
            </activity-footer>
        </div>
        <div class="dialog_mask">
            <div class="dialog_maskdv">
                <success-dialog
                        ref="smDialog"
                        refId="smDialog"
                        v-show="pvt_isShow.v13 === 'smDialog'"
                        :paraVarPair="pvt_v13.smDialog.paraVarPair"
                        :para="pvt_v13.smDialog.para"
                        :attr="pvt_v13.smDialog.attr">
                </success-dialog>
            </div>
        </div>
    </div>
</template>

<script>
    import libSys
        from '@/components/baseComponent/libSys.js';
    import libUpload
        from '@/components/baseComponent/libUpload.js';
    import activityHeader from './header';
    import activityFooter from './footer';
    import basicInfo from './basicInfo';
    import ticketType from './ticketType';
    import signUp from './signUp';
    import manageMembers from './manageMembers';
    import budget from './budget';
    import publishSet from './publishSet';
    import successDialog from './component/dialog';

    export default {
        name: 'pageGene',
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number', 'terActivityId'],

        components: {
            activityHeader,
            activityFooter,
            basicInfo,
            ticketType,
            signUp,
            manageMembers,
            budget,
            publishSet,
            successDialog
        },
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ["v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8", "v9", "v10", "v11", "v12", "v13"],
                    subModule: ["smHeader", "smTitle", "smBasicInfo", "smTicketType", "smSignUp", "smManageMenbers", "smBudget", "smPublishSet", "smButton1", "smButton2", "smButton3", "smFooter", "smDialog"]
                },
                pvt_isShow: {
                    "v1": null,
                    "v2": null,
                    "v3": null,
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
                },
                pvt_eventPortInput: ['getTerminalRecordEvent', 'activityIssueIn', 'activityDraftSaveIn', 'activityPreViewIn', 'activityDraftGetIn'],
                sys: {
                    api: null,
                },
                mac: mac.mac,
                debugFlag: true,
                activityID: '',
                dialogText: '活动表单已提交，请等待审核',
            }
        },
        computed: {
            pvt_v1: function () {
                return {
                    smHeader: {
                        paraVarPair: {},
                        para: {},
                        attr: {}
                    }
                }
            }, pvt_v2: function () {
                return {
                    smTitle: {
                        paraVarPair: {},
                        para: {
                            textData: ['创建活动'],
                        },
                        attr: {fontSize: '16px', height: '70px', color: 'rgba(48,49,51,1)'}
                    }
                }
            }, pvt_v3: function () {
                return {
                    smBasicInfo: {
                        paraVarPair: {},
                        para: {
                            activityID: this.activityID
                        },
                        attr: {}
                    }
                }
            }, pvt_v4: function () {
                return {
                    smTicketType: {
                        paraVarPair: {},
                        para: {
                            activityID: this.activityID
                        },
                        attr: {}
                    }
                }
            }, pvt_v5: function () {
                return {
                    smSignUp: {
                        paraVarPair: {},
                        para: {
                            activityID: this.activityID
                        },
                        attr: {}
                    }
                }
            }, pvt_v6: function () {
                return {
                    smManageMenbers: {
                        paraVarPair: {},
                        para: {
                            activityID: this.activityID
                        },
                        attr: {}
                    }
                }
            }, pvt_v7: function () {
                return {
                    smBudget: {
                        paraVarPair: {},
                        para: {
                            activityID: this.activityID
                        },
                        attr: {}
                    }
                }
            }, pvt_v8: function () {
                return {
                    smPublishSet: {
                        paraVarPair: {},
                        para: {
                            activityID: this.activityID
                        },
                        attr: {}
                    }
                }
            }, pvt_v9: function () {
                return {
                    smButton1: {
                        paraVarPair: {},
                        para: {
                            name: ['发布', '']
                        },
                        attr: {
                            type: 'primary', width: '224px', height: '40px'
                        }
                    }
                }
            }, pvt_v10: function () {
                return {
                    smButton2: {
                        paraVarPair: {},
                        para: {
                            name: ['预览', '']
                        },
                        attr: {
                            width: '224px', height: '40px'
                        }
                    }
                }
            }, pvt_v11: function () {
                return {
                    smButton3: {
                        paraVarPair: {},
                        para: {
                            name: ['保存草稿', '']
                        },
                        attr: {
                            width: '224px', height: '40px'
                        }
                    }
                }
            }, pvt_v12: function () {
                return {
                    smFooter: {
                        paraVarPair: {},
                        para: {},
                        attr: {}
                    }
                }
            }, pvt_v13: function () {
                return {
                    smDialog: {
                        paraVarPair: {},
                        para: {
                            dialogText: this.dialogText
                        },
                        attr: {}
                    }
                }
            },
        },

         watch: {
            para: {
                handler: function (nValue, oValue) {
                    let $this = this;
                    $this.sys.lib = Object.assign({}, libSys, libUpload);
                    Object.assign($this, $this.sys.lib);
                    $this.pvt_initSysData();
                    if (nValue !== null) {
                        $this.sys.api = $this.para.geneInstance.geneAPI;
                        $this.para.geneInstance.geneUser = $this;
                        $this.para.geneInstance.eventStart($this.para.event, $this.para.instruct, $this.para.command, $this.para.paraObject, function (result) {
                            // $this.startModule(function () {},function () {})
                        }, function (error) {
                            console.log(error);
                        });

                    }
                }
            }
        },

        provide: function () {
            return {
                sys: this.sys
            }
        },

        mounted: function () {
            this.pvt_initSysData();
            // MapLoader()
        },
        created: function () {
            Object.assign(this, libSys, libUpload);
        },
        methods: {
            startModule: function (successCallBack, errorCallBack) {
                let $this = this;
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                let para;
                let dbFlag;
                let fnname = 'activityCreate.startModule';
                let ref = {
                    sm1: 'smHeader',
                    sm2: 'smTitle',
                    sm3: 'smBasicInfo',
                    sm4: 'smTicketType',
                    sm5: 'smSignUp',
                    sm6: 'smManageMenbers',
                    sm7: 'smBudget',
                    sm8: 'smPublishSet',
                    sm9: 'smButton1',
                    sm10: 'smButton2',
                    sm11: 'smButton3',
                    sm12: 'smFooter',
                    sm13: 'smDialog'
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
                        case 'navigator':
                            if (navigator.onLine) {
                                para.nStep = 'getUserType'
                            } else {
                                $this.$message({
                                    type: 'error',
                                    message: '断网了，请稍后再试'
                                });
                                para.nStep = 'end'
                            }
                            dbFlag += 1;
                            break
                        case 'getUserType':
                            para.userType = $this.getCookie('userType');
                            if (para.userType === '用户') {
                                para.nStep = 'getUrlPara'
                            } else {
                                $this.$message({
                                    type: 'error',
                                    message: '请先登录'
                                });
                                para.nStep = 'end'
                            }
                            dbFlag += 1;
                            if (dbFlag === 2) {
                                $this.startModule(successCallBack, errorCallBack)
                            }
                            break
                        case 'getUrlPara':
                            para.urlActivityID = $this.getUrlPara()['id'];
                            para.userID = $this.getUserID()['id'];
                            para.authorName = $this.getUserID()['name'];
                            if (para.urlActivityID === '') {
                                var expression = $this.mac.fd.groupActivity.author + '=' + para.userID + '&&' + $this.mac.fd.groupActivity.status + '=' + $this.mac.enum.groupActivity.status.terminal;
                                $this.ep.getTerminalRecordEvent($this.mac.tb.groupActivity, expression, function (result) {
                                    if (result === null) {
                                        para.nStep = 'groupActivityNew'
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.startModule(successCallBack, errorCallBack)
                                        }
                                    } else {
                                        $this.sys.api.dataInput($this.mac.tb.groupActivity, [result[0]], '', function (result) {
                                            para.activityID = result[0];
                                            $this.activityID = para.activityID;
                                            para.nStep = 'talbleName'
                                            dbFlag += 1;
                                            if (dbFlag === 2) {
                                                $this.startModule(successCallBack, errorCallBack)
                                            }
                                        }, function (error) {
                                            console.error(error)
                                        })

                                    }
                                }, function (error) {
                                    console.error(error)
                                })
                            } else {
                                //        $this.ep.activityDraftGetIn(para.urlActivityID,function(result){
                                // $this.sys.api.dataInput($this.mac.tb.groupActivity, [result[0]], '', function (result) {
                                //     para.activityID = result[0];
                                //     $this.activityID = para.activityID;
                                //     para.nStep = 'talbleName'
                                //     dbFlag += 1;
                                //     if (dbFlag === 2) {
                                //         $this.startModule(successCallBack, errorCallBack)
                                //     }
                                // }, para.errorCallBack)
                                //        },function(){})
                                $this.sys.api.dataInput($this.mac.tb.groupActivity, [para.urlActivityID], '', function (result) {
                                    para.activityID = result[0];
                                    $this.activityID = para.activityID;
                                    para.nStep = 'talbleName'
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            }
                            break
                        case 'groupActivityNew':
                            objectName = $this.mac.tb.groupActivity;
                            parentRecord = null;
                            dbData = {};
                            dbData[$this.mac.fd.groupActivity.mode] = [$this.mac.enum.groupActivity.mode.onLine];
                            dbData[$this.mac.fd.groupActivity.showEnrollInfo] = [$this.mac.enum.groupActivity.showEnrollInfo.yes];
                            dbData[$this.mac.fd.groupActivity.author] = [para.userID];
                            dbData[$this.mac.fd.groupActivity.authorName] = [para.authorName];
                            dbData[$this.mac.fd.groupActivity.status] = [$this.mac.enum.groupActivity.status.terminal];
                            dbData[$this.mac.fd.groupActivity.praiseNumber] = [0];
                            dbData[$this.mac.fd.groupActivity.commentNumber] = [0];
                            dbData[$this.mac.fd.groupActivity.favoriteNumber] = [0];
                            dbData[$this.mac.fd.groupActivity.browerNumber] = [0];
                            dbData[$this.mac.fd.groupActivity.forwardNumber] = [0];
                            // dbData[$this.mac.fd.groupActivity.publicCustomer] = [[1]];
                            // dbData[$this.mac.fd.groupActivity.pubicDepartment] = [0];
                            // dbData[$this.mac.fd.groupActivity.pubicDepartment] = [[1,9]];
                            // dbData[$this.mac.fd.groupActivity.place] = [{
                            //     "id": [11, 125, 1244],
                            //     "name": ["浙江省", "湖州市", "安吉县"],
                            //     "place": "aaaa",
                            //     "lng": 119.66087,
                            //     "lat": 30.591252
                            // }];
                            $this.sys.api.recordNew(objectName, parentRecord, dbData,
                                function () {
                                    para.activityID = dbData[$this.mac.fd.id][0];
                                    $this.activityID = para.activityID;
                                    para.nStep = 'groupActivityTicketTypeNew'
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'groupActivityTicketTypeNew':
                            objectName = $this.mac.tb.groupActivityTicketType;
                            parentRecord = para.activityID;
                            dbData = {};
                            dbData[$this.mac.fd.groupActivityTicketType.name] = ['默认免费票'];
                            dbData[$this.mac.fd.groupActivityTicketType.price] = [0];
                            dbData[$this.mac.fd.groupActivityTicketType.approval] = [$this.mac.enum.groupActivityTicketType.approval.yes];
                            dbData[$this.mac.fd.groupActivityTicketType.minNumber] = [1];
                            dbData[$this.mac.fd.groupActivityTicketType.maxNumber] = [20];
                            dbData[$this.mac.fd.groupActivityTicketType.refundEndTime] = [1];
                            dbData[$this.mac.fd.groupActivityTicketType.number] = [0];
                            $this.sys.api.recordNew(objectName, parentRecord, dbData,
                                function () {
                                    para.nStep = 'groupActivityEnrollFormNew'
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'groupActivityEnrollFormNew':
                            objectName = $this.mac.tb.groupActivityEnrollForm;
                            parentRecord = para.activityID;
                            dbData = {};
                            dbData[$this.mac.fd.groupActivityEnrollForm.name] = ['姓名', '手机'];
                            dbData[$this.mac.fd.groupActivityEnrollForm.baseComponent] = [{
                                "componentName": "lm-input-text",
                                "type": 0,
                                "dataArr": [], "tableName": []
                            }, {
                                "componentName": "lm-input-phone",
                                "type": 0,
                                "dataArr": [], "tableName": []
                            }];
                            dbData[$this.mac.fd.groupActivityEnrollForm.attribute] = [$this.mac.enum.groupActivityEnrollForm.attribute.need, $this.mac.enum.groupActivityEnrollForm.attribute.need];
                            $this.sys.api.recordNew(objectName, parentRecord, dbData,
                                function () {
                                    para.nStep = 'activityBudgetFormNew'
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        // case 'activityManageMemberNew':
                        //     objectName = $this.mac.tb.groupActivityManageMember;
                        //     parentRecord = para.activityID;
                        //     dbData = {};
                        //     dbData[$this.mac.fd.groupActivityManageMember.member] = [[], [], [], []]
                        //     dbData[$this.mac.fd.groupActivityManageMember.function] = [$this.mac.enum.groupActivityManageMember.function.host, $this.mac.enum.groupActivityManageMember.function.lecture, $this.mac.enum.groupActivityManageMember.function.assistant, $this.mac.enum.groupActivityManageMember.function.service];
                        //     $this.sys.api.recordNew(objectName, parentRecord, dbData,
                        //         function () {
                        //             para.nStep = 'activityBudgetFormNew'
                        //             dbFlag += 1;
                        //             if (dbFlag === 2) {
                        //                 $this.startModule(successCallBack, errorCallBack)
                        //             }
                        //         }, para.errorCallBack)
                        //     break;
                        case 'activityBudgetFormNew':
                            objectName = $this.mac.tb.groupActivityBudgetForm;
                            parentRecord = para.activityID;
                            dbData = {};
                            dbData[$this.mac.fd.groupActivityBudgetForm.name] = ['办公费', '印刷费', '交通费'];
                            dbData[$this.mac.fd.groupActivityBudgetForm.budgetAmount] = [0, 0, 0];
                            dbData[$this.mac.fd.groupActivityBudgetForm.unit] = ['元', '元', '元'];
                            $this.sys.api.recordNew(objectName, parentRecord, dbData,
                                function () {
                                    para.nStep = 'groupNew'
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'talbleName':
                            var objTable = {
                                'table _department': { //表：grade
                                    name: 'string',
                                    comment: 'string',
                                    superior: 'table _department',
                                    attrib: 'number',
                                    status: 'number',
                                    origin_id: 'number',
                                }
                            }
                            $this.sys.api.newTable(objTable, function (result) {
                                para.nStep = 'groupNew';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.log('error:' + JSON.stringify(error));
                            });
                            break
                        case 'groupNew':
                            objectName = $this.mac.tb.group;
                            parentRecord = null;
                            dbData = {};
                            dbData[$this.mac.fd.group.groupName] = ['智慧朗', '瓴码'];
                            $this.sys.api.recordNew(objectName, parentRecord, dbData,
                                function () {
                                    para.groupID = dbData[$this.mac.fd.id];
                                    para.nStep = 'departmentNew'
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'departmentNew':
                            objectName = $this.mac.tb.department;
                            parentRecord = para.groupID[0];
                            dbData = {};
                            dbData[$this.mac.fd.department.name] = ['根部门', '开发部', '开发组1', '开发组2', '开发组3', '开发小组1', '开发小组2', '开发小组3', '运营部', '财务部', '运营小部1', '运营小部2', '财务小部1', '运营小组1'];
                            dbData[$this.mac.fd.department.superior] = [null, 1, 2, 2, 2, 3, 3, 4, 1, 1, 9, 9, 10, 11];
                            dbData[$this.mac.fd.department.attrib] = ['0', '0', '0', '0', '0', '1', '1', '1', '0', '0', '0', '0', '0', '1'];
                            $this.sys.api.recordNew(objectName, parentRecord, dbData,
                                function () {
                                    para.departmentID = dbData[$this.mac.fd.id];
                                    para.nStep = 'clerkNew1'
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'departmentNew1':
                            objectName = $this.mac.tb.department;
                            parentRecord = para.groupID[1];
                            dbData = {};
                            dbData[$this.mac.fd.department.name] = ['运营部', '运营组1'];
                            dbData[$this.mac.fd.department.superior] = [1, 9];
                            $this.sys.api.recordNew(objectName, parentRecord, dbData,
                                function () {
                                    para.departmentID1 = dbData[$this.mac.fd.id];
                                    para.nStep = 'clerkNew1'
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'clerkNew1':
                            objectName = $this.mac.tb.clerkSet;
                            parentRecord = para.departmentID[5];
                            dbData = {};
                            dbData[$this.mac.fd.clerkSet.clerkID] = [1, 2, 3, 4];
                            dbData[$this.mac.fd.clerkSet.clerkName] = ['人员1', '人员2', '人员3', '人员4'];
                            $this.sys.api.recordNew(objectName, parentRecord, dbData,
                                function () {
                                    para.nStep = 'clerkNew2'
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'clerkNew2':
                            objectName = $this.mac.tb.clerkSet;
                            parentRecord = para.departmentID[6];
                            dbData = {};
                            dbData[$this.mac.fd.clerkSet.clerkID] = [5, 6, 7, 8];
                            dbData[$this.mac.fd.clerkSet.clerkName] = ['人员5', '人员6', '人员7', '人员8'];
                            $this.sys.api.recordNew(objectName, parentRecord, dbData,
                                function () {
                                    para.nStep = 'clerkNew3'
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'clerkNew3':
                            objectName = $this.mac.tb.clerkSet;
                            parentRecord = para.departmentID[6];
                            dbData = {};
                            dbData[$this.mac.fd.clerkSet.clerkID] = [9, 10, 11, 12];
                            dbData[$this.mac.fd.clerkSet.clerkName] = ['人员9', '人员10', '人员11', '人员12'];
                            $this.sys.api.recordNew(objectName, parentRecord, dbData,
                                function () {
                                    para.nStep = 'clerkNew4'
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'clerkNew4':
                            objectName = $this.mac.tb.clerkSet;
                            parentRecord = para.departmentID[7];
                            dbData = {};
                            dbData[$this.mac.fd.clerkSet.clerkID] = [13, 14, 15, 16];
                            dbData[$this.mac.fd.clerkSet.clerkName] = ['人员13', '人员14', '人员15', '人员16'];
                            $this.sys.api.recordNew(objectName, parentRecord, dbData,
                                function () {
                                    para.nStep = 'clerkNew5'
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'clerkNew5':
                            objectName = $this.mac.tb.clerkSet;
                            parentRecord = para.departmentID[13];
                            dbData = {};
                            dbData[$this.mac.fd.clerkSet.clerkID] = [17, 18, 19, 20];
                            dbData[$this.mac.fd.clerkSet.clerkName] = ['人员17', '人员18', '人员19', '人员20'];
                            $this.sys.api.recordNew(objectName, parentRecord, dbData,
                                function () {
                                    para.nStep = 'activityBudgetOptionNew'
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'activityBudgetOptionNew':
                            objectName = $this.mac.tb.activityOption;
                            parentRecord = null;
                            dbData = {};
                            dbData[$this.mac.fd.activityOption.label] = [{
                                '行业': ['IT互联网', '创业', '科技', '金融', '游戏', '文娱', '电商', '教育', '营销', '设计', '地产', '医疗', '服务业', '区域链'],
                                '生活': ['演出', '文艺', '手工', '公益', '户外出游', '运动健康', '聚会交友', '休闲娱乐', '投资理财', '时尚', '心里', '体育赛事'],
                                '亲子': ['儿童才艺', '益智潮玩', '儿童剧/展览', '亲子旅游', '早教/升学'],
                                '学习': ['课程', '读书', '职场', '社团', '讲座']
                            }]
                            dbData[$this.mac.fd.activityOption.customerLevel] = [[{value: 1, label: '金牌客户'}, {
                                value: 2,
                                label: '银牌客户'
                            }, {value: 3, label: '铜牌客户'}, {value: 4, label: '普通客户'}]]
                            dbData[$this.mac.fd.activityOption.budget] = [[['办公费', ''], ['印刷费', ''], ['交通费', ''], ['租赁费', ''], ['通讯费', ''], ['住宿费', ''], ['餐饮费', ''], ['培训费', ''], ['劳务费', ''], ['布置费', ''], ['保险费', ''], ['服装', ''], ['礼品', ''], ['奖状', ''], ['其他', '']]];
                            $this.sys.api.recordNew(objectName, parentRecord, dbData,
                                function () {
                                    para.activityOptionID = dbData[$this.mac.fd.id][0];
                                    para.nStep = 'activityEnrollOptionNew'
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'activityEnrollOptionNew':
                            objectName = $this.mac.tb.activityEnrollOption;
                            parentRecord = para.activityOptionID;
                            dbData = {};
                            dbData[$this.mac.fd.activityEnrollOption.type] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1];
                            dbData[$this.mac.fd.activityEnrollOption.baseComponent] = [{name: 'lm-input-text'}, {name: 'lm-input-phone'}, {name: 'lm-input-text'}, {name: 'lm-input-text'}, {name: 'lm-input-email'}, {name: 'lm-input-text'}, {name: 'lm-input-text'}, {name: 'lm-input-text'}, {name: 'lm-input-text'}, {
                                name: 'lm-radio',
                                dataArr: [{label: 1, text: '男'}, {lable: 2, text: '女'}]
                            }, {name: 'lm-input-text'}, {name: 'lm-input-text'},
                                {name: 'lm-input-text'}, {name: 'lm-input-text'}, {name: 'lm-input-idcard'}, {name: 'lm-cascader'}, {name: 'lm-input-text'}, {name: 'lm-input-phone'}, {name: 'lm-input-bank'}, {name: 'lm-input-text'},
                                {name: 'lm-input-text'}, {name: 'lm-input-text'}, {name: 'lm-cascader'}, {name: 'lm-input-text'},
                                {
                                    name: 'lm-select',
                                    dataArr: [
                                        {value:1,label:'汉族',disabled:false,icon:'',image:''},
                                        {value:2,label:'壮族',disabled:false,icon:'',image:''},
                                        {value:3,label:'回族',disabled:false,icon:'',image:''},
                                        {value:4,label:'苗族',disabled:false,icon:'',image:''},
                                        {value:5,label:'维吾尔族',disabled:false,icon:'',image:''},
                                        {value:6,label:'土家族',disabled:false,icon:'',image:''},
                                        {value:7,label:'彝族',disabled:false,icon:'',image:''},
                                    ]
                                },
                                {name: 'lm-input-text'}, {name: 'lm-input-text'},
                                {name: 'lm-input-text'}, {
                                    name: 'lm-radio',
                                    dataArr: [{label: 1, text: ''}, {label: 2, text: ''}]
                                }, {
                                    name: 'lm-checkbox',
                                    dataArr: [{label: 1, text: ''}, {label: 2, text: ''}]
                                }, {name: 'lm-input-number'}, {
                                    name: 'lm-file-upload',
                                    // dataArr: [{label: '最大张数', text: ''}, {label: '图片大小', text: ''}]
                                }, {
                                    name: 'lm-picture-upload',
                                    // dataArr: [{label: '最大个数', text: ''}, {label: '文件大小', text: ''}]
                                }];
                            dbData[$this.mac.fd.activityEnrollOption.name] = [['姓名', ''], ['手机', ''], ['微信', ''], ['QQ', ''], ['邮箱', ''], ['公司', ''], ['部门', ''], ['职位', ''], ['行业', ''], ['性别', ''], ['年龄', ''], ['出生年月', ''],
                                ['毕业院校', ''], ['所在城市', ''], ['身份证号', ''], ['通讯地址', ''], ['紧急联系人', ''], ['紧急联系人电话', ''], ['银行卡号', ''], ['自我介绍', ''],
                                ['月收入', ''], ['国籍', ''], ['户籍地', ''], ['籍贯', ''], ['民族', ''], ['政治面貌', ''], ['单行文本', 'el-icon-document'], ['多行文本', 'el-icon-tickets'], ['单选框', 'el-icon-more'], ['复选框', 'el-icon-more-outline'], ['数字输入框', 'el-icon-sort-up'], ['文件上传', 'el-icon-upload'], ['图片上传', 'el-icon-upload']];
                            $this.sys.api.recordNew(objectName, parentRecord, dbData,
                                function () {
                                    $this.forceUpdateData(function () {
                                        para.nStep = 'startModule1'
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.startModule(successCallBack, errorCallBack)
                                        }
                                    })
                                }, function (error) {
                                    console.error(error)
                                })
                            break;
                        case 'startModule1':
                            $this.sm[ref.sm1].startModule(function () {

                            }, para.errorCallBack);
                            para.nStep = 'startModule2';
                            dbFlag += 1;
                            if (dbFlag === 2) {
                                $this.startModule(successCallBack, errorCallBack)
                            }
                            break;
                        case 'startModule2':
                            $this.sm[ref.sm2].startModule(function () {

                            }, para.errorCallBack);
                            para.nStep = 'startModule3';
                            dbFlag += 1;
                            if (dbFlag === 2) {
                                $this.startModule(successCallBack, errorCallBack)
                            }
                            break;
                        case 'startModule3':
                            $this.sm[ref.sm3].startModule(function () {

                            }, para.errorCallBack);
                            para.nStep = 'startModule4';
                            dbFlag += 1;
                            if (dbFlag === 2) {
                                $this.startModule(successCallBack, errorCallBack)
                            }
                            break;
                        case 'startModule4':
                            $this.sm[ref.sm4].startModule(function () {

                            }, para.errorCallBack);
                            para.nStep = 'startModule5';
                            dbFlag += 1;
                            if (dbFlag === 2) {
                                $this.startModule(successCallBack, errorCallBack)
                            }
                            break;
                        case 'startModule5':
                            $this.sm[ref.sm5].startModule(function () {

                            }, para.errorCallBack);
                            para.nStep = 'startModule6';
                            dbFlag += 1;
                            if (dbFlag === 2) {
                                $this.startModule(successCallBack, errorCallBack)
                            }
                            break;
                        case 'startModule6':
                            $this.sm[ref.sm6].startModule(function () {

                            }, para.errorCallBack);
                            para.nStep = 'startModule7';
                            dbFlag += 1;
                            if (dbFlag === 2) {
                                $this.startModule(successCallBack, errorCallBack)
                            }
                            break;
                        case 'startModule7':
                            $this.sm[ref.sm7].startModule(function () {

                            }, para.errorCallBack);
                            para.nStep = 'startModule8';
                            dbFlag += 1;
                            if (dbFlag === 2) {
                                $this.startModule(successCallBack, errorCallBack)
                            }
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
                                para.nStep = 'showModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showModules':
                            //显示子组件
                            let refId = ['smHeader', 'smTitle', 'smBasicInfo', 'smTicketType', 'smSignUp', 'smManageMenbers', 'smBudget', 'smPublishSet', 'smButton1', 'smButton2', 'smButton3', 'smFooter', 'smDialog'];
                            $this.showSubModule(refId, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'end':
                            $('.bg-F4F4F4').css({'background': '#F4F4F4'})
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
            publish: function (successCallBack, errorCallBack) {
                let $this = this;
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                let para;
                let dbFlag;
                let fnname = 'activityCreate.publish';
                let ref = {
                    sm1: 'smBasicInfo',
                    sm2: 'smTicketType',
                    sm3: 'smSignUp',
                    sm4: 'smManageMenbers',
                    sm5: 'smBudget',
                    sm6: 'smPublishSet',
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
                            para.nStep = 'checkBasicInfo';
                            dbFlag += 1;
                            break;
                        case 'checkBasicInfo':
                            $this.sm[ref.sm1].wrongInfoShow(function () {
                                para.nStep = 'checkTicketType';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.publish(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'checkTicketType':
                            $this.sm[ref.sm2].wrongInfoShow(function () {
                                para.nStep = 'checkSignUp';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.publish(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'checkSignUp':
                            $this.sm[ref.sm3].wrongInfoShow(function () {
                                para.nStep = 'checkManageMenbers';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.publish(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'checkManageMenbers':
                            $this.sm[ref.sm4].wrongInfoShow(function () {
                                para.nStep = 'checkPublishSet';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.publish(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'checkPublishSet':
                            $this.sm[ref.sm6].wrongInfoShow(function () {
                                // para.nStep = 'groupActivityModify';
                                para.nStep = 'refundTimeCount';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.publish(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'refundTimeCount':
                            objectName = $this.mac.tb.groupActivityTicketType;
                            parentRecord = [$this.activityID];
                            condition = null;
                            dbData = {};
                            dbData[$this.mac.fd.id] = []
                            dbData[$this.mac.fd.groupActivityTicketType.refundEndTime] = [];
                            dbData[$this.mac.fd.groupActivityTicketType.startTime] = [];
                            $this.sys.api.recordQuery(objectName, parentRecord, condition, dbData,
                                function () {
                                    para.ticketTypeID = dbData[$this.mac.fd.id];
                                    para.refundEndTime = dbData[$this.mac.fd.groupActivityTicketType.refundEndTime];
                                    para.startTime = dbData[$this.mac.fd.groupActivityTicketType.startTime];
                                    for (var i = 0; i < para.refundEndTime.length; i++) {
                                        para.refundEndTime[i] = $this.getPipTime(new Date(para.startTime[i]) - 24 * 3600 * 1000 * Number(para.refundEndTime[i]));
                                    }
                                    para.nStep = 'refundTimeModify';
                                    if (++dbFlag === 2) {
                                        $this.publish(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break
                        case 'refundTimeModify':
                            objectName = $this.mac.tb.groupActivityTicketType;
                            dbData = {};
                            dbData[$this.mac.fd.id] = para.ticketTypeID;
                            dbData[$this.mac.fd.groupActivityTicketType.refundEndTime] = para.refundEndTime;
                            $this.sys.api.recordModify(objectName, dbData, function () {
                                para.nStep = 'groupActivityModify';
                                if (++dbFlag === 2) {
                                    $this.publish(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack)
                            break
                        case 'groupActivityModify':
                            objectName = $this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.activityID]
                            dbData[$this.mac.fd.groupActivity.createTime] = [$this.getCurrentTime()];
                            dbData[$this.mac.fd.groupActivity.status] = [$this.mac.enum.groupActivity.status.approval];
                            para.tempArr = [];
                            for (var i = 0; i < para.ticketTypeID.length; i++) {
                                para.tempArr.push(0);
                            }
                            dbData[$this.mac.fd.groupActivity.enrollNumber] = [para.tempArr];
                            $this.sys.api.recordModify(objectName, dbData, function () {
                                para.nStep = 'dataOutput';
                                if (++dbFlag === 2) {
                                    $this.publish(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack)
                            break
                        case 'dataOutput':
                            $this.sys.api.dataOutput($this.mac.tb.groupActivity, [$this.activityID], '',
                                function (result) {
                                    //        $this.ep.getResourceIdEvent(result[0],function(result){
                                    //             $this.ep.activityIssueIn(result[0])
                                    //        },function(){})
                                    $this.$message({
                                        type: 'success',
                                        message: '活动表单已提交完成，请等待审核'
                                    });
                                    $this.dialogText = '活动表单已提交，请等待审核';
                                    $this.forceUpdateData(function () {
                                        para.nStep = 'startModule';
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.publish(successCallBack, errorCallBack)
                                        }
                                    })
                                }, function (error) {
                                    console.error(error)
                                })
                            break
                        case 'startModule':
                            $this.sm['smDialog'].startModule(function () {
                                $('.dialog_mask').css('display', 'block');
                                para.nStep = 'end';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.publish(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break
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
            save: function (successCallBack, errorCallBack) {
                let $this = this;
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                let para;
                let dbFlag;
                let fnname = 'activityCreate.save';

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
                        case 'checkBasicInfo':
                            $this.sm['smBasicInfo'].checkTitle(function (result) {
                                if (result === 1) {
                                    para.nStep = 'groupActivityTicketType';
                                } else {
                                    para.nStep = 'default';
                                }
                                if (++dbFlag === 2) {
                                    $this.save(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'groupActivityTicketType':
                            objectName = $this.mac.tb.groupActivityTicketType;
                            parentRecord = [$this.activityID];
                            condition = null;
                            dbData = {};
                            dbData[$this.mac.fd.id] = []
                            $this.sys.api.recordQuery(objectName, parentRecord, condition, dbData,
                                function () {
                                    para.ticketTypeID = dbData[$this.mac.fd.id];
                                    para.nStep = 'groupActivityModify';
                                    if (++dbFlag === 2) {
                                        $this.save(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break
                        case 'groupActivityModify':
                            objectName = $this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.activityID]
                            dbData[$this.mac.fd.groupActivity.createTime] = [$this.getCurrentTime()];
                            dbData[$this.mac.fd.groupActivity.status] = [$this.mac.enum.groupActivity.status.draft];
                            para.tempArr = [];
                            for (var i = 0; i < para.ticketTypeID.length; i++) {
                                para.tempArr.push(0);
                            }
                            dbData[$this.mac.fd.groupActivity.enrollNumber] = [para.tempArr];
                            $this.sys.api.recordModify(objectName, dbData, function () {
                                para.nStep = 'dataOutput';
                                if (++dbFlag === 2) {
                                    $this.save(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack)
                            break
                        case 'dataOutput':
                            $this.sys.api.dataOutput($this.mac.tb.groupActivity, [$this.activityID], '',
                                function (result) {
                                    //        $this.ep.getResourceIdEvent(result[0],function(result){
                                    //             $this.ep.activityDraftSaveIn(result[0])
                                    //        },function(){})
                                    $this.$message({
                                        type: 'success',
                                        message: '保存成功'
                                    });
                                    $this.dialogText = '活动保存成功';
                                    $this.forceUpdateData(function () {
                                        para.nStep = 'startModule';
                                        if (++dbFlag === 2) {
                                            $this.save(successCallBack, errorCallBack)
                                        }
                                    })
                                }, function (error) {
                                    console.error(error)
                                })
                            break
                        case 'startModule':
                            $this.sm['smDialog'].startModule(function () {
                                $('.dialog_mask').css('display', 'block');
                                para.nStep = 'end';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.publish(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break
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
            preview: function (successCallBack, errorCallBack) {
                let $this = this;
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                let para;
                let dbFlag;
                let fnname = 'activityCreate.preview';
                let ref = {
                    sm1: 'smBasicInfo',
                    sm2: 'smTicketType',
                    sm3: 'smSignUp',
                    sm4: 'smManageMenbers',
                    sm5: 'smBudget',
                    sm6: 'smPublishSet',
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
                            para.nStep = 'checkBasicInfo';
                            dbFlag += 1;
                            break;
                        case 'checkBasicInfo':
                            $this.sm[ref.sm1].wrongInfoShow(function () {
                                para.nStep = 'checkTicketType';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.preview(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'checkTicketType':
                            $this.sm[ref.sm2].wrongInfoShow(function () {
                                para.nStep = 'checkSignUp';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.preview(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'checkSignUp':
                            $this.sm[ref.sm3].wrongInfoShow(function () {
                                para.nStep = 'checkManageMenbers';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.preview(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'checkManageMenbers':
                            $this.sm[ref.sm4].wrongInfoShow(function () {
                                para.nStep = 'checkPublishSet';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.preview(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'checkPublishSet':
                            $this.sm[ref.sm6].wrongInfoShow(function () {
                                para.nStep = 'refundTimeCount';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.preview(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'refundTimeCount':
                            objectName = $this.mac.tb.groupActivityTicketType;
                            parentRecord = [$this.activityID];
                            condition = null;
                            dbData = {};
                            dbData[$this.mac.fd.id] = []
                            $this.sys.api.recordQuery(objectName, parentRecord, condition, dbData,
                                function () {
                                    para.ticketTypeID = dbData[$this.mac.fd.id];
                                    para.nStep = 'groupActivityModify';
                                    if (++dbFlag === 2) {
                                        $this.preview(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break
                        case 'groupActivityModify':
                            objectName = $this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.activityID]
                            para.tempArr = [];
                            for (var i = 0; i < para.ticketTypeID.length; i++) {
                                para.tempArr.push(0);
                            }
                            dbData[$this.mac.fd.groupActivity.enrollNumber] = [para.tempArr];
                            $this.sys.api.recordModify(objectName, dbData, function () {
                                para.nStep = 'dataOutput';
                                if (++dbFlag === 2) {
                                    $this.preview(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack)
                            break
                        case 'dataOutput':
                            $this.sys.api.dataOutput($this.mac.tb.groupActivity, [$this.activityID], '',
                                function (result) {
                                    para.terActivityID = result[0];
                                    para.nStep = 'end';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.preview(successCallBack, errorCallBack)
                                    }
                                }, function (error) {
                                    console.error(error)
                                })
                            break
                        case 'end':
                            $this.ep.activityPreViewIn(para.terActivityID)
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

            getCurrentTime: function () {
                let newTime = new Date();
                let hour, minute, second, year, month, date;
                hour = newTime.getHours() < 10 ? ("0" + newTime.getHours()) : newTime.getHours();
                minute = newTime.getMinutes() < 10 ? ("0" + newTime.getMinutes()) : newTime.getMinutes();
                second = newTime.getSeconds() < 10 ? ("0" + newTime.getSeconds()) : newTime.getSeconds();
                year = newTime.getFullYear();
                month = newTime.getMonth() + 1 < 10 ? ("0" + (newTime.getMonth() + 1)) : newTime.getMonth() + 1;
                date = newTime.getDate() < 10 ? ("0" + newTime.getDate()) : newTime.getDate();
                return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second;
            },
            getPipTime: function (seconds) {
                seconds = new Date(seconds);
                let hour, minute, second, year, month, date;
                hour = seconds.getHours() < 10 ? ("0" + seconds.getHours()) : seconds.getHours();
                minute = seconds.getMinutes() < 10 ? ("0" + seconds.getMinutes()) : seconds.getMinutes();
                second = seconds.getSeconds() < 10 ? ("0" + seconds.getSeconds()) : seconds.getSeconds();
                year = seconds.getFullYear();
                month = seconds.getMonth() + 1 < 10 ? ("0" + (seconds.getMonth() + 1)) : seconds.getMonth() + 1;
                date = seconds.getDate() < 10 ? ("0" + seconds.getDate()) : seconds.getDate();
                return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second;
            },
            getUserID: function () {
                return {id: 1, name: '张三'}
            },
            getCookie: function (userType) {
                return '用户'
            },
            getUrlPara: function () {
                return {id: this.terActivityId}
            },
            smButton1_buttonClickEvent: function () {
                this.publish(function () {
                }, function () {
                })
            },
            smButton2_buttonClickEvent: function () {
                this.preview(function () {
                }, function () {
                })
            },
            smButton3_buttonClickEvent: function () {
                this.save(function () {
                }, function () {
                })
            },
            smDialog_listPageIn: function () {
                $('.dialog_mask').css('display', 'none');
            },
            smDialog_detailPageIn: function () {
                $('.dialog_mask').css('display', 'none');
            },
        }
    }
</script>

<style lang="scss" scoped>
    .content {
        padding: 0 14%;
    }

    @media screen and (max-width: 1200px) {
        .content {
            padding: 0 20px;
        }
    }

    @media screen and (max-width: 1300px) and (min-width: 1200px) {
        .content {
            padding: 0 50px;
        }
    }

    @media screen and (max-width: 1400px) and (min-width: 1300px) {
        .content {
            padding: 0 76px;
        }
    }

    @media screen and (max-width: 1500px) and (min-width: 1400px) {
        .content {
            padding: 0 110px;
        }
    }

    @media screen and (max-width: 1600px) and (min-width: 1500px) {
        .content {
            padding: 0 140px;
        }
    }

    .bg-F4F4F4 {
        margin-top: 78px;
        padding: 15px 0 90px 0;
    }

    .title {
        height: 70px;
        line-height: 70px;
        background: #ffffff;
        padding: 0 20px;
        margin-top: 15px;
        box-shadow: 0px 0px 8px 0px rgba(48, 49, 51, 0.1);
        border-radius: 4px;
        font-family: Source Han Sans CN;
        font-weight: 400;
        color: rgba(48, 49, 51, 1);
    }

    .publishBtn-dv {
        text-align: center;
        margin-top: 50px;

        div {
            margin-right: 10px;
        }
    }


    .dialog_mask {
        z-index: 9999;
        position: fixed;
        width: 100%;
        top: 0;
        left: 0;
        height: 100%;
        display: none;
        background: rgba(0, 0, 0, 0.5);
    }

    .dialog_maskdv {
        margin: auto;
        width: 800px;
        padding: 100px 0;
        opacity:1;
        border-radius: 3px;
        background: rgba(255, 255, 255, 1);
        box-shadow: 0px 0px 8px 0px #8c939d;
        margin-top: 150px;
    }


</style>
