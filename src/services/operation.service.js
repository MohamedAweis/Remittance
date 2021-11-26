//import logger
const logger = require('../config/logger');
//import the user model
const { operationModel } = require('../modal');


const isIdExist = async(id) => {
    if (await operationModel.isIdExist(id))
        return true;

    return false;

};

const getCountries = async() => {
    return operationModel.getCountries();
};

const getCurrencies = async() => {
    return operationModel.getCurrencies();
};

const getStates = async() => {
    return operationModel.getStates();
};

const getCurrency = async(id) => {
    let userStatus = await operationModel.getCurrency(id)
    return userStatus;
};

const getCities = async() => {
    return operationModel.getCities();
};


const getStatus = async() => {
    return operationModel.getStatus();
};




module.exports = {
    getCountries,
    isIdExist,
    getCurrencies,
    getCurrency,
    getStates,
    getCities,
    getStatus
};