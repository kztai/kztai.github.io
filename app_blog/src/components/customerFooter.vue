<template>
    <div>
        <div class="row">
            <div :class="{'col': true, 'col_w_20': true, 'root-normal': attr.size === 'normal', 'root-max': attr.size === 'max', 'root-middle': attr.size === 'middle', 'root-smaller': attr.size === 'smaller', 'root-min': attr.size === 'min', 'root-all': true}">
                <div class="row">
                    <div :class="{'col': true, 'col_w_5': true, 'col1-normal': attr.size === 'normal', 'col1-max': attr.size === 'max', 'col1-middle': attr.size === 'middle', 'col1-smaller': attr.size === 'smaller', 'col1-min': attr.size === 'min', 'col1-all': true}">
                        <button-component
                                v-show="pvt_isShow.col1"
                                :ref="pvt_currentRef.col1"
                                :refId="pvt_currentRef.col1"
                                :para="pvt_col1_para[pvt_currentRef.col1].para"
                                :attr="pvt_col1_attr[pvt_currentRef.col1].attr">
                        </button-component>
                    </div>
                    <div :class="{'col': true, 'col_w_5': true, 'col2-normal': attr.size === 'normal', 'col2-max': attr.size === 'max', 'col2-middle': attr.size === 'middle', 'col2-smaller': attr.size === 'smaller', 'col2-min': attr.size === 'min', 'col2-all': true}">
                        <button-component
                                v-show="pvt_isShow.col2"
                                :ref="pvt_currentRef.col2"
                                :refId="pvt_currentRef.col2"
                                :para="pvt_col2_para[pvt_currentRef.col2].para"
                                :attr="pvt_col2_attr[pvt_currentRef.col2].attr">
                        </button-component>
                    </div>
                    <div :class="{'col': true, 'col_w_5': true, 'col3-normal': attr.size === 'normal', 'col3-max': attr.size === 'max', 'col3-middle': attr.size === 'middle', 'col3-smaller': attr.size === 'smaller', 'col3-min': attr.size === 'min', 'col3-all': true}">
                        <button-component
                                v-show="pvt_isShow.col3"
                                :ref="pvt_currentRef.col3"
                                :refId="pvt_currentRef.col3"
                                :para="pvt_col3_para[pvt_currentRef.col3].para"
                                :attr="pvt_col3_attr[pvt_currentRef.col3].attr">
                        </button-component>
                    </div>
                    <div :class="{'col': true, 'col_w_5': true, 'col4-normal': attr.size === 'normal', 'col4-max': attr.size === 'max', 'col4-middle': attr.size === 'middle', 'col4-smaller': attr.size === 'smaller', 'col4-min': attr.size === 'min', 'col4-all': true}">
                        <text-component
                                v-show="pvt_isShow.col4"
                                :ref="pvt_currentRef.col4"
                                :refId="pvt_currentRef.col4"
                                :para="pvt_col4_para[pvt_currentRef.col4].para"
                                :attr="pvt_col4_attr[pvt_currentRef.col4].attr">
                        </text-component>
                    </div>
                </div>
                <div class="row">
                    <div :class="{'col': true, 'col_w_20': true, 'col5-normal': attr.size === 'normal', 'col5-max': attr.size === 'max', 'col5-middle': attr.size === 'middle', 'col5-smaller': attr.size === 'smaller', 'col5-min': attr.size === 'min', 'col5-all': true}">
                        <text-component
                                v-show="pvt_isShow.col5"
                                :ref="pvt_currentRef.col5"
                                :refId="pvt_currentRef.col5"
                                :para="pvt_col5_para[pvt_currentRef.col5].para"
                                :attr="pvt_col5_attr[pvt_currentRef.col5].attr">
                        </text-component>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import buttonComponent from '@/components/baseComponent/buttonComponent';
    import textComponent from '@/components/baseComponent/textComponent';

    export default {
        components: {buttonComponent, textComponent},
        props: ["refId", "para", "attr"],
        inject: ["sys"],
        data: function () {
            return {
                pvt_isSubModuleStarted: false,
                pvt_subModuleMethodQueue: {},
                pvt_vesselRef: {
                    "vesselId": ["col1", "col2", "col3", "col4", "col5"],
                    "ref": ["smButton1", "smButton2", "smButton3", "smText1", "smText2"]
                },
                pvt_currentRef: {
                    "col1": "smButton1",
                    "col2": "smButton2",
                    "col3": "smButton3",
                    "col4": "smText1",
                    "col5": "smText2"
                },
                pvt_isShow: {"col1": true, "col2": true, "col3": true, "col4": true, "col5": true},
                pvt_isMounted: {
                    "smButton1": false,
                    "smButton2": false,
                    "smButton3": false,
                    "smText1": false,
                    "smText2": false
                },
            }
        },
        computed: {
            pvt_col1_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.col1,
                    isShow: this.pvt_isShow.col1,
                    smButton1: {componentName: "buttonComponent"},
                }
            }, pvt_col1_para: function () {
                return {
                    smButton1: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_col1_comp.isShow,
                            $isMounted: this.pvt_isMounted.smButton1,
                            name: {$table: '', $field: [], $value: ['关于瓴码']}
                        }
                    },
                }
            }, pvt_col1_attr: function () {
                return {
                    smButton1: {attr: {type: 'text'}},
                }
            }, pvt_col2_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.col2,
                    isShow: this.pvt_isShow.col2,
                    smButton2: {componentName: "buttonComponent"},
                }
            }, pvt_col2_para: function () {
                return {
                    smButton2: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_col2_comp.isShow,
                            $isMounted: this.pvt_isMounted.smButton2,
                            name: {$table: '', $field: [], $value: ['联系我们']}
                        }
                    },
                }
            }, pvt_col2_attr: function () {
                return {
                    smButton2: {attr: {type: 'text'}},
                }
            }, pvt_col3_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.col3,
                    isShow: this.pvt_isShow.col3,
                    smButton3: {componentName: "buttonComponent"},
                }
            }, pvt_col3_para: function () {
                return {
                    smButton3: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_col3_comp.isShow,
                            $isMounted: this.pvt_isMounted.smButton3,
                            name: {$table: '', $field: [], $value: ['APP下载']}
                        }
                    },
                }
            }, pvt_col3_attr: function () {
                return {
                    smButton3: {attr: {type: 'text'}},
                }
            }, pvt_col4_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.col4,
                    isShow: this.pvt_isShow.col4,
                    smText1: {componentName: "textComponent"},
                }
            }, pvt_col4_para: function () {
                return {
                    smText1: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_col4_comp.isShow,
                            $isMounted: this.pvt_isMounted.smText1,
                            textData: {$table: '', $field: [], $value: ['粤ICP备12031756号']}
                        }
                    },
                }
            }, pvt_col4_attr: function () {
                return {
                    smText1: {attr: {fontSize:'14px'}},
                }
            }, pvt_col5_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.col5,
                    isShow: this.pvt_isShow.col5,
                    smText2: {componentName: "textComponent"},
                }
            }, pvt_col5_para: function () {
                return {
                    smText2: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_col5_comp.isShow,
                            $isMounted: this.pvt_isMounted.smText2,
                            textData: {$table: '', $field: [], $value: ['©1999-2019瓴码']}
                        }
                    },
                }
            }, pvt_col5_attr: function () {
                return {
                    smText2: {attr: {textAlign: 'center',fontSize:'14px'}},
                }
            },
        },
        watch: {
            para: {
                handler: function (val, oldVal) {
                    var $this = this;
                    Object.assign($this, $this.sys.lib);
                    if (val.$api && val.$isShow && val.$isMounted
                        && !$this.$lodash.isEqual(val, oldVal)) {
                        $this.pvt_isSubModuleStarted = true;
                        $this.startModule(function () {
                            setTimeout(function () {
                                if ($this.$parent.subModuleActivatedEvent) {
                                    $this.$parent.subModuleActivatedEvent($this.refId);
                                }
                            }, 0);
                        }, function () {

                        });
                    } else if (oldVal) {
                        setTimeout(function () {
                            if ($this.$parent.subModuleActivatedEvent) {
                                $this.$parent.subModuleActivatedEvent($this.refId);
                            }
                        }, 0);
                    }
                },
                deep: true,
                immediate: true,
            },
        },
        mounted: function () {
            if (this.$parent.pvt_isMounted) {
                this.$parent.pvt_isMounted[this.refId] = true;
            }
        },
        methods: {
            startModule:function () {

            },
        }
    }
</script>
<style lang="scss" scoped>
    .row {

    }

    .col {
        box-sizing: border-box;
        height: 100%;
        display: inline-block;
        vertical-align: middle;
    }

    .col_w_1 {
        width: 5%;
    }

    .col_w_2 {
        width: 10%;
    }

    .col_w_3 {
        width: 15%;
    }

    .col_w_4 {
        width: 20%;
    }

    .col_w_5 {
        width: 25%;
    }

    .col_w_6 {
        width: 30%;
    }

    .col_w_7 {
        width: 35%;
    }

    .col_w_8 {
        width: 40%;
    }

    .col_w_9 {
        width: 45%;
    }

    .col_w_10 {
        width: 50%;
    }

    .col_w_11 {
        width: 55%;
    }

    .col_w_12 {
        width: 60%;
    }

    .col_w_13 {
        width: 65%;
    }

    .col_w_14 {
        width: 70%;
    }

    .col_w_15 {
        width: 75%;
    }

    .col_w_16 {
        width: 80%;
    }

    .col_w_17 {
        width: 85%;
    }

    .col_w_18 {
        width: 90%;
    }

    .col_w_19 {
        width: 95%;
    }

    .col_w_20 {
        width: 100%;
    }

    .root-normal {
    }

    .root-max {
    }

    .root-middle {
    }

    .root-smaller {
    }

    .root-min {
    }

    .root-all {
    }

    .col1-normal {
    }

    .col1-max {
    }

    .col1-middle {
    }

    .col1-smaller {
    }

    .col1-min {
    }

    .col1-all {
    }

    .col2-normal {
    }

    .col2-max {
    }

    .col2-middle {
    }

    .col2-smaller {
    }

    .col2-min {
    }

    .col2-all {
    }

    .col3-normal {
    }

    .col3-max {
    }

    .col3-middle {
    }

    .col3-smaller {
    }

    .col3-min {
    }

    .col3-all {
    }

    .col4-normal {
    }

    .col4-max {
    }

    .col4-middle {
    }

    .col4-smaller {
    }

    .col4-min {
    }

    .col4-all {
    }

    .col5-normal {
    }

    .col5-max {
    }

    .col5-middle {
    }

    .col5-smaller {
    }

    .col5-min {
    }

    .col5-all {
    }


    /* ------ Module Style Variable ------- */

</style>