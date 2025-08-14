import React from 'react'
import { motion } from 'framer-motion'
const Services = () => {
    const ServicesData = [
        {
            title: "Motion Graphics Ads",
            description: "We craft motion graphic ads that captivate audiences and keep them hooked with visually engaging content. Our animations are designed to spark interest, highlight your product’s key features, and drive stronger engagement. With smooth transitions, bold design, and clear messaging, we create visuals that not only grab attention but also build a lasting connection with your brand. Whether for product promos, explainers, or social media, our motion graphics turn ideas into impactful, high-performing visual stories."
        },
        {
            title: "3D Animation Ads",
            description: "We create visually stunning 3D animation ads that captivate and engage. Our cinematic shorts highlight your product and its features with precision and style. From concept to final render, we focus on every detail to bring your brand to life through rich visuals and compelling storytelling. Whether it’s tech, lifestyle, or complex concepts, we make your product stand out with eye-catching, high-quality animation that connects with your audience and leaves a lasting impression."
        },
         {
            title: "Logo Animation",
            description: "We design logo animations that leave a lasting impression by bringing your brand identity to life. Through smooth motion, creative transitions, and striking visuals, we transform static logos into dynamic animations that capture attention instantly. Designed to enhance brand recognition and professionalism, our animations are perfect for intros, outros, websites, and social media. Whether subtle or bold, each animation is tailored to reflect your brand’s personality and style, creating a memorable visual experience that elevates your brand presence."
        },
    ]
  return (
    <>
    <div id='services' className='w-full text-[#f1f1f1] px-8 py-3 mb-10 z-1'>

        <h1 className='md:text-7xl text-5xl'>Our Services</h1>

        <div className="mt-10 w-full flex flex-col lg:flex-row gap-4 lg:flex-nowrap font-normal text-xs">
            {ServicesData.map((service, index) => (
                <motion.div key={index} className="w-full lg:w-1/3 p-4     
                relative
                bg-white/5
                border-2 border-white/20
                rounded-[2rem]
                shadow-[0_0_0_2px_rgba(255,255,255,0.6),0_16px_32px_rgba(0,0,0,0.12)]
                backdrop-blur-[8px]
                text-white
                flex flex-col items-center z-10 hover:z-20"
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 200 }}> 

                <div className="rounded-lg">
                    <h2 className="text-3xl mt-4 mb-15 font-semibold">{service.title}</h2>
                    <p className='text-lg text-justify font-[switzer]'>
                        {service.description}
                    </p>
                </div>
            </motion.div>
            ))}
        </div>
    </div>
            </>
  )
}

export default Services