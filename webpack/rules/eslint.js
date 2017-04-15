module.exports = function (options) {
	return {
		test: /\.(js|vue)$/,
		loader: 'eslint-loader',
		enforce: 'pre',
		options
	}
}