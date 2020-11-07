const mongoose = require("mongoose");
const Contact = require("./contact");

const Schema = mongoose.Schema;

const userSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	_id: {
		type: String,
		required: true
	},
	picture: {
		type: String,
	},
	password: {
		type: String,
	},
	accountNo: {
		type: String,
	},
});

module.exports = mongoose.model("User", userSchema);
