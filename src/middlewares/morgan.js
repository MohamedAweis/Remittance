/**
 * importing Modules
 */
const logger = require('../config/logger');
const morgan = require("morgan");

//create morgan middleware
const morganMiddleware = morgan(
    "tiny", { stream: logger.stream.write }
);
module.exports = morganMiddleware;