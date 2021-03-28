<template>
  <div :class="{mcAddressInMap_col:true,mcAddressInMap_col_mcAddressInMapWindow:true,mcAddressInMap_col_mcAddressInMapWindow_size_large:attr.size==='large',mcAddressInMap_col_mcAddressInMapWindow_size_medium:attr.size==='medium',mcAddressInMap_col_mcAddressInMapWindow_size_small:attr.size==='small',mcAddressInMap_col_mcAddressInMapWindow_size_min:attr.size==='min',mcAddressInMap_col_mcAddressInMapWindow_checked:attr.checked,mcAddressInMap_col_mcAddressInMapWindow_disable:attr.disabled}">

    <div class="mcAddressInMap_row mcAddressInMap_row_row3">
      <div :class="{mcAddressInMap_col:true,mcAddressInMap_col_r1c1:true,mcAddressInMap_col_r1c1_size_large:attr.size==='large',mcAddressInMap_col_r1c1_size_medium:attr.size==='medium',mcAddressInMap_col_r1c1_size_small:attr.size==='small',mcAddressInMap_col_r1c1_size_min:attr.size==='min',mcAddressInMap_col_r1c1_checked:attr.checked,mcAddressInMap_col_r1c1_disable:attr.disabled}">

        <div class="mcAddressInMap_row mcAddressInMap_row_row4">
          <div :class="{mcAddressInMap_col:true,mcAddressInMap_col_r1_1c1:true,mcAddressInMap_col_r1_1c1_size_large:attr.size==='large',mcAddressInMap_col_r1_1c1_size_medium:attr.size==='medium',mcAddressInMap_col_r1_1c1_size_small:attr.size==='small',mcAddressInMap_col_r1_1c1_size_min:attr.size==='min',mcAddressInMap_col_r1_1c1_checked:attr.checked,mcAddressInMap_col_r1_1c1_disable:attr.disabled}">

            <lm2b-button
                    ref="backButton"
                    refId="backButton"
                    v-show="pvt_isShow.r1_1c1 === 'backButton'"
                    :paraVarPair="pvt_r1_1c1.backButton.paraVarPair"
                    :para="pvt_r1_1c1.backButton.para"
                    :attr="pvt_r1_1c1.backButton.attr">
            </lm2b-button>
          </div>
          <div :class="{mcAddressInMap_col:true,mcAddressInMap_col_r1_1c2:true,mcAddressInMap_col_r1_1c2_size_large:attr.size==='large',mcAddressInMap_col_r1_1c2_size_medium:attr.size==='medium',mcAddressInMap_col_r1_1c2_size_small:attr.size==='small',mcAddressInMap_col_r1_1c2_size_min:attr.size==='min',mcAddressInMap_col_r1_1c2_checked:attr.checked,mcAddressInMap_col_r1_1c2_disable:attr.disabled}">

            <lm2b-link-text
                    ref="mapTitleText"
                    refId="mapTitleText"
                    v-show="pvt_isShow.r1_1c2 === 'mapTitleText'"
                    :paraVarPair="pvt_r1_1c2.mapTitleText.paraVarPair"
                    :para="pvt_r1_1c2.mapTitleText.para"
                    :attr="pvt_r1_1c2.mapTitleText.attr">
            </lm2b-link-text>
          </div>
          <div :class="{mcAddressInMap_col:true,mcAddressInMap_col_r1_1c3:true,mcAddressInMap_col_r1_1c3_size_large:attr.size==='large',mcAddressInMap_col_r1_1c3_size_medium:attr.size==='medium',mcAddressInMap_col_r1_1c3_size_small:attr.size==='small',mcAddressInMap_col_r1_1c3_size_min:attr.size==='min',mcAddressInMap_col_r1_1c3_checked:attr.checked,mcAddressInMap_col_r1_1c3_disable:attr.disabled}">

            <lm2b-button
                    ref="finishButton"
                    refId="finishButton"
                    v-show="pvt_isShow.r1_1c3 === 'finishButton'"
                    :paraVarPair="pvt_r1_1c3.finishButton.paraVarPair"
                    :para="pvt_r1_1c3.finishButton.para"
                    :attr="pvt_r1_1c3.finishButton.attr">
            </lm2b-button>
          </div>
        </div>
      </div>
    </div>
    <div class="mcAddressInMap_row mcAddressInMap_row_row2">
      <div :class="{mcAddressInMap_col:true,mcAddressInMap_col_r2c1:true,mcAddressInMap_col_r2c1_size_large:attr.size==='large',mcAddressInMap_col_r2c1_size_medium:attr.size==='medium',mcAddressInMap_col_r2c1_size_small:attr.size==='small',mcAddressInMap_col_r2c1_size_min:attr.size==='min',mcAddressInMap_col_r2c1_checked:attr.checked,mcAddressInMap_col_r2c1_disable:attr.disabled}">

        <lm2b-amap
                ref="addressInMap"
                refId="addressInMap"
                v-show="pvt_isShow.r2c1 === 'addressInMap'"
                :paraVarPair="pvt_r2c1.addressInMap.paraVarPair"
                :para="pvt_r2c1.addressInMap.para"
                :attr="pvt_r2c1.addressInMap.attr">
        </lm2b-amap>
      </div>
    </div>
    <div class="mcAddressInMap_row4">
      <confirm-dialog
              ref="saveDataDia"
              refId="saveDataDia"
              v-show="pvt_isShow.r3c1 === 'saveDataDia'"
              :paraVarPair="pvt_r3c1.saveDataDia.paraVarPair"
              :para="pvt_r3c1.saveDataDia.para"
              :attr="pvt_r3c1.saveDataDia.attr">
      </confirm-dialog>
    </div>
  </div>
</template>
<script>
  import libSys from '@/components/baseComponent/libSys.js';
  import libUpload from '@/components/baseComponent/libUpload.js';
  import { Dialog } from 'vant';
  import confirmDialog from '../confirmDialog.vue';
  export default {
    components: {confirmDialog},
    inject: ['sys'],
    props: ['refId','para','attr','paraVarPair','number'],
    data: function() {
      return {

        pvt_subModuleMap: {
          vessel:['r2c1','r1_1c1','r1_1c2','r1_1c3','r3c1'],
          subModule:['addressInMap','backButton','mapTitleText','finishButton','saveDataDia'],
        },
        pvt_isShow: {
          r2c1:null,
          r1_1c1:null,
          r1_1c2:null,
          r1_1c3:null,
          r3c1:null
        },
        pvt_eventPortInput: ['confirmEvent'],
        place:null,
        mapHeight:null,
        activityId:null
      };
    },
    watch: {
    },
    computed:{
      pvt_r2c1:function(){
        return {
          addressInMap:{
            paraVarPair:{
              value:'place'
            },
            para:{
              value:this.place,
            },
            attr:{
              funtionType:'district',
              height:this.mapHeight
            },
          },
        };
      },
      pvt_r1_1c1:function(){
        return {
          backButton:{
            paraVarPair:{
            },
            para:{
              name:['返回','van-icon-arrow-left'],
            },
            attr:{
              type:'text',
            },
          },
        };
      },
      pvt_r1_1c2:function(){
        return {
          mapTitleText:{
            paraVarPair:{
            },
            para:{
              textData:'活动举办的位置',
            },
            attr:{
              label:'div',
              textAlign:'center',
              fontWeight:true,
              height:'42px',
              color:'#333333',
              fontSize:'18px',
              background:'transparent'
            },
          },
        };
      },
      pvt_r1_1c3:function(){
        return {
          finishButton:{
            paraVarPair:{
            },
            para:{
              name:['完成'],
            },
            attr:{
              type:'primary',
              width:'60px',
              height:'35px',
            },
          },
        };
      },
      pvt_r3c1:function(){
        return {
          saveDataDia:{
            paraVarPair:{
            },
            para:{
            },
            attr:{
              size:'medium'
            },
          },
        };
      },
    },
    created: function () {
      Object.assign(this, libSys,libUpload);
    },
    mounted: function () {
      this.pvt_initSysData();
    },
    methods: {
      startModule:function(activityId,successCallBack,errorCallBack){
        let $this = this;
        let para = {
          successCallBack:successCallBack,
          errorCallBack:errorCallBack,
          nStep:0
        }
        let dbFlag;
        let tableName;
        let dbData;
        let ref = {
          sm1:'backButton',
          sm2:'finishButton',
          sm3:'mapTitleText',
          sm4:'addressInMap'
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
              // 初始化数据
              $this.place = null;
              $this.mapHeight = (window.screen.height - 42) + 'px';
              $this.oldPlace = ['','',''];
              if(activityId){
                $this.activityId = activityId;
                tableName = mac.mac.tb.groupActivity;
                dbData = {};
                dbData[mac.mac.fd.id] = [$this.activityId];
                dbData[mac.mac.fd.groupActivity.place] = [];
                $this.sys.api.recordRead(tableName,dbData,function(){
                  //{"id":[5,107,1069],"name":["广东省","深圳市","宝安区"],"place":"甲岸科技园","lng":113.938183,"lat":22.531669}
                  if(dbData[mac.mac.fd.groupActivity.place][0] !== null){
                    let placeArr = dbData[mac.mac.fd.groupActivity.place][0];
                    $this.place = {
                      lng:'', // 经度
                      lat:'', // 纬度
                      province:"",//省
                      city:"", //市
                      district:"",//区
                      address:"" //详细地址
                    };
                    if(placeArr.lng){
                      $this.place.lng = placeArr.lng;
                    }
                    if(placeArr.lat){
                      $this.place.lat = placeArr.lat;
                    }
                    if(placeArr.name){
                      for(let i = 0;i < 3;i++){
                        if(placeArr.name[i]){
                          if(i === 0){
                            $this.place.province = placeArr.name[0];
                          }else if(i === 1){
                            $this.place.city = placeArr.name[1];
                          }else if(i === 2){
                            $this.place.district = placeArr.name[2];
                          }
                        }else{
                          break;
                        }
                      }
                    }
                    if(placeArr.place){
                      $this.place.address = placeArr.place;
                    }
                    $this.oldPlace = [$this.place.lng,$this.place.lat,$this.place.address];
                  }
                  para.nStep = 'showModules';
                  if(++dbFlag === 2){
                    $this.startModule(activityId,successCallBack,errorCallBack);
                  }
                },function(error){console.log(error)})
              }else{
                para.nStep = 'showModules';
                ++dbFlag;
              }
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                'backButton','finishButton','mapTitleText','addressInMap'
              ];
              $this.showSubModule(refId,true,function(){
                para.nStep = 'forceUpdateData';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'forceUpdateData':
              $this.forceUpdateData(function(){
                para.nStep = 'startModule_backButton';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_backButton':
              $this.sm[ref.sm1].startModule(function(){
                para.nStep = 'startModule_titleText';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_titleText':
              $this.sm[ref.sm2].startModule(function(){
                para.nStep = 'startModule_finishButton';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_finishButton':
              $this.sm[ref.sm3].startModule(function(){
                para.nStep = 'startModule_map';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              },para.errorCallBack);
              break;
            case 'startModule_map':
              $this.sm[ref.sm4].startModule(function(){
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
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
      showSaveDialog:function(){
        let $this = this;
        $this.showSubModule('saveDataDia',true,function(){
          let dialogData = {
            title:'是否保存修改后的活动地址?',
            btnText:['不了','保存']
          };
          $this.sm['saveDataDia'].startModule(dialogData,function(){
          },function(error){console.log(error)});
        },function(error){console.log(error)});
      },
      finishButtonClick:function(){
        this.makeSure(function(){},function(error){console.log(error)});
      },
      makeSure(successCallBack,errorCallBack){
        let $this = this;
        let para = {
          successCallBack: successCallBack,
          errorCallBack: errorCallBack,
          nStep: 0
        }
        let tableName;
        let dbData;
        let dbFlag;

        if(successCallBack !== null){
          errorCallBack = para;
          successCallBack = null;
        }
        para = errorCallBack;

        while(1){
          dbFlag = 0;
          switch(para.nStep){
            case 0:
              if($this.place.lng === $this.oldPlace[0] &&
                $this.place.lat === $this.oldPlace[1] &&
                $this.place.address === $this.oldPlace[2]){
                para.nStep = 'end';
              }else{
                //若未填写相关数据给出提示
                let errorText = '';
                if($this.place.lng){
                  if($this.place.province){
                    if(!$this.place.address){
                      errorText = '请填写详细地址';
                    }
                  }else{
                    errorText = '请选择省市区';
                  }
                }else{
                  errorText = '请选择地址';
                }
                if(errorText){
                  Dialog.alert({
                    message: errorText
                  }).then(() => {
                    // on close
                  });
                  return;
                }else{
                  para.nStep = 'modifyData';
                }
              }
              ++dbFlag;
              break;
            case 'modifyData':
              tableName = mac.mac.tb.groupActivity;
              dbData = {};
              dbData[mac.mac.fd.id] = [$this.activityId];
              let placeArr = {
                "id":[null,null,null],
                "name":[$this.place.province,$this.place.city,$this.place.district],
                "place":$this.place.address,
                "lng":$this.place.lng,
                "lat":$this.place.lat,
              };
              dbData[mac.mac.fd.groupActivity.place] = [placeArr];
              $this.sys.api.recordModify(tableName,dbData,function(){
                para.nStep = 'upload';
                if(++dbFlag === 2){
                  $this.makeSure(successCallBack,errorCallBack);
                }
              },para.errorCallBack)
              break;
            case 'upload':
              let data = {
                objectName:[mac.mac.tb.groupActivity],
                record:[[$this.activityId]],
              };
              $this.uploadData(data,function(){
                $this.ep.confirmEvent();
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.makeSure(successCallBack,errorCallBack);
                }
              },function(error){console.log(error)});
            case 'end':
              $this.hideSelfModule($this.refId,function(){
              },function(error){console.log(error)});
              para.successCallBack();
              return
          }
          if(++dbFlag === 1){
            return
          }
        }
      },
      saveData:function(refId){
        this.finishButtonClick();
      },
      hideModule:function(refId){
        let $this = this;
        $this.hideSelfModule($this.refId,function(){
        },function(error){console.log(error)});
      },
      backButton_buttonClickEvent:function(){
        this.showSaveDialog();
      },
      finishButton_buttonClickEvent:function(){
        this.finishButtonClick();
      },
      saveDataDia_confirmEvent:function(refId){
        this.saveData(refId);
      },
      saveDataDia_cancelEvent:function(refId){
        this.hideModule(refId);
      },
    },
  };
</script>
<style lang="less" scoped>
    @import '../../../../../assets/var_sq';
  .mcAddressInMap_container {
  }
  .mcAddressInMap_row {
    display:flex;
    /*flex:1;*/
  }
  .mcAddressInMap_col {
    display:flex;
    flex-direction:column;
  }
  .mcAddressInMap_col_mcAddressInMapWindow_size_medium {
    width:@mcAddressInMap-mcAddressInMapWindow-medium-width;
    height:@mcAddressInMap-mcAddressInMapWindow-medium-height;
  }
  .mcAddressInMap_col_mcAddressInMapWindow {
    background-color:mix(@mcAddressInMap-mcAddressInMapWindow-background-color,#fff,@mcAddressInMap-mcAddressInMapWindow-background-color-opacity);
    position:fixed;
    top:0;
    left:0;
    height:100%;
    z-index:1000;
  }
  .mcAddressInMap_col_r2c1{
    margin:42px 0 0 0;
  }
  .mcAddressInMap_col_r2c1_size_medium {
    width:@mcAddressInMap-r2c1-medium-width;
  }
  .mcAddressInMap_col_r1c1{
    position:absolute;
    top:0;
    left:0;
    box-sizing:border-box;
  }
  .mcAddressInMap_col_r1c1_size_medium {
    width:@mcAddressInMap-r1c1-medium-width;
    height:@mcAddressInMap-r1c1-medium-height;
  }
  .mcAddressInMap_col_r1_1c1_size_medium {
    width:@mcAddressInMap-r1_1c1-medium-width;
    height:@mcAddressInMap-r1_1c1-medium-height;
    align-items:@mcAddressInMap-r1_1c1-medium-horizontal-position;
    justify-content:@mcAddressInMap-r1_1c1-medium-vertical-position;
    box-sizing:border-box;
  }
  .mcAddressInMap_col_r1_1c2_size_medium {
    width:@mcAddressInMap-r1_1c2-medium-width;
    height:@mcAddressInMap-r1_1c2-medium-height;
    align-items:@mcAddressInMap-r1_1c2-medium-horizontal-position;
    justify-content:@mcAddressInMap-r1_1c2-medium-vertical-position;
    box-sizing:border-box;
  }
  .mcAddressInMap_col_r1_1c3_size_medium {
    width:@mcAddressInMap-r1_1c3-medium-width;
    padding:@mcAddressInMap-r1_1c3-medium-padding;
    height:@mcAddressInMap-r1_1c3-medium-height;
    align-items:@mcAddressInMap-r1_1c3-medium-horizontal-position;
    justify-content:@mcAddressInMap-r1_1c3-medium-vertical-position;
    box-sizing:border-box;
  }
</style>
