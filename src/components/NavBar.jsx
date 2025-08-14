import React from 'react'
import { useState } from 'react'
import { IoMenuSharp } from "react-icons/io5";
import { IoMdClose } from "react-icons/io";


const NavBar = () => {
  const [click, setClick] = useState(false)
    const data = [
    {
        title: "Home",
        link: "#home"
    },
    {
        title: "About",
        link: "#about"
    },
    {
        title: "Services",
        link: "#services"
    },
    {
        title: "Contact",
        link: "#contact"
    }
    ]


  return (

    <div className={`${click ?"p-0 py-8":" sm:p-8"} lg:flex relative justify-center items-center sm:h-30 z-8 relative`}>
  <IoMenuSharp className={`absolute right-0 m-4 text-3xl cursor-pointer z-10 block lg:hidden ${click && "hidden"}`} onClick={() => {setClick(()=>!click)}} />

  <IoMdClose className={`absolute right-0 m-4 text-3xl cursor-pointer z-10 lg:hidden ${click ?"block":"hidden"}`} onClick={() => {setClick(()=>!click)}} />
  
  
  <div className={`flex flex-col bg-black font-bold xl:gap-4  lg:hidden ${click ?"block":"hidden"}`}>
            {data.map((item, index) => (
              <div className="h-30 w-full  flex items-center justify-center mt-4 border-b-2 border-gray-400" key={index}>
                <a className='text-2xl font-bold z-1 border-b-transparent ml-4 hover:text-gray-300 border-b-3 hover:border-white' href={item.link} onClick={() => {setClick(()=>false)}}>{item.title}</a>
              </div>

            ))}
        </div>


        <div className="flex font-bold xl:gap-4 hidden lg:block">
            {data.map((item, index) => (
                <a key={index} className='text-2xl font-bold z-1 border-b-transparent ml-4 hover:text-gray-300 border-b-3 hover:border-white' href={item.link}>{item.title}</a>

            ))}
        </div>
        <h1 className='absolute left-8 text-3xl opacity-0'>Skepvision</h1>
    </div>
  )
}

export default NavBar