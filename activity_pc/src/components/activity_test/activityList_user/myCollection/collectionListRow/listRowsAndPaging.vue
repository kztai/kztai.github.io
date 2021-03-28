<template>
  <div class="listRowsAndPaging">
    <div class="row row1">
      <div class="col listRowsAndPaging_row1_col1">
        <list-row ref="listRow"
                        refId="listRow"
                        v-show="pvt_isShow.v1 === 'listRow'"
                        v-for="(item, index) in pvt_v1.listRow.forData" :number="index"
                        :paraVarPair="pvt_v1.listRow.paraVarPair"
                        :para="item.para"
                        :attr="item.attr">
        </list-row>
      </div>
    </div>
    <div class="row row2">
      <div class="col listRowsAndPaging_row2_col1">
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
  import ListRow from './listRow.vue';

  export default {
    name:'ListRowsAndPaging',
    props:['refId','paraVarPair','para','attr','number'],
    inject:['sys'],
    components:{
      ListRow
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
          'currentChangeEvent'
        ],
        // 用户定义的模块变量
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
        let $this = this;
        let loopModule = {
          listRow:{
            para:{
              activityId:this.activityIdArr,
              posterId:this.posterIdArr,
              activityName:this.activityNameArr,
              organizerName:this.organizerNameArr,
              address:this.addressArr,
              startTime:this.startTimeArr,
              status:this.statusArr,
              price:this.priceArr,
              buttonDisable:this.buttonDisableArr
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
              $this.activityIdArr = [];
              $this.posterIdArr = [];
              $this.activityNameArr = [];
              $this.organizerNameArr = [];
              $this.addressArr = [];
              $this.startTimeArr = [];
              $this.statusArr = [];
              $this.priceArr = [];
              $this.buttonDisableArr = [];
              $this.currentPageNum = 0;
              $this.pageSize = 5;
              $this.pageTotal = 5;
              if($this.para.activityIdArr){
                $this.activityIdArr = $this.para.activityIdArr;
              }
              if($this.para.posterIdArr){
                $this.posterIdArr = $this.para.posterIdArr;
              }
              if($this.para.activityNameArr){
                $this.activityNameArr = $this.para.activityNameArr;
              }
              if($this.para.organizerNameArr){
                $this.organizerNameArr = $this.para.organizerNameArr;
              }
              if($this.para.addressArr){
                $this.addressArr = $this.para.addressArr;
              }
              if($this.para.startTimeArr){
                $this.startTimeArr = $this.para.startTimeArr;
              }
              if($this.para.statusArr){
                $this.statusArr = $this.para.statusArr;
              }
              if($this.para.priceArr){
                $this.priceArr = $this.para.priceArr;
              }
              if($this.para.buttonDisableArr){
                $this.buttonDisableArr = $this.para.buttonDisableArr;
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
              for(let i = 0;i < $this.activityIdArr.length;i++){
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
      listRow_detailPageEvent(activityId){
        this.ep.detailPageEvent(activityId);
      },
      pageNum_currentChangeEvent(value){
        this.ep.currentChangeEvent(value);
      },
    }
  }
</script>
<style lang="scss" scoped>
  .listRowsAndPaging{
    width:100%;
    height:100%;
    display:grid;
    grid-template-rows:calc(100% - 100px) 100px;
  }
  .row{}
  .col{
    display:inline-block;
    box-sizing:border-box;
    vertical-align:middle;
  }
  .listRowsAndPaging_row1_col1{
    width:100%;
    height:100%;
    border-width:0 0 1px 0;
    border-style:solid;
    border-color: #e9ecf2;
  }
  .listRowsAndPaging_row2_col1{
    width:100%;
    height:100%;
    padding:20px 0 0 0;
    text-align:center;
  }
</style>
