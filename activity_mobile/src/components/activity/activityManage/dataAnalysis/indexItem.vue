<template>
    <div class="indexItem_container" @click="itemClick">
        <div class="indexItem_row indexItem_row_indexItemRow">
            <div :class="{indexItem_col:true,indexItem_col_indexItemWindow:true,indexItem_col_indexItemWindow_size_large:attr.size==='large',indexItem_col_indexItemWindow_size_medium:attr.size==='medium',indexItem_col_indexItemWindow_size_small:attr.size==='small',indexItem_col_indexItemWindow_size_min:attr.size==='min',indexItem_col_indexItemWindow_checked:attr.checked,indexItem_col_indexItemWindow_disable:attr.disabled}">

                <div class="indexItem_row indexItem_row_row1">
                    <div :class="{indexItem_col:true,indexItem_col_title:true,indexItem_col_title_size_large:attr.size==='large',indexItem_col_title_size_medium:attr.size==='medium',indexItem_col_title_size_small:attr.size==='small',indexItem_col_title_size_min:attr.size==='min',indexItem_col_title_checked:attr.checked,indexItem_col_title_disable:attr.disabled}">

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
                <div class="indexItem_row indexItem_row_row2">
                    <div :class="{indexItem_col:true,indexItem_col_totalNum:true,indexItem_col_totalNum_size_large:attr.size==='large',indexItem_col_totalNum_size_medium:attr.size==='medium',indexItem_col_totalNum_size_small:attr.size==='small',indexItem_col_totalNum_size_min:attr.size==='min',indexItem_col_totalNum_checked:attr.checked,indexItem_col_totalNum_disable:attr.disabled}">

                        <lm2b-link-text
                                ref="totalNumRef"
                                refId="totalNumRef"
                                v-show="pvt_isShow.totalNum === 'totalNumRef'"
                                :paraVarPair="pvt_totalNum.totalNumRef.paraVarPair"
                                :para="pvt_totalNum.totalNumRef.para"
                                :attr="pvt_totalNum.totalNumRef.attr">
                        </lm2b-link-text>
                    </div>
                </div>
                <div class="indexItem_row indexItem_row_row3">
                    <div :class="{indexItem_col:true,indexItem_col_todayNum:true,indexItem_col_todayNum_size_large:attr.size==='large',indexItem_col_todayNum_size_medium:attr.size==='medium',indexItem_col_todayNum_size_small:attr.size==='small',indexItem_col_todayNum_size_min:attr.size==='min',indexItem_col_todayNum_checked:attr.checked,indexItem_col_todayNum_disable:attr.disabled}">

                        <lm2b-link-text
                                ref="todayNumRef"
                                refId="todayNumRef"
                                v-show="pvt_isShow.todayNum === 'todayNumRef'"
                                :paraVarPair="pvt_todayNum.todayNumRef.paraVarPair"
                                :para="pvt_todayNum.todayNumRef.para"
                                :attr="pvt_todayNum.todayNumRef.attr">
                        </lm2b-link-text>
                    </div>
                </div>
                <div class="indexItem_row indexItem_row_row4">
                    <div :class="{indexItem_col:true,indexItem_col_percent:true,indexItem_col_percent_size_large:attr.size==='large',indexItem_col_percent_size_medium:attr.size==='medium',indexItem_col_percent_size_small:attr.size==='small',indexItem_col_percent_size_min:attr.size==='min',indexItem_col_percent_checked:attr.checked,indexItem_col_percent_disable:attr.disabled}">

                        <lm2b-progress
                                ref="percentRef"
                                refId="percentRef"
                                v-show="pvt_isShow.percent === 'percentRef'"
                                :paraVarPair="pvt_percent.percentRef.paraVarPair"
                                :para="pvt_percent.percentRef.para"
                                :attr="pvt_percent.percentRef.attr">
                        </lm2b-progress>
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
                pvt_subModuleMap: {
                    vessel:['title','totalNum','todayNum','percent'],
                    subModule:['titleRef','totalNumRef','todayNumRef','percentRef'],
                },
                pvt_isShow: {
                    title:null,
                    totalNum:null,
                    todayNum:null,
                    percent:null,
                },
                pvt_eventPortInput: ['itemToggleEvent'],

                indexData:{},
                isSelect: true,
                percent: 0,
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
                            textData:this.indexData.title,
                        },
                        attr:{
                            textAlign:'center',
                            fontSize:'14px',
                        },
                    },
                };
            },
            pvt_totalNum:function(){
                return {
                    totalNumRef:{
                        paraVarPair:{
                        },
                        para:{
                            textData:this.indexData.totalNum,
                        },
                        attr:{
                            textAlign:'center',
                            fontSize:'14px',
                        },
                    },
                };
            },
            pvt_todayNum:function(){
                return {
                    todayNumRef:{
                        paraVarPair:{
                        },
                        para:{
                            textData:this.indexData.todayNum,
                        },
                        attr:{
                            textAlign:'center',
                            color:'#999',
                            fontSize:'12px',
                        },
                    },
                };
            },

            pvt_percent:function(){
                return {
                    percentRef:{
                        paraVarPair:{
                        },
                        para:{
                            percent:this.percent,
                        },
                        attr:{
                            showText:false,
                            // status:'success',
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
            itemClick:function(){
                this.isSelect ? this.isSelect = false : this.isSelect = true;
                this.ep.itemToggleEvent(this.isSelect);
            },
            startModule:function(indexData,successCallBack,errorCallBack){
                let that = this;
                let fnname = 'indexItem_start';
                let dbFlag;
                let dbData;
                let tableName;
                let record;
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

                let refArr = ['titleRef','totalNumRef','todayNumRef'];

                while (1) {
                    dbFlag = 0;
                    console.log(fnname + ': para.nStep = ' + para.nStep);
                    switch (para.nStep) {
                        case 0:
                            this.indexData = indexData;
                            // this.isSelect = true;
                            that.forceUpdateData(function () {
                                para.nStep = 'start_sub';
                                if (++dbFlag === 2) {
                                    that.startModule(indexData,successCallBack, errorCallBack)
                                }
                            });
                            break;
                        case 'start_sub':
                            if (para.i >= refArr.length) {
                                para.i = 0;
                                para.nStep = 'showSubModule';
                                dbFlag++;
                                break;
                            }
                            that.sm[refArr[para.i]].startModule(function () {
                                para.i++;
                                para.nStep = 'start_sub';
                                if (++dbFlag === 2) {
                                    that.startModule(indexData,successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            that.showSubModule(refArr, true, function () {
                                para.nStep = 'showPercent';
                                if (++dbFlag === 2) {
                                    that.startModule(indexData,successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'showPercent':
                            that.showSubModule('percentRef', true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.startModule(indexData,successCallBack, errorCallBack)
                                }
                            }, para.errorCallBack);
                            break;
                        case 'percent_start':
                            this.percent = this.indexData.percent;
                            setTimeout(function () {
                                that.sm.percentRef.startModule(function () {
                                    para.nStep = 'end';
                                    if (++dbFlag === 2) {
                                        that.startModule(indexData,successCallBack, errorCallBack)
                                    }
                                }, function () {
                                });
                            }, 20);
                            break;
                        case 'end':
                            para.successCallBack();
                            this.percent = this.indexData.percent;
                            setTimeout(function () {
                                that.sm.percentRef.startModule(function () {
                                    // para.nStep = 'end';
                                    // if (++dbFlag === 2) {
                                    //     that.startModule(indexData,successCallBack, errorCallBack)
                                    // }
                                }, function () {
                                });
                            }, 20);
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
    @import "../../../../assets/var_kzt"; /*新增*/
    .indexItem_container {
    }
    .indexItem_row {
        display:flex;
        flex:1;
    }
    .indexItem_col {
        display:flex;
        flex-direction:column;
    }
    .indexItem_col_indexItemWindow_size_medium {
        width:@indexItem-indexItemWindow-medium-width;
        padding:@indexItem-indexItemWindow-medium-padding;
        margin:@indexItem-indexItemWindow-medium-margin;
    }
    .indexItem_col_indexItemWindow {
        border-style:@indexItem-indexItemWindow-border-style;
        border-width:@indexItem-indexItemWindow-border-width;
        border-radius:@indexItem-indexItemWindow-border-radius;
        border-color:mix(@indexItem-indexItemWindow-border-color,#fff,@indexItem-indexItemWindow-hover-border-color-opacity);
    }

    .indexItem_col_indexItemWindow_checked {
        border-color:mix(@indexItem-indexItemWindow-checked-border-color,#fff,@indexItem-indexItemWindow-checked-border-color-opacity);
        border-radius:@indexItem-indexItemWindow-checked-border-radius;
        border-width:@indexItem-indexItemWindow-checked-border-width;
        border-style:@indexItem-indexItemWindow-checked-border-style;
    }
    .indexItem_col_title_size_medium {
        width:@indexItem-title-medium-width;
        margin:@indexItem-title-medium-margin;
        align-items:@indexItem-title-medium-horizontal-position;
    }
    .indexItem_col_totalNum_size_medium {
        width:@indexItem-totalNum-medium-width;
        align-items:@indexItem-totalNum-medium-horizontal-position;
    }
    .indexItem_col_todayNum_size_medium {
        width:@indexItem-todayNum-medium-width;
        margin:@indexItem-todayNum-medium-margin;
        align-items:@indexItem-todayNum-medium-horizontal-position;
    }
    .indexItem_col_percent_size_medium {
        width:@indexItem-percent-medium-width;
        /*<!--align-items:@indexItem-percent-medium-horizontal-position;-->*/
    }
</style>