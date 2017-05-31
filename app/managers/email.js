import emailjs from 'emailjs';
import singleton from '../../helpers/singletonFabric';

class email {
	constructor() {
	}

	configServer(config = {}) {
		let {
			user,
			password,
			host,
			port,
			ssl
		} = config;

		this.server = emailjs.server.connect({
			user,
			password,
			host,
			port,
			ssl,
			timeout: 9999
		});
	}

	async sendMessage(message = {}) {
		if (this.server) {
			let missingFields = this.getMissingFields(message);
			if (!missingFields.length) {
				let {
					from,
					to,
					subject,
					text
				} = message;
				try {
					let promise = new Promise((s, f) => {
						this.server.send({
							from,
							to,
							subject,
							text
						}, function (error, message) {
							if (error) {
								f(error);
							} else {
								s(message);
							}
						});
					});

					let result = await promise
						.then(
							(response) => {
								return response;
							});
					return {data: result};
				} catch (error) {
					throw error;
				}
			} else {
				return {errors: [{message: 'Не хватает данных для отправки письма', fields: missingFields}]};
			}
		} else {
			throw new Error('Настройки сервера не установлены');
		}
	}

	getMissingFields(data = {}) {
		let fields = [
			'from',
			'to',
			'subject',
			'text'
		];
		return fields.filter((field) => {
			return !(data[field]);
		});
	}
}

module.exports = singleton(email)();
