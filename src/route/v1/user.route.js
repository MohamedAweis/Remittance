const express = require('express');

/**
 * middlwares
 */
const route = express.Router();
const { usersController } = require('../../controller');
const { usersValidation } = require('../../validations');
const { validate } = require('../../middlewares');
const { authentication, authorization } = require('../../middlewares');

route.get('/', authentication, authorization('viewAllUsers'), usersController.getAllUsers);
route.get('/getuserById', authentication, authorization('viewUserByEmail'), validate(usersValidation.getUserById), usersController.getUserById);
route.post('/create', authentication, authorization('createUser'), validate(usersValidation.createUser), usersController.create);
route.patch('/update', authentication, authorization('updateUser'), validate(usersValidation.updateUser), usersController.updateUser);
route.delete('/delete', authentication, authorization('deleteUser'), validate(usersValidation.deleteUser), usersController.deleteUser);

module.exports = route;