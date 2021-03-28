<template>
  <div>
    <el-upload :show-file-list="attrData.showFileList" :multiple="attrData.multiple" :drag="attrData.drag" :limit="attrData.limit" :list-type="attrData.listType" :file-list="fileList" :on-success="uploadEvent" :action="action">
      <img v-if="imgUrl && attrData.isShowOneImg" :src="imgUrl" :style="{verticalAlign:'bottom',height:attrData.img_height}">
      <div v-if="attrData.limitText" slot="tip" class="el-upload__tip">{{attrData.limitText}}</div>
      <el-button :style="{marginLeft:attrData.isShowOneImg?'40px':''}" v-if="attrData.buttonText" size="small" type="primary">{{attrData.buttonText}}</el-button>
    </el-upload>
  </div>
</template>
<script>
export default{
  name:'zhl_upload',
  props:['refId','para','attr'],
  inject:['sys'],
  data:function(){
    return{
      upload:{
        para:{
          $api:false,
          $isShow:false,
          $isMounted:false,
          action:{$table:'',$field:[],$value:['https://jsonplaceholder.typicode.com/posts/']}
        },
        attr:{
          isShowOneImg:false,
          img_height:'', //带单位
          imgUrl:'',
          showFileList:true,
          multiple:true,
          drag:false,
          limit:3,
          buttonText:'点击上传',
          limitText:'',
          listType:''
        }
      },
      action:'https://jsonplaceholder.typicode.com/posts/',
      imgUrl:'',
      fileList:[],
      //工具内部变量
      pvt_isSubModuleStarted:false
    }
  },
  computed:{
    attrData:function(){
      if(this.attr === undefined){
        return this.upload.attr
      }else{
        return this.attr
      }
    },
    imgData:function(){
      return this.attrData.imgUrl
    }
  },
  watch:{
    para:{
      handler:function(val,oldVal){
        //添加库函数
        Object.assign(this,this.sys.lib);
        if(val && val.$api && val.$isShow && val.$isMounted){
          this.pvt_isSubModuleStarted = true;
          this.uploadRefresh(function(){},function(error){console.log(error)});
        }
      },
      deep:true,
      immediate:true
    },
    imgData:{
      handler:function(val,oldVal){
        this.imgUrl = val;
      },
      immediate:true
    }
  },
  mounted:function(){
    if(this.$parent.pvt_isMounted){
      this.$parent.pvt_isMounted[this.refId] = true;
    }
  },
  activated:function(){
    if(this.$parent.subModuleActivatedEvent){
      this.$parent.subModuleActivatedEvent(this.refId);
    }
  },
  methods: {
    //刷新事件
    uploadRefresh(successCallBack,errorCallBack){
      let $this = this;
      let objectName;
      let dbData;
      let dbFlag;
      let para = {
        successCallBack:successCallBack,
        errorCallBack:errorCallBack,
        nstep:0
      }

      if(successCallBack !== null){
        errorCallBack = para;
        successCallBack = null;
      }
      para = errorCallBack;

      while(1){
        dbFlag = 0;
        switch(para.nstep){
          case 0:
            if($this.para.action && $this.para.action.$table){
              objectName = $this.para.action.$table;
              dbData = {};
              if($this.para.action.$field && $this.para.action.$field.length > 0){
                dbData[$this.para.action.$field[0]] = [];
              }
              if($this.para.action.$value){
                dbData.id = $this.para.action.$value;
              }
              $this.sys.api.recordRead(objectName,dbData,function(){
                $this.action = dbData[$this.para.action.$field[0]][0];
                para.nstep = 'end';
                if(++dbFlag === 2){
                  $this.uploadRefresh(successCallBack,errorCallBack);
                }
              },para.errorCallBack)
            }else{
              if($this.para.action && $this.para.action.$value){
                $this.action = $this.para.action.$value[0];
              }
              para.nstep = 'end';
              if(++dbFlag === 2){
                $this.uploadRefresh(successCallBack,errorCallBack);
              }
            }
            break
          case 'end':
            para.successCallBack();
            return
        }
        if(++dbFlag === 1){
          return
        }
      }
    },
    //公开事件
    uploadEvent(response,file,fileList){
      //文件上传成功时的钩子
      this.imgUrl = '';
      if(this.attrData.isShowOneImg){
        this.imgUrl = URL.createObjectURL(file.raw);
      }
      if(this.callModuleEventPort){
        this.callModuleEventPort('uploadEvent',[this.imgUrl,file.name]);
      }
    }
  }
}
</script>
<style>
</style>
