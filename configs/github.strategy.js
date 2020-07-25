const passport = require("passport");
const GitHubStrategy = require("passport-github").Strategy;

passport.use(
  new GitHubStrategy(
    {
      clientID: "7c023ab4d7a00da0e495",
      clientSecret: "24579f9de9047efef3fe6cfb31fdccd7e70ca141",
      callbackURL: "https://trabalhofinalnodejsrenantafner.herokuapp.com/auth/github/callback"
    },
    function(accessToken, refreshToken, profile, done) {
      return done(undefined, profile);
    }
  )
);

passport.serializeUser(function(user, done) {
  done(undefined, user);
});

passport.deserializeUser(function(user, done) {
  done(undefined, user);
});
