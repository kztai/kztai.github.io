<template>
	<div class="ratingSelect">
		<div class="rating-type">
			<div v-on:click="select(2,$event)" class="block all" :class="{'active':selectType===2}">
				{{desc.all}}<span class="count">{{ratings.length}}</span>
			</div>
			<div v-on:click="select(0,$event)" class="block positive" :class="{'active':selectType===0}">
				{{desc.positive}}<span class="count">{{positives.length}}</span>
			</div>
			<div v-on:click="select(1,$event)" class="block negative" :class="{'active':selectType===1}">
				{{desc.negative}}<span class="count">{{negatives.length}}</span>
			</div>
		</div>
		<div class="switch" :class="{'on':onlyContent}" @click="toggleContent">
			<i class="icon-check_circle"></i>
			<span class="text">只看有内容的评价</span>
		</div>
	</div>
</template>

<script>
	const POSITIVE = 0;
	const NEGATIVE = 1;
	const ALL = 2;

	export default {
		props: {
			ratings: {
				type: Array,
				default() {
					return [];
				}
			},
			selectType: {
				type: Number,
				default: ALL
			},
			onlyContent: {
				type: Boolean,
				default: false
			},
			desc: {
				type: Object,
				default() {
					return {
						all: '全部',
						positive: '满意',
						negative: '不满意'
					};
				}
			}
		},
		methods: {
			select(type, event) {
				if (!event._constructed) {
					return;
				}
				// 通过父级选择评论的内容
				this.$emit('ratingType', type);
			},
			toggleContent(event) {
				if (!event._constructed) {
					return;
				}
				this.$emit('toggle');
			}
		},
		computed: {
			// 筛选出对应的评论内容
			positives() {
				return this.ratings.filter((rating) => {
					return rating.rateType === POSITIVE;
				});
			},
			negatives() {
				return this.ratings.filter((rating) => {
					return rating.rateType === NEGATIVE;
				});
			}
		}
	};
</script>

<style lang="scss">
	@import '../../common/sass/mixin.scss';

	.ratingSelect {
		.rating-type {
			padding: 18px 0;
			margin: 0 18px;
			font-size: 0;
			position: relative;
			&::before {
				@include border1px(rgba(7,17,27,0.1),0,0,1,0);
				z-index: -1;
			}
			.block {
				display: inline-block;
				padding: 8px 12px;
				font-size: 12px;
				line-height: 16px;
				border-radius: 2px;
				color: rgb(77,85,93);
				&.active {
					color: #fff;
					.count {
						color: #fff;
					}
				}
				.count {
					font-size: 8px;
					padding: 0 2px;
				}
			}
			.all, .positive {
				background-color: rgba(0,160,220,0.2);
				&.active {
					background-color: rgb(0,160,220);
				}
			}
			.positive {
				margin: 0 8px;
			}
			.negative {
				background-color: rgba(77,85,93,0.2);
				&.active {
					background-color: rgb(77,85,93);
				}
			}
			.kkkk {
				font-size: 30px;
			}
		}
		.switch {
			padding: 12px 18px;
			font-size: 0;
			color: rgb(147,153,159);
			border-bottom: 1px solid rgba(7,17,27,0.1);
			&.on {
				.icon-check_circle {
					color: #00c850;
				}
			}
			.icon-check_circle {
				font-size: 24px;
				margin-right: 4px;
			}
			.text {
				vertical-align: top;
				font-size: 12px;
				line-height: 24px;
			}
		}
	}
</style>
