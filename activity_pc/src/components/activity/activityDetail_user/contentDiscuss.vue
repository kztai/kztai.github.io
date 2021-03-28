<template>
    <div class="content-discuss">
         <div class="row detail-flex">
             <div class="col flex-left">
                 <div class="details">
                     <div class="row detail-title">
                         <lm-link-text
                                 ref="smText3"
                                 refId="smText3"
                                 v-show="pvt_isShow.v3 === 'smText3'"
                                 :paraVarPair="pvt_v3.smText3.paraVarPair"
                                 :para="pvt_v3.smText3.para"
                                 :attr="pvt_v3.smText3.attr">
                         </lm-link-text>
                     </div>
                     <div class="detail-content" v-html="readHtml">

                     </div>
                     <div class="row details-praise">
                         <lm-button
                                 ref="smButton1"
                                 refId="smButton1"
                                 v-show="pvt_isShow.v4 === 'smButton1'"
                                 :paraVarPair="pvt_v4.smButton1.paraVarPair"
                                 :para="pvt_v4.smButton1.para"
                                 :attr="pvt_v4.smButton1.attr">
                         </lm-button>
                     </div>
                     <div class="row details-btns">
                         <div class="col f-l">
                             <div>
                                 <div class="col">
                                     <lm-link-text
                                             ref="smText4"
                                             refId="smText4"
                                             v-show="pvt_isShow.v5 === 'smText4'"
                                             :paraVarPair="pvt_v5.smText4.paraVarPair"
                                             :para="pvt_v5.smText4.para"
                                             :attr="pvt_v5.smText4.attr">
                                     </lm-link-text>
                                 </div>
                                 <div class="col label-text">
                                     <lm-link-text
                                             ref="smLabelText"
                                             refId="smLabelText"
                                             v-show="pvt_isShow.v6 === 'smLabelText'"
                                             v-for="(item, index) in pvt_v6.smLabelText.forData"
                                             :number="index"
                                             :paraVarPair="pvt_v6.smLabelText.paraVarPair"
                                             :para="item.para"
                                             :attr="item.attr">
                                     </lm-link-text>
                                 </div>
                             </div>
                         </div>
                         <div class="col f-r">
                             <div class="row">
                                 <div class="col report-btn">
                                     <lm-button
                                             ref="smButton2"
                                             refId="smButton2"
                                             v-show="pvt_isShow.v7 === 'smButton2'"
                                             :paraVarPair="pvt_v7.smButton2.paraVarPair"
                                             :para="pvt_v7.smButton2.para"
                                             :attr="pvt_v7.smButton2.attr">
                                     </lm-button>
                                 </div>
                                 <div class="col mar-l-10 share-btn-dv">
                                     <div>
                                         <lm-button
                                                 ref="smButton3"
                                                 refId="smButton3"
                                                 v-show="pvt_isShow.v8 === 'smButton3'"
                                                 :paraVarPair="pvt_v8.smButton3.paraVarPair"
                                                 :para="pvt_v8.smButton3.para"
                                                 :attr="pvt_v8.smButton3.attr">
                                         </lm-button>
                                     </div>
                                     <div class="share-btn-code">
                                         <share-code
                                                 ref="smShareCode"
                                                 refId="smShareCode"
                                                 v-show="pvt_isShow.v2 === 'smShareCode'"
                                                 :paraVarPair="pvt_v2.smShareCode.paraVarPair"
                                                 :para="pvt_v2.smShareCode.para"
                                                 :attr="pvt_v2.smShareCode.attr">
                                         </share-code>
                                     </div>
                                 </div>
                                 <div class="col favorite-btn">
                                     <lm-button
                                             ref="smButton4"
                                             refId="smButton4"
                                             v-show="pvt_isShow.v9 === 'smButton4'"
                                             :paraVarPair="pvt_v9.smButton4.paraVarPair"
                                             :para="pvt_v9.smButton4.para"
                                             :attr="pvt_v9.smButton4.attr">
                                     </lm-button>
                                 </div>
                             </div>
                         </div>
                     </div>
                 </div>
                 <div class="sign">
                     <div class="row detail-title">
                         <lm-link-text
                                 ref="smText5"
                                 refId="smText5"
                                 v-show="pvt_isShow.v10 === 'smText5'"
                                 :paraVarPair="pvt_v10.smText5.paraVarPair"
                                 :para="pvt_v10.smText5.para"
                                 :attr="pvt_v10.smText5.attr">
                         </lm-link-text>
                     </div>
                     <div class="row sign-order-dv">
                         <sign-order
                                 ref="smSignOrder"
                                 refId="smSignOrder"
                                 v-show="pvt_isShow.v11 === 'smSignOrder'"
                                 v-for="(item, index) in pvt_v11.smSignOrder.forData"
                                 :number="index"
                                 :paraVarPair="pvt_v11.smSignOrder.paraVarPair"
                                 :para="item.para"
                                 :attr="item.attr">
                         </sign-order>
                     </div>
                     <div class="row sign-more">
                         <lm-button
                                 ref="smButton5"
                                 refId="smButton5"
                                 v-show="pvt_isShow.v12 === 'smButton5'"
                                 :paraVarPair="pvt_v12.smButton5.paraVarPair"
                                 :para="pvt_v12.smButton5.para"
                                 :attr="pvt_v12.smButton5.attr">
                         </lm-button>
                         <lm-link-text
                                 ref="smText6"
                                 refId="smText6"
                                 v-show="pvt_isShow.v12 === 'smText6'"
                                 :paraVarPair="pvt_v12.smText6.paraVarPair"
                                 :para="pvt_v12.smText6.para"
                                 :attr="pvt_v12.smText6.attr">
                         </lm-link-text>
                     </div>
                     <div class="sign-empty">
                         <lm-link-text
                                 ref="smText11"
                                 refId="smText11"
                                 v-show="pvt_isShow.v18 === 'smText11'"
                                 :paraVarPair="pvt_v18.smText11.paraVarPair"
                                 :para="pvt_v18.smText11.para"
                                 :attr="pvt_v18.smText11.attr">
                         </lm-link-text>
                     </div>
                 </div>
                 <div class="discuss-dv">
                     <div class="row detail-title">
                         <lm-link-text
                                 ref="smText7"
                                 refId="smText7"
                                 v-show="pvt_isShow.v13 === 'smText7'"
                                 :paraVarPair="pvt_v13.smText7.paraVarPair"
                                 :para="pvt_v13.smText7.para"
                                 :attr="pvt_v13.smText7.attr">
                         </lm-link-text>
                     </div>
                     <div class="row discuss-input">
                         <lm-input-text
                                 ref="smInput1"
                                 refId="smInput1"
                                 v-show="pvt_isShow.v20 === 'smInput1'"
                                 :paraVarPair="pvt_v20.smInput1.paraVarPair"
                                 :para="pvt_v20.smInput1.para"
                                 :attr="pvt_v20.smInput1.attr">
                         </lm-input-text>
                     </div>
                     <div class="row discuss-publis-btn">
                         <lm-button
                                 ref="smButton7"
                                 refId="smButton7"
                                 v-show="pvt_isShow.v21 === 'smButton7'"
                                 :paraVarPair="pvt_v21.smButton7.paraVarPair"
                                 :para="pvt_v21.smButton7.para"
                                 :attr="pvt_v21.smButton7.attr">
                         </lm-button>
                     </div>
                     <div class="discuss-content">
                         <div class="row">
                             <div class="col mar-r-10">
                                 <lm-link-text
                                         ref="smText8"
                                         refId="smText8"
                                         v-show="pvt_isShow.v14 === 'smText8'"
                                         :paraVarPair="pvt_v14.smText8.paraVarPair"
                                         :para="pvt_v14.smText8.para"
                                         :attr="pvt_v14.smText8.attr">
                                 </lm-link-text>
                             </div>
                             <div class="col">
                                 <lm-link-text
                                         ref="smText9"
                                         refId="smText9"
                                         v-show="pvt_isShow.v15 === 'smText9'"
                                         :paraVarPair="pvt_v15.smText9.paraVarPair"
                                         :para="pvt_v15.smText9.para"
                                         :attr="pvt_v15.smText9.attr">
                                 </lm-link-text>
                             </div>
                         </div>
                         <div class="row">
                             <discuss
                                     ref="smDiscuss"
                                     refId="smDiscuss"
                                     v-show="pvt_isShow.v16 === 'smDiscuss'"
                                     v-for="(item, index) in pvt_v16.smDiscuss.forData"
                                     :number="index"
                                     :paraVarPair="pvt_v16.smDiscuss.paraVarPair"
                                     :para="item.para"
                                     :attr="item.attr">
                             </discuss>
                         </div>
                         <div class="discuss-more">
                             <lm-button
                                     ref="smButton6"
                                     refId="smButton6"
                                     v-show="pvt_isShow.v17 === 'smButton6'"
                                     :paraVarPair="pvt_v17.smButton6.paraVarPair"
                                     :para="pvt_v17.smButton6.para"
                                     :attr="pvt_v17.smButton6.attr">
                             </lm-button>
                             <lm-link-text
                                     ref="smText10"
                                     refId="smText10"
                                     v-show="pvt_isShow.v17 === 'smText10'"
                                     :paraVarPair="pvt_v17.smText10.paraVarPair"
                                     :para="pvt_v17.smText10.para"
                                     :attr="pvt_v17.smText10.attr">
                             </lm-link-text>
                         </div>
                         <div class="discuss-empty">
                             <lm-link-text
                                     ref="smText12"
                                     refId="smText12"
                                     v-show="pvt_isShow.v19 === 'smText12'"
                                     :paraVarPair="pvt_v19.smText12.paraVarPair"
                                     :para="pvt_v19.smText12.para"
                                     :attr="pvt_v19.smText12.attr">
                             </lm-link-text>
                         </div>
                     </div>
                 </div>
             </div>
             <div class="col flex-right">
                 <div class="flex-right-dv">
                     <group
                             ref="smGroup"
                             refId="smGroup"
                             v-show="pvt_isShow.v1 === 'smGroup'"
                             :paraVarPair="pvt_v1.smGroup.paraVarPair"
                             :para="pvt_v1.smGroup.para"
                             :attr="pvt_v1.smGroup.attr">
                     </group>
                 </div>
             </div>
         </div>
        <div class="row">
            <report-dialog
                ref="smDialog"
                refId="smDialog"
                v-show="pvt_isShow.v22 === 'smDialog'"
                :paraVarPair="pvt_v22.smDialog.paraVarPair"
                :para="pvt_v22.smDialog.para"
                :attr="pvt_v22.smDialog.attr">
            </report-dialog>
        </div>
    </div>
</template>

<script>
    import libSys
        from '@/components/baseComponent/libSys.js';
    import libUpload
        from '@/components/baseComponent/libUpload.js';
    import signOrder from './component/signOrder';
    import Discuss from "./component/discuss";
    import group from "./component/group";
    import shareCode from './component/shareCode';
    import reportDialog from './component/dialog';

    export default {
        components: {Discuss, signOrder,group,shareCode,reportDialog},
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ['sys'],
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ["v1","v2","v3","v4","v5","v6","v7","v8","v9","v10","v11","v12","v12","v13","v14","v15","v16","v17","v17","v18","v19","v20","v21","v22"],
                    subModule: ["smGroup","smShareCode","smText3","smButton1","smText4","smLabelText","smButton2","smButton3","smButton4","smText5","smSignOrder","smButton5","smText6","smText7","smText8","smText9","smDiscuss","smButton6","smText10","smText11","smText12","smInput1","smButton7","smDialog"]
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
                    "v14": null,
                    "v15": null,
                    "v16": null,
                    "v17": null,
                    "v18": null,
                    "v19": null,
                    "v20": null,
                    "v21": null,
                    "v22": null,
                },

                pvt_eventPortInput: ['getHandleStateEvent','activityHandleEvent','getAttentionStateEvent','groupAttentionEvent','discussQuestionEvent','getSumEvent'],


                mac:mac.mac,
                debugFlag: true,
                synopsis:'XXX成立于2013年，以联盟为平台，志在打造一个公平、公正、公开的跨境电商界生态圈，为成员卖家提供物流、产品、人才等服务。XXX成立于2013年，以联盟为平台，志在打造一个公平、公正、公开的跨境电商界生',
                readHtml:'',
                labelArr:[],
                signOrderArr:[],
                total:10,
                start:0,
                discussNumber:10,
                praiseNumber:['1','lm-icon-praise'],
                activityIDArr:[],
                groupActivityDiscussArr:[],
                discussStart:0,
                discussTotal:10,
                tipText:'已显示全部结果',
                icon:'',
                signTIpText:'已显示全部结果',
                signIcon:'',
                favoriteBtn:['收藏', 'el-icon-star-off'],
                btnType:'primary',
                shareCodeFlag:false,
                inputText:'',
                reportType:'report'
            }
        },
        computed: {
            pvt_v1: function () {
                return {
                    smGroup: {
                        paraVarPair: {},
                        para: {
                            actvitiyID:this.para.actvitiyID,
                        },
                        attr: {

                        }
                    }
                }
            },
            pvt_v2: function () {
                return {
                    smShareCode: {
                        paraVarPair: {},
                        para: {
                            $arrValue: [this.para.activityID]
                        },
                        attr: {
                            class:'content'
                        }
                    }
                }
            },
            pvt_v3: function () {
                return {
                    smText3: {
                        paraVarPair: {},
                        para: {
                            textData: '活动详细'
                        },
                        attr: {
                            fontSize: '20px', height: '48px', color: '#303133',fontWeight:'bold'
                        }
                    }
                }
            },
            pvt_v4: function () {
                return {
                    smButton1: {
                        paraVarPair: {},
                        para: {
                            name:this.praiseNumber
                        },
                        attr: {
                            type:this.btnType
                        }
                    }
                }
            },
            pvt_v5: function () {
                return {
                    smText4: {
                        paraVarPair: {},
                        para: {
                            textData: '关键字：'
                        },
                        attr: {
                            fontSize: '14px', height: '28px', color: '#C0C4CC'
                        }
                    }
                }
            },
            pvt_v6: function () {
                let loopModule = {
                    smLabelText: {
                        para: {
                            textData:this.labelArr
                        },
                        attr: {
                        },
                    },
                };
                let forData = this.pvt_createForData(loopModule);
                return {
                    smLabelText: {
                        paraVarPair: {},
                        forData : forData.smLabelText,
                    },
                }
            },
            pvt_v7: function () {
                return {
                    smButton2: {
                        paraVarPair: {},
                        para: {
                            name:['举报','el-icon-warning']
                        },
                        attr: {
                            type:'text',height:'32px'
                        }
                    }
                }
            },
            pvt_v8: function () {
                return {
                    smButton3: {
                        paraVarPair: {},
                        para: {
                            name:['分享','el-icon-message']
                        },
                        attr: {

                        }
                    }
                }
            },
            pvt_v9: function () {
                return {
                    smButton4: {
                        paraVarPair: {},
                        para: {
                            name:this.favoriteBtn
                        },
                        attr: {
                            width:'100px'
                        }
                    }
                }
            },
            pvt_v10: function () {
                return {
                    smText5: {
                        paraVarPair: {},
                        para: {
                            textData: '已报名'
                        },
                        attr: {
                            fontSize: '20px', height: '48px', color: '#303133',fontWeight:'bold'
                        }
                    }
                }
            },
            pvt_v11: function () {
                let loopModule = {
                    smSignOrder: {
                        para: {
                            groupActivityOrderID:this.signOrderArr
                        },
                        attr: {
                        },
                    },
                };
                let forData = this.pvt_createForData(loopModule);
                return {
                    smSignOrder: {
                        paraVarPair: {},
                        forData : forData.smSignOrder,
                    },
                }
            },
            pvt_v12: function () {
                return {
                    smButton5: {
                        paraVarPair: {},
                        para: {
                            name:['展开更多报名','el-icon-caret-bottom']
                        },
                        attr: {
                            type:'text',iconIsRight:true
                        }
                    },
                    smText6: {
                        paraVarPair: {},
                        para: {
                            textData: this.signTIpText
                        },
                        attr: {
                            fontSize: '12px', height: '36px', color: '#303133',textAlign:'center',icon:this.signIcon,iconIsRight:true
                        }
                    }
                }
            },
            pvt_v13: function () {
                return {
                    smText7: {
                        paraVarPair: {},
                        para: {
                            textData: '全部讨论'
                        },
                        attr: {
                            fontSize: '20px', height: '48px', color: '#303133',fontWeight:'bold'
                        }
                    }
                }
            },
            pvt_v14: function () {
                return {
                    smText8: {
                        paraVarPair: {},
                        para: {
                            textData: '全部讨论'
                        },
                        attr: {
                            fontSize: '14px', height: '20px', color: '#303133'
                        }
                    }
                }
            },
            pvt_v15: function () {
                return {
                    smText9: {
                        paraVarPair: {},
                        para: {
                            textData: this.discussNumber
                        },
                        attr: {
                            fontSize: '14px', height: '20px', color: '#C0C4CC'
                        }
                    }
                }
            },
            pvt_v16: function () {
                let loopModule = {
                    smDiscuss: {
                        para: {
                            activityID:this.activityIDArr,
                            $arrValue:this.groupActivityDiscussArr
                        },
                        attr: {
                        },
                    },
                };
                let forData = this.pvt_createForData(loopModule);
                return {
                    smDiscuss: {
                        paraVarPair: {},
                        forData : forData.smDiscuss,
                    },
                }
            },
            pvt_v17: function () {
                return {
                    smButton6: {
                        paraVarPair: {},
                        para: {
                            name:['展开更多讨论','el-icon-caret-bottom']
                        },
                        attr: {
                            type:'text',iconIsRight:true
                        }
                    },
                    smText10: {
                        paraVarPair: {},
                        para: {
                            textData: this.tipText
                        },
                        attr: {
                            fontSize: '12px', height: '36px', color: '#2c3e50',textAlign:'center',icon:this.icon,iconIsRight:true
                        }
                    }
                }
            },
            pvt_v18: function () {
                return {
                    smText11: {
                        paraVarPair: {},
                        para: {
                            textData: '还木有人报名'
                        },
                        attr: {
                            fontSize: '16px', height: '80px', color: '#B2B4B8',label:'div',textAlign:'center'
                        }
                    }
                }
            },
            pvt_v19: function () {
                return {
                    smText12: {
                        paraVarPair: {},
                        para: {
                            textData: '！还木有人评论，赶紧抢个沙发'
                        },
                        attr: {
                            fontSize: '16px', height: '80px', color: '#B2B4B8',label:'div',textAlign:'center'
                        }
                    }
                }
            },
            pvt_v20: function () {
                return {
                    smInput1: {
                        paraVarPair: {},
                        para: {
                            text: this.inputText,
                        },
                        attr: {
                            placeholder: '请在这里输入您想说的话...',type:'textarea',autosize:{minRows:5,maxRows:5}
                        }
                    }
                }
            },
            pvt_v21: function () {
                return {
                    smButton7: {
                        paraVarPair: {},
                        para: {
                            name: ['发表', ''],
                        },
                        attr: {
                            type: 'primary', height: '32px', width: '70px'
                        }
                    }
                }
            },
            pvt_v22: function () {
                return {
                    smDialog: {
                        paraVarPair: {},
                        para: {
                        },
                        attr: {
                            type: this.reportType
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
                let fnname = 'contentDiscuss.startModule';
                let ref = {
                    sm1: 'smText1',
                    sm2: 'smText2',
                    sm3: 'smText3',
                    sm4: 'smButton1',
                    sm5: 'smText4',
                    sm6: 'smLabelText',
                    sm7: 'smButton2',
                    sm8: 'smButton3',
                    sm9: 'smButton4',
                    sm10: 'smText5',
                    sm11: 'smSignOrder',
                    sm12: 'smButton5',
                    sm0: 'smText6',
                    sm13: 'smText7',
                    sm14: 'smText8',
                    sm15: 'smText9',
                    sm16: 'smDiscuss',
                    sm17: 'smButton6',
                    sm_17: 'smText10',
                    sm18: 'smText11',
                    sm19: 'smText12',
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
                        case 'startModule1':
                            $this.startModule1(function () {}, function (error) {console.error(error)});
                            para.nStep = 'startModule2';
                            dbFlag += 1;
                            if (dbFlag === 2) {
                                $this.startModule(successCallBack, errorCallBack)
                            }
                            break;
                        case 'startModule2':
                            $this.startModule2(function () {}, function (error) {console.error(error)});
                            para.nStep = 'startModule3';
                            dbFlag += 1;
                            if (dbFlag === 2) {
                                $this.startModule(successCallBack, errorCallBack)
                            }
                            break;
                        case 'startModule3':
                            $this.startModule3(function () {}, function (error) {console.error(error)});
                            para.nStep = 'startModule4';
                            dbFlag += 1;
                            if (dbFlag === 2) {
                                $this.startModule(successCallBack, errorCallBack)
                            }
                            break;
                        case 'startModule4':
                            $this.startModule4(function () {}, function (error) {console.error(error)});
                            para.nStep = 'end';
                            dbFlag += 1;
                            if (dbFlag === 2) {
                                $this.startModule(successCallBack, errorCallBack)
                            }
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
            startModule1: function (successCallBack, errorCallBack) {
                let $this = this;
                let para;
                let dbFlag;
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                let fnname = 'contentDiscuss.startModule1';
                let ref = {
                    sm1: 'smGroup',
                    sm2: 'smText2',
                    sm3: 'smText3',
                    sm4: 'smButton1',
                    sm5: 'smText4',
                    sm6: 'smLabelText',
                    sm7: 'smButton2',
                    sm8: 'smButton3',
                    sm9: 'smButton4',
                    sm10: 'smText5',
                    sm11: 'smSignOrder',
                    sm12: 'smButton5',
                    sm0: 'smText6',
                    sm13: 'smText7',
                    sm14: 'smText8',
                    sm15: 'smText9',
                    sm16: 'smDiscuss',
                    sm17: 'smButton6',
                    sm_17: 'smText10',
                    sm18: 'smText11',
                    sm19: 'smText12',
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
                            para.nStep = 'inputGroupActivityHandle';
                            dbFlag += 1;
                            break;
                        case 'inputGroupActivityHandle':
                            var geneInputData = {};
                            geneInputData[$this.mac.tb.groupActivityHandle] = null;
                            var expression = $this.mac.fd.groupActivityHandle.groupActivityID +'='+ $this.getUserID()['id'] +'&&'+$this.mac.fd.groupActivityHandle.handler +'='+$this.getUserID()['id'];
                            var start = null;
                            var total = 1;
                            var sort = ['id,asc'];
                            var destGeneSite = '';
                            $this.sys.api.conditiondataInput($this.mac.tb.groupActivityHandle, geneInputData, expression, start, total, sort, destGeneSite,function(result){
                                if(result===null){
                                    $('.favorite-btn').removeClass('active');
                                    $this.favoriteBtn = ['收藏', 'el-icon-star-off'];
                                    $this.btnType = 'primary';
                                    $('.details-praise').removeClass('active');
                                    para.nStep = 'queryGroupActivity';
                                }else{
                                    para.nStep = 'queryGroupActivityHandle';
                                }
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule1(successCallBack, errorCallBack)
                                }
                            },function (error) {
                                console.error(error)
                            })
                            break;
                        case 'queryGroupActivityHandle':
                            objectName = $this.mac.tb.groupActivityHandle;
                            parentRecord = null;
                            condition = $this.mac.fd.groupActivityHandle.groupActivityID +'='+ $this.para.activityID +'&&'+$this.mac.fd.groupActivityHandle.handle +'='+$this.getUserID()['id'];
                            dbData = {};
                            dbData[$this.mac.fd.groupActivityHandle.favorite] = [];
                            dbData[$this.mac.fd.groupActivityHandle.praise] = [];
                            $this.sys.api.recordQuery(objectName, parentRecord,condition, dbData,
                                function () {
                                    if(dbData[$this.mac.fd.groupActivityHandle.favorite][0]===$this.mac.enum.groupActivityHandle.favorite.yes){
                                        $('.favorite-btn').addClass('active');
                                        $this.favoriteBtn = ['已收藏', 'el-icon-star-off'];
                                    }else{
                                        $('.favorite-btn').removeClass('active');
                                        $this.favoriteBtn = ['收藏', 'el-icon-star-off'];
                                    }
                                    if(dbData[$this.mac.fd.groupActivityHandle.praise][0]===$this.mac.enum.groupActivityHandle.praise.yes){
                                        $('.details-praise').addClass('active');
                                        $this.btnType = '';
                                    }else{
                                        $this.btnType = 'primary';
                                        $('.details-praise').removeClass('active');
                                    }
                                    para.nStep = 'queryGroupActivity';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.startModule1(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'queryGroupActivity':
                            objectName = $this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityID];
                            dbData[$this.mac.fd.groupActivity.details] = [];
                            dbData[$this.mac.fd.groupActivity.label] = [];
                            dbData[$this.mac.fd.groupActivity.praiseNumber] = [];
                            $this.sys.api.recordRead(objectName, dbData,
                                function () {
                                    para.readHtml = dbData[$this.mac.fd.groupActivity.details][0];
                                    para.label = dbData[$this.mac.fd.groupActivity.label][0];
                                    // if($.isArray(para.label)){
                                    for(var i=0;i<para.label.length;i++){
                                        $this.labelArr.push(para.label[i].name);
                                    }
                                    // }
                                    $this.praiseNumber = [dbData[$this.mac.fd.groupActivity.praiseNumber][0].toString(),'lm-icon-praise'];
                                    para.nStep = 'getFileName';
                                    para.filePathArr = [];
                                    para.i = 0;
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.startModule1(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'getFileName':
                            objectName = $this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityID]
                            dbData[$this.mac.fd.groupActivity.picture] = [];

                            $this.sys.api.recordRead(objectName, dbData, function (result) {
                                // 获取图片信息的路径：
                                for (let i = 0; i < dbData[$this.mac.fd.groupActivity.picture][0].length; i++) {
                                    para.filePathArr.push(dbData[$this.mac.fd.groupActivity.picture][0][i].fileName);
                                }

                                para.nStep = 'initPicture';
                                if (++dbFlag === 2) {
                                    $this.startModule1(successCallBack, errorCallBack)
                                }
                            }, function () {

                            });
                            break;
                        case 'initPicture':
                            if (para.i > para.filePathArr.length - 1) {
                                para.i = 0;
                                $this.readHtml = para.readHtml;
                                $this.forceUpdateData(function(){
                                    para.nStep = 'startModule3';
                                    if (++dbFlag === 2) {
                                        $this.startModule1(successCallBack, errorCallBack)
                                    }
                                })
                                break;
                            }
                            para.filePath = para.filePathArr[para.i];

                            if (para.filePath === '') {
                                para.i++;
                                para.nStep = 'initPicture';
                                dbFlag += 1;
                                break;
                            }

                            var record = $this.para.activityID
                            var tableName = $this.mac.tb.groupActivity;
                            var fieldName = $this.mac.fd.groupActivity.picture

                            $this.sys.api.readFileBase64(tableName, fieldName, record, para.filePath, function (result) {
                                para.i++;
                                para.readHtml =para.readHtml.replace('src=""', 'src="' + result + '"');
                                para.nStep = 'initPicture';
                                if (++dbFlag === 2) {
                                    $this.startModule1(successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error);
                            });
                            break;
                        case 'startModule3':
                            $this.sm[ref.sm3].startModule(function () {
                                para.nStep = 'startModule4';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule1(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule4':
                            $this.sm[ref.sm4].startModule(function () {
                                para.nStep = 'startModule5';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule1(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule5':
                            $this.sm[ref.sm5].startModule(function () {
                                para.nStep = 'startModule6';
                                para.i = 0;
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule1(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule6':
                            if($this.labelArr.length===0){
                                para.nStep = 'startModule7';
                                dbFlag += 1;
                                break;
                            }
                            $this.sm[ref.sm6][para.i].startModule(function () {
                                para.i++;
                                if(para.i === $this.labelArr.length){
                                    para.nStep = 'startModule7';
                                }
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule1(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule7':
                            $this.sm[ref.sm7].startModule(function () {
                                para.nStep = 'startModule8';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule1(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule8':
                            $this.sm[ref.sm8].startModule(function () {
                                para.nStep = 'startModule9';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule1(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule9':
                            $this.sm[ref.sm9].startModule(function () {
                                para.nStep = 'showModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule1(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showModules':
                            //显示子组件
                            let refId = ["smText3","smButton1","smText4","smLabelText","smButton2","smButton3","smButton4"];
                            $this.showSubModule(refId, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    $this.startModule1(successCallBack, errorCallBack)
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
            startModule2: function (successCallBack, errorCallBack) {
                let $this = this;
                let para;
                let dbFlag;
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                let fnname = 'contentDiscuss.startModule2';
                let ref = {
                    sm1: 'smGroup',
                    sm2: 'smText2',
                    sm3: 'smText3',
                    sm4: 'smButton1',
                    sm5: 'smText4',
                    sm6: 'smLabelText',
                    sm7: 'smButton2',
                    sm8: 'smButton3',
                    sm9: 'smButton4',
                    sm10: 'smText5',
                    sm11: 'smSignOrder',
                    sm12: 'smButton5',
                    sm0: 'smText6',
                    sm13: 'smText7',
                    sm14: 'smText8',
                    sm15: 'smText9',
                    sm16: 'smDiscuss',
                    sm17: 'smButton6',
                    sm_17: 'smText10',
                    sm18: 'smText11',
                    sm19: 'smText12',
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
                            para.nStep = 'dataInputGroupActivityOrder';
                            dbFlag += 1;
                            break;
                        case 'dataInputGroupActivityOrder':
                            var geneInputData = {};
                            geneInputData[$this.mac.tb.groupActivityOrder] = [$this.mac.fd.groupActivityOrder.createTime,$this.mac.fd.groupActivityOrder.name,$this.mac.fd.groupActivityOrder.headPortrait];
                            var expression = $this.mac.fd.groupActivityOrder.groupActivityID +'='+$this.para.activityID+'&&'+$this.mac.fd.groupActivityOrder.status +'='+$this.mac.enum.groupActivityOrder.status.finish;
                            var start = $this.start;
                            var total = $this.total;
                            var sort = ['id,desc'];
                            var destGeneSite = '';
                            $this.sys.api.conditiondataInput($this.mac.tb.groupActivityOrder, geneInputData, expression, start, total, sort, destGeneSite,
                                function (result) {
                                    para.orderResult = result;
                                    if(result===null){
                                        result = [];
                                    }
                                    $this.signOrderArr = result;
                                    para.resultLength = result.length;
                                    $this.start += para.resultLength;
                                    $this.forceUpdateData(function(){
                                        para.nStep = 'startModule10';
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.startModule2(successCallBack, errorCallBack)
                                        }
                                    })
                                }, function (error) {
                                    console.error(error)
                                })
                            break
                        case 'startModule10':
                            $this.sm[ref.sm10].startModule(function () {
                                para.nStep = 'startModule11';
                                para.i = 0;
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule2(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule11':
                            if($this.signOrderArr.length===0){
                                para.nStep = 'startModule12';
                                dbFlag += 1;
                                break;
                            }
                            $this.sm[ref.sm11][para.i].startModule(function () {
                                para.i++;
                                if(para.i === $this.signOrderArr.length){
                                    para.nStep = 'startModule12';
                                }
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule2(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule12':
                            $this.sm[ref.sm12].startModule(function () {
                                para.nStep = 'startModule0';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule2(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule0':
                            $this.sm[ref.sm0].startModule(function () {
                                para.nStep = 'startModule18';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule2(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule18':
                            $this.sm[ref.sm18].startModule(function () {
                                para.nStep = 'showModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule2(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showModules':
                            //显示子组件
                            let refId ;
                            if(para.orderResult!==null){
                                if(para.resultLength<$this.total){
                                    refId = ["smText5","smSignOrder",'smText6'];
                                }else{
                                    refId = ["smText5","smSignOrder","smButton5"];
                                }
                            }else{
                                refId = ["smText5","smSignOrder","smText11"];
                            }
                            $this.showSubModule(refId, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    $this.startModule2(successCallBack, errorCallBack)
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
            startModule3: function (successCallBack, errorCallBack) {
                let $this = this;
                let para;
                let dbFlag;
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                let fnname = 'contentDiscuss.startModule3';
                let ref = {
                    sm1: 'smGroup',
                    sm2: 'smText2',
                    sm3: 'smText3',
                    sm4: 'smButton1',
                    sm5: 'smText4',
                    sm6: 'smLabelText',
                    sm7: 'smButton2',
                    sm8: 'smButton3',
                    sm9: 'smButton4',
                    sm10: 'smText5',
                    sm11: 'smSignOrder',
                    sm12: 'smButton5',
                    sm0: 'smText6',
                    sm13: 'smText7',
                    sm14: 'smText8',
                    sm15: 'smText9',
                    sm16: 'smDiscuss',
                    sm17: 'smButton6',
                    sm_17: 'smText10',
                    sm18: 'smText11',
                    sm19: 'smText12',
                    sm20: 'smInput1',
                    sm21: 'smButton7',
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
                            para.nStep = 'queryGroupActivity';
                            dbFlag += 1;
                            break;
                        case 'queryGroupActivity':
                            objectName = $this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityID];
                            dbData[$this.mac.fd.groupActivity.commentNumber] = [];
                            $this.sys.api.recordRead(objectName, dbData,
                                function () {
                                   $this.discussNumber = dbData[$this.mac.fd.groupActivity.commentNumber][0];
                                    para.nStep = 'dataInputGroupActivityDiscuss';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.startModule3(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'dataInputGroupActivityDiscuss':
                            var geneInputData = {};
                            geneInputData[$this.mac.tb.groupActivityDiscuss] = [null];
                            var expression = $this.mac.fd.groupActivityDiscuss.groupActivityID +'='+$this.para.activityID;
                            var start = $this.discussStart;
                            var total = 2;
                            var sort = ['id,desc'];
                            var destGeneSite = '';
                            $this.sys.api.conditiondataInput($this.mac.tb.groupActivityDiscuss, geneInputData, expression, start, total, sort, destGeneSite,
                                function (result) {
                                    para.discussResult = result;
                                    if(result===null){
                                        result = [];
                                    }
                                    $this.discussStart +=result.length;
                                    $this.groupActivityDiscussArr = result;
                                    for(var i=0;i<$this.groupActivityDiscussArr.length;i++){
                                        $this.activityIDArr.push($this.para.activityID);
                                    }
                                    $this.forceUpdateData(function(){
                                        para.nStep = 'startModule13';
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.startModule3(successCallBack, errorCallBack)
                                        }
                                    })
                                }, function (error) {
                                    console.error(error)
                                })
                            break
                        case 'startModule13':
                            $this.sm[ref.sm13].startModule(function () {
                                para.nStep = 'startModule14';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule3(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule14':
                            $this.sm[ref.sm14].startModule(function () {
                                para.nStep = 'startModule15';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule3(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule15':
                            $this.sm[ref.sm15].startModule(function () {
                                para.nStep = 'startModule16';
                                para.i = 0;
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule3(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule16':
                            if($this.groupActivityDiscussArr.length===0){
                                para.nStep = 'startModule17';
                                dbFlag += 1;
                                break;
                            }
                            $this.sm[ref.sm16][para.i].startModule(function () {
                                para.i++;
                                if(para.i === $this.groupActivityDiscussArr.length){
                                    para.nStep = 'startModule17';
                                }
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule3(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule17':
                            $this.sm[ref.sm17].startModule(function () {
                                para.nStep = '_startModule17';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule3(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case '_startModule17':
                            $this.sm[ref.sm_17].startModule(function () {
                                para.nStep = 'startModule19';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule3(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule19':
                            $this.sm[ref.sm19].startModule(function () {
                                para.nStep = 'startModule20';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule3(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule20':
                            $this.sm[ref.sm20].startModule(function () {
                                para.nStep = 'startModule21';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule3(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule21':
                            $this.sm[ref.sm21].startModule(function () {
                                para.nStep = 'showModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule3(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showModules':
                            //显示子组件
                            let refId = ["smText7","smText8","smText9","smDiscuss","smInput1","smButton7"]
                            if(para.discussResult!==null){
                                if($this.groupActivityDiscussArr.length<2){
                                    refId.push("smText9");
                                }else{
                                    refId.push("smButton6");
                                }
                            }else{
                                refId.push("smText12");
                            }
                            $this.showSubModule(refId, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    $this.startModule3(successCallBack, errorCallBack)
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
            startModule4: function (successCallBack, errorCallBack) {
                let $this = this;
                let para;
                let dbFlag;
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                let fnname = 'contentDiscuss.startModule4';
                let ref = {
                    sm1: 'smGroup',
                    sm2: 'smText2',
                    sm3: 'smText3',
                    sm4: 'smButton1',
                    sm5: 'smText4',
                    sm6: 'smLabelText',
                    sm7: 'smButton2',
                    sm8: 'smButton3',
                    sm9: 'smButton4',
                    sm10: 'smText5',
                    sm11: 'smSignOrder',
                    sm12: 'smButton5',
                    sm0: 'smText6',
                    sm13: 'smText7',
                    sm14: 'smText8',
                    sm15: 'smText9',
                    sm16: 'smDiscuss',
                    sm17: 'smButton6',
                    sm_17: 'smText10',
                    sm18: 'smText11',
                    sm19: 'smText12',
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
                        case 'startModule1':
                            $this.sm[ref.sm1].startModule(function () {
                                para.nStep = 'showModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule4(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showModules':
                            //显示子组件
                            let refId = ["smGroup"]
                            $this.showSubModule(refId, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    $this.startModule4(successCallBack, errorCallBack)
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

            loadMore:function (successCallBack, errorCallBack) {
                let $this = this;
                let para;
                let dbFlag;
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                let fnname = 'contentDiscuss.loadMore';

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
                            $this.signTIpText = '加载中';
                            $this.signIcon = 'el-icon-loading';
                            $this.forceUpdateData(function(){
                                para.nStep = '_showModule';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.loadMore(successCallBack, errorCallBack)
                                }
                            })
                            break
                        case '_showModule':
                            $this.showSubModule(["smText6"], true, function () {
                                para.nStep = '_startModule';
                                if (++dbFlag === 2) {
                                    $this.loadMore(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break
                        case '_startModule':
                            $this.sm["smText6"].startModule(function () {
                                para.nStep = 'dataInputGroupActivityOrder';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.loadMore(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break
                        case 'dataInputGroupActivityOrder':
                            var geneInputData = {};
                            geneInputData[$this.mac.tb.groupActivityOrder] = [$this.mac.fd.groupActivityOrder.createTime,$this.mac.fd.groupActivityOrder.name,$this.mac.fd.groupActivityOrder.headPortrait];
                            var expression = $this.mac.fd.groupActivityOrder.groupActivityID +'='+$this.para.activityID+'&&'+$this.mac.fd.groupActivityOrder.status +'='+$this.mac.enum.groupActivityOrder.status.complete;
                            var start = $this.start;
                            var total = $this.total;
                            var sort = ['id,desc'];
                            var destGeneSite = '';
                            $this.sys.api.conditiondataInput($this.mac.tb.groupActivityOrder, geneInputData, expression, start, total, sort, destGeneSite,
                                function (result) {
                                    if(result!==null){
                                        for(var i=0;i<result.length;i++){
                                            $this.signOrderArr.push(result[i])
                                        }
                                        para.resultLength = result.length;
                                        $this.start += para.resultLength;
                                        para.nStep = 'startModule';
                                        para.i = 0;
                                    }else{
                                        para.nStep = 'showModuleText';
                                    }
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.loadMore(successCallBack, errorCallBack)
                                    }
                                }, function (error) {
                                    console.error(error)
                                })
                            break
                        case 'startModule':
                            $this.sm['smSignOrder'][para.i].startModule(function () {
                                para.i++;
                                if(para.i === $this.signOrderArr.length){
                                    if(para.resultLength<$this.total){
                                        para.nStep = 'showModuleText';
                                    }else{
                                        para.nStep = 'showButtonModules';
                                    }
                                }
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.loadMore(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showButtonModules':
                            //显示子组件
                            let refId = ["smButton5"];
                            $this.showSubModule(refId, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    $this.loadMore(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showModuleText':
                            $this.signTIpText = '已显示全部结果';
                            $this.signIcon = '';
                            para.nStep = 'startModuleText';
                            $this.forceUpdateData(function(){
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.loadMore(successCallBack, errorCallBack)
                                }
                            })
                            break
                        case 'startModuleText':
                            $this.sm["smText6"].startModule(function () {
                                para.nStep = 'showModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.loadMore(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break
                        case 'showModules':
                            //显示子组件
                            $this.showSubModule(["smText6"], true, function () {
                                if($('.sign-order-dv').height()>272){
                                    $('.sign-order-dv').css('height', '408px');
                                }
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    $this.loadMore(successCallBack, errorCallBack)
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
            handRefresh:function(commandType){
                let $this =this;
                if(commandType===$this.mac.activityHandle.type.newFavorite){
                    $('.favorite-btn').addClass('active');
                    $this.favoriteBtn = ['已收藏', 'el-icon-star-off']
                }else if(commandType===$this.mac.activityHandle.type.deleteFavorite){
                    $('.favorite-btn').removeClass('active');
                    $this.favoriteBtn = ['收藏', 'el-icon-star-off']
                }
                $this.forceUpdateData(function() {
                    $this.sm['smButton4'].startModule(function () {

                    },function (error) {
                        console.error(error)
                    })
                })
            },
            discussLoadMore:function (successCallBack, errorCallBack) {
                let $this = this;
                let para;
                let dbFlag;
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                let fnname = 'contentDiscuss.discussLoadMore';

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
                            $this.tipText = '加载中';
                            $this.icon = 'el-icon-loading';
                            $this.forceUpdateData(function(){
                                para.nStep = '_showModule';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.discussLoadMore(successCallBack, errorCallBack)
                                }
                            })
                            break
                        case '_showModule':
                            $this.showSubModule(["smText10"], true, function () {
                                para.nStep = '_startModule';
                                if (++dbFlag === 2) {
                                    $this.discussLoadMore(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break
                        case '_startModule':
                            $this.sm["smText10"].startModule(function () {
                                para.nStep = 'dataInputGroupActivityDiscuss';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.discussLoadMore(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break
                        case 'dataInputGroupActivityDiscuss':
                            var geneInputData = {};
                            geneInputData[$this.mac.tb.groupActivityDiscuss] = null;
                            var expression = $this.mac.fd.groupActivityDiscuss.groupActivityID +'='+$this.para.activityID;
                            var start = $this.discussStart;
                            var total = $this.discussTotal;
                            var sort = ['id,desc'];
                            var destGeneSite = '';
                            $this.sys.api.conditiondataInput($this.mac.tb.groupActivityDiscuss, geneInputData, expression, start, total, sort, destGeneSite,
                                function (result) {
                                    if(result!==null){
                                        para.i = $this.groupActivityDiscussArr.length-1;
                                        for(var i=0;i<result.length;i++){
                                            $this.groupActivityDiscussArr.push(result[i])
                                            $this.activityIDArr.push($this.para.activityID);
                                        }
                                        para.length = result.length;
                                        $this.discussStart += result.length;
                                        $this.forceUpdateData(function(){
                                            para.nStep = 'startModule';
                                            dbFlag += 1;
                                            if (dbFlag === 2) {
                                                $this.discussLoadMore(successCallBack, errorCallBack)
                                            }
                                        })
                                    }else{
                                        para.nStep = 'showModuleText';
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.discussLoadMore(successCallBack, errorCallBack)
                                        }
                                    }
                                }, function (error) {
                                    console.error(error)
                                })
                            break
                        case 'startModule':
                            $this.sm['smDiscuss'][para.i].startModule(function () {
                                para.i++;
                                if(para.i === $this.groupActivityDiscussArr.length){
                                    if(para.length<$this.discussTotal){
                                        para.nStep = 'showModuleText';
                                    }else{
                                        para.nStep = 'showButtonModules';
                                    }
                                }
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.discussLoadMore(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showButtonModules':
                            //显示子组件
                            $this.showSubModule(["smButton6"], true, function () {
                                para.nStep = 'end';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.discussLoadMore(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showModuleText':
                            $this.tipText = '已显示全部结果';
                            $this.icon = '';
                            para.nStep = '_startModuleText';
                            $this.forceUpdateData(function(){
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.discussLoadMore(successCallBack, errorCallBack)
                                }
                            })
                            break
                        case '_startModuleText':
                            $this.sm["smText10"].startModule(function () {
                                para.nStep = 'showModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.discussLoadMore(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break
                        case 'showModules':
                            //显示子组件
                            $this.showSubModule(["smText10"],true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    $this.discussLoadMore(successCallBack, errorCallBack)
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
            activityHandle:function(type,successCallBack, errorCallBack){
                let $this = this;
                let para;
                let dbFlag;
                let objectName;
                let parentRecord;
                let condition;
                let fnname = 'contentDiscuss.activityHandle';
                let dbData;
                let ref = {
                    sm1: 'smText1',
                    sm2: 'smText2',
                };

                if (successCallBack !== null) {
                    errorCallBack = $this.setPara(successCallBack, errorCallBack);
                    successCallBack = null;
                }
                para = errorCallBack;

                while (1) {
                    if ($this.debugFlag) {
                        console.log(fnname + ': para.nStep = ' + para.nStep);
                    }
                    dbFlag = 0;
                    switch (para.nStep) {
                        case 0:
                        case 'commandType':
                            if(type==='favorite'){
                                if($this.favoriteBtn[0] === '已收藏'){
                                    para.refId = 'smButton4';
                                    para.commandType=$this.mac.activityHandle.type.deleteFavorite;
                                    $('.favorite-btn').removeClass('active');
                                    $this.favoriteBtn = ['收藏', 'el-icon-star-off'];
                                }else if($this.favoriteBtn[0] === '收藏'){
                                    para.refId = 'smButton4';
                                    para.commandType=$this.mac.activityHandle.type.newFavorite;
                                    $('.favorite-btn').addClass('active');
                                    $this.favoriteBtn = ['已收藏', 'el-icon-star-off'];
                                }
                            }else{
                                if( $this.btnType === ''){
                                    $this.btnType = 'primary';
                                    para.refId = 'smButton1';
                                    para.commandType=$this.mac.activityHandle.type.deletePraise;
                                    $('.details-praise').removeClass('active');
                                    $this.praiseNumber = [parseInt($this.praiseNumber[0])-1+'','lm-icon-praise'];
                                }else if($this.btnType === 'primary'){
                                    $this.btnType = '';
                                    para.refId = 'smButton1';
                                    $('.details-praise').addClass('active');
                                    para.commandType=$this.mac.activityHandle.type.newPraise;
                                    $this.praiseNumber = [parseInt($this.praiseNumber[0])+1+'','lm-icon-praise'];
                                }
                            }
                            $this.forceUpdateData(function(){
                                para.nStep = 'startModule';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.activityHandle(type,successCallBack, errorCallBack)
                                }
                            })
                            break;
                        case 'startModule':
                            $this.sm[para.refId].startModule(function () {
                                para.nStep = 'activityHandleEvent';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.activityHandle(type,successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'activityHandleEvent':
                            $this.ep.activityHandleEvent($this.para.activityID,para.commandType,function () {
                                para.nStep = 'end';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.activityHandle(type,successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'end':
                            para.successCallBack()
                            return;
                        default:
                            para.errorCallBack()
                            return;
                    }
                    dbFlag += 1;
                    if (dbFlag === 1) return;
                }
            },
            shareCodeShow:function(type){
                let $this = this;
                $this.reportType = type;
                $this.forceUpdateData(function () {
                    $this.sm['smDialog'].startModule(function () {
                        $this.showSubModule(['smDialog'], true, function () {},function (error) {console.error(error)});
                    },function (error) {
                        console.error(error)
                    })
                })
                // let $this = this;
                // if($this.shareCodeFlag===false){
                //     $this.shareCodeFlag = true;
                //     $this.sm['smShareCode'].startModule(function () {
                //         $this.showSubModule(['smShareCode'], true, function () {
                //
                //         }, function (error) {console.error(error)});
                //     },function (error) {console.error(error)});
                // }else{
                //     $this.shareCodeFlag = false;
                //     $this.showSubModule(['smShareCode'], false, function () {
                //
                //     }, function (error) {console.error(error)});
                // }
            },
            inputTextSave:function(value){
                this.inputText = value;
            },
            discussQuestion:function(){
                let $this = this;
                if($this.inputText===''||$this.inputText===null){
                    $this.$message({
                        type: 'error',
                        message: '问题内容不能为空'
                    });
                }else{
                    let objectName = $this.mac.tb.groupActivityDiscuss;
                    let parentRecord = null;
                    let dbData = {};
                    dbData[$this.mac.fd.groupActivityDiscuss.groupActivityID] = [$this.para.activityID]
                    dbData[$this.mac.fd.groupActivityDiscuss.questioner] = [$this.getUserID()['id']]
                    dbData[$this.mac.fd.groupActivityDiscuss.name] = [$this.getUserID()['name']];
                    dbData[$this.mac.fd.groupActivityDiscuss.askContent] = [$this.inputText];
                    dbData[$this.mac.fd.groupActivityDiscuss.askTime] = [$this.getCurrentTime()];
                    $this.sys.api.recordNew(objectName, parentRecord, dbData,
                        function (result) {
                            let groupActivityDiscussID =  dbData[$this.mac.fd.id][0];
                            let data = {};
                            data['questioner'] = $this.getUserID()['id'];
                            data['name'] = $this.getUserID()['name'];
                            data['askContent'] = $this.inputText;
                            $this.ep.discussQuestionEvent(data , function (result) {
                                $this.inputText = '';
                                $this.groupActivityDiscussArr.unshift(groupActivityDiscussID);
                                $this.activityIDArr.unshift($this.para.activityID);
                                $this.discussStart +=1;
                                $this.discussNumber +=1;
                                $this.forceUpdateData(function(){
                                    for(var i=0;i<$this.groupActivityDiscussArr.length;i++){
                                        $this.sm['smDiscuss'][i].startModule(function () {},function (error) {console.error(error)})
                                    }
                                    $this.sm['smInput1'].startModule(function () {},function (error) {console.error(error)})
                                    $this.sm['smText9'].startModule(function () {},function (error) {console.error(error)})
                                })
                            }, function (error) {console.error(error)})
                        }, function (error) {
                            console.error(error)
                        })
                }
            },
            reportDialogShow(type){
                let $this = this;
                $this.reportType = type;
                $this.forceUpdateData(function () {
                    $this.sm['smDialog'].startModule(function () {
                        $this.showSubModule(['smDialog'], true, function () {},function (error) {console.error(error)});
                    },function (error) {
                        console.error(error)
                    })
                })
            },
            setPara: function (successCallBack, errorCallBack) {
                var para = {};
                para.successCallBack = successCallBack;
                para.errorCallBack = errorCallBack;
                para.nStep = 0;
                return para;
            },
            smButton1_buttonClickEvent:function () {
                this.activityHandle('praise',function () {},function () {})
            },
            smButton2_buttonClickEvent:function () {
                this.reportDialogShow('report')
            },
            smButton3_buttonClickEvent:function () {
                this.shareCodeShow('share')
            },
            smButton4_buttonClickEvent:function () {
                this.activityHandle('favorite',function () {},function () {})
            },
            smButton5_buttonClickEvent:function () {
                this.loadMore(function () {},function () {});
            },
            smButton7_buttonClickEvent:function () {
                this.discussQuestion();
            },
            smButton6_buttonClickEvent:function () {
                this.discussLoadMore(function () {},function () {});
            },
            smDiscuss_discussAnswerEvent:function (id,successCallBack, errorCallBack) {
                this.ep.discussAnswerEvent(id,successCallBack, errorCallBack)
            },
            smGroup_getAttentionStateEvent:function(data,successCallBack, errorCallBack){
                this.ep.getAttentionStateEvent(data,successCallBack, errorCallBack)
            },
            smGroup_groupAttentionEvent:function(data,successCallBack, errorCallBack){
                this.ep.groupAttentionEvent(data,successCallBack, errorCallBack)
            },
            smGroup_getSumEvent:function(data,successCallBack, errorCallBack){
                this.ep.getSumEvent(data,successCallBack, errorCallBack)
            },
            smInput1_dataModifyEvent:function(value){
                this.inputTextSave(value)
            },
            getUrlPara:function(){
                return {id:1}
            },
            getUserID:function(){
                return {id:1,name:'张三'}
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
        }
    }
</script>
<style lang="scss">
    .content-discuss{
        .details-praise{
            i{
                display: block;
                font-size: 26px;
                margin-bottom: 10px;
            }
            .lm-button .el-button{
                padding:5px 50px;
                border-radius:32px;
                font-size: 16px;
            }
        }
        .details-praise.active{
            i{
                color:#ffffff;
            }
            .lm-button .el-button{
                background:#71D0FF;
                color:#ffffff;
            }
        }
        .label-text{
            .link-text{
                font-size:14px !important;
                line-height: 28px;
                color: #606266;
                border:1px solid rgba(192,196,204,1);
                padding:0 20px;
                border-radius:4px;
                margin-left: 15px;
            }
        }
        .details-btns{
            .lm-button .el-button{
                span{
                    font-size: 12px;
                }
            }
        }
        .favorite-btn.active{
            .lm-button .el-button{
                border:1px solid rgba(18,176,255,1);
                color: rgba(18,176,255,1);
            }
        }
        .report-btn{
            .lm-button .el-button{
                color: rgba(192,196,204,1);
            }
        }
        .sign-empty .link-text{
            display: block;
            text-align: center;
            background-color: #ffffff;
            box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.06);
            border-radius: 8px;
            border: solid 1px #eeeeee;
            margin: 0 30px;
        }
        .discuss-empty .link-text{
            display: block;
            text-align: center;
            background-color: #ffffff;
            box-shadow: 0px 0px 12px 0px rgba(0, 0, 0, 0.06);
            border-radius: 8px;
            border: solid 1px #eeeeee;
            /*margin: 0 30px;*/
        }
        .discuss-publis-btn{
            .lm-button .el-button{
                padding:0;
            }
        }
        .lm_text_input_content{
            .svg-container{
                display: none;
            }
        }
        .discuss-more{
            .lm-button{
                margin: 80px 0 40px 0;
            }
        }
    }
</style>
<style lang="scss" scoped>
    .content-discuss{
        .detail-flex{
            display: flex;
            background: #F4F4F4;
            .flex-left{
                flex: 1;
                /*box-shadow:0px 0px 8px 0px rgba(48,49,51,0.1);*/
                /*border-radius:4px;*/
                background: #F4F4F4;
                padding-bottom: 30px;
                .details{
                    padding:10px 0;
                    background:rgba(255,255,255,1);
                    box-shadow:0px 0px 8px 0px rgba(48,49,51,0.1);
                    border-radius:4px;
                }
                .sign{
                    background:rgba(255,255,255,1);
                    margin-top: 10px;
                    box-shadow:0px 0px 8px 0px rgba(48,49,51,0.1);
                    border-radius:4px;
                    padding: 10px 0 25px 0;
                }
                .detail-title{
                    height: 48px;
                    line-height: 48px;
                    border-left: 8px solid #12B0FF;
                    .link-text{
                        margin-left: 20px;
                    }
                }
                .detail-content{
                    padding:0 70px;
                    margin-top: 40px
                }
                .details-praise{
                    margin-top: 50px;
                    padding-bottom: 40px;
                    border-bottom: 1px solid rgba(229,229,229,1);
                }
                .details-btns{
                    padding:25px 20px 15px 20px;
                }
                .details-btns:after{
                    display: block;
                    content: '';
                    height: 0;
                    clear: both;
                }
                .f-l{
                    float: left;
                    height: 32px;
                    line-height: 32px;
                }
                .f-r{
                    float: right;
                    height: 32px;
                }
                .discuss-empty{
                    margin-bottom: 20px;
                }
                .favorite-btn{
                    margin-left: 10px;
                }
                .report-btn{
                    margin-right: 10px;
                }
                .mar-l-10{
                    margin-left: 10px;
                }
                .mar-r-10{
                    margin-right: 10px;
                }
                .sign-order-dv{
                    overflow-y: auto;
                    padding:0 30px;
                }
                .sign-more{
                    margin-top: 30px;
                    text-align: center;
                }
                .share-btn-dv {
                    position: relative;
                    .share-btn-code {
                        position: absolute;
                        width: 220px;
                        left: 0;
                        top: 40px;
                        z-index: 99;
                    }
                }
                .discuss-dv{
                    padding:10px 0;
                    background:rgba(255,255,255,1);
                    box-shadow:0px 0px 8px 0px rgba(48,49,51,0.1);
                    border-radius:4px;
                    margin-top: 10px;
                    .discuss-input{
                        padding:0 70px;
                        margin: 50px 0 20px 0;
                    }
                    .discuss-publis-btn{
                        .lm-button{
                            float: right;
                        }
                        margin-right: 70px;
                    }
                    .discuss-publis-btn:after{
                        display: block;
                        height: 0;
                        width: 0;
                        content: '';
                        clear: both;
                    }
                    .discuss-content{
                        padding:0 70px;
                        margin-top: 50px;
                        .discuss:last-child{
                            border-bottom: none;
                        }
                    }
                    .discuss-more{
                        margin: 40px 0;
                        text-align: center;
                    }
                }
            }
            .flex-right{
                width: 232px;
                margin-left: 10px;
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