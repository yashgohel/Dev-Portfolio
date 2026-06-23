import GridMotion from './GridMotion';

const Hero = () => {
  const items = [
    'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    <div key="g-html" className="grid-item-tech"><i className="fab fa-html5" style={{ color: '#e34f26' }}></i><span>HTML5</span></div>,
    'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    <div key="g-css" className="grid-item-tech"><i className="fab fa-css3-alt" style={{ color: '#1572b6' }}></i><span>CSS3</span></div>,
    'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    <div key="g-bootstrap" className="grid-item-tech"><i className="fa-brands fa-bootstrap" style={{ color: '#1572b6' }}></i><span>Bootstrap</span></div>,
    'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    <div key="g-tailwindcss" className="grid-item-tech"><i className="fa-brands fa-tailwind-css" style={{ color: '#1572b6' }}></i><span>Tailwind</span></div>,
    'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    <div key="g-js" className="grid-item-tech"><i className="fab fa-js" style={{ color: '#f7df1e' }}></i><span>JavaScript</span></div>,
    'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    <div key="g-react" className="grid-item-tech"><i className="fab fa-react" style={{ color: '#61dafb' }}></i><span>React</span></div>,
    'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    <div key="g-python" className="grid-item-tech"><i className="fab fa-python" style={{ color: '#3776ab' }}></i><span>Python</span></div>,
    'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    <div key="g-django" className="grid-item-tech"><i className="devicon-django-plain" style={{ color: '#092e20' }}></i><span>Django</span></div>,
    'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    <div key="g-mysql" className="grid-item-tech"><i className="devicon-mysql-original" style={{ color: '#4479a1' }}></i><span>MySQL</span></div>,
    'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    <div key="g-fs" className="grid-item-tech"><i className="fas fa-code" style={{ color: 'var(--accent-primary)' }}></i><span>Full Stack</span></div>,
    'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    <div key="g-ai" className="grid-item-tech"><i className="fas fa-robot" style={{ color: 'var(--accent-secondary)' }}></i><span>Gen AI</span></div>,
    'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    <div key="g-cse" className="grid-item-tech"><i className="fas fa-graduation-cap" style={{ color: 'var(--accent-tertiary)' }}></i><span>CSE B.Tech</span></div>,
    'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    <div key="g-api" className="grid-item-tech"><i className="fas fa-server" style={{ color: 'var(--accent-primary)' }}></i><span>API Dev</span></div>,
    'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    <div key="g-clean" className="grid-item-tech"><i className="fas fa-gem" style={{ color: 'var(--accent-secondary)' }}></i><span>Clean Code</span></div>,
    'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    <div key="g-crm" className="grid-item-tech"><i className="fas fa-users" style={{ color: 'var(--accent-tertiary)' }}></i><span>CRM</span></div>,
    'https://images.unsplash.com/photo-1748370987492-eb390a61dcda?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    <div key="g-ux" className="grid-item-tech"><i className="fas fa-paint-brush" style={{ color: 'var(--accent-primary)' }}></i><span>UI/UX</span></div>,
  ];

  return (
    <section id="home" className="hero fade-in">
      <div className="hero-grid-motion-bg">
        <GridMotion items={items} gradientColor="rgba(15, 23, 42, 0.8)" />
      </div>
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <div className="profile-img-container">
          <img src="/ProfilePic.PNG" alt="Yash Profile" className="profile-img" />
        </div>
        <h1 className="headline">
          Hi, I'm <span>Yash</span> | Full Stack Developer
        </h1>
        <p className="subtitle">
          Building clean, efficient applications that solve real-world problems.
        </p>
        <div className="hero-actions">
          <a href="#projects" className="btn btn-primary">View My Projects</a>
          <a href="/Yash_Gohel_CV.pdf" className="btn btn-secondary">
            Download Resume <i className="fas fa-download"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
