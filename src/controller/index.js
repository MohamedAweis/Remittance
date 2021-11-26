const usersController = require('./users.control');
const operationController = require('./operation.control');
const remittanceController = require('./remittance.control');
const authController = require('./auth.control');
const permissionController = require('./permission.control');
const customerController = require('./customer.control');

module.exports = {
    usersController,
    operationController,
    remittanceController,
    authController,
    permissionController,
    customerController
};