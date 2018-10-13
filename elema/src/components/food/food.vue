<template>
	<transition name="slide">
		<div class="food" v-show="showFlag" ref="food">
			<div class="food-content">
				<div class="image-header">
					<img :src="food.image">
					<div class="back" @click="showFlag=false">
						<i class="icon-arrow_lift"></i>
					</div>
				</div>
				<div class="content">
					<h1 class="name">{{food.name}}</h1>
					<span class="sellCount">月销{{food.sellCount}}份</span>
					<span class="rating">好评率{{food.rating}}%</span>
					<div class="price">
						<span class="nowPrice">￥{{food.price}}</span>
						<del class="oldPrice" v-show="food.oldPrice">￥{{food.oldPrice}}</del>
					</div>
					<div class="cartControl-wrap">
						<cartControl :food="food" @add="addFood"></cartControl>
					</div>
					<div class="buy" @click.stop.prevent="addFirst" v-show="!food.count || food.count===0">加入购物车</div>
				</div>
				<split v-show="food.info"></split>
				<div class="info" v-show="food.info">
					<h1 class="title">商品介绍</h1>
					<div class="content">{{food.info}}</div>
				</div>
				<split></split>
				<div class="ratings">
					<h1 class="title">商品评价</h1>
					<ratingSelect @ratingType="ratingTypes" @toggle="contentToggle" :ratings="food.ratings" :desc="desc" :selectType="selectType" :onlyContent="onlyContent"></ratingSelect>
					<div class="rating-wrap">
						<ul v-show="food.ratings && food.ratings.length">
							<li v-for="(rating,index) in food.ratings" v-show="needShow(rating.text,rating.rateType)" class="rating-item" :key="index">
								<div class="rating-header clearfix">
									<div class="user fr ">
										<span class="name">{{rating.username}}</span>
										<img :src="rating.avatar" class="avatar" width="12" height="12">
									</div>
									<div class="time fl">{{rating.rateTime | getDate}}</div>
								</div>
								<p class="text">
									<i class="icon" :class="{'icon-thumb_down':rating.rateType===1,'icon-thumb_up':rating.rateType===0}"></i>
									{{rating.text}}
								</p>
							</li>
						</ul>
						<div class="no-rating" v-show="!food.ratings || !food.ratings.length">暂无评价</div>
					</div>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
	import BScroll from 'better-scroll';
	import Vue from 'vue';
	import {formatDate} from 'common/js/date.js';
	import cartControl from 'components/cartControl/cartControl.vue';
	import split from 'components/split/split.vue';
	import ratingSelect from 'components/ratingSelect/ratingSelect.vue';

	const ALL = 2;

	export default {
		props: {
			food: {
				type: Object
			}
		},
		data() {
			return {
				showFlag: false,
				selectType: ALL,
				onlyContent: true,
				desc: {
					all: '全部',
					positive: '推荐',
					negative: '吐槽'
				}
			};
		},
		methods: {
			show() {
				this.showFlag = true;
				// 将下面两个变量始终初始化：
				this.selectType = ALL;
				this.onlyContent = false;
				this.$nextTick(() => {
					if (!this.scroll) {
						this.scroll = new BScroll(this.$refs.food, {
							click: true
						});
					} else {
						this.scroll.refresh();
					}
				});
			},
			// 点击加入购物车时，添加数量
			addFirst(event) {
				if (!event._constructed) {
					return;
				}
				this.$emit('add', event.target);
				Vue.set(this.food, 'count', 1);
			},
			addFood(target) {
				this.$emit('add', target);
			},
			ratingTypes(type) {
				this.selectType = type;
				this.$nextTick(() => {
					this.scroll.refresh();
				});
			},
			contentToggle() {
				this.onlyContent = !this.onlyContent;
				this.$nextTick(() => {
					this.scroll.refresh();
				});
			},
			// 选择显示的评论内容，以及是否只显示内容
			needShow(text, type) {
				if (this.onlyContent && !text) {
					return false;
				}
				if (this.selectType === ALL) {
					return true;
				} else {
					return this.selectType === type;
				}
			}
		},
		// 得到格式化的时间
		filters: {
			getDate(time) {
				let date = new Date(time);
				return formatDate(date, 'yyyy-MM-dd hh:mm');
			}
		},
		components: {
			cartControl,
			split,
			ratingSelect
		}
	};
</script>

<style lang="scss" scoped>
	@import '../../common/sass/mixin.scss';

	.food {
		position: fixed;
		left: 0;
		top: 0;
		bottom: 46px;
		width: 100%;
		z-index: 30;
		opacity: 1;
		background-color: #fff;
		transform: translate3d(0,0,0);
		&.slide-enter-active,&.slide-leave-active {
			transition: all 0.4s;
		}
		&.slide-enter,&.slide-leave-to {
			transform: translate3d(100%,0,0);
			opacity: 0;
		}
		.food-content {
			.image-header {
				position: relative;
				width: 100%;
				height: 0;
				/*这样设置使得容器宽度和高度相等，也不会影响其他布局*/
				padding-top: 100%;
				img {
					position: absolute;
					top: 0;
					left: 0;
					width: 100%;
					height: 100%;
				}
				.back {
					position: absolute;
					top: 10px;
					left: 0;
					.icon-arrow_lift {
						display: block;
						padding: 10px;
						font-size: 20px;
						color: #fff;

					}
				}
			}
			.content {
				width: 100%;
				padding: 18px;
				font-size: 0;
				position: relative;
				box-sizing: border-box;
				.name {
					font-size: 14px;
					line-height: 14px;
					color: rgb(7,17,27);
					font-weight: 700;
					padding-bottom: 8px;
				}
				.sellCount, .rating {
					font-size: 10px;
					color: rgb(147,153,159);
					line-height: 10px;
				}
				.sellCount {
					padding-right: 12px;
				}
				.price {
					padding-top: 18px;
					line-height: 24px;
					font-weight: 700;
					.nowPrice {
						font-size: 14px;
						padding-right: 12px;
						color: red;
					}
					.oldPrice {
						font-size: 10px;
						color: rgb(147,153,159);

					}
				}
				.cartControl-wrap {
					position: absolute;
					bottom: 16px;
					right: 12px;
				}
				.buy {
					position: absolute;
					bottom: 22px;
					right: 18px;
					z-index: 10;
					line-height: 24px;
					padding: 0 12px;
					font-size: 10px;
					box-sizing: border-box;
					border-radius: 12px;
					color: #fff;
					background-color: rgb(0,160,220);
				}
			}
			.info {
				padding: 18px;
				.title {
					font-size: 14px;
					line-height: 14px;
					color: rgb(7,17,27);
					margin-bottom: 6px;
				}
				.content {
					padding: 0 8px;
					font-size: 12px;
					line-height: 24px;
					color: rgb(77,85,93);
				}
			}
			.ratings {
				padding-top: 18px;
				.title {
					font-size: 14px;
					line-height: 14px;
					color: rgb(7,17,27);
					margin-left: 18px;
				}
				.rating-wrap {
					padding: 0 18px;
					color: rgb(147,153,159);
					.rating-item {
						padding: 16px 0;
						font-size: 0;
						position: relative;
						&::before {
							@include border1px(rgba(7,17,27,0.1),0,0,1,0);
						}
						.rating-header {
							margin-bottom: 6px;
							font-size: 10px;
							line-height: 12px;
							vertical-align: middle;
							.user {
								.name {
									margin-right: 6px;
								}
								.avatar {
									border-radius: 6px;
								}
							}
						}
						.text {
							color: rgb(7,17,27);
							font-size: 12px;
							line-height: 16px;
							.icon {
								line-height: 16px;
								margin-right: 4px;
								&.icon-thumb_up {
									color: rgb(0,160,220);
								}
								&.icon-thumb_down {
									color: rgb(147,153,159);
								}
							}
						}
					}
					.no-rating {
						padding: 16px 0;
						font-size: 12px;
						color: rgb(147,153,159);
					}
				}
			}
		}
	}
</style>
