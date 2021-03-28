<template>
  <div class="addTicketDia_container">
    <div class="addTicketDia_row addTicketDia_row_addTicketDiaRow">
      <div :class="{addTicketDia_col:true,addTicketDia_col_addTicketDiaWindow:true,addTicketDia_col_addTicketDiaWindow_size_large:attr.size==='large',addTicketDia_col_addTicketDiaWindow_size_medium:attr.size==='medium',addTicketDia_col_addTicketDiaWindow_size_small:attr.size==='small',addTicketDia_col_addTicketDiaWindow_size_min:attr.size==='min',addTicketDia_col_addTicketDiaWindow_checked:attr.checked,addTicketDia_col_addTicketDiaWindow_disable:attr.disabled}">

        <div class="addTicketDia_row addTicketDia_row_row1">
          <div :class="{addTicketDia_col:true,addTicketDia_col_r1c1:true,addTicketDia_col_r1c1_size_large:attr.size==='large',addTicketDia_col_r1c1_size_medium:attr.size==='medium',addTicketDia_col_r1c1_size_small:attr.size==='small',addTicketDia_col_r1c1_size_min:attr.size==='min',addTicketDia_col_r1c1_checked:attr.checked,addTicketDia_col_r1c1_disable:attr.disabled}">

            <div class="addTicketDia_row addTicketDia_row_row2">
              <div :class="{addTicketDia_col:true,addTicketDia_col_r1_1c1:true,addTicketDia_col_r1_1c1_size_large:attr.size==='large',addTicketDia_col_r1_1c1_size_medium:attr.size==='medium',addTicketDia_col_r1_1c1_size_small:attr.size==='small',addTicketDia_col_r1_1c1_size_min:attr.size==='min',addTicketDia_col_r1_1c1_checked:attr.checked,addTicketDia_col_r1_1c1_disable:attr.disabled}">

                <lm2b-link-text
                        ref="backText"
                        refId="backText"
                        v-show="pvt_isShow.r1_1c1 === 'backText'"
                        :paraVarPair="pvt_r1_1c1.backText.paraVarPair"
                        :para="pvt_r1_1c1.backText.para"
                        :attr="pvt_r1_1c1.backText.attr">
                </lm2b-link-text>
              </div>
              <div :class="{addTicketDia_col:true,addTicketDia_col_r1_1c2:true,addTicketDia_col_r1_1c2_size_large:attr.size==='large',addTicketDia_col_r1_1c2_size_medium:attr.size==='medium',addTicketDia_col_r1_1c2_size_small:attr.size==='small',addTicketDia_col_r1_1c2_size_min:attr.size==='min',addTicketDia_col_r1_1c2_checked:attr.checked,addTicketDia_col_r1_1c2_disable:attr.disabled}">

                <lm2b-link-text
                        ref="titleText"
                        refId="titleText"
                        v-show="pvt_isShow.r1_1c2 === 'titleText'"
                        :paraVarPair="pvt_r1_1c2.titleText.paraVarPair"
                        :para="pvt_r1_1c2.titleText.para"
                        :attr="pvt_r1_1c2.titleText.attr">
                </lm2b-link-text>
              </div>
              <div :class="{addTicketDia_col:true,addTicketDia_col_r1_1c3:true,addTicketDia_col_r1_1c3_size_large:attr.size==='large',addTicketDia_col_r1_1c3_size_medium:attr.size==='medium',addTicketDia_col_r1_1c3_size_small:attr.size==='small',addTicketDia_col_r1_1c3_size_min:attr.size==='min',addTicketDia_col_r1_1c3_checked:attr.checked,addTicketDia_col_r1_1c3_disable:attr.disabled}">

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
        <div class="addTicketDia_row addTicketDia_row_row3">
          <div :class="{addTicketDia_col:true,addTicketDia_col_r2c1:true,addTicketDia_col_r2c1_size_large:attr.size==='large',addTicketDia_col_r2c1_size_medium:attr.size==='medium',addTicketDia_col_r2c1_size_small:attr.size==='small',addTicketDia_col_r2c1_size_min:attr.size==='min',addTicketDia_col_r2c1_checked:attr.checked,addTicketDia_col_r2c1_disable:attr.disabled}">

            <div class="addTicketDia_row addTicketDia_row_row4">
              <div :class="{addTicketDia_col:true,addTicketDia_col_r2_1c1:true,addTicketDia_col_r2_1c1_size_large:attr.size==='large',addTicketDia_col_r2_1c1_size_medium:attr.size==='medium',addTicketDia_col_r2_1c1_size_small:attr.size==='small',addTicketDia_col_r2_1c1_size_min:attr.size==='min',addTicketDia_col_r2_1c1_checked:attr.checked,addTicketDia_col_r2_1c1_disable:attr.disabled}">

                <lm2b-link-text
                        ref="nameLabel"
                        refId="nameLabel"
                        v-show="pvt_isShow.r2_1c1 === 'nameLabel'"
                        :paraVarPair="pvt_r2_1c1.nameLabel.paraVarPair"
                        :para="pvt_r2_1c1.nameLabel.para"
                        :attr="pvt_r2_1c1.nameLabel.attr">
                </lm2b-link-text>
              </div>
              <div :class="{addTicketDia_col:true,addTicketDia_col_r2_1c2:true,addTicketDia_col_r2_1c2_size_large:attr.size==='large',addTicketDia_col_r2_1c2_size_medium:attr.size==='medium',addTicketDia_col_r2_1c2_size_small:attr.size==='small',addTicketDia_col_r2_1c2_size_min:attr.size==='min',addTicketDia_col_r2_1c2_checked:attr.checked,addTicketDia_col_r2_1c2_disable:attr.disabled}">

                <lm2b-input-text
                        ref="nameInput"
                        refId="nameInput"
                        v-show="pvt_isShow.r2_1c2 === 'nameInput'"
                        :paraVarPair="pvt_r2_1c2.nameInput.paraVarPair"
                        :para="pvt_r2_1c2.nameInput.para"
                        :attr="pvt_r2_1c2.nameInput.attr">
                </lm2b-input-text>
              </div>
            </div>
            <div class="addTicketDia_row addTicketDia_row_row5">
              <div :class="{addTicketDia_col:true,addTicketDia_col_r2_2c1:true,addTicketDia_col_r2_2c1_size_large:attr.size==='large',addTicketDia_col_r2_2c1_size_medium:attr.size==='medium',addTicketDia_col_r2_2c1_size_small:attr.size==='small',addTicketDia_col_r2_2c1_size_min:attr.size==='min',addTicketDia_col_r2_2c1_checked:attr.checked,addTicketDia_col_r2_2c1_disable:attr.disabled}">

                <lm2b-link-text
                        ref="priceLabel"
                        refId="priceLabel"
                        v-show="pvt_isShow.r2_2c1 === 'priceLabel'"
                        :paraVarPair="pvt_r2_2c1.priceLabel.paraVarPair"
                        :para="pvt_r2_2c1.priceLabel.para"
                        :attr="pvt_r2_2c1.priceLabel.attr">
                </lm2b-link-text>
              </div>
              <div :class="{addTicketDia_col:true,addTicketDia_col_r2_2c2:true,addTicketDia_col_r2_2c2_size_large:attr.size==='large',addTicketDia_col_r2_2c2_size_medium:attr.size==='medium',addTicketDia_col_r2_2c2_size_small:attr.size==='small',addTicketDia_col_r2_2c2_size_min:attr.size==='min',addTicketDia_col_r2_2c2_checked:attr.checked,addTicketDia_col_r2_2c2_disable:attr.disabled}">

                <lm2b-input-text
                        ref="priceInput"
                        refId="priceInput"
                        v-show="pvt_isShow.r2_2c2 === 'priceInput'"
                        :paraVarPair="pvt_r2_2c2.priceInput.paraVarPair"
                        :para="pvt_r2_2c2.priceInput.para"
                        :attr="pvt_r2_2c2.priceInput.attr">
                </lm2b-input-text>
              </div>
            </div>
            <div class="addTicketDia_row addTicketDia_row_row6">
              <div :class="{addTicketDia_col:true,addTicketDia_col_r2_3c1:true,addTicketDia_col_r2_3c1_size_large:attr.size==='large',addTicketDia_col_r2_3c1_size_medium:attr.size==='medium',addTicketDia_col_r2_3c1_size_small:attr.size==='small',addTicketDia_col_r2_3c1_size_min:attr.size==='min',addTicketDia_col_r2_3c1_checked:attr.checked,addTicketDia_col_r2_3c1_disable:attr.disabled}">

                <lm2b-link-text
                        ref="pollLabel"
                        refId="pollLabel"
                        v-show="pvt_isShow.r2_3c1 === 'pollLabel'"
                        :paraVarPair="pvt_r2_3c1.pollLabel.paraVarPair"
                        :para="pvt_r2_3c1.pollLabel.para"
                        :attr="pvt_r2_3c1.pollLabel.attr">
                </lm2b-link-text>
              </div>
              <div :class="{addTicketDia_col:true,addTicketDia_col_r2_3c2:true,addTicketDia_col_r2_3c2_size_large:attr.size==='large',addTicketDia_col_r2_3c2_size_medium:attr.size==='medium',addTicketDia_col_r2_3c2_size_small:attr.size==='small',addTicketDia_col_r2_3c2_size_min:attr.size==='min',addTicketDia_col_r2_3c2_checked:attr.checked,addTicketDia_col_r2_3c2_disable:attr.disabled}">

                <lm2b-input-text
                        ref="pollInput"
                        refId="pollInput"
                        v-show="pvt_isShow.r2_3c2 === 'pollInput'"
                        :paraVarPair="pvt_r2_3c2.pollInput.paraVarPair"
                        :para="pvt_r2_3c2.pollInput.para"
                        :attr="pvt_r2_3c2.pollInput.attr">
                </lm2b-input-text>
              </div>
            </div>
            <div class="addTicketDia_row addTicketDia_row_row7">
              <div :class="{addTicketDia_col:true,addTicketDia_col_r2_4c1:true,addTicketDia_col_r2_4c1_size_large:attr.size==='large',addTicketDia_col_r2_4c1_size_medium:attr.size==='medium',addTicketDia_col_r2_4c1_size_small:attr.size==='small',addTicketDia_col_r2_4c1_size_min:attr.size==='min',addTicketDia_col_r2_4c1_checked:attr.checked,addTicketDia_col_r2_4c1_disable:attr.disabled}">

                <mcb-ticket-other-info-setting
                        ref="otherSetting"
                        refId="otherSetting"
                        v-show="pvt_isShow.r2_4c1 === 'otherSetting'"
                        :paraVarPair="pvt_r2_4c1.otherSetting.paraVarPair"
                        :para="pvt_r2_4c1.otherSetting.para"
                        :attr="pvt_r2_4c1.otherSetting.attr">
                </mcb-ticket-other-info-setting>
              </div>
            </div>
            <div class="addTicketDia_row addTicketDia_row_row8">
              <div :class="{addTicketDia_col:true,addTicketDia_col_r2_5c1:true,addTicketDia_col_r2_5c1_size_large:attr.size==='large',addTicketDia_col_r2_5c1_size_medium:attr.size==='medium',addTicketDia_col_r2_5c1_size_small:attr.size==='small',addTicketDia_col_r2_5c1_size_min:attr.size==='min',addTicketDia_col_r2_5c1_checked:attr.checked,addTicketDia_col_r2_5c1_disable:attr.disabled}">

                <lm2b-link-text
                        ref="unfoldText"
                        refId="unfoldText"
                        v-show="pvt_isShow.r2_5c1 === 'unfoldText'"
                        :paraVarPair="pvt_r2_5c1.unfoldText.paraVarPair"
                        :para="pvt_r2_5c1.unfoldText.para"
                        :attr="pvt_r2_5c1.unfoldText.attr">
                </lm2b-link-text>
              </div>
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
  import { Dialog } from 'vant';
  import mcbTicketOtherInfoSetting from './ticketSettingOtherInfos.vue';
  export default {
    components: {mcbTicketOtherInfoSetting},
    inject: ['sys'],
    props: ['refId','para','attr','number'],
    data: function() {
      return {
        pvt_subModuleMap: {
          vessel:['r1_1c1','r1_1c2','r1_1c3','r2_1c1','r2_1c2','r2_2c1','r2_2c2','r2_3c1','r2_3c2','r2_4c1','r2_5c1'],
          subModule:['backText','titleText','finishButton','nameLabel','nameInput','priceLabel','priceInput','pollLabel','pollInput','otherSetting','unfoldText'],
        },
        pvt_isShow: {
          r1_1c1:null,
          r1_1c2:null,
          r1_1c3:null,
          r2_1c1:null,
          r2_1c2:null,
          r2_2c1:null,
          r2_2c2:null,
          r2_3c1:null,
          r2_3c2:null,
          r2_4c1:null,
          r2_5c1:null,
        },
        pvt_eventPortInput: ['confirmEvent'],
        ticketId:null,
        ticketIndex:null,
        ticketName:'',
        ticketPrice:null,
        ticketNumber:null,
        approval:null,
        minNumber:1,
        maxNumber:null,
        startTime:null,
        endTime:null,
        saleType:0,
        saleStartTime:null,
        saleEndTime:null,
        explain:null,
        titleText:'添加票种',
        unfoldText:'展开更多',
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
            },
          },
        };
      },
      pvt_r1_1c2:function(){
        return {
          titleText:{
            paraVarPair:{
              textData:'titleText',
            },
            para:{
              textData:this.titleText,
            },
            attr:{
              isClick:true,
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
          nameLabel:{
            paraVarPair:{
            },
            para:{
              textData:'票种名称:',
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
          nameInput:{
            paraVarPair:{
              text:'ticketName',
            },
            para:{
              text:this.ticketName,
            },
            attr:{
              placeholder:'请输入票种名称',
              isPlaceholder:false
            },
          },
        };
      },
      pvt_r2_2c1:function(){
        return {
          priceLabel:{
            paraVarPair:{
            },
            para:{
              textData:'票价:',
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
      pvt_r2_2c2:function(){
        return {
          priceInput:{
            paraVarPair:{
              text:'ticketPrice',
            },
            para:{
              text:this.ticketPrice,
            },
            attr:{
              placeholder:'免费请填0，有人报名后不能修改',
              isPlaceholder:false
            },
          },
        };
      },
      pvt_r2_3c1:function(){
        return {
          pollLabel:{
            paraVarPair:{
            },
            para:{
              textData:'数量:',
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
      pvt_r2_3c2:function(){
        return {
          pollInput:{
            paraVarPair:{
              text:'ticketNumber',
            },
            para:{
              text:this.ticketNumber,
            },
            attr:{
              placeholder:'票种总数，默认不限制',
              isPlaceholder:false
            },
          },
        };
      },
      pvt_r2_4c1:function(){
        return {
          otherSetting:{
            paraVarPair:{
              approval:'approval',
              minNumber:'minNumber',
              maxNumber:'maxNumber',
              startTime:'startTime',
              endTime:'endTime',
              saleType:'saleType',
              saleStartTime:'saleStartTime',
              saleEndTime:'saleEndTime',
              explain:'explain',
            },
            para:{
              approval:this.approval,
              minNumber:this.minNumber,
              maxNumber:this.maxNumber,
              startTime:this.startTime,
              endTime:this.endTime,
              saleType:this.saleType,
              saleStartTime:this.saleStartTime,
              saleEndTime:this.saleEndTime,
              explain:this.explain,
            },
            attr:{
              size:'medium',
            },
          },
        };
      },
      pvt_r2_5c1:function(){
        return {
          unfoldText:{
            paraVarPair:{
              textData:'unfoldText',
            },
            para:{
              textData:this.unfoldText,
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'center',
              height:'53px',
              color:'#12B0FF',
              fontSize:'14px',
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
      startModule:function(ticketObj,timeArr,ticketNameArr,successCallBack,errorCallBack){
        let $this = this;
        let para = {
          successCallBack:successCallBack,
          errorCallBack:errorCallBack,
          nStep:0
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
              $this.ticketId = null;
              $this.ticketIndex = null;
              $this.ticketName = '';
              $this.ticketPrice = null;
              $this.ticketNumber = null;
              $this.approval = false;
              $this.minNumber = 1;
              $this.maxNumber = null;
              $this.startTime = null;
              $this.endTime = null;
              $this.saleType = 0;
              $this.saleStartTime = null;
              $this.saleEndTime = null;
              $this.explain = '';
              $this.titleText = '添加票种';
              $this.unfoldText = '展开更多';
              if(timeArr){
                $this.startTime = timeArr[0];
                $this.endTime = timeArr[1];
                $this.saleEndTime = $this.endTime;
              }
              if(ticketNameArr){
                $this.ticketNameArr = ticketNameArr;
              }
              if(ticketObj){
                $this.titleText = '编辑票种';
                if(ticketObj.id){
                  $this.ticketId = ticketObj.id;
                }
                if(ticketObj.index || ticketObj.index === 0){
                  $this.ticketIndex = ticketObj.index;
                }
                if(ticketObj.ticketName){
                  $this.ticketName = ticketObj.ticketName;
                }
                if(ticketObj.ticketPrice || ticketObj.ticketPrice === 0){
                  $this.ticketPrice = ticketObj.ticketPrice;
                }
                if(ticketObj.ticketNumber){
                  $this.ticketNumber = ticketObj.ticketNumber;
                }
                if(ticketObj.approval){
                  $this.approval = ticketObj.approval;
                }
                if(ticketObj.minNumber){
                  $this.minNumber = ticketObj.minNumber;
                }
                if(ticketObj.maxNumber){
                  $this.maxNumber = ticketObj.maxNumber;
                }
                if(ticketObj.startTime){
                  $this.startTime = ticketObj.startTime;
                }
                if(ticketObj.endTime){
                  $this.endTime = ticketObj.endTime;
                }
                if(ticketObj.saleType){
                  $this.saleType = ticketObj.saleType;
                }
                if(ticketObj.saleStartTime){
                  $this.saleStartTime = ticketObj.saleStartTime;
                }
                if(ticketObj.saleEndTime){
                  $this.saleEndTime = ticketObj.saleEndTime;
                }
                if(ticketObj.explain){
                  $this.explain = ticketObj.explain;
                }
              }
              para.nStep = 'showModules';
              ++dbFlag;
              break;
            case 'showModules':
              $this.showSubModule('otherSetting',false,function(){
                //显示子组件
                let refId = [
                  'backText','titleText','finishButton',
                  'nameLabel','nameInput','priceLabel','priceInput','pollLabel','pollInput','unfoldText'
                ];
                $this.showSubModule(refId,true,function(){
                  para.nStep = 'startSubModules';
                  if(++dbFlag === 2){
                    $this.startModule(ticketObj,timeArr,ticketNameArr,successCallBack,errorCallBack);
                  }
                },para.errorCallBack);
              },para.errorCallBack);
              break;
            case 'startSubModules':
              $this.startSubModules(function(){
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.startModule(ticketObj,timeArr,ticketNameArr,successCallBack,errorCallBack);
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
      hideModule:function(){
        let $this = this;
        $this.hideSelfModule($this.refId,function(){
        },function(error){console.log(error)});
      },
      finishButtonClick:function(){
        //检测数据
        let $this = this;
        $this.checkRequiredData(function(){},function(error){console.log(error)});
      },
      checkRequiredData:function(successCallBack,errorCallBack){
        let $this = this;
        let para = {
          successCallBack:successCallBack,
          errorCallBack:errorCallBack,
          nStep:0
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
              //判断填写信息格式和必填项
              para.errorText = '';
              //不能同名
              if(!$this.ticketName){
                para.errorText = '票种名称不能为空';
              }else{
                if($this.ticketIndex || $this.ticketIndex === 0){
                  for(let i = 0;i < $this.ticketNameArr.length;i++){
                    if($this.ticketNameArr[i] === $this.ticketName && $this.ticketIndex !== i){
                      para.errorText = '票种名称已存在';
                      break;
                    }
                  }
                }else{
                  if($this.ticketNameArr.includes($this.ticketName)){
                    para.errorText = '票种名称已存在';
                  }
                }
              }
              if(!para.errorText){
                if(!$this.ticketPrice && $this.ticketPrice !== 0){
                  para.errorText = '票价不能为空';
                }else{
                  if(isNaN(Number($this.ticketPrice))){
                    para.errorText = '票价为数字';
                  }
                }
              }
              if(!para.errorText){
                if($this.ticketNumber === null || $this.ticketNumber === ''){
                  //无限制
                }else if(isNaN(Number($this.ticketNumber))){
                  para.errorText = '数量为数字';
                }else{
                  let ticketNumber = Number($this.ticketNumber);
                  if(ticketNumber > 0){
                    if(ticketNumber < $this.minNumber){
                      para.errorText = '数量需大于等于个人最小购票数';
                    }else if($this.maxNumber){
                      if(ticketNumber < $this.maxNumber){
                        para.errorText = '数量需大于等于个人最大购票数';
                      }
                    }
                  }else{
                    para.errorText = '数量需大于0';
                  }
                }
              }
              if(!para.errorText){
                if($this.saleType === 1){
                  if($this.saleEndTime > $this.endTime){
                    para.errorText = '售票结束时间不应在票种结束时间后';
                  }else if(!$this.saleStartTime){
                    para.errorText = '未定义售票开始时间';
                  }
                }
              }
              if(para.errorText){
                Dialog.alert({
                  message: para.errorText
                }).then(() => {
                  // on close
                });
                para.nStep = 'error';
              }else{
                para.nStep = 'end';
              }
              ++dbFlag;
              break;
            case 'end':
              let ticketObj = {
                id:$this.ticketId,
                index:$this.ticketIndex,
                ticketName:$this.ticketName,
                ticketPrice:$this.ticketPrice,
                ticketNumber:$this.ticketNumber,
                approval:$this.approval,
                minNumber:$this.minNumber,
                maxNumber:$this.maxNumber,
                startTime:$this.startTime,
                endTime:$this.endTime,
                saleType:$this.saleType,
                saleStartTime:$this.saleStartTime,
                saleEndTime:$this.saleEndTime,
                explain:$this.explain
              };
              $this.hideSelfModule($this.refId,function(){
                $this.ep.confirmEvent(ticketObj);
              },function(error){console.log(error)});
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
      unfoldModule:function(){
        let $this = this;
        if($this.unfoldText === '展开更多'){
          $this.unfoldText = '收起';
        }else{
          $this.unfoldText = '展开更多';
        }
        $this.showSubModule('otherSetting',$this.unfoldText === '收起',function(){
          $this.sm['unfoldText'].startModule(function(){
          },function(error){console.log(error)});
        },function(error){console.log(error)})
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
          sm4:'nameLabel',
          sm5:'nameInput',
          sm6:'priceLabel',
          sm7:'priceInput',
          sm8:'pollLabel',
          sm9:'pollInput',
          sm10:'otherSetting',
          sm11:'unfoldText'
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
                para.nStep = 'startModule_nameLabel';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_nameLabel':
              $this.sm[ref.sm4].startModule(function(){
                para.nStep = 'startModule_nameInput';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_nameInput':
              $this.sm[ref.sm5].startModule(function(){
                para.nStep = 'startModule_priceLabel';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_priceLabel':
              $this.sm[ref.sm6].startModule(function(){
                para.nStep = 'startModule_priceInput';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_priceInput':
              $this.sm[ref.sm7].startModule(function(){
                para.nStep = 'startModule_pollLabel';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_pollLabel':
              $this.sm[ref.sm8].startModule(function(){
                para.nStep = 'startModule_pollInput';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_pollInput':
              $this.sm[ref.sm9].startModule(function(){
                para.nStep = 'startModule_otherSetting';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_otherSetting':
              $this.sm[ref.sm10].startModule(function(){
                para.nStep = 'startModule_unfoldText';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_unfoldText':
              $this.sm[ref.sm11].startModule(function(){
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
        this.hideModule();
      },
      finishButton_buttonClickEvent:function(){
        this.finishButtonClick();
      },
      unfoldText_textClickEvent:function(){
        this.unfoldModule();
      },
    },
  };
</script>
<style lang="less" scoped>
    @import '../../../../../../assets/var_sq';
  .addTicketDia_container {
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    z-index:1000;
  }
  .addTicketDia_row {
    display:flex;
    /*flex:1;*/
  }
  .addTicketDia_col {
    display:flex;
    flex-direction:column;
  }
  .addTicketDia_row_addTicketDiaRow{
    width:100%;
    height:100%;
  }
  .addTicketDia_col_addTicketDiaWindow_size_medium {
    width:@addTicketDia-addTicketDiaWindow-medium-width;

  }
  .addTicketDia_col_addTicketDiaWindow {
    width:100%;
    height:100%;
    background-color:mix(@addTicketDia-addTicketDiaWindow-background-color,#fff,@addTicketDia-addTicketDiaWindow-background-color-opacity);
  }
  .addTicketDia_col_r1c1_size_medium {
    width:@addTicketDia-r1c1-medium-width;
    height:@addTicketDia-r1c1-medium-height;
    padding:@addTicketDia-r1c1-medium-padding;
  }
  .addTicketDia_col_r1c1 {
    background-color:mix(@addTicketDia-r1c1-background-color,#fff,@addTicketDia-r1c1-background-color-opacity);
    position:fixed;
    top:0;
    left:0;
    width:100%;
    box-sizing:border-box;
  }
  .addTicketDia_col_r1_1c1_size_medium {
    width:@addTicketDia-r1_1c1-medium-width;
    height:@addTicketDia-r1_1c1-medium-height;
  }
  .addTicketDia_col_r1_1c2_size_medium {
    width:@addTicketDia-r1_1c2-medium-width;
    height:@addTicketDia-r1_1c2-medium-height;
  }
  .addTicketDia_col_r1_1c3_size_medium {
    width:@addTicketDia-r1_1c3-medium-width;
    height:@addTicketDia-r1_1c3-medium-height;
    padding:@addTicketDia-r1_1c3-medium-padding;
    align-items:flex-end;
  }
  .addTicketDia_row_row3{
    height:100%;
  }
  .addTicketDia_col_r2c1_size_medium {
    width:@addTicketDia-r2c1-medium-width;
    margin:@addTicketDia-r2c1-medium-margin;
  }
  .addTicketDia_col_r2c1 {
    background-color:mix(@addTicketDia-r2c1-background-color,#fff,@addTicketDia-r2c1-background-color-opacity);
    height:calc(100% - 47px);
    overflow:auto;
  }
  .addTicketDia_col_r2_1c1_size_medium {
    width:@addTicketDia-r2_1c1-medium-width;
    height:@addTicketDia-r2_1c1-medium-height;
    padding:@addTicketDia-r2_1c1-medium-padding;
  }
  .addTicketDia_col_r2_1c1 {
    border-style:@addTicketDia-r2_1c1-border-style;
    border-width:@addTicketDia-r2_1c1-border-width;
    border-color:mix(@addTicketDia-r2_1c1-border-color,#fff,@addTicketDia-r2_1c1-hover-border-color-opacity);
  }
  .addTicketDia_col_r2_1c2_size_medium {
    width:@addTicketDia-r2_1c2-medium-width;
    height:@addTicketDia-r2_1c2-medium-height;
    padding:@addTicketDia-r2_1c2-medium-padding;
  }
  .addTicketDia_col_r2_1c2 {
    border-style:@addTicketDia-r2_1c2-border-style;
    border-width:@addTicketDia-r2_1c2-border-width;
    border-color:mix(@addTicketDia-r2_1c2-border-color,#fff,@addTicketDia-r2_1c2-hover-border-color-opacity);
    justify-content:center;
  }
  .addTicketDia_col_r2_2c1_size_medium {
    width:@addTicketDia-r2_2c1-medium-width;
    height:@addTicketDia-r2_2c1-medium-height;
    padding:@addTicketDia-r2_2c1-medium-padding;
  }
  .addTicketDia_col_r2_2c1 {
    border-style:@addTicketDia-r2_2c1-border-style;
    border-width:@addTicketDia-r2_2c1-border-width;
    border-color:mix(@addTicketDia-r2_2c1-border-color,#fff,@addTicketDia-r2_2c1-hover-border-color-opacity);
  }
  .addTicketDia_col_r2_2c2_size_medium {
    width:@addTicketDia-r2_2c2-medium-width;
    height:@addTicketDia-r2_2c2-medium-height;
    padding:@addTicketDia-r2_2c2-medium-padding;
  }
  .addTicketDia_col_r2_2c2 {
    border-style:@addTicketDia-r2_2c2-border-style;
    border-width:@addTicketDia-r2_2c2-border-width;
    border-color:mix(@addTicketDia-r2_2c2-border-color,#fff,@addTicketDia-r2_2c2-hover-border-color-opacity);
    justify-content:center;
  }
  .addTicketDia_col_r2_3c1_size_medium {
    width:@addTicketDia-r2_3c1-medium-width;
    height:@addTicketDia-r2_3c1-medium-height;
    padding:@addTicketDia-r2_3c1-medium-padding;
  }
  .addTicketDia_col_r2_3c1 {
    border-style:@addTicketDia-r2_3c1-border-style;
    border-width:@addTicketDia-r2_3c1-border-width;
    border-color:mix(@addTicketDia-r2_3c1-border-color,#fff,@addTicketDia-r2_3c1-hover-border-color-opacity);
  }
  .addTicketDia_col_r2_3c2_size_medium {
    width:@addTicketDia-r2_3c2-medium-width;
    height:@addTicketDia-r2_3c2-medium-height;
    padding:@addTicketDia-r2_3c2-medium-padding;
  }
  .addTicketDia_col_r2_3c2 {
    border-style:@addTicketDia-r2_3c2-border-style;
    border-width:@addTicketDia-r2_3c2-border-width;
    border-color:mix(@addTicketDia-r2_3c2-border-color,#fff,@addTicketDia-r2_3c2-hover-border-color-opacity);
    justify-content:center;
  }
  .addTicketDia_col_r2_4c1_size_medium {
    width:@addTicketDia-r2_4c1-medium-width;
  }
  .addTicketDia_col_r2_4c1 {
  }
  .addTicketDia_col_r2_5c1_size_medium {
    width:@addTicketDia-r2_5c1-medium-width;
    height:@addTicketDia-r2_5c1-medium-height;
  }
  .addTicketDia_col_r2_5c1 {
    border-style:@addTicketDia-r2_5c1-border-style;
    border-width:@addTicketDia-r2_5c1-border-width;
    border-color:mix(@addTicketDia-r2_5c1-border-color,#fff,@addTicketDia-r2_5c1-hover-border-color-opacity);
  }
</style>
