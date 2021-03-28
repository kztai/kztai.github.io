<template>
    <div class="codeDialog_container">
        <div class="codeDialog_row codeDialog_row_codeDialogRow">
            <div :class="{codeDialog_col:true,codeDialog_col_codeDialogWindow:true,codeDialog_col_codeDialogWindow_size_large:attr.size==='large',codeDialog_col_codeDialogWindow_size_medium:attr.size==='medium',codeDialog_col_codeDialogWindow_size_small:attr.size==='small',codeDialog_col_codeDialogWindow_size_min:attr.size==='min',codeDialog_col_codeDialogWindow_checked:attr.checked,codeDialog_col_codeDialogWindow_disable:attr.disabled}">

                <div class="codeDialog_row codeDialog_row_row1">
                    <div :class="{codeDialog_col:true,codeDialog_col_title:true,codeDialog_col_title_size_large:attr.size==='large',codeDialog_col_title_size_medium:attr.size==='medium',codeDialog_col_title_size_small:attr.size==='small',codeDialog_col_title_size_min:attr.size==='min',codeDialog_col_title_checked:attr.checked,codeDialog_col_title_disable:attr.disabled}">

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
                <div class="codeDialog_row codeDialog_row_row2">
                    <div :class="{codeDialog_col:true,codeDialog_col_desc:true,codeDialog_col_desc_size_large:attr.size==='large',codeDialog_col_desc_size_medium:attr.size==='medium',codeDialog_col_desc_size_small:attr.size==='small',codeDialog_col_desc_size_min:attr.size==='min',codeDialog_col_desc_checked:attr.checked,codeDialog_col_desc_disable:attr.disabled}">

                        <lm2b-link-text
                                ref="descRef"
                                refId="descRef"
                                v-show="pvt_isShow.desc === 'descRef'"
                                :paraVarPair="pvt_desc.descRef.paraVarPair"
                                :para="pvt_desc.descRef.para"
                                :attr="pvt_desc.descRef.attr">
                        </lm2b-link-text>
                    </div>
                </div>
                <div class="codeDialog_row codeDialog_row_row3">
                    <div :class="{codeDialog_col:true,codeDialog_col_name:true,codeDialog_col_name_size_large:attr.size==='large',codeDialog_col_name_size_medium:attr.size==='medium',codeDialog_col_name_size_small:attr.size==='small',codeDialog_col_name_size_min:attr.size==='min',codeDialog_col_name_checked:attr.checked,codeDialog_col_name_disable:attr.disabled}">

                        <lm2b-link-text
                                ref="nameRef"
                                refId="nameRef"
                                v-show="pvt_isShow.name === 'nameRef'"
                                :paraVarPair="pvt_name.nameRef.paraVarPair"
                                :para="pvt_name.nameRef.para"
                                :attr="pvt_name.nameRef.attr">
                        </lm2b-link-text>
                    </div>
                </div>
                <div class="codeDialog_row codeDialog_row_row4">
                    <div :class="{codeDialog_col:true,codeDialog_col_phone:true,codeDialog_col_phone_size_large:attr.size==='large',codeDialog_col_phone_size_medium:attr.size==='medium',codeDialog_col_phone_size_small:attr.size==='small',codeDialog_col_phone_size_min:attr.size==='min',codeDialog_col_phone_checked:attr.checked,codeDialog_col_phone_disable:attr.disabled}">

                        <lm2b-link-text
                                ref="phoneRef"
                                refId="phoneRef"
                                v-show="pvt_isShow.phone === 'phoneRef'"
                                :paraVarPair="pvt_phone.phoneRef.paraVarPair"
                                :para="pvt_phone.phoneRef.para"
                                :attr="pvt_phone.phoneRef.attr">
                        </lm2b-link-text>
                    </div>
                </div>
                <div class="codeDialog_row codeDialog_row_row5">
                    <div :class="{codeDialog_col:true,codeDialog_col_input:true,codeDialog_col_input_size_large:attr.size==='large',codeDialog_col_input_size_medium:attr.size==='medium',codeDialog_col_input_size_small:attr.size==='small',codeDialog_col_input_size_min:attr.size==='min',codeDialog_col_input_checked:attr.checked,codeDialog_col_input_disable:attr.disabled}">

                        <lm2b-input-text
                                ref="inputRef"
                                refId="inputRef"
                                v-show="pvt_isShow.input === 'inputRef'"
                                :paraVarPair="pvt_input.inputRef.paraVarPair"
                                :para="pvt_input.inputRef.para"
                                :attr="pvt_input.inputRef.attr">
                        </lm2b-input-text>
                    </div>
                    <div :class="{codeDialog_col:true,codeDialog_col_codeBtn:true,codeDialog_col_codeBtn_size_large:attr.size==='large',codeDialog_col_codeBtn_size_medium:attr.size==='medium',codeDialog_col_codeBtn_size_small:attr.size==='small',codeDialog_col_codeBtn_size_min:attr.size==='min',codeDialog_col_codeBtn_checked:attr.checked,codeDialog_col_codeBtn_disable:attr.disabled}">

                        <lm2b-button
                                ref="codeBtnRef"
                                refId="codeBtnRef"
                                v-show="pvt_isShow.codeBtn === 'codeBtnRef'"
                                :paraVarPair="pvt_codeBtn.codeBtnRef.paraVarPair"
                                :para="pvt_codeBtn.codeBtnRef.para"
                                :attr="pvt_codeBtn.codeBtnRef.attr">
                        </lm2b-button>
                    </div>
                </div>
                <div class="codeDialog_row codeDialog_row_row6">
                    <div :class="{codeDialog_col:true,codeDialog_col_cancelBtn:true,codeDialog_col_cancelBtn_size_large:attr.size==='large',codeDialog_col_cancelBtn_size_medium:attr.size==='medium',codeDialog_col_cancelBtn_size_small:attr.size==='small',codeDialog_col_cancelBtn_size_min:attr.size==='min',codeDialog_col_cancelBtn_checked:attr.checked,codeDialog_col_cancelBtn_disable:attr.disabled}">

                        <lm2b-button
                                ref="cancelBtnRef"
                                refId="cancelBtnRef"
                                v-show="pvt_isShow.cancelBtn === 'cancelBtnRef'"
                                :paraVarPair="pvt_cancelBtn.cancelBtnRef.paraVarPair"
                                :para="pvt_cancelBtn.cancelBtnRef.para"
                                :attr="pvt_cancelBtn.cancelBtnRef.attr">
                        </lm2b-button>
                    </div>
                    <div :class="{codeDialog_col:true,codeDialog_col_confirmBtn:true,codeDialog_col_confirmBtn_size_large:attr.size==='large',codeDialog_col_confirmBtn_size_medium:attr.size==='medium',codeDialog_col_confirmBtn_size_small:attr.size==='small',codeDialog_col_confirmBtn_size_min:attr.size==='min',codeDialog_col_confirmBtn_checked:attr.checked,codeDialog_col_confirmBtn_disable:attr.disabled}">

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

    export default {
        components: {},
        inject: ['sys'],
        props: ['refId', 'para', 'attr', 'number'],
        data: function () {
            return {
                pvt_subModuleMap: {
                    vessel: ['title', 'desc', 'name', 'phone', 'input', 'codeBtn', 'confirmBtn', 'cancelBtn'],
                    subModule: ['titleRef', 'descRef', 'nameRef', 'phoneRef', 'inputRef', 'codeBtnRef', 'confirmBtnRef', 'cancelBtnRef'],
                },
                pvt_isShow: {
                    title: null,
                    desc: null,
                    name: null,
                    phone: null,
                    input: null,
                    codeBtn: null,
                    confirmBtn: null,
                    cancelBtn: null,
                },
                pvt_eventPortInput: ['confirmEvent', 'getSeccodeEvent', 'seccodeVerifyEvent', 'cancelEvent'],

                mac: mac.mac,

                inputDisabled: true,
                codeText: '获取验证码',
                getCodeDisabled: false,
                curBillId: null,
                phone: null,
            };
        },
        watch: {},
        computed: {
            pvt_title: function () {
                return {
                    titleRef: {
                        paraVarPair: {},
                        para: {
                            textData: '验票签到',
                        },
                        attr: {
                            textAlign: 'center',
                            fontWeight: true,
                            color: '#333',
                            fontSize: '16px',
                        },
                    },
                };
            },
            pvt_desc: function () {
                return {
                    descRef: {
                        paraVarPair: {},
                        para: {
                            textData: '需先验证手机号，验证通过后方可验票成功',
                        },
                        attr: {
                            textAlign: 'center',
                            color: '#333',
                            fontSize: '14px',
                        },
                    },
                };
            },
            pvt_name: function () {
                return {
                    nameRef: {
                        paraVarPair: {},
                        para: {
                            textData: [{
                                $table: this.mac.tb.groupActivityBill,
                                $arrField: [this.mac.fd.groupActivityBill.name],
                                $arrValue: [this.curBillId]
                            }],
                        },
                        attr: {
                            textAlign: 'center',
                            fontWeight: true,
                            color: '#333',
                            fontSize: '14px',
                        },
                    },
                };
            },
            pvt_phone: function () {
                return {
                    phoneRef: {
                        paraVarPair: {},
                        para: {
                            textData: [{
                                $table: this.mac.tb.groupActivityBill,
                                $arrField: [this.mac.fd.groupActivityBill.mobile],
                                $arrValue: [this.curBillId]
                            }],
                        },
                        attr: {
                            textAlign: 'center',
                            fontWeight: true,
                            color: '#333',
                            fontSize: '14px',
                        },
                    },
                };
            },
            pvt_input: function () {
                return {
                    inputRef: {
                        paraVarPair: {},
                        para: {
                            text: '',
                        },
                        attr: {
                            placeholder: '输入验证码',
                            disabled: this.inputDisabled,
                            isPlaceholder: false
                        },
                    },
                };
            },
            pvt_codeBtn: function () {
                return {
                    codeBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: [this.codeText, ''],
                        },
                        attr: {
                            plain: true,
                            disabled: this.getCodeDisabled,
                            width: '102px',
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
                            long: true
                        },
                    },
                };
            },
            pvt_cancelBtn: function () {
                return {
                    cancelBtnRef: {
                        paraVarPair: {},
                        para: {
                            name: ['取消', ''],
                        },
                        attr: {
                            plain: true,
                            long: true
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
            startModule: function (curBillId, successCallBack, errorCallBack) {
                let that = this;
                let fnname = 'codeDialog_start';
                let dbFlag;
                let dbData;
                let tableName;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0,
                    refArr: ['titleRef', 'descRef', 'nameRef', 'phoneRef', 'inputRef', 'codeBtnRef', 'confirmBtnRef', 'cancelBtnRef']
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
                            that.curBillId = curBillId;
                            that.codeValue = '';

                            tableName = this.mac.tb.groupActivityBill;
                            dbData = {};
                            dbData[that.mac.fd.id] = [curBillId];
                            dbData[that.mac.fd.groupActivityBill.mobile] = [];
                            that.sys.api.recordRead(tableName, dbData, function () {
                                that.phone = dbData[that.mac.fd.groupActivityBill.mobile][0];

                                that.forceUpdateData(function () {
                                    para.nStep = 'start_sub';
                                    if (++dbFlag === 2) {
                                        that.startModule(curBillId, successCallBack, errorCallBack)
                                    }
                                });
                            }, function () {
                            });
                            break;
                        case 'start_sub':
                            if(para.i >= para.refArr.length) {
                                para.i = 0;
                                para.nStep = 'showSubModule';
                                dbFlag++;
                                break;
                            }
                            that.sm[para.refArr[para.i]].startModule(function () {
                                para.i++;
                                para.nStep = 'start_sub';
                                if (++dbFlag === 2) {
                                    that.startModule(curBillId, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            that.showSubModule(para.refArr, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.startModule(curBillId, successCallBack, errorCallBack)
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
                    this.$notify({type: 'warning', message: '出错了！请稍后再试。'});
                    return
                }

                // 输入框允许输入：
                this.inputDisabled = false;

                // 向用户手机发送验证码：
                that.ep.getSeccodeEvent(that.phone, function () {
                }, function () {
                });

                // 按钮进入倒计时：
                that.getCodeDisabled = true;
                that.codeText = disableTime + 's后重发';
                that.forceUpdateData(function () {
                    that.sm.codeBtnRef.startModule(function () {
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
                            that.sm.codeBtnRef.startModule(function () {
                            }, function () {
                            });
                        });
                    } else {
                        that.codeText = disableTime + 's后重发';
                        that.forceUpdateData(function () {
                            that.sm.codeBtnRef.startModule(function () {
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
                    this.$notify({type: 'warning', message: '验证码不能为空！'});
                    return
                }

                let tableName = this.mac.tb.groupActivityBill;
                let record = [this.curBillId];
                that.sys.api.getSourceRecord(tableName, record, function (result) {
                    if (!navigator.onLine) {
                        that.$notify({type: 'warning', message: '出错了！请稍后再试。'});
                    } else {
                        that.ep.seccodeVerifyEvent(result[0], that.codeValue, function (result1) {
                            if (result1) {
                                clearTimeout(that.timeOut);
                                that.timeOut = null;
                                // that.inputDisabled = true;
                                // that.getCodeDisabled = false;
                                // that.codeText = '获取验证码';
                                // that.forceUpdateData(function () {
                                //     that.sm.codeBtnRef.startModule(function () {
                                //     }, function () {
                                //     });
                                //     that.sm.inputRef.startModule(function () {
                                //     }, function () {
                                //     });
                                // });
                                //
                                // that.codeValue = '';
                                that.ep.confirmEvent();
                                that.hideSelfModule(that.refId, function () {
                                }, function () {
                                });
                            } else {
                                that.$notify({type: 'error', message: '验证码错误！'});
                            }
                        }, function () {
                        });
                    }
                }, function () {
                });
            },
            cancelEvent: function () {
                clearTimeout(this.timeOut);
                this.timeOut = null;
                this.ep.cancelEvent();
                this.codeValue = '';
                this.hideSelfModule(this.refId, function () {
                }, function () {
                });
            },
            inputRef_dataModifyEvent: function (value) {
                this.getInputValue(value);
            },
            codeBtnRef_buttonClickEvent: function () {
                this.codeCheckEvent();
            },
            confirmBtnRef_buttonClickEvent: function () {
                this.confirmEvent();
            },
            cancelBtnRef_buttonClickEvent: function () {
                this.cancelEvent();
            },
        },
    };
</script>
<style lang="less" scoped>
    @import "../../../../assets/var_kzt"; /*新增*/
    .codeDialog_container {
    }

    .codeDialog_row {
        display: flex;
        flex: 1;
    }

    .codeDialog_col {
        display: flex;
        flex-direction: column;
    }

    .codeDialog_col_codeDialogWindow_size_medium {
        width: @codeDialog-codeDialogWindow-medium-width;
        padding: @codeDialog-codeDialogWindow-medium-padding;
    }

    .codeDialog_col_codeDialogWindow {
        background-color: mix(@codeDialog-codeDialogWindow-background-color, #fff, @codeDialog-codeDialogWindow-background-color-opacity);
        border-radius: @codeDialog-codeDialogWindow-border-radius;
    }

    .codeDialog_col_title_size_medium {
        width: @codeDialog-title-medium-width;
        align-items: @codeDialog-title-medium-horizontal-position;
        margin: @codeDialog-title-medium-margin;
    }

    .codeDialog_col_desc_size_medium {
        width: @codeDialog-desc-medium-width;
        align-items: @codeDialog-desc-medium-horizontal-position;
        margin: @codeDialog-desc-medium-margin;
    }

    .codeDialog_col_name_size_medium {
        width: @codeDialog-name-medium-width;
        align-items: @codeDialog-name-medium-horizontal-position;
        margin: @codeDialog-name-medium-margin;
    }

    .codeDialog_col_phone_size_medium {
        width: @codeDialog-phone-medium-width;
        align-items: @codeDialog-phone-medium-horizontal-position;
        margin: @codeDialog-phone-medium-margin;
    }

    .codeDialog_col_input_size_medium {
        width: @codeDialog-input-medium-width;
    }

    .codeDialog_col_codeBtn_size_medium {
        width: @codeDialog-codeBtn-medium-width;
    }

    .codeDialog_col_confirmBtn_size_medium {
        width: @codeDialog-confirmBtn-medium-width;
        margin: @codeDialog-confirmBtn-medium-margin;
        align-items: @codeDialog-confirmBtn-medium-horizontal-position;
        padding: @codeDialog-confirmBtn-medium-padding;
    }

    .codeDialog_col_cancelBtn_size_medium {
        width: @codeDialog-cancelBtn-medium-width;
        margin: @codeDialog-cancelBtn-medium-margin;
        padding: @codeDialog-cancelBtn-medium-padding;
        align-items: @codeDialog-cancelBtn-medium-horizontal-position;
    }
</style>