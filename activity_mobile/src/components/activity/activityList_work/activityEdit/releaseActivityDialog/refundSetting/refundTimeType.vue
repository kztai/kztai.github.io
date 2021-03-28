<template>
  <div class="mcbRefundTimeType_container">
    <div class="mcbRefundTimeType_row mcbRefundTimeType_row_mcbRefundTimeTypeRow">
      <div :class="{mcbRefundTimeType_col:true,mcbRefundTimeType_col_mcbRefundTimeTypeWindow:true,mcbRefundTimeType_col_mcbRefundTimeTypeWindow_size_large:attr.size==='large',mcbRefundTimeType_col_mcbRefundTimeTypeWindow_size_medium:attr.size==='medium',mcbRefundTimeType_col_mcbRefundTimeTypeWindow_size_small:attr.size==='small',mcbRefundTimeType_col_mcbRefundTimeTypeWindow_size_min:attr.size==='min',mcbRefundTimeType_col_mcbRefundTimeTypeWindow_checked:attr.checked,mcbRefundTimeType_col_mcbRefundTimeTypeWindow_disable:attr.disabled}">

        <div class="mcbRefundTimeType_row mcbRefundTimeType_row_row2">
          <div :class="{mcbRefundTimeType_col:true,mcbRefundTimeType_col_r2c1:true,mcbRefundTimeType_col_r2c1_size_large:attr.size==='large',mcbRefundTimeType_col_r2c1_size_medium:attr.size==='medium',mcbRefundTimeType_col_r2c1_size_small:attr.size==='small',mcbRefundTimeType_col_r2c1_size_min:attr.size==='min',mcbRefundTimeType_col_r2c1_checked:attr.checked,mcbRefundTimeType_col_r2c1_disable:attr.disabled}">

            <lm2b-link-text
                    ref="type2Text"
                    refId="type2Text"
                    v-show="pvt_isShow.r2c1 === 'type2Text'"
                    :paraVarPair="pvt_r2c1.type2Text.paraVarPair"
                    :para="pvt_r2c1.type2Text.para"
                    :attr="pvt_r2c1.type2Text.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbRefundTimeType_col:true,mcbRefundTimeType_col_r2c2:true,mcbRefundTimeType_col_r2c2_size_large:attr.size==='large',mcbRefundTimeType_col_r2c2_size_medium:attr.size==='medium',mcbRefundTimeType_col_r2c2_size_small:attr.size==='small',mcbRefundTimeType_col_r2c2_size_min:attr.size==='min',mcbRefundTimeType_col_r2c2_checked:attr.checked,mcbRefundTimeType_col_r2c2_disable:attr.disabled}">

            <lm2b-select
                    ref="daysSelect"
                    refId="daysSelect"
                    v-show="pvt_isShow.r2c2 === 'daysSelect'"
                    :paraVarPair="pvt_r2c2.daysSelect.paraVarPair"
                    :para="pvt_r2c2.daysSelect.para"
                    :attr="pvt_r2c2.daysSelect.attr">
            </lm2b-select>
          </div>
          <div :class="{mcbRefundTimeType_col:true,mcbRefundTimeType_col_r2c3:true,mcbRefundTimeType_col_r2c3_size_large:attr.size==='large',mcbRefundTimeType_col_r2c3_size_medium:attr.size==='medium',mcbRefundTimeType_col_r2c3_size_small:attr.size==='small',mcbRefundTimeType_col_r2c3_size_min:attr.size==='min',mcbRefundTimeType_col_r2c3_checked:attr.checked,mcbRefundTimeType_col_r2c3_disable:attr.disabled}">

            <lm2b-radio
                    ref="type2Checkbox"
                    refId="type2Checkbox"
                    v-show="pvt_isShow.r2c3 === 'type2Checkbox'"
                    :paraVarPair="pvt_r2c3.type2Checkbox.paraVarPair"
                    :para="pvt_r2c3.type2Checkbox.para"
                    :attr="pvt_r2c3.type2Checkbox.attr">
            </lm2b-radio>
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

        daysAgo:this.para.daysAgo,
        pvt_subModuleMap: {
          vessel:['r2c1','r2c2','r2c3'],
          subModule:['type2Text','daysSelect','type2Checkbox'],
        },
        pvt_isShow: {
          r1c1:null,
          r2c1:null,
          r2c2:null,
          r2c3:null,
        },
        pvt_eventPortInput: [],

        days:null,
        daysList:null,
      };
    },
    watch: {
      daysAgo: {
        handler: function (val, oldVal) {
          if (val !== oldVal && this.paraVarPair.daysAgo) {
            if (this.number !== undefined) { // 循环
              this.$parent[this.paraVarPair.daysAgo][this.number] = val
            } else { // 非循环
              this.$parent[this.paraVarPair.daysAgo] = val
            }
          }
        },
        deep   : true
      },
    },
    computed:{
      pvt_r2c1:function(){
        return {
          type2Text:{
            paraVarPair:{
            },
            para:{
              textData:'活动开始前',
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'left',
              height:'52px',
              color:'#333333',
              fontSize:'14px',
              background:'transparent',
            },
          },
        };
      },
      pvt_r2c2:function(){
        return {
          daysSelect:{
            paraVarPair:{
              value:'days',
              listSource:'daysList',
            },
            para:{
              value:this.days,
              listSource:this.daysList,
            },
            attr:{
            },
          },
        };
      },
      pvt_r2c3:function(){
        return {
          type2Checkbox:{
            paraVarPair:{
            },
            para:{
              radioData:1,
            },
            attr:{
              radioArr:[{label:1,text:'天可退款'}],
              define:['van-icon-circle','van-icon-passed'],
              labelPosition:'left',
              size:'mini'
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
      startModule(successCallBack,errorCallBack){
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
              $this.days = null;
              $this.daysList = [];
              for(let i = 1;i <= 15;i++){
                $this.daysList.push(i);
              }
              $this.daysAgo = this.para.daysAgo;
              if($this.daysAgo){
                $this.days = $this.daysAgo;
              }
              para.nStep = 'showModules';
              ++dbFlag;
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                'type2Text','daysSelect','type2Checkbox'
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
      selectChange(){
        this.daysAgo = this.days;
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
          sm2:'type2Text',
          sm3:'daysSelect',
          sm4:'type2Checkbox'
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
                para.nStep = 'startModule_type2Text';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_type2Text':
              $this.sm[ref.sm2].startModule(function(){
                para.nStep = 'startModule_type2Select';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_type2Select':
              $this.sm[ref.sm3].startModule(function(){
                para.nStep = 'startModule_type2';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_type2':
              $this.sm[ref.sm4].startModule(function(){
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
      daysSelect_dataModifyEvent:function(){
        this.selectChange();
      },
    },
  };
</script>
<style lang="less" scoped>
    @import '../../../../../../assets/var_sq';
  .mcbRefundTimeType_container {
  }
  .mcbRefundTimeType_row {
    display:flex;
    /*flex:1;*/
  }
  .mcbRefundTimeType_col {
    display:flex;
    flex-direction:column;
  }
  .mcbRefundTimeType_col_mcbRefundTimeTypeWindow_size_medium {
    width:@mcbRefundTimeType-mcbRefundTimeTypeWindow-medium-width;
  }
  .mcbRefundTimeType_col_r1c1_size_medium {
    width:@mcbRefundTimeType-r1c1-medium-width;
    height:@mcbRefundTimeType-r1c1-medium-height;
    justify-content:@mcbRefundTimeType-r1c1-medium-vertical-position;
  }
  .mcbRefundTimeType_col_r1c1 {
    border-style:@mcbRefundTimeType-r1c1-border-style;
    border-width:@mcbRefundTimeType-r1c1-border-width;
    border-radius:@mcbRefundTimeType-r1c1-border-radius;
    border-color:mix(@mcbRefundTimeType-r1c1-border-color,#fff,@mcbRefundTimeType-r1c1-hover-border-color-opacity);
  }
  .mcbRefundTimeType_col_r2c1_size_medium {
    width:@mcbRefundTimeType-r2c1-medium-width;
    height:@mcbRefundTimeType-r2c1-medium-height;
  }
  .mcbRefundTimeType_col_r2c1 {
    border-style:@mcbRefundTimeType-r2c1-border-style;
    border-width:@mcbRefundTimeType-r2c1-border-width;
    border-radius:@mcbRefundTimeType-r2c1-border-radius;
    border-color:mix(@mcbRefundTimeType-r2c1-border-color,#fff,@mcbRefundTimeType-r2c1-hover-border-color-opacity);
  }
  .mcbRefundTimeType_col_r2c2_size_medium {
    width:@mcbRefundTimeType-r2c2-medium-width;
    height:@mcbRefundTimeType-r2c2-medium-height;
    justify-content:@mcbRefundTimeType-r2c2-medium-vertical-position;
  }
  .mcbRefundTimeType_col_r2c2 {
    border-style:@mcbRefundTimeType-r2c2-border-style;
    border-width:@mcbRefundTimeType-r2c2-border-width;
    border-radius:@mcbRefundTimeType-r2c2-border-radius;
    border-color:mix(@mcbRefundTimeType-r2c2-border-color,#fff,@mcbRefundTimeType-r2c2-hover-border-color-opacity);
  }
  .mcbRefundTimeType_col_r2c3_size_medium {
    width:@mcbRefundTimeType-r2c3-medium-width;
    height:@mcbRefundTimeType-r2c3-medium-height;
    justify-content:@mcbRefundTimeType-r2c3-medium-vertical-position;
  }
  .mcbRefundTimeType_col_r2c3 {
    border-style:@mcbRefundTimeType-r2c3-border-style;
    border-width:@mcbRefundTimeType-r2c3-border-width;
    border-radius:@mcbRefundTimeType-r2c3-border-radius;
    border-color:mix(@mcbRefundTimeType-r2c3-border-color,#fff,@mcbRefundTimeType-r2c3-hover-border-color-opacity);
  }
</style>
