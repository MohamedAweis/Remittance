const joi = require('joi');
const register = joi.object({
    customer_name: joi.string().required(),
    mobile_no: joi.number().required(),
    customer_email: joi.string().email().required(),
    address: joi.string().required(),
    gender: joi.string().required()

});

const getCustomerById = joi.object({
    customer_id: joi.number().required()
});

module.exports = {
    register,
    getCustomerById
}