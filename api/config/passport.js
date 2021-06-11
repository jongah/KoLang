const passport         = require('passport');
const GoogleStrategy   = require('passport-google-oauth2').Strategy;
const { User } = require('../models/User')
require("dotenv").config();

passport.serializeUser(function(user, done) {
  //세션생성타이밍
  done(null, user);
});
passport.deserializeUser(function(user, done) {
  done(null, user);
  //서버에서 request가 오는 경우 매번 실행하여 세션 에서 user을 꺼냄
  // // 세션에 따라 많은 정보가 필요한 경우
  // // serializeUser에서 중요 정보만 session에 저장 후
  // // deserializeUser에서 DB 등에서 정보를 요청하여 추가 정보를 전달 하도록 함
  // const userInfo = {
  //   user, // serializeUser에서 session에 저장한 정보
  //   info: 'test message' // deserializeUser에서 추가로 저장한 정보
  // };
  // done(null, userInfo);
});

passport.use(new GoogleStrategy(
  {
    clientID      :process.env.GOOGLE_CLIENTID,
    clientSecret  : process.env.GOOGLE_CLIENTSECRET,
    callbackURL   : '/auth/google/callback',
    passReqToCallback   : true
  }, function(req, accessToken, refreshToken, profile, done){
    //const user = profile;
    console.log('token-------\n' , accessToken)
    console.log('token-------\n' ,refreshToken)
    console.log('provider-------\n' ,profile.provider)
    console.log('session : passport : ', req.session)

    //==USER에 저장

    //*********
    User.findOne({ id: profile.sub }, (err, user) => {
      console.log('passport findone id비교')
      console.log('passport id : ', profile.sub)
      console.log('database id : ', User.findOne({id:profile.sub}))
      //user가 없다면!!
      if (!user) {
        console.log('회원가입이 필요한 계정입니닷')
      } else{
        console.log('이미 가입된 계정입니닷')
      }
    })
    done(null, profile.sub);
  }
));

module.exports = passport;