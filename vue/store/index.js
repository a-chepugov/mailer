import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

import GPodder from 'gpodder-client';

let gpodder = new GPodder();

export default new Vuex.Store({
	state: {
		auth: {},
		data: []
	},
	getters: {},
	mutations: {
		setAuth (state, payload) {
			state.auth = payload;
		},
		setData (state, payload) {
			state.data.splice(0, state.data.length, ...payload);
		}
	},
	actions: {
		async login () {
			await gpodder.login('a.chepugov', '77775648');
		}
	}
});
