import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./App.css";

import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Education from "./components/education/Education";
import Achievements from "./components/achievements/Achievements"
import Skills from "./components/skills/Skills";
import Certificates from "./components/certificates/Certificates";
import Projects from "./components/projects/Projects";
import Links from "./components/links/Links";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

import SplashCursor from "./components/splashCursor/splashCursor";

function App() {
  const [loading, setLoading] = useState(true);
  const text = "Bhanu's   Portfolio".split("");
  const matrixChars = "01∆ΣΩΛΞΨΦΘ∇⊕⚛︎π".split("");

  // Generate random matrix characters
  const getRandomChar = () =>
    matrixChars[Math.floor(Math.random() * matrixChars.length)];

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3500);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <motion.div
          className="loading-container"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          {/* Matrix Falling Code Effect */}
          <div className="matrix-code">
            {Array.from({ length: 120 }).map((_, i) => (
              <span key={i} style={{ animationDelay: `${Math.random() * 2}s` }}>
                {getRandomChar()}
              </span>
            ))}
          </div>

          {/* Glitching Title Animation */}
          <motion.div
            className="glitch-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {text.map((letter, index) => (
              <motion.span
                key={index}
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 150,
                }}
              >
                {letter}
              </motion.span>
            ))}
          </motion.div>

          {/* Loading Message */}
          <motion.p
            className="loading-subtext"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            Where the magic happens......
          </motion.p>
        </motion.div>
      ) : (
        <>
          <Header />
          <Hero />
          <Education />
          <Achievements />
          <Skills />
          <Certificates />
          <Projects />
          <Links />
          <Contact />
          <SplashCursor />
          <Footer />
        </>
      )}
    </div>
  );
}

export default App;
