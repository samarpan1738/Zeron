const User = require("../../db/controllers/user");
const { createAccount } = require("../../blockchain/login");
const route = require("express").Router();

route.get("/user", (req, res) => {
	if (req.user) {
		res.json(req.user);
		return;
	} else res.json({ err: "No user available" });
});

route.post("/register", async (req, res) => {
	try {
		console.log(req.body);

		const emailId = req.body.email;
		const user = await User.findUser(emailId);

		if (user.err) {
			const { address } = createAccount();
			const updatedUser = await User.findUserAndUpdate(emailId, {
				accountNo: address,
				name: req.body.name,
				_id: req.body.email,
				picture: req.body.picture,
			});
			req.user = updatedUser._doc;
			console.log(updatedUser._doc)
			res.json({ msg: "Done", ...updatedUser._doc });
			
			return;
		} else {
			res.send(user.err);
		}
	} catch (err) {
		res.status(500).send(err);
	}
});

module.exports = route;
