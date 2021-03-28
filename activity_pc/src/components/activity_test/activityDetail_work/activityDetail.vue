<template>
    <div class="activity-detail">
        <div>
            <activity-header
                    ref="smHeader"
                    refId="smHeader"
                    v-show="pvt_isShow.v1 === 'smHeader'"
                    :paraVarPair="pvt_v1.smHeader.paraVarPair"
                    :para="pvt_v1.smHeader.para"
                    :attr="pvt_v1.smHeader.attr">
            </activity-header>
        </div>
        <div class="content">
            <div class="content-top">
                <div class="sign-up">
                    <sign-up
                            ref="smSignUp"
                            refId="smSignUp"
                            v-show="pvt_isShow.v2 === 'smSignUp'"
                            :paraVarPair="pvt_v2.smSignUp.paraVarPair"
                            :para="pvt_v2.smSignUp.para"
                            :attr="pvt_v2.smSignUp.attr">
                    </sign-up>
                </div>
                <div class="detail-tabs">
                    <lm-tabs
                            ref="smTabs"
                            refId="smTabs"
                            v-show="pvt_isShow.v3 === 'smTabs'"
                            :paraVarPair="pvt_v3.smTabs.paraVarPair"
                            :para="pvt_v3.smTabs.para"
                            :attr="pvt_v3.smTabs.attr">
                    </lm-tabs>
                </div>
            </div>
            <div class="content-discuss-dv">
                <content-discuss
                        ref="smContentDiscuss"
                        refId="smContentDiscuss"
                        v-show="pvt_isShow.v4 === 'smContentDiscuss'"
                        :paraVarPair="pvt_v4.smContentDiscuss.paraVarPair"
                        :para="pvt_v4.smContentDiscuss.para"
                        :attr="pvt_v4.smContentDiscuss.attr">
                </content-discuss>
            </div>
        </div>
        <div>
            <activity-footer
                    ref="smFooter"
                    refId="smFooter"
                    v-show="pvt_isShow.v5 === 'smFooter'"
                    :paraVarPair="pvt_v5.smFooter.paraVarPair"
                    :para="pvt_v5.smFooter.para"
                    :attr="pvt_v5.smFooter.attr">
            </activity-footer>
        </div>
        <div class="rolling-block">
            <rolling-block
                    ref="smRollingBlock"
                    refId="smRollingBlock"
                    v-show="pvt_isShow.v6 === 'smRollingBlock'"
                    :paraVarPair="pvt_v6.smRollingBlock.paraVarPair"
                    :para="pvt_v6.smRollingBlock.para"
                    :attr="pvt_v6.smRollingBlock.attr">
            </rolling-block>
        </div>
    </div>
</template>

<script>
    import libSys
        from '@/components/baseComponent/libSys.js';
    import libUpload
        from '@/components/baseComponent/libUpload.js';
    import activityHeader from './header';
    import activityFooter from './footer';
    import signUp from './signUp';
    import contentDiscuss from './contentDiscuss';
    import rollingBlock from './component/rollingBlock';


    export default {
        name: 'pageGene',
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        components: {
            activityHeader, activityFooter, signUp, contentDiscuss, rollingBlock
        },
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ["v1", "v2", "v3", "v4", "v5", "v6"],
                    subModule: ["smHeader", "smSignUp", "smTabs", "smContentDiscuss", "smFooter", "smRollingBlock"]
                },
                pvt_isShow: {"v1": null, "v2": null, "v3": null, "v4": null, "v5": null, "v6": null},
                pvt_eventPortInput: ['activitySrcIDGetIn', 'discussAnswerIn', 'getOrderNumIn'],
                sys: {
                    api: null,
                },
                mac: mac.mac,
                debugFlag: true,
                activityID: '',
                tabData: [{val: "活动详情", icon: "", disable: ''}, {val: "已报名", icon: "", disable: ''}, {
                    val: "全部讨论",
                    icon: "",
                    disable: ''
                }],
            }
        },
        computed: {
            pvt_v1: function () {
                return {
                    smHeader: {
                        paraVarPair: {},
                        para: {},
                        attr: {}
                    }
                }
            }, pvt_v2: function () {
                return {
                    smSignUp: {
                        paraVarPair: {},
                        para: {
                            activityID: this.activityID
                        },
                        attr: {}
                    }
                }
            }, pvt_v3: function () {
                return {
                    smTabs: {
                        paraVarPair: {},
                        para: {
                            tabData: this.tabData
                        },
                        attr: {
                            stretch: true, checked: 0
                        }
                    }
                }
            }, pvt_v4: function () {
                return {
                    smContentDiscuss: {
                        paraVarPair: {},
                        para: {
                            activityID: this.activityID
                        },
                        attr: {}
                    }
                }
            }, pvt_v5: function () {
                return {
                    smFooter: {
                        paraVarPair: {},
                        para: {},
                        attr: {}
                    }
                }
            }, pvt_v6: function () {
                return {
                    smRollingBlock: {
                        paraVarPair: {},
                        para: {},
                        attr: {}
                    }
                }
            }
        },
        watch: {
            para: {
                handler: function (nValue, oValue) {
                    let $this = this;
                    $this.sys.lib = Object.assign({}, libSys, libUpload);
                    Object.assign($this, $this.sys.lib);
                    $this.pvt_initSysData();
                    if (nValue !== null) {
                        $this.sys.api = $this.para.geneInstance.geneAPI;
                        $this.para.geneInstance.geneUser = $this;
                        $this.para.geneInstance.eventStart($this.para.event, $this.para.instruct, $this.para.command, $this.para.paraObject, function (result) {
                            // $this.startModule(function () {},function () {})
                        }, function (error) {
                            console.log(error);
                        });

                    }
                }
            }
        },
        provide: function () {
            return {
                sys: this.sys
            }
        },
        mounted: function () {
            this.pvt_initSysData();
            // MapLoader()
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
                let fnname = 'activityDetail.startModule';
                let ref = {
                    sm1: 'smHeader',
                    sm2: 'smSignUp',
                    sm3: 'smTabs',
                    sm4: 'smContentDiscuss',
                    sm5: 'smFooter',
                    sm6: 'smRollingBlock',
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
                        case 'activitySrcIDGetIn':
                            $this.ep.activitySrcIDGetIn(function (result) {
                                para.urlActivityID = result;
                                para.nStep = 'conditiondataInput';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error)
                            })
                            break
                        case 'conditiondataInput':
                            var geneInputData = {};
                            geneInputData[$this.mac.tb.groupActivity] = [$this.mac.fd.groupActivity.departmentName, $this.mac.fd.groupActivity.commentNumber, $this.mac.fd.groupActivity.favoriteNumber, $this.mac.fd.groupActivity.forwardNumber, $this.mac.fd.groupActivity.praiseNumber, $this.mac.fd.groupActivity.name, $this.mac.fd.groupActivity.details, $this.mac.fd.groupActivity.label, $this.mac.fd.groupActivity.picture, $this.mac.fd.groupActivity.poster, $this.mac.fd.groupActivity.place, $this.mac.fd.groupActivity.startTime, $this.mac.fd.groupActivity.endTime, $this.mac.fd.groupActivity.refundExplain, $this.mac.fd.groupActivity.enrollNumber];
                            geneInputData[$this.mac.tb.groupActivityTicketType] = null;
                            var expression = $this.mac.fd.id + '=' + para.urlActivityID;
                            var start = null;
                            var total = null;
                            var sort = ['id,asc'];
                            var destGeneSite = '';
                            $this.sys.api.conditiondataInput($this.mac.tb.groupActivity, geneInputData, expression, start, total, sort, destGeneSite, function (result) {
                                $this.activityID = result[0];
                                para.nStep = 'startModule1';
                                $this.forceUpdateData(function () {
                                    dbFlag += 1;
                                    if (dbFlag === 2) {
                                        $this.startModule(successCallBack, errorCallBack)
                                    }
                                });
                            }, function (error) {
                                console.error(error)
                            })
                            break;
                        // case 'queryActivity':
                        //     objectName = $this.mac.tb.groupActivity;
                        //     dbData = {};
                        //     dbData[$this.mac.fd.id] = [$this.activityID];
                        //     dbData[$this.mac.fd.groupActivity.enrollNumber] = [];
                        //     $this.sys.api.recordRead(objectName, dbData,
                        //         function () {
                        //             para.number = 0;
                        //             for(var i =0;i<dbData[$this.mac.fd.groupActivity.enrollNumber][0].length;i++){
                        //                 para.number += dbData[$this.mac.fd.groupActivity.enrollNumber][0][i];
                        //             }
                        //             $this.tabData = [{val: "活动详情", icon: "", disable:''},{val: "已报名"+para.number, icon: "", disable:''},{val: "全部讨论", icon: "", disable:''}],
                        //                 $this.forceUpdateData(function(){
                        //                     para.nStep = 'startModule1';
                        //                     dbFlag += 1;
                        //                     if (dbFlag === 2) {
                        //                         $this.startModule(successCallBack, errorCallBack)
                        //                     }
                        //                 })
                        //         }, para.errorCallBack)
                        //     break
                        // case 'talbleName':
                        //     var objTable = {
                        //         'table activityOption':{
                        //             label:'string',
                        //             budget:'string',
                        //             customer_level:'string',
                        //             'table activityEnrollOption':{
                        //                 type:'number',
                        //                 name:'string',
                        //                 base_comment:'string',
                        //             }
                        //         }
                        //     }
                        //     $this.sys.api.newTable(objTable, function (result) {
                        //         para.nStep = 'activityBudgetOptionNew';
                        //         dbFlag += 1;
                        //         if (dbFlag === 2) {
                        //             $this.startModule(successCallBack, errorCallBack)
                        //         }
                        //     }, function (error) {
                        //         console.log('error:' + JSON.stringify(error));
                        //     });
                        //     break
                        // case 'activityBudgetOptionNew':
                        //     objectName = $this.mac.tb.activityOption;
                        //     parentRecord = null;
                        //     dbData = {};
                        //     dbData[$this.mac.fd.activityOption.label] = [{'行业':['IT互联网','创业','科技','金融','游戏','文娱','电商','教育','营销','设计','地产','医疗','服务业','区域链'],'生活':['演出','文艺','手工','公益','户外出游','运动健康','聚会交友','休闲娱乐','投资理财','时尚','心里','体育赛事'],'亲子':['儿童才艺','益智潮玩','儿童剧/展览','亲子旅游','早教/升学'],'学习':['课程','读书','职场','社团','讲座']}]
                        //     dbData[$this.mac.fd.activityOption.customerLevel] = [[{value:1,label:'金牌客户'},{value:2,label:'银牌客户'},{value:3,label:'铜牌客户'},{value:4,label:'普通客户'}]]
                        //     dbData[$this.mac.fd.activityOption.budget] = [[ ['办公费', ''], ['印刷费', ''], ['交通费', ''], ['租赁费', ''], ['通讯费', ''], ['住宿费', ''], ['餐饮费', ''], ['培训费', ''], ['劳务费', ''], ['布置费', ''], ['保险费', ''], ['服装', ''], ['礼品', ''], ['奖状', ''], ['其他', '']]];
                        //     $this.sys.api.recordNew(objectName, parentRecord, dbData,
                        //         function () {
                        //             para.activityOptionID = dbData[$this.mac.fd.id][0];
                        //             para.nStep = 'startModule1'
                        //             dbFlag += 1;
                        //             if (dbFlag === 2) {
                        //                 $this.startModule(successCallBack, errorCallBack)
                        //             }
                        //         }, para.errorCallBack)
                        //     break;
                        // case 'groupActivityOrderNew':
                        //     objectName = $this.mac.tb.groupActivityOrder;
                        //     parentRecord = null;
                        //     dbData = {};
                        //     dbData[$this.mac.fd.groupActivityOrder.groupActivityID] = [1,1]
                        //     dbData[$this.mac.fd.groupActivityOrder.applicant] = [2,3]
                        //     dbData[$this.mac.fd.groupActivityOrder.groupActivityTicketTypeID] = [1,2];
                        //     dbData[$this.mac.fd.groupActivityOrder.price] = [0,50];
                        //     dbData[$this.mac.fd.groupActivityOrder.status] = [$this.mac.enum.groupActivityOrder.status.complete,$this.mac.enum.groupActivityOrder.status.complete];
                        //     dbData[$this.mac.fd.groupActivityOrder.createTime] = ['2019-09-21 15:41:00','2019-09-21 15:50:00'];
                        //     $this.sys.api.recordNew(objectName, parentRecord, dbData,
                        //         function () {
                        //             para.groupActivityOrderID = dbData[$this.mac.fd.id];
                        //             para.nStep = 'groupActvitiyBillNew'
                        //             dbFlag += 1;
                        //             if (dbFlag === 2) {
                        //                 $this.startModule(successCallBack, errorCallBack)
                        //             }
                        //         }, para.errorCallBack)
                        //     break;
                        // case 'groupActvitiyBillNew':
                        //     objectName = $this.mac.tb.groupActvitiyBill;
                        //     parentRecord = para.groupActivityOrderID[0];
                        //     dbData = {};
                        //     dbData[$this.mac.fd.groupActvitiyBill.name] = ['李彦龙', '李浩鹏','李天一', '李铁刚', '李君昊', '李国艳' ,'李恩德' ,'李文雅' ,'李文轩' ,'李文博', '李文璇','李文萱', '李文渲' ,'李美红']
                        //     dbData[$this.mac.fd.groupActvitiyBill.status] = [6,6,6,6,6,6,6,6,6,6,6,6,6,6]
                        //     $this.sys.api.recordNew(objectName, parentRecord, dbData,
                        //         function () {
                        //             para.nStep = 'groupActvitiyBillNewOnce'
                        //             dbFlag += 1;
                        //             if (dbFlag === 2) {
                        //                 $this.startModule(successCallBack, errorCallBack)
                        //             }
                        //         }, function (error) {
                        //             console.error(error)
                        //         })
                        //     break;
                        // case 'groupActvitiyBillNewOnce':
                        //     objectName = $this.mac.tb.groupActvitiyBill;
                        //     parentRecord = para.groupActivityOrderID[1];
                        //     dbData = {};
                        //     dbData[$this.mac.fd.groupActvitiyBill.name] = ['赵泽晨', '赵子桐', '赵建川', '赵琦锐', '赵家妍', '赵宇琪', '赵佳鑫', '赵语彤', '赵紫睿', '赵天琪', '赵懿轩', '赵子鑫', '赵谨瑶', '赵玉涵' ,'赵俊辰', '赵泊君', '赵无名', '赵书瑶']
                        //     dbData[$this.mac.fd.groupActvitiyBill.status] = [7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7]
                        //     $this.sys.api.recordNew(objectName, parentRecord, dbData,
                        //         function () {
                        //             para.nStep = 'startModule1'
                        //             dbFlag += 1;
                        //             if (dbFlag === 2) {
                        //                 $this.startModule(successCallBack, errorCallBack)
                        //             }
                        //         }, para.errorCallBack)
                        //     break;
                        case 'startModule1':
                            $this.sm[ref.sm1].startModule(function () {

                            }, para.errorCallBack);
                            para.nStep = 'startModule2';
                            dbFlag += 1;
                            if (dbFlag === 2) {
                                $this.startModule(successCallBack, errorCallBack)
                            }
                            break;
                        case 'startModule2':
                            $this.sm[ref.sm2].startModule(function () {

                            }, para.errorCallBack);
                            para.nStep = 'startModule3';
                            dbFlag += 1;
                            if (dbFlag === 2) {
                                $this.startModule(successCallBack, errorCallBack)
                            }
                            break;
                        case 'startModule3':
                            $this.ep.getOrderNumIn(para.urlActivityID, function (result) {
                                $this.tabData = [{val: "活动详情", icon: "", disable: ''}, {
                                    val: "已报名" + result,
                                    icon: "",
                                    disable: ''
                                }, {val: "全部讨论", icon: "", disable: ''}];
                                $this.forceUpdateData(function () {
                                    $this.sm[ref.sm3].startModule(function () {
                                        para.nStep = 'startModule4';
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.startModule(successCallBack, errorCallBack)
                                        }
                                    }, para.errorCallBack);
                                })
                            }, function (error) {
                                console.error(error)
                            })
                            break;
                        case 'startModule4':
                            $this.sm[ref.sm4].startModule(function () {

                            }, para.errorCallBack);
                            para.nStep = 'startModule5';
                            dbFlag += 1;
                            if (dbFlag === 2) {
                                $this.startModule(successCallBack, errorCallBack)
                            }
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
                                para.nStep = 'showModules';
                                dbFlag += 1;
                                if (dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showModules':
                            //显示子组件
                            let refId = ["smHeader", "smSignUp", "smTabs", "smContentDiscuss", "smFooter"];
                            $this.showSubModule(refId, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    $this.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'end':
                            $this.scrollEvent();
                            $('.bg-F4F4F4').css({'background': '#F4F4F4'})
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
            scrollEvent: function () {
                let $this = this;
                $(window).scroll(function (event) {
                    var wScrollY = window.scrollY; // 当前滚动条位置
                    var wInnerH = window.innerHeight; // 设备窗口的高度（不会变）
                    let refId = ["smRollingBlock"];
                    if (wScrollY > wInnerH) {
                        $this.showSubModule(refId, true, function () {

                        }, function (error) {
                            console.error(error)
                        });
                    } else {
                        $this.showSubModule(refId, false, function () {

                        }, function (error) {
                            console.error(error)
                        });
                    }
                });
            },
            typeSelect: function (index) {
                if (index === 0) {
                    $("html,body").animate({
                        scrollTop: $('.details')[0].offsetTop - 100 + "px"
                    }, 200);
                } else if (index === 1) {
                    $("html,body").animate({
                        scrollTop: $('.sign')[0].offsetTop - 100 + "px"
                    }, 200);
                } else if (index === 2) {
                    $("html,body").animate({
                        scrollTop: $('.discuss-dv')[0].offsetTop - 100 + "px"
                    }, 200);
                }
            },

            getUserID: function () {
                return {id: 1, name: '张三'}
            },
            getCookie: function (userType) {
                return '用户'
            },
            getUrlPara: function () {
                return {id: 1}
            },
            smContentDiscuss_discussAnswerEvent: function (discussID, content, successCallBack, errorCallBack) {
                this.ep.discussAnswerIn(discussID, content, successCallBack, errorCallBack)
            },
            smTabs_labelClickEvent: function (index) {
                this.typeSelect(index);
            }

        }
    }
</script>
<style lang="scss">
    .activity-detail {
        .tabs-component .el-tabs__item {
            height: 50px;
            font-size: 16px;
            line-height: 50px;
        }
    }
</style>
<style lang="scss" scoped>
    .activity-detail {
        .content {
            background: #F4F4F4;
            padding: 0 14%;
        }

        @media screen and (max-width: 1200px) {
            .content {
                padding: 0 20px;
            }
        }

        @media screen and (max-width: 1300px) and (min-width: 1200px) {
            .content {
                padding: 0 50px;
            }
        }

        @media screen and (max-width: 1400px) and (min-width: 1300px) {
            .content {
                padding: 0 76px;
            }
        }

        @media screen and (max-width: 1500px) and (min-width: 1400px) {
            .content {
                padding: 0 110px;
            }
        }

        @media screen and (max-width: 1600px) and (min-width: 1500px) {
            .content {
                padding: 0 140px;
            }
        }

        .content {
            padding-top: 90px;
        }

        .sign-up {
            padding: 50px 30px;
        }

        .content-top {
            background: rgba(255, 255, 255, 1);
            box-shadow: 0px 0px 8px 0px rgba(48, 49, 51, 0.1);
            border-radius: 4px 4px 0px 0px;
        }

        .detail-tabs {
            width: 500px;
            height: 50px;
        }

        .content-discuss-dv {
            background: rgba(255, 255, 255, 1);
            margin-top: 20px;
        }

        .rolling-block {
            position: fixed;
            right: 60px;
            bottom: 160px;
        }
    }


</style>
