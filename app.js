const { LocalConnect, RemoteConnect } = require('./src/postgresConnect')
const { QueryAllData, QuerySchemas } = require('./src/querysLocalDB')


RemoteConnect()
    .then(objconnect => objconnect)

QuerySchemas()
    .then((schemas) => {
        const tablesName = schemas
            .filter((el) => (el.TABLE_TYPE === 'TABLE'))
            .map((el) => el.TABLE_NAME)
        return tablesName
    }).then(tablesName => {
        tablesName.map((nameOfTable) => {
            QueryAllData(nameOfTable)
                .then(data => {

                    console.log(
                        {
                            tableName: nameOfTable,
                            shema: data
                        })
                }
                );
        })

    })



