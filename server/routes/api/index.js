const route = require("express").Router();

route.use("/users", require("./users").route);
route.use("/transactions", require("./transactions").route);

exports = { route };
