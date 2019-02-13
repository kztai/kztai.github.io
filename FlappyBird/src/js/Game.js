(function() {
	var Game = window.Game = function(params) {
		// 得到画布：
		this.canvas = document.getElementById(params.id);
		this.ctx = this.canvas.getContext('2d');

		// 资源文件地址：
		this.Rjsonurl = params.Rjsonurl;
		// 帧编号：
		this.fno = 0;

		// 设置画布宽高：
		this.init();

		var self = this;

		// 读取资源：是一个异步过程，我们不知道什么时候资源加载完毕，所以需要使用回调函数
		this.loadAllResource(function() {
			// 执行回调函数，当资源全部加载完毕后，执行这里：
			// 正式开始游戏：
			self.start();
		});
	};

	Game.prototype.init = function() {
		var windowWidth = document.documentElement.clientWidth;
		var windowHeight = document.documentElement.clientHeight;

		// 设置宽度界限
		if (windowWidth > 414) {
			windowWidth = 414;
		} else if (windowWidth < 320) {
			windowWidth = 320;
		}

		// 设置高度界限
		if (windowHeight > 680) {
			windowHeight = 680;
		} else if (windowHeight < 500) {
			windowHeight = 500;
		}

		this.canvas.width = windowWidth;
		this.canvas.height = windowHeight;
	};

	// 读取资源
	Game.prototype.loadAllResource = function(callback) {
		// 准备一个R对象：其中img为Object类型，img.src = 'imgs/img.png'
		// {
		// 		'name1': img1,
		// 		'name2': img2,
		// 		'name3': img3
		// }
		this.R = {};

		var self = this;
		var alreadyNumber = 0;

		var xhr = new XMLHttpRequest();
		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4) {
				// 转为json对象：
				var R_obj = JSON.parse(xhr.responseText);

				for (var i = 0; i < R_obj.images.length; i++) {

					self.R[R_obj.images[i].name] = new Image();
					// http请求图片：
					self.R[R_obj.images[i].name].src = R_obj.images[i].url;

					// 添加监听，当加载完一张图片后：
					self.R[R_obj.images[i].name].onload = function() {
						alreadyNumber ++;
						self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
						self.ctx.font = '20px 楷体';
						self.ctx.textAlign = 'center';
						self.ctx.fillText('正在加载第' + alreadyNumber + '/' + R_obj.images.length + '项，请稍后！', self.canvas.width / 2, self.canvas.height * (1 - 0.618));

						// 当所有图片加载完毕后：
						if (alreadyNumber === R_obj.images.length) {
							callback();
						}
					};
				}
				// console.log(self.R);
			}
		};
		xhr.open('get', this.Rjsonurl, true);
		xhr.send(null);
	};

	Game.prototype.start = function() {
		var self = this;
		this.sm = new SceneManager();

		// 设置定时器：
		this.timer = setInterval(function() {
			self.fno ++;
			self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);

			self.sm.update();
			self.sm.render();

			self.ctx.font = '16px 微软雅黑';
			self.ctx.textAlign = 'left';
			self.ctx.fillStyle = 'black';
			self.ctx.fillText('FNO:' + self.fno, 10, 20);
			self.ctx.fillText('场景:' + self.sm.sceneNum, 10, 40);

		}, 20);
	};

})();






// (function() {
// 	var Game = window.Game = function(params) {
// 		// 得到画布：
// 		this.canvas = document.getElementById(params.id);
// 		this.ctx = this.canvas.getContext('2d');

// 		// 资源文件地址：
// 		this.Rjsonurl = params.Rjsonurl;
// 		// 帧编号：
// 		this.fno = 0;
// 		// 分数：
// 		this.score = 0;

// 		// 设置画布宽高：
// 		this.init();

// 		var self = this;

// 		// 读取资源：是一个异步过程，我们不知道什么时候资源加载完毕，所以需要使用回调函数
// 		this.loadAllResource(function() {
// 			// 执行回调函数，当资源全部加载完毕后，执行这里：
// 			// 正式开始游戏：
// 			self.start();

// 			// 添加点击事件：点击画布，小鸟上升
// 			self.bindEvent();
// 		});
// 	};

// 	Game.prototype.init = function() {
// 		var windowWidth = document.documentElement.clientWidth;
// 		var windowHeight = document.documentElement.clientHeight;

// 		// 设置宽度界限
// 		if (windowWidth > 414) {
// 			windowWidth = 414;
// 		} else if (windowWidth < 320) {
// 			windowWidth = 320;
// 		}

// 		// 设置高度界限
// 		if (windowHeight > 680) {
// 			windowHeight = 680;
// 		} else if (windowHeight < 500) {
// 			windowHeight = 500;
// 		}

// 		this.canvas.width = windowWidth;
// 		this.canvas.height = windowHeight;
// 	};

// 	// 读取资源
// 	Game.prototype.loadAllResource = function(callback) {
// 		// 准备一个R对象
// 		this.R = {};

// 		var self = this;
// 		var alreadyNumber = 0;

// 		var xhr = new XMLHttpRequest();
// 		xhr.onreadystatechange = function() {
// 			if (xhr.readyState === 4) {
// 				// 转为json对象：
// 				var R_obj = JSON.parse(xhr.responseText);

// 				for (var i = 0; i < R_obj.images.length; i++) {
// 					self.R[R_obj.images[i].name] = new Image();
// 					// http请求图片：
// 					self.R[R_obj.images[i].name].src = R_obj.images[i].url;

// 					// 添加监听，当加载完一张图片后：
// 					self.R[R_obj.images[i].name].onload = function() {
// 						alreadyNumber ++;
// 						self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);
// 						self.ctx.font = '20px 楷体';
// 						self.ctx.textAlign = 'center';
// 						self.ctx.fillText('正在加载第' + alreadyNumber + '/' + R_obj.images.length + '项，请稍后！', self.canvas.width / 2, self.canvas.height * (1 - 0.618));

// 						// 当所有图片加载完毕后：
// 						if (alreadyNumber === R_obj.images.length) {
// 							callback();
// 						}
// 					};
// 				}
// 			}
// 		};

// 		xhr.open('get', this.Rjsonurl, true);
// 		xhr.send(null);
// 	};

// 	Game.prototype.start = function() {
// 		var self = this;

// 		this.bg = new Background();
// 		this.land = new Land();
// 		this.bird = new Bird();

// 		// 管子数组：
// 		this.pipeArr = [];

// 		// 设置定时器：
// 		this.timer = setInterval(function() {
// 			self.ctx.clearRect(0, 0, self.canvas.width, self.canvas.height);

// 			self.bg.update();
// 			self.bg.render();

// 			self.land.update();
// 			self.land.render();

// 			self.bird.update();
// 			self.bird.render();

// 			// 每过150帧，更新一个管子：
// 			self.fno % 150 === 0 && (new Pipe());

// 			for (var i = 0; i < self.pipeArr.length; i++) {
// 				self.pipeArr[i] && self.pipeArr[i].update();
// 				self.pipeArr[i] && self.pipeArr[i].render();
// 			}

// 			//设计分数：
// 			var scoreLength = self.score.toString().length;
// 			for (var i = 0; i < scoreLength; i++) {
// 				self.ctx.drawImage(self.R['num' + self.score.toString().charAt(i)], self.canvas.width / 2 - (scoreLength / 2) * 34  + 34 * i, 60);
// 			}

// 			self.fno ++;
// 			self.ctx.font = '16px 微软雅黑';
// 			self.ctx.textAlign = 'left';
// 			self.ctx.fillText('FNO:' + self.fno, 10, 20);

// 		}, 20);
// 	};

// 	Game.prototype.bindEvent = function() {
// 		var self = this;
// 		this.canvas.onclick = function() {
// 			self.bird.fly();
// 		};
// 	};

// })();


