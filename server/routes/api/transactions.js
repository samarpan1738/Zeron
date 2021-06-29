// const{ Transaction } = require("../../db/models");
const route = require("express").Router();
const transactionController =require("../../db/controllers/transactions");

route.post("/send", transactionController.sendToken);

module.exports = route;
