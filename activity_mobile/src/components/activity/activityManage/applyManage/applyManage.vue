<template>
    <div>
        <div class="applyManage_row applyManage_row_applyManageRow">
            <div :class="{applyManage_col:true,applyManage_col_applyManageWindow:true,applyManage_col_applyManageWindow_size_large:attr.size==='large',applyManage_col_applyManageWindow_size_medium:attr.size==='medium',applyManage_col_applyManageWindow_size_small:attr.size==='small',applyManage_col_applyManageWindow_size_min:attr.size==='min',applyManage_col_applyManageWindow_checked:attr.checked,applyManage_col_applyManageWindow_disable:attr.disabled}">

                <div>

                    <div class="applyManage_row applyManage_row_row1">
                        <div :class="{applyManage_col:true,applyManage_col_selectInput:true,applyManage_col_selectInput_size_large:attr.size==='large',applyManage_col_selectInput_size_medium:attr.size==='medium',applyManage_col_selectInput_size_small:attr.size==='small',applyManage_col_selectInput_size_min:attr.size==='min',applyManage_col_selectInput_checked:attr.checked,applyManage_col_selectInput_disable:attr.disabled}">

                            <div>

                                <lm2b-input-text
                                        ref="inputRef"
                                        refId="inputRef"
                                        v-show="pvt_isShow.selectInput === 'inputRef'"
                                        :paraVarPair="pvt_selectInput.inputRef.paraVarPair"
                                        :para="pvt_selectInput.inputRef.para"
                                        :attr="pvt_selectInput.inputRef.attr">
                                </lm2b-input-text>

                            </div>
                        </div>
                        <div :class="{applyManage_col:true,applyManage_col_selectBtn:true,applyManage_col_selectBtn_size_large:attr.size==='large',applyManage_col_selectBtn_size_medium:attr.size==='medium',applyManage_col_selectBtn_size_small:attr.size==='small',applyManage_col_selectBtn_size_min:attr.size==='min',applyManage_col_selectBtn_checked:attr.checked,applyManage_col_selectBtn_disable:attr.disabled}">

                            <div>

                                <div class="applyManage_row applyManage_row_row7">
                                    <div :class="{applyManage_col:true,applyManage_col_btnInner:true,applyManage_col_btnInner_size_large:attr.size==='large',applyManage_col_btnInner_size_medium:attr.size==='medium',applyManage_col_btnInner_size_small:attr.size==='small',applyManage_col_btnInner_size_min:attr.size==='min',applyManage_col_btnInner_checked:attr.checked,applyManage_col_btnInner_disable:attr.disabled}">

                                        <div>

                                            <lm2b-button
                                                    ref="selectBtnRef"
                                                    refId="selectBtnRef"
                                                    v-show="pvt_isShow.btnInner === 'selectBtnRef'"
                                                    :paraVarPair="pvt_btnInner.selectBtnRef.paraVarPair"
                                                    :para="pvt_btnInner.selectBtnRef.para"
                                                    :attr="pvt_btnInner.selectBtnRef.attr">
                                            </lm2b-button>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div class="applyManage_row applyManage_row_row2">
                        <div :class="{applyManage_col:true,applyManage_col_applyList:true,applyManage_col_applyList_size_large:attr.size==='large',applyManage_col_applyList_size_medium:attr.size==='medium',applyManage_col_applyList_size_small:attr.size==='small',applyManage_col_applyList_size_min:attr.size==='min',applyManage_col_applyList_checked:attr.checked,applyManage_col_applyList_disable:attr.disabled}">

                            <div>
                                <apply-item
                                        ref="applyItemRef"
                                        refId="applyItemRef"
                                        v-show="pvt_isShow.applyList === 'applyItemRef'"
                                        :paraVarPair="pvt_applyList.applyItemRef.paraVarPair"
                                        v-for="(item, index) in pvt_applyList.applyItemRef.forData"
                                        :number="index"
                                        :para="item.para"
                                        :attr="item.attr">
                                </apply-item>
                            </div>
                        </div>
                    </div>
                    <div class="applyManage_row applyManage_row_row5" v-show="itemIsEmpty">
                        <div :class="{applyManage_col:true,applyManage_col_emptyWrap:true,applyManage_col_emptyWrap_size_large:attr.size==='large',applyManage_col_emptyWrap_size_medium:attr.size==='medium',applyManage_col_emptyWrap_size_small:attr.size==='small',applyManage_col_emptyWrap_size_min:attr.size==='min',applyManage_col_emptyWrap_checked:attr.checked,applyManage_col_emptyWrap_disable:attr.disabled}">

                            <div class="applyManage_row applyManage_row_row6">
                                <div :class="{applyManage_col:true,applyManage_col_emptyImg:true,applyManage_col_emptyImg_size_large:attr.size==='large',applyManage_col_emptyImg_size_medium:attr.size==='medium',applyManage_col_emptyImg_size_small:attr.size==='small',applyManage_col_emptyImg_size_min:attr.size==='min',applyManage_col_emptyImg_checked:attr.checked,applyManage_col_emptyImg_disable:attr.disabled}">

                                    <lm2b-image
                                            ref="emptyImgRef"
                                            refId="emptyImgRef"
                                            v-show="pvt_isShow.emptyImg === 'emptyImgRef'"
                                            :paraVarPair="pvt_emptyImg.emptyImgRef.paraVarPair"
                                            :para="pvt_emptyImg.emptyImgRef.para"
                                            :attr="pvt_emptyImg.emptyImgRef.attr">
                                    </lm2b-image>
                                </div>
                            </div>
                            <div class="applyManage_row applyManage_row_row4">
                                <div :class="{applyManage_col:true,applyManage_col_emptyText:true,applyManage_col_emptyText_size_large:attr.size==='large',applyManage_col_emptyText_size_medium:attr.size==='medium',applyManage_col_emptyText_size_small:attr.size==='small',applyManage_col_emptyText_size_min:attr.size==='min',applyManage_col_emptyText_checked:attr.checked,applyManage_col_emptyText_disable:attr.disabled}">

                                    <lm2b-link-text
                                            ref="emptyTextRef"
                                            refId="emptyTextRef"
                                            v-show="pvt_isShow.emptyText === 'emptyTextRef'"
                                            :paraVarPair="pvt_emptyText.emptyTextRef.paraVarPair"
                                            :para="pvt_emptyText.emptyTextRef.para"
                                            :attr="pvt_emptyText.emptyTextRef.attr">
                                    </lm2b-link-text>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="applyManage_row applyManage_row_selectDialog" v-show="dialogWrap" @click.self="closeDialog">
            <!--新增-->
            <div :class="{applyManage_col:true,applyManage_col_selectDialog:true,applyManage_col_selectDialog_size_large:attr.size==='large',applyManage_col_selectDialog_size_medium:attr.size==='medium',applyManage_col_selectDialog_size_small:attr.size==='small',applyManage_col_selectDialog_size_min:attr.size==='min',applyManage_col_selectDialog_checked:attr.checked,applyManage_col_selectDialog_disable:attr.disabled,applyManage_dialog:true}">

                <div>

                    <select-dialog
                            ref="selectDialogRef"
                            refId="selectDialogRef"
                            v-show="pvt_isShow.selectDialog === 'selectDialogRef'"
                            :paraVarPair="pvt_selectDialog.selectDialogRef.paraVarPair"
                            :para="pvt_selectDialog.selectDialogRef.para"
                            :attr="pvt_selectDialog.selectDialogRef.attr">
                    </select-dialog>

                </div>
            </div>
        </div>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';
    import selectDialog from './selectDialog';
    import applyItem from './applyItem';

    export default {
        components: {selectDialog, applyItem},
        inject: ['sys'],
        props: ['refId', 'para', 'attr', 'number'],
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ['selectInput', 'selectDialog', 'applyList', 'btnInner', 'emptyImg', 'emptyText'],
                    subModule: ['inputRef', 'selectDialogRef', 'applyItemRef', 'selectBtnRef', 'emptyImgRef', 'emptyTextRef'],
                },
                pvt_isShow: {
                    selectInput: null,
                    selectDialog: null,
                    applyList: null,
                    btnInner: null,
                    emptyImg: null,
                    emptyText: null,
                },
                pvt_eventPortInput: ['orderDetailEvent'],

                billIdArr: [],
                sizeArr: [],
                dialogWrap: false,
                itemIsEmpty: false,
                inputContent: '',
                curStatus: -1,
                curTicket: '全部',

                mac: mac.mac
            };
        },
        watch: {},
        computed: {
            pvt_emptyImg: function () {
                return {
                    emptyImgRef: {
                        paraVarPair: {},
                        para: {
                            image: 'http://pic.51yuansu.com/pic3/cover/02/79/38/5a43641525cd6_610.jpg!/fw/260/quality/90/unsharp/true/compress/true',
                        },
                        attr: {},
                    },
                };
            },
            pvt_emptyText: function () {
                return {
                    emptyTextRef: {
                        paraVarPair: {},
                        para: {
                            textData: '没有报名申请',
                        },
                        attr: {
                            textAlign: 'center',
                            color: '#999',
                            fontSize: '12px',
                            background: '#f4f4f4'
                        },
                    },
                };
            },
            pvt_selectInput: function () {
                return {
                    inputRef: {
                        paraVarPair: {},
                        para: {
                            text: '',
                        },
                        attr: {
                            placeholder: '手机/报名人',
                            prefixIcon: 'van-icon-search',
                            isPlaceholder: false
                        },
                    },
                };
            },
            pvt_selectDialog: function () {
                return {
                    selectDialogRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: "medium"
                        },
                    },
                };
            },
            pvt_applyList: function () {
                let loopModule = {
                    applyItemRef: {
                        para: {
                            curBillId: this.billIdArr,
                        },
                        attr: {
                            size: this.sizeArr
                        },
                    },
                };
                let forData = this.pvt_createForData(loopModule);
                return {
                    applyItemRef: {
                        paraVarPair: {},
                        forData: forData.applyItemRef,
                    },
                };
            },
            pvt_btnInner: function () {
                return {
                    selectBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['筛选', 'van-icon-filter-o'],
                        },
                        attr: {
                            type: 'text',
                            iconIsRight: true,
                            height: '100%'
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
                let fnname = 'applyManage_start';
                let dbFlag;
                let dbData;
                let tableName;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0,
                    refArr: ['emptyImgRef', 'emptyTextRef', 'inputRef', 'selectBtnRef']
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
                        case 'getApplyData':
                            that.curActivityId = curActivityId;
                            that.itemIsEmpty = false;
                            that.inputContent = '';
                            that.billIdArr = [];
                            that.sizeArr = [];

                            that.inputOrderData(0, function () {
                                that.getBillData('', function () {
                                    that.forceUpdateData(function () {
                                        para.nStep = 'start_sub';
                                        if (++dbFlag === 2) {
                                            that.startModule(curActivityId, successCallBack, errorCallBack)
                                        }
                                    });
                                }, function () {
                                });
                            }, function () {
                            });
                            break;
                        case 'start_sub':
                            if (para.i >= para.refArr.length) {
                                para.i = 0;
                                if (that.itemIsEmpty) {
                                    para.nStep = 'showSubModule';
                                } else {
                                    para.refArr.shift();
                                    para.refArr.shift();
                                    para.refArr.push('applyItemRef');
                                    para.nStep = 'applyStart';
                                }
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
                            if (para.i > that.sm.applyItemRef.length - 1) {
                                para.i = 0;
                                para.nStep = 'showSubModule';
                                dbFlag++;
                                break;
                            }

                            that.sm.applyItemRef[para.i].startModule(function () {
                                para.i++;
                                para.nStep = 'applyStart';
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

            inputOrderData: function (startNum, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'applyManage_inputOrderData';
                let dbFlag;
                let dbData;
                let tableName;
                let record;
                let portName;
                let inputData;
                let expression;
                let start;
                let total;
                let sort;
                let destGeneSite;
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
                        case 'getTerActivityId':
                            tableName = that.mac.tb.groupActivity;
                            record = [that.curActivityId];
                            that.sys.api.getSourceRecord(tableName, record, function (result) {
                                para.terActivityId = result[0];
                                para.nStep = 'inputData';
                                if (++dbFlag === 2) {
                                    that.inputOrderData(startNum, successCallBack, errorCallBack)
                                }
                            }, function (error) {
                            });
                            break;
                        case 'inputData':
                            expression = that.mac.fd.groupActivityOrder.groupActivityID + '=' + para.terActivityId;
                            start = startNum;
                            total = 10;
                            sort = ['id,asc'];
                            destGeneSite = '';
                            portName = this.mac.tb.groupActivityOrder;
                            inputData = null;
                            this.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.inputOrderData(startNum, successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error)
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

            getBillData: function (condition, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'applyManage_getBillData';
                let dbFlag;
                let dbData;
                let tableName;
                let expression;
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
                        case 'getBillData':
                            tableName = this.mac.tb.groupActivityBill;
                            expression = condition;
                            dbData = {};
                            dbData[that.mac.fd.id] = [];
                            this.sys.api.recordQuery(tableName, null, expression, dbData, function (result) {
                                if (dbData[that.mac.fd.id].length > 0) {
                                    that.itemIsEmpty = false;
                                    for (let i = 0; i < dbData[that.mac.fd.id].length; i++) {
                                        that.billIdArr.push(dbData[that.mac.fd.id][i]);
                                        that.sizeArr.push('medium');
                                    }
                                } else {
                                    that.itemIsEmpty = true;
                                }

                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.getBillData(condition, successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error)
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

            selectInputChange: function (value) {
                this.inputContent = value;
                this.billListRefresh(this.curStatus, this.curTicket, function () {
                }, function () {
                })
            },
            showDialog: function () {
                let that = this;
                that.dialogWrap = true;
                that.showSubModule('selectDialogRef', true, function () {
                    that.sm.selectDialogRef.startModule(function () {
                    }, function () {
                    });
                }, function () {
                });
            },
            billListRefresh: function (status, ticket, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'applyManage_billListRefresh';
                let dbFlag;
                let dbData;
                let tableName;
                let conditionData;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0,
                    isEmpty: true,
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
                            that.billIdArr = [];
                            that.sizeArr = [];
                            that.itemIsEmpty = false;
                            that.curStatus = status;
                            that.curTicket = ticket;

                            switch (ticket) {
                                case '全部':
                                    // 对父表有要求，订单表的活动id必须一致
                                    if (status === -1 && that.inputContent === '') {
                                        para.condition = '';
                                    } else if (status !== -1 && that.inputContent !== '') {
                                        para.condition = '(' + this.mac.fd.groupActivityBill.name + '="' + that.inputContent + '"||' + this.mac.fd.groupActivityBill.mobile + '="' + that.inputContent + '")&&' + this.mac.fd.groupActivityBill.status + '=' + status;
                                    } else if (status === -1 && that.inputContent !== '') {
                                        para.condition = this.mac.fd.groupActivityBill.name + '="' + that.inputContent + '"||' + this.mac.fd.groupActivityBill.mobile + '="' + that.inputContent + '"';
                                    } else if (status !== -1 && that.inputContent === '') {
                                        para.condition = this.mac.fd.groupActivityBill.status + '=' + status
                                    }
                                    break;
                                case '免费':
                                    // 对父表有要求，订单表的活动id必须一致，同时price字段为0
                                    if (status === -1 && that.inputContent === '') {
                                        para.condition = '';
                                    } else if (status !== -1 && that.inputContent !== '') {
                                        para.condition = '(' + this.mac.fd.groupActivityBill.name + '="' + that.inputContent + '"||' + this.mac.fd.groupActivityBill.mobile + '="' + that.inputContent + '")&&' + this.mac.fd.groupActivityBill.status + '=' + status;
                                    } else if (status === -1 && that.inputContent !== '') {
                                        para.condition = this.mac.fd.groupActivityBill.name + '="' + that.inputContent + '"||' + this.mac.fd.groupActivityBill.mobile + '="' + that.inputContent + '"';
                                    } else if (status !== -1 && that.inputContent === '') {
                                        para.condition = this.mac.fd.groupActivityBill.status + '=' + status;
                                    }
                                    break;
                                case '收费':
                                    // 对父表有要求，订单表的活动id必须一致，同时price字段不为0
                                    if (status === -1 && that.inputContent === '') {
                                        para.condition = '';
                                    } else if (status !== -1 && that.inputContent !== '') {
                                        para.condition = '(' + this.mac.fd.groupActivityBill.name + '="' + that.inputContent + '"||' + this.mac.fd.groupActivityBill.mobile + '="' + that.inputContent + '")&&' + this.mac.fd.groupActivityBill.status + '=' + status;
                                    } else if (status === -1 && that.inputContent !== '') {
                                        para.condition = this.mac.fd.groupActivityBill.name + '="' + that.inputContent + '"||' + this.mac.fd.groupActivityBill.mobile + '="' + that.inputContent + '"';
                                    } else if (status !== -1 && that.inputContent === '') {
                                        para.condition = this.mac.fd.groupActivityBill.status + '=' + status;
                                    }
                                    break;
                            }

                            that.getBillData(para.condition, function () {
                                para.nStep = 'isEmpty';
                                that.forceUpdateData(function () {
                                    if (++dbFlag === 2) {
                                        that.billListRefresh(status, ticket, successCallBack, errorCallBack)
                                    }
                                });
                            }, function () {
                            });
                            break;
                        case 'isEmpty':
                            if (that.itemIsEmpty) {
                                that.showSubModule(['emptyImgRef', 'emptyTextRef'], true, function () {
                                    para.nStep = 'end';
                                    if (++dbFlag === 2) {
                                        that.billListRefresh(status, ticket, successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack);
                            } else {
                                that.showSubModule(['emptyImgRef', 'emptyTextRef'], false, function () {
                                }, para.errorCallBack);
                                para.nStep = 'refreshItems';
                                dbFlag++;
                            }
                            break;
                        case 'refreshItems':
                            if (para.i > that.sm.applyItemRef.length - 1) {
                                para.i = 0;
                                para.nStep = 'end';
                                dbFlag++;
                                break;
                            }

                            that.sm.applyItemRef[para.i].startModule(function () {
                                para.i++;
                                para.nStep = 'refreshItems';
                                if (++dbFlag === 2) {
                                    that.billListRefresh(status, ticket, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'end':
                            this.closeDialog();
                            para.successCallBack();
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },
            loadMore: function () {
            },
            closeDialog: function () {
                this.dialogWrap = false;
                this.showSubModule('selectDialogRef', false, function () {
                }, function () {
                });
            },


            // 公开方法：
            applyListRefresh(terBillIdArr, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'applyManage_applyListRefresh';
                let dbFlag;
                let dbData;
                let tableName;
                let condition;
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

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                        case 'getCheckBill':
                            tableName = this.mac.tb.groupActivityBill;
                            condition = that.mac.fd.groupActivityBill.status + '=' + that.mac.enum.groupActivityBill.status.check;
                            dbData = {};
                            dbData[that.mac.fd.id] = [];
                            this.sys.api.recordQuery(tableName, null, condition, dbData, function (result) {
                                para.approvalNum = dbData[that.mac.fd.id].length;

                                para.nStep = 'getRefundBill';
                                if (++dbFlag === 2) {
                                    that.applyListRefresh(terBillIdArr, successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'getRefundBill':
                            tableName = this.mac.tb.groupActivityBill;
                            condition = that.mac.fd.groupActivityBill.status + '=' + that.mac.enum.groupActivityBill.status.refund;
                            dbData = {};
                            dbData[that.mac.fd.id] = [];
                            this.sys.api.recordQuery(tableName, null, condition, dbData, function (result) {
                                para.refundNum = dbData[that.mac.fd.id].length;

                                that.forceUpdateData(function () {
                                    para.nStep = 'applyRefresh';
                                    if (++dbFlag === 2) {
                                        that.applyListRefresh(terBillIdArr, successCallBack, errorCallBack)
                                    }
                                });
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'applyRefresh':
                            if (para.i > that.sm.applyItemRef.length - 1) {
                                para.i = 0;
                                para.nStep = 'end';
                                dbFlag++;
                                break;
                            }

                            that.sm.applyItemRef[para.i].startModule(function () {
                                para.i++;
                                para.nStep = 'applyRefresh';
                                if (++dbFlag === 2) {
                                    that.applyListRefresh(terBillIdArr, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'end':
                            para.successCallBack(para.refundNum + para.approvalNum);
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },

            inputRef_inputEnterEvent: function (value) {
                this.selectInputChange(value);
            },
            applyItemRef_orderDetailEvent: function (curBillId, successCallBack, errorCallBack) {
                this.ep.orderDetailEvent(curBillId, successCallBack, errorCallBack);
            },
            selectDialogRef_confirmEvent: function (status, ticket, successCallBack, errorCallBack) {
                this.billListRefresh(status, ticket, successCallBack, errorCallBack);
            },
            selectBtnRef_buttonClickEvent: function () {
                this.showDialog();
            },
        },
    };
</script>
<style lang="less" scoped>
    @import "../../../../assets/var_kzt"; /*新增*/
    .applyManage_row {
        display: flex;
        flex: 1;
    }

    .applyManage_col {
        display: flex;
        flex-direction: column;
    }

    .applyManage_col_applyManageWindow_size_medium {
        width: @applyManage-applyManageWindow-medium-width;
    }

    .applyManage_col_selectInput_size_medium {
        width: @applyManage-selectInput-medium-width;
        height: @applyManage-selectInput-medium-height;
        padding: @applyManage-selectInput-medium-padding;
        background-color: mix(@applyManage-selectInput-medium-background-color, #fff, @applyManage-selectInput-medium-background-color-opacity);
    }

    .applyManage_col_selectInput {
        border-style: @applyManage-selectInput-border-style;
        border-width: @applyManage-selectInput-border-width;
        border-radius: @applyManage-selectInput-border-radius;
        border-color: mix(@applyManage-selectInput-border-color, #fff, @applyManage-selectInput-hover-border-color-opacity);
    }

    .applyManage_col_selectBtn_size_medium {
        width: @applyManage-selectBtn-medium-width;
        padding: @applyManage-selectBtn-medium-padding;
        align-items: @applyManage-selectBtn-medium-horizontal-position;
        justify-content: @applyManage-selectBtn-medium-vertical-position;
        background-color: mix(@applyManage-selectBtn-medium-background-color, #fff, @applyManage-selectBtn-medium-background-color-opacity);
    }

    .applyManage_col_selectBtn {
        border-style: @applyManage-selectBtn-border-style;
        border-width: @applyManage-selectBtn-border-width;
        border-color: mix(@applyManage-selectBtn-border-color, #fff, @applyManage-selectBtn-hover-border-color-opacity);
    }

    .applyManage_col_applyList_size_medium {
        width: @applyManage-applyList-medium-width;
        background-color: mix(@applyManage-applyList-medium-background-color, #fff, @applyManage-applyList-medium-background-color-opacity);
    }

    .applyManage_col_selectDialog_size_medium {
        width: @applyManage-selectDialog-medium-width;
        height: @applyManage-selectDialog-medium-height;
    }

    .applyManage_col_btnInner_size_medium {
        width: @applyManage-btnInner-medium-width;
        padding: @applyManage-btnInner-medium-padding;
    }

    .applyManage_col_btnInner {
        border-style: @applyManage-btnInner-border-style;
        border-width: @applyManage-btnInner-border-width;
        border-color: mix(@applyManage-btnInner-border-color, #fff, @applyManage-btnInner-hover-border-color-opacity);
    }

    .applyManage_col_emptyWrap_size_medium {
        width: @applyManage-emptyWrap-medium-width;
        padding: @applyManage-emptyWrap-medium-padding;
        align-items: @applyManage-emptyWrap-medium-horizontal-position;
        justify-content: @applyManage-emptyWrap-medium-vertical-position;
    }

    .applyManage_col_emptyImg_size_medium {
        width: @applyManage-emptyImg-medium-width;
        height: @applyManage-emptyImg-medium-height;
        margin: @applyManage-emptyImg-medium-margin;
        align-items: @applyManage-emptyImg-medium-horizontal-position;
        justify-content: @applyManage-emptyImg-medium-vertical-position;
    }

    .applyManage_col_emptyImg {
        border-radius: @applyManage-emptyImg-border-radius;
        overflow: hidden;
    }

    .applyManage_col_emptyText_size_medium {
        width: @applyManage-emptyText-medium-width;
        align-items: @applyManage-emptyText-medium-horizontal-position;
        justify-content: @applyManage-emptyText-medium-vertical-position;
    }

    .applyManage_dialog {
        position: fixed;
        overflow: auto;
        right: 0;
        top: 0; /*新增*/
    }

    .applyManage_row_selectDialog { /*新增*/
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 12;
    }
</style>