<template>
    <div id="message-dialog-wrap">
        <div class="message-dialog">
            <div class="title">
                <textC
                        :para="pvt_title_para[pvt_currentRef.title].para"
                        :attr="pvt_title_attr[pvt_currentRef.title].attr"
                        :refId="pvt_currentRef.title"
                        :ref="pvt_currentRef.title">
                </textC>
            </div>
            <div class="input">
                <lm-input-text
                        :para="pvt_input_para[pvt_currentRef.input].para"
                        :attr="pvt_input_attr[pvt_currentRef.input].attr"
                        :refId="pvt_currentRef.input"
                        :ref="pvt_currentRef.input">
                </lm-input-text>
            </div>
            <div class="input2">
                <lm-input-text
                        :para="pvt_input2_para[pvt_currentRef.input2].para"
                        :attr="pvt_input2_attr[pvt_currentRef.input2].attr"
                        :refId="pvt_currentRef.input2"
                        :ref="pvt_currentRef.input2">
                </lm-input-text>
            </div>
            <div class="message-dialog-btns">
                <div class="cancel">
                    <buttonC
                            :para="pvt_cancel_para[pvt_currentRef.cancel].para"
                            :attr="pvt_cancel_attr[pvt_currentRef.cancel].attr"
                            :refId="pvt_currentRef.cancel"
                            :ref="pvt_currentRef.cancel">
                    </buttonC>
                </div>
                <div class="confirm">
                    <buttonC
                            :para="pvt_confirm_para[pvt_currentRef.confirm].para"
                            :attr="pvt_confirm_attr[pvt_currentRef.confirm].attr"
                            :refId="pvt_currentRef.confirm"
                            :ref="pvt_currentRef.confirm">
                    </buttonC>
                </div>
            </div>
            <div class="close">
                <buttonC
                        :para="pvt_close_para[pvt_currentRef.close].para"
                        :attr="pvt_close_attr[pvt_currentRef.close].attr"
                        :refId="pvt_currentRef.close"
                        :ref="pvt_currentRef.close">
                </buttonC>
            </div>
        </div>
    </div>
</template>
<script>
    import textC from '@/components/baseComponent/textComponent.vue';
    import inputC from '@/components/baseComponent/inputComponent.vue';
    import buttonC from '@/components/baseComponent/buttonComponent.vue';

    export default {
        props: ['refId', 'para', 'attr'],
        inject: ['sys'],
        components: {
            textC,
            inputC,
            buttonC,
        },
        data: function () {
            return {
                mac: mac.mac,
                linkValue: '',
                contentValue: '',

                pvt_isSubModuleStarted: false,
                pvt_needForceUpdate: false,
                pvt_isInitComplete: false,

                pvt_vesselRef: {
                    vesselId: ['cancel', 'confirm', 'input', 'input2', 'title', 'close'],
                    ref: ['cancelRef', 'confirmRef', 'inputRef', 'input2Ref', 'titleRef', 'closeRef']
                },

                pvt_currentRef: {
                    cancel: 'cancelRef',
                    confirm: 'confirmRef',
                    input: 'inputRef',
                    title: 'titleRef',
                    input2: 'input2Ref',
                    close: 'closeRef',
                },

                pvt_isShow: {
                    cancel: true,
                    confirm: true,
                    input: true,
                    title: true,
                    input2: true,
                    close: true,

                },
                pvt_isMounted: {
                    cancelRef: false,
                    confirmRef: false,
                    inputRef: false,
                    titleRef: false,
                    input2Ref: false,
                    closeRef: false,
                },
                pvt_subModuleMethodQueue: {},

            }
        },
        computed: {
            pvt_input_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.input,
                    isShow: this.pvt_isShow.input,
                    inputRef: {
                        componentName: 'inputC',
                    },
                }
            },
            pvt_input_para: function () {
                return {
                    inputRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_input_comp.isShow,
                            $isMounted: this.pvt_isMounted.inputRef,
                            text: {$table: '', $value: [this.contentValue]},
                        },
                    },
                };
            },
            pvt_input_attr: function () {
                return {
                    inputRef: {
                        attr: {
                            placeholder: this.para.input1
                        },
                    },
                };
            },

            pvt_input2_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.input2,
                    isShow: this.pvt_isShow.input2,
                    input2Ref: {
                        componentName: 'inputC',
                    },
                }
            },
            pvt_input2_para: function () {
                return {
                    input2Ref: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_input2_comp.isShow,
                            $isMounted: this.pvt_isMounted.input2Ref,
                            text: {$table: '', $value: [this.linkValue]},
                        },
                    },
                };
            },
            pvt_input2_attr: function () {
                return {
                    input2Ref: {
                        attr: {
                            placeholder: this.para.input2
                        },
                    },
                };
            },

            pvt_title_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.title,
                    isShow: this.pvt_isShow.title,
                    titleRef: {
                        componentName: 'textC',
                    },
                }
            },
            pvt_title_para: function () {
                return {
                    titleRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_title_comp.isShow,
                            $isMounted: this.pvt_isMounted.titleRef,
                            textData: {$table: '', $field: [], $value: [this.para.titleValue]},
                        },
                    },
                };
            },
            pvt_title_attr: function () {
                return {
                    titleRef: {
                        attr: {
                            fontSize: '24px',
                            textAlign: 'center'
                        },
                    },
                };
            },

            pvt_cancel_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.cancel,
                    isShow: this.pvt_isShow.cancel,
                    cancelRef: {
                        componentName: 'buttonC',
                    },
                }
            },
            pvt_cancel_para: function () {
                return {
                    cancelRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_cancel_comp.isShow,
                            $isMounted: this.pvt_isMounted.cancelRef,
                            name: {$table: '', $field: [], $value: ['取消']},
                        },
                    },
                };
            },
            pvt_cancel_attr: function () {
                return {
                    cancelRef: {
                        attr: {
                            width: '160px',
                            type: 'info'
                        },
                    },
                };
            },

            pvt_confirm_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.confirm,
                    isShow: this.pvt_isShow.confirm,
                    confirmRef: {
                        componentName: 'buttonC',
                    },
                }
            },
            pvt_confirm_para: function () {
                return {
                    confirmRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_confirm_comp.isShow,
                            $isMounted: this.pvt_isMounted.confirmRef,
                            name: {$table: '', $field: [], $value: ['确定']},
                        },
                    },
                };
            },
            pvt_confirm_attr: function () {
                return {
                    confirmRef: {
                        attr: {
                            width: '160px',
                            type: 'primary'
                        },
                    },
                };
            },

            pvt_close_comp: function () {
                return {
                    currentRef: this.pvt_currentRef.close,
                    isShow: this.pvt_isShow.close,
                    closeRef: {
                        componentName: 'buttonC',
                    },
                }
            },
            pvt_close_para: function () {
                return {
                    closeRef: {
                        para: {
                            $api: this.pvt_isSubModuleStarted,
                            $isShow: this.pvt_close_comp.isShow,
                            $isMounted: this.pvt_isMounted.closeRef,
                            icon: {$table: '', $field: [], $value: ['el-icon-close']},
                        },
                    },
                };
            },
            pvt_close_attr: function () {
                return {
                    closeRef: {
                        attr: {
                            // size: 'mini',
                            type: 'text'
                        },
                    },
                };
            },
        },
        watch: {
            // 监听模块参数
            para: {
                handler: function (val, oldVal) {
                    var $this = this;
                    Object.assign($this, $this.sys.lib);

                    if (val.$api && val.$isShow && val.$isMounted
                        && !$this.$lodash.isEqual(val, oldVal)) {

                        // 变量赋值完成准备传入子模块标志
                        $this.pvt_isSubModuleStarted = true;
                        // 调用模块固定方法，此方法由用户实现
                        $this.startModule(function () {
                            setTimeout(function () {
                                if ($this.$parent.subModuleActivatedEvent) {
                                    $this.$parent.subModuleActivatedEvent($this.refId);
                                }
                            }, 0);
                        }, function () {

                        });
                    } else if (oldVal) {
                        setTimeout(function () {
                            if ($this.$parent.subModuleActivatedEvent) {
                                $this.$parent.subModuleActivatedEvent($this.refId);
                            }
                        }, 0);
                    }
                },
                deep: true,
                immediate: true
            },
        },
        mounted: function () {
            if (this.$parent.pvt_isMounted) {
                this.$parent.pvt_isMounted[this.refId] = true;
            }
        },
        methods: {
            startModule: function (successCallBack, errorCallBack) {
                this.contentValue = '';
                this.linkValue = '';
                successCallBack();
            },

            linkBlur: function(value) {
                this.linkValue = value;
            },
            contentBlur: function(value) {
                this.contentValue = value;
            },
            cancelClick: function() {
                let that = this;
                that.contentValue = '';
                that.linkValue = '';
                this.hideSelfDialog(this.refId, function () {
                }, function (error) {
                    console.error(error);
                });
            },
            closeClick: function() {
                let that = this;
                that.contentValue = '';
                that.linkValue = '';
                this.hideSelfDialog(this.refId, function () {
                }, function (error) {
                    console.error(error);
                });
            },
            confirmClick: function() {
                let that = this;
                this.callModuleEventPort('contentEvent', [this.contentValue, this.linkValue]);
                that.contentValue = '';
                that.linkValue = '';
                this.hideSelfDialog(this.refId, function () {
                }, function (error) {
                    console.error(error);
                });
            },

            // 事件：
            inputRef_dataModifyEvent: function (ref, value) {
                this.contentBlur(value);
            },
            input2Ref_dataModifyEvent: function (ref, value) {
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
        background-color: rgba(0,0,0,0.4);
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
            box-shadow: 2px 2px 2px 2px rgba(0,0,0,0.2);
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