import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import "./navbar.css";

import { useEffect, useState } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

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
      <input type="text" placeholder="Search" />
      <button className="dash-nav-btn">Logout</button>
      <button className="dash-nav-btn">Logout</button>
    </nav>
  );
};

export default Navbar;
