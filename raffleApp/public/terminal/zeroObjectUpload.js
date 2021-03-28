// var $CTerminalZeroDB = require(global.path_zeroDB + "/zeroDB.js");

// 对象上传函数
// tableVariable: 表格变量
// destVariable: tableVariable中清空记录的表格变量
// data: 传入为{}, 返回需要上传
$CTerminalZeroDB.prototype.zeroObjectUpload = function(dataBase, tableVariable, destVariable, data, dataTrans, successCallBack, errorCallBack) {
    let $this = this;
    let result;
    if (successCallBack !== null) {
        errorCallBack = $this.setPara(successCallBack, errorCallBack);
        successCallBack = null;
    }
    let para = errorCallBack, dbFlag;
    while (1) {
        dbFlag = 0;
        if ($this.debugFlag) {
            if (para.oldNStep !== para.nStep) {
                console.log("$CTerminalZeroDB.prototype.zeroObjectUpload: nSTep = " + para.nStep);
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
                //获取dataTrans的关联表格relatedTable
                result = $this.$db.cacheColRead(dataBase, $this.mac.tb.dataTrans, dataTrans);
                let tablePointer = result.table;
                let number = result.number;
                if (!tablePointer[$this.mac.fd.dataTrans.relatedTable][number]) {
                    tablePointer[$this.mac.fd.dataTrans.relatedTable][number] = {
                        tableName: [],
                        type: []
                    };
                }
                para.related_table = tablePointer[$this.mac.fd.dataTrans.relatedTable][number];
            case "upload_obj_get":
                //调用上传对象获取函数
                $this.zeroUploadObjectGet(dataBase, tableVariable[0], tableVariable[0].$table, tableVariable[0].$arrValue, destVariable[0], data, para.related, para.related_table);
                if (Object.keys(data).length === 0) {
                    para.nStep = "end";
                } else {
                    //related_table{}回填入dataTrans事务表对应字段中--在改变变量的值时已直接改变数据库的值
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
                $this.relatedTableGet(dataBase, para.related, data, function() {
                    para.nStep = "end";
                    if (++dbFlag === 2) {
                        $this.zeroObjectUpload(dataBase, tableVariable, destVariable, data, dataTrans, successCallBack, errorCallBack);
                    }
                }, para.errorCallBack);
                break;
            case "end":
                para.successCallBack();
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
 * @param related_table 事务关联表记录
 */
$CTerminalZeroDB.prototype.zeroUploadObjectGet = function(dataBase, srcVariable, table, record, destVariable, data, related, related_table) {
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
                        para.nStep = "check_relatedTable";
                    }
                } else {
                    para.nStep = "loop_record";
                }
                ++dbFlag;
                break;


            case "check_relatedTable":
                var tableIndex = related_table.tableName.indexOf(table);
                if (tableIndex === -1) {
                    related_table.tableName.push(table);
                    related_table.type.push($this.mac.enum.dataTrans.relatedTable.type.modifyOrAddOrDelete);
                } else {
                    related_table.type[tableIndex] = $this.mac.enum.dataTrans.relatedTable.type.modifyOrAddOrDelete;
                }
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
                    $this.mac.fd.rField.tableName + "=\"" + table + "\"",
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
                                // related.original.push([]);
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
                                // related.original[l].push(null);
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
                //经过上面步骤后，上传标志为1的记录的父记录添加到destVariable中，
                //上传标志为0但不是第一次上传的记录的父记录添加到destVariable中，数据添加到data中
                //上传标志为0是第一次上传且不是删除类型的记录未添加到destVariable中，数据添加到data中
                //不存在的记录，和第一次上传且是删除类型的记录被筛掉
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
                        data, related, related_table);
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
 * @param related {table[],record[][],original[][],pg_id[][], pg_db[][],dataTable[][][],dataRecord[][][],dataField[][][]}
 * @param data data[][][]
 * @param successCallBack
 * @param errorCallBack
 */
$CTerminalZeroDB.prototype.relatedTableGet = function(dataBase, related, data, successCallBack, errorCallBack) {
    let $this = this;
    let result;
    if (successCallBack !== null) {
        errorCallBack = $this.setPara(successCallBack, errorCallBack);
        successCallBack = null;
    }
    let para = errorCallBack;
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
                para.directQuery = {
                    table: [],
                    record: [], //二维
                    field: [], //二维
                    condition: [], //二维
                    data: {},  //以表名为key的对象
                    relatedx: [], //记录related.table的index
                    relatedy: [] //记录related.record的index
                };
                para.x = 0;
            case "loop_related_table":
                //调用列读取函数
                result = $this.$db.cacheColReadArray(dataBase, related.table[para.x], related.record[para.x]);
                para.tablePointer = result.table;
                para.number = result.arrNumber;
                //返回值和传入的记录号长度相同，不存在的返回值填入null
                for (let y = 0; y < para.number.length; y++) {
                    if (para.number[y] !== null && para.tablePointer[$this.mac.fd.version][para.number[y]] !== null) {
                        //记录存在内存，且版本号不为空
                        related.pg_id[para.x][y] = para.tablePointer[$this.mac.fd.pg_id][para.number[y]];
                        related.pg_db[para.x][y] = para.tablePointer[$this.mac.fd.pg_db][para.number[y]];
                        // related.original[para.x][y] = para.tablePointer[$this.mac.fd.original][para.number[y]];
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
                    } else {
                        var m = para.directQuery.table.indexOf(related.table[para.x]);
                        if (m === -1) {
                            m = para.directQuery.table.length;
                            para.directQuery.table.push(related.table[para.x]);
                            para.directQuery.field.push([
                                $this.mac.fd.recordId,
                                $this.mac.fd.pg_id,
                                $this.mac.fd.id,
                                $this.mac.fd.pg_db,
                                $this.mac.fd.status
                            ]);
                            para.directQuery.record.push([]);
                            para.directQuery.data[related.table[para.x]] = {};
                            para.directQuery.data[related.table[para.x]][$this.mac.fd.recordId] = [];
                            para.directQuery.data[related.table[para.x]][$this.mac.fd.pg_id] = [];
                            para.directQuery.data[related.table[para.x]][$this.mac.fd.id] = [];
                            para.directQuery.data[related.table[para.x]][$this.mac.fd.pg_db] = [];
                            para.directQuery.data[related.table[para.x]][$this.mac.fd.status] = [];
                            para.directQuery.condition.push([]);
                            para.directQuery.relatedx.push([]);
                            para.directQuery.relatedy.push([]);
                        }
                        para.directQuery.record[m].push(related.record[para.x][y]);
                        para.directQuery.data[related.table[para.x]][$this.mac.fd.recordId].push(related.record[para.x][y]);
                        para.directQuery.relatedx[m].push(para.x);
                        para.directQuery.relatedy[m].push(y);
                    }
                }
            case "loopEnd_related_table":
                para.x++;
                if (para.x < related.table.length) {
                    para.nStep = "loop_related_table";
                    ++dbFlag;
                    break;
                }
            case "check_query_table":
                if (para.directQuery.table.length === 0) {
                    para.nStep = "end";
                    ++dbFlag;
                } else {
                    for (let x = 0; x < para.directQuery.table.length; x++) {
                        para.directQuery.condition[x] = [
                            $this.mac.fd.recordId + "=" + JSON.stringify(para.directQuery.record[x]) +
                            "&&" + $this.mac.fd.status + "<=" + $this.mac.enum.record.status.temporary
                        ];
                    }
                    /**
                     * 临时方案
                     * 详细设计和api文档认为条件是二维数组
                     * 底层实现认为条件是一维数组
                     * 因底层修改需要时间，暂时使用临时方案供夏恒调试
                     */
                    let condition = [];
                    for(let i = 0; i < para.directQuery.table.length; i++){
                        if(!para.directQuery.condition[i]) {
                            condition.push(null);
                            continue;
                        }
                        let cond = '';
                        for(let n = 0; n < para.directQuery.condition[i].length; n++){
                            cond += cond ? '||(' + para.directQuery.condition[i][n] + ')'
                              : '(' + para.directQuery.condition[i][n] + ')';
                        }
                        condition.push(cond ? cond : null);
                    }
                    // $this.$db.storageDirectRecordQuery(dataBase, para.directQuery.table, para.directQuery.condition,
                    $this.$db.storageDirectRecordQuery(dataBase, para.directQuery.table, condition,
                        para.directQuery.field, para.directQuery.data, null, function(result) {
                            //循环判断
                            for (let x = 0; x < para.directQuery.table.length; x++) {
                                var tableNameOne = para.directQuery.table[x];
                                for (let y = 0; y < para.directQuery.record[x].length; y++) {
                                    //m对应related.table表格序号，n对应related.record记录序号
                                    var m = para.directQuery.relatedx[x][y], n = para.directQuery.relatedy[x][y];
                                    //《持久库直接查询函数》会根据$record_id来对应赋值;如没有，则赋值null
                                    var tableIdOne = para.directQuery.data[tableNameOne][$this.mac.fd.id][y];
                                    var tableStatusOne = para.directQuery.data[tableNameOne][$this.mac.fd.status][y];
                                    var tablePgIdOne = para.directQuery.data[tableNameOne][$this.mac.fd.pg_id][y];
                                    var tablePgDbOne = para.directQuery.data[tableNameOne][$this.mac.fd.pg_db][y];
                                    if (tableIdOne) {
                                        related.pg_id[m][n] = tablePgIdOne;
                                        related.pg_db[m][n] = tablePgDbOne;
                                        // related.original[m][n] = tableIdOne;
                                        for (let z = 0; z < related.dataTable[m][n].length; z++) {
                                            var tableName = related.dataTable[m][n][z];
                                            //tableName和tableNameOne相等
                                            var fieldName = related.dataField[m][n][z];
                                            var idIndex = related.dataRecord[m][n][z];
                                            var linkTable_gene = $this.mac.fd.related_prefix + fieldName;
                                            if (tablePgIdOne || tableStatusOne === $this.mac.enum.record.status.delete) {
                                                data[tableName][fieldName][idIndex] = tablePgIdOne;
                                                data[tableName][linkTable_gene][idIndex] = tablePgDbOne;
                                            } else {
                                                //当前粒子geneAddr赋值给对应关联粒子字段
                                                data[tableName][linkTable_gene][idIndex] = para.cruGeneAddr;
                                            }
                                        }
                                    }
                                }
                            }
                            para.nStep = "end";
                            if (++dbFlag === 2) {
                                $this.relatedTableGet(dataBase, related, data, successCallBack, errorCallBack);
                            }
                        }, para.errorCallBack);
                }
                break;
            case "end":
                para.successCallBack();
                return;
        }
        if (++dbFlag === 1) {
            return;
        }
    }
};

/**
 * 《数据上传本地化函数》
 * 功能：
 * 1、。
 * @param successCallBack
 * @param errorCallBack
 */
$CTerminalZeroDB.prototype.dataUploadLocalize = function(dataBase, tableVariable, data, srcGeneAddr, dataTrans, successCallBack, errorCallBack) {
    let $this = this;
    if (successCallBack !== null) {
        errorCallBack = $this.setPara(successCallBack, errorCallBack);
        successCallBack = null;
    }
    let para = errorCallBack;
    let dbFlag = 0;
    while (1) {
        dbFlag = 0;
        if ($this.debugFlag) {
            console.log("dataUploadLocalize: " + para.nStep);
        }
        switch (para.nStep) {
            case 0:
                para.delete = {
                    table: [],
                    record: [], //二维
                    datay: [] //二维
                };
                para.modify = {
                    table: [],
                    record: [], //二维
                    datay: [] //二维
                };
                para.sort = {
                    table: [],
                    number: [],
                    src_id: [],  //二维
                    dest_id: [],  //二维
                    datay: [],  //二维
                    r_datax: [],  //三维
                    r_datay: [],  //三维
                    r_dataField: [],  //三维
                    relatedx: [],  //二维
                    relatedy: [],  //二维
                    relatedz: []  //二维
                };
                para.newRelated = {
                    table: [],
                    number: [],
                    src_gene: [], //二维
                    src_id: [], //二维
                    dest_id: [], //二维
                    r_datax: [],  //三维
                    r_datay: [],  //三维
                    r_dataField: [],  //三维
                    relatedx: [],  //二维
                    relatedy: [],  //二维
                    relatedz: []  //二维
                };
                para.related = {
                    geneAddr: [],
                    table: [],  //二维
                    record: [],  //三维
                    pg_id: []  //三维
                };
            case "uploadSort":
                //调用上传记录分类函数
                $this.zeroUploadSort(dataBase, data, para.related, para.sort, para.modify, para.delete, srcGeneAddr);
            case "uploadRelatedRecord":
                //调用上传关联新记录获取函数
                $this.zeroUploadRelatedRecord(dataBase, data, para.related, para.sort, para.newRelated, srcGeneAddr);
            case "uploadNewRecordGet":
                //上传新记录生成函数
                $this.uploadNewRecordGet(dataBase, data, para.related, para.sort, para.newRelated, dataTrans, function(result) {
                    para.nStep = "variableChange";
                    if (++dbFlag === 2) {
                        $this.dataUploadLocalize(dataBase, tableVariable, data, srcGeneAddr, dataTrans, successCallBack, errorCallBack);
                    }
                }, para.errorCallBack);
                break;
            case "variableChange":
                var table = tableVariable[0].$table;
                $this.uploadVariableChange(dataBase, tableVariable, [table],[null], data);
                //将删除data中的id、$pg_id移到上传变量记录转换函数外部
                for (let key in data) {
                    delete data[key][$this.mac.fd.id];
                    delete data[key][$this.mac.fd.pg_id];
                }
            case "check_modify_table":
                if (para.modify.table.length !== 0) {
                    $this.zeroRecordModifySub(dataBase, para.modify.table, para.modify.record, data, para.modify.datay, dataTrans, function(result) {
                        para.nStep = "check_delete_table";
                        if (++dbFlag === 2) {
                            $this.dataUploadLocalize(dataBase, tableVariable, data, srcGeneAddr, dataTrans, successCallBack, errorCallBack);
                        }
                    }, para.errorCallBack);
                    break;
                }
            case "check_delete_table":
                if (para.delete.table.length !== 0) {
                    //调用记录修改子函数
                    $this.zeroRecordDeleteSub(dataBase, para.delete.table, para.delete.record, data, para.delete.datay, dataTrans, function(result) {
                        para.nStep = "check_sort_table";
                        if (++dbFlag === 2) {
                            $this.dataUploadLocalize(dataBase, tableVariable, data, srcGeneAddr, dataTrans, successCallBack, errorCallBack);
                        }
                    }, para.errorCallBack);
                    break;
                }
            case "check_sort_table":
                para.nStep = "check_newRelated_table";
                if (para.sort.table.length !== 0) {
                    $this.zeroRecordNewSub(dataBase, para.sort.table, para.sort.dest_id, null, null, para.sort.datay, data, dataTrans, function() {
                        if (++dbFlag === 2) {
                            $this.dataUploadLocalize(dataBase, tableVariable, data, srcGeneAddr, dataTrans, successCallBack, errorCallBack);
                        }
                    }, para.errorCallBack);
                } else {
                    dbFlag++;
                }
                break;
            case "check_newRelated_table":
                if (para.newRelated.table.length !== 0) {
                    //调用临时记录新增函数
                    $this.zeroTemporaryNew(dataBase, para.newRelated, 0, dataTrans);
                }
            case "getResult":
                para.result = {
                    geneAddr:para.related.geneAddr,
                    table: para.related.table,
                    record: para.related.record,
                    pg_id: para.related.pg_id,
                    tableVariable:tableVariable
                };
                para.nStep = "end";
                ++dbFlag;
                break;
            case "end":
                para.successCallBack(para.result);
                return;
        }
        if (++dbFlag === 1) {
            return;
        }
    }
};

// /* 上传记录分类函数
// data = {
//     表格: {
//         字段: []
//     }
// };
//
// related = {
//     geneAddr: [],
//     table: [[]],
//     record: [[[]]],
//     pg_id: [[[]]]
// };
//
// sort = {
//     table: [],
//     number: [],
//     src_id: [[]],
//     dest_id: [[]],
//     datay: [[]],
//     r_datax: [[[]]],
//     r_datay: [[[]]],
//     r_dataField: [[[]]],
//     relatedx: [[]],
//     relatedy: [[]],
//     relatedz: [[]]
// };
//
// modify = {
//     table: [],
//     record: [[]],
//     datay: [[]]
// };
//
// del = {
//     table: [],
//     record: [[]],
//     datay: [[]]
// };
//
// */
$CTerminalZeroDB.prototype.zeroUploadSort = function(dataBase, data, related, sort, modify, del, srcGeneAddr) {
    let nStep = 0,
        nStepOld = null,
        a, x, tableTotal, field, value, result, y, recordTotal, b, c, m, n, tableArr, clrTable = [];
    while (1) {
        if (this.debugFlag && nStepOld !== nStep) {
            console.log("$CTerminalZeroDB.prototype.zeroUploadSort nStep = " + nStep);
            nStepOld = nStep;
        }
        switch (nStep) {
            case 0:
                a = related.geneAddr.length;
                related.geneAddr.push(srcGeneAddr);
                related.table.push([]);
                related.record.push([]);
                related.pg_id.push([]);
                x = 0;
                tableArr = Object.keys(data);
                tableTotal = tableArr.length;
                nStep = "call_cacheColQuery";
                break;
            case "call_cacheColQuery":
                field = this.mac.fd.rTable.tableName;
                value = tableArr[x];
                result = this.$db.cacheColQuery(dataBase, this.mac.tb.rTable, field, "=", value);
                // 是否存在dataBase中
                if (result.arrNumber.length === 0) {// 不存在
                    clrTable.push(tableArr[x]);
                    nStep = "set_x";
                } else {// 存在
                    y = 0;
                    recordTotal = data[tableArr[x]][this.mac.fd.id].length;
                    nStep = "loop_table_record";
                }
                break;
            case "loop_table_record":
                if (data[tableArr[x]][this.mac.fd.pg_id][y] === null) {
                    b = related.table[a].indexOf(tableArr[x]);
                    if (b === -1) {
                        b = related.table[a].length;
                        related.table[a].push(tableArr[x]);
                        related.record[a].push([]);
                        related.pg_id[a].push([]);
                    }
                    c = related.record[a][b].length;
                    related.record[a][b].push(data[tableArr[x]][this.mac.fd.id][y]);
                    related.pg_id[a][b].push(data[tableArr[x]][this.mac.fd.pg_id][y]);

                    m = sort.table.indexOf(tableArr[x]);
                    if (m === -1) {
                        m = sort.table.length;
                        sort.table.push(tableArr[x]);
                        sort.number[m] = 0;
                        sort.src_id[m] = [];
                        sort.dest_id[m] = [];
                        sort.datay[m] = [];
                        sort.r_datax[m] = [];
                        sort.r_datay[m] = [];
                        sort.r_dataField[m] = [];
                        sort.relatedx[m] = [];
                        sort.relatedy[m] = [];
                        sort.relatedz[m] = [];
                    }
                    n = sort.src_id[m].length;
                    sort.src_id[m].push(data[tableArr[x]][this.mac.fd.id][y]);
                    sort.dest_id[m].push(null);
                    sort.datay[m].push(y);
                    sort.r_datax[m].push([]);
                    sort.r_datay[m].push([]);
                    sort.r_dataField[m].push([]);
                    sort.number[m]++;
                    sort.relatedx[m].push(a);
                    sort.relatedy[m].push(b);
                    sort.relatedz[m].push(c);
                } else if (data[tableArr[x]][this.mac.fd.del][y] === this.mac.enum.record.status.delete) {
                    m = del.table.indexOf(tableArr[x]);
                    if (m === -1) {
                        m = del.table.length;
                        del.table[m] = tableArr[x];
                        del.record[m] = [];
                        del.datay[m] = [];
                    }
                    n = del.record[m].length;
                    del.record[m][n] = data[tableArr[x]][this.mac.fd.pg_id][y];
                    del.datay[m][n] = y;
                } else {
                    m = modify.table.indexOf(tableArr[x]);
                    if (m === -1) {
                        m = modify.table.length;
                        modify.table.push(tableArr[x]);
                        modify.record.push([]);
                        modify.datay.push([]);
                    }
                    n = modify.record[m].length;
                    modify.record[m][n] = data[tableArr[x]][this.mac.fd.pg_id][y];
                    modify.datay[m][n] = y;
                }
                if (++y === recordTotal) {
                    nStep = "set_x";
                }
                break;
            case "set_x":
                if (++x === tableArr.length) {
                    if (clrTable.length !== 0) {
                        for (let i = 0; i < clrTable.length; i++) {
                            delete data[clrTable[i]];
                        }
                    }
                    nStep = "end";
                } else {
                    nStep = "call_cacheColQuery";
                }
                break;
            case "end":
                return;
        }
    }
};

$CTerminalZeroDB.prototype.zeroUploadRelatedRecord = function(dataBase, data, related, sort, newRelated, srcGeneAddr) {
    let $this = this, nStep = 0, nStepOld = null, x, tableTotal, userField, relatedGene, invalidField, i, result, z,
        geneTotal, table, tablePointer, number, relatedField, relatedTable, y, recordTotal, geneAddr, orgGeneAddr,
        relatedRecord, relatedPgId, m, n, l, a, b, c, field, value,validField;
    while (1) {
        if (this.debugFlag && nStepOld !== nStep) {
            console.log("$CTerminalZeroDB.prototype.zeroUploadRelatedRecord nStep = " + nStep);
            nStepOld = nStep;
        }
        switch (nStep) {
            case 0:
                x = 0;
                table = Object.keys(data);
                tableTotal = table.length;
            case "loopTable":
                userField = Object.keys(data[table[x]]).filter(function(v) {
                    return v !== $this.mac.fd.id && !v.includes("$");
                });
                relatedGene = [];
                validField = this.$db.cacheGetAllField(dataBase, table[x], null, this.mac.enum.fieldType.effective);
                invalidField = [];
                for (i = 0; i < userField.length; i++) {
                    if (!validField.includes(userField[i])) {
                        // 删除当前粒子中不存在的字段
                        invalidField.push(userField[i]);
                        delete data[table[x]][userField[i]];
                        if (data[table[x]]["$_" + userField[i]]) {
                            delete data[table[x]]["$_" + userField[i]];
                        }
                    }
                }
                relatedGene = Object.keys(data[table[x]]).filter(function(v) {
                    return v.indexOf("$_") === 0;
                });
                if (relatedGene.length === 0) {
                    nStep = "setVer";
                } else {
                    z = 0;
                    geneTotal = relatedGene.length;
                    nStep = "loopRelatedGene";
                }
                break;
            case "loopRelatedGene":
                if (relatedGene[z] === "$_" + $this.mac.fd.pt_id) {
                    relatedField = $this.mac.fd.pt_id;
                    result = $this.$db.cacheColQuery(dataBase, this.mac.tb.rTable, $this.mac.fd.rTable.tableName, "=", table[x]);
                    relatedTable = result.table[$this.mac.fd.rTable.fatherTableName][result.arrNumber[0]];
                } else{
                    field = this.mac.fd.rField.tableName;
                    value = table[x];
                    result = this.$db.cacheColQuery(dataBase, this.mac.tb.rField, field, "=", value);
                    tablePointer = result.table;
                    number = result.arrNumber;
                    for (let i = 0; i < number.length; i++) {
                        if (tablePointer[this.mac.fd.rField.fieldName][number[i]] === relatedGene[z].slice("$_".length)) {
                            relatedField = relatedGene[z].slice("$_".length);
                            relatedTable = tablePointer[this.mac.fd.rField.linkTable][number[i]];
                            break;
                        }
                    }
                }
                if (validField.includes("$_" + relatedField)) {// 关联实例字段存在则关联表不存在
                    nStep = "setZ";
                } else {// 存在
                    y = 0;
                    recordTotal = data[table[x]][relatedGene[z]].length;
                    result = $this.$db.cacheColQuery(dataBase, "$l_geneLog", $this.mac.fd.pt_id, "=", null);
                    geneAddr = result.table["gene_addr"][result.arrNumber[0]];// todo 待确定
                    nStep = "loopRecord";
                }
                break;
            case "loopRecord":
                orgGeneAddr = data[table[x]][relatedGene[z]][y];
                if (orgGeneAddr && orgGeneAddr !== geneAddr) {// 不等于当前geneAddr
                    nStep = "judgeRelatedTable";
                    if (orgGeneAddr === srcGeneAddr) {
                        relatedRecord = data[table[x]][relatedField][y];
                        relatedPgId = data[table[x]][$this.mac.fd.pg_id][y];
                        m = sort.table.indexOf(relatedTable);
                        if (m !== -1) {
                            n = sort.src_id[m].indexOf(relatedRecord);
                            if (n !== -1) {
                                l = sort.r_datax[m][n].length;
                                sort.r_datax[m][n].push(table[x]);
                                sort.r_datay[m][n].push(y);
                                sort.r_dataField[m][n].push(relatedField);
                                nStep = "setY";
                            }
                        }
                    }
                } else {
                    nStep = "setY";
                }
                break;
            case "judgeRelatedTable":
                m = newRelated.table.indexOf(relatedTable);
                if (m === -1) {
                    m = newRelated.table.length;
                    newRelated.table.push(relatedTable);
                    newRelated.number[m] = 0;
                    newRelated.src_gene[m] = [];
                    newRelated.src_id[m] = [];
                    newRelated.dest_id[m] = [];
                    newRelated.r_datax[m] = [];
                    newRelated.r_datay[m] = [];
                    newRelated.r_dataField[m] = [];
                    newRelated.relatedx[m] = [];
                    newRelated.relatedy[m] = [];
                    newRelated.relatedz[m] = [];
                }
                n = newRelated.src_id[m].indexOf(relatedRecord);
                if (n === -1 || (newRelated.src_gene[m][n] !== orgGeneAddr)) {// 不存在
                    n = newRelated.src_gene[m].length;
                    newRelated.src_gene[m].push(orgGeneAddr);
                    newRelated.src_id[m].push(relatedRecord);
                    newRelated.number[m]++;

                    // newRelated.dest_id[m].push(null);
                    newRelated.r_datax[m].push([]);
                    newRelated.r_datay[m].push([]);
                    newRelated.r_dataField[m].push([]);

                    a = related.geneAddr.indexOf(orgGeneAddr);
                    if (a === -1) {
                        a = related.geneAddr.length;
                        related.geneAddr.push(orgGeneAddr);
                        related.table.push([]);
                        related.record.push([]);
                        related.pg_id.push([]);
                    }
                    b = related.table[a].indexOf(relatedTable);
                    if (b === -1) {
                        b = related.table[a].length;
                        related.table[a].push(relatedTable);
                        related.record[a].push([]);
                        related.pg_id[a].push([]);
                    }
                    c = related.record[a][b].length;
                    related.record[a][b].push(relatedRecord);
                    related.pg_id[a][b].push(relatedPgId);

                    newRelated.relatedx[m].push(a);
                    newRelated.relatedy[m].push(b);
                    newRelated.relatedz[m].push(c);
                }
            case "setNewRelated":
                l = newRelated.r_datax[m][n].length;
                newRelated.r_datax[m][n][l] = table[x];
                newRelated.r_datay[m][n][l] = y;
                newRelated.r_dataField[m][n][l] = relatedField;
                nStep = "setY";
                break;
            case "setY":
                if (++y === recordTotal) {
                    delete data[table[x]][relatedGene[z]];
                    nStep = "setZ";
                } else {
                    nStep = "loopRecord";
                }
                break;
            case "setZ":
                if (++z === geneTotal) {
                    nStep = "setVer";
                } else {
                    nStep = "loopRelatedGene";
                }
                break;
            case "setVer":
                data[table[x]][this.mac.fd.version] = data[table[x]][this.mac.fd.pg_ver];
                delete  data[table[x]][this.mac.fd.pg_ver];
                nStep = "setX";
                break;
            case "setX":
                if (++x === tableTotal) {
                    nStep = "end";
                } else {
                    nStep = "loopTable";
                }
                break;
            case "end":
                return;
        }
    }
};

/**
 * 《上传新纪录生成函数》
 * 功能：
 * 1、
 * @param successCallBack
 * @param errorCallBack
 */
$CTerminalZeroDB.prototype.uploadNewRecordGet = function(dataBase, data, related, sort, newRelated, dataTrans, successCallBack, errorCallBack) {
    let $this = this;
    if (successCallBack !== null) {
        errorCallBack = $this.setPara(successCallBack, errorCallBack);
        successCallBack = null;
    }
    let para = errorCallBack;
    let dbFlag = 0;
    while (1) {
        dbFlag = 0;
        if ($this.debugFlag) {
            console.log("uploadNewRecordGet: " + para.nStep);
        }
        switch (para.nStep) {
            case 0:
                //获取dataTrans的阻塞对象blockObject
                para.newTable = JSON.parse(JSON.stringify(sort.table));
                para.newNumber = JSON.parse(JSON.stringify(sort.number));
                if (newRelated.table.length === 0) {
                    para.nStep = "check_newTable";
                    ++dbFlag;
                    break;
                } else {
                    para.x = 0;
                }
            case "loop_newRelated_table":
                var m = para.newTable.indexOf(newRelated.table[para.x]);
                if (m === -1) {
                    para.newTable.push(newRelated.table[para.x]);
                    para.newNumber.push(newRelated.number[para.x]);
                } else {
                    para.newNumber[m] += newRelated.number[para.x];
                }
            case "loopEnd_newRelated_table":
                para.x++;
                if (para.x < newRelated.table.length) {
                    para.nStep = "loop_newRelated_table";
                    ++dbFlag;
                    break;
                }
            case "check_newTable":
                if (para.newTable.length === 0) {
                    para.nStep = "end";
                    ++dbFlag;
                } else {
                    $this.zeroGetRecord_(dataBase, para.newTable, para.newNumber, function(result) {
                        for (let x = 0; x < result.table.length; x++) {
                            var y = 0;
                            var m = sort.table.indexOf(result.table[x]);
                            if (m !== -1) {
                                for (; y < sort.number[m]; y++) {
                                    sort.dest_id[m][y] = result.record[x][y];
                                    var index1 = sort.relatedx[m][y];
                                    var index2 = sort.relatedy[m][y];
                                    var index3 = sort.relatedz[m][y];
                                    related.pg_id[index1][index2][index3] = result.record[x][y];
                                    data[result.table[x]][$this.mac.fd.pg_id][sort.datay[m][y]] = result.record[x][y];
                                    for (let z = 0; z < sort.r_datax[m][y].length; z++) {
                                        var tableName = sort.r_datax[m][y][z];
                                        var fieldName = sort.r_dataField[m][y][z];
                                        var idIndex = sort.r_datay[m][y][z];
                                        data[tableName][fieldName][idIndex] = result.record[x][y];
                                    }
                                }
                            }
                            m = newRelated.table.indexOf(result.table[x]);
                            if (m !== -1) {
                                for (let n = 0; n < newRelated.number[m]; n++) {
                                    newRelated.dest_id[m][n] = result.record[x][y];
                                    var index1 = newRelated.relatedx[m][n];
                                    var index2 = newRelated.relatedy[m][n];
                                    var index3 = newRelated.relatedz[m][n];
                                    related.pg_id[index1][index2][index3] = result.record[x][y];
                                    for (let z = 0; z < newRelated.r_datax[m][n].length; z++) {
                                        var tableName = newRelated.r_datax[m][n][z];
                                        var fieldName = newRelated.r_dataField[m][n][z];
                                        var idIndex = newRelated.r_datay[m][n][z];
                                        data[tableName][fieldName][idIndex] = result.record[x][y];
                                    }
                                    y++;
                                }
                            }
                        }
                        para.nStep = "end";
                        if (++dbFlag === 2) {
                            $this.uploadNewRecordGet(dataBase, data, related, sort, newRelated, dataTrans, successCallBack, errorCallBack);
                        }
                    }, para.errorCallBack);
                }
                break;
            case "end":
                para.successCallBack();
                return;
        }
        if (++dbFlag === 1) {
            return;
        }
    }
};

$CTerminalZeroDB.prototype.zeroGetRecord_ = function(dataBase, tableArr, newNumberArr, successCallBack, errorCallBack) {
    let $this = this;
    if (successCallBack !== null) {
        errorCallBack = $this.setPara(successCallBack, errorCallBack);
        successCallBack = null;
    }
    let para = errorCallBack, dbFlag;
    while (1) {
        dbFlag = 0;
        if ($this.debugFlag) {
            if (para.nStep !== para.nStepOld) {
                console.log("$CTerminalZeroDB.prototype.zeroGetRecord_: para.nStep = " + para.nStep);
                para.nStepOld = para.nStep;
            }
        }
        switch (para.nStep) {
            case 0:
                para.i = 0;
                para.result = { table: [], record: [] };
                para.nStep = "loopTableArr";
            case "loopTableArr":
                if (para.i < tableArr.length) {
                    $this.$db.terminalGetRecordNo(dataBase, tableArr[para.i], newNumberArr[para.i], function(result) {
                        para.result.table.push(tableArr[para.i]);
                        para.result.record.push(result);
                        para.i++;
                        if (++dbFlag === 2) {
                            $this.zeroGetRecord_(dataBase, tableArr, newNumberArr, successCallBack, errorCallBack);
                        }
                    }, para.errorCallBack);
                    break;
                } else {
                    if ($this.debugFlag) {
                        para.nStep = "end";
                        console.log("$CTerminalZeroDB.prototype.zeroGetRecord_: para.nStep = " + para.nStep);
                    }
                }
            case "end":
                para.successCallBack(para.result);
                return;
        }
        if (++dbFlag === 1) {
            return;
        }
    }
};

/**
 * 《上传变量记录转换函数》
 * 功能：
 * 1、
 * @param successCallBack
 * @param errorCallBack
 */
$CTerminalZeroDB.prototype.uploadVariableChange = function(dataBase, tableVariable, curTable, parRecord, data) {
    let $this = this;
    let para = {
        nStep: 0
    };
    let condition, arrField, dbData, result;
    let dbFlag = 0;
    while (1) {
        dbFlag = 0;
        if ($this.debugFlag) {
            console.log("uploadVariableChange: " + para.nStep);
        }
        switch (para.nStep) {
            case 0:
                para.x = 0;
            case "loop_curTable":
                //判断curTable[x]在当前dataBase是否存在
                condition = $this.mac.fd.rTable.tableName + "=\"" + curTable[para.x] + "\"";
                arrField = [$this.mac.fd.id];
                dbData = {};
                result = $this.$db.cacheRecordQuery(dataBase, $this.mac.tb.rTable, condition, arrField, dbData);
                if (result.code === 0) {
                    if (dbData[$this.mac.fd.id].length === 0) {
                        //把curTable[x]在tableVariable中相关信息删除
                        for (let i = 0; i < tableVariable.length; i++) {
                            if (tableVariable[i].$table === curTable[para.x]) {
                                tableVariable.splice(i, 1);
                                break;
                            }
                        }
                        para.nStep = "loopEnd_curTable";
                    } else {
                        if(data[curTable[para.x]]){
                            //获取data[curTable[x]][$ver]=0且$pt_id为parRecord的所有条目
                            var number = [];
                            for(let i = 0;i < data[curTable[para.x]][$this.mac.fd.version].length;i++){
                                if(data[curTable[para.x]][$this.mac.fd.version][i] === 0 && parRecord.includes(data[curTable[para.x]][$this.mac.fd.pt_id][i])){
                                    number.push(i);
                                }
                            }
                            for (let y = 0; y < number.length; y++) {
                                //有效值
                                if(data[curTable[para.x]][$this.mac.fd.status][number[y]] !== $this.mac.enum.record.status.invalid){
                                    var record = data[curTable[para.x]][$this.mac.fd.pg_id][number[y]];
                                    var newIndex;
                                    if(parRecord[0] === null){
                                        newIndex = addRecordInArr(tableVariable[0].$arrValue,record);
                                        addEmptyInVariable(tableVariable[0].$arrSubTab,newIndex);
                                    }else{
                                        var recordIndex = parRecord.indexOf(data[curTable[para.x]][$this.mac.fd.pt_id][number[y]]);
                                        for (let i = 0; i < tableVariable.length; i++) {
                                            if (tableVariable[i].$table === curTable[para.x]) {
                                                newIndex = addRecordInArr(tableVariable[i].$arrValue[recordIndex],record);
                                                addEmptyInVariable(tableVariable[i].$arrSubTab,newIndex);
                                                break;
                                            }
                                        }
                                    }
                                }
                            }
                            para.nStep = "getSonTable";
                        }else{
                            para.nStep = "loopEnd_curTable";
                        }
                    }
                } else {
                    console.error(result);
                    para.nStep = "end";
                }
                ++dbFlag;
                break;
            case "getSonTable":
                for (let i = 0; i < tableVariable.length; i++) {
                    if (tableVariable[i].$table === curTable[para.x]) {
                        var tableRecord = [].concat.apply([],tableVariable[i].$arrValue);
                        if(tableRecord.length > 0 && tableVariable[i].$arrSubTab && tableVariable[i].$arrSubTab.length){
                            var subTable = [];
                            for (let j = 0; j < tableVariable[i].$arrSubTab.length; j++) {
                                subTable.push(tableVariable[i].$arrSubTab[j].$table);
                            }
                            $this.uploadVariableChange(dataBase,tableVariable[i].$arrSubTab,subTable,tableRecord,data);
                        }
                        break;
                    }
                }
            case "loopEnd_curTable":
                para.x++;
                if (para.x >= curTable.length) {
                    para.nStep = "end";
                } else {
                    para.nStep = "loop_curTable";
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
    /**
     * 在arr中按从小到大添加一个记录，并返回该记录的序号
     */
    function addRecordInArr(arr,record){
        var newIndex = null;
        for(let i = 0;i < arr.length;i++){
            if(record < arr[i]){
                newIndex = i;
                arr.splice(i,0,record);
                break;
            }
        }
        if(newIndex === null){
            newIndex = arr.length;
            arr.push(record);
        }
        return newIndex;
    };

    /**
     * 在tableVariable中添加空数组
     */
    function addEmptyInVariable(subTableVariable,index){
        if(subTableVariable && subTableVariable.length > 0){
            for(let i = 0;i < subTableVariable.length;i++){
                subTableVariable[i].$arrValue.splice(index,0,[]);
            }
        }
    };
};

/**
 * 《临时记录新增函数》
 * 功能：
 * 1、
 * @param successCallBack
 * @param errorCallBack
 */
$CTerminalZeroDB.prototype.zeroTemporaryNew = function(dataBase, newRelated, option, dataTrans) {
    let $this = this;
    let result;
    let para = {
        nStep: 0
    };
    let dbFlag = 0;
    while (1) {
        dbFlag = 0;
        if ($this.debugFlag) {
            console.log("zeroTemporaryNew: " + para.nStep);
        }
        switch (para.nStep) {
            case 0:
                //获取dataTrans的关联表格
                result = $this.$db.cacheColRead(dataBase, $this.mac.tb.dataTrans, dataTrans);
                if (!result.table[$this.mac.fd.dataTrans.relatedTable][result.number]) {
                    result.table[$this.mac.fd.dataTrans.relatedTable][result.number] = {
                        tableName: [],
                        type: []
                    };
                }
                para.dataTransHandle = result;
                para.relatedTable = result.table[$this.mac.fd.dataTrans.relatedTable][result.number];
                para.x = 0;
            case "loop_newRelated_table":
                result = $this.$db.cacheColQuery(dataBase, $this.mac.tb.rTable, $this.mac.fd.rTable.tableName, "=", newRelated.table[para.x]);
                para.r_type = result.table[$this.mac.fd.rTable.type][result.arrNumber[0]] === $this.mac.enum.rTable.type_mem ? 0 : 1;
                var m = para.relatedTable.tableName.indexOf(newRelated.table[para.x]);
                if (m === -1) {
                    m = para.relatedTable.tableName.length;
                    para.relatedTable.tableName.push(newRelated.table[para.x]);
                }
                para.relatedTable.type[m] = para.r_type;
                para.y = 0;
            case "loop_newRelated_srcId":
                //内存库记录新增
                result = $this.$db.cacheRecordNew(dataBase, newRelated.table[para.x], [newRelated.dest_id[para.x][para.y]], null, null);
                if (result.code === 0) {
                    //内存库新增函数返回值中有表格指针和序号
                    para.tablePointer = result.table;
                    para.numbr = result.arrNumber[0];
                    para.nStep = "colWrite";
                } else {
                    console.error(result);
                    para.nStep = "end";
                }
                ++dbFlag;
                break;
            case "colWrite":
                //列写入
                $this.$db.cacheColWrite(dataBase, newRelated.table[para.x], $this.mac.fd.blockDataTrans, para.numbr, dataTrans);
                //tablePointer[$type][number]=修改
                para.tablePointer[$this.mac.fd.type][para.numbr] = $this.mac.enum.record.type.modify;
                $this.$db.cacheColWrite(dataBase, newRelated.table[para.x], $this.mac.fd.status, para.numbr, $this.mac.enum.record.status.temporary);
                // para.tablePointer[$this.mac.fd.flag][para.numbr] = $this.mac.enum.record.flag.no;
                para.tablePointer[$this.mac.fd.version][para.numbr] = 0;
                if (option === 1) {
                    //列写入
                    $this.$db.cacheColWrite(dataBase, newRelated.table[para.x], $this.mac.fd.pg_id, para.numbr, newRelated.src_id[para.x][para.y]);
                    $this.$db.cacheColWrite(dataBase, newRelated.table[para.x], $this.mac.fd.pg_db, para.numbr, newRelated.geneAddr[para.x][para.y]);
                }
            case "modify_counterField":
                //初始化计数器字段
                para.countField = $this.$db.cacheGetAllField(dataBase, newRelated.table[para.x], null, $this.mac.enum.fieldType.counter);
                var counter = {
                    step: 0, sum: 0, total: 0
                };
                for (let i = 0; i < para.countField.length; i++) {
                    $this.$db.cacheColWrite(dataBase, newRelated.table[para.x], para.countField[i], para.numbr, counter);
                }
            case "loopEnd_newRelated_table":
                para.y++;
                if (para.y >= newRelated.src_id[para.x].length) {
                    para.x++;
                    if (para.x >= newRelated.table.length) {
                        para.x = 0;
                        para.nStep = "end";
                    } else {
                        para.nStep = "loop_newRelated_table";
                    }
                } else {
                    para.nStep = "loop_newRelated_srcId";
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
 * 父关联写入函数
 * @param table []
 * @param record []二维
 * @param pg_id []二维
 * @param index
 * @param srcGeneAddr
 * @param successCallBack
 * @param errorCallBack
 */
$CTerminalZeroDB.prototype.zeroParentLink = function(dataBase,table,record,pg_id,srcGeneAddr,dataTrans) {
    let $this = this;
    let para = {
        nStep:0
    };
    let dbFlag = 0;
    let result,m;
    while (1) {
        dbFlag = 0;
        if ($this.debugFlag) {
            console.log("zeroParentLink: " + para.nStep);
        }
        switch (para.nStep) {
            case 0:
                para.tablePointer = {};
                para.number = -1;
                para.parentRecord = {
                    geneAddr:srcGeneAddr,
                    table:[],
                    record:[],
                    pg_id:[]
                };
            case "get_relatedTable":
                //获取dataTrans事务表中关联表格related_table{}
                result = $this.$db.cacheColRead(dataBase, $this.mac.tb.dataTrans, dataTrans);
                para.tablePointer = result.table;
                para.number = result.number;
                if (!para.tablePointer[$this.mac.fd.dataTrans.relatedTable][para.number]) {
                    para.tablePointer[$this.mac.fd.dataTrans.relatedTable][para.number] = {
                        tableName: [],
                        type: []
                    };
                }
                para.related_table = para.tablePointer[$this.mac.fd.dataTrans.relatedTable][para.number];
                para.x = 0;
            case "loop_table":
                //获取计数器字段
                para.field = $this.$db.cacheGetAllField(dataBase,table[para.x],null,$this.mac.enum.fieldType.counter);
                // 判断是否为内存表
                result = $this.$db.cacheColQuery(dataBase, $this.mac.tb.rTable, $this.mac.fd.rTable.tableName, "=", table[para.x]);
                if (result.table[$this.mac.fd.rTable.type][result.arrNumber[0]] !== $this.mac.enum.rTable.type_mem) {
                    var tableIndex = para.related_table.tableName.indexOf(table[para.x]);
                    if (tableIndex === -1) {
                        para.related_table.tableName.push(table[para.x]);
                        para.related_table.type.push($this.mac.enum.dataTrans.relatedTable.type.modifyOrAddOrDelete);
                    } else {
                        if (para.related_table.type[tableIndex] !== $this.mac.enum.dataTrans.relatedTable.type.modifyOrAddOrDelete) {
                            para.related_table.type[tableIndex] = $this.mac.enum.dataTrans.relatedTable.type.modifyOrAddOrDelete;
                        }
                    }
                }
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
                        para.nStep = 'colWrite_pgId';
                    }
                }
                ++dbFlag;
                break;
            case "colWrite_pgId":
                //调用列写入函数
                $this.$db.cacheColWrite(dataBase,table[para.x],$this.mac.fd.pg_id,para.number,pg_id[para.x][para.y]);
                $this.$db.cacheColWrite(dataBase,table[para.x],$this.mac.fd.pg_db,para.number,srcGeneAddr);
                para.tablePointer[$this.mac.fd.pg_ver][para.number] = 0;
            case "check_field":
                if(para.field.length !== 0){
                    for(let z = 0;z < para.field.length;z++){
                        para.tablePointer[para.field[z]][para.number].step = 0;
                    }
                }
                if (para.tablePointer[$this.mac.fd.type][para.number] === $this.mac.enum.record.type.lock ||
                  para.tablePointer[$this.mac.fd.type][para.number] === $this.mac.enum.record.type.read) {
                    para.tablePointer[$this.mac.fd.type][para.number] = $this.mac.enum.record.type.modify;
                }
            case 'loopEnd_record':
                para.y++;
                if(para.y >= record[para.x].length){
                    para.x++;
                    if(para.x >= table.length){
                        para.nStep = 'end';
                    }else{
                        para.nStep = 'loop_table';
                    }
                }else{
                    para.nStep = 'loop_record';
                }
                ++dbFlag;
                break;
            case "end":
                return para.parentRecord;
        }
        if (++dbFlag === 1) {
            return;
        }
    }
};
