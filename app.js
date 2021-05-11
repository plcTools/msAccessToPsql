const { LocalConnect, RemoteConnect, CreateTable } = require('./src/postgresConnect')
const { QueryAllData, QuerySchemas } = require('./src/querysLocalDB')
const fs = require('fs');

RemoteConnect()
    .then(objconnect => objconnect)
    .catch(error => console.log(error));

QuerySchemas()
    .then((schemas) => {
        const tablesName = schemas
            .filter((el) => (el.TABLE_TYPE === 'TABLE'))
            .map((el) => el.TABLE_NAME)
        return tablesName
    })
    .then(tablesName => {

        tablesName.map((nameOfTable) => {
            QueryAllData(nameOfTable)
                .then(data => {
                    //jsonFilesGenerator(nameOfTable, data);
                    tableGenerator(nameOfTable, data)
                })
                .catch(error => console.error(error))
        })
    })
    .catch(error => error)

function tableGenerator(nameOfTable, data) {
    let campos = data[0] && Object.keys(data[0])
    let str = ""
    for (let i = 0; i < campos?.length; i++) {
        const str1 = campos[i].split(" ").join("").toLowerCase().replace(':', '')
        str = str + str1 + " " + 'VARCHAR (50)'
        i < campos.length - 1 ? str = str + ", " : str = str
    }
    const query = `CREATE TABLE IF NOT EXISTS ${nameOfTable.split(" ").join("").toLowerCase()} (${str});`

    CreateTable(query)
        .then(tableCreated => console.log(tableCreated))
        .catch(error => console.log(error))
}


function jsonFilesGenerator(nameOfTable, data) {
    const json = JSON.stringify(data, null, 2)
    fs.writeFile(`./data/${nameOfTable}.json`, json, function (err) {
        if (err) return console.log(err)
    })
}