import React from 'react';

const ContentArea = ({ content }) => {
  return (
    <div className="content-area">
      <h2>Content</h2>
      <p>{content || 'Select a section to view content'}</p>
    </div>
  );
};

export default ContentArea;
    