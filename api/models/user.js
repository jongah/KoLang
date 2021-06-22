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
        type: String,
        unique: 1
    },
    u_name:{
        type: String
    },
    email:{
        type: String
    },
    provider:{
        type: String
    },
    img:{
        type: String, 
        default: '/img/jongah.jpg'
    },
    color:{
        type: Number,
        default: 1
    },
    content:[contentSchema]
});

const User = mongoose.model('User', userSchema)
module.exports = { User }
