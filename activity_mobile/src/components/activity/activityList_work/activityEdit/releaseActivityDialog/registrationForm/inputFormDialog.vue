<template>
  <div class="mcbInputFormDialog_container">
    <div class="mcbInputFormDialog_row mcbInputFormDialog_row_mcbInputFormDialogRow">
      <div :class="{mcbInputFormDialog_col:true,mcbInputFormDialog_col_mcbInputFormDialogWindow:true,mcbInputFormDialog_col_mcbInputFormDialogWindow_size_large:attr.size==='large',mcbInputFormDialog_col_mcbInputFormDialogWindow_size_medium:attr.size==='medium',mcbInputFormDialog_col_mcbInputFormDialogWindow_size_small:attr.size==='small',mcbInputFormDialog_col_mcbInputFormDialogWindow_size_min:attr.size==='min',mcbInputFormDialog_col_mcbInputFormDialogWindow_checked:attr.checked,mcbInputFormDialog_col_mcbInputFormDialogWindow_disable:attr.disabled}">

        <div class="mcbInputFormDialog_row mcbInputFormDialog_row_row1">
          <div :class="{mcbInputFormDialog_col:true,mcbInputFormDialog_col_r1c1:true,mcbInputFormDialog_col_r1c1_size_large:attr.size==='large',mcbInputFormDialog_col_r1c1_size_medium:attr.size==='medium',mcbInputFormDialog_col_r1c1_size_small:attr.size==='small',mcbInputFormDialog_col_r1c1_size_min:attr.size==='min',mcbInputFormDialog_col_r1c1_checked:attr.checked,mcbInputFormDialog_col_r1c1_disable:attr.disabled}">

            <div class="mcbInputFormDialog_row mcbInputFormDialog_row_row2">
              <div :class="{mcbInputFormDialog_col:true,mcbInputFormDialog_col_r1_1c1:true,mcbInputFormDialog_col_r1_1c1_size_large:attr.size==='large',mcbInputFormDialog_col_r1_1c1_size_medium:attr.size==='medium',mcbInputFormDialog_col_r1_1c1_size_small:attr.size==='small',mcbInputFormDialog_col_r1_1c1_size_min:attr.size==='min',mcbInputFormDialog_col_r1_1c1_checked:attr.checked,mcbInputFormDialog_col_r1_1c1_disable:attr.disabled}">

                <lm2b-link-text
                        ref="backText"
                        refId="backText"
                        v-show="pvt_isShow.r1_1c1 === 'backText'"
                        :paraVarPair="pvt_r1_1c1.backText.paraVarPair"
                        :para="pvt_r1_1c1.backText.para"
                        :attr="pvt_r1_1c1.backText.attr">
                </lm2b-link-text>
              </div>
              <div :class="{mcbInputFormDialog_col:true,mcbInputFormDialog_col_r1_1c2:true,mcbInputFormDialog_col_r1_1c2_size_large:attr.size==='large',mcbInputFormDialog_col_r1_1c2_size_medium:attr.size==='medium',mcbInputFormDialog_col_r1_1c2_size_small:attr.size==='small',mcbInputFormDialog_col_r1_1c2_size_min:attr.size==='min',mcbInputFormDialog_col_r1_1c2_checked:attr.checked,mcbInputFormDialog_col_r1_1c2_disable:attr.disabled}">

                <lm2b-link-text
                        ref="titleText"
                        refId="titleText"
                        v-show="pvt_isShow.r1_1c2 === 'titleText'"
                        :paraVarPair="pvt_r1_1c2.titleText.paraVarPair"
                        :para="pvt_r1_1c2.titleText.para"
                        :attr="pvt_r1_1c2.titleText.attr">
                </lm2b-link-text>
              </div>
              <div :class="{mcbInputFormDialog_col:true,mcbInputFormDialog_col_r1_1c3:true,mcbInputFormDialog_col_r1_1c3_size_large:attr.size==='large',mcbInputFormDialog_col_r1_1c3_size_medium:attr.size==='medium',mcbInputFormDialog_col_r1_1c3_size_small:attr.size==='small',mcbInputFormDialog_col_r1_1c3_size_min:attr.size==='min',mcbInputFormDialog_col_r1_1c3_checked:attr.checked,mcbInputFormDialog_col_r1_1c3_disable:attr.disabled}">

                <lm2b-button
                        ref="finishButton"
                        refId="finishButton"
                        v-show="pvt_isShow.r1_1c3 === 'finishButton'"
                        :paraVarPair="pvt_r1_1c3.finishButton.paraVarPair"
                        :para="pvt_r1_1c3.finishButton.para"
                        :attr="pvt_r1_1c3.finishButton.attr">
                </lm2b-button>
              </div>
            </div>
          </div>
        </div>
        <div class="mcbInputFormDialog_row mcbInputFormDialog_row_row3">
          <div :class="{mcbInputFormDialog_col:true,mcbInputFormDialog_col_r2c1:true,mcbInputFormDialog_col_r2c1_size_large:attr.size==='large',mcbInputFormDialog_col_r2c1_size_medium:attr.size==='medium',mcbInputFormDialog_col_r2c1_size_small:attr.size==='small',mcbInputFormDialog_col_r2c1_size_min:attr.size==='min',mcbInputFormDialog_col_r2c1_checked:attr.checked,mcbInputFormDialog_col_r2c1_disable:attr.disabled}">

            <div class="mcbInputFormDialog_row mcbInputFormDialog_row_row4">
              <div :class="{mcbInputFormDialog_col:true,mcbInputFormDialog_col_r2_1c1:true,mcbInputFormDialog_col_r2_1c1_size_large:attr.size==='large',mcbInputFormDialog_col_r2_1c1_size_medium:attr.size==='medium',mcbInputFormDialog_col_r2_1c1_size_small:attr.size==='small',mcbInputFormDialog_col_r2_1c1_size_min:attr.size==='min',mcbInputFormDialog_col_r2_1c1_checked:attr.checked,mcbInputFormDialog_col_r2_1c1_disable:attr.disabled}">

                <lm2b-input-text
                        ref="labelInput"
                        refId="labelInput"
                        v-show="pvt_isShow.r2_1c1 === 'labelInput'"
                        :paraVarPair="pvt_r2_1c1.labelInput.paraVarPair"
                        :para="pvt_r2_1c1.labelInput.para"
                        :attr="pvt_r2_1c1.labelInput.attr">
                </lm2b-input-text>
              </div>
            </div>
            <div class="mcbInputFormDialog_row mcbInputFormDialog_row_row5">
              <div :class="{mcbInputFormDialog_col:true,mcbInputFormDialog_col_r2_2c1:true,mcbInputFormDialog_col_r2_2c1_size_large:attr.size==='large',mcbInputFormDialog_col_r2_2c1_size_medium:attr.size==='medium',mcbInputFormDialog_col_r2_2c1_size_small:attr.size==='small',mcbInputFormDialog_col_r2_2c1_size_min:attr.size==='min',mcbInputFormDialog_col_r2_2c1_checked:attr.checked,mcbInputFormDialog_col_r2_2c1_disable:attr.disabled}">

                <lm2b-input-text
                        ref="placeholderInput"
                        refId="placeholderInput"
                        v-show="pvt_isShow.r2_2c1 === 'placeholderInput'"
                        :paraVarPair="pvt_r2_2c1.placeholderInput.paraVarPair"
                        :para="pvt_r2_2c1.placeholderInput.para"
                        :attr="pvt_r2_2c1.placeholderInput.attr">
                </lm2b-input-text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import libSys from '@/components/baseComponent/libSys.js';
  import libUpload from '@/components/baseComponent/libUpload.js';
  import { Dialog } from 'vant';
  export default {
    components: {},
    inject: ['sys'],
    props: ['refId','para','attr','number'],
    data: function() {
      return {
        pvt_subModuleMap: {
          vessel:['r1_1c1','r1_1c2','r1_1c3','r2_1c1','r2_2c1'],
          subModule:['backText','titleText','finishButton','labelInput','placeholderInput'],
        },
        pvt_isShow: {
          r1_1c1:null,
          r1_1c2:null,
          r1_1c3:null,
          r2_1c1:null,
          r2_2c1:null,
        },
        pvt_eventPortInput: ['confirmEvent'],
        titleValue:'',
        labelName:'',
        placeholderValue:''
      };
    },
    watch: {
    },
    computed:{
      pvt_r1_1c1:function(){
        return {
          backText:{
            paraVarPair:{
            },
            para:{
              textData:'返回',
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'left',
              height:'42px',
              color:'#12B0FF',
              fontSize:'16px',
              background:'transparent',
              icon:'van-icon-arrow-left',
              iconIsRight:false,
            },
          },
        };
      },
      pvt_r1_1c2:function(){
        return {
          titleText:{
            paraVarPair:{
            },
            para:{
              textData:this.titleValue,
            },
            attr:{
              label:'div',
              textAlign:'center',
              fontWeight:true,
              height:'42px',
              color:'#000000',
              fontSize:'18px',
              background:'transparent',
            },
          },
        };
      },
      pvt_r1_1c3:function(){
        return {
          finishButton:{
            paraVarPair:{
            },
            para:{
              name:['完成'],
            },
            attr:{
              type:'primary',
              width:'60px',
              height:'35px',
            },
          },
        };
      },
      pvt_r2_1c1:function(){
        return {
          labelInput:{
            paraVarPair:{
              text:'labelName',
            },
            para:{
              text:this.labelName,
            },
            attr:{
              placeholder:'输入文本框标题',
              isPlaceholder:false,
            },
          },
        };
      },
      pvt_r2_2c1:function(){
        return {
          placeholderInput:{
            paraVarPair:{
              text:'placeholderValue',
            },
            para:{
              text:this.placeholderValue,
            },
            attr:{
              placeholder:'输入提示信息',
              isPlaceholder:false,
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
      startModule:function(obj,successCallBack,errorCallBack){
        let $this = this;
        let para = {
          successCallBack:successCallBack,
          errorCallBack:errorCallBack,
          nStep:0
        }
        let dbFlag;
        let ref = {
          sm1:'backText',
          sm2:'titleText',
          sm3:'finishButton',
          sm4:'labelInput',
          sm5:'placeholderInput',
        };

        if(successCallBack !== null){
          errorCallBack = para;
          successCallBack = null;
        }
        para = errorCallBack;

        while(1){
          dbFlag = 0;
          switch(para.nStep){
            case 0:
              // 初始化数据
              $this.titleValue = '单行文本';
              $this.labelName = '';
              $this.placeholderValue = '';
              $this.labelArr = [];
              $this.formIndex = null;
              $this.baseCommentName = '';
              $this.type = '';
              if(obj){
                if(obj.title){
                  $this.titleValue = obj.title;
                }
                if(obj.label){
                  $this.labelName = obj.label;
                }
                if(obj.placeholder){
                  $this.placeholderValue = obj.placeholder;
                }
                if(obj.index || obj.index === 0){
                  $this.formIndex = obj.index;
                }
                if(obj.labelArr){
                  $this.labelArr = obj.labelArr;
                }
                if(obj.baseCommentName){
                  $this.baseCommentName = obj.baseCommentName;
                }
                if(obj.type){
                  $this.type = obj.type;
                }
              }
              para.nStep = 'showModules';
              ++dbFlag;
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                'backText','titleText','finishButton','labelInput','placeholderInput'
              ];
              $this.showSubModule(refId,true,function(){
                para.nStep = 'forceUpdateData';
                if(++dbFlag === 2){
                  $this.startModule(obj,successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'forceUpdateData':
              $this.forceUpdateData(function(){
                para.nStep = 'startModule_back';
                if(++dbFlag === 2){
                  $this.startModule(obj,successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_back':
              $this.sm[ref.sm1].startModule(function(){
                para.nStep = 'startModule_title';
                if(++dbFlag === 2){
                  $this.startModule(obj,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)});
              break;
            case 'startModule_title':
              $this.sm[ref.sm2].startModule(function(){
                para.nStep = 'startModule_finish';
                if(++dbFlag === 2){
                  $this.startModule(obj,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)});
              break;
            case 'startModule_finish':
              $this.sm[ref.sm3].startModule(function(){
                para.nStep = 'startModule_label';
                if(++dbFlag === 2){
                  $this.startModule(obj,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)});
              break;
            case 'startModule_label':
              $this.sm[ref.sm4].startModule(function(){
                para.nStep = 'startModule_placeholder';
                if(++dbFlag === 2){
                  $this.startModule(obj,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)});
              break;
            case 'startModule_placeholder':
              $this.sm[ref.sm5].startModule(function(){
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.startModule(obj,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)});
              break;
            case 'end':
              para.successCallBack('success');
              return;
            default:
              para.errorCallBack('error');
              return;
          }
          if(++dbFlag === 1){
            return
          }
        }
      },
      saveData:function(){
        //检查数据是否为空
        this.checkRequiredData(function(){},function(error){console.log(error)});
      },
      checkRequiredData:function(successCallBack,errorCallBack){
        let $this = this;
        let para = {
          successCallBack:successCallBack,
          errorCallBack:errorCallBack,
          nStep:0
        }
        let dbFlag;

        if(successCallBack !== null){
          errorCallBack = para;
          successCallBack = null;
        }
        para = errorCallBack;

        while(1){
          dbFlag = 0;
          switch(para.nStep){
            case 0:
              //判断填写信息格式和必填项
              para.errorText = '';
              //不能同名
              if(!$this.labelName){
                para.errorText = '表单名不能为空';
              }else{
                if($this.formIndex || $this.formIndex === 0){
                  for(let i = 0;i < $this.labelArr.length;i++){
                    if($this.labelArr[i] === $this.labelName && $this.formIndex !== i - 2){
                      para.errorText = '表单名已存在';
                      break;
                    }
                  }
                }else{
                  if($this.labelArr.includes($this.labelName)){
                    para.errorText = '表单名已存在';
                  }
                }
              }
              if(para.errorText){
                Dialog.alert({
                  message: para.errorText
                }).then(() => {
                  // on close
                });
                para.nStep = 'error';
              }else{
                para.nStep = 'end';
              }
              ++dbFlag;
              break;
            case 'end':
              let ticketObj = {
                index:$this.formIndex,
                label:$this.labelName,
                placeholder:$this.placeholderValue,
                baseCommentName:$this.baseCommentName,
                type:$this.type,
              };
              $this.hideSelfModule($this.refId,function(){
                $this.ep.confirmEvent(ticketObj);
              },function(error){console.log(error)});
              para.successCallBack('success');
              return;
            case 'error':
              return;
            default:
              para.errorCallBack('success');
              return;
          }
          if(++dbFlag === 1){
            return
          }
        }
      },
      hideModule:function(){
        let $this = this;
        $this.hideSelfModule($this.refId,function(){
        },function(error){console.log(error)});
      },
      backText_textClickEvent:function(){
        this.hideModule();
      },
      finishButton_buttonClickEvent:function(){
        this.saveData();
      },
    },
  };
</script>
<style lang="less" scoped>
    @import '../../../../../../assets/var_sq';
  .mcbInputFormDialog_container {
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    z-index:1000;
  }
  .mcbInputFormDialog_row {
    display:flex;
    /*flex:1;*/
  }
  .mcbInputFormDialog_col {
    display:flex;
    flex-direction:column;
  }
  .mcbInputFormDialog_row_mcbInputFormDialogRow{
    height:100%;
  }
  .mcbInputFormDialog_col_mcbInputFormDialogWindow_size_medium {
    width:@mcbInputFormDialog-mcbInputFormDialogWindow-medium-width;
  }
  .mcbInputFormDialog_col_mcbInputFormDialogWindow {
    background-color:mix(@mcbInputFormDialog-mcbInputFormDialogWindow-background-color,#fff,@mcbInputFormDialog-mcbInputFormDialogWindow-background-color-opacity);
  }
  .mcbInputFormDialog_col_r1c1_size_medium {
    width:@mcbInputFormDialog-r1c1-medium-width;
    height:@mcbInputFormDialog-r1c1-medium-height;
    padding:@mcbInputFormDialog-r1c1-medium-padding;
  }
  .mcbInputFormDialog_col_r1c1 {
    background-color:mix(@mcbInputFormDialog-r1c1-background-color,#fff,@mcbInputFormDialog-r1c1-background-color-opacity);
    position:fixed;
    top:0;
    left:0;
    width:100%;
    box-sizing:border-box;
  }
  .mcbInputFormDialog_col_r1_1c1_size_medium {
    width:@mcbInputFormDialog-r1_1c1-medium-width;
    height:@mcbInputFormDialog-r1_1c1-medium-height;
  }
  .mcbInputFormDialog_col_r1_1c2_size_medium {
    width:@mcbInputFormDialog-r1_1c2-medium-width;
    height:@mcbInputFormDialog-r1_1c2-medium-height;
  }
  .mcbInputFormDialog_col_r1_1c3_size_medium {
    width:@mcbInputFormDialog-r1_1c3-medium-width;
    height:@mcbInputFormDialog-r1_1c3-medium-height;
    align-items:@mcbInputFormDialog-r1_1c3-medium-horizontal-position;
    justify-content:center;
    box-sizing:border-box;
  }
  .mcbInputFormDialog_col_r2c1_size_medium {
    width:@mcbInputFormDialog-r2c1-medium-width;
    height:@mcbInputFormDialog-r2c1-medium-height;
    margin:@mcbInputFormDialog-r2c1-medium-margin;
  }
  .mcbInputFormDialog_col_r2c1 {
    background-color:mix(@mcbInputFormDialog-r2c1-background-color,#fff,@mcbInputFormDialog-r2c1-background-color-opacity);
  }
  .mcbInputFormDialog_col_r2_1c1_size_medium {
    width:@mcbInputFormDialog-r2_1c1-medium-width;
    height:@mcbInputFormDialog-r2_1c1-medium-height;
    justify-content:@mcbInputFormDialog-r2_1c1-medium-vertical-position;
    padding:@mcbInputFormDialog-r2_1c1-medium-padding;
  }
  .mcbInputFormDialog_col_r2_1c1 {
    border-style:@mcbInputFormDialog-r2_1c1-border-style;
    border-width:@mcbInputFormDialog-r2_1c1-border-width;
    border-radius:@mcbInputFormDialog-r2_1c1-border-radius;
    border-color:mix(@mcbInputFormDialog-r2_1c1-border-color,#fff,@mcbInputFormDialog-r2_1c1-hover-border-color-opacity);
  }
  .mcbInputFormDialog_col_r2_2c1_size_medium {
    width:@mcbInputFormDialog-r2_2c1-medium-width;
    height:@mcbInputFormDialog-r2_2c1-medium-height;
    justify-content:@mcbInputFormDialog-r2_2c1-medium-vertical-position;
    padding:@mcbInputFormDialog-r2_2c1-medium-padding;
  }
  .mcbInputFormDialog_col_r2_2c1 {
    border-style:@mcbInputFormDialog-r2_2c1-border-style;
    border-width:@mcbInputFormDialog-r2_2c1-border-width;
    border-radius:@mcbInputFormDialog-r2_2c1-border-radius;
    border-color:mix(@mcbInputFormDialog-r2_2c1-border-color,#fff,@mcbInputFormDialog-r2_2c1-hover-border-color-opacity);
  }
</style>
