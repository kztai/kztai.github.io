<template>
	<div id="app">
		<v-header></v-header>
		<div class="tab">
			<div class="tab-item">商品</div>
			<div class="tab-item">评论</div>
			<div class="tab-item">商家</div>
		</div>
		<div class="content">
			i am content
		</div>
	</div>
</template>

<script type="text/javascript">
	import header from './components/header/header.vue';
	export default {
		components: {
			'v-header': header
		}
	};
</script>

<style lang="scss" rel="stylesheet/scss" scoped>
	#app {
		.tab {
			display: flex;
			width: 100%;
			height: 40px;
			line-height: 40px;
			.tab-item {
				text-align: center;
				flex: 1;
			}
		}
	}
</style>
