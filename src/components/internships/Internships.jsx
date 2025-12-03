// src/components/internships/InternshipHighlight.jsx
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import data from "../../user.json";
import "./Internships.css";

/**
 * Reads first internship from data.internships or uses fallback.
 * Presents a single prominent highlight card with CTA buttons.
 */

const FALLBACK = {
  title: "EDU SKILLS – GOOGLE (AI-ML) INTERNSHIP",
  company: "Google (Edu Skills - AI/ML)",
  period: "April - June 2025",
  bullets: [
    "Conducted extensive EDA using statistical summaries, correlation heatmaps, missing-value analysis, outlier detection, and pattern discovery to guide data cleaning and modeling decisions.",
    "Applied essential ML techniques such as feature scaling, encoding, and baseline model training to validate data quality and assess predictive signal.",
    "Built and deployed data workflows on Google Cloud and AI Platform for scalable data handling."
  ],    
  certificateUrl: "https://drive.google.com/file/d/1pC-qRQEjP_cT2Ew9Z07re1xXBtUJiUCD/view?usp=sharing" // optionally provide a URL here or in user.json
};

export default function InternshipHighlight({ showButtons = true }) {
  const internship = useMemo(() => {
    if (data?.internships && Array.isArray(data.internships) && data.internships.length) {
      // pick first internship as highlight (you can change logic)
      const first = data.internships[0];
      return {
        title: first.title || FALLBACK.title,
        company: first.place || first.company || FALLBACK.company,
        period: first.period || FALLBACK.period,
        bullets: first.bullets || FALLBACK.bullets,
        metrics: first.metrics || FALLBACK.metrics,
        certificateUrl: first.certificateUrl || FALLBACK.certificateUrl
      };
    }
    return FALLBACK;
  }, []);

  const downloadCertificate = () => {
    if (internship.certificateUrl) {
      window.open(internship.certificateUrl, "_blank", "noopener");
    } else {
      // graceful fallback: just copy title to clipboard or show details
      navigator.clipboard?.writeText(`${internship.title} - ${internship.company}`);
      alert("Certificate link not provided — title copied to clipboard as fallback.");
    }
  };

  return (

    <div>
        <br/>
        <h1 className="text-center mb-5 fw-bold display-5 title">🌐 Internships </h1>
    <motion.section
      id="internship-highlight"
      className="internship-highlight container my-5"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      aria-labelledby="internship-highlight-title"
    >
      <div className="highlight-card">
        <header className="highlight-head">
          <div className="company-badge" aria-hidden>
            {/* simple logo-ish circle — replace with an <img> if you have a logo URL */}
            <div className="company-logo">G</div>
          </div>

          <div className="highlight-meta">
            <h2 id="internship-highlight-title" className="highlight-title">{internship.title}</h2>
            <div className="highlight-sub">
              <span className="company-name">{internship.company}</span>
              <span className="dot">•</span>
              <span className="period">{internship.period}</span>
            </div>
          </div>
        </header>

        <div className="highlight-body">
          <div className="bullets">
            {internship.bullets.slice(0, 3).map((b, i) => (
              <div className="bullet" key={i}>
                <div className="bullet-icon" aria-hidden>
                  {/* simple inline SVG check */}
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden focusable="false">
                    <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <p className="bullet-text">{b}</p>
              </div>
            ))}
          </div>

          <aside className="highlight-side">
            <div className="metrics">
              {internship.metrics?.map((m, i) => (
                <div className="metric" key={i}>
                  <div className="metric-val">{m.value}</div>
                  <div className="metric-label">{m.label}</div>
                </div>
              ))}
            </div>

            {showButtons && (
              <div className="highlight-actions">
                <button className="btn btn-primary btn-lg" onClick={downloadCertificate}>
                  {internship.certificateUrl ? "Download Certificate" : "Get Certificate"}
                </button>

              </div>
            )}
          </aside>
        </div>

      </div>
    </motion.section>
        </div>
  );
}
