const Footer = () => {
  return (
    <>
      <hr />
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Yair Flores</p>
        <div className="social_icons">
          <a
            href="https://github.com/serolfy"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/yairflores/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </>
  );
};

export default Footer;
