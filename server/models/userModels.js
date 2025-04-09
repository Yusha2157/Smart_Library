const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

  name : {
    type : String , 
    require : [true , 'please add a name']
    },

  email : { 
    type: String ,
    required : [true , 'enter your email'], 
    unique: true
    },

  password : {
    type : String,
    required : [true , 'enter your password'],
    },

  isAdmin : { 
    type: Boolean, 
    default: false 
    },

  rollNumber : {
    type : String
    },
},
{
    timestamps : true
});

module.exports = mongoose.model('User', userSchema);