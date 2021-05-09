'use strict';
 
const ADODB = require('node-adodb');
exports.connection = ADODB.open('Provider=Microsoft.Jet.OLEDB.4.0;Data Source=BASE.mdb;');

