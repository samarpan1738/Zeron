const userController = require("../../db/controllers/user");
const { createEthereumAccount } = require("../../blockchain/login");
const route = require("express").Router();
const routeLogger = require("../../middlewares/routeLogger");

route.get("/", routeLogger, (req, res) => {
    console.log(req.user);

    if (req.user) {
        res.json({ success: true, user: req.user });
        return;
    } else
        res.json({ success: false, user: null, message: "No user available" });
});

route.patch("/register", routeLogger, async (req, res) => {
    console.log("req.body : ", req.body);

    try {
        const { email,name } = req.body;
        // User does not exist
        // First time only
        const updatedUser = await userController.findUserAndUpdate(email, {
            name: req.body.name,
            registrationPending: false,
        });
        req.user = updatedUser;
        res.status(200).json({
            success: true,
            redirect: true,
            url: "/market",
            message: "Registration successfully",
            user: updatedUser,
        });
    } catch (err) {
        res.status(500).send({
            success: false,
            message: "Unable to verify the User.",
            requestBody: req.body,
        });
    }
});


module.exports = route;
