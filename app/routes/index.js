import Router from 'koa-router';

const router = new Router();

router.get('/', function (ctx, next) { ctx.body = '131231231231'});


const staticHelper= require('./static');

staticHelper(router);

module.exports = function (app) {
	app
		.use(router.routes())
		.use(router.allowedMethods());
};