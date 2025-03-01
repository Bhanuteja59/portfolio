import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const certificates = [
  {
    image: "https://github.com/Bhanuteja59/Bhanus-portfolio/blob/main/126808753-1.jpg?raw=true",
    link: "https://www.linkedin.com/embed/feed/update/urn:li:share:7228402941630562304",
    alt: "Figma UI/UX Certificate",
  },
  {
    image: "https://github.com/Bhanuteja59/Bhanus-portfolio/blob/main/Reddy%20Bhanu%20Teja.img_page-0001.jpg?raw=true",
    link: "https://www.linkedin.com/embed/feed/update/urn:li:share:7208176029448691712",
    alt: "Java Programming Certificate",
  },
  {
    image: "https://github.com/Bhanuteja59/Bhanus-portfolio/blob/main/99705372.jpg?raw=true",
    link: "https://www.linkedin.com/embed/feed/update/urn:li:share:7114038354031116289",
    alt: "Bootstrap Certificate",
  },
  {
    image: "https://github.com/Bhanuteja59/Bhanus-portfolio/blob/main/100737056.jpg?raw=true",
    link: "https://www.linkedin.com/embed/feed/update/urn:li:share:7109716936451620864",
    alt: "JavaScript Certificate",
  },
  {
    image: "https://github.com/Bhanuteja59/Bhanus-portfolio/blob/main/GuviCertification%20-%209n92982N1P97mYf720-1.png?raw=true",
    link: "https://www.linkedin.com/embed/feed/update/urn:li:share:7105731437592539136",
    alt: "GUVI Geek Networks Certificate",
  },
];

const Certificates = () => {
  return (
<<<<<<< HEAD
    <section className="container my-5" id="certificates">
      <div className="card shadow-lg p-4 rounded border">
      <h2 className="text-center mb-4 fw-bold">🎓 Certificates</h2>
=======
    <section className="container my-5" data-aos="fade-up" id="certificates">
      <div className="card shadow-lg p-4 rounded border">
        <h2 className="text-center mb-4 fw-bold">🎓 Certificates</h2>
>>>>>>> d0721f34b034f6af01a683023e9c2f8743387b19
        <div id="certificatesCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {certificates.map((cert, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`} data-bs-interval="1500">
                <div className="d-flex justify-content-center">
                  <img 
                    src={cert.image} 
                    alt={cert.alt} 
                    className="img-fluid rounded shadow-lg zoom" 
                    style={{ maxHeight: "500px", objectFit: "contain" }} 
                  />
                </div>
                <div className="text-center mt-3">
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="btn btn-primary btn-lg custom-btn"
                  >
                    View Certificate
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Left Button */}
          <button className="carousel-control-prev custom-carousel-btn" type="button" data-bs-target="#certificatesCarousel" data-bs-slide="prev">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chevron-compact-left" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223"/>
          </svg>
          </button>

          {/* Right Button */}
          <button className="carousel-control-next custom-carousel-btn" type="button" data-bs-target="#certificatesCarousel" data-bs-slide="next">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-chevron-compact-right" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671" />
            </svg>
          </button>
        </div>
      </div>
      <hr />
    </section>
  );
};

export default Certificates;
