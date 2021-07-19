const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const transactionSchema = new Schema(
    {
        from: {
            type: String,
            required: true,
        },
        to: {
            type: String,
            required: true,
        },
        amount: {
            type: String,
            required: true,
        },
        status:{
            type:String,
            enum:["Complete","Pending","Failed"],
            required:true,
        },
        vendor:{
            type:String,
        }
    },
    { timestamps: { currentTime: () => Date.now() } }
);

module.exports = mongoose.model("Transaction", transactionSchema);
