<template>
  <div class="mcbManagerRow_container">
    <div class="mcbManagerRow_row mcbManagerRow_row_mcbManagerRowRow">
      <div :class="{mcbManagerRow_col:true,mcbManagerRow_col_mcbManagerRowWindow:true,mcbManagerRow_col_mcbManagerRowWindow_size_large:attr.size==='large',mcbManagerRow_col_mcbManagerRowWindow_size_medium:attr.size==='medium',mcbManagerRow_col_mcbManagerRowWindow_size_small:attr.size==='small',mcbManagerRow_col_mcbManagerRowWindow_size_min:attr.size==='min',mcbManagerRow_col_mcbManagerRowWindow_checked:attr.checked,mcbManagerRow_col_mcbManagerRowWindow_disable:attr.disabled}">

        <div class="mcbManagerRow_row mcbManagerRow_row_row1">
          <div :class="{mcbManagerRow_col:true,mcbManagerRow_col_r1c1:true,mcbManagerRow_col_r1c1_size_large:attr.size==='large',mcbManagerRow_col_r1c1_size_medium:attr.size==='medium',mcbManagerRow_col_r1c1_size_small:attr.size==='small',mcbManagerRow_col_r1c1_size_min:attr.size==='min',mcbManagerRow_col_r1c1_checked:attr.checked,mcbManagerRow_col_r1c1_disable:attr.disabled}">

            <lm2b-link-text
                    ref="typeName"
                    refId="typeName"
                    v-show="pvt_isShow.r1c1 === 'typeName'"
                    :paraVarPair="pvt_r1c1.typeName.paraVarPair"
                    :para="pvt_r1c1.typeName.para"
                    :attr="pvt_r1c1.typeName.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbManagerRow_col:true,mcbManagerRow_col_r1c2:true,mcbManagerRow_col_r1c2_size_large:attr.size==='large',mcbManagerRow_col_r1c2_size_medium:attr.size==='medium',mcbManagerRow_col_r1c2_size_small:attr.size==='small',mcbManagerRow_col_r1c2_size_min:attr.size==='min',mcbManagerRow_col_r1c2_checked:attr.checked,mcbManagerRow_col_r1c2_disable:attr.disabled}">

            <lm2b-link-text
                    ref="settingState"
                    refId="settingState"
                    v-show="pvt_isShow.r1c2 === 'settingState'"
                    :paraVarPair="pvt_r1c2.settingState.paraVarPair"
                    :para="pvt_r1c2.settingState.para"
                    :attr="pvt_r1c2.settingState.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbManagerRow_col:true,mcbManagerRow_col_r1c3:true,mcbManagerRow_col_r1c3_size_large:attr.size==='large',mcbManagerRow_col_r1c3_size_medium:attr.size==='medium',mcbManagerRow_col_r1c3_size_small:attr.size==='small',mcbManagerRow_col_r1c3_size_min:attr.size==='min',mcbManagerRow_col_r1c3_checked:attr.checked,mcbManagerRow_col_r1c3_disable:attr.disabled}">

            <lm2b-link-text
                    ref="iconText"
                    refId="iconText"
                    v-show="pvt_isShow.r1c3 === 'iconText'"
                    :paraVarPair="pvt_r1c3.iconText.paraVarPair"
                    :para="pvt_r1c3.iconText.para"
                    :attr="pvt_r1c3.iconText.attr">
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

        typeName:this.para.typeName,
        userIdArr:this.para.userIdArr,
        pvt_subModuleMap: {
          vessel:['r1c1','r1c2','r1c3'],
          subModule:['typeName','settingState','iconText'],
        },
        pvt_isShow: {
          r1c1:null,
          r1c2:null,
          r1c3:null,
        },
        pvt_eventPortInput: ['typeClickEvent'],

        stateText:null,
        textColor:null,
      };
    },
    watch: {
      typeName: {
        handler: function (val, oldVal) {
          if (val !== oldVal && this.paraVarPair.typeName) {
            if (this.number !== undefined) { // 循环
              this.$parent[this.paraVarPair.typeName][this.number] = val
            } else { // 非循环
              this.$parent[this.paraVarPair.typeName] = val
            }
          }
        },
        deep   : true
      },
      userIdArr: {
        handler: function (val, oldVal) {
          if (val !== oldVal && this.paraVarPair.userIdArr) {
            if (this.number !== undefined) { // 循环
              this.$parent[this.paraVarPair.userIdArr][this.number] = val
            } else { // 非循环
              this.$parent[this.paraVarPair.userIdArr] = val
            }
          }
        },
        deep   : true
      },
    },
    computed:{
      pvt_r1c1:function(){
        return {
          typeName:{
            paraVarPair:{
            },
            para:{
              textData:this.typeName + ':',
            },
            attr:{
              label:'div',
              textAlign:'left',
              height:'54px',
              color:'#333333',
              fontSize:'14px',
              background:'transparent',
            },
          },
        };
      },
      pvt_r1c2:function(){
        return {
          settingState:{
            paraVarPair:{
              textData:'stateText',
            },
            para:{
              textData:this.stateText,
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'right',
              height:'54px',
              color:this.textColor,
              fontSize:'14px',
              background:'transparent',
            },
          },
        };
      },
      pvt_r1c3:function(){
        return {
          iconText:{
            paraVarPair:{
            },
            para:{
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'right',
              height:'54px',
              color:'#333333',
              fontSize:'14px',
              background:'transparent',
              icon:'van-icon-arrow',
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
              $this.typeName = '';
              $this.userIdArr = [];
              $this.stateText = '请选择';
              $this.textColor = '#999999';
              if($this.para.typeName){
                $this.typeName = $this.para.typeName;
              }
              if($this.para.userIdArr){
                $this.userIdArr = $this.para.userIdArr;
              }
              if($this.userIdArr.length > 0){
                $this.stateText = '已选' + $this.userIdArr.length + '项';
                $this.textColor = '#333333';
              }
              para.nStep = 'showModules';
              ++dbFlag;
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                'typeName','settingState','iconText'
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
      typeClick:function(){
        this.ep.typeClickEvent(this.number);
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
          sm1:'typeName',
          sm2:'settingState',
          sm3:'iconText'
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
                para.nStep = 'startModule_text1';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_text1':
              $this.sm[ref.sm1].startModule(function(){
                para.nStep = 'startModule_text2';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_text2':
              $this.sm[ref.sm2].startModule(function(){
                para.nStep = 'startModule_text3';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_text3':
              $this.sm[ref.sm3].startModule(function(){
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
      settingState_textClickEvent:function(){
        this.typeClick();
      },
      iconText_textClickEvent:function(){
        this.typeClick();
      },
    },
  };
</script>
<style lang="less" scoped>
    @import '../../../../../../assets/var_sq';
  .mcbManagerRow_container {
  }
  .mcbManagerRow_row {
    display:flex;
    flex:1;
  }
  .mcbManagerRow_col {
    display:flex;
    flex-direction:column;
  }
  .mcbManagerRow_col_mcbManagerRowWindow_size_medium {
    width:@mcbManagerRow-mcbManagerRowWindow-medium-width;
    height:@mcbManagerRow-mcbManagerRowWindow-medium-height;
  }
  .mcbManagerRow_col_mcbManagerRowWindow {
    border-style:@mcbManagerRow-mcbManagerRowWindow-border-style;
    border-width:@mcbManagerRow-mcbManagerRowWindow-border-width;
    border-radius:@mcbManagerRow-mcbManagerRowWindow-border-radius;
    border-color:mix(@mcbManagerRow-mcbManagerRowWindow-border-color,#fff,@mcbManagerRow-mcbManagerRowWindow-hover-border-color-opacity);
  }
  .mcbManagerRow_col_r1c1_size_medium {
    width:@mcbManagerRow-r1c1-medium-width;
    height:@mcbManagerRow-r1c1-medium-height;
  }
  .mcbManagerRow_col_r1c2_size_medium {
    width:@mcbManagerRow-r1c2-medium-width;
    height:@mcbManagerRow-r1c2-medium-height;
  }
  .mcbManagerRow_col_r1c3_size_medium {
    width:@mcbManagerRow-r1c3-medium-width;
    height:@mcbManagerRow-r1c3-medium-height;
  }
</style>
