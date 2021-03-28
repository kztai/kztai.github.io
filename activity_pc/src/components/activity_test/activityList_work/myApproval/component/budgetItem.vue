<template>
    <div class="budget-item">
        <div class="row">
            <div class="col col_w_5">
                <lm-link-text
                        ref="smText1"
                        refId="smText1"
                        v-show="pvt_isShow.v1 === 'smText1'"
                        :paraVarPair="pvt_v1.smText1.paraVarPair"
                        :para="pvt_v1.smText1.para"
                        :attr="pvt_v1.smText1.attr">
                </lm-link-text>
            </div>
            <div class="col col_w_3">
                <lm-link-text
                        ref="smText2"
                        refId="smText2"
                        v-show="pvt_isShow.v2 === 'smText2'"
                        :paraVarPair="pvt_v2.smText2.paraVarPair"
                        :para="pvt_v2.smText2.para"
                        :attr="pvt_v2.smText2.attr">
                </lm-link-text>
            </div>
            <div class="col col_w_4">
                <lm-link-text
                        ref="smText3"
                        refId="smText3"
                        v-show="pvt_isShow.v3 === 'smText3'"
                        :paraVarPair="pvt_v3.smText3.paraVarPair"
                        :para="pvt_v3.smText3.para"
                        :attr="pvt_v3.smText3.attr">
                </lm-link-text>
            </div>
            <div class="col col_w_8">
                <lm-link-text
                        ref="smText4"
                        refId="smText4"
                        v-show="pvt_isShow.v4 === 'smText4'"
                        :paraVarPair="pvt_v4.smText4.paraVarPair"
                        :para="pvt_v4.smText4.para"
                        :attr="pvt_v4.smText4.attr">
                </lm-link-text>
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
                    vessel: ["v1","v2","v3","v4"],
                    subModule: ["smText1","smText2","smText3","smText4"]
                },
                pvt_isShow: {
                    "v1": null,
                    "v2": null,
                    "v3": null,
                    "v4": null,
                },

                pvt_eventPortInput: [],


                mac:mac.mac,
                debugFlag:true,
                budgetRemarks:''
            }
        },
        computed: {
            pvt_v1: function () {
                return {
                    smText1: {
                        paraVarPair: {},
                        para: {
                            textData: [{
                                $table: this.mac.tb.groupActivityBudgetForm,
                                $arrField: [this.mac.fd.groupActivityBudgetForm.name],
                                $arrValue: [this.para.$arrValue]
                            }],
                        },
                        attr: {
                            fontSize:'14px',color:'#606266',height:'20px',label:'div',textAlign:'center'
                        }
                    }
                }
            },pvt_v2: function () {
                return {
                    smText2: {
                        paraVarPair: {},
                        para: {
                            textData: [{
                                $table: this.mac.tb.groupActivityBudgetForm,
                                $arrField: [this.mac.fd.groupActivityBudgetForm.unit],
                                $arrValue: [this.para.$arrValue]
                            }],
                        },
                        attr: {
                            fontSize:'14px',color:'#606266',height:'20px',label:'div',textAlign:'center'
                        }
                    }
                }
            },pvt_v3: function () {
                return {
                    smText3: {
                        paraVarPair: {},
                        para: {
                            textData: [{
                                $table: this.mac.tb.groupActivityBudgetForm,
                                $arrField: [this.mac.fd.groupActivityBudgetForm.budgetAmount],
                                $arrValue: [this.para.$arrValue]
                            }],
                        },
                        attr: {
                            fontSize:'14px',color:'#606266',height:'20px',label:'div',textAlign:'center'
                        }
                    }
                }
            },pvt_v4: function () {
                return {
                    smText4: {
                        paraVarPair: {},
                        para: {
                            textData: this.budgetRemarks
                        },
                        attr: {
                            fontSize:'14px',color:'#606266',height:'20px',label:'div',textAlign:'center'
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
                let condition;
                let dbData;
                let ref = {
                    sm1: 'smText1',
                    sm2: 'smText2',
                    sm3: 'smText3',
                    sm4: 'smText4',
                };
                let fnname = 'budgetItem.startModule';

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
                        case 'queryGroupActivityBudgetForm':
                            objectName = $this.mac.tb.groupActivityBudgetForm;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.$arrValue];
                            dbData[$this.mac.fd.groupActivityBudgetForm.budgetRemarks] = [];
                            $this.sys.api.recordRead(objectName, dbData,
                                function () {
                                    if(dbData[$this.mac.fd.groupActivityBudgetForm.budgetRemarks][0]===null){
                                        $this.budgetRemarks = '空';
                                    }else{
                                        $this.budgetRemarks = dbData[$this.mac.fd.groupActivityBudgetForm.budgetRemarks][0];
                                    }
                                    $this.forceUpdateData(function(){
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
                                para.nStep = 'showModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showModules':
                            //显示子组件
                            let refId = ["smText1","smText2","smText3","smText4"];
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
        }
    }
</script>
<style lang="scss" scoped>
    .budget-item{
        padding:20px 0;
    }



    .col {
        box-sizing: border-box;
        display: inline-block;
        vertical-align:middle;
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