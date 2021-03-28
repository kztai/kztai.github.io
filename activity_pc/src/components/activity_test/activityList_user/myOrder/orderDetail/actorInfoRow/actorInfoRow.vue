<template>
  <div class="actorInfoRow">
    <div class="row row1">
      <div class="col infoRow_row1_col_v1">
        <lm-link-text
                ref="indexNum"
                refId="indexNum"
                v-show="pvt_isShow.v1 === 'indexNum'"
                :paraVarPair="pvt_v1.indexNum.paraVarPair"
                :para="pvt_v1.indexNum.para"
                :attr="pvt_v1.indexNum.attr">
        </lm-link-text>
      </div>
      <div class="col infoRow_row1_col_v2">
        <lm-link-text
                ref="nameLabel"
                refId="nameLabel"
                v-show="pvt_isShow.v2 === 'nameLabel'"
                :paraVarPair="pvt_v2.nameLabel.paraVarPair"
                :para="pvt_v2.nameLabel.para"
                :attr="pvt_v2.nameLabel.attr">
        </lm-link-text>
      </div>
    </div>
    <div class="row row2">
      <div class="col infoRow_row2_col_v1">
        <lm-link-text
                ref="actorName"
                refId="actorName"
                v-show="pvt_isShow.v3 === 'actorName'"
                :paraVarPair="pvt_v3.actorName.paraVarPair"
                :para="pvt_v3.actorName.para"
                :attr="pvt_v3.actorName.attr">
        </lm-link-text>
      </div>
    </div>
    <div class="row row3">
      <div class="col infoRow_row3_col_v1">
        <lm-link-text
                ref="mobileLabel"
                refId="mobileLabel"
                v-show="pvt_isShow.v4 === 'mobileLabel'"
                :paraVarPair="pvt_v4.mobileLabel.paraVarPair"
                :para="pvt_v4.mobileLabel.para"
                :attr="pvt_v4.mobileLabel.attr">
        </lm-link-text>
      </div>
    </div>
    <div class="row row4">
      <div class="col infoRow_row4_col_v1">
        <lm-link-text
                ref="actorMobile"
                refId="actorMobile"
                v-show="pvt_isShow.v5 === 'actorMobile'"
                :paraVarPair="pvt_v5.actorMobile.paraVarPair"
                :para="pvt_v5.actorMobile.para"
                :attr="pvt_v5.actorMobile.attr">
        </lm-link-text>
      </div>
    </div>
    <div class="row row5">
      <div class="col infoRow_row5_col_v1">
        <lm-link-text
                ref="companyLabel"
                refId="companyLabel"
                v-show="pvt_isShow.v6 === 'companyLabel'"
                :paraVarPair="pvt_v6.companyLabel.paraVarPair"
                :para="pvt_v6.companyLabel.para"
                :attr="pvt_v6.companyLabel.attr">
        </lm-link-text>
      </div>
    </div>
    <div class="row row6">
      <div class="col infoRow_row6_col_v1">
        <lm-link-text
                ref="companyName"
                refId="companyName"
                v-show="pvt_isShow.v7 === 'companyName'"
                :paraVarPair="pvt_v7.companyName.paraVarPair"
                :para="pvt_v7.companyName.para"
                :attr="pvt_v7.companyName.attr">
        </lm-link-text>
      </div>
    </div>
    <div class="row row7">
      <div class="col infoRow_row7_col_v1">
        <lm-link-text
                ref="emailLabel"
                refId="emailLabel"
                v-show="pvt_isShow.v8 === 'emailLabel'"
                :paraVarPair="pvt_v8.emailLabel.paraVarPair"
                :para="pvt_v8.emailLabel.para"
                :attr="pvt_v8.emailLabel.attr">
        </lm-link-text>
      </div>
    </div>
    <div class="row row8">
      <div class="col infoRow_row8_col_v1">
        <lm-link-text
                ref="emailText"
                refId="emailText"
                v-show="pvt_isShow.v9 === 'emailText'"
                :paraVarPair="pvt_v9.emailText.paraVarPair"
                :para="pvt_v9.emailText.para"
                :attr="pvt_v9.emailText.attr">
        </lm-link-text>
      </div>
    </div>
  </div>
</template>
<script>
  import libSys from '@/components/baseComponent/libSys.js';
  import libUpload from '@/components/baseComponent/libUpload.js';


  export default {
    name:"actorInfoRow",
    props:['refId','paraVarPair', 'para', 'attr', 'number'],
    inject:['sys'],
    components:{
    },
    data:function(){
      return {
        // 自动生成变量
        // 当前模块的para参数为 modulePara1 和 modulePara1
        // 需要双向修改参数的场景，用户可直接修改以下模块参数同名的变量
        // 子模块与所属容器的对应关系
        pvt_subModuleMap:{
          subModule:[
            'indexNum',
            'nameLabel','actorName',
            'mobileLabel','actorMobile',
            'companyLabel','companyName',
            'emailLabel','emailText'
          ],
          vessel:[
            'v1',
            'v2','v3',
            'v4','v5',
            'v6','v7',
            'v8','v9'
          ]
        },
        // 各个容器当前显示的子模块
        pvt_isShow:{
          v1:null,
          v2:null,v3:null,
          v4:null,v5:null,
          v6:null,v7:null,
          v8:null,v9:null
        },
        // 当前模块输入类型的事务接口名称，工具完成前需要用户手动填写
        pvt_eventPortInput:[],
        // 用户定义的模块变量
        indexText:'',
        actorName:'',
        mobileNumber:'',
        companyName:'',
        emailText:''
      }
    },
    watch:{},
    computed:{
      pvt_v1:function(){
        return {
          indexNum:{
            paraVarPair:{},
            para:{
              textData:'第' + this.indexText + '位'
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontWeight:true,
              fontSize:'',
              indent:false,
              height:'30px',
            }
          }
        }
      },
      pvt_v2:function(){
        return {
          nameLabel:{
            paraVarPair:{},
            para:{
              textData:'姓名'
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontWeight:false,
              fontSize:'',
              indent:false,
              height:'30px',
            }
          }
        }
      },
      pvt_v3:function(){
        return {
          actorName:{
            paraVarPair:{},
            para:{
              textData:this.actorName
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontWeight:true,
              fontSize:'',
              indent:false,
              height:'30px',
            }
          }
        }
      },
      pvt_v4:function(){
        return {
          mobileLabel:{
            paraVarPair:{},
            para:{
              textData:'手机'
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontWeight:false,
              fontSize:'',
              indent:false,
              height:'30px',
            }
          }
        }
      },
      pvt_v5:function(){
        return {
          actorMobile:{
            paraVarPair:{},
            para:{
              textData:this.mobileNumber
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontWeight:true,
              fontSize:'',
              indent:false,
              height:'30px',
            }
          }
        }
      },
      pvt_v6:function(){
        return {
          companyLabel:{
            paraVarPair:{},
            para:{
              textData:'公司'
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontWeight:false,
              fontSize:'',
              indent:false,
              height:'30px',
            }
          }
        }
      },
      pvt_v7:function(){
        return {
          companyName:{
            paraVarPair:{},
            para:{
              textData:this.companyName
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontWeight:true,
              fontSize:'',
              indent:false,
              height:'30px',
            }
          }
        }
      },
      pvt_v8:function(){
        return {
          emailLabel:{
            paraVarPair:{},
            para:{
              textData:'邮箱'
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontWeight:false,
              fontSize:'',
              indent:false,
              height:'30px',
            }
          }
        }
      },
      pvt_v9:function(){
        return {
          emailText:{
            paraVarPair:{},
            para:{
              textData:this.emailText
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontWeight:true,
              fontSize:'',
              indent:false,
              height:'30px',
            }
          }
        }
      }
    },
    created:function(){
      Object.assign(this,libSys,libUpload);
    },
    mounted:function(){
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
              $this.indexText = '';
              $this.actorName = '';
              $this.mobileNumber = '';
              $this.companyName = '';
              $this.emailText = '';
              if($this.para){
                if($this.para.index){
                  let nameText = '' + $this.para.index;
                  let numArr1 = ['0','1','2','3','4','5','6','7','8','9'];
                  let numArr2 = ['十','一','二','三','四','五','六','七','八','九'];
                  //最多不过100人
                  for(let i = 0;i < nameText.length;i++){
                    $this.indexText = $this.indexText + numArr2[numArr1.indexOf(nameText[i])];
                  }
                  if($this.indexText.length > 1){
                    if($this.indexText[0] === '一'){
                      $this.indexText.substr(0,1);
                      if($this.indexText[0] !== '十'){
                        $this.indexText = '十' + $this.indexText;
                      }
                    }else{
                      if($this.indexText[1] !== '十'){
                        $this.indexText = $this.indexText[0] + '十' + $this.indexText[1];
                      }
                    }
                  }
                }
                if($this.para.name){
                  $this.actorName = $this.para.name;
                }
                if($this.para.mobile){
                  $this.mobileNumber = $this.para.mobile;
                }
                if($this.para.company){
                  $this.companyName = $this.para.company;
                }
                if($this.para.email){
                  $this.emailText = $this.para.email;
                }
              }
              para.nStep = 'showModules';
              ++dbFlag;
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                'indexNum',
                'nameLabel','actorName',
                'mobileLabel','actorMobile',
                'companyLabel','companyName',
                'emailLabel','emailText'
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
              para.successCallBack();
              return
          }
          if (++dbFlag === 1) {
            return
          }
        }
      },
      // 公开事件
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
          sm1:'indexNum',
          sm2:'nameLabel',sm3:'actorName',
          sm4:'mobileLabel',sm5:'actorMobile',
          sm6:'companyLabel',sm7:'companyName',
          sm8:'emailLabel',sm9:'emailText'
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
                para.nStep = 'startModule_index';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_index':
              $this.sm[ref.sm1].startModule(function(){
                para.nStep = 'startModule_actorNameLabel';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_actorNameLabel':
              $this.sm[ref.sm2].startModule(function(){
                para.nStep = 'startModule_actorName';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_actorName':
              $this.sm[ref.sm3].startModule(function(){
                para.nStep = 'startModule_mobileLabel';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_mobileLabel':
              $this.sm[ref.sm4].startModule(function(){
                para.nStep = 'startModule_mobile';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_mobile':
              $this.sm[ref.sm5].startModule(function(){
                para.nStep = 'startModule_companyLabel';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_companyLabel':
              $this.sm[ref.sm6].startModule(function(){
                para.nStep = 'startModule_companyName';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_companyName':
              $this.sm[ref.sm7].startModule(function(){
                para.nStep = 'startModule_emailLabel';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_emailLabel':
              $this.sm[ref.sm8].startModule(function(){
                para.nStep = 'startModule_email';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_email':
              $this.sm[ref.sm9].startModule(function(){
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
      }
      // 接收子组件的事件
    }
  }
</script>
<style lang="scss" scoped>
  .actorInfoRow{
    width:100%;
    border-width:0 0 1px 0;
    border-style:solid;
    border-color:#E4E7ED;
  }
  .row{
  }
  .col{
    display:inline-block;
    vertical-align:middle;
  }
  .infoRow_row1_col_v1{
    width:100px;
    height:30px;
  }
  .infoRow_row1_col_v2{
    width:calc(100% - 100px);
    height:30px;
  }
  .infoRow_row2_col_v1{
    width:100%;
    height:30px;
    padding:0 0 0 100px;
  }
  .infoRow_row3_col_v1{
    width:100%;
    height:30px;
    padding:0 0 0 100px;
  }
  .infoRow_row4_col_v1{
    width:100%;
    height:30px;
    padding:0 0 0 100px;
  }
  .infoRow_row5_col_v1{
    width:100%;
    height:30px;
    padding:0 0 0 100px;
  }
  .infoRow_row6_col_v1{
    width:100%;
    height:30px;
    padding:0 0 0 100px;
  }
  .infoRow_row7_col_v1{
    width:100%;
    height:30px;
    padding:0 0 0 100px;
  }
  .infoRow_row8_col_v1{
    width:100%;
    height:30px;
    padding:0 0 0 100px;
  }
</style>
