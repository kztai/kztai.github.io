<template>
    <div v-show="pvt_win.isShow.backMan_main_raffleS_prizeSetRow"
         :class="{backMan_main_raffleS_prizeSetRow_container:true,backMan_main_raffleS_prizeSetRow_col:true,backMan_main_raffleS_prizeSetRow_col_backMan_main_raffleS_prizeSetRow:true,backMan_main_raffleS_prizeSetRow_col_backMan_main_raffleS_prizeSetRow_size_large:attr.size==='large',backMan_main_raffleS_prizeSetRow_col_backMan_main_raffleS_prizeSetRow_size_medium:attr.size==='medium',backMan_main_raffleS_prizeSetRow_col_backMan_main_raffleS_prizeSetRow_size_small:attr.size==='small',backMan_main_raffleS_prizeSetRow_col_backMan_main_raffleS_prizeSetRow_size_min:attr.size==='min',backMan_main_raffleS_prizeSetRow_col_backMan_main_raffleS_prizeSetRow_checked:pvt_win.isChecked.backMan_main_raffleS_prizeSetRow,backMan_main_raffleS_prizeSetRow_col_backMan_main_raffleS_prizeSetRow_disable:attr.disabled}"
         :style="pvt_win.style.backMan_main_raffleS_prizeSetRow">

        <div class="backMan_main_raffleS_prizeSetRow_row backMan_main_raffleS_prizeSetRow_row_row0">
            <div v-show="pvt_win.isShow.r1c1"
                 :class="{backMan_main_raffleS_prizeSetRow_col:true,backMan_main_raffleS_prizeSetRow_col_r1c1:true,backMan_main_raffleS_prizeSetRow_col_r1c1_size_large:attr.size==='large',backMan_main_raffleS_prizeSetRow_col_r1c1_size_medium:attr.size==='medium',backMan_main_raffleS_prizeSetRow_col_r1c1_size_small:attr.size==='small',backMan_main_raffleS_prizeSetRow_col_r1c1_size_min:attr.size==='min',backMan_main_raffleS_prizeSetRow_col_r1c1_checked:pvt_win.isChecked.r1c1,backMan_main_raffleS_prizeSetRow_col_r1c1_disable:attr.disabled}"
                 :style="pvt_win.style.r1c1">

                <lm1a-link-text
                        ref="classText"
                        refId="classText"
                        v-show="pvt_isShow.r1c1 === 'classText'"
                        :paraVarPair="pvt_r1c1.classText.paraVarPair"
                        :para="pvt_r1c1.classText.para"
                        :attr="pvt_r1c1.classText.attr">
                </lm1a-link-text>
                <lm1a-select
                        ref="classSelect"
                        refId="classSelect"
                        v-show="pvt_isShow.r1c1 === 'classSelect'"
                        :paraVarPair="pvt_r1c1.classSelect.paraVarPair"
                        :para="pvt_r1c1.classSelect.para"
                        :attr="pvt_r1c1.classSelect.attr">
                </lm1a-select>
            </div>
            <div v-show="pvt_win.isShow.r1c2"
                 :class="{backMan_main_raffleS_prizeSetRow_col:true,backMan_main_raffleS_prizeSetRow_col_r1c2:true,backMan_main_raffleS_prizeSetRow_col_r1c2_size_large:attr.size==='large',backMan_main_raffleS_prizeSetRow_col_r1c2_size_medium:attr.size==='medium',backMan_main_raffleS_prizeSetRow_col_r1c2_size_small:attr.size==='small',backMan_main_raffleS_prizeSetRow_col_r1c2_size_min:attr.size==='min',backMan_main_raffleS_prizeSetRow_col_r1c2_checked:pvt_win.isChecked.r1c2,backMan_main_raffleS_prizeSetRow_col_r1c2_disable:attr.disabled}"
                 :style="pvt_win.style.r1c2">

                <lm1a-link-text
                        ref="nameText"
                        refId="nameText"
                        v-show="pvt_isShow.r1c2 === 'nameText'"
                        :paraVarPair="pvt_r1c2.nameText.paraVarPair"
                        :para="pvt_r1c2.nameText.para"
                        :attr="pvt_r1c2.nameText.attr">
                </lm1a-link-text>
                <lm1a-input-text
                        ref="nameInput"
                        refId="nameInput"
                        v-show="pvt_isShow.r1c2 === 'nameInput'"
                        :paraVarPair="pvt_r1c2.nameInput.paraVarPair"
                        :para="pvt_r1c2.nameInput.para"
                        :attr="pvt_r1c2.nameInput.attr">
                </lm1a-input-text>
            </div>
            <div v-show="pvt_win.isShow.r1c3"
                 :class="{backMan_main_raffleS_prizeSetRow_col:true,backMan_main_raffleS_prizeSetRow_col_r1c3:true,backMan_main_raffleS_prizeSetRow_col_r1c3_size_large:attr.size==='large',backMan_main_raffleS_prizeSetRow_col_r1c3_size_medium:attr.size==='medium',backMan_main_raffleS_prizeSetRow_col_r1c3_size_small:attr.size==='small',backMan_main_raffleS_prizeSetRow_col_r1c3_size_min:attr.size==='min',backMan_main_raffleS_prizeSetRow_col_r1c3_checked:pvt_win.isChecked.r1c3,backMan_main_raffleS_prizeSetRow_col_r1c3_disable:attr.disabled}"
                 :style="pvt_win.style.r1c3">

                <lm1a-link-text
                        ref="numberText"
                        refId="numberText"
                        v-show="pvt_isShow.r1c3 === 'numberText'"
                        :paraVarPair="pvt_r1c3.numberText.paraVarPair"
                        :para="pvt_r1c3.numberText.para"
                        :attr="pvt_r1c3.numberText.attr">
                </lm1a-link-text>
                <lm1a-input-text
                        ref="numberInput"
                        refId="numberInput"
                        v-show="pvt_isShow.r1c3 === 'numberInput'"
                        :paraVarPair="pvt_r1c3.numberInput.paraVarPair"
                        :para="pvt_r1c3.numberInput.para"
                        :attr="pvt_r1c3.numberInput.attr">
                </lm1a-input-text>
            </div>
            <div v-show="pvt_win.isShow.r1c4"
                 :class="{backMan_main_raffleS_prizeSetRow_col:true,backMan_main_raffleS_prizeSetRow_col_r1c4:true,backMan_main_raffleS_prizeSetRow_col_r1c4_size_large:attr.size==='large',backMan_main_raffleS_prizeSetRow_col_r1c4_size_medium:attr.size==='medium',backMan_main_raffleS_prizeSetRow_col_r1c4_size_small:attr.size==='small',backMan_main_raffleS_prizeSetRow_col_r1c4_size_min:attr.size==='min',backMan_main_raffleS_prizeSetRow_col_r1c4_checked:pvt_win.isChecked.r1c4,backMan_main_raffleS_prizeSetRow_col_r1c4_disable:attr.disabled}"
                 :style="pvt_win.style.r1c4">

                <lm1a-link-text
                        ref="picture1Text"
                        refId="picture1Text"
                        v-show="pvt_isShow.r1c4 === 'picture1Text'"
                        :paraVarPair="pvt_r1c4.picture1Text.paraVarPair"
                        :para="pvt_r1c4.picture1Text.para"
                        :attr="pvt_r1c4.picture1Text.attr">
                </lm1a-link-text>
                <lm1a-picture-upload
                        ref="picture1Upload"
                        refId="picture1Upload"
                        v-show="pvt_isShow.r1c4 === 'picture1Upload'"
                        :paraVarPair="pvt_r1c4.picture1Upload.paraVarPair"
                        :para="pvt_r1c4.picture1Upload.para"
                        :attr="pvt_r1c4.picture1Upload.attr">
                </lm1a-picture-upload>
            </div>
            <div v-show="pvt_win.isShow.r1c5"
                 :class="{backMan_main_raffleS_prizeSetRow_col:true,backMan_main_raffleS_prizeSetRow_col_r1c5:true,backMan_main_raffleS_prizeSetRow_col_r1c5_size_large:attr.size==='large',backMan_main_raffleS_prizeSetRow_col_r1c5_size_medium:attr.size==='medium',backMan_main_raffleS_prizeSetRow_col_r1c5_size_small:attr.size==='small',backMan_main_raffleS_prizeSetRow_col_r1c5_size_min:attr.size==='min',backMan_main_raffleS_prizeSetRow_col_r1c5_checked:pvt_win.isChecked.r1c5,backMan_main_raffleS_prizeSetRow_col_r1c5_disable:attr.disabled}"
                 :style="pvt_win.style.r1c5">

                <lm1a-link-text
                        ref="picture2Text"
                        refId="picture2Text"
                        v-show="pvt_isShow.r1c5 === 'picture2Text'"
                        :paraVarPair="pvt_r1c5.picture2Text.paraVarPair"
                        :para="pvt_r1c5.picture2Text.para"
                        :attr="pvt_r1c5.picture2Text.attr">
                </lm1a-link-text>
                <lm1a-picture-upload
                        ref="picture2Upload"
                        refId="picture2Upload"
                        v-show="pvt_isShow.r1c5 === 'picture2Upload'"
                        :paraVarPair="pvt_r1c5.picture2Upload.paraVarPair"
                        :para="pvt_r1c5.picture2Upload.para"
                        :attr="pvt_r1c5.picture2Upload.attr">
                </lm1a-picture-upload>
            </div>
            <div v-show="pvt_win.isShow.r1c6"
                 :class="{backMan_main_raffleS_prizeSetRow_col:true,backMan_main_raffleS_prizeSetRow_col_r1c6:true,backMan_main_raffleS_prizeSetRow_col_r1c6_size_large:attr.size==='large',backMan_main_raffleS_prizeSetRow_col_r1c6_size_medium:attr.size==='medium',backMan_main_raffleS_prizeSetRow_col_r1c6_size_small:attr.size==='small',backMan_main_raffleS_prizeSetRow_col_r1c6_size_min:attr.size==='min',backMan_main_raffleS_prizeSetRow_col_r1c6_checked:pvt_win.isChecked.r1c6,backMan_main_raffleS_prizeSetRow_col_r1c6_disable:attr.disabled}"
                 :style="pvt_win.style.r1c6">

                <lm1a-link-text
                        ref="picture3Text"
                        refId="picture3Text"
                        v-show="pvt_isShow.r1c6 === 'picture3Text'"
                        :paraVarPair="pvt_r1c6.picture3Text.paraVarPair"
                        :para="pvt_r1c6.picture3Text.para"
                        :attr="pvt_r1c6.picture3Text.attr">
                </lm1a-link-text>
                <lm1a-picture-upload
                        ref="picture3Upload"
                        refId="picture3Upload"
                        v-show="pvt_isShow.r1c6 === 'picture3Upload'"
                        :paraVarPair="pvt_r1c6.picture3Upload.paraVarPair"
                        :para="pvt_r1c6.picture3Upload.para"
                        :attr="pvt_r1c6.picture3Upload.attr">
                </lm1a-picture-upload>
            </div>
            <div v-show="pvt_win.isShow.r1c7"
                 :class="{backMan_main_raffleS_prizeSetRow_col:true,backMan_main_raffleS_prizeSetRow_col_r1c7:true,backMan_main_raffleS_prizeSetRow_col_r1c7_size_large:attr.size==='large',backMan_main_raffleS_prizeSetRow_col_r1c7_size_medium:attr.size==='medium',backMan_main_raffleS_prizeSetRow_col_r1c7_size_small:attr.size==='small',backMan_main_raffleS_prizeSetRow_col_r1c7_size_min:attr.size==='min',backMan_main_raffleS_prizeSetRow_col_r1c7_checked:pvt_win.isChecked.r1c7,backMan_main_raffleS_prizeSetRow_col_r1c7_disable:attr.disabled}"
                 :style="pvt_win.style.r1c7">

                <lm1a-button
                        ref="btn1"
                        refId="btn1"
                        v-show="pvt_isShow.r1c7 === 'btn1'"
                        :paraVarPair="pvt_r1c7.btn1.paraVarPair"
                        :para="pvt_r1c7.btn1.para"
                        :attr="pvt_r1c7.btn1.attr">
                </lm1a-button>
            </div>
            <div v-show="pvt_win.isShow.r1c8"
                 :class="{backMan_main_raffleS_prizeSetRow_col:true,backMan_main_raffleS_prizeSetRow_col_r1c8:true,backMan_main_raffleS_prizeSetRow_col_r1c8_size_large:attr.size==='large',backMan_main_raffleS_prizeSetRow_col_r1c8_size_medium:attr.size==='medium',backMan_main_raffleS_prizeSetRow_col_r1c8_size_small:attr.size==='small',backMan_main_raffleS_prizeSetRow_col_r1c8_size_min:attr.size==='min',backMan_main_raffleS_prizeSetRow_col_r1c8_checked:pvt_win.isChecked.r1c8,backMan_main_raffleS_prizeSetRow_col_r1c8_disable:attr.disabled}"
                 :style="pvt_win.style.r1c8">

                <lm1a-button
                        ref="btn2"
                        refId="btn2"
                        v-show="pvt_isShow.r1c8 === 'btn2'"
                        :paraVarPair="pvt_r1c8.btn2.paraVarPair"
                        :para="pvt_r1c8.btn2.para"
                        :attr="pvt_r1c8.btn2.attr">
                </lm1a-button>
            </div>
        </div>

    </div>
</template>
<script>
    import libSys from "@/components/baseComponent/libSys.js";
    import libUpload from "@/components/baseComponent/libUpload.js";

    export default {
        components: {},
        inject: ["sys", "mac"],
        props: {
            refId: String,
            para: Object,
            attr: {
                type: Object,
                default: function () {
                    return {size: "medium"};
                },
                validator: function (val) {
                    if (!val.size) val.size = "medium";
                    return true;
                },
            },
            paraVarPair: Object,
            number: Number,
        },
        data: function () {
            return {
                mac: mac.mac,
                prizeId: this.para.prizeId,
                type: this.para.type,
                checkedClassArr: this.para.checkedClassArr,
                pvt_subModuleMap: {
                    vessel: ["r1c1", "r1c2", "r1c3", "r1c4", "r1c5", "r1c6", "r1c7", "r1c8", "r1c1", "r1c2", "r1c3", "r1c4", "r1c5", "r1c6"],
                    subModule: ["classText", "nameText", "numberText", "picture1Text", "picture2Text", "picture3Text", "btn1", "btn2", "classSelect", "nameInput", "numberInput", "picture1Upload", "picture2Upload", "picture3Upload"],
                },
                pvt_isShow: {
                    r1c1: null,
                    r1c2: null,
                    r1c3: null,
                    r1c4: null,
                    r1c5: null,
                    r1c6: null,
                    r1c7: null,
                    r1c8: null,
                },
                pvt_win: {
                    isShow: {
                        backMan_main_raffleS_prizeSetRow: true,
                        r1c1: true,
                        r1c2: true,
                        r1c3: true,
                        r1c4: true,
                        r1c5: true,
                        r1c6: true,
                        r1c7: true,
                        r1c8: true,
                    },
                    isChecked: {
                        backMan_main_raffleS_prizeSetRow: false,
                        r1c1: false,
                        r1c2: false,
                        r1c3: false,
                        r1c4: false,
                        r1c5: false,
                        r1c6: false,
                        r1c7: false,
                        r1c8: false,
                    },
                    style: {
                        backMan_main_raffleS_prizeSetRow: null,
                        r1c1: null,
                        r1c2: null,
                        r1c3: null,
                        r1c4: null,
                        r1c5: null,
                        r1c6: null,
                        r1c7: null,
                        r1c8: null,
                    },
                },
                pvt_eventPortInput: ["showImageEvent", "deletePrizeEvent", "recordSaveEvent", "recordEditEvent"],

                classText: null,
                prizeName: null,
                classValue: null,
                calssOption: [],
                prizeNumber: 1,
                picture1Name: "",
                picture1: null,
                picture2Text: "",
                picture2: null,
                picture3Text: "",
                picture3: null,

                classValue_default: 3,
                classText_default: "鼓励奖",
                prizeName_default: "-奖品-",
                prizeNumber_default: 0,
            };
        },
        watch: {
            prizeId: {
                handler: function (val, oldVal) {
                    if (val !== oldVal && this.paraVarPair.prizeId) {
                        if (this.number !== undefined) { // 循环
                            this.$parent[this.paraVarPair.prizeId][this.number] = val;
                        } else { // 非循环
                            this.$parent[this.paraVarPair.prizeId] = val;
                        }
                    }
                },
                deep: true
            },
            type: {
                handler: function (val, oldVal) {
                    if (val !== oldVal && this.paraVarPair.type) {
                        if (this.number !== undefined) { // 循环
                            this.$parent[this.paraVarPair.type][this.number] = val;
                        } else { // 非循环
                            this.$parent[this.paraVarPair.type] = val;
                        }
                    }
                },
                deep: true
            },
            checkedClassArr: {
                handler: function (val, oldVal) {
                    if (val !== oldVal && this.paraVarPair.checkedClassArr) {
                        if (this.number !== undefined) { // 循环
                            this.$parent[this.paraVarPair.checkedClassArr][this.number] = val;
                        } else { // 非循环
                            this.$parent[this.paraVarPair.checkedClassArr] = val;
                        }
                    }
                },
                deep: true
            },
        },
        computed: {
            pvt_r1c1: function () {
                return {
                    classText: {
                        paraVarPair: {
                            textData: "classText",
                        },
                        para: {
                            textData: this.classText,
                        },
                        attr: {
                            label: "div",
                            fontWeight: "",
                            textAlign: "center",
                            height: "40px",
                            color: "#000",
                            fontSize: "12px",
                        },
                    },
                    classSelect: {
                        paraVarPair: {
                            value: "classValue",
                            listSource: "calssOption",
                        },
                        para: {
                            value: this.classValue,
                            listSource: this.calssOption,
                        },
                        attr: {
                            placeholder: "选择奖项类别",
                            size: "small",
                            saveValue: true,
                        },
                    },
                };
            },
            pvt_r1c2: function () {
                return {
                    nameText: {
                        paraVarPair: {
                            textData: "prizeName",
                        },
                        para: {
                            textData: this.prizeName,
                        },
                        attr: {
                            label: "div",
                            fontWeight: "",
                            color: "#000",
                            fontSize: "12px",
                          hideRedundant:true
                        },
                    },
                    nameInput: {
                        paraVarPair: {
                            text: "prizeName",
                        },
                        para: {
                            text: this.prizeName,
                        },
                        attr: {
                            size: "small",
                        },
                    },
                };
            },
            pvt_r1c3: function () {
                return {
                    numberText: {
                        paraVarPair: {
                            textData: "prizeNumber",
                        },
                        para: {
                            textData: this.prizeNumber,
                        },
                        attr: {
                            label: "div",
                            fontWeight: "",
                            color: "#000",
                            fontSize: "12px",
                        },
                    },
                    numberInput: {
                        paraVarPair: {
                            text: "prizeNumber",
                        },
                        para: {
                            text: this.prizeNumber,
                        },
                        attr: {
                            size: "small",
                        },
                    },
                };
            },
            pvt_r1c4: function () {
                return {
                    picture1Text: {
                        paraVarPair: {
                            textData: "picture1Name",
                        },
                        para: {
                            textData: this.picture1Name,
                        },
                        attr: {
                            isClick: true,
                            label: "div",
                            fontWeight: "",
                            color: "#1D77D4",
                            fontSize: "12px",
                          hideRedundant:true
                        },
                    },
                    picture1Upload: {
                        paraVarPair: {
                            detail: "picture1",
                        },
                        para: {
                            detail: this.picture1,
                        },
                        attr: {
                            limit: 1,
                            detailImageUrl: "prize/picture",
                            noShowImage: true,
                        },
                    },
                };
            },
            pvt_r1c5: function () {
                return {
                    picture2Text: {
                        paraVarPair: {
                            textData: "picture2Text",
                        },
                        para: {
                            textData: this.picture2Text,
                        },
                        attr: {
                            isClick: true,
                            label: "div",
                            fontWeight: "",
                            color: "#1D77D4",
                            fontSize: "12px",
                          hideRedundant:true
                        },
                    },
                    picture2Upload: {
                        paraVarPair: {
                            detail: "picture2",
                        },
                        para: {
                            detail: this.picture2,
                        },
                        attr: {
                            limit: 1,
                            detailImageUrl: "prize/selectedPicture",
                            noShowImage: true,
                        },
                    },
                };
            },
            pvt_r1c6: function () {
                return {
                    picture3Text: {
                        paraVarPair: {
                            textData: "picture3Text",
                        },
                        para: {
                            textData: this.picture3Text,
                        },
                        attr: {
                            isClick: true,
                            label: "div",
                            fontWeight: "",
                            color: "#1D77D4",
                            fontSize: "12px",
                          hideRedundant:true
                        },
                    },
                    picture3Upload: {
                        paraVarPair: {
                            detail: "picture3",
                        },
                        para: {
                            detail: this.picture3,
                        },
                        attr: {
                            limit: 1,
                            detailImageUrl: "prize/raffledPicture",
                            noShowImage: true,
                        },
                    },
                };
            },
            pvt_r1c7: function () {
                return {
                    btn1: {
                        paraVarPair: {},
                        para: {
                            name: ["", "el-icon-edit"],
                        },
                        attr: {
                            type: "text",
                            size: "min",
                        },
                    },
                };
            },
            pvt_r1c8: function () {
                return {
                    btn2: {
                        paraVarPair: {},
                        para: {
                            name: ["", "el-icon-delete"],
                        },
                        attr: {
                            type: "text",
                            size: "min",
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
            // 子模块事件
            picture1Text_textClickEvent: function () {
                this.showImage1();
            },
            picture2Text_textClickEvent: function () {
                this.showImage2();
            },
            picture3Text_textClickEvent: function () {
                this.showImage3();
            },
            btn1_buttonClickEvent: function () {
                this.handleTypeChange();
            },
            btn2_buttonClickEvent: function () {
                this.deletePrize();
            },
            classSelect_dataModifyEvent: function (id, name) {
                this.prizeClassChange(id, name);
            },
            nameInput_dataModifyEvent: function (value) {
                this.prizeNameChange(value);
            },
            numberInput_dataModifyEvent: function (value) {
                this.prizeNumberChange(value);
            },

            // 方法
            startModule: function (successCallBack, errorCallBack) {
                let $this = this, para, dbFlag, record, data;
                if (successCallBack !== null) {
                    errorCallBack = {
                        successCallBack: successCallBack,
                        errorCallBack: errorCallBack,
                        nStep: 0
                    };
                    successCallBack = null;
                }
                para = errorCallBack;
                while (1) {
                    dbFlag = 0;
                    if ($this.$debugFlag || true) {
                        if (para.nStep !== para.nStepOld) {
                            console.log("prizeSetRow startModule: para.nStep = " + para.nStep);
                            para.nStepOld = para.nStep;
                        }
                    }
                    switch (para.nStep) {
                        case 0:
                        case "showSubModule":
                            if ($this.type === 0) {
                                para.showModule = ["classText", "nameText", "numberText", "picture1Text", "picture2Text", "picture3Text", "btn1", "btn2"];
                            } else {// 编辑模式
                                para.showModule = ["btn1", "btn2", "classSelect", "nameInput", "numberInput", "picture1Upload", "picture2Upload", "picture3Upload"];
                                // 新增默认值赋值
                                $this.classValue = $this.classValue_default;
                                $this.classText = $this.classText_default;
                                $this.prizeName = $this.prizeName_default;
                                $this.prizeNumber = $this.prizeNumber_default;
                            }
                            $this.showSubModule(para.showModule, true, function () {
                                para.nStep = "read_prize";
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case "read_prize":
                            record = {
                                id: [$this.prizeId],
                                table: $this.mac.tb.prize,
                                field: null
                            };
                            data = {};
                            $this.sys.api.recordRead(null, null, record, data, function () {
                                if ($this.type === 0) {
                                    switch (data[$this.mac.fd.prize.class][0]) {
                                        case $this.mac.enum.prize.class.level_1:
                                            $this.classText = "一等奖";
                                            break;
                                        case $this.mac.enum.prize.class.level_2:
                                            $this.classText = "二等奖";
                                            break;
                                        case $this.mac.enum.prize.class.level_3:
                                            $this.classText = "三等奖";
                                            break;
                                        case $this.mac.enum.prize.class.encourage:
                                            $this.classText = "鼓励奖";
                                            break;
                                    }

                                    $this.prizeName = data[$this.mac.fd.prize.name][0];

                                    $this.prizeNumber = data[$this.mac.fd.prize.amount][0];

                                    if(data[$this.mac.fd.prize.picture][0] && data[$this.mac.fd.prize.picture][0][0]){
                                      var lastIndex = data[$this.mac.fd.prize.picture][0][0].lastIndexOf('/');
                                      $this.picture1Name = data[$this.mac.fd.prize.picture][0][0].substring(lastIndex + 1);
                                    }

                                  if(data[$this.mac.fd.prize.selected_graphic][0] && data[$this.mac.fd.prize.selected_graphic][0][0]){
                                    var lastIndex = data[$this.mac.fd.prize.selected_graphic][0][0].lastIndexOf('/');
                                    $this.picture2Text = data[$this.mac.fd.prize.selected_graphic][0][0].substring(lastIndex + 1);
                                  }

                                  if(data[$this.mac.fd.prize.no_selected_graphic][0] && data[$this.mac.fd.prize.no_selected_graphic][0][0]){
                                    var lastIndex = data[$this.mac.fd.prize.no_selected_graphic][0][0].lastIndexOf('/');
                                    $this.picture3Text = data[$this.mac.fd.prize.no_selected_graphic][0][0].substring(lastIndex + 1);
                                  }
                                } else {
                                    // $this.classValue = data[$this.mac.fd.prize.class][0];

                                    $this.picture1 = [{
                                        $table: $this.mac.tb.prize,
                                        $arrField: [$this.mac.fd.prize.picture],
                                        $arrValue: [$this.prizeId]
                                    }];

                                    $this.picture2 = [{
                                        $table: $this.mac.tb.prize,
                                        $arrField: [$this.mac.fd.prize.selected_graphic],
                                        $arrValue: [$this.prizeId]
                                    }];

                                    $this.picture3 = [{
                                        $table: $this.mac.tb.prize,
                                        $arrField: [$this.mac.fd.prize.no_selected_graphic],
                                        $arrValue: [$this.prizeId]
                                    }];
                                }
                                para.nStep = "query_prize";
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case "query_prize":
                            $this.set_calssOption(function () {
                                para.nStep = "forceUpdateData";
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case "forceUpdateData":
                            $this.forceUpdateData(function () {
                                para.i = 0;
                                para.nStep = "loop_showModule";
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            });
                            break;
                        case "loop_showModule":
                            if (para.i === para.showModule.length) {
                                para.nStep = "end";
                                dbFlag++;
                                break;
                            }
                            $this.sm[para.showModule[para.i]].startModule(function () {
                                para.i++;
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case "end":
                            para.successCallBack();
                            return;
                    }
                    if (++dbFlag === 1) return;
                }
            },
            prizeClassChange: function (id, name) {
                this.classText = name;
            },
            prizeNameChange: function (value) {
                this.prizeName = value;
            },
            prizeNumberChange: function (value) {
                this.prizeNumber = Number(value);
            },
            showImage1: function () {
                this.ep.showImageEvent(this.number, 0)
            },
            showImage2: function () {
                this.ep.showImageEvent(this.number, 1)
            },
            showImage3: function () {
                this.ep.showImageEvent(this.number, 2)
            },
            handleTypeChange: function (successCallBack, errorCallBack) {
                let $this = this, para, dbFlag, record, data;
                if (successCallBack === undefined) {
                    successCallBack = function () {

                    };
                    errorCallBack = function (error) {
                        console.log(error);
                    };
                }
                if (successCallBack !== null) {
                    errorCallBack = {
                        successCallBack: successCallBack,
                        errorCallBack: errorCallBack,
                        nStep: 0
                    };
                    successCallBack = null;
                }
                para = errorCallBack;
                while (1) {
                    dbFlag = 0;
                    if ($this.$debugFlag) {
                        if (para.nStep !== para.nStepOld) {
                            console.log("prizeSetRow handleTypeChange: para.nStep = " + para.nStep);
                            para.nStepOld = para.nStep;
                        }
                    }
                    switch (para.nStep) {
                        case 0:
                            para.moduleArr = [["classSelect", "nameInput", "numberInput", "picture1Upload", "picture2Upload", "picture3Upload"], ["classText", "nameText", "numberText", "picture1Text", "picture2Text", "picture3Text"]];
                            if ($this.type === 0) {
                                $this.ep.recordEditEvent();
                                para.nStep = "read_prize";
                            } else {
                                para.nStep = "saveData";
                            }
                            dbFlag++;
                            break;
                        case "saveData":
                            record = {
                                id: [$this.prizeId],
                                table: $this.mac.tb.prize
                            };
                            $this.prizeName = $this.prizeName === "" ? $this.prizeName_default : $this.prizeName;
                            data = {
                                [$this.mac.fd.prize.class]: [$this.classValue],
                                [$this.mac.fd.prize.name]: [$this.prizeName === "" ? $this.prizeName_default : $this.prizeName],
                                [$this.mac.fd.prize.amount]: [$this.prizeNumber === "" ? $this.prizeNumber_default : Number($this.prizeNumber)]
                            };
                            $this.sys.api.recordModify(null, null, record, data, function () {
                                para.nStep = "uploadData";
                                if (++dbFlag === 2) {
                                    $this.handleTypeChange(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case "uploadData":
                          let tableVariable = [{
                            $table:$this.mac.tb.prize,
                            $arrField:null,
                            $arrValue:[$this.prizeId],
                            $arrSubTab:[]
                          }];
                          $this.sys.api.dataOutput(tableVariable,null,function(){
                            para.nStep = "read_prize";
                            if (++dbFlag === 2) {
                              $this.handleTypeChange(successCallBack, errorCallBack);
                            }
                          },function(error){console.log(error)});
                            break;
                        case "read_prize":
                            record = {
                                id: [$this.prizeId],
                                table: $this.mac.tb.prize,
                                field: null
                            };
                            data = {};
                            $this.sys.api.recordRead(null, null, record, data, function () {
                                if ($this.type === 0) {
                                    $this.classValue = data[$this.mac.fd.prize.class][0];
                                    $this.prizeName = data[$this.mac.fd.prize.name][0];
                                    $this.prizeNumber = data[$this.mac.fd.prize.amount][0];
                                    $this.picture1 = [{
                                        $table: $this.mac.tb.prize,
                                        $arrField: [$this.mac.fd.prize.picture],
                                        $arrValue: [$this.prizeId]
                                    }];

                                    $this.picture2 = [{
                                        $table: $this.mac.tb.prize,
                                        $arrField: [$this.mac.fd.prize.selected_graphic],
                                        $arrValue: [$this.prizeId]
                                    }];

                                    $this.picture3 = [{
                                        $table: $this.mac.tb.prize,
                                        $arrField: [$this.mac.fd.prize.no_selected_graphic],
                                        $arrValue: [$this.prizeId]
                                    }];
                                    para.nStep = "set_calssOption";
                                } else {
                                  $this.picture1Name = '';
                                  $this.picture2Text = '';
                                  $this.picture3Text = '';
                                  if(data[$this.mac.fd.prize.picture][0] && data[$this.mac.fd.prize.picture][0][0]){
                                    var lastIndex = data[$this.mac.fd.prize.picture][0][0].lastIndexOf('/');
                                    $this.picture1Name = data[$this.mac.fd.prize.picture][0][0].substring(lastIndex + 1);
                                  }
                                  if(data[$this.mac.fd.prize.selected_graphic][0] && data[$this.mac.fd.prize.selected_graphic][0][0]){
                                    var lastIndex = data[$this.mac.fd.prize.selected_graphic][0][0].lastIndexOf('/');
                                    $this.picture2Text = data[$this.mac.fd.prize.selected_graphic][0][0].substring(lastIndex + 1);
                                  }
                                  if(data[$this.mac.fd.prize.no_selected_graphic][0] && data[$this.mac.fd.prize.no_selected_graphic][0][0]){
                                    var lastIndex = data[$this.mac.fd.prize.no_selected_graphic][0][0].lastIndexOf('/');
                                    $this.picture3Text = data[$this.mac.fd.prize.no_selected_graphic][0][0].substring(lastIndex + 1);
                                  }
                                    para.nStep = "setmoduleHiden";
                                }
                                if (++dbFlag === 2) {
                                    $this.handleTypeChange(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case "set_calssOption":
                            $this.set_calssOption(function () {
                                para.nStep = "setmoduleHiden";
                                if (++dbFlag === 2) {
                                    $this.handleTypeChange(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case "setmoduleHiden":
                            $this.showSubModule(para.moduleArr[Math.abs($this.type - 1)], false, function () {
                                para.nStep = "setmoduleShow";
                                if (++dbFlag === 2) {
                                    $this.handleTypeChange(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case "setmoduleShow":
                            $this.showSubModule(para.moduleArr[$this.type], true, function () {
                                para.i = 0;
                                para.nStep = "loopStartModule";
                                if (++dbFlag === 2) {
                                    $this.handleTypeChange(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case "loopStartModule":
                            if (para.i === para.moduleArr[$this.type].length) {
                                para.nStep = "end";
                                dbFlag++;
                                break;
                            }
                            $this.sm[para.moduleArr[$this.type][para.i]].startModule(function () {
                                para.i++;
                                if (++dbFlag === 2) {
                                    $this.handleTypeChange(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case "end":
                            $this.type = Math.abs($this.type - 1);
                            para.successCallBack();
                            return;
                    }
                    if (++dbFlag === 1) return;
                }
            },
            deletePrize: function () {
                this.ep.recordEditEvent();
                // this.type = Math.abs(this.type - 1);
                this.ep.deletePrizeEvent(this.number);
            },

            set_calssOption: function (successCallBack, errorCallBack) {
                let $this = this;
                let tableVariable = [{
                    $table: $this.mac.tb.prize,
                    $arrField: null,
                    $arrValue: null,
                    $arrSubTab: []
                }];
                let condition = {
                    [$this.mac.tb.prize]: null
                };
                $this.sys.api.recordQuery(tableVariable, condition, function () {
                    let record = {
                        id: tableVariable[0].$arrValue,
                        table: $this.mac.tb.prize,
                        field: null
                    };
                    let data = {};
                    $this.sys.api.recordRead(null, null, record, data, function () {
                        $this.checkedClassArr = [$this.mac.enum.prize.class.level_1, $this.mac.enum.prize.class.level_2, $this.mac.enum.prize.class.level_3, $this.mac.enum.prize.class.encourage];
                        $this.checkedClassArr = $this.checkedClassArr.filter((v, i) => {
                            if (i === 3 || v === $this.classValue) {
                                return true;
                            }
                            return !data[$this.mac.fd.prize.class].includes(v);
                        });
                        $this.calssOption = $this.checkedClassArr.map(v => {
                            switch (v) {
                                case $this.mac.enum.prize.class.level_1:
                                    return {
                                        label: "一等奖",
                                        value: v
                                    };
                                case $this.mac.enum.prize.class.level_2:
                                    return {
                                        label: "二等奖",
                                        value: v
                                    };
                                case $this.mac.enum.prize.class.level_3:
                                    return {
                                        label: "三等奖",
                                        value: v
                                    };
                                case $this.mac.enum.prize.class.encourage:
                                    return {
                                        label: "鼓励奖",
                                        value: v
                                    };
                            }
                        });
                        successCallBack();
                    }, errorCallBack);
                }, errorCallBack);
            },
        },
    };
</script>
<style lang="scss" scoped>
    .backMan_main_raffleS_prizeSetRow_container {
        width: 100%;
        height: 100%;
    }

    .backMan_main_raffleS_prizeSetRow_mask {
        display: flex;
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, .4);
    }

    .backMan_main_raffleS_prizeSetRow_dialog {
        position: absolute;
        left: 0;
        top: 0;
    }

    .backMan_main_raffleS_prizeSetRow_overlay {
        position: absolute;
        left: 0;
        top: 0;
    }

    .backMan_main_raffleS_prizeSetRow_row {
        display: flex;
    }

    .backMan_main_raffleS_prizeSetRow_col {
        box-sizing: border-box;
        position: relative;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
    }

    .backMan_main_raffleS_prizeSetRow_col_backMan_main_raffleS_prizeSetRow_size_medium {
        width: $backMan_main_raffleS_prizeSetRow-backMan_main_raffleS_prizeSetRow-medium-width;
    }

    .backMan_main_raffleS_prizeSetRow_col_backMan_main_raffleS_prizeSetRow {
        border-style: $backMan_main_raffleS_prizeSetRow-backMan_main_raffleS_prizeSetRow-border-style;
        border-width: $backMan_main_raffleS_prizeSetRow-backMan_main_raffleS_prizeSetRow-border-width;
        border-color: mix($backMan_main_raffleS_prizeSetRow-backMan_main_raffleS_prizeSetRow-border-color, #fff, $backMan_main_raffleS_prizeSetRow-backMan_main_raffleS_prizeSetRow-hover-border-color-opacity);
    }

    .backMan_main_raffleS_prizeSetRow_col_r1c1_size_medium {
        width: $backMan_main_raffleS_prizeSetRow-r1c1-medium-width;
        height: $backMan_main_raffleS_prizeSetRow-r1c1-medium-height;
        justify-content: $backMan_main_raffleS_prizeSetRow-r1c1-medium-vertical-position;
        align-items: $backMan_main_raffleS_prizeSetRow-r1c1-medium-horizontal-position;
        line-height: $backMan_main_raffleS_prizeSetRow-r1c1-medium-line-height;
    }

    .backMan_main_raffleS_prizeSetRow_col_r1c2_size_medium {
        width: $backMan_main_raffleS_prizeSetRow-r1c2-medium-width;
        height: $backMan_main_raffleS_prizeSetRow-r1c2-medium-height;
        justify-content: $backMan_main_raffleS_prizeSetRow-r1c2-medium-vertical-position;
        align-items: $backMan_main_raffleS_prizeSetRow-r1c2-medium-horizontal-position;
        line-height: $backMan_main_raffleS_prizeSetRow-r1c2-medium-line-height;
    }

    .backMan_main_raffleS_prizeSetRow_col_r1c3_size_medium {
        width: $backMan_main_raffleS_prizeSetRow-r1c3-medium-width;
        height: $backMan_main_raffleS_prizeSetRow-r1c3-medium-height;
        justify-content: $backMan_main_raffleS_prizeSetRow-r1c3-medium-vertical-position;
        align-items: $backMan_main_raffleS_prizeSetRow-r1c3-medium-horizontal-position;
        line-height: $backMan_main_raffleS_prizeSetRow-r1c3-medium-line-height;
    }

    .backMan_main_raffleS_prizeSetRow_col_r1c4_size_medium {
        width: $backMan_main_raffleS_prizeSetRow-r1c4-medium-width;
        height: $backMan_main_raffleS_prizeSetRow-r1c4-medium-height;
        justify-content: $backMan_main_raffleS_prizeSetRow-r1c4-medium-vertical-position;
        align-items: $backMan_main_raffleS_prizeSetRow-r1c4-medium-horizontal-position;
        line-height: $backMan_main_raffleS_prizeSetRow-r1c4-medium-line-height;
    }

    .backMan_main_raffleS_prizeSetRow_col_r1c5_size_medium {
        width: $backMan_main_raffleS_prizeSetRow-r1c5-medium-width;
        height: $backMan_main_raffleS_prizeSetRow-r1c5-medium-height;
        justify-content: $backMan_main_raffleS_prizeSetRow-r1c5-medium-vertical-position;
        align-items: $backMan_main_raffleS_prizeSetRow-r1c5-medium-horizontal-position;
        line-height: $backMan_main_raffleS_prizeSetRow-r1c5-medium-line-height;
    }

    .backMan_main_raffleS_prizeSetRow_col_r1c6_size_medium {
        width: $backMan_main_raffleS_prizeSetRow-r1c6-medium-width;
        height: $backMan_main_raffleS_prizeSetRow-r1c6-medium-height;
        justify-content: $backMan_main_raffleS_prizeSetRow-r1c6-medium-vertical-position;
        align-items: $backMan_main_raffleS_prizeSetRow-r1c6-medium-horizontal-position;
        line-height: $backMan_main_raffleS_prizeSetRow-r1c6-medium-line-height;
    }

    .backMan_main_raffleS_prizeSetRow_col_r1c7_size_medium {
        width: $backMan_main_raffleS_prizeSetRow-r1c7-medium-width;
        height: $backMan_main_raffleS_prizeSetRow-r1c7-medium-height;
        justify-content: $backMan_main_raffleS_prizeSetRow-r1c7-medium-vertical-position;
        align-items: $backMan_main_raffleS_prizeSetRow-r1c7-medium-horizontal-position;
    }

    .backMan_main_raffleS_prizeSetRow_col_r1c8_size_medium {
        width: $backMan_main_raffleS_prizeSetRow-r1c8-medium-width;
        height: $backMan_main_raffleS_prizeSetRow-r1c8-medium-height;
        justify-content: $backMan_main_raffleS_prizeSetRow-r1c8-medium-vertical-position;
        align-items: $backMan_main_raffleS_prizeSetRow-r1c8-medium-horizontal-position;
    }

    .backMan_main_raffleS_prizeSetRow_col_r1c1 {
        padding: 2px 5px 2px 5px;
        height: 40px;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        width: 14%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .backMan_main_raffleS_prizeSetRow_col_r1c2 {
        padding: 2px 5px 2px 0;
        height: 40px;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        width: 14%;
    }

    .backMan_main_raffleS_prizeSetRow_col_r1c3 {
        padding: 2px 5px 2px 0;
        height: 40px;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        width: 14%;
    }

    .backMan_main_raffleS_prizeSetRow_col_r1c4 {
        /*text-align: center;*/
        padding: 2px 5px 2px 0;
        height: 40px;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        width: 14%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .backMan_main_raffleS_prizeSetRow_col_r1c5 {
        /*text-align: center;*/
        padding: 2px 5px 2px 0;
        height: 40px;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        width: 14%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .backMan_main_raffleS_prizeSetRow_col_r1c6 {
        /*text-align: center;*/
        padding: 2px 5px 2px 0;
        height: 40px;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        width: 14%;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
    }

    .backMan_main_raffleS_prizeSetRow_col_r1c7 {
        padding: 2px 5px 2px 6%;
        height: 40px;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        width: 8%;
    }

    .backMan_main_raffleS_prizeSetRow_col_r1c8 {
        padding: 2px 6% 2px 0;
        height: 40px;
        justify-content: center;
        align-items: center;
        box-sizing: border-box;
        width: 8%;
    }
</style>
