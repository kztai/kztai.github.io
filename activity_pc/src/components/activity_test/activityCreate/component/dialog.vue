<template>
    <div class="success-dialog">
        <div class="row">
            <!--<lm-image-->
                    <!--ref="smImg"-->
                    <!--refId="smImg"-->
                    <!--v-show="pvt_isShow.v1 === 'smImg'"-->
                    <!--:paraVarPair="pvt_v1.smImg.paraVarPair"-->
                    <!--:para="pvt_v1.smImg.para"-->
                    <!--:attr="pvt_v1.smImg.attr">-->
            <!--</lm-image>-->
            <img src="../../../../assets/success.png" alt="" width="95" height="90">
        </div>
        <div class="row mar-t-20">
            <lm-link-text
                    ref="smText1"
                    refId="smText1"
                    v-show="pvt_isShow.v2 === 'smText1'"
                    :paraVarPair="pvt_v2.smText1.paraVarPair"
                    :para="pvt_v2.smText1.para"
                    :attr="pvt_v2.smText1.attr">
            </lm-link-text>
        </div>
        <div class="row mar-t-20">
            <lm-link-text
                    ref="smText2"
                    refId="smText2"
                    v-show="pvt_isShow.v3 === 'smText2'"
                    :paraVarPair="pvt_v3.smText2.paraVarPair"
                    :para="pvt_v3.smText2.para"
                    :attr="pvt_v3.smText2.attr">
            </lm-link-text>
        </div>
        <div class="row mar-t-20">
            <div class="col  mar-r-20">
                <lm-button
                        ref="smButton1"
                        refId="smButton1"
                        v-show="pvt_isShow.v4 === 'smButton1'"
                        :paraVarPair="pvt_v4.smButton1.paraVarPair"
                        :para="pvt_v4.smButton1.para"
                        :attr="pvt_v4.smButton1.attr">
                </lm-button>
            </div>
            <div class="col">
                <lm-button
                        ref="smButton2"
                        refId="smButton2"
                        v-show="pvt_isShow.v5 === 'smButton2'"
                        :paraVarPair="pvt_v5.smButton2.paraVarPair"
                        :para="pvt_v5.smButton2.para"
                        :attr="pvt_v5.smButton2.attr">
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
                    vessel: ["v1","v2","v3","v4","v5"],
                    subModule: ["smImg","smText1","smText2","smButton1","smButton2"]
                },
                pvt_isShow: {
                    "v1": null,
                    "v2": null,
                    "v3": null,
                    "v4": null,
                    "v5": null,
                },

                pvt_eventPortInput: ['listPageIn','detailPageIn'],


                mac:mac.mac,
                dialogText:'',
                tipText:''
            }
        },
        computed: {
           pvt_v1: function () {
                return {
                    smImg: {
                        paraVarPair: {},
                        para: {

                        },
                        attr: {

                        }
                    }
                }
            },
            pvt_v2: function () {
                return {
                    smText1: {
                        paraVarPair: {},
                        para: {
                            textData: this.dialogText
                        },
                        attr: {
                            fontSize: '22px', height: '30px', color: '#303133',fontWeight:'100'
                        }
                    }
                }
            },
            pvt_v3: function () {
                return {
                    smText2: {
                        paraVarPair: {},
                        para: {
                            textData: this.tipText
                        },
                        attr: {
                            fontSize: '14px', height: '40px', color: '#606266'
                        }
                    }
                }
            },
            pvt_v4: function () {
                return {
                    smButton1: {
                        paraVarPair: {},
                        para: {
                            name:['查看活动详情','']
                        },
                        attr: {
                            type:'primary',height: '40px'
                        }
                    }
                }
            },
            pvt_v5: function () {
                return {
                    smButton2: {
                        paraVarPair: {},
                        para: {
                            name:['查看活动列表','']
                        },
                        attr: {
                            height: '40px'
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
                    sm1: 'smImg',
                    sm2: 'smText1',
                    sm3: 'smText2',
                    sm4: 'smButton1',
                    sm5: 'smButton2'
                };

                if (successCallBack !== null) {
                    errorCallBack = $this.setPara(successCallBack, errorCallBack);
                    successCallBack = null;
                }
                para = errorCallBack;

                while (1) {
                    dbFlag = 0;
                    switch (para.nStep) {
                        case 0:
                            $this.dialogText =  $this.para.dialogText;
                            if($this.dialogText==='活动表单已提交，请等待审核'){
                                $this.tipText = '审核通过后即可发布';
                            }else{
                                $this.tipText = '';
                            }
                            $this.forceUpdateData(function () {
                                para.nStep = 'startModule2';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            })
                            break;
                        // case 'startModule1':
                        //     $this.sm[ref.sm1].startModule(function () {
                        //         para.nStep = 'startModule2';
                        //         dbFlag += 1;
                        //         if (dbFlag === 2) {
                        //             $this.startModule(successCallBack, errorCallBack)
                        //         }
                        //     }, para.errorCallBack);
                        //     break;
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
                                para.nStep = 'showModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showModules':
                            //显示子组件
                            // let refId = ["smImg","smText1","smText2","smButton1","smButton2"];
                            let refId = ["smText1","smText2","smButton1","smButton2"];
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
            setButtonPrimary:function(successCallBack, errorCallBack){
                let $this = this;
                this.type = 'primary';
                $this.$nextTick(() => {
                    $this.sm['smButton'].startModule(function () {
                        successCallBack();
                    },function (error) {
                        errorCallBack(error)
                    })
                })
            },

            smButton1_buttonClickEvent:function () {
                this.ep.listPageIn()
            },
            smButton2_buttonClickEvent:function () {
                this.ep.detailPageIn()
            },
        }
    }
</script>
<style lang="scss" scoped>
    .success-dialog{
        width: 600px;
        margin: 0 auto;
        text-align: center;
        .mar-t-20{
            margin-top: 20px;
        }
    }
    .mar-r-20{
        margin-right: 20px;
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