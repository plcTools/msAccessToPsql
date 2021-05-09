const { connection } = require('./connectToDb');

async function queryAllData(tableName) {
    try {
        const users = await connection.query(`SELECT * FROM ${tableName}`);
        return JSON.stringify(users, null, 2);
    } catch (error) {
        console.error(error);
    }
}


queryAllData('INMUEBLES').then(
    data => console.log(data));