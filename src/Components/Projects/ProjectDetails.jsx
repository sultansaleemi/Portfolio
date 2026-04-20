import { useParams, Link } from "react-router-dom";
import { useRef, useState } from "react";
import "./ProjectDetails.css";

import portfolio from "../../assets/hbeecherhicks-portfolio.png";
import ecommerce from "../../assets/furnitureconcepts.png";
import eventis from "../../assets/eventis-project.png";
import landing from "../../assets/prattliving.png";

const projects = {
  "portfolio-site": {
    title: "Personal Portfolio Website",
    image: portfolio,
    live: "https://hbeecherhicks.com",
    problem: "Client needed strong personal branding.",
    solution: "Built WordPress + Elementor animated portfolio.",
    result: "Increased client inquiries significantly.",
    tech: ["WordPress", "Elementor", "GSAP"],
  },
  "woocommerce-store": {
    title: "WooCommerce Store",
    image: ecommerce,
    live: "https://furnitureconcepts.com",
    problem: "Low conversion and bad UX.",
    solution: "Rebuilt store with optimized UX flow.",
    result: "Improved sales performance.",
    tech: ["WordPress", "WooCommerce", "Elementor"],
  },
  "event-booking": {
    title: "Event Booking Platform",
    image: eventis,
    live: "https://eventis.com",
    problem: "Complicated booking system.",
    solution: "Simplified UI + dashboard system.",
    result: "Faster booking process.",
    tech: ["WordPress", "Custom UI"],
  },
  "landing-page": {
    title: "Landing Page Design",
    image: landing,
    live: "https://prattliving.com",
    problem: "Low converting landing page.",
    solution: "High-conversion UI design.",
    result: "More leads generated.",
    tech: ["HTML", "CSS", "WordPress"],
  },
};

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projects[slug];

  const containerRef = useRef(null);

  const [zoomed, setZoomed] = useState(false);
  const [pos, setPos] = useState({ x: 0, y: 0 });

  const [dragging, setDragging] = useState(false);
  const [start, setStart] = useState({ x: 0, y: 0 });

  if (!project) return <h2>Not Found</h2>;

  // ✅ TOGGLE ZOOM
  const toggleZoom = () => {
    setZoomed((prev) => !prev);
    setPos({ x: 0, y: 0 }); // reset position
  };

  // ✅ START DRAG
  const handleMouseDown = (e) => {
    if (!zoomed) return;

    setDragging(true);
    setStart({
      x: e.clientX - pos.x,
      y: e.clientY - pos.y,
    });
  };

  // ✅ MOVE DRAG
  const handleMouseMove = (e) => {
    if (!dragging || !zoomed) return;

    setPos({
      x: e.clientX - start.x,
      y: e.clientY - start.y,
    });
  };

  // ✅ END DRAG
  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div className="case">

      {/* LEFT SIDE (UNCHANGED) */}
      <div className="case-left">

        <div className="title-area">
          <span>CASE STUDY</span>
          <h1>{project.title}</h1>
        </div>

        <div className="story-card">
          <h3>Problem</h3>
          <p>{project.problem}</p>
        </div>

        <div className="story-card">
          <h3>Solution</h3>
          <p>{project.solution}</p>
        </div>

        <div className="story-card success">
          <h3>Result</h3>
          <p>{project.result}</p>
        </div>

        <div className="tech">
          {project.tech.map((t, i) => (
            <span key={i}>{t}</span>
          ))}
        </div>

        <div className="actions">
          <a href={project.live} target="_blank" rel="noopener noreferrer">
            Visit Live
          </a>
          <Link to="/projects">Back</Link>
        </div>

      </div>

      {/* RIGHT SIDE */}
      <div
        className={`case-right ${zoomed ? "zoomed" : ""}`}
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >

        <div
          className="image-lab"
          onClick={toggleZoom}
          onMouseDown={handleMouseDown}
          style={{
            transform: zoomed
              ? `translate(${pos.x}px, ${pos.y}px) scale(4.5)`
              : "translate(0px, 0px) scale(1)",
            cursor: zoomed ? "grab" : "zoom-in",
          }}
        >
          <img src={project.image} alt={project.title} draggable={false} />
        </div>

        <div className="zoom-ui">
          {zoomed ? "Zoom ON — Drag to explore" : "Click to zoom"}
        </div>

      </div>

    </div>
  );
};

export default ProjectDetails;