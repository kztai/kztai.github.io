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
                    <div class="btns-left-draft" v-show="isDraft">
                        <lm-link-text
                                ref="saveTimeRef"
                                refId="saveTimeRef"
                                v-show="pvt_isShow.saveTime === 'saveTimeRef'"
                                :paraVarPair="pvt_saveTime.saveTimeRef.paraVarPair"
                                :para="pvt_saveTime.saveTimeRef.para"
                                :attr="pvt_saveTime.saveTimeRef.attr">
                        </lm-link-text>
                    </div>
                    <div class="btns-left-other" v-show="!isDraft">
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
                    <div class="btns-right-edit" v-if="initEdit">
                        <lm-button
                                ref="editRef"
                                refId="editRef"
                                v-show="pvt_isShow.edit === 'editRef'"
                                :paraVarPair="pvt_edit.editRef.paraVarPair"
                                :para="pvt_edit.editRef.para"
                                :attr="pvt_edit.editRef.attr">
                        </lm-button>
                    </div>
                    <div class="btns-right-del" v-if="initDel">
                        <lm-button
                                ref="delRef"
                                refId="delRef"
                                v-show="pvt_isShow.del === 'delRef'"
                                :paraVarPair="pvt_del.delRef.paraVarPair"
                                :para="pvt_del.delRef.para"
                                :attr="pvt_del.delRef.attr">
                        </lm-button>
                    </div>
                    <div class="btns-right-back" v-if="initBack">
                        <lm-button
                                ref="backRef"
                                refId="backRef"
                                v-show="pvt_isShow.back === 'backRef'"
                                :paraVarPair="pvt_back.backRef.paraVarPair"
                                :para="pvt_back.backRef.para"
                                :attr="pvt_back.backRef.attr">
                        </lm-button>
                    </div>
                    <div class="btns-right-close" v-if="initClose">
                        <lm-button
                                ref="closeRef"
                                refId="closeRef"
                                v-show="pvt_isShow.close === 'closeRef'"
                                :paraVarPair="pvt_close.closeRef.paraVarPair"
                                :para="pvt_close.closeRef.para"
                                :attr="pvt_close.closeRef.attr">
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
                    <div class="btns-right-photo" v-if="initPhoto">
                        <lm-button
                                ref="photoRef"
                                refId="photoRef"
                                v-show="pvt_isShow.photo === 'photoRef'"
                                :paraVarPair="pvt_photo.photoRef.paraVarPair"
                                :para="pvt_photo.photoRef.para"
                                :attr="pvt_photo.photoRef.attr">
                        </lm-button>
                    </div>
                    <div class="btns-right-more" v-if="initMore">
                        <lm-button
                                ref="moreRef"
                                refId="moreRef"
                                v-show="pvt_isShow.more === 'moreRef'"
                                :paraVarPair="pvt_more.moreRef.paraVarPair"
                                :para="pvt_more.moreRef.para"
                                :attr="pvt_more.moreRef.attr">
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
                createTimeText: '',
                browerNumber: 0,
                forwardNumber: 0,
                enrollNumber: 0,
                status: '',
                terActivityId: null,
                ticketFree: true,
                isDraft: false,

                initMore: true,
                initCheck: true,
                initApplyBtn: true,
                initClose: true,
                initBack: true,
                initDel: true,
                initEdit: true,
                initPhoto: true,

                mac: mac.mac,

                // 需要双向修改参数的场景，用户可直接修改以下模块参数同名的变量
                // selectedPara: this.para.selected,

                pvt_subModuleMap: {
                    subModule: ['posterRef', 'infoContentRef', 'infoTimeRef', 'infoPlaceRef', 'statusRef', 'browseRef', 'turnRef', 'applyRef', 'editRef', 'delRef', 'backRef', 'closeRef', 'applyBtnRef', 'checkRef', 'moreRef', 'saveTimeRef', 'photoRef'],
                    vessel: ['poster', 'infoContent', 'infoTime', 'infoPlace', 'status', 'browse', 'turn', 'apply', 'edit', 'del', 'back', 'close', 'applyBtn', 'check', 'more', 'saveTime', 'photo'],
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
                    edit: null,
                    del: null,
                    back: null,
                    close: null,
                    applyBtn: null,
                    check: null,
                    photo: null,
                    more: null,
                    saveTime: null,
                },

                // 当前模块输入类型的事务接口名称，工具完成前需要用户手动填写
                pvt_eventPortInput: ['editEvent', 'deleteEvent', 'applyEvent', 'checkEvent', 'backEvent', 'closeEvent', 'showDetailEvent', 'photoEvent'],
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

            pvt_saveTime: function () {
                return {
                    saveTimeRef: {
                        paraVarPair: {},
                        para: {
                            textData: this.createTimeText
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#909399',
                        }
                    }
                }
            },

            pvt_edit: function () {
                return {
                    editRef: {
                        paraVarPair: {},
                        para: {
                            name: ['编辑', 'el-icon-edit']
                        },
                        attr: {
                            type: 'text',
                            size: 'mini'
                        }
                    }
                }
            },
            pvt_del: function () {
                return {
                    delRef: {
                        paraVarPair: {},
                        para: {
                            name: ['删除', 'el-icon-delete']
                        },
                        attr: {
                            type: 'text',
                            size: 'mini'
                        }
                    }
                }
            },
            pvt_back: function () {
                return {
                    backRef: {
                        paraVarPair: {},
                        para: {
                            name: ['撤回', 'el-icon-d-arrow-left']
                        },
                        attr: {
                            type: 'text',
                            size: 'mini'
                        }
                    }
                }
            },
            pvt_close: function () {
                return {
                    closeRef: {
                        paraVarPair: {},
                        para: {
                            name: ['关闭', 'el-icon-close']
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
            pvt_photo: function () {
                return {
                    photoRef: {
                        paraVarPair: {},
                        para: {
                            name: ['图片', 'el-icon-edit']
                        },
                        attr: {
                            type: 'text',
                            size: 'mini'
                        }
                    }
                }
            },
            pvt_more: function () {
                return {
                    moreRef: {
                        paraVarPair: {},
                        para: {
                            name: ['更多功能', 'el-icon-menu']
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
                let fnname = 'codeCheck_start';
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

                // let refArr = ['infoContentRef', 'infoTimeRef', 'infoPlaceRef', 'statusRef', 'browseRef', 'turnRef', 'applyRef', 'editRef', 'delRef', 'backRef', 'closeRef', 'applyBtnRef', 'checkRef', 'moreRef'];
                // let refArr = ['posterRef', 'infoContentRef', 'infoTimeRef', 'infoPlaceRef', 'statusRef', 'browseRef', 'turnRef', 'applyRef', 'editRef', 'delRef', 'backRef', 'closeRef', 'applyBtnRef', 'checkRef', 'moreRef'];

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                            that.place = '';
                            that.enrollNumber = 0;
                            that.initMore = true;
                            that.initCheck = true;
                            that.initApplyBtn = true;
                            that.initClose = true;
                            that.initBack = true;
                            that.initDel = true;
                            that.initEdit = true;
                            that.initPhoto = true;
                            that.isDraft = false;
                            para.refArr = ['infoContentRef', 'infoTimeRef', 'infoPlaceRef', 'statusRef', 'browseRef', 'turnRef', 'applyRef', 'saveTimeRef'];

                            tableName = this.mac.tb.groupActivityTicketType;
                            condition = '';
                            dbData = {};
                            dbData[that.mac.fd.id] = [];
                            dbData[that.mac.fd.groupActivityTicketType.poll] = [];

                            that.sys.api.recordQuery(tableName, [that.para.curActivityId], condition, dbData, function () {
                                para.ticketTotalArr = JSON.parse(JSON.stringify(dbData[that.mac.fd.groupActivityTicketType.poll]));
                                para.nStep = 'isFree';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'isFree':
                            tableName = this.mac.tb.groupActivityTicketType;
                            condition = this.mac.fd.groupActivityTicketType.price + '>0';
                            dbData = {};
                            dbData[that.mac.fd.id] = [];

                            that.sys.api.recordQuery(tableName, [that.para.curActivityId], condition, dbData, function () {
                                if (dbData[that.mac.fd.id].length > 0) {
                                    that.ticketFree = false;
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
                                let curTime = that.getTime(new Date());

                                that.time = '时间：' + dbData[that.mac.fd.groupActivity.startTime][0];
                                that.place += '地点：';
                                for (let i = 0; i < dbData[that.mac.fd.groupActivity.place][0].name.length; i++) {
                                    that.place += dbData[that.mac.fd.groupActivity.place][0].name[i];
                                }
                                that.place += dbData[that.mac.fd.groupActivity.place][0].place;
                                that.createTimeText = dbData[that.mac.fd.groupActivity.createTime][0] + ' 保存';
                                that.browerNumber = dbData[that.mac.fd.groupActivity.browerNumber][0];
                                that.forwardNumber = dbData[that.mac.fd.groupActivity.forwardNumber][0];
                                for (let i = 0; i < dbData[that.mac.fd.groupActivity.enrollNumber][0].length; i++) {
                                    that.enrollNumber += dbData[that.mac.fd.groupActivity.enrollNumber][0][i];
                                    if (dbData[that.mac.fd.groupActivity.enrollNumber][0][i] < para.ticketTotalArr[i]) {
                                        para.ticketEmpty = false;
                                    }
                                }

                                // 判断页面显示的活动状态：
                                switch (dbData[that.mac.fd.groupActivity.status][0]) {
                                    case that.mac.enum.groupActivity.status.draft:
                                        that.status = '';
                                        that.isDraft = true;
                                        break;
                                    case that.mac.enum.groupActivity.status.check:
                                        that.status = '待审核';
                                        break;
                                    case that.mac.enum.groupActivity.status.rejected:
                                        that.status = '审核未通过';
                                        break;
                                    case that.mac.enum.groupActivity.status.closed:
                                        that.status = '已关闭';
                                        break;
                                    case that.mac.enum.groupActivity.status.released:
                                        if (curTime < dbData[that.mac.fd.groupActivity.startTime][0]) {
                                            that.status = '未开始';
                                        } else if (curTime > dbData[that.mac.fd.groupActivity.endTime][0]) {
                                            that.status = '已结束';
                                        } else if (para.ticketEmpty) {
                                            that.status = '已售罄';
                                        } else if (curTime > dbData[that.mac.fd.groupActivity.startTime][0] && curTime < dbData[that.mac.fd.groupActivity.endTime][0]) {
                                            that.status = '进行中';
                                        }
                                        break;
                                }

                                // 根据页面显示的活动状态，判断应该显示什么操作按钮：
                                switch (that.status) {
                                    case '':
                                        para.refArr.push('editRef', 'delRef');
                                        that.initCheck = false;
                                        that.initApplyBtn = false;
                                        that.initClose = false;
                                        that.initBack = false;
                                        that.initMore = false;
                                        that.initPhoto = false;
                                        break;
                                    case '待审核':
                                        para.refArr.push('moreRef', 'backRef');
                                        that.initCheck = false;
                                        that.initApplyBtn = false;
                                        that.initClose = false;
                                        that.initDel = false;
                                        that.initEdit = false;
                                        that.initPhoto = false;
                                        break;
                                    case '审核未通过':
                                        para.refArr.push('moreRef', 'editRef', 'delRef');
                                        that.initCheck = false;
                                        that.initApplyBtn = false;
                                        that.initClose = false;
                                        that.initBack = false;
                                        that.initPhoto = false;
                                        break;
                                    case '已关闭':
                                        para.refArr.push('moreRef', 'applyBtnRef');
                                        that.initCheck = false;
                                        that.initClose = false;
                                        that.initBack = false;
                                        that.initDel = false;
                                        that.initEdit = false;
                                        that.initPhoto = false;
                                        break;
                                    case '未开始':
                                        para.refArr.push('moreRef', 'closeRef');
                                        that.initApplyBtn = false;
                                        that.initCheck = false;
                                        that.initBack = false;
                                        that.initDel = false;
                                        that.initEdit = false;
                                        that.initPhoto = false;
                                        break;
                                    case '已结束':
                                        para.refArr.push('moreRef', 'applyBtnRef', 'photoRef');
                                        that.initCheck = false;
                                        that.initClose = false;
                                        that.initBack = false;
                                        that.initDel = false;
                                        that.initEdit = false;
                                        break;
                                    case '已售罄':
                                        para.refArr.push('moreRef', 'closeRef', 'checkRef', 'applyBtnRef', 'photoRef');
                                        that.initBack = false;
                                        that.initDel = false;
                                        that.initEdit = false;
                                        break;
                                    case '进行中':
                                        para.refArr.push('moreRef', 'applyBtnRef', 'closeRef', 'checkRef', 'photoRef');
                                        that.initBack = false;
                                        that.initDel = false;
                                        that.initEdit = false;
                                        break;
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

            getCodeValue: function (value) {
                this.codeValue = value;
            },

            checkTicketWrap: function () {
                if (navigator.onLine) {
                    this.checkTicket(function () {
                    }, function () {
                    })
                } else {
                    this.$message.warning('出错了！请稍后再试。');
                }
            },

            checkTicket: function (successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'codeCheck_checkTicket';
                let dbFlag;
                let dbData;
                let tableName;
                let record;
                let page;
                let condition;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
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
                            if (this.codeValue === '') {
                                that.$message.warning('请输入报名码');
                                para.nStep = 'end';
                            } else {
                                para.nStep = 'inputOrder';
                            }
                            dbFlag++;
                            break;
                        case 'inputOrder':
                            let expression = this.mac.fd.groupActivityOrder.groupActivityID + '=' + this.para.activityId;
                            let start = null;
                            let total = null;
                            let sort = ['id,asc'];
                            let destGeneSite = '';
                            let portName = this.mac.tb.groupActivityOrder;
                            let inputData = null;
                            this.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                that.curOrderIdArr = JSON.parse(JSON.stringify(result));
                                para.nStep = 'isLegal';
                                if (++dbFlag === 2) {
                                    that.checkTicket(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'isLegal':
                            tableName = this.mac.tb.groupActivityBill;
                            condition = this.mac.fd.groupActivityBill.code + '=' + this.codeValue + '&&' + this.mac.fd.groupActivityBill.status + '=' + this.mac.enum.groupActivityBill.status.checkTicket;
                            dbData = {};
                            dbData[that.mac.fd.id] = [];
                            this.sys.api.recordQuery(tableName, null, condition, dbData, function (result) {
                                if (dbData[that.mac.fd.id].length > 0) {
                                    para.curApplyId = dbData[that.mac.fd.id][0];
                                    para.nStep = 'getParentId';
                                } else {
                                    that.$message.error('此报名码无效！');
                                    para.nStep = 'end';
                                }

                                if (++dbFlag === 2) {
                                    that.checkTicket(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'getParentId':
                            tableName = this.mac.tb.groupActivityBill;
                            record = [para.curApplyId];
                            that.sys.api.getSourceRecord(tableName, record, function (result) {
                                that.ep.ticketPassIn(result[0], function () {
                                }, function () {
                                });
                                para.nStep = 'modifyData';
                                if (++dbFlag === 2) {
                                    that.checkTicket(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'modifyData':
                            tableName = this.mac.tb.groupActivityBill;
                            dbData = {};
                            dbData[that.mac.fd.id] = [para.curApplyId];
                            dbData[this.mac.fd.groupActivityBill.status] = [this.mac.enum.groupActivityBill.status.finish];
                            that.sys.api.recordModify(tableName, dbData, function (result) {
                                that.$message.success('验票成功！');
                                that.codeValue = '';
                                para.nStep = 'refresh';
                                if (++dbFlag === 2) {
                                    that.checkTicket(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'refresh':
                            that.forceUpdateData(function () {
                                that.sm.inputRef.startModule(function () {
                                    para.nStep = 'end';
                                    if (++dbFlag === 2) {
                                        that.checkTicket(successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
                            });
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


            activityDel: function () {
                var that = this;
                this.$confirm('活动删除后将无法恢复, 您确定要这样做吗?', '温馨提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    that.ep.deleteEvent(that.para.curActivityId, that.terActivityId)
                }).catch(() => {
                });
            },
            activityBack: function () {
                var that = this;

                this.$confirm('活动撤回后将变为草稿状态不再发布, 您确定要这样做吗?', '温馨提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    var tableName = that.mac.tb.groupActivity;
                    var dbData = {};
                    dbData[that.mac.fd.id] = [that.para.curActivityId];
                    dbData[that.mac.fd.groupActivity.status] = [that.mac.enum.groupActivity.status.draft];

                    that.sys.api.recordModify(tableName, dbData, function () {
                        that.ep.backEvent(that.para.curActivityId, that.terActivityId);
                    }, function (error) {
                    });
                }).catch(() => {
                });
            },

            activityCloseWrap: function () {
                var that = this;
                that.activityClose(function () {
                }, function () {
                })
            },
            activityClose: function (successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'activityItem_activityClose';
                let dbFlag;
                let dbData;
                let tableName;
                let record;
                let condition;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
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
                            if (that.status === '未开始') {
                                this.$confirm('活动关闭后将无法恢复, 您确定要这样做吗?', '温馨提示', {
                                    confirmButtonText: '确定',
                                    cancelButtonText: '取消',
                                    type: 'warning'
                                }).then(() => {
                                    para.nStep = 'statusModify';
                                    if (++dbFlag === 2) {
                                        that.activityClose(successCallBack, errorCallBack)
                                    }
                                }).catch(() => {
                                    para.nStep = 'end';
                                    if (++dbFlag === 2) {
                                        that.activityClose(successCallBack, errorCallBack)
                                    }
                                });

                            } else {
                                if (that.ticketFree) {
                                    this.$confirm('活动关闭后将无法恢复, 您确定要这样做吗?', '温馨提示', {
                                        confirmButtonText: '确定',
                                        cancelButtonText: '取消',
                                        type: 'warning'
                                    }).then(() => {
                                        para.nStep = 'statusModify';
                                        if (++dbFlag === 2) {
                                            that.activityClose(successCallBack, errorCallBack)
                                        }
                                    }).catch(() => {
                                        para.nStep = 'end';
                                        if (++dbFlag === 2) {
                                            that.activityClose(successCallBack, errorCallBack)
                                        }
                                    });
                                } else {
                                    this.$confirm('活动关闭后将无法恢复，且可能产生退款，您确定要这样做吗?', '温馨提示', {
                                        confirmButtonText: '确定',
                                        cancelButtonText: '取消',
                                        type: 'warning'
                                    }).then(() => {
                                        para.nStep = 'statusModify';
                                        if (++dbFlag === 2) {
                                            that.activityClose(successCallBack, errorCallBack)
                                        }
                                    }).catch(() => {
                                        para.nStep = 'end';
                                        if (++dbFlag === 2) {
                                            that.activityClose(successCallBack, errorCallBack)
                                        }
                                    });
                                }
                            }
                            break;
                        case 'statusModify':
                            tableName = that.mac.tb.groupActivity;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.para.curActivityId];
                            dbData[that.mac.fd.groupActivity.status] = [that.mac.enum.groupActivity.status.closed];

                            that.sys.api.recordModify(tableName, dbData, function () {
                                that.ep.closeEvent(that.para.curActivityId, that.terActivityId);
                                that.$message.success('活动关闭成功！');
                                // para.nStep = 'end';
                                // if (++dbFlag === 2) {
                                //     that.activityClose(successCallBack, errorCallBack)
                                // }
                                that.startModule(function () {
                                    para.nStep = 'end';
                                    if (++dbFlag === 2) {
                                        that.activityClose(successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
                            }, function (error) {
                            });
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

            activityEdit: function () {
                this.ep.editEvent(this.para.curActivityId, this.terActivityId);
                alert('跳转活动编辑页面')
            },

            activityApply: function () {
                this.ep.applyEvent(this.para.curActivityId, this.terActivityId, this.mac.activityManageType.applyManage);
                alert('跳转到报名管理页面')
            },

            activityCheck: function () {
                this.ep.checkEvent(this.para.curActivityId, this.terActivityId, this.mac.activityManageType.checkTicket);
                alert('跳转到验票签到页面')
            },
            activityPhoto: function () {
                this.ep.photoEvent(this.para.curActivityId, this.terActivityId, this.mac.activityManageType.allSummary);
                alert('跳转到上传图片页面')
            },

            activityMore: function () {
            },

            showActivityDetail: function () {
                this.ep.showDetailEvent(that.para.curActivityId, that.terActivityId, function () {
                }, function () {
                })
                alert('跳转到活动详情页面')
            },


            editRef_buttonClickEvent: function () {
                this.activityEdit();
            },
            delRef_buttonClickEvent: function () {
                this.activityDel();
            },
            backRef_buttonClickEvent: function () {
                this.activityBack();
            },
            closeRef_buttonClickEvent: function () {
                this.activityCloseWrap();
            },
            applyBtnRef_buttonClickEvent: function () {
                this.activityApply();
            },
            checkRef_buttonClickEvent: function () {
                this.activityCheck();
            },
            photoRef_buttonClickEvent: function () {
                this.activityPhoto();
            },
            moreRef_buttonClickEvent: function () {
                this.activityMore();
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
