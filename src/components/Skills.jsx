import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Staggered slide up for skill categories
      gsap.fromTo(
        '.skill-category',
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.skills-container',
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );

      // 2. Spring pop-in for pills inside the categories
      gsap.fromTo(
        '.pill',
        { scale: 0.7, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          stagger: 0.04,
          ease: 'back.out(1.5)',
          scrollTrigger: {
            trigger: '.skills-container',
            start: 'top 75%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="skills section-padding" ref={containerRef}>
      <div className="container">
        <h2 className="section-title">Core Skills</h2>
        <div className="skills-container">
          <div className="skill-category">
            <video autoPlay loop muted playsInline className="card-video-bg">
              <source src="/Animate_the_image_into_video.mp4" type="video/mp4" />
            </video>
            <h3>Frontend & Backend</h3>
            <div className="pill-group">
              <span className="pill"><i className="fab fa-html5"></i> HTML</span>
              <span className="pill"><i className="fab fa-css3-alt"></i> CSS</span>
              <span className="pill"><i className="fab fa-bootstrap"></i> Bootstrap</span>
              <span className="pill"><i className="fab fa-js"></i> JavaScript</span>
              <span className="pill"><i className="fab fa-react"></i> React</span>
              <span className="pill"><i className="fab fa-python"></i> Python</span>
              <span className="pill"><i className="devicon-mysql-original"></i> MySQL</span>
              <span className="pill"><i className="devicon-django-plain"></i> Django</span>
            </div>
          </div>
          <div className="skill-category">
            <video autoPlay loop muted playsInline className="card-video-bg">
              <source src="/Animate_the_image_into_video.mp4" type="video/mp4" />
            </video>
            <h3>Emerging Tech</h3>
            <div className="pill-group">
              <span className="pill"><i className="fas fa-robot"></i> Generative AI</span>
            </div>
          </div>
          <div className="skill-category">
            <video autoPlay loop muted playsInline className="card-video-bg">
              <source src="/Animate_the_image_into_video.mp4" type="video/mp4" />
            </video>
            <h3>Professional Skills</h3>
            <div className="pill-group">
              <span className="pill"><i className="fas fa-users"></i> CRM Software</span>
              <span className="pill"><i className="fas fa-comments"></i> Client Communication</span>
              <span className="pill"><i className="fas fa-puzzle-piece"></i> Complex Problem-Solving</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
