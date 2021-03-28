<template>
  <div class="mcbReleaseSucRow_container">
    <div class="mcbReleaseSucRow_row mcbReleaseSucRow_row_mcbReleaseSucRowRow">
      <div :class="{mcbReleaseSucRow_col:true,mcbReleaseSucRow_col_mcbReleaseSucRowWindow:true,mcbReleaseSucRow_col_mcbReleaseSucRowWindow_size_large:attr.size==='large',mcbReleaseSucRow_col_mcbReleaseSucRowWindow_size_medium:attr.size==='medium',mcbReleaseSucRow_col_mcbReleaseSucRowWindow_size_small:attr.size==='small',mcbReleaseSucRow_col_mcbReleaseSucRowWindow_size_min:attr.size==='min',mcbReleaseSucRow_col_mcbReleaseSucRowWindow_checked:attr.checked,mcbReleaseSucRow_col_mcbReleaseSucRowWindow_disable:attr.disabled}">

        <div class="mcbReleaseSucRow_row mcbReleaseSucRow_row_row1">
          <div :class="{mcbReleaseSucRow_col:true,mcbReleaseSucRow_col_r1c1:true,mcbReleaseSucRow_col_r1c1_size_large:attr.size==='large',mcbReleaseSucRow_col_r1c1_size_medium:attr.size==='medium',mcbReleaseSucRow_col_r1c1_size_small:attr.size==='small',mcbReleaseSucRow_col_r1c1_size_min:attr.size==='min',mcbReleaseSucRow_col_r1c1_checked:attr.checked,mcbReleaseSucRow_col_r1c1_disable:attr.disabled}">

            <lm2b-image
                    ref="image"
                    refId="image"
                    v-show="pvt_isShow.r1c1 === 'image'"
                    :paraVarPair="pvt_r1c1.image.paraVarPair"
                    :para="pvt_r1c1.image.para"
                    :attr="pvt_r1c1.image.attr">
            </lm2b-image>
          </div>
        </div>
        <div class="mcbReleaseSucRow_row mcbReleaseSucRow_row_row2">
          <div :class="{mcbReleaseSucRow_col:true,mcbReleaseSucRow_col_r2c1:true,mcbReleaseSucRow_col_r2c1_size_large:attr.size==='large',mcbReleaseSucRow_col_r2c1_size_medium:attr.size==='medium',mcbReleaseSucRow_col_r2c1_size_small:attr.size==='small',mcbReleaseSucRow_col_r2c1_size_min:attr.size==='min',mcbReleaseSucRow_col_r2c1_checked:attr.checked,mcbReleaseSucRow_col_r2c1_disable:attr.disabled}">

            <lm2b-link-text
                    ref="text"
                    refId="text"
                    v-show="pvt_isShow.r2c1 === 'text'"
                    :paraVarPair="pvt_r2c1.text.paraVarPair"
                    :para="pvt_r2c1.text.para"
                    :attr="pvt_r2c1.text.attr">
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
        image:this.para.image,
        text:this.para.text,
        pvt_subModuleMap: {
          vessel:['r1c1','r2c1'],
          subModule:['image','text'],
        },
        pvt_isShow: {
          r1c1:null,
          r2c1:null,
        },
        pvt_eventPortInput: ['clickEvent'],

      };
    },
    watch: {
      image: {
        handler: function (val, oldVal) {
          if (val !== oldVal && this.paraVarPair.image) {
            if (this.number !== undefined) { // 循环
              this.$parent[this.paraVarPair.image][this.number] = val
            } else { // 非循环
              this.$parent[this.paraVarPair.image] = val
            }
          }
        },
        deep   : true
      },
      text: {
        handler: function (val, oldVal) {
          if (val !== oldVal && this.paraVarPair.text) {
            if (this.number !== undefined) { // 循环
              this.$parent[this.paraVarPair.text][this.number] = val
            } else { // 非循环
              this.$parent[this.paraVarPair.text] = val
            }
          }
        },
        deep   : true
      },
    },
    computed:{
      pvt_r1c1:function(){
        return {
          image:{
            paraVarPair:{
            },
            para:{
              image:this.image,
            },
            attr:{
              fit:'cover',
            },
          },
        };
      },
      pvt_r2c1:function(){
        return {
          text:{
            paraVarPair:{
            },
            para:{
              textData:this.text,
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'center',
              height:'33px',
              color:'#333333',
              fontSize:'14px',
              background:'transparent',
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
          successCallBack: successCallBack,
          errorCallBack: errorCallBack,
          nStep: 0
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
              $this.image = null;
              $this.text = '';
              if($this.para){
                if($this.para.image){
                  $this.image = $this.para.image;
                }
                if($this.para.text){
                  $this.text = $this.para.text;
                }
              }
              para.nStep = 'showModules';
              ++dbFlag;
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                'image','text'
              ];
              $this.showSubModule(refId,true,function(){
                para.nStep = 'startSubModules';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startSubModules':
              //调用子组件startModule方法
              $this.startSubModules(function(){
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              },function(error){console.log(error)});
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
      clickEvent:function(){
        this.ep.clickEvent(this.number);
      },
      startSubModules:function(successCallBack,errorCallBack){
        let $this = this;
        let para = {
          successCallBack: successCallBack,
          errorCallBack: errorCallBack,
          nStep: 0
        }
        let dbFlag;
        let ref = {
          sm1:'image',
          sm2:'text'
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
                para.nStep = 'startModule_image';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_image':
              $this.sm[ref.sm1].startModule(function(){
                para.nStep = 'startModule_text';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_text':
              $this.sm[ref.sm2].startModule(function(){
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
      image_clickEvent:function(){
        this.clickEvent();
      },
      text_textClickEvent:function(){
        this.clickEvent();
      },
    },
  };
</script>
<style lang="less" scoped>
    @import '../../../../../../assets/var_sq';
  .mcbReleaseSucRow_container {
  }
  .mcbReleaseSucRow_row {
    display:flex;
    /*flex:1;*/
  }
  .mcbReleaseSucRow_col {
    display:flex;
    flex-direction:column;
  }
  .mcbReleaseSucRow_col_mcbReleaseSucRowWindow_size_medium {
    width:@mcbReleaseSucRow-mcbReleaseSucRowWindow-medium-width;
    height:@mcbReleaseSucRow-mcbReleaseSucRowWindow-medium-height;
    margin:@mcbReleaseSucRow-mcbReleaseSucRowWindow-medium-margin;
  }
  .mcbReleaseSucRow_col_r1c1_size_medium {
    width:@mcbReleaseSucRow-r1c1-medium-width;
    height:@mcbReleaseSucRow-r1c1-medium-height;
    border-radius:50%;
    overflow:hidden;
    margin:0 12px;
  }
  .mcbReleaseSucRow_col_r2c1_size_medium {
    width:@mcbReleaseSucRow-r2c1-medium-width;
    height:@mcbReleaseSucRow-r2c1-medium-height;
  }
</style>
