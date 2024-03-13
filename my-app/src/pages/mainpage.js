import React, { useState, useEffect } from 'react'; // Import useState and useEffect from 'react'
import Vision from '../components/vision'; // Import the Vision component from 'vision.js'
import './mainpage.css'; // Import the 'mainpage.css' file
import FrameComponent from '../components/Framecomponent'; // Import the FrameComponent component from 'Framecomponent.js'
import HoverImage from '../components/HoverImage';
import Footer from '../components/Footer';


function Mainpage() { 

  return (
    <div className='bg-col'>
        <Vision />
        <FrameComponent />
        <HoverImage />
        <Footer />
    </div>
  )
}

export default Mainpage; 
