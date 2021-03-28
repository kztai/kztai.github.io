<template>
  <div class="orderTicketInfo">
    <div class="row row1">
      <div class="col info_row1_col_v1">
        <lm-link-text
                ref="ticketNameLabel"
                refId="ticketNameLabel"
                v-show="pvt_isShow.v1 === 'ticketNameLabel'"
                :paraVarPair="pvt_v1.ticketNameLabel.paraVarPair"
                :para="pvt_v1.ticketNameLabel.para"
                :attr="pvt_v1.ticketNameLabel.attr">
        </lm-link-text>
      </div>
      <div class="col info_row1_col_v2">
        <lm-link-text
                ref="ticketPriceLabel"
                refId="ticketPriceLabel"
                v-show="pvt_isShow.v2 === 'ticketPriceLabel'"
                :paraVarPair="pvt_v2.ticketPriceLabel.paraVarPair"
                :para="pvt_v2.ticketPriceLabel.para"
                :attr="pvt_v2.ticketPriceLabel.attr">
        </lm-link-text>
      </div>
      <div class="col info_row1_col_v3">
        <lm-link-text
                ref="ticketNumberLabel"
                refId="ticketNumberLabel"
                v-show="pvt_isShow.v3 === 'ticketNumberLabel'"
                :paraVarPair="pvt_v3.ticketNumberLabel.paraVarPair"
                :para="pvt_v3.ticketNumberLabel.para"
                :attr="pvt_v3.ticketNumberLabel.attr">
        </lm-link-text>
      </div>
      <div class="col info_row1_col_v4">
        <lm-link-text
                ref="ticketSumLabel"
                refId="ticketSumLabel"
                v-show="pvt_isShow.v4 === 'ticketSumLabel'"
                :paraVarPair="pvt_v4.ticketSumLabel.paraVarPair"
                :para="pvt_v4.ticketSumLabel.para"
                :attr="pvt_v4.ticketSumLabel.attr">
        </lm-link-text>
      </div>
    </div>
    <div class="row row2">
      <div class="col info_row2_col_v1">
        <lm-link-text
                ref="ticketName"
                refId="ticketName"
                v-show="pvt_isShow.v5 === 'ticketName'"
                :paraVarPair="pvt_v5.ticketName.paraVarPair"
                :para="pvt_v5.ticketName.para"
                :attr="pvt_v5.ticketName.attr">
        </lm-link-text>
      </div>
      <div class="col info_row2_col_v2">
        <lm-link-text
                ref="ticketPrice"
                refId="ticketPrice"
                v-show="pvt_isShow.v6 === 'ticketPrice'"
                :paraVarPair="pvt_v6.ticketPrice.paraVarPair"
                :para="pvt_v6.ticketPrice.para"
                :attr="pvt_v6.ticketPrice.attr">
        </lm-link-text>
      </div>
      <div class="col info_row2_col_v3">
        <lm-link-text
                ref="ticketNumber"
                refId="ticketNumber"
                v-show="pvt_isShow.v7 === 'ticketNumber'"
                :paraVarPair="pvt_v7.ticketNumber.paraVarPair"
                :para="pvt_v7.ticketNumber.para"
                :attr="pvt_v7.ticketNumber.attr">
        </lm-link-text>
      </div>
      <div class="col info_row2_col_v4">
        <lm-link-text
                ref="ticketSum"
                refId="ticketSum"
                v-show="pvt_isShow.v8 === 'ticketSum'"
                :paraVarPair="pvt_v8.ticketSum.paraVarPair"
                :para="pvt_v8.ticketSum.para"
                :attr="pvt_v8.ticketSum.attr">
        </lm-link-text>
      </div>
    </div>
    <div class="row row3">
      <div class="col info_row3_col_v1">
        <lm-link-text
                ref="ticketsLabel"
                refId="ticketsLabel"
                v-show="pvt_isShow.v9 === 'ticketsLabel'"
                :paraVarPair="pvt_v9.ticketsLabel.paraVarPair"
                :para="pvt_v9.ticketsLabel.para"
                :attr="pvt_v9.ticketsLabel.attr">
        </lm-link-text>
      </div>
      <div class="col info_row3_col_v2">
        <lm-link-text
                ref="ticketsNumber"
                refId="ticketsNumber"
                v-show="pvt_isShow.v10 === 'ticketsNumber'"
                :paraVarPair="pvt_v10.ticketsNumber.paraVarPair"
                :para="pvt_v10.ticketsNumber.para"
                :attr="pvt_v10.ticketsNumber.attr">
        </lm-link-text>
      </div>
      <div class="col info_row3_col_v3">
        <lm-link-text
                ref="ticketsUnit"
                refId="ticketsUnit"
                v-show="pvt_isShow.v11 === 'ticketsUnit'"
                :paraVarPair="pvt_v11.ticketsUnit.paraVarPair"
                :para="pvt_v11.ticketsUnit.para"
                :attr="pvt_v11.ticketsUnit.attr">
        </lm-link-text>
      </div>
      <div class="col info_row3_col_v4">
        <lm-link-text
                ref="pricesLabel"
                refId="pricesLabel"
                v-show="pvt_isShow.v12 === 'pricesLabel'"
                :paraVarPair="pvt_v12.pricesLabel.paraVarPair"
                :para="pvt_v12.pricesLabel.para"
                :attr="pvt_v12.pricesLabel.attr">
        </lm-link-text>
      </div>
      <div class="col info_row3_col_v5">
        <lm-link-text
                ref="pricesNumber"
                refId="pricesNumber"
                v-show="pvt_isShow.v13 === 'pricesNumber'"
                :paraVarPair="pvt_v13.pricesNumber.paraVarPair"
                :para="pvt_v13.pricesNumber.para"
                :attr="pvt_v13.pricesNumber.attr">
        </lm-link-text>
      </div>
    </div>
    <div class="row row4">
      <div class="col info_row4_col_v1">
        <lm-button
                ref="button1"
                refId="button1"
                v-show="pvt_isShow.v14 === 'button1'"
                :paraVarPair="pvt_v14.button1.paraVarPair"
                :para="pvt_v14.button1.para"
                :attr="pvt_v14.button1.attr">
        </lm-button>
      </div>
      <div class="col info_row4_col_v2">
        <lm-button
                ref="button2"
                refId="button2"
                v-show="pvt_isShow.v15 === 'button2'"
                :paraVarPair="pvt_v15.button2.paraVarPair"
                :para="pvt_v15.button2.para"
                :attr="pvt_v15.button2.attr">
        </lm-button>
      </div>
    </div>
  </div>
</template>
<script>
  import libSys from '@/components/baseComponent/libSys.js';
  import libUpload from '@/components/baseComponent/libUpload.js';

  export default {
    name:"orderTicketInfo",
    props:['refId','paraVarPair', 'para', 'attr', 'number'],
    inject:['sys'],
    components:{},
    data:function(){
      return {
        // 自动生成变量
        // 当前模块的para参数为 modulePara1 和 modulePara1
        // 需要双向修改参数的场景，用户可直接修改以下模块参数同名的变量
        // 子模块与所属容器的对应关系
        pvt_subModuleMap:{
          subModule:[
            'ticketNameLabel','ticketPriceLabel','ticketNumberLabel','ticketSumLabel',
            'ticketName','ticketPrice','ticketNumber','ticketSum',
            'ticketsLabel','ticketsNumber','ticketsUnit','pricesLabel','pricesNumber',
            'button1','button2'
          ],
          vessel:[
            'v1','v2','v3','v4',
            'v5','v6','v7','v8',
            'v9','v10','v11','v12','v13',
            'v14','v15'
          ]
        },
        // 各个容器当前显示的子模块
        pvt_isShow:{
          v1:null,v2:null,v3:null,v4:null,
          v5:null,v6:null,v7:null,v8:null,
          v9:null,v10:null,v11:null,v12:null,v13:null,
          v14:null,v15:null
        },
        // 当前模块输入类型的事务接口名称，工具完成前需要用户手动填写
        pvt_eventPortInput:[
          'payPageEvent',
          'orderDetailEvent',
          'viewETicketEvent'
        ],
        // 用户定义的模块变量
        orderId:null,
        ticketName:'',
        ticketPrice:'',
        ticketNumber:0,
        pricesNumber:0,
        button1Text:'',
        button2Text:''
      }
    },
    watch:{},
    computed:{
      // 标题
      pvt_v1:function(){
        return {
          ticketNameLabel:{
            paraVarPair:{},
            para:{
              textData:'票种名称'
            },
            attr:{
              label:'div',
              textAlign:'center',
              fontSize:'14px',
              fontWeight:false,
              indent:false,
              height:'30px',
            }
          }
        }
      },
      pvt_v2:function(){
        return {
          ticketPriceLabel:{
            paraVarPair:{},
            para:{
              textData:'单价'
            },
            attr:{
              label:'div',
              textAlign:'center',
              fontSize:'14px',
              fontWeight:false,
              indent:false,
              height:'30px',
            }
          }
        }
      },
      pvt_v3:function(){
        return {
          ticketNumberLabel:{
            paraVarPair:{},
            para:{
              textData:'数量'
            },
            attr:{
              label:'div',
              textAlign:'center',
              fontSize:'14px',
              fontWeight:false,
              indent:false,
              height:'30px',
            }
          }
        }
      },
      pvt_v4:function(){
        return {
          ticketSumLabel:{
            paraVarPair:{},
            para:{
              textData:'小计'
            },
            attr:{
              label:'div',
              textAlign:'center',
              fontSize:'14px',
              fontWeight:false,
              indent:false,
              height:'30px',
            }
          }
        }
      },
      // 表格行
      pvt_v5:function(){
        return {
          ticketName:{
            paraVarPair:{},
            para:{
              textData:this.ticketName
            },
            attr:{
              label:'div',
              textAlign:'center',
              fontSize:'14px',
              fontWeight:false,
              indent:false,
              height:'30px',
            }
          }
        }
      },
      pvt_v6:function(){
        return {
          ticketPrice:{
            paraVarPair:{},
            para:{
              textData:'￥' + this.ticketPrice
            },
            attr:{
              label:'div',
              textAlign:'center',
              fontSize:'14px',
              fontWeight:false,
              indent:false,
              height:'30px',
            }
          }
        }
      },
      pvt_v7:function(){
        return {
          ticketNumber:{
            paraVarPair:{},
            para:{
              textData:'x' + this.ticketNumber
            },
            attr:{
              label:'div',
              textAlign:'center',
              fontSize:'14px',
              fontWeight:false,
              indent:false,
              height:'30px',
            }
          }
        }
      },
      pvt_v8:function(){
        return {
          ticketSum:{
            paraVarPair:{},
            para:{
              textData:'￥' + this.pricesNumber
            },
            attr:{
              label:'div',
              textAlign:'center',
              fontSize:'14px',
              fontWeight:false,
              indent:false,
              height:'30px',
            }
          }
        }
      },
      // 总计
      pvt_v9:function(){
        return {
          ticketsLabel:{
            paraVarPair:{},
            para:{
              textData:'总计'
            },
            attr:{
              label:'div',
              textAlign:'center',
              fontSize:'14px',
              fontWeight:false,
              indent:false,
              height:'40px',
            }
          }
        }
      },
      pvt_v10:function(){
        return {
          ticketsNumber:{
            paraVarPair:{},
            para:{
              textData:this.ticketNumber
            },
            attr:{
              label:'div',
              textAlign:'center',
              fontSize:'16px',
              fontWeight:true,
              indent:false,
              height:'40px',
            }
          }
        }
      },
      pvt_v11:function(){
        return {
          ticketsUnit:{
            paraVarPair:{},
            para:{
              textData:'张'
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontSize:'14px',
              fontWeight:false,
              indent:false,
              height:'40px',
            }
          }
        }
      },
      pvt_v12:function(){
        return {
          pricesLabel:{
            paraVarPair:{},
            para:{
              textData:'支付金额:'
            },
            attr:{
              label:'div',
              textAlign:'center',
              fontSize:'14px',
              fontWeight:false,
              indent:false,
              height:'40px',
            }
          }
        }
      },
      pvt_v13:function(){
        return {
          pricesNumber:{
            paraVarPair:{},
            para:{
              textData:'￥' + this.pricesNumber
            },
            attr:{
              label:'div',
              textAlign:'center',
              fontSize:'16px',
              fontWeight:true,
              indent:false,
              height:'40px',
              color:'#FD9C72'
            }
          }
        }
      },
      //按钮
      pvt_v14:function(){
        return {
          button1:{
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
      pvt_v15:function(){
        return {
          button2:{
            paraVarPair:{},
            para:{
              name:[this.button2Text]
            },
            attr:{
              type:this.button1Text?'':'primary',
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
              $this.orderId = null;
              $this.ticketName = '';
              $this.ticketPrice = 0;
              $this.ticketNumber = 0;
              $this.pricesNumber = 0;
              $this.button1Text = '';
              $this.button2Text = '';
              if($this.para){
                if($this.para.orderId){
                  $this.orderId = $this.para.orderId;
                }
                if($this.para.ticketName){
                  $this.ticketName = $this.para.ticketName;
                }
                if($this.para.ticketPrice){
                  $this.ticketPrice = $this.para.ticketPrice;
                }
                if($this.para.ticketNumber){
                  $this.ticketNumber = $this.para.ticketNumber;
                }
                if($this.para.totalPrice){
                  $this.pricesNumber = $this.para.totalPrice;
                }
                //状态决定按钮数量和名称
                if($this.para.orderStatus){
                  let status = $this.para.orderStatus;
                  if(status === '待付款'){
                    $this.button1Text = '立即付款';
                    $this.button2Text = '取消订单';
                  }else if(status === '待参与'){
                    $this.button1Text = '取消报名';
                    $this.button2Text = '下载电子票';
                  }else if(status === '待审核'){
                    $this.button1Text = '';
                    $this.button2Text = '查看详情';
                  }else if(status === '已完成'){
                    $this.button1Text = '查看详情';
                    $this.button2Text = '下载电子票';
                  }else if(status === '已取消'){
                  $this.button1Text = '';
                  $this.button2Text = '查看详情';
                  }else if(status === '已关闭'){
                    $this.button1Text = '';
                    $this.button2Text = '查看详情';
                  }else if(status === '已退款'){
                    $this.button1Text = '';
                    $this.button2Text = '查看详情';
                  }else if(status === '退款中'){
                    $this.button1Text = '';
                    $this.button2Text = '查看详情';
                  }else if(status === '待退款'){
                    $this.button1Text = '';
                    $this.button2Text = '查看详情';
                  }else if(status === '已拒绝'){
                    $this.button1Text = '';
                    $this.button2Text = '查看详情';
                  }
                }
              }
              para.nStep = 'showModules';
              ++dbFlag;
              break;
            case 'showModules':
              //先隐藏按钮在显示
              let shadowButtonArr = ['button1'];
              $this.showSubModule(shadowButtonArr,false,function(){
                //显示子组件
                let refId = [
                  'ticketNameLabel','ticketPriceLabel','ticketNumberLabel','ticketSumLabel',
                  'ticketName','ticketPrice','ticketNumber','ticketSum',
                  'ticketsLabel','ticketsNumber','ticketsUnit','pricesLabel','pricesNumber',
                  'button2'
                ];
                if($this.button1Text){
                  refId.push('button1');
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
      buttonClick1(){
        if(this.button1Text === '立即付款'){
          this.ep.payPageEvent(this.orderId);
        }else if(this.button1Text === '取消报名'){
          this.ep.orderDetailEvent(this.orderId);
        }else if(this.button1Text === '查看详情'){
          this.ep.orderDetailEvent(this.orderId);
        }
      },
      buttonClick2(){
        if(this.button2Text === '取消订单'){
          this.ep.orderDetailEvent(this.orderId);
        }else if(this.button2Text === '下载电子票'){
          this.ep.viewETicketEvent(this.orderId);
        }else if(this.button2Text === '查看详情'){
          this.ep.orderDetailEvent(this.orderId);
        }
      },
      // 私有方法
      startSubModules(successCallBack,errorCallBack){
        let $this = this;
        let para = {
          successCallBack: successCallBack,
          errorCallBack: errorCallBack,
          nStep: 0
        }
        let dbFlag;
        let ref = {
          sm1:'ticketNameLabel',
          sm2:'ticketPriceLabel',
          sm3:'ticketNumberLabel',
          sm4:'ticketSumLabel',
          sm5:'ticketName',
          sm6:'ticketPrice',
          sm7:'ticketNumber',
          sm8:'ticketSum',
          sm9:'ticketsLabel',
          sm10:'ticketsNumber',
          sm11:'ticketsUnit',
          sm12:'pricesLabel',
          sm13:'pricesNumber',
          sm14:'button1',
          sm15:'button2'
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
                para.nStep = 'startModule_ticNameLal';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_ticNameLal':
              $this.sm[ref.sm1].startModule(function(){
                para.nStep = 'startModule_ticPriceLal';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_ticPriceLal':
              $this.sm[ref.sm2].startModule(function(){
                para.nStep = 'startModule_ticNumberLal';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_ticNumberLal':
              $this.sm[ref.sm3].startModule(function(){
                para.nStep = 'startModule_ticSumLal';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_ticSumLal':
              $this.sm[ref.sm4].startModule(function(){
                para.nStep = 'startModule_ticName';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_ticName':
              $this.sm[ref.sm5].startModule(function(){
                para.nStep = 'startModule_ticPrice';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_ticPrice':
              $this.sm[ref.sm6].startModule(function(){
                para.nStep = 'startModule_ticNumber';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_ticNumber':
              $this.sm[ref.sm7].startModule(function(){
                para.nStep = 'startModule_ticSum';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_ticSum':
              $this.sm[ref.sm8].startModule(function(){
                para.nStep = 'startModule_ticsLal';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_ticsLal':
              $this.sm[ref.sm9].startModule(function(){
                para.nStep = 'startModule_ticsNum';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_ticsNum':
              $this.sm[ref.sm10].startModule(function(){
                para.nStep = 'startModule_ticsUnit';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_ticsUnit':
              $this.sm[ref.sm11].startModule(function(){
                para.nStep = 'startModule_prisLal';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_prisLal':
              $this.sm[ref.sm12].startModule(function(){
                para.nStep = 'startModule_prisNum';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_prisNum':
              $this.sm[ref.sm13].startModule(function(){
                para.nStep = 'startModule_button1';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_button1':
              $this.sm[ref.sm14].startModule(function(){
                para.nStep = 'startModule_button2';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_button2':
              $this.sm[ref.sm15].startModule(function(){
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
      button1_buttonClickEvent(){
        this.buttonClick1();
      },
      button2_buttonClickEvent(){
        this.buttonClick2();
      },
    }
  }
</script>
<style lang="scss" scoped>
  .orderTicketInfo{
    width:100%;
    padding:10px 0 0 0;
  }
  .row{
  }
  .col{
    display:inline-block;
    vertical-align:middle;
  }
  .info_row1_col_v1{
    width:20%;
    height:30px;
    background:#cad5e4;
  }
  .info_row1_col_v2{
    width:35%;
    height:30px;
    background:#cad5e4;
  }
  .info_row1_col_v3{
    width:25%;
    height:30px;
    background:#cad5e4;
  }
  .info_row1_col_v4{
    width:20%;
    height:30px;
    background:#cad5e4;
  }
  .info_row2_col_v1{
    width:20%;
    height:30px;
    border-width:0 0 1px 0;
    border-style:solid;
    border-color:#E4E7ED;
  }
  .info_row2_col_v2{
    width:35%;
    height:30px;
    border-width:0 0 1px 0;
    border-style:solid;
    border-color:#E4E7ED;
  }
  .info_row2_col_v3{
    width:25%;
    height:30px;
    border-width:0 0 1px 0;
    border-style:solid;
    border-color:#E4E7ED;
  }
  .info_row2_col_v4{
    width:20%;
    height:30px;
    border-width:0 0 1px 0;
    border-style:solid;
    border-color:#E4E7ED;
  }
  .info_row3_col_v1{
    width:calc(100% - 230px);
    height:40px;
    padding:0 0 0 calc(100% - 270px);
  }
  .info_row3_col_v2{
    width:20px;
    height:40px;
  }
  .info_row3_col_v3{
    width:80px;
    height:40px;
  }
  .info_row3_col_v4{
    width:80px;
    height:40px;
  }
  .info_row3_col_v5{
    width:50px;
    height:40px;
  }
  .info_row4_col_v1{
    width:calc(100% - 100px);
    height:40px;
    padding:5px 0 0 calc(100% - 200px);
  }
  .info_row4_col_v2{
    width:100px;
    height:40px;
    padding:5px 0 0 0;
  }
</style>
