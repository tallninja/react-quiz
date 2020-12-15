const passport = require("passport");
const mongoose = require("mongoose");
const config = require("config");
const GithubStrategy = require("passport-github2");

const clientID = config.get("github.clientID");
const clientSecret = config.get("github.clientSecret");

const User = mongoose.model("users");

require("../../serializers/user")(passport, User);

passport.use(
  new GithubStrategy(
    {
      clientID: clientID,
      clientSecret: clientSecret,
      redirectURL: "/auth/github/callback",
    },
    async (accessToken, refreshToken, profile, done) => {
      const existingUser = await User.findOne({ authID: profile.id });
      if (!existingUser) {
        const newUser = await new User({
          authID: profile.id,
          displayName: profile.displayName,
          imageURL: profile.photos[0].value,
        }).save();
        done(null, newUser);
      }
      done(null, existingUser);
    }
  )
);
