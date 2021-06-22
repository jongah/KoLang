var express = require('express');
var router = express.Router();
var passport = require('../config/passport.js');

//=========로그인중인지 체크
const authenticateUser = (req, res, next) => {
    if (req.isAuthenticated()) {
        next();
    } else {
        res.send("<script>alert('로그인 해주세요');location.href='/auth/google';</script>");
    }
};

router.get('/start', authenticateUser, (req, res, next) => {
    res.render('starttest');
});
router.get('/my', authenticateUser, (req, res, next) => {
    res.render('profile');
});
router.get('/dan', function (req, res) {
    res.render('wordquizgame');
});
router.get('/modify', function (req, res) {
    res.render('modify_profile');
});


router.get('/test', authenticateUser, (req, res, next) => {
    console.log('session : 세션체크하는중 : ', req.session)
    res.render('routertest', { user: req.user });
});
//===========
router.get('/login', authenticateUser, (req, res, next) => {
    if (req.isAuthenticated()) {
        let u = req.session.passport.user[1];
        res.send("<script>alert('" + u + "님로그인 중입니다.');location.href='/';</script>");
    } else {
        res.render('auth/google');
    }
});

router.get('/logout', authenticateUser, (req, res, next) => {
    let u = req.session.passport.user[1];
    console.log(req.session)
    req.logout();
    res.send("<script>alert('" +u+"님 로그아웃 했습니다.');location.href='/';</script>");
});

router.get('/google',
    passport.authenticate('google', { scope: ['profile'] })
);

router.get('/google/callback',
    passport.authenticate('google'), authSuccess
);

function authSuccess(req, res) {
    let u = req.session.passport.user[1];
    res.send("<script>alert('" +u+"님 로그인 했습니다.');location.href='/';</script>");
}



module.exports = router;