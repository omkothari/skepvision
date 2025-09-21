import React from 'react'
import Video from '/assets/aboutearphones.mp4'
import BackImage from '../assets/backImage(2).png'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <>
      <div id='about' className='p-8 w-full flex flex-col mt-1 mb-8 relative'>
        
        <div className="z-3">

        <h1 className='md:text-7xl text-5xl mb-8'>About Us</h1>
           <motion.div animate={{ 
            bottom:-10,top: "30%",
            transition:{
              duration: 2.5,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse"
                  }, }}   className="h-90 w-90 absolute sm:top-[40%] md:-bottom-[10%] -left-25"  >

          <img src={BackImage} className='h-full w-full object-cover ' loading='lazy' alt="image...." />

          </motion.div>
        <div className="flex flex-col lg:flex-row relative gap-10 min-h-[80vh] 0 w-full">
          
          


      <motion.div className="
      w-full lg:w-1/2
      p-4
      relative
      bg-white/5
      border-2 border-white/20
      rounded-[2rem]
      shadow-[0_0_0_2px_rgba(255,255,255,0.6),0_16px_32px_rgba(0,0,0,0.12)]
      backdrop-blur-[8px]
      text-white
      lg:flex flex-col items-center z-10" whileHover={{ scale: 1.08 }}
      transition={{ type: "spring", stiffness: 200 }}> 
      

        <div className="text-xl font-['Switzer'] font-normal text-md mt-6 lg:mt-10 mb-10 z-3">
            <p>
                At SkepVision, we bring ideas to life through visually stunning 2D and 3D animated ads that captivate, engage, and convert. We're a passionate team of creative minds, storytellers, and animation experts dedicated to helping brands stand out in a crowded digital world. <br /><br />

From bold concepts to pixel-perfect execution, we focus on creating ads that don’t just look great—but work great. Whether you're a startup looking for attention-grabbing product videos or a brand ready to level up your visual identity, we’re here to craft content that resonates with your audience. <br /><br />

What makes us different?
We combine visual creativity with marketing insight. Every frame we design serves a purpose—whether it’s driving clicks, building awareness, or making your story unforgettable. <br /><br />

Let’s turn your vision into motion.
            </p>
        </div>
          </motion.div>

        <div className="border-1 border-gray-500 w-full lg:w-1/2 rounded-[40px] overflow-hidden">
            <video className='h-[50vh] sm:h-[80vh] object-cover w-full z-5' src={Video} autoPlay muted loop playsInline></video>
        </div>

        </div>

        </div>

    </div>
      </>
  )
}

export default About
