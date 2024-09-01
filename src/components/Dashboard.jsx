// src/components/Dashboard.js

import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Install axios: npm install axios

const Dashboard = () => {
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    // Fetch user posts (replace with your actual API call)
    axios.get('/api/posts') // Adjust the endpoint
      .then((response) => {
        setUserPosts(response.data); // Assuming response.data is an array of posts
      })
      .catch((error) => {
        console.error('Error fetching user posts:', error);
      });
  }, []);

  return (
    <div className="dashboard">
      <h2>Your Posts</h2>
      <ul>
        {userPosts.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
