const status = require('http-status');
const { remittanceService } = require('../services');
const { ApiError } = require('../payload/ApiError');
const { ApiResponse } = require('../payload/ApiResponse');
const logger = require('../config/logger');
const { handleAsync } = require('../utils/util');

//create remittance
const createRemittance = handleAsync(async(req, res) => {
    logger.info("info createRemittance, you have seccessfully registered a new remittance");
    let user = req.body;

    let registerUser = await remittanceService.createRemittance(user);

    if (registerUser) {

        return res.status(status.OK)
            .send(new ApiResponse(status.OK, 'remittance created'));
    }

    if (err) {
        return res.status(status.INTERNAL_SERVER_ERROR)
            .send(new ApiError(status.INTERNAL_SERVER_ERROR, err));
    }
});

//get remittance by user
const getRemittanceByUser = handleAsync(async(req, res) => {
    logger.info('getRemittanceByUser controller is working');
    let user = req.body;
    let checkIdExistence = await remittanceService.isIdExist(user.USERID);

    if (checkIdExistence) {
        logger.info('The user exists');
        let getUser = await remittanceService.getRemittanceByUser(user.USERID);
        return res.status(status.OK).
        send(new ApiResponse(status.OK, 'Ok', getUser));
    }
    return res.status(status.NOT_ACCEPTABLE)
        .send(new ApiError(status.NOT_ACCEPTABLE, res.__('userNotExist')));
});

const getRemittancies = handleAsync(async(req, res) => {
    logger.info('getStates controll is working');
    let users = await remittanceService.getRemittancies();
    res.status(status.OK).send(new ApiResponse(status.OK, 'OK', users));
});

//update remittance
const updateRemittanceStatus = handleAsync(async(req, res) => {
    logger.info('updateRemittanceStatus to user Update');
    let user = req.body;
    let checkId = await remittanceService.isIdExist(user.customer_id);

    if (!checkId) {
        logger.error('The user does not exist');
        res.status(status.NOT_FOUND)
            .send(new ApiError(status.NOT_FOUND, res.__('userNotExist')));
    }

    let userUpdated = await remittanceService.updateRemittanceStatus(user);

    if (userUpdated) {
        logger.info('User is Updated');
        res.status(status.OK)
            .send(new ApiResponse(status.OK, res.__('userUpdated')));
    }
    res.status(status.INTERNAL_SERVER_ERROR)
        .send(new ApiError(status.INTERNAL_SERVER_ERROR, res.__('CreateError')));

});


/**
 * export controllers
 */
module.exports = {
    createRemittance,
    getRemittanceByUser,
    getRemittancies,
    updateRemittanceStatus
};