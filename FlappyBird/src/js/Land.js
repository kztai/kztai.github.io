(function() {
	var Land = window.Land = function() {
		//自己的背景：
		this.image = game.R.land;

		this.x = 0;
		this.y = 0.78 * game.canvas.height ;
		this.w = 336;
		this.h = 112;
		this.speed = 2;
	};

	Land.prototype.update = function() {
		this.x -= this.speed;
		if (this.x < -this.w) {
			this.x = 0;
		}
	};

	Land.prototype.render = function() {
		// console.log(this.image);
		game.ctx.drawImage(this.image, this.x, this.y);
		game.ctx.drawImage(this.image, this.x + this.w, this.y);
		game.ctx.drawImage(this.image, this.x + this.w * 2, this.y);

		game.ctx.fillStyle = '#ded895';
		game.ctx.fillRect(0, this.y+this.h - 1, game.canvas.width, game.canvas.height-this.y-this.h + 1);
	};
})();


