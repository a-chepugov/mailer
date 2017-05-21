// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// import VueMaterial from 'vue-material';
// Vue.use(VueMaterial);

import Vuetify from 'vuetify';
Vue.use(Vuetify);

new Vue({
	el: '#app',
	router,
	store,
	render: h => h(App)
});

/* eslint-disable */

if (module.hot) {
	module.hot.accept();
}

/* eslint-enable */
