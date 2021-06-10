const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport');
const session = require('express-session');
require("dotenv").config();

const bodyParser = require('body-parser')
const { User } = require('./models/User')

const app = express()
const port = 4000;
const path = require("path");

mongoose.connect(process.env.DB_PATH, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Connected...')).catch(err => console.log(err))

//정보를 서버에서 분석할 수 있도록
//데이터 분석해서 가져올 수 있도록
app.use(bodyParser.urlencoded({ extended: true }));
//json타입을 분석
app.use(bodyParser.json());

//ejs설정
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
//Session 설정
app.use(session({ secret: 'MySecret', resave: false, saveUninitialized: true }));
//passport 설정
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', function(req, res) {
//   return res.render('main', {
//   });
// });
//라우터 설정
app.use('/', require('./routes/main'));
app.use('/auth', require('./routes/auth'));

app.post('/api/register', (req, res) => {
  //클라이언트에서 보내주는 정보들을 가져온뒤 DB에 넣기
  const user = new User(req.body)

  //user 모델에 저장
  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err })
    return res.status(200).json({
      success: true
    })
  })

})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))