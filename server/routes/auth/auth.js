const express = require("express");
const router = express.Router();

const passport = require("passport");

const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });

const isLoggedIn = (req, res, next) => {
	if (req.user) {
		next();
	} else {
		res.redirect("/auth");
	}
};

const wantToAuth = (req, res, next) => {
	if (req.user) {
		res.redirect("/auth/success");
	} else {
		next();
	}
};

router.get(
	"/google",
	passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
	"/google/callback",
	passport.authenticate("google", { failureRedirect: "/auth/failed" }),
	(req, res) => {
		if (req.user) {
			if (req.user.isNew) {
				res.redirect("http://localhost:3000/register");
				return;
			} else {
				res.redirect("http://localhost:3000/market");
				return;
			}
		} else {
			console.log("User not in session");
			res.redirect("http://localhost:3000/");
			return;
		}
	}
);

router.get("/failed", (req, res) => {
	res.redirect("http://localhost:3000/");
});

router.get("/logout", (req, res) => {
	req.user = null;
	req.logout();
	res.redirect("http://localhost:3000/");
});

module.exports = router;
