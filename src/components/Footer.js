import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaFacebookF, FaLinkedinIn, FaGithub } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="py-4" style={{ background: '#003366', color: '#fff', fontFamily: "'Poppins', sans-serif" }}>
      <div className="container text-center">
        <p className="mb-3">
          <strong>&copy; {new Date().getFullYear()} Himanshu Thakur. All Rights Reserved.</strong>
        </p>
        <div className="d-flex justify-content-center mb-3">
          
          <a href="https://www.linkedin.com/in/himanshu-kumar-thakur-a01526309?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
            <FaLinkedinIn size={20} />
          </a>
          <a href="https://github.com/i-am-hkt/" target="_blank" rel="noopener noreferrer" className="text-white mx-3">
            <FaGithub size={20} />
          </a>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;
