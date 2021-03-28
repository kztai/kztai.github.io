<template>
<div class="buttonDivClass">
  <el-button class="buttonClass" :style="{width:attrData.width,height:attrData.height,backgroundImage:backgroundImg?'url(' + backgroundImg + ')':''}" :icon="(!attrData.iconIsRight && !backgroundImg)?icon:''" :loading="!backgroundImg?attrData.loading:false" :size="attrData.size" :type="attrData.type" :plain="attrData.plain" :disabled="attrData.disabled" :round="attrData.round" :circle="attrData.circle" :native-type="attrData.nativeType" @click="buttonClickEvent">
    <span v-if="!backgroundImg && name">{{name}}</span>
    <i v-if="attrData.iconIsRight && !backgroundImg && icon" :class="icon+' el-icon--right'"></i>
  </el-button>
</div>
</template>
<script>
export default{
  name:'zhl_button',
  props:['refId','para','attr'],
  inject:['sys'],
  data:function(){
    return{
      //传参结构
      button:{
        para:{
          $api:false,
          $isShow:false,
          $isMounted:false,
          name:{$table:'',$field:[],$value:['示例1']},
          icon:{$table:'',$field:[],$value:['el-icon-document']},
          img:{$table:'',$field:[],$value:[]}
        },
        attr:{
          type:'',
          plain:false,
          round:false,
          circle:false,
          iconIsRight:false,
          disabled:false,
          loading:false,
          size:'',
          nativeType:'',
          width:'',
          height:''
        }
      },
      name:'示例1',
      icon:'el-icon-document',
      //使用图片按钮时图片必须放在vue3 public文件夹中，如在public/img/a.jpg,则路径字段就为’img/a.jpg'
      backgroundImg:'',
      //工具内部变量
      pvt_isSubModuleStarted:false
    }
  },
  computed:{
    attrData:function(){
      if(this.attr === undefined){
        return this.button.attr;
      }else{
        return this.attr;
      }
    }
  },
  watch:{
    para:{
      handler:function(val,oldVal){
        //添加库函数
        Object.assign(this,this.sys.lib);
        if(val && val.$api && val.$isShow && val.$isMounted){
          this.pvt_isSubModuleStarted = true;
          this.buttonRefresh(function(){},function(error){console.log(error)});
        }
      },
      deep:true,
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
  methods:{
    //刷新数据
    buttonRefresh(successCallBack,errorCallBack){
      let $this = this;
      let para = {
        successCallBack:successCallBack,
        errorCallBack:errorCallBack,
        nStep:0
      };
      para.fd = mac.mac.fd;
      let objectName;
      let field;
      let dbData;
      let dbFlag;

      if(successCallBack !== null){
        errorCallBack = para;
        successCallBack = null;
      };
      para = errorCallBack;

      while(1){
        dbFlag = 0;
        switch(para.nStep){
          case 0:
            $this.name = '';
            $this.icon = '';
            $this.backgroundImg = '';
            if($this.para.name){
              objectName = '';
              field = [];
              dbData = {};
              if($this.para.name.$table){
                objectName = $this.para.name.$table;
              }
              if($this.para.name.$field && $this.para.name.$field.length > 0){
                field = $this.para.name.$field;
              }
              if($this.para.name.$value){
                dbData[para.fd.id] = $this.para.name.$value;
              }
              if(objectName.length > 0){
                for(let j = 0;j< field.length;j++){
                  if(field[j] == para.fd.id){continue}
                  dbData[field[j]] = [];
                }
                $this.sys.api.recordRead(objectName,dbData,function(result){
                  if(field[0]){
                    $this.name = dbData[field[0]][0];
                  }
                  para.nStep = 1;
                  if(++dbFlag === 2){
                    $this.buttonRefresh(successCallBack,errorCallBack);
                  }
                },para.errorCallBack)
              }else{
                if($this.para.name.$value && $this.para.name.$value.length > 0){
                  $this.name = $this.para.name.$value[0];
                }
                para.nStep = 1;
                if(++dbFlag === 2){
                  $this.buttonRefresh(successCallBack,errorCallBack);
                }
              }
            }else{
             para.nStep = 1;
              if(++dbFlag === 2){
                $this.buttonRefresh(successCallBack,errorCallBack);
              }
            }
            break;
          case 1:
            if($this.para.icon){
              objectName = '';
              field = [];
              dbData = {};
              if($this.para.icon.$table){
                objectName = $this.para.icon.$table;
              }
              if($this.para.icon.$field && $this.para.icon.$field.length > 0){
                field = $this.para.icon.$field;
              }
              if($this.para.icon.$value){
                dbData[para.fd.id] = $this.para.icon.$value;
              }
              if(objectName.length > 0){
                for(let j = 0;j< field.length;j++){
                  if(field[j] == para.fd.id){continue}
                  dbData[field[j]] = [];
                }
                $this.sys.api.recordRead(objectName,dbData,function(result){
                  if(field[0]){
                    $this.icon = dbData[field[0]][0];
                  }
                  para.nStep = 2;
                  if(++dbFlag === 2){
                    $this.buttonRefresh(successCallBack,errorCallBack);
                  }
                },para.errorCallBack)
              }else{
                if($this.para.icon.$value && $this.para.icon.$value.length > 0){
                  $this.icon = $this.para.icon.$value[0];
                }
                para.nStep = 2;
                if(++dbFlag === 2){
                  $this.buttonRefresh(successCallBack,errorCallBack);
                }
              }
            }else{
              para.nStep = 2;
              if(++dbFlag === 2){
                $this.buttonRefresh(successCallBack,errorCallBack);
              }
            }
            break;
          case 2:
            if($this.para.img){
              objectName = '';
              field = [];
              dbData = {};
              if($this.para.img.$table){
                objectName = $this.para.img.$table;
              }
              if($this.para.img.$field && $this.para.img.$field.length > 0){
                field = $this.para.img.$field;
              }
              if($this.para.img.$value){
                dbData[para.fd.id] = $this.para.img.$value;
              }
              if(objectName.length > 0){
                for(let j = 0;j< field.length;j++){
                  if(field[j] == para.fd.id){continue}
                  dbData[field[j]] = [];
                }
                $this.sys.api.recordRead(objectName,dbData,function(result){
                  if(field[0]){
                    $this.backgroundImg = dbData[field[0]][0];
                  }
                  para.nStep = 'end';
                  if(++dbFlag === 2){
                    $this.buttonRefresh(successCallBack,errorCallBack);
                  };
                },para.errorCallBack)
              }else{
                if($this.para.img.$value && $this.para.img.$value.length > 0){
                  $this.backgroundImg = $this.para.img.$value[0];
                }
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.buttonRefresh(successCallBack,errorCallBack);
                }
              }
            }else{
              para.nStep = 'end';
              if(++dbFlag === 2){
                $this.buttonRefresh(successCallBack,errorCallBack);
              }
            }
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
    // 公开事件
    buttonClickEvent:function(){
      if(this.callModuleEventPort){
        this.callModuleEventPort('buttonClickEvent',[]);
      }
    }
  }
}
</script>
<style scoped>
  .buttonDivClass{
    text-align:center;
  }
  .buttonClass{
    background-repeat:no-repeat;
    background-position:center center;
  }
</style>
