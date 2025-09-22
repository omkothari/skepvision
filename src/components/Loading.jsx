import React, { useRef, useState, useEffect } from 'react';
import Load from '../assets/loading.mp4';
import { motion } from 'framer-motion';

const Loading = ({ assetsLoaded, onVideoEnd }) => {
  const [videoEnded, setVideoEnded] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleEnded = () => {
    setVideoEnded(true);
    if (videoRef.current) {
      videoRef.current.pause();
    }
    if (onVideoEnd) {
      console.log('Loading video ended');
      onVideoEnd();
    }
  };

  // Hide loading when video ended AND assets loaded (handled in App.jsx)
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={
        videoEnded && assetsLoaded
          ? { opacity: 0, transition: { duration: 0.8, delay: 0.2 } }
          : { opacity: 1 }
      }
      className="vid fixed z-[999] h-screen w-full bg-black text-[#f1f1f1] flex items-center justify-center"
      style={{ pointerEvents: videoEnded && assetsLoaded ? 'none' : 'auto' }}
    >
      <video
        ref={videoRef}
        className="h-full w-full"
        src={Load}
        autoPlay
        playsInline
        muted
        onEnded={handleEnded}
      />
    </motion.div>
  );
};

export default Loading;