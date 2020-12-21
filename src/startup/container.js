const { createContainer, asClass, asValue, asFunction } = require('awilix');

// Configuration
const config = require('../config');
const app = require('.');

// Services
// const HomeServices = require('../services/home.services');
const { HomeService } = require('../services');

// Controllers
// const HomeContorller = require('../controllers/home.controller');
const { HomeController } = require('../controllers');

// Router
const { HomeRoutes } = require('../routes/index.routes');
const Routes = require('../routes');

const container = createContainer();

container
	.register({
		app: asClass(app).singleton(),
		router: asFunction(Routes).singleton(),
		config: asValue(config),
	})
	.register({
		HomeService: asClass(HomeService).singleton(),
	})
	.register({
		HomeController: asClass(
			HomeController.bind(HomeController),
		).singleton(),
	})
	.register({
		HomeRoutes: asFunction(HomeRoutes).singleton(),
	});

module.exports = container;
