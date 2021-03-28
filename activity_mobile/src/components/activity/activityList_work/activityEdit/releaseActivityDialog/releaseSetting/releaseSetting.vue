<template>
  <div class="mcbReleaseSetting1_container">
    <div class="mcbReleaseSetting1_row mcbReleaseSetting1_row_mcbReleaseSetting1Row">
      <div :class="{mcbReleaseSetting1_col:true,mcbReleaseSetting1_col_mcbReleaseSetting1Window:true,mcbReleaseSetting1_col_mcbReleaseSetting1Window_size_large:attr.size==='large',mcbReleaseSetting1_col_mcbReleaseSetting1Window_size_medium:attr.size==='medium',mcbReleaseSetting1_col_mcbReleaseSetting1Window_size_small:attr.size==='small',mcbReleaseSetting1_col_mcbReleaseSetting1Window_size_min:attr.size==='min',mcbReleaseSetting1_col_mcbReleaseSetting1Window_checked:attr.checked,mcbReleaseSetting1_col_mcbReleaseSetting1Window_disable:attr.disabled}">

        <div class="mcbReleaseSetting1_row mcbReleaseSetting1_row_row1">
          <div :class="{mcbReleaseSetting1_col:true,mcbReleaseSetting1_col_r1c1:true,mcbReleaseSetting1_col_r1c1_size_large:attr.size==='large',mcbReleaseSetting1_col_r1c1_size_medium:attr.size==='medium',mcbReleaseSetting1_col_r1c1_size_small:attr.size==='small',mcbReleaseSetting1_col_r1c1_size_min:attr.size==='min',mcbReleaseSetting1_col_r1c1_checked:attr.checked,mcbReleaseSetting1_col_r1c1_disable:attr.disabled}">

            <div class="mcbReleaseSetting1_row mcbReleaseSetting1_row_row2">
              <div :class="{mcbReleaseSetting1_col:true,mcbReleaseSetting1_col_r1_1c1:true,mcbReleaseSetting1_col_r1_1c1_size_large:attr.size==='large',mcbReleaseSetting1_col_r1_1c1_size_medium:attr.size==='medium',mcbReleaseSetting1_col_r1_1c1_size_small:attr.size==='small',mcbReleaseSetting1_col_r1_1c1_size_min:attr.size==='min',mcbReleaseSetting1_col_r1_1c1_checked:attr.checked,mcbReleaseSetting1_col_r1_1c1_disable:attr.disabled}">

                <lm2b-link-text
                        ref="backText"
                        refId="backText"
                        v-show="pvt_isShow.r1_1c1 === 'backText'"
                        :paraVarPair="pvt_r1_1c1.backText.paraVarPair"
                        :para="pvt_r1_1c1.backText.para"
                        :attr="pvt_r1_1c1.backText.attr">
                </lm2b-link-text>
              </div>
              <div :class="{mcbReleaseSetting1_col:true,mcbReleaseSetting1_col_r1_1c2:true,mcbReleaseSetting1_col_r1_1c2_size_large:attr.size==='large',mcbReleaseSetting1_col_r1_1c2_size_medium:attr.size==='medium',mcbReleaseSetting1_col_r1_1c2_size_small:attr.size==='small',mcbReleaseSetting1_col_r1_1c2_size_min:attr.size==='min',mcbReleaseSetting1_col_r1_1c2_checked:attr.checked,mcbReleaseSetting1_col_r1_1c2_disable:attr.disabled}">

                <lm2b-link-text
                        ref="titleText"
                        refId="titleText"
                        v-show="pvt_isShow.r1_1c2 === 'titleText'"
                        :paraVarPair="pvt_r1_1c2.titleText.paraVarPair"
                        :para="pvt_r1_1c2.titleText.para"
                        :attr="pvt_r1_1c2.titleText.attr">
                </lm2b-link-text>
              </div>
              <div :class="{mcbReleaseSetting1_col:true,mcbReleaseSetting1_col_r1_1c3:true,mcbReleaseSetting1_col_r1_1c3_size_large:attr.size==='large',mcbReleaseSetting1_col_r1_1c3_size_medium:attr.size==='medium',mcbReleaseSetting1_col_r1_1c3_size_small:attr.size==='small',mcbReleaseSetting1_col_r1_1c3_size_min:attr.size==='min',mcbReleaseSetting1_col_r1_1c3_checked:attr.checked,mcbReleaseSetting1_col_r1_1c3_disable:attr.disabled}">

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
        <div class="mcbReleaseSetting1_row mcbReleaseSetting1_row_row3">
          <div :class="{mcbReleaseSetting1_col:true,mcbReleaseSetting1_col_r2c1:true,mcbReleaseSetting1_col_r2c1_size_large:attr.size==='large',mcbReleaseSetting1_col_r2c1_size_medium:attr.size==='medium',mcbReleaseSetting1_col_r2c1_size_small:attr.size==='small',mcbReleaseSetting1_col_r2c1_size_min:attr.size==='min',mcbReleaseSetting1_col_r2c1_checked:attr.checked,mcbReleaseSetting1_col_r2c1_disable:attr.disabled}">

            <div class="mcbReleaseSetting1_row mcbReleaseSetting1_row_row4">
              <div :class="{mcbReleaseSetting1_col:true,mcbReleaseSetting1_col_r2_1c1:true,mcbReleaseSetting1_col_r2_1c1_size_large:attr.size==='large',mcbReleaseSetting1_col_r2_1c1_size_medium:attr.size==='medium',mcbReleaseSetting1_col_r2_1c1_size_small:attr.size==='small',mcbReleaseSetting1_col_r2_1c1_size_min:attr.size==='min',mcbReleaseSetting1_col_r2_1c1_checked:attr.checked,mcbReleaseSetting1_col_r2_1c1_disable:attr.disabled}">

                <lm2b-link-text
                        ref="chooseIcon1"
                        refId="chooseIcon1"
                        v-show="pvt_isShow.r2_1c1 === 'chooseIcon1'"
                        :paraVarPair="pvt_r2_1c1.chooseIcon1.paraVarPair"
                        :para="pvt_r2_1c1.chooseIcon1.para"
                        :attr="pvt_r2_1c1.chooseIcon1.attr">
                </lm2b-link-text>
              </div>
              <div :class="{mcbReleaseSetting1_col:true,mcbReleaseSetting1_col_r2_1c2:true,mcbReleaseSetting1_col_r2_1c2_size_large:attr.size==='large',mcbReleaseSetting1_col_r2_1c2_size_medium:attr.size==='medium',mcbReleaseSetting1_col_r2_1c2_size_small:attr.size==='small',mcbReleaseSetting1_col_r2_1c2_size_min:attr.size==='min',mcbReleaseSetting1_col_r2_1c2_checked:attr.checked,mcbReleaseSetting1_col_r2_1c2_disable:attr.disabled}">

                <lm2b-link-text
                        ref="customText"
                        refId="customText"
                        v-show="pvt_isShow.r2_1c2 === 'customText'"
                        :paraVarPair="pvt_r2_1c2.customText.paraVarPair"
                        :para="pvt_r2_1c2.customText.para"
                        :attr="pvt_r2_1c2.customText.attr">
                </lm2b-link-text>
              </div>
              <div :class="{mcbReleaseSetting1_col:true,mcbReleaseSetting1_col_r2_1c3:true,mcbReleaseSetting1_col_r2_1c3_size_large:attr.size==='large',mcbReleaseSetting1_col_r2_1c3_size_medium:attr.size==='medium',mcbReleaseSetting1_col_r2_1c3_size_small:attr.size==='small',mcbReleaseSetting1_col_r2_1c3_size_min:attr.size==='min',mcbReleaseSetting1_col_r2_1c3_checked:attr.checked,mcbReleaseSetting1_col_r2_1c3_disable:attr.disabled}">

                <lm2b-link-text
                        ref="customState"
                        refId="customState"
                        v-show="pvt_isShow.r2_1c3 === 'customState'"
                        :paraVarPair="pvt_r2_1c3.customState.paraVarPair"
                        :para="pvt_r2_1c3.customState.para"
                        :attr="pvt_r2_1c3.customState.attr">
                </lm2b-link-text>
              </div>
            </div>
            <div class="mcbReleaseSetting1_row mcbReleaseSetting1_row_row5">
              <div :class="{mcbReleaseSetting1_col:true,mcbReleaseSetting1_col_r2_2c1:true,mcbReleaseSetting1_col_r2_2c1_size_large:attr.size==='large',mcbReleaseSetting1_col_r2_2c1_size_medium:attr.size==='medium',mcbReleaseSetting1_col_r2_2c1_size_small:attr.size==='small',mcbReleaseSetting1_col_r2_2c1_size_min:attr.size==='min',mcbReleaseSetting1_col_r2_2c1_checked:attr.checked,mcbReleaseSetting1_col_r2_2c1_disable:attr.disabled}">

                <lm2b-link-text
                        ref="chooseIcon2"
                        refId="chooseIcon2"
                        v-show="pvt_isShow.r2_2c1 === 'chooseIcon2'"
                        :paraVarPair="pvt_r2_2c1.chooseIcon2.paraVarPair"
                        :para="pvt_r2_2c1.chooseIcon2.para"
                        :attr="pvt_r2_2c1.chooseIcon2.attr">
                </lm2b-link-text>
              </div>
              <div :class="{mcbReleaseSetting1_col:true,mcbReleaseSetting1_col_r2_2c2:true,mcbReleaseSetting1_col_r2_2c2_size_large:attr.size==='large',mcbReleaseSetting1_col_r2_2c2_size_medium:attr.size==='medium',mcbReleaseSetting1_col_r2_2c2_size_small:attr.size==='small',mcbReleaseSetting1_col_r2_2c2_size_min:attr.size==='min',mcbReleaseSetting1_col_r2_2c2_checked:attr.checked,mcbReleaseSetting1_col_r2_2c2_disable:attr.disabled}">

                <lm2b-link-text
                        ref="deparmentText"
                        refId="deparmentText"
                        v-show="pvt_isShow.r2_2c2 === 'deparmentText'"
                        :paraVarPair="pvt_r2_2c2.deparmentText.paraVarPair"
                        :para="pvt_r2_2c2.deparmentText.para"
                        :attr="pvt_r2_2c2.deparmentText.attr">
                </lm2b-link-text>
              </div>
              <div :class="{mcbReleaseSetting1_col:true,mcbReleaseSetting1_col_r2_2c3:true,mcbReleaseSetting1_col_r2_2c3_size_large:attr.size==='large',mcbReleaseSetting1_col_r2_2c3_size_medium:attr.size==='medium',mcbReleaseSetting1_col_r2_2c3_size_small:attr.size==='small',mcbReleaseSetting1_col_r2_2c3_size_min:attr.size==='min',mcbReleaseSetting1_col_r2_2c3_checked:attr.checked,mcbReleaseSetting1_col_r2_2c3_disable:attr.disabled}">

                <lm2b-link-text
                        ref="deparmentState"
                        refId="deparmentState"
                        v-show="pvt_isShow.r2_2c3 === 'deparmentState'"
                        :paraVarPair="pvt_r2_2c3.deparmentState.paraVarPair"
                        :para="pvt_r2_2c3.deparmentState.para"
                        :attr="pvt_r2_2c3.deparmentState.attr">
                </lm2b-link-text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mcbReleaseSetting1_dialog">
      <confirm-dialog
              ref="changeTypeDia"
              refId="changeTypeDia"
              v-show="pvt_isShow.r3c1 === 'changeTypeDia'"
              :paraVarPair="pvt_r3c1.changeTypeDia.paraVarPair"
              :para="pvt_r3c1.changeTypeDia.para"
              :attr="pvt_r3c1.changeTypeDia.attr">
      </confirm-dialog>
      <mcb-release-customer-setting
              ref="customerSettingDia"
              refId="customerSettingDia"
              v-show="pvt_isShow.r3c1 === 'customerSettingDia'"
              :paraVarPair="pvt_r3c1.customerSettingDia.paraVarPair"
              :para="pvt_r3c1.customerSettingDia.para"
              :attr="pvt_r3c1.customerSettingDia.attr">
      </mcb-release-customer-setting>
      <mcb-release-deparment-setting
              ref="deparmentSetting"
              refId="deparmentSetting"
              v-show="pvt_isShow.r3c1 === 'deparmentSetting'"
              :paraVarPair="pvt_r3c1.deparmentSetting.paraVarPair"
              :para="pvt_r3c1.deparmentSetting.para"
              :attr="pvt_r3c1.deparmentSetting.attr">
      </mcb-release-deparment-setting>
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
  import confirmDialog from '../../confirmDialog.vue';
  import mcbReleaseCustomerSetting from './publicCustomerSetting.vue';
  import mcbReleaseDeparmentSetting from './publicDepartmentSetting.vue';
  export default {
    components: {confirmDialog,mcbReleaseCustomerSetting,mcbReleaseDeparmentSetting},
    inject: ['sys'],
    props: ['refId','para','attr','number'],
    data: function() {
      return {
        pvt_subModuleMap: {
          vessel:['r1_1c1','r1_1c2','r1_1c3','r2_1c1','r2_1c2','r2_1c3','r2_2c1','r2_2c2','r2_2c3',
            'r3c1','r3c1','r3c1','r3c1'],
          subModule:['backText','titleText','finishButton','chooseIcon1','customText','customState','chooseIcon2','deparmentText','deparmentState',
            'changeTypeDia','customerSettingDia','deparmentSetting','saveDataDia'],
        },
        pvt_isShow: {
          r1_1c1:null,
          r1_1c2:null,
          r1_1c3:null,
          r2_1c1:null,
          r2_1c2:null,
          r2_1c3:null,
          r2_2c1:null,
          r2_2c2:null,
          r2_2c3:null,
          r3c1:null,
          changeTypeDia:null,
        },
        pvt_eventPortInput: ['confirmEvent'],

        icon1Color:null,
        icon1:null,
        icon2Color:null,
        icon2:null,
        state1:null,
        state2:null,
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
              textData:'发布设置',
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
          chooseIcon1:{
            paraVarPair:{
            },
            para:{
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'left',
              height:'53px',
              color:this.icon1Color,
              fontSize:'16px',
              background:'transparent',
              icon:this.icon1,
            },
          },
        };
      },
      pvt_r2_1c2:function(){
        return {
          customText:{
            paraVarPair:{
            },
            para:{
              textData:'公开客户:',
            },
            attr:{
              isClick:true,
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
      pvt_r2_1c3:function(){
        return {
          customState:{
            paraVarPair:{
            },
            para:{
              textData:this.state1?'已设置':'请选择',
            },
            attr:{
              isClick:this.icon1Color === '#12B0FF'?true:false,
              label:'div',
              textAlign:'right',
              height:'53px',
              color:this.state1?'#333333':'#999999',
              fontSize:'14px',
              background:'transparent',
              icon:'van-icon-arrow',
              iconIsRight:true,
            },
          },
        };
      },
      pvt_r2_2c1:function(){
        return {
          chooseIcon2:{
            paraVarPair:{
            },
            para:{
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'left',
              height:'53px',
              color:this.icon2Color,
              fontSize:'16px',
              background:'transparent',
              icon:this.icon2,
            },
          },
        };
      },
      pvt_r2_2c2:function(){
        return {
          deparmentText:{
            paraVarPair:{
            },
            para:{
              textData:'公开部门:',
            },
            attr:{
              isClick:true,
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
      pvt_r2_2c3:function(){
        return {
          deparmentState:{
            paraVarPair:{
            },
            para:{
              textData:this.state2?'已设置':'请选择',
            },
            attr:{
              isClick:this.icon2Color === '#12B0FF'?true:false,
              label:'div',
              textAlign:'right',
              height:'53px',
              color:this.state2?'#333333':'#999999',
              fontSize:'14px',
              background:'transparent',
              icon:'van-icon-arrow',
              iconIsRight:true,
            },
          },
        };
      },
      pvt_r3c1:function(){
        return {
          changeTypeDia:{
            paraVarPair:{
            },
            para:{
            },
            attr:{
              size:'medium',
            },
          },
          customerSettingDia:{
            paraVarPair:{
            },
            para:{
            },
            attr:{
              size:'medium',
            },
          },
          deparmentSetting:{
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

      pvt_changeTypeDia:function(){
        return {
          changeTypeDia:{
            paraVarPair:{
            },
            para:{
            },
            attr:{
              size:'medium',
            },
          },
          customerSettingDia:{
            paraVarPair:{
            },
            para:{
            },
            attr:{
              size:'medium',
            },
          },
          deparmentSetting:{
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
              $this.icon1Color = '#DDDDDD';
              $this.icon1 = 'van-icon-circle';
              $this.icon2Color = '#DDDDDD';
              $this.icon2 = 'van-icon-circle';
              $this.state1 = false;
              $this.state2 = false;
              $this.customerIdArr = [];
              $this.departmentIdArr = [];
              $this.groupId = null;
              if(activityId){
                $this.activityId = activityId;
              }else{
                para.errorCallBack();
                return;
              }
              tableName = mac.mac.tb.groupActivity;
              dbData = {};
              dbData[mac.mac.fd.id] = [$this.activityId];
              dbData[mac.mac.fd.groupActivity.publicCustomer] = [];
              dbData[mac.mac.fd.groupActivity.pubicDepartment] = [];
              dbData[mac.mac.fd.groupActivity.groupId] = [];
              $this.sys.api.recordRead(tableName,dbData,function(){
                $this.groupId = dbData[mac.mac.fd.groupActivity.groupId][0];
                if(dbData[mac.mac.fd.groupActivity.pubicDepartment][0] !== null){
                  $this.departmentIdArr = dbData[mac.mac.fd.groupActivity.pubicDepartment][0];
                  $this.icon2Color = '#12B0FF';
                  $this.icon2 = 'van-icon-checked';
                  $this.state2 = true;
                }else if(dbData[mac.mac.fd.groupActivity.publicCustomer][0] !== null){
                  $this.customerIdArr = dbData[mac.mac.fd.groupActivity.publicCustomer][0];
                  $this.icon1Color = '#12B0FF';
                  $this.icon1 = 'van-icon-checked';
                  $this.state1 = true;
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
                'backText','titleText','finishButton','chooseIcon1','customText','customState','chooseIcon2','deparmentText','deparmentState'
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
            title:'是否保存修改后的发布设置?',
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
              dbData[mac.mac.fd.groupActivity.publicCustomer] = [null];
              dbData[mac.mac.fd.groupActivity.pubicDepartment] = [null];
              if($this.customerIdArr.length > 0){
                dbData[mac.mac.fd.groupActivity.publicCustomer] = [$this.customerIdArr];
              }else if($this.departmentIdArr.length > 0){
                dbData[mac.mac.fd.groupActivity.pubicDepartment] = [$this.departmentIdArr];
              }
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
      chooseCustomer:function(){
        //判断另一种数据是否存在
        let $this = this;
        if($this.departmentIdArr.length > 0){
          //弹出提示框
          $this.type = 0;
          $this.showSubModule('changeTypeDia',true,function(){
            let dialogData = {
              title:'选择公开客户后将清空公开部门的数据。是否确认选择公开客户?',
              btnText:['取消','确认']
            };
            $this.sm['changeTypeDia'].startModule(dialogData,function(){
            },function(error){console.log(error)});
          },function(error){console.log(error)});
        }else{
          $this.icon1Color = '#12B0FF';
          $this.icon1 = 'van-icon-checked';
          $this.icon2Color = '#DDDDDD';
          $this.icon2 = 'van-icon-circle';
        }
      },
      showCustomerDialog:function(){
        let $this = this;
        $this.showSubModule('customerSettingDia',true,function(){
          $this.sm['customerSettingDia'].startModule($this.customerIdArr,function(){
          },function(error){console.log(error)});
        },function(error){console.log(error)});
      },
      chooseDeparment:function(){
        //判断另一种数据是否存在
        let $this = this;
        if($this.customerIdArr.length > 0){
          $this.type = 1;
          //弹出提示框
          $this.showSubModule('changeTypeDia',true,function(){
            let dialogData = {
              title:'选择公开部门后将清空公开客户的数据。是否确认选择公开部门?',
              btnText:['取消','确认']
            };
            $this.sm['changeTypeDia'].startModule(dialogData,function(){
            },function(error){console.log(error)});
          },function(error){console.log(error)});
        }else{
          $this.icon2Color = '#12B0FF';
          $this.icon2 = 'van-icon-checked';
          $this.icon1Color = '#DDDDDD';
          $this.icon1 = 'van-icon-circle';
        }
      },
      showDeparmentDialog:function(){
        let $this = this;
        $this.showSubModule('deparmentSetting',true,function(){
          $this.sm['deparmentSetting'].startModule($this.groupId,$this.departmentIdArr,function(){
          },function(error){console.log(error)});
        },function(error){console.log(error)});
      },
      typeChange:function(refId){
        let $this = this;
        if($this.type === 0){
          $this.icon1Color = '#12B0FF';
          $this.icon1 = 'van-icon-checked';
          $this.icon2Color = '#DDDDDD';
          $this.icon2 = 'van-icon-circle';
          $this.state2 = false;
          $this.departmentIdArr = [];
        }else if($this.type === 1){
          $this.icon2Color = '#12B0FF';
          $this.icon2 = 'van-icon-checked';
          $this.icon1Color = '#DDDDDD';
          $this.icon1 = 'van-icon-circle';
          $this.state1 = false;
          $this.customerIdArr = [];
        }
      },
      customerChange:function(arr){
        let $this = this;
        $this.customerIdArr = arr;
        if($this.customerIdArr.length > 0){
          $this.state1 = true;
        }else{
          $this.state1 = false;
        }
      },
      deparmentChange:function(arr){
        let $this = this;
        $this.departmentIdArr = arr;
        if($this.departmentIdArr.length > 0){
          $this.state2 = true;
        }else{
          $this.state2 = false;
        }
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
          sm4:'chooseIcon1',
          sm5:'customText',
          sm6:'customState',
          sm7:'chooseIcon2',
          sm8:'deparmentText',
          sm9:'deparmentState'
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
                para.nStep = 'startModule_icon1';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_icon1':
              $this.sm[ref.sm4].startModule(function(){
                para.nStep = 'startModule_text1';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_text1':
              $this.sm[ref.sm5].startModule(function(){
                para.nStep = 'startModule_state1';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_state1':
              $this.sm[ref.sm6].startModule(function(){
                para.nStep = 'startModule_icon2';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_icon2':
              $this.sm[ref.sm7].startModule(function(){
                para.nStep = 'startModule_text2';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_text2':
              $this.sm[ref.sm8].startModule(function(){
                para.nStep = 'startModule_state2';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_state2':
              $this.sm[ref.sm9].startModule(function(){
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
      chooseIcon1_textClickEvent:function(){
        this.chooseCustomer();
      },
      customText_textClickEvent:function(){
        this.chooseCustomer();
      },
      customState_textClickEvent:function(){
        this.showCustomerDialog();
      },
      chooseIcon2_textClickEvent:function(){
        this.chooseDeparment();
      },
      deparmentText_textClickEvent:function(){
        this.chooseDeparment();
      },
      deparmentState_textClickEvent:function(){
        this.showDeparmentDialog();
      },
      changeTypeDia_confirmEvent:function(refId){
        this.typeChange(refId);
      },
      customerSettingDia_confirmEvent:function(arr){
        this.customerChange(arr);
      },
      deparmentSetting_confirmEvent:function(userIdArr){
        this.deparmentChange(userIdArr);
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
  .mcbReleaseSetting1_container {
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    z-index:1000;
  }
  .mcbReleaseSetting1_row {
    display:flex;
    /*flex:1;*/
  }
  .mcbReleaseSetting1_col {
    display:flex;
    flex-direction:column;
  }
  .mcbReleaseSetting1_row_mcbReleaseSetting1Row{
    height:100%;
  }
  .mcbReleaseSetting1_col_mcbReleaseSetting1Window_size_medium {
    width:@mcbReleaseSetting1-mcbReleaseSetting1Window-medium-width;
  }
  .mcbReleaseSetting1_col_mcbReleaseSetting1Window {
    background-color:mix(@mcbReleaseSetting1-mcbReleaseSetting1Window-background-color,#fff,@mcbReleaseSetting1-mcbReleaseSetting1Window-background-color-opacity);
  }
  .mcbReleaseSetting1_col_r1c1_size_medium {
    width:@mcbReleaseSetting1-r1c1-medium-width;
    height:@mcbReleaseSetting1-r1c1-medium-height;
    padding:@mcbReleaseSetting1-r1c1-medium-padding;
  }
  .mcbReleaseSetting1_col_r1c1 {
    background-color:mix(@mcbReleaseSetting1-r1c1-background-color,#fff,@mcbReleaseSetting1-r1c1-background-color-opacity);
    position:fixed;
    top: 0;
    left:0;
    box-sizing:border-box;
  }
  .mcbReleaseSetting1_col_r1_1c1_size_medium {
    width:@mcbReleaseSetting1-r1_1c1-medium-width;
    height:@mcbReleaseSetting1-r1_1c1-medium-height;
  }
  .mcbReleaseSetting1_col_r1_1c2_size_medium {
    width:@mcbReleaseSetting1-r1_1c2-medium-width;
    height:@mcbReleaseSetting1-r1_1c2-medium-height;
  }
  .mcbReleaseSetting1_col_r1_1c3_size_medium {
    width:@mcbReleaseSetting1-r1_1c3-medium-width;
    height:@mcbReleaseSetting1-r1_1c3-medium-height;
    align-items:flex-end;
    justify-content:center;
  }
  .mcbReleaseSetting1_row_row3{
    height:100%;
  }
  .mcbReleaseSetting1_col_r2c1_size_medium {
    width:@mcbReleaseSetting1-r2c1-medium-width;
    height:@mcbReleaseSetting1-r2c1-medium-height;
    margin:@mcbReleaseSetting1-r2c1-medium-margin;
    padding:@mcbReleaseSetting1-r2c1-medium-padding;
  }
  .mcbReleaseSetting1_col_r2c1 {
    background-color:mix(@mcbReleaseSetting1-r2c1-background-color,#fff,@mcbReleaseSetting1-r2c1-background-color-opacity);
  }
  .mcbReleaseSetting1_col_r2_1c1_size_medium {
    width:@mcbReleaseSetting1-r2_1c1-medium-width;
    height:@mcbReleaseSetting1-r2_1c1-medium-height;
  }
  .mcbReleaseSetting1_col_r2_1c1 {
    border-style:@mcbReleaseSetting1-r2_1c1-border-style;
    border-width:@mcbReleaseSetting1-r2_1c1-border-width;
    border-color:mix(@mcbReleaseSetting1-r2_1c1-border-color,#fff,@mcbReleaseSetting1-r2_1c1-hover-border-color-opacity);
  }
  .mcbReleaseSetting1_col_r2_1c2_size_medium {
    width:@mcbReleaseSetting1-r2_1c2-medium-width;
    height:@mcbReleaseSetting1-r2_1c2-medium-height;
  }
  .mcbReleaseSetting1_col_r2_1c2 {
    border-style:@mcbReleaseSetting1-r2_1c2-border-style;
    border-width:@mcbReleaseSetting1-r2_1c2-border-width;
    border-color:mix(@mcbReleaseSetting1-r2_1c2-border-color,#fff,@mcbReleaseSetting1-r2_1c2-hover-border-color-opacity);
  }
  .mcbReleaseSetting1_col_r2_1c3_size_medium {
    width:@mcbReleaseSetting1-r2_1c3-medium-width;
    height:@mcbReleaseSetting1-r2_1c3-medium-height;
  }
  .mcbReleaseSetting1_col_r2_1c3 {
    border-style:@mcbReleaseSetting1-r2_1c3-border-style;
    border-width:@mcbReleaseSetting1-r2_1c3-border-width;
    border-color:mix(@mcbReleaseSetting1-r2_1c3-border-color,#fff,@mcbReleaseSetting1-r2_1c3-hover-border-color-opacity);
  }
  .mcbReleaseSetting1_col_r2_2c1_size_medium {
    width:@mcbReleaseSetting1-r2_2c1-medium-width;
    height:@mcbReleaseSetting1-r2_2c1-medium-height;
  }
  .mcbReleaseSetting1_col_r2_2c1 {
    border-style:@mcbReleaseSetting1-r2_2c1-border-style;
    border-width:@mcbReleaseSetting1-r2_2c1-border-width;
    border-color:mix(@mcbReleaseSetting1-r2_2c1-border-color,#fff,@mcbReleaseSetting1-r2_2c1-hover-border-color-opacity);
  }
  .mcbReleaseSetting1_col_r2_2c2_size_medium {
    width:@mcbReleaseSetting1-r2_2c2-medium-width;
    height:@mcbReleaseSetting1-r2_2c2-medium-height;
  }
  .mcbReleaseSetting1_col_r2_2c2 {
    border-style:@mcbReleaseSetting1-r2_2c2-border-style;
    border-width:@mcbReleaseSetting1-r2_2c2-border-width;
    border-color:mix(@mcbReleaseSetting1-r2_2c2-border-color,#fff,@mcbReleaseSetting1-r2_2c2-hover-border-color-opacity);
  }
  .mcbReleaseSetting1_col_r2_2c3_size_medium {
    width:@mcbReleaseSetting1-r2_2c3-medium-width;
    height:@mcbReleaseSetting1-r2_2c3-medium-height;
  }
  .mcbReleaseSetting1_col_r2_2c3 {
    border-style:@mcbReleaseSetting1-r2_2c3-border-style;
    border-width:@mcbReleaseSetting1-r2_2c3-border-width;
    border-color:mix(@mcbReleaseSetting1-r2_2c3-border-color,#fff,@mcbReleaseSetting1-r2_2c3-hover-border-color-opacity);
  }
  .mcbReleaseSetting1_col_changeTypeDia_size_medium {
    width:@mcbReleaseSetting1-changeTypeDia-medium-width;
    height:@mcbReleaseSetting1-changeTypeDia-medium-height;
  }
  .mcbReleaseSetting1_dialog {
    position:fixed;
  }
</style>
