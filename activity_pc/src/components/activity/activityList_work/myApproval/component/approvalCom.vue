<template>
    <div class="approval-com">
        <div class="row">
            <div class="col approvalCom-image">
                <!--<lm-img-->
                <!--ref="smImg"-->
                <!--refId="smImg"-->
                <!--v-show="pvt_isShow.v1 === 'smImg'"-->
                <!--:paraVarPair="pvt_v1.smImg.paraVarPair"-->
                <!--:para="pvt_v1.smImg.para"-->
                <!--:attr="pvt_v1.smImg.attr">-->
                <!--</lm-img>-->
                <img src="../../../../../assets/timg.jpg" alt="" width="116" height="68">
                <img src="../../../../../assets/publish.png" alt="" width="40" height="40" class="approvalCom-sign" :class="'approvalCom-publish'+number">
                <img src="../../../../../assets/reject.png" alt="" width="40" height="40" class="approvalCom-sign" :class="'approvalCom-reject'+number">
            </div>
            <div class="col activity-info">
                <div class="row">
                    <lm-link-text
                            ref="smText1"
                            refId="smText1"
                            v-show="pvt_isShow.v2 === 'smText1'"
                            :paraVarPair="pvt_v2.smText1.paraVarPair"
                            :para="pvt_v2.smText1.para"
                            :attr="pvt_v2.smText1.attr">
                    </lm-link-text>
                </div>
                <div class="row mar-t-10">
                    <div class="col">
                        <lm-link-text
                                ref="smText2"
                                refId="smText2"
                                v-show="pvt_isShow.v3 === 'smText2'"
                                :paraVarPair="pvt_v3.smText2.paraVarPair"
                                :para="pvt_v3.smText2.para"
                                :attr="pvt_v3.smText2.attr">
                        </lm-link-text>
                    </div>
                    <div class="col">
                        <lm-link-text
                                ref="smText3"
                                refId="smText3"
                                v-show="pvt_isShow.v4 === 'smText3'"
                                :paraVarPair="pvt_v4.smText3.paraVarPair"
                                :para="pvt_v4.smText3.para"
                                :attr="pvt_v4.smText3.attr">
                        </lm-link-text>
                    </div>
                </div>
                <div class="row mar-t-10">
                    <div class="col">
                        <lm-link-text
                                ref="smText4"
                                refId="smText4"
                                v-show="pvt_isShow.v5 === 'smText4'"
                                :paraVarPair="pvt_v5.smText4.paraVarPair"
                                :para="pvt_v5.smText4.para"
                                :attr="pvt_v5.smText4.attr">
                        </lm-link-text>
                    </div>
                    <div class="col">
                        <lm-link-text
                                ref="smText5"
                                refId="smText5"
                                v-show="pvt_isShow.v6 === 'smText5'"
                                :paraVarPair="pvt_v6.smText5.paraVarPair"
                                :para="pvt_v6.smText5.para"
                                :attr="pvt_v6.smText5.attr">
                        </lm-link-text>
                    </div>
                </div>
            </div>
            <div class="col f-r">
                <div class="row approval-infoBtn">
                    <lm-button
                            ref="smButton1"
                            refId="smButton1"
                            v-show="pvt_isShow.v7 === 'smButton1'"
                            :paraVarPair="pvt_v7.smButton1.paraVarPair"
                            :para="pvt_v7.smButton1.para"
                            :attr="pvt_v7.smButton1.attr">
                    </lm-button>
                    <lm-link-text
                            ref="smText6"
                            refId="smText6"
                            v-show="pvt_isShow.v7 === 'smText6'"
                            :paraVarPair="pvt_v7.smText6.paraVarPair"
                            :para="pvt_v7.smText6.para"
                            :attr="pvt_v7.smText6.attr">
                    </lm-link-text>
                </div>
            </div>
        </div>
        <div class="row">
            <approvalInfo
                    ref="smApprovalInfo"
                    refId="smApprovalInfo"
                    v-show="pvt_isShow.v8 === 'smApprovalInfo'"
                    :paraVarPair="pvt_v8.smApprovalInfo.paraVarPair"
                    :para="pvt_v8.smApprovalInfo.para"
                    :attr="pvt_v8.smApprovalInfo.attr">
            </approvalInfo>
        </div>
    </div>
</template>
<script>
    import libSys
        from '@/components/baseComponent/libSys.js';
    import libUpload
        from '@/components/baseComponent/libUpload.js';
    import approvalInfo from './approvalInfo';

    export default {
        components: {approvalInfo},
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ['sys'],
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ["v1", "v2", "v3", "v4", "v5", "v6","v7", "v7", "v8"],
                    subModule: ["smImg", "smText1", "smText2", "smText3", "smText4","smText5", "smButton1","smText6","smApprovalInfo"]
                },
                pvt_isShow: {
                    "v1": null,
                    "v2": null,
                    "v3": null,
                    "v4": null,
                    "v5": null,
                    "v6": null,
                    "v7": null,
                    "v8": null,
                },

                pvt_eventPortInput: ['activityApprovalEvent','detailPageEvent','budgetShowEvent','rejectDialogShowEvent'],
                mac: mac.mac,
                address: '',
                startTime: '',
                activityStatus: '',
                price: '',
                debugFlag: true,
                btnName:['展开详情','el-icon-arrow-down']
            }
        },
        computed: {
            pvt_v1: function () {
                return {
                    smImg: {
                        paraVarPair: {},
                        para: {
                            image: [{
                                $table: this.mac.tb.groupActivity,
                                $arrField: [this.mac.fd.groupActivity.poster],
                                $arrValue: [this.para.activityID]
                            }],
                        },
                        attr: {}
                    }
                }
            }, pvt_v2: function () {
                return {
                    smText1: {
                        paraVarPair: {},
                        para: {
                            textData: [{
                                $table: this.mac.tb.groupActivity,
                                $arrField: [this.mac.fd.groupActivity.name],
                                $arrValue: [this.para.activityID]
                            }],
                            // textData: '活动报名 || 2019深圳宠物马拉松运动会 | 暨第三届深圳遛狗节'
                        },
                        attr: {
                            fontSize: '16px', height: '16px', color: '#303133',isClick:true
                        }
                    }
                }
            }, pvt_v3: function () {
                return {
                    smText2: {
                        paraVarPair: {},
                        para: {
                            textData: '时间：'
                        },
                        attr: {
                            fontSize: '14px', height: '14px', color: '#909399'
                        }
                    }
                }
            }, pvt_v4: function () {
                return {
                    smText3: {
                        paraVarPair: {},
                        para: {
                            textData: this.startTime
                        },
                        attr: {
                            fontSize: '14px', height: '14px', color: '#909399'
                        }
                    }
                }
            }, pvt_v5: function () {
                return {
                    smText4: {
                        paraVarPair: {},
                        para: {
                            textData: '地址：'
                        },
                        attr: {
                            fontSize: '14px', height: '14px', color: '#909399'
                        }
                    }
                }
            }, pvt_v6: function () {
                return {
                    smText5: {
                        paraVarPair: {},
                        para: {
                            textData: this.address
                        },
                        attr: {
                            fontSize: '14px', height: '14px', color: '#909399'
                        }
                    }
                }
            }, pvt_v7: function () {
                return {
                    smText6: {
                        paraVarPair: {},
                        para: {
                            textData: '待审批'
                        },
                        attr: {
                            fontSize: '14px',  color: '#FC7122'
                        }
                    },
                    smButton1: {
                        paraVarPair: {},
                        para: {
                            name: this.btnName,
                        },
                        attr: {
                            height: '40px',type:'text',iconIsRight:true
                        }
                    }
                }
            }, pvt_v8: function () {
                return {
                    smApprovalInfo: {
                        paraVarPair: {},
                        para: {
                            activityID:this.para.activityID
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
                let dbData;
                let ref = {
                    sm1: 'smImg',
                    sm2: 'smText1',
                    sm3: 'smText2',
                    sm4: 'smText3',
                    sm5: 'smText4',
                    sm6: 'smText5',
                    sm7: 'smText6',
                    sm_7: 'smButton1',
                    sm8: 'smApprovalInfo',
                };
                let fnname = 'collectCom.startModule';

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
                        case 'hideModules':
                            //显示子组件
                            $this.showSubModule(["smImg", "smText1", "smText2", "smText3", "smText4","smText5","smText6","smApprovalInfo","smButton1"], false, function () {
                                para.nStep = 'queryGroupActivity';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'queryGroupActivity':
                            objectName = $this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityID];
                            dbData[$this.mac.fd.groupActivity.startTime] = [];
                            dbData[$this.mac.fd.groupActivity.place] = [];
                            dbData[$this.mac.fd.groupActivity.status] = [];
                            $this.sys.api.recordRead(objectName, dbData,
                                function () {
                                    $this.startTime = $this.getTime(dbData[$this.mac.fd.groupActivity.startTime][0]);
                                    if(dbData[$this.mac.fd.groupActivity.place][0]===null){
                                        $this.address = '线上活动'
                                    }else {
                                        $this.address = dbData[$this.mac.fd.groupActivity.place][0]['name'][0] + dbData[$this.mac.fd.groupActivity.place][0]['name'][1] + dbData[$this.mac.fd.groupActivity.place][0]['name'][2] + dbData[$this.mac.fd.groupActivity.place][0]['place'];
                                    }
                                    para.status = dbData[$this.mac.fd.groupActivity.status][0];
                                    $this.forceUpdateData(function(){
                                        para.nStep = 'startModule2';
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.startModule(successCallBack, errorCallBack)
                                        }
                                    })
                                }, para.errorCallBack)
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
                                para.nStep = '_startModule7';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case '_startModule7':
                            $this.sm[ref.sm_7].startModule(function () {
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
                            let refId;
                            if(para.status===$this.mac.enum.groupActivity.status.check){
                                refId = ["smImg", "smText1", "smText2", "smText3", "smText4","smText5","smText6","smApprovalInfo"]
                            }else{
                                refId = ["smImg", "smText1", "smText2", "smText3", "smText4","smText5", "smButton1"];
                                if(para.status===$this.mac.enum.groupActivity.status.released){
                                    $('.approvalCom-publish'+this.number).css('display','block');
                                }else{
                                    $('.approvalCom-reject'+this.number).css('display','block');
                                }
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
            activityInfoShow:function(){
                let $this =this;
                if($this.btnName[0] === '展开详情'){
                    $this.sm["smApprovalInfo"].startModule(function () {
                        $this.showSubModule(["smApprovalInfo"], true, function () {},function (error) {console.error(error)});
                    },function (error) {
                        console.error(error)
                    });
                    $this.btnName = ['收起详情','el-icon-arrow-up'];
                    $this.forceUpdateData(function(){
                        $this.sm["smButton1"].startModule(function () {},function (error) {console.error(error)})
                    })
                }else{
                    this.showSubModule(["smApprovalInfo"], false, function () {},function (error) {console.error(error)});
                    $this.btnName = ['展开详情','el-icon-arrow-down'];
                    $this.forceUpdateData(function(){
                        $this.sm["smButton1"].startModule(function () {},function (error) {console.error(error)})
                    })
                }
            },
            activityApproval:function(commandType,successCallBack, errorCallBack) {
                let $this = this;
                let para;
                let dbFlag;
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                let fnname = 'approvalCom.activityApproval';

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
                        case 'hideModules':
                            //显示子组件
                            if(commandType===0){
                                $('.approvalCom-publish'+this.number).css('display','block');
                            }else{
                                $('.approvalCom-reject'+this.number).css('display','block');
                            }
                            $this.showSubModule(["smText6", "smButton1"], false, function () {
                                $this.btnName = ['收起详情','el-icon-arrow-up'];
                                $this.forceUpdateData(function(){
                                    para.nStep = 'startModule3';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.activityApproval(commandType,successCallBack, errorCallBack)
                                    }
                                })
                            }, para.errorCallBack);
                            break;
                        case 'startModule3':
                            $this.sm['smButton1'].startModule(function () {
                                para.nStep = 'startModule8';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.activityApproval(commandType,successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'startModule8':
                            $this.sm['smApprovalInfo'].startModule(function () {
                                para.nStep = 'showModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.activityApproval(commandType,successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showModules':
                            //显示子组件
                            $this.showSubModule([ "smButton1"], true, function () {
                                para.nStep = 'end';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.activityApproval(commandType,successCallBack, errorCallBack)
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
            detailPage:function(){
                let $this = this;
                let objectName = $this.mac.tb.groupActivity;
                $this.sys.api.getSourceRecord(objectName,[$this.para.activityID],
                    function (result) {
                        $this.ep.detailPageEvent(result[0],function () {},function (error) {console.error(error)});
                    },
                    function (error) {
                        console.error(error)
                    });
            },
            getTime:function (time) {
                let weekday=["周日","周一","周二","周三","周四","周五","周六"];
                var date = new Date(time);
                var hour, minute, second, year, month , dateSubtract,dates,myday;
                hour = date.getHours() < 10 ? ("0" + date.getHours()) : date.getHours();
                minute = date.getMinutes() < 10 ? ("0" + date.getMinutes()) : date.getMinutes();
                second = date.getSeconds() < 10 ? ("0" + date.getSeconds()) : date.getSeconds();
                year = date.getFullYear();
                month = date.getMonth() + 1 < 10 ? ("0" + (date.getMonth() + 1)) : date.getMonth() + 1;
                dates = date.getDate() < 10 ? ("0" + date.getDate()) : date.getDate();
                myday = date.getDay();
                dateSubtract = new Date()-date;
                if(dateSubtract<3600*24*1000*365){
                    return month + '月' + dates + '日 ' + weekday[myday];
                }else{
                    return year + '年' + month + '月' + dates + '日 ' + weekday[myday];
                }
            },
            smButton1_buttonClickEvent: function (refId) {
                this.activityInfoShow()
            },
            smApprovalInfo_activityApprovalEvent:function (activityID,commandType,rejectReason,successCallBack,errorCallBack) {
                this.ep.activityApprovalEvent(activityID,commandType,rejectReason,successCallBack,errorCallBack);
                // this.activityApproval(commandType,function () {
                //
                // },function (error) {
                //     console.error(error)
                // });
            },
            smApprovalInfo_rejectDialogShowEvent:function (activityID,successCallBack,errorCallBack) {
                this.ep.rejectDialogShowEvent(activityID,successCallBack,errorCallBack);
            },
            smApprovalInfo_detailPageEvent:function (activityID,successCallBack,errorCallBack) {
                this.ep.detailPageEvent(activityID,successCallBack,errorCallBack);
            },
            smApprovalInfo_budgetShowEvent:function (activityID,successCallBack,errorCallBack) {
                this.ep.budgetShowEvent(activityID,successCallBack,errorCallBack)
            },
            smText1_textClickEvent:function () {
                this.detailPage()
            }
        }
    }
</script>
<style lang="scss">
    html,body{
        height:100%;
    }
   .approval-com{
       .lm-button .el-button{
           padding:0;
       }
       .approval-infoBtn{
           .lm-button .el-button--text{
               color:#606266;
           }
           .lm-button .el-button--text:hover{
               color:#409EFF;
           }
       }
       .activity-info{
           .link-status.link-text:hover{
               border-bottom:none;
           }
       }
   }
</style>
<style lang="scss" scoped>
    .approval-com{
        padding:25px;
        border-top:1px solid rgba(220,223,230,1);
        .activity-info{
            margin-left: 20px;
            width: 495px;
            padding-right: 10px;
            overflow: hidden;
        }
        .approvalCom-image{
            position: relative;
            .approvalCom-sign{
                position: absolute;
                top:0;
                left: 0;
                display: none;
            }
        }
        .f-r{
            float: right;
            .mar-t-35{
                margin-top: 35px;
            }
        }
        .mar-t-10{
            margin-top: 7px;
        }
    }

    .row {

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
