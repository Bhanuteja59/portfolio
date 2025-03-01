import React, { useEffect, useRef } from 'react';
import { createSwapy } from 'swapy';
import './projects.css';

function Projects() {
  const swapy = useRef(null); // Create Swapy ref
  const container = useRef(null); // Container for Swapy to target

  useEffect(() => {
    // Initialize Swapy on container element
    if (container.current) {
      swapy.current = createSwapy(container.current);

      // Optionally, listen to swap events
      swapy.current.onSwap((event) => {
        console.log('swap', event);
      });
    }

    // Clean up on unmount
    return () => {
      swapy.current?.destroy();
    };
  }, []);

  return (
    <div className="container projects">
      <div className="text-black" id="projects">
        <h2 className="text-center mb-5">Projects &#128200;</h2>

        <div className="row g-4" ref={container}>
          {[{
            title: "Anime Webpage",
            image: "https://w0.peakpx.com/wallpaper/83/1003/HD-wallpaper-madara-uchiha-legend-powers.jpg",
            link: "https://bhanuteja59.github.io/Uchiha-Madara/",
            badges: ['HTML', 'CSS', 'JavaScript', 'Bootstrap']
          }, {
            title: "Travels Web Design",
            image: "https://www.candorblog.com/wp-content/uploads/2017/05/travel-022.jpg",
            link: "https://www.figma.com/proto/dJCPXZBp6x3Oj7pgIkT6p9/Untitled?node-id=269-200&node-type=frame&t=MGcR15zZVEp3YokN-1&scaling=scale-down&content-scaling=fixed&page-id=269%3A199",
            badges: ['Figma', 'UI/UX']
          }, {
            title: "Zomato Webpage",
            image: "https://www.quibustrainings.com/wp-content/uploads/2023/02/Zomato-Marketing-Strategy-%E2%80%93-A-Case-Study-2023-1.webp",
            link: "https://bhanuteja59.github.io/zomato-clone/",
            badges: ['HTML', 'CSS', 'JavaScript', 'Bootstrap']
          }, {
            title: "Click-kart Web Design",
            image: "https://play-lh.googleusercontent.com/QoPlfH3MDa-fFtas0utCKx09NmzNdN1ak5kKOk328Y3Ri4zCTtB_tuVjqP5jYdDcrFY",
            link: "https://www.figma.com/proto/dJCPXZBp6x3Oj7pgIkT6p9/Untitled?node-id=401-66&node-type=frame&t=qrgjyn9kVR1SixvA-1&scaling=scale-down&content-scaling=fixed&page-id=401%3A39",
            badges: ['Figma', 'UI/UX']
          }, {
            title: "Designer`s webpage Web Design",
            image: "https://www.shutterstock.com/image-vector/create-your-own-future-modern-260nw-2245563633.jpg",
            link: "https://www.figma.com/proto/ySscxccvvyEYPTTB6lHqvb/Bhanu%60s-Design?node-id=3-1047&t=TqsGGfGmMirx5LfP-1&scaling=scale-down-width&content-scaling=fixed&page-id=1%3A1789",
            badges: ['Figma', 'UI/UX']
          }, {
            title: "Mobile Login Illustration",
            image: "https://cdni.iconscout.com/illustration/premium/thumb/mobile-login-illustration-download-in-svg-png-gif-file-formats--security-protection-secure-smartphone-encrypted-phone-seo-ppc-pack-business-illustrations-4708053.png",
            link: "https://www.figma.com/proto/ySscxccvvyEYPTTB6lHqvb/Bhanu%60s-Design?node-id=1-720&t=ronKg1kdjzLpLdEi-1&scaling=scale-down&content-scaling=fixed&page-id=1%3A66",
            badges: ['Figma', 'UI/UX']
          }, {
            title: "Bhanu`s Advanced Portfolio",
            image: "https://github.com/Bhanuteja59/Bhanus-portfolio/blob/main/mockup.png?raw=true",
            link: "https://bhanuteja59.github.io/portfolio/",
            badges: ['JavaScript', 'React', 'Bootstrap', 'Tailwind']
          }, {
            title: "Travel`s WebPage",
            image: "https://github.com/Bhanuteja59/Bhanus-portfolio/blob/main/image.png?raw=true",
            link: "https://cdpn.io/pen/debug/vYqjJya?authentication_hash=yYAyLezWzKKr",
            badges: ['Figma --> HTML, CSS']  
          }, {
            title: "Bhanu`s Portfolio",
            image: "https://github.com/Bhanuteja59/Bhanus-portfolio/blob/main/portfolio.png?raw=true",
            link: "https://bhanuteja59.github.io/Bhanus-portfolio/",
            badges: ['HTML','CSS','JavaScript','Bootstrap']  
          }
        ].map((project, index) => (
            <div key={index} className="col-md-6 col-lg-6" data-swapy-slot={`project${index}`}>
              <div className="card project-card" data-swapy-item={`project${index}`}>
                <img className="card-img-top project-img" src={project.image} alt={`Card image ${index + 1}`} />
                <div className="card-body">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <h4 className="card-title">{project.title}</h4>
                  </a>
                  <div className="card-text grid gap-3">
                    {project.badges.map((badge, idx) => (
                      <span key={idx} className="badge bg-secondary">{badge}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
<<<<<<< HEAD
          ))}
=======
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
>>>>>>> d0721f34b034f6af01a683023e9c2f8743387b19
        </div>
      </div>
    </div>
  );
}

export default Projects;
