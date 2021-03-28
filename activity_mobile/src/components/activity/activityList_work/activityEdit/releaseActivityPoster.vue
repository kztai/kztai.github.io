<template>
  <div :class="{mcbPosterImg_col:true,mcbPosterImg_col_mcbPosterImgWindow:true,mcbPosterImg_col_mcbPosterImgWindow_size_large:attr.size==='large',mcbPosterImg_col_mcbPosterImgWindow_size_medium:attr.size==='medium',mcbPosterImg_col_mcbPosterImgWindow_size_small:attr.size==='small',mcbPosterImg_col_mcbPosterImgWindow_size_min:attr.size==='min',mcbPosterImg_col_mcbPosterImgWindow_checked:attr.checked,mcbPosterImg_col_mcbPosterImgWindow_disable:attr.disabled}">
    <div class="mcbPosterImg_row mcbPosterImg_row_row1">
      <div :class="{mcbPosterImg_col:true,mcbPosterImg_col_r1c1:true,mcbPosterImg_col_r1c1_size_large:attr.size==='large',mcbPosterImg_col_r1c1_size_medium:attr.size==='medium',mcbPosterImg_col_r1c1_size_small:attr.size==='small',mcbPosterImg_col_r1c1_size_min:attr.size==='min',mcbPosterImg_col_r1c1_checked:attr.checked,mcbPosterImg_col_r1c1_disable:attr.disabled}">
        <lm2b-image
                ref="activityPoster"
                refId="activityPoster"
                v-show="pvt_isShow.r1c1 === 'activityPoster'"
                :paraVarPair="pvt_r1c1.activityPoster.paraVarPair"
                :para="pvt_r1c1.activityPoster.para"
                :attr="pvt_r1c1.activityPoster.attr">
        </lm2b-image>
      </div>
    </div>
  </div>
</template>
<script>
  import libSys from '@/components/baseComponent/libSys.js';
  import libUpload from '@/components/baseComponent/libUpload.js';
  export default {
    components: {},
    inject: ['sys'],
    props: ['refId','para','attr','number'],
    data: function() {
      return {
        pvt_subModuleMap: {
          vessel:['r1c1'],
          subModule:['activityPoster'],
        },
        pvt_isShow: {
          r1c1:null,
        },
        pvt_eventPortInput: ['imageClickEvent'],
        activityPoster:null
      };
    },
    watch: {
    },
    computed:{
      pvt_r1c1:function(){
        return {
          activityPoster:{
            paraVarPair:{
            },
            para:{
              image:this.activityPoster
            },
            attr:{
              fit:'cover',
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
          sm1:'activityPoster'
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
              $this.activityPoster = null;
              if(activityId){
                tableName = mac.mac.tb.groupActivity;
                dbData = {};
                dbData[mac.mac.fd.id] = [activityId];
                dbData[mac.mac.fd.groupActivity.poster] = [];
                $this.sys.api.recordRead(tableName,dbData,function(){
                  if(dbData[mac.mac.fd.groupActivity.poster][0] === null){
                    $this.activityPoster = mac.defaultImage;
                    para.nStep = 'showModules';
                  }else{
                    let posterArr = dbData[mac.mac.fd.groupActivity.poster][0];
                    if(posterArr[0] && posterArr[0].fileName){
                      para.filePath = posterArr[0].fileName;
                      if(posterArr[0].path){
                        // para.filePath = posterArr[0].path + '/' + posterArr[0].fileName;
                      }
                      para.nStep = 'getImage';
                    }else{
                      $this.activityPoster = mac.defaultImage;
                      para.nStep = 'showModules';
                    }
                  }
                  if(++dbFlag === 2){
                    $this.startModule(activityId,successCallBack,errorCallBack);
                  }
                },function(error){console.log(error)})
              }else{
                para.nStep = 'showModules';
                ++dbFlag;
              }
              break;
            case 'getImage':
              // 读取图片数据
              tableName = mac.mac.tb.groupActivity;
              let fieldName = mac.mac.fd.groupActivity.poster;
              let record = activityId;
              let fieldPath = para.filePath;
              $this.sys.api.readFileBase64(tableName,fieldName,record,fieldPath,function(result){
                $this.activityPoster = result;
                para.nStep = 'showModules';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)})
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                'activityPoster'
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
                para.nStep = 'startModule_image';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_image':
              $this.sm[ref.sm1].startModule(function(){
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
      activityPoster_clickEvent:function(){
        this.ep.imageClickEvent();
      },
    },
  };
</script>
<style lang="less" scoped>
    @import '../../../../assets/var_sq';
  .mcbPosterImg_row {
    display:flex;
    flex:1;
  }
  .mcbPosterImg_col {
    display:flex;
    flex-direction:column;
  }
  .mcbPosterImg_col_mcbPosterImgWindow_size_medium {
    width:@mcbPosterImg-mcbPosterImgWindow-medium-width;
  }
  .mcbPosterImg_col_r1c1_size_medium {
    width:@mcbPosterImg-r1c1-medium-width;
    height:@mcbPosterImg-r1c1-medium-height;
    padding:@mcbPosterImg-r1c1-medium-padding;
    align-items:@mcbPosterImg-r1c1-medium-horizontal-position;
    justify-content:@mcbPosterImg-r1c1-medium-vertical-position;
  }
  .mcbPosterImg_col_r1c1 {
    border-width:@mcbPosterImg-r1c1-border-width;
    border-radius:@mcbPosterImg-r1c1-border-radius;
    overflow:hidden;
  }
</style>
