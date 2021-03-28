<template>
    <div class="approval-info">
        <div class="row approvalInfo-title">
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
            <div class="col col_w_5">
                <lm-link-text
                        ref="smText2"
                        refId="smText2"
                        v-show="pvt_isShow.v2 === 'smText2'"
                        :paraVarPair="pvt_v2.smText2.paraVarPair"
                        :para="pvt_v2.smText2.para"
                        :attr="pvt_v2.smText2.attr">
                </lm-link-text>
            </div>
            <div class="col col_w_5">
                <lm-link-text
                        ref="smText3"
                        refId="smText3"
                        v-show="pvt_isShow.v3 === 'smText3'"
                        :paraVarPair="pvt_v3.smText3.paraVarPair"
                        :para="pvt_v3.smText3.para"
                        :attr="pvt_v3.smText3.attr">
                </lm-link-text>
            </div>
            <div class="col col_w_5">
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
        <div class="row mar-b-15">
            <div class="col col_w_5">
                <lm-link-text
                        ref="smText5"
                        refId="smText5"
                        v-show="pvt_isShow.v5 === 'smText5'"
                        :paraVarPair="pvt_v5.smText5.paraVarPair"
                        :para="pvt_v5.smText5.para"
                        :attr="pvt_v5.smText5.attr">
                </lm-link-text>
            </div>
            <div class="col col_w_5">
                <lm-link-text
                        ref="smText6"
                        refId="smText6"
                        v-show="pvt_isShow.v6 === 'smText6'"
                        :paraVarPair="pvt_v6.smText6.paraVarPair"
                        :para="pvt_v6.smText6.para"
                        :attr="pvt_v6.smText6.attr">
                </lm-link-text>
            </div>
            <div class="col col_w_5">
                <lm-link-text
                        ref="smText7"
                        refId="smText7"
                        v-show="pvt_isShow.v7 === 'smText7'"
                        :paraVarPair="pvt_v7.smText7.paraVarPair"
                        :para="pvt_v7.smText7.para"
                        :attr="pvt_v7.smText7.attr">
                </lm-link-text>
            </div>
            <div class="col col_w_5">
                <lm-link-text
                        ref="smText8"
                        refId="smText8"
                        v-show="pvt_isShow.v8 === 'smText8'"
                        :paraVarPair="pvt_v8.smText8.paraVarPair"
                        :para="pvt_v8.smText8.para"
                        :attr="pvt_v8.smText8.attr">
                </lm-link-text>
            </div>
        </div>
        <div class="row approvalInfo-btn">
            <div class="col mar-r-10">
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
        </div>
        <div class="approvalInfo-refuseReason">
            <div class="col approvalInfo-refuseReason-left">
                <div class="flex">
                    <div class="col flex-left">
                        <lm-link-text
                                ref="smText9"
                                refId="smText9"
                                v-show="pvt_isShow.v11 === 'smText9'"
                                :paraVarPair="pvt_v11.smText9.paraVarPair"
                                :para="pvt_v11.smText9.para"
                                :attr="pvt_v11.smText9.attr">
                        </lm-link-text>
                    </div>
                    <div class="col flex-right">
                        <lm-link-text
                                ref="smText10"
                                refId="smText10"
                                v-show="pvt_isShow.v12 === 'smText10'"
                                :paraVarPair="pvt_v12.smText10.paraVarPair"
                                :para="pvt_v12.smText10.para"
                                :attr="pvt_v12.smText10.attr">
                        </lm-link-text>
                    </div>
                </div>
            </div>
            <div class="col approvalInfo-refuseReason-right">
                <lm-button
                        ref="smButton3"
                        refId="smButton3"
                        v-show="pvt_isShow.v13 === 'smButton3'"
                        :paraVarPair="pvt_v13.smButton3.paraVarPair"
                        :para="pvt_v13.smButton3.para"
                        :attr="pvt_v13.smButton3.attr">
                </lm-button>
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
                    vessel: ["v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8", "v9", "v10", "v11", "v12", "v13"],
                    subModule: ["smText1", "smText2", "smText3", "smText4", "smText5", "smText6", "smText7", "smText8", "smButton1", "smButton2", "smText9", "smText10", "smButton3"]
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

                pvt_eventPortInput: ['activityApprovalEvent','detailPageEvent','budgetShowEvent','rejectDialogShowEvent'],
                mac: mac.mac,
                budgetTotal: '¥5000.00',
                priceTotal: '¥99.00',
                ticketNumber: '无限制',
                debugFlag: true
            }
        },
        computed: {
            pvt_v1: function () {
                return {
                    smText1: {
                        paraVarPair: {},
                        para: {
                            textData: '预算'
                        },
                        attr: {
                            fontSize: '14px', height: '40px', color: '#606266',label:'div',textAlign:'center'
                        }
                    }
                }
            }, pvt_v2: function () {
                return {
                    smText2: {
                        paraVarPair: {},
                        para: {
                            textData: '票价'
                        },
                        attr: {
                            fontSize: '14px', height: '40px', color: '#606266',label:'div',textAlign:'center'
                        }
                    }
                }
            }, pvt_v3: function () {
                return {
                    smText3: {
                        paraVarPair: {},
                        para: {
                            textData: '数量'
                        },
                        attr: {
                            fontSize: '14px', height: '40px', color: '#606266',label:'div',textAlign:'center'
                        }
                    }
                }
            }, pvt_v4: function () {
                return {
                    smText4: {
                        paraVarPair: {},
                        para: {
                            textData: '创建时间'
                        },
                        attr: {
                            fontSize: '14px', height: '40px', color: '#606266',label:'div',textAlign:'center'
                        }
                    }
                }
            }, pvt_v5: function () {
                return {
                    smText5: {
                        paraVarPair: {},
                        para: {
                            textData: this.budgetTotal
                        },
                        attr: {
                            fontSize: '14px',height: '40px', color: '#12B0FF',label:'div',textAlign:'center',isClick:true
                        }
                    }
                }
            }, pvt_v6: function () {
                return {
                    smText6: {
                        paraVarPair: {},
                        para: {
                            textData: this.priceTotal
                        },
                        attr: {
                            fontSize: '14px',height: '40px', color: '#606266',label:'div',textAlign:'center'
                        }
                    }
                }
            }, pvt_v7: function () {
                return {
                    smText7: {
                        paraVarPair: {},
                        para: {
                            textData: this.ticketNumber
                        },
                        attr: {
                            fontSize: '14px', height: '40px', color: '#606266',label:'div',textAlign:'center'
                        }
                    },
                }
            }, pvt_v8: function () {
                return {
                    smText8: {
                        paraVarPair: {},
                        para: {
                            textData: [{
                                $table: this.mac.tb.groupActivity,
                                $arrField: [this.mac.fd.groupActivity.createTime],
                                $arrValue: [this.para.activityID]
                            }],
                            // textData: '2019-10-10 10:00:00'
                        },
                        attr: {
                            fontSize: '14px', height: '40px', color: '#606266',label:'div',textAlign:'center'
                        }
                    },
                }
            }, pvt_v9: function () {
                return {
                    smButton1: {
                        paraVarPair: {},
                        para: {
                            name: ['审核通过', ''],
                        },
                        attr: {
                            width: '72px', height: '28px', type: 'primary'
                        }
                    }
                }
            }, pvt_v10: function () {
                return {
                    smButton2: {
                        paraVarPair: {},
                        para: {
                            name: ['审核不通过', ''],
                        },
                        attr: {
                            width: '86px', height: '28px'
                        }
                    }
                }
            }, pvt_v11: function () {
                return {
                    smText9: {
                        paraVarPair: {},
                        para: {
                            textData: '拒绝原因：'
                        },
                        attr: {
                            fontSize: '14px', height: '28px', color: '#606266'
                        }
                    },
                }
            }, pvt_v12: function () {
                return {
                    smText10: {
                        paraVarPair: {},
                        para: {
                            textData: [{
                                $table: this.mac.tb.groupActivity,
                                $arrField: [this.mac.fd.groupActivity.refuseReason],
                                $arrValue: [this.para.activityID]
                            }],
                            // textData: '活动时间XXXXXXXC互相冲突'
                        },
                        attr: {
                            fontSize: '14px', height: '28px', color: '#909399'
                        }
                    },
                }
            }, pvt_v13: function () {
                return {
                    smButton3: {
                        paraVarPair: {},
                        para: {
                            name: ['查看详情', ''],
                        },
                        attr: {
                            width: '86px', height: '28px', type: 'primary'
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
                let dbData;
                let condition;
                let ref = {
                    sm1: 'smText1',
                    sm2: 'smText2',
                    sm3: 'smText3',
                    sm4: 'smText4',
                    sm5: 'smText5',
                    sm6: 'smText6',
                    sm7: 'smText7',
                    sm8: 'smText8',
                    sm9: 'smButton1',
                    sm10: 'smButton2',
                    sm11: 'smText9',
                    sm12: 'smText10',
                    sm13: 'smButton3',
                };
                let fnname = 'collectInfo.startModule';

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
                        case 'hideModules':
                            //显示子组件
                            var refIds = ["smText1", "smText2", "smText3", "smText4", "smText5", "smText6", "smText7", "smText8","smText9", "smText10", "smButton3", "smButton1", "smButton2"];
                            $this.showSubModule(refIds, false, function () {
                                para.nStep = 'queryGroupActivity';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'queryGroupActivity':
                            objectName = $this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityID];
                            dbData[$this.mac.fd.groupActivity.status] = [];
                            $this.sys.api.recordRead(objectName, dbData,
                                function () {
                                    para.status = dbData[$this.mac.fd.groupActivity.status][0];
                                    para.nStep = 'queryGroupActivityBudgetForm';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'queryGroupActivityBudgetForm':
                            objectName = $this.mac.tb.groupActivityBudgetForm;
                            parentRecord = [$this.para.activityID];
                            condition = null;
                            dbData = {};
                            dbData[$this.mac.fd.groupActivityBudgetForm.budgetAmount] = [];
                            $this.sys.api.recordQuery(objectName,parentRecord ,condition ,dbData,
                                function () {
                                    para.budget = 0;
                                    for(var i=0;i<dbData[$this.mac.fd.groupActivityBudgetForm.budgetAmount].length;i++){
                                        para.budget += dbData[$this.mac.fd.groupActivityBudgetForm.budgetAmount][i];
                                    }
                                    $this.budgetTotal = '¥'+para.budget.toFixed(2);
                                    para.nStep = 'queryGroupActivityTicketType';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'queryGroupActivityTicketType':
                            objectName = $this.mac.tb.groupActivityTicketType;
                            parentRecord = [$this.para.activityID];
                            condition = null;
                            dbData = {};
                            dbData[$this.mac.fd.groupActivityTicketType.price] = [];
                            dbData[$this.mac.fd.groupActivityTicketType.poll] = [];
                            $this.sys.api.recordQuery(objectName,parentRecord ,condition ,dbData,
                                function () {
                                    para.price = 0;
                                    para.ticketNumber = 0;
                                    for(var i=0;i<dbData[$this.mac.fd.groupActivityTicketType.price].length;i++){
                                        para.price += dbData[$this.mac.fd.groupActivityTicketType.price][i];
                                    }
                                    $this.priceTotal = '¥'+para.price.toFixed(2);
                                    for(var i=0;i<dbData[$this.mac.fd.groupActivityTicketType.poll].length;i++){
                                        if(dbData[$this.mac.fd.groupActivityTicketType.poll][i]!==null){
                                            para.ticketNumber += dbData[$this.mac.fd.groupActivityTicketType.poll][i];
                                        }else{
                                            para.ticketNumber = '无限制';
                                            break;
                                        }
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
                            if(para.status===$this.mac.enum.groupActivity.status.check){
                                refId = ["smText1", "smText2", "smText3", "smText4", "smText5", "smText6", "smText7", "smText8", "smButton1", "smButton2"];
                            }else{
                                if(para.status===$this.mac.enum.groupActivity.status.released){
                                    refId = ["smText1", "smText2", "smText3", "smText4", "smText5", "smText6", "smText7", "smText8", "smButton3"];
                                }else{
                                    refId = ["smText1", "smText2", "smText3", "smText4", "smText5", "smText6", "smText7", "smText8","smText9", "smText10", "smButton3"];
                                }
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
            activityApproval:function(){
                let $this = this;
                let objectName = $this.mac.tb.groupActivity;
                let dbData = {};
                dbData[$this.mac.fd.id] = [$this.para.activityID];
                dbData[$this.mac.fd.groupActivity.status] = [$this.mac.enum.groupActivity.status.released];
                $this.sys.api.recordModify(objectName, dbData,function () {
                    $this.$message({
                        type: 'success',
                        message: '审核通过'
                    });
                    $this.sys.api.getSourceRecord(objectName,[$this.para.activityID],
                        function (result) {
                            $this.ep.activityApprovalEvent([result[0],$this.para.activityID],0,'',function () {},function () {});
                        },
                        function (error) {
                            console.error(error)
                        });
                    // $this.showSubModule(["smButton1", "smButton2"], false, function () {
                    // }, function(error){console.error(error)});
                    // $this.showSubModule(["smButton3"], true, function () {
                    // }, function(error){console.error(error)});
                },function (error) {
                    console.error(error)
                })
            },
            detailPage:function(){
                let $this = this;
                let objectName = $this.mac.tb.groupActivity;
                $this.sys.api.getSourceRecord(objectName,[$this.para.activityID],
                    function (result) {
                        $this.ep.detailPageEvent(result[0],function () {},function () {});
                    },
                    function (error) {
                        console.error(error)
                    });
            },

            smButton1_buttonClickEvent: function () {
                // this.ep.activityApprovalEvent(this.para.activityID,0,'',function () {},function () {});
                this.activityApproval();
            },
            smButton2_buttonClickEvent: function () {
                this.ep.rejectDialogShowEvent(this.para.activityID,function () {},function () {});
            },
            smButton3_buttonClickEvent: function () {
                this.detailPage();
            },
            smText5_textClickEvent:function () {
                this.ep.budgetShowEvent(this.para.activityID,function () {},function () {})
            }
        }
    }
</script>
<style lang="scss">
    .approval-info {
        .lm-button .el-button {
            padding: 0;
        }
        .link-status.link-text:hover{
            border-bottom:none;
        }
    }
</style>
<style lang="scss" scoped>
    .approval-info {
        .approvalInfo-title{
            margin-top: 15px;
            height: 40px;
            background:rgba(244,244,244,1);
            border:1px solid rgba(220,223,230,1);
            line-height: 40px;
        }
        .approvalInfo-btn{
            text-align: right;
            font-size:0
        }
        .mar-r-10{
            margin-right: 10px;
        }
        .f-r{
            float: right;
        }
        .mar-b-15{
            margin-bottom: 15px;
        }
        .approvalInfo-refuseReason{
            font-size:0;
            display: flex;
            .approvalInfo-refuseReason-left{
                flex: 1;
            }
            .approvalInfo-refuseReason-right{
                width: 90px;
                text-align: right;
                margin-left: 80px;
            }
        }
        .flex{
            display: flex;
            .flex-left{
                width: 80px;
            }
            .flex-right{
                flex:1;
            }
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
