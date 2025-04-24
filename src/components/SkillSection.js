import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import {
  FaSearch, FaCode, FaAndroid, FaReact, FaTerminal,
  FaGitAlt, FaGithub, FaDatabase
} from 'react-icons/fa';
import { SiExpo, SiFirebase, SiSupabase } from 'react-icons/si';

function SkillsSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const categories = {
    Frontend: [
      { name: 'React', icon: <FaReact /> },
      { name: 'Web Development', icon: <FaCode /> },
      { name: 'SEO', icon: <FaSearch /> },
    ],
    Backend: [
      { name: 'Firebase', icon: <SiFirebase /> },
      { name: 'Supabase', icon: <SiSupabase /> },
      { name: 'Database', icon: <FaDatabase /> },
    ],
    Tools: [
      { name: 'CLI Tools', icon: <FaTerminal /> },
      { name: 'Expo', icon: <SiExpo /> },
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'GitHub', icon: <FaGithub /> },
      { name: 'Android Dev', icon: <FaAndroid /> },
    ],
  };

  return (
    <section id="skills" className="py-5" style={{ backgroundColor: '#eef2f7' }}>
      <div className="container" style={{ fontFamily: "'Poppins', sans-serif" }}>
        <h2 className="text-center display-5 fw-bold text-dark mb-5">
          My <span style={{ color: '#003366' }}>Skills</span>
        </h2>

        {Object.keys(categories).map((category, catIndex) => (
          <div key={category} className="mb-5">
            <h4 className="text-dark mb-4" style={{ color: '#003366' }}>{category}</h4>
            <div className="row g-4">
              {categories[category].map((skill, index) => (
                <div
                  key={index}
                  className="col-12 col-md-6"
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div
                    className="p-4 rounded shadow-sm skill-card"
                    style={{
                      backgroundColor: '#003366',
                      color: '#fff',
                      borderBottom: '4px solid #ff6600',
                    }}
                  >
                    <div className="d-flex align-items-center gap-3" style={{ color: '#ff6600' }}>
                      <div style={{ fontSize: '1.5rem' }}>{skill.icon}</div>
                      <h5 className="mb-0">{skill.name}</h5>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Custom style for hover animation */}
      <style>{`
        .skill-card {
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .skill-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 12px 24px rgba(0,0,0,0.2);
        }
      `}</style>
    </section>
  );
}

export default SkillsSection;
