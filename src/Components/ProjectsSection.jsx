import { useState, useEffect, lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import HangingCard from "./Projects/HangingCard.jsx";
import "./ProjectsSection.css";

// 🔥 Lazy load modal (BIG performance win)
const ProjectModal = lazy(() => import("./Projects/ProjectModal.jsx"));

// ✅ Use optimized images (convert to webp later)
import eventis from "../assets/eventis-project.png";
import portfolio from "../assets/hbeecherhicks-portfolio.png";
import ecommerce from "../assets/furnitureconcepts.png";
import landing from "../assets/prattliving.png";

const projects = [
  {
    title: "Portfolio Website",
    description: "Modern personal portfolio with animations",
    image: portfolio,
    desc: "Responsive portfolio with animations and interactions.",
    tech: ["React", "GSAP", "Framer Motion"],
    live: "https://hbeecherhicks.com",
    github: "#",
  },
  {
    title: "E-Commerce Store",
    description: "WooCommerce custom store setup",
    image: ecommerce,
    desc: "Custom WooCommerce store with optimized performance.",
    tech: ["WordPress", "WooCommerce"],
    live: "https://furnitureconcepts.com",
    github: "#",
  },
  {
    title: "Event Platform",
    description: "Event booking system",
    image: eventis,
    desc: "Booking system with dashboard and payments.",
    tech: ["React", "Node.js"],
    live: "https://eventis.com",
    github: "#",
  },
  {
    title: "Landing Page",
    description: "Marketing website",
    image: landing,
    desc: "High-conversion landing page.",
    tech: ["HTML", "CSS", "JS"],
    live: "https://prattliving.com",
    github: "#",
  },
];

const HangingProjects = () => {
  const [active, setActive] = useState(null);
  const [particlesReady, setParticlesReady] = useState(false);

  // ✅ Simplified trigger (no heavy listeners)
  useEffect(() => {
    const timer = setTimeout(() => setParticlesReady(true), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hanging-projects">
      <h2 className="section-title">Projects</h2>

      {/* 🔥 Reduced particles (18 → 8) */}
      {particlesReady &&
        Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="particle-wind"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDuration: `${20 + Math.random() * 10}s`,
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

      {/* 🔥 Lazy modal rendering */}
      <AnimatePresence>
        {active && (
          <Suspense fallback={null}>
            <ProjectModal
              project={active}
              onClose={() => setActive(null)}
            />
          </Suspense>
        )}
      </AnimatePresence>
    </section>
  );
};

export default HangingProjects;