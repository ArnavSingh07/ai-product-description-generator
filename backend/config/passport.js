const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/User");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "http://localhost:5000/api/auth/google/callback",
    },

    async (accessToken, refreshToken, profile, done) => {
      try {
        const email = profile.emails[0].value;

        // Find by Google ID
        let user = await User.findOne({
          googleId: profile.id,
        });

        // If not found, check by email
        if (!user) {
          user = await User.findOne({
            email,
          });
        }

        // Create user if doesn't exist
        if (!user) {
          user = await User.create({
            name: profile.displayName,
            email,
            password: "",
            googleId: profile.id,
          });
        }

        // Link Google account to existing email account
        if (!user.googleId) {
          user.googleId = profile.id;
          await user.save();
        }

        return done(null, user);
      } catch (error) {
        console.error("Google Strategy Error:", error);
        return done(error, null);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (error) {
    done(error, null);
  }
});