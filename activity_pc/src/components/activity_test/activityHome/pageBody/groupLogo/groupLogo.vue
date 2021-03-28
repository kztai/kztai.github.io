<template>
  <div class="groupLogo">
    <div class="row row1">
      <div class="col groupLogo_row1_col1">
        <logo-dialog ref="logoDia"
                     refId="logoDia"
                     v-show="pvt_isShow.v2 === 'logoDia'"
                     :paraVarPair="pvt_v2.logoDia.paraVarPair"
                     :para="pvt_v2.logoDia.para"
                     :attr="pvt_v2.logoDia.attr"></logo-dialog>
      </div>
    </div>
  </div>
</template>
<script>
  import libSys from '@/components/baseComponent/libSys.js';
  import libUpload from '@/components/baseComponent/libUpload.js';
  //引入子组件
  import LogoDialog from './logoDialog.vue';

  export default {
    name:'groupLogo',
    props:['refId','paraVarPair','para','attr','number'],
    inject:['sys'],
    components:{
      LogoDialog
    },
    data:function(){
      return {
        pvt_subModuleMap:{
          vessel:[
            "v2"
          ],
          subModule:[
            'logoDia'
          ]
        },
        pvt_isShow:{
          v2:null
        },
        pvt_eventPortInput:[
          'getSumEvent'
        ],
        // 用户定义的模块变量
        groupLogo:'',
        groupName:''
      }
    },
    computed:{
      pvt_v2:function(){
        return {
          logoDia:{
            paraVarPair:{},
            para:{
              groupLogo:this.groupLogo,
              groupName:this.groupName
            },
            attr:{}
          }
        }
      }
    },
    watch:{},
    mounted:function(){
      this.pvt_initSysData();
    },
    created:function(){
      Object.assign(this,libSys,libUpload);
    },
    methods:{
      startModule:function(successCallBack,errorCallBack){
        let $this = this;
        let para;
        let dbFlag;

        if(successCallBack !== null){
          errorCallBack = $this.setPara(successCallBack,errorCallBack);
          successCallBack = null;
        }
        para = errorCallBack;

        while(1){
          dbFlag = 0;
          switch(para.nStep){
            case 0:
              $this.groupLogo = '';
              $this.groupName = '';
              if($this.para.groupName){
                $this.groupName = $this.para.groupName;
              }
              if($this.para.groupLogo){
                $this.groupLogo = $this.para.groupLogo;
              }
              para.nStep = 'showModules';
              ++dbFlag;
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                "bcImage",
                'logoDia'
              ];
              $this.showSubModule(refId,true,function(){
                para.nStep = 'startSubModules';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startSubModules':
              //调用子组件startModule方法
              $this.startSubModules(function(){
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
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
      // 私有方法
      startSubModules(successCallBack,errorCallBack){
        let $this = this;
        let para = {
          successCallBack: successCallBack,
          errorCallBack: errorCallBack,
          nStep: 0
        }
        let dbFlag;
        let ref = {
          sm2:'logoDia'
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
                para.nStep = 'startModule_dia';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_dia':
              $this.sm[ref.sm2].startModule(function(){
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
      setPara:function(successCallBack,errorCallBack){
        var para = {};
        para.successCallBack = successCallBack;
        para.errorCallBack = errorCallBack;
        para.nStep = 0;
        return para;
      },
      // 子组件发出事件
      logoDia_getSumEvent(successCallBack,errorCallBack){
        this.ep.getSumEvent(successCallBack,errorCallBack);
      },
    }
  }
</script>
<style lang="scss" scoped>
  .groupLogo{
    width:100%;
    height:288px;
    display:grid;
    grid-template-columns:100%;
    grid-template-rows:100%;
  }
  .row{}
  .col{
    display:inline-block;
    box-sizing:border-box;
    vertical-align:middle;
  }
  .groupLogo_row1_col1{
    width:100%;
    height:100%;
    background:url('../../../../../assets/bcg.jpg') no-repeat top center;
    background-size:cover;
    background-attachment:fixed;
    padding:50px calc(50% - 65px) 38px calc(50% - 65px);
  }
</style>
