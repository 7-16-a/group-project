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
const db = mongoose.connection;

require("./models/User");
require("./models/Post");

let posts = require("./routes/api/posts");
let users = require("./routes/api/users");

// PRODUCTION ONLY (uncomment for heroku)
app.use(express.static(path.join(__dirname, "client/build")));

// app middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Development mode port
// const port = process.env.PORT || 5000;
// app.listen(port)

//DB Config
// const db = require("./config/keys").mongoURI;

// Heroku addon URI
// mongodb://<dbuser>:<dbpassword>@ds125892.mlab.com:25892/heroku_tsghbqbm

// Mongoose connect to db
mongoose.connect('mongodb://admin:adminADMIN123@ds141671.mlab.com:41671/blog_7-16-a', function (err) {
  if (err) {
    console.log('DID NOT connect') + (err);
  } else {
    console.log('C O N N E C T E D');
  }
});

//Use Routes
app.use("/api/posts", posts);
app.use("/api/users", users);

// PRODUCTION ONLY (uncomment for heroku)
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

module.exports = app;

