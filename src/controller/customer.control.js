/**
 * middlewares
 */
const status = require('http-status');
const logger = require('../config/logger');
const { customerService } = require('../services');
const { ApiError } = require('../payload/ApiError');
const { ApiResponse } = require('../payload/ApiResponse');
const { handleAsync } = require('../utils/util');


//get all customers
getCustomers = handleAsync(async(req, res) => {
    logger.info('All users controller is working');
    let users = await customerService.getCustomers();
    res.status(status.OK).send(new ApiResponse(status.OK, 'OK', users));
});

//get user by ID
getCustomerById = handleAsync(async(req, res) => {
    logger.info('getUserById controller is working');
    let user = req.body;
    let checkIdExistence = await customerService.isIdExist(user.customer_id);

    if (checkIdExistence) {
        logger.info('The user exists');
        let getUser = await customerService.getCustomerById(user.customer_id);
        return res.status(status.OK).
        send(new ApiResponse(status.OK, 'Ok', getUser));
    }
    return res.status(status.NOT_ACCEPTABLE)
        .send(new ApiError(status.NOT_ACCEPTABLE, res.__('userNotExist')));
});

//create user
register = handleAsync(async(req, res) => {
    logger.info('calling create user');
    let user = req.body;
    let checkEmail = await customerService.isEmailExist(user.customer_email);

    if (checkEmail) {
        logger.error('User already exist');
        return res.status(status.NOT_ACCEPTABLE)
            .send(new ApiError(status.NOT_ACCEPTABLE, res.__('userExists')));
    }
    let createUserStatus = await customerService.createUser(user);
    if (createUserStatus) {
        logger.info('User Created');
        return res.status(status.OK).send(new ApiResponse(status.OK, res.__('userIsCreated')));
    }
    return res.status(status.INTERNAL_SERVER_ERROR)
        .send(new ApiError(status.INTERNAL_SERVER_ERROR, res.__('CreateError')));
});



/**
 * export controllers
 */
module.exports = {
    getCustomers,
    getCustomerById,
    register
};