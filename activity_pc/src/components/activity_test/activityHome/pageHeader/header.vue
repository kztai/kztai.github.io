<template>
  <div class="pageHeader">
    <div class="row row1">
      <div class="col pageHeader_row1_col1">
        <div class="row row1_1">
          <div class="col pageHeader_row1_1_col1">
            <lm-image ref="logoImage"
                      refId="logoImage"
                      v-show="pvt_isShow.v1 === 'logoImage'"
                      :paraVarPair="pvt_v1.logoImage.paraVarPair"
                      :para="pvt_v1.logoImage.para"
                      :attr="pvt_v1.logoImage.attr">
            </lm-image>
          </div>
          <div class="col pageHeader_row1_1_col2">
            <lm-link-text ref="nameText"
                          refId="nameText"
                          v-show="pvt_isShow.v2 === 'nameText'"
                          :paraVarPair="pvt_v2.nameText.paraVarPair"
                          :para="pvt_v2.nameText.para"
                          :attr="pvt_v2.nameText.attr">
            </lm-link-text>
          </div>
          <div class="col pageHeader_row1_1_col21">
            <lm-link-text ref="homePageText"
                          refId="homePageText"
                          v-show="pvt_isShow.vHome === 'homePageText'"
                          :paraVarPair="pvt_vHome.homePageText.paraVarPair"
                          :para="pvt_vHome.homePageText.para"
                          :attr="pvt_vHome.homePageText.attr">
            </lm-link-text>
          </div>
          <div class="col pageHeader_row1_1_col3">
            <lm-dropdown ref="pagesDropDown"
                         refId="pagesDropDown"
                         v-show="pvt_isShow.v3 === 'pagesDropDown'"
                         :paraVarPair="pvt_v3.pagesDropDown.paraVarPair"
                         :para="pvt_v3.pagesDropDown.para"
                         :attr="pvt_v3.pagesDropDown.attr">
            </lm-dropdown>
          </div>
          <div class="col pageHeader_row1_1_col4">
            <lm-input-text ref="keyInput"
                           refId="keyInput"
                           v-show="pvt_isShow.v4 === 'keyInput'"
                           :paraVarPair="pvt_v4.keyInput.paraVarPair"
                           :para="pvt_v4.keyInput.para"
                           :attr="pvt_v4.keyInput.attr">
            </lm-input-text>
          </div>
          <div class="col pageHeader_row1_1_col5">
            <lm-button ref="searchButton"
                       refId="searchButton"
                       v-show="pvt_isShow.v5 === 'searchButton'"
                       :paraVarPair="pvt_v5.searchButton.paraVarPair"
                       :para="pvt_v5.searchButton.para"
                       :attr="pvt_v5.searchButton.attr">
            </lm-button>
          </div>
          <div class="col pageHeader_row1_1_col6">
            <lm-dropdown ref="userDropDown"
                         refId="userDropDown"
                         v-show="pvt_isShow.v6 === 'userDropDown'"
                         :paraVarPair="pvt_v6.userDropDown.paraVarPair"
                         :para="pvt_v6.userDropDown.para"
                         :attr="pvt_v6.userDropDown.attr">
            </lm-dropdown>
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
    name:'pageHeader',
    props:['refId','paraVarPair','para','attr','number'],
    inject:['sys'],
    components:{},
    data:function(){
      return {
        pvt_subModuleMap:{
          vessel:[
            "v1","v2",
            "vHome",
            "v3",
            "v4","v5",
            "v6"
          ],
          subModule:[
            "logoImage","nameText",
            "homePageText",
            "pagesDropDown",
            "keyInput","searchButton",
            "userDropDown"
          ]
        },
        pvt_isShow:{
          v1:null,
          v2:null,
          vHome:null,
          v3:null,
          v4:null,
          v5:null,
          v6:null
        },
        pvt_eventPortInput:[
          'refreshEvent',
          'listPageEvent',
          'keySearchEvent'
        ],
        // 用户定义的模块变量
        groupLogo:'',
        groupName:'',
        keyword:'',
        userName:''
      }
    },
    computed:{
      pvt_v1:function(){
        return {
          logoImage:{
            paraVarPair:{},
            para:{
              image:[this.groupLogo]
            },
            attr:{
              fit:'fill'
            }
          }
        }
      },
      pvt_v2:function(){
        return {
          nameText:{
            paraVarPair:{},
            para:{
              textData:this.groupName
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontSize:'18px',
              fontWeight:true,
              indent:false,
              height:'76px',
              color:'#fff',
              isClick:true
            }
          }
        }
      },
      pvt_vHome:function(){
        return {
          homePageText:{
            paraVarPair:{},
            para:{
              textData:'首页'
            },
            attr:{
              label:'div',
              textAlign:'center',
              fontSize:'15px',
              fontWeight:false,
              indent:false,
              height:'76px',
              color:'#fff',
              isClick:true
            }
          }
        }
      },
      pvt_v3:function(){
        return {
          pagesDropDown:{
            paraVarPair:{},
            para:{
              dropDown:[
                {id:0,label:'我的订单',icon:'',disable:false},
                {id:1,label:'我的收藏',icon:'',disable:false}
              ]
            },
            attr:{
              menuName:'我的'
            }
          }
        }
      },
      pvt_v4:function(){
        return {
          keyInput:{
            paraVarPair:{},
            para:{
              text:this.keyword
            },
            attr:{
              placeholder:'请输入关键词进行搜索',
              prefixIcon:'el-icon-search',
              size:'large'
            }
          }
        }
      },
      pvt_v5:function(){
        return {
          searchButton:{
            paraVarPair:{},
            para:{
              name:['搜索']
            },
            attr:{
              type:'primary',
              width:'70px',
              height:'40px'
            }
          }
        }
      },
      pvt_v6:function(){
        return {
          userDropDown:{
            paraVarPair:{},
            para:{
              dropDown:[
                {id:1,label:this.userName?'退出登录':'用户登录',icon:'',disable:false}
              ]
            },
            attr:{
              menuName:this.userName?this.userName:'游客'
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
              $this.groupLogo = '';
              $this.groupName = '';
              $this.keyword = '';
              $this.userName = null;
              if($this.para.groupName){
                $this.groupName = $this.para.groupName;
              }
              if($this.para.groupLogo){
                $this.groupLogo = $this.para.groupLogo;
              }
              if($this.para.userName){
                $this.userName = $this.para.userName;
              }
              ++dbFlag;
              para.nStep = 'showModules';
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                "logoImage","nameText",'homePageText',
                "keyInput","searchButton",
                "userDropDown"
              ];
              if($this.userName){
                refId.push("pagesDropDown");
              }
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
      keyInputBlur(value){
        this.keyword = value;
      },
      searchButtonClick(){
        this.ep.keySearchEvent(this.keyword);
      },
      logEvent(){
        if(this.userName){
          console.log('用户' + this.userName + ',退出登录');
        }else{
          console.log('跳转至登录页面');
        }
      },
      getInHomePage(){
        console.log('跳转至网站主页面');
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
          sm1:"logoImage",sm2:"nameText",sm7:"homePageText",
          sm3:"pagesDropDown",
          sm4:"keyInput",sm5:"searchButton",
          sm6:"userDropDown"
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
                para.nStep = 'startModule_name';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_name':
              $this.sm[ref.sm2].startModule(function(){
                para.nStep = 'startModule_dropDown';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_dropDown':
              $this.sm[ref.sm3].startModule(function(){
                para.nStep = 'startModule_input';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_input':
              $this.sm[ref.sm4].startModule(function(){
                para.nStep = 'startModule_button';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_button':
              $this.sm[ref.sm5].startModule(function(){
                para.nStep = 'startModule_userDrop';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_userDrop':
              $this.sm[ref.sm6].startModule(function(){
                para.nStep = 'startModule_homePage';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_homePage':
              $this.sm[ref.sm7].startModule(function(){
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
      logoImage_clickEvent(){
        this.getInHomePage();
      },
      nameText_textClickEvent(){
        this.getInHomePage();
      },
      homePageText_textClickEvent(){
        this.getInHomePage();
      },
      pagesDropDown_itemClickEvent(id){
        this.ep.listPageEvent(id);
      },
      keyInput_dataModifyEvent(value){
        this.keyInputBlur(value);
      },
      searchButton_buttonClickEvent(){
        this.searchButtonClick();
      },
      userDropDown_itemClickEvent(id){
        this.logEvent(id);
      },
    }
  }
</script>
<style lang="scss">
  .pageHeader{
    .link-status.link-text:hover {
      color: #fff!important;
    }
    .dropdown-component{
      height:40px;
      line-height:40px;
      margin:auto;
      background:#4F4B9A;
      .el-dropdown{
        width:100%;
        height:40px;
        text-align:center;
        line-height:40px;
        color:#fff;
      }
      .el-dropdown-link{
        color:#ffffff;
        vertical-align:middle;
        text-overflow:ellipsis;
      }
      i{
        color:#ffffff;
      }
    }
  }
</style>
<style lang="scss" scoped>
  .pageHeader{
    position:fixed;
    top:0;
    width:100%;
    height:76px;
    box-sizing:border-box;
    overflow:hidden;
    background:#2d2887;
    text-align:center;
    z-index:200;
  }
  .row{}
  .col{
    display:inline-block;
    box-sizing:border-box;
    vertical-align:middle;
  }
  .pageHeader_row1_col1{
    width:100%;
    height:100%;
    max-width:1300px;
    margin:0 auto;
  }
  .pageHeader_row1_1_col1{
    width:60px;
    height:76px;
    padding:16px 0;
    line-height:76px;
    float:left;
  }
  .pageHeader_row1_1_col2{
    width:40px;
    height:76px;
    text-align:left;
    float:left;
  }
  .pageHeader_row1_1_col21{
    width:calc(50% - 300px);
    height:76px;
    overflow:hidden;
    float:left;
  }
  .pageHeader_row1_1_col3{
    width:200px;
    height:76px;
    padding:18px 50px;
    float:left;
  }
  .pageHeader_row1_1_col4{
    width:300px;
    height:76px;
    padding:18px 0;
    overflow:hidden;
    float:left;
  }
  .pageHeader_row1_1_col5{
    width:70px;
    height:76px;
    padding:18px 0 18px 0;
    overflow:hidden;
    float:left;
  }
  .pageHeader_row1_1_col6{
    width:120px;
    height:76px;
    padding:18px 0;
    float:right;
  }

</style>
