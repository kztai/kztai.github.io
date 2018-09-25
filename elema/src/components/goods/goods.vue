<template>
	<div class="goods">
		<div class="menu-wrap"></div>
		<div class="foods-wrap"></div>
	</div>
</template>
<script type="text/javascript">
	const ERR_OK = 0;

	export default {
		props: {
			seller: {
				type: Object
			}
		},
		data() {
			return {
				goods: []
			};
		},
		created() {
			this.$http.get('/api/goods').then((data) => {
				if (data.body.errno === ERR_OK) {
					this.goods = data.body.data;
					console.log(data.body.data);
				}
			});
		}
	};
</script>
<style lang="scss">
	.goods {
		display: flex;
		position: absolute;
		top: 177px;
		bottom: 64px;
		width: 100%;
		height: 100%;
		.menu-wrap {
			flex: 0 0 80px;
			/*为了处理兼容问题*/
			width: 80px;
			background-color: #f3f5f7;
		}
		.foods-wrap {
			flex: 1;
		}
	}
</style>
