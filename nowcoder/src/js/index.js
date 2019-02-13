(function() {
	// 内推用户数据：
	var innerPeopleData = [];
	// 外部用户数据：
	var outsidePeopleData = [];
	// 试题数据：
	var questionsData = [];
	// 定义定时器：
	var timer = null;
	//用于装需要计时的函数：
	var timeArr = [];
	//计时器计数：
	var timeIndex = 0;
	// 定义当前轮播图图片的索引：
	var index = 0;
	// 轮播图图片初始透明度：
	var nextOpacity = 0.2;
	//面试题与在线练习板块滑动速度：
	var interviewSpeed = 50;
	//面试题板块左右滑动索引：
	var pstIndex = 'left';
	// 面试题板块是否停止滑动标志：
	var isInterviewStop = true;
	// 在线练习板块是否停止滑动标志：
	var isOnlineStop = true;
	//在线练习板块左右滑动索引：
	var onlineIndex = 'left';
	var scrollSpeed = 0;
	

	// 当所有数据加载完毕，执行回调函数：
	initData(function() {		
		var slide = document.querySelector('.slide');
		var rCtrl = document.querySelector('.r-ctrl');
		var lCtrl = document.querySelector('.l-ctrl');
		var circleItem = document.querySelectorAll('.circle-item');
		var interviewBtn = document.querySelectorAll('.interview-btn');
		var interviewList1 = document.querySelector('.interview-list1');
		var interviewList2 = document.querySelector('.interview-list2');
		var onlineBtn = document.querySelectorAll('.online-btn');
		var onlineList = document.querySelector('.home-online-list');
		var usersPic = document.querySelectorAll('.users-pic');
		var usersName = document.querySelectorAll('.users-name');
		var answerImg = document.querySelectorAll('.answer-img');
		var answerName = document.querySelectorAll('.answer-name');
		var positionItem = document.querySelectorAll('.position-item');
		var homeSort = document.querySelector('.home-sort-wrap');
		var homeInterview = document.querySelector('.home-interview-wrap');
		var homeOnline = document.querySelector('.home-online-wrap');
		var homeAnswerQuestion = document.querySelector('.home-answerQuestion-wrap');
		var item1 = document.querySelector('.item1');

		// 轮播图初始化：
		initSlide();

		// 右滑动按钮：
		rCtrl.onclick = function() {
			slideHandler('right');
		};

		// 左滑动按钮：
		lCtrl.onclick = function() {
			slideHandler('left');
		};

		//下方小圆点控制器：
		for (var i = 0; i < circleItem.length; i++) {
			circleItem[i].onclick = function() {
				var curIndex = this.getAttribute('index');
				index = curIndex;
				slideHandler('bottom');
			};
		}

		//启动主时钟：
		timer = setInterval(function() {
			timeIndex++;
			timeIndex = timeIndex % 500;
			for (var j = 0; j < timeArr.length; j++) {
				if (timeArr[j]) {
					// 判断上传的项，是不是数组类型：
					if (Array.isArray(timeArr[j])) {
						timeArr[j][0](timeArr[j][1]);
					} else {
						timeArr[j]();
					}
				}
			}
		}, 20);

		//自动轮播：
		timeArr.push(autoSlide);

		// 鼠标进入轮播图停止轮播，并显现出左右控制器：
		slide.onmouseover = function() {
			rCtrl.style.display = 'block';
			lCtrl.style.display = 'block';
			for (var i = 0; i < timeArr.length; i++) {
				if (timeArr[i] == autoSlide) {
					// 从主时钟中删除该计时器：
					timeArr.splice(i, 1);
				}
			}

		};
		// 鼠标离开轮播图开始轮播，并隐藏左右控制器：
		slide.onmouseout = function() {
			rCtrl.style.display = 'none';
			lCtrl.style.display = 'none';
			//计时器从新开始计时：
			timeIndex = 0;
			timeArr.push(autoSlide);
		};

		//面试题板块左右轮播：
		interviewList1.style.left = 0;
		interviewList2.style.left = 0;
		for (var j = 0; j < interviewBtn.length; j++) {
			interviewBtn[j].onclick = function() {
				// 当停止滑动后，可再次触发事件：
				if (isInterviewStop) {
					timeArr.push(interviewSlide);
				}
			};
		}

		// 在线练习板块左右轮播：
		onlineList.style.left = 0;
		for (var k = 0; k < onlineBtn.length; k++) {
			onlineBtn[k].onclick = function() {
				// 当停止滑动后，可再次触发事件：
				if (isOnlineStop) {
					timeArr.push(onlineSlide);
				}
			};
		}

		// 鼠标移入内推用户头像，加载用户完整信息，移除删除：
		for (var l = 0; l < usersPic.length; l++) {
			(function(index) {
				usersPic[index].onmouseenter = function(e) {
					var usersDetail = document.querySelector('.users-detail');
					if (!usersDetail) {
						// 加载用户完整数据：
						loadUserDetail(index, usersPic, innerPeopleData);
						// 根据用户信息的不同，更改背景颜色以及图片：
						changeBgColor(index, innerPeopleData);
						this.style.cursor = 'default';
					}
				};

				usersPic[index].onmouseleave = function(e) {
					var usersDetail = document.querySelector('.users-detail');
					if (usersDetail) {
						usersDetail.parentNode.removeChild(usersDetail);
					}
				};
			})(l);
		}

		// 鼠标移入内推用户名字，加载用户完整信息，移除删除：
		for (var n = 0; n < usersName.length; n++) {
			(function(index) {
				usersName[index].onmouseenter = function(e) {
					var usersDetail = document.querySelector('.users-detail');
					if (!usersDetail) {
						// 加载用户完整数据：
						loadUserDetail(index, usersName, innerPeopleData, function() {
							usersDetail = document.querySelector('.users-detail');					
							usersDetail.style.left = '-118px';
							usersDetail.style.top = '28px';
						});
						// 根据用户信息的不同，更改背景颜色以及图片：
						changeBgColor(index, innerPeopleData);
						this.style.cursor = 'default';
					}

				};

				usersName[index].onmouseleave = function(e) {
					var usersDetail = document.querySelector('.users-detail');
					if (usersDetail) {
						usersDetail.parentNode.removeChild(usersDetail);
					}
				};
			})(n);
		}

		// 鼠标移入答题用户头像，加载用户完整信息，移除删除：
		for (var p = 0; p < answerImg.length; p++) {
			(function(index) {
				answerImg[index].onmouseenter = function(e) {
					var usersDetail = document.querySelector('.users-detail');
					if (!usersDetail) {
						// 加载用户完整数据：
						loadUserDetail(index, answerImg, outsidePeopleData);
						// 根据用户信息的不同，更改背景颜色以及图片：
						changeBgColor(index, outsidePeopleData);
						this.style.cursor = 'default';
					}
				};

				answerImg[index].onmouseleave = function(e) {
					var usersDetail = document.querySelector('.users-detail');
					if (usersDetail) {
						usersDetail.parentNode.removeChild(usersDetail);
					}
				};
			})(p);
		}

		// 鼠标移入答题用户名字，加载用户完整信息，移除删除：
		for (var n = 0; n < answerName.length; n++) {
			(function(index) {
				answerName[index].onmouseenter = function(e) {
					var usersDetail = document.querySelector('.users-detail');
					if (!usersDetail) {
						// 加载用户完整数据：
						loadUserDetail(index, answerName, outsidePeopleData, function() {
							usersDetail = document.querySelector('.users-detail');					
							usersDetail.style.left = '-172px';
							usersDetail.style.top = '24px';
						});
						// 根据用户信息的不同，更改背景颜色以及图片：
						changeBgColor(index, outsidePeopleData);
						this.style.cursor = 'default';
					}

				};

				answerName[index].onmouseleave = function(e) {
					var usersDetail = document.querySelector('.users-detail');
					if (usersDetail) {
						usersDetail.parentNode.removeChild(usersDetail);
					}
				};
			})(n);
		}

		// 屏幕滚动，显示定位栏：
		window.onscroll = function(e) {
			showPosition();
		};

		// 点击定位栏按钮，滑动到相应位置：
		positionItem.forEach(function(item, index) {
			item.onclick = function(e) {
				// 在滑动执行之前，先清理定时器：
				for (var i = 0; i < timeArr.length; i++) {
					if (Array.isArray(timeArr[i])) {
						timeArr.splice(i, 1);
					}
				}
				switch (index) {
					case 0:
						timeArr.push([ScrolltoElement, homeSort]);
						break;
					case 1:
						timeArr.push([ScrolltoElement, homeInterview]);
						break;
					case 2:
						timeArr.push([ScrolltoElement, homeOnline]);
						break;
					case 3:
						timeArr.push([ScrolltoElement, homeAnswerQuestion]);
						break;
					default:
						break;
				}
			};
		});
	});

	// 初始化所有数据：
	function initData(callback) {
		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				var jsonurl = JSON.parse(xhr.responseText);
				for (var i = 0; i < jsonurl.innerPeople.length; i++) {
					innerPeopleData.push(jsonurl.innerPeople[i]);
				}
				for (var i = 0; i < jsonurl.outsidePeople.length; i++) {
					outsidePeopleData.push(jsonurl.outsidePeople[i]);
				}
				for (var i = 0; i < jsonurl.questions.length; i++) {
					questionsData.push(jsonurl.questions[i]);
				}

				// 初始化互动用户数据：
				initUsers();
				// 所有数据加载完毕，执行回调函数：
				callback();
			}
		};
		xhr.open('get', '../data.json', true);
		xhr.send(null);
	}

	// 初始化互动数据：
	function initUsers() {
		var usersList = document.querySelector('.users-list');
		var questionList = document.querySelector('.question-list');
		var usersArr = [];
		var questionArr = [];

		// 加载内推用户评论模块：
		for (var i = 0; i < innerPeopleData.length; i++) {
			var htmlStr = '<li class="users-item fl">';
			htmlStr +=      '<div class="users-pic">';
			htmlStr +=        '<img src="imgs/' + innerPeopleData[i].picture + '" alt="">';
			htmlStr +=      '</div>';
			htmlStr +=      '<div class="users-mesg">';
			htmlStr +=        '<div class="users-name">' + innerPeopleData[i].name + '</div>';
			htmlStr +=        '<p class="users-job">' + innerPeopleData[i].job + '</p>';
			htmlStr +=      '</div>';
			htmlStr +=    '</li>';

			usersArr.push(htmlStr);
		}

		// 加载试题问答模块：
		for (var j = 0; j < questionsData.length; j++) {
			var questionStr = '<li class="question-item">';
			questionStr +=      '<a href="#" class="question-title">' + questionsData[j].title + '</a>';
			questionStr +=      '<div class="question-style">';
			for (var k = 0; k < questionsData[j].style.length; k++) {				
				questionStr +=    '<span class="style-item">' + questionsData[j].style[k] + '</span>';
			}
			questionStr +=      '</div>';
			questionStr +=      '<div class="question-answer clearfix">';
			questionStr +=        '<div class="answer-img fl">';
			questionStr +=          '<img src="imgs/' + outsidePeopleData[j].picture + '">';
			questionStr +=        '</div>';
			questionStr +=        '<div class="answer-context fl">';
			questionStr +=          '<div class="nameAndTime clearfix">';
			questionStr +=            '<div class="answer-name fl">' + outsidePeopleData[j].name + '</div>';
			questionStr +=            '<div class="answer-time fr">发表于<span class="time-num">' + outsidePeopleData[j].time + '</span></div>';
			questionStr +=          '</div>';
			questionStr +=          '<div class="textAndAll clearfix">';
			questionStr +=            '<p class="answer-text fl">' + outsidePeopleData[j].answer + '</p>';
			questionStr +=            '<a href="#" class="answer-all fr">[查看全部]</a>';
			questionStr +=          '</div>';
			questionStr +=        '</div>';
			questionStr +=      '</div>';
			questionStr +=    '</li>';

			questionArr.push(questionStr);
		}

		usersList.innerHTML = usersArr.join("");
		questionList.innerHTML = questionArr.join("");
	}

	// 轮播图初始化：
	function initSlide() {
		var slide = document.querySelector('.slide');
		var imgList = document.querySelector('.img-list');
		var imgItem = document.querySelectorAll('.img-item');
		var clientW = document.documentElement.clientWidth || document.body.clientWidth;

		// 轮播图与浏览器屏幕等宽：
		slide.style.width = clientW + 'px';
		//定义图片宽度：
		for (var i = 0; i < imgItem.length; i++) {
			imgItem[i].style.width = clientW + 'px';
		}
		// 所有图片总长：
		imgList.style.width = clientW * 5 + 'px';
		imgList.style.left = 0;
	}

	// 轮播图板块滑动设计：
	function slideHandler(position) {
		var imgList = document.querySelector('.img-list');
		var imgItem = document.querySelectorAll('.img-item');
		var circleItem = document.querySelectorAll('.circle-item');
		var clientW = document.documentElement.clientWidth || document.body.clientWidth;

		//开始前，重置图片透明度与时钟计数：
		nextOpacity = 0.2;
		timeIndex = 0;
		
		if (position === 'left') {
			index--;
			if (parseInt(imgList.style.left) === 0) {
				imgList.style.left = (-clientW) * 5 +'px';
			}
			imgList.style.left = parseInt(imgList.style.left) + clientW + 'px';
		} else if (position === 'right') {
			index++;
			imgList.style.left = parseInt(imgList.style.left) - clientW + 'px';
			if (parseInt(imgList.style.left) === (-clientW) * 5) {
				imgList.style.left = 0;
			}
		} else if (position === 'bottom') {
			imgList.style.left = index * -clientW + 'px';
		}

		//轮播图图片索引反复：
		if (index > 4) {
			index = 0;
		}
		if (index < 0) {
			index = 4;
		}

		// 开始图片透明度的变化：
		timeArr.push(opacityChange);

		// 当前小圆点的背景色：
		for (var i = 0; i < circleItem.length; i++) {
			circleItem[i].className = 'circle-item fl';
			if (circleItem[i].getAttribute('index') == index) {
				circleItem[i].className = 'circle-item fl current';
			}
		}		
	}

	// 图片透明度变化：
	function opacityChange() {
		var imgItem = document.querySelectorAll('.img-item');
			
		nextOpacity += 0.05;
		if (nextOpacity >= 1) {
			for (var i = 0; i < timeArr.length; i++) {
				if (timeArr[i] == opacityChange) {
					timeArr.splice(i, 1);
				}
			}
		}
		imgItem[index].style.opacity = nextOpacity;
	}

	// 自动轮播：
	function autoSlide() {
		var rCtrl = document.querySelector('.r-ctrl');
		// 当时间达到5分钟，开始轮播：
		timeIndex % 250 === 0 && rCtrl.onclick();
	}

	// 面试题板块左右滑动：
	function interviewSlide() {
		var interviewList1 = document.querySelector('.interview-list1');
		var interviewList2 = document.querySelector('.interview-list2');
		var maxLeft = 1000;  //left最大值
		
		// 已经停止标志关闭：
		isInterviewStop = false;
		toggleSlide(maxLeft, interviewList1, interviewList2);
	}

	// 在线练习板块左右滑动：
	function onlineSlide() {
		var onlineList = document.querySelector('.home-online-list');
		var maxLeft = 928;  //left最大值

		// 已经停止标志关闭：
		isOnlineStop = false;
		toggleSlide(maxLeft, onlineList);
	}

	/**
	 * 面试题与在线练习板块共用滑动函数
	 * @param  {[number]} maxLeft 滑动的最大的距离
	 * @param  {[ele]} list1   需要滑动的html元素1
	 * @param  {[ele]} list2   需要滑动的html元素2
	 */
	function toggleSlide(maxLeft, list1, list2) {
		// 传三参时：
		if (list1 && list2) {
			//当pstIndex为left时，向左滑动；当pstIndex为right时，向右滑动；
			if (pstIndex === 'left') {				
				list1.style.left = parseInt(list1.style.left) - interviewSpeed + 'px';
				list2.style.left = parseInt(list2.style.left) - interviewSpeed + 'px';
		
				// 当滑动达到最大left值，停止滑动：
				if (parseInt(list1.style.left) <= -maxLeft && parseInt(list2.style.left) <= - maxLeft) {
					for (var i = 0; i < timeArr.length; i++) {
						if (timeArr[i] == interviewSlide) {
							timeArr.splice(i, 1);
						}
					}
					// 已经停止标志重新开启：
					isInterviewStop = true;
					pstIndex = 'right';		
				}
			} else if (pstIndex === 'right') {			
				list1.style.left = parseInt(list1.style.left) + interviewSpeed + 'px';
				list2.style.left = parseInt(list2.style.left) + interviewSpeed + 'px';

				// 当滑动达到最小left值，停止滑动：
				if (parseInt(list1.style.left) >= 0 && parseInt(list2.style.left) >= 0) {
					for (var i = 0; i < timeArr.length; i++) {
						if (timeArr[i] == interviewSlide) {
							timeArr.splice(i, 1);
						}
					}
					isInterviewStop = true;
					pstIndex = 'left';
				}				
			}
		// 只传二参时：
		} else {
			//当onlineIndex为left时，向左滑动；当onlineIndex为right时，向右滑动；
			if (onlineIndex === 'left') {	
				list1.style.left = parseInt(list1.style.left) - interviewSpeed + 'px';
		
				// 当滑动达到最大left值，停止滑动：
				if (parseInt(list1.style.left) <= -maxLeft) {
					for (var i = 0; i < timeArr.length; i++) {
						if (timeArr[i] == onlineSlide) {
							timeArr.splice(i, 1);
						}
					}
					// 已经停止标志重新开启：
					isOnlineStop = true;
					onlineIndex = 'right';	
				}				
			} else if (onlineIndex === 'right') {	
				list1.style.left = parseInt(list1.style.left) + interviewSpeed + 'px';
				// 当滑动达到最小left值，停止滑动：
				if (parseInt(list1.style.left) >= 0) {
					for (var i = 0; i < timeArr.length; i++) {
						if (timeArr[i] == onlineSlide) {
							timeArr.splice(i, 1);
						}
					}
					isOnlineStop = true;
					onlineIndex = 'left';
				}	
			}
		}		
	}

	/**
	 * 加载用户完整数据：
	 * @param  {[number]}   index    所hover元素的索引值
	 * @param  {[element]}   ele     该元素的dom
	 * @param  {[Object]}   data     后台获取的数据
	 * @param  {Function} callback   数据加载完成后，执行回调函数
	 */
	function loadUserDetail(index, ele, data, callback) {
		var achievementNum = data[index].badge.gold + data[index].badge.skyblue + data[index].badge.blue + data[index].badge.green + data[index].badge.pink + data[index].accepted + data[index].praise + data[index].correct + data[index].pass;
		var htmlStr = '<div class="users-detail">';
		htmlStr +=      '<div class="detail-triangle"></div>';
		htmlStr +=      '<div class="detail-head">';
		htmlStr +=        '<a href="#" class="head-pic"></a>';
		htmlStr +=        '<span class="head-title">';
		htmlStr +=          '<a href="#" title="' + data[index].name + '" class="head-name">'+ data[index].name + '</a>';
		htmlStr += 			'<i class="head-sex"></i>';
		htmlStr += 		  '</span>';
		htmlStr +=      '</div>';
		htmlStr +=      '<ul class="detail-basic-list clearfix">';
		htmlStr +=        '<li class="detail-basic-item fl">' + data[index].city + '</li>';
		htmlStr +=        '<li class="detail-basic-item fl">' + data[index].job + '</li>';
		htmlStr +=        '<li class="detail-basic-item fl">' + data[index].university + '</li>';
		htmlStr +=      '</ul>';
		htmlStr +=      '<div class="detail-achievement clearfix">';
		htmlStr +=        '<div class="achievement-title fl">成就值：<span class="achievement-num">' + achievementNum + '</span></div>';
		htmlStr +=		  '<ul class="achievement-list fr">';
		htmlStr +=          '<li class="achievement-item fl"><a href="#">' + data[index].badge.gold + '</a></li>';
		htmlStr +=          '<li class="achievement-item fl"><a href="#">' + data[index].badge.skyblue + '</a></li>';
		htmlStr +=          '<li class="achievement-item fl"><a href="#">' + data[index].badge.blue + '</a></li>';
		htmlStr +=          '<li class="achievement-item fl"><a href="#">' + data[index].badge.green + '</a></li>';
		htmlStr +=          '<li class="achievement-item fl"><a href="#">' + data[index].badge.pink + '</a></li>';
		htmlStr +=		  '</ul>';
		htmlStr +=      '</div>';
		htmlStr +=      '<ul class="pass-list clearfix">';
		htmlStr +=        '<li class="pass-item">';
		htmlStr +=          '<p class="pass-title">被采纳</p>';
		htmlStr +=          '<span class="pass-num">' + data[index].accepted + '</span>';
		htmlStr +=        '</li>';
		htmlStr +=        '<li class="pass-item">';
		htmlStr +=          '<p class="pass-title">获赞</p>';
		htmlStr +=          '<span class="pass-num">' + data[index].praise + '</span>';
		htmlStr +=        '</li>';
		htmlStr +=        '<li class="pass-item">';
		htmlStr +=          '<p class="pass-title">答对题</p>';
		htmlStr +=          '<span class="pass-num">' + data[index].correct + '</span>';
		htmlStr +=        '</li>';
		htmlStr +=        '<li class="pass-item">';
		htmlStr +=          '<p class="pass-title">编程通过</p>';
		htmlStr +=          '<span class="pass-num">' + data[index].pass + '</span>';
		htmlStr +=        '</li>';
		htmlStr +=      '</ul>';
		htmlStr +=      '<div class="detail-button">';
		htmlStr +=        '<a href="#" class="btn-item follow"><i class="icon-plus"></i>关注</a>';
		htmlStr +=        '<a href="#" class="btn-item letter"><i class="icon-bubble"></i>私信</a>';
		htmlStr +=        '<a href="#" class="btn-item homepage"><i class="icon-user"></i>个人主页</a>';
		htmlStr +=        '<div class="button-add">';
		htmlStr +=          '<i class="icon-menu"></i>';
		htmlStr +=          '<div class="add-list">';
		htmlStr +=            '<a href="#" class="blacklist">加入黑名单</a>';
		htmlStr +=            '<a href="#" class="report">举报TA</a>';
		htmlStr +=          '</div>';
		htmlStr +=        '</div>';
		htmlStr +=      '</div>';
		htmlStr +=    '</div>';

		ele[index].innerHTML += htmlStr;
		// 如果存在回调函数，执行：
		if (callback) {
			callback();
		}
	};

	// 根据用户信息的不同，更改背景颜色以及图片：
	function changeBgColor(index, data) {
		var headPic = document.querySelector('.head-pic');
		var headSex = document.querySelector('.head-sex');
		var detailHead = document.querySelector('.detail-head');
		var achievementNum = document.querySelector('.achievement-num');
		var detailTriangle = document.querySelector('.detail-triangle');
		var achievementIndex = 0;

		if (achievementNum.innerHTML < 500) {
			achievementIndex = 0;
			detailTriangle.style.borderBottom = '10px solid #E24B4B';
		} else if (achievementNum.innerHTML < 1000) {
			achievementIndex = 1;
			detailTriangle.style.borderBottom = '10px solid #E19F4C';
		}else if (achievementNum.innerHTML < 1500) {
			achievementIndex = 2;
			detailTriangle.style.borderBottom = '10px solid #E1CF4C';
		} else if (achievementNum.innerHTML < 2000) {
			achievementIndex = 3;
			detailTriangle.style.borderBottom = '10px solid #9CDF4C';
		} else if (achievementNum.innerHTML < 2500) {
			achievementIndex = 4;
			detailTriangle.style.borderBottom = '10px solid #4FACDE';
		} else if (achievementNum.innerHTML < 3000) {
			achievementIndex = 5;
			detailTriangle.style.borderBottom = '10px solid #4B6FE1';
		} else {
			achievementIndex = 6;
			detailTriangle.style.borderBottom = '10px solid #AE45E4';
		}

		detailHead.style.backgroundPosition = '0px ' + '-' + achievementIndex * 81 + 'px';
		headPic.style.backgroundImage = 'url("imgs/' + data[index].picture + '")';
		headSex.style.backgroundPosition = '-' + data[index].sex * 20 + 'px 0px';
	}

	// 右侧定位栏设计：
	function showPosition() {
		var position = document.querySelector('.position');
		var homeSort = document.querySelector('.home-sort-wrap');
		var homeInterview = document.querySelector('.home-interview-wrap');
		var homeOnline = document.querySelector('.home-online-wrap');
		var homeAnswerQuestion = document.querySelector('.home-answerQuestion-wrap');
		var positionItem = document.querySelectorAll('.position-item');

		//兼容IE：
		var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;

		// 上下滚动轮大于400，定位栏显示：
		scrollTop >= 400 ? position.style.display = 'block' : position.style.display = 'none';

		if (scrollTop >= (homeAnswerQuestion.offsetTop - 150)) {
			positionItem.forEach(function(item, index) {
				item.style.backgroundColor = '#444B53';
				if (index === 3) {
					item.style.backgroundColor = '#32cb1d';
				}
			});
		} else if (scrollTop >= (homeOnline.offsetTop - 150)) {
			positionItem.forEach(function(item, index) {
				item.style.backgroundColor = '#444B53';
				if (index === 2) {
					item.style.backgroundColor = '#2aa9e9';
				}
			});
		} else if (scrollTop >= (homeInterview.offsetTop - 150)) {
			positionItem.forEach(function(item, index) {
				item.style.backgroundColor = '#444B53';
				if (index === 1) {
					item.style.backgroundColor = '#668cff';
				}
			});
		} else if (scrollTop >= (homeSort.offsetTop - 150)) {
			positionItem.forEach(function(item, index) {
				item.style.backgroundColor = '#444B53';
				if (index === 0) {
					item.style.backgroundColor = '#ff8362';
				}
			});
		}
	}

	// 滑动到模块相应位置：
	function ScrolltoElement(ele) {
		var scrollToTop = document.documentElement.scrollTop;
		var scrollSpeed = Math.abs(scrollToTop - ele.offsetTop) / 10;

		// 速度不足1的时候，补足1：
		scrollSpeed = scrollSpeed > 0 ? Math.ceil(scrollSpeed) : Math.floor(scrollSpeed);

		if (scrollToTop >= (ele.offsetTop)) {
			document.documentElement.scrollTop -= scrollSpeed;
			if (document.documentElement.scrollTop <= (ele.offsetTop)) {
				scrollSpeed = 0;
				for (var i = 0; i < timeArr.length; i++) {
					if (Array.isArray(timeArr[i])) {
						timeArr.splice(i, 1);
					}
				}
			}
		} else {
			document.documentElement.scrollTop += scrollSpeed;
			if (document.documentElement.scrollTop >= (ele.offsetTop)) {
				scrollSpeed = 0;
				for (var i = 0; i < timeArr.length; i++) {
					if (Array.isArray(timeArr[i])) {
						timeArr.splice(i, 1);
					}
				}
			}
		}
	}

})();