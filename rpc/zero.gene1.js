
function CGene1() {
}

CGene1.prototype.test111 = function($para, successCallBack, errorCallBack) {
    errorCallBack(777, $para, '192.168');
    // successCallBack($para);
};


module.exports = CGene1;
