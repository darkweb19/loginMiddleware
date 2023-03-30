const express = require("express");
const app = express();
app.set("view engine", "ejs");

const session = require("express-session");
app.use(
	session({
		secret: "secret",
		saveUninitialized: true,
		resave: false,
		cookie: { secure: false, httpOnly: true },
	})
);

const isLoggedIn = (req, res, next) => {
	if (req.session.login) {
		next();
	} else {
		res.redirect("/login");
	}
};

app.use(express.urlencoded({ extended: true }));

app.get("/login", (req, res) => {
	res.render("login");
});

app.post("/login", (req, res) => {
	const { email, password } = req.body;
	if (email == "sujanstha" && password == "sujan") {
		req.session.login = true;
		res.redirect("/home");
	} else {
		res.redirect("/login");
	}
});

app.use(isLoggedIn);
app.get("/home", (req, res) => {
	res.send("Welcome User");
});

app.listen(3000, () => {
	console.log("Server started at port 3000");
});
