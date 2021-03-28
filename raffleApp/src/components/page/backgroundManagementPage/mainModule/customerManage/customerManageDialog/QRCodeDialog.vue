<template>
    <div v-show="pvt_win.isShow.backMan_main_customerMan_QRCodeD"
         :class="{backMan_main_customerMan_QRCodeD_container:true,backMan_main_customerMan_QRCodeD_col:true,backMan_main_customerMan_QRCodeD_col_backMan_main_customerMan_QRCodeD:true,backMan_main_customerMan_QRCodeD_col_backMan_main_customerMan_QRCodeD_size_large:attr.size==='large',backMan_main_customerMan_QRCodeD_col_backMan_main_customerMan_QRCodeD_size_medium:attr.size==='medium',backMan_main_customerMan_QRCodeD_col_backMan_main_customerMan_QRCodeD_size_small:attr.size==='small',backMan_main_customerMan_QRCodeD_col_backMan_main_customerMan_QRCodeD_size_min:attr.size==='min',backMan_main_customerMan_QRCodeD_col_backMan_main_customerMan_QRCodeD_checked:pvt_win.isChecked.backMan_main_customerMan_QRCodeD,backMan_main_customerMan_QRCodeD_col_backMan_main_customerMan_QRCodeD_disable:attr.disabled}"
         :style="pvt_win.style.backMan_main_customerMan_QRCodeD" >

        <div class="backMan_main_customerMan_QRCodeD_row backMan_main_customerMan_QRCodeD_row_row0">
            <div v-show="pvt_win.isShow.r1c1"
                 :class="{backMan_main_customerMan_QRCodeD_col:true,backMan_main_customerMan_QRCodeD_col_r1c1:true,backMan_main_customerMan_QRCodeD_col_r1c1_size_large:attr.size==='large',backMan_main_customerMan_QRCodeD_col_r1c1_size_medium:attr.size==='medium',backMan_main_customerMan_QRCodeD_col_r1c1_size_small:attr.size==='small',backMan_main_customerMan_QRCodeD_col_r1c1_size_min:attr.size==='min',backMan_main_customerMan_QRCodeD_col_r1c1_checked:pvt_win.isChecked.r1c1,backMan_main_customerMan_QRCodeD_col_r1c1_disable:attr.disabled}"
                 :style="pvt_win.style.r1c1" >

                <lm1a-link-text
                        ref="clodeIcon"
                        refId="clodeIcon"
                        v-show="pvt_isShow.r1c1 === 'clodeIcon'"
                        :paraVarPair="pvt_r1c1.clodeIcon.paraVarPair"
                        :para="pvt_r1c1.clodeIcon.para"
                        :attr="pvt_r1c1.clodeIcon.attr">
                </lm1a-link-text>
            </div>
        </div>
        <div class="backMan_main_customerMan_QRCodeD_row backMan_main_customerMan_QRCodeD_row_row1">
            <div v-show="pvt_win.isShow.r2c1"
                 :class="{backMan_main_customerMan_QRCodeD_col:true,backMan_main_customerMan_QRCodeD_col_r2c1:true,backMan_main_customerMan_QRCodeD_col_r2c1_size_large:attr.size==='large',backMan_main_customerMan_QRCodeD_col_r2c1_size_medium:attr.size==='medium',backMan_main_customerMan_QRCodeD_col_r2c1_size_small:attr.size==='small',backMan_main_customerMan_QRCodeD_col_r2c1_size_min:attr.size==='min',backMan_main_customerMan_QRCodeD_col_r2c1_checked:pvt_win.isChecked.r2c1,backMan_main_customerMan_QRCodeD_col_r2c1_disable:attr.disabled}"
                 :style="pvt_win.style.r2c1" >

                <div class="backMan_main_customerMan_QRCodeD_row backMan_main_customerMan_QRCodeD_row_row2">
                    <div v-show="pvt_win.isShow.r2_1c1"
                         :class="{backMan_main_customerMan_QRCodeD_col:true,backMan_main_customerMan_QRCodeD_col_r2_1c1:true,backMan_main_customerMan_QRCodeD_col_r2_1c1_size_large:attr.size==='large',backMan_main_customerMan_QRCodeD_col_r2_1c1_size_medium:attr.size==='medium',backMan_main_customerMan_QRCodeD_col_r2_1c1_size_small:attr.size==='small',backMan_main_customerMan_QRCodeD_col_r2_1c1_size_min:attr.size==='min',backMan_main_customerMan_QRCodeD_col_r2_1c1_checked:pvt_win.isChecked.r2_1c1,backMan_main_customerMan_QRCodeD_col_r2_1c1_disable:attr.disabled}"
                         :style="pvt_win.style.r2_1c1" >

                        <lm1a-qrcode
                                ref="QRCode"
                                refId="QRCode"
                                v-show="pvt_isShow.r2_1c1 === 'QRCode'"
                                :paraVarPair="pvt_r2_1c1.QRCode.paraVarPair"
                                :para="pvt_r2_1c1.QRCode.para"
                                :attr="pvt_r2_1c1.QRCode.attr">
                        </lm1a-qrcode>
                    </div>
                </div>
                <div class="backMan_main_customerMan_QRCodeD_row backMan_main_customerMan_QRCodeD_row_row3">
                    <div v-show="pvt_win.isShow.r3c1"
                         :class="{backMan_main_customerMan_QRCodeD_col:true,backMan_main_customerMan_QRCodeD_col_r3c1:true,backMan_main_customerMan_QRCodeD_col_r3c1_size_large:attr.size==='large',backMan_main_customerMan_QRCodeD_col_r3c1_size_medium:attr.size==='medium',backMan_main_customerMan_QRCodeD_col_r3c1_size_small:attr.size==='small',backMan_main_customerMan_QRCodeD_col_r3c1_size_min:attr.size==='min',backMan_main_customerMan_QRCodeD_col_r3c1_checked:pvt_win.isChecked.r3c1,backMan_main_customerMan_QRCodeD_col_r3c1_disable:attr.disabled}"
                         :style="pvt_win.style.r3c1" >

                        <lm1a-link-text
                                ref="linkText"
                                refId="linkText"
                                v-show="pvt_isShow.r3c1 === 'linkText'"
                                :paraVarPair="pvt_r3c1.linkText.paraVarPair"
                                :para="pvt_r3c1.linkText.para"
                                :attr="pvt_r3c1.linkText.attr">
                        </lm1a-link-text>
                    </div>
                    <div v-show="pvt_win.isShow.r3c2"
                         :class="{backMan_main_customerMan_QRCodeD_col:true,backMan_main_customerMan_QRCodeD_col_r3c2:true,backMan_main_customerMan_QRCodeD_col_r3c2_size_large:attr.size==='large',backMan_main_customerMan_QRCodeD_col_r3c2_size_medium:attr.size==='medium',backMan_main_customerMan_QRCodeD_col_r3c2_size_small:attr.size==='small',backMan_main_customerMan_QRCodeD_col_r3c2_size_min:attr.size==='min',backMan_main_customerMan_QRCodeD_col_r3c2_checked:pvt_win.isChecked.r3c2,backMan_main_customerMan_QRCodeD_col_r3c2_disable:attr.disabled}"
                         :style="pvt_win.style.r3c2" >

                        <lm1a-input-text
                                ref="linkInput"
                                refId="linkInput"
                                v-show="pvt_isShow.r3c2 === 'linkInput'"
                                :paraVarPair="pvt_r3c2.linkInput.paraVarPair"
                                :para="pvt_r3c2.linkInput.para"
                                :attr="pvt_r3c2.linkInput.attr">
                        </lm1a-input-text>
                    </div>
                    <div v-show="pvt_win.isShow.r3c3"
                         :class="{backMan_main_customerMan_QRCodeD_col:true,backMan_main_customerMan_QRCodeD_col_r3c3:true,backMan_main_customerMan_QRCodeD_col_r3c3_size_large:attr.size==='large',backMan_main_customerMan_QRCodeD_col_r3c3_size_medium:attr.size==='medium',backMan_main_customerMan_QRCodeD_col_r3c3_size_small:attr.size==='small',backMan_main_customerMan_QRCodeD_col_r3c3_size_min:attr.size==='min',backMan_main_customerMan_QRCodeD_col_r3c3_checked:pvt_win.isChecked.r3c3,backMan_main_customerMan_QRCodeD_col_r3c3_disable:attr.disabled}"
                         :style="pvt_win.style.r3c3" >

                        <lm1a-link-text
                                ref="copyText"
                                refId="copyText"
                                v-show="pvt_isShow.r3c3 === 'copyText'"
                                :paraVarPair="pvt_r3c3.copyText.paraVarPair"
                                :para="pvt_r3c3.copyText.para"
                                :attr="pvt_r3c3.copyText.attr">
                        </lm1a-link-text>
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
          mac: mac.mac,
        customerId:this.para.customerId,
        pvt_subModuleMap: {
          vessel:['r1c1','r2_1c1','r3c1','r3c3','r3c2'],
          subModule:['clodeIcon','QRCode','linkText','copyText','linkInput'],
        },
        pvt_isShow: {
          r1c1:null,
          r2_1c1:null,
          r3c1:null,
          r3c3:null,
          r3c2:null,
        },
        pvt_win:{
          isShow:{
            backMan_main_customerMan_QRCodeD:true,
            r1c1:true,
            r2c1:true,
            r2_1c1:true,
            r3c1:true,
            r3c2:true,
            r3c3:true,
          },
          isChecked:{
            backMan_main_customerMan_QRCodeD:false,
            r1c1:false,
            r2c1:false,
            r2_1c1:false,
            r3c1:false,
            r3c2:false,
            r3c3:false,
          },
          style:{
            backMan_main_customerMan_QRCodeD:null,
            r1c1:null,
            r2c1:null,
            r2_1c1:null,
            r3c1:null,
            r3c2:null,
            r3c3:null,
          },
        },
        pvt_eventPortInput: [],

        QRCode:null,
        link:'',
      };
    },
    watch: {
      customerId: {
        handler: function (val, oldVal) {
          if (val !== oldVal && this.paraVarPair.customerId) {
            if (this.number !== undefined) { // 循环
              this.$parent[this.paraVarPair.customerId][this.number] = val
            } else { // 非循环
              this.$parent[this.paraVarPair.customerId] = val
            }
          }
        },
        deep   : true
      },
    },
    computed:{
      pvt_r1c1:function(){
        return {
          clodeIcon:{
            paraVarPair:{
            },
            para:{
              textData:'',
            },
            attr:{
              isClick:true,
              label:'div',
              fontWeight:true,
              color:'#000',
              fontSize:'20px',
              icon:'el-icon-close',
            },
          },
        };
      },
      pvt_r2_1c1:function(){
        return {
          QRCode:{
            paraVarPair:{
              qrUrl:'QRCode',
            },
            para:{
              qrUrl:this.QRCode,
            },
            attr:{
              size:300
            },
          },
        };
      },
      pvt_r3c1:function(){
        return {
          linkText:{
            paraVarPair:{
            },
            para:{
              textData:'链接',
            },
            attr:{
              label:'div',
              color:'#B0B2B6',
              fontSize:'14px',
            },
          },
        };
      },
      pvt_r3c3:function(){
        return {
          copyText:{
            paraVarPair:{
            },
            para:{
              textData:'复制',
            },
            attr:{
              label:'div',
              color:'#1D77D4',
              fontSize:'14px',
              isClick:true,
            },
          },
        };
      },
      pvt_r3c2:function(){
        return {
          linkInput:{
            paraVarPair:{
              text:'link',
            },
            para:{
              text:this.link,
            },
            attr:{
              readonly:true
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
        let tableVariable,parentRecord,record;
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
              $this.customerId = $this.para.customerId;
              // 初始化数据
              $this.QRCode = null;
              $this.link = '';
              //查找数据
              dbData = {};
              tableVariable = null;
              parentRecord = null;
              record = {
                table:$this.mac.tb.customer,
                id:[$this.customerId],
                field:[$this.mac.fd.customer.number]
              };
              $this.sys.api.recordRead(tableVariable,parentRecord,record,dbData, function () {
                //二维码需要加密吗？
                //二维码是签到页面IP加客户编号；链接是二维码页面加客户编号
                var customerNumber = dbData[$this.mac.fd.customer.number][0];
                $this.QRCode = 'http://raffle.zeropaas.com/dist_other/index.html??group=1&geneAddr=6&parent=%7B%22geneAddr%22:49,%22server%22:null,%22geneSet%22:5%7D&user=3&number=' + customerNumber + '#/receiveCustomer_terminal';
                //链接的确定
                $this.link = 'http://raffle.zeropaas.com/dist_signIn/index.html??group=1&geneAddr=10&parent=%7B%22geneAddr%22:null,%22server%22:null,%22geneSet%22:6%7D&user=1&number=' + customerNumber + '#/customerSignIn_terminal';
                para.nStep = 'showModules';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack,errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                'clodeIcon','QRCode','linkText','copyText','linkInput'
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
                para.nStep = 'startModule_clodeIcon';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              });
              break;
            case 'startModule_clodeIcon':
              //调用子组件的startModule
              $this.sm['clodeIcon'].startModule(function () {
                para.nStep = 'startModule_QRCode';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_QRCode':
              //调用子组件的startModule
              $this.sm['QRCode'].startModule(function () {
                para.nStep = 'startModule_linkText';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_linkText':
              //调用子组件的startModule
              $this.sm['linkText'].startModule(function () {
                para.nStep = 'startModule_linkInput';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_linkInput':
              $this.sm['linkInput'].startModule(function () {
                para.nStep = 'startModule_copyText';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_copyText':
              $this.sm['copyText'].startModule(function () {
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
      copyLink:function(e){
        //如何复制
        var myElement = this.$refs.linkInput.$el;
        myElement = myElement.querySelector('input.el-input__inner');
        myElement.select();
        var range = document.createRange();
        range.selectNode(myElement);
        window.getSelection().addRange(range);
        let successful = document.execCommand('copy');
        if(!successful){
          window.clipboardData.setData('text',myElement.value);
        }else{
          myElement.blur();
        }
      },
      clodeIcon_textClickEvent:function(){
        this.closeDialog();
      },
      copyText_textClickEvent:function(){
        this.copyLink();
      },
    },
  };
</script>
<style lang="scss" scoped>
    .backMan_main_customerMan_QRCodeD_container {
        width:100%;
        height:100%;
    }
    .backMan_main_customerMan_QRCodeD_mask {
        display:flex;
        position:fixed;
        left:0;
        top:0;
        width:100vw;
        height:100vh;
        background-color:rgba(0,0,0,.4);
    }
    .backMan_main_customerMan_QRCodeD_dialog {
        position:absolute;
        left:0;
        top:0;
    }
    .backMan_main_customerMan_QRCodeD_overlay {
        position:absolute;
        left:0;
        top:0;
    }
    .backMan_main_customerMan_QRCodeD_row {
        display:flex;
    }
    .backMan_main_customerMan_QRCodeD_col {
        position:relative;
        display:flex;
        flex-direction:column;
        flex-wrap:nowrap;
    }
    .backMan_main_customerMan_QRCodeD_col_backMan_main_customerMan_QRCodeD_size_medium {
        width:$backMan_main_customerMan_QRCodeD-backMan_main_customerMan_QRCodeD-medium-width;
        height:$backMan_main_customerMan_QRCodeD-backMan_main_customerMan_QRCodeD-medium-height;
    }
    .backMan_main_customerMan_QRCodeD_col_r1c1_size_medium {
        width:$backMan_main_customerMan_QRCodeD-r1c1-medium-width;
        height:$backMan_main_customerMan_QRCodeD-r1c1-medium-height;
        align-items:$backMan_main_customerMan_QRCodeD-r1c1-medium-horizontal-position;
        line-height:$backMan_main_customerMan_QRCodeD-r1c1-medium-line-height;
        padding: 0 5px 0 0;
        box-sizing: border-box;
    }
    .backMan_main_customerMan_QRCodeD_col_r2c1_size_medium {
        width:$backMan_main_customerMan_QRCodeD-r2c1-medium-width;
        padding:$backMan_main_customerMan_QRCodeD-r2c1-medium-padding;
        align-items:$backMan_main_customerMan_QRCodeD-r2c1-medium-horizontal-position;
        box-sizing: border-box;
    }
    .backMan_main_customerMan_QRCodeD_col_r2_1c1_size_medium {
        width:300px;
        height:300px;
        margin: 0 0 20px 0;
    }
    .backMan_main_customerMan_QRCodeD_col_r3c1_size_medium {
        height:$backMan_main_customerMan_QRCodeD-r3c1-medium-height;
        line-height:$backMan_main_customerMan_QRCodeD-r3c1-medium-line-height;
        width:50px;
        align-items: center;
    }
    .backMan_main_customerMan_QRCodeD_col_r3c2_size_medium {

        height:$backMan_main_customerMan_QRCodeD-r3c2-medium-height;
        justify-content:$backMan_main_customerMan_QRCodeD-r3c2-medium-vertical-position;
        width:260px;
    }
    .backMan_main_customerMan_QRCodeD_col_r3c3_size_medium {
        height:$backMan_main_customerMan_QRCodeD-r3c3-medium-height;
        line-height:$backMan_main_customerMan_QRCodeD-r3c3-medium-line-height;
        width:50px;
        align-items: center;
    }
</style>
