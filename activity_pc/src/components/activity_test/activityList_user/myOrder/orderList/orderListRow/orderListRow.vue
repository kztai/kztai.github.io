<template>
  <div class="orderListRow">
    <div class="row row1">
      <div class="col listRow_row1_col_v1">
        <div class="row row1_1">
          <div class="col listRow_row1_1_col_v1">
            <lm-link-text
                    ref="sponsorIcon"
                    refId="sponsorIcon"
                    v-show="pvt_isShow.v1 === 'sponsorIcon'"
                    :paraVarPair="pvt_v1.sponsorIcon.paraVarPair"
                    :para="pvt_v1.sponsorIcon.para"
                    :attr="pvt_v1.sponsorIcon.attr">
            </lm-link-text>
          </div>
          <div class="col listRow_row1_1_col_v2">
            <lm-link-text
                    ref="sponsorName"
                    refId="sponsorName"
                    v-show="pvt_isShow.v2 === 'sponsorName'"
                    :paraVarPair="pvt_v2.sponsorName.paraVarPair"
                    :para="pvt_v2.sponsorName.para"
                    :attr="pvt_v2.sponsorName.attr">
            </lm-link-text>
          </div>
          <div class="col listRow_row1_1_col_v3">
            <lm-link-text
                    ref="orderNumLabel"
                    refId="orderNumLabel"
                    v-show="pvt_isShow.v3 === 'orderNumLabel'"
                    :paraVarPair="pvt_v3.orderNumLabel.paraVarPair"
                    :para="pvt_v3.orderNumLabel.para"
                    :attr="pvt_v3.orderNumLabel.attr">
            </lm-link-text>
          </div>
          <div class="col listRow_row1_1_col_v4">
            <lm-link-text
                    ref="orderNumber"
                    refId="orderNumber"
                    v-show="pvt_isShow.v4 === 'orderNumber'"
                    :paraVarPair="pvt_v4.orderNumber.paraVarPair"
                    :para="pvt_v4.orderNumber.para"
                    :attr="pvt_v4.orderNumber.attr">
            </lm-link-text>
          </div>
          <div class="col listRow_row1_1_col_v5">
            <lm-link-text
                    ref="orderStatus"
                    refId="orderStatus"
                    v-show="pvt_isShow.v5 === 'orderStatus'"
                    :paraVarPair="pvt_v5.orderStatus.paraVarPair"
                    :para="pvt_v5.orderStatus.para"
                    :attr="pvt_v5.orderStatus.attr">
            </lm-link-text>
          </div>
        </div>
        <div class="row row1_2">
          <div class="col listRow_row1_2_col_v1">
            <lm-image
                    ref="posterImage"
                    refId="posterImage"
                    v-show="pvt_isShow.v6 === 'posterImage'"
                    :paraVarPair="pvt_v6.posterImage.paraVarPair"
                    :para="pvt_v6.posterImage.para"
                    :attr="pvt_v6.posterImage.attr">
            </lm-image>
          </div>
          <div class="col listRow_row1_2_col_v2">
            <div class="row row1_2_1">
              <div class="col listRow_row1_2_1_col_v1">
                <lm-link-text
                        ref="activityName"
                        refId="activityName"
                        v-show="pvt_isShow.v7 === 'activityName'"
                        :paraVarPair="pvt_v7.activityName.paraVarPair"
                        :para="pvt_v7.activityName.para"
                        :attr="pvt_v7.activityName.attr">
                </lm-link-text>
              </div>
              <div class="col listRow_row1_2_1_col_v2">
                <lm-button
                        ref="unfoldButton"
                        refId="unfoldButton"
                        v-show="pvt_isShow.v8 === 'unfoldButton'"
                        :paraVarPair="pvt_v8.unfoldButton.paraVarPair"
                        :para="pvt_v8.unfoldButton.para"
                        :attr="pvt_v8.unfoldButton.attr">
                </lm-button>
              </div>
            </div>
            <div class="row row1_2_2">
              <div class="col listRow_row1_2_2_col_v1">
                <lm-link-text
                        ref="activityTimeLabel"
                        refId="activityTimeLabel"
                        v-show="pvt_isShow.v9 === 'activityTimeLabel'"
                        :paraVarPair="pvt_v9.activityTimeLabel.paraVarPair"
                        :para="pvt_v9.activityTimeLabel.para"
                        :attr="pvt_v9.activityTimeLabel.attr">
                </lm-link-text>
              </div>
              <div class="col listRow_row1_2_2_col_v2">
                <lm-link-text
                        ref="activityTime"
                        refId="activityTime"
                        v-show="pvt_isShow.v10 === 'activityTime'"
                        :paraVarPair="pvt_v10.activityTime.paraVarPair"
                        :para="pvt_v10.activityTime.para"
                        :attr="pvt_v10.activityTime.attr">
                </lm-link-text>
              </div>
            </div>
            <div class="row row1_2_3">
              <div class="col listRow_row1_2_3_col_v1">
                <lm-link-text
                        ref="activityAddLabel"
                        refId="activityAddLabel"
                        v-show="pvt_isShow.v11 === 'activityAddLabel'"
                        :paraVarPair="pvt_v11.activityAddLabel.paraVarPair"
                        :para="pvt_v11.activityAddLabel.para"
                        :attr="pvt_v11.activityAddLabel.attr">
                </lm-link-text>
              </div>
              <div class="col listRow_row1_2_3_col_v2">
                <lm-link-text
                        ref="activityAdd"
                        refId="activityAdd"
                        v-show="pvt_isShow.v12 === 'activityAdd'"
                        :paraVarPair="pvt_v12.activityAdd.paraVarPair"
                        :para="pvt_v12.activityAdd.para"
                        :attr="pvt_v12.activityAdd.attr">
                </lm-link-text>
              </div>
            </div>
          </div>
        </div>
        <div class="row row1_3">
          <div class="col listRow_row1_3_col_v1">
            <order-ticket-info
                    ref="ticketInfo"
                    refId="ticketInfo"
                    v-show="pvt_isShow.v13 === 'ticketInfo'"
                    :paraVarPair="pvt_v13.ticketInfo.paraVarPair"
                    :para="pvt_v13.ticketInfo.para"
                    :attr="pvt_v13.ticketInfo.attr">
            </order-ticket-info>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import libSys from '@/components/baseComponent/libSys.js';
  import libUpload from '@/components/baseComponent/libUpload.js';

  //引入子组件
  import OrderTicketInfo from './orderTicketInfo.vue';

  export default {
    name:"orderListRow",
    props:['refId','paraVarPair', 'para', 'attr', 'number'],
    inject:['sys'],
    components:{
      OrderTicketInfo
    },
    data:function(){
      return {
        // 自动生成变量
        // 当前模块的para参数为 modulePara1 和 modulePara1
        // 需要双向修改参数的场景，用户可直接修改以下模块参数同名的变量
        // 子模块与所属容器的对应关系
        pvt_subModuleMap:{
          subModule:[
            'sponsorIcon','sponsorName','orderNumLabel','orderNumber','orderStatus',
            'posterImage',
            'activityName','unfoldButton',
            'activityTimeLabel','activityTime',
            'activityAddLabel','activityAdd',
            'ticketInfo'
          ],
          vessel:[
            'v1','v2','v3','v4','v5',
            'v6',
            'v7','v8',
            'v9','v10',
            'v11','v12',
            'v13'
          ]
        },
        // 各个容器当前显示的子模块
        pvt_isShow:{
          v1:null,v2:null,v3:null,v4:null,v5:null,
          v6:null,
          v7:null,v8:null,
          v9:null,v10:null,
          v11:null,v12:null,
          v13:null
        },
        // 当前模块输入类型的事务接口名称，工具完成前需要用户手动填写
        pvt_eventPortInput:[
          'detailPageEvent',
          'orderDetailEvent',
          'viewETicketEvent'
        ],
        // 用户定义的模块变量
        orderId:null,
        activityId:null,
        sponsor:'',
        orderNumber:'',
        orderStatus:'',
        activityPoster:[{
          $table:'groupActivity',
          $arrField:['poster'],
          $arrValue:[null]
        }],
        activityName:'',
        buttonText:'收起订单',
        buttonIcon:'el-icon-arrow-up',
        activityTime:'',
        activityAddress:'',
        ticketName:'',
        ticketPrice:'',
        ticketNumber:'',
        totalPrice:''
      }
    },
    watch:{},
    computed:{
      // 主办方
      pvt_v1:function(){
        return {
          sponsorIcon:{
            paraVarPair:{},
            para:{
              textData:''
            },
            attr:{}
          }
        }
      },
      pvt_v2:function(){
        return {
          sponsorName:{
            paraVarPair:{},
            para:{
              textData:this.sponsor
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontWeight:true,
              fontSize:'14px',
              indent:false,
              height:'30px',
            }
          }
        }
      },
      // 订单编号
      pvt_v3:function(){
        return {
          orderNumLabel:{
            paraVarPair:{},
            para:{
              textData:'订单编号:'
            },
            attr:{
              label:'span',
              textAlign:'left',
              fontWeight:false,
              fontSize:'14px',
              indent:false,
              height:'30px'
            }
          }
        }
      },
      pvt_v4:function(){
        return {
          orderNumber:{
            paraVarPair:{},
            para:{
              textData:this.orderNumber
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontSize:'14px',
              fontWeight:false,
              indent:false,
              height:'30px'
            }
          }
        }
      },
      // 状态
      pvt_v5:function(){
        return {
          orderStatus:{
            paraVarPair:{},
            para:{
              textData:this.orderStatus
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontSize:'14px',
              fontWeight:false,
              indent:false,
              height:'30px',
              color:'#FD9C72'
            }
          }
        }
      },
      //海报
      pvt_v6:function(){
        return {
          posterImage:{
            paraVarPair:{},
            para:{
              image:this.activityPoster
            },
            attr:{
              fit:'contain'
            }
          }
        }
      },
      //活动信息
      pvt_v7:function(){
        return {
          activityName:{
            paraVarPair:{},
            para:{
              textData:this.activityName
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontSize:'14px',
              fontWeight:true,
              indent:false,
              height:'',
              isClick:true
            }
          }
        }
      },
      // 收缩按钮
      pvt_v8:function(){
        return {
          unfoldButton:{
            paraVarPair:{},
            para:{
              name:[this.buttonText,this.buttonIcon]
            },
            attr:{
              type:'text'
            }
          }
        }
      },
      //时间
      pvt_v9:function(){
        return {
          activityTimeLabel:{
            paraVarPair:{},
            para:{
              textData:'时间:'
            },
            attr:{
              label:'span',
              textAlign:'left',
              fontSize:'14px',
              fontWeight:false,
              indent:false,
              height:'',
            }
          }
        }
      },
      pvt_v10:function(){
        return {
          activityTime:{
            paraVarPair:{},
            para:{
              textData:this.activityTime
            },
            attr:{
              label:'span',
              textAlign:'left',
              fontSize:'14px',
              fontWeight:false,
              indent:false,
              height:'',
            }
          }
        }
      },
      //地址
      pvt_v11:function(){
        return {
          activityAddLabel:{
            paraVarPair:{},
            para:{
              textData:'地址:'
            },
            attr:{
              label:'span',
              textAlign:'left',
              fontSize:'14px',
              fontWeight:false,
              indent:false,
              height:'',
            }
          }
        }
      },
      pvt_v12:function(){
        return {
          activityAdd:{
            paraVarPair:{},
            para:{
              textData:this.activityAddress
            },
            attr:{
              label:'span',
              textAlign:'left',
              fontSize:'14px',
              fontWeight:false,
              indent:false,
              height:'',
            }
          }
        }
      },
      //票价信息
      pvt_v13:function(){
        return {
          ticketInfo:{
            paraVarPair:{},
            para:{
              orderId:this.orderId,
              ticketName:this.ticketName,
              ticketPrice:this.ticketPrice,
              ticketNumber:this.ticketNumber,
              totalPrice:this.totalPrice,
              orderStatus:this.orderStatus
            },
            attr:{}
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
              $this.activityId = null;
              $this.sponsor = '';
              $this.orderNumber = '';
              $this.orderStatus = '';
              $this.activityPoster = [{
                $table:'groupActivity',
                $arrField:['poster'],
                $arrValue:[null]
              }];
              $this.activityName = '';
              $this.buttonText = '收起订单';
              $this.buttonIcon = 'el-icon-arrow-up';
              $this.activityTime = '';
              $this.activityAddress = '';
              $this.ticketName = '';
              $this.ticketPrice = '';
              $this.ticketNumber = '';
              $this.totalPrice = '';
              if($this.para){
                if($this.para.orderId){
                  $this.orderId = $this.para.orderId;
                }
                if($this.para.sponsor){
                  $this.sponsor = $this.para.sponsor;
                }
                if($this.para.orderNumber){
                  $this.orderNumber = $this.para.orderNumber;
                }
                if($this.para.orderStatus){
                  $this.orderStatus = $this.para.orderStatus;
                }
                if($this.para.posterId){
                  $this.activityId = $this.para.posterId;
                  $this.activityPoster = [{
                    $table:'groupActivity',
                    $arrField:['poster'],
                    $arrValue:[$this.para.posterId]
                  }];
                }
                if($this.para.activityName){
                  $this.activityName = $this.para.activityName;
                }
                if($this.para.activityTime){
                  $this.activityTime = $this.para.activityTime;
                }
                if($this.para.activityAddress){
                  $this.activityAddress = $this.para.activityAddress;
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
                  $this.totalPrice = $this.para.totalPrice;
                }
              }
              para.nStep = 'showModules';
              ++dbFlag;
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                'sponsorIcon','sponsorName','orderNumLabel','orderNumber','orderStatus',
                'posterImage',
                'activityName','unfoldButton',
                'activityTimeLabel','activityTime',
                'activityAddLabel','activityAdd',
                'ticketInfo'
              ];
              $this.showSubModule(refId,true,function(){
                para.nStep = 'startSubModules';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
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
      activityDetailPage(orderId){
        if(orderId){
          this.ep.detailPageEvent(this.activityId,this.orderId);
        }else{
          this.ep.detailPageEvent(this.activityId,null);
        }
      },
      showDetailOrder(){
        let $this = this;
        if($this.buttonText === '收起订单'){
          $this.buttonText = '展开订单';
          $this.buttonIcon = 'el-icon-arrow-down';
        }else{
          $this.buttonText = '收起订单';
          $this.buttonIcon = 'el-icon-arrow-up';
        }
        $this.showSubModule('ticketInfo',$this.buttonText === '收起订单',function(){
          $this.sm['unfoldButton'].startModule(function(){},function(error){console.log(error)});
        },function(error){console.log(error)});
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
          sm1:'sponsorIcon',sm2:'sponsorName',sm3:'orderNumLabel',sm4:'orderNumber',sm5:'orderStatus',
          sm6:'posterImage',
          sm7:'activityName',sm8:'unfoldButton',
          sm9:'activityTimeLabel',sm10:'activityTime',
          sm11:'activityAddLabel',sm12:'activityAdd',
          sm13:'ticketInfo'
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
                para.nStep = 'startModule_icon';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_icon':
              $this.sm[ref.sm1].startModule(function(){
                para.nStep = 'startModule_sponsor';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_sponsor':
              $this.sm[ref.sm2].startModule(function(){
                para.nStep = 'startModule_numberLabel';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_numberLabel':
              $this.sm[ref.sm3].startModule(function(){
                para.nStep = 'startModule_number';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_number':
              $this.sm[ref.sm4].startModule(function(){
                para.nStep = 'startModule_status';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_status':
              $this.sm[ref.sm5].startModule(function(){
                para.nStep = 'startModule_poster';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_poster':
              $this.sm[ref.sm6].startModule(function(){
                para.nStep = 'startModule_activityName';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_activityName':
              $this.sm[ref.sm7].startModule(function(){
                para.nStep = 'startModule_unButton';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_unButton':
              $this.sm[ref.sm8].startModule(function(){
                para.nStep = 'startModule_timeLabel';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_timeLabel':
              $this.sm[ref.sm9].startModule(function(){
                para.nStep = 'startModule_time';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_time':
              $this.sm[ref.sm10].startModule(function(){
                para.nStep = 'startModule_addLabel';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_addLabel':
              $this.sm[ref.sm11].startModule(function(){
                para.nStep = 'startModule_address';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_address':
              $this.sm[ref.sm12].startModule(function(){
                para.nStep = 'startModule_info';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_info':
              $this.sm[ref.sm13].startModule(function(){
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
      posterImage_clickEvent(){
        this.activityDetailPage();
      },
      activityName_textClickEvent(){
        this.activityDetailPage();
      },
      unfoldButton_buttonClickEvent(){
        this.showDetailOrder();
      },
      ticketInfo_payPageEvent(orderId){
        this.activityDetailPage(orderId);
      },
      ticketInfo_orderDetailEvent(orderId){
        this.ep.orderDetailEvent(orderId);
      },
      ticketInfo_viewETicketEvent(orderId){
        this.ep.viewETicketEvent(orderId);
      }
    }
  }
</script>
<style lang="scss" scoped>
  .orderListRow{
    width:100%;
    border-width:1px 0 0 0;
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
    width:100%;
    padding:10px 10px;
  }
  .listRow_row1_1_col_v1{
    width:20px;
    height:20px;
    margin:5px;
    border-radius:50%;
    background:green;
  }
  .listRow_row1_1_col_v2{
    width:150px;
    height:30px;
  }
  .listRow_row1_1_col_v3{
    width:80px;
    height:30px;
  }
  .listRow_row1_1_col_v4{
    width:calc(100% - 310px);
    height:30px;
  }
  .listRow_row1_1_col_v5{
    width:50px;
    height:30px;
  }
  .listRow_row1_2_col_v1{
    width:200px;
    height:100px;
    padding:10px 0 0 0;
    box-sizing:border-box;
    overflow:hidden;
    border-width:1px 0 0 0;
    border-style:solid;
    border-color: #e9ecf2;
  }
  .listRow_row1_2_col_v2{
    width:calc(100% - 200px);
    height:100px;
    padding:10px 0 0 0;
    box-sizing:border-box;
    border-width:1px 0 0 0;
    border-style:solid;
    border-color: #e9ecf2;
  }
  .listRow_row1_2_1_col_v1{
    width:calc(100% - 150px);
    height:30px;
    padding:0 0 0 5px;
    box-sizing:border-box;
  }
  .listRow_row1_2_1_col_v2{
    width:150px;
    height:30px;
    box-sizing:border-box;
  }
  .listRow_row1_2_2_col_v1{
    width:45px;
    height:30px;
    padding:0 0 0 5px;
    box-sizing:border-box;
  }
  .listRow_row1_2_2_col_v2{
    width:calc(100% - 45px);
    height:30px;
    box-sizing:border-box;
  }
  .listRow_row1_2_3_col_v1{
    width:45px;
    height:30px;
    padding:0 0 0 5px;
    box-sizing:border-box;
  }
  .listRow_row1_2_3_col_v2{
    width:calc(100% - 45px);
    height:30px;
    box-sizing:border-box;
  }
  .listRow_row1_3_col_v1{
    width:100%;
  }
</style>
