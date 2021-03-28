<template>
  <div class="orderList">
    <div class="row row1">
      <div class="col orderList_row1_col1">
        <div class="row row1_1">
          <div class="col orderList_row1_1_col1">
            <lm-link-text ref="listHeader"
                          refId="listHeader"
                          v-show="pvt_isShow.v1 === 'listHeader'"
                          :paraVarPair="pvt_v1.listHeader.paraVarPair"
                          :para="pvt_v1.listHeader.para"
                          :attr="pvt_v1.listHeader.attr">
            </lm-link-text>
          </div>
        </div>
        <div class="row row1_2">
          <div class="col orderList_row1_2_col1">
            <div class="row row1_2_1">
              <div class="col orderList_row1_2_1_col1">
                <lm-tabs ref="listTabs"
                         refId="listTabs"
                         v-show="pvt_isShow.v2 === 'listTabs'"
                         :paraVarPair="pvt_v2.listTabs.paraVarPair"
                         :para="pvt_v2.listTabs.para"
                         :attr="pvt_v2.listTabs.attr">
                </lm-tabs>
              </div>
              <div class="col orderList_row1_2_1_col2">
                <lm-input-text ref="searchInput"
                               refId="searchInput"
                               v-show="pvt_isShow.v3 === 'searchInput'"
                               :paraVarPair="pvt_v3.searchInput.paraVarPair"
                               :para="pvt_v3.searchInput.para"
                               :attr="pvt_v3.searchInput.attr">
                </lm-input-text>
              </div>
              <div class="col orderList_row1_2_1_col3">
                <lm-button ref="searchButton"
                           refId="searchButton"
                           v-show="pvt_isShow.vButton === 'searchButton'"
                           :paraVarPair="pvt_vButton.searchButton.paraVarPair"
                           :para="pvt_vButton.searchButton.para"
                           :attr="pvt_vButton.searchButton.attr">
                </lm-button>
              </div>
            </div>
            <div class="row row1_2_2">
              <div class="col orderList_row1_2_2_col1">
                <lm-dropdown ref="activityTypeDrop"
                             refId="activityTypeDrop"
                             v-show="pvt_isShow.v4 === 'activityTypeDrop'"
                             :paraVarPair="pvt_v4.activityTypeDrop.paraVarPair"
                             :para="pvt_v4.activityTypeDrop.para"
                             :attr="pvt_v4.activityTypeDrop.attr">
                </lm-dropdown>
              </div>
            </div>
            <div class="row row1_2_3">
              <div class="col orderList_row1_2_3_col1">
                <order-list-rows-and-paging ref="listRows"
                                            refId="listRows"
                                            v-show="pvt_isShow.v5 === 'listRows'"
                                            :paraVarPair="pvt_v5.listRows.paraVarPair"
                                            :para="pvt_v5.listRows.para"
                                            :attr="pvt_v5.listRows.attr">
                </order-list-rows-and-paging>
                <lm-link-text ref="noDataText"
                              refId="noDataText"
                              v-show="pvt_isShow.v5 === 'noDataText'"
                              :paraVarPair="pvt_v5.noDataText.paraVarPair"
                              :para="pvt_v5.noDataText.para"
                              :attr="pvt_v5.noDataText.attr">
                </lm-link-text>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row row2">
      <div class="col orderList_row2_col1">
        <order-e-ticket-dialog ref="ETicketDia"
                      refId="ETicketDia"
                      v-show="pvt_isShow.v6 === 'ETicketDia'"
                      :paraVarPair="pvt_v6.ETicketDia.paraVarPair"
                      :para="pvt_v6.ETicketDia.para"
                      :attr="pvt_v6.ETicketDia.attr">
        </order-e-ticket-dialog>
      </div>
    </div>
  </div>
</template>
<script>
  import libSys from '@/components/baseComponent/libSys.js';
  import libUpload from '@/components/baseComponent/libUpload.js';

  //引入子组件
  import OrderListRowsAndPaging from './orderListRow/orderListRowsAndPaging.vue';
  import OrderETicketDialog from '../myOrderDialog/ticketDetail.vue';

  export default {
    name:'orderList',
    props:['refId','paraVarPair','para','attr','number'],
    inject:['sys'],
    components:{
      OrderListRowsAndPaging,
      OrderETicketDialog
    },
    data:function(){
      return {
        pvt_subModuleMap:{
          vessel:[
            "v1",
            "v2","v3","vButton",
            "v4",
            "v5","v5",
            "v6"
          ],
          subModule:[
            "listHeader",
            "listTabs","searchInput","searchButton",
            "activityTypeDrop",
            "listRows","noDataText",
            "ETicketDia"
          ]
        },
        pvt_isShow:{
          v1:null,
          v2:null,
          v3:null,
          vButton:null,
          v4:null,
          v5:null,
          v6:null
        },
        pvt_eventPortInput:[
          'detailPageEvent',
          'orderDetailEvent'
        ],
        // 用户定义的模块变量
        userId:null,
        ordersNum:0,
        upcomingNum:0,
        tabsIndex:0,
        keyWord:'',
        currentTypeName:'全部',
        eligibleAllOrderIdArr:[],
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
        pageTotal:5, //总数量
        //当前选中的订单
        activityId:null,
        ticketId:null,
        billIdArr:null
      }
    },
    computed:{
      pvt_v1:function(){
        return {
          listHeader:{
            paraVarPair:{},
            para:{
              textData:'我的订单'
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontSize:'18px',
              fontWeight:true,
              indent:false,
              height:'40px'
            }
          }
        }
      },
      pvt_v2:function(){
        return {
          listTabs:{
            paraVarPair:{},
            para:{
              tabData:[
                {val:'全部' + this.ordersNum,icon:'',disabled:false},
                {val:'待参与' + this.upcomingNum,icon:'',disabled:false}
              ]
            },
            attr:{
              checked:this.tabsIndex,
              type:'card',
              tabPosition:'bottom',
              stretch:false,
              autofocus:false
            }
          }
        }
      },
      pvt_v3:function(){
        return {
          searchInput:{
            paraVarPair:{},
            para:{
              text:this.keyWord
            },
            attr:{
              size:'small'
            }
          }
        }
      },
      pvt_vButton:function(){
        return {
          searchButton:{
            paraVarPair:{},
            para:{
              name:['','el-icon-search'],
            },
            attr:{
              type:'primary',
              size:'small'
            }
          }
        }
      },
      pvt_v4:function(){
        return {
          activityTypeDrop:{
            paraVarPair:{},
            para:{
              dropDown:[
                {id:1,label:'全部',icon:'',disable:false},
                {id:2,label:'待付款',icon:'',disable:false},
                {id:3,label:'待参与',icon:'',disable:false},
                {id:4,label:'待审核',icon:'',disable:false},
                {id:5,label:'已完成',icon:'',disable:false},
                {id:6,label:'已取消',icon:'',disable:false},
                {id:7,label:'已关闭',icon:'',disable:false}
              ]
            },
            attr:{
              menuName:this.currentTypeName,
              trigger:'click'
            }
          }
        };
      },
      pvt_v5:function(){
        return {
          listRows:{
            paraVarPair:{},
            para:{
              orderIdArr:this.currentPageOrderIdArr,
              sponsorArr:this.currentPageSponsorArr,
              orderNumberArr:this.currentPageOrderNumberArr,
              orderStatusArr:this.currentPageOrderStatusArr,
              posterIdArr:this.currentPagePosterIdArr,
              activityNameArr:this.currentPageActivityNameArr,
              activityTimeArr:this.currentPageActivityTimeArr,
              activityAddressArr:this.currentPageActivityAddressArr,
              ticketNameArr:this.currentPageTicketNameArr,
              ticketPriceArr:this.currentPageTicketPriceArr,
              ticketNumberArr:this.currentPageTicketNumberArr,
              totalPriceArr:this.currentPageTotalPriceArr,
              currentPageNum:this.currentPageNum,
              pageSize:this.pageSize,
              pageTotal:this.pageTotal
            },
            attr:{}
          },
          noDataText:{
            paraVarPair:{},
            para:{
              textData:'无订单'
            },
            attr:{
              label:'div',
              fontSize:'16px',
              textAlign:'center',
              height:'76px'
            }
          }
        };
      },
      pvt_v6:function(){
        return {
          ETicketDia:{
            paraVarPair:{},
            para:{
              curActivityId:this.activityId,
              curTicketId:this.ticketId,
              curBillIdArr:this.billIdArr
            },
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
        let tableName;
        let parentRecord;
        let condition;
        let dbData;
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
              $this.userId = null;
              $this.ordersNum = 0;
              $this.upcomingNum = 0;
              $this.tabsIndex = 0;
              $this.keyWord = '';
              $this.currentTypeName = '全部';
              $this.eligibleAllOrderIdArr = [];
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
              $this.currentPageNum = 1;
              $this.pageSize = 5;
              $this.pageTotal = 0;
              $this.activityId = null;
              $this.ticketId = null;
              $this.billIdArr = null;
              para.num = 0;
              if($this.para.userId){
                $this.userId = $this.para.userId;
              }
              para.nStep = 'downloadGroupActivityOrder';
              ++dbFlag;
              break;
            case 'downloadGroupActivityOrder':
              //下载活动数据
              let portName = mac.mac.tb.groupActivityOrder;
              let data = {};
              // 授权状态暂定为粒子状态
              data[portName] = '';
              data[mac.mac.tb.groupActivityBill] = '';
              let expression = mac.mac.fd.groupActivityOrder.applicant + '=' + $this.userId;
              let start = para.num * 100;
              let total = 100;
              let sort = ['id,asc'];
              let destGeneSite = '';
              $this.sys.api.conditiondataInput(portName,data,expression,start,total,sort,destGeneSite,function(result){
                //后期返回值有活动总数
                if(result && result.length === 100){
                  para.num++;
                  para.nStep = 'downloadGroupActivityOrder';
                }else{
                  para.nStep = 'searchActivity';
                }
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'searchActivity':
              //查找数据订单总数
              tableName = mac.mac.tb.groupActivityOrder;
              parentRecord = null;
              condition = null;
              dbData = {};
              dbData[mac.mac.fd.id] = [];
              $this.sys.api.recordQuery(tableName,parentRecord,condition,dbData,function(){
                $this.ordersNum = dbData[mac.mac.fd.id].length;
                if($this.ordersNum === 0){
                  para.nStep = 'listRefresh';
                }else{
                  para.nStep = 'searchGroupActivityBill';
                }
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'searchGroupActivityBill':
              //查找订单中待参与数量
              tableName = mac.mac.tb.groupActivityBill;
              parentRecord = null;
              condition = mac.mac.fd.groupActivityBill.status + '=' + mac.mac.enum.groupActivityBill.status.checkTicket;
              dbData = {};
              dbData[mac.mac.fd.id] = [];
              $this.sys.api.recordQuery(tableName,parentRecord,condition,dbData,function(){
                para.upcomingBillIdArr = JSON.parse(JSON.stringify(dbData[mac.mac.fd.id]));
                if(para.upcomingBillIdArr.length === 0){
                  para.nStep = 'listRefresh';
                  if(++dbFlag === 2){
                    $this.startModule(successCallBack,errorCallBack);
                  }
                }else{
                  $this.sys.api.getParentRecord(tableName,para.upcomingBillIdArr,function(result){
                    if(result && result.length > 0){
                      let upcomingOrderIdArr = [];
                      for(let i = 0;i < result.length;i++){
                        if(!upcomingOrderIdArr.includes(result[i])){
                          upcomingOrderIdArr.push(result[i]);
                        }
                      }
                      $this.upcomingNum = upcomingOrderIdArr.length;
                    }
                    para.nStep = 'listRefresh';
                    if(++dbFlag === 2){
                      $this.startModule(successCallBack,errorCallBack);
                    }
                  },para.errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'listRefresh':
              $this.listRefresh(function(){
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
      // 私有方法
      listRefresh:function(successCallBack,errorCallBack){
        let $this = this;
        let tableName;
        let dbData;
        let parentRecord;
        let condition;
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
              $this.eligibleAllOrderIdArr = [];
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
              para.nStep = 'searchCondition';
              ++dbFlag;
              break;
            case 'searchCondition':
              //确定查找条件
              if($this.tabsIndex === 0){
                if($this.currentTypeName === '全部'){
                  para.table = mac.mac.tb.groupActivityOrder;
                  para.type = null;
                }else if($this.currentTypeName === '待付款'){
                  para.table = mac.mac.tb.groupActivityOrder;
                  para.type = mac.mac.enum.groupActivityOrder.status.pay;
                }else if($this.currentTypeName === '待参与'){
                  para.table = mac.mac.tb.groupActivityBill;
                  para.type = mac.mac.enum.groupActivityBill.status.checkTicket;
                }else if($this.currentTypeName === '待审核'){
                  para.table = mac.mac.tb.groupActivityBill;
                  para.type = mac.mac.enum.groupActivityBill.status.check;
                }else if($this.currentTypeName === '已完成'){
                  para.table = mac.mac.tb.groupActivityBill;
                  para.type = mac.mac.enum.groupActivityBill.status.finish;
                }else if($this.currentTypeName === '已取消'){
                  para.table = mac.mac.tb.groupActivityBill;
                  para.type = mac.mac.enum.groupActivityBill.status.cancel;
                }else if($this.currentTypeName === '已关闭'){
                  para.table = mac.mac.tb.groupActivityOrder;
                  para.type = mac.mac.enum.groupActivityOrder.status.close;
                }
              }else{
                para.table = mac.mac.tb.groupActivityBill;
                para.type = mac.mac.enum.groupActivityBill.status.checkTicket;
              }
              if(para.table === mac.mac.tb.groupActivityOrder){
                para.nStep = 'searchGroupActivityOrder';
              }else{
                para.nStep = 'searchGroupActivityBill';
              }
              ++dbFlag;
              break;
            case 'searchGroupActivityOrder':
              //查找订单表
              tableName = mac.mac.tb.groupActivityOrder;
              parentRecord = null;
              if(para.type || para.type === 0){
                condition = mac.mac.fd.groupActivityOrder.status + '=' + para.type;
              }else{
                condition = null;
              }
              dbData = {};
              dbData[mac.mac.fd.id] = [];
              dbData[mac.mac.fd.groupActivityOrder.groupActivityID] = [];
              $this.sys.api.recordQuery(tableName,parentRecord,condition,dbData,function(){
                if(dbData[mac.mac.fd.id].length === 0){
                  para.nStep = 'showModules';
                }else{
                  para.orderIdArr = JSON.parse(JSON.stringify(dbData[mac.mac.fd.id]));
                  para.activityIdArr = JSON.parse(JSON.stringify(dbData[mac.mac.fd.groupActivityOrder.groupActivityID]));
                  para.nStep = 'searchGroupActivity';
                }
                if(++dbFlag === 2){
                  $this.listRefresh(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'searchGroupActivityBill':
              //查找订单票据表
              tableName = mac.mac.tb.groupActivityBill;
              parentRecord = null;
              condition = mac.mac.fd.groupActivityBill.status + '=' + para.type;
              dbData = {};
              dbData[mac.mac.fd.id] = [];
              $this.sys.api.recordQuery(tableName,parentRecord,condition,dbData,function(){
                if(dbData[mac.mac.fd.id].length > 0){
                  $this.sys.api.getParentRecord(tableName,dbData[mac.mac.fd.id],function(result){
                    para.orderIdArr = [];
                    for(let i = 0;i < result.length;i++){
                      if(!para.orderIdArr.includes(result[i])){
                        para.orderIdArr.push(result[i]);
                      }
                    }
                    tableName = mac.mac.tb.groupActivityOrder;
                    dbData = {};
                    dbData[mac.mac.fd.id] = para.orderIdArr;
                    dbData[mac.mac.fd.groupActivityOrder.groupActivityID] = [];
                    $this.sys.api.recordRead(tableName,dbData,function(){
                      para.activityIdArr = JSON.parse(JSON.stringify(dbData[mac.mac.fd.groupActivityOrder.groupActivityID]));
                      para.nStep = 'searchGroupActivity';
                      if(++dbFlag === 2){
                        $this.listRefresh(successCallBack,errorCallBack);
                      }
                    },para.errorCallBack);
                  },para.errorCallBack);
                }else{
                  para.nStep = 'showModules';
                  if(++dbFlag === 2){
                    $this.listRefresh(successCallBack,errorCallBack);
                  }
                }
              },para.errorCallBack);
              break;
            case 'searchGroupActivity':
              //查找组织活动
              tableName = mac.mac.tb.groupActivity;
              parentRecord = null;
              //关键词模糊查询暂未实现
              if($this.keyWord){
                condition = mac.mac.fd.groupActivity.name + '="' + $this.keyWord + '"';
                condition = null;
              }else{
                condition = null;
              }
              dbData = {};
              dbData[mac.mac.fd.id] = [];
              $this.sys.api.recordQuery(tableName,parentRecord,condition,dbData,function(){
                for(let i = 0;i < para.activityIdArr.length;i++){
                  if(dbData[mac.mac.fd.id].includes(para.activityIdArr[i])){
                    $this.eligibleAllOrderIdArr.push(para.orderIdArr[i]);
                  }
                }
                $this.pageTotal = $this.eligibleAllOrderIdArr.length;
                //确定当前页的id
                let startNum = ($this.currentPageNum - 1) * $this.pageSize;
                for(let i = 0;i < $this.eligibleAllOrderIdArr.length;i++){
                  if(i >= startNum && i < startNum + $this.pageSize){
                    $this.currentPageOrderIdArr.push($this.eligibleAllOrderIdArr[i]);
                  }
                }
                if($this.pageTotal === 0){
                  para.nStep = 'showModules';
                }else{
                  para.nStep = 'searchOrderData';
                }
                if(++dbFlag === 2){
                  $this.listRefresh(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'searchOrderData':
              //查找当前列表数据
              tableName = mac.mac.tb.groupActivityOrder;
              dbData = {};
              dbData[mac.mac.fd.id] = $this.currentPageOrderIdArr;
              dbData[mac.mac.fd.groupActivityOrder.groupActivityID] = [];
              dbData[mac.mac.fd.groupActivityOrder.orderNumber] = [];
              dbData[mac.mac.fd.groupActivityOrder.groupActivityTicketTypeID] = [];
              dbData[mac.mac.fd.groupActivityOrder.price] = [];
              dbData[mac.mac.fd.groupActivityOrder.status] = [];
              $this.sys.api.recordRead(tableName,dbData,function(){
                for(let i = 0;i < dbData[mac.mac.fd.id].length;i++){
                  $this.currentPageOrderNumberArr.push(dbData[mac.mac.fd.groupActivityOrder.orderNumber][i]);
                  $this.currentPageTicketPriceArr.push(dbData[mac.mac.fd.groupActivityOrder.price][i]);
                }
                para.orderStatusArr = JSON.parse(JSON.stringify(dbData[mac.mac.fd.groupActivityOrder.status]));
                para.currentActivityIdArr = JSON.parse(JSON.stringify(dbData[mac.mac.fd.groupActivityOrder.groupActivityID]));
                para.currentTicketIdArr = JSON.parse(JSON.stringify(dbData[mac.mac.fd.groupActivityOrder.groupActivityTicketTypeID]));
                para.nStep = 'searchActivity';
                if(++dbFlag === 2){
                  $this.listRefresh(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'searchActivity':
              tableName = mac.mac.tb.groupActivity;
              dbData = {};
              //剔除重复的id
              para.currentActivityIdArr1 = [];
              for(let i = 0;i < para.currentActivityIdArr.length;i++){
                if(!para.currentActivityIdArr1.includes(para.currentActivityIdArr[i])){
                  para.currentActivityIdArr1.push(para.currentActivityIdArr[i]);
                }
              }
              dbData[mac.mac.fd.id] = para.currentActivityIdArr1;
              dbData[mac.mac.fd.groupActivity.name] = [];
              dbData[mac.mac.fd.groupActivity.poster] = [];
              dbData[mac.mac.fd.groupActivity.startTime] = [];
              dbData[mac.mac.fd.groupActivity.mode] = [];
              dbData[mac.mac.fd.groupActivity.place] = [];
              dbData[mac.mac.fd.groupActivity.groupName] = [];
              $this.sys.api.recordRead(tableName,dbData,function(){
                for(let i = 0;i < para.currentActivityIdArr.length;i++){
                  let idIndex = dbData[mac.mac.fd.id].indexOf(para.currentActivityIdArr[i]);
                  $this.currentPagePosterIdArr.push(dbData[mac.mac.fd.id][idIndex]);
                  $this.currentPageActivityNameArr.push(dbData[mac.mac.fd.groupActivity.name][idIndex]);
                  $this.currentPageActivityTimeArr.push(dbData[mac.mac.fd.groupActivity.startTime][idIndex]);
                  $this.currentPageSponsorArr.push(dbData[mac.mac.fd.groupActivity.groupName][idIndex]);
                  if(dbData[mac.mac.fd.groupActivity.mode][idIndex] === mac.mac.enum.groupActivity.mode.online){
                    $this.currentPageActivityAddressArr.push('线上活动');
                  }else{
                    let address = '';
                    for(let m = 0;m < dbData[mac.mac.fd.groupActivity.place][idIndex].name.length;m++){
                      address += dbData[mac.mac.fd.groupActivity.place][idIndex].name[m];
                    }
                    address += dbData[mac.mac.fd.groupActivity.place][idIndex].place;
                    $this.currentPageActivityAddressArr.push(address);
                  }
                }
                para.nStep = 'searchTicket';
                if(++dbFlag === 2){
                  $this.listRefresh(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'searchTicket':
              tableName = mac.mac.tb.groupActivityTicketType;
              dbData = {};
              //剔除重复的id
              para.currentTicketIdArr1 = [];
              for(let i = 0;i < para.currentTicketIdArr.length;i++){
                if(!para.currentTicketIdArr1.includes(para.currentTicketIdArr[i])){
                  para.currentTicketIdArr1.push(para.currentTicketIdArr[i]);
                }
              }
              dbData[mac.mac.fd.id] = para.currentTicketIdArr1;
              dbData[mac.mac.fd.groupActivityTicketType.name] = [];
              $this.sys.api.recordRead(tableName,dbData,function(){
                for(let i = 0;i < para.currentTicketIdArr.length;i++){
                  let idIndex = dbData[mac.mac.fd.id].indexOf(para.currentTicketIdArr[i]);
                  $this.currentPageTicketNameArr.push(dbData[mac.mac.fd.groupActivityTicketType.name][idIndex]);
                }
                para.nStep = 'searchBill';
                para.num = 0;
                if(++dbFlag === 2){
                  $this.listRefresh(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'searchBill':
              tableName = mac.mac.tb.groupActivityBill;
              parentRecord = [$this.currentPageOrderIdArr[para.num]];
              condition = null;
              dbData = {};
              dbData[mac.mac.fd.id] = [];
              dbData[mac.mac.fd.groupActivityBill.status] = [];
              $this.sys.api.recordQuery(tableName,parentRecord,condition,dbData,function(){
                $this.currentPageTicketNumberArr.push(dbData[mac.mac.fd.id].length);
                $this.currentPageTotalPriceArr.push(dbData[mac.mac.fd.id].length * $this.currentPageTicketPriceArr[para.num]);
                if($this.tabsIndex === 0){
                  if($this.currentTypeName === '全部'){
                    if(para.orderStatusArr[para.num] === mac.mac.enum.groupActivityOrder.status.pay){
                      $this.currentPageOrderStatusArr.push('待付款');
                    }else if(para.orderStatusArr[para.num] === mac.mac.enum.groupActivityOrder.status.close){
                      $this.currentPageOrderStatusArr.push('已关闭');
                    }else{
                      //比较订单票据中各个状态，显示较重要的(暂定一个数组，前面的比后面重要)
                      let importanceRankingArr = [
                        mac.mac.enum.groupActivityBill.status.checkTicket,
                        mac.mac.enum.groupActivityBill.status.refunded,
                        mac.mac.enum.groupActivityBill.status.refunding,
                        mac.mac.enum.groupActivityBill.status.refund,
                        mac.mac.enum.groupActivityBill.status.check,
                        mac.mac.enum.groupActivityBill.status.reject,
                        mac.mac.enum.groupActivityBill.status.cancel,
                        mac.mac.enum.groupActivityBill.status.finish,
                        mac.mac.enum.groupActivityBill.status.pay
                      ];
                      let importanceRankingTextArr = [
                        '待参与','已退款','退款中','待退款','待审核','已拒绝','已取消','已完成','待付款'
                      ];
                      for(let i = 0;i < importanceRankingArr.length;i++){
                        if(dbData[mac.mac.fd.groupActivityBill.status].includes(importanceRankingArr[i])){
                          $this.currentPageOrderStatusArr.push(importanceRankingTextArr[i]);
                          break;
                        }
                      }
                    }
                  }else{
                    $this.currentPageOrderStatusArr.push($this.currentTypeName);
                  }
                }else{
                  $this.currentPageOrderStatusArr.push('待参与');
                }
                para.num++;
                if(para.num >= $this.currentPageOrderIdArr.length){
                  para.nStep = 'showModules';
                }else{
                  para.nStep = 'searchBill';
                }
                if(++dbFlag === 2){
                  $this.listRefresh(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                "listHeader",
                "listTabs","searchInput","searchButton"
              ];
              if($this.tabsIndex === 0){
                refId.push("activityTypeDrop");
              }
              if($this.eligibleAllOrderIdArr.length === 0){
                refId.push("noDataText");
              }else{
                refId.push("listRows");
              }
              $this.showSubModule(refId,true,function(){
                para.nStep = 'startSubModules';
                if(++dbFlag === 2){
                  $this.listRefresh(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startSubModules':
              //调用子组件startModule方法
              $this.startSubModules(function(){
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.listRefresh(successCallBack,errorCallBack);
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
      labelChange(index){
        let $this = this;
        if($this.tabsIndex === index){
          return;
        }
        $this.tabsIndex = index;
        $this.showSubModule('activityTypeDrop',$this.tabsIndex === 0,function(){
          if($this.currentTypeName !== '待参与'){
            $this.listRefresh(function(){},function(error){console.log(error)});
          }
        },function(error){console.log(error)});
      },
      inputBlur(value){
        this.keyWord = value;
      },
      keySearch(){
        this.listRefresh(function(){},function(error){console.log(error)});
      },
      typeChange(id){
        let $this = this;
        let dropDown = [
          {id:1,label:'全部',icon:'',disable:false},
          {id:2,label:'待付款',icon:'',disable:false},
          {id:3,label:'待参与',icon:'',disable:false},
          {id:4,label:'待审核',icon:'',disable:false},
          {id:5,label:'已完成',icon:'',disable:false},
          {id:6,label:'已取消',icon:'',disable:false},
          {id:7,label:'已关闭',icon:'',disable:false}
        ];
        let oldTypeName = $this.currentTypeName;
        for(let i = 0; i < dropDown.length;i++){
          if(dropDown[i].id === id){
            $this.currentTypeName = dropDown[i].label;
            break;
          }
        }
        if($this.currentTypeName === oldTypeName){
          return;
        }
        $this.listRefresh(function(){},function(error){console.log(error)});
      },
      pageNumChange(value){
        let $this = this;
        if($this.currentPageNum === value){
          return;
        }
        $this.currentPageNum = value;
        $this.listRefresh(function(){},function(error){console.log(error)});
      },
      showETicket(orderId){
        let $this = this;
        //查出数据
        let tableName = mac.mac.tb.groupActivityOrder;
        let dbData = {};
        dbData[mac.mac.fd.id] = [orderId];
        dbData[mac.mac.fd.groupActivityOrder.groupActivityID] = [];
        dbData[mac.mac.fd.groupActivityOrder.groupActivityTicketTypeID] = [];
        $this.sys.api.recordRead(tableName,dbData,function(){
          $this.activityId = dbData[mac.mac.fd.groupActivityOrder.groupActivityID][0];
          $this.ticketId = dbData[mac.mac.fd.groupActivityOrder.groupActivityTicketTypeID][0];
          tableName = mac.mac.tb.groupActivityBill;
          let parentRecord = [orderId];
          let condition = null;
          dbData = {};
          dbData[mac.mac.fd.id] = [];
          $this.sys.api.recordQuery(tableName,parentRecord,condition,dbData,function(){
            $this.billIdArr = dbData[mac.mac.fd.id];
            $this.forceUpdateData(function(){
              $this.showSubModule('ETicketDia',true,function(){
                $this.sm['ETicketDia'].startModule(function(){
                },function(error){console.log(error)});
              },function(error){console.log(error)});
            });
          },function(error){console.log(error)});
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
          sm1:"listHeader",
          sm2:"listTabs",sm3:"searchInput",sm3_1:"searchButton",sm4:"activityTypeDrop",
          sm5:"listRows",sm6:"noDataText"
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
                para.nStep = 'startModule_listHeader';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_listHeader':
              $this.sm[ref.sm1].startModule(function(){
                para.nStep = 'startModule_tabs';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_tabs':
              $this.sm[ref.sm2].startModule(function(){
                para.nStep = 'startModule_input';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_input':
              $this.sm[ref.sm3].startModule(function(){
                para.nStep = 'startModule_button';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_button':
              $this.sm[ref.sm3_1].startModule(function(){
                para.nStep = 'startModule_dropDown';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_dropDown':
              $this.sm[ref.sm4].startModule(function(){
                para.nStep = 'startModule_list';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_list':
              $this.sm[ref.sm5].startModule(function(){
                para.nStep = 'startModule_noText';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_noText':
              $this.sm[ref.sm6].startModule(function(){
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
      listTabs_labelClickEvent(index){
        this.labelChange(index);
      },
      searchInput_dataModifyEvent(value){
        this.inputBlur(value);
      },
      searchButton_buttonClickEvent(){
        this.keySearch();
      },
      activityTypeDrop_itemClickEvent(id){
        this.typeChange(id);
      },
      listRows_detailPageEvent(activityId,orderId){
        this.ep.detailPageEvent(activityId,orderId);
      },
      listRows_orderDetailEvent(orderId){
        this.ep.orderDetailEvent(orderId);
      },
      listRows_currentChangeEvent(value){
        this.pageNumChange(value);
      },
      listRows_viewETicketEvent(orderId){
        this.showETicket(orderId);
      }
    }
  }
</script>
<style lang="scss">
  .orderList{
    .dropdown-component{
      height:40px;
      line-height:40px;
      margin:auto;
      .el-dropdown{
        width:100%;
        height:40px;
        text-align:center;
        line-height:40px;
        border:1px solid #E4E7ED;
        border-radius:4px;
      }
      .el-dropdown-link{
        vertical-align:middle;
        text-overflow:ellipsis;
      }
    }
  }
</style>
<style lang="scss" scoped>
  .orderList{
    width:100%;
    height:100%;
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
  .orderList_row1_col1{
    width:100%;
    height:100%;
    padding:10px 10px;
    display:grid;
    grid-template-rows:40px calc(100% - 40px);
  }
  .orderList_row1_1_col1{
    width:100%;
    height:40px;
    border-width:0 0 1px 0;
    border-style:solid;
    border-color:#E4E7ED;
  }
  .orderList_row1_2_col1{
    width:100%;
    height:100%;
    margin:5px 0 0 0;
    display:grid;
    grid-template-rows:50px 50px calc(100% - 100px);
    border:1px solid #E4E7ED;
  }
  .orderList_row1_2_1_col1{
    width:calc(100% - 200px);
    height:50px;
    position:relative;
    bottom:1px;
    left:-1px;
  }
  .orderList_row1_2_1_col2{
    width:150px;
    height:50px;
    overflow:hidden;
    border-width:0 0 1px 0;
    border-style:solid;
    border-color:#E4E7ED;
    display:inline-flex;
    align-items:center;
  }
  .orderList_row1_2_1_col3{
    width:50px;
    height:50px;
    padding:0 7px 0 0;
    overflow:hidden;
    border-width:0 0 1px 0;
    border-style:solid;
    border-color:#E4E7ED;
    display:inline-flex;
    align-items:center;
  }
  .orderList_row1_2_2_col1{
    width:80px;
    height:50px;
    padding:5px 0 5px 0;
    margin:0 0 0 20px;
  }
  .orderList_row1_2_3_col1{
    width:100%;
    height:100%;
    overflow:auto;
  }
  .orderList_row2_col1{
    width:100%;
    height:0;
  }
</style>
