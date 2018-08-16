let mongoose = require('mongoose');

let PostSchema = new mongoose.Schema({
  message: String,
  owner: String
});

let Post = mongoose.model('Post', PostSchema);
module.exports = Post;
