const express = require("express");
const app = express();
const db = require("./db/db");
const passport = require("passport");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const mongoose = require("mongoose");

const dotenv = require("dotenv").config();
const expand = require("dotenv-expand");
expand(dotenv);

var cors = require("cors");
app.use(cors());
// Body Parsers
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
	session({
		name: "zeron",
		secret: process.env.SECRET_KEY,
		resave: true,
		saveUninitialized: true,
		store: new MongoStore({
			mongooseConnection: mongoose.connection,
			url: process.env.DB_URL,
		}),
	})
);

app.use(passport.initialize());
app.use(passport.session());

// Auth
const Auth = require("./routes/auth/auth");
require("./passport/config/passport");
app.use("/auth", Auth);

const ApiRoute = require("./routes/api/index");
app.use("/api", ApiRoute);

// DB init

const PORT = 4769;
db.connect()
	.then(() => {
		app.listen(PORT, () => {
			console.log(`Server started at http://localhost:${PORT}`);
		});
	})
	.catch((err) => {
		console.log("Unable to connect to Database.\n\n", err);
		process.exit(1);
	});
