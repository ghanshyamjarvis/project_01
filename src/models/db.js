const mysql = require('mysql');

const connection = mysql.createConnection({
	host:'127.0.0.1',
	user:'root',
	password:'password',
	database: 'Employee'
})

connection.connect();

console.log("Connection Done")

module.exports = connection;