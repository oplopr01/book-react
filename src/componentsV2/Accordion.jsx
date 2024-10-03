import React, { useState } from 'react';

const Accordion = ({ chapters, onSectionClick }) => {
  const [expandedChapter, setExpandedChapter] = useState(null);

  const toggleChapter = (index) => {
    setExpandedChapter(expandedChapter === index ? null : index);
  };

  return (
    <div className="accordion">
      {chapters.map((chapter, index) => (
        <div key={index}>
          <h3 onClick={() => toggleChapter(index)}>{chapter.title}</h3>
          {expandedChapter === index && (
            <ul>
              {chapter.sections.map(section => (
                <li key={section.id} onClick={() => onSectionClick(section.id)}>
                {section.title}
              </li>
              
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
