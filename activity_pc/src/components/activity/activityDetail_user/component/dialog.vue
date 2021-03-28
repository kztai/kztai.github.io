<template>
    <div class="reportShare">
        <div class="reportShare-dialog">
            <div class="row reportShare-title">
                <div class="col f-l">
                    <lm-link-text
                            ref="smText1"
                            refId="smText1"
                            v-show="pvt_isShow.v1 === 'smText1'"
                            :paraVarPair="pvt_v1.smText1.paraVarPair"
                            :para="pvt_v1.smText1.para"
                            :attr="pvt_v1.smText1.attr">
                    </lm-link-text>
                </div>
                <div class="col f-r">
                    <lm-button
                            ref="smButton1"
                            refId="smButton1"
                            v-show="pvt_isShow.v2 === 'smButton1'"
                            :paraVarPair="pvt_v2.smButton1.paraVarPair"
                            :para="pvt_v2.smButton1.para"
                            :attr="pvt_v2.smButton1.attr">
                    </lm-button>
                </div>
            </div>
            <div style="clear: both;"></div>
            <div class="row">
                <lm-radio
                        ref="smRadio"
                        refId="smRadio"
                        v-show="pvt_isShow.v3 === 'smRadio'"
                        :paraVarPair="pvt_v3.smRadio.paraVarPair"
                        :para="pvt_v3.smRadio.para"
                        :attr="pvt_v3.smRadio.attr">
                </lm-radio>
            </div>
            <div class="row">
                <div id="report-code"></div>
            </div>
            <div class="row reportShare-btn">
                <div class="col mar-r-20">
                    <lm-button
                            ref="smButton2"
                            refId="smButton2"
                            v-show="pvt_isShow.v4 === 'smButton2'"
                            :paraVarPair="pvt_v4.smButton2.paraVarPair"
                            :para="pvt_v4.smButton2.para"
                            :attr="pvt_v4.smButton2.attr">
                    </lm-button>
                </div>
                <div class="col">
                    <lm-button
                            ref="smButton3"
                            refId="smButton3"
                            v-show="pvt_isShow.v5 === 'smButton3'"
                            :paraVarPair="pvt_v5.smButton3.paraVarPair"
                            :para="pvt_v5.smButton3.para"
                            :attr="pvt_v5.smButton3.attr">
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
    import QRCode
        from './code.js';

    export default {
        components: {},
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ['sys'],
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ["v1","v2","v3","v4","v5"],
                    subModule: ["smText1","smButton1","smRadio","smButton2","smButton3"]
                },
                pvt_isShow: {
                    "v1": null,
                    "v2": null,
                    "v3": null,
                    "v4": null,
                    "v5": null,
                },

                pvt_eventPortInput: ['reportShareCloseEvent'],


                mac:mac.mac,
                dialogText:'举报',
                radioData:1,
                radioArr:[{label: 1, text: '垃圾广告信息'}, {label: 2, text: '恶意及辱骂行为'}, {label: 3, text: '侵权'}],
            }
        },
        computed: {
           pvt_v1: function () {
                return {
                    smText1: {
                        paraVarPair: {},
                        para: {
                            textData: this.dialogText
                        },
                        attr: {
                            fontSize:'14',color:'#12B0FF',height:'28px'
                        }
                    }
                }
            },
            pvt_v2: function () {
                return {
                    smButton1: {
                        paraVarPair: {},
                        para: {
                            name:['','el-icon-close']
                        },
                        attr: {
                            type:'text',height: '28px'
                        }
                    }
                }
            },
            pvt_v3: function () {
                return {
                    smRadio: {
                        paraVarPair: {},
                        para: {
                            radioData: this.radioData
                        },
                        attr: {
                            radioArr:this.radioArr
                        }
                    }
                }
            },
            pvt_v4: function () {
                return {
                    smButton2: {
                        paraVarPair: {},
                        para: {
                            name:['确认','']
                        },
                        attr: {
                            type:'primary',height: '40px',width:'118px'
                        }
                    }
                }
            },
            pvt_v5: function () {
                return {
                    smButton3: {
                        paraVarPair: {},
                        para: {
                            name:['取消','']
                        },
                        attr: {
                            height: '40px',size:'mini',width:'118px'
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
                let para;
                let dbFlag;
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                let ref = {
                    sm1: 'smText1',
                    sm2: 'smButton1',
                    sm3: 'smRadio',
                    sm4: 'smButton2',
                    sm5: 'smButton3'
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
                            if($this.attr.type === 'share'){
                                $this.dialogText = '分享';
                                $('#report-code').html("");
                                para.urlActivityID = $this.getUrlPara()['id'];
                                para.data = {};
                                para.data['activityID'] = para.urlActivityID;
                                para.data['userID'] = $this.getUserID()['id'];
                                para.data['time'] = $this.getCurrentTime();
                                var qrcode = new QRCode(document.getElementById('report-code'), {
                                    width : 162,//设置宽高
                                    height : 162
                                });
                                qrcode.makeCode("http://www.baidu.com");
                            }else{
                                $this.dialogText = '举报';
                                $('#report-code').html("");
                            }
                            $this.forceUpdateData(function () {
                                para.nStep = 'hideModule';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            })
                            break;
                        case 'hideModule':
                            $this.showSubModule(["smText1","smButton1","smRadio","smButton2","smButton3"], false, function () {
                                para.nStep = 'startModule1';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
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
                                para.nStep = 'showModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showModules':
                            //显示子组件
                            let refId;
                            if($this.attr.type === 'share'){
                               refId = ["smText1","smButton1","smButton2","smButton3"];
                            }else{
                                refId = ["smText1","smButton1","smRadio","smButton2","smButton3"];
                            }
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
            reportShareClose:function(){
                this.hideSelfModule(['smDialog'], function () {

                }, function (error) {
                    console.error(error)
                })
            },
            getUserID:function(){
                return {id:1,name:'张三'}
            },
            getUrlPara:function(){
                return {id:1}
            },
            getCurrentTime:function () {
                let newTime = new Date();
                let hour, minute, second, year, month, date;
                hour = newTime.getHours() < 10 ? ("0" + newTime.getHours()) : newTime.getHours();
                minute = newTime.getMinutes() < 10 ? ("0" + newTime.getMinutes()) : newTime.getMinutes();
                second = newTime.getSeconds() < 10 ? ("0" + newTime.getSeconds()) : newTime.getSeconds();
                year = newTime.getFullYear();
                month = newTime.getMonth() + 1 < 10 ? ("0" + (newTime.getMonth() + 1)) : newTime.getMonth() + 1;
                date = newTime.getDate() < 10 ? ("0" + newTime.getDate()) : newTime.getDate();
                return year + '-' + month + '-' + date + ' ' + hour + ':' + minute + ':' + second;
            },
            smButton1_buttonClickEvent:function () {
                this.reportShareClose()
            },
            smButton2_buttonClickEvent:function () {
                this.reportShareClose()
            },
            smButton3_buttonClickEvent:function () {
                this.reportShareClose()
            },
        }
    }
</script>
<style lang="scss">
    .reportShare{
        .el-radio-group{
            width: 100%;
            .el-radio{
                display: block;
                margin-left:20px;
                height: 56px;
                line-height: 56px;
                border-bottom:1px solid #E5E5E5;
            }
        }
    }
</style>
<style lang="scss" scoped>
    .reportShare{
        position: fixed;
        top:0;
        left:0;
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.5);
        z-index: 9999;
        .reportShare-dialog{
            margin: 200px auto 0 auto;
            width: 500px;
            background:rgba(255,255,255,1);
            border:1px solid rgba(229,229,229,1);
            box-shadow:0px 3px 7px 0px rgba(51,51,51,0.1);
            border-radius:4px;
            .reportShare-title{
                height: 52px;
                padding:0 20px;
                line-height: 52px;
                border-bottom:1px solid #E5E5E5;
            }
            .reportShare-btn{
                margin:30px 0;
                text-align: center;
            }
            .mar-r-20{
                margin-right: 20px;
            }
            .f-l{
                float: left;
            }
            .f-r{
                float: right;
            }
            .clearfix{
                content: '';
                display: block;
                width: 0;
                height: 0;
                clear:both;
            }
            #report-code{
                margin:  30px auto 0 auto;
                width: 162px;
            }
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
</style>