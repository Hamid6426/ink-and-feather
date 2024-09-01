// backend/models/Post.js

const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  // Add any other post-related fields you need (e.g., author, tags, etc.)
});

const Post = mongoose.model('Post', postSchema);

module.exports = Post;
