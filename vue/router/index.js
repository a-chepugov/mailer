import Vue from 'vue';
import Router from 'vue-router';
import Hello from '../components/Hello/vue.vue';
import Login from '../components/Login/vue.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Login',
			component: Login
		}, {
			path: '/hello',
			name: 'Hello',
			component: Hello
		}
	]
});
