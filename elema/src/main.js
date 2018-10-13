import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import App from './App';

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
	linkActiveClass: 'active'
});

Vue.config.productionTip = false;

// 跳过eslint校验
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
