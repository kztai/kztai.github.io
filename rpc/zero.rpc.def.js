function RpcDef() {
}

var $rpcDef = new RpcDef();

//socket断链状态
RpcDef.prototype.connect_ok = "1";//连接成功
RpcDef.prototype.connect_online = "2";//已经连接
RpcDef.prototype.disconnected_client = "3";//已经断链，客户端主动断线
RpcDef.prototype.disconnected_server = "4";//已经断链，服务器主动断线
RpcDef.prototype.disconnected_timeout = "5";//已经断链，服务器主动断线
RpcDef.prototype.disconnected_transport = "6";//已经断链, 网络传输出错
RpcDef.prototype.disconnected_other = "99";//其它


RpcDef.prototype.print = false;
RpcDef.prototype.timeout = 3000;

RpcDef.prototype.block_clearBlock = 0;  // 清除阻塞
RpcDef.prototype.block_blocked = 1;     // 添加阻塞

//rpc错误
RpcDef.prototype.rpcError_auther = 1;     //认证错误
RpcDef.prototype.rpcError_exceed = 2;     //超过桶最大值
RpcDef.prototype.rpcError_block = 3;      //阻塞
RpcDef.prototype.rpcError_full = 4;       //队列满

RpcDef.prototype.clientBlockMax = 2;       //客户端阻塞队列最大值
RpcDef.prototype.serverBlockMax = 2;       //服务端阻塞队列最大值

RpcDef.prototype.limitType_flow = 0;       //限流类型--按流量
RpcDef.prototype.limitType_callCount = 1;  //限流类型--按调用次数

RpcDef.prototype.tokenCount = 1;       //限流类型--按调用次数

RpcDef.prototype.instance_clientRpc = '$rpc';       //rpc客户端实例名称
RpcDef.prototype.instance_serverRpc = '$serverRpc';       //rpc服务端实例名称


module.exports = $rpcDef;
