const { connection } = require('./connToLocalDb');

exports.QuerySchemas = async () => {
    try {
        const schemas = await connection.schema(20)
        return schemas //devuelve las tablas con su estructura
    } catch (error) {
        console.log(error)
    }
}

exports.QueryAllData = async (tableName) => {
    const str = tableName
    try {
        const schemas = await connection.query(`SELECT * FROM [${str}]`)
        return schemas
    } catch (error) {
        console.log(error);
    }
}

