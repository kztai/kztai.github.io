(function() {
	var Pipe = window.Pipe = function() {
		//自己的背景：
		this.imageup = game.R.pipe_up;
		this.imagedown = game.R.pipe_down;

		// 两管之间空隙大小：
		this.interSpace = 130;
		// 上管子长度：
		this.upHeight = parseInt((Math.random() * 200)) + 100;
		// 下管子长度：
		this.downHeight = game.canvas.height * 0.78 - this.upHeight - this.interSpace;
		// 初始管子的位置：
		this.X = game.canvas.width;
		// 是否通过管子：
		this.alreadyPass = false;

		game.pipeArr.push(this);

	};

	Pipe.prototype.update = function() {
		this.X -= 2;

		//进行碰撞检测：
		if (game.bird.R > this.X && game.bird.L < this.X + 52) {
			if (game.bird.T < this.downHeight || game.bird.B > (this.downHeight + this.interSpace)) {
				//死亡进入场景4：
				game.sm.enter(4);
			}
		}

		// 当通过一个管子加一分：
		if (game.bird.R > this.X + 52 && !this.alreadyPass) {
			game.score ++;
			this.alreadyPass = true;
		}

		// 检测管子是否出了视口，是的话删除：
		if (this.X < -52) {
			for (var i = 0; i < game.pipeArr.length; i++) {
				if (game.pipeArr[i] === this) {
					game.pipeArr.splice(i, 1);
				}
			}
		}
	};

	Pipe.prototype.render = function() {
		game.ctx.drawImage(this.imageup, 0, 0, 52, this.upHeight, this.X, this.interSpace + this.downHeight, 52, this.upHeight);
		game.ctx.drawImage(this.imagedown, 0, 320-this.downHeight, 52, this.downHeight, this.X, 0, 52, this.downHeight);


	};
})();


