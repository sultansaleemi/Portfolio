import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const name = "Sultan Saleemi";
  const letters = name.split("");

  const linkHoverColors = [
    "#ffb3c1", "#fbbf91", "#ffd77b", "#b3ffb8",
    "#80ffea", "#80d4ff", "#b58fff", "#ff9ee3"
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className={`nav-container ${scrolled ? "scrolled" : ""}`}
    >
      {/* Orbit background */}
      <div className="nav-orbits">
        {[...Array(12)].map((_, i) => (
          <div key={i} className={`orbit orbit-${i}`} />
        ))}
      </div>

      {/* Logo */}
      <div className="nav-logo">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            className={`logo-letter letter-${index}`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, type: "spring", stiffness: 120 }}
          >
            {letter === " " ? "\u00A0" : letter}
          </motion.span>
        ))}
      </div>

      {/* Navigation Links */}
      <div className="nav-links">
        {links.map((link) => (
          <Link key={link.name} to={link.path}>
            <span className={location.pathname === link.path ? "active-link" : ""}>
              {link.name.split("").map((letter, index) => (
                <motion.span
                  key={index}
                  className="link-letter"
                  style={{ color: "#fff" }} // Default color
                  whileHover={{ color: linkHoverColors[index % linkHoverColors.length] }}
                  transition={{ type: "spring", stiffness: 120 }}
                >
                  {letter}
                </motion.span>
              ))}
            </span>
          </Link>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
