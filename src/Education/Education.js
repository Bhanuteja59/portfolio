import {React, useEffect} from 'react';
import './education.css';
import AOS from 'aos'; 
import 'aos/dist/aos.css'; 

function Education() {

    useEffect(() => {
      AOS.init({
        duration: 1200, 
        easing: 'ease-in-out', 
        once: true, 
      });
    }, []);

  return (
    <section id="education" className="education-section py-5" data-aos="zoom-in">
      <div className="container">
        <h2 className="education-heading text-center mb-5">Education</h2>
        <div className="row">
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="education-item p-4 shadow-sm rounded">
              <h3 className="education-title">Graduation</h3>
              <p className="education-details">
                <strong>SVREC (2022 - 2026)</strong> - B.Tech in Computer Science Engineering (AI), Nandyal
              </p>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="education-item p-4 shadow-sm rounded">
              <h3 className="education-title">Intermediate</h3>
              <p className="education-details">
                <strong>Sri Chaitanya College (2020 - 2022)</strong> - MPC, Kurnool
              </p>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="education-item p-4 shadow-sm rounded">
              <h3 className="education-title">SSC</h3>
              <p className="education-details">
                <strong>Sri Chaitanya Techno School (2020)</strong> - Nandyal
              </p>
            </div>
          </div>
        </div>
      </div>

      <br />
    </section>
    
  );
}

export default Education;
