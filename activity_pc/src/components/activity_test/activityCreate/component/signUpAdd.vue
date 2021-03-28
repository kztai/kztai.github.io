<template>
    <div class="sign-up-add">
        <div class="row sign-up-top" :draggable="attr.disabled===true?false:true">
            <div class="move-icon" v-show="attr.disabled !== true"><i class="el-icon-rank"></i></div>
            <div class="col col_w_14">
                <div class="mar-10">
                    <div class="h-36">
                        <lm-input-text
                                ref="smInput1"
                                refId="smInput1"
                                v-show="pvt_isShow.v1 === 'smInput1'"
                                :paraVarPair="pvt_v1.smInput1.paraVarPair"
                                :para="pvt_v1.smInput1.para"
                                :attr="pvt_v1.smInput1.attr">
                        </lm-input-text>
                    </div>
                    <div class="sign-radio">
                        <lm-radio
                                ref="smRadio"
                                refId="smRadio"
                                v-show="pvt_isShow.v4 === 'smRadio'"
                                :paraVarPair="pvt_v4.smRadio.paraVarPair"
                                :para="pvt_v4.smRadio.para"
                                :attr="pvt_v4.smRadio.attr">
                        </lm-radio>
                    </div>
                </div>
            </div>
            <div class="col col_w_3 h-36">
                <div class="mar-10">
                    <lm-checkbox
                            ref="smCheckbox"
                            refId="smCheckbox"
                            v-show="pvt_isShow.v2 === 'smCheckbox'"
                            :paraVarPair="pvt_v2.smCheckbox.paraVarPair"
                            :para="pvt_v2.smCheckbox.para"
                            :attr="pvt_v2.smCheckbox.attr">
                    </lm-checkbox>
                </div>
            </div>
            <div class="col col_w_3 h-36">
                <div class="mar-10" :class="attr.disabled === true?'require-item':''">
                    <lm-button
                            ref="smButton"
                            refId="smButton"
                            v-show="pvt_isShow.v3 === 'smButton'"
                            :paraVarPair="pvt_v3.smButton.paraVarPair"
                            :para="pvt_v3.smButton.para"
                            :attr="pvt_v3.smButton.attr">
                    </lm-button>
                </div>
            </div>
        </div>
        <div>
            <div class="col_w_14">
                <title-set
                        ref="smTitleSet"
                        refId="smTitleSet"
                        v-show="pvt_isShow.v5 === 'smTitleSet'"
                        v-for="(item, index) in pvt_v5.smTitleSet.forData"
                        :number="index"
                        :paraVarPair="pvt_v5.smTitleSet.paraVarPair"
                        :para="item.para"
                        :attr="item.attr">
                </title-set>
            </div>
        </div>
        <div class="sign-add-btn">
            <div class="col_w_14">
                <lm-button
                        ref="smButton1"
                        refId="smButton1"
                        v-show="pvt_isShow.v6 === 'smButton1'"
                        :paraVarPair="pvt_v6.smButton1.paraVarPair"
                        :para="pvt_v6.smButton1.para"
                        :attr="pvt_v6.smButton1.attr">
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
    import titleSet from './titleSet'

    export default {
        components: {titleSet},
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ['sys'],
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ["v1", "v2", "v3", "v4", "v5", "v6"],
                    subModule: ["smInput1", "smCheckbox", "smButton", "smRadio", "smTitleSet", "smButton1"]
                },
                pvt_isShow: {
                    "v1": null,
                    "v2": null,
                    "v3": null,
                    "v4": null,
                    "v5": null,
                    "v6": null,
                },

                pvt_eventPortInput: ['signItemDeleteEvent'],


                mac: mac.mac,
                checkboxDisabled: false,
                buttonDisabled: false,
                inputDisabled: false,
                placeholder: '',
                inputText:'',
                titleSetPlaceholder: [],
                activityEnrollFormID: [],
                activityIDArr:[],
                commonlyType: [],
                deleteShow: [],
                checkData: [1],
                radioDisabled: false,
                radioArr: [{label: 1, text: '男'}, {label: 2, text: '女'}],
                type: {
                    commonly: 0,
                    singText: 1,
                    multipleText: 2,
                    radio: 3,
                    checkBox: 4,
                    numberInput: 5,
                    fileUpload: 6,
                    pictureUpload: 7
                }
            }
        },
        computed: {
            pvt_v1: function () {
                return {
                    smInput1: {
                        paraVarPair: {},
                        para: {
                            text: this.inputText
                            // text:[{ $table: this.mac.tb.groupActivityTicketType, $arrField: [this.mac.fd.groupActivityTicketType.name], $arrValue: [this.para.activityTicketTypeID] }],
                        },
                        attr: {
                            disabled: this.inputDisabled, placeholder: this.placeholder
                        }
                    }
                }
            }, pvt_v2: function () {
                return {
                    smCheckbox: {
                        paraVarPair: {
                            checkData: 'checkData'
                        },
                        para: {
                            checkData: this.checkData
                        },
                        attr: {
                            checkboxArr: [{label: 1, text: '必填'}], disabled: this.checkboxDisabled
                        }
                    }
                }
            }, pvt_v3: function () {
                return {
                    smButton: {
                        paraVarPair: {},
                        para: {
                            name: ['', 'el-icon-delete'],
                        },
                        attr: {
                            type: 'text', disabled: this.buttonDisabled, height: '36px'
                        }
                    }
                }
            }, pvt_v4: function () {
                return {
                    smRadio: {
                        paraVarPair: {},
                        para: {
                            radioData: ''
                        },
                        attr: {
                            radioArr: this.radioArr, disabled: this.radioDisabled
                        }
                    }
                }
            }, pvt_v5: function () {
                let loopModule = {
                    smTitleSet: {
                        para: {
                            activityEnrollFormID: this.activityEnrollFormID,
                            activityID:this.activityIDArr
                        },
                        attr: {
                            placeholder: this.titleSetPlaceholder,
                            commonlyType: this.commonlyType,
                            deleteShow: this.deleteShow
                        },
                    },
                };
                let forData = this.pvt_createForData(loopModule);
                return {
                    smTitleSet: {
                        paraVarPair: {},
                        forData: forData.smTitleSet,
                    },
                }
            }, pvt_v6: function () {
                return {
                    smButton1: {
                        paraVarPair: {},
                        para: {
                            name: ['', 'el-icon-plus'],
                        },
                        attr: {
                            type: 'primary'
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
                    sm1: 'smInput1',
                    sm2: 'smCheckbox',
                    sm3: 'smButton',
                    sm4: 'smRadio',
                    sm5: 'smTitleSet',
                    sm6: 'smButton1'
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
                            $this.titleSetPlaceholder = [];
                            $this.activityEnrollFormID = [];
                            $this.activityIDArr = [];
                            $this.commonlyType = [];
                            $this.deleteShow = [];
                            dbFlag += 1;
                            para.nStep = 'initData';
                            break;
                        case 'initData':
                            if ($this.attr.disabled === true) {
                                $this.checkboxDisabled = true;
                                $this.inputDisabled = true;
                                $this.buttonDisabled = true;
                                $this.inputText = $this.para.name;
                                para.nStep = 'startModule1';
                                $this.$nextTick(() => {
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack)
                                    }
                                })
                            } else {
                                if ($this.attr.commonlyType === $this.type.singText) {
                                    $this.placeholder = '请输入单行文本标题';
                                } else if ($this.attr.commonlyType === $this.type.multipleText) {
                                    $this.placeholder = '请输入多行文本标题';
                                } else if ($this.attr.commonlyType === $this.type.radio) {
                                    $this.placeholder = '请输入单选框标题';
                                } else if ($this.attr.commonlyType === $this.type.checkBox) {
                                    $this.placeholder = '请输入多选框标题';
                                } else if ($this.attr.commonlyType === $this.type.numberInput) {
                                    $this.placeholder = '请输入数字输入框标题';
                                } else if ($this.attr.commonlyType === $this.type.fileUpload) {
                                    $this.placeholder = '请输入文件上传标题';
                                } else if ($this.attr.commonlyType === $this.type.pictureUpload) {
                                    $this.placeholder = '请输入图片上传标题';
                                }
                                dbFlag += 1;
                                para.nStep = 'queryGroupActivityTicketType';
                            }
                            break
                        case 'queryGroupActivityTicketType':
                            objectName = $this.mac.tb.groupActivityEnrollForm;
                            // parentRecord = [$this.para.parentID];
                            // condition = null;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityEnrollFormID];
                            dbData[$this.mac.fd.groupActivityEnrollForm.name] = [];
                            dbData[$this.mac.fd.groupActivityEnrollForm.attribute] = [];
                            dbData[$this.mac.fd.groupActivityEnrollForm.baseComponent] = [];
                            $this.sys.api.recordRead(objectName, dbData,
                                function () {
                                    $this.inputDisabled = false;
                                    $this.inputText = dbData[$this.mac.fd.groupActivityEnrollForm.name][0]
                                    para.baseComponent = dbData[$this.mac.fd.groupActivityEnrollForm.baseComponent][0];
                                    if (para.baseComponent.type===$this.type.commonly&&para.baseComponent.dataArr.length===2&&para.baseComponent.dataArr[0].text==='男'&&para.baseComponent.dataArr[1].text==='女') {
                                        $this.radioDisabled = true;
                                    }
                                    if (dbData[$this.mac.fd.groupActivityEnrollForm.attribute][0] === $this.mac.enum.groupActivityEnrollForm.attribute.need) {
                                        $this.checkData = [1];
                                    } else {
                                        $this.checkData = [];
                                    }
                                    if ($this.attr.commonlyType === $this.type.radio) {
                                        for (var i = 0; i < dbData[$this.mac.fd.groupActivityEnrollForm.baseComponent][0]['dataArr'].length; i++) {
                                            $this.titleSetPlaceholder.push('请输入单选项内容');
                                            $this.activityEnrollFormID.push($this.para.activityEnrollFormID)
                                            $this.commonlyType.push($this.attr.commonlyType)
                                            $this.activityIDArr.push($this.para.parentID)
                                            if (dbData[$this.mac.fd.groupActivityEnrollForm.baseComponent][0]['dataArr'].length > 2) {
                                                $this.deleteShow.push(true)
                                            } else {
                                                $this.deleteShow.push(false)
                                            }
                                        }
                                    } else if ($this.attr.commonlyType === $this.type.checkBox) {
                                        for (var i = 0; i < dbData[$this.mac.fd.groupActivityEnrollForm.baseComponent][0]['dataArr'].length; i++) {
                                            $this.titleSetPlaceholder.push('请输入多选项内容');
                                            $this.activityEnrollFormID.push($this.para.activityEnrollFormID)
                                            $this.activityIDArr.push($this.para.parentID)
                                            $this.commonlyType.push($this.attr.commonlyType)
                                            if (dbData[$this.mac.fd.groupActivityEnrollForm.baseComponent][0]['dataArr'].length > 2) {
                                                $this.deleteShow.push(true)
                                            } else {
                                                $this.deleteShow.push(false)
                                            }
                                        }
                                    }
                                    // else if ($this.attr.commonlyType === $this.type.pictureUpload) {
                                    //     for (var i = 0; i < dbData[$this.mac.fd.groupActivityEnrollForm.baseComponent][0]['dataArr'].length; i++) {
                                    //         if (i === 0) {
                                    //             $this.titleSetPlaceholder.push('不填则默认10张');
                                    //         } else if (i === 1) {
                                    //             $this.titleSetPlaceholder.push('不填则默认最大为1Mb');
                                    //         }
                                    //         $this.activityEnrollFormID.push($this.para.activityEnrollFormID)
                                    //         $this.activityIDArr.push($this.para.parentID)
                                    //         $this.commonlyType.push($this.attr.commonlyType)
                                    //         $this.deleteShow.push(false)
                                    //     }
                                    // } else if ($this.attr.commonlyType === $this.type.fileUpload) {
                                    //     for (var i = 0; i < dbData[$this.mac.fd.groupActivityEnrollForm.baseComponent][0]['dataArr'].length; i++) {
                                    //         if (i === 0) {
                                    //             $this.titleSetPlaceholder.push('不填则默认10个');
                                    //         } else if (i === 1) {
                                    //             $this.titleSetPlaceholder.push('不填则默认最大为1Mb');
                                    //         }
                                    //         $this.activityEnrollFormID.push($this.para.activityEnrollFormID);
                                    //         $this.activityIDArr.push($this.para.parentID)
                                    //         $this.commonlyType.push($this.attr.commonlyType)
                                    //         $this.deleteShow.push(false)
                                    //     }
                                    // }
                                    else {
                                        $this.titleSetPlaceholder = [];
                                        $this.activityEnrollFormID = [];
                                        $this.activityIDArr = [];
                                        $this.commonlyType = [];
                                        $this.deleteShow = [];
                                    }
                                    $this.$nextTick(() => {
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
                                para.i = 0;
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule5':
                            if ($this.activityEnrollFormID.length === 0) {
                                para.nStep = 'startModule6';
                                dbFlag += 1;
                                break
                            }
                            $this.sm[ref.sm5][para.i].startModule(function () {
                                para.i++
                                if (para.i === $this.activityEnrollFormID.length) {
                                    para.nStep = 'startModule6';
                                }
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule6':
                            if (!($this.attr.commonlyType === $this.type.radio || $this.attr.commonlyType === $this.type.checkBox)) {
                                para.nStep = 'showModules';
                                dbFlag += 1;
                                break
                            }
                            $this.sm[ref.sm6].startModule(function () {
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
                            if ($this.attr.commonlyType === $this.type.commonly) {
                                if ($this.attr.disabled !== true&&para.baseComponent.type===$this.type.commonly&&para.baseComponent.dataArr.length===2&&para.baseComponent.dataArr[0].text==='男'&&para.baseComponent.dataArr[1].text==='女') {
                                    refId = ["smInput1", "smCheckbox", "smButton", "smRadio"];
                                } else {
                                    refId = ["smInput1", "smCheckbox", "smButton"];
                                }
                            } else if ($this.attr.commonlyType === $this.type.pictureUpload || $this.attr.commonlyType === $this.type.fileUpload||$this.attr.commonlyType === $this.type.singText || $this.attr.commonlyType === $this.type.multipleText || $this.attr.commonlyType === $this.type.numberInput) {
                                refId = ["smInput1", "smCheckbox", "smButton"];
                            } else {
                                refId = ["smInput1", "smCheckbox", "smButton", "smTitleSet", "smButton1"];
                            }
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
            attributeModify: function () {
                let $this = this;
                let objectName = $this.mac.tb.groupActivityEnrollForm;
                let dbData = {};
                dbData[$this.mac.fd.id] = [$this.para.activityEnrollFormID];
                if (this.checkData.length === 0) {
                    dbData[$this.mac.fd.groupActivityEnrollForm.attribute] = [$this.mac.enum.groupActivityEnrollForm.attribute.noNeed];
                } else {
                    dbData[$this.mac.fd.groupActivityEnrollForm.attribute] = [$this.mac.enum.groupActivityEnrollForm.attribute.need];
                }
                $this.sys.api.recordModify(objectName, dbData,
                    function () {
                        $this.dataOutput($this.mac.tb.groupActivity,$this.para.parentID)
                    }, function (error) {
                        console.error(error)
                    })
            },
            activityEnrollFormNameSet: function (value, successCallBack, errorCallBack) {
                let $this = this;
                let para;
                let dbFlag;
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                let fnname = 'signUpAdd.activityEnrollFormNameSet';

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
                            objectName = $this.mac.tb.groupActivityEnrollForm;
                            parentRecord = [$this.para.parentID];
                            condition = $this.mac.fd.groupActivityEnrollForm.name+'!=["姓名","手机"]';
                            dbData = {};
                            dbData[$this.mac.fd.groupActivityEnrollForm.name] = [];
                            $this.sys.api.recordQuery(objectName, parentRecord, condition, dbData,
                                function () {
                                    if (dbData[$this.mac.fd.groupActivityEnrollForm.name].indexOf(value) === -1) {
                                        para.nStep = 'activityEnrollFormNameModify';
                                    } else if(dbData[$this.mac.fd.groupActivityEnrollForm.name].indexOf(value) !== -1&&dbData[$this.mac.fd.groupActivityEnrollForm.name].indexOf(value)!==$this.number){
                                        $this.$message({
                                            type: 'error',
                                            message: '报名项名称不能相同'
                                        });
                                        para.nStep = 'readActivityTicketType';
                                    }else{
                                        para.nStep = 'end';
                                    }
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.activityEnrollFormNameSet(value, successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'readActivityTicketType':
                            objectName = $this.mac.tb.groupActivityEnrollForm;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityEnrollFormID]
                            dbData[$this.mac.fd.groupActivityEnrollForm.name] = [];
                            $this.sys.api.recordRead(objectName, dbData,
                                function () {
                                    para.nStep = 'startModule1';
                                    $this.inputText = dbData[$this.mac.fd.groupActivityEnrollForm.name][0];
                                    $this.$nextTick(() => {
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.activityEnrollFormNameSet(value, successCallBack, errorCallBack)
                                        }
                                    })
                                }, para.errorCallBack)
                            break;
                        case 'activityEnrollFormNameModify':
                            objectName = $this.mac.tb.groupActivityEnrollForm;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityEnrollFormID]
                            dbData[$this.mac.fd.groupActivityEnrollForm.name] = [value];
                            $this.sys.api.recordModify(objectName, dbData,
                                function () {
                                    $this.inputText = value;
                                    $this.dataOutput($this.mac.tb.groupActivity,$this.para.parentID)
                                    para.nStep = 'end';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.activityEnrollFormNameSet(value, successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'startModule1':
                            $this.sm['smInput1'].startModule(function () {
                                para.nStep = 'end';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.activityEnrollFormNameSet(value, successCallBack, errorCallBack)
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
            titleSetAdd: function (successCallBack, errorCallBack) {
                let $this = this;
                let para;
                let dbFlag;
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                let fnname = 'signUpAdd.titleSetAdd';

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
                            if ($this.attr.commonlyType === $this.type.radio) {
                                $this.titleSetPlaceholder.push('请输入单选项内容')
                                $this.activityEnrollFormID.push($this.para.activityEnrollFormID);
                                $this.activityIDArr.push($this.para.parentID)
                                $this.commonlyType.push($this.attr.commonlyType)
                                for (var i = 0; i < $this.deleteShow.length; i++) {
                                    $this.deleteShow[i] = true;
                                }
                                $this.deleteShow.push(true)
                            } else if ($this.attr.commonlyType === $this.type.checkBox) {
                                $this.titleSetPlaceholder.push('请输入多选项内容')
                                $this.activityEnrollFormID.push($this.para.activityEnrollFormID)
                                $this.activityIDArr.push($this.para.parentID)
                                $this.commonlyType.push($this.attr.commonlyType);
                                for (var i = 0; i < $this.deleteShow.length; i++) {
                                    $this.deleteShow[i] = true;
                                }
                                $this.deleteShow.push(true)
                            }
                            dbFlag += 1;
                            para.nStep = 'queryGroupActivityTicketType';
                            break
                        case 'queryGroupActivityTicketType':
                            objectName = $this.mac.tb.groupActivityEnrollForm;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityEnrollFormID];
                            dbData[$this.mac.fd.groupActivityEnrollForm.baseComponent] = [];
                            $this.sys.api.recordRead(objectName, dbData,
                                function () {
                                    para.baseComponent = dbData[$this.mac.fd.groupActivityEnrollForm.baseComponent][0];
                                    para.obj = {};
                                    para.obj.label = para.baseComponent['dataArr'].length + 1;
                                    para.obj.text = '';
                                    para.baseComponent['dataArr'].push(para.obj)
                                    para.nStep = 'activityEnrollFormNameModify';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.titleSetAdd(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'activityEnrollFormNameModify':
                            objectName = $this.mac.tb.groupActivityEnrollForm;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityEnrollFormID]
                            dbData[$this.mac.fd.groupActivityEnrollForm.baseComponent] = [para.baseComponent];
                            $this.sys.api.recordModify(objectName, dbData,
                                function () {
                                    para.nStep = 'startModule';
                                    para.i = 0;
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.titleSetAdd(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'startModule':
                            $this.sm['smTitleSet'][para.i].startModule(function () {
                                para.i++
                                if (para.i === $this.activityEnrollFormID.length) {
                                    para.nStep = 'end';
                                }
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.titleSetAdd(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'end':
                            $this.dataOutput($this.mac.tb.groupActivity,$this.para.parentID)
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
            titleSetDelete: function (data, successCallBack, errorCallBack) {
                let $this = this;
                let para;
                let dbFlag;
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                let fnname = 'signUpAdd.titleSetDelete';

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
                            $this.titleSetPlaceholder.splice(data['index'], 1)
                            $this.activityEnrollFormID.splice(data['index'], 1)
                            $this.activityIDArr.splice(data['index'], 1)
                            $this.commonlyType.splice(data['index'], 1)
                            $this.deleteShow.splice(data['index'], 1)
                            if ($this.activityEnrollFormID.length === 2) {
                                for (var i = 0; i < $this.deleteShow.length; i++) {
                                    $this.deleteShow[i] = false;
                                }
                            }
                            dbFlag += 1;
                            para.nStep = 'queryGroupActivityTicketType';
                            break
                        case 'queryGroupActivityTicketType':
                            objectName = $this.mac.tb.groupActivityEnrollForm;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [data['id']];
                            dbData[$this.mac.fd.groupActivityEnrollForm.baseComponent] = [];
                            $this.sys.api.recordRead(objectName, dbData,
                                function () {
                                    para.baseComponent = dbData[$this.mac.fd.groupActivityEnrollForm.baseComponent][0];
                                    para.baseComponent['dataArr'].splice(data['index'], 1);
                                    for (var i = 0; i < para.baseComponent['dataArr'].length; i++) {
                                        para.baseComponent['dataArr'][i].label = i + 1;
                                    }
                                    para.nStep = 'activityEnrollFormNameModify';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.titleSetDelete(data, successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'activityEnrollFormNameModify':
                            objectName = $this.mac.tb.groupActivityEnrollForm;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityEnrollFormID]
                            dbData[$this.mac.fd.groupActivityEnrollForm.baseComponent] = [para.baseComponent];
                            $this.sys.api.recordModify(objectName, dbData,
                                function () {
                                    para.nStep = 'startModule';
                                    para.i = 0;
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.titleSetDelete(data, successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack)
                            break;
                        case 'startModule':
                            $this.sm['smTitleSet'][para.i].startModule(function () {
                                para.i++
                                if (para.i === $this.activityEnrollFormID.length) {
                                    para.nStep = 'end';
                                }
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.titleSetDelete(data, successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'end':
                            $this.dataOutput($this.mac.tb.groupActivity,$this.para.parentID)
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
            dataOutput:function (tableName,id) {
                let $this = this;
                $this.sys.api.dataOutput(tableName, [id], '',
                    function () {

                    },function (error) {console.error(error)})
            },
            smInput1_dataModifyEvent: function (value) {
                this.activityEnrollFormNameSet(value, function () {
                }, function () {
                });
            },
            smButton_buttonClickEvent: function () {
                this.ep.signItemDeleteEvent(this.para.activityEnrollFormID, function () {
                }, function () {
                })
            },
            smButton1_buttonClickEvent: function () {
                this.titleSetAdd(function () {
                }, function () {
                })
            },
            smCheckbox_dataModifyEvent: function () {
                this.attributeModify();
            },
            smTitleSet_titleSetDeleteEvent: function (data, successCallBack, errorCallBack) {
                this.titleSetDelete(data, successCallBack, errorCallBack)
            }
        }
    }
</script>
<style lang="scss">
    .sign-up-add {
        .row {
            .el-icon-rank {
                font-size: 18px;
            }

            .col {
                .el-input__inner {
                    height: 36px;
                    width: 100%;
                }

                .svg-container {
                    display: none;
                }

                .lm-checkbox {
                    text-align: center;
                    height: 36px;
                    line-height: 36px;
                }

                .el-icon-delete {
                    font-size: 18px;
                    padding: 0;
                    color: #606266;
                }

                .el-icon-delete:hover {
                    color: #409EFF;
                }

                .require-item {
                    .el-icon-delete {
                        color: #C0C4CC
                    }
                }

                .sign-radio {
                    .lm-radio {
                        height: 36px;
                        line-height: 54px;
                    }
                }
            }
        }
        .sign-add-btn {
            margin: 0 0 0 58px;

            .lm-button {
                width: 32px;
                height: 32px;
                line-height: 32px;
                margin-top: 10px;

                .el-button {
                    height: 32px;
                    height: 32px;
                    line-height: 32px;
                }

                .el-button--primary {
                    padding: 0;
                    width: 32px;
                }
            }
        }
    }
</style>
<style lang="scss" scoped>

    .sign-up-add {
        position: relative;
        /*height: 36px;*/
        background: #ffffff;
        /*.row{*/
        /*height: 36px;*/
        /*}*/
        /*border-top:1px solid red;*/
        .sign-up-top {
            padding: 15px 0 15px 10px;
        }

        .move-icon {
            position: absolute;
            height: 18px;
            width: 18px;
            line-height: 30px;
            text-align: center;
            top: 24px;
            line-height: 18px;
            color: #B8B8B8;
            left: -10px;
            cursor: pointer;
        }

        .h-36 {
            height: 36px;
        }

        .col {
            vertical-align: top;

            .el-input__inner {
                height: 36px;
                width: 100%;
                text-align: center;
            }

            .svg-container {
                display: none;
            }

            .mar-10 {
                margin: 0 10px;
            }

            .item-drop {
                padding: 0 10px;

                .el-dropdown-link {
                    color: rgba(96, 98, 102, 1);
                    font-weight: 400;
                    font-family: Source Han Sans CN;
                }

                .el-icon-arrow-down {
                    color: rgba(96, 98, 102, 1);
                }
            }

            .item-set {
                padding: 0 10px;
            }

            .item-con {
                text-align: center;
                height: 32px;
                line-height: 32px;
                border: 1px solid rgba(220, 223, 230, 1);
                border-radius: 4px;
                width: 100%;

                .col {
                    vertical-align: middle;
                    margin: -2px 10px 0 10px;
                }

                .el-icon-menu {
                    color: #606266;
                }

                .el-icon-delete {
                    color: #606266;
                }
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