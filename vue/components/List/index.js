// import {mapActions} from 'vuex';
const CSV = require('../../../helpers/CSV');

export default {
	data () {
		return {
			files: undefined,

		}
	},
	methods: {
		// ...mapActions([
		// 		'login'
		// ]),
		onChange(event){
			let {target: {files = [], value} = {}} = event;
			this.files = files;

			for (let file of files) {
				CSV.parse(file,
					function (results, file) {
						console.dir(results, {colors: true, depth: null})
					}
				)
			}
		}
	},
}