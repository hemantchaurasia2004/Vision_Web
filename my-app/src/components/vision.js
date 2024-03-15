import React, { useState, useEffect } from 'react';
import './Styling/vision.css';
import AnimatedGif from "./AnimatedGifff";
import gifFile from './utlis/vision_gif4.gif';

const Vision = () => {

  return (
    <div className='flex vision_size text-col align-center justify-center'>
        <AnimatedGif src={gifFile} alt="Hemant" />
    </div>
    
  );
};

export default Vision;