/* eslint-disable */

import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App.vue'
// import lodash from '../node_modules/lodash/lodash.js'
import lodash from 'lodash'
// import 'babel-polyfill'


Vue.config.productionTip = false;
Vue.use(ElementUI);
Object.defineProperty(Vue.prototype, '$lodash', { value: lodash });

$(function () {
  $init(function () {
  }, function (error) {
    console.log(JSON.stringify(error));
  });
});

function $setPara(successCallBack, errorCallBack) {
  var para = {};
  para.successCallBack = successCallBack;
  para.errorCallBack = errorCallBack;
  para.nStep = 0;
  return para;
};

function $init(successCallBack, errorCallBack) {
  var $this = this;
  var fnname = '$init';

  if (successCallBack != null) {
    errorCallBack = $setPara(successCallBack, errorCallBack);
    successCallBack = null;
  }
  var para = errorCallBack;
  while (1) {
    var $dbFlag = 0;
    console.log(fnname + ': para.nStep = ' + para.nStep);
    switch (para.nStep) {
      case 0:
        para.t1 = new Date().getTime();
        para.nStep = "loadDBFile";
        ++$dbFlag;
        break;
      case "loadDBFile":
        //引导底层函数
        var loadfile = new $CLoadArchitectureFile();
        loadfile.loadJsFile(function () {
          // para.nStep = "enter.js";
          para.nStep = "jsFileDatabaseInit";
          if (++$dbFlag == 2) {
            $init(successCallBack, errorCallBack);
          }
        }, para.errorCallBack);
        break;
      case "enter.js":
        var comm = new CComm();
        //jasonlgb
        var jsFile = [
          // "../../geneEvent/geneEvent.js",
        ];
        comm.load_js_file(jsFile, false, function () {
          para.nStep = "jsFileDatabaseInit";
          if (++$dbFlag == 2) {
            $init(successCallBack, errorCallBack);
          }
        }, errorCallBack);
        break;
      case "jsFileDatabaseInit":
        var mac = new $CGeneMac();
        var systemDB = new $CSystemDB($this);
        systemDB.jsFileDatabaseInit(mac.memServerIP, $objDatabase);//为了数据库初始化
        $cloudCtrl = new $CCloudCtrl();
        para.nStep = "install_hotKey_database";
        ++$dbFlag;
        break;
      case "install_hotKey_database":
        var windowShowDB = new $CWindowShowDB();
        windowShowDB.install_hotKey_database();
        para.nStep = "end";
        ++$dbFlag;
        break;
      case  'end' :
        var t2 = new Date().getTime();
        // alert("页面开启成功了！总用时" + (t2 - para.t1));
        console.log("页面开启成功了！总用时" + (t2 - para.t1));
        para.successCallBack();

        new Vue({
          data  : function () {
            return {
              eventBus: new Vue(),
          }
          },
          render: h => h(App)
        }).$mount('#app')

        return;
    }
    if (++$dbFlag == 1) {
      return;
    }
  }
};


