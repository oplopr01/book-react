import React, { useState, useEffect } from 'react';
import Accordion from './componentsV2/Accordion';
import ContentArea from './componentsV2/ContentArea';
import Navbar from './componentsV2/Navbar';
import LanguageSwitcher from './componentsV2/LanguageSwitcher';
import './App.css';

const App = () => {
  const [selectedContent, setSelectedContent] = useState('');
  const [selectedSectionId, setSelectedSectionId] = useState(null);  // Track selected section ID
  const [language, setLanguage] = useState('English');
  const contentByLanguage = {
    English: {
      chapters: [
        {
          title: 'Chapter 1',
          sections: [
            { id: '1.1', title: 'Section 1.1: Overview', content: 'Overview content in English' },
            { id: '1.2', title: 'Section 1.2: Analysis', content: 'Analysis content in English' },
            { id: '1.3', title: 'Section 1.3: Summary', content: 'Summary content in English' }
          ]
        },
        {
          title: 'Chapter 2',
          sections: [
            { id: '2.1', title: 'Section 2.1: Overview', content: 'Overview content in English' },
            { id: '2.2', title: 'Section 2.2: Analysis', content: 'Analysis content in English' },
            { id: '2.3', title: 'Section 2.3: Summary', content: 'Summary content in English' }
          ]
        }
      ]
    },
    Telugu: {
      chapters: [
        {
          title: 'అధ్యాయము 1',
          sections: [
            { id: '1.1', title: 'విభాగం 1.1: అవలోకనం', content: 'అవలోకనం కంటెంట్ తెలుగు లో' },
            { id: '1.2', title: 'విభాగం 1.2: విశ్లేషణ', content: 'విశ్లేషణ కంటెంట్ తెలుగు లో' },
            { id: '1.3', title: 'విభాగం 1.3: సారాంశం', content: 'సారాంశం కంటెంట్ తెలుగు లో' }
          ]
        },
        {
          title: 'అధ్యాయము 2',
          sections: [
            { id: '2.1', title: 'విభాగం 2.1: అవలోకనం', content: 'అవలోకనం కంటెంట్ తెలుగు లో' },
            { id: '2.2', title: 'విభాగం 2.2: విశ్లేషణ', content: 'విశ్లేషణ కంటెంట్ తెలుగు లో' },
            { id: '2.3', title: 'విభాగం 2.3: సారాంశం', content: 'సారాంశం కంటెంట్ తెలుగు లో' }
          ]
        }
      ]
    },
    Hindi: {
      chapters: [
        {
          title: 'अध्याय 1',
          sections: [
            { id: '1.1', title: 'अनुभाग 1.1: अवलोकन', content: 'अवलोकन सामग्री हिंदी में' },
            { id: '1.2', title: 'अनुभाग 1.2: विश्लेषण', content: 'विश्लेषण सामग्री हिंदी में' },
            { id: '1.3', title: 'अनुभाग 1.3: सारांश', content: 'सारांश सामग्री हिंदी में' }
          ]
        },
        {
          title: 'अध्याय 2',
          sections: [
            { id: '2.1', title: 'अनुभाग 2.1: अवलोकन', content: 'अवलोकन सामग्री हिंदी में' },
            { id: '2.2', title: 'अनुभाग 2.2: विश्लेषण', content: 'विश्लेषण सामग्री हिंदी में' },
            { id: '2.3', title: 'अनुभाग 2.3: सारांश', content: 'सारांश सामग्री हिंदी में' }
          ]
        }
      ]
    },
    Marathi: {
      chapters: [
        {
          title: 'अध्याय 1',
          sections: [
            { id: '1.1', title: 'विभाग 1.1: अवलोकन', content: 'अवलोकन सामग्री मराठी मध्ये' },
            { id: '1.2', title: 'विभाग 1.2: विश्लेषण', content: 'विश्लेषण सामग्री मराठी मध्ये' },
            { id: '1.3', title: 'विभाग 1.3: सारांश', content: 'सारांश सामग्री मराठी मध्ये' }
          ]
        },
        {
          title: 'अध्याय 2',
          sections: [
            { id: '2.1', title: 'विभाग 2.1: अवलोकन', content: 'अवलोकन सामग्री मराठी मध्ये' },
            { id: '2.2', title: 'विभाग 2.2: विश्लेषण', content: 'विश्लेषण सामग्री मराठी मध्ये' },
            { id: '2.3', title: 'विभाग 2.3: सारांश', content: 'सारांश सामग्री मराठी मध्ये' }
          ]
        }
      ]
    },
    Tamil: {
      chapters: [
        {
          title: 'அத்தியாயம் 1',
          sections: [
            { id: '1.1', title: 'பகுதி 1.1: மேலோட்டம்', content: 'மேலோட்டம் உள்ளடக்கம் தமிழில்' },
            { id: '1.2', title: 'பகுதி 1.2: பகுப்பாய்வு', content: 'பகுப்பாய்வு உள்ளடக்கம் தமிழில்' },
            { id: '1.3', title: 'பகுதி 1.3: சுருக்கம்', content: 'சுருக்கம் உள்ளடக்கம் தமிழில்' }
          ]
        },
        {
          title: 'அத்தியாயம் 2',
          sections: [
            { id: '2.1', title: 'பகுதி 2.1: மேலோட்டம்', content: 'மேலோட்டம் உள்ளடக்கம் தமிழில்' },
            { id: '2.2', title: 'பகுதி 2.2: பகுப்பாய்வு', content: 'பகுப்பாய்வு உள்ளடக்கம் தமிழில்' },
            { id: '2.3', title: 'பகுதி 2.3: சுருக்கம்', content: 'சுருக்கம் உள்ளடக்கம் தமிழில்' }
          ]
        }
      ]
    },
    Malayalam: {
      chapters: [
        {
          title: 'അധ്യായം 1',
          sections: [
            { id: '1.1', title: 'വിഭാഗം 1.1: അവലോകനം', content: 'അവലോകനം ഉള്ളടക്കം മലയാളത്തിൽ' },
            { id: '1.2', title: 'വിഭാഗം 1.2: വിശകലനം', content: 'വിശകലനം ഉള്ളടക്കം മലയാളത്തിൽ' },
            { id: '1.3', title: 'വിഭാഗം 1.3: സാരാംശം', content: 'സാരാംശം ഉള്ളടക്കം മലയാളത്തിൽ' }
          ]
        },
        {
          title: 'അധ്യായം 2',
          sections: [
            { id: '2.1', title: 'വിഭാഗം 2.1: അവലോകനം', content: 'അവലോകനം ഉള്ളടക്കം മലയാളത്തിൽ' },
            { id: '2.2', title: 'വിഭാഗം 2.2: വിശകലനം', content: 'വിശകലനം ഉള്ളടക്കം മലയാളത്തിൽ' },
            { id: '2.3', title: 'വിഭാഗം 2.3: സാരാംശം', content: 'സാരാംശം ഉള്ളടക്കം മലയാളത്തിൽ' }
          ]
        }
      ]
    },
    Gujarati: {
      chapters: [
        {
          title: 'અધ્યાય 1',
          sections: [
            { id: '1.1', title: 'વિભાગ 1.1: સમીક્ષા', content: 'સમીક્ષા સામગ્રી ગુજરાતી માં' },
            { id: '1.2', title: 'વિભાગ 1.2: વિશ્લેષણ', content: 'વિશ્લેષણ સામગ્રી ગુજરાતી માં' },
            { id: '1.3', title: 'વિભાગ 1.3: સારાંશ', content: 'સારાંશ સામગ્રી ગુજરાતી માં' }
          ]
        },
        {
          title: 'અધ્યાય 2',
          sections: [
            { id: '2.1', title: 'વિભાગ 2.1: સમીક્ષા', content: 'સમીક્ષા સામગ્રી ગુજરાતી માં' },
            { id: '2.2', title: 'વિભાગ 2.2: વિશ્લેષણ', content: 'વિશ્લેષણ સામગ્રી ગુજરાતી માં' },
            { id: '2.3', title: 'વિભાગ 2.3: સારાંશ', content: 'સારાંશ સામગ્રી ગુજરાતી માં' }
          ]
        }
      ]
    }
  };

  const handleSectionClick = (sectionId) => {
    setSelectedSectionId(sectionId);  // Store selected section ID
    // Find the content of the selected section based on the language
    const currentChapters = contentByLanguage[language]?.chapters || contentByLanguage['English'].chapters;
    
    for (let chapter of currentChapters) {
      const selectedSection = chapter.sections.find((section) => section.id === sectionId);
      if (selectedSection) {
        setSelectedContent(selectedSection.content);  // Set the content based on the language
        break;
      }
    }
  };

  const chapters = contentByLanguage[language]?.chapters || contentByLanguage['English'].chapters;

  // useEffect to update content when language changes
  useEffect(() => {
    if (selectedSectionId) {
      // Find the corresponding content in the new language for the selected section
      const currentChapters = contentByLanguage[language]?.chapters || contentByLanguage['English'].chapters;
      
      for (let chapter of currentChapters) {
        const section = chapter.sections.find((sec) => sec.id === selectedSectionId);
        if (section) {
          setSelectedContent(section.content);  // Update the content with the new language
          break;
        }
      }
    }
  }, [language, selectedSectionId]);

  return (
    <div>
      <Navbar />
      <LanguageSwitcher setLanguage={setLanguage} />
      <div className="main-container">
        <Accordion chapters={chapters} onSectionClick={handleSectionClick} />
        <ContentArea content={selectedContent} />
      </div>
    </div>
  );
};

export default App;
