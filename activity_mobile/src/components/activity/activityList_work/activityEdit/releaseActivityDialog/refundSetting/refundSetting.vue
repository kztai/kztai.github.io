<template>
  <div class="mcbRefundSetting1_container">
    <div class="mcbRefundSetting1_row mcbRefundSetting1_row_mcbRefundSetting1Row">
      <div :class="{mcbRefundSetting1_col:true,mcbRefundSetting1_col_mcbRefundSetting1Window:true,mcbRefundSetting1_col_mcbRefundSetting1Window_size_large:attr.size==='large',mcbRefundSetting1_col_mcbRefundSetting1Window_size_medium:attr.size==='medium',mcbRefundSetting1_col_mcbRefundSetting1Window_size_small:attr.size==='small',mcbRefundSetting1_col_mcbRefundSetting1Window_size_min:attr.size==='min',mcbRefundSetting1_col_mcbRefundSetting1Window_checked:attr.checked,mcbRefundSetting1_col_mcbRefundSetting1Window_disable:attr.disabled}">

        <div class="mcbRefundSetting1_row mcbRefundSetting1_row_row1">
          <div :class="{mcbRefundSetting1_col:true,mcbRefundSetting1_col_r1c1:true,mcbRefundSetting1_col_r1c1_size_large:attr.size==='large',mcbRefundSetting1_col_r1c1_size_medium:attr.size==='medium',mcbRefundSetting1_col_r1c1_size_small:attr.size==='small',mcbRefundSetting1_col_r1c1_size_min:attr.size==='min',mcbRefundSetting1_col_r1c1_checked:attr.checked,mcbRefundSetting1_col_r1c1_disable:attr.disabled}">

            <div class="mcbRefundSetting1_row mcbRefundSetting1_row_row2">
              <div :class="{mcbRefundSetting1_col:true,mcbRefundSetting1_col_r1_1c1:true,mcbRefundSetting1_col_r1_1c1_size_large:attr.size==='large',mcbRefundSetting1_col_r1_1c1_size_medium:attr.size==='medium',mcbRefundSetting1_col_r1_1c1_size_small:attr.size==='small',mcbRefundSetting1_col_r1_1c1_size_min:attr.size==='min',mcbRefundSetting1_col_r1_1c1_checked:attr.checked,mcbRefundSetting1_col_r1_1c1_disable:attr.disabled}">

                <lm2b-link-text
                        ref="backText"
                        refId="backText"
                        v-show="pvt_isShow.r1_1c1 === 'backText'"
                        :paraVarPair="pvt_r1_1c1.backText.paraVarPair"
                        :para="pvt_r1_1c1.backText.para"
                        :attr="pvt_r1_1c1.backText.attr">
                </lm2b-link-text>
              </div>
              <div :class="{mcbRefundSetting1_col:true,mcbRefundSetting1_col_r1_1c2:true,mcbRefundSetting1_col_r1_1c2_size_large:attr.size==='large',mcbRefundSetting1_col_r1_1c2_size_medium:attr.size==='medium',mcbRefundSetting1_col_r1_1c2_size_small:attr.size==='small',mcbRefundSetting1_col_r1_1c2_size_min:attr.size==='min',mcbRefundSetting1_col_r1_1c2_checked:attr.checked,mcbRefundSetting1_col_r1_1c2_disable:attr.disabled}">

                <lm2b-link-text
                        ref="titleText"
                        refId="titleText"
                        v-show="pvt_isShow.r1_1c2 === 'titleText'"
                        :paraVarPair="pvt_r1_1c2.titleText.paraVarPair"
                        :para="pvt_r1_1c2.titleText.para"
                        :attr="pvt_r1_1c2.titleText.attr">
                </lm2b-link-text>
              </div>
              <div :class="{mcbRefundSetting1_col:true,mcbRefundSetting1_col_r1_1c3:true,mcbRefundSetting1_col_r1_1c3_size_large:attr.size==='large',mcbRefundSetting1_col_r1_1c3_size_medium:attr.size==='medium',mcbRefundSetting1_col_r1_1c3_size_small:attr.size==='small',mcbRefundSetting1_col_r1_1c3_size_min:attr.size==='min',mcbRefundSetting1_col_r1_1c3_checked:attr.checked,mcbRefundSetting1_col_r1_1c3_disable:attr.disabled}">

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
        <div class="mcbRefundSetting1_row mcbRefundSetting1_row_row3">
          <div :class="{mcbRefundSetting1_col:true,mcbRefundSetting1_col_r2c1:true,mcbRefundSetting1_col_r2c1_size_large:attr.size==='large',mcbRefundSetting1_col_r2c1_size_medium:attr.size==='medium',mcbRefundSetting1_col_r2c1_size_small:attr.size==='small',mcbRefundSetting1_col_r2c1_size_min:attr.size==='min',mcbRefundSetting1_col_r2c1_checked:attr.checked,mcbRefundSetting1_col_r2c1_disable:attr.disabled}">

            <div class="mcbRefundSetting1_row mcbRefundSetting1_row_row4">
              <div :class="{mcbRefundSetting1_col:true,mcbRefundSetting1_col_r2_1c1:true,mcbRefundSetting1_col_r2_1c1_size_large:attr.size==='large',mcbRefundSetting1_col_r2_1c1_size_medium:attr.size==='medium',mcbRefundSetting1_col_r2_1c1_size_small:attr.size==='small',mcbRefundSetting1_col_r2_1c1_size_min:attr.size==='min',mcbRefundSetting1_col_r2_1c1_checked:attr.checked,mcbRefundSetting1_col_r2_1c1_disable:attr.disabled}">

                <lm2b-link-text
                        ref="refundTypeLabel"
                        refId="refundTypeLabel"
                        v-show="pvt_isShow.r2_1c1 === 'refundTypeLabel'"
                        :paraVarPair="pvt_r2_1c1.refundTypeLabel.paraVarPair"
                        :para="pvt_r2_1c1.refundTypeLabel.para"
                        :attr="pvt_r2_1c1.refundTypeLabel.attr">
                </lm2b-link-text>
              </div>
              <div :class="{mcbRefundSetting1_col:true,mcbRefundSetting1_col_r2_1c2:true,mcbRefundSetting1_col_r2_1c2_size_large:attr.size==='large',mcbRefundSetting1_col_r2_1c2_size_medium:attr.size==='medium',mcbRefundSetting1_col_r2_1c2_size_small:attr.size==='small',mcbRefundSetting1_col_r2_1c2_size_min:attr.size==='min',mcbRefundSetting1_col_r2_1c2_checked:attr.checked,mcbRefundSetting1_col_r2_1c2_disable:attr.disabled}">

                <lm2b-switch
                        ref="refundType"
                        refId="refundType"
                        v-show="pvt_isShow.r2_1c2 === 'refundType'"
                        :paraVarPair="pvt_r2_1c2.refundType.paraVarPair"
                        :para="pvt_r2_1c2.refundType.para"
                        :attr="pvt_r2_1c2.refundType.attr">
                </lm2b-switch>
              </div>
            </div>
            <div class="mcbRefundSetting1_row mcbRefundSetting1_row_row5">
              <div :class="{mcbRefundSetting1_col:true,mcbRefundSetting1_col_r2_2c1:true,mcbRefundSetting1_col_r2_2c1_size_large:attr.size==='large',mcbRefundSetting1_col_r2_2c1_size_medium:attr.size==='medium',mcbRefundSetting1_col_r2_2c1_size_small:attr.size==='small',mcbRefundSetting1_col_r2_2c1_size_min:attr.size==='min',mcbRefundSetting1_col_r2_2c1_checked:attr.checked,mcbRefundSetting1_col_r2_2c1_disable:attr.disabled}">

                <div class="mcbRefundSetting1_row mcbRefundSetting1_row_row6">
                  <div :class="{mcbRefundSetting1_col:true,mcbRefundSetting1_col_r2_2_1c1:true,mcbRefundSetting1_col_r2_2_1c1_size_large:attr.size==='large',mcbRefundSetting1_col_r2_2_1c1_size_medium:attr.size==='medium',mcbRefundSetting1_col_r2_2_1c1_size_small:attr.size==='small',mcbRefundSetting1_col_r2_2_1c1_size_min:attr.size==='min',mcbRefundSetting1_col_r2_2_1c1_checked:attr.checked,mcbRefundSetting1_col_r2_2_1c1_disable:attr.disabled}">

                    <mcb-refund-time-type
                            ref="refundTimeType"
                            refId="refundTimeType"
                            v-show="pvt_isShow.r2_2_1c1 === 'refundTimeType'"
                            :paraVarPair="pvt_r2_2_1c1.refundTimeType.paraVarPair"
                            :para="pvt_r2_2_1c1.refundTimeType.para"
                            :attr="pvt_r2_2_1c1.refundTimeType.attr">
                    </mcb-refund-time-type>
                  </div>
                </div>
                <div class="mcbRefundSetting1_row mcbRefundSetting1_row_row7">
                  <div :class="{mcbRefundSetting1_col:true,mcbRefundSetting1_col_r2_2_2c1:true,mcbRefundSetting1_col_r2_2_2c1_size_large:attr.size==='large',mcbRefundSetting1_col_r2_2_2c1_size_medium:attr.size==='medium',mcbRefundSetting1_col_r2_2_2c1_size_small:attr.size==='small',mcbRefundSetting1_col_r2_2_2c1_size_min:attr.size==='min',mcbRefundSetting1_col_r2_2_2c1_checked:attr.checked,mcbRefundSetting1_col_r2_2_2c1_disable:attr.disabled}">

                    <lm2b-link-text
                            ref="explainLabel"
                            refId="explainLabel"
                            v-show="pvt_isShow.r2_2_2c1 === 'explainLabel'"
                            :paraVarPair="pvt_r2_2_2c1.explainLabel.paraVarPair"
                            :para="pvt_r2_2_2c1.explainLabel.para"
                            :attr="pvt_r2_2_2c1.explainLabel.attr">
                    </lm2b-link-text>
                  </div>
                  <div :class="{mcbRefundSetting1_col:true,mcbRefundSetting1_col_r2_2_2c2:true,mcbRefundSetting1_col_r2_2_2c2_size_large:attr.size==='large',mcbRefundSetting1_col_r2_2_2c2_size_medium:attr.size==='medium',mcbRefundSetting1_col_r2_2_2c2_size_small:attr.size==='small',mcbRefundSetting1_col_r2_2_2c2_size_min:attr.size==='min',mcbRefundSetting1_col_r2_2_2c2_checked:attr.checked,mcbRefundSetting1_col_r2_2_2c2_disable:attr.disabled}">

                    <lm2b-input-text
                            ref="explainInput"
                            refId="explainInput"
                            v-show="pvt_isShow.r2_2_2c2 === 'explainInput'"
                            :paraVarPair="pvt_r2_2_2c2.explainInput.paraVarPair"
                            :para="pvt_r2_2_2c2.explainInput.para"
                            :attr="pvt_r2_2_2c2.explainInput.attr">
                    </lm2b-input-text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mcbRefundSetting1_dialog">
      <confirm-dialog
              ref="saveDataDia"
              refId="saveDataDia"
              v-show="pvt_isShow.saveDataDia === 'saveDataDia'"
              :paraVarPair="pvt_saveDataDia.saveDataDia.paraVarPair"
              :para="pvt_saveDataDia.saveDataDia.para"
              :attr="pvt_saveDataDia.saveDataDia.attr">
      </confirm-dialog>
    </div>
  </div>
</template>
<script>
  import libSys from '@/components/baseComponent/libSys.js';
  import libUpload from '@/components/baseComponent/libUpload.js';
  import mcbRefundTimeType from './refundTimeType.vue';
  import confirmDialog from '../../confirmDialog.vue';
  export default {
    components: {mcbRefundTimeType,confirmDialog},
    inject: ['sys'],
      props: ['refId','para','attr','number'],
      data: function() {
      return {
        pvt_subModuleMap: {
          vessel:['r1_1c1','r1_1c2','r1_1c3','r2_1c1','r2_1c2','r2_2_1c1','r2_2_2c1','r2_2_2c2','saveDataDia'],
          subModule:['backText','titleText','finishButton','refundTypeLabel','refundType','refundTimeType','explainLabel','explainInput','saveDataDia'],
        },
        pvt_isShow: {
          r1_1c1:null,
          r1_1c2:null,
          r1_1c3:null,
          r2_1c1:null,
          r2_1c2:null,
          r2_2_1c1:null,
          r2_2_2c1:null,
          r2_2_2c2:null,
          saveDataDia:null,
        },
        pvt_eventPortInput: ['confirmEvent'],
        typeValue:null,
        explain:null,
        placeholder:null,
        timeType:null,
        days:null,
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
              textData:'退款设置',
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
          refundTypeLabel:{
            paraVarPair:{
            },
            para:{
              textData:'购买后支持退款',
            },
            attr:{
              label:'div',
              textAlign:'left',
              height:'53px',
              color:'#333333',
              fontSize:'14px',
              background:'transparent',
            },
          },
        };
      },
      pvt_r2_1c2:function(){
        return {
          refundType:{
            paraVarPair:{
              toggle:'typeValue',
            },
            para:{
              toggle:this.typeValue,
            },
            attr:{
              size:'small'
            },
          },
        };
      },
      pvt_r2_2_1c1:function(){
        return {
          refundTimeType:{
            paraVarPair:{
              type:'timeType',
              daysAgo:'days',
            },
            para:{
              type:this.timeType,
              daysAgo:this.days,
            },
            attr:{
              size:'medium',
            },
          },
        };
      },
      pvt_r2_2_2c1:function(){
        return {
          explainLabel:{
            paraVarPair:{
            },
            para:{
              textData:'退款说明:',
            },
            attr:{
              label:'div',
              textAlign:'left',
              height:'56px',
              color:'#333333',
              fontSize:'14px',
              background:'transparent',
            },
          },
        };
      },
      pvt_r2_2_2c2:function(){
        return {
          explainInput:{
            paraVarPair:{
              text:'explain',
            },
            para:{
              text:this.explain,
            },
            attr:{
              placeholder:this.placeholder,
              type:'textarea',
              autosize:true,
              isPlaceholder:false,
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
              $this.typeValue = 1;
              $this.explain = '';
              $this.placeholder = '请输入退款说明';
              $this.timeType = 0;
              $this.days = 0;
              if(activityId){
                $this.activityId = activityId;
              }
              tableName = mac.mac.tb.groupActivity;
              dbData = {};
              dbData[mac.mac.fd.id] = [$this.activityId];
              dbData[mac.mac.fd.groupActivity.refundObject] = [];
              $this.sys.api.recordRead(tableName,dbData,function(){
                if(dbData[mac.mac.fd.groupActivity.refundObject][0] !== null){
                  let refundObject = dbData[mac.mac.fd.groupActivity.refundObject][0];
                  if(refundObject.type === mac.mac.enum.groupActivity.refundObject.type.oppose){
                    $this.typeValue = 0;
                    $this.placeholder = '请输入不接受退款的原因';
                  }
                  if(refundObject.explain){
                    $this.explain = refundObject.explain;
                  }
                  if(refundObject.daysAgo){
                    $this.timeType = 1;
                    $this.days = refundObject.daysAgo;
                  }
                }
                para.nStep = 'showModules';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              },para.errorCallBack)
              break;
            case 'showModules':
              $this.showSubModule('refundTimeType',false,function(){
                //显示子组件
                let refId = [
                  'backText','titleText','finishButton','refundTypeLabel','refundType','explainLabel','explainInput'
                ];
                if($this.typeValue === 1){
                  refId.push('refundTimeType');
                }
                $this.showSubModule(refId,true,function(){
                  para.nStep = 'startSubModules';
                  if(++dbFlag === 2){
                    $this.startModule(activityId,successCallBack,errorCallBack);
                  }
                },para.errorCallBack);
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
            title:'是否保存修改后的退款设置?',
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
              tableName = mac.mac.tb.groupActivity;
              dbData = {};
              dbData[mac.mac.fd.id] = [$this.activityId];
              let refundObj = {
                type:0,
                daysAgo:$this.days,
                explain:$this.explain
              };
              if($this.typeValue === 1){
                refundObj.type = mac.mac.enum.groupActivity.refundObject.type.support;
              }else{
                refundObj.type = mac.mac.enum.groupActivity.refundObject.type.oppose;
              }
              dbData[mac.mac.fd.groupActivity.refundObject] = [refundObj];
              $this.sys.api.recordModify(tableName,dbData,function(){
                para.nStep = 'upload';
                if(++dbFlag === 2){
                  $this.makeSure(successCallBack,errorCallBack);
                }
              },para.errorCallBack)
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
      typeChange:function(data1){
        let $this = this;
        if($this.typeValue === 1){
          $this.placeholder = '请输入退款说明';
        }else{
          $this.placeholder = '请输入不接受退款的原因';
        }
        $this.showSubModule('refundTimeType',$this.typeValue === 1,function(){
        },function(error){console.log(error)})
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
          sm4:'refundTypeLabel',
          sm5:'refundType',
          sm6:'refundTimeType',
          sm7:'explainLabel',
          sm8:'explainInput',
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
                para.nStep = 'startModule_label1';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_label1':
              $this.sm[ref.sm4].startModule(function(){
                para.nStep = 'startModule_type';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_type':
              $this.sm[ref.sm5].startModule(function(){
                para.nStep = 'startModule_timeType';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_timeType':
              $this.sm[ref.sm6].startModule(function(){
                para.nStep = 'startModule_label2';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_label2':
              $this.sm[ref.sm7].startModule(function(){
                para.nStep = 'startModule_explain';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_explain':
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
      refundType_dataModifyEvent:function(value){
        this.typeChange(value);
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
  .mcbRefundSetting1_container {
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    z-index:1000;
  }
  .mcbRefundSetting1_row {
    display:flex;
    /*flex:1;*/
  }
  .mcbRefundSetting1_col {
    display:flex;
    flex-direction:column;
  }
  .mcbRefundSetting1_row_mcbRefundSetting1Row{
    height:100%;
  }
  .mcbRefundSetting1_col_mcbRefundSetting1Window_size_medium {
    width:@mcbRefundSetting1-mcbRefundSetting1Window-medium-width;
    height:@mcbRefundSetting1-mcbRefundSetting1Window-medium-height;
  }
  .mcbRefundSetting1_col_mcbRefundSetting1Window {
    background-color:mix(@mcbRefundSetting1-mcbRefundSetting1Window-background-color,#fff,@mcbRefundSetting1-mcbRefundSetting1Window-background-color-opacity);
  }
  .mcbRefundSetting1_col_r1c1_size_medium {
    width:@mcbRefundSetting1-r1c1-medium-width;
    height:@mcbRefundSetting1-r1c1-medium-height;
    padding:@mcbRefundSetting1-r1c1-medium-padding;
    margin:@mcbRefundSetting1-r1c1-medium-margin;
  }
  .mcbRefundSetting1_col_r1c1 {
    background-color:mix(@mcbRefundSetting1-r1c1-background-color,#fff,@mcbRefundSetting1-r1c1-background-color-opacity);
    position:fixed;
    top: 0;
    left:0;
    box-sizing:border-box;
  }
  .mcbRefundSetting1_col_r1_1c1_size_medium {
    width:@mcbRefundSetting1-r1_1c1-medium-width;
    height:@mcbRefundSetting1-r1_1c1-medium-height;
  }
  .mcbRefundSetting1_col_r1_1c2_size_medium {
    width:@mcbRefundSetting1-r1_1c2-medium-width;
    height:@mcbRefundSetting1-r1_1c2-medium-height;
  }
  .mcbRefundSetting1_col_r1_1c3_size_medium {
    width:@mcbRefundSetting1-r1_1c3-medium-width;
    height:@mcbRefundSetting1-r1_1c3-medium-height;
    justify-content:@mcbRefundSetting1-r1_1c3-medium-vertical-position;
    align-items:flex-end;
  }
  .mcbRefundSetting1_row_row3{
    height:100%;
  }
  .mcbRefundSetting1_col_r2c1_size_medium {
    width:@mcbRefundSetting1-r2c1-medium-width;
    height:@mcbRefundSetting1-r2c1-medium-height;
    margin:@mcbRefundSetting1-r2c1-medium-margin;
  }
  .mcbRefundSetting1_col_r2c1 {
    background-color:mix(@mcbRefundSetting1-r2c1-background-color,#fff,@mcbRefundSetting1-r2c1-background-color-opacity);
  }
  .mcbRefundSetting1_col_r2_1c1_size_medium {
    width:@mcbRefundSetting1-r2_1c1-medium-width;
    height:@mcbRefundSetting1-r2_1c1-medium-height;
    padding:@mcbRefundSetting1-r2_1c1-medium-padding;
  }
  .mcbRefundSetting1_col_r2_1c1 {
    border-style:@mcbRefundSetting1-r2_1c1-border-style;
    border-width:@mcbRefundSetting1-r2_1c1-border-width;
    border-radius:@mcbRefundSetting1-r2_1c1-border-radius;
    border-color:mix(@mcbRefundSetting1-r2_1c1-border-color,#fff,@mcbRefundSetting1-r2_1c1-hover-border-color-opacity);
  }
  .mcbRefundSetting1_col_r2_1c2_size_medium {
    width:@mcbRefundSetting1-r2_1c2-medium-width;
    height:@mcbRefundSetting1-r2_1c2-medium-height;
    padding:@mcbRefundSetting1-r2_1c2-medium-padding;
    justify-content:@mcbRefundSetting1-r2_1c2-medium-vertical-position;
    align-items:@mcbRefundSetting1-r2_1c2-medium-horizontal-position;
  }
  .mcbRefundSetting1_col_r2_1c2 {
    border-style:@mcbRefundSetting1-r2_1c2-border-style;
    border-width:@mcbRefundSetting1-r2_1c2-border-width;
    border-radius:@mcbRefundSetting1-r2_1c2-border-radius;
    border-color:mix(@mcbRefundSetting1-r2_1c2-border-color,#fff,@mcbRefundSetting1-r2_1c2-hover-border-color-opacity);
  }
  .mcbRefundSetting1_col_r2_2c1_size_medium {
    width:@mcbRefundSetting1-r2_2c1-medium-width;
    padding:@mcbRefundSetting1-r2_2c1-medium-padding;
  }
  .mcbRefundSetting1_col_r2_2_1c1_size_medium {
    width:@mcbRefundSetting1-r2_2_1c1-medium-width;
  }
  .mcbRefundSetting1_col_r2_2_2c1_size_medium {
    width:@mcbRefundSetting1-r2_2_2c1-medium-width;
    padding:@mcbRefundSetting1-r2_2_2c1-medium-padding;
  }
  .mcbRefundSetting1_col_r2_2_2c1 {
    border-style:@mcbRefundSetting1-r2_2_2c1-border-style;
    border-width:@mcbRefundSetting1-r2_2_2c1-border-width;
    border-radius:@mcbRefundSetting1-r2_2_2c1-border-radius;
    border-color:mix(@mcbRefundSetting1-r2_2_2c1-border-color,#fff,@mcbRefundSetting1-r2_2_2c1-hover-border-color-opacity);
  }
  .mcbRefundSetting1_col_r2_2_2c2_size_medium {
    width:@mcbRefundSetting1-r2_2_2c2-medium-width;
    padding:@mcbRefundSetting1-r2_2_2c2-medium-padding;
    justify-content:@mcbRefundSetting1-r2_2_2c2-medium-vertical-position;
  }
  .mcbRefundSetting1_col_r2_2_2c2 {
    border-style:@mcbRefundSetting1-r2_2_2c2-border-style;
    border-width:@mcbRefundSetting1-r2_2_2c2-border-width;
    border-radius:@mcbRefundSetting1-r2_2_2c2-border-radius;
    border-color:mix(@mcbRefundSetting1-r2_2_2c2-border-color,#fff,@mcbRefundSetting1-r2_2_2c2-hover-border-color-opacity);
  }
  .mcbRefundSetting1_col_saveDataDia_size_medium {
    width:@mcbRefundSetting1-saveDataDia-medium-width;
    height:@mcbRefundSetting1-saveDataDia-medium-height;
  }
  .mcbRefundSetting1_dialog {
    position:fixed;
  }
</style>
