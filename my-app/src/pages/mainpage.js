import React, { useState, useEffect } from 'react'; // Import useState and useEffect from 'react'

import Vision from '../components/vision';
import './mainpage.css';
import FrameComponent from '../components/Framecomponent';

function Mainpage() { 

  return (
    <div className='bg-col'>
        <Vision />
        <FrameComponent />
    </div>
  )
}

export default Mainpage; 
