<template>
    <div id="message-dialog-wrap">
        <div class="message-dialog">
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
            <div class="input2">
                <lm-input-text
                        ref="input2Ref"
                        refId="input2Ref"
                        v-show="pvt_isShow.input2 === 'input2Ref'"
                        :paraVarPair="pvt_input2.input2Ref.paraVarPair"
                        :para="pvt_input2.input2Ref.para"
                        :attr="pvt_input2.input2Ref.attr">
                </lm-input-text>
            </div>
            <div class="message-dialog-btns">
                <div class="cancel">
                    <lm-button
                            ref="cancelRef"
                            refId="cancelRef"
                            v-show="pvt_isShow.cancel === 'cancelRef'"
                            :paraVarPair="pvt_cancel.cancelRef.paraVarPair"
                            :para="pvt_cancel.cancelRef.para"
                            :attr="pvt_cancel.cancelRef.attr">
                    </lm-button>
                </div>
                <div class="confirm">
                    <lm-button
                            ref="confirmRef"
                            refId="confirmRef"
                            v-show="pvt_isShow.confirm === 'confirmRef'"
                            :paraVarPair="pvt_confirm.confirmRef.paraVarPair"
                            :para="pvt_confirm.confirmRef.para"
                            :attr="pvt_confirm.confirmRef.attr">
                    </lm-button>
                </div>
            </div>
            <div class="close">
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
        props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
        inject: ['sys'],
        components: {},
        data: function () {
            return {
                mac: mac.mac,
                linkValue: '',
                contentValue: '',

                pvt_subModuleMap: {
                    vessel: ['cancel', 'confirm', 'input', 'input2', 'title', 'close'],
                    subModule: ['cancelRef', 'confirmRef', 'inputRef', 'input2Ref', 'titleRef', 'closeRef']
                },

                pvt_isShow: {
                    cancel: null,
                    confirm: null,
                    input: null,
                    title: null,
                    input2: null,
                    close: null,

                },

                // 当前模块输入类型的事务接口名称，工具完成前需要用户手动填写
                pvt_eventPortInput: ['contentEvent'],
            }
        },
        computed: {
            pvt_input: function () {
                return {
                    inputRef: {
                        paraVarPair: {},
                        // para: {
                        //     text: ''
                        // },
                        para: {
                            picture: [{
                                $table: '',
                                $arrField: [],
                                $arrValue: []
                            }],
                            articleValue: ''
                        },
                        attr: {
                            placeholder: this.para.input1
                        }
                    }
                }
            },

            pvt_input2: function () {
                return {
                    input2Ref: {
                        paraVarPair: {},
                        para: {
                            text: ''
                        },
                        attr: {
                            placeholder: this.para.input2
                        }
                    }
                }
            },

            pvt_title: function () {
                return {
                    titleRef: {
                        paraVarPair: {},
                        para: {
                            textData: this.para.titleValue
                        },
                        attr: {
                            fontSize: '24px',
                            textAlign: 'center'
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
                            width: '160px',
                            type: 'info'
                        }
                    }
                }
            },

            pvt_confirm: function () {
                return {
                    cancelRef: {
                        paraVarPair: {},
                        para: {
                            name: ['确定', '']
                        },
                        attr: {
                            width: '160px',
                            type: 'primary'
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
                            type: 'text'
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
                let fnname = 'messageDialog_start';
                let dbFlag;
                let tableName;
                let dbData;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0
                };

                if (successCallBack !== null) {
                    errorCallBack = para;
                    successCallBack = null
                }
                para = errorCallBack;

                let ref = {
                    cancel: 'cancelRef',
                    confirm: 'confirmRef',
                    input: 'inputRef',
                    title: 'titleRef',
                    input2: 'input2Ref',
                    close: 'closeRef',
                };

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                        case 'subStart2':
                            this.contentValue = '';
                            this.linkValue = '';

                            that.sm[ref.cancel].startModule(function () {
                                para.nStep = 'subStart3';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'subStart3':
                            that.sm[ref.confirm].startModule(function () {
                                para.nStep = 'subStart4';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'subStart4':
                            that.sm[ref.input].startModule(function () {
                                para.nStep = 'subStart5';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'subStart5':
                            that.sm[ref.input2].startModule(function () {
                                para.nStep = 'subStart6';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'subStart6':
                            that.sm[ref.title].startModule(function () {
                                para.nStep = 'subStart7';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'subStart7':
                            that.sm[ref.close].startModule(function () {
                                para.nStep = 'showSubModule';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            let refArr = ['cancelRef', 'confirmRef', 'inputRef', 'input2Ref', 'titleRef', 'closeRef'];
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

            linkBlur: function (value) {
                this.linkValue = value;
            },
            contentBlur: function (value) {
                this.contentValue = value;
            },
            cancelClick: function () {
                let that = this;
                that.contentValue = '';
                that.linkValue = '';
                this.hideSelfModule(this.refId, function () {
                }, function () {
                });
            },
            closeClick: function () {
                let that = this;
                that.contentValue = '';
                that.linkValue = '';
                this.hideSelfModule(this.refId, function () {
                }, function () {
                });
            },
            confirmClick: function () {
                let that = this;
                this.ep.contentEvent(this.contentValue, this.linkValue);
                that.contentValue = '';
                that.linkValue = '';
                this.hideSelfModule(this.refId, function () {
                }, function () {
                });
            },

            // 事件：
            inputRef_dataModifyEvent: function (value) {
                this.contentBlur(value);
            },
            input2Ref_dataModifyEvent: function (value) {
                this.linkBlur(value);
            },
            confirmRef_buttonClickEvent: function () {
                this.confirmClick();
            },
            cancelRef_buttonClickEvent: function () {
                this.cancelClick();
            },
            closeRef_buttonClickEvent: function () {
                this.closeClick();
            }
        }
    };
</script>
<style lang="scss">
    #message-dialog-wrap {
        position: fixed;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);

        .message-dialog {
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            width: 400px;
            height: 270px;
            padding: 20px;
            text-align: center;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 2px 2px 2px 2px rgba(0, 0, 0, 0.2);
            box-sizing: border-box;

            .message-dialog-btns {
                overflow: hidden;

                .cancel {
                    float: left;
                }

                .confirm {
                    float: right;
                }
            }

            .title {
                margin-bottom: 20px;
            }

            .input2 {
                margin: 20px 0;
            }

            .close {
                position: absolute;
                right: 10px;
                top: 10px;
            }
        }
    }
</style>