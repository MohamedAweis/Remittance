const database = require('../config/database');

//-----------------------------------------
const getRemittancies = async() => {
    let query = `select * from remittance`;
    let result = await database.executeQuery(query, []);
    return result;
};

const getRemittanceByUser = async(id) => {
    let result = await database.executeQuery(`select * from remittance where USERID=:id `, [id]);
    return result;
};


const createRemittance = async(user) => {
    let customer_id = user.customer_id;
    let city_id = user.city_id;
    let payment_id = user.payment_id;
    let sending_amount = user.sending_amount;
    let receiving_amount = user.receiving_amount;
    let currency_id = user.currency_id;
    let status_id = user.status_id;
    let charge_id = user.charge_id;
    let state_id = user.state_id;
    let country_id = user.country_id;
    let USERID = user.USERID;

    let result = await database.executeQuery(`
    insert into remittance(remittance_id, customer_id, sending_amount, currency_id, charge_id,
  receiving_amount, status_id,country_id, city_id, state_id, transaction_date, payment_id, USERID)
    values(remittance_seq.nextval, :customer_id, :sending_amount, :currency_id, :charge_id,
  :receiving_amount, :status_id, :country_id, :city_id, :state_id, sysdate, :payment_id, :USERID)
                `, [customer_id, sending_amount, currency_id, charge_id, receiving_amount, status_id,
        country_id, city_id, state_id, payment_id, USERID
    ]);
    console.log(result);
    if (result.rowsAffected === 1)
        return true;
    return false;
};

const updateRemittanceStatus = async(user) => {
    let customer_id = user.customer_id;
    let status_id = user.status_id;

    let result = await database.executeQuery(`update remittance set status_id=:status_id
     where customer_id=:customer_id`, [customer_id, status_id])
    if (result.rowsAffected === 1)
        return true;
    return false;
}


const isIdExist = async(id) => {
    let result = await database.executeQuery(`select count(*) as idAlreadyExist
     from remittance
    where USERID=:id`, [id]);
    if (result[0].idalreadyexist > 0)
        return true;

    return false;
}

const isEmailExist = async(email) => {
    let result = await database.executeQuery(` select count(*) as emailAlreadyExist from remittance
         where email=:email`, [email]);
    if (result[0].emailalreadyexist > 0)
        return true;

    return false;
};

module.exports = {
    getRemittancies,
    getRemittanceByUser,
    createRemittance,
    updateRemittanceStatus,
    isEmailExist,
    isIdExist,
};