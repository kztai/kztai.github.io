<template>
    <div class="code-dialog-wrap">
        <div class="code-dialog">
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
            <div class="name">
                <lm-link-text
                        ref="nameRef"
                        refId="nameRef"
                        v-show="pvt_isShow.name === 'nameRef'"
                        :paraVarPair="pvt_name.nameRef.paraVarPair"
                        :para="pvt_name.nameRef.para"
                        :attr="pvt_name.nameRef.attr">
                </lm-link-text>
            </div>
            <div class="phone">
                <lm-link-text
                        ref="phoneRef"
                        refId="phoneRef"
                        v-show="pvt_isShow.phone === 'phoneRef'"
                        :paraVarPair="pvt_phone.phoneRef.paraVarPair"
                        :para="pvt_phone.phoneRef.para"
                        :attr="pvt_phone.phoneRef.attr">
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
                <lm-button
                        ref="codeRef"
                        refId="codeRef"
                        v-show="pvt_isShow.code === 'codeRef'"
                        :paraVarPair="pvt_code.codeRef.paraVarPair"
                        :para="pvt_code.codeRef.para"
                        :attr="pvt_code.codeRef.attr">
                </lm-button>
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

    export default {
        components: {},
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ["sys"],
        data: function () {
            return {
                codeValue: '',
                getCodeDisabled: false,
                inputDisabled: true,
                codeText: '获取验证码',
                phone: '',
                timeOut: null,

                mac: mac.mac,

                pvt_subModuleMap: {
                    subModule: ['titleRef', 'noticeRef', 'nameRef', 'phoneRef', 'inputRef', 'codeRef', 'confirmRef', 'cancelRef', 'closeRef'],
                    vessel: ['title', 'notice', 'name', 'phone', 'input', 'code', 'confirm', 'cancel', 'close'],
                },

                // 各个容器当前显示的子模块
                pvt_isShow: {
                    title: null,
                    notice: null,
                    name: null,
                    phone: null,
                    input: null,
                    code: null,
                    confirm: null,
                    cancel: null,
                    close: null,
                },

                // 当前模块输入类型的事务接口名称，工具完成前需要用户手动填写
                pvt_eventPortInput: ['getSeccodeIn', 'seccodeVerifyIn', 'refreshTicket', 'ticketPassIn'],
            }
        },
        computed: {
            pvt_title: function () {
                return {
                    titleRef: {
                        paraVarPair: {},
                        para: {
                            textData: '验票签到'
                        },
                        attr: {
                            fontSize: '16px',
                            color: '#303133',
                            textAlign: 'center'
                        }
                    }
                }
            },

            pvt_notice: function () {
                return {
                    noticeRef: {
                        paraVarPair: {},
                        para: {
                            textData: '需先验证手机号，验证成功后方可验票成功'
                        },
                        attr: {
                            fontSize: '14px',
                            color: '#303133',
                            textAlign: 'center'
                        }
                    }
                }
            },

            pvt_name: function () {
                return {
                    nameRef: {
                        paraVarPair: {},
                        para: {
                            textData: [{
                                $table: this.mac.tb.groupActivityBill,
                                $arrField: [this.mac.fd.groupActivityBill.name],
                                $arrValue: [this.para.curBillId]
                            }]
                        },
                        attr: {
                            fontSize: '14px',
                            color: '#303133',
                            textAlign: 'center',
                            fontWeight: true
                        }
                    }
                }
            },

            pvt_phone: function () {
                return {
                    phoneRef: {
                        paraVarPair: {},
                        para: {
                            textData: [{
                                $table: this.mac.tb.groupActivityBill,
                                $arrField: [this.mac.fd.groupActivityBill.mobile],
                                $arrValue: [this.para.curBillId],
                                $arrSubTab: [

                                ]
                            }]
                        },
                        attr: {
                            fontSize: '14px',
                            color: '#303133',
                            textAlign: 'center',
                            fontWeight: true
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
                            plain: true,
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
                            placeholder: '输入验证码',
                            disabled: this.inputDisabled
                            // type: 'textarea'
                        }
                    }
                }
            },

            pvt_code: function () {
                return {
                    codeRef: {
                        paraVarPair: {},
                        para: {
                            name: [this.codeText, '']
                        },
                        attr: {
                            plain: true,
                            disabled: this.getCodeDisabled,
                            width: '108px'
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
                let fnname = 'codeDialog_start';
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
                    nameRef: 'nameRef',
                    phoneRef: 'phoneRef',
                    inputRef: 'inputRef',
                    codeRef: 'codeRef',
                    confirmRef: 'confirmRef',
                    cancelRef: 'cancelRef',
                    closeRef: 'closeRef',
                };

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                            tableName = this.mac.tb.groupActivityBill;
                            dbData = {};
                            dbData[that.mac.fd.id] = [that.para.curBillId];
                            dbData[that.mac.fd.groupActivityBill.mobile] = [];
                            that.sys.api.recordRead(tableName, dbData, function () {
                                that.phone = dbData[that.mac.fd.groupActivityBill.mobile][0];
                                para.nStep = 'start_2';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_2':
                            that.sm[ref.titleRef].startModule(function () {
                                para.nStep = 'start_3';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_3':
                            that.sm[ref.noticeRef].startModule(function () {
                                para.nStep = 'start_4';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_4':
                            that.sm[ref.nameRef].startModule(function () {
                                para.nStep = 'start_5';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_5':
                            that.sm[ref.phoneRef].startModule(function () {
                                para.nStep = 'start_6';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'start_6':
                            that.sm[ref.inputRef].startModule(function () {
                                para.nStep = 'start_7';
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
                            that.sm[ref.codeRef].startModule(function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            let refArr = ['titleRef', 'noticeRef', 'nameRef', 'phoneRef', 'inputRef', 'codeRef', 'confirmRef', 'cancelRef', 'closeRef'];
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

            getInputValue: function (value) {
                this.codeValue = value;
            },

            codeCheckEvent: function () {
                let that = this;
                let disableTime = 60;

                if (!navigator.onLine) {
                    that.$message.warning('出错了！请稍后再试。');
                    return
                }

                // 输入框允许输入：
                this.inputDisabled = false;

                // 向用户手机发送验证码：
                that.ep.getSeccodeIn(that.phone, function () {
                }, function () {
                });

                // 按钮进入倒计时：
                that.getCodeDisabled = true;
                that.codeText = disableTime + 's后重发';
                that.forceUpdateData(function () {
                    that.sm.codeRef.startModule(function () {
                        setTimeout(refreshBtn, 1000);
                    }, function () {
                    });
                    that.sm.inputRef.startModule(function () {
                    }, function () {
                    });
                });

                function refreshBtn() {
                    disableTime--;
                    if (disableTime <= 0) {
                        that.getCodeDisabled = false;
                        that.codeText = '获取验证码';
                        that.forceUpdateData(function () {
                            that.sm.codeRef.startModule(function () {
                            }, function () {
                            });
                        });
                    } else {
                        that.codeText = disableTime + 's后重发';
                        that.forceUpdateData(function () {
                            that.sm.codeRef.startModule(function () {
                                that.timeOut = setTimeout(refreshBtn, 1000);
                            }, function () {
                            });
                        });
                    }
                }
            },

            confirmEvent: function () {
                let that = this;
                // 拒绝的理由要写入云端数据库：
                if (this.codeValue === '') {
                    this.$message.warning('验证码不能为空！');
                    return
                }

                let tableName = this.mac.tb.groupActivityBill;
                let record = [this.para.curBillId];
                that.sys.api.getSourceRecord(tableName, record, function (result) {
                    if (!navigator.onLine) {
                        that.$message.warning('出错了！请稍后再试。');
                    } else {
                        that.ep.seccodeVerifyIn(result[0], that.codeValue, function (result1) {
                            if (result1) {
                                clearTimeout(that.timeOut);
                                that.timeOut = null;
                                that.inputDisabled = true;
                                that.getCodeDisabled = false;
                                that.codeText = '获取验证码';
                                that.forceUpdateData(function () {
                                    that.sm.codeRef.startModule(function () {
                                    }, function () {
                                    });
                                    that.sm.inputRef.startModule(function () {
                                    }, function () {
                                    });
                                });

                                that.codeValue = '';
                                that.ep.refreshTicket(that.para.curBillId);
                                that.ep.ticketPassIn(result[0], function () {
                                }, function () {
                                });
                                that.hideSelfModule(that.refId, function () {
                                }, function () {
                                });
                            } else {
                                that.$message.error('验证码错误！');
                            }
                        }, function () {
                        });
                    }
                }, function () {
                });
            },

            cancelEvent: function () {
                this.codeValue = '';
                this.hideSelfModule(this.refId, function () {
                }, function () {
                });
            },

            inputRef_dataModifyEvent(value) {
                this.getInputValue(value);
            },
            codeRef_buttonClickEvent: function () {
                this.codeCheckEvent();
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
    .code-dialog-wrap {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 100;

        .code-dialog {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            background-color: #fff;
            overflow: hidden;
            border-radius: 6px;
            padding: 20px 30px;

            .dialog-title, .notice, .name {
                margin-bottom: 10px;
            }

            .phone {
                margin-bottom: 20px;
            }

            .input {
                margin-bottom: 20px;

                .lm_text_input_container {
                    display: inline-block;
                    margin-right: 10px;
                }

                .lm-button {
                    display: inline-block;
                }
            }

            .btns {
                text-align: center;

                .dialog-confirm {
                    display: inline-block;
                    margin-right: 20px;
                }

                .dialog-cancel {
                    display: inline-block;
                }

                .el-button {
                    padding: 8px 30px;
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
    }
</style>
