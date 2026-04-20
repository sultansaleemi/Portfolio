import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import "./Project.css";

import portfolio from "../assets/hbeecherhicks-portfolio.png";
import ecommerce from "../assets/furnitureconcepts.png";
import eventis from "../assets/eventis-project.png";
import landing from "../assets/prattliving.png";

const allProjects = [
  {
    title: "Personal Portfolio Website",
    slug: "portfolio-site",
    image: portfolio,
    type: "WordPress",
    desc: "High-converting personal branding portfolio built with Elementor.",
  },
  {
    title: "WooCommerce Store",
    slug: "woocommerce-store",
    image: ecommerce,
    type: "WooCommerce",
    desc: "Optimized eCommerce store with improved UX and conversions.",
  },
  {
    title: "Event Booking Platform",
    slug: "event-booking",
    image: eventis,
    type: "Custom UI",
    desc: "Smooth booking system with modern UI and flow optimization.",
  },
  {
    title: "Landing Page Design",
    slug: "landing-page",
    image: landing,
    type: "UI/UX",
    desc: "Conversion-focused landing page for marketing campaigns.",
  },
];

const Projects = () => {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All"
      ? allProjects
      : allProjects.filter((p) => p.type === filter);

  return (
    <div className="projects-page">

      {/* HERO */}
      <div className="projects-hero">
        <h1>Featured Work</h1>
        <p>
          A collection of WordPress & Elementor projects focused on performance,
          UX and real business results.
        </p>

        <div className="filters">
          {["All", "WordPress", "WooCommerce", "Custom UI", "UI/UX"].map((f) => (
            <button
              key={f}
              className={filter === f ? "active" : ""}
              onClick={() => setFilter(f)}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      {/* GRID */}
      <div className="projects-grid">

        {filtered.map((p, i) => (
          <motion.div
            key={i}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
          >

            <div className="img-box">
              <img src={p.image} alt={p.title} />

              <div className="overlay">
                <Link to={`/projects/${p.slug}`}>
                  View Case Study →
                </Link>
              </div>
            </div>

            <div className="card-content">
              <span className="tag">{p.type}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>

          </motion.div>
        ))}

      </div>

    </div>
  );
};

export default Projects;