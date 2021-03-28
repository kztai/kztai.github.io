<template>
  <div class="mcbRegForm1_container">
    <div class="mcbRegForm1_row mcbRegForm1_row_mcbRegForm1Row">
      <div :class="{mcbRegForm1_col:true,mcbRegForm1_col_mcbRegForm1Window:true,mcbRegForm1_col_mcbRegForm1Window_size_large:attr.size==='large',mcbRegForm1_col_mcbRegForm1Window_size_medium:attr.size==='medium',mcbRegForm1_col_mcbRegForm1Window_size_small:attr.size==='small',mcbRegForm1_col_mcbRegForm1Window_size_min:attr.size==='min',mcbRegForm1_col_mcbRegForm1Window_checked:attr.checked,mcbRegForm1_col_mcbRegForm1Window_disable:attr.disabled}">

        <div class="mcbRegForm1_row mcbRegForm1_row_row1">
          <div :class="{mcbRegForm1_col:true,mcbRegForm1_col_r1c1:true,mcbRegForm1_col_r1c1_size_large:attr.size==='large',mcbRegForm1_col_r1c1_size_medium:attr.size==='medium',mcbRegForm1_col_r1c1_size_small:attr.size==='small',mcbRegForm1_col_r1c1_size_min:attr.size==='min',mcbRegForm1_col_r1c1_checked:attr.checked,mcbRegForm1_col_r1c1_disable:attr.disabled}">

            <div class="mcbRegForm1_row mcbRegForm1_row_row2">
              <div :class="{mcbRegForm1_col:true,mcbRegForm1_col_r1_1c1:true,mcbRegForm1_col_r1_1c1_size_large:attr.size==='large',mcbRegForm1_col_r1_1c1_size_medium:attr.size==='medium',mcbRegForm1_col_r1_1c1_size_small:attr.size==='small',mcbRegForm1_col_r1_1c1_size_min:attr.size==='min',mcbRegForm1_col_r1_1c1_checked:attr.checked,mcbRegForm1_col_r1_1c1_disable:attr.disabled}">

                <lm2b-link-text
                        ref="backText"
                        refId="backText"
                        v-show="pvt_isShow.r1_1c1 === 'backText'"
                        :paraVarPair="pvt_r1_1c1.backText.paraVarPair"
                        :para="pvt_r1_1c1.backText.para"
                        :attr="pvt_r1_1c1.backText.attr">
                </lm2b-link-text>
              </div>
              <div :class="{mcbRegForm1_col:true,mcbRegForm1_col_r1_1c2:true,mcbRegForm1_col_r1_1c2_size_large:attr.size==='large',mcbRegForm1_col_r1_1c2_size_medium:attr.size==='medium',mcbRegForm1_col_r1_1c2_size_small:attr.size==='small',mcbRegForm1_col_r1_1c2_size_min:attr.size==='min',mcbRegForm1_col_r1_1c2_checked:attr.checked,mcbRegForm1_col_r1_1c2_disable:attr.disabled}">

                <lm2b-link-text
                        ref="titleText"
                        refId="titleText"
                        v-show="pvt_isShow.r1_1c2 === 'titleText'"
                        :paraVarPair="pvt_r1_1c2.titleText.paraVarPair"
                        :para="pvt_r1_1c2.titleText.para"
                        :attr="pvt_r1_1c2.titleText.attr">
                </lm2b-link-text>
              </div>
              <div :class="{mcbRegForm1_col:true,mcbRegForm1_col_r1_1c3:true,mcbRegForm1_col_r1_1c3_size_large:attr.size==='large',mcbRegForm1_col_r1_1c3_size_medium:attr.size==='medium',mcbRegForm1_col_r1_1c3_size_small:attr.size==='small',mcbRegForm1_col_r1_1c3_size_min:attr.size==='min',mcbRegForm1_col_r1_1c3_checked:attr.checked,mcbRegForm1_col_r1_1c3_disable:attr.disabled}">

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
        <div class="mcbRegForm1_row mcbRegForm1_row_row3">
          <div :class="{mcbRegForm1_col:true,mcbRegForm1_col_r2c1:true,mcbRegForm1_col_r2c1_size_large:attr.size==='large',mcbRegForm1_col_r2c1_size_medium:attr.size==='medium',mcbRegForm1_col_r2c1_size_small:attr.size==='small',mcbRegForm1_col_r2c1_size_min:attr.size==='min',mcbRegForm1_col_r2c1_checked:attr.checked,mcbRegForm1_col_r2c1_disable:attr.disabled}">

            <div class="mcbRegForm1_row mcbRegForm1_row_row4">
              <div :class="{mcbRegForm1_col:true,mcbRegForm1_col_r2_1c1:true,mcbRegForm1_col_r2_1c1_size_large:attr.size==='large',mcbRegForm1_col_r2_1c1_size_medium:attr.size==='medium',mcbRegForm1_col_r2_1c1_size_small:attr.size==='small',mcbRegForm1_col_r2_1c1_size_min:attr.size==='min',mcbRegForm1_col_r2_1c1_checked:attr.checked,mcbRegForm1_col_r2_1c1_disable:attr.disabled}">

                <lm2b-link-text
                        ref="nameText"
                        refId="nameText"
                        v-show="pvt_isShow.r2_1c1 === 'nameText'"
                        :paraVarPair="pvt_r2_1c1.nameText.paraVarPair"
                        :para="pvt_r2_1c1.nameText.para"
                        :attr="pvt_r2_1c1.nameText.attr">
                </lm2b-link-text>
              </div>
            </div>
            <div class="mcbRegForm1_row mcbRegForm1_row_row5">
              <div :class="{mcbRegForm1_col:true,mcbRegForm1_col_r2_2c1:true,mcbRegForm1_col_r2_2c1_size_large:attr.size==='large',mcbRegForm1_col_r2_2c1_size_medium:attr.size==='medium',mcbRegForm1_col_r2_2c1_size_small:attr.size==='small',mcbRegForm1_col_r2_2c1_size_min:attr.size==='min',mcbRegForm1_col_r2_2c1_checked:attr.checked,mcbRegForm1_col_r2_2c1_disable:attr.disabled}">

                <lm2b-link-text
                        ref="phoneText"
                        refId="phoneText"
                        v-show="pvt_isShow.r2_2c1 === 'phoneText'"
                        :paraVarPair="pvt_r2_2c1.phoneText.paraVarPair"
                        :para="pvt_r2_2c1.phoneText.para"
                        :attr="pvt_r2_2c1.phoneText.attr">
                </lm2b-link-text>
              </div>
            </div>
            <div class="mcbRegForm1_row mcbRegForm1_row_row6">
              <div :class="{mcbRegForm1_col:true,mcbRegForm1_col_r2_3c1:true,mcbRegForm1_col_r2_3c1_size_large:attr.size==='large',mcbRegForm1_col_r2_3c1_size_medium:attr.size==='medium',mcbRegForm1_col_r2_3c1_size_small:attr.size==='small',mcbRegForm1_col_r2_3c1_size_min:attr.size==='min',mcbRegForm1_col_r2_3c1_checked:attr.checked,mcbRegForm1_col_r2_3c1_disable:attr.disabled}">

                <mcb-form-row
                        ref="formRow"
                        refId="formRow"
                        v-show="pvt_isShow.r2_3c1 === 'formRow'"
                        :paraVarPair="pvt_r2_3c1.formRow.paraVarPair"
                        v-for="(item, index) in pvt_r2_3c1.formRow.forData"
                        :number="index"
                        :para="item.para"
                        :attr="item.attr">
                </mcb-form-row>
              </div>
            </div>
            <div class="mcbRegForm1_row mcbRegForm1_row_row7">
              <div :class="{mcbRegForm1_col:true,mcbRegForm1_col_r2_4c1:true,mcbRegForm1_col_r2_4c1_size_large:attr.size==='large',mcbRegForm1_col_r2_4c1_size_medium:attr.size==='medium',mcbRegForm1_col_r2_4c1_size_small:attr.size==='small',mcbRegForm1_col_r2_4c1_size_min:attr.size==='min',mcbRegForm1_col_r2_4c1_checked:attr.checked,mcbRegForm1_col_r2_4c1_disable:attr.disabled}">

                <lm2b-link-text
                        ref="addText"
                        refId="addText"
                        v-show="pvt_isShow.r2_4c1 === 'addText'"
                        :paraVarPair="pvt_r2_4c1.addText.paraVarPair"
                        :para="pvt_r2_4c1.addText.para"
                        :attr="pvt_r2_4c1.addText.attr">
                </lm2b-link-text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mcbRegForm1_dialog">
      <mcb-form-type-dialog
              ref="formTypeDia"
              refId="formTypeDia"
              v-show="pvt_isShow.rDia === 'formTypeDia'"
              :paraVarPair="pvt_rDia.formTypeDia.paraVarPair"
              :para="pvt_rDia.formTypeDia.para"
              :attr="pvt_rDia.formTypeDia.attr">
      </mcb-form-type-dialog>
      <mcb-input-form-dialog
              ref="inputFormDia"
              refId="inputFormDia"
              v-show="pvt_isShow.rDia === 'inputFormDia'"
              :paraVarPair="pvt_rDia.inputFormDia.paraVarPair"
              :para="pvt_rDia.inputFormDia.para"
              :attr="pvt_rDia.inputFormDia.attr">
      </mcb-input-form-dialog>
      <mcb-option-form-dialog
              ref="optionFormDia"
              refId="optionFormDia"
              v-show="pvt_isShow.rDia === 'optionFormDia'"
              :paraVarPair="pvt_rDia.optionFormDia.paraVarPair"
              :para="pvt_rDia.optionFormDia.para"
              :attr="pvt_rDia.optionFormDia.attr">
      </mcb-option-form-dialog>
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
  import mcbFormRow from './formRow.vue';
  import mcbFormTypeDialog from './formTypeDialog.vue';
  import mcbInputFormDialog from './inputFormDialog.vue';
  import mcbOptionFormDialog from './optionFormDialog.vue';
  import confirmDialog from '../../confirmDialog.vue';
  export default {
    components: {mcbFormRow,mcbFormTypeDialog,mcbInputFormDialog,mcbOptionFormDialog,confirmDialog},
    inject: ['sys'],
    props: ['refId','para','attr','number'],
    data: function() {
      return {
        pvt_subModuleMap: {
          vessel:['r1_1c1','r1_1c2','r1_1c3','r2_1c1','r2_2c1','r2_3c1','r2_4c1',
            'rDia','rDia','rDia','rDia'],
          subModule:['backText','titleText','finishButton','nameText','phoneText','formRow','addText',
            'formTypeDia','inputFormDia','optionFormDia','saveDataDia'],
        },
        pvt_isShow: {
          r1_1c1:null,
          r1_1c2:null,
          r1_1c3:null,
          r2_1c1:null,
          r2_2c1:null,
          r2_3c1:null,
          r2_4c1:null,
          rDia:null,
          formTypeDialog:null,
          inputFormDia:null,
          optionFormDia:null,
          saveDataDia:null,
        },
        pvt_eventPortInput: ['confirmEvent'],
        formArr:[],
        nameArr:[],
        checkArr:[],
        sizeArr:[],
        activityId:null
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
              textData:'报名表单设置',
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
        return {
          nameText:{
            paraVarPair:{
            },
            para:{
              textData:'姓名',
            },
            attr:{
              label:'div',
              textAlign:'left',
              height:'48px',
              color:'#333333',
              fontSize:'14px',
              background:'transparent',
            },
          },
        };
      },
      pvt_r2_2c1:function(){
        return {
          phoneText:{
            paraVarPair:{
            },
            para:{
              textData:'手机',
            },
            attr:{
              label:'div',
              textAlign:'left',
              height:'48px',
              color:'#333333',
              fontSize:'14px',
              background:'transparent',
            },
          },
        };
      },
      pvt_r2_3c1:function(){
        let loopModule={
          formRow:{
            para:{
              labelValue:this.nameArr,
              requireValue:this.checkArr,
            },
            attr:{
              size:this.sizeArr,
            },
          },
        };
        let forData = this.pvt_createForData(loopModule);
        return {
          formRow:{
            paraVarPair:{
              labelValue:'nameArr',
              requireValue:'checkArr',
            },
            forData: forData.formRow,
          },
        };
      },
      pvt_r2_4c1:function(){
        return {
          addText:{
            paraVarPair:{
            },
            para:{
              textData:'增加报名项',
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'center',
              height:'49px',
              color:'#12B0FF',
              fontSize:'14px',
              background:'transparent',
              icon:'van-icon-plus',
              iconIsRight:false,
            },
          },
        };
      },
      pvt_rDia:function(){
        return {
          formTypeDia:{
            paraVarPair:{
            },
            para:{
            },
            attr:{
              size:'medium',
            },
          },
          inputFormDia:{
            paraVarPair:{
            },
            para:{
            },
            attr:{
              size:'medium',
            },
          },
          optionFormDia:{
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

      pvt_formTypeDialog:function(){
        return {
          formTypeDia:{
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
      pvt_inputFormDia:function(){
        return {
          inputFormDia:{
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
      pvt_optionFormDia:function(){
        return {
          optionFormDia:{
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
              $this.formArr = [];
              $this.nameArr = [];
              $this.checkArr = [];
              $this.sizeArr = [];
              $this.deleteIdArr = [];
              if(activityId){
                $this.activityId = activityId;
              }
              tableName = mac.mac.tb.groupActivityEnrollForm;
              parentRecord = [$this.activityId];
              condition = null;
              dbData = {};
              dbData[mac.mac.fd.id] = [];
              dbData[mac.mac.fd.groupActivityEnrollForm.attribute] = [];
              dbData[mac.mac.fd.groupActivityEnrollForm.name] = [];
              dbData[mac.mac.fd.groupActivityEnrollForm.baseComponent] = [];
              $this.sys.api.recordQuery(tableName,parentRecord,condition,dbData,function(){
                if(dbData[mac.mac.fd.id].length > 0){
                  for(let i = 0;i < dbData[mac.mac.fd.id].length;i++){
                    let labelName = dbData[mac.mac.fd.groupActivityEnrollForm.name][i];
                    if(labelName === '姓名' || labelName === '手机'){
                      continue;
                    }
                    let required = dbData[mac.mac.fd.groupActivityEnrollForm.attribute][i];
                    let baseCom = dbData[mac.mac.fd.groupActivityEnrollForm.baseComponent][i];
                    $this.formArr.push({
                      id:dbData[mac.mac.fd.id][i],
                      index:$this.formArr.length,
                      label:labelName,
                      required:required === mac.mac.enum.groupActivityEnrollForm.attribute.need,
                      baseComponent:baseCom
                    });
                    $this.nameArr.push(labelName);
                    $this.checkArr.push(required === mac.mac.enum.groupActivityEnrollForm.attribute.need);
                    $this.sizeArr.push('medium');
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
                'backText','titleText','finishButton','nameText','phoneText','formRow','addText'
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
            title:'是否保存修改后的报名表单信息?',
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
                tableName = mac.mac.tb.groupActivityEnrollForm;
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
              tableName = mac.mac.tb.groupActivityEnrollForm;
              dbData = {};
              dbData[mac.mac.fd.id] = [];
              dbData[mac.mac.fd.groupActivityEnrollForm.name] = [];
              dbData[mac.mac.fd.groupActivityEnrollForm.attribute] = [];
              dbData[mac.mac.fd.groupActivityEnrollForm.baseComponent] = [];
              for(let i = 0;i < $this.formArr.length;i++){
                if($this.formArr[i].id){
                  dbData[mac.mac.fd.id].push($this.formArr[i].id);
                  dbData[mac.mac.fd.groupActivityEnrollForm.name].push($this.formArr[i].label);
                  let required = $this.checkArr[i]?mac.mac.enum.groupActivityEnrollForm.attribute.need:mac.mac.enum.groupActivityEnrollForm.attribute.noNeed;
                  dbData[mac.mac.fd.groupActivityEnrollForm.attribute].push(required);
                  dbData[mac.mac.fd.groupActivityEnrollForm.baseComponent].push($this.formArr[i].baseComponent);
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
              tableName = mac.mac.tb.groupActivityEnrollForm;
              parentRecord = $this.activityId;
              dbData = {};
              dbData[mac.mac.fd.groupActivityEnrollForm.name] = [];
              dbData[mac.mac.fd.groupActivityEnrollForm.attribute] = [];
              dbData[mac.mac.fd.groupActivityEnrollForm.baseComponent] = [];
              for(let i = 0;i < $this.formArr.length;i++){
                if(!$this.formArr[i].id){
                  dbData[mac.mac.fd.groupActivityEnrollForm.name].push($this.formArr[i].label);
                  let required = $this.checkArr[i]?mac.mac.enum.groupActivityEnrollForm.attribute.need:mac.mac.enum.groupActivityEnrollForm.attribute.noNeed;
                  dbData[mac.mac.fd.groupActivityEnrollForm.attribute].push(required);
                  dbData[mac.mac.fd.groupActivityEnrollForm.baseComponent].push($this.formArr[i].baseComponent);
                }
              }
              if(dbData[mac.mac.fd.groupActivityEnrollForm.name].length > 0){
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
        if($this.formArr[index].id){
          if(!$this.deleteIdArr.includes($this.formArr[index].id)){
            $this.deleteIdArr.push($this.formArr[index].id);
          }
        }
        $this.formArr.splice(index,1);
        $this.nameArr.splice(index,1);
        $this.checkArr.splice(index,1);
        $this.sizeArr.splice(index,1);
        for(let i = 0;i < $this.formArr.length;i++){
          $this.formArr[i].index = i;
        }
        //刷新显示
        $this.forceUpdateData(function(){
          //循环组件
          let arr = [];
          for(let i = 0;i < $this.nameArr.length;i++){
            arr.push([function(){},function(error){console.log(error)}]);
          }
          $this.callLoopModuleMethod('formRow','startModule',arr,function(){
          },function(error){console.log(error)});
        });
      },
      showFormDialog:function(index){
        let $this = this;
        let ref = 'inputFormDia';
        if($this.formArr[index].baseComponent.name === 'lm2b-radio' || $this.formArr[index].baseComponent.name === 'lm2b-checkbox'){
          ref = 'optionFormDia';
        }
        $this.showSubModule(ref,true,function(){
          let nameArr = ['姓名','手机'];
          nameArr = nameArr.concat($this.nameArr);
          let obj = {
            index:index,
            label:$this.formArr[index].label,
            placeholder:$this.formArr[index].baseComponent.attr?$this.formArr[index].baseComponent.attr.placeholder:null,
            labelArr:nameArr,
            optionArr:null,
          };
          if($this.formArr[index].baseComponent.name === 'lm2b-radio'){
            let optionsArr = $this.formArr[index].baseComponent.attr.radioArr;
            obj.optionArr = [];
            for(let i = 0;i < optionsArr.length;i++){
              obj.optionArr.push(optionsArr[i].text);
            }
          }
          if($this.formArr[index].baseComponent.name === 'lm2b-checkbox'){
            let optionsArr = $this.formArr[index].baseComponent.attr.checkboxArr;
            obj.optionArr = [];
            for(let i = 0;i < optionsArr.length;i++){
              obj.optionArr.push(optionsArr[i].text);
            }
          }
          //给出标题
          if($this.formArr[index].baseComponent.name === 'lm2b-radio'){
            obj.title = '单选问题';
          }else if($this.formArr[index].baseComponent.name === 'lm2b-checkbox'){
            obj.title = '多选问题';
          }else if($this.formArr[index].baseComponent.name === 'lm2b-picture-upload'){
            obj.title = '图片上传';
          }else if($this.formArr[index].baseComponent.name === 'lm2b-input-text'){
            if($this.formArr[index].baseComponent.attr.type === 'textarea'){
              obj.title = '多行文本';
            }else{
              obj.title = '单行文本';
            }
          }
          $this.sm[ref].startModule(obj,function(){
          },function(error){console.log(error)});
        },function(error){console.log(error)});
      },
      showFormTypeDialog:function(){
        let $this = this;
        let nameArr = ['姓名','手机'];
        nameArr = nameArr.concat($this.nameArr);
        $this.showSubModule('formTypeDia',true,function(){
          $this.sm['formTypeDia'].startModule(nameArr,function(){
          },function(error){console.log(error)});
        },function(error){console.log(error)});
      },
      selectNewFormType:function(obj){
        //判断是否打开 对话框
        let $this = this;
        if(obj.isComment){
          //常用项直接添加不用打开对话框
          $this.nameArr.push(obj.label);
          $this.checkArr.push(false);
          $this.sizeArr.push('medium');
          $this.formArr.push({
            id:'',
            index:$this.formArr.length,
            label:obj.label,
            required:false,
            baseComponent:{
              name:obj.baseCommentName,
              attr:obj.attr
            }
          });
          //刷新表单行
          $this.forceUpdateData(function(){
            //循环组件
            let arr = [];
            for(let i = 0;i < $this.nameArr.length;i++){
              arr.push([function(){},function(error){console.log(error)}]);
            }
            $this.callLoopModuleMethod('formRow','startModule',arr,function(){
            },function(error){console.log(error)});
          });
        }else{
          let ref = 'inputFormDia';
          if(obj.baseCommentName === 'lm2b-radio' || obj.baseCommentName === 'lm2b-checkbox'){
            ref = 'optionFormDia';
          }
          let nameArr = ['姓名','手机'];
          nameArr = nameArr.concat($this.nameArr);
          $this.showSubModule(ref,true,function(){
            let obj1 = {
              title:obj.title,
              baseCommentName:obj.baseCommentName,
              type:obj.attr?obj.attr.type:null,
              labelArr:nameArr,
            };
            $this.sm[ref].startModule(obj1,function(){
            },function(error){console.log(error)});
          },function(error){console.log(error)});
        }
      },
      addNewForm:function(obj){
        let $this = this;
        if(obj.index || obj.index === 0){
          $this.formArr[obj.index].label = obj.label;
          if(obj.placeholder){
            if(obj.baseCommentName === 'lm2b-picture-upload'){
              $this.formArr[obj.index].baseComponent.attr.promptText = obj.placeholder;
            }else{
              $this.formArr[obj.index].baseComponent.attr.placeholder = obj.placeholder;
            }
          }
          if(obj.optionArr){
            if(obj.baseCommentName === 'lm2b-radio'){
              $this.formArr[obj.index].baseComponent.attr.radioArr = obj.optionArr;
            }else{
              $this.formArr[obj.index].baseComponent.attr.checkboxArr = obj.optionArr;
            }
          }
        }else{
          let formOne = {
            id:'',
            index:$this.formArr.length,
            label:obj.label,
            required:false,
            baseComponent:{
              name:obj.baseCommentName,
              attr:{}
            }
          };
          if(obj.placeholder){
            if(obj.baseCommentName === 'lm2b-picture-upload'){
              formOne.baseComponent.attr.promptText = obj.placeholder;
            }else{
              formOne.baseComponent.attr.placeholder = obj.placeholder;
            }
          }
          if(obj.type){
            formOne.baseComponent.attr.type = obj.type;
          }
          if(obj.optionArr){
            if(obj.baseCommentName === 'lm2b-radio'){
              formOne.baseComponent.attr.radioArr = obj.optionArr;
            }else{
              formOne.baseComponent.attr.checkboxArr = obj.optionArr;
            }
          }
          $this.formArr.push(formOne);
          $this.checkArr.push(false);
          $this.sizeArr.push('medium');
        }
        $this.nameArr = [];
        for(let i = 0;i < $this.formArr.length;i++){
          $this.nameArr.push($this.formArr[i].label);
        }
        //刷新显示
        $this.forceUpdateData(function(){
          //循环组件
          let arr = [];
          for(let i = 0;i < $this.nameArr.length;i++){
            arr.push([function(){},function(error){console.log(error)}]);
          }
          $this.callLoopModuleMethod('formRow','startModule',arr,function(){
          },function(error){console.log(error)});
        });
      },
      affirmEvent:function(refId){
        this.finishButtonClick();
      },
      cancelEvent:function(ref){
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
          sm4:'nameText',
          sm5:'phoneText',
          sm6:'formRow',
          sm7:'addText'
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
                para.nStep = 'startModule_name';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_name':
              $this.sm[ref.sm4].startModule(function(){
                para.nStep = 'startModule_mobile';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_mobile':
              $this.sm[ref.sm5].startModule(function(){
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
              $this.callLoopModuleMethod(ref.sm6,'startModule',arr,function(){
                para.nStep = 'startModule_add';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_add':
              $this.sm[ref.sm7].startModule(function(){
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
      formRow_deleteFormEvent:function(index){
        this.deleteForm(index);
      },
      formRow_formClickEvent:function(index){
        this.showFormDialog(index);
      },
      addText_textClickEvent:function(){
        this.showFormTypeDialog();
      },
      formTypeDia_confirmEvent:function(obj){
        this.selectNewFormType(obj);
      },
      inputFormDia_confirmEvent:function(obj){
        this.addNewForm(obj);
      },
      optionFormDia_confirmEvent:function(obj){
        this.addNewForm(obj);
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
  .mcbRegForm1_container {
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:1000;
  }
  .mcbRegForm1_row {
    display:flex;
    /*flex:1;*/
  }
  .mcbRegForm1_col {
    display:flex;
    flex-direction:column;
  }
  .mcbRegForm1_col_mcbRegForm1Window_size_medium {
    width:@mcbRegForm1-mcbRegForm1Window-medium-width;
  }
  .mcbRegForm1_col_mcbRegForm1Window {
    background-color:mix(@mcbRegForm1-mcbRegForm1Window-background-color,#fff,@mcbRegForm1-mcbRegForm1Window-background-color-opacity);
  }
  .mcbRegForm1_row_mcbRegForm1Row{
    height:100%;
  }
  .mcbRegForm1_col_r1c1_size_medium {
    width:@mcbRegForm1-r1c1-medium-width;
    height:@mcbRegForm1-r1c1-medium-height;
    padding:@mcbRegForm1-r1c1-medium-padding;
  }
  .mcbRegForm1_col_r1c1 {
    background-color:mix(@mcbRegForm1-r1c1-background-color,#fff,@mcbRegForm1-r1c1-background-color-opacity);
    position:fixed;
    top: 0;
    left:0;
    box-sizing:border-box;
  }
  .mcbRegForm1_col_r1_1c1_size_medium {
    width:@mcbRegForm1-r1_1c1-medium-width;
    height:@mcbRegForm1-r1_1c1-medium-height;
  }
  .mcbRegForm1_col_r1_1c2_size_medium {
    width:@mcbRegForm1-r1_1c2-medium-width;
    height:@mcbRegForm1-r1_1c2-medium-height;
  }
  .mcbRegForm1_col_r1_1c3_size_medium {
    width:@mcbRegForm1-r1_1c3-medium-width;
    height:@mcbRegForm1-r1_1c3-medium-height;
    justify-content:@mcbRegForm1-r1_1c3-medium-vertical-position;
    align-items:@mcbRegForm1-r1_1c3-medium-horizontal-position;
  }
  .mcbRegForm1_col_r2c1_size_medium {
    width:@mcbRegForm1-r2c1-medium-width;
    margin:@mcbRegForm1-r2c1-medium-margin;
  }
  .mcbRegForm1_col_r2c1 {
    background-color:mix(@mcbRegForm1-r2c1-background-color,#fff,@mcbRegForm1-r2c1-background-color-opacity);
  }
  .mcbRegForm1_col_r2_1c1_size_medium {
    width:@mcbRegForm1-r2_1c1-medium-width;
    height:@mcbRegForm1-r2_1c1-medium-height;
    padding:@mcbRegForm1-r2_1c1-medium-padding;
  }
  .mcbRegForm1_col_r2_1c1 {
    border-style:@mcbRegForm1-r2_1c1-border-style;
    border-width:@mcbRegForm1-r2_1c1-border-width;
    border-color:mix(@mcbRegForm1-r2_1c1-border-color,#fff,@mcbRegForm1-r2_1c1-hover-border-color-opacity);
  }
  .mcbRegForm1_col_r2_2c1_size_medium {
    width:@mcbRegForm1-r2_2c1-medium-width;
    height:@mcbRegForm1-r2_2c1-medium-height;
    padding:@mcbRegForm1-r2_2c1-medium-padding;
  }
  .mcbRegForm1_col_r2_2c1 {
    border-style:@mcbRegForm1-r2_2c1-border-style;
    border-width:@mcbRegForm1-r2_2c1-border-width;
    border-color:mix(@mcbRegForm1-r2_2c1-border-color,#fff,@mcbRegForm1-r2_2c1-hover-border-color-opacity);
  }
  .mcbRegForm1_col_r2_3c1_size_medium {
    width:@mcbRegForm1-r2_3c1-medium-width;
  }
  .mcbRegForm1_col_r2_4c1_size_medium {
    width:@mcbRegForm1-r2_4c1-medium-width;
    height:@mcbRegForm1-r2_4c1-medium-height;
    padding:@mcbRegForm1-r2_4c1-medium-padding;
  }
  .mcbRegForm1_col_formTypeDialog_size_medium {
    width:@mcbRegForm1-formTypeDialog-medium-width;
    height:@mcbRegForm1-formTypeDialog-medium-height;
  }
  .mcbRegForm1_col_inputFormDia_size_medium {
    width:@mcbRegForm1-inputFormDia-medium-width;
    height:@mcbRegForm1-inputFormDia-medium-height;
  }
  .mcbRegForm1_col_optionFormDia_size_medium {
    width:@mcbRegForm1-optionFormDia-medium-width;
    height:@mcbRegForm1-optionFormDia-medium-height;
  }
  .mcbRegForm1_col_saveDataDia_size_medium {
    width:@mcbRegForm1-saveDataDia-medium-width;
    height:@mcbRegForm1-saveDataDia-medium-height;
  }
  .mcbRegForm1_dialog {
    position:fixed;
  }
</style>
