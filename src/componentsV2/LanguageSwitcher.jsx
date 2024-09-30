import React from 'react';

const LanguageSwitcher = ({ setLanguage }) => {
  const languages = ['Hindi', 'Telugu', 'English', 'Marathi', 'Tamil', 'Malayalam', 'Gujarati'];

  return (
    <div className="language-switcher">
      {languages.map((lang) => (
        <button key={lang} onClick={() => setLanguage(lang)}>
          {lang}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
