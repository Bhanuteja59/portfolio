import React from 'react';

function Header() {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="container">
                        <a className="navbar-brand" href="#">R.Bhanu teja </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item"><a className="nav-link" href="#home">Home</a></li>
                                <li className="nav-item"><a className="nav-link" href="#education">Education</a></li>
                                <li className="nav-item"><a className="nav-link" href="#skills">Skills</a></li>
                                <li className="nav-item"><a className="nav-link" href="#certificates">Certificates</a></li>
                                <li className="nav-item"><a className="nav-link" href="#projects">Projects</a></li>
                                <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Header;
