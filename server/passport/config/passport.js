const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../../db/controllers/user");
const PORT = process.env.PORT || 4769;

passport.serializeUser(function (user, cb) {
	// Yha kuch krna hoga
	console.log(user);
	return cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
	console.log("deserialise =>", obj);
	// Yha kuch krna hoga
	return cb(null, obj);
});

passport.use(
	new GoogleStrategy(
		{
			clientID: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			callbackURL: `http://localhost:4769/auth/google/callback`,
		},
		async (accessToken, refreshToken, profile, cb) => {
			// const user = User.findOneOrInsert(pr)
			const user = await User.findOneOrInsert(
				profile._json.email,
				profile._json
			);

			console.log(use);

			return cb(null, user);
		}
	)
);
