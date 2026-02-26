import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Internships from './components/Internships';
import Skills from './components/Skills';
import Achievements from './components/Achievements';
import Extracurricular from './components/Extracurricular';
import Languages from './components/Languages';
import Footer from './components/Footer';
import ScrollProgress from './components/ScrollProgress';
import FloatingShapes from './components/FloatingShapes';
import AnimatedSection from './components/AnimatedSection';
import DownloadButton from './components/DownloadButton';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
      <ScrollProgress />
      <FloatingShapes />
      <DownloadButton />
      
      <div className="relative z-10">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 max-w-6xl">
          <AnimatedSection delay={0}>
            <About />
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <Experience />
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <Education />
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <Internships />
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <Skills />
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <Achievements />
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <Extracurricular />
          </AnimatedSection>
          
          <AnimatedSection delay={100}>
            <Languages />
          </AnimatedSection>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
