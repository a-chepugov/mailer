// const URI = require('urijs');
// const URITemplate = require('urijs/src/URITemplate');

// import axios from 'axios'

// const gpodder = {
// 	protocol: 'http',
// 	hostname: 'gpodder.net',
// 	port: '80'
// };

// const paths = {
// 	clientconfig: {
// 		path: '/clientconfig.json'
// 	},
// 	login: {
// 		path: '/api/2/auth/{username}/login.json'
// 	}
// };

class GPodder {
	constructor() {
		this.q = {};
	}

	/**
	 * @returns {boolean}
	 */
	testfunc() {
		return false;
	}
	// async getClientConfig() {
	// 	let config = Object.assign({}, gpodder, paths.clientconfig)
	// 	let url = new URI(config);
	//
	// 	this.config = await axios({
	// 		url,
	// 		method: 'get'
	// 	})
	// 		.then(({data}) => {
	// 			console.log(`index.js():41 => `);
	// 			console.dir(data, {colors: true, depth: null});
	// 			return data
	// 		})
	// }
	//
	// async login(username, password) {
	// 	if (!this.config) {
	// 		await this.getClientConfig();
	// 	}
	// 	let configC = this.config;
	// 	console.log(configC)
	//
	// 	let config = Object.assign(
	// 		{},
	// 		gpodder,
	// 		paths.login
	// 		// ,
	// 		// {
	// 		// 	username,
	// 		// 	password
	// 		// }
	// 	);
	//
	// 	let urlTemplate = new URI(config);
	// 	let url = URITemplate(urlTemplate.toString())
	// 		.expand({
	// 			'username': username
	// 		});
	//
	// 	console.log(url)
	//
	// 	fetch(url, {
	// 		method: 'get',
	// 		redirect: 'follow',
	// 		headers: {
	// 			'Authorization': 'Basic ' + btoa(`${username}:${password}`)
	// 		}
	// 	})
	// 		.then((response) => response.js);
	//
	// 	// let q = await axios({
	// 	// 	url,
	// 	// 	method: 'post',
	// 	// 	withCredentials: true
	// 	// })
	// 	// 	.then((response)=> {
	// 	// 		console.log(`index.js():76 => `);
	// 	// 		console.dir(response, {colors: true, depth: null});
	// 	// 		return response
	// 	// 	})
	// 	// console.log(q)
	// }
}

export default GPodder;
