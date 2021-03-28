<template>
  <div class="pageBody">
    <div class="row row1">
      <div class="col pageBody_row1_col1">
        <group-logo ref="groupLogo"
                    refId="groupLogo"
                    v-show="pvt_isShow.v1 === 'groupLogo'"
                    :paraVarPair="pvt_v1.groupLogo.paraVarPair"
                    :para="pvt_v1.groupLogo.para"
                    :attr="pvt_v1.groupLogo.attr">
        </group-logo>
      </div>
    </div>
    <div class="row row2">
      <div class="col pageBody_row2_col1">
        <div class="row row2_1">
          <div class="col pageBody_row2_1_col1">
            <activity-list ref="activityList"
                           refId="activityList"
                           v-show="pvt_isShow.v2 === 'activityList'"
                           :paraVarPair="pvt_v2.activityList.paraVarPair"
                           :para="pvt_v2.activityList.para"
                           :attr="pvt_v2.activityList.attr">
            </activity-list>
          </div>
          <div class="col pageBody_row2_1_col2">
            <group-abstract ref="groupAbstract"
                           refId="groupAbstract"
                           v-show="pvt_isShow.v3 === 'groupAbstract'"
                           :paraVarPair="pvt_v3.groupAbstract.paraVarPair"
                           :para="pvt_v3.groupAbstract.para"
                           :attr="pvt_v3.groupAbstract.attr">
            </group-abstract>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import libSys from '@/components/baseComponent/libSys.js';
  import libUpload from '@/components/baseComponent/libUpload.js';

  //引入子组件
  import GroupLogo from './groupLogo/groupLogo.vue';
  import ActivityList from './activityList/activityList.vue';
  import GroupAbstract from './groupAbstract/groupAbstract.vue';

  export default {
    name:'pageBody',
    props:['refId','paraVarPair','para','attr','number'],
    inject:['sys'],
    components:{
      GroupLogo,
      ActivityList,
      GroupAbstract
    },
    data:function(){
      return {
        pvt_subModuleMap:{
          vessel:[
            "v1",
            "v2",
            "v3"
          ],
          subModule:[
            "groupLogo",
            "activityList",
            "groupAbstract"
          ]
        },
        pvt_isShow:{
          v1:null,
          v2:null,
          v3:null
        },
        pvt_eventPortInput:[
          'getSumEvent',
          'detailPageEvent'
        ],
        // 用户定义的模块变量
        groupId:null,
        groupName:'',
        groupLogo:'',
        groupAbstract:'',
        keyWord:''
      }
    },
    computed:{
      pvt_v1:function(){
        return {
          groupLogo:{
            paraVarPair:{},
            para:{
              groupName:this.groupName,
              groupLogo:this.groupLogo
            },
            attr:{}
          }
        }
      },
      pvt_v2:function(){
        return {
          activityList:{
            paraVarPair:{},
            para:{
              groupId:this.groupId,
              groupName:this.groupName,
              keyWord:this.keyWord
            },
            attr:{}
          }
        }
      },
      pvt_v3:function(){
        return {
          groupAbstract:{
            paraVarPair:{},
            para:{
              groupName:this.groupName,
              groupAbstract:this.groupAbstract
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
              $this.groupId = null;
              $this.groupName = '';
              $this.groupLogo = '';
              $this.groupAbstract = '';
              $this.keyWord = '';
              if($this.para.groupId){
                $this.groupId = $this.para.groupId;
              }
              if($this.para.groupName){
                $this.groupName = $this.para.groupName;
              }
              if($this.para.groupLogo){
                $this.groupLogo = $this.para.groupLogo;
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
                "groupLogo",
                "activityList",
                "groupAbstract"
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
      // 公开方法
      listRefresh(key){
        let $this = this;
        $this.keyWord = key;
        $this.forceUpdateData(function(){
          $this.sm['activityList'].startModule(function(){
          },function(error){console.log(error)});
        });
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
          sm1:"groupLogo",
          sm2:"activityList",
          sm3:"groupAbstract"
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
                para.nStep = 'startModule_logo';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_logo':
              $this.sm[ref.sm1].startModule(function(){
                para.nStep = 'startModule_list';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_list':
              $this.sm[ref.sm2].startModule(function(){
                para.nStep = 'startModule_abstract';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_abstract':
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
      groupLogo_getSumEvent(successCallBack,errorCallBack){
        this.ep.getSumEvent(successCallBack,errorCallBack);
      },
      activityList_detailPageEvent(id){
        this.ep.detailPageEvent(id);
      },
    }
  }
</script>
<style lang="scss" scoped>
  .pageBody{
    width:100%;
    height:100%;
    padding:12px 0 0 0;
    background:#F4F4F4;
    text-align:center;
  }
  .row{}
  .col{
    display:inline-block;
    box-sizing:border-box;
    vertical-align:middle;
  }
  .pageBody_row1_col1{
    width:100%;
    height:288px;
  }
  .row2{
  }
  .pageBody_row2_col1{
    width:100%;
    height:auto;
    max-width:1300px;
    margin:0 auto;
    padding:20px 20px 32px 20px;
  }
  .pageBody_row2_1_col1{
    width:calc(100% - 288px);
    padding:0 16px 0 0;
  }
  .pageBody_row2_1_col2{
    width:288px;
    vertical-align:top;
  }
</style>
