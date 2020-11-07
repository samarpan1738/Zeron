const express = require("express");
const app = express();
const PORT = process.env.PORT || 4769;

const db = require("./db/db");

const dotenv = require("dotenv").config();
const expand = require("dotenv-expand");
expand(dotenv);

const Auth = require("./routes/auth/auth");
require("./passport/config/passport");

app.use("/auth", Auth);

app.get("/", (req, res) => {
	res.send("Hello");
});
app.get("/api",)


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
