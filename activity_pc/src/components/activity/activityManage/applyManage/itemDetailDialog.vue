<template>
    <div class="item-detail-dialog-wrap">
        <div class="item-detail-dialog">
            <div class="detail-title">
                <lm-link-text
                        ref="titleRef"
                        refId="titleRef"
                        v-show="pvt_isShow.title === 'titleRef'"
                        :paraVarPair="pvt_title.titleRef.paraVarPair"
                        :para="pvt_title.titleRef.para"
                        :attr="pvt_title.titleRef.attr">
                </lm-link-text>
            </div>
            <div class="item-detail">
                <fillForm
                        ref="fillFormRef"
                        refId="fillFormRef"
                        v-show="pvt_isShow.fillForm === 'fillFormRef'"
                        v-for="(item, index) in pvt_fillForm.fillFormRef.forData"
                        :number="index"
                        :paraVarPair="pvt_fillForm.fillFormRef.paraVarPair"
                        :para="item.para"
                        :attr="item.attr">
                </fillForm>
            </div>
            <div class="btns">
                <lm-button
                        class="dialog-confirm"
                        ref="confirmRef"
                        refId="confirmRef"
                        v-show="pvt_isShow.confirm === 'confirmRef'"
                        :paraVarPair="pvt_confirm.confirmRef.paraVarPair"
                        :para="pvt_confirm.confirmRef.para"
                        :attr="pvt_confirm.confirmRef.attr">
                </lm-button>
                <lm-button
                        class="dialog-cancel"
                        ref="cancelRef"
                        refId="cancelRef"
                        v-show="pvt_isShow.cancel === 'cancelRef'"
                        :paraVarPair="pvt_cancel.cancelRef.paraVarPair"
                        :para="pvt_cancel.cancelRef.para"
                        :attr="pvt_cancel.cancelRef.attr">
                </lm-button>
            </div>
            <div class="dialog-close">
                <lm-button
                        ref="closeRef"
                        refId="closeRef"
                        v-show="pvt_isShow.close === 'closeRef'"
                        :paraVarPair="pvt_close.closeRef.paraVarPair"
                        :para="pvt_close.closeRef.para"
                        :attr="pvt_close.closeRef.attr">
                </lm-button>
            </div>
        </div>
    </div>
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';
    import fillForm from './fillForm';

    export default {
        components: {fillForm},
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ["sys"],
        data: function () {
            return {
                curAppendixDataArr: [],

                mac: mac.mac,

                // 需要双向修改参数的场景，用户可直接修改以下模块参数同名的变量
                // selectedPara: this.para.selected,

                pvt_subModuleMap: {
                    subModule: ['confirmRef', 'cancelRef', 'closeRef', 'fillFormRef', 'titleRef'],
                    vessel: ['confirm', 'cancel', 'close', 'fillForm', 'title'],
                },

                // 各个容器当前显示的子模块
                pvt_isShow: {
                    confirm: null,
                    cancel: null,
                    close: null,
                    fillForm: null,
                    title: null,
                },

                // 当前模块输入类型的事务接口名称，工具完成前需要用户手动填写
                pvt_eventPortInput: [],
            }
        },
        computed: {
            pvt_fillForm: function () {
                let loopModule = {
                    fillFormRef: {
                        para: {
                            curAppendixData: this.curAppendixDataArr,
                        },
                        attr: {},
                    },
                };
                let forData = this.pvt_createForData(loopModule);
                return {
                    fillFormRef: {
                        paraVarPair: {
                        },
                        forData: forData.fillFormRef,
                    },
                };
            },

            pvt_title: function () {
                return {
                    titleRef: {
                        paraVarPair: {},
                        para: {
                            textData: '报名人详细信息'
                        },
                        attr: {
                            fontSize: '14px',
                            color: '#606266'
                        }
                    }
                }
            },

            pvt_confirm: function () {
                return {
                    confirmRef: {
                        paraVarPair: {},
                        para: {
                            name: ['确定', '']
                        },
                        attr: {
                            type: 'primary',
                            size: 'small'
                        }
                    }
                }
            },

            pvt_cancel: function () {
                return {
                    cancelRef: {
                        paraVarPair: {},
                        para: {
                            name: ['取消', '']
                        },
                        attr: {
                            // type: 'primary',
                            plain: true,
                            size: 'small'
                        }
                    }
                }
            },

            pvt_close: function () {
                return {
                    closeRef: {
                        paraVarPair: {},
                        para: {
                            name: ['', 'el-icon-close']
                        },
                        attr: {
                            type: 'text',
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
                let fnname = 'detailDialog_start';
                let dbFlag;
                let dbData;
                let tableName;
                let condition;
                let parentId;
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
                    confirmRef: 'confirmRef',
                    cancelRef: 'cancelRef',
                    closeRef: 'closeRef',
                    fillFormRef: 'fillFormRef',
                };

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                            this.curAppendixDataArr = [];

                            tableName = this.mac.tb.groupActivityBill;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.para.curBillId];
                            dbData[that.mac.fd.groupActivityBill.name] = [];
                            dbData[that.mac.fd.groupActivityBill.mobile] = [];
                            dbData[that.mac.fd.groupActivityBill.info] = [];
                            that.sys.api.recordRead(tableName, dbData, function () {
                                that.curAppendixDataArr.push(['姓名', dbData[that.mac.fd.groupActivityBill.name][0]]);
                                that.curAppendixDataArr.push(['手机', dbData[that.mac.fd.groupActivityBill.mobile][0]]);
                                for(let i = 0; i < dbData[that.mac.fd.groupActivityBill.info][0].name.length; i++) {
                                    that.curAppendixDataArr.push([
                                        dbData[that.mac.fd.groupActivityBill.info][0].name[i],
                                        dbData[that.mac.fd.groupActivityBill.info][0].content[i],
                                    ]);
                                }
                                para.nStep = 'getAppendixId';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'getAppendixId':
                            tableName = this.mac.tb.groupActivityAppendix;
                            parentId = [that.para.curBillId];
                            condition = '';
                            dbData = {};
                            dbData[that.mac.fd.id] = [];
                            that.sys.api.recordQuery(tableName, parentId, condition, dbData, function () {
                                for(let i = 0; i < dbData[that.mac.fd.id].length; i++) {
                                    that.curAppendixDataArr.push(dbData[that.mac.fd.id][i]);
                                }
                                that.forceUpdateData(function () {
                                    para.nStep = 'start_6';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                });
                            }, function () {
                            });
                            break;
                        case 'start_6':
                            if (para.i > that.sm[ref.fillFormRef].length - 1) {
                                para.i = 0;
                                para.nStep = 'start_7';
                                dbFlag++;
                                break;
                            }

                            that.sm[ref.fillFormRef][para.i].startModule(function () {
                                para.i++;
                                para.nStep = 'start_6';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_7':
                            that.sm[ref.confirmRef].startModule(function () {
                                para.nStep = 'start_8';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_8':
                            that.sm[ref.cancelRef].startModule(function () {
                                para.nStep = 'start_9';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_9':
                            that.sm[ref.closeRef].startModule(function () {
                                para.nStep = 'start_10';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_10':
                            that.sm[ref.titleRef].startModule(function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            let refArr = ['fillFormRef', 'confirmRef', 'cancelRef', 'closeRef', 'titleRef'];
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

            confirmEvent: function () {
                this.hideSelfModule(this.refId, function () {
                }, function () {
                });
            },

            cancelEvent: function () {
                this.hideSelfModule(this.refId, function () {
                }, function () {
                });
            },

            confirmRef_buttonClickEvent: function () {
                this.confirmEvent();
            },
            cancelRef_buttonClickEvent: function () {
                this.cancelEvent();
            },
            closeRef_buttonClickEvent: function () {
                this.cancelEvent();
            },
        }
    }
</script>

<style lang="scss">
    .item-detail-dialog-wrap {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 100;
        .item-detail-dialog {
            position: absolute;
            left: 50%;
            top: 50%;
            width: 500px;
            transform: translate(-50%, -50%);
            background-color: #fff;
            overflow: hidden;
            border-radius: 10px;
            padding: 30px;
            box-sizing: border-box;
            .detail-title {
                margin-bottom: 10px;
            }

            .item-detail {
                margin-bottom: 20px;
            }

            .btns {
                text-align: right;
                .dialog-confirm {
                    display: inline-block;
                    margin-right: 10px;
                }
                .dialog-cancel {
                    display: inline-block;
                }
            }

            .dialog-close {
                position: absolute;
                right: 16px;
                top: 6px;
                .lm-button {
                    .el-button--text {
                        color: #c0c4cc;
                    }
                }
            }
        }
    }
</style>
