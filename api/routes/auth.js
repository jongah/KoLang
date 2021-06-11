var express = require('express');
var router = express.Router();
var passport = require('../config/passport.js');

router.get('/loginPage', function (req, res) {
    res.render('auth/loginPage');
});

router.get('/logout', function (req, res) {
    req.logout();
    res.redirect('/');
});

router.get('/google',
    passport.authenticate('google', { scope: ['profile'] })
);

router.get('/google/callback',
    passport.authenticate('google'), authSuccess
);

function authSuccess(req, res) {
    res.redirect('/');
}

//=========로그인중인지 체크
const authenticateUser = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        console.log('session : 로그아웃세션 : ', req.session)
        res.status(301).redirect('/');
    }
};

router.get('/test', authenticateUser, (req, res, next) => {
    console.log('session : 세션체크하는중 : ', req.session)
    res.render('test');
});
//===========

module.exports = router;