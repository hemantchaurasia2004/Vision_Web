import React, { useState, useEffect, useRef } from 'react';
import './Styling/vision.css';
import AnimatedGif from "./AnimatedGifff";
import gifFile from './utlis/vision_gif4.gif';
import gifMobileFile from './utlis/Vision_gif_mobile.gif';

let audioText = "Vision";
let ch = true;

const Vision = () => {
  const audioRef = useRef(null);
  const speech = new SpeechSynthesisUtterance(audioText);

  const [gifSrc, setGifSrc] = useState(gifFile);

  useEffect(() => {
    if(ch===true){
      speech.lang = 'en-US';
      speech.volume = 1;
      audioRef.current = window.speechSynthesis.speak(speech);
      console.log(audioText);
      ch = false;
    }

    const handleResize = () => {
      if (window.innerWidth <= 450) {
        setGifSrc(gifMobileFile);
      } else {
        setGifSrc(gifFile);
      }
    };

    handleResize(); 

    window.addEventListener('resize', handleResize); 

    return () => {
      window.removeEventListener('resize', handleResize); 
      window.speechSynthesis.cancel(); 
    };
  }, []); 

  return (
    <div className='flex vision_size text-col align-center justify-center'>
      <AnimatedGif src={gifSrc} alt="Hemant" />
    </div>
  );
};

export default Vision;