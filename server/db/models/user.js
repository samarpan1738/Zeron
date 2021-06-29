const mongoose = require("mongoose");
const Contact = require("./contact");

const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        _id: {
            type: String,
            required: true,
        },
        pictureUrl: {
            type: String,
        },
        password: {
            type: String,
        },
        ethereumAccountNo: {
            type: String,
        },
        ethereumPrivateKey: {
            type: String,
        },
        
        registrationPending: {
            type: Boolean,
        },
    },
    { timestamps: { currentTime: () => Date.now() } }
);

module.exports = mongoose.model("User", userSchema);
