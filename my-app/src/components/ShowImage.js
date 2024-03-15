import React from 'react'
import ShoImage from './utlis/Web_Img.svg'
import './Styling/ShowImage.css'

function ShowImage() {
  return (
    <div className='image_style comp_size'>
      <img className='img_sty' src={ShoImage} alt="Google Logo" />
    </div>
  )
}

export default ShowImage