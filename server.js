// module imports
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const morgan = require("morgan");
const app = express();
// const db = mongoose.connection;

require("./models/User");

const posts = require("./routes/api/posts");
const users = require("./routes/api/users");

// PRODUCTION ONLY
app.use(express.static(path.join(__dirname, "client/build")));

// app middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// PRODUCTION ONLY
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

// Development mode port
// const port = process.env.PORT || 5000;
// app.listen(port)

//DB Config
// const db = require("./config/keys").mongoURI;

// Mongoose connect to db
// mongoose.connect('mongodb://admin:adminADMIN123@ds141671.mlab.com:41671/blog_7-16-a', function(err) {
//   if (err) {
//     console.err(err);
//   } else {
//     console.log('Connected');
//   }
// });

mongoose.connect('mongodb://admin:adminADMIN123@ds141671.mlab.com:41671/blog_7-16-a');




//Use Routes
app.use("/api/posts", posts);
app.use("/api/users", users);

//Test route
app.get("/", (req, res) => res.send("Hello! This route works!"));

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

module.exports = app;

