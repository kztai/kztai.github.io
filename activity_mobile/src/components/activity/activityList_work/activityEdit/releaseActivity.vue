<template>
  <div :class="{mcbReleaseActivity_col:true,mcbReleaseActivity_col_mcbReleaseActivityWindow:true,mcbReleaseActivity_col_mcbReleaseActivityWindow_size_large:attr.size==='large',mcbReleaseActivity_col_mcbReleaseActivityWindow_size_medium:attr.size==='medium',mcbReleaseActivity_col_mcbReleaseActivityWindow_size_small:attr.size==='small',mcbReleaseActivity_col_mcbReleaseActivityWindow_size_min:attr.size==='min',mcbReleaseActivity_col_mcbReleaseActivityWindow_checked:attr.checked,mcbReleaseActivity_col_mcbReleaseActivityWindow_disable:attr.disabled}">

    <div class="mcbReleaseActivity_row mcbReleaseActivity_row_row1">
      <div :class="{mcbReleaseActivity_col:true,mcbReleaseActivity_col_r1c1:true,mcbReleaseActivity_col_r1c1_size_large:attr.size==='large',mcbReleaseActivity_col_r1c1_size_medium:attr.size==='medium',mcbReleaseActivity_col_r1c1_size_small:attr.size==='small',mcbReleaseActivity_col_r1c1_size_min:attr.size==='min',mcbReleaseActivity_col_r1c1_checked:attr.checked,mcbReleaseActivity_col_r1c1_disable:attr.disabled}">

        <mcb-title-bar
                ref="titleBar"
                refId="titleBar"
                v-show="pvt_isShow.r1c1 === 'titleBar'"
                :paraVarPair="pvt_r1c1.titleBar.paraVarPair"
                :para="pvt_r1c1.titleBar.para"
                :attr="pvt_r1c1.titleBar.attr">
        </mcb-title-bar>
      </div>
    </div>
    <div class="mcbReleaseActivity_row mcbReleaseActivity_row_row2">
      <div :class="{mcbReleaseActivity_col:true,mcbReleaseActivity_col_r2c1:true,mcbReleaseActivity_col_r2c1_size_large:attr.size==='large',mcbReleaseActivity_col_r2c1_size_medium:attr.size==='medium',mcbReleaseActivity_col_r2c1_size_small:attr.size==='small',mcbReleaseActivity_col_r2c1_size_min:attr.size==='min',mcbReleaseActivity_col_r2c1_checked:attr.checked,mcbReleaseActivity_col_r2c1_disable:attr.disabled}">

        <div class="mcbReleaseActivity_row mcbReleaseActivity_row_row3">
          <div :class="{mcbReleaseActivity_col:true,mcbReleaseActivity_col_r2_1c1:true,mcbReleaseActivity_col_r2_1c1_size_large:attr.size==='large',mcbReleaseActivity_col_r2_1c1_size_medium:attr.size==='medium',mcbReleaseActivity_col_r2_1c1_size_small:attr.size==='small',mcbReleaseActivity_col_r2_1c1_size_min:attr.size==='min',mcbReleaseActivity_col_r2_1c1_checked:attr.checked,mcbReleaseActivity_col_r2_1c1_disable:attr.disabled}">

            <mcb-poster-img
                    ref="posterImg"
                    refId="posterImg"
                    v-show="pvt_isShow.r2_1c1 === 'posterImg'"
                    :paraVarPair="pvt_r2_1c1.posterImg.paraVarPair"
                    :para="pvt_r2_1c1.posterImg.para"
                    :attr="pvt_r2_1c1.posterImg.attr">
            </mcb-poster-img>
          </div>
        </div>
        <div class="mcbReleaseActivity_row mcbReleaseActivity_row_row4">
          <div :class="{mcbReleaseActivity_col:true,mcbReleaseActivity_col_r2_2c1:true,mcbReleaseActivity_col_r2_2c1_size_large:attr.size==='large',mcbReleaseActivity_col_r2_2c1_size_medium:attr.size==='medium',mcbReleaseActivity_col_r2_2c1_size_small:attr.size==='small',mcbReleaseActivity_col_r2_2c1_size_min:attr.size==='min',mcbReleaseActivity_col_r2_2c1_checked:attr.checked,mcbReleaseActivity_col_r2_2c1_disable:attr.disabled}">

            <mcb-base-info
                    ref="baseInfo"
                    refId="baseInfo"
                    v-show="pvt_isShow.r2_2c1 === 'baseInfo'"
                    :paraVarPair="pvt_r2_2c1.baseInfo.paraVarPair"
                    :para="pvt_r2_2c1.baseInfo.para"
                    :attr="pvt_r2_2c1.baseInfo.attr">
            </mcb-base-info>
          </div>
        </div>
        <div class="mcbReleaseActivity_row mcbReleaseActivity_row_row5">
          <div :class="{mcbReleaseActivity_col:true,mcbReleaseActivity_col_r2_3c1:true,mcbReleaseActivity_col_r2_3c1_size_large:attr.size==='large',mcbReleaseActivity_col_r2_3c1_size_medium:attr.size==='medium',mcbReleaseActivity_col_r2_3c1_size_small:attr.size==='small',mcbReleaseActivity_col_r2_3c1_size_min:attr.size==='min',mcbReleaseActivity_col_r2_3c1_checked:attr.checked,mcbReleaseActivity_col_r2_3c1_disable:attr.disabled}">

            <mcb-activity-setting
                    ref="activitySetting"
                    refId="activitySetting"
                    v-show="pvt_isShow.r2_3c1 === 'activitySetting'"
                    :paraVarPair="pvt_r2_3c1.activitySetting.paraVarPair"
                    :para="pvt_r2_3c1.activitySetting.para"
                    :attr="pvt_r2_3c1.activitySetting.attr">
            </mcb-activity-setting>
          </div>
        </div>
        <div class="mcbReleaseActivity_row mcbReleaseActivity_row_row6">
          <div :class="{mcbReleaseActivity_col:true,mcbReleaseActivity_col_r2_4c1:true,mcbReleaseActivity_col_r2_4c1_size_large:attr.size==='large',mcbReleaseActivity_col_r2_4c1_size_medium:attr.size==='medium',mcbReleaseActivity_col_r2_4c1_size_small:attr.size==='small',mcbReleaseActivity_col_r2_4c1_size_min:attr.size==='min',mcbReleaseActivity_col_r2_4c1_checked:attr.checked,mcbReleaseActivity_col_r2_4c1_disable:attr.disabled}">

            <mcb-bottom-feature-bar
                    ref="bottomFeatureBar"
                    refId="bottomFeatureBar"
                    v-show="pvt_isShow.r2_4c1 === 'bottomFeatureBar'"
                    :paraVarPair="pvt_r2_4c1.bottomFeatureBar.paraVarPair"
                    :para="pvt_r2_4c1.bottomFeatureBar.para"
                    :attr="pvt_r2_4c1.bottomFeatureBar.attr">
            </mcb-bottom-feature-bar>
          </div>
        </div>
      </div>
    </div>
    <!--对话框-->
    <div class="mcbReleaseActivity_row mcbReleaseActivity_row_row3">
      <div :class="{mcbReleaseActivity_col:true,mcbReleaseActivity_col_r3c1:true,mcbReleaseActivity_col_r3c1_size_large:attr.size==='large',mcbReleaseActivity_col_r3c1_size_medium:attr.size==='medium',mcbReleaseActivity_col_r3c1_size_small:attr.size==='small',mcbReleaseActivity_col_r3c1_size_min:attr.size==='min',mcbReleaseActivity_col_r3c1_checked:attr.checked,mcbReleaseActivity_col_r3c1_disable:attr.disabled}">

        <mcb-poster-edit
                ref="posterEdit"
                refId="posterEdit"
                v-show="pvt_isShow.r3c1 === 'posterEdit'"
                :paraVarPair="pvt_r3c1.posterEdit.paraVarPair"
                :para="pvt_r3c1.posterEdit.para"
                :attr="pvt_r3c1.posterEdit.attr">
        </mcb-poster-edit>
        <mc-address-in-map
                ref="addressInMap"
                refId="addressInMap"
                v-show="pvt_isShow.r3c1 === 'addressInMap'"
                :paraVarPair="pvt_r3c1.addressInMap.paraVarPair"
                :para="pvt_r3c1.addressInMap.para"
                :attr="pvt_r3c1.addressInMap.attr">
        </mc-address-in-map>
        <mcb-detail-description
                ref="detailEdit"
                refId="detailEdit"
                v-show="pvt_isShow.r3c1 === 'detailEdit'"
                :paraVarPair="pvt_r3c1.detailEdit.paraVarPair"
                :para="pvt_r3c1.detailEdit.para"
                :attr="pvt_r3c1.detailEdit.attr">
        </mcb-detail-description>
        <mcb-classify-setting
                ref="classifySetting"
                refId="classifySetting"
                v-show="pvt_isShow.r3c1 === 'classifySetting'"
                :paraVarPair="pvt_r3c1.classifySetting.paraVarPair"
                :para="pvt_r3c1.classifySetting.para"
                :attr="pvt_r3c1.classifySetting.attr">
        </mcb-classify-setting>
        <mcb-ticket-type-setting
                ref="ticketTypeSetting"
                refId="ticketTypeSetting"
                v-show="pvt_isShow.r3c1 === 'ticketTypeSetting'"
                :paraVarPair="pvt_r3c1.ticketTypeSetting.paraVarPair"
                :para="pvt_r3c1.ticketTypeSetting.para"
                :attr="pvt_r3c1.ticketTypeSetting.attr">
        </mcb-ticket-type-setting>
        <mcb-reg-form
                ref="regForm"
                refId="regForm"
                v-show="pvt_isShow.r3c1 === 'regForm'"
                :paraVarPair="pvt_r3c1.regForm.paraVarPair"
                :para="pvt_r3c1.regForm.para"
                :attr="pvt_r3c1.regForm.attr">
        </mcb-reg-form>
        <mcb-refund-setting
                ref="refundSetting"
                refId="refundSetting"
                v-show="pvt_isShow.r3c1 === 'refundSetting'"
                :paraVarPair="pvt_r3c1.refundSetting.paraVarPair"
                :para="pvt_r3c1.refundSetting.para"
                :attr="pvt_r3c1.refundSetting.attr">
        </mcb-refund-setting>
        <mcb-manager-setting
                ref="managerSetting"
                refId="managerSetting"
                v-show="pvt_isShow.r3c1 === 'managerSetting'"
                :paraVarPair="pvt_r3c1.managerSetting.paraVarPair"
                :para="pvt_r3c1.managerSetting.para"
                :attr="pvt_r3c1.managerSetting.attr">
        </mcb-manager-setting>
        <mcb-budget-setting
                ref="budgetSetting"
                refId="budgetSetting"
                v-show="pvt_isShow.r3c1 === 'budgetSetting'"
                :paraVarPair="pvt_r3c1.budgetSetting.paraVarPair"
                :para="pvt_r3c1.budgetSetting.para"
                :attr="pvt_r3c1.budgetSetting.attr">
        </mcb-budget-setting>
        <mcb-release-setting
                ref="releaseSetting"
                refId="releaseSetting"
                v-show="pvt_isShow.r3c1 === 'releaseSetting'"
                :paraVarPair="pvt_r3c1.releaseSetting.paraVarPair"
                :para="pvt_r3c1.releaseSetting.para"
                :attr="pvt_r3c1.releaseSetting.attr">
        </mcb-release-setting>
        <mcb-release-success
                ref="releaseSuccess"
                refId="releaseSuccess"
                v-show="pvt_isShow.r3c1 === 'releaseSuccess'"
                :paraVarPair="pvt_r3c1.releaseSuccess.paraVarPair"
                :para="pvt_r3c1.releaseSuccess.para"
                :attr="pvt_r3c1.releaseSuccess.attr">
        </mcb-release-success>
      </div>
    </div>
  </div>
</template>
<script>
  import libSys from '@/components/baseComponent/libSys.js';
  import libUpload from '@/components/baseComponent/libUpload.js';
  import { Dialog } from 'vant';
  import mcbTitleBar from './releaseActivityTitleBar.vue';
  import mcbPosterImg from './releaseActivityPoster.vue';
  import mcbBaseInfo from './baseInfo.vue';
  import mcbActivitySetting from './activitySetting.vue';
  import mcbBottomFeatureBar from './bottomFeatureBar.vue';
  import mcbPosterEdit from './releaseActivityDialog/posterEdit.vue';
  import mcAddressInMap from './releaseActivityDialog/addressInMap.vue';
  import mcbDetailDescription from './releaseActivityDialog/detailDescribleEdit/detailDescription.vue';
  import mcbClassifySetting from './releaseActivityDialog/classifySetting/classifySetting.vue';
  import mcbTicketTypeSetting from './releaseActivityDialog/ticketTypeSetting/ticketTypeSetting.vue';
  import mcbRegForm from './releaseActivityDialog/registrationForm/registrationForm.vue';
  import mcbRefundSetting from './releaseActivityDialog/refundSetting/refundSetting.vue';
  import mcbManagerSetting from './releaseActivityDialog/managerMemberSetting/managerSetting.vue';
  import mcbBudgetSetting from './releaseActivityDialog/budgetSetting/budgetSetting.vue';
  import mcbReleaseSetting from './releaseActivityDialog/releaseSetting/releaseSetting.vue';
  import mcbReleaseSuccess from './releaseActivityDialog/releaseSuccess/releaseSuccess.vue';
  export default {
    components: {mcbTitleBar,mcbPosterImg,mcbBaseInfo,mcbActivitySetting,mcbBottomFeatureBar,mcbPosterEdit,mcAddressInMap,mcbDetailDescription,mcbClassifySetting,mcbTicketTypeSetting,mcbRegForm,mcbRefundSetting,mcbManagerSetting,mcbBudgetSetting,mcbReleaseSetting,mcbReleaseSuccess},
    inject: ['sys'],
    props: ['refId','para','attr','number'],
    data: function() {
      return {
        pvt_subModuleMap: {
          vessel:['r1c1','r2_1c1','r2_2c1','r2_3c1','r2_4c1',
            'r3c1','r3c1','r3c1','r3c1','r3c1','r3c1','r3c1','r3c1','r3c1','r3c1','r3c1'],
          subModule:['titleBar','posterImg','baseInfo','activitySetting','bottomFeatureBar',
            'posterEdit','addressInMap','detailEdit','classifySetting','ticketTypeSetting','regForm','refundSetting','managerSetting','budgetSetting','releaseSetting','releaseSuccess'],
        },
        pvt_isShow: {
          r1c1:null,
          r2_1c1:null,
          r2_2c1:null,
          r2_3c1:null,
          r2_4c1:null,
          r3c1:null,
          addressInMapDialog:null,
          detailEditDialog:null,
          activityClassifyDialog:null,
          ticketTypeDialog:null,
          regFormDialog:null,
          refundDialog:null,
          managerDialog:null,
          budgetDialog:null,
          releaseSettingDialog:null,
          releaseSuccessDialog:null,
        },
        pvt_eventPortInput: ['backEvent','activityDraftSaveEvent','detailPageEvent','activityIssueEvent','releaseSuccessEvent'],
        activityId:null
      };
    },
    watch: {
    },
    computed:{
      pvt_r1c1:function(){
        return {
          titleBar:{
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
      pvt_r2_1c1:function(){
        return {
          posterImg:{
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
      pvt_r2_2c1:function(){
        return {
          baseInfo:{
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
      pvt_r2_3c1:function(){
        return {
          activitySetting:{
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
      pvt_r2_4c1:function(){
        return {
          bottomFeatureBar:{
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
      //对话框
      pvt_r3c1:function(){
        return {
          posterEdit:{
            paraVarPair:{
            },
            para:{
            },
            attr:{
              size:'medium'
            },
          },
          addressInMap:{
            paraVarPair:{
            },
            para:{
            },
            attr:{
              size:'medium'
            },
          },
          detailEdit:{
            paraVarPair:{},
            para:{
            },
            attr:{
              size:'medium'
            },
          },
          classifySetting:{
            paraVarPair:{},
            para:{
            },
            attr:{
              size:'medium'
            },
          },
          ticketTypeSetting:{
            paraVarPair:{},
            para:{
            },
            attr:{
              size:'medium'
            },
          },
          regForm:{
            paraVarPair:{},
            para:{
            },
            attr:{
              size:'medium'
            },
          },
          refundSetting:{
            paraVarPair:{},
            para:{
            },
            attr:{
              size:'medium'
            },
          },
          managerSetting:{
            paraVarPair:{},
            para:{
            },
            attr:{
              size:'medium'
            },
          },
          budgetSetting:{
            paraVarPair:{},
            para:{
            },
            attr:{
              size:'medium'
            },
          },
          releaseSetting:{
            paraVarPair:{},
            para:{
            },
            attr:{
              size:'medium'
            },
          },
          releaseSuccess:{
            paraVarPair:{},
            para:{
            },
            attr:{
              size:'medium'
            },
          }
        };
      },

      pvt_posterEditDialog:function(){
        return {
          posterEdit:{
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
      pvt_addressInMapDialog:function(){
        return {
          addressInMap:{
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
      pvt_detailEditDialog:function(){
        return {
          detailEdit:{
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
      pvt_activityClassifyDialog:function(){
        return {
          classifySetting:{
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
      pvt_ticketTypeDialog:function(){
        return {
          ticketTypeSetting:{
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
      pvt_regFormDialog:function(){
        return {
          regForm:{
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
      pvt_refundDialog:function(){
        return {
          refundSetting:{
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
      pvt_managerDialog:function(){
        return {
          managerSetting:{
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
      pvt_budgetDialog:function(){
        return {
          budgetSetting:{
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
      pvt_releaseSettingDialog:function(){
        return {
          releaseSetting:{
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
      pvt_releaseSuccessDialog:function(){
        return {
          releaseSuccess:{
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
        let parentRecord;
        let condition;
        let portName;
        let record;
        let destGeneSite;
        let data;
        let expression;
        let start;
        let total;
        let sort;

        if(successCallBack !== null){
          errorCallBack = para;
          successCallBack = null;
        }
        para = errorCallBack;

        while(1){
          dbFlag = 0;
          switch(para.nStep){
            case 0:
              // 获取Id
              $this.activityId = null;
              $this.terminalActivityId = null;
              if(activityId){
                $this.activityId = activityId;
                para.nStep = 'downloadActivity';
              }else{
                para.nStep = 'getRecord';
              }
              ++dbFlag;
              break;
            case 'downloadActivity':
              //获取源粒子id
              tableName = mac.mac.tb.groupActivity;
              record = [$this.activityId];
              $this.sys.api.getSourceRecord(tableName,record,function(result){
                //下载组织数据
                portName = mac.mac.tb.groupActivity;
                $this.terminalActivityId = result[0];
                record = [result[0]];
                destGeneSite = '';
                $this.sys.api.dataInput(portName,record,destGeneSite,function(result){
                  para.nStep = 'showModules';
                  if(++dbFlag === 2){
                    $this.startModule(activityId,successCallBack,errorCallBack);
                  }
                },function(error){console.log(error)});
              },function(error){console.log(error)});
              break;
            case 'getRecord':
              //通过下载终端状态的活动，如果存在则显示否则新建
              portName = mac.mac.tb.groupActivity;
              data = '';
              expression = mac.mac.fd.groupActivity.status + '=' + mac.mac.enum.groupActivity.status.terminal;
              start = 0;
              total = 1;
              sort = [];
              destGeneSite = '';
              $this.sys.api.conditiondataInput(portName,data,expression,start,total,sort,destGeneSite,function(result){
                if(result && result.length > 0){
                  $this.activityId = result[0];
                  para.nStep = 'getSourceId';
                }else{
                  para.nStep = 'recordNew_activity';
                }
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)});
              break;
            case 'recordNew_activity':
              tableName = mac.mac.tb.groupActivity;
              parentRecord = null;
              dbData = {};
              dbData[mac.mac.fd.groupActivity.mode] = [mac.mac.enum.groupActivity.mode.outLine];
              dbData[mac.mac.fd.groupActivity.showEnrollInfo] = [mac.mac.enum.groupActivity.showEnrollInfo.yes];
              dbData[mac.mac.fd.groupActivity.status] = [mac.mac.enum.groupActivity.status.terminal];
              dbData[mac.mac.fd.groupActivity.groupId] = [mac.groupId];
              dbData[mac.mac.fd.groupActivity.groupName] = [mac.groupName];
              dbData[mac.mac.fd.groupActivity.department] = [mac.departmentId];
              dbData[mac.mac.fd.groupActivity.departmentName] = [mac.departmentName];
              dbData[mac.mac.fd.groupActivity.author] = [mac.userId];
              dbData[mac.mac.fd.groupActivity.authorName] = [mac.userName];
              dbData[mac.mac.fd.groupActivity.authorSite] = [mac.userSite];
              dbData[mac.mac.fd.groupActivity.praiseNumber] = [0];
              dbData[mac.mac.fd.groupActivity.commentNumber] = [0];
              dbData[mac.mac.fd.groupActivity.favoriteNumber] = [0];
              dbData[mac.mac.fd.groupActivity.browerNumber] = [0];
              dbData[mac.mac.fd.groupActivity.forwardNumber] = [0];
              let nowDate = new Date();
              let year = nowDate.getFullYear(); //得到年份
              let month = nowDate.getMonth();//得到月份
              let date = nowDate.getDate();//得到日期
              let hour = nowDate.getHours();//得到小时
              let min = nowDate.getMinutes();//得到分钟
              month = month + 1;
              if (month < 10) month = "0" + month;
              if (date < 10) date = "0" + date;
              if (hour < 10) hour = "0" + hour;
              if (min < 10) min = "0" + min;
              let createTimeText = year + "-" + month + "-" + date + ' ' + hour + ':' + min;
              dbData[mac.mac.fd.groupActivity.createTime] = [createTimeText];
              //活动时间默认设为当前时间，发布预览时再做检测
              dbData[mac.mac.fd.groupActivity.startTime] = [createTimeText];
              dbData[mac.mac.fd.groupActivity.endTime] = [createTimeText];
              para.startTime = createTimeText;
              para.endTime = createTimeText;
              $this.sys.api.recordNew(tableName,parentRecord,dbData,function(){
                $this.activityId = dbData[mac.mac.fd.id][0];
                para.nStep = 'recordNew_enrollForm';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)})
              break;
            case 'recordNew_enrollForm':
              tableName = mac.mac.tb.groupActivityEnrollForm;
              parentRecord = $this.activityId;
              dbData = {};
              dbData[mac.mac.fd.groupActivityEnrollForm.attribute] = [
                mac.mac.enum.groupActivityEnrollForm.attribute.need,
                mac.mac.enum.groupActivityEnrollForm.attribute.need
              ];
              dbData[mac.mac.fd.groupActivityEnrollForm.name] = [
                '姓名',
                '手机'
              ];
              dbData[mac.mac.fd.groupActivityEnrollForm.baseComponent] = [
                {
                  name:'lm2b-input-text'
                },
                {
                  name:'lm2b-input-phone'
                }
              ];
              $this.sys.api.recordNew(tableName,parentRecord,dbData,function(){
                para.nStep = 'recordNew_ticketType';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)})
              break;
            case 'recordNew_ticketType':
              tableName = mac.mac.tb.groupActivityTicketType;
              parentRecord = $this.activityId;
              dbData = {};
              dbData[mac.mac.fd.groupActivityTicketType.name] = ['默认票'];
              dbData[mac.mac.fd.groupActivityTicketType.price] = [0];
              dbData[mac.mac.fd.groupActivityTicketType.minNumber] = [1];
              dbData[mac.mac.fd.groupActivityTicketType.approval] = [
                mac.mac.enum.groupActivityTicketType.approval.no
              ];
              dbData[mac.mac.fd.groupActivityTicketType.startTime] = [para.startTime];
              dbData[mac.mac.fd.groupActivityTicketType.endTime] = [para.endTime];
              //默认为活动前均可售票
              dbData[mac.mac.fd.groupActivityTicketType.saleEndTime] = [para.endTime];
              $this.sys.api.recordNew(tableName,parentRecord,dbData,function(){
                para.nStep = 'getSourceId';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)})
              break;
            case 'getSourceId':
              //获取源粒子id
              tableName = mac.mac.tb.groupActivity;
              record = [$this.activityId];
              $this.sys.api.getSourceRecord(tableName,record,function(result){
                $this.terminalActivityId = result[0];
                para.nStep = 'showModules';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)});
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                'titleBar','posterImg','baseInfo','activitySetting','bottomFeatureBar'
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
      backButtonClick:function(){
        let $this = this;
        $this.hideSelfModule($this.refId,function(){
          $this.ep.backEvent();
        },function(error){console.log(error)});
      },
      mobileAlbum:function(){
        let $this = this;
        $this.showSubModule('posterEdit',true,function(){
          $this.sm['posterEdit'].startModule($this.activityId,function(){
          },function(error){console.log(error)});
        },function(error){console.log(error)});
      },
      addressSetMunu:function(){
        let $this = this;
        $this.showSubModule('addressInMap',true,function(){
          $this.sm['addressInMap'].startModule($this.activityId,function(){
          },function(error){console.log(error)});
        },function(error){console.log(error)});
      },
      descriptionEditMunu:function(){
        let $this = this;
        $this.showSubModule('detailEdit',true,function(){
          $this.sm['detailEdit'].startModule($this.activityId,function(){
          },function(error){console.log(error)});
        },function(error){console.log(error)});
      },
      activityClassifyMunu:function(){
        let $this = this;
        $this.showSubModule('classifySetting',true,function(){
          $this.sm['classifySetting'].startModule($this.activityId,function(){
          },function(error){console.log(error)});
        },function(error){console.log(error)});
      },
      ticketTypeSetMunu:function(){
        let $this = this;
        $this.showSubModule('ticketTypeSetting',true,function(){
          $this.sm['ticketTypeSetting'].startModule($this.activityId,function(){
          },function(error){console.log(error)});
        },function(error){console.log(error)});
      },
      regFormSetMunu:function(){
        let $this = this;
        $this.showSubModule('regForm',true,function(){
          $this.sm['regForm'].startModule($this.activityId,function(){
          },function(error){console.log(error)});
        },function(error){console.log(error)});
      },
      withdrawSetMunu:function(){
        let $this = this;
        $this.showSubModule('refundSetting',true,function(){
          $this.sm['refundSetting'].startModule($this.activityId,function(){
          },function(error){console.log(error)});
        },function(error){console.log(error)});
      },
      managerSetMunu:function(){
        let $this = this;
        $this.showSubModule('managerSetting',true,function(){
          $this.sm['managerSetting'].startModule($this.activityId,function(){
          },function(error){console.log(error)});
        },function(error){console.log(error)});
      },
      budgetSetMunu:function(){
        let $this = this;
        $this.showSubModule('budgetSetting',true,function(){
          $this.sm['budgetSetting'].startModule($this.activityId,function(){
          },function(error){console.log(error)});
        },function(error){console.log(error)});
      },
      issueScopeSetMunu:function(){
        let $this = this;
        $this.showSubModule('releaseSetting',true,function(){
          $this.sm['releaseSetting'].startModule($this.activityId,function(){
          },function(error){console.log(error)});
        },function(error){console.log(error)});
      },
      saveDraft:function(){
        //存为草稿必须有活动名
        let $this = this;
        $this.saveDraft_(function(){},function(error){console.log(error)});
      },
      saveDraft_:function(successCallBack,errorCallBack){
        let $this = this;
        let para = {
          successCallBack:successCallBack,
          errorCallBack:errorCallBack,
          nStep:0
        }
        let dbFlag;
        let tableName;
        let dbData;
        let parentRecord;
        let condition;

        if(successCallBack !== null){
          errorCallBack = para;
          successCallBack = null;
        }
        para = errorCallBack;

        while(1){
          dbFlag = 0;
          switch(para.nStep){
            case 0:
              // 获取name
              tableName = mac.mac.tb.groupActivity;
              dbData = {};
              dbData[mac.mac.fd.id] = [$this.activityId];
              dbData[mac.mac.fd.groupActivity.name] = [];
              $this.sys.api.recordRead(tableName,dbData,function(){
                if(dbData[mac.mac.fd.groupActivity.name][0]){
                  para.nStep = 'searchTicket';
                }else{
                  para.nStep = 'error_dialog';
                }
                if(++dbFlag === 2){
                  $this.saveDraft_(successCallBack,errorCallBack);
                }
              },function(error){console.log(error)})
              break;
            case 'error_dialog':
              Dialog.alert({
                message: '请填写活动标题'
              }).then(() => {
                // on close
              });
              para.nStep = 'error';
              ++dbFlag;
              break;
            case 'searchTicket':
              tableName = mac.mac.tb.groupActivityTicketType;
              parentRecord = [$this.activityId];
              condition = null;
              dbData = {};
              dbData[mac.mac.fd.id] = [];
              $this.sys.api.recordQuery(tableName,parentRecord,condition,dbData,function(){
                para.ticketType = dbData[mac.mac.fd.id].length;
                para.nStep = 'recordModify';
                if(++dbFlag === 2){
                  $this.saveDraft_(successCallBack,errorCallBack);
                }
              },function(error){console.log(error)})
              break;
            case 'recordModify':
              tableName = mac.mac.tb.groupActivity;
              dbData = {};
              dbData[mac.mac.fd.id] = [$this.activityId];
              dbData[mac.mac.fd.groupActivity.status] = [mac.mac.enum.groupActivity.status.draft];
              para.arr = [];
              for(let i = 0;i < para.ticketType;i++){
                para.arr.push(0);
              }
              dbData[mac.mac.fd.groupActivity.enrollNumber] = [para.arr];
              $this.sys.api.recordModify(tableName,dbData,function(){
                //上传数据
                let data = {
                  objectName:[mac.mac.tb.groupActivity],
                  record:[[$this.activityId]]
                };
                $this.uploadData(data,function(){
                  $this.ep.activityDraftSaveEvent($this.terminalActivityId);
                  para.nStep = 'end';
                  if(++dbFlag === 2){
                    $this.saveDraft_(successCallBack,errorCallBack);
                  }
                },function(error){console.log(error)});
              },function(error){console.log(error)})
              break;
            case 'end':
              para.successCallBack('success');
              return;
            case 'error':
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
      previewActivity:function(){
        //活动详情页和创建活动模块是兄弟模块关系
        let $this = this;
        $this.checkRequiredData(0,function(){
            $this.ep.detailPageEvent($this.activityId);
          // $this.hideSelfModule($this.refId,function(){
          //
          // },function(error){console.log(error)});
        },function(error){console.log(error)});
      },
      checkRequiredData:function(type,successCallBack,errorCallBack){
        let $this = this;
        let para = {
          successCallBack:successCallBack,
          errorCallBack:errorCallBack,
          nStep:0
        }
        let dbFlag;
        let tableName;
        let dbData;
        let parentRecord;
        let condition;

        if(successCallBack !== null){
          errorCallBack = para;
          successCallBack = null;
        }
        para = errorCallBack;

        while(1){
          dbFlag = 0;
          switch(para.nStep){
            case 0:
              //查询必填信息
              para.poster = '';
              para.name = '';
              para.startTime = '';
              para.endTime = '';
              para.place = '';
              para.phone = '';
              para.details = '';
              para.abstract = '';
              para.label = '';
              para.ticketType = '';
              para.refund = '';
              tableName = mac.mac.tb.groupActivity;
              dbData = {};
              dbData[mac.mac.fd.id] = [$this.activityId];
              dbData[mac.mac.fd.groupActivity.poster] = [];
              dbData[mac.mac.fd.groupActivity.name] = [];
              dbData[mac.mac.fd.groupActivity.startTime] = [];
              dbData[mac.mac.fd.groupActivity.endTime] = [];
              dbData[mac.mac.fd.groupActivity.mode] = [];
              dbData[mac.mac.fd.groupActivity.place] = [];
              dbData[mac.mac.fd.groupActivity.phone] = [];
              dbData[mac.mac.fd.groupActivity.details] = [];
              dbData[mac.mac.fd.groupActivity.abstract] = [];
              dbData[mac.mac.fd.groupActivity.refundObject] = [];
              $this.sys.api.recordRead(tableName,dbData,function(){
                if(dbData[mac.mac.fd.groupActivity.poster][0] !== null){
                  let posterArr = dbData[mac.mac.fd.groupActivity.poster][0];
                  if(!posterArr[0] || !posterArr[0].fileName){
                    para.poster = '请设置活动海报';
                  }
                }else{
                  para.poster = '请设置活动海报';
                }
                if(!dbData[mac.mac.fd.groupActivity.name][0]){
                  para.name = '请填写活动标题';
                }
                if(dbData[mac.mac.fd.groupActivity.startTime][0]){
                  para.startTimeNum = new Date(dbData[mac.mac.fd.groupActivity.startTime][0]).getTime();
                  if(para.startTimeNum <= new Date().getTime()){
                    para.startTime = '活动开始时间不应小于当前时间';
                  }
                }else{
                  para.startTime = '请设置活动开始时间';
                }
                if(dbData[mac.mac.fd.groupActivity.endTime][0]){
                  para.endTimeNum = new Date(dbData[mac.mac.fd.groupActivity.endTime][0]).getTime();
                  if(para.startTimeNum && para.startTimeNum >= para.endTimeNum){
                    para.endTime = '活动结束时间不应小于活动开始时间';
                  }
                }else{
                  para.endTime = '请设置活动结束时间';
                }
                if(dbData[mac.mac.fd.groupActivity.mode][0] !== mac.mac.enum.groupActivity.mode.online){
                  let activityPlace = dbData[mac.mac.fd.groupActivity.place][0];
                  if(activityPlace === null || activityPlace.name.length === 0){
                    para.place = '请设置活动地点';
                  }
                }
                if(!dbData[mac.mac.fd.groupActivity.phone][0]){
                  para.phone = '请设置联系电话';
                }
                if(!dbData[mac.mac.fd.groupActivity.details][0]){
                  para.details = '请编辑活动详情';
                }
                if(!dbData[mac.mac.fd.groupActivity.abstract][0]){
                  para.abstract = '请填写活动亮点';
                }
                if(dbData[mac.mac.fd.groupActivity.refundObject][0] === null){
                  para.refund = '请设置退款说明';
                }else{
                  para.refundDaysAgo = dbData[mac.mac.fd.groupActivity.refundObject][0].daysAgo;
                }
                para.nStep = 'searchTicket';
                if(++dbFlag === 2){
                  $this.checkRequiredData(type,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)})
              break;
            case 'searchTicket':
              tableName = mac.mac.tb.groupActivityTicketType;
              parentRecord = [$this.activityId];
              condition = null;
              dbData = {};
              dbData[mac.mac.fd.id] = [];
              dbData[mac.mac.fd.groupActivityTicketType.name] = [];
              dbData[mac.mac.fd.groupActivityTicketType.startTime] = [];
              dbData[mac.mac.fd.groupActivityTicketType.endTime] = [];
              dbData[mac.mac.fd.groupActivityTicketType.saleStartTime] = [];
              dbData[mac.mac.fd.groupActivityTicketType.saleEndTime] = [];
              $this.sys.api.recordQuery(tableName,parentRecord,condition,dbData,function(){
                para.ticketIdArr = dbData[mac.mac.fd.id];
                para.ticketStartTimeArr = dbData[mac.mac.fd.groupActivityTicketType.startTime];
                for(let i = 0;i < dbData[mac.mac.fd.groupActivityTicketType.name].length;i++){
                  let ticketName = dbData[mac.mac.fd.groupActivityTicketType.name][i];
                  let ticketStartTime = new Date(dbData[mac.mac.fd.groupActivityTicketType.startTime][i]).getTime();
                  let ticketEndTime = new Date(dbData[mac.mac.fd.groupActivityTicketType.endTime][i]).getTime();
                  let ticketSaleStartTime;
                  let ticketSaleEndTime = new Date(dbData[mac.mac.fd.groupActivityTicketType.saleEndTime][i]).getTime();
                  if(dbData[mac.mac.fd.groupActivityTicketType.saleStartTime][i]){
                    ticketSaleStartTime = dbData[mac.mac.fd.groupActivityTicketType.saleStartTime][i];
                  }
                  if(ticketStartTime < para.startTimeNum){
                    para.ticketType = '票名' + ticketName + '的票种开始时间不应小于活动开始时间';
                  }else if(ticketStartTime >= para.endTimeNum){
                    para.ticketType = '票名' + ticketName + '的票种开始时间不应大于活动结束时间';
                  }
                  if(!para.ticketType){
                    if(ticketEndTime <= ticketStartTime){
                      para.ticketType = '票名' + ticketName + '的票种结束时间不应小于票种开始时间';
                    }else if(ticketEndTime > para.endTimeNum){
                      para.ticketType = '票名' + ticketName + '的票种结束时间不应大于活动结束时间';
                    }
                  }
                  if(!para.ticketType){
                    if(ticketSaleStartTime){
                      if(ticketSaleStartTime >= ticketStartTime){
                        para.ticketType = '票名' + ticketName + '的售票开始时间不应大于票种开始时间';
                      }
                    }
                  }
                  if(!para.ticketType){
                    if(ticketSaleStartTime){
                      if(ticketSaleEndTime <= ticketSaleStartTime){
                        para.ticketType = '票名' + ticketName + '的售票结束时间不应小于售票开始时间';
                      }else if(ticketSaleEndTime > ticketEndTime){
                        para.ticketType = '票名' + ticketName + '的售票结束时间不应大于票种结束时间';
                      }
                    }else{
                      if(ticketSaleEndTime > ticketEndTime){
                        para.ticketType = '票名' + ticketName + '的售票结束时间不应大于票种结束时间';
                      }
                    }
                  }
                  if(para.ticketType){
                    break;
                  }
                }
                para.nStep = 'searchClassify';
                if(++dbFlag === 2){
                  $this.checkRequiredData(type,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)})
              break;
            case 'searchClassify':
              //新表中分类放在一个单独子表中
              tableName = mac.mac.tb.groupClassify;
              parentRecord = [$this.activityId];
              condition = null;
              dbData = {};
              dbData[mac.mac.fd.id] = [];
              $this.sys.api.recordQuery(tableName,parentRecord,condition,dbData,function(){
                if(dbData[mac.mac.fd.id].length === 0){
                  para.label = '请设置活动分类';
                }
                para.nStep = 'checkData';
                if(++dbFlag === 2){
                  $this.checkRequiredData(type,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)})
              break;
            case 'checkData':
              para.errorText = '';
              if(para.poster){
                para.errorText = para.poster;
              }else if(para.name){
                para.errorText = para.name;
              }else if(para.startTime){
                para.errorText = para.startTime;
              }else if(para.endTime){
                para.errorText = para.endTime;
              }else if(para.place){
                para.errorText = para.place;
              }else if(para.phone){
                para.errorText = para.phone;
              }else if(para.details){
                para.errorText = para.details;
              }else if(para.abstract){
                para.errorText = para.abstract;
              }else if(para.label){
                para.errorText = para.label;
              }else if(para.ticketType){
                para.errorText = para.ticketType;
              }else if(para.refund){
                para.errorText = para.refund;
              }
              if(para.errorText){
                Dialog.alert({
                  message: para.errorText
                }).then(() => {
                  // on close
                });
                para.nStep = 'error';
              }else{
                para.nStep = 'recordModify_activity';
              }
              ++dbFlag;
              break;
            case 'recordModify_activity':
              tableName = mac.mac.tb.groupActivity;
              dbData = {};
              dbData[mac.mac.fd.id] = [$this.activityId];
              para.arr = [];
              for(let i = 0;i < para.ticketIdArr.length;i++){
                para.arr.push(0);
              }
              dbData[mac.mac.fd.groupActivity.enrollNumber] = [para.arr];
              if(type === 1){
                //点击发布，状态改为待审核
                dbData[mac.mac.fd.groupActivity.status] = [mac.mac.enum.groupActivity.status.check];
              }
              $this.sys.api.recordModify(tableName,dbData,function(){
                para.nStep = 'recordModify_ticket';
                if(++dbFlag === 2){
                  $this.checkRequiredData(type,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)})
              break;
            case 'recordModify_ticket':
              tableName = mac.mac.tb.groupActivityTicketType;
              dbData = {};
              dbData[mac.mac.fd.id] = para.ticketIdArr;
              dbData[mac.mac.fd.groupActivityTicketType.refundEndTime] = [];
              //记录各个票种在groupActivity中报名字段enrollNumber的索引
              dbData[mac.mac.fd.groupActivityTicketType.number] = [];
              for(let i = 0;i < para.ticketIdArr.length;i++){
                let refundEndTime = new Date(para.ticketStartTimeArr[i]).getTime() - para.refundDaysAgo*24*3600*1000;
                refundEndTime = new Date(refundEndTime);
                let year = refundEndTime.getFullYear(); //得到年份
                let month = refundEndTime.getMonth();//得到月份
                let date = refundEndTime.getDate();//得到日期
                let hour = refundEndTime.getHours();//得到小时
                let min = refundEndTime.getMinutes();//得到分钟
                month = month + 1;
                if (month < 10) month = "0" + month;
                if (date < 10) date = "0" + date;
                if (hour < 10) hour = "0" + hour;
                if (min < 10) min = "0" + min;
                let refundEndTimeText = year + "-" + month + "-" + date + ' ' + hour + ':' + min;
                dbData[mac.mac.fd.groupActivityTicketType.refundEndTime].push(refundEndTimeText);
                dbData[mac.mac.fd.groupActivityTicketType.number].push(i);
              }
              $this.sys.api.recordModify(tableName,dbData,function(){
                //上传数据
                let data = {
                  objectName:[mac.mac.tb.groupActivity],
                  record:[[$this.activityId]]
                };
                $this.uploadData(data,function(){
                  para.nStep = 'end';
                  if(++dbFlag === 2){
                    $this.checkRequiredData(type,successCallBack,errorCallBack);
                  }
                },function(error){console.log(error)});
              },function(error){console.log(error)})
              break;
            case 'end':
              para.successCallBack('success');
              return;
            case 'error':
              return;
            default:
              para.errorCallBack('success');
              return;
          }
          if(++dbFlag === 1){
            return
          }
        }
      },
      issueActivity:function(){
        let $this = this;
        $this.checkRequiredData(1,function(){
          $this.ep.releaseSuccessEvent($this.terminalActivityId);
          $this.showSubModule('releaseSuccess',true,function(){
            $this.sm['releaseSuccess'].startModule(function(){
            },function(error){console.log(error)});
          },function(error){console.log(error)});
        },function(error){console.log(error)});
      },
      showNewPoster:function(){
        //写文件由该方法完成，同时显示加载中的浮窗
        //刷新海报
        let $this = this;
        $this.sm['posterImg'].startModule($this.activityId,function(){
        },function(error){console.log(error)});
      },
      showNewAddress:function(){
        let $this = this;
        $this.sm['baseInfo'].addressRefresh();
      },
      showNewDescrible:function(){
        let $this = this;
        $this.sm['baseInfo'].detailRefresh();
      },
      showNewClassify:function(){
        let $this = this;
        $this.sm['baseInfo'].classifyRefresh();
      },
      showNewTicket:function(){
        let $this = this;
        $this.sm['activitySetting'].ticketTypeRefresh();
      },
      showNewForms:function(){
        let $this = this;
        $this.sm['activitySetting'].regFormRefresh();
      },
      showNewWithdraw:function(){
        let $this = this;
        $this.sm['activitySetting'].refundRefresh();
      },
      showNewManager:function(){
        let $this = this;
        $this.sm['activitySetting'].managerRefresh();
      },
      showNewBudget:function(){
        let $this = this;
        $this.sm['activitySetting'].budgetRefresh();
      },
      showNewIssueScope:function(){
        let $this = this;
        $this.sm['activitySetting'].releaseRefresh();
      },
      toDetailPage(){
        let $this = this;
        $this.hideSelfModule($this.refId,function(){
          $this.ep.detailPageEvent($this.activityId);
        },function(error){console.log(error)});
      },
      toIssueList(){
        let $this = this;
        $this.hideSelfModule($this.refId,function(){
          $this.ep.activityIssueEvent();
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
          sm1:'titleBar',
          sm2:'posterImg',
          sm3:'baseInfo',
          sm4:'activitySetting',
          sm5:'bottomFeatureBar'
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
                para.nStep = 'startModule_title';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_title':
              $this.sm[ref.sm1].startModule(function(){
                para.nStep = 'startModule_poster';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_poster':
              $this.sm[ref.sm2].startModule($this.activityId,function(){
                para.nStep = 'startModule_baseInfo';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_baseInfo':
              $this.sm[ref.sm3].startModule($this.activityId,function(){
                para.nStep = 'startModule_setting';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_setting':
              $this.sm[ref.sm4].startModule($this.activityId,function(){
                para.nStep = 'startModule_bottomBar';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_bottomBar':
              $this.sm[ref.sm5].startModule(function(){
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
      titleBar_backEvent:function(){
        this.backButtonClick();
      },
      posterImg_imageClickEvent:function(){
        this.mobileAlbum();
      },
      baseInfo_addressSetEvent:function(){
        this.addressSetMunu();
      },
      baseInfo_descriptionEditEvent:function(){
        this.descriptionEditMunu();
      },
      baseInfo_activityClassifyEvent:function(){
        this.activityClassifyMunu();
      },
      activitySetting_ticketTypeSetEvent:function(){
        this.ticketTypeSetMunu();
      },
      activitySetting_regFormSetEvent:function(){
        this.regFormSetMunu();
      },
      activitySetting_withdrawSetEvent:function(){
        this.withdrawSetMunu();
      },
      activitySetting_managerSetEvent:function(){
        this.managerSetMunu();
      },
      activitySetting_budgetSetEvent:function(){
        this.budgetSetMunu();
      },
      activitySetting_issueScopeSetEvent:function(){
        this.issueScopeSetMunu();
      },
      bottomFeatureBar_draftSaveEvent:function(){
        this.saveDraft();
      },
      bottomFeatureBar_detailPageEvent:function(){
        this.previewActivity();
      },
      bottomFeatureBar_issueEvent:function(){
        this.issueActivity();
      },
      posterEdit_confirmEvent:function(){
        this.showNewPoster();
      },
      posterEdit_reelectEvent:function(){
        this.mobileAlbum();
      },
      addressInMap_confirmEvent:function(){
        this.showNewAddress();
      },
      detailEdit_confirmEvent:function(){
        this.showNewDescrible();
      },
      classifySetting_confirmEvent:function(){
        this.showNewClassify();
      },
      ticketTypeSetting_confirmEvent:function(){
        this.showNewTicket();
      },
      regForm_confirmEvent:function(){
        this.showNewForms();
      },
      refundSetting_confirmEvent:function(){
        this.showNewWithdraw();
      },
      managerSetting_confirmEvent:function(){
        this.showNewManager();
      },
      budgetSetting_confirmEvent:function(){
        this.showNewBudget();
      },
      releaseSetting_confirmEvent:function(){
        this.showNewIssueScope();
      },
      releaseSuccess_detailPageEvent:function(){
        this.toDetailPage();
      },
      releaseSuccess_issueListEvent:function(){
        this.toIssueList();
      },
    },
  };
</script>
<style lang="less" scoped>
    @import '../../../../assets/var_sq';
  .mcbReleaseActivity_container {
  }
  .mcbReleaseActivity_row {
    display:flex;
    /*flex:1;*/
  }
  .mcbReleaseActivity_col {
    display:flex;
    flex-direction:column;
    font-family:PingFang-SC;
  }
  .mcbReleaseActivity_col_mcbReleaseActivityWindow_size_medium {
    width:@mcbReleaseActivity-mcbReleaseActivityWindow-medium-width;
    padding:@mcbReleaseActivity-mcbReleaseActivityWindow-medium-padding;
  }
  .mcbReleaseActivity_col_mcbReleaseActivityWindow {
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    z-index:1000;
    background-color:#F4F4F4;
  }
  .mcbReleaseActivity_col_r1c1_size_medium {
    width:@mcbReleaseActivity-r1c1-medium-width;
    height:@mcbReleaseActivity-r1c1-medium-height;
    padding:@mcbReleaseActivity-r1c1-medium-padding;
    align-items:@mcbReleaseActivity-r1c1-medium-horizontal-position;
  }
  .mcbReleaseActivity_col_r1c1 {
    background-color:mix(@mcbReleaseActivity-r1c1-background-color,#fff,@mcbReleaseActivity-r1c1-background-color-opacity);
    position:fixed;
    top:0;
    left:0;
    z-index:999;
  }
  .mcbReleaseActivity_row_row2{
    height:100%;
  }
  .mcbReleaseActivity_col_r2c1_size_medium {
    width:@mcbReleaseActivity-r2c1-medium-width;
    height:calc(100% - 42px);
    margin:42px 0 0 0;
  }
  .mcbReleaseActivity_col_r2c1 {
    background-color:mix(@mcbReleaseActivity-r2c1-background-color,#fff,@mcbReleaseActivity-r2c1-background-color-opacity);
    overflow-y: auto;
    overflow-x: hidden;
  }
  .mcbReleaseActivity_col_r2_1c1_size_medium {
    width:@mcbReleaseActivity-r2_1c1-medium-width;
    height:@mcbReleaseActivity-r2_1c1-medium-height;
    padding:@mcbReleaseActivity-r2_1c1-medium-padding;
    align-items:@mcbReleaseActivity-r2_1c1-medium-horizontal-position;
    justify-content:@mcbReleaseActivity-r2_1c1-medium-vertical-position;
  }
  .mcbReleaseActivity_col_r2_2c1_size_medium {
    width:@mcbReleaseActivity-r2_2c1-medium-width;
    margin:@mcbReleaseActivity-r2_2c1-medium-margin;
  }
  .mcbReleaseActivity_col_r2_3c1_size_medium {
    width:@mcbReleaseActivity-r2_3c1-medium-width;
  }
  .mcbReleaseActivity_col_r2_4c1_size_medium {
    width:@mcbReleaseActivity-r2_4c1-medium-width;
    height:@mcbReleaseActivity-r2_4c1-medium-height;
    margin:@mcbReleaseActivity-r2_4c1-medium-margin;
  }
  .mcbReleaseActivity_col_posterEditDialog_size_medium {
    width:@mcbReleaseActivity-posterEditDialog-medium-width;
    height:@mcbReleaseActivity-posterEditDialog-medium-height;
  }
  .mcbReleaseActivity_col_addressInMapDialog_size_medium {
    width:@mcbReleaseActivity-addressInMapDialog-medium-width;
    height:@mcbReleaseActivity-addressInMapDialog-medium-height;
  }
  .mcbReleaseActivity_col_detailEditDialog_size_medium {
    width:@mcbReleaseActivity-detailEditDialog-medium-width;
    height:@mcbReleaseActivity-detailEditDialog-medium-height;
  }
  .mcbReleaseActivity_col_activityClassifyDialog_size_medium {
    width:@mcbReleaseActivity-activityClassifyDialog-medium-width;
    height:@mcbReleaseActivity-activityClassifyDialog-medium-height;
  }
  .mcbReleaseActivity_col_ticketTypeDialog_size_medium {
    width:@mcbReleaseActivity-ticketTypeDialog-medium-width;
    height:@mcbReleaseActivity-ticketTypeDialog-medium-height;
  }
  .mcbReleaseActivity_col_regFormDialog_size_medium {
    width:@mcbReleaseActivity-regFormDialog-medium-width;
    height:@mcbReleaseActivity-regFormDialog-medium-height;
  }
  .mcbReleaseActivity_col_refundDialog_size_medium {
    width:@mcbReleaseActivity-refundDialog-medium-width;
    height:@mcbReleaseActivity-refundDialog-medium-height;
  }
  .mcbReleaseActivity_col_managerDialog_size_medium {
    width:@mcbReleaseActivity-managerDialog-medium-width;
    height:@mcbReleaseActivity-managerDialog-medium-height;
  }
  .mcbReleaseActivity_col_budgetDialog_size_medium {
    width:@mcbReleaseActivity-budgetDialog-medium-width;
    height:@mcbReleaseActivity-budgetDialog-medium-height;
  }
  .mcbReleaseActivity_col_releaseSettingDialog_size_medium {
    width:@mcbReleaseActivity-releaseSettingDialog-medium-width;
    height:@mcbReleaseActivity-releaseSettingDialog-medium-height;
  }
  .mcbReleaseActivity_col_releaseSuccessDialog_size_medium {
    width:@mcbReleaseActivity-releaseSuccessDialog-medium-width;
    height:@mcbReleaseActivity-releaseSuccessDialog-medium-height;
  }
  .mcbReleaseActivity_dialog {
    position:fixed;
  }
  .mcbReleaseActivity_col_r3c1{}
</style>
