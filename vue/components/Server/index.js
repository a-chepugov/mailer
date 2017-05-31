import {mapActions, mapMutations} from 'vuex';

export default {
	components: {},
	data () {
		return {
			hostname: this.$store.state.serverConfig.hostname,
			port: this.$store.state.serverConfig.port,
			ssl: this.$store.state.serverConfig.ssl,
		};
	},
	methods: {
		...mapMutations([
			'setEmailServerConfig'
		]),
		onServerSetingsChange() {
			let {hostname, port, ssl} = this;
			this.setEmailServerConfig({hostname, port, ssl});
		}
	},
	created () {
		this.onServerSetingsChange();
	}
}
