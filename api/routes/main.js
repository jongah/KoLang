require("dotenv").config();
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.render('main', { user: req.user });
});

router.get('/test', function (req, res) {
    console.log("/process/product")
    if ('user' in req.session.passport)       //세션에 유저가 있다면
    {
        console.log("*******유저 있따*******")
    }
    else {
        console.log('유저없음');
    }
});

module.exports = router;