import jhtmlarea from 'jhtmlarea';

import {mapActions, mapMutations} from 'vuex';

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
		}
	},
	mounted () {
		let saveTemplate = this.saveTemplate;
		let changeMessage = this.changeMessage;
		let container = $('#message');
		container.htmlarea({
			loaded: function () {
				$(this.editor).on('input', function (event) {
					changeMessage(event.target.innerHTML);
				})
			}
		});
	}
}
