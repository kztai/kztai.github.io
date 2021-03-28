<template>
    <div>
        <div class="row">
            <div :class="{'col': true, 'col_w_20': true, 'root-normal': attr.size === 'normal', 'root-max': attr.size === 'max', 'root-middle': attr.size === 'middle', 'root-smaller': attr.size === 'smaller', 'root-min': attr.size === 'min', 'root-all': true}">
                <div class="row">
                    <div :class="{'col': true, 'col_w_5': true, 'col1-normal': attr.size === 'normal', 'col1-max': attr.size === 'max', 'col1-middle': attr.size === 'middle', 'col1-smaller': attr.size === 'smaller', 'col1-min': attr.size === 'min', 'col1-all': true}">
                        <lm-button
                                ref="smButton1"
                                refId="smButton1"
                                v-show="pvt_isShow.col1 === 'smButton1'"
                                :paraVarPair="pvt_col1.smButton1.paraVarPair"
                                :para="pvt_col1.smButton1.para"
                                :attr="pvt_col1.smButton1.attr">
                        </lm-button>
                    </div>
                    <div :class="{'col': true, 'col_w_5': true, 'col2-normal': attr.size === 'normal', 'col2-max': attr.size === 'max', 'col2-middle': attr.size === 'middle', 'col2-smaller': attr.size === 'smaller', 'col2-min': attr.size === 'min', 'col2-all': true}">
                        <lm-button
                                ref="smButton2"
                                refId="smButton2"
                                v-show="pvt_isShow.col2 === 'smButton2'"
                                :paraVarPair="pvt_col2.smButton2.paraVarPair"
                                :para="pvt_col2.smButton2.para"
                                :attr="pvt_col2.smButton2.attr">
                        </lm-button>
                    </div>
                    <div :class="{'col': true, 'col_w_5': true, 'col3-normal': attr.size === 'normal', 'col3-max': attr.size === 'max', 'col3-middle': attr.size === 'middle', 'col3-smaller': attr.size === 'smaller', 'col3-min': attr.size === 'min', 'col3-all': true}">
                        <lm-button
                                ref="smButton3"
                                refId="smButton3"
                                v-show="pvt_isShow.col3 === 'smButton3'"
                                :paraVarPair="pvt_col3.smButton3.paraVarPair"
                                :para="pvt_col3.smButton3.para"
                                :attr="pvt_col3.smButton3.attr">
                        </lm-button>
                    </div>
                    <div :class="{'col': true, 'col_w_5': true, 'col4-normal': attr.size === 'normal', 'col4-max': attr.size === 'max', 'col4-middle': attr.size === 'middle', 'col4-smaller': attr.size === 'smaller', 'col4-min': attr.size === 'min', 'col4-all': true}">
                        <lm-link-text
                                ref="smText1"
                                refId="smText1"
                                v-show="pvt_isShow.col4 === 'smText1'"
                                :paraVarPair="pvt_col4.smText1.paraVarPair"
                                :para="pvt_col4.smText1.para"
                                :attr="pvt_col4.smText1.attr">
                        </lm-link-text>
                    </div>
                </div>
                <div class="row">
                    <div :class="{'col': true, 'col_w_20': true, 'col5-normal': attr.size === 'normal', 'col5-max': attr.size === 'max', 'col5-middle': attr.size === 'middle', 'col5-smaller': attr.size === 'smaller', 'col5-min': attr.size === 'min', 'col5-all': true}">
                        <lm-link-text
                                ref="smText2"
                                refId="smText2"
                                v-show="pvt_isShow.col5 === 'smText2'"
                                :paraVarPair="pvt_col5.smText2.paraVarPair"
                                :para="pvt_col5.smText2.para"
                                :attr="pvt_col5.smText2.attr">
                        </lm-link-text>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';

    export default {
        components: {},
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ["sys"],
        data: function () {
            return {
                mac: mac.mac,

                pvt_subModuleMap: {
                    vessel: ["col1", "col2", "col3", "col4", "col5"],
                    subModule: ["smButton1", "smButton2", "smButton3", "smText1", "smText2"]
                },

                pvt_isShow: {"col1": null, "col2": null, "col3": null, "col4": null, "col5": null},
                // pvt_isShow: {"col1": 'smButton1', "col2": 'smButton2', "col3": 'smButton3', "col4": 'smText1', "col5": 'smText2'},

                // 当前模块输入类型的事务接口名称，工具完成前需要用户手动填写
                pvt_eventPortInput: ['ep1', 'ep2'],
            }
        },
        computed: {
            pvt_col1: function(){
                return {
                    smButton1: {
                        paraVarPair: {

                        },
                        para: {
                            name: ['关于瓴码', '']
                        },
                        attr: {
                            type: 'text'
                        }
                    }
                }
            },

            pvt_col2: function(){
                return {
                    smButton2: {
                        paraVarPair: {

                        },
                        para: {
                            name: ['联系我们', '']
                        },
                        attr: {
                            type: 'text'
                        }
                    }
                }
            },

            pvt_col3: function(){
                return {
                    smButton3: {
                        paraVarPair: {

                        },
                        para: {
                            name: ['APP下载', '']
                        },
                        attr: {
                            type: 'text'
                        }
                    }
                }
            },

            pvt_col4: function(){
                return {
                    smText1: {
                        paraVarPair: {

                        },
                        para: {
                            textData: '粤ICP备12031756号'
                        },
                        attr: {
                            fontSize:'14px'
                        }
                    }
                }
            },

            pvt_col5: function(){
                return {
                    smText2: {
                        paraVarPair: {

                        },
                        para: {
                            textData: '©1999-2019瓴码'
                        },
                        attr: {
                            fontSize:'14px'
                        }
                    }
                }
            }
        },

        created: function () {
            Object.assign(this, libSys, libUpload);
        },
        mounted: function () {
            this.pvt_initSysData();
        },
        methods: {
            startModule: function (successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'applyFoot.start';
                let dbFlag;
                let dbData;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0
                };

                if (successCallBack !== null) {
                    errorCallBack = para;
                    successCallBack = null
                }
                para = errorCallBack;

                let ref = {
                    smButton1: 'smButton1',
                    smButton2: 'smButton2',
                    smButton3: 'smButton3',
                    smText1: 'smText1',
                    smText2: 'smText2',
                };

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                            that.isBold = false;
                            that.isDelete = false;
                            that.cloudBlogId = null;
                            that.blogType = 0;
                            that.blogAbstract = '';

                            para.nStep = 'col1_start';
                            dbFlag++;
                            break;
                        case 'col1_start':
                            that.sm[ref.smButton1].startModule(function () {
                                para.nStep = 'col1_show';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'col1_show':
                            that.showSubModule(ref.smButton1, true, function () {
                                para.nStep = 'col2_start';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'col2_start':
                            that.sm[ref.smButton2].startModule(function () {
                                para.nStep = 'col2_show';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'col2_show':
                            that.showSubModule(ref.smButton2, true, function () {
                                para.nStep = 'col3_start';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'col3_start':
                            that.sm[ref.smButton3].startModule(function () {
                                para.nStep = 'col3_show';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'col3_show':
                            that.showSubModule(ref.smButton3, true, function () {
                                para.nStep = 'col4_start';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'col4_start':
                            that.sm[ref.smText1].startModule(function () {
                                para.nStep = 'col4_show';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'col4_show':
                            that.showSubModule(ref.smText1, true, function () {
                                para.nStep = 'col5_start';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'col5_start':
                            that.sm[ref.smText2].startModule(function () {
                                para.nStep = 'col5_show';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'col5_show':
                            that.showSubModule(ref.smText2, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'end':
                            para.successCallBack();
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
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