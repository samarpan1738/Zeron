const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const userController = require("../../db/controllers/user");
const PORT = process.env.PORT || 4769;

passport.serializeUser(function (user, cb) {
    return cb(null, user._id);
});

passport.deserializeUser(async function (id, cb) {
	const user=await userController.findUser(id);
    return cb(null, user );
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
            const user = await userController.findUser(profile._json.email);
			console.log("Line 26 : ",user)
            if (user.err) {
                if (user.err.code === 404) {
                    // * New user
					// Create the user
					const user=await userController.addUser({
						name: profile._json.given_name,
                        pictureUrl: profile._json.picture,
                        _id: profile._json.email,
                        registrationPending: true,
					})
                    return cb(null,user);
                } else return cb(user.err, null);
            }

            console.log(user);
            // * Old User
            return cb(null, user);
        }
    )
);
