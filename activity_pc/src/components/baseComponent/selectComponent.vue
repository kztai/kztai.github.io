<template>
<div>
  <el-select v-if="!attrData.selectInputIs" v-model="value" :placeholder="attrData.placeholder" :size="attrData.size" :disabled="attrData.disabled" :filterable="isTree?false:attrData.filterable" :clearable="attrData.clearable" :popper-append-to-body="attrData.popperAppendToBody" @change="selectChangeEvent">
    <el-option v-if="isTree" key="tree" value="tree" label="" disabled class="zhl-selectTree">
      <busComponent>
        <mytree ref="selectTree" refId="selectTree" :para="treeObj.para" :attr="treeObj.attr"></mytree>
      </busComponent>
    </el-option>
    <el-option v-else v-for="(item,index) in options" :key="index" :value="item.value" :label="item.label">
    </el-option>
    <el-option v-if="attrData.addIs" key="addOption" value="addOption" disabled>
      <el-button class="zhl-selectButton" @click="addOption">新增</el-button>
    </el-option>
    <el-option v-if="attrData.emptyIs" key="emptyValue" value="emptyValue" disabled>
      <el-button class="zhl-selectButton" @click="emptyValue">清空</el-button>
    </el-option>
  </el-select>
  <div v-if="attrData.selectInputIs" class="zhl-selectInputClass">
    <el-select class="selectInputSelectClass" v-model="value" :disabled="attrData.disabled" :size="attrData.size" :popper-append-to-body="attrData.popperAppendToBody" @change="selectChangeEvent">
      <el-option v-for="(tmp,index) in options" :key="index" :value="tmp.value" :label="tmp.label"></el-option>

      <el-option v-if="attrData.addIs" key="addOption" value="addOption" disabled>
        <el-button class="zhl-selectButton" @click="addOption">新增</el-button>
      </el-option>
      <el-option v-if="attrData.emptyIs" key="emptyValue" value="emptyValue" disabled>
        <el-button class="zhl-selectButton" @click="emptyValue">清空</el-button>
      </el-option>

    </el-select>
    <el-input class="selectInputClass" suffix-icon="el-icon-" :placeholder="attrData.placeholder" :disabled="attrData.disabled" :size="attrData.size" v-model="value" @focus="inputFocusEvent" @blur="inputBlurEvent">
    </el-input>

  </div>
</div>
</template>
<script>
import mytree from '@/components/baseComponent/treeComponent';
export default{
  name:'zhl_select',
  props:['refId','para','attr'],
  inject:['sys'],
  components:{
    'busComponent':{
      template:`<div style="width:100%;height:100%"><slot></slot></div>`,
      methods:{
        //接收树组件发送的事件
        selectTree_elementLightEvent(ref,id,label){
          //接收后传给下拉选择器
          if(this.$parent.$parent.$parent.$parent.$parent.selectTree_elementLightEvent){
            this.$parent.$parent.$parent.$parent.$parent.selectTree_elementLightEvent(ref,id,label);
          }
        }
      }
    },
    mytree
  },
  data:function(){
    return{
      select:{
        para:{
          $api:false,
          $isShow:false,
          $isMounted:false,
          value:{$table:'',$field:[],$value:[0]},
          options:{$table:'',$field:[],$value:[{value:0,label:'第一行'}]},
          //如果是树组件的话，需要提供树组件的数据来源
          treeObj:{
            $table:'',
            $field:[],
            $value:[{
              para:{
                treeData:{
                  $table:'',
                  $field:[],
                  $value:[]
                },
                parentTable:{
                  $table:'',
                  $field:[],
                  $value:[]
                }
              },
              attr:{
                emptyText:'暂无数据',
                expandOnClickNode:false,
                indent:16,
                defaultExpandAll:false,
                showCheckbox:false,
                drag:false,
                headerIsShow:false
              }
            }]
          }
        },
        attr:{
          placeholder:'请选择',
          disabled:false,
          size:'', //输入框的尺寸(medium/small/mini)
          filterable:false, //关联输入
          emptyIs:false,
          addIs:false,
          clearable:false,
          popperAppendToBody:true,
          selectInputIs:false
        }
      },
      value:0,
      options:[
        {value:0,label:'第一行'},
        {value:1,label:'第二行'},
        {value:2,label:'第三行'}
      ],
      treeObj:{
        para:{
          $api:false,
          $isShow:false,
          $isMounted:false,
          treeData:{
            $table:'',
            $field:[],
            $value:[]
          },
          parentTable:{
            $table:'',
            $field:[],
            $value:[]
          }
        },
        attr:{
          emptyText:'暂无数据',
          expandOnClickNode:false,
          indent:16,
          defaultExpandAll:false,
          showCheckbox:false,
          drag:false,
          headerIsShow:false
        }
      },
      isTree:false,
      treeValue:'',
      oldValue:'',
      //工具内部变量
      pvt_isSubModuleStarted:false
    }
  },
  computed:{
    attrData:function(){
      if(this.attr === undefined){
        return this.select.attr;
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
          this.startModule(function(){},function(error){console.log(error)});
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
    //刷新下拉菜单
    startModule(successCallBack,errorCallBack){
      let $this = this;
      let para = {
        successCallBack:successCallBack,
        errorCallBack:errorCallBack,
        nStep:0
      }
      para.fd = mac.mac.fd;
      let objectName;
      let parentRecord;
      let condition;
      let field;
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
            $this.value = '';
            if($this.para.value && $this.para.value.$table){
              objectName = $this.para.value.$table;
              dbData = {};
              field = [];
              if(Array.isArray($this.para.value.$field) && $this.para.value.$field[0]){
                field = $this.para.value.$field;
                if(field[0] != para.fd.id){
                  dbData[field[0]] = [];
                }
              }
              //判断是条件查询还是id查询
              if(field[0] && Object.prototype.toString.call($this.para.value.$value) == '[object Object]'){
                if($this.para.value.$value.hasOwnProperty('parentRecord') && Array.isArray($this.para.value.$value.parentRecord)){
                  parentRecord = $this.para.value.$value.parentRecord;
                }else{
                  parentRecord = null;
                }
                if($this.para.value.$value.hasOwnProperty('condition') && typeof($this.para.value.$value.condition) == 'string'){
                  condition = $this.para.value.$value.condition;
                }else{
                  condition = '';
                }
                $this.sys.api.recordQuery(objectName,parentRecord,condition,dbData,function(){
                  $this.value = dbData[field[0]][0];
                  para.nStep = 1;
                  if(++dbFlag === 2){
                    $this.startModule(successCallBack,errorCallBack);
                  }
                },para.errorCallBack)
              }else if(field[0] && Array.isArray($this.para.value.$value) && $this.para.value.$value.length > 0){
                dbData[para.fd.id] = $this.para.value.$value;
                $this.sys.api.recordRead(objectName,dbData,function(){
                  $this.value = dbData[field[0]][0];
                  para.nStep = 1;
                  if(++dbFlag === 2){
                    $this.startModule(successCallBack,errorCallBack);
                  }
                },para.errorCallBack)
              }else{
                para.nStep = 1;
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              }
            }else{
              if($this.para.value && $this.para.value.$value && Array.isArray($this.para.value.$value)){
                $this.value = $this.para.value.$value[0];
              }
              para.nStep = 1;
              if(++dbFlag === 2){
                $this.startModule(successCallBack,errorCallBack);
              }
            }
            break;
          case 1:
            //判断加载普通列表数据还是树组件数据
            $this.isTree = false;
            if($this.para.hasOwnProperty('treeObj') && $this.para.treeObj.$value && $this.para.treeObj.$value[0]){
              $this.isTree = true;
            }
            $this.options = [];
            $this.treeObj = {
              para:{
                $api:false,
                $isShow:false,
                $isMounted:false,
                treeData:{
                  $table:'',
                  $field:[],
                  $value:[]
                },
                parentTable:{
                  $table:'',
                  $field:[],
                  $value:[]
                }
              },
              attr:{
                emptyText:'暂无数据',
                expandOnClickNode:false,
                indent:16,
                defaultExpandAll:false,
                showCheckbox:false,
                drag:false,
                headerIsShow:false
              }
            };
            if($this.isTree){
              para.nStep = 'tree';
            }else{
              para.nStep = 'options';
            }
            dbFlag += 1;
            break;
          case 'options':
            //普通下拉菜单，传入的para中必须有options这个属性
            if($this.para.options && $this.para.options.$table){
              objectName = $this.para.options.$table;
              dbData = {};
              field = [];
              if(Array.isArray($this.para.options.$field) && $this.para.options.$field.length > 1){
                field = $this.para.options.$field;
                for(let j = 0;j < field.length;j++){
                  if(field[j] == para.fd.id){continue}
                  dbData[field[j]] = [];
                }
              }
              //判断是条件查询还是id查询
              if(field.length > 1 && Object.prototype.toString.call($this.para.options.$value) == '[object Object]'){
                if($this.para.options.$value.hasOwnProperty('parentRecord') && Array.isArray($this.para.options.$value.parentRecord)){
                  parentRecord = $this.para.options.$value.parentRecord;
                }else{
                  parentRecord = null;
                }
                if($this.para.options.$value.hasOwnProperty('condition') && typeof($this.para.options.$value.condition) == 'string'){
                  condition = $this.para.options.$value.condition;
                }else{
                  condition = '';
                }
                $this.sys.api.recordQuery(objectName,parentRecord,condition,dbData,function(){
                  let optionsArr = [];
                  if(dbData[para.fd.id]){
                    for(let n = 0;n < dbData[para.fd.id].length;n++){
                      optionsArr.push({
                        id:dbData[para.fd.id][n],
                        value:dbData[field[0]][n],
                        label:dbData[field[1]][n]
                      })
                    }
                  }
                  $this.options = JSON.parse(JSON.stringify(optionsArr));
                  para.nStep = 'end';
                  if(++dbFlag === 2){
                    $this.startModule(successCallBack,errorCallBack);
                  }
                },para.errorCallBack)
              }else if(field.length > 1 && Array.isArray($this.para.options.$value) && $this.para.options.$value.length > 0){
                dbData[para.fd.id] = $this.para.options.$value;
                $this.sys.api.recordRead(objectName,dbData,function(){
                  let optionsArr = [];
                  if(dbData[para.fd.id]){
                    for(let n = 0;n < dbData[para.fd.id].length;n++){
                      optionsArr.push({
                        id:dbData[para.fd.id][n],
                        value:dbData[field[0]][n],
                        label:dbData[field[1]][n]
                      })
                    }
                  }
                  $this.options = JSON.parse(JSON.stringify(optionsArr));
                  para.nStep = 'end';
                  if(++dbFlag === 2){
                    $this.startModule(successCallBack,errorCallBack);
                  }
                },para.errorCallBack)
              }else{
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              }
            }else{
              if($this.para.options && $this.para.options.$value && Array.isArray($this.para.options.$value)){
                $this.options = JSON.parse(JSON.stringify($this.para.options.$value));
              }
              para.nStep = 'end';
              if(++dbFlag === 2){
                $this.startModule(successCallBack,errorCallBack);
              }
            }
            break;
          case 'tree':
            //树组件数据拼接
            if(Object.prototype.toString.call($this.para.treeObj.$value[0]) === '[object Object]'){
              if($this.para.treeObj.$value[0].para && $this.para.treeObj.$value[0].para.treeData){
                $this.treeObj.para.treeData = JSON.parse(JSON.stringify($this.para.treeObj.$value[0].para.treeData));
              }
              if($this.para.treeObj.$value[0].para && $this.para.treeObj.$value[0].para.parentTable){
                $this.treeObj.para.parentTable = JSON.parse(JSON.stringify($this.para.treeObj.$value[0].para.parentTable));
              }
              $this.treeObj.para.$api = true;
              $this.treeObj.para.$isShow = true;
              $this.treeObj.para.$isMounted = true;
              let attrs = $this.para.treeObj.$value[0].attr;
              if(attrs && Object.prototype.toString.call(attrs) === '[object Object]'){
                for(let i in attrs){
                  if(i != 'drag' && i != 'headerIsShow' && attrs.hasOwnProperty(i)){
                    if($this.treeObj.attr.hasOwnProperty(i)){
                      $this.treeObj.attr[i] = attrs[i];
                    }else{
                      $this.$set($this.treeObj.attr,i,attrs[i]);
                    }
                  }
                }
              }
            }
            para.nStep = 'end';
            if(++dbFlag === 2){
              $this.startModule(successCallBack,errorCallBack);
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
    //公开方法
    selectRefresh(successCallBack,errorCallBack){
      if(!this.para || !this.para.$api || !this.para.$isShow && !this.para.$isMounted){
        return
      }
      this.startModule(successCallBack,errorCallBack);
    },
    // 公开事件
    selectChangeEvent(){
      let value;
      let name;
      if(this.isTree){
        name = this.value;
        if(!name){
          this.treeValue = '';
        }
        value = this.treeValue;
      }else{
        value = this.value;
        for(let i = 0;i < this.options.length;i++){
          if(this.options[i].value === value){
            name = this.options[i].label;
            break;
          }
        }
      }
      if(this.callModuleEventPort){
        this.callModuleEventPort('selectChangeEvent',[value,name]);
      }
    },
    addOption(){
      this.$children[0].blur();
      if(this.callModuleEventPort){
        this.callModuleEventPort('addOption',[]);
      }
    },
    //私有方法
    emptyValue(){
      this.$children[0].blur();
      let oldValue = this.value;
      this.value = '';
      if(oldValue != this.value){
        this.selectChangeEvent();
      }
    },
    inputFocusEvent(){
      this.oldValue = this.value;
    },
    inputBlurEvent(){
      if(this.value != this.oldValue){
        this.selectChangeEvent();
      }
    },
    //接收子组件发送的事件
    selectTree_elementLightEvent(ref,id,label){
      if(id && id.$value){
        id = id.$value[0];
      }
      this.treeValue = id;
      if(this.value !== label){
        this.value = label;
        this.selectChangeEvent();
      }
    }
  }
}
</script>
<style>
  .zhl-selectTree{
    height:auto;
    padding:0;
  }
  .zhl-selectButton{
    height:100%;width:100%;
    position:absolute;
    left:0;
  }
  .zhl-selectInputClass{
    display:inline-block;
    position:relative;
  }
  .zhl-selectInputClass .selectInputSelectClass span.el-input__suffix{
    z-index:99;
  }
  .zhl-selectInputClass .selectInputClass{
    width:100%;
    position:absolute;top:0;left:0;
  }
</style>
