import emailjs from 'emailjs';

let emailjsServer;

export function setServer(req, res, next) {
	console.dir(req.body);

	let {
		username: user,
		password,
		host
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

export function send(req, res, next) {
	console.dir(req.body);

	let {
		from,
		to,
		subject,
		message: text
	} = req.body;

	if (emailjsServer) {
		emailjsServer.send({
			from,
			to,
			subject,
			text,
		}, function (error, message) {
			if (error) {
				console.error(error);
				res.status(500).json(error);
			} else {
				res.status(200).json(message);
			}
		});
	} else {
		res.status(500).json({message: 'mail server error'});
	}

	next();
}