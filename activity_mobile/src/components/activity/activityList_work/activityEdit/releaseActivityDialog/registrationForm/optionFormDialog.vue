<template>
  <div class="mcbOptionFormDialog_container">
    <div class="mcbOptionFormDialog_row mcbOptionFormDialog_row_mcbOptionFormDialogRow">
      <div :class="{mcbOptionFormDialog_col:true,mcbOptionFormDialog_col_mcbOptionFormDialogWindow:true,mcbOptionFormDialog_col_mcbOptionFormDialogWindow_size_large:attr.size==='large',mcbOptionFormDialog_col_mcbOptionFormDialogWindow_size_medium:attr.size==='medium',mcbOptionFormDialog_col_mcbOptionFormDialogWindow_size_small:attr.size==='small',mcbOptionFormDialog_col_mcbOptionFormDialogWindow_size_min:attr.size==='min',mcbOptionFormDialog_col_mcbOptionFormDialogWindow_checked:attr.checked,mcbOptionFormDialog_col_mcbOptionFormDialogWindow_disable:attr.disabled}">

        <div class="mcbOptionFormDialog_row mcbOptionFormDialog_row_row1">
          <div :class="{mcbOptionFormDialog_col:true,mcbOptionFormDialog_col_r1c1:true,mcbOptionFormDialog_col_r1c1_size_large:attr.size==='large',mcbOptionFormDialog_col_r1c1_size_medium:attr.size==='medium',mcbOptionFormDialog_col_r1c1_size_small:attr.size==='small',mcbOptionFormDialog_col_r1c1_size_min:attr.size==='min',mcbOptionFormDialog_col_r1c1_checked:attr.checked,mcbOptionFormDialog_col_r1c1_disable:attr.disabled}">

            <div class="mcbOptionFormDialog_row mcbOptionFormDialog_row_row2">
              <div :class="{mcbOptionFormDialog_col:true,mcbOptionFormDialog_col_r1_1c1:true,mcbOptionFormDialog_col_r1_1c1_size_large:attr.size==='large',mcbOptionFormDialog_col_r1_1c1_size_medium:attr.size==='medium',mcbOptionFormDialog_col_r1_1c1_size_small:attr.size==='small',mcbOptionFormDialog_col_r1_1c1_size_min:attr.size==='min',mcbOptionFormDialog_col_r1_1c1_checked:attr.checked,mcbOptionFormDialog_col_r1_1c1_disable:attr.disabled}">

                <lm2b-link-text
                        ref="backText"
                        refId="backText"
                        v-show="pvt_isShow.r1_1c1 === 'backText'"
                        :paraVarPair="pvt_r1_1c1.backText.paraVarPair"
                        :para="pvt_r1_1c1.backText.para"
                        :attr="pvt_r1_1c1.backText.attr">
                </lm2b-link-text>
              </div>
              <div :class="{mcbOptionFormDialog_col:true,mcbOptionFormDialog_col_r1_1c2:true,mcbOptionFormDialog_col_r1_1c2_size_large:attr.size==='large',mcbOptionFormDialog_col_r1_1c2_size_medium:attr.size==='medium',mcbOptionFormDialog_col_r1_1c2_size_small:attr.size==='small',mcbOptionFormDialog_col_r1_1c2_size_min:attr.size==='min',mcbOptionFormDialog_col_r1_1c2_checked:attr.checked,mcbOptionFormDialog_col_r1_1c2_disable:attr.disabled}">

                <lm2b-link-text
                        ref="titleText"
                        refId="titleText"
                        v-show="pvt_isShow.r1_1c2 === 'titleText'"
                        :paraVarPair="pvt_r1_1c2.titleText.paraVarPair"
                        :para="pvt_r1_1c2.titleText.para"
                        :attr="pvt_r1_1c2.titleText.attr">
                </lm2b-link-text>
              </div>
              <div :class="{mcbOptionFormDialog_col:true,mcbOptionFormDialog_col_r1_1c3:true,mcbOptionFormDialog_col_r1_1c3_size_large:attr.size==='large',mcbOptionFormDialog_col_r1_1c3_size_medium:attr.size==='medium',mcbOptionFormDialog_col_r1_1c3_size_small:attr.size==='small',mcbOptionFormDialog_col_r1_1c3_size_min:attr.size==='min',mcbOptionFormDialog_col_r1_1c3_checked:attr.checked,mcbOptionFormDialog_col_r1_1c3_disable:attr.disabled}">

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
        <div class="mcbOptionFormDialog_row mcbOptionFormDialog_row_row3">
          <div :class="{mcbOptionFormDialog_col:true,mcbOptionFormDialog_col_r2c1:true,mcbOptionFormDialog_col_r2c1_size_large:attr.size==='large',mcbOptionFormDialog_col_r2c1_size_medium:attr.size==='medium',mcbOptionFormDialog_col_r2c1_size_small:attr.size==='small',mcbOptionFormDialog_col_r2c1_size_min:attr.size==='min',mcbOptionFormDialog_col_r2c1_checked:attr.checked,mcbOptionFormDialog_col_r2c1_disable:attr.disabled}">

            <div class="mcbOptionFormDialog_row mcbOptionFormDialog_row_row4">
              <div :class="{mcbOptionFormDialog_col:true,mcbOptionFormDialog_col_r2_1c1:true,mcbOptionFormDialog_col_r2_1c1_size_large:attr.size==='large',mcbOptionFormDialog_col_r2_1c1_size_medium:attr.size==='medium',mcbOptionFormDialog_col_r2_1c1_size_small:attr.size==='small',mcbOptionFormDialog_col_r2_1c1_size_min:attr.size==='min',mcbOptionFormDialog_col_r2_1c1_checked:attr.checked,mcbOptionFormDialog_col_r2_1c1_disable:attr.disabled}">

                <lm2b-input-text
                        ref="labelValue"
                        refId="labelValue"
                        v-show="pvt_isShow.r2_1c1 === 'labelValue'"
                        :paraVarPair="pvt_r2_1c1.labelValue.paraVarPair"
                        :para="pvt_r2_1c1.labelValue.para"
                        :attr="pvt_r2_1c1.labelValue.attr">
                </lm2b-input-text>
              </div>
            </div>
            <div class="mcbOptionFormDialog_row mcbOptionFormDialog_row_row5">
              <div :class="{mcbOptionFormDialog_col:true,mcbOptionFormDialog_col_r2_2c1:true,mcbOptionFormDialog_col_r2_2c1_size_large:attr.size==='large',mcbOptionFormDialog_col_r2_2c1_size_medium:attr.size==='medium',mcbOptionFormDialog_col_r2_2c1_size_small:attr.size==='small',mcbOptionFormDialog_col_r2_2c1_size_min:attr.size==='min',mcbOptionFormDialog_col_r2_2c1_checked:attr.checked,mcbOptionFormDialog_col_r2_2c1_disable:attr.disabled}">
                <mcb-option-form-row
                        ref="optionRow"
                        refId="optionRow"
                        v-show="pvt_isShow.r2_2c1 === 'optionRow'"
                        :paraVarPair="pvt_r2_2c1.optionRow.paraVarPair"
                        v-for="(item, index) in pvt_r2_2c1.optionRow.forData"
                        :number="index"
                        :para="item.para"
                        :attr="item.attr">
                </mcb-option-form-row>
              </div>
            </div>
            <div class="mcbOptionFormDialog_row mcbOptionFormDialog_row_row6">
              <div :class="{mcbOptionFormDialog_col:true,mcbOptionFormDialog_col_r2_3c1:true,mcbOptionFormDialog_col_r2_3c1_size_large:attr.size==='large',mcbOptionFormDialog_col_r2_3c1_size_medium:attr.size==='medium',mcbOptionFormDialog_col_r2_3c1_size_small:attr.size==='small',mcbOptionFormDialog_col_r2_3c1_size_min:attr.size==='min',mcbOptionFormDialog_col_r2_3c1_checked:attr.checked,mcbOptionFormDialog_col_r2_3c1_disable:attr.disabled}">

                <lm2b-link-text
                        ref="addIcon"
                        refId="addIcon"
                        v-show="pvt_isShow.r2_3c1 === 'addIcon'"
                        :paraVarPair="pvt_r2_3c1.addIcon.paraVarPair"
                        :para="pvt_r2_3c1.addIcon.para"
                        :attr="pvt_r2_3c1.addIcon.attr">
                </lm2b-link-text>
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
  import mcbOptionFormRow from './optionFormRow.vue';
  export default {
    components: {mcbOptionFormRow},
    inject: ['sys'],
    props: ['refId','para','attr','number'],
    data: function() {
      return {
        pvt_subModuleMap: {
          vessel:['r1_1c1','r1_1c2','r1_1c3','r2_1c1','r2_2c1','r2_3c1'],
          subModule:['backText','titleText','finishButton','labelValue','optionRow','addIcon'],
        },
        pvt_isShow: {
          r1_1c1:null,
          r1_1c2:null,
          r1_1c3:null,
          r2_1c1:null,
          r2_2c1:null,
          r2_3c1:null,
        },
        pvt_eventPortInput: ['confirmEvent'],
        titleValue:'单选问题',
        labelName:'',
        placeholderArr:[],
        valueArr:[],
        sizeArr:[],
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
              textData:'titleValue',
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
          labelValue:{
            paraVarPair:{
              text:'labelName',
            },
            para:{
              text:this.labelName,
            },
            attr:{
              placeholder:this.titleValue,
              isPlaceholder:false,
            },
          },
        };
      },
      pvt_r2_2c1:function(){
        let loopModule={
          optionRow:{
            para:{
              optionPlaceholder:this.placeholderArr,
              optionValue:this.valueArr,
            },
            attr:{
              size:this.sizeArr,
            },
          },
        };
        let forData = this.pvt_createForData(loopModule);
        return {
          optionRow:{
            paraVarPair:{
              optionPlaceholder:'placeholderArr',
              optionValue:'valueArr',
            },
            forData: forData.optionRow,
          },
        };
      },
      pvt_r2_3c1:function(){
        return {
          addIcon:{
            paraVarPair:{
            },
            para:{
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'center',
              height:'45px',
              color:'#12B0FF',
              fontSize:'20px',
              background:'transparent',
              icon:'van-icon-plus',
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
          sm4:'labelValue',
          sm5:'optionRow',
          sm6:'addIcon',
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
              $this.titleValue = '单选问题';
              $this.labelName = '';
              $this.placeholderArr = [];
              $this.valueArr = [];
              $this.sizeArr = [];
              $this.labelArr = [];
              $this.formIndex = null;
              $this.baseCommentName = '';
              if(obj){
                if(obj.title){
                  $this.titleValue = obj.title;
                }
                if(obj.label){
                  $this.labelName = obj.label;
                }
                if(obj.optionArr){
                  $this.valueArr = obj.optionArr;
                }else{
                  for(let i = 0;i < 3;i++){
                    $this.valueArr.push('');
                  }
                }
                if(obj.labelArr){
                  $this.labelArr = obj.labelArr;
                }
                if(obj.index || obj.index === 0){
                  $this.formIndex = obj.index;
                }
                if(obj.baseCommentName){
                  $this.baseCommentName = obj.baseCommentName;
                }
              }
              for(let i = 0;i < $this.valueArr.length;i++){
                $this.placeholderArr.push('选项' + (i + 1));
                $this.sizeArr.push('medium');
              }
              para.nStep = 'showModules';
              ++dbFlag;
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                'backText','titleText','finishButton','labelValue','optionRow','addIcon'
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
                para.nStep = 'startModule_row';
                if(++dbFlag === 2){
                  $this.startModule(obj,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)});
              break;
            case 'startModule_row':
              //循环组件
              let arr = [];
              for(let i = 0;i < $this.valueArr.length;i++){
                arr.push([function(){},function(error){console.log(error)}]);
              }
              $this.callLoopModuleMethod(ref.sm5,'startModule',arr,function(){
                para.nStep = 'startModule_add';
                if(++dbFlag === 2){
                  $this.startModule(obj,successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_add':
              $this.sm[ref.sm6].startModule(function(){
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
        //检查数据是否为空，重复
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
              if(!para.errorText){
                for(let i = 0;i < $this.valueArr.length;i++){
                  let valueOne = $this.valueArr[i];
                  if($this.valueArr.indexOf(valueOne,i + 1) > -1){
                    para.errorText = '选项不能有相同的';
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
              //数组需要转换
              let optionArr = [];
              for(let i = 0;i < $this.valueArr.length;i++){
                optionArr.push({
                  label:i,
                  text:$this.valueArr[i]
                });
              }
              let ticketObj = {
                index:$this.formIndex,
                label:$this.labelName,
                baseCommentName:$this.baseCommentName,
                optionArr:optionArr,
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
      deleteOption:function(index){
        //至少留有一种票
        let $this = this;
        if($this.valueArr.length <= 1){
          Dialog.alert({
            message: '至少有一个选项'
          }).then(() => {
            // on close
          });
        }else{
          $this.valueArr.splice(index,1);
          $this.sizeArr.splice(index,1);
          $this.placeholderArr = [];
          for(let i = 0;i < $this.valueArr.length;i++){
            $this.placeholderArr.push('选项' + (i + 1));
          }
          //刷新显示
          $this.forceUpdateData(function(){
            //循环组件
            let arr = [];
            for(let i = 0;i < $this.valueArr.length;i++){
              arr.push([function(){},function(error){console.log(error)}]);
            }
            $this.callLoopModuleMethod('optionRow','startModule',arr,function(){
            },function(error){console.log(error)});
          });
        }
      },
      addNewOption:function(){
        let $this = this;
        $this.valueArr.push('');
        $this.sizeArr.push('medium');
        $this.placeholderArr.push('选项' + $this.valueArr.length);
        //循环组件
        $this.forceUpdateData(function(){
          //循环组件
          let arr = [];
          for(let i = 0;i < $this.valueArr.length;i++){
            arr.push([function(){},function(error){console.log(error)}]);
          }
          $this.callLoopModuleMethod('optionRow','startModule',arr,function(){
          },function(error){console.log(error)});
        });
      },
      backText_textClickEvent:function(){
        this.hideModule();
      },
      finishButton_buttonClickEvent:function(){
        this.saveData();
      },
      optionRow_deleteOptionEvent:function(index){
        this.deleteOption(index);
      },
      addIcon_textClickEvent:function(){
        this.addNewOption();
      },
    },
  };
</script>
<style lang="less" scoped>
    @import '../../../../../../assets/var_sq';
  .mcbOptionFormDialog_container {
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    z-index:1000;
  }
  .mcbOptionFormDialog_row {
    display:flex;
    /*flex:1;*/
  }
  .mcbOptionFormDialog_col {
    display:flex;
    flex-direction:column;
  }
  .mcbOptionFormDialog_row_mcbOptionFormDialogRow{
    height:100%;
  }
  .mcbOptionFormDialog_col_mcbOptionFormDialogWindow_size_medium {
    width:@mcbOptionFormDialog-mcbOptionFormDialogWindow-medium-width;
  }
  .mcbOptionFormDialog_col_mcbOptionFormDialogWindow {
    background-color:mix(@mcbOptionFormDialog-mcbOptionFormDialogWindow-background-color,#fff,@mcbOptionFormDialog-mcbOptionFormDialogWindow-background-color-opacity);
  }
  .mcbOptionFormDialog_col_r1c1_size_medium {
    width:@mcbOptionFormDialog-r1c1-medium-width;
    height:@mcbOptionFormDialog-r1c1-medium-height;
    padding:@mcbOptionFormDialog-r1c1-medium-padding;
  }
  .mcbOptionFormDialog_col_r1c1 {
    background-color:mix(@mcbOptionFormDialog-r1c1-background-color,#fff,@mcbOptionFormDialog-r1c1-background-color-opacity);
    position:fixed;
    top:0;
    left:0;
    width:100%;
    box-sizing:border-box;
  }
  .mcbOptionFormDialog_col_r1_1c1_size_medium {
    width:@mcbOptionFormDialog-r1_1c1-medium-width;
    height:@mcbOptionFormDialog-r1_1c1-medium-height;
  }
  .mcbOptionFormDialog_col_r1_1c2_size_medium {
    width:@mcbOptionFormDialog-r1_1c2-medium-width;
    height:@mcbOptionFormDialog-r1_1c2-medium-height;
  }
  .mcbOptionFormDialog_col_r1_1c3_size_medium {
    width:@mcbOptionFormDialog-r1_1c3-medium-width;
    height:@mcbOptionFormDialog-r1_1c3-medium-height;
    align-items:@mcbOptionFormDialog-r1_1c3-medium-horizontal-position;
    justify-content:center;
  }
  .mcbOptionFormDialog_col_r2c1_size_medium {
    width:@mcbOptionFormDialog-r2c1-medium-width;
    margin:@mcbOptionFormDialog-r2c1-medium-margin;
  }
  .mcbOptionFormDialog_col_r2c1 {
    background-color:mix(@mcbOptionFormDialog-r2c1-background-color,#fff,@mcbOptionFormDialog-r2c1-background-color-opacity);
  }
  .mcbOptionFormDialog_col_r2_1c1_size_medium {
    width:@mcbOptionFormDialog-r2_1c1-medium-width;
    height:@mcbOptionFormDialog-r2_1c1-medium-height;
    padding:@mcbOptionFormDialog-r2_1c1-medium-padding;
    justify-content:@mcbOptionFormDialog-r2_1c1-medium-vertical-position;
  }
  .mcbOptionFormDialog_col_r2_1c1 {
    border-style:@mcbOptionFormDialog-r2_1c1-border-style;
    border-width:@mcbOptionFormDialog-r2_1c1-border-width;
    border-color:mix(@mcbOptionFormDialog-r2_1c1-border-color,#fff,@mcbOptionFormDialog-r2_1c1-hover-border-color-opacity);
  }
  .mcbOptionFormDialog_col_r2_2c1_size_medium {
    width:@mcbOptionFormDialog-r2_2c1-medium-width;
  }
  .mcbOptionFormDialog_col_r2_3c1_size_medium {
    width:@mcbOptionFormDialog-r2_3c1-medium-width;
    height:@mcbOptionFormDialog-r2_3c1-medium-height;
  }
</style>
