const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
});

module.exports = mongoose.model("Transaction", transSchema);
