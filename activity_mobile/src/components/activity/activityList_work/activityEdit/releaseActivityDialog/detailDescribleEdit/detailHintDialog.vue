<template>
  <div :class="{mcbDetailHintDialog_col:true,mcbDetailHintDialog_col_mcbDetailHintDialogWindow:true,mcbDetailHintDialog_col_mcbDetailHintDialogWindow_size_large:attr.size==='large',mcbDetailHintDialog_col_mcbDetailHintDialogWindow_size_medium:attr.size==='medium',mcbDetailHintDialog_col_mcbDetailHintDialogWindow_size_small:attr.size==='small',mcbDetailHintDialog_col_mcbDetailHintDialogWindow_size_min:attr.size==='min',mcbDetailHintDialog_col_mcbDetailHintDialogWindow_checked:attr.checked,mcbDetailHintDialog_col_mcbDetailHintDialogWindow_disable:attr.disabled}">

    <div class="mcbDetailHintDialog_row mcbDetailHintDialog_row_row1">
      <div :class="{mcbDetailHintDialog_col:true,mcbDetailHintDialog_col_r1c1:true,mcbDetailHintDialog_col_r1c1_size_large:attr.size==='large',mcbDetailHintDialog_col_r1c1_size_medium:attr.size==='medium',mcbDetailHintDialog_col_r1c1_size_small:attr.size==='small',mcbDetailHintDialog_col_r1c1_size_min:attr.size==='min',mcbDetailHintDialog_col_r1c1_checked:attr.checked,mcbDetailHintDialog_col_r1c1_disable:attr.disabled}">

        <div class="mcbDetailHintDialog_row mcbDetailHintDialog_row_row2">
          <div :class="{mcbDetailHintDialog_col:true,mcbDetailHintDialog_col_r1_1c1:true,mcbDetailHintDialog_col_r1_1c1_size_large:attr.size==='large',mcbDetailHintDialog_col_r1_1c1_size_medium:attr.size==='medium',mcbDetailHintDialog_col_r1_1c1_size_small:attr.size==='small',mcbDetailHintDialog_col_r1_1c1_size_min:attr.size==='min',mcbDetailHintDialog_col_r1_1c1_checked:attr.checked,mcbDetailHintDialog_col_r1_1c1_disable:attr.disabled}">

            <lm2b-link-text
                    ref="backText"
                    refId="backText"
                    v-show="pvt_isShow.r1_1c1 === 'backText'"
                    :paraVarPair="pvt_r1_1c1.backText.paraVarPair"
                    :para="pvt_r1_1c1.backText.para"
                    :attr="pvt_r1_1c1.backText.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbDetailHintDialog_col:true,mcbDetailHintDialog_col_r1_1c2:true,mcbDetailHintDialog_col_r1_1c2_size_large:attr.size==='large',mcbDetailHintDialog_col_r1_1c2_size_medium:attr.size==='medium',mcbDetailHintDialog_col_r1_1c2_size_small:attr.size==='small',mcbDetailHintDialog_col_r1_1c2_size_min:attr.size==='min',mcbDetailHintDialog_col_r1_1c2_checked:attr.checked,mcbDetailHintDialog_col_r1_1c2_disable:attr.disabled}">

            <lm2b-link-text
                    ref="hintTitle"
                    refId="hintTitle"
                    v-show="pvt_isShow.r1_1c2 === 'hintTitle'"
                    :paraVarPair="pvt_r1_1c2.hintTitle.paraVarPair"
                    :para="pvt_r1_1c2.hintTitle.para"
                    :attr="pvt_r1_1c2.hintTitle.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbDetailHintDialog_col:true,mcbDetailHintDialog_col_r1_1c3:true,mcbDetailHintDialog_col_r1_1c3_size_large:attr.size==='large',mcbDetailHintDialog_col_r1_1c3_size_medium:attr.size==='medium',mcbDetailHintDialog_col_r1_1c3_size_small:attr.size==='small',mcbDetailHintDialog_col_r1_1c3_size_min:attr.size==='min',mcbDetailHintDialog_col_r1_1c3_checked:attr.checked,mcbDetailHintDialog_col_r1_1c3_disable:attr.disabled}">

          </div>
        </div>
      </div>
    </div>
    <div class="mcbDetailHintDialog_row mcbDetailHintDialog_row_row3">
      <div :class="{mcbDetailHintDialog_col:true,mcbDetailHintDialog_col_r2c1:true,mcbDetailHintDialog_col_r2c1_size_large:attr.size==='large',mcbDetailHintDialog_col_r2c1_size_medium:attr.size==='medium',mcbDetailHintDialog_col_r2c1_size_small:attr.size==='small',mcbDetailHintDialog_col_r2c1_size_min:attr.size==='min',mcbDetailHintDialog_col_r2c1_checked:attr.checked,mcbDetailHintDialog_col_r2c1_disable:attr.disabled}">

        <div class="mcbDetailHintDialog_row mcbDetailHintDialog_row_row4">
          <div :class="{mcbDetailHintDialog_col:true,mcbDetailHintDialog_col_r2_1c1:true,mcbDetailHintDialog_col_r2_1c1_size_large:attr.size==='large',mcbDetailHintDialog_col_r2_1c1_size_medium:attr.size==='medium',mcbDetailHintDialog_col_r2_1c1_size_small:attr.size==='small',mcbDetailHintDialog_col_r2_1c1_size_min:attr.size==='min',mcbDetailHintDialog_col_r2_1c1_checked:attr.checked,mcbDetailHintDialog_col_r2_1c1_disable:attr.disabled}">

            <lm2b-link-text
                    ref="articleTitle"
                    refId="articleTitle"
                    v-show="pvt_isShow.r2_1c1 === 'articleTitle'"
                    :paraVarPair="pvt_r2_1c1.articleTitle.paraVarPair"
                    :para="pvt_r2_1c1.articleTitle.para"
                    :attr="pvt_r2_1c1.articleTitle.attr">
            </lm2b-link-text>
          </div>
        </div>
        <div class="mcbDetailHintDialog_row mcbDetailHintDialog_row_row5">
          <div :class="{mcbDetailHintDialog_col:true,mcbDetailHintDialog_col_r2_2c1:true,mcbDetailHintDialog_col_r2_2c1_size_large:attr.size==='large',mcbDetailHintDialog_col_r2_2c1_size_medium:attr.size==='medium',mcbDetailHintDialog_col_r2_2c1_size_small:attr.size==='small',mcbDetailHintDialog_col_r2_2c1_size_min:attr.size==='min',mcbDetailHintDialog_col_r2_2c1_checked:attr.checked,mcbDetailHintDialog_col_r2_2c1_disable:attr.disabled}">

            <lm2b-link-text
                    ref="paragraphTitle"
                    refId="paragraphTitle"
                    v-show="pvt_isShow.r2_2c1 === 'paragraphTitle'"
                    :paraVarPair="pvt_r2_2c1.paragraphTitle.paraVarPair"
                    :para="pvt_r2_2c1.paragraphTitle.para"
                    :attr="pvt_r2_2c1.paragraphTitle.attr">
            </lm2b-link-text>
          </div>
        </div>
        <div class="mcbDetailHintDialog_row mcbDetailHintDialog_row_row6">
          <div :class="{mcbDetailHintDialog_col:true,mcbDetailHintDialog_col_r2_3c1:true,mcbDetailHintDialog_col_r2_3c1_size_large:attr.size==='large',mcbDetailHintDialog_col_r2_3c1_size_medium:attr.size==='medium',mcbDetailHintDialog_col_r2_3c1_size_small:attr.size==='small',mcbDetailHintDialog_col_r2_3c1_size_min:attr.size==='min',mcbDetailHintDialog_col_r2_3c1_checked:attr.checked,mcbDetailHintDialog_col_r2_3c1_disable:attr.disabled}">
            <lm2b-link-text
                    ref="suggestText"
                    refId="suggestText"
                    v-show="pvt_isShow.r2_3c1 === 'suggestText'"
                    :paraVarPair="pvt_r2_3c1.suggestText.paraVarPair"
                    v-for="(item, index) in pvt_r2_3c1.suggestText.forData"
                    :number="index"
                    :para="item.para"
                    :attr="item.attr">
            </lm2b-link-text>
          </div>
        </div>
        <div class="mcbDetailHintDialog_row mcbDetailHintDialog_row_row7">
          <div :class="{mcbDetailHintDialog_col:true,mcbDetailHintDialog_col_r2_4c1:true,mcbDetailHintDialog_col_r2_4c1_size_large:attr.size==='large',mcbDetailHintDialog_col_r2_4c1_size_medium:attr.size==='medium',mcbDetailHintDialog_col_r2_4c1_size_small:attr.size==='small',mcbDetailHintDialog_col_r2_4c1_size_min:attr.size==='min',mcbDetailHintDialog_col_r2_4c1_checked:attr.checked,mcbDetailHintDialog_col_r2_4c1_disable:attr.disabled}">

            <lm2b-link-text
                    ref="paragraphTitle2"
                    refId="paragraphTitle2"
                    v-show="pvt_isShow.r2_4c1 === 'paragraphTitle2'"
                    :paraVarPair="pvt_r2_4c1.paragraphTitle2.paraVarPair"
                    :para="pvt_r2_4c1.paragraphTitle2.para"
                    :attr="pvt_r2_4c1.paragraphTitle2.attr">
            </lm2b-link-text>
          </div>
        </div>
        <div class="mcbDetailHintDialog_row mcbDetailHintDialog_row_row8">
          <div :class="{mcbDetailHintDialog_col:true,mcbDetailHintDialog_col_r2_5c1:true,mcbDetailHintDialog_col_r2_5c1_size_large:attr.size==='large',mcbDetailHintDialog_col_r2_5c1_size_medium:attr.size==='medium',mcbDetailHintDialog_col_r2_5c1_size_small:attr.size==='small',mcbDetailHintDialog_col_r2_5c1_size_min:attr.size==='min',mcbDetailHintDialog_col_r2_5c1_checked:attr.checked,mcbDetailHintDialog_col_r2_5c1_disable:attr.disabled}">
            <lm2b-link-text
                    ref="stipulationText"
                    refId="stipulationText"
                    v-show="pvt_isShow.r2_5c1 === 'stipulationText'"
                    :paraVarPair="pvt_r2_5c1.stipulationText.paraVarPair"
                    v-for="(item, index) in pvt_r2_5c1.stipulationText.forData"
                    :number="index"
                    :para="item.para"
                    :attr="item.attr">
            </lm2b-link-text>
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
    components: {},
    inject: ['sys'],
    props: ['refId','para','attr','number'],
    data: function() {
      return {
        pvt_subModuleMap: {
          vessel:['r1_1c1','r1_1c2','r2_1c1','r2_2c1','r2_3c1','r2_4c1','r2_5c1'],
          subModule:['backText','hintTitle','articleTitle','paragraphTitle','suggestText','paragraphTitle2','stipulationText'],
        },
        pvt_isShow: {
          r1_1c1:null,
          r1_1c2:null,
          r2_1c1:null,
          r2_2c1:null,
          r2_3c1:null,
          r2_4c1:null,
          r2_5c1:null,
        },
        pvt_eventPortInput: [],
        suggestTextArr:[],
        suggestLabelArr:['li'],
        suggestAlignArr:['left'],
        suggestHeightArr:['40px'],
        suggestColorArr:['#333333'],
        suggestFontSizeArr:['14px'],
        stipulationTextArr:[],
        stipulationLabelArr:[],
        stipulationAlignArr:[],
        stipulationHeightArr:[],
        stipulationColorArr:[],
        stipulationFontSizeArr:[],
      };
    },
    watch: {
    },
    computed:{
      pvt_r1_1c1:function(){
        return {
          backText:{
            paraVarPair:{
            },
            para:{
              textData:'返回',
            },
            attr:{
              isClick:true,
              label:'span',
              textAlign:'left',
              fontWeight:true,
              height:'42px',
              color:'#12B0FF',
              fontSize:'16px',
              icon:'van-icon-arrow-left',
            },
          },
        };
      },
      pvt_r1_1c2:function(){
        return {
          hintTitle:{
            paraVarPair:{
            },
            para:{
              textData:'活动发布须知',
            },
            attr:{
              label:'div',
              textAlign:'center',
              fontWeight:true,
              height:'42px',
              color:'#000000',
              fontSize:'18px',
            },
          },
        };
      },
      pvt_r2_1c1:function(){
        return {
          articleTitle:{
            paraVarPair:{
            },
            para:{
              textData:'活动发布须知',
            },
            attr:{
              label:'div',
              textAlign:'center',
              fontWeight:true,
              height:'50px',
              color:'#333333',
              fontSize:'14px',
            },
          },
        };
      },
      pvt_r2_2c1:function(){
        return {
          paragraphTitle:{
            paraVarPair:{
            },
            para:{
              textData:'这样的活动更容易被推荐:',
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontWeight:true,
              height:'50px',
              color:'#333333',
              fontSize:'14px',
            },
          },
        };
      },
      pvt_r2_3c1:function(){
        let loopModule={
          suggestText:{
            para:{
              textData:this.suggestTextArr
            },
            attr:{
              label:this.suggestLabelArr,
              textAlign:this.suggestAlignArr,
              height:this.suggestHeightArr,
              color:this.suggestColorArr,
              fontSize:this.suggestFontSizeArr,
            },
          },
        };
        let forData = this.pvt_createForData(loopModule);
        return {
          suggestText:{
            paraVarPair:{
            },
            forData: forData.suggestText,
          },
        };
      },
      pvt_r2_4c1:function(){
        return {
          paragraphTitle2:{
            paraVarPair:{
            },
            para:{
              textData:'这种内容的活动不能出现，否则将被屏蔽和删除:',
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontWeight:true,
              height:'50px',
              color:'#333333',
              fontSize:'14px',
            },
          },
        };
      },
      pvt_r2_5c1:function(){
        let loopModule={
          stipulationText:{
            para:{
              textData:this.stipulationTextArr
            },
            attr:{
              label:this.stipulationLabelArr,
              textAlign:this.stipulationAlignArr,
              height:this.stipulationHeightArr,
              color:this.stipulationColorArr,
              fontSize:this.stipulationFontSizeArr,
            },
          },
        };
        let forData = this.pvt_createForData(loopModule);
        return {
          stipulationText:{
            paraVarPair:{
            },
            forData: forData.stipulationText,
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
          successCallBack:successCallBack,
          errorCallBack:errorCallBack,
          nStep:0
        }
        let dbFlag;
        let ref = {
          sm1:'backText',
          sm2:'hintTitle',
          sm3:'articleTitle',
          sm4:'paragraphTitle',
          sm5:'suggestText',
          sm6:'paragraphTitle2',
          sm7:'stipulationText'
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
              $this.suggestTextArr = [
                '主题明确、内容清晰、形式健康，有较大受众基础；',
                '主办方信息齐全，包括名称、头像、简介；',
                '活动标题简介有效，活动海报设计精美，且于主题相匹配；',
                '活动举办时间、地点明确，票种设置清晰；',
                '活动详情亮点突出、层次鲜明，且排版图文并茂、干净整齐；',
                '活动详情中不添加其他外链及公众号我二维码；',
                '活动详情中不添加大量营销型、煽动型文案；',
                '活动报名、费用支付通过互动吧完成，无其他报名、支付方式；',
                '设有会员价的活动能优先推荐。'
              ];
              $this.suggestLabelArr = [];
              $this.suggestAlignArr = [];
              $this.suggestHeightArr = [];
              $this.suggestColorArr = [];
              $this.suggestFontSizeArr = [];
              for(let i = 0;i < $this.suggestTextArr.length;i++){
                $this.suggestLabelArr.push('li');
                $this.suggestAlignArr.push('left');
                $this.suggestHeightArr.push('40px');
                $this.suggestColorArr.push('#333333');
                $this.suggestFontSizeArr.push('14px');
              }
              $this.stipulationTextArr = [
                '活动内容禁止有诱导用户集赞、转发、分享朋友圈并关联奖励/奖项等形式的内容及文字;',
                '活动内容禁止涉及有引导购房、引导炒股、引导重金属等期货交易、引导炒币的内容，禁止涉及有ICO发行的内容；',
                '活动内容中禁止有带有政治、色情、赌博、黑户、维权上访、捐款等或其他容易引起误解或歧义的内容及文字；',
                '活动内容中禁止使用互动吧站外报名方式(包括但不限于引导外链报名、微信报名、公众号报名等)；',
                '活动内容中禁止留有任何外部联系方式或者网站链接，包括但不限于手机号、微信、QQ、外网链接、二维码等；',
                '活动内容中禁止有反对宪法所确定的基本原则的、危害国家安全，涉及国家领导人名字肖像等损害国家荣誉和利益、宣扬邪教和封建迷信等内容及文字；',
                '活动内容中禁止有违反广告法等绝对化的语言文字或用于，如最高、最大、最佳、顶级、极品、第一品牌、绝无仅有、顶尖、万能、第一、唯一、国家级等；',
                '活动内容属于无意义活动。'
              ];
              $this.stipulationLabelArr = [];
              $this.stipulationAlignArr = [];
              $this.stipulationHeightArr = [];
              $this.stipulationColorArr = [];
              $this.stipulationFontSizeArr = [];
              for(let i = 0;i < $this.stipulationTextArr.length;i++){
                $this.stipulationLabelArr.push('li');
                $this.stipulationAlignArr.push('left');
                $this.stipulationHeightArr.push('40px');
                $this.stipulationColorArr.push('#333333');
                $this.stipulationFontSizeArr.push('14px');
              }
              para.nStep = 'showModules';
              ++dbFlag;
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                'backText','hintTitle','articleTitle','paragraphTitle','suggestText','paragraphTitle2','stipulationText'
              ];
              $this.showSubModule(refId,true,function(){
                para.nStep = 'forceUpdateData';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'forceUpdateData':
              $this.forceUpdateData(function(){
                para.nStep = 'startModule_backText';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_backText':
              $this.sm[ref.sm1].startModule(function(){
                para.nStep = 'startModule_hintTitle';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_hintTitle':
              $this.sm[ref.sm2].startModule(function(){
                para.nStep = 'startModule_articleTitle';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_articleTitle':
              $this.sm[ref.sm3].startModule(function(){
                para.nStep = 'startModule_paragraphTitle';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_paragraphTitle':
              $this.sm[ref.sm4].startModule(function(){
                para.nStep = 'startModule_suggestText';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_suggestText':
              //循环组件
              let arr = [];
              for(let i = 0;i < $this.suggestTextArr.length;i++){
                arr.push([para.successCallBack,para.errorCallBack]);
              }
              $this.callLoopModuleMethod(ref.sm5,'startModule',arr,function(){
                para.nStep = 'startModule_paragraphTitle2';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_paragraphTitle2':
              $this.sm[ref.sm6].startModule(function(){
                para.nStep = 'startModule_stipulationText';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_stipulationText':
              //循环组件
              let arr1 = [];
              for(let i = 0;i < $this.stipulationTextArr.length;i++){
                arr1.push([para.successCallBack,para.errorCallBack]);
              }
              $this.callLoopModuleMethod(ref.sm7,'startModule',arr1,function(){
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
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
      hideModule:function(){
        let $this = this;
        $this.hideSelfModule($this.refId,function(){
        },function(error){console.log(error)});
      },
      backText_textClickEvent:function(){
        this.hideModule();
      },
    },
  };
</script>
<style lang="less" scoped>
    @import '../../../../../../assets/var_sq';
  .mcbDetailHintDialog_container {
  }
  .mcbDetailHintDialog_row {
    display:flex;
    /*flex:1;*/
    flex-grow:0;
    flex-shrink:1;
    flex-basis:auto;
  }
  .mcbDetailHintDialog_col {
    display:flex;
    flex-direction:column;
  }
  .mcbDetailHintDialog_col_mcbDetailHintDialogWindow_size_medium {
    width:@mcbDetailHintDialog-mcbDetailHintDialogWindow-medium-width;
  }
  .mcbDetailHintDialog_col_mcbDetailHintDialogWindow{
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    background:#fff;
  }
  .mcbDetailHintDialog_col_r1c1_size_medium {
    width:@mcbDetailHintDialog-r1c1-medium-width;
    height:@mcbDetailHintDialog-r1c1-medium-height;
    padding:@mcbDetailHintDialog-r1c1-medium-padding;
  }
  .mcbDetailHintDialog_col_r1c1 {
    border-style:@mcbDetailHintDialog-r1c1-border-style;
    border-width:@mcbDetailHintDialog-r1c1-border-width;
    border-color:mix(@mcbDetailHintDialog-r1c1-border-color,#fff,@mcbDetailHintDialog-r1c1-hover-border-color-opacity);
    box-sizing:border-box;
    background:#fff;
    position:fixed;
    top:0;
    left:0;
    z-index:10;
    overflow:hidden;
  }
  .mcbDetailHintDialog_col_r1_1c1_size_medium {
    width:@mcbDetailHintDialog-r1_1c1-medium-width;
    height:@mcbDetailHintDialog-r1_1c1-medium-height;
    padding:@mcbDetailHintDialog-r1_1c1-medium-padding;
    justify-content:@mcbDetailHintDialog-r1_1c1-medium-vertical-position;
  }
  .mcbDetailHintDialog_col_r1_1c2_size_medium {
    width:@mcbDetailHintDialog-r1_1c2-medium-width;
    height:@mcbDetailHintDialog-r1_1c2-medium-height;
    padding:@mcbDetailHintDialog-r1_1c2-medium-padding;
    justify-content:@mcbDetailHintDialog-r1_1c2-medium-vertical-position;
  }
  .mcbDetailHintDialog_col_r1_1c3_size_medium {
    width:@mcbDetailHintDialog-r1_1c3-medium-width;
    height:@mcbDetailHintDialog-r1_1c3-medium-height;
  }
  .mcbDetailHintDialog_row_row3{
    height:100%;
  }
  .mcbDetailHintDialog_col_r2c1_size_medium {
    width:@mcbDetailHintDialog-r2c1-medium-width;
    margin:@mcbDetailHintDialog-r2c1-medium-margin;
    padding:@mcbDetailHintDialog-r2c1-medium-padding;
    height:calc(100% - 42px);
    flex-shrink:1;
    box-sizing:border-box;
    overflow:scroll;
  }
  .mcbDetailHintDialog_row_row4{
    flex-shrink:0;
  }
  .mcbDetailHintDialog_col_r2_1c1_size_medium {
    width:@mcbDetailHintDialog-r2_1c1-medium-width;
    margin:@mcbDetailHintDialog-r2_1c1-medium-margin;
    justify-content:@mcbDetailHintDialog-r2_1c1-medium-vertical-position;
  }
  .mcbDetailHintDialog_row_row5{
    flex-shrink:0;
  }
  .mcbDetailHintDialog_col_r2_2c1_size_medium {
    width:@mcbDetailHintDialog-r2_2c1-medium-width;
    height:@mcbDetailHintDialog-r2_2c1-medium-height;
    padding:@mcbDetailHintDialog-r2_2c1-medium-padding;
    justify-content:@mcbDetailHintDialog-r2_2c1-medium-vertical-position;
  }
  .mcbDetailHintDialog_row_row6{
    flex-shrink:0;
  }
  .mcbDetailHintDialog_col_r2_3c1_size_medium {
    width:@mcbDetailHintDialog-r2_3c1-medium-width;
    justify-content:@mcbDetailHintDialog-r2_3c1-medium-vertical-position;
    margin:@mcbDetailHintDialog-r2_3c1-medium-margin;
  }
  .mcbDetailHintDialog_row_row7{
    flex-shrink:0;
  }
  .mcbDetailHintDialog_col_r2_4c1_size_medium {
    width:@mcbDetailHintDialog-r2_4c1-medium-width;
  }
  .mcbDetailHintDialog_row_row8{
    flex-shrink:0;
  }
  .mcbDetailHintDialog_col_r2_5c1_size_medium {
    width:@mcbDetailHintDialog-r2_5c1-medium-width;
  }
</style>
