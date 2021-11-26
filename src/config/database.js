const oracledb = require('oracledb');
const util = require('../utils/util');
const { ApiError } = require('../payload/ApiError');
const logger = require('../config/logger');

// const host = 'localhost:1521';
// const database = 'xe';
// const username = 'hr';
// const password = 'hr';

const host     = process.env.DB_HOST;
const database = process.env.DB_DATABASE;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;



/**
 * oracle db connection 
 */
oracledb.initOracleClient({ libDir: 'C:\\Users\\Mohamed\\Nodejs DB\\instantclient_21_3'});
let executeQuery = async(query, params) => {

    let connection;
    try {
        connection = await oracledb.getConnection({
            user: username,
            password: password,
            connectString: host + '/' + database
        });
        logger.info('Connected database')

        let result = await connection.execute(query, params);
        connection.commit();
        return util.parseDatabaseObject(result);

    } catch (err) {
        logger.error(err)
        return null;
    } finally {
        if (connection) {
            await connection.close();
        }
    }
}

module.exports = {
    executeQuery
}