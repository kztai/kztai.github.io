<template>
    <div class="ticketAttach">
        <div class="attach-item">
            <div class="item-name">
                <lm-link-text
                        ref="smText1"
                        refId="smText1"
                        v-show="pvt_isShow.v1 === 'smText1'"
                        :paraVarPair="pvt_v1.smText1.paraVarPair"
                        :para="pvt_v1.smText1.para"
                        :attr="pvt_v1.smText1.attr">
                </lm-link-text>
            </div>
            <div class="item-content item-first">
                <div class="col">
                    <lm-link-text
                            ref="smText2"
                            refId="smText2"
                            v-show="pvt_isShow.v2 === 'smText2'"
                            :paraVarPair="pvt_v2.smText2.paraVarPair"
                            :para="pvt_v2.smText2.para"
                            :attr="pvt_v2.smText2.attr">
                    </lm-link-text>
                </div>
                <div class="col attach-num">
                    <lm-select
                            ref="smSelect1"
                            refId="smSelect1"
                            v-show="pvt_isShow.v3 === 'smSelect1'"
                            :paraVarPair="pvt_v3.smSelect1.paraVarPair"
                            :para="pvt_v3.smSelect1.para"
                            :attr="pvt_v3.smSelect1.attr"
                    >
                    </lm-select>
                </div>
                <div class="col">
                    <lm-link-text
                            ref="smText3"
                            refId="smText3"
                            v-show="pvt_isShow.v4 === 'smText3'"
                            :paraVarPair="pvt_v4.smText3.paraVarPair"
                            :para="pvt_v4.smText3.para"
                            :attr="pvt_v4.smText3.attr">
                    </lm-link-text>
                </div>
                <div class="col attach-num">
                    <lm-select
                            ref="smSelect2"
                            refId="smSelect2"
                            v-show="pvt_isShow.v5 === 'smSelect2'"
                            :paraVarPair="pvt_v5.smSelect2.paraVarPair"
                            :para="pvt_v5.smSelect2.para"
                            :attr="pvt_v5.smSelect2.attr"
                    >
                    </lm-select>
                </div>
                <div class="col">
                    <lm-link-text
                            ref="smText4"
                            refId="smText4"
                            v-show="pvt_isShow.v6 === 'smText4'"
                            :paraVarPair="pvt_v6.smText4.paraVarPair"
                            :para="pvt_v6.smText4.para"
                            :attr="pvt_v6.smText4.attr">
                    </lm-link-text>
                </div>
            </div>
        </div>
        <div class="attach-item">
            <div class="item-name">
                <lm-link-text
                        ref="smText5"
                        refId="smText5"
                        v-show="pvt_isShow.v7 === 'smText5'"
                        :paraVarPair="pvt_v7.smText5.paraVarPair"
                        :para="pvt_v7.smText5.para"
                        :attr="pvt_v7.smText5.attr">
                </lm-link-text>
            </div>
            <div class="item-content item-time-select">
                <div class="col">
                    <lm-radio
                            ref="smRadio"
                            refId="smRadio"
                            v-show="pvt_isShow.v8 === 'smRadio'"
                            :paraVarPair="pvt_v8.smRadio.paraVarPair"
                            :para="pvt_v8.smRadio.para"
                            :attr="pvt_v8.smRadio.attr">
                    </lm-radio>
                </div>
                <div class="col item-time-picker">
                    <lm-date-picker
                            ref="smDate"
                            refId="smDate"
                            v-show="pvt_isShow.v9 === 'smDate'"
                            :paraVarPair="pvt_v9.smDate.paraVarPair"
                            :para="pvt_v9.smDate.para"
                            :attr="pvt_v9.smDate.attr">
                    </lm-date-picker>
                </div>
            </div>
        </div>
        <div class="attach-item">
            <div class="item-name">
                <lm-link-text
                        ref="smText8"
                        refId="smText8"
                        v-show="pvt_isShow.v12 === 'smText8'"
                        :paraVarPair="pvt_v12.smText8.paraVarPair"
                        :para="pvt_v12.smText8.para"
                        :attr="pvt_v12.smText8.attr">
                </lm-link-text>
            </div>
            <div class="item-content">
                <lm-date-picker
                        ref="smDate1"
                        refId="smDate1"
                        v-show="pvt_isShow.v13 === 'smDate1'"
                        :paraVarPair="pvt_v13.smDate1.paraVarPair"
                        :para="pvt_v13.smDate1.para"
                        :attr="pvt_v13.smDate1.attr">
                </lm-date-picker>
            </div>
        </div>
        <div class="attach-item">
            <div class="item-name">
                <lm-link-text
                        ref="smText6"
                        refId="smText6"
                        v-show="pvt_isShow.v10 === 'smText6'"
                        :paraVarPair="pvt_v10.smText6.paraVarPair"
                        :para="pvt_v10.smText6.para"
                        :attr="pvt_v10.smText6.attr">
                </lm-link-text>
            </div>
            <div class="item-content item-explain">
                <lm-input-text
                        ref="smText7"
                        refId="smText7"
                        v-show="pvt_isShow.v11 === 'smText7'"
                        :paraVarPair="pvt_v11.smText7.paraVarPair"
                        :para="pvt_v11.smText7.para"
                        :attr="pvt_v11.smText7.attr">
                </lm-input-text>
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
                    vessel: ["v1", "v2", "v3", "v4", "v5", "v6","v7", "v8", "v9", "v10", "v11", "v12", "v13"],
                    subModule: ["smText1", "smText2", "smSelect1","smText3","smSelect2", "smText4", "smText5", "smRadio","smDate","smText6","smText7","smText8","smDate1"]
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
                    "v13": null
                },

                pvt_eventPortInput: [
                    'openAttachEvent'
                ],

                mac:mac.mac,
                debugFlag:true,
                dropDown1:[],
                dropDown2:[],
                radioData:1,
                targetDate:'',
                radioArr:[{label: 1, text: '活动结束前均可报名'}, {label: 2, text: '自定义'}]
            }
        },
        computed: {
            pvt_v1: function () {
                return {
                    smText1: {
                        paraVarPair: {},
                        para: {
                            textData: '购票限制',
                        },
                        attr: {
                            fontSize: '14px', height: '40px', color: '#333333'
                        }
                    }
                }
            },pvt_v2: function () {
                return {
                    smText2: {
                        paraVarPair: {},
                        para: {
                            textData: '票种',
                        },
                        attr: {
                            fontSize: '14px', height: '40px', color: '#333333'
                        }
                    }
                }
            },pvt_v3: function () {
                return {
                    smSelect1: {
                        paraVarPair: {},
                        para: {
                            value: [{
                                $table: this.mac.tb.groupActivityTicketType,
                                $arrField: [this.mac.fd.groupActivityTicketType.minNumber],
                                $arrValue: [this.para.activityTicketTypeID]
                            }],
                            listSource:this.dropDown1
                        },
                        attr: {
                            defaultExpandAll: true,saveValue:true
                        }
                    }
                }
            },pvt_v4: function () {
                return {
                    smText3: {
                        paraVarPair: {},
                        para: {
                            textData: '张起售，每人最多购买',
                        },
                        attr: {
                            fontSize: '14px', height: '40px', color: '#333333'
                        }
                    }
                }
            },pvt_v5: function () {
                return {
                    smSelect2: {
                        paraVarPair: {},
                        para: {
                            value: [{
                                $table: this.mac.tb.groupActivityTicketType,
                                $arrField: [this.mac.fd.groupActivityTicketType.maxNumber],
                                $arrValue: [this.para.activityTicketTypeID]
                            }],
                            listSource:this.dropDown2
                        },
                        attr: {
                            defaultExpandAll: true,saveValue:true
                        }
                    }
                }
            },pvt_v6: function () {
                return {
                    smText4: {
                        paraVarPair: {},
                        para: {
                            textData: '张',
                        },
                        attr: {
                            fontSize: '14px', height: '40px', color: '#333333'
                        }
                    }
                }
            },pvt_v7: function () {
                return {
                    smText5: {
                        paraVarPair: {},
                        para: {
                            textData: '售票时间',
                        },
                        attr: {
                            fontSize: '14px', height: '40px', color: '#333333'
                        }
                    }
                }
            },pvt_v8: function () {
                return {
                    smRadio: {
                        paraVarPair: {
                            radioData:'radioData',
                        },
                        para: {
                            radioData: this.radioData
                        },
                        attr: {
                            radioArr: this.radioArr
                        }
                    }
                }
            },pvt_v9: function () {
                return {
                    smDate: {
                        paraVarPair: {},
                        para: {
                            startDate: [{ $table: this.mac.tb.groupActivityTicketType, $arrField: [this.mac.fd.groupActivityTicketType.saleStartTime], $arrValue: [this.para.activityTicketTypeID] }],
                            endDate: [{ $table: this.mac.tb.groupActivityTicketType, $arrField: [this.mac.fd.groupActivityTicketType.saleEndTime], $arrValue: [this.para.activityTicketTypeID] }]
                        },
                        attr: {
                            disabledDate:{
                                targetDate:this.targetDate,
                                direction:'after'
                            },
                            rangeSeparator: '至',
                            startPlaceholder: '开始日期',
                            endPlaceholder: '结束日期',
                            type: 'datetimerange',
                            valueFormat:'yyyy-MM-dd HH:mm:ss'
                        }
                    }
                }
            },pvt_v10: function () {
                return {
                    smText6: {
                        paraVarPair: {},
                        para: {
                            textData: '票种说明',
                        },
                        attr: {
                            fontSize: '14px', height: '40px', color: '#333333'
                        }
                    }
                }
            },pvt_v11: function () {
                return {
                    smText7: {
                        paraVarPair: {},
                        para: {
                            text: [{ $table: this.mac.tb.groupActivityTicketType, $arrField: [this.mac.fd.groupActivityTicketType.explain], $arrValue: [this.para.activityTicketTypeID] }]
                        },
                        attr: {
                            placeholder:'请填写票种说明',type: 'textarea', size: 'large'
                        }
                    }
                }
            },pvt_v12: function () {
                return {
                    smText8: {
                        paraVarPair: {},
                        para: {
                            textData: '票种时间',
                        },
                        attr: {
                            fontSize: '14px', height: '40px', color: '#333333'
                        }
                    }
                }
            },pvt_v13: function () {
                return {
                    smDate1: {
                        paraVarPair: {},
                        para: {
                            startDate: [{ $table: this.mac.tb.groupActivityTicketType, $arrField: [this.mac.fd.groupActivityTicketType.startTime], $arrValue: [this.para.activityTicketTypeID] }],
                            endDate: [{ $table: this.mac.tb.groupActivityTicketType, $arrField: [this.mac.fd.groupActivityTicketType.endTime], $arrValue: [this.para.activityTicketTypeID] }]
                        },
                        attr: {
                            rangeSeparator: '至',
                            startPlaceholder: '开始日期',
                            endPlaceholder: '结束日期',
                            type: 'datetimerange',
                            valueFormat:'yyyy-MM-dd HH:mm:ss'
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
                let fnname = 'ticketAttach.startModule';
                let ref = {
                    sm1: 'smText1',
                    sm2: 'smText2',
                    sm3: 'smSelect1',
                    sm4: 'smText3',
                    sm5: 'smSelect2',
                    sm6: 'smText4',
                    sm7: 'smText5',
                    sm8: 'smRadio',
                    sm9: 'smDate',
                    sm10: 'smText6',
                    sm11: 'smText7',
                    sm12: 'smText8',
                    sm13: 'smDate1',
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
                            var refId = ["smText1", "smText2", "smSelect1","smText3","smSelect2", "smText4", "smText5", "smRadio","smText6","smText7","smDate","smText8","smDate1"];
                            $this.showSubModule(refId, false, function () {
                                para.nStep = 'startModule1';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
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
                                para.nStep = 'queryGroupActivityTicketType';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        // case 'queryGroupActivity':
                        //     objectName = $this.mac.tb.groupActivity;
                        //     dbData = {};
                        //     dbData[$this.mac.fd.id] = [$this.para.activityID];
                        //     dbData[$this.mac.fd.groupActivity.startTime] = [];
                        //     $this.sys.api.recordRead(objectName, dbData,
                        //         function () {
                        //             para.startTime =  dbData[$this.mac.fd.groupActivity.startTime][0];
                        //             if(para.startTime!==null){
                        //                 $this.targetDate = new Date(para.startTime);
                        //             }else{
                        //                 $this.targetDate = '';
                        //             }
                        //             para.nStep = 'queryGroupActivityTicketType';
                        //             dbFlag += 1;
                        //             if (dbFlag === 2) {
                        //                 $this.startModule(successCallBack, errorCallBack)
                        //             }
                        //         }, para.errorCallBack)
                        //     break;
                        case 'queryGroupActivityTicketType':
                            objectName = $this.mac.tb.groupActivityTicketType;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityTicketTypeID];
                            dbData[$this.mac.fd.groupActivityTicketType.minNumber] = [];
                            dbData[$this.mac.fd.groupActivityTicketType.maxNumber] = [];
                            dbData[$this.mac.fd.groupActivityTicketType.saleStartTime] = [];
                            dbData[$this.mac.fd.groupActivityTicketType.saleEndTime] = [];
                            $this.sys.api.recordRead(objectName,  dbData,
                                function () {
                                    para.minNumber =  dbData[$this.mac.fd.groupActivityTicketType.minNumber][0];
                                    para.maxNumber =  dbData[$this.mac.fd.groupActivityTicketType.maxNumber][0];
                                    $this.dropDown1 = $this.dropDownSet(1,para.maxNumber);
                                    $this.dropDown2 = $this.dropDownSet(para.minNumber,20);
                                    para.saleStartTime =  dbData[$this.mac.fd.groupActivityTicketType.saleStartTime][0];
                                    para.saleEndTime = dbData[$this.mac.fd.groupActivityTicketType.saleEndTime][0];
                                    if(para.saleStartTime !== null){
                                        $this.radioData = $this.radioArr[1].label;
                                    }else{
                                        $this.radioData = $this.radioArr[0].label;
                                    }
                                     $this.forceUpdateData(function () {
                                        para.nStep = 'startModule3';
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.startModule(successCallBack, errorCallBack)
                                        }
                                    })
                                }, para.errorCallBack)
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
                            var refId;
                            if(para.saleStartTime === null){
                                refId = ["smText1", "smText2", "smSelect1","smText3","smSelect2", "smText4", "smText5", "smRadio","smText6","smText7","smText8","smDate1"];
                            }else{
                                refId = ["smText1", "smText2", "smSelect1","smText3","smSelect2", "smText4", "smText5", "smRadio","smText6","smText7","smDate","smText8","smDate1"];
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
            timeTypeSelect:function(){
                let $this = this;
                let refId = ["smDate"];
                if(this.radioData===2){
                    // let dbData = {};
                    // dbData[$this.mac.fd.id] = [$this.para.activityID];
                    // dbData[$this.mac.fd.groupActivity.startTime] = [];
                    // $this.sys.api.recordRead($this.mac.tb.groupActivity, dbData,
                    //     function () {
                    //         if(dbData[$this.mac.fd.groupActivity.startTime][0]!==null){
                    //             $this.targetDate = new Date(dbData[$this.mac.fd.groupActivity.startTime][0]);
                    //         }else{
                    //             $this.targetDate = '';
                    //         }
                    //     }, function () {})
                    $this.sm.smDate.startModule(function () {
                        $this.showSubModule(refId, true, function (){},function () {});
                    }, function () {});
                }else{
                    $this.showSubModule(refId, false, function (){},function () {});
                }
            },
            setPara: function (successCallBack, errorCallBack) {
                var para = {};
                para.successCallBack = successCallBack;
                para.errorCallBack = errorCallBack;
                para.nStep = 0;
                return para;
            },
            minNumberSelect:function(){
                let $this = this;
                let objectName = $this.mac.tb.groupActivityTicketType;
                let dbData = {};
                dbData[$this.mac.fd.id] = [$this.para.activityTicketTypeID]
                dbData[$this.mac.fd.groupActivityTicketType.minNumber] = [];
                $this.sys.api.recordRead(objectName, dbData, function () {
                    $this.dropDown2 = $this.dropDownSet(dbData[$this.mac.fd.groupActivityTicketType.minNumber][0],20);
                     $this.forceUpdateData(function () {
                        $this.sm.smSelect2.startModule(function () {},function () {})
                    })
                }, function () {})
                $this.dataOutput($this.mac.tb.groupActivity,$this.para.activityID)
            },
            maxNumberSelect:function(){
                let $this = this;
                let objectName = $this.mac.tb.groupActivityTicketType;
                let dbData = {};
                dbData[$this.mac.fd.id] = [$this.para.activityTicketTypeID]
                dbData[$this.mac.fd.groupActivityTicketType.maxNumber] = [];
                $this.sys.api.recordRead(objectName, dbData, function () {
                    $this.dropDown1 = $this.dropDownSet(0,dbData[$this.mac.fd.groupActivityTicketType.maxNumber][0]);
                    $this.forceUpdateData(function () {
                        $this.sm.smSelect1.startModule(function () {},function () {})
                    })
                }, function () {})
                $this.dataOutput($this.mac.tb.groupActivity,$this.para.activityID)
            },
            dropDownSet:function(start,end){
                let arr = [];
                for(var i=start;i<end+1;i++){
                    let obj =  {};
                    obj.value = i;
                    obj.label = i;
                    obj.icon = '';
                    obj.disable = false;
                    obj.image = ''
                    arr.push(obj)
                }
                return arr
            },
            wrongInfoShow: function (successCallBack, errorCallBack) {
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                var $this = this;
                var fnname = 'ticketAttach.wrongInfoShow';
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
                        case 'groupActivityTicketTypeQuery':
                            objectName = $this.mac.tb.groupActivityTicketType;
                            parentRecord = [$this.para.activityID];
                            condition = null;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityTicketTypeID];
                            dbData[$this.mac.fd.groupActivityTicketType.saleStartTime] = [];
                            dbData[$this.mac.fd.groupActivityTicketType.saleEndTime] = [];
                            dbData[$this.mac.fd.groupActivityTicketType.name] = [];
                            dbData[$this.mac.fd.groupActivityTicketType.startTime] = [];
                            dbData[$this.mac.fd.groupActivityTicketType.endTime] = [];
                            $this.sys.api.recordQuery(objectName, parentRecord, condition, dbData,
                                function () {
                                    para.name = dbData[$this.mac.fd.groupActivityTicketType.name][0];
                                    para.saleStartTime = dbData[$this.mac.fd.groupActivityTicketType.saleStartTime][0];
                                    para.saleEndTime = dbData[$this.mac.fd.groupActivityTicketType.saleEndTime][0];
                                    para.startTime = dbData[$this.mac.fd.groupActivityTicketType.startTime][0];
                                    para.endTime = dbData[$this.mac.fd.groupActivityTicketType.endTime][0];
                                    para.nStep = 'getAllID';
                                    if (++$dbFlag === 2) {
                                        $this.wrongInfoShow(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'getAllID':
                            objectName = $this.mac.tb.groupActivityTicketType;
                            parentRecord = [$this.para.activityID];
                            condition = null;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [];
                            $this.sys.api.recordQuery(objectName, parentRecord, condition, dbData,
                                function () {
                                    para.allID = dbData[$this.mac.fd.id];
                                    para.nStep = 'groupActivityQuery';
                                    if (++$dbFlag === 2) {
                                        $this.wrongInfoShow(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'groupActivityQuery':
                            objectName = $this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityID];
                            dbData[$this.mac.fd.groupActivity.startTime] = [];
                            dbData[$this.mac.fd.groupActivity.endTime] = [];
                            $this.sys.api.recordRead(objectName, dbData,
                                function () {
                                    para.activityStartTime = dbData[$this.mac.fd.groupActivity.startTime][0];
                                    para.activityEndTime = dbData[$this.mac.fd.groupActivity.endTime][0];
                                    // para.nStep = 'checkSaleTime';
                                    if(para.saleEndTime!==null){
                                        para.nStep = 'checkSaleTime';
                                    }else{
                                        para.nStep = 'checkStartTime';
                                    }
                                    if (++$dbFlag === 2) {
                                        $this.wrongInfoShow(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'checkSaleTime':
                            if(new Date(para.saleEndTime).getTime() < new Date(para.activityEndTime).getTime()){
                                para.nStep = 'checkStartTime';
                            } else {
                                $this.$message({
                                    type: 'error',
                                    message: para.name+'的售票时间应在活动时间结束之前'
                                });
                                $("html,body").animate({
                                    scrollTop: $('.ticket-type')[0].offsetTop+$('.ticket-type .ticketTypeAdd')[para.allID.indexOf($this.para.activityTicketTypeID)].children[2].offsetTop-100+ "px"
                                },200);
                                para.nStep = 'default';
                            }
                            if (++$dbFlag === 2) {
                                $this.wrongInfoShow(successCallBack, errorCallBack)
                            }
                            break
                        case 'checkStartTime':
                            if(para.startTime===null){
                                $this.$message({
                                    type: 'error',
                                    message: '请选择'+para.name+'的票种时间'
                                });
                                $("html,body").animate({
                                    scrollTop: $('.ticket-type')[0].offsetTop+$('.ticket-type .ticketTypeAdd')[para.allID.indexOf($this.para.activityTicketTypeID)].children[2].offsetTop-100+ "px"
                                },200);
                                para.nStep = 'default';
                            }else if(new Date(para.startTime)<new Date(para.activityStartTime)){
                                $this.$message({
                                    type: 'error',
                                    message: para.name+'的票种时间应在活动时间开始之后'
                                });
                                $("html,body").animate({
                                    scrollTop: $('.ticket-type')[0].offsetTop+$('.ticket-type .ticketTypeAdd')[para.allID.indexOf($this.para.activityTicketTypeID)].children[2].offsetTop-100+ "px"
                                },200);
                                para.nStep = 'default';
                            }else if(para.saleStartTime!==null&&new Date(para.startTime)<new Date(para.saleStartTime)){
                                $this.$message({
                                    type: 'error',
                                    message: para.name+'的票种时间应在售票时间开始之后'
                                });
                                $("html,body").animate({
                                    scrollTop: $('.ticket-type')[0].offsetTop+$('.ticket-type .ticketTypeAdd')[para.allID.indexOf($this.para.activityTicketTypeID)].children[2].offsetTop-100+ "px"
                                },200);
                                para.nStep = 'default';
                            }else if(new Date(para.endTime)>new Date(para.activityEndTime)){
                                $this.$message({
                                    type: 'error',
                                    message: para.name+'的票种时间应在活动时间结束之前'
                                });
                                $("html,body").animate({
                                    scrollTop: $('.ticket-type')[0].offsetTop+$('.ticket-type .ticketTypeAdd')[para.allID.indexOf($this.para.activityTicketTypeID)].children[2].offsetTop-100+ "px"
                                },200);
                                para.nStep = 'default';
                            }else{
                                para.nStep = 'end';
                            }
                            if (++$dbFlag === 2) {
                                $this.wrongInfoShow(successCallBack, errorCallBack)
                            }
                            break
                        case 'end':
                            para.successCallBack()
                            return;
                        case 'default':
                            $this.openAttach()
                            return;
                    }
                    if (++$dbFlag === 1) {
                        return;
                    }
                }
            },
            openAttach:function(){
                this.ep.openAttachEvent(this.para.activityTicketTypeID, function () {
                }, function () {
                })
            },
            dataOutput:function (tableName,id) {
                let $this = this;
                $this.sys.api.dataOutput(tableName, [id], '',
                    function () {

                    },function (error) {console.error(error)})
            },

            smRadio_dataModifyEvent: function () {
                this.timeTypeSelect()
            },
            smSelect1_dataModifyEvent:function(){
                this.minNumberSelect()
            },
            smSelect2_dataModifyEvent:function(){
                this.maxNumberSelect()
            },
            smDate_dataModifyEvent:function(){
                this.dataOutput(this.mac.tb.groupActivity,this.para.activityID)
            },
            smDate1_dataModifyEvent:function(){
                this.dataOutput(this.mac.tb.groupActivity,this.para.activityID)
            },
            smText7_dataModifyEvent:function(){
                this.dataOutput(this.mac.tb.groupActivity,this.para.activityID)
            },
        }
    }
</script>
<style lang="scss">
    .ticketAttach{
        background:rgba(244,244,244,1);
        padding:20px 0 10px 30px;
        .attach-item{
            .item-first{
                .attach-num{
                    .lm-select{
                       height: 28px;
                        line-height: 28px;
                        .el-select{
                            height: 28px;
                            .el-input{
                                height: 28px;
                                .el-input__inner{
                                    height: 28px;
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
            .item-content{
                .el-range-separator{
                    line-height: 32px;
                }
            }
            .item-time-select{
                .lm-radio .el-radio{
                    display: block;
                    height: 40px;
                    line-height: 40px;
                }
                .item-time-picker{
                    position: absolute;
                    top: 40px;
                    left: 90px;
                    .el-input__icon{
                        line-height: 28px;
                    }
                    .el-range-separator{
                        line-height: 28px;
                    }
                }
            }
            .item-explain{
                height: 80px;
                margin-top:10px;
                .el-textarea__inner{
                    height: 80px;
                }
            }
        }

        .info-tip {
            .el-icon-warning {
                color: #F56C6C;
                vertical-align: middle;
                margin: -2px 5px 0 0;
            }
        }
    }
</style>
<style lang="scss" scoped>
    .ticketAttach{
        .attach-item{
            display: flex;
            margin-bottom: 5px;

            .item-name {
                width: 90px;
            }

            .item-content{
                flex: 1;
                .col{
                    vertical-align: top;
                }
            }
            .item-first{
                line-height: 40px;
                .attach-num{
                    width: 80px;
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
            .item-time-select{
                height: 80px;
                position: relative;
                .item-time-picker{
                    position: absolute;
                    top: 40px;
                    left: 90px;
                }
            }
            .item-explain{
                height: 80px;
                margin-top:10px;
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