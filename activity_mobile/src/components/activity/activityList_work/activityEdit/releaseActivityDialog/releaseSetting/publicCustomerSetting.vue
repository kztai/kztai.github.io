<template>
  <div class="mcbReleaseCustomerSetting_mask">
    <div v-show="pvt_isWinShow.mcbReleaseCustomerSettingWindow"
         :class="{mcbReleaseCustomerSetting_container:true,mcbReleaseCustomerSetting_col:true,mcbReleaseCustomerSetting_col_mcbReleaseCustomerSettingWindow:true,mcbReleaseCustomerSetting_col_mcbReleaseCustomerSettingWindow_size_large:attr.size==='large',mcbReleaseCustomerSetting_col_mcbReleaseCustomerSettingWindow_size_medium:attr.size==='medium',mcbReleaseCustomerSetting_col_mcbReleaseCustomerSettingWindow_size_small:attr.size==='small',mcbReleaseCustomerSetting_col_mcbReleaseCustomerSettingWindow_size_min:attr.size==='min',mcbReleaseCustomerSetting_col_mcbReleaseCustomerSettingWindow_checked:attr.checked,mcbReleaseCustomerSetting_col_mcbReleaseCustomerSettingWindow_disable:attr.disabled}" >

      <div class="mcbReleaseCustomerSetting_row mcbReleaseCustomerSetting_row_row1">
        <div v-show="pvt_isWinShow.r1c1"
             :class="{mcbReleaseCustomerSetting_col:true,mcbReleaseCustomerSetting_col_r1c1:true,mcbReleaseCustomerSetting_col_r1c1_size_large:attr.size==='large',mcbReleaseCustomerSetting_col_r1c1_size_medium:attr.size==='medium',mcbReleaseCustomerSetting_col_r1c1_size_small:attr.size==='small',mcbReleaseCustomerSetting_col_r1c1_size_min:attr.size==='min',mcbReleaseCustomerSetting_col_r1c1_checked:attr.checked,mcbReleaseCustomerSetting_col_r1c1_disable:attr.disabled}" >

          <div class="mcbReleaseCustomerSetting_row mcbReleaseCustomerSetting_row_row3">
            <div v-show="pvt_isWinShow.r1_1c1"
                 :class="{mcbReleaseCustomerSetting_col:true,mcbReleaseCustomerSetting_col_r1_1c1:true,mcbReleaseCustomerSetting_col_r1_1c1_size_large:attr.size==='large',mcbReleaseCustomerSetting_col_r1_1c1_size_medium:attr.size==='medium',mcbReleaseCustomerSetting_col_r1_1c1_size_small:attr.size==='small',mcbReleaseCustomerSetting_col_r1_1c1_size_min:attr.size==='min',mcbReleaseCustomerSetting_col_r1_1c1_checked:attr.checked,mcbReleaseCustomerSetting_col_r1_1c1_disable:attr.disabled}" >

              <lm2b-link-text
                      ref="titleText"
                      refId="titleText"
                      v-show="pvt_isShow.r1_1c1 === 'titleText'"
                      :paraVarPair="pvt_r1_1c1.titleText.paraVarPair"
                      :para="pvt_r1_1c1.titleText.para"
                      :attr="pvt_r1_1c1.titleText.attr">
              </lm2b-link-text>
            </div>
            <div v-show="pvt_isWinShow.r1_1c2"
                 :class="{mcbReleaseCustomerSetting_col:true,mcbReleaseCustomerSetting_col_r1_1c2:true,mcbReleaseCustomerSetting_col_r1_1c2_size_large:attr.size==='large',mcbReleaseCustomerSetting_col_r1_1c2_size_medium:attr.size==='medium',mcbReleaseCustomerSetting_col_r1_1c2_size_small:attr.size==='small',mcbReleaseCustomerSetting_col_r1_1c2_size_min:attr.size==='min',mcbReleaseCustomerSetting_col_r1_1c2_checked:attr.checked,mcbReleaseCustomerSetting_col_r1_1c2_disable:attr.disabled}" >

              <lm2b-checkbox
                      ref="checkbox1"
                      refId="checkbox1"
                      v-show="pvt_isShow.r1_1c2 === 'checkbox1'"
                      :paraVarPair="pvt_r1_1c2.checkbox1.paraVarPair"
                      :para="pvt_r1_1c2.checkbox1.para"
                      :attr="pvt_r1_1c2.checkbox1.attr">
              </lm2b-checkbox>
            </div>
          </div>
          <div class="mcbReleaseCustomerSetting_row mcbReleaseCustomerSetting_row_row4">
            <div v-show="pvt_isWinShow.r1_2c1"
                 :class="{mcbReleaseCustomerSetting_col:true,mcbReleaseCustomerSetting_col_r1_2c1:true,mcbReleaseCustomerSetting_col_r1_2c1_size_large:attr.size==='large',mcbReleaseCustomerSetting_col_r1_2c1_size_medium:attr.size==='medium',mcbReleaseCustomerSetting_col_r1_2c1_size_small:attr.size==='small',mcbReleaseCustomerSetting_col_r1_2c1_size_min:attr.size==='min',mcbReleaseCustomerSetting_col_r1_2c1_checked:attr.checked,mcbReleaseCustomerSetting_col_r1_2c1_disable:attr.disabled}" >

              <lm2b-checkbox
                      ref="checkbox2"
                      refId="checkbox2"
                      v-show="pvt_isShow.r1_2c1 === 'checkbox2'"
                      :paraVarPair="pvt_r1_2c1.checkbox2.paraVarPair"
                      :para="pvt_r1_2c1.checkbox2.para"
                      :attr="pvt_r1_2c1.checkbox2.attr">
              </lm2b-checkbox>
            </div>
          </div>
        </div>
      </div>
      <div class="mcbReleaseCustomerSetting_row mcbReleaseCustomerSetting_row_row2">
        <div v-show="pvt_isWinShow.r2c1"
             :class="{mcbReleaseCustomerSetting_col:true,mcbReleaseCustomerSetting_col_r2c1:true,mcbReleaseCustomerSetting_col_r2c1_size_large:attr.size==='large',mcbReleaseCustomerSetting_col_r2c1_size_medium:attr.size==='medium',mcbReleaseCustomerSetting_col_r2c1_size_small:attr.size==='small',mcbReleaseCustomerSetting_col_r2c1_size_min:attr.size==='min',mcbReleaseCustomerSetting_col_r2c1_checked:attr.checked,mcbReleaseCustomerSetting_col_r2c1_disable:attr.disabled}" >

          <lm2b-link-text
                  ref="text1"
                  refId="text1"
                  v-show="pvt_isShow.r2c1 === 'text1'"
                  :paraVarPair="pvt_r2c1.text1.paraVarPair"
                  :para="pvt_r2c1.text1.para"
                  :attr="pvt_r2c1.text1.attr">
          </lm2b-link-text>
        </div>
      </div>
      <div class="mcbReleaseCustomerSetting_row mcbReleaseCustomerSetting_row_row5">
        <div v-show="pvt_isWinShow.r3c1"
             :class="{mcbReleaseCustomerSetting_col:true,mcbReleaseCustomerSetting_col_r3c1:true,mcbReleaseCustomerSetting_col_r3c1_size_large:attr.size==='large',mcbReleaseCustomerSetting_col_r3c1_size_medium:attr.size==='medium',mcbReleaseCustomerSetting_col_r3c1_size_small:attr.size==='small',mcbReleaseCustomerSetting_col_r3c1_size_min:attr.size==='min',mcbReleaseCustomerSetting_col_r3c1_checked:attr.checked,mcbReleaseCustomerSetting_col_r3c1_disable:attr.disabled}" >

          <lm2b-link-text
                  ref="text2"
                  refId="text2"
                  v-show="pvt_isShow.r3c1 === 'text2'"
                  :paraVarPair="pvt_r3c1.text2.paraVarPair"
                  :para="pvt_r3c1.text2.para"
                  :attr="pvt_r3c1.text2.attr">
          </lm2b-link-text>
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
          vessel:['r1_1c1','r1_1c2','r1_2c1','r2c1','r3c1'],
          subModule:['titleText','checkbox1','checkbox2','text1','text2'],
        },
        pvt_isShow: {
          r1_1c1:null,
          r1_1c2:null,
          r1_2c1:null,
          r2c1:null,
          r3c1:null,
        },
        pvt_isWinShow: {
          mcbReleaseCustomerSettingWindow:true,
          r1c1:true,
          r2c1:true,
          r1_1c1:true,
          r1_1c2:true,
          r1_2c1:true,
          r3c1:true,
        },
        pvt_eventPortInput: ['confirmEvent'],

        value1:[],
        define:[],
        value2:[],
        checkboxArr:[],
      };
    },
    watch: {
    },
    computed:{
      pvt_r1_1c1:function(){
        return {
          titleText:{
            paraVarPair:{
            },
            para:{
              textData:'公开客户',
            },
            attr:{
              label:'div',
              textAlign:'left',
              height:'42px',
              color:'#999999',
              fontSize:'14px',
              background:'transparent',
            },
          },
        };
      },
      pvt_r1_1c2:function(){
        return {
          checkbox1:{
            paraVarPair:{
              checkData:'value1',
            },
            para:{
              checkData:this.value1,
            },
            attr:{
              checkboxArr:[{label:1,text:'全选'}],
              size:'small',
              define:this.define,
            },
          },
        };
      },
      pvt_r1_2c1:function(){
        return {
          checkbox2:{
            paraVarPair:{
              checkData:'value2',
            },
            para:{
              checkData:this.value2,
            },
            attr:{
              checkboxArr:this.checkboxArr,
              button:true,
            },
          },
        };
      },
      pvt_r2c1:function(){
        return {
          text1:{
            paraVarPair:{
            },
            para:{
              textData:'确认',
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'center',
              height:'49px',
              color:'#ffffff',
              fontSize:'16px',
              background:'#12B0FF',
            },
          },
        };
      },
      pvt_r3c1:function(){
        return {
          text2:{
            paraVarPair:{
            },
            para:{
              textData:'取消',
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'center',
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
      startModule:function(arr,successCallBack,errorCallBack){
        let $this = this;
        let para = {
          successCallBack:successCallBack,
          errorCallBack:errorCallBack,
          nStep:0
        }
        let dbFlag;
        let ref = {
          sm1:'titleText',
          sm2:'checkbox1',
          sm3:'checkbox2',
          sm4:'text1',
          sm5:'text2'
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
              $this.value1 = [];
              $this.define = ['van-icon-circle','van-icon-passed'];
              $this.value2 = [];
              $this.checkboxArr = [];
              if(arr && arr.length > 0){
                $this.value2 = JSON.parse(JSON.stringify(arr));
              }
              para.nStep = 'downloadOption';
              ++dbFlag;
              break;
            case 'downloadOption':
              //下载组织数据
              let portName = mac.mac.tb.activityOption;
              let data = {};
              data[portName] = [mac.mac.fd.activityOption.customerLevel];
              let expression = 'id = 1';
              let start = 0;
              let total = 1;
              let sort = ["id,asc"];
              let destGeneSite = '';
              $this.sys.api.conditiondataInput(portName,data,expression,start,total,sort,destGeneSite,function(result){
                para.optionId = result[0];
                para.nStep = 'searchOption';
                if(++dbFlag === 2){
                  $this.startModule(arr,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)});
              break;
            case 'searchOption':
              //查找组织数据
              let tableName = mac.mac.tb.activityOption;
              let dbData = {};
              dbData[mac.mac.fd.id] = [para.optionId];
              dbData[mac.mac.fd.activityOption.customerLevel] = [];
              $this.sys.api.recordRead(tableName,dbData,function(){
                if(dbData[mac.mac.fd.activityOption.customerLevel][0] !== null){
                  let customerArr = dbData[mac.mac.fd.activityOption.customerLevel][0];
                  for(let i = 0;i < customerArr.length;i++){
                    $this.checkboxArr.push({
                      label:customerArr[i].label,
                      text:customerArr[i].label
                    });
                  }
                }
                if($this.value2.length === $this.checkboxArr.length){
                  $this.value1 = [1];
                }else if($this.value2.length > 0){
                  $this.define = ['van-icon-stop-circle-o','van-icon-passed'];
                }
                para.nStep = 'showModules';
                if(++dbFlag === 2){
                  $this.startModule(arr,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)});
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                'titleText','checkbox1','checkbox2','text1','text2'
              ];
              $this.showSubModule(refId,true,function(){
                para.nStep = 'forceUpdateData';
                if(++dbFlag === 2){
                  $this.startModule(arr,successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'forceUpdateData':
              $this.forceUpdateData(function(){
                para.nStep = 'startModule_title1';
                if(++dbFlag === 2){
                  $this.startModule(arr,successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_title1':
              $this.sm[ref.sm1].startModule(function(){
                para.nStep = 'startModule_checkbox1';
                if(++dbFlag === 2){
                  $this.startModule(arr,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)});
              break;
            case 'startModule_checkbox1':
              $this.sm[ref.sm2].startModule(function(){
                para.nStep = 'startModule_checkbox2';
                if(++dbFlag === 2){
                  $this.startModule(arr,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)});
              break;
            case 'startModule_checkbox2':
              $this.sm[ref.sm3].startModule(function(){
                para.nStep = 'startModule_button1';
                if(++dbFlag === 2){
                  $this.startModule(arr,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)});
              break;
            case 'startModule_button1':
              $this.sm[ref.sm4].startModule(function(){
                para.nStep = 'startModule_button2';
                if(++dbFlag === 2){
                  $this.startModule(arr,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)});
              break;
            case 'startModule_button2':
              $this.sm[ref.sm5].startModule(function(){
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.startModule(arr,successCallBack,errorCallBack);
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
      chooseAll:function(){
        let $this = this;
        //修改数据
        $this.define = ['van-icon-circle','van-icon-passed'];
        $this.value2 = [];
        if($this.value1.length > 0){
          for(let i = 0;i < $this.checkboxArr.length;i++){
            let userId = $this.checkboxArr[i].label;
            $this.value2.push(userId);
          }
        }
        //刷新显示
        $this.forceUpdateData(function(){
          $this.sm['checkbox1'].startModule(function(){
            $this.sm['checkbox2'].startModule(function(){
            },function(error){console.log(error)});
          },function(error){console.log(error)});
        });
      },
      chooseOne:function(){
        let $this = this;
        //修改数据
        $this.define = ['van-icon-circle','van-icon-passed'];
        $this.value1 = [1];
        for(let i = 0;i < $this.checkboxArr.length;i++){
          let userId = $this.checkboxArr[i].label;
          if(!$this.value2.includes(userId)){
            $this.value1 = [];
            break;
          }
        }
        if($this.value1.length === 0){
          if($this.value2.length > 0){
            $this.define = ['van-icon-stop-circle-o','van-icon-passed'];
          }
        }
        //刷新显示
        $this.forceUpdateData(function(){
          $this.sm['checkbox1'].startModule(function(){
            $this.sm['checkbox2'].startModule(function(){
            },function(error){console.log(error)});
          },function(error){console.log(error)});
        });
      },
      affirmEvent:function(){
        let $this = this;
        $this.hideSelfModule($this.refId,function(){
          $this.ep.confirmEvent($this.value2);
        },function(error){console.log(error)});
      },
      cancelEvent:function(){
        let $this = this;
        $this.hideSelfModule($this.refId,function(){
        },function(error){console.log(error)});
      },
      checkbox1_dataModifyEvent:function(){
        this.chooseAll();
      },
      checkbox2_dataModifyEvent:function(){
        this.chooseOne();
      },
      text1_textClickEvent:function(){
        this.affirmEvent();
      },
      text2_textClickEvent:function(){
        this.cancelEvent();
      },
    },
  };
</script>
<style lang="less" scoped>
    @import '../../../../../../assets/var_sq';
  .mcbReleaseCustomerSetting_container {
    width:100%;
    height:100%;
  }
  .mcbReleaseCustomerSetting_mask {
    display:flex;
    position:fixed;
    left:0;
    top:0;
    width:100vw;
    height:100vh;
    background-color:rgba(0,0,0,.4);
  }
  .mcbReleaseCustomerSetting_dialog {
    position:absolute;
    left:0;
    top:0;
  }
  .mcbReleaseCustomerSetting_overlay {
    position:absolute;
    left:0;
    top:0;
  }
  .mcbReleaseCustomerSetting_row {
    display:flex;
  }
  .mcbReleaseCustomerSetting_col {
    position:relative;
    display:flex;
    flex-direction:column;
    flex-wrap:nowrap;
  }
  .mcbReleaseCustomerSetting_col_mcbReleaseCustomerSettingWindow_size_medium {
    width:@mcbReleaseCustomerSetting-mcbReleaseCustomerSettingWindow-medium-width;
    height:@mcbReleaseCustomerSetting-mcbReleaseCustomerSettingWindow-medium-height;
    padding:@mcbReleaseCustomerSetting-mcbReleaseCustomerSettingWindow-medium-padding;
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    box-sizing:border-box;
  }
  .mcbReleaseCustomerSetting_col_r1c1_size_medium {
    width:@mcbReleaseCustomerSetting-r1c1-medium-width;
    padding:@mcbReleaseCustomerSetting-r1c1-medium-padding;
  }
  .mcbReleaseCustomerSetting_col_r1c1 {
    background-color:mix(@mcbReleaseCustomerSetting-r1c1-background-color,#fff,@mcbReleaseCustomerSetting-r1c1-background-color-opacity);
    border-radius:@mcbReleaseCustomerSetting-r1c1-border-radius;
  }
  .mcbReleaseCustomerSetting_col_r2c1_size_medium {
    width:@mcbReleaseCustomerSetting-r2c1-medium-width;
    height:@mcbReleaseCustomerSetting-r2c1-medium-height;
    margin:@mcbReleaseCustomerSetting-r2c1-medium-margin;
  }
  .mcbReleaseCustomerSetting_col_r2c1 {
    border-radius:@mcbReleaseCustomerSetting-r2c1-border-radius;
    background-color:mix(@mcbReleaseCustomerSetting-r2c1-background-color,#fff,@mcbReleaseCustomerSetting-r2c1-background-color-opacity);
    overflow:hidden;
  }
  .mcbReleaseCustomerSetting_col_r1_1c1_size_medium {
    width:@mcbReleaseCustomerSetting-r1_1c1-medium-width;
    height:@mcbReleaseCustomerSetting-r1_1c1-medium-height;
  }
  .mcbReleaseCustomerSetting_col_r1_1c2_size_medium {
    width:@mcbReleaseCustomerSetting-r1_1c2-medium-width;
    height:@mcbReleaseCustomerSetting-r1_1c2-medium-height;
    justify-content:@mcbReleaseCustomerSetting-r1_1c2-medium-vertical-position;
    align-items:@mcbReleaseCustomerSetting-r1_1c2-medium-horizontal-position;
  }
  .mcbReleaseCustomerSetting_col_r1_2c1_size_medium {
    width:@mcbReleaseCustomerSetting-r1_2c1-medium-width;
    margin:@mcbReleaseCustomerSetting-r1_2c1-medium-margin;
    padding:@mcbReleaseCustomerSetting-r1_2c1-medium-padding;
  }
  .mcbReleaseCustomerSetting_col_r3c1_size_medium {
    width:@mcbReleaseCustomerSetting-r3c1-medium-width;
    height:@mcbReleaseCustomerSetting-r3c1-medium-height;
  }
  .mcbReleaseCustomerSetting_col_r3c1 {
    border-radius:@mcbReleaseCustomerSetting-r3c1-border-radius;
    background-color:mix(@mcbReleaseCustomerSetting-r3c1-background-color,#fff,@mcbReleaseCustomerSetting-r3c1-background-color-opacity);
  }
</style>
