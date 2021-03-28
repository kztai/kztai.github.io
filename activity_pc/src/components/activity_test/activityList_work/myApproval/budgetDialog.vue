<template>
    <div class="budgetDialog">
        <div class="budget-dialog">
            <div class="row budget-title">
                <div class="col f-l">
                    <lm-link-text
                            ref="smText1"
                            refId="smText1"
                            v-show="pvt_isShow.v1 === 'smText1'"
                            :paraVarPair="pvt_v1.smText1.paraVarPair"
                            :para="pvt_v1.smText1.para"
                            :attr="pvt_v1.smText1.attr">
                    </lm-link-text>
                </div>
                <div class="col f-r">
                    <lm-button
                            ref="smButton1"
                            refId="smButton1"
                            v-show="pvt_isShow.v2 === 'smButton1'"
                            :paraVarPair="pvt_v2.smButton1.paraVarPair"
                            :para="pvt_v2.smButton1.para"
                            :attr="pvt_v2.smButton1.attr">
                    </lm-button>
                </div>
            </div>
            <div class="row budgeItem-title">
                <div class="col col_w_5">
                    <lm-link-text
                        ref="smText2"
                        refId="smText2"
                        v-show="pvt_isShow.v3 === 'smText2'"
                        :paraVarPair="pvt_v3.smText2.paraVarPair"
                        :para="pvt_v3.smText2.para"
                        :attr="pvt_v3.smText2.attr">
                    </lm-link-text>
                </div>
                <div class="col col_w_3">
                    <lm-link-text
                            ref="smText3"
                            refId="smText3"
                            v-show="pvt_isShow.v4 === 'smText3'"
                            :paraVarPair="pvt_v4.smText3.paraVarPair"
                            :para="pvt_v4.smText3.para"
                            :attr="pvt_v4.smText3.attr">
                    </lm-link-text>
                </div>
                <div class="col col_w_4">
                    <lm-link-text
                            ref="smText4"
                            refId="smText4"
                            v-show="pvt_isShow.v5 === 'smText4'"
                            :paraVarPair="pvt_v5.smText4.paraVarPair"
                            :para="pvt_v5.smText4.para"
                            :attr="pvt_v5.smText4.attr">
                    </lm-link-text>
                </div>
                <div class="col col_w_8">
                    <lm-link-text
                            ref="smText5"
                            refId="smText5"
                            v-show="pvt_isShow.v6 === 'smText5'"
                            :paraVarPair="pvt_v6.smText5.paraVarPair"
                            :para="pvt_v6.smText5.para"
                            :attr="pvt_v6.smText5.attr">
                    </lm-link-text>
                </div>
            </div>
            <div class="budgetItem">
                <budgetItem
                    ref="smBudgetItem"
                    refId="smBudgetItem"
                    v-show="pvt_isShow.v7 === 'smBudgetItem'"
                    v-for="(item, index) in pvt_v7.smBudgetItem.forData"
                    :number="index"
                    :paraVarPair="pvt_v7.smBudgetItem.paraVarPair"
                    :para="item.para"
                    :attr="item.attr">
                </budgetItem>
            </div>
            <div class="row budget-btn">
                <div class="col mar-r-10">
                    <lm-button
                            ref="smButton2"
                            refId="smButton2"
                            v-show="pvt_isShow.v8 === 'smButton2'"
                            :paraVarPair="pvt_v8.smButton2.paraVarPair"
                            :para="pvt_v8.smButton2.para"
                            :attr="pvt_v8.smButton2.attr">
                    </lm-button>
                </div>
                <div class="col">
                    <lm-button
                            ref="smButton3"
                            refId="smButton3"
                            v-show="pvt_isShow.v9 === 'smButton3'"
                            :paraVarPair="pvt_v9.smButton3.paraVarPair"
                            :para="pvt_v9.smButton3.para"
                            :attr="pvt_v9.smButton3.attr">
                    </lm-button>
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
    import budgetItem from './component/budgetItem';

    export default {
        components: {budgetItem},
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ['sys'],
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ["v1","v2","v3","v4","v5","v6","v7","v8","v9"],
                    subModule: ["smText1","smButton1","smText2","smText3","smText4","smText5","smBudgetItem","smButton2","smButton3"]
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

                pvt_eventPortInput: [],


                mac:mac.mac,
                debugFlag:true,
                budgetArr:[]
            }
        },
        computed: {
            pvt_v1: function () {
                return {
                    smText1: {
                        paraVarPair: {},
                        para: {
                            textData: '预算明细'
                        },
                        attr: {
                            fontSize:'14px',color:'#606266',height:'28px'
                        }
                    }
                }
            },
            pvt_v2: function () {
                return {
                    smButton1: {
                        paraVarPair: {},
                        para: {
                            name:['','el-icon-close']
                        },
                        attr: {
                            type:'text',height: '28px'
                        }
                    }
                }
            },
            pvt_v3: function () {
                return {
                    smText2: {
                        paraVarPair: {},
                        para: {
                            textData: '支出分类'
                        },
                        attr: {
                            fontSize:'14px',color:'#606266',height:'40px',label:'div',textAlign:'center'
                        }
                    }
                }
            },
            pvt_v4: function () {
                return {
                    smText3: {
                        paraVarPair: {},
                        para: {
                            textData: '单位'
                        },
                        attr: {
                            fontSize:'14px',color:'#606266',height:'40px',label:'div',textAlign:'center'
                        }
                    }
                }
            },
            pvt_v5: function () {
                return {
                    smText4: {
                        paraVarPair: {},
                        para: {
                            textData: '预算支出'
                        },
                        attr: {
                            fontSize:'14px',color:'#606266',height:'40px',label:'div',textAlign:'center'
                        }
                    }
                }
            },
            pvt_v6: function () {
                return {
                    smText5: {
                        paraVarPair: {},
                        para: {
                            textData: '备注'
                        },
                        attr: {
                            fontSize:'14px',color:'#606266',height:'40px',label:'div',textAlign:'center'
                        }
                    }
                }
            },
            pvt_v7: function () {
                let loopModule = {
                    smBudgetItem: {
                        para: {
                            $arrValue: this.budgetArr,
                        },
                        attr: {},
                    },
                };
                let forData = this.pvt_createForData(loopModule);
                return {
                    smBudgetItem: {
                        paraVarPair: {},
                        forData: forData.smBudgetItem,
                    },
                }
            },
            pvt_v8: function () {
                return {
                    smButton2: {
                        paraVarPair: {},
                        para: {
                            name:['确定','']
                        },
                        attr: {
                            type:'primary',height: '30px',width:'60px'
                        }
                    }
                }
            },
            pvt_v9: function () {
                return {
                    smButton3: {
                        paraVarPair: {},
                        para: {
                            name:['取消','']
                        },
                        attr: {
                            height: '30px',width:'60px'
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
                    sm2: 'smButton1',
                    sm3: 'smText2',
                    sm4: 'smText3',
                    sm5: 'smText4',
                    sm6: 'smText5',
                    sm7: 'smBudgetItem',
                    sm8: 'smButton2',
                    sm9: 'smButton3'
                };
                let fnname = 'budgetDialog.startModule';

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
                        case '':
                            objectName = $this.mac.tb.groupActivity;
                            $this.sys.api.getSourceRecord(objectName,[$this.para.activityID],
                                function (result) {
                                    para.activityID = result[0];
                                    para.nStep = 'inputGroupActivity';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack)
                                    }
                                },
                                function (error) {
                                    console.error(error)
                                });
                            break
                        case 'inputGroupActivity':
                            var geneInputData = {};
                            geneInputData[$this.mac.tb.groupActivity] = [$this.mac.fd.groupActivity.poster, $this.mac.fd.groupActivity.name, $this.mac.fd.groupActivity.startTime, $this.mac.fd.groupActivity.place, $this.mac.fd.groupActivity.status, $this.mac.fd.groupActivity.createTime]
                            geneInputData[$this.mac.tb.groupActivityBudgetForm] = null;
                            var expression = $this.mac.fd.id +'='+ para.activityID;
                            var start = null;
                            var total = null;
                            var sort = ['id,desc'];
                            var destGeneSite = '';
                            $this.sys.api.conditiondataInput($this.mac.tb.groupActivity, geneInputData, expression, start, total, sort, destGeneSite, function (result) {
                                if (result === null) {
                                    $this.budgetArr = [];
                                    para.nStep = 'startModule1';
                                } else {
                                    para.nStep = 'queryGroupActivityBudgetForm';
                                    para.loadActivityID = result[0];
                                }
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error)
                            })
                            break;
                        case 'queryGroupActivityBudgetForm':
                            objectName = $this.mac.tb.groupActivityBudgetForm;
                            parentRecord = [para.loadActivityID];
                            condition = null;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [];
                            $this.sys.api.recordQuery(objectName,parentRecord,condition, dbData,
                                function () {
                                    $this.budgetArr = dbData[$this.mac.fd.id];
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
                                para.i = 0;
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule7':
                            if($this.budgetArr.length === 0){
                                para.nStep = 'startModule8';
                                dbFlag += 1;
                                break
                            }
                            $this.sm[ref.sm7][para.i].startModule(function () {
                                para.i++
                                if(para.i===$this.budgetArr.length){
                                    para.nStep = 'startModule8';
                                }
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
                                para.nStep = 'showModules';
                                para.i = 0;
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showModules':
                            //显示子组件
                            let refId = ["smText1","smButton1","smText2","smText3","smText4","smText5","smBudgetItem","smButton2","smButton3"]
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
            hideSelfDialog:function(){
                this.hideSelfModule('smBudgetDialog', function () {

                }, function (error) {
                    console.error(error)
                })
            },
            getUserID:function(){
                return {id:1,name:'张三'}
            },
            getUrlPara:function(){
                return {id:1}
            },
            getCurrentTime:function () {
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
            smButton1_buttonClickEvent:function () {
                this.hideSelfDialog()
            },
            smButton2_buttonClickEvent:function () {
                this.hideSelfDialog()
            },
            smButton3_buttonClickEvent:function () {
                this.hideSelfDialog()
            },
        }
    }
</script>
<style lang="scss">
    .budgetDialog{
        .lm-button .el-button--text{
            color: #D7D7D7;
            font-size:20px;
        }
        .lm-button .el-button{
            padding:0;
        }
    }
</style>
<style lang="scss" scoped>
    .budgetDialog{
        position: fixed;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 9999;
        .budget-dialog{
            margin: 100px auto 0 auto;
            width: 800px;
            height: 600px;
            background:rgba(255,255,255,1);
            border:1px solid rgba(229,229,229,1);
            box-shadow:0px 3px 7px 0px rgba(51,51,51,0.1);
            border-radius:4px;
            .budget-title{
                height: 60px;
                padding:0 20px;
                line-height: 60px;
            }
            .budgeItem-title{
                margin:0 20px;
                height: 40px;
                background:linear-gradient(0deg,rgba(242,242,242,1) 0%,rgba(249,249,249,1) 49%,rgba(255,255,255,1) 100%);
                box-shadow:0px 1px 3px 0px rgba(48,49,51,0.15);
                border-radius:4px 4px 0px 0px;
                border:1px solid rgba(229,229,229,1);
            }
            .f-l{
                float: left;
            }
            .f-r{
                float: right;
            }
            .clearfix{
                content: '';
                display: block;
                width: 0;
                height: 0;
                clear:both;
            }
            .budget-btn{
                padding: 0 20px;
                text-align: right;
            }
            .mar-r-10{
                margin-right: 10px;
            }
            .budgetItem{
                height: 430px;
                margin:0 20px 20px 20px;
                border:1px solid rgba(229,229,229,1);
                border-top:none;
                overflow-x: hidden;
                overflow-y: auto;
            }
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