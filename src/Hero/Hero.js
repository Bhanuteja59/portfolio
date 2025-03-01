import React, { useState, useEffect } from 'react';
import './hero.css';
import Typed from 'typed.js';


function Hero() {
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const typed = new Typed('.typed', {
      strings: ["Developer...", "Front end...", "Programmer..."],
      typeSpeed: 100,
      backDelay: 1500,
      smartBackspace: true,
      loop: true,
    });

    return () => typed.destroy(); 
  }, []);

  const splitText = (text) => {
    return text.split('').map((char, index) => (
      <span className="falling-letter" key={index}>{char}</span>
    ));
  };

  const handleImageClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="hero-container hero" id="hero">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 text-center text-section">
            <div className="typed-div">
              <h1 className="hero-title">{splitText("It’s Teja")}</h1>
              <span className="typed">I am a</span>
            </div>
            <p className="hero-description">
              Hello! I'm Teja, a passionate and ambitious individual currently in the process of graduating. My enthusiasm lies in the dynamic world of web development, where creativity meets technology to build engaging digital experiences.
            </p>
            
            <a href="https://github.com/Bhanuteja59/Bhanus-portfolio/blob/main/resume.pdf" download="Teja_Resume.pdf" target="_blank">
              <button className="button button-item mt-5">
                <span className="button-bg">
                  <span className="button-bg-layers">
                    <span className="button-bg-layer button-bg-layer-1 -purple"></span>
                    <span className="button-bg-layer button-bg-layer-2 -turquoise"></span>
                    <span className="button-bg-layer button-bg-layer-3 -yellow"></span>
                  </span>
                </span>
                <span className="button-inner">
                  <span className="button-inner-static">Resume</span>
                  <span className="button-inner-hover">Download</span>
                </span>
              </button>
            </a>

            <div className="social-icons">
              <a href="mailto:bhanutejareddy59@gmail.com" className="social-btn google" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-google"></i>
              </a>
              <a href="https://www.linkedin.com/in/reddy-bhanuteja-160bb4184/" className="social-btn linkedin" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="https://github.com/Bhanuteja59" className="social-btn github" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
            </div>
          </div>

<<<<<<< HEAD
          <div className="col-12 col-md-6 text-center" >
            <div
              className={`image-container ${isClicked ? 'clicked' : ''}`}
              onClick={handleImageClick}
            >
              <img
                src="https://github.com/Bhanuteja59/Bhanus-portfolio/blob/main/upscalemedia-transformed.png?raw=true"
                alt="profile"
                className="img-fluid"
              />
=======
          <div className="col-12 col-md-6 text-center">
            <div className="image-container">
              <img src="https://github.com/Bhanuteja59/Bhanus-portfolio/blob/main/upscalemedia-transformed.png?raw=true" alt="profile" className="img-fluid" />
>>>>>>> d0721f34b034f6af01a683023e9c2f8743387b19
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
