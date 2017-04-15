import URI from 'urijs';
import URITemplate from 'urijs/src/URITemplate';

import axios from 'axios';

const gpodder = {
	protocol: "http",
	hostname: "gpodder.net",
	port: "80"
};

import paths from './api';

export default class GPodder {
	constructor() {

	}

	async getClientConfig() {
		let config = Object.assign({}, gpodder, paths.clientParametrization);
		let url = new URI(config);

		this.config = await axios.get(url)
			.then(({data}) => data);
	}

	async login(username, password) {
		if (!this.config) {
			await this.getClientConfig();
		}
		let configC = this.config;
		console.log(configC);

		let config = Object.assign(
			{},
			gpodder,
			paths.login,
			{
				username,
				password
			}
		);

		let urlTemplate = new URI(config);
		let url = URITemplate(urlTemplate.toString())
			.expand({
				username
			});

		console.log(url);
		let q = await axios({
			url,
			method: "post",
			withCredentials: true
		})
			.then((response) => {
				return response;
			});
		console.log(q);
	}
}
