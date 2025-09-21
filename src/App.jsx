import React, { useState, useEffect } from 'react';
import './index.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Services from './components/Services';
import Loading from './components/Loading';
import Designs from './components/Designs';
import { ReactLenis } from 'lenis/react';
import Background from './components/Background';

const App = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const [bgVideoLoaded, setBgVideoLoaded] = useState(false);

  useEffect(() => {
    document.fonts.load('1em "Tanker"').then(() => setFontLoaded(true));
  }, []);

  const assetsLoaded = fontLoaded && bgVideoLoaded;

  return (
    <>
      {!assetsLoaded && <Loading assetsLoaded={assetsLoaded} />}
      {assetsLoaded && (
        <div>
          <ReactLenis root />
          <Background onVideoLoaded={() => setBgVideoLoaded(true)} />
          <div className='relative h-full min-h-screen py-[0.1px] w-full text-[#f1f1f1] font-["Tanker"] font-bold overflow-hidden'>
            <NavBar />
            <Home />
            <Designs />
            <Services />
            <About />
            <Contact />
          </div>
        </div>
      )}
    </>
  );
};

export default App;