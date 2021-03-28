<template>
    <div v-show="pvt_win.isShow.backMan_main_raffleS_prizePictur"
         :class="{backMan_main_raffleS_prizePictur_container:true,backMan_main_raffleS_prizePictur_col:true,backMan_main_raffleS_prizePictur_col_backMan_main_raffleS_prizePictur:true,backMan_main_raffleS_prizePictur_col_backMan_main_raffleS_prizePictur_size_large:attr.size==='large',backMan_main_raffleS_prizePictur_col_backMan_main_raffleS_prizePictur_size_medium:attr.size==='medium',backMan_main_raffleS_prizePictur_col_backMan_main_raffleS_prizePictur_size_small:attr.size==='small',backMan_main_raffleS_prizePictur_col_backMan_main_raffleS_prizePictur_size_min:attr.size==='min',backMan_main_raffleS_prizePictur_col_backMan_main_raffleS_prizePictur_checked:pvt_win.isChecked.backMan_main_raffleS_prizePictur,backMan_main_raffleS_prizePictur_col_backMan_main_raffleS_prizePictur_disable:attr.disabled}"
         :style="pvt_win.style.backMan_main_raffleS_prizePictur">

        <div class="backMan_main_raffleS_prizePictur_row backMan_main_raffleS_prizePictur_row_row0">
            <div v-show="pvt_win.isShow.r1c1"
                 :class="{backMan_main_raffleS_prizePictur_col:true,backMan_main_raffleS_prizePictur_col_r1c1:true,backMan_main_raffleS_prizePictur_col_r1c1_size_large:attr.size==='large',backMan_main_raffleS_prizePictur_col_r1c1_size_medium:attr.size==='medium',backMan_main_raffleS_prizePictur_col_r1c1_size_small:attr.size==='small',backMan_main_raffleS_prizePictur_col_r1c1_size_min:attr.size==='min',backMan_main_raffleS_prizePictur_col_r1c1_checked:pvt_win.isChecked.r1c1,backMan_main_raffleS_prizePictur_col_r1c1_disable:attr.disabled}"
                 :style="pvt_win.style.r1c1">

                <lm1a-image
                        ref="image"
                        refId="image"
                        v-show="pvt_isShow.r1c1 === 'image'"
                        :paraVarPair="pvt_r1c1.image.paraVarPair"
                        :para="pvt_r1c1.image.para"
                        :attr="pvt_r1c1.image.attr">
                </lm1a-image>
            </div>
        </div>
        <div class="backMan_main_raffleS_prizePictur_row backMan_main_raffleS_prizePictur_row_row1">
            <div v-show="pvt_win.isShow.r2c1"
                 :class="{backMan_main_raffleS_prizePictur_col:true,backMan_main_raffleS_prizePictur_col_r2c1:true,backMan_main_raffleS_prizePictur_col_r2c1_size_large:attr.size==='large',backMan_main_raffleS_prizePictur_col_r2c1_size_medium:attr.size==='medium',backMan_main_raffleS_prizePictur_col_r2c1_size_small:attr.size==='small',backMan_main_raffleS_prizePictur_col_r2c1_size_min:attr.size==='min',backMan_main_raffleS_prizePictur_col_r2c1_checked:pvt_win.isChecked.r2c1,backMan_main_raffleS_prizePictur_col_r2c1_disable:attr.disabled}"
                 :style="pvt_win.style.r2c1"
                 @click="closeDialog">

                <lm1a-link-text
                        ref="closeIcon"
                        refId="closeIcon"
                        v-show="pvt_isShow.r2c1 === 'closeIcon'"
                        :paraVarPair="pvt_r2c1.closeIcon.paraVarPair"
                        :para="pvt_r2c1.closeIcon.para"
                        :attr="pvt_r2c1.closeIcon.attr">
                </lm1a-link-text>
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
                pvt_subModuleMap: {
                    vessel: ["r1c1", "r2c1"],
                    subModule: ["image", "closeIcon"],
                },
                pvt_isShow: {
                    r1c1: null,
                    r2c1: null,
                },
                pvt_win: {
                    isShow: {
                        backMan_main_raffleS_prizePictur: true,
                        r1c1: true,
                        r2c1: true,
                    },
                    isChecked: {
                        backMan_main_raffleS_prizePictur: false,
                        r1c1: false,
                        r2c1: false,
                    },
                    style: {
                        backMan_main_raffleS_prizePictur: null,
                        r1c1: null,
                        r2c1: null,
                    },
                },
                pvt_eventPortInput: [],

                picture: [],
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
        },
        computed: {
            pvt_r1c1: function () {
                return {
                    image: {
                        paraVarPair: {
                            image: "picture",
                        },
                        para: {
                            image: this.picture,
                        },
                        attr: {},
                    },
                };
            },
            pvt_r2c1: function () {
                return {
                    closeIcon: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            label: "div",
                            fontWeight: 400,
                            textAlign: "center",
                            color: "#fff",
                            fontSize: "20px",
                            icon: "el-icon-close",
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
            closeIcon_textClickEvent: function () {
                this.closeDialog();
            },

            // 方法
            startModule: function (successCallBack, errorCallBack) {
                let $this = this, para, dbFlag, field, record, data;
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
                            console.log("prizePictureDialog startModule: para.nStep = " + para.nStep);
                            para.nStepOld = para.nStep;
                        }
                    }
                    switch (para.nStep) {
                        case 0:
                        case "showSubModule":
                            $this.showSubModule(["closeIcon"], true, function () {
                                para.nStep = "read_prize";
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            });
                            break;
                        case "read_prize":
                            switch ($this.para.type) {
                                case 0:
                                    field = $this.mac.fd.prize.picture;
                                    break;
                                case 1:
                                    field = $this.mac.fd.prize.selected_graphic;
                                    break;
                                case 2:
                                    field = $this.mac.fd.prize.no_selected_graphic;
                                    break;
                            }
                            record = {
                                id: [$this.para.prizeId],
                                table: $this.mac.tb.prize,
                                field: [field]
                            };
                            data = {};
                            $this.sys.api.recordRead(null, null, record, data, function () {
                                para.imgUrl = data[field][0][0];
                                para.nStep = "closeIcon_startModule";
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;
                        case 'getPicture':
                            $this.sys.api.openFile(para.imgUrl, function (file) {
                                para.offset = null;
                                para.length = null;
                                $this.sys.api.readFile(para.offset, para.length, file, function (content) {
                                    $this.picture = [content];
                                    $this.sys.api.closeFile(file, function () {
                                        para.nStep = 'forceUpdateData';
                                        if (++dbFlag === 2) {
                                            $this.startModule(successCallBack, errorCallBack);
                                        }
                                    }, para.errorCallBack);
                                }, para.errorCallBack);
                            }, para.errorCallBack);
                            break;
                        case "forceUpdateData":
                            $this.forceUpdateData(function () {
                                para.nStep = "image_startModule";
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            });
                            break;
                        case "image_startModule":
                            $this.sm.image.startModule(function () {
                                para.nStep = "showSubModule1";
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack);
                                }
                            }, para.errorCallBack);
                            break;

                      case "showSubModule1":
                        $this.showSubModule(["image"], true, function () {
                          para.nStep = "end";
                          if (++dbFlag === 2) {
                            $this.startModule(successCallBack, errorCallBack);
                          }
                        });
                        break;
                        case "closeIcon_startModule":
                            $this.sm.closeIcon.startModule(function () {
                                para.nStep = "getPicture";
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
            closeDialog: function () {
                this.hideSelfModule(this.refId, function () {

                }, function (error) {
                    console.log(error)
                })
            },
        },
    };
</script>
<style lang="scss" scoped>
    .backMan_main_raffleS_prizePictur_container {
        width: 100%;
        height: 100%;
    }

    .backMan_main_raffleS_prizePictur_mask {
        display: flex;
        position: fixed;
        left: 0;
        top: 0;
        width: 100vw;
        height: 100vh;
        background-color: rgba(0, 0, 0, .4);
    }

    .backMan_main_raffleS_prizePictur_dialog {
        position: absolute;
        left: -10px;
        top: -10px;
    }

    .backMan_main_raffleS_prizePictur_overlay {
        position: absolute;
        left: 0;
        top: 0;
    }

    .backMan_main_raffleS_prizePictur_row {
        display: flex;
    }

    .backMan_main_raffleS_prizePictur_col {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
    }

    .backMan_main_raffleS_prizePictur_col_backMan_main_raffleS_prizePictur_size_medium {
        width: $backMan_main_raffleS_prizePictur-backMan_main_raffleS_prizePictur-medium-width;
        height: $backMan_main_raffleS_prizePictur-backMan_main_raffleS_prizePictur-medium-height;
    }

    .backMan_main_raffleS_prizePictur_col_r1c1_size_medium {
        width: $backMan_main_raffleS_prizePictur-r1c1-medium-width;
    }

    .backMan_main_raffleS_prizePictur_col_r2c1_size_medium {
        position: absolute;
        top: -18px;
        right: -18px;
        z-index: 9;
        width: $backMan_main_raffleS_prizePictur-r2c1-medium-width;
        height: $backMan_main_raffleS_prizePictur-r2c1-medium-height;
        align-items: $backMan_main_raffleS_prizePictur-r2c1-medium-horizontal-position;
        box-sizing: border-box;
        border-radius: 50%;
        padding: 9px 9px;
        background-color: rgba(0, 0, 0, 0.4);
        color: #fff;
        line-height: 20px;
    }
    .backMan_main_raffleS_prizePictur_row_row0 {
        height: 100%;
    }
</style>
