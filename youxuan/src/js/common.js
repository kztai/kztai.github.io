
/**
 * [获取URL参数的方法]
 * @param  {[string]} key 
 * @return {[string]}     
 */
function getUrl(key) {
	var reg = new RegExp(key + '=([^$]*)');
	var result = location.href.match(reg);
	return result ? result[1] : null;
}


/**
 * 获得倒计时
 * @param  {[string]} time ['2018-08-26 23:00:00']
 * @return {[array]}      [倒计时六位数字组成的数组]
 */
function getTime(time) {
	var now = Date.now(),
		target = new Date(time),
		ms = target - now,
		hour = parseInt(ms / (1000*60*60)) % 24,
		min = parseInt(ms / (1000*60)) % 60,
		m = parseInt(ms / 1000) % 60,
		str = zero(hour).toString() + zero(min).toString() + zero(m).toString();
		return str.match(/\d/g);
		// return str.split("");
}

function zero(num) {
	return num < 10 ? "0"+num : num;
}