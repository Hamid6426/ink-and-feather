// src/components/LandingPage.js

import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <h1>Welcome to My Blog!</h1>
      <p>Your go-to place for all things awesome.</p>
      <Link to="/signup">
        <button>Get Started</button>
      </Link>
    </div>
  );
};

export default LandingPage;
