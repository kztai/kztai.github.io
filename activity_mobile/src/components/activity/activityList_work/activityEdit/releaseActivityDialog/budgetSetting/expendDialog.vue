<template>
  <div class="mcbBudgetExpendDialog_container">
    <div class="mcbBudgetExpendDialog_row mcbBudgetExpendDialog_row_mcbBudgetExpendDialogRow">
      <div :class="{mcbBudgetExpendDialog_col:true,mcbBudgetExpendDialog_col_mcbBudgetExpendDialogWindow:true,mcbBudgetExpendDialog_col_mcbBudgetExpendDialogWindow_size_large:attr.size==='large',mcbBudgetExpendDialog_col_mcbBudgetExpendDialogWindow_size_medium:attr.size==='medium',mcbBudgetExpendDialog_col_mcbBudgetExpendDialogWindow_size_small:attr.size==='small',mcbBudgetExpendDialog_col_mcbBudgetExpendDialogWindow_size_min:attr.size==='min',mcbBudgetExpendDialog_col_mcbBudgetExpendDialogWindow_checked:attr.checked,mcbBudgetExpendDialog_col_mcbBudgetExpendDialogWindow_disable:attr.disabled}">

        <div class="mcbBudgetExpendDialog_row mcbBudgetExpendDialog_row_row1">
          <div :class="{mcbBudgetExpendDialog_col:true,mcbBudgetExpendDialog_col_r1c1:true,mcbBudgetExpendDialog_col_r1c1_size_large:attr.size==='large',mcbBudgetExpendDialog_col_r1c1_size_medium:attr.size==='medium',mcbBudgetExpendDialog_col_r1c1_size_small:attr.size==='small',mcbBudgetExpendDialog_col_r1c1_size_min:attr.size==='min',mcbBudgetExpendDialog_col_r1c1_checked:attr.checked,mcbBudgetExpendDialog_col_r1c1_disable:attr.disabled}">

            <div class="mcbBudgetExpendDialog_row mcbBudgetExpendDialog_row_row2">
              <div :class="{mcbBudgetExpendDialog_col:true,mcbBudgetExpendDialog_col_r1_1c1:true,mcbBudgetExpendDialog_col_r1_1c1_size_large:attr.size==='large',mcbBudgetExpendDialog_col_r1_1c1_size_medium:attr.size==='medium',mcbBudgetExpendDialog_col_r1_1c1_size_small:attr.size==='small',mcbBudgetExpendDialog_col_r1_1c1_size_min:attr.size==='min',mcbBudgetExpendDialog_col_r1_1c1_checked:attr.checked,mcbBudgetExpendDialog_col_r1_1c1_disable:attr.disabled}">

                <lm2b-link-text
                        ref="backText"
                        refId="backText"
                        v-show="pvt_isShow.r1_1c1 === 'backText'"
                        :paraVarPair="pvt_r1_1c1.backText.paraVarPair"
                        :para="pvt_r1_1c1.backText.para"
                        :attr="pvt_r1_1c1.backText.attr">
                </lm2b-link-text>
              </div>
              <div :class="{mcbBudgetExpendDialog_col:true,mcbBudgetExpendDialog_col_r1_1c2:true,mcbBudgetExpendDialog_col_r1_1c2_size_large:attr.size==='large',mcbBudgetExpendDialog_col_r1_1c2_size_medium:attr.size==='medium',mcbBudgetExpendDialog_col_r1_1c2_size_small:attr.size==='small',mcbBudgetExpendDialog_col_r1_1c2_size_min:attr.size==='min',mcbBudgetExpendDialog_col_r1_1c2_checked:attr.checked,mcbBudgetExpendDialog_col_r1_1c2_disable:attr.disabled}">

                <lm2b-link-text
                        ref="titleText"
                        refId="titleText"
                        v-show="pvt_isShow.r1_1c2 === 'titleText'"
                        :paraVarPair="pvt_r1_1c2.titleText.paraVarPair"
                        :para="pvt_r1_1c2.titleText.para"
                        :attr="pvt_r1_1c2.titleText.attr">
                </lm2b-link-text>
              </div>
              <div :class="{mcbBudgetExpendDialog_col:true,mcbBudgetExpendDialog_col_r1_1c3:true,mcbBudgetExpendDialog_col_r1_1c3_size_large:attr.size==='large',mcbBudgetExpendDialog_col_r1_1c3_size_medium:attr.size==='medium',mcbBudgetExpendDialog_col_r1_1c3_size_small:attr.size==='small',mcbBudgetExpendDialog_col_r1_1c3_size_min:attr.size==='min',mcbBudgetExpendDialog_col_r1_1c3_checked:attr.checked,mcbBudgetExpendDialog_col_r1_1c3_disable:attr.disabled}">

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
        <div class="mcbBudgetExpendDialog_row mcbBudgetExpendDialog_row_row3">
          <div :class="{mcbBudgetExpendDialog_col:true,mcbBudgetExpendDialog_col_r2c1:true,mcbBudgetExpendDialog_col_r2c1_size_large:attr.size==='large',mcbBudgetExpendDialog_col_r2c1_size_medium:attr.size==='medium',mcbBudgetExpendDialog_col_r2c1_size_small:attr.size==='small',mcbBudgetExpendDialog_col_r2c1_size_min:attr.size==='min',mcbBudgetExpendDialog_col_r2c1_checked:attr.checked,mcbBudgetExpendDialog_col_r2c1_disable:attr.disabled}">

            <div class="mcbBudgetExpendDialog_row mcbBudgetExpendDialog_row_row4">
              <div :class="{mcbBudgetExpendDialog_col:true,mcbBudgetExpendDialog_col_r2_1c1:true,mcbBudgetExpendDialog_col_r2_1c1_size_large:attr.size==='large',mcbBudgetExpendDialog_col_r2_1c1_size_medium:attr.size==='medium',mcbBudgetExpendDialog_col_r2_1c1_size_small:attr.size==='small',mcbBudgetExpendDialog_col_r2_1c1_size_min:attr.size==='min',mcbBudgetExpendDialog_col_r2_1c1_checked:attr.checked,mcbBudgetExpendDialog_col_r2_1c1_disable:attr.disabled}">

                <lm2b-input-text
                        ref="nameInput"
                        refId="nameInput"
                        v-show="pvt_isShow.r2_1c1 === 'nameInput'"
                        :paraVarPair="pvt_r2_1c1.nameInput.paraVarPair"
                        :para="pvt_r2_1c1.nameInput.para"
                        :attr="pvt_r2_1c1.nameInput.attr">
                </lm2b-input-text>
              </div>
            </div>
            <div class="mcbBudgetExpendDialog_row mcbBudgetExpendDialog_row_row5">
              <div :class="{mcbBudgetExpendDialog_col:true,mcbBudgetExpendDialog_col_r2_2c1:true,mcbBudgetExpendDialog_col_r2_2c1_size_large:attr.size==='large',mcbBudgetExpendDialog_col_r2_2c1_size_medium:attr.size==='medium',mcbBudgetExpendDialog_col_r2_2c1_size_small:attr.size==='small',mcbBudgetExpendDialog_col_r2_2c1_size_min:attr.size==='min',mcbBudgetExpendDialog_col_r2_2c1_checked:attr.checked,mcbBudgetExpendDialog_col_r2_2c1_disable:attr.disabled}">

                <lm2b-input-text
                        ref="expendInput"
                        refId="expendInput"
                        v-show="pvt_isShow.r2_2c1 === 'expendInput'"
                        :paraVarPair="pvt_r2_2c1.expendInput.paraVarPair"
                        :para="pvt_r2_2c1.expendInput.para"
                        :attr="pvt_r2_2c1.expendInput.attr">
                </lm2b-input-text>
              </div>
            </div>
            <div class="mcbBudgetExpendDialog_row mcbBudgetExpendDialog_row_row6">
              <div :class="{mcbBudgetExpendDialog_col:true,mcbBudgetExpendDialog_col_r2_3c1:true,mcbBudgetExpendDialog_col_r2_3c1_size_large:attr.size==='large',mcbBudgetExpendDialog_col_r2_3c1_size_medium:attr.size==='medium',mcbBudgetExpendDialog_col_r2_3c1_size_small:attr.size==='small',mcbBudgetExpendDialog_col_r2_3c1_size_min:attr.size==='min',mcbBudgetExpendDialog_col_r2_3c1_checked:attr.checked,mcbBudgetExpendDialog_col_r2_3c1_disable:attr.disabled}">

                <lm2b-input-text
                        ref="unitInput"
                        refId="unitInput"
                        v-show="pvt_isShow.r2_3c1 === 'unitInput'"
                        :paraVarPair="pvt_r2_3c1.unitInput.paraVarPair"
                        :para="pvt_r2_3c1.unitInput.para"
                        :attr="pvt_r2_3c1.unitInput.attr">
                </lm2b-input-text>
              </div>
            </div>
            <div class="mcbBudgetExpendDialog_row mcbBudgetExpendDialog_row_row7">
              <div :class="{mcbBudgetExpendDialog_col:true,mcbBudgetExpendDialog_col_r2_4c1:true,mcbBudgetExpendDialog_col_r2_4c1_size_large:attr.size==='large',mcbBudgetExpendDialog_col_r2_4c1_size_medium:attr.size==='medium',mcbBudgetExpendDialog_col_r2_4c1_size_small:attr.size==='small',mcbBudgetExpendDialog_col_r2_4c1_size_min:attr.size==='min',mcbBudgetExpendDialog_col_r2_4c1_checked:attr.checked,mcbBudgetExpendDialog_col_r2_4c1_disable:attr.disabled}">

                <lm2b-input-text
                        ref="remarkInput"
                        refId="remarkInput"
                        v-show="pvt_isShow.r2_4c1 === 'remarkInput'"
                        :paraVarPair="pvt_r2_4c1.remarkInput.paraVarPair"
                        :para="pvt_r2_4c1.remarkInput.para"
                        :attr="pvt_r2_4c1.remarkInput.attr">
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
          vessel:['r1_1c1','r1_1c2','r1_1c3','r2_1c1','r2_2c1','r2_4c1','r2_3c1'],
          subModule:['backText','titleText','finishButton','nameInput','expendInput','remarkInput','unitInput'],
        },
        pvt_isShow: {
          r1_1c1:null,
          r1_1c2:null,
          r1_1c3:null,
          r2_1c1:null,
          r2_2c1:null,
          r2_4c1:null,
          r2_3c1:null,
        },
        pvt_eventPortInput: ['confirmEvent'],

        name:null,
        amount:null,
        remark:null,
        unit:null,
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
              textData:'支出和备注',
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
          nameInput:{
            paraVarPair:{
              text:'name',
            },
            para:{
              text:this.name,
            },
            attr:{
              placeholder:'请输入预算名称',
              isPlaceholder:false,
            },
          },
        };
      },
      pvt_r2_2c1:function(){
        return {
          expendInput:{
            paraVarPair:{
              text:'amount',
            },
            para:{
              text:this.amount,
            },
            attr:{
              placeholder:'预算支出',
              isPlaceholder:false,
            },
          },
        };
      },
      pvt_r2_4c1:function(){
        return {
          remarkInput:{
            paraVarPair:{
              text:'remark',
            },
            para:{
              text:this.remark,
            },
            attr:{
              placeholder:'备注',
              isPlaceholder:false,
            },
          },
        };
      },
      pvt_r2_3c1:function(){
        return {
          unitInput:{
            paraVarPair:{
              text:'unit',
            },
            para:{
              text:this.unit,
            },
            attr:{
              placeholder:'请输入费用单位',
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
      startModule:function(obj,nameArr,successCallBack,errorCallBack){
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
              // 初始化数据
              $this.name = '';
              $this.amount = '';
              $this.remark = '';
              $this.unit = '';
              $this.index = null;
              $this.nameArr = null;
              if(obj){
                if(obj.index || obj.index === 0){
                  $this.index = obj.index;
                }
                if(obj.name){
                  $this.name = obj.name;
                }
                if(obj.amount){
                  $this.amount = obj.amount;
                }
                if(obj.unit){
                  $this.unit = obj.unit;
                }
                if(obj.remark){
                  $this.remark = obj.remark;
                }
              }
              if(nameArr){
                $this.nameArr = nameArr;
              }
              para.nStep = 'showModules';
              ++dbFlag;
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                'backText','titleText','finishButton','nameInput','expendInput','remarkInput','unitInput'
              ];
              $this.showSubModule(refId,true,function(){
                para.nStep = 'startSubModules';
                if(++dbFlag === 2){
                  $this.startModule(obj,nameArr,successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startSubModules':
              //调用子组件startModule方法
              $this.startSubModules(function(){
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.startModule(obj,nameArr,successCallBack,errorCallBack);
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
      hideModule:function(){
        let $this = this;
        $this.hideSelfModule($this.refId,function(){
        },function(error){console.log(error)});
      },
      finishButtonClick:function(){
        let $this = this;
        let errorText = '';
        //名称不能为空或为重复
        if($this.name){
          for(let i = 0;i < $this.nameArr.length;i++){
            if(i !== $this.index && $this.nameArr[i] === $this.name){
              errorText = '预算项名已存在';
              break;
            }
          }
        }else{
          errorText = '预算项名不能为空';
        }
        if(!errorText){
          let amount = Number($this.amount);
          if(isNaN(amount)){
            errorText = '预算项费用为数值';
          }
        }
        if(errorText){
          Dialog.alert({
            message: errorText
          }).then(() => {
            // on close
          });
          return;
        }
        $this.hideSelfModule($this.refId,function(){
          let obj = {
            index:$this.index,
            name:$this.name,
            amount:$this.amount,
            unit:$this.unit,
            remark:$this.remark,
          };
          $this.ep.confirmEvent(obj);
        },function(error){console.log(error)});
      },
      startSubModules(successCallBack,errorCallBack){
        let $this = this;
        let para = {
          successCallBack: successCallBack,
          errorCallBack: errorCallBack,
          nStep: 0
        }
        let dbFlag;
        let ref = {
          sm1:'backText',
          sm2:'titleText',
          sm3:'finishButton',
          sm4:'nameInput',
          sm5:'expendInput',
          sm6:'remarkInput',
          sm7:'unitInput'
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
              para.nStep = 'forceUpdateData';
              ++dbFlag;
              break;
            case 'forceUpdateData':
              $this.forceUpdateData(function(){
                para.nStep = 'startModule_backText';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_backText':
              $this.sm[ref.sm1].startModule(function(){
                para.nStep = 'startModule_titleText';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_titleText':
              $this.sm[ref.sm2].startModule(function(){
                para.nStep = 'startModule_finishButton';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_finishButton':
              $this.sm[ref.sm3].startModule(function(){
                para.nStep = 'startModule_name';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_name':
              $this.sm[ref.sm4].startModule(function(){
                para.nStep = 'startModule_expend';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_expend':
              $this.sm[ref.sm5].startModule(function(){
                para.nStep = 'startModule_remark';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_remark':
              $this.sm[ref.sm6].startModule(function(){
                para.nStep = 'startModule_unit';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_unit':
              $this.sm[ref.sm7].startModule(function(){
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'end':
              para.successCallBack();
              return
          }
          if(++dbFlag === 1){
            return
          }
        }
      },
      backText_textClickEvent:function(){
        this.hideModule();
      },
      finishButton_buttonClickEvent:function(){
        this.finishButtonClick();
      },
    },
  };
</script>
<style lang="less" scoped>
    @import '../../../../../../assets/var_sq';
  .mcbBudgetExpendDialog_container {
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    z-index:1000;
  }
  .mcbBudgetExpendDialog_row {
    display:flex;
    /*flex:1;*/
  }
  .mcbBudgetExpendDialog_col {
    display:flex;
    flex-direction:column;
  }
  .mcbBudgetExpendDialog_row_mcbBudgetExpendDialogRow{
    height:100%;
  }
  .mcbBudgetExpendDialog_col_mcbBudgetExpendDialogWindow_size_medium {
    width:@mcbBudgetExpendDialog-mcbBudgetExpendDialogWindow-medium-width;
  }
  .mcbBudgetExpendDialog_col_mcbBudgetExpendDialogWindow {
    background-color:mix(@mcbBudgetExpendDialog-mcbBudgetExpendDialogWindow-background-color,#fff,@mcbBudgetExpendDialog-mcbBudgetExpendDialogWindow-background-color-opacity);
  }
  .mcbBudgetExpendDialog_col_r1c1_size_medium {
    width:@mcbBudgetExpendDialog-r1c1-medium-width;
    height:@mcbBudgetExpendDialog-r1c1-medium-height;
    padding:@mcbBudgetExpendDialog-r1c1-medium-padding;
  }
  .mcbBudgetExpendDialog_col_r1c1 {
    background-color:mix(@mcbBudgetExpendDialog-r1c1-background-color,#fff,@mcbBudgetExpendDialog-r1c1-background-color-opacity);
    position:fixed;
    top: 0;
    left:0;
    box-sizing:border-box;
  }
  .mcbBudgetExpendDialog_col_r1_1c1_size_medium {
    width:@mcbBudgetExpendDialog-r1_1c1-medium-width;
    height:@mcbBudgetExpendDialog-r1_1c1-medium-height;
  }
  .mcbBudgetExpendDialog_col_r1_1c2_size_medium {
    width:@mcbBudgetExpendDialog-r1_1c2-medium-width;
    height:@mcbBudgetExpendDialog-r1_1c2-medium-height;
  }
  .mcbBudgetExpendDialog_col_r1_1c3_size_medium {
    width:@mcbBudgetExpendDialog-r1_1c3-medium-width;
    height:@mcbBudgetExpendDialog-r1_1c3-medium-height;
    align-items:@mcbBudgetExpendDialog-r1_1c3-medium-horizontal-position;
    justify-content:@mcbBudgetExpendDialog-r1_1c3-medium-vertical-position;
  }
  .mcbBudgetExpendDialog_col_r2c1_size_medium {
    width:@mcbBudgetExpendDialog-r2c1-medium-width;
    height:@mcbBudgetExpendDialog-r2c1-medium-height;
    padding:@mcbBudgetExpendDialog-r2c1-medium-padding;
    margin:@mcbBudgetExpendDialog-r2c1-medium-margin;
  }
  .mcbBudgetExpendDialog_col_r2c1 {
    background-color:mix(@mcbBudgetExpendDialog-r2c1-background-color,#fff,@mcbBudgetExpendDialog-r2c1-background-color-opacity);
  }
  .mcbBudgetExpendDialog_col_r2_1c1_size_medium {
    width:@mcbBudgetExpendDialog-r2_1c1-medium-width;
    height:@mcbBudgetExpendDialog-r2_1c1-medium-height;
    justify-content:@mcbBudgetExpendDialog-r2_1c1-medium-vertical-position;
  }
  .mcbBudgetExpendDialog_col_r2_1c1 {
    border-style:@mcbBudgetExpendDialog-r2_1c1-border-style;
    border-width:@mcbBudgetExpendDialog-r2_1c1-border-width;
    border-color:mix(@mcbBudgetExpendDialog-r2_1c1-border-color,#fff,@mcbBudgetExpendDialog-r2_1c1-hover-border-color-opacity);
  }
  .mcbBudgetExpendDialog_col_r2_2c1_size_medium {
    width:@mcbBudgetExpendDialog-r2_2c1-medium-width;
    height:@mcbBudgetExpendDialog-r2_2c1-medium-height;
    justify-content:@mcbBudgetExpendDialog-r2_2c1-medium-vertical-position;
  }
  .mcbBudgetExpendDialog_col_r2_2c1 {
    border-style:@mcbBudgetExpendDialog-r2_2c1-border-style;
    border-width:@mcbBudgetExpendDialog-r2_2c1-border-width;
    border-color:mix(@mcbBudgetExpendDialog-r2_2c1-border-color,#fff,@mcbBudgetExpendDialog-r2_2c1-hover-border-color-opacity);
  }
  .mcbBudgetExpendDialog_col_r2_3c1_size_medium {
    width:@mcbBudgetExpendDialog-r2_3c1-medium-width;
    height:@mcbBudgetExpendDialog-r2_3c1-medium-height;
    justify-content:@mcbBudgetExpendDialog-r2_3c1-medium-vertical-position;
  }
  .mcbBudgetExpendDialog_col_r2_4c1_size_medium {
    width:@mcbBudgetExpendDialog-r2_4c1-medium-width;
  }
</style>
