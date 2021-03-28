<template>
    <div class="rejectDialog">
        <div class="reject-dialog">
            <div class="row reject-title">
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
            <div class="rejectDialog-content">
                <div class="row">
                    <lm-link-text
                            ref="smText2"
                            refId="smText2"
                            v-show="pvt_isShow.v3 === 'smText2'"
                            :paraVarPair="pvt_v3.smText2.paraVarPair"
                            :para="pvt_v3.smText2.para"
                            :attr="pvt_v3.smText2.attr">
                    </lm-link-text>
                </div>
                <div class="row">
                    <lm-input-text
                            ref="smInput1"
                            refId="smInput1"
                            v-show="pvt_isShow.v4 === 'smInput1'"
                            :paraVarPair="pvt_v4.smInput1.paraVarPair"
                            :para="pvt_v4.smInput1.para"
                            :attr="pvt_v4.smInput1.attr">
                    </lm-input-text>
                </div>
                <div class="row mar-t-20">
                    <lm-link-text
                            ref="smText3"
                            refId="smText3"
                            v-show="pvt_isShow.v5 === 'smText3'"
                            :paraVarPair="pvt_v5.smText3.paraVarPair"
                            :para="pvt_v5.smText3.para"
                            :attr="pvt_v5.smText3.attr">
                    </lm-link-text>
                </div>
                <div class="row">
                    <reasonItem
                            ref="smReasonItem"
                            refId="smReasonItem"
                            v-show="pvt_isShow.v6 === 'smReasonItem'"
                            v-for="(item, index) in pvt_v6.smReasonItem.forData"
                            :number="index"
                            :paraVarPair="pvt_v6.smReasonItem.paraVarPair"
                            :para="item.para"
                            :attr="item.attr">
                    </reasonItem>
                </div>
            </div>
            <div class="row reject-btn">
                <div class="col mar-r-10">
                    <lm-button
                            ref="smButton2"
                            refId="smButton2"
                            v-show="pvt_isShow.v7 === 'smButton2'"
                            :paraVarPair="pvt_v7.smButton2.paraVarPair"
                            :para="pvt_v7.smButton2.para"
                            :attr="pvt_v7.smButton2.attr">
                    </lm-button>
                </div>
                <div class="col">
                    <lm-button
                            ref="smButton3"
                            refId="smButton3"
                            v-show="pvt_isShow.v8 === 'smButton3'"
                            :paraVarPair="pvt_v8.smButton3.paraVarPair"
                            :para="pvt_v8.smButton3.para"
                            :attr="pvt_v8.smButton3.attr">
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
    import reasonItem from './component/reasonItem';

    export default {
        components: {reasonItem},
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ['sys'],
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ["v1","v2","v3","v4","v5","v6","v7","v8"],
                    subModule: ["smText1","smButton1","smText2","smInput1","smText3","smReasonItem","smButton2","smButton3"]
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
                },

                pvt_eventPortInput: ['activityApprovalEvent'],


                mac:mac.mac,
                debugFlag:true,
                reasonArr:['不具备营业执照。','未完善运营人的相关身份信息。', '未完成企业认证。', '账号存在违规记录。'],
                textArea:''
            }
        },
        computed: {
            pvt_v1: function () {
                return {
                    smText1: {
                        paraVarPair: {},
                        para: {
                            textData: '审核不通过'
                        },
                        attr: {
                            fontSize:'16px',color:'#606266',height:'28px'
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
                            textData: '请填写详细原因：'
                        },
                        attr: {
                            fontSize:'14px',color:'#606266',height:'40px',
                        }
                    }
                }
            },
            pvt_v4: function () {
                return {
                    smInput1: {
                        paraVarPair: {},
                        para: {
                            text:this.textArea
                        },
                        attr: {
                            placeholder:'详情原因，可进行标签选择',type:'textarea',autosize:{minRows:3,maxRows:3}
                        }
                    }
                }
            },
            pvt_v5: function () {
                return {
                    smText3: {
                        paraVarPair: {},
                        para: {
                            textData: '原因：'
                        },
                        attr: {
                            fontSize:'14px',color:'#606266',height:'40px'
                        }
                    }
                }
            },
            pvt_v6: function () {
                let loopModule = {
                    smReasonItem: {
                        para: {
                            textData: this.reasonArr,
                        },
                        attr: {},
                    },
                };
                let forData = this.pvt_createForData(loopModule);
                return {
                    smReasonItem: {
                        paraVarPair: {},
                        forData: forData.smReasonItem,
                    },
                }
            },
            pvt_v7: function () {
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
            pvt_v8: function () {
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
                    sm4: 'smInput1',
                    sm5: 'smText3',
                    sm6: 'smReasonItem',
                    sm7: 'smButton2',
                    sm8: 'smButton3',
                };
                let fnname = 'rejectDialog.startModule';

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
                            $this.textArea='';
                            $this.forceUpdateData(function () {
                                para.nStep = 'startModule1';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            })
                            break
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
                                para.i = 0;
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule6':
                            if($this.reasonArr.length === 0){
                                para.nStep = 'startModule7';
                                dbFlag += 1;
                                break
                            }
                            $this.sm[ref.sm6][para.i].startModule(function () {
                                para.i++
                                if(para.i===$this.reasonArr.length){
                                    para.nStep = 'startModule7';
                                }
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
                                para.nStep = 'showModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showModules':
                            //显示子组件
                            let refId =  ["smText1","smButton1","smText2","smInput1","smText3","smReasonItem","smButton2","smButton3"]
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
                this.hideSelfModule('smRejectDialog', function () {

                }, function (error) {
                    console.error(error)
                })
            },
            reasonSelect:function(value){
                let $this = this;
                $this.textArea += value;
                $this.forceUpdateData(function () {
                    $this.sm['smInput1'].startModule(function () {

                    },function (error) {
                        console.error(error)
                    })
                })
            },
            activityApproval:function(){
                let $this = this;
                if($this.textArea === ''){
                    $this.$message({
                        type: 'error',
                        message: '请填写拒绝理由'
                    });
                }else{
                    let objectName = $this.mac.tb.groupActivity;
                    let dbData = {};
                    dbData[$this.mac.fd.id] = [$this.para.activityID];
                    dbData[$this.mac.fd.groupActivity.status] = [$this.mac.enum.groupActivity.status.rejected];
                    dbData[$this.mac.fd.groupActivity.refuseReason] = [$this.textArea];
                    $this.sys.api.recordModify(objectName, dbData,function () {
                        $this.sys.api.getSourceRecord(objectName,[$this.para.activityID],
                            function (result) {
                                $this.ep.activityApprovalEvent([result[0],$this.para.activityID],1,$this.textArea,function () {},function () {});
                                $this.hideSelfDialog()
                            },
                            function (error) {
                                console.error(error)
                            });
                    },function (error) {
                        console.error(error)
                    })
                }
            },
            textAreaModify:function(value){
                this.textArea = value;
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
            smInput1_dataModifyEvent:function(value){
                this.textAreaModify(value)
            },
            smButton1_buttonClickEvent:function () {
                this.hideSelfDialog()
            },
            smButton2_buttonClickEvent:function () {
                this.activityApproval()
            },
            smButton3_buttonClickEvent:function () {
                this.hideSelfDialog()
            },
            smReasonItem_reasonSelectEvent:function(value){
                this.reasonSelect(value)
            }
        }
    }
</script>
<style lang="scss">
    .rejectDialog{
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
    .rejectDialog{
        position: fixed;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 2001;
        .reject-dialog{
            margin: 100px auto 0 auto;
            padding:0 20px 30px 20px;
            width: 660px;
            max-height: 500px;
            background:rgba(255,255,255,1);
            border:1px solid rgba(229,229,229,1);
            box-shadow:0px 3px 7px 0px rgba(51,51,51,0.1);
            border-radius:10px;
            .reject-title{
                height: 60px;
                line-height: 60px;
            }
            .rejectDialog-content{
                padding:0 20px;
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
            .reject-btn{
                padding: 0 20px;
                margin-top: 20px;
                text-align: right;
            }
            .mar-r-10{
                margin-right: 10px;
            }
            .mar-t-20{
                margin-top: 20px;
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