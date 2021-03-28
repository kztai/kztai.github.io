import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Vant from 'vant';
import 'vant/lib/index.less';

Vue.use(ElementUI);
Vue.use(Vant);

Vue.config.productionTip = false;



$(function() {
    $init(function() {
    }, function(error) {
        console.log(JSON.stringify(error));
    });
});

function $setPara(successCallBack, errorCallBack) {
    let para = {};
    para.successCallBack = successCallBack;
    para.errorCallBack = errorCallBack;
    para.nStep = 0;
    return para;
}

function $init(successCallBack, errorCallBack) {
    let $this = this;
    let fnname = "$init";

    if (successCallBack != null) {
        errorCallBack = $setPara(successCallBack, errorCallBack);
        successCallBack = null;
    }
    let para = errorCallBack;
    while (1) {
        let $dbFlag = 0;
        console.log(fnname + ": para.nStep = " + para.nStep);
        switch (para.nStep) {
            case 0:
                para.t1 = new Date().getTime();
                para.nStep = "loadDBFile";
                ++$dbFlag;
                break;
            case "loadDBFile":
                //引导底层函数
                let loadfile = new $CLoadArchitectureFile();
                loadfile.loadJsFile(function() {
                    para.nStep = "reloadJS";
                    // para.nStep = "end";
                    if (++$dbFlag === 2) {
                        $init(successCallBack, errorCallBack);
                    }
                }, para.errorCallBack);
                break;
            case "reloadJS":// 引入本地js
                para.comm = new CComm();
                para.jsFile = [
                    "./page/zeroObjectUpload.js",
                    "./page/geneBase/data.output.js",
                    "./page/sysEvent/sysEvent.data.output.js",
                    "./terminal/zeroObjectUpload.js",
                    "./terminal/geneAction/data.output.js",
                    "./terminal/sysEvent/sysEvent.data.output.js",
                ];
                para.comm.load_js_file(para.jsFile, false, function() {
                    para.nStep = "end";
                    if (++$dbFlag === 2) {
                        $init(successCallBack, errorCallBack);
                    }
                }, errorCallBack);
                break;
            case "install_hotKey_database":// F7功能
                let windowShowDB = new $CWindowShowDB();
                windowShowDB.install_hotKey_database();
                para.nStep = "end";
                ++$dbFlag;
                break;
            case  "end" :
                let t2 = new Date().getTime();
                console.log("页面开启成功了！总用时" + (t2 - para.t1));
                para.successCallBack();

                new Vue({
                    router,
                    render: h => h(App)
                }).$mount("#app");

                return;
        }
        if (++$dbFlag === 1) {
            return;
        }
    }
};


