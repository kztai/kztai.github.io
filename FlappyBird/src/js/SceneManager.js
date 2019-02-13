(function() {
	var SceneManager = window.SceneManager = function() {
		// 1表示欢迎界面；2表示游戏指导界面；3表示游戏内容；4表示游戏结束；5重新开始界面
		this.sceneNum = 1;
	
		game.bg = new Background();
		game.land = new Land();
		game.bird = new Bird();

		// logo:
		this.title = game.R.title;
		this.titleY = -50;
		// 开始按钮：
		this.btn_play = game.R.btn_play;
		this.btnX = game.canvas.width / 2 - 58;
		this.btnY = game.canvas.height;

		// 点击事件：
		this.bindEvent();
		
	};

	SceneManager.prototype.update = function() {
		switch (this.sceneNum) {
			case 1: 
				// 定义logo，开始按钮位置：
				this.titleY += 8;
				if (this.titleY > 120) {
					this.titleY = 120;
				}
				this.btnY -= 15;
				if (this.btnY < 320) {
					this.btnY = 320;
				}
				break;
			case 2:
				// 鸟扑打翅膀：
				game.bird.wingStep();
				
				// 设置指导图片闪烁：
				if (this.opacityIsDown) {
					this.tutorialOpacity -= 0.02;
				} else {
					this.tutorialOpacity += 0.02;
				}
				if (this.tutorialOpacity < 0.02 || this.tutorialOpacity > 0.98) {
					this.opacityIsDown = !this.opacityIsDown;
				}
				break;
			case 3:
				game.bird.update();
				game.bg.update();
				game.land.update();

				game.fno % 150 === 0 && (new Pipe());
				for (var i = 0; i < game.pipeArr.length; i++) {
					game.pipeArr[i] && game.pipeArr[i].update();
				}
				break;
			case 4:
				this.gamefno ++;

				// 设置当进入场景4后，如果触底，开始销毁动画：
				if (game.bird.y > game.canvas.height * 0.78 - 17) {
					this.toLand = true;
				}
				if (!this.toLand) {
					game.bird.y += this.gamefno * 0.8;
					game.bird.d = 1;
				} else {			
					// 每10帧，滚动销毁动画：	
					game.fno % 10 === 0 && this.boomNum ++;					
				}

				//白屏渐缓效果，表示已死亡：
				this.maskOpacity -= 0.1;
				if (this.maskOpacity < 0) {
					this.maskOpacity = 0;
				}

				break;
		}
	};
	SceneManager.prototype.render = function() {
		switch (this.sceneNum) {
			case 1: 
				game.bg.render();
				game.land.render();
				game.bird.render();

				game.bird.x = game.canvas.width / 2;
				game.bird.y = 220;

				game.ctx.drawImage(this.title, game.canvas.width / 2 - 89, this.titleY);
				game.ctx.drawImage(this.btn_play, this.btnX, this.btnY);
				break;
			case 2:
				game.bg.render();
				game.land.render();
				game.bird.render();

				game.ctx.save();
				game.ctx.globalAlpha = this.tutorialOpacity;  // 设置透明度的改变
				game.ctx.drawImage(game.R.tutorial, game.canvas.width / 2 - 57, 200);
				game.ctx.restore();
				break;
			case 3: 
				game.bg.render();
				game.land.render();
				game.bird.render();

				for (var i = 0; i < game.pipeArr.length; i++) {
					game.pipeArr[i] && game.pipeArr[i].render();
				}

				// 设计分数：
				var scoreLength = game.score.toString().length;
				for (var i = 0; i < scoreLength; i++) {
					game.ctx.drawImage(game.R['num' + game.score.toString().charAt(i)], game.canvas.width / 2 - (	scoreLength / 2) * 34  + 34 * i, 60);
				}
				break;
			case 4:
				game.bg.render();
				game.land.render();

				for (var i = 0; i < game.pipeArr.length; i++) {
					game.pipeArr[i] && game.pipeArr[i].render();
				}

				if (!this.toLand) {
					game.bird.render();
				} else {
					//渲染爆炸特效：
					if (this.boomNum <= 2) {
						game.ctx.drawImage(game.R['boom' + this.boomNum], game.bird.x - 48, game.bird.y - 48);
					} else {
						// 当爆炸完成，进入场景5：
						this.enter(5);
					}
				}

				// 渲染大白屏：
				game.ctx.fillStyle = 'rgba(255, 255, 255,' + this.maskOpacity + ')';
				game.ctx.fillRect(0, 0, game.canvas.width, game.canvas.height);

				// 设计分数：
				var scoreLength = game.score.toString().length;
				for (var i = 0; i < scoreLength; i++) {
					game.ctx.drawImage(game.R['num' + game.score.toString().charAt(i)], game.canvas.width / 2 - (	scoreLength / 2) * 34  + 34 * i, 60);
				}
				break;

			case 5:
				game.bg.render();
				game.land.render();
				for (var i = 0; i < game.pipeArr.length; i++) {
					game.pipeArr[i] && game.pipeArr[i].render();
				}
				
				// 设计分数：
				var scoreLength = game.score.toString().length;
				for (var i = 0; i < scoreLength; i++) {
					game.ctx.drawImage(game.R['num' + game.score.toString().charAt(i)], game.canvas.width / 2 - (	scoreLength / 2) * 34  + 34 * i, 60);
				}

				// 渲染重新开始图片：
				game.ctx.drawImage(game.R['gameOver'], game.canvas.width / 2 - 102, 200);
				break;
		}
	};

	SceneManager.prototype.enter = function(num) {
		this.sceneNum = num;
		switch (this.sceneNum) {
			case 1:
				// 表示一进入场景1，就执行：
				this.titleY = -50;
				this.btnY = game.canvas.height;
				// 重新开始后，新建一个鸟，防止上一回合影响新回合：
				game.bird = new Bird();
				break;
			case 2:
				game.bird.y = 100;
				// 指导图片的透明度：
				this.tutorialOpacity = 1;
				// 指导图片透明度是否到底（顶）：
				this.opacityIsDown = true;
				break;
			case 3:
				game.bird.x = game.canvas.width * (1 - 0.618) - 24;
				game.pipeArr = new Array();
				game.score = 0;
				break;
			case 4:
				//死亡动画，游戏界面白一下：
				this.maskOpacity = 1;
				this.toLand = false;
				this.gamefno = 0;
				this.boomNum = 0;
				break;
		}
	};

	SceneManager.prototype.bindEvent = function() {
		var self = this;

		// pc界面使用：
		// game.canvas.onclick = function(e) {
		// 	clickHandler(e.clientX,  e.clientY);
		// };

		// 手机界面使用：
		game.canvas.addEventListener('touchstart', function(e) {
			// 防止刚点击屏幕时的卡顿现象：
			e.preventDefault();
			var finger = e.touches[0];
			clickHandler(finger.clientX, finger.clientY);
		}, true);

		function clickHandler(mousex, mousey) {		
			switch (self.sceneNum) {
				case 1:
					// 当点击的是按钮的位置时：
					if (mousex > self.btnX && mousex < self.btnX + 116 && mousey > self.btnY && mousey < self.btnY + 70) {
						self.enter(2);  // 进入场景2
					}
					break;
				case 2:
					self.enter(3);  // 进入场景3
					break;
				case 3:				
					game.bird.fly();
					break;
				case 5:
					self.enter(1);
					break;
			}
		}
	};

})();