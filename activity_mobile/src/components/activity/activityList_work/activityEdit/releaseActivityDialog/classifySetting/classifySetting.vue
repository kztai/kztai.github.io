<template>
  <div :class="{mcbClassifySetting_col:true,mcbClassifySetting_col_mcbClassifySettingWindow:true,mcbClassifySetting_col_mcbClassifySettingWindow_size_large:attr.size==='large',mcbClassifySetting_col_mcbClassifySettingWindow_size_medium:attr.size==='medium',mcbClassifySetting_col_mcbClassifySettingWindow_size_small:attr.size==='small',mcbClassifySetting_col_mcbClassifySettingWindow_size_min:attr.size==='min',mcbClassifySetting_col_mcbClassifySettingWindow_checked:attr.checked,mcbClassifySetting_col_mcbClassifySettingWindow_disable:attr.disabled}">

    <div class="mcbClassifySetting_row mcbClassifySetting_row_row1">
      <div :class="{mcbClassifySetting_col:true,mcbClassifySetting_col_r1c1:true,mcbClassifySetting_col_r1c1_size_large:attr.size==='large',mcbClassifySetting_col_r1c1_size_medium:attr.size==='medium',mcbClassifySetting_col_r1c1_size_small:attr.size==='small',mcbClassifySetting_col_r1c1_size_min:attr.size==='min',mcbClassifySetting_col_r1c1_checked:attr.checked,mcbClassifySetting_col_r1c1_disable:attr.disabled}">

        <div class="mcbClassifySetting_row mcbClassifySetting_row_row2">
          <div :class="{mcbClassifySetting_col:true,mcbClassifySetting_col_r1_1c1:true,mcbClassifySetting_col_r1_1c1_size_large:attr.size==='large',mcbClassifySetting_col_r1_1c1_size_medium:attr.size==='medium',mcbClassifySetting_col_r1_1c1_size_small:attr.size==='small',mcbClassifySetting_col_r1_1c1_size_min:attr.size==='min',mcbClassifySetting_col_r1_1c1_checked:attr.checked,mcbClassifySetting_col_r1_1c1_disable:attr.disabled}">

            <lm2b-link-text
                    ref="backText"
                    refId="backText"
                    v-show="pvt_isShow.r1_1c1 === 'backText'"
                    :paraVarPair="pvt_r1_1c1.backText.paraVarPair"
                    :para="pvt_r1_1c1.backText.para"
                    :attr="pvt_r1_1c1.backText.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbClassifySetting_col:true,mcbClassifySetting_col_r1_1c2:true,mcbClassifySetting_col_r1_1c2_size_large:attr.size==='large',mcbClassifySetting_col_r1_1c2_size_medium:attr.size==='medium',mcbClassifySetting_col_r1_1c2_size_small:attr.size==='small',mcbClassifySetting_col_r1_1c2_size_min:attr.size==='min',mcbClassifySetting_col_r1_1c2_checked:attr.checked,mcbClassifySetting_col_r1_1c2_disable:attr.disabled}">

            <lm2b-link-text
                    ref="classifyTitle"
                    refId="classifyTitle"
                    v-show="pvt_isShow.r1_1c2 === 'classifyTitle'"
                    :paraVarPair="pvt_r1_1c2.classifyTitle.paraVarPair"
                    :para="pvt_r1_1c2.classifyTitle.para"
                    :attr="pvt_r1_1c2.classifyTitle.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbClassifySetting_col:true,mcbClassifySetting_col_r1_1c3:true,mcbClassifySetting_col_r1_1c3_size_large:attr.size==='large',mcbClassifySetting_col_r1_1c3_size_medium:attr.size==='medium',mcbClassifySetting_col_r1_1c3_size_small:attr.size==='small',mcbClassifySetting_col_r1_1c3_size_min:attr.size==='min',mcbClassifySetting_col_r1_1c3_checked:attr.checked,mcbClassifySetting_col_r1_1c3_disable:attr.disabled}">

            <lm2b-button
                    ref="finishButton"
                    refId="finishButton"
                    v-show="pvt_isShow.r1_1c3 === 'finishButton'"
                    :paraVarPair="pvt_r1_1c3.finishButton.paraVarPair"
                    :para="pvt_r1_1c3.finishButton.para"
                    :attr="pvt_r1_1c3.finishButton.attr">
            </lm2b-button>
          </div>
        </div>
      </div>
    </div>
    <div class="mcbClassifySetting_row mcbClassifySetting_row_row3">
      <div :class="{mcbClassifySetting_col:true,mcbClassifySetting_col_r2c1:true,mcbClassifySetting_col_r2c1_size_large:attr.size==='large',mcbClassifySetting_col_r2c1_size_medium:attr.size==='medium',mcbClassifySetting_col_r2c1_size_small:attr.size==='small',mcbClassifySetting_col_r2c1_size_min:attr.size==='min',mcbClassifySetting_col_r2c1_checked:attr.checked,mcbClassifySetting_col_r2c1_disable:attr.disabled}">
        <mcb-classify-row
                ref="classifyRow"
                refId="classifyRow"
                v-show="pvt_isShow.r2c1 === 'classifyRow'"
                :paraVarPair="pvt_r2c1.classifyRow.paraVarPair"
                v-for="(item, index) in pvt_r2c1.classifyRow.forData"
                :number="index"
                :para="item.para"
                :attr="item.attr">
        </mcb-classify-row>
      </div>
    </div>
    <div class="mcbClassifySetting_dialog">
      <confirm-dialog
              ref="saveDataDia"
              refId="saveDataDia"
              v-show="pvt_isShow.r3c1 === 'saveDataDia'"
              :paraVarPair="pvt_r3c1.saveDataDia.paraVarPair"
              :para="pvt_r3c1.saveDataDia.para"
              :attr="pvt_r3c1.saveDataDia.attr">
      </confirm-dialog>
    </div>
  </div>
</template>
<script>
  import libSys from '@/components/baseComponent/libSys.js';
  import libUpload from '@/components/baseComponent/libUpload.js';
  import mcbClassifyRow from './classifySettingRow.vue';
  import confirmDialog from '../../confirmDialog.vue';
  export default {
    components: {mcbClassifyRow,confirmDialog},
    inject: ['sys'],
    props: ['refId','para','attr','paraVarPair','number'],
    data: function() {
      return {
        activityId:null,
        pvt_subModuleMap: {
          vessel:['r1_1c1','r1_1c2','r1_1c3','r2c1','r3c1'],
          subModule:['backText','classifyTitle','finishButton','classifyRow','saveDataDia'],
        },
        pvt_isShow: {
          r1_1c1:null,
          r1_1c2:null,
          r1_1c3:null,
          r2c1:null,
          r3c1:null,
        },
        pvt_eventPortInput: ['confirmEvent'],
        titleArr:[],
        checkArr:[],
        checkedArr:[],
        sizeArr:[]
      };
    },
    watch: {
    },
    computed:{
      pvt_r1_1c1:function(){
        return {
          backText:{
            paraVarPair:{
            },
            para:{
              textData:'返回',
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'left',
              height:'42px',
              color:'#12B0FF',
              fontSize:'16px',
              background:'transparent',
              icon:'van-icon-arrow-left',
              iconIsRight:false,
            },
          },
        };
      },
      pvt_r1_1c2:function(){
        return {
          classifyTitle:{
            paraVarPair:{
            },
            para:{
              textData:'选择活动类别',
            },
            attr:{
              label:'div',
              textAlign:'center',
              fontWeight:true,
              height:'42px',
              color:'#000000',
              fontSize:'18px',
              background:'transparent',
            },
          },
        };
      },
      pvt_r1_1c3:function(){
        return {
          finishButton:{
            paraVarPair:{
            },
            para:{
              name:['完成'],
            },
            attr:{
              type:'primary',
              width:'60px',
              height:'35px',
            },
          },
        };
      },
      pvt_r2c1:function(){
        let loopModule={
          classifyRow:{
            para:{
              titleText:this.titleArr,
              checkedValue:this.checkedArr,
              checkArr:this.checkArr,
            },
            attr:{
              size:this.sizeArr,
            }
          },
        };
        let forData = this.pvt_createForData(loopModule);
        return {
          classifyRow:{
            paraVarPair:{
              checkedValue:'checkedArr'
            },
            forData: forData.classifyRow,
          },
        };
      },
      pvt_r3c1:function(){
        return {
          saveDataDia:{
            paraVarPair:{
            },
            para:{
            },
            attr:{
              size:'medium'
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
      startModule:function(activityId,successCallBack,errorCallBack){
        let $this = this;
        let para = {
          successCallBack:successCallBack,
          errorCallBack:errorCallBack,
          nStep:0
        }
        let dbFlag;
        let tableName;
        let dbData;
        let ref = {
          sm1:'backText',
          sm2:'classifyTitle',
          sm3:'finishButton',
          sm4:'classifyRow'
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
              $this.activityId = null;
              $this.titleArr = [];
              $this.checkArr = [];
              $this.checkedArr = [];
              $this.sizeArr = [];
              $this.dataArr = [];
              if(activityId){
                $this.activityId = activityId;
              }
              //新表中分类放在一个单独子表中
              tableName = mac.mac.tb.groupClassify;
              let parentRecord = [$this.activityId];
              let condition = null;
              dbData = {};
              dbData[mac.mac.fd.id] = [];
              dbData[mac.mac.fd.groupClassify.firstName] = [];
              dbData[mac.mac.fd.groupClassify.secondName] = [];
              $this.sys.api.recordQuery(tableName,parentRecord,condition,dbData,function(){
                for(let i = 0;i < dbData[mac.mac.fd.id].length;i++){
                  $this.dataArr.push({
                    id:dbData[mac.mac.fd.id][i],
                    firstName:dbData[mac.mac.fd.groupClassify.firstName][i],
                    secondName:dbData[mac.mac.fd.groupClassify.secondName][i]
                  });
                }
                para.nStep = 'downloadOption';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)})
              break;
            case 'downloadOption':
              //下载组织数据
              let portName = mac.mac.tb.activityOption;
              let data = {};
              data[portName] = [mac.mac.fd.activityOption.label];
              let expression = 'id = 1';
              let start = 0;
              let total = 1;
              let sort = ["id,asc"];
              let destGeneSite = '';
              $this.sys.api.conditiondataInput(portName,data,expression,start,total,sort,destGeneSite,function(result){
                para.optionId = result[0];
                para.nStep = 'searchOption';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)});
              break;
            case 'searchOption':
              tableName = mac.mac.tb.activityOption;
              dbData = {};
              dbData[mac.mac.fd.id] = [para.optionId];
              dbData[mac.mac.fd.activityOption.label] = [];
              $this.sys.api.recordRead(tableName,dbData,function(){
                //{'行业':['物流','农业','商务'],'爱好':['足球'],}
                if(dbData[mac.mac.fd.activityOption.label][0] !== null){
                  let checkboxArr = dbData[mac.mac.fd.activityOption.label][0];
                  for(let i in checkboxArr){
                    if(i){
                      $this.titleArr.push(i);
                      $this.checkArr.push(checkboxArr[i]);
                      $this.sizeArr.push('medium');
                    }
                  }
                }
                for(let i = 0;i < $this.titleArr.length;i++){
                  let checkedArr = [];
                  for(let m = 0;m < $this.dataArr.length;m++){
                    if($this.dataArr[m].firstName === $this.titleArr[i]){
                      checkedArr.push($this.dataArr[m].secondName);
                    }
                  }
                  $this.checkedArr.push(checkedArr);
                }
                para.nStep = 'showModules';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)})
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                'backText','classifyTitle','finishButton','classifyRow'
              ];
              $this.showSubModule(refId,true,function(){
                para.nStep = 'forceUpdateData';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'forceUpdateData':
              $this.forceUpdateData(function(){
                para.nStep = 'startModule_backButton';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_backButton':
              $this.sm[ref.sm1].startModule(function(){
                para.nStep = 'startModule_titleText';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_titleText':
              $this.sm[ref.sm2].startModule(function(){
                para.nStep = 'startModule_finishButton';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_finishButton':
              $this.sm[ref.sm3].startModule(function(){
                para.nStep = 'startModule_rows';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_rows':
              let paraArr = [];
              for(let i = 0;i < $this.titleArr.length;i++){
                paraArr.push([para.successCallBack,para.errorCallBack]);
              }
              $this.callLoopModuleMethod(ref.sm4,'startModule',paraArr,function(){
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
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
      showSaveDialog:function(){
        let $this = this;
        $this.showSubModule('saveDataDia',true,function(){
          let dialogData = {
            title:'是否保存修改后的活动类别设置?',
            btnText:['不了','保存']
          };
          $this.sm['saveDataDia'].startModule(dialogData,function(){
          },function(error){console.log(error)});
        },function(error){console.log(error)});
      },
      hideModule:function(refId){
        let $this = this;
        $this.hideSelfModule($this.refId,function(){
        },function(error){console.log(error)});
      },
      finishButtonClick:function(){
        this.makeSure(function(){},function(error){console.log(error)});
      },
      saveData:function(refId){
        this.finishButtonClick();
      },
      makeSure(successCallBack,errorCallBack){
        let $this = this;
        let para = {
          successCallBack: successCallBack,
          errorCallBack: errorCallBack,
          nStep: 0
        }
        let tableName;
        let parentRecord;
        let dbData;
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
              //整理数据、有无删除新增
              para.deleteIdArr = [];
              para.addArr = [];
              for(let i = 0;i < $this.dataArr.length;i++){
                let firstName = $this.dataArr[i].firstName;
                let secondName = $this.dataArr[i].secondName;
                for(let m = 0;m < $this.titleArr.length;m++){
                  if($this.titleArr[m] === firstName){
                    let checkedArr = $this.checkedArr[m];
                    if(!checkedArr.includes(secondName)){
                      para.deleteIdArr.push($this.dataArr[i].id);
                    }
                    break;
                  }
                }
              }
              for(let i = 0;i < $this.titleArr.length;i++){
                let checkedArr = $this.checkedArr[i];
                for(let m = 0;m < checkedArr.length;m++){
                  let num = 0;
                  for(let n = 0;n < $this.dataArr.length;n++){
                    if($this.dataArr[n].firstName === $this.titleArr[i] && $this.dataArr[n].secondName === checkedArr[m]){
                      num = 1;
                      break;
                    }
                  }
                  if(num === 0){
                    para.addArr.push([$this.titleArr[i],checkedArr[m]]);
                  }
                }
              }
              if(para.deleteIdArr.length > 0){
                para.nStep = 'deleteRecord';
              }else if(para.addArr.length > 0){
                para.nStep = 'newRecord';
              }else{
                para.nStep = 'end';
              }
              ++dbFlag;
              break;
            case 'deleteRecord':
              tableName = mac.mac.tb.groupClassify;
              $this.sys.api.recordDelete(tableName,para.deleteIdArr,function(){
                para.nStep = 'newRecord';
                if(++dbFlag === 2){
                  $this.makeSure(successCallBack,errorCallBack);
                }
              },para.errorCallBack)
              break;
            case 'newRecord':
              tableName = mac.mac.tb.groupClassify;
              parentRecord = $this.activityId;
              dbData = {};
              dbData[mac.mac.fd.groupClassify.firstName] = [];
              dbData[mac.mac.fd.groupClassify.secondName] = [];
              for(let i = 0;i < para.addArr.length;i++){
                dbData[mac.mac.fd.groupClassify.firstName].push(para.addArr[i][0]);
                dbData[mac.mac.fd.groupClassify.secondName].push(para.addArr[i][1]);
              }
              if(dbData[mac.mac.fd.groupClassify.firstName].length > 0){
                $this.sys.api.recordNew(tableName,parentRecord,dbData,function(){
                  para.nStep = 'upload';
                  if(++dbFlag === 2){
                    $this.makeSure(successCallBack,errorCallBack);
                  }
                },para.errorCallBack)
              }else{
                para.nStep = 'upload';
                ++dbFlag;
              }
              break;
            case 'upload':
              let data = {
                objectName:[mac.mac.tb.groupActivity],
                record:[[$this.activityId]],
              };
              $this.uploadData(data,function(){
                $this.ep.confirmEvent();
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.makeSure(successCallBack,errorCallBack);
                }
              },function(error){console.log(error)});
            case 'end':
              $this.hideSelfModule($this.refId,function(){
              },function(error){console.log(error)});
              para.successCallBack();
              return
          }
          if(++dbFlag === 1){
            return
          }
        }
      },
      backText_textClickEvent:function(){
        this.showSaveDialog();
      },
      finishButton_buttonClickEvent:function(){
        this.finishButtonClick();
      },
      saveDataDia_confirmEvent:function(refId){
        this.saveData(refId);
      },
      saveDataDia_cancelEvent:function(refId){
        this.hideModule(refId);
      },
    },
  };
</script>
<style lang="less" scoped>
    @import '../../../../../../assets/var_sq';
  .mcbClassifySetting_container {
  }
  .mcbClassifySetting_col_mcbClassifySettingWindow{
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    z-index:1000;
    background:#EDEDED;
  }
  .mcbClassifySetting_row {
    display:flex;
    /*flex:1;*/
  }
  .mcbClassifySetting_col {
    display:flex;
    flex-direction:column;
  }
  .mcbClassifySetting_col_mcbClassifySettingWindow_size_medium {
    width:@mcbClassifySetting-mcbClassifySettingWindow-medium-width;
  }
  .mcbClassifySetting_col_r1c1_size_medium {
    width:@mcbClassifySetting-r1c1-medium-width;
    height:@mcbClassifySetting-r1c1-medium-height;
    padding:@mcbClassifySetting-r1c1-medium-padding;
  }
  .mcbClassifySetting_col_r1c1 {
    background-color:mix(@mcbClassifySetting-r1c1-background-color,#fff,@mcbClassifySetting-r1c1-background-color-opacity);
    position:fixed;
    top:0;
    left:0;
    box-sizing:border-box;
  }
  .mcbClassifySetting_col_r1_1c1_size_medium {
    width:@mcbClassifySetting-r1_1c1-medium-width;
    height:@mcbClassifySetting-r1_1c1-medium-height;
    align-items:@mcbClassifySetting-r1_1c1-medium-horizontal-position;
  }
  .mcbClassifySetting_col_r1_1c2_size_medium {
    width:@mcbClassifySetting-r1_1c2-medium-width;
    height:@mcbClassifySetting-r1_1c2-medium-height;
  }
  .mcbClassifySetting_col_r1_1c3_size_medium {
    width:@mcbClassifySetting-r1_1c3-medium-width;
    height:@mcbClassifySetting-r1_1c3-medium-height;
    justify-content:center;
    align-items:flex-end;
  }
  .mcbClassifySetting_col_r2c1_size_medium {
    width:@mcbClassifySetting-r2c1-medium-width;
    padding:@mcbClassifySetting-r2c1-medium-padding;
  }
  .mcbClassifySetting_row_row3{
    height:100%;
  }
  .mcbClassifySetting_col_r2c1{
    height:calc(100% - 42px);
    margin:42px 0 0 0;
    background:#F4F4F4;
    overflow-x:hidden;
    overflow-y:auto;
  }
</style>
