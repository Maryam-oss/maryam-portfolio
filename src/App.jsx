import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolio';

import Navbar from './components/Navbar';

function App() {
  return (
    <div className="font-sans antialiased text-primary bg-background selection:bg-accentLight selection:text-accentDark">
      <Navbar data={portfolioData} />
      <Hero data={portfolioData.hero} />
      <About data={portfolioData.about} />
      <Skills data={portfolioData.skills} />
      <Projects data={portfolioData.projects} />
      <Contact data={portfolioData.contact} />
      <Footer />
    </div>
  );
}

export default App;
