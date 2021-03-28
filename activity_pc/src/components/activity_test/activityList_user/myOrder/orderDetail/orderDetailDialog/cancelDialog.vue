<template>
  <!--遮罩层-->
  <div class="dialogClass">
    <!--浮动窗-->
    <div class="cancelDialog">
      <div class="cancelDialogContent">
        <!--标题-->
        <div class="row row1">
          <div class="col cancelDialog_row1_col_v1">
            <lm-link-text
                    ref="titleText"
                    refId="titleText"
                    v-show="pvt_isShow.v1 === 'titleText'"
                    :paraVarPair="pvt_v1.titleText.paraVarPair"
                    :para="pvt_v1.titleText.para"
                    :attr="pvt_v1.titleText.attr">
            </lm-link-text>
          </div>
          <div class="col cancelDialog_row1_col_v2">
            <lm-button
                    ref="closeButton"
                    refId="closeButton"
                    v-show="pvt_isShow.v2 === 'closeButton'"
                    :paraVarPair="pvt_v2.closeButton.paraVarPair"
                    :para="pvt_v2.closeButton.para"
                    :attr="pvt_v2.closeButton.attr">
            </lm-button>
          </div>
        </div>
        <div class="row row2">
          <!--容器套容器-->
          <div class="col cancelDialog_row2_col_connect">
            <!--提示-->
            <div class="row row2_1">
              <div class="col cancelDialog_row2_1_col_v1">
                <lm-link-text
                        ref="hintInfo"
                        refId="hintInfo"
                        v-show="pvt_isShow.v3 === 'hintInfo'"
                        :paraVarPair="pvt_v3.hintInfo.paraVarPair"
                        :para="pvt_v3.hintInfo.para"
                        :attr="pvt_v3.hintInfo.attr">
                </lm-link-text>
              </div>
            </div>
            <!--详细原因-->
            <div class="row row2_2">
              <div class="col cancelDialog_row2_2_col_v1">
                <lm-link-text
                        ref="detailReasonLabel"
                        refId="detailReasonLabel"
                        v-show="pvt_isShow.v4 === 'detailReasonLabel'"
                        :paraVarPair="pvt_v4.detailReasonLabel.paraVarPair"
                        :para="pvt_v4.detailReasonLabel.para"
                        :attr="pvt_v4.detailReasonLabel.attr">
                </lm-link-text>
              </div>
            </div>
            <div class="row row2_3">
              <div class="col cancelDialog_row2_3_col_v1">
                <lm-input-text
                        ref="detailReason"
                        refId="detailReason"
                        v-show="pvt_isShow.v5 === 'detailReason'"
                        :paraVarPair="pvt_v5.detailReason.paraVarPair"
                        :para="pvt_v5.detailReason.para"
                        :attr="pvt_v5.detailReason.attr">
                </lm-input-text>
              </div>
            </div>
            <!--概要原因-->
            <div class="row row2_4">
              <div class="col cancelDialog_row2_4_col_v1">
                <lm-link-text
                        ref="generalReasonLabel"
                        refId="generalReasonLabel"
                        v-show="pvt_isShow.v6 === 'generalReasonLabel'"
                        :paraVarPair="pvt_v6.generalReasonLabel.paraVarPair"
                        :para="pvt_v6.generalReasonLabel.para"
                        :attr="pvt_v6.generalReasonLabel.attr">
                </lm-link-text>
              </div>
            </div>
            <div class="row row2_5">
              <div class="col cancelDialog_row2_5_col_v1">
                <lm-radio
                        ref="generalReason"
                        refId="generalReason"
                        v-show="pvt_isShow.v7 === 'generalReason'"
                        :paraVarPair="pvt_v7.generalReason.paraVarPair"
                        :para="pvt_v7.generalReason.para"
                        :attr="pvt_v7.generalReason.attr">
                </lm-radio>
              </div>
            </div>
          </div>
        </div>
        <!--确认按钮-->
        <div class="row row3">
          <div class="col cancelDialog_row3_col_v1">
            <lm-button
                    ref="yesButton"
                    refId="yesButton"
                    v-show="pvt_isShow.v8 === 'yesButton'"
                    :paraVarPair="pvt_v8.yesButton.paraVarPair"
                    :para="pvt_v8.yesButton.para"
                    :attr="pvt_v8.yesButton.attr">
            </lm-button>
          </div>
          <div class="col cancelDialog_row3_col_v2">
            <lm-button
                    ref="noButton"
                    refId="noButton"
                    v-show="pvt_isShow.v9 === 'noButton'"
                    :paraVarPair="pvt_v9.noButton.paraVarPair"
                    :para="pvt_v9.noButton.para"
                    :attr="pvt_v9.noButton.attr">
            </lm-button>
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
    name: "cancelDialog",
    props: ['refId', 'paraVarPair', 'para', 'attr', 'number'],
    inject: ['sys'],
    components: {},
    data: function () {
      return {
        // 子模块与所属容器的对应关系
        pvt_subModuleMap: {
          subModule: [
            'titleText','closeButton',
            'hintInfo',
            'detailReasonLabel','detailReason',
            'generalReasonLabel','generalReason',
            'yesButton','noButton'
          ],
          vessel: [
            'v1','v2',
            'v3',
            'v4','v5',
            'v6','v7',
            'v8','v9'
          ],
        },
        // 各个容器当前显示的子模块
        pvt_isShow: {
          v1: null,
          v2: null,
          v3: null,
          v4: null,
          v5: null,
          v6: null,
          v7: null,
          v8: null,
          v9: null
        },
        // 当前模块输入类型的事务接口名称，工具完成前需要用户手动填写
        pvt_eventPortInput: [
          'cancelEvent'
        ],
        // 用户定义的模块变量
        orderId:null,
        detailText:'',
        generalText:'我不想报名了'
      }
    },
    watch:{},
    computed:{
      // 标题
      pvt_v1:function(){
        return {
          titleText:{
            paraVarPair:{},
            para:{
              textData:'确认要取消报名吗?'
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontSize:'16px',
              fontWeight:true,
              indent:false,
              height:'40px',
            }
          }
        }
      },
      pvt_v2:function(){
        return {
          closeButton:{
            paraVarPair:{},
            para:{
              name:['','el-icon-close']
            },
            attr:{
             type:'text'
            }
          }
        }
      },
      // 提示
      pvt_v3:function(){
        return {
          hintInfo: {
            paraVarPair:{},
            para:{
              textData:'取消报名后将无法恢复，您确认不参加次活动吗?(已付费入场卷/门票退款将酌情收取手续费,详情请见退款说明)。'
            },
            attr:{
              label:'p',
              textAlign:'left',
              fontSize:'12px',
              fontWeight:false,
              indent:false,
              height:'30px',
              color:'F3900D'
            }
          }
        }
      },
      // 详细原因
      pvt_v4:function(){
        return {
          detailReasonLabel:{
            paraVarPair:{},
            para:{
              textData:'请填写详细原因(限制200字):'
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontSize:'14px',
              fontWeight:true,
              indent:false,
              height:'40px',
            }
          }
        }
      },
      pvt_v5:function(){
        return {
          detailReason:{
            paraVarPair:{},
            para:{
              text:this.detailText
            },
            attr:{
              type:'textarea',
              autosize:{
                minRows:3,
                maxRows:3
              }
            }
          }
        }
      },
      // 概要原因
      pvt_v6:function(){
        return {
          generalReasonLabel:{
            paraVarPair:{},
            para:{
              textData:'可选择取消报名的理由:'
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontSize:'14px',
              fontWeight:true,
              indent:false,
              height:'40px',
            }
          }
        }
      },
      pvt_v7:function(){
        return {
          generalReason:{
            paraVarPair:{
              radioData:'generalText'
            },
            para:{
              radioData:this.generalText
            },
            attr:{
              radioArr:[
                {label:'我不想报名了',text:'我不想报名了'},
                {label:'支付过程出错',text:'支付过程出错'},
                {label:'报名信息填错',text:'报名信息填错'},
                {label:'报名项选错了',text:'报名项选错了'},
                {label:'其他原因',text:'其他原因'}
              ],
              border:true,
              size:'min'
            }
          }
        }
      },
      // 按钮
      pvt_v8:function(){
        return {
          yesButton:{
            paraVarPair:{},
            para:{
              name:['确认']
            },
            attr:{
              type:'primary',
              size:'small'
            }
          }
        }
      },
      pvt_v9:function(){
        return {
          noButton:{
            paraVarPair:{},
            para:{
              name:['取消']
            },
            attr:{
              type:'',
              size:'small'
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
      startModule:function(orderId,successCallBack,errorCallBack){
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
              // 初始化数据
              $this.orderId = null;
              $this.detailText = '';
              $this.generalText = '我不想报名了';
              if(orderId){
                $this.orderId = orderId;
              }
              para.nStep = 'showModules';
              ++dbFlag;
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                'titleText','closeButton',
                'hintInfo',
                'detailReasonLabel','detailReason',
                'generalReasonLabel','generalReason',
                'yesButton','noButton'
              ];
              $this.showSubModule(refId,true,function(){
                para.nStep = 'startModules';
                if(++dbFlag === 2){
                  $this.startModule(orderId,successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModules':
              //调用子组件的startModule
              $this.startSubModules(function(){
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.startModule(orderId,successCallBack,errorCallBack);
                }
              },para.errorCallBack);
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
      detailInputBlur(value){
        this.detailText = value;
      },
      yesButtonClick(){
        let result = [
          this.generalText,this.detailText
        ];
        this.ep.cancelEvent(this.orderId,result);
        this.hideSelfModule(this.refId,function(){
        },function(error){console.log(error)});
      },
      noButtonClick(){
        this.hideSelfModule(this.refId,function(){
        },function(error){console.log(error)});
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
          sm1:'titleText',sm2:'closeButton',
          sm3:'hintInfo',
          sm4:'detailReasonLabel',sm5:'detailReason',
          sm6:'generalReasonLabel',sm7:'generalReason',
          sm8:'yesButton',sm9:'noButton'
        };

        if (successCallBack !== null) {
          errorCallBack = para;
          successCallBack = null;
        }
        para = errorCallBack;

        while (1) {
          dbFlag = 0;
          switch (para.nStep) {
            case 0:
              para.nStep = 'forceUpdateData';
              ++dbFlag;
              break;
            case 'forceUpdateData':
              $this.forceUpdateData(function(){
                para.nStep = 'startModule_title';
                if (++dbFlag === 2) {
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_title':
              $this.sm[ref.sm1].startModule(function(){
                para.nStep = 'startModule_closeButton';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_closeButton':
              $this.sm[ref.sm2].startModule(function(){
                para.nStep = 'startModule_infoText';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_infoText':
              $this.sm[ref.sm3].startModule(function(){
                para.nStep = 'startModule_detailLabel';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_detailLabel':
              $this.sm[ref.sm4].startModule(function(){
                para.nStep = 'startModule_detail';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_detail':
              $this.sm[ref.sm5].startModule(function(){
                para.nStep = 'startModule_generalLabel';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_generalLabel':
              $this.sm[ref.sm6].startModule(function(){
                para.nStep = 'startModule_general';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_general':
              $this.sm[ref.sm7].startModule(function(){
                para.nStep = 'startModule_yesButton';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_yesButton':
              $this.sm[ref.sm8].startModule(function(){
                para.nStep = 'startModule_noButton';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_noButton':
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
      },
      // 接收子组件的事件
      closeButton_buttonClickEvent(){
        this.noButtonClick();
      },
      detailReason_dataModifyEvent(value){
        this.detailInputBlur(value);
      },
      yesButton_buttonClickEvent(){
        this.yesButtonClick();
      },
      noButton_buttonClickEvent(){
        this.noButtonClick();
      }
    }
  }
</script>
<style lang="scss" scoped>
  .dialogClass{
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-color:rgba(0, 0, 0, 0.5);
    font-size:0;
    z-index:999;
  }
  .cancelDialog{
    position:absolute;
    left:50%;
    top:50%;
    width:500px;
    transform:translate(-50%, -50%);
    background-color:#fff;
    overflow:hidden;
    border-radius:6px;
    text-align:left;
  }
  .cancelDialogContent{
    width:100%;
    height:auto;
    box-sizing:border-box;
    padding:10px;
    overflow:hidden;
    font-size:14px;
  }
  .col{
    display:inline-block;
    vertical-align: middle;
    overflow: hidden;
  }
  .cancelDialog_row1_col_v1{
    width:calc(100% - 50px);
  }
  .cancelDialog_row1_col_v2{
    width:50px;
    height:40px;
  }
  .cancelDialog_row2_col_connect{
    width:100%;
    padding:10px;
  }
  .cancelDialog_row2_1_col_v1{
    width:100%;
    box-sizing:border-box;
    background:#f8f8d2;
  }
  .cancelDialog_row2_2_col_v1{
    width:100%;
    height:40px;
    box-sizing:border-box;
  }
  .cancelDialog_row2_3_col_v1{
    width:100%;
    box-sizing:border-box;
  }
  .cancelDialog_row2_4_col_v1{
    width:100%;
    height:40px;
    box-sizing:border-box;
  }
  .cancelDialog_row2_5_col_v1{
    width:100%;
    box-sizing:border-box;
  }
  .cancelDialog_row3_col_v1{
    width:calc(100% - 80px);
    height:40px;
    padding:0 0 0 calc(100% - 160px);
    box-sizing:border-box;
  }
  .cancelDialog_row3_col_v2{
    width:80px;
    height:40px;
    box-sizing:border-box;
  }
</style>
