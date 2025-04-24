import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { FaRegLightbulb } from 'react-icons/fa';

function AboutSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="about-section py-5" style={{ background: 'linear-gradient(to bottom, #eef2f7, #ffffff)' }}>
      <div className="container" style={{ fontFamily: "'Poppins', sans-serif" }}>
        {/* About Top Content */}
        <div className="row align-items-center mb-5">
          {/* Left Side: Text Content */}
          <div className="col-12 col-md-6" data-aos="fade-right">
            <h2 className="display-5 fw-bold text-dark mb-4">
              About <span style={{ color: '#003366' }}>Me</span>
            </h2>
            <p className="lead text-muted">
              Hi, I'm <strong style={{ color: '#ff7f00' }}>Himanshu Thakur</strong>, a passionate Web Developer and Android Developer dedicated
              to crafting user-friendly digital experiences.
            </p>
            <p className="text-secondary">
              I specialize in building modern, responsive websites and robust Android applications that are both functional and visually
              engaging. With a strong foundation in frontend and backend technologies, I love turning ideas into reality through clean and
              efficient code.
            </p>
            <p className="text-secondary">
              I enjoy learning new tools and frameworks to stay ahead in this fast-evolving tech world. Whether it's developing a feature-rich
              website, a mobile app, or solving a complex coding challenge, I approach every project with creativity, precision, and a growth
              mindset.
            </p>

            <div className="d-flex align-items-center mt-4">
              <FaRegLightbulb size={40} color="#ff6600" />
              <div className="ms-3">
                <h5 className="fw-semibold text-dark mb-1">Driven by Innovation</h5>
                <p className="mb-0 text-muted">
                  I combine creativity and technology to bring fresh perspectives into every line of code.
                </p>
              </div>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="col-12 col-md-6 text-center mt-4 mt-md-0" data-aos="fade-left">
            <img
              src={require('../assets/about-me.jpg')}
              alt="Himanshu Thakur"
              className="img-fluid rounded shadow-lg"
              style={{ maxHeight: '350px', objectFit: 'cover' }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
