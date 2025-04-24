import React, { useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaCode, FaDownload } from 'react-icons/fa';
import Typed from 'typed.js';

function HeroSection() {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: [
        'Hi, I am <span style="color: orange;">Himanshu Thakur</span>',
        'A Passionate Full Stack Web Developer',
        'An Innovative Android Developer',
        'Transforming Ideas into Reality',
      ],
      typeSpeed: 50,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
      smartBackspace: true,
    });

    return () => typed.destroy();
  }, []);

  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="hero-section position-relative text-white overflow-hidden" style={{ minHeight: '100vh' }}>
      {/* Background Effects */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100"
        style={{
          background: 'linear-gradient(135deg, #003366cc 0%, #ffaf7b80 100%)',
          zIndex: 1,
        }}
      ></div>

      {/* Blurred Circle */}
      <div
        className="position-absolute top-50 start-50 translate-middle"
        style={{
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'rgba(255, 255, 255, 0.05)',
          filter: 'blur(100px)',
          zIndex: 1,
        }}
      ></div>

      {/* Main Content */}
      <div className="container py-5 position-relative" style={{ zIndex: 2 }}>
        <div className="row align-items-center justify-content-center" style={{ minHeight: '90vh' }}>
          {/* Text Section */}
          <div className="col-12 col-md-6 text-center text-md-start mb-4 mb-md-0">
            <h1 className="display-5 fw-bold">
              <span ref={typedRef}></span>
            </h1>
            
            <div className="d-flex flex-column flex-sm-row justify-content-center justify-content-md-start gap-3 mt-4">
              {/* My Projects Button */}
              <button
                className="btn btn-primary d-flex align-items-center gap-2 px-4 py-2 shadow"
                onClick={() => scrollToSection('#projects')}
                style={{ transition: 'transform 0.3s ease' }}
                onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
              >
                <FaCode /> My Projects
              </button>
              
              {/* Download CV Button */}
              <a
                href={require('../assets/Himanshu_thakur_resume.pdf')}
                download="Himanshu_Thakur_CV.pdf"
                className="btn btn-outline-light d-flex align-items-center gap-2 px-4 py-2 shadow"
                style={{ transition: 'transform 0.3s ease' }}
                onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
                onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
              >
                <FaDownload /> Download CV
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="col-12 col-md-6 text-center mt-4 mt-md-0">
            <img
              src={require('../assets/mee.jpeg')}
              alt="Hero Visual"
              className="img-fluid rounded shadow"
              style={{ maxHeight: '350px', objectFit: 'cover', border: '5px solid white' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
