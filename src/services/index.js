const authService = require('./auth.service');
const operationService = require('./operation.service');
const permissionService = require('./permission.service');
const remittanceService = require('./remittance.service');
const userService = require('./user.service');
const customerService = require('./customer.service');

module.exports = {
    authService,
    operationService,
    permissionService,
    remittanceService,
    userService,
    customerService
};