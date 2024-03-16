import React, { useState, useEffect, useRef } from 'react';
import './Styling/Framecomponent.css';

const brailleText1 = "Navigation Through Dynamic Bluetooth";
const brailleText3 = "Host Changing";
const brailleText4 = "Navigation Through Dynamic Bluetooth Host Changing";
const brailleText2 = "Vision revolutionizes navigation for the visually impaired by seamlessly adapting to changing environments. Its Bluetooth host-changing capabilities empower users with dynamic connectivity, ensuring a continuous navigation experience.";

let audiocheck = true;
const BrailleToEnglishConverter = ({ brailleText, applyBlueColor }) => {
  const [displayBraille, setDisplayBraille] = useState('');
  const containerRef = useRef(null);
  const audioRef = useRef(null);

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

        if (i === 1 && audiocheck === true && applyBlueColor!=3) {
          let speaktext = brailleWords.join(' ');

          if(applyBlueColor === 1){ 
            speaktext = brailleText4;
          }
          const speech = new SpeechSynthesisUtterance(speaktext);
          speech.lang = 'en-US';
          speech.volume = 1;
          audioRef.current = window.speechSynthesis.speak(speech);
          console.log(speaktext)
        }

        if (i === 0 && (applyBlueColor === 1)) {
          await new Promise(resolve => setTimeout(resolve, 1500));
        }
        else if(i === 0 && (applyBlueColor === 3)){
          await new Promise(resolve => setTimeout(resolve, 5200));
        }
         else if (i === 0) {
          await new Promise(resolve => setTimeout(resolve, 7500));
        } 
         else if (applyBlueColor==1 || applyBlueColor==3) {
          await new Promise(resolve => setTimeout(resolve, 1000));
        } else {
          await new Promise(resolve => setTimeout(resolve, 500));
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

  useEffect(() => {
    const handleClick = () => {
        window.speechSynthesis.cancel(audioRef.current);
        audiocheck = false;
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

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

const FrameComponent = () => {
  return (
    <div className="flex text-align font-fam">
      <div className='comp_size flex inner_dim text-align'>
        <div className='text-size3 headline_design2'>
          <BrailleToEnglishConverter key={1} brailleText={brailleText1} applyBlueColor={1} />
        </div>
        <div className='text-size3 headline_design'>
          <BrailleToEnglishConverter key={3} brailleText={brailleText3} applyBlueColor={3} />
        </div>
        <div className='text-size2 size_def text_design'>
          <BrailleToEnglishConverter key={2} brailleText={brailleText2} applyBlueColor={2} />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
