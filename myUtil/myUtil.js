// 常用组件封装
// 目录：
// 1 获得元素（兼容版）
// 2 定义domready  
// 3 制定元素的动画效果
// 4 事件处理
// 5 模态对话框
// 6 获取元素相对于屏幕左边的距离
// 7 获得当前时间



// 1 获得元素（兼容版）
(function(w) {
	//定义全局框架myUtil
	var myUtil = w.myUtil ? w.myUtil : {};
	/**
	 * 封装用于获取元素的组件
	 * 调用模板：myUtil.getEle.cls("box");
	 */
	myUtil.getEle = {
		//通过className获得元素
		cls: function(cls) {
			if(document.getElementsByClassName) {
				return document.getElementsByClassName(cls);
			} else {
				var classArr = [];
				var allEle = document.getElementsByTagName("*");
				for(var i = 0; i < allEle.length; i++) {
					var eleArr = allEle[i].className.split(/\s+/g);
					for(var j = 0; j < eleArr.length; j++) {
						if(eleArr[j] === cls) {
							classArr.push(allEle[i]);
						}
					}
				}
				return classArr;
			}
		},

		//通过id获得元素
		id: function(id) {
			return document.getElementById(id);
		},

		//通过tagName获得元素
		tag: function(tag) {
			return document.getElementsByTagName(tag);
		}
	};
	w.myUtil = myUtil;
})(window || {});





// 2 domready
(function(w) {
	var myUtil = w.myUtil ? w.myUtil : {};
	/**
	 * domready
	 * @param  {Function}  callback  [需要执行的函数]
	 * 调用模板：myUtil.myReady(function() {});
	 */
	myUtil.myReady = function(callback) {
		if (document.addEventListener) {
			document.addEventListener("DOMContentLoaded", callback, false);
		} else if (document.attachEvent) {
			document.attachEvent("onreadystatechange", function() {
				if (document.readyState == "complete") {
					callback(window.event);
				}
			});
		} else {
			window.onload = callback;
		}
	};
	w.myUtil = myUtil;
})(window || {});





// 3 制定元素的动画效果
(function(w) {
	var myUtil = w.myUtil ? w.myUtil : {};	

	/**
	 * 制定元素的动画效果
	 * @param  {[HTMLElement]}  ele      [需要制定效果的元素]
	 * @param  {[Object]} 	    json     [该元素要变化的属性:变化多少]
	 * @param  {[function]}     fn       [链式运动]
	 * 调用模板：myUtil.startMove(ele, {attr1: endStyle1, attr2: endStyle2}, fn);     
	 */
	myUtil.startMove = function(ele, json, fn) {	
		// 消除制定的timer，防止重复触发
		clearInterval(ele.timer);

		ele.timer = setInterval(function() {
			// 当前属性值：
			var curStyle = null;
			// 用于标注动画是否完成：
			var flag = true;
			
			for (var attr in json) {	
				// 获得当前属性样式
				if (attr == "opacity") {
					// Math.round()用于去除小数点后的误差
					// opacity属性的值为小于1的小数，使用parseFloat：
					curStyle = Math.round(parseFloat(getStyle(ele, attr)) * 100);
				} else {
					curStyle = parseInt(getStyle(ele, attr));  //获得当前元素的宽度
				}
				
				// 设置速度：
				var speed = (json[attr] - curStyle) / 10;
				speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
		
				// 制定动画效果：
				// 如果还有动画没完成，标杆标注false
				if(json[attr] != curStyle) {
					flag = false;
				} 
				if (attr == "opacity") {
					ele.style.filter = "alpha(opacity:" + (curStyle + speed) + ")";
					ele.style.opacity = (curStyle + speed) / 100;
				} else {
					ele.style[attr] = curStyle + speed + "px";
				}
	
			}	
			// 当前动画执行完成后，开始后续动画：
			if(flag) {
				clearInterval(ele.timer);
				//如果存在这个参数，执行这个函数
				if (fn) {
					fn();
				}			
			}	
		}, 30);
	}
		
	//获得当前元素的属性：
	function getStyle(ele, attr) {
		if (ele.currentStyle) {
			return ele.currentStyle[attr];
		} else {
			return getComputedStyle(ele, false)[attr];
		}
	}

	w.myUtil = myUtil;
})(window || {});






// 4 事件处理
(function(w) {
	var myUtil = w.myUtil ? w.myUtil : {};	
	/**
	 * 用于事件处理，包括：事件监听，组织冒泡，阻止默认行为
	 * @type {Object}
	 * 调用模板：myUtil.eventUtil.addEvent(box, "mouseover", function() {}, false);
	 * 二次调用：myUtil.eventUtil.addEvent(box, keyupEvent(box)); //调用时不用加事件
	 */
	myUtil.eventUtil = {
		// 1 封装绑定事件的兼容处理程序：		
		// 传入四个参数：给谁绑定，绑定的事件类型，绑定什么处理程序，冒泡还是捕获
		addEvent: function(ele, type, handler, isCapture) {
			if (ele.addEventListener) {
				// 确保传入的参数是Boolean值
				isCapture = isCapture ? true : false;
				ele.addEventListener(type, handler,isCapture);
			} else if (ele.attachEvent) {				
				ele.attachEvent("on" + type, function() {
					// 用ele去调函数handler，在把参数window.event传入函数中去
					return handler.call(ele, window.event);
				});
			}
		},

		// 2 获取事件对象兼容处理：
		getEvent: function(e) {
			return e || window.event;
		},

		// 3 获取事件源对象兼容处理：
		getTarget: function(e) {
			return e.target || e.srcElement;
		},

		// 4 阻止冒泡兼容处理
		stopPropagation: function(e) {
			if(e.stopPropagation) {
				e.stopPropagation();
			} else {
				e.cancelBubble = true;
			}
		},

		// 5 阻止默认行为兼容处理：
		preventDefault: function(e) {
			if(e.preventDefault) {
				e.preventDefault();
			} else {
				e.returnValue = false;
			}
		}
	};
	w.myUtil = myUtil;
})(window || {});






// 5 模态对话框
(function(w) {
	var myUtil = w.myUtil ? w.myUtil : {};
	myUtil.Dialog = function(selector) {
		//判断选择器对应之前创建过了吗，如果创建过直接返回对象
		if (myUtil.Dialog.cache[selector]) {
			return myUtil.Dialog.cache[selector];
		}

		//拿到用户给的选择器
		var dialogDiv = document.querySelector(selector);
		if (! dialogDiv) {
			return null;
		}
		//拿到用户传入的标题
		var title = dialogDiv.getAttribute("title");

		//初始化遮罩层
		var dialogCover = document.createElement("div");
		dialogCover.className = "dialog-cover"; 
		dialogCover.style.display = "none";
		document.body.appendChild(dialogCover);

		//开始拼接操作：
		var strHTML = "";
		strHTML += '<div class="dialog">';
		strHTML += 		'<div class="dialog-h">';
		strHTML +=  		'<h3>' + title + '</h3>';
		strHTML += 		    '<i id="btn-close">x</i>';
		strHTML +=      '</div>';
		strHTML +=	    '<div class="dialog-b">';
		strHTML +=          dialogDiv.innerHTML;
		strHTML +=      '</div>';
		strHTML += '</div>';
		dialogDiv.innerHTML = strHTML;

		var dialog = {
			dialogDiv: dialogDiv,  //创建用户的对话框的div
			title: title,  //用户的标题
			dialogCover: dialogCover,  //创建遮罩层属性
			show: function() {
				//第一步：显示遮罩层，第二步：显示对话框，第三步：给关闭按钮绑定点击事件
				this.dialogCover.style.display = "block"; //调用的dialogCover指的是dialog对象里的dialogCover属性
				this.dialogDiv.style.display = "block";
				var self = this;
				dialogDiv.querySelector("#btn-close").onclick = function() {
					self.close();
				};
			},
			close: function() {
				//第一步：关闭遮罩层，第二步：关闭对话框，第三步：给关闭按钮解除绑定点击事件
				this.dialogCover.style.display = "none";
				this.dialogDiv.style.display = "none";
				dialogDiv.querySelector("#btn-close").onclick = null;
			}
		};
		myUtil.Dialog.cache[selector] = dialog;
		return dialog;
	};

	//在函数上创建一个缓存，放selector对应的dialog对象
	myUtil.Dialog.cache = {};	
	w.myUtil = myUtil;
})(window || {});






// 6 获取元素相对于屏幕左边，屏幕上边的距离
(function(w) {
	var myUtil = w.myUtil ? w.myUtil : {};
	/**
	 * @param  {[HTMLElement]} node [目标元素]
	 * @return {[Object]}           [目标元素相对于屏幕左边，屏幕上边的距离]
	 */
	myUtil.getPosition = function(node) {
		var left = node.offsetLeft;
		var top = node.offsetTop;
		var parent = node.offsetParent;
		while(parent != null) {
			left += parent.offsetLeft;
			top += parent.offsetTop;
			parent = parent.offsetParent;
		}
		return {"left": left, "top": top};
	}

	w.myUtil = myUtil;
})(window || {});





// 7 获得字符串型的当前时间
(function(w) {
	var myUtil = w.myUtil ? w.myUtil : {};	
	/**
	 * 获得字符串型的当前时间
	 * @return {[String]}   [2018年07月31日 星期二 21:41:24]
	 */
	myUtil.getTime = function() {
		var time = new Date();
		var week = time.getDay();  //得到这天是星期几（0表示星期天）
		var weekStr = "日一二三四五六";
		var week1 = weekStr.charAt(week);
		var day = time.getDate();   // 得到这是这个月的第几天
		var year = time.getFullYear();   //得到这是第几年
		var month = time.getMonth() + 1;  // getMonth()获得的是0-11，所以要+1
		var hour = time.getHours();
		var minute = time.getMinutes();
		var second = time.getSeconds();
		var misecond = time.getMilliseconds();
		var allTime = time.getTime();   //从1970/01/01到现在经过的毫秒数

		// return year + "年" + zero(month) + "月" + zero(day) + "日 " + "星期" + week1 + " "
		// + zero(hour) + ":" + zero(minute) + ":" + zero(second);
		
		return year + "-" + zero(month) + "-" + zero(day) + " "
		+ zero(hour) + ":" + zero(minute); 

		function zero(value) {
			return value < 10 ? "0" + value : value;
		}
	};

	w.myUtil = myUtil;
})(window || {});
