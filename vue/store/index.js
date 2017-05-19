import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

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
		auth (context, payload) {
			return axios.post('/auth', context.state.auth)
				;
		},
		send (context, payload) {
			return axios.post('/send', payload)
				;
		}
	}
});
