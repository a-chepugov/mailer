// import {mapActions} from 'vuex';
const CSV = require('../../../helpers/CSV');

export default {
	data () {
		return {
			files: [],
			addressees: []
		}
	},
	methods: {
		// ...mapActions([
		// 		'login'
		// ]),
		onChange(event){
			let {target: {files = [], value} = {}} = event;
			this.files = files;


			function getAddressees(results = {}, file = {}) {
				let {data = []} = results;
				console.dir(data, {colors: true, depth: null})

				let addressees = data.map(({name, email} = {}) => {
					console.log(`index.js():25 => `);
					console.log(name, email);
					return {name, email}
				});

				this.addressees = this.addressees.concat(addressees)
				console.dir(this.addressees, {colors: true, depth: null})
			}

			for (let file of files) {
				CSV.parse(file,
					getAddressees.bind(this)
				)
			}
		}
	},
}