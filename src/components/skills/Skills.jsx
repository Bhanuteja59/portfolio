import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Skills.css";

function Skills() {
  const skillsData = [
    {
      category: "Front-End",
      technologies: "HTML, CSS, JS, Bootstrap, Tailwind CSS, React JS, Next JS",
      percent: 90,
      color: "bg-success",
    },
    {
      category: "Back-End",
      technologies: "Java, Python, C",
      percent: 85,
      color: "bg-info",
    },
    {
      category: "Database",
      technologies: "MySQL, MongoDB, PostgreSQL, SQLite",
      percent: 80,
      color: "bg-warning",
    },
    {
      category: "Testing",
      technologies: "Jest, SonarQube",
      percent: 85,
      color: "bg-dark",
    },
    {
      category: "Deployment",
      technologies: "Vercel, Render",
      percent: 80,
      color: "bg-danger",
    },
    {
      category: "Backend Tech",
      technologies: "Django, MERN Stack",
      percent: 70,
      color: "bg-secondary",
    },
    {
      category: "UI/UX Design",
      technologies: "Figma",
      percent: 90,
      color: "bg-info",
    },
  ];

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <div className="container py-5" id="skills" ref={ref}>
      <motion.h2
        className="text-center mb-5 title"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        💻 My Skillset
      </motion.h2>

      <div className="row g-4">
        {skillsData.map((skill, index) => (
          <motion.div
            key={index}
            className="col-md-6"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="skill-card shadow-sm p-4 rounded">
              <div className="d-flex justify-content-between align-items-center mb-1">
                <h5 className="mb-0 text-primary">{skill.category}</h5>
                <span className="text-muted">{skill.percent}%</span>
              </div>
              <p className="small text-muted">{skill.technologies}</p>
              <div className="progress">
                <motion.div
                  className={`progress-bar ${skill.color}`}
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.percent}%` } : {}}
                  transition={{ duration: 1 }}
                ></motion.div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
