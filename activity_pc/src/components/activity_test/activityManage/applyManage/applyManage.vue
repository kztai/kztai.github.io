<!--适用于测试演示版本：-->
<template>
    <div id="apply-manage-wrap">
        <div class="title">
            <lm-link-text
                    ref="titleRef"
                    refId="titleRef"
                    v-show="pvt_isShow.title === 'titleRef'"
                    :paraVarPair="pvt_title.titleRef.paraVarPair"
                    :para="pvt_title.titleRef.para"
                    :attr="pvt_title.titleRef.attr">
            </lm-link-text>
        </div>
        <div class="select-row">
            <div class="status">
                <lm-select
                        ref="statusRef"
                        refId="statusRef"
                        v-show="pvt_isShow.status === 'statusRef'"
                        :paraVarPair="pvt_status.statusRef.paraVarPair"
                        :para="pvt_status.statusRef.para"
                        :attr="pvt_status.statusRef.attr">
                </lm-select>
            </div>
            <div class="ticket">
                <lm-select
                        ref="ticketRef"
                        refId="ticketRef"
                        v-show="pvt_isShow.ticket === 'ticketRef'"
                        :paraVarPair="pvt_ticket.ticketRef.paraVarPair"
                        :para="pvt_ticket.ticketRef.para"
                        :attr="pvt_ticket.ticketRef.attr">
                </lm-select>
            </div>
            <div class="select-input">
                <lm-input-text
                        ref="selectInputRef"
                        refId="selectInputRef"
                        v-show="pvt_isShow.selectInput === 'selectInputRef'"
                        :paraVarPair="pvt_selectInput.selectInputRef.paraVarPair"
                        :para="pvt_selectInput.selectInputRef.para"
                        :attr="pvt_selectInput.selectInputRef.attr">
                </lm-input-text>
            </div>
            <div class="confirm-btn">
                <lm-button
                        ref="confirmBtnRef"
                        refId="confirmBtnRef"
                        v-show="pvt_isShow.confirmBtn === 'confirmBtnRef'"
                        :paraVarPair="pvt_confirmBtn.confirmBtnRef.paraVarPair"
                        :para="pvt_confirmBtn.confirmBtnRef.para"
                        :attr="pvt_confirmBtn.confirmBtnRef.attr">
                </lm-button>
            </div>
        </div>
        <div class="btn-row">
            <div class="list-check">
                <lm-dropdown
                        ref="listCheckRef"
                        refId="listCheckRef"
                        v-show="pvt_isShow.listCheck === 'listCheckRef'"
                        :paraVarPair="pvt_listCheck.listCheckRef.paraVarPair"
                        :para="pvt_listCheck.listCheckRef.para"
                        :attr="pvt_listCheck.listCheckRef.attr">
                </lm-dropdown>
            </div>
            <div class="refund-btn">
                <lm-button
                        ref="refundBtnRef"
                        refId="refundBtnRef"
                        v-show="pvt_isShow.refundBtn === 'refundBtnRef'"
                        :paraVarPair="pvt_refundBtn.refundBtnRef.paraVarPair"
                        :para="pvt_refundBtn.refundBtnRef.para"
                        :attr="pvt_refundBtn.refundBtnRef.attr">
                </lm-button>
            </div>
            <div class="notice-btn">
                <lm-button
                        ref="noticeBtnRef"
                        refId="noticeBtnRef"
                        v-show="pvt_isShow.noticeBtn === 'noticeBtnRef'"
                        :paraVarPair="pvt_noticeBtn.noticeBtnRef.paraVarPair"
                        :para="pvt_noticeBtn.noticeBtnRef.para"
                        :attr="pvt_noticeBtn.noticeBtnRef.attr">
                </lm-button>
            </div>
            <div class="export-btn">
                <lm-button
                        ref="exportBtnRef"
                        refId="exportBtnRef"
                        v-show="pvt_isShow.exportBtn === 'exportBtnRef'"
                        :paraVarPair="pvt_exportBtn.exportBtnRef.paraVarPair"
                        :para="pvt_exportBtn.exportBtnRef.para"
                        :attr="pvt_exportBtn.exportBtnRef.attr">
                </lm-button>
            </div>
        </div>
        <div class="select-num-row">
            <div class="all-select">
                <lm-checkbox
                        ref="allCheckRef"
                        refId="allCheckRef"
                        v-show="pvt_isShow.allCheck === 'allCheckRef'"
                        :paraVarPair="pvt_allCheck.allCheckRef.paraVarPair"
                        :para="pvt_allCheck.allCheckRef.para"
                        :attr="pvt_allCheck.allCheckRef.attr">
                </lm-checkbox>
            </div>
            <div class="selected-num">
                <lm-link-text
                        ref="selectedNumRef"
                        refId="selectedNumRef"
                        v-show="pvt_isShow.selectedNum === 'selectedNumRef'"
                        :paraVarPair="pvt_selectedNum.selectedNumRef.paraVarPair"
                        :para="pvt_selectedNum.selectedNumRef.para"
                        :attr="pvt_selectedNum.selectedNumRef.attr">
                </lm-link-text>
            </div>
            <div class="total-num">
                <lm-link-text
                        ref="totalNumRef"
                        refId="totalNumRef"
                        v-show="pvt_isShow.totalNum === 'totalNumRef'"
                        :paraVarPair="pvt_totalNum.totalNumRef.paraVarPair"
                        :para="pvt_totalNum.totalNumRef.para"
                        :attr="pvt_totalNum.totalNumRef.attr">
                </lm-link-text>
            </div>
        </div>
        <div class="item-exist" v-show="!itemIsEmpty">
            <div class="list-table">
                <div class="table-title">
                    <lm-link-text
                            ref="titleNameRef"
                            refId="titleNameRef"
                            v-show="pvt_isShow.titleName === 'titleNameRef'"
                            :paraVarPair="pvt_titleName.titleNameRef.paraVarPair"
                            :para="pvt_titleName.titleNameRef.para"
                            :attr="pvt_titleName.titleNameRef.attr">
                    </lm-link-text>
                    <lm-link-text
                            ref="titleTelRef"
                            refId="titleTelRef"
                            v-show="pvt_isShow.titleTel === 'titleTelRef'"
                            :paraVarPair="pvt_titleTel.titleTelRef.paraVarPair"
                            :para="pvt_titleTel.titleTelRef.para"
                            :attr="pvt_titleTel.titleTelRef.attr">
                    </lm-link-text>
                    <lm-link-text
                            ref="titleTicketRef"
                            refId="titleTicketRef"
                            v-show="pvt_isShow.titleTicket === 'titleTicketRef'"
                            :paraVarPair="pvt_titleTicket.titleTicketRef.paraVarPair"
                            :para="pvt_titleTicket.titleTicketRef.para"
                            :attr="pvt_titleTicket.titleTicketRef.attr">
                    </lm-link-text>
                    <lm-link-text
                            ref="titleMoneyRef"
                            refId="titleMoneyRef"
                            v-show="pvt_isShow.titleMoney === 'titleMoneyRef'"
                            :paraVarPair="pvt_titleMoney.titleMoneyRef.paraVarPair"
                            :para="pvt_titleMoney.titleMoneyRef.para"
                            :attr="pvt_titleMoney.titleMoneyRef.attr">
                    </lm-link-text>
                    <lm-link-text
                            ref="titleNumRef"
                            refId="titleNumRef"
                            v-show="pvt_isShow.titleNum === 'titleNumRef'"
                            :paraVarPair="pvt_titleNum.titleNumRef.paraVarPair"
                            :para="pvt_titleNum.titleNumRef.para"
                            :attr="pvt_titleNum.titleNumRef.attr">
                    </lm-link-text>
                    <lm-link-text
                            ref="titleStatusRef"
                            refId="titleStatusRef"
                            v-show="pvt_isShow.titleStatus === 'titleStatusRef'"
                            :paraVarPair="pvt_titleStatus.titleStatusRef.paraVarPair"
                            :para="pvt_titleStatus.titleStatusRef.para"
                            :attr="pvt_titleStatus.titleStatusRef.attr">
                    </lm-link-text>
                    <lm-link-text
                            ref="titleTimeRef"
                            refId="titleTimeRef"
                            v-show="pvt_isShow.titleTime === 'titleTimeRef'"
                            :paraVarPair="pvt_titleTime.titleTimeRef.paraVarPair"
                            :para="pvt_titleTime.titleTimeRef.para"
                            :attr="pvt_titleTime.titleTimeRef.attr">
                    </lm-link-text>
                    <lm-link-text
                            ref="titleDetailRef"
                            refId="titleDetailRef"
                            v-show="pvt_isShow.titleDetail === 'titleDetailRef'"
                            :paraVarPair="pvt_titleDetail.titleDetailRef.paraVarPair"
                            :para="pvt_titleDetail.titleDetailRef.para"
                            :attr="pvt_titleDetail.titleDetailRef.attr">
                    </lm-link-text>
                </div>
                <div class="table-item">
                    <applyItem
                            ref="applyItemRef"
                            refId="applyItemRef"
                            v-show="pvt_isShow.applyItem === 'applyItemRef'"
                            v-for="(item, index) in pvt_applyItem.applyItemRef.forData"
                            :number="index"
                            :paraVarPair="pvt_applyItem.applyItemRef.paraVarPair"
                            :para="item.para"
                            :attr="item.attr">
                    </applyItem>
                </div>
            </div>
            <div class="pagination-row">
                <lm-pagination
                        ref="paginationRef"
                        refId="paginationRef"
                        v-show="pvt_isShow.pagination === 'paginationRef'"
                        :paraVarPair="pvt_pagination.paginationRef.paraVarPair"
                        :para="pvt_pagination.paginationRef.para"
                        :attr="pvt_pagination.paginationRef.attr">
                </lm-pagination>
            </div>
            <div class="apply-reject-dialog">
                <rejectDialog
                        ref="dialogRef"
                        refId="dialogRef"
                        v-show="pvt_isShow.dialog === 'dialogRef'"
                        :paraVarPair="pvt_dialog.dialogRef.paraVarPair"
                        :para="pvt_dialog.dialogRef.para"
                        :attr="pvt_dialog.dialogRef.attr">
                </rejectDialog>
            </div>
        </div>
        <div class="item-empty">
            <lm-link-text
                    ref="itemEmptyRef"
                    refId="itemEmptyRef"
                    v-show="pvt_isShow.itemEmpty === 'itemEmptyRef'"
                    :paraVarPair="pvt_itemEmpty.itemEmptyRef.paraVarPair"
                    :para="pvt_itemEmpty.itemEmptyRef.para"
                    :attr="pvt_itemEmpty.itemEmptyRef.attr">
            </lm-link-text>
        </div>

    </div>
</template>
<script>
    import applyItem from './applyItem';
    import rejectDialog from './rejectDialog';
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';

    export default {
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ['sys'],
   
        components: {
            applyItem,
            rejectDialog
        },
        data: function () {
            return {
                mac: mac.mac,

                myType: 1,
                mySite: '',
                myID: 1,

                allSelected: [],
                itemSelectedArr: [],
                billIdArr: [],
                curStatus: '全部状态',
                curTicket: '全部票种',
                inputContent: '',
                noticeBtnDisabled: true,
                exportBtnDisabled: true,
                refundBtnDisabled: true,
                selectNum: 0,
                selectNumText: '已选取 0 笔',
                itemTotal: 1,
                itemIsEmpty: false,
                rejectBillIdArr: [],
                totalNumText: '',

                pvt_subModuleMap: {
                    subModule: ['titleRef', 'statusRef', 'ticketRef', 'selectInputRef', 'confirmBtnRef', 'listCheckRef', 'noticeBtnRef', 'exportBtnRef', 'titleNameRef', 'titleTelRef', 'titleTicketRef', 'titleMoneyRef', 'titleNumRef', 'titleStatusRef', 'titleTimeRef', 'titleDetailRef', 'applyItemRef', 'paginationRef', 'selectedNumRef', 'allCheckRef', 'dialogRef', 'itemEmptyRef', 'refundBtnRef', 'totalNumRef'],
                    vessel: ['title', 'status', 'ticket', 'selectInput', 'confirmBtn', 'listCheck', 'noticeBtn', 'exportBtn', 'titleName', 'titleTel', 'titleTicket', 'titleMoney', 'titleNum', 'titleStatus', 'titleTime', 'titleDetail', 'applyItem', 'pagination', 'selectedNum', 'allCheck', 'dialog', 'itemEmpty', 'refundBtn', 'totalNum'],
                },

                // 各个容器当前显示的子模块
                pvt_isShow: {
                    title: null,
                    status: null,
                    ticket: null,
                    selectInput: null,
                    confirmBtn: null,
                    listCheck: null,
                    noticeBtn: null,
                    exportBtn: null,
                    titleName: null,
                    titleTel: null,
                    titleTicket: null,
                    titleMoney: null,
                    titleNum: null,
                    titleStatus: null,
                    titleTime: null,
                    titleDetail: null,
                    applyItem: null,
                    pagination: null,
                    selectedNum: null,
                    allCheck: null,
                    dialog: null,
                    itemEmpty: null,
                    refundBtn: null,

                    totalNum: null,
                },

                // 当前模块输入类型的事务接口名称，工具完成前需要用户手动填写
                pvt_eventPortInput: ['refundPassIn', 'orderApprovalIn', 'groupNoticeIn'],

            }
        },

        computed: {
            pvt_dialog: function () {
                return {
                    dialogRef: {
                        paraVarPair: {},
                        para: {
                            rejectBillIdArr: this.rejectBillIdArr
                        },
                        attr: {

                        }
                    }
                }
            },

            pvt_title: function () {
                return {
                    titleRef: {
                        paraVarPair: {},
                        para: {
                            textData: '报名管理'
                        },
                        attr: {
                            fontSize: '16px',
                            color: '#303133'
                        }
                    }
                }
            },

            pvt_status: function () {
                return {
                    statusRef: {
                        paraVarPair: {
                            value: 'value'
                        },
                        para: {
                            value: '全部状态',
                            listSource: [
                                {value: '全部状态', label: '全部状态', disabled: false, icon: '', image: ''},
                                {value: 1, label: '待付款', disabled: false, icon: '', image: ''},
                                {value: 0, label: '待审核', disabled: false, icon: '', image: ''},
                                {value: 6, label: '待验票', disabled: false, icon: '', image: ''},
                                {value: 2, label: '待退款', disabled: false, icon: '', image: ''},
                                {value: 3, label: '退款中', disabled: false, icon: '', image: ''},
                                {value: 4, label: '已退款', disabled: false, icon: '', image: ''},
                                {value: 7, label: '已完成', disabled: false, icon: '', image: ''},
                                {value: 5, label: '已拒绝', disabled: false, icon: '', image: ''},
                            ]
                        },
                        attr: {}
                    }
                }
            },

            pvt_ticket: function () {
                return {
                    ticketRef: {
                        paraVarPair: {
                            value: 'value'
                        },
                        para: {
                            value: '全部票种',
                            listSource: [
                                {value: '全部票种', label: '全部票种', disabled: false, icon: '', image: ''},
                                {value: '免费票', label: '免费票', disabled: false, icon: '', image: ''},
                                {value: '收费票', label: '收费票', disabled: false, icon: '', image: ''},
                            ]
                        },
                        attr: {}
                    }
                }
            },

            pvt_selectInput: function () {
                return {
                    selectInputRef: {
                        paraVarPair: {},
                        para: {
                            text: ''
                        },
                        attr: {
                            placeholder: '姓名 手机'
                        }
                    }
                }
            },

            pvt_confirmBtn: function () {
                return {
                    confirmBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['查询', '']
                        },
                        attr: {
                            type: 'primary',
                            height: '34px'
                        }
                    }
                }
            },

            pvt_listCheck: function () {
                return {
                    listCheckRef: {
                        paraVarPair: {},
                        para: {
                            dropDown: [
                                {id: '1', label: '通过', disabled: false, icon: ''},
                                {id: '2', label: '拒绝', disabled: false, icon: ''},
                            ]
                        },
                        attr: {
                            menuName: '名单审核',
                            trigger: 'click',
                            placement: 'bottom'
                        }
                    }
                }
            },

            pvt_refundBtn: function () {
                return {
                    refundBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['退款', 'el-icon-user']
                        },
                        attr: {
                            type: 'primary',
                            height: '34px',
                            disabled: this.refundBtnDisabled
                        }
                    }
                }
            },

            pvt_noticeBtn: function () {
                return {
                    noticeBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['群发消息', 'el-icon-message']
                        },
                        attr: {
                            type: 'primary',
                            height: '34px',
                            disabled: this.noticeBtnDisabled
                        }
                    }
                }
            },

            pvt_exportBtn: function () {
                return {
                    exportBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['导出名单', 'el-icon-download']
                        },
                        attr: {
                            type: 'primary',
                            height: '34px',
                            disabled: this.exportBtnDisabled
                        }
                    }
                }
            },

            pvt_allCheck: function () {
                return {
                    allCheckRef: {
                        paraVarPair: {
                            checkData: 'allSelected'
                        },
                        para: {
                            checkData: this.allSelected
                        },
                        attr: {
                            checkboxArr: [{label: 1, text: '全选'}]
                        }
                    }
                }
            },

            pvt_selectedNum: function () {
                return {
                    selectedNumRef: {
                        paraVarPair: {},
                        para: {
                            textData: this.selectNumText
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#606266'
                        }
                    }
                }
            },

            pvt_totalNum: function () {
                return {
                    totalNumRef: {
                        paraVarPair: {},
                        para: {
                            textData: this.totalNumText
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#606266'
                        }
                    }
                }
            },

            pvt_titleName: function () {
                return {
                    titleNameRef: {
                        paraVarPair: {},
                        para: {
                            textData: '姓名'
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#606266',
                            textAlign: 'center'
                        }
                    }
                }
            },

            pvt_titleTel: function () {
                return {
                    titleTelRef: {
                        paraVarPair: {},
                        para: {
                            textData: '手机'
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#606266',
                            textAlign: 'center'
                        }
                    }
                }
            },

            pvt_titleTicket: function () {
                return {
                    titleTicketRef: {
                        paraVarPair: {},
                        para: {
                            textData: '票种'
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#606266',
                            textAlign: 'center'
                        }
                    }
                }
            },

            pvt_titleMoney: function () {
                return {
                    titleMoneyRef: {
                        paraVarPair: {},
                        para: {
                            textData: '支付金额（元）'
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#606266',
                            textAlign: 'center'
                        }
                    }
                }
            },

            pvt_titleNum: function () {
                return {
                    titleNumRef: {
                        paraVarPair: {},
                        para: {
                            textData: '订单编号'
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#606266',
                            textAlign: 'center'
                        }
                    }
                }
            },

            pvt_titleStatus: function () {
                return {
                    titleStatusRef: {
                        paraVarPair: {},
                        para: {
                            textData: '状态'
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#606266',
                            textAlign: 'center'
                        }
                    }
                }
            },

            pvt_titleTime: function () {
                return {
                    titleTimeRef: {
                        paraVarPair: {},
                        para: {
                            textData: '报名时间'
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#606266',
                            textAlign: 'center'
                        }
                    }
                }
            },

            pvt_titleDetail: function () {
                return {
                    titleDetailRef: {
                        paraVarPair: {},
                        para: {
                            textData: '操作'
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#606266',
                            textAlign: 'center'
                        }
                    }
                }
            },

            pvt_applyItem: function () {
                let loopModule = {
                    applyItemRef: {
                        para: {
                            curBillId: this.billIdArr,
                        },
                        attr: {},
                    },
                };
                let forData = this.pvt_createForData(loopModule);
                return {
                    applyItemRef: {
                        paraVarPair: {
                        },
                        forData: forData.applyItemRef,
                    },
                };
            },

            pvt_pagination: function () {
                return {
                    paginationRef: {
                        paraVarPair: {},
                        para: {
                            currentPage: 1
                        },
                        attr: {
                            pageSize: 10,
                            total: this.itemTotal
                            // total: 100
                        }
                    }
                }
            },

            pvt_itemEmpty: function () {
                return {
                    itemEmptyRef: {
                        paraVarPair: {},
                        para: {
                            textData: '暂无数据'
                        },
                        attr: {
                            fontSize: '14px',
                            color: '#909399',
                            textAlign: 'center'
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

            getApplyTotal: function() {
                return 6;
            },

            startModule: function (successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'applyManage_start';
                let dbFlag;
                let dbData;
                let tableName;
                let condition;
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
                    i: 0
                };

                if (successCallBack !== null) {
                    errorCallBack = para;
                    successCallBack = null
                }
                para = errorCallBack;

                let ref = {
                    titleRef: 'titleRef',
                    statusRef: 'statusRef',
                    ticketRef: 'ticketRef',
                    selectInputRef: 'selectInputRef',
                    confirmBtnRef: 'confirmBtnRef',
                    listCheckRef: 'listCheckRef',
                    refundBtnRef: 'refundBtnRef',
                    noticeBtnRef: 'noticeBtnRef',
                    exportBtnRef: 'exportBtnRef',
                    titleNameRef: 'titleNameRef',
                    titleTelRef: 'titleTelRef',
                    titleTicketRef: 'titleTicketRef',
                    titleMoneyRef: 'titleMoneyRef',
                    titleNumRef: 'titleNumRef',
                    titleStatusRef: 'titleStatusRef',
                    titleTimeRef: 'titleTimeRef',
                    titleDetailRef: 'titleDetailRef',
                    applyItemRef: 'applyItemRef',
                    paginationRef: 'paginationRef',
                    allCheckRef: 'allCheckRef',
                    selectedNumRef: 'selectedNumRef',
                    dialogRef: 'dialogRef',
                    itemEmptyRef: 'itemEmptyRef',
                    totalNumRef: 'totalNumRef',
                };

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                            // 初始化数据：
                            this.curStatus = '全部状态';
                            this.curTicket = '全部票种';
                            this.inputContent = '';
                            this.allSelected = [];
                            this.itemSelectedArr = [];
                            this.billIdArr = [];
                            this.noticeBtnDisabled = true;
                            this.exportBtnDisabled = true;
                            this.refundBtnDisabled = true;
                            this.selectNum = 0;
                            this.selectNumText = '已选取 0 笔';
                            this.itemTotal = 1;
                            that.itemIsEmpty = false;
                            that.rejectBillIdArr = [];
                            // this.rejectBtnDisabled = true;
                            // this.passBtnDisabled = true;

                            // 获取报名总人数：
                            that.itemTotal = that.getApplyTotal();

                            para.nStep = 'getApplyData';
                            dbFlag++;
                            break;
                        case 'getApplyData':
                            that.inputOrderData(0, function () {
                                that.getBillData('', function () {
                                    that.forceUpdateData(function () {
                                        para.nStep = 'start_1';
                                        if (++dbFlag === 2) {
                                            that.startModule(successCallBack, errorCallBack)
                                        }
                                    });
                                }, function () {
                                });
                            }, function () {
                            });
                            break;
                        case 'start_1':
                            that.sm[ref.titleRef].startModule(function () {
                                para.nStep = 'start_2';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_2':
                            that.sm[ref.statusRef].startModule(function () {
                                para.nStep = 'start_3';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_3':
                            that.sm[ref.ticketRef].startModule(function () {
                                para.nStep = 'start_4';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_4':
                            that.sm[ref.selectInputRef].startModule(function () {
                                para.nStep = 'start_5';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_5':
                            that.sm[ref.confirmBtnRef].startModule(function () {
                                para.nStep = 'start_6';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_6':
                            that.sm[ref.listCheckRef].startModule(function () {
                                para.nStep = 'start_8_1';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_8_1':
                            that.sm[ref.refundBtnRef].startModule(function () {
                                para.nStep = 'start_8_2';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_8_2':
                            that.sm[ref.noticeBtnRef].startModule(function () {
                                para.nStep = 'start_9';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_9':
                            that.sm[ref.exportBtnRef].startModule(function () {
                                if(that.itemIsEmpty) {
                                    para.nStep = 'start_23';
                                } else {
                                    para.nStep = 'start_10';
                                }
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_10':
                            that.sm[ref.titleNameRef].startModule(function () {
                                para.nStep = 'start_11';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_11':
                            that.sm[ref.titleTelRef].startModule(function () {
                                para.nStep = 'start_12';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_12':
                            that.sm[ref.titleTicketRef].startModule(function () {
                                para.nStep = 'start_13';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_13':
                            that.sm[ref.titleMoneyRef].startModule(function () {
                                para.nStep = 'start_14';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_14':
                            that.sm[ref.titleNumRef].startModule(function () {
                                para.nStep = 'start_15';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_15':
                            that.sm[ref.titleStatusRef].startModule(function () {
                                para.nStep = 'start_16';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_16':
                            that.sm[ref.titleTimeRef].startModule(function () {
                                para.nStep = 'start_17';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_17':
                            that.sm[ref.titleDetailRef].startModule(function () {
                                para.nStep = 'start_18';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_18':
                            if (para.i > that.sm[ref.applyItemRef].length - 1) {
                                para.i = 0;
                                para.nStep = 'start_20';
                                dbFlag++;
                                break;
                            }

                            that.sm[ref.applyItemRef][para.i].startModule(function () {
                                para.i++;
                                para.nStep = 'start_18';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_20':
                            that.sm[ref.paginationRef].startModule(function () {
                                para.nStep = 'start_21';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_21':
                            that.sm[ref.selectedNumRef].startModule(function () {
                                para.nStep = 'start_22';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_22':
                            that.sm[ref.allCheckRef].startModule(function () {
                                para.nStep = 'start_23';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        // case 'start_22_1':
                        //     that.sm[ref.totalNumRef].startModule(function () {
                        //         para.nStep = 'start_23';
                        //         if (++dbFlag === 2) {
                        //             that.startModule(successCallBack, errorCallBack)
                        //         }
                        //     }, function () {
                        //     });
                        //     break;
                        case 'start_23':
                            that.sm[ref.itemEmptyRef].startModule(function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            let refArr;
                            if(this.itemIsEmpty) {
                                refArr = ['titleRef', 'statusRef', 'ticketRef', 'selectInputRef', 'confirmBtnRef', 'listCheckRef', 'noticeBtnRef', 'exportBtnRef', 'refundBtnRef', 'itemEmptyRef', 'totalNumRef'];
                            } else {
                                refArr = ['titleRef', 'statusRef', 'ticketRef', 'selectInputRef', 'confirmBtnRef', 'listCheckRef', 'refundBtnRef', 'noticeBtnRef', 'exportBtnRef', 'titleNameRef', 'titleTelRef', 'titleTicketRef', 'titleMoneyRef', 'titleNumRef', 'titleStatusRef', 'titleTimeRef', 'titleDetailRef', 'applyItemRef', 'paginationRef', 'selectedNumRef', 'allCheckRef', 'totalNumRef'];
                            }

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

            // 需要新架构支持条件下载子表的情况：
            /*inputOrderData: function (condition, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'applyManage_inputApplyData';
                let dbFlag;
                let dbData;
                let tableName;
                let dataCondition;
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
                        // case 0:
                        //     // 发事件到终端进行数据下载，返回的id作为条件进行查询：
                        //     that.ep.inputOrderData(condition, function (result) {
                        //         para.curApplyIdArr = result;
                        //         para.nStep = 'getApplyData';
                        //         if (++dbFlag === 2) {
                        //             that.inputOrderData(condition, successCallBack, errorCallBack)
                        //         }
                        //     }, function () {
                        //     });
                        //     break;
                        case 0:
                            expression = condition.condition;
                            start = condition.start;
                            total = condition.total;
                            sort = ['id,asc'];
                            destGeneSite = '';
                            portName = this.mac.tb.groupActivityOrder;
                            inputData = null;
                            this.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                para.nStep = 1;
                                if (++dbFlag === 2) {
                                    that.inputOrderData(condition, successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 1:
                            expression = condition.condition;
                            start = condition.start;
                            total = condition.total;
                            sort = ['id,asc'];
                            destGeneSite = '';
                            portName = this.mac.tb.groupActivityBill;
                            inputData = null;
                            this.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                if(result) {
                                    that.totalNumText = '当前显示 ' + result.length + ' 笔，总共 ' + that.itemTotal + ' 笔';
                                    for(let i = 0; i < result.length; i++) {
                                        that.billIdArr.push(result[i]);
                                        that.itemSelectedArr.push(false);
                                    }
                                } else {
                                    that.totalNumText = '当前显示 ' + 0 + ' 笔，总共 ' + that.itemTotal + ' 笔';
                                    that.itemIsEmpty = true;
                                }

                                // para.nStep = 'getParentId';
                                // 目前票据表格没有订单父表，临时作为根表：
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.inputOrderData(condition, successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'getParentId':
                            // 等下载子表环境可以后，才能查找父表并下载父记录：
                            tableName = this.mac.tb.groupActivityBill;
                            record = that.billIdArr;
                            that.sys.api.getParentRecord(tableName, record, function (result) {
                                para.curOrderIdArr = that.removeRepetition(result);
                                para.nStep = 'getCloudOrderId';
                                if (++dbFlag === 2) {
                                    that.inputOrderData(condition, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'getCloudOrderId':
                            tableName = this.mac.tb.groupActivityOrder;
                            record = para.curOrderIdArr;
                            that.sys.api.getSourceRecord(tableName, record, function (result) {
                                para.cloudOrderIdArr = result;
                                para.nStep = 'inputCloudOrder';
                                if (++dbFlag === 2) {
                                    that.inputOrderData(condition, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'inputCloudOrder':
                            tableName = this.mac.tb.groupActivityOrder;
                            record = para.cloudOrderIdArr;
                            that.sys.api.dataInput(tableName, record, '', function (result) {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.inputOrderData(condition, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'end':
                            that.forceUpdateData(function () {
                                that.sm.totalNumRef.startModule(function () {
                                    para.successCallBack();
                                }, function () {
                                })
                            });
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },*/

            inputOrderData: function (startNum, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'applyManage_inputOrderData';
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
                            expression = that.mac.fd.groupActivityOrder.groupActivityID + '=' + that.para.activityId;
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
                                if(dbData[that.mac.fd.id].length > 0) {
                                    that.totalNumText = '当前显示 ' + dbData[that.mac.fd.id].length + ' 笔，总共 ' + that.itemTotal + ' 笔';
                                    for(let i = 0; i < dbData[that.mac.fd.id].length; i++) {
                                        that.billIdArr.push(dbData[that.mac.fd.id][i]);
                                        that.itemSelectedArr.push(false);
                                    }
                                } else {
                                    that.totalNumText = '当前显示 ' + 0 + ' 笔，总共 ' + that.itemTotal + ' 笔';
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
                            that.forceUpdateData(function () {
                                that.sm.totalNumRef.startModule(function () {
                                    para.successCallBack();
                                }, function () {
                                })
                            });
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },

            statusChange: function (value) {
                this.curStatus = value;
            },

            ticketChange: function (value) {
                this.curTicket = value;
            },

            selectInputChange: function (value) {
                this.inputContent = value;
            },

            searchApplyWrap: function () {
                this.searchApply(function () {
                }, function () {
                })
            },

            /* 适用于测试演示版本：*/
            searchApply: function (successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'applyManage_searchApply';
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
                    selectItemIdArr: []
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
                            that.itemSelectedArr = [];
                            that.itemIsEmpty = false;
                            this.noticeBtnDisabled = true;
                            this.exportBtnDisabled = true;
                            this.refundBtnDisabled = true;

                            switch (that.curTicket) {
                                case '全部票种':
                                    // 对父表有要求，订单表的活动id必须一致
                                    if(that.curStatus === '全部状态' && that.inputContent === '') {
                                        para.condition = '';
                                    } else if(that.curStatus !== '全部状态' && that.inputContent !== '') {
                                        para.condition = '(' + this.mac.fd.groupActivityBill.name + '="' + that.inputContent + '"||' + this.mac.fd.groupActivityBill.mobile + '="' + that.inputContent + '")&&' + this.mac.fd.groupActivityBill.status +  '=' + that.curStatus;
                                    } else if(that.curStatus === '全部状态' && that.inputContent !== '') {
                                        para.condition = this.mac.fd.groupActivityBill.name + '="' + that.inputContent + '"||' + this.mac.fd.groupActivityBill.mobile + '="' + that.inputContent + '"';
                                    } else if(that.curStatus !== '全部状态' && that.inputContent === '') {
                                        para.condition = this.mac.fd.groupActivityBill.status +  '=' + that.curStatus
                                    }
                                    break;
                                case '免费票':
                                    // 对父表有要求，订单表的活动id必须一致，同时price字段为0
                                    if(that.curStatus === '全部状态' && that.inputContent === '') {
                                        para.condition = '';
                                    } else if(that.curStatus !== '全部状态' && that.inputContent !== '') {
                                        para.condition = '(' + this.mac.fd.groupActivityBill.name + '="' + that.inputContent + '"||' + this.mac.fd.groupActivityBill.mobile + '="' + that.inputContent + '")&&' + this.mac.fd.groupActivityBill.status +  '=' + that.curStatus;
                                    } else if(that.curStatus === '全部状态' && that.inputContent !== '') {
                                        para.condition = this.mac.fd.groupActivityBill.name + '="' + that.inputContent + '"||' + this.mac.fd.groupActivityBill.mobile + '="' + that.inputContent + '"';
                                    } else if(that.curStatus !== '全部状态' && that.inputContent === '') {
                                        para.condition = this.mac.fd.groupActivityBill.status +  '=' + that.curStatus;
                                    }
                                    break;
                                case '收费票':
                                    // 对父表有要求，订单表的活动id必须一致，同时price字段不为0
                                    if(that.curStatus === '全部状态' && that.inputContent === '') {
                                        para.condition = '';
                                    } else if(that.curStatus !== '全部状态' && that.inputContent !== '') {
                                        para.condition = '(' + this.mac.fd.groupActivityBill.name + '="' + that.inputContent + '"||' + this.mac.fd.groupActivityBill.mobile + '="' + that.inputContent + '")&&' + this.mac.fd.groupActivityBill.status +  '=' + that.curStatus;
                                    } else if(that.curStatus === '全部状态' && that.inputContent !== '') {
                                        para.condition = this.mac.fd.groupActivityBill.name + '="' + that.inputContent + '"||' + this.mac.fd.groupActivityBill.mobile + '="' + that.inputContent + '"';
                                    } else if(that.curStatus !== '全部状态' && that.inputContent === '') {
                                        para.condition = this.mac.fd.groupActivityBill.status +  '=' + that.curStatus;
                                    }
                                    break;
                            }

                            that.getBillData(para.condition, function() {
                                if(that.selectNum === 0 && that.allSelected.length === 0) {
                                    para.nStep = 'refreshPagination';
                                } else {
                                    para.nStep = 'refreshNum';
                                }
                                that.selectNum = 0;
                                that.selectNumText = '已选取 0 笔';
                                that.allSelected = [];

                                that.forceUpdateData(function () {
                                    if (++dbFlag === 2) {
                                        that.searchApply(successCallBack, errorCallBack)
                                    }
                                });
                            }, function () {
                            });
                            break;
                        case 'refreshNum':
                            that.sm.selectedNumRef.startModule(function () {
                                para.nStep = 'refreshAllSelect';
                                if (++dbFlag === 2) {
                                    that.searchApply(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'refreshAllSelect':
                            that.sm.allCheckRef.startModule(function () {
                                para.nStep = 'refreshPagination';
                                if (++dbFlag === 2) {
                                    that.searchApply(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'refreshInput':
                            if(that.inputContent === '') {
                                para.nStep = 'refreshPagination';
                                dbFlag++;
                                break;
                            }
                            that.inputContent = '';
                            that.forceUpdateData(function () {
                                that.sm.selectInputRef.startModule(function () {
                                    para.nStep = 'refreshPagination';
                                    if (++dbFlag === 2) {
                                        that.searchApply(successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
                            });
                            break;
                        case 'refreshPagination':
                            // 刷新报名总人数：
                            that.itemTotal = that.getApplyTotal();
                            that.forceUpdateData(function () {
                                that.sm.paginationRef.startModule(function () {
                                    para.nStep = 'isEmpty';
                                    if (++dbFlag === 2) {
                                        that.searchApply(successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
                            });
                            break;
                        case 'isEmpty':
                            if(that.itemIsEmpty) {
                                that.showSubModule('itemEmptyRef', true, function () {
                                    para.nStep = 'end';
                                    if (++dbFlag === 2) {
                                        that.searchApply(successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack);
                            } else {
                                that.showSubModule('itemEmptyRef', false, function () {
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
                                    that.searchApply(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        // case 'showItems':
                        //     that.showSubModule('applyItemRef', true, function () {
                        //         para.nStep = 'end';
                        //         if (++dbFlag === 2) {
                        //             that.searchApply(successCallBack, errorCallBack)
                        //         }
                        //     }, para.errorCallBack);
                        //     break;
                        case 'end':
                            para.successCallBack();
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },

            // 适用于新架构能够条件下载子表的情况：
            /*  searchApply: function (start, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'applyManage_searchApply';
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
                    selectItemIdArr: []
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
                            that.itemSelectedArr = [];
                            that.itemIsEmpty = false;
                            this.noticeBtnDisabled = true;
                            this.exportBtnDisabled = true;
                            this.refundBtnDisabled = true;

                            switch (that.curTicket) {
                                case '全部票种':
                                    // 对父表有要求，订单表的活动id必须一致
                                    if(that.curStatus === '全部状态' && that.inputContent === '') {
                                        para.condition = '';
                                    } else if(that.curStatus !== '全部状态' && that.inputContent !== '') {
                                        para.condition = '(' + this.mac.fd.groupActivityBill.name + '="' + that.inputContent + '"||' + this.mac.fd.groupActivityBill.mobile + '="' + that.inputContent + '")&&' + this.mac.fd.groupActivityBill.status +  '=' + that.curStatus;
                                    } else if(that.curStatus === '全部状态' && that.inputContent !== '') {
                                        para.condition = this.mac.fd.groupActivityBill.name + '="' + that.inputContent + '"||' + this.mac.fd.groupActivityBill.mobile + '="' + that.inputContent + '"';
                                    } else if(that.curStatus !== '全部状态' && that.inputContent === '') {
                                        para.condition = this.mac.fd.groupActivityBill.status +  '=' + that.curStatus
                                    }
                                    break;
                                case '免费票':
                                    // 对父表有要求，订单表的活动id必须一致，同时price字段为0
                                    if(that.curStatus === '全部状态' && that.inputContent === '') {
                                        para.condition = '';
                                    } else if(that.curStatus !== '全部状态' && that.inputContent !== '') {
                                        para.condition = '(' + this.mac.fd.groupActivityBill.name + '="' + that.inputContent + '"||' + this.mac.fd.groupActivityBill.mobile + '="' + that.inputContent + '")&&' + this.mac.fd.groupActivityBill.status +  '=' + that.curStatus;
                                    } else if(that.curStatus === '全部状态' && that.inputContent !== '') {
                                        para.condition = this.mac.fd.groupActivityBill.name + '="' + that.inputContent + '"||' + this.mac.fd.groupActivityBill.mobile + '="' + that.inputContent + '"';
                                    } else if(that.curStatus !== '全部状态' && that.inputContent === '') {
                                        para.condition = this.mac.fd.groupActivityBill.status +  '=' + that.curStatus;
                                    }
                                    break;
                                case '收费票':
                                    // 对父表有要求，订单表的活动id必须一致，同时price字段不为0
                                    if(that.curStatus === '全部状态' && that.inputContent === '') {
                                        para.condition = '';
                                    } else if(that.curStatus !== '全部状态' && that.inputContent !== '') {
                                        para.condition = '(' + this.mac.fd.groupActivityBill.name + '="' + that.inputContent + '"||' + this.mac.fd.groupActivityBill.mobile + '="' + that.inputContent + '")&&' + this.mac.fd.groupActivityBill.status +  '=' + that.curStatus;
                                    } else if(that.curStatus === '全部状态' && that.inputContent !== '') {
                                        para.condition = this.mac.fd.groupActivityBill.name + '="' + that.inputContent + '"||' + this.mac.fd.groupActivityBill.mobile + '="' + that.inputContent + '"';
                                    } else if(that.curStatus !== '全部状态' && that.inputContent === '') {
                                        para.condition = this.mac.fd.groupActivityBill.status +  '=' + that.curStatus;
                                    }
                                    break;
                            }

                            conditionData = {
                                condition: para.condition,
                                start: start,
                                total: 10
                            };

                            that.inputOrderData(conditionData, function() {
                                if(that.selectNum === 0 && that.allSelected.length === 0) {
                                    para.nStep = 'refreshPagination';
                                } else {
                                    para.nStep = 'refreshNum';
                                }
                                that.selectNum = 0;
                                that.selectNumText = '已选取 0 笔';
                                that.allSelected = [];

                                that.forceUpdateData(function () {
                                    if (++dbFlag === 2) {
                                        that.searchApply(start, successCallBack, errorCallBack)
                                    }
                                });
                            }, function () {
                            });
                            break;
                        case 'refreshNum':
                            that.sm.selectedNumRef.startModule(function () {
                                para.nStep = 'refreshAllSelect';
                                if (++dbFlag === 2) {
                                    that.searchApply(start, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'refreshAllSelect':
                            that.sm.allCheckRef.startModule(function () {
                                para.nStep = 'refreshPagination';
                                if (++dbFlag === 2) {
                                    that.searchApply(start, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'refreshInput':
                            if(that.inputContent === '') {
                                para.nStep = 'refreshPagination';
                                dbFlag++;
                                break;
                            }
                            that.inputContent = '';
                            that.forceUpdateData(function () {
                                that.sm.selectInputRef.startModule(function () {
                                    para.nStep = 'refreshPagination';
                                    if (++dbFlag === 2) {
                                        that.searchApply(start, successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
                            });
                            break;
                        case 'refreshPagination':
                            // 刷新报名总人数：
                            that.itemTotal = that.getApplyTotal();
                            that.forceUpdateData(function () {
                                that.sm.paginationRef.startModule(function () {
                                    para.nStep = 'isEmpty';
                                    if (++dbFlag === 2) {
                                        that.searchApply(start, successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
                            });
                            break;
                        case 'isEmpty':
                            if(that.itemIsEmpty) {
                                that.showSubModule('itemEmptyRef', true, function () {
                                    para.nStep = 'end';
                                    if (++dbFlag === 2) {
                                        that.searchApply(start, successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack);
                            } else {
                                that.showSubModule('itemEmptyRef', false, function () {
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
                                    that.searchApply(start, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        // case 'showItems':
                        //     that.showSubModule('applyItemRef', true, function () {
                        //         para.nStep = 'end';
                        //         if (++dbFlag === 2) {
                        //             that.searchApply(start, successCallBack, errorCallBack)
                        //         }
                        //     }, para.errorCallBack);
                        //     break;
                        case 'end':
                            para.successCallBack();
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },*/

            /*最早版本的写法：*/
            // searchApply: function (start, successCallBack, errorCallBack) {
            //     let that = this;
            //     let fnname = 'applyManage_searchApply';
            //     let dbFlag;
            //     let dbData;
            //     let tableName;
            //     let conditionData;
            //     let para = {
            //         successCallBack: successCallBack,
            //         errorCallBack: errorCallBack,
            //         nStep: 0,
            //         i: 0,
            //         isEmpty: true,
            //         selectItemIdArr: []
            //     };
            //
            //     if (successCallBack !== null) {
            //         errorCallBack = para;
            //         successCallBack = null
            //     }
            //     para = errorCallBack;
            //
            //     while (1) {
            //         dbFlag = 0;
            //         console.log(fnname + ': para.nStep = ' + para.nStep);
            //         switch (para.nStep) {
            //             case 0:
            //                 that.billIdArr = [];
            //                 that.itemSelectedArr = [];
            //                 that.itemIsEmpty = false;
            //                 this.noticeBtnDisabled = true;
            //                 this.exportBtnDisabled = true;
            //                 this.refundBtnDisabled = true;
            //
            //                 switch (that.curTicket) {
            //                     case '全部票种':
            //                         // 对父表有要求，订单表的活动id必须一致
            //                         if(that.curStatus === '全部状态' && that.inputContent === '') {
            //                             para.condition = '';
            //                         } else if(that.curStatus !== '全部状态' && that.inputContent !== '') {
            //                             para.condition = '(' + this.mac.fd.groupActivityBill.name + '="' + that.inputContent + '"||' + this.mac.fd.groupActivityBill.mobile + '="' + that.inputContent + '")&&' + this.mac.fd.groupActivityBill.status +  '=' + that.curStatus;
            //                         } else if(that.curStatus === '全部状态' && that.inputContent !== '') {
            //                             para.condition = this.mac.fd.groupActivityBill.name + '="' + that.inputContent + '"||' + this.mac.fd.groupActivityBill.mobile + '="' + that.inputContent + '"';
            //                         } else if(that.curStatus !== '全部状态' && that.inputContent === '') {
            //                             para.condition = this.mac.fd.groupActivityBill.status +  '=' + that.curStatus
            //                         }
            //                         break;
            //                     case '免费票':
            //                         // 对父表有要求，订单表的活动id必须一致，同时price字段为0
            //                         if(that.curStatus === '全部状态' && that.inputContent === '') {
            //                             para.condition = this.mac.fd.groupActivityBill.price +  '=0';
            //                         } else if(that.curStatus !== '全部状态' && that.inputContent !== '') {
            //                             para.condition = '(' + this.mac.fd.groupActivityBill.name + '="' + that.inputContent + '"||' + this.mac.fd.groupActivityBill.mobile + '="' + that.inputContent + '")&&' + this.mac.fd.groupActivityBill.status +  '=' + that.curStatus + '&&' + this.mac.fd.groupActivityBill.price +  '=0';
            //                         } else if(that.curStatus === '全部状态' && that.inputContent !== '') {
            //                             para.condition = '(' + this.mac.fd.groupActivityBill.name + '="' + that.inputContent + '"||' + this.mac.fd.groupActivityBill.mobile + '="' + that.inputContent + '")&&' + this.mac.fd.groupActivityBill.price +  '=0';
            //                         } else if(that.curStatus !== '全部状态' && that.inputContent === '') {
            //                             para.condition = this.mac.fd.groupActivityBill.status +  '=' + that.curStatus + '&&' + this.mac.fd.groupActivityBill.price +  '=0';
            //                         }
            //                         break;
            //                     case '收费票':
            //                         // 对父表有要求，订单表的活动id必须一致，同时price字段不为0
            //                         if(that.curStatus === '全部状态' && that.inputContent === '') {
            //                             para.condition = this.mac.fd.groupActivityBill.price +  '>0';
            //                         } else if(that.curStatus !== '全部状态' && that.inputContent !== '') {
            //                             para.condition = '(' + this.mac.fd.groupActivityBill.name + '="' + that.inputContent + '"||' + this.mac.fd.groupActivityBill.mobile + '="' + that.inputContent + '")&&' + this.mac.fd.groupActivityBill.status +  '=' + that.curStatus + '&&' + this.mac.fd.groupActivityBill.price +  '>0';
            //                         } else if(that.curStatus === '全部状态' && that.inputContent !== '') {
            //                             para.condition = '(' + this.mac.fd.groupActivityBill.name + '="' + that.inputContent + '"||' + this.mac.fd.groupActivityBill.mobile + '="' + that.inputContent + '")&&' + this.mac.fd.groupActivityBill.price +  '>0';
            //                         } else if(that.curStatus !== '全部状态' && that.inputContent === '') {
            //                             para.condition = this.mac.fd.groupActivityBill.status +  '=' + that.curStatus + '&&' + this.mac.fd.groupActivityBill.price +  '>0';
            //                         }
            //                         break;
            //                 }
            //
            //                 if(para.condition === '') {
            //                     conditionData = {
            //                         condition: that.mac.fd.groupActivityBill.groupActivityID + '=' + that.para.activityId,
            //                         start: start,
            //                         total: 10
            //                     };
            //                 } else {
            //                     conditionData = {
            //                         condition: '(' + para.condition + ')&&' + that.mac.fd.groupActivityBill.groupActivityID + '=' + that.para.activityId,
            //                         start: start,
            //                         total: 10
            //                     };
            //                 }
            //
            //                 that.inputOrderData(conditionData, function() {
            //                     if(that.selectNum === 0 && that.allSelected.length === 0) {
            //                         para.nStep = 'refreshPagination';
            //                     } else {
            //                         para.nStep = 'refreshNum';
            //                     }
            //                     that.selectNum = 0;
            //                     that.selectNumText = '已选取 0 笔';
            //                     that.allSelected = [];
            //
            //                     that.forceUpdateData(function () {
            //                         if (++dbFlag === 2) {
            //                             that.searchApply(start, successCallBack, errorCallBack)
            //                         }
            //                     });
            //                 }, function () {
            //                 });
            //                 break;
            //             case 'refreshNum':
            //                 that.sm.selectedNumRef.startModule(function () {
            //                     para.nStep = 'refreshAllSelect';
            //                     if (++dbFlag === 2) {
            //                         that.searchApply(start, successCallBack, errorCallBack)
            //                     }
            //                 }, function () {
            //                 });
            //                 break;
            //             case 'refreshAllSelect':
            //                 that.sm.allCheckRef.startModule(function () {
            //                     para.nStep = 'refreshPagination';
            //                     if (++dbFlag === 2) {
            //                         that.searchApply(start, successCallBack, errorCallBack)
            //                     }
            //                 }, function () {
            //                 });
            //                 break;
            //             case 'refreshInput':
            //                 if(that.inputContent === '') {
            //                     para.nStep = 'refreshPagination';
            //                     dbFlag++;
            //                     break;
            //                 }
            //                 that.inputContent = '';
            //                 that.forceUpdateData(function () {
            //                     that.sm.selectInputRef.startModule(function () {
            //                         para.nStep = 'refreshPagination';
            //                         if (++dbFlag === 2) {
            //                             that.searchApply(start, successCallBack, errorCallBack)
            //                         }
            //                     }, function () {
            //                     });
            //                 });
            //                 break;
            //             case 'refreshPagination':
            //                 // 刷新报名总人数：
            //                 that.itemTotal = that.getApplyTotal();
            //                 that.forceUpdateData(function () {
            //                     that.sm.paginationRef.startModule(function () {
            //                         para.nStep = 'isEmpty';
            //                         if (++dbFlag === 2) {
            //                             that.searchApply(start, successCallBack, errorCallBack)
            //                         }
            //                     }, function () {
            //                     });
            //                 });
            //                 break;
            //             case 'isEmpty':
            //                 if(that.itemIsEmpty) {
            //                     that.showSubModule('itemEmptyRef', true, function () {
            //                         para.nStep = 'end';
            //                         if (++dbFlag === 2) {
            //                             that.searchApply(start, successCallBack, errorCallBack)
            //                         }
            //                     }, para.errorCallBack);
            //                 } else {
            //                     that.showSubModule('itemEmptyRef', false, function () {
            //                     }, para.errorCallBack);
            //                     para.nStep = 'refreshItems';
            //                     dbFlag++;
            //                 }
            //                 break;
            //             case 'refreshItems':
            //                 if (para.i > that.sm.applyItemRef.length - 1) {
            //                     para.i = 0;
            //                     para.nStep = 'end';
            //                     dbFlag++;
            //                     break;
            //                 }
            //
            //                 that.sm.applyItemRef[para.i].startModule(function () {
            //                     para.i++;
            //                     para.nStep = 'refreshItems';
            //                     if (++dbFlag === 2) {
            //                         that.searchApply(start, successCallBack, errorCallBack)
            //                     }
            //                 }, function () {
            //                 });
            //                 break;
            //             // case 'showItems':
            //             //     that.showSubModule('applyItemRef', true, function () {
            //             //         para.nStep = 'end';
            //             //         if (++dbFlag === 2) {
            //             //             that.searchApply(start, successCallBack, errorCallBack)
            //             //         }
            //             //     }, para.errorCallBack);
            //             //     break;
            //             case 'end':
            //                 para.successCallBack();
            //                 return
            //         }
            //         if (++dbFlag === 1) {
            //             return
            //         }
            //     }
            // },

            refundBtnClickWrap: function() {
                let that = this;
                this.refundBtnClick(function () {
                    that.searchApply(function () {
                    }, function () {
                    })
                }, function () {
                })
            },
            refundBtnClick: function (successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'applyManage_refundBtnClick';
                let dbFlag;
                let dbData;
                let tableName;
                let record;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    isEmpty: true,
                    selectItemIdArr: []
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
                            for(let i = 0; i < this.itemSelectedArr.length; i++) {
                                if(this.itemSelectedArr[i] === true) {
                                    para.isEmpty = false;
                                    para.selectItemIdArr.push(this.billIdArr[i]);
                                }
                            }
                            if(para.isEmpty) {
                                this.$message.warning('请选择一条记录进行操作！');
                                para.nStep = 'end';
                            } else {
                                para.nStep = 'isLegal';
                            }
                            dbFlag++;
                            break;
                        case 'isLegal':
                            tableName = this.mac.tb.groupActivityBill;
                            dbData = {};
                            dbData[that.mac.fd.id] = para.selectItemIdArr;
                            dbData[that.mac.fd.groupActivityBill.status] = [];
                            that.sys.api.recordRead(tableName, dbData, function () {
                                let isLegal = true;
                                for(let i = 0; i < dbData[that.mac.fd.id].length; i++) {
                                    if(dbData[that.mac.fd.groupActivityBill.status][i] !== that.mac.enum.groupActivityBill.status.refund) {
                                        isLegal = false;
                                        break
                                    }
                                }
                                if(isLegal) {
                                    para.nStep = 'confirm';
                                } else {
                                    that.$message.warning('只有待退款状态的名单才能进行退款操作！');
                                    para.nStep = 'end';
                                }
                                if (++dbFlag === 2) {
                                    that.refundBtnClick(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'confirm':
                            this.$confirm('您确定要进行退款操作吗！', '提示', {
                                confirmButtonText: '确定',
                                cancelButtonText: '取消',
                                type: 'warning'
                            }).then(() => {
                                // 成功操作：
                                para.nStep = 'getSourceId';
                                if (++dbFlag === 2) {
                                    that.refundBtnClick(successCallBack, errorCallBack)
                                }
                            }).catch(() => {
                                // 失败操作：
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.refundBtnClick(successCallBack, errorCallBack)
                                }
                            });
                            break;
                        case 'getSourceId':
                            tableName = this.mac.tb.groupActivityBill;
                            record = para.selectItemIdArr;
                            that.sys.api.getSourceRecord(tableName, record, function (result) {
                                // 向云端发事件，修改数据；同时修改前端数据：
                                that.ep.refundPassIn(result, function () {
                                }, function () {
                                });

                                para.nStep = 'refund';
                                if (++dbFlag === 2) {
                                    that.refundBtnClick(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'refund':
                            tableName = this.mac.tb.groupActivityBill;
                            dbData = {};
                            dbData[that.mac.fd.id] = para.selectItemIdArr;
                            dbData[that.mac.fd.groupActivityBill.status] = [];
                            para.selectItemIdArr.forEach(function () {
                                dbData[that.mac.fd.groupActivityBill.status].push(that.mac.enum.groupActivityBill.status.refunding)
                            });
                            this.modifyData(tableName, dbData, function () {
                                that.$alert('系统退款中，退款金额原路返回至参与者的付款账户。', '操作成功！', {
                                    confirmButtonText: '知道了',
                                    type: 'success',
                                    center: true
                                });
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.refundBtnClick(successCallBack, errorCallBack)
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

            noticeBtnClick: function () {
                // 获取接收短信人的手机号：
                let phone = 18356673456;
                this.ep.groupNoticeIn(phone, function () {
                }, function () {
                });
            },

            exportBtnClick: function () {
            },

            selectAllApply: function () {
                if(this.allSelected.length > 0) {
                    // 有名单被选中后，操作按钮解除禁止：
                    this.noticeBtnDisabled = false;
                    this.exportBtnDisabled = false;
                    this.refundBtnDisabled = false;
                    // 设置选取的数量：
                    this.selectNum = this.itemSelectedArr.length;
                    this.selectNumText = '已选取 ' + this.selectNum + ' 笔';

                    // this.rejectBtnDisabled = false;
                    // this.passBtnDisabled = false;

                    // 同步ItemSelectedArr中的值
                    for(let i = 0; i < this.itemSelectedArr.length; i++) {
                        this.itemSelectedArr[i] = true;
                    }
                    for(let i = 0; i < this.sm.applyItemRef.length; i++) {
                        this.sm.applyItemRef[i].selectApply(true);
                    }
                } else {
                    this.noticeBtnDisabled = true;
                    this.exportBtnDisabled = true;
                    this.refundBtnDisabled = true;
                    this.selectNum = 0;
                    this.selectNumText = '已选取 0 笔';
                    // this.rejectBtnDisabled = true;
                    // this.passBtnDisabled = true;

                    for(let i = 0; i < this.itemSelectedArr.length; i++) {
                        this.itemSelectedArr[i] = false;
                    }
                    for(let i = 0; i < this.sm.applyItemRef.length; i++) {
                        this.sm.applyItemRef[i].selectApply(false);
                    }
                }

                this.$nextTick(function () {
                    this.sm.selectedNumRef.startModule(function () {
                    }, function () {
                    });
                });
            },

            modifyData: function(tableName, data, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'applyManage_modifyData';
                let dbFlag;
                let dbData;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0,
                    selectedItemArr: []
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
                            // 获取当前选中的item的索引：
                            for(let i = 0; i < this.itemSelectedArr.length; i++) {
                                if(this.itemSelectedArr[i] === true) {
                                    para.selectedItemArr.push(i);
                                }
                            }

                            that.sys.api.recordModify(tableName, data, function () {
                                para.nStep = 'init';
                                if (++dbFlag === 2) {
                                    that.modifyData(tableName, data, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'init':
                            if(para.i > para.selectedItemArr.length - 1) {
                                para.i = 0;
                                para.nStep = 'refreshPage';
                                dbFlag++;
                                break;
                            }
                            that.sm.applyItemRef[para.selectedItemArr[para.i]].startModule(function () {
                                para.i++;
                                para.nStep = 'init';
                                if (++dbFlag === 2) {
                                    that.modifyData(tableName, data, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'refreshPage':
                            that.noticeBtnDisabled = true;
                            that.exportBtnDisabled = true;
                            that.refundBtnDisabled = true;

                            // 待操作完成后，会取消所有勾选，需要同步刷新数据：
                            for(let i = 0; i < that.itemSelectedArr.length; i++) {
                                that.itemSelectedArr[i] = false
                            }
                            that.selectNum = 0;
                            that.selectNumText = '已选取 0 笔';
                            that.allSelected = [];

                            that.$nextTick(function () {
                                that.sm.allCheckRef.startModule(function () {
                                }, function () {
                                });
                                that.sm.selectedNumRef.startModule(function () {
                                }, function () {
                                });
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.modifyData(tableName, data, successCallBack, errorCallBack)
                                }
                            });
                            break;
                        // case 'emptySelected':
                        //     for(let i = 0; i < para.selectedItemArr.length; i++) {
                        //         this.sm.applyItemRef[para.selectedItemArr[i]].selectApply(false);
                        //     }
                        //     para.nStep = 'end';
                        //     dbFlag++;
                        //     break;
                        case 'end':
                            para.successCallBack();
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },

            applyCheck: function (id, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'applyManage_applyCheck';
                let dbFlag;
                let dbData;
                let tableName;
                let record;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    isEmpty: true,
                    selectItemIdArr: []
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
                            for(let i = 0; i < this.itemSelectedArr.length; i++) {
                                if(this.itemSelectedArr[i] === true) {
                                    para.isEmpty = false;
                                    para.selectItemIdArr.push(this.billIdArr[i]);
                                }
                            }
                            if(para.isEmpty) {
                                this.$message.warning('请选择一条记录进行操作！');
                                para.nStep = 'end';
                            } else {
                                para.nStep = 'isLegal';
                            }
                            dbFlag++;
                            break;
                        case 'isLegal':
                            tableName = this.mac.tb.groupActivityBill;
                            dbData = {};
                            dbData[that.mac.fd.id] = para.selectItemIdArr;
                            dbData[that.mac.fd.groupActivityBill.status] = [];
                            that.sys.api.recordRead(tableName, dbData, function () {
                                let isLegal = true;
                                for(let i = 0; i < dbData[that.mac.fd.id].length; i++) {
                                    if(dbData[that.mac.fd.groupActivityBill.status][i] !== that.mac.enum.groupActivityBill.status.check) {
                                        isLegal = false;
                                        break
                                    }
                                }
                                if(isLegal) {
                                    para.nStep = 'type';
                                } else {
                                    that.$message.warning('只有待审核状态的名单才能进行名单审核操作！');
                                    para.nStep = 'end';
                                }
                                if (++dbFlag === 2) {
                                    that.applyCheck(id, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'type':
                            if(id == 1) {
                                para.nStep = 'getSourceId';
                                dbFlag++
                            } else {
                                para.nStep = 'reject';
                                dbFlag++
                            }
                            break;
                        case 'getSourceId':
                            tableName = this.mac.tb.groupActivityBill;
                            record = para.selectItemIdArr;
                            that.sys.api.getSourceRecord(tableName, record, function (result) {
                                // 向云端发事件，修改数据；同时修改前端数据：
                                that.ep.orderApprovalIn(result, 0, '', function () {
                                }, function () {
                                });

                                para.nStep = 'pass';
                                if (++dbFlag === 2) {
                                    that.refundBtnClick(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'pass':
                            tableName = this.mac.tb.groupActivityBill;
                            dbData = {};
                            dbData[that.mac.fd.id] = para.selectItemIdArr;
                            dbData[that.mac.fd.groupActivityBill.status] = [];
                            para.selectItemIdArr.forEach(function () {
                                dbData[that.mac.fd.groupActivityBill.status].push(that.mac.enum.groupActivityBill.status.checkTicket)
                            });
                            this.modifyData(tableName, dbData, function () {
                                that.searchApply(function () {
                                }, function () {
                                });
                                that.$message.success('审核通过！');
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.applyCheck(id, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'reject':
                            that.rejectBillIdArr = JSON.parse(JSON.stringify(para.selectItemIdArr));
                            that.forceUpdateData(function () {
                                that.sm.dialogRef.startModule(function () {
                                    para.nStep = 'showDialog';
                                    if (++dbFlag === 2) {
                                        that.applyCheck(id, successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
                            });
                            break;
                        case 'showDialog':
                            that.showSubModule('dialogRef', true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.applyCheck(id, successCallBack, errorCallBack)
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

            checkApply: function (id) {
                this.applyCheck(id, function () {
                }, function () {
                });
            },

            pageChange: function (num) {
                let that = this;
                let start = 10 * (num - 1);
                this.inputOrderData(start, function () {
                    that.searchApply(function () {
                    }, function () {
                    })
                }, function () {
                })
            },
            changeAllSelected: function(select, curItemId) {
                // 同步ItemSelectedArr中的数据：
                for(let i = 0; i < this.billIdArr.length; i++) {
                    if(curItemId === this.billIdArr[i]) {
                        select ? this.itemSelectedArr[i] = true : this.itemSelectedArr[i] = false;
                        break;
                    }
                }

                // 判断是否需要勾选全选按钮：
                if(select) {
                    this.selectNum++;
                    this.selectNumText = '已选取 ' + this.selectNum + ' 笔';

                    let isAll = true;
                    // 有名单被选中后，操作按钮解除禁止：
                    this.noticeBtnDisabled = false;
                    this.exportBtnDisabled = false;
                    this.refundBtnDisabled = false;
                    // this.rejectBtnDisabled = false;
                    // this.passBtnDisabled = false;

                    for(let i = 0; i < this.itemSelectedArr.length; i++) {
                        if(this.itemSelectedArr[i] === false) {
                            isAll = false;
                            break;
                        }
                    }
                    if(isAll) {
                        if(this.allSelected.length === 0) {
                            this.allSelected = [1];
                            this.$nextTick(function () {
                                this.sm.allCheckRef.startModule(function () {
                                }, function () {
                                });
                            });
                        }
                    } else {
                        if(this.allSelected.length === 1) {
                            this.allSelected = [];
                            this.$nextTick(function () {
                                this.sm.allCheckRef.startModule(function () {
                                }, function () {
                                });
                            });
                        }
                    }
                } else {
                    this.selectNum--;
                    this.selectNumText = '已选取 ' + this.selectNum + ' 笔';

                    let isEmpty = true;
                    for(let i = 0; i < this.itemSelectedArr.length; i++) {
                        if(this.itemSelectedArr[i] === true) {
                            isEmpty = false;
                            break;
                        }
                    }
                    if(isEmpty) {
                        this.noticeBtnDisabled = true;
                        this.exportBtnDisabled = true;
                        this.refundBtnDisabled = true;
                        // this.rejectBtnDisabled = true;
                        // this.passBtnDisabled = true;
                    } else {
                        this.noticeBtnDisabled = false;
                        this.exportBtnDisabled = false;
                        this.refundBtnDisabled = false;
                        // this.rejectBtnDisabled = false;
                        // this.passBtnDisabled = false;
                    }

                    if(this.allSelected.length === 1) {
                        this.allSelected = [];
                        this.$nextTick(function () {
                            this.sm.allCheckRef.startModule(function () {
                            }, function () {
                            });
                        });
                    }
                }

                this.$nextTick(function () {
                    this.sm.selectedNumRef.startModule(function () {
                    }, function () {
                    });
                });
            },

            dialogConfirm: function(idArr, value) {
                let that = this;
                let tableName = this.mac.tb.groupActivityBill;

                that.sys.api.getSourceRecord(tableName, idArr, function (result) {
                    // 向云端发事件，修改数据；同时修改前端数据：
                    that.ep.orderApprovalIn(result, 1, value, function () {
                    }, function () {
                    });

                    let dbData = {};
                    dbData[that.mac.fd.id] = idArr;
                    dbData[that.mac.fd.groupActivityBill.status] = [];
                    idArr.forEach(function () {
                        dbData[that.mac.fd.groupActivityBill.status].push(that.mac.enum.groupActivityBill.status.reject)
                    });
                    that.modifyData(tableName, dbData, function () {
                        that.$message.success('拒绝成功！');
                        that.searchApply(function () {
                        }, function () {
                        })
                    }, function () {
                    });
                }, function () {
                });
            },

            removeRepetition: function(arr) {
                var obj = {};
                for (var i = 0; i < arr.length; i++) {
                    obj[arr[i]] = arr[i];
                }
                var arr1 = [];
                for (var k in obj) {
                    arr1.push(obj[k]);
                }
                return arr1;
            },


            statusRef_dataModifyEvent: function (value) {
                this.statusChange(value)
            },
            ticketRef_dataModifyEvent: function (value) {
                this.ticketChange(value)
            },
            selectInputRef_dataModifyEvent: function (value) {
                this.selectInputChange(value)
            },
            confirmBtnRef_buttonClickEvent: function () {
                this.searchApplyWrap()
            },
            listCheckRef_itemClickEvent: function (id) {
                this.checkApply(id);
            },
            refundBtnRef_buttonClickEvent: function () {
                this.refundBtnClickWrap()
            },
            noticeBtnRef_buttonClickEvent: function () {
                this.noticeBtnClick()
            },
            exportBtnRef_buttonClickEvent: function () {
                this.exportBtnClick()
            },
            allCheckRef_dataModifyEvent: function () {
                this.selectAllApply();
            },
            paginationRef_currentChangeEvent: function (num) {
                this.pageChange(num);
            },
            applyItemRef_ToggleApply: function (select, curItemId) {
                this.changeAllSelected(select, curItemId);
            },
            dialogRef_confirmEvent: function (idArr, value) {
                this.dialogConfirm(idArr, value)
            },
        }
    };
</script>
<style lang="scss">
    .el-dropdown-menu__item {
        padding: 0 40px !important;
    }

    #apply-manage-wrap {
        box-sizing: border-box;
        padding: 20px;

        li {
            list-style: none;
        }

        .title {
            padding: 10px 0;
            border-bottom: 1px solid #e4e4e4;
        }

        .select-row {
            padding: 20px 0 10px 0;

            .status, .ticket, .select-input, .confirm-btn {
                display: inline-block;
                margin-right: 10px;
            }
        }

        .btn-row {
            padding: 10px 0;

            .list-check, .refund-btn, .notice-btn, .export-btn {
                display: inline-block;
                margin-right: 10px;
            }

            .list-check {
                height: 34px;
                line-height: 34px;
                background-color: #409EFF;
                border-radius: 4px;
                overflow: hidden;
                padding: 0 16px;
                vertical-align: bottom;

                .el-dropdown-link {
                    color: #fff;

                    i {
                        color: #fff;
                    }
                }
            }
        }

        .item-empty {
            text-align: center;
            span {
                display: block;
                margin-top: 100px;
            }

        }

        .select-num-row {
            padding: 10px 0;
            overflow: hidden;
            .total-num {
                float: right;
            }
            .all-select, .selected-num {
                display: inline-block;
                margin-right: 20px;
            }
        }

        .list-table {
            border: 1px solid #e4e4e4;
            border-bottom: none;

            .table-title {
                display: flex;
                justify-content: space-around;
                background-color: #f5f7fa;
                padding: 10px 0;

                span {
                    flex: 1;
                    text-align: center;
                }
            }
            .table-item {
                .apply-item-wrap {
                    &:last-child {
                        padding-bottom: 0;
                    }
                }
            }
        }

        .pagination-row {
            margin-top: 20px;
            text-align: center;
            padding: 10px 0;
            .el-pagination {
                color: #606266;
                font-weight: 400;
                .btn-next, .btn-prev {
                    color: #606266;
                }
                .btn-quicknext, .btn-quickprev {
                    color: #606266;
                    &:hover {
                        color: #409EFF;
                    }
                }
            }
        }
    }
</style>







<!--适用于新架构版本-->
<!--
<template>
    <div id="apply-manage-wrap">
        <div class="title">
            <lm-link-text
                    ref="titleRef"
                    refId="titleRef"
                    v-show="pvt_isShow.title === 'titleRef'"
                    :paraVarPair="pvt_title.titleRef.paraVarPair"
                    :para="pvt_title.titleRef.para"
                    :attr="pvt_title.titleRef.attr">
            </lm-link-text>
        </div>
        <div class="select-row">
            <div class="status">
                <lm-select
                        ref="statusRef"
                        refId="statusRef"
                        v-show="pvt_isShow.status === 'statusRef'"
                        :paraVarPair="pvt_status.statusRef.paraVarPair"
                        :para="pvt_status.statusRef.para"
                        :attr="pvt_status.statusRef.attr">
                </lm-select>
            </div>
            <div class="ticket">
                <lm-select
                        ref="ticketRef"
                        refId="ticketRef"
                        v-show="pvt_isShow.ticket === 'ticketRef'"
                        :paraVarPair="pvt_ticket.ticketRef.paraVarPair"
                        :para="pvt_ticket.ticketRef.para"
                        :attr="pvt_ticket.ticketRef.attr">
                </lm-select>
            </div>
            <div class="select-input">
                <lm-input-text
                        ref="selectInputRef"
                        refId="selectInputRef"
                        v-show="pvt_isShow.selectInput === 'selectInputRef'"
                        :paraVarPair="pvt_selectInput.selectInputRef.paraVarPair"
                        :para="pvt_selectInput.selectInputRef.para"
                        :attr="pvt_selectInput.selectInputRef.attr">
                </lm-input-text>
            </div>
            <div class="confirm-btn">
                <lm-button
                        ref="confirmBtnRef"
                        refId="confirmBtnRef"
                        v-show="pvt_isShow.confirmBtn === 'confirmBtnRef'"
                        :paraVarPair="pvt_confirmBtn.confirmBtnRef.paraVarPair"
                        :para="pvt_confirmBtn.confirmBtnRef.para"
                        :attr="pvt_confirmBtn.confirmBtnRef.attr">
                </lm-button>
            </div>
        </div>
        <div class="btn-row">
            <div class="list-check">
                <lm-dropdown
                        ref="listCheckRef"
                        refId="listCheckRef"
                        v-show="pvt_isShow.listCheck === 'listCheckRef'"
                        :paraVarPair="pvt_listCheck.listCheckRef.paraVarPair"
                        :para="pvt_listCheck.listCheckRef.para"
                        :attr="pvt_listCheck.listCheckRef.attr">
                </lm-dropdown>
            </div>
            <div class="refund-btn">
                <lm-button
                        ref="refundBtnRef"
                        refId="refundBtnRef"
                        v-show="pvt_isShow.refundBtn === 'refundBtnRef'"
                        :paraVarPair="pvt_refundBtn.refundBtnRef.paraVarPair"
                        :para="pvt_refundBtn.refundBtnRef.para"
                        :attr="pvt_refundBtn.refundBtnRef.attr">
                </lm-button>
            </div>
            <div class="notice-btn">
                <lm-button
                        ref="noticeBtnRef"
                        refId="noticeBtnRef"
                        v-show="pvt_isShow.noticeBtn === 'noticeBtnRef'"
                        :paraVarPair="pvt_noticeBtn.noticeBtnRef.paraVarPair"
                        :para="pvt_noticeBtn.noticeBtnRef.para"
                        :attr="pvt_noticeBtn.noticeBtnRef.attr">
                </lm-button>
            </div>
            <div class="export-btn">
                <lm-button
                        ref="exportBtnRef"
                        refId="exportBtnRef"
                        v-show="pvt_isShow.exportBtn === 'exportBtnRef'"
                        :paraVarPair="pvt_exportBtn.exportBtnRef.paraVarPair"
                        :para="pvt_exportBtn.exportBtnRef.para"
                        :attr="pvt_exportBtn.exportBtnRef.attr">
                </lm-button>
            </div>
        </div>
        <div class="select-num-row">
            <div class="all-select">
                <lm-checkbox
                        ref="allCheckRef"
                        refId="allCheckRef"
                        v-show="pvt_isShow.allCheck === 'allCheckRef'"
                        :paraVarPair="pvt_allCheck.allCheckRef.paraVarPair"
                        :para="pvt_allCheck.allCheckRef.para"
                        :attr="pvt_allCheck.allCheckRef.attr">
                </lm-checkbox>
            </div>
            <div class="selected-num">
                <lm-link-text
                        ref="selectedNumRef"
                        refId="selectedNumRef"
                        v-show="pvt_isShow.selectedNum === 'selectedNumRef'"
                        :paraVarPair="pvt_selectedNum.selectedNumRef.paraVarPair"
                        :para="pvt_selectedNum.selectedNumRef.para"
                        :attr="pvt_selectedNum.selectedNumRef.attr">
                </lm-link-text>
            </div>
            <div class="total-num">
                <lm-link-text
                        ref="totalNumRef"
                        refId="totalNumRef"
                        v-show="pvt_isShow.totalNum === 'totalNumRef'"
                        :paraVarPair="pvt_totalNum.totalNumRef.paraVarPair"
                        :para="pvt_totalNum.totalNumRef.para"
                        :attr="pvt_totalNum.totalNumRef.attr">
                </lm-link-text>
            </div>
        </div>
        <div class="item-exist" v-show="!itemIsEmpty">
            <div class="list-table">
                <div class="table-title">
                    <lm-link-text
                            ref="titleNameRef"
                            refId="titleNameRef"
                            v-show="pvt_isShow.titleName === 'titleNameRef'"
                            :paraVarPair="pvt_titleName.titleNameRef.paraVarPair"
                            :para="pvt_titleName.titleNameRef.para"
                            :attr="pvt_titleName.titleNameRef.attr">
                    </lm-link-text>
                    <lm-link-text
                            ref="titleTelRef"
                            refId="titleTelRef"
                            v-show="pvt_isShow.titleTel === 'titleTelRef'"
                            :paraVarPair="pvt_titleTel.titleTelRef.paraVarPair"
                            :para="pvt_titleTel.titleTelRef.para"
                            :attr="pvt_titleTel.titleTelRef.attr">
                    </lm-link-text>
                    <lm-link-text
                            ref="titleTicketRef"
                            refId="titleTicketRef"
                            v-show="pvt_isShow.titleTicket === 'titleTicketRef'"
                            :paraVarPair="pvt_titleTicket.titleTicketRef.paraVarPair"
                            :para="pvt_titleTicket.titleTicketRef.para"
                            :attr="pvt_titleTicket.titleTicketRef.attr">
                    </lm-link-text>
                    <lm-link-text
                            ref="titleMoneyRef"
                            refId="titleMoneyRef"
                            v-show="pvt_isShow.titleMoney === 'titleMoneyRef'"
                            :paraVarPair="pvt_titleMoney.titleMoneyRef.paraVarPair"
                            :para="pvt_titleMoney.titleMoneyRef.para"
                            :attr="pvt_titleMoney.titleMoneyRef.attr">
                    </lm-link-text>
                    <lm-link-text
                            ref="titleNumRef"
                            refId="titleNumRef"
                            v-show="pvt_isShow.titleNum === 'titleNumRef'"
                            :paraVarPair="pvt_titleNum.titleNumRef.paraVarPair"
                            :para="pvt_titleNum.titleNumRef.para"
                            :attr="pvt_titleNum.titleNumRef.attr">
                    </lm-link-text>
                    <lm-link-text
                            ref="titleStatusRef"
                            refId="titleStatusRef"
                            v-show="pvt_isShow.titleStatus === 'titleStatusRef'"
                            :paraVarPair="pvt_titleStatus.titleStatusRef.paraVarPair"
                            :para="pvt_titleStatus.titleStatusRef.para"
                            :attr="pvt_titleStatus.titleStatusRef.attr">
                    </lm-link-text>
                    <lm-link-text
                            ref="titleTimeRef"
                            refId="titleTimeRef"
                            v-show="pvt_isShow.titleTime === 'titleTimeRef'"
                            :paraVarPair="pvt_titleTime.titleTimeRef.paraVarPair"
                            :para="pvt_titleTime.titleTimeRef.para"
                            :attr="pvt_titleTime.titleTimeRef.attr">
                    </lm-link-text>
                    <lm-link-text
                            ref="titleDetailRef"
                            refId="titleDetailRef"
                            v-show="pvt_isShow.titleDetail === 'titleDetailRef'"
                            :paraVarPair="pvt_titleDetail.titleDetailRef.paraVarPair"
                            :para="pvt_titleDetail.titleDetailRef.para"
                            :attr="pvt_titleDetail.titleDetailRef.attr">
                    </lm-link-text>
                </div>
                <div class="table-item">
                    <applyItem
                            ref="applyItemRef"
                            refId="applyItemRef"
                            v-show="pvt_isShow.applyItem === 'applyItemRef'"
                            v-for="(item, index) in pvt_applyItem.applyItemRef.forData"
                            :number="index"
                            :paraVarPair="pvt_applyItem.applyItemRef.paraVarPair"
                            :para="item.para"
                            :attr="item.attr">
                    </applyItem>
                </div>
            </div>
            <div class="pagination-row">
                <lm-pagination
                        ref="paginationRef"
                        refId="paginationRef"
                        v-show="pvt_isShow.pagination === 'paginationRef'"
                        :paraVarPair="pvt_pagination.paginationRef.paraVarPair"
                        :para="pvt_pagination.paginationRef.para"
                        :attr="pvt_pagination.paginationRef.attr">
                </lm-pagination>
            </div>
            <div class="apply-reject-dialog">
                <rejectDialog
                        ref="dialogRef"
                        refId="dialogRef"
                        v-show="pvt_isShow.dialog === 'dialogRef'"
                        :paraVarPair="pvt_dialog.dialogRef.paraVarPair"
                        :para="pvt_dialog.dialogRef.para"
                        :attr="pvt_dialog.dialogRef.attr">
                </rejectDialog>
            </div>
        </div>
        <div class="item-empty">
            <lm-link-text
                    ref="itemEmptyRef"
                    refId="itemEmptyRef"
                    v-show="pvt_isShow.itemEmpty === 'itemEmptyRef'"
                    :paraVarPair="pvt_itemEmpty.itemEmptyRef.paraVarPair"
                    :para="pvt_itemEmpty.itemEmptyRef.para"
                    :attr="pvt_itemEmpty.itemEmptyRef.attr">
            </lm-link-text>
        </div>

    </div>
</template>
<script>
    import applyItem from './applyItem';
    import rejectDialog from './rejectDialog';
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';

    export default {
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ['sys'],
        // provide: function () {
        //     return {
        //         sys: this.sys
        //     }
        // },
        components: {
            applyItem,
            rejectDialog
        },
        data: function () {
            return {
                mac: mac.mac,

                myType: 1,
                mySite: '',
                myID: 1,

                allSelected: [],
                itemSelectedArr: [],
                billIdArr: [],
                curStatus: '全部状态',
                curTicket: '全部票种',
                inputContent: '',
                noticeBtnDisabled: true,
                exportBtnDisabled: true,
                refundBtnDisabled: true,
                selectNum: 0,
                selectNumText: '已选取 0 笔',
                itemTotal: 1,
                itemIsEmpty: false,
                rejectBillIdArr: [],
                totalNumText: '',

                pvt_subModuleMap: {
                    subModule: ['titleRef', 'statusRef', 'ticketRef', 'selectInputRef', 'confirmBtnRef', 'listCheckRef', 'noticeBtnRef', 'exportBtnRef', 'titleNameRef', 'titleTelRef', 'titleTicketRef', 'titleMoneyRef', 'titleNumRef', 'titleStatusRef', 'titleTimeRef', 'titleDetailRef', 'applyItemRef', 'paginationRef', 'selectedNumRef', 'allCheckRef', 'dialogRef', 'itemEmptyRef', 'refundBtnRef', 'totalNumRef'],
                    vessel: ['title', 'status', 'ticket', 'selectInput', 'confirmBtn', 'listCheck', 'noticeBtn', 'exportBtn', 'titleName', 'titleTel', 'titleTicket', 'titleMoney', 'titleNum', 'titleStatus', 'titleTime', 'titleDetail', 'applyItem', 'pagination', 'selectedNum', 'allCheck', 'dialog', 'itemEmpty', 'refundBtn', 'totalNum'],
                },

                // 各个容器当前显示的子模块
                pvt_isShow: {
                    title: null,
                    status: null,
                    ticket: null,
                    selectInput: null,
                    confirmBtn: null,
                    listCheck: null,
                    noticeBtn: null,
                    exportBtn: null,
                    titleName: null,
                    titleTel: null,
                    titleTicket: null,
                    titleMoney: null,
                    titleNum: null,
                    titleStatus: null,
                    titleTime: null,
                    titleDetail: null,
                    applyItem: null,
                    pagination: null,
                    selectedNum: null,
                    allCheck: null,
                    dialog: null,
                    itemEmpty: null,
                    refundBtn: null,

                    totalNum: null,
                },

                // 当前模块输入类型的事务接口名称，工具完成前需要用户手动填写
                pvt_eventPortInput: ['refundPassIn', 'orderApprovalIn', 'groupNoticeIn'],

            }
        },

        computed: {
            pvt_dialog: function () {
                return {
                    dialogRef: {
                        paraVarPair: {},
                        para: {
                            rejectBillIdArr: this.rejectBillIdArr
                        },
                        attr: {

                        }
                    }
                }
            },

            pvt_title: function () {
                return {
                    titleRef: {
                        paraVarPair: {},
                        para: {
                            textData: '报名管理'
                        },
                        attr: {
                            fontSize: '16px',
                            color: '#303133'
                        }
                    }
                }
            },

            pvt_status: function () {
                return {
                    statusRef: {
                        paraVarPair: {
                            value: 'value'
                        },
                        para: {
                            value: '全部状态',
                            listSource: [
                                {value: '全部状态', label: '全部状态', disabled: false, icon: '', image: ''},
                                {value: 1, label: '待付款', disabled: false, icon: '', image: ''},
                                {value: 0, label: '待审核', disabled: false, icon: '', image: ''},
                                {value: 6, label: '待验票', disabled: false, icon: '', image: ''},
                                {value: 2, label: '待退款', disabled: false, icon: '', image: ''},
                                {value: 3, label: '退款中', disabled: false, icon: '', image: ''},
                                {value: 4, label: '已退款', disabled: false, icon: '', image: ''},
                                {value: 7, label: '已完成', disabled: false, icon: '', image: ''},
                                {value: 5, label: '已拒绝', disabled: false, icon: '', image: ''},
                            ]
                        },
                        attr: {}
                    }
                }
            },

            pvt_ticket: function () {
                return {
                    ticketRef: {
                        paraVarPair: {
                            value: 'value'
                        },
                        para: {
                            value: '全部票种',
                            listSource: [
                                {value: '全部票种', label: '全部票种', disabled: false, icon: '', image: ''},
                                {value: '免费票', label: '免费票', disabled: false, icon: '', image: ''},
                                {value: '收费票', label: '收费票', disabled: false, icon: '', image: ''},
                            ]
                        },
                        attr: {}
                    }
                }
            },

            pvt_selectInput: function () {
                return {
                    selectInputRef: {
                        paraVarPair: {},
                        para: {
                            text: ''
                        },
                        attr: {
                            placeholder: '姓名 手机'
                        }
                    }
                }
            },

            pvt_confirmBtn: function () {
                return {
                    confirmBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['查询', '']
                        },
                        attr: {
                            type: 'primary',
                            height: '34px'
                        }
                    }
                }
            },

            pvt_listCheck: function () {
                return {
                    listCheckRef: {
                        paraVarPair: {},
                        para: {
                            dropDown: [
                                {id: '1', label: '通过', disabled: false, icon: ''},
                                {id: '2', label: '拒绝', disabled: false, icon: ''},
                            ]
                        },
                        attr: {
                            menuName: '名单审核',
                            trigger: 'click',
                            placement: 'bottom'
                        }
                    }
                }
            },

            pvt_refundBtn: function () {
                return {
                    refundBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['退款', 'el-icon-user']
                        },
                        attr: {
                            type: 'primary',
                            height: '34px',
                            disabled: this.refundBtnDisabled
                        }
                    }
                }
            },

            pvt_noticeBtn: function () {
                return {
                    noticeBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['群发消息', 'el-icon-message']
                        },
                        attr: {
                            type: 'primary',
                            height: '34px',
                            disabled: this.noticeBtnDisabled
                        }
                    }
                }
            },

            pvt_exportBtn: function () {
                return {
                    exportBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['导出名单', 'el-icon-download']
                        },
                        attr: {
                            type: 'primary',
                            height: '34px',
                            disabled: this.exportBtnDisabled
                        }
                    }
                }
            },

            pvt_allCheck: function () {
                return {
                    allCheckRef: {
                        paraVarPair: {
                            checkData: 'allSelected'
                        },
                        para: {
                            checkData: this.allSelected
                        },
                        attr: {
                            checkboxArr: [
                                {label: 1, text: '全选'}
                            ]
                        }
                    }
                }
            },

            pvt_selectedNum: function () {
                return {
                    selectedNumRef: {
                        paraVarPair: {},
                        para: {
                            textData: this.selectNumText
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#606266'
                        }
                    }
                }
            },

            pvt_totalNum: function () {
                return {
                    totalNumRef: {
                        paraVarPair: {},
                        para: {
                            textData: this.totalNumText
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#606266'
                        }
                    }
                }
            },

            pvt_titleName: function () {
                return {
                    titleNameRef: {
                        paraVarPair: {},
                        para: {
                            textData: '姓名'
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#606266',
                            textAlign: 'center'
                        }
                    }
                }
            },

            pvt_titleTel: function () {
                return {
                    titleTelRef: {
                        paraVarPair: {},
                        para: {
                            textData: '手机'
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#606266',
                            textAlign: 'center'
                        }
                    }
                }
            },

            pvt_titleTicket: function () {
                return {
                    titleTicketRef: {
                        paraVarPair: {},
                        para: {
                            textData: '票种'
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#606266',
                            textAlign: 'center'
                        }
                    }
                }
            },

            pvt_titleMoney: function () {
                return {
                    titleMoneyRef: {
                        paraVarPair: {},
                        para: {
                            textData: '支付金额（元）'
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#606266',
                            textAlign: 'center'
                        }
                    }
                }
            },

            pvt_titleNum: function () {
                return {
                    titleNumRef: {
                        paraVarPair: {},
                        para: {
                            textData: '订单编号'
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#606266',
                            textAlign: 'center'
                        }
                    }
                }
            },

            pvt_titleStatus: function () {
                return {
                    titleStatusRef: {
                        paraVarPair: {},
                        para: {
                            textData: '状态'
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#606266',
                            textAlign: 'center'
                        }
                    }
                }
            },

            pvt_titleTime: function () {
                return {
                    titleTimeRef: {
                        paraVarPair: {},
                        para: {
                            textData: '报名时间'
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#606266',
                            textAlign: 'center'
                        }
                    }
                }
            },

            pvt_titleDetail: function () {
                return {
                    titleDetailRef: {
                        paraVarPair: {},
                        para: {
                            textData: '操作'
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#606266',
                            textAlign: 'center'
                        }
                    }
                }
            },

            pvt_applyItem: function () {
                let loopModule = {
                    applyItemRef: {
                        para: {
                            curBillId: this.billIdArr,
                        },
                        attr: {},
                    },
                };
                let forData = this.pvt_createForData(loopModule);
                return {
                    applyItemRef: {
                        paraVarPair: {
                        },
                        forData: forData.applyItemRef,
                    },
                };
            },

            pvt_pagination: function () {
                return {
                    paginationRef: {
                        paraVarPair: {},
                        para: {
                            currentPage: 1
                        },
                        attr: {
                            pageSize: 10,
                            // total: this.itemTotal
                            total: 100
                        }
                    }
                }
            },

            pvt_itemEmpty: function () {
                return {
                    itemEmptyRef: {
                        paraVarPair: {},
                        para: {
                            textData: '暂无数据'
                        },
                        attr: {
                            fontSize: '14px',
                            color: '#909399',
                            textAlign: 'center'
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

            getApplyTotal: function() {
                return 3;
            },

            startModule: function (successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'applyManage_start';
                let dbFlag;
                let dbData;
                let tableName;
                let condition;
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
                    i: 0
                };

                if (successCallBack !== null) {
                    errorCallBack = para;
                    successCallBack = null
                }
                para = errorCallBack;

                let ref = {
                    titleRef: 'titleRef',
                    statusRef: 'statusRef',
                    ticketRef: 'ticketRef',
                    selectInputRef: 'selectInputRef',
                    confirmBtnRef: 'confirmBtnRef',
                    listCheckRef: 'listCheckRef',
                    refundBtnRef: 'refundBtnRef',
                    noticeBtnRef: 'noticeBtnRef',
                    exportBtnRef: 'exportBtnRef',
                    titleNameRef: 'titleNameRef',
                    titleTelRef: 'titleTelRef',
                    titleTicketRef: 'titleTicketRef',
                    titleMoneyRef: 'titleMoneyRef',
                    titleNumRef: 'titleNumRef',
                    titleStatusRef: 'titleStatusRef',
                    titleTimeRef: 'titleTimeRef',
                    titleDetailRef: 'titleDetailRef',
                    applyItemRef: 'applyItemRef',
                    paginationRef: 'paginationRef',
                    allCheckRef: 'allCheckRef',
                    selectedNumRef: 'selectedNumRef',
                    dialogRef: 'dialogRef',
                    itemEmptyRef: 'itemEmptyRef',
                    totalNumRef: 'totalNumRef',
                };

                para.successCallBack();

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                            // 初始化数据：
                            this.curStatus = '全部状态';
                            this.curTicket = '全部票种';
                            this.inputContent = '';
                            this.allSelected = [];
                            this.itemSelectedArr = [];
                            this.billIdArr = [];
                            this.noticeBtnDisabled = true;
                            this.exportBtnDisabled = true;
                            this.refundBtnDisabled = true;
                            this.selectNum = 0;
                            this.selectNumText = '已选取 0 笔';
                            this.itemTotal = 1;
                            that.itemIsEmpty = false;
                            that.rejectBillIdArr = [];
                            // this.rejectBtnDisabled = true;
                            // this.passBtnDisabled = true;

                            // 获取报名总人数：
                            that.itemTotal = that.getApplyTotal();

                            para.nStep = 'getApplyData';
                            dbFlag++;
                            break;
                        case 'getApplyData':
                            condition = {
                                // 再新环境中，有对其父表做条件限制，不过暂未实现，所以先不设定条件限制：
                                // condition: '',
                                condition: that.mac.fd.groupActivityOrder.groupActivityID + '=' + that.para.activityId,
                                start: 0,
                                total: 10
                            };
                            that.inputOrderData(condition, function () {
                                that.forceUpdateData(function () {
                                    para.nStep = 'start_1';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                });
                            }, function () {
                            });
                            break;
                        case 'start_1':
                            that.sm[ref.titleRef].startModule(function () {
                                para.nStep = 'start_2';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_2':
                            that.sm[ref.statusRef].startModule(function () {
                                para.nStep = 'start_3';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_3':
                            that.sm[ref.ticketRef].startModule(function () {
                                para.nStep = 'start_4';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_4':
                            that.sm[ref.selectInputRef].startModule(function () {
                                para.nStep = 'start_5';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_5':
                            that.sm[ref.confirmBtnRef].startModule(function () {
                                para.nStep = 'start_6';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_6':
                            that.sm[ref.listCheckRef].startModule(function () {
                                para.nStep = 'start_8_1';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_8_1':
                            that.sm[ref.refundBtnRef].startModule(function () {
                                para.nStep = 'start_8_2';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_8_2':
                            that.sm[ref.noticeBtnRef].startModule(function () {
                                para.nStep = 'start_9';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_9':
                            that.sm[ref.exportBtnRef].startModule(function () {
                                if(that.itemIsEmpty) {
                                    para.nStep = 'start_23';
                                } else {
                                    para.nStep = 'start_10';
                                }
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_10':
                            that.sm[ref.titleNameRef].startModule(function () {
                                para.nStep = 'start_11';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_11':
                            that.sm[ref.titleTelRef].startModule(function () {
                                para.nStep = 'start_12';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_12':
                            that.sm[ref.titleTicketRef].startModule(function () {
                                para.nStep = 'start_13';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_13':
                            that.sm[ref.titleMoneyRef].startModule(function () {
                                para.nStep = 'start_14';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_14':
                            that.sm[ref.titleNumRef].startModule(function () {
                                para.nStep = 'start_15';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_15':
                            that.sm[ref.titleStatusRef].startModule(function () {
                                para.nStep = 'start_16';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_16':
                            that.sm[ref.titleTimeRef].startModule(function () {
                                para.nStep = 'start_17';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_17':
                            that.sm[ref.titleDetailRef].startModule(function () {
                                para.nStep = 'start_18';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_18':
                            if (para.i > that.sm[ref.applyItemRef].length - 1) {
                                para.i = 0;
                                para.nStep = 'start_20';
                                dbFlag++;
                                break;
                            }

                            that.sm[ref.applyItemRef][para.i].startModule(function () {
                                para.i++;
                                para.nStep = 'start_18';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_20':
                            that.sm[ref.paginationRef].startModule(function () {
                                para.nStep = 'start_21';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_21':
                            that.sm[ref.selectedNumRef].startModule(function () {
                                para.nStep = 'start_22';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_22':
                            that.sm[ref.allCheckRef].startModule(function () {
                                para.nStep = 'start_23';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        // case 'start_22_1':
                        //     that.sm[ref.totalNumRef].startModule(function () {
                        //         para.nStep = 'start_23';
                        //         if (++dbFlag === 2) {
                        //             that.startModule(successCallBack, errorCallBack)
                        //         }
                        //     }, function () {
                        //     });
                        //     break;
                        case 'start_23':
                            that.sm[ref.itemEmptyRef].startModule(function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            let refArr;
                            if(this.itemIsEmpty) {
                                refArr = ['titleRef', 'statusRef', 'ticketRef', 'selectInputRef', 'confirmBtnRef', 'listCheckRef', 'noticeBtnRef', 'exportBtnRef', 'refundBtnRef', 'itemEmptyRef', 'totalNumRef'];
                            } else {
                                refArr = ['titleRef', 'statusRef', 'ticketRef', 'selectInputRef', 'confirmBtnRef', 'listCheckRef', 'refundBtnRef', 'noticeBtnRef', 'exportBtnRef', 'titleNameRef', 'titleTelRef', 'titleTicketRef', 'titleMoneyRef', 'titleNumRef', 'titleStatusRef', 'titleTimeRef', 'titleDetailRef', 'applyItemRef', 'paginationRef', 'selectedNumRef', 'allCheckRef', 'totalNumRef'];
                            }

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

            // 需要新架构支持条件下载子表的情况：
            /*inputOrderData: function (condition, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'applyManage_inputApplyData';
                let dbFlag;
                let dbData;
                let tableName;
                let dataCondition;
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
                        // case 0:
                        //     // 发事件到终端进行数据下载，返回的id作为条件进行查询：
                        //     that.ep.inputOrderData(condition, function (result) {
                        //         para.curApplyIdArr = result;
                        //         para.nStep = 'getApplyData';
                        //         if (++dbFlag === 2) {
                        //             that.inputOrderData(condition, successCallBack, errorCallBack)
                        //         }
                        //     }, function () {
                        //     });
                        //     break;
                        case 0:
                            expression = condition.condition;
                            start = condition.start;
                            total = condition.total;
                            sort = ['id,asc'];
                            destGeneSite = '';
                            portName = this.mac.tb.groupActivityOrder;
                            inputData = null;
                            this.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                para.nStep = 1;
                                if (++dbFlag === 2) {
                                    that.inputOrderData(condition, successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 1:
                            expression = condition.condition;
                            start = condition.start;
                            total = condition.total;
                            sort = ['id,asc'];
                            destGeneSite = '';
                            portName = this.mac.tb.groupActivityBill;
                            inputData = null;
                            this.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                if(result) {
                                    that.totalNumText = '当前显示 ' + result.length + ' 笔，总共 ' + that.itemTotal + ' 笔';
                                    for(let i = 0; i < result.length; i++) {
                                        that.billIdArr.push(result[i]);
                                        that.itemSelectedArr.push(false);
                                    }
                                } else {
                                    that.totalNumText = '当前显示 ' + 0 + ' 笔，总共 ' + that.itemTotal + ' 笔';
                                    that.itemIsEmpty = true;
                                }

                                // para.nStep = 'getParentId';
                                // 目前票据表格没有订单父表，临时作为根表：
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.inputOrderData(condition, successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'getParentId':
                            // 等下载子表环境可以后，才能查找父表并下载父记录：
                            tableName = this.mac.tb.groupActivityBill;
                            record = that.billIdArr;
                            that.sys.api.getParentRecord(tableName, record, function (result) {
                                para.curOrderIdArr = that.removeRepetition(result);
                                para.nStep = 'getCloudOrderId';
                                if (++dbFlag === 2) {
                                    that.inputOrderData(condition, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'getCloudOrderId':
                            tableName = this.mac.tb.groupActivityOrder;
                            record = para.curOrderIdArr;
                            that.sys.api.getSourceRecord(tableName, record, function (result) {
                                para.cloudOrderIdArr = result;
                                para.nStep = 'inputCloudOrder';
                                if (++dbFlag === 2) {
                                    that.inputOrderData(condition, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'inputCloudOrder':
                            tableName = this.mac.tb.groupActivityOrder;
                            record = para.cloudOrderIdArr;
                            that.sys.api.dataInput(tableName, record, '', function (result) {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.inputOrderData(condition, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'end':
                            that.forceUpdateData(function () {
                                that.sm.totalNumRef.startModule(function () {
                                    para.successCallBack();
                                }, function () {
                                })
                            });
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },*/

            inputOrderData: function (condition, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'applyManage_inputApplyData';
                let dbFlag;
                let dbData;
                let tableName;
                let dataCondition;
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
                            expression = condition.condition;
                            start = condition.start;
                            total = condition.total;
                            sort = ['id,asc'];
                            destGeneSite = '';
                            portName = this.mac.tb.groupActivityOrder;
                            inputData = null;
                            this.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                para.nStep = 'getBillData';
                                if (++dbFlag === 2) {
                                    that.inputOrderData(condition, successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'getBillData':
                            tableName = this.mac.tb.groupActivityBill;
                            expression = '';
                            dbData = {};
                            dbData[that.mac.fd.id] = [];
                            this.sys.api.recordQuery(tableName, null, expression, dbData, function (result) {
                                if(dbData[that.mac.fd.id].length > 0) {
                                    that.totalNumText = '当前显示 ' + dbData[that.mac.fd.id].length + ' 笔，总共 ' + that.itemTotal + ' 笔';
                                    for(let i = 0; i < dbData[that.mac.fd.id].length; i++) {
                                        that.billIdArr.push(dbData[that.mac.fd.id][i]);
                                        that.itemSelectedArr.push(false);
                                    }
                                } else {
                                    that.totalNumText = '当前显示 ' + 0 + ' 笔，总共 ' + that.itemTotal + ' 笔';
                                    that.itemIsEmpty = true;
                                }

                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.inputOrderData(condition, successCallBack, errorCallBack)
                                }
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'end':
                            that.forceUpdateData(function () {
                                that.sm.totalNumRef.startModule(function () {
                                    para.successCallBack();
                                }, function () {
                                })
                            });
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },

            statusChange: function (value) {
                this.curStatus = value;
            },

            ticketChange: function (value) {
                this.curTicket = value;
            },

            selectInputChange: function (value) {
                this.inputContent = value;
            },

            searchApplyWrap: function () {
                this.searchApply(0, function () {
                }, function () {
                })
            },

           /* 适用于测试演示版本：*/
            searchApply: function (start, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'applyManage_searchApply';
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
                    selectItemIdArr: []
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
                            that.itemSelectedArr = [];
                            that.itemIsEmpty = false;
                            this.noticeBtnDisabled = true;
                            this.exportBtnDisabled = true;
                            this.refundBtnDisabled = true;

                            switch (that.curTicket) {
                                case '全部票种':
                                    // 对父表有要求，订单表的活动id必须一致
                                    if(that.curStatus === '全部状态' && that.inputContent === '') {
                                        para.condition = '';
                                    } else if(that.curStatus !== '全部状态' && that.inputContent !== '') {
                                        para.condition = '(' + this.mac.fd.groupActivityBill.name + '="' + that.inputContent + '"||' + this.mac.fd.groupActivityBill.mobile + '="' + that.inputContent + '")&&' + this.mac.fd.groupActivityBill.status +  '=' + that.curStatus;
                                    } else if(that.curStatus === '全部状态' && that.inputContent !== '') {
                                        para.condition = this.mac.fd.groupActivityBill.name + '="' + that.inputContent + '"||' + this.mac.fd.groupActivityBill.mobile + '="' + that.inputContent + '"';
                                    } else if(that.curStatus !== '全部状态' && that.inputContent === '') {
                                        para.condition = this.mac.fd.groupActivityBill.status +  '=' + that.curStatus
                                    }
                                    break;
                                case '免费票':
                                    // 对父表有要求，订单表的活动id必须一致，同时price字段为0
                                    if(that.curStatus === '全部状态' && that.inputContent === '') {
                                        para.condition = '';
                                    } else if(that.curStatus !== '全部状态' && that.inputContent !== '') {
                                        para.condition = '(' + this.mac.fd.groupActivityBill.name + '="' + that.inputContent + '"||' + this.mac.fd.groupActivityBill.mobile + '="' + that.inputContent + '")&&' + this.mac.fd.groupActivityBill.status +  '=' + that.curStatus;
                                    } else if(that.curStatus === '全部状态' && that.inputContent !== '') {
                                        para.condition = this.mac.fd.groupActivityBill.name + '="' + that.inputContent + '"||' + this.mac.fd.groupActivityBill.mobile + '="' + that.inputContent + '"';
                                    } else if(that.curStatus !== '全部状态' && that.inputContent === '') {
                                        para.condition = this.mac.fd.groupActivityBill.status +  '=' + that.curStatus;
                                    }
                                    break;
                                case '收费票':
                                    // 对父表有要求，订单表的活动id必须一致，同时price字段不为0
                                    if(that.curStatus === '全部状态' && that.inputContent === '') {
                                        para.condition = '';
                                    } else if(that.curStatus !== '全部状态' && that.inputContent !== '') {
                                        para.condition = '(' + this.mac.fd.groupActivityBill.name + '="' + that.inputContent + '"||' + this.mac.fd.groupActivityBill.mobile + '="' + that.inputContent + '")&&' + this.mac.fd.groupActivityBill.status +  '=' + that.curStatus;
                                    } else if(that.curStatus === '全部状态' && that.inputContent !== '') {
                                        para.condition = this.mac.fd.groupActivityBill.name + '="' + that.inputContent + '"||' + this.mac.fd.groupActivityBill.mobile + '="' + that.inputContent + '"';
                                    } else if(that.curStatus !== '全部状态' && that.inputContent === '') {
                                        para.condition = this.mac.fd.groupActivityBill.status +  '=' + that.curStatus;
                                    }
                                    break;
                            }

                            conditionData = {
                                condition: para.condition,
                                start: start,
                                total: 10
                            };

                            that.inputOrderData(conditionData, function() {
                                if(that.selectNum === 0 && that.allSelected.length === 0) {
                                    para.nStep = 'refreshPagination';
                                } else {
                                    para.nStep = 'refreshNum';
                                }
                                that.selectNum = 0;
                                that.selectNumText = '已选取 0 笔';
                                that.allSelected = [];

                                that.forceUpdateData(function () {
                                    if (++dbFlag === 2) {
                                        that.searchApply(start, successCallBack, errorCallBack)
                                    }
                                });
                            }, function () {
                            });
                            break;
                        case 'refreshNum':
                            that.sm.selectedNumRef.startModule(function () {
                                para.nStep = 'refreshAllSelect';
                                if (++dbFlag === 2) {
                                    that.searchApply(start, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'refreshAllSelect':
                            that.sm.allCheckRef.startModule(function () {
                                para.nStep = 'refreshPagination';
                                if (++dbFlag === 2) {
                                    that.searchApply(start, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'refreshInput':
                            if(that.inputContent === '') {
                                para.nStep = 'refreshPagination';
                                dbFlag++;
                                break;
                            }
                            that.inputContent = '';
                            that.forceUpdateData(function () {
                                that.sm.selectInputRef.startModule(function () {
                                    para.nStep = 'refreshPagination';
                                    if (++dbFlag === 2) {
                                        that.searchApply(start, successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
                            });
                            break;
                        case 'refreshPagination':
                            // 刷新报名总人数：
                            that.itemTotal = that.getApplyTotal();
                            that.forceUpdateData(function () {
                                that.sm.paginationRef.startModule(function () {
                                    para.nStep = 'isEmpty';
                                    if (++dbFlag === 2) {
                                        that.searchApply(start, successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
                            });
                            break;
                        case 'isEmpty':
                            if(that.itemIsEmpty) {
                                that.showSubModule('itemEmptyRef', true, function () {
                                    para.nStep = 'end';
                                    if (++dbFlag === 2) {
                                        that.searchApply(start, successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack);
                            } else {
                                that.showSubModule('itemEmptyRef', false, function () {
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
                                    that.searchApply(start, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        // case 'showItems':
                        //     that.showSubModule('applyItemRef', true, function () {
                        //         para.nStep = 'end';
                        //         if (++dbFlag === 2) {
                        //             that.searchApply(start, successCallBack, errorCallBack)
                        //         }
                        //     }, para.errorCallBack);
                        //     break;
                        case 'end':
                            para.successCallBack();
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },

            // 适用于新架构能够条件下载子表的情况：
            /*  searchApply: function (start, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'applyManage_searchApply';
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
                    selectItemIdArr: []
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
                            that.itemSelectedArr = [];
                            that.itemIsEmpty = false;
                            this.noticeBtnDisabled = true;
                            this.exportBtnDisabled = true;
                            this.refundBtnDisabled = true;

                            switch (that.curTicket) {
                                case '全部票种':
                                    // 对父表有要求，订单表的活动id必须一致
                                    if(that.curStatus === '全部状态' && that.inputContent === '') {
                                        para.condition = '';
                                    } else if(that.curStatus !== '全部状态' && that.inputContent !== '') {
                                        para.condition = '(' + this.mac.fd.groupActivityBill.name + '="' + that.inputContent + '"||' + this.mac.fd.groupActivityBill.mobile + '="' + that.inputContent + '")&&' + this.mac.fd.groupActivityBill.status +  '=' + that.curStatus;
                                    } else if(that.curStatus === '全部状态' && that.inputContent !== '') {
                                        para.condition = this.mac.fd.groupActivityBill.name + '="' + that.inputContent + '"||' + this.mac.fd.groupActivityBill.mobile + '="' + that.inputContent + '"';
                                    } else if(that.curStatus !== '全部状态' && that.inputContent === '') {
                                        para.condition = this.mac.fd.groupActivityBill.status +  '=' + that.curStatus
                                    }
                                    break;
                                case '免费票':
                                    // 对父表有要求，订单表的活动id必须一致，同时price字段为0
                                    if(that.curStatus === '全部状态' && that.inputContent === '') {
                                        para.condition = '';
                                    } else if(that.curStatus !== '全部状态' && that.inputContent !== '') {
                                        para.condition = '(' + this.mac.fd.groupActivityBill.name + '="' + that.inputContent + '"||' + this.mac.fd.groupActivityBill.mobile + '="' + that.inputContent + '")&&' + this.mac.fd.groupActivityBill.status +  '=' + that.curStatus;
                                    } else if(that.curStatus === '全部状态' && that.inputContent !== '') {
                                        para.condition = this.mac.fd.groupActivityBill.name + '="' + that.inputContent + '"||' + this.mac.fd.groupActivityBill.mobile + '="' + that.inputContent + '"';
                                    } else if(that.curStatus !== '全部状态' && that.inputContent === '') {
                                        para.condition = this.mac.fd.groupActivityBill.status +  '=' + that.curStatus;
                                    }
                                    break;
                                case '收费票':
                                    // 对父表有要求，订单表的活动id必须一致，同时price字段不为0
                                    if(that.curStatus === '全部状态' && that.inputContent === '') {
                                        para.condition = '';
                                    } else if(that.curStatus !== '全部状态' && that.inputContent !== '') {
                                        para.condition = '(' + this.mac.fd.groupActivityBill.name + '="' + that.inputContent + '"||' + this.mac.fd.groupActivityBill.mobile + '="' + that.inputContent + '")&&' + this.mac.fd.groupActivityBill.status +  '=' + that.curStatus;
                                    } else if(that.curStatus === '全部状态' && that.inputContent !== '') {
                                        para.condition = this.mac.fd.groupActivityBill.name + '="' + that.inputContent + '"||' + this.mac.fd.groupActivityBill.mobile + '="' + that.inputContent + '"';
                                    } else if(that.curStatus !== '全部状态' && that.inputContent === '') {
                                        para.condition = this.mac.fd.groupActivityBill.status +  '=' + that.curStatus;
                                    }
                                    break;
                            }

                            conditionData = {
                                condition: para.condition,
                                start: start,
                                total: 10
                            };

                            that.inputOrderData(conditionData, function() {
                                if(that.selectNum === 0 && that.allSelected.length === 0) {
                                    para.nStep = 'refreshPagination';
                                } else {
                                    para.nStep = 'refreshNum';
                                }
                                that.selectNum = 0;
                                that.selectNumText = '已选取 0 笔';
                                that.allSelected = [];

                                that.forceUpdateData(function () {
                                    if (++dbFlag === 2) {
                                        that.searchApply(start, successCallBack, errorCallBack)
                                    }
                                });
                            }, function () {
                            });
                            break;
                        case 'refreshNum':
                            that.sm.selectedNumRef.startModule(function () {
                                para.nStep = 'refreshAllSelect';
                                if (++dbFlag === 2) {
                                    that.searchApply(start, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'refreshAllSelect':
                            that.sm.allCheckRef.startModule(function () {
                                para.nStep = 'refreshPagination';
                                if (++dbFlag === 2) {
                                    that.searchApply(start, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'refreshInput':
                            if(that.inputContent === '') {
                                para.nStep = 'refreshPagination';
                                dbFlag++;
                                break;
                            }
                            that.inputContent = '';
                            that.forceUpdateData(function () {
                                that.sm.selectInputRef.startModule(function () {
                                    para.nStep = 'refreshPagination';
                                    if (++dbFlag === 2) {
                                        that.searchApply(start, successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
                            });
                            break;
                        case 'refreshPagination':
                            // 刷新报名总人数：
                            that.itemTotal = that.getApplyTotal();
                            that.forceUpdateData(function () {
                                that.sm.paginationRef.startModule(function () {
                                    para.nStep = 'isEmpty';
                                    if (++dbFlag === 2) {
                                        that.searchApply(start, successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
                            });
                            break;
                        case 'isEmpty':
                            if(that.itemIsEmpty) {
                                that.showSubModule('itemEmptyRef', true, function () {
                                    para.nStep = 'end';
                                    if (++dbFlag === 2) {
                                        that.searchApply(start, successCallBack, errorCallBack)
                                    }
                                }, para.errorCallBack);
                            } else {
                                that.showSubModule('itemEmptyRef', false, function () {
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
                                    that.searchApply(start, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        // case 'showItems':
                        //     that.showSubModule('applyItemRef', true, function () {
                        //         para.nStep = 'end';
                        //         if (++dbFlag === 2) {
                        //             that.searchApply(start, successCallBack, errorCallBack)
                        //         }
                        //     }, para.errorCallBack);
                        //     break;
                        case 'end':
                            para.successCallBack();
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },*/

            /*最早版本的写法：*/
            // searchApply: function (start, successCallBack, errorCallBack) {
            //     let that = this;
            //     let fnname = 'applyManage_searchApply';
            //     let dbFlag;
            //     let dbData;
            //     let tableName;
            //     let conditionData;
            //     let para = {
            //         successCallBack: successCallBack,
            //         errorCallBack: errorCallBack,
            //         nStep: 0,
            //         i: 0,
            //         isEmpty: true,
            //         selectItemIdArr: []
            //     };
            //
            //     if (successCallBack !== null) {
            //         errorCallBack = para;
            //         successCallBack = null
            //     }
            //     para = errorCallBack;
            //
            //     while (1) {
            //         dbFlag = 0;
            //         console.log(fnname + ': para.nStep = ' + para.nStep);
            //         switch (para.nStep) {
            //             case 0:
            //                 that.billIdArr = [];
            //                 that.itemSelectedArr = [];
            //                 that.itemIsEmpty = false;
            //                 this.noticeBtnDisabled = true;
            //                 this.exportBtnDisabled = true;
            //                 this.refundBtnDisabled = true;
            //
            //                 switch (that.curTicket) {
            //                     case '全部票种':
            //                         // 对父表有要求，订单表的活动id必须一致
            //                         if(that.curStatus === '全部状态' && that.inputContent === '') {
            //                             para.condition = '';
            //                         } else if(that.curStatus !== '全部状态' && that.inputContent !== '') {
            //                             para.condition = '(' + this.mac.fd.groupActivityBill.name + '="' + that.inputContent + '"||' + this.mac.fd.groupActivityBill.mobile + '="' + that.inputContent + '")&&' + this.mac.fd.groupActivityBill.status +  '=' + that.curStatus;
            //                         } else if(that.curStatus === '全部状态' && that.inputContent !== '') {
            //                             para.condition = this.mac.fd.groupActivityBill.name + '="' + that.inputContent + '"||' + this.mac.fd.groupActivityBill.mobile + '="' + that.inputContent + '"';
            //                         } else if(that.curStatus !== '全部状态' && that.inputContent === '') {
            //                             para.condition = this.mac.fd.groupActivityBill.status +  '=' + that.curStatus
            //                         }
            //                         break;
            //                     case '免费票':
            //                         // 对父表有要求，订单表的活动id必须一致，同时price字段为0
            //                         if(that.curStatus === '全部状态' && that.inputContent === '') {
            //                             para.condition = this.mac.fd.groupActivityBill.price +  '=0';
            //                         } else if(that.curStatus !== '全部状态' && that.inputContent !== '') {
            //                             para.condition = '(' + this.mac.fd.groupActivityBill.name + '="' + that.inputContent + '"||' + this.mac.fd.groupActivityBill.mobile + '="' + that.inputContent + '")&&' + this.mac.fd.groupActivityBill.status +  '=' + that.curStatus + '&&' + this.mac.fd.groupActivityBill.price +  '=0';
            //                         } else if(that.curStatus === '全部状态' && that.inputContent !== '') {
            //                             para.condition = '(' + this.mac.fd.groupActivityBill.name + '="' + that.inputContent + '"||' + this.mac.fd.groupActivityBill.mobile + '="' + that.inputContent + '")&&' + this.mac.fd.groupActivityBill.price +  '=0';
            //                         } else if(that.curStatus !== '全部状态' && that.inputContent === '') {
            //                             para.condition = this.mac.fd.groupActivityBill.status +  '=' + that.curStatus + '&&' + this.mac.fd.groupActivityBill.price +  '=0';
            //                         }
            //                         break;
            //                     case '收费票':
            //                         // 对父表有要求，订单表的活动id必须一致，同时price字段不为0
            //                         if(that.curStatus === '全部状态' && that.inputContent === '') {
            //                             para.condition = this.mac.fd.groupActivityBill.price +  '>0';
            //                         } else if(that.curStatus !== '全部状态' && that.inputContent !== '') {
            //                             para.condition = '(' + this.mac.fd.groupActivityBill.name + '="' + that.inputContent + '"||' + this.mac.fd.groupActivityBill.mobile + '="' + that.inputContent + '")&&' + this.mac.fd.groupActivityBill.status +  '=' + that.curStatus + '&&' + this.mac.fd.groupActivityBill.price +  '>0';
            //                         } else if(that.curStatus === '全部状态' && that.inputContent !== '') {
            //                             para.condition = '(' + this.mac.fd.groupActivityBill.name + '="' + that.inputContent + '"||' + this.mac.fd.groupActivityBill.mobile + '="' + that.inputContent + '")&&' + this.mac.fd.groupActivityBill.price +  '>0';
            //                         } else if(that.curStatus !== '全部状态' && that.inputContent === '') {
            //                             para.condition = this.mac.fd.groupActivityBill.status +  '=' + that.curStatus + '&&' + this.mac.fd.groupActivityBill.price +  '>0';
            //                         }
            //                         break;
            //                 }
            //
            //                 if(para.condition === '') {
            //                     conditionData = {
            //                         condition: that.mac.fd.groupActivityBill.groupActivityID + '=' + that.para.activityId,
            //                         start: start,
            //                         total: 10
            //                     };
            //                 } else {
            //                     conditionData = {
            //                         condition: '(' + para.condition + ')&&' + that.mac.fd.groupActivityBill.groupActivityID + '=' + that.para.activityId,
            //                         start: start,
            //                         total: 10
            //                     };
            //                 }
            //
            //                 that.inputOrderData(conditionData, function() {
            //                     if(that.selectNum === 0 && that.allSelected.length === 0) {
            //                         para.nStep = 'refreshPagination';
            //                     } else {
            //                         para.nStep = 'refreshNum';
            //                     }
            //                     that.selectNum = 0;
            //                     that.selectNumText = '已选取 0 笔';
            //                     that.allSelected = [];
            //
            //                     that.forceUpdateData(function () {
            //                         if (++dbFlag === 2) {
            //                             that.searchApply(start, successCallBack, errorCallBack)
            //                         }
            //                     });
            //                 }, function () {
            //                 });
            //                 break;
            //             case 'refreshNum':
            //                 that.sm.selectedNumRef.startModule(function () {
            //                     para.nStep = 'refreshAllSelect';
            //                     if (++dbFlag === 2) {
            //                         that.searchApply(start, successCallBack, errorCallBack)
            //                     }
            //                 }, function () {
            //                 });
            //                 break;
            //             case 'refreshAllSelect':
            //                 that.sm.allCheckRef.startModule(function () {
            //                     para.nStep = 'refreshPagination';
            //                     if (++dbFlag === 2) {
            //                         that.searchApply(start, successCallBack, errorCallBack)
            //                     }
            //                 }, function () {
            //                 });
            //                 break;
            //             case 'refreshInput':
            //                 if(that.inputContent === '') {
            //                     para.nStep = 'refreshPagination';
            //                     dbFlag++;
            //                     break;
            //                 }
            //                 that.inputContent = '';
            //                 that.forceUpdateData(function () {
            //                     that.sm.selectInputRef.startModule(function () {
            //                         para.nStep = 'refreshPagination';
            //                         if (++dbFlag === 2) {
            //                             that.searchApply(start, successCallBack, errorCallBack)
            //                         }
            //                     }, function () {
            //                     });
            //                 });
            //                 break;
            //             case 'refreshPagination':
            //                 // 刷新报名总人数：
            //                 that.itemTotal = that.getApplyTotal();
            //                 that.forceUpdateData(function () {
            //                     that.sm.paginationRef.startModule(function () {
            //                         para.nStep = 'isEmpty';
            //                         if (++dbFlag === 2) {
            //                             that.searchApply(start, successCallBack, errorCallBack)
            //                         }
            //                     }, function () {
            //                     });
            //                 });
            //                 break;
            //             case 'isEmpty':
            //                 if(that.itemIsEmpty) {
            //                     that.showSubModule('itemEmptyRef', true, function () {
            //                         para.nStep = 'end';
            //                         if (++dbFlag === 2) {
            //                             that.searchApply(start, successCallBack, errorCallBack)
            //                         }
            //                     }, para.errorCallBack);
            //                 } else {
            //                     that.showSubModule('itemEmptyRef', false, function () {
            //                     }, para.errorCallBack);
            //                     para.nStep = 'refreshItems';
            //                     dbFlag++;
            //                 }
            //                 break;
            //             case 'refreshItems':
            //                 if (para.i > that.sm.applyItemRef.length - 1) {
            //                     para.i = 0;
            //                     para.nStep = 'end';
            //                     dbFlag++;
            //                     break;
            //                 }
            //
            //                 that.sm.applyItemRef[para.i].startModule(function () {
            //                     para.i++;
            //                     para.nStep = 'refreshItems';
            //                     if (++dbFlag === 2) {
            //                         that.searchApply(start, successCallBack, errorCallBack)
            //                     }
            //                 }, function () {
            //                 });
            //                 break;
            //             // case 'showItems':
            //             //     that.showSubModule('applyItemRef', true, function () {
            //             //         para.nStep = 'end';
            //             //         if (++dbFlag === 2) {
            //             //             that.searchApply(start, successCallBack, errorCallBack)
            //             //         }
            //             //     }, para.errorCallBack);
            //             //     break;
            //             case 'end':
            //                 para.successCallBack();
            //                 return
            //         }
            //         if (++dbFlag === 1) {
            //             return
            //         }
            //     }
            // },

            refundBtnClickWrap: function() {
                this.refundBtnClick(function () {
                }, function () {
                })
            },
            refundBtnClick: function (successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'applyManage_refundBtnClick';
                let dbFlag;
                let dbData;
                let tableName;
                let record;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    isEmpty: true,
                    selectItemIdArr: []
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
                            for(let i = 0; i < this.itemSelectedArr.length; i++) {
                                if(this.itemSelectedArr[i] === true) {
                                    para.isEmpty = false;
                                    para.selectItemIdArr.push(this.billIdArr[i]);
                                }
                            }
                            if(para.isEmpty) {
                                this.$message.warning('请选择一条记录进行操作！');
                                para.nStep = 'end';
                            } else {
                                para.nStep = 'isLegal';
                            }
                            dbFlag++;
                            break;
                        case 'isLegal':
                            tableName = this.mac.tb.groupActivityBill;
                            dbData = {};
                            dbData[that.mac.fd.id] = para.selectItemIdArr;
                            dbData[that.mac.fd.groupActivityBill.status] = [];
                            that.sys.api.recordRead(tableName, dbData, function () {
                                let isLegal = true;
                                for(let i = 0; i < dbData[that.mac.fd.id].length; i++) {
                                    if(dbData[that.mac.fd.groupActivityBill.status][i] !== that.mac.enum.groupActivityBill.status.refund) {
                                        isLegal = false;
                                        break
                                    }
                                }
                                if(isLegal) {
                                    para.nStep = 'confirm';
                                } else {
                                    that.$message.warning('只有待退款状态的名单才能进行退款操作！');
                                    para.nStep = 'end';
                                }
                                if (++dbFlag === 2) {
                                    that.refundBtnClick(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'confirm':
                            this.$confirm('您确定要进行退款操作吗！', '提示', {
                                confirmButtonText: '确定',
                                cancelButtonText: '取消',
                                type: 'warning'
                            }).then(() => {
                                // 成功操作：
                                para.nStep = 'getSourceId';
                                if (++dbFlag === 2) {
                                    that.refundBtnClick(successCallBack, errorCallBack)
                                }
                            }).catch(() => {
                                // 失败操作：
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.refundBtnClick(successCallBack, errorCallBack)
                                }
                            });
                            break;
                        case 'getSourceId':
                            tableName = this.mac.tb.groupActivityBill;
                            record = para.selectItemIdArr;
                            that.sys.api.getSourceRecord(tableName, record, function (result) {
                                // 向云端发事件，修改数据；同时修改前端数据：
                                that.ep.refundPassIn(result, function () {
                                }, function () {
                                });

                                para.nStep = 'refund';
                                if (++dbFlag === 2) {
                                    that.refundBtnClick(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'refund':
                            tableName = this.mac.tb.groupActivityBill;
                            dbData = {};
                            dbData[that.mac.fd.id] = para.selectItemIdArr;
                            dbData[that.mac.fd.groupActivityBill.status] = [];
                            para.selectItemIdArr.forEach(function () {
                                dbData[that.mac.fd.groupActivityBill.status].push(that.mac.enum.groupActivityBill.status.refunding)
                            });
                            this.modifyData(tableName, dbData, function () {
                                that.$alert('系统退款中，退款金额原路返回至参与者的付款账户。', '操作成功！', {
                                    confirmButtonText: '知道了',
                                    type: 'success',
                                    center: true
                                });
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.refundBtnClick(successCallBack, errorCallBack)
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

            noticeBtnClick: function () {
                // 获取接收短信人的手机号：
                let phone = 18356673456;
                this.ep.groupNoticeIn(phone, function () {
                }, function () {
                });
            },

            exportBtnClick: function () {
            },

            selectAllApply: function () {
                if(this.allSelected.length > 0) {
                    // 有名单被选中后，操作按钮解除禁止：
                    this.noticeBtnDisabled = false;
                    this.exportBtnDisabled = false;
                    this.refundBtnDisabled = false;
                    // 设置选取的数量：
                    this.selectNum = this.itemSelectedArr.length;
                    this.selectNumText = '已选取 ' + this.selectNum + ' 笔';

                    // this.rejectBtnDisabled = false;
                    // this.passBtnDisabled = false;

                    // 同步ItemSelectedArr中的值
                    for(let i = 0; i < this.itemSelectedArr.length; i++) {
                        this.itemSelectedArr[i] = true;
                    }
                    for(let i = 0; i < this.sm.applyItemRef.length; i++) {
                        this.sm.applyItemRef[i].selectApply(true);
                    }
                } else {
                    this.noticeBtnDisabled = true;
                    this.exportBtnDisabled = true;
                    this.refundBtnDisabled = true;
                    this.selectNum = 0;
                    this.selectNumText = '已选取 0 笔';
                    // this.rejectBtnDisabled = true;
                    // this.passBtnDisabled = true;

                    for(let i = 0; i < this.itemSelectedArr.length; i++) {
                        this.itemSelectedArr[i] = false;
                    }
                    for(let i = 0; i < this.sm.applyItemRef.length; i++) {
                        this.sm.applyItemRef[i].selectApply(false);
                    }
                }

                this.$nextTick(function () {
                    this.sm.selectedNumRef.startModule(function () {
                    }, function () {
                    });
                });
            },

            modifyData: function(tableName, data, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'applyManage_modifyData';
                let dbFlag;
                let dbData;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0,
                    selectedItemArr: []
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
                            // 获取当前选中的item的索引：
                            for(let i = 0; i < this.itemSelectedArr.length; i++) {
                                if(this.itemSelectedArr[i] === true) {
                                    para.selectedItemArr.push(i);
                                }
                            }

                            that.sys.api.recordModify(tableName, data, function () {
                                para.nStep = 'init';
                                if (++dbFlag === 2) {
                                    that.modifyData(tableName, data, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'init':
                            if(para.i > para.selectedItemArr.length - 1) {
                                para.i = 0;
                                para.nStep = 'refreshPage';
                                dbFlag++;
                                break;
                            }
                            that.sm.applyItemRef[para.selectedItemArr[para.i]].startModule(function () {
                                para.i++;
                                para.nStep = 'init';
                                if (++dbFlag === 2) {
                                    that.modifyData(tableName, data, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'refreshPage':
                            that.noticeBtnDisabled = true;
                            that.exportBtnDisabled = true;
                            that.refundBtnDisabled = true;

                            // 待操作完成后，会取消所有勾选，需要同步刷新数据：
                            for(let i = 0; i < that.itemSelectedArr.length; i++) {
                                that.itemSelectedArr[i] = false
                            }
                            that.selectNum = 0;
                            that.selectNumText = '已选取 0 笔';

                            that.$nextTick(function () {
                                that.sm.selectedNumRef.startModule(function () {
                                    para.nStep = 'end';
                                    if (++dbFlag === 2) {
                                        that.modifyData(tableName, data, successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
                            });
                            break;
                        // case 'emptySelected':
                        //     for(let i = 0; i < para.selectedItemArr.length; i++) {
                        //         this.sm.applyItemRef[para.selectedItemArr[i]].selectApply(false);
                        //     }
                        //     para.nStep = 'end';
                        //     dbFlag++;
                        //     break;
                        case 'end':
                            para.successCallBack();
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },

            applyCheck: function (id, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'applyManage_applyCheck';
                let dbFlag;
                let dbData;
                let tableName;
                let record;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    isEmpty: true,
                    selectItemIdArr: []
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
                            for(let i = 0; i < this.itemSelectedArr.length; i++) {
                                if(this.itemSelectedArr[i] === true) {
                                    para.isEmpty = false;
                                    para.selectItemIdArr.push(this.billIdArr[i]);
                                }
                            }
                            if(para.isEmpty) {
                                this.$message.warning('请选择一条记录进行操作！');
                                para.nStep = 'end';
                            } else {
                                para.nStep = 'isLegal';
                            }
                            dbFlag++;
                            break;
                        case 'isLegal':
                            tableName = this.mac.tb.groupActivityBill;
                            dbData = {};
                            dbData[that.mac.fd.id] = para.selectItemIdArr;
                            dbData[that.mac.fd.groupActivityBill.status] = [];
                            that.sys.api.recordRead(tableName, dbData, function () {
                                let isLegal = true;
                                for(let i = 0; i < dbData[that.mac.fd.id].length; i++) {
                                    if(dbData[that.mac.fd.groupActivityBill.status][i] !== that.mac.enum.groupActivityBill.status.check) {
                                        isLegal = false;
                                        break
                                    }
                                }
                                if(isLegal) {
                                    para.nStep = 'type';
                                } else {
                                    that.$message.warning('只有待审核状态的名单才能进行名单审核操作！');
                                    para.nStep = 'end';
                                }
                                if (++dbFlag === 2) {
                                    that.applyCheck(id, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'type':
                            if(id == 1) {
                                para.nStep = 'getSourceId';
                                dbFlag++
                            } else {
                                para.nStep = 'reject';
                                dbFlag++
                            }
                            break;
                        case 'getSourceId':
                            tableName = this.mac.tb.groupActivityBill;
                            record = para.selectItemIdArr;
                            that.sys.api.getSourceRecord(tableName, record, function (result) {
                                // 向云端发事件，修改数据；同时修改前端数据：
                                that.ep.orderApprovalIn(result, 0, '', function () {
                                }, function () {
                                });

                                para.nStep = 'pass';
                                if (++dbFlag === 2) {
                                    that.refundBtnClick(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'pass':
                            tableName = this.mac.tb.groupActivityBill;
                            dbData = {};
                            dbData[that.mac.fd.id] = para.selectItemIdArr;
                            dbData[that.mac.fd.groupActivityBill.status] = [];
                            para.selectItemIdArr.forEach(function () {
                                dbData[that.mac.fd.groupActivityBill.status].push(that.mac.enum.groupActivityBill.status.checkTicket)
                            });
                            this.modifyData(tableName, dbData, function () {
                                that.$message.success('审核通过！');
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.applyCheck(id, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'reject':
                            that.rejectBillIdArr = JSON.parse(JSON.stringify(para.selectItemIdArr));
                            that.forceUpdateData(function () {
                                that.sm.dialogRef.startModule(function () {
                                    para.nStep = 'showDialog';
                                    if (++dbFlag === 2) {
                                        that.applyCheck(id, successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
                            });
                            break;
                        case 'showDialog':
                            that.showSubModule('dialogRef', true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.applyCheck(id, successCallBack, errorCallBack)
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

            checkApply: function (id) {
                this.applyCheck(id, function () {
                }, function () {
                });
            },

            pageChange: function (num) {
                let start = 10 * (num - 1);
                this.searchApply(start, function () {
                }, function () {
                })
            },
            changeAllSelected: function(select, curItemId) {
                // 同步ItemSelectedArr中的数据：
                for(let i = 0; i < this.billIdArr.length; i++) {
                    if(curItemId === this.billIdArr[i]) {
                        select ? this.itemSelectedArr[i] = true : this.itemSelectedArr[i] = false;
                        break;
                    }
                }

                // 判断是否需要勾选全选按钮：
                if(select) {
                    this.selectNum++;
                    this.selectNumText = '已选取 ' + this.selectNum + ' 笔';

                    let isAll = true;
                    // 有名单被选中后，操作按钮解除禁止：
                    this.noticeBtnDisabled = false;
                    this.exportBtnDisabled = false;
                    this.refundBtnDisabled = false;
                    // this.rejectBtnDisabled = false;
                    // this.passBtnDisabled = false;

                    for(let i = 0; i < this.itemSelectedArr.length; i++) {
                        if(this.itemSelectedArr[i] === false) {
                            isAll = false;
                            break;
                        }
                    }
                    if(isAll) {
                        if(this.allSelected.length === 0) {
                            this.allSelected = [1];
                            this.$nextTick(function () {
                                this.sm.allCheckRef.startModule(function () {
                                }, function () {
                                });
                            });
                        }
                    } else {
                        if(this.allSelected.length === 1) {
                            this.allSelected = [];
                            this.$nextTick(function () {
                                this.sm.allCheckRef.startModule(function () {
                                }, function () {
                                });
                            });
                        }
                    }
                } else {
                    this.selectNum&#45;&#45;;
                    this.selectNumText = '已选取 ' + this.selectNum + ' 笔';

                    let isEmpty = true;
                    for(let i = 0; i < this.itemSelectedArr.length; i++) {
                        if(this.itemSelectedArr[i] === true) {
                            isEmpty = false;
                            break;
                        }
                    }
                    if(isEmpty) {
                        this.noticeBtnDisabled = true;
                        this.exportBtnDisabled = true;
                        this.refundBtnDisabled = true;
                        // this.rejectBtnDisabled = true;
                        // this.passBtnDisabled = true;
                    } else {
                        this.noticeBtnDisabled = false;
                        this.exportBtnDisabled = false;
                        this.refundBtnDisabled = false;
                        // this.rejectBtnDisabled = false;
                        // this.passBtnDisabled = false;
                    }

                    if(this.allSelected.length === 1) {
                        this.allSelected = [];
                        this.$nextTick(function () {
                            this.sm.allCheckRef.startModule(function () {
                            }, function () {
                            });
                        });
                    }
                }

                this.$nextTick(function () {
                    this.sm.selectedNumRef.startModule(function () {
                    }, function () {
                    });
                });
            },

            dialogConfirm: function(idArr, value) {
                let that = this;
                let tableName = this.mac.tb.groupActivityBill;

                that.sys.api.getSourceRecord(tableName, idArr, function (result) {
                    // 向云端发事件，修改数据；同时修改前端数据：
                    that.ep.orderApprovalIn(result, 1, value, function () {
                    }, function () {
                    });

                    let dbData = {};
                    dbData[that.mac.fd.id] = idArr;
                    dbData[that.mac.fd.groupActivityBill.status] = [];
                    idArr.forEach(function () {
                        dbData[that.mac.fd.groupActivityBill.status].push(that.mac.enum.groupActivityBill.status.reject)
                    });
                    that.modifyData(tableName, dbData, function () {
                        that.$message.success('拒绝成功！');
                    }, function () {
                    });
                }, function () {
                });
            },

            removeRepetition: function(arr) {
                var obj = {};
                for (var i = 0; i < arr.length; i++) {
                    obj[arr[i]] = arr[i];
                }
                var arr1 = [];
                for (var k in obj) {
                    arr1.push(obj[k]);
                }
                return arr1;
            },


            statusRef_dataModifyEvent: function (value) {
                this.statusChange(value)
            },
            ticketRef_dataModifyEvent: function (value) {
                this.ticketChange(value)
            },
            selectInputRef_dataModifyEvent: function (value) {
                this.selectInputChange(value)
            },
            confirmBtnRef_buttonClickEvent: function () {
                this.searchApplyWrap()
            },
            listCheckRef_itemClickEvent: function (id) {
                this.checkApply(id);
            },
            refundBtnRef_buttonClickEvent: function () {
                this.refundBtnClickWrap()
            },
            noticeBtnRef_buttonClickEvent: function () {
                this.noticeBtnClick()
            },
            exportBtnRef_buttonClickEvent: function () {
                this.exportBtnClick()
            },
            allCheckRef_dataModifyEvent: function () {
                this.selectAllApply();
            },
            paginationRef_currentChangeEvent: function (num) {
                this.pageChange(num);
            },
            applyItemRef_ToggleApply: function (select, curItemId) {
                this.changeAllSelected(select, curItemId);
            },
            dialogRef_confirmEvent: function (idArr, value) {
                this.dialogConfirm(idArr, value)
            },
        }
    };
</script>
<style lang="scss">
    .el-dropdown-menu__item {
        padding: 0 40px !important;
    }

    #apply-manage-wrap {
        box-sizing: border-box;
        padding: 20px;

        li {
            list-style: none;
        }

        .title {
            padding: 10px 0;
            border-bottom: 1px solid #e4e4e4;
        }

        .select-row {
            padding: 20px 0 10px 0;

            .status, .ticket, .select-input, .confirm-btn {
                display: inline-block;
                margin-right: 10px;
            }
        }

        .btn-row {
            padding: 10px 0;

            .list-check, .refund-btn, .notice-btn, .export-btn {
                display: inline-block;
                margin-right: 10px;
            }

            .list-check {
                height: 34px;
                line-height: 34px;
                background-color: #409EFF;
                border-radius: 4px;
                overflow: hidden;
                padding: 0 16px;
                vertical-align: bottom;

                .el-dropdown-link {
                    color: #fff;

                    i {
                        color: #fff;
                    }
                }
            }
        }

        .item-empty {
            text-align: center;
            span {
                display: block;
                margin-top: 100px;
            }

        }

        .select-num-row {
            padding: 10px 0;
            overflow: hidden;
            .total-num {
                float: right;
            }
            .all-select, .selected-num {
                display: inline-block;
                margin-right: 20px;
            }
        }

        .list-table {
            border: 1px solid #e4e4e4;
            border-bottom: none;

            .table-title {
                display: flex;
                justify-content: space-around;
                background-color: #f5f7fa;
                padding: 10px 0;

                span {
                    flex: 1;
                    text-align: center;
                }
            }
            .table-item {
                .apply-item-wrap {
                    &:last-child {
                        padding-bottom: 0;
                    }
                }
            }
        }

        .pagination-row {
            margin-top: 20px;
            text-align: center;
            padding: 10px 0;
            .el-pagination {
                color: #606266;
                font-weight: 400;
                 .btn-next, .btn-prev {
                    color: #606266;
                }
                .btn-quicknext, .btn-quickprev {
                    color: #606266;
                    &:hover {
                        color: #409EFF;
                    }
                }
            }
        }
    }
</style>-->
