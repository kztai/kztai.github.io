<template>
    <div class="rejectDialog_container">
        <div class="rejectDialog_row rejectDialog_row_rejectDialogRow">
            <div :class="{rejectDialog_col:true,rejectDialog_col_rejectDialogWindow:true,rejectDialog_col_rejectDialogWindow_size_large:attr.size==='large',rejectDialog_col_rejectDialogWindow_size_medium:attr.size==='medium',rejectDialog_col_rejectDialogWindow_size_small:attr.size==='small',rejectDialog_col_rejectDialogWindow_size_min:attr.size==='min',rejectDialog_col_rejectDialogWindow_checked:attr.checked,rejectDialog_col_rejectDialogWindow_disable:attr.disabled}">

                <div class="rejectDialog_row rejectDialog_row_row1">
                    <div :class="{rejectDialog_col:true,rejectDialog_col_title:true,rejectDialog_col_title_size_large:attr.size==='large',rejectDialog_col_title_size_medium:attr.size==='medium',rejectDialog_col_title_size_small:attr.size==='small',rejectDialog_col_title_size_min:attr.size==='min',rejectDialog_col_title_checked:attr.checked,rejectDialog_col_title_disable:attr.disabled}">

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
                <div class="rejectDialog_row rejectDialog_row_row2">
                    <div :class="{rejectDialog_col:true,rejectDialog_col_input:true,rejectDialog_col_input_size_large:attr.size==='large',rejectDialog_col_input_size_medium:attr.size==='medium',rejectDialog_col_input_size_small:attr.size==='small',rejectDialog_col_input_size_min:attr.size==='min',rejectDialog_col_input_checked:attr.checked,rejectDialog_col_input_disable:attr.disabled}">

                        <lm2b-input-text
                                ref="inputRef"
                                refId="inputRef"
                                v-show="pvt_isShow.input === 'inputRef'"
                                :paraVarPair="pvt_input.inputRef.paraVarPair"
                                :para="pvt_input.inputRef.para"
                                :attr="pvt_input.inputRef.attr">
                        </lm2b-input-text>
                    </div>
                </div>
                <div class="rejectDialog_row rejectDialog_row_row3">
                    <div :class="{rejectDialog_col:true,rejectDialog_col_reason1:true,rejectDialog_col_reason1_size_large:attr.size==='large',rejectDialog_col_reason1_size_medium:attr.size==='medium',rejectDialog_col_reason1_size_small:attr.size==='small',rejectDialog_col_reason1_size_min:attr.size==='min',rejectDialog_col_reason1_checked:attr.checked,rejectDialog_col_reason1_disable:attr.disabled}">

                        <lm2b-link-text
                                ref="reason1Ref"
                                refId="reason1Ref"
                                v-show="pvt_isShow.reason1 === 'reason1Ref'"
                                :paraVarPair="pvt_reason1.reason1Ref.paraVarPair"
                                :para="pvt_reason1.reason1Ref.para"
                                :attr="pvt_reason1.reason1Ref.attr">
                        </lm2b-link-text>
                    </div>
                </div>
                <div class="rejectDialog_row rejectDialog_row_row4">
                    <div :class="{rejectDialog_col:true,rejectDialog_col_reason2:true,rejectDialog_col_reason2_size_large:attr.size==='large',rejectDialog_col_reason2_size_medium:attr.size==='medium',rejectDialog_col_reason2_size_small:attr.size==='small',rejectDialog_col_reason2_size_min:attr.size==='min',rejectDialog_col_reason2_checked:attr.checked,rejectDialog_col_reason2_disable:attr.disabled}">

                        <lm2b-link-text
                                ref="reason2Ref"
                                refId="reason2Ref"
                                v-show="pvt_isShow.reason2 === 'reason2Ref'"
                                :paraVarPair="pvt_reason2.reason2Ref.paraVarPair"
                                :para="pvt_reason2.reason2Ref.para"
                                :attr="pvt_reason2.reason2Ref.attr">
                        </lm2b-link-text>
                    </div>
                </div>
                <div class="rejectDialog_row rejectDialog_row_row5">
                    <div :class="{rejectDialog_col:true,rejectDialog_col_reason3:true,rejectDialog_col_reason3_size_large:attr.size==='large',rejectDialog_col_reason3_size_medium:attr.size==='medium',rejectDialog_col_reason3_size_small:attr.size==='small',rejectDialog_col_reason3_size_min:attr.size==='min',rejectDialog_col_reason3_checked:attr.checked,rejectDialog_col_reason3_disable:attr.disabled}">

                        <lm2b-link-text
                                ref="reason3Ref"
                                refId="reason3Ref"
                                v-show="pvt_isShow.reason3 === 'reason3Ref'"
                                :paraVarPair="pvt_reason3.reason3Ref.paraVarPair"
                                :para="pvt_reason3.reason3Ref.para"
                                :attr="pvt_reason3.reason3Ref.attr">
                        </lm2b-link-text>
                    </div>
                </div>
                <div class="rejectDialog_row rejectDialog_row_row6">
                    <div :class="{rejectDialog_col:true,rejectDialog_col_reason4:true,rejectDialog_col_reason4_size_large:attr.size==='large',rejectDialog_col_reason4_size_medium:attr.size==='medium',rejectDialog_col_reason4_size_small:attr.size==='small',rejectDialog_col_reason4_size_min:attr.size==='min',rejectDialog_col_reason4_checked:attr.checked,rejectDialog_col_reason4_disable:attr.disabled}">

                        <lm2b-link-text
                                ref="reason4Ref"
                                refId="reason4Ref"
                                v-show="pvt_isShow.reason4 === 'reason4Ref'"
                                :paraVarPair="pvt_reason4.reason4Ref.paraVarPair"
                                :para="pvt_reason4.reason4Ref.para"
                                :attr="pvt_reason4.reason4Ref.attr">
                        </lm2b-link-text>
                    </div>
                </div>
                <div class="rejectDialog_row rejectDialog_row_row7">
                    <div :class="{rejectDialog_col:true,rejectDialog_col_cancel:true,rejectDialog_col_cancel_size_large:attr.size==='large',rejectDialog_col_cancel_size_medium:attr.size==='medium',rejectDialog_col_cancel_size_small:attr.size==='small',rejectDialog_col_cancel_size_min:attr.size==='min',rejectDialog_col_cancel_checked:attr.checked,rejectDialog_col_cancel_disable:attr.disabled}">

                        <lm2b-button
                                ref="cancelRef"
                                refId="cancelRef"
                                v-show="pvt_isShow.cancel === 'cancelRef'"
                                :paraVarPair="pvt_cancel.cancelRef.paraVarPair"
                                :para="pvt_cancel.cancelRef.para"
                                :attr="pvt_cancel.cancelRef.attr">
                        </lm2b-button>
                    </div>
                    <div :class="{rejectDialog_col:true,rejectDialog_col_confirm:true,rejectDialog_col_confirm_size_large:attr.size==='large',rejectDialog_col_confirm_size_medium:attr.size==='medium',rejectDialog_col_confirm_size_small:attr.size==='small',rejectDialog_col_confirm_size_min:attr.size==='min',rejectDialog_col_confirm_checked:attr.checked,rejectDialog_col_confirm_disable:attr.disabled}">

                        <lm2b-button
                                ref="confirmRef"
                                refId="confirmRef"
                                v-show="pvt_isShow.confirm === 'confirmRef'"
                                :paraVarPair="pvt_confirm.confirmRef.paraVarPair"
                                :para="pvt_confirm.confirmRef.para"
                                :attr="pvt_confirm.confirmRef.attr">
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
                    vessel: ['title', 'input', 'reason1', 'reason2', 'reason3', 'reason4', 'cancel', 'confirm'],
                    subModule: ['titleRef', 'inputRef', 'reason1Ref', 'reason2Ref', 'reason3Ref', 'reason4Ref', 'cancelRef', 'confirmRef'],
                },
                pvt_isShow: {
                    title: null,
                    input: null,
                    reason1: null,
                    reason2: null,
                    reason3: null,
                    reason4: null,
                    cancel: null,
                    confirm: null,
                },
                pvt_eventPortInput: ['confirmEvent', 'cancelEvent'],

                mac: mac.mac,

                inputValue: '',
            };
        },
        watch: {},
        computed: {
            pvt_title: function () {
                return {
                    titleRef: {
                        paraVarPair: {},
                        para: {
                            textData: '审批不通过的原因',
                        },
                        attr: {
                            textAlign: 'center',
                            fontWeight: true,
                            color: '#333',
                            fontSize: '20px',
                            background: '#f4f4f4',
                        },
                    },
                };
            },
            pvt_input: function () {
                return {
                    inputRef: {
                        paraVarPair: {
                            text: 'inputValue',
                        },
                        para: {
                            text: this.inputValue,
                        },
                        attr: {
                            placeholder: '请输入详细原因，可进行选项选择',
                            isPlaceholder: false,
                        },
                    },
                };
            },
            pvt_reason1: function () {
                return {
                    reason1Ref: {
                        paraVarPair: {},
                        para: {
                            textData: '活动内容涉及政治敏感类话题',
                        },
                        attr: {
                            isClick: true,
                            color: '#666',
                            fontSize: '14px',
                            background: '#f4f4f4',
                            icon: 'van-icon-star-o',
                        },
                    },
                };
            },
            pvt_reason2: function () {
                return {
                    reason2Ref: {
                        paraVarPair: {},
                        para: {
                            textData: '活动内容存在侮辱性词汇',
                        },
                        attr: {
                            isClick: true,
                            color: '#666',
                            fontSize: '14px',
                            background: '#f4f4f4',
                            icon: 'van-icon-star-o',
                        },
                    },
                };
            },
            pvt_reason3: function () {
                return {
                    reason3Ref: {
                        paraVarPair: {},
                        para: {
                            textData: '活动预算不符合预期',
                        },
                        attr: {
                            isClick: true,
                            color: '#666',
                            fontSize: '14px',
                            background: '#f4f4f4',
                            icon: 'van-icon-star-o',
                        },
                    },
                };
            },
            pvt_reason4: function () {
                return {
                    reason4Ref: {
                        paraVarPair: {},
                        para: {
                            textData: '活动内容不符合公司价值观',
                        },
                        attr: {
                            isClick: true,
                            color: '#666',
                            fontSize: '14px',
                            background: '#f4f4f4',
                            icon: 'van-icon-star-o',
                        },
                    },
                };
            },
            pvt_cancel: function () {
                return {
                    cancelRef: {
                        paraVarPair: {},
                        para: {
                            name: ['取消', ''],
                        },
                        attr: {
                            type: 'text',
                            long: true,
                        },
                    },
                };
            },
            pvt_confirm: function () {
                return {
                    confirmRef: {
                        paraVarPair: {},
                        para: {
                            name: ['确定', ''],
                        },
                        attr: {
                            type: 'primary',
                            long: true,
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
                let fnname = 'rejectDialog_start';
                let dbFlag;
                let dbData;
                let tableName;
                let condition;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0,
                    refArr: ['titleRef', 'inputRef', 'reason1Ref', 'reason2Ref', 'reason3Ref', 'reason4Ref', 'cancelRef', 'confirmRef']
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
                        case 'start_sub':
                            if (para.i >= para.refArr.length) {
                                para.i = 0;
                                para.nStep = 'showSubModule';
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
                        case 'showSubModule':
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
            getValue: function (value) {
                this.inputValue = value;
            },
            reason1Click: function () {
                let that = this;
                this.inputValue = '活动内容涉及政治敏感类话题';
                that.forceUpdateData(function () {
                    that.sm.inputRef.startModule(function () {
                    }, function () {
                    })
                });
            },
            reason2Click: function () {
                let that = this;
                this.inputValue = '活动内容存在侮辱性词汇';
                that.forceUpdateData(function () {
                    that.sm.inputRef.startModule(function () {
                    }, function () {
                    })
                });
            },
            reason3Click: function () {
                let that = this;
                this.inputValue = '活动预算不符合预期';
                that.forceUpdateData(function () {
                    that.sm.inputRef.startModule(function () {
                    }, function () {
                    })
                });
            },
            reason4Click: function () {
                let that = this;
                this.inputValue = '活动内容不符合公司价值观';
                that.forceUpdateData(function () {
                    that.sm.inputRef.startModule(function () {
                    }, function () {
                    })
                });
            },
            cancelClick: function () {
                this.ep.cancelEvent();
                this.hideSelfModule(this.refId, function () {
                }, function () {
                });
            },
            confirmClick: function () {
                if(this.inputValue === '') {
                    this.$notify({type: 'warning', message: '审批拒绝原因不能为空！'});
                    return
                }
                this.ep.confirmEvent(this.inputValue, function () {
                }, function () {
                });
                this.hideSelfModule(this.refId, function () {
                }, function () {
                });
            },


            inputRef_dataModifyEvent: function (value) {
                this.getValue(value);
            },
            reason1Ref_textClickEvent: function () {
                this.reason1Click();
            },
            reason2Ref_textClickEvent: function () {
                this.reason2Click();
            },
            reason3Ref_textClickEvent: function () {
                this.reason3Click();
            },
            reason4Ref_textClickEvent: function () {
                this.reason4Click();
            },
            cancelRef_buttonClickEvent: function () {
                this.cancelClick();
            },
            confirmRef_buttonClickEvent: function () {
                this.confirmClick();
            },
        },
    };
</script>
<style lang="less" scoped>
    @import "../../../../../assets/var_kzt"; /*新增*/
    .rejectDialog_container {
    }

    .rejectDialog_row {
        display: flex;
        flex: 1;
    }

    .rejectDialog_col {
        display: flex;
        flex-direction: column;
    }

    .rejectDialog_col_rejectDialogWindow_size_medium {
        width: @rejectDialog-rejectDialogWindow-medium-width;
    }

    .rejectDialog_col_rejectDialogWindow {
        background-color: mix(@rejectDialog-rejectDialogWindow-background-color, #fff, @rejectDialog-rejectDialogWindow-background-color-opacity);
        border-radius: @rejectDialog-rejectDialogWindow-border-radius;
    }

    .rejectDialog_col_title_size_medium {
        width: @rejectDialog-title-medium-width;
        padding: @rejectDialog-title-medium-padding;
        align-items: @rejectDialog-title-medium-horizontal-position;
    }

    .rejectDialog_col_input_size_medium {
        width: @rejectDialog-input-medium-width;
        padding: @rejectDialog-input-medium-padding;
    }

    .rejectDialog_col_reason1_size_medium {
        width: @rejectDialog-reason1-medium-width;
        padding: @rejectDialog-reason1-medium-padding;
    }

    .rejectDialog_col_reason2_size_medium {
        width: @rejectDialog-reason2-medium-width;
        padding: @rejectDialog-reason2-medium-padding;
    }

    .rejectDialog_col_reason3_size_medium {
        width: @rejectDialog-reason3-medium-width;
        padding: @rejectDialog-reason3-medium-padding;
    }

    .rejectDialog_col_reason4_size_medium {
        width: @rejectDialog-reason4-medium-width;
        padding: @rejectDialog-reason4-medium-padding;
    }

    .rejectDialog_col_cancel_size_medium {
        width: @rejectDialog-cancel-medium-width;
        align-items: @rejectDialog-cancel-medium-horizontal-position;
        justify-content: @rejectDialog-cancel-medium-vertical-position;
    }

    .rejectDialog_col_cancel {
        background-color: mix(@rejectDialog-cancel-background-color, #fff, @rejectDialog-cancel-background-color-opacity);
    }

    .rejectDialog_col_confirm_size_medium {
        width: @rejectDialog-confirm-medium-width;
        align-items: @rejectDialog-confirm-medium-horizontal-position;
        justify-content: @rejectDialog-confirm-medium-vertical-position;
    }

</style>




<!--<template>
    <div v-show="pvt_isWinShow.kzt_module1Window"
         :class="{kzt_module1_container:true,kzt_module1_col:true,kzt_module1_col_kzt_module1Window:true,kzt_module1_col_kzt_module1Window_size_large:attr.size==='large',kzt_module1_col_kzt_module1Window_size_medium:attr.size==='medium',kzt_module1_col_kzt_module1Window_size_small:attr.size==='small',kzt_module1_col_kzt_module1Window_size_min:attr.size==='min',kzt_module1_col_kzt_module1Window_checked:attr.checked,kzt_module1_col_kzt_module1Window_disable:attr.disabled}" >

        <div class="kzt_module1_row kzt_module1_row_row1">
            <div v-show="pvt_isWinShow.title"
                 :class="{kzt_module1_col:true,kzt_module1_col_title:true,kzt_module1_col_title_size_large:attr.size==='large',kzt_module1_col_title_size_medium:attr.size==='medium',kzt_module1_col_title_size_small:attr.size==='small',kzt_module1_col_title_size_min:attr.size==='min',kzt_module1_col_title_checked:attr.checked,kzt_module1_col_title_disable:attr.disabled}" >

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
        <div class="kzt_module1_row kzt_module1_row_row2">
            <div v-show="pvt_isWinShow.desc"
                 :class="{kzt_module1_col:true,kzt_module1_col_desc:true,kzt_module1_col_desc_size_large:attr.size==='large',kzt_module1_col_desc_size_medium:attr.size==='medium',kzt_module1_col_desc_size_small:attr.size==='small',kzt_module1_col_desc_size_min:attr.size==='min',kzt_module1_col_desc_checked:attr.checked,kzt_module1_col_desc_disable:attr.disabled}" >

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
        <div class="kzt_module1_row kzt_module1_row_row3">
            <div v-show="pvt_isWinShow.input"
                 :class="{kzt_module1_col:true,kzt_module1_col_input:true,kzt_module1_col_input_size_large:attr.size==='large',kzt_module1_col_input_size_medium:attr.size==='medium',kzt_module1_col_input_size_small:attr.size==='small',kzt_module1_col_input_size_min:attr.size==='min',kzt_module1_col_input_checked:attr.checked,kzt_module1_col_input_disable:attr.disabled}" >

                <lm2b-input-text
                        ref="inputRef"
                        refId="inputRef"
                        v-show="pvt_isShow.input === 'inputRef'"
                        :paraVarPair="pvt_input.inputRef.paraVarPair"
                        :para="pvt_input.inputRef.para"
                        :attr="pvt_input.inputRef.attr">
                </lm2b-input-text>
            </div>
        </div>
        <div class="kzt_module1_row kzt_module1_row_row4">
            <div v-show="pvt_isWinShow.cancel"
                 :class="{kzt_module1_col:true,kzt_module1_col_cancel:true,kzt_module1_col_cancel_size_large:attr.size==='large',kzt_module1_col_cancel_size_medium:attr.size==='medium',kzt_module1_col_cancel_size_small:attr.size==='small',kzt_module1_col_cancel_size_min:attr.size==='min',kzt_module1_col_cancel_checked:attr.checked,kzt_module1_col_cancel_disable:attr.disabled}" >

                <lm2b-button
                        ref="cancelRef"
                        refId="cancelRef"
                        v-show="pvt_isShow.cancel === 'cancelRef'"
                        :paraVarPair="pvt_cancel.cancelRef.paraVarPair"
                        :para="pvt_cancel.cancelRef.para"
                        :attr="pvt_cancel.cancelRef.attr">
                </lm2b-button>
            </div>
            <div v-show="pvt_isWinShow.confirm"
                 :class="{kzt_module1_col:true,kzt_module1_col_confirm:true,kzt_module1_col_confirm_size_large:attr.size==='large',kzt_module1_col_confirm_size_medium:attr.size==='medium',kzt_module1_col_confirm_size_small:attr.size==='small',kzt_module1_col_confirm_size_min:attr.size==='min',kzt_module1_col_confirm_checked:attr.checked,kzt_module1_col_confirm_disable:attr.disabled}" >

                <lm2b-button
                        ref="confirmRef"
                        refId="confirmRef"
                        v-show="pvt_isShow.confirm === 'confirmRef'"
                        :paraVarPair="pvt_confirm.confirmRef.paraVarPair"
                        :para="pvt_confirm.confirmRef.para"
                        :attr="pvt_confirm.confirmRef.attr">
                </lm2b-button>
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
        props: ['refId','para','attr','number'],
        data: function() {
            return {
                pvt_subModuleMap: {
                    vessel:['title','desc','input','cancel','confirm'],
                    subModule:['titleRef','descRef','inputRef','cancelRef','confirmRef'],
                },
                pvt_isShow: {
                    title:null,
                    desc:null,
                    input:null,
                    cancel:null,
                    confirm:null,
                },
                pvt_isWinShow: {
                    kzt_module1Window:true,
                    title:true,
                    desc:true,
                    input:true,
                    cancel:true,
                    confirm:true,
                },
                pvt_eventPortInput: ['confirmEvent'],

            };
        },
        watch: {
        },
        computed:{
            pvt_title:function(){
                return {
                    titleRef:{
                        paraVarPair:{
                        },
                        para:{
                            textData:'title1',
                        },
                        attr:{
                            fontWeight:true,
                            fontSize:'18px',
                        },
                    },
                };
            },
            pvt_desc:function(){
                return {
                    descRef:{
                        paraVarPair:{
                        },
                        para:{
                            textData:'描述描述描述描述描述描述描述描述描述描述描述描述描述',
                        },
                        attr:{
                            color:'#999',
                            fontSize:'14px',
                        },
                    },
                };
            },
            pvt_input:function(){
                return {
                    inputRef:{
                        paraVarPair:{
                        },
                        para:{
                            text:'',
                        },
                        attr:{
                            placeholder:'请输入...',
                            isPlaceholder:false,
                        },
                    },
                };
            },
            pvt_cancel:function(){
                return {
                    cancelRef:{
                        paraVarPair:{
                        },
                        para:{
                            name:['取消',''],
                        },
                        attr:{
                            type:'text',
                            long:true,
                        },
                    },
                };
            },
            pvt_confirm:function(){
                return {
                    confirmRef:{
                        paraVarPair:{
                        },
                        para:{
                            name:['确定',''],
                        },
                        attr:{
                            type:'primary',
                            long:true,
                        },
                    },
                };
            },
        },
        created: function () {
            Object.assign(this, libSys,libUpload);
        },
        mounted: function () {
            this.pvt_initSysData();
        },
        methods: {
            startModule:function(successCallBack,errorCallBack){
                let that = this;
                let fnname = 'budgetItem_start';
                let dbFlag;
                let dbData;
                let tableName;
                let condition;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0,
                    refArr: ['titleRef','descRef','inputRef','cancelRef','confirmRef']
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
                        case 'start_sub':
                            if (para.i >= para.refArr.length) {
                                para.i = 0;
                                para.nStep = 'showSubModule';
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
                        case 'showSubModule':
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
            cancelClick:function(){
                this.hideSelfModule(this.refId, function () {
                }, function () {
                });
            },
            confirmClick:function(){
                this.hideSelfModule(this.refId, function () {
                }, function () {
                });
            },
            getInputValue:function(value){},
            inputRef_dataModifyEvent:function(value){
                this.getInputValue(value);
            },
            cancelRef_buttonClickEvent:function(){
                this.cancelClick();
            },
            confirmRef_buttonClickEvent:function(){
                this.confirmClick();
            },
        },
    };
</script>
<style lang="less" scoped>
    .kzt_module1_container {
        width:100%;
        height:100%;
    }
    .kzt_module1_mask {
        display:flex;
        position:fixed;
        left:0;
        top:0;
        width:100vw;
        height:100vh;
        background-color:rgba(0,0,0,.4);
    }
    .kzt_module1_dialog {
        position:absolute;
        left:0;
        top:0;
    }
    .kzt_module1_overlay {
        position:absolute;
        left:0;
        top:0;
    }
    .kzt_module1_row {
        display:flex;
    }
    .kzt_module1_col {
        position:relative;
        display:flex;
        flex-direction:column;
        flex-wrap:nowrap;
    }
    .kzt_module1_col_kzt_module1Window_size_medium {
        width:@kzt_module1-kzt_module1Window-medium-width;
    }
    .kzt_module1_col_kzt_module1Window {
        background-color:mix(@kzt_module1-kzt_module1Window-background-color,#fff,@kzt_module1-kzt_module1Window-background-color-opacity);
        border-radius:@kzt_module1-kzt_module1Window-border-radius;
    }
    .kzt_module1_col_title_size_medium {
        width:@kzt_module1-title-medium-width;
        align-items:@kzt_module1-title-medium-horizontal-position;
        padding:@kzt_module1-title-medium-padding;
    }
    .kzt_module1_col_desc_size_medium {
        width:@kzt_module1-desc-medium-width;
        align-items:@kzt_module1-desc-medium-horizontal-position;
        padding:@kzt_module1-desc-medium-padding;
    }
    .kzt_module1_col_input_size_medium {
        width:@kzt_module1-input-medium-width;
        padding:@kzt_module1-input-medium-padding;
    }
    .kzt_module1_col_cancel_size_medium {
        width:@kzt_module1-cancel-medium-width;
    }
    .kzt_module1_col_cancel {
        border-style:@kzt_module1-cancel-border-style;
        border-width:@kzt_module1-cancel-border-width;
        border-color:mix(@kzt_module1-cancel-border-color,#fff,@kzt_module1-cancel-hover-border-color-opacity);
    }
    .kzt_module1_col_confirm_size_medium {
        width:@kzt_module1-confirm-medium-width;
    }
    .kzt_module1_col_confirm {
        border-style:@kzt_module1-confirm-border-style;
        border-width:@kzt_module1-confirm-border-width;
        border-color:mix(@kzt_module1-confirm-border-color,#fff,@kzt_module1-confirm-hover-border-color-opacity);
    }

    // &#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;&#45;
    // 下面的风格变量，请复制到正确位置后删除！
    @kzt_module1-kzt_module1Window-medium-width:100%;
    @kzt_module1-kzt_module1Window-background-color:#fff;
    @kzt_module1-kzt_module1Window-background-color-opacity:100;
    @kzt_module1-kzt_module1Window-border-radius:6px;
    @kzt_module1-title-medium-width:100%;
    @kzt_module1-title-medium-horizontal-position:center;
    @kzt_module1-title-medium-padding:16px;
    @kzt_module1-desc-medium-width:100%;
    @kzt_module1-desc-medium-horizontal-position:center;
    @kzt_module1-desc-medium-padding:0 16px 16px 16px;
    @kzt_module1-input-medium-width:100%;
    @kzt_module1-input-medium-padding:0 16px 16px 16px;
    @kzt_module1-cancel-medium-width:50%;
    @kzt_module1-cancel-border-style:solid;
    @kzt_module1-cancel-border-width:1px 0 0 0;
    @kzt_module1-cancel-border-color:#ddd;
    @kzt_module1-cancel-hover-border-color-opacity:100;
    @kzt_module1-confirm-medium-width:50%;
    @kzt_module1-confirm-border-style:solid;
    @kzt_module1-confirm-border-width:1px 0 0 0;
    @kzt_module1-confirm-border-color:#eee;
    @kzt_module1-confirm-hover-border-color-opacity:100;
</style>-->