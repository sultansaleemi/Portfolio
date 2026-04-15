import { useState, useEffect, lazy, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import HangingCard from "./Projects/HangingCard.jsx";
import "./ProjectsSection.css";

const ProjectModal = lazy(() => import("./Projects/ProjectModal.jsx"));

import eventis from "../assets/eventis-project.png";
import portfolio from "../assets/hbeecherhicks-portfolio.png";
import ecommerce from "../assets/furnitureconcepts.png";
import landing from "../assets/prattliving.png";

const projects = [
  {
    title: "Personal Portfolio Website",
    description: "Designed and developed a modern animated portfolio to showcase skills and attract clients.",
    result: "Increased client inquiries and improved personal branding.",
    image: portfolio,
    tech: ["React", "Framer Motion", "GSAP"],
    live: "https://hbeecherhicks.com",
    github: "#",
  },
  {
    title: "WooCommerce Store",
    description: "Built a high-performance WooCommerce store focused on UX and conversions.",
    result: "Improved checkout flow and product engagement.",
    image: ecommerce,
    tech: ["WordPress", "WooCommerce", "Elementor"],
    live: "https://furnitureconcepts.com",
    github: "#",
  },
  {
    title: "Event Booking Platform",
    description: "Created a full event booking system with dashboard and payment flow.",
    result: "Simplified booking process and improved usability.",
    image: eventis,
    tech: ["React", "Node.js"],
    live: "https://eventis.com",
    github: "#",
  },
  {
    title: "Landing Page Design",
    description: "High-converting marketing landing page for lead generation.",
    result: "Improved conversion rate and campaign performance.",
    image: landing,
    tech: ["HTML", "CSS", "JavaScript"],
    live: "https://prattliving.com",
    github: "#",
  },
];

const HangingProjects = () => {
  const [active, setActive] = useState(null);
  const [particlesReady, setParticlesReady] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setParticlesReady(true), 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="hanging-projects">

      <h2 className="section-title">Projects</h2>

      {particlesReady &&
        Array.from({ length: 6 }).map((_, i) => (
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