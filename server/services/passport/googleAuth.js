const passport = require("passport");
const config = require("config");
const GoogleStrategy = require("passport-google-oauth20");
const mongoose = require("mongoose");

const clientID = config.get("google.clientID");
const clientSecret = config.get("google.clientSecret");

const User = mongoose.model("users");

require("../../serializers/user")(passport, User);

passport.use(
  new GoogleStrategy(
    {
      clientID: clientID,
      clientSecret: clientSecret,
      callbackURL: "/auth/google/callback",
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
      } else {
        done(null, existingUser);
      }
    }
  )
);
