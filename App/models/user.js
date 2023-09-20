const mongoose = require('mongoose')

const {Schema} = mongoose

const userSchema = new Schema({

    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    email:{
        type: String,
        required: true
    },
    city:{
        type: String,
        required: true
    },
    country:{
        type: String,
        required: true
    },
    phonenumber:{
        type: Number,
        required: true
    },
    proffesion:{
        type: String,
        required: true
    },
    socialmedia:{
        type: String,
        required: true
    }
})

const User = mongoose.model('User',userSchema)

module.exports = User