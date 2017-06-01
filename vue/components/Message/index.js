import jhtmlarea from 'jhtmlarea';

import {mapActions, mapMutations} from 'vuex';
const CSV = require('../../../helpers/CSV');

export default {
	components: {},
	data () {
		return {
			subject: this.$store.state.template.subject,
			message: this.$store.state.template.message,
		}
	},
	methods: {
		...mapMutations([
			'setTemplate'
		]),
		saveTemplate(){
			let {subject, message} = this;
			this.setTemplate({subject, message})
		},
		changeMessage(message){
			this.message = message;
			this.saveTemplate()
		},
		onMessageLoad() {
			let {target: {files = []} = {}} = event;
			let filesArr = Array.from(files);
			let changeMessage = this.changeMessage.bind(this);
			let container = this.container;
			for (let file of filesArr) {
				var reader = new FileReader();
				reader.onload = function () {
					container.htmlarea('html', this.result);
					changeMessage(this.result);
				};
				reader.readAsText(file);
			}
		}
	},
	mounted () {
		let saveTemplate = this.saveTemplate;
		let changeMessage = this.changeMessage;
		let container = $('#message');
		this.container = container;
		container.htmlarea({
			loaded: function () {
				$(this.editor).on('input', function (event) {
					changeMessage(event.target.innerHTML);
				})
			}
		});
	}
}
