<template>
	<div class="header">
		<div class="content-wrap clearfix">
			<div class="avatar fl">
				<img v-bind:src="seller.avatar" width='64' height="64">
			</div>
			<div class="content fl">
				<div class="title">
					<span class="brand"></span>
					<span class="name">{{seller.name}}</span>
				</div>
				<div class="description">{{seller.description}}/{{seller.deliveryTime}}分钟送达</div>
				<!-- 加v-if的原因：获取seller数据是异步的，也就是说刚从父模块拿到的seller是空对象 -->
				<div class="support" v-if="seller.supports">
					<span class="icon" v-bind:class="classMap[seller.supports[0].type]"></span>
					<!-- 不加v-if时，对seller.supports取0会报错 -->
					<span class="txt">{{seller.supports[0].description}}</span>
				</div>
			</div>
			<div class="support-count" v-on:click="showDetail">
				<span v-if="seller.supports" class="count">{{seller.supports.length}}个</span>
				<i class="icon-keyboard_arrow_right"></i>
			</div>
		</div>
		<div class="bulletin-wrap" v-on:click="showDetail">
			<span class="img"></span>
			<span class="content">{{seller.bulletin}}</span>
			<i class="icon-keyboard_arrow_right"></i>
		</div>
		<div class="background">
			<img :src="seller.avatar" width="100%" height="100%">
		</div>
		<transition name="fade">
			<!-- 经典的sticky footer 布局 -->
			<div v-show="detailShow" class="detail">
			<!-- 这个层的作用是使遮罩能够铺满整个屏幕 -->
			<div class="detail-wrap clearfix">
				<div class="detail-main">
					<h1 class="name">{{seller.name}}</h1>
					<div class="star-wrap">
						<star v-bind:size="48" v-bind:score="seller.score"></star>
					</div>
					<div class="title">
						<div class="line"></div>
						<div class="text">优惠信息</div>
						<div class="line"></div>
					</div>
					<ul class="supports" v-if="seller.supports">
						<li class="supports-item" v-for="(item,index) in seller.supports" v-bind:key="index">
							<span class="icon" v-bind:class="classMap[seller.supports[index].type]"></span>
							<span class="text">{{seller.supports[index].description}}</span>
						</li>
					</ul>
					<div class="title">
						<div class="line"></div>
						<div class="text">商家公告</div>
						<div class="line"></div>
					</div>
					<p class="bulletin-text">{{seller.bulletin}}</p>
				</div>
			</div>
			<div class="detail-close">
				<i class="icon-close" v-on:click="closeDetail"></i>
			</div>
			</div>
		</transition>
	</div>
</template>

<script type="text/javascript">
	import star from '../star/star.vue';

	export default {
		// 接收父级传来的参数
		props: {
			seller: {
				type: Object
			}
		},
		data() {
			return {
				detailShow: false
			};
		},
		methods: {
			showDetail() {
				this.detailShow = true;
			},
			closeDetail() {
				this.detailShow = false;
			}
		},
		created() {
			this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];
		},
		components: {
			star
		}
	};
</script>

<style lang="scss" scoped>
	@import '../../common/sass/mixin.scss';

	.header {
		position: relative;
		color: #fff;
		background-color: rgba(7,17,27,0.5);
		overflow: hidden;
		.content-wrap {
			position: relative;
			padding: 24px 12px 18px 24px;
			.avatar {
				border-radius: 2px;
				overflow: hidden;
			}
			.content {
				margin-left: 16px;
				.title {
					margin: 2px 0 8px 0;
					.name {
						font-size: 16px;
						line-height: 18px;
						font-weight: bold;
						margin-left: 6px;
					}
					.brand {
						display: inline-block;
						width: 30px;
						height: 18px;
						@include bg-image('brand');
						background-size: 30px 18px;
						background-repeat: no-repeat;
						vertical-align: top;
					}
				}
				.description {
					font-size: 14px;
					line-height: 12px;
					margin-bottom: 10px;
				}
				.support {
					font-size: 10px;
					line-height: 12px;
					.icon {
						display: inline-block;
						width: 12px;
						height: 12px;
						margin-right: 4px;
						background-size: 12px 12px;
						background-repeat: no-repeat;
						vertical-align: top;
						&.decrease {
							@include bg-image('decrease_1');
						}
						&.discount {
							@include bg-image('discount_1');
						}
						&.guarantee {
							@include bg-image('guarantee_1');
						}
						&.invoice {
							@include bg-image('invoice_1');
						}
						&.special {
							@include bg-image('special_1');
						}
					}
				}
			}
			.support-count {
				position: absolute;
				right: 12px;
				bottom: 16px;
				padding: 7px 8px;
				font-size: 10px;
				line-height: 12px;
				background-color: rgba(0,0,0,0.2);
				border-radius: 12px;
			}
		}
		.bulletin-wrap {
			display: flex;
			padding: 0 12px;
			font-size: 10px;
			line-height: 28px;
			background-color: rgba(7,17,27,0.2);
			.img {
				display: inline-block;
				flex: 0 0 22px;
				height: 12px;
				margin: auto 0;
				@include bg-image('bulletin');
				background-size: 22px 12px;
				background-repeat: no-repeat;
			}
			.content {
				flex: 1;
				overflow: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				margin: 0 4px;
			}
			i {
				flex: 0 0 auto;
				line-height: 28px;
			}
		}
		.background {
			position: absolute;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: -1;
			/*设置图片模糊度*/
			filter: blur(10px);
		}
		.detail {
			position: fixed;
			top: 0;
			left: 0;
			width: 100%;
			height: 100%;
			z-index: 100;
			/*为了让遮罩层能够滑动*/
			overflow: auto;
			backdrop-filter: blur(10px);
			opacity: 1;
			background-color: rgba(7,17,27,0.8);
			&.fade-enter-active,&.fade-leave-active {
				transition: all 0.5s;
			}
			&.fade-enter,&.fade-leave-active {
				opacity: 0;
				background-color: rgba(7,17,27,0);
			}
			.detail-wrap {
				min-height: 100%;
				.detail-main {
					margin-top: 64px;
					padding: 0 36px;
					/*为了让关闭按钮不被内容覆盖*/
					padding-bottom: 64px;

					text-align: center;
					.name {
						font-size: 16px;
						line-height: 16px;
						font-weight: 700;
					}
					.star-wrap {
						padding-top: 16px;
					}
					.title {
						display: flex;
						padding: 28px 0 24px 0;
						.line {
							flex: 1;
							border-bottom: 1px solid rgba(255,255,255,0.2);
							margin: auto 0;
						}
						.text {
							flex: 1;
							padding: 0 12px;
							font-size: 14px;
							font-weight: 700;
						}
					}
					.supports {
						text-align: left;
						padding-left: 12px;
						.supports-item {
							padding-bottom: 12px;
							&:last-child {
								padding-bottom: 0;
							}
							.text {
								font-size: 12px;
								line-height: 16px;
							}
							.icon {
								display: inline-block;
								width: 16px;
								height: 16px;
								background-repeat: no-repeat;
								background-size: 16px 16px;
								margin-right: 6px;
								vertical-align: top;
								&.decrease {
									@include bg-image('decrease_2');
								}
								&.discount {
									@include bg-image('discount_2');
								}
								&.guarantee {
									@include bg-image('guarantee_2');
								}
								&.invoice {
									@include bg-image('invoice_2');
								}
								&.special {
									@include bg-image('special_2');
								}
							}
						}
					}
					.bulletin-text {
						line-height: 24px;
						font-size: 12px;
						text-align: left;
						padding: 0 12px;
					}
				}
			}
			.detail-close {
				position: relative;
				width: 32px;
				height: 32px;
				/*这个层在detail-wrap下面，所以要上margin*/
				margin: -64px auto 0 auto;
				/*清除浮动，一个套路*/
				clear: both;
				font-size: 32px;
			}
		}
	}
</style>
