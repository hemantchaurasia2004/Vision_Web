import React, { useState, useEffect, useRef } from 'react';
import Vision from '../components/vision';
import './mainpage.css';
import FrameComponent from '../components/Framecomponent';
import FrameComponent2 from '../components/Framecomponent2';
import HoverImage from '../components/HoverImage';
import Footer from '../components/Footer';
import ShowImage from '../components/ShowImage';

function Mainpage() {
  const [scrollIndex, setScrollIndex] = useState(0);
  const divRefs = [useRef(), useRef(), useRef(), useRef()];
  const [scrollingEnabled, setScrollingEnabled] = useState(true);

  // Define durations for each section (in milliseconds)
  const durations = [4000, 24000, 6000, 24000, 5000];

  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollingEnabled) {
        if (scrollIndex < divRefs.length - 1) {
          divRefs[scrollIndex + 1].current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
          setScrollIndex((prevIndex) => prevIndex + 1);
        } else {
          setScrollIndex(0);
          divRefs[0].current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
          setScrollingEnabled(false);
        }
      } else {
        clearInterval(interval);
      }
    }, durations[scrollIndex]);

    return () => clearInterval(interval);
  }, [scrollIndex, scrollingEnabled, divRefs, durations]);

  useEffect(() => {
    const handleClick = () => {
      setScrollingEnabled(false);
    };

    document.body.addEventListener('click', handleClick);

    return () => {
      document.body.removeEventListener('click', handleClick);
    };
  }, []);

  return (
    <div className='bg-col'>
      <div ref={divRefs[0]}>
        <Vision />
      </div>
      <div ref={divRefs[1]}>
        <FrameComponent />
      </div>
      <div ref={divRefs[2]}>
        < ShowImage />
      </div>
      <div ref={divRefs[3]}>
        <FrameComponent2 />
      </div>
      <div ref={divRefs[4]}>
        <Footer />
      </div>
    </div>
  );
}

export default Mainpage;
