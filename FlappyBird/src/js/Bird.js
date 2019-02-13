(function() {

	var Bird = window.Bird = function() {
		// 颜色有0,1,2三种
		this.color = parseInt(Math.random() * 3);
		this.image = [
			game.R['bird' + this.color + '_0'],
			game.R['bird' + this.color + '_1'],
			game.R['bird' + this.color + '_2']
		];
		this.wing = 0;
		this.x = game.canvas.width * (1 - 0.618) - 24;
		this.y = 100;
		this.speed = 1;
		this.isClick = false;  // 刚开始处于未点击状态
		this.d = 0;
	};

	Bird.prototype.update = function() {
		this.speed ++;

		// 当小鸟旋转90°后，不再旋转
		if (this.d < 1.58) {
			this.d += 0.04;
		}
		
		// 点击与未点击画布，小鸟运动轨迹设置：
		if (!this.isClick) {
			this.y += 0.4 * this.speed;
		} else {
			this.y -= 0.4 * (20 - this.speed);
			if (this.speed > 20) {
				this.isClick = false;
				this.speed = 0;
			}
		}

		this.wingStep();

		//计算自己的四个碰撞检测值，此时坐标系是以鸟的中心为原点：
		this.T = this.y - 12;
		this.R = this.x + 17;
		this.B = this.y + 12;
		this.L = this.x - 17;

		//设置小鸟飞不出顶点：
		if (this.y < 0) {
			this.y = 0;
		}

		// 落地，游戏结束：
		if (this.B > game.canvas.height * 0.78) {
			//死亡进入场景4：
			game.sm.enter(4);
		}
	};

	Bird.prototype.render = function() {
		// 小鸟旋转设置，将坐标系拉到小鸟的中心点：
		game.ctx.save();
		game.ctx.translate(this.x, this.y);
		game.ctx.rotate(this.d);
		game.ctx.drawImage(this.image[this.wing], -24,-24);
		game.ctx.restore();
	};

	Bird.prototype.fly = function() {
		this.isClick = true;
		//当一点击，变为0，可以方便小鸟爬升：
		this.speed = 0;
		//鸟头瞬间朝上：
		this.d = -0.6;
	};

	Bird.prototype.wingStep = function() {
		// 切换小鸟图片，达到扇翅膀动画：
		game.fno % 10 === 0 && this.wing ++;
		if (this.wing > 2) {
			this.wing = 0;
		}

	};

})();