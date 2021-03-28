// 接待客户页面

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
    let condition;
    let destGeneSite = '';
    let tableVariable;
    let page;
    let tableName;
    let parentRecord;
    let  condition2;
    let dbData;

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
                // that.userNumber = 1;
                that.userNumber = getQueryVariable('number');
                para.nStep = 'forceUpdateData';
                dbFlag++;
                break;
            case 'forceUpdateData':
                that.forceUpdateData(function () {
                    para.nStep = 'customerInput';
                    if (++dbFlag === 2) {
                        that.startGene(successCallBack, errorCallBack)
                    }
                });
                break;
            case 'customerInput':
                tableVariable = [{
                    $geneAddr: this.$apiDB.geneAddr,
                    $table: this.mac.tb.customer,
                    $arrField: null,
                    $arrValue: null,
                    $arrOrgValue: null,
                    $allFlag: [1, 1, 1, 1],
                    $arrSubTab: []
                }];

                condition = {customer: this.mac.fd.customer.number + '="' + this.userNumber + '"'};  // todo 暂定openId
                //condition = null;
                destGeneSite = null;
                page = {
                    'table': tableVariable[0].$table,
                    'number': 100,
                    'arrSort': null
                };

                that.$apiDB.conditionInput(tableVariable, page, condition, destGeneSite, function (result) {
                    console.log('下载成功，结果是' + result);
                    para.nStep = 'judgePhone';
                    if (++dbFlag === 2) {
                        that.startGene(successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'judgePhone':
                tableName = this.mac.tb.customer;
                parentRecord = null;
                condition2 = this.mac.fd.customer.number + '=' + this.userNumber;  // t
                dbData = {};
                dbData[that.mac.fd.customer.mobile] = [];
                that.$apiDB.recordQuery_(tableName, parentRecord, condition2, dbData, function (result) {

                    if (dbData[that.mac.fd.customer.mobile][0] !== null) {
                        that.arrRef = ['toTopRef'];
                    } else {
                        that.arrRef = ['certainInformation'];
                    }
                     para.nStep = 'subModuleStart';
                    if (++dbFlag === 2) {
                        that.startGene(successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
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
