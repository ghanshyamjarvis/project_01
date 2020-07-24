
const express =require('express');
const router = express.Router();
const UserAction = require('../action/UserAction');
const connection = require("../models/db");



router.get('/list', function(request, response) {
	let sql = "SELECT * FROM user";
	connection.query(sql, (err, results) => {
		response.render('list',{
			results:results
		})
	})
});

router.get('/', UserAction.getAll);

module.exports = router;
