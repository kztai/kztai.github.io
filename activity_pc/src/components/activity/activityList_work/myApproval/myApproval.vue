<template>
    <div class="my-approval">
        <div class="row collect-title">
            <lm-link-text
                    ref="smText1"
                    refId="smText1"
                    v-show="pvt_isShow.v1 === 'smText1'"
                    :paraVarPair="pvt_v1.smText1.paraVarPair"
                    :para="pvt_v1.smText1.para"
                    :attr="pvt_v1.smText1.attr">
            </lm-link-text>
        </div>
        <div class="approval-wrap">
            <div class="row flex">
                <div class="col approval-tabs">
                    <div class="row approval-tabs-dv">
                        <lm-tabs
                                ref="smTabs"
                                refId="smTabs"
                                v-show="pvt_isShow.v2 === 'smTabs'"
                                :paraVarPair="pvt_v2.smTabs.paraVarPair"
                                :para="pvt_v2.smTabs.para"
                                :attr="pvt_v2.smTabs.attr">
                        </lm-tabs>
                    </div>
                </div>
                <div class="col approval-search">
                    <div class="row">
                        <div class="col">
                            <lm-input-text
                                    ref="smInput1"
                                    refId="smInput1"
                                    v-show="pvt_isShow.v3 === 'smInput1'"
                                    :paraVarPair="pvt_v3.smInput1.paraVarPair"
                                    :para="pvt_v3.smInput1.para"
                                    :attr="pvt_v3.smInput1.attr">
                            </lm-input-text>
                        </div>
                        <div class="col">
                            <lm-button
                                    ref="smButton1"
                                    refId="smButton1"
                                    v-show="pvt_isShow.v4 === 'smButton1'"
                                    :paraVarPair="pvt_v4.smButton1.paraVarPair"
                                    :para="pvt_v4.smButton1.para"
                                    :attr="pvt_v4.smButton1.attr">
                            </lm-button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="approvalCom-height">
                <div class="row approvalCom">
                    <approvalCom
                            ref="smApprovalCom"
                            refId="smApprovalCom"
                            v-show="pvt_isShow.v5 === 'smApprovalCom'"
                            v-for="(item, index) in pvt_v5.smApprovalCom.forData"
                            :number="index"
                            :paraVarPair="pvt_v5.smApprovalCom.paraVarPair"
                            :para="item.para"
                            :attr="item.attr">
                    </approvalCom>
                </div>
            </div>
        </div>

        <div class="row myApproval-pagination">
            <lm-pagination
                    ref="smPagination"
                    refId="smPagination"
                    v-show="pvt_isShow.v6 === 'smPagination'"
                    :paraVarPair="pvt_v6.smPagination.paraVarPair"
                    :para="pvt_v6.smPagination.para"
                    :attr="pvt_v6.smPagination.attr">
            </lm-pagination>
        </div>
        <div class="myApproval-empty">
            <lm-link-text
                    ref="smText2"
                    refId="smText2"
                    v-show="pvt_isShow.v7 === 'smText2'"
                    :paraVarPair="pvt_v7.smText2.paraVarPair"
                    :para="pvt_v7.smText2.para"
                    :attr="pvt_v7.smText2.attr">
            </lm-link-text>
        </div>
        <div>
            <budgetDialog
                    ref="smBudgetDialog"
                    refId="smBudgetDialog"
                    v-show="pvt_isShow.v8 === 'smBudgetDialog'"
                    :paraVarPair="pvt_v8.smBudgetDialog.paraVarPair"
                    :para="pvt_v8.smBudgetDialog.para"
                    :attr="pvt_v8.smBudgetDialog.attr">
            </budgetDialog>
        </div>
        <div>
            <rejectDialog
                    ref="smRejectDialog"
                    refId="smRejectDialog"
                    v-show="pvt_isShow.v9 === 'smRejectDialog'"
                    :paraVarPair="pvt_v9.smRejectDialog.paraVarPair"
                    :para="pvt_v9.smRejectDialog.para"
                    :attr="pvt_v9.smRejectDialog.attr">
            </rejectDialog>
        </div>
    </div>
</template>
<script>
    import libSys
        from '@/components/baseComponent/libSys.js';
    import libUpload
        from '@/components/baseComponent/libUpload.js';
    import approvalCom from './component/approvalCom';
    import budgetDialog from './budgetDialog';
    import rejectDialog from './rejectDialog';

    export default {
        components: {approvalCom, budgetDialog,rejectDialog},
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ['sys'],
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ["v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8", "v9"],
                    subModule: ["smText1", "smTabs", "smInput1", "smButton1", "smApprovalCom", "smPagination", "smText2", "smBudgetDialog", "smRejectDialog"]
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
                },

                pvt_eventPortInput: ['activityApprovalEvent', 'detailPageEvent','getActivityNumberEvent'],
                mac: mac.mac,
                pageIndex: 1,
                pageTotal: 50,
                loadTotal: 10,
                loadStart: 0,
                debugFlag: true,
                activityIDArr: [],
                emptyText: '当前还没有活动',
                labelIndex: 0,
                searchValue: '',
                tabData: [{val: "全部", icon: "", disable: ""}, {val: "待审批", icon: "", disable: ""}, {
                    val: "已审批",
                    icon: "",
                    disable: ""
                }],
                checkActivityID:''
            }
        },
        computed: {
            pvt_v1: function () {
                return {
                    smText1: {
                        paraVarPair: {},
                        para: {
                            textData: '我的审批'
                        },
                        attr: {
                            fontSize: '20px', color: '#303133'
                        }
                    }
                }
            }, pvt_v2: function () {
                return {
                    smTabs: {
                        paraVarPair: {},
                        para: {
                            tabData: this.tabData
                        },
                        attr: {
                            checked: 0, stretch: true
                        }
                    }
                }
            }, pvt_v3: function () {
                return {
                    smInput1: {
                        paraVarPair: {},
                        para: {
                            text: this.searchValue
                        },
                        attr: {
                            placeholder: '请输入关键词进行搜索'
                        }
                    }
                }
            }, pvt_v4: function () {
                return {
                    smButton1: {
                        paraVarPair: {},
                        para: {
                            name: ['', 'el-icon-search'],
                        },
                        attr: {
                            height: '40px', width: '40px'
                        }
                    }
                }
            }, pvt_v5: function () {
                let loopModule = {
                    smApprovalCom: {
                        para: {
                            activityID: this.activityIDArr,
                        },
                        attr: {},
                    },
                };
                let forData = this.pvt_createForData(loopModule);
                return {
                    smApprovalCom: {
                        paraVarPair: {},
                        forData: forData.smApprovalCom,
                    },
                }
            }, pvt_v6: function () {
                return {
                    smPagination: {
                        paraVarPair: {},
                        para: {
                            currentPage: this.pageIndex
                        },
                        attr: {
                            total: this.pageTotal, pageSize: 10, background: true
                        }
                    }
                }
            }, pvt_v7: function () {
                return {
                    smText2: {
                        paraVarPair: {},
                        para: {
                            textData: this.emptyText
                        },
                        attr: {
                            fontSize: '16px', height: '300px', color: '#B2B4B8', label: 'div', textAlign: 'center'
                        }
                    }
                }
            }, pvt_v8: function () {
                return {
                    smBudgetDialog: {
                        paraVarPair: {},
                        para: {
                            activityID: this.checkActivityID
                        },
                        attr: {

                        }
                    }
                }
            },pvt_v9: function () {
                return {
                    smRejectDialog: {
                        paraVarPair: {},
                        para: {
                            activityID: this.checkActivityID
                        },
                        attr: {

                        }
                    }
                }
            }
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
                let condition;
                let dbData;
                let ref = {
                    sm: 'smButton2',
                    sm1: 'smText1',
                    sm2: 'smTabs',
                    sm3: 'smInput1',
                    sm4: 'smButton1',
                    sm5: 'smApprovalCom',
                    sm6: 'smPagination',
                    sm7: 'smText2',
                    sm8: 'smBudgetDialog',
                    sm9: 'smRejectDialog',
                };
                let fnname = 'myApproval.startModule';

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
                            $this.activityIDArr = [];
                        case 'getGroupActivityNumber':
                            para.expressionArr = [];
                            para.expressionArr.push($this.mac.fd.groupActivity.status + '=[' + $this.mac.enum.groupActivity.status.check + ',' + $this.mac.enum.groupActivity.status.released + ',' + $this.mac.enum.groupActivity.status.rejected + ']')
                            para.expressionArr.push($this.mac.fd.groupActivity.status + '=' + $this.mac.enum.groupActivity.status.check);
                            para.expressionArr.push($this.mac.fd.groupActivity.status + '=['+$this.mac.enum.groupActivity.status.released + ',' + $this.mac.enum.groupActivity.status.rejected + ']')
                            $this.ep.getActivityNumberEvent(para.expressionArr,function (result) {
                                $this.pageTotal = result[0];
                                $this.tabData = [{val: "全部", icon: "", disable: ""}, {
                                    val: "待审批 "+result[1],
                                    icon: "",
                                    disable: ""
                                }, {val: "已审批 "+result[2], icon: "", disable: ""}]
                                para.nStep = 'inputGroupActivity';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            },function (error) {
                                console.error(error)
                            })
                            break
                        case 'inputGroupActivity':
                            var geneInputData = {};
                            geneInputData[$this.mac.tb.groupActivity] = [$this.mac.fd.groupActivity.poster, $this.mac.fd.groupActivity.name, $this.mac.fd.groupActivity.startTime, $this.mac.fd.groupActivity.place, $this.mac.fd.groupActivity.status, $this.mac.fd.groupActivity.createTime,$this.mac.fd.groupActivity.refuseReason]
                            geneInputData[$this.mac.tb.groupActivityBudgetForm] = [$this.mac.fd.groupActivityBudgetForm.budgetAmount];
                            geneInputData[$this.mac.tb.groupActivityTicketType] = [$this.mac.fd.groupActivityTicketType.price, $this.mac.fd.groupActivityTicketType.poll]
                            var expression = $this.mac.fd.groupActivity.status + '=[' + $this.mac.enum.groupActivity.status.check + ',' + $this.mac.enum.groupActivity.status.released + ',' + $this.mac.enum.groupActivity.status.rejected + ']';
                            var start = $this.loadStart;
                            var total = $this.loadTotal;
                            var sort = ['id,desc'];
                            var destGeneSite = '';
                            $this.sys.api.conditiondataInput($this.mac.tb.groupActivity, geneInputData, expression, start, total, sort, destGeneSite, function (result) {
                                if (result === null) {
                                    $this.activityIDArr = [];
                                } else {
                                    $this.activityIDArr = result;
                                }
                                $this.forceUpdateData(function () {
                                    para.nStep = 'startModule1';
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
                                para.nStep = 'startModule2';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule2':
                            $this.sm[ref.sm2].startModule(function () {
                                para.nStep = 'startModule3';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule3':
                            $this.sm[ref.sm3].startModule(function () {
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
                                para.i = 0;
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule5':
                            if ($this.activityIDArr.length === 0) {
                                para.nStep = 'startModule6';
                                dbFlag += 1;
                                break
                            }
                            $this.sm[ref.sm5][para.i].startModule(function () {
                                para.i++
                                if (para.i === $this.activityIDArr.length) {
                                    para.nStep = 'startModule6';
                                }
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
                                para.nStep = 'startModule9';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule9':
                            $this.sm[ref.sm9].startModule(function () {
                                para.nStep = 'showModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showModules':
                            //显示子组件
                            let refId;
                            if ($this.activityIDArr.length === 0) {
                                refId = ["smText1", "smTabs", "smInput1", "smButton1", "smText2"];
                                $('.approvalCom').css('display', 'none');
                                para.height = $('.header').height() + $('.footer').height() + 270;
                                $('.myApproval-empty').css({'min-height': (window.screen.availHeight - para.height) + 'px'});
                            } else {
                                refId = ["smText1", "smTabs", "smInput1", "smButton1", "smApprovalCom", "smPagination"]
                                para.height = $('.header').height() + $('.footer').height() + 330;
                                $('.approvalCom').css('display', 'block');
                                $('.approvalCom-height').css('min-height', (window.screen.availHeight - para.height) + 'px');
                            }
                            $this.showSubModule(refId, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
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
            pageChange: function (number, successCallBack, errorCallBack) {
                let $this = this;
                let para;
                let dbFlag;
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                let ref = {
                    sm1: 'smText1',
                    sm2: 'smTabs',
                    sm3: 'smInput1',
                    sm4: 'smButton1',
                    sm5: 'smApprovalCom',
                    sm6: 'smPagination',
                    sm7: 'smText2',
                };
                let fnname = 'myApproval.pageChange';

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
                            $this.activityIDArr = [];
                            $this.pageIndex = number;
                            $this.loadStart = (number - 1) * $this.loadTotal;
                            $this.forceUpdateData(function () {
                                para.nStep = 'getGroupActivityNumber';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.pageChange(number, successCallBack, errorCallBack)
                                }
                            })
                            break;
                        case 'getGroupActivityNumber':
                            para.expressionArr = [];
                            for(var i=0;i<3;i++){
                                if (i === 0) {
                                    para.expression = $this.mac.fd.groupActivity.status + '=[' + $this.mac.enum.groupActivity.status.check + ',' + $this.mac.enum.groupActivity.status.released + ',' + $this.mac.enum.groupActivity.status.rejected + ']';
                                } else if (i === 1) {
                                    para.expression = $this.mac.fd.groupActivity.status + '=' + $this.mac.enum.groupActivity.status.check;
                                } else if (i === 2) {
                                    para.expression = $this.mac.fd.groupActivity.status + '=[' + $this.mac.enum.groupActivity.status.released + ',' + $this.mac.enum.groupActivity.status.rejected + ']';
                                }
                                if ($this.searchValue !== '') {
                                    para.expression += '&&' + $this.mac.fd.groupActivity.name + '="' + $this.searchValue + '"';
                                }
                                para.expressionArr.push(para.expression);
                            }
                            $this.ep.getActivityNumberEvent(para.expressionArr,function (result) {
                                $this.pageTotal = result[$this.labelIndex];
                                $this.tabData = [{val: "全部", icon: "", disable: ""}, {
                                    val: "待审批 "+result[1],
                                    icon: "",
                                    disable: ""
                                }, {val: "已审批 "+result[2], icon: "", disable: ""}]
                                para.nStep = 'inputGroupActivity';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.pageChange(number, successCallBack, errorCallBack)
                                }
                            },function (error) {
                                console.error(error)
                            })
                            break
                        case 'inputGroupActivity':
                            var geneInputData = {};
                            geneInputData[$this.mac.tb.groupActivity] = [$this.mac.fd.groupActivity.poster, $this.mac.fd.groupActivity.name, $this.mac.fd.groupActivity.startTime, $this.mac.fd.groupActivity.place, $this.mac.fd.groupActivity.status, $this.mac.fd.groupActivity.createTime,$this.mac.fd.groupActivity.refuseReason]
                            geneInputData[$this.mac.tb.groupActivityBudgetForm] = [$this.mac.fd.groupActivityBudgetForm.budgetAmount];
                            geneInputData[$this.mac.tb.groupActivityTicketType] = [$this.mac.fd.groupActivityTicketType.price, $this.mac.fd.groupActivityTicketType.poll]
                            var expression;
                            if ($this.labelIndex === 0) {
                                expression = $this.mac.fd.groupActivity.status + '=[' + $this.mac.enum.groupActivity.status.check + ',' + $this.mac.enum.groupActivity.status.released + ',' + $this.mac.enum.groupActivity.status.rejected + ']';
                            } else if ($this.labelIndex === 1) {
                                expression = $this.mac.fd.groupActivity.status + '=' + $this.mac.enum.groupActivity.status.check;
                            } else if ($this.labelIndex === 2) {
                                expression = $this.mac.fd.groupActivity.status + '=[' + $this.mac.enum.groupActivity.status.released + ',' + $this.mac.enum.groupActivity.status.rejected + ']';
                            }
                            if ($this.searchValue !== '') {
                                expression += '&&' + $this.mac.fd.groupActivity.name + '="' + $this.searchValue + '"';
                            }
                            var start = $this.loadStart;
                            var total = $this.loadTotal;
                            var sort = ['id,desc'];
                            var destGeneSite = '';
                            $this.sys.api.conditiondataInput($this.mac.tb.groupActivity, geneInputData, expression, start, total, sort, destGeneSite, function (result) {
                                if (result === null) {
                                    $this.activityIDArr = [];
                                } else {
                                    $this.activityIDArr = result;
                                }
                                para.i = 0;
                                $this.forceUpdateData(function () {
                                    para.nStep = 'startModule5';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.pageChange(number, successCallBack, errorCallBack)
                                    }
                                })
                            }, function (error) {
                                console.error(error)
                            })
                            break;
                        case 'startModule5':
                            if ($this.activityIDArr.length === 0) {
                                para.nStep = 'startModule2';
                                dbFlag += 1;
                                break
                            }
                            $this.sm[ref.sm5][para.i].startModule(function () {
                                para.i++
                                if (para.i === $this.activityIDArr.length) {
                                    para.nStep = 'startModule2';
                                }
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.pageChange(number, successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule2':
                            $this.sm[ref.sm2].startModule(function () {
                                para.nStep = 'startModule6';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.pageChange(number, successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule6':
                            $this.sm[ref.sm6].startModule(function () {
                                para.nStep = 'hideModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.pageChange(number, successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'hideModules':
                            let refId;
                            if ($this.activityIDArr.length === 0) {
                                refId = ["smText1", "smTabs", "smInput1", "smButton1", "smText2"];
                                $('.approvalCom').css('display', 'none');
                                para.height = $('.header').height() + $('.footer').height() + 270;
                                $('.myApproval-empty').css({'min-height': (window.screen.availHeight - para.height) + 'px'});
                            } else {
                                refId = ["smText1", "smTabs", "smInput1", "smButton1", "smApprovalCom", "smPagination"]
                                para.height = $('.header').height() + $('.footer').height() + 330;
                                $('.approvalCom').css('display', 'block');
                                $('.approvalCom-height').css('min-height', (window.screen.availHeight - para.height) + 'px');
                            }
                            $this.showSubModule(refId, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                        case 'end':
                            $("html,body").animate({
                                scrollTop: "0px"
                            },0);
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
            searchValueModify: function (value) {
                this.searchValue = value;
            },
            activitySearch: function (successCallBack, errorCallBack) {
                let $this = this;
                let para;
                let dbFlag;
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                let fnname = 'myApproval.activitySearch';

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
                            // if($this.searchValue===''){
                            //     para.nStep = 'end';
                            //     $this.$message({
                            //         type: 'error',
                            //         message: '请填写搜索内容'
                            //     });
                            //     break
                            // }
                            $this.activityIDArr = [];
                            $this.pageIndex = 1;
                            $this.loadStart = 0;
                            $this.forceUpdateData(function () {
                                para.nStep = 'getGroupActivityNumber';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.activitySearch(successCallBack, errorCallBack)
                                }
                            })
                            break;
                        case 'getGroupActivityNumber':
                            para.expressionArr = [];
                            for(var i=0;i<3;i++){
                                if (i === 0) {
                                    para.expression = $this.mac.fd.groupActivity.status + '=[' + $this.mac.enum.groupActivity.status.check + ',' + $this.mac.enum.groupActivity.status.released + ',' + $this.mac.enum.groupActivity.status.rejected + ']';
                                } else if (i === 1) {
                                    para.expression = $this.mac.fd.groupActivity.status + '=' + $this.mac.enum.groupActivity.status.check;
                                } else if (i === 2) {
                                    para.expression = $this.mac.fd.groupActivity.status + '=[' + $this.mac.enum.groupActivity.status.released + ',' + $this.mac.enum.groupActivity.status.rejected + ']';
                                }
                                if ($this.searchValue !== '') {
                                    para.expression += '&&' + $this.mac.fd.groupActivity.name + '="' + $this.searchValue + '"';
                                }
                                para.expressionArr.push(para.expression);
                            }
                            $this.ep.getActivityNumberEvent(para.expressionArr,function (result) {
                                $this.pageTotal = result[0];
                                $this.tabData = [{val: "全部", icon: "", disable: ""}, {
                                    val: "待审批 "+result[1],
                                    icon: "",
                                    disable: ""
                                }, {val: "已审批 "+result[2], icon: "", disable: ""}]
                                para.nStep = 'inputGroupActivity';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.activitySearch(successCallBack, errorCallBack)
                                }
                            },function (error) {
                                console.error(error)
                            })
                            break
                        case 'inputGroupActivity':
                            var geneInputData = {};
                            geneInputData[$this.mac.tb.groupActivity] = [$this.mac.fd.groupActivity.poster, $this.mac.fd.groupActivity.name, $this.mac.fd.groupActivity.startTime, $this.mac.fd.groupActivity.place, $this.mac.fd.groupActivity.status, $this.mac.fd.groupActivity.createTime,$this.mac.fd.groupActivity.refuseReason]
                            geneInputData[$this.mac.tb.groupActivityBudgetForm] = [$this.mac.fd.groupActivityBudgetForm.budgetAmount];
                            geneInputData[$this.mac.tb.groupActivityTicketType] = [$this.mac.fd.groupActivityTicketType.price, $this.mac.fd.groupActivityTicketType.poll]
                            var expression = $this.mac.fd.groupActivity.status + '=[' + $this.mac.enum.groupActivity.status.check + ',' + $this.mac.enum.groupActivity.status.released + ',' + $this.mac.enum.groupActivity.status.rejected + ']';
                            if ($this.searchValue !== '') {
                                expression += '&&' + $this.mac.fd.groupActivity.name + '="' + $this.searchValue + '"';
                            }
                            var start = $this.loadStart;
                            var total = $this.loadTotal;
                            var sort = ['id,desc'];
                            var destGeneSite = '';
                            $this.sys.api.conditiondataInput($this.mac.tb.groupActivity, geneInputData, expression, start, total, sort, destGeneSite, function (result) {
                                if (result === null) {
                                    $this.activityIDArr = [];
                                    $this.emptyText = '未找到相关活动';
                                    para.nStep = 'startModule7';
                                } else {
                                    $this.activityIDArr = result;
                                    para.nStep = 'startModule6';
                                }
                                $this.pageIndex = 1;
                                para.i = 0;
                                $this.forceUpdateData(function () {
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.activitySearch(successCallBack, errorCallBack)
                                    }
                                })
                            }, function (error) {
                                console.error(error)
                            })
                            break;
                        case 'startModule7':
                            $this.sm['smText2'].startModule(function () {
                                para.nStep = 'hideModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.activitySearch(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break
                        case 'startModule6':
                            $this.sm['smPagination'].startModule(function () {
                                para.nStep = 'startModule5';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.activitySearch(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break
                        case 'startModule5':
                            if ($this.activityIDArr.length === 0) {
                                para.nStep = 'hideModules';
                                dbFlag += 1;
                                break
                            }
                            $this.sm['smApprovalCom'][para.i].startModule(function () {
                                para.i++
                                if (para.i === $this.activityIDArr.length) {
                                    para.nStep = 'hideModules';
                                }
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.activitySearch(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'hideModules':
                            //显示子组件
                            $this.showSubModule(["smText2", "smApprovalCom", "smPagination"], false, function () {
                                para.nStep = 'startModule2';
                                if (++dbFlag === 2) {
                                    $this.activitySearch(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule2':
                            $this.sm['smTabs'].startModule(function () {
                                para.nStep = 'checkedLabel';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.activitySearch(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break
                        case 'checkedLabel':
                            $this.sm['smTabs'].checkedLabel(0)
                            $this.labelIndex = 0;
                            para.nStep = 'showModules';
                            if (++dbFlag === 2) {
                                $this.activitySearch(successCallBack, errorCallBack)
                            }
                            break
                        case 'showModules':
                            //显示子组件
                            let refId;
                            if ($this.activityIDArr.length === 0) {
                                refId = ["smText2"];
                                $('.approvalCom').css('display', 'none');
                                $('.approvalCom-height').css('display', 'none');
                                $('.myApproval-empty').css('display', 'block');
                                para.height = $('.header').height() + $('.footer').height() + 270;
                                $('.myApproval-empty').css({'min-height': (window.screen.availHeight - para.height) + 'px'});
                            } else {
                                refId = ["smApprovalCom", "smPagination"]
                                para.height = $('.header').height() + $('.footer').height() + 330;
                                $('.approvalCom').css('display', 'block');
                                $('.myApproval-empty').css('display', 'none');
                                $('.approvalCom-height').css('display', 'block');
                                $('.approvalCom-height').css('min-height', (window.screen.availHeight - para.height) + 'px');
                            }
                            $this.showSubModule(refId, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    $this.activitySearch(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'end':
                            $("html,body").animate({
                                scrollTop: "0px"
                            },0);
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
            labelSelect: function (index, successCallBack, errorCallBack) {
                let $this = this;
                let para;
                let dbFlag;
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                let fnname = 'myApproval.labelSelect';

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
                            $this.activityIDArr = [];
                            $this.loadStart = 0;
                            $this.labelIndex = index;
                            $this.pageIndex = 1;
                            $this.forceUpdateData(function () {
                                para.nStep = 'getGroupActivityNumber';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.labelSelect(index, successCallBack, errorCallBack)
                                }
                            })
                            break;
                        case 'getGroupActivityNumber':
                            para.expressionArr = [];
                            for(var i=0;i<3;i++){
                                if (i === 0) {
                                    para.expression = $this.mac.fd.groupActivity.status + '=[' + $this.mac.enum.groupActivity.status.check + ',' + $this.mac.enum.groupActivity.status.released + ',' + $this.mac.enum.groupActivity.status.rejected + ']';
                                } else if (i === 1) {
                                    para.expression = $this.mac.fd.groupActivity.status + '=' + $this.mac.enum.groupActivity.status.check;
                                } else if (i === 2) {
                                    para.expression = $this.mac.fd.groupActivity.status + '=[' + $this.mac.enum.groupActivity.status.released + ',' + $this.mac.enum.groupActivity.status.rejected + ']';
                                }
                                if ($this.searchValue !== '') {
                                    para.expression += '&&' + $this.mac.fd.groupActivity.name + '="' + $this.searchValue + '"';
                                }
                                para.expressionArr.push(para.expression);
                            }
                            $this.ep.getActivityNumberEvent(para.expressionArr,function (result) {
                                $this.pageTotal = result[index];
                                $this.tabData = [{val: "全部", icon: "", disable: ""}, {
                                    val: "待审批 "+result[1],
                                    icon: "",
                                    disable: ""
                                }, {val: "已审批 "+result[2], icon: "", disable: ""}]
                                para.nStep = 'inputGroupActivity';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.labelSelect(index, successCallBack, errorCallBack)
                                }
                            },function (error) {
                                console.error(error)
                            })
                            break
                        case 'inputGroupActivity':
                            var geneInputData = {};
                            geneInputData[$this.mac.tb.groupActivity] = [$this.mac.fd.groupActivity.poster, $this.mac.fd.groupActivity.name, $this.mac.fd.groupActivity.startTime, $this.mac.fd.groupActivity.place, $this.mac.fd.groupActivity.status, $this.mac.fd.groupActivity.createTime,$this.mac.fd.groupActivity.refuseReason]
                            geneInputData[$this.mac.tb.groupActivityBudgetForm] = [$this.mac.fd.groupActivityBudgetForm.budgetAmount];
                            geneInputData[$this.mac.tb.groupActivityTicketType] = [$this.mac.fd.groupActivityTicketType.price, $this.mac.fd.groupActivityTicketType.poll]
                            var expression;
                            if (index === 0) {
                                expression = $this.mac.fd.groupActivity.status + '=[' + $this.mac.enum.groupActivity.status.check + ',' + $this.mac.enum.groupActivity.status.released + ',' + $this.mac.enum.groupActivity.status.rejected + ']';
                            } else if (index === 1) {
                                expression = $this.mac.fd.groupActivity.status + '=' + $this.mac.enum.groupActivity.status.check;
                            } else if (index === 2) {
                                expression = $this.mac.fd.groupActivity.status + '=[' + $this.mac.enum.groupActivity.status.released + ',' + $this.mac.enum.groupActivity.status.rejected + ']';
                            }
                            if ($this.searchValue !== '') {
                                expression += '&&' + $this.mac.fd.groupActivity.name + '="' + $this.searchValue + '"';
                            }
                            var start = $this.loadStart;
                            var total = $this.loadTotal;
                            var sort = ['id,desc'];
                            var destGeneSite = '';
                            $this.sys.api.conditiondataInput($this.mac.tb.groupActivity, geneInputData, expression, start, total, sort, destGeneSite, function (result) {
                                if (result === null) {
                                    $this.activityIDArr = [];
                                    $this.emptyText = '未找到相关活动';
                                    para.nStep = 'startModule7';
                                } else {
                                    $this.activityIDArr = result;
                                    para.nStep = 'startModule6';
                                }
                                para.i = 0;
                                $this.forceUpdateData(function () {
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.labelSelect(index, successCallBack, errorCallBack)
                                    }
                                })
                            }, function (error) {
                                console.error(error)
                            })
                            break;
                        case 'startModule7':
                            $this.sm['smText2'].startModule(function () {
                                para.nStep = 'hideModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.labelSelect(index, successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break
                        case 'startModule6':
                            $this.sm['smPagination'].startModule(function () {
                                para.nStep = 'startModule5';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.labelSelect(index, successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break
                        case 'startModule5':
                            if ($this.activityIDArr.length === 0) {
                                para.nStep = 'hideModules';
                                dbFlag += 1;
                                break
                            }
                            $this.sm['smApprovalCom'][para.i].startModule(function () {
                                para.i++
                                if (para.i === $this.activityIDArr.length) {
                                    para.nStep = 'hideModules';
                                }
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.labelSelect(index, successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'hideModules':
                            //显示子组件
                            $this.showSubModule(["smText2", "smApprovalCom", "smPagination"], false, function () {
                                para.nStep = 'startModule2';
                                if (++dbFlag === 2) {
                                    $this.labelSelect(index, successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule2':
                            $this.sm['smTabs'].startModule(function () {
                                para.nStep = 'showModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.labelSelect(index, successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break
                        case 'showModules':
                            //显示子组件
                            let refId;
                            if ($this.activityIDArr.length === 0) {
                                refId = ["smText2"];
                                $('.approvalCom').css('display', 'none');
                                $('.approvalCom-height').css('display', 'none');
                                $('.myApproval-empty').css('display', 'block');
                                para.height = $('.header').height() + $('.footer').height() + 270;
                                $('.myApproval-empty').css({'min-height': (window.screen.availHeight - para.height) + 'px'});
                            } else {
                                refId = ["smApprovalCom", "smPagination"]
                                para.height = $('.header').height() + $('.footer').height() + 330;
                                $('.approvalCom').css('display', 'block');
                                $('.myApproval-empty').css('display', 'none');
                                $('.approvalCom-height').css('display', 'block');
                                $('.approvalCom-height').css('min-height', (window.screen.availHeight - para.height) + 'px');
                            }
                            $this.showSubModule(refId, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    $this.labelSelect(index, successCallBack, errorCallBack)
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
            activityApproval: function (commandType,activityID,successCallBack, errorCallBack) {
                let $this = this;
                let para;
                let dbFlag;
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                let fnname = 'myApproval.activityApproval';

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
                        case 'getGroupActivityNumber':
                            para.expressionArr = [];
                            for(var i=0;i<3;i++){
                                if (i === 0) {
                                    para.expression = $this.mac.fd.groupActivity.status + '=[' + $this.mac.enum.groupActivity.status.check + ',' + $this.mac.enum.groupActivity.status.released + ',' + $this.mac.enum.groupActivity.status.rejected + ']';
                                } else if (i === 1) {
                                    para.expression = $this.mac.fd.groupActivity.status + '=' + $this.mac.enum.groupActivity.status.check;
                                } else if (i === 2) {
                                    para.expression = $this.mac.fd.groupActivity.status + '=[' + $this.mac.enum.groupActivity.status.released + ',' + $this.mac.enum.groupActivity.status.rejected + ']';
                                }
                                if ($this.searchValue !== '') {
                                    para.expression += '&&' + $this.mac.fd.groupActivity.name + '="' + $this.searchValue + '"';
                                }
                                para.expressionArr.push(para.expression);
                            }
                            $this.ep.getActivityNumberEvent(para.expressionArr,function (result) {
                                $this.pageTotal = result[$this.labelIndex];
                                if(Math.ceil($this.pageTotal/10)<$this.pageIndex){
                                    $this.pageIndex = Math.ceil($this.pageTotal/10);
                                }
                                $this.tabData = [{val: "全部", icon: "", disable: ""}, {
                                    val: "待审批 "+result[1],
                                    icon: "",
                                    disable: ""
                                }, {val: "已审批 "+result[2], icon: "", disable: ""}]
                                para.nStep = 'startModule2';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.activityApproval(commandType,activityID,successCallBack, errorCallBack)
                                }
                            },function (error) {
                                console.error(error)
                            })
                            break
                        case 'startModule2':
                            // let noApproval = parseInt($this.tabData[1].val.substring(4)) - 1;
                            // let approval = parseInt($this.tabData[2].val.substring(4)) + 1;
                            // $this.tabData = [{val: "全部", icon: "", disable: ""}, {
                            //     val: "待审批 " + noApproval,
                            //     icon: "",
                            //     disable: ""
                            // }, {val: "已审批 " + approval, icon: "", disable: ""}];
                            $this.forceUpdateData(function () {
                                $this.sm['smTabs'].startModule(function () {
                                    if($this.labelIndex!==1){
                                        para.nStep = 'smApprovalCom';
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.activityApproval(commandType,activityID,successCallBack, errorCallBack)
                                        }
                                    }else{
                                        $this.activityIDArr = [];
                                        para.nStep = 'inputGroupActivity';
                                        $this.loadStart = ($this.pageIndex-1)*10;
                                        $this.forceUpdateData(function () {
                                            dbFlag += 1;
                                            if (dbFlag === 2) {
                                                $this.activityApproval(commandType,activityID,successCallBack, errorCallBack)
                                            }
                                        })
                                    }
                                }, function (error) {
                                    console.error(error)
                                })
                            })
                            break
                        case 'inputGroupActivity':
                            var geneInputData = {};
                            geneInputData[$this.mac.tb.groupActivity] = [$this.mac.fd.groupActivity.poster, $this.mac.fd.groupActivity.name, $this.mac.fd.groupActivity.startTime, $this.mac.fd.groupActivity.place, $this.mac.fd.groupActivity.status, $this.mac.fd.groupActivity.createTime,$this.mac.fd.groupActivity.refuseReason]
                            geneInputData[$this.mac.tb.groupActivityBudgetForm] = [$this.mac.fd.groupActivityBudgetForm.budgetAmount];
                            geneInputData[$this.mac.tb.groupActivityTicketType] = [$this.mac.fd.groupActivityTicketType.price, $this.mac.fd.groupActivityTicketType.poll]
                            var expression;
                            expression = $this.mac.fd.groupActivity.status + '=' + $this.mac.enum.groupActivity.status.check;
                            if ($this.searchValue !== '') {
                                expression += '&&' + $this.mac.fd.groupActivity.name + '="' + $this.searchValue + '"';
                            }
                            var start = $this.loadStart;
                            var total = $this.loadTotal;
                            var sort = ['id,desc'];
                            var destGeneSite = '';
                            $this.sys.api.conditiondataInput($this.mac.tb.groupActivity, geneInputData, expression, start, total, sort, destGeneSite, function (result) {
                                if (result === null) {
                                    $this.activityIDArr = [];
                                    $this.emptyText = '未找到相关活动';
                                    para.nStep = 'startModule7';
                                } else {
                                    $this.activityIDArr = result;
                                    para.nStep = 'startModule5';
                                }
                                para.i = 0;
                                $this.forceUpdateData(function () {
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.activityApproval(commandType,activityID,successCallBack, errorCallBack)
                                    }
                                })
                            }, function (error) {
                                console.error(error)
                            })
                            break;
                        case 'smApprovalCom':
                            $this.sm['smApprovalCom'][$this.activityIDArr.indexOf(activityID)].activityApproval(commandType,function () {
                                para.nStep = 'end';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.activityApproval(commandType,activityID,successCallBack, errorCallBack)
                                }
                            },function (error) {
                                console.error(error)
                            })
                            break
                        case 'startModule7':
                            $this.sm['smText2'].startModule(function () {
                                para.nStep = 'hideModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.activityApproval(commandType,activityID,successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break
                        case 'startModule5':
                            if ($this.activityIDArr.length === 0) {
                                para.nStep = 'hideModules';
                                dbFlag += 1;
                                break
                            }
                            $this.sm['smApprovalCom'][para.i].startModule(function () {
                                para.i++
                                if (para.i === $this.activityIDArr.length) {
                                    para.nStep = 'hideModules';
                                }
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.activityApproval(commandType,activityID,successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'hideModules':
                            //显示子组件
                            $this.showSubModule(["smText2", "smApprovalCom", "smPagination"], false, function () {
                                para.nStep = 'startModule6';
                                if (++dbFlag === 2) {
                                    $this.activityApproval(commandType,activityID,successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule6':
                            $this.sm['smPagination'].startModule(function () {
                                para.nStep = 'showModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.activityApproval(commandType,activityID,successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break
                        case 'showModules':
                            //显示子组件
                            let refId;
                            if ($this.activityIDArr.length === 0) {
                                refId = ["smText2"];
                                $('.approvalCom').css('display', 'none');
                                $('.approvalCom-height').css('display', 'none');
                                $('.myApproval-empty').css('display', 'block');
                                para.height = $('.header').height() + $('.footer').height() + 270;
                                $('.myApproval-empty').css({'min-height': (window.screen.availHeight - para.height) + 'px'});
                            } else {
                                refId = ["smApprovalCom", "smPagination"]
                                para.height = $('.header').height() + $('.footer').height() + 330;
                                $('.approvalCom').css('display', 'block');
                                $('.myApproval-empty').css('display', 'none');
                                $('.approvalCom-height').css('display', 'block');
                                $('.approvalCom-height').css('min-height', (window.screen.availHeight - para.height) + 'px');
                            }
                            $this.showSubModule(refId, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    $this.activityApproval(commandType,activityID,successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'end':
                            return;
                        default:
                            return;
                    }
                    dbFlag += 1;
                    if (dbFlag === 1) return;
                }
            },
            budgetShow:function(activityID,successCallBack,errorCallBack){
                let $this = this;
                $this.checkActivityID = activityID;
                $this.forceUpdateData(function(){
                    $this.sm['smBudgetDialog'].startModule(function () {
                        $this.showSubModule(['smBudgetDialog'], true, function () {
                            successCallBack()
                        }, function (error) {
                            console.error(error)
                        });
                    },function (error) {
                        console.error(error)
                    })
                })
            },
            rejectDialogShow:function(activityID,successCallBack,errorCallBack){
                let $this = this;
                $this.checkActivityID = activityID;
                $this.forceUpdateData(function(){
                    $this.sm["smRejectDialog"].startModule(function () {
                        $this.showSubModule(['smRejectDialog'], true, function () {
                            successCallBack()
                        }, function (error) {
                            console.error(error)
                        });
                    },function (error) {
                        console.error(error)
                    })
                })
            },

            smPagination_currentChangeEvent: function (number) {
                this.pageChange(number, function () {
                }, function () {
                })
            },
            smInput1_dataModifyEvent: function (value) {
                this.searchValueModify(value)
            },
            smButton1_buttonClickEvent: function () {
                this.activitySearch(function () {
                }, function () {
                })
            },
            smTabs_labelClickEvent: function (index) {
                this.labelSelect(index, function () {
                }, function () {
                })
            },
            smApprovalCom_activityApprovalEvent: function (activityID, commandType, rejectReason, successCallBack, errorCallBack) {
                this.ep.activityApprovalEvent(activityID[0], commandType, rejectReason, successCallBack, errorCallBack);
                this.activityApproval(commandType,activityID[1]);
            },
            smApprovalCom_detailPageEvent: function (activityID, successCallBack, errorCallBack) {
                this.ep.detailPageEvent(activityID, successCallBack, errorCallBack);
            },
            smApprovalCom_budgetShowEvent:function (activityID,successCallBack,errorCallBack) {
                this.budgetShow(activityID,successCallBack,errorCallBack)
            },
            smApprovalCom_rejectDialogShowEvent:function (activityID,successCallBack,errorCallBack) {
                this.rejectDialogShow(activityID,successCallBack,errorCallBack);
            },
            smRejectDialog_activityApprovalEvent:function (activityID, commandType, rejectReason, successCallBack, errorCallBack) {
                this.ep.activityApprovalEvent(activityID[0], commandType, rejectReason, successCallBack, errorCallBack);
                this.activityApproval(commandType,activityID[1]);
            },
        }
    }
</script>
<style lang="scss">
    .my-approval {
        padding: 20px;
        .approval-wrap {
            background-color: #fff;
            border-radius: 4px;
            box-shadow: 0 0 8px 0 rgba(48, 49, 51, 0.1);
            color: #303133;
            box-sizing: border-box;
        }
        .approval-tabs {
            .tabs-component .el-tabs__item {

            }
        }

        .approval-search {
            .lm_text_input_container .el-input__inner {
                height: 40px;
            }

            .lm-button .el-button {
                padding: 0;
            }
        }
    }
</style>
<style lang="scss" scoped>
    .my-approval {
        .collect-title {
            padding: 15px 0;
            border-bottom: 1px solid rgba(220, 223, 230, 1);
            margin-bottom: 10px;
        }

        .approvalCom {
            padding-top: 20px;
            border-left: 1px solid rgba(220, 223, 230, 1);
            border-right: 1px solid rgba(220, 223, 230, 1);

            .approval-com:last-child {
                border-bottom: 1px solid rgba(220, 223, 230, 1);
            }
        }

        .flex {
            display: flex;

            .approval-tabs {
                flex: 1;
                height: 40px;
                background: rgba(245, 247, 250, 1);
                border-radius: 0px 4px 0px 0px;
                border: 1px solid rgba(220, 223, 230, 1);

                .approval-tabs-dv {
                    width: 330px;
                }
            }

            .approval-search {
                width: 242px;
            }
        }

        .myApproval-pagination {
            margin: 30px 0;
            text-align: center;
        }
    }

    .row {

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

    .root-normal {
    }

    .root-max {
    }

    .root-middle {
    }

    .root-smaller {
    }

    .root-min {
    }

    .root-all {
    }

    .v1-normal {
    }

    .v1-max {
    }

    .v1-middle {
    }

    .v1-smaller {
    }

    .v1-min {
    }

    .v1-all {
    }

    .v2-normal {
    }

    .v2-max {
    }

    .v2-middle {
    }

    .v2-smaller {
    }

    .v2-min {
    }

    .v2-all {
    }


    /* ------ Module Style Variable ------- */

</style>
