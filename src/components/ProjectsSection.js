import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function ProjectsSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const projects = [
    {
      title: 'Collegemate - Cloud based Android application',
      video: require('../assets/clgmate.mp4'),
    },
    {
      title: 'Waste Food Management Android application',
      video: require('../assets/foodwaste.mp4'),
    },
    {
      title: 'Natural Fruit Juice Center Website',
      video: require('../assets/nfcb.mp4'),
    },
    {
      title: 'Miranaya - EdTech Startup',
      video: require('../assets/miranaya.mp4'),
    },
  ];

  return (
    <section id="projects" className="py-5" style={{ background: 'linear-gradient(145deg, #f0f4f8, #ffffff)', fontFamily: "'Poppins', sans-serif" }}>
      <div className="container text-center">
        <h2 className="display-5 fw-bold mb-4" data-aos="fade-up">
          My <span style={{ color: '#003366' }}>Projects</span>
        </h2>
        <p className="text-muted mb-5" data-aos="fade-up" data-aos-delay="100">
          Here are some of my works showcasing real-world skills, creativity, and problem-solving abilities.
        </p>

        <div className="row">
          {projects.map((project, index) => (
            <div className="col-12 col-md-6 col-lg-3 mb-4" key={index} data-aos="fade-up" data-aos-delay={index * 150}>
              <div
                className="card shadow-lg h-100 border-0 rounded-4 overflow-hidden"
                style={{
                  background: 'linear-gradient(145deg, #e6eef6, #ffffff)',
                  transition: 'transform 0.3s ease',
                }}
              >
                <video
                  src={project.video}
                  controls
                  autoPlay
                  muted
                  loop
                  className="card-img-top"
                  style={{
                    height: '180px',
                    objectFit: 'cover',
                    borderTopLeftRadius: '1rem',
                    borderTopRightRadius: '1rem',
                  }}
                ></video>
                <div className="card-body d-flex flex-column justify-content-between">
                  <h5 className="card-title fw-bold" style={{ color: '#003366' }}>{project.title}</h5>
                  <p className="card-text text-muted small">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ProjectsSection;
