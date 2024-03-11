import React from 'react'
import Vision from '../components/vision'
import './mainpage.css'
import FrameComponent from '../components/Framecomponent'

function mainpage() {
  return (
    <div className='bg-col'>
        <Vision />
        <FrameComponent />
    </div>
  )
}

export default mainpage