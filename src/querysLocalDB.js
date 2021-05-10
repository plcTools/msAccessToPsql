const { connection } = require('./connToLocalDb');

exports.QueryAllData = async (tableName) => {
    try {
        const users = await connection.query(`SELECT * FROM ${tableName}`);
        return JSON.stringify(users, null, 2);
    } catch (error) {
        console.error(error);
    }
}

exports.QuerySchemas = async () =>{
    try {
        const schemas = await connection.schema(20)
        return schemas
    } catch (error) {
        console.log(error)
    }
}
