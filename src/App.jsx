import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certificates from './components/Certificates';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // 1. Intersection Observer for slide-up reveal animations
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.15,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // Once visual, stop observing
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const revealSections = document.querySelectorAll('.slide-up');
    revealSections.forEach((section) => observer.observe(section));

    // 2. Window Scroll listener for active section highlighting
    const handleScroll = () => {
      let current = 'home';
      const sections = document.querySelectorAll('section');
      
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        // Offset for fixed header
        if (window.scrollY >= sectionTop - 150) {
          const id = section.getAttribute('id');
          if (id) {
            current = id;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanups
    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealSections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  return (
    <>
      <Header activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certificates />
      </main>
      <Footer />
    </>
  );
}

export default App;
