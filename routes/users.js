const mongoose = require('mongoose');
const plm = require('passport-local-mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/pin").then(()=> {
  console.log("userdb connected");

}).catch((err)=>{
  console.log(err);
});

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  name: String,
  password: String,
  
  profileImage: String,
  contact: Number,
  board: {
    type: Array,
    default: []

  },
  posts:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "post"
    }
  ]
});

userSchema.plugin(plm);

module.exports = mongoose.model('User', userSchema);

 
