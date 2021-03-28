<template>
    <div v-show="pvt_win.isShow.backMan_main_raffleS_raffleRecor"
         :class="{backMan_main_raffleS_raffleRecor_container:true,backMan_main_raffleS_raffleRecor_col:true,backMan_main_raffleS_raffleRecor_col_backMan_main_raffleS_raffleRecor:true,backMan_main_raffleS_raffleRecor_col_backMan_main_raffleS_raffleRecor_size_large:attr.size==='large',backMan_main_raffleS_raffleRecor_col_backMan_main_raffleS_raffleRecor_size_medium:attr.size==='medium',backMan_main_raffleS_raffleRecor_col_backMan_main_raffleS_raffleRecor_size_small:attr.size==='small',backMan_main_raffleS_raffleRecor_col_backMan_main_raffleS_raffleRecor_size_min:attr.size==='min',backMan_main_raffleS_raffleRecor_col_backMan_main_raffleS_raffleRecor_checked:pvt_win.isChecked.backMan_main_raffleS_raffleRecor,backMan_main_raffleS_raffleRecor_col_backMan_main_raffleS_raffleRecor_disable:attr.disabled}"
         :style="pvt_win.style.backMan_main_raffleS_raffleRecor">

        <div class="backMan_main_raffleS_raffleRecor_row backMan_main_raffleS_raffleRecor_row_row0">
            <div v-show="pvt_win.isShow.r1c1"
                 :class="{backMan_main_raffleS_raffleRecor_col:true,backMan_main_raffleS_raffleRecor_col_r1c1:true,backMan_main_raffleS_raffleRecor_col_r1c1_size_large:attr.size==='large',backMan_main_raffleS_raffleRecor_col_r1c1_size_medium:attr.size==='medium',backMan_main_raffleS_raffleRecor_col_r1c1_size_small:attr.size==='small',backMan_main_raffleS_raffleRecor_col_r1c1_size_min:attr.size==='min',backMan_main_raffleS_raffleRecor_col_r1c1_checked:pvt_win.isChecked.r1c1,backMan_main_raffleS_raffleRecor_col_r1c1_disable:attr.disabled}"
                 :style="pvt_win.style.r1c1">

                <lm1a-button
                        ref="deleteCheckeds"
                        refId="deleteCheckeds"
                        v-show="pvt_isShow.r1c1 === 'deleteCheckeds'"
                        :paraVarPair="pvt_r1c1.deleteCheckeds.paraVarPair"
                        :para="pvt_r1c1.deleteCheckeds.para"
                        :attr="pvt_r1c1.deleteCheckeds.attr">
                </lm1a-button>
            </div>
        </div>
        <div class="backMan_main_raffleS_raffleRecor_row backMan_main_raffleS_raffleRecor_row_row1">
            <div v-show="pvt_win.isShow.r2c1"
                 :class="{backMan_main_raffleS_raffleRecor_col:true,backMan_main_raffleS_raffleRecor_col_r2c1:true,backMan_main_raffleS_raffleRecor_col_r2c1_size_large:attr.size==='large',backMan_main_raffleS_raffleRecor_col_r2c1_size_medium:attr.size==='medium',backMan_main_raffleS_raffleRecor_col_r2c1_size_small:attr.size==='small',backMan_main_raffleS_raffleRecor_col_r2c1_size_min:attr.size==='min',backMan_main_raffleS_raffleRecor_col_r2c1_checked:pvt_win.isChecked.r2c1,backMan_main_raffleS_raffleRecor_col_r2c1_disable:attr.disabled}"
                 :style="pvt_win.style.r2c1">

                <lm1a-checkbox
                        ref="title1"
                        refId="title1"
                        v-show="pvt_isShow.r2c1 === 'title1'"
                        :paraVarPair="pvt_r2c1.title1.paraVarPair"
                        :para="pvt_r2c1.title1.para"
                        :attr="pvt_r2c1.title1.attr">
                </lm1a-checkbox>
            </div>
            <div v-show="pvt_win.isShow.r2c2"
                 :class="{backMan_main_raffleS_raffleRecor_col:true,backMan_main_raffleS_raffleRecor_col_r2c2:true,backMan_main_raffleS_raffleRecor_col_r2c2_size_large:attr.size==='large',backMan_main_raffleS_raffleRecor_col_r2c2_size_medium:attr.size==='medium',backMan_main_raffleS_raffleRecor_col_r2c2_size_small:attr.size==='small',backMan_main_raffleS_raffleRecor_col_r2c2_size_min:attr.size==='min',backMan_main_raffleS_raffleRecor_col_r2c2_checked:pvt_win.isChecked.r2c2,backMan_main_raffleS_raffleRecor_col_r2c2_disable:attr.disabled}"
                 :style="pvt_win.style.r2c2">

                <lm1a-link-text
                        ref="title2"
                        refId="title2"
                        v-show="pvt_isShow.r2c2 === 'title2'"
                        :paraVarPair="pvt_r2c2.title2.paraVarPair"
                        :para="pvt_r2c2.title2.para"
                        :attr="pvt_r2c2.title2.attr">
                </lm1a-link-text>
            </div>
            <div v-show="pvt_win.isShow.r2c3"
                 :class="{backMan_main_raffleS_raffleRecor_col:true,backMan_main_raffleS_raffleRecor_col_r2c3:true,backMan_main_raffleS_raffleRecor_col_r2c3_size_large:attr.size==='large',backMan_main_raffleS_raffleRecor_col_r2c3_size_medium:attr.size==='medium',backMan_main_raffleS_raffleRecor_col_r2c3_size_small:attr.size==='small',backMan_main_raffleS_raffleRecor_col_r2c3_size_min:attr.size==='min',backMan_main_raffleS_raffleRecor_col_r2c3_checked:pvt_win.isChecked.r2c3,backMan_main_raffleS_raffleRecor_col_r2c3_disable:attr.disabled}"
                 :style="pvt_win.style.r2c3">

                <lm1a-link-text
                        ref="title3"
                        refId="title3"
                        v-show="pvt_isShow.r2c3 === 'title3'"
                        :paraVarPair="pvt_r2c3.title3.paraVarPair"
                        :para="pvt_r2c3.title3.para"
                        :attr="pvt_r2c3.title3.attr">
                </lm1a-link-text>
            </div>
            <div v-show="pvt_win.isShow.r2c4"
                 :class="{backMan_main_raffleS_raffleRecor_col:true,backMan_main_raffleS_raffleRecor_col_r2c4:true,backMan_main_raffleS_raffleRecor_col_r2c4_size_large:attr.size==='large',backMan_main_raffleS_raffleRecor_col_r2c4_size_medium:attr.size==='medium',backMan_main_raffleS_raffleRecor_col_r2c4_size_small:attr.size==='small',backMan_main_raffleS_raffleRecor_col_r2c4_size_min:attr.size==='min',backMan_main_raffleS_raffleRecor_col_r2c4_checked:pvt_win.isChecked.r2c4,backMan_main_raffleS_raffleRecor_col_r2c4_disable:attr.disabled}"
                 :style="pvt_win.style.r2c4">

                <lm1a-link-text
                        ref="title4"
                        refId="title4"
                        v-show="pvt_isShow.r2c4 === 'title4'"
                        :paraVarPair="pvt_r2c4.title4.paraVarPair"
                        :para="pvt_r2c4.title4.para"
                        :attr="pvt_r2c4.title4.attr">
                </lm1a-link-text>
            </div>
            <div v-show="pvt_win.isShow.r2c5"
                 :class="{backMan_main_raffleS_raffleRecor_col:true,backMan_main_raffleS_raffleRecor_col_r2c5:true,backMan_main_raffleS_raffleRecor_col_r2c5_size_large:attr.size==='large',backMan_main_raffleS_raffleRecor_col_r2c5_size_medium:attr.size==='medium',backMan_main_raffleS_raffleRecor_col_r2c5_size_small:attr.size==='small',backMan_main_raffleS_raffleRecor_col_r2c5_size_min:attr.size==='min',backMan_main_raffleS_raffleRecor_col_r2c5_checked:pvt_win.isChecked.r2c5,backMan_main_raffleS_raffleRecor_col_r2c5_disable:attr.disabled}"
                 :style="pvt_win.style.r2c5">

                <lm1a-link-text
                        ref="title5"
                        refId="title5"
                        v-show="pvt_isShow.r2c5 === 'title5'"
                        :paraVarPair="pvt_r2c5.title5.paraVarPair"
                        :para="pvt_r2c5.title5.para"
                        :attr="pvt_r2c5.title5.attr">
                </lm1a-link-text>
            </div>
        </div>
        <div class="backMan_main_raffleS_raffleRecor_row backMan_main_raffleS_raffleRecor_row_row2">
            <div v-show="pvt_win.isShow.r3c1"
                 :class="{backMan_main_raffleS_raffleRecor_col:true,backMan_main_raffleS_raffleRecor_col_r3c1:true,backMan_main_raffleS_raffleRecor_col_r3c1_size_large:attr.size==='large',backMan_main_raffleS_raffleRecor_col_r3c1_size_medium:attr.size==='medium',backMan_main_raffleS_raffleRecor_col_r3c1_size_small:attr.size==='small',backMan_main_raffleS_raffleRecor_col_r3c1_size_min:attr.size==='min',backMan_main_raffleS_raffleRecor_col_r3c1_checked:pvt_win.isChecked.r3c1,backMan_main_raffleS_raffleRecor_col_r3c1_disable:attr.disabled}"
                 :style="pvt_win.style.r3c1">
                <back-man_main_raffle-s_raffle-rec-ro
                        ref="tableRow"
                        refId="tableRow"
                        v-show="pvt_isShow.r3c1 === 'tableRow'"
                        :paraVarPair="pvt_r3c1.tableRow.paraVarPair"
                        v-for="(item, index) in pvt_r3c1.tableRow.forData"
                        :number="index"
                        :para="item.para"
                        :attr="item.attr">
                </back-man_main_raffle-s_raffle-rec-ro>
                <lm1a-link-text
                        ref="noDataText"
                        refId="noDataText"
                        v-show="pvt_isShow.r3c1 === 'noDataText'"
                        :paraVarPair="pvt_r3c1.noDataText.paraVarPair"
                        :para="pvt_r3c1.noDataText.para"
                        :attr="pvt_r3c1.noDataText.attr">
                </lm1a-link-text>
            </div>
        </div>

        <div :class="{backMan_main_raffleS_raffleRecor_mask:true,backMan_main_raffleS_raffleRecor_col:true,backMan_main_raffleS_raffleRecor_col_deleteDiamask:true,backMan_main_raffleS_raffleRecor_col_deleteDiamask_size_large:attr.size==='large',backMan_main_raffleS_raffleRecor_col_deleteDiamask_size_medium:attr.size==='medium',backMan_main_raffleS_raffleRecor_col_deleteDiamask_size_small:attr.size==='small',backMan_main_raffleS_raffleRecor_col_deleteDiamask_size_min:attr.size==='min',backMan_main_raffleS_raffleRecor_col_deleteDiamask_checked:pvt_win.isChecked.deleteDiamask,backMan_main_raffleS_raffleRecor_col_deleteDiamask_disable:attr.disabled}"
             v-if="pvt_isShow.deleteDia === 'deleteLuckyDia'">
            <div :class="{backMan_main_raffleS_raffleRecor_dialog:true,backMan_main_raffleS_raffleRecor_col:true,backMan_main_raffleS_raffleRecor_col_deleteDia:true,backMan_main_raffleS_raffleRecor_col_deleteDia_size_large:attr.size==='large',backMan_main_raffleS_raffleRecor_col_deleteDia_size_medium:attr.size==='medium',backMan_main_raffleS_raffleRecor_col_deleteDia_size_small:attr.size==='small',backMan_main_raffleS_raffleRecor_col_deleteDia_size_min:attr.size==='min',backMan_main_raffleS_raffleRecor_col_deleteDia_checked:pvt_win.isChecked.deleteDia,backMan_main_raffleS_raffleRecor_col_deleteDia_disable:attr.disabled}">
                <back-man_main_raffle-s_delete-dia
                        ref="deleteLuckyDia"
                        refId="deleteLuckyDia"
                        :paraVarPair="pvt_deleteDia.deleteLuckyDia.paraVarPair"
                        :para="pvt_deleteDia.deleteLuckyDia.para"
                        :attr="pvt_deleteDia.deleteLuckyDia.attr">
                </back-man_main_raffle-s_delete-dia>
            </div>
        </div>
    </div>
</template>
<script>
    import libSys from "@/components/baseComponent/libSys.js";
    import libUpload from "@/components/baseComponent/libUpload.js";
    import backMan_main_raffleS_raffleRecRo from "./raffleRecordRow";
    import backMan_main_raffleS_deleteDia from "../../commonDialog/deleteTipDialog.vue";

    export default {
        components: {backMan_main_raffleS_raffleRecRo, backMan_main_raffleS_deleteDia},
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
                    vessel: ["r1c1", "r2c1", "r2c2", "r2c3", "r2c4", "r2c5", "r3c1", "deleteDia", "r3c1"],
                    subModule: ["deleteCheckeds", "title1", "title2", "title3", "title4", "title5", "tableRow", "deleteLuckyDia", "noDataText"],
                },
                pvt_isShow: {
                    r1c1: null,
                    r2c1: null,
                    r2c2: null,
                    r2c3: null,
                    r2c4: null,
                    r2c5: null,
                    r3c1: null,
                    deleteDia: null,
                },
                pvt_win: {
                    isShow: {
                        backMan_main_raffleS_raffleRecor: true,
                        r1c1: true,
                        r2c1: true,
                        r2c2: true,
                        r2c3: true,
                        r2c4: true,
                        r2c5: true,
                        r3c1: true,
                    },
                    isChecked: {
                        backMan_main_raffleS_raffleRecor: false,
                        r1c1: false,
                        r2c1: false,
                        r2c2: false,
                        r2c3: false,
                        r2c4: false,
                        r2c5: false,
                        r3c1: false,
                    },
                    style: {
                        backMan_main_raffleS_raffleRecor: null,
                        r1c1: null,
                        r2c1: null,
                        r2c2: null,
                        r2c3: null,
                        r2c4: null,
                        r2c5: null,
                        r3c1: null,
                    },
                },
                pvt_eventPortInput: [],

                checkData: [],
                luckyIdArr: [],
                sizeArr: [],
                deleteType: 1,
                checkDataRow: [],

                delArr: [],
            };
        },
        watch: {},
        computed: {
            pvt_r1c1: function () {
                return {
                    deleteCheckeds: {
                        paraVarPair: {},
                        para: {
                            name: ["删除选中", "el-icon-delete"],
                        },
                        attr: {
                            size: "mini"
                        },
                    },
                };
            },
            pvt_r2c1: function () {
                return {
                    title1: {
                        paraVarPair: {
                            checkData: "checkData",
                        },
                        para: {
                            checkData: this.checkData,
                        },
                        attr: {
                            checkboxArr: [{label: 1, text: "全选"}],
                            size: "small",
                        },
                    },
                };
            },
            pvt_r2c2: function () {
                return {
                    title2: {
                        paraVarPair: {},
                        para: {
                            textData: "ID",
                        },
                        attr: {
                            label: "div",
                            // fontWeight: 400,
                            color: "#000",
                            fontSize: "12px",
                        },
                    },
                };
            },
            pvt_r2c3: function () {
                return {
                    title3: {
                        paraVarPair: {},
                        para: {
                            textData: "昵称",
                        },
                        attr: {
                            label: "div",
                            // fontWeight: 400,
                            color: "#000",
                            fontSize: "12px",
                            textAlign: "center",
                        },
                    },
                };
            },
            pvt_r2c4: function () {
                return {
                    title4: {
                        paraVarPair: {},
                        para: {
                            textData: "奖品",
                        },
                        attr: {
                            label: "div",
                            // fontWeight: 400,
                            color: "#000",
                            fontSize: "12px",
                            textAlign: "center",
                        },
                    },
                };
            },
            pvt_r2c5: function () {
                return {
                    title5: {
                        paraVarPair: {},
                        para: {
                            textData: "操作",
                        },
                        attr: {
                            label: "div",
                            // fontWeight: 400,
                            color: "#000",
                            fontSize: "12px",
                            textAlign: "center",
                        },
                    },
                };
            },
            pvt_r3c1: function () {
                let loopModule = {
                    tableRow: {
                        para: {
                            luckyId: this.luckyIdArr,
                            checkData: this.checkDataRow
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
                            luckyId: "luckyIdArr",
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
                            // fontWeight: 400,
                            height: "40px",
                            color: "#000",
                            fontSize: "14px",
                        },
                    },
                };
            },
            pvt_deleteDia: function () {
                return {
                    deleteLuckyDia: {
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
        },
        created: function () {
            Object.assign(this, libSys, libUpload);
        },
        mounted: function () {
            this.pvt_initSysData();
        },
        methods: {
            // 子模块事件
            deleteCheckeds_buttonClickEvent: function () {
                this.deleteLucky();
            },
            title1_dataModifyEvent: function () {
                this.checkAll()
            },
            tableRow_checkedEvent: function (index, checked) {
                this.checkedRow(index, checked);
            },
            tableRow_deleteLuckyEvent: function (index) {
                this.deleteOneLucky(index);
            },
            deleteLuckyDia_confirmDeleteEvent: function () {
                this.confirmDelete();
            },

            // 方法
            startModule: function (successCallBack, errorCallBack) {
                let $this = this, para, dbFlag, tableVariable, condition, record, data;
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
                            console.log("raffleRecord startModule: para.nStep = " + para.nStep);
                            para.nStepOld = para.nStep;
                        }
                    }
                    switch (para.nStep) {
                        case 0:
                          para.nStep = "query_luck";
                          ++dbFlag;
                          break;
                        case "recordNew":// todo 新增假数据.
                            data = {
                                [$this.mac.fd.lucky.prize_name]: ["酱油", "酱油", "酱油", "酱油"],
                                [$this.mac.fd.lucky.nick_name]: ["张三", "李四", "王五", "赵六"],
                            };
                            $this.sys.api.recordNew(null, null, $this.mac.tb.lucky, data, function () {
                                para.nStep = "query_luck";
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case "query_luck":
                            tableVariable = [{
                                $table: $this.mac.tb.lucky,
                                $arrField: null,
                                $arrValue: null,
                                $arrSubTab: []
                            }];
                            condition = {
                                [$this.mac.tb.lucky]: null
                            };
                            $this.sys.api.recordQuery(tableVariable, condition, function () {
                                para.record = tableVariable[0].$arrValue;
                                para.showModule = ["deleteCheckeds", "title1", "title2", "title3", "title4", "title5"];
                                if (para.record.length === 0) {
                                    para.showModule.push("noDataText");
                                    para.nStep = "showSubModule";
                                } else {
                                    para.showModule.push("tableRow");
                                    para.nStep = "read_luck";
                                }
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case "read_luck":
                            record = {
                                id: para.record,
                                table: $this.mac.tb.lucky,
                                field: null
                            };
                            data = {};
                            $this.sys.api.recordRead(null, null, record, data, function () {
                                $this.checkData = [];
                                $this.luckyIdArr = para.record;
                                $this.sizeArr = new Array(para.record.length).fill("medium");
                                $this.checkDataRow = new Array(para.record.length).fill(false);
                                $this.delArr = new Array(para.record.length).fill(false);
                                para.nStep = "showSubModule";
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case "showSubModule":
                            $this.showSubModule(para.showModule, true, function () {
                                para.nStep = "forceUpdateData";
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case "forceUpdateData":
                            $this.forceUpdateData(function () {
                                para.i = 0;
                                para.nStep = "loop_startModule";
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            });
                            break;
                        case "loop_startModule":
                            if (para.i >= para.showModule.length - 1) {
                                if (para.record.length !== 0) {
                                    para.i = 0;
                                    para.nStep = "loop_row";
                                    dbFlag++;
                                    break;
                                }
                                if (para.i === para.showModule.length) {
                                    para.nStep = "end";
                                    dbFlag++;
                                    break;
                                }
                            }
                            $this.sm[para.showModule[para.i]].startModule(function () {
                                para.i++;
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case "loop_row":
                            if (para.i === $this.sm[para.showModule[para.showModule.length - 1]].length) {
                                para.nStep = "end";
                                dbFlag++;
                                break;
                            }
                            $this.sm[para.showModule[para.showModule.length - 1]][para.i].startModule(function () {
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
            deleteLucky: function () {
                let $this = this;
                let delArr = [];
                $this.delArr = $this.checkDataRow.slice();
                $this.checkDataRow.forEach((v, i) => {
                    if (v) {
                        delArr.push(i);
                    }
                });
                if (delArr.length === 0) return;
                $this.deleteType = delArr.length === 1 ? 1 : 2;
                $this.showSubModule("deleteLuckyDia", true, function () {
                    $this.forceUpdateData(function () {
                        $this.sm.deleteLuckyDia.startModule(function () {

                        }, function (error) {
                            console.log(error);
                        });
                    });
                });
            },
            checkedRow: function (index, checked) {
              let $this = this;
              $this.checkDataRow[index] = checked;
              if (!$this.checkDataRow.includes(false)) {
                $this.checkData = [1];
              } else {
                $this.checkData = [];
              }
              $this.forceUpdateData(function () {
                $this.sm.title1.startModule(function () {

                }, function (error) {
                  console.log(error)
                })
              })
            },
            deleteOneLucky: function (index) {
                let $this = this;
                $this.deleteType = 1;
                $this.showSubModule("deleteLuckyDia", true, function () {
                    $this.forceUpdateData(function () {
                        $this.sm.deleteLuckyDia.startModule(function () {
                            $this.delArr[index] = true;
                        }, function (error) {
                            console.log(error);
                        });
                    });
                });
            },
            confirmDelete: function (successCallBack, errorCallBack) {
                if (successCallBack === undefined) {
                    successCallBack = function () {

                    };
                    errorCallBack = function (error) {
                        console.log(error);
                    };
                }
                let $this = this, para, dbFlag;
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
                            console.log("raffleRecord confirmDelete: para.nStep = " + para.nStep);
                            para.nStepOld = para.nStep;
                        }
                    }
                    switch (para.nStep) {
                        case 0:
                            para.delId = $this.delArr.map((v, i) => v ? $this.luckyIdArr[i] : null).filter(v => v);
                            let record = {
                                id: para.delId,
                                table: $this.mac.tb.lucky
                            };
                            $this.sys.api.recordDelete(null, null, record, function () {
                              $this.showTipText('删除成功');
                                for (let i = $this.delArr.length - 1; i >= 0; i--) {
                                    if ($this.delArr[i]) {
                                        $this.delArr.splice(i, 1);
                                        $this.checkDataRow.splice(i, 1);
                                        $this.luckyIdArr.splice(i, 1);
                                        $this.sizeArr.splice(i, 1);
                                    }
                                }
                              if ($this.checkDataRow.length === 0) {
                                $this.checkData = [];
                              } else if($this.checkDataRow.includes(false)) {
                                $this.checkData = [];
                              }else{
                                $this.checkData = [1];
                              }
                                para.checkDataRow = JSON.parse(JSON.stringify($this.checkDataRow));
                                para.luckyIdArr = JSON.parse(JSON.stringify($this.luckyIdArr));
                                para.sizeArr = JSON.parse(JSON.stringify($this.sizeArr));
                                $this.checkDataRow = [];
                                $this.luckyIdArr = [];
                                $this.sizeArr = [];
                                para.nStep = "uploadData";
                                if (++dbFlag === 2) {
                                    $this.confirmDelete(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case "uploadData":
                          //上传数据
                          let tableVariable = [{
                            $table:$this.mac.tb.lucky,
                            $arrField:null,
                            $arrValue:para.delId,
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
                            $this.forceUpdateData(function () {
                                if (!$this.checkDataRow.length && !!para.checkDataRow.length) {
                                    $this.checkDataRow = para.checkDataRow;
                                    $this.luckyIdArr = para.luckyIdArr;
                                    $this.sizeArr = para.sizeArr;
                                } else {
                                    para.nStep = "check_startModule";
                                }
                                if (++dbFlag === 2) {
                                    $this.confirmDelete(successCallBack, errorCallBack);
                                }
                            });
                            break;
                        case "check_startModule":
                            $this.sm.title1.startModule(function () {
                                para.nStep = "raffleRecordRowStartModule";
                                if (++dbFlag === 2) {
                                    $this.confirmDelete(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case "raffleRecordRowStartModule":
                            $this.raffleRecordRowStartModule(function () {
                                para.nStep = "end";
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

            raffleRecordRowStartModule: function (successCallBack, errorCallBack) {
                let $this = this, para, dbFlag;
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
                            console.log("raffleRecord raffleRecordRowStartModule: para.nStep = " + para.nStep);
                            para.nStepOld = para.nStep;
                        }
                    }
                    switch (para.nStep) {
                        case 0:
                            para.i = 0;
                            para.nStep = "loop_startModule";
                        case "loop_startModule":
                            if (para.i === $this.sm.tableRow.length) {
                                para.nStep = "end";
                                dbFlag++;
                                break;
                            }
                            $this.sm.tableRow[para.i].startModule(function () {
                                para.i++;
                                if (++dbFlag === 2) {
                                    $this.raffleRecordRowStartModule(successCallBack, errorCallBack);
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
            checkAll: function () {
                this.checkDataRow = this.checkDataRow.map(() => !!this.checkData.length);
                this.raffleRecordRowStartModule(function () {

                }, function () {

                });
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
    .backMan_main_raffleS_raffleRecor_container {
        width: 100%;
        height: 100%;
    }

    .backMan_main_raffleS_raffleRecor_mask {
        display: flex;
        position: fixed !important;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, .4);
        z-index: 9;
    }

    .backMan_main_raffleS_raffleRecor_dialog {
        position: absolute;
        left: 50%;
        top: 50%;
        margin-top: -100px;
        margin-left: -200px;
    }

    .backMan_main_raffleS_raffleRecor_overlay {
        position: absolute;
        left: 0;
        top: 0;
    }

    .backMan_main_raffleS_raffleRecor_row {
        display: flex;
        width: 100%;
    }

    .backMan_main_raffleS_raffleRecor_col {
        position: relative;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
    }

    .backMan_main_raffleS_raffleRecor_col_backMan_main_raffleS_raffleRecor_size_medium {
        width: $backMan_main_raffleS_raffleRecor-backMan_main_raffleS_raffleRecor-medium-width;
        height: $backMan_main_raffleS_raffleRecor-backMan_main_raffleS_raffleRecor-medium-height;
        align-items: $backMan_main_raffleS_raffleRecor-backMan_main_raffleS_raffleRecor-medium-horizontal-position;
        justify-content: $backMan_main_raffleS_raffleRecor-backMan_main_raffleS_raffleRecor-medium-vertical-position;
    }

    .backMan_main_raffleS_raffleRecor_col_r1c1_size_medium {
        width: $backMan_main_raffleS_raffleRecor-r1c1-medium-width;
        height: $backMan_main_raffleS_raffleRecor-r1c1-medium-height;
        align-items: $backMan_main_raffleS_raffleRecor-r1c1-medium-horizontal-position;
        justify-content: $backMan_main_raffleS_raffleRecor-r1c1-medium-vertical-position;
    }

    .backMan_main_raffleS_raffleRecor_col_r2c1_size_medium {
        width: $backMan_main_raffleS_raffleRecor-r2c1-medium-width;
        height: $backMan_main_raffleS_raffleRecor-r2c1-medium-height;
        line-height: $backMan_main_raffleS_raffleRecor-r2c1-medium-line-height;
        align-items: $backMan_main_raffleS_raffleRecor-r2c1-medium-horizontal-position;
        justify-content: $backMan_main_raffleS_raffleRecor-r2c1-medium-vertical-position;
    }

    .backMan_main_raffleS_raffleRecor_col_r2c1 {
        border-style: $backMan_main_raffleS_raffleRecor-r2c1-border-style;
        border-width: $backMan_main_raffleS_raffleRecor-r2c1-border-width;
        border-radius: $backMan_main_raffleS_raffleRecor-r2c1-border-radius;
        border-color: mix($backMan_main_raffleS_raffleRecor-r2c1-border-color, #fff, $backMan_main_raffleS_raffleRecor-r2c1-hover-border-color-opacity);
        /*background-color: mix($backMan_main_raffleS_raffleRecor-r2c1-background-color, #fff, $backMan_main_raffleS_raffleRecor-r2c1-background-color-opacity);*/
        background-color: #f4f4f4;
    }

    .backMan_main_raffleS_raffleRecor_col_r2c2_size_medium {
        width: $backMan_main_raffleS_raffleRecor-r2c2-medium-width;
        height: $backMan_main_raffleS_raffleRecor-r2c2-medium-height;
        line-height: $backMan_main_raffleS_raffleRecor-r2c2-medium-line-height;
        align-items: $backMan_main_raffleS_raffleRecor-r2c2-medium-horizontal-position;
    }

    .backMan_main_raffleS_raffleRecor_col_r2c2 {
        border-style: $backMan_main_raffleS_raffleRecor-r2c2-border-style;
        border-width: $backMan_main_raffleS_raffleRecor-r2c2-border-width;
        border-radius: $backMan_main_raffleS_raffleRecor-r2c2-border-radius;
        border-color: mix($backMan_main_raffleS_raffleRecor-r2c2-border-color, #fff, $backMan_main_raffleS_raffleRecor-r2c2-hover-border-color-opacity);
        /*background-color: mix($backMan_main_raffleS_raffleRecor-r2c2-background-color, #fff, $backMan_main_raffleS_raffleRecor-r2c2-background-color-opacity);*/
        background-color: #f4f4f4;
    }

    .backMan_main_raffleS_raffleRecor_col_r2c3_size_medium {
        width: $backMan_main_raffleS_raffleRecor-r2c3-medium-width;
        height: $backMan_main_raffleS_raffleRecor-r2c3-medium-height;
        line-height: $backMan_main_raffleS_raffleRecor-r2c3-medium-line-height;
    }

    .backMan_main_raffleS_raffleRecor_col_r2c3 {
        border-style: $backMan_main_raffleS_raffleRecor-r2c3-border-style;
        border-width: $backMan_main_raffleS_raffleRecor-r2c3-border-width;
        border-radius: $backMan_main_raffleS_raffleRecor-r2c3-border-radius;
        border-color: mix($backMan_main_raffleS_raffleRecor-r2c3-border-color, #fff, $backMan_main_raffleS_raffleRecor-r2c3-hover-border-color-opacity);
        /*background-color: mix($backMan_main_raffleS_raffleRecor-r2c3-background-color, #fff, $backMan_main_raffleS_raffleRecor-r2c3-background-color-opacity);*/
        background-color: #f4f4f4;
    }

    .backMan_main_raffleS_raffleRecor_col_r2c4_size_medium {
        width: $backMan_main_raffleS_raffleRecor-r2c4-medium-width;
        height: $backMan_main_raffleS_raffleRecor-r2c4-medium-height;
        line-height: $backMan_main_raffleS_raffleRecor-r2c4-medium-line-height;
    }

    .backMan_main_raffleS_raffleRecor_col_r2c4 {
        border-style: $backMan_main_raffleS_raffleRecor-r2c4-border-style;
        border-width: $backMan_main_raffleS_raffleRecor-r2c4-border-width;
        border-radius: $backMan_main_raffleS_raffleRecor-r2c4-border-radius;
        border-color: mix($backMan_main_raffleS_raffleRecor-r2c4-border-color, #fff, $backMan_main_raffleS_raffleRecor-r2c4-hover-border-color-opacity);
        /*background-color: mix($backMan_main_raffleS_raffleRecor-r2c4-background-color, #fff, $backMan_main_raffleS_raffleRecor-r2c4-background-color-opacity);*/
        background-color: #f4f4f4;
    }

    .backMan_main_raffleS_raffleRecor_col_r2c5_size_medium {
        width: $backMan_main_raffleS_raffleRecor-r2c5-medium-width;
        height: $backMan_main_raffleS_raffleRecor-r2c5-medium-height;
        line-height: $backMan_main_raffleS_raffleRecor-r2c5-medium-line-height;
    }

    .backMan_main_raffleS_raffleRecor_col_r2c5 {
        border-style: $backMan_main_raffleS_raffleRecor-r2c5-border-style;
        border-width: $backMan_main_raffleS_raffleRecor-r2c5-border-width;
        border-radius: $backMan_main_raffleS_raffleRecor-r2c5-border-radius;
        border-color: mix($backMan_main_raffleS_raffleRecor-r2c5-border-color, #fff, $backMan_main_raffleS_raffleRecor-r2c5-hover-border-color-opacity);
        /*background-color: mix($backMan_main_raffleS_raffleRecor-r2c5-background-color, #fff, $backMan_main_raffleS_raffleRecor-r2c5-background-color-opacity);*/
        background-color: #f4f4f4;
    }

    .backMan_main_raffleS_raffleRecor_row_row2{
        height: calc(100% - 76px);
        align-items: flex-start;
    }

    .backMan_main_raffleS_raffleRecor_col_r3c1_size_medium {
        width: $backMan_main_raffleS_raffleRecor-r3c1-medium-width;;
        max-height: 100%;
        box-sizing: border-box;
        overflow-y: auto;
        overflow-x: hidden;
    }

    .backMan_main_raffleS_raffleRecor_col_r3c1 {
        border-color: mix($backMan_main_raffleS_raffleRecor-r3c1-border-color, #fff, $backMan_main_raffleS_raffleRecor-r3c1-hover-border-color-opacity);
        border-style: $backMan_main_raffleS_raffleRecor-r3c1-border-style;
        border-width: $backMan_main_raffleS_raffleRecor-r3c1-border-width;
        border-radius: $backMan_main_raffleS_raffleRecor-r3c1-border-radius;
    }

    .backMan_main_raffleS_raffleRecor_col_deleteDia_size_medium {
        width: $backMan_main_raffleS_raffleRecor-deleteDia-medium-width;
        height: $backMan_main_raffleS_raffleRecor-deleteDia-medium-height;
        background-color: #fff;
    }
</style>
