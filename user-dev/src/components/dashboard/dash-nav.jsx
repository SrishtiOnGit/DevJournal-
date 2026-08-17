import { Link } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import "./dash-nav.css";

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
      <input className="dash-nav-input" type="text" placeholder="Search.." />
      <div className="btn-group">
        <button className="dash-nav-btn">Logout</button>
        <button className="dash-nav-btn">
          <FaRegUser />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
