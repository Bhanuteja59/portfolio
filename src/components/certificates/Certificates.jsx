// src/components/certificates/Certificates.jsx
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import data from "../../user.json";
import "./Certificates.css";

const Certificates = () => {
  const { certificates = [] } = data;
  const [isOpen, setIsOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const lastActiveRef = useRef(null);

  // open modal at index
  const openModal = (idx, e) => {
    lastActiveRef.current = e?.currentTarget;
    setActiveIdx(idx);
    setIsOpen(true);
    document.body.style.overflow = "hidden"; // prevent background scroll
  };

  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = "";
    // return focus to the last clicked card for accessibility
    if (lastActiveRef.current) lastActiveRef.current.focus();
  };

  const showPrev = () => setActiveIdx((i) => (i - 1 + certificates.length) % certificates.length);
  const showNext = () => setActiveIdx((i) => (i + 1) % certificates.length);

  // keyboard navigation inside modal
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, certificates.length]);

  // Preload adjacent images for smoother swiping
  useEffect(() => {
    if (!isOpen) return;
    const next = (activeIdx + 1) % certificates.length;
    const prev = (activeIdx - 1 + certificates.length) % certificates.length;
    [next, prev].forEach((i) => {
      const img = new Image();
      img.src = certificates[i]?.image;
    });
  }, [isOpen, activeIdx, certificates]);

  return (
    <section id="certificates" className="container my-5">
      <h2 className="text-center mb-4 title">🎓 Certificates</h2>

      {/* Grid */}
      <div className="cert-grid" role="list">
        {certificates.map((cert, idx) => (
          <motion.button
            key={cert.title + idx}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="cert-card"
            onClick={(e) => openModal(idx, e)}
            aria-label={`Open certificate ${cert.title}`}
            role="listitem"
          >
            <div className="cert-thumb">
              <img src={cert.image} alt={cert.title} loading="lazy" />
            </div>
            <div className="cert-meta">
              <h5 className="cert-title">{cert.title}</h5>
            </div>
          </motion.button>
        ))}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isOpen && certificates[activeIdx] && (
          <motion.div
            className="cert-modal-backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={(e) => {
              // close when clicking backdrop only
              if (e.target === e.currentTarget) closeModal();
            }}
          >
            <motion.div
              className="cert-modal"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 16, stiffness: 200 }}
              role="dialog"
              aria-modal="true"
              aria-label={`Certificate viewer: ${certificates[activeIdx].title}`}
            >
              <button className="cert-close" onClick={closeModal} aria-label="Close certificate viewer">
                ✕
              </button>

              <div className="cert-viewer">
                <button className="nav-btn prev" onClick={showPrev} aria-label="Previous certificate">
                  ‹
                </button>

                <div className="cert-image-wrap">
                  <img
                    src={certificates[activeIdx].image}
                    alt={certificates[activeIdx].title}
                    loading="eager"
                    className="cert-large"
                  />
                  <div className="cert-caption">
                    <strong>{certificates[activeIdx].title}</strong>
                  </div>
                </div>

                <button className="nav-btn next" onClick={showNext} aria-label="Next certificate">
                  ›
                </button>
              </div>

              {/* Thumbnails */}
              <div className="cert-thumbs">
                {certificates.map((c, i) => (
                  <button
                    key={c.title + i}
                    className={`thumb-btn ${i === activeIdx ? "active" : ""}`}
                    onClick={() => setActiveIdx(i)}
                    aria-label={`Open ${c.title}`}
                  >
                    <img src={c.image} alt={c.title} loading="lazy" />
                  </button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certificates;
