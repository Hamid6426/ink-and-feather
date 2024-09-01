// backend/models/User.js

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  // Add any other user-related fields you need (e.g., name, profile picture, etc.)
});

const User = mongoose.model('User', userSchema);

module.exports = User;
