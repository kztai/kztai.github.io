<template>
    <div class="group-dv">
        <div class="group-top">
            <div class="row group-img">
                <!--<lm-image-->
                <!--ref="smImg"-->
                <!--refId="smImg"-->
                <!--v-show="pvt_isShow.v1 === 'smImg'"-->
                <!--:paraVarPair="pvt_v1.smImg.paraVarPair"-->
                <!--:para="pvt_v1.smImg.para"-->
                <!--:attr="pvt_v1.smImg.attr">-->
                <!--</lm-image>-->
                <img src="../../../../assets/group.png" alt="" width="60" height="60">
            </div>
            <div class="row group-name">
                <div class="col">
                    <lm-link-text
                            ref="smText1"
                            refId="smText1"
                            v-show="pvt_isShow.v2 === 'smText1'"
                            :paraVarPair="pvt_v2.smText1.paraVarPair"
                            :para="pvt_v2.smText1.para"
                            :attr="pvt_v2.smText1.attr">
                    </lm-link-text>
                </div>
                <div class="col group-attestation">
                    <lm-link-text
                            ref="smText8"
                            refId="smText8"
                            v-show="pvt_isShow.v3 === 'smText8'"
                            :paraVarPair="pvt_v3.smText8.paraVarPair"
                            :para="pvt_v3.smText8.para"
                            :attr="pvt_v3.smText8.attr">
                    </lm-link-text>
                </div>
            </div>
            <div class="row group-fanAttention">
                <div class="col col_w_10 bor-right">
                    <div class="row">
                        <lm-link-text
                                ref="smText2"
                                refId="smText2"
                                v-show="pvt_isShow.v4 === 'smText2'"
                                :paraVarPair="pvt_v4.smText2.paraVarPair"
                                :para="pvt_v4.smText2.para"
                                :attr="pvt_v4.smText2.attr">
                        </lm-link-text>
                    </div>
                    <div class="row">
                        <lm-link-text
                                ref="smText3"
                                refId="smText3"
                                v-show="pvt_isShow.v5 === 'smText3'"
                                :paraVarPair="pvt_v5.smText3.paraVarPair"
                                :para="pvt_v5.smText3.para"
                                :attr="pvt_v5.smText3.attr">
                        </lm-link-text>
                    </div>
                </div>
                <div class="col col_w_10">
                    <div class="row">
                        <lm-link-text
                                ref="smText4"
                                refId="smText4"
                                v-show="pvt_isShow.v6 === 'smText4'"
                                :paraVarPair="pvt_v6.smText4.paraVarPair"
                                :para="pvt_v6.smText4.para"
                                :attr="pvt_v6.smText4.attr">
                        </lm-link-text>
                    </div>
                    <div class="row">
                        <lm-link-text
                                ref="smText5"
                                refId="smText5"
                                v-show="pvt_isShow.v7 === 'smText5'"
                                :paraVarPair="pvt_v7.smText5.paraVarPair"
                                :para="pvt_v7.smText5.para"
                                :attr="pvt_v7.smText5.attr">
                        </lm-link-text>
                    </div>
                </div>
            </div>
        </div>
        <div class="row flex">
            <div class="col">
                <lm-button
                        ref="smButton1"
                        refId="smButton1"
                        v-show="pvt_isShow.v8 === 'smButton1'"
                        :paraVarPair="pvt_v8.smButton1.paraVarPair"
                        :para="pvt_v8.smButton1.para"
                        :attr="pvt_v8.smButton1.attr">
                </lm-button>
            </div>
            <div class="col">
                <lm-button
                        ref="smButton2"
                        refId="smButton2"
                        v-show="pvt_isShow.v9 === 'smButton2'"
                        :paraVarPair="pvt_v9.smButton2.paraVarPair"
                        :para="pvt_v9.smButton2.para"
                        :attr="pvt_v9.smButton2.attr">
                </lm-button>
            </div>
        </div>
        <div class="group-bottom">
            <div class="row synopsis-title">
                <lm-link-text
                        ref="smText6"
                        refId="smText6"
                        v-show="pvt_isShow.v10 === 'smText6'"
                        :paraVarPair="pvt_v10.smText6.paraVarPair"
                        :para="pvt_v10.smText6.para"
                        :attr="pvt_v10.smText6.attr">
                </lm-link-text>
            </div>
            <div class="row">
                <lm-link-text
                        ref="smText7"
                        refId="smText7"
                        v-show="pvt_isShow.v11 === 'smText7'"
                        :paraVarPair="pvt_v11.smText7.paraVarPair"
                        :para="pvt_v11.smText7.para"
                        :attr="pvt_v11.smText7.attr">
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
                    vessel: ["v1", "v2","v3", "v4","v5", "v6","v7", "v8","v9", "v10", "v11"],
                    subModule: ["smImg", "smText1", "smText8", "smText2", "smText3", "smText4", "smText5", "smButton1", "smButton2", "smText6", "smText7"]
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
                },

                pvt_eventPortInput: ['getAttentionStateEvent','groupAttentionEvent','getSumEvent'],


                mac: mac.mac,
                debugFlag: true,
                btnName:['关注','el-icon-plus'],
                synopsis:'XXX成立于2013年，以联盟为平台，志在打造一个公平、公正、公开的跨境电商界生态圈，为成员卖家提供物流、产品、人才等服务。XXX成立于2013年，以联盟为平台，志在打造一个公平、公正、公开的跨境电商界生',
                fanNumber:0,
                attentionNumber:0
            }
        },
        computed: {
            pvt_v1: function () {
                return {
                    smImg: {
                        paraVarPair: {},
                        para: {
                            image:[{
                                $table: this.mac.tb.groupActivity,
                                $arrField: [this.mac.fd.groupActivity.poster],
                                $arrValue: [this.para.activityID]
                            }],
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
                            // textData:[{
                            //     $table: this.mac.tb.groupActivity,
                            //     $arrField: [this.mac.fd.groupActivity.groupName],
                            //     $arrValue: [this.para.activityID]
                            // }],
                            textData:'深圳市XX有限公司'
                        },
                        attr: {
                            fontSize: '16px', height: '24px',color:'#303133',label:'div',textAlign:'center',fontWeight:'500'
                        }
                    },
                }
            },
            pvt_v3: function () {
                return {
                    smText8: {
                        paraVarPair: {},
                        para: {
                            textData: 'V'
                        },
                        attr: {
                            fontSize: '12px', height: '16px',color:'rgba(254,254,254,1)'
                        }
                    },
                }
            },
            pvt_v4: function () {
                return {
                    smText2: {
                        paraVarPair: {},
                        para: {
                            textData: this.attentionNumber
                        },
                        attr: {
                            fontSize: '16px', height: '20px',color:'#303133',label:'div',textAlign:'center',fontWeight:'500'
                        }
                    },
                }
            },
            pvt_v5: function () {
                return {
                    smText3: {
                        paraVarPair: {},
                        para: {
                            textData: '关注'
                        },
                        attr: {
                            fontSize: '12px', height: '20px',color:'#909399',label:'div',textAlign:'center',
                        }
                    },
                }
            },
            pvt_v6: function () {
                return {
                    smText4: {
                        paraVarPair: {},
                        para: {
                            textData: this.fanNumber
                        },
                        attr: {
                            fontSize: '16px',  height: '20px',color:'#303133',label:'div',textAlign:'center',fontWeight:'500'
                        }
                    },
                }
            },
            pvt_v7: function () {
                return {
                    smText5: {
                        paraVarPair: {},
                        para: {
                            textData: '粉丝'
                        },
                        attr: {
                            fontSize: '12px', height: '20px',color:'#909399',label:'div',textAlign:'center',
                        }
                    },
                }
            },
            pvt_v8: function () {
                return {
                    smButton1: {
                        paraVarPair: {},
                        para: {
                            name: this.btnName
                        },
                        attr: {
                            height:'34px',width:'110px',type:'primary'
                        }
                    }
                }
            },
            pvt_v9: function () {
                return {
                    smButton2: {
                        paraVarPair: {},
                        para: {
                            name: ['留言','']
                        },
                        attr: {
                            height:'34px',width:'110px'
                        }
                    }
                }
            },
            pvt_v10: function () {
                return {
                    smText6: {
                        paraVarPair: {},
                        para: {
                            textData: 'TA的简介'
                        },
                        attr: {
                            fontSize: '16px', height: '40px', color: '#303133'
                        }
                    }
                }
            },
            pvt_v11: function () {
                return {
                    smText7: {
                        paraVarPair: {},
                        para: {
                            textData: this.synopsis
                        },
                        attr: {
                            fontSize: '14px', height: '28px', color: '#606266'
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
                let fnname = 'group.startModule';
                let dbData;
                let ref = {
                    sm1: 'smImg',
                    sm2: 'smText1',
                    sm3: 'smText8',
                    sm4: 'smText2',
                    sm5: 'smText3',
                    sm6: 'smText4',
                    sm7: 'smText5',
                    sm8: 'smButton1',
                    sm9: 'smButton2',
                    sm10: 'smText6',
                    sm11: 'smText7',
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
                            para.nStep = 'getSumEvent';
                            dbFlag += 1;
                            break;
                        case 'getSumEvent':
                            para.data = {};
                            para.data['groupID'] = 1;
                            $this.ep.getSumEvent(para.data,function (result) {
                                $this.attentionNumber = result[0];
                                $this.fanNumber = result[1];
                                para.nStep = 'getAttentionStateIn';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            },function (error) {
                                console.error(error)
                            })
                            break;
                        case 'getAttentionStateIn':
                            para.data = {};
                            para.data['groupID'] = 1;
                            para.data['userID'] = $this.getUserID()['id'];
                            $this.ep.getAttentionStateEvent(para.data,function (result) {
                                if(result===1){
                                    $this.btnName = ['已关注','el-icon-check'];
                                }else{
                                    $this.btnName = ['关注','el-icon-plus'];
                                }
                                $this.forceUpdateData(function () {
                                    para.nStep = 'startModule2';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack)
                                    }
                                })
                            },function (error) {
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
                                para.nStep = 'showModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showModules':
                            let refId = ["smImg", "smText1", "smText8", "smText2", "smText3", "smText4", "smText5", "smButton1", "smButton2", "smText6", "smText7"];
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
            groupAttention:function(){
                let $this = this;
                if(!$this.para.isLogin){
                    $this.$confirm('请先登录再进行操作', '提示', {
                        confirmButtonText: '前往登录',
                        cancelButtonText: '取消',
                        type: 'warning'
                    }).then(() => {
                        console.log('打开登录页面')
                    }).catch(() => {

                    });
                    return
                }
                let data = {};
                data['groupID'] = 1;
                data['userID'] = $this.getUserID()['id'];
                if($this.btnName[0] === '已关注'){
                    data['commandType'] = 1;
                    $this.fanNumber -=1;
                    $this.btnName = ['关注','el-icon-plus'];
                    $this.forceUpdateData(function () {
                        $this.sm['smButton1'].startModule(function () {},function (error) {console.error(error)})
                        $this.sm['smText4'].startModule(function () {},function (error) {console.error(error)})
                    })
                    $this.ep.groupAttentionEvent(data,function () {})
                }else if($this.btnName[0] === '关注'){
                    data['commandType'] = 0;
                    $this.fanNumber +=1;
                    $this.btnName = ['已关注','el-icon-check'];
                    $this.forceUpdateData(function () {
                        $this.sm['smButton1'].startModule(function () {},function (error) {console.error(error)})
                        $this.sm['smText4'].startModule(function () {},function (error) {console.error(error)})
                    })
                    $this.ep.groupAttentionEvent(data,function () {
                    })
                }

            },

            smButton1_buttonClickEvent:function(){
                this.groupAttention()
            },
            getUserID:function(){
                return {id:1,name:'张三'}
            },
            getUrlPara:function(){
                return {id:1}
            },
        }
    }
</script>
<style lang="scss">
    .reply-input {
        .discuss-btn {
            .lm-button .el-button {
                padding: 0;
                font-size: 14px;
            }
        }

        .reply-btns {
            .lm-button .el-button {
                padding: 0;
                font-size: 14px;
            }
        }

        .svg-container {
            display: none;
        }
    }
</style>
<style lang="scss" scoped>
    .group-dv {
        .group-name{
            line-height: 24px;
            height: 24px;
            overflow: hidden;
            text-align: center;
        }
        .group-top{
            background:rgba(255,255,255,1);
            box-shadow:0px 0px 8px 0px rgba(48,49,51,0.1);
            border-radius:4px;
            padding:20px 0;
        }
        .group-bottom{
            background:rgba(255,255,255,1);
            box-shadow:0px 0px 8px 0px rgba(48,49,51,0.1);
            border-radius:4px;
            padding:5px 15px 10px 15px;
            margin-top: 10px;
            .synopsis-title{
                border-bottom: 1px solid rgba(245,245,245,1);
                margin-bottom: 10px;
            }
        }
        .group-img{
            text-align: center;
            margin-bottom: 10px;
        }
        .col.group-attestation{
            width: 16px;
            height:16px;
            background:linear-gradient(90deg,rgba(32,172,245,1) 0%,rgba(15,156,230,1) 50%,rgba(0,142,215,1) 100%);
            border-radius:100%;
            line-height: 16px;
            text-align: center;
            margin:-3px 0 0 10px;
            vertical-align: middle;
        }
        .group-fanAttention{
            text-align: center;
            padding: 0 30px;
            margin-top: 15px;
        }
        .bor-right{
            border-right: 1px solid #E5E5E5;
        }
        .flex{
            display: flex;
            justify-content: space-between;
            margin-top: 10px;
        }
    }



    .mar-r-5 {
        margin-right: 5px;
    }

    .mar-10 {
        margin: 10px 0 4px 0;
    }

    .mar-b-5 {
        margin-bottom: 5px;
    }

    .mar-r-10 {
        margin-right: 10px;
    }

    .mar-5 {
        margin: 0 5px;
    }

    .f-r {
        float: right;
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