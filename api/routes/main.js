require("dotenv").config();
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('main', { user: req.user });
});

router.get('/start', function (req, res) {
    res.render('Start');
});

router.get('/my', function (req, res) {
    res.render('My');
});

router.get('/dev', function (req, res) {
    res.render('Dev');
});

router.get('/search', function (req, res) {
    res.render('Search');
});



router.get('/test', function (req, res) {
    console.log("/test")
    //세션에 passport가 없는지 먼저 검사 후 passport안에 유저가 없는지 확인한다. 처음에 passport가 없어서 오류가 발생한다.
    if (!('passport' in req.session) || !('user' in req.session.passport))       
    {
        console.log("*******유저 없따*******")
    }
    else {
        console.log('유저있음');
    }
});

module.exports = router;