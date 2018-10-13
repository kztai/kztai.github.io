<template>
	<div class="goods">
		<div class="menu-wrap" ref="menuWrap">
				<ul class="menu">
					<li class="menu-item" v-for="(item,index) in goods" v-bind:key="index" :class="{'current': currentIndex === index}" ref="menuList" @click="selectMenu(index,$event)">
						<span class="text">
							<i class="icon" v-show="item.type>0" v-bind:class="classMap[item.type]"></i>{{item.name}}
						</span>
					</li>
				</ul>
		</div>
		<div class="foods-wrap" ref="foodsWrap">
				<ul>
					<li class="food-list" ref="foodList" v-for="(item,index) in goods" v-bind:key="index">
						<h1 class="title">{{item.name}}</h1>
						<ul>
							<li @click="selectFood(food,$event)" v-for="(food,index) in item.foods" class="food-item" v-bind:key="index">
								<div class="icon">
									<img width="57" height="57" v-bind:src="food.icon" alt="">
								</div>
								<div class="content">
									<h2 class="name">{{food.name}}</h2>
									<p class="description" v-show="food.description">{{food.description}}</p>
									<div class="extra">
										<span class="sellCount">月售{{food.sellCount}}份</span>
										<span class="rating">好评率{{food.rating}}%</span>
									</div>
									<div class="price">
										<span class="nowPrice">￥{{food.price}}</span>
										<del class="oldPrice" v-show="food.oldPrice">￥{{food.oldPrice}}</del>
									</div>
									<div class="cartControl-wrap">
										<cartControl :food="food" @add="_drop($event)"></cartControl>
									</div>
								</div>
							</li>
						</ul>
					</li>
				</ul>
		</div>
		<shopcart ref='shopcart' :select-foods="selectFoods" :delivery-price="seller.deliveryPrice" :min-price="seller.minPrice"></shopcart>
		<food :food="selectedFood" ref="getFood" @add="_drop($event)"></food>
	</div>
</template>
<script type="text/javascript">
	import BScroll from 'better-scroll';
	import shopcart from 'components/shopcart/shopcart.vue';
	import cartControl from 'components/cartControl/cartControl.vue';
	import food from 'components/food/food.vue';

	const ERR_OK = 0;

	export default {
		props: {
			seller: {
				type: Object
			}
		},
		data() {
			return {
				goods: [],
				listHeight: [],
				scrollY: 0,
				selectedFood: {}
			};
		},
		computed: {
			// 获得当前菜单的索引值
			currentIndex() {
				for (let i = 0; i < this.listHeight.length; i++) {
					let height1 = this.listHeight[i];
					let height2 = this.listHeight[i + 1];
					if (!height2 || (this.scrollY >= height1 && this.scrollY < height2)) {
						return i;
					}
				}
				return 0;
			},
			// 将选择的菜添加入foods数组中，便于调用
			selectFoods() {
				let foods = [];
				this.goods.forEach((good) => {
					good.foods.forEach((food) => {
						if (food.count) {
							foods.push(food);
						}
					});
				});
				return foods;
			}
		},
		methods: {
			// 点击菜单，跳转到对应的菜单列表
			selectMenu(index, event) {
				// 阻止PC端点击执行2次的行为
				if (!event._constructed) {
					return;
				}
				let foodList = this.$refs.foodList;
				this.foodsScroll.scrollToElement(foodList[index], 300);
			},
			selectFood(food, event) {
				if (!event._constructed) {
					return;
				}
				this.selectedFood = food;
				this.$refs.getFood.show();
			},
			_initScroll() {
				this.menuScroll = new BScroll(this.$refs.menuWrap, {
					// 开启点击事件
					click: true
				});
				this.foodsScroll = new BScroll(this.$refs.foodsWrap, {
					probeType: 3,
					click: true
				});
				this.foodsScroll.on('scroll', (position) => {
					if (position.y <= 0) {
						// 获得滚动的Y值
						this.scrollY = Math.abs(Math.round(position.y));
					}
				});
			},
			// 得到每一个菜单列表的高度
			_calculateHeight() {
				let foodList = this.$refs.foodList;
				let height = 0;
				this.listHeight.push(height);
				for (let i = 0; i < foodList.length; i++) {
					let item = foodList[i];
					height += item.clientHeight;
					this.listHeight.push(height);
				}
			},
			_drop(target) {
				// 体验优化，异步执行下落动画
				this.$nextTick(() => {
					this.$refs.shopcart.drop(target);
				});
			}
		},
		created() {
			this.classMap = ['decrease', 'discount', 'special', 'invoice', 'guarantee'];

			this.$http.get('/api/goods').then((data) => {
				if (data.body.errno === ERR_OK) {
					this.goods = data.body.data;

					this.$nextTick(() => {
						this._initScroll();
						this._calculateHeight();
					});
				}
			});
		},
		components: {
			shopcart,
			cartControl,
			food
		}
	};
</script>
<style lang="scss">
	@import '../../common/sass/mixin.scss';
	.goods {
		display: flex;
		/*绝对定位，脱离文档流，实现滚动时头部固定*/
		position: absolute;
		top: 177px;
		bottom: 46px;
		width: 100%;
		overflow: hidden;
		.menu-wrap {
			flex: 0 0 80px;
			/*为了处理兼容问题*/
			width: 80px;
			background-color: #f3f5f7;
			.menu {
				font-size: 12px;
				line-height: 14px;
				text-align: center;
				.menu-item {
					/*使多行文字垂直居中*/
					display: table;
					width: 56px;
					height: 54px;
					margin: 0 auto;
					position: relative;
					&::before {
						@include border1px(rgba(7,17,27,0.2),0,0,1,0);
					}
					&.current {
						padding: 0 12px;
						font-weight: 700;
						background-color: #fff;
						margin-top: -1px;
						z-index: 10;
						&::before {
							@include border1px(rgba(7,17,27,0.2),0,0,0,0);
						}
					}
					.icon {
						display: inline-block;
						width: 12px;
						height: 12px;
						margin-right: 2px;
						background-size: 12px 12px;
						background-repeat: no-repeat;
						vertical-align: top;
						&.decrease {
							@include bg-image('decrease_3');
						}
						&.discount {
							@include bg-image('discount_3');
						}
						&.guarantee {
							@include bg-image('guarantee_3');
						}
						&.invoice {
							@include bg-image('invoice_3');
						}
						&.special {
							@include bg-image('special_3');
						}
					}
					.text {
						display: table-cell;
						/*文字垂直居中*/
						vertical-align: middle;
						text-align: left;
					}
				}
			}
		}
		.foods-wrap {
			flex: 1;
			.title {
				padding-left: 14px;
				border-left: 2px solid #d0dde1;
				height: 26px;
				line-height: 26px;
				font-size: 12px;
				color: rgb(143,157,159);
				background-color: #f3f5f7;
			}
			.food-item {
				display: flex;
				padding: 18px 0;
				margin: 0 18px;
				position: relative;
				&::before {
					@include border1px(rgba(7,17,27,0.1),0,0,1,0);
				}
				&:last-child {
					&::before {
						@include border1px(rgba(7,17,27,0.1),0,0,0,0);
					}
				}
				.icon {
					flex: 0 0 57px;
					padding-right: 10px;
				}
				.content {
					flex: 1;
					.name {
						font-size: 14px;
						line-height: 14px;
						padding: 2px 0 8px 0;
					}
					.description, .extra {
						font-size: 10px;
						line-height: 12px;
						color: rgb(143,157,159);
						padding-bottom: 8px;
					}
					.extra {
						padding-bottom: 0;
						.sellCount {
							padding-right: 12px;
						}
					}
					.price {
						line-height: 24px;
						font-weight: 700;
						.nowPrice {
							font-size: 14px;
							color: red;
						}
						.oldPrice {
							vertical-align: middle;
							font-size: 10px;
							margin-left: 8px;
							color: rgb(143,157,159);
						}
					}
					.cartControl-wrap {
						position: absolute;
						right: 0;
						bottom: 12px;
					}
				}
			}
		}
	}
</style>
