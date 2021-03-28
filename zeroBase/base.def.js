function CBaseDef() {}
var $baseDef = new CBaseDef();


// 文件系统：
CBaseDef.prototype.read = 0;
CBaseDef.prototype.write = 1;
CBaseDef.prototype.append = 2;
CBaseDef.prototype.delete = 3;

// 打印开关：
CBaseDef.prototype.print = true;
// 打开文件的类型
CBaseDef.prototype.openType = 'r+';
// 标志表，用于判断数据库是否成功建立：
CBaseDef.prototype.tableName_flag = '$$_$$_flag_table_20200811';



module.exports = $baseDef;
