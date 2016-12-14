const express = require('express');
const router = express.Router();

const cookieParser = require('cookie-parser');

const session = require('express-session');
const passport = require('passport')

const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

router.use(session({
  secret: 'secret llama time',
  resave: false,
  saveUninitialized: true
}));


passport.use(
  new GoogleStrategy({
    clientID: '220871929543-leo4iec3ojgdf5m0r7ook1jcm1bolonl.apps.googleusercontent.com',
    clientSecret: 'KAGK2BIR7srF03Pf7hDjlS86',
    callbackURL: 'http://localhost:3000/auth/google/callback'
  },
  function (token, refreshToken, profile, done) {
    var info = {
		  name: profile.displayName,
		  email: profile.emails[0].value,
		  photo: profile.photos ? profile.photos[0].value : undefined
		}
		User.findOrCreate({
		  where: { googleId: profile.id },
		  defaults: info
		})
		.spread(function (user) {
		  done(null, user)
		})
		.catch(done)
  })
)

passport.serializeUser(function (user, done) {
  done(null, user.id);
})

passport.deserializeUser(function (id, done) {
  User.findById(id)
  .then(function (user) {
    done(null, user);
  })
  .catch(function (err) {
    done(err);
  })
})

router.use(passport.initialize());
router.use(passport.session());

module.exports = router;