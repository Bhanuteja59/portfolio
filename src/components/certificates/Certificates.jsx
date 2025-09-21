import React, { useRef, useEffect, useState } from "react";
import "./Certificates.css";

const certificates = [
  {
    title: "Web Design - GUVI Hack A Thon",
    image:
      "https://github.com/Bhanuteja59/Bhanus-portfolio/blob/main/GuviCertification%20-%209n92982N1P97mYf720-1.png?raw=true",
  },
  {
    title: "Figma - UI/UX Design",
    image:
      "https://github.com/Bhanuteja59/Bhanus-portfolio/blob/main/126808753-1.jpg?raw=true",
  },
  {
    title: "Bootstrap and JQuery",
    image:
      "https://github.com/Bhanuteja59/Bhanus-portfolio/blob/main/101817946%20(1).jpg?raw=true",
  },
];

const Certificates = () => {
  const scrollRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const CARD_WIDTH = 320; // card width + gap

  const extendedCertificates = [...certificates, ...certificates, ...certificates];

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    container.scrollLeft = container.scrollWidth / 3;

    const autoplay = setInterval(() => {
      if (!isHovered) container.scrollBy({ left: CARD_WIDTH, behavior: "smooth" });
    }, 3000);

    return () => clearInterval(autoplay);
  }, [isHovered]);

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const scrollAmount = direction === "left" ? -CARD_WIDTH : CARD_WIDTH;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });

    setTimeout(() => {
      const maxScroll = container.scrollWidth;
      const third = maxScroll / 3;

      if (container.scrollLeft <= 0) container.scrollLeft = third;
      else if (container.scrollLeft >= maxScroll - container.clientWidth)
        container.scrollLeft = third - container.clientWidth;
    }, 500);
  };

  return (
    <div
      className="certificates-section"
      id="certificates"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <h2 className="section-title">🎓 My Certificates</h2>

      <div className="cert-scroll-wrapper" ref={scrollRef}>
        {extendedCertificates.map((cert, index) => (
          <div key={index} className="cert-card">
            <img src={cert.image} alt={cert.title} />
            <p>{cert.title}</p>
          </div>
        ))}
      </div>

      <div className="cert-buttons">
        <button onClick={() => scroll("left")} className="scroll-btn">
          &larr;
        </button>
        <button onClick={() => scroll("right")} className="scroll-btn">
          &rarr;
        </button>
      </div>
    </div>
  );
};

export default Certificates;
