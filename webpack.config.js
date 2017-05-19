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
const fontsRule = require('./webpack/rules/url-fonts');
const imagesRule = require('./webpack/rules/url-images');

module.exports = function (env = {}) {

	const module = {
		rules: [
			eslintRule({
				formatter: require('eslint-friendly-formatter')
			}),
			babelRule(),
			vueRule(),
			fontsRule(),
			imagesRule(),
		]
	};

	return {
		context: path.join(__dirname),
		entry: {
			index: [
				"babel-polyfill",
				'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000',
				'./vue/index.js',
			],
			vendor: ['vue', 'jquery'],
		},
		output: {
			path: path.join(__dirname, 'public'),
			filename: '[name].js?[hash]',
			publicPath: '/',
		},
		plugins: [
			new webpack.HotModuleReplacementPlugin(),
			new webpack.NoEmitOnErrorsPlugin(),
			new webpack.ProvidePlugin({
				$: "jquery/dist/jquery.min.js",
				jQuery: "jquery/dist/jquery.min.js",
				"window.jQuery": "jquery/dist/jquery.min.js"
			}),
			HtmlWebpackPlugin('template.html', 'index.html'),
		],
		module,
		resolve: {
			alias: {
				// vue: 'vue/dist/vue.js',
				vue: 'vue/dist/vue.runtime.js',
				'gpodder-client$': '../../gpodder-client',
			},
			modules: ['node_modules', 'bower_components'],
			descriptionFiles: ['package.json', 'bower.json'],
		}
	};
}