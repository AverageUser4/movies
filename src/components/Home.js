import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <main className="page">
    
      <h3>Welcome to Epic Movies!</h3>
      <Link to="/search">Search for your favorite movie!</Link>
      <span>or</span>
      <Link to="/about">Learn more about us!</Link>

    </main>
  );
}

export default Home