import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import workImage from '../assets/work.jpeg';
import { FaBriefcase, FaCalendarAlt } from 'react-icons/fa';

function ExperienceSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const leftSide = [
    {
      role: 'SINCE 2022',
      description: 'Passionate Web and Android Developer with 3+ years of experience in building modern websites and mobile apps. Dedicated to delivering creative, efficient, and scalable solutions.'
    }
  ];

  const rightSide = [
    {
      company: 'Eevolution Technology | Bengaluru, Karnataka, India',
      role: 'Front-End, Backend and LMS Developer',
      duration: 'Feb 2024 - May 2024',
      description: (
        <ul>
          <li>Empowered organizations through innovative e-learning platforms.</li>
          <li>Developed a full-stack LMS platform with course enrollment, video streaming, and progress tracking.</li>
          <li>Collaborated with cross-functional teams to design and implement features that improved user engagement.</li>
          <li>Optimized platform performance to handle high volumes of concurrent users.</li>
        </ul>
      )
    }
  ];

  return (
    <section id="experience" className="py-5" style={{
      background: 'linear-gradient(135deg, #fffaf0 0%, #fef5e7 100%)',
      position: 'relative'
    }}>
      <div className="container" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <h2 className="text-center display-5 fw-bold text-dark mb-5">
          My <span style={{ color: '#003366' }}>Experience</span>
        </h2>

        <div className="row align-items-center position-relative">
          {/* Vertical Timeline Line */}
          <div className="timeline-line d-none d-md-block"></div>

          {/* Left Side */}
          <div className="col-md-4" data-aos="fade-right">
            {leftSide.map((item, i) => (
              <div key={i} className="mb-5 p-4 rounded shadow-lg timeline-item">
                <div className="timeline-dot-left"></div>
                <div className="bg-primary text-white p-4 rounded shadow">
                  <h5 className="text-warning">{item.role}</h5>
                  <p className="mb-1">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Middle Image */}
          <div className="col-md-4 text-center" data-aos="zoom-in">
            <img
              src={workImage}
              alt="Work Illustration"
              className="img-fluid rounded-circle shadow"
              style={{
                maxHeight: '280px',
                border: '4px solid #003366',
                backgroundColor: '#fff',
                padding: '10px'
              }}
            />
          </div>

          {/* Right Side */}
          <div className="col-md-4" data-aos="fade-left">
            {rightSide.map((item, i) => (
              <div key={i} className="mb-5 p-4 rounded shadow-lg timeline-item">
                <div className="timeline-dot-right"></div>
                <div className="bg-primary text-white p-4 rounded shadow">
                  <h6 className="text-warning mb-3">
                    <FaBriefcase className="me-2" /> {item.company}
                  </h6>
                  <p><strong>Duration:</strong> {item.duration}</p>
                  {item.description}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Timeline & Hover Effects */}
      <style>{`
        .timeline-line {
          position: absolute;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          width: 4px;
          height: 100%;
          background-color: #003366;
          z-index: 0;
        }

        .timeline-item {
          position: relative;
          transition: all 0.4s ease;
        }

        .timeline-dot-left, .timeline-dot-right {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 15px;
          height: 15px;
          background-color: #ff6600;
          border: 3px solid #fff;
          border-radius: 50%;
          z-index: 1;
        }

        .timeline-dot-left {
          left: -10px;
        }

        .timeline-dot-right {
          right: -10px;
        }

        .shadow-lg:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(0,0,0,0.2);
        }

        .bg-primary {
          background-color: #003366 !important;
        }

        .timeline-item .timeline-dot-left, .timeline-item .timeline-dot-right {
          transition: background-color 0.3s ease;
        }

        .timeline-item:hover .timeline-dot-left {
          background-color: #ff6600;
        }

        .timeline-item:hover .timeline-dot-right {
          background-color: #ff6600;
        }

        @media (max-width: 768px) {
          .timeline-line {
            width: 2px;
            left: 45%;
          }
        }

        @media (max-width: 576px) {
          .timeline-line {
            display: none;
          }

          .timeline-item {
            margin-left: 0 !important;
            margin-right: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}

export default ExperienceSection;
