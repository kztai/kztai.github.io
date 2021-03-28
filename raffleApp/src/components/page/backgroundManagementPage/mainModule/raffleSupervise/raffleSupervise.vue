<template>
    <div v-show="pvt_win.isShow.backMan_main_raffleSuperviseWind"
         :class="{backMan_main_raffleSupervise_container:true,backMan_main_raffleSupervise_col:true,backMan_main_raffleSupervise_col_backMan_main_raffleSuperviseWind:true,backMan_main_raffleSupervise_col_backMan_main_raffleSuperviseWind_size_large:attr.size==='large',backMan_main_raffleSupervise_col_backMan_main_raffleSuperviseWind_size_medium:attr.size==='medium',backMan_main_raffleSupervise_col_backMan_main_raffleSuperviseWind_size_small:attr.size==='small',backMan_main_raffleSupervise_col_backMan_main_raffleSuperviseWind_size_min:attr.size==='min',backMan_main_raffleSupervise_col_backMan_main_raffleSuperviseWind_checked:pvt_win.isChecked.backMan_main_raffleSuperviseWind,backMan_main_raffleSupervise_col_backMan_main_raffleSuperviseWind_disable:attr.disabled}"
         :style="pvt_win.style.backMan_main_raffleSuperviseWind">

        <div class="backMan_main_raffleSupervise_row backMan_main_raffleSupervise_row_row0">
            <div v-show="pvt_win.isShow.r1c1"
                 :class="{backMan_main_raffleSupervise_col:true,backMan_main_raffleSupervise_col_r1c1:true,backMan_main_raffleSupervise_col_r1c1_size_large:attr.size==='large',backMan_main_raffleSupervise_col_r1c1_size_medium:attr.size==='medium',backMan_main_raffleSupervise_col_r1c1_size_small:attr.size==='small',backMan_main_raffleSupervise_col_r1c1_size_min:attr.size==='min',backMan_main_raffleSupervise_col_r1c1_checked:pvt_win.isChecked.r1c1,backMan_main_raffleSupervise_col_r1c1_disable:attr.disabled}"
                 :style="pvt_win.style.r1c1">

                <lm1a-tabs
                        ref="smTabs"
                        refId="smTabs"
                        v-show="pvt_isShow.r1c1 === 'smTabs'"
                        :paraVarPair="pvt_r1c1.smTabs.paraVarPair"
                        :para="pvt_r1c1.smTabs.para"
                        :attr="pvt_r1c1.smTabs.attr">
                </lm1a-tabs>
            </div>
        </div>
        <div class="backMan_main_raffleSupervise_row backMan_main_raffleSupervise_row_row1">
            <div v-show="pvt_win.isShow.r2c1"
                 :class="{backMan_main_raffleSupervise_col:true,backMan_main_raffleSupervise_col_r2c1:true,backMan_main_raffleSupervise_col_r2c1_size_large:attr.size==='large',backMan_main_raffleSupervise_col_r2c1_size_medium:attr.size==='medium',backMan_main_raffleSupervise_col_r2c1_size_small:attr.size==='small',backMan_main_raffleSupervise_col_r2c1_size_min:attr.size==='min',backMan_main_raffleSupervise_col_r2c1_checked:pvt_win.isChecked.r2c1,backMan_main_raffleSupervise_col_r2c1_disable:attr.disabled}"
                 :style="pvt_win.style.r2c1">

                <back-man_main_raffle-s_prize-set
                        ref="prizeSet"
                        refId="prizeSet"
                        v-show="pvt_isShow.r2c1 === 'prizeSet'"
                        :paraVarPair="pvt_r2c1.prizeSet.paraVarPair"
                        :para="pvt_r2c1.prizeSet.para"
                        :attr="pvt_r2c1.prizeSet.attr">
                </back-man_main_raffle-s_prize-set>
                <back-man_main_raffle-s_raffle-recor
                        ref="raffleRecord"
                        refId="raffleRecord"
                        v-show="pvt_isShow.r2c1 === 'raffleRecord'"
                        :paraVarPair="pvt_r2c1.raffleRecord.paraVarPair"
                        :para="pvt_r2c1.raffleRecord.para"
                        :attr="pvt_r2c1.raffleRecord.attr">
                </back-man_main_raffle-s_raffle-recor>
            </div>
        </div>

    </div>
</template>
<script>
    import libSys from "@/components/baseComponent/libSys.js";
    import libUpload from "@/components/baseComponent/libUpload.js";
    import backMan_main_raffleS_prizeSet from "./prizeSet/prizeSet.vue";
    import backMan_main_raffleS_raffleRecor from "./raffleRecord/raffleRecord.vue";

    export default {
        components: {backMan_main_raffleS_prizeSet, backMan_main_raffleS_raffleRecor},
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
                    vessel: ["r1c1", "r2c1", "r2c1"],
                    subModule: ["smTabs", "prizeSet", "raffleRecord"],
                },
                pvt_isShow: {
                    r1c1: null,
                    r2c1: null,
                },
                pvt_win: {
                    isShow: {
                        backMan_main_raffleSuperviseWind: true,
                        r1c1: true,
                        r2c1: true,
                    },
                    isChecked: {
                        backMan_main_raffleSuperviseWind: false,
                        r1c1: false,
                        r2c1: false,
                    },
                    style: {
                        backMan_main_raffleSuperviseWind: null,
                        r1c1: null,
                        r2c1: null,
                    },
                },
                pvt_eventPortInput: ["tabsChange"],

                checkedIndex: 0,
            };
        },
        watch: {},
        computed: {
            pvt_r1c1: function () {
                return {
                    smTabs: {
                        paraVarPair: {},
                        para: {
                            tabData: [{val: "抽奖设置"}, {val: "抽奖记录"}],
                        },
                        attr: {
                            checked: this.checkedIndex,
                            type: "border-card",
                        },
                    },
                };
            },
            pvt_r2c1: function () {
                return {
                    prizeSet: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: "medium",
                        },
                    },
                    raffleRecord: {
                        paraVarPair: {},
                        para: {},
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
            smTabs_labelClickEvent: function (index) {
                this.tabsChange(index);
                this.ep.tabsChange(index);
            },

            // 启动方法
            startModule: function (successCallBack, errorCallBack) {
                let $this = this, para, dbFlag, showModule;
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
                            console.log("raffleSupervise startModule: para.nStep = " + para.nStep);
                            para.nStepOld = para.nStep;
                        }
                    }
                    switch (para.nStep) {
                        case 0:
                            if ($this.checkedIndex === 0) {
                                showModule = ["smTabs", "prizeSet"]
                            } else {
                                showModule = ["smTabs", "raffleRecord"]
                            }
                            $this.showSubModule(showModule, true, function () {
                                para.nStep = "smTabs_startModule";
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case "smTabs_startModule":
                            $this.sm.smTabs.startModule(function () {
                                // if ($this.checkedIndex === 0) {
                                //     para.nStep = "prizeSet_startModule";
                                // } else {
                                //     para.nStep = "raffleRecord_startModule";
                                // }
                                para.nStep = "prizeSet_startModule";
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case "prizeSet_startModule":
                            $this.sm.prizeSet.startModule(function () {
                                // para.nStep = "end";
                                para.nStep = "raffleRecord_startModule";
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case "raffleRecord_startModule":
                            $this.sm.raffleRecord.startModule(function () {
                                para.nStep = "end";
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case "end":
                            para.successCallBack();
                            break;
                    }
                    if (++dbFlag === 1) return;
                }
            },
            tabsChange: function (index) {
                if (index === this.checkedIndex) return;
                let $this = this, successCallBack = function () {
                }, errorCallBack = function (error) {
                    console.log(error);
                };
                $this.checkedIndex = index;
                let showSubModule, hideSubModule;
                if (index === 0) {
                    showSubModule = "prizeSet";
                    hideSubModule = "raffleRecord";
                } else {
                    showSubModule = "raffleRecord";
                    hideSubModule = "prizeSet";
                }
                $this.showSubModule([hideSubModule], false, function () {
                    $this.showSubModule([showSubModule], true, function () {
                        // $this.sm[showSubModule].startModule(successCallBack, errorCallBack);
                    }, errorCallBack);
                }, errorCallBack);
            }
        },
    };
</script>
<style lang="scss" scoped>
    .backMan_main_raffleSupervise_container {
        width: 100%;
        height: 100%;
    }

    .backMan_main_raffleSupervise_mask {
        display: flex;
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, .4);
    }

    .backMan_main_raffleSupervise_dialog {
        position: absolute;
        left: 0;
        top: 0;
    }

    .backMan_main_raffleSupervise_overlay {
        position: absolute;
        left: 0;
        top: 0;
    }

    .backMan_main_raffleSupervise_row {
        display: flex;
    }

    .backMan_main_raffleSupervise_col {
        position: relative;
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        background-color: #fff;
    }

    .backMan_main_raffleSupervise_col_backMan_main_raffleSuperviseWind_size_medium {
        width: $backMan_main_raffleSupervise-backMan_main_raffleSuperviseWind-medium-width;
        height: $backMan_main_raffleSupervise-backMan_main_raffleSuperviseWind-medium-height;
    }

    .backMan_main_raffleSupervise_col_r1c1_size_medium {
        width: $backMan_main_raffleSupervise-r1c1-medium-width;
        height: $backMan_main_raffleSupervise-r1c1-medium-height;
    }
    .backMan_main_raffleSupervise_row_row1{
        height:calc(100% - 40px);
    }

    .backMan_main_raffleSupervise_col_r2c1_size_medium {
        width: $backMan_main_raffleSupervise-r2c1-medium-width;
        /*padding: $backMan_main_raffleSupervise-r2c1-medium-padding;*/
        height: 100%;
        box-sizing: border-box;
    }

    .backMan_main_raffleSupervise_col_r2c1 {
        border-style: $backMan_main_raffleSupervise-r2c1-border-style;
        border-width: $backMan_main_raffleSupervise-r2c1-border-width;
        border-radius: $backMan_main_raffleSupervise-r2c1-border-radius;
        border-color: mix($backMan_main_raffleSupervise-r2c1-border-color, #fff, $backMan_main_raffleSupervise-r2c1-hover-border-color-opacity);
        padding: 10px;
    }
</style>
