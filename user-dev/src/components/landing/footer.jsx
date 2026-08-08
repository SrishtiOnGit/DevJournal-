import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="foot-container">
        <div className="footer-brand">
          <h2 className="nav-logo">DevJournal</h2>
        </div>

        <div className="footer-column">
          <label>Explore</label>

          <div className="footer-links">
            <Link to="/">Home</Link>
            <a href="#features">Features</a>
            <a href="#works">How it works?</a>
            <Link to="/about">About Us</Link>
          </div>
        </div>

        <div className="footer-column">
          <label>Resources</label>

          <div className="footer-links">
            <Link to="/docs">Documentation</Link>
            <Link to="/blog">Blogs</Link>
            <Link to="/changelog">Changelog</Link>
          </div>
        </div>

        <div className="footer-column">
          <label>Connect</label>

          <div className="footer-links">
            <span>GitHub</span>
            <span>Slack ID: PixelDecoder</span>
            <span>Discord: srishti3008</span>
            <p>Email: srishtisrivastava3008@gmail.com</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 DevJournal. All rights reserved.</p>
        <h1>Build by developer for developers❤️</h1>
      </div>
    </footer>
  );
};

export default Footer;
