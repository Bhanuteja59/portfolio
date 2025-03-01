import React from 'react'
import './header.css'

function Header() {
  return (
    <div>

<div class="container" data-bs-spy="scroll" data-bs-target="#list-example" data-bs-smooth-scroll="true" tabindex="0">
  
  <nav class="navbar navbar-expand-lg container fixed-top">
    <div class="container">
        <a class="navbar-brand" href="#about"><b>Reddy Bhanuteja</b></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item">
                    <a class="nav-link text-dark text-opacity-75" href="#hero"><b>About</b></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-dark text-opacity-75" href="#education"><b>Education</b></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-dark text-opacity-75" href="#skills"><b>Skills</b></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-dark text-opacity-75" href="#certificates"><b>Certificates</b></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-dark text-opacity-75" href="#projects"><b>Projects</b></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-dark text-opacity-75" href="#contact"><b>Contact</b></a>
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
