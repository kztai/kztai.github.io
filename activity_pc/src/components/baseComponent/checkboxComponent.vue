<template>
  <div>
    <el-checkbox-group v-model="checkboxNum" :size="attrData.size" :disabled="attrData.disabled" @change="checkboxClickEvent">
      <el-checkbox :border="attrData.border" :disabled="disabledArr[index]" v-for="(tmp,index) in checkboxArr" :key="index" :label="tmp.label">{{tmp.text}}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>
<script>
export default {
  name: "zhl_checkbox",
  props: ["refId", "para", "attr"],
  inject: ["sys"],
  data: function() {
    return {
      checkbox: {
        para: {
          checkbox: { $table: "", $field: [], $value: [[0]] },
          checkboxArr: {
            $table: "",
            $field: [],
            $value: [{ label: 0, text: "示例1" }, { label: 1, text: "示例2" }]
          }
        },
        attr: {
          size: "",
          border: true,
          disabled: false,
          disabledArr: [] //禁用选项的数组
        }
      },
      // 模块变量
      checkboxNum:[],
      checkboxArr: [{ label: 0, text: "示例1" }, { label: 1, text: "示例2" }],
      disabledArr: [],
      //工具内部变量
      pvt_isSubModuleStarted: false
    };
  },

  computed:{
    attrData:function(){
      if(this.attr === undefined){
        return this.checkbox.attr
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
          this.checkboxRefresh(function(){},function(error){console.log(error)});
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
    checkboxRefresh:function(successCallBack,errorCallBack){
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

      if(successCallBack !== null){
        errorCallBack = para;
        successCallBack = null;
      }
      para = errorCallBack;

      while(1){
        dbFlag = 0;
        switch(para.nStep){
          case 0:
            if($this.para.checkbox){
              if($this.para.checkbox.$table){
                objectName = $this.para.checkbox.$table;
                dbData = {};
                field = [];
                if($this.para.checkbox.$value){
                  dbData[mac.mac.fd.id] = $this.para.checkbox.$value;
                }
                if($this.para.checkbox.$field && $this.para.checkbox.$field.length > 0){
                  field = $this.para.checkbox.$field;
                  for(let j = 0;j< field.length;j++){
                    if(field[j] == mac.mac.fd.id){continue}
                    dbData[field[j]] = [];
                  }
                }
                $this.sys.api.recordRead(objectName,dbData,function(){
                  if(field[0]){
                    $this.checkboxNum = dbData[field[0]][0];
                  }
                  para.nStep = 'checkboxArr';
                  if(++dbFlag === 2){
                    $this.checkboxRefresh(successCallBack,errorCallBack)
                  }
                },para.errorCallBack)
              }else{
                if($this.para.checkbox.$value && $this.para.checkbox.$value.length > 0){
                  $this.checkboxNum = $this.para.checkbox.$value[0];
                }
                para.nStep = 'checkboxArr';
                if(++dbFlag === 2){
                  $this.checkboxRefresh(successCallBack,errorCallBack);
                }
              }
            }else{
              para.nStep = 'checkboxArr';
              if(++dbFlag === 2){
                $this.checkboxRefresh(successCallBack,errorCallBack);
              }
            }
            break;
          case 'checkboxArr':
            if($this.para.checkboxArr){
              if($this.para.checkboxArr.$table){
                objectName = $this.para.checkboxArr.$table;
                dbData = {};
                field = [];
                if($this.para.checkboxArr.$value){
                  dbData[mac.mac.fd.id] = $this.para.checkboxArr.$value;
                }
                if($this.para.checkboxArr.$field && $this.para.checkboxArr.$field.length > 1){
                  field = $this.para.checkboxArr.$field;
                  for(let j = 0;j< field.length;j++){
                    if(field[j] == mac.mac.fd.id){continue}
                    dbData[field[j]] = [];
                  }
                }
                $this.sys.api.recordRead(objectName,dbData,function(){
                  let options=[];
                  if(dbData[mac.mac.fd.id].length > 0 && field.length > 1){
                    for(let i = 0;i < dbData[mac.mac.fd.id].length;i++){
                      options.push({
                        label:dbData[field[0]][i],
                        text:dbData[field[1]][i]
                      })
                    }
                  }
                  $this.checkboxArr = JSON.parse(JSON.stringify(options));
                  para.nStep = 'end';
                  if(++dbFlag === 2){
                    $this.checkboxRefresh(successCallBack,errorCallBack);
                  }
                },para.errorCallBack)
              }else{
                if($this.para.checkboxArr.$value && $this.para.checkboxArr.$value.length > 0){
                  for(let i = 0;i < $this.para.checkboxArr.$value.length;i++){
                    let obj = $this.para.checkboxArr.$value[i];
                    if(Object.prototype.toString.call(obj) !== '[object Object]'){
                      console.log('para中checkboxArr的$value结构有误');
                      return
                    }
                  }
                  $this.checkboxArr = JSON.parse(JSON.stringify($this.para.checkboxArr.$value));
                }
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.checkboxRefresh(successCallBack,errorCallBack);
                }
              }
            }else{
              para.nStep = 'end';
              if(++dbFlag === 2){
                $this.checkboxRefresh(successCallBack,errorCallBack);
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
    checkboxClickEvent:function(){
      if(this.callModuleEventPort){
        this.callModuleEventPort('checkboxClickEvent',[this.checkboxNum]);
      }
    }
  }
};
</script>
<style>
</style>
