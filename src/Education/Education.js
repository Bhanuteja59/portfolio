import React from 'react';
import './education.css'

function Education() {
  return (
    <div>
      
      <div className="container education" id="education" >
        <h2 className="education-heading text-center mb-5">
          <i className="bi bi-book-half me-3"></i>
          &#127890; Education
        </h2>
        <div className="row">
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="education-item p-4 shadow-lg rounded">
              <h3 className="education-title">Graduation</h3>
              <p className="education-details">
                <strong>SVREC (2022 - 2026)</strong> - B.Tech - Computer Science Engineering (AI), Nandyal
              </p>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="education-item p-4 shadow-lg rounded">
              <h3 className="education-title">Intermediate</h3>
              <p className="education-details">
                <strong>Sri Chaitanya College (2020 - 2022)</strong> - MPC, Kurnool
              </p>
            </div>
          </div>
          
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="education-item p-4 shadow-lg rounded">
              <h3 className="education-title">SSC</h3>
              <p className="education-details">
                <strong>Sri Chaitanya Techno School (2020)</strong> - Nandyal
              </p>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  )
}

export default Education
