<template>
  <div class="activityList">
    <div class="row row1">
      <div class="col activityList_row1_col1">
        <lm-link-text ref="listHeader"
                      refId="listHeader"
                      v-show="pvt_isShow.v1 === 'listHeader'"
                      :paraVarPair="pvt_v1.listHeader.paraVarPair"
                      :para="pvt_v1.listHeader.para"
                      :attr="pvt_v1.listHeader.attr">
        </lm-link-text>
      </div>
    </div>
    <div class="row row2">
      <div class="col activityList_row2_col1">
        <list-rows-and-paging ref="listRows"
                              refId="listRows"
                              v-show="pvt_isShow.v2 === 'listRows'"
                              :paraVarPair="pvt_v2.listRows.paraVarPair"
                              :para="pvt_v2.listRows.para"
                              :attr="pvt_v2.listRows.attr">
        </list-rows-and-paging>
        <lm-link-text ref="noDataText"
                      refId="noDataText"
                      v-show="pvt_isShow.v2 === 'noDataText'"
                      :paraVarPair="pvt_v2.noDataText.paraVarPair"
                      :para="pvt_v2.noDataText.para"
                      :attr="pvt_v2.noDataText.attr">
        </lm-link-text>
      </div>
    </div>
  </div>
</template>
<script>
  import libSys from '@/components/baseComponent/libSys.js';
  import libUpload from '@/components/baseComponent/libUpload.js';
  //引入子组件
  import ListRowsAndPaging from './activityListRowsAndPaging.vue';
  export default {
    name:'activityList',
    props:['refId','paraVarPair','para','attr','number'],
    inject:['sys'],
    components:{
      ListRowsAndPaging
    },
    data:function(){
      return {
        pvt_subModuleMap:{
          vessel:[
            "v1",
            "v2",'v2'
          ],
          subModule:[
            "listHeader",
            'listRows','noDataText'
          ]
        },
        pvt_isShow:{
          v1:null,
          v2:null
        },
        pvt_eventPortInput:[
          'detailPageEvent'
        ],
        // 用户定义的模块变量
        groupId:null,
        groupName:'',
        keyWord:'',
        //列表变量
        activityIdArr:[],
        posterIdArr:[],
        nameArr:[],
        addressArr:[],
        modeArr:[],
        startDateArr:[],
        endDateArr:[],
        priceArr:[],
        applicantsNumArr:[],
        ticketsNumArr:[],
        lastTicketEndSaleTimeArr:[],
        // 分页变量
        currentPageNum:1,
        pageSize:5, //每页数量
        pageTotal:5 //总数量
      }
    },
    computed:{
      pvt_v1:function(){
        return {
          listHeader:{
            paraVarPair:{},
            para:{
              textData:this.groupName + '的主办活动'
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontSize:'18px',
              fontWeight:true,
              indent:false,
              height:'60px',
            }
          }
        }
      },
      pvt_v2:function(){
        return {
          listRows:{
            paraVarPair:{},
            para:{
              activityIdArr:this.activityIdArr,
              posterIdArr:this.posterIdArr,
              nameArr:this.nameArr,
              addressArr:this.addressArr,
              modeArr:this.modeArr,
              startDateArr:this.startDateArr,
              endDateArr:this.endDateArr,
              priceArr:this.priceArr,
              applicantsNumArr:this.applicantsNumArr,
              ticketsNumArr:this.ticketsNumArr,
              lastTicketEndSaleTimeArr:this.lastTicketEndSaleTimeArr,
              currentPageNum:this.currentPageNum,
              pageSize:this.pageSize,
              pageTotal:this.pageTotal
            },
            attr:{}
          },
          noDataText:{
            paraVarPair:{},
            para:{
              textData:'无数据'
            },
            attr:{
              label:'div',
              fontSize:'16px',
              textAlign:'center',
              height:'76px'
            }
          }
        };
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
              $this.groupId = '';
              $this.groupName = '';
              $this.keyWord = '';
              $this.activityIdArr = [];
              $this.posterIdArr = [];
              $this.nameArr = [];
              $this.addressArr = [];
              $this.modeArr = [];
              $this.startDateArr = [];
              $this.endDateArr = [];
              $this.priceArr = [];
              $this.applicantsNumArr = [];
              $this.ticketsNumArr = [];
              $this.lastTicketEndSaleTimeArr = [];
              $this.currentPageNum = 1;
              $this.pageSize = 5;
              $this.pageTotal = 5;
              if($this.para.groupId){
                $this.groupId = $this.para.groupId;
              }
              if($this.para.groupName){
                $this.groupName = $this.para.groupName;
              }
              if($this.para.keyWord){
                $this.keyWord = $this.para.keyWord;
              }
              para.nStep = 'listRefresh';
              ++dbFlag;
              break;
            case 'listRefresh':
              $this.listRefresh(function(){
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
      listRefresh:function(successCallBack,errorCallBack){
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
              $this.activityIdArr = [];
              $this.posterIdArr = [];
              $this.nameArr = [];
              $this.addressArr = [];
              $this.modeArr = [];
              $this.startDateArr = [];
              $this.endDateArr = [];
              $this.priceArr = [];
              $this.applicantsNumArr = [];
              $this.ticketsNumArr = [];
              $this.lastTicketEndSaleTimeArr = [];
              para.num = 0;
              para.nStep = 'downloadGroupActivity';
              ++dbFlag;
              break;
            case 'downloadGroupActivity':
              //下载活动数据
              //因现有的条件下载库函数无法满足模糊查询，返回满足条件的数据记录总数，暂下载所有数据
              let portName = mac.mac.tb.groupActivity;
              let data = {};
              data[portName] = '';
              data[mac.mac.tb.groupActivityTicketType] = '';
              let expression = mac.mac.fd.groupActivity.groupId + '=' + $this.groupId; //查找当前组织下的活动名带关键词keyWord的活动
              let start = (para.num) * 100;
              let total = 100;
              let sort = ['id,asc'];
              let destGeneSite = '';
              $this.sys.api.conditiondataInput(portName,data,expression,start,total,sort,destGeneSite,function(result){
                //后期返回值有活动总数
                if(result && result.length === 100){
                  para.num++;
                  para.nStep = 'downloadGroupActivity';
                }else{
                  para.nStep = 'searchKeyWord';
                }
                if(++dbFlag === 2){
                  $this.listRefresh(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'searchKeyWord':
              //查找数据
              tableName = mac.mac.tb.groupActivity;
              parentRecord = null;
              if($this.keyWord){
                condition = mac.mac.fd.groupActivity.name + '="' + $this.keyWord + '"';
                condition = null;
              }else{
                condition = null;
              }
              dbData = {};
              dbData[mac.mac.fd.id] = [];
              $this.sys.api.recordQuery(tableName,parentRecord,condition,dbData,function(){
                $this.allActivityIdArr = JSON.parse(JSON.stringify(dbData[mac.mac.fd.id]));
                $this.pageTotal = $this.allActivityIdArr.length;
                //确定当前页的id
                let startNum = ($this.currentPageNum - 1) * $this.pageSize;
                for(let i = 0;i < $this.allActivityIdArr.length;i++){
                  if(i >= startNum && i < startNum + $this.pageSize){
                    $this.activityIdArr.push($this.allActivityIdArr[i]);
                  }
                }
                if($this.pageTotal === 0){
                  para.nStep = 'showModules';
                }else{
                  para.nStep = 'searchActivity';
                }
                if(++dbFlag === 2){
                  $this.listRefresh(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'searchActivity':
              //查找数据
              tableName = mac.mac.tb.groupActivity;
              dbData = {};
              dbData[mac.mac.fd.id] = $this.activityIdArr;
              dbData[mac.mac.fd.groupActivity.poster] = [];
              dbData[mac.mac.fd.groupActivity.name] = [];
              dbData[mac.mac.fd.groupActivity.place] = [];
              dbData[mac.mac.fd.groupActivity.mode] = [];
              dbData[mac.mac.fd.groupActivity.startTime] = [];
              dbData[mac.mac.fd.groupActivity.endTime] = [];
              dbData[mac.mac.fd.groupActivity.enrollNumber] = [];
              $this.sys.api.recordRead(tableName,dbData,function(){
                for(let i = 0;i < $this.activityIdArr.length;i++){
                  if(dbData[mac.mac.fd.groupActivity.poster][i] !== null){
                    $this.posterIdArr.push($this.activityIdArr[i]);
                  }else{
                    $this.posterIdArr.push(null);
                  }
                  $this.nameArr.push(dbData[mac.mac.fd.groupActivity.name][i]);

                  let address = '';
                  if(dbData[mac.mac.fd.groupActivity.place][i] !== null){
                    for(let m = 0;m < dbData[mac.mac.fd.groupActivity.place][i].name.length;m++){
                      address += dbData[mac.mac.fd.groupActivity.place][i].name[m] + ' ';
                    }
                    address += dbData[mac.mac.fd.groupActivity.place][i].place;
                  }
                  $this.addressArr.push(address);
                  $this.modeArr.push(dbData[mac.mac.fd.groupActivity.mode][i]);
                  let startTimeNum = new Date(dbData[mac.mac.fd.groupActivity.startTime][i]).getTime();
                  let endTimeNum = new Date(dbData[mac.mac.fd.groupActivity.endTime][i]).getTime();
                  $this.startDateArr.push(startTimeNum);
                  $this.endDateArr.push(endTimeNum);
                  if(dbData[mac.mac.fd.groupActivity.enrollNumber][i]){
                    $this.applicantsNumArr.push(dbData[mac.mac.fd.groupActivity.enrollNumber][i]);
                  }else{
                    $this.applicantsNumArr.push([]);
                  }
                }
                para.nStep = 'searchTickets';
                para.num = 0;
                if(++dbFlag === 2){
                  $this.listRefresh(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'searchTickets':
              //查找票价
              tableName = mac.mac.tb.groupActivityTicketType;
              parentRecord = [$this.activityIdArr[para.num]];
              condition = null;
              dbData = {};
              dbData[mac.mac.fd.groupActivityTicketType.price] = [];
              dbData[mac.mac.fd.groupActivityTicketType.number] = [];
              dbData[mac.mac.fd.groupActivityTicketType.saleStartTime] = [];
              dbData[mac.mac.fd.groupActivityTicketType.saleEndTime] = [];
              $this.sys.api.recordQuery(tableName,parentRecord,condition,dbData,function(){
                let minPrice = dbData[mac.mac.fd.groupActivityTicketType.price][0];
                let ticketsNum = 0;
                let lastTicketEndSaleTime = 0;
                for(let i = 0;i < dbData[mac.mac.fd.groupActivityTicketType.price].length;i++){
                  if(dbData[mac.mac.fd.groupActivityTicketType.price][i] < minPrice){
                    minPrice = dbData[mac.mac.fd.groupActivityTicketType.price][i];
                  }
                  ticketsNum = ticketsNum + dbData[mac.mac.fd.groupActivityTicketType.number][i];
                  let dateNum2 = new Date(dbData[mac.mac.fd.groupActivityTicketType.saleEndTime][i]).getTime();
                  if(dateNum2 > lastTicketEndSaleTime){
                    lastTicketEndSaleTime = dateNum2;
                  }
                }
                $this.priceArr.push(minPrice);
                $this.ticketsNumArr.push(ticketsNum);
                $this.lastTicketEndSaleTimeArr.push(lastTicketEndSaleTime);
                para.num++;
                if(para.num >= $this.activityIdArr.length){
                  para.num = 0;
                  para.nStep = 'showModules';
                }else{
                  para.nStep = 'searchTickets';
                }
                if(++dbFlag === 2){
                  $this.listRefresh(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                "listHeader"
              ];
              if($this.activityIdArr.length > 0){
                refId.push('listRows');
              }else{
                refId.push('noDataText');
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
      // 私有方法
      currentChange(value){
        this.currentPageNum = value;
        this.listRefresh(function(){},function(error){console.log(error)});
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
          sm2:'listRows',
          sm3:'noDataText'
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
                para.nStep = 'startModule_header';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_header':
              $this.sm[ref.sm1].startModule(function(){
                para.nStep = 'startModule_listRows';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_listRows':
              $this.sm[ref.sm2].startModule(function(){
                para.nStep = 'startModule_noDataText';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },function(error){console.error(error)});
              break;
            case 'startModule_noDataText':
              $this.sm[ref.sm3].startModule(function(){
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
      listRows_detailPageEvent(id){
        this.ep.detailPageEvent(id);
      },
      listRows_currentChangeEvent(value){
        this.currentChange(value);
      },
    }
  }
</script>
<style lang="scss" scoped>
  .activityList{
    width:100%;
    height:100%;
    background:#fff;
  }
  .row{}
  .col{
    display:inline-block;
    box-sizing:border-box;
  }
  .activityList_row1_col1{
    width:100%;
    height:60px;
    padding:0 0 0 48px;
    border-color:#F4F4F4;
    border-style:solid;
    border-width:0 0 1px 0;
  }
  .activityList_row2_col1{
    width:100%;
    height:968px;
  }
</style>
