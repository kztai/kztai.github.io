<template>
    <div class="ticketCheck_container">
        <div class="ticketCheck_row ticketCheck_row_ticketCheckRow">
            <div :class="{ticketCheck_col:true,ticketCheck_col_ticketCheckWindow:true,ticketCheck_col_ticketCheckWindow_size_large:attr.size==='large',ticketCheck_col_ticketCheckWindow_size_medium:attr.size==='medium',ticketCheck_col_ticketCheckWindow_size_small:attr.size==='small',ticketCheck_col_ticketCheckWindow_size_min:attr.size==='min',ticketCheck_col_ticketCheckWindow_checked:attr.checked,ticketCheck_col_ticketCheckWindow_disable:attr.disabled}">

                <div class="ticketCheck_row ticketCheck_row_row1">
                    <div :class="{ticketCheck_col:true,ticketCheck_col_header:true,ticketCheck_col_header_size_large:attr.size==='large',ticketCheck_col_header_size_medium:attr.size==='medium',ticketCheck_col_header_size_small:attr.size==='small',ticketCheck_col_header_size_min:attr.size==='min',ticketCheck_col_header_checked:attr.checked,ticketCheck_col_header_disable:attr.disabled}">

                        <div class="ticketCheck_row ticketCheck_row_row5">
                            <div :class="{ticketCheck_col:true,ticketCheck_col_backBtn:true,ticketCheck_col_backBtn_size_large:attr.size==='large',ticketCheck_col_backBtn_size_medium:attr.size==='medium',ticketCheck_col_backBtn_size_small:attr.size==='small',ticketCheck_col_backBtn_size_min:attr.size==='min',ticketCheck_col_backBtn_checked:attr.checked,ticketCheck_col_backBtn_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="backRef"
                                        refId="backRef"
                                        v-show="pvt_isShow.backBtn === 'backRef'"
                                        :paraVarPair="pvt_backBtn.backRef.paraVarPair"
                                        :para="pvt_backBtn.backRef.para"
                                        :attr="pvt_backBtn.backRef.attr">
                                </lm2b-link-text>
                            </div>
                            <div :class="{ticketCheck_col:true,ticketCheck_col_title:true,ticketCheck_col_title_size_large:attr.size==='large',ticketCheck_col_title_size_medium:attr.size==='medium',ticketCheck_col_title_size_small:attr.size==='small',ticketCheck_col_title_size_min:attr.size==='min',ticketCheck_col_title_checked:attr.checked,ticketCheck_col_title_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="titleRef"
                                        refId="titleRef"
                                        v-show="pvt_isShow.title === 'titleRef'"
                                        :paraVarPair="pvt_title.titleRef.paraVarPair"
                                        :para="pvt_title.titleRef.para"
                                        :attr="pvt_title.titleRef.attr">
                                </lm2b-link-text>
                            </div>
                            <div :class="{ticketCheck_col:true,ticketCheck_col_empty:true,ticketCheck_col_empty_size_large:attr.size==='large',ticketCheck_col_empty_size_medium:attr.size==='medium',ticketCheck_col_empty_size_small:attr.size==='small',ticketCheck_col_empty_size_min:attr.size==='min',ticketCheck_col_empty_checked:attr.checked,ticketCheck_col_empty_disable:attr.disabled}">

                            </div>
                        </div>
                    </div>
                </div>
                <div class="ticketCheck_row ticketCheck_row_row2">
                    <div :class="{ticketCheck_col:true,ticketCheck_col_input:true,ticketCheck_col_input_size_large:attr.size==='large',ticketCheck_col_input_size_medium:attr.size==='medium',ticketCheck_col_input_size_small:attr.size==='small',ticketCheck_col_input_size_min:attr.size==='min',ticketCheck_col_input_checked:attr.checked,ticketCheck_col_input_disable:attr.disabled}">

                        <lm2b-input-text
                                ref="inputRef"
                                refId="inputRef"
                                v-show="pvt_isShow.input === 'inputRef'"
                                :paraVarPair="pvt_input.inputRef.paraVarPair"
                                :para="pvt_input.inputRef.para"
                                :attr="pvt_input.inputRef.attr">
                        </lm2b-input-text>
                    </div>
                </div>
                <div class="ticketCheck_row ticketCheck_row_row3">
                    <div :class="{ticketCheck_col:true,ticketCheck_col_confirmBtn:true,ticketCheck_col_confirmBtn_size_large:attr.size==='large',ticketCheck_col_confirmBtn_size_medium:attr.size==='medium',ticketCheck_col_confirmBtn_size_small:attr.size==='small',ticketCheck_col_confirmBtn_size_min:attr.size==='min',ticketCheck_col_confirmBtn_checked:attr.checked,ticketCheck_col_confirmBtn_disable:attr.disabled}">

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
                <div class="ticketCheck_row ticketCheck_row_row4">
                    <div :class="{ticketCheck_col:true,ticketCheck_col_btnWrap:true,ticketCheck_col_btnWrap_size_large:attr.size==='large',ticketCheck_col_btnWrap_size_medium:attr.size==='medium',ticketCheck_col_btnWrap_size_small:attr.size==='small',ticketCheck_col_btnWrap_size_min:attr.size==='min',ticketCheck_col_btnWrap_checked:attr.checked,ticketCheck_col_btnWrap_disable:attr.disabled}">
                        <div class="ticketCheck_row ticketCheck_row_row5">
                            <div :class="{ticketCheck_col:true,ticketCheck_col_searchBtn:true,ticketCheck_col_searchBtn_size_large:attr.size==='large',ticketCheck_col_searchBtn_size_medium:attr.size==='medium',ticketCheck_col_searchBtn_size_small:attr.size==='small',ticketCheck_col_searchBtn_size_min:attr.size==='min',ticketCheck_col_searchBtn_checked:attr.checked,ticketCheck_col_searchBtn_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="searchBtnRef"
                                        refId="searchBtnRef"
                                        v-show="pvt_isShow.searchBtn === 'searchBtnRef'"
                                        :paraVarPair="pvt_searchBtn.searchBtnRef.paraVarPair"
                                        :para="pvt_searchBtn.searchBtnRef.para"
                                        :attr="pvt_searchBtn.searchBtnRef.attr">
                                </lm2b-link-text>
                            </div>
                            <div :class="{ticketCheck_col:true,ticketCheck_col_recordBtn:true,ticketCheck_col_recordBtn_size_large:attr.size==='large',ticketCheck_col_recordBtn_size_medium:attr.size==='medium',ticketCheck_col_recordBtn_size_small:attr.size==='small',ticketCheck_col_recordBtn_size_min:attr.size==='min',ticketCheck_col_recordBtn_checked:attr.checked,ticketCheck_col_recordBtn_disable:attr.disabled}">

                                <lm2b-link-text
                                        ref="recordBtnRef"
                                        refId="recordBtnRef"
                                        v-show="pvt_isShow.recordBtn === 'recordBtnRef'"
                                        :paraVarPair="pvt_recordBtn.recordBtnRef.paraVarPair"
                                        :para="pvt_recordBtn.recordBtnRef.para"
                                        :attr="pvt_recordBtn.recordBtnRef.attr">
                                </lm2b-link-text>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="ticketCheck_row ticketCheck_row_dialogList" v-show="dialogListWrap">  <!--新增-->
            <div :class="{ticketCheck_col:true,ticketCheck_col_dialogList:true,ticketCheck_col_dialogList_size_large:attr.size==='large',ticketCheck_col_dialogList_size_medium:attr.size==='medium',ticketCheck_col_dialogList_size_small:attr.size==='small',ticketCheck_col_dialogList_size_min:attr.size==='min',ticketCheck_col_dialogList_checked:attr.checked,ticketCheck_col_dialogList_disable:attr.disabled,ticketCheck_dialog:true}">
                <searchDialog
                        ref="searchDialogRef"
                        refId="searchDialogRef"
                        v-if="pvt_isShow.dialogList === 'searchDialogRef'"
                        :paraVarPair="pvt_dialogList.searchDialogRef.paraVarPair"
                        :para="pvt_dialogList.searchDialogRef.para"
                        :attr="pvt_dialogList.searchDialogRef.attr">
                </searchDialog>
                <recordDialog
                        ref="recordDialogRef"
                        refId="recordDialogRef"
                        v-if="pvt_isShow.dialogList === 'recordDialogRef'"
                        :paraVarPair="pvt_dialogList.recordDialogRef.paraVarPair"
                        :para="pvt_dialogList.recordDialogRef.para"
                        :attr="pvt_dialogList.recordDialogRef.attr">
                </recordDialog>
            </div>
        </div>
        <div class="ticketCheck_row ticketCheck_row_infoDialog" v-show="infoDialogWrap">  <!--新增-->
            <div :class="{ticketCheck_col:true,ticketCheck_col_infoDialog:true,ticketCheck_col_infoDialog_size_large:attr.size==='large',ticketCheck_col_infoDialog_size_medium:attr.size==='medium',ticketCheck_col_infoDialog_size_small:attr.size==='small',ticketCheck_col_infoDialog_size_min:attr.size==='min',ticketCheck_col_infoDialog_checked:attr.checked,ticketCheck_col_infoDialog_disable:attr.disabled,ticketCheck_dialog:true}">
                <infoDialog
                        ref="infoDialogRef"
                        refId="infoDialogRef"
                        v-if="pvt_isShow.infoDialog === 'infoDialogRef'"
                        :paraVarPair="pvt_infoDialog.infoDialogRef.paraVarPair"
                        :para="pvt_infoDialog.infoDialogRef.para"
                        :attr="pvt_infoDialog.infoDialogRef.attr">
                </infoDialog>
            </div>
        </div>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';
    import infoDialog from './approvalInfo';
    import recordDialog from './checkRecord';
    import searchDialog from './searchApply';

    export default {
        components: {infoDialog, recordDialog, searchDialog},
        inject: ['sys'],
        props: ['refId', 'para', 'attr', 'number'],
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ['input', 'confirmBtn', 'searchBtn', 'recordBtn', 'infoDialog', 'dialogList', 'dialogList', 'title', 'backBtn'],
                    subModule: ['inputRef', 'confirmBtnRef', 'searchBtnRef', 'recordBtnRef', 'infoDialogRef', 'recordDialogRef', 'searchDialogRef', 'titleRef', 'backRef'],
                },
                pvt_isShow: {
                    input: null,
                    confirmBtn: null,
                    searchBtn: null,
                    recordBtn: null,
                    infoDialog: null,
                    dialogList: null,
                    title: null,
                    backBtn: null,
                },
                pvt_eventPortInput: ['ticketPassEvent', 'getSeccodeEvent', 'seccodeVerifyEvent', 'backEvent'],

                mac: mac.mac,

                infoDialogWrap: false,
                dialogListWrap: false,
                curActivityId: null,
                inputValue: '',

            };
        },
        watch: {},
        computed: {
            pvt_input: function () {
                return {
                    inputRef: {
                        paraVarPair: {},
                        para: {
                            text: '',
                        },
                        attr: {
                            placeholder: '请输入数字码',
                            size: 'large',
                            isPlaceholder: false
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
                            plain: true,
                            width: '100px'
                        },
                    },
                };
            },
            pvt_searchBtn: function () {
                return {
                    searchBtnRef: {
                        paraVarPair: {},
                        para: {
                            textData: '搜索参与者',
                        },
                        attr: {
                            isClick: true,
                            color: '#fff',
                            fontSize: '16px',
                            background: '#000',
                            icon: 'van-icon-search',
                        },
                    },
                };
            },
            pvt_recordBtn: function () {
                return {
                    recordBtnRef: {
                        paraVarPair: {},
                        para: {
                            textData: '验票记录',
                        },
                        attr: {
                            isClick: true,
                            color: '#fff',
                            fontSize: '16px',
                            background: '#000',
                            icon: 'van-icon-records',
                        },
                    },
                };
            },
            pvt_infoDialog: function () {
                return {
                    infoDialogRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium',
                        },
                    },
                };
            },
            pvt_dialogList: function () {
                return {
                    recordDialogRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium',
                        },
                    },
                    searchDialogRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium',
                        },
                    },
                };
            },
            pvt_title: function () {
                return {
                    titleRef: {
                        paraVarPair: {},
                        para: {
                            textData: '验票',
                        },
                        attr: {
                            textAlign: 'center',
                            color: '#fff',
                            fontSize: '18px',
                            background: '#000',
                        },
                    },
                };
            },
            pvt_backBtn: function () {
                return {
                    backRef: {
                        paraVarPair: {},
                        para: {
                            textData: '返回',
                        },
                        attr: {
                            isClick: true,
                            color: '#fff',
                            fontSize: '16px',
                            background: '#000',
                            icon: 'van-icon-arrow-left',
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
                let fnname = 'approvalInfo_start';
                let dbFlag;
                let dbData;
                let tableName;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0,
                    refArr: ['inputRef', 'confirmBtnRef', 'searchBtnRef', 'recordBtnRef', 'titleRef', 'backRef']
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
                            that.curActivityId = curActivityId;
                            this.inputValue = '';

                            that.forceUpdateData(function () {
                                para.nStep = 'start_sub';
                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, successCallBack, errorCallBack)
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
                                    that.startModule(curActivityId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
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
                this.ep.backEvent();
                this.hideSelfModule(this.refId, function () {
                }, function () {
                });
            },
            checkConfirm: function () {
                if(navigator.onLine) {
                    this.checkTicket(function () {
                    }, function () {
                    })
                } else {
                    this.$notify({type: 'warning', message: '出错了！请稍后再试。'});
                }
            },

            checkTicket: function(successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'checkTicket_checkTicket';
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
                            if(this.inputValue === '') {
                                this.$notify({type: 'warning', message: '请输入报名码'});
                                para.nStep = 'end';
                            } else {
                                para.nStep = 'getTerActivityId';
                            }
                            dbFlag++;
                            break;
                        case 'getTerActivityId':
                            tableName = that.mac.tb.groupActivity;
                            record = [that.curActivityId];
                            that.sys.api.getSourceRecord(tableName, record, function (result) {
                                para.terActivityId = result[0];
                                para.nStep = 'inputOrder';
                                if (++dbFlag === 2) {
                                    that.checkTicket(successCallBack, errorCallBack)
                                }
                            }, function (error) {
                            });
                            break;
                        case 'inputOrder':
                            let expression = this.mac.fd.groupActivityOrder.groupActivityID + '=' + para.terActivityId;
                            let start = null;
                            let total = null;
                            let sort = ['id,asc'];
                            let destGeneSite = '';
                            let portName = this.mac.tb.groupActivityOrder;
                            let inputData = null;
                            this.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                para.nStep = 'checkTicketType';
                                if (++dbFlag === 2) {
                                    that.checkTicket(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'checkTicketType':
                            tableName = this.mac.tb.groupActivityBill;
                            condition = this.mac.fd.groupActivityBill.code + '=' + this.inputValue + '&&' + this.mac.fd.groupActivityBill.status + '=' + this.mac.enum.groupActivityBill.status.checkTicket;
                            dbData = {};
                            dbData[that.mac.fd.id] = [];
                            this.sys.api.recordQuery(tableName, null, condition, dbData, function (result) {
                                if(dbData[that.mac.fd.id].length > 0) {
                                    that.showInfoDialog('code', dbData[that.mac.fd.id][0], function () {
                                    }, function () {
                                    });
                                    para.nStep = 'end';
                                } else {
                                    para.nStep = 'finishType';
                                }

                                if (++dbFlag === 2) {
                                    that.checkTicket(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'finishType':
                            tableName = this.mac.tb.groupActivityBill;
                            condition = this.mac.fd.groupActivityBill.code + '=' + this.inputValue + '&&' + this.mac.fd.groupActivityBill.status + '=' + this.mac.enum.groupActivityBill.status.finish;
                            dbData = {};
                            dbData[that.mac.fd.id] = [];
                            this.sys.api.recordQuery(tableName, null, condition, dbData, function (result) {
                                if(dbData[that.mac.fd.id].length > 0) {
                                    that.showInfoDialog('code', dbData[that.mac.fd.id][0], function () {
                                    }, function () {
                                    });
                                } else {
                                    that.$notify({type: 'warning', message: '此报名码无效！'});
                                }
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.checkTicket(successCallBack, errorCallBack)
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

            showSearchDialog: function () {
                let that = this;
                that.dialogListWrap = true;
                that.showSubModule('searchDialogRef', true, function () {
                    that.sm.searchDialogRef.startModule(that.curActivityId, function () {
                    }, function () {
                    });
                }, function () {
                });
            },
            showRecordDialog: function () {
                let that = this;
                that.dialogListWrap = true;
                that.groupId = 1;
                that.showSubModule('recordDialogRef', true, function () {
                    that.sm.recordDialogRef.startModule(that.groupId, function () {
                    }, function () {
                    });
                }, function () {
                });
            },
            showInfoDialog: function (type, curBillId,successCallBack,errorCallBack) {
                let that = this;
                that.infoDialogWrap = true;
                that.showSubModule('infoDialogRef', true, function () {
                    that.sm.infoDialogRef.startModule(type, curBillId, function () {
                        successCallBack()
                    }, function () {
                        errorCallBack()
                    });
                }, function () {
                });
            },

            refresh_list(terBillId, successCallBack, errorCallBack) {
                if(this.sm.recordDialogRef) {
                    this.sm.recordDialogRef.checkListRefresh();
                }
                if(this.sm.searchDialogRef) {
                    this.sm.searchDialogRef.searchApply(0,function () {
                    }, function () {
                    })
                }
                this.ep.ticketPassEvent(terBillId, successCallBack, errorCallBack);
            },

            getInputValue: function (value) {
                this.inputValue = value;
            },
            hideListDialog() {
                this.dialogListWrap = false;
            },
            hideInfoDialog() {
                this.infoDialogWrap = false;
            },


            backRef_textClickEvent: function () {
                this.backClick();
            },
            inputRef_dataModifyEvent: function (value) {
                this.getInputValue(value);
            },
            confirmBtnRef_buttonClickEvent: function () {
                this.checkConfirm();
            },
            searchBtnRef_textClickEvent: function () {
                this.showSearchDialog();
            },
            recordBtnRef_textClickEvent: function () {
                this.showRecordDialog();
            },
            recordDialogRef_orderDetailEvent: function (type, curBillId,successCallBack,errorCallBack) {
                this.showInfoDialog(type, curBillId,successCallBack,errorCallBack);
            },
            recordDialogRef_backEvent: function () {
                this.hideListDialog();
            },
            searchDialogRef_orderDetailEvent: function (type, curBillId,successCallBack,errorCallBack) {
                this.showInfoDialog(type, curBillId,successCallBack,errorCallBack);
            },
            searchDialogRef_backEvent: function () {
                this.hideListDialog();
            },
            infoDialogRef_backEvent: function () {
                this.hideInfoDialog();
            },
            infoDialogRef_getSeccodeEvent: function (phone, successCallBack, errorCallBack) {
                this.ep.getSeccodeEvent(phone, successCallBack, errorCallBack);
            },
            infoDialogRef_seccodeVerifyEvent: function (terBillId, codeValue, successCallBack, errorCallBack) {
                this.ep.seccodeVerifyEvent(terBillId, codeValue, successCallBack, errorCallBack);
            },
            infoDialogRef_ticketPassEvent: function (terBillId, successCallBack, errorCallBack) {
                this.refresh_list(terBillId, successCallBack, errorCallBack)
            },
        },
    };
</script>
<style lang="less">
    @import "../../../../assets/var_kzt"; /*新增*/
    .ticketCheck_container {
    }

    .ticketCheck_row {
        display: flex;
        flex: 1;
    }

    .ticketCheck_col {
        display: flex;
        flex-direction: column;
    }

    .ticketCheck_col_ticketCheckWindow_size_medium {
        width: @ticketCheck-ticketCheckWindow-medium-width;
    }

    .ticketCheck_col_header_size_medium {
        width: @ticketCheck-header-medium-width;
        height: @ticketCheck-header-medium-height;
        padding: @ticketCheck-header-medium-padding;
    }

    .ticketCheck_col_input_size_medium {
        width: @ticketCheck-input-medium-width;
        margin: @ticketCheck-input-medium-margin;
        padding: @ticketCheck-input-medium-padding;
    }

    .ticketCheck_col_confirmBtn_size_medium {
        width: @ticketCheck-confirmBtn-medium-width;
        align-items: @ticketCheck-confirmBtn-medium-horizontal-position;
        margin: @ticketCheck-confirmBtn-medium-margin;
    }

    .ticketCheck_col_btnWrap_size_medium {
        width: @ticketCheck-btnWrap-medium-width;
        position: fixed;
        bottom: 0;
        left: 0;
        padding: 20px 0;  /*新增*/
    }

    .ticketCheck_col_searchBtn_size_medium {
        width: @ticketCheck-searchBtn-medium-width;
        align-items: @ticketCheck-searchBtn-medium-horizontal-position;

        .van-button--text {
            color: #fff;
        }
    }

    .ticketCheck_col_recordBtn_size_medium {
        width: @ticketCheck-recordBtn-medium-width;
        align-items: @ticketCheck-recordBtn-medium-horizontal-position;

        .van-button--text {
            color: #fff;
        }
    }

    .ticketCheck_col_approvalInfo_size_medium {
        width: @ticketCheck-approvalInfo-medium-width;
        height: @ticketCheck-approvalInfo-medium-height;
    }

    .ticketCheck_col_dialogList_size_medium {
        width: @ticketCheck-dialogList-medium-width;
        height: @ticketCheck-dialogList-medium-height;
    }

    .ticketCheck_col_backBtn_size_medium {
        width: @ticketCheck-backBtn-medium-width;
        align-items: @ticketCheck-backBtn-medium-horizontal-position;
    }

    .ticketCheck_col_title_size_medium {
        width: @ticketCheck-title-medium-width;
        align-items: @ticketCheck-title-medium-horizontal-position;
    }

    .ticketCheck_col_empty_size_medium {
        width: @ticketCheck-empty-medium-width;
    }

    .ticketCheck_dialog {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        z-index: 18;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: #f4f4f4;
    }

</style>