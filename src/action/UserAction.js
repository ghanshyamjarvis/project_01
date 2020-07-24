const UserModel = require('../models/employee');

module.exports= {

	getAll: function (req, res) {
		UserModel.getAllRecord().then(async (data) => {
			res.json({status: true, data: data, message: "shows all record"})
		})
	},

}