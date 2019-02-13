var timer,
    timerIndex = -1,
    timeArr = [];

$(function() {
	$('#search-btn').on('tap', function(e) {
		var txt = $('#searchTxt').val() || 'kzt';
		window.location.href = 'search.html?search=' + txt;
	});

	//轮播图
	initSlide();

  //注册时钟的回调函数
  timeArr.push(updateTime);

  // 初始化主时钟并启动（为了时钟的共用）
  timer = setInterval(function() {  
    timerIndex += 1;
    timerIndex = timerIndex % 100; 
    // 执行页面中所有需要注册时钟执行的函数
    for(var i = 0; i < timeArr.length; i++) {
      timeArr[i]();   // 调用数组中的每个函数执行
    }
  }, 200);
});

// 页面卸载之前清除时钟
window.onunload = function() {
  clearInterval(timer);
};

// 更新倒计时
function updateTime() {
    // 每秒钟去更新倒计时
    if(timerIndex % 5 != 0) {
      return;
    }
    //满一秒种
    //计算时间差，并更新到页面span中
    var strArr = getTime(loadData.miaosha.endTimer);
    $('.timer-num').each(function(index, value) {
      $(this).html(strArr[index]);  
      // $(value).text(strArr[index]);  与上相同 
    });
}

// 轮播图：
function initSlide() {
  var mySwiper = new Swiper ('.swiper-container', {
    direction: 'horizontal',  //水平方向的滚动       horizontal水平  vertical垂直
    loop: true,  // 是否循环
    autoplay: true,
    
    // 如果需要分页器
    pagination: {
      el: '.swiper-pagination',
    },
    
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  }); 
}









// var timer,
//     timerIndex = -1,
//     timeArr = [];

// //注册时钟的回调函数
//   timeArr.push(updateTime);

// // 初始化主时钟并启动（为了时钟的共用）
// timer = setInterval(function() {  
//   timerIndex += 1;
//   timerIndex = timerIndex % 100; 
//   // 执行页面中所有需要注册时钟执行的函数
//   for(var i = 0; i < timeArr.length; i++) {
//     timeArr[i]();   // 调用数组中的每个函数执行
//   }
// }, 200);