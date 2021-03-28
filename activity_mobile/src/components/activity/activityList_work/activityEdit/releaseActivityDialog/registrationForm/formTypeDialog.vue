<template>
  <div class="maskClass">
    <div class="mcbFormTypeDialog_container">
      <div class="mcbFormTypeDialog_row mcbFormTypeDialog_row_mcbFormTypeDialogRow">
        <div :class="{mcbFormTypeDialog_col:true,mcbFormTypeDialog_col_mcbFormTypeDialogWindow:true,mcbFormTypeDialog_col_mcbFormTypeDialogWindow_size_large:attr.size==='large',mcbFormTypeDialog_col_mcbFormTypeDialogWindow_size_medium:attr.size==='medium',mcbFormTypeDialog_col_mcbFormTypeDialogWindow_size_small:attr.size==='small',mcbFormTypeDialog_col_mcbFormTypeDialogWindow_size_min:attr.size==='min',mcbFormTypeDialog_col_mcbFormTypeDialogWindow_checked:attr.checked,mcbFormTypeDialog_col_mcbFormTypeDialogWindow_disable:attr.disabled}">

          <div class="mcbFormTypeDialog_row mcbFormTypeDialog_row_row1">
            <div :class="{mcbFormTypeDialog_col:true,mcbFormTypeDialog_col_r1c1:true,mcbFormTypeDialog_col_r1c1_size_large:attr.size==='large',mcbFormTypeDialog_col_r1c1_size_medium:attr.size==='medium',mcbFormTypeDialog_col_r1c1_size_small:attr.size==='small',mcbFormTypeDialog_col_r1c1_size_min:attr.size==='min',mcbFormTypeDialog_col_r1c1_checked:attr.checked,mcbFormTypeDialog_col_r1c1_disable:attr.disabled}">

              <div class="mcbFormTypeDialog_row mcbFormTypeDialog_row_row2">
                <div :class="{mcbFormTypeDialog_col:true,mcbFormTypeDialog_col_r1_1c1:true,mcbFormTypeDialog_col_r1_1c1_size_large:attr.size==='large',mcbFormTypeDialog_col_r1_1c1_size_medium:attr.size==='medium',mcbFormTypeDialog_col_r1_1c1_size_small:attr.size==='small',mcbFormTypeDialog_col_r1_1c1_size_min:attr.size==='min',mcbFormTypeDialog_col_r1_1c1_checked:attr.checked,mcbFormTypeDialog_col_r1_1c1_disable:attr.disabled}">

                  <lm2b-link-text
                          ref="title1Text"
                          refId="title1Text"
                          v-show="pvt_isShow.r1_1c1 === 'title1Text'"
                          :paraVarPair="pvt_r1_1c1.title1Text.paraVarPair"
                          :para="pvt_r1_1c1.title1Text.para"
                          :attr="pvt_r1_1c1.title1Text.attr">
                  </lm2b-link-text>
                </div>
              </div>
              <div class="mcbFormTypeDialog_row mcbFormTypeDialog_row_row3">
                <div :class="{mcbFormTypeDialog_col:true,mcbFormTypeDialog_col_r1_2c1:true,mcbFormTypeDialog_col_r1_2c1_size_large:attr.size==='large',mcbFormTypeDialog_col_r1_2c1_size_medium:attr.size==='medium',mcbFormTypeDialog_col_r1_2c1_size_small:attr.size==='small',mcbFormTypeDialog_col_r1_2c1_size_min:attr.size==='min',mcbFormTypeDialog_col_r1_2c1_checked:attr.checked,mcbFormTypeDialog_col_r1_2c1_disable:attr.disabled}">

                  <lm2b-radio
                          ref="type1Radio"
                          refId="type1Radio"
                          v-show="pvt_isShow.r1_2c1 === 'type1Radio'"
                          :paraVarPair="pvt_r1_2c1.type1Radio.paraVarPair"
                          :para="pvt_r1_2c1.type1Radio.para"
                          :attr="pvt_r1_2c1.type1Radio.attr">
                  </lm2b-radio>
                </div>
              </div>
              <div class="mcbFormTypeDialog_row mcbFormTypeDialog_row_row4">
                <div :class="{mcbFormTypeDialog_col:true,mcbFormTypeDialog_col_r1_3c1:true,mcbFormTypeDialog_col_r1_3c1_size_large:attr.size==='large',mcbFormTypeDialog_col_r1_3c1_size_medium:attr.size==='medium',mcbFormTypeDialog_col_r1_3c1_size_small:attr.size==='small',mcbFormTypeDialog_col_r1_3c1_size_min:attr.size==='min',mcbFormTypeDialog_col_r1_3c1_checked:attr.checked,mcbFormTypeDialog_col_r1_3c1_disable:attr.disabled}">

                  <lm2b-link-text
                          ref="title2Text"
                          refId="title2Text"
                          v-show="pvt_isShow.r1_3c1 === 'title2Text'"
                          :paraVarPair="pvt_r1_3c1.title2Text.paraVarPair"
                          :para="pvt_r1_3c1.title2Text.para"
                          :attr="pvt_r1_3c1.title2Text.attr">
                  </lm2b-link-text>
                </div>
              </div>
              <div class="mcbFormTypeDialog_row mcbFormTypeDialog_row_row5">
                <div :class="{mcbFormTypeDialog_col:true,mcbFormTypeDialog_col_r1_4c1:true,mcbFormTypeDialog_col_r1_4c1_size_large:attr.size==='large',mcbFormTypeDialog_col_r1_4c1_size_medium:attr.size==='medium',mcbFormTypeDialog_col_r1_4c1_size_small:attr.size==='small',mcbFormTypeDialog_col_r1_4c1_size_min:attr.size==='min',mcbFormTypeDialog_col_r1_4c1_checked:attr.checked,mcbFormTypeDialog_col_r1_4c1_disable:attr.disabled}">

                  <lm2b-radio
                          ref="type2Radio"
                          refId="type2Radio"
                          v-show="pvt_isShow.r1_4c1 === 'type2Radio'"
                          :paraVarPair="pvt_r1_4c1.type2Radio.paraVarPair"
                          :para="pvt_r1_4c1.type2Radio.para"
                          :attr="pvt_r1_4c1.type2Radio.attr">
                  </lm2b-radio>
                </div>
              </div>
            </div>
          </div>
          <div class="mcbFormTypeDialog_row mcbFormTypeDialog_row_row6">
            <div :class="{mcbFormTypeDialog_col:true,mcbFormTypeDialog_col_r2c1:true,mcbFormTypeDialog_col_r2c1_size_large:attr.size==='large',mcbFormTypeDialog_col_r2c1_size_medium:attr.size==='medium',mcbFormTypeDialog_col_r2c1_size_small:attr.size==='small',mcbFormTypeDialog_col_r2c1_size_min:attr.size==='min',mcbFormTypeDialog_col_r2c1_checked:attr.checked,mcbFormTypeDialog_col_r2c1_disable:attr.disabled}">

              <lm2b-link-text
                      ref="cancelText"
                      refId="cancelText"
                      v-show="pvt_isShow.r2c1 === 'cancelText'"
                      :paraVarPair="pvt_r2c1.cancelText.paraVarPair"
                      :para="pvt_r2c1.cancelText.para"
                      :attr="pvt_r2c1.cancelText.attr">
              </lm2b-link-text>
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
  export default {
    components: {},
    inject: ['sys'],
    props: ['refId','para','attr','number'],
    data: function() {
      return {
        pvt_subModuleMap: {
          vessel:['r1_1c1','r1_2c1','r1_3c1','r1_4c1','r2c1'],
          subModule:['title1Text','type1Radio','title2Text','type2Radio','cancelText'],
        },
        pvt_isShow: {
          r1_1c1:null,
          r1_2c1:null,
          r1_3c1:null,
          r1_4c1:null,
          r2c1:null,
        },
        pvt_eventPortInput: ['confirmEvent'],

        value1:null,
        radioArr1:null,
        value2:null,
        radioArr2:null,
      };
    },
    watch: {
    },
    computed:{
      pvt_r1_1c1:function(){
        return {
          title1Text:{
            paraVarPair:{
            },
            para:{
              textData:'常用项',
            },
            attr:{
              label:'div',
              textAlign:'left',
              height:'30px',
              color:'#999999',
              fontSize:'14px',
              background:'transparent',
            },
          },
        };
      },
      pvt_r1_2c1:function(){
        return {
          type1Radio:{
            paraVarPair:{
              radioData:'value1',
            },
            para:{
              radioData:this.value1,
            },
            attr:{
              radioArr:this.radioArr1,
              button:true,
              disabledArr:this.disabledArr1
            },
          },
        };
      },
      pvt_r1_3c1:function(){
        return {
          title2Text:{
            paraVarPair:{
            },
            para:{
              textData:'自定义项',
            },
            attr:{
              label:'div',
              textAlign:'left',
              height:'30px',
              color:'#999999',
              fontSize:'14px',
              background:'transparent',
            },
          },
        };
      },
      pvt_r1_4c1:function(){
        return {
          type2Radio:{
            paraVarPair:{
              radioData:'value2',
            },
            para:{
              radioData:this.value2,
            },
            attr:{
              radioArr:this.radioArr2,
              button:true,
            },
          },
        };
      },
      pvt_r2c1:function(){
        return {
          cancelText:{
            paraVarPair:{
            },
            para:{
              textData:'取消',
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'center',
              fontWeight:true,
              height:'49px',
              color:'#333333',
              fontSize:'16px',
              background:'transparent',
            },
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
      startModule:function(nameArr,successCallBack,errorCallBack){
        let $this = this;
        let para = {
          successCallBack:successCallBack,
          errorCallBack:errorCallBack,
          nStep:0
        }
        let dbFlag;
        let ref = {
          sm1:'title1Text',
          sm2:'type1Radio',
          sm3:'title2Text',
          sm4:'type2Radio',
          sm5:'cancelText'
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
              // 初始化数据
              $this.value1 = null;
              $this.radioArr1 = [
                {label:'微信',text:'微信'},
                {label:'QQ',text:'QQ'},
                {label:'邮箱',text:'邮箱'},
                {label:'公司',text:'公司'},
                {label:'部门',text:'部门'},
                {label:'职业',text:'职业'},
                {label:'行业',text:'行业'},
                {label:'年龄',text:'年龄'},
                {label:'性别',text:'性别'},
                {label:'毕业院校',text:'毕业院校'},
                {label:'所在城市',text:'所在城市'},
                {label:'身份证号',text:'身份证号'},
                {label:'银行卡号',text:'银行卡号'},
                {label:'自我介绍',text:'自我介绍'},
                {label:'月收入',text:'月收入'},
                {label:'国籍',text:'国籍'},
                {label:'户籍地',text:'户籍地'},
                {label:'籍贯',text:'籍贯'},
                {label:'民族',text:'民族'},
                {label:'政治面貌',text:'政治面貌'}
              ];
              $this.value2 = null;
              $this.disabledArr1 = [];
              $this.radioArr2 = [
                {label:'单行文本',text:'+单行文本'},
                {label:'多行文本',text:'+多行文本'},
                {label:'单选问题',text:'+单选框'},
                {label:'多选问题',text:'+复选框'},
                {label:'数字输入',text:'+数字输入框'},
                {label:'图片上传',text:'+图片上传'}
              ];
              if(nameArr){
                for(let i = 0;i < $this.radioArr1.length;i++){
                  if(nameArr.includes($this.radioArr1[i].label)){
                    $this.disabledArr1.push(i + 1);
                  }
                }
              }
              para.nStep = 'showModules';
              ++dbFlag;
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                'title1Text','type1Radio','title2Text','type2Radio','cancelText'
              ];
              $this.showSubModule(refId,true,function(){
                para.nStep = 'forceUpdateData';
                if(++dbFlag === 2){
                  $this.startModule(nameArr,successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'forceUpdateData':
              $this.forceUpdateData(function(){
                para.nStep = 'startModule_title1';
                if(++dbFlag === 2){
                  $this.startModule(nameArr,successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_title1':
              $this.sm[ref.sm1].startModule(function(){
                para.nStep = 'startModule_radio1';
                if(++dbFlag === 2){
                  $this.startModule(nameArr,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)});
              break;
            case 'startModule_radio1':
              $this.sm[ref.sm2].startModule(function(){
                para.nStep = 'startModule_title2';
                if(++dbFlag === 2){
                  $this.startModule(nameArr,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)});
              break;
            case 'startModule_title2':
              $this.sm[ref.sm3].startModule(function(){
                para.nStep = 'startModule_radio2';
                if(++dbFlag === 2){
                  $this.startModule(nameArr,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)});
              break;
            case 'startModule_radio2':
              $this.sm[ref.sm4].startModule(function(){
                para.nStep = 'startModule_text';
                if(++dbFlag === 2){
                  $this.startModule(nameArr,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)});
              break;
            case 'startModule_text':
              $this.sm[ref.sm5].startModule(function(){
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.startModule(nameArr,successCallBack,errorCallBack);
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
      commonItemChoose:function(){
        //常用项
        let $this = this;
        let obj = {
          isComment:true,
          label:$this.value1,
          baseCommentName:'lm2b-input-text',
          attr:{}
        };
        if($this.value1 === '邮箱'){
          obj.baseCommentName = 'lm2b-input-email';
        }
        if($this.value1 === '性别'){
          obj.baseCommentName = 'lm2b-radio';
          obj.attr = {
            radioArr:[{label:0,text:'男'},{label:1,text:'女'}]
          };
        }
        if($this.value1 === '身份证号'){
          obj.baseCommentName = 'lm2b-input-idcard';
        }
        if($this.value1 === '银行卡号'){
          obj.baseCommentName = 'lm2b-input-bank';
        }
        if($this.value1 === '自我介绍'){
          obj.attr = {
            type:'textarea'
          };
        }
        $this.hideSelfModule($this.refId,function(){
          $this.ep.confirmEvent(obj);
        },function(error){console.log(error)});
      },
      customItemChoose:function(){
        //自定义项
        let $this = this;
        let obj = {
          isComment:false,
          title:$this.value2,
          baseCommentName:'lm2b-input-text',
          attr:{}
        };
        if($this.value2 === '多行文本'){
          obj.attr = {
            type:'textarea'
          };
        }
        if($this.value2 === '单选问题'){
          obj.baseCommentName = 'lm2b-radio';
        }
        if($this.value2 === '多选问题'){
          obj.baseCommentName = 'lm2b-checkbox';
        }
        if($this.value2 === '图片上传'){
          obj.baseCommentName = 'lm2b-picture-upload';
        }
        if($this.value2 === '数字输入'){
          //移动端的数字输入框为固定位数的数字输入,故用文本输入框
        }
        $this.hideSelfModule($this.refId,function(){
          $this.ep.confirmEvent(obj);
        },function(error){console.log(error)});
      },
      hideModule:function(){
        let $this = this;
        $this.hideSelfModule($this.refId,function(){
        },function(error){console.log(error)});
      },
      type1Radio_dataModifyEvent:function(){
        this.commonItemChoose();
      },
      type2Radio_dataModifyEvent:function(){
        this.customItemChoose();
      },
      cancelText_textClickEvent:function(){
        this.hideModule();
      },
    },
  };
</script>
<style lang="less" scoped>
    @import '../../../../../../assets/var_sq';
  .maskClass{
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    z-index:1000;
    background:rgba(0,0,0,0.6);
  }
  .mcbFormTypeDialog_container {
  }
  .mcbFormTypeDialog_row {
    display:flex;
    /*flex:1;*/
  }
  .mcbFormTypeDialog_col {
    display:flex;
    flex-direction:column;
  }
  .mcbFormTypeDialog_col_mcbFormTypeDialogWindow{
    position:fixed;
    bottom:0;
    left:0;
    box-sizing:border-box;
  }
  .mcbFormTypeDialog_col_mcbFormTypeDialogWindow_size_medium {
    width:@mcbFormTypeDialog-mcbFormTypeDialogWindow-medium-width;
    padding:@mcbFormTypeDialog-mcbFormTypeDialogWindow-medium-padding;
  }
  .mcbFormTypeDialog_col_r1c1_size_medium {
    width:@mcbFormTypeDialog-r1c1-medium-width;
    padding:@mcbFormTypeDialog-r1c1-medium-padding;
  }
  .mcbFormTypeDialog_col_r1c1 {
    border-radius:@mcbFormTypeDialog-r1c1-border-radius;
    background-color:mix(@mcbFormTypeDialog-r1c1-background-color,#fff,@mcbFormTypeDialog-r1c1-background-color-opacity);
  }
  .mcbFormTypeDialog_col_r1_1c1_size_medium {
    width:@mcbFormTypeDialog-r1_1c1-medium-width;
    height:@mcbFormTypeDialog-r1_1c1-medium-height;
    padding:@mcbFormTypeDialog-r1_1c1-medium-padding;
  }
  .mcbFormTypeDialog_col_r1_2c1_size_medium {
    width:@mcbFormTypeDialog-r1_2c1-medium-width;
  }
  .mcbFormTypeDialog_col_r1_3c1_size_medium {
    width:@mcbFormTypeDialog-r1_3c1-medium-width;
    height:@mcbFormTypeDialog-r1_3c1-medium-height;
    margin:@mcbFormTypeDialog-r1_3c1-medium-margin;
  }
  .mcbFormTypeDialog_col_r1_4c1_size_medium {
    width:@mcbFormTypeDialog-r1_4c1-medium-width;
  }
  .mcbFormTypeDialog_col_r2c1_size_medium {
    width:@mcbFormTypeDialog-r2c1-medium-width;
    padding:@mcbFormTypeDialog-r2c1-medium-padding;
    height:@mcbFormTypeDialog-r2c1-medium-height;
    margin:@mcbFormTypeDialog-r2c1-medium-margin;
  }
  .mcbFormTypeDialog_col_r2c1 {
    border-radius:@mcbFormTypeDialog-r2c1-border-radius;
    background-color:mix(@mcbFormTypeDialog-r2c1-background-color,#fff,@mcbFormTypeDialog-r2c1-background-color-opacity);
  }
</style>
