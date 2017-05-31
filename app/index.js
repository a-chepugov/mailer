import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';
const upload = multer(); // for parsing multipart/form-data
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

import routes from './routes';
routes(app);

const webpackConfig = require('../webpack.config.js');

const compiler = webpack(webpackConfig());

app.use(webpackDevMiddleware(compiler, {
	hot: true,
	stats: {
		colors: true,
	},
	historyApiFallback: true,
}));

app.use(webpackHotMiddleware(compiler, {
	log: console.log,
	path: '/__webpack_hmr',
	heartbeat: 10 * 1000
}));

const server = app.listen(9876, function () {
	// const host = server.address().address;
	const host = 'localhost';
	const port = server.address().port;
	console.info('App listening at http://%s:%s', host, port);
});
