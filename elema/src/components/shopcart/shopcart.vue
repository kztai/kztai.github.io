<template>
	<div class="shopcart-wrap">
		<div class="shopcart">
			<div class="content" @click="toggleList">
				<div class="content-left">
					<div class="logo-wrap fl">
						<div class="count" v-show="totalCount>0">{{totalCount}}</div>
						<div class="logo" :class="{'highLight': totalCount>0}">
							<span class="icon-shopping_cart" :class="{'highLight': totalCount>0}"></span>
						</div>
					</div>
					<div class="price fl" :class="{'highLight': totalPrice>0}">￥{{totalPrice}}</div>
					<div class="delivery-price fl">另需配送费￥{{deliveryPrice}}元</div>
				</div>
				<div class="content-right" @click.stop.prevent="account">
					<div class="pay" :class="{'enough': totalPrice>=20}">{{pay}}</div>
				</div>
			</div>
			<div class="ball-container">
				<div v-for="(ball,index) in balls" :key="index">
					<transition name="drop" @before-enter="beforeDrop" @enter="dropping" @after-enter="afterDrop">
						<div class="ball" v-show="ball.show">
							<div class="inner inner-hook"></div>
						</div>
					</transition>
				</div>
			</div>
			<transition name="fold">
				<div class="cart-list" v-show="showList">
					<div class="list-header">
						<h1 class="title fl">购物车</h1>
						<span class="empty fr" @click="empty">清空</span>
					</div>
					<div class="list-content" ref="listContent">
						<ul>
							<li class="food clearfix" v-for="(food,index) in selectFoods" :key="index">
								<div class="name fl">{{food.name}}</div>
								<div class="cartControl-wrap fr">
									<cartControl @add="addFood" :food="food"></cartControl>
								</div>
								<div class="price fr">
									<span>￥{{food.price*food.count}}</span>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</transition>
		</div>
		<transition name="fade">
			<div class="list-mark" v-show="showList" @click="hideList"></div>
		</transition>
	</div>
</template>

<script>
	import BScroll from 'better-scroll';
	import cartControl from 'components/cartControl/cartControl.vue';

	export default {
		data() {
			return {
				balls: [
					{show: false},
					{show: false},
					{show: false},
					{show: false},
					{show: false}
				],
				dropBalls: [],
				showList: false
			};
		},
		props: {
			selectFoods: {
				type: Array,
				default() {
					return [];
				}
			},
			// 真正传进来的是引号内的字符，接收时要写引号内的字符
			minPrice: {
				type: Number,
				default: 0
			},
			deliveryPrice: {
				type: Number,
				default: 0
			}
		},
		methods: {
			drop(el) {
				for (let i = 0; i < this.balls.length; i++) {
					let ball = this.balls[i];
					if (!ball.show) {
						ball.show = true;
						ball.el = el;
						this.dropBalls.push(ball);
						return;
					}
				}
			},
			beforeDrop(el) {
				let count = this.balls.length;
				while (count--) {
					let ball = this.balls[count];
					if (ball.show) {
						let rect = ball.el.getBoundingClientRect();
						let x = rect.left - 32;
						let y = -(window.innerHeight - rect.top - 22);
						el.style.display = '';
						el.style.webkitTransform = `translate3d(0,${y}px,0)`;
						el.style.transform = `translate3d(0,${y}px,0)`;

						let inner = el.getElementsByClassName('inner-hook')[0];
						inner.style.webkitTransform = `translate3d(${x}px,0,0)`;
						inner.style.transform = `translate3d(${x}px,0,0)`;
					}
				}
			},
			dropping(el) {
				// 手动触发浏览器重绘
				/* eslint-disable no-unused-vars */
				let rf = el.offsetHeight;
				this.$nextTick(() => {
					el.style.webkitTransform = `translate3d(0,0,0)`;
					el.style.transform = `translate3d(0,0,0)`;
					let inner = el.getElementsByClassName('inner-hook')[0];
					inner.style.webkitTransform = `translate3d(0,0,0)`;
					inner.style.transform = `translate3d(0,0,0)`;
				});
			},
			afterDrop(el) {
				let ball = this.dropBalls.shift();
				if (ball) {
					ball.show = false;
					el.style.display = 'none';
				}
			},
			toggleList() {
				if (!this.totalCount) {
					return;
				}
				this.showList = !this.showList;
			},
			addFood(target) {
				this.drop(target);
			},
			empty() {
				this.selectFoods.forEach((food) => {
					food.count = 0;
				});
			},
			hideList() {
				this.showList = false;
			},
			account() {
				if (this.totalPrice < this.minPrice) {
					return;
				}
				window.alert(`需支付${this.totalPrice}元`);
			}
		},
		computed: {
			totalPrice() {
				let total = 0;
				// [].forEach((item, index) => {})
				this.selectFoods.forEach((food) => {
					total += food.price * food.count;
				});
				return total;
			},
			totalCount() {
				let count = 0;
				this.selectFoods.forEach((food) => {
					count += food.count;
				});
				return count;
			},
			pay() {
				if (this.totalPrice === 0) {
					return `￥${this.minPrice}元起送`;
				} else if (this.totalPrice < this.minPrice) {
					let diff = this.minPrice - this.totalPrice;
					return `还差￥${diff}元起送`;
				} else {
					return '去结算';
				}
			}
			// 这个方法能正常运行，但是系统会报错，因为计算属性是只读的，不允许手动修改变量；用watch属性就不会
			// listShow() {
			// 	if (!this.totalCount) {
			// 		this.showList = false;
			// 		return false;
			// 	}
			// 	let show = this.showList;
			// 	if (show) {
			// 		this.$nextTick(() => {
			// 			// 判断this.scroll是否存在，存在的话就调用refresh方法·
			// 			if (!this.scroll) {
			// 				this.scroll = new BScroll(this.$refs.listContent, {
			// 					click: true
			// 				});
			// 			} else {
			// 				this.scroll.refresh();
			// 			}
			// 		});
			// 	}
			// 	return show;
			// }
		},
		watch: {
			totalCount() {
				if (!this.totalCount) {
					this.showList = false;
					return false;
				}
			},
			showList() {
				let show = this.showList;
				if (show) {
					this.$nextTick(() => {
						// 判断this.scroll是否存在，存在的话就调用refresh方法·
						if (!this.scroll) {
							this.scroll = new BScroll(this.$refs.listContent, {
								click: true
							});
						} else {
							this.scroll.refresh();
						}
					});
				}
				return show;
			}
		},
		components: {
			cartControl
		}
	};
</script>

<style lang="scss">
	@import '../../common/sass/mixin.scss';

	.shopcart {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 46px;
		z-index: 50;
		.content {
			display: flex;
			color: rgba(255,255,255,0.4);
			background-color: #141d27;
			.content-left {
				flex: 1;
				.logo-wrap {
					position: relative;
					top: -12px;
					left: 0px;
					margin: 0 18px;
					width: 58px;
					height: 58px;
					background-color: #141d27;
					border-radius: 50%;
					.count {
						position: absolute;
						top: 0;
						right: 0;
						width: 24px;
						height:16px;
						line-height: 16px;
						font-weight: 700;
						font-size: 9px;
						text-align: center;
						border-radius: 8px;
						color: #fff;
						background-color: rgb(240,20,20);
						z-index: 10;
						box-shadow: 0 4px 8px 0 rgba(0,0,0,0.4);
					}
					.logo {
						overflow: hidden;
						width: 46px;
						height: 46px;
						position: absolute;
						top: 50%;
						left: 50%;
						margin: -23px 0 0 -23px;
						text-align: center;
						background-color: rgba(255,255,255,0.2);
						border-radius: 50%;
						&.highLight {
							background-color: rgb(0,160,220);
						}
						.icon-shopping_cart {
							font-size: 24px;
							line-height: 46px;
							&.highLight {
								color: #fff;
							}
						}
					}
				}
				.price {
					font-size: 16px;
					line-height: 22px;
					font-weight: 700;
					margin: 12px 0;
					border-right: 1px solid rgba(255,255,255,0.1);
					padding-right: 12px;
					&.highLight {
						color: #fff;
					}
				}
				.delivery-price {
					margin: 12px 0 12px 12px;
					font-size: 12px;
					line-height: 22px;
				}
			}
			.content-right {
				flex: 0 0 105px;
				width: 105px;
				.pay {
					font-size: 10px;
					line-height: 46px;
					text-align: center;
					font-weight: 700;
					/* &.not-enough {
						background-color: rgba(255,255,255,0.2);
					}*/
					background-color: rgba(255,255,255,0.2);
					&.enough {
						background-color: #00b43c;
						color: #fff;
					}
				}
			}
		}
		.ball-container {
			.ball {
				position: fixed;
				left: 32px;
				bottom: 32px;
				z-index: 200;
				transition: all 0.4s cubic-bezier(0.49, -0.29, 0.75, 0.41);
				.inner {
					width: 16px;
					height: 16px;
					border-radius: 50%;
					background-color: rgb(0,160,240);
					transition: all 0.4s linear;
				}
			}
		}
		.cart-list {
			position: absolute;
			top: 0;
			left: 0;
			z-index: -1;
			width: 100%;
			transform: translate3d(0,-100%,0);
			&.fold-enter-active,&.fold-leave-active {
				transition: all 0.4s;
			}
			&.fold-enter,&.fold-leave-to {
				transform: translate3d(0,0,0);
			}
			.list-header {
				height: 40px;
				background-color: #f3f5f7;
				border-bottom: 1px solid rgba(7,17,27,0.1);
				.title {
					font-size: 14px;
					line-height: 40px;
					color: rgb(7,17,27);
					padding-left: 18px;
				}
				.empty {
					font-size: 12px;
					line-height: 40px;
					color: rgb(0,160,220);
					padding-right: 18px;
				}
			}
			.list-content {
				padding: 0 18px;
				max-height: 217px;
				overflow: hidden;
				background-color: #fff;
				.food {
					height: 48px;
					padding: 12px 0;
					line-height: 24px;
					position: relative;
					box-sizing: border-box;
					vertical-align: middle;
					&::before {
						@include border1px(rgba(7,17,27,0.1),0,0,1,0);
					}
					.name {
						font-size: 14px;
						color: rgb(7,17,27);
					}
					.price {
						color: red;
						font-size: 14px;
						font-weight: 700;
						margin-right: 6px;
					}
					.cartControl-wrap {
						position: relative;
						right: 0;
						bottom: 6px;
					}
				}
			}
		}
	}
	.list-mark {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		z-index: 40;
		background-color: rgba(7,17,27,0.6);
		opacity: 1;
		backdrop-filter: blur(10px);
		&.fade-enter-active,&.fade-leave-active {
			transition: all 0.4s;
		}
		&.fade-enter,&.fade-leave-to {
			background-color: rgba(7,17,27,0);
			opacity: 0;
		}
	}
</style>
