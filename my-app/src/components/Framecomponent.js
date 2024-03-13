import React, { useState, useEffect } from 'react';
import './Styling/Framecomponent.css';
const brailleText1 = "Navigation Through Dynamic Bluetooth Host Changing";
const brailleText2 = "Vision revolutionizes navigation for the visually impaired by seamlessly adapting to changing environments. Its Bluetooth host-changing capabilities empower users with dynamic connectivity, ensuring a continuous navigation experience.";
const brailleText3 = "Spatial Audio Assistive Technology";
const brailleText4 = "revolutionary way of perceiving and navigating your surroundings through immersive sound, opening new dimensions for the visually impaired. Elevate your sensory experience with Vision– where spatial awareness meets innovation";

const BrailleToEnglishConverter = ({ brailleText,applyBlueColor }) => {
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
        'changing': '⠉⠓⠁⠝⠛⠊⠝⠛',
        'Vision': '⠧⠊⠎⠊⠕⠝',
        'revolutionizes': '⠗⠑⠧⠕⠇⠥⠞⠊⠕⠝⠊⠵⠑⠎',
        'navigation': '⠝⠁⠧⠊⠛⠁⠞⠊⠕⠝',
        'for': '⠋⠕⠗',
        'the': '⠞⠓⠑',
        'visually': '⠧⠊⠎⠥⠁⠇⠇⠽',
        'impaired': '⠊⠍⠏⠁⠊⠗⠑⠙',
        'by': '⠃⠽',
        'seamlessly': '⠎⠑⠁⠍⠇⠑⠎⠎⠇⠽',
        'adapting': '⠁⠙⠁⠏⠞⠊⠝⠛',
        'to': '⠞⠕',
        'chaging': '⠉⠓⠁⠝⠛⠊⠝⠛',
        'environments.': '⠑⠝⠧⠊⠗⠕⠝⠍⠑⠝⠞⠎',
        'environments': '⠑⠝⠧⠊⠗⠕⠝⠍⠑⠝⠞⠎',
        'Its': '⠊⠞⠎',
        'bluetooth': '⠃⠇⠥⠑⠞⠕⠕⠞⠓',
        'host-changing': '⠓⠕⠎⠞⠤⠉⠓⠁⠝⠛⠊⠝⠛',
        'capabilities': '⠉⠁⠏⠁⠃⠊⠇⠊⠞⠊⠑⠎',
        'empower': '⠑⠍⠏⠕⠺⠑⠗',
        'users': '⠥⠎⠑⠗⠎⠺⠊⠞⠓',
        'dynamic': '⠙⠽⠝⠁⠍⠊⠉',
        'connectivity': '⠉⠕⠝⠝⠑⠉⠞⠊⠧⠊⠞⠽',
        'connectivity,': '⠉⠕⠝⠝⠑⠉⠞⠊⠧⠊⠞⠽',
        'ensuring': '⠑⠝⠎⠥⠗⠊⠝⠛',
        'a': '⠁',
        'continuous': '⠉⠕⠝⠞⠊⠝⠥⠕⠥⠎',
        'navigation': '⠝⠁⠧⠊⠛⠁⠞⠊⠕⠝',
        'experience': '⠑⠭⠏⠑⠗⠊⠑⠝⠉⠑',
        'Spatial': '⠎⠏⠁⠞⠊⠕⠁⠇',
        'Audio': '⠁⠥⠙⠊⠕',
        'Assistive': '⠁⠎⠎⠊⠎⠞⠊⠧⠑',
        'Technology': '⠞⠑⠉⠓⠝⠕⠇⠕⠛⠽',
        'revolutionary': '⠗⠑⠧⠕⠇⠥⠞⠊⠕⠝⠁⠗⠽',
        'way': '⠺⠁⠽',
        'of': '⠕⠋',
        'perceiving': '⠏⠑⠗⠉⠑⠊⠧⠊⠝⠛',
        'and': '⠁⠝⠙',
        'navigating': '⠝⠁⠧⠊⠛⠁⠞⠊⠝⠛',
        'your': '⠽⠕⠥⠗',
        'surroundings': '⠎⠥⠗⠗⠕⠥⠝⠙⠊⠝⠛⠎',
        'through': '⠞⠓⠗⠕⠥⠛⠓',
        'immersive': '⠞⠓⠗⠕⠥⠛⠓',
        'sound': '⠊⠍⠍⠑⠗⠎⠊⠧⠑',
        'sound,': '⠊⠍⠍⠑⠗⠎⠊⠧⠑',
        'opening': '⠎⠕⠥⠝⠙',
        'new': '⠋⠕⠗',
        'dimensions': '⠞⠓⠑',
        'for': '⠧⠊⠎⠥⠁⠇⠇⠽',
        'the': '⠊⠍⠏⠁⠊⠗⠑⠙',
        'visually': '⠑⠭⠏⠑⠗⠊⠑⠝⠉⠑',
        'impaired': '⠺⠊⠞⠓',
        'impaired.': '⠺⠊⠞⠓',
        'Elevate': '⠑⠇⠑⠧⠁⠞⠑',
        'sensory': '⠎⠑⠝⠎⠕⠗⠽',
        'experience': '⠑⠭⠏⠑⠗⠊⠑⠝⠉⠑',
        'experience.': '⠑⠭⠏⠑⠗⠊⠑⠝⠉⠑',
        'with': '⠺⠊⠞⠓',
        'Vision–': '⠠⠧⠊⠎⠊⠕⠝–',
        'where': '⠺⠓⠑⠗⠑',
        'spatial': '⠎⠏⠁⠞⠊⠕⠁⠇',
        'awareness': '⠁⠺⠁⠗⠑⠝⠑⠎⠎',
        'meets': '⠍⠑⠑⠞⠎',
        'innovation': '⠊⠝⠝⠕⠧⠁⠞⠊⠕⠝'
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
      <h1 className="text-col text-align r-margin-bottom font-fam">
        {displayBraille.split(' ').map((word, index) => {
          if (applyBlueColor && (word.toLowerCase() === 'bluetooth' || word==='⠃⠇⠥⠑⠞⠕⠕⠞⠓')) {
            return <span key={index} className="bluetoothBlue">{word + ' '}</span>;
          }
          return <React.Fragment key={index}>{word} </React.Fragment>;
        })}
      </h1>
    </div>
  );
};

const FrameComponent = () => {

  return (
    <div className="flex padding-top pad-left margin">
      <div className='text-size3'>
        <BrailleToEnglishConverter key={1} brailleText={brailleText1} applyBlueColor={true} />
      </div>
      <div className='text-size2'>
        <BrailleToEnglishConverter key={2} brailleText={brailleText2} applyBlueColor={false} />
      </div>
      <div className='text-size3'>
        <BrailleToEnglishConverter key={1} brailleText={brailleText3} applyBlueColor={false}/>
      </div>
      <div className='text-size2'>
        <BrailleToEnglishConverter key={2} brailleText={brailleText4} applyBlueColor={false}/>
      </div>
    </div>
  );
};

export default FrameComponent;
