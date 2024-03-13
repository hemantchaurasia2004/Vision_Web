import React from "react";
import './Styling/Framecomponent.css';

const AnimatedGif = ({src, alt}) => {
    return <img className="width" src={src} alt={alt} />
}

export default AnimatedGif;