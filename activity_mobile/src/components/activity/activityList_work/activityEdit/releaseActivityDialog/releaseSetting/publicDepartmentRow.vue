<template>
  <div class="mcbReleaseDeparmentRow_container">
    <div class="mcbReleaseDeparmentRow_row mcbReleaseDeparmentRow_row_mcbReleaseDeparmentRowRow">
      <div :class="{mcbReleaseDeparmentRow_col:true,mcbReleaseDeparmentRow_col_mcbReleaseDeparmentRowWindow:true,mcbReleaseDeparmentRow_col_mcbReleaseDeparmentRowWindow_size_large:attr.size==='large',mcbReleaseDeparmentRow_col_mcbReleaseDeparmentRowWindow_size_medium:attr.size==='medium',mcbReleaseDeparmentRow_col_mcbReleaseDeparmentRowWindow_size_small:attr.size==='small',mcbReleaseDeparmentRow_col_mcbReleaseDeparmentRowWindow_size_min:attr.size==='min',mcbReleaseDeparmentRow_col_mcbReleaseDeparmentRowWindow_checked:attr.checked,mcbReleaseDeparmentRow_col_mcbReleaseDeparmentRowWindow_disable:attr.disabled}">

        <div class="mcbReleaseDeparmentRow_row mcbReleaseDeparmentRow_row_row1">
          <div :class="{mcbReleaseDeparmentRow_col:true,mcbReleaseDeparmentRow_col_r1c1:true,mcbReleaseDeparmentRow_col_r1c1_size_large:attr.size==='large',mcbReleaseDeparmentRow_col_r1c1_size_medium:attr.size==='medium',mcbReleaseDeparmentRow_col_r1c1_size_small:attr.size==='small',mcbReleaseDeparmentRow_col_r1c1_size_min:attr.size==='min',mcbReleaseDeparmentRow_col_r1c1_checked:attr.checked,mcbReleaseDeparmentRow_col_r1c1_disable:attr.disabled}">

            <lm2b-link-text
                    ref="titleText"
                    refId="titleText"
                    v-show="pvt_isShow.r1c1 === 'titleText'"
                    :paraVarPair="pvt_r1c1.titleText.paraVarPair"
                    :para="pvt_r1c1.titleText.para"
                    :attr="pvt_r1c1.titleText.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbReleaseDeparmentRow_col:true,mcbReleaseDeparmentRow_col_r1c2:true,mcbReleaseDeparmentRow_col_r1c2_size_large:attr.size==='large',mcbReleaseDeparmentRow_col_r1c2_size_medium:attr.size==='medium',mcbReleaseDeparmentRow_col_r1c2_size_small:attr.size==='small',mcbReleaseDeparmentRow_col_r1c2_size_min:attr.size==='min',mcbReleaseDeparmentRow_col_r1c2_checked:attr.checked,mcbReleaseDeparmentRow_col_r1c2_disable:attr.disabled}">

            <lm2b-checkbox
                    ref="checkbox1"
                    refId="checkbox1"
                    v-show="pvt_isShow.r1c2 === 'checkbox1'"
                    :paraVarPair="pvt_r1c2.checkbox1.paraVarPair"
                    :para="pvt_r1c2.checkbox1.para"
                    :attr="pvt_r1c2.checkbox1.attr">
            </lm2b-checkbox>
          </div>
        </div>
        <div class="mcbReleaseDeparmentRow_row mcbReleaseDeparmentRow_row_row2">
          <div :class="{mcbReleaseDeparmentRow_col:true,mcbReleaseDeparmentRow_col_r2c1:true,mcbReleaseDeparmentRow_col_r2c1_size_large:attr.size==='large',mcbReleaseDeparmentRow_col_r2c1_size_medium:attr.size==='medium',mcbReleaseDeparmentRow_col_r2c1_size_small:attr.size==='small',mcbReleaseDeparmentRow_col_r2c1_size_min:attr.size==='min',mcbReleaseDeparmentRow_col_r2c1_checked:attr.checked,mcbReleaseDeparmentRow_col_r2c1_disable:attr.disabled}">

            <lm2b-checkbox
                    ref="checkbox2"
                    refId="checkbox2"
                    v-show="pvt_isShow.r2c1 === 'checkbox2'"
                    :paraVarPair="pvt_r2c1.checkbox2.paraVarPair"
                    :para="pvt_r2c1.checkbox2.para"
                    :attr="pvt_r2c1.checkbox2.attr">
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

        name:this.para.name,
        userIdArr:this.para.userIdArr,
        staffArr:this.para.staffArr,
        pvt_subModuleMap: {
          vessel:['r1c1','r1c2','r2c1'],
          subModule:['titleText','checkbox1','checkbox2'],
        },
        pvt_isShow: {
          r1c1:null,
          r1c2:null,
          r2c1:null,
        },
        pvt_eventPortInput: ['memberChangeEvent'],

        value1:[],
        define:[],
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
      staffArr: {
        handler: function (val, oldVal) {
          if (val !== oldVal && this.paraVarPair.staffArr) {
            if (this.number !== undefined) { // 循环
              this.$parent[this.paraVarPair.staffArr][this.number] = val
            } else { // 非循环
              this.$parent[this.paraVarPair.staffArr] = val
            }
          }
        },
        deep   : true
      },
    },
    computed:{
      pvt_r1c1:function(){
        return {
          titleText:{
            paraVarPair:{
            },
            para:{
              textData:this.name,
            },
            attr:{
              label:'div',
              textAlign:'left',
              height:'45px',
              color:'#333333',
              fontSize:'15px',
              background:'transparent',
            },
          },
        };
      },
      pvt_r1c2:function(){
        return {
          checkbox1:{
            paraVarPair:{
              checkData:'value1',
            },
            para:{
              checkData:this.value1,
            },
            attr:{
              checkboxArr:[{label:1,text:'全选'}],
              define:this.define,
              size:'small'
            },
          },
        };
      },
      pvt_r2c1:function(){
        return {
          checkbox2:{
            paraVarPair:{
            },
            para:{
              checkData:this.userIdArr,
            },
            attr:{
              checkboxArr:this.staffArr,
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
              $this.userIdArr = [];
              $this.staffArr = [];
              $this.name = '';
              if($this.para){
                if($this.para.userIdArr){
                  $this.userIdArr = $this.para.userIdArr;
                }
                if($this.para.staffArr){
                  $this.staffArr = $this.para.staffArr;
                }
                if($this.para.name){
                  $this.name = $this.para.name;
                }
              }
              $this.define = ['van-icon-circle','van-icon-passed'];
              $this.value1 = [1];
              for(let i = 0;i < $this.staffArr.length;i++){
                let userId = $this.staffArr[i].label;
                if(!$this.userIdArr.includes(userId)){
                  $this.value1 = [];
                  break;
                }
              }
              if($this.value1.length === 0){
                if($this.userIdArr.length > 0){
                  $this.define = ['van-icon-stop-circle-o','van-icon-passed'];
                }
              }
              para.nStep = 'showModules';
              ++dbFlag;
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                'titleText','checkbox1','checkbox2'
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
      chooseAll:function(){
        let $this = this;
        //修改数据
        $this.define = ['van-icon-circle','van-icon-passed'];
        $this.userIdArr = [];
        if($this.value1.length > 0){
          for(let i = 0;i < $this.staffArr.length;i++){
            let userId = $this.staffArr[i].label;
            $this.userIdArr.push(userId);
          }
        }
        //刷新显示
        $this.forceUpdateData(function(){
          $this.sm['checkbox1'].startModule(function(){
            $this.sm['checkbox2'].startModule(function(){
              //发事件
              $this.ep.memberChangeEvent($this.number);
            },function(error){console.log(error)});
          },function(error){console.log(error)});
        });
      },
      chooseOne:function(){
        let $this = this;
        //修改数据
        $this.define = ['van-icon-circle','van-icon-passed'];
        $this.value1 = [1];
        for(let i = 0;i < $this.staffArr.length;i++){
          let userId = $this.staffArr[i].label;
          if(!$this.userIdArr.includes(userId)){
            $this.value1 = [];
          }
        }
        if($this.value1.length === 0){
          if($this.userIdArr.length > 0){
            $this.define = ['van-icon-stop-circle-o','van-icon-passed'];
          }
        }
        //刷新显示
        $this.forceUpdateData(function(){
          $this.sm['checkbox1'].startModule(function(){
            $this.sm['checkbox2'].startModule(function(){
              //发事件
              $this.ep.memberChangeEvent($this.number);
            },function(error){console.log(error)});
          },function(error){console.log(error)});
        });
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
          sm1:'titleText',
          sm2:'checkbox1',
          sm3:'checkbox2'
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
                para.nStep = 'startModule_checkbox1';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_checkbox1':
              $this.sm[ref.sm2].startModule(function(){
                para.nStep = 'startModule_checkbox2';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_checkbox2':
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
      checkbox1_dataModifyEvent:function(){
        this.chooseAll();
      },
      checkbox2_dataModifyEvent:function(){
        this.chooseOne();
      },
    },
  };
</script>
<style lang="less" scoped>
    @import '../../../../../../assets/var_sq';
  .mcbReleaseDeparmentRow_container {
  }
  .mcbReleaseDeparmentRow_row {
    display:flex;
    /*flex:1;*/
  }
  .mcbReleaseDeparmentRow_col {
    display:flex;
    flex-direction:column;
  }
  .mcbReleaseDeparmentRow_col_mcbReleaseDeparmentRowWindow_size_medium {
    width:@mcbReleaseDeparmentRow-mcbReleaseDeparmentRowWindow-medium-width;
    height:@mcbReleaseDeparmentRow-mcbReleaseDeparmentRowWindow-medium-height;
    margin:@mcbReleaseDeparmentRow-mcbReleaseDeparmentRowWindow-medium-margin;
    padding:@mcbReleaseDeparmentRow-mcbReleaseDeparmentRowWindow-medium-padding;
  }
  .mcbReleaseDeparmentRow_col_r1c1_size_medium {
    width:@mcbReleaseDeparmentRow-r1c1-medium-width;
    height:@mcbReleaseDeparmentRow-r1c1-medium-height;
  }
  .mcbReleaseDeparmentRow_col_r1c2_size_medium {
    width:@mcbReleaseDeparmentRow-r1c2-medium-width;
    height:@mcbReleaseDeparmentRow-r1c2-medium-height;
    justify-content:center;
    align-items:flex-end;
  }
  .mcbReleaseDeparmentRow_col_r2c1_size_medium {
    width:@mcbReleaseDeparmentRow-r2c1-medium-width;
    padding:@mcbReleaseDeparmentRow-r2c1-medium-padding;
  }
</style>
