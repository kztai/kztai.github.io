function CZKDef() {}
var $zkDef = new CZKDef();


$zkDef.databaseId = "s_0";        //数据库id
$zkDef.zkDatabaseId = "s_0";        //数据库id
$zkDef.leader = global.localIp;
$zkDef.mysqlServer  = "192.168.1.117:58100";     //mysql server
$zkDef.memServer    = 'm'; //内存 server
$zkDef.tableHead_s = '$s_';


//表定义
$zkDef.tableName_zkNode        = $zkDef.tableHead_s + "zkNode";       //zk节点表
$zkDef.tableName_zkHistory     = $zkDef.tableHead_s + "zkHistory";    //zk轨迹表
$zkDef.tableName_zkPoint       = $zkDef.tableHead_s + "zkPoint";      //指针表
$zkDef.tableName_zkLeaderInfo  = $zkDef.tableHead_s + "zkLeaderInfo"; //领导信息表



$zkDef.id                 = "id";        //id
$zkDef.pt_id                 = "$pt_id";        //pt_id
$zkDef.ver                 = "$ver";        //版本号
$zkDef.del                 = "$del";        //删除标记

//zk节点表--字段定义
$zkDef.zkNode_path        = "path";        //节点路径
$zkDef.zkNode_data        = "data";        //数据
$zkDef.zkNode_attrib      = "attrib";      //属性 [永久/临时/永久_顺序/临时_顺序]
$zkDef.zkNode_version     = "version";     //版本
$zkDef.zkNode_parentNodeId = "parentNodeId";     //父节点id
$zkDef.zkNode_dataWatcher = "dataWatcher"; //数据watcher
$zkDef.zkNode_nodeWatcher = "nodeWatcher"; //子节点watcher

//zk轨迹表--字段定义
$zkDef.zkHistory_type        = "type";     //命令类型
$zkDef.zkHistory_cmdIndex    = "cmdIndex"; //命令索引
$zkDef.zkHistory_path        = "path";     //节点路径
$zkDef.zkHistory_state       = "state";    //消费状态
$zkDef.zkHistory_index       = "index";    //日志索引
$zkDef.zkHistory_term        = "term";     //日志任期
$zkDef.zkHistory_data        = "data";     //data
$zkDef.zkHistory_attrib      = "attrib";   //属性
$zkDef.zkHistory_version    = "version"; //来源
$zkDef.zkHistory_clearIndex    = "clearIndex";

//zk指针表--字段定义
$zkDef.zkPoint_confirmIndex    = "confirmIndex";
$zkDef.zkPoint_clearIndex      = "clearIndex";
$zkDef.zkPoint_responseIndex   = "responseIndex";
$zkDef.zkPoint_lastIndex       = "lastIndex";

//zk领导信息表--字段定义
$zkDef.zkLeaderInfo_leaderId  = "leaderId";
$zkDef.zkLeaderInfo_validTerm = "validTerm";
$zkDef.zkLeaderInfo_restart   = "restart";


//字段长度
$zkDef.path_length     = 200;
$zkDef.data_length     = 200;
$zkDef.attrib_length   = 1;
$zkDef.version_length  = 10;
$zkDef.type_length     = 1;
$zkDef.cmdIndex_length = 20;
$zkDef.state_length    = 1;
$zkDef.index_length    = 20;
$zkDef.term_length     = 20;
$zkDef.fromNode_length = 20;


//其它宏定义
$zkDef.cmd_create  = 1;
$zkDef.cmd_setData = 2;
$zkDef.cmd_delete  = 3;

$zkDef.zkNode_attrib_PERSISTENT = 1;
$zkDef.zkNode_attrib_EPHEMERAL = 2;
$zkDef.zkNode_attrib_PERSISTENT_SEQUENTIAL = 3;
$zkDef.zkNode_attrib_EPHEMERAL_SEQUENTIAL = 4;

$zkDef.zkHistory_state_yes = 1;
$zkDef.zkHistory_state_no = 0;

$zkDef.zkLeaderInfo_restart_yes = 1;
$zkDef.zkLeaderInfo_restart_no = 0;


$zkDef.overtime = 1000;  // 提交zk命令超时时间
$zkDef.switch = false;
$zkDef.databaseInit = false;
$zkDef.write_notFile = '2';
// $zkDef.bootjumpTimerTimes = 250;  // 心跳时间间隔 ms（默认15）
// $zkDef.selectionTimeMin = 1500;  // 选举超时时间间隔 ms（默认200）
$zkDef.bootjumpTimerTimes = 15;  // 心跳时间间隔 ms（默认15）
$zkDef.selectionTimeMin = 200;  // 选举超时时间间隔 ms（默认200）
$zkDef.errorCode_dupValue = 1291; //错误代码：不允许重复值


module.exports = $zkDef;
