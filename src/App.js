import React, { useState, useEffect } from 'react';
import './App.css';

import Header from './Header/Header';
import Hero from './Hero/Hero';
import Education from './Education/Education';
import Skills from './Skills/Skills';
import Certificates from './Certificates/Certificates';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

import SplashCursor from './SplashCursor';


function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);
  
  return (
    <div className="App">
      {loading ? (
        <div className="loading-container">
          <div className="loading-screen">
            <h1 className="loading-text">Bhanu's Portfolio</h1>
          </div>
        </div>
      ) : (

        <>
          <Header />
          <Hero />
          <Education />
          <Skills />
          <Certificates />
          <Projects />
          <Contact />

          <SplashCursor />
        </>
      )}
    </div>
  );
}

export default App;
