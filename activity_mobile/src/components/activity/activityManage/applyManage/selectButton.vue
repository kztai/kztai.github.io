<template>
    <div class="selectButton1_container">
        <div class="selectButton1_row selectButton1_row_selectButton1Row">
            <div :class="{selectButton1_col:true,selectButton1_col_selectButton1Window:true,selectButton1_col_selectButton1Window_size_large:attr.size==='large',selectButton1_col_selectButton1Window_size_medium:attr.size==='medium',selectButton1_col_selectButton1Window_size_small:attr.size==='small',selectButton1_col_selectButton1Window_size_min:attr.size==='min',selectButton1_col_selectButton1Window_checked:attr.checked,selectButton1_col_selectButton1Window_disable:attr.disabled}">

                <lm2b-link-text
                        ref="btnTextRef"
                        refId="btnTextRef"
                        v-show="pvt_isShow.selectButton1Window === 'btnTextRef'"
                        :paraVarPair="pvt_selectButton1Window.btnTextRef.paraVarPair"
                        :para="pvt_selectButton1Window.btnTextRef.para"
                        :attr="pvt_selectButton1Window.btnTextRef.attr">
                </lm2b-link-text>
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
                pvt_subModuleMap: {
                    vessel:['selectButton1Window'],
                    subModule:['btnTextRef'],
                },
                pvt_isShow: {
                    selectButton1Window:null,
                },
                pvt_eventPortInput: ['itemSelectEvent'],
            };
        },
        watch: {
            btnText: {
                handler: function (val, oldVal) {
                    if (val !== oldVal && this.paraVarPair.btnText) {
                        if (this.number !== undefined) { // 循环
                            this.$parent[this.paraVarPair.btnText][this.number] = val
                        } else { // 非循环
                            this.$parent[this.paraVarPair.btnText] = val
                        }
                    }
                },
                deep   : true
            },
        },
        computed:{
            pvt_selectButton1Window:function(){
                return {
                    btnTextRef:{
                        paraVarPair:{
                            textData:'btnText',
                        },
                        para:{
                            textData:this.para.btnText,
                        },
                        attr:{
                            isClick:true,
                            label:'div',
                            textAlign:'center',
                            height:'36px',
                            color:'#333',
                            fontSize: '12px'
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
                let fnname = 'applyManage_start';
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

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                            that.forceUpdateData(function () {
                                that.sm.btnTextRef.startModule(function () {
                                    para.nStep = 'showSubModule';
                                    if (++dbFlag === 2) {
                                        that.startModule(successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
                            });
                            break;
                        case 'showSubModule':
                            that.showSubModule('btnTextRef', true, function () {
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
            toggleSelect:function(isSelect){},
            btnClick:function(){
                this.ep.itemSelectEvent(this.number);
            },
            btnTextRef_textClickEvent() {
                this.btnClick()
            }
        },
    };
</script>
<style lang="less" scoped>
    @import "../../../../assets/var_kzt"; /*新增*/
    .selectButton1_container {
    }
    .selectButton1_row {
        display:flex;
        flex:1;
    }
    .selectButton1_col {
        display:flex;
        flex-direction:column;
    }
    .selectButton1_col_selectButton1Window_size_medium {
        height:@selectButton1-selectButton1Window-medium-height;
        width:@selectButton1-selectButton1Window-medium-width;
        align-items:@selectButton1-selectButton1Window-medium-horizontal-position;
        justify-content:@selectButton1-selectButton1Window-medium-vertical-position;
        padding:@selectButton1-selectButton1Window-medium-padding;
        margin:@selectButton1-selectButton1Window-medium-margin;
    }
    .selectButton1_col_selectButton1Window {
        border-style:@selectButton1-selectButton1Window-border-style;
        border-width:@selectButton1-selectButton1Window-border-width;
        border-color:mix(@selectButton1-selectButton1Window-border-color,#fff,@selectButton1-selectButton1Window-hover-border-color-opacity);
        border-radius:@selectButton1-selectButton1Window-border-radius;
        background-color:mix(@selectButton1-selectButton1Window-background-color,#fff,@selectButton1-selectButton1Window-background-color-opacity);
    }
  /*  .selectButton1_col_selectButton1Window:hover {
        border-style:@selectButton1-selectButton1Window-hover-border-style;
        border-width:@selectButton1-selectButton1Window-hover-border-width;
        border-color:mix(@selectButton1-selectButton1Window-hover-border-color,#fff,@selectButton1-selectButton1Window-hover-border-color-opacity);
        border-radius:@selectButton1-selectButton1Window-hover-border-radius;
    }*/
    .selectButton1_col_selectButton1Window_checked {
        border-color:mix(@selectButton1-selectButton1Window-checked-border-color,#fff,@selectButton1-selectButton1Window-checked-border-color-opacity);
        border-width:@selectButton1-selectButton1Window-checked-border-width;
        border-style:@selectButton1-selectButton1Window-checked-border-style;
        border-radius:@selectButton1-selectButton1Window-checked-border-radius;
    }
</style>