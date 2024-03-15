import React, { useState, useEffect } from 'react';
import './Styling/vision.css';
import AnimatedGif from "./AnimatedGifff";
import gifFile from './utlis/vision_gif4.gif';
import gifMobileFile from './utlis/Vision_gif_mobile.gif';

const Vision = () => {
  const [gifSrc, setGifSrc] = useState(gifFile);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 450) {
        setGifSrc(gifMobileFile);
      } else {
        setGifSrc(gifFile);
      }
    };

    handleResize(); // Call initially to set the correct GIF based on initial width

    window.addEventListener('resize', handleResize); // Listen to window resize events

    return () => {
      window.removeEventListener('resize', handleResize); // Remove the event listener on component unmount
    };
  }, []); // Empty dependency array ensures the effect runs only once after the initial render

  return (
    <div className='flex vision_size text-col align-center justify-center'>
      <AnimatedGif src={gifSrc} alt="Hemant" />
    </div>
  );
};

export default Vision;
