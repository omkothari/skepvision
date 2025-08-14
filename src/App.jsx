import React from 'react'
import './index.css'
import NavBar from './components/NavBar'
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Services from './components/Services'
import Loading from './components/Loading'
import Designs from './components/Designs'
import { ReactLenis, useLenis } from 'lenis/react'
import Background from './components/Background'
const App = () => {
  return (
     <>
     <ReactLenis root />
     <Background />
    <div className='relative h-full min-h-screen py-[0.1px] w-full text-[#f1f1f1] font-["Tanker"] font-bold overflow-hidden'>
      {/* <div className="absolute w-full h-full -z-1"> */}
{/* <video src={Backvideo} autoPlay muted playsInline loop className='h-full bg-black w-full object-cover pointer-events-none'></video> */}
        {/* </div> */}

      <Loading />
      <NavBar />
      <Home />
      <Designs />
      <Services />
      <About />
      <Contact />
      </div>
     </>
  )
}

export default App