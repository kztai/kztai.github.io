<template>
  <div class="mcbBudgetSetting1_container">
    <div class="mcbBudgetSetting1_row mcbBudgetSetting1_row_mcbBudgetSetting1Row">
      <div :class="{mcbBudgetSetting1_col:true,mcbBudgetSetting1_col_mcbBudgetSetting1Window:true,mcbBudgetSetting1_col_mcbBudgetSetting1Window_size_large:attr.size==='large',mcbBudgetSetting1_col_mcbBudgetSetting1Window_size_medium:attr.size==='medium',mcbBudgetSetting1_col_mcbBudgetSetting1Window_size_small:attr.size==='small',mcbBudgetSetting1_col_mcbBudgetSetting1Window_size_min:attr.size==='min',mcbBudgetSetting1_col_mcbBudgetSetting1Window_checked:attr.checked,mcbBudgetSetting1_col_mcbBudgetSetting1Window_disable:attr.disabled}">

        <div class="mcbBudgetSetting1_row mcbBudgetSetting1_row_row1">
          <div :class="{mcbBudgetSetting1_col:true,mcbBudgetSetting1_col_r1c1:true,mcbBudgetSetting1_col_r1c1_size_large:attr.size==='large',mcbBudgetSetting1_col_r1c1_size_medium:attr.size==='medium',mcbBudgetSetting1_col_r1c1_size_small:attr.size==='small',mcbBudgetSetting1_col_r1c1_size_min:attr.size==='min',mcbBudgetSetting1_col_r1c1_checked:attr.checked,mcbBudgetSetting1_col_r1c1_disable:attr.disabled}">

            <div class="mcbBudgetSetting1_row mcbBudgetSetting1_row_row2">
              <div :class="{mcbBudgetSetting1_col:true,mcbBudgetSetting1_col_r1_1c1:true,mcbBudgetSetting1_col_r1_1c1_size_large:attr.size==='large',mcbBudgetSetting1_col_r1_1c1_size_medium:attr.size==='medium',mcbBudgetSetting1_col_r1_1c1_size_small:attr.size==='small',mcbBudgetSetting1_col_r1_1c1_size_min:attr.size==='min',mcbBudgetSetting1_col_r1_1c1_checked:attr.checked,mcbBudgetSetting1_col_r1_1c1_disable:attr.disabled}">

                <lm2b-link-text
                        ref="backText"
                        refId="backText"
                        v-show="pvt_isShow.r1_1c1 === 'backText'"
                        :paraVarPair="pvt_r1_1c1.backText.paraVarPair"
                        :para="pvt_r1_1c1.backText.para"
                        :attr="pvt_r1_1c1.backText.attr">
                </lm2b-link-text>
              </div>
              <div :class="{mcbBudgetSetting1_col:true,mcbBudgetSetting1_col_r1_1c2:true,mcbBudgetSetting1_col_r1_1c2_size_large:attr.size==='large',mcbBudgetSetting1_col_r1_1c2_size_medium:attr.size==='medium',mcbBudgetSetting1_col_r1_1c2_size_small:attr.size==='small',mcbBudgetSetting1_col_r1_1c2_size_min:attr.size==='min',mcbBudgetSetting1_col_r1_1c2_checked:attr.checked,mcbBudgetSetting1_col_r1_1c2_disable:attr.disabled}">

                <lm2b-link-text
                        ref="titleText"
                        refId="titleText"
                        v-show="pvt_isShow.r1_1c2 === 'titleText'"
                        :paraVarPair="pvt_r1_1c2.titleText.paraVarPair"
                        :para="pvt_r1_1c2.titleText.para"
                        :attr="pvt_r1_1c2.titleText.attr">
                </lm2b-link-text>
              </div>
              <div :class="{mcbBudgetSetting1_col:true,mcbBudgetSetting1_col_r1_1c3:true,mcbBudgetSetting1_col_r1_1c3_size_large:attr.size==='large',mcbBudgetSetting1_col_r1_1c3_size_medium:attr.size==='medium',mcbBudgetSetting1_col_r1_1c3_size_small:attr.size==='small',mcbBudgetSetting1_col_r1_1c3_size_min:attr.size==='min',mcbBudgetSetting1_col_r1_1c3_checked:attr.checked,mcbBudgetSetting1_col_r1_1c3_disable:attr.disabled}">

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
        <div class="mcbBudgetSetting1_row mcbBudgetSetting1_row_row3">
          <div :class="{mcbBudgetSetting1_col:true,mcbBudgetSetting1_col_r2c1:true,mcbBudgetSetting1_col_r2c1_size_large:attr.size==='large',mcbBudgetSetting1_col_r2c1_size_medium:attr.size==='medium',mcbBudgetSetting1_col_r2c1_size_small:attr.size==='small',mcbBudgetSetting1_col_r2c1_size_min:attr.size==='min',mcbBudgetSetting1_col_r2c1_checked:attr.checked,mcbBudgetSetting1_col_r2c1_disable:attr.disabled}">

            <div class="mcbBudgetSetting1_row mcbBudgetSetting1_row_row4">
              <div :class="{mcbBudgetSetting1_col:true,mcbBudgetSetting1_col_r2_1c1:true,mcbBudgetSetting1_col_r2_1c1_size_large:attr.size==='large',mcbBudgetSetting1_col_r2_1c1_size_medium:attr.size==='medium',mcbBudgetSetting1_col_r2_1c1_size_small:attr.size==='small',mcbBudgetSetting1_col_r2_1c1_size_min:attr.size==='min',mcbBudgetSetting1_col_r2_1c1_checked:attr.checked,mcbBudgetSetting1_col_r2_1c1_disable:attr.disabled}">
                <mcb-budget-row
                        ref="budgetRow"
                        refId="budgetRow"
                        v-show="pvt_isShow.r2_1c1 === 'budgetRow'"
                        :paraVarPair="pvt_r2_1c1.budgetRow.paraVarPair"
                        v-for="(item, index) in pvt_r2_1c1.budgetRow.forData"
                        :number="index"
                        :para="item.para"
                        :attr="item.attr">
                </mcb-budget-row>
              </div>
            </div>
            <div class="mcbBudgetSetting1_row mcbBudgetSetting1_row_row5">
              <div :class="{mcbBudgetSetting1_col:true,mcbBudgetSetting1_col_r2_2c1:true,mcbBudgetSetting1_col_r2_2c1_size_large:attr.size==='large',mcbBudgetSetting1_col_r2_2c1_size_medium:attr.size==='medium',mcbBudgetSetting1_col_r2_2c1_size_small:attr.size==='small',mcbBudgetSetting1_col_r2_2c1_size_min:attr.size==='min',mcbBudgetSetting1_col_r2_2c1_checked:attr.checked,mcbBudgetSetting1_col_r2_2c1_disable:attr.disabled}">

                <lm2b-link-text
                        ref="addText"
                        refId="addText"
                        v-show="pvt_isShow.r2_2c1 === 'addText'"
                        :paraVarPair="pvt_r2_2c1.addText.paraVarPair"
                        :para="pvt_r2_2c1.addText.para"
                        :attr="pvt_r2_2c1.addText.attr">
                </lm2b-link-text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mcbBudgetSetting1_dialog">
      <mcb-budget-custom-dia
              ref="customDia"
              refId="customDia"
              v-show="pvt_isShow.r3c1 === 'customDia'"
              :paraVarPair="pvt_r3c1.customDia.paraVarPair"
              :para="pvt_r3c1.customDia.para"
              :attr="pvt_r3c1.customDia.attr">
      </mcb-budget-custom-dia>
      <mcb-budget-expend-dialog
              ref="expendDia"
              refId="expendDia"
              v-show="pvt_isShow.r3c1 === 'expendDia'"
              :paraVarPair="pvt_r3c1.expendDia.paraVarPair"
              :para="pvt_r3c1.expendDia.para"
              :attr="pvt_r3c1.expendDia.attr">
      </mcb-budget-expend-dialog>
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
  import mcbBudgetRow from './budgetRow.vue';
  import mcbBudgetCustomDia from './customDialog.vue';
  import mcbBudgetExpendDialog from './expendDialog.vue';
  import confirmDialog from '../../confirmDialog.vue';
  export default {
    components: {mcbBudgetRow,mcbBudgetCustomDia,mcbBudgetExpendDialog,confirmDialog},
    inject: ['sys'],
    props: ['refId','para','attr','number'],
    data: function() {
      return {
        pvt_subModuleMap: {
          vessel:['r1_1c1','r1_1c2','r1_1c3','r2_2c1','r2_1c1','r3c1','r3c1','r3c1'],
          subModule:['backText','titleText','finishButton','addText','budgetRow','customDia','expendDia','saveDataDia'],
        },
        pvt_isShow: {
          r1_1c1:null,
          r1_1c2:null,
          r1_1c3:null,
          r2_2c1:null,
          r2_1c1:null,
          r3c1:null,
          customDia:null,
          expendDia:null,
          saveDataDia:null,
        },
        pvt_eventPortInput: ['confirmEvent'],

        nameArr:[],
        stateArr:[],
        sizeArr:[],
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
          titleText:{
            paraVarPair:{
            },
            para:{
              textData:'预算设置',
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
      pvt_r2_2c1:function(){
        return {
          addText:{
            paraVarPair:{
            },
            para:{
              textData:'增加常用项',
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'center',
              height:'44px',
              color:'#12B0FF',
              fontSize:'14px',
              background:'transparent',
              icon:'van-icon-plus',
              iconIsRight:false,
            },
          },
        };
      },
      pvt_r2_1c1:function(){
        let loopModule={
          budgetRow:{
            para:{
              name:this.nameArr,
              state:this.stateArr,
            },
            attr:{
              size:this.sizeArr,
            },
          },
        };
        let forData = this.pvt_createForData(loopModule);
        return {
          budgetRow:{
            paraVarPair:{
              name:'nameArr',
              state:'stateArr',
            },
            forData: forData.budgetRow,
          },
        };
      },
      pvt_r3c1:function(){
        return {
          customDia:{
            paraVarPair:{
            },
            para:{
            },
            attr:{
              size:'medium',
            },
          },
          expendDia:{
            paraVarPair:{
            },
            para:{
            },
            attr:{
              size:'medium',
            },
          },
          saveDataDia:{
            paraVarPair:{
            },
            para:{
            },
            attr:{
              size:'medium',
            },
          },
        };
      },

      pvt_customDia:function(){
        return {
          customDia:{
            paraVarPair:{
            },
            para:{
            },
            attr:{
              size:'medium',
            },
          },
        };
      },
      pvt_expendDia:function(){
        return {
          expendDia:{
            paraVarPair:{
            },
            para:{
            },
            attr:{
              size:'medium',
            },
          },
        };
      },
      pvt_saveDataDia:function(){
        return {
          saveDataDia:{
            paraVarPair:{
            },
            para:{
            },
            attr:{
              size:'medium',
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
          successCallBack: successCallBack,
          errorCallBack: errorCallBack,
          nStep: 0
        }
        let tableName;
        let parentRecord;
        let condition;
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
              $this.activityId = null;
              $this.nameArr = [];
              $this.stateArr = [];
              $this.sizeArr = [];
              $this.deleteIdArr = [];
              $this.dataArr = [];
              if(activityId){
                $this.activityId = activityId;
              }else{
                para.errorCallBack();
                return;
              }
              tableName = mac.mac.tb.groupActivityBudgetForm;
              parentRecord = [$this.activityId];
              condition = null;
              dbData = {};
              dbData[mac.mac.fd.id] = [];
              dbData[mac.mac.fd.groupActivityBudgetForm.name] = [];
              dbData[mac.mac.fd.groupActivityBudgetForm.unit] = [];
              dbData[mac.mac.fd.groupActivityBudgetForm.budgetAmount] = [];
              dbData[mac.mac.fd.groupActivityBudgetForm.budgetRemarks] = [];
              $this.sys.api.recordQuery(tableName,parentRecord,condition,dbData,function(){
                if(dbData[mac.mac.fd.id].length > 0){
                  for(let i = 0;i < dbData[mac.mac.fd.id].length;i++){
                    $this.nameArr.push(dbData[mac.mac.fd.groupActivityBudgetForm.name][i]);
                    $this.sizeArr.push('medium');
                    $this.dataArr.push({
                      id:dbData[mac.mac.fd.id][i],
                      index:i,
                      name:dbData[mac.mac.fd.groupActivityBudgetForm.name][i],
                      unit:dbData[mac.mac.fd.groupActivityBudgetForm.unit][i],
                      amount:dbData[mac.mac.fd.groupActivityBudgetForm.budgetAmount][i],
                      remark:dbData[mac.mac.fd.groupActivityBudgetForm.budgetRemarks][i],
                    });
                    if(dbData[mac.mac.fd.groupActivityBudgetForm.budgetAmount][i] || dbData[mac.mac.fd.groupActivityBudgetForm.budgetRemarks][i]){
                      $this.stateArr.push(true);
                    }else{
                      $this.stateArr.push(false);
                    }
                  }
                }
                para.nStep = 'showModules';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              },para.errorCallBack)
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                'backText','titleText','finishButton','addText','budgetRow'
              ];
              $this.showSubModule(refId,true,function(){
                para.nStep = 'startSubModules';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startSubModules':
              //调用子组件startModule方法
              $this.startSubModules(function(){
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
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
      showSaveDialog:function(){
        let $this = this;
        $this.showSubModule('saveDataDia',true,function(){
          let dialogData = {
            title:'是否保存修改后的预算设置?',
            btnText:['不了','保存']
          };
          $this.sm['saveDataDia'].startModule(dialogData,function(){
          },function(error){console.log(error)});
        },function(error){console.log(error)});
      },
      finishButtonClick:function(){
        this.makeSure(function(){},function(error){console.log(error)});
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
              if($this.deleteIdArr.length > 0){
                tableName = mac.mac.tb.groupActivityBudgetForm;
                $this.sys.api.recordDelete(tableName,$this.deleteIdArr,function(){
                  para.nStep = 'modifyRecord';
                  if(++dbFlag === 2){
                    $this.makeSure(successCallBack,errorCallBack);
                  }
                },para.errorCallBack)
              }else{
                para.nStep = 'modifyRecord';
                ++dbFlag;
              }
              break;
            case 'modifyRecord':
              tableName = mac.mac.tb.groupActivityBudgetForm;
              dbData = {};
              dbData[mac.mac.fd.id] = [];
              dbData[mac.mac.fd.groupActivityBudgetForm.name] = [];
              dbData[mac.mac.fd.groupActivityBudgetForm.unit] = [];
              dbData[mac.mac.fd.groupActivityBudgetForm.budgetAmount] = [];
              dbData[mac.mac.fd.groupActivityBudgetForm.budgetRemarks] = [];
              for(let i = 0;i < $this.dataArr.length;i++){
                if($this.dataArr[i].id){
                  dbData[mac.mac.fd.id].push($this.dataArr[i].id);
                  dbData[mac.mac.fd.groupActivityBudgetForm.name].push($this.dataArr[i].name);
                  dbData[mac.mac.fd.groupActivityBudgetForm.unit].push($this.dataArr[i].unit);
                  dbData[mac.mac.fd.groupActivityBudgetForm.budgetAmount].push($this.dataArr[i].amount);
                  dbData[mac.mac.fd.groupActivityBudgetForm.budgetRemarks].push($this.dataArr[i].remark);
                }
              }
              if(dbData[mac.mac.fd.id].length > 0){
                $this.sys.api.recordModify(tableName,dbData,function(){
                  para.nStep = 'newRecord';
                  if(++dbFlag === 2){
                    $this.makeSure(successCallBack,errorCallBack);
                  }
                },para.errorCallBack)
              }else{
                para.nStep = 'newRecord';
                ++dbFlag;
              }
              break;
            case 'newRecord':
              tableName = mac.mac.tb.groupActivityBudgetForm;
              parentRecord = $this.activityId;
              dbData = {};
              dbData[mac.mac.fd.groupActivityBudgetForm.name] = [];
              dbData[mac.mac.fd.groupActivityBudgetForm.unit] = [];
              dbData[mac.mac.fd.groupActivityBudgetForm.budgetAmount] = [];
              dbData[mac.mac.fd.groupActivityBudgetForm.budgetRemarks] = [];
              for(let i = 0;i < $this.dataArr.length;i++){
                if(!$this.dataArr[i].id){
                  dbData[mac.mac.fd.groupActivityBudgetForm.name].push($this.dataArr[i].name);
                  dbData[mac.mac.fd.groupActivityBudgetForm.unit].push($this.dataArr[i].unit);
                  dbData[mac.mac.fd.groupActivityBudgetForm.budgetAmount].push($this.dataArr[i].amount);
                  dbData[mac.mac.fd.groupActivityBudgetForm.budgetRemarks].push($this.dataArr[i].remark);
                }
              }
              if(dbData[mac.mac.fd.groupActivityBudgetForm.name].length > 0){
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
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.makeSure(successCallBack,errorCallBack);
                }
              },function(error){console.log(error)});
            case 'end':
              $this.hideSelfModule($this.refId,function(){
                $this.ep.confirmEvent();
              },function(error){console.log(error)});
              para.successCallBack();
              return
          }
          if(++dbFlag === 1){
            return
          }
        }
      },
      deleteForm:function(index){
        let $this = this;
        if($this.dataArr[index].id){
          if(!$this.deleteIdArr.includes($this.dataArr[index].id)){
            $this.deleteIdArr.push($this.dataArr[index].id);
          }
        }
        $this.dataArr.splice(index,1);
        $this.nameArr.splice(index,1);
        $this.stateArr.splice(index,1);
        $this.sizeArr.splice(index,1);
        for(let i = 0;i < $this.dataArr.length;i++){
          $this.dataArr[i].index = i;
        }
        //刷新显示
        $this.forceUpdateData(function(){
          //循环组件
          let arr = [];
          for(let i = 0;i < $this.nameArr.length;i++){
            arr.push([function(){},function(error){console.log(error)}]);
          }
          $this.callLoopModuleMethod('budgetRow','startModule',arr,function(){
          },function(error){console.log(error)});
        });
      },
      showSettingDialog:function(index){
        let $this = this;
        $this.showSubModule('expendDia',true,function(){
          let obj = $this.dataArr[index];
          $this.sm['expendDia'].startModule(obj,$this.nameArr,function(){
          },function(error){console.log(error)});
        },function(error){console.log(error)});
      },
      showCustomDialog:function(){
        let $this = this;
        $this.showSubModule('customDia',true,function(){
          $this.sm['customDia'].startModule($this.nameArr,function(){
          },function(error){console.log(error)});
        },function(error){console.log(error)});
      },
      addNewForm:function(name,unit){
        let $this = this;
        $this.dataArr.push({
          id:null,
          index:$this.dataArr.length,
          name:name,
          unit:unit,
          amount:null,
          remark:'',
        });
        $this.nameArr = [];
        $this.stateArr = [];
        $this.sizeArr = [];
        for(let i = 0;i < $this.dataArr.length;i++){
          $this.dataArr[i].index = i;
          $this.nameArr.push($this.dataArr[i].name);
          if($this.dataArr[i].amount || $this.dataArr[i].remark){
            $this.stateArr.push(true);
          }else{
            $this.stateArr.push(false);
          }
          $this.sizeArr.push('medium');
        }
        //刷新显示
        $this.forceUpdateData(function(){
          //循环组件
          let arr = [];
          for(let i = 0;i < $this.nameArr.length;i++){
            arr.push([function(){},function(error){console.log(error)}]);
          }
          $this.callLoopModuleMethod('budgetRow','startModule',arr,function(){
          },function(error){console.log(error)});
        });
      },
      formChange:function(arr){
        let $this = this;
        let index = arr.index;
        $this.dataArr[index].name = arr.name;
        $this.dataArr[index].amount = arr.amount;
        $this.dataArr[index].unit = arr.unit;
        $this.dataArr[index].remark = arr.remark;
        $this.$set($this.nameArr,index,arr.name);
        if(arr.amount || arr.remark){
          $this.$set($this.stateArr,index,true);
        }else{
          $this.$set($this.stateArr,index,false);
        }
        //刷新显示
        $this.forceUpdateData(function(){
          //循环组件
          let arr = [];
          for(let i = 0;i < $this.nameArr.length;i++){
            arr.push([function(){},function(error){console.log(error)}]);
          }
          $this.callLoopModuleMethod('budgetRow','startModule',arr,function(){
          },function(error){console.log(error)});
        });
      },
      affirmEvent:function(refId){
        this.finishButtonClick();
      },
      cancelEvent:function(refId){
        let $this = this;
        $this.hideSelfModule($this.refId,function(){
        },function(error){console.log(error)});
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
          sm1:'backText',
          sm2:'titleText',
          sm3:'finishButton',
          sm4:'addText',
          sm5:'budgetRow'
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
                para.nStep = 'startModule_backText';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_backText':
              $this.sm[ref.sm1].startModule(function(){
                para.nStep = 'startModule_titleText';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_titleText':
              $this.sm[ref.sm2].startModule(function(){
                para.nStep = 'startModule_finishButton';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_finishButton':
              $this.sm[ref.sm3].startModule(function(){
                para.nStep = 'startModule_add';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_add':
              $this.sm[ref.sm4].startModule(function(){
                para.nStep = 'startModule_row';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_row':
              //循环组件
              let arr = [];
              for(let i = 0;i < $this.nameArr.length;i++){
                arr.push([function(){},function(error){console.log(error)}]);
              }
              $this.callLoopModuleMethod(ref.sm5,'startModule',arr,function(){
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
      backText_textClickEvent:function(){
        this.showSaveDialog();
      },
      finishButton_buttonClickEvent:function(){
        this.finishButtonClick();
      },
      addText_textClickEvent:function(){
        this.showCustomDialog();
      },
      budgetRow_deleteFormEvent:function(index){
        this.deleteForm(index);
      },
      budgetRow_formClickEvent:function(index){
        this.showSettingDialog(index);
      },
      customDia_confirmEvent:function(name){
        this.addNewForm(name);
      },
      expendDia_confirmEvent:function(arr){
        this.formChange(arr);
      },
      saveDataDia_confirmEvent:function(refId){
        this.affirmEvent(refId);
      },
      saveDataDia_cancelEvent:function(refId){
        this.cancelEvent(refId);
      },
    },
  };
</script>
<style lang="less" scoped>
    @import '../../../../../../assets/var_sq';
  .mcbBudgetSetting1_container {
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    z-index:1000;
  }
  .mcbBudgetSetting1_row {
    display:flex;
    /*flex:1;*/
  }
  .mcbBudgetSetting1_col {
    display:flex;
    flex-direction:column;
  }
  .mcbBudgetSetting1_row_mcbBudgetSetting1Row{
    height:100%;
  }
  .mcbBudgetSetting1_col_mcbBudgetSetting1Window_size_medium {
    width:@mcbBudgetSetting1-mcbBudgetSetting1Window-medium-width;
  }
  .mcbBudgetSetting1_col_mcbBudgetSetting1Window {
    background-color:mix(@mcbBudgetSetting1-mcbBudgetSetting1Window-background-color,#fff,@mcbBudgetSetting1-mcbBudgetSetting1Window-background-color-opacity);
  }
  .mcbBudgetSetting1_col_r1c1_size_medium {
    width:@mcbBudgetSetting1-r1c1-medium-width;
    height:@mcbBudgetSetting1-r1c1-medium-height;
    padding:@mcbBudgetSetting1-r1c1-medium-padding;
  }
  .mcbBudgetSetting1_col_r1c1 {
    background-color:mix(@mcbBudgetSetting1-r1c1-background-color,#fff,@mcbBudgetSetting1-r1c1-background-color-opacity);
    position:fixed;
    top: 0;
    left:0;
    box-sizing:border-box;
  }
  .mcbBudgetSetting1_col_r1_1c1_size_medium {
    width:@mcbBudgetSetting1-r1_1c1-medium-width;
    height:@mcbBudgetSetting1-r1_1c1-medium-height;
  }
  .mcbBudgetSetting1_col_r1_1c2_size_medium {
    width:@mcbBudgetSetting1-r1_1c2-medium-width;
    height:@mcbBudgetSetting1-r1_1c2-medium-height;
  }
  .mcbBudgetSetting1_col_r1_1c3_size_medium {
    width:@mcbBudgetSetting1-r1_1c3-medium-width;
    height:@mcbBudgetSetting1-r1_1c3-medium-height;
    align-items:@mcbBudgetSetting1-r1_1c3-medium-horizontal-position;
    justify-content:@mcbBudgetSetting1-r1_1c3-medium-vertical-position;
  }
  .mcbBudgetSetting1_col_r2c1_size_medium {
    width:@mcbBudgetSetting1-r2c1-medium-width;
    height:@mcbBudgetSetting1-r2c1-medium-height;
    margin:@mcbBudgetSetting1-r2c1-medium-margin;
    padding:@mcbBudgetSetting1-r2c1-medium-padding;
  }
  .mcbBudgetSetting1_col_r2c1 {
    background-color:mix(@mcbBudgetSetting1-r2c1-background-color,#fff,@mcbBudgetSetting1-r2c1-background-color-opacity);
  }
  .mcbBudgetSetting1_col_r2_1c1_size_medium {
    width:@mcbBudgetSetting1-r2_1c1-medium-width;
  }
  .mcbBudgetSetting1_col_r2_2c1_size_medium {
    width:@mcbBudgetSetting1-r2_2c1-medium-width;
    height:@mcbBudgetSetting1-r2_2c1-medium-height;
    padding:@mcbBudgetSetting1-r2_2c1-medium-padding;
    margin:@mcbBudgetSetting1-r2_2c1-medium-margin;
  }
  .mcbBudgetSetting1_col_customDia_size_medium {
    width:@mcbBudgetSetting1-customDia-medium-width;
    height:@mcbBudgetSetting1-customDia-medium-height;
  }
  .mcbBudgetSetting1_col_expendDia_size_medium {
    width:@mcbBudgetSetting1-expendDia-medium-width;
    height:@mcbBudgetSetting1-expendDia-medium-height;
  }
  .mcbBudgetSetting1_col_saveDataDia_size_medium {
    width:@mcbBudgetSetting1-saveDataDia-medium-width;
    height:@mcbBudgetSetting1-saveDataDia-medium-height;
  }
  .mcbBudgetSetting1_dialog {
    position:fixed;
  }
</style>
