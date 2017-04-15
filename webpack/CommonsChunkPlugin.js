var webpack = require('webpack');

module.exports = function (name) {
	return new webpack.optimize.CommonsChunkPlugin({
		name
	})
}
