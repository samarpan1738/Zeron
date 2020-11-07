const User  = require("../../db/models/user");
const route = require("express").Router();

route.get("/empty", (req, res) => {

})


route.get("/account", (req, res) => {
    const user = await User.findOneAndUpdate()
    res.send("WOW")
})

exports = { route };
