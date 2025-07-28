import React from 'react';
import { motion } from 'framer-motion';
import './Projects.css';

function Projects() {
  const projects = [
    {
      title: "Maths World - A Maths Learning Platform",
      image: "https://github.com/Bhanuteja59/waste/blob/main/Screenshot%202025-05-02%20154819.png?raw=true",
      link: "https://maths-world.vercel.app/",
      badges: ['NextJS', 'JavaScript', 'TailwindCSS', 'Bootstrap']
    },
    {
      title: "Carrer Guidence ",
      image: "https://github.com/Bhanuteja59/waste/blob/main/Screenshot%202025-06-06%20092944.png?raw=true",
      link: "https://carrer-guide-five.vercel.app/",
      badges: ['Reactjs', 'JavaScript', 'Bootstrap', 'TailwindCSS']
    },
    {
      title: "Online Connect - Online Invitation ",
      image: "https://github.com/Bhanuteja59/waste/blob/main/Screenshot%202025-06-06%20094307.png?raw=true",
      link: "https://online-connect.onrender.com/",
      badges: ['Django', 'Django-ORM', 'DBSqlite', 'Bootstrap', 'TailwindCSS']
    },
    {
      title: "Click-kart Web Design",
      image: "https://github.com/Bhanuteja59/waste/blob/main/clickkart.jpeg?raw=true",
      link: "https://www.figma.com/proto/dJCPXZBp6x3Oj7pgIkT6p9/Untitled?node-id=401-66&node-type=frame&t=qrgjyn9kVR1SixvA-1&scaling=scale-down&content-scaling=fixed&page-id=401%3A39",
      badges: ['Figma', 'UI/UX']
    },
    {
      title: "Mobile Login Illustration",
      image: "https://cdni.iconscout.com/illustration/premium/thumb/mobile-login-illustration-download-in-svg-png-gif-file-formats--security-protection-secure-smartphone-encrypted-phone-seo-ppc-pack-business-illustrations-4708053.png",
      link: "https://www.figma.com/proto/ySscxccvvyEYPTTB6lHqvb/Bhanu%60s-Design?node-id=1-720&t=ronKg1kdjzLpLdEi-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A66",
      badges: ['Figma', 'UI/UX']
    }
  ];

  return (
    <div className="container p-4 shadow-lg rounded" id="projects">
      <div className="text-black" >
        <h2 className="text-center mb-5 title">Projects 📊</h2>

        <div className="row g-4">
          {projects.map((project, index) => (
            <motion.div 
              key={index} 
              className="col-md-6 col-lg-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="card project-card"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <img className="card-img-top project-img" src={project.image} alt={`Project ${index + 1}`} />
                <div className="card-body">
                    <h4 className="card-title">{project.title}</h4>
                    <br/>
                  {/* Center-align badges */}
                  <div className="card-text d-flex justify-content-center flex-wrap gap-2">
                    {project.badges.map((badge, idx) => (
                      <span key={idx} className="badge bg-secondary">{badge}</span>
                    ))}
                    <br />
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="btn btn-success m-2"> View Project</a>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
