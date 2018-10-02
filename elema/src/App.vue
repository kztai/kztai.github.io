<template>
	<div id="app">
		<!-- 向header子模块传参数 -->
		<!-- 真正传出去的是引号内的字符，接收时要写引号内的字符；等号左边的参数要与引号内的一致，横线改驼峰 -->
		<v-header v-bind:seller="seller"></v-header>
		<div class="tab">
			<router-link class="tab-item" to="/goods">商品</router-link>
			<router-link class="tab-item" to="/ratings">评论</router-link>
			<router-link class="tab-item" to="/seller">商家</router-link>
		</div>
		<!-- 保持数据缓存，页面切换时不会再重复请求 -->
		<keep-alive>
			<!-- 真正传出去的是引号内的字符，接收时要写引号内的字符；等号左边的参数要与引号内的一致，横线改驼峰 -->
			<router-view :seller="seller"></router-view>
		</keep-alive>
	</div>
</template>

<script type="text/javascript">
	import {urlParse} from 'common/js/util.js';
	import header from 'components/header/header.vue';

	// 状态码：当我们实际应用中，会出现很多种情况，0表示成功
	const ERR_OK = 0;

	export default {
		data() {
			return {
				seller: {
					id: (() => {
						let queryParam = urlParse();
						// console.log(queryParam);
						return queryParam.id;
					})()
				}
			};
		},
		components: {
			'v-header': header
		},
		created() {
			// 通过api/seller可以拿到data.json中的seller数据
			this.$http.get('api/seller?id=' + this.seller.id).then((data) => {
				// console.log(data);
				if (ERR_OK === data.body.errno) {
					this.seller = Object.assign({}, this.seller, data.body.data);
					// console.log(this.seller.id);
				}
			});
		}
	};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
	@import './common/sass/mixin.scss';
	#app {
		.tab {
			display: flex;
			width: 100%;
			height: 40px;
			line-height: 40px;
			position: relative;
			&::before {
				@include border1px(rgba(7,17,27,0.1));
			}
			.tab-item {
				flex: 1;
				font-size: 14px;
				color: rgb(77,85,93);
				text-align: center;
				z-index: 10;
				&.active {
					color: rgb(240,20,20);
				}
			}
		}
	}
</style>
