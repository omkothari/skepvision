import React from 'react';
import Backvideo from '/assets/Backvideo.mp4';

const Background = ({ onVideoLoaded }) => {
  return (
    <div className='h-screen w-full fixed'>
      <video
        src={Backvideo}
        autoPlay
        preload="auto"
        muted
        playsInline
        loop
        className='h-full bg-black w-full object-cover pointer-events-none'
        onLoadedData={onVideoLoaded}
      ></video>
    </div>
  );
};

export default Background;