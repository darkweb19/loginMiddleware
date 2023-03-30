// //!Task for mongo

const express = require("express");
const app = express();

// //!Routing level middle warer
// //Simplifying those middleware function
// const hasName = (req, res, next) => {
// 	if (!req.query.name) return res.send("Please provide a name");
// 	next();
// };

// const helloUser = (req, res) => {
// 	res.send(`Hello User ${req.query.name}!!!`);
// };

// const helloClient = (req, res) => {
// 	res.send(`Hello client ${req.query.name}!!!`);
// };

// //!application level middleware
// //every app.use are middleware
// app.use(hasName);
// //before routing hasName function must be run

// //for user
// app.get("/user", helloUser);

// //for client

// app.get("/client", helloClient);

// //!Listener
// app.listen(3000, (req, res) => {
// 	console.log("Server started at port 3000");
// });

//!Cookie-parser
// var cookieParser = require("cookie-parser");

// app.use(cookieParser());

// app.get("/", (req, res) => {
// 	// res.cookie("name", "ram", {
// 	// 	maxAge: 1000 * 60 * 60 * 24,
// 	// 	httpOnly: true,
// 	// 	secure: true,
// 	// });
// 	res.cookie("name", "", {
// 		maxAge: 0, //this deletes the cookies
// 	});
// 	res.send("Cookie Created");
// });

// app.get("/welcome", (req, res) => {
// 	res.send(req.cookies.name);
// });

//!express session code
const session = require("express-session");
app.use(
	session({
		secret: "secret",
		saveUninitialized: true,
		resave: false,
		cookie: { secure: false, httpOnly: true },
	})
);

app.get("/session", (req, res) => {
	req.session.name = "Sujan";
	res.send("Session is set");
});

app.get("/get-session", (req, res) => {
	res.send(req.session.name);
});

app.listen(3000, () => {
	console.log("Server Started at  port 3000");
});
