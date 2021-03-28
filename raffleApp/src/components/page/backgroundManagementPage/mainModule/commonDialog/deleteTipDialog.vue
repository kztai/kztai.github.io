<template>
    <div v-show="pvt_win.isShow.backMan_main_raffleS_deleteDiaWi"
         :class="{backMan_main_raffleS_deleteDia_container:true,backMan_main_raffleS_deleteDia_col:true,backMan_main_raffleS_deleteDia_col_backMan_main_raffleS_deleteDiaWi:true,backMan_main_raffleS_deleteDia_col_backMan_main_raffleS_deleteDiaWi_size_large:attr.size==='large',backMan_main_raffleS_deleteDia_col_backMan_main_raffleS_deleteDiaWi_size_medium:attr.size==='medium',backMan_main_raffleS_deleteDia_col_backMan_main_raffleS_deleteDiaWi_size_small:attr.size==='small',backMan_main_raffleS_deleteDia_col_backMan_main_raffleS_deleteDiaWi_size_min:attr.size==='min',backMan_main_raffleS_deleteDia_col_backMan_main_raffleS_deleteDiaWi_checked:pvt_win.isChecked.backMan_main_raffleS_deleteDiaWi,backMan_main_raffleS_deleteDia_col_backMan_main_raffleS_deleteDiaWi_disable:attr.disabled}"
         :style="pvt_win.style.backMan_main_raffleS_deleteDiaWi" >

        <div class="backMan_main_raffleS_deleteDia_row backMan_main_raffleS_deleteDia_row_row0">
            <div v-show="pvt_win.isShow.r1c1"
                 :class="{backMan_main_raffleS_deleteDia_col:true,backMan_main_raffleS_deleteDia_col_r1c1:true,backMan_main_raffleS_deleteDia_col_r1c1_size_large:attr.size==='large',backMan_main_raffleS_deleteDia_col_r1c1_size_medium:attr.size==='medium',backMan_main_raffleS_deleteDia_col_r1c1_size_small:attr.size==='small',backMan_main_raffleS_deleteDia_col_r1c1_size_min:attr.size==='min',backMan_main_raffleS_deleteDia_col_r1c1_checked:pvt_win.isChecked.r1c1,backMan_main_raffleS_deleteDia_col_r1c1_disable:attr.disabled}"
                 :style="pvt_win.style.r1c1" >

                <lm1a-link-text
                        ref="closeIcon"
                        refId="closeIcon"
                        v-show="pvt_isShow.r1c1 === 'closeIcon'"
                        :paraVarPair="pvt_r1c1.closeIcon.paraVarPair"
                        :para="pvt_r1c1.closeIcon.para"
                        :attr="pvt_r1c1.closeIcon.attr">
                </lm1a-link-text>
            </div>
        </div>
        <div class="backMan_main_raffleS_deleteDia_row backMan_main_raffleS_deleteDia_row_row1">
            <div v-show="pvt_win.isShow.r2c1"
                 :class="{backMan_main_raffleS_deleteDia_col:true,backMan_main_raffleS_deleteDia_col_r2c1:true,backMan_main_raffleS_deleteDia_col_r2c1_size_large:attr.size==='large',backMan_main_raffleS_deleteDia_col_r2c1_size_medium:attr.size==='medium',backMan_main_raffleS_deleteDia_col_r2c1_size_small:attr.size==='small',backMan_main_raffleS_deleteDia_col_r2c1_size_min:attr.size==='min',backMan_main_raffleS_deleteDia_col_r2c1_checked:pvt_win.isChecked.r2c1,backMan_main_raffleS_deleteDia_col_r2c1_disable:attr.disabled}"
                 :style="pvt_win.style.r2c1" >

                <lm1a-link-text
                        ref="tipText"
                        refId="tipText"
                        v-show="pvt_isShow.r2c1 === 'tipText'"
                        :paraVarPair="pvt_r2c1.tipText.paraVarPair"
                        :para="pvt_r2c1.tipText.para"
                        :attr="pvt_r2c1.tipText.attr">
                </lm1a-link-text>
            </div>
        </div>
        <div class="backMan_main_raffleS_deleteDia_row backMan_main_raffleS_deleteDia_row_row2">
            <div v-show="pvt_win.isShow.r3c1"
                 :class="{backMan_main_raffleS_deleteDia_col:true,backMan_main_raffleS_deleteDia_col_r3c1:true,backMan_main_raffleS_deleteDia_col_r3c1_size_large:attr.size==='large',backMan_main_raffleS_deleteDia_col_r3c1_size_medium:attr.size==='medium',backMan_main_raffleS_deleteDia_col_r3c1_size_small:attr.size==='small',backMan_main_raffleS_deleteDia_col_r3c1_size_min:attr.size==='min',backMan_main_raffleS_deleteDia_col_r3c1_checked:pvt_win.isChecked.r3c1,backMan_main_raffleS_deleteDia_col_r3c1_disable:attr.disabled}"
                 :style="pvt_win.style.r3c1" >

                <lm1a-button
                        ref="btn1"
                        refId="btn1"
                        v-show="pvt_isShow.r3c1 === 'btn1'"
                        :paraVarPair="pvt_r3c1.btn1.paraVarPair"
                        :para="pvt_r3c1.btn1.para"
                        :attr="pvt_r3c1.btn1.attr">
                </lm1a-button>
            </div>
            <div v-show="pvt_win.isShow.r3c2"
                 :class="{backMan_main_raffleS_deleteDia_col:true,backMan_main_raffleS_deleteDia_col_r3c2:true,backMan_main_raffleS_deleteDia_col_r3c2_size_large:attr.size==='large',backMan_main_raffleS_deleteDia_col_r3c2_size_medium:attr.size==='medium',backMan_main_raffleS_deleteDia_col_r3c2_size_small:attr.size==='small',backMan_main_raffleS_deleteDia_col_r3c2_size_min:attr.size==='min',backMan_main_raffleS_deleteDia_col_r3c2_checked:pvt_win.isChecked.r3c2,backMan_main_raffleS_deleteDia_col_r3c2_disable:attr.disabled}"
                 :style="pvt_win.style.r3c2" >

                <lm1a-button
                        ref="btn2"
                        refId="btn2"
                        v-show="pvt_isShow.r3c2 === 'btn2'"
                        :paraVarPair="pvt_r3c2.btn2.paraVarPair"
                        :para="pvt_r3c2.btn2.para"
                        :attr="pvt_r3c2.btn2.attr">
                </lm1a-button>
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
    props: {
      refId: String,
      para: Object,
      attr: {
        type: Object,
        default: function () {
          return {size: 'medium'};
        },
        validator: function (val) {
          if(!val.size) val.size = 'medium';
          return true;
        },
      },
      paraVarPair: Object,
      number: Number,
    },
    data: function() {
      return {
          mac: mac.mac,
        type:this.para.type,
        pvt_subModuleMap: {
          vessel:['r1c1','r2c1','r3c1','r3c2'],
          subModule:['closeIcon','tipText','btn1','btn2'],
        },
        pvt_isShow: {
          r1c1:null,
          r2c1:null,
          r3c1:null,
          r3c2:null,
        },
        pvt_win:{
          isShow:{
            backMan_main_raffleS_deleteDiaWi:true,
            r1c1:true,
            r2c1:true,
            r3c1:true,
            r3c2:true,
          },
          isChecked:{
            backMan_main_raffleS_deleteDiaWi:false,
            r1c1:false,
            r2c1:false,
            r3c1:false,
            r3c2:false,
          },
          style:{
            backMan_main_raffleS_deleteDiaWi:null,
            r1c1:null,
            r2c1:null,
            r3c1:null,
            r3c2:null,
          },
        },
        pvt_eventPortInput: ['confirmDeleteEvent'],

        tip:null,
      };
    },
    watch: {
      type: {
        handler: function (val, oldVal) {
          if (val !== oldVal && this.paraVarPair.type) {
            if (this.number !== undefined) { // 循环
              this.$parent[this.paraVarPair.type][this.number] = val
            } else { // 非循环
              this.$parent[this.paraVarPair.type] = val
            }
          }
        },
        deep   : true
      },
    },
    computed:{
      pvt_r1c1:function(){
        return {
          closeIcon:{
            paraVarPair:{
            },
            para:{
            },
            attr:{
              isClick:true,
              label:'div',
              fontWeight:true,
              color:'#b4bac1',
              fontSize:'20px',
              icon:'el-icon-close',
            },
          },
        };
      },
      pvt_r2c1:function(){
        return {
          tipText:{
            paraVarPair:{
              textData:'tip',
            },
            para:{
              textData:this.tip,
            },
            attr:{
              label:'div',
              fontWeight:true,
              color:'#000',
              fontSize:'14px',
            },
          },
        };
      },
      pvt_r3c1:function(){
        return {
          btn1:{
            paraVarPair:{
            },
            para:{
              name:['确定'],
            },
            attr:{
              type:'primary',
              size:'small',
              width:'100px'
            },
          },
        };
      },
      pvt_r3c2:function(){
        return {
          btn2:{
            paraVarPair:{
            },
            para:{
              name:['取消'],
            },
            attr:{
              size:'small',
              width:'100px'
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
          successCallBack: successCallBack,
          errorCallBack: errorCallBack,
          nStep: 0
        }
        let dbFlag;

        if (successCallBack !== null) {
          errorCallBack = para;
          successCallBack = null;
        }
        para = errorCallBack;

        while (1) {
          dbFlag = 0;
          switch (para.nStep) {
            case 0:
              $this.mac = mac.mac;
              $this.type = $this.para.type;
              // 初始化数据
              $this.tip = null;
              if($this.type === 0){
                $this.tip = '确定删除该奖项？';
              }else if($this.type === 1){
                $this.tip = '确定删除该选项？';
              }else if($this.type === 2){
                $this.tip = '确定删除这些选项？';
              }else if($this.type === 3){
                $this.tip = '确定删除该用户？';
              }
              para.nStep = 'showModules';
              ++dbFlag;
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                'closeIcon','tipText','btn1','btn2'
              ];
              $this.showSubModule(refId, true, function () {
                para.nStep = 'forceUpdateData';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack,errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'forceUpdateData':
              $this.forceUpdateData(function () {
                para.nStep = 'startModule_icon';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              });
              break;
            case 'startModule_icon':
              //调用子组件的startModule
              $this.sm['closeIcon'].startModule(function () {
                para.nStep = 'startModule_text';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_text':
              //调用子组件的startModule
              $this.sm['tipText'].startModule(function () {
                para.nStep = 'startModule_btn1';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_btn1':
              //调用子组件的startModule
              $this.sm['btn1'].startModule(function () {
                para.nStep = 'startModule_btn2';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_btn2':
              //调用子组件的startModule
              $this.sm['btn2'].startModule(function () {
                para.nStep = 'end';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'end':
              para.successCallBack();
              return
          }
          if (++dbFlag === 1) {
            return
          }
        }
      },
      closeDialog:function(){
        let $this = this;
        $this.hideSelfModule($this.refId,function(){
        },function(error){console.log(error)});
      },
      defineButtonClick:function(){
        let $this = this;
        $this.hideSelfModule($this.refId,function(){
          $this.ep.confirmDeleteEvent();
        },function(error){console.log(error)});
      },
      closeIcon_textClickEvent:function(){
        this.closeDialog();
      },
      btn2_buttonClickEvent:function(){
        this.closeDialog();
      },
      btn1_buttonClickEvent:function(){
        this.defineButtonClick();
      },
    },
  };
</script>
<style lang="scss" scoped>
    .backMan_main_raffleS_deleteDia_container {
        width:100%;
        height:100%;
    }
    .backMan_main_raffleS_deleteDia_mask {
        display:flex;
        position:fixed;
        left:0;
        top:0;
        width:100vw;
        height:100vh;
        background-color:rgba(0,0,0,.4);
    }
    .backMan_main_raffleS_deleteDia_dialog {
        position:absolute;
        left:0;
        top:0;
    }
    .backMan_main_raffleS_deleteDia_overlay {
        position:absolute;
        left:0;
        top:0;
    }
    .backMan_main_raffleS_deleteDia_row {
        display:flex;
    }
    .backMan_main_raffleS_deleteDia_col {
        position:relative;
        display:flex;
        flex-direction:column;
        flex-wrap:nowrap;
    }
    .backMan_main_raffleS_deleteDia_col_backMan_main_raffleS_deleteDiaWi_size_medium {
        width:$backMan_main_raffleS_deleteDia-backMan_main_raffleS_deleteDiaWi-medium-width;
        height:$backMan_main_raffleS_deleteDia-backMan_main_raffleS_deleteDiaWi-medium-height;
        padding:$backMan_main_raffleS_deleteDia-backMan_main_raffleS_deleteDiaWi-medium-padding;
        box-sizing: border-box;
    }
    .backMan_main_raffleS_deleteDia_col_r1c1_size_medium {
        width:$backMan_main_raffleS_deleteDia-r1c1-medium-width;
        height:$backMan_main_raffleS_deleteDia-r1c1-medium-height;
        align-items:$backMan_main_raffleS_deleteDia-r1c1-medium-horizontal-position;
        line-height: 30px;
    }
    .backMan_main_raffleS_deleteDia_col_r2c1_size_medium {
        width:$backMan_main_raffleS_deleteDia-r2c1-medium-width;
        height:$backMan_main_raffleS_deleteDia-r2c1-medium-height;
        justify-content:$backMan_main_raffleS_deleteDia-r2c1-medium-vertical-position;
        align-items:$backMan_main_raffleS_deleteDia-r2c1-medium-horizontal-position;
    }
    .backMan_main_raffleS_deleteDia_col_r3c1_size_medium {
        width:$backMan_main_raffleS_deleteDia-r3c1-medium-width;
        height:$backMan_main_raffleS_deleteDia-r3c1-medium-height;
        align-items:$backMan_main_raffleS_deleteDia-r3c1-medium-horizontal-position;
        justify-content:$backMan_main_raffleS_deleteDia-r3c1-medium-vertical-position;
    }
    .backMan_main_raffleS_deleteDia_col_r3c2_size_medium {
        width:$backMan_main_raffleS_deleteDia-r3c2-medium-width;
        height:$backMan_main_raffleS_deleteDia-r3c2-medium-height;
        align-items:$backMan_main_raffleS_deleteDia-r3c2-medium-horizontal-position;
        justify-content:$backMan_main_raffleS_deleteDia-r3c2-medium-vertical-position;
    }
</style>