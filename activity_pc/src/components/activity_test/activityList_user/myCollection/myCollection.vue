<template>
  <div class="myCollection">
    <div class="row row1">
      <div class="col myCollection_row1_col1">
        <div class="row1_1">
          <div class="col myCollection_row1_1_col1">
            <lm-link-text ref="listHeader"
                          refId="listHeader"
                          v-show="pvt_isShow.v1 === 'listHeader'"
                          :paraVarPair="pvt_v1.listHeader.paraVarPair"
                          :para="pvt_v1.listHeader.para"
                          :attr="pvt_v1.listHeader.attr">
            </lm-link-text>
          </div>
          <div class="col myCollection_row1_1_col2">
            <lm-input-text ref="searchInput"
                           refId="searchInput"
                           v-show="pvt_isShow.v2 === 'searchInput'"
                           :paraVarPair="pvt_v2.searchInput.paraVarPair"
                           :para="pvt_v2.searchInput.para"
                           :attr="pvt_v2.searchInput.attr">
            </lm-input-text>
          </div>
          <div class="col myCollection_row1_1_col3">
            <lm-button ref="searchButton"
                       refId="searchButton"
                       v-show="pvt_isShow.v3 === 'searchButton'"
                       :paraVarPair="pvt_v3.searchButton.paraVarPair"
                       :para="pvt_v3.searchButton.para"
                       :attr="pvt_v3.searchButton.attr">
            </lm-button>
          </div>
        </div>
        <div class="row row1_2">
          <div class="col myCollection_row1_2_col1">
            <list-rows-and-paging ref="listRows"
                                  refId="listRows"
                                  v-show="pvt_isShow.v4 === 'listRows'"
                                  :paraVarPair="pvt_v4.listRows.paraVarPair"
                                  :para="pvt_v4.listRows.para"
                                  :attr="pvt_v4.listRows.attr">
            </list-rows-and-paging>
            <lm-link-text ref="noDataText"
                          refId="noDataText"
                          v-show="pvt_isShow.v4 === 'noDataText'"
                          :paraVarPair="pvt_v4.noDataText.paraVarPair"
                          :para="pvt_v4.noDataText.para"
                          :attr="pvt_v4.noDataText.attr">
            </lm-link-text>
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
  import ListRowsAndPaging from './collectionListRow/listRowsAndPaging.vue';

  export default {
    name:'MyCollection',
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
            "v2","v3",
            "v4","v4"
          ],
          subModule:[
            "listHeader",
            "searchInput","searchButton",
            "listRows","noDataText"
          ]
        },
        pvt_isShow:{
          v1:null,
          v2:null,
          v3:null,
          v4:null
        },
        pvt_eventPortInput:[
          'detailPageEvent'
        ],
        // 用户定义的模块变量
        userId:null,
        keyWord:'',
        allActivityIdArr:[],
        activityIdArr:[],
        posterIdArr:[],
        activityNameArr:[],
        organizerNameArr:[],
        addressArr:[],
        startTimeArr:[],
        statusArr:[],
        priceArr:[],
        buttonDisableArr:[],
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
              textData:'我的收藏'
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
      pvt_v3:function(){
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
          listRows:{
            paraVarPair:{},
            para:{
              activityIdArr:this.activityIdArr,
              posterIdArr:this.posterIdArr,
              activityNameArr:this.activityNameArr,
              organizerNameArr:this.organizerNameArr,
              addressArr:this.addressArr,
              startTimeArr:this.startTimeArr,
              statusArr:this.statusArr,
              priceArr:this.priceArr,
              buttonDisableArr:this.buttonDisableArr,
              currentPageNum:this.currentPageNum,
              pageSize:this.pageSize,
              pageTotal:this.pageTotal
            },
            attr:{}
          },
          noDataText:{
            paraVarPair:{},
            para:{
              textData:'无收藏'
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
              // 初始化数据
              $this.userId = null;
              $this.keyWord = '';
              $this.allActivityIdArr = [];
              $this.activityIdArr = [];
              $this.posterIdArr = [];
              $this.activityNameArr = [];
              $this.organizerNameArr = [];
              $this.addressArr = [];
              $this.startTimeArr = [];
              $this.statusArr = [];
              $this.priceArr = [];
              $this.buttonDisableArr = [];
              $this.currentPageNum = 1;
              $this.pageSize = 5;
              $this.pageTotal = 5;
              if($this.para.userId){
                $this.userId = $this.para.userId;
              }
              para.num = 0;
              para.nStep = 'downloadGroupActivityHandle';
              ++dbFlag;
              break;
            case 'downloadGroupActivityHandle':
              //下载活动互动数据
              let portName = mac.mac.tb.groupActivityHandle;
              let data = {};
              // 授权状态暂定为粒子状态
              data[portName] = [
                mac.mac.fd.groupActivityHandle.groupActivityID
              ];
              let expression = '(' + mac.mac.fd.groupActivityHandle.handler + '=' + $this.userId + ')&&(' + mac.mac.fd.groupActivityHandle.favorite + '=' + mac.mac.enum.groupActivityHandle.favorite.yes + ')';
              let start = para.num * 100;
              let total = 100;
              //按照收藏事件的先后顺序排列(最近的排在最前),因字段类型为string无法比较
              let sort = [];
              let destGeneSite = '';
              $this.sys.api.conditiondataInput(portName,data,expression,start,total,sort,destGeneSite,function(result){
                if(result && result.length === 100){
                  para.num++;
                  para.nStep = 'downloadGroupActivityHandle';
                }else{
                  para.nStep = 'listRefresh';
                }
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
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
      // 私有方法
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
              $this.allActivityIdArr = [];
              $this.activityIdArr = [];
              $this.posterIdArr = [];
              $this.activityNameArr = [];
              $this.organizerNameArr = [];
              $this.addressArr = [];
              $this.startTimeArr = [];
              $this.statusArr = [];
              $this.priceArr = [];
              $this.buttonDisableArr = [];
              para.nStep = 'searchHandle';
              ++dbFlag;
              break;
            case 'searchHandle':
              //查找数据
              tableName = mac.mac.tb.groupActivityHandle;
              parentRecord = null;
              condition = null;
              dbData = {};
              dbData[mac.mac.fd.groupActivityHandle.groupActivityID] = [];
              para.activityIdArr = [];
              $this.sys.api.recordQuery(tableName,parentRecord,condition,dbData,function(){
                for(let i = 0;i < dbData[mac.mac.fd.groupActivityHandle.groupActivityID].length;i++){
                  para.activityIdArr.push(dbData[mac.mac.fd.groupActivityHandle.groupActivityID][i]);
                }
                para.nStep = 'searchKeyWord';
                if(++dbFlag === 2){
                  $this.listRefresh(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'searchKeyWord':
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
                    $this.allActivityIdArr.push(para.activityIdArr[i]);
                  }
                }
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
              dbData[mac.mac.fd.groupActivity.name] = [];
              dbData[mac.mac.fd.groupActivity.poster] = [];
              dbData[mac.mac.fd.groupActivity.startTime] = [];
              dbData[mac.mac.fd.groupActivity.endTime] = [];
              dbData[mac.mac.fd.groupActivity.place] = [];
              dbData[mac.mac.fd.groupActivity.mode] = [];
              dbData[mac.mac.fd.groupActivity.groupName] = [];
              $this.sys.api.recordRead(tableName,dbData,function(){
                let weekArr = ['一','二','三','四','五','六','日'];
                for(let i = 0;i < $this.activityIdArr.length;i++){
                  if(dbData[mac.mac.fd.groupActivity.poster][i] !== null){
                    $this.posterIdArr.push($this.activityIdArr[i]);
                  }else{
                    $this.posterIdArr.push(null);
                  }
                  $this.activityNameArr.push(dbData[mac.mac.fd.groupActivity.name][i]);
                  $this.organizerNameArr.push(dbData[mac.mac.fd.groupActivity.groupName][i]);
                  if(dbData[mac.mac.fd.groupActivity.mode][i] === mac.mac.enum.groupActivity.mode.online){
                    $this.addressArr.push('线上活动');
                  }else{
                    let address = '';
                    for(let m = 0;m < dbData[mac.mac.fd.groupActivity.place][i].name.length;m++){
                      address += dbData[mac.mac.fd.groupActivity.place][i].name[m] + ' ';
                    }
                    address += dbData[mac.mac.fd.groupActivity.place][i].place;
                    $this.addressArr.push(address);
                  }
                  let startDate = new Date(dbData[mac.mac.fd.groupActivity.startTime][i]);
                  let month = startDate.getMonth() + 1;
                  let date = startDate.getDate();
                  let week = startDate.getDay();
                  $this.startTimeArr.push(month + '月' + date + '日 ' + '周' + weekArr[week]);
                  let endTimeNum = new Date(dbData[mac.mac.fd.groupActivity.endTime][i]).getTime();
                  let startTimeNum = startDate.getTime();
                  let nowTimeNum = new Date().getTime();
                  if(nowTimeNum > endTimeNum){
                    $this.statusArr.push('已经结束');
                  }else if(nowTimeNum >= startTimeNum){
                    $this.statusArr.push('正在进行');
                  }else if(nowTimeNum + 3*24*3600*1000 > startTimeNum){
                    $this.statusArr.push('即将开始');
                  }else{
                    let remainDays = Math.ceil((startTimeNum - nowTimeNum)/(24*3600*1000));
                    $this.statusArr.push(remainDays + '天后开始');
                  }
                  $this.buttonDisableArr.push(nowTimeNum >= endTimeNum);
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
              $this.sys.api.recordQuery(tableName,parentRecord,condition,dbData,function(){
                let minPrice = dbData[mac.mac.fd.groupActivityTicketType.price][0];
                for(let i = 0;i < dbData[mac.mac.fd.groupActivityTicketType.price].length;i++){
                  if(dbData[mac.mac.fd.groupActivityTicketType.price][i] < minPrice){
                    minPrice = dbData[mac.mac.fd.groupActivityTicketType.price][i];
                  }
                }
                $this.priceArr.push(minPrice);
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
                "listHeader",
                "searchInput","searchButton"
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
      inputBlur(value){
        this.keyWord = value;
      },
      keySearch(){
        //从第一页开始
        this.currentPageNum = 1;
        this.listRefresh(function(){},function(error){console.log(error)});
      },
      pageNumChange(value){
        let $this = this;
        if($this.currentPageNum === value){
          return;
        }
        $this.currentPageNum = value;
        $this.listRefresh(function(){},function(error){console.log(error)});
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
          sm2:"searchInput",sm3:"searchButton",
          sm4:"listRows",sm5:"noDataText"
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
                para.nStep = 'startModule_input';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_input':
              $this.sm[ref.sm2].startModule(function(){
                para.nStep = 'startModule_button';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_button':
              $this.sm[ref.sm3].startModule(function(){
                para.nStep = 'startModule_listRows';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_listRows':
              $this.sm[ref.sm4].startModule(function(){
                para.nStep = 'startModule_noDataText';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_noDataText':
              $this.sm[ref.sm5].startModule(function(){
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
      searchInput_dataModifyEvent(value){
        this.inputBlur(value);
      },
      searchButton_buttonClickEvent(){
        this.keySearch();
      },
      listRows_detailPageEvent(activityId){
        this.ep.detailPageEvent(activityId);
      },
      listRows_currentChangeEvent(num){
        this.pageNumChange(num);
      },
    }
  }
</script>
<style lang="scss" scoped>
  .myCollection{
    width:100%;
    height:100%;
    background:#fff;
  }
  .row{}
  .col{
    display:inline-block;
    box-sizing:border-box;
    vertical-align:middle;
  }
  .myCollection_row1_col1{
    width:100%;
    height:100%;
    padding:10px;
  }
  .myCollection_row1_1_col1{
    width:calc(100% - 200px);
    height:40px;
    border-width:0 0 1px 0;
    border-style:solid;
    border-color:#E4E7ED;
  }
  .myCollection_row1_1_col2{
    width:156px;
    height:40px;
    overflow:hidden;
    border-width:0 0 1px 0;
    border-style:solid;
    border-color:#E4E7ED;
    display:inline-flex;
    align-items:center;
  }
  .myCollection_row1_1_col3{
    width:44px;
    height:40px;
    overflow:hidden;
    border-width:0 0 1px 0;
    border-style:solid;
    border-color:#E4E7ED;
    display:inline-flex;
    align-items:center;
  }
  .myCollection_row1_2_col1{
    width:100%;
    height:100%;
    overflow:auto;
  }
</style>
