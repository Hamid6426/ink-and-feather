// backend/server.js

const express = require('express');
const session = require('express-session');
//const mongoose = require('mongoose');
require('dotenv').config(); // Load environment variables from .env file
const passport = require('passport');
const authRoutes = require('./routes/authRoutes'); // Your authentication routes
const postRoutes = require('./routes/postRoutes'); // Your post-related routes
const { MongoClient, ServerApiVersion } = require('mongodb');

// Use the MONGODB_URI environment variable
const uri = process.env.MONGODB_URI; // Corrected this line

const app = express();

// Middleware setup
app.use(express.json()); // Parse JSON requests
app.use(session({
  secret: 'your-secret-key', // Change this to a secure secret
  resave: false,
  saveUninitialized: false,
}));
app.use(passport.initialize());
app.use(passport.session());

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

// Routes
app.use('/api/auth', authRoutes); // Prefix all auth routes with '/api/auth'
app.use('/api/posts', postRoutes); // Prefix all post-related routes with '/api/posts'

// Error handling middleware (add your own error handling logic)
app.use((err, req, res, next) => {
  console.error('Error:', err);
  res.status(500).json({ error: 'Something went wrong' });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
