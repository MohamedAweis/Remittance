const joi = require('joi');

const getCurrency = joi.object({
    currency_id: joi.number().required()
});


module.exports = {
    getCurrency
};