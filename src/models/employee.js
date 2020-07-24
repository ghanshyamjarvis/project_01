  const mysql = require("mysql");
  const connection = require('../models/db');

  module.exports = {

  	getAllRecord: function () {
  		return new Promise((resolve) => {
  			const sql = 'select * from user';
  			connection.query(sql, (error, data) => {
  				resolve((error) ? [] : (data == null) ? [] : data);
  			})
  		})
  	},

  }
