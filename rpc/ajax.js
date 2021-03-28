
var express = require('express');
var router = express.Router();

// console.log(router)
//获取 server DB 程序

//var CAjaxApp = require(global.dbPath + "/ajax/ajax.app.js");


//服务程序
//kzt


/* GET users listing. */
router.get('/kzt', function($req, $res, next)
{
    /*

    var express = require('express');
    var router = express.Router();
    var path = require('path');
    var fs = require('fs');

    // GET home page.
        router.get('/', function(req, res, next) {
            var fileType = req.query.fileType;
            var fileName = req.query.fileName;

            if (fileType == 1) {
                //直接访问文件进行下载
                res.redirect(fileName);
            } else if (fileType == 2) {
                //以文件流的形式下载文件
                var filePath = path.join(__dirname, '../public/' + fileName);
                var stats = fs.statSync(filePath);
                var isFile = stats.isFile();
                if(isFile){
                    res.set({
                        'Content-Type': 'application/octet-stream', //告诉浏览器这是一个二进制文件
                        'Content-Disposition': 'attachment; filename=' + fileName, //告诉浏览器这是一个需要下载的文件
                        'Content-Length': stats.size  //文件大小
                    });
                    fs.createReadStream(filePath).pipe(res);
                } else {
                    res.end(404);
                }
            } else if (fileType == 3) {
                //读取文件内容后再响应给页面
                var filePath = path.join(__dirname, '../public/' + fileName);
                var stats = fs.statSync(filePath);
                var isFile = stats.isFile();
                if (isFile) {
                    fs.readFile(filePath, function(isErr, data){
                        if (isErr) {
                            res.end("Read file failed!");
                            return;
                        }
                        res.set({
                            'Content-Type': 'application/octet-stream', //告诉浏览器这是一个二进制文件
                            'Content-Disposition': 'attachment; filename=' + fileName, //告诉浏览器这是一个需要下载的文件
                            'Content-Length': stats.size  //文件大小
                        });
                        res.end(data)
                    })
                } else {
                    res.end(404);
                }
            } else {
                res.end(404);
            }
        });

     */
    //res.send('get respond with a resource');

    //var obj = {"code"   : "778","message": "donnot suport get request ", "data"   : ""};
    //$res.json(obj);

    //res.redirect(fileName);

    //http://17.gts.com:56000/ajax?type=1

    var url = require("url");
    var $referer1 = $req.header
    var $referer = $req.headers.referer;
    console.log("$req.headers.host =" + JSON.stringify($req.headers.host) );
    console.log("$req.headers.referer =" + JSON.stringify($req.headers.referer) );
    if ($referer) {
        // 请求资源存在 referer，做防盗链处理
        var referHost = url.parse($referer).hostname; //客户端host(包括远程终端，远程服务器)
        var host = $req.headers["host"].split(":")[0];//本机host

        // 当访问源的域和资源所在的域不是同一个域，做防盗链处理
        if (referHost !== host) {
            console.log("访盗链");
            return;
        }
    }

    console.log("get req1= " + __dirname);
    console.log("get req2= " + JSON.stringify($req.query.type));


    //var obj = {"code"   : "778","message": "donnot suport get request ", "data"   : ""};
    //$res.json(obj);

    //解决乱码问题： res.setHeader('Content-Disposition', 'attachment; filename*="utf8\'\'' + encodeURIComponent(name)+'"');

    if( $req.query.type = 1)
    {
        var fs         = require('fs');

        //var $path = "z:/tool/tool_db_files/56000/0_0_0_0/terminalMem/t_1_1_1_1_17-w_0/r_3_9_1/testTable/file1/1/a2.txt";
        //var $path = "down.test.txt";
        //$res.redirect($path);

        //以文件流的形式下载文件
        //var filePath = __dirname + 'down.test.txt');
        //var filePath = "z:/tool/tool_db_files/56000/0_0_0_0/terminalMem/t_1_1_1_1_17-w_0/r_3_9_1/testTable/file1/1/a2.txt";
        var filePath = "z:/tool/test/console.log";
        var stats = fs.statSync(filePath);
        var isFile = stats.isFile();
        if(isFile){
            $res.set({
                'Content-Type': 'application/octet-stream', //告诉浏览器这是一个二进制文件
                'Content-Disposition': 'attachment; filename=' + "a2.txt", //告诉浏览器这是一个需要下载的文件
                'Content-Length': stats.size  //文件大小
            });
            fs.createReadStream(filePath).pipe($res);
        }
        else
        {
            $res.end(404);
        }

    }
    else
    {
        var obj = {"code"   : "778","message": "donnot suport get request ", "data"   : ""};
        $res.json(obj);
    }


});




router.post('/kzt', function($req, $res, $next)
{

    //垮域访问
    $res.setHeader("Access-Control-Allow-Origin",  "*");
    $res.setHeader("Access-Control-Allow-Headers", "X-Requested-With");
    $res.setHeader("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    $res.setHeader("X-Powered-By",' 3.2.1')
    $res.setHeader("Content-Type", "application/json;charset=utf-8");

    /*
    if ($res.getMethod().equals("OPTIONS")) {
        HttpUtil.setResponse($res, HttpStatus.OK.value(), null);
        return;
    }
    */

    var $ajaxApp = $mSystem.getAjaxApp();

    if( !checkToken($req.body.token) )
    {
        var obj = {"code"   : "779","message": "token error", "data"   : $req.body};
        $res.json(obj);
    }
    else
    {
        $ajaxApp.exec($res, $req, $req.body.para );
    }


});



function checkToken($token)
{
    var $checkToke = "gotsun12345678";

    if( $checkToke == $token )
    {
        return true;
    }
    else
    {
        return false;
    }
}

module.exports = router;


