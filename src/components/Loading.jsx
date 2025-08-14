import React from 'react'
import Load from '../assets/loading.mp4'
import { motion } from 'framer-motion'
import { useEffect } from 'react'

const Loading = () => {
   useEffect(() => {
    // Disable scrolling
    document.body.style.overflow = 'hidden';

    // Re-enable scrolling after animation
    const timeout = setTimeout(() => {
      document.body.style.overflow = 'auto';
      document.querySelector('.vid').style.display = 'none';

      
    }, 3000); // Match your delay (2.8s)

    // Cleanup
    return () => {
      clearTimeout(timeout);
      document.body.style.overflow = 'auto';
      // Hide the loading screen
    };
  }, []);
  return (
    <motion.div initial={{opacity:1}} animate={
    {
        opacity: 0,
        transition: {
          duration: 0.8,
            delay: 2.8,
        }
}}
    
    className='vid fixed z-[999] h-screen w-full bg-black text-[#f1f1f1] flex items-center justify-center'>
        <video className='h-full w-full' src={Load} autoPlay playsInline muted loop></video>

    </motion.div>
  )
}

export default Loading