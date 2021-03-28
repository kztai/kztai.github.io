<template>
  <div class="logoDialog">
    <div class="row row1">
      <div class="col logoDialog_row1_col1">
        <lm-image ref="logoImage"
                  refId="logoImage"
                  v-show="pvt_isShow.v1 === 'logoImage'"
                  :paraVarPair="pvt_v1.logoImage.paraVarPair"
                  :para="pvt_v1.logoImage.para"
                  :attr="pvt_v1.logoImage.attr">
        </lm-image>
      </div>
    </div>
    <div class="row row2">
      <div class="col logoDialog_row2_col1">
        <lm-link-text ref="nameText"
                      refId="nameText"
                      v-show="pvt_isShow.v2 === 'nameText'"
                      :paraVarPair="pvt_v2.nameText.paraVarPair"
                      :para="pvt_v2.nameText.para"
                      :attr="pvt_v2.nameText.attr">
        </lm-link-text>
      </div>
    </div>
    <div class="row row3">
      <div class="col logoDialog_row3_col1">
        <lm-link-text ref="num1Text"
                      refId="num1Text"
                      v-show="pvt_isShow.v3 === 'num1Text'"
                      :paraVarPair="pvt_v3.num1Text.paraVarPair"
                      :para="pvt_v3.num1Text.para"
                      :attr="pvt_v3.num1Text.attr">
        </lm-link-text>
      </div>
      <div class="col logoDialog_row3_col2">
        <lm-link-text ref="num2Text"
                      refId="num2Text"
                      v-show="pvt_isShow.v4 === 'num2Text'"
                      :paraVarPair="pvt_v4.num2Text.paraVarPair"
                      :para="pvt_v4.num2Text.para"
                      :attr="pvt_v4.num2Text.attr">
        </lm-link-text>
      </div>
    </div>
    <div class="row row4">
      <div class="col logoDialog_row4_col1">
        <lm-link-text ref="activityText"
                      refId="activityText"
                      v-show="pvt_isShow.v5 === 'activityText'"
                      :paraVarPair="pvt_v5.activityText.paraVarPair"
                      :para="pvt_v5.activityText.para"
                      :attr="pvt_v5.activityText.attr">
        </lm-link-text>
      </div>
      <div class="col logoDialog_row4_col2">
        <lm-link-text ref="fansText"
                      refId="fansText"
                      v-show="pvt_isShow.v6 === 'fansText'"
                      :paraVarPair="pvt_v6.fansText.paraVarPair"
                      :para="pvt_v6.fansText.para"
                      :attr="pvt_v6.fansText.attr">
        </lm-link-text>
      </div>
    </div>
  </div>
</template>
<script>
  import libSys from '@/components/baseComponent/libSys.js';
  import libUpload from '@/components/baseComponent/libUpload.js';

  export default {
    name:'logoDialog',
    props:['refId','paraVarPair','para','attr','number'],
    inject:['sys'],
    components:{},
    data:function(){
      return {
        pvt_subModuleMap:{
          vessel:[
            "v1",
            "v2",
            "v3","v4",
            "v5","v6"
          ],
          subModule:[
            "logoImage",
            "nameText",
            "num1Text","num2Text",
            "activityText","fansText"
          ]
        },
        pvt_isShow:{
          v1:null,
          v2:null,
          v3:null,
          v4:null,
          v5:null,
          v6:null
        },
        pvt_eventPortInput:[
          'getSumEvent'
        ],
        // 用户定义的模块变量
        groupLogo:'',
        groupName:'',
        activityNum:0,
        fansNum:0
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
              textAlign:'center',
              fontSize:'20px',
              fontWeight:true,
              color:'#fff',
              height:'40px'
            }
          }
        }
      },
      pvt_v3:function(){
        return {
          num1Text:{
            paraVarPair:{},
            para:{
              textData:this.activityNum
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontSize:'20px',
              color:'#fff',
              height:'30px'
            }
          }
        }
      },
      pvt_v4:function(){
        return {
          num2Text:{
            paraVarPair:{},
            para:{
              textData:this.fansNum
            },
            attr:{
              label:'div',
              textAlign:'right',
              fontSize:'20px',
              color:'#fff',
              height:'30px'
            }
          }
        }
      },
      pvt_v5:function(){
        return {
          activityText:{
            paraVarPair:{},
            para:{
              textData:'活动'
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontSize:'14px',
              color:'#fff',
              height:'30px'
            }
          }
        }
      },
      pvt_v6:function(){
        return {
          fansText:{
            paraVarPair:{},
            para:{
              textData:'粉丝'
            },
            attr:{
              label:'div',
              textAlign:'right',
              fontSize:'14px',
              color:'#fff',
              height:'30px'
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
              $this.groupName= '';
              $this.activityNum = 0;
              $this.fansNum = 0;
              if($this.para.groupName){
                $this.groupName = $this.para.groupName;
              }
              if($this.para.groupLogo){
                $this.groupLogo = $this.para.groupLogo;
              }
              //获取获得数量和粉丝数量
              $this.ep.getSumEvent(function(result){
                if(result){
                  if(result[0]){
                    $this.activityNum = result[0];
                  }
                  if(result[1]){
                    $this.fansNum = result[1];
                  }
                }
                para.nStep = 'showModules';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              },function(error){console.log(error)});
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                "logoImage",
                "nameText",
                "num1Text","num2Text",
                "activityText","fansText"
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
          sm1:"logoImage",
          sm2:"nameText",
          sm3:"num1Text",sm4:"num2Text",
          sm5:"activityText",sm6:"fansText"
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
                para.nStep = 'startModule_num1';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_num1':
              $this.sm[ref.sm3].startModule(function(){
                para.nStep = 'startModule_num2';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_num2':
              $this.sm[ref.sm4].startModule(function(){
                para.nStep = 'startModule_text1';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_text1':
              $this.sm[ref.sm5].startModule(function(){
                para.nStep = 'startModule_text2';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_text2':
              $this.sm[ref.sm6].startModule(function(){
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
      }
    }
  }
</script>
<style lang="scss" scoped>
  .logoDialog{
    width:100%;
    height:100%;
    color:#fff;
  }
  .row{}
  .col{
    display:inline-block;
    box-sizing:border-box;
    vertical-align:middle;
  }
  .logoDialog_row1_col1{
    width:100px;
    height:100px;
    margin:0 15px;
    border-radius:50%;
    overflow:hidden;
  }
  .logoDialog_row2_col1{
    width:100%;
    height:40px;
  }
  .logoDialog_row3_col1{
    width:50%;
    height:30px;
    border-color:#fff;
    border-style:solid;
    border-width:0 1px 0 0;
  }
  .logoDialog_row3_col2{
    width:50%;
    height:30px;
  }
  .logoDialog_row4_col1{
    width:50%;
    height:30px;
    border-color:#fff;
    border-style:solid;
    border-width:0 1px 0 0;
  }
  .logoDialog_row4_col2{
    width:50%;
    height:30px;
  }
</style>
