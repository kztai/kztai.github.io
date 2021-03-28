<template>
    <div class="empty_container">
        <div class="empty_row empty_row_emptyRow">
            <div :class="{empty_col:true,empty_col_emptyWindow:true,empty_col_emptyWindow_size_large:attr.size==='large',empty_col_emptyWindow_size_medium:attr.size==='medium',empty_col_emptyWindow_size_small:attr.size==='small',empty_col_emptyWindow_size_min:attr.size==='min',empty_col_emptyWindow_checked:attr.checked,empty_col_emptyWindow_disable:attr.disabled}">

                <div class="empty_row empty_row_row1">
                    <div :class="{empty_col:true,empty_col_img:true,empty_col_img_size_large:attr.size==='large',empty_col_img_size_medium:attr.size==='medium',empty_col_img_size_small:attr.size==='small',empty_col_img_size_min:attr.size==='min',empty_col_img_checked:attr.checked,empty_col_img_disable:attr.disabled}">

                        <lm2b-image
                                ref="imgRef"
                                refId="imgRef"
                                v-show="pvt_isShow.img === 'imgRef'"
                                :paraVarPair="pvt_img.imgRef.paraVarPair"
                                :para="pvt_img.imgRef.para"
                                :attr="pvt_img.imgRef.attr">
                        </lm2b-image>
                    </div>
                </div>
                <div class="empty_row empty_row_row2">
                    <div :class="{empty_col:true,empty_col_text:true,empty_col_text_size_large:attr.size==='large',empty_col_text_size_medium:attr.size==='medium',empty_col_text_size_small:attr.size==='small',empty_col_text_size_min:attr.size==='min',empty_col_text_checked:attr.checked,empty_col_text_disable:attr.disabled}">

                        <lm2b-link-text
                                ref="textRef"
                                refId="textRef"
                                v-show="pvt_isShow.text === 'textRef'"
                                :paraVarPair="pvt_text.textRef.paraVarPair"
                                :para="pvt_text.textRef.para"
                                :attr="pvt_text.textRef.attr">
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
        props: ['refId','para','attr','number'],
        data: function() {
            return {
                pvt_subModuleMap: {
                    vessel:['img','text'],
                    subModule:['imgRef','textRef'],
                },
                pvt_isShow: {
                    img:null,
                    text:null,
                },
                pvt_eventPortInput: [],

                mac: mac.mac,

                emptyText:'暂无数据',
            };
        },
        watch: {
        },
        computed:{
            pvt_img:function(){
                return {
                    imgRef:{
                        paraVarPair:{
                        },
                        para:{
                            image: 'http://pic.51yuansu.com/pic3/cover/02/79/38/5a43641525cd6_610.jpg!/fw/260/quality/90/unsharp/true/compress/true',
                        },
                        attr:{
                        },
                    },
                };
            },
            pvt_text:function(){
                return {
                    textRef:{
                        paraVarPair:{
                            textData:'emptyText',
                        },
                        para:{
                            textData:this.emptyText,
                        },
                        attr:{
                            textAlign:'center',
                            color:'#999',
                            fontSize:'12px',
                            background: '#f4f4f4'
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
            startModule:function(emptyText,successCallBack,errorCallBack){
                let that = this;
                let fnname = 'empty_start';
                let dbFlag;
                let dbData;
                let tableName;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0,
                    refArr: ['imgRef','textRef']
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
                            if(emptyText) {
                                that.emptyText = emptyText;
                            }

                            that.forceUpdateData(function () {
                                para.nStep = 'start_sub';
                                if (++dbFlag === 2) {
                                    that.startModule(emptyText, successCallBack, errorCallBack)
                                }
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
                                    that.startModule(emptyText, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            that.showSubModule(para.refArr, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.startModule(emptyText, successCallBack, errorCallBack)
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
    @import "../../../../assets/var_kzt"; /*新增*/
    .empty_container {
    }
    .empty_row {
        display:flex;
        flex:1;
    }
    .empty_col {
        display:flex;
        flex-direction:column;
    }
    .empty_col_emptyWindow_size_medium {
        width:@empty-emptyWindow-medium-width;
        align-items:@empty-emptyWindow-medium-horizontal-position;
    }
    .empty_col_img_size_medium {
        width:@empty-img-medium-width;
        height:@empty-img-medium-height;
        margin:@empty-img-medium-margin;
        overflow: hidden;
    }
    .empty_col_img {
        border-radius:@empty-img-border-radius;
    }
    .empty_col_text_size_medium {
        width:@empty-text-medium-width;
    }
</style>