module.exports = function(contentBase, port){
	return {
		contentBase,
		inline: true,
		compress: true,
		noInfo: true,
		// hot: true,
		port
	}
}