var webpack = require('webpack');
var path = require('path');
var config = require('config');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ClosureCompilerPlugin = require('webpack-closure-compiler');

const defaultValues = require('./webpack/defaultValues');
const base = require('./webpack/base');
const CleanWebpackPlugin = require('./webpack/CleanWebpackPlugin');

module.exports = function (env = {}) {

	const {
		NODE_ENV,
		isDev,
	} = defaultValues(env);

	console.log(`NODE_ENV = ${NODE_ENV}`);

	const {
		entry,
		output
	} = base(
		["babel-polyfill", './vue/index.js'],
		['vue'],
		'[name].[chunkhash]js?[chunkhash]',
		path.resolve(__dirname, 'public', 'js'),
		path.resolve(__dirname, 'public'));

	const watch = env.watch ? env.watch : false;

	const plugins = [
		CleanWebpackPlugin(__dirname, [path.resolve(__dirname, 'public', 'js')]),
		new HtmlWebpackPlugin({
			cache: true,
			hash: true,
			// xhtml: true,
			template: 'index.html',
			// inject: true,
			filename: path.resolve(__dirname, 'public', 'index.html')
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(NODE_ENV)
		}),
		new ClosureCompilerPlugin({
			compiler: {
				language_in: 'ECMASCRIPT6',
				language_out: 'ECMASCRIPT5',
				compilation_level: 'SIMPLE'
			},
			concurrency: 3,
		}),
		new webpack.optimize.CommonsChunkPlugin({
			name: 'vendor' // Specify the common bundle's name.
		}),
	];

	return {
		entry,
		output,
		watch,
		plugins,
		module: {
			rules: [
				{
					test: /\.(js|vue)$/,
					loader: 'eslint-loader',
					enforce: 'pre',
					options: {
						formatter: require('eslint-friendly-formatter')
					}
				},
				{
					test: /\.js$/,
					exclude: /(node_modules|bower_components)/,
					use: {
						loader: 'babel-loader',
						options: {}
					}
				},
				{
					test: /\.vue$/,
					loader: 'vue-loader',
					// options: vueLoaderConfig
				},
			]
		},
		devtool: 'source-map',
		devServer: {
			contentBase: path.join(__dirname, "public"),
			inline: true,
			compress: true,
			noInfo: true,
			// hot: true,
			port: config.port
		},
		resolve: {
			// alias: {vue: 'vue/dist/vue.js'}
			alias: {
				vue: 'vue/dist/vue.runtime.js',
				'gpodder-client$': '../../gpodder-client',
			}
		}
	}
};