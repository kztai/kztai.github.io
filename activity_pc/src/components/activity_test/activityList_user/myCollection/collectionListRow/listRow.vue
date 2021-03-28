<template>
  <div class="listRow">
    <div class="row row1">
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
            <div class="row row1_1">
              <div class="col listRow_row1_1_col_v1">
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
            <div class="row row1_2">
              <div class="col listRow_row1_2_col_v1">
                <lm-link-text
                        ref="organizerLabel"
                        refId="organizerLabel"
                        v-show="pvt_isShow.v3 === 'organizerLabel'"
                        :paraVarPair="pvt_v3.organizerLabel.paraVarPair"
                        :para="pvt_v3.organizerLabel.para"
                        :attr="pvt_v3.organizerLabel.attr">
                </lm-link-text>
              </div>
              <div class="col listRow_row1_2_col_v2">
                <lm-link-text
                        ref="organizerName"
                        refId="organizerName"
                        v-show="pvt_isShow.v4 === 'organizerName'"
                        :paraVarPair="pvt_v4.organizerName.paraVarPair"
                        :para="pvt_v4.organizerName.para"
                        :attr="pvt_v4.organizerName.attr">
                </lm-link-text>
              </div>
            </div>
            <div class="row row1_3">
              <div class="col listRow_row1_3_col_v1">
                <lm-link-text
                        ref="addressLabel"
                        refId="addressLabel"
                        v-show="pvt_isShow.v5 === 'addressLabel'"
                        :paraVarPair="pvt_v5.addressLabel.paraVarPair"
                        :para="pvt_v5.addressLabel.para"
                        :attr="pvt_v5.addressLabel.attr">
                </lm-link-text>
              </div>
              <div class="col listRow_row1_3_col_v2">
                <lm-link-text
                        ref="addressText"
                        refId="addressText"
                        v-show="pvt_isShow.v6 === 'addressText'"
                        :paraVarPair="pvt_v6.addressText.paraVarPair"
                        :para="pvt_v6.addressText.para"
                        :attr="pvt_v6.addressText.attr">
                </lm-link-text>
              </div>
            </div>
            <div class="row row1_4">
              <div class="col listRow_row1_4_col_v1">
                <lm-link-text
                        ref="timeLabel"
                        refId="timeLabel"
                        v-show="pvt_isShow.v7 === 'timeLabel'"
                        :paraVarPair="pvt_v7.timeLabel.paraVarPair"
                        :para="pvt_v7.timeLabel.para"
                        :attr="pvt_v7.timeLabel.attr">
                </lm-link-text>
              </div>
              <div class="col listRow_row1_4_col_v2">
                <lm-link-text
                        ref="timeText"
                        refId="timeText"
                        v-show="pvt_isShow.v8 === 'timeText'"
                        :paraVarPair="pvt_v8.timeText.paraVarPair"
                        :para="pvt_v8.timeText.para"
                        :attr="pvt_v8.timeText.attr">
                </lm-link-text>
              </div>
              <div class="col listRow_row1_4_col_v3">
                <lm-link-text
                        ref="statusText"
                        refId="statusText"
                        v-show="pvt_isShow.v9 === 'statusText'"
                        :paraVarPair="pvt_v9.statusText.paraVarPair"
                        :para="pvt_v9.statusText.para"
                        :attr="pvt_v9.statusText.attr">
                </lm-link-text>
              </div>
            </div>
            <div class="row row1_5">
              <div class="col listRow_row1_5_col_v1">
                <lm-link-text
                        ref="priceText"
                        refId="priceText"
                        v-show="pvt_isShow.v10 === 'priceText'"
                        :paraVarPair="pvt_v10.priceText.paraVarPair"
                        :para="pvt_v10.priceText.para"
                        :attr="pvt_v10.priceText.attr">
                </lm-link-text>
              </div>
            </div>
          </div>
          <div class="col listRow_row1_2_1_col_v2">
            <div class="row row2_1">
              <div class="col listRow_row2_1_col_v1">
                <lm-button
                        ref="shareButton"
                        refId="shareButton"
                        v-show="pvt_isShow.v11 === 'shareButton'"
                        :paraVarPair="pvt_v11.shareButton.paraVarPair"
                        :para="pvt_v11.shareButton.para"
                        :attr="pvt_v11.shareButton.attr">
                </lm-button>
              </div>
            </div>
            <div class="row row2_2">
              <div class="col listRow_row2_2_col_v1">
                <lm-button
                        ref="applyButton"
                        refId="applyButton"
                        v-show="pvt_isShow.v12 === 'applyButton'"
                        :paraVarPair="pvt_v12.applyButton.paraVarPair"
                        :para="pvt_v12.applyButton.para"
                        :attr="pvt_v12.applyButton.attr">
                </lm-button>
              </div>
            </div>
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
    name:"ListRow",
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
            'organizerLabel','organizerName',
            'addressLabel','addressText',
            'timeLabel','timeText','statusText',
            'priceText',
            'shareButton','applyButton'
          ],
          vessel:[
            'v1',
            'v2',
            'v3','v4',
            'v5','v6',
            'v7','v8','v9',
            'v10',
            'v11','v12'
          ]
        },
        // 各个容器当前显示的子模块
        pvt_isShow:{
          v1:null,
          v2:null,
          v3:null,v4:null,
          v5:null,v6:null,
          v7:null,v8:null,v9:null,
          v10:null,
          v11:null,v12:null
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
        activityName:'',
        organizerName:'',
        address:'',
        startTime:'',
        status:'',
        price:'',
        buttonDisable:''
      }
    },
    watch:{},
    computed:{
      //海报
      pvt_v1:function(){
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
      // 活动名称
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
              fontWeight:true,
              fontSize:'14px',
              indent:false,
              isClick:true
            }
          }
        }
      },
      // 主办方
      pvt_v3:function(){
        return {
          organizerLabel:{
            paraVarPair:{},
            para:{
              textData:'所属主办方:'
            },
            attr:{
              label:'span',
              textAlign:'left',
              fontWeight:false,
              fontSize:'14px',
              indent:false,
              height:'20px'
            }
          }
        }
      },
      pvt_v4:function(){
        return {
          organizerName:{
            paraVarPair:{},
            para:{
              textData:this.organizerName
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontSize:'14px',
              fontWeight:false,
              indent:false,
              height:'20px',
            }
          }
        }
      },
      // 地址
      pvt_v5:function(){
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
              height:'20px'
            }
          }
        }
      },
      pvt_v6:function(){
        return {
          addressText:{
            paraVarPair:{},
            para:{
              textData:this.address
            },
            attr:{
              label:'div',
              textAlign:'left',
              fontSize:'14px',
              fontWeight:false,
              indent:false,
              height:'20px'
            }
          }
        }
      },
      //时间
      pvt_v7:function(){
        return {
          timeLabel:{
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
              height:'20px',
            }
          }
        }
      },
      pvt_v8:function(){
        return {
          timeText:{
            paraVarPair:{},
            para:{
              textData:this.startTime
            },
            attr:{
              label:'span',
              textAlign:'left',
              fontSize:'14px',
              fontWeight:false,
              indent:false,
              height:'20px'
            }
          }
        }
      },
      pvt_v9:function(){
        return {
          statusText:{
            paraVarPair:{},
            para:{
              textData:this.status
            },
            attr:{
              label:'span',
              textAlign:'left',
              fontSize:'14px',
              fontWeight:false,
              indent:false,
              height:'20px',
              color:this.status === '已经结束'?'#909399':(this.status === '正在进行'?'##F3900D':('#FF4C00'))
            }
          }
        }
      },
      //价格
      pvt_v10:function(){
        return {
          priceText:{
            paraVarPair:{},
            para:{
              textData:this.price
            },
            attr:{
              label:'span',
              textAlign:'left',
              fontSize:'14px',
              fontWeight:true,
              indent:false,
              height:'30px',
              color:'#12B0FF'
            }
          }
        }
      },
      //按钮
      pvt_v11:function(){
        return {
          shareButton:{
            paraVarPair:{},
            para:{
              name:['分享','el-icon-share']
            },
            attr:{
              type:'text',
              size:'small'
            }
          }
        }
      },
      pvt_v12:function(){
        return {
          applyButton:{
            paraVarPair:{},
            para:{
              name:['点击报名']
            },
            attr:{
              type:'primary',
              size:'small',
              disabled:this.buttonDisable
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
              $this.activityId = null;
              $this.activityPoster = [{
                $table:'groupActivity',
                $arrField:['poster'],
                $arrValue:[null]
              }];
              $this.activityName = '';
              $this.organizerName = '';
              $this.address = '';
              $this.startTime = '';
              $this.status = '';
              $this.price = '';
              $this.buttonDisable = false;
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
                if($this.para.activityName){
                  $this.activityName = $this.para.activityName;
                }
                if($this.para.organizerName){
                  $this.organizerName = $this.para.organizerName;
                }
                if($this.para.address){
                  $this.address = $this.para.address;
                }
                if($this.para.startTime){
                  $this.startTime = $this.para.startTime;
                }
                if($this.para.status){
                  $this.status = $this.para.status;
                }
                if($this.para.price){
                  $this.price = '￥' + $this.para.price;
                }else{
                  $this.price = '免费';
                }
                if($this.para.buttonDisable){
                  $this.buttonDisable = $this.para.buttonDisable;
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
                'organizerLabel','organizerName',
                'addressLabel','addressText',
                'timeLabel','timeText','statusText',
                'priceText',
                'shareButton','applyButton'
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
      activityDetailPage(){
        this.ep.detailPageEvent(this.activityId);
      },
      shareButtonClick(){
        console.log('分享按钮');
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
          sm3:'organizerLabel',sm4:'organizerName',
          sm5:'addressLabel',sm6:'addressText',
          sm7:'timeLabel',sm8:'timeText',sm9:'statusText',
          sm10:'priceText',
          sm11:'shareButton',sm12:'applyButton'
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
                para.nStep = 'startModule_actName';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_actName':
              $this.sm[ref.sm2].startModule(function(){
                para.nStep = 'startModule_orgLabel';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_orgLabel':
              $this.sm[ref.sm3].startModule(function(){
                para.nStep = 'startModule_orgName';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_orgName':
              $this.sm[ref.sm4].startModule(function(){
                para.nStep = 'startModule_addLabel';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_addLabel':
              $this.sm[ref.sm5].startModule(function(){
                para.nStep = 'startModule_addText';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_addText':
              $this.sm[ref.sm6].startModule(function(){
                para.nStep = 'startModule_timLabel';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_timLabel':
              $this.sm[ref.sm7].startModule(function(){
                para.nStep = 'startModule_timText';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_timText':
              $this.sm[ref.sm8].startModule(function(){
                para.nStep = 'startModule_staText';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_staText':
              $this.sm[ref.sm9].startModule(function(){
                para.nStep = 'startModule_prcText';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_prcText':
              $this.sm[ref.sm10].startModule(function(){
                para.nStep = 'startModule_button1';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_button1':
              $this.sm[ref.sm11].startModule(function(){
                para.nStep = 'startModule_button2';
                if(++dbFlag === 2){
                  $this.startSubModules(successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_button2':
              $this.sm[ref.sm12].startModule(function(){
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
      shareButton_buttonClickEvent(){
        this.shareButtonClick();
      },
      applyButton_buttonClickEvent(){
        this.activityDetailPage();
      },
    }
  }
</script>
<style lang="scss" scoped>
  .listRow{
    width:100%;
    padding:5px 0 5px 0;
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
    width:150px;
    height:120px;
    overflow:hidden;
  }
  .listRow_row1_col_v2{
    width:calc(100% - 150px);
    height:120px;
  }
  .listRow_row1_2_1_col_v1{
    width:calc(100% - 100px);
    height:100%;
  }
  .listRow_row1_2_1_col_v2{
    width:100px;
    height:100%;
  }
  .listRow_row1_1_col_v1{
    width:100%;
    height:30px;
    padding:0 0 0 5px;
  }
  .listRow_row1_2_col_v1{
    width:80px;
    height:20px;
    padding:0 0 0 5px;
  }
  .listRow_row1_2_col_v2{
    width:calc(100% - 80px);
    height:20px;
  }
  .listRow_row1_3_col_v1{
    width:50px;
    height:20px;
    padding:0 0 0 5px;
  }
  .listRow_row1_3_col_v2{
    width:calc(100% - 50px);
    height:20px;
  }
  .listRow_row1_4_col_v1{
    width:50px;
    height:20px;
    padding:0 0 0 5px;
  }
  .listRow_row1_4_col_v2{
    width:100px;
    height:20px;
  }
  .listRow_row1_4_col_v3{
    width:calc(100% - 150px);
    height:20px;
  }
  .listRow_row1_5_col_v1{
    width:100%;
    height:20px;
    padding:0 0 0 5px;
  }
  .listRow_row2_1_col_v1{
    width:100%;
    height:50px;
    padding:5px 0 0 0;
  }
  .listRow_row2_2_col_v1{
    width:100%;
    height:70px;
  }
</style>
