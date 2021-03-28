// 大屏页面

let startGene = function (successCallBack, errorCallBack) {

    let that = this;
    let fnname = 'startGene';
    let dbFlag;
    let tableName;
    let dbData;
    let parentRecord;
    let record;
    let portName;
    let inputData;
    let condition;
    let start;
    let total;
    let sort;
    let destGeneSite = '';
    let showComp;
    let tableVariable;
    let page;
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
                that.arrRef = ['firstComp'];
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
                    $table: this.mac.tb.lucky,
                    $arrField: null,
                    $arrValue: null,
                    $arrOrgValue: null,
                    $allFlag: [1, 1, 1, 1],
                    $arrSubTab: []
                }];
                condition =null ; // 暂定全部下载
                destGeneSite = null;
                page = {
                    'table': tableVariable[0].$table,
                    'number': 100,
                    'arrSort': null
                };

                that.$apiDB.conditionInput(tableVariable, page, condition, destGeneSite, function (result) {
                    console.log('下载成功，结果是' + result);
                    para.nStep = "subModuleStart";
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
