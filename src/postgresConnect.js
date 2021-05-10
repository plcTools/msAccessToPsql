const { Client, Pool } = require('pg');
const { Local, Remote } = require('./../config')
/* local */

exports.LocalConnect = async () => {
    const client = new Client(Local);
    try {
        const objConnect = await client.connect()
        console.log('Local connection established')
        return objConnect
    } catch (error) {
        console.log('NO Local connection ===>', error)
    }
}

/* Remote connection */

exports.RemoteConnect = async () => {
    const pool = new Pool(Remote);
    try {
        const objConnect = await pool.connect()
        console.log('Remote DB connected')
        return objConnect
    } catch (error) {
        console.log('NO remote connection ===>', error)
    }
}