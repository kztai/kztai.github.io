<template>
  <div class="mcbTicketTypeSetting1_container">
    <div class="mcbTicketTypeSetting1_row mcbTicketTypeSetting1_row_mcbTicketTypeSetting1Row">
      <div :class="{mcbTicketTypeSetting1_col:true,mcbTicketTypeSetting1_col_mcbTicketTypeSetting1Window:true,mcbTicketTypeSetting1_col_mcbTicketTypeSetting1Window_size_large:attr.size==='large',mcbTicketTypeSetting1_col_mcbTicketTypeSetting1Window_size_medium:attr.size==='medium',mcbTicketTypeSetting1_col_mcbTicketTypeSetting1Window_size_small:attr.size==='small',mcbTicketTypeSetting1_col_mcbTicketTypeSetting1Window_size_min:attr.size==='min',mcbTicketTypeSetting1_col_mcbTicketTypeSetting1Window_checked:attr.checked,mcbTicketTypeSetting1_col_mcbTicketTypeSetting1Window_disable:attr.disabled}">

        <div class="mcbTicketTypeSetting1_row mcbTicketTypeSetting1_row_row1">
          <div :class="{mcbTicketTypeSetting1_col:true,mcbTicketTypeSetting1_col_r1c1:true,mcbTicketTypeSetting1_col_r1c1_size_large:attr.size==='large',mcbTicketTypeSetting1_col_r1c1_size_medium:attr.size==='medium',mcbTicketTypeSetting1_col_r1c1_size_small:attr.size==='small',mcbTicketTypeSetting1_col_r1c1_size_min:attr.size==='min',mcbTicketTypeSetting1_col_r1c1_checked:attr.checked,mcbTicketTypeSetting1_col_r1c1_disable:attr.disabled}">

            <div class="mcbTicketTypeSetting1_row mcbTicketTypeSetting1_row_row2">
              <div :class="{mcbTicketTypeSetting1_col:true,mcbTicketTypeSetting1_col_r1_1c1:true,mcbTicketTypeSetting1_col_r1_1c1_size_large:attr.size==='large',mcbTicketTypeSetting1_col_r1_1c1_size_medium:attr.size==='medium',mcbTicketTypeSetting1_col_r1_1c1_size_small:attr.size==='small',mcbTicketTypeSetting1_col_r1_1c1_size_min:attr.size==='min',mcbTicketTypeSetting1_col_r1_1c1_checked:attr.checked,mcbTicketTypeSetting1_col_r1_1c1_disable:attr.disabled}">

                <lm2b-link-text
                        ref="backText"
                        refId="backText"
                        v-show="pvt_isShow.r1_1c1 === 'backText'"
                        :paraVarPair="pvt_r1_1c1.backText.paraVarPair"
                        :para="pvt_r1_1c1.backText.para"
                        :attr="pvt_r1_1c1.backText.attr">
                </lm2b-link-text>
              </div>
              <div :class="{mcbTicketTypeSetting1_col:true,mcbTicketTypeSetting1_col_r1_1c2:true,mcbTicketTypeSetting1_col_r1_1c2_size_large:attr.size==='large',mcbTicketTypeSetting1_col_r1_1c2_size_medium:attr.size==='medium',mcbTicketTypeSetting1_col_r1_1c2_size_small:attr.size==='small',mcbTicketTypeSetting1_col_r1_1c2_size_min:attr.size==='min',mcbTicketTypeSetting1_col_r1_1c2_checked:attr.checked,mcbTicketTypeSetting1_col_r1_1c2_disable:attr.disabled}">

                <lm2b-link-text
                        ref="titleText"
                        refId="titleText"
                        v-show="pvt_isShow.r1_1c2 === 'titleText'"
                        :paraVarPair="pvt_r1_1c2.titleText.paraVarPair"
                        :para="pvt_r1_1c2.titleText.para"
                        :attr="pvt_r1_1c2.titleText.attr">
                </lm2b-link-text>
              </div>
              <div :class="{mcbTicketTypeSetting1_col:true,mcbTicketTypeSetting1_col_r1_1c3:true,mcbTicketTypeSetting1_col_r1_1c3_size_large:attr.size==='large',mcbTicketTypeSetting1_col_r1_1c3_size_medium:attr.size==='medium',mcbTicketTypeSetting1_col_r1_1c3_size_small:attr.size==='small',mcbTicketTypeSetting1_col_r1_1c3_size_min:attr.size==='min',mcbTicketTypeSetting1_col_r1_1c3_checked:attr.checked,mcbTicketTypeSetting1_col_r1_1c3_disable:attr.disabled}">

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
        <div class="mcbTicketTypeSetting1_row mcbTicketTypeSetting1_row_row3">
          <div :class="{mcbTicketTypeSetting1_col:true,mcbTicketTypeSetting1_col_r2c1:true,mcbTicketTypeSetting1_col_r2c1_size_large:attr.size==='large',mcbTicketTypeSetting1_col_r2c1_size_medium:attr.size==='medium',mcbTicketTypeSetting1_col_r2c1_size_small:attr.size==='small',mcbTicketTypeSetting1_col_r2c1_size_min:attr.size==='min',mcbTicketTypeSetting1_col_r2c1_checked:attr.checked,mcbTicketTypeSetting1_col_r2c1_disable:attr.disabled}">
            <mcb-ticket-type-row
                    ref="ticketTypeRow"
                    refId="ticketTypeRow"
                    v-show="pvt_isShow.r2c1 === 'ticketTypeRow'"
                    :paraVarPair="pvt_r2c1.ticketTypeRow.paraVarPair"
                    v-for="(item, index) in pvt_r2c1.ticketTypeRow.forData"
                    :number="index"
                    :para="item.para"
                    :attr="item.attr">
            </mcb-ticket-type-row>
          </div>
        </div>
        <div class="mcbTicketTypeSetting1_row mcbTicketTypeSetting1_row_row4">
          <div :class="{mcbTicketTypeSetting1_col:true,mcbTicketTypeSetting1_col_r3c1:true,mcbTicketTypeSetting1_col_r3c1_size_large:attr.size==='large',mcbTicketTypeSetting1_col_r3c1_size_medium:attr.size==='medium',mcbTicketTypeSetting1_col_r3c1_size_small:attr.size==='small',mcbTicketTypeSetting1_col_r3c1_size_min:attr.size==='min',mcbTicketTypeSetting1_col_r3c1_checked:attr.checked,mcbTicketTypeSetting1_col_r3c1_disable:attr.disabled}">

            <lm2b-link-text
                    ref="addTicketText"
                    refId="addTicketText"
                    v-show="pvt_isShow.r3c1 === 'addTicketText'"
                    :paraVarPair="pvt_r3c1.addTicketText.paraVarPair"
                    :para="pvt_r3c1.addTicketText.para"
                    :attr="pvt_r3c1.addTicketText.attr">
            </lm2b-link-text>
          </div>
        </div>
      </div>
    </div>
    <div class="mcbTicketTypeSetting1_row mcbTicketTypeSetting1_row_row5">
      <div class="mcbTicketTypeSetting1_col mcbTicketTypeSetting1_col_r5c1">
        <mcb-add-ticket-dia
                ref="addTicketDia"
                refId="addTicketDia"
                v-show="pvt_isShow.r4c1 === 'addTicketDia'"
                :paraVarPair="pvt_r4c1.addTicketDia.paraVarPair"
                :para="pvt_r4c1.addTicketDia.para"
                :attr="pvt_r4c1.addTicketDia.attr">
        </mcb-add-ticket-dia>
        <confirm-dialog
                ref="saveDataDia"
                refId="saveDataDia"
                v-show="pvt_isShow.r4c1 === 'saveDataDia'"
                :paraVarPair="pvt_r4c1.saveDataDia.paraVarPair"
                :para="pvt_r4c1.saveDataDia.para"
                :attr="pvt_r4c1.saveDataDia.attr">
        </confirm-dialog>
      </div>
    </div>
  </div>
</template>
<script>
  import libSys from '@/components/baseComponent/libSys.js';
  import libUpload from '@/components/baseComponent/libUpload.js';
  import { Dialog } from 'vant';
  import mcbTicketTypeRow from './ticketRow.vue';
  import mcbAddTicketDia from './addTicketType.vue';
  import confirmDialog from '../../confirmDialog.vue';
  export default {
    components: {mcbTicketTypeRow,mcbAddTicketDia,confirmDialog},
    inject: ['sys'],
    props: ['refId','para','attr','number'],
    data: function() {
      return {
        pvt_subModuleMap: {
          vessel:['r1_1c1','r1_1c2','r1_1c3','r2c1','r3c1','r4c1','r4c1'],
          subModule:['backText','titleText','finishButton','ticketTypeRow','addTicketText','addTicketDia','saveDataDia'],
        },
        pvt_isShow: {
          r1_1c1:null,
          r1_1c2:null,
          r1_1c3:null,
          r2c1:null,
          r3c1:null,
          r4c1:null,
        },
        pvt_eventPortInput: ['confirmEvent'],
        activityId:null,
        ticketArr:[],
        ticketNameArr:[],
        ticketPriceArr:[],
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
              textData:'活动票种设置',
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
          ticketTypeRow:{
            para:{
              ticketName:this.ticketNameArr,
              ticketPrice:this.ticketPriceArr,
            },
            attr:{
              size:this.sizeArr,
            },
          },
        };
        let forData = this.pvt_createForData(loopModule);
        return {
          ticketTypeRow:{
            paraVarPair:{
              ticketName:'ticketNameArr',
              ticketPrice:'ticketPriceArr',
            },
            forData: forData.ticketTypeRow,
          },
        };
      },
      pvt_r3c1:function(){
        return {
          addTicketText:{
            paraVarPair:{
            },
            para:{
              textData:'添加票种',
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'center',
              height:'44px',
              color:'#333333',
              fontSize:'14px',
              background:'transparent',
              icon:'van-icon-plus',
              iconIsRight:false,
            },
          },
        };
      },
      pvt_r4c1:function(){
        return {
          addTicketDia:{
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
      pvt_addTicketDia:function(){
        return {
          addTicketDia:{
            paraVarPair:{
            },
            para:{
            },
            attr:{
              size:'meidum',
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
      startModule(data1,successCallBack,errorCallBack){
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
              $this.ticketArr = [];
              $this.ticketNameArr = [];
              $this.ticketPriceArr = [];
              $this.sizeArr = [];
              $this.deleteIdArr = [];
              if(data1){
                $this.activityId = data1;
              }
              tableName = mac.mac.tb.groupActivityTicketType;
              parentRecord = [$this.activityId];
              condition = null;
              dbData = {};
              dbData[mac.mac.fd.id] = [];
              dbData[mac.mac.fd.groupActivityTicketType.name] = [];
              dbData[mac.mac.fd.groupActivityTicketType.explain] = [];
              dbData[mac.mac.fd.groupActivityTicketType.price] = [];
              dbData[mac.mac.fd.groupActivityTicketType.poll] = [];
              dbData[mac.mac.fd.groupActivityTicketType.minNumber] = [];
              dbData[mac.mac.fd.groupActivityTicketType.maxNumber] = [];
              dbData[mac.mac.fd.groupActivityTicketType.approval] = [];
              dbData[mac.mac.fd.groupActivityTicketType.startTime] = [];
              dbData[mac.mac.fd.groupActivityTicketType.endTime] = [];
              dbData[mac.mac.fd.groupActivityTicketType.saleStartTime] = [];
              dbData[mac.mac.fd.groupActivityTicketType.saleEndTime] = [];
              $this.sys.api.recordQuery(tableName,parentRecord,condition,dbData,function(){
                if(dbData[mac.mac.fd.id].length > 0){
                  for(let i = 0;i < dbData[mac.mac.fd.id].length;i++){
                    $this.ticketArr.push({
                      id:dbData[mac.mac.fd.id][i],
                      index:i,
                      ticketName:dbData[mac.mac.fd.groupActivityTicketType.name][i],
                      ticketPrice:dbData[mac.mac.fd.groupActivityTicketType.price][i],
                      ticketNumber:dbData[mac.mac.fd.groupActivityTicketType.poll][i],
                      approval:dbData[mac.mac.fd.groupActivityTicketType.approval][i],
                      minNumber:dbData[mac.mac.fd.groupActivityTicketType.minNumber][i],
                      maxNumber:dbData[mac.mac.fd.groupActivityTicketType.maxNumber][i],
                      startTime:new Date(dbData[mac.mac.fd.groupActivityTicketType.startTime][i]).getTime(),
                      endTime:new Date(dbData[mac.mac.fd.groupActivityTicketType.endTime][i]).getTime(),
                      saleType:dbData[mac.mac.fd.groupActivityTicketType.saleStartTime][i]?1:0,
                      saleStartTime:dbData[mac.mac.fd.groupActivityTicketType.saleStartTime][i]?new Date(dbData[mac.mac.fd.groupActivityTicketType.saleStartTime][i]).getTime():null,
                      saleEndTime:new Date(dbData[mac.mac.fd.groupActivityTicketType.saleEndTime][i]).getTime(),
                      explain:dbData[mac.mac.fd.groupActivityTicketType.explain][i]
                    });
                    $this.ticketNameArr.push(dbData[mac.mac.fd.groupActivityTicketType.name][i]);
                    $this.ticketPriceArr.push(dbData[mac.mac.fd.groupActivityTicketType.price][i]);
                    $this.sizeArr.push('medium');
                  }
                }
                para.nStep = 'getActivityTime';
                if(++dbFlag === 2){
                  $this.startModule(data1,successCallBack,errorCallBack);
                }
              },para.errorCallBack)
              break;
            case 'getActivityTime':
              $this.activityTimeArr = [null,null];
              tableName = mac.mac.tb.groupActivity;
              dbData = {};
              dbData[mac.mac.fd.id] = [$this.activityId];
              dbData[mac.mac.fd.groupActivity.startTime] = [];
              dbData[mac.mac.fd.groupActivity.endTime] = [];
              $this.sys.api.recordRead(tableName,dbData,function(){
                $this.activityTimeArr = [
                  new Date(dbData[mac.mac.fd.groupActivity.startTime][0]).getTime(),
                  new Date(dbData[mac.mac.fd.groupActivity.endTime][0]).getTime()
                ];
                para.nStep = 'showModules';
                if(++dbFlag === 2){
                  $this.startModule(data1,successCallBack,errorCallBack);
                }
              },para.errorCallBack)
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                'backText','titleText','finishButton','ticketTypeRow','addTicketText'
              ];
              $this.showSubModule(refId,true,function(){
                para.nStep = 'startSubModules';
                if(++dbFlag === 2){
                  $this.startModule(data1,successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startSubModules':
              //调用子组件startModule方法
              $this.startSubModules(function(){
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.startModule(data1,successCallBack,errorCallBack);
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
            title:'是否保存修改后的票种信息?',
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
                tableName = mac.mac.tb.groupActivityTicketType;
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
              tableName = mac.mac.tb.groupActivityTicketType;
              dbData = {};
              dbData[mac.mac.fd.id] = [];
              dbData[mac.mac.fd.groupActivityTicketType.name] = [];
              dbData[mac.mac.fd.groupActivityTicketType.explain] = [];
              dbData[mac.mac.fd.groupActivityTicketType.price] = [];
              dbData[mac.mac.fd.groupActivityTicketType.poll] = [];
              dbData[mac.mac.fd.groupActivityTicketType.minNumber] = [];
              dbData[mac.mac.fd.groupActivityTicketType.maxNumber] = [];
              dbData[mac.mac.fd.groupActivityTicketType.approval] = [];
              dbData[mac.mac.fd.groupActivityTicketType.startTime] = [];
              dbData[mac.mac.fd.groupActivityTicketType.endTime] = [];
              dbData[mac.mac.fd.groupActivityTicketType.saleStartTime] = [];
              dbData[mac.mac.fd.groupActivityTicketType.saleEndTime] = [];
              for(let i = 0;i < $this.ticketArr.length;i++){
                if($this.ticketArr[i].id){
                  dbData[mac.mac.fd.id].push($this.ticketArr[i].id);
                  dbData[mac.mac.fd.groupActivityTicketType.name].push($this.ticketArr[i].ticketName);
                  dbData[mac.mac.fd.groupActivityTicketType.explain].push($this.ticketArr[i].explain);
                  dbData[mac.mac.fd.groupActivityTicketType.price].push($this.ticketArr[i].ticketPrice);
                  dbData[mac.mac.fd.groupActivityTicketType.poll].push($this.ticketArr[i].ticketNumber);
                  dbData[mac.mac.fd.groupActivityTicketType.minNumber].push($this.ticketArr[i].minNumber);
                  dbData[mac.mac.fd.groupActivityTicketType.maxNumber].push($this.ticketArr[i].maxNumber);
                  dbData[mac.mac.fd.groupActivityTicketType.approval].push($this.ticketArr[i].approval);
                  let startTime = new Date($this.ticketArr[i].startTime);
                  let endTime = new Date($this.ticketArr[i].endTime);
                  let saleStartTime = new Date($this.ticketArr[i].saleStartTime);
                  let saleEndTime = new Date($this.ticketArr[i].saleEndTime);
                  let year1 = startTime.getFullYear();
                  let month1 = startTime.getMonth();
                  let date1 = startTime.getDate();
                  let hour1 = startTime.getHours();
                  let min1 = startTime.getMinutes();
                  month1 = month1 + 1;
                  if (month1 < 10) month1 = "0" + month1;
                  if (date1 < 10) date1 = "0" + date1;
                  if (hour1 < 10) hour1 = "0" + hour1;
                  if (min1 < 10) min1 = "0" + min1;
                  startTime = year1 + "-" + month1 + "-" + date1 + ' ' + hour1 + ':' + min1;
                  let year2 = endTime.getFullYear();
                  let month2 = endTime.getMonth();
                  let date2 = endTime.getDate();
                  let hour2 = endTime.getHours();
                  let min2 = endTime.getMinutes();
                  month2 = month2 + 1;
                  if (month2 < 10) month2 = "0" + month2;
                  if (date2 < 10) date2 = "0" + date2;
                  if (hour2 < 10) hour2 = "0" + hour2;
                  if (min2 < 10) min2 = "0" + min2;
                  endTime = year2 + "-" + month2 + "-" + date2 + ' ' + hour2 + ':' + min2;
                  if($this.ticketArr[i].saleStartTime){
                    let year3 = saleStartTime.getFullYear();
                    let month3 = saleStartTime.getMonth();
                    let date3 = saleStartTime.getDate();
                    let hour3 = saleStartTime.getHours();
                    let min3 = saleStartTime.getMinutes();
                    month3 = month3 + 1;
                    if (month3 < 10) month3 = "0" + month3;
                    if (date3 < 10) date3 = "0" + date3;
                    if (hour3 < 10) hour3 = "0" + hour3;
                    if (min3 < 10) min3 = "0" + min3;
                    saleStartTime = year3 + "-" + month3 + "-" + date3 + ' ' + hour3 + ':' + min3;
                  }else{
                    saleStartTime = null;
                  }
                  let year4 = saleEndTime.getFullYear();
                  let month4 = saleEndTime.getMonth();
                  let date4 = saleEndTime.getDate();
                  let hour4 = saleEndTime.getHours();
                  let min4 = saleEndTime.getMinutes();
                  month4 = month4 + 1;
                  if (month4 < 10) month4 = "0" + month4;
                  if (date4 < 10) date4 = "0" + date4;
                  if (hour4 < 10) hour4 = "0" + hour4;
                  if (min4 < 10) min4 = "0" + min4;
                  saleEndTime = year4 + "-" + month4 + "-" + date4 + ' ' + hour4 + ':' + min4;
                  dbData[mac.mac.fd.groupActivityTicketType.startTime].push(startTime);
                  dbData[mac.mac.fd.groupActivityTicketType.endTime].push(endTime);
                  dbData[mac.mac.fd.groupActivityTicketType.saleStartTime].push(saleStartTime);
                  dbData[mac.mac.fd.groupActivityTicketType.saleEndTime].push(saleEndTime);
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
              tableName = mac.mac.tb.groupActivityTicketType;
              parentRecord = $this.activityId;
              dbData = {};
              dbData[mac.mac.fd.groupActivityTicketType.name] = [];
              dbData[mac.mac.fd.groupActivityTicketType.explain] = [];
              dbData[mac.mac.fd.groupActivityTicketType.price] = [];
              dbData[mac.mac.fd.groupActivityTicketType.poll] = [];
              dbData[mac.mac.fd.groupActivityTicketType.minNumber] = [];
              dbData[mac.mac.fd.groupActivityTicketType.maxNumber] = [];
              dbData[mac.mac.fd.groupActivityTicketType.approval] = [];
              dbData[mac.mac.fd.groupActivityTicketType.startTime] = [];
              dbData[mac.mac.fd.groupActivityTicketType.endTime] = [];
              dbData[mac.mac.fd.groupActivityTicketType.saleStartTime] = [];
              dbData[mac.mac.fd.groupActivityTicketType.saleEndTime] = [];
              for(let i = 0;i < $this.ticketArr.length;i++){
                if(!$this.ticketArr[i].id){
                  dbData[mac.mac.fd.groupActivityTicketType.name].push($this.ticketArr[i].ticketName);
                  dbData[mac.mac.fd.groupActivityTicketType.explain].push($this.ticketArr[i].explain);
                  dbData[mac.mac.fd.groupActivityTicketType.price].push($this.ticketArr[i].ticketPrice);
                  dbData[mac.mac.fd.groupActivityTicketType.poll].push($this.ticketArr[i].ticketNumber);
                  dbData[mac.mac.fd.groupActivityTicketType.minNumber].push($this.ticketArr[i].minNumber);
                  dbData[mac.mac.fd.groupActivityTicketType.maxNumber].push($this.ticketArr[i].maxNumber);
                  dbData[mac.mac.fd.groupActivityTicketType.approval].push($this.ticketArr[i].approval);
                  let startTime = new Date($this.ticketArr[i].startTime);
                  let endTime = new Date($this.ticketArr[i].endTime);
                  let saleStartTime = new Date($this.ticketArr[i].saleStartTime);
                  let saleEndTime = new Date($this.ticketArr[i].saleEndTime);
                  let year1 = startTime.getFullYear();
                  let month1 = startTime.getMonth();
                  let date1 = startTime.getDate();
                  let hour1 = startTime.getHours();
                  let min1 = startTime.getMinutes();
                  month1 = month1 + 1;
                  if (month1 < 10) month1 = "0" + month1;
                  if (date1 < 10) date1 = "0" + date1;
                  if (hour1 < 10) hour1 = "0" + hour1;
                  if (min1 < 10) min1 = "0" + min1;
                  startTime = year1 + "-" + month1 + "-" + date1 + ' ' + hour1 + ':' + min1;
                  let year2 = endTime.getFullYear();
                  let month2 = endTime.getMonth();
                  let date2 = endTime.getDate();
                  let hour2 = endTime.getHours();
                  let min2 = endTime.getMinutes();
                  month2 = month2 + 1;
                  if (month2 < 10) month2 = "0" + month2;
                  if (date2 < 10) date2 = "0" + date2;
                  if (hour2 < 10) hour2 = "0" + hour2;
                  if (min2 < 10) min2 = "0" + min2;
                  endTime = year2 + "-" + month2 + "-" + date2 + ' ' + hour2 + ':' + min2;
                  if($this.ticketArr[i].saleStartTime){
                    let year3 = saleStartTime.getFullYear();
                    let month3 = saleStartTime.getMonth();
                    let date3 = saleStartTime.getDate();
                    let hour3 = saleStartTime.getHours();
                    let min3 = saleStartTime.getMinutes();
                    month3 = month3 + 1;
                    if (month3 < 10) month3 = "0" + month3;
                    if (date3 < 10) date3 = "0" + date3;
                    if (hour3 < 10) hour3 = "0" + hour3;
                    if (min3 < 10) min3 = "0" + min3;
                    saleStartTime = year3 + "-" + month3 + "-" + date3 + ' ' + hour3 + ':' + min3;
                  }else{
                    saleStartTime = null;
                  }
                  let year4 = saleEndTime.getFullYear();
                  let month4 = saleEndTime.getMonth();
                  let date4 = saleEndTime.getDate();
                  let hour4 = saleEndTime.getHours();
                  let min4 = saleEndTime.getMinutes();
                  month4 = month4 + 1;
                  if (month4 < 10) month4 = "0" + month4;
                  if (date4 < 10) date4 = "0" + date4;
                  if (hour4 < 10) hour4 = "0" + hour4;
                  if (min4 < 10) min4 = "0" + min4;
                  saleEndTime = year4 + "-" + month4 + "-" + date4 + ' ' + hour4 + ':' + min4;
                  dbData[mac.mac.fd.groupActivityTicketType.startTime].push(startTime);
                  dbData[mac.mac.fd.groupActivityTicketType.endTime].push(endTime);
                  dbData[mac.mac.fd.groupActivityTicketType.saleStartTime].push(saleStartTime);
                  dbData[mac.mac.fd.groupActivityTicketType.saleEndTime].push(saleEndTime);
                }
              }
              if(dbData[mac.mac.fd.groupActivityTicketType.name].length > 0){
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
      deleteTicket:function(data1){
        //至少留有一种票
        let $this = this;
        if($this.ticketArr.length <= 1){
          Dialog.alert({
            message: '至少有一个票种'
          }).then(() => {
            // on close
          });
        }else{
          if($this.ticketArr[data1].id){
            if(!$this.deleteIdArr.includes($this.ticketArr[data1].id)){
              $this.deleteIdArr.push($this.ticketArr[data1].id);
            }
          }
          $this.ticketArr.splice(data1,1);
          $this.ticketNameArr.splice(data1,1);
          $this.ticketPriceArr.splice(data1,1);
          $this.sizeArr.splice(data1,1);
          for(let i = 0;i < $this.ticketArr.length;i++){
            $this.ticketArr[i].index = i;
          }
          //刷新显示
          $this.forceUpdateData(function(){
            //循环组件
            let arr = [];
            for(let i = 0;i < $this.ticketNameArr.length;i++){
              arr.push([function(){},function(error){console.log(error)}]);
            }
            $this.callLoopModuleMethod('ticketTypeRow','startModule',arr,function(){
            },function(error){console.log(error)});
          });
        }
      },
      showAddDialog:function(data1){
        //编辑票种
        let $this = this;
        $this.showSubModule('addTicketDia',true,function(){
          let obj = $this.ticketArr[data1];
          $this.sm['addTicketDia'].startModule(obj,$this.activityTimeArr,$this.ticketNameArr,function(){
          },function(error){console.log(error)});
        },function(error){console.log(error)});
      },
      addNewTicket:function(data1){
        let $this = this;
        if(data1.index || data1.index === 0){
          $this.ticketArr[data1.index] = data1;
        }else{
          $this.ticketArr.push(data1);
        }
        $this.ticketNameArr = [];
        $this.ticketPriceArr = [];
        $this.sizeArr = [];
        for(let i = 0;i < $this.ticketArr.length;i++){
          $this.ticketArr[i].index = i;
          $this.ticketNameArr.push($this.ticketArr[i].ticketName);
          $this.ticketPriceArr.push($this.ticketArr[i].ticketPrice);
          $this.sizeArr.push('medium');
        }
        //刷新显示
        $this.forceUpdateData(function(){
          //循环组件
          let arr = [];
          for(let i = 0;i < $this.ticketNameArr.length;i++){
            arr.push([function(){},function(error){console.log(error)}]);
          }
          $this.callLoopModuleMethod('ticketTypeRow','startModule',arr,function(){
          },function(error){console.log(error)});
        });
      },
      hideModule:function(data1){
        let $this = this;
        $this.hideSelfModule($this.refId,function(){
        },function(error){console.log(error)});
      },
      saveData:function(refId){
        this.finishButtonClick();
      },
      addTicketType:function(){
        //添加票种
        let $this = this;
        $this.showSubModule('addTicketDia',true,function(){
          let obj = null;
          $this.sm['addTicketDia'].startModule(obj,$this.activityTimeArr,$this.ticketNameArr,function(){
          },function(error){console.log(error)});
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
          sm4:'ticketTypeRow',
          sm5:'addTicketText'
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
                para.nStep = 'startModule_ticketTypeRow';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_ticketTypeRow':
              //循环组件
              let arr = [];
              for(let i = 0;i < $this.ticketNameArr.length;i++){
                arr.push([function(){},function(error){console.log(error)}]);
              }
              $this.callLoopModuleMethod(ref.sm4,'startModule',arr,function(){
                para.nStep = 'startModule_addTicketText';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_addTicketText':
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
      backText_textClickEvent:function(){
        this.showSaveDialog();
      },
      finishButton_buttonClickEvent:function(){
        this.finishButtonClick();
      },
      ticketTypeRow_deleteTicketEvent:function(data1){
        this.deleteTicket(data1);
      },
      ticketTypeRow_ticketClickEvent:function(data1){
        this.showAddDialog(data1);
      },
      addTicketText_textClickEvent:function(){
        this.addTicketType();
      },
      addTicketDia_confirmEvent:function(data1){
        this.addNewTicket(data1);
      },
      saveDataDia_cancelEvent:function(refId){
        this.hideModule(refId);
      },
      saveDataDia_confirmEvent:function(refId){
        this.saveData(refId);
      },
    },
  };
</script>
<style lang="less" scoped>
    @import '../../../../../../assets/var_sq';
  .mcbTicketTypeSetting1_container {
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    z-index:1000;
  }
  .mcbTicketTypeSetting1_row {
    display:flex;
    /*flex:1;*/
  }
  .mcbTicketTypeSetting1_row_mcbTicketTypeSetting1Row{
    width:100%;
    height:100%;
  }
  .mcbTicketTypeSetting1_col {
    display:flex;
    flex-direction:column;
  }
  .mcbTicketTypeSetting1_col_mcbTicketTypeSetting1Window_size_medium {
    width:@mcbTicketTypeSetting1-mcbTicketTypeSetting1Window-medium-width;
    height:@mcbTicketTypeSetting1-mcbTicketTypeSetting1Window-medium-height;
  }
  .mcbTicketTypeSetting1_col_mcbTicketTypeSetting1Window {
    background-color:mix(@mcbTicketTypeSetting1-mcbTicketTypeSetting1Window-background-color,#fff,@mcbTicketTypeSetting1-mcbTicketTypeSetting1Window-background-color-opacity);
  }
  .mcbTicketTypeSetting1_col_r1c1_size_medium {
    width:@mcbTicketTypeSetting1-r1c1-medium-width;
    height:@mcbTicketTypeSetting1-r1c1-medium-height;
    padding:@mcbTicketTypeSetting1-r1c1-medium-padding;
  }
  .mcbTicketTypeSetting1_col_r1c1 {
    background-color:mix(@mcbTicketTypeSetting1-r1c1-background-color,#fff,@mcbTicketTypeSetting1-r1c1-background-color-opacity);
    position:fixed;
    top: 0;
    left:0;
    box-sizing:border-box;
  }
  .mcbTicketTypeSetting1_col_r1_1c1_size_medium {
    width:@mcbTicketTypeSetting1-r1_1c1-medium-width;
    height:@mcbTicketTypeSetting1-r1_1c1-medium-height;
  }
  .mcbTicketTypeSetting1_col_r1_1c2_size_medium {
    width:@mcbTicketTypeSetting1-r1_1c2-medium-width;
    height:@mcbTicketTypeSetting1-r1_1c2-medium-height;
  }
  .mcbTicketTypeSetting1_col_r1_1c3_size_medium {
    width:@mcbTicketTypeSetting1-r1_1c3-medium-width;
    height:@mcbTicketTypeSetting1-r1_1c3-medium-height;
    padding:4px 0 0 0;
    align-items:flex-end;
  }
  .mcbTicketTypeSetting1_col_r2c1_size_medium {
    width:@mcbTicketTypeSetting1-r2c1-medium-width;
    margin:@mcbTicketTypeSetting1-r2c1-medium-margin;
  }
  .mcbTicketTypeSetting1_col_r3c1_size_medium {
    width:@mcbTicketTypeSetting1-r3c1-medium-width;
    height:@mcbTicketTypeSetting1-r3c1-medium-height;
    margin:@mcbTicketTypeSetting1-r3c1-medium-margin;
  }
  .mcbTicketTypeSetting1_col_r3c1 {
    border-width:@mcbTicketTypeSetting1-r3c1-border-width;
    border-radius:@mcbTicketTypeSetting1-r3c1-border-radius;
    position:fixed;
    bottom: 0;
    left:0;
    background:#fff;
  }
  .mcbTicketTypeSetting1_col_addTicketDia_size_medium {
    width:@mcbTicketTypeSetting1-addTicketDia-medium-width;
    height:@mcbTicketTypeSetting1-addTicketDia-medium-height;
  }
  .mcbTicketTypeSetting1_col_saveDataDia_size_medium {
    width:@mcbTicketTypeSetting1-saveDataDia-medium-width;
    height:@mcbTicketTypeSetting1-saveDataDia-medium-height;
  }
  .mcbTicketTypeSetting1_dialog {
    position:fixed;
  }
</style>
