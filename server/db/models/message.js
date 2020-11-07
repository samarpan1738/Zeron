const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const messageSchema = new Schema(
	{
		from: {
			type: Schema.Types.ObjectId,
			ref: "User",
			required: true,
		},
		content: {
			type: String,
			required: true,
		},
	},
	{
		timestamps: { currentTime: () => Date.now() },
	}
);

module.exports = messageSchema;
