const mongoose = require("mongoose");
const Transaction = require("../models/transaction");
const {TransferFrom} =require("../../blockchain/interact")

async function sendToken(req, res, next) {
    try {
        const { from, to, amount } = req.body;
        const transferResponse=await TransferFrom(from,to,amount,"","","");
        const transaction = await Transaction.create({
            from,
            to,
            amount,
        });
        res.status(201).json({success:true,transaction});
    } catch (err) {
        console.log(err)
        res.status(500).json({success:false,message:"Error creating transaction"});
    }
}

module.exports = {
    sendToken,
};
