<template>
    <div v-show="pvt_win.isShow.backMan_main_customerManRowWindo"
         :class="{backMan_main_customerManRow_container:true,backMan_main_customerManRow_col:true,backMan_main_customerManRow_col_backMan_main_customerManRowWindo:true,backMan_main_customerManRow_col_backMan_main_customerManRowWindo_size_large:attr.size==='large',backMan_main_customerManRow_col_backMan_main_customerManRowWindo_size_medium:attr.size==='medium',backMan_main_customerManRow_col_backMan_main_customerManRowWindo_size_small:attr.size==='small',backMan_main_customerManRow_col_backMan_main_customerManRowWindo_size_min:attr.size==='min',backMan_main_customerManRow_col_backMan_main_customerManRowWindo_checked:pvt_win.isChecked.backMan_main_customerManRowWindo,backMan_main_customerManRow_col_backMan_main_customerManRowWindo_disable:attr.disabled}"
         :style="pvt_win.style.backMan_main_customerManRowWindo" @click="showInfo">

        <div class="backMan_main_customerManRow_row backMan_main_customerManRow_row_row0">
            <div v-show="pvt_win.isShow.r1c1"
                 :class="{backMan_main_customerManRow_col:true,backMan_main_customerManRow_col_r1c1:true,backMan_main_customerManRow_col_r1c1_size_large:attr.size==='large',backMan_main_customerManRow_col_r1c1_size_medium:attr.size==='medium',backMan_main_customerManRow_col_r1c1_size_small:attr.size==='small',backMan_main_customerManRow_col_r1c1_size_min:attr.size==='min',backMan_main_customerManRow_col_r1c1_checked:pvt_win.isChecked.r1c1,backMan_main_customerManRow_col_r1c1_disable:attr.disabled}"
                 :style="pvt_win.style.r1c1" @click="function(e){e.stopPropagation()}">

                <lm1a-checkbox
                        ref="checkbox"
                        refId="checkbox"
                        v-show="pvt_isShow.r1c1 === 'checkbox'"
                        :paraVarPair="pvt_r1c1.checkbox.paraVarPair"
                        :para="pvt_r1c1.checkbox.para"
                        :attr="pvt_r1c1.checkbox.attr">
                </lm1a-checkbox>
            </div>
            <div v-show="pvt_win.isShow.r1c2"
                 :class="{backMan_main_customerManRow_col:true,backMan_main_customerManRow_col_r1c2:true,backMan_main_customerManRow_col_r1c2_size_large:attr.size==='large',backMan_main_customerManRow_col_r1c2_size_medium:attr.size==='medium',backMan_main_customerManRow_col_r1c2_size_small:attr.size==='small',backMan_main_customerManRow_col_r1c2_size_min:attr.size==='min',backMan_main_customerManRow_col_r1c2_checked:pvt_win.isChecked.r1c2,backMan_main_customerManRow_col_r1c2_disable:attr.disabled}"
                 :style="pvt_win.style.r1c2" >

                <lm1a-link-text
                        ref="mobileText"
                        refId="mobileText"
                        v-show="pvt_isShow.r1c2 === 'mobileText'"
                        :paraVarPair="pvt_r1c2.mobileText.paraVarPair"
                        :para="pvt_r1c2.mobileText.para"
                        :attr="pvt_r1c2.mobileText.attr">
                </lm1a-link-text>
            </div>
            <div v-show="pvt_win.isShow.r1c3"
                 :class="{backMan_main_customerManRow_col:true,backMan_main_customerManRow_col_r1c3:true,backMan_main_customerManRow_col_r1c3_size_large:attr.size==='large',backMan_main_customerManRow_col_r1c3_size_medium:attr.size==='medium',backMan_main_customerManRow_col_r1c3_size_small:attr.size==='small',backMan_main_customerManRow_col_r1c3_size_min:attr.size==='min',backMan_main_customerManRow_col_r1c3_checked:pvt_win.isChecked.r1c3,backMan_main_customerManRow_col_r1c3_disable:attr.disabled}"
                 :style="pvt_win.style.r1c3" >

                <lm1a-link-text
                        ref="nameText"
                        refId="nameText"
                        v-show="pvt_isShow.r1c3 === 'nameText'"
                        :paraVarPair="pvt_r1c3.nameText.paraVarPair"
                        :para="pvt_r1c3.nameText.para"
                        :attr="pvt_r1c3.nameText.attr">
                </lm1a-link-text>
            </div>
            <div v-show="pvt_win.isShow.r1c4"
                 :class="{backMan_main_customerManRow_col:true,backMan_main_customerManRow_col_r1c4:true,backMan_main_customerManRow_col_r1c4_size_large:attr.size==='large',backMan_main_customerManRow_col_r1c4_size_medium:attr.size==='medium',backMan_main_customerManRow_col_r1c4_size_small:attr.size==='small',backMan_main_customerManRow_col_r1c4_size_min:attr.size==='min',backMan_main_customerManRow_col_r1c4_checked:pvt_win.isChecked.r1c4,backMan_main_customerManRow_col_r1c4_disable:attr.disabled}"
                 :style="pvt_win.style.r1c4" >

                <lm1a-link-text
                        ref="companyText"
                        refId="companyText"
                        v-show="pvt_isShow.r1c4 === 'companyText'"
                        :paraVarPair="pvt_r1c4.companyText.paraVarPair"
                        :para="pvt_r1c4.companyText.para"
                        :attr="pvt_r1c4.companyText.attr">
                </lm1a-link-text>
            </div>
            <div v-show="pvt_win.isShow.r1c5"
                 :class="{backMan_main_customerManRow_col:true,backMan_main_customerManRow_col_r1c5:true,backMan_main_customerManRow_col_r1c5_size_large:attr.size==='large',backMan_main_customerManRow_col_r1c5_size_medium:attr.size==='medium',backMan_main_customerManRow_col_r1c5_size_small:attr.size==='small',backMan_main_customerManRow_col_r1c5_size_min:attr.size==='min',backMan_main_customerManRow_col_r1c5_checked:pvt_win.isChecked.r1c5,backMan_main_customerManRow_col_r1c5_disable:attr.disabled}"
                 :style="pvt_win.style.r1c5" >

                <lm1a-link-text
                        ref="checkTime"
                        refId="checkTime"
                        v-show="pvt_isShow.r1c5 === 'checkTime'"
                        :paraVarPair="pvt_r1c5.checkTime.paraVarPair"
                        :para="pvt_r1c5.checkTime.para"
                        :attr="pvt_r1c5.checkTime.attr">
                </lm1a-link-text>
            </div>
            <div v-show="pvt_win.isShow.r1c6"
                 :class="{backMan_main_customerManRow_col:true,backMan_main_customerManRow_col_r1c6:true,backMan_main_customerManRow_col_r1c6_size_large:attr.size==='large',backMan_main_customerManRow_col_r1c6_size_medium:attr.size==='medium',backMan_main_customerManRow_col_r1c6_size_small:attr.size==='small',backMan_main_customerManRow_col_r1c6_size_min:attr.size==='min',backMan_main_customerManRow_col_r1c6_checked:pvt_win.isChecked.r1c6,backMan_main_customerManRow_col_r1c6_disable:attr.disabled}"
                 :style="pvt_win.style.r1c6" >

                <lm1a-link-text
                        ref="remarkText"
                        refId="remarkText"
                        v-show="pvt_isShow.r1c6 === 'remarkText'"
                        :paraVarPair="pvt_r1c6.remarkText.paraVarPair"
                        :para="pvt_r1c6.remarkText.para"
                        :attr="pvt_r1c6.remarkText.attr">
                </lm1a-link-text>
            </div>
            <div v-show="pvt_win.isShow.r1c7"
                 :class="{backMan_main_customerManRow_col:true,backMan_main_customerManRow_col_r1c7:true,backMan_main_customerManRow_col_r1c7_size_large:attr.size==='large',backMan_main_customerManRow_col_r1c7_size_medium:attr.size==='medium',backMan_main_customerManRow_col_r1c7_size_small:attr.size==='small',backMan_main_customerManRow_col_r1c7_size_min:attr.size==='min',backMan_main_customerManRow_col_r1c7_checked:pvt_win.isChecked.r1c7,backMan_main_customerManRow_col_r1c7_disable:attr.disabled}"
                 :style="pvt_win.style.r1c7" >

                <lm1a-link-text
                        ref="statusText"
                        refId="statusText"
                        v-show="pvt_isShow.r1c7 === 'statusText'"
                        :paraVarPair="pvt_r1c7.statusText.paraVarPair"
                        :para="pvt_r1c7.statusText.para"
                        :attr="pvt_r1c7.statusText.attr">
                </lm1a-link-text>
            </div>
            <div v-show="pvt_win.isShow.r1c8"
                 :class="{backMan_main_customerManRow_col:true,backMan_main_customerManRow_col_r1c8:true,backMan_main_customerManRow_col_r1c8_size_large:attr.size==='large',backMan_main_customerManRow_col_r1c8_size_medium:attr.size==='medium',backMan_main_customerManRow_col_r1c8_size_small:attr.size==='small',backMan_main_customerManRow_col_r1c8_size_min:attr.size==='min',backMan_main_customerManRow_col_r1c8_checked:pvt_win.isChecked.r1c8,backMan_main_customerManRow_col_r1c8_disable:attr.disabled}"
                 :style="pvt_win.style.r1c8" >

                <lm1a-link-text
                        ref="SMSNumber"
                        refId="SMSNumber"
                        v-show="pvt_isShow.r1c8 === 'SMSNumber'"
                        :paraVarPair="pvt_r1c8.SMSNumber.paraVarPair"
                        :para="pvt_r1c8.SMSNumber.para"
                        :attr="pvt_r1c8.SMSNumber.attr">
                </lm1a-link-text>
            </div>
            <div v-show="pvt_win.isShow.r1c9"
                 :class="{backMan_main_customerManRow_col:true,backMan_main_customerManRow_col_r1c9:true,backMan_main_customerManRow_col_r1c9_size_large:attr.size==='large',backMan_main_customerManRow_col_r1c9_size_medium:attr.size==='medium',backMan_main_customerManRow_col_r1c9_size_small:attr.size==='small',backMan_main_customerManRow_col_r1c9_size_min:attr.size==='min',backMan_main_customerManRow_col_r1c9_checked:pvt_win.isChecked.r1c9,backMan_main_customerManRow_col_r1c9_disable:attr.disabled}"
                 :style="pvt_win.style.r1c9" >

                <lm1a-link-text
                        ref="statusBtn"
                        refId="statusBtn"
                        v-show="pvt_isShow.r1c9 === 'statusBtn'"
                        :paraVarPair="pvt_r1c9.statusBtn.paraVarPair"
                        :para="pvt_r1c9.statusBtn.para"
                        :attr="pvt_r1c9.statusBtn.attr">
                </lm1a-link-text>
            </div>
            <div v-show="pvt_win.isShow.r1c10"
                 :class="{backMan_main_customerManRow_col:true,backMan_main_customerManRow_col_r1c10:true,backMan_main_customerManRow_col_r1c10_size_large:attr.size==='large',backMan_main_customerManRow_col_r1c10_size_medium:attr.size==='medium',backMan_main_customerManRow_col_r1c10_size_small:attr.size==='small',backMan_main_customerManRow_col_r1c10_size_min:attr.size==='min',backMan_main_customerManRow_col_r1c10_checked:pvt_win.isChecked.r1c10,backMan_main_customerManRow_col_r1c10_disable:attr.disabled}"
                 :style="pvt_win.style.r1c10" >

                <lm1a-link-text
                        ref="QRCodetext"
                        refId="QRCodetext"
                        v-show="pvt_isShow.r1c10 === 'QRCodetext'"
                        :paraVarPair="pvt_r1c10.QRCodetext.paraVarPair"
                        :para="pvt_r1c10.QRCodetext.para"
                        :attr="pvt_r1c10.QRCodetext.attr">
                </lm1a-link-text>
            </div>
            <div v-show="pvt_win.isShow.r1c11"
                 :class="{backMan_main_customerManRow_col:true,backMan_main_customerManRow_col_r1c11:true,backMan_main_customerManRow_col_r1c11_size_large:attr.size==='large',backMan_main_customerManRow_col_r1c11_size_medium:attr.size==='medium',backMan_main_customerManRow_col_r1c11_size_small:attr.size==='small',backMan_main_customerManRow_col_r1c11_size_min:attr.size==='min',backMan_main_customerManRow_col_r1c11_checked:pvt_win.isChecked.r1c11,backMan_main_customerManRow_col_r1c11_disable:attr.disabled}"
                 :style="pvt_win.style.r1c11" >

                <lm1a-button
                        ref="modifyBtn"
                        refId="modifyBtn"
                        v-show="pvt_isShow.r1c11 === 'modifyBtn'"
                        :paraVarPair="pvt_r1c11.modifyBtn.paraVarPair"
                        :para="pvt_r1c11.modifyBtn.para"
                        :attr="pvt_r1c11.modifyBtn.attr">
                </lm1a-button>
            </div>
            <div v-show="pvt_win.isShow.r1c12"
                 :class="{backMan_main_customerManRow_col:true,backMan_main_customerManRow_col_r1c12:true,backMan_main_customerManRow_col_r1c12_size_large:attr.size==='large',backMan_main_customerManRow_col_r1c12_size_medium:attr.size==='medium',backMan_main_customerManRow_col_r1c12_size_small:attr.size==='small',backMan_main_customerManRow_col_r1c12_size_min:attr.size==='min',backMan_main_customerManRow_col_r1c12_checked:pvt_win.isChecked.r1c12,backMan_main_customerManRow_col_r1c12_disable:attr.disabled}"
                 :style="pvt_win.style.r1c12" >

                <lm1a-button
                        ref="deleteBtn"
                        refId="deleteBtn"
                        v-show="pvt_isShow.r1c12 === 'deleteBtn'"
                        :paraVarPair="pvt_r1c12.deleteBtn.paraVarPair"
                        :para="pvt_r1c12.deleteBtn.para"
                        :attr="pvt_r1c12.deleteBtn.attr">
                </lm1a-button>
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
        checked:this.para.checked,
        pvt_subModuleMap: {
          vessel:['r1c1','r1c2','r1c3','r1c4','r1c5','r1c6','r1c7','r1c8','r1c9','r1c10','r1c11','r1c12'],
          subModule:['checkbox','mobileText','nameText','companyText','checkTime','remarkText','statusText','SMSNumber','statusBtn','QRCodetext','modifyBtn','deleteBtn'],
        },
        pvt_isShow: {
          r1c1:null,
          r1c2:null,
          r1c3:null,
          r1c4:null,
          r1c5:null,
          r1c6:null,
          r1c7:null,
          r1c8:null,
          r1c9:null,
          r1c10:null,
          r1c11:null,
          r1c12:null,
        },
        pvt_win:{
          isShow:{
            backMan_main_customerManRowWindo:true,
            r1c1:true,
            r1c2:true,
            r1c3:true,
            r1c4:true,
            r1c5:true,
            r1c6:true,
            r1c7:true,
            r1c8:true,
            r1c9:true,
            r1c10:true,
            r1c11:true,
            r1c12:true,
          },
          isChecked:{
            backMan_main_customerManRowWindo:false,
            r1c1:false,
            r1c2:false,
            r1c3:false,
            r1c4:false,
            r1c5:false,
            r1c6:false,
            r1c7:false,
            r1c8:false,
            r1c9:false,
            r1c10:false,
            r1c11:false,
            r1c12:false,
          },
          style:{
            backMan_main_customerManRowWindo:null,
            r1c1:null,
            r1c2:null,
            r1c3:null,
            r1c4:null,
            r1c5:null,
            r1c6:null,
            r1c7:null,
            r1c8:null,
            r1c9:null,
            r1c10:null,
            r1c11:null,
            r1c12:null,
          },
        },
        pvt_eventPortInput: ['showInfoEvent','checkedEvent','showQRCodeEvent','showModifyDiaEvent','deleteCustomerEvent'],

        checkData:[],
        mobile:null,
        name:'',
        company:'',
        checkTime:'',
        remark:'',
        remarkTextAlign:'',
        status:null,
        smsNum:null,
        statusBtnText:'取消',
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
          checkbox:{
            paraVarPair:{
              checkData:'checkData',
            },
            para:{
              checkData:this.checkData,
            },
            attr:{
              checkboxArr:[{label:1,text:''}],
            },
          },
        };
      },
      pvt_r1c2:function(){
        return {
          mobileText:{
            paraVarPair:{
              textData:'mobile',
            },
            para:{
              textData:this.mobile,
            },
            attr:{
              label:'div',
              color:'#000',
              fontSize:'12px',
            },
          },
        };
      },
      pvt_r1c3:function(){
        return {
          nameText:{
            paraVarPair:{
              textData:'name',
            },
            para:{
              textData:this.name,
            },
            attr:{
              label:'div',
              color:'#000',
              fontSize:'12px',
            },
          },
        };
      },
      pvt_r1c4:function(){
        return {
          companyText:{
            paraVarPair:{
              textData:'company',
            },
            para:{
              textData:this.company,
            },
            attr:{
              label:'div',
              color:'#000',
              fontSize:'12px',
            },
          },
        };
      },
      pvt_r1c5:function(){
        return {
          checkTime:{
            paraVarPair:{
              textData:'checkTime',
            },
            para:{
              textData:this.checkTime,
            },
            attr:{
              label:'div',
              color:'#000',
              fontSize:'12px',
            },
          },
        };
      },
      pvt_r1c6:function(){
        return {
          remarkText:{
            paraVarPair:{
              textData:'remark',
            },
            para:{
              textData:this.remark,
            },
            attr:{
              label:'div',
              color:'#000',
              fontSize:'12px',
              hideRedundant:true,
              textAlign:this.remarkTextAlign
            },
          },
        };
      },
      pvt_r1c7:function(){
        return {
          statusText:{
            paraVarPair:{
              textData:'status',
            },
            para:{
              textData:this.status,
            },
            attr:{
              label:'div',
              color:'#000',
              fontSize:'12px',
            },
          },
        };
      },
      pvt_r1c8:function(){
        return {
          SMSNumber:{
            paraVarPair:{
              textData:'smsNum',
            },
            para:{
              textData:this.smsNum,
            },
            attr:{
              label:'div',
              color:'#000',
              fontSize:'12px',
            },
          },
        };
      },
      pvt_r1c9:function(){
        return {
          statusBtn:{
            paraVarPair:{
              textData:'statusBtnText',
            },
            para:{
              textData:this.statusBtnText,
            },
            attr:{
              label:'div',
              color:'#1D77D4',
              fontSize:'12px',
              isClick:true
            },
          },
        };
      },
      pvt_r1c10:function(){
        return {
          QRCodetext:{
            paraVarPair:{
            },
            para:{
              textData:'二维码',
            },
            attr:{
              label:'div',
              color:'#1D77D4',
              fontSize:'12px',
              isClick:true
            },
          },
        };
      },
      pvt_r1c11:function(){
        return {
          modifyBtn:{
            paraVarPair:{
            },
            para:{
              name:['','el-icon-edit-outline'],
            },
            attr:{
              type:'text',
            },
          },
        };
      },
      pvt_r1c12:function(){
        return {
          deleteBtn:{
            paraVarPair:{
            },
            para:{
              name:['','el-icon-delete'],
            },
            attr:{
              type:'text',
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
        let tableVariable,parentRecord,record,dbData;

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
              $this.checked = $this.para.checked;
              // 初始化数据
              $this.checkData = $this.checked === 1?[1]:[];
              $this.mobile = '';
              $this.name = '';
              $this.company = '未填写';
              $this.checkTime = '';
              $this.remark = '未填写';
              $this.remarkTextAlign = 'center';
              $this.status = '待审核';
              $this.smsNum = 0;
              $this.statusBtnText = '取消';
              //查用户表
              dbData = {};
              tableVariable = null;
              parentRecord = null;
              record = {
                table:$this.mac.tb.customer,
                id:[$this.customerId],
                field:[
                  $this.mac.fd.customer.mobile,
                  $this.mac.fd.customer.name,
                  $this.mac.fd.customer.company,
                  $this.mac.fd.customer.time,
                  $this.mac.fd.customer.remark,
                  $this.mac.fd.customer.status,
                  $this.mac.fd.customer.sms_num
                ]
              };
              $this.sys.api.recordRead(tableVariable,parentRecord,record,dbData,function(){
                $this.mobile = dbData[$this.mac.fd.customer.mobile][0];
                $this.name = dbData[$this.mac.fd.customer.name][0];
                if(dbData[$this.mac.fd.customer.company][0]){
                  $this.company = dbData[$this.mac.fd.customer.company][0];
                }
                if(dbData[$this.mac.fd.customer.time][0]){
                  $this.checkTime = dbData[$this.mac.fd.customer.time][0];
                }
                if(dbData[$this.mac.fd.customer.remark][0]){
                  $this.remark = dbData[$this.mac.fd.customer.remark][0];
                }
                //判断备注长度，修改排列方式
                if($this.remark.length >= 5){
                  $this.remarkTextAlign = 'left';
                }
                var status = dbData[$this.mac.fd.customer.status][0];
                if(status === $this.mac.enum.customer.status.pending){
                  $this.status = '待审核';
                  $this.statusBtnText = '通过';
                }else if(status === $this.mac.enum.customer.status.approved){
                  $this.status = '已通过';
                  $this.statusBtnText = '取消';
                }else{
                  $this.status = '已取消';
                  $this.statusBtnText = '';
                }
                if(dbData[$this.mac.fd.customer.sms_num][0]){
                  $this.smsNum = dbData[$this.mac.fd.customer.sms_num][0];
                }
                para.nStep = 'showModules';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              },para.errorCallBack)
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                'checkbox',
                'mobileText','nameText','companyText','checkTime', 'remarkText','statusText','SMSNumber',
                'statusBtn','QRCodetext','modifyBtn','deleteBtn'
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
                para.nStep = 'startModule_checkbox';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              });
              break;
            case 'startModule_checkbox':
              //调用子组件的startModule
              $this.sm['checkbox'].startModule(function () {
                para.nStep = 'startModule_mobileText';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_mobileText':
              $this.sm['mobileText'].startModule(function () {
                para.nStep = 'startModule_nameText';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_nameText':
              $this.sm['nameText'].startModule(function () {
                para.nStep = 'startModule_companyText';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_companyText':
              $this.sm['companyText'].startModule(function () {
                para.nStep = 'startModule_checkTime';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_checkTime':
              $this.sm['checkTime'].startModule(function () {
                para.nStep = 'startModule_remarkText';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_remarkText':
              $this.sm['remarkText'].startModule(function () {
                para.nStep = 'startModule_statusText';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_statusText':
              $this.sm['statusText'].startModule(function () {
                para.nStep = 'startModule_SMSNumber';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_SMSNumber':
              $this.sm['SMSNumber'].startModule(function () {
                para.nStep = 'startModule_statusBtn';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_statusBtn':
              $this.sm['statusBtn'].startModule(function () {
                para.nStep = 'startModule_QRCodetext';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_QRCodetext':
              $this.sm['QRCodetext'].startModule(function () {
                para.nStep = 'startModule_modifyBtn';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_modifyBtn':
              $this.sm['modifyBtn'].startModule(function () {
                para.nStep = 'startModule_deleteBtn';
                if (++dbFlag === 2) {
                  $this.startModule(successCallBack, errorCallBack);
                }
              }, para.errorCallBack);
              break;
            case 'startModule_deleteBtn':
              $this.sm['deleteBtn'].startModule(function () {
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
      showInfo:function(){
        if(this.noRowClick){
          this.noRowClick = false;
        }else{
          this.ep.showInfoEvent(this.number);
        }
      },
      checkboxChange:function(){
        //打标志禁止触发行的点击事件
        this.noRowClick = true;
        this.ep.checkedEvent(this.number,this.checkData.length !== 0);
      },
      changeState:function(){
        let $this = this;
        this.noRowClick = true;
        //修改数据
        let dbData = {};
        if($this.statusBtnText === '取消'){
          dbData[$this.mac.fd.customer.status] = [$this.mac.enum.customer.status.cancelled];
          $this.status = '已取消';
          $this.statusBtnText = '';
        }else if($this.statusBtnText === '通过'){
          dbData[$this.mac.fd.customer.status] = [$this.mac.enum.customer.status.approved];
          $this.status = '已通过';
          $this.statusBtnText = '取消';
        }
        let tableVariable = null;
        let parentRecord = null;
        let record = {
          table:$this.mac.tb.customer,
          id:[$this.customerId]
        };
        $this.sys.api.recordModify(tableVariable,parentRecord,record,dbData, function () {
          $this.showTipText($this.status);
          //上传数据
          tableVariable = [{
            $table:$this.mac.tb.customer,
            $arrField:[$this.mac.fd.customer.status],
            $arrValue:[$this.customerId],
            $arrSubTab:[]
          }];
          $this.sys.api.dataOutput(tableVariable,null,function(){
          },function(error){console.log(error)});
          //刷新显示
          $this.forceUpdateData(function () {
            $this.sm['statusText'].startModule(function () {
              $this.sm['statusBtn'].startModule(function () {
              },function(error){console.log(error)});
            },function(error){console.log(error)});
          });
        },function(error){console.log(error)});
      },
      showQRCode:function(){
        this.noRowClick = true;
        this.ep.showQRCodeEvent(this.number);
      },
      showTipText:function(text){
        //显示一个提示信息
        var tipText = document.getElementById('tipText');
        if(tipText){
          tipText.remove();
        }
        //清空对象
        if (this.myTimeOut) {
          window.clearTimeout(this.myTimeOut);
        }
        var div = document.createElement('div');
        div.id = "tipText";
        div.style = "display:inline-block;padding:12px 20px;background-color:#4C4C4C;font-size:12px;border-radius:4px;position:fixed;top:50%;left:50%;transform: translate(-50%, -50%);z-index:2010";
        div.innerHTML = '<span style="color:#fff;">'
          + '<i class="el-icon-success" style="color:#67C23A;margin-right:5px;"></i>' +
          text +
          '</span>';
        document.body.appendChild(div);
        this.myTimeOut = window.setTimeout(function(){
          var tipText = document.getElementById('tipText');
          tipText.remove();
        },2000);
      },
      showModifyDia:function(){
        this.noRowClick = true;
        this.ep.showModifyDiaEvent(this.number);
      },
      deleteCustomer:function(){
        this.noRowClick = true;
        this.ep.deleteCustomerEvent(this.number);
      },
      checkbox_dataModifyEvent:function(){
        this.checkboxChange();
      },
      statusBtn_textClickEvent:function(){
        this.changeState();
      },
      QRCodetext_textClickEvent:function(){
        this.showQRCode();
      },
      modifyBtn_buttonClickEvent:function(){
        this.showModifyDia();
      },
      deleteBtn_buttonClickEvent:function(){
        this.deleteCustomer();
      },
    },
  };
</script>
<style lang="scss" scoped>
     .backMan_main_customerManRow_container {
        width:100%;
        height:100%;
    }
    .backMan_main_customerManRow_mask {
        display:flex;
        position:fixed;
        left:0;
        top:0;
        width:100vw;
        height:100vh;
        background-color:rgba(0,0,0,.4);
    }
    .backMan_main_customerManRow_dialog {
        position:absolute;
        left:0;
        top:0;
    }
    .backMan_main_customerManRow_overlay {
        position:absolute;
        left:0;
        top:0;
    }
    .backMan_main_customerManRow_row {
        display:flex;
    }
    .backMan_main_customerManRow_col {
        position:relative;
        display:flex;
        flex-direction:column;
        flex-wrap:nowrap;
    }
    .backMan_main_customerManRow_col_backMan_main_customerManRowWindo_size_medium {
        width:$backMan_main_customerManRow-backMan_main_customerManRowWindo-medium-width;
    }
    .backMan_main_customerManRow_col_backMan_main_customerManRowWindo {
        border-style:$backMan_main_customerManRow-backMan_main_customerManRowWindo-border-style;
        border-width:$backMan_main_customerManRow-backMan_main_customerManRowWindo-border-width;
        border-color:mix($backMan_main_customerManRow-backMan_main_customerManRowWindo-border-color,#fff,$backMan_main_customerManRow-backMan_main_customerManRowWindo-hover-border-color-opacity);
    }
    .backMan_main_customerManRow_col_r1c1_size_medium {
        height:$backMan_main_customerManRow-r1c1-medium-height;
        justify-content:$backMan_main_customerManRow-r1c1-medium-vertical-position;
        align-items:$backMan_main_customerManRow-r1c1-medium-horizontal-position;
        line-height:$backMan_main_customerManRow-r1c1-medium-line-height;
        width:8%;
        box-sizing: border-box;
    }
    .backMan_main_customerManRow_col_r1c2_size_medium {
        height:$backMan_main_customerManRow-r1c2-medium-height;
        justify-content:$backMan_main_customerManRow-r1c2-medium-vertical-position;
        align-items:$backMan_main_customerManRow-r1c2-medium-horizontal-position;
        line-height:$backMan_main_customerManRow-r1c2-medium-line-height;
        width:12%;
        box-sizing: border-box;
    }
    .backMan_main_customerManRow_col_r1c3_size_medium {
        height:$backMan_main_customerManRow-r1c3-medium-height;
        justify-content:$backMan_main_customerManRow-r1c3-medium-vertical-position;
        align-items:$backMan_main_customerManRow-r1c3-medium-horizontal-position;
        line-height:$backMan_main_customerManRow-r1c3-medium-line-height;
        width:6%;
        box-sizing: border-box;
    }
    .backMan_main_customerManRow_col_r1c4_size_medium {
        height:$backMan_main_customerManRow-r1c4-medium-height;
        justify-content:$backMan_main_customerManRow-r1c4-medium-vertical-position;
        align-items:$backMan_main_customerManRow-r1c4-medium-horizontal-position;
        line-height:$backMan_main_customerManRow-r1c4-medium-line-height;
        width:15%;
        box-sizing: border-box;
    }
    .backMan_main_customerManRow_col_r1c5_size_medium {
        height:$backMan_main_customerManRow-r1c5-medium-height;
        justify-content:$backMan_main_customerManRow-r1c5-medium-vertical-position;
        align-items:$backMan_main_customerManRow-r1c5-medium-horizontal-position;
        line-height:$backMan_main_customerManRow-r1c5-medium-line-height;
        width:10%;
        box-sizing: border-box;
    }
    .backMan_main_customerManRow_col_r1c6_size_medium {
        height:$backMan_main_customerManRow-r1c6-medium-height;
        justify-content:$backMan_main_customerManRow-r1c6-medium-vertical-position;
        line-height:$backMan_main_customerManRow-r1c6-medium-line-height;
        width:13%;
        box-sizing: border-box;
    }
    .backMan_main_customerManRow_col_r1c7_size_medium {
        height:$backMan_main_customerManRow-r1c7-medium-height;
        justify-content:$backMan_main_customerManRow-r1c7-medium-vertical-position;
        align-items:$backMan_main_customerManRow-r1c7-medium-horizontal-position;
        line-height:$backMan_main_customerManRow-r1c7-medium-line-height;
        width:8%;
        box-sizing: border-box;
    }
    .backMan_main_customerManRow_col_r1c8_size_medium {
        width:100px;
        width:10%;
        line-height: 60px;
        align-items: center;
        box-sizing: border-box;
    }
    .backMan_main_customerManRow_col_r1c9_size_medium {
        width:$backMan_main_customerManRow-r1c9-medium-width;
        height:$backMan_main_customerManRow-r1c9-medium-height;
        justify-content:$backMan_main_customerManRow-r1c9-medium-vertical-position;
        align-items:$backMan_main_customerManRow-r1c9-medium-horizontal-position;
        line-height:$backMan_main_customerManRow-r1c9-medium-line-height;
    }
    .backMan_main_customerManRow_col_r1c10_size_medium {
        height:$backMan_main_customerManRow-r1c10-medium-height;
        justify-content:$backMan_main_customerManRow-r1c10-medium-vertical-position;
        align-items:$backMan_main_customerManRow-r1c10-medium-horizontal-position;
        line-height:$backMan_main_customerManRow-r1c10-medium-line-height;
        width:5%;
    }
    .backMan_main_customerManRow_col_r1c11_size_medium {
        width:$backMan_main_customerManRow-r1c11-medium-width;
        justify-content:$backMan_main_customerManRow-r1c11-medium-vertical-position;
        align-items:$backMan_main_customerManRow-r1c11-medium-horizontal-position;
        line-height:$backMan_main_customerManRow-r1c11-medium-line-height;
        width:3%;
    }
    .backMan_main_customerManRow_col_r1c12_size_medium {
        height:$backMan_main_customerManRow-r1c12-medium-height;
        justify-content:$backMan_main_customerManRow-r1c12-medium-vertical-position;
        align-items:$backMan_main_customerManRow-r1c12-medium-horizontal-position;
        line-height:$backMan_main_customerManRow-r1c12-medium-line-height;
        width:5%;
    }
</style>