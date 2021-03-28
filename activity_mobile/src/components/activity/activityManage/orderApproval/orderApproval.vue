<template>
    <div class="orderApproval_container">

        <div class="orderApproval_row orderApproval_row_confirmDialog" v-show="dialogWrap">
            <div :class="{orderApproval_col:true,orderApproval_col_confirmDialog:true,orderApproval_col_confirmDialog_size_large:attr.size==='large',orderApproval_col_confirmDialog_size_medium:attr.size==='medium',orderApproval_col_confirmDialog_size_small:attr.size==='small',orderApproval_col_confirmDialog_size_min:attr.size==='min',orderApproval_col_confirmDialog_checked:attr.checked,orderApproval_col_confirmDialog_disable:attr.disabled,orderApproval_dialog:true}">

                <confirm-dialog
                        ref="confirmDialogRef"
                        refId="confirmDialogRef"
                        v-if="pvt_isShow.confirmDialog === 'confirmDialogRef'"
                        :paraVarPair="pvt_confirmDialog.confirmDialogRef.paraVarPair"
                        :para="pvt_confirmDialog.confirmDialogRef.para"
                        :attr="pvt_confirmDialog.confirmDialogRef.attr">
                </confirm-dialog>
                <reject-dialog
                        ref="rejectDialogRef"
                        refId="rejectDialogRef"
                        v-if="pvt_isShow.confirmDialog === 'rejectDialogRef'"
                        :paraVarPair="pvt_confirmDialog.rejectDialogRef.paraVarPair"
                        :para="pvt_confirmDialog.rejectDialogRef.para"
                        :attr="pvt_confirmDialog.rejectDialogRef.attr">
                </reject-dialog>
            </div>
        </div>
        <div class="orderApproval_row orderApproval_row_orderApprovalRow">
            <div :class="{orderApproval_col:true,orderApproval_col_orderApprovalWindow:true,orderApproval_col_orderApprovalWindow_size_large:attr.size==='large',orderApproval_col_orderApprovalWindow_size_medium:attr.size==='medium',orderApproval_col_orderApprovalWindow_size_small:attr.size==='small',orderApproval_col_orderApprovalWindow_size_min:attr.size==='min',orderApproval_col_orderApprovalWindow_checked:attr.checked,orderApproval_col_orderApprovalWindow_disable:attr.disabled}">

                <div class="orderApproval_row orderApproval_row_row1">
                    <div :class="{orderApproval_col:true,orderApproval_col_header:true,orderApproval_col_header_size_large:attr.size==='large',orderApproval_col_header_size_medium:attr.size==='medium',orderApproval_col_header_size_small:attr.size==='small',orderApproval_col_header_size_min:attr.size==='min',orderApproval_col_header_checked:attr.checked,orderApproval_col_header_disable:attr.disabled}">

                        <manage_header
                                ref="headerRef"
                                refId="headerRef"
                                v-show="pvt_isShow.header === 'headerRef'"
                                :paraVarPair="pvt_header.headerRef.paraVarPair"
                                :para="pvt_header.headerRef.para"
                                :attr="pvt_header.headerRef.attr">
                        </manage_header>
                    </div>
                </div>
                <div class="scroll-wrap">
                    <div class="orderApproval_row orderApproval_row_row2" v-show="!itemIsEmpty">
                        <div :class="{orderApproval_col:true,orderApproval_col_checkbox:true,orderApproval_col_checkbox_size_large:attr.size==='large',orderApproval_col_checkbox_size_medium:attr.size==='medium',orderApproval_col_checkbox_size_small:attr.size==='small',orderApproval_col_checkbox_size_min:attr.size==='min',orderApproval_col_checkbox_checked:attr.checked,orderApproval_col_checkbox_disable:attr.disabled}">

                            <lm2b-checkbox
                                    ref="checkboxRef"
                                    refId="checkboxRef"
                                    v-show="pvt_isShow.checkbox === 'checkboxRef'"
                                    :paraVarPair="pvt_checkbox.checkboxRef.paraVarPair"
                                    :para="pvt_checkbox.checkboxRef.para"
                                    :attr="pvt_checkbox.checkboxRef.attr">
                            </lm2b-checkbox>
                        </div>
                        <div :class="{orderApproval_col:true,orderApproval_col_selectNum:true,orderApproval_col_selectNum_size_large:attr.size==='large',orderApproval_col_selectNum_size_medium:attr.size==='medium',orderApproval_col_selectNum_size_small:attr.size==='small',orderApproval_col_selectNum_size_min:attr.size==='min',orderApproval_col_selectNum_checked:attr.checked,orderApproval_col_selectNum_disable:attr.disabled}">

                            <lm2b-link-text
                                    ref="selectNumRef"
                                    refId="selectNumRef"
                                    v-show="pvt_isShow.selectNum === 'selectNumRef'"
                                    :paraVarPair="pvt_selectNum.selectNumRef.paraVarPair"
                                    :para="pvt_selectNum.selectNumRef.para"
                                    :attr="pvt_selectNum.selectNumRef.attr">
                            </lm2b-link-text>
                        </div>
                    </div>
                    <div class="orderApproval_row orderApproval_row_row3">
                        <div :class="{orderApproval_col:true,orderApproval_col_selectList:true,orderApproval_col_selectList_size_large:attr.size==='large',orderApproval_col_selectList_size_medium:attr.size==='medium',orderApproval_col_selectList_size_small:attr.size==='small',orderApproval_col_selectList_size_min:attr.size==='min',orderApproval_col_selectList_checked:attr.checked,orderApproval_col_selectList_disable:attr.disabled}">
                            <order-select-item
                                    ref="selectItemRef"
                                    refId="selectItemRef"
                                    v-show="pvt_isShow.selectList === 'selectItemRef'"
                                    :paraVarPair="pvt_selectList.selectItemRef.paraVarPair"
                                    v-for="(item, index) in pvt_selectList.selectItemRef.forData"
                                    :number="index"
                                    :para="item.para"
                                    :attr="item.attr">
                            </order-select-item>
                        </div>
                    </div>
                    <div class="orderApproval_row orderApproval_row_row5" v-show="itemIsEmpty">
                        <div :class="{orderApproval_col:true,orderApproval_col_emptyWrap:true,orderApproval_col_emptyWrap_size_large:attr.size==='large',orderApproval_col_emptyWrap_size_medium:attr.size==='medium',orderApproval_col_emptyWrap_size_small:attr.size==='small',orderApproval_col_emptyWrap_size_min:attr.size==='min',orderApproval_col_emptyWrap_checked:attr.checked,orderApproval_col_emptyWrap_disable:attr.disabled}">

                            <div class="orderApproval_row orderApproval_row_row6">
                                <div :class="{orderApproval_col:true,orderApproval_col_emptyImg:true,orderApproval_col_emptyImg_size_large:attr.size==='large',orderApproval_col_emptyImg_size_medium:attr.size==='medium',orderApproval_col_emptyImg_size_small:attr.size==='small',orderApproval_col_emptyImg_size_min:attr.size==='min',orderApproval_col_emptyImg_checked:attr.checked,orderApproval_col_emptyImg_disable:attr.disabled}">

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
                            <div class="orderApproval_row orderApproval_row_row7">
                                <div :class="{orderApproval_col:true,orderApproval_col_emptyText:true,orderApproval_col_emptyText_size_large:attr.size==='large',orderApproval_col_emptyText_size_medium:attr.size==='medium',orderApproval_col_emptyText_size_small:attr.size==='small',orderApproval_col_emptyText_size_min:attr.size==='min',orderApproval_col_emptyText_checked:attr.checked,orderApproval_col_emptyText_disable:attr.disabled}">

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
                <div class="orderApproval_row orderApproval_row_row4" v-show="!itemIsEmpty">
                    <div :class="{orderApproval_col:true,orderApproval_col_reject:true,orderApproval_col_reject_size_large:attr.size==='large',orderApproval_col_reject_size_medium:attr.size==='medium',orderApproval_col_reject_size_small:attr.size==='small',orderApproval_col_reject_size_min:attr.size==='min',orderApproval_col_reject_checked:attr.checked,orderApproval_col_reject_disable:attr.disabled}">

                        <lm2b-button
                                ref="rejectRef"
                                refId="rejectRef"
                                v-show="pvt_isShow.reject === 'rejectRef'"
                                :paraVarPair="pvt_reject.rejectRef.paraVarPair"
                                :para="pvt_reject.rejectRef.para"
                                :attr="pvt_reject.rejectRef.attr">
                        </lm2b-button>
                    </div>
                    <div :class="{orderApproval_col:true,orderApproval_col_pass:true,orderApproval_col_pass_size_large:attr.size==='large',orderApproval_col_pass_size_medium:attr.size==='medium',orderApproval_col_pass_size_small:attr.size==='small',orderApproval_col_pass_size_min:attr.size==='min',orderApproval_col_pass_checked:attr.checked,orderApproval_col_pass_disable:attr.disabled}">

                        <lm2b-button
                                ref="passRef"
                                refId="passRef"
                                v-show="pvt_isShow.pass === 'passRef'"
                                :paraVarPair="pvt_pass.passRef.paraVarPair"
                                :para="pvt_pass.passRef.para"
                                :attr="pvt_pass.passRef.attr">
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
    import manage_header from '../manageHeader/manageHeader';
    import orderSelectItem from './orderSelectItem';
    import confirmDialog from '../confirmDialog';
    import rejectDialog from './rejectDialog';

    export default {
        components: {manage_header, confirmDialog, orderSelectItem, rejectDialog},
        inject: ['sys'],
        props: ['refId', 'para', 'attr', 'number'],
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ['header', 'checkbox', 'selectNum', 'selectList', 'reject', 'pass', 'confirmDialog', 'confirmDialog', 'emptyImg', 'emptyText'],
                    subModule: ['headerRef', 'checkboxRef', 'selectNumRef', 'selectItemRef', 'rejectRef', 'passRef', 'confirmDialogRef', 'rejectDialogRef', 'emptyImgRef', 'emptyTextRef'],
                },
                pvt_isShow: {
                    header: null,
                    checkbox: null,
                    selectNum: null,
                    selectList: null,
                    reject: null,
                    pass: null,
                    confirmDialog: null,
                    emptyImg: null,
                    emptyText: null,
                },
                pvt_eventPortInput: ['orderDetailEvent', 'backEvent', 'orderApprovalEvent'],

                allSelected: [],
                itemSelectedArr: [],
                selectNumText: '共选中 0 笔',
                selectNum: 0,
                curBillIdArr: [],
                itemSizeArr: [],
                dialogWrap: false,
                itemIsEmpty: false,
                curActivityId: null,

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
                            textData: '没有待审批订单',
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
            pvt_checkbox: function () {
                return {
                    checkboxRef: {
                        paraVarPair: {
                            checkData: 'allSelected',
                        },
                        para: {
                            checkData: this.allSelected,
                        },
                        attr: {
                            checkboxArr: [{label: 1, text: '全选'}],
                            define: ['van-icon-circle', 'van-icon-passed'],
                            size: 'mini',
                        },
                    },
                };
            },
            pvt_selectNum: function () {
                return {
                    selectNumRef: {
                        paraVarPair: {
                            textData: 'selectNumText',
                        },
                        para: {
                            textData: this.selectNumText,
                        },
                        attr: {
                            color: '#666',
                            fontSize: '12px',
                            background: '#F4F4F4'
                        },
                    },
                };
            },
            pvt_selectList: function () {
                let loopModule = {
                    selectItemRef: {
                        para: {
                            curBillId: this.curBillIdArr,
                        },
                        attr: {
                            size: this.itemSizeArr,
                        },
                    },
                };
                let forData = this.pvt_createForData(loopModule);
                return {
                    selectItemRef: {
                        paraVarPair: {
                            curBillId: 'curBillIdArr',
                        },
                        forData: forData.selectItemRef,
                    },
                };
            },
            pvt_reject: function () {
                return {
                    rejectRef: {
                        paraVarPair: {},
                        para: {
                            name: ['不通过', 'van-icon-close'],
                        },
                        attr: {
                            type: 'text',
                            width: '100%',
                        },
                    },
                };
            },
            pvt_pass: function () {
                return {
                    passRef: {
                        paraVarPair: {},
                        para: {
                            name: ['通过', 'van-icon-passed'],
                        },
                        attr: {
                            type: 'text',
                            width: '100%',
                        },
                    },
                };
            },
            pvt_confirmDialog: function () {
                return {
                    confirmDialogRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium',
                        },
                    },
                    rejectDialogRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium'
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
                let fnname = 'orderApproval_start';
                let dbFlag;
                let dbData;
                let tableName;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0,
                    refArr: ['emptyImgRef', 'emptyTextRef', 'checkboxRef', 'selectNumRef', 'rejectRef', 'passRef']
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
                        case 'getApprovalData':
                            that.curActivityId = curActivityId;
                            that.itemIsEmpty = false;
                            that.dialogWrap = false;
                            that.allSelected = [];
                            that.itemSelectedArr = [];
                            that.curBillIdArr = [];

                            that.inputOrderData(0, function () {
                                let billCondition = that.mac.fd.groupActivityBill.status + '=' + that.mac.enum.groupActivityBill.status.check;
                                that.getBillData(billCondition, function () {
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
                                    para.nStep = 'headStart';
                                } else {
                                    para.refArr.shift();
                                    para.refArr.shift();
                                    para.refArr.push('selectItemRef');
                                    para.nStep = 'itemStart';
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
                        case 'itemStart':
                            if (para.i > that.sm.selectItemRef.length - 1) {
                                para.i = 0;
                                para.nStep = 'headStart';
                                dbFlag++;
                                break;
                            }

                            that.sm.selectItemRef[para.i].startModule(false, function () {
                                para.i++;
                                para.nStep = 'itemStart';
                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'headStart':
                            let headData = {
                                ref: 'approval',
                                title: '名单审核',
                                badgeNum: 0,
                                reference: null,
                                showMenu: false
                            };
                            that.sm.headerRef.startModule(headData, function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(curActivityId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            para.refArr.push('headerRef');
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
                let fnname = 'orderApproval_inputOrderData';
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
                let fnname = 'orderApproval_getBillData';
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
                                    for (let i = 0; i < dbData[that.mac.fd.id].length; i++) {
                                        that.curBillIdArr.push(dbData[that.mac.fd.id][i]);
                                        that.itemSizeArr.push('medium');
                                        that.itemSelectedArr.push(false);
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

            orderApprovalRefresh: function (successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'orderApproval_orderApprovalRefresh';
                let dbFlag;
                let dbData;
                let tableName;
                let record;
                let expression;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0,
                    selectBillIdArr: []
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
                            that.dialogWrap = false;

                            for (let i = that.itemSelectedArr.length - 1; i >= 0; i--) {
                                if (that.itemSelectedArr[i] === true) {
                                    para.selectBillIdArr.push(that.curBillIdArr[i]);
                                    that.curBillIdArr.splice(i, 1);
                                    that.itemSelectedArr.splice(i, 1);
                                    that.itemSizeArr.splice(i, 1);
                                }
                            }

                            if (that.curBillIdArr.length === 0) {
                                that.itemIsEmpty = true;
                                para.nStep = 'showEmpty';
                            } else {
                                that.itemIsEmpty = false;
                                para.nStep = 'refreshItems';
                            }

                            that.forceUpdateData(function () {
                                if (++dbFlag === 2) {
                                    that.orderApprovalRefresh(successCallBack, errorCallBack)
                                }
                            });
                            break;
                        case 'refreshItems':
                            if (para.i > that.sm.selectItemRef.length - 1) {
                                para.i = 0;
                                para.nStep = 'end';
                                dbFlag++;
                                break;
                            }

                            that.sm.selectItemRef[para.i].startModule(false, function () {
                                para.i++;
                                para.nStep = 'refreshItems';
                                if (++dbFlag === 2) {
                                    that.orderApprovalRefresh(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showEmpty':
                            that.showSubModule(['emptyImgRef', 'emptyTextRef'], true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.orderApprovalRefresh(successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'end':
                            para.successCallBack(para.selectBillIdArr);
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },

            modifyData(selectBillIdArr, rejectReason, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'orderApproval_modifyData';
                let dbFlag;
                let dbData;
                let tableName;
                let record;
                let expression;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0,
                    selectBillIdArr: []
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
                        case 'modifyData':
                            tableName = this.mac.tb.groupActivityBill;
                            dbData = {};
                            dbData[that.mac.fd.id] = selectBillIdArr;
                            dbData[this.mac.fd.groupActivityBill.status] = [];
                            if (rejectReason === null) {
                                for (let i = 0; i < selectBillIdArr.length; i++) {
                                    dbData[this.mac.fd.groupActivityBill.status].push(this.mac.enum.groupActivityBill.status.checkTicket)
                                }
                            } else {
                                for (let i = 0; i < selectBillIdArr.length; i++) {
                                    dbData[this.mac.fd.groupActivityBill.status].push(this.mac.enum.groupActivityBill.status.reject)
                                }
                            }

                            that.sys.api.recordModify(tableName, dbData, function () {
                                if (rejectReason === null) {
                                    that.$notify({type: 'success', message: '审核通过！'});
                                } else {
                                    that.$notify({type: 'success', message: '操作成功！'});
                                }

                                para.nStep = 'orderApprovalOut';
                                if (++dbFlag === 2) {
                                    that.modifyData(selectBillIdArr, rejectReason, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'orderApprovalOut':
                            tableName = this.mac.tb.groupActivityBill;
                            record = selectBillIdArr;
                            that.sys.api.getSourceRecord(tableName, record, function (result) {
                                // 向云端发事件，修改数据：
                                if (rejectReason === null) {
                                    that.ep.orderApprovalEvent(result, 0, rejectReason, function () {
                                    }, function () {
                                    });
                                } else {
                                    that.ep.orderApprovalEvent(result, 1, rejectReason, function () {
                                    }, function () {
                                    });
                                }

                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.modifyData(selectBillIdArr, rejectReason, successCallBack, errorCallBack)
                                }
                            }, function () {
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

            orderReject(rejectReason, successCallBack, errorCallBack) {
                let that = this;
                that.orderApprovalRefresh(function (selectBillIdArr) {
                    that.modifyData(selectBillIdArr, rejectReason, function () {
                        successCallBack()
                    }, function () {
                    })
                }, function () {

                })
            },

            changeAllSelected: function (select, curBillId) {
                // 同步ItemSelectedArr中的数据：
                for (let i = 0; i < this.curBillIdArr.length; i++) {
                    if (curBillId === this.curBillIdArr[i]) {
                        select ? this.itemSelectedArr[i] = true : this.itemSelectedArr[i] = false;
                        break;
                    }
                }

                // 判断是否需要勾选全选按钮：
                if (select) {
                    this.selectNum++;
                    this.selectNumText = '已选取 ' + this.selectNum + ' 笔';

                    let isAll = true;

                    for (let i = 0; i < this.itemSelectedArr.length; i++) {
                        if (this.itemSelectedArr[i] === false) {
                            isAll = false;
                            break;
                        }
                    }
                    if (isAll) {
                        if (this.allSelected.length === 0) {
                            this.allSelected = [1];
                            this.$nextTick(function () {
                                this.sm.checkboxRef.startModule(function () {
                                }, function () {
                                });
                            });
                        }
                    } else {
                        if (this.allSelected.length === 1) {
                            this.allSelected = [];
                            this.$nextTick(function () {
                                this.sm.checkboxRef.startModule(function () {
                                }, function () {
                                });
                            });
                        }
                    }
                } else {
                    this.selectNum--;
                    this.selectNumText = '已选取 ' + this.selectNum + ' 笔';

                    if (this.allSelected.length === 1) {
                        this.allSelected.pop();
                        this.$nextTick(function () {
                            this.sm.checkboxRef.startModule(function () {
                            }, function () {
                            });
                        });
                    }
                }

                this.$nextTick(function () {
                    this.sm.selectNumRef.startModule(function () {
                    }, function () {
                    });
                });
            },

            selectAllApply: function () {
                if (this.allSelected.length > 0) {
                    // 设置选取的数量：
                    this.selectNum = this.itemSelectedArr.length;
                    this.selectNumText = '已选取 ' + this.selectNum + ' 笔';

                    // 同步ItemSelectedArr中的值
                    for (let i = 0; i < this.itemSelectedArr.length; i++) {
                        this.itemSelectedArr[i] = true;
                    }
                    for (let i = 0; i < this.sm.selectItemRef.length; i++) {
                        this.sm.selectItemRef[i].selectApply(true);
                    }
                } else {
                    this.selectNum = 0;
                    this.selectNumText = '已选取 0 笔';

                    for (let i = 0; i < this.itemSelectedArr.length; i++) {
                        this.itemSelectedArr[i] = false;
                    }
                    for (let i = 0; i < this.sm.selectItemRef.length; i++) {
                        this.sm.selectItemRef[i].selectApply(false);
                    }
                }

                this.$nextTick(function () {
                    this.sm.selectNumRef.startModule(function () {
                    }, function () {
                    });
                });
            },



            showRejectDialog: function () {
                let that = this;

                let isSelect = false;
                for (let i = that.itemSelectedArr.length - 1; i >= 0; i--) {
                    if (that.itemSelectedArr[i] === true) {
                        isSelect = true;
                        break;
                    }
                }
                if (!isSelect) {
                    that.$notify({type: 'warning', message: '请选择一条记录进行操作！'});
                    return;
                }

                that.dialogWrap = true;
                that.showSubModule('rejectDialogRef', true, function () {
                    that.sm.rejectDialogRef.startModule(function () {
                    }, function () {
                    });
                }, function () {
                });
            },
            showConfirmDialog: function () {
                let that = this;

                let isSelect = false;
                for (let i = that.itemSelectedArr.length - 1; i >= 0; i--) {
                    if (that.itemSelectedArr[i] === true) {
                        isSelect = true;
                        break;
                    }
                }
                if (!isSelect) {
                    that.$notify({type: 'warning', message: '请选择一条记录进行操作！'});
                    return;
                }

                let data = {
                    ref: 'pass',
                    title: '',
                    desc: '确定同意通过审核吗？',
                    btnText: ['取消', '确定']
                };
                that.dialogWrap = true;
                that.showSubModule('confirmDialogRef', true, function () {
                    that.sm.confirmDialogRef.startModule(data, function () {
                    }, function () {
                    });
                }, function () {
                });
            },
            confirmDialogConfirm: function (refId) {
                let that = this;
                that.orderApprovalRefresh(function (selectBillIdArr) {
                    that.modifyData(selectBillIdArr, null, function () {
                    }, function () {
                    })
                }, function () {

                })
            },
            confirmDialogCancel: function (refId) {
                this.dialogWrap = false;
            },
            rejectDialogCancel: function () {
                this.dialogWrap = false;
            },
            closeSelf: function () {
                this.ep.backEvent();
                this.hideSelfModule(this.refId, function () {
                }, function () {
                });
            },


            // 公开方法：
            approvalListRefresh: function(curBillId) {
                for (let i = this.curBillIdArr.length - 1; i >= 0; i--) {
                    if (this.curBillIdArr[i] === curBillId) {
                        this.itemSelectedArr[i] = true;
                        break;
                    }
                }
                this.orderApprovalRefresh(function () {

                }, function () {

                })
            },


            headerRef_backEvent: function (curActivityId, successCallBack, errorCallBack) {
                this.closeSelf(curActivityId, successCallBack, errorCallBack);
            },
            checkboxRef_dataModifyEvent: function () {
                this.selectAllApply();
            },
            rejectRef_buttonClickEvent: function () {
                this.showRejectDialog();
            },
            passRef_buttonClickEvent: function () {
                this.showConfirmDialog();
            },
            selectItemRef_orderDetailEvent: function (curBillId, successCallBack, errorCallBack) {
                this.ep.orderDetailEvent(curBillId, successCallBack, errorCallBack);
            },
            selectItemRef_toggleApply: function (isSelect, curBillId) {
                this.changeAllSelected(isSelect, curBillId);
            },

            confirmDialogRef_confirmEvent: function (refId) {
                this.confirmDialogConfirm(refId);
            },
            confirmDialogRef_cancelEvent: function (refId) {
                this.confirmDialogCancel(refId);
            },
            rejectDialogRef_rejectReasonEvent: function (rejectReason, successCallBack, errorCallBack) {
                this.orderReject(rejectReason, successCallBack, errorCallBack);
            },
            rejectDialogRef_cancelEvent: function () {
                this.rejectDialogCancel();
            },
        },
    };
</script>
<style lang="less" scoped>
    @import "../../../../assets/var_kzt"; /*新增*/
    .orderApproval_container {
        width: 100%;
        height: 100%; /*新增*/
    }

    .orderApproval_row_orderApprovalRow {
        width: 100%;
        height: 100%; /*新增*/
    }

    .orderApproval_row {
        display: flex;
        flex: 1;
    }

    .orderApproval_col {
        display: flex;
        flex-direction: column;
    }

    .orderApproval_col_orderApprovalWindow_size_medium {
        width: @orderApproval-orderApprovalWindow-medium-width;
        height: 100%; /*新增*/
        .scroll-wrap {
            width: 100%;
            height: 100%;
            margin-top: 42px;
            overflow: auto;  /*新增*/
        }
    }

    .orderApproval_col_header_size_medium {
        width: @orderApproval-header-medium-width;
        position: fixed;
        top:0;
        left:0;
    }

    .orderApproval_col_checkbox_size_medium {
        width: @orderApproval-checkbox-medium-width;
        padding: @orderApproval-checkbox-medium-padding;
        justify-content: @orderApproval-checkbox-medium-vertical-position;
        margin: @orderApproval-checkbox-medium-margin;
    }

    .orderApproval_col_selectNum_size_medium {
        width: @orderApproval-selectNum-medium-width;
        padding: @orderApproval-selectNum-medium-padding;
        align-items: @orderApproval-selectNum-medium-horizontal-position;
        justify-content: @orderApproval-selectNum-medium-vertical-position;
    }

    .orderApproval_col_selectList_size_medium {
        width: @orderApproval-selectList-medium-width;
    }

    .orderApproval_col_selectList {
        background-color: mix(@orderApproval-selectList-background-color, #fff, @orderApproval-selectList-background-color-opacity);
    }

    .orderApproval_col_reject_size_medium {
        width: @orderApproval-reject-medium-width;
        margin: @orderApproval-reject-medium-margin;
        align-items: @orderApproval-reject-medium-horizontal-position;
        justify-content: @orderApproval-reject-medium-vertical-position;
    }

    .orderApproval_col_reject {
        background-color: mix(@orderApproval-reject-background-color, #fff, @orderApproval-reject-background-color-opacity);
        border-style: @orderApproval-reject-border-style;
        border-width: @orderApproval-reject-border-width;
        border-color: mix(@orderApproval-reject-border-color, #fff, @orderApproval-reject-hover-border-color-opacity);
    }

    .orderApproval_col_pass_size_medium {
        width: @orderApproval-pass-medium-width;
        margin: @orderApproval-pass-medium-margin;
        align-items: @orderApproval-pass-medium-horizontal-position;
        justify-content: @orderApproval-pass-medium-vertical-position;
    }

    .orderApproval_col_pass {
        background-color: mix(@orderApproval-pass-background-color, #fff, @orderApproval-pass-background-color-opacity);
        border-style: @orderApproval-pass-border-style;
        border-width: @orderApproval-pass-border-width;
        border-color: mix(@orderApproval-pass-border-color, #fff, @orderApproval-pass-hover-border-color-opacity);
    }

    .orderApproval_col_confirmDialog_size_medium {
        width: @orderApproval-confirmDialog-medium-width;
        height: @orderApproval-confirmDialog-medium-height;
    }

    .orderApproval_col_emptyWrap_size_medium {
        width: @orderApproval-emptyWrap-medium-width;
        padding: @orderApproval-emptyWrap-medium-padding;
        align-items: @orderApproval-emptyWrap-medium-horizontal-position;
        justify-content: @orderApproval-emptyWrap-medium-vertical-position;
    }

    .orderApproval_col_emptyImg_size_medium {
        width: @orderApproval-emptyImg-medium-width;
        height: @orderApproval-emptyImg-medium-height;
        margin: @orderApproval-emptyImg-medium-margin;
        align-items: @orderApproval-emptyImg-medium-horizontal-position;
        justify-content: @orderApproval-emptyImg-medium-vertical-position;
        overflow: hidden;
    }

    .orderApproval_col_emptyImg {
        border-radius: @orderApproval-emptyImg-border-radius;
    }

    .orderApproval_col_emptyText_size_medium {
        width: @orderApproval-emptyText-medium-width;
        align-items: @orderApproval-emptyText-medium-horizontal-position;
        justify-content: @orderApproval-emptyText-medium-vertical-position;
    }

    .orderApproval_row_confirmDialog {
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

    .orderApproval_dialog {
        position: fixed;
        left: 50%;
        top: 50%; /*新增*/
        transform: translate(-50%, -50%);
    }
</style>