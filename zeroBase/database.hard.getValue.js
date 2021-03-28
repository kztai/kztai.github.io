const $public = require(global.dbPath + "/public.js");
const $def = require(global.dbPath + "/mem.def.js");
const CDatabase = require(global.dbPath + "/database.js");
const CMyserverCond = require(global.dbPath + "/myserver.cond.js");
$mSystem = require(global.dbPath + "/db.sys.js");


/*
 *-------------------------------------------------------------------------------//
 * 通过判断 fieldType 将值转化成MySQL数据需要的格式
 * fieldType：字段类型
 * value：三种情况：记录号，id，null
  * 此函数为转移修改专用
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.getMysqlDatabaseValue = function (fieldType, value) {
    let $value;
    switch (fieldType) {
        case $def.fieldType_image:
        case $def.fieldType_file:
        case $def.fieldType_obj:
        case $def.fieldType_count:
        case $def.fieldType_audio:
            $value = JSON.stringify(value);
            break;
        case $def.fieldType_ptr:
            $value = '';
            break;
        case $def.fieldType_number:
            value === "" ? $value = 0 : $value = value;
            break;
        default:
            $value = value;
            break;
    }
    return $value;
};


/*
 *-------------------------------------------------------------------------------//
 * 通过判断 fieldType 将值转化成用户数据需要的格式
 * fieldType：字段类型
 * value：三种情况：记录号，id，null
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.getUserMysqlDatabaseValue = function (fieldType, value) {
    let $value = value;
    switch (fieldType) {
        case $def.fieldType_image:
        case $def.fieldType_file:
            // $value = value;
            if ($value !== '') {
                $value = JSON.parse(value);
            }
            break;
        case $def.fieldType_ptr:
            $value = '';
            break;
        case $def.fieldType_number:
            if (value === "") $value = 0;
            break;
        case $def.fieldType_obj:
        case $def.fieldType_count:
            if ($value !== '') {
                $value = JSON.parse(value);
            }
            break;
        default:
            $value = value;
            break;
    }
    return $value;
};


/*
 *-------------------------------------------------------------------------------//
 * 通过判断 fieldType 将值转化成用户数据需要的格式
 * fieldType：字段类型
 * value：三种情况：记录号，id，null
 * ------------------------------------------------------------------------------//
 */
CDatabase.prototype.getUserMemDatabaseValue = function (fieldType, value) {
    let $value = value;
    switch (fieldType) {
        case $def.fieldType_image:
        case $def.fieldType_file:
        case $def.fieldType_ptr:
            // $value = value;
            if ($value !== '') {
                $value = $public.varCopy(value);
            }
            break;
        case $def.fieldType_number:
            if (value === "") $value = 0;
            break;
        case $def.fieldType_obj:
        case $def.fieldType_count:
            if ($value !== '') {
                $value = $public.varCopy(value);
            }
            break;
        default:
            $value = value;
            break;
    }
    return $value;
};


/*
 *------------------------------------------------------------------------------------------------------//
 * 获取函数字段Sql
 * objField：对象类型字段getFuncFieldSql
 * {"f":"max", "p":["id"],"r":"maxId"}；其中f表示函数名；p表示函数参数，是一维组；r:表示返回值字段名称
 * -----------------------------------------------------------------------------------------------------//
 */
CDatabase.prototype.getFuncFieldSql = function (objField) {
    let result = {};
    // 获取函数名
    let fieldSql = objField.f;
    fieldSql += "(";
    // 获取函数参数
    let arrPara = objField.p;

    for (let i = 0; i < arrPara.length; i++) {
        // 参数分隔号
        if (i > 0) fieldSql += ",";
        fieldSql += arrPara[i];
    }

    fieldSql += ")";
    result.funcName = objField.f;
    result.funcField = objField.r;
    result.fieldSql = fieldSql;
    return result;
};


/*
 *------------------------------------------------------------------------------------------------------------//
 * 获取字段：arrField中字段可能为对象型，需要进一步处理
 * arrField：{"f":"max", "p":["id"],"r":"maxId"}；其中f表示函数名；p表示函数参数，是一维组；r:表示返回值字段名称
 * -----------------------------------------------------------------------------------------------------------//
 */
CDatabase.prototype.getFuncField = function (arrFuncField) {
    if(arrFuncField === null) return null;

    // 申请返回结果：
    let funcField = {
        arrSql: [],
        arrAlias: [],
    };
    // 初始化是否有函数字段：
    let haveFunc = false;

    for (let i = 0; i < arrFuncField.length; i++) {
        let objField = arrFuncField[i];
        let sql = '';
        let funcName = null;

        if(objField) {
            // 保存函数名:
            funcName = objField.f;
            sql += funcName + "(";
            // 获取函数参数
            let arrPara = objField.p;
            arrPara.forEach(function (item, index) {
                if (index > 0) sql += ',';
                sql += item;
            });
            sql += ")" + " ";
            sql += $public.getSqlName(objField.r);
            haveFunc = true;
            // 保存字段名称
            funcField.arrAlias[i] = objField.r;
        } else {
            // 不存在函数字段名称
            funcField.arrAlias[i] = null;
        }
        // 保存结果:
        funcField.arrSql[i] = sql;
    }

    return haveFunc ? funcField : null;
};


/*
 *------------------------------------------------------------------------------------------------------------//
 * 获取字段：将用户传入的arrCondition转化为MySQL语句
 * arrCondition：[array]  条件集合，可以为null
 * -----------------------------------------------------------------------------------------------------------//
 */
CDatabase.prototype.getMysqlCondition = function (arrCondition) {
    let condition;
    let conditionObj;

    if(arrCondition !== null) {
        condition = "";
        for (let i = 0; i < arrCondition.length; i++) {
            if (i > 0) condition += "||";
            condition += "(" + arrCondition[i] + ")";
        }

        conditionObj = $mSystem.getUserCond(condition, null);
        if (conditionObj.code != 0) {
            // 表示有错：
            return conditionObj
        }
        $mSystem.toSqlArrCondition(conditionObj.arrConditions);
        let $cond = new CMyserverCond(conditionObj.arrConditions);
        condition = $cond.createExpression();

    } else {
        condition = "1=1";
        conditionObj = {};
        conditionObj.code = 0;
    }

    conditionObj.cond = condition;
    return conditionObj
};

