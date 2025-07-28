import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaHackerrank,
} from "react-icons/fa";
import { SiLeetcode, SiCodechef } from "react-icons/si";
import "./Links.css";

const links = [
  {
    name: "GitHub",
    url: "https://github.com/Bhanuteja59",
    icon: <FaGithub className="text-primary" size={40} />,
    description: "Browse my open-source repositories and contributions.",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/bhanuteja59/",
    icon: <FaLinkedin className="text-primary" size={40} />,
    description: "Connect with me professionally.",
  },
  {
    name: "LeetCode",
    url: "https://leetcode.com/u/bunny_2621/",
    icon: <SiLeetcode className="text-warning" size={40} />,
    description: "Check out my coding solutions and stats.",
  },
  {
    name: "HackerRank",
    url: "https://www.hackerrank.com/profile/22am1a3118",
    icon: <FaHackerrank className="text-success" size={40} />,
    description: "Explore my certifications and challenges.",
  },
  {
    name: "CodeChef",
    url: "https://www.codechef.com/users/bunny_2621",
    icon: <SiCodechef className="text-dark" size={40} />,
    description: "My CodeChef profile and rankings.",
  },
];

const Links = () => {
  return (
    <div className="container py-5">
      <br />
      <h1 className="text-center mb-5 fw-bold display-5 text-dark title">
        🌐 My Online Profiles
      </h1>
      <div className="row g-4">
        {links.map((link, idx) => (
          <div key={idx} className="col-md-6 col-lg-4">
            <a
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-decoration-none"
            >
              <div className="card h-100 shadow border-0 hover-zoom">
                <div className="card-body d-flex align-items-start gap-3">
                  <div>{link.icon}</div>
                  <div>
                    <h5 className="card-title text-dark">{link.name}</h5>
                    <p className="card-text text-muted">{link.description}</p>
                  </div>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Links;
