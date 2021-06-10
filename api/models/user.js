const mongoose = require('mongoose');
const { Schema } = mongoose;

const contentSchema = new Schema({
    c_name:{
        type: String
    },
    text:{
        type: String
    },
    w_score:{
        type: Number
    },
    s_score:{
        type: Number
    }
})

const userSchema = new Schema({
    id:{
        type: String
    },
    accessToken:{
        type: String
    },
    u_name:{
        type: String
    },
    img:{
        type: String, 
        default: '../public/testImg.jpg'
    },
    color:{
        type: Number
    },
    content:[contentSchema]
});

const User = mongoose.model('User', userSchema)
module.exports = { User }

// const mongoose = require("mongoose"); // mongoose 불러오기

// // Schema 생성
// const UserSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//     required: true,
//   },
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   color: {
//     type: String,
//     required: true,
//     unique: true,
//     default: "y"
//   },
// });

// // model을 export 해주기
// module.exports = User = mongoose.model("user", UserSchema);