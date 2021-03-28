<template>
  <div :style="{width:attrData.width,height:attrData.filledTextarea?'100%':''}">
    <template v-if="attrData.type == 'textarea' && attrData.filledTextarea">
      <div :class="filledTextareaClass" style="height:100%">
        <textarea class="el-textarea__inner" style="height:100%;resize:none" :autofocus="attrData.autofocus" :placeholder="attrData.placeholder" :readonly="attrData.readonly" :disabled="attrData.disabled" :maxlength="attrData.maxlength" v-model="value" @focus="inputFocusEvent" @blur="inputBlurEvent"></textarea>
      </div>
    </template>
    <template v-else>
      <el-input v-model="value" :type="attrData.type" :autofocus="attrData.autofocus" :placeholder="attrData.placeholder" :disabled="attrData.disabled" :prefix-icon="attrData.prefixIcon" :suffix-icon="attrData.suffixIcon" :size="attrData.size" :autosize="attrData.autosize" :readonly="attrData.readonly" :rows="attrData.rows" :resize="attrData.resize" :maxlength="attrData.maxlength" @focus="inputFocusEvent" @blur="inputBlurEvent">
      </el-input>
    </template>
    <span class="zhlInput_errorClass" v-if="attrData.hint" v-show="error_text">{{error_text}}</span>
  </div>
</template>
<script>
export default{
  name:'zhl-input',
  props:['refId','para','attr'],
  inject:['sys'],
  data:function(){
    return{
      input:{
        para:{
          $api:false,
          $isShow:false,
          $isMounted:false,
          value:{$table:'',$field:[],$value:['示例']}
        },
        attr:{
          placeholder:'请输入内容',
          width:'',
          disabled:false,
          readonly:false,
          type:'', // 除默认text等外还有textarea
          autofocus:false, //原生属性，自动获取焦点
          prefixIcon:'el-icon-search', // 首部增加图标
          suffixIcon:'el-icon-date', // 尾部增加图标
          size:'', //除默认，large、medium、small、mini
          maxlength:'',  //number
          rows:0, //输入框行数，只对 type="textarea" 有效
          resize:'none', //控制是否能被用户缩放'none, both, horizontal, vertical'
          autosize:false, // 为true时根据文本内容自动调整高度，为对象时自定义文本域高度
          //校验属性
          hint:false, //是否有错误提示
          required:false,//不能为空
          minlength:'', //number
          genre:0, //类型(0为无需求，1为数字，2为字母，3为中文)
          floatNum:0, //小数位
          isEmail:false, //邮箱格式
          isPhone:false, //电话格式
          filledTextarea:false //是否为铺满的文本域
        }
      },
      value:'示例',
      oldValue:'',
      error_text:'',
      filledTextareaClass:'el-textarea',
      //工具内部变量
      pvt_isSubModuleStarted:false
    }
  },
  computed:{
    attrData:function(){
      if(this.attr === undefined){
        return this.input.attr
      }else{
        return this.attr
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
          this.inputRefresh();
        }
      },
      deep:true,
      immediate:true
    },
    attrData:{
      handler:function(val,oldVal){
        this.filledTextareaClass = 'el-textarea';
        if(val){
          if(val.size){
            this.filledTextareaClass += ' el-input--' + val.size;
          }
          if(val.disabled){
            this.filledTextareaClass += ' is-disabled';
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
    //刷新输入框数据
    inputRefresh(){
      let fd = mac.mac.fd;
      if(this.para.value){
        if(this.para.value.$table){
          let $this = this;
          let dbData = {};
          let table= $this.para.value.$table;
          let field = [];
          if($this.para.value.$value && $this.para.value.$value.length > 0){
            dbData[fd.id] = $this.para.value.$value;
          }
          if($this.para.value.$field && $this.para.value.$field.length > 0){
            field = $this.para.value.$field;
            for(let j = 0;j < field.length;j++){
              if(field[j] == fd.id){continue}
              dbData[field[j]] = [];
            }
          }
          $this.sys.api.recordRead(table,dbData,function(){
            if(field[0]){
              $this.value = dbData[field[0]][0];
            }
          },function(error){console.log(error)})
        }else{
          if(this.para.value.$value && this.para.value.$value.length > 0){
            this.value = this.para.value.$value[0];
          }
        }
      }
    },
    // 公开事件
    inputBlurEvent(){
      let mes = this.value;
      if(mes != this.oldValue){
        this.error_text = '';
        //验证输入后的值
        switch(1){
          case 1:
            if(this.attrData.required){
              if(mes.length == 0){
                this.error_text = '不能为空';
                break;
              }
            }
          case 1:
            if(this.attrData.minlength && mes.length < this.attrData.minlength){
              this.error_text = '长度不应小于' + this.attrData.minlength;
              break;
            }
          case 1:
            if(this.attrData.isEmail){
              //email
              let reg1 = /^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$/;
              if(!reg1.test(mes)){
                this.error_text = '邮箱格式有误';
                break;
              }
            }else if(this.attrData.isPhone){
              //phone
              let reg1 = /^1\d{10}$/;
              if(!reg1.test(mes)){
                this.error_text = '号码格式有误';
                break;
              }
            }
          case 1:
            if(this.attrData.genre && this.attrData.genre == 1){
              //数字
              let reg1 = /[^0-9-.]/g;
              if(reg1.test(mes)){
                this.error_text = '数字格式有误';
                break;
              }
              //验证-号必须在最前面,.必须只有一个，且不在第一位,验证小数点位
              if(mes.indexOf('-',1) >0){
                this.error_text = '数字格式有误';
                break;
              }else if(mes.indexOf('-',0) == 0 && mes.length <2){
                this.error_text = '数字格式有误';
                break;
              }
              let num = 0;
              for(let j = 0;j < mes.length;j++){
                if(mes[j] == '.'){num++}
              }
              if(num >1){
                this.error_text = '数字格式有误';
                break;
              }
              let reg3 = /^[-]{1}/;
              if(reg3.test(mes)){
                if(mes.indexOf('.') == 1){
                  this.error_text = '数字格式有误';
                  break;
                }
                if(mes.indexOf('.') != 2 && mes.indexOf('0') == 1){
                  this.error_text = '数字格式有误';
                  break;
                }
              }else{
                if(mes.indexOf('.') == 0){
                  this.error_text = '数字格式有误';
                  break;
                }
                if(mes.indexOf('.') > 0 && mes.indexOf('.') != 1 && mes.indexOf('0') == 0){
                  this.error_text = '数字格式有误';
                  break;
                }
              }
              if(this.attrData.floatNum && this.attrData.floatNum > 0){
                if(mes.indexOf('.') < 0){
                  this.error_text = '数字格式有误';
                  break;
                }else{
                  let index = mes.indexOf('.');
                  if(mes.length - index - 1 != this.attrData.floatNum){
                    this.error_text = '数字格式有误';
                    break;
                  }
                }
              }
            }else if(this.attrData.genre && this.attrData.genre == 2){
              //字母
              let reg1 = /[^a-zA-Z]/g;
              if(reg1.test(mes)){
                this.error_text = '字母格式有误';
                break;
              }
            }else if(this.attrData.genre && this.attrData.genre == 3){
              //中文
              let reg1 = /[^\u4E00-\u9FA5]/g;
              if(reg1.test(mes)){
                this.error_text = '中文格式有误';
                break;
              }
            }
        }
      }
      this.oldValue = '';
      //发事件到父组件
      let bola = false;
      if(this.error_text.length > 0){
        bola = true;
      }
      if(this.callModuleEventPort){
        this.callModuleEventPort('inputBlurEvent',[this.value,bola]);
      }
    },
    inputFocusEvent(){
      // 聚焦事件
      this.oldValue = this.value;
      if(this.callModuleEventPort){
        this.callModuleEventPort('inputFocusEvent',[]);
      }
    }
  }
}
</script>
<style lang="scss">
.zhlInput_errorClass{
  display:block;
  text-align:left;
  color:$baseComponent-input-error-color;
  font-size:$baseComponent-input-error-fontsize;
}
</style>
