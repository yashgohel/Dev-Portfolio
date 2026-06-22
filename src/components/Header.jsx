import { useState } from 'react';

const Header = ({ activeSection }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#projects', label: 'Projects' },
    { href: '#experience', label: 'Experience' },
    { href: '#certificates', label: 'Certificates' },
  ];

  return (
    <header className="navbar">
      <div className="nav-container">
        <a href="#home" className="logo" onClick={closeMenu}>
          Yash<span>.dev</span>
        </a>
        <button 
          className="mobile-toggle" 
          aria-label="Toggle navigation"
          onClick={toggleMenu}
        >
          <i className={`fas ${isOpen ? 'fa-times' : 'fa-bars'}`}></i>
        </button>
        <nav className={`nav-links ${isOpen ? 'active' : ''}`}>
          {navLinks.map((link) => {
            const isLinkActive = activeSection === link.href.slice(1);
            return (
              <a
                key={link.href}
                href={link.href}
                className={isLinkActive ? 'active' : ''}
                onClick={closeMenu}
                style={isLinkActive ? { color: 'var(--accent-primary)', '--after-width': '100%' } : {}}
              >
                {link.label}
              </a>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
