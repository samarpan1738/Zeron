const mongoose = require("mongoose");
const Transaction = require("../models/transaction");
const { TransferFrom, Transfer } = require("../../blockchain/interact");
console.log(process.env.ZERON_DEPLOYED_URL);
async function sendToken(req, res, next) {
    try {
        const { from, to, amount, privateKey,vendor } = req.body;
        console.log(req.body);
        const transactionRequest = {
            from,
            to,
            amount,
            status: "Pending",
            vendor
        };
        try {
            const transferResponse = await Transfer(
                to,
                amount,
                from,
                privateKey,
                process.env.ZERON_DEPLOYED_URL
            );
        } catch (err) {
            transactionRequest.status = "Failed";
        }
        const transaction = await Transaction.create(transactionRequest);
        res.status(201).json({ success: true, transaction });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Error creating transaction",
        });
    }
}

async function getAllTransactions(req, res, next) {
    try {
        const transactions=await Transaction.find({
            $or: [
                { from: req.user.ethereumAccountNo },
                { to: req.user.ethereumAccountNo },
            ],
        });
        res.status(201).json({ success: true, transactions });
    } catch (err) {
        console.log(err);
        res.status(500).json({
            success: false,
            message: "Error finding transactions",
        });
    }
}

module.exports = {
    sendToken,
    getAllTransactions
};
