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

  // Animation for each letter in the name
  const name = "Sultan Saleemi";
  const letters = name.split("");

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
      className={`nav-container ${scrolled ? "scrolled" : ""}`}
    >
      <div className="nav-logo">
        {letters.map((letter, index) => (
          <motion.span
            key={index}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, type: "spring" }}
          >
            {letter}
          </motion.span>
        ))}
      </div>

      <div className="nav-links">
        {links.map((link) => (
          <Link key={link.name} to={link.path}>
            <span
              className={location.pathname === link.path ? "active-link" : ""}
            >
              {link.name}
            </span>
          </Link>
        ))}
      </div>
    </motion.nav>
  );
};

export default Navbar;
