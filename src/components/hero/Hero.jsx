import React, { useState, useEffect } from "react";
import "./Hero.css";
import Typed from "typed.js";
import { motion } from "framer-motion";

import image from "../../assests/bhanu image.jpg"

function Hero() {

    const [isClicked, setIsClicked] = useState(false);

    useEffect(() => {
        const typed = new Typed(".typed", {
            strings: ["Full Stack Developer...", "Programmer...", "UI/UX Designer..."],
            typeSpeed: 100,
            backDelay: 1500,
            smartBackspace: true,
            loop: true,
        });

        return () => typed.destroy();
    }, []);

    const splitText = (text) => {
        return text.split("").map((char, index) => (
            <motion.span
                className="falling-letter"
                key={index}
                initial={{ opacity: 0, y: -15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }} // Slower appearance
            >
                {char}
            </motion.span>
        ));
    };

    const handleImageClick = () => {
        setIsClicked(!isClicked);
    };

    return (
        <motion.div
            className="hero-container hero"
            id="hero"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
        >
            <div className="container">
                <div className="row align-items-center">
                    {/* Left Section - Text */}
                    <div className="col-12 col-md-6 text-center text-section">
                        <div className="typed-div">
                            <motion.h1
                                className="hero-title"
                                initial={{ y: -20, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, type: "spring" }}
                            >
                                {splitText("It’s Teja")}
                            </motion.h1>
                            <span className="typed">I am a</span>
                        </div>
                        <p className="hero-description">
                            Hello! I'm Teja, a passionate and ambitious individual currently
                            in the process of graduating. My enthusiasm lies in the dynamic
                            world of web development, where creativity meets technology to
                            build engaging digital experiences.
                        </p>

                        {/* Resume Button */}
                        <motion.a
                            href="https://drive.google.com/file/d/1cSTMl0TAfXciHijPiBjP-tHTXLJMynE4/view?usp=drive_link"
                            download="Teja_Resume.pdf"
                            target="_blank"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
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
                        </motion.a>

                        {/* Social Icons */}
                        <div className="social-icons">
                            {[
                                { link: "mailto:bhanutejareddy59@gmail.com", icon: "fab fa-google", className: "google" },
                                { link: "https://www.linkedin.com/in/reddy-bhanuteja-160bb4184/", icon: "fab fa-linkedin-in", className: "linkedin" },
                                { link: "https://github.com/Bhanuteja59", icon: "fab fa-github", className: "github" },
                            ].map((social, index) => (
                                <motion.a
                                    key={index}
                                    href={social.link}
                                    className={`social-btn ${social.className}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ scale: 1.2, rotate: 5 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    <i className={social.icon} aria-hidden="true"></i>
                                </motion.a>
                            ))}
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="col-12 col-md-6 text-center">
                        <motion.div
                            className={`image-container ${isClicked ? "clicked" : ""}`}
                            onClick={handleImageClick}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.5 }}
                        >
                            <motion.img
                                src={image}
                                alt="profile"
                                className="img-fluid"
                                animate={{ rotate: isClicked ? 10 : 0 }}
                                transition={{ type: "spring", stiffness: 200 }}
                            />
                        </motion.div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export default Hero;
