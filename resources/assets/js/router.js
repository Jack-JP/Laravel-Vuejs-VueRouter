import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from './components/HomeComponent.vue';

Vue.use(VueRouter);

const router = new VueRouter({
	routes: [
    {
			path: '/',
			component: Home,
		},
    {
			path: '/about',
			component: require('./components/AboutComponent.vue'),
		}
	]
});
export default router
