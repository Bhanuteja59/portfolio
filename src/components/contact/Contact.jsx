import React from 'react';
import { motion } from 'framer-motion';
import './Contact.css';

function Contact() {
  return (
    <motion.div
      id="contact"
      className="contact-me contact container my-5 p-5 shadow-lg rounded bg-white"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <section>
        <motion.h2
          className="title text-center mb-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          📬 Get in Touch
        </motion.h2>

        <div className="row justify-content-center g-4">
          {/* Email Card */}
          <motion.div
            className="col-sm-10 col-md-6 col-lg-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div className="contact-card text-center p-4 rounded shadow-sm" whileHover={{ scale: 1.05 }}>
              <i className="bi bi-envelope-fill contact-icon"></i>
              <h5 className="mt-3 mb-2">Email</h5>
              <p>
                <a href="mailto:bhanutejareddy59@gmail.com " className="contact-link text-primary">
                  bhanutejareddy59@gmail.com
                </a>
              </p>
            </motion.div>
          </motion.div>

          {/* Location Card */}
          <motion.div
            className="col-sm-10 col-md-6 col-lg-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.div className="contact-card text-center p-4 rounded shadow-sm" whileHover={{ scale: 1.05 }}>
              <i className="bi bi-geo-alt-fill contact-icon"></i>
              <h5 className="mt-3 mb-2">Location</h5>
              <p>
                <a
                  href="https://maps.app.goo.gl/89oXYUW2RJTp763J8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link text-primary"
                >
                  Julepalle, Andhra Pradesh
                </a>
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}

export default Contact;
