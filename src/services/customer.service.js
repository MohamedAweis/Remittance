const { customerModel } = require('../modal');
const logger = require('../config/logger');

const isEmailExist = async(email) => {
    console.log(`Executing isEmailExist from service ${email}`);

    if (await customerModel.isEmailExist(email)) {
        return true;
    }
    return false;
}

const register = async(user) => {
    logger.info('create user');
    let newUser = await customerModel.register(user);
    return newUser;
};

const isIdExist = async(id) => {
    if (await customerModel.isIdExist(id))
        return true;

    return false;

};

const getCustomers = async() => {
    return customerModel.getCustomers();
};

const getCustomerById = async(id) => {
    let userStatus = await customerModel.getCustomerById(id)
    return userStatus;
};


module.exports = {
    register,
    isEmailExist,
    isIdExist,
    getCustomers,
    getCustomerById
}