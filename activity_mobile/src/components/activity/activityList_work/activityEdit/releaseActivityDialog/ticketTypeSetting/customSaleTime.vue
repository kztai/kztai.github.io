<template>
  <div class="mcbCustomSaleTime_container">
    <div class="mcbCustomSaleTime_row mcbCustomSaleTime_row_mcbCustomSaleTimeRow">
      <div :class="{mcbCustomSaleTime_col:true,mcbCustomSaleTime_col_mcbCustomSaleTimeWindow:true,mcbCustomSaleTime_col_mcbCustomSaleTimeWindow_size_large:attr.size==='large',mcbCustomSaleTime_col_mcbCustomSaleTimeWindow_size_medium:attr.size==='medium',mcbCustomSaleTime_col_mcbCustomSaleTimeWindow_size_small:attr.size==='small',mcbCustomSaleTime_col_mcbCustomSaleTimeWindow_size_min:attr.size==='min',mcbCustomSaleTime_col_mcbCustomSaleTimeWindow_checked:attr.checked,mcbCustomSaleTime_col_mcbCustomSaleTimeWindow_disable:attr.disabled}">

        <div class="mcbCustomSaleTime_row mcbCustomSaleTime_row_row1">
          <div :class="{mcbCustomSaleTime_col:true,mcbCustomSaleTime_col_r1c1:true,mcbCustomSaleTime_col_r1c1_size_large:attr.size==='large',mcbCustomSaleTime_col_r1c1_size_medium:attr.size==='medium',mcbCustomSaleTime_col_r1c1_size_small:attr.size==='small',mcbCustomSaleTime_col_r1c1_size_min:attr.size==='min',mcbCustomSaleTime_col_r1c1_checked:attr.checked,mcbCustomSaleTime_col_r1c1_disable:attr.disabled}">

            <div class="mcbCustomSaleTime_row mcbCustomSaleTime_row_row2">
              <div :class="{mcbCustomSaleTime_col:true,mcbCustomSaleTime_col_r1_1c1:true,mcbCustomSaleTime_col_r1_1c1_size_large:attr.size==='large',mcbCustomSaleTime_col_r1_1c1_size_medium:attr.size==='medium',mcbCustomSaleTime_col_r1_1c1_size_small:attr.size==='small',mcbCustomSaleTime_col_r1_1c1_size_min:attr.size==='min',mcbCustomSaleTime_col_r1_1c1_checked:attr.checked,mcbCustomSaleTime_col_r1_1c1_disable:attr.disabled}">

                <lm2b-datetime-picker
                        ref="saleStartTime"
                        refId="saleStartTime"
                        v-show="pvt_isShow.r1_1c1 === 'saleStartTime'"
                        :paraVarPair="pvt_r1_1c1.saleStartTime.paraVarPair"
                        :para="pvt_r1_1c1.saleStartTime.para"
                        :attr="pvt_r1_1c1.saleStartTime.attr">
                </lm2b-datetime-picker>
              </div>
              <div :class="{mcbCustomSaleTime_col:true,mcbCustomSaleTime_col_r1_1c2:true,mcbCustomSaleTime_col_r1_1c2_size_large:attr.size==='large',mcbCustomSaleTime_col_r1_1c2_size_medium:attr.size==='medium',mcbCustomSaleTime_col_r1_1c2_size_small:attr.size==='small',mcbCustomSaleTime_col_r1_1c2_size_min:attr.size==='min',mcbCustomSaleTime_col_r1_1c2_checked:attr.checked,mcbCustomSaleTime_col_r1_1c2_disable:attr.disabled}">

                <lm2b-link-text
                        ref="toText"
                        refId="toText"
                        v-show="pvt_isShow.r1_1c2 === 'toText'"
                        :paraVarPair="pvt_r1_1c2.toText.paraVarPair"
                        :para="pvt_r1_1c2.toText.para"
                        :attr="pvt_r1_1c2.toText.attr">
                </lm2b-link-text>
              </div>
            </div>
            <div class="mcbCustomSaleTime_row mcbCustomSaleTime_row_row3">
              <div :class="{mcbCustomSaleTime_col:true,mcbCustomSaleTime_col_r1_2c1:true,mcbCustomSaleTime_col_r1_2c1_size_large:attr.size==='large',mcbCustomSaleTime_col_r1_2c1_size_medium:attr.size==='medium',mcbCustomSaleTime_col_r1_2c1_size_small:attr.size==='small',mcbCustomSaleTime_col_r1_2c1_size_min:attr.size==='min',mcbCustomSaleTime_col_r1_2c1_checked:attr.checked,mcbCustomSaleTime_col_r1_2c1_disable:attr.disabled}">

                <lm2b-datetime-picker
                        ref="saleEndTime"
                        refId="saleEndTime"
                        v-show="pvt_isShow.r1_2c1 === 'saleEndTime'"
                        :paraVarPair="pvt_r1_2c1.saleEndTime.paraVarPair"
                        :para="pvt_r1_2c1.saleEndTime.para"
                        :attr="pvt_r1_2c1.saleEndTime.attr">
                </lm2b-datetime-picker>
              </div>
            </div>
          </div>
          <div :class="{mcbCustomSaleTime_col:true,mcbCustomSaleTime_col_r1c2:true,mcbCustomSaleTime_col_r1c2_size_large:attr.size==='large',mcbCustomSaleTime_col_r1c2_size_medium:attr.size==='medium',mcbCustomSaleTime_col_r1c2_size_small:attr.size==='small',mcbCustomSaleTime_col_r1c2_size_min:attr.size==='min',mcbCustomSaleTime_col_r1c2_checked:attr.checked,mcbCustomSaleTime_col_r1c2_disable:attr.disabled}">

            <lm2b-link-text
                    ref="iconText"
                    refId="iconText"
                    v-show="pvt_isShow.r1c2 === 'iconText'"
                    :paraVarPair="pvt_r1c2.iconText.paraVarPair"
                    :para="pvt_r1c2.iconText.para"
                    :attr="pvt_r1c2.iconText.attr">
            </lm2b-link-text>
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
    props: ['refId','para','attr','paraVarPair','number'],
    data: function() {
      return {

        saleStartTime:this.para.saleStartTime,
        saleEndTime:this.para.saleEndTime,
        pvt_subModuleMap: {
          vessel:['r1_1c1','r1_1c2','r1_2c1','r1c2'],
          subModule:['saleStartTime','toText','saleEndTime','iconText'],
        },
        pvt_isShow: {
          r1_1c1:null,
          r1_1c2:null,
          r1_2c1:null,
          r1c2:null,
        },
        pvt_eventPortInput: ['showTypeDiaEvent'],
        startMinDate:null,
        endMinDate:null,
      };
    },
    watch: {
      saleStartTime: {
        handler: function (val, oldVal) {
          if (val !== oldVal && this.paraVarPair.saleStartTime) {
            if (this.number !== undefined) { // 循环
              this.$parent[this.paraVarPair.saleStartTime][this.number] = val
            } else { // 非循环
              this.$parent[this.paraVarPair.saleStartTime] = val
            }
          }
        },
        deep   : true
      },
      saleEndTime: {
        handler: function (val, oldVal) {
          if (val !== oldVal && this.paraVarPair.saleEndTime) {
            if (this.number !== undefined) { // 循环
              this.$parent[this.paraVarPair.saleEndTime][this.number] = val
            } else { // 非循环
              this.$parent[this.paraVarPair.saleEndTime] = val
            }
          }
        },
        deep   : true
      },
    },
    computed:{
      pvt_r1_1c1:function(){
        return {
          saleStartTime:{
            paraVarPair:{
              datetime:'saleStartTime'
            },
            para:{
              datetime:this.saleStartTime,
            },
            attr:{
              placeholder:'售票开始时间',
              minDate:this.startMinDate,
              clearable:false,
              type:'dateTime',
              clearable:false,
              format:'yyyy-MM-dd HH:mm',
            },
          },
        };
      },
      pvt_r1_1c2:function(){
        return {
          toText:{
            paraVarPair:{
            },
            para:{
              textData:'至',
            },
            attr:{
              label:'div',
              textAlign:'center',
              height:'54px',
              color:'#999999',
              fontSize:'15px',
              background:'transparent',
            },
          },
        };
      },
      pvt_r1_2c1:function(){
        return {
          saleEndTime:{
            paraVarPair:{
              datetime:'saleEndTime'
            },
            para:{
              datetime:this.saleEndTime,
            },
            attr:{
              placeholder:'售票结束时间',
              minDate:this.endMinDate,
              clearable:false,
              type:'dateTime',
              clearable:false,
              format:'yyyy-MM-dd HH:mm',
            },
          },
        };
      },
      pvt_r1c2:function(){
        return {
          iconText:{
            paraVarPair:{
            },
            para:{
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'center',
              height:'110px',
              color:'#999999',
              fontSize:'14px',
              background:'transparent',
              icon:'van-icon-arrow',
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
      startModule:function(successCallBack,errorCallBack){
        let $this = this;
        let para = {
          successCallBack:successCallBack,
          errorCallBack:errorCallBack,
          nStep:0
        }
        let dbFlag;
        let ref = {
          sm1:'saleStartTime',
          sm2:'toText',
          sm3:'saleEndTime',
          sm4:'iconText'
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
              //时间使用时间戳格式
              $this.saleStartTime = $this.para.saleStartTime;
              $this.saleEndTime = $this.para.saleEndTime;
              $this.startMinDate = new Date();
              $this.endMinDate = new Date();
              if($this.saleStartTime){
                $this.endMinDate = new Date($this.saleStartTime);
              }
              para.nStep = 'showModules';
              ++dbFlag;
              break;
            case 'showModules':
              $this.showSubModule('toText',false,function(){
                //显示子组件
                let refId = [
                  'saleStartTime','saleEndTime','iconText'
                ];
                if($this.saleStartTime){
                  refId.push('toText');
                }
                $this.showSubModule(refId,true,function(){
                  para.nStep = 'forceUpdateData';
                  if(++dbFlag === 2){
                    $this.startModule(successCallBack,errorCallBack);
                  }
                },para.errorCallBack);
              },para.errorCallBack);
              break;
            case 'forceUpdateData':
              $this.forceUpdateData(function(){
                para.nStep = 'startModule_saleStart';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_saleStart':
              $this.sm[ref.sm1].startModule(function(){
                para.nStep = 'startModule_toText';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_toText':
              $this.sm[ref.sm2].startModule(function(){
                para.nStep = 'startModule_saleEnd';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_saleEnd':
              $this.sm[ref.sm3].startModule(function(){
                para.nStep = 'startModule_icon';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_icon':
              $this.sm[ref.sm4].startModule(function(){
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
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
      saleStartChange:function(){
        let $this = this;
        //修正所选的值
        let endChange;
        if($this.saleEndTime){
          if($this.saleStartTime > $this.saleEndTime){
            $this.saleEndTime = $this.saleStartTime + 5*60*1000;
            endChange = true;
          }
        }else{
          $this.saleEndTime = $this.saleStartTime + 5*60*1000;
          endChange = true;
        }
        $this.endMinDate = new Date($this.saleStartTime);
        if($this.saleStartTime){
          $this.showSubModule('toText',true,function(){
          },function(error){console.log(error)});
        }
        if(endChange){
          $this.forceUpdateData(function(){
            $this.sm['saleEndTime'].startModule(function(){
            },function(error){console.log(error)});
          });
        }
      },
      showSaleTypeDia:function(){
        this.ep.showTypeDiaEvent();
      },
      saleStartTime_dataModifyEvent:function(){
        this.saleStartChange();
      },
      iconText_textClickEvent:function(){
        this.showSaleTypeDia();
      },
    },
  };
</script>
<style lang="less" scoped>
    @import '../../../../../../assets/var_sq';
  .mcbCustomSaleTime_container {
  }
  .mcbCustomSaleTime_row {
    display:flex;
    /*flex:1;*/
  }
  .mcbCustomSaleTime_col {
    display:flex;
    flex-direction:column;
  }
  .mcbCustomSaleTime_col_mcbCustomSaleTimeWindow_size_medium {
    width:@mcbCustomSaleTime-mcbCustomSaleTimeWindow-medium-width;
  }
  .mcbCustomSaleTime_col_r1c1_size_medium {
    width:@mcbCustomSaleTime-r1c1-medium-width;
    height:@mcbCustomSaleTime-r1c1-medium-height;
  }
  .mcbCustomSaleTime_col_r1c1 {
    border-style:@mcbCustomSaleTime-r1c1-border-style;
    border-color:mix(@mcbCustomSaleTime-r1c1-border-color,#fff,@mcbCustomSaleTime-r1c1-hover-border-color-opacity);
    border-width:@mcbCustomSaleTime-r1c1-border-width;
  }
  .mcbCustomSaleTime_col_r1c2_size_medium {
    width:@mcbCustomSaleTime-r1c2-medium-width;
    height:@mcbCustomSaleTime-r1c2-medium-height;
  }
  .mcbCustomSaleTime_col_r1c2 {
    border-style:@mcbCustomSaleTime-r1c2-border-style;
    border-color:mix(@mcbCustomSaleTime-r1c2-border-color,#fff,@mcbCustomSaleTime-r1c2-hover-border-color-opacity);
    border-width:@mcbCustomSaleTime-r1c2-border-width;
  }
  .mcbCustomSaleTime_col_r1_1c1_size_medium {
    width:@mcbCustomSaleTime-r1_1c1-medium-width;
    height:@mcbCustomSaleTime-r1_1c1-medium-height;
    justify-content:@mcbCustomSaleTime-r1_1c1-medium-vertical-position;
  }
  .mcbCustomSaleTime_col_r1_1c1 {
    border-style:@mcbCustomSaleTime-r1_1c1-border-style;
    border-width:@mcbCustomSaleTime-r1_1c1-border-width;
    border-color:mix(@mcbCustomSaleTime-r1_1c1-border-color,#fff,@mcbCustomSaleTime-r1_1c1-hover-border-color-opacity);
  }
  .mcbCustomSaleTime_col_r1_1c2_size_medium {
    width:@mcbCustomSaleTime-r1_1c2-medium-width;
    height:@mcbCustomSaleTime-r1_1c2-medium-height;
    justify-content:@mcbCustomSaleTime-r1_1c2-medium-vertical-position;
  }
  .mcbCustomSaleTime_col_r1_1c2 {
    border-style:@mcbCustomSaleTime-r1_1c2-border-style;
    border-width:@mcbCustomSaleTime-r1_1c2-border-width;
    border-color:mix(@mcbCustomSaleTime-r1_1c2-border-color,#fff,@mcbCustomSaleTime-r1_1c2-hover-border-color-opacity);
  }
  .mcbCustomSaleTime_col_r1_2c1_size_medium {
    width:@mcbCustomSaleTime-r1_2c1-medium-width;
    height:@mcbCustomSaleTime-r1_2c1-medium-height;
    justify-content:@mcbCustomSaleTime-r1_2c1-medium-vertical-position;
  }
</style>
