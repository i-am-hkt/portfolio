import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillSection';
import ExperienceSection from './components/ExperienceSection';
import ProjectsSection from './components/ProjectsSection';
import ContactMeSection from './components/ContactMeSection';
import Footer from './components/Footer';
// All other imports are commented out

function App() {
  return (
    <Router>
      <div>
        <Header />
        <HeroSection/>
        <AboutSection/>
        <SkillsSection/>
        <ExperienceSection/>
        <ProjectsSection/>
        <ContactMeSection/>
        <Footer/>
        {/* All other sections are commented out */}
      </div>
    </Router>
  );
}

export default App;
