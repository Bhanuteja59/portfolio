import React from "react";
import data from "../../user.json";
import iconMap from "../../utils/iconMap";
import "./Links.css";

const Links = () => {
  const { links } = data;

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5 fw-bold display-5 title">🌐 My Online Profiles</h1>
      <div className="row g-4">
        {links.map((link, idx) => {
          const Icon = iconMap[link.icon];
          return (
            <div key={idx} className="col-md-6 col-lg-4">
              <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                <div className="card h-100 shadow border-0 hover-zoom">
                  <div className="card-body d-flex align-items-start gap-3">
                    <div>{Icon ? <Icon size={40} /> : <span />}</div>
                    <div>
                      <h5 className="card-title text-dark">{link.name}</h5>
                      <p className="card-text text-muted">{link.description}</p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Links;
