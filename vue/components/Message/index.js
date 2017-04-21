import jhtmlarea from 'jhtmlarea';

export default {
	components: {},
	data () {
		return {
			message: '',
		}
	},
	methods: {
		save() {
			let container = $('#message');
			console.log(container[0].value);
		}
	},
	created () {

	},
	mounted () {
		let container = $('#message');
		container.htmlarea();
	}
}