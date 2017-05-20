import Vue from 'vue';
import Vuex from 'vuex';

import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		auth: {},
		emailServerConfig: {},
		data: []
	},
	getters: {},
	mutations: {
		setAuth (state, payload) {
			state.auth = payload;
		},
		setEmailServerConfig (state, payload) {
			state.emailServerConfig = payload;
		},
		setData (state, payload) {
			state.data.splice(0, state.data.length, ...payload);
		}
	},
	actions: {
		setAuth (context) {
			return axios.post('/auth', context.state.auth)
				;
		},
		setEmailServerConfig (context) {
			return axios.post('/server', context.state.emailServerConfig)
				;
		},
		sendEmail (context, payload) {
			return axios.post('/send', payload)
				;
		}
	}
});
