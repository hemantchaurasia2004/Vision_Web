import React, { useState, useEffect, useRef } from 'react';
import './Styling/Framecomponent.css';
const brailleText3 = "Spatial Audio Assistive Technology";
const brailleText4 = "revolutionary way of perceiving and navigating your surroundings through immersive sound, opening new dimensions for the visually impaired. Elevate your sensory experience with Vision– where spatial awareness meets innovation";

const BrailleToEnglishConverter = ({ brailleText, applyBlueColor }) => {
  const [displayBraille, setDisplayBraille] = useState('');
  const containerRef = useRef(null);

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
        let displayText = brailleWords.slice(0, i).join(' ');
        displayText += ' ';
        const after = brailleWords.slice(i).map(brailleToEnglish).join(' ');
        displayText += after;
        setDisplayBraille(displayText); // Update English text
        if (i === 0 && (applyBlueColor === 1 || applyBlueColor === 3)) {
          await new Promise(resolve => setTimeout(resolve, 2000));
        } else if (i === 0) {
          await new Promise(resolve => setTimeout(resolve, 8000));
        } else {
          await new Promise(resolve => setTimeout(resolve, 1000));
        }
      }
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateTyping();
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, [brailleText]);

  return (
    <div ref={containerRef}>
      <h1 className="text-col text-align r-margin-bottom font-fam">
        {displayBraille.split(' ').map((word, index) => {
          if (applyBlueColor === 1 && (word.toLowerCase() === 'bluetooth' || word === '⠃⠇⠥⠑⠞⠕⠕⠞⠓')) {
            return <span key={index} className="bluetoothBlue">{word + ' '}</span>;
          }
          return <React.Fragment key={index}>{word} </React.Fragment>;
        })}
      </h1>
    </div>
  );
};

const FrameComponent2 = () => {

  return (
    <div className="flex text-align font-fam">
      <div className='comp_size flex inner_dim text-align'>
        <div className='text-size3'>
          <BrailleToEnglishConverter key={3} brailleText={brailleText3} applyBlueColor={3} />
        </div>
        <div className='text-size2'>
          <BrailleToEnglishConverter key={4} brailleText={brailleText4} applyBlueColor={2} />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
