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
