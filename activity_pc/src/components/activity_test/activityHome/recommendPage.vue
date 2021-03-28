<template>
  <div class="recommendPage">
    <div class="row row1">
      <div class="col recommendPage_row1_col1">
        <page-header ref="smHeader"
                     refId="smHeader"
                     v-show="pvt_isShow.wHeader === 'smHeader'"
                     :paraVarPair="pvt_wHeader.smHeader.paraVarPair"
                     :para="pvt_wHeader.smHeader.para"
                     :attr="pvt_wHeader.smHeader.attr"></page-header>
      </div>
    </div>
    <div class="row row2">
      <div class="col recommendPage_row2_col1">
        <page-body ref="smBody"
                     refId="smBody"
                     v-show="pvt_isShow.wBody === 'smBody'"
                     :paraVarPair="pvt_wBody.smBody.paraVarPair"
                     :para="pvt_wBody.smBody.para"
                     :attr="pvt_wBody.smBody.attr"></page-body>
      </div>
    </div>
    <div class="row row3">
      <div class="col recommendPage_row3_col1">
        <page-footer ref="smFooter"
                     refId="smFooter"
                     v-show="pvt_isShow.wFooter === 'smFooter'"
                     :paraVarPair="pvt_wFooter.smFooter.paraVarPair"
                     :para="pvt_wFooter.smFooter.para"
                     :attr="pvt_wFooter.smFooter.attr"></page-footer>
      </div>
    </div>
  </div>
</template>
<script>
  import libSys from '@/components/baseComponent/libSys.js';
  import libUpload from '@/components/baseComponent/libUpload.js';
  //引入子组件
  import PageHeader from './pageHeader/header.vue';
  import PageBody from './pageBody/body.vue';
  import PageFooter from './pageFoot/footer.vue';

  export default {
    name:'recommendPage',
    props:['refId'],
    provide:function(){
      return {
        sys:this.sys
      }
    },
    components:{
      PageHeader,
      PageBody,
      PageFooter
    },
    data:function(){
      return {
        sys:{
          api:null,
          lib:null
        },
        // 工具内部变量
        // 因为不对外公开，为免和用户定义变量冲突，内部变量以pvt_开头
        // 子模块与所属容器的对应关系
        pvt_subModuleMap:{
          subModule:[
            'smHeader',
            'smBody',
            'smFooter'
          ],
          vessel:[
            'wHeader',
            'wBody',
            'wFooter'
          ]
        },
        // 各容器中模块显示状态；显示隐藏某组件，只需要修改这里的值
        pvt_isShow:{
          wHeader:null,
          wBody:null,
          wFooter:null
        },
        pvt_eventPortInput:[
          'getSumEvent',
          'listPageEvent',
          'detailPageEvent'
        ],
        // 某个组织的活动列表页
        groupId:null,
        userName:'',
        websiteGroupInfo:{
          name:'',
          logo:''
        },
        sponsorGroupInfo:{
          name:'',
          logo:'',
          abstract:''
        }
      }
    },
    computed:{
      pvt_wHeader:function(){
        return {
          smHeader:{
            paraVarPair:{},
            para:{
              groupName:this.websiteGroupInfo.name,
              groupLogo:this.websiteGroupInfo.logo,
              userName:this.userName
            },
            attr:{}
          }
        }
      },
      pvt_wBody:function(){
        return {
          smBody:{
            paraVarPair:{},
            para:{
              groupId:this.groupId,
              groupName:this.sponsorGroupInfo.name,
              groupLogo:this.sponsorGroupInfo.logo,
              groupAbstract:this.sponsorGroupInfo.abstract
            },
            attr:{}
          }
        }
      },
      pvt_wFooter:function(){
        return {
          smFooter:{
            paraVarPair:{},
            para:{},
            attr:{}
          }
        }
      }
    },
    watch:{},
    created:function(){
      Object.assign(this,libSys,libUpload);
      this.sys.lib = Object.assign({},libSys,libUpload);
    },
    mounted:function(){
      this.pvt_initSysData();
    },
    methods:{
      startModule:function(api,groupId,successCallBack,errorCallBack){
        let $this = this;
        let para;
        let dbFlag;
        let fnName = 'recommendedPage.startModule';

        if(successCallBack !== null){
          errorCallBack = $this.setPara(successCallBack,errorCallBack);
          successCallBack = null;
        }
        para = errorCallBack;

        while(1){
          if($this.debugFlag_szl){
            console.log('【SZL】' + fnName + ': para.nStep = ' + para.nStep);
          }
          dbFlag = 0;
          switch(para.nStep){
            case 0:
              if(api){
                $this.sys.api = api;
              }
              $this.groupId = null;
              $this.userName = '';
              $this.websiteGroupInfo = {
                name:'瓴码',
                logo:'data:image/png;base64,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'
              };
              if(groupId){
                $this.groupId = groupId;
                $this.sponsorGroupInfo = {
                  name:'雅达利游戏机',
                  abstract:'雅达利游戏机是一家产品文档和设计图的共享平台,帮助互联网团队更好地管理文档和设计图。瓴码可以在线展示Axure,自动生成设计图标注,与团队共享设计图,展示页面之间的跳转关系...',
                  logo:'data:image/png;base64,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'
                };
              }
              if($this.getCookie('userType') === 0){
                $this.userName = $this.getCookie('userName');
              };
              para.nStep = 'showModules';
              ++dbFlag;
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                'smHeader',
                'smBody',
                'smFooter'
              ];
              $this.showSubModule(refId,true,function(){
                para.nStep = 'startSubModules';
                if(++dbFlag === 2){
                  $this.startModule(api,groupId,successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startSubModules':
              $this.startSubModules(function(){
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.startModule(api,groupId,successCallBack,errorCallBack);
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
      //私有方法
      getCookie:function(value){
        if(value === 'userType'){
          // 0表示普通用户，1表示游客
          return 0;
        }else if(value === 'userID'){
          return 1;
        }else if(value === 'userLogoutGeneSite'){
          return 'http://logout.com';
        }else if(value === 'userLoginGeneSite'){
          return 'http://login.com';
        }else if(value === 'userName'){
          return '深圳瓴码APP';
        }
      },
      startSubModules(successCallBack,errorCallBack){
        let $this = this;
        let para = {
          successCallBack:successCallBack,
          errorCallBack:errorCallBack,
          nStep: 0
        }
        let dbFlag;
        let ref = {
          sm1:'smHeader',
          sm2:'smBody',
          sm3:'smFooter'
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
                para.nStep = 'startModule_header';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_header':
              $this.sm[ref.sm1].startModule(function(){
                para.nStep = 'startModule_body';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_body':
              $this.sm[ref.sm2].startModule(function(){
                para.nStep = 'startModule_footer';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_footer':
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
        let para = {};
        para.successCallBack = successCallBack;
        para.errorCallBack = errorCallBack;
        para.nStep = 0;
        return para;
      },
      // 子组件发出事件
      smHeader_listPageEvent(id){
        this.ep.listPageEvent(id);
      },
      smHeader_keySearchEvent(key){
        this.sm['smBody'].listRefresh(key);
        console.log('调用活动刷新方法，关键词为' + key);
      },
      smBody_getSumEvent(successCallBack,errorCallBack){
        this.ep.getSumEvent(successCallBack,errorCallBack);
      },
      smBody_detailPageEvent(id){
        this.ep.detailPageEvent(id);
      },
    }
  }
</script>
<style lang="scss">
  .recommendPage{
    /*font-family:'Avenir',Helvetica,Arial,sans-serif;*/
    font-family:Source Han Sans CN;
    -webkit-font-smoothing:antialiased;
    -moz-osx-font-smoothing:grayscale;
    color:#2c3e50;
    position:absolute;
    top:0;
    bottom:0;
    left:0;
    right:0;
    display:grid;
    grid-template-rows:76px 1fr 116px;
    grid-template-columns:100%;

    .el-image{
      width:100%;
      height:100%;
    }
    #image-wrap{
      width:100%;
      height:100%;
    }
    .link-status.link-text:hover {
      border-bottom: 0;
    }
  }
  .recommendPage_row1_col1{
    width:100%;
    height:100%;
  }
  .recommendPage_row2_col1{
    width:100%;
    height:100%;
  }
  .recommendPage_row3_col1{
    width:100%;
    height:100%;
  }
</style>
