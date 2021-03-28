<template>
  <div class="mcbTicketTypeRow_container">
    <div class="mcbTicketTypeRow_row mcbTicketTypeRow_row_ticketTypeRowRow">
      <div :class="{mcbTicketTypeRow_col:true,mcbTicketTypeRow_col_ticketTypeRowWindow:true,mcbTicketTypeRow_col_ticketTypeRowWindow_size_large:attr.size==='large',mcbTicketTypeRow_col_ticketTypeRowWindow_size_medium:attr.size==='medium',mcbTicketTypeRow_col_ticketTypeRowWindow_size_small:attr.size==='small',mcbTicketTypeRow_col_ticketTypeRowWindow_size_min:attr.size==='min',mcbTicketTypeRow_col_ticketTypeRowWindow_checked:attr.checked,mcbTicketTypeRow_col_ticketTypeRowWindow_disable:attr.disabled}">

        <div class="mcbTicketTypeRow_row mcbTicketTypeRow_row_row1">
          <div :class="{mcbTicketTypeRow_col:true,mcbTicketTypeRow_col_r1c1:true,mcbTicketTypeRow_col_r1c1_size_large:attr.size==='large',mcbTicketTypeRow_col_r1c1_size_medium:attr.size==='medium',mcbTicketTypeRow_col_r1c1_size_small:attr.size==='small',mcbTicketTypeRow_col_r1c1_size_min:attr.size==='min',mcbTicketTypeRow_col_r1c1_checked:attr.checked,mcbTicketTypeRow_col_r1c1_disable:attr.disabled}">

            <lm2b-link-text
                    ref="deleteIcon"
                    refId="deleteIcon"
                    v-show="pvt_isShow.r1c1 === 'deleteIcon'"
                    :paraVarPair="pvt_r1c1.deleteIcon.paraVarPair"
                    :para="pvt_r1c1.deleteIcon.para"
                    :attr="pvt_r1c1.deleteIcon.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbTicketTypeRow_col:true,mcbTicketTypeRow_col_r1c2:true,mcbTicketTypeRow_col_r1c2_size_large:attr.size==='large',mcbTicketTypeRow_col_r1c2_size_medium:attr.size==='medium',mcbTicketTypeRow_col_r1c2_size_small:attr.size==='small',mcbTicketTypeRow_col_r1c2_size_min:attr.size==='min',mcbTicketTypeRow_col_r1c2_checked:attr.checked,mcbTicketTypeRow_col_r1c2_disable:attr.disabled}">

            <lm2b-link-text
                    ref="nameText"
                    refId="nameText"
                    v-show="pvt_isShow.r1c2 === 'nameText'"
                    :paraVarPair="pvt_r1c2.nameText.paraVarPair"
                    :para="pvt_r1c2.nameText.para"
                    :attr="pvt_r1c2.nameText.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbTicketTypeRow_col:true,mcbTicketTypeRow_col_r1c3:true,mcbTicketTypeRow_col_r1c3_size_large:attr.size==='large',mcbTicketTypeRow_col_r1c3_size_medium:attr.size==='medium',mcbTicketTypeRow_col_r1c3_size_small:attr.size==='small',mcbTicketTypeRow_col_r1c3_size_min:attr.size==='min',mcbTicketTypeRow_col_r1c3_checked:attr.checked,mcbTicketTypeRow_col_r1c3_disable:attr.disabled}">

            <lm2b-link-text
                    ref="priceText"
                    refId="priceText"
                    v-show="pvt_isShow.r1c3 === 'priceText'"
                    :paraVarPair="pvt_r1c3.priceText.paraVarPair"
                    :para="pvt_r1c3.priceText.para"
                    :attr="pvt_r1c3.priceText.attr">
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

        ticketName:this.para.ticketName,
        ticketPrice:this.para.ticketPrice,
        pvt_subModuleMap: {
          vessel:['r1c1','r1c2','r1c3'],
          subModule:['deleteIcon','nameText','priceText'],
        },
        pvt_isShow: {
          r1c1:null,
          r1c2:null,
          r1c3:null,
        },
        pvt_eventPortInput: ['deleteTicketEvent','ticketClickEvent'],
        priceText:''
      };
    },
    watch: {
      ticketName: {
        handler: function (val, oldVal) {
          if (val !== oldVal && this.paraVarPair.ticketName) {
            if (this.number !== undefined) { // 循环
              this.$parent[this.paraVarPair.ticketName][this.number] = val
            } else { // 非循环
              this.$parent[this.paraVarPair.ticketName] = val
            }
          }
        },
        deep   : true
      },
      ticketPrice: {
        handler: function (val, oldVal) {
          if (val !== oldVal && this.paraVarPair.ticketPrice) {
            if (this.number !== undefined) { // 循环
              this.$parent[this.paraVarPair.ticketPrice][this.number] = val
            } else { // 非循环
              this.$parent[this.paraVarPair.ticketPrice] = val
            }
          }
        },
        deep   : true
      },
    },
    computed:{
      pvt_r1c1:function(){
        return {
          deleteIcon:{
            paraVarPair:{
            },
            para:{
              textData:'-',
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'center',
              height:'13px',
              color:'#ffffff',
              fontSize:'13px',
              background:'#CCCCCC',
            },
          },
        };
      },
      pvt_r1c2:function(){
        return {
          nameText:{
            paraVarPair:{
              textData:'ticketName',
            },
            para:{
              textData:this.ticketName,
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'left',
              height:'49px',
              color:'#333333',
              fontSize:'14px',
              background:'transparent',
            },
          },
        };
      },
      pvt_r1c3:function(){
        return {
          priceText:{
            paraVarPair:{
              textData:'ticketPrice',
            },
            para:{
              textData:this.priceText,
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'right',
              height:'49px',
              color:'#333333',
              fontSize:'14px',
              background:'transparent',
              icon:'van-icon-arrow',
              iconIsRight:true,
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
          sm1:'deleteIcon',
          sm2:'nameText',
          sm3:'priceText'
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
              $this.ticketName = $this.para.ticketName;
              if($this.para.ticketPrice === 0){
                $this.priceText = '免费';
              }else{
                $this.priceText = '￥' + $this.para.ticketPrice;
              }
              para.nStep = 'showModules';
              ++dbFlag;
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                'deleteIcon','nameText','priceText'
              ];
              $this.showSubModule(refId,true,function(){
                para.nStep = 'forceUpdateData';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'forceUpdateData':
              $this.forceUpdateData(function(){
                para.nStep = 'startModule_deleteIcon';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_deleteIcon':
              $this.sm[ref.sm1].startModule(function(){
                para.nStep = 'startModule_nameText';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_nameText':
              $this.sm[ref.sm2].startModule(function(){
                para.nStep = 'startModule_priceText';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_priceText':
              $this.sm[ref.sm3].startModule(function(){
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
      deleteTicket:function(){
        this.ep.deleteTicketEvent(this.number);
      },
      ticketTypeClick:function(){
        this.ep.ticketClickEvent(this.number);
      },
      deleteIcon_textClickEvent:function(){
        this.deleteTicket();
      },
      nameText_textClickEvent:function(){
        this.ticketTypeClick();
      },
      priceText_textClickEvent:function(){
        this.ticketTypeClick();
      },
    },
  };
</script>
<style lang="less" scoped>
    @import '../../../../../../assets/var_sq';
  .mcbTicketTypeRow_container {
  }
  .mcbTicketTypeRow_row {
    display:flex;
    /*flex:1;*/
  }
  .mcbTicketTypeRow_col {
    display:flex;
    flex-direction:column;
  }
  .mcbTicketTypeRow_col_ticketTypeRowWindow_size_medium {
    width:@ticketTypeRow-ticketTypeRowWindow-medium-width;
  }
  .mcbTicketTypeRow_col_ticketTypeRowWindow {
    background-color:mix(@ticketTypeRow-ticketTypeRowWindow-background-color,#fff,@ticketTypeRow-ticketTypeRowWindow-background-color-opacity);
  }
  .mcbTicketTypeRow_col_r1c1{
    box-sizing:border-box;
    border-radius:50%;
    overflow:hidden;
  }
  .mcbTicketTypeRow_col_r1c1_size_medium {
    width:@ticketTypeRow-r1c1-medium-width;
    height:@ticketTypeRow-r1c1-medium-height;
    margin:@ticketTypeRow-r1c1-medium-margin;
  }
  .mcbTicketTypeRow_col_r1c2_size_medium {
    width:@ticketTypeRow-r1c2-medium-width;
    height:@ticketTypeRow-r1c2-medium-height;
  }
  .mcbTicketTypeRow_col_r1c3_size_medium {
    width:@ticketTypeRow-r1c3-medium-width;
    height:@ticketTypeRow-r1c3-medium-height;
    padding:@ticketTypeRow-r1c3-medium-padding;
  }
</style>
