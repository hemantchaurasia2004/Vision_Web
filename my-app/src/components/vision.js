import React, { useState, useEffect } from 'react';
import './vision.css';

const EnglishToBrailleConverter = ({ englishText }) => {
  const [displayBraille, setDisplayBraille] = useState('');

  useEffect(() => {
    const englishToBraille = (englishChar) => {
      const brailleMapping = {
        'V': '⠧',
        'i': '⠊',
        's': '⠎',
        'i': '⠊',
        'o': '⠕',
        'n': '⠝'
      };
      return brailleMapping[englishChar] || englishChar;
    };

    const animateTyping = async () => {
      for (let i = 0; i <= englishText.length; i++) {
        const before = englishText.slice(0, i);
        const after = englishText.slice(i).split('').map(englishToBraille).join('');
        setDisplayBraille(before + after);
        await new Promise(resolve => setTimeout(resolve, 500)); // Adjust the timeout for typing speed
      }
    };

    animateTyping();
  }, [englishText]);

  return (
    <div>
      <p className='text-col align-center justify-center text-size'>{displayBraille}</p>
    </div>
  );
};

const App = () => {
  const englishText = "Vision";

  return (
    <div className='flex top-padding  align-center justify-center'>
      <EnglishToBrailleConverter englishText={englishText} />
    </div>
  );
};

export default App;