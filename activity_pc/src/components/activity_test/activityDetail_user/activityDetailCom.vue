<template>
    <div class="activity-detail-com">
        <div class="content-top">
            <div class="sign-up">
                <sign-up
                        ref="smSignUp"
                        refId="smSignUp"
                        v-show="pvt_isShow.v1 === 'smSignUp'"
                        :paraVarPair="pvt_v1.smSignUp.paraVarPair"
                        :para="pvt_v1.smSignUp.para"
                        :attr="pvt_v1.smSignUp.attr">
                </sign-up>
            </div>
            <div class="detail-tabs">
                <lm-tabs
                        ref="smTabs"
                        refId="smTabs"
                        v-show="pvt_isShow.v2 === 'smTabs'"
                        :paraVarPair="pvt_v2.smTabs.paraVarPair"
                        :para="pvt_v2.smTabs.para"
                        :attr="pvt_v2.smTabs.attr">
                </lm-tabs>
            </div>
        </div>
        <div class="content-discuss-dv">
            <content-discuss
                    ref="smContentDiscuss"
                    refId="smContentDiscuss"
                    v-show="pvt_isShow.v3 === 'smContentDiscuss'"
                    :paraVarPair="pvt_v3.smContentDiscuss.paraVarPair"
                    :para="pvt_v3.smContentDiscuss.para"
                    :attr="pvt_v3.smContentDiscuss.attr">
            </content-discuss>
        </div>
        <div class="rolling-block">
            <rolling-block
                    ref="smRollingBlock"
                    refId="smRollingBlock"
                    v-show="pvt_isShow.v4 === 'smRollingBlock'"
                    :paraVarPair="pvt_v4.smRollingBlock.paraVarPair"
                    :para="pvt_v4.smRollingBlock.para"
                    :attr="pvt_v4.smRollingBlock.attr">
            </rolling-block>
        </div>
    </div>
</template>

<script>
    import libSys
        from '@/components/baseComponent/libSys.js';
    import libUpload
        from '@/components/baseComponent/libUpload.js';
    import signUp from './signUp';
    import contentDiscuss from './contentDiscuss';
    import rollingBlock from './component/rollingBlock';


    export default {
        name: 'pageGene',
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ['sys'],
        components: {
            signUp,contentDiscuss,rollingBlock
        },
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ["v1", "v2","v3","v4"],
                    subModule: ["smSignUp", "smTabs", "smContentDiscuss","smRollingBlock"]
                },
                pvt_isShow: {"v1": null, "v2": null, "v3": null, "v4": null},
                pvt_eventPortInput: ['moduleChangeEvent','activityBrowseEvent','activityHandleEvent','getOrderNumEvent','getAttentionStateEvent','groupAttentionEvent','discussQuestionEvent','getTicketNumberEvent','getSumEvent'],

                mac: mac.mac,
                debugFlag: true,
                tabData: [{val: "活动详情", icon: "", disable:''},{val: "已报名", icon: "", disable:''},{val: "全部讨论", icon: "", disable:''}],
            }
        },
        computed: {
            pvt_v1: function () {
                return {
                    smSignUp: {
                        paraVarPair: {},
                        para: {
                            activityID: this.para.activityID,
                            isLogin:this.para.isLogin
                        },
                        attr: {}
                    }
                }
            }, pvt_v2: function () {
                return {
                    smTabs: {
                        paraVarPair: {},
                        para: {
                            tabData: this.tabData
                        },
                        attr: {
                            stretch:true,checked:0
                        }
                    }
                }
            }, pvt_v3: function () {
                return {
                    smContentDiscuss: {
                        paraVarPair: {},
                        para: {
                            activityID: this.para.activityID,
                            isLogin:this.para.isLogin
                        },
                        attr: {}
                    }
                }
            },pvt_v4: function () {
                return {
                    smRollingBlock: {
                        paraVarPair: {},
                        para: {},
                        attr: {}
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
                let objectName;
                let parentRecord;
                let condition;
                let dbData;
                let para;
                let dbFlag;
                let fnname = 'activityDetailCom.startModule';
                let ref = {
                    sm1: 'smSignUp',
                    sm2: 'smTabs',
                    sm3: 'smContentDiscuss',
                    sm4: 'smRollingBlock'
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
                        case 'queryActivity':
                            objectName = $this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[$this.mac.fd.id] = [$this.para.activityID];
                            dbData[$this.mac.fd.groupActivity.enrollNumber] = [];
                            $this.sys.api.recordRead(objectName, dbData,
                                function () {
                                    para.number = 0;
                                    for(var i =0;i<dbData[$this.mac.fd.groupActivity.enrollNumber][0].length;i++){
                                        para.number += dbData[$this.mac.fd.groupActivity.enrollNumber][0][i];
                                    }
                                    $this.tabData = [{val: "活动详情", icon: "", disable:''},{val: "已报名"+para.number, icon: "", disable:''},{val: "全部讨论", icon: "", disable:''}],
                                        $this.forceUpdateData(function(){
                                            // para.nStep = 'talbleName';
                                            para.nStep = 'startModule1';
                                            dbFlag += 1;
                                            if (dbFlag === 2) {
                                                $this.startModule(successCallBack, errorCallBack)
                                            }
                                        })
                                }, para.errorCallBack)
                            break
                        case 'startModule1':
                            $this.sm[ref.sm1].startModule(function () {

                            }, para.errorCallBack);
                            para.nStep = 'startModule2';
                            dbFlag += 1;
                            if (dbFlag === 2) {
                                $this.startModule(successCallBack, errorCallBack)
                            }
                            break;
                        case 'getResourceID':
                            $this.sys.api.getSourceRecord($this.mac.tb.groupActivity,[$this.para.activityID],
                                function (result) {
                                    para.resourceID = result[0];
                                    para.nStep = 'startModule2';
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack)
                                    }
                                },
                                function (error) {
                                    console.error(error)
                                });
                            break
                        case 'startModule2':
                            // $this.ep.getOrderNumEvent(para.resourceID,function (result) {
                            //     $this.tabData = [{val: "活动详情", icon: "", disable:''},{val: "已报名"+result, icon: "", disable:''},{val: "全部讨论", icon: "", disable:''}];
                            //     $this.forceUpdateData(function () {
                                    $this.sm[ref.sm2].startModule(function () {
                                        para.nStep = 'startModule3';
                                        // para.nStep = 'showModules';
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.startModule(successCallBack, errorCallBack)
                                        }
                                    }, para.errorCallBack);
                                // })
                            // },function (error) {
                            //     console.error(error)
                            // })
                            break;
                        case 'startModule3':
                            $this.sm[ref.sm3].startModule(function () {

                            }, para.errorCallBack);
                            para.nStep = 'startModule4';
                            dbFlag += 1;
                            if (dbFlag === 2) {
                                $this.startModule(successCallBack, errorCallBack)
                            }
                            break;
                        case 'startModule4':
                            $this.sm[ref.sm4].startModule(function () {

                            }, para.errorCallBack);
                            para.nStep = 'showModules';
                            dbFlag += 1;
                            if (dbFlag === 2) {
                                $this.startModule(successCallBack, errorCallBack)
                            }
                            break;
                        case 'showModules':
                            //显示子组件
                            let refId = [ "smSignUp", "smTabs", "smContentDiscuss"];
                            $this.showSubModule(refId, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'end':
                            $this.scrollEvent();
                            $('.bg-F4F4F4').css({'background':'#F4F4F4'})
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
            typeSelect:function(index){
                if(index===0){
                    $("html,body").animate({
                        scrollTop: $('.details')[0].offsetTop-100 + "px"
                    },200);
                }else if(index===1){
                    $("html,body").animate({
                        scrollTop: $('.sign')[0].offsetTop-100 + "px"
                    },200);
                }else if(index===2){
                    $("html,body").animate({
                        scrollTop: $('.discuss-dv')[0].offsetTop-100 + "px"
                    },200);
                }
            },
            activityHandle:function(activityID,commandType,refId,successCallBack, errorCallBack){
                this.sm[refId].handRefresh(commandType);
                this.ep.activityHandleEvent(activityID,commandType,successCallBack, errorCallBack)
            },
            scrollEvent:function(){
                let $this = this;
                $(window).scroll(function(event){
                    var wScrollY = window.scrollY; // 当前滚动条位置
                    var wInnerH = window.innerHeight; // 设备窗口的高度（不会变）
                    let refId = [ "smRollingBlock"];
                    if (wScrollY > wInnerH) {
                        $this.showSubModule(refId, true, function () {

                        }, function (error) {
                            console.error(error)
                        });
                    }else{
                        $this.showSubModule(refId, false, function () {

                        }, function (error) {
                            console.error(error)
                        });
                    }
                });
            },

            getUserID:function(){
                return {id:1,name:'张三'}
            },
            getCookie:function(userType){
                return '用户'
            },
            getUrlPara:function(){
                return {id:1}
            },
            smTabs_labelClickEvent:function (index) {
                this.typeSelect(index);
            },
            smSignUp_moduleChangeEvent:function (number,data) {
                this.ep.moduleChangeEvent(number,data)
            },
            smSignUp_getTicketNumberEvent:function(data,successCallBack, errorCallBack){
                this.ep.getTicketNumberEvent(data,successCallBack, errorCallBack)
            },
            smSignUp_activityHandleEvent:function (activityID,commandType,successCallBack, errorCallBack) {
                this.activityHandle(activityID,commandType,'smContentDiscuss',successCallBack, errorCallBack)
            },
            smSignUp_getHandleStateEvent:function (data,successCallBack, errorCallBack) {
                this.ep.getHandleStateEvent(data,successCallBack, errorCallBack)
            },
            smContentDiscuss_activityHandleEvent:function (activityID,commandType,successCallBack, errorCallBack) {
                this.activityHandle(activityID,commandType,'smSignUp',successCallBack, errorCallBack)
            },
            smContentDiscuss_getHandleStateEvent:function (data,successCallBack, errorCallBack) {
                this.ep.getHandleStateEvent(data,successCallBack, errorCallBack)
            },
            smContentDiscuss_getAttentionStateEvent:function(data,successCallBack, errorCallBack){
                this.ep.getAttentionStateEvent(data,successCallBack, errorCallBack)
            },
            smContentDiscuss_groupAttentionEvent:function(data,successCallBack, errorCallBack){
                this.ep.groupAttentionEvent(data,successCallBack, errorCallBack)
            },
            smContentDiscuss_discussQuestionEvent:function (data,successCallBack, errorCallBack) {
                this.ep.discussQuestionEvent(data,successCallBack, errorCallBack)
            },
            smContentDiscuss_getSumEvent:function(data,successCallBack, errorCallBack){
                this.ep.getSumEvent(data,successCallBack, errorCallBack)
            },



        }
    }
</script>
<style lang="scss">
    .activity-detail-com {
        .tabs-component .el-tabs__item{
            height: 50px;
            font-size: 16px;
            line-height: 50px;
        }
    }
</style>
<style lang="scss" scoped>
    .activity-detail-com{
        .sign-up{
            padding:50px 30px;
        }
        .content-top{
            background:rgba(255,255,255,1);
            box-shadow:0px 0px 8px 0px rgba(48,49,51,0.1);
            border-radius:4px 4px 0px 0px;
        }

        .detail-tabs{
            width: 500px;
            height: 50px;
        }

        .content-discuss-dv{
            background:rgba(255,255,255,1);
            margin-top: 20px;
        }
        .rolling-block{
            position: fixed;
            right:60px;
            bottom:160px;
        }
    }




</style>
