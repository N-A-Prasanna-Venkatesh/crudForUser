const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    firstName:{
        type: String,
        required:true
    },
    lastName:{
        type: String,
        required:true
    },
    displayName:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    mobileNumber:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
});


module.exports = mongoose.model('user',userSchema);