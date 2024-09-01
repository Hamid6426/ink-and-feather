// backend/routes/postRoutes.js

const express = require('express');
const router = express.Router();

// Import your Post model (assuming you've defined it)
const Post = require('../models/Post');

// Handle creating a new post
router.post('/', async (req, res) => {
  try {
    const { title, content } = req.body;

    // Create a new post
    const newPost = new Post({ title, content });
    await newPost.save();

    // Respond with success message or post data
    res.status(201).json({ message: 'Post created successfully', post: newPost });
  } catch (error) {
    console.error('Error creating post:', error);
    res.status(500).json({ error: 'Post creation failed' });
  }  
});

// Handle editing a post
router.put('/:postId', async (req, res) => {
  try {
    const { title, content } = req.body;
    const postId = req.params.postId;

    // Find the post by ID and update its title and content
    const updatedPost = await Post.findByIdAndUpdate(postId, { title, content }, { new: true });

    // Respond with success message or updated post data
    res.status(200).json({ message: 'Post updated successfully', post: updatedPost });
  } catch (error) {
    console.error('Error updating post:', error);
    res.status(500).json({ error: 'Post update failed' });
  }
});

// Handle deleting a post
router.delete('/:postId', async (req, res) => {
  try {
    const postId = req.params.postId;

    // Find the post by ID and remove it
    await Post.findByIdAndRemove(postId);

    // Respond with success message
    res.status(200).json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Error deleting post:', error);
    res.status(500).json({ error: 'Post deletion failed' });
  }
});

module.exports = router;
