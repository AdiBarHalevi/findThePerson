const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  adress: {
    type: String,
    required: true,
  },
  neighbourhood:{
    type:String,
  },
  latitude:{
    type:Number,
    required:true,
  },
  longitude:{
    type:Number,
    required:true,
  }
});


const UserModel = mongoose.model("user", userSchema);

module.exports = { UserModel };