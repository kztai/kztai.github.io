<template>
  <div class="pageFooter">
    <div class="row row1">
      <div class="col pageFooter_row1_col1">
        <div class="row row1_1">
          <div class="col pageFooter_row1_1_col1">
            <lm-button ref="infoButton"
                       refId="infoButton"
                       v-show="pvt_isShow.v1 === 'infoButton'"
                       :paraVarPair="pvt_v1.infoButton.paraVarPair"
                       :para="pvt_v1.infoButton.para"
                       :attr="pvt_v1.infoButton.attr">
            </lm-button>
          </div>
          <div class="col pageFooter_row1_1_col2">
            <lm-button ref="phoneButton"
                       refId="phoneButton"
                       v-show="pvt_isShow.v2 === 'phoneButton'"
                       :paraVarPair="pvt_v2.phoneButton.paraVarPair"
                       :para="pvt_v2.phoneButton.para"
                       :attr="pvt_v2.phoneButton.attr">
            </lm-button>
          </div>
          <div class="col pageFooter_row1_1_col3">
            <lm-button ref="appButton"
                       refId="appButton"
                       v-show="pvt_isShow.v3 === 'appButton'"
                       :paraVarPair="pvt_v3.appButton.paraVarPair"
                       :para="pvt_v3.appButton.para"
                       :attr="pvt_v3.appButton.attr">
            </lm-button>
          </div>
          <div class="col pageFooter_row1_1_col4">
            <lm-button ref="wxButton"
                       refId="wxButton"
                       v-show="pvt_isShow.v4 === 'wxButton'"
                       :paraVarPair="pvt_v4.wxButton.paraVarPair"
                       :para="pvt_v4.wxButton.para"
                       :attr="pvt_v4.wxButton.attr">
            </lm-button>
          </div>
          <div class="col pageFooter_row1_1_col5">
            <lm-button ref="wbButton"
                       refId="wbButton"
                       v-show="pvt_isShow.v5 === 'wbButton'"
                       :paraVarPair="pvt_v5.wbButton.paraVarPair"
                       :para="pvt_v5.wbButton.para"
                       :attr="pvt_v5.wbButton.attr">
            </lm-button>
          </div>
        </div>
        <div class="row row1_2">
          <div class="col pageFooter_row1_2_col1">
            <lm-link-text ref="numText"
                          refId="numText"
                          v-show="pvt_isShow.v6 === 'numText'"
                          :paraVarPair="pvt_v6.numText.paraVarPair"
                          :para="pvt_v6.numText.para"
                          :attr="pvt_v6.numText.attr">
            </lm-link-text>
          </div>
          <div class="col pageFooter_row1_2_col2">
            <lm-link-text ref="dateText"
                          refId="dateText"
                          v-show="pvt_isShow.v7 === 'dateText'"
                          :paraVarPair="pvt_v7.dateText.paraVarPair"
                          :para="pvt_v7.dateText.para"
                          :attr="pvt_v7.dateText.attr">
            </lm-link-text>
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
    name:'pageFooter',
    props:['refId','paraVarPair','para','attr','number'],
    inject:['sys'],
    components:{},
    data:function(){
      return {
        pvt_subModuleMap:{
          vessel:[
            "v1","v2","v3",
            "v4","v5",
            "v6","v7"
          ],
          subModule:[
            "infoButton","phoneButton","appButton",
            "wxButton","wbButton",
            "numText","dateText"
          ]
        },
        pvt_isShow:{
          v1:null,
          v2:null,
          v3:null,
          v4:null,
          v5:null,
          v6:null,
          v7:null
        },
        pvt_eventPortInput:[],
        // 用户定义的模块变量
      }
    },
    computed:{
      pvt_v1:function(){
        return {
          infoButton:{
            paraVarPair:{},
            para:{
              name:['关于瓴码']
            },
            attr:{
              type:'text',
              size:'large'
            }
          }
        }
      },
      pvt_v2:function(){
        return {
          phoneButton:{
            paraVarPair:{},
            para:{
              name:['联系我们']
            },
            attr:{
              type:'text',
              size:'large'
            }
          }
        }
      },
      pvt_v3:function(){
        return {
          appButton:{
            paraVarPair:{},
            para:{
              name:['APP下载']
            },
            attr:{
              type:'text',
              size:'large'
            }
          }
        }
      },
      pvt_v4:function(){
        return {
          wxButton:{
            paraVarPair:{},
            para:{
              name:['','el-icon-eleme']
            },
            attr:{
              type:'text',
              size:'large'
            }
          }
        }
      },
      pvt_v5:function(){
        return {
          wbButton:{
            paraVarPair:{},
            para:{
              name:['','el-icon-goods']
            },
            attr:{
              type:'text'
            }
          }
        }
      },
      pvt_v6:function(){
        return {
          numText:{
            paraVarPair:{},
            para:{
              textData:'粤ICP备12031756号'
            },
            attr:{
              label:'p',
              textAlign:'right',
              height:'40px',
              fontSize:'12px',
              color:''
            }
          }
        }
      },
      pvt_v7:function(){
        return {
          dateText:{
            paraVarPair:{},
            para:{
              textData:'@ 1999 - 2019 瓴码'
            },
            attr:{
              label:'div',
              textAlign:'left',
              height:'40px',
              fontSize:'12px',
              color:''
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
              para.nStep = 'showModules';
              ++dbFlag;
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                "infoButton","phoneButton","appButton",
                "wxButton","wbButton",
                "numText","dateText"
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
      infoButtonClick(){
        console.log('跳转至瓴码组织介绍页面');
      },
      appButtonClick(){
        console.log('跳转至瓴码APP下载页面');
      },
      wxButtonClick(){
        console.log('跳转至瓴码微信登录页');
      },
      wbButtonClick(){
        console.log('跳转至瓴码微博登录页');
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
          sm1:"infoButton",sm2:"phoneButton",sm3:"appButton",
          sm4:"wxButton",sm5:"wbButton",
          sm6:"numText",sm7:"dateText"
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
                para.nStep = 'startModule_info';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_info':
              $this.sm[ref.sm1].startModule(function(){
                para.nStep = 'startModule_phone';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_phone':
              $this.sm[ref.sm2].startModule(function(){
                para.nStep = 'startModule_app';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_app':
              $this.sm[ref.sm3].startModule(function(){
                para.nStep = 'startModule_wx';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_wx':
              $this.sm[ref.sm4].startModule(function(){
                para.nStep = 'startModule_wb';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_wb':
              $this.sm[ref.sm5].startModule(function(){
                para.nStep = 'startModule_num';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_num':
              $this.sm[ref.sm6].startModule(function(){
                para.nStep = 'startModule_date';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_date':
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
      infoButton_buttonClickEvent(){
        this.infoButtonClick();
      },
      phoneButton_buttonClickEvent(){
        this.infoButtonClick();
      },
      appButton_buttonClickEvent(){
        this.appButtonClick();
      },
      wxButton_buttonClickEvent(){
        this.wxButtonClick();
      },
      wbButton_buttonClickEvent(){
        this.wbButtonClick();
      }
    }
  }
</script>
<style lang="scss" scoped>
  .pageFooter{
    width:100%;
    height:100%;
  }
  .row{}
  .col{
    display:inline-block;
    box-sizing:border-box;
    vertical-align:middle;
  }
  .pageFooter_row1_col1{
    width:100%;
    height:100%;
    padding:0 100px;
  }

  .pageFooter_row1_1_col1{
    width:calc(50% - 50px);
    height:60px;
    padding:20px 50px 0 calc(50% - 200px);
    border-color:#c3c3be;
    border-style:solid;
    border-width:0 0 1px 0;
  }
  .pageFooter_row1_1_col2{
    width:100px;
    height:60px;
    padding:20px 0 0 0;
    border-color:#c3c3be;
    border-style:solid;
    border-width:0 0 1px 0;
  }
  .pageFooter_row1_1_col3{
    width:150px;
    height:60px;
    padding:20px 0 0 50px;
    border-color:#c3c3be;
    border-style:solid;
    border-width:0 0 1px 0;
  }
  .pageFooter_row1_1_col4{
    width:calc(50% - 260px);
    height:60px;
    padding:20px 0 0 calc(50% - 290px);
    border-color:#c3c3be;
    border-style:solid;
    border-width:0 0 1px 0;
  }
  .pageFooter_row1_1_col5{
    width:60px;
    height:60px;
    padding:20px 10px 0 20px;
    border-color:#c3c3be;
    border-style:solid;
    border-width:0 0 1px 0;
  }
  .pageFooter_row1_2_col1{
    width:50%;
    height:56px;
    padding:0 10px 16px 0;
  }
  .pageFooter_row1_2_col2{
    width:50%;
    height:56px;
    padding:0 0 16px 10px;
  }
</style>
