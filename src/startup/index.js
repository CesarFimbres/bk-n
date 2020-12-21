const express = require('express');

let _express = null;
let _config = null;

class Server {
	constructor({ config, router }) {
		_config = config;
		_express = express().use(router);
	}

	star() {
		return new Promise((resolve) => {
			_express.listen(_config.PORT, () => {
				console.log(
					_config.APLICATION_NAME +
						'API running onport: ' +
						config.PORT,
				);
				resolve();
			});
		});
	}
}

module.exports = Server;
