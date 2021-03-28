<template>
    <div class="list_header_container">
        <div class="list_header_row list_header_row_list_headerRow">
            <div :class="{list_header_col:true,list_header_col_list_headerWindow:true,list_header_col_list_headerWindow_size_large:attr.size==='large',list_header_col_list_headerWindow_size_medium:attr.size==='medium',list_header_col_list_headerWindow_size_small:attr.size==='small',list_header_col_list_headerWindow_size_min:attr.size==='min',list_header_col_list_headerWindow_checked:attr.checked,list_header_col_list_headerWindow_disable:attr.disabled}">

                <div class="list_header_row list_header_row_row1">
                    <div :class="{list_header_col:true,list_header_col_backBtn:true,list_header_col_backBtn_size_large:attr.size==='large',list_header_col_backBtn_size_medium:attr.size==='medium',list_header_col_backBtn_size_small:attr.size==='small',list_header_col_backBtn_size_min:attr.size==='min',list_header_col_backBtn_checked:attr.checked,list_header_col_backBtn_disable:attr.disabled}">

                        <lm2b-link-text
                                ref="backBtnRef"
                                refId="backBtnRef"
                                v-show="pvt_isShow.backBtn === 'backBtnRef'"
                                :paraVarPair="pvt_backBtn.backBtnRef.paraVarPair"
                                :para="pvt_backBtn.backBtnRef.para"
                                :attr="pvt_backBtn.backBtnRef.attr">
                        </lm2b-link-text>
                    </div>
                    <div :class="{list_header_col:true,list_header_col_title:true,list_header_col_title_size_large:attr.size==='large',list_header_col_title_size_medium:attr.size==='medium',list_header_col_title_size_small:attr.size==='small',list_header_col_title_size_min:attr.size==='min',list_header_col_title_checked:attr.checked,list_header_col_title_disable:attr.disabled}">

                        <lm2b-link-text
                                ref="titleRef"
                                refId="titleRef"
                                v-show="pvt_isShow.title === 'titleRef'"
                                :paraVarPair="pvt_title.titleRef.paraVarPair"
                                :para="pvt_title.titleRef.para"
                                :attr="pvt_title.titleRef.attr">
                        </lm2b-link-text>
                    </div>
                    <div :class="{list_header_col:true,list_header_col_menuWrap:true,list_header_col_menuWrap_size_large:attr.size==='large',list_header_col_menuWrap_size_medium:attr.size==='medium',list_header_col_menuWrap_size_small:attr.size==='small',list_header_col_menuWrap_size_min:attr.size==='min',list_header_col_menuWrap_checked:attr.checked,list_header_col_menuWrap_disable:attr.disabled}">
                        <lm2b-link-text
                                ref="draftBtnRef"
                                refId="draftBtnRef"
                                v-show="pvt_isShow.menuContent === 'draftBtnRef'"
                                :paraVarPair="pvt_menuContent.draftBtnRef.paraVarPair"
                                :para="pvt_menuContent.draftBtnRef.para"
                                :attr="pvt_menuContent.draftBtnRef.attr">
                        </lm2b-link-text>
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
                    vessel: ['menuContent', 'title', 'backBtn'],
                    subModule: ['draftBtnRef', 'titleRef', 'backBtnRef'],
                },
                pvt_isShow: {
                    menuContent: null,
                    title: null,
                    backBtn: null,
                },
                pvt_eventPortInput: ['backEvent', 'draftClickEvent'],

                mac: mac.mac,
                myType: 1,
                mySite: '',
                myID: 1,

                headData: {
                    title: '标题',
                    showMenu: true
                },

                approvalNum: 0,
                refundNum: 0,
                draftText: '草稿箱(11)'
            };
        },
        watch: {},
        computed: {
            pvt_menuContent: function () {
                return {
                    draftBtnRef: {
                        paraVarPair: {},
                        para: {
                            textData: this.draftText
                        },
                        attr: {
                            isClick: true,
                            fontSize: '14px',
                        },
                    }
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
                            textData: '返回',
                        },
                        attr: {
                            isClick: true,
                            fontSize: '14px',
                            icon: 'van-icon-arrow-left'
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
                let fnname = 'listHeader_start';
                let dbFlag;
                let dbData;
                let tableName;
                let portName;
                let inputData;
                let expression;
                let start;
                let total;
                let sort;
                let destGeneSite;
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
                            that.mySite = that.getCookie('userSite');
                            that.myId = that.getCookie('userID');
                            that.myType = that.getCookie('userType');

                            if (Object.prototype.toString.call(headData) === "[object Object]") {
                                this.headData = headData;
                            }
                            if (this.headData.showMenu) {
                                para.refArr.push('draftBtnRef');
                                para.nStep = 'getTotalNum';
                            } else {
                                para.nStep = 'start_sub';
                            }

                            that.forceUpdateData(function () {
                                if (++dbFlag === 2) {
                                    that.startModule(headData, successCallBack, errorCallBack)
                                }
                            });
                            break;
                        case 'getTotalNum':
                            expression = that.mac.fd.groupActivity.author + '=' + that.myId + '&&' + that.mac.fd.groupActivity.status + '=' + that.mac.enum.groupActivity.status.draft;
                            start = 0;
                            total = 10;
                            sort = ['id,asc'];
                            destGeneSite = '';
                            portName = this.mac.tb.groupActivity;
                            inputData = {
                                [this.mac.tb.groupActivity]: ['id'],
                            };
                            this.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                if (result) {
                                    that.draftText = '草稿箱(' + result.length + ')'
                                } else {
                                    that.draftText = '草稿箱'
                                }
                                para.nStep = 'start_sub';
                                that.forceUpdateData(function () {
                                    if (++dbFlag === 2) {
                                        that.startModule(headData, successCallBack, errorCallBack)
                                    }
                                });
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'start_sub':
                            if (para.i >= para.refArr.length) {
                                para.i = 0;
                                para.nStep = 'hideBtn';
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
                        case 'hideBtn':
                            that.showSubModule('draftBtnRef', false, function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(headData, successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
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

            dropdownRefresh: function (successCallBack, errorCallBack) {
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
                        case 'getTotalNum':
                            that.approvalNum = 0;
                            that.refundNum = 0;
                            that.popData = [
                                {text: '群发通知', icon: '', disable: ''},
                                {text: '关闭报名', icon: '', disable: ''}
                            ];

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
                                if (that.refundNum === 0) {
                                    that.popData.unshift({text: '退款处理', icon: '', disable: ''})
                                } else {
                                    that.popData.unshift({text: `退款处理(${that.refundNum})`, icon: '', disable: ''})
                                }

                                if (that.approvalNum === 0) {
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


            draftBtnClick: function () {
                this.ep.draftClickEvent()
            },
            backClick: function () {
                this.ep.backEvent();
            },

            getCookie: function (type) {
                if (type === 'userID') {
                    return 1;
                } else if (type === 'userSite') {
                    return {
                        geneAddr: {
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


            draftBtnRef_textClickEvent: function () {
                this.draftBtnClick();
            },
            backBtnRef_textClickEvent: function () {
                this.backClick();
            },
        },
    };
</script>
<style lang="less">
    @import "../../../../../assets/var_kzt";

    .list_header_container {
    }

    .list_header_row {
        display: flex;
        flex: 1;
    }

    .list_header_col {
        display: flex;
        flex-direction: column;
    }

    .list_header_col_list_headerWindow_size_medium {
        width: @manage_header-manage_headerWindow-medium-width;
        padding: @manage_header-manage_headerWindow-medium-padding;
        height: @manage_header-manage_headerWindow-medium-height;
    }

    .list_header_col_list_headerWindow_checked {
        border-style: @manage_header-manage_headerWindow-checked-border-style;
    }

    .list_header_col_list_headerWindow {
        border-style: @manage_header-manage_headerWindow-border-style;
        background-color: mix(@manage_header-manage_headerWindow-background-color, #fff, @manage_header-manage_headerWindow-background-color-opacity);
    }

    .list_header_col_backBtn_size_medium {
        width: @manage_header-backBtn-medium-width;
        align-items: @manage_header-backBtn-medium-horizontal-position;
        height: @manage_header-backBtn-medium-height;
        padding: @manage_header-backBtn-medium-padding;
    }

    .list_header_col_backBtn_size_large {
        align-items: @manage_header-backBtn-large-horizontal-position;
    }

    .list_header_col_backBtn_size_small {
        align-items: @manage_header-backBtn-small-horizontal-position;
    }

    .list_header_col_backBtn_size_min {
        align-items: @manage_header-backBtn-mini-horizontal-position;
    }

    .list_header_col_title_size_medium {
        width: @manage_header-title-medium-width;
        align-items: @manage_header-title-medium-horizontal-position;
        height: @manage_header-title-medium-height;
        overflow: hidden;
    }

    .list_header_col_menuWrap_size_medium {
        width: @manage_header-menuWrap-medium-width;
        align-items: @manage_header-menuWrap-medium-horizontal-position;
        height: @manage_header-menuWrap-medium-height;
        padding:  @manage_header-menuWrap-medium-padding;
    }

    .list_header_col_menuContent_size_medium {
        width: @manage_header-menuContent-medium-width;
        height: @manage_header-menuContent-medium-height;
        align-items: @manage_header-menuContent-medium-horizontal-position;
    }
</style>