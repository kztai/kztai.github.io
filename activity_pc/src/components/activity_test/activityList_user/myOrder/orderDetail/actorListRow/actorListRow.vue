<template>
  <div class="actorListRow">
    <div class="row row1">
      <div class="col listRow_row1_col_v1">
        <lm-link-text
                ref="billIndex"
                refId="billIndex"
                v-show="pvt_isShow.v1 === 'billIndex'"
                :paraVarPair="pvt_v1.billIndex.paraVarPair"
                :para="pvt_v1.billIndex.para"
                :attr="pvt_v1.billIndex.attr">
        </lm-link-text>
      </div>
      <div class="col listRow_row1_col_v2">
        <div class="row row1_2_1">
          <div class="col listRow_row1_2_1_col_v1">
            <lm-qrcode
                    ref="billETicket"
                    refId="billETicket"
                    v-show="pvt_isShow.v2 === 'billETicket'"
                    :paraVarPair="pvt_v2.billETicket.paraVarPair"
                    :para="pvt_v2.billETicket.para"
                    :attr="pvt_v2.billETicket.attr">
            </lm-qrcode>
          </div>
        </div>
        <div class="row row1_2_2">
          <div class="col listRow_row1_2_2_col_v1">
            <lm-link-text
                    ref="billCode"
                    refId="billCode"
                    v-show="pvt_isShow.vCode === 'billCode'"
                    :paraVarPair="pvt_vCode.billCode.paraVarPair"
                    :para="pvt_vCode.billCode.para"
                    :attr="pvt_vCode.billCode.attr">
            </lm-link-text>
          </div>
        </div>
      </div>
      <div class="col listRow_row1_col_v3">
        <div class="row row1_3_1">
          <div class="col listRow_row1_3_1_col_v1">
            <lm-link-text
                    ref="billName"
                    refId="billName"
                    v-show="pvt_isShow.v3 === 'billName'"
                    :paraVarPair="pvt_v3.billName.paraVarPair"
                    :para="pvt_v3.billName.para"
                    :attr="pvt_v3.billName.attr">
            </lm-link-text>
          </div>
        </div>
        <div class="row row1_3_2">
          <div class="col listRow_row1_3_2_col_v1">
            <lm-link-text
                    ref="billMobile"
                    refId="billMobile"
                    v-show="pvt_isShow.v4 === 'billMobile'"
                    :paraVarPair="pvt_v4.billMobile.paraVarPair"
                    :para="pvt_v4.billMobile.para"
                    :attr="pvt_v4.billMobile.attr">
            </lm-link-text>
          </div>
        </div>
      </div>
      <div class="col listRow_row1_col_v4">
        <lm-link-text
                ref="billTicketName"
                refId="billTicketName"
                v-show="pvt_isShow.v5 === 'billTicketName'"
                :paraVarPair="pvt_v5.billTicketName.paraVarPair"
                :para="pvt_v5.billTicketName.para"
                :attr="pvt_v5.billTicketName.attr">
        </lm-link-text>
      </div>
      <div class="col listRow_row1_col_v5">
        <lm-link-text
                ref="billTicketPrice"
                refId="billTicketPrice"
                v-show="pvt_isShow.v6 === 'billTicketPrice'"
                :paraVarPair="pvt_v6.billTicketPrice.paraVarPair"
                :para="pvt_v6.billTicketPrice.para"
                :attr="pvt_v6.billTicketPrice.attr">
        </lm-link-text>
      </div>
      <div class="col listRow_row1_col_v6">
        <lm-link-text
                ref="billStatus"
                refId="billStatus"
                v-show="pvt_isShow.v7 === 'billStatus'"
                :paraVarPair="pvt_v7.billStatus.paraVarPair"
                :para="pvt_v7.billStatus.para"
                :attr="pvt_v7.billStatus.attr">
        </lm-link-text>
      </div>
      <div class="col listRow_row1_col_v7">
        <div class="row row1_7_1">
          <div class="col listRow_row1_7_1_col_v1">
            <lm-button
                    ref="billButton1"
                    refId="billButton1"
                    v-show="pvt_isShow.v8 === 'billButton1'"
                    :paraVarPair="pvt_v8.billButton1.paraVarPair"
                    :para="pvt_v8.billButton1.para"
                    :attr="pvt_v8.billButton1.attr">
            </lm-button>
          </div>
        </div>
        <div class="row row1_7_2">
          <div class="col listRow_row1_7_2_col_v1">
            <lm-button
                    ref="billButton2"
                    refId="billButton2"
                    v-show="pvt_isShow.v9 === 'billButton2'"
                    :paraVarPair="pvt_v9.billButton2.paraVarPair"
                    :para="pvt_v9.billButton2.para"
                    :attr="pvt_v9.billButton2.attr">
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
    name:"actorListRow",
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
            'billIndex',
            'billETicket','billCode',
            'billName','billMobile',
            'billTicketName','billTicketPrice','billStatus',
            'billButton1','billButton2'
          ],
          vessel:[
            'v1',
            'v2','vCode',
            'v3','v4',
            'v5','v6','v7',
            'v8','v9'
          ]
        },
        // 各个容器当前显示的子模块
        pvt_isShow:{
          v1:null,
          v2:null,vCode:null,
          v3:null,v4:null,
          v5:null,v6:null,v7:null,
          v8:null,v9:null
        },
        // 当前模块输入类型的事务接口名称，工具完成前需要用户手动填写
        pvt_eventPortInput:[
          'orderCancelEvent',
          'orderRefundEvent',
          'completeActivityEvent',
          'cancelRefundEvent'
        ],
        // 用户定义的模块变量
        billId:null,
        indexNum:null,
        ETicketImage:null,
        billCode:'',
        actorName:'',
        actorMobile:'',
        ticketName:'',
        ticketPrice:'',
        billStatus:'',
        button1Text:'',
        button2Text:''
      }
    },
    watch:{},
    computed:{
      pvt_v1:function(){
        return {
          billIndex:{
            paraVarPair:{},
            para:{
              textData:this.indexNum
            },
            attr:{
              label:'div',
              textAlign:'center',
              fontWeight:false,
              fontSize:'',
              indent:false,
              height:'40px',
            }
          }
        }
      },
      pvt_v2:function(){
        return {
          billETicket:{
            paraVarPair:{},
            para:{
              qrUrl:this.ETicketImage,
            },
            attr:{
              size:'110'
            }
          }
        }
      },
      pvt_vCode:function(){
        return {
          billCode:{
            paraVarPair:{},
            para:{
              textData:this.billCode
            },
            attr:{
              label:'div',
              textAlign:'center',
              fontWeight:false,
              fontSize:'',
              indent:false,
              height:'30px'
            }
          }
        }
      },
      pvt_v3:function(){
        return {
          billName:{
            paraVarPair:{},
            para:{
              textData:this.actorName
            },
            attr:{
              label:'div',
              textAlign:'center',
              fontWeight:false,
              fontSize:'',
              indent:false,
              height:'40px'
            }
          }
        }
      },
      pvt_v4:function(){
        return {
          billMobile:{
            paraVarPair:{},
            para:{
              textData:'(' + this.actorMobile + ')'
            },
            attr:{
              label:'div',
              textAlign:'center',
              fontWeight:false,
              fontSize:'',
              indent:false,
              height:'40px'
            }
          }
        }
      },
      pvt_v5:function(){
        return {
          billTicketName:{
            paraVarPair:{},
            para:{
              textData:this.ticketName
            },
            attr:{
              label:'div',
              textAlign:'center',
              fontSize:'',
              fontWeight:false,
              indent:false,
              height:'40px',
            }
          }
        }
      },
      pvt_v6:function(){
        return {
          billTicketPrice:{
            paraVarPair:{},
            para:{
              textData:this.ticketPrice
            },
            attr:{
              label:'div',
              textAlign:'center',
              fontSize:'',
              fontWeight:false,
              indent:false,
              height:'40px',
            }
          }
        }
      },
      pvt_v7:function(){
        return {
          billStatus:{
            paraVarPair:{},
            para:{
              textData:this.billStatus
            },
            attr:{
              label:'div',
              textAlign:'center',
              fontSize:'',
              fontWeight:false,
              indent:false,
              height:'',
            }
          }
        }
      },
      pvt_v8:function(){
        return {
          billButton1:{
            paraVarPair:{},
            para:{
              name:[this.button1Text]
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
          billButton2:{
            paraVarPair:{},
            para:{
              name:[this.button2Text]
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
              $this.billId = null;
              $this.indexNum = null;
              $this.ETicketImage = null;
              $this.billCode = '';
              $this.actorName = '';
              $this.actorMobile = '';
              $this.ticketName = '';
              $this.ticketPrice = '';
              $this.billStatus = '';
              $this.button1Text = '';
              $this.button2Text = '';
              if($this.para){
                if($this.para.billId){
                  $this.billId = $this.para.billId;
                }
                if($this.para.index){
                  $this.indexNum = $this.para.index;
                }
                if($this.para.ETicketCode){
                  $this.billCode = $this.para.ETicketCode;
                  $this.ETicketImage = $this.para.ETicketCode;
                }
                if($this.para.name){
                  $this.actorName = $this.para.name;
                }
                if($this.para.mobile){
                  $this.actorMobile = $this.para.mobile;
                }
                if($this.para.ticketName){
                  $this.ticketName = $this.para.ticketName;
                }
                if($this.para.ticketPrice || $this.para.ticketPrice === 0){
                  $this.ticketPrice = $this.para.ticketPrice;
                }
                if($this.para.billStatus){
                  $this.billStatus = $this.para.billStatus;
                }
              }
              if($this.billStatus === '已关闭'){
                $this.button1Text = '';
                $this.button2Text = '';
              }else if($this.billStatus === '待参与'){
                $this.button1Text = '完成活动';
                $this.button2Text = $this.ticketPrice?'申请退款':'取消报名';
              }else if($this.billStatus === '已退款'){
                $this.button1Text = '';
                $this.button2Text = '';
              }else if($this.billStatus === '退款中'){
                $this.button1Text = '取消退款';
                $this.button2Text = '';
              }else if($this.billStatus === '待退款'){
                $this.button1Text = '取消退款';
                $this.button2Text = '';
              }else if($this.billStatus === '待审核'){
                $this.button1Text = '取消报名';
                $this.button2Text = '';
              }else if($this.billStatus === '已拒绝'){
                $this.button1Text = '';
                $this.button2Text = '';
              }else if($this.billStatus === '已取消'){
                $this.button1Text = '';
                $this.button2Text = '';
              }else if($this.billStatus === '已完成'){
                $this.button1Text = '';
                $this.button2Text = '';
              }else if($this.billStatus === '待付款'){
                $this.button1Text = '取消报名';
                $this.button2Text = '';
              }
              para.nStep = 'showModules';
              ++dbFlag;
              break;
            case 'showModules':
              //先隐藏两个按钮在显示
              let shadowButtonArr = ['billButton1','billButton2'];
              $this.showSubModule(shadowButtonArr,false,function(){
                //显示子组件
                let refId = [
                  'billIndex',
                  'billName','billMobile',
                  'billTicketName','billTicketPrice','billStatus'
                ];
                if($this.ETicketImage){
                  refId.push('billETicket');
                  refId.push('billCode');
                }
                if($this.button1Text){
                  refId.push('billButton1');
                }
                if($this.button2Text){
                  refId.push('billButton2');
                }
                $this.showSubModule(refId,true,function(){
                  para.nStep = 'startSubModules';
                  if(++dbFlag === 2){
                    $this.startModule(successCallBack,errorCallBack);
                  }
                },para.errorCallBack);
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
      buttonClick1(){
        let $this = this;
        if($this.button1Text === '完成活动'){
          $this.ep.completeActivityEvent($this.billId);
        }else if($this.button1Text === '取消退款'){
          $this.ep.cancelRefundEvent($this.billId,true);
        }else if($this.button1Text === '取消报名'){
          $this.ep.orderCancelEvent($this.billId);
        }
      },
      buttonClick2(){
        let $this = this;
        if($this.button2Text === '申请退款'){
          $this.ep.orderRefundEvent($this.billId);
        }else if($this.button2Text === '取消报名'){
          $this.ep.orderCancelEvent($this.billId);
        }
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
          sm1:'billIndex',
          sm2:'billETicket',sm10:'billCode',
          sm3:'billName',sm4:'billMobile',
          sm5:'billTicketName',sm6:'billTicketPrice',sm7:'billStatus',
          sm8:'billButton1',sm9:'billButton2'
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
                if($this.ETicketImage){
                  para.nStep = 'startModule_ticket';
                }else{
                  para.nStep = 'startModule_name';
                }
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_ticket':
              $this.sm[ref.sm2].startModule(function(){
                para.nStep = 'startModule_name';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_name':
              $this.sm[ref.sm3].startModule(function(){
                para.nStep = 'startModule_mobile';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_mobile':
              $this.sm[ref.sm4].startModule(function(){
                para.nStep = 'startModule_ticketName';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_ticketName':
              $this.sm[ref.sm5].startModule(function(){
                para.nStep = 'startModule_ticketPrice';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_ticketPrice':
              $this.sm[ref.sm6].startModule(function(){
                para.nStep = 'startModule_status';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_status':
              $this.sm[ref.sm7].startModule(function(){
                para.nStep = 'startModule_button1';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_button1':
              $this.sm[ref.sm8].startModule(function(){
                para.nStep = 'startModule_button2';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_button2':
              $this.sm[ref.sm9].startModule(function(){
                para.nStep = 'startModule_billCode';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_billCode':
              $this.sm[ref.sm10].startModule(function(){
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
      billButton1_buttonClickEvent(){
        this.buttonClick1();
      },
      billButton2_buttonClickEvent(){
        this.buttonClick2();
      },
    }
  }
</script>
<style lang="scss" scoped>
  .actorListRow{
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
  .listRow_row1_col_v1{
    width:10%;
  }
  .listRow_row1_col_v2{
    width:15%;
  }
  .listRow_row1_2_1_col_v1{
    width:100%;
  }
  .listRow_row1_2_2_col_v1{
    width:100%;
  }
  .listRow_row1_col_v3{
    width:15%;
  }
  .listRow_row1_3_1_col_v1{
    width:100%;
    height:40px;
  }
  .listRow_row1_3_2_col_v1{
    width:100%;
    height:40px;
  }
  .listRow_row1_col_v4{
    width:15%;
  }
  .listRow_row1_col_v5{
    width:15%;
  }
  .listRow_row1_col_v6{
    width:15%;
  }
  .listRow_row1_col_v7{
    width:15%;
  }
  .listRow_row1_7_1_col_v1{
    width:100%;
    height:40px;
    padding:5px 0 0 0;
  }
  .listRow_row1_7_2_col_v1{
    width:100%;
    height:40px;
    padding:5px 0 0 0;
  }
</style>
