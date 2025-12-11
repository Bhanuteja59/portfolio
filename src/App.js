import React, { useState, useEffect, Suspense } from "react";
import { motion } from "framer-motion";
import "./App.css";

// top-level components (non-lazy)
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import ErrorBoundary from "./components/common/ErrorBoundary";
import SuspenseFallback from "./components/common/SuspenseFallback";

// lazy-loaded route sections
const Education = React.lazy(() => import("./components/education/Education"));
const Achievements = React.lazy(() => import("./components/achievements/Achievements"));
const Skills = React.lazy(() => import("./components/skills/Skills"));
const Certificates = React.lazy(() => import("./components/certificates/Certificates"));
const Projects = React.lazy(() => import("./components/projects/Projects"));
const Links = React.lazy(() => import("./components/links/Links"));
const Internships = React.lazy(() => import("./components/internships/Internships"));
// and inside Suspense: <Internships />
const Contact = React.lazy(() => import("./components/contact/Contact"));
const Footer = React.lazy(() => import("./components/footer/Footer"));
const SplashCursor = React.lazy(() => import("./components/splashCursor/splashCursor"));

function App() {
  const [loading, setLoading] = useState(true);
  const text = "Bhanu's   Portfolio".split("");
  const matrixChars = "01∆ΣΩΛΞΨΦΘ∇⊕⚛︎π".split("");

  const getRandomChar = () => matrixChars[Math.floor(Math.random() * matrixChars.length)];

  useEffect(() => {
    // use variable so we can clear properly on unmount
    const t = setTimeout(() => setLoading(false), 2500);
    return () => clearTimeout(t);
  }, []);

  if (loading) {
    return (
      <motion.div
        className="loading-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="matrix-code">
          {Array.from({ length: 80 }).map((_, i) => (
            <span key={i} style={{ animationDelay: `${Math.random() * 2}s` }}>
              {getRandomChar()}
            </span>
          ))}
        </div>

        <motion.div className="glitch-text" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
          {text.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ y: -60, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: index * 0.06, type: "spring", stiffness: 160 }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>

        <motion.p className="loading-subtext" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.2 }}>
          Where the magic happens......
        </motion.p>
      </motion.div>
    );
  }

  return (
    <div className="App">
      <ErrorBoundary>
        <Header />
        <Hero />

        {/* Single Suspense wrapper with a lightweight shared fallback.
            This keeps markup simple and provides consistent UX across lazy components. */}
        <Suspense fallback={<SuspenseFallback message="Loading section..." />}>
          <Education />
          <Achievements />
          <Internships />
          <Skills />
          <Certificates />
          <Projects />
          <Links />
          <Contact />
          <Footer />
          <SplashCursor />
        </Suspense>
      </ErrorBoundary>
    </div>
  );
}

export default App;
