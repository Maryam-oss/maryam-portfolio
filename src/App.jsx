import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolio';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-background selection:bg-indigo-100 selection:text-indigo-900">
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
