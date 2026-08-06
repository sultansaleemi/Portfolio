import "./ProjectsSection.css";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import AnimatedLink from "./AnimatedLink";
import portfolio from "../assets/hbeecherhicks-portfolio.png";
import ecommerce from "../assets/furnitureconcepts.png";
import eventis from "../assets/eventis-project.png";

const projects = [
  {
    title: "Personal Portfolio Website",
    description:
      "WordPress + Elementor based portfolio designed for client attraction and personal branding.",
    result: "3x increase in client inquiries",
    image: portfolio,
    tech: ["WordPress", "Elementor", "GSAP"],
    live: "https://hbeecherhicks.com",
    slug: "portfolio-site",
    icon: "🚀",
  },
  {
    title: "WooCommerce Store",
    description:
      "High-performance eCommerce store built with optimized UX and conversion flow.",
    result: "Improved conversion rate significantly",
    image: ecommerce,
    tech: ["WordPress", "WooCommerce", "Elementor"],
    live: "https://furnitureconcepts.com",
    slug: "woocommerce-store",
    icon: "🛒",
  },
  {
    title: "Event Booking Platform",
    description:
      "Modern booking system with simplified UX and structured flow.",
    result: "Faster booking & reduced drop-offs",
    image: eventis,
    tech: ["WordPress", "Custom UI"],
    live: "https://eventisdmc.com",
    slug: "event-booking",
    icon: "📅",
  },
];

const ProjectsSection = () => {
  return (
    <section className="projects-section">

      {/* HEADER */}
      <div className="projects-header">
        <h2>Featured <span>Case Studies</span></h2>
        <p>
          Real business problems solved with WordPress, UX & performance optimization.
        </p>

        <Link to="/projects" className="view-all-link">
         <span className="flex"> <AnimatedLink
   to="/projects"
   text="View All Projects →"
/></span>
        </Link>
      </div>

      {/* CARDS */}
      <div className="projects-grid">

        {projects.map((p, i) => (
          <motion.div
            key={i}
            className="project-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >

            {/* IMAGE */}
            <div className="project-image">
              <img src={p.image} alt={p.title} />
              <div className="overlay" />
              <div className="icon-badge">{p.icon}</div>
            </div>

            {/* CONTENT */}
            <div className="project-content">

              <span className="tag">CASE STUDY</span>

              <h3>{p.title}</h3>

              <p className="desc">{p.description}</p>

              {/* RESULT (IMPORTANT) */}
              <div className="result">
                <span>Result:</span> {p.result}
              </div>

              {/* TECH */}
              <div className="tech">
                {p.tech.map((t, idx) => (
                  <span key={idx}>{t}</span>
                ))}
              </div>

              {/* BUTTONS */}
              <div className="buttons">
               <AnimatedLink
                href={p.live}
                text="Live Site"
                target="_blank"
                />
                - - -
               <AnimatedLink
                to={`/projects/${p.slug}`}
                text="Case Study"
                />
              

              </div>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
};

export default ProjectsSection;