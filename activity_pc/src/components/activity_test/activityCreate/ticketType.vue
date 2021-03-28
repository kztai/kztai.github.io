<template>
    <div class="ticket-type">
        <div class="info-title">
            <lm-link-text
                    ref="smText1"
                    refId="smText1"
                    v-show="pvt_isShow.v1 === 'smText1'"
                    :paraVarPair="pvt_v1.smText1.paraVarPair"
                    :para="pvt_v1.smText1.para"
                    :attr="pvt_v1.smText1.attr">
            </lm-link-text>
        </div>
        <div class="info-option">
            <div class="item">
                <div class="item-name">
                    <lm-link-text
                            ref="smText2"
                            refId="smText2"
                            v-show="pvt_isShow.v2 === 'smText2'"
                            :paraVarPair="pvt_v2.smText2.paraVarPair"
                            :para="pvt_v2.smText2.para"
                            :attr="pvt_v2.smText2.attr">
                    </lm-link-text>
                </div>
                <div class="item-content">
                    <lm-radio
                            ref="smRadio1"
                            refId="smRadio1"
                            v-show="pvt_isShow.v3 === 'smRadio1'"
                            :paraVarPair="pvt_v3.smRadio1.paraVarPair"
                            :para="pvt_v3.smRadio1.para"
                            :attr="pvt_v3.smRadio1.attr">
                    </lm-radio>
                </div>
            </div>
            <div class="item">
                <div class="item-name">
                    <lm-link-text
                            ref="smText3"
                            refId="smText3"
                            v-show="pvt_isShow.v4 === 'smText3'"
                            :paraVarPair="pvt_v4.smText3.paraVarPair"
                            :para="pvt_v4.smText3.para"
                            :attr="pvt_v4.smText3.attr">
                    </lm-link-text>
                </div>
                <div class="item-content">
                    <div class="item-form">
                        <div class="row item-form-header">
                            <div class="col col_w_5">
                                <lm-link-text
                                        ref="smText4"
                                        refId="smText4"
                                        v-show="pvt_isShow.v5 === 'smText4'"
                                        :paraVarPair="pvt_v5.smText4.paraVarPair"
                                        :para="pvt_v5.smText4.para"
                                        :attr="pvt_v5.smText4.attr">
                                </lm-link-text>
                            </div>
                            <div class="col col_w_4">
                                <lm-link-text
                                        ref="smText5"
                                        refId="smText5"
                                        v-show="pvt_isShow.v6 === 'smText5'"
                                        :paraVarPair="pvt_v6.smText5.paraVarPair"
                                        :para="pvt_v6.smText5.para"
                                        :attr="pvt_v6.smText5.attr">
                                </lm-link-text>
                            </div>
                            <div class="col col_w_4">
                                <lm-link-text
                                        ref="smText6"
                                        refId="smText6"
                                        v-show="pvt_isShow.v7 === 'smText6'"
                                        :paraVarPair="pvt_v7.smText6.paraVarPair"
                                        :para="pvt_v7.smText6.para"
                                        :attr="pvt_v7.smText6.attr">
                                </lm-link-text>
                            </div>
                            <div class="col col_w_3">
                                <lm-link-text
                                        ref="smText7"
                                        refId="smText7"
                                        v-show="pvt_isShow.v8 === 'smText7'"
                                        :paraVarPair="pvt_v8.smText7.paraVarPair"
                                        :para="pvt_v8.smText7.para"
                                        :attr="pvt_v8.smText7.attr">
                                </lm-link-text>
                            </div>
                            <div class="col col_w_4">
                                <lm-link-text
                                        ref="smText8"
                                        refId="smText8"
                                        v-show="pvt_isShow.v9 === 'smText8'"
                                        :paraVarPair="pvt_v9.smText8.paraVarPair"
                                        :para="pvt_v9.smText8.para"
                                        :attr="pvt_v9.smText8.attr">
                                </lm-link-text>
                            </div>
                        </div>
                        <div class="row item-form-con" ref="itemForm">
                            <ticket-type-add
                                    ref="smTicketTypeAdd"
                                    refId="smTicketTypeAdd"
                                    v-show="pvt_isShow.v10 === 'smTicketTypeAdd'"
                                    v-for="(item, index) in pvt_v10.smTicketTypeAdd.forData"
                                    :number="index"
                                    :paraVarPair="pvt_v10.smTicketTypeAdd.paraVarPair"
                                    :para="item.para"
                                    :attr="item.attr">
                            </ticket-type-add>
                        </div>
                        <div class="row item-btn-add">
                            <lm-button
                                    ref="smButton"
                                    refId="smButton"
                                    v-show="pvt_isShow.v12 === 'smButton'"
                                    :paraVarPair="pvt_v12.smButton.paraVarPair"
                                    :para="pvt_v12.smButton.para"
                                    :attr="pvt_v12.smButton.attr">
                            </lm-button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="item">
                <div class="item-name h-120">
                    <lm-link-text
                            ref="smText9"
                            refId="smText9"
                            v-show="pvt_isShow.v13 === 'smText9'"
                            :paraVarPair="pvt_v13.smText9.paraVarPair"
                            :para="pvt_v13.smText9.para"
                            :attr="pvt_v13.smText9.attr">
                    </lm-link-text>
                </div>
                <div class="item-content h-120">
                    <div>
                        <lm-radio
                                ref="smRadio2"
                                refId="smRadio2"
                                v-show="pvt_isShow.v14 === 'smRadio2'"
                                :paraVarPair="pvt_v14.smRadio2.paraVarPair"
                                :para="pvt_v14.smRadio2.para"
                                :attr="pvt_v14.smRadio2.attr">
                        </lm-radio>
                    </div>
                    <div class="bg-f4f4f4">
                        <div class="attach-item">
                            <div class="item-name">
                                <lm-link-text
                                        ref="smText10"
                                        refId="smText10"
                                        v-show="pvt_isShow.v16 === 'smText10'"
                                        :paraVarPair="pvt_v16.smText10.paraVarPair"
                                        :para="pvt_v16.smText10.para"
                                        :attr="pvt_v16.smText10.attr">
                                </lm-link-text>
                            </div>
                            <div class="attach-item-content line-40">
                                <div class="col">
                                    <lm-link-text
                                            ref="smText11"
                                            refId="smText11"
                                            v-show="pvt_isShow.v17 === 'smText11'"
                                            :paraVarPair="pvt_v17.smText11.paraVarPair"
                                            :para="pvt_v17.smText11.para"
                                            :attr="pvt_v17.smText11.attr">
                                    </lm-link-text>
                                </div>
                                <div class="col resuse-time">
                                    <lm-select
                                            ref="smSelect"
                                            refId="smSelect"
                                            v-show="pvt_isShow.v18 === 'smSelect'"
                                            :paraVarPair="pvt_v18.smSelect.paraVarPair"
                                            :para="pvt_v18.smSelect.para"
                                            :attr="pvt_v18.smSelect.attr">
                                    </lm-select>
                                </div>
                                <div class="col">
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
                        <div class="attach-item">
                            <div class="item-name">
                                <lm-link-text
                                        ref="smText13"
                                        refId="smText13"
                                        v-show="pvt_isShow.v20 === 'smText13'"
                                        :paraVarPair="pvt_v20.smText13.paraVarPair"
                                        :para="pvt_v20.smText13.para"
                                        :attr="pvt_v20.smText13.attr">
                                </lm-link-text>
                            </div>
                            <div class="attach-item-content">
                                <div>
                                    <lm-input-text
                                            ref="smInput"
                                            refId="smInput"
                                            v-show="pvt_isShow.v15 === 'smInput'"
                                            :paraVarPair="pvt_v15.smInput.paraVarPair"
                                            :para="pvt_v15.smInput.para"
                                            :attr="pvt_v15.smInput.attr">
                                    </lm-input-text>
                                </div>
                                <div class="info-tip"  v-show="pvt_isShow.v21 === 'smText14'">
                                    <i class="el-icon-warning"></i>
                                    <lm-link-text
                                            ref="smText14"
                                            refId="smText14"
                                            v-show="pvt_isShow.v21 === 'smText14'"
                                            :paraVarPair="pvt_v21.smText14.paraVarPair"
                                            :para="pvt_v21.smText14.para"
                                            :attr="pvt_v21.smText14.attr">
                                    </lm-link-text>
                                </div>
                            </div>
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
    import ticketTypeAdd from './component/ticketTypeAdd';

    export default {
        components: {ticketTypeAdd},
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ["sys"],
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ["v1", "v2", "v3", "v4", "v5", "v6", "v7", "v8", "v9", "v10", "v11", "v12", "v13", "v14", "v15", "v16", "v17", "v18", "v19", "v20", "v21"],
                    subModule: ["smText1", "smText2", "smRadio1", "smText3", "smText4", "smText5", "smText6", "smText7", "smText8", "smTicketTypeAdd", "smTicketAttach", "smButton", "smText9", "smRadio2", "smInput", "smText10", "smText11", "smSelect", "smText12", "smText13", "smText14"]
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
                },
                pvt_eventPortInput: [],

                mac: mac.mac,
                debugFlag: true,
                ticketTypeArr: [],
                dragTicketTypeArr: [],
                activitySceneID: [],
                cloumBillArr: [],
                ticketTypeDelete: [],
                // openTicketAttachID:'',
                cloumBill: [5, 4, 4, 3, 4],
                activityTicketTypeID: '',
                refundDisable: false,
                radioData: 1,//监听双向绑定数据
                radioArr: [{label: 1, text: '是'}, {label: 2, text: '否'}],
                draging: '',
                dragIndex: '',
                targetIndex: '',
                listSource:[
                    {value: 1, label: '1天', disabled:false,icon:'',image:''},
                    {value: 2, label: '2天', disabled:false,icon:'',image:''},
                    {value: 3, label: '3天', disabled:false,icon:'',image:''},
                    {value: 4, label: '4天', disabled:false,icon:'',image:''},
                    {value: 5, label: '5天', disabled:false,icon:'',image:''},
                    {value: 6, label: '6天', disabled:false,icon:'',image:''},
                    {value: 7, label: '7天', disabled:false,icon:'',image:''},
                    {value: 8, label: '8天', disabled:false,icon:'',image:''},
                    {value: 9, label: '9天', disabled:false,icon:'',image:''},
                    {value: 10, label: '10天', disabled:false,icon:'',image:''},
                ],
                refuseDate:'',
                refuseDateDisabled:false,
            }
        },
        computed: {
            pvt_v1: function () {
                return {
                    smText1: {
                        paraVarPair: {},
                        para: {
                            textData: '票种设置'
                        },
                        attr: {
                            fontSize: '18px', height: '64px', color: '#12B0FF'
                        }
                    }
                }
            }, pvt_v2: function () {
                return {
                    smText2: {
                        paraVarPair: {},
                        para: {
                            textData: '报名人数'
                        },
                        attr: {
                            fontSize: '16px', height: '40px', color: '#303133'
                        }
                    }
                }
            }, pvt_v3: function () {
                return {
                    smRadio1: {
                        paraVarPair: {},
                        para: {
                            radioData: [{
                                $table: this.mac.tb.groupActivity,
                                $arrField: [this.mac.fd.groupActivity.showEnrollInfo],
                                $arrValue: [this.para.activityID]
                            }],
                        },
                        attr: {
                            radioArr: [{label: 1, text: '显示'}, {label: 2, text: '不显示'}]
                        }
                    }
                }
            }, pvt_v4: function () {
                return {
                    smText3: {
                        paraVarPair: {},
                        para: {
                            textData: '报名表单',
                        },
                        attr: {
                            fontSize: '16px', height: '40px', color: '#303133'
                        }
                    }
                }
            }, pvt_v5: function () {
                return {
                    smText4: {
                        paraVarPair: {},
                        para: {
                            textData: '票种名称',
                        },
                        attr: {
                            fontSize: '14px', height: '40px', color: '#606266'
                        }
                    }
                }
            }, pvt_v6: function () {
                return {
                    smText5: {
                        paraVarPair: {},
                        para: {
                            textData: '票价（元）',
                        },
                        attr: {
                            fontSize: '14px', height: '40px', color: '#606266'
                        }
                    }
                }
            }, pvt_v7: function () {
                return {
                    smText6: {
                        paraVarPair: {},
                        para: {
                            textData: '数量',
                        },
                        attr: {
                            fontSize: '14px', height: '40px', color: '#606266'
                        }
                    }
                }
            }, pvt_v8: function () {
                return {
                    smText7: {
                        paraVarPair: {},
                        para: {
                            textData: '是否审核',
                        },
                        attr: {
                            fontSize: '14px', height: '40px', color: '#606266'
                        }
                    }
                }
            }, pvt_v9: function () {
                return {
                    smText8: {
                        paraVarPair: {},
                        para: {
                            textData: '操作',
                        },
                        attr: {
                            fontSize: '14px', height: '40px', color: '#606266'
                        }
                    }
                }
            }, pvt_v10: function () {
                let loopModule = {
                    smTicketTypeAdd: {
                        para: {
                            activityTicketTypeID: this.ticketTypeArr,
                            parentID: this.activitySceneID
                        },
                        attr: {
                            cloumBill: this.cloumBillArr, delete: this.ticketTypeDelete
                        },
                    },
                };
                let forData = this.pvt_createForData(loopModule);
                return {
                    smTicketTypeAdd: {
                        paraVarPair: {},
                        forData: forData.smTicketTypeAdd,
                    },
                }
            },
            // pvt_v11: function () {
            //     return {
            //         smTicketAttach: {
            //             paraVarPair: {},
            //             para: {
            //                 activityTicketTypeID:this.activityTicketTypeID,
            //             },
            //             attr: {}
            //         }
            //     }
            // },
            pvt_v12: function () {
                return {
                    smButton: {
                        paraVarPair: {},
                        para: {
                            name: ['添加票种', 'el-icon-plus'],
                        },
                        attr: {
                            height: '32px', size: 'mini'
                        }
                    }
                }
            }, pvt_v13: function () {
                return {
                    smText9: {
                        paraVarPair: {},
                        para: {
                            textData: '是否支持退票',
                        },
                        attr: {
                            fontSize: '14px', height: '120px', color: '#333333',icon:'lm-icon-required',iconIsRight:true
                        }
                    }
                }
            }, pvt_v14: function () {
                return {
                    smRadio2: {
                        paraVarPair: {
                            radioData: 'radioData'
                        },
                        para: {
                            radioData: 1,
                        },
                        attr: {
                            radioArr: this.radioArr
                        }
                    }
                }
            }, pvt_v15: function () {
                return {
                    smInput: {
                        paraVarPair: {},
                        para: {
                            text: [{
                                $table: this.mac.tb.groupActivity,
                                $arrField: [this.mac.fd.groupActivity.refundExplain],
                                $arrValue: [this.para.activityID]
                            }],
                        },
                        attr: {
                            placeholder: '请填写退票说明', type: 'textarea', size: 'large', disabled: this.refundDisable
                        }
                    }
                }
            }, pvt_v16: function () {
                return {
                    smText10: {
                        paraVarPair: {},
                        para: {
                            textData: '退票限制',
                        },
                        attr: {
                            fontSize: '14px', height: '40px', color: '#333333'
                        }
                    }
                }
            }, pvt_v17: function () {
                return {
                    smText11: {
                        paraVarPair: {},
                        para: {
                            textData: '活动开始前',
                        },
                        attr: {
                            fontSize: '14px', height: '40px', color: '#333333'
                        }
                    }
                }
            }, pvt_v18: function () {
                return {
                    smSelect: {
                        paraVarPair: {},
                        para: {
                            value: this.refuseDate,
                            listSource:this.listSource
                        },
                        attr: {
                            defaultExpandAll: true,saveValue:true,disabled:this.refuseDateDisabled
                        }
                    }
                }
            },pvt_v19: function () {
                return {
                    smText12: {
                        paraVarPair: {},
                        para: {
                            textData: '可退票',
                        },
                        attr: {
                            fontSize: '14px', height: '40px', color: '#333333'
                        }
                    }
                }
            }, pvt_v20: function () {
                return {
                    smText13: {
                        paraVarPair: {},
                        para: {
                            textData: '退票说明',
                        },
                        attr: {
                            fontSize: '14px', height: '14px', color: '#333333'
                        }
                    }
                }
            },pvt_v21: function () {
                return {
                    smText14: {
                        paraVarPair: {},
                        para: {
                            textData: '退票说明不能为空'
                        },
                        attr: {
                            fontSize: '12px', height: '20px', color: '#F56C6C'
                        }
                    }
                }
            },
        },
        watch: {},
        mounted: function () {
            this.pvt_initSysData();
            let ulEl = this.$refs.itemForm;
            ulEl.addEventListener('dragstart', this.dragStart);
            ulEl.addEventListener('dragover', this.dragOver);
            ulEl.addEventListener('dragend', this.dragEnd);
        },
        created: function () {
            Object.assign(this, libSys, libUpload);
        },
        beforeDestroy() {
            let ulEl = this.$refs.itemForm;
            ulEl.removeEventListener('dragstart', this.dragStart);
            ulEl.removeEventListener('dragover', this.dragOver);
            ulEl.removeEventListener('dragend', this.dragEnd);
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
                let fnname = 'ticketType.startModule';
                let ref = {
                    sm1: 'smText1',
                    sm2: 'smText2',
                    sm3: 'smRadio1',
                    sm4: 'smText3',
                    sm5: 'smText4',
                    sm6: 'smText5',
                    sm7: 'smText6',
                    sm8: 'smText7',
                    sm9: 'smText8',
                    sm10: 'smTicketTypeAdd',
                    // sm11:'smTicketAttach',
                    sm12: 'smButton',
                    sm13: 'smText9',
                    sm14: 'smRadio2',
                    sm15: 'smInput',
                    sm16: 'smText10',
                    sm17: 'smText11',
                    sm18: 'smSelect',
                    sm19: 'smText12',
                    sm20: 'smText13',
                    sm21: 'smText14',
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
                                para.nStep = 'queryGroupActivityTicketType';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'queryGroupActivityTicketType':
                            objectName = $this.mac.tb.groupActivityTicketType;
                            parentRecord = [$this.para.activityID];
                            condition = null;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [];
                            dbData[$this.mac.fd.groupActivityTicketType.refundEndTime] = [];
                            dbData[$this.mac.fd.groupActivityTicketType.startTime] = [];
                            $this.sys.api.recordQuery(objectName, parentRecord, condition, dbData,
                                function () {
                                    $this.ticketTypeArr = dbData[$this.mac.fd.id];
                                    if(dbData[$this.mac.fd.groupActivityTicketType.refundEndTime][0]!==null){
                                        if(dbData[$this.mac.fd.groupActivityTicketType.refundEndTime][0].toString().indexOf('-')===-1){
                                            $this.refuseDate = dbData[$this.mac.fd.groupActivityTicketType.refundEndTime][0]+'天'
                                        }else{
                                            let differTime = new Date((new Date(dbData[$this.mac.fd.groupActivityTicketType.startTime][0]) - new Date(dbData[$this.mac.fd.groupActivityTicketType.refundEndTime][0]))).getDate();
                                            $this.refuseDate = (differTime-1)+'天';
                                        }
                                    }else{
                                        $this.refuseDate = '';
                                    }
                                    for (var i = 0; i < $this.ticketTypeArr.length; i++) {
                                        $this.activitySceneID.push($this.para.activityID);
                                        $this.cloumBillArr.push($this.cloumBill);
                                        $this.ticketTypeDelete.push(true)
                                    }
                                    if ($this.ticketTypeDelete.length === 1) {
                                        $this.ticketTypeDelete[0] = false;
                                    }
                                    para.i = 0;
                                    $this.$nextTick(() => {
                                        para.nStep = 'startModule10';
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.startModule(successCallBack, errorCallBack)
                                        }
                                    })
                                }, para.errorCallBack)
                            break;
                        case 'startModule10':
                            $this.sm[ref.sm10][para.i].startModule(function () {
                                para.i++
                                if (para.i === $this.ticketTypeArr.length) {
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
                                para.nStep = 'startModule13';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule13':
                            $this.sm[ref.sm13].startModule(function () {
                                para.nStep = 'startModule14';
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
                                para.nStep = 'startModule21';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule21':
                            $this.sm[ref.sm21].startModule(function () {
                                para.nStep = 'showModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showModules':
                            //显示子组件
                            let refId = ["smText1", "smText2", "smRadio1", "smText3", "smText4", "smText5", "smText6", "smText7", "smText8", "smTicketTypeAdd", "smButton", "smText9", "smRadio2", "smInput", "smText10", "smText11", "smSelect", "smText12", "smText13"];
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
            dragStart(event) {
                let $this = this;
                //firefox设置了setData后元素才能拖动！！！！
                event.dataTransfer.setData("te", event.target.innerHTML); //不能使用text，firefox会打开新tab
                // event.dataTransfer.setData("self", event.target);
                // this.draging = event.target.parentNode;
                this.draging = event.target;
                $this.dragTicketTypeArr = [];
                for (var i = 0; i < $this.ticketTypeArr.length; i++) {
                    $this.dragTicketTypeArr.push($this.ticketTypeArr[i])
                }
            },
            dragOver(event) {
                let $this = this;
                // event.preventDefault();
                let target = event.target;
                // 因为dragover会发生在ul上，所以要判断是不是li
                // console.error(target)
                if (target.className.indexOf('ticketTypeAdd-top') !== -1 && target !== this.draging) {
                    let dragIndex = this._index(this.draging.parentNode); // 正在拖动的元素
                    let targetIndex = this._index(target.parentNode); // 目标
                    /*
                    当前li的index大于容器li时就插入在容器的前面，反之插入在容器的后面
                     */
                    this.dragIndex = dragIndex;
                    this.targetIndex = targetIndex;
                    let dragId = $this.dragTicketTypeArr[$this.dragIndex];
                    let targetId = $this.dragTicketTypeArr[$this.targetIndex];
                    $this.dragTicketTypeArr[$this.dragIndex] = targetId;
                    $this.dragTicketTypeArr[$this.targetIndex] = dragId;
                    // console.error($this.dragTicketTypeArr)
                    if (dragIndex < targetIndex) {
                        // 插后面
                        target.parentNode.parentNode.insertBefore(this.draging.parentNode, target.parentNode.nextSibling);
                        // this.resortRandom = parseInt(Math.random() * 100000)
                    } else {
                        // 插前面
                        target.parentNode.parentNode.insertBefore(this.draging.parentNode, target.parentNode);
                        // this.resortRandom = parseInt(Math.random() * 100000)
                    }
                }
            },
            dragEnd(event) {
                let $this = this;
                $this.activityTicketTypeIDChange(function () {

                }, function (error) {
                    console.error(error)
                })
            },

            _index(el) {
                let index = 0;
                if (!el || !el.parentNode) {
                    return -1;
                }
                while (el && (el = el.previousElementSibling)) {
                    //console.log(el);
                    index++;
                }
                return index;
            },
            activityTicketTypeIDChange: function (successCallBack, errorCallBack) {
                let $this = this;
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                let para;
                let dbFlag;
                let fnname = 'ticketType.activityTicketTypeIDChange';

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
                        case 'activityTicketTypeRead':
                            if ($this.equar($this.dragTicketTypeArr, $this.ticketTypeArr)) {
                                para.nStep = 'end'
                                dbFlag += 1;
                                break;
                            }
                            para.index = $this.dragTicketTypeArr.indexOf($this.activityTicketTypeID);
                            objectName = $this.mac.tb.groupActivityTicketType;
                            dbData = {};
                            dbData[$this.mac.fd.id] = $this.dragTicketTypeArr;
                            $this.sys.api.recordRead(objectName, dbData,
                                function () {
                                    para.allData = dbData;
                                    para.nStep = 'activityTicketTypeModify'
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.activityTicketTypeIDChange(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'activityTicketTypeModify':
                            objectName = $this.mac.tb.groupActivityTicketType;
                            parentRecord = null;
                            dbData = {};
                            dbData[$this.mac.fd.id] = $this.ticketTypeArr;
                            dbData[$this.mac.fd.groupActivityTicketType.name] = para.allData[$this.mac.fd.groupActivityTicketType.name];
                            dbData[$this.mac.fd.groupActivityTicketType.explain] = para.allData[$this.mac.fd.groupActivityTicketType.explain];
                            dbData[$this.mac.fd.groupActivityTicketType.price] = para.allData[$this.mac.fd.groupActivityTicketType.price];
                            dbData[$this.mac.fd.groupActivityTicketType.poll] = para.allData[$this.mac.fd.groupActivityTicketType.poll];
                            dbData[$this.mac.fd.groupActivityTicketType.approval] = para.allData[$this.mac.fd.groupActivityTicketType.approval];
                            dbData[$this.mac.fd.groupActivityTicketType.minNumber] = para.allData[$this.mac.fd.groupActivityTicketType.minNumber];
                            dbData[$this.mac.fd.groupActivityTicketType.maxNumber] = para.allData[$this.mac.fd.groupActivityTicketType.maxNumber];
                            dbData[$this.mac.fd.groupActivityTicketType.startTime] = para.allData[$this.mac.fd.groupActivityTicketType.startTime];
                            dbData[$this.mac.fd.groupActivityTicketType.endTime] = para.allData[$this.mac.fd.groupActivityTicketType.endTime];
                            dbData[$this.mac.fd.groupActivityTicketType.saleStartTime] = para.allData[$this.mac.fd.groupActivityTicketType.saleStartTime];
                            dbData[$this.mac.fd.groupActivityTicketType.saleEndTime] = para.allData[$this.mac.fd.groupActivityTicketType.saleEndTime];
                            dbData[$this.mac.fd.groupActivityTicketType.refundEndTime] = para.allData[$this.mac.fd.groupActivityTicketType.refundEndTime];
                            $this.sys.api.recordModify(objectName, dbData,
                                function () {
                                    para.i = 0;
                                    para.ticketTypeArr = $this.ticketTypeArr;
                                    $this.ticketTypeArr = [];
                                    $this.$nextTick(() => {
                                        $this.ticketTypeArr = para.ticketTypeArr;
                                        $this.$nextTick(() => {
                                            para.nStep = 'ticketTypeAddStartModule'
                                            dbFlag += 1;
                                            if (dbFlag === 2) {
                                                $this.activityTicketTypeIDChange(successCallBack, errorCallBack)
                                            }
                                        })
                                    })
                                }, para.errorCallBack)
                            break;
                        case 'ticketTypeAddStartModule':
                            $this.sm['smTicketTypeAdd'][para.i].startModule(function () {
                                para.i++
                                if (para.i === $this.ticketTypeArr.length) {
                                    para.nStep = 'showTicketAttach';
                                }
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.activityTicketTypeIDChange(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break
                        case 'showTicketAttach':
                            if ($this.activityTicketTypeID === '') {
                                dbFlag += 1;
                                para.nStep = 'end';
                            } else {
                                $this.activityTicketTypeID = $this.ticketTypeArr[para.index];
                                $this.sm['smTicketTypeAdd'][para.index].ticketAttachDeleteShow(
                                    function () {
                                        para.nStep = 'end';
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.activityTicketTypeIDChange(successCallBack, errorCallBack)
                                        }
                                    }, para.errorCallBack)
                            }
                            break;
                        case 'end':
                            $this.dataOutput($this.mac.tb.groupActivity,$this.para.activityID)
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
            ticketTypeAdd: function (successCallBack, errorCallBack) {
                let $this = this;
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                let para;
                let dbFlag;
                let fnname = 'ticketType.ticketTypeAdd';

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
                        case 'queryGroupActivityTicketType':
                            objectName = $this.mac.tb.groupActivityTicketType;
                            parentRecord = [$this.para.activityID];
                            condition = null;
                            dbData = {};
                            dbData[$this.mac.fd.groupActivityTicketType.name] = [];
                            dbData[$this.mac.fd.groupActivityTicketType.refundEndTime] = [];
                            $this.sys.api.recordQuery(objectName, parentRecord, condition, dbData,
                                function () {
                                    para.name = dbData[$this.mac.fd.groupActivityTicketType.name];
                                    para.refundEndTime = dbData[$this.mac.fd.groupActivityTicketType.refundEndTime][0];
                                    para.i = 1;
                                    while (para.name.indexOf('票种' + para.i) !== -1) {
                                        para.i++;
                                    }
                                    para.nStep = 'groupActivityTicketTypeNew'
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.ticketTypeAdd(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'groupActivityTicketTypeNew':
                            objectName = $this.mac.tb.groupActivityTicketType;
                            parentRecord = $this.para.activityID;
                            dbData = {};
                            dbData[$this.mac.fd.groupActivityTicketType.name] = ['票种' + para.i];
                            dbData[$this.mac.fd.groupActivityTicketType.price] = [0];
                            dbData[$this.mac.fd.groupActivityTicketType.approval] = [$this.mac.enum.groupActivityTicketType.approval.no];
                            dbData[$this.mac.fd.groupActivityTicketType.minNumber] = [1];
                            dbData[$this.mac.fd.groupActivityTicketType.maxNumber] = [20];
                            dbData[$this.mac.fd.groupActivityTicketType.refundEndTime] = [para.refundEndTime];
                            dbData[$this.mac.fd.groupActivityTicketType.number] = [para.name.length];
                            $this.sys.api.recordNew(objectName, parentRecord, dbData,
                                function () {
                                    $this.ticketTypeArr.push(dbData[$this.mac.fd.id][0]);
                                    $this.cloumBillArr.push($this.cloumBill);
                                    $this.activitySceneID.push($this.para.activityID);
                                    if ($this.ticketTypeDelete.length === 1) {
                                        $this.ticketTypeDelete[0] = true;
                                    }
                                    $this.ticketTypeDelete.push(true);
                                    $this.$nextTick(() => {
                                        // $this.sm.smTicketTypeAdd[$this.ticketTypeArr.length-1].startModule(function () {
                                        //     para.nStep = 'end'
                                        //     dbFlag += 1;
                                        //     if (dbFlag === 2) {
                                        //         $this.ticketTypeAdd(successCallBack, errorCallBack)
                                        //     }
                                        // },para.errorCallBack)
                                        para.i = 0;
                                        para.nStep = 'refreshTicketAdd'
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.ticketTypeAdd(successCallBack, errorCallBack)
                                        }
                                    })
                                }, para.errorCallBack)
                            break;
                        case 'refreshTicketAdd':
                            $this.sm['smTicketTypeAdd'][para.i].startModule(function () {
                                para.i++
                                if (para.i === $this.ticketTypeArr.length) {
                                    para.nStep = 'showTicketAttach';
                                }
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.ticketTypeAdd(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showTicketAttach':
                            if ($this.activityTicketTypeID === '') {
                                para.nStep = 'end';
                                dbFlag += 1;
                                break
                            }
                            $this.sm['smTicketTypeAdd'][$this.ticketTypeArr.indexOf($this.activityTicketTypeID)].ticketAttachDeleteShow(
                                function () {
                                    para.nStep = 'end';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        if (dbFlag === 2) {
                                            $this.ticketTypeAdd(successCallBack, errorCallBack)
                                        }
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'end':
                            $this.dataOutput($this.mac.tb.groupActivity,$this.para.activityID)
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
            ticketSetShow: function (id, successCallBack, errorCallBack) {
                let $this = this;
                if ($this.activityTicketTypeID === id && $this.activityTicketTypeID !== '') {
                    // $this.hideTicketAttach(function () {
                    $this.activityTicketTypeID = '';
                    successCallBack()
                    // }, errorCallBack)
                } else {
                    $this.hideTicketAttach(function () {
                        $this.activityTicketTypeID = id;
                        successCallBack()
                    }, errorCallBack)
                }
            },
            openAttach:function(id){
                let $this = this;
                if($this.activityTicketTypeID!==id&&$this.activityTicketTypeID !== ''){
                    $this.sm.smTicketTypeAdd[$this.ticketTypeArr.indexOf($this.activityTicketTypeID)].ticketAttachHide(function () {
                        $this.activityTicketTypeID = id;
                        $this.sm.smTicketTypeAdd[$this.ticketTypeArr.indexOf($this.activityTicketTypeID)].ticketAttachDeleteShow(function () {

                        },function () {

                        })
                    }, function () {

                    });
                }else if($this.activityTicketTypeID === ''||$this.activityTicketTypeID!==id){
                    $this.activityTicketTypeID = id;
                    $this.sm.smTicketTypeAdd[$this.ticketTypeArr.indexOf($this.activityTicketTypeID)].ticketAttachDeleteShow(function () {

                    },function () {

                    })
                }
                $this.dataOutput($this.mac.tb.groupActivity,$this.para.activityID)
            },
            hideTicketAttach: function (successCallBack, errorCallBack) {
                let $this = this;
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                let para;
                let dbFlag;
                let fnname = 'ticketType.hideTicketAttach';

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
                            para.i = 0;
                            dbFlag += 1;
                            para.nStep = 'hideTicketAttach'
                            break;
                        case 'hideTicketAttach':
                            $this.sm.smTicketTypeAdd[para.i].ticketAttachHide(function () {
                                para.i++;
                                if (para.i === $this.ticketTypeArr.length) {
                                    para.nStep = 'end'
                                }
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.hideTicketAttach(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break
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
            ticketDelete: function (id, successCallBack, errorCallBack) {
                let $this = this;
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                let para;
                let dbFlag;
                let fnname = 'ticketType.ticketDelete';

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
                        case 'queryGroupActivityTicketType':
                            objectName = $this.mac.tb.groupActivityTicketType;
                            parentRecord = [$this.para.activityID];
                            condition = null;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [];
                            dbData[$this.mac.fd.groupActivityTicketType.name] = [];
                            $this.sys.api.recordQuery(objectName, parentRecord, condition, dbData,
                                function () {
                                    para.idArr = dbData[$this.mac.fd.id];
                                    para.name = dbData[$this.mac.fd.groupActivityTicketType.name][para.idArr.indexOf(id)];
                                    $this.$confirm('此操作将删除' + para.name + ', 是否继续?', '提示', {
                                        confirmButtonText: '删除',
                                        cancelButtonText: '取消',
                                        type: 'warning'
                                    }).then(() => {
                                        para.nStep = 'groupActivityTicketTypeDelete'
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.ticketDelete(id, successCallBack, errorCallBack)
                                        }
                                    }).catch(() => {
                                        $this.$message({
                                            type: 'info',
                                            message: '已取消删除'
                                        });
                                        para.nStep = 'end'
                                        para.result = 0;
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.ticketDelete(id, successCallBack, errorCallBack)
                                        }
                                    });
                                }, para.errorCallBack)
                            break;
                        case 'groupActivityTicketTypeDelete':
                            objectName = $this.mac.tb.groupActivityTicketType;
                            $this.sys.api.recordDelete(objectName, [id],
                                function () {
                                    para.index = $this.ticketTypeArr.indexOf(id);
                                    $this.ticketTypeArr.splice(para.index, 1);
                                    $this.cloumBillArr.splice(para.index, 1);
                                    $this.activitySceneID.splice(para.index, 1);
                                    $this.ticketTypeDelete.splice(para.index, 1);
                                    if ($this.ticketTypeArr.length === 1) {
                                        $this.ticketTypeDelete[0] = false;
                                    }
                                    para.nStep = 'groupActivityTicketTypeModify'
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.ticketDelete(id, successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'groupActivityTicketTypeModify':
                            objectName = $this.mac.tb.groupActivityTicketType;
                            dbData = {};
                            dbData[$this.mac.fd.id] = $this.ticketTypeArr;
                            dbData[$this.mac.fd.groupActivityTicketType.number] = [];
                            for(var i=0;i<dbData[$this.mac.fd.id].length;i++){
                                dbData[$this.mac.fd.groupActivityTicketType.number].push(i)
                            }
                            $this.sys.api.recordModify(objectName, dbData,
                                function () {
                                    para.nStep = 'refreshTicketAdd'
                                    para.i = 0;
                                    $this.$nextTick(() => {
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.ticketDelete(id, successCallBack, errorCallBack)
                                        }
                                    })
                                }, para.errorCallBack)
                            break;
                        case 'refreshTicketAdd':
                            $this.sm['smTicketTypeAdd'][para.i].startModule(function () {
                                para.i++
                                if (para.i === $this.ticketTypeArr.length) {
                                    para.nStep = 'showTicketAttach';
                                    para.result = 1;
                                    $this.$message({
                                        type: 'success',
                                        message: para.name + '已删除'
                                    });
                                }
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.ticketDelete(id, successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showTicketAttach':
                            if ($this.activityTicketTypeID === id || $this.activityTicketTypeID === '') {
                                $this.activityTicketTypeID = '';
                                dbFlag += 1;
                                para.nStep = 'end';
                            } else {
                                $this.sm['smTicketTypeAdd'][$this.ticketTypeArr.indexOf($this.activityTicketTypeID)].ticketAttachDeleteShow(
                                    function () {
                                        para.nStep = 'end';
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.ticketDelete(id, successCallBack, errorCallBack)
                                        }
                                    }, para.errorCallBack)
                            }
                            break;
                        case 'end':
                            $this.dataOutput($this.mac.tb.groupActivity,$this.para.activityID)
                            para.successCallBack(para.result);
                            return;
                        default:
                            para.errorCallBack('error');
                            return;
                    }
                    dbFlag += 1;
                    if (dbFlag === 1) return;
                }
            },
            wrongInfoShow: function (successCallBack, errorCallBack) {
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                var $this = this;
                var fnname = 'ticketType.wrongInfoShow';
                if (successCallBack !== null) {
                    errorCallBack = {
                        successCallBack: successCallBack,
                        errorCallBack: errorCallBack,
                        nStep: 0
                    }
                    successCallBack = null
                }
                let para = errorCallBack;
                while (1) {
                    if ($this.debugFlag) {
                        console.log(fnname + ': para.nStep = ' + para.nStep);
                    }
                    var $dbFlag = 0;
                    switch (para.nStep) {
                        case 0:
                        // case 'getAvtivityTime':
                        //     objectName = $this.mac.tb.groupActivity;
                        //     dbData = {};
                        //     dbData[$this.mac.fd.id] = [$this.para.activityID];
                        //     dbData[$this.mac.fd.groupActivity.startTime] = [];
                        //     dbData[$this.mac.fd.groupActivity.endTime] = [];
                        //     $this.sys.api.recordRead(objectName, dbData,
                        //         function () {
                        //             para.startTime = dbData[$this.mac.fd.groupActivity.startTime][0];
                        //             para.endTime = dbData[$this.mac.fd.groupActivity.endTime][0];
                        //             para.nStep = 'groupActivityTicketTypeQuery';
                        //             if (++$dbFlag === 2) {
                        //                 $this.wrongInfoShow(successCallBack, errorCallBack);
                        //             }
                        //         }, para.errorCallBack)
                        //     break
                        case 'groupActivityTicketTypeQuery':
                            objectName = $this.mac.tb.groupActivityTicketType;
                            parentRecord = [$this.para.activityID];
                            condition = null;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [];
                            $this.sys.api.recordQuery(objectName, parentRecord, condition, dbData,
                                function () {
                                    para.length = dbData[$this.mac.fd.id].length;
                                    para.IDArr = dbData[$this.mac.fd.id];
                                    para.i = 0;
                                    para.nStep = 'ticketTypeAddCheck';
                                    if (++$dbFlag === 2) {
                                        $this.wrongInfoShow(successCallBack, errorCallBack);
                                    }
                                }, para.errorCallBack)
                            break;
                        // case 'groupActivityTicketTypeModify':
                        //     objectName = $this.mac.tb.groupActivityTicketType;
                        //     dbData = {};
                        //     dbData[$this.mac.fd.id] =  para.IDArr;
                        //     dbData[$this.mac.fd.groupActivityTicketType.startTime] = [];
                        //     dbData[$this.mac.fd.groupActivityTicketType.endTime] = [];
                        //     for(var i=0;i<para.IDArr.length;i++){
                        //         dbData[$this.mac.fd.groupActivityTicketType.startTime].push(para.startTime);
                        //         dbData[$this.mac.fd.groupActivityTicketType.endTime].push(para.endTime);
                        //     }
                        //     $this.sys.api.recordModify(objectName, dbData,
                        //         function () {
                        //             para.i = 0;
                        //             para.nStep = 'ticketTypeAddCheck';
                        //             if (++$dbFlag === 2) {
                        //                 $this.wrongInfoShow(successCallBack, errorCallBack);
                        //             }
                        //         }, para.errorCallBack)
                        //     break;
                        case 'ticketTypeAddCheck':
                            $this.sm['smTicketTypeAdd'][para.i].wrongInfoShow(function () {
                                para.i++
                                if (para.i === para.length) {
                                    para.nStep = 'getRefundEndTime';
                                }
                                if (++$dbFlag === 2) {
                                    $this.wrongInfoShow(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break
                        case 'getRefundEndTime':
                            objectName = $this.mac.tb.groupActivityTicketType;
                            parentRecord = [$this.para.activityID];
                            condition = null;
                            dbData = {};
                            dbData[$this.mac.fd.groupActivityTicketType.refundEndTime] = [];
                            this.sys.api.recordQuery(objectName,parentRecord,condition, dbData,
                                function () {
                                    para.refundEndTime =  dbData[$this.mac.fd.groupActivityTicketType.refundEndTime][0];
                                    if(para.refundEndTime===null){
                                        para.nStep = 'end';
                                    }else{
                                        para.nStep = 'getRefundReason';
                                    }
                                    if (++$dbFlag === 2) {
                                        $this.wrongInfoShow(successCallBack, errorCallBack);
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'getRefundReason':
                            objectName = $this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityID];
                            dbData[$this.mac.fd.groupActivity.refundExplain] = [];
                            this.sys.api.recordRead(objectName, dbData,
                                function () {
                                    para.refundExplain =  dbData[$this.mac.fd.groupActivity.refundExplain][0];
                                    if(para.refundExplain===null||para.refundExplain===''){
                                        para.nStep = 'showModules';
                                    }else{
                                        para.nStep = 'end';
                                    }
                                    if (++$dbFlag === 2) {
                                        $this.wrongInfoShow(successCallBack, errorCallBack);
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'showModules':
                            //显示子组件
                            let refId = ["smText14"];
                            $this.showSubModule(refId, true, function () {
                                $this.$message({
                                    type: 'error',
                                    message: '退票说明不能为空'
                                });
                                $("html,body").animate({
                                    scrollTop: $('.ticket-type .item')[2].offsetTop-100+ "px"
                                },200);
                                para.nStep = 'default';
                                if (++$dbFlag === 2) {
                                    $this.wrongInfoShow(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'end':
                            para.successCallBack()
                            return;
                        case 'default':
                            return;
                    }
                    if (++$dbFlag === 1) {
                        return;
                    }
                }
            },

            refundExplainSelect: function (successCallBack, errorCallBack) {
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                var $this = this;
                var fnname = 'ticketType.refundExplainSelect';
                if (successCallBack !== null) {
                    errorCallBack = {
                        successCallBack: successCallBack,
                        errorCallBack: errorCallBack,
                        nStep: 0
                    }
                    successCallBack = null
                }
                let para = errorCallBack;
                while (1) {
                    if ($this.debugFlag) {
                        console.log(fnname + ': para.nStep = ' + para.nStep);
                    }
                    var $dbFlag = 0;
                    switch (para.nStep) {
                        case 0:
                            if ($this.radioData === $this.radioArr[0].label) {
                                $this.refundDisable = false;
                                $this.refuseDateDisabled = false;
                                $this.refuseDate = 1;
                                para.nStep = 'getAllActivityTicketTypeID';
                            } else {
                                $this.refundDisable = true;
                                $this.refuseDateDisabled = true;
                                $this.refuseDate = '';
                                para.nStep = 'groupActivityModify';
                            }
                            $dbFlag++
                            break
                        case 'groupActivityModify':
                            objectName = $this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityID];
                            dbData[$this.mac.fd.groupActivity.refundExplain] = [null];
                            this.sys.api.recordModify(objectName, dbData,
                                function () {
                                    para.nStep = 'getAllActivityTicketTypeID';
                                    if (++$dbFlag === 2) {
                                        $this.refundExplainSelect(successCallBack, errorCallBack);
                                    }
                            },para.errorCallBack)
                            break;
                        case 'getAllActivityTicketTypeID':
                            objectName = $this.mac.tb.groupActivityTicketType;
                            parentRecord = [$this.para.activityID];
                            condition = null;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [];
                            this.sys.api.recordQuery(objectName,parentRecord,condition, dbData,
                                function () {
                                    para.allID =  dbData[$this.mac.fd.id];
                                    para.nStep = 'activityTicketTypeModify';
                                    if (++$dbFlag === 2) {
                                        $this.refundExplainSelect(successCallBack, errorCallBack);
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'activityTicketTypeModify':
                            objectName = $this.mac.tb.groupActivityTicketType;
                            dbData = {};
                            dbData[$this.mac.fd.id] = para.allID;
                            dbData[$this.mac.fd.groupActivityTicketType.refundEndTime] = []
                            for(var i=0;i<para.allID.length;i++){
                                if($this.refuseDate ===1){
                                    dbData[$this.mac.fd.groupActivityTicketType.refundEndTime].push($this.refuseDate)
                                }else {
                                    dbData[$this.mac.fd.groupActivityTicketType.refundEndTime].push(null)
                                }
                            }
                            $this.sys.api.recordModify(objectName, dbData,
                                function () {
                                    para.nStep = 'startModule';
                                    $this.showSubModule(['smText14'], false, function () {}, function () {});
                                    $this.forceUpdateData(function () {
                                        if (++$dbFlag === 2) {
                                            $this.refundExplainSelect(successCallBack, errorCallBack);
                                        }
                                    })
                                }, para.errorCallBack)
                            break;
                        case 'startModule':
                            $this.sm['smSelect'].startModule(function () {
                                $this.sm['smInput'].dataRefresh();
                                para.nStep = 'end';
                                if (++$dbFlag === 2) {
                                    $this.refundExplainSelect(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break
                        case 'end':
                            $this.dataOutput($this.mac.tb.groupActivity,$this.para.activityID)
                            para.successCallBack()
                            return;
                    }
                    if (++$dbFlag === 1) {
                        return;
                    }
                }
            },
            refundDateSelect:function (id,successCallBack, errorCallBack) {
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                var $this = this;
                var fnname = 'ticketType.refundDateSelect';
                if (successCallBack !== null) {
                    errorCallBack = {
                        successCallBack: successCallBack,
                        errorCallBack: errorCallBack,
                        nStep: 0
                    }
                    successCallBack = null
                }
                let para = errorCallBack;
                while (1) {
                    if ($this.debugFlag) {
                        console.log(fnname + ': para.nStep = ' + para.nStep);
                    }
                    var $dbFlag = 0;
                    switch (para.nStep) {
                        case 0:
                        case 'getAllActivityTicketTypeID':
                            objectName = $this.mac.tb.groupActivityTicketType;
                            parentRecord = [$this.para.activityID];
                            condition = null;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [];
                            this.sys.api.recordQuery(objectName,parentRecord,condition, dbData,
                                function () {
                                    para.allID =  dbData[$this.mac.fd.id];
                                    para.nStep = 'activityTicketTypeModify';
                                    if (++$dbFlag === 2) {
                                        $this.refundDateSelect(id,successCallBack, errorCallBack);
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'activityTicketTypeModify':
                            objectName = $this.mac.tb.groupActivityTicketType;
                            dbData = {};
                            dbData[$this.mac.fd.id] = para.allID;
                            dbData[$this.mac.fd.groupActivityTicketType.refundEndTime] = []
                            for(var j=0;j<para.allID.length;j++){
                                dbData[$this.mac.fd.groupActivityTicketType.refundEndTime].push(id)
                            }
                            this.sys.api.recordModify(objectName, dbData,
                                function () {
                                    para.nStep = 'end';
                                    if (++$dbFlag === 2) {
                                        $this.refundDateSelect(id,successCallBack, errorCallBack);
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'end':
                            $this.dataOutput($this.mac.tb.groupActivity,$this.para.activityID)
                            para.successCallBack()
                            return;
                    }
                    if (++$dbFlag === 1) {
                        return;
                    }
                }
            },
            wrongInfoHide:function(value){
                if(value!==''&&value!==null){
                    let refId = ["smText14"];
                    this.showSubModule(refId, false, function () {},function () {})
                }
                this.dataOutput(this.mac.tb.groupActivity,this.para.activityID)
            },
            equar: function (a, b) {
                // 判断数组的长度
                if (a.length !== b.length) {
                    return false
                } else {
                    // 循环遍历数组的值进行比较
                    for (let i = 0; i < a.length; i++) {
                        if (a[i] !== b[i]) {
                            return false
                        }
                    }
                    return true;
                }
            },
            dataOutput:function (tableName,id) {
                let $this = this;
                $this.sys.api.dataOutput(tableName, [id], '',
                    function () {

                },function (error) {console.error(error)})
            },
            setPara: function (successCallBack, errorCallBack) {
                var para = {};
                para.successCallBack = successCallBack;
                para.errorCallBack = errorCallBack;
                para.nStep = 0;
                return para;
            },
            smButton_buttonClickEvent: function () {
                this.ticketTypeAdd(function () {
                }, function () {
                })
            },
            smTicketTypeAdd_ticketDeleteEvent: function (id, successCallBack, errorCallBack) {
                this.ticketDelete(id, successCallBack, errorCallBack);
            },
            smTicketTypeAdd_ticketSetEvent: function (id, successCallBack, errorCallBack) {
                this.ticketSetShow(id, successCallBack, errorCallBack)
            },
            smTicketTypeAdd_openAttachEvent: function (id ) {
                this.openAttach(id)
            },
            smRadio1_dataModifyEvent: function () {
                this.refundExplainSelect(function () {},function () {})
            },
            smRadio2_dataModifyEvent: function () {
                this.refundExplainSelect(function () {},function () {})
            },
            smSelect_dataModifyEvent: function (id) {
                this.refundDateSelect(id,function () {},function () {})
            },
            smInput_dataModifyEvent: function (value) {
                this.wrongInfoHide(value)
            },
        }
    }
</script>
<style lang="scss">
    .ticket-type {
        .item-name {
            i{
                font-size: 26px;
                color: #F45051;
            }
        }
        .el-icon-warning {
            color: #F56C6C;
            vertical-align: middle;
            margin: -2px 5px 0 0;
        }
        .info-option {
            .lm-radio {
                height: 40px;
                line-height: 40px;
            }

            .el-input__inner {
                height: 40px;
            }

            .item {
                .h-120 {
                    height: 120px;

                    .el-textarea__inner {
                        height: 80px;
                    }

                    .svg-container {
                        display: none;
                    }
                }
            }

            .attach-item{
                .attach-item-content{
                    .lm-select{
                        height: 28px;
                        line-height: 28px;
                        .el-select{
                            height: 28px;
                            .el-input{
                                height: 28px;
                                .el-input__inner{
                                    height: 28px !important;
                                    line-height: 28px;
                                }
                                .el-input__suffix{
                                    .el-icon-arrow-up:before{
                                        vertical-align: bottom;
                                        margin-bottom: 10px;
                                        height: 28px;
                                        line-height: 28px;
                                        display: inline-block;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
</style>
<style lang="scss" scoped>
    .row {

    }

    .ticket-type {
        box-shadow: 0px 0px 8px 0px rgba(48, 49, 51, 0.1);
        border-radius: 4px;

        .info-title {
            padding: 0 40px;
            height: 64px;
            background: #ffffff;
            margin-top: 15px;
            border-bottom: 2px solid #12B0FF;
        }

        .info-option {
            padding: 40px 95px;
            background: #ffffff;

            .item {
                display: flex;
                margin-bottom: 40px;

                .item-name {
                    width: 135px;
                    height: 40px;
                    position: relative;
                }
                .h-120{
                    .item-name-level {
                        position: absolute;
                        display: block;
                        width: 10px;
                        left: 88px;
                        top: 60px;
                        height: 10px;
                        background-image: url("../../../assets/level.png");
                    }
                }

                .item-content {
                    position: relative;
                    flex: 1;

                    .col {
                        vertical-align: top;
                    }

                    .item-form {
                        background: rgba(255, 255, 255, 1);
                        border: 1px solid rgba(220, 223, 230, 1);
                        border-radius: 4px;

                        .item-form-header {
                            padding: 0 20px;
                            text-align: center;
                            height: 40px;
                            background: linear-gradient(0deg, rgba(242, 242, 242, 1) 0%, rgba(249, 249, 249, 1) 49%, rgba(255, 255, 255, 1) 100%);
                            box-shadow: 0px 1px 3px 0px rgba(48, 49, 51, 0.15);
                            border-radius: 4px 4px 0px 0px;
                        }

                        .item-form-con {
                            padding: 20px 0;
                        }

                        .item-form-attach {

                        }

                        .item-btn-add {
                            padding: 0 0 20px 0;
                        }
                    }
                }

                .h-120 {
                    height: 210px;
                }
                .line-40{
                    line-height: 40px;
                }
                .bg-f4f4f4{
                    background: #f4f4f4;
                    padding: 10px 20px 15px 30px;
                }
                .attach-item{
                    display: flex;
                    margin-bottom: 10px;

                    .item-name {
                        width: 90px;
                    }

                    .attach-item-content{
                        flex: 1;
                        position: relative;

                        .info-tip {
                            position: absolute;
                            top: 85px;
                        }
                        .col{
                            vertical-align: top;
                        }
                        .col.resuse-time{
                            width: 100px;
                            padding-right: 5px;
                            background:rgba(255,255,255,1);
                            border-radius:2px;
                            height:28px;
                            line-height: 28px;
                            vertical-align: middle;
                            margin: -2px 10px 0 10px;
                            display: inline-block;
                        }
                    }
                }

            }

            .item:last-child {
                margin-bottom: 0;
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


    /* ------ Module Style Variable ------- */

</style>
