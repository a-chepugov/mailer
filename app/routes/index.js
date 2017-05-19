import * as email from '../controllers/email';

module.exports = function (app) {
	app
		.post('/auth', email.setServer)
		.post('/send', email.send)
	;
}