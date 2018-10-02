<template>
	<div class="ratings" ref="ratings">
		<div class="ratings-content">
			<div class="overview">
				<div class="overview-left">
					<h1 class="score">{{seller.score}}</h1>
					<div class="title">综合评价</div>
					<div class="rank">高于周边商家{{seller.rankRate}}%</div>
				</div>
				<div class="overview-right">
					<div class="score-wrap">
						<span class="title">服务态度</span>
						<star :size="36" :score="seller.serviceScore"></star>
						<span class="score">{{seller.serviceScore}}</span>
					</div>
					<div class="score-wrap">
						<span class="title">商品评分</span>
						<star :size="36" :score="seller.foodScore"></star>
						<span class="score">{{seller.foodScore}}</span>
					</div>
					<div class="delivery-wrap">
						<span class="title">送达时间</span>
						<span class="delivery">{{seller.deliveryTime}}分钟</span>
					</div>
				</div>
			</div>
			<split></split>
			<ratingSelect @ratingType="ratingTypes" @toggle="contentToggle" :ratings="ratings" :selectType="selectType" :onlyContent="onlyContent"></ratingSelect>
			<div class="rating-wrapper">
				<ul>
					<li v-for="(rating,index) in ratings" :key="index" v-show="needShow(rating.rateType,rating.text)" class="rating-item">
						<div class="avatar">
							<img width="28" height="28" :src="rating.avatar">
						</div>
						<div class="content">
							<h1 class="name">{{rating.username}}</h1>
							<div class="star-wrapper">
								<star :size="24" :score="rating.score"></star>
								<span class="delivery" v-show="rating.deliveryTime">{{rating.deliveryTime}}</span>
							</div>
							<p class="text">{{rating.text}}</p>
							<div class="recommend" v-show="rating.recommend && rating.recommend.length">
								<span class="icon-thumb_up"></span>
								<span class="item" v-for="(item,index) in rating.recommend" :key="index">{{item}}</span>
							</div>
							<div class="time">
								{{rating.rateTime | getDate}}
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<shopcart></shopcart>
	</div>
</template>
<script type="text/javascript">
	import {formatDate} from 'common/js/date.js';
	import BScroll from 'better-scroll';
	import shopcart from 'components/shopcart/shopcart.vue';
	import star from 'components/star/star.vue';
	import split from 'components/split/split.vue';
	import ratingSelect from 'components/ratingSelect/ratingSelect.vue';

	const ERR_OK = 0;
	const ALL = 2;

	export default {
		props: {
			seller: {
				type: Object
			}
		},
		data() {
			return {
				ratings: [],
				selectType: ALL,
				onlyContent: true
			};
		},
		methods: {
			_initScroll() {
				this.scroll = new BScroll(this.$refs.ratings, {
					click: true
				});
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
			needShow(type, text) {
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
		created() {
			this.$http.get('api/ratings').then((data) => {
				if (data.body.errno === ERR_OK) {
					// console.log(data.body);
					this.ratings = data.body.data;
					this.$nextTick(() => {
						this._initScroll();
					});
				}
			});
		},
		filters: {
			getDate(time) {
				let date = new Date(time);
				return formatDate(date, 'yyyy-MM-dd hh:mm');
			}
		},
		components: {
			shopcart,
			star,
			ratingSelect,
			split
		}
	};
</script>
<style lang="scss" scoped>
	@import '../../common/sass/mixin.scss';
	.ratings {
		position: absolute;
		top: 177px;
		bottom: 46px;
		left: 0;
		width: 100%;
		overflow: hidden;
		.ratings-content {
			.overview {
				display: flex;
				padding: 18px 0;
				.overview-left {
					flex: 0 0 137px;
					padding: 6px 0;
					width: 137px;
					position: relative;
					text-align: center;
					&::before {
						@include border1px(rgba(7,17,27,0.1),0,1,0,0);
					}
					@media only screen and (max-width: 320px) {
						flex: 0 0 120px;
						width: 120px;
					}
					.score {
						margin-bottom: 6px;
						line-height: 28px;
						font-size: 24px;
						color: rgb(255,153,0);
					}
					.title {
						margin-bottom: 8px;
						line-height: 12px;
						font-size: 12px;
						color: rgb(7,17,27);
					}
					.rank {
						line-height: 10px;
						font-size: 10px;
						color: rgb(147,153,159);
					}
				}
				.overview-right {
					flex: 1;
					padding: 6px 0 6px 24px;
					@media only screen and (max-width: 320px) {
						padding-left: 6px;
					}
					.score-wrap {
						margin-bottom: 8px;
						font-size: 0;
						.title {
							display: inline-block;
							line-height: 18px;
							font-size: 12px;
							color: rgb(7,17,27);
							vertical-align: top;
						}
						.star {
							display: inline-block;
							margin: 0 12px;
							vertical-align: top;
						}
						.score {
							display: inline-block;
							line-height: 18px;
							vertical-align: top;
							font-size: 12px;
							color: rgb(255,153,0);
						}
					}
					.delivery-wrap {
						font-size: 0;
						.title {
							line-height: 18px;
							font-size: 12px;
							color: rgb(7,17,27);
						}
						.delivery {
							margin-left: 12px;
							font-size: 12px;
							color: rgb(147,153,159);
						}
					}
				}
			}
			.rating-wrapper {
				padding: 0 18px;
				.rating-item {
					display: flex;
					padding: 18px 0;
					position: relative;
					&::before {
						@include border1px(rgba(7,17,27,0.1),0,0,1,0);
					}
					.avatar {
						flex: 0 0 28px;
						width: 28px;
						margin-right: 12px;
						img {
							border-radius: 50%;
						}
					}
					.content {
						position: relative;
						flex: 1;
						.name {
							margin-bottom: 4px;
							line-height: 12px;
							font-size: 10px;
							color: rgb(7,17,27);
						}
						.star-wrapper {
							margin-bottom: 6px;
							font-size: 0;
							.star {
								display: inline-block;
								margin-right: 6px;
								vertical-align: top;
							}
							.delivery {
								display: inline-block;
								vertical-align: top;
							}
						}
						.text {
							margin-bottom: 8px;
							line-height: 18px;
							color: rgb(7,17,27);
							font-size: 12px;
						}
						.recommend {
							line-height: 16px;
							font-size: 0;
							.icon-thumb_up, .item {
								display: inline-block;
								margin: 0 8px 4px 0;
								font-size: 9px;
							}
							.icon-thumb_up {
								color: rgb(0,160,220);
							}
							.item {
								padding: 0 6px;
								border: 1px solid rgba(7,17,27,0.1);
								border-radius: 1px;
								color: rgb(147,153,159);
								background-color: #fff;
							}
						}
						.time {
							position: absolute;
							top: 0;
							right: 0;
							line-height: 12px;
							font-size: 10px;
							color: rgb(147,153,159);
						}
					}
				}
			}
		}
	}
</style>
