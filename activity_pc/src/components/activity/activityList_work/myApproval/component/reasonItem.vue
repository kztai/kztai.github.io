<template>
    <div class="reason-item">
        <div class="row">
            <lm-link-text
                    ref="smText1"
                    refId="smText1"
                    v-show="pvt_isShow.v1 === 'smText1'"
                    :paraVarPair="pvt_v1.smText1.paraVarPair"
                    :para="pvt_v1.smText1.para"
                    :attr="pvt_v1.smText1.attr">
            </lm-link-text>
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
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ['sys'],
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ["v1"],
                    subModule: ["smText1"]
                },
                pvt_isShow: {
                    "v1": null,
                },

                pvt_eventPortInput: ['reasonSelectEvent'],


                mac:mac.mac,
                debugFlag:true,
            }
        },
        computed: {
            pvt_v1: function () {
                return {
                    smText1: {
                        paraVarPair: {},
                        para: {
                            textData: this.para.textData
                        },
                        attr: {
                            fontSize:'14px',color:'#909399',height:'20px',isClick:true
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
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                let ref = {
                    sm1: 'smText1',
                };
                let fnname = 'budgetItem.startModule';

                if (successCallBack !== null) {
                    errorCallBack = $this.setPara(successCallBack, errorCallBack);
                    successCallBack = null;
                }
                para = errorCallBack;

                while (1) {
                    dbFlag = 0;
                    if ($this.debugFlag) {
                        console.log(fnname + ': para.nStep = ' + para.nStep);
                    }
                    switch (para.nStep) {
                        case 0:
                        case 'startModule1':
                            $this.sm[ref.sm1].startModule(function () {
                                para.nStep = 'showModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showModules':
                            //显示子组件
                            let refId = ["smText1"];
                            $this.showSubModule(refId, true, function () {
                                para.nStep = 'end';
                                dbFlag += 1;
                                if (dbFlag === 2) {
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
            smText1_textClickEvent:function () {
                this.ep.reasonSelectEvent(this.para.textData);
            }
        }
    }
</script>
<style lang="scss">
    .reason-item{
        .link-text:hover{
           border-bottom: none;
        }
    }
</style>
<style lang="scss" scoped>
    .reason-item{
        padding:10px 0 10px 10px;
    }



    .col {
        box-sizing: border-box;
        display: inline-block;
        vertical-align:middle;
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
</style>