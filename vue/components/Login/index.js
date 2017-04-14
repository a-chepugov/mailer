import {mapActions} from 'vuex';

export default {
	name: 'hello',
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