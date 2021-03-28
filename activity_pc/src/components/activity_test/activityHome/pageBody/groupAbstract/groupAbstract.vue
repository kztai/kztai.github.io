<template>
  <div class="groupAbstract">
    <div class="row row1">
      <div class="col groupAbstract_row1_col1">
        <div class="row row1_1">
          <div class="col groupAbstract_row1_1_col1">
            <lm-link-text ref="abstractLabel"
                          refId="abstractLabel"
                          v-show="pvt_isShow.v1 === 'abstractLabel'"
                          :paraVarPair="pvt_v1.abstractLabel.paraVarPair"
                          :para="pvt_v1.abstractLabel.para"
                          :attr="pvt_v1.abstractLabel.attr">
            </lm-link-text>
          </div>
        </div>
        <div class="row row1_2">
          <div class="col groupAbstract_row1_2_col1">
            <lm-link-text ref="groupAbstract"
                          refId="groupAbstract"
                          v-show="pvt_isShow.v2 === 'groupAbstract'"
                          :paraVarPair="pvt_v2.groupAbstract.paraVarPair"
                          :para="pvt_v2.groupAbstract.para"
                          :attr="pvt_v2.groupAbstract.attr">
            </lm-link-text>
          </div>
        </div>
      </div>
    </div>
    <div class="row row2">
      <div class="col groupAbstract_row2_col1">
        <lm-image ref="adImage"
                      refId="adImage"
                      v-show="pvt_isShow.v3 === 'adImage'"
                      :paraVarPair="pvt_v3.adImage.paraVarPair"
                      :para="pvt_v3.adImage.para"
                      :attr="pvt_v3.adImage.attr">
        </lm-image>
      </div>
    </div>
  </div>
</template>
<script>
  import libSys from '@/components/baseComponent/libSys.js';
  import libUpload from '@/components/baseComponent/libUpload.js';

  export default {
    name:'groupAbstract',
    props:['refId','paraVarPair','para','attr','number'],
    inject:['sys'],
    components:{},
    data:function(){
      return {
        pvt_subModuleMap:{
          vessel:[
            "v1","v2",
            'v3'
          ],
          subModule:[
            "abstractLabel",'groupAbstract',
            'adImage'
          ]
        },
        pvt_isShow:{
          v1:null,v2:null,
          v3:null
        },
        pvt_eventPortInput:[],
        // 用户定义的模块变量
        groupName:'',
        groupAbstract:''
      }
    },
    computed:{
      pvt_v1:function(){
        return {
          abstractLabel:{
            paraVarPair:{},
            para:{
              textData:this.groupName + '的简介'
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontSize:'14px',
              fontWeight:true,
              height:'40px'
            }
          }
        }
      },
      pvt_v2:function(){
        return {
          groupAbstract:{
            paraVarPair:{},
            para:{
              textData:this.groupAbstract
            },
            attr:{
              label:'p',
              textAlign:'left',
              fontSize:'12px',
              height:'30px'
            }
          }
        }
      },
      pvt_v3:function(){
        return {
          adImage:{
            paraVarPair:{},
            para:{
              image:[{
                $table:'groupActivity',
                $arrField:['poster'],
                $arrValue:[1]
              }]
            },
            attr:{
              fit:'fill'
            }
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
              $this.groupName = '';
              $this.groupAbstract = '';
              if($this.para.groupName){
                $this.groupName = $this.para.groupName;
              }
              if($this.para.groupAbstract){
                $this.groupAbstract = $this.para.groupAbstract;
              }
              para.nStep = 'showModules';
              ++dbFlag;
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                "abstractLabel",'groupAbstract',
                'adImage'
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
          sm1:"abstractLabel",sm2:'groupAbstract',
          sm3:'adImage'
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
                para.nStep = 'startModule_label';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_label':
              $this.sm[ref.sm1].startModule(function(){
                para.nStep = 'startModule_abstract';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_abstract':
              $this.sm[ref.sm2].startModule(function(){
                para.nStep = 'startModule_image';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_image':
              $this.sm[ref.sm3].startModule(function(){
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
  .groupAbstract{
    width:100%;
    height:100%;
    color:#303133;
  }
  .row{}
  .col{
    display:inline-block;
    box-sizing:border-box;
    vertical-align:middle;
  }
  .groupAbstract_row1_col1{
    width:100%;
    background:#fff;
    border-radius:4px;
    margin:0 0 16px 0;
  }
  .groupAbstract_row1_1_col1{
    width:100%;
    height:40px;
    padding:0 0 0 16px;
    border-color:#F5F5F5;
    border-style:solid;
    border-width:0 0 1px 0;
  }
  .groupAbstract_row1_2_col1{
    width:100%;
    padding:0 20px 0 16px;
    margin:0 0 10px 0;
  }
  .groupAbstract_row2_col1{
    width:100%;
    height:160px;
    border-radius:4px;
    overflow:hidden;
    display:grid;
    grid-template-rows:100%;
  }
</style>
