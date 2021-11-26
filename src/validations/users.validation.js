const joi = require('joi');
//validation for create user
const createUser = joi.object({

    fullName: joi.string().required(),
    email: joi.string().email().required(),
    password: joi.string().required(),
    confirmPassword: joi.ref('password')
});

//validation for update user
const updateUser = joi.object({
    email: joi.string().required(),
    fullName: joi.string(),
    password: joi.string().required(),
    active: joi.number()
});

const deleteUser = joi.object({
    email: joi.string().required()
})

const getUserById = joi.object({
    USERID: joi.number().required()
})

//export the validatoins
module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getUserById
};