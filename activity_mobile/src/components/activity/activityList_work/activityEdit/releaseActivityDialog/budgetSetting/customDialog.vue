<template>
  <div class="maskClass">
    <div class="mcbBudgetCustomDia_container">
      <div class="mcbBudgetCustomDia_row mcbBudgetCustomDia_row_mcbBudgetCustomDiaRow">
        <div :class="{mcbBudgetCustomDia_col:true,mcbBudgetCustomDia_col_mcbBudgetCustomDiaWindow:true,mcbBudgetCustomDia_col_mcbBudgetCustomDiaWindow_size_large:attr.size==='large',mcbBudgetCustomDia_col_mcbBudgetCustomDiaWindow_size_medium:attr.size==='medium',mcbBudgetCustomDia_col_mcbBudgetCustomDiaWindow_size_small:attr.size==='small',mcbBudgetCustomDia_col_mcbBudgetCustomDiaWindow_size_min:attr.size==='min',mcbBudgetCustomDia_col_mcbBudgetCustomDiaWindow_checked:attr.checked,mcbBudgetCustomDia_col_mcbBudgetCustomDiaWindow_disable:attr.disabled}">

          <div class="mcbBudgetCustomDia_row mcbBudgetCustomDia_row_row1">
            <div :class="{mcbBudgetCustomDia_col:true,mcbBudgetCustomDia_col_r1c1:true,mcbBudgetCustomDia_col_r1c1_size_large:attr.size==='large',mcbBudgetCustomDia_col_r1c1_size_medium:attr.size==='medium',mcbBudgetCustomDia_col_r1c1_size_small:attr.size==='small',mcbBudgetCustomDia_col_r1c1_size_min:attr.size==='min',mcbBudgetCustomDia_col_r1c1_checked:attr.checked,mcbBudgetCustomDia_col_r1c1_disable:attr.disabled}">

              <div class="mcbBudgetCustomDia_row mcbBudgetCustomDia_row_row2">
                <div :class="{mcbBudgetCustomDia_col:true,mcbBudgetCustomDia_col_r1_1c1:true,mcbBudgetCustomDia_col_r1_1c1_size_large:attr.size==='large',mcbBudgetCustomDia_col_r1_1c1_size_medium:attr.size==='medium',mcbBudgetCustomDia_col_r1_1c1_size_small:attr.size==='small',mcbBudgetCustomDia_col_r1_1c1_size_min:attr.size==='min',mcbBudgetCustomDia_col_r1_1c1_checked:attr.checked,mcbBudgetCustomDia_col_r1_1c1_disable:attr.disabled}">

                  <lm2b-link-text
                          ref="titleText"
                          refId="titleText"
                          v-show="pvt_isShow.r1_1c1 === 'titleText'"
                          :paraVarPair="pvt_r1_1c1.titleText.paraVarPair"
                          :para="pvt_r1_1c1.titleText.para"
                          :attr="pvt_r1_1c1.titleText.attr">
                  </lm2b-link-text>
                </div>
              </div>
              <div class="mcbBudgetCustomDia_row mcbBudgetCustomDia_row_row3">
                <div :class="{mcbBudgetCustomDia_col:true,mcbBudgetCustomDia_col_r1_2c1:true,mcbBudgetCustomDia_col_r1_2c1_size_large:attr.size==='large',mcbBudgetCustomDia_col_r1_2c1_size_medium:attr.size==='medium',mcbBudgetCustomDia_col_r1_2c1_size_small:attr.size==='small',mcbBudgetCustomDia_col_r1_2c1_size_min:attr.size==='min',mcbBudgetCustomDia_col_r1_2c1_checked:attr.checked,mcbBudgetCustomDia_col_r1_2c1_disable:attr.disabled}">

                  <lm2b-radio
                          ref="budgetRadio"
                          refId="budgetRadio"
                          v-show="pvt_isShow.r1_2c1 === 'budgetRadio'"
                          :paraVarPair="pvt_r1_2c1.budgetRadio.paraVarPair"
                          :para="pvt_r1_2c1.budgetRadio.para"
                          :attr="pvt_r1_2c1.budgetRadio.attr">
                  </lm2b-radio>
                </div>
              </div>
            </div>
          </div>
          <div class="mcbBudgetCustomDia_row mcbBudgetCustomDia_row_row4">
            <div :class="{mcbBudgetCustomDia_col:true,mcbBudgetCustomDia_col_r2c1:true,mcbBudgetCustomDia_col_r2c1_size_large:attr.size==='large',mcbBudgetCustomDia_col_r2c1_size_medium:attr.size==='medium',mcbBudgetCustomDia_col_r2c1_size_small:attr.size==='small',mcbBudgetCustomDia_col_r2c1_size_min:attr.size==='min',mcbBudgetCustomDia_col_r2c1_checked:attr.checked,mcbBudgetCustomDia_col_r2c1_disable:attr.disabled}">

              <lm2b-link-text
                      ref="cancelText"
                      refId="cancelText"
                      v-show="pvt_isShow.r2c1 === 'cancelText'"
                      :paraVarPair="pvt_r2c1.cancelText.paraVarPair"
                      :para="pvt_r2c1.cancelText.para"
                      :attr="pvt_r2c1.cancelText.attr">
              </lm2b-link-text>
            </div>
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
    props: ['refId','para','attr','number'],
    data: function() {
      return {
        pvt_subModuleMap: {
          vessel:['r1_1c1','r1_2c1','r2c1'],
          subModule:['titleText','budgetRadio','cancelText'],
        },
        pvt_isShow: {
          r1_1c1:null,
          r1_2c1:null,
          r2c1:null,
        },
        pvt_eventPortInput: ['confirmEvent'],

        value1:null,
        radioArr:[],
        disabledArr:[],
      };
    },
    watch: {
    },
    computed:{
      pvt_r1_1c1:function(){
        return {
          titleText:{
            paraVarPair:{
            },
            para:{
              textData:'常用项',
            },
            attr:{
              label:'div',
              textAlign:'left',
              height:'25px',
              color:'#999999',
              fontSize:'14px',
              background:'transparent',
            },
          },
        };
      },
      pvt_r1_2c1:function(){
        return {
          budgetRadio:{
            paraVarPair:{
              radioData:'value1',
            },
            para:{
              radioData:this.value1,
            },
            attr:{
              radioArr:this.radioArr,
              disabledArr:this.disabledArr,
              button:true,
            },
          },
        };
      },
      pvt_r2c1:function(){
        return {
          cancelText:{
            paraVarPair:{
            },
            para:{
              textData:'取消',
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'center',
              height:'49px',
              color:'#333333',
              fontSize:'16px',
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
      startModule:function(nameArr,successCallBack,errorCallBack){
        let $this = this;
        let para = {
          successCallBack:successCallBack,
          errorCallBack:errorCallBack,
          nStep:0
        }
        let dbFlag;
        let ref = {
          sm1:'titleText',
          sm2:'budgetRadio',
          sm3:'cancelText'
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
              $this.value1 = null;
              $this.disabledArr = [];
              $this.radioArr = [];
              $this.unitArr = [];
              para.nStep = 'downloadOption';
              ++dbFlag;
              break;
            case 'downloadOption':
              //下载组织数据
              let portName = mac.mac.tb.activityOption;
              let data = {};
              data[portName] = [mac.mac.fd.activityOption.budget];
              let expression = 'id = 1';
              let start = 0;
              let total = 1;
              let sort = ["id,asc"];
              let destGeneSite = '';
              $this.sys.api.conditiondataInput(portName,data,expression,start,total,sort,destGeneSite,function(result){
                para.optionId = result[0];
                para.nStep = 'searchOption';
                if(++dbFlag === 2){
                  $this.startModule(nameArr,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)});
              break;
            case 'searchOption':
              //查找组织数据
              let tableName = mac.mac.tb.activityOption;
              let dbData = {};
              dbData[mac.mac.fd.id] = [para.optionId];
              dbData[mac.mac.fd.activityOption.budget] = [];
              $this.sys.api.recordRead(tableName,dbData,function(){
                if(dbData[mac.mac.fd.activityOption.budget][0] !== null){
                  let budgetObj = dbData[mac.mac.fd.activityOption.budget][0];
                  for(let i = 0;i < budgetObj.name.length;i++){
                    $this.radioArr.push({
                      label:budgetObj.name[i],
                      text:budgetObj.name[i]
                    });
                    $this.unitArr.push(budgetObj.unit[i]);
                  }
                }
                if(nameArr){
                  for(let i = 0;i < $this.radioArr.length;i++){
                    if(nameArr.includes($this.radioArr[i].label)){
                      $this.disabledArr.push(i + 1);
                    }
                  }
                }
                para.nStep = 'showModules';
                if(++dbFlag === 2){
                  $this.startModule(nameArr,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)});
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                'titleText','budgetRadio','cancelText'
              ];
              $this.showSubModule(refId,true,function(){
                para.nStep = 'forceUpdateData';
                if(++dbFlag === 2){
                  $this.startModule(nameArr,successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'forceUpdateData':
              $this.forceUpdateData(function(){
                para.nStep = 'startModule_title1';
                if(++dbFlag === 2){
                  $this.startModule(nameArr,successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_title1':
              $this.sm[ref.sm1].startModule(function(){
                para.nStep = 'startModule_radio1';
                if(++dbFlag === 2){
                  $this.startModule(nameArr,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)});
              break;
            case 'startModule_radio1':
              $this.sm[ref.sm2].startModule(function(){
                para.nStep = 'startModule_text2';
                if(++dbFlag === 2){
                  $this.startModule(nameArr,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)});
              break;
            case 'startModule_text2':
              $this.sm[ref.sm3].startModule(function(){
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.startModule(nameArr,successCallBack,errorCallBack);
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
      dataChange:function(){
        let $this = this;
        //获取选中常用项预算的单位
        let unit = null;
        for(let i = 0;i < $this.radioArr.length;i++){
          if($this.radioArr[i].label === $this.value1){
            unit = $this.unitArr[i];
            break;
          }
        }
        $this.hideSelfModule($this.refId,function(){
          $this.ep.confirmEvent($this.value1,unit);
        },function(error){console.log(error)});
      },
      hideModule:function(){
        let $this = this;
        $this.hideSelfModule($this.refId,function(){
        },function(error){console.log(error)});
      },
      budgetRadio_dataModifyEvent:function(){
        this.dataChange();
      },
      cancelText_textClickEvent:function(){
        this.hideModule();
      },
    },
  };
</script>
<style lang="less" scoped>
    @import '../../../../../../assets/var_sq';
  .maskClass{
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    z-index:1000;
    background:rgba(0,0,0,0.6);
  }
  .mcbBudgetCustomDia_container {
  }
  .mcbBudgetCustomDia_row {
    display:flex;
    /*flex:1;*/
  }
  .mcbBudgetCustomDia_col {
    display:flex;
    flex-direction:column;
  }
  .mcbBudgetCustomDia_row_mcbBudgetCustomDiaRow{
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    padding:0 16px 16px 16px;
    box-sizing:border-box;
  }
  .mcbBudgetCustomDia_col_mcbBudgetCustomDiaWindow_size_medium {
    width:@mcbBudgetCustomDia-mcbBudgetCustomDiaWindow-medium-width;
  }
  .mcbBudgetCustomDia_col_r1c1_size_medium {
    width:@mcbBudgetCustomDia-r1c1-medium-width;
    padding:@mcbBudgetCustomDia-r1c1-medium-padding;
  }
  .mcbBudgetCustomDia_col_r1c1 {
    background-color:mix(@mcbBudgetCustomDia-r1c1-background-color,#fff,@mcbBudgetCustomDia-r1c1-background-color-opacity);
    border-radius:@mcbBudgetCustomDia-r1c1-border-radius;
  }
  .mcbBudgetCustomDia_col_r1_1c1_size_medium {
    width:@mcbBudgetCustomDia-r1_1c1-medium-width;
    height:@mcbBudgetCustomDia-r1_1c1-medium-height;
  }
  .mcbBudgetCustomDia_col_r1_2c1_size_medium {
    width:@mcbBudgetCustomDia-r1_2c1-medium-width;
  }
  .mcbBudgetCustomDia_col_r2c1_size_medium {
    width:@mcbBudgetCustomDia-r2c1-medium-width;
    height:@mcbBudgetCustomDia-r2c1-medium-height;
    margin:@mcbBudgetCustomDia-r2c1-medium-margin;
  }
  .mcbBudgetCustomDia_col_r2c1 {
    border-radius:@mcbBudgetCustomDia-r2c1-border-radius;
    background-color:mix(@mcbBudgetCustomDia-r2c1-background-color,#fff,@mcbBudgetCustomDia-r2c1-background-color-opacity);
  }
</style>
