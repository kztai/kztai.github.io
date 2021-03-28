<template>
  <div class="zhl_datePicker_divClass">
    <el-date-picker class="zhl_datePicker_inputClass" :disabled="attrData.disabled" :editable="attrData.editable" :size="attrData.size" :placeholder="attrData.placeholder" :range-separator="attrData.rangeSeparator" :start-placeholder="attrData.startPlaceholder" :end-placeholder="attrData.endPlaceholder" :clearable="attrData.clearable" :type="attrData.type?attrData.type:'date'" :align="attrData.align" :unlink-panels="attrData.unlinkPanels" :picker-options="options" :format="(attrData.type == 'datetime' || attrData.type == 'datetimerange')?'':attrData.format" :value-format="(attrData.type == 'datetime' || attrData.type == 'datetimerange')?'':attrData.valueFormat" v-model="value" @change="dateValueChangeEvent">
    </el-date-picker>
  </div>
</template>
<script>
export default{
  name:'zhl-datePicker',
  props:['refId','para','attr'],
  inject:['sys'],
  data:function(){
    return{
      datePicker:{
        para:{
          value:{$table:'',$field:[],$value:['']}
        },
        attr:{
          disabled:false, //boolean 禁用
          editable:true, //boolean 文本框可输入
          clearable:true, //boolean 是否显示清除按钮
          size:'', //string 输入框尺寸 'medium / small / mini'
          placeholder:'任意日期', //string 非范围选择时的占位内容
          rangeSeparator:'至', //string 选择范围时的分隔符
          startPlaceholder:'开始时间', //string 范围选择时开始日期的占位内容
          endPlaceholder:'结束时间', //string 范围选择时结束日期的占位内容
          type:'daterange', //显示类型 year/month/date/dates/ week/datetime/datetimerange/daterange
          align:'right', //string 对齐方式,可选值'left / center / right'
          format:'yyyy-MM-dd', //string 显示在输入框中的格式
          valueFormat:'', //string 可选,绑定值的格式,不指定则绑定值为Date对象
          unlinkPanels:false, //在范围选择器里取消两个日期面板之间的联动
          shortcutsArr:{
            today:false, //非范围选择时的今天
            yesterday:false, //非范围选择时的昨天
            beforeAWeek:false, //非范围选择时的一周前
            beforeAMonth:false, //非范围选择时的一个月前
            rangeAWeek:false, //范围选择时的最近一周
            rangeAMonth:false, //范围选择时的最近一个月
            rangeThreeMonth:false, //范围选择时的最近三个月
          }, //设置快捷选项,
          disabledDate:{
            targetDate:new Date(), //目标日期(日期类型)
            direction:'after', //目标日期以前还是以后
          }, //设置禁用的日期,目标日期以前(包含目标)'before'或者以后'after'
          firstDayOfWeek:1 //周起始日
        }
      },
      value:null,
      options:{}
    }
  },
  computed:{
    attrData:function(){
      if(this.attr === undefined){
        return this.datePicker.attr
      }else{
        return this.attr
      }
    },
    //更新快捷选项对应的数据结构
    attrShortcuts:function(){
      return this.attrData.shortcutsArr
    },
    attrFirstDayOfWeek:function(){
      return this.attrData.firstDayOfWeek
    },
    attrDisabledDate:function(){
      return this.attrData.disabledDate
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
    },
    attrShortcuts:{
      handler:function(val,oldVal){
        //判断属性是否有shortcuts
        if(this.options.shortcuts){
          delete this.options.shortcuts
        }
        if(!val){
          return
        }
        for(let i in val){
          if(val.hasOwnProperty(i) && val[i]){
            this.$set(this.options,'shortcuts',[]);
            break;
          }
        }
        if(val.today){
          this.options.shortcuts.push({
            text:'今天',
            onClick(picker){
              picker.$emit('pick',new Date());
            }
          })
        }
        if(val.yesterday){
          this.options.shortcuts.push({
            text:'昨天',
            onClick(picker){
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          })
        }
        if(val.beforeAWeek){
          this.options.shortcuts.push({
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          })
        }
        if(val.beforeAMonth){
          this.options.shortcuts.push({
            text: '一月前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', date);
            }
          })
        }
        if(val.rangeAWeek){
          this.options.shortcuts.push({
            text: '最近一周',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', [start, end]);
            }
          })
        }
        if(val.rangeAMonth){
          this.options.shortcuts.push({
            text: '最近一月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 30);
              picker.$emit('pick', [start, end]);
            }
          })
        }
        if(val.rangeThreeMonth){
          this.options.shortcuts.push({
            text: '最近三个月',
            onClick(picker) {
              const end = new Date();
              const start = new Date();
              start.setTime(start.getTime() - 3600 * 1000 * 24 * 90);
              picker.$emit('pick', [start, end]);
            }
          })
        }
      },
      deep:true,
      immediate:true
    },
    attrFirstDayOfWeek:{
      handler:function(val,oldVal){
        if(this.options.firstDayOfWeek){
          delete this.options.firstDayOfWeek;
        }
        let weekNum = [1,2,3,4,5,6,7]
        if(weekNum.includes(val)){
          this.$set(this.options,'firstDayOfWeek',val);
        }
      },
      immediate:true
    },
    attrDisabledDate:{
      handler:function(val,oldVal){
        if(this.options.disabledDate){
          delete this.options.disabledDate;
        }
        if(val && val.targetDate && Object.prototype.toString.call(val.targetDate) == '[object Date]'){
          if(val.direction == 'before'){
            this.$set(this.options,'disabledDate',function(time){
              return time.getTime() < val.targetDate;
            });
          }else if(val == 'after'){
            this.$set(this.options,'disabledDate',function(time){
              return time.getTime() > val.targetDate;
            });
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
  methods: {
    //刷新数据
    startModule(successCallBack,errorCallBack){
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
            $this.value = null;
            if($this.para.value && $this.para.value.$table){
              dbData = {};
              objectName= $this.para.value.$table;
              field = [];
              if(Array.isArray($this.para.value.$field) && $this.para.value.$field[0]){
                field = $this.para.value.$field;
                if(field[0] != para.fd.id){
                  dbData[field[0]] = [];
                }
              }
              if(field[0] && Array.isArray($this.para.value.$value) && $this.para.value.$value.length > 0){
                dbData[para.fd.id] = $this.para.value.$value;
                $this.sys.api.recordRead(objectName,dbData,function(){
                  let timeData = dbData[field[0]][0];
                  if($this.attrData.type == 'daterange' || $this.attrData.type == 'datetimerange'){
                    if(Array.isArray(timeData) && timeData.length == 2){
                      if(Object.prototype.toString.call(timeData[0]) == '[object Date]' && Object.prototype.toString.call(timeData[1]) == '[object Date]'){
                        $this.value = timeData;
                      }
                    }
                  }else{
                    if(Object.prototype.toString.call(timeData) == '[object Date]'){
                      $this.value = timeData;
                    }
                  }
                  para.nstep = 'end';
                  if(++dbFlag === 2){
                    $this.startModule(successCallBack,errorCallBack);
                  }
                },para.errorCallBack)
              }else{
                para.nStep = 'end';
                dbFlag++;
              }
            }else{
              if($this.para.value.$value && $this.para.value.$value.length > 0){
                let timeData = $this.para.value.$value[0];
                if($this.attrData.type == 'daterange' || $this.attrData.type == 'datetimerange'){
                  if(Array.isArray(timeData) && timeData.length == 2){
                    if(Object.prototype.toString.call(timeData[0]) == '[object Date]' && Object.prototype.toString.call(timeData[1]) == '[object Date]'){
                      $this.value = timeData;
                    }
                  }
                }else{
                  if(Object.prototype.toString.call(timeData) == '[object Date]'){
                    $this.value = timeData;
                  }
                }
              }
              para.nStep = 'end';
              dbFlag++;
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
    dateValueChangeEvent(value){
      if(this.callModuleEventPort){
        this.callModuleEventPort('dateValueChangeEvent',[value]);
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  .zhl_datePicker_divClass{
    width:100%;
    display: inline-block;
  }
  .zhl_datePicker_inputClass{
    width:100%;
  }
</style>
