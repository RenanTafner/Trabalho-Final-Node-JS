const passport = require("passport");
const GitHubStrategy = require("passport-github").Strategy;

passport.use(
  new GitHubStrategy(
    {
      clientID: "Iv1.2fd652f391dd888c",
      clientSecret: "c333044c05cbbb39385120ab478b32c7b159cf2b",
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
