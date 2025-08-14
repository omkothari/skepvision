import React from 'react'
// import Backvideo from '../assets/Space_high_final11.mp4'
import Backvideo from '/assets/Backvideo.mp4'

const Background = () => {
  return (
    <div className='h-screen w-full fixed '>
        <video src={Backvideo} autoPlay muted playsInline loop className='h-full bg-black w-full object-cover pointer-events-none'></video>
    </div>
  )
}

export default Background