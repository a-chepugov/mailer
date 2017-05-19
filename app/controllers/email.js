import emailjs from 'emailjs';

let emailjsServer;

export function setServer(req, res, next) {
	let {
		username: user,
		password,
		hostname: host
	} = req.body;

	emailjsServer = emailjs.server.connect({
		user,
		password,
		host,
		ssl: true
	});

	res.status(200).json({message: 'ready'});

	next();
}

export async function send(req, res, next) {
	if (emailjsServer) {
		let missingFields = getMissingFields(req.body);

		console.dir(missingFields, {colors: true, depth: null});

		if (!missingFields.length) {
			let {
				from,
				to,
				subject,
				message: text
			} = req.body;
			try {
				let promise = new Promise((s, f) => {
					emailjsServer.send({
						from,
						to,
						subject,
						text,
					}, function (error, message) {
						if (error) {
							f(error)

						} else {
							s(message)
						}
					});
				});

				await promise
					.then((response) => {
						res.status(200).json(message);
					}, (error) => {
						console.error(error);
						res.status(500).json(error);
					});

			} catch (error) {
				console.log(`email.js(send):55 => `);
				console.error(error);
				res.status(500).json(error);
			}
		} else {
			console.log(`email.js(send):60 => `);
			res.status(400).json({message: 'Отсутствуют необходимые поля', fileds: missingFields});
		}
	} else {
		res.status(500).json({message: 'Почтовый сервер не настроен'});
	}

	next();
}

function getMissingFields(data = {}) {
	let fields = [
		'from',
		'to',
		'subject',
		'message'
	];
	return fields.filter((field) => {
		return !(data[field])
	})
}