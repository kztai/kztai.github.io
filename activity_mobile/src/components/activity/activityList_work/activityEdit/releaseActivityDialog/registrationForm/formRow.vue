<template>
  <div class="mcbFormRow_container">
    <div class="mcbFormRow_row mcbFormRow_row_mcbFormRowRow">
      <div :class="{mcbFormRow_col:true,mcbFormRow_col_mcbFormRowWindow:true,mcbFormRow_col_mcbFormRowWindow_size_large:attr.size==='large',mcbFormRow_col_mcbFormRowWindow_size_medium:attr.size==='medium',mcbFormRow_col_mcbFormRowWindow_size_small:attr.size==='small',mcbFormRow_col_mcbFormRowWindow_size_min:attr.size==='min',mcbFormRow_col_mcbFormRowWindow_checked:attr.checked,mcbFormRow_col_mcbFormRowWindow_disable:attr.disabled}">

        <div class="mcbFormRow_row mcbFormRow_row_row1">
          <div :class="{mcbFormRow_col:true,mcbFormRow_col_r1c1:true,mcbFormRow_col_r1c1_size_large:attr.size==='large',mcbFormRow_col_r1c1_size_medium:attr.size==='medium',mcbFormRow_col_r1c1_size_small:attr.size==='small',mcbFormRow_col_r1c1_size_min:attr.size==='min',mcbFormRow_col_r1c1_checked:attr.checked,mcbFormRow_col_r1c1_disable:attr.disabled}">

            <lm2b-link-text
                    ref="deleteIcon"
                    refId="deleteIcon"
                    v-show="pvt_isShow.r1c1 === 'deleteIcon'"
                    :paraVarPair="pvt_r1c1.deleteIcon.paraVarPair"
                    :para="pvt_r1c1.deleteIcon.para"
                    :attr="pvt_r1c1.deleteIcon.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbFormRow_col:true,mcbFormRow_col_r1c2:true,mcbFormRow_col_r1c2_size_large:attr.size==='large',mcbFormRow_col_r1c2_size_medium:attr.size==='medium',mcbFormRow_col_r1c2_size_small:attr.size==='small',mcbFormRow_col_r1c2_size_min:attr.size==='min',mcbFormRow_col_r1c2_checked:attr.checked,mcbFormRow_col_r1c2_disable:attr.disabled}">

            <lm2b-link-text
                    ref="labelText"
                    refId="labelText"
                    v-show="pvt_isShow.r1c2 === 'labelText'"
                    :paraVarPair="pvt_r1c2.labelText.paraVarPair"
                    :para="pvt_r1c2.labelText.para"
                    :attr="pvt_r1c2.labelText.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbFormRow_col:true,mcbFormRow_col_r1c3:true,mcbFormRow_col_r1c3_size_large:attr.size==='large',mcbFormRow_col_r1c3_size_medium:attr.size==='medium',mcbFormRow_col_r1c3_size_small:attr.size==='small',mcbFormRow_col_r1c3_size_min:attr.size==='min',mcbFormRow_col_r1c3_checked:attr.checked,mcbFormRow_col_r1c3_disable:attr.disabled}">

            <lm2b-checkbox
                    ref="requireCheckbox"
                    refId="requireCheckbox"
                    v-show="pvt_isShow.r1c3 === 'requireCheckbox'"
                    :paraVarPair="pvt_r1c3.requireCheckbox.paraVarPair"
                    :para="pvt_r1c3.requireCheckbox.para"
                    :attr="pvt_r1c3.requireCheckbox.attr">
            </lm2b-checkbox>
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

        labelValue:this.para.labelValue,
        requireValue:this.para.requireValue,
        pvt_subModuleMap: {
          vessel:['r1c1','r1c2','r1c3'],
          subModule:['deleteIcon','labelText','requireCheckbox'],
        },
        pvt_isShow: {
          r1c1:null,
          r1c2:null,
          r1c3:null,
        },
        pvt_eventPortInput: ['deleteFormEvent','formClickEvent'],
        checkValue:[]
      };
    },
    watch: {
      labelValue: {
        handler: function (val, oldVal) {
          if (val !== oldVal && this.paraVarPair.labelValue) {
            if (this.number !== undefined) { // 循环
              this.$parent[this.paraVarPair.labelValue][this.number] = val
            } else { // 非循环
              this.$parent[this.paraVarPair.labelValue] = val
            }
          }
        },
        deep   : true
      },
      requireValue: {
        handler: function (val, oldVal) {
          if (val !== oldVal && this.paraVarPair.requireValue) {
            if (this.number !== undefined) { // 循环
              this.$parent[this.paraVarPair.requireValue][this.number] = val
            } else { // 非循环
              this.$parent[this.paraVarPair.requireValue] = val
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
              color:'#FFFFFF',
              fontSize:'13px',
              background:'#CCCCCC',
            },
          },
        };
      },
      pvt_r1c2:function(){
        return {
          labelText:{
            paraVarPair:{
            },
            para:{
              textData:this.labelValue,
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
          requireCheckbox:{
            paraVarPair:{
              checkData:'checkValue',
            },
            para:{
              checkData:this.checkValue,
            },
            attr:{
              checkboxArr:[{label:1,text:'必填'}],
              define:['van-icon-circle','van-icon-passed'],
              labelPosition:'left',
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
          sm2:'labelText',
          sm3:'requireCheckbox'
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
              $this.labelValue = null;
              $this.requireValue = false;
              $this.checkValue = [];
              if($this.para.labelValue){
                $this.labelValue = $this.para.labelValue;
              }
              if($this.para.requireValue){
                $this.requireValue = $this.para.requireValue;
                $this.checkValue = [1];
              }
              para.nStep = 'showModules';
              ++dbFlag;
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                'deleteIcon','labelText','requireCheckbox'
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
              $this.sm[ref.sm1].startModule(function(){
                para.nStep = 'startModule_Text';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              },function(error){console.log(error)});
              break;
            case 'startModule_Text':
              $this.sm[ref.sm2].startModule(function(){
                para.nStep = 'startModule_checkbox';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              },function(error){console.log(error)});
              break;
            case 'startModule_checkbox':
              $this.sm[ref.sm3].startModule(function(){
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
      deleteForm:function(){
        this.ep.deleteFormEvent(this.number);
      },
      formClick:function(){
        this.ep.formClickEvent(this.number);
      },
      requireChange(){
        if(this.checkValue.length > 0){
          this.requireValue = true;
        }else{
          this.requireValue = false;
        }
      },
      deleteIcon_textClickEvent:function(){
        this.deleteForm();
      },
      labelText_textClickEvent:function(){
        this.formClick();
      },
      requireCheckbox_dataModifyEvent:function(){
        this.requireChange();
      },
    },
  };
</script>
<style lang="less" scoped>
    @import '../../../../../../assets/var_sq';
  .mcbFormRow_container {
  }
  .mcbFormRow_row {
    display:flex;
    /*flex:1;*/
  }
  .mcbFormRow_col {
    display:flex;
    flex-direction:column;
  }
  .mcbFormRow_col_mcbFormRowWindow_size_medium {
    width:@mcbFormRow-mcbFormRowWindow-medium-width;
    height:@mcbFormRow-mcbFormRowWindow-medium-height;
    margin:@mcbFormRow-mcbFormRowWindow-medium-margin;
    padding:@mcbFormRow-mcbFormRowWindow-medium-padding;
  }
  .mcbFormRow_col_mcbFormRowWindow {
    border-style:@mcbFormRow-mcbFormRowWindow-border-style;
    border-width:@mcbFormRow-mcbFormRowWindow-border-width;
    border-color:mix(@mcbFormRow-mcbFormRowWindow-border-color,#fff,@mcbFormRow-mcbFormRowWindow-hover-border-color-opacity);
    background-color:mix(@mcbFormRow-mcbFormRowWindow-background-color,#fff,@mcbFormRow-mcbFormRowWindow-background-color-opacity);
  }
  .mcbFormRow_col_r1c1_size_medium {
    width:@mcbFormRow-r1c1-medium-width;
    height:@mcbFormRow-r1c1-medium-height;
    justify-content:@mcbFormRow-r1c1-medium-vertical-position;
  }
  .mcbFormRow_col_r1c1 {
    border-radius:@mcbFormRow-r1c1-border-radius;
    overflow:hidden;
    margin:18px 5px 18px calc(5% - 19px);
  }
  .mcbFormRow_col_r1c2_size_medium {
    width:@mcbFormRow-r1c2-medium-width;
    height:@mcbFormRow-r1c2-medium-height;
  }
  .mcbFormRow_col_r1c3_size_medium {
    width:@mcbFormRow-r1c3-medium-width;
    justify-content:@mcbFormRow-r1c3-medium-vertical-position;
  }
</style>
