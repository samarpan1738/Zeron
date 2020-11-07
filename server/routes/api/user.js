const User = require("../../db/controllers/user");
const { createAccount } = require("../../blockchain/login");
const route = require("express").Router();

route.get("/user", (req, res) => {
	console.log(req.user);

	if (req.user) {
		res.json(req.user);
		return;
	} else res.json({ err: "No user available" });
});

route.post("/register", async (req, res) => {
	console.log("here");

	try {
		const emailId = req.body.email;
		const user = await User.findUser(emailId);

		if (user.err) {
			const { address } = createAccount();

			const updatedUser = await User.addUser(emailId, {
				accountNo: address,
				name: req.body.name,
				_id: req.body.email,
				picture: req.body.picture,
			});
			req.user = updatedUser;
		}
		res.json({ redirect: true, url: "/market" });
	} catch (err) {
		res.status(500).send({ err: "Unable to verify the User." });
	}
});

module.exports = route;
