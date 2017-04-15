const path = require('path');
const root = require('./root');

const singletonFabric = require('../helpers/singletonFabric');

class Resolver {
	constructor() {
		this.root = root;

		this.resolve = (...chunks) => {
			return path.join(this.root, ...chunks);
		}

		this.trim = (...chunks) => {
			this.resolve = this.resolve.bind(this, ...chunks);
			return this
		}

	}
}

module.exports = singletonFabric(Resolver)();