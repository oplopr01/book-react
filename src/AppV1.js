import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import LanguageBar from './components/LanguageBar/LanguageBar';
import Accordion from './components/Accordion/Accordion';
import ContentDisplay from './components/ContentDisplay/ContentDisplay';
import Pagination from './components/Pagination/Pagination';
import { contentData } from './data/contentData';
import './App.css';

const App = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [selectedChapter, setSelectedChapter] = useState(
    contentData[selectedLanguage].chapters[0]
  );
  const [currentPage, setCurrentPage] = useState(1);

  const handleLanguageChange = (language) => {
    setSelectedLanguage(language);
    setSelectedChapter(contentData[language].chapters[0]);
  };

  const handleChapterSelect = (chapter) => {
    setSelectedChapter(chapter);
  };

  return (
    <div className="app">
      <Navbar />
      <LanguageBar
        selectedLanguage={selectedLanguage}
        onLanguageChange={handleLanguageChange}
      />
      <div className="main-content">
        <Accordion
          chapters={contentData[selectedLanguage].chapters}
          onChapterSelect={handleChapterSelect}
        />
        <ContentDisplay content={selectedChapter.content} />
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={contentData[selectedLanguage].chapters.length}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default App;
