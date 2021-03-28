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

        <div class="signUp_row signUp_row_row9">
            <div v-show="pvt_win.isShow.noExistInfo"
                 :class="{signUp_col:true,signUp_col_noExistInfo:true,signUp_col_noExistInfo_size_large:attr.size==='large',signUp_col_noExistInfo_size_medium:attr.size==='medium',signUp_col_noExistInfo_size_small:attr.size==='small',signUp_col_noExistInfo_size_min:attr.size==='min',signUp_col_noExistInfo_checked:pvt_win.isChecked.noExistInfo,signUp_col_noExistInfo_disable:attr.disabled}"
                 :style="pvt_win.style.noExistInfo">

                <noExistInfo
                        ref="noExistInfoRef"
                        refId="noExistInfoRef"
                        v-show="pvt_isShow.noExistInfo === 'noExistInfoRef'"
                        :paraVarPair="pvt_noExistInfo.noExistInfoRef.paraVarPair"
                        :para="pvt_noExistInfo.noExistInfoRef.para"
                        :attr="pvt_noExistInfo.noExistInfoRef.attr">
                </noExistInfo>
            </div>
        </div>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';
    import noExistInfo from '@/components/page/applyPage/messageDialog.vue';

    export default {
        components: {noExistInfo},
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
                pvt_subModuleMap: {
                    vessel: ['nameTxtDiv', 'symbolTxtDiv', 'userNameDiv', 'phoneTxtDiv', 'companyTxtDiv', 'categoryTxtDiv', 'symbolTxt2Div', 'userPhoneDiv', 'userCompanyDiv', 'userCategoryDiv', 'confirmBtnDiv', 'noExistInfo'],
                    subModule: ['userCategoryDiv', 'symbolTxt', 'userName', 'phoneTxt', 'companyTxt', 'categoryTxt', 'symbolTxt2', 'userPhone', 'userCompany', 'userCategory', 'confirmBtn', 'noExistInfoRef'],
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
                    noExistInfo: null,
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
                        noExistInfo: true,
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
                        noExistInfo: false,
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
                        noExistInfo: null,
                    },
                },
                pvt_eventPortInput: ['cancel'],

                mac: mac.mac,
                applyStatus: null,
                openId: null,
                disabled: false,
                nameValue: 111,
                phoneNum: 111,
                companyName: 111,
                categoryValue: 111,
            };
        },
        watch: {},
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
                            color: '#999',
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
                            color: '#999',
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
                            color: '#999',
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
                            color: '#999',
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
                            name: ['取消报名', ''],
                        },
                        attr: {
                            type: 'primary',
                            height: '50px',
                            width: '100%',
                            disabled: this.disabled
                        },
                    },
                };
            },
            pvt_noExistInfo: function () {
                return {
                    noExistInfoRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium'
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
            startModule: function (openId, successCallBack, errorCallBack) {
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
                    sm7: 'symbolTxt2',
                    sm8: 'userPhone',
                    sm9: 'userCompany',
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
                        case 'isApply':
                            this.openId = openId;

                            tableName = this.mac.tb.customer;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [1];
                            dbData[$this.mac.fd.customer.name] = [];
                            dbData[$this.mac.fd.customer.mobile] = [];
                            dbData[$this.mac.fd.customer.company] = [];
                            dbData[$this.mac.fd.customer.status] = [];

                            $this.sys.recordRead_(tableName, dbData, function () {
                                if (dbData[$this.mac.fd.id].length > 0) {
                                    $this.applyStatus = dbData[$this.mac.fd.customer.status][0];
                                    $this.nameValue = dbData[$this.mac.fd.customer.name][0];
                                    $this.phoneNum = dbData[$this.mac.fd.customer.mobile][0];
                                    $this.companyName = dbData[$this.mac.fd.customer.company][0];
                                    if(!$this.companyName) $this.companyName = '无';
                                }

                                if ($this.applyStatus === $this.mac.enum.customer.status.pending || $this.applyStatus === $this.mac.enum.customer.status.approved) {
                                    para.nStep = 'forceUpdateData';
                                } else {
                                    para.nStep = 'noExistInfo';
                                }

                                if (++dbFlag === 2) {
                                    $this.startModule(openId, successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'noExistInfo':
                            $this.showSubModule('noExistInfoRef', true, function () {
                                let data = {message: '您还未报名，请先报名', type: 'warning'};
                                $this.sm.noExistInfoRef.startModule(data, function () {
                                    para.nStep = 'end';
                                    if (++dbFlag === 2) {
                                        $this.startModule(openId, successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack);
                            }, para.errorCallBack);
                            break;
                        case 'forceUpdateData':
                            $this.forceUpdateData(function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    $this.startModule(openId, successCallBack, errorCallBack)
                                }
                            });
                            break;
                        case 'showSubModule':
                            $this.showSubModule([ref.sm1, ref.sm2, ref.sm3, ref.sm4, ref.sm5, ref.sm7, ref.sm8, ref.sm9, ref.sm11], true, function () {
                                para.nStep = 'startModule1';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(openId, successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule1':
                            $this.sm[ref.sm1].startModule(function () {
                                para.nStep = 'startModule2';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(openId, successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule2':
                            $this.sm[ref.sm2].startModule(function () {
                                para.nStep = 'startModule3';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(openId, successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule3':
                            $this.sm[ref.sm3].startModule(function () {
                                para.nStep = 'startModule4';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(openId, successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule4':
                            $this.sm[ref.sm4].startModule(function () {
                                para.nStep = 'startModule5';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(openId, successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule5':
                            $this.sm[ref.sm5].startModule(function () {
                                para.nStep = 'startModule7';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(openId, successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;

                        case 'startModule7':
                            $this.sm[ref.sm7].startModule(function () {
                                para.nStep = 'startModule8';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(openId, successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule8':
                            $this.sm[ref.sm8].startModule(function () {
                                para.nStep = 'startModule9';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(openId, successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule9':
                            $this.sm[ref.sm9].startModule(function () {
                                para.nStep = 'startModule11';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(openId, successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule11':
                            $this.sm[ref.sm11].startModule(function () {
                                para.nStep = 'end';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(openId, successCallBack, errorCallBack)
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

            RegisterCancel: function () {
                var $this = this;

                this.ep.cancel(this.openId, function () {
                    $this.$notify({type: 'success', message: '取消报名成功！'});
                    $this.disabled = true;
                    $this.forceUpdateData(function () {
                        $this.sm.confirmBtn.startModule(function () {
                        }, function (error) {
                            console.error(error);
                        });
                    });
                }, function (error) {
                    console.error(error);
                });
            },

            confirmBtn_buttonClickEvent: function () {
                this.RegisterCancel();
            },
        },
    };
</script>
<style lang="less" scoped>
    @signUp-signUpWindow-medium-width: 100%;
    @signUp-nameTxtDiv-medium-width: 10%;
    @signUp-nameTxtDiv-medium-padding: 0 0 10px 0;
    @signUp-nameTxtDiv-medium-vertical-position: center;
    @signUp-symbolTxtDiv-medium-width: 5%;
    @signUp-symbolTxtDiv-medium-padding: 0 0 10px 0;
    @signUp-symbolTxtDiv-medium-vertical-position: center;
    @signUp-userNameDiv-medium-width: 100%;
    @signUp-userNameDiv-medium-padding: 0 0 26px 6px;
    @signUp-userNameDiv-medium-vertical-position: center;
    @signUp-phoneTxtDiv-medium-width: 10%;
    @signUp-phoneTxtDiv-medium-padding: 0 0 10px 0;
    @signUp-phoneTxtDiv-medium-vertical-position: center;
    @signUp-symbolTxt2Div-medium-width: 5%;
    @signUp-symbolTxt2Div-medium-padding: 0 0 10px 0;
    @signUp-symbolTxt2Div-medium-vertical-position: center;
    @signUp-userPhoneDiv-medium-width: 100%;
    @signUp-userPhoneDiv-medium-padding: 0 0 26px 6px;
    @signUp-userPhoneDiv-medium-vertical-position: center;
    @signUp-companyTxtDiv-medium-width: 100%;
    @signUp-companyTxtDiv-medium-padding: 0 0 10px 0;
    @signUp-companyTxtDiv-medium-vertical-position: center;
    @signUp-userCompanyDiv-medium-width: 100%;
    @signUp-userCompanyDiv-medium-padding: 0 0 26px 6px;
    @signUp-userCompanyDiv-medium-vertical-position: center;
    @signUp-categoryTxtDiv-medium-width: 20%;
    @signUp-categoryTxtDiv-medium-padding: 0 0 10px 0;
    @signUp-categoryTxtDiv-medium-vertical-position: center;
    @signUp-userCategoryDiv-medium-width: 100%;
    @signUp-userCategoryDiv-medium-padding: 0 0 26px 6px;
    @signUp-userCategoryDiv-medium-vertical-position: center;
    @signUp-userCategoryDiv-medium-margin: 0 0 100px 0;
    @signUp-confirmBtnDiv-medium-width: 100%;
    @signUp-confirmBtnDiv-medium-vertical-position: center;

    @signUp-noExistInfo-medium-width: 100%;
    @signUp-noExistInfo-medium-padding: 0 0 10px 0;
    @signUp-noExistInfo-medium-vertical-position: center;

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
        padding: 20px;
        box-sizing: border-box;
    }

    .signUp_col_nameTxtDiv_size_medium {
        padding: @signUp-nameTxtDiv-medium-padding;
        justify-content: @signUp-nameTxtDiv-medium-vertical-position;
    }

    .signUp_col_symbolTxtDiv_size_medium {
        width: @signUp-symbolTxtDiv-medium-width;
        padding: @signUp-symbolTxtDiv-medium-padding;
        justify-content: @signUp-symbolTxtDiv-medium-vertical-position;
    }

    .signUp_col_userNameDiv_size_medium {
        width: @signUp-userNameDiv-medium-width;
        padding: @signUp-userNameDiv-medium-padding;
        justify-content: @signUp-userNameDiv-medium-vertical-position;
    }

    .signUp_col_phoneTxtDiv_size_medium {
        padding: @signUp-phoneTxtDiv-medium-padding;
        justify-content: @signUp-phoneTxtDiv-medium-vertical-position;
    }

    .signUp_col_symbolTxt2Div_size_medium {
        width: @signUp-symbolTxt2Div-medium-width;
        padding: @signUp-symbolTxt2Div-medium-padding;
        justify-content: @signUp-symbolTxt2Div-medium-vertical-position;
    }

    .signUp_col_userPhoneDiv_size_medium {
        width: @signUp-userPhoneDiv-medium-width;
        padding: @signUp-userPhoneDiv-medium-padding;
        justify-content: @signUp-userPhoneDiv-medium-vertical-position;
    }

    .signUp_col_companyTxtDiv_size_medium {
        width: @signUp-companyTxtDiv-medium-width;
        padding: @signUp-companyTxtDiv-medium-padding;
        justify-content: @signUp-companyTxtDiv-medium-vertical-position;
    }

    .signUp_col_userCompanyDiv_size_medium {
        width: @signUp-userCompanyDiv-medium-width;
        padding: @signUp-userCompanyDiv-medium-padding;
        justify-content: @signUp-userCompanyDiv-medium-vertical-position;
    }

    .signUp_col_categoryTxtDiv_size_medium {
        width: @signUp-categoryTxtDiv-medium-width;
        padding: @signUp-categoryTxtDiv-medium-padding;
        justify-content: @signUp-categoryTxtDiv-medium-vertical-position;
    }

    .signUp_col_userCategoryDiv_size_medium {
        width: @signUp-userCategoryDiv-medium-width;
        padding: @signUp-userCategoryDiv-medium-padding;
        justify-content: @signUp-userCategoryDiv-medium-vertical-position;
    }

    .signUp_col_confirmBtnDiv_size_medium {
        width: @signUp-confirmBtnDiv-medium-width;
        justify-content: @signUp-confirmBtnDiv-medium-vertical-position;
        position: fixed;
        left: 0;
        bottom: 0;
    }

    .signUp_col_noExistInfo_size_medium {
        width: @signUp-noExistInfo-medium-width;
        /*height: @signUpPage-noExistInfo-medium-height;*/
        justify-content: @signUp-noExistInfo-medium-vertical-position;
    }
</style>