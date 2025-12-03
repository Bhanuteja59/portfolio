import React from "react";
import data from "../../user.json";
import "./Education.css";

const Education = () => {
  const { education } = data;
  return (
    <section className="container my-5" id="education">
      <h2 className="text-center mb-5 title">📘 My Education Journey</h2>
      <div className="row g-4">
        {education.map((edu, i) => (
          <div className="col-md-6 col-lg-4" key={i}>
            <div className="edu-box shadow-sm h-100">
              <div className="edu-header">
                <h5 className="mb-1">{edu.school}</h5>
                <span className="edu-period">{edu.period}</span>
              </div>
              <div className="edu-body">
                <span className="edu-degree">{edu.degree}</span>
                <p className="mt-3">{edu.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
