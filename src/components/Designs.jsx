import React from 'react'
import { useState } from 'react';
import { ReactLenis, useLenis } from 'lenis/react'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import { motion } from 'framer-motion';

const Designs = () => {
    const DesignsData = [
      {video: "/assets/controller.mp4"},
      {video: "/assets/aboutearphones.mp4"},
      {video: "/assets/headPhone.mp4"},
    ]

  let currentTranslateX = 0; // initialize once globally

// const HandelLeft = () => {
//   const phone = document.querySelector('.phone');
//   if (!phone) return;

//   // Optional: Limit max shift (e.g., 99%)
//   if (currentTranslateX != 33) {
//     currentTranslateX += 33;
//     phone.style.transform = `translateX(${currentTranslateX}%)`;
//   }
// };


//         const HandelRight = () => {
//   const phone = document.querySelector('.phone');
//   if (!phone) return;

//   // Optional: Limit max shift (e.g., 99%)
  
//   if (currentTranslateX != -33) {
//     currentTranslateX -= 33;
//     phone.style.transform = `translateX(${currentTranslateX}%)`;
//   }
// };

const HandelLeft =()=>{
  const phone = document.querySelector('.phone');
  if (currentTranslateX != 85)
    currentTranslateX -= -85;
  phone.style.transform= `translateX(${currentTranslateX}%)`
   console.log(currentTranslateX)
}

const HandelRight =()=>{
  const phone = document.querySelector('.phone');
  if (currentTranslateX != -85)
      currentTranslateX -= 85;
  phone.style.transform= `translateX(${currentTranslateX}%)`
  console.log(currentTranslateX)
}

const {video , setVideo} = useState(-1);

const handleVideo =(ind)=>{
  
  setVideo(ind);
}
    

  return (
    
    <>
    <ReactLenis root />

    <div className=' w-full text-[#f1f1f1] sm:px-8 py-3 mb-10 z-10'>
        <div className="mb-10">
            <h1 className='md:text-7xl text-5xl ml-8 sm:ml-0 font-bold'>Our Designs</h1>
        </div>

<div className="flex items-center relative">
        <motion.div className="cursor-pointer
        absolute z-10
        bg-white/10
        border-2 border-white/20
        rounded-full
        shadow-[0_0_0_2px_rgba(255,255,255,0.6),0_16px_32px_rgba(0,0,0,0.12)]
        backdrop-blur-[8px]
        p-1
        lg:px-6 lg:py-6
        text-white
        flex flex-col items-center
        
        "    whileHover={{ scale: 1.04 }}
        transition={{ type: "spring", stiffness: 200 }}    onClick={() => HandelLeft()}>
<IoIosArrowBack size='3rem' />
        </motion.div>

<div className="phone flex w-full transition duration-500 ease-in-out">

            {DesignsData.map((design, index) => (
                
                <div className="flex white-space-nowrap transform -translate-x-[93%] " key={index}>
        <div className="min-h-[23vh] h-[40vw] w-[80vw] relative ml-5 mr-5 overflow-hidden">

            <div className="absolute bg-black z-5 h-[25%] sm:h-[15%] w-[20vw] lg:w-[20vw] sm:w-[20vw] rotate-[90deg] top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-tl-[20px] rounded-tr-[20px] sm:rounded-tl-[40px] sm:rounded-tr-[40px]"></div>

                <video key={index} className='h-full w-full rounded-[20px] sm:rounded-[50px] lg:rounded-[60px] object-cover bg-white border-4 border-gray-800 relative' src={design.video} autoPlay muted playsInline loop onDoubleClick={()=>{handleVideo(index)}}></video>
                
                </div>
   </div>
            ))}
            </div>


<motion.div className="cursor-pointer
        absolute z-10
      bg-white/10
      border-2 border-white/20
      rounded-full
      shadow-[0_0_0_2px_rgba(255,255,255,0.6),0_16px_32px_rgba(0,0,0,0.12)]
      backdrop-blur-[8px]
      p-1
      lg:px-6 lg:py-6
      text-white
      flex flex-col items-center
      right-0
      
      " 
      
      whileHover={{ scale: 1.04 }}
      transition={{ type: "spring", stiffness: 200 }} onClick={() => HandelRight()}>

<IoIosArrowForward size='3rem' />
</motion.div>
        </div>

    </div>
    
        </>
  )
}

export default Designs