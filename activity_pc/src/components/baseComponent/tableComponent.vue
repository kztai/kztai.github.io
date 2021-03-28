<template>
<div style="position:relative" :data-id="refId">
  <div class="tableZhl_operaTitle" v-show="attrData.handleIsShow">
    <el-button @click="addNewData" :size="attrData.handleSize?attrData.handleSize:'mini'" type="primary" icon="el-icon-plus" title="添加一行"></el-button>
    <el-button @click="selectionIsShow" :size="attrData.handleSize?attrData.handleSize:'mini'" v-if="!attrData.selectNoShow" type="primary" icon="el-icon-news" title="弹出多选列"></el-button>
    <el-button @click="deleteRowsEvent" :size="attrData.handleSize?attrData.handleSize:'mini'" type="primary" icon="el-icon-close" title="删除选中"></el-button>
  </div>
  <el-table :cell-style="attrData.cellStyle" :header-cell-style="attrData.headerStyle" :header-cell-class-name="headerType" :stripe="attrData.stripe" :border="attrData.border" :max-height="attrData.maxHeight" :data="tableData" @selection-change="handleSelectionChange">
    <el-table-column type="selection" :width="attrData.selectWidth" v-if="selection"></el-table-column>
    <el-table-column :resizable="false" v-for="(item,index) in attrData.tableHeader" :key="refId + index" :width="item.width" :prop="item.prop" :label="item.label">
      <template slot-scope="scope">
        <busComponent>
          <!--特殊单元格-->
          <template v-if="specialObj.hasOwnProperty(scope.$index+item.prop)">
            <!--输入框-->
            <zhlInput v-if="specialObj[scope.$index+item.prop].name == 'input'" :ref="specialObj[scope.$index+item.prop].ref" :refId="specialObj[scope.$index+item.prop].ref" :para="{$api:true,$isShow:true,$isMounted:true,value:{$table:'',$field:[],$value:[scope.row[item.prop]]}}" :attr="specialObj[scope.$index+item.prop].attr"></zhlInput>
            <!--表达式输入框-->
            <zhlExpress class="tableExpressClass" v-else-if="specialObj[scope.$index+item.prop].name =='express'" :ref="specialObj[scope.$index+item.prop].ref" :refId="specialObj[scope.$index+item.prop].ref" :para="{$api:true,$isShow:true,$isMounted:true,expInputData:specialObj[scope.$index+item.prop].expInputData,defaultVal:{$table:'',$field:[],$value:[scope.row[item.prop]]}}" :attr="specialObj[scope.$index+item.prop].attr"></zhlExpress>
            <!--选择器-->
            <zhlSelect v-else-if="specialObj[scope.$index+item.prop].name == 'select'" :ref="specialObj[scope.$index+item.prop].ref" :refId="specialObj[scope.$index+item.prop].ref" :para="{$api:true,$isShow:true,$isMounted:true,value:{$table:'',$field:[],$value:[scope.row[item.prop]]},options:specialObj[scope.$index+item.prop].options,treeObj:specialObj[scope.$index+item.prop].treeObj}" :attr="specialObj[scope.$index+item.prop].attr"></zhlSelect>
            <!--文字显示-->
            <span v-else @click="popModule($event,specialObj[scope.$index+item.prop].name,scope.$index,item.prop)">{{scope.row[item.prop]}}</span>
          </template>
          <!--普通单元格-->
          <template v-else>
            <zhlInput v-if="item.name=='input'" :ref="'tableInput__R' + scope.$index+'C'+item.prop" :refId="'tableInput__R' + scope.$index+'C'+item.prop" :para="{$api:true,$isShow:true,$isMounted:true,value:{$table:'',$field:[],$value:[scope.row[item.prop]]}}" :attr="defaultObj[item.prop].attr"></zhlInput>
            <zhlExpress class="tableExpressClass" v-else-if="item.name=='express'" :ref="'tableExpress__R' + scope.$index+'C'+item.prop" :refId="'tableExpress__R' + scope.$index+'C'+item.prop" :para="{$api:true,$isShow:true,$isMounted:true,expInputData:defaultObj[item.prop].expInputData,defaultVal:{$table:'',$field:[],$value:[scope.row[item.prop]]}}" :attr="defaultObj[item.prop].attr"></zhlExpress>
            <zhlSelect v-else-if="item.name=='select'" :ref="'tableSelect__R' + scope.$index+'C'+item.prop" :refId="'tableSelect__R' + scope.$index+'C'+item.prop" :para="{$api:para.$api,$isShow:para.$isShow,$isMounted:para.$isMounted,value:{$table:'',$field:[],$value:[scope.row[item.prop]]},options:defaultObj[item.prop].options,treeObj:defaultObj[item.prop].treeObj}" :attr="defaultObj[item.prop].attr"></zhlSelect>
            <span v-else @click="popModule($event,item.name,scope.$index,item.prop)">{{scope.row[item.prop]}}</span>
          </template>
        </busComponent>
      </template>
    </el-table-column>
  </el-table>
  <div class="tableZhl_textareaPop" v-show="pop.isShow" :style="{top:pop.top+'px',left:pop.left+'px'}">
    <i class="el-icon-close" @click="popNoShow"></i>
    <el-input type="textarea" resize="none" rows="6" v-model="pop.value" placeholder="请在文本域中输入新的值" class="textareaInput"></el-input>
    <el-button type="success" size="mini" @click="saveData">确认</el-button>
    <el-button type="warning" size="mini" @click="cleanData" class="textareaButton">取消</el-button>
  </div>
  <div class="tableZhl_maskClass" v-show="maskIs"></div>
</div>
</template>
<script>
  import zhlInput from '@/components/baseComponent/inputComponent';
  import zhlSelect from '@/components/baseComponent/selectComponent';
  import zhlExpress from '@/components/baseComponent/expressionInputComponent';
  export default{
  name:'zhl_table',
  props:['refId','para','attr'],
  inject:['sys'],
  components:{
    'busComponent':{
        template:`<div style="width:100%;height:100%"><slot></slot></div>`,
        methods:{
          //输入框组件
          tableInput_inputBlurEvent(ref,value,bola){
            if(this.$parent.$parent.$parent.tableInput_inputBlurEvent){
              this.$parent.$parent.$parent.tableInput_inputBlurEvent(ref,value,bola);
            }
          },
          //表达式
          tableExpress_expressionInputblur(ref,mes1,mes2){
            if(this.$parent.$parent.$parent.tableExpress_expressionInputblur){
              this.$parent.$parent.$parent.tableExpress_expressionInputblur(ref,mes1,mes2);
            }
          },
          //下拉选择器
          tableSelect_selectChangeEvent:function(ref,value){
            if(this.$parent.$parent.$parent.tableSelect_selectChangeEvent){
              this.$parent.$parent.$parent.tableSelect_selectChangeEvent(ref,value);
            }
          },
          tableSelect_addOption:function(ref,mes){
            if(this.$parent.$parent.$parent.tableSelect_addOption){
              this.$parent.$parent.$parent.tableSelect_addOption(ref,mes);
            }
          }
        }
      },
    zhlInput,
    zhlSelect,
    zhlExpress
  },
  data:function(){
    return{
      table:{
        para:{
          $api:false,
          $isShow:false,
          $isMounted:false,
          tableData:{
            $table:'',$field:[],
            $value:[
              {number:1,name:'程某',age:'15',address:'江西',grade:'75',physical:'1'}
            ]
          },
          parentRecord:{$table:'',$field:[],$value:['']}
        },
        attr:{
          //表格表头
          tableHeader:[
            {label:'序号',prop:'number',name:'number',default:{value:1}},
            {label:'名称',prop:'name',name:'span',default:{value:'某某'}},
            {label:'住址',prop:'address',name:'textarea',default:{value:'北京'}},
            {label:'年龄',prop:'age',name:'input',default:{value:'18',attr:{}}},
            {label:'成绩',prop:'grade',name:'express',default:{value:'60',variableArr:[],attr:{}}},
            {label:'体育',prop:'physical',name:'select',default:{value:'0',
              options:[{value:'0',label:'足球'},{value:'1',label:'篮球'}],
              treeObj:{para:{},attr:{}},
              attr:{}}
            },
          ],
          //特殊单元格数据
          specialArr:[],
          handleIsShow:true,
          handleSize:'',
          selection:false,
          border:true,
          stripe:false,
          headerStyle:{textAlign:'center'},
          cellStyle:{},
          maxHeight:300,
          selectNoShow:false,
          selectWidth:'',
          headerType:'primary' //表头样式,除默认外还有,'primary','info'
        }
      },
      //表格数据结构
      tableData:[
        {index:0,number:1,name:'程某',age:'15',address:'江西',grade:'75',physical:'1'},
        {index:1,number:2,name:'李某',age:'15',address:'广西',grade:'85',physical:'0'},
        {index:2,number:3,name:'王某',age:'18',address:'北京',grade:'85',physical:'1'}
      ],
      parentRecord:'', //父表记录
      headerType:'', //表头样式
      selection:false,
      multipleSelection:[], //选中的行
      specialObj:{},
      defaultObj:{},
      specialArr:[], //保存外部传入的特殊单元格数据
      //文本域对话框
      oldValue:'', // 保存旧值
      pop:{row:'',column:'',value:'',isShow:false,top:'',left:''},
      //遮罩层
      maskIs:false,
      //工具内部变量
      pvt_isSubModuleStarted:false
    }
  },
  computed:{
    attrData:function(){
      if(this.attr === undefined){
        return this.table.attr
      }else{
        return this.attr
      }
    },
    headerTypeData:function(){
      return this.attrData.headerType
    },
    selectionData:function(){
      return this.attrData.selection
    },
    attrSpecials:function(){
      if(this.attrData.specialArr){
        return this.attrData.specialArr
      }else{
        return []
      }
    },
    attrDefaults:function(){
      return this.attrData.tableHeader
    }
  },
  watch:{
    headerTypeData:{
      handler:function(val,oldVal){
        if(val == 'primary'){
          this.headerType = 'headerClass-primary';
        }else if(val == 'info'){
          this.headerType = 'headerClass-info';
        }else{
          this.headerType = '';
        }
      },
      immediate:true
    },
    selectionData:{
      handler:function(val,oldVal){
        this.selection = val;
      },
      immediate:true
    },
    attrSpecials:{
      handler:function(newVal,oldVal){
        this.specialArr = JSON.parse(JSON.stringify(newVal));
        this.specialRefresh();
      },
      deep:true,
      immediate:true
    },
    attrDefaults:{
      handler:function(){
        this.defaultRefresh();
      },
      deep:true,
      immediate:true
    },
    para:{
      handler:function(val,oldVal){
        //添加库函数
        Object.assign(this,this.sys.lib);
        if(val && val.$api && val.$isShow && val.$isMounted){
          this.pvt_isSubModuleStarted = true;
          this.tableRefresh(function(){},function(error){console.log(error)});
        }
      },
      deep:true,
      immediate:true
    },
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
    //表格刷新
    tableRefresh(successCallBack,errorCallBack){
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
            //获取单元格值
            $this.tableData = [];
            if($this.para.tableData && $this.para.tableData.$table){
              objectName = $this.para.tableData.$table;
              dbData = {};
              field = [];
              if($this.para.tableData.$field && $this.para.tableData.$field.length > 0){
                field= $this.para.tableData.$field;
                for(let i = 0;i < field.length;i++){
                  if(field[i] == para.fd.id){continue}
                  dbData[field[i]] = [];
                }
              }
              if($this.para.tableData.$value && $this.para.tableData.$value.length > 0){
                dbData[para.fd.id] = $this.para.tableData.$value;
                $this.sys.api.recordRead(objectName,dbData,function(){
                  let secondData = [];
                  if(dbData[para.fd.id] && field.length > 0){
                    for(let i = 0;i < dbData[para.fd.id].length;i++){
                      let secondOne = {};
                      secondOne.id = dbData[para.fd.id][i];
                      for(let j = 0;j <field.length;j++){
                        secondOne[field[j]] = dbData[field[j]][i];
                      }
                      secondData.push(secondOne);
                    }
                  }
                  for(let i = 0;i < secondData.length;i++){
                    secondData[i].index = i;
                  }
                  $this.tableData = secondData;
                  para.nStep = 'parentRecord';
                  if(++dbFlag === 2){
                    $this.tableRefresh(successCallBack,errorCallBack);
                  }
                },para.errorCallBack)
              }else{
                para.nStep = 'parentRecord';
                if(++dbFlag === 2){
                  $this.tableRefresh(successCallBack,errorCallBack);
                }
              }
            }else{
              if($this.para.tableData && $this.para.tableData.$value){
                let secondData = JSON.parse(JSON.stringify($this.para.tableData.$value));
                for(let i = 0;i < secondData.length;i++){
                  if(Object.prototype.toString.call(secondData[i]) === '[object Object]'){
                    secondData[i].index = i;
                  }
                }
                $this.tableData = secondData;
              }
              para.nStep = 'parentRecord';
              if(++dbFlag === 2){
                $this.tableRefresh(successCallBack,errorCallBack);
              }
            }
            break;
          case 'parentRecord':
            $this.parentRecord = '';
            if($this.para.parentRecord && $this.para.parentRecord.$value && $this.para.parentRecord.$value[0]){
              $this.parentRecord = $this.para.parentRecord.$value[0];
            }
            para.nStep = 'special';
            if(++dbFlag === 2){
              $this.tableRefresh(successCallBack,errorCallBack);
            }
            break;
          case 'special':
            if($this.specialRefresh()){
              para.nStep = 'default';
              if(++dbFlag === 2){
                $this.tableRefresh(successCallBack,errorCallBack);
              }
            }else{
              console.log('方法specialRefresh执行出错');
              return
            }
            break;
          case 'default':
            if($this.defaultRefresh()){
              para.nStep = 'end';
              if(++dbFlag === 2){
                $this.tableRefresh(successCallBack,errorCallBack);
              }
            }else{
              console.log('方法defaultRefresh执行出错');
              return
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
    //特殊单元格刷新
    specialRefresh(mes){
      let $this = this;
      //特殊单元格
      let specialObj = {};
      let sum = $this.specialArr.length,endNum = 0;
      for(let i = 0;i < sum;i++){
        let index = Number($this.specialArr[i].row);
        let prop = $this.specialArr[i].column;
        if(!$this.tableData[index] || !$this.tableData[index].hasOwnProperty(prop)){
          //若添加的特殊单元格不存在则，直接跳过
          endNum++;
          continue;
        }
        if($this.specialArr[i].value !== undefined){
          //若是外部传入数据发生变化时，按照外部数据变化，若是内部变化导致specialArr发生变化，传入mes:true使数据不重置
          if(!mes){
            //数据发生变化，需要通知数据库和父组件
            if($this.tableData[index][prop] !== $this.specialArr[i].value){
              $this.tableData[index][prop] = $this.specialArr[i].value;
              $this.tableDataChange(index,prop);
            }
          }
        }
        if($this.specialArr[i].name == 'input'){
          specialObj[index+prop] = {
            ref:'tableInput__R' + index + 'C' +prop,
            name:'input',
            attr:{}
          }
          if($this.specialArr[i].attr){
            specialObj[index+prop].attr = JSON.parse(JSON.stringify($this.specialArr[i].attr));
          }
          endNum++;
        }else if($this.specialArr[i].name == 'express'){
          specialObj[index+prop] = {
            ref:'tableExpress__R' + index + 'C' +prop,
            name:'express',
            expInputData:{
              $table:'',
              $field:[],
              $value:[]
            },
            attr:{
              width:'100%',
              height:'36px',
              borderShow:'none'
            }
          }
          if($this.specialArr[i].table){
            specialObj[index+prop].expInputData.$table = $this.specialArr[i].table;
          }
          if($this.specialArr[i].field){
            specialObj[index+prop].expInputData.$field = JSON.parse(JSON.stringify($this.specialArr[i].field));
          }
          if($this.specialArr[i].variableId){
            specialObj[index + prop].expInputData.$value = JSON.parse(JSON.stringify($this.specialArr[i].variableId));
          }
          if($this.specialArr[i].attr){
            if($this.specialArr[i].attr.maxLength){
              specialObj[index + prop].attr.maxLength = $this.specialArr[i].attr.maxLength;
            }
            if($this.specialArr[i].attr.height){
              specialObj[index + prop].attr.height = $this.specialArr[i].attr.height;
            }
          }
          endNum++;
        }else if($this.specialArr[i].name == 'select'){
          specialObj[index+prop] = {
            ref:'tableSelect__R' + index + 'C' +prop,
            name:'select',
            options:{
              $table:'',
              $field:[],
              $value:[]
            },
            treeObj:{
              $table:'',
              $field:[],
              $value:[]
            },
            attr:{}
          }
          if($this.specialArr[i].table){
            specialObj[index+prop].options.$table = $this.specialArr[i].table;
          }
          if($this.specialArr[i].field){
            specialObj[index+prop].options.$field = JSON.parse(JSON.stringify($this.specialArr[i].field));
          }
          if($this.specialArr[i].optionId && $this.specialArr[i].optionId.length > 0){
            specialObj[index+prop].options.$value = JSON.parse(JSON.stringify($this.specialArr[i].optionId));
          }else if($this.specialArr[i].options){
            specialObj[index+prop].options.$value = JSON.parse(JSON.stringify($this.specialArr[i].options));
          }
          if($this.specialArr[i].treeObj){
            specialObj[index + prop].treeObj.$value.push(JSON.parse(JSON.stringify($this.specialArr[i].treeObj)));
          }
          if($this.specialArr[i].attr){
            specialObj[index + prop].attr = JSON.parse(JSON.stringify($this.specialArr[i].attr));
          }
          endNum++;
        }else{
          specialObj[index+prop] = {
            name:$this.specialArr[i].name
          }
          endNum++;
        }
      }
      if(endNum == sum){
        $this.specialObj = specialObj;
        return true
      }
    },
    //普通单元格刷新
    defaultRefresh(){
      let $this = this;
      if(!$this.attrData.tableHeader){
        return
      }
      //普通单元格
      let defaultObj = {};
      let endNum = 0;
      for(let i = 0;i < $this.attrData.tableHeader.length;i++){
        let prop = $this.attrData.tableHeader[i].prop;
        if($this.attrData.tableHeader[i].name == 'select'){
          defaultObj[prop] = {
            value:'',
            options:{
              $table:'',
              $field:[],
              $value:[]
            },
            treeObj:{
              $table:'',
              $field:[],
              $value:[]
            },
            attr:{}
          }
          if($this.attrData.tableHeader[i].default){
            if($this.attrData.tableHeader[i].default.hasOwnProperty('value')){
              defaultObj[prop].value = $this.attrData.tableHeader[i].default.value;
            }
            if($this.attrData.tableHeader[i].default.hasOwnProperty('options')){
              defaultObj[prop].options.$value = $this.attrData.tableHeader[i].default.options;
            }
            if($this.attrData.tableHeader[i].default.hasOwnProperty('treeObj')){
              defaultObj[prop].treeObj.$value.push($this.attrData.tableHeader[i].default.treeObj);
            }
            if($this.attrData.tableHeader[i].default.hasOwnProperty('attr')){
              defaultObj[prop].attr = $this.attrData.tableHeader[i].default.attr;
            }
          }
        }else if($this.attrData.tableHeader[i].name == 'express'){
          defaultObj[prop] = {
            value:'',
            expInputData:{
              $table:'',
              $field:'',
              $value:[''],
            },
            attr:{
              width:'100%',
              height:'36px',
              borderShow:'none'
            },
          }
          if($this.attrData.tableHeader[i].default){
            if($this.attrData.tableHeader[i].default.hasOwnProperty('value')){
              defaultObj[prop].value = $this.attrData.tableHeader[i].default.value;
            }
            if($this.attrData.tableHeader[i].default.hasOwnProperty('variableArr')){
              defaultObj[prop].expInputData.$value = $this.attrData.tableHeader[i].default.variableArr;
            }
            if($this.attrData.tableHeader[i].default.hasOwnProperty('attr')){
              if($this.attrData.tableHeader[i].default.attr.maxLength){
                defaultObj[prop].attr.maxLength = $this.attrData.tableHeader[i].default.attr.maxLength;
              }
              if($this.attrData.tableHeader[i].default.attr.height){
                defaultObj[prop].attr.height = $this.attrData.tableHeader[i].default.attr.height;
              }
            }
          }
        }else if($this.attrData.tableHeader[i].name == 'input'){
          defaultObj[prop] = {
            value:'',
            attr:{}
          };
          if($this.attrData.tableHeader[i].default){
            if($this.attrData.tableHeader[i].default.hasOwnProperty('value')){
              defaultObj[prop].value = $this.attrData.tableHeader[i].default.value;
            }
            if($this.attrData.tableHeader[i].default.hasOwnProperty('attr')){
              defaultObj[prop].attr = $this.attrData.tableHeader[i].default.attr;
            }
          }
        }else if($this.attrData.tableHeader[i].name == 'number'){
          defaultObj[prop] = {
            value:1
          };
          if($this.attrData.tableHeader[i].default){
            if($this.attrData.tableHeader[i].default.hasOwnProperty('value')){
              defaultObj[prop].value = $this.attrData.tableHeader[i].default.value;
            }
          }
        }else{
          defaultObj[prop] = {
            value:''
          };
          if($this.attrData.tableHeader[i].default){
            if($this.attrData.tableHeader[i].default.hasOwnProperty('value')){
              defaultObj[prop].value = $this.attrData.tableHeader[i].default.value;
            }
          }
        }
        endNum++;
      }
      if(endNum == $this.attrData.tableHeader.length){
        $this.defaultObj = defaultObj;
        return true
      }
    },
    //公共方法
      //聚焦函数
    choseCell(row,column){
      if(!this.tableData[row] || !this.tableData[row].hasOwnProperty(column) || !this.refId){
        return
      }
      //遮罩层把表格组件遮起来，把相应的单元格抬高
      this.maskIs = true;
      let ele = document.querySelector('div[data-id="'+this.refId+'"]');
      ele = ele.querySelector('.el-table');
      ele = ele.querySelector('.el-table__body');
      ele = ele.querySelector('tbody');
      ele = ele.querySelectorAll('tr')[row];
      for(let i = 0;i < this.attrData.tableHeader.length;i++){
        if(this.attrData.tableHeader[i].prop == column){
          column = i;
        }
      }
      if(this.selection){
        column++;
      }
      ele = ele.querySelectorAll('td')[column];
      ele.style.zIndex = '9999';
    },
      //失焦函数
    cleanCell(row,column){
      if(!this.tableData[row] || !this.tableData[row].hasOwnProperty(column)|| !this.refId){
        return
      }
      //取消遮罩层
      this.maskIs = false;
      let ele = document.querySelector('div[data-id="'+this.refId+'"]');
      ele = ele.querySelector('.el-table');
      ele = ele.querySelector('.el-table__body');
      ele = ele.querySelector('tbody');
      ele = ele.querySelectorAll('tr')[row];
      for(let i = 0;i < this.attrData.tableHeader.length;i++){
        if(this.attrData.tableHeader[i].prop == column){
          column = i;
        }
      }
      if(this.selection){
        column++;
      }
      ele = ele.querySelectorAll('td')[column];
      ele.style.zIndex = '';
    },
    //公开事件
      //添加一行记录
    addNewData(){
      let $this = this;
      let objectName = '';
      if($this.para && $this.para.tableData && $this.para.tableData.$table){
        objectName = $this.para.tableData.$table;
      }
      let tableHeader = $this.attrData.tableHeader;
      let newOne = {};
      //预先拼接整体数据，是否提交数据库和赋值延后执行
      for(let i = 0;i < tableHeader.length;i++){
        if(tableHeader[i].name == 'number'){
          //只有序号列的类型name为number
          if($this.tableData[$this.tableData.length - 1]){
            let number = $this.tableData[$this.tableData.length - 1][tableHeader[i].prop];
            newOne[tableHeader[i].prop] = 1 + Number(number);
          }else{
            newOne[tableHeader[i].prop] = $this.defaultObj[tableHeader[i].prop].value;
          }
        }else{
          newOne[tableHeader[i].prop] = $this.defaultObj[tableHeader[i].prop].value;
        }
      }
      if(objectName.length == 0){
        //来自内存
        newOne.index = $this.tableData.length;
        $this.tableData.push(newOne);
        if(!$this.para || !$this.para.$api || !$this.para.$isShow){
          return
        }
        if($this.callModuleEventPort){
          $this.callModuleEventPort('addNewData',[newOne.index,null,newOne]);
        }
      }else{
        //数据库
        if(!$this.para || !$this.para.$api || !$this.para.$isShow){
          return
        }
        let dbData = {};
        let parentRecord = $this.parentRecord;
        for(let i in newOne){
          dbData[i] = [newOne[i]];
        }
        $this.sys.api.recordNew(objectName,parentRecord,dbData,function(result){
          newOne.id = dbData[mac.mac.fd.id][0];
          newOne.index = $this.tableData.length;
          $this.tableData.push(newOne);
          //通知父组件数据发生变化
          let mes = {
            $table:objectName,
            $field:[],
            $value:[newOne.id]
          };
          for(let i in dbData){
            if(dbData.hasOwnProperty(i) && i !== 'id'){
              mes.$field.push(i);
            }
          }
          if($this.callModuleEventPort){
            $this.callModuleEventPort('addNewData',[newOne.index,mes,newOne]);
          }
        },function(error){console.log(error)})
        }
    },
      //删除选中的几行
    deleteRowsEvent(){
      let $this = this;
      let arr = $this.multipleSelection;
      let idArr = [];
      let indexArr = [];
      for(let i = 0;i < arr.length;i++){
        if(arr[i].id){
          idArr.push(arr[i].id);
        }
        indexArr.push(arr[i].index);
      }
      if(indexArr.length == 0){
        return
      }
      //鉴于序号修改的特点（删除一个，其下面的所有数据均减一），需要给indexArr排序
      for(let i = 0;i < indexArr.length;i++){
        for(let j = 0;j < i;j++){
          if(indexArr[i] < indexArr[j]){
            let indexNum = indexArr[j];
            indexArr[j] = indexArr[i];
            indexArr[i] = indexNum;
            indexNum = null;
          }
        }
      }
      //若表中有序号字段按顺序发生变化，故先删除表格相应数据，再修改会发生变化的数据
      //找出序号的列对应的prop（tableHeader.name为number）
      let numberArr = [];
      for(let i = 0;i < $this.attrData.tableHeader.length;i++){
        if($this.attrData.tableHeader[i].name == 'number'){
          numberArr.push($this.attrData.tableHeader[i].prop);
        }
      }
      //删除tableData数据，修改相应的序号,相应的specialArr
      let specArr = [];
      for(let i = 0;i < indexArr.length;i++){
        for(let r = 0;r < $this.tableData.length;r++){
          if($this.tableData[r].index == indexArr[i]){
            $this.tableData.splice(r,1);
            //每删除一个，就要调整一下prop对应序号的属性
            for(let t = r;t < $this.tableData.length;t++){
              for(let y = 0;y < numberArr.length;y++){
                let num = Number($this.tableData[t][numberArr[y]]) - 1;
                let defaultValue = $this.defaultObj[numberArr[y]].value;
                if(num < defaultValue){
                  $this.tableData[t][numberArr[y]] = defaultValue;
                }else{
                  $this.tableData[t][numberArr[y]] = num;
                }
              }
            }
            //记录特殊单元格需要调整的数据的行号
            for(let n = 0;n < $this.specialArr.length;n++){
              let rowNum = Number($this.specialArr[n].row);
              if(rowNum == indexArr[i]){
                specArr.push(rowNum);
                break
              }
            }
            break
          }
        }
      }
      //修改specialArr
      for(let i = 0;i < specArr.length;i++){
        for(let n = 0;n < $this.specialArr.length;n++){
          if(specArr[i] == $this.specialArr[n].row){
            $this.specialArr.splice(n,1);
            n--;
          }
        }
        //调整行号
        for(let m = 0;m < $this.specialArr.length;m++){
          if($this.specialArr[m].row > specArr[i]){
            $this.specialArr[m].row--;
          }
        }
        //调整行号
        for(let j = i;j < specArr.length;j++){
          if(specArr[j] > specArr[i]){
            specArr[j]--;
          }
        }
      }
      //序号修改完成，修改数据库
      //找出需要修改数据库表格数据的id,及相应的数据
      let indexArrFirst = indexArr[0],modifyArr = [],modifyData = {};
      for(let q = 0;q < numberArr.length;q++){
        modifyData[numberArr[q]] = [];
      }
      if($this.para.tableData.$table.length > 0){
        for(let y = 0;y < $this.tableData.length;y++){
          if($this.tableData[y].index > indexArrFirst){
            modifyArr.push($this.tableData[y].id);
            for(let q = 0;q < numberArr.length;q++){
              modifyData[numberArr[q]].push($this.tableData[y][numberArr[q]]);
            }
          }
        }
        modifyData.id = modifyArr;
      }
      //清空多选的数组
      $this.multipleSelection = [];
      //调整tableData数组中的index
      for(let n = 0;n < $this.tableData.length;n++){
        $this.tableData[n].index = n;
      }
      //刷新specialArr
      let result = $this.specialRefresh(true);
      //如果是数据来自内存，发送事件
      if(result){
        if(!$this.para || !$this.para.$api || !$this.para.$isShow){
          return
        }
        let table = '';
        if($this.para.tableData.$table){
          table = $this.para.tableData.$table;
        }
        if(table.length == 0){
          if($this.callModuleEventPort){
            $this.callModuleEventPort('deleteRowsEvent',[indexArr,null]);
          }
          return
        }
        //先删除，再修改
        $this.sys.api.recordDelete(table,idArr,function(result){
          let mes = {
            $table:table,
            $field:[],
            $value:idArr
          }
          if($this.callModuleEventPort){
            $this.callModuleEventPort('deleteRowsEvent',[indexArr,idArr]);
          }
          //修改数据库
          if(modifyData.id.length > 0){
            $this.sys.api.recordModify(table,modifyData,function(result){},function(error){console.log(error)})
          }
        },function(error){console.log(error)})
      }
    },
    //修改数据后通知数据库和父组件
    tableDataChange(index,prop,errorMes){
      if(!this.para || !this.para.$api || !this.para.$isShow){
        return
      }
      let bola = false;
      if(errorMes){
        bola = true;
      }
      let $this = this;
      let table = '';
      if($this.para.tableData.$table){
        table = $this.para.tableData.$table;
      }
      if(table.length > 0){
        let data = {};
        data[mac.mac.fd.id] = [$this.tableData[index].id];
        data[prop] = [$this.tableData[index][prop]];
        $this.sys.api.recordModify(table,data,function(result){
          //通知父组件数据发生变化
          let mes = {
            $table:table,
            $field:[prop],
            $value:[data.id[0]]
          }
          if($this.callModuleEventPort){
            $this.callModuleEventPort('tableDataChange',[$this.tableData[index][prop],index,prop,mes,bola]);
          }
        },function(error){console.log(error)})
      }else{
        //通知父组件内存变量发生变化
        if($this.callModuleEventPort){
          $this.callModuleEventPort('tableDataChange',[$this.tableData[index][prop],index,prop,null,bola]);
        }
      }
    },
    //下拉菜单新增,通知父组件
    addTableDropList(index,prop){
      if(this.callModuleEventPort){
        this.callModuleEventPort('addTableDropList',[index,prop]);
      }
    },
    //私有方法
    //修改数据后失去焦点事件
    inputOnBlur(index,prop,mes){
      //有错误提示聚焦，无错误提示取消聚焦
      if(mes){
        this.choseCell(index,prop);
      }else{
        if(this.maskIs){
          this.cleanCell(index,prop);
        }
      }
    },
      //显现多选列
    selectionIsShow(){
      this.selection = !this.selection;
    },
      //多选列被选中事件
    handleSelectionChange(selection){
      this.multipleSelection = selection;
    },
      //文本域对话框显示以及输入框的显示
    popModule(event,name,index,key){
      let e= event || window.event;
      if(name == 'textarea'){
        this.pop.value = this.tableData[index][key];
        this.oldInput = this.pop.value;
        let clientX = document.documentElement.clientWidth,clientY = document.documentElement.clientHeight;
        if(e.pageY + 10 + 200 > clientY){
          this.pop.top = clientY - 210;
        }else{this.pop.top = e.pageY + 10;}
        if(e.pageX + 10 + 500 > clientX){
          this.pop.left = clientX- 510;
        }else{this.pop.left = e.pageX + 10;}
        if(this.pop.row == index && this.pop.column == key){
          this.pop.isShow = !this.pop.isShow;
        }else{
          this.pop.row = index;
          this.pop.column = key;
          this.pop.isShow = true;
          //聚焦到当前文本域
          let textarea = this.$el.querySelector('.tableZhl_textareaPop .textareaInput textarea');
          textarea.focus();
        }
      }
    },
    //把对话框的值保存到tableData对应的数据中,同时保存数据库（如果是从数据库取得）
    saveData(){
      this.popNoShow();
      if(this.pop.value == this.oldInput){
        return
      }
      this.oldInput = '';
      this.tableData[this.pop.row][this.pop.column] = this.pop.value;
      this.tableDataChange(this.pop.row,this.pop.column);
    },
    //清空对话框
    cleanData(){
      this.pop.value = '';
      this.pop.row = '';
      this.pop.column = '';
      this.popNoShow();
    },
    //隐藏对话框
    popNoShow(){
      this.pop.isShow = false;
    },
    //解析子组件的ref
    childRefId(ref){
      let num1 = ref.indexOf('__');
      ref = ref.slice(num1 + 3);
      num1 = ref.indexOf('C');
      let row = Number(ref.slice(0,num1));
      let column = ref.slice(num1 + 1);
      return [row,column];
    },
    //接收子组件传过来的值
    //输入框
    tableInput_inputBlurEvent(ref,value,bola){
      let num = this.childRefId(ref);
      let row = num[0],column = num[1];
      this.inputOnBlur(row,column,bola);
      if(this.tableData[row][column] != value){
        this.tableData[row][column] = value;
        this.tableDataChange(row,column,bola);
      }
    },
    //表达式输入框
    tableExpress_expressionInputblur(ref,mes,mes2){
      let num = this.childRefId(ref);
      let row = num[0],column = num[1];
      let bola = false;
      if(mes2.length > 0){
        bola = true;
      }
      this.inputOnBlur(row,column,bola);
      if(this.tableData[row][column] != mes){
        this.tableData[row][column] = mes;
        this.tableDataChange(row,column,bola);
      }
    },
    //选择器
    tableSelect_selectChangeEvent(ref,value){
      let num = this.childRefId(ref);
      let row = num[0],column = num[1];
      if(this.tableData[row][column] != value){
        this.tableData[row][column] = value;
        this.tableDataChange(row,column);
      }
    },
    tableSelect_addOption(ref,mes){
      let num = this.childRefId(ref);
      let row = num[0],column = num[1];
      this.addTableDropList(row,column);
    }
  }
}
</script>
<style lang="scss">
  .tableZhl_operaTitle{
    width:100%;
    margin-bottom:0;
    text-align:left;
  }
  .el-table .headerClass-primary{
    color:#fff;
    background-color:$--color-primary;
  }
  .el-table .headerClass-info{
    color:#fff;
    background-color:$--color-info;
  }
  .tableZhl_textareaPop{
    width:400px;height:200px;
    box-sizing:border-box;
    overflow:hidden;
    text-align:center;
    background:#fff;
    z-index:10;
    position:fixed;
    border-radius:$--border-radius-base;
    border:$--border-base;
  }
  .tableZhl_textareaPop i{
    float:right;
    margin-right:10px;
    margin-top:2px;
    margin-bottom:2px;
  }
  .tableZhl_textareaPop .textareaInput{
    width:376px;
    margin-bottom:5px;
  }
  .tableZhl_textareaPop .textareaButton{
    margin-left:80px;
  }
  .tableZhl_maskClass{
    width:100%;height:100%;
    position:absolute;
    top:0;left:0;
    z-index:100;
    cursor:no-drop;
  }
  tr.el-table__row td>div.cell>div>span{
    white-space:nowrap;
    overflow:hidden;
    text-overflow:ellipsis;
    display:block;width:100%;
    height:30px;line-height:30px;
  }
  tr.el-table__row td>div.cell>div>div.tableExpressClass{
    padding:1px 1px;
    text-align:left;
    border-radius:$--border-radius-base;
    border:$--border-base;
  }
</style>
