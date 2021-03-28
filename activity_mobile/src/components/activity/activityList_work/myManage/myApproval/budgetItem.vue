<template>
    <div class="budgetItem_container">
        <div class="budgetItem_row budgetItem_row_budgetItemRow">
            <div :class="{budgetItem_col:true,budgetItem_col_budgetItemWindow:true,budgetItem_col_budgetItemWindow_size_large:attr.size==='large',budgetItem_col_budgetItemWindow_size_medium:attr.size==='medium',budgetItem_col_budgetItemWindow_size_small:attr.size==='small',budgetItem_col_budgetItemWindow_size_min:attr.size==='min',budgetItem_col_budgetItemWindow_checked:attr.checked,budgetItem_col_budgetItemWindow_disable:attr.disabled}">

                <div class="budgetItem_row budgetItem_row_row1">
                    <div :class="{budgetItem_col:true,budgetItem_col_name:true,budgetItem_col_name_size_large:attr.size==='large',budgetItem_col_name_size_medium:attr.size==='medium',budgetItem_col_name_size_small:attr.size==='small',budgetItem_col_name_size_min:attr.size==='min',budgetItem_col_name_checked:attr.checked,budgetItem_col_name_disable:attr.disabled}">

                        <lm2b-link-text
                                ref="nameRef"
                                refId="nameRef"
                                v-show="pvt_isShow.name === 'nameRef'"
                                :paraVarPair="pvt_name.nameRef.paraVarPair"
                                :para="pvt_name.nameRef.para"
                                :attr="pvt_name.nameRef.attr">
                        </lm2b-link-text>
                    </div>
                    <div :class="{budgetItem_col:true,budgetItem_col_yuan:true,budgetItem_col_yuan_size_large:attr.size==='large',budgetItem_col_yuan_size_medium:attr.size==='medium',budgetItem_col_yuan_size_small:attr.size==='small',budgetItem_col_yuan_size_min:attr.size==='min',budgetItem_col_yuan_checked:attr.checked,budgetItem_col_yuan_disable:attr.disabled}">

                        <lm2b-link-text
                                ref="yuanRef"
                                refId="yuanRef"
                                v-show="pvt_isShow.yuan === 'yuanRef'"
                                :paraVarPair="pvt_yuan.yuanRef.paraVarPair"
                                :para="pvt_yuan.yuanRef.para"
                                :attr="pvt_yuan.yuanRef.attr">
                        </lm2b-link-text>
                    </div>
                    <div :class="{budgetItem_col:true,budgetItem_col_total:true,budgetItem_col_total_size_large:attr.size==='large',budgetItem_col_total_size_medium:attr.size==='medium',budgetItem_col_total_size_small:attr.size==='small',budgetItem_col_total_size_min:attr.size==='min',budgetItem_col_total_checked:attr.checked,budgetItem_col_total_disable:attr.disabled}">

                        <lm2b-link-text
                                ref="totalRef"
                                refId="totalRef"
                                v-show="pvt_isShow.total === 'totalRef'"
                                :paraVarPair="pvt_total.totalRef.paraVarPair"
                                :para="pvt_total.totalRef.para"
                                :attr="pvt_total.totalRef.attr">
                        </lm2b-link-text>
                    </div>
                    <div :class="{budgetItem_col:true,budgetItem_col_note:true,budgetItem_col_note_size_large:attr.size==='large',budgetItem_col_note_size_medium:attr.size==='medium',budgetItem_col_note_size_small:attr.size==='small',budgetItem_col_note_size_min:attr.size==='min',budgetItem_col_note_checked:attr.checked,budgetItem_col_note_disable:attr.disabled}">

                        <lm2b-link-text
                                ref="nateRef"
                                refId="nateRef"
                                v-show="pvt_isShow.note === 'nateRef'"
                                :paraVarPair="pvt_note.nateRef.paraVarPair"
                                :para="pvt_note.nateRef.para"
                                :attr="pvt_note.nateRef.attr">
                        </lm2b-link-text>
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
        props: ['refId','para','attr','paraVarPair','number'],
        data: function() {
            return {

                curBudgetId:this.para.curBudgetId,
                pvt_subModuleMap: {
                    vessel:['name','yuan','total','note'],
                    subModule:['nameRef','yuanRef','totalRef','nateRef'],
                },
                pvt_isShow: {
                    name:null,
                    yuan:null,
                    total:null,
                    note:null,
                },
                pvt_eventPortInput: [],

                mac: mac.mac,

            };
        },
        watch: {
            curBudgetId: {
                handler: function (val, oldVal) {
                    if (val !== oldVal && this.paraVarPair.curBudgetId) {
                        if (this.number !== undefined) { // 循环
                            this.$parent[this.paraVarPair.curBudgetId][this.number] = val
                        } else { // 非循环
                            this.$parent[this.paraVarPair.curBudgetId] = val
                        }
                    }
                },
                deep   : true
            },
        },
        computed:{
            pvt_name:function(){
                return {
                    nameRef:{
                        paraVarPair:{
                        },
                        para:{
                            textData: [{
                                $table: this.mac.tb.groupActivityBudgetForm,
                                $arrField: [this.mac.fd.groupActivityBudgetForm.name],
                                $arrValue: [this.para.curBudgetId]
                            }],
                        },
                        attr:{
                            textAlign:'center',
                            color:'#333',
                            fontSize:'12px',
                        },
                    },
                };
            },
            pvt_yuan:function(){
                return {
                    yuanRef:{
                        paraVarPair:{
                        },
                        para:{
                            textData: [{
                                $table: this.mac.tb.groupActivityBudgetForm,
                                $arrField: [this.mac.fd.groupActivityBudgetForm.unit],
                                $arrValue: [this.para.curBudgetId]
                            }],
                        },
                        attr:{
                            textAlign:'center',
                            color:'#333',
                            fontSize:'12px',
                        },
                    },
                };
            },
            pvt_total:function(){
                return {
                    totalRef:{
                        paraVarPair:{
                        },
                        para:{
                            textData: [{
                                $table: this.mac.tb.groupActivityBudgetForm,
                                $arrField: [this.mac.fd.groupActivityBudgetForm.budgetAmount],
                                $arrValue: [this.para.curBudgetId]
                            }],
                        },
                        attr:{
                            textAlign:'center',
                            color:'#333',
                            fontSize:'12px',
                        },
                    },
                };
            },
            pvt_note:function(){
                return {
                    nateRef:{
                        paraVarPair:{
                        },
                        para:{
                            textData: [{
                                $table: this.mac.tb.groupActivityBudgetForm,
                                $arrField: [this.mac.fd.groupActivityBudgetForm.budgetRemarks],
                                $arrValue: [this.para.curBudgetId]
                            }],
                        },
                        attr:{
                            textAlign:'center',
                            color:'#333',
                            fontSize:'12px',
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
                    refArr: ['nameRef','yuanRef','totalRef','nateRef']
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
        },
    };
</script>
<style lang="less" scoped>
    @import "../../../../../assets/var_kzt"; /*新增*/
    .budgetItem_container {
    }
    .budgetItem_row {
        display:flex;
        flex:1;
    }
    .budgetItem_col {
        display:flex;
        flex-direction:column;
    }
    .budgetItem_col_budgetItemWindow_size_medium {
        width:@budgetItem-budgetItemWindow-medium-width;
        padding:@budgetItem-budgetItemWindow-medium-padding;
    }
    .budgetItem_col_budgetItemWindow {
        border-style:@budgetItem-budgetItemWindow-border-style;
        border-width:@budgetItem-budgetItemWindow-border-width;
        border-color:mix(@budgetItem-budgetItemWindow-border-color,#fff,@budgetItem-budgetItemWindow-hover-border-color-opacity);
    }
    .budgetItem_col_name_size_medium {
        width:@budgetItem-name-medium-width;
        align-items:@budgetItem-name-medium-horizontal-position;
        justify-content:@budgetItem-name-medium-vertical-position;
    }
    .budgetItem_col_yuan_size_medium {
        width:@budgetItem-yuan-medium-width;
        align-items:@budgetItem-yuan-medium-horizontal-position;
        justify-content:@budgetItem-yuan-medium-vertical-position;
    }
    .budgetItem_col_total_size_medium {
        width:@budgetItem-total-medium-width;
        align-items:@budgetItem-total-medium-horizontal-position;
        justify-content:@budgetItem-total-medium-vertical-position;
    }
    .budgetItem_col_note_size_medium {
        width:@budgetItem-note-medium-width;
        align-items:@budgetItem-note-medium-horizontal-position;
        justify-content:@budgetItem-note-medium-vertical-position;
    }
</style>