import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './skills.css';

function Skills() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: true,
    });
  }, []);

  return (
    <section>
      <div className="container py-5" id="skills">
        <h2 className="text-center text-black mb-5" data-aos="fade-up">My Skills</h2>
        <div className="row">
          
          <div className="col-12 col-md-6">
            <div className="skills-list" data-aos="fade-right">
              <ul className="list-unstyled">
                
                <li>
                  <h4 className="text-primary">🌐 Web Development</h4>
                  <p className="skill-desc">
                    Building interactive and responsive websites using <strong>HTML5</strong>, <strong>CSS3</strong>, and <strong>JavaScript</strong>. 
                    Skilled in structuring web pages for better accessibility and performance.
                  </p>
                </li>

                <li>
                  <h4 className="text-primary">🎨 UI/UX Design</h4>
                  <p className="skill-desc">
                    Expertise in <strong>Figma</strong> for wireframing, prototyping, and designing user-friendly interfaces. 
                    Focused on creating visually appealing and intuitive designs.
                  </p>
                </li>

                <li>
                  <h4 className="text-primary">⚙️ Front-End Development</h4>
                  <p className="skill-desc">
                    Experienced in developing modern web applications with <strong>React.js</strong>. 
                    Familiar with state management using Redux and Context API.
                  </p>
                </li>

                <li>
                  <h4 className="text-primary">📂 Database Management</h4>
                  <p className="skill-desc">
                    Strong knowledge of <strong>MySQL</strong> for database design, query optimization, and handling large datasets efficiently.
                  </p>
                </li>

                <li>
                  <h4 className="text-primary">💻 Programming Languages</h4>
                  <p className="skill-desc">
                    Skilled in <strong>Java</strong> and <strong>Python</strong>. Knowledgeable in object-oriented programming (OOP) 
                    and algorithmic problem-solving.
                  </p>
                </li>

                <li>
                  <h4 className="text-primary">🚀 MERN Stack Development</h4>
                  <p className="skill-desc">
                    Proficient in full-stack web development using <strong>MongoDB, Express.js, React.js, and Node.js</strong>. 
                    Capable of building scalable and robust web applications.
                  </p>
                </li>

              </ul>
            </div>
          </div>



          <div className="col-12 col-md-6" data-aos="fade-up">
            <h4 className="text-center mb-3" data-aos="fade-left">Skills Proficiency</h4>

            {[
              { name: 'HTML', percent: 90, color: 'bg-success' },
              { name: 'CSS', percent: 85, color: 'bg-info' },
              { name: 'JavaScript', percent: 80, color: 'bg-warning' },
              { name: 'React', percent: 75, color: 'bg-danger' },
              { name: 'MySQL', percent: 70, color: 'bg-secondary' },
              { name: 'Java', percent: 40, color: 'bg-primary' },
              { name: 'Python', percent: 45, color: 'bg-dark' },
              { name: 'Figma', percent: 90, color: 'bg-info' },
              { name: 'MERN Stack', percent: 70, color: 'bg-warning' },
            ].map((skill, index) => (
              <div className="mb-3" key={index}>
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
      <hr />
    </section>
  );
}

export default Skills;
