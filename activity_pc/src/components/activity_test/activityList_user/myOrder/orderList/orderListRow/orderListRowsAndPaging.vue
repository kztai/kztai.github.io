<template>
  <div class="orderListRowsAndPaging">
    <div class="row row1">
      <div class="col orderListRowsAndPaging_row1_col1">
        <order-list-row ref="listRow"
                        refId="listRow"
                        v-show="pvt_isShow.v1 === 'listRow'"
                        v-for="(item, index) in pvt_v1.listRow.forData" :number="index"
                        :paraVarPair="pvt_v1.listRow.paraVarPair"
                        :para="item.para"
                        :attr="item.attr">
        </order-list-row>
      </div>
    </div>
    <div class="row row2">
      <div class="col orderListRowsAndPaging_row2_col1">
        <lm-pagination ref="pageNum"
                       refId="pageNum"
                       v-show="pvt_isShow.v2 === 'pageNum'"
                       :paraVarPair="pvt_v2.pageNum.paraVarPair"
                       :para="pvt_v2.pageNum.para"
                       :attr="pvt_v2.pageNum.attr">
        </lm-pagination>
      </div>
    </div>
  </div>
</template>
<script>
  import libSys from '@/components/baseComponent/libSys.js';
  import libUpload from '@/components/baseComponent/libUpload.js';

  //引入子组件
  import OrderListRow from './orderListRow.vue';

  export default {
    name:'orderListRowsAndPaging',
    props:['refId','paraVarPair','para','attr','number'],
    inject:['sys'],
    components:{
      OrderListRow
    },
    data:function(){
      return {
        pvt_subModuleMap:{
          vessel:[
            "v1","v2"
          ],
          subModule:[
            "listRow",
            "pageNum"
          ]
        },
        pvt_isShow:{
          v1:null,
          v2:null
        },
        pvt_eventPortInput:[
          'detailPageEvent',
          'orderDetailEvent',
          'viewETicketEvent',
          'currentChangeEvent'
        ],
        // 用户定义的模块变量
        currentPageOrderIdArr:[],
        currentPageSponsorArr:[],
        currentPageOrderNumberArr:[],
        currentPageOrderStatusArr:[],
        currentPagePosterIdArr:[],
        currentPageActivityNameArr:[],
        currentPageActivityTimeArr:[],
        currentPageActivityAddressArr:[],
        currentPageTicketNameArr:[],
        currentPageTicketPriceArr:[],
        currentPageTicketNumberArr:[],
        currentPageTotalPriceArr:[],
        currentPageNum:1,
        pageSize:5, //每页数量
        pageTotal:5 //总数量
      }
    },
    computed:{
      pvt_v1:function(){
        let $this = this;
        let loopModule = {
          listRow:{
            para:{
              orderId:this.currentPageOrderIdArr,
              sponsor:this.currentPageSponsorArr,
              orderNumber:this.currentPageOrderNumberArr,
              orderStatus:this.currentPageOrderStatusArr,
              posterId:this.currentPagePosterIdArr,
              activityName:this.currentPageActivityNameArr,
              activityTime:this.currentPageActivityTimeArr,
              activityAddress:this.currentPageActivityAddressArr,
              ticketName:this.currentPageTicketNameArr,
              ticketPrice:this.currentPageTicketPriceArr,
              ticketNumber:this.currentPageTicketNumberArr,
              totalPrice:this.currentPageTotalPriceArr
            },
            attr:{}
          },
        };
        let forData = this.pvt_createForData(loopModule);
        return {
          listRow:{
            paraVarPair:{},
            forData:forData.listRow
          }
        };
      },
      pvt_v2:function(){
        return {
          pageNum:{
            paraVarPair:{},
            para:{
              currentPage:this.currentPageNum
            },
            attr:{
              pageSize:this.pageSize,
              total:this.pageTotal,
              background:true
            }
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
              $this.currentPageOrderIdArr = [];
              $this.currentPageSponsorArr = [];
              $this.currentPageOrderNumberArr = [];
              $this.currentPageOrderStatusArr = [];
              $this.currentPagePosterIdArr = [];
              $this.currentPageActivityNameArr = [];
              $this.currentPageActivityTimeArr = [];
              $this.currentPageActivityAddressArr = [];
              $this.currentPageTicketNameArr = [];
              $this.currentPageTicketPriceArr = [];
              $this.currentPageTicketNumberArr = [];
              $this.currentPageTotalPriceArr = [];
              $this.currentPageNum = 0;
              $this.pageSize = 5;
              $this.pageTotal = 5;
              if($this.para.orderIdArr){
                $this.currentPageOrderIdArr = $this.para.orderIdArr;
              }
              if($this.para.sponsorArr){
                $this.currentPageSponsorArr = $this.para.sponsorArr;
              }
              if($this.para.orderNumberArr){
                $this.currentPageOrderNumberArr = $this.para.orderNumberArr;
              }
              if($this.para.orderStatusArr){
                $this.currentPageOrderStatusArr = $this.para.orderStatusArr;
              }
              if($this.para.posterIdArr){
                $this.currentPagePosterIdArr = $this.para.posterIdArr;
              }
              if($this.para.activityNameArr){
                $this.currentPageActivityNameArr = $this.para.activityNameArr;
              }
              if($this.para.activityTimeArr){
                $this.currentPageActivityTimeArr = $this.para.activityTimeArr;
              }
              if($this.para.activityAddressArr){
                $this.currentPageActivityAddressArr = $this.para.activityAddressArr;
              }
              if($this.para.ticketNameArr){
                $this.currentPageTicketNameArr = $this.para.ticketNameArr;
              }
              if($this.para.ticketPriceArr){
                $this.currentPageTicketPriceArr = $this.para.ticketPriceArr;
              }
              if($this.para.ticketNumberArr){
                $this.currentPageTicketNumberArr = $this.para.ticketNumberArr;
              }
              if($this.para.totalPriceArr){
                $this.currentPageTotalPriceArr = $this.para.totalPriceArr;
              }
              if($this.para.currentPageNum){
                $this.currentPageNum = $this.para.currentPageNum;
              }
              if($this.para.pageSize){
                $this.pageSize = $this.para.pageSize;
              }
              if($this.para.pageTotal){
                $this.pageTotal = $this.para.pageTotal;
              }
              para.nStep = 'showModules';
              ++dbFlag;
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                "listRow",
                "pageNum"
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
          sm1:"listRow",
          sm2:"pageNum"
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
                para.nStep = 'startModule_list';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_list':
              //循环组件
              let arr = [];
              for(let i = 0;i < $this.currentPageOrderIdArr.length;i++){
                arr.push([para.successCallBack,para.errorCallBack]);
              }
              $this.callLoopModuleMethod(ref.sm1,'startModule',arr,function(){
                para.nStep = 'startModule_pageNum';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_pageNum':
              $this.sm[ref.sm2].startModule(function(){
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
      setPara:function(successCallBack,errorCallBack){
        var para = {};
        para.successCallBack = successCallBack;
        para.errorCallBack = errorCallBack;
        para.nStep = 0;
        return para;
      },
      // 子组件发出事件
      listRow_detailPageEvent(activityId,orderId){
        this.ep.detailPageEvent(activityId,orderId);
      },
      listRow_orderDetailEvent(orderId){
        this.ep.orderDetailEvent(orderId);
      },
      listRow_viewETicketEvent(orderId){
        this.ep.viewETicketEvent(orderId);
      },
      pageNum_currentChangeEvent(value){
        this.ep.currentChangeEvent(value);
      },
    }
  }
</script>
<style lang="scss" scoped>
  .orderListRowsAndPaging{
    width:100%;
    height:100%;
    display:grid;
    grid-template-rows:calc(100% - 70px) 70px;
  }
  .row{}
  .col{
    display:inline-block;
    box-sizing:border-box;
    vertical-align:middle;
  }
  .orderListRowsAndPaging_row1_col1{
    width:100%;
    height:100%;
    border-width:0 0 1px 0;
    border-style:solid;
    border-color:#e9ecf2;
  }
  .orderListRowsAndPaging_row2_col1{
    width:100%;
    height:100%;
    padding:10px 0 0 0;
    text-align:center;
  }
</style>
