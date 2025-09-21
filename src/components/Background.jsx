import React from 'react';

const Background = () => {
  return (
    <div className='h-screen w-full fixed'>
      <video
        src="/assets/Backvideo.mp4"
        autoPlay
        preload="auto"
        muted
        playsInline
        loop
        className='h-full bg-black w-full object-cover pointer-events-none'
      ></video>
    </div>
  );
};

export default Background;