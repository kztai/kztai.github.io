// 抽奖页面

let startGene = function (successCallBack, errorCallBack) {
    let that = this;
    let fnname = 'startGene';
    let dbFlag;
    let tableName;
    let dbData;
    let parentRecord;
    let tableVariable;
    let page;
    let condition;
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

    let arrRef = ['titleImgRef', 'recordTextRef', 'prizeImgRef', 'prizeNameRef', 'raffleExplainRef', 'chanceRef', 'explainText1Ref', 'explainText2Ref', 'explainText3Ref', 'explainText4Ref'];

    while (1) {
        dbFlag = 0;
        console.log(fnname + ': para.nStep = ' + para.nStep);
        switch (para.nStep) {
            case 0:
                var query = window.location.search.substring(1);
                var vars = query.split("&");
                for (var i = 0; i < vars.length; i++) {
                    var pair = vars[i].split("=");
                    if (pair[0] === 'nickName') {
                        para.nickName = pair[1];
                    } else if (pair[0] === 'headShotUrl') {
                        para.headShotUrl = pair[1];
                    } else if (pair[0] === 'openId') {
                        this.openId = pair[1];
                    }
                }
                para.nStep = 'luckyInput';
                dbFlag++;
                break;
            case 'newActivity_test':
                tableName = that.mac.tb.activity;
                dbData = {};
                dbData[that.mac.fd.id] = [''];
                dbData[that.mac.fd.activity.status] = [1];

                that.$apiDB.recordNew_(tableName, null, dbData, function () {
                    para.nStep = 'newLucky_test';
                    if (++dbFlag === 2) {
                        that.startGene(successCallBack, errorCallBack)
                    }
                }, function (error) {
                });
                break;
            case 'newLucky_test':
                tableName = that.mac.tb.lucky;
                dbData = {};
                dbData[that.mac.fd.id] = [''];
                dbData[that.mac.fd.lucky.prize] = [1];
                dbData[that.mac.fd.lucky.prize_name] = ['testName'];
                dbData[that.mac.fd.lucky.class] = [0];
                dbData[that.mac.fd.lucky.open_id] = ['kzt0'];

                that.$apiDB.recordNew_(tableName, null, dbData, function () {
                    para.nStep = 'newUrl_test';
                    if (++dbFlag === 2) {
                        that.startGene(successCallBack, errorCallBack)
                    }
                }, function (error) {
                });
                break;
            case 'newUrl_test':
                tableName = that.mac.tb.prize;
                dbData = {};
                // dbData[that.mac.fd.id] = ['', '', '', ''];
                dbData[that.mac.fd.prize.name] = ['testName', 'L2', 'L6', '毛巾'];
                dbData[that.mac.fd.prize.class] = [0, 1, 2, 3];
                dbData[that.mac.fd.prize.picture] = [['192.168.1.117:57170/kzt/图层8.png'], ['192.168.1.117:57170/kzt/图层17.png'], ['192.168.1.117:57170/kzt/图层9.png'], ['192.168.1.117:57170/kzt/图层10.png']];
                dbData[that.mac.fd.prize.selected_graphic] = [['192.168.1.117:57170/kzt/G600选中.png'], ['192.168.1.117:57170/kzt/L2选中.png'], ['192.168.1.117:57170/kzt/L6选中.png'], ['192.168.1.117:57170/kzt/毛巾选中.png']];
                dbData[that.mac.fd.prize.no_selected_graphic] = [['192.168.1.117:57170/kzt/G600.png'], ['192.168.1.117:57170/kzt/L2.png'], ['192.168.1.117:57170/kzt/L6.png'], ['192.168.1.117:57170/kzt/毛巾.png']];

                that.$apiDB.recordNew_(tableName, null, dbData, function () {
                    para.nStep = 'luckyInput';
                    if (++dbFlag === 2) {
                        that.startGene(successCallBack, errorCallBack)
                    }
                }, function (error) {
                });
                break;

            case 'luckyInput':
                tableVariable = [{
                    $geneAddr: this.$apiDB.geneAddr,
                    $table: this.mac.tb.lucky,
                    $arrField: null,
                    $arrValue: null,
                    $arrOrgValue: null,
                    $allFlag: [1, 1, 1, 1],
                    $arrSubTab: []
                }];
                condition = {
                    [this.mac.tb.lucky]: this.mac.fd.lucky.open_id + '="' + this.openId + '"'
                };
                destGeneSite = null;
                page = {
                    'table':tableVariable[0].$table,
                    'number':1,
                    'arrSort':null
                };

                that.$apiDB.conditionInput(tableVariable, page, condition, destGeneSite, function () {
                    para.nStep = 'activityInput';
                    if (++dbFlag === 2) {
                        that.startGene(successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'activityInput':
                tableVariable = [{
                    $geneAddr: this.$apiDB.geneAddr,
                    $table: this.mac.tb.activity,
                    $arrField: null,
                    $arrValue: null,
                    $arrOrgValue: null,
                    $allFlag: [1, 1, 1, 1],
                    $arrSubTab: []
                }];
                condition = null;
                destGeneSite = null;
                page = {
                    'table':tableVariable[0].$table,
                    'number':1,
                    'arrSort':null
                };

                that.$apiDB.conditionInput(tableVariable, page, condition, destGeneSite, function () {
                    para.nStep = 'prizeInput';
                    if (++dbFlag === 2) {
                        that.startGene(successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'prizeInput':
                tableVariable = [{
                    $geneAddr: this.$apiDB.geneAddr,
                    $table: this.mac.tb.prize,
                    $arrField: null,
                    $arrValue: null,
                    $arrOrgValue: null,
                    $allFlag: [1, 1, 1, 1],
                    $arrSubTab: []
                }];
                condition = null;
                destGeneSite = null;
                page = {
                    'table':tableVariable[0].$table,
                    'number':10,
                    'arrSort':null
                };

                that.$apiDB.conditionInput(tableVariable, page, condition, destGeneSite, function () {
                    para.nStep = 'isRaffled';
                    if (++dbFlag === 2) {
                        that.startGene(successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'isRaffled':
                tableName = this.mac.tb.lucky;
                parentRecord = null;
                condition = this.mac.fd.lucky.open_id + '="' + this.openId + '"';
                dbData = {};
                dbData[that.mac.fd.id] = [];
                dbData[that.mac.fd.lucky.prize] = [];
                dbData[that.mac.fd.lucky.prize_name] = [];
                dbData[that.mac.fd.lucky.class] = [];

                that.$apiDB.recordQuery_(tableName, parentRecord, condition, dbData, function (result) {
                    // type: 0表示可以抽奖，1表示不可以抽奖，2表示抽奖结束
                    if(dbData[that.mac.fd.id].length >0) {  // 已抽奖
                        para.prizeId = dbData[that.mac.fd.lucky.prize][0];
                        para.raffleType = 1;
                        let level;
                        switch (dbData[that.mac.fd.lucky.class][0]) {
                            case 0:
                            case '0':
                                level = '一等奖';
                                break;
                            case 1:
                            case '1':
                                level = '二等奖';
                                break;
                            case 2:
                            case '2':
                                level = '三等奖';
                                break;
                            case 3:
                            case '3':
                                level = '安慰奖';
                                break;
                        }
                        that.prizeName = '恭喜您获得' + level + '“' + dbData[that.mac.fd.lucky.prize_name][0] + '”';
                        that.chanceText = '您有0次抽奖机会';
                        that.prizeColor = 'orange';

                        para.nStep = 'getPrizeUrl';
                    } else {
                        para.raffleType = 0;
                        para.nStep = 'isActivityEnd';
                    }

                    if (++dbFlag === 2) {
                        that.startGene(successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'getPrizeUrl':
                tableName = this.mac.tb.prize;
                dbData = {};
                dbData[that.mac.fd.id] = [para.prizeId];
                dbData[that.mac.fd.prize.picture] = [];

                that.$apiDB.recordRead_(tableName, dbData, function () {
                    para.pictureUrl = dbData[that.mac.fd.prize.picture][0][0];
                    para.nStep = 'getPictureData';
                    if (++dbFlag === 2) {
                        that.startGene(successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'getPictureData':
                that.$apiDB.openFile(para.pictureUrl, function (file) {
                    para.offset = null;
                    para.length = null;
                    that.$apiDB.readFile(para.offset, para.length, file, function (content) {
                        that.prizeImg = content;
                        that.$apiDB.closeFile(file, function () {
                            para.nStep = 'isActivityEnd';
                            if (++dbFlag === 2) {
                                that.startGene(successCallBack, errorCallBack)
                            }
                        }, para.errorCallBack);
                    }, para.errorCallBack);
                }, para.errorCallBack);
                break;
            case 'isActivityEnd':
                tableName = this.mac.tb.activity;
                dbData = {};
                dbData[that.mac.fd.id] = [1];
                dbData[that.mac.fd.activity.status] = [];

                that.$apiDB.recordRead_(tableName, dbData, function () {
                    // type: 0表示可以抽奖，1表示不可以抽奖，2表示抽奖结束
                    if(dbData[that.mac.fd.activity.status][0] === that.mac.enum.activity.status.end) {
                        para.raffleType = 2;
                    } else if(dbData[that.mac.fd.activity.status][0] === that.mac.enum.activity.status.not_start) {
                        para.raffleType = 1;
                    }

                    para.nStep = 'showSubModule';
                    if (++dbFlag === 2) {
                        that.startGene(successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'showSubModule':
                that.showSubModule(arrRef, true, function () {
                    para.nStep = 'raffleSudokuStart';
                    if (++dbFlag === 2) {
                        that.startGene(successCallBack, errorCallBack)
                    }
                }, para.errorCallBack);
                break;
            case 'raffleSudokuStart':
                that.showSubModule(['raffleSudokuRef'], true, function () {
                    // type: 0表示可以抽奖，1表示不可以抽奖，2表示抽奖结束
                    para.raffleData = {
                        nickName: para.nickName,
                        headShotUrl: para.headShotUrl,
                        openId: that.openId,
                        type: para.raffleType,
                    };
                    that.sm['raffleSudokuRef'].startModule(para.raffleData, function () {
                        para.nStep = 'end';
                        if (++dbFlag === 2) {
                            that.startGene(successCallBack, errorCallBack)
                        }
                    }, para.errorCallBack);
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

function raffleConfirm(prizeInfo, successCallBack, errorCallBack) {
    let that = this;
    let fnname = 'raffleConfirm';
    let dbFlag;
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
                let level;
                switch (prizeInfo.prizeLevel) {
                    case 0:
                        level = '一等奖';
                        break;
                    case 1:
                        level = '二等奖';
                        break;
                    case 2:
                        level = '三等奖';
                        break;
                    case 3:
                        level = '安慰奖';
                        break;
                }
                this.prizeName = '恭喜您获得' + level + '“' + prizeInfo.prizeName + '”';
                this.chanceText = '您有0次抽奖机会';
                this.prizeColor = 'orange';

                para.nStep = 'getPictureData';
                dbFlag++;
                break;
            case 'getPictureData':
                that.$apiDB.openFile(prizeInfo.prizeUrl, function (file) {
                    para.offset = null;
                    para.length = null;
                    that.$apiDB.readFile(para.offset, para.length, file, function (content) {
                        that.prizeImg = content;
                        that.$apiDB.closeFile(file, function () {
                            para.nStep = 'end';
                            if (++dbFlag === 2) {
                                that.raffleConfirm(prizeInfo, successCallBack, errorCallBack)
                            }
                        }, para.errorCallBack);
                    }, para.errorCallBack);
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
}

let raffleIn = function(successCallBack, errorCallBack) {
    debugger;
    let nickName = 'nickName';
    let headShotUrl = null;
    let openId = 123;
    this.$apiDB.eventInput('raffleIn', [nickName,headShotUrl,openId], successCallBack, errorCallBack)
};



export default {
    startGene: startGene,
    raffleConfirm: raffleConfirm,
    raffleIn: raffleIn,
};
