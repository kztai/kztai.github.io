<template>
    <div v-show="pvt_win.isShow.signUpWindow"
         :class="{signUp_container:true,signUp_col:true,signUp_col_signUpWindow:true,signUp_col_signUpWindow_size_large:attr.size==='large',signUp_col_signUpWindow_size_medium:attr.size==='medium',signUp_col_signUpWindow_size_small:attr.size==='small',signUp_col_signUpWindow_size_min:attr.size==='min',signUp_col_signUpWindow_checked:pvt_win.isChecked.signUpWindow,signUp_col_signUpWindow_disable:attr.disabled}"
         :style="pvt_win.style.signUpWindow">

        <div class="signUp_row signUp_row_row0">
            <div v-show="pvt_win.isShow.nameTxtDiv"
                 :class="{signUp_col:true,signUp_col_nameTxtDiv:true,signUp_col_nameTxtDiv_size_large:attr.size==='large',signUp_col_nameTxtDiv_size_medium:attr.size==='medium',signUp_col_nameTxtDiv_size_small:attr.size==='small',signUp_col_nameTxtDiv_size_min:attr.size==='min',signUp_col_nameTxtDiv_checked:pvt_win.isChecked.nameTxtDiv,signUp_col_nameTxtDiv_disable:attr.disabled}"
                 :style="pvt_win.style.nameTxtDiv">

                <lm2b-link-text
                        ref="userCategoryDiv"
                        refId="userCategoryDiv"
                        v-show="pvt_isShow.nameTxtDiv === 'userCategoryDiv'"
                        :paraVarPair="pvt_nameTxtDiv.userCategoryDiv.paraVarPair"
                        :para="pvt_nameTxtDiv.userCategoryDiv.para"
                        :attr="pvt_nameTxtDiv.userCategoryDiv.attr">
                </lm2b-link-text>
            </div>
            <div v-show="pvt_win.isShow.symbolTxtDiv"
                 :class="{signUp_col:true,signUp_col_symbolTxtDiv:true,signUp_col_symbolTxtDiv_size_large:attr.size==='large',signUp_col_symbolTxtDiv_size_medium:attr.size==='medium',signUp_col_symbolTxtDiv_size_small:attr.size==='small',signUp_col_symbolTxtDiv_size_min:attr.size==='min',signUp_col_symbolTxtDiv_checked:pvt_win.isChecked.symbolTxtDiv,signUp_col_symbolTxtDiv_disable:attr.disabled}"
                 :style="pvt_win.style.symbolTxtDiv">

                <lm2b-link-text
                        ref="symbolTxt"
                        refId="symbolTxt"
                        v-show="pvt_isShow.symbolTxtDiv === 'symbolTxt'"
                        :paraVarPair="pvt_symbolTxtDiv.symbolTxt.paraVarPair"
                        :para="pvt_symbolTxtDiv.symbolTxt.para"
                        :attr="pvt_symbolTxtDiv.symbolTxt.attr">
                </lm2b-link-text>
            </div>
        </div>
        <div class="signUp_row signUp_row_row1">
            <div v-show="pvt_win.isShow.userNameDiv"
                 :class="{signUp_col:true,signUp_col_userNameDiv:true,signUp_col_userNameDiv_size_large:attr.size==='large',signUp_col_userNameDiv_size_medium:attr.size==='medium',signUp_col_userNameDiv_size_small:attr.size==='small',signUp_col_userNameDiv_size_min:attr.size==='min',signUp_col_userNameDiv_checked:pvt_win.isChecked.userNameDiv,signUp_col_userNameDiv_disable:attr.disabled}"
                 :style="pvt_win.style.userNameDiv">

                <lm2b-link-text
                        ref="userName"
                        refId="userName"
                        v-show="pvt_isShow.userNameDiv === 'userName'"
                        :paraVarPair="pvt_userNameDiv.userName.paraVarPair"
                        :para="pvt_userNameDiv.userName.para"
                        :attr="pvt_userNameDiv.userName.attr">
                </lm2b-link-text>
            </div>
        </div>
        <div class="signUp_row signUp_row_row2">
            <div v-show="pvt_win.isShow.phoneTxtDiv"
                 :class="{signUp_col:true,signUp_col_phoneTxtDiv:true,signUp_col_phoneTxtDiv_size_large:attr.size==='large',signUp_col_phoneTxtDiv_size_medium:attr.size==='medium',signUp_col_phoneTxtDiv_size_small:attr.size==='small',signUp_col_phoneTxtDiv_size_min:attr.size==='min',signUp_col_phoneTxtDiv_checked:pvt_win.isChecked.phoneTxtDiv,signUp_col_phoneTxtDiv_disable:attr.disabled}"
                 :style="pvt_win.style.phoneTxtDiv">

                <lm2b-link-text
                        ref="phoneTxt"
                        refId="phoneTxt"
                        v-show="pvt_isShow.phoneTxtDiv === 'phoneTxt'"
                        :paraVarPair="pvt_phoneTxtDiv.phoneTxt.paraVarPair"
                        :para="pvt_phoneTxtDiv.phoneTxt.para"
                        :attr="pvt_phoneTxtDiv.phoneTxt.attr">
                </lm2b-link-text>
            </div>
            <div v-show="pvt_win.isShow.symbolTxt2Div"
                 :class="{signUp_col:true,signUp_col_symbolTxt2Div:true,signUp_col_symbolTxt2Div_size_large:attr.size==='large',signUp_col_symbolTxt2Div_size_medium:attr.size==='medium',signUp_col_symbolTxt2Div_size_small:attr.size==='small',signUp_col_symbolTxt2Div_size_min:attr.size==='min',signUp_col_symbolTxt2Div_checked:pvt_win.isChecked.symbolTxt2Div,signUp_col_symbolTxt2Div_disable:attr.disabled}"
                 :style="pvt_win.style.symbolTxt2Div">

                <lm2b-link-text
                        ref="symbolTxt2"
                        refId="symbolTxt2"
                        v-show="pvt_isShow.symbolTxt2Div === 'symbolTxt2'"
                        :paraVarPair="pvt_symbolTxt2Div.symbolTxt2.paraVarPair"
                        :para="pvt_symbolTxt2Div.symbolTxt2.para"
                        :attr="pvt_symbolTxt2Div.symbolTxt2.attr">
                </lm2b-link-text>
            </div>
        </div>
        <div class="signUp_row signUp_row_row3">
            <div v-show="pvt_win.isShow.userPhoneDiv"
                 :class="{signUp_col:true,signUp_col_userPhoneDiv:true,signUp_col_userPhoneDiv_size_large:attr.size==='large',signUp_col_userPhoneDiv_size_medium:attr.size==='medium',signUp_col_userPhoneDiv_size_small:attr.size==='small',signUp_col_userPhoneDiv_size_min:attr.size==='min',signUp_col_userPhoneDiv_checked:pvt_win.isChecked.userPhoneDiv,signUp_col_userPhoneDiv_disable:attr.disabled}"
                 :style="pvt_win.style.userPhoneDiv">

                <lm2b-link-text
                        ref="userPhone"
                        refId="userPhone"
                        v-show="pvt_isShow.userPhoneDiv === 'userPhone'"
                        :paraVarPair="pvt_userPhoneDiv.userPhone.paraVarPair"
                        :para="pvt_userPhoneDiv.userPhone.para"
                        :attr="pvt_userPhoneDiv.userPhone.attr">
                </lm2b-link-text>
            </div>
        </div>
        <div class="signUp_row signUp_row_row4">
            <div v-show="pvt_win.isShow.companyTxtDiv"
                 :class="{signUp_col:true,signUp_col_companyTxtDiv:true,signUp_col_companyTxtDiv_size_large:attr.size==='large',signUp_col_companyTxtDiv_size_medium:attr.size==='medium',signUp_col_companyTxtDiv_size_small:attr.size==='small',signUp_col_companyTxtDiv_size_min:attr.size==='min',signUp_col_companyTxtDiv_checked:pvt_win.isChecked.companyTxtDiv,signUp_col_companyTxtDiv_disable:attr.disabled}"
                 :style="pvt_win.style.companyTxtDiv">

                <lm2b-link-text
                        ref="companyTxt"
                        refId="companyTxt"
                        v-show="pvt_isShow.companyTxtDiv === 'companyTxt'"
                        :paraVarPair="pvt_companyTxtDiv.companyTxt.paraVarPair"
                        :para="pvt_companyTxtDiv.companyTxt.para"
                        :attr="pvt_companyTxtDiv.companyTxt.attr">
                </lm2b-link-text>
            </div>
        </div>
        <div class="signUp_row signUp_row_row5">
            <div v-show="pvt_win.isShow.userCompanyDiv"
                 :class="{signUp_col:true,signUp_col_userCompanyDiv:true,signUp_col_userCompanyDiv_size_large:attr.size==='large',signUp_col_userCompanyDiv_size_medium:attr.size==='medium',signUp_col_userCompanyDiv_size_small:attr.size==='small',signUp_col_userCompanyDiv_size_min:attr.size==='min',signUp_col_userCompanyDiv_checked:pvt_win.isChecked.userCompanyDiv,signUp_col_userCompanyDiv_disable:attr.disabled}"
                 :style="pvt_win.style.userCompanyDiv">

                <lm2b-link-text
                        ref="userCompany"
                        refId="userCompany"
                        v-show="pvt_isShow.userCompanyDiv === 'userCompany'"
                        :paraVarPair="pvt_userCompanyDiv.userCompany.paraVarPair"
                        :para="pvt_userCompanyDiv.userCompany.para"
                        :attr="pvt_userCompanyDiv.userCompany.attr">
                </lm2b-link-text>
            </div>
        </div>
        <div class="signUp_row signUp_row_row6">
            <div v-show="pvt_win.isShow.categoryTxtDiv"
                 :class="{signUp_col:true,signUp_col_categoryTxtDiv:true,signUp_col_categoryTxtDiv_size_large:attr.size==='large',signUp_col_categoryTxtDiv_size_medium:attr.size==='medium',signUp_col_categoryTxtDiv_size_small:attr.size==='small',signUp_col_categoryTxtDiv_size_min:attr.size==='min',signUp_col_categoryTxtDiv_checked:pvt_win.isChecked.categoryTxtDiv,signUp_col_categoryTxtDiv_disable:attr.disabled}"
                 :style="pvt_win.style.categoryTxtDiv">

                <lm2b-link-text
                        ref="categoryTxt"
                        refId="categoryTxt"
                        v-show="pvt_isShow.categoryTxtDiv === 'categoryTxt'"
                        :paraVarPair="pvt_categoryTxtDiv.categoryTxt.paraVarPair"
                        :para="pvt_categoryTxtDiv.categoryTxt.para"
                        :attr="pvt_categoryTxtDiv.categoryTxt.attr">
                </lm2b-link-text>
            </div>
        </div>
        <div class="signUp_row signUp_row_row7">
            <div v-show="pvt_win.isShow.userCategoryDiv"
                 :class="{signUp_col:true,signUp_col_userCategoryDiv:true,signUp_col_userCategoryDiv_size_large:attr.size==='large',signUp_col_userCategoryDiv_size_medium:attr.size==='medium',signUp_col_userCategoryDiv_size_small:attr.size==='small',signUp_col_userCategoryDiv_size_min:attr.size==='min',signUp_col_userCategoryDiv_checked:pvt_win.isChecked.userCategoryDiv,signUp_col_userCategoryDiv_disable:attr.disabled}"
                 :style="pvt_win.style.userCategoryDiv">

                <lm2b-link-text
                        ref="userCategory"
                        refId="userCategory"
                        v-show="pvt_isShow.userCategoryDiv === 'userCategory'"
                        :paraVarPair="pvt_userCategoryDiv.userCategory.paraVarPair"
                        :para="pvt_userCategoryDiv.userCategory.para"
                        :attr="pvt_userCategoryDiv.userCategory.attr">
                </lm2b-link-text>
            </div>
        </div>
        <div class="signUp_row signUp_row_row8">
            <div v-show="pvt_win.isShow.confirmBtnDiv"
                 :class="{signUp_col:true,signUp_col_confirmBtnDiv:true,signUp_col_confirmBtnDiv_size_large:attr.size==='large',signUp_col_confirmBtnDiv_size_medium:attr.size==='medium',signUp_col_confirmBtnDiv_size_small:attr.size==='small',signUp_col_confirmBtnDiv_size_min:attr.size==='min',signUp_col_confirmBtnDiv_checked:pvt_win.isChecked.confirmBtnDiv,signUp_col_confirmBtnDiv_disable:attr.disabled}"
                 :style="pvt_win.style.confirmBtnDiv">

                <lm2b-button
                        ref="confirmBtn"
                        refId="confirmBtn"
                        v-show="pvt_isShow.confirmBtnDiv === 'confirmBtn'"
                        :paraVarPair="pvt_confirmBtnDiv.confirmBtn.paraVarPair"
                        :para="pvt_confirmBtnDiv.confirmBtn.para"
                        :attr="pvt_confirmBtnDiv.confirmBtn.attr">
                </lm2b-button>
            </div>
        </div>

    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';

    export default {
        components: {},
        inject: ['sys'],
        props: {
            refId: String,
            para: Object,
            attr: {
                type: Object,
                default: function () {
                    return {size: 'medium'};
                },
                validator: function (val) {
                    if (!val.size) val.size = 'medium';
                    return true;
                },
            },
            number: Number,
        },
        data: function () {
            return {
                mac: mac.mac,
                userNum: this.para.userNum,
                pvt_subModuleMap: {
                    vessel: ['nameTxtDiv', 'symbolTxtDiv', 'userNameDiv', 'phoneTxtDiv', 'companyTxtDiv', 'categoryTxtDiv', 'symbolTxt2Div', 'userPhoneDiv', 'userCompanyDiv', 'userCategoryDiv', 'confirmBtnDiv'],
                    subModule: ['userCategoryDiv', 'symbolTxt', 'userName', 'phoneTxt', 'companyTxt', 'categoryTxt', 'symbolTxt2', 'userPhone', 'userCompany', 'userCategory', 'confirmBtn'],
                },
                pvt_isShow: {
                    nameTxtDiv: null,
                    symbolTxtDiv: null,
                    userNameDiv: null,
                    phoneTxtDiv: null,
                    companyTxtDiv: null,
                    categoryTxtDiv: null,
                    symbolTxt2Div: null,
                    userPhoneDiv: null,
                    userCompanyDiv: null,
                    userCategoryDiv: null,
                    confirmBtnDiv: null,
                },
                pvt_win: {
                    isShow: {
                        signUpWindow: true,
                        nameTxtDiv: true,
                        symbolTxtDiv: true,
                        userNameDiv: true,
                        phoneTxtDiv: true,
                        symbolTxt2Div: true,
                        userPhoneDiv: true,
                        companyTxtDiv: true,
                        userCompanyDiv: true,
                        categoryTxtDiv: true,
                        userCategoryDiv: true,
                        confirmBtnDiv: true,
                    },
                    isChecked: {
                        signUpWindow: false,
                        nameTxtDiv: false,
                        symbolTxtDiv: false,
                        userNameDiv: false,
                        phoneTxtDiv: false,
                        symbolTxt2Div: false,
                        userPhoneDiv: false,
                        companyTxtDiv: false,
                        userCompanyDiv: false,
                        categoryTxtDiv: false,
                        userCategoryDiv: false,
                        confirmBtnDiv: false,
                    },
                    style: {
                        signUpWindow: null,
                        nameTxtDiv: null,
                        symbolTxtDiv: null,
                        userNameDiv: null,
                        phoneTxtDiv: null,
                        symbolTxt2Div: null,
                        userPhoneDiv: null,
                        companyTxtDiv: null,
                        userCompanyDiv: null,
                        categoryTxtDiv: null,
                        userCategoryDiv: null,
                        confirmBtnDiv: null,
                    },
                },
                pvt_eventPortInput: [],

                nameValue: null,
                phoneNum: null,
                companyName: null,
                categoryValue: null,
                userId: null,
                signInTime: null,
            };
        },
        watch: {
            userNum: {
                handler: function (val, oldVal) {
                    if (val !== oldVal && this.paraVarPair.userNum) {
                        if (this.number !== undefined) { // 循环
                            this.$parent[this.paraVarPair.userNum][this.number] = val
                        } else { // 非循环
                            this.$parent[this.paraVarPair.userNum] = val
                        }
                    }
                },
                deep: true
            },
        },
        computed: {
            pvt_nameTxtDiv: function () {
                return {
                    userCategoryDiv: {
                        paraVarPair: {},
                        para: {
                            textData: '姓名',
                        },
                        attr: {
                            label: 'p',
                            color: '#666666',
                            fontSize: '16px',
                        },
                    },
                };
            },
            pvt_symbolTxtDiv: function () {
                return {
                    symbolTxt: {
                        paraVarPair: {},
                        para: {
                            textData: '*',
                        },
                        attr: {
                            label: 'p',
                            color: '#F56C6C',
                            fontSize: '16px',
                        },
                    },
                };
            },
            pvt_userNameDiv: function () {
                return {
                    userName: {
                        paraVarPair: {
                            textData: 'nameValue',
                        },
                        para: {
                            textData: this.nameValue,
                        },
                        attr: {
                            label: 'p',
                            color: '#333333',
                            fontSize: '18px',
                        },
                    },
                };
            },
            pvt_phoneTxtDiv: function () {
                return {
                    phoneTxt: {
                        paraVarPair: {},
                        para: {
                            textData: '手机',
                        },
                        attr: {
                            label: 'p',
                            color: '#666666',
                            fontSize: '16px',
                        },
                    },
                };
            },
            pvt_companyTxtDiv: function () {
                return {
                    companyTxt: {
                        paraVarPair: {},
                        para: {
                            textData: '公司名（选填）',
                        },
                        attr: {
                            label: 'p',
                            color: '#666666',
                            fontSize: '16px',
                        },
                    },
                };
            },
            pvt_categoryTxtDiv: function () {
                return {
                    categoryTxt: {
                        paraVarPair: {},
                        para: {
                            textData: '类别',
                        },
                        attr: {
                            label: 'p',
                            color: '#666666',
                            fontSize: '16px',
                        },
                    },
                };
            },
            pvt_symbolTxt2Div: function () {
                return {
                    symbolTxt2: {
                        paraVarPair: {},
                        para: {
                            textData: '*',
                        },
                        attr: {
                            label: 'p',
                            color: '#F56C6C',
                            fontSize: '16px',
                        },
                    },
                };
            },
            pvt_userPhoneDiv: function () {
                return {
                    userPhone: {
                        paraVarPair: {
                            textData: 'phoneNum',
                        },
                        para: {
                            textData: this.phoneNum,
                        },
                        attr: {
                            label: 'p',
                            color: '#333333',
                            fontSize: '18px',
                        },
                    },
                };
            },
            pvt_userCompanyDiv: function () {
                return {
                    userCompany: {
                        paraVarPair: {
                            textData: 'companyName',
                        },
                        para: {
                            textData: this.companyName,
                        },
                        attr: {
                            label: 'p',
                            color: '#333333',
                            fontSize: '18px',
                        },
                    },
                };
            },
            pvt_userCategoryDiv: function () {
                return {
                    userCategory: {
                        paraVarPair: {
                            textData: 'categoryValue',
                        },
                        para: {
                            textData: this.categoryValue,
                        },
                        attr: {
                            label: 'p',
                            color: '#333333',
                            fontSize: '18px',
                        },
                    },
                };
            },
            pvt_confirmBtnDiv: function () {
                return {
                    confirmBtn: {
                        paraVarPair: {},
                        para: {
                            name: ['确认', ''],
                        },
                        attr: {
                            type: 'primary',
                            height: '60px',
                            width: '100%',
                        },
                    },
                };
            },
        },
        created: function () {
            Object.assign(this, libSys, libUpload);
        },
        mounted: function () {
            this.pvt_initSysData();
        },
        methods: {
            setPara: function (successCallBack, errorCallBack) {
                var para = {};
                para.successCallBack = successCallBack;
                para.errorCallBack = errorCallBack;
                para.nStep = 0;
                return para;
            },
            startModule: function (successCallBack, errorCallBack) {
                let $this = this;
                let para;
                let dbFlag;
                let tableName;
                let dbData;
                let parentRecord;
                let condition;
                let arrParentRecord;
                let ref = {
                    sm1: 'userCategoryDiv',
                    sm2: 'symbolTxt',
                    sm3: 'userName',
                    sm4: 'phoneTxt',
                    sm5: 'companyTxt',
                    sm6: 'categoryTxt',
                    sm7: 'symbolTxt2',
                    sm8: 'userPhone',
                    sm9: 'userCompany',
                    sm10: 'userCategory',
                    sm11: 'confirmBtn',
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
                            // tableName = this.mac.tb.customer;
                            // dbData = {};
                            // dbData[this.mac.fd.customer.number] = [1, 2, 3, 4, 50, 51];
                            // dbData[this.mac.fd.customer.name] = ['赵一', '钱二', '孙三', '李四', '周吴', '吴六'];
                            // dbData[this.mac.fd.customer.mobile] = ['15240755081', '15240755082', '15240755083', '15240755084', '15240755085', '15240755086'];
                            // dbData[this.mac.fd.customer.company] = ['腾讯', '阿里', '百度', '谷歌', '新浪', '雅虎'];
                            // dbData[this.mac.fd.customer.companion] = [1, 2, 3, 4, 5, 6];
                            // dbData[this.mac.fd.customer.type] = [0, 1, 0, 2, 3, 4];
                            // this.sys.recordNew_(tableName, null, dbData, function () {
                            //     console.log('新增成功');
                            //     para.nStep = 'getInfo';
                            //     if (++dbFlag === 2) {
                            //          $this.startModule(successCallBack, errorCallBack)
                            //     }
                            // }, function (error) {
                            // });
                            // break;
                        case  'getInfo':
                            let queryNum = 'number=' + this.para.userNum;
                            tableName = this.mac.tb.customer;
                            parentRecord = null;
                            arrParentRecord = null;
                            condition = queryNum;
                            var data = {};
                            data.id = [];
                            data.name = [];
                            data.mobile = [];
                            data.company = [];
                            data.type = [];
                            this.sys.recordQuery_(tableName, arrParentRecord, condition, data,
                                function (result) {
                                    console.log(data);
                                    $this.userId = data.id[0];
                                    $this.nameValue = data.name[0];
                                    $this.phoneNum = data.mobile;
                                    $this.companyName = data.company[0];
                                    if (data.type[0] === 0) {
                                        $this.categoryValue = '开发公司';
                                    } else if (data.type[0] === 1) {
                                        $this.categoryValue = '投资机构';
                                    } else if (data.type[0] === 2) {
                                        $this.categoryValue = '朋友';
                                    } else if (data.type[0] === 3) {
                                        $this.categoryValue = '股东';
                                    } else {
                                        $this.categoryValue = '其他';
                                    }
                                }, para.errorCallBack);
                            para.nStep = 'showSubModule';
                            ++dbFlag;
                            break;
                        case 'showSubModule':
                            $this.showSubModule([ref.sm1, ref.sm2, ref.sm3, ref.sm4, ref.sm5, ref.sm6, ref.sm7, ref.sm8, ref.sm9, ref.sm10, ref.sm11], true, function () {
                                para.nStep = 'forceUpdateData';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'forceUpdateData':
                            $this.forceUpdateData(function () {
                                para.nStep = 'startModule1';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            });
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
            RegisterConfirm: function () {
                this.getdatatime();
                var $this = this;
                var tableName = "customer";
                var data = {};
                data.id = [$this.userId]; // 必须定义
                data.time = [$this.signInTime];
                this.sys.recordModify_(tableName, data,
                    function (result) {
                        console.log('修改成功');
                    },
                    function (error) {
                        console.log('修改失败');
                    });
                var tableVariable = [{
                    $geneAddr: null,
                    $table: "customer",
                    $arrField: null,
                    // $arrValue: [],
                    $arrValue: [$this.userId],
                    $arrOrgValue: [],
                    $allFlag: [1, 0, 1, 1],
                    $arrSubTab: []
                }];
                var destGeneSite = null;
                $this.sys.dataOutput(tableVariable, destGeneSite, function () {
                    $this.$notify({type: 'success', message: '签到成功！请进入会场'});
                    // window.location.href = 'http://www.zeropaas.com'
                }, function () {
                    $this.$notify({type: 'success', message: '签到失败！请重新扫码'});
                });

            },
            getdatatime() {
                var $this = this;
                let hh = new Date().getHours();
                let ms = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds();
                let mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
                $this.signInTime = hh + ':' + mf + ':' + ms;;
            },
            confirmBtn_buttonClickEvent: function () {
                this.RegisterConfirm();
            },
        },
    };
</script>
<style lang="less" scoped>
    @import "../../../assets/zhl-style.less";

    .signUp_container {
        width: 100%;
        height: 100%;
    }

    .signUp_mask {
        display: flex;
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, .4);
    }

    .signUp_dialog {
        position: absolute;
        left: 0;
        top: 0;
    }

    .signUp_overlay {
        position: absolute;
        left: 0;
        top: 0;
    }

    .signUp_row {
        display: flex;
    }

    .signUp_col {
        position: relative;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
    }

    .signUp_col_signUpWindow_size_medium {
        width: @signUp-signUpWindow-medium-width;
    }

    .signUp_col_nameTxtDiv_size_medium {
        height: @signUp-nameTxtDiv-medium-height;
        justify-content: @signUp-nameTxtDiv-medium-vertical-position;
    }

    .signUp_col_symbolTxtDiv_size_medium {
        width: @signUp-symbolTxtDiv-medium-width;
        height: @signUp-symbolTxtDiv-medium-height;
        justify-content: @signUp-symbolTxtDiv-medium-vertical-position;
    }

    .signUp_col_userNameDiv_size_medium {
        width: @signUp-userNameDiv-medium-width;
        height: @signUp-userNameDiv-medium-height;
        justify-content: @signUp-userNameDiv-medium-vertical-position;
    }

    .signUp_col_phoneTxtDiv_size_medium {
        height: @signUp-phoneTxtDiv-medium-height;
        justify-content: @signUp-phoneTxtDiv-medium-vertical-position;
    }

    .signUp_col_symbolTxt2Div_size_medium {
        width: @signUp-symbolTxt2Div-medium-width;
        height: @signUp-symbolTxt2Div-medium-height;
        justify-content: @signUp-symbolTxt2Div-medium-vertical-position;
    }

    .signUp_col_userPhoneDiv_size_medium {
        width: @signUp-userPhoneDiv-medium-width;
        height: @signUp-userPhoneDiv-medium-height;
        justify-content: @signUp-userPhoneDiv-medium-vertical-position;
    }

    .signUp_col_companyTxtDiv_size_medium {
        width: @signUp-companyTxtDiv-medium-width;
        height: @signUp-companyTxtDiv-medium-height;
        justify-content: @signUp-companyTxtDiv-medium-vertical-position;
    }

    .signUp_col_userCompanyDiv_size_medium {
        width: @signUp-userCompanyDiv-medium-width;
        height: @signUp-userCompanyDiv-medium-height;
        justify-content: @signUp-userCompanyDiv-medium-vertical-position;
    }

    .signUp_col_categoryTxtDiv_size_medium {
        width: @signUp-categoryTxtDiv-medium-width;
        height: @signUp-categoryTxtDiv-medium-height;
        justify-content: @signUp-categoryTxtDiv-medium-vertical-position;
    }

    .signUp_col_userCategoryDiv_size_medium {
        width: @signUp-userCategoryDiv-medium-width;
        height: @signUp-userCategoryDiv-medium-height;
        justify-content: @signUp-userCategoryDiv-medium-vertical-position;
    }

    .signUp_col_confirmBtnDiv_size_medium {
        width: @signUp-confirmBtnDiv-medium-width;
        height: @signUp-confirmBtnDiv-medium-height;
        justify-content: @signUp-confirmBtnDiv-medium-vertical-position;
        position: fixed;
        left: 0;
        bottom: 0;
    }


</style>
