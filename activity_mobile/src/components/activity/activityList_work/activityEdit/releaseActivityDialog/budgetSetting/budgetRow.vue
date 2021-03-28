<template>
  <div class="mcbBudgetRow_container">
    <div class="mcbBudgetRow_row mcbBudgetRow_row_mcbBudgetRowRow">
      <div :class="{mcbBudgetRow_col:true,mcbBudgetRow_col_mcbBudgetRowWindow:true,mcbBudgetRow_col_mcbBudgetRowWindow_size_large:attr.size==='large',mcbBudgetRow_col_mcbBudgetRowWindow_size_medium:attr.size==='medium',mcbBudgetRow_col_mcbBudgetRowWindow_size_small:attr.size==='small',mcbBudgetRow_col_mcbBudgetRowWindow_size_min:attr.size==='min',mcbBudgetRow_col_mcbBudgetRowWindow_checked:attr.checked,mcbBudgetRow_col_mcbBudgetRowWindow_disable:attr.disabled}">

        <div class="mcbBudgetRow_row mcbBudgetRow_row_row1">
          <div :class="{mcbBudgetRow_col:true,mcbBudgetRow_col_r1c1:true,mcbBudgetRow_col_r1c1_size_large:attr.size==='large',mcbBudgetRow_col_r1c1_size_medium:attr.size==='medium',mcbBudgetRow_col_r1c1_size_small:attr.size==='small',mcbBudgetRow_col_r1c1_size_min:attr.size==='min',mcbBudgetRow_col_r1c1_checked:attr.checked,mcbBudgetRow_col_r1c1_disable:attr.disabled}">

            <lm2b-link-text
                    ref="deleteIcon"
                    refId="deleteIcon"
                    v-show="pvt_isShow.r1c1 === 'deleteIcon'"
                    :paraVarPair="pvt_r1c1.deleteIcon.paraVarPair"
                    :para="pvt_r1c1.deleteIcon.para"
                    :attr="pvt_r1c1.deleteIcon.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbBudgetRow_col:true,mcbBudgetRow_col_r1c2:true,mcbBudgetRow_col_r1c2_size_large:attr.size==='large',mcbBudgetRow_col_r1c2_size_medium:attr.size==='medium',mcbBudgetRow_col_r1c2_size_small:attr.size==='small',mcbBudgetRow_col_r1c2_size_min:attr.size==='min',mcbBudgetRow_col_r1c2_checked:attr.checked,mcbBudgetRow_col_r1c2_disable:attr.disabled}">

            <lm2b-link-text
                    ref="nameText"
                    refId="nameText"
                    v-show="pvt_isShow.r1c2 === 'nameText'"
                    :paraVarPair="pvt_r1c2.nameText.paraVarPair"
                    :para="pvt_r1c2.nameText.para"
                    :attr="pvt_r1c2.nameText.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbBudgetRow_col:true,mcbBudgetRow_col_r1c3:true,mcbBudgetRow_col_r1c3_size_large:attr.size==='large',mcbBudgetRow_col_r1c3_size_medium:attr.size==='medium',mcbBudgetRow_col_r1c3_size_small:attr.size==='small',mcbBudgetRow_col_r1c3_size_min:attr.size==='min',mcbBudgetRow_col_r1c3_checked:attr.checked,mcbBudgetRow_col_r1c3_disable:attr.disabled}">

            <lm2b-link-text
                    ref="stateText"
                    refId="stateText"
                    v-show="pvt_isShow.r1c3 === 'stateText'"
                    :paraVarPair="pvt_r1c3.stateText.paraVarPair"
                    :para="pvt_r1c3.stateText.para"
                    :attr="pvt_r1c3.stateText.attr">
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
    props: ['refId','para','attr','paraVarPair','number'],
    data: function() {
      return {

        name:this.para.name,
        state:this.para.state,
        pvt_subModuleMap: {
          vessel:['r1c1','r1c2','r1c3'],
          subModule:['deleteIcon','nameText','stateText'],
        },
        pvt_isShow: {
          r1c1:null,
          r1c2:null,
          r1c3:null,
        },
        pvt_eventPortInput: ['deleteFormEvent','formClickEvent'],

      };
    },
    watch: {
      name: {
        handler: function (val, oldVal) {
          if (val !== oldVal && this.paraVarPair.name) {
            if (this.number !== undefined) { // 循环
              this.$parent[this.paraVarPair.name][this.number] = val
            } else { // 非循环
              this.$parent[this.paraVarPair.name] = val
            }
          }
        },
        deep   : true
      },
      state: {
        handler: function (val, oldVal) {
          if (val !== oldVal && this.paraVarPair.state) {
            if (this.number !== undefined) { // 循环
              this.$parent[this.paraVarPair.state][this.number] = val
            } else { // 非循环
              this.$parent[this.paraVarPair.state] = val
            }
          }
        },
        deep   : true
      },
    },
    computed:{
      pvt_r1c1:function(){
        return {
          deleteIcon:{
            paraVarPair:{
            },
            para:{
              textData:'一',
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'center',
              height:'13px',
              color:'#ffffff',
              fontSize:'13px',
              background:'transparent',
            },
          },
        };
      },
      pvt_r1c2:function(){
        return {
          nameText:{
            paraVarPair:{
            },
            para:{
              textData:this.name,
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'left',
              height:'49px',
              color:'#333333',
              fontSize:'14px',
              background:'transparent',
            },
          },
        };
      },
      pvt_r1c3:function(){
        return {
          stateText:{
            paraVarPair:{
            },
            para:{
              textData:this.state?'已设置':'请设置',
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'right',
              height:'49px',
              color:this.state?'#333333':'#999999',
              fontSize:'14px',
              background:'transparent',
              icon:'van-icon-arrow',
              iconIsRight:true,
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
          sm1:'deleteIcon',
          sm2:'nameText',
          sm3:'stateText'
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
              //时间使用时间戳格式
              $this.name = $this.para.name;
              $this.state = $this.para.state;
              para.nStep = 'showModules';
              ++dbFlag;
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                'deleteIcon','nameText','stateText'
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
                para.nStep = 'startModule_deleteIcon';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_deleteIcon':
              $this.sm[ref.sm1].startModule(function(){
                para.nStep = 'startModule_nameText';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_nameText':
              $this.sm[ref.sm2].startModule(function(){
                para.nStep = 'startModule_priceText';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_priceText':
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
      deleteForm:function(){
        this.ep.deleteFormEvent(this.number);
      },
      formClick:function(){
        this.ep.formClickEvent(this.number);
      },
      deleteIcon_textClickEvent:function(){
        this.deleteForm();
      },
      nameText_textClickEvent:function(){
        this.formClick();
      },
      stateText_textClickEvent:function(){
        this.formClick();
      },
    },
  };
</script>
<style lang="less" scoped>
  @import '../../../../../../assets/var_sq';
  .mcbBudgetRow_container {
  }
  .mcbBudgetRow_row {
    display:flex;
    /*flex:1;*/
  }
  .mcbBudgetRow_col {
    display:flex;
    flex-direction:column;
  }
  .mcbBudgetRow_col_mcbBudgetRowWindow_size_medium {
    width:@mcbBudgetRow-mcbBudgetRowWindow-medium-width;
  }
  .mcbBudgetRow_col_mcbBudgetRowWindow {
    border-style:@mcbBudgetRow-mcbBudgetRowWindow-border-style;
    border-width:@mcbBudgetRow-mcbBudgetRowWindow-border-width;
    border-radius:@mcbBudgetRow-mcbBudgetRowWindow-border-radius;
    border-color:mix(@mcbBudgetRow-mcbBudgetRowWindow-border-color,#fff,@mcbBudgetRow-mcbBudgetRowWindow-hover-border-color-opacity);
  }
  .mcbBudgetRow_col_r1c1_size_medium {
    width:@mcbBudgetRow-r1c1-medium-width;
    height:@mcbBudgetRow-r1c1-medium-height;
    padding:@mcbBudgetRow-r1c1-medium-padding;
    justify-content:@mcbBudgetRow-r1c1-medium-vertical-position;
    align-items:@mcbBudgetRow-r1c1-medium-horizontal-position;
    margin:18px calc(10% - 30px) 18px 16px;
  }
  .mcbBudgetRow_col_r1c1 {
    border-radius:@mcbBudgetRow-r1c1-border-radius;
    background-color:mix(@mcbBudgetRow-r1c1-background-color,#fff,@mcbBudgetRow-r1c1-background-color-opacity);
  }
  .mcbBudgetRow_col_r1c2_size_medium {
    width:@mcbBudgetRow-r1c2-medium-width;
  }
  .mcbBudgetRow_col_r1c3_size_medium {
    width:@mcbBudgetRow-r1c3-medium-width;
    padding:0 16px 0 0;
  }
</style>
