const joi = require('joi');
const register = joi.object({
    customer_name: joi.string().required(),
    mobile_no: joi.number().required(),
    customer_email: joi.string().email().required(),
    address: joi.string().required(),
    gender: joi.string().required()

});

const login = joi.object({
    email: joi.string().email().required(),
    password: joi.string(),
});

module.exports = {
    register,
    login
}