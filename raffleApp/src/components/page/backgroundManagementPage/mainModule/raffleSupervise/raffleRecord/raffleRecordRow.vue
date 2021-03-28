<template>
    <div v-show="pvt_win.isShow.backMan_main_raffleS_raffleRecRo"
         :class="{backMan_main_raffleS_raffleRecRo_container:true,backMan_main_raffleS_raffleRecRo_col:true,backMan_main_raffleS_raffleRecRo_col_backMan_main_raffleS_raffleRecRo:true,backMan_main_raffleS_raffleRecRo_col_backMan_main_raffleS_raffleRecRo_size_large:attr.size==='large',backMan_main_raffleS_raffleRecRo_col_backMan_main_raffleS_raffleRecRo_size_medium:attr.size==='medium',backMan_main_raffleS_raffleRecRo_col_backMan_main_raffleS_raffleRecRo_size_small:attr.size==='small',backMan_main_raffleS_raffleRecRo_col_backMan_main_raffleS_raffleRecRo_size_min:attr.size==='min',backMan_main_raffleS_raffleRecRo_col_backMan_main_raffleS_raffleRecRo_checked:pvt_win.isChecked.backMan_main_raffleS_raffleRecRo,backMan_main_raffleS_raffleRecRo_col_backMan_main_raffleS_raffleRecRo_disable:attr.disabled}"
         :style="pvt_win.style.backMan_main_raffleS_raffleRecRo">

        <div class="backMan_main_raffleS_raffleRecRo_row backMan_main_raffleS_raffleRecRo_row_row0">
            <div v-show="pvt_win.isShow.r1c1"
                 :class="{backMan_main_raffleS_raffleRecRo_col:true,backMan_main_raffleS_raffleRecRo_col_r1c1:true,backMan_main_raffleS_raffleRecRo_col_r1c1_size_large:attr.size==='large',backMan_main_raffleS_raffleRecRo_col_r1c1_size_medium:attr.size==='medium',backMan_main_raffleS_raffleRecRo_col_r1c1_size_small:attr.size==='small',backMan_main_raffleS_raffleRecRo_col_r1c1_size_min:attr.size==='min',backMan_main_raffleS_raffleRecRo_col_r1c1_checked:pvt_win.isChecked.r1c1,backMan_main_raffleS_raffleRecRo_col_r1c1_disable:attr.disabled}"
                 :style="pvt_win.style.r1c1">

                <lm1a-checkbox
                        ref="checkbox"
                        refId="checkbox"
                        v-show="pvt_isShow.r1c1 === 'checkbox'"
                        :paraVarPair="pvt_r1c1.checkbox.paraVarPair"
                        :para="pvt_r1c1.checkbox.para"
                        :attr="pvt_r1c1.checkbox.attr">
                </lm1a-checkbox>
            </div>
            <div v-show="pvt_win.isShow.r1c2"
                 :class="{backMan_main_raffleS_raffleRecRo_col:true,backMan_main_raffleS_raffleRecRo_col_r1c2:true,backMan_main_raffleS_raffleRecRo_col_r1c2_size_large:attr.size==='large',backMan_main_raffleS_raffleRecRo_col_r1c2_size_medium:attr.size==='medium',backMan_main_raffleS_raffleRecRo_col_r1c2_size_small:attr.size==='small',backMan_main_raffleS_raffleRecRo_col_r1c2_size_min:attr.size==='min',backMan_main_raffleS_raffleRecRo_col_r1c2_checked:pvt_win.isChecked.r1c2,backMan_main_raffleS_raffleRecRo_col_r1c2_disable:attr.disabled}"
                 :style="pvt_win.style.r1c2">

                <lm1a-link-text
                        ref="ID"
                        refId="ID"
                        v-show="pvt_isShow.r1c2 === 'ID'"
                        :paraVarPair="pvt_r1c2.ID.paraVarPair"
                        :para="pvt_r1c2.ID.para"
                        :attr="pvt_r1c2.ID.attr">
                </lm1a-link-text>
            </div>
            <div v-show="pvt_win.isShow.r1c3"
                 :class="{backMan_main_raffleS_raffleRecRo_col:true,backMan_main_raffleS_raffleRecRo_col_r1c3:true,backMan_main_raffleS_raffleRecRo_col_r1c3_size_large:attr.size==='large',backMan_main_raffleS_raffleRecRo_col_r1c3_size_medium:attr.size==='medium',backMan_main_raffleS_raffleRecRo_col_r1c3_size_small:attr.size==='small',backMan_main_raffleS_raffleRecRo_col_r1c3_size_min:attr.size==='min',backMan_main_raffleS_raffleRecRo_col_r1c3_checked:pvt_win.isChecked.r1c3,backMan_main_raffleS_raffleRecRo_col_r1c3_disable:attr.disabled}"
                 :style="pvt_win.style.r1c3">

                <lm1a-link-text
                        ref="nickName"
                        refId="nickName"
                        v-show="pvt_isShow.r1c3 === 'nickName'"
                        :paraVarPair="pvt_r1c3.nickName.paraVarPair"
                        :para="pvt_r1c3.nickName.para"
                        :attr="pvt_r1c3.nickName.attr">
                </lm1a-link-text>
            </div>
            <div v-show="pvt_win.isShow.r1c4"
                 :class="{backMan_main_raffleS_raffleRecRo_col:true,backMan_main_raffleS_raffleRecRo_col_r1c4:true,backMan_main_raffleS_raffleRecRo_col_r1c4_size_large:attr.size==='large',backMan_main_raffleS_raffleRecRo_col_r1c4_size_medium:attr.size==='medium',backMan_main_raffleS_raffleRecRo_col_r1c4_size_small:attr.size==='small',backMan_main_raffleS_raffleRecRo_col_r1c4_size_min:attr.size==='min',backMan_main_raffleS_raffleRecRo_col_r1c4_checked:pvt_win.isChecked.r1c4,backMan_main_raffleS_raffleRecRo_col_r1c4_disable:attr.disabled}"
                 :style="pvt_win.style.r1c4">

                <lm1a-link-text
                        ref="prizeName"
                        refId="prizeName"
                        v-show="pvt_isShow.r1c4 === 'prizeName'"
                        :paraVarPair="pvt_r1c4.prizeName.paraVarPair"
                        :para="pvt_r1c4.prizeName.para"
                        :attr="pvt_r1c4.prizeName.attr">
                </lm1a-link-text>
            </div>
            <div v-show="pvt_win.isShow.r1c5"
                 :class="{backMan_main_raffleS_raffleRecRo_col:true,backMan_main_raffleS_raffleRecRo_col_r1c5:true,backMan_main_raffleS_raffleRecRo_col_r1c5_size_large:attr.size==='large',backMan_main_raffleS_raffleRecRo_col_r1c5_size_medium:attr.size==='medium',backMan_main_raffleS_raffleRecRo_col_r1c5_size_small:attr.size==='small',backMan_main_raffleS_raffleRecRo_col_r1c5_size_min:attr.size==='min',backMan_main_raffleS_raffleRecRo_col_r1c5_checked:pvt_win.isChecked.r1c5,backMan_main_raffleS_raffleRecRo_col_r1c5_disable:attr.disabled}"
                 :style="pvt_win.style.r1c5">

                <lm1a-button
                        ref="btn"
                        refId="btn"
                        v-show="pvt_isShow.r1c5 === 'btn'"
                        :paraVarPair="pvt_r1c5.btn.paraVarPair"
                        :para="pvt_r1c5.btn.para"
                        :attr="pvt_r1c5.btn.attr">
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
                luckyId: this.para.luckyId,
                checkData: this.para.checkData,
                pvt_subModuleMap: {
                    vessel: ["r1c1", "r1c2", "r1c3", "r1c4", "r1c5"],
                    subModule: ["checkbox", "ID", "nickName", "prizeName", "btn"],
                },
                pvt_isShow: {
                    r1c1: null,
                    r1c2: null,
                    r1c3: null,
                    r1c4: null,
                    r1c5: null,
                },
                pvt_win: {
                    isShow: {
                        backMan_main_raffleS_raffleRecRo: true,
                        r1c1: true,
                        r1c2: true,
                        r1c3: true,
                        r1c4: true,
                        r1c5: true,
                    },
                    isChecked: {
                        backMan_main_raffleS_raffleRecRo: false,
                        r1c1: false,
                        r1c2: false,
                        r1c3: false,
                        r1c4: false,
                        r1c5: false,
                    },
                    style: {
                        backMan_main_raffleS_raffleRecRo: null,
                        r1c1: null,
                        r1c2: null,
                        r1c3: null,
                        r1c4: null,
                        r1c5: null,
                    },
                },
                pvt_eventPortInput: ["checkedEvent", "deleteLuckyEvent"],

                checkData: [],
                Id: null,
                nickName: null,
                prizeName: null,
            };
        },
        watch: {
            luckyId: {
                handler: function (val, oldVal) {
                    if (val !== oldVal && this.paraVarPair.luckyId) {
                        if (this.number !== undefined) { // 循环
                            this.$parent[this.paraVarPair.luckyId][this.number] = val;
                        } else { // 非循环
                            this.$parent[this.paraVarPair.luckyId] = val;
                        }
                    }
                },
                deep: true
            },
        },
        computed: {
            pvt_r1c1: function () {
                return {
                    checkbox: {
                        paraVarPair: {
                            checkData: "checkData",
                        },
                        para: {
                            checkData: this.checkData,
                        },
                        attr: {
                            checkboxArr: [{label: 1, text: ""}],
                        },
                    },
                };
            },
            pvt_r1c2: function () {
                return {
                    ID: {
                        paraVarPair: {
                            textData: "Id",
                        },
                        para: {
                            textData: this.Id,
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
            pvt_r1c3: function () {
                return {
                    nickName: {
                        paraVarPair: {
                            textData: "nickName",
                        },
                        para: {
                            textData: this.nickName,
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
            pvt_r1c4: function () {
                return {
                    prizeName: {
                        paraVarPair: {
                            textData: "prizeName",
                        },
                        para: {
                            textData: this.prizeName,
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
            pvt_r1c5: function () {
                return {
                    btn: {
                        paraVarPair: {},
                        para: {
                            name: ["", "el-icon-delete"],
                        },
                        attr: {
                            type: "text",
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
            checkbox_dataModifyEvent: function () {
                this.checkboxChange();
            },
            btn_buttonClickEvent: function () {
                this.deleteOne();
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
                    if ($this.$debugFlag) {
                        if (para.nStep !== para.nStepOld) {
                            console.log("raffleRecordRow startModule: para.nStep = " + para.nStep);
                            para.nStepOld = para.nStep;
                        }
                    }
                    switch (para.nStep) {
                        case 0:
                        case "showSubModule":
                            para.subModule = ["checkbox", "ID", "nickName", "prizeName", "btn"];
                            $this.showSubModule(para.subModule, true, function () {
                                para.nStep = "read_luckyId";
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case "read_luckyId":
                            record = {
                                id: [$this.luckyId],
                                table: $this.mac.tb.lucky,
                                field: [$this.mac.fd.lucky.nick_name, $this.mac.fd.lucky.prize_name]
                            };
                            data = {};
                            $this.sys.api.recordRead(null, null, record, data, function () {
                                $this.checkData = $this.para.checkData ? [1] : [];
                                //Id 记录中奖人员的序号，暂定位数最大3位
                              $this.Id = '' + $this.luckyId;
                              if($this.Id.length === 1){
                                $this.Id = '00' + $this.Id;
                              }else if($this.Id.length === 2){
                                $this.Id = '0' + $this.Id;
                              }
                                $this.nickName = data[$this.mac.fd.lucky.nick_name][0];
                                $this.prizeName = data[$this.mac.fd.lucky.prize_name][0];
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
                            if (para.i === para.subModule.length) {
                                para.nStep = "end";
                                dbFlag++;
                                break;
                            }
                            $this.sm[para.subModule[para.i]].startModule(function () {
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
            checkboxChange: function () {
                this.ep.checkedEvent(this.number, !!this.checkData.length);
            },
            deleteOne: function () {
                this.ep.deleteLuckyEvent(this.number)
            },
        },
    };
</script>
<style lang="scss" scoped>
    .backMan_main_raffleS_raffleRecRo_container {
        width: 100%;
        height: 100%;
    }

    .backMan_main_raffleS_raffleRecRo_mask {
        display: flex;
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, .4);
    }

    .backMan_main_raffleS_raffleRecRo_dialog {
        position: absolute;
        left: 0;
        top: 0;
    }

    .backMan_main_raffleS_raffleRecRo_overlay {
        position: absolute;
        left: 0;
        top: 0;
    }

    .backMan_main_raffleS_raffleRecRo_row {
        display: flex;
    }

    .backMan_main_raffleS_raffleRecRo_col {
        position: relative;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
    }

    .backMan_main_raffleS_raffleRecRo_col_backMan_main_raffleS_raffleRecRo_size_medium {
        width: $backMan_main_raffleS_raffleRecRo-backMan_main_raffleS_raffleRecRo-medium-width;
    }

    .backMan_main_raffleS_raffleRecRo_col_backMan_main_raffleS_raffleRecRo {
        border-color: mix($backMan_main_raffleS_raffleRecRo-backMan_main_raffleS_raffleRecRo-border-color, #fff, $backMan_main_raffleS_raffleRecRo-backMan_main_raffleS_raffleRecRo-hover-border-color-opacity);
        border-style: $backMan_main_raffleS_raffleRecRo-backMan_main_raffleS_raffleRecRo-border-style;
        border-width: $backMan_main_raffleS_raffleRecRo-backMan_main_raffleS_raffleRecRo-border-width;
    }

    .backMan_main_raffleS_raffleRecRo_col_r1c1_size_medium {
        width: $backMan_main_raffleS_raffleRecRo-r1c1-medium-width;
        height: $backMan_main_raffleS_raffleRecRo-r1c1-medium-height;
        align-items: $backMan_main_raffleS_raffleRecRo-r1c1-medium-horizontal-position;
        justify-content: $backMan_main_raffleS_raffleRecRo-r1c1-medium-vertical-position;
    }

    .backMan_main_raffleS_raffleRecRo_col_r1c2_size_medium {
        width: $backMan_main_raffleS_raffleRecRo-r1c2-medium-width;
        height: $backMan_main_raffleS_raffleRecRo-r1c2-medium-height;
        align-items: $backMan_main_raffleS_raffleRecRo-r1c2-medium-horizontal-position;
        justify-content: $backMan_main_raffleS_raffleRecRo-r1c2-medium-vertical-position;
    }

    .backMan_main_raffleS_raffleRecRo_col_r1c3_size_medium {
        width: $backMan_main_raffleS_raffleRecRo-r1c3-medium-width;
        height: $backMan_main_raffleS_raffleRecRo-r1c3-medium-height;
        align-items: $backMan_main_raffleS_raffleRecRo-r1c3-medium-horizontal-position;
        justify-content: $backMan_main_raffleS_raffleRecRo-r1c3-medium-vertical-position;
    }

    .backMan_main_raffleS_raffleRecRo_col_r1c4_size_medium {
        width: $backMan_main_raffleS_raffleRecRo-r1c4-medium-width;
        height: $backMan_main_raffleS_raffleRecRo-r1c4-medium-height;
        align-items: $backMan_main_raffleS_raffleRecRo-r1c4-medium-horizontal-position;
        justify-content: $backMan_main_raffleS_raffleRecRo-r1c4-medium-vertical-position;
    }

    .backMan_main_raffleS_raffleRecRo_col_r1c5_size_medium {
        width: $backMan_main_raffleS_raffleRecRo-r1c5-medium-width;
        height: $backMan_main_raffleS_raffleRecRo-r1c5-medium-height;
        align-items: $backMan_main_raffleS_raffleRecRo-r1c5-medium-horizontal-position;
        justify-content: $backMan_main_raffleS_raffleRecRo-r1c5-medium-vertical-position;
    }
</style>
