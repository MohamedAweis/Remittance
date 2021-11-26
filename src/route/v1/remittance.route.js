const express = require('express');
const route = express.Router();

/**
 * Middewares
 */
const { remittanceController } = require('../../controller');
const { remittanceValidation } = require('../../validations');
const { validate } = require('../../middlewares');
const { authentication, authorization } = require('../../middlewares');
/**
 * Remittance Endpoints
 */
route.post('/createRemittance', authentication, authorization('createRemittance'), validate(remittanceValidation.createRemittance), remittanceController.createRemittance);
route.get('/getRemittanceByUser', authentication, authorization('getRemittanceByUser'), validate(remittanceValidation.getRemittanceByUser), remittanceController.getRemittanceByUser);
route.get('/getRemittancies', authentication, authorization('getAllRemittances'), remittanceController.getRemittancies);
route.patch('/updateRemittanceStatus', authentication, authorization('updateRemittanceStatus'), validate(remittanceValidation.updateRemitance), remittanceController.updateRemittanceStatus);

module.exports = route;