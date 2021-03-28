<template>
  <div :class="{mcbDetailDescription_col:true,mcbDetailDescription_col_mcbDetailDescriptionWindow:true,mcbDetailDescription_col_mcbDetailDescriptionWindow_size_large:attr.size==='large',mcbDetailDescription_col_mcbDetailDescriptionWindow_size_medium:attr.size==='medium',mcbDetailDescription_col_mcbDetailDescriptionWindow_size_small:attr.size==='small',mcbDetailDescription_col_mcbDetailDescriptionWindow_size_min:attr.size==='min',mcbDetailDescription_col_mcbDetailDescriptionWindow_checked:attr.checked,mcbDetailDescription_col_mcbDetailDescriptionWindow_disable:attr.disabled}">

    <div class="mcbDetailDescription_row mcbDetailDescription_row_row1">
      <div :class="{mcbDetailDescription_col:true,mcbDetailDescription_col_r1c1:true,mcbDetailDescription_col_r1c1_size_large:attr.size==='large',mcbDetailDescription_col_r1c1_size_medium:attr.size==='medium',mcbDetailDescription_col_r1c1_size_small:attr.size==='small',mcbDetailDescription_col_r1c1_size_min:attr.size==='min',mcbDetailDescription_col_r1c1_checked:attr.checked,mcbDetailDescription_col_r1c1_disable:attr.disabled}">

        <div class="mcbDetailDescription_row mcbDetailDescription_row_row3">
          <div :class="{mcbDetailDescription_col:true,mcbDetailDescription_col_r1_1c1:true,mcbDetailDescription_col_r1_1c1_size_large:attr.size==='large',mcbDetailDescription_col_r1_1c1_size_medium:attr.size==='medium',mcbDetailDescription_col_r1_1c1_size_small:attr.size==='small',mcbDetailDescription_col_r1_1c1_size_min:attr.size==='min',mcbDetailDescription_col_r1_1c1_checked:attr.checked,mcbDetailDescription_col_r1_1c1_disable:attr.disabled}">

            <lm2b-button
                    ref="backButton"
                    refId="backButton"
                    v-show="pvt_isShow.r1_1c1 === 'backButton'"
                    :paraVarPair="pvt_r1_1c1.backButton.paraVarPair"
                    :para="pvt_r1_1c1.backButton.para"
                    :attr="pvt_r1_1c1.backButton.attr">
            </lm2b-button>
          </div>
          <div :class="{mcbDetailDescription_col:true,mcbDetailDescription_col_r1_1c2:true,mcbDetailDescription_col_r1_1c2_size_large:attr.size==='large',mcbDetailDescription_col_r1_1c2_size_medium:attr.size==='medium',mcbDetailDescription_col_r1_1c2_size_small:attr.size==='small',mcbDetailDescription_col_r1_1c2_size_min:attr.size==='min',mcbDetailDescription_col_r1_1c2_checked:attr.checked,mcbDetailDescription_col_r1_1c2_disable:attr.disabled}">

            <lm2b-link-text
                    ref="detailEditText"
                    refId="detailEditText"
                    v-show="pvt_isShow.r1_1c2 === 'detailEditText'"
                    :paraVarPair="pvt_r1_1c2.detailEditText.paraVarPair"
                    :para="pvt_r1_1c2.detailEditText.para"
                    :attr="pvt_r1_1c2.detailEditText.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbDetailDescription_col:true,mcbDetailDescription_col_r1_1c3:true,mcbDetailDescription_col_r1_1c3_size_large:attr.size==='large',mcbDetailDescription_col_r1_1c3_size_medium:attr.size==='medium',mcbDetailDescription_col_r1_1c3_size_small:attr.size==='small',mcbDetailDescription_col_r1_1c3_size_min:attr.size==='min',mcbDetailDescription_col_r1_1c3_checked:attr.checked,mcbDetailDescription_col_r1_1c3_disable:attr.disabled}">

            <lm2b-button
                    ref="finishButton"
                    refId="finishButton"
                    v-show="pvt_isShow.r1_1c3 === 'finishButton'"
                    :paraVarPair="pvt_r1_1c3.finishButton.paraVarPair"
                    :para="pvt_r1_1c3.finishButton.para"
                    :attr="pvt_r1_1c3.finishButton.attr">
            </lm2b-button>
          </div>
        </div>
      </div>
    </div>
    <div class="mcbDetailDescription_row mcbDetailDescription_row_row2">
      <div :class="{mcbDetailDescription_col:true,mcbDetailDescription_col_r2c1:true,mcbDetailDescription_col_r2c1_size_large:attr.size==='large',mcbDetailDescription_col_r2c1_size_medium:attr.size==='medium',mcbDetailDescription_col_r2c1_size_small:attr.size==='small',mcbDetailDescription_col_r2c1_size_min:attr.size==='min',mcbDetailDescription_col_r2c1_checked:attr.checked,mcbDetailDescription_col_r2c1_disable:attr.disabled}">

        <div class="mcbDetailDescription_row mcbDetailDescription_row_row4">
          <div :class="{mcbDetailDescription_col:true,mcbDetailDescription_col_r2_1c1:true,mcbDetailDescription_col_r2_1c1_size_large:attr.size==='large',mcbDetailDescription_col_r2_1c1_size_medium:attr.size==='medium',mcbDetailDescription_col_r2_1c1_size_small:attr.size==='small',mcbDetailDescription_col_r2_1c1_size_min:attr.size==='min',mcbDetailDescription_col_r2_1c1_checked:attr.checked,mcbDetailDescription_col_r2_1c1_disable:attr.disabled}">

            <lm2b-link-text
                    ref="closeIconText"
                    refId="closeIconText"
                    v-show="pvt_isShow.r2_1c1 === 'closeIconText'"
                    :paraVarPair="pvt_r2_1c1.closeIconText.paraVarPair"
                    :para="pvt_r2_1c1.closeIconText.para"
                    :attr="pvt_r2_1c1.closeIconText.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbDetailDescription_col:true,mcbDetailDescription_col_r2_1c2:true,mcbDetailDescription_col_r2_1c2_size_large:attr.size==='large',mcbDetailDescription_col_r2_1c2_size_medium:attr.size==='medium',mcbDetailDescription_col_r2_1c2_size_small:attr.size==='small',mcbDetailDescription_col_r2_1c2_size_min:attr.size==='min',mcbDetailDescription_col_r2_1c2_checked:attr.checked,mcbDetailDescription_col_r2_1c2_disable:attr.disabled}">

            <lm2b-link-text
                    ref="hintText"
                    refId="hintText"
                    v-show="pvt_isShow.r2_1c2 === 'hintText'"
                    :paraVarPair="pvt_r2_1c2.hintText.paraVarPair"
                    :para="pvt_r2_1c2.hintText.para"
                    :attr="pvt_r2_1c2.hintText.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcbDetailDescription_col:true,mcbDetailDescription_col_r2_1c3:true,mcbDetailDescription_col_r2_1c3_size_large:attr.size==='large',mcbDetailDescription_col_r2_1c3_size_medium:attr.size==='medium',mcbDetailDescription_col_r2_1c3_size_small:attr.size==='small',mcbDetailDescription_col_r2_1c3_size_min:attr.size==='min',mcbDetailDescription_col_r2_1c3_checked:attr.checked,mcbDetailDescription_col_r2_1c3_disable:attr.disabled}">

            <lm2b-link-text
                    ref="arrowIconText"
                    refId="arrowIconText"
                    v-show="pvt_isShow.r2_1c3 === 'arrowIconText'"
                    :paraVarPair="pvt_r2_1c3.arrowIconText.paraVarPair"
                    :para="pvt_r2_1c3.arrowIconText.para"
                    :attr="pvt_r2_1c3.arrowIconText.attr">
            </lm2b-link-text>
          </div>
        </div>
        <div class="mcbDetailDescription_row mcbDetailDescription_row_row5">
          <div :class="{mcbDetailDescription_col:true,mcbDetailDescription_col_r2_2c1:true,mcbDetailDescription_col_r2_2c1_size_large:attr.size==='large',mcbDetailDescription_col_r2_2c1_size_medium:attr.size==='medium',mcbDetailDescription_col_r2_2c1_size_small:attr.size==='small',mcbDetailDescription_col_r2_2c1_size_min:attr.size==='min',mcbDetailDescription_col_r2_2c1_checked:attr.checked,mcbDetailDescription_col_r2_2c1_disable:attr.disabled}">

            <lm2b-quill-editor
                    ref="detailEdit"
                    refId="detailEdit"
                    v-show="pvt_isShow.r2_2c1 === 'detailEdit'"
                    :paraVarPair="pvt_r2_2c1.detailEdit.paraVarPair"
                    :para="pvt_r2_2c1.detailEdit.para"
                    :attr="pvt_r2_2c1.detailEdit.attr">
            </lm2b-quill-editor>
          </div>
        </div>
      </div>
    </div>
    <div class="mcbDetailDescription_row mcbDetailDescription_row_row3">
      <div :class="{mcbDetailDescription_col:true,mcbDetailDescription_col_r3c1:true,mcbDetailDescription_col_r3c1_size_large:attr.size==='large',mcbDetailDescription_col_r3c1_size_medium:attr.size==='medium',mcbDetailDescription_col_r3c1_size_small:attr.size==='small',mcbDetailDescription_col_r3c1_size_min:attr.size==='min',mcbDetailDescription_col_r3c1_checked:attr.checked,mcbDetailDescription_col_r3c1_disable:attr.disabled}">

        <mcb-detail-hint-dialog
                ref="detailHintDia"
                refId="detailHintDia"
                v-show="pvt_isShow.r3c1 === 'detailHintDia'"
                :paraVarPair="pvt_r3c1.detailHintDia.paraVarPair"
                :para="pvt_r3c1.detailHintDia.para"
                :attr="pvt_r3c1.detailHintDia.attr">
        </mcb-detail-hint-dialog>
        <confirm-dialog
                ref="saveDia"
                refId="saveDia"
                v-show="pvt_isShow.r3c1 === 'saveDia'"
                :paraVarPair="pvt_r3c1.saveDia.paraVarPair"
                :para="pvt_r3c1.saveDia.para"
                :attr="pvt_r3c1.saveDia.attr">
        </confirm-dialog>
      </div>
    </div>
  </div>
</template>
<script>
  import libSys from '@/components/baseComponent/libSys.js';
  import libUpload from '@/components/baseComponent/libUpload.js';
  import mcbDetailHintDialog from './detailHintDialog';
  import confirmDialog from '../../confirmDialog.vue';
  export default {
    components: {mcbDetailHintDialog,confirmDialog},
    inject: ['sys'],
    props: ['refId','para','attr','number'],
    data: function() {
      return {
        pvt_subModuleMap: {
          vessel:['r1_1c1','r1_1c2','r1_1c3','r2_1c1','r2_1c2','r2_1c3','r2_2c1','r3c1','r3c1'],
          subModule:['backButton','detailEditText','finishButton','closeIconText','hintText','arrowIconText','detailEdit','detailHintDia','saveDia'],
        },
        pvt_isShow: {
          r1_1c1:null,
          r1_1c2:null,
          r1_1c3:null,
          r2_1c1:null,
          r2_1c2:null,
          r2_1c3:null,
          r2_2c1:null,
          r3c1:null,
          hintDialog:null,
          saveDialog:null,
        },
        pvt_eventPortInput: ['confirmEvent'],
        details:null,
        activityId:null,
        editHeight:'200px',
      };
    },
    watch: {
    },
    computed:{
      pvt_r1_1c1:function(){
        return {
          backButton:{
            paraVarPair:{
            },
            para:{
              name:['返回','van-icon-arrow-left'],
            },
            attr:{
              type:'text',
            },
          },
        };
      },
      pvt_r1_1c2:function(){
        return {
          detailEditText:{
            paraVarPair:{
            },
            para:{
              textData:'活动详情描述',
            },
            attr:{
              label:'div',
              textAlign:'center',
              fontWeight:true,
              height:'42px',
              color:'#000000',
              fontSize:'18px',
              background:'transparent'
            },
          },
        };
      },
      pvt_r1_1c3:function(){
        return {
          finishButton:{
            paraVarPair:{
            },
            para:{
              name:['完成'],
            },
            attr:{
              type:'primary',
              width:'60px',
              height:'35px',
            },
          },
        };
      },
      pvt_r2_1c1:function(){
        return {
          closeIconText:{
            paraVarPair:{
            },
            para:{
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'center',
              height:'40px',
              color:'#D9AB43',
              fontSize:'14px',
              icon:'van-icon-cross',
              background:'transparent'
            },
          },
        };
      },
      pvt_r2_1c2:function(){
        return {
          hintText:{
            paraVarPair:{
            },
            para:{
              textData:'发布须知：点击查看活动推荐的9条建议和被屏蔽删除的8条注意事项',
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'left',
              height:'40px',
              color:'#D9AB43',
              fontSize:'14px',
              background:'transparent',
              ellipsis:true
            },
          },
        };
      },
      pvt_r2_1c3:function(){
        return {
          arrowIconText:{
            paraVarPair:{
            },
            para:{
            },
            attr:{
              isClick:true,
              label:'div',
              textAlign:'center',
              height:'40px',
              color:'#D9AB43',
              fontSize:'14px',
              icon:'van-icon-arrow',
              background:'transparent'
            },
          },
        };
      },
      pvt_r2_2c1:function(){
        return {
          detailEdit:{
            paraVarPair:{
            },
            para:{
              richText:this.details
            },
            attr:{
              width:'100%',
              height:this.editHeight
            },
          },
        };
      },
      pvt_r3c1:function(){
        return {
          detailHintDia:{
            paraVarPair:{
            },
            para:{
            },
            attr:{
              size:'medium'
            },
          },
          saveDia:{
            paraVarPair:{
            },
            para:{
            },
            attr:{
              size:'medium'
            },
          },
        };
      },
      pvt_hintDialog:function(){
        return {
          detailHintDia:{
            paraVarPair:{
            },
            para:{
            },
            attr:{
            },
          },
        };
      },
      pvt_saveDialog:function(){
        return {
          saveDia:{
            paraVarPair:{
            },
            para:{
            },
            attr:{
              size:'medium'
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
      startModule:function(activityId,successCallBack,errorCallBack){
        let $this = this;
        let para = {
          successCallBack:successCallBack,
          errorCallBack:errorCallBack,
          nStep:0
        }
        let dbFlag;
        let tableName;
        let dbData;
        let ref = {
          sm1:'backButton',
          sm2:'detailEditText',
          sm3:'finishButton',
          sm4:'closeIconText',
          sm5:'hintText',
          sm6:'arrowIconText',
          sm7:'detailEdit',
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
              $this.details = null;
              $this.activityId = null;
              $this.editHeight = (window.screen.height - 82) + 'px';
              if(activityId){
                $this.activityId = activityId;
                $this.details = [{
                  $table:mac.mac.tb.groupActivity,
                  $arrField:[
                    mac.mac.fd.groupActivity.details,
                    mac.mac.fd.groupActivity.picture,
                    mac.mac.fd.groupActivity.picture
                  ],
                  $arrValue:[
                    $this.activityId
                  ]
                }];
              }
              para.nStep = 'showModules';
              ++dbFlag;
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                'backButton','detailEditText','finishButton','closeIconText','hintText','arrowIconText','detailEdit'
              ];
              $this.showSubModule(refId,true,function(){
                para.nStep = 'forceUpdateData';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'forceUpdateData':
              $this.forceUpdateData(function(){
                para.nStep = 'startModule_backButton';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_backButton':
              $this.sm[ref.sm1].startModule(function(){
                para.nStep = 'startModule_titleText';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_titleText':
              $this.sm[ref.sm2].startModule(function(){
                para.nStep = 'startModule_finishButton';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_finishButton':
              $this.sm[ref.sm3].startModule(function(){
                para.nStep = 'startModule_closeIcon';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_closeIcon':
              $this.sm[ref.sm4].startModule(function(){
                para.nStep = 'startModule_hintText';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_hintText':
              $this.sm[ref.sm5].startModule(function(){
                para.nStep = 'startModule_arrowIcon';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_arrowIcon':
              $this.sm[ref.sm6].startModule(function(){
                para.nStep = 'startModule_detailEdit';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_detailEdit':
              $this.sm[ref.sm7].startModule(function(){
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
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
      showSaveDialog:function(){
        let $this = this;
        $this.showSubModule('saveDia',true,function(){
          let dialogData = {
            title:'是否保存修改后的活动详细描述?',
            btnText:['不了','保存']
          };
          $this.sm['saveDia'].startModule(dialogData,function(){
          },function(error){console.log(error)});
        },function(error){console.log(error)});
      },
      finishButtonClick:function(){
        let $this = this;
        //写数据库
        $this.sm['detailEdit'].save();
        $this.forceUpdateData(function(){
          let data = {
            objectName:[mac.mac.tb.groupActivity],
            record:[[$this.activityId]],
          };
          $this.uploadData(data,function(){
            $this.hideSelfModule($this.refId,function(){
              $this.ep.confirmEvent();
            },function(error){console.log(error)});
          },function(error){console.log(error)});
        });
      },
      hideHintText:function(){
        let $this = this;
        let refArr = ['closeIconText','hintText','arrowIconText'];
        $this.editHeight = (window.screen.height - 42) + 'px';
        $this.showSubModule(refArr,false,function(){
        },function(error){console.log(error)});
      },
      showHintDialog:function(){
        let $this = this;
        $this.showSubModule('detailHintDia',true,function(){
          $this.sm['detailHintDia'].startModule(function(){
          },function(error){console.log(error)});
        },function(error){console.log(error)});
      },
      hideModule:function(data1){
        let $this = this;
        $this.hideSelfModule($this.refId,function(){
        },function(error){console.log(error)});
      },
      saveData:function(data1){
        this.finishButtonClick();
      },
      backButton_buttonClickEvent:function(){
        this.showSaveDialog();
      },
      finishButton_buttonClickEvent:function(){
        this.finishButtonClick();
      },
      closeIconText_textClickEvent:function(){
        this.hideHintText();
      },
      hintText_textClickEvent:function(){
        this.showHintDialog();
      },
      saveDia_confirmEvent:function(refId){
        this.saveData(refId);
      },
      saveDia_cancelEvent:function(refId){
        this.hideModule(refId);
      },
    },
  };
</script>
<style lang="less" scoped>
    @import '../../../../../../assets/var_sq';
  .mcbDetailDescription_container {
  }
  .mcbDetailDescription_row {
    display:flex;
    /*flex:1;*/
  }
  .mcbDetailDescription_col {
    display:flex;
    flex-direction:column;
  }
  .mcbDetailDescription_col_mcbDetailDescriptionWindow_size_medium {
    width:@mcbDetailDescription-mcbDetailDescriptionWindow-medium-width;
  }
  .mcbDetailDescription_col_mcbDetailDescriptionWindow{
    width:100%;
    height:100%;
    position:fixed;
    top:0;
    left:0;
    z-index:1000;
    background:#EDEDED;
  }
  .mcbDetailDescription_col_r1c1_size_medium {
    width:@mcbDetailDescription-r1c1-medium-width;
    height:@mcbDetailDescription-r1c1-medium-height;
  }
  .mcbDetailDescription_col_r1c1{
    position:fixed;
    top:0;
    left:0;
    z-index:10;
  }
  .mcbDetailDescription_col_r2c1_size_medium {
    width:@mcbDetailDescription-r2c1-medium-width;
    margin:@mcbDetailDescription-r2c1-medium-margin;
    position:absolute;
    left:0;
    bottom:0;
    top:42px;
  }
  .mcbDetailDescription_col_r1_1c1_size_medium {
    width:@mcbDetailDescription-r1_1c1-medium-width;
    height:@mcbDetailDescription-r1_1c1-medium-height;
    align-items:@mcbDetailDescription-r1_1c1-medium-horizontal-position;
    justify-content:@mcbDetailDescription-r1_1c1-medium-vertical-position;
  }
  .mcbDetailDescription_col_r1_1c2_size_medium {
    width:@mcbDetailDescription-r1_1c2-medium-width;
    height:@mcbDetailDescription-r1_1c2-medium-height;
    align-items:@mcbDetailDescription-r1_1c2-medium-horizontal-position;
    justify-content:@mcbDetailDescription-r1_1c2-medium-vertical-position;
  }
  .mcbDetailDescription_col_r1_1c3_size_medium {
    width:@mcbDetailDescription-r1_1c3-medium-width;
    height:@mcbDetailDescription-r1_1c3-medium-height;
    align-items:@mcbDetailDescription-r1_1c3-medium-horizontal-position;
    justify-content:@mcbDetailDescription-r1_1c3-medium-vertical-position;
    padding:0 16px 0 0;
  }
  .mcbDetailDescription_col_r2_1c1_size_medium {
    width:@mcbDetailDescription-r2_1c1-medium-width;
    justify-content:@mcbDetailDescription-r2_1c1-medium-vertical-position;
  }
  .mcbDetailDescription_col_r2_1c1 {
    background-color:mix(@mcbDetailDescription-r2_1c1-background-color,#fff,@mcbDetailDescription-r2_1c1-background-color-opacity);
  }
  .mcbDetailDescription_col_r2_1c2_size_medium {
    width:@mcbDetailDescription-r2_1c2-medium-width;
    justify-content:@mcbDetailDescription-r2_1c2-medium-vertical-position;
  }
  .mcbDetailDescription_col_r2_1c2 {
    background-color:mix(@mcbDetailDescription-r2_1c2-background-color,#fff,@mcbDetailDescription-r2_1c2-background-color-opacity);
  }
  .mcbDetailDescription_col_r2_1c3_size_medium {
    width:@mcbDetailDescription-r2_1c3-medium-width;
    justify-content:@mcbDetailDescription-r2_1c3-medium-vertical-position;
  }
  .mcbDetailDescription_col_r2_1c3 {
    background-color:mix(@mcbDetailDescription-r2_1c3-background-color,#fff,@mcbDetailDescription-r2_1c3-background-color-opacity);
  }
  .mcbDetailDescription_col_r2_2c1_size_medium {
    width:@mcbDetailDescription-r2_2c1-medium-width;
    margin:@mcbDetailDescription-r2_2c1-medium-margin;
    justify-content:@mcbDetailDescription-r2_2c1-medium-vertical-position;
  }
  .mcbDetailDescription_col_hintDialog_size_medium {
    width:@mcbDetailDescription-hintDialog-medium-width;
    height:@mcbDetailDescription-hintDialog-medium-height;
  }
  .mcbDetailDescription_col_saveDialog_size_medium {
    width:@mcbDetailDescription-saveDialog-medium-width;
    height:@mcbDetailDescription-saveDialog-medium-height;
  }
  .mcbDetailDescription_dialog {
    position:fixed;
  }
  .mcbDetailDescription_col_r3c1{
    z-index:9999;
  }
</style>
