// 报名页面

let startGene = function (successCallBack, errorCallBack) {
    let that = this;
    let fnname = 'startGene';
    let dbFlag;
    let tableName;
    let dbData;
    let parentRecord;
    let tableVariable;
    let page;
    let inputData;
    let condition;
    let start;
    let total;
    let sort;
    let destGeneSite;
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
                var query = window.location.search.substring(1);
                var vars = query.split("&");
                for (var i = 0; i < vars.length; i++) {
                    var pair = vars[i].split("=");
                    if (pair[0] === 'openId') {
                        this.openId = pair[1];
                    } else if (pair[0] === 'type') {
                        this.applyType = pair[1];
                    }
                }


                para.nStep = 'customerInput';
                dbFlag++;
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

                condition = {
                    [this.mac.tb.customer]: this.mac.fd.customer.open_id + '="' + this.openId + '"'
                };
                destGeneSite = null;
                page = {
                    'table': tableVariable[0].$table,
                    'number': 1,
                    'arrSort': null
                };

                that.$apiDB.conditionInput(tableVariable, page, condition, destGeneSite, function (result) {
                    para.nStep = 'subModuleStart';
                    if (++dbFlag === 2) {
                        that.startGene(successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'subModuleStart':
                para.showRef = this.applyType == 0 ? 'applyRegisterRef' : 'applyCancelRef';
                that.sm[para.showRef].startModule(this.openId, function () {
                    para.nStep = 'showSubModule';
                    if (++dbFlag === 2) {
                        that.startGene(successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'showSubModule':
                that.showSubModule(para.showRef, true, function () {
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


let registerIn = function (successCallBack, errorCallBack) {
    debugger;
    let customerData = {
        name: 'test',
        mobile: '13512345678',
        company: 'zeroPaas',
        companion: '2',
    }
    this.$apiDB.eventInput('register', [customerData], successCallBack, errorCallBack)
};

let cancelIn = function (successCallBack, errorCallBack) {
    debugger;
    let mobile = '13512345678'
    this.$apiDB.eventInput('cancel', [mobile], successCallBack, errorCallBack)
};


export default {
    startGene: startGene,
    registerIn: registerIn,
    cancelIn: cancelIn,
};
