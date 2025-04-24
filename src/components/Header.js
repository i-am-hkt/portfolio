import React from 'react';
import './Header.css'; // Optional: add custom styles here

function Header() {
  return (
    <header className="sticky-top">
      <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#003366' }}>
        <div className="container">
          {/* Brand / Logo */}
          <a className="navbar-brand text-white fw-bold" href="#">
            Himanshu Thakur
          </a>

          {/* Hamburger Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Menu */}
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link text-white fw-semibold" href="#about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fw-semibold" href="#experience">Experience</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fw-semibold" href="#projects">Projects</a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-white fw-semibold" href="#contact">Contact Me</a>
              </li>
            </ul>

            {/* CTA Button */}
            <a
              href="#contact" // <-- Updated this to scroll to Contact section
              className="btn btn-light ms-lg-3 mt-3 mt-lg-0"
              style={{ color: '#003366', border: 'none' }}
            >
              Hire Me
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
