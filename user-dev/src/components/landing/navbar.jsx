import { Link } from "react-router-dom";

import "./navbar.css";

import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`} data-aos="fade-up">
      <Link to="/">
        <h1 className="nav-logo">DevJournal</h1>
      </Link>

      <ul className="nav-links">
        <li>
          <a href="#features" className="nav-items">
            Features
          </a>
        </li>
        <li>
          <Link to="/about" className="nav-items">
            About
          </Link>
        </li>
        <li>
          <a href="#works" className="nav-items">
            How it Works
          </a>
        </li>
      </ul>
      <div className="nav-items">
        <button className="btn-other">Sign In</button>
      </div>
      <div className="nav-items">
        <button className="btn">Get Started</button>
      </div>
    </nav>
  );
};

export default Navbar;
