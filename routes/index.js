var express = require( 'express' );
var router = express.Router();
var passport = require( 'passport' );

function ensureAuthenticated (req, res, next) {
  if (req.isAuthenticated()) {
  // req.user is available for use here
  return next(); }
  // denied. redirect to login
  res.redirect( '/' )
  }

/* GET home page. */
router.get( '/' , function (req, res, next) {
res.render( 'index' , { title: 'Express' });
});

router.get( '/auth/github' ,
passport.authenticate( 'github' ));
router.get( '/auth/github/callback' ,
passport.authenticate( 'github' , { failureRedirect: '/login' }),

function (req, res) {
// Successful authentication, redirect home.
res.redirect( '/admin' );
});

router.get( '/admin' , ensureAuthenticated, function (req, res) {
  res.redirect( '/todoLists/' + req.session.passport.user.username )
});

module.exports = router;
