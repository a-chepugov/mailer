var serve = require('koa-router-static');

module.exports = function (router) {
	router.get('/*', serve('./public/'));
}
