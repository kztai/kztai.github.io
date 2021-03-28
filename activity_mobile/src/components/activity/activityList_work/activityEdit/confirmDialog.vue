<template>
  <div class="maskLayer">
    <div class="confirmDialog_row confirmDialog_row_confirmDialogRow">
      <div :class="{confirmDialog_col:true,confirmDialog_col_confirmDialogWindow:true,confirmDialog_col_confirmDialogWindow_size_large:attr.size==='large',confirmDialog_col_confirmDialogWindow_size_medium:attr.size==='medium',confirmDialog_col_confirmDialogWindow_size_small:attr.size==='small',confirmDialog_col_confirmDialogWindow_size_min:attr.size==='min',confirmDialog_col_confirmDialogWindow_checked:attr.checked,confirmDialog_col_confirmDialogWindow_disable:attr.disabled}">

        <div class="confirmDialog_row confirmDialog_row_row1" v-show="title">
          <div :class="{confirmDialog_col:true,confirmDialog_col_title:true,confirmDialog_col_title_size_large:attr.size==='large',confirmDialog_col_title_size_medium:attr.size==='medium',confirmDialog_col_title_size_small:attr.size==='small',confirmDialog_col_title_size_min:attr.size==='min',confirmDialog_col_title_checked:attr.checked,confirmDialog_col_title_disable:attr.disabled}">

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
        <div class="confirmDialog_row confirmDialog_row_row2" v-show="desc">
          <div :class="{confirmDialog_col:true,confirmDialog_col_desc:true,confirmDialog_col_desc_size_large:attr.size==='large',confirmDialog_col_desc_size_medium:attr.size==='medium',confirmDialog_col_desc_size_small:attr.size==='small',confirmDialog_col_desc_size_min:attr.size==='min',confirmDialog_col_desc_checked:attr.checked,confirmDialog_col_desc_disable:attr.disabled}">

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
        <div class="confirmDialog_row confirmDialog_row_row3" v-show="oneBtn">
          <div :class="{confirmDialog_col:true,confirmDialog_col_oneBtn:true,confirmDialog_col_oneBtn_size_large:attr.size==='large',confirmDialog_col_oneBtn_size_medium:attr.size==='medium',confirmDialog_col_oneBtn_size_small:attr.size==='small',confirmDialog_col_oneBtn_size_min:attr.size==='min',confirmDialog_col_oneBtn_checked:attr.checked,confirmDialog_col_oneBtn_disable:attr.disabled}">

            <lm2b-button
                    ref="oneBtnRef"
                    refId="oneBtnRef"
                    v-show="pvt_isShow.oneBtn === 'oneBtnRef'"
                    :paraVarPair="pvt_oneBtn.oneBtnRef.paraVarPair"
                    :para="pvt_oneBtn.oneBtnRef.para"
                    :attr="pvt_oneBtn.oneBtnRef.attr">
            </lm2b-button>
          </div>
        </div>
        <div class="confirmDialog_row confirmDialog_row_row4" v-show="twoBtn">
          <div :class="{confirmDialog_col:true,confirmDialog_col_leftBtn:true,confirmDialog_col_leftBtn_size_large:attr.size==='large',confirmDialog_col_leftBtn_size_medium:attr.size==='medium',confirmDialog_col_leftBtn_size_small:attr.size==='small',confirmDialog_col_leftBtn_size_min:attr.size==='min',confirmDialog_col_leftBtn_checked:attr.checked,confirmDialog_col_leftBtn_disable:attr.disabled}">

            <lm2b-button
                    ref="leftBtnRef"
                    refId="leftBtnRef"
                    v-show="pvt_isShow.leftBtn === 'leftBtnRef'"
                    :paraVarPair="pvt_leftBtn.leftBtnRef.paraVarPair"
                    :para="pvt_leftBtn.leftBtnRef.para"
                    :attr="pvt_leftBtn.leftBtnRef.attr">
            </lm2b-button>
          </div>
          <div :class="{confirmDialog_col:true,confirmDialog_col_rightBtn:true,confirmDialog_col_rightBtn_size_large:attr.size==='large',confirmDialog_col_rightBtn_size_medium:attr.size==='medium',confirmDialog_col_rightBtn_size_small:attr.size==='small',confirmDialog_col_rightBtn_size_min:attr.size==='min',confirmDialog_col_rightBtn_checked:attr.checked,confirmDialog_col_rightBtn_disable:attr.disabled}">

            <lm2b-button
                    ref="rightBtnRef"
                    refId="rightBtnRef"
                    v-show="pvt_isShow.rightBtn === 'rightBtnRef'"
                    :paraVarPair="pvt_rightBtn.rightBtnRef.paraVarPair"
                    :para="pvt_rightBtn.rightBtnRef.para"
                    :attr="pvt_rightBtn.rightBtnRef.attr">
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
                pvt_subModuleMap: {
                    vessel:['title','desc','oneBtn','leftBtn','rightBtn'],
                    subModule:['titleRef','descRef','oneBtnRef','leftBtnRef','rightBtnRef'],
                },
                pvt_isShow: {
                    title:null,
                    desc:null,
                    oneBtn:null,
                    leftBtn:null,
                    rightBtn:null,
                },
                pvt_eventPortInput: ['confirmEvent','cancelEvent'],

                dialogData:{title:'标题',desc:'这里是描述部分',btnText:['取消','确定']},
                title: false,
                desc: false,
                oneBtn: false,
                twoBtn: false,
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
                            textData:this.dialogData.title,
                        },
                        attr:{
                            label:'div',
                            textAlign:'center',
                            fontWeight:true,
                            fontSize:'14px',
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
                            textData:this.dialogData.desc,
                        },
                        attr:{
                            label:'div',
                            textAlign:'center',
                            fontSize:'14px',
                        },
                    },
                };
            },
            pvt_oneBtn:function(){
                return {
                    oneBtnRef:{
                        paraVarPair:{
                        },
                        para:{
                            name:[this.dialogData.btnText[0], ''],
                        },
                        attr:{
                            type:'text',
                            height:'40px',
                        },
                    },
                };
            },
            pvt_leftBtn:function(){
                return {
                    leftBtnRef:{
                        paraVarPair:{
                        },
                        para:{
                            name:[this.dialogData.btnText[0], ''],
                        },
                        attr:{
                            type:'text',
                            width:'100%',
                            height:'40px',
                        },
                    },
                };
            },
            pvt_rightBtn:function(){
                return {
                    rightBtnRef:{
                        paraVarPair:{
                        },
                        para:{
                            name:[this.dialogData.btnText[1], ''],
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
            startModule:function(dialogData,successCallBack,errorCallBack){
                let that = this;
                let fnname = 'confirmDialog_start';
                let dbFlag;
                let dbData;
                let tableName;
                let para = {
                    successCallBack: successCallBack,
                    errorCallBack: errorCallBack,
                    nStep: 0,
                    i: 0,
                    refArr: []
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
                            if(Object.prototype.toString.call(dialogData) === "[object Object]") {
                                this.dialogData = dialogData;
                            }

                            if(this.dialogData.title || this.dialogData.title === 0) {
                                para.refArr.push('titleRef');
                                that.title = true;
                            }
                            if(this.dialogData.desc || this.dialogData.desc === 0) {
                                para.refArr.push('descRef');
                                that.desc = true;
                            }
                            if(this.dialogData.btnText.length === 1) {
                                para.refArr.push('oneBtnRef');
                                that.oneBtn = true;
                            } else {
                                para.refArr.push('leftBtnRef', 'rightBtnRef');
                                that.twoBtn = true;
                            }

                            that.forceUpdateData(function () {
                                para.nStep = 'start_sub';
                                if (++dbFlag === 2) {
                                    that.startModule(dialogData, successCallBack, errorCallBack)
                                }
                            });
                            break;
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
                                    that.startModule(dialogData, successCallBack, errorCallBack)
                                }
                            }, function () {
                            });
                            break;
                        case 'showSubModule':
                            that.showSubModule(para.refArr, true, function () {
                                para.nStep = 'end';
                                if (++dbFlag === 2) {
                                    that.startModule(dialogData, successCallBack, errorCallBack)
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
            oneBtnRef_buttonClickEvent:function(){
                this.ep.confirmEvent(this.dialogData.ref);
                this.hideSelfModule(this.refId, function () {
                }, function () {
                });
            },
            leftBtnRef_buttonClickEvent:function(){
                this.ep.cancelEvent(this.dialogData.ref);
                this.hideSelfModule(this.refId, function () {
                }, function () {
                });
            },
            rightBtnRef_buttonClickEvent:function(){
                this.ep.confirmEvent(this.dialogData.ref);
                this.hideSelfModule(this.refId, function () {
                }, function () {
                });
            },
        },
    };
</script>
<style lang="less" scoped>
    @import '../../../../assets/var_sq';
    .maskLayer{
      position:fixed;
      width:100%;
      height:100%;
      background:rgba(0,0,0,.5);
      top:0;
      left:0;
    }
    .confirmDialog_row {
      display:flex;
      width:100%;
    }

    .confirmDialog_row_confirmDialogRow {
      position:fixed;
      width:80%;
      top:50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    .confirmDialog_col {
        display:flex;
        flex-direction:column;
        margin:0 auto;
    }
    .confirmDialog_col_confirmDialogWindow_size_medium {
        width:@confirmDialog-confirmDialogWindow-medium-width;
        align-items:@confirmDialog-confirmDialogWindow-medium-horizontal-position;
        padding:@confirmDialog-confirmDialogWindow-medium-padding;
        height:@confirmDialog-confirmDialogWindow-medium-height;
        overflow: hidden;
    }
    .confirmDialog_col_confirmDialogWindow {
        border-radius:@confirmDialog-confirmDialogWindow-border-radius;
        background-color:mix(@confirmDialog-confirmDialogWindow-background-color,#fff,@confirmDialog-confirmDialogWindow-background-color-opacity);
    }
    .confirmDialog_col_title_size_medium {
        width:@confirmDialog-title-medium-width;
        padding:@confirmDialog-title-medium-padding;
        align-items:@confirmDialog-title-medium-horizontal-position;
        justify-content:@confirmDialog-title-medium-vertical-position;
    }
    .confirmDialog_col_desc_size_medium {
        width:@confirmDialog-desc-medium-width;
        padding:@confirmDialog-desc-medium-padding;
        align-items:@confirmDialog-desc-medium-horizontal-position;
        justify-content:@confirmDialog-desc-medium-vertical-position;
    }
    .confirmDialog_col_oneBtn_size_medium {
        width:@confirmDialog-oneBtn-medium-width;
        margin:@confirmDialog-oneBtn-medium-margin;
        align-items:@confirmDialog-oneBtn-medium-horizontal-position;
        justify-content:@confirmDialog-oneBtn-medium-vertical-position;
    }
    .confirmDialog_col_oneBtn {
        border-style:@confirmDialog-oneBtn-border-style;
        border-width:@confirmDialog-oneBtn-border-width;
        border-color:mix(@confirmDialog-oneBtn-border-color,#fff,@confirmDialog-oneBtn-hover-border-color-opacity);
    }
    .confirmDialog_col_leftBtn_size_medium {
        width:@confirmDialog-leftBtn-medium-width;
        padding:@confirmDialog-leftBtn-medium-padding;
        margin:@confirmDialog-leftBtn-medium-margin;
        align-items:@confirmDialog-leftBtn-medium-horizontal-position;
        justify-content:@confirmDialog-leftBtn-medium-vertical-position;
    }
    .confirmDialog_col_leftBtn {
        border-style:@confirmDialog-leftBtn-border-style;
        border-width:@confirmDialog-leftBtn-border-width;
        border-color:mix(@confirmDialog-leftBtn-border-color,#fff,@confirmDialog-leftBtn-hover-border-color-opacity);
    }
    .confirmDialog_col_rightBtn_size_medium {
        width:@confirmDialog-rightBtn-medium-width;
        padding:@confirmDialog-rightBtn-medium-padding;
        margin:@confirmDialog-rightBtn-medium-margin;
        align-items:@confirmDialog-rightBtn-medium-horizontal-position;
        justify-content:@confirmDialog-rightBtn-medium-vertical-position;
        .button-component {
            width: 100%;
            height: 100%;
        }
    }
    .confirmDialog_col_rightBtn {
        border-style:@confirmDialog-rightBtn-border-style;
        border-width:@confirmDialog-rightBtn-border-width;
        border-color:mix(@confirmDialog-rightBtn-border-color,#fff,@confirmDialog-rightBtn-hover-border-color-opacity);
    }
</style>
