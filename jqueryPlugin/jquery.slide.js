;(function ($, undefined) {
    $.fn.slide = function(options) {
		//检测用户传进来的参数是否合法
		if (!isValid(options)) {
			return this;
		}

		//默认参数
		var defaluts = {
			// 左右滑动
			slideNext: false,
			// 小圆点控制滑动
			slideControl: true,
			speed: 600,
			easing: 'swing'			
		};

		//使用jQuery.extend 覆盖插件默认参数
		var opts = $.extend({}, defaluts, options);
		
		var $img = $('.slide-img');
		var $picsList = $('.pics-list');
		var $slidePosition = $('.slide-position');
		var $left = $('.slide-left');
		var $right = $('.slide-right');
		var $slideControl = $('.slide-control');
		var $controlItem = $('.control-item');

		var index = 0;
		var slideWidth = '';
		var move = false;
		var timer;

		return this.each(function () {
			var $this = $(this);
			
			// 初始化图片
			initPics($this);

			// 初始化小圆点按钮
			initControl($this);

			// 初始化左右轮播按钮
			initPosition($this);

			// 初始化滑动
			autoSlide();

			// 左按钮点击事件
			$left.on('click', function(e) {
				// 当图片滚动时，点击无效
				if (!move) {			
					index = (index - 1 + $img.length) % $img.length;
					slideWidth = '+=' + $img[0].width + 'px';
					clickSlide(slideWidth);
					autoSlide();
				}
			});

			// 右按钮点击事件
			$right.on('click', function(e) {
				if (!move) {
					index = ((index+1) % $img.length);
					slideWidth = '-=' + $img[0].width + 'px';
					clickSlide(slideWidth);
					autoSlide();
				}
					
			});

			// 小圆点点击事件
			$slideControl.on('click', '.control-item', function(e) {
				if (!move) {				
					// 当前页不再执行点击事件
					if ($(e.target).hasClass('active')) {
						return;
					}
					var nextIndex = e.target.getAttribute('index');
					slideWidth = '-=' + $img[0].width * (nextIndex - index) + 'px';
					index = nextIndex;
					clickSlide(slideWidth);
					autoSlide();
				}
			});

			// 鼠标进入，停止滚动
			$img.on('mouseout', function() {
				autoSlide();
			});

			// 鼠标离开，开始滚动
			 $img.on('mouseover', function(e) {
			 	clearInterval(timer);
			 });

			 // 自定义是否显示小圆点
			if (! opts.slideControl) {
				$slideControl.css({'display':'none'});
			}

			 // 自定义是否显示左右轮播按钮
			if (! opts.slideNext) {
				$slidePosition.css({'display':'none'});
			}


		});

		/**
		 * 检测参数是否合法
		 * @param  {'' | {}}
		 */
		function isValid(options) {
			return !options || (options && typeof options === "object") ? true : false;
		}

		/**
		 * 自动轮播
		 */
		function autoSlide() {
			// 重置滑动
			if (timer) {
				clearInterval(timer);
			}
			timer = setInterval(function() {
				$right.click();
			}, 2000);
		}

		/**
		 * 初始化图片
		 * @param  {jquery对象}
		 */
		function initPics($this) {
			var $picsItem = $('.pics-item');

			// 初始化图片大小
			$img.width($this.css('width'));
			$img.height($this.css('height'));

			// 头尾插入图片
			var firstItem = $picsItem[0];
			var lastItem = $picsItem[$picsItem.length - 1];
			$(firstItem).clone(true).insertAfter(lastItem);
			$(lastItem).clone(true).insertBefore(firstItem);

			// 设置图片总长度
			var listWidth = 0;
			for (var i = 0; i < $img.length; i++) {
				listWidth += $img[i].width;
			}
			// 加上头尾图片长度
			listWidth += $img[0].width * 2;
			$picsList.width(listWidth);

			$picsList.css({'left':- $img[0].width+'px', 'top':0});
		}

		/**
		 * 初始化左右轮播按钮
		 * @param  {jquery对象}
		 */
		function initPosition($this) {
			// slide-position自适应
			if (parseInt($this.css('width')) < 300) {
				$slidePosition.css({
					'width': '10',
					'height': '20',
					'margin-top': '-10px',
					'font-size': '14px',
					'line-height': '20px'
				});
			} else if (parseInt($this.css('width')) < 600) {
				$slidePosition.css({
					'width': '20',
					'height': '40',
					'margin-top': '-20px',
					'font-size': '20px',
					'line-height': '40px'
				});
			} else {
				$slidePosition.css({
					'width': '24',
					'height': '50',
					'margin-top': '-25px',
					'font-size': '22px',
					'line-height': '50px'
				});
			}
		}

		/**
		 * 初始化小圆点
		 * @param  {jquery对象}
		 */
		function initControl($this) {
			// 设置小圆点个数
			for (var i = 0; i < $img.length; i++) {
				$slideControl.append('<li class="control-item" index="' + i + '"></li>');
			}

			// 设置小圆点总长度与位置
			var $controlItem = $('.control-item');

			if (parseInt($this.css('width')) < 300) {
				$slideControl.css({
					'bottom': '6px'
				});
				$controlItem.css({
					'margin': '2px 4px',
					'width': '6px',
					'height': '6px'
				});
			} else if (parseInt($this.css('width')) < 600) {
				$slideControl.css({
					'bottom': '10px'
				});
				$controlItem.css({
					'margin': '2px 6px',
					'width': '8px',
					'height': '8px'
				});
			} else {
				$slideControl.css({
					'bottom': '14px'
				});
				$controlItem.css({
					'margin': '2px 6px',
					'width': '10px',
					'height': '10px'
				});
			}

			var itemWidth = parseInt($controlItem.css('width'));
			var marginLeft = parseInt($controlItem.css('margin-left'));
			var marginRight = parseInt($controlItem.css('margin-right'));
			var paddingLeft = parseInt($controlItem.css('padding-left'));
			var paddingRight = parseInt($controlItem.css('padding-right'));
			var controlWidth = 0;

			for (var j = 0; j < $controlItem.length; j++) {
				controlWidth += itemWidth + marginLeft + marginRight + paddingLeft + paddingRight;
			}
			$slideControl.css({
				'width': controlWidth,
				'margin-left': -(controlWidth / 2),
			});

			// 初始化小圆点高亮
			$($controlItem[0]).addClass('active');
		}

		/**
		 * 实现动画效果
		 * @param  {string}
		 */
		function clickSlide(slideWidth) {
			var $controlItem = $('.control-item');
			move = true;

			$picsList.animate({left: slideWidth}, opts.speed, opts.easing, function() {
				// 保证滑动连续性
				var imgWidth = $img[0].width;
				var maxWidth = ($img.length + 1) * imgWidth;
				if ($picsList.position().left <= -maxWidth) {
					$picsList.css({'left': -imgWidth});
				}
				if ($picsList.position().left >= 0) {
					$picsList.css({'left': -($img.length * imgWidth)});
				}
				move = false;
			});

			$controlItem.removeClass('active');
			$($controlItem[index]).addClass('active');

		}
	};
})(jQuery);