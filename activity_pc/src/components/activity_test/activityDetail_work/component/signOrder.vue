<template>
    <div class="sign-order">
        <div class="row">
            <!--<lm-img-->
                    <!--ref="smImg"-->
                    <!--refId="smImg"-->
                    <!--v-show="pvt_isShow.v1 === 'smImg'"-->
                    <!--:paraVarPair="pvt_v1.smImg.paraVarPair"-->
                    <!--:para="pvt_v1.smImg.para"-->
                    <!--:attr="pvt_v1.smImg.attr">-->
            <!--</lm-img>-->
            <img src="../../../../assets/detail.png" alt="" width="40" height="40" style="border-radius: 100%;">
        </div>
        <div class="row mar-t-10">
            <lm-link-text
                    ref="smText1"
                    refId="smText1"
                    v-show="pvt_isShow.v2 === 'smText1'"
                    :paraVarPair="pvt_v2.smText1.paraVarPair"
                    :para="pvt_v2.smText1.para"
                    :attr="pvt_v2.smText1.attr">
            </lm-link-text>
        </div>
        <div class="row">
            <lm-link-text
                    ref="smText2"
                    refId="smText2"
                    v-show="pvt_isShow.v3 === 'smText2'"
                    :paraVarPair="pvt_v3.smText2.paraVarPair"
                    :para="pvt_v3.smText2.para"
                    :attr="pvt_v3.smText2.attr">
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
                    vessel: ["v1","v2","v3"],
                    subModule: ["smImg","smText1","smText2"]
                },
                pvt_isShow: {
                    "v1": null,
                    "v2": null,
                    "v3": null,
                },

                pvt_eventPortInput: [],


                mac:mac.mac,
                debugFlag: true,
                date:''
            }
        },
        computed: {
            pvt_v1: function () {
                return {
                    smImg: {
                        paraVarPair: {},
                        para: {
                            image:[{
                                $table: this.mac.tb.groupActivity,
                                $arrField: [this.mac.fd.groupActivity.poster],
                                $arrValue: [this.para.activityID]
                            }],
                        },
                        attr: {
                            fit:'fill'
                        }
                    }
                }
            },
            pvt_v2: function () {
                return {
                    smText1: {
                        paraVarPair: {},
                        para: {
                            textData: [{
                                $table: this.mac.tb.groupActivityOrder,
                                $arrField: [this.mac.fd.groupActivityOrder.name],
                                $arrValue: [this.para.groupActivityOrderID]
                            }],
                        },
                        attr: {
                            fontSize: '14px', height: '30px', color: '#303133'
                        }
                    }
                }
            },
            pvt_v3: function () {
                return {
                    smText2: {
                        paraVarPair: {},
                        para: {
                            textData: this.date
                        },
                        attr: {
                            fontSize: '12px', height: '12px', color: '#909399'
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
                let fnname = 'signOrder.startModule';
                let dbData;
                let ref = {
                    sm1: 'smImg',
                    sm2: 'smText1',
                    sm3: 'smText2',
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
                        // case 'startModule1':
                        //     $this.sm[ref.sm1].startModule(function () {
                        //         para.nStep = 'startModule2';
                        //         dbFlag += 1;
                        //         if (dbFlag === 2) {
                        //             $this.startModule(successCallBack, errorCallBack)
                        //         }
                        //     }, para.errorCallBack);
                        //     break;
                            para.nStep = 'querGroupActivityOrder';
                            dbFlag += 1;
                            break
                        case 'querGroupActivityOrder':
                            objectName = $this.mac.tb.groupActivityOrder;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.groupActivityOrderID];
                            dbData[$this.mac.fd.groupActivityOrder.createTime] = [];
                            $this.sys.api.recordRead(objectName, dbData,
                                function () {
                                   para.dateSubtract = new Date()-new Date(dbData[$this.mac.fd.groupActivityOrder.createTime][0]);
                                   if(para.dateSubtract<3600*24*1000){
                                       let hour = Math.floor(para.dateSubtract/1000/60/60)%24;
                                       let minute = Math.floor(para.dateSubtract/1000/60)%60;
                                       if(hour!==0){
                                           $this.date = hour+'小时前'
                                       }else{
                                           $this.date = minute+'分钟前'
                                       }
                                    }else{
                                       let day = Math.floor(para.dateSubtract/1000/60/60/24);
                                       $this.date = day+'天前'
                                    }
                                    $this.forceUpdateData(function(){
                                        para.nStep = 'startModule2';
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.startModule(successCallBack, errorCallBack)
                                        }
                                    })
                                }, para.errorCallBack)
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
                                para.nStep = 'showModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showModules':
                            let refId = ["smImg","smText1","smText2"];
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
<style lang="scss" scoped>
    .sign-order{
        width: 110px;
        margin-top: 30px;
        text-align: center;
        display: inline-block;
        overflow: hidden;
        .mar-t-10{
            margin-top: 10px;
        }
    }
    .col {
        box-sizing: border-box;
        display: inline-block;
        vertical-align: middle;
        margin-top: -2px;
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