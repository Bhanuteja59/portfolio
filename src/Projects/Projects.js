import React from 'react';
import './projects.css';

function Projects() {
  return (

    <section>

<div className="projects text-black" id="projects">
      <h2 className="text-center mb-5" data-aos="fade-down">Projects</h2>

      <div className="row g-4">
        {/* Project 1 */}
        <div className="col-md-6 col-lg-6" data-aos="fade-up" data-aos-duration="2000">
          <div className="card project-card">
            <img
              className="card-img-top project-img"
              src="https://w0.peakpx.com/wallpaper/83/1003/HD-wallpaper-madara-uchiha-legend-powers.jpg"
              alt="Card image 1"
            />
            <div className="card-body">
              <a href="https://codepen.io/Bhanu-Teja-/full/GRzqLVL" target="_blank" rel="noopener noreferrer">
                <h4 className="card-title">Anime Webpage</h4>
              </a>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="col-md-6 col-lg-6" data-aos="fade-up" data-aos-duration="2000">
          <div className="card project-card">
            <img
              className="card-img-top project-img"
              src="https://www.candorblog.com/wp-content/uploads/2017/05/travel-022.jpg"
              alt="Card image 2"
            />
            <div className="card-body">
              <a href="https://www.figma.com/proto/dJCPXZBp6x3Oj7pgIkT6p9/Untitled?node-id=269-200&node-type=frame&t=MGcR15zZVEp3YokN-1&scaling=scale-down&content-scaling=fixed&page-id=269%3A199" target="_blank" rel="noopener noreferrer">
                <h4 className="card-title">Travels Web Design</h4>
              </a>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="col-md-6 col-lg-6" data-aos="fade-up" data-aos-duration="2000">
          <div className="card project-card">
            <img
              className="card-img-top project-img"
              src="https://www.quibustrainings.com/wp-content/uploads/2023/02/Zomato-Marketing-Strategy-%E2%80%93-A-Case-Study-2023-1.webp"
              alt="Card image 3"
            />
            <div className="card-body">
              <a href="https://codepen.io/Bhanu-Teja-/full/gOZyQLe" target="_blank" rel="noopener noreferrer">
                <h4 className="card-title">Zomato Webpage</h4>
              </a>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className="col-md-6 col-lg-6" data-aos="fade-up" data-aos-duration="2000">
          <div className="card project-card">
            <img
              className="card-img-top project-img"
              src="https://play-lh.googleusercontent.com/QoPlfH3MDa-fFtas0utCKx09NmzNdN1ak5kKOk328Y3Ri4zCTtB_tuVjqP5jYdDcrFY"
              alt="Card image 4"
            />
            <div className="card-body">
              <a href="https://www.figma.com/proto/dJCPXZBp6x3Oj7pgIkT6p9/Untitled?node-id=401-66&node-type=frame&t=qrgjyn9kVR1SixvA-1&scaling=scale-down&content-scaling=fixed&page-id=401%3A39&starting-point-node-id=401%3A40&show-proto-sidebar=1" target="_blank" rel="noopener noreferrer">
                <h4 className="card-title">Click-kart Web Design</h4>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br /><br />
    <hr />
    
    </section>
  );
}

export default Projects;
