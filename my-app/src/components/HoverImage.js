import React, { useEffect } from 'react';
import Frame1 from './utlis/Frame1.jpg';
import Frame3 from './utlis/Frame3.png';
import './Styling/HoverImage.css';

const HoverImage = () => {

  useEffect(() => {
    const container = document.querySelector('.container');

    const handleMouseMove = (event) => {
      const overlay = container.querySelector('.overlay');
      const rect = container.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;

      overlay.style.clipPath = `circle(40px at ${x}px ${y}px)`; 
      container.classList.add('hover');
    };

    const handleMouseLeave = () => {
      const overlay = container.querySelector('.overlay');
      overlay.style.clipPath = 'none';
      container.classList.remove('hover');
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseleave', handleMouseLeave);
    };

  }, []); // Empty dependency array to ensure effect runs only once

  return (
    <div className="container">
      <img className="image cent" src={Frame1} alt="Bottom Image" />
      <img className="overlay" src={Frame3} alt="Top Image" />
    </div>
  );
};

export default HoverImage;
