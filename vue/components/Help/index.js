import {mapActions} from 'vuex';

export default {
	name: 'hello',
	data () {
		return {
			msg: 'Welcome to Your Vue.js App'
		}
	},
	methods: {
		// ...mapActions([
		// 	'getClientConfig'
		// ])
	},
	created () {
		this.$store.dispatch('getClientConfig')
	}
}