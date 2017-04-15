// установки по-умолчанию
const DEV = 'development';
const TEST = 'testing';
const PROD = 'production';

module.exports = function (env = {}) {
	const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'production';
	const isDev = NODE_ENV === DEV;

	return {
		NODE_ENV,
		isDev,
	}
}
