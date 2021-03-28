<template>
    <div v-show="pvt_win.isShow.notSignUpWindow"
         :class="{notSignUp_container:true,notSignUp_col:true,notSignUp_col_notSignUpWindow:true,notSignUp_col_notSignUpWindow_size_large:attr.size==='large',notSignUp_col_notSignUpWindow_size_medium:attr.size==='medium',notSignUp_col_notSignUpWindow_size_small:attr.size==='small',notSignUp_col_notSignUpWindow_size_min:attr.size==='min',notSignUp_col_notSignUpWindow_checked:pvt_win.isChecked.notSignUpWindow,notSignUp_col_notSignUpWindow_disable:attr.disabled}"
         :style="pvt_win.style.notSignUpWindow">

        <div class="notSignUp_row notSignUp_row_row0">
            <div v-show="pvt_win.isShow.nameTxtDiv"
                 :class="{notSignUp_col:true,notSignUp_col_nameTxtDiv:true,notSignUp_col_nameTxtDiv_size_large:attr.size==='large',notSignUp_col_nameTxtDiv_size_medium:attr.size==='medium',notSignUp_col_nameTxtDiv_size_small:attr.size==='small',notSignUp_col_nameTxtDiv_size_min:attr.size==='min',notSignUp_col_nameTxtDiv_checked:pvt_win.isChecked.nameTxtDiv,notSignUp_col_nameTxtDiv_disable:attr.disabled}"
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
                 :class="{notSignUp_col:true,notSignUp_col_symbolTxtDiv:true,notSignUp_col_symbolTxtDiv_size_large:attr.size==='large',notSignUp_col_symbolTxtDiv_size_medium:attr.size==='medium',notSignUp_col_symbolTxtDiv_size_small:attr.size==='small',notSignUp_col_symbolTxtDiv_size_min:attr.size==='min',notSignUp_col_symbolTxtDiv_checked:pvt_win.isChecked.symbolTxtDiv,notSignUp_col_symbolTxtDiv_disable:attr.disabled}"
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
        <div class="notSignUp_row notSignUp_row_row1">
            <div v-show="pvt_win.isShow.userNameDiv"
                 :class="{notSignUp_col:true,notSignUp_col_userNameDiv:true,notSignUp_col_userNameDiv_size_large:attr.size==='large',notSignUp_col_userNameDiv_size_medium:attr.size==='medium',notSignUp_col_userNameDiv_size_small:attr.size==='small',notSignUp_col_userNameDiv_size_min:attr.size==='min',notSignUp_col_userNameDiv_checked:pvt_win.isChecked.userNameDiv,notSignUp_col_userNameDiv_disable:attr.disabled}"
                 :style="pvt_win.style.userNameDiv">
                <lm2b-link-text
                        ref="userName"
                        refId="userName"
                        v-show="pvt_isShow.userNameDiv === 'userName'"
                        :paraVarPair="pvt_userNameDiv.userName.paraVarPair"
                        :para="pvt_userNameDiv.userName.para"
                        :attr="pvt_userNameDiv.userName.attr">
                </lm2b-link-text>
                <lm2b-input-text
                        ref="userNameInput"
                        refId="userNameInput"
                        v-show="pvt_isShow.userNameDiv === 'userNameInput'"
                        :paraVarPair="pvt_userNameDiv.userNameInput.paraVarPair"
                        :para="pvt_userNameDiv.userNameInput.para"
                        :attr="pvt_userNameDiv.userNameInput.attr">
                </lm2b-input-text>
            </div>
        </div>
        <div class="notSignUp_row notSignUp_row_row2">
            <div v-show="pvt_win.isShow.phoneTxtDiv"
                 :class="{notSignUp_col:true,notSignUp_col_phoneTxtDiv:true,notSignUp_col_phoneTxtDiv_size_large:attr.size==='large',notSignUp_col_phoneTxtDiv_size_medium:attr.size==='medium',notSignUp_col_phoneTxtDiv_size_small:attr.size==='small',notSignUp_col_phoneTxtDiv_size_min:attr.size==='min',notSignUp_col_phoneTxtDiv_checked:pvt_win.isChecked.phoneTxtDiv,notSignUp_col_phoneTxtDiv_disable:attr.disabled}"
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
                 :class="{notSignUp_col:true,notSignUp_col_symbolTxt2Div:true,notSignUp_col_symbolTxt2Div_size_large:attr.size==='large',notSignUp_col_symbolTxt2Div_size_medium:attr.size==='medium',notSignUp_col_symbolTxt2Div_size_small:attr.size==='small',notSignUp_col_symbolTxt2Div_size_min:attr.size==='min',notSignUp_col_symbolTxt2Div_checked:pvt_win.isChecked.symbolTxt2Div,notSignUp_col_symbolTxt2Div_disable:attr.disabled}"
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
        <div class="notSignUp_row notSignUp_row_row3">
            <div v-show="pvt_win.isShow.userPhoneDiv"
                 :class="{notSignUp_col:true,notSignUp_col_userPhoneDiv:true,notSignUp_col_userPhoneDiv_size_large:attr.size==='large',notSignUp_col_userPhoneDiv_size_medium:attr.size==='medium',notSignUp_col_userPhoneDiv_size_small:attr.size==='small',notSignUp_col_userPhoneDiv_size_min:attr.size==='min',notSignUp_col_userPhoneDiv_checked:pvt_win.isChecked.userPhoneDiv,notSignUp_col_userPhoneDiv_disable:attr.disabled}"
                 :style="pvt_win.style.userPhoneDiv">

                <lm2b-input-phone
                        ref="userPhone"
                        refId="userPhone"
                        v-show="pvt_isShow.userPhoneDiv === 'userPhone'"
                        :paraVarPair="pvt_userPhoneDiv.userPhone.paraVarPair"
                        :para="pvt_userPhoneDiv.userPhone.para"
                        :attr="pvt_userPhoneDiv.userPhone.attr">
                </lm2b-input-phone>
            </div>
        </div>
        <div class="notSignUp_row notSignUp_row_row9">
            <div v-show="pvt_win.isShow.followerTxtDiv"
                 :class="{notSignUp_col:true,notSignUp_col_followerTxtDiv:true,notSignUp_col_followerTxtDiv_size_large:attr.size==='large',notSignUp_col_followerTxtDiv_size_medium:attr.size==='medium',notSignUp_col_followerTxtDiv_size_small:attr.size==='small',notSignUp_col_followerTxtDiv_size_min:attr.size==='min',notSignUp_col_followerTxtDiv_checked:pvt_win.isChecked.followerTxtDiv,notSignUp_col_followerTxtDiv_disable:attr.disabled}"
                 :style="pvt_win.style.followerTxtDiv">

                <lm2b-link-text
                        ref="followerTxt"
                        refId="followerTxt"
                        v-show="pvt_isShow.followerTxtDiv === 'followerTxt'"
                        :paraVarPair="pvt_followerTxtDiv.followerTxt.paraVarPair"
                        :para="pvt_followerTxtDiv.followerTxt.para"
                        :attr="pvt_followerTxtDiv.followerTxt.attr">
                </lm2b-link-text>
            </div>
        </div>
        <div class="notSignUp_row notSignUp_row_row10">
            <div v-show="pvt_win.isShow.followerDiv"
                 :class="{notSignUp_col:true,notSignUp_col_followerDiv:true,notSignUp_col_followerDiv_size_large:attr.size==='large',notSignUp_col_followerDiv_size_medium:attr.size==='medium',notSignUp_col_followerDiv_size_small:attr.size==='small',notSignUp_col_followerDiv_size_min:attr.size==='min',notSignUp_col_followerDiv_checked:pvt_win.isChecked.followerDiv,notSignUp_col_followerDiv_disable:attr.disabled}"
                 :style="pvt_win.style.followerDiv">

                <lm2b-input-text
                        ref="follower"
                        refId="follower"
                        v-show="pvt_isShow.followerDiv === 'follower'"
                        :paraVarPair="pvt_followerDiv.follower.paraVarPair"
                        :para="pvt_followerDiv.follower.para"
                        :attr="pvt_followerDiv.follower.attr">
                </lm2b-input-text>
            </div>
        </div>
        <div class="notSignUp_row notSignUp_row_row4">
            <div v-show="pvt_win.isShow.companyTxtDiv"
                 :class="{notSignUp_col:true,notSignUp_col_companyTxtDiv:true,notSignUp_col_companyTxtDiv_size_large:attr.size==='large',notSignUp_col_companyTxtDiv_size_medium:attr.size==='medium',notSignUp_col_companyTxtDiv_size_small:attr.size==='small',notSignUp_col_companyTxtDiv_size_min:attr.size==='min',notSignUp_col_companyTxtDiv_checked:pvt_win.isChecked.companyTxtDiv,notSignUp_col_companyTxtDiv_disable:attr.disabled}"
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
        <div class="notSignUp_row notSignUp_row_row5">
            <div v-show="pvt_win.isShow.userCompanyDiv"
                 :class="{notSignUp_col:true,notSignUp_col_userCompanyDiv:true,notSignUp_col_userCompanyDiv_size_large:attr.size==='large',notSignUp_col_userCompanyDiv_size_medium:attr.size==='medium',notSignUp_col_userCompanyDiv_size_small:attr.size==='small',notSignUp_col_userCompanyDiv_size_min:attr.size==='min',notSignUp_col_userCompanyDiv_checked:pvt_win.isChecked.userCompanyDiv,notSignUp_col_userCompanyDiv_disable:attr.disabled}"
                 :style="pvt_win.style.userCompanyDiv">

                <lm2b-input-text
                        ref="userCompany"
                        refId="userCompany"
                        v-show="pvt_isShow.userCompanyDiv === 'userCompany'"
                        :paraVarPair="pvt_userCompanyDiv.userCompany.paraVarPair"
                        :para="pvt_userCompanyDiv.userCompany.para"
                        :attr="pvt_userCompanyDiv.userCompany.attr">
                </lm2b-input-text>
            </div>
        </div>
        <div class="notSignUp_row notSignUp_row_row6">
            <div v-show="pvt_win.isShow.categoryTxtDiv"
                 :class="{notSignUp_col:true,notSignUp_col_categoryTxtDiv:true,notSignUp_col_categoryTxtDiv_size_large:attr.size==='large',notSignUp_col_categoryTxtDiv_size_medium:attr.size==='medium',notSignUp_col_categoryTxtDiv_size_small:attr.size==='small',notSignUp_col_categoryTxtDiv_size_min:attr.size==='min',notSignUp_col_categoryTxtDiv_checked:pvt_win.isChecked.categoryTxtDiv,notSignUp_col_categoryTxtDiv_disable:attr.disabled}"
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
        <div class="notSignUp_row notSignUp_row_row7">
            <div v-show="pvt_win.isShow.userCategoryDiv"
                 :class="{notSignUp_col:true,notSignUp_col_userCategoryDiv:true,notSignUp_col_userCategoryDiv_size_large:attr.size==='large',notSignUp_col_userCategoryDiv_size_medium:attr.size==='medium',notSignUp_col_userCategoryDiv_size_small:attr.size==='small',notSignUp_col_userCategoryDiv_size_min:attr.size==='min',notSignUp_col_userCategoryDiv_checked:pvt_win.isChecked.userCategoryDiv,notSignUp_col_userCategoryDiv_disable:attr.disabled}"
                 :style="pvt_win.style.userCategoryDiv">

                <lm2b-link-text
                        ref="userCategory"
                        refId="userCategory"
                        v-show="pvt_isShow.userCategoryDiv === 'userCategory'"
                        :paraVarPair="pvt_userCategoryDiv.userCategory.paraVarPair"
                        :para="pvt_userCategoryDiv.userCategory.para"
                        :attr="pvt_userCategoryDiv.userCategory.attr">
                </lm2b-link-text>
                <lm2b-action-sheet
                        ref="chooseCategory"
                        refId="chooseCategory"
                        v-show="pvt_isShow.userCategoryDiv === 'chooseCategory'"
                        :paraVarPair="pvt_userCategoryDiv.chooseCategory.paraVarPair"
                        :para="pvt_userCategoryDiv.chooseCategory.para"
                        :attr="pvt_userCategoryDiv.chooseCategory.attr">
                </lm2b-action-sheet>
            </div>
        </div>
        <div class="notSignUp_row notSignUp_row_row8">
            <div v-show="pvt_win.isShow.submitBtnDiv"
                 :class="{notSignUp_col:true,notSignUp_col_submitBtnDiv:true,notSignUp_col_submitBtnDiv_size_large:attr.size==='large',notSignUp_col_submitBtnDiv_size_medium:attr.size==='medium',notSignUp_col_submitBtnDiv_size_small:attr.size==='small',notSignUp_col_submitBtnDiv_size_min:attr.size==='min',notSignUp_col_submitBtnDiv_checked:pvt_win.isChecked.submitBtnDiv,notSignUp_col_submitBtnDiv_disable:attr.disabled}"
                 :style="pvt_win.style.submitBtnDiv">

                <lm2b-button
                        ref="submitBtn"
                        refId="submitBtn"
                        v-show="pvt_isShow.submitBtnDiv === 'submitBtn'"
                        :paraVarPair="pvt_submitBtnDiv.submitBtn.paraVarPair"
                        :para="pvt_submitBtnDiv.submitBtn.para"
                        :attr="pvt_submitBtnDiv.submitBtn.attr">
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
                    vessel: ['nameTxtDiv', 'symbolTxtDiv', 'phoneTxtDiv', 'companyTxtDiv', 'categoryTxtDiv', 'symbolTxt2Div', 'followerTxtDiv', 'userNameDiv', 'userNameDiv', 'userPhoneDiv', 'followerDiv', 'userCompanyDiv', 'userCategoryDiv', 'userCategoryDiv', 'submitBtnDiv'],
                    subModule: ['userCategoryDiv', 'symbolTxt', 'phoneTxt', 'companyTxt', 'categoryTxt', 'symbolTxt2', 'followerTxt', 'userName','userNameInput', 'userPhone', 'follower', 'userCompany', 'userCategory', 'chooseCategory', 'submitBtn'],
                },
                pvt_isShow: {
                    nameTxtDiv: null,
                    symbolTxtDiv: null,
                    phoneTxtDiv: null,
                    companyTxtDiv: null,
                    categoryTxtDiv: null,
                    symbolTxt2Div: null,
                    followerTxtDiv: null,
                    userNameDiv: null,
                    userPhoneDiv: null,
                    followerDiv: null,
                    userCompanyDiv: null,
                    userCategoryDiv: null,
                    submitBtnDiv: null,
                },
                pvt_win: {
                    isShow: {
                        notSignUpWindow: true,
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
                        submitBtnDiv: true,
                        followerTxtDiv: true,
                        followerDiv: true,
                    },
                    isChecked: {
                        notSignUpWindow: false,
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
                        submitBtnDiv: false,
                        followerTxtDiv: false,
                        followerDiv: false,
                    },
                    style: {
                        notSignUpWindow: null,
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
                        submitBtnDiv: null,
                        followerTxtDiv: null,
                        followerDiv: null,
                    },
                },
                pvt_eventPortInput: [],
                nameValue: null,
                phoneNum: null,
                companyName: null,
                categoryValue: '选择类别',
                categoryType: null,
                followerNum: null,
                userId: null,
                signInTime: null,
                isClick:false,
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
            pvt_followerTxtDiv: function () {
                return {
                    followerTxt: {
                        paraVarPair: {},
                        para: {
                            textData: '随行人数（选填）',
                        },
                        attr: {
                            label: 'p',
                            color: '#666666',
                            fontSize: '16px',
                        },
                    },
                };
            },
            pvt_userNameDiv: function () {
                return {
                    userNameInput: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            placeholder: '请输入姓名',
                            isPlaceholder: false,
                            size: 'large',
                        },
                    },
                    userName: {
                        paraVarPair: {
                            textData: 'nameValue',
                        },
                        para: {
                            textData: this.nameValue,
                        },
                        attr: {
                            isClick: true,
                            label: 'p',
                            color: '#333333',
                            fontSize: '18px',
                        },
                    },
                };
            },
            pvt_userPhoneDiv: function () {
                return {
                    userPhone: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            placeholder: '请输入手机号',
                            isPlaceholder: false,
                            size: 'large',
                        },
                    },
                };
            },
            pvt_followerDiv: function () {
                return {
                    follower: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            placeholder: '请输入随行人数',
                            isPlaceholder: false,
                            size: 'large',
                        },
                    },
                };
            },
            pvt_userCompanyDiv: function () {
                return {
                    userCompany: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            placeholder: '请输入公司名称',
                            isPlaceholder: false,
                            size: 'large',
                        },
                    },
                };
            },
            pvt_userCategoryDiv: function () {
                return {
                    userCategory: {
                        paraVarPair: {
                            textData: 'category:Value',
                        },
                        para: {
                            textData: this.categoryValue,
                        },
                        attr: {
                            isClick: true,
                            label: 'p',
                            color: '#333333',
                            fontSize: '16px',
                        },
                    },
                    chooseCategory: {
                        paraVarPair: {},
                        para: {
                            actionList: {
                                title: "选择类别",
                                content: [{
                                    val: "投资机构"
                                }, {
                                    val: "开发者"
                                }, {
                                    val: "朋友"
                                }, {
                                    val: "股东"
                                }, {
                                    val: "其他"
                                },
                                ]
                            },
                        },
                        attr: {
                            overlay: true,
                            closeOnClickOverlay: false,
                            closeOnClickAction: true,
                            lockScroll: true,
                        },
                    },
                };
            },
            pvt_submitBtnDiv: function () {
                return {
                    submitBtn: {
                        paraVarPair: {},
                        para: {
                            name: ['提交', ''],
                        },
                        attr: {
                            type: 'primary',
                            height: '60px',
                            width: '100%',
                            disabled: this.isClick,
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
                    sm3: 'phoneTxt',
                    sm4: 'companyTxt',
                    sm5: 'categoryTxt',
                    sm6: 'symbolTxt2',
                    sm7: 'followerTxt',
                    sm8: 'userName',
                    sm9: 'userPhone',
                    sm10: 'follower',
                    sm11: 'userCompany',
                    sm12: 'userCategory',
                    sm13: 'submitBtn'
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
                            this.sys.recordQuery_(tableName, arrParentRecord, condition, data,
                                function (result) {
                                    console.log(data);
                                    $this.userId = data.id[0];
                                    $this.nameValue = data.name[0];
                                }, para.errorCallBack);
                            para.nStep = 'showSubModule';
                            ++dbFlag;
                            break;
                        case 'showSubModule':
                            $this.showSubModule([ref.sm1, ref.sm2, ref.sm3, ref.sm4, ref.sm5, ref.sm6, ref.sm7, ref.sm8, ref.sm9, ref.sm10, ref.sm11, ref.sm12, ref.sm13], true, function () {
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
                                // para.nStep = 'end';
                                para.nStep ="setInputType";
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                            case "setInputType":
                                $("[placeholder=\"请输入随行人数\"]").attr("type", "number");
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
            compShow: function (v1) {
                var $this = this;
                let ref = {sm1: v1};
                $this.showSubModule([v1], true, function () {
                    $this.sm[ref.sm1].startModule(function () {
                    }, function () {
                    });
                }, function () {
                });
            },
            nameInput: function (value) {
                if (value) {
                    this.nameValue = value;
                } else {
                    this.nameValue = null;
                }
                ;
                this.judgeIsClick();
            },
            phoneInput: function (value) {
                if (value) {
                    this.phoneNum = Number(value.slice(4));
                } else {
                    this.phoneNum = null;
                };
            },
            classSelect: function (value) {
                if (value) {
                    this.followerNum =  Number(value);
                } else {
                    this.followerNum = null;
                }
            },
            companyInput: function (value) {
                if (value) {
                    this.companyName = value;
                } else {
                    this.companyName = null;
                }
            },
            getdatatime() {
                var $this = this;
                let hh = new Date().getHours();
                let ms = new Date().getSeconds() < 10 ? '0' + new Date().getSeconds() : new Date().getSeconds();
                let mf = new Date().getMinutes() < 10 ? '0' + new Date().getMinutes() : new Date().getMinutes();
                $this.signInTime = hh + ':' + mf + ':' + ms;
                ;
                console.log('时间是' + $this.signInTime);
            },
            infoCommit: function () {
                this.getdatatime();
                var $this = this;
                var tableName = "customer";
                var data = {};
                data.id = [$this.userId]; // 必须定义
                data.time = [$this.signInTime];
                data.name = [$this.nameValue];
                data.mobile = [this.phoneNum];
                data.company = [this.companyName];
                data.type = [this.categoryType];
                data.companion = [this.followerNum];
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
                      //window.location.href = 'http://www.zeropaas.com'
                }, function () {
                    $this.$notify({type: 'success', message: '签到失败！请重新扫码'});
                });
            },
            userName_textClickEvent: function () {
                this.compShow('userNameInput');
            },
            userCategory_textClickEvent: function () {
                this.compShow('chooseCategory');
            },
            chooseCategory_selectEvent: function (index) {
                this.categoryType = index;
                switch (index) {
                    case 0:
                        this.categoryValue = '投资机构';
                        break;
                    case 1:
                        this.categoryValue = '开发者';
                        break;
                    case 2:
                        this.categoryValue = '朋友';
                        break;
                    case 3:
                        this.categoryValue = '股东';
                        break;
                    case 4:
                        this.categoryValue = '其他';
                        break;
                }
                ;
                this.categoryValu = index;
                this.compShow('userCategory');
            },
            chooseCategory_cancelEvent: function (index) {
                this.compShow('userCategory');
            },
            userNameInput_dataModifyEvent: function (value) {
                this.nameInput(value);
            },
            userPhone_dataModifyEvent: function (value) {
                this.phoneInput(value);
            },
            follower_dataModifyEvent: function (value) {
                this.classSelect(value);
            },
            userCompany_dataModifyEvent: function (value) {
                this.companyInput(value);
            },
            submitBtn_buttonClickEvent: function () {
                var $this = this;
                $this.infoCommit();

            },
            judgeIsClick: function () {
                if (this.nameValue) {
                    this.isClick = false;
                } else {
                    this.isClick = true;
                }
            },
        },
    };
</script>
<style lang="less" scoped>
    @import "../../../assets/zhl-style.less";

    .notSignUp_container {
        width: 100%;
        height: 100%;
    }

    .notSignUp_mask {
        display: flex;
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, .4);
    }

    .notSignUp_dialog {
        position: absolute;
        left: 0;
        top: 0;
    }

    .notSignUp_overlay {
        position: absolute;
        left: 0;
        top: 0;
    }

    .notSignUp_row {
        display: flex;
    }

    .notSignUp_col {
        position: relative;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
    }

    .notSignUp_col_notSignUpWindow_size_medium {
        width: @notSignUp-notSignUpWindow-medium-width;
    }

    .notSignUp_col_nameTxtDiv_size_medium {
        height: @notSignUp-nameTxtDiv-medium-height;
        justify-content: @notSignUp-nameTxtDiv-medium-vertical-position;
    }

    .notSignUp_col_symbolTxtDiv_size_medium {
        width: @notSignUp-symbolTxtDiv-medium-width;
        height: @notSignUp-symbolTxtDiv-medium-height;
        justify-content: @notSignUp-symbolTxtDiv-medium-vertical-position;
    }

    .notSignUp_col_userNameDiv_size_medium {
        width: @notSignUp-userNameDiv-medium-width;
        height: @notSignUp-userNameDiv-medium-height;
        justify-content: @notSignUp-userNameDiv-medium-vertical-position;
    }

    .notSignUp_col_phoneTxtDiv_size_medium {
        height: @notSignUp-phoneTxtDiv-medium-height;
        justify-content: @notSignUp-phoneTxtDiv-medium-vertical-position;
    }

    .notSignUp_col_symbolTxt2Div_size_medium {
        width: @notSignUp-symbolTxt2Div-medium-width;
        height: @notSignUp-symbolTxt2Div-medium-height;
        justify-content: @notSignUp-symbolTxt2Div-medium-vertical-position;
    }

    .notSignUp_col_userPhoneDiv_size_medium {
        width: @notSignUp-userPhoneDiv-medium-width;
        height: @notSignUp-userPhoneDiv-medium-height;
        justify-content: @notSignUp-userPhoneDiv-medium-vertical-position;
    }

    .notSignUp_col_companyTxtDiv_size_medium {
        width: @notSignUp-companyTxtDiv-medium-width;
        height: @notSignUp-companyTxtDiv-medium-height;
        justify-content: @notSignUp-companyTxtDiv-medium-vertical-position;
    }

    .notSignUp_col_userCompanyDiv_size_medium {
        width: @notSignUp-userCompanyDiv-medium-width;
        height: @notSignUp-userCompanyDiv-medium-height;
        justify-content: @notSignUp-userCompanyDiv-medium-vertical-position;
    }

    .notSignUp_col_categoryTxtDiv_size_medium {
        width: @notSignUp-categoryTxtDiv-medium-width;
        height: @notSignUp-categoryTxtDiv-medium-height;
        justify-content: @notSignUp-categoryTxtDiv-medium-vertical-position;
    }

    .notSignUp_col_userCategoryDiv_size_medium {
        width: @notSignUp-userCategoryDiv-medium-width;
        height: @notSignUp-userCategoryDiv-medium-height;
        justify-content: @notSignUp-userCategoryDiv-medium-vertical-position;
    }

    .notSignUp_col_submitBtnDiv_size_medium {
        width: @notSignUp-submitBtnDiv-medium-width;
        height: @notSignUp-submitBtnDiv-medium-height;
        justify-content: @notSignUp-submitBtnDiv-medium-vertical-position;
        position: fixed;
        left: 0;
        bottom: 0;
    }

    .notSignUp_col_followerTxtDiv_size_medium {
        width: @notSignUp-followerTxtDiv-medium-width;
        //   height: @notSignUp-followerTxtDiv-medium-height;
        justify-content: @notSignUp-followerTxtDiv-medium-vertical-position;
    }

    .notSignUp_col_followerDiv_size_medium {
        width: @notSignUp-followerDiv-medium-width;
        height: @notSignUp-followerDiv-medium-height;
        justify-content: @notSignUp-followerDiv-medium-vertical-position;
    }


</style>
