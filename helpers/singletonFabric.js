module.exports = function (Class) {
	let instanse;
	return function (...params) {
		return instanse ?
			instanse :
			(function () {
				instanse = new Class(...params);
				return instanse
			})()
	}
}