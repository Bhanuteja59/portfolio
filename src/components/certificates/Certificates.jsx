import React, { useRef, useEffect } from "react";
import "./Certificates.css";

const certificates = [
    {
        title: "Core Java Programming",
        image: "https://github.com/Bhanuteja59/Bhanus-portfolio/blob/main/Reddy%20Bhanu%20Teja.img_page-0001.jpg?raw=true",
        url: "#",
    },
    {
        title: "Web Design - GUVI Hack A Thon",
        image: "https://github.com/Bhanuteja59/Bhanus-portfolio/blob/main/GuviCertification%20-%209n92982N1P97mYf720-1.png?raw=true",
        url: "#",
    },
    {
        title: " Figma - UI/UX Design",
        image: "https://github.com/Bhanuteja59/Bhanus-portfolio/blob/main/126808753-1.jpg?raw=true",
        url: "#",
    },
    {
        title: "Bootstrap and JQuery",
        image: "https://github.com/Bhanuteja59/Bhanus-portfolio/blob/main/101817946%20(1).jpg?raw=true",
        url: "#",
    },
    {
        title: "Java Script ",
        image: "https://github.com/Bhanuteja59/Bhanus-portfolio/blob/main/100737056.jpg?raw=true",
        url: "#",
    },
];

const Certificates = () => {
    const scrollRef = useRef(null);
    const CARD_WIDTH = 300 + 25; // Card width + gap

    // Duplicate data for seamless infinite scroll
    const extendedCertificates = [...certificates, ...certificates, ...certificates];

    useEffect(() => {
        const container = scrollRef.current;
        if (!container) return;

        // Initial scroll to center section
        container.scrollLeft = container.scrollWidth / 3;
    }, []);

    const scroll = (direction) => {
        const container = scrollRef.current;
        if (!container) return;

        const scrollAmount = direction === "left" ? -CARD_WIDTH : CARD_WIDTH;
        container.scrollBy({ left: scrollAmount, behavior: "smooth" });

        // Infinite logic
        setTimeout(() => {
            const maxScroll = container.scrollWidth;
            const third = maxScroll / 3;

            if (container.scrollLeft <= 0) {
                container.scrollLeft = third;
            } else if (container.scrollLeft >= maxScroll - container.clientWidth) {
                container.scrollLeft = third - container.clientWidth;
            }
        }, 400); // match scroll duration
    };

    return (
        <div className="cert-scroll-container " id="certificates">
            <h2 className="text-center mb-4 title">🎓 My Certificates</h2>

            <div className="cert-scroll-wrapper" ref={scrollRef}>
                {extendedCertificates.map((cert, index) => (
                    <a
                        key={index}
                        href={cert.url}
                        className="cert-card "
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={cert.image} alt={cert.title} />
                        <p>{cert.title}</p>
                    </a>
                ))}
            </div>
            <br />

            <div className="cert-buttons">
                <button onClick={() => scroll("left")}>&larr;</button>
                <button onClick={() => scroll("right")}>&rarr;</button>
            </div>

        </div>
    );
};

export default Certificates;
