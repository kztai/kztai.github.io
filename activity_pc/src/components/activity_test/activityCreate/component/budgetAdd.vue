<template>
    <div class="budget-add">
        <div class="row budget-top" draggable="true">
            <div class="col col_w_4" draggable="false">
                <div class="mar-10">
                    <lm-input-text
                            ref="smInput1"
                            refId="smInput1"
                            v-show="pvt_isShow.v1 === 'smInput1'"
                            :paraVarPair="pvt_v1.smInput1.paraVarPair"
                            :para="pvt_v1.smInput1.para"
                            :attr="pvt_v1.smInput1.attr">
                    </lm-input-text>
                </div>
            </div>
            <div class="col col_w_3" draggable="false">
                <div class="mar-10">
                    <lm-input-text
                            ref="smInput2"
                            refId="smInput2"
                            v-show="pvt_isShow.v2 === 'smInput2'"
                            :paraVarPair="pvt_v2.smInput2.paraVarPair"
                            :para="pvt_v2.smInput2.para"
                            :attr="pvt_v2.smInput2.attr">
                    </lm-input-text>
                </div>
            </div>
            <div class="col col_w_3" draggable="false">
                <div class="mar-10">
                    <lm-input-text
                            ref="smInput3"
                            refId="smInput3"
                            v-show="pvt_isShow.v3 === 'smInput3'"
                            :paraVarPair="pvt_v3.smInput3.paraVarPair"
                            :para="pvt_v3.smInput3.para"
                            :attr="pvt_v3.smInput3.attr">
                    </lm-input-text>
                </div>
            </div>
            <div class="col col_w_8" draggable="false">
                <div class="mar-10">
                    <lm-input-text
                            ref="smInput4"
                            refId="smInput4"
                            v-show="pvt_isShow.v4 === 'smInput4'"
                            :paraVarPair="pvt_v4.smInput4.paraVarPair"
                            :para="pvt_v4.smInput4.para"
                            :attr="pvt_v4.smInput4.attr">
                    </lm-input-text>
                </div>
            </div>
            <div class="col col_w_2" draggable="false">
                <lm-button
                        ref="smButton"
                        refId="smButton"
                        v-show="pvt_isShow.v5 === 'smButton'"
                        :paraVarPair="pvt_v5.smButton.paraVarPair"
                        :para="pvt_v5.smButton.para"
                        :attr="pvt_v5.smButton.attr">
                </lm-button>
            </div>
        </div>
        <div class="budget-tip" v-show="pvt_isShow.v6 === 'smText'">
            <i class="el-icon-warning"></i>
            <lm-link-text
                    ref="smText"
                    refId="smText"
                    v-show="pvt_isShow.v6 === 'smText'"
                    :paraVarPair="pvt_v6.smText.paraVarPair"
                    :para="pvt_v6.smText.para"
                    :attr="pvt_v6.smText.attr">
            </lm-link-text>
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
                    vessel: ["v1", "v2", "v3", "v4", "v5", "v6"],
                    subModule: ["smInput1", "smInput2", "smInput3", "smInput4", "smButton", "smText"]
                },
                pvt_isShow: {
                    "v1": null,
                    "v2": null,
                    "v3": null,
                    "v4": null,
                    "v5": null,
                    "v6": null,
                },

                pvt_eventPortInput: ['budgetItemDeleteEvent'],

                debugFlag: true,
                mac: mac.mac,
                unit: '元',
                budgetName: '',
                budgetAmount: '',
                tipText: '预算项名称不能为空'
            }
        },
        computed: {
            pvt_v1: function () {
                return {
                    smInput1: {
                        paraVarPair: {},
                        para: {
                            text: this.budgetName
                        },
                        attr: {
                            placeholder: '请填写费用名称'
                        }
                    }
                }
            }, pvt_v2: function () {
                return {
                    smInput2: {
                        paraVarPair: {},
                        para: {
                            text: [{
                                $table: this.mac.tb.groupActivityBudgetForm,
                                $arrField: [this.mac.fd.groupActivityBudgetForm.unit],
                                $arrValue: [this.para.activityBudgetFormID]
                            }],
                        },
                        attr: {
                            placeholder: '元', disabled: true
                        }
                    }
                }
            }, pvt_v3: function () {
                return {
                    smInput3: {
                        paraVarPair: {},
                        para: {
                            text: this.budgetAmount
                        },
                        attr: {
                            placeholder: '预算支出',type:'number'
                        }
                    }
                }
            }, pvt_v4: function () {
                return {
                    smInput4: {
                        paraVarPair: {},
                        para: {
                            text: [{
                                $table: this.mac.tb.groupActivityBudgetForm,
                                $arrField: [this.mac.fd.groupActivityBudgetForm.budgetRemarks],
                                $arrValue: [this.para.activityBudgetFormID]
                            }],
                            // text: this.ticketNum
                        },
                        attr: {
                            placeholder: '备注',
                        }
                    }
                }
            }, pvt_v5: function () {
                return {
                    smButton: {
                        paraVarPair: {},
                        para: {
                            name: ['', 'el-icon-delete']
                        },
                        attr: {
                            type: 'text'
                        }
                    }
                }
            }, pvt_v6: function () {
                return {
                    smText: {
                        paraVarPair: {},
                        para: {
                            textData: this.tipText
                        },
                        attr: {
                            fontSize: '12px', height: '20px', color: '#F56C6C'
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
                let fnname = 'budgetAdd.startModule';
                let ref = {
                    sm1: 'smInput1',
                    sm2: 'smInput2',
                    sm3: 'smInput3',
                    sm4: 'smInput4',
                    sm5: 'smButton',
                    sm6: 'smText',
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
                        case 'hideModule':
                            $this.showSubModule(["smText"], false, function () {
                                para.nStep = 'queryGroupActivityBudgetForm';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'queryGroupActivityBudgetForm':
                            objectName = $this.mac.tb.groupActivityBudgetForm;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityBudgetFormID];
                            dbData[$this.mac.fd.groupActivityBudgetForm.name] = [];
                            dbData[$this.mac.fd.groupActivityBudgetForm.budgetAmount] = [];
                            $this.sys.api.recordRead(objectName, dbData,
                                function () {
                                    $this.budgetName = dbData[$this.mac.fd.groupActivityBudgetForm.name][0];
                                    $this.budgetAmount = dbData[$this.mac.fd.groupActivityBudgetForm.budgetAmount][0];
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
                                para.nStep = 'showModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showModules':
                            //显示子组件
                            let refId = ["smInput1", "smInput2", "smInput3", "smInput4", "smButton"];
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
            budgetNameModify: function (value, successCallBack, errorCallBack) {
                let $this = this;
                let para;
                let dbFlag;
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                let fnname = 'budgetAdd.budgetNameModify';

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
                            if (value === ''||value === null) {
                                $this.tipText = '预算项名称不能为空';
                                $this.forceUpdateData(function () {
                                    para.nStep = 'startModule';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.budgetNameModify(value, successCallBack, errorCallBack)
                                    }
                                })
                            } else {
                                para.nStep = 'queryActivityBudgetForm';
                                dbFlag += 1;
                            }
                            break;
                        case 'queryActivityBudgetForm':
                            objectName = $this.mac.tb.groupActivityBudgetForm;
                            parentRecord = [$this.para.parentID];
                            condition = null;
                            dbData = {};
                            dbData[$this.mac.fd.groupActivityBudgetForm.name] = [];
                            $this.sys.api.recordQuery(objectName, parentRecord, condition, dbData,
                                function () {
                                    if (dbData[$this.mac.fd.groupActivityBudgetForm.name].indexOf(value) === -1) {
                                        para.nStep = 'activityBudgetFormModify';
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.budgetNameModify(value, successCallBack, errorCallBack)
                                        }
                                    } else if (dbData[$this.mac.fd.groupActivityBudgetForm.name].indexOf(value) !== -1 && dbData[$this.mac.fd.groupActivityBudgetForm.name].indexOf(value) !== $this.number) {
                                        $this.tipText = '预算项名称不能相同';
                                        $this.forceUpdateData(function () {
                                            para.nStep = 'startModule';
                                            dbFlag += 1;
                                            if (dbFlag === 2) {
                                                $this.budgetNameModify(value, successCallBack, errorCallBack)
                                            }
                                        })
                                    } else {
                                        para.nStep = 'hideModules';
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.budgetNameModify(value, successCallBack, errorCallBack)
                                        }
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'startModule':
                            $this.sm['smText'].startModule(function () {
                                para.nStep = 'showModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.budgetNameModify(value, successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showModules':
                            //显示子组件
                            var refId = ['smText'];
                            $this.showSubModule(refId, true, function () {
                                para.nStep = 'readActivityTicketType';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.budgetNameModify(value, successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'readActivityTicketType':
                            objectName = $this.mac.tb.groupActivityBudgetForm;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityBudgetFormID]
                            dbData[$this.mac.fd.groupActivityBudgetForm.name] = [];
                            $this.sys.api.recordRead(objectName, dbData,
                                function () {
                                    para.nStep = 'startModule1';
                                    $this.budgetName = dbData[$this.mac.fd.groupActivityBudgetForm.name][0];
                                    $this.$nextTick(() => {
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.budgetNameModify(value, successCallBack, errorCallBack)
                                        }
                                    })
                                }, para.errorCallBack)
                            break;
                        case 'activityBudgetFormModify':
                            objectName = $this.mac.tb.groupActivityBudgetForm;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityBudgetFormID]
                            dbData[$this.mac.fd.groupActivityBudgetForm.name] = [value];
                            $this.sys.api.recordModify(objectName, dbData,
                                function () {
                                    $this.budgetName = value;
                                    $this.dataOutput($this.mac.tb.groupActivity,$this.para.parentID)
                                    para.nStep = 'hideModules';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.budgetNameModify(value, successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'hideModules':
                            //显示子组件
                            var refId = ['smText'];
                            $this.showSubModule(refId, false, function () {
                                para.nStep = 'end';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.budgetNameModify(value, successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule1':
                            $this.sm['smInput1'].startModule(function () {
                                para.nStep = 'end';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.budgetNameModify(value, successCallBack, errorCallBack)
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
            budgetAmountModify: function (value, successCallBack, errorCallBack) {
                let $this = this;
                let para;
                let dbFlag;
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                let fnname = 'budgetAdd.budgetAmountModify';

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
                            if (value === ''||value === null) {
                                $this.tipText = '预算支出不能为空';
                                $this.forceUpdateData(function () {
                                    para.nStep = 'startModule';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.budgetAmountModify(value, successCallBack, errorCallBack)
                                    }
                                })
                            } else if (Number(value) < 0) {
                                $this.tipText = '预算支出不能为负数';
                                $this.forceUpdateData(function () {
                                    para.nStep = 'startModule';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.budgetAmountModify(value, successCallBack, errorCallBack)
                                    }
                                })
                            } else {
                                para.regExp = /\b(0+)/gi;
                                value = value + '';
                                if (Number(value) === 0) {
                                    value = 0;
                                } else if (para.regExp.test(value)&&value.indexOf(".")==-1) {
                                    value = value.replace(/\b(0+)/gi, "");
                                }
                                para.nStep = 'activityBudgetFormModify';
                                dbFlag += 1;
                            }
                            break;
                        case 'startModule':
                            $this.sm['smText'].startModule(function () {
                                para.nStep = 'showModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.budgetAmountModify(value, successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showModules':
                            //显示子组件
                            var refId = ['smText'];
                            $this.showSubModule(refId, true, function () {
                                para.nStep = 'readActivityTicketType';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.budgetAmountModify(value, successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'readActivityTicketType':
                            objectName = $this.mac.tb.groupActivityBudgetForm;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityBudgetFormID]
                            dbData[$this.mac.fd.groupActivityBudgetForm.budgetAmount] = [];
                            $this.sys.api.recordRead(objectName, dbData,
                                function () {
                                    para.nStep = 'startModule1';
                                    $this.budgetAmount = dbData[$this.mac.fd.groupActivityBudgetForm.budgetAmount][0];
                                    $this.$nextTick(() => {
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.budgetAmountModify(value, successCallBack, errorCallBack)
                                        }
                                    })
                                }, para.errorCallBack)
                            break;
                        case 'activityBudgetFormModify':
                            objectName = $this.mac.tb.groupActivityBudgetForm;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityBudgetFormID]
                            dbData[$this.mac.fd.groupActivityBudgetForm.budgetAmount] = [value];
                            $this.sys.api.recordModify(objectName, dbData,
                                function () {
                                    $this.budgetAmount = value;
                                    $this.dataOutput($this.mac.tb.groupActivity,$this.para.parentID)
                                    para.nStep = 'hideModules';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.budgetAmountModify(value, successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'hideModules':
                            //显示子组件
                            var refId = ['smText'];
                            $this.showSubModule(refId, false, function () {
                                para.nStep = 'startModule1';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.budgetAmountModify(value, successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule1':
                            $this.sm['smInput3'].startModule(function () {
                                para.nStep = 'end';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.budgetAmountModify(value, successCallBack, errorCallBack)
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
            dataOutput:function (tableName,id) {
                let $this = this;
                $this.sys.api.dataOutput(tableName, [id], '',
                    function () {

                    },function (error) {console.error(error)})
            },

            smInput1_dataModifyEvent: function (value) {
                this.budgetNameModify(value, function () {
                }, function () {
                });
            },
            smInput3_dataModifyEvent: function (value) {
                this.budgetAmountModify(value, function () {
                }, function () {
                });
            },
            smInput4_dataModifyEvent: function (value) {
                this.dataOutput(this.mac.tb.groupActivity,this.para.parentID)
            },
            smButton_buttonClickEvent: function () {
                this.ep.budgetItemDeleteEvent(this.para.activityBudgetFormID, function () {
                }, function () {
                })
            },
        }
    }
</script>
<style lang="scss">
    .budget-add {
        .row {
            .col {
                .el-input__inner {
                    height: 36px;
                    width: 100%;
                    text-align: center;
                }

                .svg-container {
                    display: none;
                }

                .el-icon-delete {
                    font-size: 18px;
                    padding: 0;
                    color: #606266;
                }

                .el-icon-delete:hover {
                    color: #409EFF;
                }
            }
        }
    }
</style>
<style lang="scss" scoped>
    .budget-add {
        /*height: 36px;*/

        .budget-top {
            position: relative;
            height: 36px;
            background: #ffffff;
            padding: 10px 0;
            /*border-top:1px solid red;*/
            .move-icon {
                position: absolute;
                height: 30px;
                width: 30px;
                line-height: 30px;
                text-align: center;
                top: 3px;
                left: 5px;
                cursor: pointer;
            }

            .col {
                .el-input__inner {
                    height: 36px;
                    width: 100%;
                    text-align: center;
                }

                .svg-container {
                    display: none;
                }

                .mar-10 {
                    margin: 0 10px;
                }

                .item-con {
                    text-align: center;
                    height: 32px;
                    line-height: 32px;
                    border: 1px solid rgba(220, 223, 230, 1);
                    border-radius: 4px;
                    width: 100%;

                    .col {
                        vertical-align: middle;
                        margin: -2px 10px 0 10px;
                    }
                }
            }
        }

        .budget-tip {
            margin-left: 10px;
            line-height: 20px;

            .el-icon-warning {
                color: #F56C6C;
                vertical-align: middle;
                margin: -2px 5px 0 0;
            }
        }

        .mar-b-20 {
            margin-bottom: 20px;
        }
    }

    .col {
        box-sizing: border-box;
        display: inline-block;
        /*vertical-align: middle;*/
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