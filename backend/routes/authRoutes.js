// backend/routes/authRoutes.js

const express = require('express');
const passport = require('passport');
const router = express.Router();

// Import your User model (assuming you've defined it)
const User = require('../models/User');

// Handle user sign-up
router.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Create a new user (you'll need to hash/salt the password)
    const newUser = new User({ email, password });
    await newUser.save();

    // Respond with success message or user data
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error during sign-up:', error);
    res.status(500).json({ error: 'Sign-up failed' });
  }
});

// Handle user login
router.post('/login', passport.authenticate('local', { session: true }), (req, res) => {
  // User authenticated successfully
  res.status(200).json({ message: 'Login successful', user: req.user });
});

// Handle user logout
router.get('/logout', (req, res) => {
  req.logout(); // Passport clears the session
  res.status(200).json({ message: 'Logout successful' });
});

module.exports = router;
