import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		auth: {
			username: '',
			password: ''
		},
		serverConfig: {
			hostname: 'smtp.gmail.com',
			port: '465',
			ssl: true
		},
		template: {
			subject: 'Здравствуйте {{name}}.',
			message: 'Уважаемый {{name}}, ваш email - {{email}}.'
		},
		data: [],
		status: []
	},
	getters: {},
	mutations: {
		setAuth (state, payload) {
			state.auth = payload;
		},
		setEmailServerConfig (state, payload) {
			state.serverConfig = payload;
		},
		setTemplate (state, payload) {
			state.template = payload;
		},
		setData (state, payload = []) {
			state.data.splice(0, state.data.length, ...payload);
		}
	},
	actions: {
		setAuth (context) {
			let {auth, serverConfig} = context.state;
			let data = {...auth, ...serverConfig};
			return axios.post('/auth', data);
		},
		sendEmail (context, payload) {
			return axios.post('/send', payload);
		}
	}
});
