import React from "react";
import data from "../../user.json";
import "./Achievements.css";

const Achievements = () => {
  const { achievements } = data;
  return (
    <section className="container my-5" id="achievements">
      <h2 className="text-center mb-5 title">🏅 Achievements</h2>
      <div className="row g-4">
        {achievements.map((item, i) => (
          <div className="col-md-6 col-lg-4" key={i}>
            <div className="card achievement-card h-100 shadow-sm">
              <div className="card-body side">
                <h5 className="card-title">{item.title}</h5>
                <h6 className="card-subtitle text-muted mb-2">{item.subtitle}</h6>
                <p className="card-text">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
