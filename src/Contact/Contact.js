import React from 'react';
import "./contact.css";

function Contact() {
    return (
        <div id="contact" className="contact-me">
        <section className="container mt-5">
            <h2 className="text-center text-dark mb-5" data-aos="fade-down" data-aos-duration="1500">
                Contact Me
            </h2>

            <div className="row justify-content-center">
                <div className="col-md-4 col-lg-3 text-center mb-4" data-aos="fade-up" data-aos-duration="1500">
                    <div className="contact-card p-4">
                        <i className="bi bi-envelope-fill" style={{ fontSize: '2.5rem', color: '#ff6600' }}></i>
                        <h4 className="mt-3 mb-2">Email</h4>
                        <p>
                            <a href="mailto:bhanutejareddy59@gmail.com" className="text-warning">
                                bhanutejareddy59@gmail.com
                            </a>
                        </p>
                    </div>
                </div>

                <div className="col-md-4 col-lg-3 text-center mb-4" data-aos="fade-up" data-aos-duration="1500">
                    <div className="contact-card p-4">
                        <i className="bi bi-geo-alt-fill" style={{ fontSize: '2.5rem', color: '#ff6600' }}></i>
                        <h4 className="mt-3 mb-2">Location</h4>
                        <p>
                            <a href="https://maps.app.goo.gl/89oXYUW2RJTp763J8" target="_blank" className="text-warning" rel="noopener noreferrer">
                                Julepalle, Andhra Pradesh
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </section>
        <br />
    </div>
    );
}

export default Contact;
