<template>
    <div class="header-fixed">
        <div class="header">
            <div class="indexHeader">
                <div class="f-l">
                    <div class="col logo">
                        <!--<lm-image-->
                        <!--v-show="pvt_isShow.v1"-->
                        <!--:ref="pvt_currentRef.v1"-->
                        <!--:refId="pvt_currentRef.v1"-->
                        <!--:para="pvt_col1_para[pvt_currentRef.v1].para"-->
                        <!--:attr="pvt_col1_attr[pvt_currentRef.v1].attr">-->
                        <!--</lm-image>-->
                        <img src="../../../assets/logo.png" alt="" width="100%" height="100%">
                    </div>
                    <div class="col header-logo">
                        <lm-link-text
                                ref="smText1"
                                refId="smText1"
                                v-show="pvt_isShow.v2 === 'smText1'"
                                :paraVarPair="pvt_v2.smText1.paraVarPair"
                                :para="pvt_v2.smText1.para"
                                :attr="pvt_v2.smText1.attr">
                        </lm-link-text>
                    </div>
                </div>
                <div class="f-r">
                    <div class="right-dv">
                        <div class="col header-APP">
                            <lm-dropdown
                                    ref="smSelect2"
                                    refId="smSelect2"
                                    v-show="pvt_isShow.v8 === 'smSelect2'"
                                    :paraVarPair="pvt_v8.smSelect2.paraVarPair"
                                    :para="pvt_v8.smSelect2.para"
                                    :attr="pvt_v8.smSelect2.attr">
                            </lm-dropdown>
                        </div>
                    </div>
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
        inject: ['sys'],
        data: function () {
            return {
                dropDownData: [],

                pvt_subModuleMap: {
                    vessel: ["v1", "v2", "v8"],
                    subModule: ["smPhoto", "smText1", "smSelect2"]
                },
                pvt_isShow: {
                    "v1": null,
                    "v2": null,
                    "v8": null
                },

                pvt_eventPortInput: [
                    ''
                ],
            }
        },
        computed: {
            pvt_v1: function () {
                return {
                    smPhoto: {
                        paraVarPair: {},
                        para: {
                            image: {$table: {'userInfo': ['head_portrait']}, $value: [1]}
                        },
                        attr: {
                            fit: 'scale-down', size: 'min'
                        }
                    }
                }
            }, pvt_v2: function () {
                return {
                    smText1: {
                        paraVarPair: {},
                        para: {
                            textData: '瓴码'
                        },
                        attr: {
                            fontSize: '26px', height: '76px', color: '#ffffff', textData: 'right'
                        }
                    }
                }
            }, pvt_v8: function () {
                return {
                    smSelect2: {
                        paraVarPair: {},
                        para: {
                            dropDown: this.dropDownData

                        },
                        attr: {
                            menuName: '深圳瓴码APP',
                            // size: 'large'
                        }
                    }
                }
            },
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
                let fnname = 'header_start';
                let dbFlag;
                let dbData;
                let tableName;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                };

                if (successCallBack !== null) {
                    errorCallBack = para;
                    successCallBack = null
                }
                para = errorCallBack;

                let ref = {
                    sm1: 'smPhoto',
                    sm2: 'smText1',
                    sm8: 'smSelect2',
                };

                while (1) {
                    dbFlag = 0;
                    switch (para.nStep) {
                        case 0:
                            if (this.para.isLogin) {
                                this.dropDownData = [
                                    {id: '1', label: '退出登录', icon: '', disable: false},
                                ];
                            } else {
                                this.dropDownData = [
                                    {id: '1', label: '登录', icon: '', disable: false},
                                ];
                            }

                            this.forceUpdateData(function () {
                                para.nStep = 'startModule2';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            });
                            break;
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
                                para.nStep = 'startModule8';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule8':
                            $this.sm[ref.sm8].startModule(function () {
                                para.nStep = 'showModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showModules':
                            //显示子组件
                            let refId = ['smPhoto', 'smText1', 'smSelect2'];
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

            smButton1_buttonClickEvent: function (refId) {
                this.callSpecifiedMethod(refId, '', null, 'callModuleEventPort', ['terminalChangeEvent', []]);
            },
            // smSelect_itemClickEvent:function(refId, id) {
            //     this.callSpecifiedMethod(refId, '', null, 'callModuleEventPort', ['terminalChangeEvent', [id]]);
            // },
        }
    }
</script>
<style lang="scss">
    .header {
        .el-image {
            width: 76px;
            height: 76px;
        }

        .dropdown-component {
            height: 40px;
            line-height: 40px;

            .el-dropdown {
                height: 40px;
                line-height: 40px;
            }

            .el-dropdown-link {
                font-size: 16px;
                color: #ffffff;
                vertical-align: middle;
            }

            i {
                color: #ffffff;
            }
        }

        .index-button .el-button--text {
            color: #409EFF;
            font-weight: bold;
            font-size: 16px;
        }

        .header-search {
            .el-input__inner {
                border-radius: 2px;
                width: 400px;
                height: 40px;
            }

            .svg-container {
                width: 0;
            }
        }

        @media screen and (max-width: 1200px) {
            .header-search {
                .el-input__inner {
                    width: 250px;
                }
            }
        }

        @media screen and (max-width: 1300px) and (min-width: 1200px) {
            .header-search {
                .el-input__inner {
                    width: 300px;
                }
            }
        }

        @media screen and (max-width: 1400px) and (min-width: 1300px) {
            .header-search {
                .el-input__inner {
                    width: 350px;
                }
            }
        }

        @media screen and (max-width: 1500px) and (min-width: 1400px) {
            .header-search {
                .el-input__inner {
                    width: 400px;
                }
            }
        }


        .header-searchBtn {
            .el-button--primary {
                border-radius: 2px;
                background: #12B0FF;
            }
        }

        .header-activityBtn {
            /*margin-top: 2px;*/
            .el-button--primary {
                vertical-align: middle;
                margin: -2px 20px 0 20px;
                border-radius: 2px;
                background: #12B0FF;
                padding-left: 0;
                padding-right: 0;
            }

            .lm-icon-wechat {
                margin-right: 10px;
            }
        }

        .header-APP {
            padding: 0 15px;
            height: 40px;
            /*background: #4F4B9A;*/
            /*opacity:0.16;*/
            font-size: 16px;
            font-weight: 500;

            .dropdown-component .el-dropdown-link {
                font-size: 16px;
                font-family: Source Han Sans CN;
                font-weight: 500;
                color: #ffffff;
            }
        }
    }
</style>
<style lang="scss">
    .row {

    }

    .el-dropdown-menu__item {
        padding: 0 44px !important;
    }

    .header-fixed {
        position: fixed;
        top: 0;
        width: 100%;
        background: rgba(45, 40, 135, 1);
        z-index: 2000;
    }

    .header {
        height: 76px;
        line-height: 76px;
        padding: 0 14%;

        .indexHeader {
            width: 100%;
            /*margin:0 auto;*/
            .f-l {
                float: left;
                line-height: 76px;
                height: 76px;

                .logo {
                    height: 56px;
                    width: 58px;
                    vertical-align: middle;
                    margin-top: -2px;
                }

                .header-logo {
                    height: 76px;
                    width: 65px;
                    text-align: right;
                    vertical-align: top;
                }

                .index-button {
                    margin: 0 30px 0 65px;
                }

                .dropdown-menu {
                    padding: 0 15px;
                    height: 40px;
                    /*background: #142A5D;*/
                }
            }

            .f-r {
                float: right;
                /*width: 675px;*/

                .right-dv {
                    float: right;
                }
            }
        }
    }

    @media screen and (max-width: 1200px) {
        .header {
            padding: 0 20px;
        }
    }

    @media screen and (max-width: 1300px) and (min-width: 1200px) {
        .header {
            padding: 0 50px;
        }
    }

    @media screen and (max-width: 1400px) and (min-width: 1300px) {
        .header {
            padding: 0 76px;
        }
    }

    @media screen and (max-width: 1500px) and (min-width: 1400px) {
        .header {
            padding: 0 110px;
        }
    }

    @media screen and (max-width: 1600px) and (min-width: 1500px) {
        .header {
            padding: 0 140px;
        }
    }

    .col {
        box-sizing: border-box;
        display: inline-block;
        /*vertical-align: middle;*/
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

    .v1-normal {
    }

    .v1-max {
    }

    .v1-middle {
    }

    .v1-smaller {
    }

    .v1-min {
    }

    .v1-all {
    }

    .v2-normal {
    }

    .v2-max {
    }

    .v2-middle {
    }

    .v2-smaller {
    }

    .v2-min {
    }

    .v2-all {
    }


    /* ------ Module Style Variable ------- */

</style>
