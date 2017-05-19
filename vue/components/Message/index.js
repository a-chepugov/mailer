import jhtmlarea from 'jhtmlarea';
import Mustache from 'mustache';

export default {
	components: {},
	data () {
		return {
			template: 'Уважаемый {{name}}, ваш email: {{email}}',
		}
	},
	methods: {
		save() {
			let container = $('#message');
			let {[0]: {value: template} = {}} = container;
			this.template = template;

			let {data: datas = []} = this.$store.state;

			for (let data of datas) {
				let output = Mustache.render(template, data);
			}
		}
	},
	mounted () {
		let container = $('#message');
		container.htmlarea();
	}
}