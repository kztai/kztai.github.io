<template>
  <div :class="{mcbBottomFeatureBar_col:true,mcbBottomFeatureBar_col_mcbBottomFeatureBarWindow:true,mcbBottomFeatureBar_col_mcbBottomFeatureBarWindow_size_large:attr.size==='large',mcbBottomFeatureBar_col_mcbBottomFeatureBarWindow_size_medium:attr.size==='medium',mcbBottomFeatureBar_col_mcbBottomFeatureBarWindow_size_small:attr.size==='small',mcbBottomFeatureBar_col_mcbBottomFeatureBarWindow_size_min:attr.size==='min',mcbBottomFeatureBar_col_mcbBottomFeatureBarWindow_checked:attr.checked,mcbBottomFeatureBar_col_mcbBottomFeatureBarWindow_disable:attr.disabled}">

    <div class="mcbBottomFeatureBar_row mcbBottomFeatureBar_row_row1">
      <div :class="{mcbBottomFeatureBar_col:true,mcbBottomFeatureBar_col_r1c1:true,mcbBottomFeatureBar_col_r1c1_size_large:attr.size==='large',mcbBottomFeatureBar_col_r1c1_size_medium:attr.size==='medium',mcbBottomFeatureBar_col_r1c1_size_small:attr.size==='small',mcbBottomFeatureBar_col_r1c1_size_min:attr.size==='min',mcbBottomFeatureBar_col_r1c1_checked:attr.checked,mcbBottomFeatureBar_col_r1c1_disable:attr.disabled}">

        <lm2b-button
                ref="saveDraftButton"
                refId="saveDraftButton"
                v-show="pvt_isShow.r1c1 === 'saveDraftButton'"
                :paraVarPair="pvt_r1c1.saveDraftButton.paraVarPair"
                :para="pvt_r1c1.saveDraftButton.para"
                :attr="pvt_r1c1.saveDraftButton.attr">
        </lm2b-button>
      </div>
      <div :class="{mcbBottomFeatureBar_col:true,mcbBottomFeatureBar_col_r1c2:true,mcbBottomFeatureBar_col_r1c2_size_large:attr.size==='large',mcbBottomFeatureBar_col_r1c2_size_medium:attr.size==='medium',mcbBottomFeatureBar_col_r1c2_size_small:attr.size==='small',mcbBottomFeatureBar_col_r1c2_size_min:attr.size==='min',mcbBottomFeatureBar_col_r1c2_checked:attr.checked,mcbBottomFeatureBar_col_r1c2_disable:attr.disabled}">

        <lm2b-button
                ref="previewButton"
                refId="previewButton"
                v-show="pvt_isShow.r1c2 === 'previewButton'"
                :paraVarPair="pvt_r1c2.previewButton.paraVarPair"
                :para="pvt_r1c2.previewButton.para"
                :attr="pvt_r1c2.previewButton.attr">
        </lm2b-button>
      </div>
      <div :class="{mcbBottomFeatureBar_col:true,mcbBottomFeatureBar_col_r1c3:true,mcbBottomFeatureBar_col_r1c3_size_large:attr.size==='large',mcbBottomFeatureBar_col_r1c3_size_medium:attr.size==='medium',mcbBottomFeatureBar_col_r1c3_size_small:attr.size==='small',mcbBottomFeatureBar_col_r1c3_size_min:attr.size==='min',mcbBottomFeatureBar_col_r1c3_checked:attr.checked,mcbBottomFeatureBar_col_r1c3_disable:attr.disabled}">

        <lm2b-button
                ref="releaseButton"
                refId="releaseButton"
                v-show="pvt_isShow.r1c3 === 'releaseButton'"
                :paraVarPair="pvt_r1c3.releaseButton.paraVarPair"
                :para="pvt_r1c3.releaseButton.para"
                :attr="pvt_r1c3.releaseButton.attr">
        </lm2b-button>
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
          vessel:['r1c1','r1c2','r1c3'],
          subModule:['saveDraftButton','previewButton','releaseButton'],
        },
        pvt_isShow: {
          r1c1:null,
          r1c2:null,
          r1c3:null,
        },
        pvt_eventPortInput: ['draftSaveEvent','detailPageEvent','issueEvent'],

      };
    },
    watch: {
    },
    computed:{
      pvt_r1c1:function(){
        return {
          saveDraftButton:{
            paraVarPair:{
            },
            para:{
              name:['存为草稿'],
            },
            attr:{
              type:'text',
              long:true,
              height:'50px',
            },
          },
        };
      },
      pvt_r1c2:function(){
        return {
          previewButton:{
            paraVarPair:{
            },
            para:{
              name:['预览'],
            },
            attr:{
              type:'text',
              long:true,
              height:'50px',
            },
          },
        };
      },
      pvt_r1c3:function(){
        return {
          releaseButton:{
            paraVarPair:{
            },
            para:{
              name:['发布'],
            },
            attr:{
              type:'primary',
              long:true,
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
          sm1:'saveDraftButton',
          sm2:'previewButton',
          sm3:'releaseButton'
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
                'saveDraftButton','previewButton','releaseButton'
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
      saveDraftButton_buttonClickEvent:function(){
        this.ep.draftSaveEvent();
      },
      previewButton_buttonClickEvent:function(){
        this.ep.detailPageEvent();
      },
      releaseButton_buttonClickEvent:function(){
        this.ep.issueEvent();
      },
    },
  };
</script>
<style lang="less" scoped>
    @import '../../../../assets/var_sq';
  .mcbBottomFeatureBar_container {
  }
  .mcbBottomFeatureBar_row {
    display:flex;
    flex:1;
  }
  .mcbBottomFeatureBar_col {
    display:flex;
    flex-direction:column;
  }
  .mcbBottomFeatureBar_col_mcbBottomFeatureBarWindow_size_medium {
    width:@mcbBottomFeatureBar-mcbBottomFeatureBarWindow-medium-width;
  }
  .mcbBottomFeatureBar_col_r1c1_size_medium {
    width:@mcbBottomFeatureBar-r1c1-medium-width;
    height:@mcbBottomFeatureBar-r1c1-medium-height;
    align-items:@mcbBottomFeatureBar-r1c1-medium-horizontal-position;
    justify-content:@mcbBottomFeatureBar-r1c1-medium-vertical-position;
  }
  .mcbBottomFeatureBar_col_r1c2_size_medium {
    width:@mcbBottomFeatureBar-r1c2-medium-width;
    height:@mcbBottomFeatureBar-r1c2-medium-height;
    align-items:@mcbBottomFeatureBar-r1c2-medium-horizontal-position;
    justify-content:@mcbBottomFeatureBar-r1c2-medium-vertical-position;
  }
  .mcbBottomFeatureBar_col_r1c3_size_medium {
    width:@mcbBottomFeatureBar-r1c3-medium-width;
    height:@mcbBottomFeatureBar-r1c3-medium-height;
    align-items:@mcbBottomFeatureBar-r1c3-medium-horizontal-position;
    justify-content:@mcbBottomFeatureBar-r1c3-medium-vertical-position;
  }
</style>
