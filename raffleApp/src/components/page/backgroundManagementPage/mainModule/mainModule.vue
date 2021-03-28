<template>
    <div v-show="pvt_win.isShow.backMan_mainWindow"
         :class="{backMan_main_container:true,backMan_main_col:true,backMan_main_col_backMan_mainWindow:true,backMan_main_col_backMan_mainWindow_size_large:attr.size==='large',backMan_main_col_backMan_mainWindow_size_medium:attr.size==='medium',backMan_main_col_backMan_mainWindow_size_small:attr.size==='small',backMan_main_col_backMan_mainWindow_size_min:attr.size==='min',backMan_main_col_backMan_mainWindow_checked:pvt_win.isChecked.backMan_mainWindow,backMan_main_col_backMan_mainWindow_disable:attr.disabled}"
         :style="pvt_win.style.backMan_mainWindow" >

        <div class="backMan_main_row backMan_main_row_row0">
            <div v-show="pvt_win.isShow.r1c1"
                 :class="{backMan_main_col:true,backMan_main_col_r1c1:true,backMan_main_col_r1c1_size_large:attr.size==='large',backMan_main_col_r1c1_size_medium:attr.size==='medium',backMan_main_col_r1c1_size_small:attr.size==='small',backMan_main_col_r1c1_size_min:attr.size==='min',backMan_main_col_r1c1_checked:pvt_win.isChecked.r1c1,backMan_main_col_r1c1_disable:attr.disabled}"
                 :style="pvt_win.style.r1c1" >

                <lm1a-list
                        ref="smList"
                        refId="smList"
                        v-show="pvt_isShow.r1c1 === 'smList'"
                        :paraVarPair="pvt_r1c1.smList.paraVarPair"
                        :para="pvt_r1c1.smList.para"
                        :attr="pvt_r1c1.smList.attr">
                </lm1a-list>
            </div>
            <div v-show="pvt_win.isShow.r1c2"
                 :class="{backMan_main_col:true,backMan_main_col_r1c2:true,backMan_main_col_r1c2_size_large:attr.size==='large',backMan_main_col_r1c2_size_medium:attr.size==='medium',backMan_main_col_r1c2_size_small:attr.size==='small',backMan_main_col_r1c2_size_min:attr.size==='min',backMan_main_col_r1c2_checked:pvt_win.isChecked.r1c2,backMan_main_col_r1c2_disable:attr.disabled}"
                 :style="pvt_win.style.r1c2" >

                <back-man_main_raffle-supervise
                        ref="raffleModule"
                        refId="raffleModule"
                        v-show="pvt_isShow.r1c2 === 'raffleModule'"
                        :paraVarPair="pvt_r1c2.raffleModule.paraVarPair"
                        :para="pvt_r1c2.raffleModule.para"
                        :attr="pvt_r1c2.raffleModule.attr">
                </back-man_main_raffle-supervise>
                <back-man_main_customer-manage
                        ref="customerMan"
                        refId="customerMan"
                        v-show="pvt_isShow.r1c2 === 'customerMan'"
                        :paraVarPair="pvt_r1c2.customerMan.paraVarPair"
                        :para="pvt_r1c2.customerMan.para"
                        :attr="pvt_r1c2.customerMan.attr">
                </back-man_main_customer-manage>
            </div>
        </div>

    </div>
</template>
<script>
  import libSys from '@/components/baseComponent/libSys.js';
  import libUpload from '@/components/baseComponent/libUpload.js';
  import backMan_main_raffleSupervise from './raffleSupervise/raffleSupervise.vue';
  import backMan_main_customerManage from './customerManage/customerManage.vue';
  export default {
    components: {backMan_main_raffleSupervise,backMan_main_customerManage},
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
      number: Number,
    },
    data: function() {
      return {
          mac: mac.mac,
        pvt_subModuleMap: {
          vessel:['r1c1','r1c2','r1c2'],
          subModule:['smList','raffleModule','customerMan'],
        },
        pvt_isShow: {
          r1c1:null,
          r1c2:null,
        },
        pvt_win:{
          isShow:{
            backMan_mainWindow:true,
            r1c1:true,
            r1c2:true,
          },
          isChecked:{
            backMan_mainWindow:false,
            r1c1:false,
            r1c2:false,
          },
          style:{
            backMan_mainWindow:null,
            r1c1:null,
            r1c2:null,
          },
        },
        pvt_eventPortInput: ['inviteEvent'],

        checkedIndex:0,
      };
    },
    watch: {
    },
    computed:{
      pvt_r1c1:function(){
        return {
          smList:{
            paraVarPair:{
            },
            para:{
              listData:[{name:'抽奖管理',icon:'el-icon-s-finance'},{name:'签到管理',icon:'el-icon-s-claim'}],
            },
            attr:{
              cursorIsShow:true,
              checked:this.checkedIndex,
              iconFontSize:'24px',
            },
          },
        };
      },
      pvt_r1c2:function(){
        return {
          raffleModule:{
            paraVarPair:{
            },
            para:{
            },
            attr:{
              size:'medium',
            },
          },
          customerMan:{
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
              // 初始化数据
              $this.checkedIndex = 0;
              $this.activeModule = [];
              para.nStep = 'showModules';
              ++dbFlag;
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                'smList'
              ];
              if($this.checkedIndex === 1){
                refId.push('customerMan');
                $this.activeModule.push('customerMan');
              }else{
                refId.push('raffleModule');
                $this.activeModule.push('raffleModule');
              }
              $this.showSubModule(refId, true, function () {
                para.nStep = 'forceUpdateData';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack,errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'forceUpdateData':
              $this.forceUpdateData(function () {
                para.nStep = 'startModule_list';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              });
              break;
            case 'startModule_list':
              //调用子组件的startModule
              $this.sm['smList'].startModule(function () {
                if($this.checkedIndex === 1){
                  para.nStep = 'startModule_customer';
                }else{
                  para.nStep = 'startModule_raffle';
                }
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_raffle':
              //调用子组件的startModule
              $this.sm['raffleModule'].startModule(function () {
                para.nStep = 'end';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_customer':
              //调用子组件的startModule
              $this.sm['customerMan'].startModule(function () {
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
      listChange:function(id,name){
        let $this = this;
        $this.checkedIndex = id;
        let refId;
        if($this.checkedIndex === 1){
          refId = 'customerMan';
        }else{
          refId = 'raffleModule';
        }
        $this.showSubModule(refId, true, function () {
          if($this.activeModule.indexOf(refId) === -1){
            $this.sm[refId].startModule(function () {
              $this.activeModule.push(refId);
            },function(error){console.log(error)});
          }
        },function(error){console.log(error)});
      },
      smList_itemClickEvent:function(id,name){
        this.listChange(id,name);
      },
      customerMan_inviteEvent:function(mobile,content,successCallBack,errorCallBack){
        this.ep.inviteEvent(mobile,content,successCallBack,errorCallBack);
      },
    },
  };
</script>
<style lang="scss" scoped>
    .backMan_main_container {
        width:100%;
        height:100%;
    }
    .backMan_main_mask {
        display:flex;
        position:fixed;
        left:0;
        top:0;
        width:100vw;
        height:100vh;
        background-color:rgba(0,0,0,.4);
    }
    .backMan_main_dialog {
        position:absolute;
        left:0;
        top:0;
    }
    .backMan_main_overlay {
        position:absolute;
        left:0;
        top:0;
    }
    .backMan_main_row {
        display:flex;
    }
    .backMan_main_col {
        position:relative;
        display:flex;
        flex-direction:column;
        flex-wrap:nowrap;
    }
    .backMan_main_col_backMan_mainWindow_size_medium {
        width:$backMan_main-backMan_mainWindow-medium-width;
        padding:$backMan_main-backMan_mainWindow-medium-padding;
        height: 100%;
        box-sizing: border-box;
    }
    .backMan_main_col_backMan_mainWindow {
        background-color: #F5F7FA;
    }
    .backMan_main_row_row0{
        height: 100%;
    }
    .backMan_main_col_r1c1_size_medium {
        width:$backMan_main-r1c1-medium-width;
        height:$backMan_main-r1c1-medium-height;
        box-sizing: border-box;
    }
    .backMan_main_col_r1c1 {
        border-style:$backMan_main-r1c1-border-style;
        border-width:$backMan_main-r1c1-border-width;
        border-color: #e6ebf1;
        background-color: #FFFFFF;
        border-radius:4px;
        overflow: hidden;
    }
    .backMan_main_col_r1c2_size_medium {
        /*width:auto;*/
        width:calc(100% - 180px);
        flex-grow: 1;
        margin: 0 0 0 15px;
        box-sizing: border-box;
        overflow: hidden;
    }
    .backMan_main_col_r1c2 {
        border-style: solid;
        border-width: 1px;
        border-color: #e6ebf1;
        border-radius:4px;
        overflow: hidden;
        background-color: #FFFFFF;
    }
</style>
