import React from "react";
import "./footer.css"; // Import the external CSS file

function Footer() {
  return (
    <footer className="footer" id="footer">
      {/* Social Media Links */}
      <div className="social-icons">
        <a href="mailto:bhanutejareddy59@gmail.com" className="social-btn google" target="_blank">
          <i className="fab fa-google"></i>
        </a>
        <a href="https://www.linkedin.com/in/reddy-bhanuteja-160bb4184/" className="social-btn linkedin" target="_blank">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a href="https://github.com/Bhanuteja59" className="social-btn github" target="_blank">
          <i className="fab fa-github"></i>
        </a>
      </div>

    </footer>
  );
}

export default Footer;
