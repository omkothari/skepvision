import React, { useState, useEffect } from 'react';
import Load from '../assets/loading.mp4';
import { motion } from 'framer-motion';

const Loading = ({ assetsLoaded }) => {
  const [videoEnded, setVideoEnded] = useState(false);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  // Hide loading when video ended AND assets loaded
  const shouldHide = videoEnded && assetsLoaded;

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={
        shouldHide
          ? { opacity: 0, transition: { duration: 0.8, delay: 0.2 } }
          : { opacity: 1 }
      }
      className="vid fixed z-[999] h-screen w-full bg-black text-[#f1f1f1] flex items-center justify-center"
      style={{ pointerEvents: shouldHide ? 'none' : 'auto' }}
    >
      {!videoEnded ? (
        <video
          className="h-full w-full"
          src={Load}
          autoPlay
          playsInline
          muted
          onEnded={() => setVideoEnded(true)}
        />
      ) : (
        // Spinner or static frame after video ends
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white border-opacity-30"></div>
          <span className="mt-4 text-lg">Loading assets...</span>
        </div>
      )}
    </motion.div>
  );
};

export default Loading;