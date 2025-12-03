// src/components/skills/Skills.jsx
import React, { useMemo, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import data from "../../user.json";
import "./Skills.css";

const CircularProgress = ({ percent = 0, size = 84, stroke = 8, colorClass = "progress-accent" }) => {
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const dash = (percent / 100) * circumference;
  const prefersReduced = useReducedMotion();

  return (
    <svg
      className="c-progress"
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      role="img"
      aria-label={`Skill level ${percent} percent`}
    >
      <defs>
        <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="var(--accent-from)" />
          <stop offset="100%" stopColor="var(--accent-to)" />
        </linearGradient>
      </defs>

      <g transform={`translate(${size / 2}, ${size / 2})`}>
        <circle
          r={radius}
          fill="transparent"
          stroke="var(--bg-progress)"
          strokeWidth={stroke}
          strokeLinecap="round"
        />
        <motion.circle
          r={radius}
          fill="transparent"
          stroke="url(#grad)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={`${circumference} ${circumference}`}
          strokeDashoffset={circumference - dash}
          initial={prefersReduced ? {} : { strokeDashoffset: circumference }}
          animate={prefersReduced ? {} : { strokeDashoffset: circumference - dash }}
          transition={{ duration: 1.1, ease: "easeOut" }}
        />
        <text
          x="0"
          y="6"
          textAnchor="middle"
          fontSize="14"
          fontWeight="600"
          fill="var(--text-muted)"
          className="c-progress-text"
        >
          {percent}%
        </text>
      </g>
    </svg>
  );
};

export default function Skills() {
  const skills = data.skills || [];
  const [filter, setFilter] = useState("All");
  const prefersReduced = useReducedMotion();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.18 });

  const categories = useMemo(() => ["All", ...Array.from(new Set(skills.map((s) => s.category)))], [skills]);

  const visible = useMemo(() => {
    return filter === "All" ? skills : skills.filter((s) => s.category === filter);
  }, [skills, filter]);

  return (
    <section id="skills" className="skills-section container py-5" ref={ref} aria-labelledby="skills-heading">
      <div className="d-flex align-items-center justify-content-between gap-3 mb-4">
        <h2 id="skills-heading" className="title mb-0">💻 My Skillset</h2>

        <div className="skills-controls">
          <label htmlFor="skill-filter" className="visually-hidden">Filter skills by category</label>
          <select
            id="skill-filter"
            className="form-select form-select-sm"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            aria-label="Filter skills by category"
          >
            {categories.map((c) => (
              <option key={c} value={c}>{c}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="skills-grid">
        {visible.map((skill, idx) => (
          <motion.article
            key={skill.category + idx}
            className="skill-card shadow-sm"
            role="article"
            aria-labelledby={`skill-${idx}-title`}
            initial={prefersReduced ? {} : { opacity: 0, y: 18 }}
            animate={inView ? (prefersReduced ? {} : { opacity: 1, y: 0 }) : {}}
            transition={{ duration: 0.6, delay: idx * 0.06 }}
            tabIndex="0"
          >
            <div className="skill-left">
              <CircularProgress percent={skill.percent} />
            </div>

            <div className="skill-right">
              <div className="skill-head">
                <h3 id={`skill-${idx}-title`} className="skill-title">{skill.category}</h3>
                <span className="skill-percent">{skill.percent}%</span>
              </div>

              <p className="skill-tech">{skill.technologies}</p>

              {/* Linear backup progress bar */}
              <div className="progress linear-progress" role="progressbar" aria-valuenow={skill.percent} aria-valuemin="0" aria-valuemax="100" aria-label={`${skill.category} proficiency`}>
                <motion.div
                  className={`progress-bar ${skill.color}`}
                  style={{ width: `${skill.percent}%` }}
                  initial={prefersReduced ? {} : { width: 0 }}
                  animate={inView ? (prefersReduced ? {} : { width: `${skill.percent}%` }) : {}}
                  transition={{ duration: 1.1, ease: "easeOut" }}
                />
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
