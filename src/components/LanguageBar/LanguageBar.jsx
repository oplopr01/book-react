import React from 'react';
import './LanguageBar.css';

const LanguageBar = ({ selectedLanguage, onLanguageChange }) => {
  return (
    <div className="language-bar">
      <button
        className={selectedLanguage === 'en' ? 'active' : ''}
        onClick={() => onLanguageChange('en')}
      >
        English
      </button>
      <button
        className={selectedLanguage === 'hi' ? 'active' : ''}
        onClick={() => onLanguageChange('hi')}
      >
        Hindi
      </button>
      {/* Add more languages as needed */}
    </div>
  );
};

export default LanguageBar;
