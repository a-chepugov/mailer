import {mapActions, mapMutations} from 'vuex';

export default {
	components: {},
	data () {
		return {
			username: this.$store.state.auth.username,
			password: this.$store.state.auth.password,
		};
	},
	methods: {
		...mapMutations([
			'setAuth'
		]),
		onUserDataChange() {
			this.setAuth({username: this.username, password: this.password});
		}
	},
	created () {
		this.onUserDataChange();
	}
};
