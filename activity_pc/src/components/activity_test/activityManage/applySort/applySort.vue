<template>
    <div class="reject-dialog">
        33333333333333
        <div class="dialog-title">
            <lm-link-text
                    ref="titleRef"
                    refId="titleRef"
                    v-show="pvt_isShow.title === 'titleRef'"
                    :paraVarPair="pvt_title.titleRef.paraVarPair"
                    :para="pvt_title.titleRef.para"
                    :attr="pvt_title.titleRef.attr">
            </lm-link-text>
        </div>
        <div class="notice">
            <lm-link-text
                    ref="noticeRef"
                    refId="noticeRef"
                    v-show="pvt_isShow.notice === 'noticeRef'"
                    :paraVarPair="pvt_notice.noticeRef.paraVarPair"
                    :para="pvt_notice.noticeRef.para"
                    :attr="pvt_notice.noticeRef.attr">
            </lm-link-text>
        </div>
        <div class="info">
            <lm-link-text
                    ref="infoRef"
                    refId="infoRef"
                    v-show="pvt_isShow.info === 'infoRef'"
                    v-for="(item, index) in pvt_info.infoRef.forData"
                    :number="index"
                    :paraVarPair="pvt_info.infoRef.paraVarPair"
                    :para="item.para"
                    :attr="item.attr">
            </lm-link-text>
        </div>
        <div class="text">
            <lm-link-text
                    ref="textRef"
                    refId="textRef"
                    v-show="pvt_isShow.text === 'textRef'"
                    :paraVarPair="pvt_text.textRef.paraVarPair"
                    :para="pvt_text.textRef.para"
                    :attr="pvt_text.textRef.attr">
            </lm-link-text>
        </div>
        <div class="input">
            <lm-input-text
                    ref="inputRef"
                    refId="inputRef"
                    v-show="pvt_isShow.input === 'inputRef'"
                    :paraVarPair="pvt_input.inputRef.paraVarPair"
                    :para="pvt_input.inputRef.para"
                    :attr="pvt_input.inputRef.attr">
            </lm-input-text>
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
</template>
<script>
    import libSys from '@/components/baseComponent/libSys.js';
    import libUpload from '@/components/baseComponent/libUpload.js';

    export default {
        components: {},
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ["sys"],
        data: function () {
            return {
                rejectValue: '',
                infoArr: [],
                numTotal: 0,

                mac: mac.mac,

                // 需要双向修改参数的场景，用户可直接修改以下模块参数同名的变量
                // selectedPara: this.para.selected,

                pvt_subModuleMap: {
                    subModule: ['titleRef', 'noticeRef', 'infoRef', 'textRef', 'inputRef', 'confirmRef', 'cancelRef', 'closeRef'],
                    vessel: ['title', 'notice', 'info', 'text', 'input', 'confirm', 'cancel', 'close'],
                },

                // 各个容器当前显示的子模块
                pvt_isShow: {
                    title: null,
                    notice: null,
                    info: null,
                    text: null,
                    input: null,
                    confirm: null,
                    cancel: null,
                    close: null,
                },

                // 当前模块输入类型的事务接口名称，工具完成前需要用户手动填写
                pvt_eventPortInput: ['confirmEvent', 'rejectReason'],
            }
        },
        computed: {
            pvt_title: function () {
                return {
                    titleRef: {
                        paraVarPair: {},
                        para: {
                            textData: '拒绝报名申请'
                        },
                        attr: {
                            fontSize: '16px',
                            color: '#303133'
                        }
                    }
                }
            },

            pvt_notice: function () {
                return {
                    noticeRef: {
                        paraVarPair: {},
                        para: {
                            textData: '拒绝名单后将无法恢复，请谨慎操作。已选择名单如下：'
                        },
                        attr: {
                            fontSize: '14px',
                            color: '#FC7122'
                        }
                    }
                }
            },

            pvt_info: function () {
                let loopModule = {
                    infoRef: {
                        para: {
                            textData: this.infoArr,
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#303133'
                        },
                    },
                };
                let forData = this.pvt_createForData(loopModule);
                return {
                    infoRef: {
                        paraVarPair: {
                        },
                        forData: forData.infoRef,
                    },
                };
            },

            pvt_text: function () {
                return {
                    textRef: {
                        paraVarPair: {},
                        para: {
                            textData: '如果确定拒绝报名申请，请填写详细原因（限3-30字），将以短信形式发送给参与者：'
                        },
                        attr: {
                            fontSize: '12px',
                            color: '#303133'
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

            pvt_input: function () {
                return {
                    inputRef: {
                        paraVarPair: {},
                        para: {
                            text: ''
                        },
                        attr: {
                            placeholder: '请输入拒绝的详细原因，限3-30字',
                            type: 'textarea'
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
            this.getNumber();
        },
        methods: {
            startModule: function (successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'rejectDialog_start';
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

                let ref = {
                    titleRef: 'titleRef',
                    noticeRef: 'noticeRef',
                    infoRef: 'infoRef',
                    textRef: 'textRef',
                    inputRef: 'inputRef',
                    confirmRef: 'confirmRef',
                    cancelRef: 'cancelRef',
                    closeRef: 'closeRef',
                };
                para.successCallBack()

                // while (1) {
                //     dbFlag = 0;
                //     console.log(fnname + ': para.nStep = ' + para.nStep);
                //     switch (para.nStep) {
                //         case 0:
                //             this.rejectValue = '';
                //             this.infoArr = [];
                //             this.numTotal = 0;
                //
                //             para.nStep = 'getInfo';
                //             dbFlag++;
                //             break;
                //         case 'getInfo':
                //             tableName = this.mac.tb.groupActivityEnroll;
                //             dbData = {};
                //             dbData[that.mac.fd.id] = this.para.rejectItemIdArr;
                //             dbData[that.mac.fd.groupActivityEnroll.info] = [];
                //             that.sys.api.recordRead(tableName, dbData, function () {
                //                 for(let i = 0; i < dbData[that.mac.fd.groupActivityEnroll.info].length; i++) {
                //                     let infoStr = '';
                //                     dbData[that.mac.fd.groupActivityEnroll.info][i].name.forEach(function (item, index) {
                //                         if(item === '姓名') {
                //                             infoStr += dbData[that.mac.fd.groupActivityEnroll.info][i].content[index];
                //                         }
                //                         if(item === '手机') {
                //                             infoStr += '/';
                //                             infoStr += dbData[that.mac.fd.groupActivityEnroll.info][i].content[index];
                //                         }
                //                     });
                //                     that.infoArr.push(infoStr);
                //                 }
                //                 that.forceUpdateData(function () {
                //                     para.nStep = 'start_2';
                //                     if (++dbFlag === 2) {
                //                         that.startModule(successCallBack, errorCallBack)
                //                     }
                //                 });
                //             }, function () {
                //             });
                //             break;
                //         case 'start_2':
                //             that.sm[ref.titleRef].startModule(function () {
                //                 para.nStep = 'start_3';
                //                 if (++dbFlag === 2) {
                //                     that.startModule(successCallBack, errorCallBack)
                //                 }
                //             }, function () {
                //             });
                //             break;
                //         case 'start_3':
                //             that.sm[ref.noticeRef].startModule(function () {
                //                 para.nStep = 'start_4';
                //                 if (++dbFlag === 2) {
                //                     that.startModule(successCallBack, errorCallBack)
                //                 }
                //             }, function () {
                //             });
                //             break;
                //         case 'start_4':
                //             // that.callLoopModuleMethod('infoRef', 'startModule', [[para.successCallBack, para.errorCallBack]], function () {
                //             //     para.nStep = 'start_5';
                //             //     if (++dbFlag === 2) {
                //             //         that.startModule(successCallBack, errorCallBack)
                //             //     }
                //             // }, function () {
                //             // });
                //             if (para.i > that.sm[ref.infoRef].length - 1) {
                //                 para.i = 0;
                //                 para.nStep = 'start_5';
                //                 dbFlag++;
                //                 break;
                //             }
                //
                //             that.sm[ref.infoRef][para.i].startModule(function () {
                //                 para.i++;
                //                 para.nStep = 'start_4';
                //                 if (++dbFlag === 2) {
                //                     that.startModule(successCallBack, errorCallBack)
                //                 }
                //             }, function () {
                //             });
                //             break;
                //         case 'start_5':
                //             that.sm[ref.textRef].startModule(function () {
                //                 para.nStep = 'start_6';
                //                 if (++dbFlag === 2) {
                //                     that.startModule(successCallBack, errorCallBack)
                //                 }
                //             }, function () {
                //             });
                //             break;
                //         case 'start_6':
                //             that.sm[ref.inputRef].startModule(function () {
                //                 para.nStep = 'start_7';
                //                 if (++dbFlag === 2) {
                //                     that.startModule(successCallBack, errorCallBack)
                //                 }
                //             }, function () {
                //             });
                //             break;
                //         case 'start_7':
                //             that.sm[ref.confirmRef].startModule(function () {
                //                 para.nStep = 'start_8';
                //                 if (++dbFlag === 2) {
                //                     that.startModule(successCallBack, errorCallBack)
                //                 }
                //             }, function () {
                //             });
                //             break;
                //         case 'start_8':
                //             that.sm[ref.cancelRef].startModule(function () {
                //                 para.nStep = 'start_9';
                //                 if (++dbFlag === 2) {
                //                     that.startModule(successCallBack, errorCallBack)
                //                 }
                //             }, function () {
                //             });
                //             break;
                //         case 'start_9':
                //             that.sm[ref.closeRef].startModule(function () {
                //                 para.nStep = 'showSubModule';
                //                 if (++dbFlag === 2) {
                //                     that.startModule(successCallBack, errorCallBack)
                //                 }
                //             }, function () {
                //             });
                //             break;
                //         case 'showSubModule':
                //             let refArr = ['titleRef', 'noticeRef', 'infoRef', 'textRef', 'inputRef', 'confirmRef', 'cancelRef', 'closeRef'];
                //             that.showSubModule(refArr, true, function () {
                //                 para.nStep = 'end';
                //                 if (++dbFlag === 2) {
                //                     that.startModule(successCallBack, errorCallBack)
                //                 }
                //             }, para.errorCallBack);
                //             break;
                //         case 'end':
                //             para.successCallBack();
                //             return
                //     }
                //     if (++dbFlag === 1) {
                //         return
                //     }
                // }
            },

            getInputValue: function (value) {
                this.rejectValue = value;
            },

            confirmEvent: function () {
                // 拒绝的理由要写入云端数据库：
                if(this.numTotal < 3 || this.numTotal > 30) {
                    this.$message.warning('拒绝原因限3-30字！');
                    return
                }

                // this.ep.rejectReason(this.rejectValue);

                this.ep.confirmEvent(this.para.rejectItemIdArr);
                this.rejectValue = '';
                this.hideSelfModule(this.refId, function () {
                }, function () {
                });
            },

            cancelEvent: function () {
                this.rejectValue = '';
                this.hideSelfModule(this.refId, function () {
                }, function () {
                });
            },

            getNumber: function () {
                let that = this;
                let flag = true;
                let textarea = document.querySelector('.reject-dialog-wrap .el-textarea__inner');
                textarea.addEventListener('compositionstart', function () {
                    flag = false;
                }, false);
                textarea.addEventListener('compositionend', function () {
                    flag = true;
                }, false);
                textarea.addEventListener('input', function () {
                    setTimeout(function () {
                        if (flag) {
                            that.numTotal = textarea.value.length;
                        }
                    }, 0)
                }, false);
            },

            inputRef_dataModifyEvent(value) {
                this.getInputValue(value);
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
    .reject-dialog {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background-color: #fff;
        overflow: hidden;
        border-radius: 6px;
        padding: 20px 30px;

        .dialog-title {
            margin-bottom: 10px;
        }

        .notice {
            display: block;
            padding: 10px;
            background-color: #FFF1E8;
            margin-left: 20px;
            margin-bottom: 10px;
        }

        .info {
            margin-bottom: 20px;
            margin-left: 20px;
            font-size: 12px;
            span {
                display: block;
                margin-bottom: 6px;
            }
        }

        .text {
            margin-left: 20px;
            margin-bottom: 6px;
        }

        .input {
            margin-bottom: 20px;
            margin-left: 20px;
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
            right: 10px;
            top: 0;
            .lm-button {
                .el-button--text {
                    color: #c0c4cc;
                }
            }
        }
    }
</style>
