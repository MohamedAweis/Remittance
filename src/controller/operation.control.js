const status = require('http-status');
const { operationService } = require('../services');
const { ApiError } = require('../payload/ApiError');
const { ApiResponse } = require('../payload/ApiResponse');
const logger = require('../config/logger');
const { handleAsync } = require('../utils/util');


const getCountries = handleAsync(async(req, res) => {
    logger.info('getCountries controll is working');
    let users = await operationService.getCountries();
    res.status(status.OK).send(new ApiResponse(status.OK, 'OK', users));
});

const getCurrencies = handleAsync(async(req, res) => {
    logger.info('getCountries controll is working');
    let users = await operationService.getCurrencies();
    res.status(status.OK).send(new ApiResponse(status.OK, 'OK', users));
});


const getCurrency = handleAsync(async(req, res) => {
    logger.info('getCurrency controller is working');
    let user = req.body;
    let checkIdExistence = await operationService.isIdExist(user.currency_id);

    if (checkIdExistence) {
        logger.info('The user exists');
        let getUser = await operationService.getCurrency(user.currency_id);
        return res.status(status.OK).
        send(new ApiResponse(status.OK, 'Ok', getUser));
    }
    return res.status(status.NOT_ACCEPTABLE)
        .send(new ApiError(status.NOT_ACCEPTABLE, res.__('userNotExist')));
});


const getStates = handleAsync(async(req, res) => {
    logger.info('getStates controll is working');
    let users = await operationService.getStates();
    res.status(status.OK).send(new ApiResponse(status.OK, 'OK', users));
});


const getCities = handleAsync(async(req, res) => {
    logger.info('getCities controll is working');
    let users = await operationService.getCities();
    res.status(status.OK).send(new ApiResponse(status.OK, 'OK', users));
});


const getStatus = handleAsync(async(req, res) => {
    logger.info('getCities controll is working');
    let users = await operationService.getStatus();
    res.status(status.OK).send(new ApiResponse(status.OK, 'OK', users));
});



/**
 * export controllers
 */
module.exports = {
    getCountries,
    getCurrencies,
    getCurrency,
    getStates,
    getCities,
    getStatus
};