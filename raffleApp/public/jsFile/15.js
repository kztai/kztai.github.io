//后台页面
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
    //that.userNumber= getQueryVariable('number');
    this.userNumber = 1;
    this.customerUrl = 'http://raffle.zeropaas.com/dist_other/index.html??group=1&geneAddr=6&parent={"geneAddr":49,"server":null,"geneSet":5}&user=3&number=' + this.userNumber + '#/receiveCustomer_terminal';
    // new QRCode(this.$refs.qrCodeDiv, {
    //     text: this.customerUrl,
    //     width: 300,
    //     height: 300,
    //     colorDark: "#333333", //二维码颜色
    //     colorLight: "#ffffff", //二维码背景色
    //     correctLevel: QRCode.CorrectLevel.L //容错率，L/M/H
    // });
    successCallBack();
};

export default {
    startGene: startGene,
};
