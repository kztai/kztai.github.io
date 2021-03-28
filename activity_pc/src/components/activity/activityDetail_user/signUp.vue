<template>
    <div class="detail-signup">
        <div class="row detail-flex">
            <div class="col detail-left">
                <div class="row">
                    <lm-image
                            ref="smImg"
                            refId="smImg"
                            v-show="pvt_isShow.v1 === 'smImg'"
                            :paraVarPair="pvt_v1.smImg.paraVarPair"
                            :para="pvt_v1.smImg.para"
                            :attr="pvt_v1.smImg.attr">
                    </lm-image>
                    <!--<img src="../../assets/detail.png" alt="" width="420" height="246">-->
                </div>
               <div class="row mar-t-10">
                    <div class="col">
                        <lm-link-text
                                ref="smText15"
                                refId="smText15"
                                v-show="pvt_isShow.v24 === 'smText15'"
                                :paraVarPair="pvt_v24.smText15.paraVarPair"
                                :para="pvt_v24.smText15.para"
                                :attr="pvt_v24.smText15.attr">
                        </lm-link-text>
                   </div>
                   <div class="col share-btn">
                       <div>
                           <lm-button
                                   ref="smButton8"
                                   refId="smButton8"
                                   v-show="pvt_isShow.v25 === 'smButton8'"
                                   :paraVarPair="pvt_v25.smButton8.paraVarPair"
                                   :para="pvt_v25.smButton8.para"
                                   :attr="pvt_v25.smButton8.attr">
                           </lm-button>
                       </div>
                       <div class="share-btn-code">
                           <share-code
                                   ref="smShareCode"
                                   refId="smShareCode"
                                   v-show="pvt_isShow.v26 === 'smShareCode'"
                                   :paraVarPair="pvt_v26.smShareCode.paraVarPair"
                                   :para="pvt_v26.smShareCode.para"
                                   :attr="pvt_v26.smShareCode.attr">
                           </share-code>
                       </div>
                   </div>
               </div>
            </div>
            <div class="col detail-right">
                <div class="row">
                    <div class="col activity-sort">
                        <lm-link-text
                                ref="smText1"
                                refId="smText1"
                                v-show="pvt_isShow.v2 === 'smText1'"
                                :paraVarPair="pvt_v2.smText1.paraVarPair"
                                :para="pvt_v2.smText1.para"
                                :attr="pvt_v2.smText1.attr">
                        </lm-link-text>
                    </div>
                    <div class="col">
                        <lm-link-text
                                ref="smText2"
                                refId="smText2"
                                v-show="pvt_isShow.v3 === 'smText2'"
                                :paraVarPair="pvt_v3.smText2.paraVarPair"
                                :para="pvt_v3.smText2.para"
                                :attr="pvt_v3.smText2.attr">
                        </lm-link-text>
                    </div>
                </div>
                <div class="row  mar-t-20">
                    <div class="col activity-attestation">
                        <lm-link-text
                                ref="smText3"
                                refId="smText3"
                                v-show="pvt_isShow.v4 === 'smText3'"
                                :paraVarPair="pvt_v4.smText3.paraVarPair"
                                :para="pvt_v4.smText3.para"
                                :attr="pvt_v4.smText3.attr">
                        </lm-link-text>
                    </div>
                    <div class="col mar-r-15">
                        <lm-link-text
                                ref="smText4"
                                refId="smText4"
                                v-show="pvt_isShow.v5 === 'smText4'"
                                :paraVarPair="pvt_v5.smText4.paraVarPair"
                                :para="pvt_v5.smText4.para"
                                :attr="pvt_v5.smText4.attr">
                        </lm-link-text>
                    </div>
                    <div class="col mar-r-15">
                        <lm-link-text
                                ref="smText5"
                                refId="smText5"
                                v-show="pvt_isShow.v6 === 'smText5'"
                                :paraVarPair="pvt_v6.smText5.paraVarPair"
                                :para="pvt_v6.smText5.para"
                                :attr="pvt_v6.smText5.attr">
                        </lm-link-text>
                    </div>
                    <div class="col">
                        <lm-link-text
                                ref="smText6"
                                refId="smText6"
                                v-show="pvt_isShow.v7 === 'smText6'"
                                :paraVarPair="pvt_v7.smText6.paraVarPair"
                                :para="pvt_v7.smText6.para"
                                :attr="pvt_v7.smText6.attr">
                        </lm-link-text>
                    </div>
                </div>
                <div class="detail-border">
                    <div class="row mar-t-15">
                        <div class="col w-70">
                            <lm-link-text
                                    ref="smText7"
                                    refId="smText7"
                                    v-show="pvt_isShow.v8 === 'smText7'"
                                    :paraVarPair="pvt_v8.smText7.paraVarPair"
                                    :para="pvt_v8.smText7.para"
                                    :attr="pvt_v8.smText7.attr">
                            </lm-link-text>
                        </div>
                        <div class="col activity-address">
                            <lm-button
                                    ref="smButton1"
                                    refId="smButton1"
                                    v-show="pvt_isShow.v9 === 'smButton1'"
                                    :paraVarPair="pvt_v9.smButton1.paraVarPair"
                                    :para="pvt_v9.smButton1.para"
                                    :attr="pvt_v9.smButton1.attr">
                            </lm-button>
                            <lm-link-text
                                    ref="smText14"
                                    refId="smText14"
                                    v-show="pvt_isShow.v9 === 'smText14'"
                                    :paraVarPair="pvt_v9.smText14.paraVarPair"
                                    :para="pvt_v9.smText14.para"
                                    :attr="pvt_v9.smText14.attr">
                            </lm-link-text>
                        </div>
                    </div>
                    <div class="row mar-t-25">
                        <div class="col w-70">
                            <lm-link-text
                                    ref="smText8"
                                    refId="smText8"
                                    v-show="pvt_isShow.v10 === 'smText8'"
                                    :paraVarPair="pvt_v10.smText8.paraVarPair"
                                    :para="pvt_v10.smText8.para"
                                    :attr="pvt_v10.smText8.attr">
                            </lm-link-text>
                        </div>
                        <div class="col">
                            <lm-link-text
                                    ref="smText9"
                                    refId="smText9"
                                    v-show="pvt_isShow.v11 === 'smText9'"
                                    :paraVarPair="pvt_v11.smText9.paraVarPair"
                                    :para="pvt_v11.smText9.para"
                                    :attr="pvt_v11.smText9.attr">
                            </lm-link-text>
                        </div>
                    </div>
                    <div class="row ticket-type-flex" v-show="isHold">
                        <div class="col ticket-left">
                            <lm-link-text
                                    ref="smText10"
                                    refId="smText10"
                                    v-show="pvt_isShow.v12 === 'smText10'"
                                    :paraVarPair="pvt_v12.smText10.paraVarPair"
                                    :para="pvt_v12.smText10.para"
                                    :attr="pvt_v12.smText10.attr">
                            </lm-link-text>
                        </div>
                        <div class="col ticket-right">
                            <ticket-type
                                    class="detail-ticket"
                                    ref="smTicketType"
                                    refId="smTicketType"
                                    v-show="pvt_isShow.v13 === 'smTicketType'"
                                    v-for="(item, index) in pvt_v13.smTicketType.forData"
                                    :number="index"
                                    :paraVarPair="pvt_v13.smTicketType.paraVarPair"
                                    :para="item.para"
                                    :attr="item.attr">
                            </ticket-type>
                        </div>
                    </div>
                    <div class="row" v-show="isHold">
                        <div class="detail-tip" v-show="pvt_isShow.v21 === 'smText13'">
                            <lm-link-text
                                    ref="smText13"
                                    refId="smText13"
                                    v-show="pvt_isShow.v21 === 'smText13'"
                                    :paraVarPair="pvt_v21.smText13.paraVarPair"
                                    :para="pvt_v21.smText13.para"
                                    :attr="pvt_v21.smText13.attr">
                            </lm-link-text>
                        </div>
                    </div>
                    <div class="row mar-t-15" v-show="isHold">
                        <div class="col w-70">
                            <lm-link-text
                                    ref="smText11"
                                    refId="smText11"
                                    v-show="pvt_isShow.v14 === 'smText11'"
                                    :paraVarPair="pvt_v14.smText11.paraVarPair"
                                    :para="pvt_v14.smText11.para"
                                    :attr="pvt_v14.smText11.attr">
                            </lm-link-text>
                        </div>
                        <div class="col detail-num">
                            <lm-input-number
                                    ref="smNumber"
                                    refId="smNumber"
                                    v-show="pvt_isShow.v15 === 'smNumber'"
                                    :paraVarPair="pvt_v15.smNumber.paraVarPair"
                                    :para="pvt_v15.smNumber.para"
                                    :attr="pvt_v15.smNumber.attr">
                            </lm-input-number>
                        </div>
                        <div class="col">
                            <lm-link-text
                                    ref="smText12"
                                    refId="smText12"
                                    v-show="pvt_isShow.v16 === 'smText12'"
                                    :paraVarPair="pvt_v16.smText12.paraVarPair"
                                    :para="pvt_v16.smText12.para"
                                    :attr="pvt_v16.smText12.attr">
                            </lm-link-text>
                        </div>
                        <div class="col mar-l-10">
                            <lm-link-text
                                    ref="smText16"
                                    refId="smText16"
                                    v-show="pvt_isShow.v27 === 'smText16'"
                                    :paraVarPair="pvt_v27.smText16.paraVarPair"
                                    :para="pvt_v27.smText16.para"
                                    :attr="pvt_v27.smText16.attr">
                            </lm-link-text>
                        </div>
                    </div>
                    <div class="row mar-t-40">
                        <div class="col mar-r-20 activity-end">
                            <lm-button
                                    ref="smButton2"
                                    refId="smButton2"
                                    v-show="pvt_isShow.v17 === 'smButton2'"
                                    :paraVarPair="pvt_v17.smButton2.paraVarPair"
                                    :para="pvt_v17.smButton2.para"
                                    :attr="pvt_v17.smButton2.attr">
                            </lm-button>
                            <lm-button
                                    ref="smButton5"
                                    refId="smButton5"
                                    v-show="pvt_isShow.v17 === 'smButton5'"
                                    :paraVarPair="pvt_v17.smButton5.paraVarPair"
                                    :para="pvt_v17.smButton5.para"
                                    :attr="pvt_v17.smButton5.attr">
                            </lm-button>
                        </div>
                        <div class="col favorite-btn">
                            <lm-button
                                    ref="smButton3"
                                    refId="smButton3"
                                    v-show="pvt_isShow.v18 === 'smButton3'"
                                    :paraVarPair="pvt_v18.smButton3.paraVarPair"
                                    :para="pvt_v18.smButton3.para"
                                    :attr="pvt_v18.smButton3.attr">
                            </lm-button>
                        </div>
                        <div class="col reference">
                            <lm-button
                                    ref="smButton4"
                                    refId="smButton4"
                                    v-show="pvt_isShow.v19 === 'smButton4'"
                                    :paraVarPair="pvt_v19.smButton4.paraVarPair"
                                    :para="pvt_v19.smButton4.para"
                                    :attr="pvt_v19.smButton4.attr">
                            </lm-button>
                        </div>
                        <div class="col detail-popover">
                            <lm-popover
                                    ref="smPopover"
                                    refId="smPopover"
                                    v-show="pvt_isShow.v20 === 'smPopover'"
                                    :paraVarPair="pvt_v20.smPopover.paraVarPair"
                                    :para="pvt_v20.smPopover.para"
                                    :attr="pvt_v20.smPopover.attr">
                            </lm-popover>
                        </div>
                    </div>
                    <div class="row mar-t-20">
                        <div class="col">
                            <lm-button
                                    ref="smButton6"
                                    refId="smButton6"
                                    v-show="pvt_isShow.v22 === 'smButton6'"
                                    :paraVarPair="pvt_v22.smButton6.paraVarPair"
                                    :para="pvt_v22.smButton6.para"
                                    :attr="pvt_v22.smButton6.attr">
                            </lm-button>
                        </div>
                        <div class="col mar-l-20">
                            <lm-button
                                    ref="smButton7"
                                    refId="smButton7"
                                    v-show="pvt_isShow.v23 === 'smButton7'"
                                    :paraVarPair="pvt_v23.smButton7.paraVarPair"
                                    :para="pvt_v23.smButton7.para"
                                    :attr="pvt_v23.smButton7.attr">
                            </lm-button>
                        </div>
                    </div>
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
    import ticketType from './component/ticketType';
    import shareCode from './component/shareCode';

    export default {
        components: {shareCode, ticketType},
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ['sys'],
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ["v1","v2","v3","v4","v5","v6","v7","v8","v9","v9","v10","v11","v12","v13","v14","v15","v16","v17","v17","v18","v19","v20","v21","v22","v23","v24","v25","v26","v27"],
                    subModule: ["smImg","smText1","smText2","smText3","smText4","smText5","smText6","smText7","smButton1","smText14","smText8","smText9","smText10","smTicketType","smText11","smNumber","smText12","smButton2","smButton5","smButton3","smButton4","smPopover","smText13","smButton6","smButton7","smText15","smButton8","smShareCode","smText16"]
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
                    "v23": null,
                    "v24": null,
                    "v25": null,
                    "v26": null,
                    "v27": null,
                },

                pvt_eventPortInput: ['moduleChangeEvent','activityHandleEvent','getHandleStateEvent','getTicketNumberEvent'],


                mac:mac.mac,
                debugFlag: true,
                activityTime:'',
                isHold:true,
                sellingMin:1,
                sellingNumber:1,
                sellingMax:20,
                surplus:'',
                tipText:'',
                activityTicketTypeID:[],
                ticketSelectArr:[],
                ticketDisabledArr:[],
                placeName:['', ''],
                reference: '',
                balloon:['',''],
                shareCodeFlag:false,
                favoriteNumber:250000,
                forwardNumber:1000,
                praiseNumber:500,
                favoriteNumberShow:24555,
                forwardNumberShow:1000,
                praiseNumberShow:500,
                favoriteBtn:['收藏', 'el-icon-star-off'],
                limitNumber:''
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
                            textData: '精选'
                        },
                        attr: {
                            fontSize: '12px', height: '18px', color: 'rgba(254,254,254,1)'
                        }
                    }
                }
            },
            pvt_v3: function () {
                return {
                    smText2: {
                        paraVarPair: {},
                        para: {
                            textData: [{
                                $table: this.mac.tb.groupActivity,
                                $arrField: [this.mac.fd.groupActivity.name],
                                $arrValue: [this.para.activityID]
                            }],
                        },
                        attr: {
                            fontSize: '18px', height: '18px', color: '#303133'
                        }
                    }
                }
            },
            pvt_v4: function () {
                return {
                    smText3: {
                        paraVarPair: {},
                        para: {
                            textData: 'V企业认证'
                        },
                        attr: {
                            fontSize: '12px', height: '18px',color:'rgba(254,254,254,1)'
                        }
                    }
                }
            },
            pvt_v5: function () {
                return {
                    smText4: {
                        paraVarPair: {},
                        para: {
                            // textData: [{
                            //     $table: this.mac.tb.groupActivity,
                            //     $arrField: [this.mac.fd.groupActivity.praiseNumber],
                            //     $arrValue: [this.para.activityID]
                            // }],
                            textData:this.praiseNumberShow
                        },
                        attr: {
                            fontSize: '14px', height: '18px',color:'#303133',icon:'lm-icon-praise'
                        }
                    }
                }
            },
            pvt_v6: function () {
                return {
                    smText5: {
                        paraVarPair: {},
                        para: {
                            // textData: [{
                            //     $table: this.mac.tb.groupActivity,
                            //     $arrField: [this.mac.fd.groupActivity.forwardNumber],
                            //     $arrValue: [this.para.activityID]
                            // }],
                            textData:this.forwardNumberShow
                        },
                        attr: {
                            fontSize: '14px', height: '18px',color:'#303133',icon:'lm-icon-forward'
                        }
                    }
                }
            }, pvt_v7: function () {
                return {
                    smText6: {
                        paraVarPair: {},
                        para: {
                            // textData: [{
                            //     $table: this.mac.tb.groupActivity,
                            //     $arrField: [this.mac.fd.groupActivity.forwardNumber],
                            //     $arrValue: [this.para.activityID]
                            // }],
                            textData:this.favoriteNumberShow
                        },
                        attr: {
                            fontSize: '14px', height: '18px',color:'#303133',icon:'el-icon-star-on'
                        }
                    }
                }
            },
            pvt_v8: function () {
                return {
                    smText7: {
                        paraVarPair: {},
                        para: {
                            textData:'地点'
                        },
                        attr: {
                            fontSize: '14px', height: '30px',color:'#303133',icon:'el-icon-location'
                        }
                    }
                }
            },
            pvt_v9: function () {
                return {
                    smButton1: {
                        paraVarPair: {},
                        para: {
                            name: this.placeName
                        },
                        attr: {
                            type: 'text',height:'30px',iconIsRight:true
                        }
                    },
                    smText14: {
                        paraVarPair: {},
                        para: {
                            textData:'线上活动'
                        },
                        attr: {
                            fontSize: '14px', height: '30px',color:'#303133'
                        }
                    }
                }
            },
            pvt_v10: function () {
                return {
                    smText8: {
                        paraVarPair: {},
                        para: {
                            textData:'时间'
                        },
                        attr: {
                            fontSize: '14px', height: '30px',color:'#303133',icon:'lm-icon-clock'
                        }
                    }
                }
            },
            pvt_v11: function () {
                return {
                    smText9: {
                        paraVarPair: {},
                        para: {
                            textData:this.activityTime
                        },
                        attr: {
                            fontSize: '14px', height: '30px',color:'rgba(48,49,51,1)'
                        }
                    }
                }
            },
            pvt_v12: function () {
                return {
                    smText10: {
                        paraVarPair: {},
                        para: {
                            textData:'票种'
                        },
                        attr: {
                            fontSize: '14px', height: '30px',color:'#303133',icon:'lm-icon-ticket'
                        }
                    }
                }
            },
            pvt_v13: function () {
                let loopModule = {
                    smTicketType: {
                        para: {
                            activityTicketTypeID:this.activityTicketTypeID
                        },
                        attr: {
                            select:this.ticketSelectArr,disabled:this.ticketDisabledArr
                        },
                    },
                };
                let forData = this.pvt_createForData(loopModule);
                return {
                    smTicketType: {
                        paraVarPair: {},
                        forData : forData.smTicketType,
                    },
                }
            },
            pvt_v14: function () {
                return {
                    smText11: {
                        paraVarPair: {},
                        para: {
                            textData:'数量'
                        },
                        attr: {
                            fontSize: '14px', height: '30px',color:'#303133',icon:'lm-icon-number'
                        }
                    }
                }
            },
            pvt_v15: function () {
                return {
                    smNumber: {
                        paraVarPair: {
                            value:'sellingNumber'
                        },
                        para: {
                            value:this.sellingNumber
                        },
                        attr: {
                            max:this.sellingMax,min:this.sellingMin,decimals:0,size:'small'
                        }
                    }
                }
            },
            pvt_v16: function () {
                return {
                    smText12: {
                        paraVarPair: {},
                        para: {
                            // textData: [{
                            //     $table: this.mac.tb.groupActivity,
                            //     $arrField: [this.mac.fd.groupActivity.favoriteNumber],
                            //     $arrValue: [this.para.activityID]
                            // }],
                            textData:this.surplus
                        },
                        attr: {
                            fontSize: '14px', height: '30px',color:'#303133'
                        }
                    }
                }
            },
            pvt_v17: function () {
                return {
                    smButton2: {
                        paraVarPair: {},
                        para: {
                            name: ['我要报名', '']
                        },
                        attr: {
                            type: 'primary',height:'48px',width:'220px'
                        }
                    },
                    smButton5: {
                        paraVarPair: {},
                        para: {
                            name: ['活动已结束', '']
                        },
                        attr: {
                            height:'48px',width:'220px',disabled: true
                        }
                    }
                }
            },
            pvt_v18: function () {
                return {
                    smButton3: {
                        paraVarPair: {},
                        para: {
                            name: this.favoriteBtn
                        },
                        attr: {
                            height:'48px',width:'98px'
                        }
                    }
                }
            },
            pvt_v19: function () {
                return {
                    smButton4: {
                        paraVarPair: {},
                        para: {
                            name: ['退款说明', 'el-icon-info']
                        },
                        attr: {
                            height:'48px',width:'120px',type:'text'
                        }
                    }
                }
            },
            pvt_v20: function () {
                return {
                    smPopover: {
                        paraVarPair: {},
                        para: {
                            balloon: this.balloon,
                        },
                        attr: {
                            reference:this.reference,wordWrap:true,isHtml:true
                        }
                    }
                }
            },
            pvt_v21: function () {
                return {
                    smText13: {
                        paraVarPair: {},
                        para: {
                            textData:this.tipText
                        },
                        attr: {
                            fontSize: '14px', height: '30px', color: '#303133'
                        }
                    }
                }
            },
            pvt_v22: function () {
                return {
                    smButton6: {
                        paraVarPair: {},
                        para: {
                            name: ['查看活动新闻', '']
                        },
                        attr: {
                            type: 'primary',height:'48px',width:'220px'
                        }
                    }
                }
            },
            pvt_v23: function () {
                return {
                    smButton7: {
                        paraVarPair: {},
                        para: {
                            name: ['查看活动照片', '']
                        },
                        attr: {
                            type: 'primary',height:'48px',width:'220px'
                        }
                    }
                }
            },
            pvt_v24: function () {
                return {
                    smText15: {
                        paraVarPair: {},
                        para: {
                            textData:'分享'
                        },
                        attr: {
                            fontSize: '14px', height: '30px', color: '#AAAAAA'
                        }
                    }
                }
            },
            pvt_v25: function () {
                return {
                    smButton8: {
                        paraVarPair: {},
                        para: {
                            name: ['', 'lm-icon-wechat']
                        },
                        attr: {
                            type: 'text',height:'30px',width:'20px'
                        }
                    }
                }
            },
            pvt_v26: function () {
                return {
                    smShareCode: {
                        paraVarPair: {},
                        para: {
                            $arrValue: [this.para.activityID]
                        },
                        attr: {
                            class:'sign'
                        }
                    }
                }
            },
            pvt_v27: function () {
                return {
                    smText16: {
                        paraVarPair: {},
                        para: {
                            textData: this.limitNumber
                        },
                        attr: {
                            fontSize: '14px', height: '30px', color: '#949495'
                        }
                    }
                }
            },
        },
        watch: {},
        mounted: function () {
            this.pvt_initSysData();
            this.reference = document.getElementsByClassName('reference')[0];
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
                let fnname = 'signUp.startModule';
                let ref = {
                    sm1: 'smImg',
                    sm2: 'smText1',
                    sm3: 'smText2',
                    sm4: 'smText3',
                    sm5: 'smText4',
                    sm6: 'smText5',
                    sm7: 'smText6',
                    sm8: 'smText7',
                    sm9: 'smButton1',
                    sm_9: 'smText14',
                    sm10: 'smText8',
                    sm11: 'smText9',
                    sm12: 'smText10',
                    sm13: 'smTicketType',
                    sm14: 'smText11',
                    sm15: 'smNumber',
                    sm16: 'smText12',
                    sm17: 'smButton2',
                    sm_17: 'smButton5',
                    sm18: 'smButton3',
                    sm19: 'smButton4',
                    sm20: 'smPopover',
                    sm21: 'smText13',
                    sm22: 'smButton6',
                    sm23: 'smButton7',
                    sm24: 'smText15',
                    sm25: 'smButton8',
                    sm27: 'smText16',
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
                        case 'inputGroupActivityHandle':
                            var geneInputData = {};
                            geneInputData[$this.mac.tb.groupActivityHandle] = null;
                            var expression = $this.mac.fd.groupActivityHandle.groupActivityID +'='+ $this.getUserID()['id'] +'&&'+$this.mac.fd.groupActivityHandle.handle +'='+$this.getUserID()['id'];
                            var start = null;
                            var total = 1;
                            var sort = ['id,asc'];
                            var destGeneSite = '';
                            $this.sys.api.conditiondataInput($this.mac.tb.groupActivityHandle, geneInputData, expression, start, total, sort, destGeneSite,function(result){
                                if(result===null){
                                    $('.favorite-btn').removeClass('active');
                                    $this.favoriteBtn = ['收藏', 'el-icon-star-off'];
                                    para.nStep = 'queryGroupActivity';
                                }else{
                                    para.nStep = 'queryGroupActivityHandle';
                                }
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
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
                            $this.sys.api.recordRead(objectName, dbData,
                                function () {
                                    if(dbData[$this.mac.fd.groupActivityHandle.favorite][0]===$this.mac.enum.groupActivityHandle.favorite.yes){
                                        $('.favorite-btn').addClass('active');
                                        $this.favoriteBtn = ['已收藏', 'el-icon-star-off'];
                                    }else{
                                        $('.favorite-btn').removeClass('active');
                                        $this.favoriteBtn = ['收藏', 'el-icon-star-off'];
                                    }
                                    para.nStep = 'queryGroupActivity';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'queryGroupActivity':
                            objectName = $this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityID];
                            dbData[$this.mac.fd.groupActivity.startTime] = [];
                            dbData[$this.mac.fd.groupActivity.place] = [];
                            dbData[$this.mac.fd.groupActivity.endTime] = [];
                            dbData[$this.mac.fd.groupActivity.refundExplain] = [];
                            dbData[$this.mac.fd.groupActivity.enrollNumber] = [];
                            dbData[$this.mac.fd.groupActivity.praiseNumber] = [];
                            dbData[$this.mac.fd.groupActivity.favoriteNumber] = [];
                            dbData[$this.mac.fd.groupActivity.forwardNumber] = [];
                            $this.sys.api.recordRead(objectName, dbData,
                                function () {
                                    $this.favoriteNumber = dbData[$this.mac.fd.groupActivity.favoriteNumber][0];
                                    $this.forwardNumber = dbData[$this.mac.fd.groupActivity.forwardNumber][0];
                                    $this.praiseNumber = dbData[$this.mac.fd.groupActivity.praiseNumber][0];
                                    $this.favoriteNumberShow = $this.tranNumber($this.favoriteNumber ,1);
                                    $this.forwardNumberShow = $this.tranNumber($this.forwardNumber ,1);
                                    $this.praiseNumberShow = $this.tranNumber($this.praiseNumber ,1);
                                    para.enrollNumber = dbData[$this.mac.fd.groupActivity.enrollNumber][0];
                                    para.activityEndTime = dbData[$this.mac.fd.groupActivity.endTime][0];
                                    para.place = dbData[$this.mac.fd.groupActivity.place][0];
                                    $this.activityTime = dbData[$this.mac.fd.groupActivity.startTime][0]+' ～ '+dbData[$this.mac.fd.groupActivity.endTime][0];
                                    para.refundExplain = dbData[$this.mac.fd.groupActivity.refundExplain][0];
                                    if(para.place!==null){
                                        let temp = '';
                                        for(var i=0;i<para.place['name'].length;i++){
                                            temp += para.place['name'][i];
                                        }
                                        $this.placeName = [temp+para.place['place'], 'el-icon-arrow-right'];
                                    }
                                    para.nStep = 'querGroupActivityTicketType';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'querGroupActivityTicketType':
                            $this.activityTicketTypeID = [];
                            $this.ticketSelectArr = [];
                            $this.ticketDisabledArr = [];
                            objectName = $this.mac.tb.groupActivityTicketType;
                            parentRecord = [$this.para.activityID];
                            condition = null;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [];
                            dbData[$this.mac.fd.groupActivityTicketType.explain] = [];
                            dbData[$this.mac.fd.groupActivityTicketType.poll] = [];
                            dbData[$this.mac.fd.groupActivityTicketType.maxNumber] = [];
                            dbData[$this.mac.fd.groupActivityTicketType.minNumber] = [];
                            dbData[$this.mac.fd.groupActivityTicketType.saleStartTime] = [];
                            dbData[$this.mac.fd.groupActivityTicketType.saleEndTime] = [];
                            dbData[$this.mac.fd.groupActivityTicketType.startTime] = [];
                            dbData[$this.mac.fd.groupActivityTicketType.endTime] = [];
                            dbData[$this.mac.fd.groupActivityTicketType.refundEndTime] = [];
                            dbData[$this.mac.fd.groupActivityTicketType.price] = [];
                            dbData[$this.mac.fd.groupActivityTicketType.number] = [];
                            $this.sys.api.recordQuery(objectName,parentRecord,condition, dbData,
                                function () {
                                    para.obj = {};
                                    para.obj['id'] = dbData[$this.mac.fd.id];
                                    para.obj['explain'] = dbData[$this.mac.fd.groupActivityTicketType.explain];
                                    para.obj['number'] = dbData[$this.mac.fd.groupActivityTicketType.poll];
                                    para.obj['maxNumber'] = dbData[$this.mac.fd.groupActivityTicketType.maxNumber];
                                    para.obj['minNumber'] = dbData[$this.mac.fd.groupActivityTicketType.minNumber];
                                    para.obj['saleStartTime'] = dbData[$this.mac.fd.groupActivityTicketType.saleStartTime];
                                    para.obj['saleEndTime'] = dbData[$this.mac.fd.groupActivityTicketType.saleEndTime];
                                    para.obj['startTime'] = dbData[$this.mac.fd.groupActivityTicketType.startTime];
                                    para.obj['endTime'] = dbData[$this.mac.fd.groupActivityTicketType.endTime];
                                    para.obj['refundEndTime'] = dbData[$this.mac.fd.groupActivityTicketType.refundEndTime];
                                    para.obj['price'] = dbData[$this.mac.fd.groupActivityTicketType.price];
                                    para.obj['orderNumber'] = dbData[$this.mac.fd.groupActivityTicketType.number];
                                    para.sortObj = $this.priceSort(para.obj)
                                    $this.activityTicketTypeID = para.sortObj['id'];
                                    if(dbData[$this.mac.fd.groupActivityTicketType.refundEndTime][0].indexOf('-')!==-1){
                                        para.differTime = new Date((new Date(dbData[$this.mac.fd.groupActivityTicketType.startTime][0]) - new Date(dbData[$this.mac.fd.groupActivityTicketType.refundEndTime][0]))).getDate();
                                        para.differTime = para.differTime-1;
                                    }else{
                                        para.differTime = dbData[$this.mac.fd.groupActivityTicketType.refundEndTime][0];
                                    }
                                    para.html = '<div style="color:#12B0FF;height:38px;line-height:38px;padding:0 20px;border-bottom:1px solid #E5E5E5;">退款说明</div><div style="padding:0 20px;margin-top: 10px;">活动开始前'+para.differTime+'天可退款</div><div style="padding:10px 20px 10px 20px;line-height: 20px;">'+para.refundExplain+'</div>'
                                    $this.balloon = ['',para.html];
                                    para.saleStartTime = para.sortObj['saleStartTime'];
                                    para.saleEndTime = para.sortObj['saleEndTime'];
                                    para.startTime = para.sortObj['startTime'];
                                    para.endTime = para.sortObj['endTime'];
                                    for(var i=0;i<$this.activityTicketTypeID.length;i++){
                                        $this.ticketSelectArr.push(false);
                                        if(para.saleEndTime[i]===null&&para.saleStartTime[i]===null){
                                            para.flag  = true
                                        }else{
                                            para.flag  = new Date(para.saleStartTime[i])<new Date()&&new Date(para.saleEndTime[i])>new Date()
                                        }
                                        para.Surplus = para.sortObj['number'][i]-para.enrollNumber[para.sortObj['orderNumber'][i]];
                                        if(para.sortObj['number'][i]===null){
                                            para.Surplus = 1;
                                        }
                                        // para.Surplus = para.sortObj['number'][i]-para.enrollNumber[i];
                                        if(para.Surplus===0||!para.flag){
                                            $this.ticketDisabledArr.push(true)
                                        }else{
                                            $this.ticketDisabledArr.push(false)
                                        }
                                    }
                                    let index = $this.ticketDisabledArr.indexOf(false);
                                    $this.ticketSelectArr[index] = true;
                                    if(para.sortObj['explain'][index]!==null){
                                        $this.tipText = para.sortObj['explain'][index]+'（场次:'+para.startTime[index]+'～'+para.endTime[index]+'）';
                                    }else{
                                        $this.tipText = '（场次:'+para.startTime[index]+'～'+para.endTime[index]+'）';
                                    }
                                    para.maxNumber =  para.sortObj['maxNumber'][index];
                                    para.number =  para.sortObj['number'][index];
                                    para.minNumber =  para.sortObj['minNumber'][index];
                                    $this.limitNumber = '（'+para.minNumber+'张起售，限购'+para.maxNumber+'张）';
                                    if(para.number===null){
                                        $this.sellingMax = para.maxNumber;
                                    }else if(para.number<para.maxNumber){
                                        $this.sellingMax = para.number;
                                    }else if(para.number>para.maxNumber||para.number===para.maxNumber){
                                        $this.sellingMax = para.maxNumber;
                                    }
                                    $this.sellingMin = para.minNumber;
                                    $this.sellingNumber = para.minNumber;
                                    if(para.number===null){
                                        $this.surplus = '此类票无限';
                                    }else{
                                        // $this.surplus = '剩余'+(para.number-para.enrollNumber[index])+'张';
                                        $this.surplus = '剩余'+(para.number-para.enrollNumber[para.sortObj['orderNumber'][index]])+'张';
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
                                para.nStep = '_startModule9';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case '_startModule9':
                            $this.sm[ref.sm_9].startModule(function () {
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
                                if(new Date(para.activityEndTime)<new Date()){
                                    $this.isHold = false;
                                    para.nStep = 'startModule17';
                                }else{
                                    $this.isHold = true;
                                    para.nStep = 'startModule12';
                                }
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule12':
                            $this.sm[ref.sm12].startModule(function () {
                                para.i = 0;
                                para.nStep = 'startModule13';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule13':
                            if($this.activityTicketTypeID.length===0){
                                para.nStep = 'startModule13';
                                dbFlag += 1;
                                break
                            }
                            $this.sm[ref.sm13][para.i].startModule(function () {
                                para.i++
                                if(para.i === $this.activityTicketTypeID.length){
                                    para.nStep = 'startModule14';
                                }
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule14':
                            $this.sm[ref.sm14].startModule(function () {
                                para.nStep = 'startModule15';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule15':
                            $this.sm[ref.sm15].startModule(function () {
                                para.nStep = 'startModule16';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule16':
                            $this.sm[ref.sm16].startModule(function () {
                                para.nStep = 'startModule17';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule17':
                            $this.sm[ref.sm17].startModule(function () {
                                para.nStep = '_startModule17';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case '_startModule17':
                            $this.sm[ref.sm_17].startModule(function () {
                                para.nStep = 'startModule18';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule18':
                            $this.sm[ref.sm18].startModule(function () {
                                para.nStep = 'startModule19';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule19':
                            $this.sm[ref.sm19].startModule(function () {
                                para.nStep = 'startModule20';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule20':
                            $this.sm[ref.sm20].startModule(function () {

                            }, para.errorCallBack);
                            para.nStep = 'startModule21';
                            dbFlag += 1;
                            if (dbFlag === 2) {
                                $this.startModule(successCallBack, errorCallBack)
                            }
                            break;
                        case 'startModule21':
                            $this.sm[ref.sm21].startModule(function () {
                                para.nStep = 'startModule22';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule22':
                            $this.sm[ref.sm22].startModule(function () {
                                para.nStep = 'startModule23';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule23':
                            $this.sm[ref.sm23].startModule(function () {
                                para.nStep = 'startModule24';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule24':
                            $this.sm[ref.sm24].startModule(function () {
                                para.nStep = 'startModule25';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule25':
                            $this.sm[ref.sm25].startModule(function () {
                                para.nStep = 'startModule27';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule27':
                            $this.sm[ref.sm27].startModule(function () {
                                para.nStep = 'showModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showModules':
                            let refId
                            if(new Date(para.activityEndTime)<new Date()){
                                refId = ["smImg","smText1","smText2","smText3","smText4","smText5","smText6","smText7","smText8","smText9","smButton5","smButton3","smButton4","smPopover","smButton6","smButton7","smText15","smButton8"];
                            }else{
                                if($this.tipText===''||$this.tipText===null){
                                    refId = ["smImg","smText1","smText2","smText3","smText4","smText5","smText6","smText7","smText8","smText9","smText10","smTicketType","smText11","smNumber","smText12","smButton2","smButton3","smButton4","smPopover","smText15","smButton8","smText16"];
                                }else{
                                    refId = ["smImg","smText1","smText2","smText3","smText4","smText5","smText6","smText7","smText8","smText9","smText10","smTicketType","smText11","smNumber","smText12","smButton2","smButton3","smButton4","smPopover","smText13","smText15","smButton8","smText16"];
                                }
                            }
                            if(para.place===null){
                                refId.push(ref.sm22)
                            }else{
                                refId.push(ref.sm9)
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
            ticketSelect:function(index,successCallBack, errorCallBack){
                let $this = this;
                let para;
                let dbFlag;
                let objectName;
                let parentRecord;
                let condition;
                let fnname = 'signUp.ticketSelect';
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
                            para.i = 0;
                            $this.ticketSelectArr = [];
                            for(var i=0;i<$this.activityTicketTypeID.length;i++){
                                if(i === index){
                                    $this.ticketSelectArr.push(true);
                                }else{
                                    $this.ticketSelectArr.push(false);
                                }
                            }
                            $this.forceUpdateData(function(){
                                para.nStep = 'startModule';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.ticketSelect(index,successCallBack, errorCallBack)
                                }
                            })
                            break
                        case 'startModule':
                            $this.sm['smTicketType'][para.i].startModule(function () {
                                para.i++
                                if(para.i===$this.activityTicketTypeID.length){
                                    para.nStep = 'queryGroupActivity';
                                }
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.ticketSelect(index,successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'queryGroupActivity':
                            objectName = $this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityID];
                            dbData[$this.mac.fd.groupActivity.enrollNumber] = [];
                            $this.sys.api.recordRead(objectName, dbData,
                                function () {
                                    para.enrollNumber = dbData[$this.mac.fd.groupActivity.enrollNumber][0];
                                    para.nStep = 'readGroupActivityTicketType';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.ticketSelect(index,successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'readGroupActivityTicketType':
                            objectName = $this.mac.tb.groupActivityTicketType;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.activityTicketTypeID[index]];
                            dbData[$this.mac.fd.groupActivityTicketType.explain] = [];
                            dbData[$this.mac.fd.groupActivityTicketType.poll] = [];
                            dbData[$this.mac.fd.groupActivityTicketType.minNumber] = [];
                            dbData[$this.mac.fd.groupActivityTicketType.maxNumber] = [];
                            dbData[$this.mac.fd.groupActivityTicketType.saleStartTime] = [];
                            dbData[$this.mac.fd.groupActivityTicketType.saleEndTime] = [];
                            dbData[$this.mac.fd.groupActivityTicketType.startTime] = [];
                            dbData[$this.mac.fd.groupActivityTicketType.endTime] = [];
                            dbData[$this.mac.fd.groupActivityTicketType.number] = [];
                            $this.sys.api.recordRead(objectName, dbData,
                                function () {
                                    para.startTime = dbData[$this.mac.fd.groupActivityTicketType.startTime][0];
                                    para.endTime = dbData[$this.mac.fd.groupActivityTicketType.endTime][0];
                                    para.saleStartTime = dbData[$this.mac.fd.groupActivityTicketType.saleStartTime][0];
                                    para.saleEndTime = dbData[$this.mac.fd.groupActivityTicketType.saleEndTime][0];
                                    if(dbData[$this.mac.fd.groupActivityTicketType.explain][0]!==null){
                                        $this.tipText = dbData[$this.mac.fd.groupActivityTicketType.explain][0]+'（场次:'+para.startTime+'～'+para.endTime+'）';
                                    }else{
                                        $this.tipText = '（场次:'+para.startTime+'～'+para.endTime+'）';
                                    }
                                    para.maxNumber =  dbData[$this.mac.fd.groupActivityTicketType.maxNumber][0];
                                    para.number =  dbData[$this.mac.fd.groupActivityTicketType.poll][0];
                                    para.minNumber =  dbData[$this.mac.fd.groupActivityTicketType.minNumber][0];
                                    para.orderNumber =  dbData[$this.mac.fd.groupActivityTicketType.number][0];
                                    $this.limitNumber = '（'+para.minNumber+'张起售，限购'+para.maxNumber+'张）';
                                    if(para.number===null){
                                        $this.sellingMax = para.maxNumber;
                                    }else if(para.number<para.maxNumber){
                                        $this.sellingMax = para.number;
                                    }else if(para.number>para.maxNumber||para.number===para.maxNumber){
                                        $this.sellingMax = para.maxNumber;
                                    }
                                    $this.sellingMin = para.minNumber;
                                    $this.sellingNumber = para.minNumber;
                                    if(para.number===null){
                                        $this.surplus = '此类票无限';
                                    }else{
                                        // $this.surplus = '剩余'+(para.number-para.enrollNumber[index])+'张';
                                        $this.surplus = '剩余'+(para.number-para.enrollNumber[para.orderNumber])+'张';
                                    }
                                    $this.forceUpdateData(function(){
                                        para.nStep = 'startModule15';
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.ticketSelect(index,successCallBack, errorCallBack)
                                        }
                                    })
                                }, para.errorCallBack)
                            break;
                        case 'startModule15':
                            $this.sm['smNumber'].startModule(function () {
                                para.nStep = 'startModule16';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.ticketSelect(index,successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule16':
                            $this.sm['smText12'].startModule(function () {
                                para.nStep = 'startModule21';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.ticketSelect(index,successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule21':
                            $this.sm['smText13'].startModule(function () {
                                para.nStep = 'startModule27';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.ticketSelect(index,successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule27':
                            $this.sm['smText16'].startModule(function () {
                                para.nStep = 'showModule';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.ticketSelect(index,successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showModule':
                            if($this.tipText===null||$this.tipText===''){
                                para.showflag = false;
                            }else{
                                para.showflag = true;
                            }
                            let refId = ["smText13"];
                            $this.showSubModule(refId, para.showflag, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    $this.ticketSelect(index,successCallBack, errorCallBack)
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
            openMap:function(successCallBack, errorCallBack){
                let $this = this;
                let para;
                let dbFlag;
                let objectName;
                let parentRecord;
                let condition;
                let fnname = 'signUp.openMap';
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
                        case 'queryGroupActivity':
                            objectName = $this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityID];
                            dbData[$this.mac.fd.groupActivity.startTime] = [];
                            dbData[$this.mac.fd.groupActivity.place] = [];
                            dbData[$this.mac.fd.groupActivity.endTime] = [];
                            $this.sys.api.recordRead(objectName, dbData,
                                function () {
                                    para.place = dbData[$this.mac.fd.groupActivity.place][0];
                                    let temp = '';
                                    for(var i=0;i<para.place['name'].length;i++){
                                        temp += para.place['name'][i];
                                    }
                                    para.activityPlace = temp+para.place['place'];
                                    para.url = 'https://ditu.amap.com/search?query='+para.activityPlace;
                                    para.nStep = 'end';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.openMap(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'end':
                            window.open(para.url, '_blank').location;
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
            shareCodeShow:function(){
                let $this = this;
                if($this.shareCodeFlag===false){
                    $this.shareCodeFlag = true;
                    $this.sm['smShareCode'].startModule(function () {
                        $this.showSubModule(['smShareCode'], true, function () {

                        }, function (error) {console.error(error)});
                    },function (error) {console.error(error)});
                }else{
                    $this.shareCodeFlag = false;
                    $this.showSubModule(['smShareCode'], false, function () {

                    }, function (error) {console.error(error)});
                }
            },
            handRefresh:function(commandType){
                let $this =this;
                if(commandType===$this.mac.activityHandle.type.newFavorite||commandType===$this.mac.activityHandle.type.deleteFavorite){
                    if(commandType===$this.mac.activityHandle.type.newFavorite){
                        $this.favoriteNumber += 1;
                        $this.favoriteNumberShow = $this.tranNumber($this.favoriteNumber ,1);
                        $('.favorite-btn').addClass('active');
                        $this.favoriteBtn = ['已收藏', 'el-icon-star-off'];
                    }else if(commandType===$this.mac.activityHandle.type.deleteFavorite){
                        $this.favoriteNumber -= 1;
                        $this.favoriteNumberShow = $this.tranNumber($this.favoriteNumber ,1);
                        $('.favorite-btn').removeClass('active');
                        $this.favoriteBtn = ['收藏', 'el-icon-star-off']
                    }
                    $this.forceUpdateData(function() {
                        $this.sm['smButton3'].startModule(function () {
                            $this.sm['smText6'].startModule(function () {

                            },function (error) {
                                console.error(error)
                            })
                        },function (error) {
                            console.error(error)
                        })
                    })
                }else{
                    if(commandType===$this.mac.activityHandle.type.newPraise){
                        $this.praiseNumber += 1;
                        $this.praiseNumberShow = $this.tranNumber($this.praiseNumber ,1);
                    }else if(commandType===$this.mac.activityHandle.type.deletePraise){
                        $this.praiseNumber -= 1;
                        $this.praiseNumberShow = $this.tranNumber($this.praiseNumber ,1);
                    }
                    $this.forceUpdateData(function() {
                        $this.sm['smText4'].startModule(function () {

                        },function (error) {
                            console.error(error)
                        })
                    })
                }
            },
            moduleChange:function(number,successCallBack, errorCallBack){
                let $this = this;
                let para;
                let dbFlag;
                let objectName;
                let parentRecord;
                let condition;
                let fnname = 'signUp.moduleChange';
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
                        case 'getTicketNumberEvent':
                            para.objData = {};
                            para.objData['activityID'] = $this.getUrlPara()['id'];
                            para.objData['ticketID'] = $this.activityTicketTypeID[$this.ticketSelectArr.indexOf(true)];
                            para.objData['userID'] = $this.getUserID()['id'];
                            $this.ep.getTicketNumberEvent(para.objData,function (result) {
                                para.ticketBought = result;
                                para.nStep = 'readGroupActivity';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.moduleChange(number,successCallBack, errorCallBack)
                                }
                            },function (error) {
                                console.error(error)
                            })
                            break;
                        case 'readGroupActivity':
                            objectName = $this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityID];
                            dbData[$this.mac.fd.groupActivity.enrollNumber] = [];
                            $this.sys.api.recordRead(objectName, dbData,
                                function () {
                                    para.enrollNumber = dbData[$this.mac.fd.groupActivity.enrollNumber][0];
                                    para.nStep = 'readGroupActivityTicketType';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.moduleChange(number,successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'readGroupActivityTicketType':
                            objectName = $this.mac.tb.groupActivityTicketType;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.activityTicketTypeID[$this.ticketSelectArr.indexOf(true)]];
                            dbData[$this.mac.fd.groupActivityTicketType.maxNumber] = [];
                            dbData[$this.mac.fd.groupActivityTicketType.minNumber] = [];
                            dbData[$this.mac.fd.groupActivityTicketType.poll] = [];
                            dbData[$this.mac.fd.groupActivityTicketType.number] = [];
                            $this.sys.api.recordRead(objectName, dbData,
                                function () {
                                    para.orderNumber = dbData[$this.mac.fd.groupActivityTicketType.number][0];
                                    para.maxNumber = dbData[$this.mac.fd.groupActivityTicketType.maxNumber][0];
                                    if($this.sellingNumber>(para.maxNumber-para.ticketBought)){
                                        $this.$message({
                                            type: 'error',
                                            message: '购买数量超出了限制，当前可购买最大张数为'+(para.maxNumber-para.ticketBought)
                                        });
                                        para.nStep = 'end';
                                    }else if(dbData[$this.mac.fd.groupActivityTicketType.poll][0]!==null&&(dbData[$this.mac.fd.groupActivityTicketType.minNumber][0]>(dbData[$this.mac.fd.groupActivityTicketType.poll][0]- para.enrollNumber[para.orderNumber]))){
                                        $this.$message({
                                            type: 'error',
                                            message: '剩余票数不足，此类票 '+dbData[$this.mac.fd.groupActivityTicketType.minNumber][0]+' 张起售'
                                        });
                                        para.nStep = 'end';
                                    }else{
                                        para.nStep = 'moduleChangeEvent';
                                    }
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.moduleChange(number,successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'moduleChangeEvent':
                            let data = {};
                            data['activityId'] = $this.para.activityID;
                            data['ticketId'] = $this.activityTicketTypeID[$this.ticketSelectArr.indexOf(true)];
                            data['number'] = $this.sellingNumber;
                            this.ep.moduleChangeEvent(number,data);
                            para.nStep = 'end';
                            dbFlag += 1;
                            if (dbFlag === 2) {
                                $this.moduleChange(number,successCallBack, errorCallBack)
                            }
                            break
                        case 'end':
                            return;
                        default:
                            return;
                    }
                    dbFlag += 1;
                    if (dbFlag === 1) return;
                }
            },
            activityHandle:function(successCallBack, errorCallBack){
                let $this = this;
                let para;
                let dbFlag;
                let objectName;
                let parentRecord;
                let condition;
                let fnname = 'signUp.activityHandle';
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
                            if($this.favoriteBtn[0] === '已收藏'){
                                para.commandType=$this.mac.activityHandle.type.deleteFavorite
                            }else if($this.favoriteBtn[0] === '收藏'){
                                para.commandType=$this.mac.activityHandle.type.newFavorite
                            }
                            if(para.commandType===$this.mac.activityHandle.type.newPraise){
                                $this.praiseNumber += 1;
                                $this.praiseNumberShow = $this.tranNumber($this.praiseNumber ,1);
                                para.refId = 'smText5';
                            }else if(para.commandType===$this.mac.activityHandle.type.deletePraise){
                                $this.praiseNumber -= 1;
                                $this.praiseNumberShow = $this.tranNumber($this.praiseNumber ,1);
                                para.refId = 'smText5';
                            }else if(para.commandType===$this.mac.activityHandle.type.newFavorite){
                                $this.favoriteNumber += 1;
                                $this.favoriteNumberShow = $this.tranNumber($this.favoriteNumber ,1);
                                para.refId = 'smText6';
                                $('.favorite-btn').addClass('active');
                                $this.favoriteBtn = ['已收藏', 'el-icon-star-off']
                            }else if(para.commandType===$this.mac.activityHandle.type.deleteFavorite){
                                $this.favoriteNumber -= 1;
                                $this.favoriteNumberShow = $this.tranNumber($this.favoriteNumber ,1);
                                para.refId = 'smText6';
                                $('.favorite-btn').removeClass('active');
                                $this.favoriteBtn = ['收藏', 'el-icon-star-off']
                            }
                            $this.forceUpdateData(function(){
                                para.nStep = 'startModule';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.activityHandle(successCallBack, errorCallBack)
                                }
                            })
                            break;
                        case 'startModule':
                            $this.sm[para.refId].startModule(function () {
                                para.nStep = 'startModule1';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.activityHandle(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule1':
                            $this.sm['smButton3'].startModule(function () {
                                para.nStep = 'activityHandleEvent';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.activityHandle(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'activityHandleEvent':
                            $this.ep.activityHandleEvent($this.para.activityID,para.commandType,function () {
                                para.nStep = 'end';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.activityHandle(successCallBack, errorCallBack)
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


            smTicketType_ticketSelectEvent:function (index) {
                this.ticketSelect(index,function () {},function () {})
            },
            smButton1_buttonClickEvent:function () {
                this.openMap(function () {},function () {})
            },
            smButton2_buttonClickEvent:function () {
                this.moduleChange(0)
            },
            smButton3_buttonClickEvent:function () {
                this.activityHandle(function () {},function () {})
            },
            smButton8_buttonClickEvent:function () {
                this.shareCodeShow()
            },

            getUrlPara:function(){
                return {id:1}
            },
            getUserID:function(){
                return {id:1,name:'张三'}
            },
            priceSort:function (data) {
                // var len = data['price'].length;
                // for(var i = 0; i < len; i++){
                //     for(var j = 0; j < len - 1 - i; j++){
                //         if(data['price'][j] > data['price'][j+1]) {//相邻元素两两对比
                //             for(var k in data){
                //                 var temp = data[k][j+1];//元素交换
                //                 data[k][j+1] = data[k][j];
                //                 data[k][j] = temp;
                //             }
                //         }
                //     }
                // }
                return data;
            },
            tranNumber:function(num, point) {
                let numStr = num.toString()
                // 十万以内直接返回
                if (numStr.length < 6) {
                    return numStr;
                }
                //大于8位数是亿
                else if (numStr.length > 8) {
                    let decimal = numStr.substring(numStr.length - 8, numStr.length - 8 + point);
                    return parseFloat(parseInt(num / 100000000) + '.' + decimal) + '亿+';
                }
                //大于6位数是十万 (以10W分割 10W以下全部显示)
                else if (numStr.length > 5) {
                    let decimal = numStr.substring(numStr.length - 4, numStr.length - 4 + point);
                    return parseFloat(parseInt(num / 10000) + '.' + decimal) + '万+';
                }
            }
        }
    }
</script>
<style lang="scss">
    .detail-signup{
        .image-size-medium{
            width: 100%;
            height: 100%;
        }
        i{
            font-size: 14px;
        }
        .activity-address{
            .lm-button .el-button--text{
                color: #303133;
                padding:0;
                font-size: 14px;
            }
            .lm-button .el-button--text:hover{
                color:#409EFF;
            }
        }
        .link-text-icon__left{
            color: #909399;
        }
        .detail-num{
            .el-input__inner{
                /*height: 30px;*/
            }
        }
        .reference{
            .lm-button .el-button--text{
                color:#FC7122;
            }
            .lm-button .el-button--text:hover{
                color:#F29C69;
            }
        }
        .activity-end{
            .lm-button.el-button--default{
                background:rgba(244,244,244,1);
                border:1px solid rgba(229,229,229,1);
                border-radius:4px;
            }
        }
        .share-btn{
            .el-button{
                padding:0;
                .lm-icon-wechat{
                    color:#46AF35;
                    font-size:18px;
                    border:  1px solid #46AF35;
                    border-radius: 4px;
                }
            }
        }
        .favorite-btn.active{
            .lm-button .el-button{
                border:1px solid rgba(18,176,255,1);
                color: rgba(18,176,255,1);
            }
        }
    }
    .el-popover.el-popover--plain{
        padding:10px !important;
        width: auto;
        max-width: 200px;
    }
    .el-popover{
        min-width: 0;
    }
</style>
<style lang="scss" scoped>
    .activity-sort{
        width:32px;
        height:18px;
        background:linear-gradient(0deg,rgba(237,13,0,1) 0%,rgba(254,76,54,1) 50%,rgba(238,22,10,1) 100%);
        border-radius:4px;
        text-align: center;
        margin-right: 10px;
    }

    .activity-attestation{
        width:66px;
        height:18px;
        background:linear-gradient(90deg,rgba(32,172,245,1) 0%,rgba(15,156,230,1) 50%,rgba(0,142,215,1) 100%);
        border-radius:9px;
        text-align: center;
        margin-right: 15px;
    }

    .detail-flex{
        display: flex;
    }

    .detail-left{
        width: 420px;
        height: 260px;
    }

    .detail-tip{
        .link-text{
            display: inline-block;
            margin-left: 75px;
            /*height: 30px;*/
            padding: 4px 15px;
            background:rgba(244,244,244,1);
            border:1px solid rgba(229,229,229,1);
            line-height: 18px;
            margin-bottom: 20px;
        }
    }

    .ticket-type-flex{
        display: flex;
        margin-top: 30px;
        .ticket-left{
            width: 75px;
        }
        .ticket-right{
            flex: 1;
        }
    }

    .detail-right{
        flex: 1;
        margin-left: 20px;
    }

    .detail-ticket{
        display: inline-block;
        margin: -2px 10px 20px 0;
    }

    .detail-border{
        margin-top: 15px;
        padding: 10px 30px 30px 30px;
        border:1px dashed rgba(229,229,229,1);
    }

    .detail-num{
        margin-right: 15px;
    }

    .share-btn{
        margin-left: 10px;
        position: relative;
        .share-btn-code{
            position: absolute;
            width: 220px;
            left:0;
            top:40px;
            z-index: 99;
        }
    }

    .w-70{
        width: 75px;
    }

    .mar-t-15{
        margin-top: 15px;
    }

    .mar-l-10{
        margin-left: 10px;
    }

    .mar-t-25{
        margin-top: 25px;
    }

    mar-t-10{
        margin-top: 10px;
    }

    .mar-t-30{
        margin-top: 30px;
    }

    .mar-t-40{
        margin-top: 40px;
    }

    .mar-r-20{
        margin-right: 20px;
    }

    .mar-l-20{
        margin-left: 20px;
    }

    .mar-t-20{
        margin-top: 20px;
    }

    .mar-r-15{
        margin-right: 15px;
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