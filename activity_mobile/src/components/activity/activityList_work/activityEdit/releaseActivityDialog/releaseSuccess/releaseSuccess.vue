<template>
  <div class="mcbReleaseSuccess1_container">
    <div class="mcbReleaseSuccess1_row mcbReleaseSuccess1_row_mcbReleaseSuccess1Row">
      <div :class="{mcbReleaseSuccess1_col:true,mcbReleaseSuccess1_col_mcbReleaseSuccess1Window:true,mcbReleaseSuccess1_col_mcbReleaseSuccess1Window_size_large:attr.size==='large',mcbReleaseSuccess1_col_mcbReleaseSuccess1Window_size_medium:attr.size==='medium',mcbReleaseSuccess1_col_mcbReleaseSuccess1Window_size_small:attr.size==='small',mcbReleaseSuccess1_col_mcbReleaseSuccess1Window_size_min:attr.size==='min',mcbReleaseSuccess1_col_mcbReleaseSuccess1Window_checked:attr.checked,mcbReleaseSuccess1_col_mcbReleaseSuccess1Window_disable:attr.disabled}">

        <div class="mcbReleaseSuccess1_row mcbReleaseSuccess1_row_row1">
          <div :class="{mcbReleaseSuccess1_col:true,mcbReleaseSuccess1_col_r1c1:true,mcbReleaseSuccess1_col_r1c1_size_large:attr.size==='large',mcbReleaseSuccess1_col_r1c1_size_medium:attr.size==='medium',mcbReleaseSuccess1_col_r1c1_size_small:attr.size==='small',mcbReleaseSuccess1_col_r1c1_size_min:attr.size==='min',mcbReleaseSuccess1_col_r1c1_checked:attr.checked,mcbReleaseSuccess1_col_r1c1_disable:attr.disabled}">

            <div class="mcbReleaseSuccess1_row mcbReleaseSuccess1_row_row2">
              <div :class="{mcbReleaseSuccess1_col:true,mcbReleaseSuccess1_col_r1_1c1:true,mcbReleaseSuccess1_col_r1_1c1_size_large:attr.size==='large',mcbReleaseSuccess1_col_r1_1c1_size_medium:attr.size==='medium',mcbReleaseSuccess1_col_r1_1c1_size_small:attr.size==='small',mcbReleaseSuccess1_col_r1_1c1_size_min:attr.size==='min',mcbReleaseSuccess1_col_r1_1c1_checked:attr.checked,mcbReleaseSuccess1_col_r1_1c1_disable:attr.disabled}">

                <lm2b-link-text
                        ref="manageText"
                        refId="manageText"
                        v-show="pvt_isShow.r1_1c1 === 'manageText'"
                        :paraVarPair="pvt_r1_1c1.manageText.paraVarPair"
                        :para="pvt_r1_1c1.manageText.para"
                        :attr="pvt_r1_1c1.manageText.attr">
                </lm2b-link-text>
              </div>
              <div :class="{mcbReleaseSuccess1_col:true,mcbReleaseSuccess1_col_r1_1c2:true,mcbReleaseSuccess1_col_r1_1c2_size_large:attr.size==='large',mcbReleaseSuccess1_col_r1_1c2_size_medium:attr.size==='medium',mcbReleaseSuccess1_col_r1_1c2_size_small:attr.size==='small',mcbReleaseSuccess1_col_r1_1c2_size_min:attr.size==='min',mcbReleaseSuccess1_col_r1_1c2_checked:attr.checked,mcbReleaseSuccess1_col_r1_1c2_disable:attr.disabled}">

                <lm2b-link-text
                        ref="titleText"
                        refId="titleText"
                        v-show="pvt_isShow.r1_1c2 === 'titleText'"
                        :paraVarPair="pvt_r1_1c2.titleText.paraVarPair"
                        :para="pvt_r1_1c2.titleText.para"
                        :attr="pvt_r1_1c2.titleText.attr">
                </lm2b-link-text>
              </div>
              <div :class="{mcbReleaseSuccess1_col:true,mcbReleaseSuccess1_col_r1_1c3:true,mcbReleaseSuccess1_col_r1_1c3_size_large:attr.size==='large',mcbReleaseSuccess1_col_r1_1c3_size_medium:attr.size==='medium',mcbReleaseSuccess1_col_r1_1c3_size_small:attr.size==='small',mcbReleaseSuccess1_col_r1_1c3_size_min:attr.size==='min',mcbReleaseSuccess1_col_r1_1c3_checked:attr.checked,mcbReleaseSuccess1_col_r1_1c3_disable:attr.disabled}">

                <lm2b-link-text
                        ref="detailText"
                        refId="detailText"
                        v-show="pvt_isShow.r1_1c3 === 'detailText'"
                        :paraVarPair="pvt_r1_1c3.detailText.paraVarPair"
                        :para="pvt_r1_1c3.detailText.para"
                        :attr="pvt_r1_1c3.detailText.attr">
                </lm2b-link-text>
              </div>
            </div>
          </div>
        </div>
        <div class="mcbReleaseSuccess1_row mcbReleaseSuccess1_row_row3">
          <div :class="{mcbReleaseSuccess1_col:true,mcbReleaseSuccess1_col_r2c1:true,mcbReleaseSuccess1_col_r2c1_size_large:attr.size==='large',mcbReleaseSuccess1_col_r2c1_size_medium:attr.size==='medium',mcbReleaseSuccess1_col_r2c1_size_small:attr.size==='small',mcbReleaseSuccess1_col_r2c1_size_min:attr.size==='min',mcbReleaseSuccess1_col_r2c1_checked:attr.checked,mcbReleaseSuccess1_col_r2c1_disable:attr.disabled}">

            <div class="mcbReleaseSuccess1_row mcbReleaseSuccess1_row_row4">
              <div :class="{mcbReleaseSuccess1_col:true,mcbReleaseSuccess1_col_r2_1c1:true,mcbReleaseSuccess1_col_r2_1c1_size_large:attr.size==='large',mcbReleaseSuccess1_col_r2_1c1_size_medium:attr.size==='medium',mcbReleaseSuccess1_col_r2_1c1_size_small:attr.size==='small',mcbReleaseSuccess1_col_r2_1c1_size_min:attr.size==='min',mcbReleaseSuccess1_col_r2_1c1_checked:attr.checked,mcbReleaseSuccess1_col_r2_1c1_disable:attr.disabled}">

                <lm2b-link-text
                        ref="icon1Text"
                        refId="icon1Text"
                        v-show="pvt_isShow.r2_1c1 === 'icon1Text'"
                        :paraVarPair="pvt_r2_1c1.icon1Text.paraVarPair"
                        :para="pvt_r2_1c1.icon1Text.para"
                        :attr="pvt_r2_1c1.icon1Text.attr">
                </lm2b-link-text>
              </div>
              <div :class="{mcbReleaseSuccess1_col:true,mcbReleaseSuccess1_col_r2_1c2:true,mcbReleaseSuccess1_col_r2_1c2_size_large:attr.size==='large',mcbReleaseSuccess1_col_r2_1c2_size_medium:attr.size==='medium',mcbReleaseSuccess1_col_r2_1c2_size_small:attr.size==='small',mcbReleaseSuccess1_col_r2_1c2_size_min:attr.size==='min',mcbReleaseSuccess1_col_r2_1c2_checked:attr.checked,mcbReleaseSuccess1_col_r2_1c2_disable:attr.disabled}">

                <lm2b-link-text
                        ref="text1"
                        refId="text1"
                        v-show="pvt_isShow.r2_1c2 === 'text1'"
                        :paraVarPair="pvt_r2_1c2.text1.paraVarPair"
                        :para="pvt_r2_1c2.text1.para"
                        :attr="pvt_r2_1c2.text1.attr">
                </lm2b-link-text>
              </div>
            </div>
            <div class="mcbReleaseSuccess1_row mcbReleaseSuccess1_row_row5">
              <div :class="{mcbReleaseSuccess1_col:true,mcbReleaseSuccess1_col_r2_2c1:true,mcbReleaseSuccess1_col_r2_2c1_size_large:attr.size==='large',mcbReleaseSuccess1_col_r2_2c1_size_medium:attr.size==='medium',mcbReleaseSuccess1_col_r2_2c1_size_small:attr.size==='small',mcbReleaseSuccess1_col_r2_2c1_size_min:attr.size==='min',mcbReleaseSuccess1_col_r2_2c1_checked:attr.checked,mcbReleaseSuccess1_col_r2_2c1_disable:attr.disabled}">

                <lm2b-link-text
                        ref="text2"
                        refId="text2"
                        v-show="pvt_isShow.r2_2c1 === 'text2'"
                        :paraVarPair="pvt_r2_2c1.text2.paraVarPair"
                        :para="pvt_r2_2c1.text2.para"
                        :attr="pvt_r2_2c1.text2.attr">
                </lm2b-link-text>
              </div>
            </div>
          </div>
        </div>
        <div class="mcbReleaseSuccess1_row mcbReleaseSuccess1_row_row6">
          <div :class="{mcbReleaseSuccess1_col:true,mcbReleaseSuccess1_col_r3c1:true,mcbReleaseSuccess1_col_r3c1_size_large:attr.size==='large',mcbReleaseSuccess1_col_r3c1_size_medium:attr.size==='medium',mcbReleaseSuccess1_col_r3c1_size_small:attr.size==='small',mcbReleaseSuccess1_col_r3c1_size_min:attr.size==='min',mcbReleaseSuccess1_col_r3c1_checked:attr.checked,mcbReleaseSuccess1_col_r3c1_disable:attr.disabled}">

            <div class="mcbReleaseSuccess1_row mcbReleaseSuccess1_row_row7">
              <div :class="{mcbReleaseSuccess1_col:true,mcbReleaseSuccess1_col_r3_1c1:true,mcbReleaseSuccess1_col_r3_1c1_size_large:attr.size==='large',mcbReleaseSuccess1_col_r3_1c1_size_medium:attr.size==='medium',mcbReleaseSuccess1_col_r3_1c1_size_small:attr.size==='small',mcbReleaseSuccess1_col_r3_1c1_size_min:attr.size==='min',mcbReleaseSuccess1_col_r3_1c1_checked:attr.checked,mcbReleaseSuccess1_col_r3_1c1_disable:attr.disabled}">

              </div>
              <div :class="{mcbReleaseSuccess1_col:true,mcbReleaseSuccess1_col_r3_1c2:true,mcbReleaseSuccess1_col_r3_1c2_size_large:attr.size==='large',mcbReleaseSuccess1_col_r3_1c2_size_medium:attr.size==='medium',mcbReleaseSuccess1_col_r3_1c2_size_small:attr.size==='small',mcbReleaseSuccess1_col_r3_1c2_size_min:attr.size==='min',mcbReleaseSuccess1_col_r3_1c2_checked:attr.checked,mcbReleaseSuccess1_col_r3_1c2_disable:attr.disabled}">

                <lm2b-link-text
                        ref="text3"
                        refId="text3"
                        v-show="pvt_isShow.r3_1c2 === 'text3'"
                        :paraVarPair="pvt_r3_1c2.text3.paraVarPair"
                        :para="pvt_r3_1c2.text3.para"
                        :attr="pvt_r3_1c2.text3.attr">
                </lm2b-link-text>
              </div>
              <div :class="{mcbReleaseSuccess1_col:true,mcbReleaseSuccess1_col_r3_1c3:true,mcbReleaseSuccess1_col_r3_1c3_size_large:attr.size==='large',mcbReleaseSuccess1_col_r3_1c3_size_medium:attr.size==='medium',mcbReleaseSuccess1_col_r3_1c3_size_small:attr.size==='small',mcbReleaseSuccess1_col_r3_1c3_size_min:attr.size==='min',mcbReleaseSuccess1_col_r3_1c3_checked:attr.checked,mcbReleaseSuccess1_col_r3_1c3_disable:attr.disabled}">

              </div>
            </div>
            <div class="mcbReleaseSuccess1_row mcbReleaseSuccess1_row_row8">
              <div :class="{mcbReleaseSuccess1_col:true,mcbReleaseSuccess1_col_r3_2c1:true,mcbReleaseSuccess1_col_r3_2c1_size_large:attr.size==='large',mcbReleaseSuccess1_col_r3_2c1_size_medium:attr.size==='medium',mcbReleaseSuccess1_col_r3_2c1_size_small:attr.size==='small',mcbReleaseSuccess1_col_r3_2c1_size_min:attr.size==='min',mcbReleaseSuccess1_col_r3_2c1_checked:attr.checked,mcbReleaseSuccess1_col_r3_2c1_disable:attr.disabled}">
                <mcb-release-suc-row
                        ref="successRow"
                        refId="successRow"
                        v-show="pvt_isShow.r3_2c1 === 'successRow'"
                        :paraVarPair="pvt_r3_2c1.successRow.paraVarPair"
                        v-for="(item, index) in pvt_r3_2c1.successRow.forData"
                        :number="index"
                        :para="item.para"
                        :attr="item.attr">
                </mcb-release-suc-row>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import libSys from '@/components/baseComponent/libSys.js';
  import libUpload from '@/components/baseComponent/libUpload.js';
  import mcbReleaseSucRow from './releaseSuccessRow.vue';
  export default {
    components: {mcbReleaseSucRow},
    inject: ['sys'],
    props: ['refId','para','attr','number'],
    data: function() {
      return {
        pvt_subModuleMap: {
          vessel:['r1_1c1','r1_1c2','r1_1c3','r2_1c1','r2_1c2','r2_2c1','r3_1c2','r3_2c1'],
          subModule:['manageText','titleText','detailText','icon1Text','text1','text2','text3','successRow'],
        },
        pvt_isShow: {
          r1_1c1:null,
          r1_1c2:null,
          r1_1c3:null,
          r2_1c1:null,
          r2_1c2:null,
          r2_2c1:null,
          r3_1c2:null,
          r3_2c1:null,
        },
        pvt_eventPortInput: ['issueListEvent','detailPageEvent'],

        imageArr:[],
        textArr:[],
        sizeArr:[],
      };
    },
    watch: {
    },
    computed:{
      pvt_r1_1c1:function(){
        return {
          manageText:{
            paraVarPair:{
            },
            para:{
              textData:'管理',
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'left',
              height:'42px',
              color:'#12B0FF',
              fontSize:'16px',
              background:'transparent',
              icon:'van-icon-arrow-left',
              iconIsRight:false,
            },
          },
        };
      },
      pvt_r1_1c2:function(){
        return {
          titleText:{
            paraVarPair:{
            },
            para:{
              textData:'发布活动',
            },
            attr:{
              label:'div',
              textAlign:'center',
              fontWeight:true,
              height:'42px',
              color:'#000000',
              fontSize:'18px',
              background:'transparent',
            },
          },
        };
      },
      pvt_r1_1c3:function(){
        return {
          detailText:{
            paraVarPair:{
            },
            para:{
              textData:'查看详情',
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'right',
              height:'42px',
              color:'#12B0FF',
              fontSize:'16px',
              background:'transparent',
            },
          },
        };
      },
      pvt_r2_1c1:function(){
        return {
          icon1Text:{
            paraVarPair:{
            },
            para:{
            },
            attr:{
              label:'div',
              textAlign:'center',
              height:'32px',
              color:'#12B0FF',
              fontSize:'32px',
              background:'transparent',
              icon:'van-icon-passed',
            },
          },
        };
      },
      pvt_r2_1c2:function(){
        return {
          text1:{
            paraVarPair:{
            },
            para:{
              textData:'发布成功!',
            },
            attr:{
              label:'div',
              textAlign:'center',
              height:'32px',
              color:'#333333',
              fontSize:'20px',
              background:'transparent',
            },
          },
        };
      },
      pvt_r2_2c1:function(){
        return {
          text2:{
            paraVarPair:{
            },
            para:{
              textData:'请等待审核',
            },
            attr:{
              label:'div',
              textAlign:'center',
              height:'33px',
              color:'#666666',
              fontSize:'14px',
              background:'transparent',
            },
          },
        };
      },
      pvt_r3_1c2:function(){
        return {
          text3:{
            paraVarPair:{
            },
            para:{
              textData:'邀请好友一起参加活动',
            },
            attr:{
              label:'div',
              textAlign:'center',
              height:'33px',
              color:'#999999',
              fontSize:'14px',
              background:'transparent',
            },
          },
        };
      },
      pvt_r3_2c1:function(){
        let loopModule={
          successRow:{
            para:{
              image:this.imageArr,
              text:this.textArr,
            },
            attr:{
              size:this.sizeArr,
            },
          },
        };
        let forData = this.pvt_createForData(loopModule);
        return {
          successRow:{
            paraVarPair:{
              image:'imageArr',
            },
            forData: forData.successRow,
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

        if(successCallBack !== null){
          errorCallBack = para;
          successCallBack = null;
        }
        para = errorCallBack;

        while(1){
          dbFlag = 0;
          switch(para.nStep){
            case 0:
              $this.imageArr = [];
              $this.textArr = [];
              $this.sizeArr = [];
              $this.textArr = [
                '微信好友','朋友圈','QQ好友','QQ空间','微博好友','facebook','twitter','复制链接'
              ];
              for(let i = 0;i < 8;i++){
                $this.imageArr.push(mac.defaultImage);
                $this.sizeArr.push('medium');
              }
              para.nStep = 'showModules';
              ++dbFlag;
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                'manageText','titleText','detailText','icon1Text','text1','text2','text3','successRow'
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
          if(++dbFlag === 1){
            return
          }
        }
      },
      backToIssueList:function(){
        let $this = this;
        $this.hideSelfModule($this.refId,function(){
          $this.ep.issueListEvent();
        },function(error){console.log(error)});
      },
      detailPageClick:function(){
        let $this = this;
        $this.hideSelfModule($this.refId,function(){
          $this.ep.detailPageEvent();
        },function(error){console.log(error)});
      },
      searchClick:function(index){
        console.log('分享该活动到');
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
          sm1:'manageText',
          sm2:'titleText',
          sm3:'detailText',
          sm4:'icon1Text',
          sm5:'text1',
          sm6:'text2',
          sm7:'text3',
          sm8:'successRow'
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
                para.nStep = 'startModule_manText';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_manText':
              $this.sm[ref.sm1].startModule(function(){
                para.nStep = 'startModule_titleText';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_titleText':
              $this.sm[ref.sm2].startModule(function(){
                para.nStep = 'startModule_detailButton';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_detailButton':
              $this.sm[ref.sm3].startModule(function(){
                para.nStep = 'startModule_icon1';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_icon1':
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
                para.nStep = 'startModule_text3';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_text3':
              $this.sm[ref.sm7].startModule(function(){
                para.nStep = 'startModule_col';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_col':
              //循环组件
              let arr = [];
              for(let i = 0;i < $this.sizeArr.length;i++){
                arr.push([function(){},function(error){console.log(error)}]);
              }
              $this.callLoopModuleMethod(ref.sm8,'startModule',arr,function(){
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
      detailText_textClickEvent:function(){
        this.detailPageClick();
      },
      successRow_clickEvent:function(index){
        this.searchClick(index);
      },
      manageText_textClickEvent:function(){
        this.backToIssueList();
      },
    },
  };
</script>
<style lang="less" scoped>
    @import '../../../../../../assets/var_sq';
  .mcbReleaseSuccess1_container {
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    z-index:1000;
  }
  .mcbReleaseSuccess1_row {
    display:flex;
    /*flex:1;*/
  }
  .mcbReleaseSuccess1_col {
    display:flex;
    flex-direction:column;
  }
  .mcbReleaseSuccess1_row_mcbReleaseSuccess1Row{
    height:100%;
  }
  .mcbReleaseSuccess1_col_mcbReleaseSuccess1Window_size_medium {
    width:@mcbReleaseSuccess1-mcbReleaseSuccess1Window-medium-width;
  }
  .mcbReleaseSuccess1_col_mcbReleaseSuccess1Window {
    background-color:mix(@mcbReleaseSuccess1-mcbReleaseSuccess1Window-background-color,#fff,@mcbReleaseSuccess1-mcbReleaseSuccess1Window-background-color-opacity);
  }
  .mcbReleaseSuccess1_col_r1c1_size_medium {
    width:@mcbReleaseSuccess1-r1c1-medium-width;
    height:@mcbReleaseSuccess1-r1c1-medium-height;
    padding:@mcbReleaseSuccess1-r1c1-medium-padding;
  }
  .mcbReleaseSuccess1_col_r1c1 {
    background-color:mix(@mcbReleaseSuccess1-r1c1-background-color,#fff,@mcbReleaseSuccess1-r1c1-background-color-opacity);
    position:fixed;
    top: 0;
    left:0;
    box-sizing:border-box;
  }
  .mcbReleaseSuccess1_col_r1_1c1_size_medium {
    width:@mcbReleaseSuccess1-r1_1c1-medium-width;
    height:@mcbReleaseSuccess1-r1_1c1-medium-height;
    align-items:@mcbReleaseSuccess1-r1_1c1-medium-horizontal-position;
  }
  .mcbReleaseSuccess1_col_r1_1c2_size_medium {
    width:@mcbReleaseSuccess1-r1_1c2-medium-width;
    height:@mcbReleaseSuccess1-r1_1c2-medium-height;
  }
  .mcbReleaseSuccess1_col_r1_1c3_size_medium {
    width:@mcbReleaseSuccess1-r1_1c3-medium-width;
    height:@mcbReleaseSuccess1-r1_1c3-medium-height;
    align-items:@mcbReleaseSuccess1-r1_1c3-medium-horizontal-position;
  }
  .mcbReleaseSuccess1_col_r2c1_size_medium {
    width:@mcbReleaseSuccess1-r2c1-medium-width;
    height:@mcbReleaseSuccess1-r2c1-medium-height;
    margin:@mcbReleaseSuccess1-r2c1-medium-margin;
    align-items:@mcbReleaseSuccess1-r2c1-medium-horizontal-position;
  }
  .mcbReleaseSuccess1_col_r2c1 {
    background-color:mix(@mcbReleaseSuccess1-r2c1-background-color,#fff,@mcbReleaseSuccess1-r2c1-background-color-opacity);
  }
  .mcbReleaseSuccess1_col_r2_1c1_size_medium {
    width:@mcbReleaseSuccess1-r2_1c1-medium-width;
    height:@mcbReleaseSuccess1-r2_1c1-medium-height;
    margin:@mcbReleaseSuccess1-r2_1c1-medium-margin;
  }
  .mcbReleaseSuccess1_col_r2_1c2_size_medium {
    width:@mcbReleaseSuccess1-r2_1c2-medium-width;
    height:@mcbReleaseSuccess1-r2_1c2-medium-height;
    margin:@mcbReleaseSuccess1-r2_1c2-medium-margin;
    padding:@mcbReleaseSuccess1-r2_1c2-medium-padding;
  }
  .mcbReleaseSuccess1_col_r2_2c1_size_medium {
    width:@mcbReleaseSuccess1-r2_2c1-medium-width;
    height:@mcbReleaseSuccess1-r2_2c1-medium-height;
  }
  .mcbReleaseSuccess1_row_row6{
    height:calc(100% - 173px);
  }
  .mcbReleaseSuccess1_col_r3c1_size_medium {
    width:@mcbReleaseSuccess1-r3c1-medium-width;
    padding:@mcbReleaseSuccess1-r3c1-medium-padding;
    margin:@mcbReleaseSuccess1-r3c1-medium-margin;
    align-items:@mcbReleaseSuccess1-r3c1-medium-horizontal-position;
  }
  .mcbReleaseSuccess1_col_r3c1 {
    background-color:mix(@mcbReleaseSuccess1-r3c1-background-color,#fff,@mcbReleaseSuccess1-r3c1-background-color-opacity);
    box-sizing:border-box;
  }
  .mcbReleaseSuccess1_col_r3_1c1_size_medium {
    width:@mcbReleaseSuccess1-r3_1c1-medium-width;
    height:@mcbReleaseSuccess1-r3_1c1-medium-height;
  }
  .mcbReleaseSuccess1_col_r3_1c1 {
    border-radius:@mcbReleaseSuccess1-r3_1c1-border-radius;
    background-color:mix(@mcbReleaseSuccess1-r3_1c1-background-color,#fff,@mcbReleaseSuccess1-r3_1c1-background-color-opacity);
    margin:16px 0;
  }
  .mcbReleaseSuccess1_col_r3_1c2_size_medium {
    width:@mcbReleaseSuccess1-r3_1c2-medium-width;
    height:@mcbReleaseSuccess1-r3_1c2-medium-height;
  }
  .mcbReleaseSuccess1_col_r3_1c3_size_medium {
    width:@mcbReleaseSuccess1-r3_1c3-medium-width;
    height:@mcbReleaseSuccess1-r3_1c3-medium-height;
  }
  .mcbReleaseSuccess1_col_r3_1c3 {
    border-radius:@mcbReleaseSuccess1-r3_1c3-border-radius;
    background-color:mix(@mcbReleaseSuccess1-r3_1c3-background-color,#fff,@mcbReleaseSuccess1-r3_1c3-background-color-opacity);
    margin:16px 0;
  }
  .mcbReleaseSuccess1_row_row8{
    align-self:stretch;
  }
  .mcbReleaseSuccess1_col_r3_2c1_size_medium {
    width:@mcbReleaseSuccess1-r3_2c1-medium-width;
    flex-direction:row;
    align-items:center;
    flex-wrap:wrap;
  }
</style>
