const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function (template, filename) {
	return new HtmlWebpackPlugin({
		cache: true,
		hash: true,
		// xhtml: true,
		template,
		inject: true,
		filename,
	})
}