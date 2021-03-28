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
        props: ['refId','para','attr','number'],
        data: function() {
            return {
                inputValue: '',

                pvt_subModuleMap: {
                    vessel:['title','input','cancel','confirm'],
                    subModule:['titleRef','inputRef','cancelRef','confirmRef'],
                },
                pvt_isShow: {
                    title:null,
                    input:null,
                    cancel:null,
                    confirm:null,
                },
                pvt_eventPortInput: ['rejectReasonEvent', 'cancelEvent'],

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
                            textData:'审批不通过的原因',
                        },
                        attr:{
                            textAlign:'center',
                            fontWeight:true,
                            color:'#333',
                            fontSize:'16px',
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
                            placeholder:'请填写详细原因',
                            // type:'textarea',
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
                            width:'100px',
                            height:'40px',
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
                            width:'100%',
                            height:'40px',
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

                let refArr = ['titleRef','inputRef','cancelRef','confirmRef'];

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                            this.inputValue = '';
                            that.forceUpdateData(function () {
                                para.nStep = 'start_sub';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            });
                            break;
                        case 'start_sub':
                            if(para.i >= refArr.length) {
                                para.i = 0;
                                para.nStep = 'showSubModule';
                                dbFlag++;
                                break;
                            }
                            that.sm[refArr[para.i]].startModule(function () {
                                para.i++;
                                para.nStep = 'start_sub';
                                if (++dbFlag === 2) {
                                    that.startModule(successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
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
            getInputValue:function(value){
                this.inputValue = value;
            },
            dialogConfirm:function(){
                if(this.inputValue === '') {
                    this.$notify({type: 'warning', message: '拒绝原因不能为空！'});
                    return
                }
                this.ep.rejectReasonEvent(this.inputValue, function () {
                }, function () {
                });
                this.hideSelfModule(this.refId, function () {
                }, function () {
                });
            },
            dialogCancel:function(){
                this.ep.cancelEvent();
                this.hideSelfModule(this.refId, function () {
                }, function () {
                });
            },
            cancelRef_buttonClickEvent:function(){
                this.dialogCancel();
            },
            confirmRef_buttonClickEvent:function(){
                this.dialogConfirm();
            },
            inputRef_dataModifyEvent:function(value){
                this.getInputValue(value);
            },
        },
    };
</script>
<style lang="less" scoped>
    @import "../../../../assets/var_kzt"; /*新增*/
    .rejectDialog_container {
    }
    .rejectDialog_row {
        display:flex;
        flex:1;
    }
    .rejectDialog_col {
        display:flex;
        flex-direction:column;
    }
    .rejectDialog_col_rejectDialogWindow_size_medium {
        width:@rejectDialog-rejectDialogWindow-medium-width;
    }
    .rejectDialog_col_rejectDialogWindow {
        background-color:mix(@rejectDialog-rejectDialogWindow-background-color,#fff,@rejectDialog-rejectDialogWindow-background-color-opacity);
        border-radius:@rejectDialog-rejectDialogWindow-border-radius;
    }
    .rejectDialog_col_title_size_medium {
        width:@rejectDialog-title-medium-width;
        align-items:@rejectDialog-title-medium-horizontal-position;
        margin: @rejectDialog-title-medium-margin;
        background-color:mix(@rejectDialog-title-medium-background-color,#fff,@rejectDialog-title-medium-background-color-opacity);
        .link-text {
            background-color: #f4f4f4 !important;
        }
    }
    .rejectDialog_col_input_size_medium {
        width:@rejectDialog-input-medium-width;
        margin:@rejectDialog-input-medium-margin;
    }
    .rejectDialog_col_cancel_size_medium {
        width:@rejectDialog-cancel-medium-width;
        height:@rejectDialog-cancel-medium-height;
        align-items:@rejectDialog-cancel-medium-horizontal-position;
    }
    .rejectDialog_col_cancel {
        background-color:mix(@rejectDialog-cancel-background-color,#fff,@rejectDialog-cancel-background-color-opacity);
    }
    .rejectDialog_col_confirm_size_medium {
        width:@rejectDialog-confirm-medium-width;
        align-items:@rejectDialog-confirm-medium-horizontal-position;
        .button-component {
            width: 100%;
            height: 100%;
        }
    }
</style>