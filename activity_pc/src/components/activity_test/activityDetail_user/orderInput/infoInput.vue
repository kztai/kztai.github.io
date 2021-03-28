<template>
    <div class="info-input-wrap">
        <div class="input-name">
            <lm-link-text
                    ref="nameRef"
                    refId="nameRef"
                    v-show="pvt_isShow.name === 'nameRef'"
                    :paraVarPair="pvt_name.nameRef.paraVarPair"
                    :para="pvt_name.nameRef.para"
                    :attr="pvt_name.nameRef.attr">
            </lm-link-text>
        </div>
        <div class="input-base-component">
            <lm-input-text
                    ref="textRef"
                    refId="textRef"
                    v-show="pvt_isShow.text === 'textRef'"
                    :paraVarPair="pvt_text.textRef.paraVarPair"
                    :para="pvt_text.textRef.para"
                    :attr="pvt_text.textRef.attr">
            </lm-input-text>
            <lm-input-phone
                    ref="phoneRef"
                    refId="phoneRef"
                    v-show="pvt_isShow.phone === 'phoneRef'"
                    :paraVarPair="pvt_phone.phoneRef.paraVarPair"
                    :para="pvt_phone.phoneRef.para"
                    :attr="pvt_phone.phoneRef.attr">
            </lm-input-phone>
            <lm-input-idcard
                    ref="idCardRef"
                    refId="idCardRef"
                    v-show="pvt_isShow.idCard === 'idCardRef'"
                    :paraVarPair="pvt_idCard.idCardRef.paraVarPair"
                    :para="pvt_idCard.idCardRef.para"
                    :attr="pvt_idCard.idCardRef.attr">
            </lm-input-idcard>
            <lm-input-number
                    ref="numberRef"
                    refId="numberRef"
                    v-show="pvt_isShow.number === 'numberRef'"
                    :paraVarPair="pvt_number.numberRef.paraVarPair"
                    :para="pvt_number.numberRef.para"
                    :attr="pvt_number.numberRef.attr">
            </lm-input-number>
            <lm-input-email
                    ref="emailRef"
                    refId="emailRef"
                    v-show="pvt_isShow.email === 'emailRef'"
                    :paraVarPair="pvt_email.emailRef.paraVarPair"
                    :para="pvt_email.emailRef.para"
                    :attr="pvt_email.emailRef.attr">
            </lm-input-email>
            <lm-input-bank
                    ref="bankRef"
                    refId="bankRef"
                    v-show="pvt_isShow.bank === 'bankRef'"
                    :paraVarPair="pvt_bank.bankRef.paraVarPair"
                    :para="pvt_bank.bankRef.para"
                    :attr="pvt_bank.bankRef.attr">
            </lm-input-bank>
            <lm-radio
                    ref="radioRef"
                    refId="radioRef"
                    v-show="pvt_isShow.radio === 'radioRef'"
                    :paraVarPair="pvt_radio.radioRef.paraVarPair"
                    :para="pvt_radio.radioRef.para"
                    :attr="pvt_radio.radioRef.attr">
            </lm-radio>
            <lm-checkbox
                    ref="checkboxRef"
                    refId="checkboxRef"
                    v-show="pvt_isShow.checkbox === 'checkboxRef'"
                    :paraVarPair="pvt_checkbox.checkboxRef.paraVarPair"
                    :para="pvt_checkbox.checkboxRef.para"
                    :attr="pvt_checkbox.checkboxRef.attr">
            </lm-checkbox>
            <lm-select
                    ref="selectRef"
                    refId="selectRef"
                    v-show="pvt_isShow.select === 'selectRef'"
                    :paraVarPair="pvt_select.selectRef.paraVarPair"
                    :para="pvt_select.selectRef.para"
                    :attr="pvt_select.selectRef.attr">
            </lm-select>
            <lm-picture-upload
                    ref="pictureRef"
                    refId="pictureRef"
                    v-show="pvt_isShow.picture === 'pictureRef'"
                    :paraVarPair="pvt_picture.pictureRef.paraVarPair"
                    :para="pvt_picture.pictureRef.para"
                    :attr="pvt_picture.pictureRef.attr">
            </lm-picture-upload>
            <!--<lm-file-upload-->
                    <!--ref="fileRef"-->
                    <!--refId="fileRef"-->
                    <!--v-show="pvt_isShow.file === 'fileRef'"-->
                    <!--:paraVarPair="pvt_file.fileRef.paraVarPair"-->
                    <!--:para="pvt_file.fileRef.para"-->
                    <!--:attr="pvt_file.fileRef.attr">-->
            <!--</lm-file-upload>-->
        </div>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';
    import infoList from './infoList';

    export default {
        components: {infoList},
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ["sys"],
        data: function () {
            return {
                needIcon: 'lm-icon-required',
                titleName: '',
                inputNum: 1,
                radioSelect: 1,
                checkboxSelect: [],
                radioData: [],
                checkboxData: [],
                selectData: [],
                textInputType: 'text',
                inputPlaceholder: '',
                curAppendixId: null,
                nameDefault: '',
                phoneDefault: '',

                mac: mac.mac,

                // 需要双向修改参数的场景，用户可直接修改以下模块参数同名的变量
                // selectedPara: this.para.selected,

                pvt_subModuleMap: {
                    subModule: ['nameRef', 'textRef', 'phoneRef', 'idCardRef', 'emailRef', 'bankRef', 'radioRef', 'checkboxRef', 'selectRef', 'numberRef', 'pictureRef', 'fileRef'],
                    vessel: ['name', 'text', 'phone', 'idCard', 'email', 'bank', 'radio', 'checkbox', 'select', 'number', 'picture', 'file'],
                },

                // 各个容器当前显示的子模块
                pvt_isShow: {
                    name: null,
                    text: null,
                    phone: null,
                    idCard: null,
                    email: null,
                    bank: null,
                    radio: null,
                    checkbox: null,
                    select: null,
                    number: null,
                    picture: null,
                    file: null,
                },

                // 当前模块输入类型的事务接口名称，工具完成前需要用户手动填写
                pvt_eventPortInput: ['infoChangeEvent'],
            }
        },
        computed: {
            pvt_name: function () {
                return {
                    nameRef: {
                        paraVarPair: {},
                        para: {
                            textData: [{
                                $table: this.mac.tb.groupActivityEnrollForm,
                                $arrField: [this.mac.fd.groupActivityEnrollForm.name],
                                $arrValue: [this.para.curFormId]
                            }]
                        },
                        attr: {
                            fontSize: '14px',
                            color: '#303133',
                            icon: this.needIcon,
                            iconIsRight: true,
                            fontWeight: true
                        }
                    }
                }
            },

            pvt_text: function () {
                return {
                    textRef: {
                        paraVarPair: {},
                        para: {
                            text: this.nameDefault
                        },
                        attr: {
                            placeholder: this.inputPlaceholder,
                            type: this.textInputType,
                            autosize: {
                                minRows: 3,
                                maxRows: 3
                            }
                        }
                    }
                }
            },

            pvt_phone: function () {
                return {
                    phoneRef: {
                        paraVarPair: {},
                        para: {
                            mobile: this.phoneDefault
                        },
                        attr: {
                            placeholder: '请输入手机号',
                            hint: true
                        }
                    }
                }
            },

            pvt_idCard: function () {
                return {
                    idCardRef: {
                        paraVarPair: {},
                        para: {
                            card: ''
                        },
                        attr: {
                            placeholder: '请输入身份证号',
                            hint: true
                        }
                    }
                }
            },

            pvt_email: function () {
                return {
                    emailRef: {
                        paraVarPair: {},
                        para: {
                            eMail: ''
                        },
                        attr: {
                            placeholder: '请输入邮箱',
                            hint: true,
                            prompt: true
                        }
                    }
                }
            },

            pvt_bank: function () {
                return {
                    bankRef: {
                        paraVarPair: {},
                        para: {
                            text: ''
                        },
                        attr: {
                            placeholder: '请输入银行账号',
                            hint: true
                        }
                    },

                }
            },

            pvt_radio: function () {
                return {
                    radioRef: {
                        paraVarPair: {
                            radioData: 'radioSelect'
                        },
                        para: {
                            radioData: this.radioSelect
                        },
                        attr: {
                            radioArr: this.radioData
                        }
                    }
                }
            },

            pvt_checkbox: function () {
                return {
                    checkboxRef: {
                        paraVarPair: {
                            checkData: 'checkboxSelect'
                        },
                        para: {
                            checkData: this.checkboxSelect
                        },
                        attr: {
                            checkboxArr: this.checkboxData
                        }
                    }
                }
            },

            pvt_select: function () {
                return {
                    selectRef: {
                        paraVarPair: {
                            value: 'value'
                        },
                        para: {
                            value: '',
                            listSource: this.selectData
                        },
                        attr: {}
                    }
                }
            },

            pvt_number: function () {
                return {
                    numberRef: {
                        paraVarPair: {
                            value: 'inputNum'
                        },
                        para: {
                            value: this.inputNum
                        },
                        attr: {
                            decimals: 0,
                            // min: 1,
                            // size: 'mini'
                        }
                    }
                }
            },

            pvt_picture: function () {
                return {
                    pictureRef: {
                        paraVarPair: {},
                        para: {
                            detail: [{
                                $table: this.mac.tb.groupActivityAppendix,
                                $arrField: [this.mac.fd.groupActivityAppendix.picture],
                                $arrValue: [1]
                                // $arrValue: [this.curAppendixId]
                            }],
                            thumbnail: this.mac.fd.groupActivityAppendix.thumbnail
                        },
                        attr: {
                            limit: 1,
                            rate: 0.5,
                            promptText: ''
                        }
                    },

                }
            },

            pvt_file: function () {
                return {
                    fileRef: {
                        paraVarPair: {},
                        para: {
                            uploadFile: [{
                                $table: this.mac.tb.groupActivityAppendix,
                                $arrField: [this.mac.fd.groupActivityAppendix.file],
                                $arrValue: [this.curAppendixId]
                            }],
                        },
                        attr: {
                            limit: 1,
                            buttonText: '点击上传'
                        }
                    }
                }
            },
        },

        created: function () {
            Object.assign(this, libSys, libUpload);
        },
        mounted: function () {
            this.pvt_initSysData();
        },
        methods: {
            getCookie:function(type){
                if(type === 'userID'){
                    return 1;
                } else if(type === 'userName'){
                    return '张三'
                } else if (type === 'userPhone') {
                    return 18745127891
                }
            },
            startModule: function (successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'orderInput_start';
                let dbFlag;
                let dbData;
                let tableName;
                let expression;
                let start;
                let total;
                let sort;
                let destGeneSite;
                let portName;
                let inputData;
                let record;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0
                };

                if (successCallBack !== null) {
                    errorCallBack = para;
                    successCallBack = null
                }
                para = errorCallBack;

                let ref = {
                    nameRef: 'nameRef',
                    textRef: 'textRef',
                    phoneRef: 'phoneRef',
                    idCardRef: 'idCardRef',
                    emailRef: 'emailRef',
                    bankRef: 'bankRef',
                    radioRef: 'radioRef',
                    checkboxRef: 'checkboxRef',
                    selectRef: 'selectRef',
                    numberRef: 'numberRef',
                    pictureRef: 'pictureRef',
                    fileRef: 'fileRef',
                };

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                            that.myName = that.getCookie('userName');
                            that.myId = that.getCookie('userID');
                            that.myPhone = that.getCookie('userPhone');

                            that.inputNum = 1;
                            that.needIcon = 'lm-icon-required';
                            that.titleName = '';
                            that.radioSelect = 1;
                            that.checkboxSelect = [];
                            that.radioData = [];
                            that.checkboxData = [];
                            that.selectData = [];
                            that.textInputType = 'text';

                            para.nStep = 'getFormData';
                            dbFlag++;
                            break;
                        case 'getFormData':
                            tableName = this.mac.tb.groupActivityEnrollForm;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.para.curFormId];
                            dbData[that.mac.fd.groupActivityEnrollForm.name] = [];
                            dbData[that.mac.fd.groupActivityEnrollForm.attribute] = [];
                            dbData[that.mac.fd.groupActivityEnrollForm.baseComponent] = [];

                            that.sys.api.recordRead(tableName, dbData, function () {
                                that.titleName = dbData[that.mac.fd.groupActivityEnrollForm.name][0];
                                that.inputPlaceholder = '请输入' + that.titleName;

                                // 判读是否为必填的姓名，手机：
                                if(that.titleName === '姓名') {
                                    that.nameDefault = that.myName
                                } else if(that.titleName === '手机') {
                                    that.phoneDefault = that.myPhone
                                }

                                // 判断是否必填：
                                if (dbData[that.mac.fd.groupActivityEnrollForm.attribute][0] !== that.mac.enum.groupActivityEnrollForm.attribute.need) {
                                    that.needIcon = undefined;
                                }
                                // 判断加载哪个组件：
                                para.baseComponent = dbData[that.mac.fd.groupActivityEnrollForm.baseComponent][0];
                                switch (para.baseComponent.componentName) {
                                    case 'lm-input-text':
                                        if (para.baseComponent.type === 1 || para.baseComponent.type === 0) {
                                            that.textInputType = 'text';
                                        } else if (para.baseComponent.type === 2) {
                                            that.textInputType = 'textarea'
                                        }
                                        para.nStep = 'start_3';
                                        break;
                                    case 'lm-input-phone':
                                        para.nStep = 'start_10';
                                        break;
                                    case 'lm-input-idcard':
                                        para.nStep = 'start_11';
                                        break;
                                    case 'lm-input-email':
                                        para.nStep = 'start_12';
                                        break;
                                    case 'lm-input-bank':
                                        para.nStep = 'start_13';
                                        break;
                                    case 'lm-radio':
                                        that.radioData = para.baseComponent.dataArr;
                                        para.nStep = 'start_14';
                                        break;
                                    case 'lm-checkbox':
                                        that.checkboxData = para.baseComponent.dataArr;
                                        para.nStep = 'start_15';
                                        break;
                                    case 'lm-select':
                                        that.selectData = para.baseComponent.dataArr;
                                        para.nStep = 'start_16';
                                        break;
                                    case 'lm-input-number':
                                        para.nStep = 'start_17';
                                        break;
                                    case 'lm-picture-upload':
                                        para.type = 'picture';
                                        para.nStep = 'newAppendix';
                                        break;
                                    case 'lm-file-upload':
                                        para.type = 'file';
                                        para.nStep = 'newAppendix';
                                        break;
                                }

                                that.forceUpdateData(function () {
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                });
                            }, function () {
                            });
                            break;
                        case 'newAppendix':
                            tableName = this.mac.tb.groupActivityAppendix;
                            dbData = {};
                            dbData[that.mac.fd.groupActivityAppendix.name] = [that.titleName];
                            if (para.type === 'file') {
                                dbData[that.mac.fd.groupActivityAppendix.type] = [that.mac.enum.groupActivityAppendix.type.file];
                            } else if (para.type === 'picture') {
                                dbData[that.mac.fd.groupActivityAppendix.type] = [that.mac.enum.groupActivityAppendix.type.picture];
                            }

                            that.sys.api.recordNew(tableName, that.para.curBillId, dbData, function () {
                                that.curAppendixId = dbData[that.mac.fd.id][0];
                                if (para.type === 'file') {
                                    para.nStep = 'start_19';
                                } else if (para.type === 'picture') {
                                    para.nStep = 'start_18';
                                }
                                that.forceUpdateData(function () {
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                });
                            }, function () {
                            });
                            break;
                        case 'start_3':
                            that.sm[ref.textRef].startModule(function () {
                                para.nStep = 'start_20';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_10':
                            that.sm[ref.phoneRef].startModule(function () {
                                para.nStep = 'start_20';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_11':
                            that.sm[ref.idCardRef].startModule(function () {
                                para.nStep = 'start_20';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_12':
                            that.sm[ref.emailRef].startModule(function () {
                                para.nStep = 'start_20';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_13':
                            that.sm[ref.bankRef].startModule(function () {
                                para.nStep = 'start_20';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_14':
                            that.sm[ref.radioRef].startModule(function () {
                                para.nStep = 'start_20';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_15':
                            that.sm[ref.checkboxRef].startModule(function () {
                                para.nStep = 'start_20';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_16':
                            that.sm[ref.selectRef].startModule(function () {
                                para.nStep = 'start_20';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_17':
                            that.sm[ref.numberRef].startModule(function () {
                                para.nStep = 'start_20';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_18':
                            that.sm[ref.pictureRef].startModule(function () {
                                para.nStep = 'start_20';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_19':
                            that.sm[ref.fileRef].startModule(function () {
                                para.nStep = 'start_20';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_20':
                            that.sm[ref.nameRef].startModule(function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            let refArr;
                            switch (para.baseComponent.componentName) {
                                case 'lm-input-text':
                                    refArr = ['nameRef', 'textRef'];
                                    break;
                                case 'lm-input-phone':
                                    refArr = ['nameRef', 'phoneRef'];
                                    break;
                                case 'lm-input-idcard':
                                    refArr = ['nameRef', 'idCardRef'];
                                    break;
                                case 'lm-input-email':
                                    refArr = ['nameRef', 'emailRef'];
                                    break;
                                case 'lm-input-bank':
                                    refArr = ['nameRef', 'bankRef'];
                                    break;
                                case 'lm-radio':
                                    refArr = ['nameRef', 'radioRef'];
                                    break;
                                case 'lm-checkbox':
                                    refArr = ['nameRef', 'checkboxRef'];
                                    break;
                                case 'lm-select':
                                    refArr = ['nameRef', 'selectRef'];
                                    break;
                                case 'lm-input-number':
                                    refArr = ['nameRef', 'numberRef'];
                                    break;
                                case 'lm-picture-upload':
                                    refArr = ['nameRef', 'pictureRef'];
                                    break;
                                case 'lm-file-upload':
                                    refArr = ['nameRef', 'fileRef'];
                                    break;
                            }

                            that.showSubModule(refArr, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'end':
                            switch (para.baseComponent.componentName) {
                                case 'lm-input-text':
                                    if(that.titleName === '姓名') {
                                        para.successCallBack({[that.titleName]: [that.nameDefault, that.needIcon]});
                                    } else {
                                        para.successCallBack({[that.titleName]: ['', that.needIcon]});
                                    }
                                    break;
                                case 'lm-input-phone':
                                    para.successCallBack({[that.titleName]: [that.phoneDefault, that.needIcon]});
                                    break;
                                case 'lm-input-idcard':
                                case 'lm-input-email':
                                case 'lm-input-bank':
                                case 'lm-checkbox':
                                case 'lm-select':
                                case 'lm-picture-upload':
                                case 'lm-file-upload':
                                    para.successCallBack({[that.titleName]: ['', that.needIcon]});
                                    break;
                                case 'lm-radio':
                                    para.successCallBack({[that.titleName]: [this.radioData[this.radioSelect-1].text, that.needIcon]});
                                    break;
                                case 'lm-input-number':
                                    para.successCallBack({[that.titleName]: [1, that.needIcon]});
                                    break;
                            }
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },

            textChange: function (value) {
                this.ep.infoChangeEvent({[this.titleName]: [value, this.needIcon]});
            },
            phoneChange: function (value) {
                this.ep.infoChangeEvent({[this.titleName]: [value, this.needIcon]});
            },
            idCardChange: function (value) {
                this.ep.infoChangeEvent({[this.titleName]: [value, this.needIcon]});
            },
            emailChange: function (value) {
                this.ep.infoChangeEvent({[this.titleName]: [value, this.needIcon]});
            },
            bankChange: function (value) {
                this.ep.infoChangeEvent({[this.titleName]: [value, this.needIcon]});
            },
            radioChange: function () {
                this.ep.infoChangeEvent({[this.titleName]: [this.radioData[this.radioSelect-1].text, this.needIcon]});
            },
            checkboxChange: function () {
                let checkTextArr = [];
                for(let i = 0; i < this.checkboxSelect.length; i++) {
                    checkTextArr.push(this.checkboxData[this.checkboxSelect[i]-1].text)
                }
                if(checkTextArr.length === 0) {
                    checkTextArr = null;
                }
                this.ep.infoChangeEvent({[this.titleName]: [checkTextArr, this.needIcon]});
            },
            numberChange: function () {
                this.ep.infoChangeEvent({[this.titleName]: [this.inputNum, this.needIcon]});
            },
            selectChange: function (index, value) {
                this.ep.infoChangeEvent({[this.titleName]: [value, this.needIcon]});
            },
            pictureChange: function() {
                this.ep.infoChangeEvent({[this.titleName]: [true, this.needIcon]});
            },


            textRef_dataModifyEvent: function (value) {
                this.textChange(value);
            },
            phoneRef_dataModifyEvent: function (value) {
                this.phoneChange(value);
            },
            idCardRef_dataModifyEvent: function (value) {
                this.idCardChange(value);
            },
            emailRef_dataModifyEvent: function (value) {
                this.emailChange(value);
            },
            bankRef_dataModifyEvent: function (value) {
                this.bankChange(value);
            },
            radioRef_dataModifyEvent: function () {
                this.radioChange();
            },
            checkboxRef_dataModifyEvent: function () {
                this.checkboxChange();
            },
            selectRef_dataModifyEvent: function (index, value) {
                this.selectChange(index, value);
            },
            numberRef_dataModifyEvent: function () {
                this.numberChange();
            },
            pictureRef_dataModifyEvent: function () {
                this.pictureChange();
            },
        }
    }
</script>
<style lang="scss">
    .info-input-wrap {
        margin-bottom: 20px;

        .input-name {
            margin-bottom: 10px;

            .link-text-icon__right {
                color: red;
                font-size: 26px;
                margin-left: -5px;
            }
        }

        .input-base-component {
            .lm_text_input_container {
                margin-right: 20px;
            }
        }
    }
</style>
