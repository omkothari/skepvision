import React from 'react'
import { motion } from 'framer-motion'
import Background from '../assets/backImage.png'

const Home = () => {
  return (
    <div id='home'
      className="p-8 h-[90vh] flex items-center justify-center w-full relative font-['Tanker']" >

        <motion.div animate={{ top: -50, transition:{
            duration: 2.5,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse"
        }, }}  className="absolute w-full h-full flex items-center -translate-x-[2%] justify-center ml-30 sm:ml-0 z-1 ">
            <img  className='max-w-xs sm:max-w-md' src={Background} alt="" />
        </motion.div>

        <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-between">
  <h1 className="text-7xl lg:text-8xl ml-0 md:ml-20  sm:text-6xl font-bold z-5 w-full sm:w-1/3">
    We don't create ads,
  </h1>
  <h2 className="text-7xl lg:text-8xl sm:text-6xl font-semibold mt-2 z-5 w-full sm:w-1/3">
    We create experiences.
  </h2>
</div>

      </div>
  )
}

export default Home
