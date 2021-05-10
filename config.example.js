/* local */
exports.Local = {
    user: 'postrgres',
    host: 'localhost',
    database: 'dbName',
    password: '1234',
    port: 5432,
    ssl: true
};

/* Remote connection */

exports.Remote = {
    connectionString: 'postgres://.......',
    ssl: {
        rejectUnauthorized: false
    }
};

/* You need rename this file to config.js */