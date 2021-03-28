<template>
    <div class="budgetDialog_container">
        <div class="budgetDialog_row budgetDialog_row_budgetDialogRow">
            <div :class="{budgetDialog_col:true,budgetDialog_col_budgetDialogWindow:true,budgetDialog_col_budgetDialogWindow_size_large:attr.size==='large',budgetDialog_col_budgetDialogWindow_size_medium:attr.size==='medium',budgetDialog_col_budgetDialogWindow_size_small:attr.size==='small',budgetDialog_col_budgetDialogWindow_size_min:attr.size==='min',budgetDialog_col_budgetDialogWindow_checked:attr.checked,budgetDialog_col_budgetDialogWindow_disable:attr.disabled}">

                <div class="budgetDialog_row budgetDialog_row_row1">
                    <div :class="{budgetDialog_col:true,budgetDialog_col_header:true,budgetDialog_col_header_size_large:attr.size==='large',budgetDialog_col_header_size_medium:attr.size==='medium',budgetDialog_col_header_size_small:attr.size==='small',budgetDialog_col_header_size_min:attr.size==='min',budgetDialog_col_header_checked:attr.checked,budgetDialog_col_header_disable:attr.disabled}">

                        <listHeader
                                ref="headerRef"
                                refId="headerRef"
                                v-show="pvt_isShow.header === 'headerRef'"
                                :paraVarPair="pvt_header.headerRef.paraVarPair"
                                :para="pvt_header.headerRef.para"
                                :attr="pvt_header.headerRef.attr">
                        </listHeader>
                    </div>
                </div>
                <div class="budgetDialog_row budgetDialog_row_row2">
                    <div :class="{budgetDialog_col:true,budgetDialog_col_content:true,budgetDialog_col_content_size_large:attr.size==='large',budgetDialog_col_content_size_medium:attr.size==='medium',budgetDialog_col_content_size_small:attr.size==='small',budgetDialog_col_content_size_min:attr.size==='min',budgetDialog_col_content_checked:attr.checked,budgetDialog_col_content_disable:attr.disabled}">

                        <div class="budgetDialog_row budgetDialog_row_row3">
                            <div :class="{budgetDialog_col:true,budgetDialog_col_nameText:true,budgetDialog_col_nameText_size_large:attr.size==='large',budgetDialog_col_nameText_size_medium:attr.size==='medium',budgetDialog_col_nameText_size_small:attr.size==='small',budgetDialog_col_nameText_size_min:attr.size==='min',budgetDialog_col_nameText_checked:attr.checked,budgetDialog_col_nameText_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="nameTextRef"
                                        refId="nameTextRef"
                                        v-show="pvt_isShow.nameText === 'nameTextRef'"
                                        :paraVarPair="pvt_nameText.nameTextRef.paraVarPair"
                                        :para="pvt_nameText.nameTextRef.para"
                                        :attr="pvt_nameText.nameTextRef.attr">
                                </lm2b-link-text>
                            </div>
                            <div :class="{budgetDialog_col:true,budgetDialog_col_yuanText:true,budgetDialog_col_yuanText_size_large:attr.size==='large',budgetDialog_col_yuanText_size_medium:attr.size==='medium',budgetDialog_col_yuanText_size_small:attr.size==='small',budgetDialog_col_yuanText_size_min:attr.size==='min',budgetDialog_col_yuanText_checked:attr.checked,budgetDialog_col_yuanText_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="yuanTextRef"
                                        refId="yuanTextRef"
                                        v-show="pvt_isShow.yuanText === 'yuanTextRef'"
                                        :paraVarPair="pvt_yuanText.yuanTextRef.paraVarPair"
                                        :para="pvt_yuanText.yuanTextRef.para"
                                        :attr="pvt_yuanText.yuanTextRef.attr">
                                </lm2b-link-text>
                            </div>
                            <div :class="{budgetDialog_col:true,budgetDialog_col_totalText:true,budgetDialog_col_totalText_size_large:attr.size==='large',budgetDialog_col_totalText_size_medium:attr.size==='medium',budgetDialog_col_totalText_size_small:attr.size==='small',budgetDialog_col_totalText_size_min:attr.size==='min',budgetDialog_col_totalText_checked:attr.checked,budgetDialog_col_totalText_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="totalTextRef"
                                        refId="totalTextRef"
                                        v-show="pvt_isShow.totalText === 'totalTextRef'"
                                        :paraVarPair="pvt_totalText.totalTextRef.paraVarPair"
                                        :para="pvt_totalText.totalTextRef.para"
                                        :attr="pvt_totalText.totalTextRef.attr">
                                </lm2b-link-text>
                            </div>
                            <div :class="{budgetDialog_col:true,budgetDialog_col_noteText:true,budgetDialog_col_noteText_size_large:attr.size==='large',budgetDialog_col_noteText_size_medium:attr.size==='medium',budgetDialog_col_noteText_size_small:attr.size==='small',budgetDialog_col_noteText_size_min:attr.size==='min',budgetDialog_col_noteText_checked:attr.checked,budgetDialog_col_noteText_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="noteTextRef"
                                        refId="noteTextRef"
                                        v-show="pvt_isShow.noteText === 'noteTextRef'"
                                        :paraVarPair="pvt_noteText.noteTextRef.paraVarPair"
                                        :para="pvt_noteText.noteTextRef.para"
                                        :attr="pvt_noteText.noteTextRef.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                        <div class="budgetDialog_row budgetDialog_row_row4">
                            <div :class="{budgetDialog_col:true,budgetDialog_col_budgetList:true,budgetDialog_col_budgetList_size_large:attr.size==='large',budgetDialog_col_budgetList_size_medium:attr.size==='medium',budgetDialog_col_budgetList_size_small:attr.size==='small',budgetDialog_col_budgetList_size_min:attr.size==='min',budgetDialog_col_budgetList_checked:attr.checked,budgetDialog_col_budgetList_disable:attr.disabled}">
                                <budget-item
                                        ref="budgetItemRef"
                                        refId="budgetItemRef"
                                        v-show="pvt_isShow.budgetList === 'budgetItemRef'"
                                        :paraVarPair="pvt_budgetList.budgetItemRef.paraVarPair"
                                        v-for="(item, index) in pvt_budgetList.budgetItemRef.forData"
                                        :number="index"
                                        :para="item.para"
                                        :attr="item.attr">
                                </budget-item>
                            </div>
                        </div>
                        <div class="budgetDialog_row budgetDialog_row_row5">
                            <div :class="{budgetDialog_col:true,budgetDialog_col_budgetText:true,budgetDialog_col_budgetText_size_large:attr.size==='large',budgetDialog_col_budgetText_size_medium:attr.size==='medium',budgetDialog_col_budgetText_size_small:attr.size==='small',budgetDialog_col_budgetText_size_min:attr.size==='min',budgetDialog_col_budgetText_checked:attr.checked,budgetDialog_col_budgetText_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="budgetTextRef"
                                        refId="budgetTextRef"
                                        v-show="pvt_isShow.budgetText === 'budgetTextRef'"
                                        :paraVarPair="pvt_budgetText.budgetTextRef.paraVarPair"
                                        :para="pvt_budgetText.budgetTextRef.para"
                                        :attr="pvt_budgetText.budgetTextRef.attr">
                                </lm2b-link-text>
                            </div>
                            <div :class="{budgetDialog_col:true,budgetDialog_col_totalNum:true,budgetDialog_col_totalNum_size_large:attr.size==='large',budgetDialog_col_totalNum_size_medium:attr.size==='medium',budgetDialog_col_totalNum_size_small:attr.size==='small',budgetDialog_col_totalNum_size_min:attr.size==='min',budgetDialog_col_totalNum_checked:attr.checked,budgetDialog_col_totalNum_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="totalNumRef"
                                        refId="totalNumRef"
                                        v-show="pvt_isShow.totalNum === 'totalNumRef'"
                                        :paraVarPair="pvt_totalNum.totalNumRef.paraVarPair"
                                        :para="pvt_totalNum.totalNumRef.para"
                                        :attr="pvt_totalNum.totalNumRef.attr">
                                </lm2b-link-text>
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
    import listHeader from '../listHeader/listHeader';
    import budgetItem from './budgetItem';

    export default {
        components: {listHeader, budgetItem},
        inject: ['sys'],
        props: ['refId', 'para', 'attr', 'number'],
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ['header', 'nameText', 'yuanText', 'totalText', 'noteText', 'budgetList', 'budgetText', 'totalNum'],
                    subModule: ['headerRef', 'nameTextRef', 'yuanTextRef', 'totalTextRef', 'noteTextRef', 'budgetItemRef', 'budgetTextRef', 'totalNumRef'],
                },
                pvt_isShow: {
                    header: null,
                    nameText: null,
                    yuanText: null,
                    totalText: null,
                    noteText: null,
                    budgetList: null,
                    budgetText: null,
                    totalNum: null,
                },
                pvt_eventPortInput: ['backEvent'],

                mac: mac.mac,

                curBudgetIdArr: [1, 2],
                sizeArr: ['medium', 'medium'],
                totalNum: '￥1100',
            };
        },
        watch: {},
        computed: {
            pvt_header: function () {
                return {
                    headerRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium',
                        },
                    },
                };
            },
            pvt_nameText: function () {
                return {
                    nameTextRef: {
                        paraVarPair: {},
                        para: {
                            textData: '支出分类',
                        },
                        attr: {
                            textAlign: 'center',
                            color: '#999',
                            fontSize: '14px',
                            background: '#f4f4f4',
                        },
                    },
                };
            },
            pvt_yuanText: function () {
                return {
                    yuanTextRef: {
                        paraVarPair: {},
                        para: {
                            textData: '单位',
                        },
                        attr: {
                            textAlign: 'center',
                            color: '#999',
                            fontSize: '14px',
                            background: '#f4f4f4',
                        },
                    },
                };
            },
            pvt_totalText: function () {
                return {
                    totalTextRef: {
                        paraVarPair: {},
                        para: {
                            textData: '预算支出',
                        },
                        attr: {
                            textAlign: 'center',
                            color: '#999',
                            fontSize: '14px',
                            background: '#f4f4f4',
                        },
                    },
                };
            },
            pvt_noteText: function () {
                return {
                    noteTextRef: {
                        paraVarPair: {},
                        para: {
                            textData: '备注',
                        },
                        attr: {
                            textAlign: 'center',
                            color: '#999',
                            fontSize: '14px',
                            background: '#f4f4f4',
                        },
                    },
                };
            },
            pvt_budgetList: function () {
                let loopModule = {
                    budgetItemRef: {
                        para: {
                            curBudgetId: this.curBudgetIdArr,
                        },
                        attr: {
                            size: this.sizeArr,
                        },
                    },
                };
                let forData = this.pvt_createForData(loopModule);
                return {
                    budgetItemRef: {
                        paraVarPair: {
                            curBudgetId: 'curBudgetIdArr',
                        },
                        forData: forData.budgetItemRef,
                    },
                };
            },
            pvt_budgetText: function () {
                return {
                    budgetTextRef: {
                        paraVarPair: {},
                        para: {
                            textData: '总价',
                        },
                        attr: {},
                    },
                };
            },
            pvt_totalNum: function () {
                return {
                    totalNumRef: {
                        paraVarPair: {
                            textData: 'totalNum',
                        },
                        para: {
                            textData: this.totalNum,
                        },
                        attr: {
                            color: '#FC7122',
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
            startModule: function (curActivityId, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'budgetDialog_start';
                let dbFlag;
                let dbData;
                let tableName;
                let condition;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0,
                    refArr: ['nameTextRef', 'yuanTextRef', 'totalTextRef', 'noteTextRef', 'budgetTextRef', 'totalNumRef']
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
                        case 'getBudgetData':
                            that.curActivityId = curActivityId;
                            that.curBudgetIdArr = [];
                            that.sizeArr = [];

                            tableName = this.mac.tb.groupActivityBudgetForm;
                            condition = '';
                            dbData = {};
                            dbData[that.mac.fd.id] = [];
                            dbData[that.mac.fd.groupActivityBudgetForm.budgetAmount] = [];

                            this.sys.api.recordQuery(tableName, [curActivityId], condition, dbData, function (result) {
                                that.totalNum = 0;
                                for(let i = 0; i < dbData[that.mac.fd.id].length; i++) {
                                    that.totalNum += dbData[that.mac.fd.groupActivityBudgetForm.budgetAmount][i];
                                    that.curBudgetIdArr.push(dbData[that.mac.fd.id][i]);
                                    that.sizeArr.push('medium');
                                }
                                that.totalNum = '￥' + that.totalNum;
                                that.forceUpdateData(function () {
                                    para.nStep = 'start_sub';
                                    if (++dbFlag === 2) {
                                        that.startModule(curActivityId, successCallBack, errorCallBack)
                                    }
                                });
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'start_sub':
                            if (para.i >= para.refArr.length) {
                                para.i = 0;
                                para.nStep = 'applyStart';
                                dbFlag++;
                                break;
                            }
                            that.sm[para.refArr[para.i]].startModule(function () {
                                para.i++;
                                para.nStep = 'start_sub';
                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'applyStart':
                            if (para.i > that.sm.budgetItemRef.length - 1) {
                                para.i = 0;
                                para.nStep = 'headStart';
                                dbFlag++;
                                break;
                            }

                            that.sm.budgetItemRef[para.i].startModule(function () {
                                para.i++;
                                para.nStep = 'applyStart';
                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'headStart':
                            let headData = {
                                title: '预算明细',
                                showMenu: false,
                            };
                            this.sm.headerRef.startModule(headData, function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            para.refArr.push('headerRef', 'budgetItemRef');
                            that.showSubModule(para.refArr, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, successCallBack, errorCallBack)
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

            backClick: function () {
                let that = this;
                that.ep.backEvent();
                this.hideSelfModule(this.refId, function () {
                }, function () {
                });
            },
            headerRef_backEvent: function () {
                this.backClick();
            },
        },
    };
</script>
<style lang="less" scoped>
    @import "../../../../../assets/var_kzt"; /*新增*/
    .budgetDialog_container {
    }

    .budgetDialog_row {
        display: flex;
    }

    .budgetDialog_col {
        display: flex;
        flex-direction: column;
    }

    .budgetDialog_col_budgetDialogWindow_size_medium {
        width: @budgetDialog-budgetDialogWindow-medium-width;
    }

    .budgetDialog_col_budgetDialogWindow {
        background-color: mix(@budgetDialog-budgetDialogWindow-background-color, #fff, @budgetDialog-budgetDialogWindow-background-color-opacity);
    }

    .budgetDialog_col_header_size_medium {
        width: @budgetDialog-header-medium-width;
        position: fixed;
        top:0;
        left:0;
    }

    .budgetDialog_col_header {
        background-color: mix(@budgetDialog-header-background-color, #fff, @budgetDialog-header-background-color-opacity);
    }

    .budgetDialog_col_content_size_medium {
        width: @budgetDialog-content-medium-width;
        height: @budgetDialog-content-medium-height;
        padding: @budgetDialog-content-medium-padding;
    }

    .budgetDialog_col_nameText_size_medium {
        width: @budgetDialog-nameText-medium-width;
        align-items: @budgetDialog-nameText-medium-horizontal-position;
        padding: @budgetDialog-nameText-medium-padding;
        justify-content: @budgetDialog-nameText-medium-vertical-position;
    }

    .budgetDialog_col_yuanText_size_medium {
        width: @budgetDialog-yuanText-medium-width;
        align-items: @budgetDialog-yuanText-medium-horizontal-position;
        padding: @budgetDialog-yuanText-medium-padding;
        justify-content: @budgetDialog-yuanText-medium-vertical-position;
    }

    .budgetDialog_col_totalText_size_medium {
        width: @budgetDialog-totalText-medium-width;
        align-items: @budgetDialog-totalText-medium-horizontal-position;
        padding: @budgetDialog-totalText-medium-padding;
        justify-content: @budgetDialog-totalText-medium-vertical-position;
    }

    .budgetDialog_col_noteText_size_medium {
        width: @budgetDialog-noteText-medium-width;
        align-items: @budgetDialog-noteText-medium-horizontal-position;
        padding: @budgetDialog-noteText-medium-padding;
        justify-content: @budgetDialog-noteText-medium-vertical-position;
    }

    .budgetDialog_col_budgetList_size_medium {
        width: @budgetDialog-budgetList-medium-width;
        padding: @budgetDialog-budgetList-medium-padding;
        margin: @budgetDialog-budgetList-medium-margin;
    }

    .budgetDialog_col_budgetList {
        background-color: mix(@budgetDialog-budgetList-background-color, #fff, @budgetDialog-budgetList-background-color-opacity);
    }

    .budgetDialog_col_budgetText_size_medium {
        width: @budgetDialog-budgetText-medium-width;
        padding: @budgetDialog-budgetText-medium-padding;
    }

    .budgetDialog_col_budgetText {
        background-color: mix(@budgetDialog-budgetText-background-color, #fff, @budgetDialog-budgetText-background-color-opacity);
    }

    .budgetDialog_col_totalNum_size_medium {
        width: @budgetDialog-totalNum-medium-width;
        padding: @budgetDialog-totalNum-medium-padding;
        align-items: @budgetDialog-totalNum-medium-horizontal-position;
    }

    .budgetDialog_col_totalNum {
        background-color: mix(@budgetDialog-totalNum-background-color, #fff, @budgetDialog-totalNum-background-color-opacity);
    }
</style>