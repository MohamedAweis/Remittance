const express = require('express');
const route = express.Router();

/**
 * Middewares
 */
const { operationController } = require('../../controller');
const { operationValid } = require('../../validations');
const { validate } = require('../../middlewares');
/**
 * Operation Endpoints
 */

route.get('/getCountries', operationController.getCountries);
route.get('/getCurrencies', operationController.getCurrencies);
route.get('/getCurrency', validate(operationValid.getCurrency), operationController.getCurrency);
route.get('/getStates', operationController.getStates);
route.get('/getCities', operationController.getCities);
route.get('/getStatus', operationController.getStatus);

module.exports = route;