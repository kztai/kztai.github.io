<template>
	<div class="cartControl">
		<transition name="fade">
			<div class="cart-decrease" v-show="food.count>0" @click.stop.prevent="decreaseCart">
				<span class="inner icon-remove_circle_outline"></span>
			</div>
		</transition>
		<div class="cart-count" v-show="food.count>0">{{food.count}}</div>
		<div class="cart-add icon-add_circle" @click.stop.prevent="addCart"></div>
	</div>
</template>

<script>
	import Vue from 'vue';

	export default {
		props: {
			food: {
				type: Object
			}
		},
		methods: {
			addCart(event) {
				if (!event._constructed) {
					return;
				}
				if (!this.food.count) {
					// 这种直接赋值的方法，Vue检测不到
					// this.food.count = 1;

					// 需要这样来添加this.food中不存在的属性
					Vue.set(this.food, 'count', 1);
				} else {
					this.food.count++;
				}
				// 这个方法用于子向父传值
				this.$emit('add', event.target);
			},
			decreaseCart() {
				if (!event._constructed) {
					return;
				}
				if (this.food.count) {
					this.food.count--;
				}
			}
		}
	};
</script>

<style lang="scss">
	.cartControl {
		font-size: 0;
		.cart-decrease, {
			display: inline-block;
			padding: 6px;
			opacity: 1;
			transform: translate3d(0,0,0);
			.inner {
				display: inline-block;
				font-size: 24px;
				line-height: 24px;
				color: rgb(0,160,220);
				vertical-align: middle;
				/*控制旋转的时间*/
				transition: all 0.4s linear;
				transform: rotate(0);
			}
			&.fade-enter-active, &.fade-leave-active {
				/*控制移动的时间*/
				transition: all 0.4s linear;
			}
			&.fade-enter,&.fade-leave-active {
				opacity: 0;
				transform: translate3d(30px,0,0);
				.inner {
					transform: rotate(180deg);
				}
			}
		}
		.cart-add {
			display: inline-block;
			padding: 6px;
			font-size: 24px;
			line-height: 24px;
			color: rgb(0,160,220);
			vertical-align: middle;
		}
		.cart-count {
			display: inline-block;
			vertical-align: middle;
			font-size: 10px;
			line-height: 24px;
			padding: 0 6px;
			color: rgb(147,153,159);
		}
	}
</style>
