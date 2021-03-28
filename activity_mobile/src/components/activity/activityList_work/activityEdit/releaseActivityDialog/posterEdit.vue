<template>
  <div :class="{mcbPosterEdit_col:true,mcbPosterEdit_col_mcbPosterEditWindow:true,mcbPosterEdit_col_mcbPosterEditWindow_size_large:attr.size==='large',mcbPosterEdit_col_mcbPosterEditWindow_size_medium:attr.size==='medium',mcbPosterEdit_col_mcbPosterEditWindow_size_small:attr.size==='small',mcbPosterEdit_col_mcbPosterEditWindow_size_min:attr.size==='min',mcbPosterEdit_col_mcbPosterEditWindow_checked:attr.checked,mcbPosterEdit_col_mcbPosterEditWindow_disable:attr.disabled}">
    <lm2b-photo-edit
            ref="posterEdit"
            refId="posterEdit"
            v-show="pvt_isShow.mcbPosterEditWindow === 'posterEdit'"
            :paraVarPair="pvt_mcbPosterEditWindow.posterEdit.paraVarPair"
            :para="pvt_mcbPosterEditWindow.posterEdit.para"
            :attr="pvt_mcbPosterEditWindow.posterEdit.attr">
    </lm2b-photo-edit>
  </div>
</template>
<script>
  import libSys from '@/components/baseComponent/libSys.js';
  import libUpload from '@/components/baseComponent/libUpload.js';
  export default {
    components: {},
    inject: ['sys'],
    props: ['refId','para','attr','paraVarPair','number'],
    data: function() {
      return {
        activityId:null,
        pvt_subModuleMap: {
          vessel:['mcbPosterEditWindow'],
          subModule:['posterEdit'],
        },
        pvt_isShow: {
          mcbPosterEditWindow:null,
        },
        pvt_eventPortInput: ['confirmEvent'],
        posterUrl:null,
        imageName:''
      };
    },
    watch: {
    },
    computed:{
      pvt_mcbPosterEditWindow:function(){
        return {
          posterEdit:{
            paraVarPair:{
              outputImage:'posterUrl',
            },
            para:{
              outputImage:this.posterUrl,
            },
            attr:{
              imgHeight:'100%',
              imgWidth:'100%',
              fixed:false,
              imgName:this.imageName
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
          sm1:'posterEdit'
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
              $this.posterUrl = null;
              $this.imageName = '';
              $this.activityId = null;
              if(activityId){
                $this.activityId = activityId;
                $this.posterUrl = [{
                  $table:mac.mac.tb.groupActivity,
                  $arrField:[mac.mac.fd.groupActivity.poster],
                  $arrValue:[activityId]
                }];
              }
              para.nStep = 'getImageName';
              ++dbFlag;
              break;
            case 'getImageName':
              tableName = mac.mac.tb.groupActivity;
              dbData = {};
              dbData[mac.mac.fd.id] = [$this.activityId];
              dbData[mac.mac.fd.groupActivity.poster] = [];
              $this.sys.api.recordRead(tableName,dbData,function(){
                if(dbData[mac.mac.fd.groupActivity.poster][0] !== null){
                  let posterArr = dbData[mac.mac.fd.groupActivity.poster][0];
                  if(posterArr[0] && posterArr[0].fileName){
                    let lastIndex = posterArr[0].fileName.lastIndexOf('.');
                    $this.imageName = posterArr[0].fileName.substring(0,lastIndex);
                    if(posterArr[0].path){
                      // para.filePath = posterArr[0].path + '/' + posterArr[0].fileName;
                    }
                  }
                }
                para.nStep = 'showModules';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)})
              break;
            case 'showModules':
              //显示子组件
              let refId = [
                'posterEdit'
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
                para.nStep = 'startModule_imageEdit';
                if(++dbFlag === 2){
                  $this.startModule(activityId,successCallBack,errorCallBack);
                }
              });
              break;
            case 'startModule_imageEdit':
              $this.sm[ref.sm1].chooseImg();
              para.nStep = 'end';
              ++dbFlag;
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
      editSuccess:function(){
        let $this = this;
        let data = {
          objectName:[mac.mac.tb.groupActivity],
          record:[[$this.activityId]],
        };
        $this.uploadData(data,function(){
          $this.hideSelfModule($this.refId,function(){
            $this.ep.confirmEvent();
          },function(error){console.log(error)});
        },function(error){console.log(error)});
      },
      hideModule:function(){
        let $this = this;
        $this.hideSelfModule($this.refId,function(){
        },function(error){console.log(error)});
      },
      posterEdit_dataModifyEvent:function(){
        this.editSuccess();
      },
      posterEdit_editCancelEvent:function(){
        this.hideModule();
      },
    },
  };
</script>
<style lang="less" scoped>
    @import '../../../../../assets/var_sq';
  .mcbPosterEdit_container {
  }
  .mcbPosterEdit_row {
    display:flex;
    flex:1;
  }
  .mcbPosterEdit_col {
    display:flex;
    flex-direction:column;
  }
  .mcbPosterEdit_col_mcbPosterEditWindow_size_medium {
    width:@mcbPosterEdit-mcbPosterEditWindow-medium-width;
  }
  .mcbPosterEdit_col_mcbPosterEditWindow {
    border-style:@mcbPosterEdit-mcbPosterEditWindow-border-style;
    position:fixed;
    top:0;
    left:0;
    height:100%;
    z-index:1000;
    background:#000;
  }
</style>
