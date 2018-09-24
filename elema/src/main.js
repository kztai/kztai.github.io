// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';
// 在webpack.base.conf.js定义了绝对路径，可以直接写component
import goods from 'components/goods/goods.vue';
import ratings from 'components/ratings/ratings.vue';
import seller from 'components/seller/seller.vue';

import './common/sass/index.scss';

Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
	{path: '/goods', component: goods},
	{path: '/ratings', component: ratings},
	{path: '/seller', component: seller},
	{path: '*', redirect: '/goods'}
];

const router = new VueRouter({
	routes,
	mode: 'history',
	linkActiveClass: 'active'
});

Vue.config.productionTip = false;

// 下面一行注释用于跳过eslint校验，因为eslint规定new的对象都要赋值给一个变量
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
