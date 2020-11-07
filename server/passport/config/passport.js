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
			const user = await User.findUser(profile._json.email);

			if (user.err) {
				if (user.err.code == 400) {
					// * New user
					return cb(null, {
						name: profile._json.given_name,
						picture: profile._json.picture,
						email: profile._json.email,
						isNew: true,
					});
				} else return cb(user.err, null);
			}

			console.log(user);
			// * Old User
			return cb(null, user);
		}
	)
);
