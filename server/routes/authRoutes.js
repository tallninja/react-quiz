const express = require("express");
const passport = require("passport");
const config = require("config");

const router = express.Router();

const requireLogin = require("../middlewares/requireLogin");

require("../models/User");

// github login
require("../services/passport/githubAuth");
router.get(
  "/github",
  passport.authenticate("github", { scope: ["read:user"] })
);
router.get("/github/callback", passport.authenticate("github"), (req, res) => {
  res.redirect("/home");
});

//google login
require("../services/passport/googleAuth");
router.get(
  "/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get("/google/callback", passport.authenticate("google"), (req, res) => {
  res.redirect("/home");
});

// get the current logged on user
router.get("/current_user", (req, res) => {
  res.send(req.user);
});

router.get("/logout", requireLogin, (req, res) => {
  req.logOut();
  res.redirect("/");
});

module.exports = router;
