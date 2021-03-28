<template>
  <div :class="{'listStyle':true,'listStyle_medium':attrData.size == 'medium','listStyle_small':attrData.size == 'small','listStyle_mini':attrData.size == 'mini'}" :data-id="refId">
    <div :class="{'listTitle':true,'listTitle_medium':attrData.size == 'medium','listTitle_small':attrData.size == 'small','listTitle_mini':attrData.size == 'mini'}" v-show="attrData.headerIsShow">
      <div class="headerButtonsClass" v-if="attrData.delButtonIsShow || attrData.addButtonIsShow || attrData.refButtonIsShow">
        <button v-if="attrData.addButtonIsShow" class="el-icon-plus" title="新增" @click="newItemEvent"></button>
        <button v-if="attrData.delButtonIsShow" class="el-icon-minus" title="删除" @click="deleteItemEvent"></button>
        <button v-if="attrData.refButtonIsShow" class="el-icon-refresh" title="刷新" @click="RefreshEvent"></button>
      </div>
      <span>{{attrData.title}}</span>
    </div>
    <ul :class="{'list_ul_style':true,'list_ul_HeightClass':attrData.headerIsShow}">
      <li v-if="label.length == 0"><span>暂无数据</span></li>
      <li v-for="(tmp,index) in label" :key="index" @click="itemClickEvent(index)" :class="{'listUlLiClass':true,'list-li-checked':attrData.cursorIsShow && checked == index + 1}" :data-drag="'dragList_'+refId" :dataId="index" :style="{textAlign:attrData.textAlign}">
        <img v-if="tmp.img" :src="tmp.img" :style="{display:attrData.iDisplay,margin:attrData.imgMargin,height:attrData.imgHeight}">
        <i v-else-if="tmp.icon" :class="tmp.icon" :style="{display:attrData.iDisplay,fontSize:attrData.iconFontSize}"></i>
        <span v-if="tmp.name">{{tmp.name}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    name:'zhl_list',
    props:['refId','para','attr'],
    inject:['sys'],
    data(){
      return{
        list:{
          para:{
            $api:false,
            $isShow:false,
            $isMounted:false,
            name:{$table:'',$field:[],$value:['第一行','第二行','第三行']},
            icon:{$table:'',$field:[],$value:['el-icon-date','el-icon-menu','el-icon-search']},
            img:{$table:'',$field:[],$value:[]}
          },
          attr:{
            dragIsTrue:false, //列表每行是否能拖拽（默认为false）
            noDragArr:[], //不可拖拽的行的集合
            title:'标题1', //头部文本
            headerIsShow:true, //头部是否显示（默认为false）
            addButtonIsShow:false, //头部增添按钮是否显示（false）
            delButtonIsShow:false, //删减按钮是否显示
            refButtonIsShow:false, //刷新按钮是否显示
            checked:-1, //默认光标所在行
            noClickEvent:false, //是否禁用点击事件
            iDisplay:'', //每行图标或者图片样式（'block'为单独一行，居中）
            textAlign:'', //每行文本位置（默认居左，'center'为居中）
            imgMargin:'', //每行的图片位置（默认居左，'0 auto'为居中）
            imgHeight:'', //图片的高度（需带单位）
            iconFontSize:'', //每行图标字体大小(需带单位)
            size:'', //列表的尺寸（除默认外mini/small/medium）
            cursorIsShow:false //是否显示光标
          }
        },
        tableDataIsTrue:false,
        checked:-1, //光标所在行的行号
        checkedIndexOrId:-1, //当前选中的行号或者id
        label:[
          {name:'第一行',icon:'el-icon-date',img:''},
          {name:'第二行',icon:'el-icon-menu',img:''},
          {name:'第三行',icon:'el-icon-search',img:''}
        ]
      }
    },
    computed:{
      attrData:function(){
        if(this.attr === undefined){
          return this.list.attr;
        }else{
          return this.attr;
        }
      },
      //拖拽属性
      refreshAttrData1:function(){
        return this.attrData.dragIsTrue;
      },
      refreshAttrData2:function(){
        return this.attrData.noDragArr;
      }
    },
    watch:{
      para:{
        handler:function(val,oldVal){
          //添加库函数
          let $this = this;
          Object.assign($this,$this.sys.lib);
          if(val && val.$api && val.$isShow && val.$isMounted && !$this.$lodash.isEqual(val,oldVal)){
            $this.startModule(function(){
              setTimeout(function(){
                if($this.$parent.subModuleActivatedEvent && $this.refId){
                  $this.$parent.subModuleActivatedEvent($this.refId);
                }
              },0)
            },function(error){console.log(error)});
          }else{
            if($this.$parent.subModuleActivatedEvent && $this.refId){
              $this.$parent.subModuleActivatedEvent($this.refId);
            }
          }
        },
        deep:true,
        immediate:true
      },
      refreshAttrData1:function(){
        if(this.para && this.para.$api && this.para.$isShow && this.para.$isMounted){
          this.listDataRefresh(function(){},function(error){console.log(error)});
        }
      },
      refreshAttrData2:{
        handler:function(val,oldVal){
          if(this.para && this.para.$api && this.para.$isShow && this.para.$isMounted && !this.$lodash.isEqual(val,oldVal)){
            this.listDataRefresh(function(){},function(error){console.log(error)});
          }
        },
        deep:true
      }
    },
    mounted:function(){
      if(this.$parent.pvt_isMounted){
        this.$parent.pvt_isMounted[this.refId] = true;
      }
    },
    methods:{
      startModule(successCallBack,errorCallBack){
        let $this = this;
        let dbFlag;
        let para = {
          successCallBack:successCallBack,
          errorCallBack:errorCallBack,
          nStep:1
        }
        if(successCallBack !== null){
          errorCallBack = para;
          successCallBack = null;
        }
        para = errorCallBack;

        while(1){
          dbFlag = 0;
          switch(para.nStep){
            case 1:
              $this.listDataRefresh(function(){
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              },function(error){console.log(error)})
              break;
            case 'end':
              //选中初始光标所在行,先判断是否可选中光标
              if($this.attrData.cursorIsShow){
                if($this.label.length > 0){
                  if($this.attrData.checked){
                    $this.checkedIndexOrId = $this.attrData.checked;
                  }else{
                    if($this.label[0].id){
                      $this.checkedIndexOrId = $this.label[0].id;
                    }else{
                      $this.checkedIndexOrId = 1;
                    }
                  }
                }else{
                  $this.checkedIndexOrId = -1;
                }
                if($this.tableDataIsTrue){
                  let index = -1;
                  for(let i = 0;i < $this.label.length;i++){
                    if($this.label[i].id == $this.checkedIndexOrId){
                      index = i;
                      break;
                    }
                  }
                  if(index >= 0){
                    $this.checked = index + 1;
                  }else{
                    if($this.label.length == 0){
                      $this.checked = -1;
                      $this.checkedIndexOrId = -1;
                    }else{
                      if($this.checked > $this.label.length){
                        $this.checked = $this.label.length;
                      }
                      if($this.checked > 0){
                        $this.checkedIndexOrId = $this.label[$this.checked - 1].id;
                      }else{
                        $this.checked = -1;
                        $this.checkedIndexOrId = -1;
                      }
                    }
                  }
                }else{
                  if($this.checkedIndexOrId < 1){
                    $this.checkedIndexOrId = -1;
                  }else if($this.checkedIndexOrId > $this.label.length){
                    $this.checkedIndexOrId = $this.label.length;
                  }
                  $this.checked = $this.checkedIndexOrId;
                }
                $this.itemClickEvent($this.checked - 1);
              }else{
                $this.checkedIndexOrId = -1;
                $this.checked = -1;
              }
              para.successCallBack();
              return
          }
          if(++dbFlag === 1){
            return
          }
        }
      },
      //公开方法
        //刷新列表内容
      listRefresh(record,successCallBack,errorCallBack){
        if(!this.para || !this.para.$api || !this.para.$isShow && !this.para.$isMounted){
          return
        }
        let $this = this;
        let dbFlag;
        let para = {
          successCallBack:successCallBack,
          errorCallBack:errorCallBack,
          nStep:1
        }
        if(successCallBack !== null){
          errorCallBack = para;
          successCallBack = null;
        }
        para = errorCallBack;

        while(1){
          dbFlag = 0;
          switch(para.nStep){
            case 1:
              $this.listDataRefresh(function(){
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.listRefresh(record,successCallBack,errorCallBack);
                }
              },function(error){console.log(error)})
              break;
            case 'end':
              //选中指定光标,先判断是否可选中光标
              if($this.attrData.cursorIsShow){
                if(record){
                  $this.checkedIndexOrId = record;
                }
                if($this.tableDataIsTrue){
                  let index = -1;
                  for(let i = 0;i < $this.label.length;i++){
                    if($this.label[i].id == $this.checkedIndexOrId){
                      index = i;
                      break;
                    }
                  }
                  if(index >= 0){
                    $this.checked = index + 1;
                  }else{
                    if($this.label.length == 0){
                      $this.checked = -1;
                      $this.checkedIndexOrId = -1;
                    }else{
                      if($this.checked > $this.label.length){
                        $this.checked = $this.label.length;
                      }
                      if($this.checked > 0){
                        $this.checkedIndexOrId = $this.label[$this.checked - 1].id;
                      }else{
                        $this.checked = -1;
                        $this.checkedIndexOrId = -1;
                      }
                    }
                  }
                }else{
                  if($this.checkedIndexOrId < 1){
                    $this.checkedIndexOrId = -1;
                  }else if($this.checkedIndexOrId > $this.label.length){
                    $this.checkedIndexOrId = $this.label.length;
                  }
                  $this.checked = $this.checkedIndexOrId;
                }
                $this.itemClickEvent($this.checked - 1);
              }else{
                $this.checkedIndexOrId = -1;
                $this.checked = -1;
              }
              para.successCallBack();
              return
          }
          if(++dbFlag === 1){
            return
          }
        }
      },
      //公开事件
        //按钮添加新列
      newItemEvent(){
        if(this.callModuleEventPort){
          this.callModuleEventPort('newItemEvent',[]);
        }
      },
      //按钮删减新列
      deleteItemEvent(){
        if(this.callModuleEventPort){
          this.callModuleEventPort('deleteItemEvent',[]);
        }
      },
      RefreshEvent(){
        if(this.callModuleEventPort){
          this.callModuleEventPort('RefreshEvent',[]);
        }
      },
      itemClickEvent(index){
        if(this.attrData.noClickEvent){
          return
        }
        if(this.attrData.cursorIsShow){
          this.checked = index + 1;
        }
        let content = '';
        if(index >= 0){
          if(this.label[index].name){
            content = this.label[index].name;
          }
        }
        let id;
        if(this.tableDataIsTrue){
          id = {
            $table:'',
            $field:[],
            $value:['']
          };
          if(this.para.name && this.para.name.$table){
            id.$table = this.para.name.$table;
            id.$field = JSON.parse(JSON.stringify(this.para.name.$field));
          }else if(this.para.icon && this.para.icon.$table){
            id.$table = this.para.icon.$table;
            id.$field = JSON.parse(JSON.stringify(this.para.icon.$field));
          }else if(this.para.img && this.para.img.$table){
            id.$table = this.para.img.$table;
            id.$field = JSON.parse(JSON.stringify(this.para.img.$field));
          }
          if(index >= 0){
            id.$value[0] = this.label[index].id;
            if(this.attrData.cursorIsShow){
              this.checkedIndexOrId = this.label[index].id;
            }
          }
        }else{
          id = '';
          if(index >= 0){
            id = index;
          }
          if(this.attrData.cursorIsShow){
            this.checkedIndexOrId = index + 1;
          }
        }
        let $this = this;
        setTimeout(function(){
          if($this.callModuleEventPort){
            $this.callModuleEventPort('itemClickEvent',[id,content]);
          }
        },0)
      },
      //私有方法
      //只刷新数据
      listDataRefresh(successCallBack,errorCallBack){
        this.tableDataIsTrue = false;
        if(this.para.name && this.para.name.$table){
          this.tableDataIsTrue = true;
        }else if(this.para.icon && this.para.icon.$table){
          this.tableDataIsTrue = true;
        }else if(this.para.img && this.para.img.$table){
          this.tableDataIsTrue = true;
        }
        let $this = this;
        let table;
        let field;
        let parentRecord;
        let condition;
        let dbData;
        let dbFlag;
        let para = {
          successCallBack:successCallBack,
          errorCallBack:errorCallBack,
          nStep:1
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
            case 1:
              $this.label = [];
              if($this.para.name && $this.para.name.$table){
                table = $this.para.name.$table;
                dbData = {};
                field = [];
                if(Array.isArray($this.para.name.$field) && $this.para.name.$field[0]){
                  field = $this.para.name.$field;
                  if(field[0] != para.fd.id){
                    dbData[field[0]] = [];
                  }
                }
                //判断是条件查询还是id查询
                if(field[0] && Object.prototype.toString.call($this.para.name.$value) == '[object Object]'){
                  if($this.para.name.$value.hasOwnProperty('parentRecord') && Array.isArray($this.para.name.$value.parentRecord)){
                    parentRecord = $this.para.name.$value.parentRecord;
                  }else{
                    parentRecord = null;
                  }
                  if($this.para.name.$value.hasOwnProperty('condition') && typeof($this.para.name.$value.condition) == 'string'){
                    condition = $this.para.name.$value.condition;
                  }else{
                    condition = '';
                  }
                  $this.sys.api.recordQuery(table,parentRecord,condition,dbData,function(result){
                    for(let m = 0;m < dbData[para.fd.id].length;m++){
                      if(!$this.label[m]){
                        $this.label.push({
                          id:dbData[para.fd.id][m],
                          name:dbData[field[0]][m],
                          icon:'',
                          img:''
                        })
                      }
                    }
                    para.nStep = 2;
                    if(++dbFlag === 2){
                      $this.listDataRefresh(successCallBack,errorCallBack);
                    }
                  },para.errorCallBack)
                }else if(field[0] && Array.isArray($this.para.name.$value) && $this.para.name.$value.length > 0){
                  dbData[para.fd.id] = $this.para.name.$value;
                  $this.sys.api.recordRead(table,dbData,function(result){
                    for(let m = 0;m < dbData[para.fd.id].length;m++){
                      if(!$this.label[m]){
                        $this.label.push({
                          id:dbData[para.fd.id][m],
                          name:dbData[field[0]][m],
                          icon:'',
                          img:''
                        })
                      }
                    }
                    para.nStep = 2;
                    if(++dbFlag === 2){
                      $this.listDataRefresh(successCallBack,errorCallBack);
                    }
                  },para.errorCallBack)
                }else{
                  para.nStep = 2;
                  if(++dbFlag === 2){
                    $this.listDataRefresh(successCallBack,errorCallBack);
                  }
                }
              }else{
                if($this.para.name && $this.para.name.$value){
                  for(let m = 0;m < $this.para.name.$value.length;m++){
                    if(!$this.label[m]){
                      $this.label.push({
                        name:$this.para.name.$value[m],
                        icon:'',
                        img:''
                      })
                    }
                  }
                }
                para.nStep = 2;
                if(++dbFlag === 2){
                  $this.listDataRefresh(successCallBack,errorCallBack);
                }
              }
              break;
            case 2:
              if($this.para.icon && $this.para.icon.$table){
                table = $this.para.icon.$table;
                dbData = {};
                field = [];
                if(Array.isArray($this.para.icon.$field) && $this.para.icon.$field[0]){
                  field= $this.para.icon.$field;
                  if(field[0] != para.fd.id){
                    dbData[field[0]] = [];
                  }
                }
                //判断是条件查询还是id查询
                if(field[0] && Object.prototype.toString.call($this.para.icon.$value) == '[object Object]'){
                  if($this.para.icon.$value.hasOwnProperty('parentRecord') && Array.isArray($this.para.icon.$value.parentRecord)){
                    parentRecord = $this.para.icon.$value.parentRecord;
                  }else{
                    parentRecord = null;
                  }
                  if($this.para.icon.$value.hasOwnProperty('condition') && typeof($this.para.icon.$value.condition) == 'string'){
                    condition = $this.para.icon.$value.condition;
                  }else{
                    condition = '';
                  }
                  $this.sys.api.recordQuery(table,parentRecord,condition,dbData,function(result){
                    for(let m = 0;m < dbData[para.fd.id].length;m++){
                      if(!$this.label[m]){
                        $this.label.push({
                          id:dbData[para.fd.id][m],
                          name:'',
                          icon:dbData[field[0]][m],
                          img:''
                        })
                      }else{
                        $this.label[m].icon = dbData[field[0]][m];
                        if(!$this.label[m].id){
                          $this.label[m].id = dbData[para.fd.id][m];
                        }
                      }
                    }
                    para.nStep = 3;
                    if(++dbFlag === 2){
                      $this.listDataRefresh(successCallBack,errorCallBack);
                    }
                  },para.errorCallBack)
                }else if(field[0] && Array.isArray($this.para.icon.$value) && $this.para.icon.$value.length > 0){
                  dbData[para.fd.id] = $this.para.icon.$value;
                  $this.sys.api.recordRead(table,dbData,function(result){
                    for(let m = 0;m < dbData[para.fd.id].length;m++){
                      if(!$this.label[m]){
                        $this.label.push({
                          id:dbData[para.fd.id][m],
                          name:'',
                          icon:dbData[field[0]][m],
                          img:''
                        })
                      }else{
                        $this.label[m].icon = dbData[field[0]][m];
                        if(!$this.label[m].id){
                          $this.label[m].id = dbData[para.fd.id][m];
                        }
                      }
                    }
                    para.nStep = 3;
                    if(++dbFlag === 2){
                      $this.listDataRefresh(successCallBack,errorCallBack);
                    }
                  },para.errorCallBack)
                }else{
                  para.nStep = 3;
                  if(++dbFlag === 2){
                    $this.listDataRefresh(successCallBack,errorCallBack);
                  }
                }
              }else{
                if($this.para.icon && $this.para.icon.$value){
                  for(let m = 0;m < $this.para.icon.$value.length;m++){
                    if(!$this.label[m]){
                      $this.label.push({
                        name:'',
                        icon:$this.para.icon.$value[m],
                        img:''
                      })
                    }else{
                      $this.label[m].icon = $this.para.icon.$value[m];
                    }
                  }
                }
                para.nStep = 3;
                if(++dbFlag === 2){
                  $this.listDataRefresh(successCallBack,errorCallBack);
                }
              }
              break;
            case 3:
              if($this.para.img && $this.para.img.$table){
                table = $this.para.img.$table;
                dbData = {};
                field = [];
                if(Array.isArray($this.para.img.$field) && $this.para.img.$field[0]){
                  field = $this.para.img.$field;
                  if(field[0] != para.fd.id){
                    dbData[field[0]] = [];
                  }
                }
                //判断是条件查询还是id查询
                if(field[0] && Object.prototype.toString.call($this.para.img.$value) == '[object Object]'){
                  if($this.para.img.$value.hasOwnProperty('parentRecord') && Array.isArray($this.para.img.$value.parentRecord)){
                    parentRecord = $this.para.img.$value.parentRecord;
                  }else{
                    parentRecord = null;
                  }
                  if($this.para.img.$value.hasOwnProperty('condition') && typeof($this.para.img.$value.condition) == 'string'){
                    condition = $this.para.img.$value.condition;
                  }else{
                    condition = '';
                  }
                  $this.sys.api.recordQuery(table,parentRecord,condition,dbData,function(result){
                    for(let m = 0;m < dbData[para.fd.id].length;m++){
                      if(!$this.label[m]){
                        $this.label.push({
                          id:dbData[para.fd.id][m],
                          name:'',
                          icon:'',
                          img:dbData[field[0]][m]
                        })
                      }else{
                        $this.label[m].img = dbData[field[0]][m];
                        if(!$this.label[m].id){
                          $this.label[m].id = dbData[para.fd.id][m];
                        }
                      }
                    }
                    para.nStep = 4;
                    if(++dbFlag === 2){
                      $this.listDataRefresh(successCallBack,errorCallBack);
                    }
                  },para.errorCallBack)
                }else if(field[0] && Array.isArray($this.para.img.$value) && $this.para.img.$value.length > 0){
                  dbData[para.fd.id] = $this.para.img.$value;
                  $this.sys.api.recordRead(table,dbData,function(result){
                    for(let m = 0;m < dbData[para.fd.id].length;m++){
                      if(!$this.label[m]){
                        $this.label.push({
                          id:dbData[para.fd.id][m],
                          name:'',
                          icon:'',
                          img:dbData[field[0]][m]
                        })
                      }else{
                        $this.label[m].img = dbData[field[0]][m];
                        if(!$this.label[m].id){
                          $this.label[m].id = dbData[para.fd.id][m];
                        }
                      }
                    }
                    para.nStep = 4;
                    if(++dbFlag === 2){
                      $this.listDataRefresh(successCallBack,errorCallBack);
                    }
                  },para.errorCallBack)
                }else{
                  para.nStep = 4;
                  if(++dbFlag === 2){
                    $this.listDataRefresh(successCallBack,errorCallBack);
                  }
                }
              }else{
                if($this.para.img && $this.para.img.$value){
                  for(let m = 0;m < $this.para.img.$value.length;m++){
                    if(!$this.label[m]){
                      $this.label.push({
                        name:'',
                        icon:'',
                        img:$this.para.img.$value[m]
                      })
                    }else{
                      $this.label[m].img = $this.para.img.$value[m];
                    }
                  }
                }
                para.nStep = 4;
                if (++dbFlag === 2) {
                  $this.listDataRefresh(successCallBack,errorCallBack);
                }
              }
              break;
            case 4:
              //挂载拖拽属性
              $this.$nextTick(function(){
                //公开事件,拖拽
                let dragId = 'dragList_'+$this.refId;
                let dragLists = document.querySelectorAll("[data-drag=" + dragId + "]");
                for(let i = 0;i < dragLists.length;i++){
                  if($this.attrData.dragIsTrue){
                    if($(dragLists[i]).hasClass('ui-draggable')){
                      $(dragLists[i]).draggable('option','disabled',false);
                      continue;
                    }
                    $(dragLists[i]).draggable({
                      helper:'clone',
                      start:function(event,ui){
                        let index = Number($(event.target).attr("dataId"));
                        let content = $this.label[index].name;
                        let id = index;
                        if($this.label[index].id){
                          id = {
                            $table:'',
                            $field:[],
                            $value:[$this.label[index].id]
                          }
                          if($this.para.name && $this.para.name.$table){
                            id.$table = $this.para.name.$table;
                            id.$field = JSON.parse(JSON.stringify($this.para.name.$field));
                          }else if($this.para.icon && $this.para.icon.$table){
                            id.$table = $this.para.icon.$table;
                            id.$field = JSON.parse(JSON.stringify($this.para.icon.$field))
                          }else if($this.para.img && $this.para.img.$table){
                            id.$table = $this.para.img.$table;
                            id.$field = JSON.parse(JSON.stringify($this.para.img.$field));
                          }
                        }
                        if($this.callModuleEventPort){
                          $this.callModuleEventPort('itemDragStartEvent',[id,content],function(){
                          },function(error){console.log(error)});
                        }
                      },
                      stop:function(event,ui){
                        //console.log('完成')
                      }
                    })
                  }else{
                    if($(dragLists[i]).hasClass('ui-draggable')){
                      $(dragLists[i]).draggable('option','disabled',true);
                    }
                  }
                }
                //如果有不可拖拽数组时
                if($this.attrData.noDragArr && Array.isArray($this.attrData.noDragArr)){
                  let disabledArr;
                  if($this.tableDataIsTrue){
                    disabledArr = [];
                    for(let m = 0;m < $this.attrData.noDragArr.length;m++){
                      let disabledId = $this.attrData.noDragArr[m];
                      for(let n = 0;n < $this.label.length;n++){
                        if($this.label[n].id == disabledId){
                          disabledArr.push(n + 1);
                          break;
                        }
                      }
                    }
                  }else{
                    disabledArr = JSON.parse(JSON.stringify($this.attrData.noDragArr));
                  }
                  for(let j = 0;j < disabledArr.length;j++){
                    let index = Number(disabledArr[j]) - 1;
                    if(dragLists[index] && $(dragLists[index]).hasClass('ui-draggable')){
                      $(dragLists[index]).draggable('option','disabled',true);
                    }
                  }
                }
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.listDataRefresh(successCallBack,errorCallBack);
                }
              })
              break;
            case 'end':
              para.successCallBack();
              return;
          }
          if(++dbFlag === 1){
            return
          }
        }
      }
    }
  }
</script>
<style lang="scss" scoped>
  ul,li{
    margin:0;
    padding:0;
  }
  .listStyle{
    width:100%;
    min-width:120px;
    height:100%;
    overflow:hidden;
    font-size:$baseComponent-list-base-fontSize;
    // 禁止文字被鼠标选中
    moz-user-select:-moz-none;
    -moz-user-select:none;
    -o-user-select:none;
    -khtml-user-select:none;
    -webkit-user-select:none;
    -ms-user-select:none;
    user-select:none;
  }
  .listStyle_medium{
    font-size:$baseComponent-list-medium-fontSize!important;
  }
  .listStyle_small{
    font-size:$baseComponent-list-small-fontSize!important;
  }
  .listStyle_mini{
    font-size:$baseComponent-list-mini-fontSize!important;
  }
  .listTitle{
    width:100%;
    text-align:left;
    height:$baseComponent-list-header-height;
    line-height:$baseComponent-list-header-height;
    box-sizing:border-box;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
    font-size:$baseComponent-list-header-fontSize;
    background:$baseComponent-list-header-background;
    color:$baseComponent-list-header-color;
    padding:$baseComponent-list-header-padding;
  }
  .listTitle_medium{
    font-size:$baseComponent-list-header-medium-fontSize!important;
  }
  .listTitle_small{
    font-size:$baseComponent-list-header-small-fontSize!important;
  }
  .listTitle_mini{
    font-size:$baseComponent-list-header-mini-fontSize!important;
  }
  .listTitle .headerButtonsClass{
    float:right;
    text-align:right;
  }
  .listTitle button{
    width:$baseComponent-list-header-button-width;
    position: relative;
    color:$baseComponent-list-header-color;
    margin-right:5px;
    cursor:pointer;
    border:$baseComponent-list-header-button-border;
    border-radius:$--border-radius-base;
    background:$baseComponent-list-header-background;
    line-height:$baseComponent-list-header-button-height;
  }
  .listTitle button:hover{
    background-color: #5aabff;
  }
  .listTitle_medium button{
    width:$baseComponent-list-header-button-medium-width!important;
    font-size:$baseComponent-list-medium-fontSize!important;
  }
  .listTitle_small button{
    width:$baseComponent-list-header-button-small-width!important;
    font-size:$baseComponent-list-small-fontSize!important;
  }
  .listTitle_mini button{
    width:$baseComponent-list-header-button-mini-width!important;
    font-size:$baseComponent-list-mini-fontSize!important;
  }
  .list_ul_style{
    width:100%;
    height:100%;
    overflow:auto;
  }
  .list_ul_HeightClass{
    height:calc(100% - #{$baseComponent-list-header-height})!important;
  }
  .list_ul_style li.listUlLiClass{
    text-align:left;
    white-space:nowrap;
    overflow: hidden;
    padding:$baseComponent-list-li-padding;
  }
  .listUlLiClass *{
    margin-left:5px;
    vertical-align:middle;
  }
  .listUlLiClass:hover{
    cursor:pointer;
    background-color:$baseComponent-list-li-hover-color;
  }
  .list-li-checked{
    background-color:$baseComponent-list-li-active-backgroundColor!important;
  }
</style>
