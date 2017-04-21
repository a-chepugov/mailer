import {mapActions} from 'vuex';
import Nav from '../Nav/index.vue';
import List from '../List/index.vue';


export default {
	name: 'hello',
	components: {
		'Navigation': Nav,
		List
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