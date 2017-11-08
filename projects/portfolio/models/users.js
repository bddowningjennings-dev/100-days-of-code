let mongoose = require('mongoose');

// user schema
let userSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: false,
  },
  age:{
    type: Number,
    required: false
  }
});

let User = module.exports = mongoose.model('User', userSchema);