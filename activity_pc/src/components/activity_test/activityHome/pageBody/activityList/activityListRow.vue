<template>
  <div class="activityListRow">
    <div class="row row1">
      <!--图片-->
      <div class="col listRow_row1_col_v1">
        <lm-image
                ref="posterImage"
                refId="posterImage"
                v-show="pvt_isShow.v1 === 'posterImage'"
                :paraVarPair="pvt_v1.posterImage.paraVarPair"
                :para="pvt_v1.posterImage.para"
                :attr="pvt_v1.posterImage.attr">
        </lm-image>
      </div>
      <div class="col listRow_row1_col_v2">
        <div class="row row1_2_1">
          <div class="col listRow_row1_2_1_col_v1">
            <lm-link-text
                    ref="activityName"
                    refId="activityName"
                    v-show="pvt_isShow.v2 === 'activityName'"
                    :paraVarPair="pvt_v2.activityName.paraVarPair"
                    :para="pvt_v2.activityName.para"
                    :attr="pvt_v2.activityName.attr">
            </lm-link-text>
          </div>
        </div>
        <div class="row row1_2_2">
          <div class="col listRow_row1_2_2_col_v1">
            <lm-link-text
                    ref="addressLabel"
                    refId="addressLabel"
                    v-show="pvt_isShow.v3 === 'addressLabel'"
                    :paraVarPair="pvt_v3.addressLabel.paraVarPair"
                    :para="pvt_v3.addressLabel.para"
                    :attr="pvt_v3.addressLabel.attr">
            </lm-link-text>
          </div>
          <div class="col listRow_row1_2_2_col_v2">
            <lm-link-text
                    ref="addressText"
                    refId="addressText"
                    v-show="pvt_isShow.v4 === 'addressText'"
                    :paraVarPair="pvt_v4.addressText.paraVarPair"
                    :para="pvt_v4.addressText.para"
                    :attr="pvt_v4.addressText.attr">
            </lm-link-text>
          </div>
        </div>
        <div class="row row1_2_3">
          <div class="col listRow_row1_2_3_col_v1">
            <lm-link-text
                    ref="dateLabel"
                    refId="dateLabel"
                    v-show="pvt_isShow.v5 === 'dateLabel'"
                    :paraVarPair="pvt_v5.dateLabel.paraVarPair"
                    :para="pvt_v5.dateLabel.para"
                    :attr="pvt_v5.dateLabel.attr">
            </lm-link-text>
          </div>
          <div class="col listRow_row1_2_3_col_v2">
            <lm-link-text
                    ref="dateText"
                    refId="dateText"
                    v-show="pvt_isShow.v6 === 'dateText'"
                    :paraVarPair="pvt_v6.dateText.paraVarPair"
                    :para="pvt_v6.dateText.para"
                    :attr="pvt_v6.dateText.attr">
            </lm-link-text>
          </div>
          <div class="col listRow_row1_2_3_col_v3">
            <lm-link-text
                    ref="dateState"
                    refId="dateState"
                    v-show="pvt_isShow.v7 === 'dateState'"
                    :paraVarPair="pvt_v7.dateState.paraVarPair"
                    :para="pvt_v7.dateState.para"
                    :attr="pvt_v7.dateState.attr">
            </lm-link-text>
          </div>
        </div>
        <div class="row row1_2_4">
          <div class="col listRow_row1_2_4_col_v1">
            <lm-link-text
                    ref="priceText"
                    refId="priceText"
                    v-show="pvt_isShow.v8 === 'priceText'"
                    :paraVarPair="pvt_v8.priceText.paraVarPair"
                    :para="pvt_v8.priceText.para"
                    :attr="pvt_v8.priceText.attr">
            </lm-link-text>
          </div>
          <div class="col listRow_row1_2_4_col_v2">
            <lm-link-text
                    ref="applicantNum"
                    refId="applicantNum"
                    v-show="pvt_isShow.v9 === 'applicantNum'"
                    :paraVarPair="pvt_v9.applicantNum.paraVarPair"
                    :para="pvt_v9.applicantNum.para"
                    :attr="pvt_v9.applicantNum.attr">
            </lm-link-text>
          </div>
          <div class="col listRow_row1_2_4_col_v3">
            <lm-button
                    ref="applyButton"
                    refId="applyButton"
                    v-show="pvt_isShow.v10 === 'applyButton'"
                    :paraVarPair="pvt_v10.applyButton.paraVarPair"
                    :para="pvt_v10.applyButton.para"
                    :attr="pvt_v10.applyButton.attr">
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
    name:"ActivityListRow",
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
            'posterImage',
            'activityName',
            'addressLabel','addressText',
            'dateLabel','dateText','dateState',
            'priceText','applicantNum','applyButton'
          ],
          vessel:[
            'v1',
            'v2',
            'v3','v4',
            'v5','v6','v7',
            'v8','v9','v10'
          ]
        },
        // 各个容器当前显示的子模块
        pvt_isShow:{
          v1:null,
          v2:null,
          v3:null,v4:null,
          v5:null,v6:null,v7:null,
          v8:null,v9:null,v10:null
        },
        // 当前模块输入类型的事务接口名称，工具完成前需要用户手动填写
        pvt_eventPortInput:[
          'detailPageEvent'
        ],
        // 用户定义的模块变量
        activityId:null,
        activityPoster:[{
          $table:'groupActivity',
          $arrField:['poster'],
          $arrValue:[null]
        }],
        activityName:0,
        activityAddress:'',
        activityDate:'',
        dateState:'',
        activityPrice:'',
        applicantNumText:'',
        buttonText:'我要报名'
      }
    },
    watch:{},
    computed:{
      // 图片
      pvt_v1:function(){
        return {
          posterImage:{
            paraVarPair:{},
            para:{
              image:this.activityPoster
            },
            attr:{
              fit:'fill'
            }
          }
        }
      },
      // 名称
      pvt_v2:function(){
        return {
          activityName:{
            paraVarPair:{},
            para:{
              textData:this.activityName
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontSize:'16px',
              fontWeight:true,
              indent:false,
              height:'18px',
              isClick:true
            }
          }
        }
      },
      // 地址
      pvt_v3:function(){
        return {
          addressLabel:{
            paraVarPair:{},
            para:{
              textData:'地址:'
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontSize:'14px',
              fontWeight:false,
              indent:false,
              height:'22px',
              color:'#909399'
            }
          }
        }
      },
      pvt_v4:function(){
        return {
          addressText:{
            paraVarPair:{},
            para:{
              textData:this.activityAddress
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontSize:'14px',
              fontWeight:false,
              indent:false,
              height:'22px',
              color:'#909399'
            }
          }
        }
      },
      // 时间
      pvt_v5:function(){
        return {
          dateLabel:{
            paraVarPair:{},
            para:{
              textData:'时间:'
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontSize:'14px',
              fontWeight:false,
              indent:false,
              height:'18px',
              color:'#909399'
            }
          }
        }
      },
      pvt_v6:function(){
        return {
          dateText:{
            paraVarPair:{},
            para:{
              textData:this.activityDate
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontSize:'14px',
              fontWeight:false,
              indent:false,
              height:'18px',
              color:'#909399'
            }
          }
        }
      },
      pvt_v7:function(){
        return {
          dateState:{
            paraVarPair:{},
            para:{
              textData:this.dateState
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontSize:'14px',
              fontWeight:false,
              indent:false,
              height:'18px',
              color:this.dateState === '已经结束'?'#909399':(this.dateState === '正在进行'?'##F3900D':('#FF4C00'))
            }
          }
        }
      },
      // 价格
      pvt_v8:function(){
        return {
          priceText:{
            paraVarPair:{},
            para:{
              textData:this.activityPrice
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontSize:'14px',
              fontWeight:false,
              indent:false,
              height:'18px',
              color:'#12B0FF'
            }
          }
        }
      },
      pvt_v9:function(){
        return {
          applicantNum:{
            paraVarPair:{},
            para:{
              textData:this.applicantNumText
            },
            attr:{
              label:'div',
              textAlign:'right',
              fontSize:'14px',
              fontWeight:false,
              indent:false,
              height:'18px',
              color:'#C0C4CC'
            }
          }
        }
      },
      pvt_v10:function(){
        return {
          applyButton:{
            paraVarPair:{},
            para:{
              name:[this.buttonText]
            },
            attr:{
              type:''
            }
          }
        }
      },
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
              $this.activityId = null;
              $this.activityPoster = [{
                $table:'groupActivity',
                $arrField:['poster'],
                $arrValue:[null]
              }];
              $this.activityName = '';
              $this.activityAddress = '';
              $this.activityDate = '';
              $this.dateState = '';
              $this.activityPrice = '';
              $this.applicantNumText = '';
              $this.buttonText = '我要报名';
              if($this.para){
                if($this.para.activityId){
                  $this.activityId = $this.para.activityId;
                }
                if($this.para.posterId){
                  $this.activityPoster = [{
                    $table:'groupActivity',
                    $arrField:['poster'],
                    $arrValue:[$this.para.posterId]
                  }];
                }
                if($this.para.name){
                  $this.activityName = $this.para.name;
                }
                //判断是线上还是线下
                if($this.para.mode === mac.mac.enum.groupActivity.mode.online){
                  $this.activityAddress = '线上活动';
                }else{
                  $this.activityAddress = $this.para.address;
                }
                if($this.para.startDate && $this.para.endDate){
                  let startDate = new Date($this.para.startDate);
                  let year = startDate.getFullYear();
                  let month = startDate.getMonth() + 1;
                  let date = startDate.getDate();
                  let week = startDate.getDay();
                  let arr1 = ['一','二','三','四','五','六','日'];
                  $this.activityDate = year + '年' + month + '月' + date + '日 ' + '周' + arr1[week];
                  //判断时间在3日以后开始则为'正在售票',3日以内则为'即将开始'
                  let startDateNum = startDate.getTime();
                  let endDateNum = new Date($this.para.endDate).getTime();
                  let nowDateNum = new Date().getTime();
                  let applicantsNum = 0;
                  for(let i = 0;i < $this.para.applicantsNum.length;i++){
                    applicantsNum += $this.para.applicantsNum[i];
                  }
                  if(nowDateNum >= endDateNum){
                    $this.dateState = '已经结束';
                    $this.applicantNumText = applicantsNum + '人报名';
                    $this.buttonText = '查看新闻';
                  }else{
                    if(nowDateNum >= startDate){
                      $this.dateState = '正在进行';
                    }else{
                      if(nowDateNum + 3*3600*1000*24 >= startDate){
                        $this.dateState = '即将开始';
                      }else{
                        $this.dateState = '正在发售';
                      }
                    }
                    if(nowDateNum > $this.para.lastTicketEndSaleTime){
                      $this.applicantNumText = '报名已截止';
                      $this.buttonText = '查看详情';
                    }else{
                      if(applicantsNum >= $this.para.ticketsNum){
                        $this.applicantNumText = '票已售完';
                        $this.buttonText = '查看详情';
                      }else{
                        if(nowDateNum > startDate){
                          $this.applicantNumText = '仅剩' + ($this.para.ticketsNum - applicantsNum) + '名额';
                          $this.buttonText = '我要报名';
                        }else{
                          $this.applicantNumText = applicantsNum + '人报名';
                          $this.buttonText = '我要报名';
                        }
                      }
                    }
                  }
                }
                if($this.para.price === 0){
                  $this.activityPrice = '免费';
                }else{
                  $this.activityPrice = '￥' + $this.para.price;
                }
              }
              para.nStep = 'showModules';
              ++dbFlag;
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                'posterImage',
                'activityName',
                'addressLabel','addressText',
                'dateLabel','dateText','dateState',
                'priceText','applicantNum','applyButton'
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
      openDetailPage(){
        this.ep.detailPageEvent(this.activityId);
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
          sm1:'posterImage',
          sm2:'activityName',
          sm3:'addressLabel',sm4:'addressText',
          sm5:'dateLabel',sm6:'dateText',sm7:'dateState',
          sm8:'priceText',sm9:'applicantNum',sm10:'applyButton'
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
                para.nStep = 'startModule_image';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_image':
              $this.sm[ref.sm1].startModule(function(){
                para.nStep = 'startModule_name';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_name':
              $this.sm[ref.sm2].startModule(function(){
                para.nStep = 'startModule_addLab';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_addLab':
              $this.sm[ref.sm3].startModule(function(){
                para.nStep = 'startModule_addText';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_addText':
              $this.sm[ref.sm4].startModule(function(){
                para.nStep = 'startModule_dateLab';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_dateLab':
              $this.sm[ref.sm5].startModule(function(){
                para.nStep = 'startModule_dateText';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_dateText':
              $this.sm[ref.sm6].startModule(function(){
                para.nStep = 'startModule_dateState';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_dateState':
              $this.sm[ref.sm7].startModule(function(){
                para.nStep = 'startModule_price';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_price':
              $this.sm[ref.sm8].startModule(function(){
                para.nStep = 'startModule_num';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_num':
              $this.sm[ref.sm9].startModule(function(){
                para.nStep = 'startModule_button';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_button':
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
      posterImage_clickEvent(){
        this.openDetailPage();
      },
      activityName_textClickEvent(){
        this.openDetailPage();
      },
      applyButton_buttonClickEvent(){
        this.openDetailPage();
      },
    }
  }
</script>
<style lang="scss" scoped>
  .activityListRow{
    width:100%;
    height:168px;
    padding:20px 48px;
    box-sizing:border-box;
    border-color:#F5F5F5;
    border-style:solid;
    border-width:0 0 1px 0;
  }
  .row{
  }
  .col{
    display:inline-block;
    vertical-align:middle;
  }
  .listRow_row1_col_v1{
    width:170px;
    height:128px;
    display:inline-grid;
    grid-template-rows:100%;
  }
  .listRow_row1_col_v2{
    width:calc(100% - 170px);
    height:128px;
  }
  .listRow_row1_2_1_col_v1{
    width:100%;
    height:40px;
    padding:0 0 0 18px;
  }
  .listRow_row1_2_2_col_v1{
    width:60px;
    height:25px;
    padding:0 0 0 18px;
  }
  .listRow_row1_2_2_col_v2{
    width:calc(100% - 60px);
    height:25px;
  }
  .listRow_row1_2_3_col_v1{
    width:60px;
    height:25px;
    padding:0 0 0 18px;
  }
  .listRow_row1_2_3_col_v2{
    width:150px;
    height:25px;
  }
  .listRow_row1_2_3_col_v3{
    width:calc(100% - 210px);
    height:25px;
  }
  .listRow_row1_2_4_col_v1{
    width:100px;
    height:38px;
    padding:20px 0 0 18px;
    box-sizing:border-box;
  }
  .listRow_row1_2_4_col_v2{
    width:calc(100% - 200px);
    height:38px;
    padding:13px 10px 0 0;
    box-sizing:border-box;
  }
  .listRow_row1_2_4_col_v3{
    width:100px;
    height:38px;
    padding:2px 0 0 0;
    box-sizing:border-box;
  }
</style>
