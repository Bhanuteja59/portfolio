import Certificates from "./Certificates/Certificates";
import Contact from "./Contact/Contact";
import Education from "./Education/Education";
import Header from "./Header/Header";
import Hero from "./Hero/Hero";
import Projects from "./Projects/Projects";
import Skills from "./Skills/Skills";


import './App.css';
import Footer from "./Footer/Footer";


function App() {
  return (
    <div className="App">

      <Header />
      <Hero />
      <Education />
      <Skills />
      <Certificates />
      <Projects />
      <Contact />
      <Footer />

    </div>
  );
}

export default App;
