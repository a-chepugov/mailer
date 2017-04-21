import {mapActions} from 'vuex';

export default {
	components: {
	},
	data () {
		return {
			login: '',
			password: '',
		}
	},
	methods: {
		...mapActions([
		// 	'getClientConfig',
		// 	'login'
		])
	},
	created () {
		// this.$store.dispatch('login')
	}
}