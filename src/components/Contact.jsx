import React from 'react'
import { motion } from 'framer-motion'
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa";
import Background from '../assets/backImage.png'


const Contact = () => {
  return (
    <>
    <div id='contact' className='w-full px-8 py-3 flex flex-col sm:flex-row items-center justify-between mt-1 font-["Switzer"] mb-10'>
    <div className="w-full sm:w-1/2 mb-6 sm:mb-0">
    <h1 className='font-bold md:text-7xl text-5xl font-["Tanker"]' >Contact Us</h1>

    <p className='w-full sm:w-1/2 mt-2 '>Email, call or complete the form to learn how SkepVision can solve your problem. </p>

    <a href="mailto:shubham@skepvision.com" className='block text-md mt-10'>shubham@skepvision.com</a>
    <a href="" className='block text-md'>+91 9557981509</a>


    <div className="icons mt-5 flex gap-4">
      <a href="https://www.instagram.com/skepvision/" target="_blank" rel="noopener noreferrer" className='text-2xl text-white hover:text-[#00FFF7] transition-all duration-300'>
        <FaInstagram size='2em' />
      </a>
      <a href="https://x.com/shubhamsak53074" target="_blank" rel="noopener noreferrer" className='text-2xl text-white hover:text-[#00FFF7] transition-all duration-300'>
        <FaXTwitter size='2em' />
      </a>
      <a href="https://wa.me/919557981509" target="_blank" rel="noopener noreferrer" className='text-2xl text-white hover:text-[#00FFF7] transition-all duration-300'>
        <FaWhatsapp size='2em' />
      </a>

    </div>

    </div>


 <div className="w-full sm:w-1/2 h-full flex items-center justify-center relative">

  {/* Floating Liquid Glass Form */}
  {/* <motion.form
    action="/"
    method="post"
    className="
    relative z-10
    w-full max-w-md
    bg-white/5
    border-2 border-white/20
    rounded-[2rem]
    shadow-[0_0_0_2px_rgba(255,255,255,0.6),0_16px_32px_rgba(0,0,0,0.12)]
    backdrop-blur-[8px]
    px-6 py-6
    text-white
    flex flex-col items-center
    "
    whileHover={{ scale: 1.04 }}
    transition={{ type: "spring", stiffness: 200 }}
    >
    <h1 className="text-xl font-bold text-white drop-shadow-sm">Get In Touch</h1>
    <p className="text-sm mt-1 text-white/80">You can reach us anytime.</p>

    <div className="flex gap-3 mt-4 w-full">
      <input type="text" placeholder="First Name" name="firstname" className="p-3 px-4 w-full bg-white/10 text-white placeholder-white/60 border border-white/20 outline-none rounded-full focus:ring-2 focus:ring-white/30" />
      <input type="text" placeholder="Last Name" name="lastname" className="p-3 px-4 w-full bg-white/10 text-white placeholder-white/60 border border-white/20 outline-none rounded-full focus:ring-2 focus:ring-white/30" />
    </div>

    <input type="email" placeholder="Email" name="email" className="p-3 px-4 w-full bg-white/10 text-white placeholder-white/60 border border-white/20 outline-none rounded-full focus:ring-2 focus:ring-white/30 mt-3" />

    <input type="number" placeholder="Phone number" name="phone" className="p-3 px-4 w-full bg-white/10 text-white placeholder-white/60 border border-white/20 outline-none rounded-full focus:ring-2 focus:ring-white/30 mt-3" />

    <textarea name="message" placeholder="Message" className="p-3 px-4 w-full bg-white/10 text-white placeholder-white/60 border border-white/20 outline-none focus:ring-2 focus:ring-white/30 rounded-2xl mt-3 h-32 resize-none" />

    <button className="p-3 w-full mt-4 rounded-full text-center bg-[#00FFF7] hover:bg-[#00e0db] text-black font-semibold transition-all duration-300">
      Submit
    </button>
  </motion.form> */}

   <motion.div animate={{ top: -50, transition:{
              duration: 2.5,
              ease: "linear",
              repeat: Infinity,
              repeatType: "reverse"
          }, }}  className="absolute w-full hidden sm:flex h-full flex items-center -translate-x-[2%] justify-center ml-30 sm:ml-0 z-1 ">
              <img  className='max-w-xs sm:max-w-md' src={Background} loading="lazy" alt="......" />
          </motion.div>
</div>


        
    
    </div>
    </>
  )
}

export default Contact
