// 签到页面

function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}

let startGene = function (successCallBack, errorCallBack) {
    let that = this;
    let fnname = 'startGene';
    let dbFlag;
    let userNumber;
    let para = {
        successCallBack: successCallBack,
        errorCallBack: errorCallBack,
        nStep: 0,
        i: 0
    };

    if (successCallBack !== null) {
        errorCallBack = para;
        successCallBack = null
    }
    para = errorCallBack;


    while (1) {
        dbFlag = 0;
        console.log(fnname + ': para.nStep = ' + para.nStep);
        switch (para.nStep) {
            case 0:
                that.arrRef = ['toTopRef'];
                that.userNumber= getQueryVariable('number');
                // that.userNumber = 1;
                that.customerUrl = 'http://raffle.zeropaas.com/index.html??group=1&geneAddr=6&parent={"geneAddr":49,"server":null,"geneSet":5}&user=3&number=' + that.userNumber + '#/receiveCustomer_terminal';
                para.nStep = 'forceUpdateData';
                dbFlag++;
                break;
            case 'forceUpdateData':
                that.forceUpdateData(function () {
                    para.nStep = 'subModuleStart';
                    if (++dbFlag === 2) {
                        that.startGene(successCallBack, errorCallBack)
                    }
                });
                break;
            case 'subModuleStart':
                if (para.i >= that.arrRef.length) {
                    para.i = 0;
                    para.nStep = 'showSubModule';
                    dbFlag++;
                    break;
                }

                that.sm[that.arrRef[para.i]].startModule(function () {
                    para.i++;
                    para.nStep = 'subModuleStart';
                    if (++dbFlag === 2) {
                        that.startGene(successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'showSubModule':
                that.showSubModule(that.arrRef, true, function () {
                    para.nStep = 'end';
                    if (++dbFlag === 2) {
                        that.startGene(successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'end':
                para.successCallBack();
                return
        }
        if (++dbFlag === 1) {
            return
        }
    }
};

export default {
    startGene: startGene,
};
