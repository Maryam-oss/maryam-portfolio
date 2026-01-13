import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hobbies from './components/Hobbies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { portfolioData } from './data/portfolio';

function App() {
  return (
    <div className="min-h-screen font-sans selection:bg-accent selection:text-black pb-24">
      <Navbar />

      <main className="space-y-0">
        <Hero data={portfolioData.hero} />
        <About data={portfolioData.about} />
        <Projects data={portfolioData.projects} />
        <Hobbies data={portfolioData.hobbies} />
        <Skills data={portfolioData.skills} />
        <Contact data={portfolioData.contact} />
      </main>

      <Footer />
    </div>
  );
}

export default App;
