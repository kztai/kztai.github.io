<template>
    <div class="footer">
        <div class="row footerDV">
            <div :class="{'col': true, 'col_w_20': true, 'root-normal': attr.size === 'normal', 'root-max': attr.size === 'max', 'root-middle': attr.size === 'middle', 'root-smaller': attr.size === 'smaller', 'root-min': attr.size === 'min', 'root-all': true}">
                <div class="row">
                    <div :class="{'col': true, 'col_w_6': true, 'col1-normal': attr.size === 'normal', 'col1-max': attr.size === 'max', 'col1-middle': attr.size === 'middle', 'col1-smaller': attr.size === 'smaller', 'col1-min': attr.size === 'min', 'col1-all': true}">
                        <lm-button
                                ref="smButton1"
                                refId="smButton1"
                                v-show="pvt_isShow.v1 === 'smButton1'"
                                :paraVarPair="pvt_v1.smButton1.paraVarPair"
                                :para="pvt_v1.smButton1.para"
                                :attr="pvt_v1.smButton1.attr">
                        </lm-button>
                    </div>
                    <div :class="{'col': true, 'col_w_6': true, 'col2-normal': attr.size === 'normal', 'col2-max': attr.size === 'max', 'col2-middle': attr.size === 'middle', 'col2-smaller': attr.size === 'smaller', 'col2-min': attr.size === 'min', 'col2-all': true}">
                        <lm-button
                                ref="smButton2"
                                refId="smButton2"
                                v-show="pvt_isShow.v2 === 'smButton2'"
                                :paraVarPair="pvt_v2.smButton2.paraVarPair"
                                :para="pvt_v2.smButton2.para"
                                :attr="pvt_v2.smButton2.attr">
                        </lm-button>
                    </div>
                    <div :class="{'col': true, 'col_w_6': true, 'col3-normal': attr.size === 'normal', 'col3-max': attr.size === 'max', 'col3-middle': attr.size === 'middle', 'col3-smaller': attr.size === 'smaller', 'col3-min': attr.size === 'min', 'col3-all': true}">
                        <lm-button
                                ref="smButton3"
                                refId="smButton3"
                                v-show="pvt_isShow.v3 === 'smButton3'"
                                :paraVarPair="pvt_v3.smButton3.paraVarPair"
                                :para="pvt_v3.smButton3.para"
                                :attr="pvt_v3.smButton3.attr">
                        </lm-button>
                    </div>
                </div>
                <div class="row footerSign">
                    <div :class="{'col': true, 'col_w_10': true, 'col4-normal': attr.size === 'normal', 'col4-max': attr.size === 'max', 'col4-middle': attr.size === 'middle', 'col4-smaller': attr.size === 'smaller', 'col4-min': attr.size === 'min', 'col4-all': true}">
                        <lm-link-text
                                ref="smText1"
                                refId="smText1"
                                v-show="pvt_isShow.v4 === 'smText1'"
                                :paraVarPair="pvt_v4.smText1.paraVarPair"
                                :para="pvt_v4.smText1.para"
                                :attr="pvt_v4.smText1.attr">
                        </lm-link-text>
                    </div>
                    <div :class="{'col': true, 'col_w_10': true, 'col5-normal': attr.size === 'normal', 'col5-max': attr.size === 'max', 'col5-middle': attr.size === 'middle', 'col5-smaller': attr.size === 'smaller', 'col5-min': attr.size === 'min', 'col5-all': true}">
                        <lm-link-text
                                ref="smText2"
                                refId="smText2"
                                v-show="pvt_isShow.v5 === 'smText2'"
                                :paraVarPair="pvt_v5.smText2.paraVarPair"
                                :para="pvt_v5.smText2.para"
                                :attr="pvt_v5.smText2.attr">
                        </lm-link-text>
                    </div>
                </div>
            </div>
            <div class="footerShare row">
                <div class="col">
                    <lm-button
                            ref="smButton4"
                            refId="smButton4"
                            v-show="pvt_isShow.v6 === 'smButton4'"
                            :paraVarPair="pvt_v6.smButton4.paraVarPair"
                            :para="pvt_v6.smButton4.para"
                            :attr="pvt_v6.smButton4.attr">
                    </lm-button>
                </div>
                <div class="col">
                    <lm-button
                            ref="smButton5"
                            refId="smButton5"
                            v-show="pvt_isShow.v7 === 'smButton5'"
                            :paraVarPair="pvt_v7.smButton5.paraVarPair"
                            :para="pvt_v7.smButton5.para"
                            :attr="pvt_v7.smButton5.attr">
                    </lm-button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import libSys
        from '@/components/baseComponent/libSys.js';
    import libUpload
        from '@/components/baseComponent/libUpload.js';

    export default {
        components: {},
        props: ['refId', 'paraVarPair', 'para', 'attr'],
        inject: ["sys"],
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ["v1", "v2", "v3", "v4", "v5", "v6", "v7"],
                    subModule: ["smButton1", "smButton2", "smButton3", "smText1", "smText2", "smButton4", "smButton5"]
                },
                pvt_isShow: {
                    "v1": null,
                    "v2": null,
                    "v3": null,
                    "v4": null,
                    "v5": null,
                    "v6": null,
                    "v7": null,
                },

                pvt_eventPortInput: [
                    ''
                ],
            }
        },
        computed: {
            pvt_v1: function () {
                return {
                    smButton1: {
                        paraVarPair: {},
                        para: {
                            name: ['关于瓴码',''],
                        },
                        attr: {
                            type: 'text'
                        }
                    }
                }
            }, pvt_v2: function () {
                return {
                    smButton2: {
                        paraVarPair: {},
                        para: {
                            name: ['联系我们',''],
                        },
                        attr: {
                            type: 'text'
                        }
                    }
                }
            }, pvt_v3: function () {
                return {
                    smButton3: {
                        paraVarPair: {},
                        para: {
                            name: ['APP下载',''],
                        },
                        attr: {
                            type: 'text'
                        }
                    }
                }
            }, pvt_v4: function () {
                return {
                    smText1: {
                        paraVarPair: {},
                        para: {
                            textData: '粤ICP备12031756号'
                        },
                        attr: {
                            textAlign: 'center',fontSize:'12px',color:'#C0C4CC'
                        }
                    }
                }
            }, pvt_v5: function () {
                return {
                    smText2: {
                        paraVarPair: {},
                        para: {
                            textData: '©1999-2019瓴码'
                        },
                        attr: {
                            textAlign: 'center',fontSize:'12px',color:'#C0C4CC'
                        }
                    }
                }
            }, pvt_v6: function () {
                return {
                    smButton4: {
                        paraVarPair: {},
                        para: {
                            name: ['','lm-icon-wechat'],
                        },
                        attr: {
                            type:'text'
                        }
                    }
                }
            }, pvt_v7: function () {
                return {
                    smButton5: {
                        paraVarPair: {},
                        para: {
                            name: ['','lm-icon-wechat'],
                        },
                        attr: {
                            type:'text'
                        }
                    }
                }
            }
        },
        watch: {},
        mounted: function () {
            this.pvt_initSysData();
        },
        created: function () {
            Object.assign(this, libSys, libUpload);
        },
        methods: {
            startModule: function (successCallBack, errorCallBack) {
                let $this = this;
                let para;
                let dbFlag;
                let ref = {
                    sm1: 'smButton1',
                    sm2: 'smButton2',
                    sm3: 'smButton3',
                    sm4: 'smText1',
                    sm5: 'smText2',
                    sm6: 'smButton4',
                    sm7: 'smButton5',
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
                                para.nStep = 'showModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showModules':
                            //显示子组件
                            let refId = ["smButton1", "smButton2", "smButton3", "smText1", "smText2", "smButton4", "smButton5"];
                            $this.showSubModule(refId, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
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
            setPara: function (successCallBack, errorCallBack) {
                var para = {};
                para.successCallBack = successCallBack;
                para.errorCallBack = errorCallBack;
                para.nStep = 0;
                return para;
            },

        }
    }
</script>
<style lang="scss">
    .footer {
        .lm-button .el-button--text{
            color:#909399 !important;
            font-size: 14px;
        }
        .lm-icon-wechat{
            color:#909399;
            font-size: 20px !important;
        }
    }
</style>
<style lang="scss" scoped>
    .row {

    }

    .footer {
        height: 115px;
        border:1px solid #E5E5E5;
        .footerDV{
            width: 850px;
            position: relative;
            margin:30px auto 20px auto;
            .footerSign{
                width: 400px;
                margin:10px auto 0 auto;
            }
            .footerShare{
                position: absolute;
                right:-100px;
                top:0;
                .col{
                    margin:0 10px;
                }
            }
        }
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