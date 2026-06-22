import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef(null);

  const projectsList = [
    {
      id: 1,
      title: 'Photography Portfolio',
      img: '/Project1.png',
      desc: 'A featured Photography portfolio website built with HTML, CSS and JavaScript.',
      tags: ['HTML', 'CSS', 'JavaScript'],
      live: 'https://yashgohel.github.io/Photography_portfolio/Photography_portfolio/',
      github: 'https://github.com/yashgohel/Photography_portfolio.git',
    },
    {
      id: 2,
      title: 'Solar System',
      img: '/Project2.png',
      desc: 'Stable solar system with high quality image and use of CSS Animation.',
      tags: ['HTML', 'CSS', 'AI'],
      live: 'https://yashgohel.github.io/Projects/Infinite%20CSS%20Solar%20System/',
      github: 'https://github.com/yashgohel/Projects/tree/74618d53883470da473721e2803ea22a529a9eda/Infinite%20CSS%20Solar%20System',
    },
    {
      id: 3,
      title: 'Fooder',
      img: '/Project3.png',
      desc: 'Responsive and clean restaurant website. Which is built with HTML and CSS.',
      tags: ['HTML', 'CSS'],
      live: 'https://yashgohel.github.io/Projects/Fooder',
      github: 'https://github.com/yashgohel/Projects/tree/572ab6ace6e670adf65edb17ad71cf3aceabb9e1/Fooder',
    },
    {
      id: 4,
      title: "Your's Collection",
      img: '/Project4.png',
      desc: 'A full-featured e-commerce platform with product management, persistent shopping cart, and a secure checkout process.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Python', 'Django'],
      live: 'https://yours-collection.vercel.app/',
      github: 'https://github.com/yashgohel/CodeAlpha_YoursCollection',
    },
    {
      id: 5,
      title: 'Social Vibe',
      img: '/Project5.png',
      desc: 'A glassmorphism-themed social network featuring content sharing, temporary stories, real-time notifications, and direct messaging.',
      tags: ['HTML', 'CSS', 'Bootstrap', 'JavaScript', 'Python', 'Django'],
      live: 'https://social-vibe-connect.vercel.app/',
      github: 'https://github.com/yashgohel/CodeAlpha_SocialVibe',
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered slide up and scale-in for project cards
      gsap.fromTo(
        '.project-card',
        { y: 80, opacity: 0, scale: 0.96 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.9,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: '.projects-grid',
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="projects section-padding" ref={containerRef}>
      <div className="container">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-grid">
          {projectsList.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-img">
                <img src={project.img} alt={`${project.title} Thumbnail`} />
              </div>
              <div className="project-info">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                </div>
                <div className="project-links">
                  <a
                    href={project.live}
                    className="icon-link"
                    aria-label="Live Demo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-external-link-alt"></i> Live Demo
                  </a>
                  <a
                    href={project.github}
                    className="icon-link"
                    aria-label="GitHub Repo"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
