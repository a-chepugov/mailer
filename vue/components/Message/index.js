import jhtmlarea from 'jhtmlarea';
import Mustache from 'mustache';

import {mapActions, mapMutations} from 'vuex';

export default {
	components: {},
	data () {
		return {
			subject: 'Здравствуйте {{name}}',
			template: 'Уважаемый {{name}}, ваш email: {{email}}, переменная {{var}}'
		}
	},
	methods: {
		...mapActions([
			'setAuth',
			'sendEmail'
		]),
		save() {
			let container = $('#message');
			let {[0]: {value: template} = {}} = container;
			this.template = template;

			let {data: datas = []} = this.$store.state;

			this.setAuth()
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
						await this.sendEmail(emailData)
							.then(console.info, (error) => {
								console.error('Ошибка при отправке! Рассылка остановлена!');
								console.error(error);
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
