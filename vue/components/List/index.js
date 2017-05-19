import {mapActions, mapMutations} from 'vuex';
const CSV = require('../../../helpers/CSV');

export default {
	data () {
		return {
			files: [],
			data: [],
			fields: []
		}
	},
	methods: {
		...mapMutations([
			'setData'
		]),
		onChange(event){
			let {target: {files = [], value} = {}} = event;
			this.files = files;


			function getAddressees(results = {}, file = {}) {
				let {data = []} = results;

				if (data.length) {
					let fields = Object.keys(data[0]);
					fields.splice(fields.indexOf('email'), 1);
					this.fields = fields;
					this.data = this.data.concat(data);
					this.setData(data);
				}
			}

			for (let file of files) {
				CSV.parse(file,
					getAddressees.bind(this)
				)
			}
		},
		itemDelete(index){
			this.data.splice(index, 1);
		}
	},
}