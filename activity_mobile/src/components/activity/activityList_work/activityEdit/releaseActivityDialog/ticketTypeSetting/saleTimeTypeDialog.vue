<template>
  <div class="maskClass">
    <div :class="{mcbSaleTypeDia_col:true,mcbSaleTypeDia_col_mcbSaleTypeDiaWindow:true,mcbSaleTypeDia_col_mcbSaleTypeDiaWindow_size_large:attr.size==='large',mcbSaleTypeDia_col_mcbSaleTypeDiaWindow_size_medium:attr.size==='medium',mcbSaleTypeDia_col_mcbSaleTypeDiaWindow_size_small:attr.size==='small',mcbSaleTypeDia_col_mcbSaleTypeDiaWindow_size_min:attr.size==='min',mcbSaleTypeDia_col_mcbSaleTypeDiaWindow_checked:attr.checked,mcbSaleTypeDia_col_mcbSaleTypeDiaWindow_disable:attr.disabled}">

      <div class="mcbSaleTypeDia_row mcbSaleTypeDia_row_row1">
        <div :class="{mcbSaleTypeDia_col:true,mcbSaleTypeDia_col_r1c1:true,mcbSaleTypeDia_col_r1c1_size_large:attr.size==='large',mcbSaleTypeDia_col_r1c1_size_medium:attr.size==='medium',mcbSaleTypeDia_col_r1c1_size_small:attr.size==='small',mcbSaleTypeDia_col_r1c1_size_min:attr.size==='min',mcbSaleTypeDia_col_r1c1_checked:attr.checked,mcbSaleTypeDia_col_r1c1_disable:attr.disabled}">

          <lm2b-button
                  ref="button1"
                  refId="button1"
                  v-show="pvt_isShow.r1c1 === 'button1'"
                  :paraVarPair="pvt_r1c1.button1.paraVarPair"
                  :para="pvt_r1c1.button1.para"
                  :attr="pvt_r1c1.button1.attr">
          </lm2b-button>
        </div>
      </div>
      <div class="mcbSaleTypeDia_row mcbSaleTypeDia_row_row2">
        <div :class="{mcbSaleTypeDia_col:true,mcbSaleTypeDia_col_r2c1:true,mcbSaleTypeDia_col_r2c1_size_large:attr.size==='large',mcbSaleTypeDia_col_r2c1_size_medium:attr.size==='medium',mcbSaleTypeDia_col_r2c1_size_small:attr.size==='small',mcbSaleTypeDia_col_r2c1_size_min:attr.size==='min',mcbSaleTypeDia_col_r2c1_checked:attr.checked,mcbSaleTypeDia_col_r2c1_disable:attr.disabled}">

          <lm2b-button
                  ref="button2"
                  refId="button2"
                  v-show="pvt_isShow.r2c1 === 'button2'"
                  :paraVarPair="pvt_r2c1.button2.paraVarPair"
                  :para="pvt_r2c1.button2.para"
                  :attr="pvt_r2c1.button2.attr">
          </lm2b-button>
        </div>
      </div>
      <div class="mcbSaleTypeDia_row mcbSaleTypeDia_row_row3">
        <div :class="{mcbSaleTypeDia_col:true,mcbSaleTypeDia_col_r3c1:true,mcbSaleTypeDia_col_r3c1_size_large:attr.size==='large',mcbSaleTypeDia_col_r3c1_size_medium:attr.size==='medium',mcbSaleTypeDia_col_r3c1_size_small:attr.size==='small',mcbSaleTypeDia_col_r3c1_size_min:attr.size==='min',mcbSaleTypeDia_col_r3c1_checked:attr.checked,mcbSaleTypeDia_col_r3c1_disable:attr.disabled}">

          <lm2b-button
                  ref="button3"
                  refId="button3"
                  v-show="pvt_isShow.r3c1 === 'button3'"
                  :paraVarPair="pvt_r3c1.button3.paraVarPair"
                  :para="pvt_r3c1.button3.para"
                  :attr="pvt_r3c1.button3.attr">
          </lm2b-button>
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
          vessel:['r1c1','r2c1','r3c1'],
          subModule:['button1','button2','button3'],
        },
        pvt_isShow: {
          r1c1:null,
          r2c1:null,
          r3c1:null,
        },
        pvt_eventPortInput: ['typeChangeEvent'],
      };
    },
    watch: {
    },
    computed:{
      pvt_r1c1:function(){
        return {
          button1:{
            paraVarPair:{
            },
            para:{
              name:['活动结束前均可报名'],
            },
            attr:{
              type:'text',
              long:true,
              height:'50px',
            },
          },
        };
      },
      pvt_r2c1:function(){
        return {
          button2:{
            paraVarPair:{
            },
            para:{
              name:['自定义售票时间'],
            },
            attr:{
              type:'text',
              long:true,
              height:'50px',
            },
          },
        };
      },
      pvt_r3c1:function(){
        return {
          button3:{
            paraVarPair:{
            },
            para:{
              name:['取消'],
            },
            attr:{
              type:'text',
              long:true,
              round:true,
              height:'50px',
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
        let $this = this;
        let para = {
          successCallBack:successCallBack,
          errorCallBack:errorCallBack,
          nStep:0
        }
        let dbFlag;
        let ref = {
          sm1:'button1',
          sm2:'button2',
          sm3:'button3'
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
              para.nStep = 'showModules';
              ++dbFlag;
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                'button1','button2','button3'
              ];
              $this.showSubModule(refId,true,function(){
                para.nStep = 'forceUpdateData';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
            case 'forceUpdateData':
              $this.forceUpdateData(function(){
                para.nStep = 'startModule_button1';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_button1':
              $this.sm[ref.sm1].startModule(function(){
                para.nStep = 'startModule_button2';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_button2':
              $this.sm[ref.sm2].startModule(function(){
                para.nStep = 'startModule_button3';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_button3':
              $this.sm[ref.sm3].startModule(function(){
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
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
      button1Click:function(){
        let $this = this;
        $this.hideSelfModule($this.refId,function(){
          $this.ep.typeChangeEvent(0);
        },function(error){console.log(error)});
      },
      button2Click:function(){
        let $this = this;
        $this.hideSelfModule($this.refId,function(){
          $this.ep.typeChangeEvent(1);
        },function(error){console.log(error)});
      },
      hideDialog:function(){
        let $this = this;
        $this.hideSelfModule($this.refId,function(){
        },function(error){console.log(error)});
      },
      button1_buttonClickEvent:function(){
        this.button1Click();
      },
      button2_buttonClickEvent:function(){
        this.button2Click();
      },
      button3_buttonClickEvent:function(){
        this.hideDialog();
      },
    },
  };
</script>
<style lang="less" scoped>
    @import '../../../../../../assets/var_sq';
  .maskClass{
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    z-index:1000;
    background:rgba(0,0,0,0.6);
  }
  .mcbSaleTypeDia_container {
  }
  .mcbSaleTypeDia_row {
    display:flex;
    /*flex:1;*/
  }
  .mcbSaleTypeDia_col {
    display:flex;
    flex-direction:column;
  }
  .mcbSaleTypeDia_col_mcbSaleTypeDiaWindow{
    position:fixed;
    bottom:0;
    left:0;
    box-sizing:border-box;
  }
  .mcbSaleTypeDia_col_mcbSaleTypeDiaWindow_size_medium {
    width:@mcbSaleTypeDia-mcbSaleTypeDiaWindow-medium-width;
    height:@mcbSaleTypeDia-mcbSaleTypeDiaWindow-medium-height;
    padding:@mcbSaleTypeDia-mcbSaleTypeDiaWindow-medium-padding;
  }
  .mcbSaleTypeDia_col_r1c1_size_medium {
    width:@mcbSaleTypeDia-r1c1-medium-width;
    height:@mcbSaleTypeDia-r1c1-medium-height;
  }
  .mcbSaleTypeDia_col_r1c1 {
    border-radius:@mcbSaleTypeDia-r1c1-border-radius;
    background:#fff;
    opacity:1;
  }
  .mcbSaleTypeDia_col_r2c1_size_medium {
    width:@mcbSaleTypeDia-r2c1-medium-width;
    height:@mcbSaleTypeDia-r2c1-medium-height;
  }
  .mcbSaleTypeDia_col_r2c1 {
    border-radius:@mcbSaleTypeDia-r2c1-border-radius;
    background:#fff;
  }
  .mcbSaleTypeDia_col_r3c1_size_medium {
    width:@mcbSaleTypeDia-r3c1-medium-width;
    height:@mcbSaleTypeDia-r3c1-medium-height;
    padding:@mcbSaleTypeDia-r3c1-medium-padding;
    margin:@mcbSaleTypeDia-r3c1-medium-margin;
    border-radius:5px;
    background:#fff;
  }
</style>
