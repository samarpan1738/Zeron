const route = require("express").Router();

route.use("/user", require("./user"));
route.use("/transaction", require("./transactions"));

module.exports = route;
