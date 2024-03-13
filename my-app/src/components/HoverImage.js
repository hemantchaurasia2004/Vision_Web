import React, { useState } from 'react';
import Frame1 from './utlis/Frame1.jpg';
import Frame3 from './utlis/Frame3.png';

const HoverImage = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [clipPathStyle, setClipPathStyle] = useState('none');

  const handleMouseMove = (event) => {
    const rect = event.target.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    setClipPathStyle(`circle(50px at ${x}px ${y}px)`);
  };

  const handleMouseLeave = () => {
    setClipPathStyle('none');
    setIsHovered(false);
  };

  return (
    <div className={`container ${isHovered ? 'hover' : ''}`}
         onMouseMove={handleMouseMove}
         onMouseLeave={handleMouseLeave}>
      <img className="image" src={Frame1} alt="Bottom Image" />
      <img className="overlay" src={Frame3} alt="Top Image"
           style={{ clipPath: clipPathStyle }} />
    </div>
  );
};

export default HoverImage;
