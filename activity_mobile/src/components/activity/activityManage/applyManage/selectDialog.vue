<template>
    <div class="selectDialog_container">
        <div class="selectDialog_row selectDialog_row_selectDialogRow">
            <div :class="{selectDialog_col:true,selectDialog_col_selectDialogWindow:true,selectDialog_col_selectDialogWindow_size_large:attr.size==='large',selectDialog_col_selectDialogWindow_size_medium:attr.size==='medium',selectDialog_col_selectDialogWindow_size_small:attr.size==='small',selectDialog_col_selectDialogWindow_size_min:attr.size==='min',selectDialog_col_selectDialogWindow_checked:attr.checked,selectDialog_col_selectDialogWindow_disable:attr.disabled}">

                <div class="selectDialog_row selectDialog_row_row1">
                    <div :class="{selectDialog_col:true,selectDialog_col_title:true,selectDialog_col_title_size_large:attr.size==='large',selectDialog_col_title_size_medium:attr.size==='medium',selectDialog_col_title_size_small:attr.size==='small',selectDialog_col_title_size_min:attr.size==='min',selectDialog_col_title_checked:attr.checked,selectDialog_col_title_disable:attr.disabled}">

                        <lm2b-link-text
                                ref="titleRef"
                                refId="titleRef"
                                v-show="pvt_isShow.title === 'titleRef'"
                                :paraVarPair="pvt_title.titleRef.paraVarPair"
                                :para="pvt_title.titleRef.para"
                                :attr="pvt_title.titleRef.attr">
                        </lm2b-link-text>
                    </div>
                </div>
                <div class="selectDialog_row selectDialog_row_row2">
                    <div :class="{selectDialog_col:true,selectDialog_col_statusWrap:true,selectDialog_col_statusWrap_size_large:attr.size==='large',selectDialog_col_statusWrap_size_medium:attr.size==='medium',selectDialog_col_statusWrap_size_small:attr.size==='small',selectDialog_col_statusWrap_size_min:attr.size==='min',selectDialog_col_statusWrap_checked:attr.checked,selectDialog_col_statusWrap_disable:attr.disabled}">

                        <div class="selectDialog_row selectDialog_row_row3">
                            <div :class="{selectDialog_col:true,selectDialog_col_statusTitle:true,selectDialog_col_statusTitle_size_large:attr.size==='large',selectDialog_col_statusTitle_size_medium:attr.size==='medium',selectDialog_col_statusTitle_size_small:attr.size==='small',selectDialog_col_statusTitle_size_min:attr.size==='min',selectDialog_col_statusTitle_checked:attr.checked,selectDialog_col_statusTitle_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="statusTitleRef"
                                        refId="statusTitleRef"
                                        v-show="pvt_isShow.statusTitle === 'statusTitleRef'"
                                        :paraVarPair="pvt_statusTitle.statusTitleRef.paraVarPair"
                                        :para="pvt_statusTitle.statusTitleRef.para"
                                        :attr="pvt_statusTitle.statusTitleRef.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                        <div class="selectDialog_row selectDialog_row_row4">
                            <div :class="{selectDialog_col:true,selectDialog_col_statusList:true,selectDialog_col_statusList_size_large:attr.size==='large',selectDialog_col_statusList_size_medium:attr.size==='medium',selectDialog_col_statusList_size_small:attr.size==='small',selectDialog_col_statusList_size_min:attr.size==='min',selectDialog_col_statusList_checked:attr.checked,selectDialog_col_statusList_disable:attr.disabled}">
                                <select-button1
                                        ref="selectBtnRef"
                                        refId="selectBtnRef"
                                        v-show="pvt_isShow.statusList === 'selectBtnRef'"
                                        :paraVarPair="pvt_statusList.selectBtnRef.paraVarPair"
                                        v-for="(item, index) in pvt_statusList.selectBtnRef.forData"
                                        :number="index"
                                        :para="item.para"
                                        :attr="item.attr">
                                </select-button1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="selectDialog_row selectDialog_row_row5">
                    <div :class="{selectDialog_col:true,selectDialog_col_ticketTitle:true,selectDialog_col_ticketTitle_size_large:attr.size==='large',selectDialog_col_ticketTitle_size_medium:attr.size==='medium',selectDialog_col_ticketTitle_size_small:attr.size==='small',selectDialog_col_ticketTitle_size_min:attr.size==='min',selectDialog_col_ticketTitle_checked:attr.checked,selectDialog_col_ticketTitle_disable:attr.disabled}">

                        <div class="selectDialog_row selectDialog_row_row6">
                            <div :class="{selectDialog_col:true,selectDialog_col_ticketText:true,selectDialog_col_ticketText_size_large:attr.size==='large',selectDialog_col_ticketText_size_medium:attr.size==='medium',selectDialog_col_ticketText_size_small:attr.size==='small',selectDialog_col_ticketText_size_min:attr.size==='min',selectDialog_col_ticketText_checked:attr.checked,selectDialog_col_ticketText_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="ticketTitleRef"
                                        refId="ticketTitleRef"
                                        v-show="pvt_isShow.ticketText === 'ticketTitleRef'"
                                        :paraVarPair="pvt_ticketText.ticketTitleRef.paraVarPair"
                                        :para="pvt_ticketText.ticketTitleRef.para"
                                        :attr="pvt_ticketText.ticketTitleRef.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                        <div class="selectDialog_row selectDialog_row_row7">
                            <div :class="{selectDialog_col:true,selectDialog_col_ticketItem:true,selectDialog_col_ticketItem_size_large:attr.size==='large',selectDialog_col_ticketItem_size_medium:attr.size==='medium',selectDialog_col_ticketItem_size_small:attr.size==='small',selectDialog_col_ticketItem_size_min:attr.size==='min',selectDialog_col_ticketItem_checked:attr.checked,selectDialog_col_ticketItem_disable:attr.disabled}">
                                <select-button1
                                        ref="ticketBtnRef"
                                        refId="ticketBtnRef"
                                        v-show="pvt_isShow.ticketItem === 'ticketBtnRef'"
                                        :paraVarPair="pvt_ticketItem.ticketBtnRef.paraVarPair"
                                        v-for="(item, index) in pvt_ticketItem.ticketBtnRef.forData"
                                        :number="index"
                                        :para="item.para"
                                        :attr="item.attr">
                                </select-button1>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="selectDialog_row selectDialog_row_row8">
                    <div :class="{selectDialog_col:true,selectDialog_col_resetBtn:true,selectDialog_col_resetBtn_size_large:attr.size==='large',selectDialog_col_resetBtn_size_medium:attr.size==='medium',selectDialog_col_resetBtn_size_small:attr.size==='small',selectDialog_col_resetBtn_size_min:attr.size==='min',selectDialog_col_resetBtn_checked:attr.checked,selectDialog_col_resetBtn_disable:attr.disabled}">

                        <lm2b-button
                                ref="resetBtnRef"
                                refId="resetBtnRef"
                                v-show="pvt_isShow.resetBtn === 'resetBtnRef'"
                                :paraVarPair="pvt_resetBtn.resetBtnRef.paraVarPair"
                                :para="pvt_resetBtn.resetBtnRef.para"
                                :attr="pvt_resetBtn.resetBtnRef.attr">
                        </lm2b-button>
                    </div>
                    <div :class="{selectDialog_col:true,selectDialog_col_confirmBtn:true,selectDialog_col_confirmBtn_size_large:attr.size==='large',selectDialog_col_confirmBtn_size_medium:attr.size==='medium',selectDialog_col_confirmBtn_size_small:attr.size==='small',selectDialog_col_confirmBtn_size_min:attr.size==='min',selectDialog_col_confirmBtn_checked:attr.checked,selectDialog_col_confirmBtn_disable:attr.disabled}">

                        <lm2b-button
                                ref="confirmBtnRef"
                                refId="confirmBtnRef"
                                v-show="pvt_isShow.confirmBtn === 'confirmBtnRef'"
                                :paraVarPair="pvt_confirmBtn.confirmBtnRef.paraVarPair"
                                :para="pvt_confirmBtn.confirmBtnRef.para"
                                :attr="pvt_confirmBtn.confirmBtnRef.attr">
                        </lm2b-button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';
    import selectButton1 from './selectButton';

    export default {
        components: {selectButton1},
        inject: ['sys'],
        props: ['refId', 'para', 'attr', 'number'],
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ['statusList', 'ticketItem', 'title', 'statusTitle', 'ticketText', 'confirmBtn', 'resetBtn'],
                    subModule: ['selectBtnRef', 'ticketBtnRef', 'titleRef', 'statusTitleRef', 'ticketTitleRef', 'confirmBtnRef', 'resetBtnRef'],
                },
                pvt_isShow: {
                    statusList: null,
                    ticketItem: null,
                    title: null,
                    statusTitle: null,
                    ticketText: null,
                    confirmBtn: null,
                    resetBtn: null,
                },
                pvt_eventPortInput: ['confirmEvent'],

                selectBtnChecked: [true, false, false, false, false, false, false, false, false],
                ticketBtnChecked: [true, false, false],
                ticketBtnCheckedClone: [true, false, false],
                selectBtnCheckedClone: [true, false, false, false, false, false, false, false, false],

            };
        },
        watch: {},
        computed: {
            pvt_statusList: function () {
                let loopModule = {
                    selectBtnRef: {
                        para: {
                            btnText: ['全部','待审核', '待付款', '待退款', '退款中', '已退款', '已拒绝', '待验票', '已完成'],
                        },
                        attr: {
                            size: ['medium', 'medium', 'medium', 'medium', 'medium', 'medium', 'medium', 'medium', 'medium'],
                            checked: this.selectBtnChecked,
                        },
                    },
                };
                let forData = this.pvt_createForData(loopModule);
                return {
                    selectBtnRef: {
                        paraVarPair: {},
                        forData: forData.selectBtnRef,
                    },
                };
            },
            pvt_ticketItem: function () {
                let loopModule = {
                    ticketBtnRef: {
                        para: {
                            btnText: ['全部', '免费', '收费'],
                        },
                        attr: {
                            size: ['medium', 'medium', 'medium'],
                            checked: this.ticketBtnChecked
                        },
                    },
                };
                let forData = this.pvt_createForData(loopModule);
                return {
                    ticketBtnRef: {
                        paraVarPair: {},
                        forData: forData.ticketBtnRef,
                    },
                };
            },
            pvt_title: function () {
                return {
                    titleRef: {
                        paraVarPair: {},
                        para: {
                            textData: '筛选',
                        },
                        attr: {
                            label: 'div',
                            textAlign: 'center',
                            fontWeight: true,
                            color: '#333',
                            fontSize: '18px',
                        },
                    },
                };
            },
            pvt_statusTitle: function () {
                return {
                    statusTitleRef: {
                        paraVarPair: {},
                        para: {
                            textData: '活动状态',
                        },
                        attr: {
                            label: 'div',
                            color: '#333',
                        },
                    },
                };
            },
            pvt_ticketText: function () {
                return {
                    ticketTitleRef: {
                        paraVarPair: {},
                        para: {
                            textData: '收费类型',
                        },
                        attr: {
                            label: 'div',
                            color: '#333',
                        },
                    },
                };
            },
            pvt_confirmBtn: function () {
                return {
                    confirmBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['确定', ''],
                        },
                        attr: {
                            type: 'primary',
                            width: '100%',
                            height: '100%',
                        },
                    },
                };
            },
            pvt_resetBtn: function () {
                return {
                    resetBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['重置', ''],
                        },
                        attr: {
                            type: 'text',
                            long: true,
                            width: '100%',
                            height: '100%',
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
            startModule: function (successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'selectDialog_start';
                let dbFlag;
                let dbData;
                let tableName;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0
                };

                if (successCallBack !== null) {
                    errorCallBack = para;
                    successCallBack = null
                }
                para = errorCallBack;

                let refArr = ['titleRef', 'statusTitleRef', 'ticketTitleRef', 'confirmBtnRef', 'resetBtnRef'];

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                            that.forceUpdateData(function () {
                                para.nStep = 'start_sub';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            });
                            break;
                        case 'start_sub':
                            if (para.i >= refArr.length) {
                                para.i = 0;
                                para.nStep = 'statusItemStart';
                                dbFlag++;
                                break;
                            }
                            that.sm[refArr[para.i]].startModule(function () {
                                para.i++;
                                para.nStep = 'start_sub';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'statusItemStart':
                            if (para.i > that.sm.selectBtnRef.length - 1) {
                                para.i = 0;
                                para.nStep = 'ticketItemStart';
                                dbFlag++;
                                break;
                            }

                            that.sm.selectBtnRef[para.i].startModule(function () {
                                para.i++;
                                para.nStep = 'statusItemStart';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'ticketItemStart':
                            if (para.i > that.sm.ticketBtnRef.length - 1) {
                                para.i = 0;
                                para.nStep = 'showSubModule';
                                dbFlag++;
                                break;
                            }

                            that.sm.ticketBtnRef[para.i].startModule(function () {
                                para.i++;
                                para.nStep = 'ticketItemStart';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            refArr.push('ticketBtnRef', 'selectBtnRef');
                            that.showSubModule(refArr, true, function () {
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

            dialogConfirm: function () {
                let statusList = ['全部','待审核', '待付款', '待退款', '退款中', '已退款', '已拒绝', '待验票', '已完成'];
                let ticketList = ['全部', '免费', '收费'];
                let curStatus;
                let curTicket;

                for (let i = 0; i < this.selectBtnChecked.length; i++) {
                    if (this.selectBtnChecked[i] === true) {
                        curStatus = i-1;
                    }
                }
                for (let i = 0; i < this.ticketBtnChecked.length; i++) {
                    if (this.ticketBtnChecked[i] === true) {
                        curTicket = ticketList[i];
                    }
                }

                this.ep.confirmEvent(curStatus, curTicket, function () {

                }, function () {

                });
            },
            dialogReset: function () {
                this.statusBtnRefresh(0);
                this.ticketBtnRefresh(0);
            },

            statusBtnRefresh: function (index) {
                let that = this;
                this.selectBtnChecked = [];
                for (let i = 0; i < this.selectBtnCheckedClone.length; i++) {
                    if (index === i) {
                        this.selectBtnChecked.push(true)
                    } else {
                        this.selectBtnChecked.push(false);
                    }
                }

                that.forceUpdateData(function () {
                    for (let i = 0; i < that.sm.selectBtnRef.length; i++) {
                        that.sm.selectBtnRef[i].startModule(function () {
                        }, function () {
                        })
                    }
                });
            },
            ticketBtnRefresh: function (index) {
                let that = this;
                this.ticketBtnChecked = [];
                for (let i = 0; i < this.ticketBtnCheckedClone.length; i++) {
                    if (index === i) {
                        this.ticketBtnChecked.push(true)
                    } else {
                        this.ticketBtnChecked.push(false);
                    }
                }

                that.forceUpdateData(function () {
                    for (let i = 0; i < that.sm.ticketBtnRef.length; i++) {
                        that.sm.ticketBtnRef[i].startModule(function () {
                        }, function () {
                        })
                    }
                });
            },

            selectBtnRef_itemSelectEvent(index) {
                this.statusBtnRefresh(index)
            },
            ticketBtnRef_itemSelectEvent(index) {
                this.ticketBtnRefresh(index);
            },
            resetBtnRef_buttonClickEvent() {
                this.dialogReset();
            },
            confirmBtnRef_buttonClickEvent() {
                this.dialogConfirm();
            },
        },
    };
</script>
<style lang="less" scoped>
    @import "../../../../assets/var_kzt"; /*新增*/

    .selectDialog_row {
        display: flex;
        flex: 1;
    }

    .selectDialog_col {
        display: flex;
        flex-direction: column;
    }

    .selectDialog_col_selectDialogWindow_size_medium {
        width: @selectDialog-selectDialogWindow-medium-width;
        height: @selectDialog-selectDialogWindow-medium-height;
    }

    .selectDialog_col_selectDialogWindow {
        background-color: mix(@selectDialog-selectDialogWindow-background-color, #fff, @selectDialog-selectDialogWindow-background-color-opacity);
    }

    .selectDialog_col_title_size_medium {
        width: @selectDialog-title-medium-width;
        padding: @selectDialog-title-medium-padding;
        align-items: @selectDialog-title-medium-horizontal-position;
        justify-content: @selectDialog-title-medium-vertical-position;
        margin: @selectDialog-title-medium-margin;
    }

    .selectDialog_col_title {
        background-color: mix(@selectDialog-title-background-color, #fff, @selectDialog-title-background-color-opacity);
    }

    .selectDialog_col_statusWrap_size_medium {
        width: @selectDialog-statusWrap-medium-width;
        padding: @selectDialog-statusWrap-medium-padding;
        margin: @selectDialog-statusWrap-medium-margin;
    }

    .selectDialog_col_statusWrap {
        background-color: mix(@selectDialog-statusWrap-background-color, #fff, @selectDialog-statusWrap-background-color-opacity);
    }

    .selectDialog_col_statusTitle_size_medium {
        width: @selectDialog-statusTitle-medium-width;
        margin: @selectDialog-statusTitle-medium-margin;
    }

    .selectDialog_col_statusList_size_medium {
        width: @selectDialog-statusList-medium-width;
    }

    .selectDialog_col_ticketTitle_size_medium {
        width: @selectDialog-ticketTitle-medium-width;
        padding: @selectDialog-ticketTitle-medium-padding;
        margin: @selectDialog-ticketTitle-medium-margin;
    }

    .selectDialog_col_ticketTitle {
        background-color: mix(@selectDialog-ticketTitle-background-color, #fff, @selectDialog-ticketTitle-background-color-opacity);
    }

    .selectDialog_col_ticketText_size_medium {
        width: @selectDialog-ticketText-medium-width;
        margin: @selectDialog-ticketText-medium-margin;
    }

    .selectDialog_col_ticketItem_size_medium {
        width: @selectDialog-ticketItem-medium-width;
    }

    .selectDialog_col_resetBtn_size_medium {
        width: @selectDialog-resetBtn-medium-width;
        height: @selectDialog-resetBtn-medium-height;
        align-items: @selectDialog-resetBtn-medium-horizontal-position;
        justify-content: @selectDialog-resetBtn-medium-vertical-position;
    }

    .selectDialog_col_resetBtn {
        background-color: mix(@selectDialog-resetBtn-background-color, #fff, @selectDialog-resetBtn-background-color-opacity);
    }

    .selectDialog_col_confirmBtn_size_medium {
        width: @selectDialog-confirmBtn-medium-width;
        height: @selectDialog-confirmBtn-medium-height;
        align-items: @selectDialog-confirmBtn-medium-horizontal-position;
        justify-content: @selectDialog-confirmBtn-medium-vertical-position;

        .button-component {
            width: 100%;
            height: 100%; /*新增*/
        }
    }
</style>