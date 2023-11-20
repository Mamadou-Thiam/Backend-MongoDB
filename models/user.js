const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  prenom: {
    type: String,
    required: true
  },
  nom: {
    type: String,
    required: true
  },
  profession: {
    type: String,
    required: true
  },
  age:{
    type:Number,
    required:true
  }
});

module.exports = user = mongoose.model('user', userSchema);