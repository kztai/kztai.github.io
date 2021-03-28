<template>
  <div class="mcbManagerSetting1_container">
    <div class="mcbManagerSetting1_row mcbManagerSetting1_row_mcbManagerSetting1Row">
      <div :class="{mcbManagerSetting1_col:true,mcbManagerSetting1_col_mcbManagerSetting1Window:true,mcbManagerSetting1_col_mcbManagerSetting1Window_size_large:attr.size==='large',mcbManagerSetting1_col_mcbManagerSetting1Window_size_medium:attr.size==='medium',mcbManagerSetting1_col_mcbManagerSetting1Window_size_small:attr.size==='small',mcbManagerSetting1_col_mcbManagerSetting1Window_size_min:attr.size==='min',mcbManagerSetting1_col_mcbManagerSetting1Window_checked:attr.checked,mcbManagerSetting1_col_mcbManagerSetting1Window_disable:attr.disabled}">

        <div class="mcbManagerSetting1_row mcbManagerSetting1_row_row1">
          <div :class="{mcbManagerSetting1_col:true,mcbManagerSetting1_col_r1c1:true,mcbManagerSetting1_col_r1c1_size_large:attr.size==='large',mcbManagerSetting1_col_r1c1_size_medium:attr.size==='medium',mcbManagerSetting1_col_r1c1_size_small:attr.size==='small',mcbManagerSetting1_col_r1c1_size_min:attr.size==='min',mcbManagerSetting1_col_r1c1_checked:attr.checked,mcbManagerSetting1_col_r1c1_disable:attr.disabled}">

            <div class="mcbManagerSetting1_row mcbManagerSetting1_row_row2">
              <div :class="{mcbManagerSetting1_col:true,mcbManagerSetting1_col_r1_1c1:true,mcbManagerSetting1_col_r1_1c1_size_large:attr.size==='large',mcbManagerSetting1_col_r1_1c1_size_medium:attr.size==='medium',mcbManagerSetting1_col_r1_1c1_size_small:attr.size==='small',mcbManagerSetting1_col_r1_1c1_size_min:attr.size==='min',mcbManagerSetting1_col_r1_1c1_checked:attr.checked,mcbManagerSetting1_col_r1_1c1_disable:attr.disabled}">

                <lm2b-link-text
                        ref="backText"
                        refId="backText"
                        v-show="pvt_isShow.r1_1c1 === 'backText'"
                        :paraVarPair="pvt_r1_1c1.backText.paraVarPair"
                        :para="pvt_r1_1c1.backText.para"
                        :attr="pvt_r1_1c1.backText.attr">
                </lm2b-link-text>
              </div>
              <div :class="{mcbManagerSetting1_col:true,mcbManagerSetting1_col_r1_1c2:true,mcbManagerSetting1_col_r1_1c2_size_large:attr.size==='large',mcbManagerSetting1_col_r1_1c2_size_medium:attr.size==='medium',mcbManagerSetting1_col_r1_1c2_size_small:attr.size==='small',mcbManagerSetting1_col_r1_1c2_size_min:attr.size==='min',mcbManagerSetting1_col_r1_1c2_checked:attr.checked,mcbManagerSetting1_col_r1_1c2_disable:attr.disabled}">

                <lm2b-link-text
                        ref="titleText"
                        refId="titleText"
                        v-show="pvt_isShow.r1_1c2 === 'titleText'"
                        :paraVarPair="pvt_r1_1c2.titleText.paraVarPair"
                        :para="pvt_r1_1c2.titleText.para"
                        :attr="pvt_r1_1c2.titleText.attr">
                </lm2b-link-text>
              </div>
              <div :class="{mcbManagerSetting1_col:true,mcbManagerSetting1_col_r1_1c3:true,mcbManagerSetting1_col_r1_1c3_size_large:attr.size==='large',mcbManagerSetting1_col_r1_1c3_size_medium:attr.size==='medium',mcbManagerSetting1_col_r1_1c3_size_small:attr.size==='small',mcbManagerSetting1_col_r1_1c3_size_min:attr.size==='min',mcbManagerSetting1_col_r1_1c3_checked:attr.checked,mcbManagerSetting1_col_r1_1c3_disable:attr.disabled}">

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
        <div class="mcbManagerSetting1_row mcbManagerSetting1_row_row3">
          <div :class="{mcbManagerSetting1_col:true,mcbManagerSetting1_col_r2c1:true,mcbManagerSetting1_col_r2c1_size_large:attr.size==='large',mcbManagerSetting1_col_r2c1_size_medium:attr.size==='medium',mcbManagerSetting1_col_r2c1_size_small:attr.size==='small',mcbManagerSetting1_col_r2c1_size_min:attr.size==='min',mcbManagerSetting1_col_r2c1_checked:attr.checked,mcbManagerSetting1_col_r2c1_disable:attr.disabled}">

            <div class="mcbManagerSetting1_row mcbManagerSetting1_row_row4">
              <div :class="{mcbManagerSetting1_col:true,mcbManagerSetting1_col_r2_1c1:true,mcbManagerSetting1_col_r2_1c1_size_large:attr.size==='large',mcbManagerSetting1_col_r2_1c1_size_medium:attr.size==='medium',mcbManagerSetting1_col_r2_1c1_size_small:attr.size==='small',mcbManagerSetting1_col_r2_1c1_size_min:attr.size==='min',mcbManagerSetting1_col_r2_1c1_checked:attr.checked,mcbManagerSetting1_col_r2_1c1_disable:attr.disabled}">
                <mcb-manager-row
                        ref="managerRow"
                        refId="managerRow"
                        v-show="pvt_isShow.r2_1c1 === 'managerRow'"
                        :paraVarPair="pvt_r2_1c1.managerRow.paraVarPair"
                        v-for="(item, index) in pvt_r2_1c1.managerRow.forData"
                        :number="index"
                        :para="item.para"
                        :attr="item.attr">
                </mcb-manager-row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mcbManagerSetting1_dialog">
      <mcb-manage-deparment-dia
              ref="managerDeparentDia"
              refId="managerDeparentDia"
              v-show="pvt_isShow.rDia === 'managerDeparentDia'"
              :paraVarPair="pvt_rDia.managerDeparentDia.paraVarPair"
              :para="pvt_rDia.managerDeparentDia.para"
              :attr="pvt_rDia.managerDeparentDia.attr">
      </mcb-manage-deparment-dia>
      <confirm-dialog
              ref="saveDataDia"
              refId="saveDataDia"
              v-show="pvt_isShow.rDia === 'saveDataDia'"
              :paraVarPair="pvt_rDia.saveDataDia.paraVarPair"
              :para="pvt_rDia.saveDataDia.para"
              :attr="pvt_rDia.saveDataDia.attr">
      </confirm-dialog>
    </div>
  </div>
</template>
<script>
  import libSys from '@/components/baseComponent/libSys.js';
  import libUpload from '@/components/baseComponent/libUpload.js';
  import mcbManagerRow from './managerRow.vue';
  import mcbManageDeparmentDia from './managerSettingDialog.vue';
  import confirmDialog from '../../confirmDialog.vue';
  export default {
    components: {mcbManagerRow,mcbManageDeparmentDia,confirmDialog},
    inject: ['sys'],
    props: ['refId','para','attr','number'],
    data: function() {
      return {
        pvt_subModuleMap: {
          vessel:['r1_1c1','r1_1c2','r1_1c3','r2_1c1','rDia','rDia'],
          subModule:['backText','titleText','finishButton','managerRow','managerDeparentDia','saveDataDia'],
        },
        pvt_isShow: {
          r1_1c1:null,
          r1_1c2:null,
          r1_1c3:null,
          r2_1c1:null,
          rDia:null,
        },
        pvt_eventPortInput: ['confirmEvent'],
        nameArr:[],
        idArrs:[],
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
              textData:'管理成员',
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
      pvt_r2_1c1:function(){
        let loopModule={
          managerRow:{
            para:{
              typeName:this.nameArr,
              userIdArr:this.idArrs,
            },
            attr:{
              size:this.sizeArr,
            },
          },
        };
        let forData = this.pvt_createForData(loopModule);
        return {
          managerRow:{
            paraVarPair:{
              typeName:'nameArr',
              userIdArr:'idArrs',
            },
            forData: forData.managerRow,
          },
        };
      },
      pvt_rDia:function(){
        return {
          managerDeparentDia:{
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

      pvt_compereSettingDia:function(){
        return {
          managerDeparentDia:{
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
      startModule(activityId,successCallBack,errorCallBack){
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
              $this.nameArr = ['主持人','主讲人','助手','在线客服'];
              $this.sizeArr = ['medium','medium','medium','medium'];
              $this.idArrs = [[],[],[],[]];
              $this.idArr = [];
              $this.idArrs2 = [[],[],[],[]];
              $this.groupId = null;
              if(activityId){
                $this.activityId = activityId;
              }else{
                para.errorCallBack();
                return;
              }
              para.nStep = 'searchActivity';
              ++dbFlag;
              break;
            case 'searchActivity':
              tableName = mac.mac.tb.groupActivity;
              dbData = {};
              dbData[mac.mac.fd.id] = [$this.activityId];
              dbData[mac.mac.fd.groupActivity.groupId] = [];
              $this.sys.api.recordRead(tableName,dbData,function(){
                $this.groupId = dbData[mac.mac.fd.groupActivity.groupId][0];
                para.nStep = 'searchMember';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              },para.errorCallBack)
              break;
            case 'searchMember':
              tableName = mac.mac.tb.groupActivityManageMember;
              parentRecord = [$this.activityId];
              condition = null;
              dbData = {};
              dbData[mac.mac.fd.id] = [];
              dbData[mac.mac.fd.groupActivityManageMember.member] = [];
              dbData[mac.mac.fd.groupActivityManageMember.function] = [];
              $this.sys.api.recordQuery(tableName,parentRecord,condition,dbData,function(){
                if(dbData[mac.mac.fd.id].length > 0){
                  for(let i = 0;i < dbData[mac.mac.fd.id].length;i++){
                    let functionType = dbData[mac.mac.fd.groupActivityManageMember.function][i];
                    let userId = dbData[mac.mac.fd.groupActivityManageMember.member][i];
                    $this.idArr.push({
                      id:dbData[mac.mac.fd.id][i],
                      userId:userId,
                      function:functionType
                    });
                    if(functionType === mac.mac.enum.groupActivityManageMember.function.host){
                      $this.idArrs[0].push(userId);
                    }else if(functionType === mac.mac.enum.groupActivityManageMember.function.lecture){
                      $this.idArrs[1].push(userId);
                    }else if(functionType === mac.mac.enum.groupActivityManageMember.function.assistant){
                      $this.idArrs[2].push(userId);
                    }else if(functionType === mac.mac.enum.groupActivityManageMember.function.service){
                      $this.idArrs[3].push(userId);
                    }
                  }
                }
                $this.idArrs2 = JSON.parse(JSON.stringify($this.idArrs));
                para.nStep = 'showModules';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              },para.errorCallBack)
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                'backText','titleText','finishButton','managerRow',
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
            title:'是否保存修改后的管理成员信息?',
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
              //整理数据、有无删除新增
              para.deleteIdArr = [];
              para.addArr1 = [];
              para.addArr2 = [];
              para.addArr3 = [];
              para.addArr4 = [];
              for(let i = 0;i < $this.idArr.length;i++){
                let userId = $this.idArr[i].userId;
                let functionType = $this.idArr[i].function;
                if(functionType === mac.mac.enum.groupActivityManageMember.function.host){
                  if(!$this.idArrs[0].includes(userId)){
                    para.deleteIdArr.push($this.idArr[i].id);
                  }
                }else if(functionType === mac.mac.enum.groupActivityManageMember.function.lecture){
                  if(!$this.idArrs[1].includes(userId)){
                    para.deleteIdArr.push($this.idArr[i].id);
                  }
                }else if(functionType === mac.mac.enum.groupActivityManageMember.function.assistant){
                  if(!$this.idArrs[2].includes(userId)){
                    para.deleteIdArr.push($this.idArr[i].id);
                  }
                }else if(functionType === mac.mac.enum.groupActivityManageMember.function.service){
                  if(!$this.idArrs[3].includes(userId)){
                    para.deleteIdArr.push($this.idArr[i].id);
                  }
                }
              }
              for(let i = 0;i < $this.idArrs[0].length;i++){
                if(!$this.idArrs2[0].includes($this.idArrs[0][i])){
                  para.addArr1.push($this.idArrs[0][i]);
                }
              }
              for(let i = 0;i < $this.idArrs[1].length;i++){
                if(!$this.idArrs2[1].includes($this.idArrs[1][i])){
                  para.addArr2.push($this.idArrs[1][i]);
                }
              }
              for(let i = 0;i < $this.idArrs[2].length;i++){
                if(!$this.idArrs2[2].includes($this.idArrs[2][i])){
                  para.addArr3.push($this.idArrs[2][i]);
                }
              }
              for(let i = 0;i < $this.idArrs[3].length;i++){
                if(!$this.idArrs2[3].includes($this.idArrs[3][i])){
                  para.addArr4.push($this.idArrs[3][i]);
                }
              }
              if(para.deleteIdArr.length > 0){
                para.nStep = 'deleteRecord';
              }else if(para.addArr1.length > 0){
                para.nStep = 'newRecord';
              }else if(para.addArr2.length > 0){
                para.nStep = 'newRecord';
              }else if(para.addArr3.length > 0){
                para.nStep = 'newRecord';
              }else if(para.addArr4.length > 0){
                para.nStep = 'newRecord';
              }else{
                para.nStep = 'end';
              }
              ++dbFlag;
              break;
            case 'deleteRecord':
              tableName = mac.mac.tb.groupActivityManageMember;
              $this.sys.api.recordDelete(tableName,para.deleteIdArr,function(){
                para.nStep = 'newRecord';
                if(++dbFlag === 2){
                  $this.makeSure(successCallBack,errorCallBack);
                }
              },para.errorCallBack)
              break;
            case 'newRecord':
              tableName = mac.mac.tb.groupActivityManageMember;
              parentRecord = $this.activityId;
              dbData = {};
              dbData[mac.mac.fd.groupActivityManageMember.member] = [];
              dbData[mac.mac.fd.groupActivityManageMember.function] = [];
              for(let i = 0;i < para.addArr1.length;i++){
                dbData[mac.mac.fd.groupActivityManageMember.member].push(para.addArr1[i]);
                dbData[mac.mac.fd.groupActivityManageMember.function].push(mac.mac.enum.groupActivityManageMember.function.host);
              }
              for(let i = 0;i < para.addArr2.length;i++){
                dbData[mac.mac.fd.groupActivityManageMember.member].push(para.addArr2[i]);
                dbData[mac.mac.fd.groupActivityManageMember.function].push(mac.mac.enum.groupActivityManageMember.function.lecture);
              }
              for(let i = 0;i < para.addArr3.length;i++){
                dbData[mac.mac.fd.groupActivityManageMember.member].push(para.addArr3[i]);
                dbData[mac.mac.fd.groupActivityManageMember.function].push(mac.mac.enum.groupActivityManageMember.function.assistant);
              }
              for(let i = 0;i < para.addArr4.length;i++){
                dbData[mac.mac.fd.groupActivityManageMember.member].push(para.addArr4[i]);
                dbData[mac.mac.fd.groupActivityManageMember.function].push(mac.mac.enum.groupActivityManageMember.function.service);
              }
              if(dbData[mac.mac.fd.groupActivityManageMember.member].length > 0){
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
      typeClick:function(index){
        let $this = this;
        $this.showSubModule('managerDeparentDia',true,function(){
          $this.sm['managerDeparentDia'].startModule($this.groupId,index,$this.idArrs[index],function(){
          },function(error){console.log(error)});
        },function(error){console.log(error)});
      },
      memberChange:function(index,idArr){
        let $this = this;
        $this.$set($this.idArrs,index,idArr);
        //刷新显示
        $this.forceUpdateData(function(){
          //循环组件
          let arr = [];
          for(let i = 0;i < $this.nameArr.length;i++){
            arr.push([function(){},function(error){console.log(error)}]);
          }
          $this.callLoopModuleMethod('managerRow','startModule',arr,function(){
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
          sm4:'managerRow',
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
                para.nStep = 'startModule_title';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_title':
              $this.sm[ref.sm2].startModule(function(){
                para.nStep = 'startModule_button';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_button':
              $this.sm[ref.sm3].startModule(function(){
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
              $this.callLoopModuleMethod(ref.sm4,'startModule',arr,function(){
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
      managerRow_typeClickEvent:function(index){
        this.typeClick(index);
      },
      managerDeparentDia_confirmEvent:function(index,userIdArr){
        this.memberChange(index,userIdArr);
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
  .mcbManagerSetting1_container {
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:1000;
  }
  .mcbManagerSetting1_row {
    display:flex;
    /*flex:1;*/
  }
  .mcbManagerSetting1_col {
    display:flex;
    flex-direction:column;
  }
  .mcbManagerSetting1_row_mcbManagerSetting1Row{
    height:100%;
  }
  .mcbManagerSetting1_col_mcbManagerSetting1Window_size_medium {
    width:@mcbManagerSetting1-mcbManagerSetting1Window-medium-width;
  }
  .mcbManagerSetting1_col_mcbManagerSetting1Window {
    background-color:mix(@mcbManagerSetting1-mcbManagerSetting1Window-background-color,#fff,@mcbManagerSetting1-mcbManagerSetting1Window-background-color-opacity);
  }
  .mcbManagerSetting1_col_r1c1_size_medium {
    width:@mcbManagerSetting1-r1c1-medium-width;
    height:@mcbManagerSetting1-r1c1-medium-height;
    padding:@mcbManagerSetting1-r1c1-medium-padding;
  }
  .mcbManagerSetting1_col_r1c1 {
    background-color:mix(@mcbManagerSetting1-r1c1-background-color,#fff,@mcbManagerSetting1-r1c1-background-color-opacity);
    position:fixed;
    top:0;
    left:0;
    width:100%;
    box-sizing:border-box;
  }
  .mcbManagerSetting1_col_r1_1c1_size_medium {
    width:@mcbManagerSetting1-r1_1c1-medium-width;
    height:@mcbManagerSetting1-r1_1c1-medium-height;
  }
  .mcbManagerSetting1_col_r1_1c2_size_medium {
    width:@mcbManagerSetting1-r1_1c2-medium-width;
    height:@mcbManagerSetting1-r1_1c2-medium-height;
  }
  .mcbManagerSetting1_col_r1_1c3_size_medium {
    width:@mcbManagerSetting1-r1_1c3-medium-width;
    height:@mcbManagerSetting1-r1_1c3-medium-height;
    align-items:@mcbManagerSetting1-r1_1c3-medium-horizontal-position;
    justify-content:@mcbManagerSetting1-r1_1c3-medium-vertical-position;
  }
  .mcbManagerSetting1_row_row3{
    height:100%;
  }
  .mcbManagerSetting1_col_r2c1_size_medium {
    width:@mcbManagerSetting1-r2c1-medium-width;
    height:@mcbManagerSetting1-r2c1-medium-height;
    padding:@mcbManagerSetting1-r2c1-medium-padding;
    margin:@mcbManagerSetting1-r2c1-medium-margin;
  }
  .mcbManagerSetting1_col_r2c1 {
    background-color:mix(@mcbManagerSetting1-r2c1-background-color,#fff,@mcbManagerSetting1-r2c1-background-color-opacity);
  }
  .mcbManagerSetting1_col_r2_1c1_size_medium {
    width:@mcbManagerSetting1-r2_1c1-medium-width;
  }
  .mcbManagerSetting1_col_compereSettingDia_size_medium {
    width:@mcbManagerSetting1-compereSettingDia-medium-width;
    height:@mcbManagerSetting1-compereSettingDia-medium-height;
  }
  .mcbManagerSetting1_col_saveDataDia_size_medium {
    width:@mcbManagerSetting1-saveDataDia-medium-width;
    height:@mcbManagerSetting1-saveDataDia-medium-height;
  }
</style>
