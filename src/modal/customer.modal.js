const database = require('../config/database');
const logger = require('../config/logger');

//-----------------------------------------
const getCustomers = async() => {
    let query = `select * from customers`;
    let result = await database.executeQuery(query, []);
    return result;
};

const getCustomerById = async(id) => {
    let result = await database.executeQuery(`select * from customers where customer_id=:id `, [id]);
    return result;
};
//cumtomers_seq.nextval
const register = async(user) => {

    let customer_email = user.customer_email;
    let address = user.address;
    let customer_name = user.customer_name;
    let mobile_no = user.mobile_no;
    let gender = user.gender;

    let result = await database.executeQuery(`INSERT INTO customers (customer_id, customer_email, address, customer_name, mobile_no,gender)
    VALUES (USER_SEQ.nextval, :customer_email, :address, :customer_name,:mobile_no, :gender)`, [customer_email, address, customer_name, mobile_no, gender]);

    if (result.rowsAffected === 1) {

        logger.info('A new User has been registered!');
        return true;
    }

    return false;

};

const isEmailExist = async(email) => {
    let result = await database.executeQuery(` select count(*) as emailAlreadyExist from customers
         where customer_email=:email`, [email]);
    if (result[0].emailalreadyexist > 0)
        return true;

    return false;
};

const isIdExist = async(id) => {
    let result = await database.executeQuery(`select count(*) as idAlreadyExist
     from customers
    where customer_id=:id`, [id]);
    if (result[0].idalreadyexist > 0)
        return true;

    return false;
}

module.exports = {
    isEmailExist,
    register,
    isIdExist,
    getCustomers,
    getCustomerById

}