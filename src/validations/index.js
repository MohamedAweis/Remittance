const remittanceValidation = require('./remittance.validation');
const usersValidation = require('./users.validation');
const operationValid = require('./operation.validation');
const authValidation = require('./auth.validation');
const customerValidation = require('./customer.validation');

module.exports = {
    remittanceValidation,
    usersValidation,
    operationValid,
    authValidation,
    customerValidation
};