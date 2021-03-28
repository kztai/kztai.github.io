<template>
    <div class="manage_header_container">
        <div class="manage_header_row manage_header_row_manage_headerRow">
            <div :class="{manage_header_col:true,manage_header_col_manage_headerWindow:true,manage_header_col_manage_headerWindow_size_large:attr.size==='large',manage_header_col_manage_headerWindow_size_medium:attr.size==='medium',manage_header_col_manage_headerWindow_size_small:attr.size==='small',manage_header_col_manage_headerWindow_size_min:attr.size==='min',manage_header_col_manage_headerWindow_checked:attr.checked,manage_header_col_manage_headerWindow_disable:attr.disabled}">

                <div class="manage_header_row manage_header_row_row1">
                    <div :class="{manage_header_col:true,manage_header_col_backBtn:true,manage_header_col_backBtn_size_large:attr.size==='large',manage_header_col_backBtn_size_medium:attr.size==='medium',manage_header_col_backBtn_size_small:attr.size==='small',manage_header_col_backBtn_size_min:attr.size==='min',manage_header_col_backBtn_checked:attr.checked,manage_header_col_backBtn_disable:attr.disabled}">

                        <lm2b-button
                                ref="backBtnRef"
                                refId="backBtnRef"
                                v-show="pvt_isShow.backBtn === 'backBtnRef'"
                                :paraVarPair="pvt_backBtn.backBtnRef.paraVarPair"
                                :para="pvt_backBtn.backBtnRef.para"
                                :attr="pvt_backBtn.backBtnRef.attr">
                        </lm2b-button>
                    </div>
                    <div :class="{manage_header_col:true,manage_header_col_title:true,manage_header_col_title_size_large:attr.size==='large',manage_header_col_title_size_medium:attr.size==='medium',manage_header_col_title_size_small:attr.size==='small',manage_header_col_title_size_min:attr.size==='min',manage_header_col_title_checked:attr.checked,manage_header_col_title_disable:attr.disabled}">

                        <lm2b-link-text
                                ref="titleRef"
                                refId="titleRef"
                                v-show="pvt_isShow.title === 'titleRef'"
                                :paraVarPair="pvt_title.titleRef.paraVarPair"
                                :para="pvt_title.titleRef.para"
                                :attr="pvt_title.titleRef.attr">
                        </lm2b-link-text>
                    </div>
                    <div :class="{manage_header_col:true,manage_header_col_menuWrap:true,manage_header_col_menuWrap_size_large:attr.size==='large',manage_header_col_menuWrap_size_medium:attr.size==='medium',manage_header_col_menuWrap_size_small:attr.size==='small',manage_header_col_menuWrap_size_min:attr.size==='min',manage_header_col_menuWrap_checked:attr.checked,manage_header_col_menuWrap_disable:attr.disabled}">

                        <div class="manage_header_row manage_header_row_row2">
                            <div :class="{manage_header_col:true,manage_header_col_menuContent:true,manage_header_col_menuContent_size_large:attr.size==='large',manage_header_col_menuContent_size_medium:attr.size==='medium',manage_header_col_menuContent_size_small:attr.size==='small',manage_header_col_menuContent_size_min:attr.size==='min',manage_header_col_menuContent_checked:attr.checked,manage_header_col_menuContent_disable:attr.disabled}">

                                <lm2b-button
                                        ref="downBtnRef"
                                        refId="downBtnRef"
                                        v-show="pvt_isShow.menuContent === 'downBtnRef'"
                                        :paraVarPair="pvt_menuContent.downBtnRef.paraVarPair"
                                        :para="pvt_menuContent.downBtnRef.para"
                                        :attr="pvt_menuContent.downBtnRef.attr">
                                </lm2b-button>
                                <lm2b-button
                                        ref="checkBtnRef"
                                        refId="checkBtnRef"
                                        v-show="pvt_isShow.menuContent === 'checkBtnRef'"
                                        :paraVarPair="pvt_menuContent.checkBtnRef.paraVarPair"
                                        :para="pvt_menuContent.checkBtnRef.para"
                                        :attr="pvt_menuContent.checkBtnRef.attr">
                                </lm2b-button>
                            </div>
                        </div>
                        <div class="manage_header_row manage_header_row_row3">
                            <div :class="{manage_header_col:true,manage_header_col_menuBadge:true,manage_header_col_menuBadge_size_large:attr.size==='large',manage_header_col_menuBadge_size_medium:attr.size==='medium',manage_header_col_menuBadge_size_small:attr.size==='small',manage_header_col_menuBadge_size_min:attr.size==='min',manage_header_col_menuBadge_checked:attr.checked,manage_header_col_menuBadge_disable:attr.disabled}">

                                <lm2b-badge
                                        ref="menuBadgeRef"
                                        refId="menuBadgeRef"
                                        v-show="pvt_isShow.menuBadge === 'menuBadgeRef'"
                                        :paraVarPair="pvt_menuBadge.menuBadgeRef.paraVarPair"
                                        :para="pvt_menuBadge.menuBadgeRef.para"
                                        :attr="pvt_menuBadge.menuBadgeRef.attr">
                                </lm2b-badge>
                            </div>
                        </div>
                        <div class="manage_header_row manage_header_row_row4">
                            <div :class="{manage_header_col:true,manage_header_col_menuPop:true,manage_header_col_menuPop_size_large:attr.size==='large',manage_header_col_menuPop_size_medium:attr.size==='medium',manage_header_col_menuPop_size_small:attr.size==='small',manage_header_col_menuPop_size_min:attr.size==='min',manage_header_col_menuPop_checked:attr.checked,manage_header_col_menuPop_disable:attr.disabled}">

                                <lm2b-popup-menu
                                        ref="popRef"
                                        refId="popRef"
                                        v-show="pvt_isShow.menuPop === 'popRef'"
                                        :paraVarPair="pvt_menuPop.popRef.paraVarPair"
                                        :para="pvt_menuPop.popRef.para"
                                        :attr="pvt_menuPop.popRef.attr">
                                </lm2b-popup-menu>
                            </div>
                        </div>
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
        inject: ['sys'],
        props: ['refId', 'para', 'attr', 'number'],
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ['menuBadge', 'menuContent', 'menuPop', 'title', 'backBtn', 'menuContent'],
                    subModule: ['menuBadgeRef', 'downBtnRef', 'popRef', 'titleRef', 'backBtnRef', 'checkBtnRef'],
                },
                pvt_isShow: {
                    menuBadge: null,
                    menuContent: null,
                    menuPop: null,
                    title: null,
                    backBtn: null,
                },
                pvt_eventPortInput: ['backEvent', 'moduleChangeEvent','checkClickEvent', 'enrollChannelChange'],

                mac: mac.mac,
                headData: {
                    title: '标题',
                    badgeNum: 0,
                    reference: {x: 0, y: 0, w: '30px', h: '20px'},
                    showMenu: true
                },
                popData: [],
                approvalNum: 0,
                refundNum: 0,
                checkDisable: false
            };
        },
        watch: {},
        computed: {
            pvt_menuBadge: function () {
                return {
                    menuBadgeRef: {
                        paraVarPair: {
                            logoValue: 'badgeNum',
                        },
                        para: {
                            logoValue: this.headData.badgeNum,
                        },
                        attr: {
                            type: 'warning',
                        },
                    },
                };
            },
            pvt_menuContent: function () {
                return {
                    downBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['', 'van-icon-wap-nav'],
                        },
                        attr: {
                            type: 'text',
                            height: '22px',
                        },
                    },
                    checkBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['验票', 'van-icon-scan'],
                        },
                        attr: {
                            type: 'text',
                            height: '22px',
                            disabled: this.checkDisable
                        },
                    },
                };
            },
            pvt_menuPop: function () {
                return {
                    popRef: {
                        paraVarPair: {},
                        para: {
                            popup: this.popData,
                        },
                        attr: {
                            reference: this.headData.reference,
                            placement: 'bottom',
                            // overlay: false
                        },
                    },
                };
            },
            pvt_title: function () {
                return {
                    titleRef: {
                        paraVarPair: {
                            textData: 'titleName',
                        },
                        para: {
                            textData: this.headData.title,
                        },
                        attr: {
                            textAlign: 'center',
                            fontWeight: true,
                            color: '#333',
                            fontSize: '18px',
                            ellipsis: true,
                            label: 'div',
                        },
                    },
                };
            },
            pvt_backBtn: function () {
                return {
                    backBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['返回', 'van-icon-arrow-left'],
                        },
                        attr: {
                            type: 'text',
                            height: '22px',
                        },
                    },
                };
            },
        },
        created: function () {
            Object.assign(this, libSys, libUpload);
        },
        mounted: function () {
            this.pvt_initSysData();
        },
        methods: {
            startModule: function (headData, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'header_start';
                let dbFlag;
                let dbData;
                let tableName;
                let condition;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0,
                    refArr: ['titleRef', 'backBtnRef']
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
                            if (Object.prototype.toString.call(headData) === "[object Object]") {
                                this.headData = headData;
                            }
                            if (this.headData.showMenu) {
                                if (this.headData.reference) {
                                    para.refArr.push('downBtnRef');
                                } else {
                                    para.refArr.push('checkBtnRef');
                                }
                            }

                            switch (this.headData.clerkType) {
                                case '在线客服':
                                    that.checkDisable = true;
                                    break;
                                default:
                                    that.checkDisable = false;
                                    break;
                            }

                            that.forceUpdateData(function () {
                                para.nStep = 'start_sub';
                                if (++dbFlag === 2) {
                                    that.startModule(headData, successCallBack, errorCallBack)
                                }
                            });
                            break;
                        case 'start_sub':
                            if (para.i >= para.refArr.length) {
                                para.i = 0;
                                para.nStep = 'showSubModule';
                                dbFlag++;
                                break;
                            }
                            that.sm[para.refArr[para.i]].startModule(function () {
                                para.i++;
                                para.nStep = 'start_sub';
                                if (++dbFlag === 2) {
                                    that.startModule(headData, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            that.showSubModule(para.refArr, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.startModule(headData, successCallBack, errorCallBack)
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

            dropdownRefresh: function(successCallBack,errorCallBack) {
                let that = this;
                let fnname = 'header_dropdownRefresh';
                let dbFlag;
                let dbData;
                let tableName;
                let condition;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0,
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
                            that.approvalNum = 0;
                            that.refundNum = 0;
                            that.popData = [
                                {text: '群发通知', icon: '', disable: ''}
                            ];

                            tableName = this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[that.mac.fd.id] = [this.headData.curActivityId];
                            dbData[that.mac.fd.groupActivity.openEnrollChannel] = [];
                            this.sys.api.recordRead(tableName, dbData, function (result) {
                                if(dbData[that.mac.fd.groupActivity.openEnrollChannel][0] === that.mac.enum.groupActivity.openEnrollChannel.type.yes) {
                                    that.openEnrollChannel = true;
                                    that.popData.push({text: '关闭报名', icon: '', disable: ''});
                                } else {
                                    that.openEnrollChannel = false;
                                    that.popData.push({text: '开启报名', icon: '', disable: ''});
                                }

                                para.nStep = 'getTotalNum';
                                if (++dbFlag === 2) {
                                    that.dropdownRefresh(successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'getTotalNum':
                            tableName = this.mac.tb.groupActivityBill;
                            condition = that.mac.fd.groupActivityBill.status + '=' + that.mac.enum.groupActivityBill.status.check + '||' + that.mac.fd.groupActivityBill.status + '=' + that.mac.enum.groupActivityBill.status.refund;
                            dbData = {};
                            dbData[that.mac.fd.groupActivityBill.status] = [];
                            this.sys.api.recordQuery(tableName, null, condition, dbData, function (result) {
                                for (let i = 0; i < dbData[that.mac.fd.groupActivityBill.status].length; i++) {
                                    if (dbData[that.mac.fd.groupActivityBill.status][i] === that.mac.enum.groupActivityBill.status.check) {
                                        that.approvalNum++;
                                    } else {
                                        that.refundNum++;
                                    }
                                }

                                // 判断退款数，审批数是否为0：
                                if(that.refundNum === 0) {
                                    that.popData.unshift({text: '退款处理', icon: '', disable: ''})
                                } else {
                                    that.popData.unshift({text: `退款处理(${that.refundNum})`, icon: '', disable: ''})
                                }

                                if(that.approvalNum === 0) {
                                    that.popData.unshift({text: '名单审核', icon: '', disable: ''})
                                } else {
                                    that.popData.unshift({text: `名单审核(${that.approvalNum})`, icon: '', disable: ''})
                                }

                                para.nStep = 'start_pop';
                                if (++dbFlag === 2) {
                                    that.dropdownRefresh(successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'start_pop':
                            that.forceUpdateData(function () {
                                that.sm.popRef.startModule(function () {
                                    para.nStep = 'end';
                                    if (++dbFlag === 2) {
                                        that.dropdownRefresh(successCallBack, errorCallBack)
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

            checkBtnClick: function () {
                this.ep.checkClickEvent()
            },
            downBtnClick: function () {
                let that = this;
                that.showSubModule('popRef', true, function () {
                    that.dropdownRefresh(function () {
                        
                    }, function () {
                        
                    })
                }, function () {
                });
            },
            menuSelect: function (index) {
                // 0:名单审核，1:退款处理；2.群发通知；3.关闭报名
                let that = this;
                if(index===3) {
                    let tableName = this.mac.tb.groupActivity;
                    var data = {};
                    data.id = [this.headData.curActivityId];
                    data[this.mac.fd.groupActivity.openEnrollChannel] = [];
                    that.openEnrollChannel ? data[this.mac.fd.groupActivity.openEnrollChannel].push(that.mac.enum.groupActivity.openEnrollChannel.type.no) : data[this.mac.fd.groupActivity.openEnrollChannel].push(that.mac.enum.groupActivity.openEnrollChannel.type.yes);
                    this.sys.api.recordModify(tableName, data, function (result) {
                        that.sys.api.getSourceRecord(tableName, data.id, function (result) {
                            that.ep.enrollChannelChange(result[0], data[that.mac.fd.groupActivity.openEnrollChannel][0]);
                        }, function () {
                        });
                    }, function (error) {
                    });
                } else {
                    this.ep.moduleChangeEvent(index);
                }
            },
            backClick: function () {
                this.ep.backEvent();
            },
            downBtnRef_buttonClickEvent: function () {
                this.downBtnClick();
            },
            popRef_clickEvent: function (index) {
                this.menuSelect(index);
            },
            backBtnRef_buttonClickEvent: function () {
                this.backClick();
            },
            checkBtnRef_buttonClickEvent: function () {
                this.checkBtnClick();
            },
        },
    };
</script>
<style lang="less">
    @import "../../../../assets/var_kzt";

    .manage_header_container {
    }

    .manage_header_row {
        display: flex;
        flex: 1;
    }

    .manage_header_col {
        display: flex;
        flex-direction: column;
    }

    .manage_header_col_manage_headerWindow_size_medium {
        width: @manage_header-manage_headerWindow-medium-width;
        padding: @manage_header-manage_headerWindow-medium-padding;
        height: @manage_header-manage_headerWindow-medium-height;
    }

    .manage_header_col_manage_headerWindow_checked {
        border-style: @manage_header-manage_headerWindow-checked-border-style;
    }

    .manage_header_col_manage_headerWindow {
        border-style: @manage_header-manage_headerWindow-border-style;
        background-color: mix(@manage_header-manage_headerWindow-background-color, #fff, @manage_header-manage_headerWindow-background-color-opacity);
    }

    .manage_header_col_backBtn_size_medium {
        width: @manage_header-backBtn-medium-width;
        align-items: @manage_header-backBtn-medium-horizontal-position;
        height: @manage_header-backBtn-medium-height;
    }

    .manage_header_col_backBtn_size_large {
        align-items: @manage_header-backBtn-large-horizontal-position;
    }

    .manage_header_col_backBtn_size_small {
        align-items: @manage_header-backBtn-small-horizontal-position;
    }

    .manage_header_col_backBtn_size_min {
        align-items: @manage_header-backBtn-mini-horizontal-position;
    }

    .manage_header_col_title_size_medium {
        width: @manage_header-title-medium-width;
        align-items: @manage_header-title-medium-horizontal-position;
        height: @manage_header-title-medium-height;
        overflow: hidden;
    }

    .manage_header_col_menuWrap_size_medium {
        width: @manage_header-menuWrap-medium-width;
        align-items: @manage_header-menuWrap-medium-horizontal-position;
        height: @manage_header-menuWrap-medium-height;
    }

    .manage_header_col_menuContent_size_medium {
        width: @manage_header-menuContent-medium-width;
        height: @manage_header-menuContent-medium-height;
        align-items: @manage_header-menuContent-medium-horizontal-position;
    }

    .manage_header_col_menuBadge_size_medium {
        width: @manage_header-menuBadge-medium-width;
        justify-content: @manage_header-menuBadge-medium-vertical-position;
        align-items: @manage_header-menuBadge-medium-horizontal-position;
    }

    .manage_header_col_menuPop_size_medium {
        width: @manage_header-menuPop-medium-width;

        .van-overlay {
            background-color: rgba(0, 0, 0, 0.2);
        }
    }
</style>