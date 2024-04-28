import React from 'react';
import { Link } from 'react-router-dom';
import './notfound.css'; // You can create a CSS file for styling

export const Notfound = () => {
  return (
    <div className="not-found-container">
      <h1 className="not-found-heading">404 - Page Not Found</h1>
      <p className="not-found-text">
        Oops! The page you are looking for might have been removed or is temporarily unavailable.
      </p>
      <Link to="/dashboard" className="not-found-link">Go to Home</Link>
    </div>
  );
}


