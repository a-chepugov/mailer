var webpack = require('webpack');
var path = require('path');
var config = require('config');

const defaultValues = require('./webpack/defaultValues');
const base = require('./webpack/base');
const CleanWebpackPlugin = require('./webpack/CleanWebpackPlugin');
const HtmlWebpackPlugin = require('./webpack/HtmlWebpackPlugin');
const DefinePlugin = require('./webpack/DefinePlugin');
const CommonsChunkPlugin = require('./webpack/CommonsChunkPlugin');
const ClosureCompilerPlugin = require('./webpack/ClosureCompilerPlugin');

const devServerParams = require('./webpack/devServerParams');

const vueRule = require('./webpack/rules/vue');
const babelRule = require('./webpack/rules/babel');
const eslintRule = require('./webpack/rules/eslint');


module.exports = function (env = {}) {

	const {
		NODE_ENV,
		isDev,
		isTest,
		isProd,
	} = defaultValues(env);

	const {
		entry,
		output
	} = base(
		["babel-polyfill", './vue/index.js'],
		['vue'],
		'[name].js?[chunkhash]',
		path.resolve(__dirname, 'public', 'js'),
		path.resolve(__dirname, 'public'));

	const watch = env.watch ? env.watch : false;

	const plugins = [
		CleanWebpackPlugin(__dirname, [path.join('public', 'js')]),
		HtmlWebpackPlugin('index.html', path.resolve(__dirname, 'public', 'index.html')),
		DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify(NODE_ENV),
			isDev, isDev
		}),
		CommonsChunkPlugin('vendor')
	];

	const module = {
		rules: [
			eslintRule({
				formatter: require('eslint-friendly-formatter')
			}),
			babelRule(),
			vueRule()
		]
	};

	const devtool = isProd ? 'source-map' : 'cheap-module-eval-source-map';

	let devServer;
	if (isDev) {
		devServer = devServerParams(path.join(__dirname, "public"), config.port)
	}

	if (isProd) {
		plugins.push(ClosureCompilerPlugin())
	}

	return {
		entry,
		output,
		watch,
		plugins,
		module,
		devtool,
		devServer,
		resolve: {
			alias: {
				// vue: 'vue/dist/vue.js',
				vue: 'vue/dist/vue.runtime.js',
				'gpodder-client$': '../../gpodder-client',
			},
			modules: ['node_modules', 'bower_components'],
			descriptionFiles: ['package.json', 'bower.json'],
		}
	}
};