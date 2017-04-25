const Koa = require('koa');
const config = require('config');
const app = new Koa();

const routerHelper = require('./routes');

routerHelper(app);


app.listen(config.server.port);