<template>
  <div class="myOrder">
    <div class="row row1">
      <div class="col myOrder_row1_col1">
        <order-list ref="orderList"
                    refId="orderList"
                    v-show="pvt_isShow.v1 === 'orderList'"
                    :paraVarPair="pvt_v1.orderList.paraVarPair"
                    :para="pvt_v1.orderList.para"
                    :attr="pvt_v1.orderList.attr">
        </order-list>
        <order-detail ref="orderDetail"
                      refId="orderDetail"
                      v-show="pvt_isShow.v1 === 'orderDetail'"
                      :paraVarPair="pvt_v1.orderDetail.paraVarPair"
                      :para="pvt_v1.orderDetail.para"
                      :attr="pvt_v1.orderDetail.attr">
        </order-detail>
      </div>
    </div>
  </div>
</template>
<script>
  import libSys from '@/components/baseComponent/libSys.js';
  import libUpload from '@/components/baseComponent/libUpload.js';

  //引入子组件
  import OrderList from './orderList/orderList.vue';
  import OrderDetail from './orderDetail/orderDetail.vue';

  export default {
    name:'MyOrder',
    props:['refId','paraVarPair','para','attr','number'],
    inject:['sys'],
    components:{
      OrderList,
      OrderDetail
    },
    data:function(){
      return {
        pvt_subModuleMap:{
          vessel:[
            "v1","v1"
          ],
          subModule:[
            "orderList",
            "orderDetail"
          ]
        },
        pvt_isShow:{
          v1:null
        },
        pvt_eventPortInput:[
          'detailPageEvent',
          'orderCancelEvent',
          'orderRefundEvent',
          'completeActivityEvent'
        ],
        // 用户定义的模块变量
        tabsIndex:0,
        orderId:null,
        userId:null
      }
    },
    computed:{
      pvt_v1:function(){
        return {
          orderList:{
            paraVarPair:{},
            para:{
              userId:this.userId
            },
            attr:{}
          },
          orderDetail:{
            paraVarPair:{},
            para:{},
            attr:{}
          }
        }
      }
    },
    watch:{},
    mounted:function(){
      this.pvt_initSysData();
    },
    created:function(){
      Object.assign(this,libSys,libUpload);
    },
    methods:{
      startModule:function(successCallBack,errorCallBack){
        let $this = this;
        let para;
        let dbFlag;

        if(successCallBack !== null){
          errorCallBack = $this.setPara(successCallBack,errorCallBack);
          successCallBack = null;
        }
        para = errorCallBack;

        while(1){
          dbFlag = 0;
          switch(para.nStep){
            case 0:
              $this.tabsIndex = 0;
              $this.orderId = null;
              $this.userId = null;
              if($this.para.userId){
                $this.userId = $this.para.userId;
              }
              para.nStep = 'showModules';
              ++dbFlag;
              break;
            case 'showModules':
              //显示子组件
              let refId = ["orderList"];
              $this.showSubModule(refId,true,function(){
                para.nStep = 'startSubModules';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startSubModules':
              //调用子组件startModule方法
              $this.sm['orderList'].startModule(function(){
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
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
      // 公开方法
      labelChange(orderId){
        let $this = this;
        $this.orderId = orderId?orderId:null;
        $this.tabsIndex = orderId?1:0;
        let refId = $this.tabsIndex === 0?'orderList':'orderDetail';
        $this.forceUpdateData(function(){
          $this.showSubModule(refId,true,function(){
            if(orderId){
              $this.sm[refId].startModule($this.orderId,function(){},function(error){console.log(error)});
            }else{
              $this.sm[refId].listRefresh(function(){},function(error){console.log(error)});
            }
          },function(error){console.log(error)});
        });
      },
      // 私有方法
      setPara:function(successCallBack,errorCallBack){
        var para = {};
        para.successCallBack = successCallBack;
        para.errorCallBack = errorCallBack;
        para.nStep = 0;
        return para;
      },
      // 子组件发出事件
      orderList_detailPageEvent(activityId,orderId){
        this.ep.detailPageEvent(activityId,orderId);
      },
      orderList_orderDetailEvent(orderId){
        this.labelChange(orderId);
      },
      orderDetail_orderListEvent(){
        this.labelChange();
      },
      orderDetail_orderCancelEvent(billId){
        this.ep.orderCancelEvent(billId);
      },
      orderDetail_orderRefundEvent(billId,commandType){
        this.ep.orderRefundEvent(billId,commandType);
      },
      orderDetail_completeActivityEvent(billId){
        this.ep.completeActivityEvent(billId);
      }
    }
  }
</script>
<style lang="scss" scoped>
  .myOrder{
    width:100%;
    height:100%;
    background:#fff;
    display:grid;
    grid-template-columns:100%;
    grid-template-rows:100%;
  }
  .row{}
  .col{
    display:inline-block;
    box-sizing:border-box;
    vertical-align:middle;
  }
  .myOrder_row1_col1{
    width:100%;
    height:100%;
  }
</style>
