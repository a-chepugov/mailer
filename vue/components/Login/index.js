import {mapActions, mapMutations} from 'vuex';

export default {
	components: {},
	data () {
		return {
			username: '',
			password: '',
			hostname: 'smtp.gmail.com',
		}
	},
	methods: {
		...mapMutations([
			'setAuth',
		]),
		onUsernameChange() {
			this.setAuth({username: this.username, password: this.password, hostname: this.hostname})
		},
		onPasswordChange() {
			this.setAuth({username: this.username, password: this.password, hostname: this.hostname})
		},
		onHostnameChange() {
			this.setAuth({username: this.username, password: this.password, hostname: this.hostname})
		}
	}
}