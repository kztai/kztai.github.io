/**
 * 对象上传函数
 * @param dataBase
 * @param tableVariable
 * @param destVariable
 * @param data
 */
$CPageZeroDB.prototype.zeroObjectUpload = function(dataBase, tableVariable, destVariable, data) {
  let $this = this;
  let dbFlag;
  let para = {
    nStep:0
  };
  while (1) {
    dbFlag = 0;
    if ($this.debugFlag) {
      if (para.oldNStep !== para.nStep) {
        console.log("$CPageZeroDB.prototype.zeroObjectUpload: nSTep = " + para.nStep);
        para.oldNStep = para.nStep;
      }
    }
    switch (para.nStep) {
      case 0:
        para.related = { //关联表及记录
          table: [], //表名
          record: [], //表记录 二维
          pg_id: [], //表记录的父粒子中记录号 二维
          pg_db: [], //表记录的父粒子地址 二维
          dataTable: [], //和该表记录的有关联的表名 三维
          dataRecord: [], //和该表记录的有关联的表记录在data中的序号 三维
          dataField: [] //和该表记录的有关联的表字段名 三维
        };
      case "upload_obj_get":
        //调用上传对象获取函数
        $this.zeroUploadObjectGet(dataBase, tableVariable[0], tableVariable[0].$table, tableVariable[0].$arrValue, destVariable[0], data, para.related);
        if (Object.keys(data).length === 0) {
          para.nStep = "end";
        } else {
          if (para.related.table.length === 0) {
            para.nStep = "end";
          } else {
            para.nStep = "related_table_get";
          }
        }
        ++dbFlag;
        break;
      case "related_table_get":
        //调用关联表父粒子记录获取函数
        $this.relatedTableGet(dataBase, para.related, data);
        para.nStep = "end";
        ++dbFlag;
        break;
      case "end":
        return;
    }
    if (++dbFlag === 1) {
      return;
    }
  }
};

/**
 * 上传对象获取函数
 * 调用《上传对象获取函数》把待上传的记录设置好版本号、上传标识和操作类型，
 * 并得到待上传的数据data{}，和关联表及记录related{}
 * @param dataBase
 * @param srcVariable
 * @param table 表名 //当前表格变量的表名
 * @param record 表记录 //当前表格变量的表记录
 * @param destVariable 目标粒子对应层的表格变量 对象格式
 * @param data 上传数据 {t1:{}}
 * @param related
 */
$CPageZeroDB.prototype.zeroUploadObjectGet = function(dataBase, srcVariable, table, record, destVariable, data, related) {
  let $this = this;
  let para = {
    nStep: 0
  };
  let dbFlag, result, arrField, arrValue, dbData;
  while (1) {
    dbFlag = 0;
    if ($this.debugFlag) {
      console.log("zeroUploadObjectGet: " + para.nStep);
    }
    switch (para.nStep) {
      case 0:
        para.destRecord = [];
        //传进来的record，第一层表格变量的$arrValue,是一维数组，其他层$arrValue均为二维数组
        record = JSON.parse(JSON.stringify(record));
        if (Array.isArray(record[0])) {
          para.trueArrValue = JSON.parse(JSON.stringify(record));
          para.notFirstLevel = true;
          record = [].concat.apply([], record);
        } else {
          //因外部传进来的数据可能不是按大小顺序排列,进行排序
          record.sort(function(a, b) {
            return a - b;
          });
        }
        para.x = 0;
        if(para.x === record.length){
          para.nStep = "loopEnd_record";
          ++dbFlag;
          break;
        }
      case "loop_record":
        //调用列读取函数
        result = $this.$db.cacheColRead(dataBase,table,record[para.x]);
        para.tablePointer = result.table;
        para.number = result.number;
        if(para.number === null){
          para.nStep = "loopEnd_record";
        }else{
          if(para.tablePointer[$this.mac.fd.up_flag][para.number] === $this.mac.enum.record.up_flag.yes){
            //para.tablePointer[$pg_id][number]写到destVariable中
            var tableRecord = para.tablePointer[$this.mac.fd.pg_id][para.number];
            if (para.notFirstLevel) {
              for (let i = 0; i < para.trueArrValue.length; i++) {
                if (para.trueArrValue[i].indexOf(record[para.x]) !== -1) {
                  destVariable.$arrValue[i].push(tableRecord);
                  break;
                }
              }
            } else {
              destVariable.$arrValue.push(tableRecord);
            }
            para.nStep = "loopEnd_record";
          }else{
            para.nStep = "checkNoUpload";
          }
        }
        ++dbFlag;
        break;
      case "checkNoUpload":
        //检查未上传过的数据
        if(para.tablePointer[$this.mac.fd.pg_db][para.number] === null){
          if(para.tablePointer[$this.mac.fd.status][para.number] === $this.mac.enum.record.status.delete){
            para.nStep = "loopEnd_record";
          }else{
            para.tablePointer[$this.mac.fd.pg_ver][para.number] = 0;
            para.nStep = "modifyUpFlag";
          }
        }else if(para.tablePointer[$this.mac.fd.pg_ver][para.number] === null){
          para.nStep = "loopEnd_record";
        }else{
          //$pg_ver+1
          //para.tablePointer[$pg_id][number]写到destVariable中
          var tableRecord = para.tablePointer[$this.mac.fd.pg_id][para.number];
          para.tablePointer[$this.mac.fd.pg_ver][para.number]++;
          if (para.notFirstLevel) {
            for (let i = 0; i < para.trueArrValue.length; i++) {
              if (para.trueArrValue[i].indexOf(record[para.x]) !== -1) {
                destVariable.$arrValue[i].push(tableRecord);
                break;
              }
            }
          } else {
            destVariable.$arrValue.push(tableRecord);
          }
          para.nStep = "modifyUpFlag";
        }
        ++dbFlag;
        break;
      case "modifyUpFlag":
        result = $this.$db.cacheColWrite(dataBase,table,$this.mac.fd.up_flag,para.number,$this.mac.enum.record.up_flag.yes);
        para.tablePointer[$this.mac.fd.type][para.number] = $this.mac.enum.record.type.modify;
        para.destRecord.push(para.tablePointer[$this.mac.fd.id][para.number]);
      case "loopEnd_record":
        para.x++;
        if (para.x >= record.length) {
          para.x = 0;
          //传入的destVariable变量有子表格变量时，$arrValue需改为二维数组
          var tableValueArr = [].concat.apply([], destVariable.$arrValue);
          if (destVariable.$arrSubTab.length !== 0 && tableValueArr.length !== 0) {
            for (let i = 0; i < destVariable.$arrSubTab.length; i++) {
              for (let k = 0; k < tableValueArr.length; k++) {
                destVariable.$arrSubTab[i].$arrValue.push([]);
              }
            }
          }
          if (para.destRecord.length === 0) {
            para.nStep = "get_srcVariable_table";
          } else {
            para.nStep = "check_fieldInTabVar";
          }
        } else {
          para.nStep = "loop_record";
        }
        ++dbFlag;
        break;

      case "check_fieldInTabVar":
        para.field = JSON.parse(JSON.stringify(destVariable.$arrField));
        //type=52：获取有效字段（非隐藏字段)
        para.arrValidField = $this.$db.cacheGetAllField(dataBase, table, null, $this.mac.enum.fieldType.effective);
        if (para.field === null) {
          //rField中字段包括用户定义字段，也可能有关联字段对应的关联粒子实例字段
          para.field = JSON.parse(JSON.stringify(para.arrValidField));
        } else {
          //field[]中关联表字段的关联实例字段添加到field[]
          var arrLength = para.field.length;
          for (let i = 0; i < arrLength; i++) {
            var linkTabField_gene = $this.mac.fd.related_prefix + para.field[i];
            if (para.arrValidField.indexOf(linkTabField_gene) !== -1) {
              para.field.push(linkTabField_gene);
            }
          }
        }
        //把ID,父粒子版本,父粒子记录,父表记录填入field[]
        //para.field少了pg_db,可能少了用户定义的关联表字段的关联实例字段
        var fieldArrOne = [$this.mac.fd.id, $this.mac.fd.pg_ver, $this.mac.fd.pg_id, $this.mac.fd.pt_id, $this.mac.fd.del];
        for (let i = 0; i < fieldArrOne.length; i++) {
          para.field.push(fieldArrOne[i]);
        }
        //获取field[]中包含父表记录内的为关联表字段及关联表赋值给relatedField[],relatedTable[]
        //当前表的关联字段
        para.relatedField = [];
        //当前表的关联字段对应的关联表名
        para.relatedTable = [];
        result = $this.$db.cacheColQuery(dataBase, $this.mac.tb.rTable, $this.mac.fd.rTable.tableName, "=", table);
        var fatherTableName = result.table[$this.mac.fd.rTable.fatherTableName][result.arrNumber[0]];
        if (fatherTableName !== null) {
          para.relatedField.push($this.mac.fd.pt_id);
          para.relatedTable.push(fatherTableName);
        }
        dbData = {};
        result = $this.$db.cacheRecordQuery(dataBase, $this.mac.tb.rField,
          $this.mac.fd.rField.tableName + '="' + table + '"',
          [$this.mac.fd.rField.fieldName, $this.mac.fd.rField.linkTable], dbData);

        for (let i = 0; i < dbData[$this.mac.fd.rField.fieldName].length; i++) {
          var fieldName = dbData[$this.mac.fd.rField.fieldName][i];
          var linkTableName = dbData[$this.mac.fd.rField.linkTable][i];
          if (linkTableName && para.field.indexOf(fieldName) !== -1) {
            para.relatedField.push(fieldName);
            para.relatedTable.push(linkTableName);
          }
        }
      case "get_data_startNum":
        //获取添加到data的起始记录n1(因为在下面还会对子表调用该方法，自嵌套表以及自嵌套表的子表的起始记录不一定为0)
        var keys = Object.keys(data);
        if (keys.indexOf(table) === -1) {
          data[table] = {};
          for (let i = 0; i < para.field.length; i++) {
            data[table][para.field[i]] = [];
          }
          para.n1 = 0;
        } else {
          para.n1 = data[table][$this.mac.fd.id].length;
        }
        //获取内存库中table,destRecord[]记录的field[]指定字段内容添加到data[m][][]
        result = $this.$db.cacheColReadArray(dataBase, table, para.destRecord);
        para.tablePointer = result.table;
        para.number = result.arrNumber;
        for (let i = 0; i < para.field.length; i++) {
          for (let n = 0; n < para.number.length; n++) {
            data[table][para.field[i]].push(para.tablePointer[para.field[i]][para.number[n]]);
          }
        }
      case "get_countField":
        //获取table的计数器字段counterField[]
        para.countField = $this.$db.cacheGetAllField(dataBase, table, null, $this.mac.enum.fieldType.counter);
        if (para.countField.length !== 0) {
          var step;
          for (let x = 0; x < para.destRecord.length; x++) {
            for (let y = 0; y < para.countField.length; y++) {
              if (para.field.indexOf(para.countField[y]) === -1) {
                continue;
              }
              step = data[table][para.countField[y]][para.n1 + x].sum - data[table][para.countField[y]][para.n1 + x].total;
              data[table][para.countField[y]][para.n1 + x] = step;
            }
          }
        }
      case "check_relatedField":
        if (para.relatedField.length === 0) {
          para.nStep = "get_srcVariable_table";
          ++dbFlag;
          break;
        } else {
          para.relatedRecord = []; //record关联字段对应的值
          for (let i = 0; i < para.relatedField.length; i++) {
            para.relatedRecord.push([]);
            for (let n = para.n1; n < data[table][para.relatedField[i]].length; n++) {
              para.relatedRecord[i].push(data[table][para.relatedField[i]][n]);
            }
          }
          para.x = 0;
        }
      case "loop_relatedTable":
        //relatedTable[x]在dataBase中是否存在
        //通过$_+relatedField[x]是否在arrValidField来判断
        //若是$pt_id不需单独判断
        var linkTabField_gene = $this.mac.fd.related_prefix + para.relatedField[para.x];
        var nextStep = false;
        if (para.relatedField[para.x] === $this.mac.fd.pt_id) {
          //当前表在粒子中，父表一定在粒子中
          //父记录一定存在，且需要写到related中
          if (!data[table][linkTabField_gene]) {
            data[table][linkTabField_gene] = new Array(data[table][para.relatedField[para.x]].length).fill(null);
          }
        } else {
          if (para.arrValidField.indexOf(linkTabField_gene) === -1) {
            //关联粒子字段不存在rField表中，则表示关联表在当前粒子中
            //在dataBase中存在
            if (!data[table][linkTabField_gene]) {
              data[table][linkTabField_gene] = new Array(data[table][para.relatedField[para.x]].length).fill(null);
            }
          } else {
            nextStep = true;
          }
        }
        if (!nextStep) {
          for (let y = 0; y < para.relatedRecord[para.x].length; y++) {
            if (para.relatedRecord[para.x][y]) {
              var l = related.table.indexOf(para.relatedTable[para.x]);
              if (l === -1) {
                l = related.table.length;
                related.table.push(para.relatedTable[para.x]);
                related.record.push([]);
                related.pg_id.push([]);
                related.pg_db.push([]);
                related.dataTable.push([]);
                related.dataRecord.push([]);
                related.dataField.push([]);
              }
              var p = related.record[l].indexOf(para.relatedRecord[para.x][y]);
              if (p === -1) {
                p = related.record[l].length;
                related.record[l].push(para.relatedRecord[para.x][y]);
                related.pg_id[l].push(null);
                related.pg_db[l].push(null);
                related.dataTable[l].push([]);
                related.dataRecord[l].push([]);
                related.dataField[l].push([]);
              }
              //related.dataTable[l][p]可能重复，但related.dataRecord[l][p]唯一
              related.dataTable[l][p].push(table);
              related.dataRecord[l][p].push(y + para.n1);
              related.dataField[l][p].push(para.relatedField[para.x]);
            }
          }
        }
      case "loopEnd_relatedTable":
        para.x++;
        if (para.x < para.relatedTable.length) {
          para.nStep = "loop_relatedTable";
          ++dbFlag;
          break;
        }
      case "get_srcVariable_table":
        para.sonTable = [];
        para.sonRecord = [];
        //获取子表记录在二维数组中的序号
        var newArrIndex = [];
        var srcVariable_subValue = [].concat.apply([], srcVariable.$arrValue);
        for (let n = 0; n < record.length; n++) {
          for (let m = 0; m < srcVariable_subValue.length; m++) {
            if (srcVariable_subValue[m] === record[n]) {
              newArrIndex.push(m);
              break;
            }
          }
        }
        if (srcVariable.$arrSubTab.length !== 0) {
          for (let i = 0; i < srcVariable.$arrSubTab.length; i++) {
            para.sonTable.push(srcVariable.$arrSubTab[i].$table);
            //除第一层外子表格变量$arrValue均为二维数组
            //按record进行排序para.trueArrValue
            var sonRecord = [];
            for (let m = 0; m < newArrIndex.length; m++) {
              var srcRecordArr = JSON.parse(JSON.stringify(srcVariable.$arrSubTab[i].$arrValue[newArrIndex[m]]));
              srcRecordArr.sort(function(a, b) {
                return a - b;
              });
              sonRecord.push(srcRecordArr);
            }
            para.sonRecord.push(sonRecord);
          }
        }
        if (para.sonTable.length === 0) {
          para.nStep = "end";
          ++dbFlag;
          break;
        } else {
          para.x = 0;
        }
      case "loop_this_fun":
        //循环调用该方法
        var sonRecordArr = [].concat.apply([], para.sonRecord[para.x]);
        if (sonRecordArr.length !== 0) {
          //dataBase, srcVariable, table, record, destVariable, data, related, related_table
          $this.zeroUploadObjectGet(dataBase,
            srcVariable.$arrSubTab[para.x],
            para.sonTable[para.x],
            para.sonRecord[para.x],
            destVariable.$arrSubTab[para.x],
            data, related);
        }
      case "loopEnd_fun":
        para.x++;
        if (para.x >= para.sonTable.length) {
          para.nStep = "end";
        } else {
          para.nStep = "loop_this_fun";
        }
        ++dbFlag;
        break;
      case "end":
        return;
    }
    if (++dbFlag === 1) {
      return;
    }
  }
};

/**
 * 关联表父粒子记录获取函数
 * @param dataBase
 * @param related {table[],record[][],pg_id[][], pg_db[][],dataTable[][][],dataRecord[][][],dataField[][][]}
 * @param data data[][][]
 */
$CPageZeroDB.prototype.relatedTableGet = function(dataBase, related, data) {
  let $this = this;
  let result;
  let para = {
    nStep:0
  };
  let dbFlag = 0;
  while (1) {
    dbFlag = 0;
    if ($this.debugFlag) {
      console.log("relatedTableGet: " + para.nStep);
    }
    switch (para.nStep) {
      case 0:
        //取当前粒子的地址
        result = $this.$db.cacheColQuery(dataBase, "$l_geneLog", $this.mac.fd.pt_id, "=", null);
        para.cruGeneAddr = result.table["gene_addr"][result.arrNumber[0]];// todo 待确定
        para.x = 0;
      case "loop_related_table":
        //调用列读取函数
        result = $this.$db.cacheColReadArray(dataBase, related.table[para.x], related.record[para.x]);
        para.tablePointer = result.table;
        para.number = result.arrNumber;
        //返回值和传入的记录号长度相同，不存在的返回值填入null
        for (let y = 0; y < para.number.length; y++) {
          if (para.number[y] !== null) {
            //记录存在内存
            related.pg_id[para.x][y] = para.tablePointer[$this.mac.fd.pg_id][para.number[y]];
            related.pg_db[para.x][y] = para.tablePointer[$this.mac.fd.pg_db][para.number[y]];
            for (let z = 0; z < related.dataTable[para.x][y].length; z++) {
              var tableName = related.dataTable[para.x][y][z];
              var fieldName = related.dataField[para.x][y][z];
              var idIndex = related.dataRecord[para.x][y][z];
              var linkTable_gene = $this.mac.fd.related_prefix + fieldName;
              if (related.pg_id[para.x][y] || para.tablePointer[$this.mac.fd.status][para.number[y]] === $this.mac.enum.record.status.delete) {
                data[tableName][fieldName][idIndex] = related.pg_id[para.x][y];
                data[tableName][linkTable_gene][idIndex] = related.pg_db[para.x][y];
              } else {
                //当前粒子geneAddr赋值给对应关联粒子字段
                data[tableName][linkTable_gene][idIndex] = para.cruGeneAddr;
              }
            }
          }
        }
      case "loopEnd_related_table":
        para.x++;
        if (para.x < related.table.length) {
          para.nStep = "loop_related_table";
          ++dbFlag;
          break;
        }
      case "end":
        return;
    }
    if (++dbFlag === 1) {
      return;
    }
  }
};

/**
 * 父关联写入函数
 * @param dataBase
 * @param tableVariable
 * @param data
 * @param srcGeneAddr
 * @param dataTrans
 * @param successCallBack
 * @param errorCallBack
 */
$CPageZeroDB.prototype.zeroParentLink = function(dataBase,table,record,pg_id,srcGeneAddr,blockObject,successCallBack, errorCallBack) {
  let $this = this;
  if (successCallBack !== null) {
    errorCallBack = $this.setPara(successCallBack, errorCallBack);
    successCallBack = null;
  }
  let para = errorCallBack;
  let dbFlag = 0;
  let result,m,n;
  while (1) {
    dbFlag = 0;
    if ($this.debugFlag) {
      console.log("zeroParentLink: " + para.nStep);
    }
    switch (para.nStep) {
      case 0:
        blockObject.sum = 0;
        blockObject.success = para.successCallBack;
        blockObject.error = para.errorCallBack;
        para.tablePointer = {};
        para.number = -1;
        para.parentRecord = {
          geneAddr:srcGeneAddr,
          table:[],
          record:[],
          pg_id:[]
        };
        para.x = 0;
      case "loop_table":
        //获取计数器字段
        para.field = $this.$db.cacheGetAllField(dataBase,table[para.x],null,$this.mac.enum.fieldType.counter);
        para.y = 0;
      case "loop_record":
        result = $this.$db.cacheColRead(dataBase,table[para.x],record[para.x][para.y]);
        para.tablePointer = result.table;
        para.number = result.number;
        if(para.number === null){
          para.nStep = 'loopEnd_record';
        }else{
          if(para.tablePointer[$this.mac.fd.pg_id][para.number]){
            m = para.parentRecord.table.indexOf(table[para.x]);
            if(m === -1){
              m = para.parentRecord.table.length;
              para.parentRecord.table.push(table[para.x]);
              para.parentRecord.record.push([]);
              para.parentRecord.pg_id.push([]);
            }
            para.parentRecord.record[m].push(record[para.x][para.y]);
            para.parentRecord.pg_id[m].push(para.tablePointer[$this.mac.fd.pg_id][para.number]);
            para.nStep = 'loopEnd_record';
          }else{
            para.nStep = 'check_block';
          }
        }
        ++dbFlag;
        break;
      case "check_block":
        if(para.tablePointer[$this.mac.fd.type][para.number] === $this.mac.enum.record.type.block){
          // 判断两个变量是否指向同一个值
          if(para.tablePointer[$this.mac.fd.blockDataTrans][para.number] === blockObject){
            para.nStep = 'colWrite_pgId';
          }else{
            para.nStep = 'setBlockQueue';
          }
        }else{
          para.nStep = 'colWrite_pgId';
        }
        ++dbFlag;
        break;
      case "setBlockQueue":
        if(!para.tablePointer[$this.mac.fd.block_queue][para.number]){
          para.tablePointer[$this.mac.fd.block_queue][para.number] = {
            blockObject:[],
            command:[],
            para:[]
          };
        }
        para.tablePointer[$this.mac.fd.block_queue][para.number].blockObject.push(blockObject);
        para.tablePointer[$this.mac.fd.block_queue][para.number].command.push($this.mac.enum.record.blockQueue.command.parentLink);
        para.tablePointer[$this.mac.fd.block_queue][para.number].para.push({
          pg_id:pg_id[para.x][para.y],
          srcGeneAddr:srcGeneAddr
        });
        blockObject.sum++;
        para.nStep = 'loopEnd_record';
        ++dbFlag;
        break;
      case "colWrite_pgId":
        //调用列写入函数
        $this.$db.cacheColWrite(dataBase,table[para.x],$this.mac.fd.pg_id,para.number,pg_id[para.x][para.y]);
        $this.$db.cacheColWrite(dataBase,table[para.x],$this.mac.fd.pg_db,para.number,srcGeneAddr);
        para.tablePointer[$this.mac.fd.pg_ver][para.number] = 0;
        if(para.field.length !== 0){
          for(let z = 0;z < para.field.length;z++){
            para.tablePointer[para.field[z]][para.number].step = 0;
          }
        }
      case 'loopEnd_record':
        para.y++;
        if(para.y >= record[para.x].length){
          para.x++;
          if(para.x >= table.length){
            para.nStep = 'check_blockObject';
          }else{
            para.nStep = 'loop_table';
          }
        }else{
          para.nStep = 'loop_record';
        }
        ++dbFlag;
        break;
      case 'check_blockObject':
        if(blockObject.sum === 0){
          blockObject = {
            sum:0,
            success:'',
            error:''
          };
          para.nStep = 'end';
        }else{
          para.nStep = 'default';
        }
        ++dbFlag;
        break;
      case "end":
        para.successCallBack(para.parentRecord);
        return;
      case "default":
        return;
    }
    if (++dbFlag === 1) {
      return;
    }
  }
};