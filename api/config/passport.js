require("dotenv").config();

var passport         = require('passport');
var GoogleStrategy   = require('passport-google-oauth2').Strategy;

passport.serializeUser(function(user, done) {
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
});

passport.use(new GoogleStrategy(
  {
    clientID      :process.env.GOOGLE_CLIENTID,
    clientSecret  : process.env.GOOGLE_CLIENTSECRET,
    callbackURL   : '/auth/google/callback',
    passReqToCallback   : true
  }, function(req, accessToken, refreshToken, profile, done){
    console.log('profile: ', profile);
    var user = profile;
    console.log('token-------\n' , accessToken)
    console.log('token-------\n' ,refreshToken)
    console.log('provider-------\n' ,profile.provider)
    console.log('session : passport : ', req.session)
    done(null, profile.sub);
  }
));

module.exports = passport;