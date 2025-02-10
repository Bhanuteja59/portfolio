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
    <section className="container my-5" data-aos="fade-up" id="certificates">
      <h2 className="text-center mb-4 fw-bold">🎓 Certificates</h2>
      <div className="card shadow-lg p-4 rounded border">
        <div id="certificatesCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
            {certificates.map((cert, index) => (
              <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`} data-bs-interval="3000">
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

          <button className="carousel-control-prev custom-carousel-btn" type="button" data-bs-target="#certificatesCarousel" data-bs-slide="prev">
            <span className="custom-icon">❮</span>
          </button>
          <button className="carousel-control-next custom-carousel-btn" type="button" data-bs-target="#certificatesCarousel" data-bs-slide="next">
            <span className="custom-icon">❯</span>
          </button>

        </div>
      </div>
      <hr />
    </section>
  );
};

export default Certificates;
