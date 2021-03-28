<template>
  <div>
    <el-radio-group v-model="radiox" :size="attrData.size" :disabled="attrData.disabled" :text-color="attrData.textColor" :fill="attrData.fill" @change="radioClickEvent">
      <el-radio v-if="!attrData.buttonRadio" v-for="(tmp,index) in radioArr" :key="index" :label="tmp.label"  :border="attrData.border" :disabled="disabledArr[index]">{{tmp.text}}</el-radio>
      <el-radio-button v-if="attrData.buttonRadio" v-for="(tmp,index) in radioArr" :key="index" :label="tmp.label" :disabled="disabledArr[index]">{{tmp.text}}</el-radio-button>
    </el-radio-group>
  </div>
</template>
<script>
export default{
  name:'zhl_radio',
  props:['refId','para','attr'],
  inject:['sys'],
  data:function(){
    return{
      radio:{
        para:{
          $api:false,
          $isShow:false,
          $isMounted:false,
          radio:{$table:'',$field:[],$value:[0]},
          radioArr:{$table:'',$field:[],$value:[{label:0,text:'示例1'},{label:1,text:'示例2'}]}
        },
        attr:{
          buttonRadio:false,
          size:'',
          border:false,
          disabled:false,
          textColor:'',
          fill:'#409EFF',
          disabledArr:[] //禁用选项的数组
        }
      },
      radiox:0,
      radioArr:[{label:0,text:'示例1'},{label:1,text:'示例2'}],
      disabledArr:[],
      //工具内部变量
      pvt_isSubModuleStarted:false
    }
  },
  computed:{
    attrData:function(){
      if(this.attr === undefined){
        return this.radio.attr
      }else{
        return this.attr
      }
    },
    disableArrData:function(){
      return this.attrData.disabledArr
    }
  },
  watch:{
    para:{
      handler:function(val,oldVal){
        //添加库函数
        Object.assign(this,this.sys.lib);
        if(val && val.$api && val.$isShow && val.$isMounted){
          this.pvt_isSubModuleStarted = true;
          this.radioRefresh(function(){},function(error){console.log(error)});
        }
      },
      deep:true,
      immediate:true
    },
    disableArrData:{
      handler:function(val,oldVal){
        this.disabledArr = [];
        if(val && Array.isArray(val)){
          let num = 0;
          for(let i = 0;i < val.length;i++){
            if(val[i] > num){
              num = val[i];
            }
          }
          for(let j = 0;j < num;j++){
            if(val.includes(j + 1)){
              this.disabledArr.push(true);
            }else{
              this.disabledArr.push(false);
            }
          }
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
    //刷新函数
    radioRefresh:function(successCallBack,errorCallBack){
      let $this = this;
      let objectName;
      let field;
      let dbData;
      let dbFlag;
      let para = {
        successCallBack:successCallBack,
        errorCallBack:errorCallBack,
        nStep:0
      }
      para.fd = mac.mac.fd;
      if(successCallBack !== null){
        errorCallBack = para;
        successCallBack = null;
      }
      para = errorCallBack;

      while(1){
        dbFlag = 0;
        switch(para.nStep){
          case 0:
            if($this.para.radio){
              if($this.para.radio.$table){
                objectName = $this.para.radio.$table;
                dbData = {};
                field = [];
                if($this.para.radio.$value){
                  dbData[para.fd.id] = $this.para.radio.$value;
                }
                if($this.para.radio.$field && $this.para.radio.$field.length > 0){
                  field = $this.para.radio.$field;
                  for(let j = 0;j< field.length;j++){
                    if(field[j] == para.fd.id){continue}
                    dbData[field[j]] = [];
                  }
                }
                $this.sys.api.recordRead(objectName,dbData,function(){
                  if(field[0]){
                    $this.radiox = dbData[field[0]][0];
                  }
                  para.nStep = 'radioArr';
                  if(++dbFlag === 2){
                    $this.radioRefresh(successCallBack,errorCallBack)
                  }
                },para.errorCallBack)
              }else{
                if($this.para.radio.$value && $this.para.radio.$value.length > 0){
                  $this.radiox = $this.para.radio.$value[0];
                }
                para.nStep = 'radioArr';
                if(++dbFlag === 2){
                  $this.radioRefresh(successCallBack,errorCallBack);
                }
              }
            }else{
              para.nStep = 'radioArr';
              if(++dbFlag === 2){
                $this.radioRefresh(successCallBack,errorCallBack);
              }
            }
            break;
          case 'radioArr':
            if($this.para.radioArr){
              if($this.para.radioArr.$table){
                objectName = $this.para.radioArr.$table;
                dbData = {};
                field = [];
                if($this.para.radioArr.$value){
                  dbData[para.fd.id] = $this.para.radioArr.$value;
                }
                if($this.para.radioArr.$field && $this.para.radioArr.$field.length > 1){
                  field = $this.para.radioArr.$field;
                  for(let j = 0;j< field.length;j++){
                    if(field[j] == para.fd.id){continue}
                    dbData[field[j]] = [];
                  }
                }
                $this.sys.api.recordRead(objectName,dbData,function(){
                  let options=[];
                  if(dbData[para.fd.id].length > 0 && field.length > 1){
                    for(let i = 0;i < dbData[para.fd.id].length;i++){
                      options.push({
                        label:dbData[field[0]][i],
                        text:dbData[field[1]][i]
                      })
                    }
                  }
                  $this.radioArr = JSON.parse(JSON.stringify(options));
                  para.nStep = 'end';
                  if(++dbFlag === 2){
                    $this.radioRefresh(successCallBack,errorCallBack);
                  }
                },para.errorCallBack)
              }else{
                if($this.para.radioArr.$value && $this.para.radioArr.$value.length > 0){
                  for(let i = 0;i < $this.para.radioArr.$value.length;i++){
                    let obj = $this.para.radioArr.$value[i];
                    if(Object.prototype.toString.call(obj) !== '[object Object]'){
                      console.log('para中radioArr的$value结构有误');
                      return
                    }
                  }
                  $this.radioArr = JSON.parse(JSON.stringify($this.para.radioArr.$value));
                }
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.radioRefresh(successCallBack,errorCallBack);
                }
              }
            }else{
              para.nStep = 'end';
              if(++dbFlag === 2){
                $this.radioRefresh(successCallBack,errorCallBack);
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
    // 公开事件
    radioClickEvent:function(){
      if(this.callModuleEventPort){
        this.callModuleEventPort('radioClickEvent',[this.radiox]);
      }
    }
  }
}
</script>
<style scoped>
</style>
