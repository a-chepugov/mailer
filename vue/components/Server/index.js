import {mapActions, mapMutations} from 'vuex';

export default {
	components: {},
	data () {
		return {
			hostname: 'smtp.gmail.com',
			port: '465',
			ssl: true
		};
	},
	methods: {
		...mapMutations([
			'setEmailServerConfig'
		]),
		onHostnameChange() {
			this.setEmailServerConfig({hostname: this.hostname, port: this.port, ssl: this.ssl});
		},
		onPortChange() {
			this.setEmailServerConfig({hostname: this.hostname, port: this.port, ssl: this.ssl});
		},
		onSSLChange() {
			this.setEmailServerConfig({hostname: this.hostname, port: this.port, ssl: this.ssl});
		}
	}
}
