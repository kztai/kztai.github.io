<template>
    <div v-show="pvt_win.isShow.backMan_main_customerMan_templat"
         :class="{backMan_main_customerMan_templat_container:true,backMan_main_customerMan_templat_col:true,backMan_main_customerMan_templat_col_backMan_main_customerMan_templat:true,backMan_main_customerMan_templat_col_backMan_main_customerMan_templat_size_large:attr.size==='large',backMan_main_customerMan_templat_col_backMan_main_customerMan_templat_size_medium:attr.size==='medium',backMan_main_customerMan_templat_col_backMan_main_customerMan_templat_size_small:attr.size==='small',backMan_main_customerMan_templat_col_backMan_main_customerMan_templat_size_min:attr.size==='min',backMan_main_customerMan_templat_col_backMan_main_customerMan_templat_checked:pvt_win.isChecked.backMan_main_customerMan_templat,backMan_main_customerMan_templat_col_backMan_main_customerMan_templat_disable:attr.disabled}"
         :style="pvt_win.style.backMan_main_customerMan_templat" >

        <div class="backMan_main_customerMan_templat_row backMan_main_customerMan_templat_row_row0">
            <div v-show="pvt_win.isShow.r1c1"
                 :class="{backMan_main_customerMan_templat_col:true,backMan_main_customerMan_templat_col_r1c1:true,backMan_main_customerMan_templat_col_r1c1_size_large:attr.size==='large',backMan_main_customerMan_templat_col_r1c1_size_medium:attr.size==='medium',backMan_main_customerMan_templat_col_r1c1_size_small:attr.size==='small',backMan_main_customerMan_templat_col_r1c1_size_min:attr.size==='min',backMan_main_customerMan_templat_col_r1c1_checked:pvt_win.isChecked.r1c1,backMan_main_customerMan_templat_col_r1c1_disable:attr.disabled}"
                 :style="pvt_win.style.r1c1" >

                <lm1a-link-text
                        ref="title"
                        refId="title"
                        v-show="pvt_isShow.r1c1 === 'title'"
                        :paraVarPair="pvt_r1c1.title.paraVarPair"
                        :para="pvt_r1c1.title.para"
                        :attr="pvt_r1c1.title.attr">
                </lm1a-link-text>
            </div>
            <div v-show="pvt_win.isShow.r1c2"
                 :class="{backMan_main_customerMan_templat_col:true,backMan_main_customerMan_templat_col_r1c2:true,backMan_main_customerMan_templat_col_r1c2_size_large:attr.size==='large',backMan_main_customerMan_templat_col_r1c2_size_medium:attr.size==='medium',backMan_main_customerMan_templat_col_r1c2_size_small:attr.size==='small',backMan_main_customerMan_templat_col_r1c2_size_min:attr.size==='min',backMan_main_customerMan_templat_col_r1c2_checked:pvt_win.isChecked.r1c2,backMan_main_customerMan_templat_col_r1c2_disable:attr.disabled}"
                 :style="pvt_win.style.r1c2" >

                <lm1a-link-text
                        ref="closeIcon"
                        refId="closeIcon"
                        v-show="pvt_isShow.r1c2 === 'closeIcon'"
                        :paraVarPair="pvt_r1c2.closeIcon.paraVarPair"
                        :para="pvt_r1c2.closeIcon.para"
                        :attr="pvt_r1c2.closeIcon.attr">
                </lm1a-link-text>
            </div>
        </div>
        <div class="backMan_main_customerMan_templat_row backMan_main_customerMan_templat_row_row1">
            <div v-show="pvt_win.isShow.r2c0"
                 :class="{backMan_main_customerMan_templat_col:true,backMan_main_customerMan_templat_col_r2c0:true,backMan_main_customerMan_templat_col_r2c0_size_large:attr.size==='large',backMan_main_customerMan_templat_col_r2c0_size_medium:attr.size==='medium',backMan_main_customerMan_templat_col_r2c0_size_small:attr.size==='small',backMan_main_customerMan_templat_col_r2c0_size_min:attr.size==='min',backMan_main_customerMan_templat_col_r2c0_checked:pvt_win.isChecked.r2c0,backMan_main_customerMan_templat_col_r2c0_disable:attr.disabled}"
                 :style="pvt_win.style.r2c0" >

                <div class="backMan_main_customerMan_templat_row backMan_main_customerMan_templat_row_row2">
                    <div v-show="pvt_win.isShow.r2c1"
                         :class="{backMan_main_customerMan_templat_col:true,backMan_main_customerMan_templat_col_r2c1:true,backMan_main_customerMan_templat_col_r2c1_size_large:attr.size==='large',backMan_main_customerMan_templat_col_r2c1_size_medium:attr.size==='medium',backMan_main_customerMan_templat_col_r2c1_size_small:attr.size==='small',backMan_main_customerMan_templat_col_r2c1_size_min:attr.size==='min',backMan_main_customerMan_templat_col_r2c1_checked:pvt_win.isChecked.r2c1,backMan_main_customerMan_templat_col_r2c1_disable:attr.disabled}"
                         :style="pvt_win.style.r2c1" >

                        <lm1a-input-text
                                ref="templateInput"
                                refId="templateInput"
                                v-show="pvt_isShow.r2c1 === 'templateInput'"
                                :paraVarPair="pvt_r2c1.templateInput.paraVarPair"
                                :para="pvt_r2c1.templateInput.para"
                                :attr="pvt_r2c1.templateInput.attr">
                        </lm1a-input-text>
                    </div>
                </div>
                <div class="backMan_main_customerMan_templat_row backMan_main_customerMan_templat_row_row3">
                    <div v-show="pvt_win.isShow.r3c1"
                         :class="{backMan_main_customerMan_templat_col:true,backMan_main_customerMan_templat_col_r3c1:true,backMan_main_customerMan_templat_col_r3c1_size_large:attr.size==='large',backMan_main_customerMan_templat_col_r3c1_size_medium:attr.size==='medium',backMan_main_customerMan_templat_col_r3c1_size_small:attr.size==='small',backMan_main_customerMan_templat_col_r3c1_size_min:attr.size==='min',backMan_main_customerMan_templat_col_r3c1_checked:pvt_win.isChecked.r3c1,backMan_main_customerMan_templat_col_r3c1_disable:attr.disabled}"
                         :style="pvt_win.style.r3c1" >

                        <lm1a-button
                                ref="btn"
                                refId="btn"
                                v-show="pvt_isShow.r3c1 === 'btn'"
                                :paraVarPair="pvt_r3c1.btn.paraVarPair"
                                :para="pvt_r3c1.btn.para"
                                :attr="pvt_r3c1.btn.attr">
                        </lm1a-button>
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
    props: {
      refId: String,
      para: Object,
      attr: {
        type: Object,
        default: function () {
          return {size: 'medium'};
        },
        validator: function (val) {
          if(!val.size) val.size = 'medium';
          return true;
        },
      },
      paraVarPair: Object,
      number: Number,
    },
    data: function() {
      return {
          mac:mac.mac,
        activityId:this.para.activityId,
        pvt_subModuleMap: {
          vessel:['r1c1','r1c2','r2c1','r3c1'],
          subModule:['title','closeIcon','templateInput','btn'],
        },
        pvt_isShow: {
          r1c1:null,
          r1c2:null,
          r2c1:null,
          r3c1:null,
        },
        pvt_win:{
          isShow:{
            backMan_main_customerMan_templat:true,
            r1c1:true,
            r1c2:true,
            r2c0:true,
            r2c1:true,
            r3c1:true,
          },
          isChecked:{
            backMan_main_customerMan_templat:false,
            r1c1:false,
            r1c2:false,
            r2c0:false,
            r2c1:false,
            r3c1:false,
          },
          style:{
            backMan_main_customerMan_templat:null,
            r1c1:null,
            r1c2:null,
            r2c0:null,
            r2c1:null,
            r3c1:null,
          },
        },
        pvt_eventPortInput: [],

        template:'',
      };
    },
    watch: {
      activityId: {
        handler: function (val, oldVal) {
          if (val !== oldVal && this.paraVarPair.activityId) {
            if (this.number !== undefined) { // 循环
              this.$parent[this.paraVarPair.activityId][this.number] = val
            } else { // 非循环
              this.$parent[this.paraVarPair.activityId] = val
            }
          }
        },
        deep   : true
      },
    },
    computed:{
      pvt_r1c1:function(){
        return {
          title:{
            paraVarPair:{
            },
            para:{
              textData:'模板设置',
            },
            attr:{
              label:'div',
              fontWeight:700,
              color:'#000',
              fontSize:'14px',
            },
          },
        };
      },
      pvt_r1c2:function(){
        return {
          closeIcon:{
            paraVarPair:{
            },
            para:{
            },
            attr:{
              isClick:true,
              label:'div',
              fontWeight:true,
              color:'#b4bac1',
              fontSize:'20px',
              icon:'el-icon-close',
            },
          },
        };
      },
      pvt_r2c1:function(){
        return {
          templateInput:{
            paraVarPair:{
              text:'template',
            },
            para:{
              text:this.template,
            },
            attr:{
              size:'small',
              type:'textarea',
              resize:'none',
              autosize:{minRows:5,maxRows:5},
              disabled:true
            },
          },
        };
      },
      pvt_r3c1:function(){
        return {
          btn:{
            paraVarPair:{
            },
            para:{
              name:['保存'],
            },
            attr:{
              type:'primary',
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
      startModule:function(successCallBack,errorCallBack){
        let $this = this;
        let para = {
          successCallBack: successCallBack,
          errorCallBack: errorCallBack,
          nStep: 0
        }
        let dbFlag;
        let tableVariable,condition,parentRecord,record,objectName;
        let dbData;

        if (successCallBack !== null) {
          errorCallBack = para;
          successCallBack = null;
        }
        para = errorCallBack;

        while (1) {
          dbFlag = 0;
          switch (para.nStep) {
            case 0:
              $this.mac = mac.mac;
              $this.activityId = $this.para.activityId;
              // 初始化数据
              $this.template = '';
              //查找数据
              dbData = {};
              tableVariable = null;
              parentRecord = null;
              record = {
                table:$this.mac.tb.activity,
                id:[$this.activityId],
                field:[$this.mac.fd.activity.invite_template]
              };
              $this.sys.api.recordRead(tableVariable,parentRecord,record,dbData, function () {
                $this.template = dbData[$this.mac.fd.activity.invite_template][0];
                para.nStep = 'showModules';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack,errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                'title','closeIcon','templateInput','btn'
              ];
              $this.showSubModule(refId, true, function () {
                para.nStep = 'forceUpdateData';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack,errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'forceUpdateData':
              $this.forceUpdateData(function () {
                para.nStep = 'startModule_title';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              });
              break;
            case 'startModule_title':
              //调用子组件的startModule
              $this.sm['title'].startModule(function () {
                para.nStep = 'startModule_closeIcon';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_closeIcon':
              //调用子组件的startModule
              $this.sm['closeIcon'].startModule(function () {
                para.nStep = 'startModule_templateInput';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_templateInput':
              //调用子组件的startModule
              $this.sm['templateInput'].startModule(function () {
                para.nStep = 'startModule_btn';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_btn':
              $this.sm['btn'].startModule(function () {
                para.nStep = 'end';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
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
      closeDialog:function(){
        let $this = this;
        $this.hideSelfModule($this.refId,function(){
        },function(error){console.log(error)});
      },
      closeIcon_textClickEvent:function(){
        this.closeDialog();
      },
      btn_buttonClickEvent:function(){
        this.closeDialog();
      },
    },
  };
</script>
<style lang="scss" scoped>
    .backMan_main_customerMan_templat_container {
        width:100%;
        height:100%;
    }
    .backMan_main_customerMan_templat_mask {
        display:flex;
        position:fixed;
        left:0;
        top:0;
        width:100vw;
        height:100vh;
        background-color:rgba(0,0,0,.4);
    }
    .backMan_main_customerMan_templat_dialog {
        position:absolute;
        left:0;
        top:0;
    }
    .backMan_main_customerMan_templat_overlay {
        position:absolute;
        left:0;
        top:0;
    }
    .backMan_main_customerMan_templat_row {
        display:flex;
    }
    .backMan_main_customerMan_templat_col {
        position:relative;
        display:flex;
        flex-direction:column;
        flex-wrap:nowrap;
    }
    .backMan_main_customerMan_templat_col_backMan_main_customerMan_templat_size_medium {
        width:$backMan_main_customerMan_templat-backMan_main_customerMan_templat-medium-width;
        height:$backMan_main_customerMan_templat-backMan_main_customerMan_templat-medium-height;
    }
    .backMan_main_customerMan_templat_col_r1c1_size_medium {
        width:$backMan_main_customerMan_templat-r1c1-medium-width;
        height:$backMan_main_customerMan_templat-r1c1-medium-height;
        padding:$backMan_main_customerMan_templat-r1c1-medium-padding;
        line-height:$backMan_main_customerMan_templat-r1c1-medium-line-height;
        border-style: solid;
        border-width: 0 0 1px 0;
        border-color: #b4bac1;
        box-sizing: border-box;
    }
    .backMan_main_customerMan_templat_col_r1c2_size_medium {
        width:$backMan_main_customerMan_templat-r1c2-medium-width;
        height:$backMan_main_customerMan_templat-r1c2-medium-height;
        align-items:$backMan_main_customerMan_templat-r1c2-medium-horizontal-position;
        justify-content:$backMan_main_customerMan_templat-r1c2-medium-vertical-position;
        line-height:30px;
        padding: 0 5px 0 0;
        box-sizing: border-box;
        flex-grow: 1;
        border-style: solid;
        border-width: 0 0 1px 0;
        border-color: #b4bac1;
    }
    .backMan_main_customerMan_templat_col_r2c0_size_medium {
        width:$backMan_main_customerMan_templat-r2c0-medium-width;
        padding:$backMan_main_customerMan_templat-r2c0-medium-padding;
    }
    .backMan_main_customerMan_templat_col_r2c1_size_medium {
        width:$backMan_main_customerMan_templat-r2c1-medium-width;
    }
    .backMan_main_customerMan_templat_col_r3c1_size_medium {
        width:$backMan_main_customerMan_templat-r3c1-medium-width;
        height:$backMan_main_customerMan_templat-r3c1-medium-height;
        align-items:$backMan_main_customerMan_templat-r3c1-medium-horizontal-position;
        justify-content:$backMan_main_customerMan_templat-r3c1-medium-vertical-position;
    }
</style>
