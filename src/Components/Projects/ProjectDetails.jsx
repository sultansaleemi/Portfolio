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
    tech: ["WordPress", "Elementor", "GSAP"]
  },

  "woocommerce-store": {
    title: "WooCommerce Store",
    image: ecommerce,
    live: "https://furnitureconcepts.com",
    problem: "Low conversion and bad UX.",
    solution: "Rebuilt store with optimized UX flow.",
    result: "Improved sales performance.",
    tech: ["WordPress", "WooCommerce", "Elementor"]
  },


  "event-booking": {
    title: "Eventis DMC — Corporate Destination Management Website",
    image: eventis,
    live: "https://eventisdmc.com",

    problem:
      "Corporate clients needed a premium, structured platform to understand complex destination management services clearly while building trust for high-value corporate event planning.",

    solution:
      "Designed and developed a full WordPress + Elementor website from scratch with structured service architecture, destination-based content flow, strong visual hierarchy, and conversion-focused UX.",

    result:
      "Delivered a premium corporate digital presence that improved trust, enhanced service clarity, strengthened mobile experience, and increased inquiry quality for enterprise clients.",

    tech: ["WordPress", "Elementor Pro", "HTML", "CSS", "JavaScript"]
  },

  "landing-page": {
    title: "Landing Page Design",
    image: landing,
    live: "https://prattliving.com",
    problem: "Low converting landing page.",
    solution: "High-conversion UI design.",
    result: "More leads generated.",
    tech: ["HTML", "CSS", "WordPress"]
  }
};

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = projects[slug];

  const containerRef = useRef(null);

  const [zoom, setZoom] = useState(1);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);
  const [start, setStart] = useState({ x: 0, y: 0 });

  if (!project) return <h2>Not Found</h2>;

  const handleWheel = (e) => {
    e.preventDefault();

    setZoom((prev) => {
      let next = prev + (e.deltaY > 0 ? -0.2 : 0.2);
      return Math.min(Math.max(next, 1), 4);
    });
  };

  const handleDoubleClick = () => {
    setZoom((z) => (z === 1 ? 2.5 : 1));
    setPan({ x: 0, y: 0 });
  };

  const handleMouseDown = (e) => {
    if (zoom === 1) return;

    setDragging(true);
    setStart({
      x: e.clientX - pan.x,
      y: e.clientY - pan.y,
    });
  };

  const handleMouseMove = (e) => {
    if (!dragging || zoom === 1) return;

    setPan({
      x: e.clientX - start.x,
      y: e.clientY - start.y,
    });
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  return (
    <div className="case">

      {/* LEFT SIDE */}
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
          <a href={project.live} target="_blank" rel="noreferrer">Visit Live</a>
          <Link to="/projects">Back</Link>
        </div>
      </div>

      {/* RIGHT SIDE */}
      <div
        className="case-right"
        ref={containerRef}
        onWheel={handleWheel}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onDoubleClick={handleDoubleClick}
      >
        <div
          className="image-lab"
          onMouseDown={handleMouseDown}
          style={{
            transform: `translate(${pan.x}px, ${pan.y}px) scale(${zoom})`,
            transformOrigin: "center",
            cursor: zoom > 1 ? "grab" : "zoom-in",
            transition: dragging ? "none" : "transform 0.2s ease",
          }}
        >
          <img src={project.image} alt={project.title} draggable={false} />
        </div>

        <div className="zoom-ui">
          {zoom === 1
            ? "Scroll to zoom • Double click to focus"
            : "Drag to explore • Double click reset"}
        </div>
      </div>

    </div>
  );
};

export default ProjectDetails;