var webpack = require('webpack');
var path = require('path');
var config = require('config');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ClosureCompilerPlugin = require('webpack-closure-compiler');

module.exports = function (env = {}) {

	// установки по-умолчанию
	process.env.NODE_ENV = process.env.NODE_ENV ? process.env.NODE_ENV : 'production';
	console.log(`NODE_ENV = ${process.env.NODE_ENV}`);

	const watch = env.watch ? env.watch : false;

	return {
		entry: {
			index: ["babel-polyfill", './vue/index.js'],
			vendor: ['vue']
		},
		output: {
			filename: '[name].js?[chunkhash]',
			path: path.resolve(__dirname, 'public', 'js'),
			publicPath: path.resolve(__dirname, 'public')
		},
		// watch,
		plugins: [
			new CleanWebpackPlugin([path.resolve(__dirname, 'public', 'js')], {
				root: __dirname,
				verbose: true,
				dry: false,
			}),
			new HtmlWebpackPlugin({
				cache: true,
				hash: true,
				// xhtml: true,
				template: 'index.html',
				// inject: true,
				filename: path.resolve(__dirname, 'public', 'index.html')
			}),
			new webpack.DefinePlugin({
				'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
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
		],
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