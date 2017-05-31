import render from '../../../helpers/render';

import {mapActions, mapMutations} from 'vuex';

export default {
	components: {},
	methods: {
		...mapActions([
			'setAuth',
			'sendEmail'
		]),
		send() {
			let {
				template: {
					message: messageTemplate,
					subject: subjectTemplate
				} = {},
				data: datas = []
			} = this.$store.state;

			this.setAuth()
				.then(async() => {
					console.dir(datas, {colors: true, depth: null});
					console.info(`Начинаем отсылку писем. К отсылке => ${datas.length}`);
					let stopSending = false;

					for (let i in datas) {
						if (stopSending) {
							alert('Ошибка при отправке! Рассылка остановлена!');
							break;
						}
						let data = datas[i];
						console.info(`Отсылаю письмо №${i} -> ${data.email}`);
						let subject = render(subjectTemplate, data);
						let message = render(messageTemplate, data);

						let emailData = {
							from: this.$store.state.auth.username,
							to: data.email,
							subject,
							message
						};
						// await this.sendEmail(emailData)
						// 	.then(console.info, (error) => {
						// 		console.error('Ошибка при отправке! Рассылка остановлена!');
						// 		console.error(error);
						// 		stopSending = true;
						// 	});
					}
				})
		},
	}
}
