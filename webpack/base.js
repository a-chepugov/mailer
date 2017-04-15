module.exports = function (index = ['index.js'], vendor = [], filename = '[name].js?[chunkhash]', path = 'public', publicPath = 'public') {
	return {
		entry: {
			index,
			vendor
		},
		output: {
			filename,
			path,
			publicPath
		}
	}
}