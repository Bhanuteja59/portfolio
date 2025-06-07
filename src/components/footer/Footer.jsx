import React from "react";
import "./Footer.css"; 

function Footer() {
  return (
    <footer className="footer bg-mute" id="footer">
      <h2 className="text-success fw-bold"> Want to Connect More ??  </h2>
      <div className="social-icons">
        <a href="mailto:bhanutejareddy59@gmail.com" className="social-btn google" target="_blank" rel="noreferrer">
          <i className="fab fa-google"></i>
        </a>
        <a href="https://www.linkedin.com/in/reddy-bhanuteja-160bb4184" className="social-btn linkedin" target="_blank" rel="noreferrer">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/Bhanuteja59" className="social-btn github" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </div>

    </footer>
  );
}

export default Footer;
