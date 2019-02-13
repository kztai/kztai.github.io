;(function ($, undefined) {

	//私有方法，检测参数是否合法
	function isValid(options) {
		return !options || (options && typeof options === "object") ? true : false;
	}

	// 检测个位数的话，在前面添加0：
	function zero(str) {
		return str >= 10 ? str : '0' + str;
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
			day = parseInt(ms / (1000*60*60*24)),
			hour = parseInt(ms / (1000*60*60)) % 24,
			min = parseInt(ms / (1000*60)) % 60,
			m = parseInt(ms / 1000) % 60,
			str = day.toString() + '天 ' + zero(hour).toString() + ':' + zero(min).toString() + ":" + zero(m).toString();
			return str;
	}

    $.fn.countdown = function(options) {
		var defaluts = {
			endTime: '2019/11/01 00:00:00'
		};
		var opts = $.extend({}, defaluts, options);

		if (!isValid(options)) {
			return this;
		}
				
		return this.each(function () {
			$this = $(this);

			// 消除加载前空余的一秒
			$this.text(getTime(opts.endTime));

			setInterval(function() {
				$this.text(getTime(opts.endTime));
			},1000);
		});	
	};

})(jQuery);