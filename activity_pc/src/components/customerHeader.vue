<template>
    <div class="indexHeader">
        <div class="row">
            <div :class="{'col': true, 'col_w_20': true, 'root-normal': attr.size === 'normal', 'root-max': attr.size === 'max', 'root-middle': attr.size === 'middle', 'root-smaller': attr.size === 'smaller', 'root-min': attr.size === 'min', 'root-all': true}">
                <div class="row">
                    <div class="f-l">
                        <div style="display: inline-block;border:1px solid #757575;height: 78px;width: 78px;margin-left: 100px;">
                            <img src="" alt="" >
                        </div>
                        <div class="header-logo">
                            <text-component
                                    v-show="pvt_isShow.col1"
                                    :ref="pvt_currentRef.col1"
                                    :refId="pvt_currentRef.col1"
                                    :para="pvt_col1_para[pvt_currentRef.col1].para"
                                    :attr="pvt_col1_attr[pvt_currentRef.col1].attr">
                            </text-component>
                        </div>
                    </div>
                    <div class="f-r w-900">
                        <div :class="{'col': true, 'col_w_20': true, 'root-normal': attr.size === 'normal', 'root-max': attr.size === 'max', 'root-middle': attr.size === 'middle', 'root-smaller': attr.size === 'smaller', 'root-min': attr.size === 'min', 'root-all': true}">
                            <div class="row">
                                <div :class="{'col': true, 'col_w_3': true, 'col2-normal': attr.size === 'normal', 'col2-max': attr.size === 'max', 'col2-middle': attr.size === 'middle', 'col2-smaller': attr.size === 'smaller', 'col2-min': attr.size === 'min', 'col2-all': true}">
                                    <button-component
                                            v-show="pvt_isShow.col2"
                                            :ref="pvt_currentRef.col2"
                                            :refId="pvt_currentRef.col2"
                                            :para="pvt_col2_para[pvt_currentRef.col2].para"
                                            :attr="pvt_col2_attr[pvt_currentRef.col2].attr">
                                    </button-component>
                                </div>
                                <div :class="{'col': true, 'col_w_3': true, 'col3-normal': attr.size === 'normal', 'col3-max': attr.size === 'max', 'col3-middle': attr.size === 'middle', 'col3-smaller': attr.size === 'smaller', 'col3-min': attr.size === 'min', 'col3-all': true}">
                                    <button-component
                                            v-show="pvt_isShow.col3"
                                            :ref="pvt_currentRef.col3"
                                            :refId="pvt_currentRef.col3"
                                            :para="pvt_col3_para[pvt_currentRef.col3].para"
                                            :attr="pvt_col3_attr[pvt_currentRef.col3].attr">
                                    </button-component>
                                </div>
                                <div  :class="{'col': true, 'col_w_3': true, 'col4-normal': attr.size === 'normal', 'col4-max': attr.size === 'max', 'col4-middle': attr.size === 'middle', 'col4-smaller': attr.size === 'smaller', 'col4-min': attr.size === 'min', 'col4-all': true}">
                                    <button-component
                                            v-show="pvt_isShow.col4"
                                            :ref="pvt_currentRef.col4"
                                            :refId="pvt_currentRef.col4"
                                            :para="pvt_col4_para[pvt_currentRef.col4].para"
                                            :attr="pvt_col4_attr[pvt_currentRef.col4].attr">
                                    </button-component>
                                </div>
                                <div :class="{'col': true, 'col_w_3': true, 'col5-normal': attr.size === 'normal', 'col5-max': attr.size === 'max', 'col5-middle': attr.size === 'middle', 'col5-smaller': attr.size === 'smaller', 'col5-min': attr.size === 'min', 'col5-all': true}">
                                    <button-component
                                            v-show="pvt_isShow.col5"
                                            :ref="pvt_currentRef.col5"
                                            :refId="pvt_currentRef.col5"
                                            :para="pvt_col5_para[pvt_currentRef.col5].para"
                                            :attr="pvt_col5_attr[pvt_currentRef.col5].attr">
                                    </button-component>
                                </div>
                                <div :class="{'col': true, 'col_w_3': true, 'col6-normal': attr.size === 'normal', 'col6-max': attr.size === 'max', 'col6-middle': attr.size === 'middle', 'col6-smaller': attr.size === 'smaller', 'col6-min': attr.size === 'min', 'col6-all': true}">
                                    <button-component
                                            v-show="pvt_isShow.col6"
                                            :ref="pvt_currentRef.col6"
                                            :refId="pvt_currentRef.col6"
                                            :para="pvt_col6_para[pvt_currentRef.col6].para"
                                            :attr="pvt_col6_attr[pvt_currentRef.col6].attr">
                                    </button-component>
                                </div>
                                <div style="text-align: center;" :class="{'col': true, 'col_w_4': true, 'col7-normal': attr.size === 'normal', 'col7-max': attr.size === 'max', 'col7-middle': attr.size === 'middle', 'col7-smaller': attr.size === 'smaller', 'col7-min': attr.size === 'min', 'col7-all': true}">
                                    <dropdown-component
                                            v-show="pvt_isShow.col7"
                                            :ref="pvt_currentRef.col7"
                                            :refId="pvt_currentRef.col7"
                                            :para="pvt_col7_para[pvt_currentRef.col7].para"
                                            :attr="pvt_col7_attr[pvt_currentRef.col7].attr">
                                    </dropdown-component>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import textComponent from '@/components/baseComponent/textComponent';
    import buttonComponent from '@/components/baseComponent/buttonComponent';
    import dropdownComponent from '@/components/baseComponent/dropdownComponent';

    export default {
        components: {textComponent, buttonComponent, dropdownComponent},
        props: ["refId", "para", "attr"],
        inject: ["sys"],
        data: function () {
            return {
                menuList: [{value: 0, label: '我的主页'}, {value: 1, label: '账号关联'}, {value: 2, label: '修改密码'}, {
                    value: 3,
                    label: '退出'
                }],
                menuValue: 0,

                pvt_isSubModuleStarted: false,
                pvt_subModuleMethodQueue: {},
                pvt_vesselRef: {
                    "vesselId": ["col1", "col2", "col3", "col4", "col5", "col6", "col7"],
                    "ref": ["smText1", "smButton1", "smButton2", "smButton3", "smButton4", "smButton5", "smSelect"]
                },
                pvt_currentRef: {
                    "col1": "smText1",
                    "col2": "smButton1",
                    "col3": "smButton2",
                    "col4": "smButton3",
                    "col5": "smButton4",
                    "col6": "smButton5",
                    "col7": "smSelect"
                },
                pvt_isShow: {
                    "col1": true,
                    "col2": true,
                    "col3": true,
                    "col4": true,
                    "col5": true,
                    "col6": true,
                    "col7": true
                },
                pvt_isMounted: {
                    "smText1": false,
                    "smButton1": false,
                    "smButton2": false,
                    "smButton3": false,
                    "smButton4": false,
                    "smButton5": false,
                    "smSelect": false
                },
            }
        },
        computed: {
            pvt_col1_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.col1,
                    isShow: this.pvt_isShow.col1,
                    smText1: {componentName: "textComponent"},
                }
            }, pvt_col1_para: function () {
                return {
                    smText1: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_col1_comp.isShow,
                            $isMounted: this.pvt_isMounted.smText1,
                            textData: {$table: '', $field: [], $value: ['瓴码']}
                        }
                    },
                }
            }, pvt_col1_attr: function () {
                return {
                    smText1: {attr: {fontSize: '24px', fontWeight: 'bold', textAlign: 'right'}},
                }
            }, pvt_col2_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.col2,
                    isShow: this.pvt_isShow.col2,
                    smButton1: {componentName: "buttonComponent"},
                }
            }, pvt_col2_para: function () {
                return {
                    smButton1: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_col2_comp.isShow,
                            $isMounted: this.pvt_isMounted.smButton1,
                            name: {$table: '', $field: [], $value: ['论坛']}
                        }
                    },
                }
            }, pvt_col2_attr: function () {
                return {
                    smButton1: {attr: {type: 'text',height:'80px'}},
                }
            }, pvt_col3_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.col3,
                    isShow: this.pvt_isShow.col3,
                    smButton2: {componentName: "buttonComponent"},
                }
            }, pvt_col3_para: function () {
                return {
                    smButton2: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_col3_comp.isShow,
                            $isMounted: this.pvt_isMounted.smButton2,
                            name: {$table: '', $field: [], $value: ['消息']}
                        }
                    },
                }
            }, pvt_col3_attr: function () {
                return {
                    smButton2: {attr: {type: 'text',height:'80px'}},
                }
            }, pvt_col4_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.col4,
                    isShow: this.pvt_isShow.col4,
                    smButton3: {componentName: "buttonComponent"},
                }
            }, pvt_col4_para: function () {
                return {
                    smButton3: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_col4_comp.isShow,
                            $isMounted: this.pvt_isMounted.smButton3,
                            name: {$table: '', $field: [], $value: ['商城']}
                        }
                    },
                }
            }, pvt_col4_attr: function () {
                return {
                    smButton3: {attr: {type: 'text',height:'80px'}},
                }
            }, pvt_col5_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.col5,
                    isShow: this.pvt_isShow.col5,
                    smButton4: {componentName: "buttonComponent"},
                }
            }, pvt_col5_para: function () {
                return {
                    smButton4: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_col5_comp.isShow,
                            $isMounted: this.pvt_isMounted.smButton4,
                            name: {$table: '', $field: [], $value: ['活动']}
                        }
                    },
                }
            }, pvt_col5_attr: function () {
                return {
                    smButton4: {attr: {type: 'text',height:'80px'}},
                }
            }, pvt_col6_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.col6,
                    isShow: this.pvt_isShow.col6,
                    smButton5: {componentName: "buttonComponent"},
                }
            }, pvt_col6_para: function () {
                return {
                    smButton5: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_col6_comp.isShow,
                            $isMounted: this.pvt_isMounted.smButton5,
                            name: {$table: '', $field: [], $value: ['APP下载']}
                        }
                    },
                }
            }, pvt_col6_attr: function () {
                return {
                    smButton5: {attr: {type: 'text',height:'80px'}},
                }
            }, pvt_col7_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.col7,
                    isShow: this.pvt_isShow.col7,
                    smSelect: {
                        componentName: 'dropdownComponent'
                    }
                }
            },
            pvt_col7_para: function () {
                return {
                    smSelect: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_col7_comp.isShow,
                            $isMounted: this.pvt_isMounted.smSelect,
                            dropDown:{$table: '', $value: [[{id:  '1',label: '我的主页',icon:  '', disable: false},{id:  '2',label: '账号关联',icon:  '', disable: false},{id:  '3',label: '修改密码',icon:  '', disable: false},{id:  '4',label: '设置',icon:  '', disable: false},{id:  '5',label: '退出',icon:  '', disable: false}]]},
                            menuName:{$table: '', $value:['我的主页']},
                        }
                    }
                }
            },
            pvt_col7_attr: function () {
                return {
                    smSelect: {
                        attr: {

                        }
                    }
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
            startModule: function (successCallBack, errorCallBack) {

            },
            smSelect_selectChangeEvent(refId,value){
                this.callSpecifiedMethod(refId, '', null, 'callModuleEventPort', ['labelChangeEvent', [value]]);
            },
        }
    }
</script>
<style lang="scss" scoped>
    .row {

    }

    .indexHeader{
        height: 80px;
    }

    .f-l{
        float: left;
        line-height: 80px;
        height: 80px;
    }

    .header-logo{
        display: inline-block;
        vertical-align: middle;
        margin:-2px 0 0 20px;
    }

    .f-r{
        float: right;
        width:900px;
    }


    .col {
        box-sizing: border-box;
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


    /* ------ Module Style Variable ------- */

</style>
