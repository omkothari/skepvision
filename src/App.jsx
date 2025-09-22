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
  const [loadingVideoEnded, setLoadingVideoEnded] = useState(false);

  useEffect(() => {
    document.fonts.load('1em "Tanker"').then(() => {
      setFontLoaded(true);
    });
  }, []);

  const assetsLoaded = fontLoaded && bgVideoLoaded;
  const showMainContent = assetsLoaded && loadingVideoEnded;

  useEffect(() => {
    console.log('fontLoaded:', fontLoaded, 'bgVideoLoaded:', bgVideoLoaded, 'assetsLoaded:', assetsLoaded);
  }, [fontLoaded, bgVideoLoaded, assetsLoaded]);

  return (
    <>
      <Background onVideoLoaded={() => setBgVideoLoaded(true)} />
      {!showMainContent && (
        <Loading
          assetsLoaded={assetsLoaded}
          onVideoEnd={() => setLoadingVideoEnded(true)}
        />
      )}
      {showMainContent && (
        <div>
          <ReactLenis root />
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