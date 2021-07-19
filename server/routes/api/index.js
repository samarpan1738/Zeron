const route = require("express").Router();
console.log("index.js")
route.use("/user", require("./user"));
route.use("/transaction", require("./transactions"));

module.exports = route;
