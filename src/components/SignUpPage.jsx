// src/components/SignUpPage.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For redirection


const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Get access to history for redirection

  const handleSignUp = () => {
    // Handle form submission (e.g., send data to backend)
    console.log('User signed up with:', email, password);
    // Redirect to dashboard after successful sign-up
    navigate('/dashboard');
  };

  return (
    <div className="signup-page">
      <h2>Sign Up</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignUp}>Sign Up</button>
    </div>
  );
};

export default SignUpPage;
