<template>
    <div class="discuss">
        <div class="row flex">
            <div class="col flex-left">
                <!--<lm-img-->
                <!--ref="smImg"-->
                <!--refId="smImg"-->
                <!--v-show="pvt_isShow.v1 === 'smImg'"-->
                <!--:paraVarPair="pvt_v1.smImg.paraVarPair"-->
                <!--:para="pvt_v1.smImg.para"-->
                <!--:attr="pvt_v1.smImg.attr">-->
                <!--</lm-img>-->
                <img src="../../../../assets/detail.png" alt="" width="48" height="48" style="border-radius: 4px;">
            </div>
            <div class="col flex-right">
               <div class="row">
                   <div class="col">
                       <lm-link-text
                               ref="smText1"
                               refId="smText1"
                               v-show="pvt_isShow.v2 === 'smText1'"
                               :paraVarPair="pvt_v2.smText1.paraVarPair"
                               :para="pvt_v2.smText1.para"
                               :attr="pvt_v2.smText1.attr">
                       </lm-link-text>
                   </div>
                   <div class="col f-r">
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
               <div class="row mar-10">
                   <lm-link-text
                           ref="smText3"
                           refId="smText3"
                           v-show="pvt_isShow.v4 === 'smText3'"
                           :paraVarPair="pvt_v4.smText3.paraVarPair"
                           :para="pvt_v4.smText3.para"
                           :attr="pvt_v4.smText3.attr">
                   </lm-link-text>
               </div>
               <div class="row mar-t-10">
                   <discuss-reply
                       ref="smDiscussReply"
                       refId="smDiscussReply"
                       v-show="pvt_isShow.v6 === 'smDiscussReply'"
                       :paraVarPair="pvt_v6.smDiscussReply.paraVarPair"
                       :para="pvt_v6.smDiscussReply.para"
                       :attr="pvt_v6.smDiscussReply.attr">
                   </discuss-reply>
                   <reply-input
                       ref="smReplyInput"
                       refId="smReplyInput"
                       v-show="pvt_isShow.v6 === 'smReplyInput'"
                       :paraVarPair="pvt_v6.smReplyInput.paraVarPair"
                       :para="pvt_v6.smReplyInput.para"
                       :attr="pvt_v6.smReplyInput.attr">
                   </reply-input>
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
    import discussReply  from './discussReply';
    import replyInput  from './replyInput';

    export default {
        components: {discussReply,replyInput},
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ['sys'],
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ["v1","v2","v3","v4","v6","v6"],
                    subModule: ["smImg","smText1","smText2","smText3","smDiscussReply","smReplyInput"]
                },
                pvt_isShow: {
                    "v1": null,
                    "v2": null,
                    "v3": null,
                    "v4": null,
                    "v5": null,
                    "v6": null,
                },

                pvt_eventPortInput: ['discussAnswerEvent'],


                mac:mac.mac,
                debugFlag: true,
                date:'',
                answerTime:'',
                askName:'',
                replyShow:false,
                inputText:'',
                replyBtnShow:false
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
                                $table: this.mac.tb.groupActivityDiscuss,
                                $arrField: [this.mac.fd.groupActivityDiscuss.name],
                                $arrValue: [this.para.$arrValue]
                            }],
                        },
                        attr: {
                            fontSize: '14px', height: '18px', color: '#303133'
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
                            fontSize: '14px', height: '18px', color: '#909399'
                        }
                    }
                }
            },
            pvt_v4: function () {
                return {
                    smText3: {
                        paraVarPair: {},
                        para: {
                            textData: [{
                                $table: this.mac.tb.groupActivityDiscuss,
                                $arrField: [this.mac.fd.groupActivityDiscuss.askContent],
                                $arrValue: [this.para.$arrValue]
                            }],
                        },
                        attr: {
                            fontSize: '14px', height: '22px', color: '#303133'
                        }
                    }
                }
            },
            pvt_v6: function () {
                return {
                    smDiscussReply: {
                        paraVarPair: {},
                        para: {
                            activityID:this.para.activityID,
                            $arrValue:this.para.$arrValue
                        },
                        attr: {

                        }
                    },
                    smReplyInput: {
                        paraVarPair: {},
                        para: {
                            $arrValue:this.para.$arrValue
                        },
                        attr: {

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
                let fnname = 'discuss.startModule';
                let dbData;
                let ref = {
                    sm1: 'smImg',
                    sm2: 'smText1',
                    sm3: 'smText2',
                    sm4: 'smText3',
                    sm6: 'smDiscussReply',
                    sm_6: 'smReplyInput',
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
                            para.nStep = 'querGroupActivityDiscuss';
                            dbFlag += 1;
                            break;
                        case 'querGroupActivityDiscuss':
                            objectName = $this.mac.tb.groupActivityDiscuss;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.$arrValue];
                            dbData[$this.mac.fd.groupActivityDiscuss.answerContent] = [];
                            dbData[$this.mac.fd.groupActivityDiscuss.name] = [];
                            dbData[$this.mac.fd.groupActivityDiscuss.askTime] = [];
                            $this.sys.api.recordRead(objectName, dbData,
                                function () {
                                    $this.askName =  '@'+dbData[$this.mac.fd.groupActivityDiscuss.name][0]+'：';
                                    $this.date = $this.getTime(dbData[$this.mac.fd.groupActivityDiscuss.askTime][0]);
                                    para.answerContent = dbData[$this.mac.fd.groupActivityDiscuss.answerContent][0];
                                    $this.forceUpdateData(function(){
                                        para.nStep = 'startModule2';
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.startModule(successCallBack, errorCallBack)
                                        }
                                    })
                                }, para.errorCallBack)
                            break;
                            // case 'startModule1':
                            //     $this.sm[ref.sm1].startModule(function () {
                            //         para.nStep = 'startModule2';
                            //         dbFlag += 1;
                            //         if (dbFlag === 2) {
                            //             $this.startModule(successCallBack, errorCallBack)
                            //         }
                            //     }, para.errorCallBack);
                            //     break;
                            // para.nStep = 'querGroupActivityOrder';
                            // dbFlag += 1;
                            // break
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
                                if(para.answerContent===null){
                                    para.nStep = '_startModule6';
                                }else{
                                    para.nStep = 'startModule6';
                                }
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule6':
                            $this.sm[ref.sm6].startModule(function () {
                                para.nStep = 'showModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case '_startModule6':
                            $this.sm[ref.sm_6].startModule(function () {
                                para.nStep = 'showModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showModules':
                            let refId;
                            if(para.answerContent===null){
                                refId =  ["smImg","smText1","smText2","smText3","smReplyInput"];
                            }else{
                                refId =  ["smImg","smText1","smText2","smText3","smDiscussReply"];
                            }
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
            discussPublish:function(discussID,content,successCallBack, errorCallBack){
                let $this = this;
                let para;
                let dbFlag;
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                let fnname = 'discuss.discussPublish';

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
                        case 'startModule9':
                            $this.sm['smDiscussReply'].startModule(function () {
                                para.nStep = 'showModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.discussPublish(discussID,content,successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showModules':
                            let refId =  ["smDiscussReply"];
                            $this.showSubModule(refId, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    $this.discussPublish(discussID,content,successCallBack, errorCallBack)
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
            getTime:function (time) {
                var date = new Date(time);
                var hour, minute, second, year, month , dateSubtract,dates;
                hour = date.getHours() < 10 ? ("0" + date.getHours()) : date.getHours();
                minute = date.getMinutes() < 10 ? ("0" + date.getMinutes()) : date.getMinutes();
                second = date.getSeconds() < 10 ? ("0" + date.getSeconds()) : date.getSeconds();
                year = date.getFullYear();
                month = date.getMonth() + 1 < 10 ? ("0" + (date.getMonth() + 1)) : date.getMonth() + 1;
                dates = date.getDate() < 10 ? ("0" + date.getDate()) : date.getDate();
                dateSubtract = new Date()-date;
                if(dateSubtract<3600*24*1000){
                    return hour + ':' + minute
                }else if(dateSubtract<3600*24*1000*365){
                    return month + '月' + dates + '日 ' + hour + ':' + minute
                }else{
                    return year + '年' + month + '月' + dates + '日 ' + hour + ':' + minute
                }
            },

            smReplyInput_discussAnswerEvent:function (discussID,content,successCallBack, errorCallBack) {
                this.discussPublish(discussID,content,function () {}, function (error) {console.error(error)})
                this.ep.discussAnswerEvent(discussID,content,successCallBack, errorCallBack)
            }
        }
    }
</script>
<style lang="scss">
    .discuss{
        .discuss-btn{
            .lm-button .el-button{
                padding:0;
                font-size: 14px;
            }
        }
        .reply-btn{
            .lm-button .el-button{
                padding:0;
                font-size: 14px;
            }
        }
        .svg-container{
            display: none;
        }
    }
</style>
<style lang="scss" scoped>
    .discuss{
        padding:80px 0 0 0;
        .flex{
            display: flex;
            .flex-left{
                margin-right: 10px;
                width: 48px;
            }
            .flex-right{
                flex: 1;
                .discuss-btn{
                    float: right;
                }
                .reply{
                    display: flex;
                    background:rgba(244,244,244,1);
                    border-radius:4px;
                    padding:25px;
                    margin:20px 0 0 20px;
                    .reply-left{
                        width: 40px;
                        margin-right: 10px;
                    }
                    .reply-right{
                        flex: 1;
                    }
                }
                .reply-btn{
                    float: right;
                    margin-top: 10px;
                }
            }
        }
    }

    .mar-t-10{
        margin-top: 10px;
    }

    .mar-r-5{
        margin-right: 5px;
    }

    .mar-10{
        margin:10px 0 4px 0;
    }

    .mar-b-5{
        margin-bottom: 5px;
    }

    .mar-r-10{
        margin-right: 10px;
    }

    .mar-5{
        margin: 0 5px;
    }

    .f-r{
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