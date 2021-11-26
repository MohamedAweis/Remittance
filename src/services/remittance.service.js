//import logger
const logger = require('../config/logger');
//import the user model
const { remittanceModel } = require('../modal');

const isEmailExist = async(email) => {
    if (await remittanceModel.isEmailExist(email)) {
        return true;
    }
    return false;
};

const isIdExist = async(id) => {
    if (await remittanceModel.isIdExist(id))
        return true;

    return false;

};

const getRemittancies = async() => {
    return remittanceModel.getRemittancies();
};

const getRemittanceByUser = async(id) => {
    let userStatus = await remittanceModel.getRemittanceByUser(id)
    return userStatus;
};


const createRemittance = async(user) => {
    logger.info('create user');
    let newUser = await remittanceModel.createRemittance(user);
    return newUser;
};

const updateRemittanceStatus = async(id) => {
    let userUpdate = await remittanceModel.updateRemittanceStatus(id);
    return userUpdate;
};



module.exports = {
    isEmailExist,
    isIdExist,
    updateRemittanceStatus,
    createRemittance,
    getRemittanceByUser,
    getRemittancies,
};