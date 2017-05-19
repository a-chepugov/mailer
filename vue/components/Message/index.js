import jhtmlarea from 'jhtmlarea';
import Mustache from 'mustache';

import {mapActions, mapMutations} from 'vuex';

export default {
	components: {},
	data () {
		return {
			subject: 'Здравствуйте {{name}}',
			template: 'Уважаемый {{name}}, ваш email: {{email}}',
		}
	},
	methods: {
		...mapActions([
			'auth',
			'send'
		]),
		save() {
			let container = $('#message');
			let {[0]: {value: template} = {}} = container;
			this.template = template;


			let {data: datas = []} = this.$store.state;

			this.auth()
				.then(async() => {
					console.log(`Начинаем отсылку писем. К отсылке => ${datas.length}`);
					let stopSending = false;

					for (let i in datas) {
						if (stopSending) {
							break;
						}
						let data = datas[i];
						console.info(`Отсылаю письмо №${i} -> ${data.email}`);
						let subject = Mustache.render(this.subject, data);
						let message = Mustache.render(this.template, data);

						let emailData = {
							from: this.$store.state.auth.username,
							to: data.email,
							subject,
							message
						};
						await this.send(emailData)
							.then(console.info, () => {
								console.error('Ошибка при отправке! Рассылка остановлена!');
								// alert('Ошибка при отправке! Рассылка остановлена!');
								stopSending = true;
							})
						;
					}
				})
		}
	},
	mounted () {
		let container = $('#message');
		container.htmlarea();
	}
}