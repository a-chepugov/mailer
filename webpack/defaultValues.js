// установки по-умолчанию
const DEV = 'development';
const TEST = 'testing';
const PROD = 'production';

module.exports = function (env = {}) {
	const NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'production';
	const isDev = NODE_ENV === DEV;
	const isTest = NODE_ENV === TEST;
	const isProd = NODE_ENV === PROD;

	console.log(`NODE_ENV = ${NODE_ENV}`);


	return {
		NODE_ENV,
		isDev,
		isTest,
		isProd,
	}
}
