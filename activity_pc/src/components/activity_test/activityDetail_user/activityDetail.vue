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
            <activityDetailCom
                    ref="smActivityDetailCom"
                    refId="smActivityDetailCom"
                    v-show="pvt_isShow.v2 === 'smActivityDetailCom'"
                    :paraVarPair="pvt_v2.smActivityDetailCom.paraVarPair"
                    :para="pvt_v2.smActivityDetailCom.para"
                    :attr="pvt_v2.smActivityDetailCom.attr">
            </activityDetailCom>
            <orderInput
                    ref="smOrderInput"
                    refId="smOrderInput"
                    v-show="pvt_isShow.v2 === 'smOrderInput'"
                    :paraVarPair="pvt_v2.smOrderInput.paraVarPair"
                    :para="pvt_v2.smOrderInput.para"
                    :attr="pvt_v2.smOrderInput.attr">
            </orderInput>
            <orderApproval
                    ref="orderApprovalRef"
                    refId="orderApprovalRef"
                    v-show="pvt_isShow.v2 === 'orderApprovalRef'"
                    :paraVarPair="pvt_v2.orderApprovalRef.paraVarPair"
                    :para="pvt_v2.orderApprovalRef.para"
                    :attr="pvt_v2.orderApprovalRef.attr">
            </orderApproval>
            <orderConfirm
                    ref="orderConfirmRef"
                    refId="orderConfirmRef"
                    v-show="pvt_isShow.v2 === 'orderConfirmRef'"
                    :paraVarPair="pvt_v2.orderConfirmRef.paraVarPair"
                    :para="pvt_v2.orderConfirmRef.para"
                    :attr="pvt_v2.orderConfirmRef.attr">
            </orderConfirm>
            <applySuccess
                    ref="applySuccessRef"
                    refId="applySuccessRef"
                    v-show="pvt_isShow.v2 === 'applySuccessRef'"
                    :paraVarPair="pvt_v2.applySuccessRef.paraVarPair"
                    :para="pvt_v2.applySuccessRef.para"
                    :attr="pvt_v2.applySuccessRef.attr">
            </applySuccess>
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
    </div>
</template>

<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';
    import activityHeader from './header';
    import activityFooter from './footer';
    import activityDetailCom from './activityDetailCom';
    import orderInput from './orderInput/orderInput';
    import applySuccess from './applySuccess/applySuccess';
    import orderApproval from './orderApproval/orderApproval';
    import orderConfirm from './orderConfirm/orderConfirm';


    export default {
        name: 'pageGene',
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        components: {
            activityHeader, activityFooter, activityDetailCom, orderInput,applySuccess,orderConfirm,orderApproval
        },
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ["v1", "v2", "v2", "v2", "v2", 'v2', "v5", "v6"],
                    subModule: ["smHeader", "smActivityDetailCom", "smOrderInput", 'applySuccessRef', 'orderConfirmRef', 'orderApprovalRef', "smFooter", "smRollingBlock"]
                },
                pvt_isShow: {"v1": null, "v2": null, "v5": null, "v6": null},

                pvt_eventPortInput: ['moduleChangeEvent', 'activityBrowseIn', 'activityHandleIn', 'getOrderNumIn', 'getAttentionStateIn', 'groupAttentionIn', 'discussQuestionIn', 'getTicketNumberIn', 'getSumIn', 'thirdPayIn', 'balancePayIn', 'orderNewIn'],

                sys: {
                    api: null,
                },
                mac: mac.mac,
                debugFlag: true,
                activityID: '',
                curTicketId: '',
                billNum: '',
                orderData: {},

                isLogin: false,
            }
        },
        computed: {
            pvt_v1: function () {
                return {
                    smHeader: {
                        paraVarPair: {},
                        para: {
                            isLogin: this.isLogin
                        },
                        attr: {}
                    }
                }
            }, pvt_v2: function () {
                return {
                    smActivityDetailCom: {
                        paraVarPair: {},
                        para: {
                            activityID: this.activityID,
                            isLogin: this.isLogin
                        },
                        attr: {}
                    },
                    smOrderInput: {
                        paraVarPair: {},
                        para: {
                            curTicketId: this.curTicketId,
                            billNum: this.billNum,
                            activityId: this.activityID
                        },
                        attr: {}
                    },
                    applySuccessRef: {
                        paraVarPair: {},
                        para: {
                            data: this.orderData
                        },
                        attr: {}
                    },
                    orderConfirmRef: {
                        paraVarPair: {},
                        para: {
                            data: this.orderData
                        },
                        attr: {}
                    },
                    orderApprovalRef: {
                        paraVarPair: {},
                        para: {
                            data: this.orderData
                        },
                        attr: {}
                    },
                }
            }, pvt_v5: function () {
                return {
                    smFooter: {
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
            getCookie:function(type){
                if(type === 'userID'){
                    return 1;
                } else if(type === 'userSite'){
                    return {
                        geneAddr:{
                            groupID: 1,
                            cloudID: 2,
                            vesselType: 's',
                            vesselID: 18,
                            userID: 1,
                            geneID: 26
                        },
                        server: 12
                    }
                } else if (type === 'userType') {
                    // 0表示普通用户，1表示游客
                    return 0
                }
            },

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
                    sm2: 'smActivityDetailCom',
                    sm_2: 'smOrderInput',
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
                            $this.mySite = $this.getCookie('userSite');
                            $this.myId = $this.getCookie('userID');
                            $this.myType = $this.getCookie('userType');

                            if($this.myType === 0) {
                                this.isLogin = true;
                            } else {
                                this.isLogin = false;
                            }

                            para.urlActivityID = $this.getUrlPara()['id'];
                            para.nStep = 'conditiondataInput';
                            dbFlag += 1;
                            break
                        case 'conditiondataInput':
                            var geneInputData = {};
                            geneInputData[$this.mac.tb.groupActivity] = [$this.mac.fd.groupActivity.departmentName, $this.mac.fd.groupActivity.name, $this.mac.fd.groupActivity.details, $this.mac.fd.groupActivity.label, $this.mac.fd.groupActivity.picture, $this.mac.fd.groupActivity.poster, $this.mac.fd.groupActivity.place, $this.mac.fd.groupActivity.startTime, $this.mac.fd.groupActivity.endTime, $this.mac.fd.groupActivity.refundExplain, $this.mac.fd.groupActivity.enrollNumber, $this.mac.fd.groupActivity.favoriteNumber, $this.mac.fd.groupActivity.forwardNumber, $this.mac.fd.groupActivity.praiseNumber, $this.mac.fd.groupActivity.commentNumber];
                            geneInputData[$this.mac.tb.groupActivityTicketType] = null;
                            var expression = $this.mac.fd.id + '=' + para.urlActivityID;
                            var start = null;
                            var total = null;
                            var sort = ['id,asc'];
                            var destGeneSite = '';
                            $this.sys.api.conditiondataInput($this.mac.tb.groupActivity, geneInputData, expression, start, total, sort, destGeneSite,
                                function (result) {
                                    $this.activityID = result[0];
                                    para.nStep = 'activityBrowseIn';
                                    $this.forceUpdateData(function () {
                                        dbFlag += 1;
                                        if (dbFlag === 2) {
                                            $this.startModule(successCallBack, errorCallBack)
                                        }
                                    })
                                }, function (error) {
                                    console.error(error)
                                })
                            break
                        case 'activityBrowseIn':
                            $this.ep.activityBrowseIn(para.urlActivityID, function () {
                            }, function () {
                            })
                            para.nStep = 'startModule1';
                            dbFlag += 1;
                            if (dbFlag === 2) {
                                $this.startModule(successCallBack, errorCallBack)
                            }
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
                        case 'startModule2':
                            $this.sm[ref.sm2].startModule(function () {

                            }, para.errorCallBack);
                            para.nStep = 'startModule5';
                            // para.nStep = 'showModules';
                            dbFlag += 1;
                            if (dbFlag === 2) {
                                $this.startModule(successCallBack, errorCallBack)
                            }
                            break;
                        case 'startModule5':
                            $this.sm[ref.sm5].startModule(function () {

                            }, para.errorCallBack);
                            para.nStep = 'showModules';
                            dbFlag += 1;
                            if (dbFlag === 2) {
                                $this.startModule(successCallBack, errorCallBack)
                            }
                            break;
                        case 'showModules':
                            //显示子组件
                            let refId = ["smHeader", "smActivityDetailCom", "smFooter"];
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

            getUserID: function () {
                return {id: 1, name: '张三'}
            },
            // getCookie: function (userType) {
            //     return '用户'
            // },
            getUrlPara: function () {
                return {id: 1}
            },
            moduleChange: function (number, data) {
                let that = this;
                let refId;

                if(data) {
                    this.orderData = data;
                }

                // 将页面位置重定位到顶部：
                window.scrollTo(0,0);

                switch (number) {
                    case this.mac.moduleType.orderDetail:
                        refId = ['smOrderInput'];
                        that.forceUpdateData(function () {
                            that.sm[refId[0]].startModule(function () {
                                that.showSubModule(refId, true, function () {
                                }, function (error) {
                                    console.error(error)
                                });
                            }, function (error) {
                                console.error(error)
                            });
                        });
                        break;
                    case this.mac.moduleType.activityDetail:
                        refId = ['smActivityDetailCom'];
                        that.forceUpdateData(function () {
                            that.showSubModule(refId, true, function () {
                            }, function (error) {
                                console.error(error)
                            });
                            // that.sm[refId[0]].startModule(function () {
                            //     that.showSubModule(refId, true, function () {
                            //     }, function (error) {
                            //         console.error(error)
                            //     });
                            // }, function (error) {
                            //     console.error(error)
                            // });
                        });
                        break;
                    case this.mac.moduleType.applySuccess:
                        refId = ['applySuccessRef'];
                        that.forceUpdateData(function () {
                            that.sm[refId[0]].startModule(function () {
                                that.showSubModule(refId, true, function () {
                                }, function (error) {
                                    console.error(error)
                                });
                            }, function (error) {
                                console.error(error)
                            });
                        });
                        break;
                    case this.mac.moduleType.orderApproval:
                        refId = ['orderApprovalRef'];
                        that.forceUpdateData(function () {
                            that.sm[refId[0]].startModule(function () {
                                that.showSubModule(refId, true, function () {
                                }, function (error) {
                                    console.error(error)
                                });
                            }, function (error) {
                                console.error(error)
                            });
                        });
                        break;
                    case this.mac.moduleType.orderConfirm:
                        refId = ['orderConfirmRef'];
                        that.forceUpdateData(function () {
                            that.sm[refId[0]].startModule(function () {
                                that.showSubModule(refId, true, function () {
                                }, function (error) {
                                    console.error(error)
                                });
                            }, function (error) {
                                console.error(error)
                            });
                        });
                        break;
                    case this.mac.moduleType.orderInput:
                        that.curTicketId = data['ticketId'];
                        that.billNum = data['number'];
                        refId = ['smOrderInput'];
                        that.forceUpdateData(function () {
                            that.sm[refId[0]].startModule(function () {
                                that.showSubModule(refId, true, function () {
                                }, function (error) {
                                    console.error(error)
                                });
                            }, function (error) {
                                console.error(error)
                            });
                        });
                        break;
                }
            },
            activityHandle: function (activityID, commandType, refId, successCallBack, errorCallBack) {
                this.ep.activityHandleIn(activityID, commandType, successCallBack, errorCallBack)
            },

            smActivityDetailCom_discussAnswerEvent: function (id, successCallBack, errorCallBack) {
                this.ep.discussAnswerIn(id, successCallBack, errorCallBack)
            },
            smActivityDetailCom_moduleChangeEvent: function (number, data) {
                this.moduleChange(number, data)
            },
            smActivityDetailCom_getTicketNumberEvent: function (data, successCallBack, errorCallBack) {
                this.ep.getTicketNumberIn(data, successCallBack, errorCallBack)
            },
            smActivityDetailCom_activityHandleEvent: function (activityID, commandType, successCallBack, errorCallBack) {
                this.activityHandle(activityID, commandType, 'smContentDiscuss', successCallBack, errorCallBack)
            },
            smActivityDetailCom_getHandleStateEvent: function (data, successCallBack, errorCallBack) {
                this.ep.getHandleStateIn(data, successCallBack, errorCallBack)
            },
            smActivityDetailCom_getAttentionStateEvent: function (data, successCallBack, errorCallBack) {
                this.ep.getAttentionStateIn(data, successCallBack, errorCallBack)
            },
            smActivityDetailCom_groupAttentionEvent: function (data, successCallBack, errorCallBack) {
                this.ep.groupAttentionIn(data, successCallBack, errorCallBack)
            },
            smActivityDetailCom_discussQuestionEvent: function (data, successCallBack, errorCallBack) {
                this.ep.discussQuestionIn(data, successCallBack, errorCallBack)
            },
            smActivityDetailCom_getSumEvent: function (data, successCallBack, errorCallBack) {
                this.ep.getSumIn(data, successCallBack, errorCallBack)
            },
            smActivityDetailCom_getOrderNumEvent: function (data, successCallBack, errorCallBack) {
                this.ep.getOrderNumIn(data, successCallBack, errorCallBack)
            },

            smOrderInput_moduleChangeEvent: function (type, data) {
                this.moduleChange(type, data)
            },
            smOrderInput_orderNewIn: function (terOrderId, successCallBack, errorCallBack) {
                this.ep.orderNewIn(terOrderId, successCallBack, errorCallBack)
            },

            orderConfirmRef_moduleChangeEvent: function (type, data) {
                this.moduleChange(type, data)
            },
            orderConfirmRef_balancePayIn: function (terOrderId, successCallBack, errorCallBack) {
                this.ep.balancePayIn(terOrderId, successCallBack, errorCallBack)
            },
            orderConfirmRef_thirdPayIn: function (terOrderId, thirdType, successCallBack, errorCallBack) {
                this.ep.thirdPayIn(terOrderId, thirdType, successCallBack, errorCallBack)
            },

        }
    }
</script>
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
            /*min-height: 900px;*/
            padding-top: 90px;
            padding-bottom: 15px;
        }
    }


</style>
