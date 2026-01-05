import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import HangingCard from "./Projects/HangingCard.jsx";
import ProjectModal from "./Projects/ProjectModal.jsx";
import "./ProjectsSection.css";
import eventis from "../assets/eventis-project.png";
import portfolio from "../assets/hbeecherhicks-portfolio.png";
import ecommerce from "../assets/furnitureconcepts.png";
import landing from "../assets/prattliving.png"

const projects = [
  {
    title: "Portfolio Website",
    description: "Modern personal portfolio with animations",
    image: portfolio,
    desc: "A fully responsive personal portfolio showcasing advanced React animations, GSAP physics, and immersive interactions.",
    tech: ["React", "GSAP", "Framer Motion", "Three.js"],
    live: "https://hbeecherhicks.com",
    github: "https://github.com/yourusername/portfolio",
  },
  {
    title: "E-Commerce Store",
    description: "WooCommerce custom store setup",
    image: ecommerce,
    desc: "Custom WooCommerce theme with advanced filtering, payment integration, and performance optimization.",
    tech: ["WordPress", "WooCommerce", "PHP", "JavaScript", "CSS"],
    live: "https://furnitureconcepts.com",
    github: "#",
  },
  {
    title: "Event Management Platform",
    description: "Full-stack event booking system",
    image: eventis,
    desc: "A modern event platform with ticket booking, admin dashboard, and real-time availability.",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    live: "https://eventis.com",
    github: "https://github.com/yourusername/eventis",
  },
  {
    title: "Business Landing Page",
    description: "High-conversion marketing website",
    image: landing,
    desc: "Conversion-focused landing page with A/B testing, animations, and lead capture forms.",
    tech: ["HTML", "CSS", "JavaScript", "GSAP"],
    live: "https://prattliving.com",
    github: "#",
  },
];

const HangingProjects = () => {
  const [active, setActive] = useState(null);
  const [particlesReady, setParticlesReady] = useState(false);

  // Unlock particles after first user interaction (smooth + avoids CLS)
  useEffect(() => {
    const unlock = () => {
      setParticlesReady(true);
      window.removeEventListener("mousemove", unlock);
      window.removeEventListener("click", unlock);
      window.removeEventListener("touchstart", unlock);
      window.removeEventListener("scroll", unlock);
    };

    window.addEventListener("mousemove", unlock);
    window.addEventListener("click", unlock);
    window.addEventListener("touchstart", unlock);
    window.addEventListener("scroll", unlock);

    return () => {
      window.removeEventListener("mousemove", unlock);
      window.removeEventListener("click", unlock);
      window.removeEventListener("touchstart", unlock);
      window.removeEventListener("scroll", unlock);
    };
  }, []);

  return (
    <section className="hanging-projects">
      <h2 className="section-title">Projects</h2>

      {/* Floating Wind / Dust Particles */}
      {particlesReady &&
        [...Array(18)].map((_, i) => (
          <div
            key={i}
            className="particle-wind"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${18 + Math.random() * 25}s`,
              animationDelay: `${Math.random() * 15}s`,
              width: `${3 + Math.random() * 3}px`,
              height: `${3 + Math.random() * 3}px`,
            }}
          />
        ))}

      <div className="hanging-row">
        {projects.map((p, i) => (
          <HangingCard
            key={i}
            project={p}
            index={i}
            onOpen={() => setActive(p)}
          />
        ))}
      </div>

      <AnimatePresence>
        {active && (
          <ProjectModal project={active} onClose={() => setActive(null)} />
        )}
      </AnimatePresence>
    </section>
  );
};

export default HangingProjects;