import React from 'react';
import './Accordion.css';

const Accordion = ({ chapters, onChapterSelect }) => {
  return (
    <div className="accordion">
      {chapters.map((chapter, index) => (
        <div key={index} className="accordion-item">
          <div
            className="accordion-header"
            onClick={() => onChapterSelect(chapter)}
          >
            {chapter.title}
          </div>
          <div className="accordion-content">
            {chapter.sections.map((section, idx) => (
              <div key={idx}>{section}</div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
