import React from 'react';
import './ContentDisplay.css';

const ContentDisplay = ({ content }) => {
  return (
    <div className="content-display">
      <h2>{content.title}</h2>
      <p>{content.text}</p>
    </div>
  );
};

export default ContentDisplay;
