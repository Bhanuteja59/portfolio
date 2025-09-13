import React from 'react'
import './Header.css'

function Header() {
  return (
    <div>

<div className="container" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true">
  
  <nav className="navbar navbar-expand-lg container fixed-top">
    <div className="container">
        <a className="navbar-brand" href="#about"><b>Reddy Bhanu teja</b></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                    <a className="nav-link text-dark text-opacity-75" href="#hero"><b>About</b></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark text-opacity-75" href="#education"><b>Education</b></a>
                </li>
                <li className='nav-item'>
                    <a className='nav-link text-dark text-opacity-75' href="#achievements"><b>Achievements</b></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark text-opacity-75" href="#skills"><b>Skills</b></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark text-opacity-75" href="#certificates"><b>Certificates</b></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark text-opacity-75" href="#projects"><b>Projects</b></a>
                </li>
                <li className="nav-item">
                    <a className="nav-link text-dark text-opacity-75" href="#contact"><b>Contact</b></a>
                </li>
            </ul>
        </div>
    </div>
  </nav>
  </div>

    </div>
  )
}

export default Header;
