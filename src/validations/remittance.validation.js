const joi = require('joi');
const createRemittance = joi.object({
    customer_id: joi.number().required(),
    city_id: joi.number().required(),
    USERID: joi.number().required(),
    payment_id: joi.number().required(),
    sending_amount: joi.number().required(),
    receiving_amount: joi.number().required(),
    currency_id: joi.number().required(),
    status_id: joi.number().required(),
    charge_id: joi.number().required(),
    state_id: joi.number().required(),
    country_id: joi.number().required(),

});

const updateRemitance = joi.object({
    customer_id: joi.number().required(),
    status_id: joi.number().required()
});

const getRemittanceByUser = joi.object({
    USERID: joi.number().required()
});


module.exports = {
    createRemittance,
    updateRemitance,
    getRemittanceByUser
}