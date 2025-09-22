import React from 'react';

const Background = ({ onVideoLoaded }) => (
  <div className='h-screen w-full fixed'>
    <video
      src="/assets/Backvideo.mp4"
      autoPlay
      muted
      playsInline
      loop
      preload="auto"
      className="h-full bg-black w-full object-cover pointer-events-none"
      onLoadedData={() => {
        console.log('Background video loaded');
        if (onVideoLoaded) onVideoLoaded();
      }}
    ></video>
  </div>
);

export default Background;