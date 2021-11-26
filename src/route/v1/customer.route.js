const express = require('express');

/**
 * middlwares
 */
const route = express.Router();
const { customerController } = require('../../controller');
const { customerValidation } = require('../../validations');
const { validate } = require('../../middlewares');
const { authentication, authorization } = require('../../middlewares');

route.get('/', authentication, authorization('viewAllUsers'), customerController.getCustomers);
route.get('/getuserById', authentication, authorization('viewUserByEmail'), validate(customerValidation.getCustomerById), customerController.getCustomerById);
route.post('/create', authentication, authorization('createUser'), validate(customerValidation.register), customerController.register);


module.exports = route;