<template>
    <div class="share-code">
        <div class="code-content" :id="'code'+attr.class"></div>
        <!--<div class="row">-->
            <!--<lm-qrcode-->
                    <!--ref="smQrcode"-->
                    <!--refId="smQrcode"-->
                    <!--v-show="pvt_isShow.v1 === 'smQrcode'"-->
                    <!--:paraVarPair="pvt_v1.smQrcode.paraVarPair"-->
                    <!--:para="pvt_v1.smQrcode.para"-->
                    <!--:attr="pvt_v1.smQrcode.attr">-->
            <!--</lm-qrcode>-->
        <!--</div>-->
        <div class="row share-word">
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
                    vessel: ["v1", "v2"],
                    subModule: ["smQrcode", "smText1"]
                },
                pvt_isShow: {
                    "v1": null,
                    "v2": null,
                },

                pvt_eventPortInput: [''],


                mac: mac.mac,
                debugFlag: true,
            }
        },
        computed: {
            pvt_v1: function () {
                return {
                    smQrcode: {
                        paraVarPair: {},
                        para: {
                            qrUrl:'{"isDown":false,"path":"w_0/r_1_2_0/userInfo/head_portrait/1","fileName":"timg (5).jpg","timestamp":1568960719113,"srcServer":"w_0","fieldType":2,"isDownOld":true}'
                        },
                        attr: {
                            size:'small'
                        }
                    }
                }
            },
            pvt_v2: function () {
                return {
                    smText1: {
                        paraVarPair: {},
                        para: {
                            textData:'扫一扫，分享给好友'
                        },
                        attr: {
                            fontSize: '14px', height: '30px',color:'#ffffff',label:'div',textAlign:'center'
                        }
                    },
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
                let fnname = 'replyInput.startModule';
                let dbData;
                let ref = {
                    sm1: 'smQrcode',
                    sm2: 'smText1',
                };

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
                            $('#code'+$this.attr.class).html("");
                            para.urlActivityID = $this.getUrlPara()['id'];
                            para.data = {};
                            para.data['activityID'] = para.urlActivityID;
                            para.data['userID'] = $this.getUserID()['id'];
                            para.data['time'] = $this.getCurrentTime();
                            var qrcode = new QRCode(document.getElementById('code'+$this.attr.class), {
                                width : 162,//设置宽高
                                height : 162
                            });
                            qrcode.makeCode("http://www.baidu.com");
                            para.nStep = 'startModule2';
                            dbFlag += 1;
                            break
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
                                para.nStep = 'showModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showModules':
                            let refId = ["smQrcode","smText1"];
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
        }
    }
</script>
<style lang="scss">
    .reply-input {
        .discuss-btn {
            .lm-button .el-button {
                padding: 0;
                font-size: 14px;
            }
        }

        .reply-btns {
            .lm-button .el-button {
                padding: 0;
                font-size: 14px;
            }
        }

        .svg-container {
            display: none;
        }
    }
</style>
<style lang="scss" scoped>
    .share-code {
        padding:18px;
        background: #404040;
        .code-content{
            border:1px solid #ffffff;
            background: #ffffff;
            padding:10px;
        }
        .share-word {
            margin-top: 10px;
            text-align: center;
        }
    }



    .mar-r-5 {
        margin-right: 5px;
    }

    .mar-10 {
        margin: 10px 0 4px 0;
    }

    .mar-b-5 {
        margin-bottom: 5px;
    }

    .mar-r-10 {
        margin-right: 10px;
    }

    .mar-5 {
        margin: 0 5px;
    }

    .f-r {
        float: right;
    }

    .col {
        box-sizing: border-box;
        display: inline-block;
        vertical-align: top;
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