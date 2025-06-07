import React from 'react';
import './Achievements.css'; // Custom styles

const achievements = [
  {
    title: 'JEE-Main`s ',
    subtitle: '2022',
    description:
      'Qualified in the JEE-Main`s Exam and secured 84.7 percentile.',
  },
  {
    title: 'NPTEL SWAYAM ',
    subtitle: 'NPTEL | 2025',
    description:
      'Qualified as Topper of NPTEL SWAYAM and secured 92 percentile.',
  },
];

const Achievements = () => {
  return (
    <section className="container my-5" id="achievements">
      <br />
      <h2 className="text-center mb-5 title">🏅 Achievements</h2>
      <div className="row g-4">
        {achievements.map((item, index) => (
          <div className="col-md-6 col-lg-4" key={index}>
            <div className="card achievement-card h-100 shadow-sm">
              <div className="card-body">
                <br />
                <h5 className="card-title">{item.title}</h5>
                <h6 className="card-subtitle text-muted mb-2">{item.subtitle}</h6>
                <p className="card-text">{item.description}</p>
                <br/>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
