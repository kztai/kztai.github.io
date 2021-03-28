<template>
<div class="el-pictureUpload">
  <ul v-show="false" class="el-pictureUpload-list el-pictureUpload-list--card">
    <li v-for="(tmp,index) in imageSrcArr" :key="index" class="el-pictureUpload-list__item">
      <div class="el-pictureUpload-list__item-card">
        <img :src="tmp" alt="" class="el-pictureUpload-list__item-thumbnail">
        <i class="el-pictureUpload-delete-button el-icon-close" @click="deleteEvent(index)"></i>
        <div class="el-pictureUpload-hint" v-if="uploadResultArr[index] !== 0" v-show="timeArr[index] == 0">
          <div class="el-pictureUpload-hint-icon">
            <i :class="uploadResultArr[index] == 1?'el-icon-check':'el-icon-plus'"></i>
          </div>
          <span>{{uploadResultArr[index] == 1?'上传成功':'上传失败'}}</span>
        </div>
        <div class="el-pictureUpload-uploadAgain" v-if="uploadResultArr[index] === 2" v-show="timeArr[index] == 1">
          <span @click="uploadEvent(index)">重新上传</span>
        </div>
      </div>
      <span class="el-pictureUpload-list__item-name">{{imageNameArr[index]}}</span>
    </li>
  </ul>
  <div class="el-pictureUpload-text" @click="divClickEvent">
      <el-button size="small" type="text" icon="el-icon-picture" :disabled="attrData.disabled" v-if="attrData.isButton"></el-button>
    <!--<el-button size="small" icon="el-icon-picture" :disabled="attrData.disabled" v-if="attrData.isButton">-->
      <!--{{attrData.buttonText?attrData.buttonText:'点击上传'}}-->
    <!--</el-button>-->
    <div v-else :class="{'el-pictureUpload-card':true,'is-disable':attrData.disabled}">
      <i class="el-icon-plus"></i>
      <span class="el-upload-title">点击添加图片</span>
      <span class="el-upload-infoMess">{{attrData.promptText}}</span>
    </div>
    <input type="file" ref="file" class="el-upload__input" :multiple="attrData.multiple" @change="pictureUploadChangeEvent">
  </div>
</div>
</template>
<script>
export default{
  name:'zhl_pictureUpload',
  props:['refId','para','attr'],
  inject:['sys'],
  data:function(){
    return{
      //传参结构
      pictureUpload:{
        para:{
          $api:false,
          $isShow:false,
          $isMounted:false,
          upload:{
            $table:{
              'table1':['field1']
            },
            $value:['1'] //表格记录
          }
        },
        attr:{
          multiple:false, //是否支持多选文件(默认为false)
          limit:null, //最大允许上传个数
          isButton:false, //是否为上传按钮(默认为false)
          buttonText:'点击上传', //按钮文字
          promptText:'仅支持gif、jpeg、png、bmp4种格式，大小不超过1.0mb', //上传图片框内的默认文本提示
          disabled:false, //是否禁用(默认为false)
          maxSize:null //文件大小限制，单位 kb
        }
      },
      imageSrcArr:[], //保存图片内容(64位码)
      imageNameArr:[], //保存图片名称(相对应路径)
      uploadResultArr:[], //保存图片上传结果(0初始数据,1上传成功,2上传失败)
      timeArr:[] //上传成功或失败后提示框显示时间记录,null为初始加载来的数据，0为2分钟内显示，1为2分钟外不显示
    }
  },
  computed:{
    attrData:function(){
      if(this.attr === undefined){
        return this.pictureUpload.attr;
      }else{
        return this.attr;
      }
    }
  },
  watch:{
    para:{
      handler:function(val,oldVal){
        let $this = this;
        //添加库函数
        Object.assign($this,$this.sys.lib);
        if(val && val.$api && val.$isShow && val.$isMounted && !$this.$lodash.isEqual(val,oldVal)){
          $this.startModule(function(){
            setTimeout(function(){
              if($this.$parent.subModuleActivatedEvent && $this.refId){
                $this.$parent.subModuleActivatedEvent($this.refId);
              }
            },0)
          },function(error){console.log(error)});
        }else if(oldVal){
          setTimeout(function(){
            if($this.$parent.subModuleActivatedEvent && $this.refId){
              $this.$parent.subModuleActivatedEvent($this.refId);
            }
          },0)
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
  methods:{
    //刷新数据
    startModule(successCallBack,errorCallBack){
      let $this = this;
      let para = {
        successCallBack:successCallBack,
        errorCallBack:errorCallBack,
        nStep:0
      };
      let dbFlag;
      let dbData;

      if(successCallBack !== null){
        errorCallBack = para;
        successCallBack = null;
      };
      para = errorCallBack;

      while(1){
        dbFlag = 0;
        switch(para.nStep){
          case 0:
            $this.imageSrcArr = [];
            $this.imageNameArr = [];
            $this.uploadResultArr = [];
            $this.timeArr = [];
            //判断传入数据是否符合要求
            let nextStep = false;
            let $table = $this.para.upload?$this.para.upload.$table:null;
            let $value = $this.para.upload?$this.para.upload.$value:null;
            if($value && Array.isArray($value) && $value[0]){
              //$value必然是id数组
              para.record = $value[0];
              if($table && Object.prototype.toString.call($table) == '[object Object]'){
                for(let i in $table){
                  if(i && $table.hasOwnProperty(i) && Array.isArray($table[i]) && $table[i][0]){
                    para.objectName = i;
                    para.field = $table[i][0];
                    break;
                  }
                }
                if(!para.objectName){
                  nextStep = true;
                }
              }else{
                nextStep = true;
              }
            }else{
              nextStep = true;
            }
            if(nextStep){
              para.nStep = 'end';
              if(++dbFlag === 2){
                $this.startModule(successCallBack,errorCallBack);
              }
            }else{
              //获取所有的图片名
              para.nStep = 1;
              if(++dbFlag === 2){
                $this.startModule(successCallBack,errorCallBack);
              }
            }
            break;
          case 1:
            //查表获取当前所有的图片名
            dbData = {};
            dbData[mac.mac.fd.id] = [para.record];
            dbData[para.field] = [];
            $this.sys.api.recordRead(para.objectName,dbData,function(){
              //字段对应的值为数组
              let fieldArr = dbData[para.field][0];
              if(fieldArr.length > 0){
                para.fileName = [];
                for(let i = 0;i < fieldArr.length;i++){
                  let file = fieldArr[i];
                  if(file.fileName){
                    if(file.path){
                      para.fileName.push(file.path + '/' + file.fileName);
                    }else{
                      para.fileName.push(file.fileName);
                    }
                  }
                }
                para.num = 0;
                para.nStep = 2;
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              }else{
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              }

              // if(dbData[para.field][0]){
              //   para.fileName = dbData[para.field][0].split(',');
              //   for(let i = 0;i < para.fileName.length;i++){
              //     let index = para.fileName[i].lastIndexOf('/');
              //     para.fileName[i] = para.fileName[i].substring(index + 1);
              //   }
              //   para.num = 0;
              //   para.nStep = 2;
              //   if(++dbFlag === 2){
              //     $this.startModule(successCallBack,errorCallBack);
              //   }
              // }else{
              //   para.nStep = 'end';
              //   if(++dbFlag === 2){
              //     $this.startModule(successCallBack,errorCallBack);
              //   }
              // }
            },para.errorCallBack);
            break;
          case 2:
            let filePath = para.fileName[para.num];
            $this.sys.api.readFileBase64(para.objectName,para.field,para.record,filePath,function(result){
              $this.imageSrcArr.push(result);
              $this.imageNameArr.push(filePath);
              $this.uploadResultArr.push(0);
              $this.timeArr.push(null);
              para.num++;
              if(para.num >= para.fileName.length){
                para.nStep = 'end';
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              }else{
                para.nStep = 2;
                if(++dbFlag === 2){
                  $this.startModule(successCallBack,errorCallBack);
                }
              }
            },para.errorCallBack);
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
    // 文件上传按钮
    divClickEvent(){
      if(this.attrData.disabled){
        return;
      }
      this.$refs['file'].click();
    },
    pictureUploadChangeEvent:function(event){
      let $this = this;
      let files = event.target.files;
      if(files.length == 0){
        return
      }
      //对文件进行判断
      let disableArr = []; //定义是否可上传的数组；0为正常，1为不符合要求
      //判断文件类型
      let error1 = [];
      for(let i = 0;i < files.length;i++){
        let file = files[i];
        if(file.type !== 'image/jpeg' && file.type !== 'image/png' && file.type !== 'image/gif' && file.type !== 'image/bmp'){
          error1.push(file.name);
          disableArr.push(1);
        }else{
          disableArr.push(0);
        }
      }
      //判断文件大小
      let error2 = [];
      if($this.attrData.maxSize){
        // 1kb = 1024b;
        let maxSize = $this.attrData.maxSize * 1024;
        for(let i = 0;i < files.length;i++){
          if(disableArr[i] === 0){
            let file = files[i];
            if(file.size > maxSize){
              error2.push(file.name);
              disableArr[i] = 1;
            }
          }
        }
      }
      //判断重名(重名文件提示删除之前的文件)
      let error3 = [];
      let nameArr = $this.imageNameArr;
      for(let i = 0;i < files.length;i++){
        if(disableArr[i] === 0){
          let name = files[i].name;
          if(nameArr.includes(name)){
            error3.push(name);
            disableArr[i] = 1;
          }
        }
      }
      //判断文件数量
      let error4 = '';
      if($this.attrData.limit){
        let length1 = 0;
        let length2 = $this.attrData.limit;
        for(let i = 0;i < disableArr.length;i++){
          if(disableArr[i] === 0){
            length1++;
          }
        }
        let length3 = length1 + $this.imageSrcArr.length;
        if(length3 > length2){
          error4 = '当前限制上传' + length2 + '张图片,本次选择了' + length1 + '张图片，共选择了' + length3 + '张图片;';
          length1 = 0;
          for(let i = 0;i < disableArr.length;i++){
            if(disableArr[i] == 0){
              length1++;
            }
            if(length1 + $this.imageSrcArr.length > length2){
              disableArr[i] = 1;
            }
          }
        }
      }
      //给出出错提示
      let mes = '';
      if(error1.length > 0){
        error1 = error1.join(',');
        error1 = '1、上传的文件' + error1 + '不是合法的图片格式;';
        mes += error1;
      }else{
        error1 = '';
      }
      if(error2.length > 0){
        error2 = error2.join(',');
        error2 = '上传的图片' + error2 + '的大小超过限制的' + $this.attrData.maxSize + 'kb;';
        if(error1){
          error2 = '\n2、' + error2;
        }else{
          error2 = '1、' + error2;
        }
        mes += error2;
      }else{
        error2 = '';
      }
      if(error3.length > 0){
        error3 = error3.join(',');
        error3 = '已存在' + error3 +  '的同名文件，请先删除;';
        if(error1 && error2){
          error3 = '\n3、' + error3;
        }else if(error1 || error2){
          error3 = '\n2、' + error3;
        }else if(!error1 && !error2){
          error3 = '1、' + error3;
        }
        mes += error3;
      }else{
        error3 = '';
      }
      if(error4){
        if(error1 && error2 && error3){
          error4 = '\n4、' + error4;
        }else if((error1 && !error2 && !error3) || (!error1 && error2 && !error3) || (!error1 && !error2 && error3)){
          error4 = '\n2、' + error4;
        }else if(!error1 && !error2 && !error3){
          error4 = '1、' + error4;
        }else{
          error4 = '\n3、' + error4;
        }
        mes += error4;
      }
      if(mes){
        mes = mes.substring(0,mes.length - 1) + '.';
        this.$message.warning(mes);
      }
      let disableNum = 0;
      for(let i = 0;i < disableArr.length;i++){
        if(disableArr[i] === 0){
          disableNum++;
        }
      }
      if(disableNum > 0){
        this.getPictureData(files,disableArr,function(){},function(error){console.log(error)});
      }else{
        $(this.$refs['file']).val('');
      }
    },
    deleteEvent(index){
      let $this = this;
      let tableName;
      let fieldName;
      let record;
      let filePath;
      let $table = $this.para.upload.$table;
      let $value = $this.para.upload.$value;
      for(let i in $table){
        if(i && $table.hasOwnProperty(i) && Array.isArray($table[i]) && $table[i][0]){
          tableName = i;
          fieldName = $table[i][0];
          break;
        }
      }
      record = $value[0];
      filePath = $this.imageNameArr[index];
      $this.sys.api.deleteFile(tableName,fieldName,record,filePath,function(result){
        $this.imageSrcArr.splice(index,1);
        $this.imageNameArr.splice(index,1);
        $this.uploadResultArr.splice(index,1);
        $this.timeArr.splice(index,1);
        //发出事件
        let successArr = [];
        for(let i = 0;i < $this.uploadResultArr.length;i++){
          if($this.uploadResultArr[i] !== 2){
            successArr.push($this.imageNameArr[i]);
          }
        }
        $this.callModuleEventPort('onSuccessEvent',[successArr]);
      },function(error){console.log(error)})
    },
    uploadEvent(index){
      let $this = this;
      let tableName;
      let fieldName;
      let record;
      let filePath;
      let $table = $this.para.upload.$table;
      let $value = $this.para.upload.$value;
      for(let i in $table){
        if(i && $table.hasOwnProperty(i) && Array.isArray($table[i]) && $table[i][0]){
          tableName = i;
          fieldName = $table[i][0];
          break;
        }
      }
      //修改数据库
      record = $value[0];
      filePath = $this.imageNameArr[index];
      let fileContent = $this.imageSrcArr[index];
      $this.sys.api.writeFile(tableName,fieldName,record,filePath,fileContent,function(result){
        $this.$set($this.uploadResultArr,index,1);
        $this.$set($this.timeArr,index,0);
        setTimeout(function(){
          $this.$set($this.timeArr,index,1);
        },2000)
        //发出事件
        let successArr = [];
        for(let i = 0;i < $this.uploadResultArr.length;i++){
          if($this.uploadResultArr[i] !== 2){
            successArr.push($this.imageNameArr[i]);
          }
        }
        $this.callModuleEventPort('onSuccessEvent',[successArr]);
      },function(error){
        console.log(error);
        $this.$set($this.uploadResultArr,index,2);
        $this.$set($this.timeArr,index,0);
        setTimeout(function(){
          $this.$set($this.timeArr,index,1);
        },2000)
      })
    },
    getPictureData(data,disableArr,successCallBack,errorCallBack){
      let $this = this;
      let para = {
        successCallBack:successCallBack,
        errorCallBack:errorCallBack,
        nStep:0
      };
      let dbFlag;
      let reader = new FileReader();

      if(successCallBack !== null){
        errorCallBack = para;
        successCallBack = null;
      };
      para = errorCallBack;

      while(1){
        dbFlag = 0;
        switch(para.nStep){
          case 0:
            let $table = $this.para.upload.$table;
            let $value = $this.para.upload.$value;
            for(let i in $table){
              if(i && $table.hasOwnProperty(i) && Array.isArray($table[i]) && $table[i][0]){
                para.tableName = i;
                para.fieldName = $table[i][0];
                break;
              }
            }
            para.record = $value[0];
            para.uploadResultArr = JSON.parse(JSON.stringify($this.uploadResultArr));
            para.num = 0;
            para.nStep = 1;
            ++dbFlag;
            break;
          case 1:
            if(para.num >= data.length){
              para.nStep = 'end';
              ++dbFlag;
            }else{
              if(disableArr[para.num] === 0){
                let file = data[para.num];
                reader.readAsDataURL(file);
                reader.onload = function(){
                  //读取完毕后输出结果
                  $this.imageSrcArr.push(this.result);
                  $this.imageNameArr.push(file.name);
                  //修改数据库
                  let filePath = file.name;
                  let fileContent = this.result;
                  $this.sys.api.writeFile(para.tableName,para.fieldName,para.record,filePath,fileContent,function(result){
                    $this.uploadResultArr.push(1);
                    $this.timeArr.push(0);
                    let index = $this.timeArr.length - 1;
                    setTimeout(function(){
                      $this.$set($this.timeArr,index,1);
                    },2000)
                    para.num++;
                    para.nStep = 1;
                    if(++dbFlag === 2){
                      $this.getPictureData(data,disableArr,successCallBack,errorCallBack);
                    }
                  },function(error){
                    console.log(error);
                    $this.uploadResultArr.push(2);
                    $this.timeArr.push(0);
                    let index = $this.timeArr.length - 1;
                    setTimeout(function(){
                      $this.$set($this.timeArr,index,1);
                    },2000)
                    para.num++;
                    para.nStep = 1;
                    if(++dbFlag === 2){
                      $this.getPictureData(data,disableArr,successCallBack,errorCallBack);
                    }
                  });
                }
              }else{
                para.num++;
                para.nStep = 1;
                ++dbFlag;
              }
            }
            break;
          case 'end':
            $($this.$refs['file']).val('');
            para.successCallBack();
            //发出事件
            let isSuccess = false;
            for(let i = para.uploadResultArr.length;i < $this.uploadResultArr.length;i++){
              if($this.uploadResultArr[i] === 1){
                isSuccess = true;
                break;
              }
            }
            if(isSuccess){
              let successArr = [];
              for(let i = 0;i < $this.uploadResultArr.length;i++){
                if($this.uploadResultArr[i] !== 2){
                  successArr.push($this.imageNameArr[i]);
                }
              }
              $this.callModuleEventPort('onSuccessEvent',[successArr]);
            }
            return
        }
        if(++dbFlag === 1){
          return
        }
      }
    },
  }
}
</script>
<style lang="scss" scoped>
  .el-pictureUpload{
    margin-bottom:$lm-pictureUpload-margin-bottom;
  }
  /*图片样式*/
  .el-pictureUpload-list{
    padding:$lm-pictureUpload-list-padding;
    list-style:none;
  }
  .el-pictureUpload-list--card{
    margin:$lm-pictureUpload-list-card-margin;
    display:inline;
    vertical-align:top;
  }
  .el-pictureUpload-list__item{
    -webkit-box-sizing:border-box;
    box-sizing:border-box;
    width:$lm-pictureUpload-list-item-width;
    height:$lm-pictureUpload-list-item-height;
    margin:$lm-pictureUpload-list-item-margin;
    display:inline-block;
    position:relative;
  }
  .el-pictureUpload-list__item-card{
    overflow:hidden;
    background-color:$lm-pictureUpload-list-item-card-background-color;
    border:$lm-pictureUpload-list-item-card-border;
    border-radius:$lm-pictureUpload-card-border-radius;
    -webkit-box-sizing:border-box;
    box-sizing:border-box;
    width:$lm-pictureUpload-list-item-card-width;
    height:$lm-pictureUpload-list-item-card-height;
    display:inline-block;
    position:relative;
  }
  .el-pictureUpload-list__item-thumbnail{
    width:$lm-pictureUpload-list-item-card-thumbnail-width;
    height:$lm-pictureUpload-list-item-card-thumbnail-height;
  }
  .el-pictureUpload-delete-button{
    display:block;
    width:$lm-pictureUpload-list-deleteIcon-width;
    height:$lm-pictureUpload-list-deleteIcon-height;
    font-size:$lm-pictureUpload-list-deleteIcon-font-size;
    text-align:center;
    line-height:$lm-pictureUpload-list-deleteIcon-height;
    border-radius:$lm-pictureUpload-list-deleteIcon-border-radius;
    background-color:$lm-pictureUpload-list-deleteIcon-background-color;
    color:$lm-pictureUpload-list-deleteIcon-font-color;
    cursor:pointer;
    position:absolute;
    top:$lm-pictureUpload-list-deleteIcon-top;
    right:$lm-pictureUpload-list-deleteIcon-right;
    z-index:$lm-pictureUpload-list-deleteIcon-zIndex;
  }
  .el-pictureUpload-hint{
    width:$lm-pictureUpload-list-hint-width;
    height:$lm-pictureUpload-list-hint-height;
    border-radius:$lm-pictureUpload-list-hint-border-radius;
    box-sizing:border-box;
    -webkit-box-sizing:border-box;
    overflow:hidden;
    position:absolute;
    top:$lm-pictureUpload-list-hint-top;
    left:$lm-pictureUpload-list-hint-left;
    margin-top:$lm-pictureUpload-list-hint-margin-top;
    margin-left:$lm-pictureUpload-list-hint-margin-left;
    background-color:$lm-pictureUpload-list-hint-background-color;
    color:$lm-pictureUpload-list-hint-color;
    z-index:$lm-pictureUpload-list-hint-zIndex;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
  .el-pictureUpload-hint-icon{
    width:$lm-pictureUpload-list-hint-icon-width;
    height:$lm-pictureUpload-list-hint-icon-height;
    display:inline-block;
    box-sizing:border-box;
    -webkit-box-sizing:border-box;
    border-radius:$lm-pictureUpload-list-hint-icon-border-radius;
    background-color:$lm-pictureUpload-list-hint-icon-background-color;
    color:$lm-pictureUpload-list-hint-icon-font-color;
    font-size:$lm-pictureUpload-list-hint-icon-font-size;
    text-align:center;
    line-height:$lm-pictureUpload-list-hint-icon-height;
  }
  .el-pictureUpload-uploadAgain{
    width:$lm-pictureUpload-list-uploadAgain-width;
    height:$lm-pictureUpload-list-uploadAgain-height;
    box-sizing:border-box;
    -webkit-box-sizing:border-box;
    overflow:hidden;
    position:absolute;
    bottom:$lm-pictureUpload-list-uploadAgain-bottom;
    left:$lm-pictureUpload-list-uploadAgain-left;
    background-color:$lm-pictureUpload-list-uploadAgain-background-color;
    color:$lm-pictureUpload-list-uploadAgain-font-color;
    z-index:$lm-pictureUpload-list-uploadAgain-zIndex;
    line-height:$lm-pictureUpload-list-uploadAgain-height;
    text-align:center;
    font-size:$lm-pictureUpload-list-uploadAgain-font-size;
  }
  .el-pictureUpload-uploadAgain span:hover{
    cursor:pointer;
  }
  .el-pictureUpload-list__item-name{
    width:$lm-pictureUpload-list-name-width;
    height:$lm-pictureUpload-list-name-height;
    display:block;
    position:absolute;
    top:$lm-pictureUpload-list-name-top;
    left:$lm-pictureUpload-list-name-left;
    font-size:$lm-pictureUpload-list-name-font-size;
    line-height:$lm-pictureUpload-list-name-height;
    text-align:center;
    overflow:hidden;
    text-overflow:ellipsis;
    white-space:nowrap;
  }
  /*卡片按钮格式*/
  .el-pictureUpload-text{
    display:inline-block;
    vertical-align:top;
    cursor:pointer;
  }
  .el-pictureUpload-card{
    background-color:$lm-pictureUpload-card-background-color;
    border:$lm-pictureUpload-card-border;
    border-radius:$lm-pictureUpload-card-border-radius;
    -webkit-box-sizing:border-box;
    box-sizing:border-box;
    width:$lm-pictureUpload-card-width;
    height:$lm-pictureUpload-card-height;
    outline:$lm-pictureUpload-card-outline;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
  }
  .el-pictureUpload-card.is-disable:hover{
    color:$lm-pictureUpload-disable-hover-font-color;
    cursor:not-allowed;
    background-image:none;
    background-color:$lm-pictureUpload-disable-hover-background-color;
    border-color:$lm-pictureUpload-card-border-color;
  }
  .el-pictureUpload-card:hover{
    border-color:$lm-pictureUpload-card-hover-border-color;
    color:$lm-pictureUpload-card-hover-font-color;
  }
  .el-pictureUpload-card i{
    font-size:$lm-pictureUpload-card-icon-font-size;
    color:$lm-pictureUpload-card-color;
  }
  .el-pictureUpload-card span{
    color:$lm-pictureUpload-card-color;
  }
  .el-upload-title{
    font-size:$lm-pictureUpload-card-title-font-size;
    font-weight:$lm-pictureUpload-card-title-font-weight;
    margin-top:$lm-pictureUpload-card-title-margin-top;
    margin-bottom:$lm-pictureUpload-card-title-margin-bottom;
  }
  .el-upload-infoMess{
    font-size:$lm-pictureUpload-card-infoMess-font-size;
    margin-left:$lm-pictureUpload-card-infoMess-margin;
    margin-right:$lm-pictureUpload-card-infoMess-margin;
    text-align:center;
  }
</style>
