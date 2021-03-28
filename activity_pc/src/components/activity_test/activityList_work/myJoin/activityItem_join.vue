<template>
    <div class="activity-item-wrap">
        <div class="activity-item-left">
            <img src="../../../../assets/detail.png" width="100%" height="100%" alt="">
            <!--<lm-image-->
            <!--ref="posterRef"-->
            <!--refId="posterRef"-->
            <!--v-show="pvt_isShow.poster === 'posterRef'"-->
            <!--:paraVarPair="pvt_poster.posterRef.paraVarPair"-->
            <!--:para="pvt_poster.posterRef.para"-->
            <!--:attr="pvt_poster.posterRef.attr">-->
            <!--</lm-image>-->
        </div>
        <div class="activity-item-right">
            <div class="activity-item-title">
                <lm-link-text
                        ref="infoContentRef"
                        refId="infoContentRef"
                        v-show="pvt_isShow.infoContent === 'infoContentRef'"
                        :paraVarPair="pvt_infoContent.infoContentRef.paraVarPair"
                        :para="pvt_infoContent.infoContentRef.para"
                        :attr="pvt_infoContent.infoContentRef.attr">
                </lm-link-text>
                <lm-link-text
                        ref="statusRef"
                        refId="statusRef"
                        v-show="pvt_isShow.status === 'statusRef'"
                        :paraVarPair="pvt_status.statusRef.paraVarPair"
                        :para="pvt_status.statusRef.para"
                        :attr="pvt_status.statusRef.attr">
                </lm-link-text>
            </div>
            <div class="item-time">
                <lm-link-text
                        ref="infoTimeRef"
                        refId="infoTimeRef"
                        v-show="pvt_isShow.infoTime === 'infoTimeRef'"
                        :paraVarPair="pvt_infoTime.infoTimeRef.paraVarPair"
                        :para="pvt_infoTime.infoTimeRef.para"
                        :attr="pvt_infoTime.infoTimeRef.attr">
                </lm-link-text>
            </div>
            <div class="item-place">
                <lm-link-text
                        ref="infoPlaceRef"
                        refId="infoPlaceRef"
                        v-show="pvt_isShow.infoPlace === 'infoPlaceRef'"
                        :paraVarPair="pvt_infoPlace.infoPlaceRef.paraVarPair"
                        :para="pvt_infoPlace.infoPlaceRef.para"
                        :attr="pvt_infoPlace.infoPlaceRef.attr">
                </lm-link-text>
            </div>
            <div class="item-btns">
                <div class="item-btns-left">
                    <div class="btns-left-other">
                        <lm-link-text
                                ref="browseRef"
                                refId="browseRef"
                                v-show="pvt_isShow.browse === 'browseRef'"
                                :paraVarPair="pvt_browse.browseRef.paraVarPair"
                                :para="pvt_browse.browseRef.para"
                                :attr="pvt_browse.browseRef.attr">
                        </lm-link-text>
                        <lm-link-text
                                ref="turnRef"
                                refId="turnRef"
                                v-show="pvt_isShow.turn === 'turnRef'"
                                :paraVarPair="pvt_turn.turnRef.paraVarPair"
                                :para="pvt_turn.turnRef.para"
                                :attr="pvt_turn.turnRef.attr">
                        </lm-link-text>
                        <lm-link-text
                                ref="applyRef"
                                refId="applyRef"
                                v-show="pvt_isShow.apply === 'applyRef'"
                                :paraVarPair="pvt_apply.applyRef.paraVarPair"
                                :para="pvt_apply.applyRef.para"
                                :attr="pvt_apply.applyRef.attr">
                        </lm-link-text>
                    </div>
                </div>
                <div class="item-btns-right">
                    <div class="btns-right-back" v-if="initSort">
                        <lm-button
                                ref="sortRef"
                                refId="sortRef"
                                v-show="pvt_isShow.sort === 'sortRef'"
                                :paraVarPair="pvt_sort.sortRef.paraVarPair"
                                :para="pvt_sort.sortRef.para"
                                :attr="pvt_sort.sortRef.attr">
                        </lm-button>
                    </div>
                    <div class="btns-right-applyBtn" v-if="initApplyBtn">
                        <lm-button
                                ref="applyBtnRef"
                                refId="applyBtnRef"
                                v-show="pvt_isShow.applyBtn === 'applyBtnRef'"
                                :paraVarPair="pvt_applyBtn.applyBtnRef.paraVarPair"
                                :para="pvt_applyBtn.applyBtnRef.para"
                                :attr="pvt_applyBtn.applyBtnRef.attr">
                        </lm-button>
                    </div>
                    <div class="btns-right-check" v-if="initCheck">
                        <lm-button
                                ref="checkRef"
                                refId="checkRef"
                                v-show="pvt_isShow.check === 'checkRef'"
                                :paraVarPair="pvt_check.checkRef.paraVarPair"
                                :para="pvt_check.checkRef.para"
                                :attr="pvt_check.checkRef.attr">
                        </lm-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';

    export default {
        components: {},
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ["sys"],
        data: function () {
            return {
                time: '',
                place: '',
                browerNumber: 0,
                forwardNumber: 0,
                enrollNumber: 0,
                status: '',
                terActivityId: null,
                ticketFree: true,

                initCheck: true,
                initApplyBtn: true,
                initSort: true,

                mac: mac.mac,

                // 需要双向修改参数的场景，用户可直接修改以下模块参数同名的变量
                // selectedPara: this.para.selected,

                pvt_subModuleMap: {
                    subModule: ['posterRef', 'infoContentRef', 'infoTimeRef', 'infoPlaceRef', 'statusRef', 'browseRef', 'turnRef', 'applyRef', 'sortRef', 'applyBtnRef', 'checkRef'],
                    vessel: ['poster', 'infoContent', 'infoTime', 'infoPlace', 'status', 'browse', 'turn', 'apply', 'sort', 'applyBtn', 'check'],
                },

                // 各个容器当前显示的子模块
                pvt_isShow: {
                    poster: null,
                    infoContent: null,
                    infoTime: null,
                    infoPlace: null,
                    status: null,
                    browse: null,
                    turn: null,
                    apply: null,
                    sort: null,
                    applyBtn: null,
                    check: null,
                },

                // 当前模块输入类型的事务接口名称，工具完成前需要用户手动填写
                pvt_eventPortInput: ['applyEvent', 'checkEvent', 'sortEvent', 'showDetailEvent'],
            }
        },
        computed: {
            pvt_poster: function () {
                return {
                    posterRef: {
                        paraVarPair: {},
                        para: {
                            image: [{
                                $table: this.mac.tb.groupActivity,
                                $arrField: [this.mac.fd.groupActivity.poster],
                                $arrValue: [this.para.curActivityId]
                            }]
                        },
                        attr: {}
                    }
                }
            },

            pvt_infoContent: function () {
                return {
                    infoContentRef: {
                        paraVarPair: {},
                        para: {
                            textData: [{
                                $table: this.mac.tb.groupActivity,
                                $arrField: [this.mac.fd.groupActivity.name],
                                $arrValue: [this.para.curActivityId]
                            }]
                        },
                        attr: {
                            fontSize: '14px',
                            color: '#303133',
                            isClick: true
                        }
                    }
                }
            },

            pvt_infoTime: function () {
                return {
                    infoTimeRef: {
                        paraVarPair: {},
                        para: {
                            textData: this.time
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#909399',
                        }
                    }
                }
            },

            pvt_infoPlace: function () {
                return {
                    infoPlaceRef: {
                        paraVarPair: {},
                        para: {
                            textData: this.place
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#909399',
                        }
                    }
                }
            },

            pvt_status: function () {
                return {
                    statusRef: {
                        paraVarPair: {},
                        para: {
                            textData: this.status
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#FC7122',
                        }
                    }
                }
            },
            pvt_browse: function () {
                return {
                    browseRef: {
                        paraVarPair: {},
                        para: {
                            textData: this.browerNumber
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#777',
                            icon: 'el-icon-view',
                        }
                    }
                }
            },
            pvt_turn: function () {
                return {
                    turnRef: {
                        paraVarPair: {},
                        para: {
                            textData: this.forwardNumber
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#777',
                            icon: 'el-icon-share',
                        }
                    }
                }
            },
            pvt_apply: function () {
                return {
                    applyRef: {
                        paraVarPair: {},
                        para: {
                            textData: this.enrollNumber
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#777',
                            icon: 'el-icon-user',
                        }
                    }
                }
            },

            pvt_sort: function () {
                return {
                    sortRef: {
                        paraVarPair: {},
                        para: {
                            name: ['分组', 'el-icon-d-arrow-left']
                        },
                        attr: {
                            type: 'text',
                            size: 'mini'
                        }
                    }
                }
            },

            pvt_applyBtn: function () {
                return {
                    applyBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['报名管理', 'el-icon-message']
                        },
                        attr: {
                            type: 'text',
                            size: 'mini'
                        }
                    }
                }
            },
            pvt_check: function () {
                return {
                    checkRef: {
                        paraVarPair: {},
                        para: {
                            name: ['验票', 'el-icon-document']
                        },
                        attr: {
                            type: 'text',
                            size: 'mini'
                        }
                    }
                }
            },
        },

        created: function () {
            Object.assign(this, libSys, libUpload);
        },
        mounted: function () {
            this.pvt_initSysData();
        },
        methods: {
            startModule: function (successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'activityItem_start';
                let dbFlag;
                let dbData;
                let tableName;
                let condition;
                let arrRecord;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0,
                    ticketEmpty: true
                };

                if (successCallBack !== null) {
                    errorCallBack = para;
                    successCallBack = null
                }
                para = errorCallBack;

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                            that.place = '';
                            that.enrollNumber = 0;
                            that.initCheck = true;
                            that.initApplyBtn = true;
                            that.initSort = true;
                            para.refArr = ['infoContentRef', 'infoTimeRef', 'infoPlaceRef', 'statusRef', 'browseRef', 'turnRef', 'applyRef'];

                            tableName = this.mac.tb.groupActivityManageMember;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.para.curMemberId];
                            dbData[that.mac.fd.groupActivityManageMember.function] = [];

                            that.sys.api.recordRead(tableName, dbData, function () {
                                switch (dbData[that.mac.fd.groupActivityManageMember.function][0]) {
                                    case that.mac.enum.groupActivityManageMember.function.host:
                                        that.status = '主持人';
                                        break;
                                    case that.mac.enum.groupActivityManageMember.function.lecture:
                                        that.status = '主讲人';
                                        break;
                                    case that.mac.enum.groupActivityManageMember.function.assistant:
                                        that.status = '助手';
                                        break;
                                    case that.mac.enum.groupActivityManageMember.function.service:
                                        that.status = '在线客服';
                                        break;
                                }

                                // 根据页面显示的活动状态，判断应该显示什么操作按钮：
                                switch (that.status) {
                                    case '主持人':
                                        para.refArr.push('applyBtnRef', 'sortRef', 'checkRef');
                                        break;
                                    case '主讲人':
                                        para.refArr.push('sortRef', 'checkRef');
                                        that.initApplyBtn = false;
                                        break;
                                    case '助手':
                                        para.refArr.push('sortRef', 'checkRef');
                                        that.initApplyBtn = false;
                                        break;
                                    case '在线客服':
                                        that.initSort = false;
                                        that.initApplyBtn = false;
                                        that.initCheck = false;
                                        break;
                                }
                                para.nStep = 'getActivityData';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'getActivityData':
                            tableName = this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.para.curActivityId];
                            dbData[that.mac.fd.groupActivity.place] = [];
                            dbData[that.mac.fd.groupActivity.startTime] = [];
                            dbData[that.mac.fd.groupActivity.endTime] = [];
                            dbData[that.mac.fd.groupActivity.enrollNumber] = [];
                            dbData[that.mac.fd.groupActivity.browerNumber] = [];
                            dbData[that.mac.fd.groupActivity.forwardNumber] = [];
                            dbData[that.mac.fd.groupActivity.createTime] = [];
                            dbData[that.mac.fd.groupActivity.status] = [];

                            that.sys.api.recordRead(tableName, dbData, function () {
                                that.time = '时间：' + dbData[that.mac.fd.groupActivity.startTime][0];
                                that.place += '地点：';
                                for (let i = 0; i < dbData[that.mac.fd.groupActivity.place][0].name.length; i++) {
                                    that.place += dbData[that.mac.fd.groupActivity.place][0].name[i];
                                }
                                that.place += dbData[that.mac.fd.groupActivity.place][0].place;
                                that.browerNumber = dbData[that.mac.fd.groupActivity.browerNumber][0];
                                that.forwardNumber = dbData[that.mac.fd.groupActivity.forwardNumber][0];
                                for (let i = 0; i < dbData[that.mac.fd.groupActivity.enrollNumber][0].length; i++) {
                                    that.enrollNumber += dbData[that.mac.fd.groupActivity.enrollNumber][0][i];
                                }

                                that.forceUpdateData(function () {
                                    para.nStep = 'getTerActivityId';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                });
                            }, function () {
                            });
                            break;
                        case 'getTerActivityId':
                            tableName = that.mac.tb.groupActivity;
                            arrRecord = [that.para.curActivityId];
                            that.sys.api.getSourceRecord(tableName, arrRecord, function (result) {
                                that.terActivityId = result[0];
                                para.nStep = 'subStart';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function (error) {
                            });
                            break;
                        case 'subStart':
                            if (para.i > para.refArr.length - 1) {
                                para.i = 0;
                                para.nStep = 'showSubModule';
                                dbFlag++;
                                break;
                            }

                            that.sm[para.refArr[para.i]].startModule(function () {
                                para.i++;
                                para.nStep = 'subStart';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            that.showSubModule(para.refArr, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'end':
                            para.successCallBack();
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },

            getTime: function (time) {
                var day = time.getDate();   // 得到这是这个月的第几天
                var year = time.getFullYear();   //得到这是第几年
                var month = time.getMonth() + 1;  // getMonth()获得的是0-11，所以要+1
                var hour = time.getHours();
                var minute = time.getMinutes();
                var second = time.getSeconds();

                return year + "-" + zero(month) + "-" + zero(day) + " "
                    + zero(hour) + ":" + zero(minute) + ":" + zero(second);

                function zero(value) {
                    return value < 10 ? "0" + value : value;
                }
            },


            activityApply: function () {
                this.ep.applyEvent(this.para.curActivityId, this.terActivityId, this.mac.activityManageType.applyManage);
                alert('跳转到报名管理页面')
            },

            activityCheck: function () {
                this.ep.checkEvent(this.para.curActivityId, this.terActivityId, this.mac.activityManageType.checkTicket);
                alert('跳转到验票签到页面')
            },

            activitySort: function () {
                this.ep.sortEvent(this.para.curActivityId, this.terActivityId, this.mac.activityManageType.applySort);
                alert('跳转到报名分组页面')
            },

            showActivityDetail: function () {
                this.ep.showDetailEvent(that.para.curActivityId, that.terActivityId, function () {
                }, function () {
                });
                alert('跳转到活动详情页面')
            },


            sortRef_buttonClickEvent: function () {
                this.activitySort();
            },
            applyBtnRef_buttonClickEvent: function () {
                this.activityApply();
            },
            checkRef_buttonClickEvent: function () {
                this.activityCheck();
            },
            infoContentRef_textClickEvent: function () {
                this.showActivityDetail();
            },
        }
    }
</script>

<style lang="scss">
    .activity-item-wrap {
        overflow: hidden;
        display: flex;
        padding: 20px 0;

        .activity-item-left {
            flex: 0 0 168px;
            width: 168px;
            height: 128px;
            margin-right: 20px;
        }

        .activity-item-right {
            flex: 1;

            .activity-item-title {
                overflow: hidden;
                margin-bottom: 10px;

                .link-status.link-text:focus, .link-status.link-text:hover {
                    border-bottom: none;
                }

                .link-text {
                    &:first-child {
                        float: left;
                    }

                    &:last-child {
                        float: right;
                    }
                }
            }

            .item-time {
                margin-bottom: 10px;
            }

            .item-place {
                margin-bottom: 26px;
            }

            .item-btns {
                overflow: hidden;

                .item-btns-left {
                    float: left;
                    line-height: 28px;

                    .link-text {
                        margin-right: 20px;
                    }
                }

                .item-btns-right {
                    float: right;
                    overflow: hidden;
                }

                .item-btns-right > div {
                    display: inline-block;
                    margin-right: 16px;

                    &:last-child {
                        margin-right: 0;
                    }

                    .lm-button {
                        .el-button--text {
                            color: #12B0FF;
                        }
                    }
                }
            }
        }
    }
</style>
