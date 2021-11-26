const database = require('../config/database');
const logger = require('../config/logger');

//-----------------------------------------
const getusers = async() => {
    let query = `select * from users`;
    let result = await database.executeQuery(query, []);
    return result;
};

const getuser = async(id) => {
    let result = await database.executeQuery(`select * from users where USERID=:id `, [id]);
    return result;
};
//cumtomers_seq.nextval
const create = async(user) => {
    let email = user.email;
    let password = user.password;
    let fullName = user.fullName;
    let active = 0;

    let result = await database.executeQuery(`INSERT INTO USERS (USERID, EMAIL, PASSWORD, FULLNAME, ACTIVE)
    VALUES (USER_SEQ.nextval, :email, :password, :fullName,:active)`, [email, password, fullName, active]);

    if (result.rowsAffected === 1) {

        logger.info('A new User has been Inserted!');
        return true;
    }

    return false;

};



const updateUser = async(user) => {

    let email = user.email;
    let password = user.password;
    let fullName = user.fullName;
    let active = user.active;


    let result = await database.executeQuery(`UPDATE USERS SET PASSWORD=:password,
    FULLNAME= :fullName, ACTIVE=:active WHERE EMAIL= :email`, [password, fullName, active, email])

    if (result.rowsAffected === 1) {
        logger.info('User has been Updated Successfully!');
        return true;

    }
    return false;
}


const deleteUser = async(email) => {
    let result = await database.executeQuery(`delete from users where email=:id`, [email])
    if (result.rowsAffected === 1) {
        logger.info('A user has been deleted Successfully!');
        return true;
    }
    return false;

};

const isEmailExist = async(email) => {
    let result = await database.executeQuery(` select count(*) as emailAlreadyExist from users
         where email=:email`, [email]);
    if (result[0].emailalreadyexist > 0)
        return true;

    return false;
};

const isIdExist = async(id) => {
    let result = await database.executeQuery(`select count(*) as idAlreadyExist
     from users
    where USERID=:id`, [id]);
    if (result[0].idalreadyexist > 0)
        return true;

    return false;
}
const getUserByEmailAndPassword = async(email, password) => {
    let result = await database.executeQuery(`
    SELECT U.USERID, U.FULLNAME, U.EMAIL, R.ROLENAME
    FROM USERS U
             INNER JOIN USERROLE UR on U.USERID = UR.userId
             INNER JOIN ROLES R on UR.roleId = R.ROLEID
    WHERE EMAIL =:email
      AND PASSWORD =:password
      AND ACTIVE = 1`, [email, password]);
    if (!result)
        return null;
    return result[0];
};



module.exports = {
    getusers,
    getuser,
    create,
    updateUser,
    deleteUser,
    isEmailExist,
    isIdExist,
    getUserByEmailAndPassword
};