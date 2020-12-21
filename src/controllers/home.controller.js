const HomeServices = require('../services/home.services');

let _homeService = null;

class HomeContorller {
	constructor({ HomeService }) {
		_homeService = HomeServices;
	}

	index(req, rees) {
		return res.send(_homeService.index());
	}
}

module.exports = HomeContorller;
