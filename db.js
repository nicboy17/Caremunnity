var mysql = require('mysql');

var pool = mysql.createPool({
    connectionLimit : 50,
    host     : '74.15.46.198', //74.15.46.198
    user     : '3750',
    password : 'team21',
    database : 'clc',
    debug    :  false
});    
module.exports = pool;