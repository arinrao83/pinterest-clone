const mongoose = require('mongoose');




const postSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'post'
  },
  description: String,
  title: String,
  image:String
});



module.exports = mongoose.model('post', postSchema);

 
