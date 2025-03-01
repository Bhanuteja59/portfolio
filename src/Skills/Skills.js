import React from 'react';
import './skills.css';

function Skills() {
  const skillsData = [
    {
      name: 'HTML',
      percent: 90,
      color: 'bg-success',
    },
    {
      name: 'CSS',
      percent: 85,
      color: 'bg-info',
    },
    {
      name: 'JavaScript',
      percent: 80,
      color: 'bg-warning',
    },
    {
      name: 'React',
      percent: 75,
      color: 'bg-danger',
    },
    {
      name: 'MySQL',
      percent: 70,
      color: 'bg-secondary',
    },
    {
      name: 'Java',
      percent: 40,
      color: 'bg-primary',
    },
    {
      name: 'Python',
      percent: 45,
      color: 'bg-dark',
    },
    {
      name: 'Figma',
      percent: 90,
      color: 'bg-info',
    },
    {
      name: 'MERN Stack',
      percent: 70,
      color: 'bg-warning',
    },
  ];

  return (
    <div className="container py-5 skills" id="skills">
      <h2 className="text-center text-black mb-5">My Skills &#128187;</h2>
      <div className="row">
        <div className="col-lg-6">
          {skillsData.slice(0, 5).map((skill, index) => (
            <div className="mb-4" key={index}>
              <div className="d-flex justify-content-between align-items-center">
                <p className="skill-name"><strong>{skill.name}</strong></p>
                <p className="skill-percent">{skill.percent}%</p>
              </div>
              <div className="progress" data-aos="progress-bar" data-aos-duration="1500">
                <div
                  className={`progress-bar ${skill.color}`}
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-lg-6">
          {skillsData.slice(5).map((skill, index) => (
            <div className="mb-4" key={index}>
              <div className="d-flex justify-content-between align-items-center">
                <p className="skill-name"><strong>{skill.name}</strong></p>
                <p className="skill-percent">{skill.percent}%</p>
              </div>
              <div className="progress" data-aos="progress-bar" data-aos-duration="1500">
                <div
                  className={`progress-bar ${skill.color}`}
                  style={{ width: `${skill.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skills;
