import {mapActions, mapMutations} from 'vuex';

export default {
	components: {},
	data () {
		return {
			username: '',
			password: '',
		}
	},
	methods: {
		...mapMutations([
			'setAuth',
		]),
		onUsernameChange() {
			this.setAuth({username: this.username, password: this.password})
		},
		onPasswordChange() {
			this.setAuth({username: this.username, password: this.password})
		}
	}
}