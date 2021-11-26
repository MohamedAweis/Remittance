const database = require('../config/database');

//-----------------------------------------
const getCountries = async() => {
    let query = `select * from allcountries`;
    let result = await database.executeQuery(query, []);
    return result;
};


const getCurrencies = async() => {
    let query = `select * from currency`;
    let result = await database.executeQuery(query, []);
    return result;
};

const getStates = async() => {
    let query = `select * from states`;
    let result = await database.executeQuery(query, []);
    return result;
};

const getCurrency = async(id) => {
    let result = await database.executeQuery(`select * from currency where currency_id=:id `, [id]);
    return result;
};


const getCities = async() => {
    let query = `select * from states`;
    let result = await database.executeQuery(query, []);
    return result;
};

const getStatus = async() => {
    let query = `select * from status`;
    let result = await database.executeQuery(query, []);
    return result;
};



const isIdExist = async(id) => {
    let result = await database.executeQuery(`select count(*) as idAlreadyExist
     from currency
    where currency_id=:id`, [id]);
    if (result[0].idalreadyexist > 0)
        return true;

    return false;
}




module.exports = {
    getCountries,
    getStates,
    getCities,
    getCurrencies,
    getCurrency,
    getStatus,
    isIdExist
};