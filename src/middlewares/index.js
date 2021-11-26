/**
 * import  Modules
 */
const validate = require('./validator');
const morganMiddleware = require('./morgan');
const { authentication, authorization } = require('./auth');

/**
 * exporting 
 */
module.exports = {
    validate,
    morganMiddleware,
    authentication,
    authorization
};