const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <p>&copy; 2026 Yash. All rights reserved.</p>
        <div className="social-links">
          <a
            href="https://www.linkedin.com/in/yashgohel"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/yashgohel"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
          <a
            href="mailto:yashgohel0000@gmail.com"
            aria-label="Email"
          >
            <i className="fas fa-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
