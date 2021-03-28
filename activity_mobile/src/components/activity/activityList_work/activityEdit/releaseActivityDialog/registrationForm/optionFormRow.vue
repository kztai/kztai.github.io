<template>
  <div class="mcbOptionFormRow_container">
    <div class="mcbOptionFormRow_row mcbOptionFormRow_row_mcbOptionFormRowRow">
      <div :class="{mcbOptionFormRow_col:true,mcbOptionFormRow_col_mcbOptionFormRowWindow:true,mcbOptionFormRow_col_mcbOptionFormRowWindow_size_large:attr.size==='large',mcbOptionFormRow_col_mcbOptionFormRowWindow_size_medium:attr.size==='medium',mcbOptionFormRow_col_mcbOptionFormRowWindow_size_small:attr.size==='small',mcbOptionFormRow_col_mcbOptionFormRowWindow_size_min:attr.size==='min',mcbOptionFormRow_col_mcbOptionFormRowWindow_checked:attr.checked,mcbOptionFormRow_col_mcbOptionFormRowWindow_disable:attr.disabled}">

        <div class="mcbOptionFormRow_row mcbOptionFormRow_row_row1">
          <div :class="{mcbOptionFormRow_col:true,mcbOptionFormRow_col_r1c1:true,mcbOptionFormRow_col_r1c1_size_large:attr.size==='large',mcbOptionFormRow_col_r1c1_size_medium:attr.size==='medium',mcbOptionFormRow_col_r1c1_size_small:attr.size==='small',mcbOptionFormRow_col_r1c1_size_min:attr.size==='min',mcbOptionFormRow_col_r1c1_checked:attr.checked,mcbOptionFormRow_col_r1c1_disable:attr.disabled}">

            <lm2b-link-text
                    ref="deleteIcon"
                    refId="deleteIcon"
                    v-show="pvt_isShow.r1c1 === 'deleteIcon'"
                    :paraVarPair="pvt_r1c1.deleteIcon.paraVarPair"
                    :para="pvt_r1c1.deleteIcon.para"
                    :attr="pvt_r1c1.deleteIcon.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbOptionFormRow_col:true,mcbOptionFormRow_col_r1c2:true,mcbOptionFormRow_col_r1c2_size_large:attr.size==='large',mcbOptionFormRow_col_r1c2_size_medium:attr.size==='medium',mcbOptionFormRow_col_r1c2_size_small:attr.size==='small',mcbOptionFormRow_col_r1c2_size_min:attr.size==='min',mcbOptionFormRow_col_r1c2_checked:attr.checked,mcbOptionFormRow_col_r1c2_disable:attr.disabled}">

            <lm2b-input-text
                    ref="optionInput"
                    refId="optionInput"
                    v-show="pvt_isShow.r1c2 === 'optionInput'"
                    :paraVarPair="pvt_r1c2.optionInput.paraVarPair"
                    :para="pvt_r1c2.optionInput.para"
                    :attr="pvt_r1c2.optionInput.attr">
            </lm2b-input-text>
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
        optionPlaceholder:this.para.optionPlaceholder,
        optionValue:this.para.optionValue,
        pvt_subModuleMap: {
          vessel:['r1c1','r1c2'],
          subModule:['deleteIcon','optionInput'],
        },
        pvt_isShow: {
          r1c1:null,
          r1c2:null,
        },
        pvt_eventPortInput: ['deleteOptionEvent'],

      };
    },
    watch: {
      optionPlaceholder: {
        handler: function (val, oldVal) {
          if (val !== oldVal && this.paraVarPair.optionPlaceholder) {
            if (this.number !== undefined) { // 循环
              this.$parent[this.paraVarPair.optionPlaceholder][this.number] = val
            } else { // 非循环
              this.$parent[this.paraVarPair.optionPlaceholder] = val
            }
          }
        },
        deep   : true
      },
      optionValue: {
        handler: function (val, oldVal) {
          if (val !== oldVal && this.paraVarPair.optionValue) {
            if (this.number !== undefined) { // 循环
              this.$parent[this.paraVarPair.optionValue][this.number] = val
            } else { // 非循环
              this.$parent[this.paraVarPair.optionValue] = val
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
              background:'#CCCCCC',
            },
          },
        };
      },
      pvt_r1c2:function(){
        return {
          optionInput:{
            paraVarPair:{
              text:'optionValue'
            },
            para:{
              text:this.optionValue,
            },
            attr:{
              placeholder:this.optionPlaceholder,
              clearable:true,
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
      startModule:function(successCallBack,errorCallBack){
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
              $this.optionPlaceholder = '';
              $this.optionValue = '';
              if($this.para.optionValue){
                $this.optionValue = $this.para.optionValue;
              }
              if($this.para.optionPlaceholder){
                $this.optionPlaceholder = $this.para.optionPlaceholder;
              }
              para.nStep = 'showModules';
              ++dbFlag;
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                'deleteIcon','optionInput'
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
                para.nStep = 'startModule_icon';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_icon':
              $this.sm['deleteIcon'].startModule(function(){
                para.nStep = 'startModule_input';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              },function(error){console.log(error)});
              break;
            case 'startModule_input':
              $this.sm['optionInput'].startModule(function(){
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
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
      deleteOption:function(){
        this.ep.deleteOptionEvent(this.number);
      },
      deleteIcon_textClickEvent:function(){
        this.deleteOption();
      },
    },
  };
</script>
<style lang="less" scoped>
    @import '../../../../../../assets/var_sq';
  .mcbOptionFormRow_container {
  }
  .mcbOptionFormRow_row {
    display:flex;
    /*flex:1;*/
  }
  .mcbOptionFormRow_col {
    display:flex;
    flex-direction:column;
  }
  .mcbOptionFormRow_col_mcbOptionFormRowWindow_size_medium {
    width:@mcbOptionFormRow-mcbOptionFormRowWindow-medium-width;
    height:@mcbOptionFormRow-mcbOptionFormRowWindow-medium-height;
    padding:@mcbOptionFormRow-mcbOptionFormRowWindow-medium-padding;
  }
  .mcbOptionFormRow_col_mcbOptionFormRowWindow {
    border-style:@mcbOptionFormRow-mcbOptionFormRowWindow-border-style;
    border-width:@mcbOptionFormRow-mcbOptionFormRowWindow-border-width;
    border-color:mix(@mcbOptionFormRow-mcbOptionFormRowWindow-border-color,#fff,@mcbOptionFormRow-mcbOptionFormRowWindow-hover-border-color-opacity);
  }
  .mcbOptionFormRow_col_r1c1_size_medium {
    width:@mcbOptionFormRow-r1c1-medium-width;
    justify-content:@mcbOptionFormRow-r1c1-medium-vertical-position;
    height:@mcbOptionFormRow-r1c1-medium-height;
    margin:@mcbOptionFormRow-r1c1-medium-margin;
  }
  .mcbOptionFormRow_col_r1c1 {
    border-radius:@mcbOptionFormRow-r1c1-border-radius;
    overflow:hidden;
  }
  .mcbOptionFormRow_col_r1c2_size_medium {
    width:@mcbOptionFormRow-r1c2-medium-width;
    height:49px;
    justify-content:center;
  }
</style>
