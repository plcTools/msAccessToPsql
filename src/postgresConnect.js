const { Client, Pool } = require('pg');
const { Local, Remote } = require('./../config')
/* local */

const client = new Client(Local);
exports.LocalConnect = async () => {
    try {
        const objConnect = await client.connect()
        console.log('Local connection established')
        return objConnect
    } catch (error) {
        console.log('NO Local connection ===>', error)
    }
}

/* Remote connection */

const pool = new Pool(Remote);
exports.RemoteConnect = async () => {
    try {
        const objConnect = await pool.connect()
        console.log('Remote DB connected')
        return objConnect
    } catch (error) {
        console.log('NO remote connection ===>', error)
    }
}


/* tables creator */

exports.CreateTable = async (newTable) => {
    try {
        const tableCreated = await pool.query(newTable)
        return tableCreated
    } catch (error) {
        return error
    }
}


