import "./ProjectsSection.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedTextLink from "./AnimatedTextLink";

import portfolio from "../assets/hbeecherhicks-portfolio.png";
import ecommerce from "../assets/furnitureconcepts.png";
import eventis from "../assets/eventis-project.png";

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "WordPress + Elementor based portfolio designed for client attraction and personal branding.",
    result: "Increased client inquiries and improved personal branding.",
    image: portfolio,
    tech: ["WordPress", "Elementor", "GSAP"],
    live: "https://hbeecherhicks.com",
    slug: "portfolio-site",
  },
  {
    title: "WooCommerce Store",
    description:
      "High-performance eCommerce store built with WooCommerce and Elementor.",
    result: "Improved checkout flow and conversion rate.",
    image: ecommerce,
    tech: ["WordPress", "WooCommerce", "Elementor"],
    live: "https://furnitureconcepts.com",
    slug: "woocommerce-store",
  },
  {
    title: "Event Booking Website",
    description:
      "Booking system with modern UI and smooth user experience.",
    result: "Simplified booking process for users.",
    image: eventis,
    tech: ["WordPress", "Custom UI", "Elementor"],
    live: "https://eventis.com",
    slug: "event-booking",
  },
];

const ProjectsSection = () => {
  return (
    <section className="projects-section">

      {/* HEADER */}
      <div className="projects-header">
        <h2>Featured Projects</h2>

        <p>
          Real WordPress & Elementor projects focused on performance, UX, and business results.
        </p>

        <Link to="/projects" className="view-all-link">
          Explore All Projects →
        </Link>
      </div>

      {/* TIMELINE */}
      <div className="timeline">

        {projects.map((p, i) => (
          <motion.div
            key={i}
            className={`timeline-item ${i % 2 === 0 ? "right" : "left"}`}
            initial={{ opacity: 0, y: 70 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >

            <div className="timeline-card">

              {/* IMAGE */}
              <div className="timeline-image">
                <img src={p.image} alt={p.title} />
                <div className="image-overlay" />
              </div>

              {/* CONTENT */}
              <div className="timeline-content">

                <span className="tag">WORDPRESS • ELEMENTOR</span>

                <h3>{p.title}</h3>

                <p className="desc">{p.description}</p>

                <p className="result">✨ {p.result}</p>

                <div className="tech">
                  {p.tech.map((t, idx) => (
                    <span key={idx}>{t}</span>
                  ))}
                </div>

                {/* ACTION LINKS */}
                <div className="project-buttons">

                  <AnimatedTextLink
                    text="Visit Live Site"
                    href={p.live}
                    target="_blank"
                  />

                  <AnimatedTextLink
                    text="View Case Study"
                    href={`#/projects/${p.slug}`}
                  />

                </div>

              </div>

            </div>

          </motion.div>
        ))}

      </div>
    </section>
  );
};

export default ProjectsSection;