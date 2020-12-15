const express = require("express");
const passport = require("passport");
const mongoose = require("mongoose");
const config = require("config");
const bodyParser = require("body-parser");
const cookieSession = require("cookie-session");

const authRoutes = require("./routes/authRoutes");

const app = express();

app.use(bodyParser.json());

// mongo
const mongoURL = config.get("mongo.URL");
mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

// setting up the session cookies
app.use(
  cookieSession({
    maxAge: 7 * 24 * 60 * 60 * 1000,
    keys: [config.get("cookieSession.key")],
  })
);

app.use(passport.initialize());
app.use(passport.session());

// our root route
app.get("/", (req, res) => {
  res.send({ welcome: "to my react quiz app" });
});

// auth route
app.use("/auth", authRoutes);

app.listen(5000);
