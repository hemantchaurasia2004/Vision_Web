import React, { useState, useEffect } from 'react'; // Import useState and useEffect from 'react'

import Vision from '../components/vision';
import './mainpage.css';
import FrameComponent from '../components/Framecomponent';

function Mainpage() { 

  const [showcomponent, setShowComponent] = useState(false);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setShowComponent(!showcomponent);
    }, 3600); 
  }, []); 

  return (
    <div className='bg-col'>
        <Vision />
        {showcomponent && <FrameComponent />}
    </div>
  )
}

export default Mainpage; 
