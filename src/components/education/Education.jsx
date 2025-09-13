import React from 'react';
import './Education.css';

const educationData = [
  {
    school: 'SVR Engineering College',
    degree: 'B.Tech in CSE-AI',
    period: '2022-2026 , Nandyal',
    description:
      'Graduated with honors. Specialized in full-stack web development, UI/UX design.',
  },
  {
    school: 'Sri Chaitanya Junior College',
    degree: 'Intermediate (MPC)',
    period: '2020 - 2022 , Kurnool',
    description:
      'Excelled in Physics, Chemistry, and Math. Achieved a better understanding of Mathematical concepts.',
  },
  {
    school: 'Sri Chaitanya Techno School',
    degree: 'Secondary School of Education (SSC)',
    period: '2020 , Nandyal',
    description:
      'Active involvement in science fairs and quiz competitions.',
  },
];

const Education = () => {
  return (
    <section className="container my-5" id="education">
      <h2 className="text-center mb-5 title">📘 My Education Journey</h2>
      <div className="row g-4">
        {educationData.map((edu, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
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
