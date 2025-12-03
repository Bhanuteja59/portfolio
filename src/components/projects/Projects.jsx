import React from "react";
import { motion } from "framer-motion";
import data from "../../user.json";
import "./Projects.css";

const Projects = () => {
  const { projects } = data;

  return (
    <div className="container p-4 shadow-lg rounded" id="projects">
      <h2 className="text-center mb-5 title">Projects 📊</h2>
      <div className="row g-4">
        {projects.map((project, idx) => (
          <motion.div
            key={idx}
            className="col-md-6 col-lg-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            viewport={{ once: true }}
          >
            <motion.div className="card project-card" whileHover={{ scale: 1.05 }}>
              <img className="card-img-top project-img" src={project.image} alt={project.title} loading="lazy" />
              <div className="card-body">
                <h4 className="card-title">{project.title}</h4>
                <div className="card-text d-flex justify-content-center flex-wrap gap-2 my-3">
                  {project.badges.map((b, i) => (
                    <span key={i} className="badge bg-secondary">{b}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-success m-2">
                  View Project
                </a>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
