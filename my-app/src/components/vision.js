import React, { useState, useEffect } from 'react';
import './Styling/vision.css';
import AnimatedGif from "./AnimatedGifff";
import gifFile from './utlis/vision_gif.gif';

const Vision = () => {

  return (
    <div className='flex vision_size align-center justify-center'>
        <AnimatedGif src={gifFile} alt="Animated text" />
    </div>
    
  );
};

export default Vision;