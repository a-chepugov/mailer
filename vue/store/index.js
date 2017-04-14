import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import GPodder from 'gpodder-client';

let gpodder = new GPodder();

export default new Vuex.Store({
	state: {
		clientConfig: {}
	},
	getters: {},
	mutations: {
		getClientConfig (state, payload) {
			state.clientConfig = payload;
		}
	},
	actions: {
		async getClientConfig () {
			await gpodder.getClientConfig();
		},
		async login () {
			await gpodder.login('a.chepugov', '77775648');
		}
	}
});
