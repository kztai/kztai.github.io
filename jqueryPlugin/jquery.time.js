;(function ($, undefined) {

	//私有方法，检测参数是否合法
	function isValid(options) {
		return !options || (options && typeof options === "object") ? true : false;
	}

	function zero(str) {
		return str >= 10 ? str : '0' + str;
	}

	// 获得当前时间：
	function getTime(opts) {
			var time = new Date();
			var weekIndex = time.getDay();
			var weekStr = "日一二三四五六";		
			var year = time.getFullYear();
			var month = time.getMonth() + 1;
			var day = time.getDate();
			var hour = time.getHours();
			var minute = time.getMinutes();
			var second = time.getSeconds();
			var week = weekStr.charAt(weekIndex);
			
			if (opts.format === 'word') {
				return opts.week ? year + "年" + zero(month) + "月" + zero(day) + "日 " + zero(hour) + ":" + zero(minute) + ":" + zero(second) + " 星期" + week : year + "年" + zero(month) + "月" + zero(day) + "日 " + zero(hour) + ":" + zero(minute) + ":" + zero(second);
			} else {
				return opts.week ? year + opts.format + zero(month) + opts.format + zero(day) + " " + zero(hour) + ":" + zero(minute) + ":" + zero(second) + " 星期" + week : year + opts.format + zero(month) + opts.format + zero(day) + " " + zero(hour) + ":" + zero(minute) + ":" + zero(second);				
			}
	}

    $.fn.time = function(options) {
		var timeDefaluts = {
			format: '/',
			week: true
		};
		var opts = $.extend({}, timeDefaluts, options);

		//检测用户传进来的参数是否合法
		if (!isValid(options)) {
			return this;
		}

		return this.each(function () {
			$this = $(this);

			// 消除加载前空余的一秒
			$this.text(getTime(opts));

			setInterval(function() {
				$this.text(getTime(opts));				
			},1000);
		});	
	};
})(jQuery);