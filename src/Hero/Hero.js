import React, { useEffect } from 'react';
import './hero.css';
import Typed from 'typed.js';

function Hero() {
  useEffect(() => {
    const typed = new Typed('.typed', {
      strings: ["Developer...", "Front end...", "Programmer..."],
      typeSpeed: 100,
      backDelay: 1500,
      smartBackspace: true,
      loop: true
    });
  }, []);

  return (
    <div className="hero-container" id="home">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 text-center text-md-left mb-4 mb-md-0">
            <div className="typed-div">
              <h1 className="hero-title">It’s Teja</h1>
              <span className="typed">I am a</span>
            </div>
            <p className="hero-description">
              Hello! I'm Teja, a passionate and ambitious individual currently in the process of graduating. My enthusiasm lies in the dynamic world of web development, where creativity meets technology to build engaging digital experiences.
            </p>
          </div>

          <div className="col-12 col-md-6 text-center">
            <div className="image-container">
              <img src="/Bhanu.png" alt="profile" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
      <br /><br />
      <hr />
    </div>
  );
}

export default Hero;
