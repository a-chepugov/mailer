import {mapActions, mapMutations} from 'vuex';
const CSV = require('../../../helpers/CSV');

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
		},
		async onAuthSourcesChange() {
			let {target: {files = []} = {}} = event;

			// files является объектом типа FilesList
			let filesArr = Array.from(files);

			for (let file of files) {
				let promise = new Promise((resolve, reject) => {
					CSV.parse(file,
						(results = {}) => {
							console.dir(results, {colors: true, depth: null});
							let {data = []} = results;
							resolve(data);
						},
						reject
					)
				});
				let {[0]: {username, password} = {}} = await promise;
				this.username = username;
				this.password = password;
			}
		}
	},
	created () {
		this.onUserDataChange();
	}
};
