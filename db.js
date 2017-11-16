var mysql = require('mysql');

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : '3750',
    password : 'team21',
    database : 'clc'
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;