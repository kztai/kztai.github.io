<template>
  <div :class="{mcbTitleBar_col:true,mcbTitleBar_col_mcbTitleBarWindow:true,mcbTitleBar_col_mcbTitleBarWindow_size_large:attr.size==='large',mcbTitleBar_col_mcbTitleBarWindow_size_medium:attr.size==='medium',mcbTitleBar_col_mcbTitleBarWindow_size_small:attr.size==='small',mcbTitleBar_col_mcbTitleBarWindow_size_min:attr.size==='min',mcbTitleBar_col_mcbTitleBarWindow_checked:attr.checked,mcbTitleBar_col_mcbTitleBarWindow_disable:attr.disabled}">

    <div class="mcbTitleBar_row mcbTitleBar_row_row1">
      <div :class="{mcbTitleBar_col:true,mcbTitleBar_col_r1c1:true,mcbTitleBar_col_r1c1_size_large:attr.size==='large',mcbTitleBar_col_r1c1_size_medium:attr.size==='medium',mcbTitleBar_col_r1c1_size_small:attr.size==='small',mcbTitleBar_col_r1c1_size_min:attr.size==='min',mcbTitleBar_col_r1c1_checked:attr.checked,mcbTitleBar_col_r1c1_disable:attr.disabled}">
        <lm2b-button
                ref="backButton"
                refId="backButton"
                v-show="pvt_isShow.r1c1 === 'backButton'"
                :paraVarPair="pvt_r1c1.backButton.paraVarPair"
                :para="pvt_r1c1.backButton.para"
                :attr="pvt_r1c1.backButton.attr">
        </lm2b-button>
      </div>
      <div :class="{mcbTitleBar_col:true,mcbTitleBar_col_r1c2:true,mcbTitleBar_col_r1c2_size_large:attr.size==='large',mcbTitleBar_col_r1c2_size_medium:attr.size==='medium',mcbTitleBar_col_r1c2_size_small:attr.size==='small',mcbTitleBar_col_r1c2_size_min:attr.size==='min',mcbTitleBar_col_r1c2_checked:attr.checked,mcbTitleBar_col_r1c2_disable:attr.disabled}">
        <lm2b-link-text
                ref="titleText"
                refId="titleText"
                v-show="pvt_isShow.r1c2 === 'titleText'"
                :paraVarPair="pvt_r1c2.titleText.paraVarPair"
                :para="pvt_r1c2.titleText.para"
                :attr="pvt_r1c2.titleText.attr">
        </lm2b-link-text>
      </div>
      <div :class="{mcbTitleBar_col:true,mcbTitleBar_col_r1c3:true,mcbTitleBar_col_r1c3_size_large:attr.size==='large',mcbTitleBar_col_r1c3_size_medium:attr.size==='medium',mcbTitleBar_col_r1c3_size_small:attr.size==='small',mcbTitleBar_col_r1c3_size_min:attr.size==='min',mcbTitleBar_col_r1c3_checked:attr.checked,mcbTitleBar_col_r1c3_disable:attr.disabled}">
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
          vessel:['r1c1','r1c2'],
          subModule:['backButton','titleText'],
        },
        pvt_isShow: {
          r1c1:null,
          r1c2:null,
        },
        pvt_eventPortInput: ['backEvent'],

      };
    },
    watch: {
    },
    computed:{
      pvt_r1c1:function(){
        return {
          backButton:{
            paraVarPair:{
            },
            para:{
              name:['返回','van-icon-arrow-left'],
            },
            attr:{
              type:'text',
              width:'80px',
            },
          },
        };
      },
      pvt_r1c2:function(){
        return {
          titleText:{
            paraVarPair:{
            },
            para:{
              textData:'发布活动',
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontWeight:true,
              height:'42px',
              color:'#000000',
              fontSize:'18px',
              background:'transparent'
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
          sm1:'backButton',
          sm2:'titleText'
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
              //显示子组件
              let refId = [
                'backButton','titleText'
              ];
              $this.showSubModule(refId,true,function(){
                para.nStep = 'forceUpdateData';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'forceUpdateData':
              $this.forceUpdateData(function(){
                para.nStep = 'startModule_button';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_button':
              $this.sm[ref.sm1].startModule(function(){
                para.nStep = 'startModule_text';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_text':
              $this.sm[ref.sm2].startModule(function(){
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
      backButton_buttonClickEvent:function(){
        this.ep.backEvent();
      },
    },
  };
</script>
<style lang="less" scoped>
    @import '../../../../assets/var_sq';
  .mcbTitleBar_row {
    display:flex;
    flex:1;
  }
  .mcbTitleBar_col {
    display:flex;
    flex-direction:column;
  }
  .mcbTitleBar_col_mcbTitleBarWindow_size_medium {
    width:@mcbTitleBar-mcbTitleBarWindow-medium-width;
  }
  .mcbTitleBar_col_r1c1_size_medium {
    width:@mcbTitleBar-r1c1-medium-width;
    height:@mcbTitleBar-r1c1-medium-height;
    align-items:@mcbTitleBar-r1c1-medium-horizontal-position;
    justify-content:@mcbTitleBar-r1c1-medium-vertical-position;
  }
  .mcbTitleBar_col_r1c2_size_medium {
    width:@mcbTitleBar-r1c2-medium-width;
    height:@mcbTitleBar-r1c2-medium-height;
    align-items:@mcbTitleBar-r1c2-medium-horizontal-position;
    justify-content:@mcbTitleBar-r1c2-medium-vertical-position;
  }
  .mcbTitleBar_col_r1c3_size_medium {
    width:@mcbTitleBar-r1c3-medium-width;
    height:@mcbTitleBar-r1c3-medium-height;
    align-items:@mcbTitleBar-r1c3-medium-horizontal-position;
    justify-content:@mcbTitleBar-r1c3-medium-vertical-position;
  }
</style>
