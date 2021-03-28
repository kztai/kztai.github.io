<template>
    <div v-show="pvt_win.isShow.backMan_main_raffleS_prizeSetWin"
         :class="{backMan_main_raffleS_prizeSet_container:true,backMan_main_raffleS_prizeSet_col:true,backMan_main_raffleS_prizeSet_col_backMan_main_raffleS_prizeSetWin:true,backMan_main_raffleS_prizeSet_col_backMan_main_raffleS_prizeSetWin_size_large:attr.size==='large',backMan_main_raffleS_prizeSet_col_backMan_main_raffleS_prizeSetWin_size_medium:attr.size==='medium',backMan_main_raffleS_prizeSet_col_backMan_main_raffleS_prizeSetWin_size_small:attr.size==='small',backMan_main_raffleS_prizeSet_col_backMan_main_raffleS_prizeSetWin_size_min:attr.size==='min',backMan_main_raffleS_prizeSet_col_backMan_main_raffleS_prizeSetWin_checked:pvt_win.isChecked.backMan_main_raffleS_prizeSetWin,backMan_main_raffleS_prizeSet_col_backMan_main_raffleS_prizeSetWin_disable:attr.disabled}"
         :style="pvt_win.style.backMan_main_raffleS_prizeSetWin">

        <div class="backMan_main_raffleS_prizeSet_row backMan_main_raffleS_prizeSet_row_row0">
            <div v-show="pvt_win.isShow.r1c1"
                 :class="{backMan_main_raffleS_prizeSet_col:true,backMan_main_raffleS_prizeSet_col_r1c1:true,backMan_main_raffleS_prizeSet_col_r1c1_size_large:attr.size==='large',backMan_main_raffleS_prizeSet_col_r1c1_size_medium:attr.size==='medium',backMan_main_raffleS_prizeSet_col_r1c1_size_small:attr.size==='small',backMan_main_raffleS_prizeSet_col_r1c1_size_min:attr.size==='min',backMan_main_raffleS_prizeSet_col_r1c1_checked:pvt_win.isChecked.r1c1,backMan_main_raffleS_prizeSet_col_r1c1_disable:attr.disabled}"
                 :style="pvt_win.style.r1c1">

                <lm1a-link-text
                        ref="title"
                        refId="title"
                        v-show="pvt_isShow.r1c1 === 'title'"
                        :paraVarPair="pvt_r1c1.title.paraVarPair"
                        :para="pvt_r1c1.title.para"
                        :attr="pvt_r1c1.title.attr">
                </lm1a-link-text>
            </div>
        </div>
        <div class="backMan_main_raffleS_prizeSet_row backMan_main_raffleS_prizeSet_row_row1">
            <div v-show="pvt_win.isShow.r2c1"
                 :class="{backMan_main_raffleS_prizeSet_col:true,backMan_main_raffleS_prizeSet_col_r2c1:true,backMan_main_raffleS_prizeSet_col_r2c1_size_large:attr.size==='large',backMan_main_raffleS_prizeSet_col_r2c1_size_medium:attr.size==='medium',backMan_main_raffleS_prizeSet_col_r2c1_size_small:attr.size==='small',backMan_main_raffleS_prizeSet_col_r2c1_size_min:attr.size==='min',backMan_main_raffleS_prizeSet_col_r2c1_checked:pvt_win.isChecked.r2c1,backMan_main_raffleS_prizeSet_col_r2c1_disable:attr.disabled}"
                 :style="pvt_win.style.r2c1">

                <lm1a-button
                        ref="addBtn"
                        refId="addBtn"
                        v-show="pvt_isShow.r2c1 === 'addBtn'"
                        :paraVarPair="pvt_r2c1.addBtn.paraVarPair"
                        :para="pvt_r2c1.addBtn.para"
                        :attr="pvt_r2c1.addBtn.attr">
                </lm1a-button>
            </div>
        </div>
        <div class="backMan_main_raffleS_prizeSet_row backMan_main_raffleS_prizeSet_row_row2">
            <div v-show="pvt_win.isShow.r3c1"
                 :class="{backMan_main_raffleS_prizeSet_col:true,backMan_main_raffleS_prizeSet_col_r3c1:true,backMan_main_raffleS_prizeSet_col_r3c1_size_large:attr.size==='large',backMan_main_raffleS_prizeSet_col_r3c1_size_medium:attr.size==='medium',backMan_main_raffleS_prizeSet_col_r3c1_size_small:attr.size==='small',backMan_main_raffleS_prizeSet_col_r3c1_size_min:attr.size==='min',backMan_main_raffleS_prizeSet_col_r3c1_checked:pvt_win.isChecked.r3c1,backMan_main_raffleS_prizeSet_col_r3c1_disable:attr.disabled}"
                 :style="pvt_win.style.r3c1">

                <lm1a-link-text
                        ref="tableTitle1"
                        refId="tableTitle1"
                        v-show="pvt_isShow.r3c1 === 'tableTitle1'"
                        :paraVarPair="pvt_r3c1.tableTitle1.paraVarPair"
                        :para="pvt_r3c1.tableTitle1.para"
                        :attr="pvt_r3c1.tableTitle1.attr">
                </lm1a-link-text>
            </div>
            <div v-show="pvt_win.isShow.r3c2"
                 :class="{backMan_main_raffleS_prizeSet_col:true,backMan_main_raffleS_prizeSet_col_r3c2:true,backMan_main_raffleS_prizeSet_col_r3c2_size_large:attr.size==='large',backMan_main_raffleS_prizeSet_col_r3c2_size_medium:attr.size==='medium',backMan_main_raffleS_prizeSet_col_r3c2_size_small:attr.size==='small',backMan_main_raffleS_prizeSet_col_r3c2_size_min:attr.size==='min',backMan_main_raffleS_prizeSet_col_r3c2_checked:pvt_win.isChecked.r3c2,backMan_main_raffleS_prizeSet_col_r3c2_disable:attr.disabled}"
                 :style="pvt_win.style.r3c2">

                <lm1a-link-text
                        ref="tableTitle2"
                        refId="tableTitle2"
                        v-show="pvt_isShow.r3c2 === 'tableTitle2'"
                        :paraVarPair="pvt_r3c2.tableTitle2.paraVarPair"
                        :para="pvt_r3c2.tableTitle2.para"
                        :attr="pvt_r3c2.tableTitle2.attr">
                </lm1a-link-text>
            </div>
            <div v-show="pvt_win.isShow.r3c3"
                 :class="{backMan_main_raffleS_prizeSet_col:true,backMan_main_raffleS_prizeSet_col_r3c3:true,backMan_main_raffleS_prizeSet_col_r3c3_size_large:attr.size==='large',backMan_main_raffleS_prizeSet_col_r3c3_size_medium:attr.size==='medium',backMan_main_raffleS_prizeSet_col_r3c3_size_small:attr.size==='small',backMan_main_raffleS_prizeSet_col_r3c3_size_min:attr.size==='min',backMan_main_raffleS_prizeSet_col_r3c3_checked:pvt_win.isChecked.r3c3,backMan_main_raffleS_prizeSet_col_r3c3_disable:attr.disabled}"
                 :style="pvt_win.style.r3c3">

                <lm1a-link-text
                        ref="tableTitle3"
                        refId="tableTitle3"
                        v-show="pvt_isShow.r3c3 === 'tableTitle3'"
                        :paraVarPair="pvt_r3c3.tableTitle3.paraVarPair"
                        :para="pvt_r3c3.tableTitle3.para"
                        :attr="pvt_r3c3.tableTitle3.attr">
                </lm1a-link-text>
            </div>
            <div v-show="pvt_win.isShow.r3c4"
                 :class="{backMan_main_raffleS_prizeSet_col:true,backMan_main_raffleS_prizeSet_col_r3c4:true,backMan_main_raffleS_prizeSet_col_r3c4_size_large:attr.size==='large',backMan_main_raffleS_prizeSet_col_r3c4_size_medium:attr.size==='medium',backMan_main_raffleS_prizeSet_col_r3c4_size_small:attr.size==='small',backMan_main_raffleS_prizeSet_col_r3c4_size_min:attr.size==='min',backMan_main_raffleS_prizeSet_col_r3c4_checked:pvt_win.isChecked.r3c4,backMan_main_raffleS_prizeSet_col_r3c4_disable:attr.disabled}"
                 :style="pvt_win.style.r3c4">

                <lm1a-link-text
                        ref="tableTitle4"
                        refId="tableTitle4"
                        v-show="pvt_isShow.r3c4 === 'tableTitle4'"
                        :paraVarPair="pvt_r3c4.tableTitle4.paraVarPair"
                        :para="pvt_r3c4.tableTitle4.para"
                        :attr="pvt_r3c4.tableTitle4.attr">
                </lm1a-link-text>
            </div>
            <div v-show="pvt_win.isShow.r3c5"
                 :class="{backMan_main_raffleS_prizeSet_col:true,backMan_main_raffleS_prizeSet_col_r3c5:true,backMan_main_raffleS_prizeSet_col_r3c5_size_large:attr.size==='large',backMan_main_raffleS_prizeSet_col_r3c5_size_medium:attr.size==='medium',backMan_main_raffleS_prizeSet_col_r3c5_size_small:attr.size==='small',backMan_main_raffleS_prizeSet_col_r3c5_size_min:attr.size==='min',backMan_main_raffleS_prizeSet_col_r3c5_checked:pvt_win.isChecked.r3c5,backMan_main_raffleS_prizeSet_col_r3c5_disable:attr.disabled}"
                 :style="pvt_win.style.r3c5">

                <lm1a-link-text
                        ref="tableTitle5"
                        refId="tableTitle5"
                        v-show="pvt_isShow.r3c5 === 'tableTitle5'"
                        :paraVarPair="pvt_r3c5.tableTitle5.paraVarPair"
                        :para="pvt_r3c5.tableTitle5.para"
                        :attr="pvt_r3c5.tableTitle5.attr">
                </lm1a-link-text>
            </div>
            <div v-show="pvt_win.isShow.r3c6"
                 :class="{backMan_main_raffleS_prizeSet_col:true,backMan_main_raffleS_prizeSet_col_r3c6:true,backMan_main_raffleS_prizeSet_col_r3c6_size_large:attr.size==='large',backMan_main_raffleS_prizeSet_col_r3c6_size_medium:attr.size==='medium',backMan_main_raffleS_prizeSet_col_r3c6_size_small:attr.size==='small',backMan_main_raffleS_prizeSet_col_r3c6_size_min:attr.size==='min',backMan_main_raffleS_prizeSet_col_r3c6_checked:pvt_win.isChecked.r3c6,backMan_main_raffleS_prizeSet_col_r3c6_disable:attr.disabled}"
                 :style="pvt_win.style.r3c6">

                <lm1a-link-text
                        ref="tableTitle6"
                        refId="tableTitle6"
                        v-show="pvt_isShow.r3c6 === 'tableTitle6'"
                        :paraVarPair="pvt_r3c6.tableTitle6.paraVarPair"
                        :para="pvt_r3c6.tableTitle6.para"
                        :attr="pvt_r3c6.tableTitle6.attr">
                </lm1a-link-text>
            </div>
            <div v-show="pvt_win.isShow.r3c7"
                 :class="{backMan_main_raffleS_prizeSet_col:true,backMan_main_raffleS_prizeSet_col_r3c7:true,backMan_main_raffleS_prizeSet_col_r3c7_size_large:attr.size==='large',backMan_main_raffleS_prizeSet_col_r3c7_size_medium:attr.size==='medium',backMan_main_raffleS_prizeSet_col_r3c7_size_small:attr.size==='small',backMan_main_raffleS_prizeSet_col_r3c7_size_min:attr.size==='min',backMan_main_raffleS_prizeSet_col_r3c7_checked:pvt_win.isChecked.r3c7,backMan_main_raffleS_prizeSet_col_r3c7_disable:attr.disabled}"
                 :style="pvt_win.style.r3c7">

                <lm1a-link-text
                        ref="tableTitle7"
                        refId="tableTitle7"
                        v-show="pvt_isShow.r3c7 === 'tableTitle7'"
                        :paraVarPair="pvt_r3c7.tableTitle7.paraVarPair"
                        :para="pvt_r3c7.tableTitle7.para"
                        :attr="pvt_r3c7.tableTitle7.attr">
                </lm1a-link-text>
            </div>
        </div>
        <div class="backMan_main_raffleS_prizeSet_row backMan_main_raffleS_prizeSet_row_row3">
            <div v-show="pvt_win.isShow.r4c1"
                 :class="{backMan_main_raffleS_prizeSet_col:true,backMan_main_raffleS_prizeSet_col_r4c1:true,backMan_main_raffleS_prizeSet_col_r4c1_size_large:attr.size==='large',backMan_main_raffleS_prizeSet_col_r4c1_size_medium:attr.size==='medium',backMan_main_raffleS_prizeSet_col_r4c1_size_small:attr.size==='small',backMan_main_raffleS_prizeSet_col_r4c1_size_min:attr.size==='min',backMan_main_raffleS_prizeSet_col_r4c1_checked:pvt_win.isChecked.r4c1,backMan_main_raffleS_prizeSet_col_r4c1_disable:attr.disabled}"
                 :style="pvt_win.style.r4c1">
                <back-man_main_raffle-s_prize-set-row
                        ref="tableRow"
                        refId="tableRow"
                        v-show="pvt_isShow.r4c1 === 'tableRow'"
                        :paraVarPair="pvt_r4c1.tableRow.paraVarPair"
                        v-for="(item, index) in pvt_r4c1.tableRow.forData"
                        :number="index"
                        :para="item.para"
                        :attr="item.attr">
                </back-man_main_raffle-s_prize-set-row>
                <lm1a-link-text
                        ref="noDataText"
                        refId="noDataText"
                        v-show="pvt_isShow.r4c1 === 'noDataText'"
                        :paraVarPair="pvt_r4c1.noDataText.paraVarPair"
                        :para="pvt_r4c1.noDataText.para"
                        :attr="pvt_r4c1.noDataText.attr">
                </lm1a-link-text>
            </div>
        </div>

        <div :class="{backMan_main_raffleS_prizeSet_mask:true,backMan_main_raffleS_prizeSet_col:true,backMan_main_raffleS_prizeSet_col_deletePrizeDiamask:true,backMan_main_raffleS_prizeSet_col_deletePrizeDiamask_size_large:attr.size==='large',backMan_main_raffleS_prizeSet_col_deletePrizeDiamask_size_medium:attr.size==='medium',backMan_main_raffleS_prizeSet_col_deletePrizeDiamask_size_small:attr.size==='small',backMan_main_raffleS_prizeSet_col_deletePrizeDiamask_size_min:attr.size==='min',backMan_main_raffleS_prizeSet_col_deletePrizeDiamask_checked:pvt_win.isChecked.deletePrizeDiamask,backMan_main_raffleS_prizeSet_col_deletePrizeDiamask_disable:attr.disabled}"
             v-if="pvt_isShow.deletePrizeDia === 'deleteDia'">
            <div :class="{backMan_main_raffleS_prizeSet_dialog:true,backMan_main_raffleS_prizeSet_col:true,backMan_main_raffleS_prizeSet_col_deletePrizeDia:true,backMan_main_raffleS_prizeSet_col_deletePrizeDia_size_large:attr.size==='large',backMan_main_raffleS_prizeSet_col_deletePrizeDia_size_medium:attr.size==='medium',backMan_main_raffleS_prizeSet_col_deletePrizeDia_size_small:attr.size==='small',backMan_main_raffleS_prizeSet_col_deletePrizeDia_size_min:attr.size==='min',backMan_main_raffleS_prizeSet_col_deletePrizeDia_checked:pvt_win.isChecked.deletePrizeDia,backMan_main_raffleS_prizeSet_col_deletePrizeDia_disable:attr.disabled}">
                <back-man_main_raffle-s_delete-dia
                        ref="deleteDia"
                        refId="deleteDia"
                        :paraVarPair="pvt_deletePrizeDia.deleteDia.paraVarPair"
                        :para="pvt_deletePrizeDia.deleteDia.para"
                        :attr="pvt_deletePrizeDia.deleteDia.attr">
                </back-man_main_raffle-s_delete-dia>
            </div>
        </div>
        <div :class="{backMan_main_raffleS_prizeSet_mask:true,backMan_main_raffleS_prizeSet_col:true,backMan_main_raffleS_prizeSet_col_prizePictureDiamask:true,backMan_main_raffleS_prizeSet_col_prizePictureDiamask_size_large:attr.size==='large',backMan_main_raffleS_prizeSet_col_prizePictureDiamask_size_medium:attr.size==='medium',backMan_main_raffleS_prizeSet_col_prizePictureDiamask_size_small:attr.size==='small',backMan_main_raffleS_prizeSet_col_prizePictureDiamask_size_min:attr.size==='min',backMan_main_raffleS_prizeSet_col_prizePictureDiamask_checked:pvt_win.isChecked.prizePictureDiamask,backMan_main_raffleS_prizeSet_col_prizePictureDiamask_disable:attr.disabled}"
             v-if="pvt_isShow.prizePictureDia === 'pictureDia'">
            <div :class="{backMan_main_raffleS_prizeSet_dialog:true,backMan_main_raffleS_prizeSet_col:true,backMan_main_raffleS_prizeSet_col_prizePictureDia:true,backMan_main_raffleS_prizeSet_col_prizePictureDia_size_large:attr.size==='large',backMan_main_raffleS_prizeSet_col_prizePictureDia_size_medium:attr.size==='medium',backMan_main_raffleS_prizeSet_col_prizePictureDia_size_small:attr.size==='small',backMan_main_raffleS_prizeSet_col_prizePictureDia_size_min:attr.size==='min',backMan_main_raffleS_prizeSet_col_prizePictureDia_checked:pvt_win.isChecked.prizePictureDia,backMan_main_raffleS_prizeSet_col_prizePictureDia_disable:attr.disabled}">
                <back-man_main_raffle-s_prize-pictur
                        ref="pictureDia"
                        refId="pictureDia"
                        :paraVarPair="pvt_prizePictureDia.pictureDia.paraVarPair"
                        :para="pvt_prizePictureDia.pictureDia.para"
                        :attr="pvt_prizePictureDia.pictureDia.attr">
                </back-man_main_raffle-s_prize-pictur>
            </div>
        </div>
    </div>
</template>
<script>
    import libSys from "@/components/baseComponent/libSys.js";
    import libUpload from "@/components/baseComponent/libUpload.js";
    import backMan_main_raffleS_prizeSetRow from "./prizeSetRow";
    import backMan_main_raffleS_deleteDia from "../../commonDialog/deleteTipDialog.vue";
    import backMan_main_raffleS_prizePictur from "./prizePictureDialog.vue";

    export default {
        components: {
            backMan_main_raffleS_prizeSetRow,
            backMan_main_raffleS_deleteDia,
            backMan_main_raffleS_prizePictur
        },
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
            number: Number,
        },
        data: function () {
            return {
                mac: mac.mac,
                pvt_subModuleMap: {
                    vessel: ["r1c1", "r2c1", "r3c1", "r3c2", "r3c3", "r3c4", "r3c5", "r3c6", "r3c7", "r4c1", "r4c1", "deletePrizeDia", "prizePictureDia"],
                    subModule: ["title", "addBtn", "tableTitle1", "tableTitle2", "tableTitle3", "tableTitle4", "tableTitle5", "tableTitle6", "tableTitle7", "tableRow", "noDataText", "deleteDia", "pictureDia"],
                },
                pvt_isShow: {
                    r1c1: null,
                    r2c1: null,
                    r3c1: null,
                    r3c2: null,
                    r3c3: null,
                    r3c4: null,
                    r3c5: null,
                    r3c6: null,
                    r3c7: null,
                    r4c1: null,
                    deletePrizeDia: null,
                    prizePictureDia: null,
                },
                pvt_win: {
                    isShow: {
                        backMan_main_raffleS_prizeSetWin: true,
                        r1c1: true,
                        r2c1: true,
                        r3c1: true,
                        r3c2: true,
                        r3c3: true,
                        r3c4: true,
                        r3c5: true,
                        r3c6: true,
                        r3c7: true,
                        r4c1: true,
                    },
                    isChecked: {
                        backMan_main_raffleS_prizeSetWin: false,
                        r1c1: false,
                        r2c1: false,
                        r3c1: false,
                        r3c2: false,
                        r3c3: false,
                        r3c4: false,
                        r3c5: false,
                        r3c6: false,
                        r3c7: false,
                        r4c1: false,
                    },
                    style: {
                        backMan_main_raffleS_prizeSetWin: null,
                        r1c1: null,
                        r2c1: null,
                        r3c1: null,
                        r3c2: null,
                        r3c3: null,
                        r3c4: null,
                        r3c5: null,
                        r3c6: null,
                        r3c7: null,
                        r4c1: null,
                    },
                },
                pvt_eventPortInput: [],

                prizeId: null,
                prizeType: 0,
                prizeIdArr: [],
                typeArr: [],
                classArr: [],
                sizeArr: [],
                deleteType: 0,

                delIndex: null
            };
        },
        watch: {},
        computed: {
            pvt_r1c1: function () {
                return {
                    title: {
                        paraVarPair: {},
                        para: {
                            textData: "奖励池设置",
                        },
                        attr: {
                            label: "div",
                            fontWeight: 400,
                            color: "#000",
                            fontSize: "16px",
                        },
                    },
                };
            },
            pvt_r2c1: function () {
                return {
                    addBtn: {
                        paraVarPair: {},
                        para: {
                            name: ["添加", "el-icon-plus"],
                        },
                        attr: {
                            // round: true,
                            size: "mini",
                        },
                    },
                };
            },
            pvt_r3c1: function () {
                return {
                    tableTitle1: {
                        paraVarPair: {},
                        para: {
                            textData: "奖项类别",
                        },
                        attr: {
                            label: "div",
                            textAlign: "center",
                            color: "#000",
                            fontSize: "12px",
                        },
                    },
                };
            },
            pvt_r3c2: function () {
                return {
                    tableTitle2: {
                        paraVarPair: {},
                        para: {
                            textData: "奖品",
                        },
                        attr: {
                            label: "div",
                            textAlign: "center",
                            color: "#000",
                            fontSize: "12px",
                        },
                    },
                };
            },
            pvt_r3c3: function () {
                return {
                    tableTitle3: {
                        paraVarPair: {},
                        para: {
                            textData: "数量",
                        },
                        attr: {
                            label: "div",
                            textAlign: "center",
                            color: "#000",
                            fontSize: "12px",
                        },
                    },
                };
            },
            pvt_r3c4: function () {
                return {
                    tableTitle4: {
                        paraVarPair: {},
                        para: {
                            textData: "图片(静态)",
                        },
                        attr: {
                            label: "div",
                            textAlign: "center",
                            color: "#000",
                            fontSize: "12px",
                        },
                    },
                };
            },
            pvt_r3c5: function () {
                return {
                    tableTitle5: {
                        paraVarPair: {},
                        para: {
                            textData: "图片(被选中)",
                        },
                        attr: {
                            label: "div",
                            textAlign: "center",
                            color: "#000",
                            fontSize: "12px",
                        },
                    },
                };
            },
            pvt_r3c6: function () {
                return {
                    tableTitle6: {
                        paraVarPair: {},
                        para: {
                            textData: "图片(中奖)",
                        },
                        attr: {
                            label: "div",
                            textAlign: "center",
                            color: "#000",
                            fontSize: "12px",
                        },
                    },
                };
            },
            pvt_r3c7: function () {
                return {
                    tableTitle7: {
                        paraVarPair: {},
                        para: {
                            textData: "操作",
                        },
                        attr: {
                            label: "div",
                            textAlign: "center",
                            color: "#000",
                            fontSize: "12px",
                        },
                    },
                };
            },
            pvt_r4c1: function () {
                let loopModule = {
                    tableRow: {
                        para: {
                            prizeId: this.prizeIdArr,
                            type: this.typeArr,
                            checkedClassArr: this.classArr,
                        },
                        attr: {
                            size: this.sizeArr,
                        },
                    },
                };
                let forData = this.pvt_createForData(loopModule);
                return {
                    tableRow: {
                        paraVarPair: {
                            prizeId: "prizeIdArr",
                            type: "typeArr",
                            checkedClassArr: "classArr",
                        },
                        forData: forData.tableRow,
                    },
                    noDataText: {
                        paraVarPair: {},
                        para: {
                            textData: "无数据...",
                        },
                        attr: {
                            label: "div",
                            textAlign: "center",
                            height: "40px",
                            color: "#000",
                            fontSize: "14px",
                        },
                    },
                };
            },
            pvt_deletePrizeDia: function () {
                return {
                    deleteDia: {
                        paraVarPair: {
                            type: "deleteType",
                        },
                        para: {
                            type: this.deleteType,
                        },
                        attr: {
                            size: "medium",
                        },
                    },
                };
            },
            pvt_prizePictureDia: function () {
                return {
                    pictureDia: {
                        paraVarPair: {
                            prizeId: "prizeId",
                            type: "prizeType",
                        },
                        para: {
                            prizeId: this.prizeId,
                            type: this.prizeType,
                        },
                        attr: {
                            size: "medium",
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
            addBtn_buttonClickEvent: function () {
                this.addPrize();
            },
            tableRow_showImageEvent: function (number, type) {
                this.showImage(number, type);
            },
            tableRow_deletePrizeEvent: function (index) {
                this.deletePrize(index);
            },
            tableRow_recordEditEvent: function () {
                this.otherRecordSave();
            },
            deleteDia_confirmDeleteEvent: function () {
                this.confirmDelete();
            },

            // 方法
            startModule: function (successCallBack, errorCallBack) {
                let $this = this, para, dbFlag, data, tableVariable, condition, record;
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
                            console.log("prizeSet startModule: para.nStep = " + para.nStep);
                            para.nStepOld = para.nStep;
                        }
                    }
                    switch (para.nStep) {
                        case 0:
                        case "setSubModuleShow":
                            $this.showSubModule(["title", "addBtn", "tableTitle1", "tableTitle2", "tableTitle3", "tableTitle4", "tableTitle5", "tableTitle6", "tableTitle7", "tableRow"], true, function () {
                                para.nStep = "title_startModule";
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case "title_startModule":
                            $this.sm.title.startModule(function () {
                                para.nStep = "addBtn_startModule";
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case "addBtn_startModule":
                            $this.sm.addBtn.startModule(function () {
                                para.nStep = "tableTitle1_startModule";
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case "tableTitle1_startModule":
                            $this.sm.tableTitle1.startModule(function () {
                                para.nStep = "tableTitle2_startModule";
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case "tableTitle2_startModule":
                            $this.sm.tableTitle2.startModule(function () {
                                para.nStep = "tableTitle3_startModule";
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case "tableTitle3_startModule":
                            $this.sm.tableTitle3.startModule(function () {
                                para.nStep = "tableTitle4_startModule";
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case "tableTitle4_startModule":
                            $this.sm.tableTitle4.startModule(function () {
                                para.nStep = "tableTitle5_startModule";
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case "tableTitle5_startModule":
                            $this.sm.tableTitle5.startModule(function () {
                                para.nStep = "tableTitle6_startModule";
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case "tableTitle6_startModule":
                            $this.sm.tableTitle6.startModule(function () {
                                para.nStep = "tableTitle7_startModule";
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case "tableTitle7_startModule":
                            $this.sm.tableTitle7.startModule(function () {
                                para.nStep = "query_prize";
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case "query_prize":
                            tableVariable = [{
                                $table: $this.mac.tb.prize,
                                $arrField: null,
                                $arrValue: null,
                                $arrSubTab: []
                            }];
                            condition = {
                                [$this.mac.tb.prize]: null
                            };
                            $this.sys.api.recordQuery(tableVariable, condition, function () {
                                para.prizeRecord = tableVariable[0].$arrValue;
                                para.nStep = "read_prize";
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case "read_prize":
                            record = {
                                id: para.prizeRecord,
                                table: $this.mac.tb.prize,
                                field: null
                            };
                            data = {};
                            $this.sys.api.recordRead(null, null, record, data, function () {
                                if (para.prizeRecord.length === 0) {
                                    para.showSubModule = "noDataText";
                                } else {
                                    let classEnum = [$this.mac.enum.prize.class.level_1, $this.mac.enum.prize.class.level_2, $this.mac.enum.prize.class.level_3, $this.mac.enum.prize.class.encourage];
                                    classEnum = classEnum.filter((v, i) => {
                                        if (i === 3) {
                                            return true
                                        }
                                        return !data[$this.mac.fd.prize.class].includes(v)
                                    });

                                    $this.prizeIdArr = para.prizeRecord;
                                    $this.typeArr = new Array(para.prizeRecord.length).fill(0);
                                    $this.classArr = new Array(para.prizeRecord.length).fill(classEnum);
                                    $this.sizeArr = new Array(para.prizeRecord.length).fill("mini");
                                    para.showSubModule = "tableRow";
                                }
                                para.nStep = "showSubModule";
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case "showSubModule":
                            $this.showSubModule(para.showSubModule, true, function () {
                                para.nStep = $this.prizeIdArr.length === 0 ? "noDataText_startModule" : "forceUpdateData";
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case "noDataText_startModule":
                            $this.sm.noDataText.startModule(function () {
                                para.nStep = "end";
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case "forceUpdateData":
                            $this.forceUpdateData(function () {
                                para.i = 0;
                                para.nStep = "loop_tableRow_startModule";
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            });
                            break;
                        case "loop_tableRow_startModule":
                            if (para.i === $this.prizeIdArr.length) {
                                para.nStep = "end";
                                dbFlag++;
                                break;
                            }
                            $this.sm.tableRow[para.i].startModule(function () {
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
            addPrize: function (successCallBack, errorCallBack) {
                let $this = this, para, dbFlag, data;
                if (successCallBack === undefined) {
                    successCallBack = function () {

                    };
                    errorCallBack = function (error) {
                        console.log(error)
                    }
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
                            console.log("prizeSet startModule: para.nStep = " + para.nStep);
                            para.nStepOld = para.nStep;
                        }
                    }
                    switch (para.nStep) {
                        case 0:
                        case "otherRecordSave":
                            $this.otherRecordSave();
                        case "setModuleShow":
                            if ($this.prizeIdArr.length === 0) {
                                $this.showSubModule("noDataText", false, function () {
                                    $this.showSubModule("tableRow", true, function () {
                                        para.nStep = "recordNew";
                                        if (++dbFlag === 2) {
                                            $this.addPrize(successCallBack, errorCallBack)
                                        }
                                    }, para.errorCallBack);
                                }, para.errorCallBack);
                                break;
                            }
                        case "recordNew":
                            data = {
                                [$this.mac.fd.prize.class]: [null]
                            };
                            let classEnum;
                            if ($this.prizeIdArr.length === 0) {
                                classEnum = [$this.mac.enum.prize.class.level_1, $this.mac.enum.prize.class.level_2, $this.mac.enum.prize.class.level_3, $this.mac.enum.prize.class.encourage];
                            } else {
                                classEnum = $this.classArr[0]
                            }
                            $this.sys.api.recordNew(null, null, $this.mac.tb.prize, data, function (result) {
                                $this.prizeIdArr.push(result.record[0][0]);
                                $this.typeArr.push(1);
                                $this.classArr.push(classEnum);
                                $this.sizeArr.push("mini");
                                para.nStep = "forceUpdateData";
                                if (++dbFlag === 2) {
                                    $this.addPrize(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case "forceUpdateData":
                            $this.forceUpdateData(function () {
                                para.nStep = "tableRow_startModule";
                                if (++dbFlag === 2) {
                                    $this.addPrize(successCallBack, errorCallBack)
                                }
                            });
                            break;
                        case "tableRow_startModule":
                            $this.sm.tableRow[$this.typeArr.length - 1].startModule(function () {
                                para.nStep = "end";
                                if (++dbFlag === 2) {
                                    $this.addPrize(successCallBack, errorCallBack)
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
            deletePrize: function (index) {
                let $this = this;
                $this.delIndex = index;
                $this.showSubModule("deleteDia", true, function () {
                    $this.deleteType = 0;
                    $this.forceUpdateData(function () {
                        $this.sm.deleteDia.startModule(function () {

                        }, function (error) {
                            console.log(error)
                        })
                    });
                });
            },
            showImage: function (index, type) {
                let $this = this;
                $this.showSubModule("pictureDia", true, function () {
                    $this.prizeId = $this.prizeIdArr[index];
                    $this.prizeType = type;
                    $this.forceUpdateData(function () {
                        $this.sm.pictureDia.startModule(function () {

                        }, function (error) {
                            console.log(error)
                        })
                    });
                });
            },
            confirmDelete: function (successCallBack, errorCallBack) {
                let $this = this, para, dbFlag;
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
                            console.log("prizeSet confirmDelete: para.nStep = " + para.nStep);
                            para.nStepOld = para.nStep;
                        }
                    }
                    switch (para.nStep) {
                        case 0:
                        case "recordDelete":
                            let delRecord = {
                                id: [$this.prizeIdArr[$this.delIndex]],
                                table: $this.mac.tb.prize
                            };
                            $this.sys.api.recordDelete(null, null, delRecord, function () {
                              $this.showTipText('删除成功');
                                para.nStep = "uploadData";
                                if (++dbFlag === 2) {
                                    $this.confirmDelete(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case "uploadData":
                          let tableVariable = [{
                            $table:$this.mac.tb.prize,
                            $arrField:null,
                            $arrValue:[$this.prizeIdArr[$this.delIndex]],
                            $arrSubTab:[]
                          }];
                          $this.sys.api.dataOutput(tableVariable,null,function(){
                            para.nStep = "forceUpdateData";
                            if (++dbFlag === 2) {
                              $this.confirmDelete(successCallBack, errorCallBack);
                            }
                          },function(error){console.log(error)});
                            break;
                        case "forceUpdateData":
                            $this.prizeIdArr.splice($this.delIndex, 1);
                            $this.typeArr.splice($this.delIndex, 1);
                            $this.classArr.splice($this.delIndex, 1);
                            $this.sizeArr.splice($this.delIndex, 1);

                            para.prizeIdArr = $this.prizeIdArr.slice();
                            para.typeArr = $this.typeArr.slice();
                            para.classArr = $this.classArr.slice();
                            para.sizeArr = $this.sizeArr.slice();

                            $this.prizeIdArr = [];
                            $this.typeArr = [];
                            $this.classArr = [];
                            $this.sizeArr = [];

                            $this.forceUpdateData(function () {
                                para.nStep = "forceUpdateData1";
                                if (++dbFlag === 2) {
                                    $this.confirmDelete(successCallBack, errorCallBack);
                                }
                            });
                            break;
                        case "forceUpdateData1":
                            $this.prizeIdArr = para.prizeIdArr;
                            $this.typeArr = para.typeArr;
                            $this.classArr = para.classArr;
                            $this.sizeArr = para.sizeArr;
                            $this.forceUpdateData(function () {
                                para.i = 0;
                                para.nStep = "loop_startModule";
                                if (++dbFlag === 2) {
                                    $this.confirmDelete(successCallBack, errorCallBack);
                                }
                            });
                            break;
                        case "loop_startModule":
                            if (para.i === $this.sm.tableRow.length) {
                                para.nStep = "end";
                                dbFlag++;
                                break;
                            }
                            $this.sm.tableRow[para.i].startModule(function () {
                                para.i++;
                                if (++dbFlag === 2) {
                                    $this.confirmDelete(successCallBack, errorCallBack);
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

            otherRecordSave: function () {
                let $this = this;
                for (let i = 0; i < $this.typeArr.length; i++) {
                    if ($this.typeArr[i] === 1) {
                        $this.sm.tableRow[i].handleTypeChange(function () {

                        }, function (error) {
                            console.log(error)
                        })
                    }
                }
            },
          showTipText:function(text){
            //显示一个提示信息
            var tipText = document.getElementById('tipText');
            if(tipText){
              tipText.remove();
            }
            //清空对象
            if (this.myTimeOut) {
              window.clearTimeout(this.myTimeOut);
            }
            var div = document.createElement('div');
            div.id = "tipText";
            div.style = "display:inline-block;padding:12px 20px;background-color:#4C4C4C;font-size:12px;border-radius:4px;position:fixed;top:50%;left:50%;transform: translate(-50%, -50%);z-index:2010";
            div.innerHTML = '<span style="color:#fff;">'
              + '<i class="el-icon-success" style="color:#67C23A;margin-right:5px;"></i>' +
              text +
              '</span>';
            document.body.appendChild(div);
            this.myTimeOut = window.setTimeout(function(){
              var tipText = document.getElementById('tipText');
              tipText.remove();
            },2000);
          },
        },
    };
</script>
<style lang="scss" scoped>
    .backMan_main_raffleS_prizeSet_container {
        width: 100%;
        height: 100%;
    }

    .backMan_main_raffleS_prizeSet_mask {
        display: flex;
        position: fixed !important;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, .4);
        z-index: 9;
    }

    .backMan_main_raffleS_prizeSet_dialog {
        position: absolute;
        left: 50%;
        top: 50%;
        margin-top: -100px;
        margin-left: -200px;
    }

    .backMan_main_raffleS_prizeSet_overlay {
        position: absolute;
        left: 0;
        top: 0;
    }

    .backMan_main_raffleS_prizeSet_row {
        display: flex;
    }

    .backMan_main_raffleS_prizeSet_col {
        position: relative;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
    }

    .backMan_main_raffleS_prizeSet_col_backMan_main_raffleS_prizeSetWin_size_medium {
        width: $backMan_main_raffleS_prizeSet-backMan_main_raffleS_prizeSetWin-medium-width;
        height: $backMan_main_raffleS_prizeSet-backMan_main_raffleS_prizeSetWin-medium-height;
    }

    .backMan_main_raffleS_prizeSet_col_r1c1_size_medium {
        width: $backMan_main_raffleS_prizeSet-r1c1-medium-width;
        line-height: $backMan_main_raffleS_prizeSet-r1c1-medium-line-height;
    }

    .backMan_main_raffleS_prizeSet_col_r2c1_size_medium {
        width: $backMan_main_raffleS_prizeSet-r2c1-medium-width;
        height: $backMan_main_raffleS_prizeSet-r2c1-medium-height;
        justify-content: $backMan_main_raffleS_prizeSet-r2c1-medium-vertical-position;
        align-items: $backMan_main_raffleS_prizeSet-r2c1-medium-horizontal-position;
    }

    .backMan_main_raffleS_prizeSet_col_r3c1_size_medium {
        width: $backMan_main_raffleS_prizeSet-r3c1-medium-width;
        height: $backMan_main_raffleS_prizeSet-r3c1-medium-height;
        line-height: $backMan_main_raffleS_prizeSet-r3c1-medium-line-height;
    }

    .backMan_main_raffleS_prizeSet_col_r3c1 {
        border-style: $backMan_main_raffleS_prizeSet-r3c1-border-style;
        border-width: $backMan_main_raffleS_prizeSet-r3c1-border-width;
        border-color: mix($backMan_main_raffleS_prizeSet-r3c1-border-color, #fff, $backMan_main_raffleS_prizeSet-r3c1-hover-border-color-opacity);
        /* background-color: mix($backMan_main_raffleS_prizeSet-r3c1-background-color, #fff, $backMan_main_raffleS_prizeSet-r3c1-background-color-opacity); */
        background-color: #f4f4f4;
    }

    .backMan_main_raffleS_prizeSet_col_r3c2_size_medium {
        width: $backMan_main_raffleS_prizeSet-r3c2-medium-width;
        height: $backMan_main_raffleS_prizeSet-r3c2-medium-height;
        line-height: $backMan_main_raffleS_prizeSet-r3c2-medium-line-height;
    }

    .backMan_main_raffleS_prizeSet_col_r3c2 {
        border-style: $backMan_main_raffleS_prizeSet-r3c2-border-style;
        border-width: $backMan_main_raffleS_prizeSet-r3c2-border-width;
        border-color: mix($backMan_main_raffleS_prizeSet-r3c2-border-color, #fff, $backMan_main_raffleS_prizeSet-r3c2-hover-border-color-opacity);
        /*background-color: mix($backMan_main_raffleS_prizeSet-r3c2-background-color, #fff, $backMan_main_raffleS_prizeSet-r3c2-background-color-opacity);*/
        background-color: #f4f4f4;
    }

    .backMan_main_raffleS_prizeSet_col_r3c3_size_medium {
        width: $backMan_main_raffleS_prizeSet-r3c3-medium-width;
        height: $backMan_main_raffleS_prizeSet-r3c3-medium-height;
        line-height: $backMan_main_raffleS_prizeSet-r3c3-medium-line-height;
    }

    .backMan_main_raffleS_prizeSet_col_r3c3 {
        border-style: $backMan_main_raffleS_prizeSet-r3c3-border-style;
        border-width: $backMan_main_raffleS_prizeSet-r3c3-border-width;
        border-color: mix($backMan_main_raffleS_prizeSet-r3c3-border-color, #fff, $backMan_main_raffleS_prizeSet-r3c3-hover-border-color-opacity);
        /*background-color: mix($backMan_main_raffleS_prizeSet-r3c3-background-color, #fff, $backMan_main_raffleS_prizeSet-r3c3-background-color-opacity);*/
        background-color: #f4f4f4;
    }

    .backMan_main_raffleS_prizeSet_col_r3c4_size_medium {
        width: $backMan_main_raffleS_prizeSet-r3c4-medium-width;
        height: $backMan_main_raffleS_prizeSet-r3c4-medium-height;
        line-height: $backMan_main_raffleS_prizeSet-r3c4-medium-line-height;
    }

    .backMan_main_raffleS_prizeSet_col_r3c4 {
        border-style: $backMan_main_raffleS_prizeSet-r3c4-border-style;
        border-width: $backMan_main_raffleS_prizeSet-r3c4-border-width;
        border-color: mix($backMan_main_raffleS_prizeSet-r3c4-border-color, #fff, $backMan_main_raffleS_prizeSet-r3c4-hover-border-color-opacity);
        /*background-color: mix($backMan_main_raffleS_prizeSet-r3c4-background-color, #fff, $backMan_main_raffleS_prizeSet-r3c4-background-color-opacity);*/
        background-color: #f4f4f4;
    }

    .backMan_main_raffleS_prizeSet_col_r3c5_size_medium {
        width: $backMan_main_raffleS_prizeSet-r3c5-medium-width;
        height: $backMan_main_raffleS_prizeSet-r3c5-medium-height;
        line-height: $backMan_main_raffleS_prizeSet-r3c5-medium-line-height;
    }

    .backMan_main_raffleS_prizeSet_col_r3c5 {
        border-style: $backMan_main_raffleS_prizeSet-r3c5-border-style;
        border-width: $backMan_main_raffleS_prizeSet-r3c5-border-width;
        border-color: mix($backMan_main_raffleS_prizeSet-r3c5-border-color, #fff, $backMan_main_raffleS_prizeSet-r3c5-hover-border-color-opacity);
        /*background-color: mix($backMan_main_raffleS_prizeSet-r3c5-background-color, #fff, $backMan_main_raffleS_prizeSet-r3c5-background-color-opacity);*/
        background-color: #f4f4f4;
    }

    .backMan_main_raffleS_prizeSet_col_r3c6_size_medium {
        width: $backMan_main_raffleS_prizeSet-r3c6-medium-width;
        height: $backMan_main_raffleS_prizeSet-r3c6-medium-height;
        line-height: $backMan_main_raffleS_prizeSet-r3c6-medium-line-height;
    }

    .backMan_main_raffleS_prizeSet_col_r3c6 {
        border-style: $backMan_main_raffleS_prizeSet-r3c6-border-style;
        border-width: $backMan_main_raffleS_prizeSet-r3c6-border-width;
        border-color: mix($backMan_main_raffleS_prizeSet-r3c6-border-color, #fff, $backMan_main_raffleS_prizeSet-r3c6-hover-border-color-opacity);
        /*background-color: mix($backMan_main_raffleS_prizeSet-r3c6-background-color, #fff, $backMan_main_raffleS_prizeSet-r3c6-background-color-opacity);*/
        background-color: #f4f4f4;
    }

    .backMan_main_raffleS_prizeSet_col_r3c7_size_medium {
        /*width: $backMan_main_raffleS_prizeSet-r3c7-medium-width;*/
        width: calc(100% - 84%);
        height: $backMan_main_raffleS_prizeSet-r3c7-medium-height;
        line-height: $backMan_main_raffleS_prizeSet-r3c7-medium-line-height;
        padding: $backMan_main_raffleS_prizeSet-r3c7-medium-padding;
    }

    .backMan_main_raffleS_prizeSet_col_r3c7 {
        border-style: $backMan_main_raffleS_prizeSet-r3c7-border-style;
        border-width: $backMan_main_raffleS_prizeSet-r3c7-border-width;
        border-color: mix($backMan_main_raffleS_prizeSet-r3c7-border-color, #fff, $backMan_main_raffleS_prizeSet-r3c7-hover-border-color-opacity);
        /*background-color: mix($backMan_main_raffleS_prizeSet-r3c7-background-color, #fff, $backMan_main_raffleS_prizeSet-r3c7-background-color-opacity);*/
        background-color: #f4f4f4;
    }

    .backMan_main_raffleS_prizeSet_row_row3{
        height: calc(100% - 116px);
        align-items: flex-start;
    }
    .backMan_main_raffleS_prizeSet_col_r4c1_size_medium {
        width: $backMan_main_raffleS_prizeSet-r4c1-medium-width;
        max-height: 100%;
        box-sizing: border-box;
        overflow-y: auto;
        overflow-x: hidden;
    }

    .backMan_main_raffleS_prizeSet_col_r4c1 {
        border-color: mix($backMan_main_raffleS_prizeSet-r4c1-border-color, #fff, $backMan_main_raffleS_prizeSet-r4c1-hover-border-color-opacity);
        border-style: $backMan_main_raffleS_prizeSet-r4c1-border-style;
        border-width: $backMan_main_raffleS_prizeSet-r4c1-border-width;
        border-radius: $backMan_main_raffleS_prizeSet-r4c1-border-radius;
    }

    .backMan_main_raffleS_prizeSet_col_prizePictureDia_size_medium {
        width: $backMan_main_raffleS_prizeSet-prizePictureDia-medium-width;
        height: $backMan_main_raffleS_prizeSet-prizePictureDia-medium-height;
        margin-top: -150px !important;
        /*overflow: hidden;*/
    }

    .backMan_main_raffleS_prizeSet_col_deletePrizeDia_size_medium {
        width: $backMan_main_raffleS_prizeSet-deletePrizeDia-medium-width;
        height: $backMan_main_raffleS_prizeSet-deletePrizeDia-medium-height;
    }

    .backMan_main_raffleS_prizeSet_col_deletePrizeDia {
        border-radius: $backMan_main_raffleS_prizeSet-deletePrizeDia-border-radius;
        border-style: $backMan_main_raffleS_prizeSet-deletePrizeDia-border-style;
        border-width: $backMan_main_raffleS_prizeSet-deletePrizeDia-border-width;
        border-color: mix($backMan_main_raffleS_prizeSet-deletePrizeDia-border-color, #fff, $backMan_main_raffleS_prizeSet-deletePrizeDia-hover-border-color-opacity);
        background-color: #fff;
    }
</style>
