<template>
  <div :class="{mcbClassifyRow_col:true,mcbClassifyRow_col_mcbClassifyRowWindow:true,mcbClassifyRow_col_mcbClassifyRowWindow_size_large:attr.size==='large',mcbClassifyRow_col_mcbClassifyRowWindow_size_medium:attr.size==='medium',mcbClassifyRow_col_mcbClassifyRowWindow_size_small:attr.size==='small',mcbClassifyRow_col_mcbClassifyRowWindow_size_min:attr.size==='min',mcbClassifyRow_col_mcbClassifyRowWindow_checked:attr.checked,mcbClassifyRow_col_mcbClassifyRowWindow_disable:attr.disabled}">

    <div class="mcbClassifyRow_row mcbClassifyRow_row_row1">
      <div :class="{mcbClassifyRow_col:true,mcbClassifyRow_col_r1c1:true,mcbClassifyRow_col_r1c1_size_large:attr.size==='large',mcbClassifyRow_col_r1c1_size_medium:attr.size==='medium',mcbClassifyRow_col_r1c1_size_small:attr.size==='small',mcbClassifyRow_col_r1c1_size_min:attr.size==='min',mcbClassifyRow_col_r1c1_checked:attr.checked,mcbClassifyRow_col_r1c1_disable:attr.disabled}">

        <lm2b-link-text
                ref="firstClassifyTitle"
                refId="firstClassifyTitle"
                v-show="pvt_isShow.r1c1 === 'firstClassifyTitle'"
                :paraVarPair="pvt_r1c1.firstClassifyTitle.paraVarPair"
                :para="pvt_r1c1.firstClassifyTitle.para"
                :attr="pvt_r1c1.firstClassifyTitle.attr">
        </lm2b-link-text>
      </div>
    </div>
    <div class="mcbClassifyRow_row mcbClassifyRow_row_row2">
      <div :class="{mcbClassifyRow_col:true,mcbClassifyRow_col_r2c1:true,mcbClassifyRow_col_r2c1_size_large:attr.size==='large',mcbClassifyRow_col_r2c1_size_medium:attr.size==='medium',mcbClassifyRow_col_r2c1_size_small:attr.size==='small',mcbClassifyRow_col_r2c1_size_min:attr.size==='min',mcbClassifyRow_col_r2c1_checked:attr.checked,mcbClassifyRow_col_r2c1_disable:attr.disabled}">

        <lm2b-checkbox
                ref="secondClassifyTitle"
                refId="secondClassifyTitle"
                v-show="pvt_isShow.r2c1 === 'secondClassifyTitle'"
                :paraVarPair="pvt_r2c1.secondClassifyTitle.paraVarPair"
                :para="pvt_r2c1.secondClassifyTitle.para"
                :attr="pvt_r2c1.secondClassifyTitle.attr">
        </lm2b-checkbox>
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
    props: ['refId','para','attr','number','paraVarPair'],
    data: function() {
      return {
        titleText:this.para.titleText,
        checkedValue:this.para.checkedValue,
        checkArr:this.para.checkArr,
        pvt_subModuleMap: {
          vessel:['r1c1','r2c1'],
          subModule:['firstClassifyTitle','secondClassifyTitle'],
        },
        pvt_isShow: {
          r1c1:null,
          r2c1:null,
        },
        pvt_eventPortInput: [],
        checkboxArr:[],
      };
    },
    watch: {
      titleText: {
        handler: function (val, oldVal) {
          if (val !== oldVal && this.paraVarPair.titleText) {
            if (this.number !== undefined) { // 循环
              this.$parent[this.paraVarPair.titleText][this.number] = val;
            } else { // 非循环
              this.$parent[this.paraVarPair.titleText] = val;
            }
          }
        },
        deep   : true
      },
      checkedValue: {
        handler: function (val, oldVal) {
          if (val !== oldVal && this.paraVarPair.checkedValue) {
            if (this.number !== undefined) { // 循环
              this.$parent[this.paraVarPair.checkedValue][this.number] = val;
            } else { // 非循环
              this.$parent[this.paraVarPair.checkedValue] = val;
            }
          }
        },
        deep   : true
      },
      checkArr: {
        handler: function (val, oldVal) {
          if (val !== oldVal && this.paraVarPair.checkArr) {
            if (this.number !== undefined) { // 循环
              this.$parent[this.paraVarPair.checkArr][this.number] = val;
            } else { // 非循环
              this.$parent[this.paraVarPair.checkArr] = val;
            }
          }
        },
        deep   : true
      },
    },
    computed:{
      pvt_r1c1:function(){
        return {
          firstClassifyTitle:{
            paraVarPair:{
            },
            para:{
              textData:this.titleText
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontWeight:true,
              height:'40px',
              fontSize:'15px',
              background:'transparent',
            },
          },
        };
      },
      pvt_r2c1:function(){
        return {
          secondClassifyTitle:{
            paraVarPair:{
              checkData:'checkedValue'
            },
            para:{
              checkData:this.checkedValue
            },
            attr:{
              checkboxArr:this.checkboxArr,
              size:'small',
              button:true,
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
          sm1:'firstClassifyTitle',sm2:'secondClassifyTitle'
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
              $this.titleText = $this.para.titleText;
              $this.checkedValue = $this.para.checkedValue;
              $this.checkArr = $this.para.checkArr;
              $this.checkboxArr = [];
              for(let i = 0;i < $this.checkArr.length;i++){
                $this.checkboxArr.push({
                  label:$this.checkArr[i],
                  text:$this.checkArr[i]
                });
              }
              para.nStep = 'showModules';
              ++dbFlag;
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                'firstClassifyTitle','secondClassifyTitle'
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
                para.nStep = 'startModule_title';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_title':
              $this.sm[ref.sm1].startModule(function(){
                para.nStep = 'startModule_checkbox';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_checkbox':
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
    },
  };
</script>
<style lang="less" scoped>
    @import '../../../../../../assets/var_sq';
  .mcbClassifyRow_container {
  }
  .mcbClassifyRow_row {
    display:flex;
    /*flex:1;*/
  }
  .mcbClassifyRow_col {
    display:flex;
    flex-direction:column;
  }
  .mcbClassifyRow_col_mcbClassifyRowWindow_size_medium {
    width:@mcbClassifyRow-mcbClassifyRowWindow-medium-width;
    height:@mcbClassifyRow-mcbClassifyRowWindow-medium-height;
    padding:@mcbClassifyRow-mcbClassifyRowWindow-medium-padding;
    justify-content:@mcbClassifyRow-mcbClassifyRowWindow-medium-vertical-position;
  }
  .mcbClassifyRow_col_r1c1_size_medium {
    width:@mcbClassifyRow-r1c1-medium-width;
    height:@mcbClassifyRow-r1c1-medium-height;
    justify-content:@mcbClassifyRow-r1c1-medium-vertical-position;
  }
  .mcbClassifyRow_col_r2c1_size_medium {
    width:@mcbClassifyRow-r2c1-medium-width;
    padding:@mcbClassifyRow-r2c1-medium-padding;
    justify-content:@mcbClassifyRow-r2c1-medium-vertical-position;
  }
</style>
