<template>
    <div class="ticketTypeAdd">
        <div class="row ticketTypeAdd-top" draggable="true">
            <div class="col" draggable="false" :class="'col_w_'+attr.cloumBill[0]">
                <div class="mar-10">
                    <lm-input-text
                            ref="smInput1"
                            refId="smInput1"
                            v-show="pvt_isShow.v1 === 'smInput1'"
                            :paraVarPair="pvt_v1.smInput1.paraVarPair"
                            :para="pvt_v1.smInput1.para"
                            :attr="pvt_v1.smInput1.attr">
                    </lm-input-text>
                </div>
            </div>
            <div class="col" draggable="false" :class="'col_w_'+attr.cloumBill[1]">
                <div class="mar-10">
                    <lm-input-text
                            ref="smInput2"
                            refId="smInput2"
                            v-show="pvt_isShow.v2 === 'smInput2'"
                            :paraVarPair="pvt_v2.smInput2.paraVarPair"
                            :para="pvt_v2.smInput2.para"
                            :attr="pvt_v2.smInput2.attr">
                    </lm-input-text>
                </div>
            </div>
            <div class="col" draggable="false" :class="'col_w_'+attr.cloumBill[2]">
                <div class="mar-10">
                    <lm-input-text
                            ref="smInput3"
                            refId="smInput3"
                            v-show="pvt_isShow.v3 === 'smInput3'"
                            :paraVarPair="pvt_v3.smInput3.paraVarPair"
                            :para="pvt_v3.smInput3.para"
                            :attr="pvt_v3.smInput3.attr">
                    </lm-input-text>
                </div>
            </div>
            <div class="col" draggable="false" :class="'col_w_'+attr.cloumBill[3]">
                <div class="item-drop">
                    <lm-select
                            ref="smSelect"
                            refId="smSelect"
                            v-show="pvt_isShow.v4 === 'smSelect'"
                            :paraVarPair="pvt_v4.smSelect.paraVarPair"
                            :para="pvt_v4.smSelect.para"
                            :attr="pvt_v4.smSelect.attr"
                    >
                    </lm-select>
                </div>
            </div>
            <div class="col" draggable="false" :class="'col_w_'+attr.cloumBill[4]">
                <div class="item-set">
                    <div class="item-con">
                        <div class="col">
                            <lm-button
                                    ref="smButton1"
                                    refId="smButton1"
                                    v-show="pvt_isShow.v5 === 'smButton1'"
                                    :paraVarPair="pvt_v5.smButton1.paraVarPair"
                                    :para="pvt_v5.smButton1.para"
                                    :attr="pvt_v5.smButton1.attr">
                            </lm-button>
                        </div>
                        <div class="col">
                            <lm-button
                                    ref="smButton2"
                                    refId="smButton2"
                                    v-show="pvt_isShow.v6 === 'smButton2'"
                                    :paraVarPair="pvt_v6.smButton2.paraVarPair"
                                    :para="pvt_v6.smButton2.para"
                                    :attr="pvt_v6.smButton2.attr">
                            </lm-button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="info-tip"  v-show="pvt_isShow.v8 === 'smText'">
            <i class="el-icon-warning"></i>
            <lm-link-text
                    ref="smText"
                    refId="smText"
                    v-show="pvt_isShow.v8 === 'smText'"
                    :paraVarPair="pvt_v8.smText.paraVarPair"
                    :para="pvt_v8.smText.para"
                    :attr="pvt_v8.smText.attr">
            </lm-link-text>
        </div>
        <div class="row ticketTypeAdd-bottom" draggable="false" :class="pvt_isShow.v7 === 'smTicketAttach'?'mar-b-20':''">
            <ticket-attach
                ref="smTicketAttach"
                refId="smTicketAttach"
                v-show="pvt_isShow.v7 === 'smTicketAttach'"
                :paraVarPair="pvt_v7.smTicketAttach.paraVarPair"
                :para="pvt_v7.smTicketAttach.para"
                :attr="pvt_v7.smTicketAttach.attr">
            </ticket-attach>
        </div>
    </div>
</template>

<script>
    import libSys
        from '@/components/baseComponent/libSys.js';
    import libUpload
        from '@/components/baseComponent/libUpload.js';
    import ticketAttach from './ticketAttach'

    export default {
        components: {ticketAttach},
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ['sys'],
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ["v1", "v2", "v3", "v4", "v5", "v6","v7","v8"],
                    subModule: ["smInput1", "smInput2", "smInput3", "smSelect", "smButton1", "smButton2","smTicketAttach","smText"]
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

                pvt_eventPortInput: ['ticketSetEvent','ticketDeleteEvent','openAttachEvent'],

                debugFlag:true,
                listSource:[
                    {value: 1, label: '无需审核', disabled:false,icon:'',image:''},
                    {value: 2, label: '需要审核', disabled:false,icon:'',image:''},
                ],
                ticketName:'',
                mac:mac.mac,
                showTicketAttach:false,
                disabled:false,
                tipText:'',
                ticketPrice:0,
                ticketNum:''
            }
        },
        computed: {
            pvt_v1: function () {
                return {
                    smInput1: {
                        paraVarPair: {},
                        para: {
                            text: this.ticketName
                            // text:[{ $table: this.mac.tb.groupActivityTicketType, $arrField: [this.mac.fd.groupActivityTicketType.name], $arrValue: [this.para.activityTicketTypeID] }],
                        },
                        attr: {}
                    }
                }
            }, pvt_v2: function () {
                return {
                    smInput2: {
                        paraVarPair: {},
                        para: {
                            // text:[{ $table: this.mac.tb.groupActivityTicketType, $arrField: [this.mac.fd.groupActivityTicketType.price], $arrValue: [this.para.activityTicketTypeID] }],
                            text: this.ticketPrice
                        },
                        attr: {
                           type:'number'
                        }
                    }
                }
            }, pvt_v3: function () {
                return {
                    smInput3: {
                        paraVarPair: {},
                        para: {
                            // text:[{ $table: this.mac.tb.groupActivityTicketType, $arrField: [this.mac.fd.groupActivityTicketType.number], $arrValue: [this.para.activityTicketTypeID] }],
                            text: this.ticketNum
                        },
                        attr: {
                            placeholder: '不填则无限制',type:'number'
                        }
                    }
                }
            }, pvt_v4: function () {
                return {
                    smSelect: {
                        paraVarPair: {},
                        para: {
                            value: [{
                                $table: this.mac.tb.groupActivityTicketType,
                                $arrField: [this.mac.fd.groupActivityTicketType.approval],
                                $arrValue: [this.para.activityTicketTypeID]
                            }],
                            listSource:this.listSource
                        },
                        attr: {
                            defaultExpandAll: true,saveValue:true
                        }
                    }
                }
            }, pvt_v5: function () {
                return {
                    smButton1: {
                        paraVarPair: {},
                        para: {
                            name: ['', 'el-icon-setting']
                        },
                        attr: {
                            type: 'text'
                        }
                    }
                }
            }, pvt_v6: function () {
                return {
                    smButton2: {
                        paraVarPair: {},
                        para: {
                            name: ['', 'el-icon-delete'],
                        },
                        attr: {
                            type: 'text',disabled:this.disabled
                        }
                    }
                }
            },pvt_v7: function () {
                return {
                    smTicketAttach: {
                        paraVarPair: {},
                        para: {
                            activityTicketTypeID:this.para.activityTicketTypeID,
                            activityID:this.para.parentID
                        },
                        attr: {}
                    }
                }
            },pvt_v8: function () {
                return {
                    smText: {
                        paraVarPair: {},
                        para: {
                            textData: this.tipText
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
                let fnname = 'ticketTypeAdd.startModule';
                let ref = {
                    sm1: 'smInput1',
                    sm2: 'smInput2',
                    sm3: 'smInput3',
                    sm4: 'smSelect',
                    sm5: 'smButton1',
                    sm6: 'smButton2',
                    sm7: 'smText'
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
                        case 'hideTicketAttach':
                            $this.showSubModule(["smTicketAttach"], false, function () {
                                dbFlag += 1;
                                para.nStep = 'queryGroupActivityTicketType';
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'queryGroupActivityTicketType':
                            objectName = $this.mac.tb.groupActivityTicketType;
                            parentRecord = [$this.para.parentID];
                            condition = null;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityTicketTypeID];
                            dbData[$this.mac.fd.groupActivityTicketType.approval] = [];
                            dbData[$this.mac.fd.groupActivityTicketType.name] = [];
                            dbData[$this.mac.fd.groupActivityTicketType.price] = [];
                            dbData[$this.mac.fd.groupActivityTicketType.poll] = [];
                            $this.sys.api.recordQuery(objectName, parentRecord, condition, dbData,
                                function () {
                                    para.name = dbData[$this.mac.fd.groupActivityTicketType.name][0];
                                    $this.ticketPrice = dbData[$this.mac.fd.groupActivityTicketType.price][0];
                                    $this.ticketName = para.name;
                                    $this.ticketNum =  dbData[$this.mac.fd.groupActivityTicketType.poll][0];
                                    if($this.attr.delete===false){
                                        $this.disabled = true;
                                        $this.ticketName = '默认免费票';
                                        para.nStep = 'recordModify';
                                    }else{
                                        $this.disabled = false;
                                        para.nStep = 'startModule1';
                                    }
                                     $this.forceUpdateData(function(){
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.startModule(successCallBack, errorCallBack)
                                        }
                                    })
                                }, para.errorCallBack)
                            break;
                        case 'recordModify':
                            objectName = $this.mac.tb.groupActivityTicketType;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityTicketTypeID]
                            dbData[$this.mac.fd.groupActivityTicketType.name] = ['默认免费票'];
                            $this.sys.api.recordModify(objectName, dbData,
                                function () {
                                    $this.dataOutput($this.mac.tb.groupActivity,$this.para.parentID)
                                    para.nStep = 'startModule1';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
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
                                para.nStep = 'showModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        // case 'showModulesTicketAttach':
                        //     //显示子组件
                        //     if($this.showTicketAttach ===false){
                        //         para.nStep = 'showModules';
                        //         dbFlag++
                        //         break
                        //     }
                        //     $this.sm['smTicketAttach'].startModule(function () {
                        //         //显示子组件
                        //         let refId = ["smTicketAttach"];
                        //         $this.showSubModule(refId, true, function () {
                        //             para.nStep = 'showModules';
                        //             dbFlag += 1;
                        //             if (dbFlag === 2) {
                        //                 $this.startModule(successCallBack, errorCallBack)
                        //             }
                        //         }, para.errorCallBack);
                        //     }, para.errorCallBack);
                        //     break;
                        case 'showModules':
                            //显示子组件
                            let refId = ["smInput1", "smInput2", "smInput3", "smSelect", "smButton1", "smButton2"];
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
            ticketAttachShow:function(){
                let $this = this;
                if($this.showTicketAttach === false){
                    $this.showTicketAttach = true;
                    $this.sm['smTicketAttach'].startModule(function () {
                        //显示子组件
                        let refId = ["smTicketAttach"];
                        $this.showSubModule(refId, true, function () {

                        }, function (error) {
                            console.error(error)
                        });
                    }, function (error) {
                        console.error(error)
                    });
                }else{
                    $this.showTicketAttach = false;
                    let refId = ["smTicketAttach"];
                    $this.showSubModule(refId, false, function () {

                    }, function (error) {
                        console.error(error)
                    });
                }
            },
            ticketAttachHide:function(successCallBack, errorCallBack){
                let $this = this;
                $this.showTicketAttach = false;
                let refId = ["smTicketAttach"];
                $this.showSubModule(refId, false, function () {
                    successCallBack()
                }, function (error) {errorCallBack(error)});
            },
            ticketAttachDeleteShow:function(successCallBack, errorCallBack){
                let $this = this;
                $this.showTicketAttach = true;
                $this.sm['smTicketAttach'].startModule(function () {
                    //显示子组件
                    let refId = ["smTicketAttach"];
                    $this.showSubModule(refId, true, function () {
                        successCallBack()
                    }, function (error) {
                        console.error(error)
                    });
                }, function (error) {
                    console.error(error)
                });
            },

            ticketNameModify:function(value){
                let $this = this;
                let objectName = $this.mac.tb.groupActivityTicketType;
                let parentRecord = [$this.para.parentID];
                let condition = null;
                let dbData = {};
                dbData[$this.mac.fd.groupActivityTicketType.name] = [];
                dbData[$this.mac.fd.id] = [];
                $this.sys.api.recordQuery(objectName, parentRecord, condition, dbData,
                    function () {
                        if(value === ''||value === null){
                            $this.tipText =  '票种名称不能为空';
                            let index = dbData[$this.mac.fd.id].indexOf($this.para.activityTicketTypeID)
                            $this.ticketName = dbData[$this.mac.fd.groupActivityTicketType.name][index];
                            $this.forceUpdateData(function () {
                                $this.sm['smInput1'].startModule(function () {},function (error) {console.error(error)})
                                $this.sm['smText'].startModule(function () {
                                    let refId = ['smText'];
                                    $this.showSubModule(refId, true, function () {},function (error) {console.error(error)})
                                },function (error) {console.error(error)})
                            })
                        }else if(dbData[$this.mac.fd.groupActivityTicketType.name].indexOf(value)===-1){
                            let dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityTicketTypeID]
                            dbData[$this.mac.fd.groupActivityTicketType.name] = [value];
                            $this.sys.api.recordModify(objectName, dbData,
                                function () {
                                    $this.ticketName = value;
                                    $this.forceUpdateData(function () {
                                        let refId = ['smText'];
                                        $this.sm['smInput1'].startModule(function () {},function (error) {console.error(error)})
                                        $this.showSubModule(refId, false, function () {},function (error) {console.error(error)})
                                        $this.dataOutput($this.mac.tb.groupActivity,$this.para.parentID)
                                    })
                                }, function (error) {
                                    console.error(error)
                                })
                        }else{
                            let index = dbData[$this.mac.fd.id].indexOf($this.para.activityTicketTypeID)
                            if(dbData[$this.mac.fd.groupActivityTicketType.name].indexOf(value) !==$this.number){
                                $this.ticketName = dbData[$this.mac.fd.groupActivityTicketType.name][index];
                                $this.tipText =  '票种名称不能相同';
                                $this.forceUpdateData(function () {
                                    $this.sm['smInput1'].startModule(function () {},function (error) {console.error(error)})
                                    $this.sm['smText'].startModule(function () {
                                        let refId = ['smText'];
                                        $this.showSubModule(refId, true, function () {},function (error) {console.error(error)})
                                    },function (error) {console.error(error)})
                                })
                            }else{
                                $this.forceUpdateData(function () {
                                    let refId = ['smText'];
                                    $this.showSubModule(refId, false, function () {},function (error) {console.error(error)})
                                })
                            }
                        }
                    }, function (error) {
                        console.error(error)
                    })
            },
            ticketPriceModify:function (value, successCallBack, errorCallBack) {
                let $this = this;
                let para;
                let dbFlag;
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                let fnname = 'ticketTypeAdd.ticketPriceModify';

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
                            if(value === ''||value === null){
                                $this.tipText = '票价不能为空';
                                $this.forceUpdateData(function(){
                                    para.nStep = 'startModule';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.ticketPriceModify(value, successCallBack, errorCallBack)
                                    }
                                })
                            }else if(Number(value)<0){
                                    $this.tipText = '票价不能为负数';
                                    $this.forceUpdateData(function(){
                                        para.nStep = 'startModule';
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.ticketPriceModify(value, successCallBack, errorCallBack)
                                        }
                                    })
                            }else{
                                para.nStep = 'activityTicketTypeModify';
                                para.regExp = /\b(0+)/gi;
                                value = value + '';
                                if (Number(value) === 0) {
                                    value = 0;
                                } else if (para.regExp.test(value)&&value.indexOf(".")==-1) {
                                    value = value.replace(/\b(0+)/gi, "");
                                }
                                dbFlag += 1;
                            }
                            break;
                        case 'startModule':
                            $this.sm['smText'].startModule(function () {
                                para.nStep = 'showModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.ticketPriceModify(value, successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showModules':
                            //显示子组件
                            var refId = ['smText'];
                            $this.showSubModule(refId, true, function () {
                                para.nStep = 'readActivityTicketType';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.ticketPriceModify(value, successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'readActivityTicketType':
                            objectName = $this.mac.tb.groupActivityTicketType;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityTicketTypeID]
                            dbData[$this.mac.fd.groupActivityTicketType.price] = [];
                            $this.sys.api.recordRead(objectName, dbData,
                                function () {
                                    para.nStep = 'startModule1';
                                    $this.ticketPrice = dbData[$this.mac.fd.groupActivityTicketType.price][0];
                                    $this.forceUpdateData(function(){
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.ticketPriceModify(value, successCallBack, errorCallBack)
                                        }
                                    })
                                }, para.errorCallBack)
                            break;
                        case 'activityTicketTypeModify':
                            objectName = $this.mac.tb.groupActivityTicketType;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityTicketTypeID]
                            dbData[$this.mac.fd.groupActivityTicketType.price] = [Number(value)];
                            $this.sys.api.recordModify(objectName, dbData,
                                function () {
                                    $this.ticketPrice = value;
                                    $this.dataOutput($this.mac.tb.groupActivity,$this.para.parentID)
                                    para.nStep = 'hideModules';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.ticketPriceModify(value, successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'hideModules':
                            //显示子组件
                            var refId = ['smText'];
                            $this.showSubModule(refId, false, function () {
                                para.nStep = 'startModule1';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.ticketPriceModify(value, successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule1':
                            $this.sm['smInput2'].startModule(function () {
                                para.nStep = 'end';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.ticketPriceModify(value, successCallBack, errorCallBack)
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
            ticketNumberModify:function (value, successCallBack, errorCallBack) {
                let $this = this;
                let para;
                let dbFlag;
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                let fnname = 'ticketTypeAdd.ticketNumberModify';

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
                            if(value === ''||value === null){
                                $this.ticketNum = value;
                                $this.forceUpdateData(function(){
                                    para.nStep = 'activityTicketTypeModify1';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.ticketNumberModify(value, successCallBack, errorCallBack)
                                    }
                                })
                            }else if(Number(value)<0){
                                $this.tipText = '票种数量不能为负数';
                                $this.forceUpdateData(function(){
                                    para.nStep = 'startModule';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.ticketNumberModify(value, successCallBack, errorCallBack)
                                    }
                                })
                            }else{
                                value = Math.floor(value)
                                para.nStep = 'getMinNumber';
                                para.regExp = /\b(0+)/gi;
                                value = value +'';
                                if(Number(value)===0){
                                    value = 0;
                                }else if (para.regExp.test(value)) {
                                    value = value.replace(/\b(0+)/gi,"");
                                }
                                dbFlag += 1;
                            }
                            break;
                        case 'getMinNumber':
                            objectName = $this.mac.tb.groupActivityTicketType;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityTicketTypeID]
                            dbData[$this.mac.fd.groupActivityTicketType.minNumber] = [];
                            $this.sys.api.recordRead(objectName, dbData,
                                function () {
                                    if(Number(value)<dbData[$this.mac.fd.groupActivityTicketType.minNumber][0]){
                                        $this.tipText = '票种数量不能小于起售张数';
                                        $this.forceUpdateData(function(){
                                            para.nStep = 'startModule';
                                            dbFlag += 1;
                                            if (dbFlag === 2) {
                                                $this.ticketNumberModify(value, successCallBack, errorCallBack)
                                            }
                                        })
                                    }else{
                                        para.nStep = 'activityTicketTypeModify';
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.ticketNumberModify(value, successCallBack, errorCallBack)
                                        }
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'startModule':
                            $this.sm['smText'].startModule(function () {
                                para.nStep = 'showModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.ticketNumberModify(value, successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showModules':
                            //显示子组件
                            var refId = ['smText'];
                            $this.showSubModule(refId, true, function () {
                                para.nStep = 'readActivityTicketType';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.ticketNumberModify(value, successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'readActivityTicketType':
                            objectName = $this.mac.tb.groupActivityTicketType;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityTicketTypeID]
                            dbData[$this.mac.fd.groupActivityTicketType.poll] = [];
                            $this.sys.api.recordRead(objectName, dbData,
                                function () {
                                    para.nStep = 'startModule1';
                                    $this.ticketNum = dbData[$this.mac.fd.groupActivityTicketType.poll][0];
                                    $this.forceUpdateData(function(){
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.ticketNumberModify(value, successCallBack, errorCallBack)
                                        }
                                    })
                                }, para.errorCallBack)
                            break;
                        case 'activityTicketTypeModify':
                            objectName = $this.mac.tb.groupActivityTicketType;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityTicketTypeID]
                            dbData[$this.mac.fd.groupActivityTicketType.poll] = [Number(value)];
                            $this.sys.api.recordModify(objectName, dbData,
                                function () {
                                    $this.ticketNum = value;
                                    $this.dataOutput($this.mac.tb.groupActivity,$this.para.parentID)
                                    para.nStep = 'hideModules';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.ticketNumberModify(value, successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'activityTicketTypeModify1':
                            objectName = $this.mac.tb.groupActivityTicketType;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityTicketTypeID]
                            dbData[$this.mac.fd.groupActivityTicketType.poll] = [null];
                            $this.sys.api.recordModify(objectName, dbData,
                                function () {
                                    $this.dataOutput($this.mac.tb.groupActivity,$this.para.parentID)
                                    para.nStep = 'hideModules';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.ticketNumberModify(value, successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'hideModules':
                            //显示子组件
                            var refId = ['smText'];
                            $this.showSubModule(refId, false, function () {
                                para.nStep = 'startModule1';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.ticketNumberModify(value, successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule1':
                            $this.sm['smInput3'].startModule(function () {
                                para.nStep = 'end';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.ticketNumberModify(value, successCallBack, errorCallBack)
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
            wrongInfoShow:function(successCallBack, errorCallBack){
                this.sm['smTicketAttach'].wrongInfoShow(function () {
                    successCallBack()
                },function () {})
            },
            wrongInfoDeal:function(refId,index,mesText,successCallBack,errorCallBack){
                let $this = this;
                $this.showSubModule(refId, true, function () {
                    let height = 100;
                    $("html,body").animate({
                        scrollTop: $('.ticket-type .ticketTypeAdd')[index].offsetTop-height + "px"
                    },200);
                    // $("html,body").scrollTo($('.info-dv .info-option .item')[0],300);
                    $this.$message({
                        type: 'error',
                        message: mesText
                    });
                    successCallBack()
                },function (error) {
                    errorCallBack(error)
                });
            },

            dataOutput:function (tableName,id) {
                let $this = this;
                $this.sys.api.dataOutput(tableName, [id], '',
                    function () {

                    },function (error) {console.error(error)})
            },

            smInput1_dataModifyEvent: function (value) {
                this.ticketNameModify(value);
            },
            smInput2_dataModifyEvent: function (value) {
                this.ticketPriceModify(value,function () {},function () {});
            },
            smInput3_dataModifyEvent: function (value) {
                this.ticketNumberModify(value,function () {},function () {});
            },
            smRadio_dataModifyEvent: function () {
                this.timeTypeSelect()
            },

            smButton1_buttonClickEvent: function () {
                let $this = this;
                this.ep.ticketSetEvent(this.para.activityTicketTypeID,function () {
                    $this.ticketAttachShow();
                },function (error) {console.error(error)})
            },
            smButton2_buttonClickEvent: function () {
                this.ep.ticketDeleteEvent(this.para.activityTicketTypeID,function () {},function (error) {console.error(error)})
            },
            smSelect_itemClickEvent:function(id){
                this.dataOutput(this.mac.tb.groupActivity,this.para.parentID)
            },
            smTicketAttach_openAttachEvent:function(){
                this.ep.openAttachEvent(this.para.activityTicketTypeID, function () {
                }, function () {
                })
            },
        }
    }
</script>
<style lang="scss">
    .ticketTypeAdd {
        .row {
            .col {
                .el-input__inner {
                    height: 36px;
                    width: 100%;
                    text-align: center;
                }
                .svg-container {
                    display: none;
                }
                .item-drop {
                    .el-dropdown-link {
                        color: rgba(96, 98, 102, 1);
                        font-weight: 400;
                        font-family: Source Han Sans CN;
                    }
                    .el-icon-arrow-down{
                        color: rgba(96, 98, 102, 1);
                    }
                }
                .item-con{
                    .el-icon-setting{
                        color:#606266;
                        font-size: 14px;
                    }
                    .el-icon-setting:hover{
                        color:#409EFF;
                    }
                    .el-icon-delete{
                        color:#606266;
                    }
                    .el-icon-delete:hover{
                        color:#409EFF;
                    }
                }
            }
        }
    }
</style>
<style lang="scss" scoped>
    .ticketTypeAdd {
        /*height: 36px;*/

        .ticketTypeAdd-top {
            position: relative;
            height: 36px;
            background: #ffffff;
            padding: 10px 20px 10px 20px;
            /*border-top:1px solid red;*/
            .move-icon{
                position: absolute;
                height: 30px;
                width: 30px;
                line-height: 30px;
                text-align: center;
                top: 3px;
                left: 5px;
                cursor: pointer;
            }
            .col {
                .el-input__inner {
                    height: 36px;
                    width: 100%;
                    text-align: center;
                }

                .svg-container {
                    display: none;
                }

                .mar-10{
                    margin: 0 10px;
                }

                .item-drop {
                    padding: 0 10px;

                    .el-dropdown-link {
                        color: rgba(96, 98, 102, 1);
                        font-weight: 400;
                        font-family: Source Han Sans CN;
                    }
                    .el-icon-arrow-down{
                        color: rgba(96, 98, 102, 1);
                    }
                }

                .item-set{
                    padding: 0 10px;
                }

                .item-con{
                    text-align: center;
                    height: 32px;
                    line-height: 32px;
                    border: 1px solid rgba(220, 223, 230, 1);
                    border-radius: 4px;
                    width: 100%;
                    .col{
                        vertical-align: middle;
                        margin:-2px 10px 0 10px;
                    }
                    .el-icon-menu{
                        color:#606266;
                    }
                    .el-icon-delete{
                        color:#606266;
                    }
                }
            }
        }

        .info-tip {
            .el-icon-warning {
                color: #F56C6C;
                vertical-align: middle;
                margin: -2px 5px 0 30px;
            }
        }

        .mar-b-20{
            margin-bottom: 20px;
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