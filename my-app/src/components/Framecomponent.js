import React, { useState, useEffect } from 'react';
import './Framecomponent.css';
const brailleText1 = "Lorem Ipsum Is A Good Way To Type";
const brailleText2 = "Lorem Is A Good Way To Type Vision";
const brailleText3 = "Vision";

const BrailleToEnglishConverter = ({ brailleText }) => {
  const [displayBraille, setDisplayBraille] = useState('');

  useEffect(() => {
    const brailleToEnglish = (brailleWord) => {
      const englishMapping = {
        'Navigation': '⠝⠁⠧⠊⠛⠁⠞⠊⠕⠝',
        'Through': '⠞⠓⠗⠕⠥⠛⠓',
        'Dynamic': '⠙⠽⠝⠁⠍⠊⠉',
        'Bluetooth': '⠃⠇⠥⠑⠞⠕⠕⠞⠓',
        'Host': '⠓⠕⠎⠞',
        'Changing': '⠉⠓⠁⠝⠛⠊⠝⠛',
        'Vision': '⠧⠊⠎⠊⠕⠝',
        'Type': '⠞⠽⠏⠑',
        'Is': '⠁⠽',
      };
      
      return englishMapping[brailleWord] || brailleWord;
    };

    const animateTyping = async () => {
      const brailleWords = brailleText.split(' ');
      for (let i = 0; i <= brailleWords.length; i++) {
        let displayText = brailleWords.slice(0,i).join(' ');
        displayText += ' ';
        const after = brailleWords.slice(i).map(brailleToEnglish).join(' ');
        displayText += after;
        setDisplayBraille(displayText); // Update English text
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
    };

    animateTyping();
  }, [brailleText]);

  return (
    <div>
      <h1 className="text-size3 text-col r-margin-bottom">{displayBraille}</h1>
    </div>
  );
};

const FrameComponent = () => {

  return (
    <div className="flex padding-top pad-left">
      <BrailleToEnglishConverter key={1} brailleText={brailleText3} />
      <BrailleToEnglishConverter key={2} brailleText={brailleText1} />
      <BrailleToEnglishConverter key={3} brailleText={brailleText2} />
    </div>
  );
};

export default FrameComponent;
