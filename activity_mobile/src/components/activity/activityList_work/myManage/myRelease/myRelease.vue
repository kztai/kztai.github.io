<template>
    <div class="myRelease_container">
        <div class="myRelease_row myRelease_row_myReleaseRow">
            <div :class="{myRelease_col:true,myRelease_col_myReleaseWindow:true,myRelease_col_myReleaseWindow_size_large:attr.size==='large',myRelease_col_myReleaseWindow_size_medium:attr.size==='medium',myRelease_col_myReleaseWindow_size_small:attr.size==='small',myRelease_col_myReleaseWindow_size_min:attr.size==='min',myRelease_col_myReleaseWindow_checked:attr.checked,myRelease_col_myReleaseWindow_disable:attr.disabled}">

                <div class="myRelease_row myRelease_row_row1">
                    <div :class="{myRelease_col:true,myRelease_col_input:true,myRelease_col_input_size_large:attr.size==='large',myRelease_col_input_size_medium:attr.size==='medium',myRelease_col_input_size_small:attr.size==='small',myRelease_col_input_size_min:attr.size==='min',myRelease_col_input_checked:attr.checked,myRelease_col_input_disable:attr.disabled}">

                        <lm2b-input-text
                                ref="inputRef"
                                refId="inputRef"
                                v-show="pvt_isShow.input === 'inputRef'"
                                :paraVarPair="pvt_input.inputRef.paraVarPair"
                                :para="pvt_input.inputRef.para"
                                :attr="pvt_input.inputRef.attr">
                        </lm2b-input-text>
                    </div>
                    <div :class="{myRelease_col:true,myRelease_col_selectBtn:true,myRelease_col_selectBtn_size_large:attr.size==='large',myRelease_col_selectBtn_size_medium:attr.size==='medium',myRelease_col_selectBtn_size_small:attr.size==='small',myRelease_col_selectBtn_size_min:attr.size==='min',myRelease_col_selectBtn_checked:attr.checked,myRelease_col_selectBtn_disable:attr.disabled}">

                        <div class="myRelease_row myRelease_row_row3">
                            <div :class="{myRelease_col:true,myRelease_col_btn:true,myRelease_col_btn_size_large:attr.size==='large',myRelease_col_btn_size_medium:attr.size==='medium',myRelease_col_btn_size_small:attr.size==='small',myRelease_col_btn_size_min:attr.size==='min',myRelease_col_btn_checked:attr.checked,myRelease_col_btn_disable:attr.disabled}">

                                <lm2b-button
                                        ref="btnRef"
                                        refId="btnRef"
                                        v-show="pvt_isShow.btn === 'btnRef'"
                                        :paraVarPair="pvt_btn.btnRef.paraVarPair"
                                        :para="pvt_btn.btnRef.para"
                                        :attr="pvt_btn.btnRef.attr">
                                </lm2b-button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="myRelease_row myRelease_row_row2">
                    <div :class="{myRelease_col:true,myRelease_col_activityList:true,myRelease_col_activityList_size_large:attr.size==='large',myRelease_col_activityList_size_medium:attr.size==='medium',myRelease_col_activityList_size_small:attr.size==='small',myRelease_col_activityList_size_min:attr.size==='min',myRelease_col_activityList_checked:attr.checked,myRelease_col_activityList_disable:attr.disabled}">
                        <release-item
                                ref="releaseItemRef"
                                refId="releaseItemRef"
                                v-show="pvt_isShow.activityList === 'releaseItemRef'"
                                :paraVarPair="pvt_activityList.releaseItemRef.paraVarPair"
                                v-for="(item, index) in pvt_activityList.releaseItemRef.forData"
                                :number="index"
                                :para="item.para"
                                :attr="item.attr">
                        </release-item>
                    </div>
                </div>
                <div class="myRelease_row myRelease_row_row4" v-show="itemIsEmpty">
                    <div :class="{myRelease_col:true,myRelease_col_empty:true,myRelease_col_empty_size_large:attr.size==='large',myRelease_col_empty_size_medium:attr.size==='medium',myRelease_col_empty_size_small:attr.size==='small',myRelease_col_empty_size_min:attr.size==='min',myRelease_col_empty_checked:attr.checked,myRelease_col_empty_disable:attr.disabled}">

                        <empty
                                ref="emptyRef"
                                refId="emptyRef"
                                v-show="pvt_isShow.empty === 'emptyRef'"
                                :paraVarPair="pvt_empty.emptyRef.paraVarPair"
                                :para="pvt_empty.emptyRef.para"
                                :attr="pvt_empty.emptyRef.attr">
                        </empty>
                    </div>
                </div>
            </div>
        </div>
        <div class="myRelease_row myRelease_row_selectDialog" v-show="dialogWrap" @click.self="closeDialog">  <!--新增-->
            <div :class="{myRelease_col:true,myRelease_col_selectDialog:true,myRelease_col_selectDialog_size_large:attr.size==='large',myRelease_col_selectDialog_size_medium:attr.size==='medium',myRelease_col_selectDialog_size_small:attr.size==='small',myRelease_col_selectDialog_size_min:attr.size==='min',myRelease_col_selectDialog_checked:attr.checked,myRelease_col_selectDialog_disable:attr.disabled,myRelease_dialog:true}">
                <select-dialog
                        ref="selectDialogRef"
                        refId="selectDialogRef"
                        v-if="pvt_isShow.selectDialog === 'selectDialogRef'"
                        :paraVarPair="pvt_selectDialog.selectDialogRef.paraVarPair"
                        :para="pvt_selectDialog.selectDialogRef.para"
                        :attr="pvt_selectDialog.selectDialogRef.attr">
                </select-dialog>
            </div>
        </div>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';

    import releaseItem from './releaseItem';
    import selectDialog from './selectDialog_release';
    import empty from '../../../activityManage/checkTicket/empty';

    export default {
        components: {releaseItem, selectDialog, empty},
        inject: ['sys'],
        props: ['refId', 'para', 'attr', 'number'],
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ['input', 'btn', 'activityList', 'selectDialog', 'empty'],
                    subModule: ['inputRef', 'btnRef', 'releaseItemRef', 'selectDialogRef', 'emptyRef'],
                },
                pvt_isShow: {
                    input: null,
                    btn: null,
                    activityList: null,
                    selectDialog: null,
                    empty: null,
                },
                pvt_eventPortInput: ['delClickEvent', 'backClickEvent', 'closeClickEvent', 'activityClickEvent', 'rejectActivityEvent'],

                mac:mac.mac,
                myType: 1,
                mySite: '',
                myID: 1,

                curActivityIdArr: [1, 2],
                sizeArr: ['medium', 'medium'],
                dialogWrap: false,
                itemIsEmpty: false,
                inputContent: '',
                curStatus: '全部',
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
                            placeholder: '请输入活动名称',
                            prefixIcon: 'van-icon-search',
                            isPlaceholder: false,
                            size: 'min'
                        },
                    },
                };
            },
            pvt_btn: function () {
                return {
                    btnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['筛选', 'van-icon-filter-o'],
                        },
                        attr: {
                            type: 'text',
                            iconIsRight: true,
                            height: '20px',
                            size: 'min'
                        },
                    },
                };
            },
            pvt_activityList: function () {
                let loopModule = {
                    releaseItemRef: {
                        para: {
                            curActivityId: this.curActivityIdArr,
                        },
                        attr: {
                            size: this.sizeArr,
                        },
                    },
                };
                let forData = this.pvt_createForData(loopModule);
                return {
                    releaseItemRef: {
                        paraVarPair: {
                            curActivityId: 'curActivityIdArr',
                        },
                        forData: forData.releaseItemRef,
                    },
                };
            },
            pvt_selectDialog: function () {
                return {
                    selectDialogRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium',
                        },
                    },
                };
            },
            pvt_empty: function () {
                return {
                    emptyRef: {
                        paraVarPair: {},
                        para: {},
                        attr: {
                            size: 'medium',
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
                let fnname = 'myRelease_start';
                let dbFlag;
                let dbData;
                let tableName;
                let condition;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0,
                    refArr: ['inputRef', 'btnRef']
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
                            that.mySite = that.getCookie('userSite');
                            that.myId = that.getCookie('userID');
                            that.myType = that.getCookie('userType');

                            that.itemIsEmpty = false;
                            that.inputContent = '';
                            that.curActivityIdArr = [];
                            that.sizeArr = [];

                            condition = that.mac.fd.groupActivity.status + '!=' + that.mac.enum.groupActivity.status.draft;
                            that.inputActivityData(0, condition, function () {
                                that.forceUpdateData(function () {
                                    para.nStep = 'start_sub';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                });
                            }, function () {
                            });
                            break;
                        case 'start_sub':
                            if (para.i >= para.refArr.length) {
                                para.i = 0;
                                para.nStep = 'start_empty';
                                dbFlag++;
                                break;
                            }
                            that.sm[para.refArr[para.i]].startModule(function () {
                                para.i++;
                                para.nStep = 'start_sub';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_empty':
                            that.sm.emptyRef.startModule('暂无数据',function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            para.refArr.push('releaseItemRef', 'emptyRef');
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

            inputActivityData: function (startNum, condition, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'myRelease_inputActivityData';
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
                            that.curActivityIdArr = [];

                            if(condition) {
                                expression = that.mac.fd.groupActivity.author + '=' + that.myId + '&&' + that.mac.fd.groupActivity.status + '!=' + that.mac.enum.groupActivity.status.deleted + '&&' + that.mac.fd.groupActivity.status + '!=' + that.mac.enum.groupActivity.status.terminal + '&&' + condition;
                            } else {
                                expression = that.mac.fd.groupActivity.author + '=' + that.myId + '&&' + that.mac.fd.groupActivity.status + '!=' + that.mac.enum.groupActivity.status.deleted + '&&' + that.mac.fd.groupActivity.status + '!=' + that.mac.enum.groupActivity.status.terminal;
                            }
                            start = startNum;
                            total = 100;
                            sort = ['id,asc'];
                            destGeneSite = '';
                            portName = this.mac.tb.groupActivity;
                            inputData = {
                                [this.mac.tb.groupActivity]: '',
                                [this.mac.tb.groupActivityTicketType]: [this.mac.fd.groupActivityTicketType.poll],
                            };
                            this.sys.api.conditiondataInput(portName, inputData, expression, start, total, sort, destGeneSite, function (result) {
                                if(result) {
                                    for(let i = 0; i < result.length; i++) {
                                        that.curActivityIdArr.push(result[i]);
                                        that.sizeArr.push('medium');
                                        // that.curActivityIdArr.push(result[i]);
                                        // that.sizeArr.push('medium');
                                    }
                                    that.itemIsEmpty = false;
                                    para.nStep = 'refreshItems';
                                } else {
                                    that.itemIsEmpty = true;
                                    para.nStep = 'end';
                                }

                                that.forceUpdateData(function () {
                                    if (++dbFlag === 2) {
                                        that.inputActivityData(startNum, condition, successCallBack, errorCallBack)
                                    }
                                });
                            }, function (error) {
                                console.error(error)
                            });
                            break;
                        case 'refreshItems':
                            if (para.i > that.sm.releaseItemRef.length - 1) {
                                para.i = 0;
                                para.nStep = 'end';
                                dbFlag++;
                                break;
                            }

                            that.sm.releaseItemRef[para.i].startModule(function () {
                                para.i++;
                                para.nStep = 'refreshItems';
                                if (++dbFlag === 2) {
                                    that.inputActivityData(startNum, condition, successCallBack, errorCallBack)
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

            selectInputChange: function (value) {
                this.inputContent = value;
                this.listRefresh(this.curStatus, function () {
                }, function () {
                })
            },
            showDialog: function () {
                let that = this;
                that.dialogWrap = true;
                that.showSubModule('selectDialogRef', true, function () {
                    that.sm.selectDialogRef.startModule(that.curStatus, function () {
                    }, function () {
                    });
                }, function () {
                });
            },
            listRefresh: function (curStatus, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'myRelease_listRefresh';
                let dbFlag;
                let dbData;
                let tableName;
                let condition;
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
                            that.curActivityIdArr = [];
                            that.sizeArr = [];
                            that.itemIsEmpty = false;
                            that.curStatus = curStatus;

                            let curTime = that.getTime(new Date());
                            switch (that.curStatus) {
                                case '全部':
                                    condition = this.mac.fd.groupActivity.status + '!=' + this.mac.enum.groupActivity.status.draft;
                                    break;
                                case '未开始':
                                    condition = this.mac.fd.groupActivity.status + '=' + this.mac.enum.groupActivity.status.released + '&&' + this.mac.fd.groupActivity.startTime + '>"' + curTime + '"';
                                    break;
                                case '进行中':
                                    condition = this.mac.fd.groupActivity.status + '=' + this.mac.enum.groupActivity.status.released + '&&' + this.mac.fd.groupActivity.startTime + '<"' + curTime + '"&&' + this.mac.fd.groupActivity.endTime + '>"' + curTime + '"';
                                    break;
                                case '已结束':
                                    condition = this.mac.fd.groupActivity.status + '=' + this.mac.enum.groupActivity.status.released + '&&' + this.mac.fd.groupActivity.endTime + '<"' + curTime + '"';
                                    break;
                                case '已关闭':
                                    condition = this.mac.fd.groupActivity.status + '=' + this.mac.enum.groupActivity.status.closed;
                                    break;
                                case '待审核':
                                    condition = this.mac.fd.groupActivity.status + '=' + this.mac.enum.groupActivity.status.check;
                                    break;
                                case '审核未通过':
                                    condition = this.mac.fd.groupActivity.status + '=' + this.mac.enum.groupActivity.status.rejected;
                                    break;
                            }

                            if(that.inputContent !== '') {
                                condition += "&&" + this.mac.fd.groupActivity.name + '="' + that.inputContent + '"';
                            }

                            that.inputActivityData(0, condition, function () {
                                para.nStep = 'isEmpty';
                                that.forceUpdateData(function () {
                                    if (++dbFlag === 2) {
                                        that.listRefresh(curStatus, successCallBack, errorCallBack)
                                    }
                                });
                            }, function () {
                            });
                            break;
                        case 'isEmpty':
                            if (that.itemIsEmpty) {
                                that.showSubModule('emptyRef', true, function () {
                                }, para.errorCallBack);
                            } else {
                                that.showSubModule('emptyRef', false, function () {
                                }, para.errorCallBack);
                            }
                            para.nStep = 'end';
                            dbFlag++;
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

            activityBack: function (curActivityId, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'myRelease_activityBack';
                let tableName;
                let dbData;
                let dbFlag;
                let record;
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
                            for (let i = 0; i < that.curActivityIdArr.length; i++) {
                                if (that.curActivityIdArr[i] === curActivityId) {
                                    that.curActivityIdArr.splice(i, 1);
                                    that.sizeArr.splice(i, 1);
                                    break;
                                }
                            }
                            para.nStep = 'refreshItems';
                            that.forceUpdateData(function () {
                                if (++dbFlag === 2) {
                                    that.activityBack(curActivityId, successCallBack, errorCallBack)
                                }
                            });
                            break;
                        case 'refreshItems':
                            if (para.i > that.sm.releaseItemRef.length - 1) {
                                para.i = 0;
                                para.nStep = 'getTerActivityId';
                                dbFlag++;
                                break;
                            }

                            that.sm.releaseItemRef[para.i].startModule(function () {
                                para.i++;
                                para.nStep = 'refreshItems';
                                if (++dbFlag === 2) {
                                    that.activityBack(curActivityId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'getTerActivityId':
                            tableName = that.mac.tb.groupActivity;
                            record = [curActivityId];
                            that.sys.api.getSourceRecord(tableName, record, function (result) {
                                para.terActivityId = result[0];
                                para.nStep = 'modifyData';
                                if (++dbFlag === 2) {
                                    that.activityBack(curActivityId, successCallBack, errorCallBack)
                                }
                            }, function (error) {
                            });
                            break;
                        case 'modifyData':
                            tableName = this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[that.mac.fd.id] = [curActivityId];
                            dbData[this.mac.fd.groupActivity.status] = [this.mac.enum.groupActivity.status.draft];
                            that.sys.api.recordModify(tableName, dbData, function () {
                                that.$notify({type: 'success', message: '活动撤回成功！已放入您的草稿箱中。'});
                                that.ep.backClickEvent(para.terActivityId, function () {

                                }, function () {

                                });
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.activityBack(curActivityId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'end':
                            if (that.sm.releaseItemRef.length === 0) {
                                that.itemIsEmpty = true;
                            }
                            para.successCallBack();
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },

            activityDel: function(curActivityId, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'myRelease_activityDel';
                let tableName;
                let dbData;
                let dbFlag;
                let record;
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
                            for (let i = 0; i < that.curActivityIdArr.length; i++) {
                                if (that.curActivityIdArr[i] === curActivityId) {
                                    that.curActivityIdArr.splice(i, 1);
                                    that.sizeArr.splice(i, 1);
                                    break;
                                }
                            }
                            para.nStep = 'refreshItems';
                            that.forceUpdateData(function () {
                                if (++dbFlag === 2) {
                                    that.activityDel(curActivityId, successCallBack, errorCallBack)
                                }
                            });
                            break;
                        case 'refreshItems':
                            if (para.i > that.sm.releaseItemRef.length - 1) {
                                para.i = 0;
                                para.nStep = 'getTerActivityId';
                                dbFlag++;
                                break;
                            }

                            that.sm.releaseItemRef[para.i].startModule(function () {
                                para.i++;
                                para.nStep = 'refreshItems';
                                if (++dbFlag === 2) {
                                    that.activityDel(curActivityId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'getTerActivityId':
                            tableName = that.mac.tb.groupActivity;
                            record = [curActivityId];
                            that.sys.api.getSourceRecord(tableName, record, function (result) {
                                para.terActivityId = result[0];
                                para.nStep = 'modifyData';
                                if (++dbFlag === 2) {
                                    that.activityDel(curActivityId, successCallBack, errorCallBack)
                                }
                            }, function (error) {
                            });
                            break;
                        case 'modifyData':
                            tableName = this.mac.tb.groupActivity;
                            dbData = {};
                            dbData[that.mac.fd.id] = [curActivityId];
                            dbData[this.mac.fd.groupActivity.status] = [this.mac.enum.groupActivity.status.deleted];
                            that.sys.api.recordModify(tableName, dbData, function () {
                                that.$notify({type: 'success', message: '活动删除成功！'});
                                that.ep.delClickEvent(para.terActivityId, function () {
                                }, function () {
                                });
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.activityDel(curActivityId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'end':
                            if (that.sm.releaseItemRef.length === 0) {
                                that.itemIsEmpty = true;
                            }
                            para.successCallBack();
                            return
                    }
                    if (++dbFlag === 1) {
                        return
                    }
                }
            },

            closeDialog: function () {
                this.dialogWrap = false;
                this.showSubModule('selectDialogRef', false, function () {
                }, function () {
                });
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
            getTime: function(time) {
                var day = time.getDate();   // 得到这是这个月的第几天
                var year = time.getFullYear();   //得到这是第几年
                var month = time.getMonth() + 1;  // getMonth()获得的是0-11，所以要+1
                var hour = time.getHours();
                var minute = time.getMinutes();
                var second = time.getSeconds();

                return year + "-" + zero(month) + "-" + zero(day) + " "
                    + zero(hour) + ":" + zero(minute);

                function zero(value) {
                    return value < 10 ? "0" + value : value;
                }
            },



            inputRef_inputEnterEvent: function (value) {
                this.selectInputChange(value);
            },
            btnRef_buttonClickEvent: function () {
                this.showDialog();
            },
            releaseItemRef_delClickEvent: function (curActivityId, successCallBack, errorCallBack) {
                this.activityDel(curActivityId, successCallBack, errorCallBack);
            },
            releaseItemRef_backClickEvent: function (curActivityId, successCallBack, errorCallBack) {
                this.activityBack(curActivityId, successCallBack, errorCallBack);
            },
            releaseItemRef_closeClickEvent: function (terActivityId, successCallBack, errorCallBack) {
                this.ep.closeClickEvent(terActivityId, successCallBack, errorCallBack);
            },
            releaseItemRef_activityClickEvent: function (terActivityId, clerkType) {
                this.ep.activityClickEvent(terActivityId, clerkType);
            },
            releaseItemRef_rejectActivityEvent: function (curActivityId) {
                this.ep.rejectActivityEvent(curActivityId);
            },
            selectDialogRef_confirmEvent(curStatus, successCallBack, errorCallBack) {
                this.listRefresh(curStatus, successCallBack, errorCallBack);
            },
        },
    };
</script>
<style lang="less" scoped>
    @import "../../../../../assets/var_kzt"; /*新增*/
    .myRelease_container {
    }

    .myRelease_row {
        display: flex;
        flex: 1;
    }

    .myRelease_col {
        display: flex;
        flex-direction: column;
    }

    .myRelease_col_myReleaseWindow_size_medium {
        width: @myRelease-myReleaseWindow-medium-width;
    }

    .myRelease_col_myReleaseWindow {
        background-color: mix(@myRelease-myReleaseWindow-background-color, #fff, @myRelease-myReleaseWindow-background-color-opacity);
    }

    .myRelease_col_input_size_medium {
        width: @myRelease-input-medium-width;
        margin: @myRelease-input-medium-margin;
    }

    .myRelease_col_input {
        border-style: @myRelease-input-border-style;
        border-width: @myRelease-input-border-width;
        border-color: mix(@myRelease-input-border-color, #fff, @myRelease-input-hover-border-color-opacity);
        background-color: mix(@myRelease-input-background-color, #fff, @myRelease-input-background-color-opacity);
    }

    .myRelease_col_selectBtn_size_medium {
        width: @myRelease-selectBtn-medium-width;
        padding: @myRelease-selectBtn-medium-padding;
        margin: @myRelease-input-medium-margin;
    }

    .myRelease_col_selectBtn {
        border-style: @myRelease-selectBtn-border-style;
        border-width: @myRelease-selectBtn-border-width;
        border-color: mix(@myRelease-selectBtn-border-color, #fff, @myRelease-selectBtn-hover-border-color-opacity);
        background-color: mix(@myRelease-selectBtn-background-color, #fff, @myRelease-selectBtn-background-color-opacity);
    }

    .myRelease_col_activityList_size_medium {
        width: @myRelease-activityList-medium-width;
    }

    .myRelease_col_activityList {
      /*  background-color: mix(@myRelease-activityList-background-color, #fff, @myRelease-activityList-background-color-opacity);*/
        overflow: hidden;
    }

    .myRelease_col_btn_size_medium {
        width: @myRelease-btn-medium-width;
        align-items: @myRelease-btn-medium-horizontal-position;
        justify-content: @myRelease-btn-medium-vertical-position;
    }

    .myRelease_col_btn {
        border-style: @myRelease-btn-border-style;
        border-width: @myRelease-btn-border-width;
        border-color: mix(@myRelease-btn-border-color, #fff, @myRelease-btn-hover-border-color-opacity);
    }

    .myRelease_col_selectDialog_size_medium {
        width: @myRelease-selectDialog-medium-width;
        height: @myRelease-selectDialog-medium-height;
    }

    .myRelease_col_empty_size_medium {
        width: @myRelease-empty-medium-width;
        align-items: @myRelease-empty-medium-horizontal-position;
        margin: @myRelease-empty-medium-margin;
    }

    .myRelease_row_selectDialog {
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

    .myRelease_dialog {
        position: fixed;
        top: 0;
        right: 0;
        overflow: auto;
        background-color: #f4f4f4;
    }
</style>