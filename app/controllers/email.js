import emailServer from '../managers/email';

export function setServer(req, res, next) {
	let {
		username: user,
		password,
		hostname: host,
		port,
		ssl
	} = req.body;

	emailServer.configServer({user, password, host, port, ssl});
	res.status(200).json({message: 'ready'});

	next();
}

export async function send(req, res, next) {
	try {
		let {
			from,
			to,
			subject,
			message: text
		} = req.body;

		let result = await emailServer.sendMessage({
			from,
			to,
			subject,
			text
		});
		if (result.data) {
			res.status(200).json(result);
		} else {
			res.status(400).json(result);
		}
	} catch (error) {
		console.error(error);
		res.status(500).json(error);
	}
	next();
}
