<template>
	<div id="app">
		<!-- 向header子模块传参数 -->
		<v-header v-bind:seller="seller"></v-header>
		<div class="tab">
			<router-link class="tab-item" to="/goods">商品</router-link>
			<router-link class="tab-item" to="/ratings">评论</router-link>
			<router-link class="tab-item" to="/seller">商家</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script type="text/javascript">
	import header from './components/header/header.vue';

	// 状态码：当我们实际应用中，会出现很多种情况，0表示成功
	const ERR_OK = 0;

	export default {
		data() {
			return {
				seller: {}
			};
		},
		components: {
			'v-header': header
		},
		created() {
			this.$http.get('api/seller').then((data) => {
				// console.log(data);
				if (ERR_OK === 0) {
					this.seller = data.body.data;
					console.log(this.seller);
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
