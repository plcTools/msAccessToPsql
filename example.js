'use strict';
 
const ADODB = require('node-adodb');
const connection = ADODB.open('Provider=Microsoft.Jet.OLEDB.4.0;Data Source=BASE.mdb;');
 
// Insert into database file
connection
  .execute('INSERT INTO Users(UserName, UserSex, UserAge) VALUES ("Newton", "Male", 25)')
  .then(data => {
    console.log(JSON.stringify(data, null, 2));
  })
  .catch(error => {
    console.error(error);
  });
 
// Insert
connection
  .execute('INSERT INTO Users(UserName, UserSex, UserAge) VALUES ("Newton", "Male", 25)', 'SELECT @@Identity AS id')
  .then(data => {
    console.log(JSON.stringify(data, null, 2));
  })
  .catch(error => {
    console.error(error);
  });
 
// Querys
connection
  .query('SELECT * FROM INMUEBLES')
  .then(data => {
    console.log(JSON.stringify(data, null, 2));
  })
  .catch(error => {
    console.error(error);
  });
 
// Query tables
connection
  .schema(20)
  .then(schema => {
    console.log(JSON.stringify(schema, null, 2));
  })
  .catch(error => {
    console.error(error);
  });

/* Async/await method */

  const ADODB = require('node-adodb');
const connection = ADODB.open('Provider=Microsoft.Jet.OLEDB.4.0;Data Source=node-adodb.mdb;');
 
async function query() {
  try {
    const users = await connection.query('SELECT * FROM Users');
 
    console.log(JSON.stringify(users, null, 2));
  } catch (error) {
    console.error(error);
  }
}
 
query();

/* Access 2000-2003 (*.mdb): Provider=Microsoft.Jet.OLEDB.4.0;Data Source=node-adodb.mdb;
Access > 2007 (*.accdb): Provider=Microsoft.ACE.OLEDB.12.0;Data Source=adodb.accdb;Persist Security Info=False; 或者   Provider=Microsoft.ACE.OLEDB.15.0;Data Source=adodb.accdb;Persist Security Info=False; */