import Vue from 'vue';
import Router from 'vue-router';
import Help from '../components/Help/index.vue';
import Main from '../components/Main/index.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	routes: [
		{
			path: '/',
			name: 'Main',
			component: Main
		}, {
			path: '/help',
			name: 'Help',
			component: Help
		}
	]
});
